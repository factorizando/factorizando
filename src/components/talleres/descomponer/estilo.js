// Acento por taller de Descomponer números. La paleta y la tipografía son las
// de todos los talleres de juegos; viven en ../comun.
import { C } from "../comun/estilo.js";

export { C, FUENTE, TAM } from "../comun/estilo.js";

export const ACENTO = {
  suma: C.naranja,
  producto: C.amarillo,
  division: C.azul,
};

export const ETIQUETA = {
  suma: { nombre: "Sumar descomponiendo", icono: "➕" },
  producto: { nombre: "Multiplicar descomponiendo", icono: "✖️" },
  division: { nombre: "Dividir descomponiendo", icono: "➗" },
};
