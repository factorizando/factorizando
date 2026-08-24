// Comprensión Lectora · Textos narrativos y literarios (EXANI-I)
// Tipos de texto: narrativo, dramático (teatro) e instructivo
// Habilidades: identificar información, secuencia, inferencia, tema,
// reconocer el tipo de texto y sus elementos.

const TEXTO_NARRATIVO =
  `**Texto 1 — Relato**<br><br>` +
  `«Marta encontró una vieja bicicleta oxidada en el patio de su abuela. Aunque le faltaba un ` +
  `pedal y las llantas estaban desinfladas, decidió repararla. Durante tres tardes lijó, aceitó ` +
  `y ajustó cada pieza. Cuando por fin la montó y rodó por la calle, sintió que había rescatado ` +
  `algo más que un objeto: había recuperado los paseos que su abuela le contaba de su juventud.»`;

const TEXTO_DRAMATICO =
  `**Texto 2 — Fragmento de obra de teatro**<br><br>` +
  `**ROSA:** (mirando el reloj) Ya son las ocho, deberíamos irnos.<br>` +
  `**LUIS:** Espera, todavía no llega Daniel.<br>` +
  `**ROSA:** Siempre llega tarde. Si no salimos ahora, perderemos el tren.<br>` +
  `**LUIS:** (tomando su abrigo) Está bien, dejémosle una nota.`;

const TEXTO_INSTRUCTIVO =
  `**Texto 3 — Instructivo**<br><br>` +
  `**Cómo preparar agua de jamaica:**<br>` +
  `1. Hierve un litro de agua.<br>` +
  `2. Agrega media taza de flores de jamaica.<br>` +
  `3. Deja reposar 10 minutos.<br>` +
  `4. Cuela el líquido y endúlzalo al gusto.<br>` +
  `5. Sirve con hielo.`;

export default {
  metadata: {
    id: "cl-exani-i-2",
    titulo: "Comprensión Lectora · Textos narrativos y literarios",
    nivel: "preparatoria",
    materia: "Comprensión Lectora",
    tema: "Textos narrativos y literarios",
  },
  config: {
    timePerQuestion: 70,
  },
  bloques: [
    { id: "texto-narrativo", titulo: "Texto 1 · Relato", from: 0, to: 3, cantidad: 4, color: "#a78bfa" },
    { id: "texto-dramatico", titulo: "Texto 2 · Obra de teatro", from: 4, to: 6, cantidad: 3, color: "#f472b6" },
    { id: "texto-instructivo", titulo: "Texto 3 · Instructivo", from: 7, to: 9, cantidad: 3, color: "#34d399" },
  ],
  questions: [
    // ── Texto 1 — Narrativo ────────────────────────────────────────────────────
    {
      question: `${TEXTO_NARRATIVO}<br><br>**1. (Identificación)** ¿Qué encontró Marta en el patio de su abuela?`,
      options: [
        "Una vieja bicicleta oxidada",
        "Un álbum de fotografías",
        "Un par de llantas nuevas",
      ],
      correctAnswer: 0,
      explanation:
        "El relato lo dice al inicio: «Marta encontró una vieja bicicleta oxidada en el patio de su abuela». Las demás opciones no aparecen en el texto.",
    },
    {
      question: `${TEXTO_NARRATIVO}<br><br>**2. (Secuencia)** ¿Qué hizo Marta antes de montar la bicicleta y rodar por la calle?`,
      options: [
        "La vendió a un vecino",
        "La reparó durante tres tardes",
        "Se la regaló a su abuela",
      ],
      correctAnswer: 1,
      explanation:
        "Según el orden del relato, primero «durante tres tardes lijó, aceitó y ajustó cada pieza» y solo después «la montó y rodó por la calle». Reparar la bici ocurre antes de usarla.",
    },
    {
      question: `${TEXTO_NARRATIVO}<br><br>**3. (Inferencia)** Cuando el texto dice que Marta «había recuperado los paseos que su abuela le contaba», se puede inferir que la bicicleta:`,
      options: [
        "tenía un valor sentimental ligado a su abuela",
        "era muy costosa en el mercado",
        "pertenecía en realidad a un vecino",
      ],
      correctAnswer: 0,
      explanation:
        "La frase conecta la bicicleta con los recuerdos de la abuela: se infiere un valor sentimental, no económico. El texto no menciona precio alguno ni otro dueño.",
    },
    {
      question: `${TEXTO_NARRATIVO}<br><br>**4. (Tema)** ¿Cuál es el tema central del relato?`,
      options: [
        "Las reglas para andar en bicicleta",
        "El esfuerzo por reparar un objeto y su valor sentimental",
        "La historia de los medios de transporte",
      ],
      correctAnswer: 1,
      explanation:
        "Todo el relato gira en torno a cómo Marta repara la bicicleta y al significado afectivo que descubre en ella. No trata sobre reglas de tránsito ni sobre la historia del transporte.",
    },
    // ── Texto 2 — Dramático ────────────────────────────────────────────────────
    {
      question: `${TEXTO_DRAMATICO}<br><br>**5. (Tipo de texto)** ¿De qué tipo de texto se trata?`,
      options: [
        "Narrativo, porque un narrador cuenta los hechos",
        "Dramático, porque está escrito en diálogos para ser representado",
        "Expositivo, porque explica un tema con objetividad",
      ],
      correctAnswer: 1,
      explanation:
        "Está formado por los parlamentos de los personajes (ROSA, LUIS) y acotaciones entre paréntesis: rasgos del texto dramático, escrito para representarse. No hay narrador ni explicación de un tema.",
    },
    {
      question: `${TEXTO_DRAMATICO}<br><br>**6. (Elementos del texto)** ¿Qué indican las palabras entre paréntesis, como «(mirando el reloj)»?`,
      options: [
        "El título de cada escena",
        "Las acotaciones: lo que hacen los personajes",
        "Los pensamientos secretos del autor",
      ],
      correctAnswer: 1,
      explanation:
        "En una obra de teatro, los textos entre paréntesis son acotaciones: indican las acciones, gestos o el modo en que actúan los personajes. No son títulos ni pensamientos del autor.",
    },
    {
      question: `${TEXTO_DRAMATICO}<br><br>**7. (Inferencia)** ¿Qué se puede inferir sobre el estado de ánimo de Rosa?`,
      options: [
        "Está tranquila y sin prisa",
        "Está impaciente porque teme perder el tren",
        "Está enojada con Luis por despertarla",
      ],
      correctAnswer: 1,
      explanation:
        "Rosa mira el reloj, insiste en irse y advierte «si no salimos ahora, perderemos el tren»: se infiere impaciencia por el tiempo. No se muestra tranquila ni hay indicios de que esté enojada con Luis.",
    },
    // ── Texto 3 — Instructivo ──────────────────────────────────────────────────
    {
      question: `${TEXTO_INSTRUCTIVO}<br><br>**8. (Tipo de texto)** ¿De qué tipo de texto se trata?`,
      options: [
        "Instructivo, porque indica pasos a seguir",
        "Argumentativo, porque defiende una opinión",
        "Descriptivo, porque retrata un lugar",
      ],
      correctAnswer: 0,
      explanation:
        "Presenta una serie de pasos numerados para lograr un resultado: es un texto instructivo. No defiende una postura (argumentativo) ni describe cómo es algo (descriptivo).",
    },
    {
      question: `${TEXTO_INSTRUCTIVO}<br><br>**9. (Propósito)** ¿Cuál es el propósito de este texto?`,
      options: [
        "Entretener con una historia",
        "Indicar cómo preparar una bebida",
        "Informar sobre la historia de la jamaica",
      ],
      correctAnswer: 1,
      explanation:
        "El texto enseña, paso a paso, a preparar agua de jamaica: su propósito es instruir (indicar cómo hacer algo). No narra una historia ni informa sobre el origen de la planta.",
    },
    {
      question: `${TEXTO_INSTRUCTIVO}<br><br>**10. (Secuencia)** Según las instrucciones, ¿qué se hace inmediatamente después de dejar reposar la mezcla?`,
      options: [
        "Hervir el agua",
        "Colar el líquido y endulzarlo",
        "Servir con hielo",
      ],
      correctAnswer: 1,
      explanation:
        "El paso 3 es «deja reposar 10 minutos» y el paso 4, que sigue, es «cuela el líquido y endúlzalo al gusto». Hervir el agua es el primer paso y servir con hielo es el último.",
    },
  ],
};
