// Diagrama «as1-cuad-circ» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function As1CuadCircSVG({ tema }) {
  const sq_x=16, sq_y=8, sq_w=164, sq_h=164;
  const cx=sq_x+sq_w/2, cy=sq_y+sq_h/2, r=sq_w/2;
  const a=tema.acento, bl=tema.azul;
  return (
    <svg viewBox="0 0 200 200" width="100%" style={{display:"block",maxHeight:195}}>
      <path d={`M ${sq_x},${sq_y} H ${sq_x+sq_w} V ${sq_y+sq_h} H ${sq_x} Z M ${cx-r},${cy} A ${r},${r} 0 1,0 ${cx+r},${cy} A ${r},${r} 0 1,0 ${cx-r},${cy}`}
        fillRule="evenodd" fill={`${a}32`}/>
      <rect x={sq_x} y={sq_y} width={sq_w} height={sq_h} fill="none" stroke={a} strokeWidth="2"/>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={bl} strokeWidth="2"/>
      <line x1={cx} y1={cy} x2={cx+r} y2={cy} stroke={bl} strokeWidth="1.5" strokeDasharray="4,3" opacity="0.7"/>
      <text x={cx+r/2} y={cy-7} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">r=7</text>
      <text x={cx} y={sq_y+sq_h+16} fill={a} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">l = 14 cm</text>
    </svg>
  );
}
