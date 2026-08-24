// Diagrama «pe3-cuadrado» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function Pe3CuadradoSVG({ tema }) {
  // Polígono 120×120 centrado → proporciones 1:1
  return (
    <svg viewBox="0 0 280 158" width="100%" style={{ display: "block", maxHeight: 138 }}>
      <polygon points="80,19 200,19 200,139 80,139" fill={tema.azulSuave} stroke={tema.azul} strokeWidth="2" opacity="0.85"/>
      <path d="M 90,19 L 90,29 L 80,29"   stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 190,19 L 190,29 L 200,29" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 190,139 L 190,129 L 200,129" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 90,139 L 90,129 L 80,129"  stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <text x="140" y="84" fill={tema.acento} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A = 49 cm²</text>
      <text x="140" y="154" fill={tema.azul} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">l = ?  →  d = ?</text>
    </svg>
  );
}
