// Diagrama «cuadrado-detalle» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function CuadradoDetalleSVG({ tema }) {
  // Cuadrado 140×140 centrado en viewBox 430×185 → proporciones exactamente 1:1
  // A=top-left(145,23), B=top-right(285,23), C=bottom-right(285,163), D=bottom-left(145,163)
  return (
    <svg viewBox="0 0 430 185" width="100%" style={{ display: "block", maxHeight: 185 }}>
      <polygon points="145,23 285,23 285,163 145,163" fill={tema.azulSuave} stroke="none"/>
      <polygon points="145,23 285,23 285,163 145,163" fill="none" stroke={tema.azul} strokeWidth="2.2" opacity="0.9"/>
      {/* Marcadores de ángulo recto */}
      <path d="M 157,23 L 157,35 L 145,35" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d="M 273,23 L 273,35 L 285,35" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d="M 273,163 L 273,151 L 285,151" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d="M 157,163 L 157,151 L 145,151" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      {/* Diagonal A→C */}
      <line x1="145" y1="23" x2="285" y2="163" stroke={tema.azul} strokeWidth="1.5" strokeDasharray="7,5" opacity="0.4"/>
      {/* Marcas de lado igual */}
      <path d="M 215,19 L 215,27" stroke={tema.azul} strokeWidth="1.8" fill="none"/>
      <path d="M 215,159 L 215,167" stroke={tema.azul} strokeWidth="1.8" fill="none"/>
      <path d="M 141,93 L 149,93" stroke={tema.azul} strokeWidth="1.8" fill="none"/>
      <path d="M 281,93 L 289,93" stroke={tema.azul} strokeWidth="1.8" fill="none"/>
      {/* Etiquetas */}
      <text x="215" y="178" fill={tema.azul} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">l</text>
      <text x="300" y="97" fill={tema.azul} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic">l</text>
      <text x="221" y="83" fill={tema.azul} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.5">d</text>
      <text x="141" y="20" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">A</text>
      <text x="288" y="20" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="288" y="176" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">C</text>
      <text x="141" y="176" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">D</text>
    </svg>
  );
}
