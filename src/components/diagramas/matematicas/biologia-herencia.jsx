// Diagrama «biologia-herencia» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function BiologiaHerenciaSVG({ tema }) {
  const a = tema.acento, gold = "#f5c842", grn = "#4ab890", lila = "#cc88ff";
  return (
    <svg viewBox="0 0 320 128" width="100%" style={{ display:"block" }}>
      {/* LEFT: Punnett Square */}
      <rect x="1" y="1" width="154" height="126" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="78" y="10" textAnchor="middle" fill={a} fontSize="6" fontFamily="monospace" fontWeight="700">CUADRO DE PUNNETT</text>
      <text x="78" y="17" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5" fontFamily="monospace">cruce: Aa × Aa</text>
      {/* Parent 2 headers (top) */}
      <text x="60" y="28" textAnchor="middle" fill={a} fontSize="11" fontWeight="700">A</text>
      <text x="108" y="28" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="11" fontStyle="italic">a</text>
      {/* Parent 1 headers (left) */}
      <text x="20" y="53" textAnchor="middle" fill={a} fontSize="11" fontWeight="700">A</text>
      <text x="20" y="88" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="11" fontStyle="italic">a</text>
      {/* AA cell */}
      <rect x="32" y="31" width="52" height="38" rx="3" fill={`${a}35`} stroke={a} strokeWidth="1.5"/>
      <text x="58" y="51" textAnchor="middle" fill={a} fontSize="10" fontWeight="700">AA</text>
      <text x="58" y="62" textAnchor="middle" fill={a} fontSize="5" fontFamily="monospace">dominante</text>
      {/* Aa top-right */}
      <rect x="86" y="31" width="52" height="38" rx="3" fill={`${a}20`} stroke={a} strokeWidth="1.2"/>
      <text x="112" y="51" textAnchor="middle" fill={a} fontSize="10" fontWeight="700">Aa</text>
      <text x="112" y="62" textAnchor="middle" fill={a} fontSize="5" fontFamily="monospace">dominante</text>
      {/* Aa bottom-left */}
      <rect x="32" y="71" width="52" height="38" rx="3" fill={`${a}20`} stroke={a} strokeWidth="1.2"/>
      <text x="58" y="91" textAnchor="middle" fill={a} fontSize="10" fontWeight="700">Aa</text>
      <text x="58" y="102" textAnchor="middle" fill={a} fontSize="5" fontFamily="monospace">dominante</text>
      {/* aa cell */}
      <rect x="86" y="71" width="52" height="38" rx="3"
        fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2"/>
      <text x="112" y="91" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="10" fontStyle="italic">aa</text>
      <text x="112" y="102" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5" fontFamily="monospace">recesivo</text>
      {/* Ratio */}
      <text x="78" y="118" textAnchor="middle" fill={gold} fontSize="5.5" fontFamily="monospace">3 dominantes : 1 recesivo</text>
      {/* RIGHT: Key concepts */}
      <rect x="165" y="1" width="154" height="126" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="242" y="11" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">CONCEPTOS CLAVE</text>
      {[
        { label:"Gen",       desc:["segmento de ADN que codifica","una característica heredable"],  color:a    },
        { label:"Alelo",     desc:["versión del gen","A=dominante · a=recesivo"],                   color:lila },
        { label:"Genotipo",  desc:["composición genética","AA, Aa, aa"],                            color:grn  },
        { label:"Fenotipo",  desc:["característica observable","color, altura, grupo sanguíneo"],   color:gold },
      ].map(({ label, desc, color }, i) => (
        <g key={i}>
          <rect x="170" y={16+i*27} width="144" height="23" rx="3"
            fill={`${color}18`} stroke={`${color}45`} strokeWidth="1"/>
          <text x="176" y={28+i*27} fill={color} fontSize="6" fontFamily="monospace" fontWeight="700">{label}</text>
          {desc.map((line,li)=>(
            <text key={li} x="176" y={28+i*27+7+li*7} fill="rgba(255,255,255,0.4)" fontSize="4.5" fontFamily="monospace">{line}</text>
          ))}
        </g>
      ))}
      <text x="242" y="125" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="5" fontFamily="monospace">Mendel: segregación + distribución independiente</text>
    </svg>
  );
}
