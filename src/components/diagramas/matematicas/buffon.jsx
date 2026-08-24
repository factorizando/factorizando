// Diagrama «buffon» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function BuffonSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto;
  const xs = 12, xe = 188, ys = [30, 66, 102, 138];
  const L = 16;
  // {cx, cy, ang°, cruza}
  const agujas = [
    [46, 66, 75, true], [120, 102, 60, true], [150, 30, 105, true], [96, 138, 88, true],
    [82, 48, 8, false], [164, 84, 0, false], [60, 120, 16, false],
  ];
  return (
    <svg viewBox="0 0 250 168" width="100%" style={{ display: "block", maxHeight: 180 }}>
      {ys.map((y, i) => (
        <line key={i} x1={xs} y1={y} x2={xe} y2={y} stroke={bl} strokeWidth="1.4" opacity="0.55"/>
      ))}
      {agujas.map(([cx, cy, ang, cruza], i) => {
        const rad = ang * Math.PI / 180;
        const dx = L * Math.cos(rad), dy = L * Math.sin(rad);
        const col = cruza ? a : mu;
        return (
          <line key={`n${i}`} x1={(cx - dx).toFixed(1)} y1={(cy - dy).toFixed(1)} x2={(cx + dx).toFixed(1)} y2={(cy + dy).toFixed(1)}
            stroke={col} strokeWidth="2.6" strokeLinecap="round" opacity={cruza ? 1 : 0.7}/>
        );
      })}
      {/* separación d */}
      <line x1={206} y1={30} x2={206} y2={66} stroke={T} strokeWidth="1" strokeDasharray="3 2"/>
      <text x={214} y={52} fill={T} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">d</text>
      <text x={200} y={92} fill={a} fontSize="11" fontFamily="'Figtree', system-ui, sans-serif">cruza</text>
      <text x={200} y={108} fill={mu} fontSize="11" fontFamily="'Figtree', system-ui, sans-serif">no cruza</text>
      <text x={200} y={138} fill={T} fontSize="12.5" fontFamily="'IBM Plex Mono',monospace">P=2ℓ/πd</text>
    </svg>
  );
}
