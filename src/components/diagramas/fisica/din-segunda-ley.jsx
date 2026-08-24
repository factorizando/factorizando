// Diagrama «din-segunda-ley» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { Bloque, Vector } from "../comun.jsx";

export default function DinSegundaLeySVG({ tema }) {
  const a = tema.acento, gr = tema.verde, mu = tema.muted;
  return (
    <svg viewBox="0 0 250 110" width="100%" style={{ display: "block", maxHeight: 120 }}>
      <Bloque x={66} y={42} w={54} h={42} tema={tema} label="m" />
      <Vector x1={120} y1={54} x2={200} y2={54} color={gr} label="F" lx={170} ly={48} />
      <Vector x1={120} y1={74} x2={172} y2={74} color={a} label="a" lx={150} ly={94} />
      <text x={50} y={100} fill={mu} fontSize="10.5" fontFamily="'DM Sans',sans-serif">a en el sentido de F</text>
    </svg>
  );
}
