// Diagrama «grafo-panorama» — espanol.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function GrafoPanoramaSVG({ tema }) {
  const az = tema.azul, vd = tema.verde, ac = tema.acento;
  const purple = "#c084fc", orange = "#fb923c";

  // 5 vowel pills — cada una 43px de ancho, 4px de separación, inicio x=12
  const vowels = [
    { label: "/a/ → a", color: az     },
    { label: "/e/ → e", color: vd     },
    { label: "/i/ → i", color: ac     },
    { label: "/o/ → o", color: purple },
    { label: "/u/ → u", color: orange },
  ];
  const pillW = 43, pillGap = 4, pillStartX = 12;

  // 5 líneas de fonemas consonánticos
  const cLines = [
    { color: az,     text: "/b/ → b, v  (barco · vaca)" },
    { color: vd,     text: "/k/ → c, k, qu  (casa · queso · kilo)" },
    { color: ac,     text: "/x/ → j, g(e,i)  (jefe · gente)" },
    { color: purple, text: "/s/ → s, z, c(e,i)  (seseo mexicano)" },
    { color: orange, text: "/rr/ → rr (carro) · r (rosa, enredar)" },
  ];

  return (
    <svg viewBox="0 0 520 145" width="100%" style={{ display: "block" }}>

      {/* ── Cabecera central ── */}
      <rect x="130" y="3" width="260" height="26" rx="6" fill={`${ac}18`} stroke={ac} strokeWidth="1.5"/>
      <text x="260" y="19" fill={ac} fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.12em">GRAFOFONÉTICA</text>
      <text x="260" y="30" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">fonema (sonido) → grafema (letra o combinación)</text>

      {/* Conectores de cabecera → columnas */}
      <line x1="180" y1="29" x2="128" y2="34" stroke={`${az}70`} strokeWidth="1.2" strokeDasharray="3,2"/>
      <line x1="340" y1="29" x2="392" y2="34" stroke={`${vd}70`} strokeWidth="1.2" strokeDasharray="3,2"/>

      {/* ── Columna izquierda: VOCÁLICOS (x=4 a x=252) ── */}
      <rect x="4" y="34" width="248" height="107" rx="6" fill={`${az}08`} stroke={`${az}40`} strokeWidth="1.2"/>
      {/* Encabezado columna */}
      <rect x="4" y="34" width="248" height="20" rx="6" fill={`${az}22`}/>
      <rect x="4" y="46" width="248" height="8" fill={`${az}22`}/>
      <text x="128" y="48" fill={az} fontSize="8.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">FONEMAS VOCÁLICOS</text>
      <text x="128" y="60" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">correspondencia 1 : 1 — sin ambigüedad</text>

      {/* 5 pills vocálicos */}
      {vowels.map(({ label, color }, i) => {
        const px = pillStartX + i * (pillW + pillGap);
        return (
          <g key={i}>
            <rect x={px} y="68" width={pillW} height="17" rx="4" fill={`${color}18`} stroke={`${color}55`} strokeWidth="1"/>
            <text x={px + pillW / 2} y="80" fill={color} fontSize="8" fontFamily="'DM Sans',sans-serif" textAnchor="middle" fontWeight="600">{label}</text>
          </g>
        );
      })}

      <text x="128" y="104" fill={tema.sub} fontSize="8" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">a · e · i · o · u</text>
      <text x="128" y="117" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">cada vocal tiene una sola letra</text>
      <text x="128" y="129" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">la y puede ser vocal /i/ al final de diptongo</text>

      {/* ── Columna derecha: CONSONÁNTICOS (x=260 a x=516) ── */}
      <rect x="260" y="34" width="256" height="107" rx="6" fill={`${vd}08`} stroke={`${vd}40`} strokeWidth="1.2"/>
      {/* Encabezado columna */}
      <rect x="260" y="34" width="256" height="20" rx="6" fill={`${vd}22`}/>
      <rect x="260" y="46" width="256" height="8" fill={`${vd}22`}/>
      <text x="388" y="48" fill={vd} fontSize="8.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">FONEMAS CONSONÁNTICOS</text>
      <text x="388" y="60" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">representación múltiple — aquí está la dificultad</text>

      {/* 5 líneas de pares fonema → grafemas */}
      {cLines.map(({ color, text }, i) => (
        <g key={i}>
          <circle cx="270" cy={72 + i * 14} r="2.5" fill={color} opacity="0.7"/>
          <text x="278" y={76 + i * 14} fill={tema.sub} fontSize="8.5" fontFamily="'DM Sans',sans-serif">{text}</text>
        </g>
      ))}
    </svg>
  );
}
