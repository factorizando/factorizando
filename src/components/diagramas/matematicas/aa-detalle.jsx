// Diagrama «aa-detalle» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function CriterioAADetalleSVG({ tema }) {
  return (
    <svg viewBox="0 0 480 200" width="100%" style={{ display: "block", maxHeight: 188 }}>
      {/* Triangle fills */}
      <polygon points="100,18 12,162 210,162" fill={tema.azulSuave} stroke="none"/>
      <polygon points="341,78 290,162 405,162" fill={tema.azulSuave} stroke="none"/>
      <polygon points="100,18 12,162 210,162" fill="none" stroke="rgba(255,255,255,0.11)" strokeWidth="1.5"/>
      <polygon points="341,78 290,162 405,162" fill="none" stroke="rgba(255,255,255,0.11)" strokeWidth="1.5"/>

      {/* α — azul arcs at A and D (given equal angles) */}
      <path d="M 113,35 A 22,22 0 0,1 89,37" stroke={tema.azul} strokeWidth="2.2" fill="none"/>
      <path d="M 351,91 A 16,16 0 0,1 333,92" stroke={tema.azul} strokeWidth="2.2" fill="none"/>

      {/* β — verde arcs at B and E (given equal angles) */}
      <path d="M 22,145 A 20,20 0 0,1 32,162" stroke={tema.canal(1)} strokeWidth="2.2" fill="none"/>
      <path d="M 297,150 A 14,14 0 0,1 304,162" stroke={tema.canal(1)} strokeWidth="2.2" fill="none"/>

      {/* γ — acento dashed arcs at C and F (derived automatically) */}
      <path d="M 190,162 A 20,20 0 0,1 198,146" stroke={tema.acento} strokeWidth="2" fill="none" strokeDasharray="4,3"/>
      <path d="M 391,162 A 14,14 0 0,1 397,151" stroke={tema.acento} strokeWidth="2" fill="none" strokeDasharray="3,2"/>

      {/* Angle labels */}
      <text x="100" y="54" fill={tema.azul}   fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">α</text>
      <text x="341" y="110" fill={tema.azul}  fontSize="11" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">α</text>
      <text x="38"  y="152" fill={tema.canal(1)}  fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">β</text>
      <text x="309" y="149" fill={tema.canal(1)}  fontSize="11" fontFamily="Georgia,serif" fontStyle="italic">β</text>
      <text x="184" y="148" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">γ</text>
      <text x="384" y="149" fill={tema.acento} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic">γ</text>

      {/* Vertex labels */}
      <text x="100" y="10"  fill={tema.azul}   fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="178" fill={tema.canal(1)}  fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="210" y="178" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="341" y="72"  fill={tema.azul}   fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="282" y="172" fill={tema.canal(1)}  fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">E</text>
      <text x="409" y="172" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>

      {/* ∼ between triangles */}
      <text x="252" y="110" fill="rgba(240,236,227,0.28)" fontSize="30" fontFamily="Georgia,serif" textAnchor="middle">∼</text>

      {/* Subtitle: γ derived */}
      <text x="252" y="196" fill="rgba(240,236,227,0.20)" fontSize="9.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle" letterSpacing="0.05em">γ = 180° − α − β  (se determina solo)</text>
    </svg>
  );
}
