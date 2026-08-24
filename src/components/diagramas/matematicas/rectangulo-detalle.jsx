// Diagrama «rectangulo-detalle» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function RectanguloDetalleSVG({ tema }) {
  return (
    <svg viewBox="0 0 430 175" width="100%" style={{ display: "block", maxHeight: 175 }}>
      <polygon points="40,22 370,22 370,148 40,148" fill={tema.azulSuave} stroke="none"/>
      <polygon points="40,22 370,22 370,148 40,148" fill="none" stroke={tema.azul} strokeWidth="2.2" opacity="0.9"/>
      <path d="M 52,22 L 52,34 L 40,34" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d="M 358,22 L 358,34 L 370,34" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d="M 358,148 L 358,136 L 370,136" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d="M 52,148 L 52,136 L 40,136" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <line x1="40" y1="22" x2="370" y2="148" stroke={tema.azul} strokeWidth="1.5" strokeDasharray="7,5" opacity="0.45"/>
      <path d="M 202,18 L 202,26 M 208,18 L 208,26" stroke={tema.azul} strokeWidth="1.5" fill="none"/>
      <path d="M 202,144 L 202,152 M 208,144 L 208,152" stroke={tema.azul} strokeWidth="1.5" fill="none"/>
      <path d="M 36,83 L 44,83" stroke={tema.azul} strokeWidth="1.5" fill="none"/>
      <path d="M 366,83 L 374,83" stroke={tema.azul} strokeWidth="1.5" fill="none"/>
      <text x="205" y="167" fill={tema.azul} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">b</text>
      <text x="385" y="88" fill={tema.azul} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic">h</text>
      <text x="218" y="77" fill={tema.azul} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.55">d</text>
      <text x="35" y="17" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">A</text>
      <text x="373" y="17" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="373" y="163" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">C</text>
      <text x="35" y="163" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">D</text>
    </svg>
  );
}
