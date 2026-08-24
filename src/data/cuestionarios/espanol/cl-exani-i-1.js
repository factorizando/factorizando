// Comprensión Lectora · Textos informativos y cotidianos (EXANI-I)
// Tipos de texto: expositivo, anuncio publicitario y texto discontinuo (datos)
// Habilidades: identificar información, idea principal, propósito, vocabulario,
// e interpretación de textos discontinuos.

const TEXTO_EXPOSITIVO =
  `**Texto 1 — Artículo informativo**<br><br>` +
  `«Cada otoño, millones de mariposas monarca viajan desde Canadá y Estados Unidos ` +
  `hasta los bosques de oyamel del centro de México, donde pasan el invierno. El recorrido ` +
  `supera los 4 000 kilómetros, una distancia asombrosa para un insecto que pesa menos de un ` +
  `gramo. Ninguna mariposa realiza el viaje completo de ida y vuelta: el ciclo se cierra tras ` +
  `varias generaciones. Por eso, proteger los bosques donde se refugian es clave para que el ` +
  `fenómeno continúe año con año.»`;

const TEXTO_ANUNCIO =
  `**Texto 2 — Anuncio**<br><br>` +
  `**¡NUEVO! Gimnasio Vitalia**<br>` +
  `¿Cansado de empezar y nunca continuar? En Vitalia te acompañamos con entrenadores ` +
  `certificados, horarios flexibles y el primer mes sin costo. ¡Tu mejor versión te está ` +
  `esperando! Inscríbete hoy y transforma tu rutina.`;

const TEXTO_DATOS =
  `**Texto 3 — Tabla de datos**<br><br>` +
  `**Asistencia a la biblioteca escolar (alumnos por día):**<br>` +
  `Lunes: 45 · Martes: 30 · Miércoles: 50 · Jueves: 28 · Viernes: 60`;

export default {
  metadata: {
    id: "cl-exani-i-1",
    titulo: "Comprensión Lectora · Textos informativos y cotidianos",
    nivel: "preparatoria",
    materia: "Comprensión Lectora",
    tema: "Textos informativos y cotidianos",
  },
  config: {
    timePerQuestion: 70,
  },
  bloques: [
    { id: "texto-expositivo", titulo: "Texto 1 · Artículo informativo", from: 0, to: 3, cantidad: 4, color: "#fbbf24" },
    { id: "texto-anuncio", titulo: "Texto 2 · Anuncio", from: 4, to: 6, cantidad: 3, color: "#fb923c" },
    { id: "texto-datos", titulo: "Texto 3 · Tabla de datos", from: 7, to: 9, cantidad: 3, color: "#34d399" },
  ],
  questions: [
    // ── Texto 1 — Expositivo ───────────────────────────────────────────────────
    {
      question: `${TEXTO_EXPOSITIVO}<br><br>**1. (Identificación)** Según el texto, ¿hasta dónde viajan las mariposas monarca para pasar el invierno?`,
      options: [
        "Hasta Canadá y Estados Unidos",
        "Hasta los bosques de oyamel del centro de México",
        "Hasta los bosques del sur de Sudamérica",
      ],
      correctAnswer: 1,
      explanation:
        "El texto lo dice de forma explícita: viajan «hasta los bosques de oyamel del centro de México, donde pasan el invierno». Canadá y Estados Unidos son el punto de partida, no el destino.",
    },
    {
      question: `${TEXTO_EXPOSITIVO}<br><br>**2. (Idea principal)** ¿Cuál es la idea principal del texto?`,
      options: [
        "Las mariposas monarca pesan menos de un gramo",
        "La migración de la monarca es asombrosa y proteger sus bosques es clave para que continúe",
        "En México hay muchos tipos de bosques",
      ],
      correctAnswer: 1,
      explanation:
        "La idea principal reúne lo que el texto sostiene: describe la asombrosa migración y concluye que «proteger los bosques donde se refugian es clave». El peso del insecto es un dato secundario y los tipos de bosque no son el tema.",
    },
    {
      question: `${TEXTO_EXPOSITIVO}<br><br>**3. (Propósito)** ¿Cuál es el propósito principal del autor?`,
      options: [
        "Convencer al lector de comprar un producto",
        "Informar y explicar un fenómeno natural",
        "Narrar una historia de ficción con personajes",
      ],
      correctAnswer: 1,
      explanation:
        "El texto presenta datos y explica cómo ocurre la migración: su propósito es informar/explicar. No vende nada (persuadir) ni cuenta una historia inventada (narrar).",
    },
    {
      question: `${TEXTO_EXPOSITIVO}<br><br>**4. (Vocabulario en contexto)** En «una distancia asombrosa», la palabra *asombrosa* significa:`,
      options: [
        "Que causa admiración o sorpresa",
        "Que resulta peligrosa",
        "Que pasa inadvertida",
      ],
      correctAnswer: 0,
      explanation:
        "Por el contexto —un viaje de más de 4 000 km hecho por un insecto diminuto— «asombrosa» indica algo que sorprende y admira. No se habla de peligro ni de algo que pase desapercibido.",
    },
    // ── Texto 2 — Anuncio ──────────────────────────────────────────────────────
    {
      question: `${TEXTO_ANUNCIO}<br><br>**5. (Propósito)** ¿Cuál es la intención principal de este texto?`,
      options: [
        "Informar de manera objetiva sobre el ejercicio",
        "Persuadir al lector de inscribirse en el gimnasio",
        "Explicar paso a paso una rutina de ejercicio",
      ],
      correctAnswer: 1,
      explanation:
        "El lenguaje llamativo, la promoción y la invitación directa («Inscríbete hoy») revelan una intención persuasiva: convencer al lector de inscribirse. No informa con neutralidad ni da instrucciones.",
    },
    {
      question: `${TEXTO_ANUNCIO}<br><br>**6. (Tipo de texto)** ¿De qué tipo de texto se trata?`,
      options: [
        "Un texto narrativo",
        "Un texto publicitario (anuncio)",
        "Un texto instructivo",
      ],
      correctAnswer: 1,
      explanation:
        "Promociona un servicio para atraer clientes con frases atractivas: es un texto publicitario. No cuenta una historia (narrativo) ni indica pasos a seguir (instructivo).",
    },
    {
      question: `${TEXTO_ANUNCIO}<br><br>**7. (Inferencia)** ¿Qué se puede inferir de la frase «el primer mes sin costo»?`,
      options: [
        "Que el gimnasio es gratuito de forma permanente",
        "Que es una promoción para atraer nuevos clientes",
        "Que el gimnasio está por cerrar",
      ],
      correctAnswer: 1,
      explanation:
        "Ofrecer el primer mes gratis es una estrategia típica para atraer clientes nuevos, esperando que después continúen pagando. No implica gratuidad permanente ni que el negocio cierre: eso no se deduce del texto.",
    },
    // ── Texto 3 — Datos (texto discontinuo) ────────────────────────────────────
    {
      question: `${TEXTO_DATOS}<br><br>**8. (Lectura de datos)** ¿Qué día asistieron más alumnos a la biblioteca?`,
      options: ["Miércoles", "Viernes", "Lunes"],
      correctAnswer: 1,
      explanation:
        "Comparando las cifras, el valor mayor es 60, que corresponde al viernes. El miércoles (50) y el lunes (45) son menores.",
    },
    {
      question: `${TEXTO_DATOS}<br><br>**9. (Lectura de datos)** ¿Qué día hubo menor asistencia?`,
      options: ["Martes", "Jueves", "Lunes"],
      correctAnswer: 1,
      explanation:
        "El valor más bajo es 28, correspondiente al jueves. El martes fue 30 y el lunes 45, ambos mayores.",
    },
    {
      question: `${TEXTO_DATOS}<br><br>**10. (Interpretación)** ¿Cuántos alumnos más asistieron el viernes en comparación con el lunes?`,
      options: ["15", "20", "5"],
      correctAnswer: 0,
      explanation:
        "El viernes asistieron 60 y el lunes 45. La diferencia es 60 − 45 = 15 alumnos. Interpretar la tabla exige no solo leer cada dato, sino compararlos.",
    },
  ],
};
