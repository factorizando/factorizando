// Diagrama «lal-detalle» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function CriterioLALDetalleSVG({ tema }) {
  return (
    <svg viewBox="0 0 480 182" width="100%" style={{ display: "block", maxHeight: 170 }}>
      <polygon points="100,18 12,162 210,162" fill={tema.azulSuave} stroke="none"/>
      <polygon points="341,78 290,162 405,162" fill={tema.azulSuave} stroke="none"/>

      {/* AB/DE: azul (1 tick) — first proportional side */}
      <line x1="100" y1="18"  x2="12"  y2="162" stroke={tema.azul}   strokeWidth="2.5"/>
      <line x1="341" y1="78"  x2="290" y2="162" stroke={tema.azul}   strokeWidth="2.5"/>
      {/* BC/EF: dimmed — third side, not constrained */}
      <line x1="12"  y1="162" x2="210" y2="162" stroke="rgba(240,236,227,0.18)" strokeWidth="1.5"/>
      <line x1="290" y1="162" x2="405" y2="162" stroke="rgba(240,236,227,0.18)" strokeWidth="1.5"/>
      {/* CA/FD: acento (2 ticks) — second proportional side */}
      <line x1="210" y1="162" x2="100" y2="18"  stroke={tema.acento} strokeWidth="2.5"/>
      <line x1="405" y1="162" x2="341" y2="78"  stroke={tema.acento} strokeWidth="2.5"/>

      {/* Included angle at A and D: verde arc */}
      <path d="M 113,35 A 22,22 0 0,1 89,37" stroke={tema.canal(1)} strokeWidth="2.2" fill="none"/>
      <path d="M 351,91 A 16,16 0 0,1 333,92" stroke={tema.canal(1)} strokeWidth="2.2" fill="none"/>

      {/* Single tick on AB (azul) */}
      <line x1="51" y1="87" x2="61" y2="93" stroke={tema.azul} strokeWidth="2"/>
      {/* Single tick on DE (azul) */}
      <line x1="312" y1="118" x2="319" y2="122" stroke={tema.azul} strokeWidth="2"/>

      {/* Double tick on CA (acento) */}
      <line x1="149" y1="90" x2="157" y2="84" stroke={tema.acento} strokeWidth="2"/>
      <line x1="153" y1="96" x2="161" y2="90" stroke={tema.acento} strokeWidth="2"/>
      {/* Double tick on FD (acento) */}
      <line x1="367" y1="120" x2="375" y2="114" stroke={tema.acento} strokeWidth="2"/>
      <line x1="371" y1="126" x2="379" y2="120" stroke={tema.acento} strokeWidth="2"/>

      {/* Angle labels */}
      <text x="104" y="52"  fill={tema.canal(1)} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">∠A</text>
      <text x="344" y="108" fill={tema.canal(1)} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">∠D</text>

      {/* Vertex labels */}
      <text x="100" y="10"  fill={tema.azul}   fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="178" fill="rgba(240,236,227,0.45)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="210" y="178" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="341" y="72"  fill={tema.azul}   fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="282" y="172" fill="rgba(240,236,227,0.45)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">E</text>
      <text x="409" y="172" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>

      {/* ∼ + caption */}
      <text x="252" y="82"  fill="rgba(240,236,227,0.25)" fontSize="26" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
      <text x="252" y="114" fill={tema.canal(1)} fontSize="9.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle" letterSpacing="0.03em">∠A = ∠D  (ángulo comprendido)</text>
    </svg>
  );
}
