import { M } from "../../../data/teoria/shared.jsx";

// Figura estática: parábola y=x² con recta secante (P→Q) y recta tangente en P.
// Diagrama de "preámbulo": ilustra la idea geométrica antes de la definición formal.
// Vive dentro de un DOCUMENTO, no de una diapositiva: DocumentoRenderer no pasa
// `tema`, así que aquí no hay rampa de acento que usar. Como sus dos hermanas
// (geom-dardo, venn-dos), toma los tokens de theme.css, que trae su propio par
// claro/oscuro. Antes traía rosa, verde y tinta cocidos y los ejes en
// rgba(255,255,255,·) —invisibles sobre el papel del tema claro—.
// El rosa y el verde se quedan siendo rosa y verde a propósito: el pie de figura
// los nombra ("la secante (rosa)… la tangente (verde)"), así que son un rótulo
// escrito, no un semáforo — y además se separan por el trazo, continua contra
// discontinua (docs/DISENO.md §2.1).
export default function DerivadaSecante() {
  const azul  = "var(--c-definicion)";
  const rosa  = "var(--c-ejercicio)";
  const verde = "var(--c-ejemplo)";
  const tinta = "var(--text)";
  const ejes  = "var(--border-strong)";
  const rotulo = "var(--text-muted)";

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
      <line x1={X(-0.6)} y1={Y(0)} x2={X(2.5)} y2={Y(0)} strokeWidth="1" style={{ stroke: ejes }} />
      <line x1={X(0)} y1={Y(-0.3)} x2={X(0)} y2={Y(4.6)} strokeWidth="1" style={{ stroke: ejes }} />
      <text x={X(2.5)} y={Y(0) + 14} fontSize="11" style={{ fill: rotulo }} fontStyle="italic">x</text>
      <text x={X(0) - 14} y={Y(4.6) + 4} fontSize="11" style={{ fill: rotulo }} fontStyle="italic">y</text>

      {/* parábola */}
      <path d={parabola} strokeWidth="2.2" style={{ fill: "none", stroke: azul }} />

      {/* secante */}
      <line x1={X(0.55)} y1={Y(sec(0.55))} x2={X(2.25)} y2={Y(sec(2.25))} strokeWidth="2" strokeDasharray="1 0" style={{ stroke: rosa }} />
      {/* tangente */}
      <line x1={X(0.15)} y1={Y(tan(0.15))} x2={X(1.85)} y2={Y(tan(1.85))} strokeWidth="2" strokeDasharray="5 4" style={{ stroke: verde }} />

      {/* puntos */}
      <circle cx={X(P.x)} cy={Y(P.y)} r="4.5" style={{ fill: tinta }} />
      <circle cx={X(Q.x)} cy={Y(Q.y)} r="4.5" style={{ fill: rosa }} />
      <text x={X(P.x) - 16} y={Y(P.y) + 4} fontSize="13" style={{ fill: tinta }} fontStyle="italic">P</text>
      <text x={X(Q.x) + 8} y={Y(Q.y) + 4} fontSize="13" style={{ fill: rosa }} fontStyle="italic">Q</text>

      {/* etiquetas de rectas */}
      <text x={X(2.0)} y={Y(sec(2.0)) - 6} fontSize="11.5" style={{ fill: rosa }}>secante</text>
      <text x={X(1.55)} y={Y(tan(1.55)) + 16} fontSize="11.5" style={{ fill: verde }}>tangente</text>
    </svg>
  );
}
