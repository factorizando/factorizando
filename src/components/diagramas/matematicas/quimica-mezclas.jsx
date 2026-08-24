// Diagrama «quimica-mezclas» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function QuimicaMezclasSVG({ tema }) {
  const a = tema.acento, gold = "#f5c842", grn = "#4ab890";
  return (
    <svg viewBox="0 0 320 130" width="100%" style={{ display:"block" }}>
      {/* LEFT: Sustancias puras */}
      <rect x="1" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="78" y="11" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">SUSTANCIAS PURAS</text>
      {/* Elemento */}
      <rect x="5" y="16" width="144" height="50" rx="3" fill="rgba(0,0,0,0.2)"/>
      <text x="78" y="24" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">ELEMENTO (un tipo de átomo)</text>
      {[[16,33],[28,33],[40,33],[52,33],[64,33],[76,33],[88,33],[100,33],[112,33],[124,33],[136,33],[144,33],
        [22,43],[34,43],[46,43],[58,43],[70,43],[82,43],[94,43],[106,43],[118,43],[130,43]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="4" fill={a} opacity="0.75"/>
      ))}
      <text x="78" y="59" textAnchor="middle" fill={a} fontSize="5" fontFamily="monospace">Fe, O₂, Cu, N₂, Au</text>
      {/* Compuesto */}
      <rect x="5" y="70" width="144" height="50" rx="3" fill="rgba(0,0,0,0.2)"/>
      <text x="78" y="78" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">COMPUESTO (proporción fija)</text>
      {[[14,89],[40,89],[66,89],[92,89],[118,89],[144,89]].map(([x,y],i)=>(
        <g key={i}>
          <circle cx={x}   cy={y} r="4.5" fill={gold} opacity="0.8"/>
          <circle cx={x+11} cy={y} r="4.5" fill={grn}  opacity="0.8"/>
          <line x1={x+4.5} y1={y} x2={x+6.5} y2={y} stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
        </g>
      ))}
      {[[27,103],[53,103],[79,103],[105,103],[131,103]].map(([x,y],i)=>(
        <g key={i}>
          <circle cx={x}   cy={y} r="4.5" fill={gold} opacity="0.8"/>
          <circle cx={x+11} cy={y} r="4.5" fill={grn}  opacity="0.8"/>
          <line x1={x+4.5} y1={y} x2={x+6.5} y2={y} stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
        </g>
      ))}
      <text x="78" y="115" textAnchor="middle" fill={gold} fontSize="5" fontFamily="monospace">H₂O, CO₂, NaCl, glucosa</text>
      {/* RIGHT: Mezclas */}
      <rect x="165" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="242" y="11" textAnchor="middle" fill={gold} fontSize="6.5" fontFamily="monospace" fontWeight="700">MEZCLAS</text>
      {/* Homogénea */}
      <rect x="169" y="16" width="144" height="50" rx="3" fill="rgba(0,0,0,0.2)"/>
      <text x="242" y="24" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">HOMOGÉNEA (solución)</text>
      {[[178,33],[192,39],[206,31],[220,37],[234,33],[248,39],[262,33],[276,37],[290,31],[304,37],
        [184,47],[198,43],[212,49],[226,43],[240,47],[254,43],[268,49],[282,43],[296,47]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="3.5" fill={i%2===0 ? a : gold} opacity="0.75"/>
      ))}
      <text x="242" y="59" textAnchor="middle" fill={gold} fontSize="5" fontFamily="monospace">aire, sal+agua, vinagre</text>
      {/* Heterogénea */}
      <rect x="169" y="70" width="144" height="50" rx="3" fill="rgba(0,0,0,0.2)"/>
      <text x="242" y="78" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">HETEROGÉNEA (fases visibles)</text>
      <rect x="170" y="95" width="142" height="24" rx="0" fill="rgba(40,80,160,0.3)"/>
      <text x="242" y="110" textAnchor="middle" fill="rgba(100,150,255,0.5)" fontSize="5" fontFamily="monospace">agua (densa)</text>
      {[[178,84],[194,88],[210,82],[226,86],[242,82],[258,88],[274,84],[290,80],[306,86]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="3" fill={gold} opacity="0.6"/>
      ))}
      <text x="242" y="115" textAnchor="middle" fill={gold} fontSize="5" fontFamily="monospace">aceite+agua, granito, sangre</text>
    </svg>
  );
}
