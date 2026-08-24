// Diagrama «evo-darwin-lamarck» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { arrowHead } from "../comun.jsx";

export default function EvoDarwinLamarckSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted;
  const jirafa = (x, neck, color) => (
    <g>
      <line x1={x} y1={86} x2={x} y2={86 - neck} stroke={color} strokeWidth="3" strokeLinecap="round" />
      <circle cx={x} cy={86 - neck - 4} r={5} fill={color} opacity="0.6" />
      <rect x={x - 6} y={86} width={12} height={16} rx={2} fill={color} opacity="0.3" stroke={color} strokeWidth="1.2" />
      {[-4, 0, 4].map((d, i) => <line key={i} x1={x + d} y1={102} x2={x + d} y2={112} stroke={color} strokeWidth="1.4" />)}
    </g>
  );
  return (
    <svg viewBox="0 0 240 130" width="100%" style={{ display: "block", maxHeight: 140 }}>
      {/* suelo */}
      <line x1={10} y1={113} x2={230} y2={113} stroke={mu} strokeWidth="1" />
      {/* población con variabilidad */}
      {jirafa(40, 24, bl)}
      {jirafa(70, 44, a)}
      {jirafa(100, 34, bl)}
      <text x={70} y={128} textAnchor="middle" fill={mu} fontSize="7.5" fontFamily="'DM Sans',sans-serif">población con variabilidad</text>
      {/* flecha selección */}
      <line x1={130} y1={70} x2={166} y2={70} stroke={a} strokeWidth="2" />
      <polygon points={arrowHead(130, 70, 166, 70, 7)} fill={a} />
      <text x={148} y={62} textAnchor="middle" fill={a} fontSize="6.5" fontFamily="'DM Sans',sans-serif">selección</text>
      {/* sobreviven cuello largo */}
      {jirafa(190, 46, a)}
      {jirafa(214, 48, a)}
      <text x={202} y={128} textAnchor="middle" fill={mu} fontSize="7.5" fontFamily="'DM Sans',sans-serif">sobreviven los aptos</text>
    </svg>
  );
}
