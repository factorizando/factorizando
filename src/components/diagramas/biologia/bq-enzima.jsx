// Diagrama «bq-enzima» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

import { arrowHead } from "../comun.jsx";

export default function BqEnzimaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto;
  return (
    <svg viewBox="0 0 280 120" width="100%" style={{ display: "block", maxHeight: 130 }}>
      <text x={140} y={14} textAnchor="middle" fill={mu} fontSize="8" fontFamily="'DM Sans',sans-serif">modelo llave-cerradura</text>
      {/* enzima con hueco */}
      <path d="M 30 40 h 70 v 14 a 12 12 0 0 0 24 0 v -14 h 30 v 56 H 30 Z" fill="rgba(52,211,153,0.10)" stroke={a} strokeWidth="2" />
      <text x={62} y={92} fill={a} fontSize="8" fontFamily="'DM Sans',sans-serif">enzima</text>
      <text x={112} y={48} textAnchor="middle" fill={mu} fontSize="6.5" fontFamily="'DM Sans',sans-serif">sitio activo</text>
      {/* sustrato que encaja */}
      <path d="M 112 26 a 12 12 0 0 1 0 -2 v -8 h -24 v 8 a 12 12 0 0 1 0 2 Z" fill="rgba(134,239,172,0.25)" stroke={bl} strokeWidth="1.8" transform="translate(0 6)" />
      <text x={100} y={22} textAnchor="middle" fill={bl} fontSize="7" fontFamily="'DM Sans',sans-serif">sustrato</text>
      {/* flecha → productos */}
      <line x1={176} y1={70} x2={214} y2={70} stroke={T} strokeWidth="2" />
      <polygon points={arrowHead(176, 70, 214, 70, 7)} fill={T} />
      <circle cx={232} cy={62} r={6} fill={a} opacity="0.5" />
      <circle cx={248} cy={74} r={6} fill={bl} opacity="0.5" />
      <text x={240} y={96} textAnchor="middle" fill={mu} fontSize="7" fontFamily="'DM Sans',sans-serif">productos</text>
    </svg>
  );
}
