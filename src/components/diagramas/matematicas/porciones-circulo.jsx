// Diagrama «porciones-circulo» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function PorcionesCirculoSVG({ tema }) {
  const bl=tema.azul, a=tema.acento;
  const r=30, cy=42;
  const D=(d)=>d*Math.PI/180;
  const porciones=[
    { f:1/2,  label:"1/2"  },
    { f:1/4,  label:"1/4"  },
    { f:3/4,  label:"3/4"  },
    { f:1/8,  label:"1/8"  },
    { f:1/12, label:"1/12" }
  ];
  const cxs=[42,112,182,252,322];
  const wedge=(cx,f)=>{
    const a0=-90, a1=-90+f*360;
    const x0=+(cx+r*Math.cos(D(a0))).toFixed(1), y0=+(cy+r*Math.sin(D(a0))).toFixed(1);
    const x1=+(cx+r*Math.cos(D(a1))).toFixed(1), y1=+(cy+r*Math.sin(D(a1))).toFixed(1);
    const large=f>0.5?1:0;
    return `M ${cx},${cy} L ${x0},${y0} A ${r},${r} 0 ${large},1 ${x1},${y1} Z`;
  };
  return (
    <svg viewBox="0 0 364 100" width="100%" style={{display:"block",maxHeight:118}}>
      {porciones.map((p,i)=>(
        <g key={i}>
          <circle cx={cxs[i]} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="1.6"/>
          <path d={wedge(cxs[i],p.f)} fill={`${a}40`} stroke={a} strokeWidth="1.8"/>
          <circle cx={cxs[i]} cy={cy} r={2.5} fill={a}/>
          <text x={cxs[i]} y={cy+r+18} fill={a} fontSize="14" fontFamily="Georgia,serif" textAnchor="middle">{p.label}</text>
        </g>
      ))}
    </svg>
  );
}
