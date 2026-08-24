// Diagrama «evo-pruebas» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function EvoPruebasSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto;
  // brazo homólogo esquemático: húmero + dos huesos + dígitos
  const limb = (x, label) => (
    <g>
      <line x1={x} y1={24} x2={x} y2={44} stroke={a} strokeWidth="3.4" strokeLinecap="round" />
      <line x1={x} y1={44} x2={x - 7} y2={64} stroke={bl} strokeWidth="2.6" strokeLinecap="round" />
      <line x1={x} y1={44} x2={x + 7} y2={64} stroke={bl} strokeWidth="2.6" strokeLinecap="round" />
      {[-8, -3, 2, 7].map((d, i) => <line key={i} x1={x - 7 + (i < 2 ? 0 : 14)} y1={64} x2={x - 10 + i * 5} y2={78} stroke={a} strokeWidth="1.5" strokeLinecap="round" />)}
      <text x={x} y={92} textAnchor="middle" fill={T} fontSize="7" fontFamily="'Figtree', system-ui, sans-serif">{label}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 250 110" width="100%" style={{ display: "block", maxHeight: 120 }}>
      <text x={125} y={14} textAnchor="middle" fill={mu} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif">órganos homólogos: mismos huesos, distinta función</text>
      {limb(50, "humano")}
      {limb(125, "murciélago")}
      {limb(200, "ballena")}
      <text x={125} y={104} textAnchor="middle" fill={a} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">→ ancestro común</text>
    </svg>
  );
}
