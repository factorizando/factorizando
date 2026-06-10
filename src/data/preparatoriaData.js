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
//
// NIVEL 1 = áreas oficiales del EXANI-I (Guía Ceneval):
//   Pensamiento matemático · Pensamiento científico · Comprensión lectora ·
//   Redacción indirecta · Inglés (diagnóstico).  + Sesiones grabadas y Simuladores.
// (Geografía se retiró: no es un área del EXANI-I.)
// ─────────────────────────────────────────────────────────────────────────────

export const SUBJECTS_PREP = [
  // ── ÁREA: PENSAMIENTO MATEMÁTICO (40 reactivos) ──────────────────────────────
  {
    id: "mat",
    name: "Pensamiento Matemático",
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
          { id: "angulos", name: "Ángulos" },
          {
            id: "semejanza",
            name: "Semejanza de Triángulos",
            presentacion: "/ver/semejanza-triangulos",
          },
          { id: "circulo", name: "El Círculo", presentacion: "/ver/circulo" },
          {
            id: "cuadrilateros",
            name: "Cuadriláteros y Polígonos",
            presentacion: "/ver/cuadrilateros-poligonos",
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
            presentacion: "/ver/probabilidad",
          },
          {
            id: "estadistica",
            name: "Estadística",
            presentacion: "/ver/estadistica",
          },
        ],
      },
    ],
  },

  // ── ÁREA: PENSAMIENTO CIENTÍFICO (30 reactivos) ──────────────────────────────
  // El EXANI-I evalúa biología, química y física como razonamiento científico.
  // Se conservan como sub-secciones separadas dentro del área.
  {
    id: "cien",
    name: "Pensamiento Científico",
    color: "#34d399",
    children: [
      {
        id: "cien-fisica",
        name: "Física",
        children: [
          {
            id: "fisica-pc",
            name: "Pensamiento Científico",
            presentacion: "/ver/fisica-pensamiento-cientifico",
          },
          {
            id: "mru-bas",
            name: "Conceptos Básicos de MRU y MRUA",
            teoria: "/teoria/cinematica-velocidad-aceleracion",
          },
          {
            id: "newton-bas",
            name: "Leyes de Newton",
            teoria: "/teoria/leyes-de-newton",
          },
        ],
      },
      {
        id: "cien-quimica",
        name: "Química",
        children: [
          {
            id: "qui-pc",
            name: "Pensamiento Científico",
            presentacion: "/ver/quimica-pensamiento-cientifico",
          },
          {
            id: "tabla-bas",
            name: "Tabla Periódica: Organización y Grupos",
          },
        ],
      },
      {
        id: "cien-biologia",
        name: "Biología",
        children: [
          {
            id: "bio-pc",
            name: "Pensamiento Científico",
            presentacion: "/ver/biologia-pensamiento-cientifico",
          },
          {
            id: "cel-bas",
            name: "La Célula: Estructura Celular",
          },
          {
            id: "gen-bas",
            name: "Genética y Herencia: Leyes de Mendel",
          },
        ],
      },
    ],
  },

  // ── ÁREA: COMPRENSIÓN LECTORA (30 reactivos) ─────────────────────────────────
  {
    id: "comprension-lectora",
    name: "Comprensión Lectora",
    color: "#fbbf24",
    children: [
      {
        id: "cl-prox",
        name: "Próximamente: reactivos de comprensión lectora",
      },
    ],
  },

  // ── ÁREA: REDACCIÓN INDIRECTA (30 reactivos) ─────────────────────────────────
  {
    id: "esp",
    name: "Redacción Indirecta",
    color: "#a78bfa",
    children: [
      {
        id: "ri-comunicativa",
        name: "Comunicativa",
        children: [
          {
            id: "redaccion-indirecta",
            name: "Registro Lingüístico y Género Textual",
            teoria: `${import.meta.env.BASE_URL}guias/EXANI-I_RedaccionIndirecta.html`,
          },
        ],
      },
      {
        id: "ri-gramatical-semantica",
        name: "Gramatical y Semántica",
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
            id: "estructura-oracion-quiz",
            name: "Estructura de la Oración (quiz)",
            quiz: "/cuestionario/estructura-oracion-prepa",
          },
          {
            id: "sintaxis",
            name: "Sintaxis: Sujeto y Predicado",
            quiz: "/cuestionario/sujeto-predicado-exani-i",
          },
          {
            id: "concordancia-nominal",
            name: "Concordancia Nominal",
            presentacion: "/ver/concordancia-nominal",
          },
          {
            id: "concordancia-verbal",
            name: "Concordancia Verbal",
            presentacion: "/ver/concordancia-verbal",
          },
          {
            id: "cohesion-gramatical",
            name: "Cohesión Gramatical",
            presentacion: "/ver/cohesion-gramatical",
          },
          {
            id: "cohesion-lexico",
            name: "Cohesión Léxico-Semántica",
            presentacion: "/ver/cohesion-lexico-semantica",
          },
          {
            id: "marcadores-textuales",
            name: "Marcadores Textuales",
            presentacion: "/ver/marcadores-textuales",
          },
        ],
      },
      {
        id: "ri-ortografica",
        name: "Ortográfica",
        children: [
          {
            id: "grafofonetica",
            name: "Grafofonética",
            presentacion: "/ver/grafofonetica",
          },
          {
            id: "acentuacion",
            name: "Acentuación",
            presentacion: "/ver/acentuacion",
          },
          {
            id: "signos-puntuacion",
            name: "Signos de Puntuación",
            presentacion: "/ver/signos-puntuacion",
          },
        ],
      },
    ],
  },

  // ── ÁREA: INGLÉS (diagnóstico, no cuenta para el puntaje global) ─────────────
  {
    id: "ingles",
    name: "Inglés (diagnóstico)",
    color: "#f472b6",
    children: [
      {
        id: "ing-prox",
        name: "Próximamente: comprensión lectora y redacción en inglés (nivel A2)",
      },
    ],
  },

  // ── SESIONES GRABADAS (videos del curso) ─────────────────────────────────────
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
              {
                id: "sesion-5",
                name: "Sesión 5 - Álgebra",
                video: "https://youtu.be/wLaVTjkdIs4",
              },
              {
                id: "sesion-6",
                name: "Sesión 6 - Álgebra",
                video: "https://youtu.be/xYbnXNwFK5U",
              },
            ],
          },
          {
            id: "sesion-geo",
            name: "Geometría Euclidiana",
            children: [
              {
                id: "sesion-1",
                name: "Sesión 1 - Conceptos Básicos de Geometría",
                video: "https://youtu.be/KwPBfASCQeQ",
              },
              {
                id: "sesion-2",
                name: "Sesión 2 - El quinto postulado de Euclides, Triángulos y Teorema de Pitágoras",
                video: "https://youtu.be/NR1MGb6fYTQ",
              },
              {
                id: "sesion-3",
                name: "Sesión 3 - Congruencia y Semejanza de Triángulos 1",
                video: "https://youtu.be/D9htJ6_gxxE",
              },
              {
                id: "sesion-4",
                name: "Sesión 4 - Congruencia y Semejanza de Triángulos 2",
                video: "https://youtu.be/v-EUmID0qaM",
              },
              {
                id: "sesion-5",
                name: "Sesión 5 - Cuadriláteros y polígonos regulares",
                video: "https://youtu.be/v-EUmID0qaM",
              },
              {
                id: "sesion-6",
                name: "Sesión 6 - El Círculo",
                video: "https://youtu.be/HWIZwEtln0Q",
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
          {
            id: "sesion-7",
            name: "Sesión 7 - Concordancia Verbal 1",
            video: "https://youtu.be/drCqyUPgR38",
          },
          {
            id: "sesion-8",
            name: "Sesión 8 - Concordancia Verbal 2",
            video: "https://youtu.be/JL4c-zDLPNA",
          },
          {
            id: "sesion-9",
            name: "Sesión 9 - Concordancia Verbal 3",
            video: "https://youtu.be/JL4c-zDLPNA",
          },
          {
            id: "sesion-10",
            name: "Sesión 10 - Acentuación",
            video: "https://youtu.be/oT9zv8SfreI",
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
          {
            id: "sesion-3",
            name: "Sesión 3 - Leyes de Newton",
            video: "https://youtu.be/sqyqHzbBW1Y",
          },
        ],
      },
      {
        id: "sesion-prob",
        name: "Probabilidad",
        children: [
          {
            id: "sesion-1",
            name: "Sesión 1 - Probabilidad",
            video: "https://youtu.be/M61YvjBRfRM",
          },
        ],
      },
    ],
  },

  // ── SIMULADORES TIPO EXANI-I ─────────────────────────────────────────────────
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
];
