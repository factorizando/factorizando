// Diagrama «grafo-gj» — espanol.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function GrafoGJSVG({ tema }) {
  const az = tema.azul, ac = tema.acento;
  const jExamples = ["jamón", "jefe", "jirafa", "joven", "jugo", "viaje"];
  const gExamples = ["gente", "girasol", "agente", "mágico", "urgente", "ágil"];
  return (
    <svg viewBox="0 0 520 148" width="100%" style={{ display: "block" }}>
      {/* Central phoneme */}
      <rect x="190" y="4" width="140" height="36" rx="10" fill={`${ac}20`} stroke={ac} strokeWidth="2"/>
      <text x="260" y="22" fill={ac} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" fontWeight="700" textAnchor="middle">/x/</text>
      <text x="260" y="35" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">fricativa velar sorda (la «jota»)</text>

      {/* Left: J */}
      <line x1="215" y1="40" x2="130" y2="62" stroke={`${az}70`} strokeWidth="1.5"/>
      <rect x="48" y="62" width="166" height="82" rx="6" fill={`${az}12`} stroke={`${az}50`} strokeWidth="1.3"/>
      <text x="131" y="81" fill={az} fontSize="22" fontFamily="Georgia,serif" fontWeight="700" textAnchor="middle">j</text>
      <rect x="56" y="85" width="150" height="16" rx="4" fill={`${az}20`}/>
      <text x="131" y="97" fill={az} fontSize="8" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">ANTES DE CUALQUIER VOCAL</text>
      <text x="131" y="109" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">ja · je · ji · jo · ju</text>
      {jExamples.map((ex, j) => (
        <text key={j} x={65 + (j % 3) * 52} y={123 + Math.floor(j / 3) * 14} fill={tema.sub} fontSize="8" fontFamily="Georgia,serif" fontStyle="italic">{ex}</text>
      ))}

      {/* Right: G */}
      <line x1="305" y1="40" x2="390" y2="62" stroke={`${ac}70`} strokeWidth="1.5"/>
      <rect x="306" y="62" width="166" height="82" rx="6" fill={`${ac}12`} stroke={`${ac}50`} strokeWidth="1.3"/>
      <text x="389" y="81" fill={ac} fontSize="22" fontFamily="Georgia,serif" fontWeight="700" textAnchor="middle">g</text>
      <rect x="314" y="85" width="150" height="16" rx="4" fill={`${ac}20`}/>
      <text x="389" y="97" fill={ac} fontSize="8" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">SOLO ANTES DE E O I</text>
      <text x="389" y="109" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">g+e · g+i (ante a/o/u → /g/ distinto)</text>
      {gExamples.map((ex, j) => (
        <text key={j} x={323 + (j % 3) * 52} y={123 + Math.floor(j / 3) * 14} fill={tema.sub} fontSize="8" fontFamily="Georgia,serif" fontStyle="italic">{ex}</text>
      ))}

      <text x="260" y="146" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">gato · gol · gusto → fonema /g/, NO /x/ — ante a/o/u, g nunca suena como jota</text>
    </svg>
  );
}
