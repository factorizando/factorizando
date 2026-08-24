// Diagrama «sector-circular» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function SectorCircularSVG({ tema }) {
  const cx=105, cy=118, r=84;
  const bl=tema.azul, a=tema.acento;
  const D=(d)=>d*Math.PI/180;
  const ang0=-90, ang1=30;
  const x0=+(cx+r*Math.cos(D(ang0))).toFixed(1), y0=+(cy+r*Math.sin(D(ang0))).toFixed(1);
  const x1=+(cx+r*Math.cos(D(ang1))).toFixed(1), y1=+(cy+r*Math.sin(D(ang1))).toFixed(1);
  const mx=+(cx+r*Math.cos(D(-30))).toFixed(1), my=+(cy+r*Math.sin(D(-30))).toFixed(1);
  return (
    <svg viewBox="0 0 304 240" width="100%" style={{display:"block",maxHeight:230}}>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="1.8" opacity="0.7"/>
      <path d={`M ${cx},${cy} L ${x0},${y0} A ${r},${r} 0 0,1 ${x1},${y1} Z`} fill={`${a}35`} stroke={a} strokeWidth="2"/>
      <circle cx={cx} cy={cy} r={3.5} fill={a}/>
      <text x={cx+5} y={cy-5} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">O</text>
      <text x={(cx + +x0)/2-12} y={(cy + +y0)/2+2} fill={a} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">r</text>
      <text x={(cx + +x1)/2+5} y={(cy + +y1)/2+8} fill={a} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">r</text>
      <text x={cx+24} y={cy-18} fill={a} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">θ</text>
      <text x={+mx+8} y={+my+20} fill={a} fontSize="11" fontFamily="'Figtree', system-ui, sans-serif">arco</text>
      {/* Fórmula con A_sector como subíndice y fracción en displaystyle */}
      <foreignObject x={193} y={36} width={109} height={75}>
        <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize: "13px" }}>
          <M>{"\\displaystyle A_{\\text{sector}} = \\frac{\\theta}{360^\\circ}\\,\\pi r^2"}</M>
        </div>
      </foreignObject>
    </svg>
  );
}
