// Diagrama «qaa-aire» — quimica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { arrowHead } from "../comun.jsx";

export default function QaaAireSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto, grn = tema.canal(1), rojo = tema.canal(2);
  return (
    <svg viewBox="0 0 290 125" width="100%" style={{ display: "block", maxHeight: 135 }}>
      {/* composición del aire (barra) */}
      <text x={70} y={14} textAnchor="middle" fill={mu} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">composición del aire</text>
      <rect x={14} y={22} width={86} height={18} rx={3} fill={`${a}80`} stroke={a} strokeWidth="1" />
      <text x={57} y={35} textAnchor="middle" fill="#0d0810" fontSize="8" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">N₂ 78%</text>
      <rect x={102} y={22} width={26} height={18} rx={3} fill={`${bl}99`} stroke={bl} strokeWidth="1" />
      <text x={115} y={35} textAnchor="middle" fill="#0d0810" fontSize="7" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">O₂</text>
      <text x={115} y={52} textAnchor="middle" fill={bl} fontSize="6" fontFamily="'Figtree', system-ui, sans-serif">21%</text>
      {/* combustión */}
      <text x={150} y={70} textAnchor="middle" fill={mu} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">combustión (con O₂)</text>
      <text x={42} y={88} fill={T} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif">combustible + O₂</text>
      <line x1={120} y1={84} x2={150} y2={84} stroke={rojo} strokeWidth="1.6" />
      <polygon points={arrowHead(120, 84, 150, 84, 6)} fill={rojo} />
      <text x={196} y={88} fill={T} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif">CO₂ + H₂O</text>
      <text x={150} y={104} textAnchor="middle" fill={rojo} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">+ energía (exotérmica)</text>
      <text x={145} y={120} textAnchor="middle" fill={grn} fontSize="7" fontFamily="'Figtree', system-ui, sans-serif">redox: se oxida (pierde e⁻) / se reduce (gana e⁻)</text>
    </svg>
  );
}
