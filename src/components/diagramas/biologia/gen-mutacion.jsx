// Diagrama «gen-mutacion» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function GenMutacionSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto;
  const seqA = ["A", "T", "G", "C", "A"];
  const seqB = ["A", "T", "T", "C", "A"];
  return (
    <svg viewBox="0 0 260 110" width="100%" style={{ display: "block", maxHeight: 120 }}>
      <text x={130} y={14} textAnchor="middle" fill={mu} fontSize="8" fontFamily="'DM Sans',sans-serif">un cambio en una base = mutación</text>
      {seqA.map((b, i) => (
        <g key={i}>
          <rect x={28 + i * 42} y={26} width={28} height={20} rx={4} fill="rgba(52,211,153,0.12)" stroke={a} strokeWidth="1.4" />
          <text x={42 + i * 42} y={40} textAnchor="middle" fill={a} fontSize="9" fontFamily="'DM Sans',sans-serif">{b}</text>
        </g>
      ))}
      <text x={14} y={40} fill={mu} fontSize="8" fontFamily="'DM Sans',sans-serif">original</text>
      {seqB.map((b, i) => {
        const changed = b !== seqA[i];
        return (
          <g key={i}>
            <rect x={28 + i * 42} y={64} width={28} height={20} rx={4} fill={changed ? "rgba(248,113,113,0.2)" : "rgba(134,239,172,0.10)"} stroke={changed ? tema.rojo : bl} strokeWidth={changed ? 2 : 1.4} />
            <text x={42 + i * 42} y={78} textAnchor="middle" fill={changed ? tema.rojo : bl} fontSize="9" fontFamily="'DM Sans',sans-serif">{b}</text>
          </g>
        );
      })}
      <text x={14} y={78} fill={mu} fontSize="8" fontFamily="'DM Sans',sans-serif">mutada</text>
      <text x={210} y={104} textAnchor="middle" fill={tema.rojo} fontSize="7.5" fontFamily="'DM Sans',sans-serif">G → T</text>
    </svg>
  );
}
