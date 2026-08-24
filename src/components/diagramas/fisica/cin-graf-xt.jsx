// Diagrama «cin-graf-xt» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { EjesXY } from "../comun.jsx";

export default function CinGrafXtSVG({ tema }) {
  const a = tema.acento, mu = tema.muted;
  const ox = 34, oy = 118;
  return (
    <svg viewBox="0 0 230 150" width="100%" style={{ display: "block", maxHeight: 160 }}>
      <EjesXY ox={ox} oy={oy} xEnd={206} yTop={20} tema={tema} labelX="t" labelY="x" />
      <line x1={ox} y1={oy} x2={196} y2={34} stroke={a} strokeWidth="2.5" />
      {/* triángulo de pendiente */}
      <line x1={108} y1={80} x2={160} y2={80} stroke={mu} strokeWidth="1.2" strokeDasharray="3 3" />
      <line x1={160} y1={80} x2={160} y2={52} stroke={mu} strokeWidth="1.2" strokeDasharray="3 3" />
      <text x={134} y={93} fill={mu} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">Δt</text>
      <text x={166} y={69} fill={mu} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif">Δx</text>
      <text x={70} y={40} fill={a} fontSize="11" fontFamily="'Figtree', system-ui, sans-serif">pendiente = v</text>
    </svg>
  );
}
