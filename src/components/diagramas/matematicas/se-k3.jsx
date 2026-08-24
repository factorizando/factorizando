// Diagrama «se-k3» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function SeK3SVG({ tema }) {
  return (
    <svg viewBox="0 0 388 185" width="100%" style={{ display: "block", maxHeight: 175 }}>
      <polygon points="95,29 12,170 198,170" fill={tema.azulSuave} stroke="none"/>
      <polygon points="296,57 240,151 364,151" fill={tema.azulSuave} stroke="none"/>
      <line x1="95"  y1="29"  x2="12"  y2="170" stroke={tema.azul}   strokeWidth="2.8"/>
      <line x1="12"  y1="170" x2="198" y2="170" stroke="rgba(240,236,227,0.35)" strokeWidth="1.8"/>
      <line x1="198" y1="170" x2="95"  y2="29"  stroke="rgba(240,236,227,0.35)" strokeWidth="1.8"/>
      <line x1="296" y1="57"  x2="240" y2="151" stroke={tema.azul}   strokeWidth="2.8"/>
      <line x1="240" y1="151" x2="364" y2="151" stroke="rgba(240,236,227,0.35)" strokeWidth="1.8"/>
      <line x1="364" y1="151" x2="296" y2="57"  stroke="rgba(240,236,227,0.35)" strokeWidth="1.8"/>
      <text x="40"  y="108" fill={tema.azul} fontSize="13" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="end">AB=15</text>
      <text x="258" y="110" fill={tema.acento} fontSize="13" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="end">DE=?</text>
      <text x="95"  y="22"  fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="179" fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="202" y="179" fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">C</text>
      <text x="296" y="51"  fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="232" y="163" fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">E</text>
      <text x="368" y="163" fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>
      <text x="222" y="87"  fill="rgba(240,236,227,0.28)" fontSize="22" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
      <text x="222" y="111" fill="rgba(240,236,227,0.55)" fontSize="17" fontWeight="700" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">k = 3</text>
    </svg>
  );
}
