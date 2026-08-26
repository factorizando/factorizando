// Página de materia: /materia/:slug
//
// Reúne en un solo lugar todo lo publicado de una materia (cursos, documentos,
// presentaciones y cuestionarios). No define contenido propio: lo recolecta de
// los índices existentes a través de `src/data/materias.js`.
import { useEffect, useMemo, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import FxHeader from "../components/FxHeader";
import AuthModal from "../components/AuthModal";
import { MATERIAS, buscarMateria } from "../data/materias";
// Esta ruta sí carga el contenido real: es la única que lo necesita, y viaja en
// su propio pedazo del bundle.
import { contenidoDeMateria } from "../data/materias-contenido";

const NIVELES = { preparatoria: "Preparatoria", universidad: "Universidad" };

export default function MateriaVer() {
  const { slug } = useParams();
  const materia = buscarMateria(slug);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const contenido = useMemo(() => (materia ? contenidoDeMateria(slug) : null), [materia, slug]);

  const abrirAuth = (modo) => { setAuthMode(modo); setAuthOpen(true); };

  // Mismo trato que la Home: tema claro mientras esta página está montada,
  // por los componentes compartidos que aún leen los tokens antiguos.
  useEffect(() => {
    const prev = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", "light");
    return () => {
      if (prev) document.documentElement.setAttribute("data-theme", prev);
      else document.documentElement.removeAttribute("data-theme");
    };
  }, []);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!materia) return <Navigate to="/" replace />;

  const { cursos, documentos, presentaciones, cuestionarios } = contenido;
  const vacio = !cursos.length && !documentos.length && !presentaciones.length && !cuestionarios.length;
  const otras = MATERIAS.filter((m) => m.slug !== slug);

  return (
    <div className="fx-page">
      <style>{CSS}</style>

      <FxHeader
        onLogin={() => abrirAuth("login")}
        onRegistro={() => abrirAuth("registro")}
        ctaLabel="Crear cuenta"
      />

      {/* ── PORTADA DE LA MATERIA ────────────────────────────────────────── */}
      <section className="fx-sec fx-mt-hero">
        <nav className="fx-migas">
          <Link to="/" className="fx-miga">Inicio</Link>
          <span aria-hidden="true">/</span>
          <span className="fx-miga-actual">{materia.nombre}</span>
        </nav>
        <div className="fx-mt-cab">
          <span className={`fx-card-ic fx-ic-${materia.acento} fx-glifo-${materia.fuenteGlifo} fx-mt-ic`}>
            {materia.glifo}
          </span>
          <div className="fx-mt-txt">
            <h1 className="fx-h2">{materia.nombre}</h1>
            <p className="fx-sec-texto">{materia.descripcion}</p>
          </div>
        </div>
      </section>

      {vacio && (
        <section className="fx-sec fx-mt-vacio">
          <div className="fx-card fx-card-alta">
            <span className="fx-eyebrow">Próximamente</span>
            <p className="fx-card-texto">
              Todavía no hay material publicado de {materia.nombre}. Mientras tanto, puedes
              empezar por otra materia o por la ruta de tu examen.
            </p>
            <div className="fx-chips">
              <Link to="/exani-i" className="fx-chip">EXANI-I</Link>
              <Link to="/exani-ii" className="fx-chip">EXANI-II</Link>
            </div>
          </div>
        </section>
      )}

      {/* ── CURSOS ───────────────────────────────────────────────────────── */}
      {cursos.length > 0 && (
        <Seccion titulo="Cursos" nota="Un área completa, en el orden en que conviene estudiarla">
          <div className="fx-grid fx-grid-lista">
            {cursos.map((c) => (
              <Link key={c.id} to={`/curso/${c.id}`} className="fx-card fx-card-fila">
                <span className="fx-card-fila-txt">
                  <span className="fx-h5">{c.area}</span>
                  <span className="fx-small-muted">Curso · {c.materia}</span>
                </span>
                <span className="fx-flecha" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </Seccion>
      )}

      {/* ── DOCUMENTOS ───────────────────────────────────────────────────── */}
      {documentos.length > 0 && (
        <Seccion titulo="Documentos" nota="Definiciones, teoremas y demostraciones, numerados">
          <div className="fx-grid fx-grid-lista">
            {documentos.map((d) => (
              <Link key={d.id} to={`/documento/${d.id}`} className="fx-card fx-card-fila">
                <span className="fx-card-fila-txt">
                  <span className="fx-h5">{d.titulo}</span>
                  {d.tema && <span className="fx-small-muted">{d.tema}</span>}
                </span>
                <span className="fx-flecha" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </Seccion>
      )}

      {/* ── PRESENTACIONES ───────────────────────────────────────────────── */}
      {presentaciones.length > 0 && (
        <Seccion titulo="Presentaciones" nota="Para proyectar en clase o repasar por tu cuenta" requiereCuenta>
          <div className="fx-grid fx-grid-lista">
            {presentaciones.map((p) => (
              <Link key={p.id} to={`/ver/${p.id}`} className="fx-card fx-card-fila">
                <span className="fx-card-fila-txt">
                  <span className="fx-h5">{p.titulo}</span>
                  <span className="fx-small-muted">
                    {[p.subtema, `${p.slides} diapositivas`].filter(Boolean).join(" · ")}
                  </span>
                </span>
                <span className="fx-flecha" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </Seccion>
      )}

      {/* ── CUESTIONARIOS ────────────────────────────────────────────────── */}
      {cuestionarios.length > 0 && (
        <Seccion titulo="Cuestionarios" nota="Práctica cronometrada, con explicación en cada reactivo" requiereCuenta>
          <div className="fx-grid fx-grid-lista">
            {cuestionarios.map((c) => (
              <Link key={c.id} to={`/cuestionario/${c.id}`} className="fx-card fx-card-fila">
                <span className="fx-card-fila-txt">
                  <span className="fx-h5">{c.titulo}</span>
                  <span className="fx-small-muted">
                    {[NIVELES[c.nivel], `${c.preguntas} reactivos`, c.descripcion]
                      .filter(Boolean).join(" · ")}
                  </span>
                </span>
                <span className="fx-flecha" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </Seccion>
      )}

      {/* ── OTRAS MATERIAS ───────────────────────────────────────────────── */}
      <section className="fx-sec fx-mt-otras">
        <span className="fx-eyebrow">Seguir explorando</span>
        <div className="fx-pills fx-mt-pills">
          {otras.map((m) => (
            <Link key={m.slug} to={`/materia/${m.slug}`} className="fx-pill">
              <span className="fx-punto-materia" style={{ background: `var(--fx-${m.acento})` }} />
              {m.nombre}
            </Link>
          ))}
        </div>
      </section>

      <AuthModal open={authOpen} initialMode={authMode} onClose={() => setAuthOpen(false)} />
    </div>
  );
}

function Seccion({ titulo, nota, requiereCuenta, children }) {
  return (
    <section className="fx-sec fx-mt-sec">
      <div className="fx-mt-sec-cab">
        <h2 className="fx-h4-card">{titulo}</h2>
        {requiereCuenta && <span className="fx-mt-aviso">Requiere cuenta</span>}
      </div>
      {nota && <p className="fx-small-muted fx-mt-nota">{nota}</p>}
      {children}
    </section>
  );
}

const CSS = `
/* PORTADA */
.fx-mt-hero { padding-top: clamp(28px, 4vw, 48px); padding-bottom: 8px; }
.fx-migas { display: flex; align-items: center; gap: 8px; font-size: var(--fx-small-size);
  color: var(--fx-text-muted); margin-bottom: 20px; }
.fx-miga { color: var(--fx-text-muted); text-decoration: none; }
.fx-miga:hover { color: var(--fx-primary-600); text-decoration: none; }
.fx-miga-actual { color: var(--fx-text-heading); font-weight: 600; }
.fx-mt-cab { display: flex; align-items: flex-start; gap: 20px; flex-wrap: wrap; }
.fx-mt-ic { width: 60px; height: 60px; font-size: 27px; border-radius: 14px; }
.fx-mt-txt { display: flex; flex-direction: column; gap: 8px; max-width: 640px; min-width: 260px; flex: 1; }
.fx-mt-vacio { padding-top: 24px; }
/* SECCIONES */
.fx-mt-sec { padding-top: clamp(28px, 3.5vw, 44px); padding-bottom: 0; }
.fx-mt-sec-cab { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.fx-mt-aviso { font-family: var(--fx-font-mono); font-size: 11.5px; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--fx-info-text); background: var(--fx-info-bg);
  border: 1px solid var(--fx-info-border); padding: 4px 9px; border-radius: var(--fx-radius-pill); }
.fx-mt-nota { display: block; margin: 6px 0 20px; }
/* min(…, 100%) por lo mismo que en la Home: una pista de 320px no se encoge, y
   en un teléfono de 320 la tarjeta se salía 20px por la derecha. */
.fx-grid-lista { grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr)); gap: 14px; }
/* OTRAS MATERIAS */
.fx-mt-otras { padding-top: clamp(40px, 5vw, 64px); padding-bottom: clamp(56px, 6vw, 88px); }
.fx-mt-pills { margin-top: 16px; margin-bottom: 0; }
.fx-punto-materia { width: 9px; height: 9px; border-radius: 50%; flex: none; margin-right: 9px; }
`;
