// Diagrama «escala-probabilidad» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function EscalaProbabilidadSVG({ tema }) {
  const a = tema.acento, gr = tema.canal(1), rj = tema.canal(2);
  const x0 = 40, x1 = 280, y = 56;
  const X = (f) => x0 + f * (x1 - x0);
  const ticks = [0, 0.25, 0.5, 0.75, 1];
  return (
    <svg viewBox="0 0 320 104" width="100%" style={{ display: "block", maxHeight: 120 }}>
      <defs>
        <linearGradient id="prob-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={rj}/>
          <stop offset="50%" stopColor={a}/>
          <stop offset="100%" stopColor={gr}/>
        </linearGradient>
      </defs>
      <line x1={x0} y1={y} x2={x1} y2={y} stroke="url(#prob-grad)" strokeWidth="5" strokeLinecap="round"/>
      {ticks.map((f) => (
        <line key={f} x1={X(f)} y1={y - 7} x2={X(f)} y2={y + 7} stroke={tema.texto} strokeWidth="1.5" opacity="0.55"/>
      ))}
      <text x={X(0)} y={y + 24} fill={tema.texto} fontSize="13" fontFamily="Georgia,serif" textAnchor="middle">0</text>
      <text x={X(0.5)} y={y + 24} fill={tema.texto} fontSize="13" fontFamily="Georgia,serif" textAnchor="middle">½</text>
      <text x={X(1)} y={y + 24} fill={tema.texto} fontSize="13" fontFamily="Georgia,serif" textAnchor="middle">1</text>
      <text x={X(0)} y={y - 15} fill={rj} fontSize="11" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">imposible</text>
      <text x={X(0.5)} y={y - 15} fill={a} fontSize="11" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">50 / 50</text>
      <text x={X(1)} y={y - 15} fill={gr} fontSize="11" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">seguro</text>
    </svg>
  );
}
