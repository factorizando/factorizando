// Diagrama «segmento-circular» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function SegmentoCircularSVG({ tema }) {
  const cx=108, cy=112, r=78;
  const bl=tema.azul, a=tema.acento;
  const D=(d)=>d*Math.PI/180;
  const ang0=-140, ang1=-40;
  const x0=+(cx+r*Math.cos(D(ang0))).toFixed(1), y0=+(cy+r*Math.sin(D(ang0))).toFixed(1);
  const x1=+(cx+r*Math.cos(D(ang1))).toFixed(1), y1=+(cy+r*Math.sin(D(ang1))).toFixed(1);
  return (
    <svg viewBox="0 0 252 228" width="100%" style={{display:"block",maxHeight:218}}>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="1.8" opacity="0.7"/>
      <path d={`M ${cx},${cy} L ${x0},${y0} A ${r},${r} 0 0,1 ${x1},${y1} Z`} fill={tema.azulSuave} stroke={bl} strokeWidth="1.5"/>
      <path d={`M ${x0},${y0} A ${r},${r} 0 0,1 ${x1},${y1} Z`} fill={`${a}38`} stroke={a} strokeWidth="2"/>
      <line x1={x0} y1={y0} x2={x1} y2={y1} stroke={bl} strokeWidth="2.2" opacity="0.9"/>
      <line x1={cx} y1={cy} x2={x0} y2={y0} stroke={bl} strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6"/>
      <line x1={cx} y1={cy} x2={x1} y2={y1} stroke={bl} strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6"/>
      <circle cx={cx} cy={cy} r={3.5} fill={bl}/>
      <text x={cx+5} y={cy+5} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">O</text>
      <text x={(+x0 + +x1)/2} y={(+y0 + +y1)/2 - 13} fill={a} fontSize="11" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle" fontWeight="600">segmento</text>
      <text x={172} y={68} fill={a} fontSize="11" fontFamily="'Figtree', system-ui, sans-serif">A = A₍sector₎</text>
      <text x={172} y={84} fill={a} fontSize="11" fontFamily="'Figtree', system-ui, sans-serif">   − A₍△₎</text>
    </svg>
  );
}
