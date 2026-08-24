// Diagrama «dotplot-mediana» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function DotPlotMedianaSVG({ tema, data }) {
  const a = tema.acento, gr = tema.verde, mu = tema.muted;
  const vals = [...(Array.isArray(data) ? data : [])].sort((p, q) => p - q);
  const n = vals.length;
  const centro = n % 2 ? [(n - 1) / 2] : [n / 2 - 1, n / 2];
  const median = n % 2 ? vals[centro[0]] : (vals[centro[0]] + vals[centro[1]]) / 2;
  const W = 296, x0 = 16, step = n > 1 ? W / (n - 1) : 0, y = 72;
  const X = (i) => x0 + i * step;
  const medLabel = Number.isInteger(median) ? median : median.toFixed(1);
  return (
    <svg viewBox="0 0 328 120" width="100%" style={{ display: "block", maxHeight: 140 }}>
      <line x1={x0} y1={y} x2={x0 + W} y2={y} stroke={tema.border} strokeWidth="1.5" />
      {vals.map((v, i) => {
        const hi = centro.includes(i);
        return (
          <g key={i}>
            <circle cx={X(i)} cy={y} r={hi ? 7 : 5.5} fill={hi ? `${gr}55` : `${a}33`} stroke={hi ? gr : a} strokeWidth={hi ? 2 : 1.4} />
            <text x={X(i)} y={y + 20} fill={hi ? gr : mu} fontSize="11" fontFamily="'IBM Plex Mono',monospace" fontWeight={hi ? 700 : 400} textAnchor="middle">{v}</text>
          </g>
        );
      })}
      <text x={x0 + W / 2} y={y - 24} fill={gr} fontSize="12" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="middle">Me = {medLabel}</text>
    </svg>
  );
}
