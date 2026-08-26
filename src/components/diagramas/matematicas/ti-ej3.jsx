// Diagrama «ti-ej3» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function TiEj3SVG({ tema }) {
  const cx=92, cy=80, r=60;
  const bl=tema.azul, a=tema.acento, gr=tema.canal(1);
  // Hipotenusa = diámetro horizontal A–C; B sobre la circunferencia con ángulo recto
  const Ax=cx-r, Ay=cy, Cx=cx+r, Cy=cy;
  // B colocado para que el ángulo en B sea recto (sobre el semicírculo)
  const Bx=cx+24, By=cy-Math.round(Math.sqrt(r*r-24*24));
  return (
    <svg viewBox="0 0 200 132" width="100%" style={{display:"block",maxHeight:150}}>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="1.8" opacity="0.8"/>
      <polygon points={`${Ax},${Ay} ${Bx},${By} ${Cx},${Cy}`} fill={`${a}22`} stroke={a} strokeWidth="2"/>
      <line x1={Ax} y1={Ay} x2={Cx} y2={Cy} stroke={gr} strokeWidth="2"/>
      <line x1={cx} y1={cy} x2={Bx} y2={By} stroke={bl} strokeWidth="1.4" strokeDasharray="4,3" opacity="0.7"/>
      <text x={(Ax+Bx)/2-12} y={(Ay+By)/2} fill={a} fontSize="12" fontFamily="Georgia,serif">6</text>
      <text x={(Cx+Bx)/2+4} y={(Cy+By)/2-2} fill={a} fontSize="12" fontFamily="Georgia,serif">8</text>
      <text x={cx} y={Cy+16} fill={gr} fontSize="11" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">diámetro</text>
      <text x={(cx+Bx)/2+2} y={(cy+By)/2-3} fill={bl} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic">r</text>
      <circle cx={cx} cy={cy} r={2.8} fill={gr}/>
    </svg>
  );
}
