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
          {
            id: "racionales-prepa",
            name: "Números Racionales",
            quiz: "/cuestionario/racionales-prepa",
            video: null,
            teoria: null,
          },
          {
            id: "uni-numeros-racionales",
            name: "Números Racionales",
            quiz: "/cuestionario/uni-numeros-racionales",
            video: null,
            teoria: null,
          },
        ],
      },
      {
        id: "mat-tem2",
        name: "Álgebra",
        subtopics: [
          {
            id: "algebra-prepa",  
            name: "Algebra Básica",
            quiz: "/cuestionario/algebra-prepa",
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
        name: "Ortografía",
        subtopics: [
        {
          id: "ortografia-grafias",
          name: "Acentuación y Grafías",
          quiz: "/cuestionario/ortografia-grafias",
          video: null,
          teoria: null,
        },
        
      ],
      },
      {
        id: "esp-tem2",
        name: "Vocabulario",
        subtopics: [
          {
          id: "sin-ant-ana",
          name: "Sinónimos, Antónimos, Homófonos y Analogías",
          quiz: "/cuestionario/sinonimos-antonimos-analogias",
          video: null,
          teoria: null,
        }
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
          {
          id: "celula-organelos",
          name: "Organelos y Funciones (Simulador UNAM)",
          quiz: "/cuestionario/celula-organelos",
          video: null,
          teoria: null,
        },
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
