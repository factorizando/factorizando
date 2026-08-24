// Diagrama «ond-lente» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function OndLenteSVG({ tema }) {
  const a = tema.acento, gr = tema.verde, mu = tema.muted;
  const lx = 120, F = 192, axis = 60;
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 130 }}>
      <line x1={20} y1={axis} x2={232} y2={axis} stroke={mu} strokeWidth="1" strokeDasharray="3 3" />
      <path d={`M ${lx} 22 Q ${lx + 14} ${axis} ${lx} 98 Q ${lx - 14} ${axis} ${lx} 22 Z`} fill={tema.acentoMed} stroke={a} strokeWidth="1.8" />
      {[36, 60, 84].map((y, i) => (
        <g key={i}>
          <line x1={20} y1={y} x2={lx} y2={y} stroke={gr} strokeWidth="1.8" />
          <line x1={lx} y1={y} x2={F} y2={axis} stroke={gr} strokeWidth="1.8" />
        </g>
      ))}
      <circle cx={F} cy={axis} r={4} fill={a} />
      <text x={F + 5} y={axis - 6} fill={a} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">F</text>
    </svg>
  );
}
