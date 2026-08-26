// Diagrama «rep-portada» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

import { arrowHead } from "../comun.jsx";

export default function RepPortadaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted;
  return (
    <svg viewBox="0 0 220 140" width="100%" style={{ display: "block", maxHeight: 140, maxWidth: 280 }}>
      {/* célula madre que se divide */}
      <circle cx={60} cy={70} r={30} fill={`${a}0f`} stroke={a} strokeWidth="2" />
      <circle cx={52} cy={70} r={11} fill={bl} opacity="0.4" />
      <circle cx={68} cy={70} r={11} fill={bl} opacity="0.4" />
      <path d="M 60 42 v 56" stroke={a} strokeWidth="1.4" strokeDasharray="3 3" />
      <line x1={96} y1={70} x2={130} y2={70} stroke={a} strokeWidth="2" />
      <polygon points={arrowHead(96, 70, 130, 70, 8)} fill={a} />
      <circle cx={158} cy={50} r={18} fill={`${a}0f`} stroke={a} strokeWidth="1.8" />
      <circle cx={158} cy={50} r={7} fill={bl} opacity="0.45" />
      <circle cx={158} cy={92} r={18} fill={`${a}0f`} stroke={a} strokeWidth="1.8" />
      <circle cx={158} cy={92} r={7} fill={bl} opacity="0.45" />
      <text x={110} y={128} textAnchor="middle" fill={mu} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif">cómo se perpetúa la vida</text>
    </svg>
  );
}
