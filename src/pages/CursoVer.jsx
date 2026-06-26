// Lienzo de curso (estilo Coursera): barra superior + sidebar de contenido
// (Sección → Subsección → habilidades) + pizarra central que carga el recurso
// seleccionado. Prototipo: candado decorativo, sin panel derecho, progreso visual.
import { useState, useMemo, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useKaTeX } from "../data/teoria/shared.jsx";
import { buscarCurso } from "../data/cursos/cursosIndex.js";
import { buscarPresentacion } from "../data/presentaciones/presentacionesIndex.js";
import { buscarDocumento } from "../data/documentos/documentosIndex.js";
import { obtenerTema } from "../data/presentaciones/temas.jsx";
import SlideRenderer from "../components/SlideRenderer.jsx";
import DocumentoRenderer from "../components/DocumentoRenderer.jsx";
import { ICONOS } from "../components/iconos";

const ETIQUETA = { presentacion: "Presentación", documento: "Documento", cuestionario: "Cuestionario", video: "Video" };

// Wordmark "FactoℝR[i]zando": "Facto" + "zando" en la tipografía de marca y
// la ℝ[i] en modo matemático (KaTeX), heredando el mismo color del resto.
function BrandName() {
  const ready = useKaTeX();
  const ref = useRef(null);
  useEffect(() => {
    if (ready && window.katex && ref.current) {
      try {
        window.katex.render("\\mathbb{R}[i]", ref.current, { throwOnError: false, displayMode: false });
      } catch { /* deja el fallback */ }
    }
  }, [ready]);
  return (
    <span className="cv-brand-name">
      Facto<span className="cv-brand-math" ref={ref}>ℝ[i]</span>zando
    </span>
  );
}

// Ícono del curso: SVG registrado si `icono` es una clave de ICONOS; si no, emoji.
function IconoCurso({ icono, size = 20 }) {
  const C = ICONOS[icono];
  return C ? <C size={size} /> : <span>{icono}</span>;
}

// Ícono "panel lateral" (estilo Claude web): rectángulo redondeado con divisor.
function IconoPanel({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18" />
    </svg>
  );
}

export default function CursoVer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const curso = buscarCurso(id);

  const [abiertaSec, setAbiertaSec] = useState(0); // índice de la única sección abierta (acordeón)
  const [sel, setSel] = useState(null);                         // { hab, key }
  const [sidebarVisible, setSidebarVisible] = useState(
    () => (typeof window === "undefined" ? true : window.innerWidth > 820)
  );

  const todas = useMemo(
    () => (curso?.secciones || []).flatMap((s) => s.subsecciones.flatMap((ss) => ss.habilidades || [])),
    [curso]
  );

  if (!curso) {
    return <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", fontFamily: "monospace" }}>Curso no encontrado: {id}</div>;
  }

  const total = todas.length;
  const hechas = todas.filter((h) => h.completado).length;
  const pct = total ? Math.round((hechas / total) * 100) : 0;
  const estrellas = Math.max(0, Math.min(3, Math.round((pct / 100) * 3)));

  const toggleSeccion = (i) => setAbiertaSec((prev) => (prev === i ? null : i));

  return (
    <div className="cv-root">
      <style>{CSS}</style>

      {/* ── BARRA SUPERIOR ── */}
      <header className="cv-top">
        <div className="cv-brand">
          <Link to="/" className="cv-logo-link" title="Inicio">
            <span className="cv-logo-ring">
              <img src={`${import.meta.env.BASE_URL}assets/logoX.png`} alt="Factorizando" />
            </span>
          </Link>
          <BrandName />
          <span className="cv-sep">|</span>
          <button className="cv-materia-trigger" type="button" title="Cambiar materia / curso (próximamente)">
            {curso.area}
            <svg className="cv-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
          </button>
        </div>
        <div className="cv-progreso">
          <span className="cv-progreso-txt">{hechas}/{total} habilidades</span>
          <div className="cv-bar"><div className="cv-bar-fill" style={{ width: `${pct}%` }} /></div>
          <span className="cv-stars">{"★".repeat(estrellas)}<span className="cv-stars-off">{"★".repeat(3 - estrellas)}</span></span>
        </div>
        <div className="cv-cuenta">
          <span className="cv-avatar">J</span>
        </div>
      </header>

      <div className="cv-body">
        {/* ── SIDEBAR / RAIL ── */}
        {sidebarVisible ? (
          <aside className="cv-side">
            <div className="cv-side-hd">
              <span className="cv-side-hd-tit"><IconoCurso icono={curso.icono} size={24} /> {curso.area}</span>
              <button className="cv-x" onClick={() => setSidebarVisible(false)} title="Contraer menú" aria-label="Contraer menú"><IconoPanel /></button>
            </div>

            {curso.secciones.map((sec, si) => {
              const abierta = abiertaSec === si;
              return (
                <div className="cv-sec" key={sec.id}>
                  <button className="cv-sec-hd" onClick={() => toggleSeccion(si)}>
                    <div className="cv-sec-tit">
                      <div className="cv-sec-num">Sección {si + 1}</div>
                      <div className="cv-sec-nombre">{sec.titulo}</div>
                    </div>
                  </button>

                  {abierta && (
                    <div className="cv-sec-body">
                      {sec.subsecciones.map((ss) => {
                      // Subsección que ES un documento (curso de probabilidad)
                      if (ss.documentoRef || (ss.proximamente && !ss.habilidades)) {
                        const key = `${sec.id}/${ss.id}`;
                        const activa = sel?.key === key;
                        const prox = !ss.documentoRef;
                        return (
                          <button
                            key={ss.id}
                            className={`cv-hab${activa ? " activa" : ""}${prox ? " prox" : ""}`}
                            onClick={() => !prox && setSel({ hab: { tipo: "documento", ref: ss.documentoRef, titulo: ss.titulo }, key })}
                          >
                            <span className="cv-hab-txt">
                              <span className="cv-hab-tit">{ss.titulo}</span>
                              <span className="cv-hab-meta">Lección{prox ? " · próximamente" : ""}</span>
                            </span>
                          </button>
                        );
                      }
                      // Subsección que agrupa habilidades (curso de geometría)
                      return (
                        <div className="cv-sub" key={ss.id}>
                          <div className="cv-sub-tit">{ss.titulo}</div>
                          {(ss.habilidades || []).map((h, hi) => {
                            const key = `${sec.id}/${ss.id}/${hi}`;
                            const activa = sel?.key === key;
                            return (
                              <button
                                key={key}
                                className={`cv-hab${activa ? " activa" : ""}${h.proximamente ? " prox" : ""}`}
                                onClick={() => !h.proximamente && setSel({ hab: h, key })}
                              >
                                <span className="cv-hab-txt">
                                  <span className="cv-hab-tit">{h.titulo}</span>
                                  <span className="cv-hab-meta">
                                    {ETIQUETA[h.tipo] || h.tipo}{h.duracion ? ` · ${h.duracion}` : ""}
                                    {h.proximamente ? " · próximamente" : ""}
                                  </span>
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </aside>
        ) : (
          <nav className="cv-rail">
            <button className="cv-rail-btn" onClick={() => setSidebarVisible(true)} title="Expandir menú" aria-label="Expandir menú"><IconoPanel /></button>
            <div className="cv-rail-curso" title={curso.area}><IconoCurso icono={curso.icono} size={38} /></div>
            <div className="cv-rail-secs">
              {curso.secciones.map((sec, si) => (
                <div className="cv-rail-grupo" key={sec.id}>
                  <button
                    className="cv-rail-sec"
                    title={`Sección ${si + 1} · ${sec.titulo}`}
                    onClick={() => {
                      setAbiertaSec(si);
                      setSidebarVisible(true);
                    }}
                  >
                    {si + 1}
                  </button>
                  <div className="cv-rail-dots">
                    {sec.subsecciones.map((ss) => {
                      const key = `${sec.id}/${ss.id}`;
                      const activa = sel?.key === key;
                      const prox = !ss.documentoRef && !ss.habilidades;
                      return (
                        <button
                          key={ss.id}
                          className={`cv-rail-dot${activa ? " activa" : ""}${prox ? " prox" : ""}`}
                          title={ss.titulo}
                          aria-label={ss.titulo}
                          onClick={() => {
                            if (prox) return;
                            setAbiertaSec(si);
                            if (ss.documentoRef) {
                              setSel({ hab: { tipo: "documento", ref: ss.documentoRef, titulo: ss.titulo }, key });
                            } else {
                              setSidebarVisible(true);
                            }
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </nav>
        )}

        {/* ── PIZARRA ── */}
        <main className="cv-pizarra">
          {sel ? (
            <Pizarra key={sel.key} hab={sel.hab} navigate={navigate} />
          ) : (
            <Bienvenida curso={curso} pct={pct} />
          )}
        </main>
      </div>
    </div>
  );
}

/* ── Contenido de la pizarra según el tipo de habilidad ── */
function Pizarra({ hab, navigate }) {
  if (hab.tipo === "presentacion") return <PizarraPresentacion presId={hab.ref} />;
  if (hab.tipo === "documento") return <PizarraDocumento docId={hab.ref} />;
  if (hab.tipo === "cuestionario") {
    return (
      <div className="cv-card">
        <h2>{hab.titulo}</h2>
        <p>Cuestionario · {hab.duracion || ""}</p>
        {hab.ref
          ? <button className="cv-btn" onClick={() => navigate(`/cuestionario/${hab.ref}`)}>Comenzar cuestionario</button>
          : <p className="cv-prox">Este cuestionario aún no está disponible.</p>}
      </div>
    );
  }
  return <div className="cv-card"><p>Tipo no soportado: {hab.tipo}</p></div>;
}

function PizarraPresentacion({ presId }) {
  const pres = buscarPresentacion(presId);
  const tema = obtenerTema(pres?.materia);
  const [idx, setIdx] = useState(0);
  if (!pres) return <div className="cv-card"><p>Presentación no encontrada: {presId}</p></div>;
  const slides = pres.slides || [];
  const slide = slides[idx];
  return (
    <div className="cv-pres">
      <div className="cv-pres-nav">
        <button className="cv-btn-sm" disabled={idx === 0} onClick={() => setIdx((i) => Math.max(0, i - 1))}>‹ Anterior</button>
        <span className="cv-pres-pos">{pres.titulo} — {idx + 1}/{slides.length}</span>
        <button className="cv-btn-sm" disabled={idx >= slides.length - 1} onClick={() => setIdx((i) => Math.min(slides.length - 1, i + 1))}>Siguiente ›</button>
      </div>
      <div className="cv-pres-slide">
        <SlideRenderer slide={slide} tema={tema} modo="alumno" />
      </div>
    </div>
  );
}

function PizarraDocumento({ docId }) {
  const doc = buscarDocumento(docId);
  if (!doc) return <div className="cv-card"><p>Documento no encontrado: {docId}</p></div>;
  return <DocumentoRenderer doc={doc} embebido />;
}

function Bienvenida({ curso, pct }) {
  return (
    <div className="cv-bienvenida">
      <div className="cv-bien-ic">{curso.icono}</div>
      <h1>{curso.area}</h1>
      <p>Selecciona una habilidad en el panel de contenido para empezar.</p>
      <div className="cv-bien-bar"><div style={{ width: `${pct}%` }} /></div>
      <span className="cv-bien-pct">{pct}% completado</span>
    </div>
  );
}

const CSS = `
/* Alias locales mapeados a los tokens globales (ver src/styles/theme.css).
   Cambiar el tema = redefinir los tokens globales; este componente no se toca. */
.cv-root { --azul: var(--brand); --tinta: var(--text); --gris: var(--text-muted); --linea: var(--border);
  font-family: var(--font-ui); color: var(--tinta); height: 100vh; display: flex; flex-direction: column; background: var(--bg); }
.cv-root * { box-sizing: border-box; }
/* TOP */
.cv-top { display: flex; align-items: center; justify-content: space-between; gap: 16px; height: 56px; padding: 0 18px; background: var(--bg); border-bottom: 1px solid var(--border-soft); flex-shrink: 0; }
.cv-brand { display: flex; align-items: center; gap: 9px; font-weight: 700; }
.cv-logo-link { display: inline-flex; align-items: center; }
.cv-logo-ring { display: inline-block; width: 34px; height: 34px; border-radius: 50%; border: 1px dashed var(--border-strong); overflow: hidden; flex-shrink: 0; }
.cv-logo-ring img { width: 100%; height: 100%; object-fit: cover; display: block; }
.cv-brand-math { color: var(--azul-suave); }
.cv-brand-math .katex { color: var(--azul-suave); }
.cv-brand-name { font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 700; font-size: clamp(16px, 3.4vw, 20px); letter-spacing: .01em; color: var(--azul); white-space: nowrap; }
.cv-sep { color: var(--linea); font-weight: 400; }
.cv-materia-trigger { display: inline-flex; align-items: center; gap: 6px; background: none; border: none; color: var(--tinta); font-weight: 600; font-size: 14px; cursor: pointer; padding: 4px 8px; border-radius: 8px; }
.cv-materia-trigger:hover { background: var(--surface-2); }
.cv-chevron { opacity: .55; }
.cv-progreso { display: flex; align-items: center; gap: 12px; }
.cv-progreso-txt { font-size: 13px; color: var(--text); }
.cv-bar { width: 180px; height: 7px; background: var(--surface-2); border-radius: 99px; overflow: hidden; }
.cv-bar-fill { height: 100%; background: var(--azul); border-radius: 99px; transition: width .3s; }
.cv-stars { color: var(--accent); letter-spacing: 1px; font-size: 14px; }
.cv-stars-off { color: var(--border-strong); }
.cv-cuenta { display: flex; align-items: center; gap: 12px; }
.cv-ic { color: var(--gris); cursor: default; }
.cv-avatar { width: 30px; height: 30px; border-radius: 50%; background: var(--azul-suave); color: var(--bg); display: grid; place-items: center; font-size: 13px; font-weight: 700; }
/* BODY — los paneles flotan sobre el fondo de página con margen y separación */
.cv-body { flex: 1; display: flex; min-height: 0; padding: 14px; gap: 14px; }
/* SIDEBAR (caja) */
.cv-side { width: 360px; flex-shrink: 0; background: var(--bg); border: 1px solid var(--border-soft); border-radius: 14px; overflow-y: auto; overflow-x: hidden; }
.cv-sec:last-child { border-bottom: none; }
/* RAIL (menú compacto) */
.cv-rail { width: 64px; flex-shrink: 0; background: var(--bg); border: 1px solid var(--border-soft); border-radius: 14px; display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 12px 0; overflow-y: auto; }
.cv-rail-btn { display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border: none; background: none; color: var(--gris); border-radius: 8px; cursor: pointer; }
.cv-rail-btn:hover { color: var(--text); background: var(--surface-2); }
.cv-rail-curso { font-size: 22px; margin: 2px 0 6px; }
.cv-rail-secs { display: flex; flex-direction: column; gap: 12px; width: 100%; align-items: center; }
.cv-rail-grupo { display: flex; flex-direction: column; align-items: center; gap: 6px; }
.cv-rail-sec { width: 32px; height: 32px; border-radius: 50%; border: 1px solid var(--linea); background: none; color: var(--text); font-weight: 700; font-size: 13px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; }
.cv-rail-sec:hover { background: var(--surface-2); }
.cv-rail-dots { display: flex; flex-direction: column; align-items: center; gap: 3px; }
.cv-rail-dot { width: 16px; height: 16px; border: none; background: transparent; padding: 0; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; }
.cv-rail-dot::before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: var(--text-muted); opacity: .55; transition: opacity .15s; }
.cv-rail-dot:hover::before { opacity: 1; }
.cv-rail-dot.activa::before { background: var(--azul-suave); opacity: 1; box-shadow: 0 0 0 3px var(--azul-suave-soft); }
.cv-rail-dot.prox { cursor: default; }
.cv-rail-dot.prox::before { opacity: .22; }
.cv-side-hd { display: flex; align-items: center; justify-content: space-between; padding: 18px 20px; font-size: 17px; font-weight: 700; border-bottom: 1px solid var(--linea); position: sticky; top: 0; background: var(--bg); }
.cv-side-hd-tit { display: inline-flex; align-items: center; gap: 8px; }
.cv-x { display: inline-flex; align-items: center; border: none; background: none; color: var(--gris); cursor: pointer; padding: 2px; border-radius: 6px; }
.cv-x:hover { color: var(--text); background: var(--surface-2); }
.cv-sec { border-bottom: 1px solid var(--linea); }
.cv-sec-hd { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 16px 20px; background: none; border: none; text-align: left; cursor: pointer; }
.cv-sec-hd:hover { background: var(--surface-2); }
.cv-sec-num { font-size: 12px; color: var(--text); font-weight: 600; }
.cv-sec-nombre { font-size: 15px; font-weight: 700; margin-top: 2px; }
.cv-sec-body { padding: 4px 0 12px; }
.cv-sub { padding: 8px 0; }
.cv-sub-tit { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: .04em; color: var(--text); padding: 6px 20px; }
.cv-hab { width: 100%; display: flex; gap: 12px; align-items: flex-start; padding: 9px 20px; background: none; border: none; border-left: 3px solid transparent; text-align: left; cursor: pointer; }
.cv-hab:hover { background: var(--surface-2); }
.cv-hab.activa { background: var(--azul-suave-soft); border-left-color: var(--azul-suave); }
.cv-hab.prox { cursor: default; opacity: .55; }
.cv-hab-txt { display: flex; flex-direction: column; gap: 2px; }
.cv-hab-tit { font-size: 14px; color: var(--tinta); line-height: 1.3; }
.cv-hab-meta { font-size: 12px; color: var(--text-muted); }
.cv-hab.prox .cv-hab-meta { color: var(--gris); }
/* PIZARRA (caja) */
.cv-pizarra { flex: 1; min-width: 0; overflow-y: auto; background: var(--bg); border: 1px solid var(--border-soft); border-radius: 14px; position: relative; }
.cv-pres-nav { position: sticky; top: 0; z-index: 4; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 10px 16px; background: var(--bg); border-bottom: 1px solid var(--linea); }
.cv-pres-pos { font-size: 13px; color: var(--gris); font-weight: 600; }
.cv-btn-sm { border: 1px solid var(--linea); background: var(--surface); padding: 7px 14px; border-radius: 8px; cursor: pointer; font-size: 13px; color: var(--tinta); }
.cv-btn-sm:disabled { opacity: .4; cursor: default; }
.cv-pres-slide { background: var(--bg); min-height: calc(100vh - 56px - 41px); }
/* CARD / BIENVENIDA */
.cv-card { max-width: 620px; margin: 60px auto; background: var(--bg); border: 1px solid var(--border-soft); border-radius: 12px; padding: 36px; text-align: center; }
.cv-card h2 { font-size: 22px; margin-bottom: 8px; }
.cv-card p { color: var(--gris); margin-bottom: 18px; }
.cv-btn { background: var(--azul); color: var(--bg); border: none; padding: 12px 22px; border-radius: 8px; font-size: 15px; font-weight: 600; cursor: pointer; }
.cv-prox { color: var(--gris); font-style: italic; }
.cv-bienvenida { max-width: 560px; margin: 90px auto; text-align: center; }
.cv-bien-ic { font-size: 56px; }
.cv-bienvenida h1 { font-size: 32px; margin: 12px 0 8px; }
.cv-bienvenida p { color: var(--gris); margin-bottom: 22px; }
.cv-bien-bar { width: 280px; height: 9px; margin: 0 auto 8px; background: var(--surface-2); border-radius: 99px; overflow: hidden; }
.cv-bien-bar > div { height: 100%; background: var(--azul); }
.cv-bien-pct { font-size: 13px; color: var(--gris); }
/* ── RESPONSIVO: en pantallas chicas el menú flota como overlay sobre la pizarra ── */
@media (max-width: 820px) {
  .cv-body { padding: 8px; gap: 8px; position: relative; }
  .cv-side { position: absolute; top: 8px; left: 8px; bottom: 8px; z-index: 30; width: min(340px, 86vw); box-shadow: 0 12px 44px rgba(0,0,0,0.55); }
  .cv-top { padding: 0 12px; gap: 10px; }
  .cv-progreso { display: none; }
  .cv-card, .cv-bienvenida { margin: 32px auto; }
}
@media (max-width: 520px) {
  .cv-sep, .cv-materia-trigger { display: none; }   /* en celular: solo logo + wordmark */
}
`;
