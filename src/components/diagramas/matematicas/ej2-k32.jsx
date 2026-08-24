// Diagrama «ej2-k32» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function Ej2K32SVG({ tema }) {
  return (
    <svg viewBox="0 0 388 185" width="100%" style={{ display: "block", maxHeight: 175 }}>
      {/* Fills */}
      <polygon points="95,29 12,170 198,170" fill={tema.azulSuave} stroke="none"/>
      <polygon points="296,57 240,151 364,151" fill={tema.azulSuave} stroke="none"/>

      {/* Big triangle sides — PQ highlighted in azul, rest dimmed */}
      <line x1="95"  y1="29"  x2="12"  y2="170" stroke={tema.azul}   strokeWidth="2.8"/>
      <line x1="12"  y1="170" x2="198" y2="170" stroke="rgba(240,236,227,0.35)" strokeWidth="1.8"/>
      <line x1="198" y1="170" x2="95"  y2="29"  stroke="rgba(240,236,227,0.35)" strokeWidth="1.8"/>

      {/* Small triangle sides — XY highlighted in azul, rest dimmed */}
      <line x1="296" y1="57"  x2="240" y2="151" stroke={tema.azul}   strokeWidth="2.8"/>
      <line x1="240" y1="151" x2="364" y2="151" stroke="rgba(240,236,227,0.35)" strokeWidth="1.8"/>
      <line x1="364" y1="151" x2="296" y2="57"  stroke="rgba(240,236,227,0.35)" strokeWidth="1.8"/>

      {/* Labels on PQ and XY */}
      <text x="40"  y="108" fill={tema.azul} fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">12</text>
      <text x="258" y="110" fill={tema.azul} fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">?</text>

      {/* Vertex labels */}
      <text x="95"  y="22"  fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">P</text>
      <text x="4"   y="179" fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">Q</text>
      <text x="202" y="179" fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">R</text>
      <text x="296" y="51"  fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">X</text>
      <text x="232" y="163" fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">Y</text>
      <text x="368" y="163" fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">Z</text>

      {/* k = 3/2 in center + ∼ */}
      <text x="222" y="87"  fill="rgba(240,236,227,0.28)" fontSize="22" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
      <text x="222" y="111" fill="rgba(240,236,227,0.55)" fontSize="17" fontWeight="700" fontFamily="'DM Sans',sans-serif" textAnchor="middle">k = 3/2</text>
      <text x="222" y="127" fill="rgba(240,236,227,0.22)" fontSize="9" fontFamily="'DM Sans',sans-serif" textAnchor="middle">PQ = 12</text>
    </svg>
  );
}
