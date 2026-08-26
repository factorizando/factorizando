// Diagrama «ene-energias» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { Bloque, Vector, arrowHead } from "../comun.jsx";

export default function EneEnergiasSVG({ tema }) {
  const gr = tema.canal(1), mu = tema.muted, bl = tema.azul;
  const gy = 112;
  return (
    <svg viewBox="0 0 250 130" width="100%" style={{ display: "block", maxHeight: 140 }}>
      <line x1={30} y1={gy} x2={220} y2={gy} stroke={mu} strokeWidth="1.5" />
      <line x1={36} y1={52} x2={150} y2={52} stroke={mu} strokeWidth="1.5" />
      <Bloque x={64} y={32} w={36} h={20} tema={tema} label="m" />
      <Vector x1={100} y1={42} x2={150} y2={42} color={gr} label="v" lx={128} ly={36} />
      <line x1={176} y1={52} x2={176} y2={gy} stroke={bl} strokeWidth="1.4" strokeDasharray="4 3" />
      <polygon points={arrowHead(176, 58, 176, 52, 7)} fill={bl} />
      <polygon points={arrowHead(176, gy - 6, 176, gy, 7)} fill={bl} />
      <text x={182} y={86} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">h</text>
      <text x={34} y={26} fill={mu} fontSize="9.5" fontFamily="'Figtree', system-ui, sans-serif">Ec = ½mv²</text>
      <text x={150} y={126} fill={mu} fontSize="9.5" fontFamily="'Figtree', system-ui, sans-serif">Ep = mgh</text>
    </svg>
  );
}
