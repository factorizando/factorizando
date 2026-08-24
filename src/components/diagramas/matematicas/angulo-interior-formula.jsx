// Diagrama «angulo-interior-formula» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";
import { qRegPoly } from "../comun.jsx";

export default function AnguloInteriorFormulaSVG({ tema }) {
  return (
    <svg viewBox="0 0 310 160" width="100%" style={{ maxHeight: 148, display: "block" }}>
      <polygon points={qRegPoly(150, 80, 62, 6, -Math.PI / 2)}
        fill={tema.azulSuave} stroke={tema.azul} strokeWidth="2" opacity="0.85"/>
      <path d="M 164,28 A 18,18 0 0,1 136,28" stroke={tema.acento} strokeWidth="2.5" fill="none"/>
      <text x="150" y="46" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">α</text>
      <text x="252" y="80" fill={tema.azul} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.75">n=6</text>
      <text x="150" y="152" fill={tema.muted} fontSize="10" fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.03em">α = (n−2)·180° / n</text>
    </svg>
  );
}
