// Diagrama «gen-biotecnologia» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { arrowHead } from "../comun.jsx";

export default function GenBiotecnologiaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto;
  return (
    <svg viewBox="0 0 280 130" width="100%" style={{ display: "block", maxHeight: 140 }}>
      {/* gen humano */}
      <rect x={20} y={20} width={56} height={18} rx={4} fill={`${a}24`} stroke={a} strokeWidth="1.6" />
      <text x={48} y={33} textAnchor="middle" fill={a} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">gen humano</text>
      {/* plásmido */}
      <circle cx={120} cy={66} r={26} fill="none" stroke={bl} strokeWidth="2.4" strokeDasharray="6 3" />
      <text x={120} y={102} textAnchor="middle" fill={bl} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">plásmido</text>
      <line x1={70} y1={40} x2={104} y2={56} stroke={mu} strokeWidth="1.4" />
      <polygon points={arrowHead(70, 40, 104, 56, 6)} fill={mu} />
      {/* insertado */}
      <rect x={108} y={42} width={24} height={9} rx={2} fill={`${a}4c`} stroke={a} strokeWidth="1.2" />
      {/* flecha a bacteria */}
      <line x1={150} y1={66} x2={188} y2={66} stroke={mu} strokeWidth="2" />
      <polygon points={arrowHead(150, 66, 188, 66, 7)} fill={mu} />
      {/* bacteria */}
      <ellipse cx={222} cy={66} rx={30} ry={18} fill={`${a}14`} stroke={a} strokeWidth="1.8" />
      <circle cx={222} cy={66} r={9} fill="none" stroke={a} strokeWidth="1.2" strokeDasharray="3 2" />
      <text x={222} y={98} textAnchor="middle" fill={T} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">bacteria</text>
      <text x={140} y={122} textAnchor="middle" fill={mu} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">la bacteria fabrica la proteína (insulina)</text>
    </svg>
  );
}
