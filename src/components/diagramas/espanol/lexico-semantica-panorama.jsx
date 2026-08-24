// Diagrama «lexico-semantica-panorama» — espanol.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function LexicoSemanticaPanoramaSVG({ tema }) {
  const sinItems = ["Total", "Parcial", "Contextual"];
  const antItems = ["Gradual", "Complementaria", "Recíproca"];
  return (
    <svg viewBox="0 0 520 158" width="100%" style={{ display: "block" }}>
      <rect x="110" y="3" width="300" height="28" rx="7" fill={`${tema.acento}18`} stroke={tema.acento} strokeWidth="1.5"/>
      <text x="260" y="21" fill={tema.acento} fontSize="9.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">COHESIÓN LÉXICO-SEMÁNTICA</text>
      <line x1="190" y1="31" x2="110" y2="54" stroke={`${tema.azul}88`} strokeWidth="1.5" strokeDasharray="4,2"/>
      <line x1="330" y1="31" x2="410" y2="54" stroke={`${tema.acento}88`} strokeWidth="1.5" strokeDasharray="4,2"/>
      <line x1="260" y1="31" x2="260" y2="108" stroke={`${tema.verde}88`} strokeWidth="1.5" strokeDasharray="4,2"/>
      <rect x="40" y="54" width="140" height="26" rx="6" fill={`${tema.azul}18`} stroke={tema.azul} strokeWidth="1.5"/>
      <text x="110" y="71" fill={tema.azul} fontSize="9.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.06em">SINONIMIA</text>
      <rect x="340" y="54" width="140" height="26" rx="6" fill={`${tema.acento}18`} stroke={tema.acento} strokeWidth="1.5"/>
      <text x="410" y="71" fill={tema.acento} fontSize="9.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.06em">ANTONIMIA</text>
      <rect x="178" y="108" width="164" height="26" rx="6" fill={`${tema.verde}18`} stroke={tema.verde} strokeWidth="1.5"/>
      <text x="260" y="125" fill={tema.verde} fontSize="9.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.06em">CAMPO SEMÁNTICO</text>
      <line x1="56" y1="80" x2="56" y2="150" stroke={`${tema.azul}50`} strokeWidth="1.2"/>
      {sinItems.map((item, i) => (
        <g key={i}>
          <line x1="56" y1={91 + i * 19} x2="66" y2={91 + i * 19} stroke={`${tema.azul}50`} strokeWidth="1.2"/>
          <circle cx="71" cy={91 + i * 19} r="2.5" fill={tema.azul} opacity="0.6"/>
          <text x="78" y={95 + i * 19} fill={tema.sub} fontSize="9" fontFamily="'DM Sans',sans-serif">{item}</text>
        </g>
      ))}
      <line x1="356" y1="80" x2="356" y2="150" stroke={`${tema.acento}50`} strokeWidth="1.2"/>
      {antItems.map((item, i) => (
        <g key={i}>
          <line x1="356" y1={91 + i * 19} x2="366" y2={91 + i * 19} stroke={`${tema.acento}50`} strokeWidth="1.2"/>
          <circle cx="371" cy={91 + i * 19} r="2.5" fill={tema.acento} opacity="0.6"/>
          <text x="378" y={95 + i * 19} fill={tema.sub} fontSize="9" fontFamily="'DM Sans',sans-serif">{item}</text>
        </g>
      ))}
      <text x="260" y="148" fill={tema.sub} fontSize="8.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">Hiperonimia · Hiponimia · Cohiponimia</text>
    </svg>
  );
}
