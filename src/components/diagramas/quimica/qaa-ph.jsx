// Diagrama «qaa-ph» — quimica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function QaaPhSVG({ tema }) {
  const T = tema.texto, mu = tema.muted;
  const segs = [
    { x: 12, c: "#f87171" }, { x: 38, c: "#fb923c" }, { x: 64, c: "#fbbf24" },
    { x: 90, c: "#facc15" }, { x: 116, c: "#a3e635" }, { x: 142, c: "#4ade80" },
    { x: 168, c: "#34d399" }, { x: 194, c: "#22d3ee" }, { x: 220, c: "#60a5fa" }, { x: 246, c: "#a78bfa" },
  ];
  return (
    <svg viewBox="0 0 290 110" width="100%" style={{ display: "block", maxHeight: 120 }}>
      <text x={145} y={14} textAnchor="middle" fill={mu} fontSize="8" fontFamily="'DM Sans',sans-serif">escala de pH (0 – 14)</text>
      {segs.map(({ x, c }, i) => (
        <g key={i}>
          <rect x={x} y={24} width={24} height={22} fill={c} opacity="0.8" />
          <text x={x + 12} y={39} textAnchor="middle" fill="#0d0810" fontSize="8" fontFamily="'DM Sans',sans-serif" fontWeight="700">{[0,1,3,5,6,7,8,10,12,14][i]}</text>
        </g>
      ))}
      <text x={50} y={66} textAnchor="middle" fill="#f87171" fontSize="9" fontFamily="'DM Sans',sans-serif" fontWeight="700">ÁCIDO</text>
      <text x={50} y={78} textAnchor="middle" fill={mu} fontSize="6.5" fontFamily="'DM Sans',sans-serif">pH &lt; 7 · H⁺</text>
      <text x={155} y={66} textAnchor="middle" fill="#4ade80" fontSize="9" fontFamily="'DM Sans',sans-serif" fontWeight="700">NEUTRO 7</text>
      <text x={245} y={66} textAnchor="middle" fill="#60a5fa" fontSize="9" fontFamily="'DM Sans',sans-serif" fontWeight="700">BÁSICO</text>
      <text x={245} y={78} textAnchor="middle" fill={mu} fontSize="6.5" fontFamily="'DM Sans',sans-serif">pH &gt; 7 · OH⁻</text>
      <text x={145} y={98} textAnchor="middle" fill={T} fontSize="7" fontFamily="'DM Sans',sans-serif">limón · vinagre  |  agua pura  |  bicarbonato · jabón</text>
    </svg>
  );
}
