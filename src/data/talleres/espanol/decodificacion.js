// Taller de Decodificación Lectora — regularización de primaria.
//
// Primer taller del proyecto con `render.tipo: "react"`. Los demás son
// artefactos HTML dentro de un iframe; este no puede serlo por dos razones:
// el contenido tiene que vivir en archivos de datos separados para que se
// puedan agregar palabras y textos sin tocar la lógica, y el detalle de
// avance (palabras atoradas, tiempos de lectura) necesita `localStorage`, que
// en un iframe sin `allow-same-origin` lanza SecurityError.
//
// A quién sirve: al alumno que entiende todo lo que oye pero convierte mal
// las letras en sonidos. Se traba al leer en voz alta, adivina palabras por
// su silueta y se salta o invierte sílabas, aunque su lenguaje oral esté
// perfectamente bien. El taller no le enseña vocabulario nuevo: entrena la
// decodificación sobre palabras que él ya domina de oído, tomadas de un tema
// que le interesa.
//
// Los bancos temáticos viven en ../decodificacion/; ver
// docs/TALLER_DECODIFICACION.md para agregar uno.

export const TALLER = {
  id: "decodificacion",
  titulo: "Taller de Decodificación Lectora",
  materia: "Español",
  tema: "Decodificación y fluidez",
  nivel: "primaria",
  edades: "8-10 años",
  icono: "🔊",
  descripcion:
    "Seis actividades encadenables en una sesión de 15 a 20 minutos, para el alumno que lee " +
    "adivinando en vez de decodificando. Todo el contenido sale de un tema que él ya domina " +
    "hablando —mecánica automotriz, futbol o cohetes—, así que lo único que se entrena es " +
    "convertir letras en sonidos, no entender palabras nuevas.",

  actividades: [
    { id: "palmeo", nombre: "Palmeo de sílabas", edades: "8-10", temas: ["silabas", "decodificacion"] },
    { id: "armar", nombre: "Armar con sílabas", edades: "8-10", temas: ["silabas", "decodificacion"] },
    { id: "familias", nombre: "Familias de palabras", edades: "8-10", temas: ["discriminacion", "decodificacion"] },
    { id: "anclas", nombre: "Anclas ortográficas", edades: "8-10", temas: ["ortografia", "decodificacion"] },
    { id: "etiquetar", nombre: "Etiquetar el diagrama", edades: "8-10", temas: ["decodificacion"] },
    { id: "lectura", nombre: "Lectura repetida cronometrada", edades: "8-10", temas: ["fluidez", "decodificacion"] },
  ],

  objetivos: [
    "Separar una palabra larga en sus golpes de voz antes de intentar leerla.",
    "Ordenar sílabas sin saltarse ni invertir ninguna.",
    "Dejar de adivinar por la silueta: distinguir piso de pisa, de pista y de pistón.",
    "Fijar güe, j, ll/y, r/rr y c/s/z apoyándose en una palabra que ya pronuncia bien.",
    "Leer una etiqueta escrita y llevarla a la pieza que ya reconoce de vista.",
    "Ganar fluidez releyendo el mismo texto varias sesiones y midiendo su propia mejora.",
  ],

  render: { tipo: "react", componente: "decodificacion" },
};
