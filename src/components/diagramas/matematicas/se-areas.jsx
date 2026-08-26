// Diagrama «se-areas» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function SeAreasSVG({ tema }) {
  // Big △ABC and small △DEF — shows k=4, ask for area of big given area of small=7 cm²
  const pts=ps=>ps.map(([x,y])=>`${x},${y}`).join(" ");
  const dim="rgba(240,236,227,0.35)";
  return (
    <svg viewBox="0 0 388 175" width="100%" style={{display:"block",maxHeight:160}}>
      <polygon points={pts([[95,14],[12,155],[198,155]])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([[296,90],[262,155],[340,155]])} fill={tema.acentoSuave} stroke="none"/>
      <line x1="95"  y1="14"  x2="12"  y2="155" stroke={dim} strokeWidth="1.8"/>
      <line x1="12"  y1="155" x2="198" y2="155" stroke={dim} strokeWidth="1.8"/>
      <line x1="198" y1="155" x2="95"  y2="14"  stroke={dim} strokeWidth="1.8"/>
      <line x1="296" y1="90"  x2="262" y2="155" stroke={dim} strokeWidth="1.8"/>
      <line x1="262" y1="155" x2="340" y2="155" stroke={dim} strokeWidth="1.8"/>
      <line x1="340" y1="155" x2="296" y2="90"  stroke={dim} strokeWidth="1.8"/>
      <text x="105" y="108" fill={tema.acento} fontSize="15" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="middle">?</text>
      <text x="301" y="136" fill={tema.canal(1)}  fontSize="10" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600" textAnchor="middle">7 cm²</text>
      <text x="228" y="82"  fill="rgba(240,236,227,0.28)" fontSize="20" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
      <text x="228" y="104" fill="rgba(240,236,227,0.55)" fontSize="15" fontWeight="700" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">k = 4</text>
      <text x="95"  y="7"   fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="165" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="202" y="165" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">C</text>
      <text x="296" y="83"  fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="254" y="168" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">E</text>
      <text x="344" y="168" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">F</text>
    </svg>
  );
}
