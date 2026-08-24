// Diagrama «rep-planta» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function RepPlantaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto, gold = "#f5c842";
  return (
    <svg viewBox="0 0 240 140" width="100%" style={{ display: "block", maxHeight: 150, maxWidth: 300 }}>
      {/* pétalos */}
      {[0,1,2,3,4].map(i => { const ang = -Math.PI/2 + i*2*Math.PI/5; const cx=110+24*Math.cos(ang), cy=50+24*Math.sin(ang); return <ellipse key={i} cx={cx} cy={cy} rx={13} ry={8} fill="rgba(134,239,172,0.18)" stroke={bl} strokeWidth="1.4" transform={`rotate(${ang*180/Math.PI+90} ${cx} ${cy})`} />; })}
      {/* centro/pistilo */}
      <circle cx={110} cy={50} r={11} fill="rgba(245,200,66,0.25)" stroke={gold} strokeWidth="1.6" />
      {/* estambres */}
      {[-1,0,1].map((d,i) => <g key={i}><line x1={110+d*8} y1={50} x2={110+d*14} y2={32} stroke={a} strokeWidth="1.3" /><circle cx={110+d*14} cy={32} r={3} fill={a} /></g>)}
      <text x={150} y={30} fill={a} fontSize="7" fontFamily="'DM Sans',sans-serif">estambre (polen)</text>
      <text x={146} y={54} fill={gold} fontSize="7" fontFamily="'DM Sans',sans-serif">pistilo (óvulo)</text>
      {/* tallo */}
      <line x1={110} y1={61} x2={110} y2={120} stroke={tema.verde} strokeWidth="2.5" />
      {/* fruto/semilla */}
      <ellipse cx={84} cy={104} rx={11} ry={9} fill="rgba(52,211,153,0.2)" stroke={a} strokeWidth="1.6" />
      <circle cx={84} cy={104} r={3.5} fill={bl} />
      <text x={84} y={130} textAnchor="middle" fill={mu} fontSize="7" fontFamily="'DM Sans',sans-serif">fruto + semilla</text>
      <text x={158} y={104} textAnchor="middle" fill={T} fontSize="7.5" fontFamily="'DM Sans',sans-serif">polinización</text>
      <text x={158} y={116} textAnchor="middle" fill={mu} fontSize="7" fontFamily="'DM Sans',sans-serif">→ semilla → fruto</text>
    </svg>
  );
}
