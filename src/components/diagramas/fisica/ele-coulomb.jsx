// Diagrama «ele-coulomb» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { Vector } from "../comun.jsx";

export default function EleCoulombSVG({ tema }) {
  const rj = tema.rojo, mu = tema.muted, T = tema.texto;
  return (
    <svg viewBox="0 0 250 110" width="100%" style={{ display: "block", maxHeight: 120 }}>
      <line x1={76} y1={55} x2={174} y2={55} stroke={mu} strokeWidth="1" strokeDasharray="4 3" />
      <text x={125} y={48} fill={mu} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">r</text>
      <circle cx={60} cy={55} r={16} fill={`${rj}33`} stroke={rj} strokeWidth="1.8" />
      <text x={60} y={61} fill={rj} fontSize="18" fontFamily="Georgia,serif" textAnchor="middle">+</text>
      <circle cx={190} cy={55} r={16} fill={`${rj}33`} stroke={rj} strokeWidth="1.8" />
      <text x={190} y={61} fill={rj} fontSize="18" fontFamily="Georgia,serif" textAnchor="middle">+</text>
      <Vector x1={42} y1={55} x2={16} y2={55} color={T} label="F" lx={20} ly={48} />
      <Vector x1={208} y1={55} x2={234} y2={55} color={T} label="F" lx={222} ly={48} />
    </svg>
  );
}
