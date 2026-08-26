// Diagrama «ej1-lll» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function Ej1LLLSVG({ tema }) {
  return (
    <svg viewBox="0 0 310 192" width="100%" style={{ display: "block", maxHeight: 185 }}>
      {/* Fills */}
      <polygon points="25,80 25,170 145,170" fill={tema.azulSuave} stroke="none"/>
      <polygon points="210,110 210,150 260,150" fill={tema.azulSuave} stroke="none"/>

      {/* Right angle squares */}
      <path d="M 25,161 L 34,161 L 34,170" fill="none" stroke="rgba(240,236,227,0.45)" strokeWidth="1.2"/>
      <path d="M 210,141 L 219,141 L 219,150" fill="none" stroke="rgba(240,236,227,0.45)" strokeWidth="1.2"/>

      {/* Sides: AB/DE=azul(1), BC/EF=verde(2), CA/FD=acento(3) */}
      <line x1="25"  y1="80"  x2="25"  y2="170" stroke={tema.azul}   strokeWidth="2.5"/>
      <line x1="25"  y1="170" x2="145" y2="170" stroke={tema.canal(1)}  strokeWidth="2.5"/>
      <line x1="145" y1="170" x2="25"  y2="80"  stroke={tema.acento} strokeWidth="2.5"/>
      <line x1="210" y1="110" x2="210" y2="150" stroke={tema.azul}   strokeWidth="2.5"/>
      <line x1="210" y1="150" x2="260" y2="150" stroke={tema.canal(1)}  strokeWidth="2.5"/>
      <line x1="260" y1="150" x2="210" y2="110" stroke={tema.acento} strokeWidth="2.5"/>

      {/* Ticks — AB/DE: 1 azul */}
      <line x1="18"  y1="125" x2="32"  y2="125" stroke={tema.azul}  strokeWidth="2"/>
      <line x1="203" y1="130" x2="217" y2="130" stroke={tema.azul}  strokeWidth="2"/>
      {/* BC/EF: 2 verde */}
      <line x1="75"  y1="163" x2="75"  y2="177" stroke={tema.canal(1)} strokeWidth="2"/>
      <line x1="90"  y1="163" x2="90"  y2="177" stroke={tema.canal(1)} strokeWidth="2"/>
      <line x1="229" y1="144" x2="229" y2="157" stroke={tema.canal(1)} strokeWidth="2"/>
      <line x1="240" y1="144" x2="240" y2="157" stroke={tema.canal(1)} strokeWidth="2"/>
      {/* CA/FD: 3 acento (perp direction (0.600,−0.800)) */}
      <line x1="90"  y1="121" x2="84"  y2="129" stroke={tema.acento} strokeWidth="2"/>
      <line x1="85"  y1="117" x2="79"  y2="125" stroke={tema.acento} strokeWidth="2"/>
      <line x1="95"  y1="125" x2="89"  y2="133" stroke={tema.acento} strokeWidth="2"/>
      <line x1="237" y1="127" x2="232" y2="133" stroke={tema.acento} strokeWidth="2"/>
      <line x1="233" y1="123" x2="228" y2="129" stroke={tema.acento} strokeWidth="2"/>
      <line x1="241" y1="131" x2="236" y2="137" stroke={tema.acento} strokeWidth="2"/>

      {/* Side labels */}
      <text x="14"  y="129" fill={tema.azul}   fontSize="13" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600" textAnchor="end">6</text>
      <text x="85"  y="185" fill={tema.canal(1)}  fontSize="13" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600" textAnchor="middle">8</text>
      <text x="100" y="112" fill={tema.acento} fontSize="13" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">10</text>
      <text x="200" y="132" fill={tema.azul}   fontSize="11" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600" textAnchor="end">3</text>
      <text x="235" y="163" fill={tema.canal(1)}  fontSize="11" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600" textAnchor="middle">4</text>
      <text x="248" y="118" fill={tema.acento} fontSize="11" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">5</text>

      {/* Vertex labels */}
      <text x="25"  y="73"  fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="11"  y="184" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="149" y="184" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">C</text>
      <text x="210" y="103" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="196" y="162" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">E</text>
      <text x="264" y="162" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">F</text>

      {/* k=2 between the triangles */}
      <text x="180" y="118" fill="rgba(240,236,227,0.50)" fontSize="16" fontWeight="700" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">k = 2</text>
      <text x="180" y="134" fill="rgba(240,236,227,0.22)" fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">△ABC ∼ △DEF</text>
    </svg>
  );
}
