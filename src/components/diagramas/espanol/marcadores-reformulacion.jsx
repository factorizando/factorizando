// Diagrama «marcadores-reformulacion» — espanol.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function MarcadoresReformulacionSVG({ tema }) {
  const rows = [
    { type: "EXPLICATIVA",   color: tema.azul,   marker: "es decir · o sea",          src: "Idea original",    dst: "Misma idea, otras palabras",  desc: "= equivalencia" },
    { type: "SÍNTESIS",      color: tema.verde,  marker: "en resumen · en síntesis",  src: "Ideas A + B + C",  dst: "Idea condensada",              desc: "∑ condensación" },
    { type: "EJEMPLIFICACIÓN", color: tema.acento, marker: "por ejemplo · tal como",  src: "Idea general",     dst: "Caso específico concreto",     desc: "∈ instancia" },
  ];
  return (
    <svg viewBox="0 0 520 100" width="100%" style={{ display: "block" }}>
      <text x="88"  y="10" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle" fontWeight="600" letterSpacing="0.1em">FUENTE</text>
      <text x="222" y="10" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle" fontWeight="600" letterSpacing="0.1em">MARCADOR</text>
      <text x="340" y="10" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle" fontWeight="600" letterSpacing="0.1em">REFORMULACIÓN</text>
      <line x1="5" y1="13" x2="515" y2="13" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      {rows.map(({ type, color, marker, src, dst, desc }, i) => {
        const y = 19 + i * 27;
        return (
          <g key={i}>
            <text x="5" y={y + 14} fill={color} fontSize="8" fontFamily="'DM Sans',sans-serif" fontWeight="700" letterSpacing="0.06em">{type}</text>
            <rect x="82" y={y} width="92" height="22" rx="5" fill="rgba(0,0,0,0.25)" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
            <text x="128" y={y + 14} fill={tema.sub} fontSize="8" fontFamily="'DM Sans',sans-serif" textAnchor="middle">{src}</text>
            <line x1="176" y1={y + 11} x2="210" y2={y + 11} stroke={color} strokeWidth="1.5"/>
            <polygon points={`210,${y + 7} 218,${y + 11} 210,${y + 15}`} fill={color}/>
            <text x="193" y={y + 8} fill={color} fontSize="7.5" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{marker}</text>
            <rect x="220" y={y} width="170" height="22" rx="5" fill={`${color}15`} stroke={`${color}55`} strokeWidth="1.3"/>
            <text x="305" y={y + 14} fill={color} fontSize="8" fontFamily="'DM Sans',sans-serif" textAnchor="middle">{dst}</text>
            <text x="408" y={y + 14} fill={tema.muted} fontSize="8.5" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{desc}</text>
          </g>
        );
      })}
    </svg>
  );
}
