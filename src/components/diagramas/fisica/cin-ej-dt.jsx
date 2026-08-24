// Diagrama «cin-ej-dt» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { EjesXY } from "../comun.jsx";

export default function CinEjDtSVG({ tema }) {
  const a = tema.acento, mu = tema.muted;
  const ox = 34, oy = 118;
  const px = 172, py = 46; // (5 s, 8 m)
  return (
    <svg viewBox="0 0 230 150" width="100%" style={{ display: "block", maxHeight: 160 }}>
      <EjesXY ox={ox} oy={oy} xEnd={206} yTop={20} tema={tema} labelX="t (s)" labelY="d (m)" />
      <line x1={px} y1={oy} x2={px} y2={py} stroke={mu} strokeWidth="1" strokeDasharray="3 3" />
      <line x1={ox} y1={py} x2={px} y2={py} stroke={mu} strokeWidth="1" strokeDasharray="3 3" />
      <line x1={ox} y1={oy} x2={px} y2={py} stroke={a} strokeWidth="2.5" />
      <circle cx={px} cy={py} r={4} fill={a} />
      <text x={px} y={oy + 14} fill={mu} fontSize="10" fontFamily="'DM Sans',sans-serif" textAnchor="middle">5</text>
      <text x={ox - 9} y={py + 4} fill={mu} fontSize="10" fontFamily="'DM Sans',sans-serif" textAnchor="end">8</text>
    </svg>
  );
}
