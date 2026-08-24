// Diagrama «grafo-bv» — espanol.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function GrafoBVSVG({ tema }) {
  const az = tema.azul, ac = tema.acento;
  const bExamples = ["barco", "bello", "cambio", "hablar", "cantaba", "escribir"];
  const vExamples = ["vaca", "vivir", "enviar", "invitar", "nueva", "tuvo"];
  return (
    <svg viewBox="0 0 520 140" width="100%" style={{ display: "block" }}>
      {/* Central phoneme node */}
      <rect x="195" y="5" width="130" height="36" rx="10" fill={`${az}20`} stroke={az} strokeWidth="2"/>
      <text x="260" y="22" fill={az} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" fontWeight="700" textAnchor="middle">/b/</text>
      <text x="260" y="35" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">oclusiva bilabial sonora</text>

      {/* Left branch: B */}
      <line x1="210" y1="41" x2="130" y2="63" stroke={`${az}70`} strokeWidth="1.5"/>
      <rect x="50" y="63" width="155" height="73" rx="6" fill={`${az}12`} stroke={`${az}50`} strokeWidth="1.3"/>
      <text x="128" y="79" fill={az} fontSize="20" fontFamily="Georgia,serif" fontWeight="700" textAnchor="middle">b</text>
      <line x1="56" y1="82" x2="196" y2="82" stroke={`${az}22`} strokeWidth="1"/>
      {bExamples.map((ex, j) => (
        <text key={j} x={70 + (j % 2) * 77} y={96 + Math.floor(j / 2) * 14} fill={tema.sub} fontSize="8.5" fontFamily="Georgia,serif" fontStyle="italic">{ex}</text>
      ))}

      {/* Right branch: V */}
      <line x1="310" y1="41" x2="390" y2="63" stroke={`${ac}70`} strokeWidth="1.5"/>
      <rect x="315" y="63" width="155" height="73" rx="6" fill={`${ac}12`} stroke={`${ac}50`} strokeWidth="1.3"/>
      <text x="393" y="79" fill={ac} fontSize="20" fontFamily="Georgia,serif" fontWeight="700" textAnchor="middle">v</text>
      <line x1="321" y1="82" x2="463" y2="82" stroke={`${ac}22`} strokeWidth="1"/>
      {vExamples.map((ex, j) => (
        <text key={j} x={333 + (j % 2) * 77} y={96 + Math.floor(j / 2) * 14} fill={tema.sub} fontSize="8.5" fontFamily="Georgia,serif" fontStyle="italic">{ex}</text>
      ))}

      {/* Note at bottom */}
      <text x="260" y="135" fill={tema.muted} fontSize="8" fontFamily="'DM Sans',sans-serif" textAnchor="middle">En español mexicano: /b/ y /v/ suenan igual — la distinción es solo ortográfica</text>
    </svg>
  );
}
