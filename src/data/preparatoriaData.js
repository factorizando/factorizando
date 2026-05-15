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
            teoria: "/teoria/fracciones-decimales",
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
        id: "gramatica",
        name: "Gramática",
        children: [
          {
            id: "sintaxis",
            name: "Sintaxis",
            quiz: "/cuestionario/sujeto-predicado-exani-i",
          },
          {
            id: "categorias-gramaticales",
            name: "Estructura de la Oración",
            quiz: "/cuestionario/estructura-oracion-prepa",
          },
        ],
      },
      {
        id: "teoria-gramatica",
        name: "Teoría Gramatical",
        children: [
          {
            id: "categorias-gramaticales",
            name: "Categorías Gramaticales",
            teoria: `${import.meta.env.BASE_URL}guias/categorias_gramaticales.html`,
          },
          {
            id: "estructura-oracion",
            name: "Estructura de la Oración",
            teoria: "/teoria/estructuraoracion",
          },
          {
            id: "redaccion-indirecta",
            name: "Redacción Indirecta",
            teoria: `${import.meta.env.BASE_URL}guias/EXANI-I_RedaccionIndirecta.html`,
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
        name: "Cinemática",
        children: [
          {
            id: "mru-bas",
            name: "Conceptos Básicos de MRU y MRUA ",
            teoria: "/teoria/cinematica-velocidad-aceleracion",
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
            //quiz: "/cuestionario/newton",
            //video: "https://www.youtube.com/watch?v=XXXXXXX",
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
            //quiz: "/cuestionario/celula",
            //video: "https://www.youtube.com/watch?v=XXXXXXX",
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
            //quiz: "/cuestionario/tabla-periodica",
          },
        ],
      },
    ],
  },
  {
    id: "Sesiones",
    name: "Sesiones Grabadas",
    color: "#dab941",
    children: [
      {
        id: "sesion-mat",
        name: "Matemáticas",
        children: [
          {
            id: "sesion-numreales",
            name: "Números Reales",
            children: [
              {
                id: "sesion-1",
                name: "Sesión 1 - Números Enteros",
                video: "https://youtu.be/E91tPJm_tfY",
              },
              {
                id: "sesion-2",
                name: "Sesión 2 - Números Enteros",
                video: "https://youtu.be/v0bzbrzMBsk",
              },
              {
                id: "sesion-3",
                name: "Sesión 3 - Divisibilidad",
                video: "https://youtu.be/ME10h-skfhI",
              },
              {
                id: "sesion-4",
                name: "Sesión 4 - TFA, Primos y Algoritmo de Euclides",
                video: "https://youtu.be/OI0Ts_3jJss",
              },
              {
                id: "sesion-5",
                name: "Sesión 5 - Números Racionales",
                video: "https://youtu.be/NoyQsunLJZo",
              },
              {
                id: "sesion-6",
                name: "Sesión 6 - Números Racionales",
                video: "https://youtu.be/BLjM1jshchY",
              },
              {
                id: "sesion-7",
                name: "Sesión 7 - Representación Decimal de Números Racionales",
                video: "https://youtu.be/9rfl9T6fhCI",
              },
              {
                id: "sesion-8",
                name: "Sesión 8 - Porcentajes",
                video: "https://youtu.be/BkxToYyh-Cc",
              },
              {
                id: "sesion-9",
                name: "Sesión 9 - Proporciones y Razones",
                video: "https://youtu.be/qO7KgflaKfY",
              },
              {
                id: "sesion-10",
                name: "Sesión 10 - Números Reales",
                video: "https://youtu.be/sqxYXIZnCCs",
              },
              {
                id: "sesion-11",
                name: "Sesión 11 - Números Reales: Leyes de los Exponentes y radicales",
                video: "https://youtu.be/O-Fy1I_m4o8",
              },
            ],
          },
          {
            id: "sesion-algebra",
            name: "Álgebra",
            children: [
              {
                id: "sesion-1",
                name: "Sesión 1 - Álgebra",
                video: "https://youtu.be/ygZNO2afktI",
              },
              {
                id: "sesion-2",
                name: "Sesión 2 - Álgebra",
                video: "https://youtu.be/Qh6I9nNP0Eg",
              },
              {
                id: "sesion-3",
                name: "Sesión 3 - Álgebra",
                video: "https://youtu.be/Ps5LBBkuQCY",
              },
              {
                id: "sesion-4",
                name: "Sesión 4 - Álgebra",
                video: "https://youtu.be/l34juzi2ejc",
              },
            ],
          },
        ],
      },
      {
        id: "sesion-esp",
        name: "Español",
        children: [
          {
            id: "sesion-1",
            name: "Sesión 1 - Las Categorías Gramaticales",
            video: "https://youtu.be/Amhygadh77M",
          },
          {
            id: "sesion-2",
            name: "Sesión 2 - Estructura de la Oración",
            video: "https://youtu.be/z5O13l3kzQo",
          },
          {
            id: "sesion-3",
            name: "Sesión 3 - Oraciones Compuestas",
            video: "https://youtu.be/nOtduxD4MZA",
          },
          {
            id: "sesion-4",
            name: "Sesión 4 - Análisis de Oraciones Compuestas",
            video: "https://youtu.be/SDc7mOnQ9QU",
          },
          {
            id: "sesion-5",
            name: "Sesión 5 - Concordancia Nomial",
            video: "https://youtu.be/FZaQ1t_F9ew",
          },
          {
            id: "sesion-6",
            name: "Sesión 6 - Concordancia Nominal",
            video: "https://youtu.be/AJK121qCRMs",
          },
        ],
      },
      {
        id: "sesion-bio",
        name: "Biología",
        children: [
          {
            id: "sesion-1",
            name: "Sesión 1 - La Célula Part 1",
            video: "https://youtu.be/bE119zeGp54",
          },
          {
            id: "sesion-2",
            name: "Sesión 2 - La Célula Part 2",
            video: "https://youtu.be/DL_F1AeM4Gs",
          },
        ],
      },
      {
        id: "sesion-fis",
        name: "Física",
        children: [
          {
            id: "sesion-1",
            name: "Sesión 1 - Velocidad",
            video: "https://youtu.be/c7OuTZgXBL8",
          },
          {
            id: "sesion-2",
            name: "Sesión 2 - Aceleración",
            video: "https://youtu.be/XDm4stjYSrI",
          },
        ],
      },
    ],
  },
  {
    id: "exani-i",
    name: "Simuladores tipo EXANI-I",
    color: "#12c7db",
    children: [
      {
        id: "exani-i1",
        name: "Simulador EXANI-I",
        quiz: "/cuestionario/simulador-exani-i",
      },
      {
        id: "exani-i2",
        name: "Simulador EXANI-I #2",
        quiz: "/cuestionario/simulador-exani-i-2",
      },
      {
        id: "exani-i3",
        name: "Simulador EXANI-I #3",
        quiz: "/cuestionario/simulador-exani-i-3",
      },
    ],
  },
  // {
  //   id: "sim",
  //   name: "Simuladores de Examen",
  //   color: "#8b5cf6",
  //   children: [
  //     {
  //       id: "sim-prepa-1",
  //       name: "Simulador 1",
  //       quiz: "/cuestionario/simulador-prepa-1",
  //     },
  //     {
  //       id: "sim-prepa-2",
  //       name: "Simulador 2",
  //       quiz: "/cuestionario/simulador-prepa-2",
  //     },
  //   ],
  // },
];
