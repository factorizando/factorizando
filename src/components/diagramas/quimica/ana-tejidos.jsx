// Diagrama «ana-tejidos» — quimica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function AnaTejidosSVG({ tema }) {
  const mu = tema.muted, T = tema.texto, ro = tema.rojo;
  const paneles = [
    { lab: "Epitelial", sub: "recubre", c: "#60a5fa" },
    { lab: "Conectivo", sub: "sangre, hueso", c: "#fb7185" },
    { lab: "Muscular", sub: "se contrae", c: "#f5c842" },
    { lab: "Nervioso", sub: "transmite", c: "#34d399" },
  ];
  return (
    <svg viewBox="0 0 290 120" width="100%" style={{ display: "block", maxHeight: 130 }}>
      <text x={145} y={12} textAnchor="middle" fill={tema.acento} fontSize="8" fontFamily="'DM Sans',sans-serif">los cuatro tejidos animales</text>
      {paneles.map(({ lab, sub, c }, i) => {
        const x = 10 + i * 70;
        return (
          <g key={i}>
            <rect x={x} y={22} width={62} height={52} rx={7} fill={`${c}1e`} stroke={c} strokeWidth="1.8" />
            {/* iconito según tejido */}
            {i === 0 && [0,1,2].map(k => <rect key={k} x={x+10+k*14} y={40} width={12} height={16} rx={2} fill={`${c}33`} stroke={c} strokeWidth="1.1" />)}
            {i === 1 && [0,1,2,3].map(k => <circle key={k} cx={x+14+k*12} cy={48} r={5} fill={`${c}44`} stroke={c} strokeWidth="1.1" />)}
            {i === 2 && [0,1,2].map(k => <line key={k} x1={x+12} y1={36+k*8} x2={x+50} y2={36+k*8} stroke={c} strokeWidth="2.4" />)}
            {i === 3 && <><circle cx={x+31} cy={46} r={7} fill={`${c}44`} stroke={c} strokeWidth="1.2" /><line x1={x+38} y1={46} x2={x+54} y2={40} stroke={c} strokeWidth="1.4" /><line x1={x+24} y1={46} x2={x+10} y2={40} stroke={c} strokeWidth="1.4" /></>}
            <text x={x+31} y={88} textAnchor="middle" fill={T} fontSize="7.6" fontFamily="'DM Sans',sans-serif" fontWeight="600">{lab}</text>
            <text x={x+31} y={99} textAnchor="middle" fill={mu} fontSize="6.4" fontFamily="'DM Sans',sans-serif">{sub}</text>
          </g>
        );
      })}
      <text x={145} y={114} textAnchor="middle" fill={ro} fontSize="6.8" fontFamily="'DM Sans',sans-serif">la sangre es tejido conectivo: transporta gases y defiende</text>
    </svg>
  );
}
