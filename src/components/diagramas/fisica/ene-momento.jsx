// Diagrama «ene-momento» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { Vector } from "../comun.jsx";

export default function EneMomentoSVG({ tema }) {
  const gr = tema.verde, mu = tema.muted, T = tema.texto;
  const cart = (x, y, w, label, fill) => (
    <g>
      <rect x={x} y={y} width={w} height={18} rx={3} fill={fill} stroke={tema.acento} strokeWidth="1.5" />
      <text x={x + w / 2} y={y + 13} fill={T} fontSize="10" fontFamily="Georgia,serif" textAnchor="middle">{label}</text>
      <circle cx={x + 6} cy={y + 20} r={3.5} fill={mu} />
      <circle cx={x + w - 6} cy={y + 20} r={3.5} fill={mu} />
    </g>
  );
  return (
    <svg viewBox="0 0 250 130" width="100%" style={{ display: "block", maxHeight: 140 }}>
      <text x={8} y={42} fill={mu} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif">antes</text>
      {cart(54, 28, 34, "A", tema.acentoMed)}
      <Vector x1={90} y1={37} x2={116} y2={37} color={gr} label="v" lx={98} ly={24} />
      {cart(140, 28, 34, "B", tema.azulSuave)}
      <line x1={20} y1={64} x2={230} y2={64} stroke={tema.border} strokeWidth="1" strokeDasharray="3 3" />
      <text x={8} y={98} fill={mu} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif">después</text>
      {cart(96, 84, 48, "A+B", tema.acentoMed)}
      <Vector x1={146} y1={93} x2={174} y2={93} color={gr} label="v'" lx={156} ly={80} />
    </svg>
  );
}
