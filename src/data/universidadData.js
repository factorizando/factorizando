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
      {
        id: "quimica-unam",
        name: "Química UNAM",
        teoria: "/teoria/quimica-unam",
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
            id: "vocabulario-funciones-lengua",
            name: "Vocabulario y Funciones de la Lengua",
            presentacion: "/ver/vocabulario-unam",
          },
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
      { id: "fis-pc", name: "Pensamiento Científico", presentacion: "/ver/fisica-pensamiento-cientifico" },
      { id: "fis-cinematica",     name: "Cinemática",                presentacion: "/ver/cinematica"     },
      { id: "fis-dinamica",       name: "Leyes de Newton",           presentacion: "/ver/dinamica"       },
      { id: "fis-energia",        name: "Trabajo y Energía",         presentacion: "/ver/energia"        },
      { id: "fis-termodinamica",  name: "Termodinámica",             presentacion: "/ver/termodinamica"  },
      { id: "fis-ondas",          name: "Ondas, Sonido y Óptica",    presentacion: "/ver/ondas"          },
      { id: "fis-electricidad",   name: "Electricidad y Magnetismo", presentacion: "/ver/electricidad"   },
      { id: "fis-fluidos",        name: "Fluidos",                   presentacion: "/ver/fluidos"        },
      { id: "fis-fisica-moderna", name: "Física Moderna",            presentacion: "/ver/fisica-moderna" },
    ],
  },
  {
    id: "bio",
    name: "Biología",
    color: "#f97316",
    children: [
      { id: "bio-celula", name: "La Célula", presentacion: "/ver/biologia-celula" },
      { id: "bio-bioquimica", name: "Bioquímica y Metabolismo", presentacion: "/ver/biologia-bioquimica" },
      { id: "bio-reproduccion", name: "Reproducción", presentacion: "/ver/biologia-reproduccion" },
      { id: "bio-genetica", name: "Genética y Biotecnología", presentacion: "/ver/biologia-genetica" },
      { id: "bio-evolucion", name: "Evolución y Clasificación", presentacion: "/ver/biologia-evolucion" },
      { id: "bio-ecologia", name: "Ecología", presentacion: "/ver/biologia-ecologia" },
      {
        id: "celula",
        name: "La Célula (cuestionarios)",
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
      { id: "qui-pc", name: "Pensamiento Científico", presentacion: "/ver/quimica-pensamiento-cientifico" },
    ],
  },
  {
    id: "geo",
    name: "Geografía",
    color: "#4ade80",
    children: [
      { id: "geo-tierra",      name: "La Tierra: Geografía Física",  presentacion: "/ver/geografia-tierra"      },
      { id: "geo-humana",      name: "Geografía Humana",              presentacion: "/ver/geografia-humana"      },
      { id: "geo-complemento", name: "Recursos, Mar y Política",      presentacion: "/ver/geografia-complemento" },
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
