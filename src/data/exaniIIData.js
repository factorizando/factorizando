// src/data/exaniIIData.js
// ─────────────────────────────────────────────────────────────────────────────
// Árbol de contenido para el EXANI-II · Área de Ingenierías y Ciencias Exactas (EPIU)
//
// Estructura del examen (138 reactivos que cuentan para el puntaje global):
//   ÁREAS TRANSVERSALES (iguales para todos los sustentantes)
//     · Comprensión lectora      (30 reactivos)
//     · Redacción indirecta      (30 reactivos)
//     · Pensamiento matemático   (30 reactivos)
//   MÓDULO DISCIPLINAR EPIU      (24 reactivos)
//     · Matemáticas avanzadas y cálculo diferencial (10)
//     · Física fundamental aplicada                 (10)
//     · Fundamentos de química y estructura          (4)
//
// Mismo formato recursivo que universidadData.js / preparatoriaData.js.
// ─────────────────────────────────────────────────────────────────────────────

export const SUBJECTS_EXANI_II = [
  // ───────────────────────────── ÁREAS TRANSVERSALES ─────────────────────────
  {
    id: "ei-cl",
    name: "Comprensión lectora",
    color: "#3b9eff",
    children: [
      { id: "ei-cl-estudio", name: "Ámbito de estudio (argumentativo y ensayo académico)", quiz: "/cuestionario/cl-ambito-estudio" },
      { id: "ei-cl-literario", name: "Ámbito literario (cuento y poema)", quiz: "/cuestionario/cl-ambito-literario" },
      { id: "ei-cl-social", name: "Ámbito de participación social (noticia y documento administrativo)", quiz: "/cuestionario/cl-participacion-social" },
    ],
  },
  {
    id: "ei-ri",
    name: "Redacción indirecta",
    color: "#a78bfa",
    children: [
      {
        id: "ei-ri-comunicativa",
        name: "Comunicativa",
        children: [
          { id: "ei-ri-registro", name: "Registro lingüístico", presentacion: "/ver/registro-linguistico" },
          { id: "ei-ri-genero", name: "Género textual (prólogo, ensayo, reseña, artículo de opinión, crónica, noticia)", presentacion: "/ver/genero-textual" },
        ],
      },
      {
        id: "ei-ri-gramatical",
        name: "Gramatical y semántica",
        children: [
          { id: "ei-ri-concordancia-nominal", name: "Concordancia nominal", presentacion: "/ver/concordancia-nominal-avanzada" },
          { id: "ei-ri-concordancia-verbal", name: "Concordancia verbal", presentacion: "/ver/concordancia-verbal-avanzada" },
          { id: "ei-ri-coh-gram", name: "Cohesión gramatical", presentacion: "/ver/cohesion-gramatical" },
          { id: "ei-ri-coh-lex", name: "Cohesión léxico-semántica", presentacion: "/ver/cohesion-lexico-semantica" },
          { id: "ei-ri-coh-text", name: "Cohesión textual (marcadores)", presentacion: "/ver/marcadores-textuales" },
        ],
      },
      {
        id: "ei-ri-ortografica",
        name: "Ortográfica",
        children: [
          { id: "ei-ri-grafofonetica", name: "Grafofonética", presentacion: "/ver/grafofonetica" },
          { id: "ei-ri-puntuacion", name: "Puntuación", presentacion: "/ver/signos-puntuacion" },
          { id: "ei-ri-acentuacion", name: "Acentuación", presentacion: "/ver/acentuacion" },
        ],
      },
    ],
  },
  {
    id: "ei-pm",
    name: "Pensamiento matemático",
    color: "#34d399",
    children: [
      {
        id: "ei-pm-comprension",
        name: "Comprensión de lo matemático",
        children: [
          { id: "ei-pm-razones", name: "Razones, proporciones, porcentaje y unidades", presentacion: "/ver/razones-proporciones" },
          { id: "ei-pm-exponentes", name: "Leyes de los exponentes y expresiones algebraicas", presentacion: "/ver/exponentes-algebra" },
          { id: "ei-pm-inecuaciones", name: "Inecuaciones lineales", presentacion: "/ver/ecuaciones-lineales" },
          { id: "ei-pm-razones-trig", name: "Razones trigonométricas", presentacion: "/ver/trigonometria" },
          { id: "ei-pm-area", name: "Ejes de simetría y área", presentacion: "/ver/cuadrilateros-poligonos" },
          { id: "ei-pm-probabilidad", name: "Frecuencias y probabilidad clásica", presentacion: "/ver/probabilidad-exani-ii" },
          { id: "ei-pm-estadistica", name: "Media aritmética y desviación estándar", presentacion: "/ver/estadistica-exani-ii" },
        ],
      },
      {
        id: "ei-pm-matematizacion",
        name: "Matematización",
        children: [
          { id: "ei-pm-ec-lineales", name: "Ecuaciones lineales y variación lineal", presentacion: "/ver/ecuaciones-lineales" },
          { id: "ei-pm-polinomios", name: "Polinomios y sistemas de ecuaciones lineales", presentacion: "/ver/polinomios-sistemas" },
          { id: "ei-pm-cuadraticas", name: "Funciones cuadráticas", presentacion: "/ver/funciones-cuadraticas" },
          { id: "ei-pm-relaciones-trig", name: "Relaciones trigonométricas", presentacion: "/ver/trigonometria" },
          { id: "ei-pm-grafica-info", name: "Representación gráfica de información", presentacion: "/ver/estadistica-exani-ii" },
          { id: "ei-pm-tendencia", name: "Medidas de tendencia central y dispersión", presentacion: "/ver/estadistica-exani-ii" },
          { id: "ei-pm-posicion", name: "Medidas de posición (cuartiles, deciles, percentiles)", presentacion: "/ver/estadistica-exani-ii" },
        ],
      },
    ],
  },

  // ─────────────────────── MÓDULO DISCIPLINAR · EPIU ──────────────────────────
  {
    id: "ei-disc",
    name: "Ingenierías y Ciencias Exactas (módulo)",
    color: "#f43f5e",
    children: [
      {
        id: "ei-disc-mat",
        name: "Matemáticas avanzadas y cálculo diferencial",
        children: [
          { id: "ei-disc-trig", name: "Trigonometría analítica", presentacion: "/ver/trigonometria-analitica" },
          { id: "ei-disc-algebra", name: "Álgebra superior", presentacion: "/ver/algebra-superior" },
          { id: "ei-disc-calculo", name: "Cálculo diferencial y optimización", presentacion: "/ver/calculo-diferencial" },
        ],
      },
      {
        id: "ei-disc-fis",
        name: "Física fundamental aplicada",
        children: [
          { id: "ei-disc-cinematica", name: "Mecánica clásica: cinemática", presentacion: "/ver/cinematica" },
          { id: "ei-disc-dinamica", name: "Dinámica: Leyes de Newton", presentacion: "/ver/dinamica" },
          { id: "ei-disc-energia", name: "Trabajo y energía", presentacion: "/ver/energia" },
          { id: "ei-disc-termo", name: "Física térmica y termodinámica clásica", presentacion: "/ver/termodinamica" },
          { id: "ei-disc-electro", name: "Electromagnetismo básico", presentacion: "/ver/electricidad" },
        ],
      },
      {
        id: "ei-disc-qui",
        name: "Fundamentos de química y estructura de la materia",
        children: [
          { id: "ei-disc-atomo", name: "Estructura atómica y periodicidad", presentacion: "/ver/quimica-fundamentos" },
          { id: "ei-disc-enlaces", name: "Interacciones químicas (enlaces y reacciones)", presentacion: "/ver/quimica-fundamentos" },
        ],
      },
    ],
  },

  // ───────────── MÓDULO DISCIPLINAR GENERAL · CIENCIAS EXPERIMENTALES ──────────
  {
    id: "ei-exp",
    name: "Ciencias Experimentales (módulo)",
    color: "#22d3ee",
    children: [
      {
        id: "ei-exp-qui",
        name: "Química",
        children: [
          { id: "ei-exp-qui-materia", name: "Estructura y cambios de la materia", presentacion: "/ver/quimica-fundamentos" },
          { id: "ei-exp-qui-nomenclatura", name: "Lenguaje químico inorgánico y reacciones", presentacion: "/ver/nomenclatura-reacciones" },
          { id: "ei-exp-qui-estequiometria", name: "Cuantificación en las reacciones (estequiometría)", presentacion: "/ver/estequiometria" },
          { id: "ei-exp-qui-organica", name: "Compuestos del carbono y macromoléculas", presentacion: "/ver/quimica-organica" },
        ],
      },
      {
        id: "ei-exp-fis",
        name: "Física",
        children: [
          { id: "ei-exp-fis-cinematica", name: "Cinemática", presentacion: "/ver/cinematica" },
          { id: "ei-exp-fis-dinamica", name: "Dinámica (Leyes de Newton)", presentacion: "/ver/dinamica" },
          { id: "ei-exp-fis-termologia", name: "Termología", presentacion: "/ver/termodinamica" },
          { id: "ei-exp-fis-electricidad", name: "Electricidad y magnetismo", presentacion: "/ver/electricidad" },
        ],
      },
      {
        id: "ei-exp-bio",
        name: "Biología",
        children: [
          { id: "ei-exp-bio-celula", name: "Estructura celular", presentacion: "/ver/biologia-celula" },
          { id: "ei-exp-bio-metabolismo", name: "Metabolismo celular", presentacion: "/ver/biologia-bioquimica" },
          { id: "ei-exp-bio-reproductor", name: "Sistema reproductor", presentacion: "/ver/biologia-reproduccion" },
          { id: "ei-exp-bio-sistemas", name: "Sistemas nervioso y endócrino", presentacion: "/ver/sistemas-nervioso-endocrino" },
          { id: "ei-exp-bio-genetica", name: "Genética y sus aplicaciones", presentacion: "/ver/biologia-genetica" },
          { id: "ei-exp-bio-evolucion", name: "Evolución y diversidad biológica", presentacion: "/ver/biologia-evolucion" },
          { id: "ei-exp-bio-biodiversidad", name: "Biodiversidad y su preservación", presentacion: "/ver/biologia-ecologia" },
          { id: "ei-exp-bio-anatomia", name: "Anatomía, fisiología y diversidad", presentacion: "/ver/biologia-anatomia-fisiologia" },
        ],
      },
    ],
  },
];
