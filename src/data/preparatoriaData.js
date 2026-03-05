// src/data/preparatoriaData.js
// ─────────────────────────────────────────────────────────────────────────────
// Estructura de materias, temas y recursos para Preparatoria.
//
// CÓMO AGREGAR UN CUESTIONARIO:
//   1. Crea tu cuestionario en src/pages/cuestionarios/NombreCuestionario.jsx
//   2. Agrega la ruta en App.jsx (ver comentario en ese archivo)
//   3. Aquí en "quiz", pon la ruta exacta que usaste en App.jsx
//      Ejemplo: quiz: "/cuestionario/numeros-enteros"
//
// CÓMO AGREGAR UN VIDEO:
//   Pon la URL completa de YouTube en el campo "video"
//   Ejemplo: video: "https://www.youtube.com/watch?v=XXXXXXX"
//
// CÓMO AGREGAR UN PDF:
//   Sube el PDF a la carpeta public/pdfs/ y referencia así:
//   Ejemplo: pdf: "/pdfs/numeros-enteros.pdf"
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
        quiz:  "/cuestionario/divisibilidad",   // ruta interna
        video: "https://www.youtube.com/watch?v=XXXXXXX",
        pdf:   "/pdfs/numeros-enteros.pdf",
      },
      // {
      //   id: "exp",
      //   name: "Leyes de los Exponentes",
      //   quiz:  "/cuestionario/exponentes",
      //   video: "https://www.youtube.com/watch?v=XXXXXXX",
      //   pdf:   "/pdfs/exponentes.pdf",
      // },
      // {
      //   id: "frac",
      //   name: "Fracciones y Decimales",
      //   quiz:  "/cuestionario/fracciones",
      //   video: null,   // aún no disponible
      //   pdf:   null,
      // },
      // {
      //   id: "alg",
      //   name: "Álgebra Básica",
      //   quiz:  null,
      //   video: null,
      //   pdf:   null,
      // },
      // {
      //   id: "ec1",
      //   name: "Ecuaciones de Primer Grado",
      //   quiz:  "/cuestionario/ecuaciones-1",
      //   video: "https://www.youtube.com/watch?v=XXXXXXX",
      //   pdf:   null,
      // },
      // {
      //   id: "geo",
      //   name: "Geometría Analítica",
      //   quiz:  "/cuestionario/geometria",
      //   video: "https://www.youtube.com/watch?v=XXXXXXX",
      //   pdf:   "/pdfs/geometria.pdf",
      // },
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
        quiz:  "/cuestionario/tipos-texto",
        video: null,
        pdf:   "/pdfs/tipos-texto.pdf",
      },
      {
        id: "sint",
        name: "Sintaxis y Morfología",
        quiz:  "/cuestionario/sintaxis",
        video: null,
        pdf:   null,
      },
      {
        id: "lit",
        name: "Literatura Mexicana",
        quiz:  null,
        video: null,
        pdf:   null,
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
        quiz:  "/cuestionario/mru",
        video: "https://www.youtube.com/watch?v=XXXXXXX",
        pdf:   null,
      },
      {
        id: "newton",
        name: "Leyes de Newton",
        quiz:  "/cuestionario/newton",
        video: "https://www.youtube.com/watch?v=XXXXXXX",
        pdf:   "/pdfs/newton.pdf",
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
        quiz:  "/cuestionario/celula",
        video: "https://www.youtube.com/watch?v=XXXXXXX",
        pdf:   null,
      },
      {
        id: "gen",
        name: "Genética y Herencia",
        quiz:  null,
        video: null,
        pdf:   null,
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
        quiz:  "/cuestionario/tabla-periodica",
        video: null,
        pdf:   "/pdfs/tabla-periodica.pdf",
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
        quiz:  "/cuestionario/independencia",
        video: null,
        pdf:   null,
      },
    ],
  },
];
