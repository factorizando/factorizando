// Diagrama «evo-portada» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function EvoPortadaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted;
  // árbol filogenético sencillo
  return (
    <svg viewBox="0 0 220 140" width="100%" style={{ display: "block", maxHeight: 140, maxWidth: 260 }}>
      <line x1={110} y1={122} x2={110} y2={86} stroke={a} strokeWidth="2.6" />
      <path d="M 110 86 q -40 -6 -56 -34 M 110 86 q 40 -6 56 -34 M 110 86 q 0 -20 0 -40" fill="none" stroke={a} strokeWidth="2.2" />
      <path d="M 54 52 q -14 -6 -22 -24 M 54 52 q 12 -8 22 -22 M 166 52 q 14 -6 22 -24 M 166 52 q -12 -8 -22 -22 M 110 46 q -10 -8 -18 -22 M 110 46 q 10 -8 18 -22" fill="none" stroke={bl} strokeWidth="1.8" />
      {[[32,28],[76,30],[92,24],[128,24],[144,30],[188,28]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r={5.5} fill={a} opacity="0.5" stroke={a} strokeWidth="1.3" />)}
      <circle cx={110} cy={124} r={4} fill={bl} />
      <text x={110} y={138} textAnchor="middle" fill={mu} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif">un ancestro común, muchas ramas</text>
    </svg>
  );
}
