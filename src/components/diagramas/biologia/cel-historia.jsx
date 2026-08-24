// Diagrama «cel-historia» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function CelHistoriaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto;
  const hitos = [
    { x: 24, y: 40, año: "1665", quien: "Hooke", que: "«célula» (corcho)" },
    { x: 92, y: 40, año: "1674", quien: "Leeuwenhoek", que: "microorganismos" },
    { x: 162, y: 40, año: "1838-39", quien: "Schleiden / Schwann", que: "teoría celular" },
    { x: 236, y: 40, año: "1855", quien: "Virchow", que: "célula de célula" },
  ];
  return (
    <svg viewBox="0 0 270 120" width="100%" style={{ display: "block", maxHeight: 130 }}>
      {/* línea del tiempo */}
      <line x1={14} y1={58} x2={256} y2={58} stroke={mu} strokeWidth="1.6" />
      <polygon points={`262,58 254,54 254,62`} fill={mu} />
      {hitos.map(({ x, año, quien, que }, i) => (
        <g key={i}>
          <circle cx={x} cy={58} r={5} fill={a} opacity="0.6" stroke={a} strokeWidth="1.4" />
          <text x={x} y={34} textAnchor="middle" fill={bl} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">{año}</text>
          <text x={x} y={74} textAnchor="middle" fill={T} fontSize="7" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">{quien}</text>
          <text x={x} y={84} textAnchor="middle" fill={mu} fontSize="6" fontFamily="'Figtree', system-ui, sans-serif">{que}</text>
        </g>
      ))}
      <text x={135} y={108} textAnchor="middle" fill={mu} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">así se construyó la teoría celular</text>
    </svg>
  );
}
