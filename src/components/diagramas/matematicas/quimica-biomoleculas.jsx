// Diagrama «quimica-biomoleculas» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function QuimicaBiomoleculasSVG() {
  const org = "#ff7755", gold = "#f5c842", grn = "#4ab890", lila = "#cc88ff", blu = "#88aaff";
  const pW = 77, starts = [1, 82, 163, 244];
  const bData = [
    { label:"CARBOHIDRATOS", sub:"energía rápida",      eg:"glucosa · almidón", color:org  },
    { label:"LÍPIDOS",       sub:"energía almacenada",  eg:"grasas · aceites",  color:gold },
    { label:"PROTEÍNAS",     sub:"estructura · enzimas",eg:"carne · huevo",     color:grn  },
    { label:"ÁC. NUCLEICOS", sub:"inf. genética",       eg:"ADN · ARN",         color:lila },
  ];
  return (
    <svg viewBox="0 0 320 128" width="100%" style={{ display:"block" }}>
      {bData.map(({ label, sub, eg, color }, pi) => {
        const px = starts[pi], cx = px + 38, cy = 52;
        return (
          <g key={pi}>
            <rect x={px} y="1" width={pW} height="126" rx="5"
              fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <text x={cx} y="12" textAnchor="middle" fill={color} fontSize="5.5" fontFamily="monospace" fontWeight="700">{label}</text>
            <rect x={px+4} y="16" width="69" height="66" rx="3" fill="rgba(0,0,0,0.2)"/>
            {pi === 0 && (
              // Carbohidratos: hexagon ring (glucose)
              <>
                <polygon points={`${cx+15},${cy} ${cx+7.5},${cy+13} ${cx-7.5},${cy+13} ${cx-15},${cy} ${cx-7.5},${cy-13} ${cx+7.5},${cy-13}`}
                  fill="none" stroke={color} strokeWidth="2" opacity="0.85"/>
                <text x={cx} y={cy-17} textAnchor="middle" fill={color} fontSize="5.5">O</text>
                {[[15,0],[7.5,13],[-7.5,13],[-15,0],[-7.5,-13],[7.5,-13]].map(([dx,dy],i)=>(
                  <text key={i} x={cx+dx} y={cy+dy+2} textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="4.5">C</text>
                ))}
                <text x={cx} y={cy+30} textAnchor="middle" fill={color} fontSize="5.5" fontFamily="monospace">C₆H₁₂O₆</text>
              </>
            )}
            {pi === 1 && (
              // Lípidos: glycerol + 3 fatty acid chains
              <>
                <line x1={cx-14} y1={cy-15} x2={cx-14} y2={cy+14} stroke={color} strokeWidth="2" opacity="0.8"/>
                {[-14,0,14].map((dy,i)=>(
                  <polyline key={i}
                    points={`${cx-14},${cy+dy-2} ${cx-7},${cy+dy+4} ${cx},${cy+dy-2} ${cx+7},${cy+dy+4} ${cx+14},${cy+dy-2} ${cx+21},${cy+dy+4} ${cx+28},${cy+dy-2}`}
                    fill="none" stroke={color} strokeWidth="1.5" opacity="0.75"/>
                ))}
              </>
            )}
            {pi === 2 && (
              // Proteínas: amino acid chain
              <>
                {[0,1,2,3,4].map(i => {
                  const bx = cx - 18 + i * 9;
                  return (
                    <g key={i}>
                      {i > 0 && <line x1={bx-7} y1={cy} x2={bx-2} y2={cy} stroke={color} strokeWidth="1.2" opacity="0.7"/>}
                      <circle cx={bx} cy={cy} r="5" fill={`${color}28`} stroke={color} strokeWidth="1.2" opacity="0.85"/>
                      <text x={bx} y={cy+2} textAnchor="middle" fill={color} fontSize="3.5" fontWeight="600">AA</text>
                    </g>
                  );
                })}
                <text x={cx} y={cy-14} textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="4.5" fontFamily="monospace">enlace peptídico</text>
                <text x={cx} y={cy+24} textAnchor="middle" fill={color} fontSize="4.5" fontFamily="monospace">20 aminoácidos</text>
              </>
            )}
            {pi === 3 && (
              // Ácidos nucleicos: DNA ladder
              <>
                {[-18,-9,0,9,18].map((dy,i) => {
                  const bpColors = [[blu,org],[gold,grn],[blu,gold],[org,grn],[blu,org]];
                  return (
                    <g key={i}>
                      <line x1={cx-11} y1={cy+dy} x2={cx} y2={cy+dy} stroke={bpColors[i][0]} strokeWidth="2" opacity="0.8"/>
                      <line x1={cx} y1={cy+dy} x2={cx+11} y2={cy+dy} stroke={bpColors[i][1]} strokeWidth="2" opacity="0.8"/>
                    </g>
                  );
                })}
                <line x1={cx-11} y1={cy-20} x2={cx-10} y2={cy+20} stroke={color} strokeWidth="1.8" opacity="0.8"/>
                <line x1={cx+11} y1={cy-20} x2={cx+10} y2={cy+20} stroke={color} strokeWidth="1.8" opacity="0.8"/>
                <text x={cx} y={cy+30} textAnchor="middle" fill={color} fontSize="4.5" fontFamily="monospace">A-T · G-C</text>
              </>
            )}
            <text x={cx} y="91" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5" fontFamily="monospace">{sub}</text>
            <text x={cx} y="103" textAnchor="middle" fill={color} fontSize="5.5" fontFamily="monospace" opacity="0.8">{eg}</text>
          </g>
        );
      })}
    </svg>
  );
}
