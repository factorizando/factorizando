// Combobox escribible con el estilo del sistema claro.
//
// Reemplaza a los <select> nativos y a los <datalist> en formularios: la lista
// se filtra escribiendo, las opciones miden 44px y en teléfono se abre como
// hoja inferior para que el teclado no la tape.
//
// Uso:
//   <Combo value={estado} onChange={setEstado} options={ESTADOS}
//     placeholder="Selecciona…" textoVacio="Sin resultados" />
// `options` acepta strings o { value, label }; `onChange` recibe el value.
// Si el valor no está en la lista se muestra tal cual (texto libre).
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";

function normalizar(s) {
  return (s || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export default function Combo({
  value,
  onChange,
  options = [],
  placeholder = "Selecciona…",
  disabled = false,
  textoVacio = "Sin resultados",
  ...rest
}) {
  const [abierto, setAbierto] = useState(false);
  const [filtro, setFiltro] = useState(value || "");
  const [resaltado, setResaltado] = useState(-1);
  const raizRef = useRef(null);
  const entradaRef = useRef(null);
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const listaId = `combo-lista-${uid}`;

  const normalizadas = useMemo(
    () => (options || []).map((o) =>
      typeof o === "string" ? { value: o, label: o } : o
    ),
    [options]
  );

  const etiqueta = useMemo(() => {
    const hallada = normalizadas.find((o) => o.value === value);
    return hallada ? hallada.label : (value || "");
  }, [normalizadas, value]);

  const filtradas = useMemo(() => {
    const f = normalizar(filtro);
    if (!f) return normalizadas;
    return normalizadas.filter((o) =>
      normalizar(o.label).includes(f) || normalizar(o.value).includes(f)
    );
  }, [normalizadas, filtro]);

  // Al abrir se muestra la lista completa (toques el campo o la flecha); el
  // valor actual queda marcado. Escribir filtra.
  function abrir() {
    if (disabled) return;
    setFiltro("");
    setResaltado(-1);
    setAbierto(true);
    requestAnimationFrame(() => {
      entradaRef.current?.focus();
    });
  }

  function cerrar(revertir = true) {
    setAbierto(false);
    setResaltado(-1);
    if (revertir) setFiltro(etiqueta);
  }

  function elegir(op) {
    onChange(op.value);
    setFiltro(op.label);
    setAbierto(false);
    setResaltado(-1);
    entradaRef.current?.blur();
  }

  // Cerrar con clic/tap fuera.
  useEffect(() => {
    if (!abierto) return;
    const alPulsar = (e) => {
      if (raizRef.current && !raizRef.current.contains(e.target)) cerrar(true);
    };
    document.addEventListener("mousedown", alPulsar);
    document.addEventListener("touchstart", alPulsar, { passive: true });
    return () => {
      document.removeEventListener("mousedown", alPulsar);
      document.removeEventListener("touchstart", alPulsar);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [abierto]);

  // Si el valor cambia desde fuera (carga del perfil), reflejarlo.
  useEffect(() => { if (!abierto) setFiltro(etiqueta); }, [etiqueta, abierto]);

  // Mantener visible la opción resaltada con el teclado.
  useEffect(() => {
    if (!abierto || resaltado < 0) return;
    document.getElementById(`${listaId}-op-${resaltado}`)
      ?.scrollIntoView({ block: "nearest" });
  }, [abierto, resaltado, listaId]);

  // En teléfono, el teclado tapa la hoja fija: se sube lo que mida el teclado
  // (Visual Viewport API). Solo aplica al modo hoja (≤ 480px).
  const [ajusteTeclado, setAjusteTeclado] = useState(0);
  useEffect(() => {
    if (!abierto) { setAjusteTeclado(0); return; }
    const movil = window.matchMedia("(max-width: 480px)").matches;
    const vv = window.visualViewport;
    if (!movil || !vv) return;
    const actualizar = () => {
      setAjusteTeclado(Math.max(0, window.innerHeight - vv.height - (vv.offsetTop || 0)));
    };
    actualizar();
    vv.addEventListener("resize", actualizar);
    vv.addEventListener("scroll", actualizar);
    return () => {
      vv.removeEventListener("resize", actualizar);
      vv.removeEventListener("scroll", actualizar);
    };
  }, [abierto]);

  function alTeclar(e) {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!abierto) { abrir(); return; }
      const d = e.key === "ArrowDown" ? 1 : -1;
      setResaltado((r) => {
        if (filtradas.length === 0) return -1;
        const n = r + d;
        if (n < 0) return filtradas.length - 1;
        if (n >= filtradas.length) return 0;
        return n;
      });
    } else if (e.key === "Enter") {
      if (abierto && resaltado >= 0 && filtradas[resaltado]) {
        e.preventDefault();
        elegir(filtradas[resaltado]);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      cerrar(true);
      entradaRef.current?.blur();
    }
  }

  return (
    <div className="combo" ref={raizRef}>
      <style>{CSS}</style>
      <input
        ref={entradaRef}
        className="combo-entrada"
        {...rest}
        role="combobox"
        aria-expanded={abierto}
        aria-controls={listaId}
        aria-activedescendant={resaltado >= 0 ? `${listaId}-op-${resaltado}` : undefined}
        aria-autocomplete="list"
        value={abierto ? filtro : etiqueta}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete="off"
        onFocus={() => { if (!abierto) abrir(); }}
        onChange={(e) => {
          setFiltro(e.target.value);
          setResaltado(-1);
          if (!abierto) setAbierto(true);
        }}
        onKeyDown={alTeclar}
      />
      <button
        type="button"
        className="combo-flecha"
        tabIndex={-1}
        aria-hidden="true"
        disabled={disabled}
        onClick={() => (abierto ? cerrar(true) : abrir())}
      >
        <ChevronDown size={18} className={abierto ? "combo-flecha-arriba" : ""} />
      </button>
      {abierto && (
        <div
          className="combo-desplegable"
          style={ajusteTeclado > 0 ? { bottom: 12 + ajusteTeclado } : undefined}
        >
          <ul className="combo-lista" role="listbox" id={listaId}>
            {filtradas.length === 0 ? (
              <li className="combo-vacio" role="presentation">{textoVacio}</li>
            ) : filtradas.map((op, i) => {
              const elegida = op.value === value;
              return (
                <li
                  key={op.value}
                  id={`${listaId}-op-${i}`}
                  role="option"
                  aria-selected={elegida}
                  className={`combo-opcion${i === resaltado ? " combo-opcion-resaltada" : ""}${elegida ? " combo-opcion-elegida" : ""}`}
                  onMouseDown={(e) => { e.preventDefault(); elegir(op); }}
                >
                  <span>{op.label}</span>
                  {elegida && <Check size={16} aria-hidden="true" />}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

const CSS = `
.combo { position: relative; }
.combo-entrada { width: 100%; min-height: var(--fx-control-md); padding: 10px 40px 10px 13px;
  background: var(--fx-surface); border: 1px solid var(--fx-border); border-radius: var(--fx-radius-md);
  color: var(--fx-text-heading); font-family: inherit; font-size: var(--fx-small-size); outline: none;
  transition: border-color var(--fx-transition), box-shadow var(--fx-transition); }
.combo-entrada:focus { border-color: var(--fx-primary-400); box-shadow: var(--fx-focus-ring); }
.combo-entrada::placeholder { color: var(--fx-text-disabled); }
.combo-entrada:disabled { opacity: .6; }
.combo-flecha { position: absolute; right: 6px; top: 50%; transform: translateY(-50%);
  display: grid; place-items: center; width: 32px; height: 32px; border: none; background: none;
  color: var(--fx-text-muted); cursor: pointer; border-radius: var(--fx-radius-sm); }
.combo-flecha svg { transition: transform var(--fx-transition); }
.combo-flecha-arriba { transform: rotate(180deg); }
.combo-desplegable { position: absolute; top: 100%; left: 0; right: 0; z-index: 40; margin-top: 4px; }
.combo-lista { margin: 0; padding: 4px; list-style: none; background: var(--fx-surface);
  border: 1px solid var(--fx-border); border-radius: var(--fx-radius-md);
  box-shadow: var(--fx-shadow-float); max-height: 260px; overflow-y: auto; }
.combo-opcion { display: flex; align-items: center; justify-content: space-between; gap: 10px;
  min-height: 44px; padding: 8px 12px; border-radius: var(--fx-radius-sm); cursor: pointer;
  font-size: var(--fx-small-size); color: var(--fx-text-body); }
.combo-opcion-resaltada, .combo-opcion:hover { background: var(--fx-surface-sunken); }
.combo-opcion-elegida { color: var(--fx-text-heading); font-weight: 600; }
.combo-opcion-elegida svg { color: var(--fx-primary-600); flex: none; }
.combo-vacio { padding: 12px; font-size: var(--fx-small-size); color: var(--fx-text-muted); }
@media (max-width: 480px) {
  .combo-entrada, .combo-opcion { font-size: 16px; }
  .combo-desplegable { position: fixed; left: 12px; right: 12px; bottom: 12px; top: auto;
    margin: 0; z-index: 200; padding-top: 14px; }
  .combo-desplegable::before { content: ""; position: absolute; top: 0; left: 50%;
    transform: translateX(-50%); width: 44px; height: 4px; border-radius: 99px;
    background: var(--fx-border-strong); }
  .combo-lista { max-height: 46dvh; }
}
`;
