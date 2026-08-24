// Diagrama «as5-trap-semi» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function As5TrapSemiSVG({ tema }) {
  const sc=17;
  const B=10*sc, b=4*sc, h=8*sc;
  const cx=131, cyBot=164;
  const bx_l=cx-B/2, bx_r=cx+B/2;
  const tx_l=cx-b/2, tx_r=cx+b/2;
  const cyTop=cyBot-h;
  const rSemi=B/2;
  const a=tema.acento, bl=tema.azul;
  return (
    <svg viewBox="0 0 230 262" width="100%" style={{display:"block",maxHeight:258}}>
      <polygon points={`${bx_l},${cyBot} ${bx_r},${cyBot} ${tx_r},${cyTop} ${tx_l},${cyTop}`} fill={tema.azulSuave} stroke={bl} strokeWidth="2"/>
      <path d={`M ${bx_l},${cyBot} A ${rSemi},${rSemi} 0 0,0 ${bx_r},${cyBot}`} fill={`${a}30`} stroke={a} strokeWidth="2"/>
      <text x={cx} y={cyTop-10} fill={bl} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">b = 4 cm</text>
      <text x={cx} y={cyBot+22} fill={a} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">B = 10 cm</text>
      <line x1={bx_l-14} y1={cyBot} x2={bx_l-14} y2={cyTop} stroke="rgba(255,255,255,0.32)" strokeWidth="1" strokeDasharray="3,3"/>
      <text x={bx_l-18} y={(cyBot+cyTop)/2+4} fill={bl} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">h=8</text>
      <text x={cx} y={cyBot+54} fill={a} fontSize="13" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle" opacity="0.85">A = πr²/2</text>
    </svg>
  );
}
