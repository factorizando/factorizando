// Diagrama «te2-mediana» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function Te2MedianaSVG({ tema }) {
  return (
    <svg viewBox="0 0 300 152" width="100%" style={{ display: "block", maxHeight: 132 }}>
      <polygon points="10,128 278,128 228,18 58,18" fill={tema.azulSuave} stroke={tema.azul} strokeWidth="2" opacity="0.85"/>
      <line x1="34" y1="73" x2="253" y2="73" stroke={tema.acento} strokeWidth="2" strokeDasharray="6,4" opacity="0.8"/>
      <text x="144" y="146" fill={tema.azul} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">B = 14</text>
      <text x="143" y="13" fill={tema.verde} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">b = 6</text>
      <text x="143" y="67" fill={tema.acento} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">m = ?</text>
    </svg>
  );
}
