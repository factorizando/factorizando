// Comprensión lectora · Ámbito de estudio (EXANI-II)
// Textos: argumentativo-periodístico y ensayo académico
// Temas evaluados: identificación de información, interpretación, evaluación de la forma y el contenido

const TEXTO_A = `**Texto 1 — Artículo de opinión**<br><br>` +
  `«La lectura en pantallas ha multiplicado la cantidad de palabras que consumimos cada día, ` +
  `pero no necesariamente nuestra comprensión. Diversos estudios señalan que el desplazamiento ` +
  `continuo entre enlaces fragmenta la atención y favorece una lectura superficial, orientada a ` +
  `localizar datos más que a reflexionar sobre ellos. Esto no implica condenar la tecnología: ` +
  `significa reconocer que la lectura profunda —la que exige concentración sostenida— requiere ` +
  `condiciones distintas a las que ofrece el entorno digital. Cultivarla es hoy una decisión deliberada.»`;

const TEXTO_B = `**Texto 2 — Ensayo académico**<br><br>` +
  `«En la formación científica suele asociarse el error con el fracaso, cuando en realidad ` +
  `constituye uno de sus motores. Cada hipótesis refutada delimita el terreno de lo posible y ` +
  `orienta la siguiente pregunta. El investigador que teme equivocarse tiende a repetir lo conocido ` +
  `y a evitar el riesgo del que surge el descubrimiento. Reivindicar el error no es elogiar la ` +
  `negligencia, sino comprender que el conocimiento avanza corrigiéndose a sí mismo.»`;

export default {
  metadata: {
    id: "cl-ambito-estudio",
    titulo: "Comprensión lectora · Ámbito de estudio",
    nivel: "universidad",
    materia: "Comprensión lectora",
    tema: "Ámbito de estudio",
  },
  config: {
    timePerQuestion: 75,
  },
  bloques: [
    { id: "texto-opinion", titulo: "Texto 1 · Artículo de opinión", from: 0, to: 3, cantidad: 4, color: "#3b9eff" },
    { id: "texto-ensayo", titulo: "Texto 2 · Ensayo académico", from: 4, to: 7, cantidad: 4, color: "#a78bfa" },
  ],
  questions: [
    // ── Texto 1 ──────────────────────────────────────────────────────────────
    {
      question: `${TEXTO_A}<br><br>**1. (Identificación)** Según el texto, ¿qué han multiplicado las pantallas?`,
      options: [
        "La cantidad de palabras que consumimos cada día",
        "Nuestra capacidad de reflexión profunda",
        "El número de estudios sobre la atención",
      ],
      correctAnswer: 0,
      explanation:
        "El texto lo afirma explícitamente: «ha multiplicado la cantidad de palabras que consumimos cada día, pero no necesariamente nuestra comprensión». No habla de aumentar la reflexión (al contrario) ni de multiplicar los estudios.",
    },
    {
      question: `${TEXTO_A}<br><br>**2. (Interpretación)** ¿Cuál es la postura del autor respecto a la tecnología?`,
      options: [
        "La rechaza por ser la causa de la mala comprensión",
        "No la condena, pero advierte que la lectura profunda exige otras condiciones",
        "La considera indispensable para la lectura profunda",
      ],
      correctAnswer: 1,
      explanation:
        "El autor aclara «Esto no implica condenar la tecnología» y sostiene que la lectura profunda «requiere condiciones distintas a las que ofrece el entorno digital»: matiza, no rechaza.",
    },
    {
      question: `${TEXTO_A}<br><br>**3. (Interpretación)** ¿Qué quiere decir que cultivar la lectura profunda es hoy «una decisión deliberada»?`,
      options: [
        "Que ocurre de forma natural al usar dispositivos",
        "Que hay que proponérselo de manera consciente y activa",
        "Que solo es posible para los investigadores",
      ],
      correctAnswer: 1,
      explanation:
        "«Deliberada» significa intencional, hecha a propósito: frente a un entorno que favorece la lectura superficial, leer en profundidad requiere una elección consciente. No es algo automático ni exclusivo de especialistas.",
    },
    {
      question: `${TEXTO_A}<br><br>**4. (Evaluación de forma y contenido)** ¿Qué función cumple la frase «Esto no implica condenar la tecnología»?`,
      options: [
        "Introduce un tema nuevo sin relación con lo anterior",
        "Matiza la crítica para evitar una interpretación extrema",
        "Contradice la idea principal del texto",
      ],
      correctAnswer: 1,
      explanation:
        "La frase es una concesión que matiza: anticipa una posible lectura extrema (que el autor está «en contra» de la tecnología) y la descarta, precisando el alcance real del argumento.",
    },
    // ── Texto 2 ──────────────────────────────────────────────────────────────
    {
      question: `${TEXTO_B}<br><br>**5. (Identificación)** Según el texto, ¿con qué suele asociarse el error en la formación científica?`,
      options: [
        "Con el descubrimiento",
        "Con el fracaso",
        "Con la negligencia",
      ],
      correctAnswer: 1,
      explanation:
        "El texto dice: «suele asociarse el error con el fracaso». Esa es justamente la idea que el autor busca rebatir a lo largo del fragmento.",
    },
    {
      question: `${TEXTO_B}<br><br>**6. (Interpretación)** ¿Cuál es la tesis central del ensayo?`,
      options: [
        "El error es un motor del avance del conocimiento científico",
        "Los investigadores deberían evitar todo riesgo",
        "La ciencia debe eliminar por completo los errores",
      ],
      correctAnswer: 0,
      explanation:
        "El autor defiende que el error «constituye uno de sus motores» y que «el conocimiento avanza corrigiéndose a sí mismo». Las otras opciones contradicen la postura del texto.",
    },
    {
      question: `${TEXTO_B}<br><br>**7. (Interpretación)** Con «reivindicar el error no es elogiar la negligencia», el autor busca aclarar que…`,
      options: [
        "valorar el error equivale a justificar el descuido",
        "valorar el error no significa aprobar el trabajo descuidado",
        "la negligencia es necesaria para descubrir",
      ],
      correctAnswer: 1,
      explanation:
        "Es una distinción para evitar un malentendido: defender el papel del error en la ciencia no implica avalar la negligencia. El autor separa el error productivo del simple descuido.",
    },
    {
      question: `${TEXTO_B}<br><br>**8. (Evaluación de forma y contenido)** ¿Qué tipo de texto es y por qué?`,
      options: [
        "Una noticia, porque informa hechos recientes con objetividad",
        "Un ensayo académico, porque defiende una tesis con argumentos",
        "Una reseña, porque valora una obra concreta",
      ],
      correctAnswer: 1,
      explanation:
        "El texto sostiene una postura propia (la tesis sobre el error) y la apoya con razones: rasgos del ensayo académico. No informa hechos (noticia) ni comenta una obra (reseña).",
    },
  ],
};
