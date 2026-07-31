// src/components/admin/AdminHeader.jsx
// Barra superior del panel admin: replica el estilo de AppHeader con navegación
// por tabs en vez de barra de búsqueda.
import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useKaTeX } from "../../data/teoria/shared.jsx";

const TABS = [
  { id: "alumnos",         label: "Alumnos" },
  { id: "tutores",         label: "Tutores" },
  { id: "cuestionarios",   label: "Estadísticas" },
  { id: "presentaciones",  label: "Presentaciones" },
  { id: "cursos",          label: "Cursos" },
  { id: "inscripciones",   label: "Inscripciones" },
  { id: "cargos",          label: "Cargos" },
  { id: "suscripciones",   label: "Suscripciones" },
  // `to` = la tab no cambia el panel embebido, navega a una ruta propia.
  { id: "regularizacion",  label: "Regularización", to: "/regularizacion" },
];

function BrandName() {
  const ready = useKaTeX();
  const ref = useRef(null);
  useEffect(() => {
    if (ready && window.katex && ref.current) {
      try {
        window.katex.render("\\mathbb{R}[i]", ref.current, { throwOnError: false, displayMode: false });
      } catch { /* fallback text */ }
    }
  }, [ready]);
  return (
    <span className="ah-brand-name">
      Facto<span className="ah-brand-math" ref={ref}>ℝ[i]</span>zando
    </span>
  );
}

// `chip` nombra la sección a la derecha de la marca. `tabs` puede recibir un
// arreglo vacío para reusar la cáscara (marca, tipografía, responsivo) sin
// exponer la navegación del back-office: es lo que hace Regularización, que es
// una sección independiente y no una pestaña más del panel.
export default function AdminHeader({ active, onChange, tabs, chip = "Panel Admin" }) {
  const navigate = useNavigate();
  const items = tabs || TABS;

  function handleClick(tab) {
    if (tab.to) {
      navigate(tab.to);
    } else if (onChange) {
      onChange(tab.id);
    } else {
      navigate("/admin");
    }
  }

  return (
    <header className="ah-top">
      <style>{CSS}</style>

      <div className="ah-brand">
        <Link to="/" className="ah-logo-link" title="Inicio">
          <span className="ah-logo-ring">
            <img src={`${import.meta.env.BASE_URL}assets/logoX.png`} alt="Factorizando" />
          </span>
        </Link>
        <BrandName />
        <span className="ah-sep">|</span>
        <span className="ah-chip">{chip}</span>
      </div>

      <nav className="ahn-nav">
        {items.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`ahn-btn ${active === t.id ? "ahn-active" : ""}`}
            onClick={() => handleClick(t)}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <div className="ah-cuenta">
        <Link to="/" className="ah-ghost">← Inicio</Link>
      </div>
    </header>
  );
}

const CSS = `
.ah-top { display: flex; align-items: center; justify-content: space-between; gap: 18px;
  height: 60px; padding: 0 18px; background: #0e0f11;
  border-bottom: 1px solid var(--border-soft); flex-shrink: 0; position: sticky; top: 0; z-index: 20;
  --bg: #0e0f11; --surface: #16181c; --surface-2: #1c1f24;
  --border: rgba(255,255,255,0.09); --border-soft: rgba(255,255,255,0.05); --border-strong: rgba(255,255,255,0.16);
  --text: #e8e8e8; --text-muted: #9c958a; --heading: #e8e8e8;
  --brand: #e8e8e8; --azul-suave: #80c6ff; --azul-suave-soft: rgba(128,198,255,0.13); }
.ah-top * { box-sizing: border-box; }
/* MARCA */
.ah-brand { display: flex; align-items: center; gap: 9px; font-weight: 700; flex-shrink: 0; }
.ah-logo-link { display: inline-flex; align-items: center; }
.ah-logo-ring { display: inline-block; width: 34px; height: 34px; border-radius: 50%;
  border: 1px dashed var(--border-strong); overflow: hidden; flex-shrink: 0; }
.ah-logo-ring img { width: 100%; height: 100%; object-fit: cover; display: block; }
.ah-brand-name { font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 700;
  font-size: clamp(16px, 3.4vw, 20px); letter-spacing: .01em; white-space: nowrap; color: var(--brand); }
.ah-brand-math { color: var(--azul-suave); }
.ah-brand-math .katex { color: var(--azul-suave); }
.ah-sep { color: var(--border-strong); font-weight: 400; }
.ah-chip { font-size: 14px; font-weight: 600; color: var(--text); white-space: nowrap; }
/* CUENTA */
.ah-cuenta { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
.ah-ghost { display: inline-flex; align-items: center; text-decoration: none;
  font-size: 14px; font-weight: 600; color: var(--text); padding: 9px 14px;
  border-radius: 99px; transition: background .15s, color .15s; white-space: nowrap;
  background: none; border: none; cursor: pointer; font-family: inherit; }
.ah-ghost:hover { background: var(--surface-2); color: var(--heading); }
/* NAVEGACIÓN ADMIN */
.ahn-nav { flex: 1; display: flex; align-items: center; gap: 2px;
  overflow-x: auto; scrollbar-width: none; padding: 0 8px; justify-content: center; }
.ahn-nav::-webkit-scrollbar { display: none; }
.ahn-btn { border: none; background: transparent; color: var(--text-muted);
  font-size: 13px; font-weight: 500; padding: 7px 12px; border-radius: 6px;
  cursor: pointer; white-space: nowrap; transition: color .15s, background .15s;
  font-family: 'DM Sans', sans-serif; }
.ahn-btn:hover { color: var(--text); background: var(--surface-2); }
.ahn-active { color: var(--text) !important; font-weight: 700; background: var(--surface-2); }
/* RESPONSIVO */
@media (max-width: 900px) {
  .ahn-nav { justify-content: flex-start; }
}
@media (max-width: 720px) {
  .ah-chip, .ah-sep { display: none; }
}
@media (max-width: 520px) {
  .ah-top { gap: 10px; padding: 0 12px; }
  .ah-brand-name { display: none; }
  .ah-ghost { padding: 9px 10px; font-size: 13px; }
  .ahn-btn { padding: 6px 8px; font-size: 12px; }
}
`;
