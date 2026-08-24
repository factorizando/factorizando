// Diagrama «gen-portada» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { GenDobleHelice } from "../comun.jsx";

export default function GenPortadaSVG({ tema }) {
  const mu = tema.muted;
  return (
    <svg viewBox="0 0 220 140" width="100%" style={{ display: "block", maxHeight: 140, maxWidth: 240 }}>
      <GenDobleHelice tema={tema} x0={0} w={220} h={120} />
      <text x={110} y={134} textAnchor="middle" fill={mu} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif">la información de la vida</text>
    </svg>
  );
}
