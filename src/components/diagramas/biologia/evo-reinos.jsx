// Diagrama «evo-reinos» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function EvoReinosSVG({ tema }) {
  const a = tema.acento, mu = tema.muted, T = tema.texto;
  const reinos = [
    { label: "Monera", sub: "bacterias", c: "#f5c842" },
    { label: "Protista", sub: "algas", c: "#22d3ee" },
    { label: "Fungi", sub: "hongos", c: "#c084fc" },
    { label: "Plantae", sub: "plantas", c: "#4ade80" },
    { label: "Animalia", sub: "animales", c: "#fb7185" },
  ];
  return (
    <svg viewBox="0 0 280 110" width="100%" style={{ display: "block", maxHeight: 120 }}>
      {reinos.map(({ label, sub, c }, i) => {
        const x = 12 + i * 53;
        return (
          <g key={i}>
            <rect x={x} y={28} width={46} height={44} rx={7} fill={`${c}22`} stroke={c} strokeWidth="1.8" />
            <circle cx={x + 23} cy={44} r={8} fill={`${c}44`} stroke={c} strokeWidth="1.3" />
            <text x={x + 23} y={84} textAnchor="middle" fill={T} fontSize="7.5" fontFamily="'DM Sans',sans-serif" fontWeight="600">{label}</text>
            <text x={x + 23} y={94} textAnchor="middle" fill={mu} fontSize="6.5" fontFamily="'DM Sans',sans-serif">{sub}</text>
          </g>
        );
      })}
      <text x={140} y={16} textAnchor="middle" fill={a} fontSize="8" fontFamily="'DM Sans',sans-serif">los cinco reinos (Whittaker)</text>
    </svg>
  );
}
