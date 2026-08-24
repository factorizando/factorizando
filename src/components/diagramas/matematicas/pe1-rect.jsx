// Diagrama «pe1-rect» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function Pe1RectSVG({ tema }) {
  return (
    <svg viewBox="0 0 280 158" width="100%" style={{ display: "block", maxHeight: 138 }}>
      <polygon points="30,20 240,20 240,128 30,128" fill={tema.azulSuave} stroke={tema.azul} strokeWidth="2" opacity="0.85"/>
      <path d="M 42,20 L 42,32 L 30,32" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 228,20 L 228,32 L 240,32" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 228,128 L 228,116 L 240,116" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 42,128 L 42,116 L 30,116" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <line x1="30" y1="20" x2="240" y2="128" stroke={tema.azul} strokeWidth="1.5" strokeDasharray="6,4" opacity="0.45"/>
      <text x="135" y="148" fill={tema.azul} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">8 cm</text>
      <text x="252" y="76" fill={tema.azul} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">6 cm</text>
      <text x="148" y="66" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.65">d=?</text>
    </svg>
  );
}
