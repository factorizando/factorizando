// Diagrama «eco-ciclo-carbono» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

import { arrowHead } from "../comun.jsx";

export default function EcoCicloCarbonoSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto;
  return (
    <svg viewBox="0 0 260 130" width="100%" style={{ display: "block", maxHeight: 140 }}>
      {/* atmósfera CO2 */}
      <rect x={86} y={12} width={88} height={22} rx={6} fill="rgba(255,255,255,0.05)" stroke={mu} strokeWidth="1.4" />
      <text x={130} y={27} textAnchor="middle" fill={T} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">CO₂ atmósfera</text>
      {/* planta */}
      <line x1={60} y1={104} x2={60} y2={78} stroke={a} strokeWidth="2.5" />
      <circle cx={60} cy={72} r={12} fill="rgba(52,211,153,0.18)" stroke={a} strokeWidth="1.5" />
      <text x={60} y={120} textAnchor="middle" fill={a} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">planta</text>
      {/* animal */}
      <ellipse cx={200} cy={96} rx={16} ry={9} fill="rgba(134,239,172,0.18)" stroke={bl} strokeWidth="1.5" />
      <text x={200} y={120} textAnchor="middle" fill={bl} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">animal</text>
      {/* flecha fotosíntesis (atmósfera → planta) */}
      <path d="M 96 30 q -36 8 -36 28" fill="none" stroke={a} strokeWidth="1.7" />
      <polygon points={arrowHead(64, 50, 60, 58, 6)} fill={a} />
      <text x={56} y={48} textAnchor="end" fill={a} fontSize="6.5" fontFamily="'Figtree', system-ui, sans-serif">fotosíntesis</text>
      {/* flecha respiración (animal → atmósfera) */}
      <path d="M 200 86 q 0 -34 -28 -52" fill="none" stroke={tema.rojo} strokeWidth="1.7" />
      <polygon points={arrowHead(184, 44, 172, 34, 6)} fill={tema.rojo} />
      <text x={214} y={62} fill={tema.rojo} fontSize="6.5" fontFamily="'Figtree', system-ui, sans-serif">respiración</text>
      {/* planta → animal */}
      <line x1={76} y1={92} x2={180} y2={94} stroke={mu} strokeWidth="1.4" strokeDasharray="3 2" />
      <polygon points={arrowHead(76, 92, 180, 94, 6)} fill={mu} />
    </svg>
  );
}
