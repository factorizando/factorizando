// Diagrama «cin-ej-vt-area» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { EjesXY } from "../comun.jsx";

export default function CinEjVtAreaSVG({ tema }) {
  const a = tema.acento, mu = tema.muted;
  const ox = 34, oy = 118;
  const px = 167, py = 43; // (4 s, 10 m/s)
  return (
    <svg viewBox="0 0 230 150" width="100%" style={{ display: "block", maxHeight: 160 }}>
      <polygon points={`${ox},${oy} ${px},${py} ${px},${oy}`} fill={tema.acentoMed} stroke="none" />
      <EjesXY ox={ox} oy={oy} xEnd={206} yTop={20} tema={tema} labelX="t (s)" labelY="v (m/s)" />
      <line x1={ox} y1={oy} x2={px} y2={py} stroke={a} strokeWidth="2.5" />
      <line x1={px} y1={oy} x2={px} y2={py} stroke={mu} strokeWidth="1" strokeDasharray="3 3" />
      <text x={108} y={104} fill={tema.texto} fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle">área = Δx</text>
      <text x={px} y={oy + 14} fill={mu} fontSize="10" fontFamily="'DM Sans',sans-serif" textAnchor="middle">4</text>
      <text x={ox - 9} y={py + 4} fill={mu} fontSize="10" fontFamily="'DM Sans',sans-serif" textAnchor="end">10</text>
    </svg>
  );
}
