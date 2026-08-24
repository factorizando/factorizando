// Diagrama «se-aa-ej2» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function SeAaEj2SVG({ tema }) {
  // Big △ABC AB=6,BC=9; Small △DEF DE=4,EF=6 (k=3/2 — same angles, different sizes)
  const A=[86,14],B=[8,122],C=[178,122];
  const D=[274,50],E=[218,122],F=[330,122];
  const pts=ps=>ps.map(([x,y])=>`${x},${y}`).join(" ");
  const dim="rgba(240,236,227,0.28)";
  return (
    <svg viewBox="0 0 370 145" width="100%" style={{display:"block",maxHeight:145}}>
      <polygon points={pts([A,B,C])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([D,E,F])} fill={tema.azulSuave} stroke="none"/>
      <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={tema.azul}  strokeWidth="2.4"/>
      <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={tema.verde} strokeWidth="2.4"/>
      <line x1={C[0]} y1={C[1]} x2={A[0]} y2={A[1]} stroke={dim}        strokeWidth="1.5"/>
      <line x1={D[0]} y1={D[1]} x2={E[0]} y2={E[1]} stroke={tema.azul}  strokeWidth="2.4"/>
      <line x1={E[0]} y1={E[1]} x2={F[0]} y2={F[1]} stroke={tema.verde} strokeWidth="2.4"/>
      <line x1={F[0]} y1={F[1]} x2={D[0]} y2={D[1]} stroke={dim}        strokeWidth="1.5"/>
      <text x="29"  y="62"  fill={tema.azul}  fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">6</text>
      <text x="93"  y="136" fill={tema.verde} fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">9</text>
      <text x="214" y="82"  fill={tema.azul}  fontSize="11" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">4</text>
      <text x="194" y="96"  fill="rgba(240,236,227,0.50)" fontSize="13" fontWeight="700" fontFamily="'DM Sans',sans-serif" textAnchor="middle">k=3/2</text>
      <text x="186" y="78"  fill="rgba(240,236,227,0.28)" fontSize="22" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
      <text x="86"  y="5"   fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="178" y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="274" y="43"  fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="210" y="134" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">E</text>
      <text x="334" y="134" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>
    </svg>
  );
}
