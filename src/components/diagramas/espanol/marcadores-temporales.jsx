// Diagrama «marcadores-temporales» — espanol.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function MarcadoresTemporalesSVG({ tema }) {
  const vd = tema.verde, az = tema.azul, ac = tema.acento;
  const TY = 50;
  const pts = [
    { x: 28,  label: "primero",    sub: "en primer lugar",   color: vd  },
    { x: 180, label: "luego",      sub: "a continuación",    color: az  },
    { x: 332, label: "después",    sub: "posteriormente",    color: az  },
    { x: 480, label: "finalmente", sub: "por último",        color: ac  },
  ];
  return (
    <svg viewBox="0 0 520 100" width="100%" style={{ display: "block" }}>
      <text x="28"  y="11" fill={vd} fontSize="7.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">INICIO</text>
      <text x="256" y="11" fill={az} fontSize="7.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">DESARROLLO</text>
      <text x="480" y="11" fill={ac} fontSize="7.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">CIERRE</text>
      {/* Timeline */}
      <line x1="28" y1={TY} x2="494" y2={TY} stroke="rgba(255,255,255,0.22)" strokeWidth="2.5"/>
      <polygon points={`488,${TY - 4} 498,${TY} 488,${TY + 4}`} fill="rgba(255,255,255,0.22)"/>
      {pts.map(({ x, label, sub, color }) => (
        <g key={x}>
          <circle cx={x} cy={TY} r="5.5" fill={color} opacity="0.9"/>
          <line x1={x} y1={TY - 6} x2={x} y2={TY - 19} stroke={color} strokeWidth="1.2" opacity="0.7"/>
          <text x={x} y={TY - 23} fill={color} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{label}</text>
          <text x={x} y={TY + 18} fill={tema.sub} fontSize="8" fontFamily="'DM Sans',sans-serif" textAnchor="middle">{sub}</text>
        </g>
      ))}
      {/* Simultaneous track */}
      <rect x="100" y="74" width="244" height="14" rx="3" fill={`${az}15`} stroke={`${az}40`} strokeWidth="1" strokeDasharray="5,3"/>
      <text x="222" y="84" fill={az} fontSize="8.5" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">mientras tanto · al mismo tiempo</text>
      <text x="8" y="98" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif">simultaneidad</text>
    </svg>
  );
}
