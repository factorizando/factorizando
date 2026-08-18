// Taller del Terreno — regularización de primaria (7 a 10 años).
//
// Introduce perímetro y área. El problema a esta edad casi nunca es la
// fórmula: es que las dos medidas son la misma figura y el niño no ve por qué
// tendrían que dar números distintos. Por eso aquí no son dos fórmulas sino
// **dos acciones sobre el mismo terreno** —cercar la orilla, cubrir el suelo—
// con dos unidades que se ven distintas: tramos de cerca y cuadros de pasto.
//
// El segundo juego ataca la creencia que sobrevive hasta la secundaria: que si
// la cerca es la misma, el terreno es el mismo. Con 12 tramos se arman varios
// terrenos y se ve que en cada uno cabe distinto pasto.
//
// Taller React, como pizzas-cajas-vasos y por las mismas razones: los
// generadores viven en archivos de datos (`../el-terreno/`) para poder mover
// la dificultad sin tocar la interfaz, y el detalle de errores necesita
// localStorage. Ver docs/TALLER_EL_TERRENO.md.

export const TALLER = {
  id: "el-terreno",
  titulo: "El Terreno",
  materia: "Matemáticas",
  tema: "Perímetro y área",
  nivel: "primaria",
  edades: "7-10 años",
  icono: "🚧",
  descripcion:
    "Dos juegos para introducir perímetro y área sin fórmulas: se pone la cerca tramo por tramo " +
    "por la orilla y se siembra el pasto cuadro por cuadro por dentro, sobre el mismo terreno. " +
    "El segundo reparte la misma cerca en terrenos distintos para descubrir que el pasto cambia " +
    "aunque la cerca no.",

  actividades: [
    { id: "cerca-pasto", nombre: "La Cerca y el Pasto", edades: "7-10",
      temas: ["perimetro-area", "figuras", "multiplicacion", "problemas-un-paso"] },
    { id: "misma-cerca", nombre: "La misma cerca, distinto terreno", edades: "7-10",
      temas: ["perimetro-area", "multiplicacion", "estimacion"] },
  ],

  objetivos: [
    "Separar las dos medidas por la acción: la cerca va por la orilla, el pasto va por dentro.",
    "Contar el perímetro recorriendo la figura antes de sumar sus lados.",
    "Contar el área cubriendo la figura antes de multiplicar sus lados.",
    "Descubrir el atajo (largo + ancho) × 2 al notar que los lados se repiten.",
    "Entender que dos terrenos con la misma cerca pueden tener muy distinto pasto.",
    "Reconocer que, con una cerca dada, el terreno más parecido a un cuadrado es el que más rinde.",
  ],

  render: { tipo: "react", componente: "el-terreno" },
};
