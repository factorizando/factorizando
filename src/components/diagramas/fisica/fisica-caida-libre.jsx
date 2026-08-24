// Diagrama «fisica-caida-libre» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function FisicaCaidaLibreSVG({ tema }) {
  const a = tema.acento, grn = "#4ab890", gold = "#f5c842";
  const ballX = 75;
  const rows = [
    { y: 22,  h: 20, v: 0,  t: 0, color: a,    ec: "mín" },
    { y: 62,  h: 15, v: 10, t: 1, color: grn,  ec: "↑" },
    { y: 102, h: 0,  v: 20, t: 2, color: gold, ec: "máx" },
  ];
  const arrowDn = (x, y1, y2, color) => (
    <g>
      <line x1={x} y1={y1} x2={x} y2={y2-4} stroke={color} strokeWidth="1.5"/>
      <polygon points={`${x-3},${y2-4} ${x+3},${y2-4} ${x},${y2}`} fill={color}/>
    </g>
  );
  return (
    <svg viewBox="0 0 320 128" width="100%" style={{ display:"block" }}>
      <rect x="0" y="0" width="320" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="160" y="11" textAnchor="middle" fill={a}
        fontSize="6.5" fontFamily="monospace" fontWeight="700">CAÍDA LIBRE (g = 10 m/s²)</text>
      {/* Left panel */}
      <rect x="8" y="15" width="144" height="110" rx="4"
        fill="rgba(0,0,0,0.18)" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
      {/* Ground */}
      <line x1="16" y1="110" x2="144" y2="110" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
      {[18,26,34,42,50,58,66,74,82,90,98,106,114,122,130,138].map(x=>(
        <line key={x} x1={x} y1="110" x2={x-4} y2="116" stroke="rgba(255,255,255,0.12)" strokeWidth="0.7"/>
      ))}
      {/* Gravity arrow */}
      {arrowDn(116, 24, 54, "rgba(255,255,255,0.25)")}
      <text x="122" y="40" fill="rgba(255,255,255,0.25)" fontSize="5.5" fontFamily="monospace">g↓</text>
      {/* Trajectory dashed line */}
      <line x1={ballX} y1="22" x2={ballX} y2="100" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="2,3"/>
      {/* Balls and velocity arrows */}
      {rows.map(({ y, h, v, color }, i) => (
        <g key={i}>
          <circle cx={ballX} cy={y} r="8" fill={color} opacity="0.85"/>
          <text x={ballX} y={y+3} textAnchor="middle" fill="white" fontSize="6.5" fontWeight="700">{i+1}</text>
          <text x="18" y={y+3} fill={color} fontSize="5.5" fontFamily="monospace">h={h}m</text>
          {v > 0 && arrowDn(ballX-16, y+8, Math.min(y+8+v*1.6, 106), color)}
          <text x="90" y={y-1} fill={color} fontSize="5.5" fontFamily="monospace">v={v} m/s</text>
        </g>
      ))}
      {/* Right panel: table */}
      <rect x="162" y="15" width="150" height="110" rx="4"
        fill="rgba(0,0,0,0.18)" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
      <text x="237" y="27" textAnchor="middle" fill={a}
        fontSize="6" fontFamily="monospace" fontWeight="700">VALORES POR INSTANTE</text>
      {/* Header */}
      {[["t (s)",166],["h (m)",200],["v (m/s)",240],["Ep",285]].map(([txt,x])=>(
        <text key={x} x={x} y="40" fill="rgba(255,255,255,0.45)" fontSize="5.5" fontFamily="monospace">{txt}</text>
      ))}
      <line x1="166" y1="43" x2="308" y2="43" stroke="rgba(255,255,255,0.15)" strokeWidth="0.7"/>
      {rows.map(({ h, v, t, color, ec }, i) => {
        const ry = 58 + i * 20;
        return (
          <g key={i}>
            <text x="172" y={ry} fill={color} fontSize="7" fontFamily="monospace" fontWeight="600">{t}</text>
            <text x="203" y={ry} fill={color} fontSize="7" fontFamily="monospace" fontWeight="600">{h}</text>
            <text x="240" y={ry} fill={color} fontSize="7" fontFamily="monospace" fontWeight="600">{v}</text>
            <text x="285" y={ry} fill={color} fontSize="7" fontFamily="monospace">{ec}</text>
          </g>
        );
      })}
      <line x1="166" y1="103" x2="308" y2="103" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
      <text x="237" y="113" textAnchor="middle"
        fill="rgba(255,255,255,0.3)" fontSize="5" fontFamily="monospace">v = g·t</text>
      <text x="237" y="121" textAnchor="middle"
        fill="rgba(255,255,255,0.3)" fontSize="5" fontFamily="monospace">h_caída = ½·g·t²</text>
    </svg>
  );
}
