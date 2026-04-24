// src/data/cuestionarios/universidad/espanol/sujeto-predicado-uni.js

export default {
  metadata: {
    id: "sujeto-predicado-uni",
    titulo: "Sujeto y Predicado",
    nivel: "universidad",
    materia: "Español",
    tema: "Estructura de la oración",
  },
  config: { timePerQuestion: 60 },
  bloques: [
    { id: "sujeto-predicado", titulo: "Identificación de Sujeto y Predicado", from: 0, to: 19, color: "#6490f5" },
  ],
  questions: [
    // ── BLOQUE 1: Identificar el SUJETO ──────────────────────────────
    {
      question: "¿Cuál es el **sujeto** de la oración: *«La interpretación semiótica de los mitos explica el pensamiento simbólico humano.»*?",
      options: [
        "explica el pensamiento simbólico humano",
        "La interpretación semiótica de los mitos",
        "el pensamiento simbólico humano",
        "los mitos",
      ],
      correctAnswer: 1,
      explanation: "El **sujeto** es el sintagma nominal que concuerda con el verbo. Pregunta: *¿Quién explica?* → «La interpretación semiótica de los mitos». El núcleo del sujeto es **interpretación** (sustantivo).",
    },
    {
      question: "¿Cuál es el **sujeto** de la oración: *«Los estudiantes de posgrado presentaron su tesis ante el jurado.»*?",
      options: [
        "presentaron su tesis ante el jurado",
        "su tesis ante el jurado",
        "Los estudiantes de posgrado",
        "el jurado",
      ],
      correctAnswer: 2,
      explanation: "Pregunta: *¿Quiénes presentaron?* → «Los estudiantes de posgrado». El núcleo del sujeto es **estudiantes** (sustantivo). «de posgrado» es un complemento del núcleo.",
    },
    {
      question: "¿Cuál es el **predicado** de la oración: *«El equipo de investigación publicó un artículo en una revista científica.»*?",
      options: [
        "El equipo de investigación",
        "publicó un artículo en una revista científica",
        "un artículo en una revista científica",
        "en una revista científica",
      ],
      correctAnswer: 1,
      explanation: "El **predicado** es todo lo que se dice del sujeto. Incluye el verbo núcleo **publicó** más sus complementos: *un artículo* (objeto directo) y *en una revista científica* (complemento circunstancial).",
    },
    {
      question: "Identifica el **núcleo del sujeto** en: *«Las propuestas innovadoras del consejo directivo merecen atención.»*",
      options: [
        "directivo",
        "atención",
        "consejo",
        "propuestas",
      ],
      correctAnswer: 3,
      explanation: "El sujeto completo es «Las propuestas innovadoras del consejo directivo». El **núcleo** es la palabra principal: **propuestas** (sustantivo). Los demás elementos —*las*, *innovadoras*, *del consejo directivo*— son determinantes o complementos del núcleo.",
    },
    {
      question: "¿Cuál es el **núcleo del predicado** en: *«María Elena estudia bioquímica con gran dedicación.»*?",
      options: [
        "bioquímica",
        "gran",
        "estudia",
        "dedicación",
      ],
      correctAnswer: 2,
      explanation: "El núcleo del predicado es siempre el **verbo**. En este caso: **estudia**. *Bioquímica* es el objeto directo y *con gran dedicación* es un complemento circunstancial de modo.",
    },
    {
      question: "En la oración *«Corren los niños por el parque.»*, ¿cuál es el sujeto?",
      options: [
        "Corren",
        "por el parque",
        "los niños",
        "el parque",
      ],
      correctAnswer: 2,
      explanation: "Aunque el sujeto está pospuesto (después del verbo), sigue siendo **los niños**. Pregunta: *¿Quiénes corren?* → «los niños». El orden sujeto-predicado puede invertirse en español.",
    },
    {
      question: "¿Cuál es el **sujeto** de: *«El análisis detallado de los datos confirma la hipótesis inicial.»*?",
      options: [
        "confirma la hipótesis inicial",
        "la hipótesis inicial",
        "El análisis detallado de los datos",
        "los datos",
      ],
      correctAnswer: 2,
      explanation: "Pregunta: *¿Qué confirma?* → «El análisis detallado de los datos». Núcleo del sujeto: **análisis**. *Detallado* es adjetivo y *de los datos* es complemento del nombre.",
    },
    {
      question: "Identifica el **predicado** de: *«Las hojas amarillas del otoño cubren completamente el jardín.»*",
      options: [
        "Las hojas amarillas del otoño",
        "del otoño",
        "el jardín",
        "cubren completamente el jardín",
      ],
      correctAnswer: 3,
      explanation: "El sujeto es «Las hojas amarillas del otoño» y el **predicado** es todo lo demás: **cubren completamente el jardín**. El núcleo del predicado es el verbo *cubren*.",
    },
    {
      question: "¿Qué tipo de sujeto tiene la oración: *«Llueve con fuerza desde esta mañana.»*?",
      options: [
        "Sujeto simple",
        "Sujeto compuesto",
        "Sujeto elíptico",
        "Sujeto tácito o inexistente (oración impersonal)",
      ],
      correctAnswer: 3,
      explanation: "Los verbos meteorológicos como *llover*, *nevar*, *amanecer* se usan de forma **impersonal**: no tienen sujeto gramatical. No se puede preguntar *¿quién llueve?* porque no hay un agente.",
    },
    {
      question: "En *«Juan y Sofía organizaron el congreso académico.»*, el sujeto es:",
      options: [
        "Simple, núcleo: Juan",
        "Compuesto, núcleos: Juan y Sofía",
        "Elíptico, núcleo: organizaron",
        "Simple, núcleo: congreso",
      ],
      correctAnswer: 1,
      explanation: "Cuando hay **dos o más núcleos** coordinados, el sujeto es **compuesto**. Aquí los núcleos son *Juan* y *Sofía* unidos por la conjunción *y*. Por eso el verbo va en plural: *organizaron*.",
    },

    // ── BLOQUE 2: Análisis más complejo ──────────────────────────────
    {
      question: "¿Cuál es el **sujeto** de: *«Se venden libros de segunda mano en esa librería.»*?",
      options: [
        "Se",
        "libros de segunda mano",
        "esa librería",
        "Es una oración impersonal con se; no tiene sujeto",
      ],
      correctAnswer: 1,
      explanation: "Aunque lleva *se*, esta no es una impersonal sino una **pasiva refleja**: *libros de segunda mano* es el sujeto (el verbo concuerda en plural: *se venden*). Si fuera singular —*se vende un libro*— confirmaría la concordancia.",
    },
    {
      question: "Identifica el **núcleo del sujeto** en: *«La constante dedicación al estudio de los jóvenes universitarios les abrirá muchas puertas.»*",
      options: [
        "jóvenes",
        "dedicación",
        "estudio",
        "puertas",
      ],
      correctAnswer: 1,
      explanation: "El sujeto completo es «La constante dedicación al estudio de los jóvenes universitarios». El núcleo es **dedicación** porque es el sustantivo principal del que dependen todos los demás modificadores.",
    },
    {
      question: "¿Cuál es el **predicado** de: *«Los resultados obtenidos en el laboratorio no coinciden con la teoría propuesta.»*?",
      options: [
        "Los resultados obtenidos en el laboratorio",
        "obtenidos en el laboratorio",
        "no coinciden con la teoría propuesta",
        "la teoría propuesta",
      ],
      correctAnswer: 2,
      explanation: "Sujeto: «Los resultados obtenidos en el laboratorio». **Predicado**: *no coinciden con la teoría propuesta*. El núcleo del predicado es el verbo **coinciden** (negado por *no*). *Con la teoría propuesta* es un complemento de régimen.",
    },
    {
      question: "En la oración *«Llegaron cansados los alpinistas después de la expedición.»*, ¿cuál es el sujeto?",
      options: [
        "Llegaron cansados",
        "después de la expedición",
        "los alpinistas",
        "cansados",
      ],
      correctAnswer: 2,
      explanation: "El sujeto pospuesto es **los alpinistas**. *Cansados* es un predicativo subjetivo (complemento que se refiere al sujeto a través del verbo). Pregunta: *¿Quiénes llegaron?* → «los alpinistas».",
    },
    {
      question: "¿Cuál es el **sujeto tácito o elíptico** de: *«Estudiamos toda la noche para el examen de gramática.»*?",
      options: [
        "el examen de gramática",
        "toda la noche",
        "Nosotros (omitido, se deduce de la desinencia verbal)",
        "No tiene sujeto",
      ],
      correctAnswer: 2,
      explanation: "El verbo *estudiamos* (1ª persona plural) indica que el sujeto es **nosotros**, aunque no aparece escrito. Este es el **sujeto elíptico o tácito**: se omite porque la desinencia verbal ya lo indica.",
    },
    {
      question: "En *«La película que ganó el premio resultó ser una obra maestra.»*, ¿cuál es el sujeto?",
      options: [
        "el premio",
        "una obra maestra",
        "La película que ganó el premio",
        "que ganó el premio",
      ],
      correctAnswer: 2,
      explanation: "El sujeto es **La película que ganó el premio**. Incluye la oración subordinada de relativo *que ganó el premio*, que funciona como modificador del núcleo **película**. El verbo principal es *resultó*.",
    },
    {
      question: "¿Cuál es el **núcleo del predicado** en: *«El comité directivo ha aprobado por unanimidad el nuevo reglamento.»*?",
      options: [
        "comité",
        "aprobado",
        "reglamento",
        "unanimidad",
      ],
      correctAnswer: 1,
      explanation: "En las perífrasis verbales, el núcleo del predicado es el **verbo principal**, no el auxiliar. Aquí la perífrasis es *ha aprobado* → núcleo: **aprobado**. *Ha* es solo el auxiliar de haber en pretérito perfecto.",
    },
    {
      question: "Analiza: *«Ni el frío ni el cansancio detuvieron a los rescatistas.»* ¿Cuál es el sujeto?",
      options: [
        "el frío",
        "el cansancio",
        "los rescatistas",
        "Ni el frío ni el cansancio",
      ],
      correctAnswer: 3,
      explanation: "Es un **sujeto compuesto** formado por dos núcleos coordinados de forma negativa con *ni...ni*: **el frío** y **el cansancio**. Por eso el verbo va en plural: *detuvieron*.",
    },
    {
      question: "¿Qué función cumple la parte subrayada en: *«Los médicos diagnosticaron __la enfermedad__ de inmediato.»*?",
      options: [
        "Sujeto",
        "Núcleo del sujeto",
        "Predicado completo",
        "Parte del predicado (objeto directo)",
      ],
      correctAnswer: 3,
      explanation: "**La enfermedad** es el **objeto directo** del verbo *diagnosticaron*. Forma parte del predicado, no es el sujeto. Pregunta para identificar el OD: *¿Qué diagnosticaron?* → *la enfermedad*. El sujeto es «Los médicos».",
    },
    {
      question: "En la oración *«Ser honesto requiere valentía.»*, ¿cuál es el sujeto?",
      options: [
        "valentía",
        "honesto",
        "Ser honesto",
        "No tiene sujeto",
      ],
      correctAnswer: 2,
      explanation: "El sujeto puede ser una **oración de infinitivo**: **Ser honesto**. Funciona como sustantivo (sujeto del verbo *requiere*). Este tipo se llama sujeto oracional. Pregunta: *¿Qué requiere valentía?* → *Ser honesto*.",
    },
  ],
};
