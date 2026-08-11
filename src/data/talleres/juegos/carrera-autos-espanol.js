// Carrera de Autos — Español. Mismo motor que la versión de Matemáticas
// (`carrera-autos.js`), otro banco de reactivos.
import { htmlConMateria, BASE } from "./carrera-autos.js";

export const TALLER = {
  ...BASE,
  id: "carrera-autos-espanol",
  titulo: "Carrera de Autos · Español",
  materia: "Español",
  descripcion:
    "Juego de mesa proyectable: cada equipo pisa el acelerador, contesta y su auto avanza en la pista. " +
    "De 8 a 9 años, ortografía, sinónimos, sílabas y clases de palabra; de 10 a 12, acentuación, " +
    "homófonos, puntuación, conectores y tiempos verbales.",
  // Aquí la "actividad" es el bloque de edad: el juego es el mismo y lo que
  // cambia es el banco de reactivos que se sortea en la pista. Los temas del
  // bloque menor incluyen homófonos y conectores porque son sus reactivos de
  // peso 5, el techo de ese banco.
  actividades: [
    { id: "8-9", nombre: "Carrera del bloque 8 a 9 años", edades: "8-9", temas: [
      "ortografia", "sinonimos-antonimos", "silabas", "orden-alfabetico",
      "clases-palabra", "plurales", "mayusculas", "signos",
      "homofonos", "conectores",
    ] },
    { id: "10-12", nombre: "Carrera del bloque 10 a 12 años", edades: "10-12", temas: [
      "ortografia", "acentuacion", "homofonos", "puntuacion", "conectores",
      "clases-palabra", "tiempos-verbales", "sujeto-predicado", "vocabulario-contexto",
    ] },
  ],
  objetivos: [
    "Repasar en grupo lo visto en la sesión sin que se sienta examen.",
    "Afinar ortografía, sinónimos, antónimos y separación en sílabas (8-9 años).",
    "Reconocer sustantivo, verbo y adjetivo dentro de una oración (8-9 años).",
    "Distinguir agudas, graves y esdrújulas, y resolver homófonos por contexto (10-12 años).",
    "Puntuar, elegir el conector correcto e identificar el sujeto (10-12 años).",
    "Aceptar el error como parte del juego: en el bloque menor el auto nunca se apaga.",
  ],
  render: { tipo: "html", html: htmlConMateria("espanol") },
};
