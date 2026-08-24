// Diagrama «qaa-portada» — quimica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function QaaPortadaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted;
  return (
    <svg viewBox="0 0 220 140" width="100%" style={{ display: "block", maxHeight: 140, maxWidth: 280 }}>
      {/* gota de agua */}
      <path d="M 70 30 C 92 60 92 78 70 88 C 48 78 48 60 70 30 Z" fill="rgba(244,114,182,0.14)" stroke={bl} strokeWidth="2" />
      <circle cx={64} cy={66} r={4} fill={bl} opacity="0.6" />
      {/* molécula O-H-H pequeña */}
      <circle cx={150} cy={52} r={11} fill="rgba(192,132,252,0.25)" stroke={a} strokeWidth="1.8" />
      <text x={150} y={56} textAnchor="middle" fill={a} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">O</text>
      <circle cx={134} cy={68} r={6} fill="rgba(244,114,182,0.2)" stroke={bl} strokeWidth="1.4" />
      <circle cx={166} cy={68} r={6} fill="rgba(244,114,182,0.2)" stroke={bl} strokeWidth="1.4" />
      <line x1={143} y1={60} x2={137} y2={65} stroke={a} strokeWidth="1.6" />
      <line x1={157} y1={60} x2={163} y2={65} stroke={a} strokeWidth="1.6" />
      <text x={110} y={120} textAnchor="middle" fill={mu} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif">la química de la vida cotidiana</text>
    </svg>
  );
}
