// Diagrama «ej-histograma-estatura» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function EjHistogramaEstaturaSVG({ tema }) {
  const a = tema.acento, mu = tema.muted;
  const base = 130, k = 11, x0 = 50, bw = 58;
  const ints = [
    { f: 4, lab: "150–160" },
    { f: 9, lab: "160–170" },
    { f: 5, lab: "170–180" },
    { f: 2, lab: "180–190" },
  ];
  return (
    <svg viewBox="0 0 332 168" width="100%" style={{ display: "block", maxHeight: 196 }}>
      <text x={x0} y="13" fill={mu} fontSize="9.5" fontFamily="'Figtree', system-ui, sans-serif">frecuencia</text>
      <line x1={x0} y1={base} x2={x0 + ints.length * bw} y2={base} stroke={tema.border} strokeWidth="1.5" />
      {ints.map((b, i) => {
        const h = b.f * k, y = base - h, x = x0 + i * bw;
        return (
          <g key={i}>
            <rect x={x} y={y} width={bw} height={h} fill={`${a}cc`} stroke={tema.bg} strokeWidth="1.3" />
            <text x={x + bw / 2} y={y - 5} fill={a} fontSize="12" fontFamily="'IBM Plex Mono',monospace" fontWeight="700" textAnchor="middle">{b.f}</text>
            <text x={x + bw / 2} y={base + 15} fill={mu} fontSize="9.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">{b.lab}</text>
          </g>
        );
      })}
      <text x={x0 + ints.length * bw / 2} y={base + 31} fill={mu} fontSize="9.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">estatura (cm)</text>
    </svg>
  );
}
