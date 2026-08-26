// Diagrama «cin-tiro-parabolico» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

import { arrowHead } from "../comun.jsx";

export default function CinTiroParabolicoSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, gr = tema.canal(1), mu = tema.muted;
  return (
    <svg viewBox="0 0 260 140" width="100%" style={{ display: "block", maxHeight: 150 }}>
      <line x1={16} y1={118} x2={244} y2={118} stroke={mu} strokeWidth="1.5" />
      <path d="M 24 118 Q 130 -10 236 118" stroke={a} strokeWidth="2.5" fill="none" />
      {/* velocidad inicial */}
      <line x1={24} y1={118} x2={58} y2={86} stroke={gr} strokeWidth="2.2" />
      <polygon points={arrowHead(24, 118, 58, 86, 8)} fill={gr} />
      <text x={40} y={80} fill={gr} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic">v₀</text>
      {/* componentes en un punto */}
      <line x1={88} y1={64} x2={120} y2={64} stroke={bl} strokeWidth="2" />
      <polygon points={arrowHead(88, 64, 120, 64, 7)} fill={bl} />
      <line x1={88} y1={64} x2={88} y2={40} stroke={bl} strokeWidth="2" />
      <polygon points={arrowHead(88, 64, 88, 40, 7)} fill={bl} />
      <circle cx={88} cy={64} r={3} fill={tema.texto} />
      <text x={124} y={68} fill={bl} fontSize="10.5" fontFamily="Georgia,serif" fontStyle="italic">vₓ</text>
      <text x={74} y={40} fill={bl} fontSize="10.5" fontFamily="Georgia,serif" fontStyle="italic">vy</text>
    </svg>
  );
}
