// Diagrama «cin-portada» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function CinPortadaSVG({ tema }) {
  const a = tema.acento, mu = tema.muted;
  const ox = 30, oy = 100;
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 132, maxWidth: 320 }}>
      <line x1={ox} y1={oy} x2={232} y2={oy} stroke={mu} strokeWidth="1.5" />
      <line x1={ox} y1={oy} x2={ox} y2={14} stroke={mu} strokeWidth="1.5" />
      <polygon points={`238,${oy} 232,${oy - 3.5} 232,${oy + 3.5}`} fill={mu} />
      <polygon points={`${ox},8 ${ox - 3.5},14 ${ox + 3.5},14`} fill={mu} />
      <path d={`M ${ox} ${oy} Q 150 ${oy} 210 26`} stroke={a} strokeWidth="2.5" fill="none" />
      <circle cx="210" cy="26" r="5" fill={a} />
      <text x="236" y={oy + 4} fill={mu} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic">t</text>
      <text x={ox - 9} y="12" fill={mu} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic">x</text>
    </svg>
  );
}
