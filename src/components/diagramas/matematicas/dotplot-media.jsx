// Diagrama «dotplot-media» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function DotPlotMediaSVG({ tema, data }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted;
  const vals = Array.isArray(data) ? data : [];
  const n = vals.length;
  const mean = n ? vals.reduce((s, v) => s + v, 0) / n : 0;
  const lo = Math.min(...vals, mean), hi = Math.max(...vals, mean);
  const pad = (hi - lo) * 0.12 || 1;
  const minX = lo - pad, maxX = hi + pad;
  const W = 296, x0 = 16, axisY = 94;
  const X = (v) => x0 + ((v - minX) / (maxX - minX)) * W;
  const counts = {};
  const meanLabel = Number.isInteger(mean) ? mean : mean.toFixed(2);
  return (
    <svg viewBox="0 0 328 132" width="100%" style={{ display: "block", maxHeight: 152 }}>
      <line x1={x0} y1={axisY} x2={x0 + W} y2={axisY} stroke={tema.border} strokeWidth="1.5" />
      {[...new Set(vals)].sort((p, q) => p - q).map((v, i) => (
        <text key={i} x={X(v)} y={axisY + 15} fill={mu} fontSize="9.5" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">{v}</text>
      ))}
      {vals.map((v, i) => {
        counts[v] = (counts[v] || 0) + 1;
        const cy = axisY - 10 - (counts[v] - 1) * 12;
        return <circle key={i} cx={X(v)} cy={cy} r="5" fill={`${a}55`} stroke={a} strokeWidth="1.5" />;
      })}
      <line x1={X(mean)} y1={axisY - 64} x2={X(mean)} y2={axisY + 4} stroke={bl} strokeWidth="1.8" strokeDasharray="4 3" />
      <text x={X(mean)} y={axisY - 68} fill={bl} fontSize="11.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="middle">x̄ = {meanLabel}</text>
    </svg>
  );
}
