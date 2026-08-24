// Diagrama «bq-atp» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

import { arrowHead } from "../comun.jsx";

export default function BqAtpSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto;
  return (
    <svg viewBox="0 0 260 120" width="100%" style={{ display: "block", maxHeight: 130 }}>
      {/* ADP */}
      <rect x={20} y={48} width={34} height={22} rx={4} fill="rgba(134,239,172,0.12)" stroke={bl} strokeWidth="1.6" />
      <text x={37} y={63} textAnchor="middle" fill={bl} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">ADP</text>
      <circle cx={68} cy={59} r={9} fill="rgba(52,211,153,0.25)" stroke={a} strokeWidth="1.6" />
      <text x={68} y={62} textAnchor="middle" fill={a} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif">Pᵢ</text>
      {/* flechas reversibles */}
      <path d="M 88 50 q 44 -16 84 0" fill="none" stroke={a} strokeWidth="2" />
      <polygon points={arrowHead(150, 42, 172, 50, 7)} fill={a} />
      <text x={130} y={34} textAnchor="middle" fill={a} fontSize="7" fontFamily="'Figtree', system-ui, sans-serif">+ energía (carga)</text>
      <path d="M 172 74 q -44 16 -84 0" fill="none" stroke={tema.rojo} strokeWidth="2" />
      <polygon points={arrowHead(110, 82, 88, 74, 7)} fill={tema.rojo} />
      <text x={130} y={98} textAnchor="middle" fill={tema.rojo} fontSize="7" fontFamily="'Figtree', system-ui, sans-serif">− energía (uso)</text>
      {/* ATP */}
      <rect x={186} y={48} width={50} height={22} rx={4} fill="rgba(52,211,153,0.14)" stroke={a} strokeWidth="1.8" />
      <text x={211} y={63} textAnchor="middle" fill={a} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">ATP</text>
      <text x={130} y={116} textAnchor="middle" fill={mu} fontSize="7" fontFamily="'Figtree', system-ui, sans-serif">la moneda energética de la célula</text>
    </svg>
  );
}
