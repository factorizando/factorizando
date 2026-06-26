// Figura estática: parábola y=x² con recta secante (P→Q) y recta tangente en P.
// Diagrama de "preámbulo": ilustra la idea geométrica antes de la definición formal.
export default function DerivadaSecante({ tema }) {
  const azul = tema?.acento || "#78b0ff";
  const rosa = "#f472b6";
  const verde = "#5fd08a";
  const tinta = "#e8e4dc";

  const ox = 50, oy = 205, sx = 70, sy = 40;
  const X = (x) => ox + x * sx;
  const Y = (y) => oy - y * sy;

  // Parábola y = x²
  const pts = [];
  for (let x = -0.55; x <= 2.45; x += 0.05) pts.push(`${X(x).toFixed(1)},${Y(x * x).toFixed(1)}`);
  const parabola = "M " + pts.join(" L ");

  const P = { x: 1, y: 1 };           // punto fijo
  const Q = { x: 2, y: 4 };           // segundo punto
  // tangente en P: pendiente 2  →  y = 2x - 1
  const tan = (x) => 2 * x - 1;
  // secante P-Q: pendiente 3  →  y = 3x - 2
  const sec = (x) => 3 * x - 2;

  return (
    <svg viewBox="0 0 330 235" width="100%" style={{ maxWidth: 420, display: "block", margin: "0 auto" }}>
      {/* ejes */}
      <line x1={X(-0.6)} y1={Y(0)} x2={X(2.5)} y2={Y(0)} stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      <line x1={X(0)} y1={Y(-0.3)} x2={X(0)} y2={Y(4.6)} stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      <text x={X(2.5)} y={Y(0) + 14} fill="rgba(255,255,255,0.4)" fontSize="11" fontStyle="italic">x</text>
      <text x={X(0) - 14} y={Y(4.6) + 4} fill="rgba(255,255,255,0.4)" fontSize="11" fontStyle="italic">y</text>

      {/* parábola */}
      <path d={parabola} fill="none" stroke={azul} strokeWidth="2.2" />

      {/* secante */}
      <line x1={X(0.55)} y1={Y(sec(0.55))} x2={X(2.25)} y2={Y(sec(2.25))} stroke={rosa} strokeWidth="2" strokeDasharray="1 0" />
      {/* tangente */}
      <line x1={X(0.15)} y1={Y(tan(0.15))} x2={X(1.85)} y2={Y(tan(1.85))} stroke={verde} strokeWidth="2" strokeDasharray="5 4" />

      {/* puntos */}
      <circle cx={X(P.x)} cy={Y(P.y)} r="4.5" fill={tinta} />
      <circle cx={X(Q.x)} cy={Y(Q.y)} r="4.5" fill={rosa} />
      <text x={X(P.x) - 16} y={Y(P.y) + 4} fill={tinta} fontSize="13" fontStyle="italic">P</text>
      <text x={X(Q.x) + 8} y={Y(Q.y) + 4} fill={rosa} fontSize="13" fontStyle="italic">Q</text>

      {/* etiquetas de rectas */}
      <text x={X(2.0)} y={Y(sec(2.0)) - 6} fill={rosa} fontSize="11.5">secante</text>
      <text x={X(1.55)} y={Y(tan(1.55)) + 16} fill={verde} fontSize="11.5">tangente</text>
    </svg>
  );
}
