// Diagrama «se-lll-ej2» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function SeLllEj2SVG({ tema }) {
  // Sides AB=10(azul),BC=20(verde),CA=15(acento) | DE=6,EF=12,FD=9 — k=5/3
  const A=[86,14],B=[8,122],C=[178,122],D=[264,14],E=[194,122],F=[354,122];
  const pts=ps=>ps.map(([x,y])=>`${x},${y}`).join(" ");
  return (
    <svg viewBox="0 0 370 160" width="100%" style={{display:"block",maxHeight:160}}>
      <g transform="translate(0,15)">
      <polygon points={pts([A,B,C])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([D,E,F])} fill={tema.azulSuave} stroke="none"/>
      <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={tema.azul}   strokeWidth="2.2"/>
      <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={tema.verde}  strokeWidth="2.2"/>
      <line x1={C[0]} y1={C[1]} x2={A[0]} y2={A[1]} stroke={tema.acento} strokeWidth="2.2"/>
      <line x1={D[0]} y1={D[1]} x2={E[0]} y2={E[1]} stroke={tema.azul}   strokeWidth="2.2"/>
      <line x1={E[0]} y1={E[1]} x2={F[0]} y2={F[1]} stroke={tema.verde}  strokeWidth="2.2"/>
      <line x1={F[0]} y1={F[1]} x2={D[0]} y2={D[1]} stroke={tema.acento} strokeWidth="2.2"/>
      <text x="29"  y="62"  fill={tema.azul}   fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">10</text>
      <text x="93"  y="136" fill={tema.verde}  fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">20</text>
      <text x="148" y="61"  fill={tema.acento} fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700">15</text>
      <text x="207" y="62"  fill={tema.azul}   fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">6</text>
      <text x="274" y="136" fill={tema.verde}  fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">12</text>
      <text x="327" y="61"  fill={tema.acento} fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700">9</text>
      <text x="186" y="74"  fill="rgba(240,236,227,0.30)" fontSize="26" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
      <text x="86"  y="5"   fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="178" y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="264" y="5"   fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="194" y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="360" y="129" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>
      </g>
    </svg>
  );
}
