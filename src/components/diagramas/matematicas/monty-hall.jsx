// Diagrama «monty-hall» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function MontyHallSVG({ tema }) {
  const gr = tema.verde, rj = tema.rojo, mu = tema.muted, T = tema.texto;
  const puertas = [40, 92, 144];
  return (
    <svg viewBox="0 0 250 168" width="100%" style={{ display: "block", maxHeight: 180 }}>
      {puertas.map((x, i) => (
        <g key={i}>
          <rect x={x} y={12} width={42} height={58} rx={4} fill={tema.card} stroke={tema.border} strokeWidth="1.6"/>
          <circle cx={x + 33} cy={42} r="2.6" fill={mu}/>
          <text x={x + 21} y={86} fill={mu} fontSize="11" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">1/3</text>
        </g>
      ))}
      <text x="208" y="44" fill={mu} fontSize="11" fontFamily="'DM Sans',sans-serif">3 puertas</text>
      {/* estrategias */}
      <rect x={28} y={104} width={88} height={46} rx={9} fill={`${rj}1f`} stroke={rj} strokeWidth="1.8"/>
      <text x={72} y={122} fill={rj} fontSize="11.5" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">Te quedas</text>
      <text x={72} y={142} fill={rj} fontSize="17" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">1/3</text>
      <rect x={134} y={104} width={88} height={46} rx={9} fill={`${gr}26`} stroke={gr} strokeWidth="2.2"/>
      <text x={178} y={122} fill={gr} fontSize="11.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">Cambias</text>
      <text x={178} y={142} fill={gr} fontSize="17" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">2/3</text>
    </svg>
  );
}
