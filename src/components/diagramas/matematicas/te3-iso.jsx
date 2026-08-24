// Diagrama «te3-iso» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function Te3IsoSVG({ tema }) {
  return (
    <svg viewBox="0 0 300 152" width="100%" style={{ display: "block", maxHeight: 132 }}>
      <polygon points="14,128 278,128 218,20 74,20" fill={tema.azulSuave} stroke={tema.azul} strokeWidth="2" opacity="0.85"/>
      <path d="M 27,128 A 22,22 0 0,1 29,106" stroke={tema.acento} strokeWidth="2" fill="none"/>
      <path d="M 265,128 A 22,22 0 0,0 263,106" stroke={tema.acento} strokeWidth="2" fill="none"/>
      <text x="42" y="113" fill={tema.acento} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">∠A=65°</text>
      <text x="188" y="113" fill={tema.acento} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">∠B=?</text>
    </svg>
  );
}
