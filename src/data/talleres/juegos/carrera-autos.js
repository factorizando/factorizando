// Carrera de Autos — juego de repaso para sesiones de regularización.
// El contenido vive como HTML autónomo y se monta en un <iframe srcDoc> para
// aislar su CSS global (`:root`, `body`, `*`) del tema del sitio. Ver
// `src/components/talleres/TallerRunner.jsx` para el puente de persistencia.
//
// A diferencia de los otros talleres, este no es una secuencia de actividades
// sino un tablero por turnos: se proyecta y el grupo compite. Vive en
// `juegos/` porque cubre dos materias y no pertenece a ninguna.
import html from "./carrera-autos.html?raw";

export const TALLER = {
  id: "carrera-autos",
  titulo: "Carrera de Autos",
  materia: "Matemáticas y Español",
  tema: "Repaso por turnos",
  nivel: "primaria",
  edades: "8-12 años",
  icono: "🏎️",
  descripcion:
    "Juego de mesa proyectable: cada equipo pisa el acelerador, contesta y su auto avanza en la pista. " +
    "Dos bloques de edad (8-9 y 10-12) con bancos distintos de Matemáticas y Español, " +
    "de 1 a 4 autos y tres distancias de carrera.",
  objetivos: [
    "Repasar en grupo lo visto en la sesión sin que se sienta examen.",
    "Automatizar cálculo mental: sumas, restas, tablas y series (8-9 años).",
    "Sostener operaciones largas, fracciones, decimales y porcentajes (10-12 años).",
    "Afinar ortografía, sinónimos y clases de palabra (8-9 años).",
    "Trabajar acentuación, homófonos, puntuación y conectores (10-12 años).",
    "Aceptar el error como parte del juego: en el bloque menor el auto nunca se apaga.",
  ],
  render: { tipo: "html", html },
};
