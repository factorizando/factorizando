// Registro local del taller, atado a su llave de localStorage. La mecánica
// —qué se guarda aquí y qué va al expediente— vive en ../../comun/registro.js.
import { crearRegistro } from "../../comun/registro.js";

export const registro = crearRegistro("el-terreno");

export const {
  cargarRegistro, anotarIntento, cerrarPartida, partidas,
  categoriasFlojas, resumenPorJuego, exportarJSON, borrarRegistro,
} = registro;

export { compararConAnterior } from "../../comun/registro.js";
