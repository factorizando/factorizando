// Diagrama «ce2-medidas» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function Ce2CondMedSVG({ tema }) {
  const A=[86,14],B=[8,122],C=[178,122],D=[264,14],E=[194,122],F=[354,122];
  const pts=ps=>ps.map(([x,y])=>`${x},${y}`).join(" ");
  const dim="rgba(240,236,227,0.30)";
  return (
    <svg viewBox="0 0 370 145" width="100%" style={{display:"block",maxHeight:145}}>
      <polygon points={pts([A,B,C])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([D,E,F])} fill={tema.azulSuave} stroke="none"/>
      {/* Left △: BC highlighted (verde), others dim */}
      <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={dim} strokeWidth="1.8"/>
      <line x1={C[0]} y1={C[1]} x2={A[0]} y2={A[1]} stroke={dim} strokeWidth="1.8"/>
      <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={tema.verde} strokeWidth="2.8"/>
      {/* Right △: EF highlighted (verde), others dim */}
      <line x1={D[0]} y1={D[1]} x2={E[0]} y2={E[1]} stroke={dim} strokeWidth="1.8"/>
      <line x1={F[0]} y1={F[1]} x2={D[0]} y2={D[1]} stroke={dim} strokeWidth="1.8"/>
      <line x1={E[0]} y1={E[1]} x2={F[0]} y2={F[1]} stroke={tema.verde} strokeWidth="2.8"/>
      {/* Side labels – left */}
      <text x="28"  y="74"  fill={dim}        fontSize="12" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600" textAnchor="middle">7</text>
      <text x="93"  y="136" fill={tema.verde}  fontSize="13" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="middle">10</text>
      <text x="148" y="64"  fill={dim}        fontSize="12" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600" textAnchor="middle">8</text>
      {/* Side labels – right: only EF=? */}
      <text x="274" y="136" fill={tema.acento} fontSize="14" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="middle">?</text>
      {/* ≅ */}
      <text x="186" y="74" fill="rgba(240,236,227,0.28)" fontSize="28" fontFamily="Georgia,serif" textAnchor="middle">≅</text>
      {/* Vertex labels */}
      <text x="86"  y="5"   fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="138" fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="178" y="138" fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="264" y="5"   fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="194" y="138" fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="360" y="129" fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>
    </svg>
  );
}
