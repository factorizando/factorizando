// src/components/SubjectPage.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Componente reutilizable para Preparatoria y Universidad.
// Recibe "level" ('preparatoria' | 'universidad') y "subjects" (array de datos).
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

// ── Resource pill ─────────────────────────────────────────────────────────────
function ResourcePill({ type, href, label }) {
  const styles = {
    quiz:  { bg: "#3b9eff", color: "#fff", border: "none", shadow: "0 2px 12px rgba(59,158,255,.3)" },
    video: { bg: "#1a2535", color: "#60a5fa", border: "1px solid rgba(96,165,250,.25)", shadow: "none" },
    pdf:   { bg: "#1e1a2e", color: "#c084fc", border: "1px solid rgba(192,132,252,.25)", shadow: "none" },
  };
  const icons = { quiz: "⚡", video: "▶", pdf: "📄" };
  const s = styles[type];

  const pillStyle = {
    display: "inline-flex", alignItems: "center", gap: ".45rem",
    padding: ".38rem .85rem", borderRadius: "3px",
    background: s.bg, color: s.color,
    border: s.border, boxShadow: s.shadow,
    fontSize: ".75rem", fontWeight: 500, letterSpacing: ".06em",
    textDecoration: "none", cursor: "pointer",
    transition: "transform .15s, opacity .15s, box-shadow .2s",
    fontFamily: "'DM Sans', sans-serif",
  };

  const handleHover = (e, enter) => {
    e.currentTarget.style.transform = enter ? "translateY(-2px)" : "translateY(0)";
    e.currentTarget.style.opacity = enter ? ".9" : "1";
  };

  if (type === "quiz") {
    return (
      <Link
        to={href}
        style={pillStyle}
        onMouseEnter={e => handleHover(e, true)}
        onMouseLeave={e => handleHover(e, false)}
      >
        <span style={{ fontSize: ".85rem" }}>{icons[type]}</span>
        {label}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={pillStyle}
      onMouseEnter={e => handleHover(e, true)}
      onMouseLeave={e => handleHover(e, false)}
    >
      <span style={{ fontSize: ".85rem" }}>{icons[type]}</span>
      {label}
    </a>
  );
}

// ── Subject block (accordion) ─────────────────────────────────────────────────
function SubjectBlock({ subject }) {
  const [open, setOpen] = useState(false);
  const themeCount = subject.themes.length;

  return (
    <div style={{
      borderRadius: "6px", overflow: "hidden",
      border: "1px solid #252830",
    }}>
      {/* Header */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "1.1rem 1.4rem", cursor: "pointer",
          background: open ? "#1a1d24" : "#13151a",
          transition: "background .2s", userSelect: "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: ".9rem" }}>
          <span style={{
            width: 10, height: 10, borderRadius: "50%",
            background: subject.color, flexShrink: 0,
          }} />
          <span style={{ fontSize: "1rem", fontWeight: 600, letterSpacing: ".04em", color: "#e8eaf0" }}>
            {subject.name}
          </span>
          <span style={{
            fontSize: ".7rem", color: "#5a6070",
            background: "#1e2230", border: "1px solid #2e3340",
            borderRadius: "20px", padding: ".2rem .7rem",
          }}>
            {themeCount} {themeCount === 1 ? "tema" : "temas"}
          </span>
        </div>
        <span style={{
          color: "#5a6070", fontSize: ".9rem",
          transition: "transform .3s",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          display: "inline-block",
        }}>▾</span>
      </div>

      {/* Themes */}
      <div style={{
        background: "#13151a",
        borderTop: open ? "1px solid #252830" : "none",
        maxHeight: open ? "2000px" : "0",
        overflow: "hidden",
        transition: "max-height .4s ease",
      }}>
        {subject.themes.map((theme, i) => (
          <div
            key={theme.id}
            style={{
              padding: "1.1rem 1.4rem 1.1rem 2.4rem",
              borderBottom: i < subject.themes.length - 1 ? "1px solid #252830" : "none",
            }}
          >
            {/* Theme title */}
            <div style={{
              display: "flex", alignItems: "center", gap: ".6rem",
              fontSize: ".92rem", fontWeight: 500, color: "#e8eaf0",
              marginBottom: ".8rem",
            }}>
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#3d4452", flexShrink: 0 }} />
              {theme.name}
            </div>

            {/* Resources */}
            <div style={{ display: "flex", gap: ".6rem", flexWrap: "wrap", alignItems: "center" }}>
              {theme.quiz  && <ResourcePill type="quiz"  href={theme.quiz}  label="Cuestionario" />}
              {theme.video && <ResourcePill type="video" href={theme.video} label="Video" />}
              {theme.pdf   && <ResourcePill type="pdf"   href={theme.pdf}   label="Resumen PDF" />}
              {!theme.quiz && !theme.video && !theme.pdf && (
                <span style={{
                  fontSize: ".72rem", color: "#5a6070",
                  letterSpacing: ".1em", textTransform: "uppercase", fontStyle: "italic",
                }}>
                  Recursos próximamente
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main SubjectPage component ────────────────────────────────────────────────
export default function SubjectPage({ level, subjects }) {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");

  const levelLabel = level === "preparatoria" ? "Preparatoria" : "Universidad";

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const filtered = activeFilter === "all"
    ? subjects
    : subjects.filter(s => s.id === activeFilter);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root {
          min-height: 100%; background: #0e0f11;
          color: #e8eaf0; font-family: 'DM Sans', sans-serif;
        }
        a { text-decoration: none; }

        .filter-btn {
          padding: .4rem 1rem; background: #1a1d24;
          border: 1px solid #252830; border-radius: 20px;
          color: #5a6070; font-size: .78rem; letter-spacing: .08em;
          cursor: pointer; transition: all .2s;
          font-family: 'DM Sans', sans-serif;
        }
        .filter-btn.active,
        .filter-btn:hover {
          background: rgba(59,158,255,.12);
          border-color: #3b9eff; color: #e8eaf0;
        }
        .subject-block:hover > .subject-header { background: #1a1d24; }
        @media(max-width:600px){
          .page-title { font-size: 1.8rem !important; }
          .content-wrap { padding: 1rem !important; }
        }
      `}</style>

      {/* ── Nav ── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(13,15,17,.9)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid #252830",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: ".9rem 2rem",
      }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: ".9rem" }}>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            border: "1px dashed rgba(59,158,255,.4)", overflow: "hidden",
          }}>
            <img src={`${import.meta.env.BASE_URL}assets/logoX.png`} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#e8eaf0" }}>
  FACTO<span style={{ color: "#3b9eff" }}>ℝ[i]</span>ZANDO
</span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{
            fontSize: ".7rem", letterSpacing: ".18em", textTransform: "uppercase",
            color: "#3b9eff", background: "rgba(59,158,255,.12)",
            border: "1px solid rgba(59,158,255,.2)", borderRadius: "20px",
            padding: ".3rem .9rem",
          }}>
            {levelLabel}
          </span>
          <button
            onClick={handleLogout}
            style={{
              background: "none", border: "1px solid #252830", borderRadius: "3px",
              color: "#5a6070", fontSize: ".78rem", letterSpacing: ".1em",
              textTransform: "uppercase", padding: ".4rem .9rem",
              cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
              transition: "border-color .2s, color .2s",
            }}
          >
            Cerrar sesión
          </button>
        </div>
      </nav>

      {/* ── Page header ── */}
      <div style={{
        padding: "3rem 2rem 2rem",
        borderBottom: "1px solid #252830",
        background: "linear-gradient(to bottom, rgba(59,158,255,.04), transparent)",
      }}>
        <div style={{ maxWidth: 960, width: "100%", margin: "0 auto" }}></div>
        <div style={{
          fontSize: ".7rem", letterSpacing: ".25em", textTransform: "uppercase",
          color: "#5a6070", marginBottom: ".6rem",
          display: "flex", alignItems: "center", gap: ".5rem",
        }}>
          <span style={{ width: 20, height: 1, background: "#5a6070", display: "inline-block" }} />
          Materiales de estudio
        </div>
        <h1 className="page-title" style={{
          fontFamily: "'Playfair Display', serif", fontSize: "2.4rem",
          fontWeight: 700, color: "#e8eaf0", marginBottom: ".5rem",
        }}>
          {levelLabel}
        </h1>
        <p style={{ fontSize: ".9rem", color: "#5a6070", maxWidth: 480, lineHeight: 1.6 }}>
          Selecciona una materia, elige el tema y accede a cuestionarios interactivos, videos y resúmenes en PDF.
        </p>
      </div>

      {/* ── Filter bar ── */}
      <div style={{
        display: "flex", gap: ".5rem", flexWrap: "wrap",
        padding: "1.2rem 2rem", borderBottom: "1px solid #252830",
        position: "sticky", top: 61, zIndex: 90,
        background: "rgba(13,15,17,.92)", backdropFilter: "blur(8px)",
      }}>
        <button
          className={`filter-btn${activeFilter === "all" ? " active" : ""}`}
          onClick={() => setActiveFilter("all")}
        >
          Todas
        </button>
        {subjects.map(s => (
          <button
            key={s.id}
            className={`filter-btn${activeFilter === s.id ? " active" : ""}`}
            onClick={() => setActiveFilter(s.id)}
          >
            {s.name}
          </button>
        ))}
      </div>

      {/* ── Subjects ── */}
      <div
        className="content-wrap"
        style={{ padding: "2rem", maxWidth: 960, width:"100%", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.5rem" }}
      >
        {filtered.map(subject => (
          <SubjectBlock key={subject.id} subject={subject} />
        ))}
      </div>

      <footer style={{
        textAlign: "center", padding: "2rem",
        fontSize: ".72rem", color: "#5a6070", letterSpacing: ".1em",
        borderTop: "1px solid #252830", marginTop: "2rem",
      }}>
        © Factorizando — Todos los derechos reservados
      </footer>
    </>
  );
}
