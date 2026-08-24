// Diagrama «qf-compuestos» — quimica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function QfCompuestosSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto;
  const fila = (y, izq, der, c) => (
    <g>
      <rect x={20} y={y} width={108} height={20} rx={4} fill={`${c}1e`} stroke={c} strokeWidth="1.3" />
      <text x={74} y={y + 13} textAnchor="middle" fill={T} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">{izq}</text>
      <text x={150} y={y + 13} textAnchor="middle" fill={mu} fontSize="6.6" fontFamily="'Figtree', system-ui, sans-serif">→</text>
      <text x={220} y={y + 13} textAnchor="middle" fill={c} fontSize="7.3" fontFamily="'Figtree', system-ui, sans-serif">{der}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 290 125" width="100%" style={{ display: "block", maxHeight: 135 }}>
      {fila(8, "metal + O₂", "óxido básico", a)}
      {fila(32, "no metal + O₂", "óxido ácido (anhídrido)", bl)}
      {fila(56, "H + no metal", "ácido (libera H⁺)", a)}
      {fila(80, "metal + OH", "base / hidróxido (OH⁻)", bl)}
      {fila(104, "ácido + base", "sal + agua", a)}
    </svg>
  );
}
