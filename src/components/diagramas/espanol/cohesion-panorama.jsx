// Diagrama «cohesion-panorama» — espanol.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function CohesionPanoramaSVG({ tema }) {
  const leftItems = ["Pron. personales", "Pron. demostrativos", "Pron. relativos", "Sustitución léxica"];
  const rightItems = ["Elipsis nominal", "Elipsis verbal", "Elipsis oracional"];
  return (
    <svg viewBox="0 0 520 155" width="100%" style={{ display: "block" }}>
      <rect x="135" y="3" width="250" height="28" rx="7" fill={`${tema.acento}18`} stroke={tema.acento} strokeWidth="1.5"/>
      <text x="260" y="21" fill={tema.acento} fontSize="10.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">COHESIÓN GRAMATICAL</text>
      <line x1="192" y1="31" x2="115" y2="54" stroke={`${tema.azul}88`} strokeWidth="1.5" strokeDasharray="4,2"/>
      <line x1="328" y1="31" x2="405" y2="54" stroke={`${tema.verde}88`} strokeWidth="1.5" strokeDasharray="4,2"/>
      <rect x="50" y="54" width="130" height="26" rx="6" fill={`${tema.azul}18`} stroke={tema.azul} strokeWidth="1.5"/>
      <text x="115" y="71" fill={tema.azul} fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.06em">CORREFERENCIA</text>
      <rect x="340" y="54" width="130" height="26" rx="6" fill={`${tema.verde}18`} stroke={tema.verde} strokeWidth="1.5"/>
      <text x="405" y="71" fill={tema.verde} fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.06em">REL. ELÍPTICAS</text>
      <line x1="66" y1="80" x2="66" y2="148" stroke={`${tema.azul}50`} strokeWidth="1.2"/>
      {leftItems.map((item, i) => (
        <g key={i}>
          <line x1="66" y1={91 + i * 19} x2="76" y2={91 + i * 19} stroke={`${tema.azul}50`} strokeWidth="1.2"/>
          <circle cx="81" cy={91 + i * 19} r="2.5" fill={tema.azul} opacity="0.6"/>
          <text x="88" y={95 + i * 19} fill={tema.sub} fontSize="9" fontFamily="'DM Sans',sans-serif">{item}</text>
        </g>
      ))}
      <line x1="356" y1="80" x2="356" y2="130" stroke={`${tema.verde}50`} strokeWidth="1.2"/>
      {rightItems.map((item, i) => (
        <g key={i}>
          <line x1="356" y1={91 + i * 19} x2="366" y2={91 + i * 19} stroke={`${tema.verde}50`} strokeWidth="1.2"/>
          <circle cx="371" cy={91 + i * 19} r="2.5" fill={tema.verde} opacity="0.6"/>
          <text x="378" y={95 + i * 19} fill={tema.sub} fontSize="9" fontFamily="'DM Sans',sans-serif">{item}</text>
        </g>
      ))}
    </svg>
  );
}
