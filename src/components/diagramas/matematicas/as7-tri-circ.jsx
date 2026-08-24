// Diagrama «as7-tri-circ» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function As7TriCircSVG({ tema }) {
  const sc=14;
  const a6=6*sc, a8=8*sc;
  const C=[136, 182];
  const B=[C[0], C[1]-a8];
  const Av=[C[0]-a6, C[1]];
  const hCx=(B[0]+Av[0])/2, hCy=(B[1]+Av[1])/2;
  const hypLen=Math.sqrt((B[0]-Av[0])**2+(B[1]-Av[1])**2);
  const rSemi=hypLen/2;
  const a=tema.acento, bl=tema.azul;
  return (
    <svg viewBox="0 0 192 212" width="100%" style={{display:"block",maxHeight:205}}>
      <path d={`M ${Av[0].toFixed(1)},${Av[1].toFixed(1)} A ${rSemi.toFixed(1)},${rSemi.toFixed(1)} 0 0,1 ${B[0].toFixed(1)},${B[1].toFixed(1)}`}
        fill={`${a}30`} stroke={a} strokeWidth="2"/>
      <polygon points={`${C[0]},${C[1]} ${B[0].toFixed(1)},${B[1].toFixed(1)} ${Av[0].toFixed(1)},${Av[1].toFixed(1)}`}
        fill={tema.azulSuave} stroke={bl} strokeWidth="2"/>
      <path d={`M ${C[0]-14},${C[1]} L ${C[0]-14},${C[1]-14} L ${C[0]},${C[1]-14}`} fill="none" stroke="rgba(255,255,255,0.42)" strokeWidth="1.5"/>
      <text x={C[0]+10} y={(C[1]+B[1])/2} fill={bl} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">6 cm</text>
      <text x={(C[0]+Av[0])/2} y={C[1]+18} fill={bl} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">8 cm</text>
      <text x={hCx+18} y={hCy+14} fill={a} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">c=10</text>
      <text x={hCx-26} y={hCy-18} fill={a} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">r=5</text>
    </svg>
  );
}
