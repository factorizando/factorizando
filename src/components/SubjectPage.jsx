// src/components/SubjectPage.jsx
// Estructura: Materia → Tema (acordeón) → Subtema (indentado) → Recursos

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import BrandName from "./BrandName";
import Divisibilidad from "../pages/cuestionarios/Divisibilidad";
import SumaEnteros   from "../pages/cuestionarios/SumaEnteros";
import LaCelula from "../pages/cuestionarios/LaCelula";
import ProductoEnteros from "../pages/cuestionarios/ProductoEnteros";
import EnterosPrepa from "../pages/cuestionarios/EnterosPrepa";
import SintaxisEspanol from "../pages/cuestionarios/SintaxisEspanol";
import PrimosMCDMCM from "../pages/cuestionarios/PrimosMCDMCM";
import OrtografiaGrafias from "../pages/cuestionarios/OrtografiaGrafias";
import CelulaOrganelos from "../pages/cuestionarios/CelulaOrganelos";
import SinonimosAntonimosAnalogias from "../pages/cuestionarios/SinonimosAntonimosAnalogias";




const QUIZ_REGISTRY = {
  "/cuestionario/divisibilidad": Divisibilidad,
  "/cuestionario/suma-enteros":  SumaEnteros,
  "/cuestionario/la-celula":  LaCelula,
  "/cuestionario/producto-enteros": ProductoEnteros,
  "/cuestionario/enteros-prepa": EnterosPrepa,
  "/cuestionario/sintaxis-espanol": SintaxisEspanol,
  "/cuestionario/primos-mcd-mcm": PrimosMCDMCM,
  "/cuestionario/ortografia-grafias": OrtografiaGrafias,
  "/cuestionario/celula-organelos": CelulaOrganelos,
  "/cuestionario/sinonimos-antonimos-analogias": SinonimosAntonimosAnalogias,
};

// ── Resource pill ─────────────────────────────────────────────────────────────
function ResourcePill({ type, href, label, onClick }) {
  const styles = {
    quiz:   { bg: "#3b9eff", color: "#fff", border: "none", shadow: "0 2px 12px rgba(59,158,255,.3)" },
    video:  { bg: "#1a2535", color: "#60a5fa", border: "1px solid rgba(96,165,250,.25)", shadow: "none" },
    teoria: { bg: "#1e1a2e", color: "#c084fc", border: "1px solid rgba(192,132,252,.25)", shadow: "none" },
  };
  const icons = { quiz: "⚡", video: "▶", teoria: "📄" };
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
      <button
        onClick={() => onClick && onClick(href)}
        style={{ ...pillStyle, border: "none" }}
        onMouseEnter={e => handleHover(e, true)}
        onMouseLeave={e => handleHover(e, false)}
      >
        <span style={{ fontSize: ".85rem" }}>{icons[type]}</span>
        {label}
      </button>
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

// ── Subtopic row ──────────────────────────────────────────────────────────────
function SubtopicRow({ subtopic, isLast, onQuizOpen }) {
  return (
    <div style={{
      padding: "1rem 1.4rem 1rem 3.2rem",
      borderBottom: isLast ? "none" : "1px solid #252830",
    }}>
      {/* Subtopic name */}
      <div style={{
        display: "flex", alignItems: "center", gap: ".6rem",
        fontSize: ".88rem", fontWeight: 500, color: "#c8cad4",
        marginBottom: ".7rem",
      }}>
        <span style={{ width: 3, height: 3, borderRadius: "50%", background: "#3d4452", flexShrink: 0 }} />
        {subtopic.name}
      </div>

      {/* Resources */}
      <div style={{ display: "flex", gap: ".6rem", flexWrap: "wrap", alignItems: "center", paddingLeft: ".6rem" }}>
        {subtopic.quiz   && <ResourcePill type="quiz"   href={subtopic.quiz}   label="Cuestionario" onClick={onQuizOpen} />}
        {subtopic.video  && <ResourcePill type="video"  href={subtopic.video}  label="Video" />}
        {subtopic.teoria && <ResourcePill type="teoria" href={subtopic.teoria} label="Teoría" />}
        {!subtopic.quiz && !subtopic.video && !subtopic.teoria && (
          <span style={{
            fontSize: ".72rem", color: "#5a6070",
            letterSpacing: ".1em", textTransform: "uppercase", fontStyle: "italic",
          }}>
            Recursos próximamente
          </span>
        )}
      </div>
    </div>
  );
}

// ── Theme row (with subtopics) ────────────────────────────────────────────────
function ThemeRow({ theme, isLast, onQuizOpen }) {
  const [open, setOpen] = useState(false);
  const subtopicCount = theme.subtopics?.length ?? 0;

  return (
    <div style={{ borderBottom: isLast ? "none" : "1px solid #252830" }}>
      {/* Theme header */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "1rem 1.4rem 1rem 2.4rem", cursor: "pointer",
          background: open ? "#16181f" : "transparent",
          transition: "background .2s", userSelect: "none",
        }}
        onMouseEnter={e => { if (!open) e.currentTarget.style.background = "#16181f"; }}
        onMouseLeave={e => { if (!open) e.currentTarget.style.background = "transparent"; }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: ".7rem" }}>
          <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#3d4452", flexShrink: 0 }} />
          <span style={{ fontSize: ".9rem", fontWeight: 500, color: "#e8eaf0" }}>
            {theme.name}
          </span>
          <span style={{
            fontSize: ".68rem", color: "#5a6070",
            background: "#1e2230", border: "1px solid #2e3340",
            borderRadius: "20px", padding: ".15rem .6rem",
          }}>
            {subtopicCount} {subtopicCount === 1 ? "subtema" : "subtemas"}
          </span>
        </div>
        <span style={{
          color: "#5a6070", fontSize: ".8rem",
          transition: "transform .3s",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          display: "inline-block",
        }}>▾</span>
      </div>

      {/* Subtopics */}
      <div style={{
        maxHeight: open ? "2000px" : "0",
        overflow: "hidden",
        transition: "max-height .4s ease",
        background: "#0f1114",
        borderTop: open ? "1px solid #1e2230" : "none",
      }}>
        {theme.subtopics?.map((sub, i) => (
          <SubtopicRow
            key={sub.id}
            subtopic={sub}
            isLast={i === theme.subtopics.length - 1}
            onQuizOpen={onQuizOpen}
          />
        ))}
      </div>
    </div>
  );
}

// ── Subject block (accordion) ─────────────────────────────────────────────────
function SubjectBlock({ subject, onQuizOpen }) {
  const [open, setOpen] = useState(false);
  const themeCount = subject.themes.length;

  return (
    <div style={{
      borderRadius: "6px", overflow: "hidden",
      border: "1px solid #252830",
    }}>
      {/* Subject header */}
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
        maxHeight: open ? "4000px" : "0",
        overflow: "hidden",
        transition: "max-height .5s ease",
      }}>
        {subject.themes.map((theme, i) => (
          <ThemeRow
            key={theme.id}
            theme={theme}
            isLast={i === subject.themes.length - 1}
            onQuizOpen={onQuizOpen}
          />
        ))}
      </div>
    </div>
  );
}

// ── Main SubjectPage component ────────────────────────────────────────────────
export default function SubjectPage({ level, subjects }) {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeQuiz, setActiveQuiz]     = useState(null); // ruta del quiz activo

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
        .filter-btn.active, .filter-btn:hover {
          background: rgba(59,158,255,.12);
          border-color: #3b9eff; color: #e8eaf0;
        }
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
          <BrandName size="1.1rem" />
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
          {activeQuiz && (
            <button
              onClick={() => setActiveQuiz(null)}
              style={{
                background: "none", border: "1px solid #252830", borderRadius: "3px",
                color: "#5a6070", fontSize: ".78rem", letterSpacing: ".1em",
                textTransform: "uppercase", padding: ".4rem .9rem",
                cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
                transition: "border-color .2s, color .2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#3b9eff"; e.currentTarget.style.color = "#e8eaf0"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#252830"; e.currentTarget.style.color = "#5a6070"; }}
            >
              ← Materias
            </button>
          )}
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
        <div style={{ maxWidth: 960, width: "100%", margin: "0 auto" }}>
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
            Selecciona una materia, elige el tema y accede a cuestionarios interactivos, videos y teoría.
          </p>
        </div>
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
          onClick={() => { setActiveFilter("all"); setActiveQuiz(null); }}
        >
          Todas
        </button>
        {subjects.map(s => (
          <button
            key={s.id}
            className={`filter-btn${activeFilter === s.id ? " active" : ""}`}
            onClick={() => { setActiveFilter(s.id); setActiveQuiz(null); }}
          >
            {s.name}
          </button>
        ))}
      </div>

      {/* ── Contenido: cuestionario embebido o lista de materias ── */}
      {activeQuiz ? (() => {
        const QuizComponent = QUIZ_REGISTRY[activeQuiz];
        return (
          <div style={{ maxWidth: 960, width: "100%", margin: "0 auto" }}>
            {QuizComponent
              ? <QuizComponent />
              : <p style={{ padding: "2rem", color: "#5a6070" }}>Cuestionario no encontrado.</p>
            }
          </div>
        );
      })() : (
        <>
          <div
            className="content-wrap"
            style={{ padding: "2rem", maxWidth: 960, width: "100%", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {filtered.map(subject => (
              <SubjectBlock key={subject.id} subject={subject} onQuizOpen={setActiveQuiz} />
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
      )}
    </>
  );
}
