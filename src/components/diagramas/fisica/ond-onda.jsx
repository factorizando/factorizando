// Diagrama «ond-onda» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

import { arrowHead } from "../comun.jsx";

export default function OndOndaSVG({ tema }) {
  const a = tema.acento, mu = tema.muted, bl = tema.azul, gr = tema.verde;
  const axis = 64;
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 130 }}>
      <line x1={18} y1={axis} x2={232} y2={axis} stroke={mu} strokeWidth="1" strokeDasharray="3 3" />
      <path d="M 24 64 Q 48 30 72 64 T 120 64 T 168 64 T 216 64" stroke={a} strokeWidth="2.5" fill="none" />
      <line x1={48} y1={30} x2={48} y2={104} stroke={mu} strokeWidth="1" strokeDasharray="3 3" />
      <line x1={144} y1={30} x2={144} y2={104} stroke={mu} strokeWidth="1" strokeDasharray="3 3" />
      <line x1={48} y1={98} x2={144} y2={98} stroke={bl} strokeWidth="1.4" />
      <polygon points={arrowHead(62, 98, 48, 98, 6)} fill={bl} />
      <polygon points={arrowHead(130, 98, 144, 98, 6)} fill={bl} />
      <text x={96} y={113} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">λ</text>
      <line x1={48} y1={64} x2={48} y2={30} stroke={gr} strokeWidth="1.4" />
      <text x={53} y={46} fill={gr} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic">A</text>
    </svg>
  );
}
