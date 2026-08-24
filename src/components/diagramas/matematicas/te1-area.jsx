// Diagrama «te1-area» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function Te1AreaSVG({ tema }) {
  return (
    <svg viewBox="0 0 300 152" width="100%" style={{ display: "block", maxHeight: 132 }}>
      <polygon points="15,128 272,128 225,20 68,20" fill={tema.azulSuave} stroke={tema.azul} strokeWidth="2" opacity="0.85"/>
      <line x1="68" y1="20" x2="68" y2="128" stroke={tema.verde} strokeWidth="1.4" strokeDasharray="5,4" opacity="0.65"/>
      <path d="M 68,116 L 78,116 L 78,128" stroke={tema.verde} strokeWidth="1.3" fill="none" opacity="0.65"/>
      <text x="143" y="148" fill={tema.azul} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">B = 12</text>
      <text x="146" y="14" fill={tema.verde} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">b = 8</text>
      <text x="55" y="77" fill={tema.verde} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">h=5</text>
    </svg>
  );
}
