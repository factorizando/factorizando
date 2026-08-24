// Diagrama «grafo-ck» — espanol.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function GrafoCKSVG({ tema }) {
  const az = tema.azul, vd = tema.verde, ac = tema.acento;
  const cols = [
    {
      letter: "c",
      color: az,
      rule: "Antes de A, O, U",
      sub: "(o ante consonante)",
      examples: ["ca-sa", "co-lor", "cu-bo", "cla-ro", "cre-ma"],
    },
    {
      letter: "qu",
      color: vd,
      rule: "Antes de E, I",
      sub: "(u siempre muda)",
      examples: ["que-so", "quien", "quie-ro", "que-dar", "tran-qui-lo"],
    },
    {
      letter: "k",
      color: ac,
      rule: "Préstamos extranjeros",
      sub: "(o siglas/nombres)",
      examples: ["ki-ló-me-tro", "ká-ra-te", "kiwi", "km", "ka-ra-o-ke"],
    },
  ];
  const colW = 162, gap = 5, startX = 5;
  return (
    <svg viewBox="0 0 520 145" width="100%" style={{ display: "block" }}>
      <text x="260" y="12" fill={tema.muted} fontSize="8" fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.14em" fontWeight="600">EL FONEMA /k/ — TRES REPRESENTACIONES GRÁFICAS</text>
      {cols.map(({ letter, color, rule, sub, examples }, i) => {
        const x = startX + i * (colW + gap);
        return (
          <g key={i}>
            <rect x={x} y="16" width={colW} height="126" rx="6" fill={`${color}10`} stroke={`${color}45`} strokeWidth="1.3"/>
            <rect x={x} y="16" width={colW} height="22" rx="6" fill={`${color}25`}/>
            <rect x={x} y="30" width={colW} height="8" fill={`${color}25`}/>
            <text x={x + colW / 2} y="32" fill={color} fontSize="9" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">{rule}</text>
            <text x={x + colW / 2} y="42" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">{sub}</text>
            <text x={x + colW / 2} y="68" fill={color} fontSize="28" fontFamily="Georgia,serif" fontWeight="700" textAnchor="middle">{letter}</text>
            <line x1={x + 10} y1="78" x2={x + colW - 10} y2="78" stroke={`${color}22`} strokeWidth="1"/>
            {examples.map((ex, j) => (
              <text key={j} x={x + colW / 2} y={92 + j * 13} fill={tema.sub} fontSize="8.5" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{ex}</text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}
