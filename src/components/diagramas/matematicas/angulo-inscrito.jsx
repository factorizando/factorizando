// Diagrama «angulo-inscrito» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function AnguloInscritoSVG({ tema }) {
  const cx=140, cy=120, r=90;
  const bl=tema.azul, a=tema.acento, gr=tema.canal(1);
  const D=(d)=>d*Math.PI/180;
  const P=(deg,R=r)=>[+(cx+R*Math.cos(D(deg))).toFixed(1), +(cy+R*Math.sin(D(deg))).toFixed(1)];
  const [Ax,Ay]=P(150), [Cx,Cy]=P(30), [Bx,By]=P(-90);
  // marca del ángulo central (arco inferior 30°→150° pasando por 90°)
  const [oc0x,oc0y]=P(30,24), [oc1x,oc1y]=P(150,24);
  // marca del ángulo inscrito en B (entre las cuerdas B→C y B→A: 60°→120°)
  const ib0x=+(Bx+28*Math.cos(D(60))).toFixed(1),  ib0y=+(By+28*Math.sin(D(60))).toFixed(1);
  const ib1x=+(Bx+28*Math.cos(D(120))).toFixed(1), ib1y=+(By+28*Math.sin(D(120))).toFixed(1);
  return (
    <svg viewBox="0 0 300 232" width="100%" style={{display:"block",maxHeight:222}}>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="1.8" opacity="0.8"/>
      {/* cuerda AC (mismo arco) */}
      <line x1={Ax} y1={Ay} x2={Cx} y2={Cy} stroke={gr} strokeWidth="2" opacity="0.6"/>
      {/* radios: ángulo central */}
      <line x1={cx} y1={cy} x2={Ax} y2={Ay} stroke={a} strokeWidth="2"/>
      <line x1={cx} y1={cy} x2={Cx} y2={Cy} stroke={a} strokeWidth="2"/>
      {/* cuerdas: ángulo inscrito */}
      <line x1={Bx} y1={By} x2={Ax} y2={Ay} stroke={bl} strokeWidth="2"/>
      <line x1={Bx} y1={By} x2={Cx} y2={Cy} stroke={bl} strokeWidth="2"/>
      <path d={`M ${oc0x},${oc0y} A 24,24 0 0,1 ${oc1x},${oc1y}`} fill="none" stroke={a} strokeWidth="1.8"/>
      <path d={`M ${ib0x},${ib0y} A 28,28 0 0,1 ${ib1x},${ib1y}`} fill="none" stroke={bl} strokeWidth="1.8"/>
      <text x={cx} y={cy+44} fill={a} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">2θ</text>
      <text x={cx} y={By+40} fill={bl} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">θ</text>
      <circle cx={cx} cy={cy} r={3} fill={a}/>
      <text x={cx+6} y={cy-5} fill={a} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic">O</text>
      <circle cx={Bx} cy={By} r={3} fill={bl}/>
      <text x={Bx} y={By-8} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">B</text>
      <circle cx={Ax} cy={Ay} r={3} fill={gr}/>
      <text x={Ax-12} y={Ay+6} fill={gr} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">A</text>
      <circle cx={Cx} cy={Cy} r={3} fill={gr}/>
      <text x={Cx+6} y={Cy+6} fill={gr} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">C</text>
    </svg>
  );
}
