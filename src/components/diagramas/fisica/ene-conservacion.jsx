// Diagrama «ene-conservacion» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function EneConservacionSVG({ tema }) {
  const a = tema.acento, mu = tema.muted;
  return (
    <svg viewBox="0 0 250 130" width="100%" style={{ display: "block", maxHeight: 140 }}>
      <line x1={20} y1={114} x2={230} y2={114} stroke={mu} strokeWidth="1.5" />
      <path d="M 44 36 C 92 42 120 110 208 112" stroke={a} strokeWidth="2.5" fill="none" />
      <circle cx={46} cy={32} r={7} fill={tema.acentoMed} stroke={a} strokeWidth="1.6" />
      <circle cx={206} cy={106} r={7} fill={a} />
      <text x={58} y={30} fill={mu} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif">Ep máx (v = 0)</text>
      <text x={150} y={100} fill={mu} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif">Ec máx</text>
    </svg>
  );
}
