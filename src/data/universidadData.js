// src/data/universidadData.js
// ─────────────────────────────────────────────────────────────────────────────
// Estructura de materias, temas y recursos para Universidad.
// Misma lógica que preparatoriaData.js — edita aquí para agregar contenido.
// ─────────────────────────────────────────────────────────────────────────────

export const SUBJECTS_UNI = [
  {
    id: "cal",
    name: "Cálculo",
    color: "#3b9eff",
    themes: [
      {
        id: "lim",
        name: "Límites y Continuidad",
        quiz:  "/cuestionario/limites",
        video: "https://www.youtube.com/watch?v=XXXXXXX",
        pdf:   "/pdfs/limites.pdf",
      },
      {
        id: "der",
        name: "Derivadas",
        quiz:  "/cuestionario/derivadas",
        video: "https://www.youtube.com/watch?v=XXXXXXX",
        pdf:   "/pdfs/derivadas.pdf",
      },
      {
        id: "int",
        name: "Integrales",
        quiz:  null,
        video: null,
        pdf:   null,
      },
    ],
  },
  {
    id: "alg",
    name: "Álgebra Lineal",
    color: "#a78bfa",
    themes: [
      {
        id: "mat",
        name: "Matrices y Determinantes",
        quiz:  "/cuestionario/matrices",
        video: "https://www.youtube.com/watch?v=XXXXXXX",
        pdf:   "/pdfs/matrices.pdf",
      },
      {
        id: "esp",
        name: "Espacios Vectoriales",
        quiz:  null,
        video: null,
        pdf:   null,
      },
    ],
  },
  {
    id: "prob",
    name: "Probabilidad y Estadística",
    color: "#34d399",
    themes: [
      {
        id: "prob1",
        name: "Probabilidad Básica",
        quiz:  "/cuestionario/probabilidad",
        video: "https://www.youtube.com/watch?v=XXXXXXX",
        pdf:   null,
      },
      {
        id: "dist",
        name: "Distribuciones de Probabilidad",
        quiz:  null,
        video: null,
        pdf:   null,
      },
    ],
  },
  {
    id: "disc",
    name: "Matemáticas Discretas",
    color: "#fbbf24",
    themes: [
      {
        id: "log",
        name: "Lógica Proposicional",
        quiz:  "/cuestionario/logica",
        video: null,
        pdf:   "/pdfs/logica.pdf",
      },
      {
        id: "gra",
        name: "Teoría de Grafos",
        quiz:  null,
        video: null,
        pdf:   null,
      },
    ],
  },
];
