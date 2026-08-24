// Diagrama «as3-semi-rect» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function As3SemiRectSVG({ tema }) {
  const rx=26, ry=42, rw=248, rh=92, r=46;
  const cy=ry+rh/2;
  const a=tema.acento, bl=tema.azul;
  return (
    <svg viewBox="0 0 300 175" width="100%" style={{display:"block",maxHeight:168}}>
      <path d={`M ${rx},${ry} H ${rx+rw} V ${ry+rh} H ${rx} Z M ${rx},${cy-r} A ${r},${r} 0 0,1 ${rx},${cy+r} Z M ${rx+rw},${cy-r} A ${r},${r} 0 0,0 ${rx+rw},${cy+r} Z`}
        fillRule="evenodd" fill={`${a}32`} stroke={a} strokeWidth="1.5"/>
      <rect x={rx} y={ry} width={rw} height={rh} fill="none" stroke={bl} strokeWidth="1.5" strokeDasharray="5,3" opacity="0.5"/>
      <text x={rx+rw/2} y={ry-10} fill={a} fontSize="13" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle" fontWeight="600">16 cm</text>
      <text x={rx+rw+12} y={cy+5} fill={bl} fontSize="12" fontFamily="'Figtree', system-ui, sans-serif">6 cm</text>
      <text x={rx-14} y={cy+22} fill={bl} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">r=3</text>
    </svg>
  );
}
