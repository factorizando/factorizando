// Carrera de Autos — Matemáticas. El motor vive en `carrera-autos.js`; aquí
// solo se fija la materia y se describe lo que el maestro va a repasar.
import { htmlConMateria, BASE } from "./carrera-autos.js";

export const TALLER = {
  ...BASE,
  id: "carrera-autos-matematicas",
  titulo: "Carrera de Autos · Matemáticas",
  materia: "Matemáticas",
  descripcion:
    "Juego de mesa proyectable: cada equipo pisa el acelerador, contesta y su auto avanza en la pista. " +
    "De 8 a 9 años, cálculo mental y problemas de un paso; de 10 a 12, operaciones largas, fracciones, " +
    "decimales, porcentajes y problemas de dos pasos.",
  objetivos: [
    "Repasar en grupo lo visto en la sesión sin que se sienta examen.",
    "Automatizar sumas, restas, tablas, series y reparto (8-9 años).",
    "Sostener multiplicación y división largas, residuo y problemas de dos pasos (10-12 años).",
    "Manejar fracciones, decimales y porcentajes en contextos cortos (10-12 años).",
    "Aceptar el error como parte del juego: en el bloque menor el auto nunca se apaga.",
  ],
  render: { tipo: "html", html: htmlConMateria("matematicas") },
};
