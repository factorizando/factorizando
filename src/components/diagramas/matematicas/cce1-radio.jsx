// Diagrama «cce1-radio» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function Cce1RadioSVG({ tema }) {
  const cx=100, cy=80, r=63;
  const bl=tema.azul, a=tema.acento;
  return (
    <svg viewBox="0 0 220 162" width="100%" style={{display:"block",maxHeight:152}}>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="2"/>
      <circle cx={cx} cy={cy} r={3.5} fill={a}/>
      <text x={cx+4} y={cy-4} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">O</text>
      <text x={cx} y={cy+20} fill={a} fontSize="13" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="middle">C = 20π cm</text>
      <text x={cx} y={cy+38} fill="rgba(255,255,255,0.38)" fontSize="11" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">r = ?   →   A = ?</text>
    </svg>
  );
}
