// Diagrama «ele-magnetismo» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function EleMagnetismoSVG({ tema }) {
  const rj = tema.canal(2), az = tema.azul, mu = tema.muted, T = tema.texto;
  const mx = 78, mw = 94, my = 52, mh = 22;
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 130 }}>
      {/* campo */}
      {[0, 1].map((i) => {
        const d = 14 + i * 14;
        return (
          <g key={i}>
            <path d={`M ${mx} ${my + mh / 2} C ${mx - 6} ${my - d} ${mx + mw + 6} ${my - d} ${mx + mw} ${my + mh / 2}`} fill="none" stroke={mu} strokeWidth="1.2" opacity="0.6" />
            <path d={`M ${mx} ${my + mh / 2} C ${mx - 6} ${my + mh + d} ${mx + mw + 6} ${my + mh + d} ${mx + mw} ${my + mh / 2}`} fill="none" stroke={mu} strokeWidth="1.2" opacity="0.6" />
          </g>
        );
      })}
      {/* imán */}
      <rect x={mx} y={my} width={mw / 2} height={mh} fill={`${rj}44`} stroke={rj} strokeWidth="1.6" />
      <rect x={mx + mw / 2} y={my} width={mw / 2} height={mh} fill={`${az}44`} stroke={az} strokeWidth="1.6" />
      <text x={mx + mw / 4} y={my + 16} fill={rj} fontSize="14" fontFamily="Georgia,serif" fontWeight="700" textAnchor="middle">N</text>
      <text x={mx + 3 * mw / 4} y={my + 16} fill={az} fontSize="14" fontFamily="Georgia,serif" fontWeight="700" textAnchor="middle">S</text>
    </svg>
  );
}
