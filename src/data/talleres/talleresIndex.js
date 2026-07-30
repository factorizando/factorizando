// Registro central de talleres de regularización (primaria / secundaria).
// Se resuelve por id en /regularizacion/:id. Mismo patrón que cursosIndex.js.
//
// Cada TALLER declara cómo se dibuja en `render`:
//   { tipo: "html",  html }        → se monta en <iframe srcDoc> (aislado)
//   { tipo: "react", componente }  → clave del registro TALLERES_REACT
//
// El modo "html" permite pegar un artefacto autónomo y usarlo el mismo día;
// el modo "react" es el destino cuando el taller ya se ganó el portado.
import { TALLER as DIVISIONES } from "./matematicas/divisiones.js";

export const TALLERES_INDEX = {
  [DIVISIONES.id]: DIVISIONES,
};

// Componentes React para talleres con render.tipo === "react".
// Reciben { alumnoId, tallerId, guardarSesion, cargarSesiones }.
export const TALLERES_REACT = {};

export function buscarTaller(id) {
  return TALLERES_INDEX[id] || null;
}

export function listaTalleres() {
  return Object.values(TALLERES_INDEX).map(
    ({ id, titulo, materia, tema, nivel, edades, icono, descripcion }) => ({
      id, titulo, materia, tema, nivel, edades, icono, descripcion,
    })
  );
}
