// Diagrama «ce4-aaa» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";
import { _svgH } from "../comun.jsx";

export default function Ce4AaaSVG({ tema }) {
  // Big △ABC and small △DEF — same angles, different sizes
  const A=[74,14],B=[8,140],C=[200,140],D=[290,60],E=[254,140],F=[338,140];
  const {vadd,vsub,vscale,vunit,fmt}=_svgH();
  function arcPath(V,P1,P2,r){const s=vadd(V,vscale(vunit(vsub(P1,V)),r)),e=vadd(V,vscale(vunit(vsub(P2,V)),r));return`M ${fmt(s)} A ${r},${r} 0 0,1 ${fmt(e)}`;}
  function arc2(V,P1,P2,r){return[arcPath(V,P1,P2,r),arcPath(V,P1,P2,r+5)].join(" ");}
  const pts=ps=>ps.map(([x,y])=>`${x},${y}`).join(" ");
  const stroke="rgba(240,236,227,0.72)";
  return (
    <svg viewBox="0 0 356 156" width="100%" style={{display:"block",maxHeight:150}}>
      <polygon points={pts([A,B,C])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([D,E,F])} fill={tema.azulSuave} stroke="none"/>
      <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={stroke} strokeWidth="2"/>
      <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={stroke} strokeWidth="2"/>
      <line x1={C[0]} y1={C[1]} x2={A[0]} y2={A[1]} stroke={stroke} strokeWidth="2"/>
      <line x1={D[0]} y1={D[1]} x2={E[0]} y2={E[1]} stroke={stroke} strokeWidth="2"/>
      <line x1={E[0]} y1={E[1]} x2={F[0]} y2={F[1]} stroke={stroke} strokeWidth="2"/>
      <line x1={F[0]} y1={F[1]} x2={D[0]} y2={D[1]} stroke={stroke} strokeWidth="2"/>
      {/* Single arc at A and D */}
      <path d={arcPath(A,C,B,22)} stroke={tema.azul} strokeWidth="1.6" fill="none"/>
      <path d={arcPath(D,F,E,16)} stroke={tema.azul} strokeWidth="1.6" fill="none"/>
      {/* Double arc at B and E */}
      <path d={arc2(B,A,C,18)} stroke={tema.canal(1)} strokeWidth="1.4" fill="none"/>
      <path d={arc2(E,D,F,12)} stroke={tema.canal(1)} strokeWidth="1.4" fill="none"/>
      {/* Single arc at C and F (different color) */}
      <path d={arcPath(C,B,A,22)} stroke={tema.acento} strokeWidth="1.6" fill="none"/>
      <path d={arcPath(F,E,D,16)} stroke={tema.acento} strokeWidth="1.6" fill="none"/>
      {/* ∼ symbol between triangles */}
      <text x="230" y="90" fill="rgba(240,236,227,0.28)" fontSize="26" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
      {/* Vertex labels */}
      <text x="74"  y="5"   fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="152" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="200" y="152" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="290" y="52"  fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="250" y="152" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="342" y="150" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>
    </svg>
  );
}
