// Diagrama «se-lll-s1» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";
import { _svgH } from "../comun.jsx";

export default function SeLllS1SVG({ tema }) {
  // Ejercicio 1 LLL: AB=3(azul),BC=5(verde),CA=7(acento) | DE=6,EF=10,FD=14 — k=2
  const A=[86,14],B=[8,122],C=[178,122],D=[264,14],E=[194,122],F=[354,122];
  const {mid,vsub,vadd,vscale,vunit,vperp,fmt}=_svgH();
  function tp(P1,P2){const m=mid(P1,P2),p=vperp(vunit(vsub(P2,P1)));return`M ${fmt(vadd(m,vscale(p,6)))} L ${fmt(vadd(m,vscale(p,-6)))}`;}
  function t2p(P1,P2){const m=mid(P1,P2),d=vunit(vsub(P2,P1)),p=vperp(d);return[-4,4].map(o=>{const c=vadd(m,vscale(d,o));return`M ${fmt(vadd(c,vscale(p,6)))} L ${fmt(vadd(c,vscale(p,-6)))}`;}).join(" ");}
  function t3p(P1,P2){const m=mid(P1,P2),d=vunit(vsub(P2,P1)),p=vperp(d);return[-7,0,7].map(o=>{const c=vadd(m,vscale(d,o));return`M ${fmt(vadd(c,vscale(p,6)))} L ${fmt(vadd(c,vscale(p,-6)))}`;}).join(" ");}
  const pts=ps=>ps.map(fmt).join(" ");
  return (
    <svg viewBox="0 0 370 160" width="100%" style={{display:"block",maxHeight:160}}>
      <g transform="translate(0,15)">
      <polygon points={pts([A,B,C])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([D,E,F])} fill={tema.azulSuave} stroke="none"/>
      <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={tema.azul}   strokeWidth="2.2"/>
      <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={tema.canal(1)}  strokeWidth="2.2"/>
      <line x1={C[0]} y1={C[1]} x2={A[0]} y2={A[1]} stroke={tema.acento} strokeWidth="2.2"/>
      <line x1={D[0]} y1={D[1]} x2={E[0]} y2={E[1]} stroke={tema.azul}   strokeWidth="2.2"/>
      <line x1={E[0]} y1={E[1]} x2={F[0]} y2={F[1]} stroke={tema.canal(1)}  strokeWidth="2.2"/>
      <line x1={F[0]} y1={F[1]} x2={D[0]} y2={D[1]} stroke={tema.acento} strokeWidth="2.2"/>
      <path d={tp(A,B)}  stroke={tema.azul}   strokeWidth="1.8" fill="none"/>
      <path d={tp(D,E)}  stroke={tema.azul}   strokeWidth="1.8" fill="none"/>
      <path d={t2p(B,C)} stroke={tema.canal(1)}  strokeWidth="1.8" fill="none"/>
      <path d={t2p(E,F)} stroke={tema.canal(1)}  strokeWidth="1.8" fill="none"/>
      <path d={t3p(C,A)} stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d={t3p(F,D)} stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <text x="29"  y="62"  fill={tema.azul}   fontSize="12" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="end">3</text>
      <text x="93"  y="136" fill={tema.canal(1)}  fontSize="12" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="middle">5</text>
      <text x="148" y="61"  fill={tema.acento} fontSize="12" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">7</text>
      <text x="207" y="62"  fill={tema.azul}   fontSize="12" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="end">6</text>
      <text x="274" y="136" fill={tema.canal(1)}  fontSize="12" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="middle">10</text>
      <text x="327" y="61"  fill={tema.acento} fontSize="12" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">14</text>
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
