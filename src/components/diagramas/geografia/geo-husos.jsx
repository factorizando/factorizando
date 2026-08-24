// Diagrama «geo-husos» — geografia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function GeoHusosSVG({ tema }) {
  const a = tema.acento;
  const g = "#f5c842";
  const r = "rgba(255,120,90,0.75)";
  // 25 zonas: UTC-12 a UTC+12
  const zones = Array.from({ length: 25 }, (_, i) => i - 12);
  const zW = 11.6; // zone width in px (25 * 11.6 = 290, con padding = 320)
  const startX = 15;
  const barY = 26; const barH = 44;
  return (
    <svg viewBox="0 0 320 100" width="100%" style={{ display: "block" }}>
      <text x="160" y="11" textAnchor="middle" fill={a} fontSize="8" fontFamily="monospace" letterSpacing="1.5">HUSOS HORARIOS (UTC)</text>
      {zones.map((offset, i) => {
        const x = startX + i * zW;
        const isMx = offset >= -8 && offset <= -5;
        const isGmt = offset === 0;
        const isDate = offset === -12 || offset === 12;
        const fill = isDate ? "rgba(255,120,90,0.18)" : isGmt ? `${a}22` : isMx ? `${g}20` : "rgba(255,255,255,0.04)";
        const stroke = isDate ? "rgba(255,120,90,0.5)" : isGmt ? `${a}60` : isMx ? `${g}55` : "rgba(255,255,255,0.12)";
        const strokeW = (isGmt || isMx || isDate) ? 1.2 : 0.5;
        return (
          <g key={i}>
            <rect x={x} y={barY} width={zW} height={barH} fill={fill} stroke={stroke} strokeWidth={strokeW}/>
            {(isGmt || isDate || i % 4 === 0) && (
              <text x={x + zW / 2} y={barY + barH / 2 + 3.5} textAnchor="middle"
                fill={isDate ? r : isGmt ? a : "rgba(255,255,255,0.4)"}
                fontSize="5.5" fontFamily="monospace">
                {offset > 0 ? `+${offset}` : offset}
              </text>
            )}
          </g>
        );
      })}
      {/* Mexico bracket */}
      {(() => {
        const mxStart = startX + ((-8) - (-12)) * zW;
        const mxEnd = startX + ((-5) - (-12) + 1) * zW;
        return (
          <g>
            <line x1={mxStart} y1={barY + barH + 4} x2={mxEnd} y2={barY + barH + 4} stroke={g} strokeWidth="1.2"/>
            <line x1={mxStart} y1={barY + barH + 2} x2={mxStart} y2={barY + barH + 6} stroke={g} strokeWidth="1"/>
            <line x1={mxEnd}   y1={barY + barH + 2} x2={mxEnd}   y2={barY + barH + 6} stroke={g} strokeWidth="1"/>
            <text x={(mxStart + mxEnd) / 2} y={barY + barH + 15} textAnchor="middle" fill={g} fontSize="6.5" fontFamily="monospace">MÉXICO (UTC−8 a UTC−5)</text>
          </g>
        );
      })()}
      {/* GMT label */}
      {(() => {
        const gmtX = startX + (0 - (-12)) * zW + zW / 2;
        return <text x={gmtX} y={barY - 4} textAnchor="middle" fill={a} fontSize="6" fontFamily="monospace">GMT/UTC</text>;
      })()}
      {/* Date line labels */}
      <text x={startX - 2} y={barY - 4} textAnchor="middle" fill={r} fontSize="5.5" fontFamily="monospace">LÍNEA</text>
      <text x={startX - 2} y={barY + 2} textAnchor="middle" fill={r} fontSize="5.5" fontFamily="monospace">DE FECHA</text>
      <text x={startX + 25 * zW} y={barY - 4} textAnchor="middle" fill={r} fontSize="5.5" fontFamily="monospace">LÍNEA</text>
      <text x={startX + 25 * zW} y={barY + 2} textAnchor="middle" fill={r} fontSize="5.5" fontFamily="monospace">DE FECHA</text>
    </svg>
  );
}
