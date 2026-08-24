// Diagrama «poe3-suma» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { qRegPoly } from "../comun.jsx";

export default function Poe3SumaSVG({ tema }) {
  return (
    <svg viewBox="0 0 290 158" width="100%" style={{ display: "block", maxHeight: 138 }}>
      <polygon points={qRegPoly(145, 78, 58, 8, -Math.PI / 2)} fill={tema.azulSuave} stroke={tema.azul} strokeWidth="2" opacity="0.85"/>
      {[0,1,2,3,4,5,6,7].map(k => {
        const a = -Math.PI/2 + 2*Math.PI*k/8;
        return <circle key={k} cx={(145+58*Math.cos(a)).toFixed(1)} cy={(78+58*Math.sin(a)).toFixed(1)} r="3.5" fill={tema.acento} opacity="0.75"/>;
      })}
      <text x="145" y="84" fill={tema.muted} fontSize="13" fontFamily="'DM Sans',sans-serif" textAnchor="middle">Σ = ?</text>
      <text x="145" y="150" fill={tema.muted} fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle">n = 8 lados</text>
    </svg>
  );
}
