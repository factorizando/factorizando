// Diagrama «fisica-fuerzas» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function FisicaFuerzasSVG({ tema }) {
  const a = tema.acento, grn = "#4ab890", gold = "#f5c842", red = "#ff7755";
  const arrowV = (x, y1, y2, color, w=1.5) => {
    const dn = y2 > y1;
    return (
      <g>
        <line x1={x} y1={y1} x2={x} y2={dn ? y2-5 : y2+5} stroke={color} strokeWidth={w}/>
        {dn
          ? <polygon points={`${x-4},${y2-5} ${x+4},${y2-5} ${x},${y2}`} fill={color}/>
          : <polygon points={`${x-4},${y2+5} ${x+4},${y2+5} ${x},${y2}`} fill={color}/>}
      </g>
    );
  };
  const arrowH = (y, x1, x2, color, w=1.5) => {
    const rt = x2 > x1;
    return (
      <g>
        <line x1={x1} y1={y} x2={rt ? x2-5 : x2+5} y2={y} stroke={color} strokeWidth={w}/>
        {rt
          ? <polygon points={`${x2-5},${y-4} ${x2-5},${y+4} ${x2},${y}`} fill={color}/>
          : <polygon points={`${x2+5},${y-4} ${x2+5},${y+4} ${x2},${y}`} fill={color}/>}
      </g>
    );
  };
  return (
    <svg viewBox="0 0 320 130" width="100%" style={{ display:"block" }}>
      {/* LEFT: Equilibrio y fricción */}
      <rect x="1" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="78" y="11" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">EQUILIBRIO · FRICCIÓN</text>
      <line x1="18" y1="86" x2="142" y2="86" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
      {[22,32,42,52,62,72,82,92,102,112,122,132].map(x=>(
        <line key={x} x1={x} y1="86" x2={x-5} y2="93" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
      ))}
      <rect x="56" y="56" width="44" height="30" rx="3" fill={`${a}28`} stroke={a} strokeWidth="1.5"/>
      <text x="78" y="73" textAnchor="middle" fill={a} fontSize="8" fontWeight="600">m</text>
      {arrowV(78, 87, 112, gold, 2)}
      <text x="84" y="105" fill={gold} fontSize="6" fontFamily="monospace" fontWeight="600">W=mg</text>
      {arrowV(78, 55, 30, grn, 2)}
      <text x="84" y="43" fill={grn} fontSize="6" fontFamily="monospace" fontWeight="600">N</text>
      {arrowH(71, 55, 28, red, 2)}
      <text x="32" y="67" fill={red} fontSize="6" fontFamily="monospace" fontWeight="600">f</text>
      <line x1="101" y1="71" x2="127" y2="71" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="3,2"/>
      <polygon points="122,67 122,75 127,71" fill="rgba(255,255,255,0.35)"/>
      <text x="129" y="68" fill="rgba(255,255,255,0.3)" fontSize="5.5" fontFamily="monospace">v →</text>
      <text x="78" y="120" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">ΣF = 0 → equilibrio</text>
      <text x="78" y="128" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="5" fontFamily="monospace">f ≤ μ · N</text>
      {/* RIGHT: Flotación */}
      <rect x="165" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="242" y="11" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">FLOTACIÓN · ARQUÍMEDES</text>
      <rect x="192" y="26" width="100" height="82" rx="3" fill="none" stroke="rgba(100,150,220,0.4)" strokeWidth="1.5"/>
      <rect x="193" y="58" width="98" height="49" rx="2" fill="rgba(40,80,160,0.3)"/>
      <line x1="192" y1="58" x2="292" y2="58" stroke="rgba(100,150,255,0.4)" strokeWidth="1"/>
      <text x="200" y="95" fill="rgba(100,150,255,0.35)" fontSize="5" fontFamily="monospace">fluido</text>
      <rect x="218" y="43" width="48" height="30" rx="3" fill={`${a}35`} stroke={a} strokeWidth="1.5"/>
      <text x="242" y="61" textAnchor="middle" fill={a} fontSize="8" fontWeight="600">m</text>
      {arrowV(242, 42, 16, grn, 2)}
      <text x="249" y="30" fill={grn} fontSize="7" fontFamily="monospace" fontWeight="700">E ↑</text>
      {arrowV(242, 74, 98, gold, 2)}
      <text x="249" y="92" fill={gold} fontSize="7" fontFamily="monospace" fontWeight="700">W ↓</text>
      <text x="242" y="116" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">E = peso fluido desplazado</text>
      <text x="242" y="125" textAnchor="middle" fill={grn} fontSize="5.5" fontFamily="monospace" fontWeight="600">E = W → flota en equilibrio</text>
    </svg>
  );
}
