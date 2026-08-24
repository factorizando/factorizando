// Diagrama «ter-gas» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

import { Vector } from "../comun.jsx";

export default function TerGasSVG({ tema }) {
  const a = tema.acento, mu = tema.muted, rj = tema.rojo, az = tema.azul;
  const dots = [[95, 56], [116, 72], [131, 50], [110, 90], [136, 84], [100, 72], [125, 64], [141, 96]];
  return (
    <svg viewBox="0 0 250 130" width="100%" style={{ display: "block", maxHeight: 140 }}>
      <rect x={82} y={34} width={70} height={70} fill="none" stroke={mu} strokeWidth="1.8" />
      {dots.map((d, i) => <circle key={i} cx={d[0]} cy={d[1]} r={3} fill={a} />)}
      <rect x={80} y={26} width={74} height={8} rx={2} fill={tema.acentoMed} stroke={a} strokeWidth="1.5" />
      <Vector x1={117} y1={12} x2={117} y2={24} color={az} label="P" lx={122} ly={20} />
      <path d="M 108 104 Q 113 118 117 106 Q 121 118 126 104 Q 124 112 117 110 Q 110 112 108 104" fill={rj} />
      <text x={138} y={118} fill={rj} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic">T</text>
      <text x={158} y={72} fill={mu} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic">V</text>
    </svg>
  );
}
