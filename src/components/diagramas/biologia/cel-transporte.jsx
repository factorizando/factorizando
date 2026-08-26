// Diagrama «cel-transporte» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { arrowHead } from "../comun.jsx";

export default function CelTransporteSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto;
  return (
    <svg viewBox="0 0 280 130" width="100%" style={{ display: "block", maxHeight: 140 }}>
      {/* membrana central */}
      <rect x={132} y={14} width={16} height={104} fill={`${a}1a`} stroke={a} strokeWidth="1.6" />
      {/* Pasivo — flecha a favor (de muchos puntos a pocos) */}
      <text x={66} y={24} textAnchor="middle" fill={tema.canal(1)} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">Pasivo (sin ATP)</text>
      {[34, 46, 58, 42, 54].map((y, i) => <circle key={i} cx={30 + (i % 3) * 12} cy={y} r={3} fill={a} opacity="0.6" />)}
      <line x1={70} y1={46} x2={128} y2={46} stroke={tema.canal(1)} strokeWidth="2.2" />
      <polygon points={arrowHead(70, 46, 128, 46, 8)} fill={tema.canal(1)} />
      <text x={88} y={40} textAnchor="middle" fill={tema.canal(1)} fontSize="7" fontFamily="'Figtree', system-ui, sans-serif">a favor</text>
      {/* Activo — flecha en contra con ATP */}
      <text x={62} y={88} textAnchor="middle" fill={tema.canal(2)} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">Activo (con ATP)</text>
      <line x1={128} y1={104} x2={70} y2={104} stroke={tema.canal(2)} strokeWidth="2.2" />
      <polygon points={arrowHead(128, 104, 70, 104, 8)} fill={tema.canal(2)} />
      <text x={150} y={104} fill={bl} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">ATP</text>
      <text x={92} y={98} textAnchor="middle" fill={tema.canal(2)} fontSize="7" fontFamily="'Figtree', system-ui, sans-serif">en contra</text>
      <text x={210} y={66} textAnchor="middle" fill={mu} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">gradiente de</text>
      <text x={210} y={77} textAnchor="middle" fill={mu} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">concentración</text>
    </svg>
  );
}
