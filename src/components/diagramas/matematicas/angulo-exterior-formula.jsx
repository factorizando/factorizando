// Diagrama «angulo-exterior-formula» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";
import { qRegPoly } from "../comun.jsx";

export default function AnguloExteriorFormulaSVG({ tema }) {
  // Pentágono: centro(155,92) r=62. Vértice superior P0=(155,30), P1=(214,73), P4=(96,73)
  // Ángulo exterior β en P0: entre extensión de P1→P0 y lado P0→P4
  // Arco r=22: inicio(137,17) y fin(137,43) — ambos exactamente a r=22 de P0
  // Extensión punteada desde P0(155,30) hacia (121,5)
  return (
    <svg viewBox="0 0 310 175" width="100%" style={{ maxHeight: 160, display: "block" }}>
      {/* Extensión del lado P1→P0 más allá de P0 */}
      <line x1="155" y1="30" x2="121" y2="5"
        stroke={tema.azul} strokeWidth="2" strokeDasharray="5,3" opacity="0.6"/>
      <polygon points={qRegPoly(155, 92, 62, 5, -Math.PI / 2)}
        fill={tema.azulSuave} stroke={tema.azul} strokeWidth="2" opacity="0.85"/>
      {/* Arco ángulo exterior β en P0(155,30), r=22, CCW → pasa por el exterior (izquierda) */}
      <path d="M 137,17 A 22,22 0 0,0 137,43"
        stroke={tema.acento} strokeWidth="2.2" fill="none"/>
      <text x="123" y="35" fill={tema.acento} fontSize="13"
        fontFamily="Georgia,serif" fontStyle="italic">β</text>
      <text x="260" y="115" fill={tema.azul} fontSize="12"
        fontFamily="Georgia,serif" fontStyle="italic" opacity="0.75">n=5</text>
      <text x="155" y="168" fill={tema.muted} fontSize="10"
        fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle" letterSpacing="0.03em">β = 360° / n</text>
    </svg>
  );
}
