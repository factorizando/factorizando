// Diagrama «trapecio-def» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function TrapecioDefSVG({ tema }) {
  return (
    <svg viewBox="0 0 380 155" width="100%" style={{ maxHeight: 138, display: "block" }}>
      <polygon points="20,130 340,130 280,20 80,20" fill={tema.azulSuave} stroke="none"/>
      <line x1="20" y1="130" x2="340" y2="130" stroke={tema.azul} strokeWidth="2.5" opacity="0.9"/>
      <line x1="80" y1="20" x2="280" y2="20" stroke={tema.canal(1)} strokeWidth="2.5" opacity="0.9"/>
      <line x1="20" y1="130" x2="80" y2="20" stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <line x1="340" y1="130" x2="280" y2="20" stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <line x1="180" y1="20" x2="180" y2="130" stroke={tema.canal(1)} strokeWidth="1.4" strokeDasharray="5,4" opacity="0.6"/>
      <path d="M 180,118 L 190,118 L 190,130" stroke={tema.canal(1)} strokeWidth="1.4" fill="none" opacity="0.6"/>
      <path d="M 173,125 L 180,130 L 173,135" stroke={tema.azul} strokeWidth="2" fill="none"/>
      <path d="M 173,15 L 180,20 L 173,25" stroke={tema.canal(1)} strokeWidth="2" fill="none"/>
      <text x="180" y="147" fill={tema.azul} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">B</text>
      <text x="180" y="14" fill={tema.canal(1)} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">b</text>
      <text x="192" y="78" fill={tema.canal(1)} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">h</text>
    </svg>
  );
}
