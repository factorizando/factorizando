// Diagrama «rep-asexual» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function RepAsexualSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto;
  const cell = (cx, cy, r) => <circle cx={cx} cy={cy} r={r} fill="rgba(52,211,153,0.07)" stroke={a} strokeWidth="1.6" />;
  return (
    <svg viewBox="0 0 290 130" width="100%" style={{ display: "block", maxHeight: 140 }}>
      {/* Bipartición */}
      {cell(34, 36, 14)}{cell(58, 36, 9)}
      <text x={44} y={62} textAnchor="middle" fill={T} fontSize="7" fontFamily="'DM Sans',sans-serif">bipartición</text>
      {/* Gemación */}
      {cell(118, 36, 15)}<circle cx={138} cy={26} r={7} fill="rgba(134,239,172,0.18)" stroke={bl} strokeWidth="1.4" />
      <text x={124} y={62} textAnchor="middle" fill={T} fontSize="7" fontFamily="'DM Sans',sans-serif">gemación</text>
      {/* Esporulación */}
      {cell(204, 34, 14)}
      {[[226,24],[232,34],[226,44]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r={3} fill={a} opacity="0.6" />)}
      <text x={210} y={62} textAnchor="middle" fill={T} fontSize="7" fontFamily="'DM Sans',sans-serif">esporulación</text>
      {/* Fragmentación */}
      <path d="M 40 86 q 18 -8 36 0" fill="none" stroke={a} strokeWidth="3" />
      <path d="M 86 86 q 12 -6 24 0" fill="none" stroke={a} strokeWidth="3" />
      <text x={70} y={112} textAnchor="middle" fill={T} fontSize="7" fontFamily="'DM Sans',sans-serif">fragmentación</text>
      <text x={210} y={100} textAnchor="middle" fill={mu} fontSize="7.5" fontFamily="'DM Sans',sans-serif">1 progenitor →</text>
      <text x={210} y={112} textAnchor="middle" fill={bl} fontSize="7.5" fontFamily="'DM Sans',sans-serif">clones idénticos</text>
    </svg>
  );
}
