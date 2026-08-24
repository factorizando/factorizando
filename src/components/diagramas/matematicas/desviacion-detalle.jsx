// Diagrama «desviacion-detalle» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function DesviacionDetalleSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted;
  const X = (v) => 24 + v * 23;
  const axisY = 68, datos = [2, 4, 6, 8, 10], mean = 6;
  return (
    <svg viewBox="0 0 320 110" width="100%" style={{ display: "block", maxHeight: 120 }}>
      <line x1={X(0)} y1={axisY} x2={X(12)} y2={axisY} stroke={tema.border} strokeWidth="1.4" />
      <line x1={X(mean)} y1={28} x2={X(mean)} y2={axisY + 6} stroke={bl} strokeWidth="1.8" strokeDasharray="5 4" />
      <text x={X(mean)} y={22} fill={bl} fontSize="10.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">media = 6</text>
      {datos.map((v, i) => {
        const d = v - mean;
        return (
          <g key={i}>
            <line x1={X(v)} y1={axisY} x2={X(mean)} y2={axisY} stroke={d === 0 ? mu : a} strokeWidth="1" opacity="0.35" />
            <circle cx={X(v)} cy={axisY} r="5.5" fill={tema.acentoMed} stroke={a} strokeWidth="1.6" />
            <text x={X(v)} y={axisY + 18} fill={mu} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">{v}</text>
            {d !== 0 && (
              <text x={(X(v) + X(mean)) / 2} y={axisY - 9} fill={a} fontSize="9.5" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">{d > 0 ? `+${d}` : d}</text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
