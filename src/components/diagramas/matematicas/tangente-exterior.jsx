// Diagrama «tangente-exterior» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function TangenteExteriorSVG({ tema }) {
  const cx=200, cy=90, r=54;
  const px=22, py=90;
  const bl=tema.azul, a=tema.acento, gr=tema.canal(1);
  const dist=Math.sqrt((cx-px)**2+(cy-py)**2);
  const tanLen=Math.sqrt(dist*dist-r*r);
  const ang=Math.asin(r/dist);
  const TAx=+(px+tanLen*Math.cos(-ang)).toFixed(1);
  const TAy=+(py+tanLen*Math.sin(-ang)).toFixed(1);
  const TBx=+(px+tanLen*Math.cos(ang)).toFixed(1);
  const TBy=+(py+tanLen*Math.sin(ang)).toFixed(1);
  return (
    <svg viewBox="0 0 300 180" width="100%" style={{display:"block",maxHeight:175}}>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="2"/>
      <line x1={px} y1={py} x2={TAx} y2={TAy} stroke={gr} strokeWidth="2.2" opacity="0.9"/>
      <line x1={px} y1={py} x2={TBx} y2={TBy} stroke={gr} strokeWidth="2.2" opacity="0.9"/>
      <line x1={cx} y1={cy} x2={TAx} y2={TAy} stroke={bl} strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6"/>
      <line x1={cx} y1={cy} x2={TBx} y2={TBy} stroke={bl} strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6"/>
      <line x1={px} y1={py} x2={cx} y2={cy} stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" strokeDasharray="3,4"/>
      <text x={(px + +TAx)/2 - 14} y={(py + +TAy)/2 - 6} fill={gr} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">PA</text>
      <text x={(px + +TBx)/2 - 14} y={(py + +TBy)/2 + 16} fill={gr} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">PB</text>
      <text x={80} y={94} fill="rgba(255,255,255,0.45)" fontSize="18" fontFamily="Georgia,serif">=</text>
      <circle cx={px} cy={py} r={4} fill={a}/>
      <text x={px-16} y={py+5} fill={a} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">P</text>
      <circle cx={cx} cy={cy} r={3.5} fill={bl}/>
      <text x={cx+5} y={cy-4} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">O</text>
      <circle cx={+TAx} cy={+TAy} r={3.5} fill={gr} opacity="0.9"/>
      <circle cx={+TBx} cy={+TBy} r={3.5} fill={gr} opacity="0.9"/>
      <text x={+TAx+5} y={+TAy-5} fill={gr} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">A</text>
      <text x={+TBx+5} y={+TBy+14} fill={gr} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">B</text>
    </svg>
  );
}
