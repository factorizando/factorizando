// Diagrama «bq-biomoleculas» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function BqBiomoleculasSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, T = tema.texto;
  const cols = [
    { x: 30, label: "Carbohidratos", sub: "energía" },
    { x: 100, label: "Lípidos", sub: "membranas" },
    { x: 170, label: "Proteínas", sub: "estructura" },
    { x: 240, label: "Ác. nucleicos", sub: "info." },
  ];
  return (
    <svg viewBox="0 0 290 120" width="100%" style={{ display: "block", maxHeight: 130 }}>
      {cols.map(({ x, label, sub }, i) => (
        <g key={i}>
          {/* iconos esquemáticos */}
          {i === 0 && <polygon points={`${x},20 ${x+10},26 ${x+10},38 ${x},44 ${x-10},38 ${x-10},26`} fill={`${a}2e`} stroke={a} strokeWidth="1.6" />}
          {i === 1 && <g><circle cx={x} cy={26} r={5} fill={a} opacity="0.5" /><line x1={x-2} y1={30} x2={x-2} y2={44} stroke={a} strokeWidth="1.5" /><line x1={x+2} y1={30} x2={x+2} y2={44} stroke={a} strokeWidth="1.5" /></g>}
          {i === 2 && <path d={`M ${x-12} 40 q 6 -22 12 0 q 6 22 12 0`} fill="none" stroke={a} strokeWidth="2" />}
          {i === 3 && <g><path d={`M ${x-8} 18 q 16 12 0 24 q -16 12 0 0`} fill="none" stroke={a} strokeWidth="1.8" /><path d={`M ${x+8} 18 q -16 12 0 24 q 16 12 0 0`} fill="none" stroke={bl} strokeWidth="1.8" /></g>}
          <text x={x} y={66} textAnchor="middle" fill={T} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">{label}</text>
          <text x={x} y={78} textAnchor="middle" fill={bl} fontSize="6.5" fontFamily="'Figtree', system-ui, sans-serif">{sub}</text>
        </g>
      ))}
      <text x={145} y={104} textAnchor="middle" fill={tema.muted} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">monómeros que se unen en polímeros</text>
    </svg>
  );
}
