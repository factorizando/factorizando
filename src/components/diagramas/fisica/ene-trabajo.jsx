// Diagrama «ene-trabajo» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { Bloque, Vector } from "../comun.jsx";

export default function EneTrabajoSVG({ tema }) {
  const gr = tema.canal(1), mu = tema.muted;
  return (
    <svg viewBox="0 0 250 110" width="100%" style={{ display: "block", maxHeight: 120 }}>
      <Bloque x={50} y={40} w={50} h={36} tema={tema} label="m" />
      <Vector x1={100} y1={58} x2={176} y2={58} color={gr} label="F" lx={150} ly={52} />
      <line x1={50} y1={90} x2={176} y2={90} stroke={mu} strokeWidth="1.2" />
      <line x1={50} y1={86} x2={50} y2={94} stroke={mu} strokeWidth="1" />
      <line x1={176} y1={86} x2={176} y2={94} stroke={mu} strokeWidth="1" />
      <text x={113} y={103} fill={mu} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">d</text>
    </svg>
  );
}
