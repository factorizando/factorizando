// src/data/presentaciones/presentacionesIndex.js
// Registro central de todas las presentaciones.
// Para agregar una nueva: importarla y añadirla al objeto.

import { PRESENTACION as SEMEJANZA_TRIANGULOS } from "./semejanza-triangulos.js";
import { PRESENTACION as CONCORDANCIA_VERBAL } from "./concordancia-verbal.js";

export const PRESENTACIONES_INDEX = {
  "semejanza-triangulos": SEMEJANZA_TRIANGULOS,
  "concordancia-verbal": CONCORDANCIA_VERBAL,
};

export function buscarPresentacion(id) {
  return PRESENTACIONES_INDEX[id] || null;
}

export function listaPresentaciones() {
  return Object.values(PRESENTACIONES_INDEX).map(({ id, titulo, materia }) => ({
    id,
    titulo,
    materia,
  }));
}
