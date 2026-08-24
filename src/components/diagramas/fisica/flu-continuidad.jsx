// Diagrama «flu-continuidad» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

import { Vector } from "../comun.jsx";

export default function FluContinuidadSVG({ tema }) {
  const a = tema.acento, mu = tema.muted, az = tema.azul, T = tema.texto;
  return (
    <svg viewBox="0 0 250 110" width="100%" style={{ display: "block", maxHeight: 120 }}>
      <path d="M 30 30 L 120 30 L 220 46 L 220 64 L 120 80 L 30 80 Z" fill={`${az}22`} stroke={mu} strokeWidth="1.8" />
      <Vector x1={56} y1={56} x2={86} y2={56} color={a} label="" sw={2.2} />
      <text x={66} y={70} fill={T} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic">v₁</text>
      <Vector x1={150} y1={56} x2={200} y2={56} color={a} label="" sw={2.2} />
      <text x={170} y={70} fill={T} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic">v₂</text>
      <text x={36} y={24} fill={mu} fontSize="9.5" fontFamily="Georgia,serif" fontStyle="italic">A₁</text>
      <text x={206} y={40} fill={mu} fontSize="9.5" fontFamily="Georgia,serif" fontStyle="italic">A₂</text>
    </svg>
  );
}
