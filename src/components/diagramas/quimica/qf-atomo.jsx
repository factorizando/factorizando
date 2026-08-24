// Diagrama «qf-atomo» — quimica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function QfAtomoSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto, grn = tema.verde;
  return (
    <svg viewBox="0 0 280 130" width="100%" style={{ display: "block", maxHeight: 140 }}>
      {/* órbitas */}
      <ellipse cx={120} cy={65} rx={62} ry={26} fill="none" stroke={mu} strokeWidth="1" opacity="0.5" />
      <ellipse cx={120} cy={65} rx={40} ry={16} fill="none" stroke={mu} strokeWidth="1" opacity="0.5" />
      {/* núcleo: protones (+) y neutrones (0) */}
      <circle cx={114} cy={60} r={7} fill="rgba(192,132,252,0.5)" stroke={a} strokeWidth="1.4" />
      <text x={114} y={63} textAnchor="middle" fill={a} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">+</text>
      <circle cx={126} cy={64} r={7} fill="rgba(120,120,140,0.4)" stroke={mu} strokeWidth="1.4" />
      <text x={126} y={67} textAnchor="middle" fill={mu} fontSize="7" fontFamily="'Figtree', system-ui, sans-serif">0</text>
      <circle cx={120} cy={72} r={7} fill="rgba(192,132,252,0.5)" stroke={a} strokeWidth="1.4" />
      <text x={120} y={75} textAnchor="middle" fill={a} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">+</text>
      {/* electrones */}
      <circle cx={182} cy={65} r={4} fill={bl} /><text x={182} y={56} textAnchor="middle" fill={bl} fontSize="7" fontFamily="'Figtree', system-ui, sans-serif">−</text>
      <circle cx={80} cy={49} r={4} fill={bl} />
      {/* leyendas */}
      <text x={20} y={108} fill={a} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">protón (+)</text>
      <text x={108} y={108} fill={mu} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">neutrón (0)</text>
      <text x={196} y={108} fill={bl} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">electrón (−)</text>
      <text x={140} y={124} textAnchor="middle" fill={grn} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">Z = protones · A = protones + neutrones</text>
    </svg>
  );
}
