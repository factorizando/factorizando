// Diagrama «dispersion» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function DispersionSVG({ tema }) {
  const bl = tema.azul, gr = tema.canal(1), rj = tema.canal(2);
  const X = (v) => 20 + v * 17.5;
  const fila = (y, datos, color, label) => (
    <g>
      <line x1={X(0)} y1={y} x2={X(16)} y2={y} stroke={tema.border} strokeWidth="1.4" />
      {datos.map((v, i) => <circle key={i} cx={X(v)} cy={y} r="5" fill={`${color}33`} stroke={color} strokeWidth="1.6" />)}
      <text x={X(0)} y={y - 12} fill={color} fontSize="11" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">{label}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 320 150" width="100%" style={{ display: "block", maxHeight: 160 }}>
      <line x1={X(8)} y1={22} x2={X(8)} y2={130} stroke={bl} strokeWidth="1.6" strokeDasharray="5 4" />
      <text x={X(8)} y={16} fill={bl} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">media = 8</text>
      {fila(54, [6, 7, 8, 9, 10], gr, "poca dispersión")}
      {fila(110, [2, 5, 8, 11, 14], rj, "mucha dispersión")}
    </svg>
  );
}
