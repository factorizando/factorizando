// Los cuatro mundos del Reino Plegado y sus niveles.
//
// El espacio de cada mundo no es decorado: impone cómo se mueve el jugador y
// arrastra consigo los temas que se le parecen.
//
//   plano   Flatland. Un rectángulo y ya. Coordenadas, rutas, distancias.
//   mobius  Al salir por un lado regresas por el otro DADO VUELTA. Lo inverso:
//           multiplicar y dividir, fracción y decimal, literal y figurado.
//   toro    Sales por la derecha y entras por la izquierda, y lo mismo arriba
//           y abajo. Ciclos: múltiplos, sucesiones, conectores que encadenan.
//   escher  Piezas que embonan. Teselados: áreas, fracciones, sintagmas.
//
// Los mapas se escriben como dibujos de texto, una cadena por fila:
//   #  muro        .  piso        @  entrada
//   ?  portal de acertijo         S  salida
//
// Las pruebas verifican que desde la entrada se llegue a todos los portales y
// a la salida —recorriendo el mapa con la topología del mundo, no en línea
// recta—; si un mapa nuevo queda mal dibujado, el `node pruebas.js` lo dice
// antes que un niño frente a la TV.
//
// Ojo con los bordes según el mundo:
//   plano   va cerrado por los cuatro lados.
//   toro    va ABIERTO por los cuatro: los bordes son las costuras.
//   mobius  abierto a los lados y cerrado arriba y abajo.
//
// Y una regla de diseño que vale por todo el mundo 2 y el 3: si un nivel se
// puede terminar sin cruzar una costura, la topología es decorado. Por eso
// llevan una pared que parte el mapa de arriba abajo: en el plano sería un
// callejón sin salida y aquí es el camino.

export const MUNDOS = [
  {
    id: "flatland",
    numero: 1,
    nombre: "Flatland",
    subtitulo: "El mundo plano",
    icono: "▦",
    topologia: "plano",
    descripcion:
      "Un mundo de una sola hoja. Lo que hay que aprender aquí es a ubicarse: leer el plano, " +
      "seguir una ruta y contar cuadras.",
    temas: {
      matematicas: ["planos-trayectorias", "recta-numerica", "suma-resta", "multiplicacion", "perimetro-area"],
      espanol: ["clases-palabra", "mayusculas", "sujeto-predicado"],
    },
    niveles: [
      {
        id: "f1", nombre: "La plaza",
        mapa: [
          "#########",
          "#@......#",
          "#.#.#.#.#",
          "#...?...#",
          "#.#.#.#.#",
          "#?.....S#",
          "#########",
        ],
      },
      {
        id: "f2", nombre: "Las cuatro calles",
        mapa: [
          "###########",
          "#@........#",
          "#.#.#.#.#.#",
          "#....?....#",
          "#.#.#.#.#.#",
          "#?.......?#",
          "#.#.#.#.#.#",
          "#........S#",
          "###########",
        ],
      },
      {
        id: "f3", nombre: "El mercado",
        mapa: [
          "#############",
          "#@..........#",
          "#.#.#.#.#.#.#",
          "#...?.....?.#",
          "#.###.###.#.#",
          "#...........#",
          "#.#.#.#.#.#.#",
          "#?.........S#",
          "#############",
        ],
      },
      {
        id: "f4", nombre: "El barrio de los cuadros",
        mapa: [
          "#############",
          "#@....?.....#",
          "#.###.#.###.#",
          "#...........#",
          "#.#.#####.#.#",
          "#?..?...?..S#",
          "#.#.#.#.#.#.#",
          "#...........#",
          "#############",
        ],
      },
      {
        id: "f5", nombre: "El plano completo",
        mapa: [
          "###############",
          "#@....?.......#",
          "#.###.#.#####.#",
          "#.............#",
          "#.#.#####.###.#",
          "#?..?...?...?.#",
          "#.#.#.#.#.#.#.#",
          "#............S#",
          "###############",
        ],
      },
    ],
  },

  // Los otros tres mundos ya tienen su topología y sus temas decididos; los
  // mapas llegan cuando el Mundo 1 esté probado con niños. Aparecen en el mapa
  // del reino como "en construcción" para que se vea a dónde va la cosa.
  {
    id: "mobius",
    numero: 2,
    nombre: "La Banda",
    subtitulo: "Una sola cara",
    icono: "∞",
    topologia: "mobius",
    descripcion:
      "Sales por la derecha y regresas por la izquierda, pero de cabeza. Todo aquí tiene su " +
      "revés: multiplicar y dividir, la fracción y el decimal, lo que se dice y lo que se quiere decir.",
    pista:
      "Los lados están pegados, pero al cruzarlos te volteas: si sales por arriba, entras por abajo. " +
      "Fíjate en los colores de las orillas.",
    temas: {
      matematicas: ["division-exacta", "multiplicacion", "fraccion-decimal", "decimales"],
      espanol: ["prefijos-sufijos", "literal-figurado"],
    },
    niveles: [
      {
        id: "m1", nombre: "La primera costura",
        mapa: [
          "###########",
          ".@...#....?",
          ".....#.....",
          ".?...#.....",
          ".....#....S",
          ".....#.....",
          "###########",
        ],
      },
      {
        id: "m2", nombre: "El derecho y el revés",
        mapa: [
          "#############",
          ".@...#...#..?",
          ".....#...#...",
          ".....#...#...",
          ".?...#...#..S",
          ".....#...#...",
          "..?..#...#...",
          "#############",
        ],
      },
    ],
  },
  {
    id: "toro",
    numero: 3,
    nombre: "La Dona",
    subtitulo: "El mundo de Pac-Man",
    icono: "◎",
    topologia: "toro",
    descripcion:
      "Sales por un borde y entras por el opuesto, en las dos direcciones. Un mundo que da " +
      "vueltas: múltiplos, sucesiones, promedios y las palabras que encadenan ideas.",
    pista:
      "Aquí no hay orillas: si sigues caminando siempre regresas. Las paredes que parecen " +
      "encerrarte se le dan la vuelta por fuera.",
    temas: {
      // Las tablas son ciclos que se repiten: caben en la dona y le dan a los
      // chicos de 3.º y 4.º de dónde agarrarse en este mundo.
      matematicas: ["multiplicacion", "multiplos-divisores", "series", "promedio", "moda"],
      espanol: ["conectores", "jerarquizar", "signos"],
    },
    niveles: [
      {
        id: "t1", nombre: "La vuelta entera",
        mapa: [
          ".....#.....",
          ".@...#...?.",
          ".....#.....",
          ".....#.....",
          ".?...#...S.",
          ".....#.....",
          ".....#.....",
        ],
      },
      {
        id: "t2", nombre: "Los cuatro cuartos",
        mapa: [
          ".....#.....",
          ".@...#..?..",
          ".....#.....",
          "###########",
          ".?...#...S.",
          ".....#.....",
          ".....#..?..",
        ],
      },
    ],
  },
  {
    id: "escher",
    numero: 4,
    nombre: "El Taller de Escher",
    subtitulo: "Piezas que embonan",
    icono: "◇",
    topologia: "escher",
    descripcion:
      "Mosaicos que llenan el suelo sin dejar huecos y escaleras que no deberían conectarse. " +
      "Áreas, fracciones y las piezas que embonan dentro de una oración.",
    temas: {
      matematicas: ["perimetro-area", "circunferencia", "fracciones", "comparar-fracciones", "operaciones-fracciones"],
      espanol: ["sintagmas", "mapas-conceptuales"],
    },
    niveles: [],
  },
];

export const MUNDOS_POR_ID = Object.fromEntries(MUNDOS.map((m) => [m.id, m]));

// Cuántos portales tiene un nivel: son los acertijos que hay que resolver.
export function portalesDe(nivel) {
  return nivel.mapa.join("").split("").filter((c) => c === "?").length;
}

// El mapa, ya convertido en casillas con su contenido.
export function casillasDe(nivel) {
  return nivel.mapa.map((fila) => fila.split(""));
}

export function buscarCasilla(nivel, simbolo) {
  for (let f = 0; f < nivel.mapa.length; f++) {
    const c = nivel.mapa[f].indexOf(simbolo);
    if (c >= 0) return { fila: f, columna: c };
  }
  return null;
}

export function portalesDelMapa(nivel) {
  const salida = [];
  nivel.mapa.forEach((fila, f) => {
    fila.split("").forEach((ch, c) => { if (ch === "?") salida.push({ fila: f, columna: c }); });
  });
  return salida;
}
