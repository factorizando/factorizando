// Diagrama «ene-portada» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function EnePortadaSVG({ tema }) {
  const a = tema.acento, mu = tema.muted;
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 132, maxWidth: 320 }}>
      <line x1={20} y1={102} x2={230} y2={102} stroke={mu} strokeWidth="1.5" />
      <path d="M 34 30 C 92 32 108 96 222 102" stroke={a} strokeWidth="2.5" fill="none" />
      <circle cx={40} cy={26} r={7} fill={a} />
      <text x={52} y={26} fill={mu} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif">Ep</text>
      <text x={198} y={94} fill={mu} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif">Ec</text>
    </svg>
  );
}
