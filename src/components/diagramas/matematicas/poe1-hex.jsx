// Diagrama «poe1-hex» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";
import { qRegPoly } from "../comun.jsx";

export default function Poe1HexSVG({ tema }) {
  return (
    <svg viewBox="0 0 290 158" width="100%" style={{ display: "block", maxHeight: 138 }}>
      <polygon points={qRegPoly(140, 76, 62, 6, -Math.PI / 2)} fill={tema.azulSuave} stroke={tema.azul} strokeWidth="2" opacity="0.85"/>
      <path d="M 154,24 A 18,18 0 0,1 126,24" stroke={tema.acento} strokeWidth="2" fill="none"/>
      <text x="140" y="41" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">α=?</text>
      <text x="140" y="150" fill={tema.muted} fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle">n = 6 lados</text>
    </svg>
  );
}
