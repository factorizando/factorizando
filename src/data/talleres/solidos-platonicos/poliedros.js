// La geometría de los cinco sólidos, calculada y no tecleada.
//
// Aquí no hay listas de caras escritas a mano. De cada sólido se dan **solo
// sus vértices** —que salen de tres fórmulas con el número áureo— y el resto
// (qué vértices forman cada cara, cuáles son las aristas, dónde está el centro
// de cada cara) se deduce buscando los planos de apoyo del casco convexo.
//
// Esto no es elegancia gratuita: es lo que permite que el dual también se
// calcule. `dual(p)` es literalmente *pon un punto en el centro de cada cara y
// vuelve a construir*, que es la misma frase que el taller le dice al alumno.
// Si la construcción estuviera tecleada, el dibujo podría contradecir la
// definición sin que nadie se enterara; así no puede.
//
// Se corre también en node (ver pruebas.js), así que este archivo no toca el
// navegador ni importa nada de Vite.

const EPS = 1e-6;

// ── Vectores, lo mínimo ─────────────────────────────────────────────────────
export const suma = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
export const resta = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
export const escala = (a, k) => [a[0] * k, a[1] * k, a[2] * k];
export const punto = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
export const cruz = (a, b) => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
];
export const largo = (a) => Math.sqrt(punto(a, a));
export const distancia = (a, b) => largo(resta(a, b));

export function unitario(a) {
  const l = largo(a);
  return l < EPS ? null : escala(a, 1 / l);
}

export function centroide(puntos) {
  const s = puntos.reduce(suma, [0, 0, 0]);
  return escala(s, 1 / puntos.length);
}

// ── Construcción ────────────────────────────────────────────────────────────

// Ordena los vértices de una cara girando alrededor de su normal, para que el
// polígono se pueda triangular en abanico y quede mirando hacia afuera.
function ordenarCara(indices, vertices, normal) {
  const c = centroide(indices.map((i) => vertices[i]));
  const u = unitario(resta(vertices[indices[0]], c));
  const w = cruz(normal, u);
  return [...indices].sort((i, j) => {
    const a = resta(vertices[i], c);
    const b = resta(vertices[j], c);
    return Math.atan2(punto(a, w), punto(a, u)) - Math.atan2(punto(b, w), punto(b, u));
  });
}

// Caras del casco convexo de una nube de puntos.
//
// Cada terna de puntos define un plano; el plano es una cara si **ningún**
// punto queda del lado de afuera. Es fuerza bruta —O(n^4) con n <= 20, unos
// pocos miles de operaciones— y a cambio no hay que saber de antemano cuántos
// lados tiene la cara, que es justo lo que hace falta para construir un dual
// sin decirle cuál esperamos.
//
// La normal se orienta contra el centro de la nube y no contra el origen: los
// cinco están centrados, pero las pruebas construyen pirámides y prismas que
// no lo están, y una construcción que solo funcione con cuerpos centrados no
// demostraría gran cosa.
function carasDe(vertices, centro) {
  const caras = [];
  const vistas = new Set();

  for (let i = 0; i < vertices.length; i++) {
    for (let j = i + 1; j < vertices.length; j++) {
      for (let k = j + 1; k < vertices.length; k++) {
        let n = unitario(cruz(resta(vertices[j], vertices[i]), resta(vertices[k], vertices[i])));
        if (!n) continue;                                   // tres puntos alineados
        let d = punto(vertices[i], n);
        if (punto(centro, n) > d) { n = escala(n, -1); d = -d; }    // la normal, hacia afuera
        if (d - punto(centro, n) < EPS) continue;           // plano por el centro: no es cara
        if (vertices.some((v) => punto(v, n) > d + EPS)) continue;  // hay puntos afuera

        const cara = vertices.reduce((acc, v, idx) => {
          if (punto(v, n) > d - EPS) acc.push(idx);
          return acc;
        }, []);
        const clave = cara.join(",");
        if (vistas.has(clave)) continue;
        vistas.add(clave);
        caras.push({ indices: ordenarCara(cara, vertices, n), normal: n, altura: d - punto(centro, n) });
      }
    }
  }
  return caras;
}

function aristasDe(caras) {
  const vistas = new Map();
  caras.forEach(({ indices }) => {
    indices.forEach((a, i) => {
      const b = indices[(i + 1) % indices.length];
      const clave = a < b ? `${a}-${b}` : `${b}-${a}`;
      if (!vistas.has(clave)) vistas.set(clave, [Math.min(a, b), Math.max(a, b)]);
    });
  });
  return [...vistas.values()];
}

// Un poliedro convexo a partir de sus vértices. Todo lo demás se deduce.
export function construir(vertices) {
  const centro = centroide(vertices);
  const info = carasDe(vertices, centro);
  const caras = info.map((c) => c.indices);
  const normales = info.map((c) => c.normal);
  const centros = info.map((c) => centroide(c.indices.map((i) => vertices[i])));
  const aristas = aristasDe(info);
  const [a, b] = aristas[0];

  return {
    vertices, caras, aristas, normales, centros, centro,
    arista: distancia(vertices[a], vertices[b]),
    circunradio: distancia(vertices[0], centro),   // del centro a un vértice
    inradio: info[0].altura,                       // del centro a una cara
    ladosPorCara: caras[0].length,
    carasPorVertice: caras.filter((c) => c.includes(0)).length,
  };
}

// El dual, dicho como se le dice al alumno: un punto en el centro de cada cara
// y se vuelve a armar. Los vértices del dual son los centros de las caras del
// original, así que nace **dentro** del original, tocándole las caras.
export function dual(p) {
  return construir(p.centros);
}

// El mismo sólido con los vértices a distancia `radio` del centro. Se usa para
// comparar los cinco al mismo tamaño y para sacar el dual "ya crecido".
export function normalizado(p, radio = 1) {
  const k = radio / p.circunradio;
  return construir(p.vertices.map((v) => escala(v, k)));
}

// Caras - aristas + vértices. Vale 2 para todo poliedro convexo; el taller lo
// hace descubrir contando.
export function euler(p) {
  return p.caras.length - p.aristas.length + p.vertices.length;
}

// ── Los cinco ───────────────────────────────────────────────────────────────
const PHI = (1 + Math.sqrt(5)) / 2;

// Todas las combinaciones de signo de una terna; una coordenada nula no se
// duplica.
function conSignos([a, b, c]) {
  const opciones = (x) => (Math.abs(x) < EPS ? [0] : [x, -x]);
  const salida = [];
  opciones(a).forEach((x) => opciones(b).forEach((y) => opciones(c).forEach((z) => salida.push([x, y, z]))));
  return salida;
}

// Las tres rotaciones cíclicas de una terna: (a,b,c), (b,c,a), (c,a,b).
const ciclos = ([a, b, c]) => [[a, b, c], [b, c, a], [c, a, b]];

export const VERTICES = {
  // Cuatro esquinas alternadas del cubo.
  tetraedro: [[1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]],
  // Las ocho esquinas.
  hexaedro: conSignos([1, 1, 1]),
  // Los seis puntos sobre los ejes.
  octaedro: ciclos([1, 0, 0]).flatMap(conSignos),
  // Tres rectángulos áureos cruzados.
  icosaedro: ciclos([0, 1, PHI]).flatMap(conSignos),
  // El cubo más tres rectángulos áureos, achatados por el mismo número.
  dodecaedro: [...conSignos([1, 1, 1]), ...ciclos([0, 1 / PHI, PHI]).flatMap(conSignos)],
};

// Los cinco ya construidos y llevados a radio 1, para que en la galería se
// comparen al mismo tamaño y no por quién ocupa más pantalla.
export const GEOMETRIA = Object.fromEntries(
  Object.entries(VERTICES).map(([id, vs]) => [id, normalizado(construir(vs), 1)])
);
