// Los Cinco Sólidos — vitrina de geometría del espacio para regularización.
//
// Tres salas: la galería (los cinco, girables y abribles, con sus caras,
// aristas y vértices), el dual (la animación por la que existe el taller) y el
// reto (diez preguntas).
//
// La sala del dual es la razón de todo. El tema se enseña casi siempre como
// una lista que hay que memorizar —cinco nombres, cinco números de caras—, y
// así no se sostiene ni una semana. Vienen en parejas, y la pareja no es un
// dato: es una construcción de un solo paso que se puede *ver*. Se pone un
// punto en el centro de cada cara, se unen los puntos vecinos, y adentro del
// cubo aparece el octaedro. Ahí se entiende de golpe por qué el cubo tiene 6
// caras y 8 vértices y el octaedro 8 caras y 6 vértices, y por qué los dos
// tienen 12 aristas.
//
// Taller React, como los otros tres, y por una razón nueva además de las
// suyas: todo lo que se muestra se **calcula** (ver `poliedros.js`). Las caras
// de cada sólido no están tecleadas, el dual tampoco; así el dibujo no puede
// contradecir a lo que dice el texto. Ver docs/TALLER_SOLIDOS_PLATONICOS.md.

export const TALLER = {
  id: "solidos-platonicos",
  titulo: "Los Cinco Sólidos",
  materia: "Matemáticas",
  tema: "Cuerpos geométricos y dualidad",
  nivel: "secundaria",
  edades: "10-14 años",
  icono: "🔷",
  descripcion:
    "Los cinco sólidos platónicos en 3D: se giran con el dedo, se abren en pedazos para contarles " +
    "las caras y se ve aparecer, paso a paso, el sólido que cada uno lleva dentro —su dual—. Cierra " +
    "con diez preguntas de contar caras y vértices, encontrar la pareja y usar la fórmula de Euler.",

  actividades: [
    { id: "galeria", nombre: "La Galería · los cinco, por dentro y por fuera", edades: "10-14",
      temas: ["cuerpos-geometricos", "solidos-platonicos", "figuras"] },
    { id: "dualidad", nombre: "El Dual · por qué vienen en parejas", edades: "11-14",
      temas: ["dualidad-poliedros", "solidos-platonicos", "cuerpos-geometricos"] },
    { id: "reto", nombre: "El Reto · contar, emparejar y Euler", edades: "10-14",
      temas: ["formula-euler", "cuerpos-geometricos", "dualidad-poliedros"] },
  ],

  objetivos: [
    "Distinguir cara, arista y vértice contándolas por separado sobre el mismo cuerpo.",
    "Reconocer los cinco sólidos platónicos y saber por qué no puede haber un sexto.",
    "Construir el dual de un poliedro: un punto en el centro de cada cara y unir los vecinos.",
    "Explicar por qué el dual intercambia caras con vértices y conserva las aristas.",
    "Usar la fórmula de Euler (C + V − A = 2) para obtener el dato que falta.",
  ],

  render: { tipo: "react", componente: "solidos-platonicos" },
};
