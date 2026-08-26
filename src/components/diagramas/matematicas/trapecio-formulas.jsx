// Diagrama «trapecio-formulas» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function TrapecioFormulasSVG({ tema }) {
  return (
    <svg viewBox="0 0 400 162" width="100%" style={{ maxHeight: 148, display: "block" }}>
      <polygon points="20,140 360,140 290,25 85,25" fill={tema.azulSuave} stroke="none"/>
      <line x1="20" y1="140" x2="360" y2="140" stroke={tema.azul} strokeWidth="2.5" opacity="0.9"/>
      <line x1="85" y1="25" x2="290" y2="25" stroke={tema.canal(1)} strokeWidth="2.5" opacity="0.9"/>
      <line x1="20" y1="140" x2="85" y2="25" stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <line x1="360" y1="140" x2="290" y2="25" stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <line x1="85" y1="25" x2="85" y2="140" stroke={tema.canal(1)} strokeWidth="1.4" strokeDasharray="5,4" opacity="0.65"/>
      <path d="M 85,128 L 95,128 L 95,140" stroke={tema.canal(1)} strokeWidth="1.4" fill="none" opacity="0.65"/>
      <line x1="52" y1="82" x2="325" y2="82" stroke={tema.azul} strokeWidth="1.5" strokeDasharray="6,4" opacity="0.45"/>
      <text x="190" y="156" fill={tema.azul} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">B</text>
      <text x="187" y="18" fill={tema.canal(1)} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">b</text>
      <text x="72" y="86" fill={tema.canal(1)} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">h</text>
      <text x="188" y="76" fill={tema.azul} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle" opacity="0.65">m</text>
    </svg>
  );
}
