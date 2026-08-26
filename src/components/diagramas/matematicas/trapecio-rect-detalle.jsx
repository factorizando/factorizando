// Diagrama «trapecio-rect-detalle» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function TrapRectDetalleSVG({ tema }) {
  return (
    <svg viewBox="0 0 430 185" width="100%" style={{ display: "block", maxHeight: 185 }}>
      <polygon points="50,155 370,155 370,25 165,25" fill={tema.azulSuave} stroke="none"/>
      <line x1="50" y1="155" x2="370" y2="155" stroke={tema.azul} strokeWidth="2.5" opacity="0.9"/>
      <line x1="165" y1="25" x2="370" y2="25" stroke={tema.canal(1)} strokeWidth="2.5" opacity="0.9"/>
      <line x1="50" y1="155" x2="165" y2="25" stroke={tema.acento} strokeWidth="2.2" opacity="0.9"/>
      <line x1="370" y1="155" x2="370" y2="25" stroke={tema.azul} strokeWidth="2.2" opacity="0.9"/>
      <path d="M 358,155 L 358,143 L 370,143" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d="M 358,25 L 358,37 L 370,37" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <text x="210" y="175" fill={tema.azul} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">B</text>
      <text x="267" y="18" fill={tema.canal(1)} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">b</text>
      <text x="384" y="92" fill={tema.azul} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic">h = c</text>
      <text x="94" y="84" fill={tema.acento} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">d</text>
      <text x="47" y="168" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">A</text>
      <text x="373" y="168" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="373" y="20" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">C</text>
      <text x="162" y="18" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">D</text>
    </svg>
  );
}
