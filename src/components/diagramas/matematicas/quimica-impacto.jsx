// Diagrama «quimica-impacto» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function QuimicaImpactoSVG({ tema }) {
  const a = tema.acento, grn = "#4ab890", org = "#ff7755", red = "#dd3333";
  const benefits = [
    { label:"Medicamentos",     desc:"tratan enfermedades",         color:grn  },
    { label:"Fertilizantes",    desc:"mayor producción agrícola",   color:grn  },
    { label:"Plásticos",        desc:"materiales versátiles",       color:grn  },
    { label:"Vacunas",          desc:"previenen infecciones",       color:grn  },
  ];
  const risks = [
    { label:"Pesticidas",       desc:"contaminan suelo y agua",     color:org  },
    { label:"Combustibles",     desc:"CO₂ y lluvia ácida",          color:org  },
    { label:"CFCs",             desc:"destruyen capa de ozono",     color:red  },
    { label:"Metales pesados",  desc:"bioacumulación tóxica",       color:red  },
  ];
  return (
    <svg viewBox="0 0 320 128" width="100%" style={{ display:"block" }}>
      {/* Center title bar */}
      <rect x="0" y="0" width="320" height="128" rx="5" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="160" y="10" textAnchor="middle" fill={a} fontSize="6" fontFamily="monospace" fontWeight="700">PRODUCTOS Y PROCESOS QUÍMICOS: DOBLE IMPACTO</text>
      {/* Left: Beneficios */}
      <rect x="4" y="14" width="150" height="110" rx="4" fill={`${grn}10`} stroke={`${grn}40`} strokeWidth="1"/>
      <text x="79" y="24" textAnchor="middle" fill={grn} fontSize="6.5" fontFamily="monospace" fontWeight="700">BENEFICIOS</text>
      {benefits.map(({ label, desc, color }, i) => (
        <g key={i}>
          <rect x="8" y={30+i*22} width="142" height="18" rx="3"
            fill={`${color}18`} stroke={`${color}45`} strokeWidth="1"/>
          <text x="12" y={30+i*22+8} fill={color} fontSize="5.5" fontFamily="monospace">✓</text>
          <text x="22" y={30+i*22+8} fill={color} fontSize="5.5" fontFamily="monospace" fontWeight="600">{label}</text>
          <text x="22" y={30+i*22+16} fill="rgba(255,255,255,0.4)" fontSize="4.5" fontFamily="monospace">{desc}</text>
        </g>
      ))}
      {/* Right: Riesgos */}
      <rect x="166" y="14" width="150" height="110" rx="4" fill={`${org}10`} stroke={`${org}40`} strokeWidth="1"/>
      <text x="241" y="24" textAnchor="middle" fill={org} fontSize="6.5" fontFamily="monospace" fontWeight="700">RIESGOS</text>
      {risks.map(({ label, desc, color }, i) => (
        <g key={i}>
          <rect x="170" y={30+i*22} width="142" height="18" rx="3"
            fill={`${color}18`} stroke={`${color}45`} strokeWidth="1"/>
          <text x="174" y={30+i*22+8} fill={color} fontSize="5.5" fontFamily="monospace">!</text>
          <text x="184" y={30+i*22+8} fill={color} fontSize="5.5" fontFamily="monospace" fontWeight="600">{label}</text>
          <text x="184" y={30+i*22+16} fill="rgba(255,255,255,0.4)" fontSize="4.5" fontFamily="monospace">{desc}</text>
        </g>
      ))}
      {/* Bottom note */}
      <text x="160" y="120" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="4.5" fontFamily="monospace">
        Paracelso: "la dosis hace el veneno" — el contexto y la cantidad determinan el riesgo
      </text>
    </svg>
  );
}
