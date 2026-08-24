// Diagrama «complemento» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function ComplementoSVG({ tema }) {
  const a = tema.acento, bl = tema.azul;
  return (
    <svg viewBox="0 0 250 140" width="100%" style={{ display: "block", maxHeight: 150 }}>
      <rect x="10" y="18" width="230" height="104" rx="8" fill={tema.azulSuave} stroke={bl} strokeWidth="1.6"/>
      <text x="228" y="36" fill={bl} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">Ω</text>
      <circle cx="80" cy="72" r="42" fill={`${a}33`} stroke={a} strokeWidth="2"/>
      <text x="80" y="78" fill={a} fontSize="17" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="180" y="98" fill={bl} fontSize="16" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E′</text>
      <text x="180" y="115" fill={tema.muted} fontSize="9.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">«E no ocurre»</text>
    </svg>
  );
}
