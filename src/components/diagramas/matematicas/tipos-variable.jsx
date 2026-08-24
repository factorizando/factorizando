// Diagrama «tipos-variable» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function TiposVariableSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted;
  const caja = (cx, cy, w, label, color) => (
    <g>
      <rect x={cx - w / 2} y={cy - 14} width={w} height={28} rx={7} fill={tema.card} stroke={color} strokeWidth="1.6" />
      <text x={cx} y={cy + 5} fill={color} fontSize="12.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600" textAnchor="middle">{label}</text>
    </g>
  );
  const ln = (x1, y1, x2, y2) => <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={mu} strokeWidth="1.4" opacity="0.5" />;
  const ej = (x, label) => <text x={x} y="159" fill={mu} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">{label}</text>;
  return (
    <svg viewBox="0 0 380 172" width="100%" style={{ display: "block", maxHeight: 184 }}>
      {ln(190, 32, 94, 58)}
      {ln(190, 32, 286, 58)}
      {ln(94, 86, 46, 116)}
      {ln(94, 86, 142, 116)}
      {ln(286, 86, 238, 116)}
      {ln(286, 86, 334, 116)}
      {caja(190, 18, 96, "Variable", a)}
      {caja(94, 72, 116, "Cualitativa", bl)}
      {caja(286, 72, 124, "Cuantitativa", a)}
      {caja(46, 130, 84, "Nominal", bl)}
      {caja(142, 130, 84, "Ordinal", bl)}
      {caja(238, 130, 84, "Discreta", a)}
      {caja(334, 130, 84, "Continua", a)}
      {ej(46, "color, sexo")}
      {ej(142, "escolaridad")}
      {ej(238, "nº de hijos")}
      {ej(334, "peso, tiempo")}
    </svg>
  );
}
