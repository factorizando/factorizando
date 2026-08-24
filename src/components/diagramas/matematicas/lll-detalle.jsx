// Diagrama «lll-detalle» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function CriterioLLLDetalleSVG({ tema }) {
  return (
    <svg viewBox="0 0 480 182" width="100%" style={{ display: "block", maxHeight: 170 }}>
      <polygon points="100,18 12,162 210,162" fill={tema.azulSuave} stroke="none"/>
      <polygon points="341,78 290,162 405,162" fill={tema.azulSuave} stroke="none"/>

      {/* Color-coded sides: AB/DE=azul(1 tick), BC/EF=verde(2), CA/FD=acento(3) */}
      <line x1="100" y1="18"  x2="12"  y2="162" stroke={tema.azul}   strokeWidth="2.5" opacity="0.9"/>
      <line x1="341" y1="78"  x2="290" y2="162" stroke={tema.azul}   strokeWidth="2.5" opacity="0.9"/>
      <line x1="12"  y1="162" x2="210" y2="162" stroke={tema.verde}  strokeWidth="2.5" opacity="0.9"/>
      <line x1="290" y1="162" x2="405" y2="162" stroke={tema.verde}  strokeWidth="2.5" opacity="0.9"/>
      <line x1="210" y1="162" x2="100" y2="18"  stroke={tema.acento} strokeWidth="2.5" opacity="0.9"/>
      <line x1="405" y1="162" x2="341" y2="78"  stroke={tema.acento} strokeWidth="2.5" opacity="0.9"/>

      {/* Tick marks */}
      <path d="M 51,87 L 61,93"                                     stroke={tema.azul}   strokeWidth="2" fill="none"/>
      <path d="M 312,118 L 319,122"                                  stroke={tema.azul}   strokeWidth="2" fill="none"/>
      <path d="M 107,157 L 107,167 M 115,157 L 115,167"             stroke={tema.verde}  strokeWidth="2" fill="none"/>
      <path d="M 344,157 L 344,167 M 351,157 L 351,167"             stroke={tema.verde}  strokeWidth="2" fill="none"/>
      <path d="M 154,81 L 146,87 M 159,87 L 151,93 M 164,93 L 156,99"   stroke={tema.acento} strokeWidth="2" fill="none"/>
      <path d="M 372,113 L 366,117 M 376,118 L 370,122 M 380,123 L 374,127" stroke={tema.acento} strokeWidth="2" fill="none"/>

      {/* Side labels */}
      <text x="44"  y="84"  fill={tema.azul}   fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">ka</text>
      <text x="307" y="114" fill={tema.azul}   fontSize="11" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">a</text>
      <text x="111" y="177" fill={tema.verde}  fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">kb</text>
      <text x="348" y="177" fill={tema.verde}  fontSize="11" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">b</text>
      <text x="170" y="82"  fill={tema.acento} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">kc</text>
      <text x="384" y="113" fill={tema.acento} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic">c</text>

      {/* Vertex labels */}
      <text x="100" y="10"  fill={tema.azul}   fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="178" fill={tema.verde}  fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="210" y="178" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="341" y="72"  fill={tema.azul}   fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="282" y="172" fill={tema.verde}  fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">E</text>
      <text x="409" y="172" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>

      {/* k label + subtitle */}
      <text x="252" y="75"  fill="rgba(240,236,227,0.25)" fontSize="26" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
      <text x="252" y="100" fill="rgba(240,236,227,0.48)" fontSize="19" fontWeight="700" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">k</text>
      <text x="252" y="118" fill="rgba(240,236,227,0.22)" fontSize="9.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle" letterSpacing="0.04em">ka/a = kb/b = kc/c</text>
    </svg>
  );
}
