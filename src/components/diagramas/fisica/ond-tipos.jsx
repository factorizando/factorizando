// Diagrama «ond-tipos» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

import { arrowHead } from "../comun.jsx";

export default function OndTiposSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted;
  const comp = [20, 30, 40, 53, 67, 79, 87, 93, 106, 120, 132, 140, 146, 159, 173, 185, 193, 199, 211];
  return (
    <svg viewBox="0 0 250 132" width="100%" style={{ display: "block", maxHeight: 142 }}>
      <path d="M 20 34 Q 44 14 68 34 T 116 34 T 164 34 T 212 34" stroke={a} strokeWidth="2.2" fill="none" />
      <line x1={44} y1={46} x2={44} y2={12} stroke={bl} strokeWidth="1.6" />
      <polygon points={arrowHead(44, 24, 44, 12, 6)} fill={bl} />
      <polygon points={arrowHead(44, 34, 44, 46, 6)} fill={bl} />
      <text x={120} y={58} fill={mu} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">transversal</text>
      {comp.map((x, i) => <line key={i} x1={x} y1={78} x2={x} y2={104} stroke={a} strokeWidth="1.6" />)}
      <text x={120} y={124} fill={mu} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">longitudinal (compresiones)</text>
    </svg>
  );
}
