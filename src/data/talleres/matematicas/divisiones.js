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
  // Los temas los define `../temas.js`; el catálogo busca por aquí.
  actividades: [
    { id: "reparto",  nombre: "Reparte las galletas",     edades: "7-8",  temas: ["division-reparto"] },
    { id: "corrales", nombre: "Corrales de pollitos",     edades: "7-8",  temas: ["division-reparto", "residuo"] },
    { id: "pizza",    nombre: "Divisor de pizzas",        edades: "7-8",  temas: ["division-reparto", "fracciones"] },
    { id: "barras",   nombre: "Barras que se parten",     edades: "7-8",  temas: ["division-reparto", "fracciones"] },
    { id: "casita",   nombre: "La casita paso a paso",    edades: "9-10", temas: ["division-algoritmo", "division-exacta"] },
    { id: "camiones", nombre: "Cargamento de camiones",   edades: "9-10", temas: ["residuo", "division-exacta", "problemas-un-paso"] },
    { id: "cazador",  nombre: "Cazador de residuos",      edades: "9-10", temas: ["residuo", "division-exacta", "multiplos-divisores"] },
  ],
  objetivos: [
    "Entender la división como reparto en partes iguales.",
    "Repartir una unidad, no solo un conjunto, y conectarlo con la fracción.",
    "Descubrir el residuo como lo que sobra del reparto.",
    "Distinguir de un vistazo una división exacta de una con residuo.",
    "Ejecutar el algoritmo de la división larga dígito por dígito.",
  ],
  render: { tipo: "html", html },
};
