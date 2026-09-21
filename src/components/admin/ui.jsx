// Primitivas del panel de administración sobre el design system (tema claro).
//
// Reglas que respetan (docs/DISENO.md §2): ningún hex escrito a mano —todo sale
// de tokens `--fx-*`—, nada se distingue solo por color (los estados llevan
// ícono + texto), ni verde ni rojo para acierto/error, e íconos SVG (lucide),
// nunca emoji ni glifos como ✓/✗. El CSS se emite una sola vez desde
// `AdminLayout` (constante `ADMIN_CSS`).
import { Search } from "lucide-react";

export const ADMIN_CSS = `
.ax-page { display: flex; flex-direction: column; gap: 24px; }
.ax-page-cab { display: flex; align-items: flex-end; justify-content: space-between;
  gap: 20px; flex-wrap: wrap; }
.ax-page-txt { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
.ax-eyebrow { font-family: var(--fx-font-mono); font-size: var(--fx-caption-size);
  letter-spacing: 0.12em; text-transform: uppercase; color: var(--fx-text-muted); }
.ax-h1 { font-family: var(--fx-font-heading); font-weight: 600; font-size: clamp(24px, 3.4vw, 32px);
  line-height: 1.15; letter-spacing: -0.02em; color: var(--fx-text-heading); margin: 0; }
.ax-page-sub { margin: 0; font-size: var(--fx-body-size); line-height: var(--fx-body-lh);
  color: var(--fx-text-body); max-width: 62ch; text-wrap: pretty; }
.ax-page-acciones { display: flex; gap: 10px; flex-wrap: wrap; }

.ax-card { background: var(--fx-surface); border: 1px solid var(--fx-border);
  border-radius: var(--fx-radius-lg); box-shadow: var(--fx-shadow-card); padding: 20px 22px; }
.ax-card-tit { font-family: var(--fx-font-heading); font-weight: 600; font-size: var(--fx-h5-size);
  color: var(--fx-text-heading); margin: 0 0 14px; }

.ax-grid-stats { display: grid; gap: 14px;
  grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr)); }
.ax-stat { display: flex; align-items: center; gap: 14px; background: var(--fx-surface);
  border: 1px solid var(--fx-border); border-radius: var(--fx-radius-lg); padding: 16px 18px; }
.ax-stat-ic { display: grid; place-items: center; width: 40px; height: 40px; flex: none;
  border-radius: var(--fx-radius-md); background: var(--fx-primary-50); color: var(--fx-primary-700); }
.ax-tone-warning { background: var(--fx-warning-bg); color: var(--fx-warning-text); }
.ax-tone-error   { background: var(--fx-error-bg);   color: var(--fx-error-text); }
.ax-tone-success { background: var(--fx-success-bg); color: var(--fx-success-text); }
.ax-tone-neutral { background: var(--fx-surface-sunken); color: var(--fx-text-muted); }
.ax-stat-val { font-family: var(--fx-font-heading); font-weight: 600; font-size: 26px;
  letter-spacing: -0.02em; color: var(--fx-text-heading); line-height: 1.1; font-variant-numeric: tabular-nums; }
.ax-stat-lbl { font-size: var(--fx-small-size); color: var(--fx-text-muted); margin-top: 2px; }

.ax-badge { display: inline-flex; align-items: center; gap: 6px; border-radius: var(--fx-radius-pill);
  padding: 4px 11px; font-size: var(--fx-small-size); font-weight: 600; line-height: 1.3;
  border: 1px solid transparent; white-space: nowrap; }
.ax-badge-neutral { background: var(--fx-surface-sunken); color: var(--fx-text-muted); border-color: var(--fx-border); }
.ax-badge-accent  { background: var(--fx-primary-50); color: var(--fx-primary-700); border-color: var(--fx-primary-100); }
.ax-badge-info    { background: var(--fx-info-bg);    color: var(--fx-info-text);    border-color: var(--fx-info-border); }
.ax-badge-warning { background: var(--fx-warning-bg); color: var(--fx-warning-text); border-color: var(--fx-warning-border); }
.ax-badge-error   { background: var(--fx-error-bg);   color: var(--fx-error-text);   border-color: var(--fx-error-border); }
.ax-badge-success { background: var(--fx-success-bg); color: var(--fx-success-text); border-color: var(--fx-success-border); }

.ax-btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  height: var(--fx-control-md); padding: 0 18px; border-radius: var(--fx-radius-md);
  font-family: var(--fx-font-body); font-size: var(--fx-small-size); font-weight: 600;
  cursor: pointer; border: 1px solid transparent; white-space: nowrap;
  transition: background var(--fx-transition), border-color var(--fx-transition), color var(--fx-transition); }
.ax-btn:disabled { opacity: .55; cursor: default; }
.ax-btn-primary { background: var(--fx-primary-500); color: var(--fx-text-on-primary); }
.ax-btn-primary:hover:not(:disabled) { background: var(--fx-primary-600); }
.ax-btn-secondary { background: var(--fx-surface); color: var(--fx-primary-700); border-color: var(--fx-primary-200); }
.ax-btn-secondary:hover:not(:disabled) { background: var(--fx-primary-50); border-color: var(--fx-primary-300); }
.ax-btn-ghost { background: transparent; color: var(--fx-text-body); }
.ax-btn-ghost:hover:not(:disabled) { background: var(--fx-surface-sunken); color: var(--fx-text-heading); }
.ax-btn-subtle { background: var(--fx-surface-sunken); color: var(--fx-text-body); border-color: var(--fx-border); }
.ax-btn-subtle:hover:not(:disabled) { border-color: var(--fx-border-strong); color: var(--fx-text-heading); }
.ax-btn-icono { width: var(--fx-control-sm); height: var(--fx-control-sm); padding: 0; }

.ax-search { position: relative; display: flex; align-items: center; }
.ax-search svg { position: absolute; left: 12px; color: var(--fx-text-muted); pointer-events: none; }
.ax-search input { width: 100%; height: var(--fx-control-md); padding: 0 14px 0 38px;
  background: var(--fx-surface); border: 1px solid var(--fx-border); border-radius: var(--fx-radius-md);
  color: var(--fx-text-heading); font-family: var(--fx-font-body); font-size: var(--fx-small-size); outline: none; }
.ax-search input:focus { border-color: var(--fx-primary-400); box-shadow: var(--fx-focus-ring); }
.ax-search input::placeholder { color: var(--fx-text-disabled); }

.ax-field { display: flex; flex-direction: column; gap: 6px; }
.ax-field-lbl { font-size: var(--fx-caption-size); font-weight: 700; letter-spacing: 0.07em;
  text-transform: uppercase; color: var(--fx-text-muted); }
.ax-input { width: 100%; min-height: var(--fx-control-md); padding: 10px 13px;
  background: var(--fx-surface); border: 1px solid var(--fx-border); border-radius: var(--fx-radius-md);
  color: var(--fx-text-heading); font-family: var(--fx-font-body); font-size: var(--fx-small-size); outline: none; }
.ax-input:focus { border-color: var(--fx-primary-400); box-shadow: var(--fx-focus-ring); }
.ax-select { appearance: auto; }
.ax-textarea { resize: vertical; min-height: 88px; }

.ax-overlay { position: fixed; inset: 0; z-index: 100; display: flex; align-items: center;
  justify-content: center; padding: 24px 16px; background: rgba(10, 37, 64, 0.35);
  backdrop-filter: blur(3px); overflow-y: auto; }
.ax-modal { background: var(--fx-surface); border: 1px solid var(--fx-border);
  border-radius: var(--fx-radius-xl); box-shadow: var(--fx-shadow-float); width: 100%;
  max-height: 88vh; overflow: auto; padding: 24px 26px; }
.ax-modal-cab { display: flex; align-items: center; justify-content: space-between;
  gap: 14px; margin-bottom: 18px; }
.ax-modal-tit { font-family: var(--fx-font-heading); font-weight: 600; font-size: var(--fx-h5-size);
  color: var(--fx-text-heading); margin: 0; }
.ax-modal-x { display: grid; place-items: center; width: 36px; height: 36px; flex: none;
  border: none; background: none; color: var(--fx-text-muted); cursor: pointer;
  border-radius: var(--fx-radius-sm); }
.ax-modal-x:hover { background: var(--fx-surface-sunken); color: var(--fx-text-heading); }

.ax-empty { display: flex; flex-direction: column; align-items: center; gap: 10px;
  text-align: center; padding: 56px 20px; color: var(--fx-text-muted); }
.ax-empty svg { color: var(--fx-text-disabled); }
.ax-empty-tit { font-family: var(--fx-font-heading); font-weight: 600; font-size: var(--fx-h5-size);
  color: var(--fx-text-heading); }

.ax-tabla { width: 100%; border-collapse: collapse; font-size: var(--fx-small-size); }
.ax-tabla th { text-align: left; font-size: var(--fx-caption-size); font-weight: 700;
  letter-spacing: 0.07em; text-transform: uppercase; color: var(--fx-text-muted);
  padding: 0 12px 10px; border-bottom: 1px solid var(--fx-border); white-space: nowrap; }
.ax-tabla td { padding: 12px; border-bottom: 1px solid var(--fx-border); color: var(--fx-text-body); }
.ax-tabla tr:last-child td { border-bottom: none; }

.ax-lista { display: flex; flex-direction: column; gap: 12px; }
.ax-fila { display: flex; align-items: center; gap: 14px; }
.ax-aparecer { flex: 1; min-width: 0; }
.ax-nombre { font-family: var(--fx-font-heading); font-weight: 600; font-size: var(--fx-body-size);
  color: var(--fx-text-heading); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ax-sub { font-size: var(--fx-small-size); color: var(--fx-text-muted); overflow: hidden;
  text-overflow: ellipsis; white-space: nowrap; }
.ax-avatar { display: grid; place-items: center; width: 42px; height: 42px; flex: none;
  border-radius: 50%; background: var(--fx-primary-50); color: var(--fx-primary-700);
  font-family: var(--fx-font-heading); font-weight: 700; font-size: var(--fx-body-size); overflow: hidden; }
.ax-avatar img { width: 100%; height: 100%; object-fit: cover; }
.ax-acciones { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
`;

export function Card({ children, className = "", style }) {
  return <div className={`ax-card ${className}`} style={style}>{children}</div>;
}

export function Page({ eyebrow, titulo, descripcion, acciones, children }) {
  return (
    <section className="ax-page">
      <header className="ax-page-cab">
        <div className="ax-page-txt">
          {eyebrow && <span className="ax-eyebrow">{eyebrow}</span>}
          {titulo && <h1 className="ax-h1">{titulo}</h1>}
          {descripcion && <p className="ax-page-sub">{descripcion}</p>}
        </div>
        {acciones && <div className="ax-page-acciones">{acciones}</div>}
      </header>
      {children}
    </section>
  );
}

const TONO_BADGE = {
  info: "ax-badge-info",
  warning: "ax-badge-warning",
  error: "ax-badge-error",
  success: "ax-badge-success",
  neutral: "ax-badge-neutral",
  accent: "ax-badge-accent",
};

export function Badge({ tone = "neutral", icono: Icono, children }) {
  return (
    <span className={`ax-badge ${TONO_BADGE[tone] || TONO_BADGE.neutral}`}>
      {Icono && <Icono size={14} strokeWidth={2.2} aria-hidden="true" />}
      {children}
    </span>
  );
}

const TONO_STAT = { info: "ax-tone-accent", warning: "ax-tone-warning", error: "ax-tone-error", success: "ax-tone-success", neutral: "ax-tone-neutral", accent: "ax-tone-accent" };

export function Stat({ label, value, tone = "neutral", icono: Icono }) {
  return (
    <div className="ax-stat">
      {Icono && <span className={`ax-stat-ic ${TONO_STAT[tone] || TONO_STAT.neutral}`}><Icono size={19} aria-hidden="true" /></span>}
      <div>
        <div className="ax-stat-val">{value}</div>
        <div className="ax-stat-lbl">{label}</div>
      </div>
    </div>
  );
}

const VARIANTE = {
  primary: "ax-btn-primary",
  secondary: "ax-btn-secondary",
  ghost: "ax-btn-ghost",
  subtle: "ax-btn-subtle",
};

export function Button({ variante = "secondary", icono: Icono, children, className = "", title, ...props }) {
  const soloIcono = !children && Icono;
  return (
    <button
      type="button"
      className={`ax-btn ${VARIANTE[variante] || VARIANTE.secondary}${soloIcono ? " ax-btn-icono" : ""} ${className}`}
      title={title}
      {...props}
    >
      {Icono && <Icono size={16} aria-hidden="true" />}
      {children}
    </button>
  );
}

export function SearchField({ value, onChange, placeholder = "Buscar…", style }) {
  return (
    <div className="ax-search" style={style}>
      <Search size={16} aria-hidden="true" />
      <input value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
}

export function Field({ label, children }) {
  return (
    <label className="ax-field">
      <span className="ax-field-lbl">{label}</span>
      {children}
    </label>
  );
}

export function Input(props) { return <input className="ax-input" {...props} />; }
export function Select({ children, ...props }) {
  return <select className="ax-input ax-select" {...props}>{children}</select>;
}
export function Textarea(props) { return <textarea className="ax-input ax-textarea" {...props} />; }

export function Modal({ titulo, onClose, children, ancho = 520 }) {
  return (
    <div
      className="ax-overlay"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="ax-modal" role="dialog" aria-modal="true" style={{ maxWidth: ancho }}>
        <div className="ax-modal-cab">
          <h3 className="ax-modal-tit">{titulo}</h3>
          <button type="button" className="ax-modal-x" onClick={onClose} aria-label="Cerrar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export function EmptyState({ icono: Icono, titulo, children }) {
  return (
    <div className="ax-empty">
      {Icono && <Icono size={34} strokeWidth={1.6} aria-hidden="true" />}
      {titulo && <span className="ax-empty-tit">{titulo}</span>}
      {children && <span>{children}</span>}
    </div>
  );
}
