// Diagrama «cce4-tang» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function Cce4TangSVG({ tema }) {
  const cx=190, cy=90, r=46;
  const px=28, py=90;
  const bl=tema.azul, a=tema.acento, gr=tema.canal(1);
  const dist=Math.sqrt((cx-px)**2+(cy-py)**2);
  const tanLen=Math.sqrt(dist*dist-r*r);
  const ang=Math.asin(r/dist);
  const TAx=+(px+tanLen*Math.cos(-ang)).toFixed(1);
  const TAy=+(py+tanLen*Math.sin(-ang)).toFixed(1);
  const TBx=+(px+tanLen*Math.cos(ang)).toFixed(1);
  const TBy=+(py+tanLen*Math.sin(ang)).toFixed(1);
  return (
    <svg viewBox="0 0 262 180" width="100%" style={{display:"block",maxHeight:175}}>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="2"/>
      <line x1={px} y1={py} x2={TAx} y2={TAy} stroke={gr} strokeWidth="2" opacity="0.85"/>
      <line x1={px} y1={py} x2={TBx} y2={TBy} stroke={gr} strokeWidth="2" opacity="0.85"/>
      <line x1={cx} y1={cy} x2={TAx} y2={TAy} stroke={bl} strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6"/>
      <line x1={cx} y1={cy} x2={TBx} y2={TBy} stroke={bl} strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6"/>
      <line x1={px} y1={py} x2={cx} y2={cy} stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" strokeDasharray="3,4"/>
      <circle cx={px} cy={py} r={4} fill={a}/>
      <text x={px-16} y={py+5} fill={a} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">P</text>
      <circle cx={cx} cy={cy} r={3.5} fill={bl}/>
      <text x={cx+5} y={cy-4} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">O</text>
      <circle cx={+TAx} cy={+TAy} r={3} fill={gr} opacity="0.85"/>
      <circle cx={+TBx} cy={+TBy} r={3} fill={gr} opacity="0.85"/>
      <text x={+TAx+4} y={+TAy-5} fill={gr} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">A</text>
      <text x={(cx+px)/2+2} y={py-8} fill="rgba(255,255,255,0.48)" fontSize="11" fontFamily="'Figtree', system-ui, sans-serif">PO = 13</text>
      <text x={(cx+px)/2+2} y={py+18} fill={bl} fontSize="11" fontFamily="'Figtree', system-ui, sans-serif">r = 5</text>
    </svg>
  );
}
