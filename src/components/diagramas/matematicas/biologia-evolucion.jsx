// Diagrama «biologia-evolucion» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function BiologiaEvolucionSVG({ tema }) {
  const a = tema.acento, gold = "#f5c842", grn = "#4ab890", org = "#ff7755";
  return (
    <svg viewBox="0 0 320 130" width="100%" style={{ display:"block" }}>
      {/* LEFT: Natural selection */}
      <rect x="1" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="78" y="11" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">SELECCIÓN NATURAL</text>
      {/* Initial population - varied */}
      <text x="78" y="20" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5" fontFamily="monospace">población inicial (variación genética)</text>
      {[[10,5],[20,2.5],[30,5],[40,3],[50,5],[60,2],[70,5],[80,3],[90,5],[100,2.5],[110,5],[120,3],[130,4]].map(([x,r],i)=>(
        <circle key={i} cx={x+5} cy={30} r={r} fill={r>=5 ? a : "rgba(255,255,255,0.25)"} opacity="0.75"/>
      ))}
      {/* Selection pressure */}
      <line x1="8" y1="46" x2="148" y2="46" stroke={org} strokeWidth="1.5" strokeDasharray="4,2"/>
      <text x="78" y="43" textAnchor="middle" fill={org} fontSize="4.5" fontFamily="monospace">presión ambiental (depredación, clima)</text>
      {/* Survivors */}
      <text x="78" y="56" textAnchor="middle" fill={grn} fontSize="5" fontFamily="monospace">sobreviven los más adaptados</text>
      {[[22,5],[46,5],[70,5],[94,5],[118,5]].map(([x,r],i)=>(
        <circle key={i} cx={x} cy={65} r={r} fill={a} opacity="0.85"/>
      ))}
      {/* Arrow */}
      <line x1="78" y1="74" x2="78" y2="82" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
      <polygon points="74,78 82,78 78,83" fill="rgba(255,255,255,0.4)"/>
      {/* Next generation */}
      <text x="78" y="91" textAnchor="middle" fill={gold} fontSize="5" fontFamily="monospace">nueva generación (más adaptada + variación)</text>
      {[[10,5],[22,5],[34,5],[46,5],[58,5],[70,5],[82,5],[94,5],[106,5],[118,5],[130,4]].map(([x,r],i)=>(
        <circle key={i} cx={x+5} cy={100} r={r} fill={gold} opacity="0.78"/>
      ))}
      <text x="78" y="118" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="4.5" fontFamily="monospace">muchas generaciones → nueva especie</text>
      {/* RIGHT: Evolutionary tree */}
      <rect x="165" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="242" y="11" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">ÁRBOL EVOLUTIVO</text>
      {/* Time axis */}
      <line x1="178" y1="112" x2="178" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
      <text x="178" y="118" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="4" fontFamily="monospace">pasado</text>
      <text x="178" y="17" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="4" fontFamily="monospace">presente</text>
      {/* Common ancestor trunk */}
      <line x1="212" y1="108" x2="212" y2="82" stroke={a} strokeWidth="2"/>
      <circle cx="212" cy="108" r="3" fill={a} opacity="0.7"/>
      <text x="218" y="112" fill="rgba(255,255,255,0.3)" fontSize="4" fontFamily="monospace">ancestro común</text>
      {/* First split */}
      <circle cx="212" cy="82" r="2.5" fill={gold} opacity="0.8"/>
      <line x1="212" y1="82" x2="193" y2="52" stroke={grn} strokeWidth="1.5"/>
      <line x1="212" y1="82" x2="238" y2="56" stroke={a} strokeWidth="1.5"/>
      {/* Left subtree */}
      <circle cx="193" cy="52" r="2.5" fill={gold} opacity="0.8"/>
      <line x1="193" y1="52" x2="182" y2="28" stroke={grn} strokeWidth="1.5"/>
      <line x1="193" y1="52" x2="204" y2="28" stroke={grn} strokeWidth="1.5"/>
      <circle cx="182" cy="24" r="5" fill={grn} opacity="0.8"/>
      <circle cx="204" cy="24" r="5" fill={grn} opacity="0.8"/>
      <text x="180" y="19" fill={grn} fontSize="4" fontFamily="monospace">Sp A</text>
      <text x="202" y="19" fill={grn} fontSize="4" fontFamily="monospace">Sp B</text>
      {/* Right subtree */}
      <circle cx="238" cy="56" r="2.5" fill={gold} opacity="0.8"/>
      <line x1="238" y1="56" x2="226" y2="30" stroke={a} strokeWidth="1.5"/>
      <line x1="238" y1="56" x2="258" y2="34" stroke={a} strokeWidth="1.5"/>
      <line x1="258" y1="34" x2="250" y2="20" stroke={a} strokeWidth="1.5"/>
      <line x1="258" y1="34" x2="268" y2="20" stroke={a} strokeWidth="1.5"/>
      <circle cx="226" cy="26" r="5" fill={a} opacity="0.8"/>
      <circle cx="250" cy="16" r="4" fill={a} opacity="0.8"/>
      <circle cx="268" cy="16" r="4" fill={a} opacity="0.8"/>
      <text x="223" y="21" fill={a} fontSize="4" fontFamily="monospace">Sp C</text>
      <text x="246" y="12" fill={a} fontSize="4" fontFamily="monospace">Sp D</text>
      <text x="264" y="12" fill={a} fontSize="4" fontFamily="monospace">Sp E</text>
      <text x="242" y="121" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="4.5" fontFamily="monospace">especiación: divergencia de poblaciones aisladas</text>
    </svg>
  );
}
