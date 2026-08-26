// Diagrama «gen-mutacion» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function GenMutacionSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto;
  const seqA = ["A", "T", "G", "C", "A"];
  const seqB = ["A", "T", "T", "C", "A"];
  return (
    <svg viewBox="0 0 260 110" width="100%" style={{ display: "block", maxHeight: 120 }}>
      <text x={130} y={14} textAnchor="middle" fill={mu} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif">un cambio en una base = mutación</text>
      {seqA.map((b, i) => (
        <g key={i}>
          <rect x={28 + i * 42} y={26} width={28} height={20} rx={4} fill="rgba(52,211,153,0.12)" stroke={a} strokeWidth="1.4" />
          <text x={42 + i * 42} y={40} textAnchor="middle" fill={a} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif">{b}</text>
        </g>
      ))}
      <text x={14} y={40} fill={mu} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif">original</text>
      {seqB.map((b, i) => {
        const changed = b !== seqA[i];
        return (
          <g key={i}>
            <rect x={28 + i * 42} y={64} width={28} height={20} rx={4} fill={changed ? `${tema.canal(2)}33` : `${bl}1a`} stroke={changed ? tema.canal(2) : bl} strokeWidth={changed ? 2 : 1.4} />
            <text x={42 + i * 42} y={78} textAnchor="middle" fill={changed ? tema.canal(2) : bl} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif">{b}</text>
          </g>
        );
      })}
      <text x={14} y={78} fill={mu} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif">mutada</text>
      <text x={210} y={104} textAnchor="middle" fill={tema.canal(2)} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">G → T</text>
    </svg>
  );
}
