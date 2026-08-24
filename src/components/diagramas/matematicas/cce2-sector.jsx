// Diagrama «cce2-sector» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function Cce2SectorSVG({ tema }) {
  const cx=96, cy=118, r=86;
  const a=tema.acento, bl=tema.azul;
  const D=(d)=>d*Math.PI/180;
  const x0=+(cx+r*Math.cos(D(-90))).toFixed(1), y0=+(cy+r*Math.sin(D(-90))).toFixed(1);
  const x1=+(cx+r*Math.cos(D(30))).toFixed(1),  y1=+(cy+r*Math.sin(D(30))).toFixed(1);
  return (
    <svg viewBox="0 0 234 218" width="100%" style={{display:"block",maxHeight:208}}>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="1.5" opacity="0.6"/>
      <path d={`M ${cx},${cy} L ${x0},${y0} A ${r},${r} 0 0,1 ${x1},${y1} Z`} fill={`${a}38`} stroke={a} strokeWidth="2"/>
      <circle cx={cx} cy={cy} r={3.5} fill={a}/>
      <text x={cx+5} y={cy-5} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">O</text>
      <text x={(cx + +x0)/2-16} y={(cy + +y0)/2} fill={a} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">r=6</text>
      <text x={cx+24} y={cy-20} fill={a} fontSize="12" fontFamily="'Figtree', system-ui, sans-serif">120°</text>
      <text x={+x1+6} y={+y1+6} fill={a} fontSize="11" fontFamily="'Figtree', system-ui, sans-serif">A=?</text>
    </svg>
  );
}
