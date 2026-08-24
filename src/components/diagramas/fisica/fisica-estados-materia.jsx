// Diagrama «fisica-estados-materia» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function FisicaEstadosMateriaSVG({ tema }) {
  const a = tema.acento, grn = "#4ab890", gold = "#f5c842", org = "#ff7755", blu = "#88aaff";
  const pW = 77, starts = [1, 82, 163, 244];
  const sData = [
    { label:"SÓLIDO",  sub1:"forma y volumen", sub2:"fijos",          eg:"hielo · metal",   color:a,
      mols:[[10,8],[28,8],[46,8],[10,26],[28,26],[46,26],[10,44],[28,44],[46,44]], r:6 },
    { label:"LÍQUIDO", sub1:"volumen fijo,",   sub2:"forma variable", eg:"agua · aceite",   color:grn,
      mols:[[6,15],[24,8],[44,18],[60,10],[12,34],[32,28],[52,36],[10,54],[40,50]], r:5.5 },
    { label:"GAS",     sub1:"forma y volumen", sub2:"variables",      eg:"aire · vapor",    color:gold,
      mols:[[8,6],[52,16],[20,50],[58,10],[32,36],[10,34],[60,56]], r:5 },
    { label:"PLASMA",  sub1:"gas ionizado,",   sub2:"T muy elevada",  eg:"sol · relámpago", color:org },
  ];
  return (
    <svg viewBox="0 0 320 128" width="100%" style={{ display:"block" }}>
      {sData.map(({ label, sub1, sub2, eg, color, mols, r }, pi) => {
        const px = starts[pi];
        return (
          <g key={pi}>
            <rect x={px} y="1" width={pW} height="126" rx="5"
              fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <text x={px+38} y="12" textAnchor="middle" fill={color}
              fontSize="6.5" fontFamily="monospace" fontWeight="700">{label}</text>
            <rect x={px+4} y="16" width="69" height="68" rx="3" fill="rgba(0,0,0,0.2)"/>
            {pi === 3 ? (
              <>
                {[[12,24],[40,16],[26,42],[58,34],[8,54],[36,58],[60,18]].map(([mx,my],i)=>(
                  <g key={i}>
                    <circle cx={px+4+mx} cy={16+my} r="5.5" fill={org} opacity="0.7"/>
                    <text x={px+4+mx} y={16+my+2.5} textAnchor="middle" fill="white" fontSize="6.5" fontWeight="700">+</text>
                  </g>
                ))}
                {[[28,28],[52,50],[14,40]].map(([mx,my],i)=>(
                  <circle key={i+10} cx={px+4+mx} cy={16+my} r="3" fill={blu} opacity="0.7"/>
                ))}
              </>
            ) : (mols||[]).map(([mx,my],i)=>(
              <circle key={i} cx={px+4+mx} cy={16+my} r={r}
                fill={color} opacity="0.78" stroke="rgba(0,0,0,0.2)" strokeWidth="0.5"/>
            ))}
            <text x={px+38} y="95" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5" fontFamily="monospace">{sub1}</text>
            <text x={px+38} y="103" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5" fontFamily="monospace">{sub2}</text>
            <text x={px+38} y="116" textAnchor="middle" fill={color} fontSize="5.5" fontFamily="monospace" opacity="0.8">{eg}</text>
          </g>
        );
      })}
    </svg>
  );
}
