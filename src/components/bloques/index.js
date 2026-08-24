// Registro de bloques: `bloque.tipo` → componente.
//
// Un mapa, no una cadena de `if`. Es la misma lección que dejó la fase 2 del plan
// de migración: cuando la resolución es código, añadir una pieza obliga a
// encontrar la cadena correcta dentro de un archivo enorme; cuando es dato, no.
//
// Cada componente recibe `{ bloque, tema, reflujo }` y, si lo necesita, el
// contexto del reactivo (`respuestaDada`, `onResponder`, `votos`, `totalVotos`).
// `reflujo` es true por debajo del umbral de una sola columna: los bloques que
// cambian de forma en móvil —tabla a fichas, paneles a filas— lo consultan.
import { Destacado, Texto, Definicion, Formula, Lista, Objetivos, Nota } from "./texto.jsx";
import { Par, Trampa } from "./contraste.jsx";
import { Tabla, CuadroSemantico, Columnas, Secuencia, LineaTiempo } from "./datos.jsx";
import { Pasos, Cierre } from "./pasos.jsx";
import { Figura, Interactivo, Video } from "./visual.jsx";
import { Pregunta, Sondeo } from "./evaluacion.jsx";
import { Portada } from "./portada.jsx";

export const BLOQUES = {
  portada: Portada,
  // Prosa
  destacado: Destacado,
  texto: Texto,
  definicion: Definicion,
  formula: Formula,
  lista: Lista,
  objetivos: Objetivos,
  nota: Nota,
  // Contraste
  par: Par,
  trampa: Trampa,
  // Datos
  tabla: Tabla,
  cuadro_semantico: CuadroSemantico,
  columnas: Columnas,
  secuencia: Secuencia,
  linea_tiempo: LineaTiempo,
  // Procedimiento
  pasos: Pasos,
  cierre: Cierre,
  // Dibujo
  figura: Figura,
  interactivo: Interactivo,
  video: Video,
  // Evaluación
  pregunta: Pregunta,
  sondeo: Sondeo,
};

export function buscarBloque(tipo) {
  return BLOQUES[tipo] || null;
}
