// Diagrama «dos-dados» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function DosDadosSVG({ tema }) {
  const a = tema.acento, bl = tema.azul;
  const s = 22, gx = 40, gy = 26;
  const cells = [];
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      const fav = (i + 1) + (j + 1) === 7;
      cells.push(
        <rect key={`c${i}-${j}`} x={gx + j * s} y={gy + i * s} width={s - 2} height={s - 2} rx={3}
          fill={fav ? `${a}40` : tema.azulSuave} stroke={fav ? a : tema.border} strokeWidth={fav ? 1.5 : 1}/>
      );
    }
  }
  const labels = [];
  for (let k = 0; k < 6; k++) {
    labels.push(<text key={`t${k}`} x={gx + k * s + (s - 2) / 2} y={gy - 7} fill={bl} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">{k + 1}</text>);
    labels.push(<text key={`l${k}`} x={gx - 9} y={gy + k * s + (s - 2) / 2 + 3} fill={a} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">{k + 1}</text>);
  }
  return (
    <svg viewBox="0 0 196 176" width="100%" style={{ display: "block", maxHeight: 188 }}>
      {cells}{labels}
      <text x={gx + 3 * s} y={gy + 6 * s + 16} fill={a} fontSize="11" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">suma = 7 → 6 de 36</text>
    </svg>
  );
}
