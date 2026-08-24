// Diagrama «poligono-regular-def» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { qRegPoly } from "../comun.jsx";

export default function PoligonoRegularDefSVG({ tema }) {
  const configs = [
    { n: 3, cx: 45, cy: 60, r: 30, label: "n=3" },
    { n: 4, cx: 120, cy: 60, r: 28, label: "n=4" },
    { n: 5, cx: 197, cy: 60, r: 30, label: "n=5" },
    { n: 6, cx: 275, cy: 60, r: 30, label: "n=6" },
  ];
  return (
    <svg viewBox="0 0 330 105" width="100%" style={{ maxHeight: 105, display: "block" }}>
      {configs.map(({ n, cx, cy, r, label }) => (
        <g key={n}>
          <polygon points={qRegPoly(cx, cy, r, n, n === 4 ? -Math.PI / 4 : -Math.PI / 2)}
            fill={tema.azulSuave} stroke={tema.azul} strokeWidth="1.8" opacity="0.88"/>
          <text x={cx} y={cy + r + 14} fill={tema.muted} fontSize="10"
            fontFamily="'DM Sans',sans-serif" textAnchor="middle">{label}</text>
        </g>
      ))}
    </svg>
  );
}
