// Diagrama «poe2-angext» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";
import { qRegPoly } from "../comun.jsx";

export default function Poe2AngExtSVG({ tema }) {
  // Octágono: centro(145,84) r=58. Vértice superior P0=(145,26), P1=(186,43), P7=(104,43)
  // Ángulo exterior β=45° en P0: entre extensión de P1→P0 y lado P0→P7
  // Arco r=18: inicio(128,19) y fin(128,33) — ambos exactamente a r=18 de P0
  // Extensión punteada desde P0(145,26) hacia (106,10)
  return (
    <svg viewBox="0 0 290 158" width="100%" style={{ display: "block", maxHeight: 138 }}>
      {/* Extensión del lado P1→P0 más allá de P0 */}
      <line x1="145" y1="26" x2="106" y2="10"
        stroke={tema.azul} strokeWidth="1.8" strokeDasharray="5,3" opacity="0.6"/>
      <polygon points={qRegPoly(145, 84, 58, 8, -Math.PI / 2)}
        fill={tema.azulSuave} stroke={tema.azul} strokeWidth="2" opacity="0.85"/>
      {/* Arco ángulo exterior β en P0(145,26), r=18, CCW → pasa por el exterior (izquierda) */}
      <path d="M 128,19 A 18,18 0 0,0 128,33"
        stroke={tema.acento} strokeWidth="2" fill="none"/>
      <text x="112" y="28" fill={tema.acento} fontSize="12"
        fontFamily="Georgia,serif" fontStyle="italic">β=45°</text>
      <text x="145" y="150" fill={tema.muted} fontSize="11"
        fontFamily="'DM Sans',sans-serif" textAnchor="middle">n = 8 (octágono)</text>
    </svg>
  );
}
