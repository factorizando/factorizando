// Diagrama «cel-meiosis» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { arrowHead } from "../comun.jsx";

export default function CelMeiosisSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted;
  const hijas = [ [232, 20], [232, 52], [232, 84], [232, 116] ];
  return (
    <svg viewBox="0 0 290 136" width="100%" style={{ display: "block", maxHeight: 150 }}>
      {/* madre */}
      <circle cx={44} cy={68} r={28} fill="rgba(52,211,153,0.05)" stroke={a} strokeWidth="2" />
      <line x1={36} y1={61} x2={46} y2={75} stroke={bl} strokeWidth="3" strokeLinecap="round" />
      <line x1={52} y1={61} x2={42} y2={75} stroke={bl} strokeWidth="3" strokeLinecap="round" />
      <text x={44} y={110} textAnchor="middle" fill={mu} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif">madre (2n)</text>
      {/* flecha doble división */}
      <line x1={78} y1={68} x2={196} y2={68} stroke={a} strokeWidth="2" />
      <polygon points={arrowHead(78, 68, 196, 68, 8)} fill={a} />
      <text x={134} y={60} textAnchor="middle" fill={a} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif">meiosis (2 divisiones)</text>
      {/* cuatro hijas con la mitad */}
      {hijas.map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={13} fill="rgba(52,211,153,0.05)" stroke={a} strokeWidth="1.6" />
          <line x1={cx - 3} y1={cy - 4} x2={cx + 3} y2={cy + 4} stroke={bl} strokeWidth="2.2" strokeLinecap="round" />
        </g>
      ))}
      <text x={258} y={66} fill={mu} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif">4 gametos</text>
      <text x={258} y={78} fill={mu} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif">(n cada uno)</text>
    </svg>
  );
}
