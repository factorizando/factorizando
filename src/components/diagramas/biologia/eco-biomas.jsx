// Diagrama «eco-biomas» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function EcoBiomasSVG({ tema }) {
  const mu = tema.muted, T = tema.texto;
  const biomas = [
    { label: "Selva", sub: "cálido-húmedo", c: "#4ade80" },
    { label: "Bosque", sub: "templado", c: "#34d399" },
    { label: "Desierto", sub: "árido", c: "#f5c842" },
    { label: "Manglar", sub: "costa salina", c: "#22d3ee" },
  ];
  return (
    <svg viewBox="0 0 280 110" width="100%" style={{ display: "block", maxHeight: 120 }}>
      <text x={140} y={14} textAnchor="middle" fill={tema.acento} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif">biomas de México (país megadiverso)</text>
      {biomas.map(({ label, sub, c }, i) => {
        const x = 14 + i * 66;
        return (
          <g key={i}>
            <rect x={x} y={26} width={58} height={48} rx={7} fill={`${c}1e`} stroke={c} strokeWidth="1.8" />
            {/* iconito de vegetación */}
            <line x1={x + 29} y1={62} x2={x + 29} y2={48} stroke={c} strokeWidth="2" />
            <circle cx={x + 29} cy={44} r={i === 2 ? 4 : 8} fill={`${c}44`} stroke={c} strokeWidth="1.2" />
            <text x={x + 29} y={86} textAnchor="middle" fill={T} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">{label}</text>
            <text x={x + 29} y={96} textAnchor="middle" fill={mu} fontSize="6.3" fontFamily="'Figtree', system-ui, sans-serif">{sub}</text>
          </g>
        );
      })}
    </svg>
  );
}
