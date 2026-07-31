// Taller de Divisiones — regularización de primaria (7 a 10 años).
// El contenido vive como HTML autónomo y se monta en un <iframe srcDoc> para
// aislar su CSS global (`:root`, `body`, `*`) del tema del sitio. Ver
// `src/components/talleres/TallerRunner.jsx` para el puente de persistencia.
import html from "./divisiones.html?raw";

export const TALLER = {
  id: "divisiones",
  titulo: "Taller de Divisiones",
  materia: "Matemáticas",
  tema: "División",
  nivel: "primaria",
  edades: "7-10 años",
  icono: "➗",
  descripcion:
    "Siete actividades: reparto con el dedo, corrales con residuo, pizzas en fracciones, " +
    "barras de cubitos, la casita paso a paso, problemas de camiones y clasificación de residuos.",
  objetivos: [
    "Entender la división como reparto en partes iguales.",
    "Repartir una unidad, no solo un conjunto, y conectarlo con la fracción.",
    "Descubrir el residuo como lo que sobra del reparto.",
    "Distinguir de un vistazo una división exacta de una con residuo.",
    "Ejecutar el algoritmo de la división larga dígito por dígito.",
  ],
  render: { tipo: "html", html },
};
