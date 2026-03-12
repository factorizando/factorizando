// src/data/universidadData.js
// ─────────────────────────────────────────────────────────────────────────────
// Estructura: Materia → Tema → Subtema → Recursos
//
// CÓMO AGREGAR RECURSOS:
//   quiz:   "/cuestionario/nombre"   (ruta interna, definida en App.jsx)
//   video:  "https://youtube.com/..."
//   teoria: `${import.meta.env.BASE_URL}guias/mi-guia.html`
//   teoria: `${import.meta.env.BASE_URL}pdfs/mi-archivo.pdf`
// ─────────────────────────────────────────────────────────────────────────────

export const SUBJECTS_UNI = [
  {
    id: "mat",
    name: "Matemáticas",
    color: "#3b9eff",
    themes: [
      {
        id: "mat-tem1",
        name: "Números Enteros",
        subtopics: [
          {
            id: "enteros-prepa",
            name: "Suma, Producto, Exponenciación y Divisibilidad",
            quiz: "/cuestionario/enteros-prepa",
            video: null,
            teoria: null,
          },
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
        id: "esp-tem1",
        name: "Tema por definir",
        subtopics: [
          { id: "esp-sub1", name: "Subtema por definir", quiz: null, video: null, teoria: null },
        ],
      },
    ],
  },
  {
    id: "lit",
    name: "Literatura",
    color: "#f472b6",
    themes: [
      {
        id: "lit-tem1",
        name: "Tema por definir",
        subtopics: [
          { id: "lit-sub1", name: "Subtema por definir", quiz: null, video: null, teoria: null },
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
        id: "fis-tem1",
        name: "Tema por definir",
        subtopics: [
          { id: "fis-sub1", name: "Subtema por definir", quiz: null, video: null, teoria: null },
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
        id: "bio-tem1",
        name: "La Célula",
        subtopics: [
          { id: "celula", name: "Organelos Celulares", quiz: "/cuestionario/la-celula", video: null, teoria: null },
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
        id: "qui-tem1",
        name: "Tema por definir",
        subtopics: [
          { id: "qui-sub1", name: "Subtema por definir", quiz: null, video: null, teoria: null },
        ],
      },
    ],
  },
  {
    id: "geo",
    name: "Geografía",
    color: "#4ade80",
    themes: [
      {
        id: "geo-tem1",
        name: "Tema por definir",
        subtopics: [
          { id: "geo-sub1", name: "Subtema por definir", quiz: null, video: null, teoria: null },
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
        id: "hist-tem1",
        name: "Tema por definir",
        subtopics: [
          { id: "hist-sub1", name: "Subtema por definir", quiz: null, video: null, teoria: null },
        ],
      },
    ],
  },
  {
    id: "sim",
    name: "Simuladores de Examen",
    color: "#e879f9",
    themes: [
      {
        id: "sim-tem1",
        name: "Simulador por definir",
        subtopics: [
          { id: "sim-sub1", name: "Subtema por definir", quiz: null, video: null, teoria: null },
        ],
      },
    ],
  },
];
