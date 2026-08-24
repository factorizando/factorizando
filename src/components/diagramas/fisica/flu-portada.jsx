// Diagrama «flu-portada» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function FluPortadaSVG({ tema }) {
  const a = tema.acento, mu = tema.muted;
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 132, maxWidth: 320 }}>
      <path d="M 95 32 L 95 100 L 155 100 L 155 32" fill="none" stroke={mu} strokeWidth="1.8" />
      <path d="M 95 58 Q 110 50 125 58 T 155 58 L 155 100 L 95 100 Z" fill={`${a}33`} stroke={a} strokeWidth="1.4" />
      <path d="M 125 12 C 116 24 116 32 125 32 C 134 32 134 24 125 12 Z" fill={`${a}55`} stroke={a} strokeWidth="1.4" />
    </svg>
  );
}
