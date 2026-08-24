// Diagrama «mod-fotoelectrico» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { Vector } from "../comun.jsx";

export default function ModFotoelectricoSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted;
  const gold = "#eab308";
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 130 }}>
      <rect x={40} y={84} width={170} height={16} rx={2} fill={tema.acentoMed} stroke={a} strokeWidth="1.5" />
      <text x={125} y={114} fill={mu} fontSize="9.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">metal</text>
      {[72, 104, 136].map((x, i) => (
        <g key={i}><Vector x1={x - 28} y1={20} x2={x} y2={82} color={gold} label="" sw={1.8} /></g>
      ))}
      <text x={36} y={26} fill={gold} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif">luz (fotones)</text>
      {[160, 182, 204].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy={58 - i * 6} r={5.5} fill={bl} />
          <text x={x} y={62 - i * 6} fill="#fff" fontSize="8" fontFamily="Georgia,serif" textAnchor="middle">−</text>
        </g>
      ))}
      <text x={200} y={34} fill={bl} fontSize="10" fontFamily="Georgia,serif">e⁻ libres</text>
    </svg>
  );
}
