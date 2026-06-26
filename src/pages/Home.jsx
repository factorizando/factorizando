import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AppHeader from "../components/AppHeader";
import AuthModal from "../components/AuthModal";
import { listaCursos } from "../data/cursos/cursosIndex";
import { ICONOS } from "../components/iconos";
import { supabase } from "../lib/supabase";

// Ícono de curso: SVG registrado si `icono` es clave de ICONOS; si no, emoji.
function IconoCurso({ icono, size = 26 }) {
  const C = ICONOS[icono];
  return C ? <C size={size} /> : <span style={{ fontSize: size, lineHeight: 1 }}>{icono}</span>;
}

export default function Home() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const cursos = listaCursos();

  const abrirAuth = (modo) => { setAuthMode(modo); setAuthOpen(true); };

  // Activa el tema claro mientras la Home está montada; lo revierte al salir.
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
      if (data && !data.perfil_completo) { navigate("/completar-perfil"); return; }
      if (data?.rol === "admin") setIsAdmin(true);
    });
  }, [navigate]);

  return (
    <>
      <style>{CSS}</style>
      <div className="hm-root">
        <AppHeader
          query={busqueda}
          onQuery={setBusqueda}
          onLogin={() => abrirAuth("login")}
          onRegistro={() => abrirAuth("registro")}
        />

        <main className="hm-main">
          {/* ── HERO ── */}
          <section className="hm-hero">
            <span className="hm-eyebrow">Plataforma de evaluación académica</span>
            <h1 className="hm-title">
              Prepárate para tu examen de admisión con
              <br className="hm-br" /> rigor y claridad.
            </h1>
            <p className="hm-sub">
              Teoría, cuestionarios y cursos interactivos para EXANI-I, EXANI-II y la UNAM.
              Elige por examen, por nivel o explora los cursos.
            </p>
          </section>

          {/* ── POR EXAMEN ── */}
          <section className="hm-sec">
            <h2 className="hm-sec-tit">Por examen</h2>
            <div className="hm-grid">
              <Card to="/exani-i" icon="Σ" tono="azul" titulo="EXANI-I" sub="Ingreso a bachillerato" />
              <Card to="/exani-ii" icon="∫" tono="dorado" titulo="EXANI-II" sub="Ingreso a licenciatura" />
            </div>
          </section>

          {/* ── POR NIVEL ── */}
          <section className="hm-sec">
            <h2 className="hm-sec-tit">Por nivel</h2>
            <div className="hm-grid">
              <Card to="/preparatoria" icon="🎓" tono="azul" titulo="Preparatoria" sub="Nivel medio superior" />
              <Card to="/universidad" icon="🏛" tono="dorado" titulo="Universidad" sub="Nivel superior" />
            </div>
          </section>

          {/* ── CURSOS ── */}
          {cursos.length > 0 && (
            <section className="hm-sec">
              <h2 className="hm-sec-tit">Cursos</h2>
              <div className="hm-grid hm-grid-3">
                {cursos.map((c) => (
                  <Link key={c.id} to={`/curso/${c.id}`} className="hm-card">
                    <span className="hm-card-ic hm-tono-neutro"><IconoCurso icono={c.icono} /></span>
                    <span className="hm-card-txt">
                      <span className="hm-card-tit">{c.area}</span>
                      <span className="hm-card-sub">{c.materia}</span>
                    </span>
                    <span className="hm-card-arrow" aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* ── CLASE EN VIVO ── */}
          <section className="hm-sec">
            <Link to="/clase" className="hm-live">
              <span className="hm-live-ic">▶</span>
              <span className="hm-live-txt">
                <span className="hm-live-tit">Clase en vivo</span>
                <span className="hm-live-sub">Únete con tu código de sesión</span>
              </span>
              <span className="hm-card-arrow" aria-hidden="true">→</span>
            </Link>
          </section>

          <footer className="hm-footer">© Factorizando — Todos los derechos reservados</footer>
        </main>

        {/* Admin (solo administrador) */}
        {isAdmin && (
          <Link to="/admin" className="hm-admin">⚙ Admin</Link>
        )}

        {/* WhatsApp flotante */}
        <a
          className="hm-wa"
          href="https://wa.me/522491374886?text=Hola%2C%20me%20interesa%20el%20curso%20de%20FactoR[i]zando."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>

        <AuthModal open={authOpen} initialMode={authMode} onClose={() => setAuthOpen(false)} />
      </div>
    </>
  );
}

// Tarjeta de catálogo (examen / nivel).
function Card({ to, icon, titulo, sub, tono }) {
  return (
    <Link to={to} className="hm-card">
      <span className={`hm-card-ic hm-tono-${tono}`}>{icon}</span>
      <span className="hm-card-txt">
        <span className="hm-card-tit">{titulo}</span>
        <span className="hm-card-sub">{sub}</span>
      </span>
      <span className="hm-card-arrow" aria-hidden="true">→</span>
    </Link>
  );
}

const CSS = `
.hm-root { min-height: 100vh; min-height: 100dvh; background: var(--bg); color: var(--text);
  font-family: var(--font-ui); display: flex; flex-direction: column; }
.hm-root * { box-sizing: border-box; }
.hm-main { flex: 1; width: 100%; max-width: 1000px; margin: 0 auto; padding: 40px 24px 80px; }
/* HERO */
.hm-hero { padding: 28px 0 40px; max-width: 720px; }
.hm-eyebrow { font-size: 12px; letter-spacing: .18em; text-transform: uppercase; color: var(--text-muted); font-weight: 600; }
.hm-title { font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 700;
  font-size: clamp(30px, 5.5vw, 48px); line-height: 1.08; color: var(--heading); margin: 14px 0 18px; letter-spacing: .005em; }
.hm-sub { font-size: clamp(15px, 2.2vw, 17px); line-height: 1.6; color: var(--text-dim); max-width: 620px; }
/* SECCIONES */
.hm-sec { margin-top: 38px; }
.hm-sec-tit { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: .07em;
  color: var(--text-muted); margin-bottom: 14px; }
.hm-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.hm-grid-3 { grid-template-columns: repeat(3, 1fr); }
/* TARJETA */
.hm-card { display: flex; align-items: center; gap: 16px; padding: 18px 20px;
  background: var(--surface); border: 1px solid var(--border); border-radius: 16px;
  text-decoration: none; color: var(--text); transition: border-color .2s, box-shadow .2s, transform .15s; }
.hm-card:hover { border-color: var(--border-strong); transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(40, 33, 20, 0.08); }
.hm-card-ic { display: grid; place-items: center; width: 50px; height: 50px; flex-shrink: 0;
  border-radius: 13px; font-size: 26px; line-height: 1; font-family: Georgia, 'Times New Roman', serif; }
.hm-tono-azul { background: var(--azul-suave-soft); color: var(--azul-suave); }
.hm-tono-dorado { background: var(--accent-soft); color: var(--accent); }
.hm-tono-neutro { background: var(--surface-2); color: var(--text-dim); }
.hm-card-txt { display: flex; flex-direction: column; gap: 3px; min-width: 0; flex: 1; }
.hm-card-tit { font-size: 17px; font-weight: 700; color: var(--heading); }
.hm-card-sub { font-size: 13.5px; color: var(--text-muted); }
.hm-card-arrow { color: var(--text-muted); font-size: 18px; opacity: .5; transition: opacity .2s, transform .2s; }
.hm-card:hover .hm-card-arrow { opacity: 1; transform: translateX(3px); }
/* CLASE EN VIVO */
.hm-live { display: flex; align-items: center; gap: 16px; padding: 18px 22px;
  background: linear-gradient(135deg, var(--azul-suave-soft), transparent 70%), var(--surface);
  border: 1px solid var(--border); border-radius: 16px; text-decoration: none; color: var(--text);
  transition: border-color .2s, box-shadow .2s, transform .15s; }
.hm-live:hover { border-color: var(--azul-suave); transform: translateY(-2px); box-shadow: 0 10px 28px rgba(47,111,224,.12); }
.hm-live-ic { display: grid; place-items: center; width: 50px; height: 50px; flex-shrink: 0; border-radius: 13px;
  background: var(--azul-suave); color: #fff; font-size: 18px; }
.hm-live-txt { display: flex; flex-direction: column; gap: 3px; flex: 1; }
.hm-live-tit { font-size: 17px; font-weight: 700; color: var(--heading); }
.hm-live-sub { font-size: 13.5px; color: var(--text-muted); }
/* FOOTER */
.hm-footer { margin-top: 56px; text-align: center; font-size: 12.5px; color: var(--text-muted); letter-spacing: .04em; }
/* FLOTANTES */
.hm-admin { position: fixed; bottom: 24px; left: 24px; z-index: 100; background: var(--surface);
  border: 1px solid var(--border); border-radius: 12px; padding: 8px 14px; text-decoration: none;
  color: var(--azul-suave); font-size: 13px; font-weight: 600; box-shadow: 0 4px 14px rgba(40,33,20,.12); }
.hm-wa { position: fixed; bottom: 24px; right: 24px; z-index: 100; width: 52px; height: 52px;
  border-radius: 50%; background: #25D366; display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 18px rgba(37,211,102,0.45); transition: transform .2s, box-shadow .2s; }
.hm-wa:hover { transform: scale(1.08); box-shadow: 0 6px 24px rgba(37,211,102,0.6); }
/* RESPONSIVO */
@media (max-width: 720px) {
  .hm-grid, .hm-grid-3 { grid-template-columns: 1fr; }
  .hm-br { display: none; }
}
@media (max-width: 520px) {
  .hm-main { padding: 28px 16px 72px; }
}
`;
