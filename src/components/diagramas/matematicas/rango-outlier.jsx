// Diagrama «rango-outlier» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function RangoOutlierSVG({ tema }) {
  const gr = tema.verde, rj = tema.rojo, mu = tema.muted;
  const X = (v) => 25 + (v - 1) * (270 / 22);
  const axisA = 68, axisB = 120;
  const setA = [3, 4, 5, 6, 7];
  const setB = [3, 4, 5, 6];
  const outlier = 23;
  return (
    <svg viewBox="0 0 320 154" width="100%" style={{ display: "block", maxHeight: 162 }}>
      {/* Set A */}
      <text x="22" y={axisA - 22} fill={gr} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">{"A = {3, 4, 5, 6, 7}"}</text>
      <line x1={X(1)} y1={axisA} x2={X(25)} y2={axisA} stroke={tema.border} strokeWidth="1.3" />
      {setA.map((v, i) => (
        <g key={i}>
          <circle cx={X(v)} cy={axisA} r="5.5" fill={`${gr}33`} stroke={gr} strokeWidth="1.6" />
          <text x={X(v)} y={axisA + 16} fill={mu} fontSize="9" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">{v}</text>
        </g>
      ))}
      <line x1={X(3)} y1={axisA - 9} x2={X(7)} y2={axisA - 9} stroke={gr} strokeWidth="1.8" />
      <line x1={X(3)} y1={axisA - 13} x2={X(3)} y2={axisA - 5} stroke={gr} strokeWidth="1.6" />
      <line x1={X(7)} y1={axisA - 13} x2={X(7)} y2={axisA - 5} stroke={gr} strokeWidth="1.6" />
      <text x={(X(3) + X(7)) / 2} y={axisA - 19} fill={gr} fontSize="9.5" fontFamily="'IBM Plex Mono',monospace" fontWeight="700" textAnchor="middle">R = 4</text>
      {/* Set B */}
      <text x="22" y={axisB - 22} fill={rj} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">{"B = {3, 4, 5, 6, 23}"}</text>
      <line x1={X(1)} y1={axisB} x2={X(25)} y2={axisB} stroke={tema.border} strokeWidth="1.3" />
      {setB.map((v, i) => (
        <g key={i}>
          <circle cx={X(v)} cy={axisB} r="5.5" fill={`${rj}22`} stroke={`${rj}88`} strokeWidth="1.6" />
          <text x={X(v)} y={axisB + 16} fill={mu} fontSize="9" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">{v}</text>
        </g>
      ))}
      <circle cx={X(outlier)} cy={axisB} r="5.5" fill={`${rj}44`} stroke={rj} strokeWidth="2" />
      <text x={X(outlier)} y={axisB + 16} fill={rj} fontSize="9" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">{outlier}</text>
      <line x1={X(3)} y1={axisB - 9} x2={X(outlier)} y2={axisB - 9} stroke={rj} strokeWidth="1.8" />
      <line x1={X(3)} y1={axisB - 13} x2={X(3)} y2={axisB - 5} stroke={rj} strokeWidth="1.6" />
      <line x1={X(outlier)} y1={axisB - 13} x2={X(outlier)} y2={axisB - 5} stroke={rj} strokeWidth="1.6" />
      <text x={(X(3) + X(outlier)) / 2} y={axisB - 19} fill={rj} fontSize="9.5" fontFamily="'IBM Plex Mono',monospace" fontWeight="700" textAnchor="middle">R = 20</text>
    </svg>
  );
}
