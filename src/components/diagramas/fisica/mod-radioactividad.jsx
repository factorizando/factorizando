// Diagrama «mod-radioactividad» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { Vector } from "../comun.jsx";

export default function ModRadioactividadSVG({ tema }) {
  const rj = tema.rojo, gr = tema.verde, bl = tema.azul, T = tema.texto;
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 130 }}>
      <circle cx={50} cy={60} r={16} fill={tema.acentoMed} stroke={tema.acento} strokeWidth="1.8" />
      <text x={50} y={88} fill={tema.muted} fontSize="9" fontFamily="'DM Sans',sans-serif" textAnchor="middle">núcleo</text>
      <Vector x1={66} y1={50} x2={140} y2={24} color={rj} label="α" lx={146} ly={26} />
      <Vector x1={68} y1={60} x2={152} y2={60} color={gr} label="β" lx={158} ly={64} />
      <Vector x1={66} y1={70} x2={140} y2={96} color={bl} label="γ" lx={146} ly={100} />
    </svg>
  );
}
