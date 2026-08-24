// Diagrama «bq-portada» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function BqPortadaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted;
  // hexágono tipo molécula con nodos
  const cx = 110, cy = 70, r = 38;
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const ang = Math.PI / 6 + i * Math.PI / 3;
    pts.push([cx + r * Math.cos(ang), cy + r * Math.sin(ang)]);
  }
  return (
    <svg viewBox="0 0 220 140" width="100%" style={{ display: "block", maxHeight: 140, maxWidth: 280 }}>
      <polygon points={pts.map(p => p.join(",")).join(" ")} fill="rgba(52,211,153,0.06)" stroke={a} strokeWidth="2" />
      {pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={6} fill={a} opacity="0.55" stroke={a} strokeWidth="1.5" />)}
      <line x1={cx} y1={cy} x2={pts[0][0]} y2={pts[0][1]} stroke={bl} strokeWidth="1.4" />
      <line x1={cx} y1={cy} x2={pts[3][0]} y2={pts[3][1]} stroke={bl} strokeWidth="1.4" />
      <circle cx={cx} cy={cy} r={7} fill={bl} opacity="0.6" />
      <text x={cx} y={128} textAnchor="middle" fill={mu} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif">las moléculas y la energía de la vida</text>
    </svg>
  );
}
