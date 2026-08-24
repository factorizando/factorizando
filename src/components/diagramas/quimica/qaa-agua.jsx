// Diagrama «qaa-agua» — quimica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function QaaAguaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto;
  return (
    <svg viewBox="0 0 280 130" width="100%" style={{ display: "block", maxHeight: 140 }}>
      {/* molécula angular */}
      <circle cx={90} cy={50} r={18} fill="rgba(192,132,252,0.22)" stroke={a} strokeWidth="2" />
      <text x={90} y={55} textAnchor="middle" fill={a} fontSize="12" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">O</text>
      <text x={108} y={42} fill={tema.rojo} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif">δ⁻</text>
      <circle cx={58} cy={78} r={10} fill="rgba(244,114,182,0.18)" stroke={bl} strokeWidth="1.6" />
      <text x={58} y={82} textAnchor="middle" fill={bl} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">H</text>
      <circle cx={122} cy={78} r={10} fill="rgba(244,114,182,0.18)" stroke={bl} strokeWidth="1.6" />
      <text x={122} y={82} textAnchor="middle" fill={bl} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">H</text>
      <line x1={78} y1={62} x2={66} y2={71} stroke={a} strokeWidth="2.5" />
      <line x1={102} y1={62} x2={114} y2={71} stroke={a} strokeWidth="2.5" />
      <text x={42} y={96} fill={tema.verde} fontSize="7" fontFamily="'Figtree', system-ui, sans-serif">δ⁺</text>
      <text x={130} y={96} fill={tema.verde} fontSize="7" fontFamily="'Figtree', system-ui, sans-serif">δ⁺</text>
      <text x={90} y={114} textAnchor="middle" fill={mu} fontSize="7" fontFamily="'Figtree', system-ui, sans-serif">molécula angular (~104.5°) y polar</text>
      {/* puente de hidrógeno a otra molécula */}
      <line x1={132} y1={80} x2={186} y2={62} stroke={mu} strokeWidth="1.3" strokeDasharray="3 2" />
      <text x={150} y={56} fill={mu} fontSize="6" fontFamily="'Figtree', system-ui, sans-serif">puente de H</text>
      <circle cx={206} cy={56} r={14} fill="rgba(192,132,252,0.15)" stroke={a} strokeWidth="1.6" />
      <text x={206} y={60} textAnchor="middle" fill={a} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">O</text>
      <circle cx={234} cy={42} r={7} fill="rgba(244,114,182,0.15)" stroke={bl} strokeWidth="1.3" />
      <circle cx={234} cy={72} r={7} fill="rgba(244,114,182,0.15)" stroke={bl} strokeWidth="1.3" />
      <line x1={218} y1={50} x2={228} y2={45} stroke={a} strokeWidth="1.8" />
      <line x1={218} y1={63} x2={228} y2={68} stroke={a} strokeWidth="1.8" />
      <text x={210} y={114} textAnchor="middle" fill={mu} fontSize="7" fontFamily="'Figtree', system-ui, sans-serif">puentes de H entre moléculas</text>
    </svg>
  );
}
