// Diagrama «ele-serie-paralelo» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function EleSerieParaleloSVG({ tema }) {
  const a = tema.acento, mu = tema.muted, T = tema.texto;
  const z = (x) => `${x},34 ${x + 5},27 ${x + 11},41 ${x + 17},27 ${x + 23},41 ${x + 29},27 ${x + 35},34`;
  const zp = (x, y) => `${x},${y} ${x + 5},${y - 7} ${x + 11},${y + 7} ${x + 17},${y - 7} ${x + 23},${y + 7} ${x + 29},${y - 7} ${x + 35},${y}`;
  return (
    <svg viewBox="0 0 250 132" width="100%" style={{ display: "block", maxHeight: 142 }}>
      {/* serie */}
      <text x={12} y={38} fill={mu} fontSize="9.5" fontFamily="'Figtree', system-ui, sans-serif">serie</text>
      <line x1={56} y1={34} x2={84} y2={34} stroke={mu} strokeWidth="1.6" />
      <polyline points={z(84)} fill="none" stroke={a} strokeWidth="2" />
      <line x1={119} y1={34} x2={147} y2={34} stroke={mu} strokeWidth="1.6" />
      <polyline points={z(147)} fill="none" stroke={a} strokeWidth="2" />
      <line x1={182} y1={34} x2={214} y2={34} stroke={mu} strokeWidth="1.6" />
      {/* paralelo */}
      <text x={12} y={99} fill={mu} fontSize="9.5" fontFamily="'Figtree', system-ui, sans-serif">paralelo</text>
      <line x1={64} y1={96} x2={84} y2={96} stroke={mu} strokeWidth="1.6" />
      <line x1={84} y1={78} x2={84} y2={114} stroke={mu} strokeWidth="1.6" />
      <line x1={186} y1={78} x2={186} y2={114} stroke={mu} strokeWidth="1.6" />
      <line x1={186} y1={96} x2={206} y2={96} stroke={mu} strokeWidth="1.6" />
      <polyline points={zp(110, 78)} fill="none" stroke={a} strokeWidth="2" />
      <line x1={84} y1={78} x2={110} y2={78} stroke={mu} strokeWidth="1.6" />
      <line x1={145} y1={78} x2={186} y2={78} stroke={mu} strokeWidth="1.6" />
      <polyline points={zp(110, 114)} fill="none" stroke={a} strokeWidth="2" />
      <line x1={84} y1={114} x2={110} y2={114} stroke={mu} strokeWidth="1.6" />
      <line x1={145} y1={114} x2={186} y2={114} stroke={mu} strokeWidth="1.6" />
    </svg>
  );
}
