// Taller de Comprensión Lectora — regularización de primaria (8 a 12 años).
// El contenido vive como HTML autónomo y se monta en un <iframe srcDoc> para
// aislar su CSS global (`:root`, `body`, `*`) del tema del sitio. Ver
// `src/components/talleres/TallerRunner.jsx` para el puente de persistencia.
//
// A diferencia del taller de divisiones, los reactivos NO se generan al azar:
// un texto de comprensión se escribe a mano. El motor solo elige de una bolsa
// sin reemplazo, porque un texto repetido deja de medir comprensión.
import html from "./comprension-lectora.html?raw";

export const TALLER = {
  id: "comprension-lectora",
  titulo: "Taller de Comprensión Lectora",
  materia: "Español",
  tema: "Comprensión lectora",
  nivel: "primaria",
  edades: "8-12 años",
  icono: "📖",
  descripcion:
    "Nueve actividades en dos grupos. De 8 a 9 años: seguir a quién se refiere cada pronombre, " +
    "ordenar la historia, cazar el dato contrarreloj y deducir palabras por contexto. De 10 a 12: " +
    "idea principal, inferencia, subrayar la evidencia, hecho contra opinión y propósito del texto.",
  objetivos: [
    "Resolver a quién sustituye cada pronombre sin perder el hilo del texto.",
    "Reconstruir el orden de los hechos apoyándose en los conectores.",
    "Volver al texto a buscar el dato exacto en vez de contestar de memoria.",
    "Deducir el significado de una palabra desconocida por su contexto.",
    "Distinguir la idea principal de un detalle, de una idea muy general y de una ajena al texto.",
    "Separar lo que el texto dice, lo que deja deducir y lo que no se sabe.",
    "Sostener cada respuesta señalando la oración que la demuestra.",
    "Distinguir un hecho comprobable de una opinión.",
    "Identificar para qué se escribió un texto: informar, convencer, instruir o entretener.",
  ],
  render: { tipo: "html", html },
};
