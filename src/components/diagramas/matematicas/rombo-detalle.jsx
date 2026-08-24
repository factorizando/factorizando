// Diagrama «rombo-detalle» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function RomboDetalleSVG({ tema }) {
  return (
    <svg viewBox="0 0 430 185" width="100%" style={{ display: "block", maxHeight: 185 }}>
      <polygon points="210,15 390,90 210,165 30,90" fill={tema.azulSuave} stroke="none"/>
      <line x1="210" y1="15" x2="390" y2="90" stroke={tema.azul} strokeWidth="2.2" opacity="0.9"/>
      <line x1="390" y1="90" x2="210" y2="165" stroke={tema.azul} strokeWidth="2.2" opacity="0.9"/>
      <line x1="210" y1="165" x2="30" y2="90" stroke={tema.azul} strokeWidth="2.2" opacity="0.9"/>
      <line x1="30" y1="90" x2="210" y2="15" stroke={tema.azul} strokeWidth="2.2" opacity="0.9"/>
      <line x1="210" y1="15" x2="210" y2="165" stroke={tema.verde} strokeWidth="1.8" strokeDasharray="7,5" opacity="0.7"/>
      <line x1="30" y1="90" x2="390" y2="90" stroke={tema.acento} strokeWidth="1.8" strokeDasharray="7,5" opacity="0.7"/>
      <path d="M 210,90 L 210,80 L 220,80" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" fill="none"/>
      <path d="M 293,49 L 300,56" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d="M 293,124 L 300,131" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d="M 120,124 L 127,131" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d="M 120,49 L 127,56" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <text x="195" y="10" fill={tema.muted} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">A</text>
      <text x="394" y="94" fill={tema.muted} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="210" y="180" fill={tema.muted} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="26" y="94" fill={tema.muted} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">D</text>
      <text x="217" y="52" fill={tema.verde} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">d₁</text>
      <text x="306" y="87" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">d₂</text>
      <text x="302" y="50" fill={tema.azul} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">l</text>
    </svg>
  );
}
