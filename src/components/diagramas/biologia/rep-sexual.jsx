// Diagrama «rep-sexual» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

import { arrowHead } from "../comun.jsx";

export default function RepSexualSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, T = tema.texto;
  return (
    <svg viewBox="0 0 280 120" width="100%" style={{ display: "block", maxHeight: 130 }}>
      {/* óvulo */}
      <circle cx={42} cy={60} r={20} fill="rgba(52,211,153,0.10)" stroke={a} strokeWidth="2" />
      <circle cx={42} cy={60} r={7} fill={a} opacity="0.5" />
      <text x={42} y={96} textAnchor="middle" fill={T} fontSize="7.5" fontFamily="'DM Sans',sans-serif">óvulo (n)</text>
      {/* espermatozoide */}
      <circle cx={120} cy={42} r={8} fill="rgba(134,239,172,0.2)" stroke={bl} strokeWidth="1.6" />
      <path d="M 128 42 q 16 6 30 -2 q -14 10 -30 6" fill="none" stroke={bl} strokeWidth="1.6" />
      <text x={140} y={28} textAnchor="middle" fill={T} fontSize="7.5" fontFamily="'DM Sans',sans-serif">esperma (n)</text>
      <line x1={104} y1={50} x2={66} y2={58} stroke={bl} strokeWidth="1.6" strokeDasharray="3 2" />
      {/* flecha fecundación */}
      <line x1={150} y1={70} x2={196} y2={70} stroke={a} strokeWidth="2" />
      <polygon points={arrowHead(150, 70, 196, 70, 8)} fill={a} />
      <text x={172} y={62} textAnchor="middle" fill={a} fontSize="7" fontFamily="'DM Sans',sans-serif">fecundación</text>
      {/* cigoto */}
      <circle cx={236} cy={70} r={22} fill="rgba(52,211,153,0.12)" stroke={a} strokeWidth="2.2" />
      <circle cx={230} cy={70} r={7} fill={a} opacity="0.5" />
      <circle cx={242} cy={70} r={7} fill={bl} opacity="0.5" />
      <text x={236} y={106} textAnchor="middle" fill={bl} fontSize="8" fontFamily="'DM Sans',sans-serif" fontWeight="700">cigoto (2n)</text>
    </svg>
  );
}
