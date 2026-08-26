// Diagrama «gen-adn» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function GenAdnSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto;
  const pairs = [["A", "T"], ["C", "G"], ["T", "A"], ["G", "C"], ["A", "T"]];
  return (
    <svg viewBox="0 0 260 130" width="100%" style={{ display: "block", maxHeight: 140 }}>
      {/* dos columnas */}
      <line x1={92} y1={14} x2={92} y2={116} stroke={a} strokeWidth="2.4" />
      <line x1={168} y1={14} x2={168} y2={116} stroke={bl} strokeWidth="2.4" />
      {pairs.map(([l, r], i) => {
        const y = 24 + i * 22;
        return (
          <g key={i}>
            <line x1={92} y1={y} x2={168} y2={y} stroke={mu} strokeWidth="1.2" />
            <circle cx={114} cy={y} r={8} fill={`${a}2e`} stroke={a} strokeWidth="1.3" />
            <text x={114} y={y + 3} textAnchor="middle" fill={a} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif">{l}</text>
            <circle cx={146} cy={y} r={8} fill={`${bl}2e`} stroke={bl} strokeWidth="1.3" />
            <text x={146} y={y + 3} textAnchor="middle" fill={bl} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif">{r}</text>
          </g>
        );
      })}
      <text x={30} y={66} textAnchor="middle" fill={T} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif">A–T</text>
      <text x={232} y={66} textAnchor="middle" fill={T} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif">C–G</text>
      <text x={130} y={128} textAnchor="middle" fill={mu} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">bases complementarias</text>
    </svg>
  );
}
