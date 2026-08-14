// Barra superior del sitio público, según el design system (tema claro,
// fija con blur sobre el fondo al 92%). Por ahora solo la usa la Home; el
// AppHeader oscuro sigue vivo en el resto de pantallas.
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useKaTeX } from "../data/teoria/shared.jsx";
import { MATERIAS } from "../data/materias.js";

// Wordmark: "Facto" + "zando" en Sora y la R[i] compuesta en modo matemático
// (KaTeX). La R va en negrita sólida (\mathbf) en vez de la pizarra doble
// (\mathbb): a 19px el hueco de la doble línea se cerraba y no resaltaba.
export function FxWordmark({ size = 19 }) {
  const ready = useKaTeX();
  const ref = useRef(null);
  useEffect(() => {
    if (ready && window.katex && ref.current) {
      try {
        window.katex.render("\\mathbf{R}[i]", ref.current, {
          throwOnError: false,
          displayMode: false,
        });
      } catch { /* se queda el fallback */ }
    }
  }, [ready]);
  return (
    <span className="fx-wordmark" style={{ fontSize: size }}>
      Facto<span className="fx-wordmark-math" ref={ref}>R[i]</span>zando
    </span>
  );
}

// Marca. `to` permite apagar el enlace donde no haga falta.
export function FxMarca({ wordmark = 19, to = "/" }) {
  return to ? (
    <Link to={to} className="fx-marca" title="Inicio"><FxWordmark size={wordmark} /></Link>
  ) : (
    <span className="fx-marca"><FxWordmark size={wordmark} /></span>
  );
}

export default function FxHeader({ onLogin, onRegistro, ctaLabel = "Comenzar" }) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // "Exámenes" es un ancla dentro de la Home. Con HashRouter no se puede usar
  // href="#examenes" (el hash ES la ruta), así que se resuelve por scroll; y
  // desde otra pantalla, volviendo a la Home primero.
  const irAExamenes = useCallback(() => {
    setMenuAbierto(false);
    const scroll = () =>
      document.getElementById("examenes")?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (location.pathname === "/") scroll();
    else { navigate("/"); setTimeout(scroll, 120); }
  }, [location.pathname, navigate]);

  // El menú móvil se cierra al pasar a escritorio para no quedar colgado.
  useEffect(() => {
    const alRedimensionar = () => {
      if (window.innerWidth >= 900) setMenuAbierto(false);
    };
    window.addEventListener("resize", alRedimensionar);
    return () => window.removeEventListener("resize", alRedimensionar);
  }, []);

  const cerrar = () => setMenuAbierto(false);

  return (
    <header className="fx-nav">
      <style>{CSS}</style>

      <div className="fx-nav-fila">
        <FxMarca />

        <nav className="fx-nav-links">
          <button type="button" className="fx-nav-link" onClick={irAExamenes}>Exámenes</button>
          {MATERIAS.map((m) => (
            <Link
              key={m.slug}
              to={`/materia/${m.slug}`}
              className={`fx-nav-link fx-nav-link-${m.acento}`}
            >
              {m.nombre}
            </Link>
          ))}
        </nav>

        <div className="fx-nav-acciones">
          <button type="button" className="fx-nav-entrar" onClick={onLogin}>Entrar</button>
          <button type="button" className="fx-btn-primario fx-btn-sm" onClick={onRegistro}>
            {ctaLabel}
          </button>
          <button
            type="button"
            className="fx-nav-hamburguesa"
            onClick={() => setMenuAbierto((v) => !v)}
            aria-label="Abrir menú"
            aria-expanded={menuAbierto}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {menuAbierto && (
        <div className="fx-nav-movil">
          <button type="button" className="fx-nav-movil-item" onClick={irAExamenes}>Exámenes</button>
          <span className="fx-nav-movil-titulo">Materias</span>
          <div className="fx-nav-movil-grid">
            {MATERIAS.map((m) => (
              <Link
                key={m.slug}
                to={`/materia/${m.slug}`}
                className="fx-nav-movil-materia"
                onClick={cerrar}
              >
                <span className="fx-punto" style={{ background: `var(--fx-${m.acento})` }} />
                {m.nombre}
              </Link>
            ))}
          </div>
          <button type="button" className="fx-nav-movil-entrar" onClick={() => { cerrar(); onLogin?.(); }}>
            Entrar
          </button>
        </div>
      )}
    </header>
  );
}

const CSS = `
.fx-nav { position: sticky; top: 0; z-index: 20; background: rgba(247,249,252,0.92);
  backdrop-filter: blur(10px); border-bottom: 1px solid var(--fx-border); }
.fx-nav-fila { max-width: var(--fx-container); margin: 0 auto; padding: 16px var(--fx-gutter);
  display: flex; align-items: center; gap: clamp(16px, 2.4vw, 32px); }
/* MARCA */
.fx-marca { display: flex; align-items: center; gap: 10px; text-decoration: none; flex: 0 0 auto; }
.fx-marca:hover { text-decoration: none; }
.fx-wordmark { font-family: var(--fx-font-heading); font-weight: 600; letter-spacing: -0.02em;
  color: var(--fx-text-heading); white-space: nowrap; }
.fx-wordmark-math { color: var(--fx-primary-500); font-family: var(--fx-font-math); font-weight: 700; }
.fx-wordmark-math .katex { color: var(--fx-primary-500); font-size: .95em; }
/* NAVEGACIÓN */
.fx-nav-links { display: flex; align-items: center; gap: 2px; flex: 1 1 auto; min-width: 0;
  overflow-x: auto; white-space: nowrap; scrollbar-width: none; padding: 2px 0; }
.fx-nav-links::-webkit-scrollbar { display: none; }
/* La navegación es interfaz, no texto de lectura: se queda en 16px aunque el
   cuerpo suba, o los ocho elementos no caben en pantallas medianas. */
.fx-nav-link { font-family: var(--fx-font-body); font-size: 16px; font-weight: 500;
  color: var(--fx-text-body); padding: 8px 10px; border-radius: var(--fx-radius-sm);
  text-decoration: none; background: none; border: none; cursor: pointer; line-height: 1.4;
  transition: background var(--fx-transition), color var(--fx-transition); }
.fx-nav-link:hover { background: var(--fx-primary-50); color: var(--fx-primary-700); text-decoration: none; }
.fx-nav-link-sage:hover { background: var(--fx-sage-tint); color: var(--fx-sage-text); }
.fx-nav-link-coral:hover { background: var(--fx-coral-tint); color: var(--fx-coral-text); }
.fx-nav-link-amber:hover { background: var(--fx-amber-tint); color: var(--fx-amber-text); }
.fx-nav-link-indigo:hover { background: var(--fx-indigo-tint); color: var(--fx-indigo-text); }
/* ACCIONES */
.fx-nav-acciones { display: flex; align-items: center; gap: 12px; flex: 0 0 auto; margin-left: auto; }
.fx-nav-entrar { font-family: var(--fx-font-body); font-size: 16px; font-weight: 600;
  color: var(--fx-primary-700); background: none; border: none; padding: 10px 14px;
  border-radius: 9px; cursor: pointer; transition: background var(--fx-transition); }
.fx-nav-entrar:hover { background: var(--fx-primary-50); }
.fx-nav-hamburguesa { display: none; width: 44px; height: 44px; flex: none;
  flex-direction: column; align-items: center; justify-content: center; gap: 5px;
  background: var(--fx-surface); border: 1px solid var(--fx-border);
  border-radius: var(--fx-radius-md); cursor: pointer; padding: 0; }
.fx-nav-hamburguesa:hover { border-color: var(--fx-primary-200); }
.fx-nav-hamburguesa span { width: 19px; height: 2px; border-radius: 1px; background: var(--fx-text-heading); }
/* MENÚ MÓVIL */
.fx-nav-movil { border-top: 1px solid var(--fx-border); background: var(--fx-surface);
  padding: 10px var(--fx-gutter) 22px; box-shadow: 0 16px 30px -22px rgba(10,37,64,0.35); }
.fx-nav-movil-item { display: flex; align-items: center; width: 100%; min-height: 48px;
  font-family: var(--fx-font-body); font-size: 17px; font-weight: 600;
  color: var(--fx-text-heading); text-decoration: none;
  background: none; border: none; padding: 0; cursor: pointer; }
.fx-nav-movil-titulo { display: block; font-family: var(--fx-font-mono); font-size: 11.5px;
  letter-spacing: 0.13em; text-transform: uppercase; color: var(--fx-text-muted);
  padding: 12px 0 6px; border-top: 1px solid var(--fx-surface-sunken); }
.fx-nav-movil-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 2px; }
.fx-nav-movil-materia { display: flex; align-items: center; gap: 12px; min-height: 48px;
  padding: 0 6px; font-family: var(--fx-font-body); font-size: 17px; font-weight: 500;
  color: var(--fx-text-heading); text-decoration: none; border-radius: var(--fx-radius-sm); }
.fx-nav-movil-materia:hover { background: var(--fx-bg); text-decoration: none; }
.fx-punto { width: 9px; height: 9px; border-radius: 50%; flex: none; }
.fx-nav-movil-entrar { display: flex; align-items: center; width: 100%; min-height: 48px;
  margin-top: 10px; padding-top: 12px; border: none; border-top: 1px solid var(--fx-surface-sunken);
  background: none; font-family: var(--fx-font-body); font-size: 17px; font-weight: 600;
  color: var(--fx-primary-500); cursor: pointer; }
/* RESPONSIVO — el corte del diseño está en 900px. */
@media (max-width: 899px) {
  .fx-nav-links { display: none; }
  .fx-nav-entrar { display: none; }
  .fx-nav-hamburguesa { display: flex; }
}
@media (max-width: 420px) {
  .fx-wordmark { display: none; }
}
`;
