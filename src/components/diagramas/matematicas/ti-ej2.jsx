// Diagrama «ti-ej2» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function TiEj2SVG({ tema }) {
  const cx=105, cy=92, r=68;
  const bl=tema.azul, a=tema.acento, gr=tema.canal(1);
  const D=(d)=>d*Math.PI/180;
  const P=(deg,R=r)=>[+(cx+R*Math.cos(D(deg))).toFixed(1), +(cy+R*Math.sin(D(deg))).toFixed(1)];
  const [Ax,Ay]=P(150), [Cx,Cy]=P(30), [Bx,By]=P(-90);
  return (
    <svg viewBox="0 0 220 168" width="100%" style={{display:"block",maxHeight:160}}>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="1.8" opacity="0.8"/>
      <line x1={cx} y1={cy} x2={Ax} y2={Ay} stroke={a} strokeWidth="2"/>
      <line x1={cx} y1={cy} x2={Cx} y2={Cy} stroke={a} strokeWidth="2"/>
      <line x1={Bx} y1={By} x2={Ax} y2={Ay} stroke={bl} strokeWidth="2"/>
      <line x1={Bx} y1={By} x2={Cx} y2={Cy} stroke={bl} strokeWidth="2"/>
      <line x1={Ax} y1={Ay} x2={Cx} y2={Cy} stroke={gr} strokeWidth="1.8" opacity="0.6"/>
      <text x={cx} y={cy+38} fill={a} fontSize="13" fontFamily="Georgia,serif" textAnchor="middle">80°</text>
      <text x={cx} y={By+36} fill={bl} fontSize="13" fontFamily="Georgia,serif" textAnchor="middle">?</text>
      <circle cx={cx} cy={cy} r={2.8} fill={a}/>
      <circle cx={Bx} cy={By} r={2.8} fill={bl}/>
    </svg>
  );
}
