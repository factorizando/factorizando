// Diagrama «eco-portada» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function EcoPortadaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, gold = "#f5c842";
  return (
    <svg viewBox="0 0 220 140" width="100%" style={{ display: "block", maxHeight: 140, maxWidth: 260 }}>
      {/* sol */}
      <circle cx={40} cy={32} r={12} fill="rgba(245,200,66,0.3)" stroke={gold} strokeWidth="1.6" />
      {/* suelo */}
      <path d="M 0 110 q 110 -22 220 0 v 30 H 0 Z" fill="rgba(74,222,128,0.10)" stroke={tema.canal(1)} strokeWidth="1.6" />
      {/* árbol */}
      <line x1={90} y1={110} x2={90} y2={78} stroke={a} strokeWidth="3" />
      <circle cx={90} cy={70} r={16} fill="rgba(52,211,153,0.2)" stroke={a} strokeWidth="1.6" />
      {/* animal (esquemático) */}
      <ellipse cx={150} cy={100} rx={14} ry={8} fill="rgba(134,239,172,0.2)" stroke={bl} strokeWidth="1.5" />
      <line x1={142} y1={106} x2={142} y2={112} stroke={bl} strokeWidth="1.4" />
      <line x1={158} y1={106} x2={158} y2={112} stroke={bl} strokeWidth="1.4" />
      <circle cx={164} cy={96} r={4} fill="rgba(134,239,172,0.3)" stroke={bl} strokeWidth="1.2" />
      <text x={110} y={134} textAnchor="middle" fill={mu} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif">los seres vivos y su ambiente</text>
    </svg>
  );
}
