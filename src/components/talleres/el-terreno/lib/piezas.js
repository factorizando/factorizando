// Las piezas de un terreno: sus cuadros de pasto y sus tramos de cerca.
//
// Vive aparte de los dibujos porque también lo usan los juegos para saber
// cuándo el terreno está completo (todos los tramos puestos, todo el suelo
// cubierto) sin tener que preguntarle nada al SVG.
export const idCelda = (f, c) => `c:${f}:${c}`;
export const idTramo = (lado, i) => `t:${lado}:${i}`;

// De vuelta: "t:arriba:3" → "arriba". Lo usan el conteo por lado y los lados
// que el juego de la vuelta deja cerrados.
export const ladoDe = (id) => id.split(":")[1];

// Todos los tramos de cerca de un rectángulo de `ancho × alto`, con su
// geometría. El total es siempre 2 × (ancho + alto), o sea el perímetro: la
// cerca no se calcula, se cuenta.
export function tramosDe(ancho, alto) {
  const t = [];
  for (let i = 0; i < ancho; i++) {
    t.push({ id: idTramo("arriba", i), x1: i, y1: 0, x2: i + 1, y2: 0 });
    t.push({ id: idTramo("abajo", i), x1: i, y1: alto, x2: i + 1, y2: alto });
  }
  for (let j = 0; j < alto; j++) {
    t.push({ id: idTramo("izq", j), x1: 0, y1: j, x2: 0, y2: j + 1 });
    t.push({ id: idTramo("der", j), x1: ancho, y1: j, x2: ancho, y2: j + 1 });
  }
  return t;
}
