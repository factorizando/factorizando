// Diagrama «ce3-ala» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";
import { _svgH } from "../comun.jsx";

export default function Ce3AlaSVG({ tema }) {
  const A=[86,14],B=[8,122],C=[178,122],D=[264,14],E=[194,122],F=[354,122];
  const {mid,vsub,vadd,vscale,vunit,vperp,fmt}=_svgH();
  function tp(P1,P2){const m=mid(P1,P2),p=vperp(vunit(vsub(P2,P1)));return`M ${fmt(vadd(m,vscale(p,6)))} L ${fmt(vadd(m,vscale(p,-6)))}`;}
  function arcPath(V,P1,P2,r){const s=vadd(V,vscale(vunit(vsub(P1,V)),r)),e=vadd(V,vscale(vunit(vsub(P2,V)),r));return`M ${fmt(s)} A ${r},${r} 0 0,1 ${fmt(e)}`;}
  const pts=ps=>ps.map(fmt).join(" ");
  const dim="rgba(240,236,227,0.30)";
  return (
    <svg viewBox="0 0 370 145" width="100%" style={{display:"block",maxHeight:145}}>
      <polygon points={pts([A,B,C])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([D,E,F])} fill={tema.azulSuave} stroke="none"/>
      <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={tema.acento} strokeWidth="2.4"/>
      <line x1={D[0]} y1={D[1]} x2={E[0]} y2={E[1]} stroke={tema.acento} strokeWidth="2.4"/>
      <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={dim} strokeWidth="1.8"/>
      <line x1={E[0]} y1={E[1]} x2={F[0]} y2={F[1]} stroke={dim} strokeWidth="1.8"/>
      <line x1={C[0]} y1={C[1]} x2={A[0]} y2={A[1]} stroke={dim} strokeWidth="1.8"/>
      <line x1={F[0]} y1={F[1]} x2={D[0]} y2={D[1]} stroke={dim} strokeWidth="1.8"/>
      {/* Tick on AB and DE */}
      <path d={tp(A,B)} stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d={tp(D,E)} stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      {/* Angle arcs at A and D (60°) */}
      <path d={arcPath(A,C,B,22)} stroke={tema.verde} strokeWidth="1.6" fill="none"/>
      <path d={arcPath(D,F,E,22)} stroke={tema.verde} strokeWidth="1.6" fill="none"/>
      {/* Angle arcs at B and E (50°) */}
      <path d={arcPath(B,A,C,22)} stroke={tema.azul} strokeWidth="1.6" fill="none"/>
      <path d={arcPath(E,D,F,22)} stroke={tema.azul} strokeWidth="1.6" fill="none"/>
      {/* Angle labels */}
      <text x="86"  y="50"  fill={tema.verde} fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">60°</text>
      <text x="264" y="50"  fill={tema.verde} fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">60°</text>
      <text x="36"  y="110" fill={tema.azul}  fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="600">50°</text>
      <text x="214" y="110" fill={tema.azul}  fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="600">50°</text>
      {/* AB = DE = 8 labels */}
      <text x="29"  y="62"  fill={tema.acento} fontSize="11" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">8</text>
      <text x="215" y="62"  fill={tema.acento} fontSize="11" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">8</text>
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
