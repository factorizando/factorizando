// src/data/preparatoriaData.js
// ─────────────────────────────────────────────────────────────────────────────
// Estructura: Materia → Tema → Subtema → Recursos
//
// CÓMO AGREGAR RECURSOS:
//   quiz:   "/cuestionario/nombre"   (ruta interna, definida en App.jsx)
//   video:  "https://youtube.com/..."
//   teoria: `${import.meta.env.BASE_URL}guias/mi-guia.html`
//   teoria: `${import.meta.env.BASE_URL}pdfs/mi-archivo.pdf`
// ─────────────────────────────────────────────────────────────────────────────

export const SUBJECTS_PREP = [
  {
    id: "mat",
    name: "Matemáticas",
    color: "#3b9eff",
    themes: [
      {
        id: "ent",
        name: "Números Enteros",
        subtopics: [
          {
            id: "suma-ent",
            name: "Suma de Números Enteros",
            quiz:   "/cuestionario/suma-enteros",
            video:  null,
            teoria: null,
          },
          {
            id: "exponentes",
            name: "Leyes de los Exponentes",
            quiz:   null,
            video:  null,
            teoria: null,
          },
          {
            id: "div",
            name: "Divisibilidad",
            quiz:   "/cuestionario/divisibilidad",
            video:  null,
            teoria: `${import.meta.env.BASE_URL}guias/teoriadivisibilidad.html`,
          },
          // {
          //   id: "primos",
          //   name: "Números Primos",
          //   quiz:   "/cuestionario/primos",
          //   video:  "https://www.youtube.com/watch?v=XXXXXXX",
          //   teoria: null,
          // },
        ],
      },
    ],
  },
  {
    id: "esp",
    name: "Español",
    color: "#a78bfa",
    themes: [
      {
        id: "texto",
        name: "Tipos de Texto",
        subtopics: [
          { id: "texto-exp", name: "Texto Expositivo", quiz: "/cuestionario/tipos-texto", video: null, teoria: null },
        ],
      },
      {
        id: "sint",
        name: "Sintaxis y Morfología",
        subtopics: [
          { id: "sint-bas", name: "Análisis Sintáctico", quiz: "/cuestionario/sintaxis", video: null, teoria: null },
        ],
      },
      {
        id: "lit",
        name: "Literatura Mexicana",
        subtopics: [
          { id: "lit-bas", name: "Géneros Literarios", quiz: null, video: null, teoria: null },
        ],
      },
    ],
  },
  {
    id: "fis",
    name: "Física",
    color: "#34d399",
    themes: [
      {
        id: "mru",
        name: "Movimiento Rectilíneo Uniforme",
        subtopics: [
          { id: "mru-bas", name: "Conceptos Básicos de MRU", quiz: "/cuestionario/mru", video: "https://www.youtube.com/watch?v=XXXXXXX", teoria: null },
        ],
      },
      {
        id: "newton",
        name: "Leyes de Newton",
        subtopics: [
          { id: "newton-bas", name: "Las Tres Leyes", quiz: "/cuestionario/newton", video: "https://www.youtube.com/watch?v=XXXXXXX", teoria: null },
        ],
      },
    ],
  },
  {
    id: "bio",
    name: "Biología",
    color: "#f97316",
    themes: [
      {
        id: "cel",
        name: "La Célula",
        subtopics: [
          { id: "cel-bas", name: "Estructura Celular", quiz: "/cuestionario/celula", video: "https://www.youtube.com/watch?v=XXXXXXX", teoria: null },
        ],
      },
      {
        id: "gen",
        name: "Genética y Herencia",
        subtopics: [
          { id: "gen-bas", name: "Leyes de Mendel", quiz: null, video: null, teoria: null },
        ],
      },
    ],
  },
  {
    id: "qui",
    name: "Química",
    color: "#f43f5e",
    themes: [
      {
        id: "tabla",
        name: "Tabla Periódica",
        subtopics: [
          { id: "tabla-bas", name: "Organización y Grupos", quiz: "/cuestionario/tabla-periodica", video: null, teoria: null },
        ],
      },
    ],
  },
  {
    id: "hist",
    name: "Historia",
    color: "#fbbf24",
    themes: [
      {
        id: "ind",
        name: "México Independiente",
        subtopics: [
          { id: "ind-bas", name: "Causas de la Independencia", quiz: "/cuestionario/independencia", video: null, teoria: null },
        ],
      },
    ],
  },
];
