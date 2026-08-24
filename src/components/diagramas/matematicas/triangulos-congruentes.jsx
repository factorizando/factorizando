// Diagrama «triangulos-congruentes» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function TriangulosCongruentesSVG({ tema }) {
  const A = [100, 18], B = [10, 178], C = [195, 178];
  const D = [310, 18], E = [220, 178], F = [405, 178];

  function mid([x1,y1],[x2,y2]) { return [(x1+x2)/2,(y1+y2)/2]; }
  function vsub([x1,y1],[x2,y2]) { return [x1-x2,y1-y2]; }
  function vadd([x1,y1],[x2,y2]) { return [x1+x2,y1+y2]; }
  function vscale([x,y],s) { return [x*s,y*s]; }
  function vunit([x,y]) { const l=Math.hypot(x,y); return [x/l,y/l]; }
  function vperp([x,y]) { return [-y,x]; }
  function fmt([x,y]) { return `${x.toFixed(1)},${y.toFixed(1)}`; }
  function tickPath(P1,P2) { const m=mid(P1,P2),p=vperp(vunit(vsub(P2,P1))); return `M ${fmt(vadd(m,vscale(p,6)))} L ${fmt(vadd(m,vscale(p,-6)))}`; }
  function tick2Path(P1,P2) { const m=mid(P1,P2),d=vunit(vsub(P2,P1)),p=vperp(d); return [-4,4].map(o=>{const c=vadd(m,vscale(d,o));return `M ${fmt(vadd(c,vscale(p,6)))} L ${fmt(vadd(c,vscale(p,-6)))}`;}).join(" "); }
  function tick3Path(P1,P2) { const m=mid(P1,P2),d=vunit(vsub(P2,P1)),p=vperp(d); return [-7,0,7].map(o=>{const c=vadd(m,vscale(d,o));return `M ${fmt(vadd(c,vscale(p,6)))} L ${fmt(vadd(c,vscale(p,-6)))}`;}).join(" "); }
  function arcPath(V,P1,P2,r) { const s=vadd(V,vscale(vunit(vsub(P1,V)),r)),e=vadd(V,vscale(vunit(vsub(P2,V)),r)); return `M ${fmt(s)} A ${r},${r} 0 0,1 ${fmt(e)}`; }
  const pts = ps => ps.map(fmt).join(" ");

  return (
    <svg viewBox="0 0 420 200" width="100%" style={{ maxHeight: 200, display: "block" }}>
      <polygon points={pts([A,B,C])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([D,E,F])} fill={tema.azulSuave} stroke="none"/>
      <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={tema.azul}   strokeWidth="2" opacity="0.85"/>
      <line x1={D[0]} y1={D[1]} x2={E[0]} y2={E[1]} stroke={tema.azul}   strokeWidth="2" opacity="0.85"/>
      <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={tema.verde}  strokeWidth="2" opacity="0.85"/>
      <line x1={E[0]} y1={E[1]} x2={F[0]} y2={F[1]} stroke={tema.verde}  strokeWidth="2" opacity="0.85"/>
      <line x1={C[0]} y1={C[1]} x2={A[0]} y2={A[1]} stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <line x1={F[0]} y1={F[1]} x2={D[0]} y2={D[1]} stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <path d={tickPath(A,B)}   stroke={tema.azul}   strokeWidth="1.5" fill="none" opacity="0.9"/>
      <path d={tickPath(D,E)}   stroke={tema.azul}   strokeWidth="1.5" fill="none" opacity="0.9"/>
      <path d={tick2Path(B,C)}  stroke={tema.verde}  strokeWidth="1.5" fill="none" opacity="0.9"/>
      <path d={tick2Path(E,F)}  stroke={tema.verde}  strokeWidth="1.5" fill="none" opacity="0.9"/>
      <path d={tick3Path(C,A)}  stroke={tema.acento} strokeWidth="1.5" fill="none" opacity="0.9"/>
      <path d={tick3Path(F,D)}  stroke={tema.acento} strokeWidth="1.5" fill="none" opacity="0.9"/>
      <path d={arcPath(A,C,B,22)} stroke={tema.azul}   strokeWidth="1.5" fill="none" opacity="0.8"/>
      <path d={arcPath(D,F,E,22)} stroke={tema.azul}   strokeWidth="1.5" fill="none" opacity="0.8"/>
      <path d={arcPath(B,A,C,22)} stroke={tema.verde}  strokeWidth="1.5" fill="none" opacity="0.8"/>
      <path d={arcPath(E,D,F,22)} stroke={tema.verde}  strokeWidth="1.5" fill="none" opacity="0.8"/>
      <path d={arcPath(C,B,A,22)} stroke={tema.acento} strokeWidth="1.5" fill="none" opacity="0.8"/>
      <path d={arcPath(F,E,D,22)} stroke={tema.acento} strokeWidth="1.5" fill="none" opacity="0.8"/>
      <text x={A[0]-5} y={A[1]-10} fill={tema.azul}   fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="2"       y={B[1]+18} fill={tema.verde}  fontSize="15" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x={C[0]-3}  y={C[1]+18} fill={tema.acento} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">C</text>
      <text x={D[0]-5} y={D[1]-10} fill={tema.azul}   fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x={E[0]+6} y={E[1]+18} fill={tema.verde}  fontSize="15" fontFamily="Georgia,serif" fontStyle="italic">E</text>
      <text x={F[0]+7}  y={F[1]+4} fill={tema.acento} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic">F</text>
      <text x="207" y="120" fill="rgba(240,236,227,0.32)" fontSize="34" fontFamily="Georgia,serif" textAnchor="middle">≅</text>
    </svg>
  );
}
