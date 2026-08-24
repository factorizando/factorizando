// Diagrama «fisica-sistema-solar» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function FisicaSistemaSolarSVG({ tema }) {
  const a = tema.acento, gold = "#f5c842", org = "#ff7755";
  const SX = 18, SY = 65;
  const planets = [
    { name:"Mer.",    px:50,  size:2.5, color:"#aaaaaa" },
    { name:"Venus",   px:66,  size:3.5, color:"#f0c040" },
    { name:"Tierra",  px:84,  size:4,   color:a         },
    { name:"Marte",   px:102, size:3,   color:org       },
    { name:"Júpiter", px:158, size:7,   color:gold      },
    { name:"Saturno", px:193, size:5.5, color:"#d4c080", rings:true },
    { name:"Urano",   px:226, size:4,   color:"#88ccee" },
    { name:"Neptuno", px:255, size:3.5, color:"#4488cc" },
  ];
  return (
    <svg viewBox="0 0 320 128" width="100%" style={{ display:"block" }}>
      <rect x="0" y="0" width="320" height="128" rx="5"
        fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="160" y="10" textAnchor="middle" fill={a}
        fontSize="6" fontFamily="monospace" fontWeight="700">SISTEMA SOLAR (esquemático)</text>
      {/* Orbit ellipses */}
      {planets.map(({ px }, i) => (
        <ellipse key={i} cx={SX} cy={SY} rx={px-SX} ry={(px-SX)*0.22}
          fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7"
          strokeDasharray={i >= 4 ? "3,2" : "none"}/>
      ))}
      {/* Asteroid belt band */}
      <ellipse cx={SX} cy={SY} rx={118} ry={26}
        fill="none" stroke="rgba(180,160,100,0.12)" strokeWidth="5"/>
      <text x={SX+120} y={SY-22} fill="rgba(180,160,100,0.4)" fontSize="4" fontFamily="monospace">cinturón</text>
      {/* Sun */}
      <circle cx={SX} cy={SY} r="11" fill="#FFD700" opacity="0.9"/>
      <circle cx={SX} cy={SY} r="8"  fill="#FFA500"/>
      <text x={SX} y={SY+3} textAnchor="middle" fill="white" fontSize="5.5" fontWeight="700">Sol</text>
      {/* Planets */}
      {planets.map(({ name, px, size, color, rings }, i) => (
        <g key={i}>
          <circle cx={px} cy={SY} r={size} fill={color} opacity="0.88"/>
          {rings && (
            <ellipse cx={px} cy={SY} rx={size+6} ry={size*0.38}
              fill="none" stroke={`${color}99`} strokeWidth="1.5"/>
          )}
          <text x={px} y={SY - size - 3} textAnchor="middle"
            fill="rgba(255,255,255,0.55)" fontSize="4.5" fontFamily="monospace">{name}</text>
        </g>
      ))}
      {/* Legend */}
      <text x="160" y="97" textAnchor="middle"
        fill="rgba(255,255,255,0.35)" fontSize="5" fontFamily="monospace">
        Terrestres (rocosos): Mercurio, Venus, Tierra, Marte
      </text>
      <text x="160" y="107" textAnchor="middle"
        fill="rgba(255,255,255,0.35)" fontSize="5" fontFamily="monospace">
        Jovianos (gaseosos/helados): Júpiter, Saturno, Urano, Neptuno
      </text>
      <text x="160" y="118" textAnchor="middle"
        fill="rgba(255,255,255,0.2)" fontSize="4.5" fontFamily="monospace">
        Plutón = planeta enano desde 2006 (UAI)
      </text>
    </svg>
  );
}
