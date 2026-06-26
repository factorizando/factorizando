// Curso: Probabilidad — nivel UNIVERSIDAD (educación superior).
// Estructura basada en el temario UNAM "Probabilidad I" (Actuaría, clave 0625):
//   1. Introducción (álgebra de conjuntos — base)   ← contenido ya desarrollado
//   2. Espacios de probabilidad      (Tema 1 del temario)
//   3. Variables aleatorias y funciones de distribución (Tema 2)
//   4. Momentos de variables aleatorias (Tema 3)
//   5. Teoremas límite (Tema 4)
// Modelo: Curso (= Área) → Secciones → Subsecciones. Cada subsección ES un
// documento estructurado, referido por `documentoRef`. `proximamente` marca
// las que aún no tienen contenido.
export const CURSO = {
  id: "probabilidad-universidad",
  materia: "Matemáticas",
  area: "Probabilidad",
  nivel: "universidad",
  icono: "omega",
  examenes: ["UNAM"],
  secciones: [
    {
      id: "introduccion",
      titulo: "Introducción",
      subsecciones: [
        { id: "que-es-un-conjunto", titulo: "¿Qué es un conjunto?", documentoRef: "prob-uni-que-es-conjunto" },
        { id: "subconjuntos-igualdad", titulo: "Subconjuntos e igualdad", documentoRef: "prob-uni-subconjuntos-igualdad" },
        { id: "operaciones", titulo: "Operaciones con conjuntos", documentoRef: "prob-uni-operaciones-conjuntos" },
        { id: "leyes", titulo: "Leyes del álgebra de conjuntos", documentoRef: "prob-uni-leyes-conjuntos" },
      ],
    },
    {
      id: "espacios-de-probabilidad",
      titulo: "Espacios de probabilidad",
      subsecciones: [
        { id: "espacio-muestral-eventos", titulo: "Espacio muestral, eventos y su interpretación", documentoRef: "prob-uni-espacio-muestral-eventos" },
        { id: "panorama-historico", titulo: "Panorama histórico: frecuentista, clásica y geométrica", documentoRef: "prob-uni-panorama-historico" },
        { id: "definicion-axiomatica", titulo: "Definición axiomática de probabilidad", documentoRef: "prob-uni-definicion-axiomatica" },
        { id: "propiedades", titulo: "Propiedades de la probabilidad", documentoRef: "prob-uni-propiedades" },
        { id: "condicional-independencia", titulo: "Probabilidad condicional e independencia", documentoRef: "prob-uni-condicional-independencia" },
        { id: "total-bayes", titulo: "Fórmulas de probabilidad total y de Bayes", documentoRef: "prob-uni-total-bayes" },
        { id: "continuidad", titulo: "Teorema de continuidad de la probabilidad", documentoRef: "prob-uni-continuidad" },
        { id: "simulacion-frecuentista", titulo: "Simulación de la interpretación frecuentista", documentoRef: "prob-uni-simulacion-frecuentista" },
      ],
    },
    {
      id: "variables-aleatorias",
      titulo: "Variables aleatorias y funciones de distribución",
      subsecciones: [
        { id: "definicion-va", titulo: "Definición de variable aleatoria", proximamente: true },
        { id: "funcion-distribucion", titulo: "Función de distribución y sus propiedades", proximamente: true },
        { id: "va-discretas", titulo: "Variables aleatorias discretas y familias paramétricas", proximamente: true },
        { id: "va-continuas", titulo: "Variables aleatorias continuas y funciones de densidad", proximamente: true },
        { id: "distribucion-de-funciones", titulo: "Distribución de funciones de variables aleatorias", proximamente: true },
        { id: "simulacion-va", titulo: "Simulación de variables aleatorias", proximamente: true },
      ],
    },
    {
      id: "momentos",
      titulo: "Momentos de variables aleatorias",
      subsecciones: [
        { id: "esperanza-varianza", titulo: "Esperanza, varianza y propiedades", proximamente: true },
        { id: "momentos", titulo: "Momentos de variables aleatorias", proximamente: true },
        { id: "esperanza-de-funciones", titulo: "Esperanza de funciones de una variable aleatoria", proximamente: true },
        { id: "desigualdades", titulo: "Desigualdades (Tchebyshev, Jensen, Markov, Chernoff)", proximamente: true },
        { id: "funciones-generadoras", titulo: "Funciones generadoras de momentos", proximamente: true },
      ],
    },
    {
      id: "teoremas-limite",
      titulo: "Teoremas límite para sucesiones de variables aleatorias discretas",
      subsecciones: [
        { id: "poisson-binomial", titulo: "Aproximación Poisson a la Binomial", proximamente: true },
        { id: "vectores-aleatorios", titulo: "Vectores aleatorios: distribución conjunta y marginales", proximamente: true },
        { id: "sumas-independientes", titulo: "Sumas de variables aleatorias independientes", proximamente: true },
        { id: "lgn-tlc-enunciados", titulo: "Leyes de los grandes números y Teorema del Límite Central (enunciados)", proximamente: true },
        { id: "demostracion-ley-debil", titulo: "Demostración de la ley débil de los grandes números", proximamente: true },
        { id: "de-moivre-laplace", titulo: "Teorema del Límite Central para Bernoulli (De Moivre–Laplace)", proximamente: true },
        { id: "contraste-simulacion", titulo: "Contraste de resultados teóricos con simulación", proximamente: true },
      ],
    },
  ],
};
