// Diagrama «trapecio-isosceles-detalle» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function TrapIsoDetalleSVG({ tema }) {
  return (
    <svg viewBox="0 0 430 185" width="100%" style={{ display: "block", maxHeight: 185 }}>
      <polygon points="25,155 385,155 310,25 100,25" fill={tema.azulSuave} stroke="none"/>
      <line x1="25" y1="155" x2="385" y2="155" stroke={tema.azul} strokeWidth="2.5" opacity="0.9"/>
      <line x1="100" y1="25" x2="310" y2="25" stroke={tema.verde} strokeWidth="2.5" opacity="0.9"/>
      <line x1="25" y1="155" x2="100" y2="25" stroke={tema.acento} strokeWidth="2.2" opacity="0.9"/>
      <line x1="385" y1="155" x2="310" y2="25" stroke={tema.acento} strokeWidth="2.2" opacity="0.9"/>
      <path d="M 56,91 L 66,99" stroke={tema.acento} strokeWidth="2" fill="none"/>
      <path d="M 342,91 L 352,99" stroke={tema.acento} strokeWidth="2" fill="none"/>
      <line x1="100" y1="25" x2="100" y2="155" stroke={tema.verde} strokeWidth="1.5" strokeDasharray="6,4" opacity="0.6"/>
      <path d="M 100,143 L 110,143 L 110,155" stroke={tema.verde} strokeWidth="1.5" fill="none" opacity="0.6"/>
      <text x="205" y="175" fill={tema.azul} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">B</text>
      <text x="205" y="18" fill={tema.verde} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">b</text>
      <text x="86" y="92" fill={tema.verde} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">h</text>
      <text x="49" y="84" fill={tema.acento} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">c</text>
      <text x="364" y="84" fill={tema.acento} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic">c</text>
      <text x="22" y="168" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">A</text>
      <text x="388" y="168" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="313" y="18" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">C</text>
      <text x="97" y="18" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">D</text>
    </svg>
  );
}
