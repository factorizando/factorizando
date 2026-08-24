// Diagrama «ej-dos-monedas» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function DosMonedasSVG({ tema }) {
  const a = tema.acento;
  const outs = [["C", "C"], ["C", "X"], ["X", "C"], ["X", "X"]];
  return (
    <svg viewBox="0 0 280 92" width="100%" style={{ display: "block", maxHeight: 104 }}>
      {outs.map((o, i) => {
        const hi = o.includes("C");
        const x = 14 + i * 68;
        return (
          <g key={i}>
            <circle cx={x + 16} cy={38} r={16} fill={hi ? `${a}26` : tema.card} stroke={hi ? a : tema.border} strokeWidth="1.8"/>
            <text x={x + 16} y={43} fill={hi ? a : tema.muted} fontSize="15" fontFamily="Georgia,serif" textAnchor="middle">{o[0]}</text>
            <circle cx={x + 44} cy={38} r={16} fill={hi ? `${a}26` : tema.card} stroke={hi ? a : tema.border} strokeWidth="1.8"/>
            <text x={x + 44} y={43} fill={hi ? a : tema.muted} fontSize="15" fontFamily="Georgia,serif" textAnchor="middle">{o[1]}</text>
          </g>
        );
      })}
    </svg>
  );
}
