// Comprensión lectora · Ámbito literario (EXANI-II)
// Textos: cuento (microrrelato) y poema — originales
// Temas evaluados: identificación de información, interpretación, evaluación de la forma y el contenido

const CUENTO = `**Texto 1 — Cuento (microrrelato)**<br><br>` +
  `«La abuela guardaba en una caja de hojalata todos los botones que sobraban de la ropa de la ` +
  `familia. Decía que cada botón era el recuerdo de una prenda, y cada prenda, el de un día. ` +
  `Cuando murió, encontramos la caja casi llena. Nadie supo a qué pertenecía cada botón, pero ` +
  `ninguno se atrevió a tirarlos: habríamos estado tirando los días de alguien.»`;

const POEMA = `**Texto 2 — Poema**<br><br>` +
  `«El río no recuerda su montaña,<br>` +
  `ni la espuma la roca que la alzó;<br>` +
  `solo el hombre, que vuelve la mirada,<br>` +
  `carga el peso de todo lo vivido.»`;

export default {
  metadata: {
    id: "cl-ambito-literario",
    titulo: "Comprensión lectora · Ámbito literario",
    nivel: "universidad",
    materia: "Comprensión lectora",
    tema: "Ámbito literario",
  },
  config: {
    timePerQuestion: 75,
  },
  bloques: [
    { id: "cuento", titulo: "Texto 1 · Cuento", from: 0, to: 3, cantidad: 4, color: "#f472b6" },
    { id: "poema", titulo: "Texto 2 · Poema", from: 4, to: 7, cantidad: 4, color: "#a78bfa" },
  ],
  questions: [
    // ── Cuento ───────────────────────────────────────────────────────────────
    {
      question: `${CUENTO}<br><br>**1. (Identificación)** ¿Qué guardaba la abuela en la caja de hojalata?`,
      options: [
        "Cartas de la familia",
        "Botones que sobraban de la ropa",
        "Fotografías de cada día",
      ],
      correctAnswer: 1,
      explanation:
        "El relato lo dice de forma explícita: «guardaba en una caja de hojalata todos los botones que sobraban de la ropa de la familia».",
    },
    {
      question: `${CUENTO}<br><br>**2. (Interpretación)** ¿Qué simbolizan los botones en el relato?`,
      options: [
        "El valor económico de la ropa",
        "Los recuerdos y los días vividos por la familia",
        "El desorden de la casa de la abuela",
      ],
      correctAnswer: 1,
      explanation:
        "La propia abuela establece la equivalencia: «cada botón era el recuerdo de una prenda, y cada prenda, el de un día». Los botones representan la memoria del tiempo vivido.",
    },
    {
      question: `${CUENTO}<br><br>**3. (Interpretación)** ¿Por qué nadie se atrevió a tirar los botones?`,
      options: [
        "Porque pensaban venderlos después",
        "Porque sentían que tiraban los recuerdos y los días de la abuela",
        "Porque no sabían abrir la caja de hojalata",
      ],
      correctAnswer: 1,
      explanation:
        "El cierre lo explica: «habríamos estado tirando los días de alguien». Desechar los botones equivalía, en sentido figurado, a desechar la vida y la memoria de la abuela.",
    },
    {
      question: `${CUENTO}<br><br>**4. (Evaluación de forma y contenido)** La frase final «habríamos estado tirando los días de alguien» logra su efecto porque…`,
      options: [
        "equipara los botones con los días vividos, dándoles un valor emotivo",
        "describe con datos precisos el contenido de la caja",
        "presenta una opinión objetiva sobre el ahorro",
      ],
      correctAnswer: 0,
      explanation:
        "El final condensa el sentido del relato mediante una identificación figurada (botones = días = vida), lo que produce el cierre emotivo característico del microrrelato.",
    },
    // ── Poema ────────────────────────────────────────────────────────────────
    {
      question: `${POEMA}<br><br>**5. (Identificación)** Según el poema, ¿quién «carga el peso de todo lo vivido»?`,
      options: [
        "El río",
        "La espuma",
        "El hombre",
      ],
      correctAnswer: 2,
      explanation:
        "El verso lo señala con claridad: «solo el hombre, que vuelve la mirada, / carga el peso de todo lo vivido». El río y la espuma se presentan, en cambio, como seres que no recuerdan.",
    },
    {
      question: `${POEMA}<br><br>**6. (Interpretación)** ¿Cuál es el mensaje central del poema?`,
      options: [
        "La naturaleza es más fuerte que el ser humano",
        "Solo el ser humano vive atado al recuerdo del pasado",
        "El paso del tiempo destruye los ríos y las rocas",
      ],
      correctAnswer: 1,
      explanation:
        "El poema contrasta la naturaleza (que «no recuerda») con el hombre, único que «vuelve la mirada» y carga su pasado: la memoria es lo propiamente humano.",
    },
    {
      question: `${POEMA}<br><br>**7. (Evaluación de forma y contenido)** Atribuir al río la capacidad de «recordar» es un ejemplo de…`,
      options: [
        "personificación (dar rasgos humanos a algo no humano)",
        "hipérbole (exageración)",
        "comparación explícita con «como»",
      ],
      correctAnswer: 0,
      explanation:
        "Recordar es una facultad humana; atribuirla al río (y a la espuma) es una personificación o prosopopeya. No hay exageración (hipérbole) ni un nexo comparativo «como».",
    },
    {
      question: `${POEMA}<br><br>**8. (Evaluación de forma y contenido)** La expresión «carga el peso de todo lo vivido» representa la memoria como algo pesado mediante una…`,
      options: [
        "metáfora",
        "rima consonante",
        "pregunta retórica",
      ],
      correctAnswer: 0,
      explanation:
        "Se identifica la memoria con un peso físico sin usar nexo comparativo: es una metáfora. La rima y la pregunta retórica son otros recursos que aquí no operan en esa frase.",
    },
  ],
};
