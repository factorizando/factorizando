// Interactivo (mafs): arrastra el punto Q sobre la parábola y observa cómo la
// pendiente de la secante PQ tiende a 2 (la pendiente de la tangente en P)
// conforme Q se acerca a P. Estrena la capa interactiva del proyecto.
import {
  Mafs,
  Coordinates,
  Plot,
  Line,
  Point,
  Text,
  Theme,
  useMovablePoint,
} from "mafs";
import "mafs/core.css";

export default function DerivadaTangente() {
  const f = (x) => x * x;
  const P = [1, 1];

  // Q arrastrable, restringido a la parábola y = x²
  const q = useMovablePoint([2.2, f(2.2)], {
    constrain: ([x]) => [x, f(x)],
  });
  const a = q.point[0];
  const cerca = Math.abs(a - 1) < 0.06;
  const mSec = cerca ? 2 : (f(a) - f(1)) / (a - 1);

  return (
    <div
      className="dm-mafs"
      style={{
        "--mafs-bg": "transparent",
        "--mafs-fg": "#e8e8e8",
        "--mafs-line-color": "rgba(255,255,255,0.14)",
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      <Mafs height={320} viewBox={{ x: [-1.3, 3.4], y: [-1.4, 7], padding: 0.2 }}>
        <Coordinates.Cartesian subdivisions={2} />
        <Plot.OfX y={f} color={Theme.blue} />

        {/* tangente en P (referencia, pendiente 2) */}
        <Line.PointSlope point={P} slope={2} color={Theme.green} style="dashed" />

        {/* secante P–Q (oculta si Q ≈ P para evitar recta degenerada) */}
        {!cerca && <Line.ThroughPoints point1={P} point2={q.point} color={Theme.pink} />}

        <Point x={P[0]} y={P[1]} color={Theme.yellow} />
        {q.element}

        <Text x={-1.2} y={6.5} attach="e" color={Theme.pink} size={18}>
          {`m secante = ${mSec.toFixed(2)}`}
        </Text>
        <Text x={-1.2} y={5.6} attach="e" color={Theme.green} size={16}>
          {`m tangente = 2`}
        </Text>
      </Mafs>
    </div>
  );
}
