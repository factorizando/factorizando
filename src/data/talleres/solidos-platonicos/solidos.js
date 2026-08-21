// La ficha de cada uno de los cinco: nombre, color y lo que se le cuenta al
// alumno.
//
// El dato duro NO se escribe aquí —cuántas caras, cuántas aristas, con quién
// hace pareja— porque eso sale de `poliedros.js`, que lo calcula. Escribirlo
// a mano sería la única manera de que la ficha y el dibujo dejaran de
// coincidir algún día.
import { GEOMETRIA, dual } from "./poliedros.js";

// Entre los cinco, el número de caras alcanza para identificarlos.
const SOLIDOS_POR_CARAS = { 4: "tetraedro", 6: "hexaedro", 8: "octaedro", 12: "dodecaedro", 20: "icosaedro" };

// Los cinco, en el orden de siempre: por número de caras.
//
// `elemento` es la asignación del Timeo de Platón. No es matemáticas, es la
// razón por la que se llaman platónicos, y a los diez años engancha más que
// cualquier definición.
export const SOLIDOS = [
  {
    id: "tetraedro", nombre: "Tetraedro", color: "#ff9a3c",
    griego: "tetra = cuatro", cara: "triángulo", caras: "triángulos equiláteros",
    elemento: "el fuego", porque: "es el más puntiagudo de los cinco, y el fuego pincha",
    curiosidad: "Es el único sin caras paralelas: mires por donde lo mires, nunca hay dos caras enfrentadas.",
  },
  {
    id: "hexaedro", nombre: "Cubo", alterno: "hexaedro", color: "#c98a52",
    griego: "hexa = seis", cara: "cuadrado", caras: "cuadrados",
    elemento: "la tierra", porque: "apoyado en cualquier cara no se mueve, como el suelo",
    curiosidad: "La sal cristaliza en cubos: si miras un grano con lupa, ves este sólido de verdad.",
  },
  {
    id: "octaedro", nombre: "Octaedro", color: "#ffd166",
    griego: "octa = ocho", cara: "triángulo", caras: "triángulos equiláteros",
    elemento: "el aire", porque: "gira sujetándolo por dos puntas, como si nada lo detuviera",
    curiosidad: "Son dos pirámides pegadas por la base. El diamante en bruto suele salir así de la mina.",
  },
  {
    id: "dodecaedro", nombre: "Dodecaedro", color: "#b78bff",
    griego: "dodeca = doce", cara: "pentágono", caras: "pentágonos regulares",
    elemento: "el universo entero",
    porque: "a Platón le sobró un sólido cuando ya había repartido los cuatro elementos",
    curiosidad: "Es el único de los cinco con caras de cinco lados, y por eso el más difícil de armar.",
  },
  {
    id: "icosaedro", nombre: "Icosaedro", color: "#4ea8ff",
    griego: "icosa = veinte", cara: "triángulo", caras: "triángulos equiláteros",
    elemento: "el agua", porque: "es el que más se parece a una pelota, y el agua rueda",
    curiosidad: "Muchos virus tienen esta forma: es la manera más barata de encerrar algo con piezas iguales.",
  },
].map((s) => {
  const g = GEOMETRIA[s.id];
  const d = dual(g);
  const cual = (n) => SOLIDOS_POR_CARAS[n];
  return {
    ...s,
    geometria: g,
    numCaras: g.caras.length,
    numAristas: g.aristas.length,
    numVertices: g.vertices.length,
    ladosPorCara: g.ladosPorCara,
    carasPorVertice: g.carasPorVertice,
    // El id del dual se deduce contando: el dual de este sólido tiene tantas
    // caras como vértices tenga él, y con eso ya está identificado entre los
    // cinco. No hay tabla de parejas escrita a mano.
    dual: cual(d.caras.length),
  };
});

export const SOLIDOS_POR_ID = Object.fromEntries(SOLIDOS.map((s) => [s.id, s]));

export const PAREJAS = [
  { a: "hexaedro", b: "octaedro" },
  { a: "dodecaedro", b: "icosaedro" },
  { a: "tetraedro", b: "tetraedro" },
];

// Por qué son exactamente cinco. Es la pregunta que hace todo niño al que le
// enseñan los cinco, y la respuesta cabe en un párrafo.
export const POR_QUE_CINCO =
  "En cada esquina se tienen que juntar por lo menos tres caras, y los ángulos que se juntan ahí " +
  "tienen que sumar menos de 360°: si suman 360° la esquina se aplana y ya no cierra. Con triángulos " +
  "(60°) caben tres, cuatro o cinco, pero seis dan justo 360° y se aplanan: ahí salen el tetraedro, el " +
  "octaedro y el icosaedro. Con cuadrados (90°) solo caben tres: el cubo. Con pentágonos (108°) solo " +
  "caben tres: el dodecaedro. Con hexágonos, tres ya dan 360° y se aplanan. Se acabaron las opciones, " +
  "y por eso no hay un sexto sólido ni lo habrá nunca.";

