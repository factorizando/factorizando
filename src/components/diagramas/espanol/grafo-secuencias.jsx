// Diagrama «grafo-secuencias» — espanol.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function GrafoSecuenciasSVG({ tema }) {
  const az = tema.azul, vd = tema.verde, ac = tema.acento;
  const secs = [
    {
      label: "QUE / QUI",
      color: az,
      uStatus: "U MUDA",
      uPronounced: false,
      sound: "/ke/ · /ki/",
      examples: [["que-so", "/ke-so/"], ["quien", "/kjen/"], ["quie-ro", "/kje-ro/"]],
    },
    {
      label: "GUE / GUI",
      color: vd,
      uStatus: "U MUDA",
      uPronounced: false,
      sound: "/ge/ · /gi/",
      examples: [["gue-rra", "/ge-rra/"], ["guiar", "/gjar/"], ["gui-ta-rra", "/gi/"]],
    },
    {
      label: "GÜE / GÜI",
      color: ac,
      uStatus: "U PRONUNCIADA",
      uPronounced: true,
      sound: "/gwe/ · /gwi/",
      examples: [["ver-güen-za", "/gwen/"], ["pin-güi-no", "/gwi/"], ["agüita", "/gwi/"]],
    },
  ];
  const colW = 162, gap = 5, startX = 5;
  return (
    <svg viewBox="0 0 520 138" width="100%" style={{ display: "block" }}>
      <text x="260" y="11" fill={tema.muted} fontSize="8" fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.14em" fontWeight="600">SECUENCIAS CON U: MUDA VS. PRONUNCIADA</text>
      {secs.map(({ label, color, uStatus, uPronounced, sound, examples }, i) => {
        const x = startX + i * (colW + gap);
        return (
          <g key={i}>
            <rect x={x} y="16" width={colW} height="120" rx="6" fill={`${color}10`} stroke={`${color}45`} strokeWidth="1.3"/>
            <rect x={x} y="16" width={colW} height="22" rx="6" fill={`${color}25`}/>
            <rect x={x} y="30" width={colW} height="8" fill={`${color}25`}/>
            <text x={x + colW / 2} y="32" fill={color} fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">{label}</text>
            {/* U status badge */}
            <rect x={x + 18} y="42" width={colW - 36} height="15" rx="4" fill={uPronounced ? `${color}35` : `rgba(255,255,255,0.06)`} stroke={color} strokeWidth="1"/>
            <text x={x + colW / 2} y="53.5" fill={uPronounced ? color : tema.muted} fontSize="8" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">{uStatus}</text>
            {/* Sound */}
            <text x={x + colW / 2} y="69" fill={color} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{sound}</text>
            <line x1={x + 10} y1="75" x2={x + colW - 10} y2="75" stroke={`${color}22`} strokeWidth="1"/>
            {/* Examples */}
            {examples.map(([word, pron], j) => (
              <g key={j}>
                <text x={x + colW / 2} y={89 + j * 17} fill={tema.texto} fontSize="9" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{word}</text>
                <text x={x + colW / 2} y={100 + j * 17} fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">{pron}</text>
              </g>
            ))}
          </g>
        );
      })}
    </svg>
  );
}
