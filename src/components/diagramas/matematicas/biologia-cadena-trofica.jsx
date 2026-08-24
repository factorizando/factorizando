// Diagrama «biologia-cadena-trofica» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function BiologiaCadenaTroficaSVG({ tema }) {
  const a = tema.acento, grn = "#4ab890", gold = "#f5c842", red = "#dd3333";
  const levels = [
    { label:"PRODUCTORES",       pct:"100%", y:80, h:20, w:240, x:40, color:grn },
    { label:"CONS. PRIMARIOS",   pct:"10%",  y:59, h:21, w:178, x:71, color:a   },
    { label:"CONS. SECUNDARIOS", pct:"1%",   y:39, h:20, w:118, x:101,color:gold},
    { label:"CONS. TERCIARIOS",  pct:"0.1%", y:20, h:19, w:60,  x:130,color:red },
  ];
  const chain = [
    { name:"Pasto",   color:grn }, { name:"Conejo", color:a    },
    { name:"Zorro",   color:gold}, { name:"Águila", color:red  },
  ];
  return (
    <svg viewBox="0 0 320 128" width="100%" style={{ display:"block" }}>
      <rect x="0" y="0" width="320" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="160" y="10" textAnchor="middle" fill={a}
        fontSize="6" fontFamily="monospace" fontWeight="700">PIRÁMIDE TRÓFICA — REGLA DEL 10%</text>
      {levels.map(({ label, pct, y, h, w, x, color }) => (
        <g key={label}>
          <rect x={x} y={y} width={w} height={h} rx="2"
            fill={`${color}30`} stroke={color} strokeWidth="1.5"/>
          <text x="160" y={y+h/2+2.5} textAnchor="middle" fill={color}
            fontSize="5.5" fontFamily="monospace" fontWeight="700">{label}</text>
          <text x={x+4} y={y+h/2+2.5} fill={color} fontSize="5.5" fontFamily="monospace">{pct}</text>
        </g>
      ))}
      {/* 90% loss annotation */}
      <text x="298" y="50" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="4.5" fontFamily="monospace">90%</text>
      <text x="298" y="57" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="4.5" fontFamily="monospace">perdido</text>
      <text x="298" y="64" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="4.5" fontFamily="monospace">como</text>
      <text x="298" y="71" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="4.5" fontFamily="monospace">calor</text>
      <line x1="293" y1="74" x2="284" y2="90" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8"/>
      {/* Food chain example */}
      {chain.map(({ name, color }, i) => {
        const cx = 35 + i * 68;
        return (
          <g key={i}>
            <rect x={cx-24} y={103} width="48" height="14" rx="3"
              fill={`${color}20`} stroke={`${color}55`} strokeWidth="1"/>
            <text x={cx} y={113} textAnchor="middle"
              fill={color} fontSize="5.5" fontFamily="monospace">{name}</text>
            {i < chain.length-1 && (
              <>
                <line x1={cx+24} y1={110} x2={cx+44} y2={110} stroke="rgba(255,255,255,0.35)" strokeWidth="1.2"/>
                <polygon points={`${cx+44},107 ${cx+44},113 ${cx+48},110`} fill="rgba(255,255,255,0.35)"/>
              </>
            )}
          </g>
        );
      })}
      <text x="160" y="124" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="4.5" fontFamily="monospace">cada flecha: "es alimento de" — la energía siempre fluye hacia arriba</text>
    </svg>
  );
}
