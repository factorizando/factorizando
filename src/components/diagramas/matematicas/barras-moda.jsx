// Diagrama «barras-moda» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function BarrasModaSVG({ tema, data }) {
  const a = tema.acento, mu = tema.muted, gr = tema.verde;
  const vals = Array.isArray(data) ? data : [];
  const freq = {};
  vals.forEach((v) => { freq[v] = (freq[v] || 0) + 1; });
  const keys = Object.keys(freq);
  const maxF = Math.max(1, ...Object.values(freq));
  const base = 104, k = 17, slot = Math.min(70, 300 / keys.length), bw = Math.min(44, slot - 16);
  const x0 = (328 - keys.length * slot) / 2;
  return (
    <svg viewBox="0 0 328 132" width="100%" style={{ display: "block", maxHeight: 152 }}>
      <line x1="12" y1={base} x2="316" y2={base} stroke={tema.border} strokeWidth="1.5" />
      {keys.map((kk, i) => {
        const f = freq[kk], hi = f === maxF;
        const h = f * k, cx = x0 + i * slot + slot / 2, y = base - h;
        return (
          <g key={i}>
            <rect x={cx - bw / 2} y={y} width={bw} height={h} rx="4" fill={hi ? `${gr}cc` : `${a}99`} stroke={hi ? gr : a} strokeWidth="1.4" />
            <text x={cx} y={y - 5} fill={hi ? gr : a} fontSize="11.5" fontFamily="'IBM Plex Mono',monospace" fontWeight="700" textAnchor="middle">{f}</text>
            <text x={cx} y={base + 15} fill={mu} fontSize="10" fontFamily="'DM Sans',sans-serif" textAnchor="middle">{kk}</text>
          </g>
        );
      })}
    </svg>
  );
}
