// Diagrama «areas-estrategia» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function AreasEstrategiaSVG({ tema }) {
  const bl=tema.azul, a=tema.acento;
  return (
    <svg viewBox="0 0 320 138" width="100%" style={{display:"block",maxHeight:130}}>
      <circle cx={55} cy={68} r={50} fill={`${a}28`} stroke={a} strokeWidth="2"/>
      <text x={120} y={78} fill="rgba(255,255,255,0.55)" fontSize="30" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="300">−</text>
      <circle cx={175} cy={68} r={30} fill={tema.azulSuave} stroke={bl} strokeWidth="2"/>
      <text x={220} y={76} fill="rgba(255,255,255,0.55)" fontSize="26" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="300">=</text>
      <path fillRule="evenodd" fill={`${a}28`} stroke={a} strokeWidth="1.5"
        d="M 212,68 A 42,42 0 1,0 296,68 A 42,42 0 1,0 212,68 M 228,68 A 26,26 0 1,1 280,68 A 26,26 0 1,1 228,68"/>
      <text x={55} y={133} fill={a} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">figura grande</text>
      <text x={175} y={111} fill={bl} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">interior</text>
      <text x={254} y={123} fill={a} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">sombreado</text>
    </svg>
  );
}
