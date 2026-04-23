// src/data/universidadData.js
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

export const SUBJECTS_UNI = [
  {
    id: "teo",
    name: "Teoría",
    color: "#336594",
    children: [
      {
        id: "limites",
        name: "Límites",
        teoria: "/teoria/limites",
      },
      {
        id: "continuidad",
        name: "Continuidad",
        teoria: "/teoria/continuidad",
      },
    ],
  },
  {
    id: "mat",
    name: "Matemáticas",
    color: "#3b9eff",
    children: [
      {
        id: "numeros-enteros",
        name: "Números Enteros",
        children: [
          {
            id: "enteros-prepa",
            name: "Suma, Producto, Exponenciación y Divisibilidad",
            quiz: "/cuestionario/numeros-enteros",
          },
          {
            id: "racionales-prepa",
            name: "Números Racionales",
            quiz: "/cuestionario/racionales-prepa",
          },
          {
            id: "uni-numeros-racionales",
            name: "Números Racionales (Avanzado)",
            quiz: "/cuestionario/uni-numeros-racionales",
          },
        ],
      },
      {
        id: "algebra",
        name: "Álgebra",
        children: [
          {
            id: "algebra-prepa",
            name: "Álgebra Básica",
            quiz: "/cuestionario/algebra-prepa",
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
        id: "ortografia",
        name: "Ortografía",
        children: [
          {
            id: "ortografia-grafias",
            name: "Acentuación y Grafías",
            quiz: "/cuestionario/ortografia-grafias",
          },
        ],
      },
      {
        id: "vocabulario",
        name: "Vocabulario",
        children: [
          {
            id: "sinonimos-antonimos-analogias",
            name: "Sinónimos, Antónimos, Homófonos y Analogías",
            quiz: "/cuestionario/sinonimos-antonimos-analogias",
          },
        ],
      },
      {
        id: "sintaxis",
        name: "Sintaxis",
        children: [
          {
            id: "sintaxis-espanol",
            name: "Sintaxis en Español",
            quiz: "/cuestionario/sintaxis-espanol",
          },
        ],
      },
      {
        id: "gramatica",
        name: "Gramática",
        children: [
          {
            id: "estructura-oracion-uni",
            name: "Estructura de la oración",
            quiz: "/cuestionario/estructura-oracion-uni",
            teoria: "/teoria/errores-frecuentes",
          },
        ],
      },
    ],
  },
  {
    id: "lit",
    name: "Literatura",
    color: "#f472b6",
    children: [
      {
        id: "lit-tem1",
        name: "Tema por definir",
        children: [{ id: "lit-sub1", name: "Subtema por definir" }],
      },
    ],
  },
  {
    id: "fis",
    name: "Física",
    color: "#34d399",
    children: [
      {
        id: "fis-tem1",
        name: "Tema por definir",
        children: [{ id: "fis-sub1", name: "Subtema por definir" }],
      },
    ],
  },
  {
    id: "bio",
    name: "Biología",
    color: "#f97316",
    children: [
      {
        id: "celula",
        name: "La Célula",
        children: [
          {
            id: "celula-bas",
            name: "Organelos Celulares I",
            quiz: "/cuestionario/la-celula",
          },
          {
            id: "celula-organelos",
            name: "Organelos Celulares II",
            quiz: "/cuestionario/celula-organelos",
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
        id: "qui-tem1",
        name: "Tema por definir",
        children: [{ id: "qui-sub1", name: "Subtema por definir" }],
      },
    ],
  },
  {
    id: "geo",
    name: "Geografía",
    color: "#4ade80",
    children: [
      {
        id: "geo-tem1",
        name: "Tema por definir",
        children: [{ id: "geo-sub1", name: "Subtema por definir" }],
      },
    ],
  },
  {
    id: "hist",
    name: "Historia",
    color: "#fbbf24",
    children: [
      {
        id: "hist-tem1",
        name: "Tema por definir",
        children: [{ id: "hist-sub1", name: "Subtema por definir" }],
      },
    ],
  },
  {
    id: "exani-ii",
    name: "Simuladores tipo EXANI-II",
    color: "#43a8b1",
    children: [
      {
        id: "simulador-1",
        name: "Simulador por definir",
      },
    ],
  },
  {
    id: "sim",
    name: "Simuladores de Examen",
    color: "#e879f9",
    children: [
      {
        id: "sim-tem1",
        name: "Simulador por definir",
        children: [{ id: "sim-sub1", name: "Subtema por definir" }],
      },
    ],
  },
];
