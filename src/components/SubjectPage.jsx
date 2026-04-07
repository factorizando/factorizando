// src/components/SubjectPage.jsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import BrandName from "./BrandName";

const C = {
  bg: "#0e0f11",
  surface: "#13151a",
  surface2: "#0f1114",
  border: "#252830",
  border2: "#1e2230",
  blue: "#3b9eff",
  text: "#e8eaf0",
  text2: "#c8cad4",
  muted: "#5a6070",
  dot: "#3d4452",
};

function ResourcePill({ type, href, label, onClick }) {
  const navigate = useNavigate();
  const isInternal = href && href.startsWith("/") && !href.includes(".");
  const styles = {
    quiz:   { bg: C.blue,    color: "#fff",    border: "none",                            shadow: "0 2px 12px rgba(59,158,255,.3)" },
    video:  { bg: "#1a2535", color: "#60a5fa", border: "1px solid rgba(96,165,250,.25)",  shadow: "none" },
    teoria: { bg: "#1e1a2e", color: "#c084fc", border: "1px solid rgba(192,132,252,.25)", shadow: "none" },
  };
  const icons = { quiz: "⚡", video: "▶", teoria: "📄" };
  const s = styles[type];
  const base = {
    display: "inline-flex", alignItems: "center", gap: ".45rem",
    padding: ".38rem .85rem", borderRadius: "3px",
    background: s.bg, color: s.color, border: s.border, boxShadow: s.shadow,
    fontSize: ".75rem", fontWeight: 500, letterSpacing: ".06em",
    textDecoration: "none", cursor: "pointer",
    transition: "transform .15s, opacity .15s",
    fontFamily: "'DM Sans', sans-serif",
  };
  const hover = (e, enter) => {
    e.currentTarget.style.transform = enter ? "translateY(-2px)" : "translateY(0)";
    e.currentTarget.style.opacity   = enter ? ".9" : "1";
  };
  if (type === "quiz") {
    return (
      <button onClick={() => onClick && onClick(href)} style={{ ...base, border: "none" }}
        onMouseEnter={(e) => hover(e, true)} onMouseLeave={(e) => hover(e, false)}>
        <span style={{ fontSize: ".85rem" }}>{icons[type]}</span>{label}
      </button>
    );
  }
  if (isInternal) {
    return (
      <button onClick={() => navigate(href)} style={{ ...base, border: s.border }}
        onMouseEnter={(e) => hover(e, true)} onMouseLeave={(e) => hover(e, false)}>
        <span style={{ fontSize: ".85rem" }}>{icons[type]}</span>{label}
      </button>
    );
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" style={base}
      onMouseEnter={(e) => hover(e, true)} onMouseLeave={(e) => hover(e, false)}>
      <span style={{ fontSize: ".85rem" }}>{icons[type]}</span>{label}
    </a>
  );
}

function ResourcesRow({ node, onQuizOpen }) {
  const hasAny = node.quiz || node.video || node.teoria;
  if (!hasAny) return (
    <span style={{ fontSize: ".72rem", color: C.muted, letterSpacing: ".1em", textTransform: "uppercase", fontStyle: "italic" }}>
      Recursos próximamente
    </span>
  );
  return (
    <div style={{ display: "flex", gap: ".6rem", flexWrap: "wrap", alignItems: "center" }}>
      {node.quiz   && <ResourcePill type="quiz"   href={node.quiz}   label="Cuestionario" onClick={onQuizOpen} />}
      {node.video  && <ResourcePill type="video"  href={node.video}  label="Video" />}
      {node.teoria && <ResourcePill type="teoria" href={node.teoria} label="Teoría" />}
    </div>
  );
}

function TreeNode({ node, depth, isLast, onQuizOpen }) {
  const [open, setOpen] = useState(false);
  const hasChildren = node.children && node.children.length > 0;
  const hasResources = node.quiz || node.video || node.teoria;
  const paddingLeft = `${1.4 + depth * 0.9}rem`;
  const dotSize   = Math.max(3, 5 - depth);
  const fontSize  = depth === 1 ? ".9rem" : ".85rem";
  const fontWeight = depth === 1 ? 500 : 400;
  const textColor = depth === 1 ? C.text : C.text2;
  const childCount = hasChildren ? node.children.length : 0;
  const childLabel = depth === 1
    ? `${childCount} ${childCount === 1 ? "subtema" : "subtemas"}`
    : `${childCount} ${childCount === 1 ? "elemento" : "elementos"}`;

  return (
    <div style={{ borderBottom: isLast ? "none" : `1px solid ${C.border}` }}>
      {hasChildren ? (
        <div
          onClick={() => setOpen(!open)}
          style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: `1rem 1.4rem 1rem ${paddingLeft}`,
            cursor: "pointer",
            background: open ? "#16181f" : "transparent",
            transition: "background .2s", userSelect: "none",
          }}
          onMouseEnter={(e) => { if (!open) e.currentTarget.style.background = "#16181f"; }}
          onMouseLeave={(e) => { if (!open) e.currentTarget.style.background = "transparent"; }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: ".7rem" }}>
            <span style={{ width: dotSize, height: dotSize, borderRadius: "50%", background: C.dot, flexShrink: 0 }} />
            <span style={{ fontSize, fontWeight, color: textColor }}>{node.name}</span>
            <span style={{
              fontSize: ".68rem", color: C.muted, background: "#1e2230",
              border: `1px solid ${C.border2}`, borderRadius: "20px", padding: ".15rem .6rem",
            }}>
              {childLabel}
            </span>
          </div>
          <span style={{
            color: C.muted, fontSize: ".8rem",
            transition: "transform .3s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            display: "inline-block",
          }}>▾</span>
        </div>
      ) : (
        <div style={{ padding: `1rem 1.4rem 1rem ${paddingLeft}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: ".6rem", marginBottom: ".7rem" }}>
            <span style={{ width: dotSize, height: dotSize, borderRadius: "50%", background: C.dot, flexShrink: 0 }} />
            <span style={{ fontSize, fontWeight, color: textColor }}>{node.name}</span>
          </div>
          <div style={{ paddingLeft: ".6rem" }}>
            <ResourcesRow node={node} onQuizOpen={onQuizOpen} />
          </div>
        </div>
      )}

      {hasChildren && hasResources && open && (
        <div style={{
          padding: `.5rem 1.4rem .8rem ${paddingLeft}`,
          background: C.surface2,
          borderTop: `1px solid ${C.border2}`,
        }}>
          <div style={{ paddingLeft: `${dotSize + 8}px` }}>
            <ResourcesRow node={node} onQuizOpen={onQuizOpen} />
          </div>
        </div>
      )}

      {hasChildren && (
        <div style={{
          maxHeight: open ? "9999px" : "0",
          overflow: "hidden",
          transition: "max-height .4s ease",
          background: C.surface2,
          borderTop: open ? `1px solid ${C.border2}` : "none",
        }}>
          {node.children.map((child, i) => (
            <TreeNode
              key={child.id}
              node={child}
              depth={depth + 1}
              isLast={i === node.children.length - 1}
              onQuizOpen={onQuizOpen}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function SubjectBlock({ subject, onQuizOpen }) {
  const [open, setOpen] = useState(false);
  const count = subject.children?.length ?? 0;

  return (
    <div style={{ borderRadius: "6px", overflow: "hidden", border: `1px solid ${C.border}` }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "1rem 1.4rem",
          cursor: "pointer",
          background: open ? "#16181f" : C.surface,
          transition: "background .2s", userSelect: "none",
          borderLeft: `3px solid ${subject.color || C.blue}`,
        }}
        onMouseEnter={(e) => { if (!open) e.currentTarget.style.background = "#16181f"; }}
        onMouseLeave={(e) => { if (!open) e.currentTarget.style.background = open ? "#16181f" : C.surface; }}
      >
        <div>
          <div style={{ fontSize: ".92rem", fontWeight: 600, color: C.text }}>{subject.name}</div>
          <div style={{ fontSize: ".72rem", color: C.muted, marginTop: ".2rem" }}>{count} {count === 1 ? "tema" : "temas"}</div>
        </div>
        <span style={{
          color: C.muted, fontSize: ".9rem",
          transition: "transform .3s",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          display: "inline-block",
        }}>▾</span>
      </div>

      <div style={{ maxHeight: open ? "9999px" : "0", overflow: "hidden", transition: "max-height .5s ease" }}>
        {subject.children?.map((child, i) => (
          <TreeNode
            key={child.id}
            node={child}
            depth={1}
            isLast={i === subject.children.length - 1}
            onQuizOpen={onQuizOpen}
          />
        ))}
      </div>
    </div>
  );
}

export default function SubjectPage({ level, subjects }) {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");
  const levelLabel = level === "preparatoria" ? "Preparatoria" : "Universidad";

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const handleQuizOpen = (quizPath) => {
    const id = quizPath.split("/").pop();
    navigate(`/selector/${id}`);
  };

  const filtered = activeFilter === "all"
    ? subjects
    : subjects.filter((s) => s.id === activeFilter);

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { min-height: 100%; background: #0e0f11; color: #e8eaf0; font-family: 'DM Sans', sans-serif; }
        a { text-decoration: none; }
        .filter-btn {
          padding: .4rem 1rem; background: #1a1d24;
          border: 1px solid #252830; border-radius: 20px;
          color: #5a6070; font-size: .78rem; letter-spacing: .08em;
          cursor: pointer; transition: all .2s; font-family: 'DM Sans', sans-serif;
        }
        .filter-btn.active, .filter-btn:hover { background: rgba(59,158,255,.12); border-color: #3b9eff; color: #e8eaf0; }
        @media(max-width:600px){ .page-title { font-size: 1.8rem !important; } .content-wrap { padding: 1rem !important; } }
      `}</style>

      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(13,15,17,.9)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid #252830",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: ".9rem 2rem",
      }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: ".9rem" }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", border: "1px dashed rgba(59,158,255,.4)", overflow: "hidden" }}>
            <img src={`${import.meta.env.BASE_URL}assets/logoX.png`} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <BrandName size="1.1rem" />
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{
            fontSize: ".7rem", letterSpacing: ".18em", textTransform: "uppercase",
            color: "#3b9eff", background: "rgba(59,158,255,.12)",
            border: "1px solid rgba(59,158,255,.2)", borderRadius: "20px", padding: ".3rem .9rem",
          }}>{levelLabel}</span>
          <button onClick={handleLogout} style={{
            background: "none", border: "1px solid #252830", borderRadius: "3px",
            color: "#5a6070", fontSize: ".78rem", letterSpacing: ".1em",
            textTransform: "uppercase", padding: ".4rem .9rem", cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif", transition: "border-color .2s, color .2s",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#3b9eff"; e.currentTarget.style.color = "#e8eaf0"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#252830"; e.currentTarget.style.color = "#5a6070"; }}
          >Cerrar sesión</button>
        </div>
      </nav>

      <div style={{ padding: "3rem 2rem 2rem", borderBottom: "1px solid #252830", background: "linear-gradient(to bottom, rgba(59,158,255,.04), transparent)" }}>
        <div style={{ maxWidth: 960, width: "100%", margin: "0 auto" }}>
          <div style={{ fontSize: ".7rem", letterSpacing: ".25em", textTransform: "uppercase", color: "#5a6070", marginBottom: ".6rem", display: "flex", alignItems: "center", gap: ".5rem" }}>
            <span style={{ width: 20, height: 1, background: "#5a6070", display: "inline-block" }} />
            Materiales de estudio
          </div>
          <h1 className="page-title" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "2.4rem", fontWeight: 700, color: "#e8eaf0", marginBottom: ".5rem" }}>
            {levelLabel}
          </h1>
          <p style={{ fontSize: ".9rem", color: "#5a6070", maxWidth: 480, lineHeight: 1.6 }}>
            Selecciona una materia, elige el tema y accede a cuestionarios interactivos, videos y teoría.
          </p>
        </div>
      </div>

      <div style={{
        display: "flex", gap: ".5rem", flexWrap: "wrap",
        padding: "1.2rem 2rem", borderBottom: "1px solid #252830",
        position: "sticky", top: 61, zIndex: 90,
        background: "rgba(13,15,17,.92)", backdropFilter: "blur(8px)",
      }}>
        <button className={`filter-btn${activeFilter === "all" ? " active" : ""}`} onClick={() => setActiveFilter("all")}>Todas</button>
        {subjects.map((s) => (
          <button key={s.id} className={`filter-btn${activeFilter === s.id ? " active" : ""}`} onClick={() => setActiveFilter(s.id)}>
            {s.name}
          </button>
        ))}
      </div>

      <div className="content-wrap" style={{
        padding: "2rem", maxWidth: 960, width: "100%",
        margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.5rem",
      }}>
        {filtered.map((subject) => (
          <SubjectBlock key={subject.id} subject={subject} onQuizOpen={handleQuizOpen} />
        ))}
      </div>

      <footer style={{ textAlign: "center", padding: "2rem", fontSize: ".72rem", color: "#5a6070", letterSpacing: ".1em", borderTop: "1px solid #252830", marginTop: "2rem" }}>
        © Factorizando — Todos los derechos reservados
      </footer>
    </>
  );
}
