// Diagrama «paralelogramo-def» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function ParalelogramoDefSVG({ tema }) {
  return (
    <svg viewBox="0 0 360 150" width="100%" style={{ maxHeight: 138, display: "block" }}>
      <polygon points="30,15 260,15 285,125 55,125" fill={tema.azulSuave} stroke="none"/>
      <line x1="30" y1="15" x2="260" y2="15" stroke={tema.azul} strokeWidth="2" opacity="0.9"/>
      <line x1="55" y1="125" x2="285" y2="125" stroke={tema.azul} strokeWidth="2" opacity="0.9"/>
      <line x1="30" y1="15" x2="55" y2="125" stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <line x1="260" y1="15" x2="285" y2="125" stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <path d="M 138,10 L 145,15 L 138,20" stroke={tema.azul} strokeWidth="2" fill="none"/>
      <path d="M 163,120 L 170,125 L 163,130" stroke={tema.azul} strokeWidth="2" fill="none"/>
      <path d="M 36,66 L 44,72" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d="M 266,66 L 274,72" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <line x1="30" y1="15" x2="30" y2="125" stroke={tema.canal(1)} strokeWidth="1.4" strokeDasharray="5,4" opacity="0.65"/>
      <path d="M 30,113 L 40,113 L 40,125" stroke={tema.canal(1)} strokeWidth="1.4" fill="none" opacity="0.65"/>
      <text x="145" y="11" fill={tema.azul} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">b</text>
      <text x="14" y="72" fill={tema.canal(1)} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">h</text>
      <text x="34" y="73" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">a</text>
      <text x="25" y="10" fill={tema.azul} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">A</text>
      <text x="263" y="10" fill={tema.azul} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="290" y="130" fill={tema.azul} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">C</text>
      <text x="50" y="140" fill={tema.azul} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">D</text>
    </svg>
  );
}
