// Diagrama «quimica-modelos-atomicos» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function QuimicaModelosAtomicosSVG({ tema }) {
  const a = tema.acento, gold = "#f5c842", grn = "#4ab890", org = "#ff7755", lila = "#cc88ff", blu = "#88aaff";
  const pW = 60, starts = [1, 65, 129, 193, 257];
  const models = [
    { name:"DALTON",     year:"1803", color:a    },
    { name:"THOMSON",    year:"1897", color:org  },
    { name:"RUTHERFORD", year:"1911", color:gold },
    { name:"BOHR",       year:"1913", color:grn  },
    { name:"ACTUAL",     year:"≥1926",color:lila },
  ];
  return (
    <svg viewBox="0 0 320 128" width="100%" style={{ display:"block" }}>
      {models.map(({ name, year, color }, pi) => {
        const px = starts[pi], cx = px + 30, cy = 55;
        return (
          <g key={pi}>
            <rect x={px} y="1" width={pW} height="126" rx="4"
              fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <text x={cx} y="11" textAnchor="middle" fill={color} fontSize="5.5" fontFamily="monospace" fontWeight="700">{name}</text>
            <text x={cx} y="18" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="4.5" fontFamily="monospace">{year}</text>
            <rect x={px+4} y="22" width="52" height="58" rx="3" fill="rgba(0,0,0,0.2)"/>
            {pi === 0 && (
              <circle cx={cx} cy={cy} r="16" fill={color} opacity="0.7"/>
            )}
            {pi === 1 && (
              <>
                <circle cx={cx} cy={cy} r="18" fill={org} opacity="0.25" stroke={org} strokeWidth="1"/>
                {[[0,0],[10,8],[-8,10],[12,-5],[-10,0],[5,-10],[-5,8],[10,-12]].map(([dx,dy],i)=>(
                  <circle key={i} cx={cx+dx} cy={cy+dy} r="2.5" fill={blu} opacity="0.9"/>
                ))}
              </>
            )}
            {pi === 2 && (
              <>
                <circle cx={cx} cy={cy} r="20" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8"/>
                <circle cx={cx} cy={cy} r="4" fill={gold} opacity="0.9"/>
                {[[20,0],[-14,14],[0,-20]].map(([dx,dy],i)=>(
                  <circle key={i} cx={cx+dx} cy={cy+dy} r="2.5" fill={blu} opacity="0.85"/>
                ))}
              </>
            )}
            {pi === 3 && (
              <>
                {[9,16,23].map((r,i)=>(
                  <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={grn} strokeWidth="0.8" opacity="0.5"/>
                ))}
                <circle cx={cx} cy={cy} r="3.5" fill={gold} opacity="0.9"/>
                <circle cx={cx+9}  cy={cy}    r="2.5" fill={blu} opacity="0.85"/>
                <circle cx={cx}    cy={cy-16} r="2.5" fill={blu} opacity="0.85"/>
                <circle cx={cx-23} cy={cy}    r="2.5" fill={blu} opacity="0.85"/>
              </>
            )}
            {pi === 4 && (
              <>
                {[[-12,-8],[-8,14],[14,10],[10,-14],[-16,2],[16,-4],[0,18],[-2,-18],[8,4],[-10,-2],[4,12],[-6,10],[-14,6],[12,-10]].map(([dx,dy],i)=>(
                  <circle key={i} cx={cx+dx} cy={cy+dy} r="1.5" fill={lila} opacity={0.35+i*0.04}/>
                ))}
                <circle cx={cx} cy={cy} r="3.5" fill={gold} opacity="0.9"/>
              </>
            )}
            {pi === 0 && <text x={cx} y="90" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">esfera sólida</text>}
            {pi === 1 && <text x={cx} y="90" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">pudín de pasas</text>}
            {pi === 2 && <text x={cx} y="90" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">núcleo central</text>}
            {pi === 3 && <text x={cx} y="90" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">órbitas fijas</text>}
            {pi === 4 && <text x={cx} y="90" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">nube electrónica</text>}
          </g>
        );
      })}
    </svg>
  );
}
