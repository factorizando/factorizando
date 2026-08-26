// Diagrama «cce3-arco» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function Cce3ArcoSVG({ tema }) {
  const cx=108, cy=116, r=82;
  const a=tema.acento, bl=tema.azul, gr=tema.canal(1);
  const D=(d)=>d*Math.PI/180;
  const x0=+(cx+r*Math.cos(D(-90))).toFixed(1), y0=+(cy+r*Math.sin(D(-90))).toFixed(1);
  const x1=+(cx+r*Math.cos(D(-10))).toFixed(1), y1=+(cy+r*Math.sin(D(-10))).toFixed(1);
  return (
    <svg viewBox="0 0 248 228" width="100%" style={{display:"block",maxHeight:218}}>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="1.5" opacity="0.6"/>
      <path d={`M ${x0},${y0} A ${r},${r} 0 0,1 ${x1},${y1}`} fill="none" stroke={gr} strokeWidth="4.5" strokeLinecap="round" opacity="0.9"/>
      <line x1={cx} y1={cy} x2={x0} y2={y0} stroke={bl} strokeWidth="1.5" strokeDasharray="4,3" opacity="0.55"/>
      <line x1={cx} y1={cy} x2={x1} y2={y1} stroke={bl} strokeWidth="1.5" strokeDasharray="4,3" opacity="0.55"/>
      <circle cx={cx} cy={cy} r={3.5} fill={a}/>
      <text x={cx+5} y={cy-4} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">O</text>
      <text x={(cx + +x1)/2+8} y={(cy + +y1)/2+2} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">r=9</text>
      <text x={cx+24} y={cy-26} fill={a} fontSize="12" fontFamily="'Figtree', system-ui, sans-serif">80°</text>
      <text x={+x1+8} y={+y1-6} fill={gr} fontSize="12" fontFamily="'Figtree', system-ui, sans-serif">l=?</text>
    </svg>
  );
}
