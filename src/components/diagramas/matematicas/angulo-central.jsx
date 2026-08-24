// Diagrama «angulo-central» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function AnguloCentralSVG({ tema }) {
  const cx=105, cy=110, r=80;
  const bl=tema.azul, a=tema.acento, gr=tema.verde;
  const D=(d)=>d*Math.PI/180;
  const ang0=-90, ang1=-30;
  const x0=+(cx+r*Math.cos(D(ang0))).toFixed(1), y0=+(cy+r*Math.sin(D(ang0))).toFixed(1);
  const x1=+(cx+r*Math.cos(D(ang1))).toFixed(1), y1=+(cy+r*Math.sin(D(ang1))).toFixed(1);
  const arc20=+(cx+20*Math.cos(D(ang0))).toFixed(1), arc2y0=+(cy+20*Math.sin(D(ang0))).toFixed(1);
  const arc21=+(cx+20*Math.cos(D(ang1))).toFixed(1), arc2y1=+(cy+20*Math.sin(D(ang1))).toFixed(1);
  return (
    <svg viewBox="0 0 298 235" width="100%" style={{display:"block",maxHeight:225}}>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="1.8" opacity="0.8"/>
      <path d={`M ${cx},${cy} L ${x0},${y0} A ${r},${r} 0 0,1 ${x1},${y1} Z`} fill={`${a}28`}/>
      <line x1={cx} y1={cy} x2={x0} y2={y0} stroke={a} strokeWidth="2"/>
      <line x1={cx} y1={cy} x2={x1} y2={y1} stroke={a} strokeWidth="2"/>
      {/* Arco en verde para representar la longitud de arco l */}
      <path d={`M ${x0},${y0} A ${r},${r} 0 0,1 ${x1},${y1}`} fill="none" stroke={gr} strokeWidth="4.5" strokeLinecap="round" opacity="0.9"/>
      <path d={`M ${arc20},${arc2y0} A 20,20 0 0,1 ${arc21},${arc2y1}`} fill="none" stroke={a} strokeWidth="1.5" opacity="0.8"/>
      <text x={cx+26} y={cy-22} fill={a} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">θ</text>
      <circle cx={cx} cy={cy} r={3.5} fill={a}/>
      <text x={cx+5} y={cy-5} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">O</text>
      <text x={+x1+10} y={+y1-4} fill={gr} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">l</text>
      {/* Fórmulas con displaystyle separadas verticalmente */}
      <foreignObject x={188} y={42} width={108} height={128}>
        <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize: "13px" }}>
          <div style={{ marginBottom: 24 }}>
            <M>{"\\displaystyle l = \\frac{\\theta}{360^\\circ}\\cdot 2\\pi r"}</M>
          </div>
          <div>
            <M>{"\\displaystyle A = \\frac{\\theta}{360^\\circ}\\cdot \\pi r^2"}</M>
          </div>
        </div>
      </foreignObject>
    </svg>
  );
}
