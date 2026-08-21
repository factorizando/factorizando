// Los Cinco Sólidos — capa de contenido.
//
// Tres salas, en el orden en que se enseñan: primero se conocen los cinco y se
// cuentan sus caras, aristas y vértices (La Galería); después se descubre que
// vienen en parejas (El Dual); al final se contesta (El Reto).
//
// La ficha de cada sólido vive en `solidos.js` y su geometría en
// `poliedros.js`, que la calcula en vez de tenerla tecleada.
export { GEOMETRIA, dual, euler, construir, normalizado } from "./poliedros.js";
export { SOLIDOS, SOLIDOS_POR_ID, PAREJAS, POR_QUE_CINCO } from "./solidos.js";
export { pasosDual, frasePasoSiguiente } from "./dualidad.js";

export const SALAS = [
  {
    id: "galeria", nombre: "La Galería", icono: "🔷",
    resumen: "Los cinco, uno por uno. Se giran con el dedo, se abren en pedazos y se cuentan sus caras, aristas y vértices.",
    etiqueta: "Cuerpos geométricos",
  },
  {
    id: "dualidad", nombre: "El Dual", icono: "🔁",
    resumen: "Un punto en el centro de cada cara, los puntos se unen… y adentro aparece otro de los cinco. Vienen en parejas.",
    etiqueta: "Dualidad",
  },
  {
    id: "reto", nombre: "El Reto", icono: "🎯",
    resumen: "Diez preguntas sobre lo que se acaba de ver: contar caras y vértices, encontrar el dual y usar la fórmula de Euler.",
    etiqueta: "Diez preguntas",
  },
];

export const SALAS_POR_ID = Object.fromEntries(SALAS.map((s) => [s.id, s]));

// El taller no tiene bloques de edad: la galería y el dual son lo mismo para
// todos. Se manda un grupo fijo al expediente para que el registro por rango
// que comparten los talleres siga funcionando igual.
export const GRUPO = "10-14";

// Cómo se le nombra al maestro cada tipo de pregunta en el panel.
export const CATEGORIAS = {
  "contar-caras": "Contar las caras de un sólido que está girando",
  "contar-vertices": "Contar los vértices (las esquinas) de un sólido",
  "contar-aristas": "Contar las aristas de un sólido",
  "dual-pareja": "Reconocer con qué sólido hace pareja: cuál es su dual",
  "dual-numeros": "Las caras del original son los vértices del dual",
  "dual-aristas": "Las aristas no cambian al pasar al dual",
  euler: "Fórmula de Euler: sacar el dato que falta de C + V − A = 2",
};

export function etiquetaCategoria(id) {
  return CATEGORIAS[id] || id;
}

export { generarPartida, PREGUNTAS_POR_PARTIDA } from "./retos.js";
