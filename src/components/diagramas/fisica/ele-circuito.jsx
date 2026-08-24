// Diagrama «ele-circuito» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { Vector } from "../comun.jsx";

export default function EleCircuitoSVG({ tema }) {
  const a = tema.acento, mu = tema.muted, T = tema.texto;
  const zig = "100,28 106,20 112,36 118,20 124,36 130,20 136,36 142,20 150,28";
  return (
    <svg viewBox="0 0 250 122" width="100%" style={{ display: "block", maxHeight: 132 }}>
      {/* alambres */}
      <line x1={40} y1={28} x2={100} y2={28} stroke={mu} strokeWidth="1.8" />
      <line x1={150} y1={28} x2={210} y2={28} stroke={mu} strokeWidth="1.8" />
      <line x1={210} y1={28} x2={210} y2={96} stroke={mu} strokeWidth="1.8" />
      <line x1={40} y1={28} x2={40} y2={96} stroke={mu} strokeWidth="1.8" />
      <line x1={40} y1={96} x2={110} y2={96} stroke={mu} strokeWidth="1.8" />
      <line x1={140} y1={96} x2={210} y2={96} stroke={mu} strokeWidth="1.8" />
      {/* resistencia */}
      <polyline points={zig} fill="none" stroke={a} strokeWidth="2.2" />
      <text x={125} y={14} fill={a} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">R</text>
      {/* batería */}
      <line x1={118} y1={86} x2={118} y2={106} stroke={T} strokeWidth="2.2" />
      <line x1={132} y1={91} x2={132} y2={101} stroke={T} strokeWidth="3.4" />
      <text x={125} y={119} fill={T} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">V</text>
      {/* corriente */}
      <Vector x1={210} y1={50} x2={210} y2={74} color={a} label="I" lx={216} ly={66} />
    </svg>
  );
}
