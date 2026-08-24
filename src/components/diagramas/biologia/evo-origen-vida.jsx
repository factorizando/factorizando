// Diagrama «evo-origen-vida» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { arrowHead } from "../comun.jsx";

export default function EvoOrigenVidaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto, gold = "#f5c842";
  const stages = [
    { x: 32, label: "moléculas", sub: "simples" },
    { x: 110, label: "orgánicas", sub: "(aminoácidos)" },
    { x: 196, label: "1ª célula", sub: "(vida)" },
  ];
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 130 }}>
      {/* rayo */}
      <polygon points="20,12 12,40 22,38 14,60 34,30 22,32 30,12" fill={gold} opacity="0.7" />
      {stages.map(({ x, label, sub }, i) => (
        <g key={i}>
          <circle cx={x} cy={58} r={i === 0 ? 9 : i === 1 ? 13 : 18} fill="rgba(52,211,153,0.10)" stroke={i === 2 ? a : bl} strokeWidth="1.8" />
          {i === 2 && <circle cx={x} cy={58} r={6} fill={a} opacity="0.5" />}
          <text x={x} y={92} textAnchor="middle" fill={T} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">{label}</text>
          <text x={x} y={103} textAnchor="middle" fill={mu} fontSize="6.5" fontFamily="'Figtree', system-ui, sans-serif">{sub}</text>
          {i < 2 && <><line x1={x + 18} y1={58} x2={stages[i + 1].x - 20} y2={58} stroke={a} strokeWidth="1.8" /><polygon points={arrowHead(x + 18, 58, stages[i + 1].x - 20, 58, 6)} fill={a} /></>}
        </g>
      ))}
      <text x={125} y={16} textAnchor="middle" fill={mu} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">teoría quimiosintética (Oparin-Haldane)</text>
    </svg>
  );
}
