// Diagrama «est-portada» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function EstPortadaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul;
  const heights = [30, 54, 78, 62, 40, 22];
  const bw = 26, gap = 10, x0 = 30, base = 104, meanY = 54;
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 132, maxWidth: 320 }}>
      {heights.map((h, i) => (
        <rect key={i} x={x0 + i * (bw + gap)} y={base - h} width={bw} height={h} rx={3}
          fill={tema.acentoMed} stroke={a} strokeWidth="1.6" />
      ))}
      <line x1="16" y1={base} x2="236" y2={base} stroke={tema.border} strokeWidth="1.5" />
      <line x1="16" y1={meanY} x2="236" y2={meanY} stroke={bl} strokeWidth="2" strokeDasharray="6 4" />
      <text x="232" y={meanY - 6} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">media</text>
    </svg>
  );
}
