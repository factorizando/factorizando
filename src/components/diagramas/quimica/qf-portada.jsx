// Diagrama «qf-portada» — quimica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function QfPortadaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted;
  return (
    <svg viewBox="0 0 220 140" width="100%" style={{ display: "block", maxHeight: 140, maxWidth: 280 }}>
      {/* núcleo + órbitas (átomo) */}
      <ellipse cx={110} cy={70} rx={48} ry={20} fill="none" stroke={a} strokeWidth="1.4" opacity="0.6" />
      <ellipse cx={110} cy={70} rx={48} ry={20} fill="none" stroke={bl} strokeWidth="1.4" opacity="0.6" transform="rotate(60 110 70)" />
      <ellipse cx={110} cy={70} rx={48} ry={20} fill="none" stroke={a} strokeWidth="1.4" opacity="0.6" transform="rotate(120 110 70)" />
      <circle cx={110} cy={70} r={11} fill="rgba(192,132,252,0.25)" stroke={a} strokeWidth="2" />
      <circle cx={158} cy={70} r={3.5} fill={bl} />
      <circle cx={86} cy={42} r={3.5} fill={a} />
      <circle cx={86} cy={98} r={3.5} fill={bl} />
      <text x={110} y={128} textAnchor="middle" fill={mu} fontSize="8.5" fontFamily="'DM Sans',sans-serif">de qué está hecha la materia</text>
    </svg>
  );
}
