// Diagrama «sinonimia-tipos» — espanol.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function SinonimiasTiposSVG({ tema }) {
  const cols = [
    { label: "TOTAL",       color: tema.azul,   desc: ["Idéntico en todos", "los contextos"],       ex: ["comenzar / iniciar", "automóvil / coche"] },
    { label: "PARCIAL",     color: tema.canal(1),  desc: ["Similar con matices", "de registro"],       ex: ["casa / hogar", "morir / fallecer"] },
    { label: "CONTEXTUAL",  color: tema.acento, desc: ["Equivalente solo", "en este fragmento"],    ex: ["«el sol» / «astro rey»", "«Newton» / «el físico»"] },
  ];
  const colW = 160, gap = 10, startX = 5;
  return (
    <svg viewBox="0 0 520 138" width="100%" style={{ display: "block" }}>
      <defs>
        <linearGradient id="ls-sinGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor={tema.azul}   stopOpacity="0.8"/>
          <stop offset="50%"  stopColor={tema.canal(1)}  stopOpacity="0.8"/>
          <stop offset="100%" stopColor={tema.acento} stopOpacity="0.8"/>
        </linearGradient>
      </defs>
      <rect x="5" y="2" width="510" height="5" rx="2.5" fill="url(#ls-sinGrad)"/>
      <text x="5"   y="16" fill={tema.azul}   fontSize="7" fontFamily="'Figtree', system-ui, sans-serif" letterSpacing="0.08em" fontWeight="700">IDENTIDAD SEMÁNTICA ←</text>
      <text x="515" y="16" fill={tema.acento} fontSize="7" fontFamily="'Figtree', system-ui, sans-serif" letterSpacing="0.08em" fontWeight="700" textAnchor="end">→ EQUIVALENCIA CONTEXTUAL</text>
      {cols.map((col, i) => {
        const x = startX + i * (colW + gap);
        return (
          <g key={i}>
            <rect x={x} y="20" width={colW} height="116" rx="7" fill={`${col.color}10`} stroke={`${col.color}55`} strokeWidth="1.5"/>
            <rect x={x} y="20" width={colW} height="22" rx="7" fill={`${col.color}25`}/>
            <rect x={x} y="34" width={colW} height="8" fill={`${col.color}25`}/>
            <text x={x + colW / 2} y="35" fill={col.color} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.12em">{col.label}</text>
            {col.desc.map((line, j) => (
              <text key={j} x={x + colW / 2} y={56 + j * 13} fill={tema.sub} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">{line}</text>
            ))}
            <line x1={x + 10} y1="84" x2={x + colW - 10} y2="84" stroke={`${col.color}30`} strokeWidth="1"/>
            {col.ex.map((e, j) => (
              <text key={j} x={x + colW / 2} y={98 + j * 16} fill={col.color} fontSize="8.5" fontFamily="Georgia,serif" textAnchor="middle" fontStyle="italic">{e}</text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}
