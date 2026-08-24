// Diagrama «cuartiles-strip» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function CuartilesSVG({ tema, data }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted;
  const vals = [...(Array.isArray(data) ? data : [])].sort((p, q) => p - q);
  const n = vals.length;
  const median = (arr) => {
    const m = arr.length;
    if (!m) return 0;
    return m % 2 ? arr[(m - 1) / 2] : (arr[m / 2 - 1] + arr[m / 2]) / 2;
  };
  const Q2 = median(vals);
  const Q1 = median(vals.slice(0, Math.floor(n / 2)));
  const Q3 = median(vals.slice(Math.ceil(n / 2)));
  const mn = vals[0] ?? 0, mx = vals[n - 1] ?? 1;
  const pad = (mx - mn) * 0.14 || 1;
  const minX = mn - pad, maxX = mx + pad;
  const W = 280, x0 = 24, cy = 52, axisY = 108, boxTop = 38, boxBot = 66;
  const X = (v) => x0 + ((v - minX) / (maxX - minX)) * W;
  const fmt = (v) => (Number.isInteger(v) ? `${v}` : v.toFixed(1));
  return (
    <svg viewBox="0 0 328 140" width="100%" style={{ display: "block", maxHeight: 156 }}>
      {/* bigotes */}
      <line x1={X(mn)} y1={cy} x2={X(Q1)} y2={cy} stroke={mu} strokeWidth="1.5" />
      <line x1={X(Q3)} y1={cy} x2={X(mx)} y2={cy} stroke={mu} strokeWidth="1.5" />
      <line x1={X(mn)} y1={cy - 7} x2={X(mn)} y2={cy + 7} stroke={mu} strokeWidth="1.5" />
      <line x1={X(mx)} y1={cy - 7} x2={X(mx)} y2={cy + 7} stroke={mu} strokeWidth="1.5" />
      {/* caja Q1–Q3 */}
      <rect x={X(Q1)} y={boxTop} width={X(Q3) - X(Q1)} height={boxBot - boxTop} rx="3" fill={`${a}22`} stroke={a} strokeWidth="1.6" />
      <line x1={X(Q2)} y1={boxTop} x2={X(Q2)} y2={boxBot} stroke={bl} strokeWidth="2.2" />
      {/* etiquetas de cuartiles */}
      <text x={X(Q1)} y={boxTop - 6} fill={a} fontSize="10" fontFamily="'IBM Plex Mono',monospace" fontWeight="700" textAnchor="middle">Q₁={fmt(Q1)}</text>
      <text x={X(Q2)} y={boxBot + 14} fill={bl} fontSize="10" fontFamily="'IBM Plex Mono',monospace" fontWeight="700" textAnchor="middle">Q₂={fmt(Q2)}</text>
      <text x={X(Q3)} y={boxTop - 6} fill={a} fontSize="10" fontFamily="'IBM Plex Mono',monospace" fontWeight="700" textAnchor="middle">Q₃={fmt(Q3)}</text>
      {/* recta con los datos */}
      <line x1={x0} y1={axisY} x2={x0 + W} y2={axisY} stroke={tema.border} strokeWidth="1.4" />
      {vals.map((v, i) => (
        <g key={i}>
          <circle cx={X(v)} cy={axisY} r="4.5" fill={`${a}44`} stroke={a} strokeWidth="1.3" />
          <text x={X(v)} y={axisY + 15} fill={mu} fontSize="8.5" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">{v}</text>
        </g>
      ))}
    </svg>
  );
}
