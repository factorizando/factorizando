// Diagrama «correferencia-personal» — espanol.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function CorrreferenciaPersonalSVG({ tema }) {
  const az = tema.azul, vd = tema.canal(1);
  return (
    <svg viewBox="0 0 510 125" width="100%" style={{ display: "block" }}>
      <text x="96"  y="13" fill={tema.muted} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle" letterSpacing="0.16em" fontWeight="600">ANTECEDENTE</text>
      <text x="256" y="13" fill={tema.muted} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle" letterSpacing="0.16em" fontWeight="600">PRONOMBRE</text>
      <text x="408" y="13" fill={tema.muted} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle" letterSpacing="0.16em" fontWeight="600">CONCORDANCIA</text>
      <line x1="8" y1="18" x2="502" y2="18" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
      {/* Row 1: la directora → ella */}
      <rect x="8" y="26" width="176" height="26" rx="6" fill={`${az}20`} stroke={`${az}88`} strokeWidth="1.5"/>
      <text x="96" y="43" fill={az} fontSize="14" fontFamily="Georgia,serif" textAnchor="middle" fontStyle="italic">la directora</text>
      <line x1="186" y1="39" x2="208" y2="39" stroke={az} strokeWidth="1.5"/>
      <polygon points="208,35 216,39 208,43" fill={az}/>
      <rect x="220" y="26" width="72" height="26" rx="6" fill={`${az}20`} stroke={`${az}88`} strokeWidth="1.5"/>
      <text x="256" y="43" fill={az} fontSize="14" fontFamily="Georgia,serif" textAnchor="middle" fontStyle="italic">ella</text>
      <text x="306" y="35" fill={tema.sub} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif">fem. sing. · 3ª persona</text>
      <text x="306" y="47" fill={tema.sub} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif">= sujeto de la 2ª oración</text>
      {/* Row 2: el informe → lo */}
      <rect x="8" y="68" width="176" height="26" rx="6" fill={`${vd}20`} stroke={`${vd}88`} strokeWidth="1.5"/>
      <text x="96" y="85" fill={vd} fontSize="14" fontFamily="Georgia,serif" textAnchor="middle" fontStyle="italic">el informe</text>
      <line x1="186" y1="81" x2="208" y2="81" stroke={vd} strokeWidth="1.5"/>
      <polygon points="208,77 216,81 208,85" fill={vd}/>
      <rect x="220" y="68" width="72" height="26" rx="6" fill={`${vd}20`} stroke={`${vd}88`} strokeWidth="1.5"/>
      <text x="256" y="85" fill={vd} fontSize="14" fontFamily="Georgia,serif" textAnchor="middle" fontStyle="italic">lo</text>
      <text x="306" y="77" fill={tema.sub} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif">masc. sing. · OD átono</text>
      <text x="306" y="89" fill={tema.sub} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif">= OD de la 2ª oración</text>
      <text x="8" y="114" fill={tema.muted} fontSize="8.5" fontFamily="Georgia,serif" fontStyle="italic">«La directora presentó el informe. Ella lo revisó con cuidado.»</text>
    </svg>
  );
}
