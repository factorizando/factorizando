// Comprensión lectora · Ámbito de participación social (EXANI-II)
// Textos: noticia y documento administrativo — originales
// Temas evaluados: identificación de información, interpretación, evaluación de la forma y el contenido

const NOTICIA = `**Texto 1 — Noticia**<br><br>` +
  `«El ayuntamiento informó que, a partir del lunes 14, la avenida Reforma permanecerá cerrada ` +
  `entre las calles 5 y 9 por trabajos de repavimentación. Las obras, con un costo de 3.2 millones ` +
  `de pesos, durarán aproximadamente tres semanas. Se habilitarán rutas alternas por la calle 7 y ` +
  `se pide a los automovilistas circular con precaución. La dependencia señaló que el horario de ` +
  `trabajo será de 7:00 a 19:00 horas.»`;

const DOCUMENTO = `**Texto 2 — Documento administrativo (convocatoria)**<br><br>` +
  `«Se convoca a los estudiantes de nuevo ingreso a entregar la siguiente documentación en la ` +
  `ventanilla de Servicios Escolares, en un horario de 9:00 a 14:00 horas, a más tardar el 30 de ` +
  `agosto: 1) acta de nacimiento (original y copia); 2) certificado de bachillerato; 3) comprobante ` +
  `de domicilio reciente. La documentación incompleta no será recibida.»`;

export default {
  metadata: {
    id: "cl-participacion-social",
    titulo: "Comprensión lectora · Participación social",
    nivel: "universidad",
    materia: "Comprensión lectora",
    tema: "Ámbito de participación social",
  },
  config: {
    timePerQuestion: 75,
  },
  bloques: [
    { id: "noticia", titulo: "Texto 1 · Noticia", from: 0, to: 2, cantidad: 3, color: "#34d399" },
    { id: "documento", titulo: "Texto 2 · Documento administrativo", from: 3, to: 5, cantidad: 3, color: "#fbbf24" },
  ],
  questions: [
    // ── Noticia ──────────────────────────────────────────────────────────────
    {
      question: `${NOTICIA}<br><br>**1. (Identificación)** ¿A partir de qué día permanecerá cerrada la avenida Reforma?`,
      options: [
        "A partir del lunes 14",
        "A partir del 7 del mes",
        "Durante tres semanas a partir de hoy",
      ],
      correctAnswer: 0,
      explanation:
        "El texto lo indica de forma explícita: «a partir del lunes 14, la avenida Reforma permanecerá cerrada». La calle 7 es la ruta alterna, no una fecha; las tres semanas son la duración, no el inicio.",
    },
    {
      question: `${NOTICIA}<br><br>**2. (Interpretación)** ¿Cuál es el propósito principal del texto?`,
      options: [
        "Opinar sobre la gestión del ayuntamiento",
        "Informar a la población de un hecho de interés público",
        "Narrar con estilo literario una jornada de obras",
      ],
      correctAnswer: 1,
      explanation:
        "El texto comunica datos verificables (fechas, costo, horarios, rutas) para informar a la ciudadanía: ese es el propósito de la noticia. No emite juicios (opinión) ni narra con recursos literarios (crónica).",
    },
    {
      question: `${NOTICIA}<br><br>**3. (Evaluación de forma y contenido)** ¿Qué rasgo confirma que se trata de una noticia y no de un artículo de opinión?`,
      options: [
        "Expone hechos con objetividad, sin valoraciones del autor",
        "Usa abundantes adjetivos para convencer al lector",
        "Defiende una postura personal sobre las obras",
      ],
      correctAnswer: 0,
      explanation:
        "La noticia se distingue por la objetividad: presenta hechos y datos sin opinión ni intención de persuadir. La presencia de juicios o adjetivos valorativos la convertiría en un texto de opinión.",
    },
    // ── Documento administrativo ───────────────────────────────────────────────
    {
      question: `${DOCUMENTO}<br><br>**4. (Identificación)** ¿Cuál es la fecha límite para entregar la documentación?`,
      options: [
        "El 14 de agosto",
        "El 30 de agosto",
        "Antes de las 9:00 horas",
      ],
      correctAnswer: 1,
      explanation:
        "El documento establece el plazo: «a más tardar el 30 de agosto». El horario de 9:00 a 14:00 es la franja de atención diaria, no la fecha límite.",
    },
    {
      question: `${DOCUMENTO}<br><br>**5. (Interpretación)** ¿Qué implica la advertencia «La documentación incompleta no será recibida»?`,
      options: [
        "Que se puede entregar parte ahora y el resto después",
        "Que es obligatorio presentar todos los documentos solicitados",
        "Que la entrega es opcional para los estudiantes",
      ],
      correctAnswer: 1,
      explanation:
        "La frase indica una condición obligatoria: solo se acepta el trámite si están todos los documentos. No se admite entrega parcial ni es opcional.",
    },
    {
      question: `${DOCUMENTO}<br><br>**6. (Evaluación de forma y contenido)** ¿Qué registro y forma caracterizan a este documento?`,
      options: [
        "Registro coloquial y cercano, con expresiones informales",
        "Registro formal e impersonal, con instrucciones precisas",
        "Registro literario, con metáforas y descripciones",
      ],
      correctAnswer: 1,
      explanation:
        "El documento administrativo usa un registro formal e impersonal («Se convoca…», «no será recibida») y enumera requisitos con precisión. No emplea lenguaje coloquial ni recursos literarios.",
    },
  ],
};
