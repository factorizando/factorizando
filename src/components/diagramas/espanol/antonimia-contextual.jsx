// Diagrama «antonimia-contextual» — espanol.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function AntonimiaContextualSVG({ tema }) {
  const az = tema.azul, vd = tema.verde, ac = tema.acento;
  return (
    <svg viewBox="0 0 520 118" width="100%" style={{ display: "block" }}>
      <text x="260" y="12" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.14em" fontWeight="600">EL ANTÓNIMO ES RELATIVO AL MARCO DE REFERENCIA</text>
      {/* Left box */}
      <rect x="5" y="18" width="230" height="96" rx="7" fill={`${az}10`} stroke={`${az}44`} strokeWidth="1.5"/>
      <text x="120" y="34" fill={az} fontSize="8.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">ESCALA: ELEFANTES</text>
      <text x="120" y="53" fill={tema.sub}  fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">«un elefante</text>
      <text x="120" y="68" fill={az}        fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" fontWeight="700" textAnchor="middle">pequeño»</text>
      <text x="120" y="87" fill={tema.muted} fontSize="8" fontFamily="'DM Sans',sans-serif" textAnchor="middle">≈ 3 metros de altura</text>
      <text x="120" y="105" fill={tema.muted} fontSize="7.5" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">enorme en escala humana</text>
      {/* Center */}
      <text x="260" y="62" fill={ac} fontSize="22" fontFamily="Georgia,serif" textAnchor="middle">≠</text>
      <text x="260" y="77" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">referente</text>
      <text x="260" y="89" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">distinto</text>
      {/* Right box */}
      <rect x="285" y="18" width="230" height="96" rx="7" fill={`${vd}10`} stroke={`${vd}44`} strokeWidth="1.5"/>
      <text x="400" y="34" fill={vd} fontSize="8.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">ESCALA: HORMIGAS</text>
      <text x="400" y="53" fill={tema.sub}  fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">«una hormiga</text>
      <text x="400" y="68" fill={vd}        fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" fontWeight="700" textAnchor="middle">grande»</text>
      <text x="400" y="87" fill={tema.muted} fontSize="8" fontFamily="'DM Sans',sans-serif" textAnchor="middle">≈ 1 centímetro</text>
      <text x="400" y="105" fill={tema.muted} fontSize="7.5" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">minúscula en escala humana</text>
    </svg>
  );
}
