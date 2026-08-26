// Diagrama «ana-vegetal» — quimica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

import { arrowHead } from "../comun.jsx";

export default function AnaVegetalSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, gr = tema.canal(1), T = tema.texto;
  return (
    <svg viewBox="0 0 260 140" width="100%" style={{ display: "block", maxHeight: 150 }}>
      {/* tallo */}
      <rect x={120} y={40} width={10} height={74} fill={`${gr}1f`} stroke={gr} strokeWidth="1.4" />
      {/* hoja con estoma */}
      <path d="M 130 56 q 44 -22 64 4 q -44 22 -64 -4 Z" fill={`${gr}29`} stroke={gr} strokeWidth="1.5" />
      <ellipse cx={170} cy={58} rx={6} ry={3.4} fill="none" stroke={a} strokeWidth="1.4" />
      <text x={196} y={50} fill={a} fontSize="7" fontFamily="'Figtree', system-ui, sans-serif">estoma</text>
      <text x={196} y={60} fill={mu} fontSize="6" fontFamily="'Figtree', system-ui, sans-serif">(CO₂ / O₂)</text>
      {/* raíz */}
      <path d="M 125 114 l -10 18 M 125 114 l 0 22 M 125 114 l 10 18" fill="none" stroke="#b08968" strokeWidth="1.6" />
      <text x={125} y={138} textAnchor="middle" fill={mu} fontSize="6.6" fontFamily="'Figtree', system-ui, sans-serif">raíz: absorbe agua</text>
      {/* flecha xilema (sube, azul) */}
      <line x1={113} y1={110} x2={113} y2={50} stroke={bl} strokeWidth="1.8" />
      <polygon points={arrowHead(113, 70, 113, 50, 6)} fill={bl} />
      <text x={70} y={70} textAnchor="middle" fill={bl} fontSize="7" fontFamily="'Figtree', system-ui, sans-serif">xilema</text>
      <text x={70} y={80} textAnchor="middle" fill={mu} fontSize="6" fontFamily="'Figtree', system-ui, sans-serif">agua ↑</text>
      {/* flecha floema (baja, acento) */}
      <line x1={137} y1={52} x2={137} y2={108} stroke={a} strokeWidth="1.8" />
      <polygon points={arrowHead(137, 90, 137, 108, 6)} fill={a} />
      <text x={196} y={104} textAnchor="middle" fill={a} fontSize="7" fontFamily="'Figtree', system-ui, sans-serif">floema</text>
      <text x={196} y={114} textAnchor="middle" fill={mu} fontSize="6" fontFamily="'Figtree', system-ui, sans-serif">azúcares ↓</text>
    </svg>
  );
}
