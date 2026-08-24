// Diagrama «as2-corona» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function As2CoronaSVG({ tema }) {
  const cx=100, cy=90;
  const R=76, rr=46;
  const a=tema.acento, bl=tema.azul;
  return (
    <svg viewBox="0 0 200 182" width="100%" style={{display:"block",maxHeight:175}}>
      <path d={`M ${cx-R},${cy} A ${R},${R} 0 1,0 ${cx+R},${cy} A ${R},${R} 0 1,0 ${cx-R},${cy} M ${cx-rr},${cy} A ${rr},${rr} 0 1,1 ${cx+rr},${cy} A ${rr},${rr} 0 1,1 ${cx-rr},${cy}`}
        fillRule="evenodd" fill={`${a}32`}/>
      <circle cx={cx} cy={cy} r={R} fill="none" stroke={a} strokeWidth="2"/>
      <circle cx={cx} cy={cy} r={rr} fill="none" stroke={bl} strokeWidth="2"/>
      <circle cx={cx} cy={cy} r={3.5} fill={bl}/>
      <line x1={cx} y1={cy} x2={cx+rr} y2={cy} stroke={bl} strokeWidth="1.5" strokeDasharray="3,3" opacity="0.7"/>
      <text x={cx+rr/2} y={cy-7} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">r=6</text>
      <line x1={cx+rr} y1={cy} x2={cx+R} y2={cy} stroke={a} strokeWidth="1.5" strokeDasharray="3,3" opacity="0.7"/>
      <text x={cx+(rr+R)/2} y={cy-7} fill={a} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">R=10</text>
    </svg>
  );
}
