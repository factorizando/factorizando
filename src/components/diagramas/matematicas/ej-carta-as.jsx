// Diagrama «ej-carta-as» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function CartaAsSVG({ tema }) {
  const a = tema.acento, T = tema.texto;
  return (
    <svg viewBox="0 0 120 150" width="100%" style={{ display: "block", maxHeight: 158, maxWidth: 130 }}>
      <rect x="14" y="10" width="92" height="130" rx="10" fill={tema.card} stroke={a} strokeWidth="2.5"/>
      <text x="30" y="36" fill={T} fontSize="20" fontFamily="Georgia,serif" textAnchor="middle">A</text>
      <text x="60" y="94" fill={T} fontSize="46" textAnchor="middle">♠</text>
      <text x="90" y="124" fill={T} fontSize="20" fontFamily="Georgia,serif" textAnchor="middle" transform="rotate(180 90 117)">A</text>
    </svg>
  );
}
