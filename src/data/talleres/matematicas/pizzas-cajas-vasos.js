// Taller de Pizzas, Cajas y Vasos — regularización de primaria (7 a 10 años).
//
// Segundo taller React del proyecto (`render.tipo: "react"`), y por las
// mismas dos razones que el de decodificación: el contenido —los rangos de
// dificultad y los generadores de ejercicios— vive en archivos de datos
// aparte para poder ajustarlo sin tocar la interfaz, y el dato que le sirve
// al maestro (en qué tipo de ejercicio se equivoca) necesita `localStorage`,
// que dentro de un iframe sin `allow-same-origin` lanza SecurityError.
//
// Tres juegos con una sola mecánica de fondo: se plantea la situación, el
// niño manipula o contesta, retroalimentación inmediata, siguiente. La
// operación escrita (26 ÷ 8 = 3 y sobran 2) aparece siempre **al resolver**,
// como conclusión de lo que ya pasó en pantalla, nunca como enunciado.
//
// Ver docs/TALLER_PIZZAS_CAJAS_VASOS.md.

export const TALLER = {
  id: "pizzas-cajas-vasos",
  titulo: "Pizzas, Cajas y Vasos",
  materia: "Matemáticas",
  tema: "Multiplicación, división y fracciones",
  nivel: "primaria",
  edades: "7-10 años",
  icono: "🍕",
  descripcion:
    "Tres juegos con la misma interfaz: la pizzería reparte rebanadas en cajas y descubre el " +
    "residuo, la fábrica arma cajas iguales para ver la multiplicación como grupos, y los vasos " +
    "medidores llenan, comparan y emparejan fracciones. Todo se genera al vuelo y se ajusta al " +
    "bloque de edad que elija el maestro al empezar.",

  actividades: [
    { id: "pizzeria", nombre: "La Pizzería", edades: "7-10",
      temas: ["division-reparto", "residuo", "division-exacta", "problemas-un-paso"] },
    { id: "fabrica", nombre: "La Fábrica de Cajas", edades: "7-10",
      temas: ["multiplicacion", "problemas-un-paso"] },
    { id: "huerto", nombre: "El Huerto", edades: "9-10",
      temas: ["multiplicacion", "perimetro-area", "distributiva"] },
    { id: "vasos-llenar", nombre: "Vasos: llenar hasta la marca", edades: "7-10",
      temas: ["fracciones"] },
    { id: "vasos-comparar", nombre: "Vasos: ¿cuál tiene más?", edades: "7-10",
      temas: ["fracciones", "comparar-fracciones"] },
    { id: "vasos-equivalencias", nombre: "Vasos: valen lo mismo", edades: "9-10",
      temas: ["fracciones", "fracciones-equivalentes"] },
  ],

  objetivos: [
    "Repartir una cantidad en grupos iguales y ver que lo que no alcanza a llenar un grupo es el residuo.",
    "Entender que para llevarse lo que sobra hace falta una caja más: el residuo con consecuencia.",
    "Distinguir una división exacta de una que deja sobrante, sin dar por hecho que siempre sobra.",
    "Leer la multiplicación como grupos iguales y no como una tabla memorizada.",
    "Reconocer el producto en el rectángulo del huerto, puente hacia el área y hacia la división.",
    "Representar una fracción contando las partes en que se dividió el entero.",
    "Descubrir que entre más partes, más chico es cada pedazo: 1/3 es menos que 1/2.",
    "Emparejar fracciones equivalentes viendo que llegan a la misma altura.",
  ],

  render: { tipo: "react", componente: "pizzas-cajas-vasos" },
};
