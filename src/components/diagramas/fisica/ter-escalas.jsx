// Diagrama «ter-escalas» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function TerEscalasSVG({ tema }) {
  const a = tema.acento, mu = tema.muted, rj = tema.rojo, az = tema.azul, T = tema.texto;
  const cols = [{ x: 60, t: "°C", hi: "100", lo: "0" }, { x: 125, t: "K", hi: "373", lo: "273" }, { x: 190, t: "°F", hi: "212", lo: "32" }];
  const yHi = 48, yLo = 114;
  return (
    <svg viewBox="0 0 250 142" width="100%" style={{ display: "block", maxHeight: 150 }}>
      <line x1={40} y1={yHi} x2={214} y2={yHi} stroke={rj} strokeWidth="1" strokeDasharray="4 3" opacity="0.55" />
      <line x1={40} y1={yLo} x2={214} y2={yLo} stroke={az} strokeWidth="1" strokeDasharray="4 3" opacity="0.55" />
      {cols.map((c, i) => (
        <g key={i}>
          <line x1={c.x} y1={34} x2={c.x} y2={122} stroke={mu} strokeWidth="1.6" />
          <text x={c.x} y={26} fill={a} fontSize="12" textAnchor="middle" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">{c.t}</text>
          <line x1={c.x - 4} y1={yHi} x2={c.x + 4} y2={yHi} stroke={mu} strokeWidth="1.5" />
          <line x1={c.x - 4} y1={yLo} x2={c.x + 4} y2={yLo} stroke={mu} strokeWidth="1.5" />
          <text x={c.x + 8} y={yHi + 3} fill={T} fontSize="9.5" fontFamily="'IBM Plex Mono',monospace">{c.hi}</text>
          <text x={c.x + 8} y={yLo + 3} fill={T} fontSize="9.5" fontFamily="'IBM Plex Mono',monospace">{c.lo}</text>
        </g>
      ))}
      <text x={16} y={yHi + 2} fill={rj} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif">hierve</text>
      <text x={14} y={yLo + 2} fill={az} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif">congela</text>
    </svg>
  );
}
