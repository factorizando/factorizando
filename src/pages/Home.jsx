// Home pública, construida sobre el design system de FactoR[i]zando
// (`Claude Design/FactoR[i]zando-handoff/`): tema claro, azul de acción,
// acentos por materia y tarjetas con línea superior de 3px.
//
// Todo lo que se muestra sale del contenido real: las cifras del hero y los
// conteos de cada materia se calculan de los índices en `src/data/materias.js`.
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import FxHeader, { FxWordmark } from "../components/FxHeader";
import AuthModal from "../components/AuthModal";
import { listaCursos } from "../data/cursos/cursosIndex";
import { MATERIAS } from "../data/materias";
// Cifras congeladas al compilar por `scripts/generar-catalogo.mjs`. Calcularlas
// aquí obligaba a la portada a cargar todo el contenido del sitio.
import catalogo from "../data/catalogo.generado.json";
import { ICONOS } from "../components/iconos";
import { supabase } from "../lib/supabase";

const WHATSAPP = "https://wa.me/522491374886";

// Ícono de curso: SVG registrado si `icono` es clave de ICONOS; si no, emoji.
function IconoCurso({ icono, size = 24 }) {
  const C = ICONOS[icono];
  return C ? <C size={size} /> : <span style={{ fontSize: size, lineHeight: 1 }}>{icono}</span>;
}

// Agrupa el número con espacio fino, como pide el sistema ("1 240 ejercicios").
const cifra = (n) => n.toLocaleString("es-MX").replace(/,/g, " ");

export default function Home() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const cursos = listaCursos();
  const { cifras, conteos } = catalogo;

  const abrirAuth = (modo) => {
    setAuthMode(modo);
    setAuthOpen(true);
  };

  // Activa el tema claro mientras la Home está montada; lo revierte al salir.
  // Sigue haciendo falta por los componentes compartidos (AuthModal) que aún
  // consumen los tokens antiguos.
  useEffect(() => {
    const prev = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", "light");
    return () => {
      if (prev) document.documentElement.setAttribute("data-theme", prev);
      else document.documentElement.removeAttribute("data-theme");
    };
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!session) return;
      const { data } = await supabase
        .from("profiles")
        .select("rol, perfil_completo")
        .eq("id", session.user.id)
        .single();
      // Tras confirmar el correo se aterriza aquí: si falta el perfil, completarlo.
      if (data && !data.perfil_completo) {
        navigate("/completar-perfil");
        return;
      }
      if (data?.rol === "admin") setIsAdmin(true);
    });
  }, [navigate]);

  return (
    <div className="fx-page">
      <style>{CSS}</style>

      <FxHeader
        onLogin={() => abrirAuth("login")}
        onRegistro={() => abrirAuth("registro")}
        ctaLabel="Crear cuenta"
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="fx-sec fx-hero">
        <div className="fx-hero-texto">
          <span className="fx-badge">Simulacros por convocatoria · EXANI-I, EXANI-II, UNAM</span>
          <h1 className="fx-h1">
            Descompón cualquier problema hasta que cada parte tenga sentido.
          </h1>
          <p className="fx-body-lg">
            Cada tema se abre en presentaciones para clase y cuestionarios cronometrados: respondes,
            te equivocas, lees por qué y sigues. Sin videos de 40 minutos ni fórmulas sueltas que
            memorizar.
          </p>
          <div className="fx-hero-botones">
            <button
              type="button"
              className="fx-btn-primario fx-btn-lg"
              onClick={() => abrirAuth("registro")}
            >
              Crear cuenta gratis
            </button>
            {/* Los cuestionarios viven detrás de ProtectedRoute, así que el
                botón secundario lleva al temario, que sí es público. */}
            <Link to="/exani-i" className="fx-btn-secundario fx-btn-lg">
              Ver el temario
            </Link>
          </div>

          <div className="fx-stats">
            <Stat valor={cifra(cifras.reactivos)} etiqueta="reactivos de práctica" />
            <Stat valor={cifra(cifras.cuestionarios)} etiqueta="cuestionarios publicados" />
            <Stat valor={cifra(cifras.presentaciones)} etiqueta="presentaciones para clase" />
          </div>
        </div>

        <div className="fx-hero-visual">
          <div className="fx-visual-card">
            <div className="fx-visual-lienzo">
              <ArbolFactores />
            </div>
            <div className="fx-visual-pie">
              <div className="fx-visual-txt">
                <span className="fx-visual-tit">Factorización en primos</span>
                <span className="fx-small-muted">Matemáticas · Números enteros</span>
              </div>
              <span className="fx-formula">24 = 2³ × 3</span>
            </div>
          </div>
          <div className="fx-visual-nota">
            <span className="fx-punto-estado" />
            <span>
              Cada reactivo trae su <strong>explicación</strong>, no solo el marcador.
            </span>
          </div>
        </div>
      </section>

      {/* ── EXÁMENES ─────────────────────────────────────────────────────── */}
      <section id="examenes" className="fx-sec">
        <EncabezadoSeccion
          eyebrow="Exámenes"
          titulo="Prepárate para el examen que vas a presentar"
          texto="Cada ruta sigue el temario oficial de su convocatoria y termina en simulacros cronometrados con el mismo formato del examen real."
        />
        <div className="fx-grid fx-grid-examenes">
          <TarjetaExamen
            to="/exani-ii"
            nivel="Nivel superior"
            titulo="Ingreso a licenciatura"
            texto="Módulos transversales y módulos de área: eliges tu carrera y el temario se ajusta a las materias que más pesan en tu examen."
            chips={["UNAM", "IPN", "BUAP", "UV"]}
            acento="math"
          />
          <TarjetaExamen
            to="/exani-i"
            nivel="Nivel medio superior"
            titulo="Ingreso a preparatoria"
            texto="Temario común de ingreso a preparatoria: pensamiento matemático, comprensión lectora, ciencias experimentales y ciencias sociales."
            chips={["UNAM", "IPN", "BUAP"]}
            acento="math"
          />
        </div>
      </section>

      {/* ── MATERIAS ─────────────────────────────────────────────────────── */}
      <section id="materias" className="fx-sec">
        <EncabezadoSeccion
          eyebrow="Materias"
          titulo="Elige por dónde empezar"
          texto="Cada materia tiene su color: lo reconocerás en las tarjetas, en el temario y en tu progreso."
        />

        <div className="fx-pills" role="group" aria-label="Nivel del material">
          <Link to="/preparatoria" className="fx-pill">
            Preparatoria
          </Link>
          <Link to="/universidad" className="fx-pill">
            Universidad
          </Link>
          {isAdmin && (
            <Link to="/regularizacion" className="fx-pill">
              Primaria y secundaria
            </Link>
          )}
          <span className="fx-pills-nota">
            Primaria y secundaria se trabaja en asesoría, con talleres guiados.
          </span>
        </div>

        <div className="fx-grid fx-grid-materias">
          {MATERIAS.map((m) => (
            <TarjetaMateria key={m.slug} materia={m} conteo={conteos[m.slug]} />
          ))}
        </div>
      </section>

      {/* ── CURSOS ───────────────────────────────────────────────────────── */}
      {cursos.length > 0 && (
        <section className="fx-sec">
          <EncabezadoSeccion
            eyebrow="Cursos"
            titulo="Áreas completas, de la definición al ejercicio"
            texto="Un curso reúne teoría, presentaciones y práctica de un área en un solo lienzo, en el orden en que conviene estudiarla."
          />
          <div className="fx-grid fx-grid-cursos">
            {cursos.map((c) => (
              <Link key={c.id} to={`/curso/${c.id}`} className="fx-card fx-card-fila">
                <span className="fx-card-ic fx-ic-math">
                  <IconoCurso icono={c.icono} />
                </span>
                <span className="fx-card-fila-txt">
                  <span className="fx-h5">{c.area}</span>
                  <span className="fx-small-muted">{c.materia}</span>
                </span>
                <span className="fx-flecha" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
            <Link to="/clase" className="fx-card fx-card-fila">
              <span className="fx-card-ic fx-ic-math">▶</span>
              <span className="fx-card-fila-txt">
                <span className="fx-h5">Clase en vivo</span>
                <span className="fx-small-muted">Únete con tu código de sesión</span>
              </span>
              <span className="fx-flecha" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </section>
      )}

      {/* ── CTA DOCENTES ─────────────────────────────────────────────────── */}
      <section className="fx-sec fx-sec-cta">
        <div className="fx-cta">
          <div className="fx-cta-texto">
            <h2 className="fx-cta-tit">¿Das clase? Crea un grupo en dos minutos</h2>
            <p className="fx-cta-sub">
              Asigna unidades, revisa el progreso por estudiante y detecta dónde se atoró el grupo.
              Gratis para escuelas públicas.
            </p>
          </div>
          <div className="fx-cta-botones">
            <a
              className="fx-btn-claro"
              href={`${WHATSAPP}?text=${encodeURIComponent("Hola, doy clase y quiero crear un grupo en FactoR[i]zando.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Crear grupo
            </a>
            <a
              className="fx-btn-fantasma"
              href={`${WHATSAPP}?text=${encodeURIComponent("Hola, me gustaría hablar con alguien sobre FactoR[i]zando.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablar con alguien
            </a>
          </div>
        </div>
      </section>

      {/* ── PIE ──────────────────────────────────────────────────────────── */}
      <footer className="fx-footer">
        <div className="fx-footer-cols">
          <div className="fx-footer-col">
            <FxWordmark size={17} />
            <p className="fx-footer-lema">Aprender haciendo, de primaria a universidad.</p>
          </div>
          <div className="fx-footer-col">
            <span className="fx-footer-tit">Materias</span>
            {MATERIAS.map((m) => (
              <Link key={m.slug} to={`/materia/${m.slug}`} className="fx-footer-link">
                {m.nombre}
              </Link>
            ))}
          </div>
          {/* Columnas del diseño original. Las entradas sin destino todavía se
              muestran apagadas y sin enlace, en vez de llevar a una ruta que no
              existe; se irán activando una por una. */}
          <div className="fx-footer-col">
            <span className="fx-footer-tit">Plataforma</span>
            <span className="fx-footer-link fx-footer-pendiente">Para docentes</span>
            <span className="fx-footer-link fx-footer-pendiente">Para escuelas</span>
            <span className="fx-footer-link fx-footer-pendiente">Precios</span>
            <span className="fx-footer-link fx-footer-pendiente">Ayuda</span>
          </div>
          <div className="fx-footer-col">
            <span className="fx-footer-tit">Nosotros</span>
            <span className="fx-footer-link fx-footer-pendiente">Quiénes somos</span>
            <span className="fx-footer-link fx-footer-pendiente">Accesibilidad</span>
            <span className="fx-footer-link fx-footer-pendiente">Privacidad</span>
            <a
              className="fx-footer-link"
              href={`${WHATSAPP}?text=${encodeURIComponent("Hola, me interesa el curso de FactoR[i]zando.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contacto
            </a>
          </div>
        </div>
        <div className="fx-footer-base">
          <span className="fx-footer-copy">© 2026 FactoR[i]zando</span>
        </div>
      </footer>

      {/* Admin (solo administrador) */}
      {isAdmin && (
        <div className="fx-admin-bar">
          <Link to="/admin" className="fx-admin">
            ⚙ Admin
          </Link>
          <Link to="/regularizacion" className="fx-admin">
            ➗ Regularización
          </Link>
        </div>
      )}

      <AuthModal open={authOpen} initialMode={authMode} onClose={() => setAuthOpen(false)} />
    </div>
  );
}

/* ── Piezas ─────────────────────────────────────────────────────────────── */

function EncabezadoSeccion({ eyebrow, titulo, texto }) {
  return (
    <div className="fx-sec-cab">
      <span className="fx-eyebrow">{eyebrow}</span>
      <h2 className="fx-h2">{titulo}</h2>
      {texto && <p className="fx-sec-texto">{texto}</p>}
    </div>
  );
}

function Stat({ valor, etiqueta }) {
  return (
    <div className="fx-stat">
      <span className="fx-stat-valor">{valor}</span>
      <span className="fx-stat-etq">{etiqueta}</span>
    </div>
  );
}

function TarjetaExamen({ to, nivel, titulo, texto, chips, acento }) {
  return (
    <Link to={to} className={`fx-card fx-card-alta fx-acento-${acento}`}>
      <span className="fx-card-nivel">{nivel}</span>
      <h3 className="fx-h3-card">{titulo}</h3>
      <p className="fx-card-texto">{texto}</p>
      <div className="fx-chips">
        {chips.map((c) => (
          <span key={c} className="fx-chip">
            {c}
          </span>
        ))}
      </div>
      <span className="fx-card-cta">Ver la ruta →</span>
    </Link>
  );
}

// Tarjeta de materia. Sin material publicado no enlaza a ningún lado: se
// muestra apagada y marcada como "Próximamente" en vez de llevar a una lista
// vacía.
function TarjetaMateria({ materia, conteo }) {
  const { slug, nombre, acento, glifo, fuenteGlifo, descripcion } = materia;
  const piezas = [
    conteo.presentaciones && `${conteo.presentaciones} presentaciones`,
    conteo.cuestionarios && `${conteo.cuestionarios} cuestionarios`,
    conteo.documentos && `${conteo.documentos} documentos`,
  ].filter(Boolean);

  const cuerpo = (
    <>
      <div className="fx-card-cabeza">
        <span className={`fx-card-ic fx-ic-${acento} fx-glifo-${fuenteGlifo}`}>{glifo}</span>
        <h3 className="fx-h4-card">{nombre}</h3>
        <p className="fx-card-texto">{descripcion}</p>
      </div>
      <div className="fx-card-pie">
        <span className="fx-small-muted">
          {piezas.length ? piezas.join(" · ") : "Próximamente"}
        </span>
        {piezas.length > 0 && <span className={`fx-card-cta fx-cta-${acento}`}>Abrir →</span>}
      </div>
    </>
  );

  if (!conteo.total) {
    return (
      <div className={`fx-card fx-card-alta fx-acento-${acento} fx-card-inerte`}>{cuerpo}</div>
    );
  }
  return (
    <Link to={`/materia/${slug}`} className={`fx-card fx-card-alta fx-acento-${acento}`}>
      {cuerpo}
    </Link>
  );
}

// Ilustración del hero: el árbol de factores de 24.
//
//            24
//          /    \
//         4      6
//        / \    / \
//       2   2  2   3
//
// Se arma solo, de arriba abajo: cada rama se dibuja y luego aparecen los dos
// factores que cuelgan de ella. Se rearma al volver a entrar en pantalla, y se
// queda quieto si el sistema pide menos movimiento.
// Una rama y su nodo por turno, en el orden en que se explica en clase: el 24
// se parte en 4 y luego en 6; después se abre el 4 (2 y 2) y por último el 6
// (2 y 3). `d` es el retardo en segundos; cada nodo entra cuando su rama va
// por tres cuartos del trazo.
const NODOS = [
  { x: 160, y: 40, t: "24", primo: false, d: 0 },
  { x: 100, y: 118, t: "4", primo: false, d: 1.05 },
  { x: 220, y: 118, t: "6", primo: false, d: 2.1 },
  { x: 56, y: 196, t: "2", primo: true, d: 3.15 },
  { x: 132, y: 196, t: "2", primo: true, d: 4.1 },
  { x: 188, y: 196, t: "2", primo: true, d: 5.05 },
  { x: 264, y: 196, t: "3", primo: true, d: 6.0 },
];
const RAMAS = [
  { x1: 160, y1: 40, x2: 100, y2: 118, d: 0.55 },
  { x1: 160, y1: 40, x2: 220, y2: 118, d: 1.6 },
  { x1: 100, y1: 118, x2: 56, y2: 196, d: 2.65 },
  { x1: 100, y1: 118, x2: 132, y2: 196, d: 3.6 },
  { x1: 220, y1: 118, x2: 188, y2: 196, d: 4.55 },
  { x1: 220, y1: 118, x2: 264, y2: 196, d: 5.5 },
];

function ArbolFactores() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      className={`fx-arbol${visible ? " fx-arbol-on" : ""}`}
      viewBox="0 0 320 240"
      role="img"
      aria-label="Árbol de factores de 24: 24 se parte en 4 y 6; el 4 en 2 y 2; el 6 en 2 y 3."
    >
      {RAMAS.map((r, i) => (
        <line
          key={`r${i}`}
          className="fx-rama"
          style={{ "--d": `${r.d}s` }}
          x1={r.x1}
          y1={r.y1}
          x2={r.x2}
          y2={r.y2}
          stroke="#B4CDF8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ))}
      {NODOS.map((n, i) => (
        <g key={`n${i}`} className="fx-nodo" style={{ "--d": `${n.d}s` }}>
          <circle
            cx={n.x}
            cy={n.y}
            r="18"
            fill={n.primo ? "#0056D2" : "#FFFFFF"}
            stroke={n.primo ? "#0056D2" : "#B4CDF8"}
            strokeWidth="1.5"
          />
          <text
            x={n.x}
            y={n.y + 5}
            textAnchor="middle"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="15"
            fill={n.primo ? "#FFFFFF" : "#0A2540"}
          >
            {n.t}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ── Estilos ────────────────────────────────────────────────────────────── */

const CSS = `
/* HERO */
.fx-hero { display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: clamp(32px, 5vw, 72px); align-items: center;
  padding-top: clamp(48px, 7vw, 96px); padding-bottom: clamp(40px, 5vw, 72px); }
.fx-hero-texto { display: flex; flex-direction: column; gap: 24px; max-width: 560px; }
.fx-badge { font-family: var(--fx-font-mono); font-size: var(--fx-caption-size); letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--fx-primary-600); background: var(--fx-primary-50);
  border: 1px solid var(--fx-primary-100); padding: 7px 12px; border-radius: var(--fx-radius-pill);
  align-self: flex-start; }
.fx-hero-botones { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; padding-top: 4px; }
.fx-stats { display: flex; gap: clamp(20px, 4vw, 44px); flex-wrap: wrap;
  border-top: 1px solid var(--fx-border); margin-top: 12px; padding-top: 24px; }
.fx-stat { display: flex; flex-direction: column; gap: 3px; }
.fx-stat-valor { font-family: var(--fx-font-heading); font-weight: 600; font-size: 30px;
  color: var(--fx-text-heading); font-variant-numeric: tabular-nums; letter-spacing: -0.02em; }
.fx-stat-etq { font-size: var(--fx-small-size); color: var(--fx-text-muted); }
.fx-hero-visual { display: flex; flex-direction: column; gap: 16px; min-width: 300px; }
.fx-visual-card { background: var(--fx-surface); border: 1px solid var(--fx-border);
  border-radius: 20px; padding: 14px; box-shadow: var(--fx-shadow-float); }
/* El rayado diagonal del mockup era el marcador de "aquí falta una ilustración";
   con el árbol dibujado, el lienzo va en blanco. */
.fx-visual-lienzo { aspect-ratio: 4 / 3; border-radius: 12px; padding: 14px;
  background: var(--fx-surface); border: 1px solid var(--fx-border); }
/* ÁRBOL DE FACTORES — el retardo de cada pieza llega por --d desde el JSX.
   Sobrio, como pide el sistema: aparecer y trazar, sin rebotes ni escalados.
   No va en bucle a propósito: se rearma al volver a entrar en pantalla. Para
   hacerlo cíclico bastaría con animation-iteration-count infinite y un ciclo
   total fijo, pero entonces el hero nunca se queda quieto y compite con el CTA. */
.fx-arbol { width: 100%; height: 100%; display: block; }
.fx-arbol .fx-nodo { opacity: 0; transform-box: fill-box; transform-origin: center; }
.fx-arbol .fx-rama { stroke-dasharray: 120; stroke-dashoffset: 120; }
.fx-arbol-on .fx-nodo { animation: fx-nodo-entra .5s ease both var(--d, 0s); }
.fx-arbol-on .fx-rama { animation: fx-rama-traza .6s ease both var(--d, 0s); }
@keyframes fx-nodo-entra {
  from { opacity: 0; transform: translateY(-7px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fx-rama-traza { to { stroke-dashoffset: 0; } }
@media (prefers-reduced-motion: reduce) {
  .fx-arbol .fx-nodo, .fx-arbol-on .fx-nodo { opacity: 1; transform: none; animation: none; }
  .fx-arbol .fx-rama, .fx-arbol-on .fx-rama { stroke-dashoffset: 0; animation: none; }
}
.fx-visual-pie { display: flex; align-items: center; justify-content: space-between;
  gap: 16px; padding: 16px 10px 6px; }
.fx-visual-txt { display: flex; flex-direction: column; gap: 2px; }
.fx-visual-tit { font-family: var(--fx-font-heading); font-weight: 600; font-size: 18px;
  color: var(--fx-text-heading); }
.fx-visual-nota { display: flex; align-items: center; gap: 12px; background: var(--fx-surface);
  border: 1px solid var(--fx-border); border-radius: 14px; padding: 16px 18px;
  font-size: var(--fx-body-size); color: var(--fx-text-body); }
.fx-visual-nota strong { font-weight: 600; color: var(--fx-text-heading); }
.fx-punto-estado { width: 10px; height: 10px; border-radius: var(--fx-radius-pill);
  background: var(--fx-success); flex: 0 0 auto; }
/* PASTILLAS DE NIVEL */
.fx-pills { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; margin-bottom: 32px; }
.fx-pills-nota { font-size: var(--fx-small-size); color: var(--fx-text-muted); padding-left: 6px; }
/* REJILLAS */
.fx-grid-examenes { grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); max-width: 900px; }
.fx-grid-materias { grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); }
.fx-grid-cursos { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
/* CTA NAVY */
.fx-sec-cta { padding-top: clamp(24px, 4vw, 48px); padding-bottom: clamp(56px, 6vw, 88px); }
.fx-cta { background: var(--fx-primary-900); border-radius: var(--fx-radius-xl);
  padding: clamp(32px, 5vw, 56px); display: flex; align-items: center;
  justify-content: space-between; gap: 32px; flex-wrap: wrap; }
.fx-cta-texto { display: flex; flex-direction: column; gap: 12px; max-width: 620px; }
.fx-cta-tit { font-family: var(--fx-font-heading); font-weight: 600;
  font-size: clamp(26px, 2.8vw, 34px); line-height: 1.2; letter-spacing: -0.022em;
  color: #fff; margin: 0; text-wrap: balance; }
.fx-cta-sub { font-size: var(--fx-body-lg-size); line-height: 1.62; color: var(--fx-text-on-dark); margin: 0; text-wrap: pretty; }
.fx-cta-botones { display: flex; gap: 12px; flex-wrap: wrap; }
.fx-btn-claro, .fx-btn-fantasma { font-family: var(--fx-font-body); font-size: 17px; font-weight: 600;
  height: 52px; padding: 0 24px; border-radius: 11px; cursor: pointer; text-decoration: none;
  display: inline-flex; align-items: center; transition: background var(--fx-transition); }
.fx-btn-claro { color: var(--fx-primary-900); background: #fff; border: none; }
.fx-btn-claro:hover { background: var(--fx-primary-50); color: var(--fx-primary-900); text-decoration: none; }
.fx-btn-fantasma { color: #fff; background: transparent; border: 1px solid #3F5B7A; }
.fx-btn-fantasma:hover { background: #123252; color: #fff; text-decoration: none; }
/* PIE */
.fx-footer { border-top: 1px solid var(--fx-border); background: var(--fx-surface); }
.fx-footer-cols { max-width: var(--fx-container); margin: 0 auto;
  padding: clamp(40px, 5vw, 64px) var(--fx-gutter) 32px;
  display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; }
.fx-footer-col { display: flex; flex-direction: column; gap: 12px; align-items: flex-start; }
.fx-footer-lema { font-size: var(--fx-small-size); line-height: 1.6; color: var(--fx-text-muted); margin: 0; max-width: 26ch; }
.fx-footer-tit { font-size: var(--fx-caption-size); font-weight: 600; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--fx-text-heading); }
.fx-footer-link { font-family: var(--fx-font-body); font-size: var(--fx-body-size); color: var(--fx-text-body);
  text-decoration: none; transition: color var(--fx-transition); }
.fx-footer-link:hover { color: var(--fx-primary-600); text-decoration: none; }
.fx-footer-pendiente { color: var(--fx-text-disabled); cursor: default; }
.fx-footer-pendiente:hover { color: var(--fx-text-disabled); }
.fx-footer-base { max-width: var(--fx-container); margin: 0 auto;
  padding: 20px var(--fx-gutter) 40px; border-top: 1px solid var(--fx-surface-sunken); }
.fx-footer-copy { font-family: var(--fx-font-mono); font-size: 12px; color: var(--fx-text-muted); }
/* FLOTANTES */
.fx-admin-bar { position: fixed; bottom: 24px; left: 24px; z-index: 100; display: flex; gap: 8px; }
.fx-admin { background: var(--fx-surface); border: 1px solid var(--fx-border);
  border-radius: var(--fx-radius-md); padding: 8px 14px; text-decoration: none;
  color: var(--fx-primary-600); font-size: var(--fx-small-size); font-weight: 600; box-shadow: var(--fx-shadow-card); }
.fx-admin:hover { border-color: var(--fx-primary-200); text-decoration: none; }
/* RESPONSIVO */
@media (max-width: 720px) {
  .fx-hero-visual { min-width: 0; }
  .fx-admin-bar { bottom: 16px; left: 16px; }
}
`;
