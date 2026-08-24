// Diagrama «ej-cong-lll» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function EjCongLLLSVG({ tema }) {
  return (
    <svg viewBox="0 0 330 138" width="100%" style={{ display: "block", maxHeight: 160 }}>
      <polygon points="70,15 10,112 155,112"  fill={tema.azulSuave} stroke="none"/>
      <polygon points="230,15 170,112 315,112" fill={tema.azulSuave} stroke="none"/>
      <line x1="70"  y1="15"  x2="10"  y2="112" stroke={tema.azul}   strokeWidth="2.5"/>
      <line x1="230" y1="15"  x2="170" y2="112" stroke={tema.azul}   strokeWidth="2.5"/>
      <line x1="10"  y1="112" x2="155" y2="112" stroke={tema.verde}  strokeWidth="2.5"/>
      <line x1="170" y1="112" x2="315" y2="112" stroke={tema.verde}  strokeWidth="2.5"/>
      <line x1="155" y1="112" x2="70"  y2="15"  stroke={tema.acento} strokeWidth="2.5"/>
      <line x1="315" y1="112" x2="230" y2="15"  stroke={tema.acento} strokeWidth="2.5"/>
      <path d="M 35,67 L 45,60"   stroke={tema.azul}   strokeWidth="2" fill="none"/>
      <path d="M 195,67 L 205,60" stroke={tema.azul}   strokeWidth="2" fill="none"/>
      <path d="M 78,106 L 78,118 M 87,106 L 87,118"    stroke={tema.verde}  strokeWidth="2" fill="none"/>
      <path d="M 238,106 L 238,118 M 247,106 L 247,118" stroke={tema.verde}  strokeWidth="2" fill="none"/>
      <path d="M 103,62 L 112,54 M 108,68 L 117,60 M 113,73 L 122,65"  stroke={tema.acento} strokeWidth="2" fill="none"/>
      <path d="M 263,62 L 272,54 M 268,68 L 277,60 M 273,73 L 282,65"  stroke={tema.acento} strokeWidth="2" fill="none"/>
      <text x="30"  y="60"  fill={tema.azul}   fontSize="13" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="end">5</text>
      <text x="82"  y="127" fill={tema.verde}  fontSize="13" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="middle">6</text>
      <text x="128" y="57"  fill={tema.acento} fontSize="13" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">7</text>
      <text x="190" y="60"  fill={tema.azul}   fontSize="13" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="end">5</text>
      <text x="242" y="127" fill={tema.verde}  fontSize="13" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="middle">6</text>
      <text x="288" y="57"  fill={tema.acento} fontSize="13" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">7</text>
      <text x="70"  y="8"   fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="3"   y="128" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="155" y="128" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="230" y="8"   fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="170" y="128" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="318" y="120" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">F</text>
      <text x="163" y="70" fill="rgba(240,236,227,0.45)" fontSize="22" fontFamily="Georgia,serif" textAnchor="middle">≅</text>
    </svg>
  );
}
