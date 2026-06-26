// Registro central de cursos (= Áreas). Se resuelve por id en /curso/:id.
import { CURSO as GEOMETRIA } from "./matematicas/geometria.js";
import { CURSO as PROBABILIDAD_UNIVERSIDAD } from "./matematicas/probabilidad-universidad.js";

export const CURSOS_INDEX = {
  [GEOMETRIA.id]: GEOMETRIA,
  [PROBABILIDAD_UNIVERSIDAD.id]: PROBABILIDAD_UNIVERSIDAD,
};

export function buscarCurso(id) {
  return CURSOS_INDEX[id] || null;
}

export function listaCursos() {
  return Object.values(CURSOS_INDEX).map(({ id, materia, area, icono }) => ({
    id, materia, area, icono,
  }));
}
