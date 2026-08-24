// Diagrama «prob-portada» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { DadoSVG } from "../comun.jsx";

export default function ProbabilidadPortadaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul;
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 132, maxWidth: 320 }}>
      {/* Moneda detrás */}
      <circle cx="176" cy="62" r="42" fill={tema.azulSuave} stroke={bl} strokeWidth="2.5"/>
      <circle cx="176" cy="62" r="33" fill="none" stroke={bl} strokeWidth="1" opacity="0.5"/>
      <text x="176" y="76" fill={bl} fontSize="38" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">?</text>
      {/* Dado (cara 5) */}
      <DadoSVG x={30} y={24} s={78} n={5} color={a} fill={tema.acentoSuave} stroke={a} rPip={6}/>
    </svg>
  );
}
