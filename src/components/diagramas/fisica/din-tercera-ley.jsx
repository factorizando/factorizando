// Diagrama «din-tercera-ley» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { Bloque, Vector } from "../comun.jsx";

export default function DinTerceraLeySVG({ tema }) {
  const gr = tema.verde, rj = tema.rojo, T = tema.texto;
  return (
    <svg viewBox="0 0 250 116" width="100%" style={{ display: "block", maxHeight: 126 }}>
      <Bloque x={71} y={48} w={44} h={38} tema={tema} label="A" fill={tema.azulSuave} />
      <Bloque x={115} y={48} w={44} h={38} tema={tema} label="B" />
      <Vector x1={115} y1={38} x2={178} y2={38} color={gr} label="" />
      <text x={120} y={31} fill={gr} fontSize="10.5" fontFamily="'Figtree', system-ui, sans-serif">acción (A → B)</text>
      <Vector x1={115} y1={98} x2={52} y2={98} color={rj} label="" />
      <text x={70} y={112} fill={rj} fontSize="10.5" fontFamily="'Figtree', system-ui, sans-serif">reacción (B → A)</text>
    </svg>
  );
}
