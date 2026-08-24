// Diagrama «quimica-reacciones» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function QuimicaReaccionesSVG({ tema }) {
  const a = tema.acento, gold = "#f5c842", grn = "#4ab890", org = "#ff7755", lila = "#cc88ff";
  const types = [
    { label:"SÍNTESIS",        eq:"A + B → AB",     color:a,    x:6   },
    { label:"DESCOMPOSICIÓN",  eq:"AB → A + B",     color:grn,  x:86  },
    { label:"SUSTITUCIÓN",     eq:"AB + C → AC + B",color:gold, x:166 },
    { label:"DOBLE SUST.",     eq:"AB+CD→AD+CB",    color:lila, x:246 },
  ];
  return (
    <svg viewBox="0 0 320 128" width="100%" style={{ display:"block" }}>
      {/* Top: reaction concept */}
      <rect x="0" y="0" width="320" height="52" rx="5"
        fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="160" y="10" textAnchor="middle" fill={a} fontSize="6" fontFamily="monospace" fontWeight="700">CAMBIO QUÍMICO: se forman sustancias nuevas</text>
      {/* Reactivos */}
      <rect x="8" y="16" width="80" height="28" rx="4" fill={`${org}20`} stroke={org} strokeWidth="1.5"/>
      <text x="48" y="27" textAnchor="middle" fill={org} fontSize="7.5" fontFamily="monospace" fontWeight="700">REACTIVOS</text>
      <text x="48" y="37" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="5" fontFamily="monospace">A + B</text>
      {/* Arrow */}
      <line x1="92" y1="30" x2="126" y2="30" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
      <polygon points="126,26 126,34 132,30" fill="rgba(255,255,255,0.5)"/>
      <text x="110" y="26" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">Ea</text>
      <text x="110" y="44" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="4" fontFamily="monospace">energía activación</text>
      {/* Productos */}
      <rect x="136" y="16" width="80" height="28" rx="4" fill={`${grn}20`} stroke={grn} strokeWidth="1.5"/>
      <text x="176" y="27" textAnchor="middle" fill={grn} fontSize="7.5" fontFamily="monospace" fontWeight="700">PRODUCTOS</text>
      <text x="176" y="37" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="5" fontFamily="monospace">C + D</text>
      {/* Ley Lavoisier */}
      <rect x="222" y="14" width="96" height="30" rx="4" fill={`${gold}15`} stroke={`${gold}50`} strokeWidth="1"/>
      <text x="270" y="25" textAnchor="middle" fill={gold} fontSize="5.5" fontFamily="monospace" fontWeight="700">Ley de Lavoisier</text>
      <text x="270" y="34" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="4.5" fontFamily="monospace">masa reactivos = masa productos</text>
      <text x="270" y="41" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="4" fontFamily="monospace">la materia se conserva</text>
      {/* Bottom: 4 reaction types */}
      {types.map(({ label, eq, color, x }, i) => (
        <g key={i}>
          <rect x={x} y="56" width="64" height="68" rx="5"
            fill={`${color}15`} stroke={color} strokeWidth="1.5"/>
          <text x={x+32} y="68" textAnchor="middle" fill={color} fontSize="5.5" fontFamily="monospace" fontWeight="700">{label}</text>
          <text x={x+32} y="80" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="5.5" fontFamily="monospace">{eq}</text>
          {i === 0 && (
            <>
              <circle cx={x+14} cy={100} r="6" fill={a} opacity="0.7"/>
              <circle cx={x+26} cy={100} r="6" fill={grn} opacity="0.7"/>
              <line x1={x+34} y1={100} x2={x+42} y2={100} stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
              <polygon points={`${x+42},97 ${x+42},103 ${x+46},100`} fill="rgba(255,255,255,0.5)"/>
              <ellipse cx={x+54} cy={100} rx="9" ry="6" fill="none" stroke={a} strokeWidth="1.5"/>
              <line x1={x+47} y1={100} x2={x+61} y2={100} stroke={grn} strokeWidth="1.2"/>
            </>
          )}
          {i === 1 && (
            <>
              <ellipse cx={x+14} cy={100} rx="9" ry="6" fill="none" stroke={a} strokeWidth="1.5"/>
              <line x1={x+7} y1={100} x2={x+21} y2={100} stroke={grn} strokeWidth="1.2"/>
              <line x1={x+26} y1={100} x2={x+34} y2={100} stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
              <polygon points={`${x+34},97 ${x+34},103 ${x+38},100`} fill="rgba(255,255,255,0.5)"/>
              <circle cx={x+46} cy={100} r="6" fill={a} opacity="0.7"/>
              <circle cx={x+58} cy={100} r="6" fill={grn} opacity="0.7"/>
            </>
          )}
          <text x={x+32} y="118" textAnchor="middle" fill={color} fontSize="4.5" fontFamily="monospace">
            {["H₂+O₂→H₂O","H₂O→H₂+O₂","Fe+S→FeS","NaCl+AgNO₃→…"][i]}
          </text>
        </g>
      ))}
    </svg>
  );
}
