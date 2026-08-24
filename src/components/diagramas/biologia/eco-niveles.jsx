// Diagrama «eco-niveles» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { arrowHead } from "../comun.jsx";

export default function EcoNivelesSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, T = tema.texto;
  const niveles = ["individuo", "población", "comunidad", "ecosistema", "biosfera"];
  return (
    <svg viewBox="0 0 280 110" width="100%" style={{ display: "block", maxHeight: 120 }}>
      {niveles.map((n, i) => {
        const x = 26 + i * 56;
        const r = 6 + i * 4;
        const last = i === niveles.length - 1;
        return (
          <g key={i}>
            <circle cx={x} cy={48} r={r} fill={last ? "rgba(52,211,153,0.16)" : "rgba(134,239,172,0.08)"} stroke={last ? a : bl} strokeWidth="1.7" />
            <text x={x} y={80} textAnchor="middle" fill={T} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight={last ? 700 : 500}>{n}</text>
            {i < niveles.length - 1 && <><line x1={x + r + 3} y1={48} x2={x + 56 - (6 + (i + 1) * 4) - 3} y2={48} stroke={a} strokeWidth="1.6" /><polygon points={arrowHead(x + r + 3, 48, x + 56 - (6 + (i + 1) * 4) - 3, 48, 6)} fill={a} /></>}
          </g>
        );
      })}
      <text x={140} y={100} textAnchor="middle" fill={tema.muted} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">de lo simple a lo complejo</text>
    </svg>
  );
}
