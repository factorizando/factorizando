// Diagrama «ce5-angulo» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";
import { _svgH } from "../comun.jsx";

export default function Ce5AngleSVG({ tema }) {
  const P=[86,14],Q=[8,122],R=[178,122],X=[264,14],Y=[194,122],Z=[354,122];
  const {vadd,vsub,vscale,vunit,fmt}=_svgH();
  function arcPath(V,P1,P2,r){const s=vadd(V,vscale(vunit(vsub(P1,V)),r)),e=vadd(V,vscale(vunit(vsub(P2,V)),r));return`M ${fmt(s)} A ${r},${r} 0 0,1 ${fmt(e)}`;}
  const pts=ps=>ps.map(([x,y])=>`${x},${y}`).join(" ");
  const stroke="rgba(240,236,227,0.72)";
  return (
    <svg viewBox="0 0 370 145" width="100%" style={{display:"block",maxHeight:145}}>
      <polygon points={pts([P,Q,R])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([X,Y,Z])} fill={tema.azulSuave} stroke="none"/>
      <line x1={P[0]} y1={P[1]} x2={Q[0]} y2={Q[1]} stroke={stroke} strokeWidth="2"/>
      <line x1={Q[0]} y1={Q[1]} x2={R[0]} y2={R[1]} stroke={stroke} strokeWidth="2"/>
      <line x1={R[0]} y1={R[1]} x2={P[0]} y2={P[1]} stroke={stroke} strokeWidth="2"/>
      <line x1={X[0]} y1={X[1]} x2={Y[0]} y2={Y[1]} stroke={stroke} strokeWidth="2"/>
      <line x1={Y[0]} y1={Y[1]} x2={Z[0]} y2={Z[1]} stroke={stroke} strokeWidth="2"/>
      <line x1={Z[0]} y1={Z[1]} x2={X[0]} y2={X[1]} stroke={stroke} strokeWidth="2"/>
      {/* ∠P = 55° and ∠X (matching) */}
      <path d={arcPath(P,R,Q,22)} stroke={tema.azul} strokeWidth="1.6" fill="none"/>
      <path d={arcPath(X,Z,Y,22)} stroke={tema.azul} strokeWidth="1.6" fill="none"/>
      {/* ∠Q = 75° and ∠Y (matching) */}
      <path d={arcPath(Q,P,R,22)} stroke={tema.canal(1)} strokeWidth="1.6" fill="none"/>
      <path d={arcPath(Y,X,Z,22)} stroke={tema.canal(1)} strokeWidth="1.6" fill="none"/>
      {/* ∠R (computed) and ∠Z = ? */}
      <path d={arcPath(R,Q,P,18)} stroke={tema.acento} strokeWidth="1.6" fill="none"/>
      <path d={arcPath(Z,Y,X,18)} stroke={tema.acento} strokeWidth="1.6" fill="none"/>
      {/* Angle labels */}
      <text x="86"  y="48"  fill={tema.azul}  fontSize="10" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600" textAnchor="middle">55°</text>
      <text x="38"  y="110" fill={tema.canal(1)} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">75°</text>
      <text x="354" y="110" fill={tema.acento} fontSize="12" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="middle">?</text>
      {/* ≅ */}
      <text x="186" y="74" fill="rgba(240,236,227,0.28)" fontSize="28" fontFamily="Georgia,serif" textAnchor="middle">≅</text>
      {/* Vertex labels */}
      <text x="86"  y="5"   fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">P</text>
      <text x="4"   y="138" fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">Q</text>
      <text x="178" y="138" fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">R</text>
      <text x="264" y="5"   fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">X</text>
      <text x="194" y="138" fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">Y</text>
      <text x="360" y="129" fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">Z</text>
    </svg>
  );
}
