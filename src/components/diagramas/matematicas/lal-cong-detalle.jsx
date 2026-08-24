// Diagrama «lal-cong-detalle» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function CongLALDetalleSVG({ tema }) {
  return (
    <svg viewBox="0 0 450 200" width="100%" style={{ display: "block", maxHeight: 200 }}>
      <polygon points="100,18 12,162 210,162" fill={tema.azulSuave} stroke="none"/>
      <polygon points="322,18 234,162 432,162" fill={tema.azulSuave} stroke="none"/>
      <line x1="12"  y1="162" x2="210" y2="162" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
      <line x1="234" y1="162" x2="432" y2="162" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
      <line x1="100" y1="18"  x2="12"  y2="162" stroke={tema.azul}   strokeWidth="2.5"/>
      <line x1="322" y1="18"  x2="234" y2="162" stroke={tema.azul}   strokeWidth="2.5"/>
      <line x1="210" y1="162" x2="100" y2="18"  stroke={tema.acento} strokeWidth="2.5"/>
      <line x1="432" y1="162" x2="322" y2="18"  stroke={tema.acento} strokeWidth="2.5"/>
      <path d="M 113,35 A 22,22 0 0,1 89,37"  stroke={tema.verde} strokeWidth="2.2" fill="none"/>
      <path d="M 335,35 A 22,22 0 0,1 311,37"  stroke={tema.verde} strokeWidth="2.2" fill="none"/>
      <path d="M 51,87 L 61,93"   stroke={tema.azul}   strokeWidth="2" fill="none"/>
      <path d="M 273,87 L 283,93" stroke={tema.azul}   strokeWidth="2" fill="none"/>
      <path d="M 154,81 L 146,87 M 159,87 L 151,93"   stroke={tema.acento} strokeWidth="2" fill="none"/>
      <path d="M 376,81 L 368,87 M 381,87 L 373,93"   stroke={tema.acento} strokeWidth="2" fill="none"/>
      <text x="104" y="54"  fill={tema.verde} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">∠A</text>
      <text x="326" y="54"  fill={tema.verde} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">∠D</text>
      <text x="100" y="10"  fill={tema.azul}   fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="178" fill="rgba(240,236,227,0.45)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="210" y="178" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="322" y="10"  fill={tema.azul}   fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="234" y="178" fill="rgba(240,236,227,0.45)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="436" y="178" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>
      <text x="222" y="95"  fill="rgba(240,236,227,0.26)" fontSize="24" fontFamily="Georgia,serif" textAnchor="middle">≅</text>
      <text x="222" y="194" fill={tema.verde} fontSize="9.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.03em">∠A = ∠D  (ángulo comprendido)</text>
    </svg>
  );
}
