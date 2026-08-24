// Diagrama «ej-barras-deporte» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function EjBarrasDeporteSVG({ tema }) {
  const a = tema.acento, mu = tema.muted;
  const base = 132, k = 12.5, bw = 46;
  const bars = [
    { cx: 52,  f: 8, lab: "Fútbol" },
    { cx: 130, f: 5, lab: "Básquet" },
    { cx: 208, f: 4, lab: "Voleibol" },
    { cx: 286, f: 3, lab: "Natación" },
  ];
  return (
    <svg viewBox="0 0 332 164" width="100%" style={{ display: "block", maxHeight: 196 }}>
      <text x="14" y="13" fill={mu} fontSize="9.5" fontFamily="'DM Sans',sans-serif">frecuencia</text>
      <line x1="14" y1={base} x2="326" y2={base} stroke={tema.border} strokeWidth="1.5" />
      {bars.map((b, i) => {
        const h = b.f * k, y = base - h;
        return (
          <g key={i}>
            <rect x={b.cx - bw / 2} y={y} width={bw} height={h} rx="4" fill={`${a}cc`} stroke={a} strokeWidth="1.4" />
            <text x={b.cx} y={y - 5} fill={a} fontSize="12" fontFamily="'IBM Plex Mono',monospace" fontWeight="700" textAnchor="middle">{b.f}</text>
            <text x={b.cx} y={base + 15} fill={mu} fontSize="10.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">{b.lab}</text>
          </g>
        );
      })}
    </svg>
  );
}
