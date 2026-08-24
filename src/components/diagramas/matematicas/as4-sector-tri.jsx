// Diagrama «as4-sector-tri» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function As4SectorTriSVG({ tema }) {
  const cx=44, cy=180, r=135;
  const a=tema.acento, bl=tema.azul;
  const x_right=cx+r, y_right=cy;
  const x_up=cx, y_up=cy-r;
  return (
    <svg viewBox="0 0 240 230" width="100%" style={{display:"block",maxHeight:222}}>
      <path d={`M ${x_right},${y_right} A ${r},${r} 0 0,0 ${x_up},${y_up} Z`} fill={`${a}38`} stroke="none"/>
      <polygon points={`${cx},${cy} ${x_right},${y_right} ${x_up},${y_up}`} fill={tema.azulSuave} stroke={bl} strokeWidth="1.8"/>
      <path d={`M ${cx+18},${cy} L ${cx+18},${cy-18} L ${cx},${cy-18}`} fill="none" stroke="rgba(255,255,255,0.42)" strokeWidth="1.5"/>
      <path d={`M ${x_right},${y_right} A ${r},${r} 0 0,0 ${x_up},${y_up}`} fill="none" stroke={a} strokeWidth="2.5"/>
      <circle cx={cx} cy={cy} r={3.5} fill={a}/>
      <text x={cx+6} y={cy-6} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">O</text>
      <text x={(cx+x_right)/2} y={cy+16} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">r=6</text>
      <text x={cx-18} y={(cy+y_up)/2} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">r=6</text>
      <text x={cx+26} y={cy-22} fill={a} fontSize="13" fontFamily="'Figtree', system-ui, sans-serif">90°</text>
      <text x={(x_right+x_up)/2+12} y={(y_right+y_up)/2-22} fill={a} fontSize="11" fontFamily="'Figtree', system-ui, sans-serif">segmento</text>
    </svg>
  );
}
