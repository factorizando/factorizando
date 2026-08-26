// Diagrama «ter-portada» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function TerPortadaSVG({ tema }) {
  const rj = tema.canal(2), mu = tema.muted;
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 132, maxWidth: 320 }}>
      <rect x={118} y={16} width={14} height={76} rx={7} fill={tema.card} stroke={mu} strokeWidth="1.6" />
      <rect x={121} y={48} width={8} height={46} fill={rj} />
      <circle cx={125} cy={98} r={15} fill={rj} stroke={mu} strokeWidth="1.6" />
      {[28, 42, 56, 70].map((y) => (
        <line key={y} x1={134} y1={y} x2={143} y2={y} stroke={mu} strokeWidth="1.2" />
      ))}
    </svg>
  );
}
