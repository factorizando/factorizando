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
//
// El tamaño viaja como variable CSS, no como `style={{fontSize}}`: un estilo
// en línea gana a cualquier media query, y era la razón de que en móvil no
// hubiera más salida que esconder la marca entera.
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
    <span className="fx-wordmark" style={{ "--fx-wordmark-size": `${size}px` }}>
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
  // El scroll espera un fotograma tras cerrar el menú: mientras el panel está
  // abierto el desplazamiento del cuerpo está bloqueado, y el destino se mide
  // con la maquetación ya asentada.
  const irAExamenes = useCallback(() => {
    setMenuAbierto(false);
    const scroll = () =>
      requestAnimationFrame(() =>
        document.getElementById("examenes")?.scrollIntoView({ behavior: "smooth", block: "start" }));
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

  // Abierto, el menú se cierra con Escape y bloquea el desplazamiento del
  // fondo: sin esto, en un teléfono se arrastra la página de debajo mientras el
  // panel sigue encima y la marca deja de coincidir con lo que se está leyendo.
  useEffect(() => {
    if (!menuAbierto) return;
    const alTeclear = (e) => { if (e.key === "Escape") setMenuAbierto(false); };
    const previo = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", alTeclear);
    return () => {
      document.body.style.overflow = previo;
      window.removeEventListener("keydown", alTeclear);
    };
  }, [menuAbierto]);

  // Y al navegar a otra ruta, aunque el destino no pase por `cerrar`.
  useEffect(() => { setMenuAbierto(false); }, [location.pathname]);

  const cerrar = () => setMenuAbierto(false);

  return (
    <>
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

        {/* En móvil aquí solo queda la hamburguesa: "Entrar" y el CTA se van
            los dos al panel. Antes el CTA competía en la barra con la marca en
            300 px de ancho y la marca era la que perdía. */}
        <div className="fx-nav-acciones">
          <button type="button" className="fx-nav-entrar" onClick={onLogin}>Entrar</button>
          <button type="button" className="fx-btn-primario fx-btn-sm fx-nav-cta" onClick={onRegistro}>
            {ctaLabel}
          </button>
          <button
            type="button"
            className="fx-nav-hamburguesa"
            onClick={() => setMenuAbierto((v) => !v)}
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuAbierto}
            aria-controls="fx-menu-movil"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {menuAbierto && (
        <>
          <div className="fx-nav-movil" id="fx-menu-movil">
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
            {/* Las dos acciones de cuenta, en el orden en que se ofrecen: la
                principal como botón lleno, "Entrar" debajo para quien ya la tiene. */}
            <div className="fx-nav-movil-cuenta">
              <button
                type="button"
                className="fx-btn-primario fx-nav-movil-cta"
                onClick={() => { cerrar(); onRegistro?.(); }}
              >
                {ctaLabel}
              </button>
              <button type="button" className="fx-nav-movil-entrar" onClick={() => { cerrar(); onLogin?.(); }}>
                Entrar
              </button>
            </div>
          </div>
        </>
      )}
      </header>
      {/* El velo va FUERA del header a propósito: `backdrop-filter` en `.fx-nav`
          lo convierte en bloque contenedor, y ahí dentro un `position: fixed`
          se recorta a la barra en vez de cubrir la pantalla. */}
      {menuAbierto && <div className="fx-nav-velo" onClick={cerrar} aria-hidden="true" />}
    </>
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
  font-size: var(--fx-wordmark-size, 19px);
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
.fx-nav-movil-cuenta { display: flex; flex-direction: column; gap: 4px; margin-top: 14px;
  padding-top: 16px; border-top: 1px solid var(--fx-surface-sunken); }
.fx-nav-movil-cta { width: 100%; min-height: 50px; font-size: 17px; }
.fx-nav-movil-entrar { display: flex; align-items: center; justify-content: center;
  width: 100%; min-height: 48px; border: none;
  background: none; font-family: var(--fx-font-body); font-size: 17px; font-weight: 600;
  color: var(--fx-primary-500); cursor: pointer; }
/* El panel es una hoja desplegable, no una capa flotante: el velo solo apaga y
   captura el toque de lo que queda debajo, por debajo de la barra (z 20). */
.fx-nav-velo { position: fixed; inset: 0; z-index: 19; background: rgba(10,37,64,0.28); }
/* RESPONSIVO — el corte del diseño está en 900px.
   La marca NO se esconde en ningún ancho: es lo único que dice dónde está el
   usuario. Lo que se va es el CTA, que baja al panel; con la barra vacía de
   botones el wordmark cabe entero hasta en 320px, y aun así baja un punto para
   no pegarse a la hamburguesa. */
@media (max-width: 899px) {
  .fx-nav-links { display: none; }
  .fx-nav-entrar { display: none; }
  .fx-nav-cta { display: none; }
  .fx-nav-hamburguesa { display: flex; }
  /* El panel FLOTA bajo la barra en vez de ir en el flujo. Yendo en el flujo
     añadía ~870px de alto al header y empujaba la página entera hacia abajo:
     el salto a un ancla se calculaba con esa altura y, al cerrarse el menú,
     aterrizaba 870px más abajo de lo debido. */
  .fx-nav-movil { position: absolute; top: 100%; left: 0; right: 0;
    max-height: calc(100dvh - 76px); overflow-y: auto; }
}
@media (max-width: 420px) {
  .fx-nav-fila { padding-top: 12px; padding-bottom: 12px; }
  .fx-wordmark { font-size: 18px; }
}
`;
