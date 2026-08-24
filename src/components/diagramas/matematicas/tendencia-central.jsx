// Diagrama «tendencia-central» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function TendenciaCentralSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, gr = tema.verde, mu = tema.muted;
  const X = (v) => 24 + v * 27.6;
  const axisY = 60;
  const datos = [2, 2, 6, 7, 8];
  const counts = {};
  const marcas = [
    { v: 2, y: 80, c: a, l: "moda = 2" },
    { v: 5, y: 100, c: bl, l: "media = 5" },
    { v: 6, y: 120, c: gr, l: "mediana = 6" },
  ];
  return (
    <svg viewBox="0 0 320 140" width="100%" style={{ display: "block", maxHeight: 150 }}>
      <line x1={X(0)} y1={axisY} x2={X(10)} y2={axisY} stroke={tema.border} strokeWidth="1.5" />
      {[0, 2, 4, 6, 8, 10].map((t) => (
        <g key={t}>
          <line x1={X(t)} y1={axisY - 4} x2={X(t)} y2={axisY + 4} stroke={mu} strokeWidth="1" />
          <text x={X(t)} y={axisY + 16} fill={mu} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">{t}</text>
        </g>
      ))}
      {datos.map((v, i) => {
        counts[v] = (counts[v] || 0) + 1;
        const cy = axisY - 12 - (counts[v] - 1) * 13;
        return <circle key={i} cx={X(v)} cy={cy} r="5.5" fill={tema.acentoMed} stroke={a} strokeWidth="1.6" />;
      })}
      {marcas.map((m, i) => (
        <g key={i}>
          <line x1={X(m.v)} y1={axisY} x2={X(m.v)} y2={m.y} stroke={m.c} strokeWidth="1.6" strokeDasharray="3 3" />
          <circle cx={X(m.v)} cy={axisY} r="3.5" fill={m.c} />
          <text x={X(m.v)} y={m.y + 11} fill={m.c} fontSize="11" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600" textAnchor="middle">{m.l}</text>
        </g>
      ))}
    </svg>
  );
}
