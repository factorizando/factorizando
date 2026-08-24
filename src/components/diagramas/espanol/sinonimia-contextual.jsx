// Diagrama «sinonimia-contextual» — espanol.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function SinonimiaContextualSVG({ tema }) {
  const az = tema.azul, vd = tema.verde, ac = tema.acento;
  return (
    <svg viewBox="0 0 520 125" width="100%" style={{ display: "block" }}>
      <text x="260" y="12" fill={tema.muted} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle" letterSpacing="0.14em" fontWeight="600">LA MISMA PALABRA — DISTINTOS SINÓNIMOS SEGÚN EL CONTEXTO</text>
      <line x1="5" y1="17" x2="515" y2="17" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      {/* Left: contexto intelectual */}
      <rect x="5" y="22" width="240" height="100" rx="7" fill={`${az}10`} stroke={`${az}44`} strokeWidth="1.5"/>
      <text x="125" y="38" fill={az} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">CONTEXTO INTELECTUAL</text>
      <text x="125" y="55" fill={tema.texto} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">«un ensayo ligero»</text>
      <line x1="125" y1="60" x2="125" y2="69" stroke={az} strokeWidth="1.5"/>
      <polygon points="121,69 125,75 129,69" fill={az}/>
      <rect x="16" y="78" width="78" height="20" rx="5" fill={`${vd}18`} stroke={vd} strokeWidth="1.5"/>
      <text x="55" y="92" fill={vd} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">ameno ✓</text>
      <rect x="112" y="78" width="120" height="20" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="4,2"/>
      <text x="172" y="92" fill={tema.muted} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">liviano ✗</text>
      <text x="125" y="114" fill={tema.muted} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle" fontStyle="italic">liviano refiere al peso físico, no al estilo</text>
      {/* Divider */}
      <line x1="260" y1="18" x2="260" y2="125" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="5,3"/>
      {/* Right: contexto físico */}
      <rect x="275" y="22" width="240" height="100" rx="7" fill={`${ac}10`} stroke={`${ac}44`} strokeWidth="1.5"/>
      <text x="395" y="38" fill={ac} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">CONTEXTO FÍSICO</text>
      <text x="395" y="55" fill={tema.texto} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">«una mochila ligera»</text>
      <line x1="395" y1="60" x2="395" y2="69" stroke={ac} strokeWidth="1.5"/>
      <polygon points="391,69 395,75 399,69" fill={ac}/>
      <rect x="284" y="78" width="82" height="20" rx="5" fill={`${vd}18`} stroke={vd} strokeWidth="1.5"/>
      <text x="325" y="92" fill={vd} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">liviana ✓</text>
      <rect x="380" y="78" width="118" height="20" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="4,2"/>
      <text x="439" y="92" fill={tema.muted} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">amena ✗</text>
      <text x="395" y="114" fill={tema.muted} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle" fontStyle="italic">amena es estilo literario, no peso físico</text>
    </svg>
  );
}
