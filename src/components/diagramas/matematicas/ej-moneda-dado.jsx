// Diagrama «ej-moneda-dado» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { DadoSVG } from "../comun.jsx";

export default function MonedaDadoSVG({ tema }) {
  const a = tema.acento, bl = tema.azul;
  return (
    <svg viewBox="0 0 200 100" width="100%" style={{ display: "block", maxHeight: 112 }}>
      <circle cx="50" cy="50" r="34" fill={tema.azulSuave} stroke={bl} strokeWidth="2.5"/>
      <text x="50" y="60" fill={bl} fontSize="28" fontFamily="Georgia,serif" textAnchor="middle">C</text>
      <text x="100" y="56" fill={tema.muted} fontSize="18" fontFamily="'DM Sans',sans-serif" textAnchor="middle">y</text>
      <DadoSVG x={122} y={16} s={68} n={6} color={a} fill={tema.acentoSuave} stroke={a} rPip={5}/>
    </svg>
  );
}
