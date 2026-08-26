// Diagrama «paralelogramo-formulas» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function ParalelogramoFormulasSVG({ tema }) {
  return (
    <svg viewBox="0 0 360 148" width="100%" style={{ maxHeight: 132, display: "block" }}>
      <polygon points="35,25 255,25 290,130 70,130" fill={tema.azulSuave} stroke="none"/>
      <line x1="35" y1="25" x2="255" y2="25" stroke={tema.azul} strokeWidth="2" opacity="0.9"/>
      <line x1="70" y1="130" x2="290" y2="130" stroke={tema.azul} strokeWidth="2" opacity="0.9"/>
      <line x1="35" y1="25" x2="70" y2="130" stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <line x1="255" y1="25" x2="290" y2="130" stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <line x1="35" y1="25" x2="35" y2="130" stroke={tema.canal(1)} strokeWidth="1.4" strokeDasharray="5,4" opacity="0.7"/>
      <path d="M 35,118 L 45,118 L 45,130" stroke={tema.canal(1)} strokeWidth="1.4" fill="none" opacity="0.7"/>
      <text x="145" y="20" fill={tema.azul} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">b</text>
      <text x="180" y="144" fill={tema.azul} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">b</text>
      <text x="19" y="82" fill={tema.canal(1)} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">h</text>
      <text x="44" y="80" fill={tema.acento} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic">a</text>
      <text x="279" y="80" fill={tema.acento} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic">a</text>
    </svg>
  );
}
