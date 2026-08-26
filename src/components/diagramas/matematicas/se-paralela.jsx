// Diagrama «se-paralela» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function SeParalelaSVG({ tema }) {
  // Big △ ABC with parallel line DE∥BC; labels AD=4,DB=8,AE=3,EC=?
  const A=[130,14],B=[8,148],C=[252,148],D=[89,59],E=[171,59];
  const pts=ps=>ps.map(([x,y])=>`${x},${y}`).join(" ");
  return (
    <svg viewBox="0 0 270 162" width="100%" style={{display:"block",maxHeight:155}}>
      <polygon points={pts([A,B,C])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([A,D,E])} fill={tema.acentoSuave} stroke="none"/>
      <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke="rgba(240,236,227,0.60)" strokeWidth="2"/>
      <line x1={A[0]} y1={A[1]} x2={C[0]} y2={C[1]} stroke="rgba(240,236,227,0.60)" strokeWidth="2"/>
      <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={tema.canal(1)}  strokeWidth="2.2"/>
      <line x1={D[0]} y1={D[1]} x2={E[0]} y2={E[1]} stroke={tema.acento} strokeWidth="2.2"/>
      <text x="93"  y="40"  fill={tema.azul}   fontSize="11" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">AD=4</text>
      <text x="34"  y="112" fill="rgba(240,236,227,0.65)" fontSize="11" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">DB=8</text>
      <text x="162" y="40"  fill={tema.acento} fontSize="11" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">AE=3</text>
      <text x="200" y="108" fill={tema.acento} fontSize="13" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">EC=?</text>
      <text x="130" y="50"  fill={tema.acento} fontSize="9"  fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle" letterSpacing="0.1em">DE ∥ BC</text>
      <text x="130" y="9"   fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="3"   y="158" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="256" y="158" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">C</text>
      <text x="82"  y="70"  fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">D</text>
      <text x="177" y="70"  fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">E</text>
    </svg>
  );
}
