// src/data/preparatoriaData.js
// ─────────────────────────────────────────────────────────────────────────────
// Estructura RECURSIVA: cada nodo puede tener children y/o recursos
//
// CÓMO AGREGAR RECURSOS EN CUALQUIER NIVEL:
//   quiz:   "/cuestionario/nombre"
//   video:  "https://youtube.com/..."
//   teoria: `${import.meta.env.BASE_URL}guias/mi-guia.html`
//
// REGLAS:
//   - Si un nodo tiene children → muestra acordeón
//   - Si un nodo tiene quiz/video/teoria → muestra pills de recursos
//   - Un nodo puede tener ambos al mismo tiempo
// ─────────────────────────────────────────────────────────────────────────────

export const SUBJECTS_PREP = [
  {
    id: "mat",
    name: "Matemáticas",
    color: "#3b9eff",
    children: [
      {
        id: "numeros-reales",
        name: "Números Reales",
        children: [
          {
            id: "numeros-enteros",
            name: "Números Enteros",
            children: [
              {
                id: "numeros-enteros-suma",
                name: "Suma de Números Enteros",
                quiz: "/cuestionario/suma-enteros",
              },
              {
                id: "numeros-enteros-producto",
                name: "Producto de Números Enteros",
                quiz: "/cuestionario/producto-enteros",
              },
              {
                id: "numeros-enteros-exponentes",
                name: "Leyes de los Exponentes para Números Enteros",
              },
              {
                id: "Operaciones-con-enteros",
                name: "Operaciones con Números Enteros y Signos de Agrupación",
                quiz: "/cuestionario/numeros-enteros",
              },
              {
                id: "numeros-enteros-divisibilidad",
                name: "Divisibilidad de Números Enteros",
                quiz: "/cuestionario/divisibilidad",
                teoria: `${import.meta.env.BASE_URL}guias/teoriadivisibilidad.html`,
              },
              {
                id: "divisibilidad-mcd-mcm",
                name: "Divisibilidad, M.C.D. y M.C.M. (Avanzado)",
                quiz: "/cuestionario/divisibilidad-mcd-mcm",
              },
              {
                id: "numeros-enteros-todos",
                name: "Números Primos, M.C.D. y M.C.M.",
                quiz: "/cuestionario/primos-mcd-mcm",
              },
            ],
          },
          {
            id: "numeros-racionales",
            name: "Números Racionales",
            quiz: "/cuestionario/racionales-prepa",
            // children: [
            //   {
            //     id: "numeros-racionales-suma",
            //     name: "Suma de Números Racionales",
            //   },
            // ],
          },
          {
            id: "numeros-reales",
            name: "Números Reales",
            children: [
              {
                id: "numeros-reales-suma",
                name: "Suma de Números Reales",
              },
            ],
          },
        ],
      },
      {
        id: "algebra",
        name: "Álgebra",
        children: [
          {
            id: "algebra-all",
            name: "Suma, Producto, etc",
            quiz: "/cuestionario/algebra-prepa",
          },
        ],
      },
      {
        id: "geometria",
        name: "Geometría",
        children: [
          {
            id: "angulos",
            name: "Ángulos",
          },
        ],
      },
      {
        id: "probabilidad-estadistica",
        name: "Probabilidad y Estadística",
        children: [
          {
            id: "probabilidad",
            name: "Probabilidad",
          },
        ],
      },
    ],
  },
  {
    id: "esp",
    name: "Español",
    color: "#a78bfa",
    children: [
      {
        id: "sintaxis",
        name: "Sintaxis",
        children: [
          {
            id: "sin",
            name: "Sintaxis: Análisis Oracional",
            quiz: "/cuestionario/sintaxis-espanol",
          },
        ],
      },
      {
        id: "sint-morf",
        name: "Sintaxis y Morfología",
        children: [
          {
            id: "sint-bas",
            name: "Análisis Sintáctico",
            quiz: "/cuestionario/sintaxis",
          },
        ],
      },
      {
        id: "lit",
        name: "Literatura Mexicana",
        children: [
          {
            id: "lit-bas",
            name: "Géneros Literarios",
          },
        ],
      },
    ],
  },
  {
    id: "fis",
    name: "Física",
    color: "#34d399",
    children: [
      {
        id: "mru",
        name: "Movimiento Rectilíneo Uniforme",
        children: [
          {
            id: "mru-bas",
            name: "Conceptos Básicos de MRU",
            quiz: "/cuestionario/mru",
            video: "https://www.youtube.com/watch?v=XXXXXXX",
          },
        ],
      },
      {
        id: "newton",
        name: "Leyes de Newton",
        children: [
          {
            id: "newton-bas",
            name: "Las Tres Leyes",
            quiz: "/cuestionario/newton",
            video: "https://www.youtube.com/watch?v=XXXXXXX",
          },
        ],
      },
    ],
  },
  {
    id: "bio",
    name: "Biología",
    color: "#f97316",
    children: [
      {
        id: "cel",
        name: "La Célula",
        children: [
          {
            id: "cel-bas",
            name: "Estructura Celular",
            quiz: "/cuestionario/celula",
            video: "https://www.youtube.com/watch?v=XXXXXXX",
          },
        ],
      },
      {
        id: "gen",
        name: "Genética y Herencia",
        children: [
          {
            id: "gen-bas",
            name: "Leyes de Mendel",
          },
        ],
      },
    ],
  },
  {
    id: "qui",
    name: "Química",
    color: "#f43f5e",
    children: [
      {
        id: "tabla",
        name: "Tabla Periódica",
        children: [
          {
            id: "tabla-bas",
            name: "Organización y Grupos",
            quiz: "/cuestionario/tabla-periodica",
          },
        ],
      },
    ],
  },
  {
    id: "hist",
    name: "Historia",
    color: "#fbbf24",
    children: [
      {
        id: "ind",
        name: "México Independiente",
        children: [
          {
            id: "ind-bas",
            name: "Causas de la Independencia",
            quiz: "/cuestionario/independencia",
          },
        ],
      },
    ],
  },
  {
    id: "sim",
    name: "Entrenamiento Simulado",
    color: "#8b5cf6",
    children: [
      {
        id: "sim-tem1",
        name: "Simuladores",
        children: [
          {
            id: "sim-prepa-1",
            name: "Simulador 1",
            quiz: "/cuestionario/simulador-prepa-1",
          },
        ],
      },
    ],
  },
];
