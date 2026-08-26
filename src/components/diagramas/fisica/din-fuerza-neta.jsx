// Diagrama «din-fuerza-neta» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { Bloque, Vector } from "../comun.jsx";

export default function DinFuerzaNetaSVG({ tema }) {
  const gr = tema.canal(1), rj = tema.canal(2), mu = tema.muted;
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 128 }}>
      <Bloque x={95} y={42} w={60} h={44} tema={tema} label="m" />
      <Vector x1={155} y1={64} x2={216} y2={64} color={gr} label="F₁" lx={178} ly={56} />
      <Vector x1={95} y1={64} x2={48} y2={64} color={rj} label="F₂" lx={50} ly={56} />
      <text x={125} y={108} fill={mu} fontSize="11" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">fuerza neta = suma vectorial</text>
    </svg>
  );
}
