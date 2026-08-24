// Diagrama «as6-hex-circ» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function As6HexCircSVG({ tema }) {
  const cx=112, cy=112, r=82;
  const a=tema.acento, bl=tema.azul;
  const hex=Array.from({length:6},(_,i)=>{
    const ang=-Math.PI/2+i*Math.PI/3;
    return `${+(cx+r*Math.cos(ang)).toFixed(1)},${+(cy+r*Math.sin(ang)).toFixed(1)}`;
  });
  const hexPoints=hex.join(' ');
  return (
    <svg viewBox="0 0 238 232" width="100%" style={{display:"block",maxHeight:222}}>
      <circle cx={cx} cy={cy} r={r} fill={`${a}22`} stroke={a} strokeWidth="1.8" opacity="0.85"/>
      <polygon points={hexPoints} fill={tema.azulSuave} stroke={bl} strokeWidth="2"/>
      <text x={cx} y={cy+5} fill={bl} fontSize="11" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle" opacity="0.65">Hexágono</text>
      <text x={cx} y={cy+20} fill={bl} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle" opacity="0.45">l = r = 6 cm</text>
      {(() => {
        const [hx,hy]=hex[0].split(',').map(Number);
        return (
          <>
            <line x1={cx} y1={cy} x2={hx} y2={hy} stroke={a} strokeWidth="1.5" strokeDasharray="4,3" opacity="0.7"/>
            <text x={(cx+hx)/2+5} y={(cy+hy)/2+2} fill={a} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">r=6</text>
          </>
        );
      })()}
    </svg>
  );
}
