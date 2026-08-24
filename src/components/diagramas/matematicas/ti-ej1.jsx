// Diagrama «ti-ej1» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function TiEj1SVG({ tema }) {
  const cx=95, cy=82, r=62;
  const bl=tema.azul, a=tema.acento, gr=tema.verde;
  const Ax=cx-r, Ay=cy, Cx=cx+r, Cy=cy, Bx=cx, By=cy-r;
  return (
    <svg viewBox="0 0 200 130" width="100%" style={{display:"block",maxHeight:150}}>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="1.8" opacity="0.8"/>
      <polygon points={`${Ax},${Ay} ${Bx},${By} ${Cx},${Cy}`} fill={`${a}22`} stroke={a} strokeWidth="2"/>
      <line x1={Ax} y1={Ay} x2={Cx} y2={Cy} stroke={gr} strokeWidth="2"/>
      <path d={`M ${Bx-10},${By+2} L ${Bx-10},${By+12} L ${Bx},${By+12}`} fill="none" stroke={a} strokeWidth="1.6"/>
      <text x={Ax+16} y={Ay-7} fill={bl} fontSize="12" fontFamily="Georgia,serif">35°</text>
      <text x={Cx-22} y={Cy-7} fill={bl} fontSize="13" fontFamily="Georgia,serif">?</text>
      <text x={cx} y={Cy+18} fill={gr} fontSize="11" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">diámetro</text>
      <circle cx={cx} cy={cy} r={2.8} fill={gr}/>
    </svg>
  );
}
