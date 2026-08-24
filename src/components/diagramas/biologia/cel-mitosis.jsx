// Diagrama «cel-mitosis» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { arrowHead } from "../comun.jsx";

export default function CelMitosisSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted;
  return (
    <svg viewBox="0 0 280 110" width="100%" style={{ display: "block", maxHeight: 120 }}>
      {/* madre */}
      <circle cx={48} cy={55} r={28} fill="rgba(52,211,153,0.05)" stroke={a} strokeWidth="2" />
      <line x1={40} y1={48} x2={50} y2={62} stroke={bl} strokeWidth="3" strokeLinecap="round" />
      <line x1={56} y1={48} x2={46} y2={62} stroke={bl} strokeWidth="3" strokeLinecap="round" />
      <text x={48} y={98} textAnchor="middle" fill={mu} fontSize="8" fontFamily="'DM Sans',sans-serif">madre (2n)</text>
      {/* flecha */}
      <line x1={84} y1={55} x2={150} y2={55} stroke={a} strokeWidth="2" />
      <polygon points={arrowHead(84, 55, 150, 55, 8)} fill={a} />
      <text x={117} y={48} textAnchor="middle" fill={a} fontSize="8" fontFamily="'DM Sans',sans-serif">mitosis</text>
      {/* dos hijas idénticas */}
      {[ [196, 30], [196, 80] ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={20} fill="rgba(52,211,153,0.05)" stroke={a} strokeWidth="1.8" />
          <line x1={cx - 6} y1={cy - 5} x2={cx + 2} y2={cy + 6} stroke={bl} strokeWidth="2.4" strokeLinecap="round" />
          <line x1={cx + 5} y1={cy - 5} x2={cx - 3} y2={cy + 6} stroke={bl} strokeWidth="2.4" strokeLinecap="round" />
        </g>
      ))}
      <text x={244} y={58} fill={mu} fontSize="8" fontFamily="'DM Sans',sans-serif">2 idénticas</text>
      <text x={244} y={70} fill={mu} fontSize="8" fontFamily="'DM Sans',sans-serif">(2n cada una)</text>
    </svg>
  );
}
