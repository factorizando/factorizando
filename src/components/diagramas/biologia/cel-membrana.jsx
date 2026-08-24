// Diagrama «cel-membrana» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function CelMembranaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted;
  const xs = [];
  for (let i = 0; i < 13; i++) xs.push(24 + i * 18);
  return (
    <svg viewBox="0 0 260 120" width="100%" style={{ display: "block", maxHeight: 130 }}>
      <text x={130} y={16} textAnchor="middle" fill={mu} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif">bicapa de fosfolípidos (mosaico fluido)</text>
      {xs.map((x, i) => (
        <g key={i}>
          {/* cabeza arriba */}
          <circle cx={x} cy={40} r={5.5} fill={a} opacity="0.5" />
          <line x1={x - 2} y1={45} x2={x - 2} y2={58} stroke={a} strokeWidth="1.4" />
          <line x1={x + 2} y1={45} x2={x + 2} y2={58} stroke={a} strokeWidth="1.4" />
          {/* cabeza abajo */}
          <circle cx={x} cy={92} r={5.5} fill={a} opacity="0.5" />
          <line x1={x - 2} y1={87} x2={x - 2} y2={74} stroke={a} strokeWidth="1.4" />
          <line x1={x + 2} y1={87} x2={x + 2} y2={74} stroke={a} strokeWidth="1.4" />
        </g>
      ))}
      {/* proteína integral */}
      <rect x={104} y={36} width={26} height={60} rx={9} fill="rgba(134,239,172,0.18)" stroke={bl} strokeWidth="2" />
      <text x={117} y={112} textAnchor="middle" fill={bl} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">proteína</text>
    </svg>
  );
}
