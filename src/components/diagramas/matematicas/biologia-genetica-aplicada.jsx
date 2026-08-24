// Diagrama «biologia-genetica-aplicada» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function BiologiaGeneticaAplicadaSVG({ tema }) {
  const a = tema.acento, grn = "#4ab890", gold = "#f5c842", lila = "#cc88ff";
  const techs = [
    { label:"TRANSGÉNICOS\n(OGM)",    ej:"Maíz Bt\nSoya resistente",  imp:"Menos pesticidas\nDebate bioseguridad", color:grn,  x:4   },
    { label:"BIOTECH.\nMÉDICA",       ej:"Insulina, HGH\nVacunas ARNm", imp:"Trata enfermedades\nProducción masiva",  color:a,    x:84  },
    { label:"TERAPIA\nGÉNICA",        ej:"CRISPR-Cas9\nVectores virales",imp:"Corrige genes\nDebate ético",           color:gold, x:164 },
    { label:"DIAGNÓSTICO\nMOLECULAR", ej:"PCR\nSecuenciación ADN",    imp:"Detección rápida\nMedicina personalizada",color:lila, x:244 },
  ];
  return (
    <svg viewBox="0 0 320 128" width="100%" style={{ display:"block" }}>
      {techs.map(({ label, ej, imp, color, x }, i) => {
        const cx = x + 36;
        return (
          <g key={i}>
            <rect x={x} y="0" width="72" height="128" rx="5"
              fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            {/* Label */}
            {label.split('\n').map((line,li)=>(
              <text key={li} x={cx} y={10+li*8} textAnchor="middle" fill={color}
                fontSize="5.5" fontFamily="monospace" fontWeight="700">{line}</text>
            ))}
            {/* DNA icon */}
            {[0,6,12].map(dy=>(
              <g key={dy}>
                <line x1={cx-10} y1={28+dy} x2={cx+10} y2={28+dy} stroke={color} strokeWidth="1.5" opacity="0.5"/>
              </g>
            ))}
            <line x1={cx-12} y1={22} x2={cx-10} y2={46} stroke={color} strokeWidth="1.5" opacity="0.7"/>
            <line x1={cx+12} y1={22} x2={cx+10} y2={46} stroke={color} strokeWidth="1.5" opacity="0.7"/>
            {/* Example */}
            <text x={cx} y="56" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="4.5" fontFamily="monospace">Ejemplo:</text>
            {ej.split('\n').map((line,li)=>(
              <text key={li} x={cx} y={63+li*8} textAnchor="middle" fill={color}
                fontSize="5" fontFamily="monospace">{line}</text>
            ))}
            {/* Implication */}
            <line x1={x+6} y1="82" x2={x+66} y2="82" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7"/>
            <text x={cx} y="90" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4" fontFamily="monospace">Implicación:</text>
            {imp.split('\n').map((line,li)=>(
              <text key={li} x={cx} y={97+li*8} textAnchor="middle" fill="rgba(255,255,255,0.5)"
                fontSize="4.5" fontFamily="monospace">{line}</text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}
