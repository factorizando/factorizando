// Diagrama «din-portada» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { Bloque, Vector } from "../comun.jsx";

export default function DinPortadaSVG({ tema }) {
  const a = tema.acento, gr = tema.canal(1), mu = tema.muted;
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 132, maxWidth: 320 }}>
      <line x1={20} y1={92} x2={230} y2={92} stroke={mu} strokeWidth="1.5" />
      <Bloque x={60} y={52} w={54} h={40} tema={tema} label="m" />
      <Vector x1={114} y1={72} x2={188} y2={72} color={gr} label="F" lx={150} ly={66} />
      <Vector x1={60} y1={40} x2={120} y2={40} color={a} label="a" lx={88} ly={34} />
    </svg>
  );
}
