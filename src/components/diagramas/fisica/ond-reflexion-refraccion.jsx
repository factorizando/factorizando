// Diagrama «ond-reflexion-refraccion» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { Vector } from "../comun.jsx";

export default function OndReflexRefracSVG({ tema }) {
  const a = tema.acento, gr = tema.verde, rj = tema.rojo, mu = tema.muted;
  const ix = 125, iy = 72;
  return (
    <svg viewBox="0 0 250 132" width="100%" style={{ display: "block", maxHeight: 142 }}>
      <rect x={20} y={iy} width={210} height={54} fill={tema.azulSuave} />
      <line x1={20} y1={iy} x2={230} y2={iy} stroke={mu} strokeWidth="1.8" />
      <line x1={ix} y1={18} x2={ix} y2={122} stroke={mu} strokeWidth="1" strokeDasharray="4 3" />
      <Vector x1={72} y1={22} x2={ix} y2={iy} color={a} label="" sw={2.2} />
      <text x={58} y={20} fill={a} fontSize="9.5" fontFamily="'Figtree', system-ui, sans-serif">incidente</text>
      <Vector x1={ix} y1={iy} x2={178} y2={22} color={gr} label="" sw={2.2} />
      <text x={182} y={24} fill={gr} fontSize="9.5" fontFamily="'Figtree', system-ui, sans-serif">reflejado</text>
      <Vector x1={ix} y1={iy} x2={150} y2={118} color={rj} label="" sw={2.2} />
      <text x={154} y={116} fill={rj} fontSize="9.5" fontFamily="'Figtree', system-ui, sans-serif">refractado</text>
      <text x={26} y={iy - 6} fill={mu} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif">medio 1</text>
      <text x={26} y={iy + 14} fill={mu} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif">medio 2</text>
    </svg>
  );
}
