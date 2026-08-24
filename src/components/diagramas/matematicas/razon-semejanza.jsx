// Diagrama «razon-semejanza» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function RazonSemejanzaSVG({ tema }) {
  // Big triangle △ABC, small triangle △DEF (k = 2)
  // D = E + 0.5*(A − B) ensuring DEF ∼ ABC with k = 2
  // Big: A(85,20) B(10,170) C(170,170)  →  base BC = 160, height = 150
  // Small: D(310,95) E(273,170) F(353,170) →  base EF = 80, height = 75

  return (
    <svg viewBox="0 0 490 200" width="100%" style={{ maxHeight: 180, display: "block" }}>
      {/* Triangle fills */}
      <polygon points="85,20 10,170 170,170" fill={tema.azulSuave} stroke="none"/>
      <polygon points="310,95 273,170 353,170" fill={tema.azulSuave} stroke="none"/>

      {/* Sides: AB/DE = azul, BC/EF = verde, CA/FD = acento */}
      <line x1="85" y1="20" x2="10"  y2="170" stroke={tema.azul}   strokeWidth="2.5" opacity="0.85"/>
      <line x1="310" y1="95" x2="273" y2="170" stroke={tema.azul}   strokeWidth="2.5" opacity="0.85"/>
      <line x1="10"  y1="170" x2="170" y2="170" stroke={tema.verde}  strokeWidth="2.5" opacity="0.85"/>
      <line x1="273" y1="170" x2="353" y2="170" stroke={tema.verde}  strokeWidth="2.5" opacity="0.85"/>
      <line x1="170" y1="170" x2="85"  y2="20"  stroke={tema.acento} strokeWidth="2.5" opacity="0.85"/>
      <line x1="353" y1="170" x2="310" y2="95"  stroke={tema.acento} strokeWidth="2.5" opacity="0.85"/>

      {/* Side labels — big triangle */}
      <text x="36"  y="90"  fill={tema.azul}   fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">2a</text>
      <text x="90"  y="186" fill={tema.verde}  fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">2b</text>
      <text x="139" y="89"  fill={tema.acento} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">2c</text>

      {/* Side labels — small triangle */}
      <text x="283" y="128" fill={tema.azul}   fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">a</text>
      <text x="313" y="186" fill={tema.verde}  fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">b</text>
      <text x="341" y="128" fill={tema.acento} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">c</text>

      {/* Vertex labels */}
      <text x="85"  y="12"  fill={tema.azul}   fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="1"   y="178" fill={tema.verde}  fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="175" y="178" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">C</text>
      <text x="310" y="87"  fill={tema.azul}   fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="261" y="182" fill={tema.verde}  fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">E</text>
      <text x="357" y="182" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>

      {/* k = 2a/a = 2b/b = 2c/c = 2 */}
      <text x="213" y="97"  fill="rgba(240,236,227,0.50)" fontSize="22" fontWeight="700" fontFamily="'DM Sans',sans-serif" textAnchor="middle">k = 2</text>
      <text x="213" y="115" fill="rgba(240,236,227,0.22)" fontSize="10.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.08em">2a/a = 2b/b = 2c/c</text>
    </svg>
  );
}
