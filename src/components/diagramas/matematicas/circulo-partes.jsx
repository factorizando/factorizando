// Diagrama «circulo-partes» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function CirculoPartesSVG({ tema }) {
  const cx=148, cy=100, r=74;
  const bl=tema.azul, a=tema.acento, gr=tema.canal(1);
  const D=(d)=>d*Math.PI/180;
  const P=(ang)=>[+(cx+r*Math.cos(D(ang))).toFixed(1), +(cy+r*Math.sin(D(ang))).toFixed(1)];
  const [ax,ay]=P(130), [bx,by]=P(50);
  const [arc0x,arc0y]=P(-90), [arc1x,arc1y]=P(-30);
  return (
    <svg viewBox="0 0 310 200" width="100%" style={{display:"block",maxHeight:190}}>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="2"/>
      <line x1={cx-r} y1={cy} x2={cx+r} y2={cy} stroke={gr} strokeWidth="1.6" strokeDasharray="5,3" opacity="0.8"/>
      <text x={cx} y={cy+14} fill={gr} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">d = 2r</text>
      <line x1={cx} y1={cy} x2={cx} y2={cy-r} stroke={a} strokeWidth="2.2"/>
      <text x={cx+5} y={cy-r/2} fill={a} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">r</text>
      <line x1={ax} y1={ay} x2={bx} y2={by} stroke={bl} strokeWidth="2" opacity="0.85"/>
      <text x={(+ax + +bx)/2} y={(+ay + +by)/2 - 9} fill={bl} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle" opacity="0.85">cuerda</text>
      <path d={`M ${arc0x},${arc0y} A ${r},${r} 0 0,1 ${arc1x},${arc1y}`} fill="none" stroke={gr} strokeWidth="4.5" strokeLinecap="round" opacity="0.75"/>
      <text x={+arc1x+4} y={+arc1y-24} fill={gr} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif">arco</text>
      <line x1={cx+r} y1={cy-52} x2={cx+r} y2={cy+52} stroke={a} strokeWidth="1.5" strokeDasharray="4,3" opacity="0.7"/>
      <text x={cx+r+6} y={cy-38} fill={a} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif" opacity="0.85">tangente</text>
      <path d={`M ${cx+r-8},${cy} L ${cx+r-8},${cy-8} L ${cx+r},${cy-8}`} fill="none" stroke="rgba(255,255,255,0.40)" strokeWidth="1.2"/>
      <circle cx={cx+r} cy={cy} r={3} fill={a} opacity="0.8"/>
      <circle cx={cx} cy={cy} r={3.5} fill={a}/>
      <text x={cx+5} y={cy-5} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">O</text>
    </svg>
  );
}
