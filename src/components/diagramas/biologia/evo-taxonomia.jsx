// Diagrama «evo-taxonomia» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function EvoTaxonomiaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto;
  const niveles = ["Reino", "Filo", "Clase", "Orden", "Familia", "Género", "Especie"];
  return (
    <svg viewBox="0 0 220 150" width="100%" style={{ display: "block", maxHeight: 158, maxWidth: 250 }}>
      {niveles.map((n, i) => {
        const w = 150 - i * 18;
        const x = (220 - w) / 2;
        const y = 14 + i * 19;
        const last = i === niveles.length - 1;
        return (
          <g key={i}>
            <rect x={x} y={y} width={w} height={15} rx={3} fill={last ? "rgba(52,211,153,0.2)" : "rgba(134,239,172,0.08)"} stroke={last ? a : bl} strokeWidth={last ? 2 : 1.3} />
            <text x={110} y={y + 11} textAnchor="middle" fill={last ? a : T} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight={last ? 700 : 500}>{n}</text>
          </g>
        );
      })}
      <text x={196} y={24} fill={mu} fontSize="7" fontFamily="'Figtree', system-ui, sans-serif" transform="rotate(90 196 24)">menos específico → más específico</text>
    </svg>
  );
}
