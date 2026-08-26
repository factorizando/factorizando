// Diagrama «laa-cong-detalle» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function CongLAADetalleSVG({ tema }) {
  return (
    <svg viewBox="0 0 450 200" width="100%" style={{ display: "block", maxHeight: 200 }}>
      <polygon points="100,18 12,162 210,162" fill={tema.azulSuave} stroke="none"/>
      <polygon points="322,18 234,162 432,162" fill={tema.azulSuave} stroke="none"/>
      <line x1="100" y1="18"  x2="12"  y2="162" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
      <line x1="322" y1="18"  x2="234" y2="162" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
      <line x1="210" y1="162" x2="100" y2="18"  stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
      <line x1="432" y1="162" x2="322" y2="18"  stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
      <line x1="12"  y1="162" x2="210" y2="162" stroke={tema.azul} strokeWidth="2.5" opacity="0.9"/>
      <line x1="234" y1="162" x2="432" y2="162" stroke={tema.azul} strokeWidth="2.5" opacity="0.9"/>
      <path d="M 113,35 A 22,22 0 0,1 89,37"  stroke={tema.canal(1)}  strokeWidth="2.2" fill="none"/>
      <path d="M 335,35 A 22,22 0 0,1 311,37"  stroke={tema.canal(1)}  strokeWidth="2.2" fill="none"/>
      <path d="M 22,145 A 20,20 0 0,1 32,162"  stroke={tema.acento} strokeWidth="2.2" fill="none"/>
      <path d="M 244,145 A 20,20 0 0,1 254,162" stroke={tema.acento} strokeWidth="2.2" fill="none"/>
      <path d="M 107,157 L 107,167"   stroke={tema.azul} strokeWidth="2" fill="none"/>
      <path d="M 329,157 L 329,167"   stroke={tema.azul} strokeWidth="2" fill="none"/>
      <text x="100" y="10"  fill={tema.canal(1)}  fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="178" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="210" y="178" fill="rgba(240,236,227,0.45)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="322" y="10"  fill={tema.canal(1)}  fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="234" y="178" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="436" y="178" fill="rgba(240,236,227,0.45)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>
      <text x="100" y="50"  fill={tema.canal(1)}  fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">α</text>
      <text x="322" y="50"  fill={tema.canal(1)}  fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">α</text>
      <text x="37"  y="152" fill={tema.acento} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">β</text>
      <text x="259" y="152" fill={tema.acento} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">β</text>
      <text x="222" y="90"  fill="rgba(240,236,227,0.28)" fontSize="26" fontFamily="Georgia,serif" textAnchor="middle">≅</text>
      <text x="222" y="194" fill={tema.azul} fontSize="9.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle" letterSpacing="0.03em">BC = EF  (lado no comprendido)</text>
    </svg>
  );
}
