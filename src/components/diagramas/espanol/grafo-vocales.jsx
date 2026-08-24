// Diagrama «grafo-vocales» — espanol.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function GrafoVocalesSVG({ tema }) {
  const az = tema.azul, vd = tema.verde, ac = tema.acento;
  const purple = "#c084fc", orange = "#fb923c";
  const vocales = [
    { phoneme: "/a/", letter: "a", color: az,     examples: "alma · casa · para" },
    { phoneme: "/e/", letter: "e", color: vd,     examples: "esto · leche · mesa" },
    { phoneme: "/i/", letter: "i", color: ac,     examples: "isla · vida · iris" },
    { phoneme: "/o/", letter: "o", color: purple, examples: "obra · color · boca" },
    { phoneme: "/u/", letter: "u", color: orange, examples: "uva · luna · fruta" },
  ];
  const colW = 100, gap = 4, startX = 5;
  return (
    <svg viewBox="0 0 520 118" width="100%" style={{ display: "block" }}>
      <text x="260" y="13" fill={tema.muted} fontSize="8" fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.14em" fontWeight="600">5 FONEMAS VOCÁLICOS — CORRESPONDENCIA BIUNÍVOCA</text>
      {vocales.map(({ phoneme, letter, color, examples }, i) => {
        const x = startX + i * (colW + gap);
        return (
          <g key={i}>
            <rect x={x} y="18" width={colW} height="96" rx="6" fill={`${color}10`} stroke={`${color}45`} strokeWidth="1.3"/>
            <rect x={x} y="18" width={colW} height="24" rx="6" fill={`${color}25`}/>
            <rect x={x} y="34" width={colW} height="8" fill={`${color}25`}/>
            <text x={x + colW / 2} y="35" fill={color} fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">{phoneme}</text>
            {/* Arrow */}
            <text x={x + colW / 2} y="56" fill={color} fontSize="16" textAnchor="middle" opacity="0.6">↓</text>
            {/* Grapheme */}
            <text x={x + colW / 2} y="80" fill={color} fontSize="26" fontFamily="Georgia,serif" textAnchor="middle" fontWeight="700">{letter}</text>
            {/* Examples */}
            <text x={x + colW / 2} y="99" fill={tema.muted} fontSize="7" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{examples.split(" · ")[0]}</text>
            <text x={x + colW / 2} y="109" fill={tema.muted} fontSize="7" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{examples.split(" · ")[1]}</text>
          </g>
        );
      })}
    </svg>
  );
}
