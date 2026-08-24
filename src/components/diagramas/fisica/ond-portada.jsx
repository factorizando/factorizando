// Diagrama «ond-portada» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function OndPortadaSVG({ tema }) {
  const a = tema.acento;
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 132, maxWidth: 320 }}>
      <path d="M 20 60 Q 44 26 68 60 T 116 60 T 164 60 T 212 60" stroke={a} strokeWidth="2.6" fill="none" />
    </svg>
  );
}
