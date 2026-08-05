// Motor compartido de la Carrera de Autos.
//
// El juego es uno solo; lo único que cambia entre materias es el banco de
// reactivos. En vez de duplicar 1 400 líneas de HTML, cada taller publicado
// (`carrera-autos-matematicas`, `carrera-autos-espanol`) toma este HTML y le
// sustituye el marcador `__MATERIA_FIJA__`: con la materia ya puesta, la
// pantalla de inicio deja de preguntarla.
//
// El contenido se monta en un <iframe srcDoc> para aislar su CSS global
// (`:root`, `body`, `*`) del tema del sitio. Ver
// `src/components/talleres/TallerRunner.jsx` para el puente de persistencia.
import html from "./carrera-autos.html?raw";

export function htmlConMateria(materia) {
  if (materia !== "matematicas" && materia !== "espanol") {
    throw new Error(`Materia desconocida para la Carrera de Autos: ${materia}`);
  }
  return html.replace("__MATERIA_FIJA__", materia);
}

// Lo que comparten ambos talleres: el motor, no el contenido.
export const BASE = {
  tema: "Repaso por turnos",
  nivel: "primaria",
  edades: "8-12 años",
  icono: "🏎️",
};
