// Diagrama «cin-graf-vt» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { EjesXY } from "../comun.jsx";

export default function CinGrafVtSVG({ tema }) {
  const a = tema.acento, mu = tema.muted;
  const ox = 34, oy = 118, v0y = 92;
  return (
    <svg viewBox="0 0 230 150" width="100%" style={{ display: "block", maxHeight: 160 }}>
      <polygon points={`${ox},${oy} ${ox},${v0y} 196,34 196,${oy}`} fill={tema.acentoMed} stroke="none" />
      <EjesXY ox={ox} oy={oy} xEnd={206} yTop={20} tema={tema} labelX="t" labelY="v" />
      <line x1={ox} y1={v0y} x2={196} y2={34} stroke={a} strokeWidth="2.5" />
      <text x={ox - 4} y={v0y - 5} fill={mu} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">v₀</text>
      <text x={112} y={92} fill={tema.texto} fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle">área = Δx</text>
      <text x={150} y={52} fill={a} fontSize="10.5" fontFamily="'DM Sans',sans-serif">pend. = a</text>
    </svg>
  );
}
