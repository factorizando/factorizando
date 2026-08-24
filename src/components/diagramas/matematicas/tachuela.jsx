// Diagrama «tachuela» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function TachuelaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto;
  const base = 120, scale = 110; // px por unidad de probabilidad
  const bars = [
    { x: 50, p: 0.62, col: a, bd: tema.acento, label: "punta arriba" },
    { x: 138, p: 0.38, col: bl, bd: tema.azul, label: "de lado" },
  ];
  const bw = 56, yMedio = base - 0.5 * scale;
  return (
    <svg viewBox="0 0 250 156" width="100%" style={{ display: "block", maxHeight: 168 }}>
      <line x1="24" y1={base} x2="226" y2={base} stroke={tema.border} strokeWidth="1.5"/>
      {/* referencia ½ */}
      <line x1="24" y1={yMedio} x2="226" y2={yMedio} stroke={mu} strokeWidth="1.2" strokeDasharray="5 4"/>
      <text x="228" y={yMedio + 4} fill={mu} fontSize="11" fontFamily="Georgia,serif" textAnchor="start">½</text>
      {bars.map((b, i) => {
        const h = b.p * scale;
        return (
          <g key={i}>
            <rect x={b.x} y={base - h} width={bw} height={h} rx={5} fill={`${b.col}33`} stroke={b.bd} strokeWidth="1.8"/>
            <text x={b.x + bw / 2} y={base - h - 8} fill={b.bd} fontSize="14" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">{b.p.toFixed(2)}</text>
            <text x={b.x + bw / 2} y={base + 16} fill={T} fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle">{b.label}</text>
          </g>
        );
      })}
      <text x="125" y="150" fill={mu} fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle">no son ½ y ½ → se mide</text>
    </svg>
  );
}
