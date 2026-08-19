// Cómo se mueve el jugador según la topología del mundo.
//
// Es la función que hace que los mundos sean distintos de verdad y no solo de
// color. Hoy solo Flatland tiene mapas, pero los tres casos están escritos
// desde ahora porque son quince líneas y porque escribirlos juntos obliga a
// ver en qué se parecen:
//
//   plano   te topas con el borde y ahí se acaba el mundo.
//   toro    sales por la derecha y entras por la izquierda; igual arriba y
//           abajo. El mundo de Pac-Man, que es una dona.
//   mobius  sales por un lado y entras por el otro, pero **de cabeza**: la
//           fila se invierte. Por eso la banda tiene una sola cara.
export function mover({ fila, columna }, direccion, { mapa, topologia }) {
  const alto = mapa.length;
  const ancho = mapa[0].length;
  const [df, dc] = { arriba: [-1, 0], abajo: [1, 0], izquierda: [0, -1], derecha: [0, 1] }[direccion];

  let f = fila + df;
  let c = columna + dc;

  if (topologia === "toro") {
    f = (f + alto) % alto;
    c = (c + ancho) % ancho;
  } else if (topologia === "mobius") {
    // Solo los lados izquierdo y derecho están pegados, y al cruzarlos la
    // altura se voltea. Arriba y abajo siguen siendo bordes.
    if (c < 0) { c = ancho - 1; f = alto - 1 - f; }
    else if (c >= ancho) { c = 0; f = alto - 1 - f; }
    if (f < 0 || f >= alto) return { fila, columna };
  } else if (f < 0 || c < 0 || f >= alto || c >= ancho) {
    return { fila, columna };
  }

  if (mapa[f][c] === "#") return { fila, columna };
  return { fila: f, columna: c };
}

export const DIRECCIONES = ["arriba", "abajo", "izquierda", "derecha"];

// De un toque en una casilla a la dirección, si es vecina. Deja jugar tocando
// el suelo, que es lo natural en tablet, sin renunciar a las flechas.
export function direccionHacia(desde, hasta) {
  const df = hasta.fila - desde.fila;
  const dc = hasta.columna - desde.columna;
  if (df === -1 && dc === 0) return "arriba";
  if (df === 1 && dc === 0) return "abajo";
  if (df === 0 && dc === -1) return "izquierda";
  if (df === 0 && dc === 1) return "derecha";
  return null;
}
