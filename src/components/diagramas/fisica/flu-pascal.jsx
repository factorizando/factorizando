// Diagrama «flu-pascal» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

import { Vector } from "../comun.jsx";

export default function FluPascalSVG({ tema }) {
  const a = tema.acento, mu = tema.muted, az = tema.azul, T = tema.texto;
  return (
    <svg viewBox="0 0 250 124" width="100%" style={{ display: "block", maxHeight: 134 }}>
      {/* líquido en U */}
      <path d="M 42 56 L 42 100 L 208 100 L 208 56 L 188 56 L 188 84 L 62 84 L 62 56 Z" fill={`${az}33`} stroke={az} strokeWidth="1.4" />
      {/* tubos */}
      <line x1={42} y1={48} x2={42} y2={100} stroke={mu} strokeWidth="1.6" />
      <line x1={62} y1={48} x2={62} y2={84} stroke={mu} strokeWidth="1.6" />
      <line x1={188} y1={48} x2={188} y2={84} stroke={mu} strokeWidth="1.6" />
      <line x1={208} y1={48} x2={208} y2={100} stroke={mu} strokeWidth="1.6" />
      {/* pistón pequeño */}
      <rect x={40} y={48} width={24} height={7} fill={tema.acentoMed} stroke={a} strokeWidth="1.4" />
      <Vector x1={52} y1={30} x2={52} y2={46} color={a} label="" sw={2} />
      <text x={30} y={26} fill={T} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic">F₁,A₁</text>
      {/* pistón grande */}
      <rect x={186} y={48} width={24} height={7} fill={tema.acentoMed} stroke={a} strokeWidth="1.4" />
      <Vector x1={198} y1={46} x2={198} y2={26} color={a} label="" sw={2.6} />
      <text x={182} y={20} fill={T} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic">F₂,A₂</text>
    </svg>
  );
}
