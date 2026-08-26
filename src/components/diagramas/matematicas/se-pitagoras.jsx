// Diagrama «se-pitagoras» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function SePitSVG({ tema }) {
  // Right △ with altitude: A left, B right (both top), C bottom (right angle at C)
  // H = foot of altitude on AB; AH=4, HB=9, CH=h=6
  const A=[14,14],B=[248,14],H=[86,14],C=[86,122];
  const pts=ps=>ps.map(([x,y])=>`${x},${y}`).join(" ");
  return (
    <svg viewBox="0 0 270 140" width="100%" style={{display:"block",maxHeight:140}}>
      <polygon points={pts([A,H,C])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([H,B,C])} fill={tema.acentoSuave} stroke="none"/>
      <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke="rgba(240,236,227,0.60)" strokeWidth="2"/>
      <line x1={A[0]} y1={A[1]} x2={C[0]} y2={C[1]} stroke={tema.azul}   strokeWidth="2.2"/>
      <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={tema.acento} strokeWidth="2.2"/>
      <line x1={H[0]} y1={H[1]} x2={C[0]} y2={C[1]} stroke={tema.canal(1)}  strokeWidth="2" strokeDasharray="5,3"/>
      {/* Right angle square at H */}
      <path d="M 86,22 L 94,22 L 94,14" fill="none" stroke="rgba(240,236,227,0.50)" strokeWidth="1.2"/>
      <text x="50"  y="10"  fill={tema.azul}   fontSize="12" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="middle">4</text>
      <text x="167" y="10"  fill={tema.acento} fontSize="12" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="middle">9</text>
      <text x="96"  y="72"  fill={tema.canal(1)}  fontSize="12" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">h</text>
      <text x="14"  y="27"  fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="248" y="27"  fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">B</text>
      <text x="86"  y="135" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="98"  y="24"  fill={tema.canal(1)}  fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">H</text>
    </svg>
  );
}
