// Diagrama «cin-caida-libre» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { arrowHead } from "../comun.jsx";

export default function CinCaidaLibreSVG({ tema }) {
  const a = tema.acento, mu = tema.muted, bl = tema.azul;
  const x = 44;
  const ys = [20, 38, 66, 104, 152];
  return (
    <svg viewBox="0 0 130 172" width="100%" style={{ display: "block", maxHeight: 178, maxWidth: 150 }}>
      <line x1={x} y1={12} x2={x} y2={162} stroke={mu} strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />
      {ys.map((y, i) => (
        <circle key={i} cx={x} cy={y} r={6} fill={i === ys.length - 1 ? a : tema.acentoMed} stroke={a} strokeWidth="1.6" />
      ))}
      <line x1={92} y1={22} x2={92} y2={150} stroke={bl} strokeWidth="2.2" />
      <polygon points={arrowHead(92, 22, 92, 150, 9)} fill={bl} />
      <text x={100} y={92} fill={bl} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic">g</text>
      <text x={x} y={170} fill={mu} fontSize="9.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">acelera al caer</text>
    </svg>
  );
}
