// Diagrama «fisica-transformaciones» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function FisicaTransformacionesSVG({ tema }) {
  const a = tema.acento, gold = "#f5c842", grn = "#4ab890", org = "#ff7755";
  const boxes = [
    { label:"Química",  sub:"gasolina\nbatería",  color:org,  x:6   },
    { label:"Térmica",  sub:"calor\nvapor",        color:gold, x:86  },
    { label:"Cinética", sub:"movimiento\nviento",  color:grn,  x:166 },
    { label:"Eléctrica",sub:"corriente\ncircuito", color:a,    x:246 },
  ];
  return (
    <svg viewBox="0 0 320 130" width="100%" style={{ display:"block" }}>
      <rect x="0" y="0" width="320" height="130" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="160" y="10" textAnchor="middle" fill={a}
        fontSize="6.5" fontFamily="monospace" fontWeight="700">CADENA DE TRANSFORMACIONES DE ENERGÍA</text>
      {boxes.map(({ label, sub, color, x }, i) => (
        <g key={i}>
          <rect x={x} y="16" width="64" height="54" rx="5"
            fill={`${color}18`} stroke={color} strokeWidth="1.5"/>
          <text x={x+32} y="37" textAnchor="middle" fill={color}
            fontSize="8" fontFamily="monospace" fontWeight="700">{label}</text>
          {sub.split('\n').map((s,si)=>(
            <text key={si} x={x+32} y={49+si*9} textAnchor="middle"
              fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">{s}</text>
          ))}
          {i < boxes.length-1 && (
            <>
              <line x1={x+64} y1="43" x2={x+78} y2="43" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
              <polygon points={`${x+78},39 ${x+78},47 ${x+83},43`} fill="rgba(255,255,255,0.4)"/>
            </>
          )}
        </g>
      ))}
      <text x="38" y="85" textAnchor="middle" fill={org}  fontSize="5" fontFamily="monospace" opacity="0.75">motor · fábrica</text>
      <text x="118" y="85" textAnchor="middle" fill={gold} fontSize="5" fontFamily="monospace" opacity="0.75">turbina · caldera</text>
      <text x="198" y="85" textAnchor="middle" fill={grn}  fontSize="5" fontFamily="monospace" opacity="0.75">generador · molino</text>
      <text x="278" y="85" textAnchor="middle" fill={a}    fontSize="5" fontFamily="monospace" opacity="0.75">motor eléc · LED</text>
      <rect x="16" y="93" width="288" height="28" rx="4"
        fill={`${a}10`} stroke={`${a}35`} strokeWidth="1"/>
      <text x="160" y="104" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="5.5" fontFamily="monospace">
        Ley de Conservación de la Energía (1er principio de la termodinámica)
      </text>
      <text x="160" y="114" textAnchor="middle" fill={a} fontSize="6" fontFamily="monospace" fontWeight="600">
        La energía no se crea ni se destruye, solo se transforma
      </text>
    </svg>
  );
}
