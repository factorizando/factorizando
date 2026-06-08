// Presentación: Funciones cuadráticas y ecuaciones de segundo grado
// Pensamiento Matemático · Matematización · EXANI-II

export const PRESENTACION = {
  id: "funciones-cuadraticas",
  titulo: "Funciones Cuadráticas",
  materia: "Pensamiento Matemático",
  subtema: "Matematización",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Funciones Cuadráticas",
      subtitulo: "La parábola y = ax² + bx + c: concavidad, vértice, raíces y comportamiento gráfico",
      etiqueta: "Pensamiento Matemático · EXANI-II"
    },

    // ── La función cuadrática ──────────────────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Bloque 1 · La parábola",
      titulo: "La función cuadrática y su gráfica",
      bloques: [
        {
          tipo: "texto",
          texto: "Una función cuadrática tiene la forma y = ax² + bx + c, con a ≠ 0. Su gráfica es una parábola. El coeficiente a determina la concavidad: si a > 0 la parábola abre hacia arriba (tiene un punto mínimo); si a < 0 abre hacia abajo (tiene un punto máximo). El término independiente c indica dónde corta la parábola al eje y, en el punto (0, c). Cuanto mayor es |a|, más cerrada (angosta) es la parábola."
        },
        {
          tipo: "tabla",
          titulo: "Lo que dice cada coeficiente",
          columnas: ["Coeficiente", "Qué controla", "Efecto"],
          filas: [
            { tiempo: "a > 0", correcto: "Concavidad hacia arriba", error: "Parábola con punto MÍNIMO (forma de U)" },
            { tiempo: "a < 0", correcto: "Concavidad hacia abajo",  error: "Parábola con punto MÁXIMO (forma de ∩)" },
            { tiempo: "|a|",   correcto: "Abertura",                error: "Mayor |a| → más cerrada" },
            { tiempo: "c",     correcto: "Corte con el eje y",      error: "La parábola pasa por (0, c)" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el signo de a decide si hay máximo o mínimo",
          correcto: "y = 2x² − 3x + 1: a = 2 > 0 → abre hacia arriba, tiene mínimo",
          incorrecto: "Decir que y = −x² + 4 tiene un mínimo → a < 0, en realidad tiene un MÁXIMO"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Si a = 0 ya no es cuadrática: sin el término x² la gráfica es una recta, no una parábola",
          correcto: "y = 3x² + 2 es cuadrática (hay x²)",
          incorrecto: "Tratar y = 2x + 1 como cuadrática → es lineal (a = 0)"
        }
      ]
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Concavidad",
      pregunta: "La función y = −3x² + 6x − 1, ¿cómo se comporta su gráfica?",
      opciones: [
        "Abre hacia arriba y tiene un mínimo",
        "Abre hacia abajo y tiene un máximo",
        "Es una recta con pendiente negativa"
      ],
      correcta: 1,
      explicacion: "El coeficiente a = −3 es negativo, así que la parábola abre hacia abajo y su vértice es un punto máximo. No es una recta porque sí tiene término x².",
      pasos: []
    },

    // ── Vértice y eje de simetría ──────────────────────────────────────────────
    {
      id: 3,
      tipo: "regla_rica",
      etiqueta: "Bloque 2 · Vértice",
      titulo: "Vértice y eje de simetría",
      bloques: [
        {
          tipo: "texto",
          texto: "El vértice es el punto más alto (máximo) o más bajo (mínimo) de la parábola. Su coordenada x se calcula con la fórmula x = −b/(2a); sustituyendo ese valor en la función se obtiene la coordenada y. La parábola es simétrica respecto a la recta vertical que pasa por el vértice, llamada eje de simetría, cuya ecuación es x = −b/(2a). Esa simetría implica que dos puntos a igual distancia del eje tienen la misma altura."
        },
        {
          tipo: "tabla",
          titulo: "Cómo hallar el vértice",
          columnas: ["Elemento", "Fórmula", "Ejemplo en y = x² − 4x + 3"],
          filas: [
            { tiempo: "x del vértice", correcto: "x = −b/(2a)",        error: "x = −(−4)/(2·1) = 2" },
            { tiempo: "y del vértice", correcto: "Sustituir x en y",   error: "y = (2)² − 4(2) + 3 = −1" },
            { tiempo: "Vértice",       correcto: "(−b/2a, y)",          error: "(2, −1) → es un mínimo (a > 0)" },
            { tiempo: "Eje de simetría", correcto: "x = −b/(2a)",       error: "x = 2 (recta vertical)" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el eje de simetría pasa por el vértice",
          correcto: "y = x² − 4x + 3 → eje x = 2; los puntos x=1 y x=3 dan la misma y",
          incorrecto: "Buscar el vértice en x = b/(2a) → falta el signo menos: es x = −b/(2a)"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "Cuidado con el signo de b en la fórmula: x = −b/(2a) usa b CON su signo",
          correcto: "En y = x² − 4x + 3, b = −4 → x = −(−4)/2 = 2",
          incorrecto: "Usar b = 4 (ignorando el menos) → daría x = −2, incorrecto"
        }
      ]
    },
    {
      id: 4,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Vértice",
      pregunta: "¿Cuál es el vértice de la parábola y = x² − 6x + 5?",
      opciones: ["(3, −4)", "(−3, 32)", "(6, 5)"],
      correcta: 0,
      explicacion: "x = −b/(2a) = −(−6)/(2·1) = 3. Sustituyendo: y = 3² − 6(3) + 5 = 9 − 18 + 5 = −4. El vértice es (3, −4), y como a > 0 es un mínimo.",
      pasos: []
    },

    // ── Raíces por factorización ───────────────────────────────────────────────
    {
      id: 5,
      tipo: "regla_rica",
      etiqueta: "Bloque 3 · Raíces",
      titulo: "Raíces: cortes con el eje x",
      bloques: [
        {
          tipo: "texto",
          texto: "Las raíces (o ceros) de la función son los valores de x donde la parábola corta el eje x; es decir, las soluciones de ax² + bx + c = 0. Cuando el trinomio se factoriza fácilmente, se iguala cada factor a cero. Por ejemplo, x² − 5x + 6 = 0 se factoriza como (x − 2)(x − 3) = 0, de donde x = 2 o x = 3. Una parábola puede cortar el eje x en dos puntos, en uno (vértice sobre el eje) o en ninguno."
        },
        {
          tipo: "tabla",
          titulo: "Resolver por factorización",
          columnas: ["Paso", "Acción", "Ejemplo"],
          filas: [
            { tiempo: "1. Igualar a 0", correcto: "ax² + bx + c = 0",    error: "x² − 5x + 6 = 0" },
            { tiempo: "2. Factorizar",  correcto: "Dos números: suman b, multiplican c", error: "(x − 2)(x − 3) = 0" },
            { tiempo: "3. Cada factor = 0", correcto: "Igualar y despejar", error: "x − 2 = 0 → x = 2 ;  x − 3 = 0 → x = 3" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "producto cero: si A·B = 0, entonces A = 0 o B = 0",
          correcto: "(x − 2)(x − 3) = 0 → x = 2 o x = 3",
          incorrecto: "(x − 2)(x − 3) = 0 → x = 2 y al mismo tiempo 3 como un solo valor → son DOS soluciones"
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "Las raíces son los cortes con el eje x (y = 0), no con el eje y; el corte con el eje y es c",
          correcto: "x² − 5x + 6: raíces en x = 2 y x = 3; corte con eje y en (0, 6)",
          incorrecto: "Confundir la raíz con el valor c (corte en y)"
        }
      ]
    },
    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Raíces por factorización",
      pregunta: "¿Cuáles son las raíces de x² + 2x − 8 = 0?",
      opciones: ["x = 2 y x = −4", "x = −2 y x = 4", "x = 1 y x = −8"],
      correcta: 0,
      explicacion: "Se buscan dos números que multipliquen −8 y sumen +2: son +4 y −2. Factorizando: (x − 2)(x + 4) = 0, de donde x = 2 o x = −4.",
      pasos: []
    },

    // ── Fórmula general y discriminante ────────────────────────────────────────
    {
      id: 7,
      tipo: "regla_rica",
      etiqueta: "Bloque 4 · Fórmula general",
      titulo: "Fórmula general y discriminante",
      bloques: [
        {
          tipo: "texto",
          texto: "Cuando el trinomio no se factoriza con facilidad, se usa la fórmula general: x = (−b ± √(b² − 4ac)) / (2a). La cantidad bajo la raíz, Δ = b² − 4ac, se llama discriminante y revela cuántas raíces reales hay sin resolver del todo: si Δ > 0 hay dos raíces reales distintas (la parábola corta el eje x en dos puntos); si Δ = 0 hay una raíz doble (la parábola toca el eje en el vértice); si Δ < 0 no hay raíces reales (la parábola no toca el eje x)."
        },
        {
          tipo: "tabla",
          titulo: "El discriminante Δ = b² − 4ac",
          columnas: ["Discriminante", "Raíces reales", "Gráfica"],
          filas: [
            { tiempo: "Δ > 0", correcto: "Dos distintas",     error: "Corta el eje x en 2 puntos" },
            { tiempo: "Δ = 0", correcto: "Una (doble)",       error: "Toca el eje x en el vértice" },
            { tiempo: "Δ < 0", correcto: "Ninguna real",      error: "No toca el eje x" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el discriminante anticipa el número de raíces",
          correcto: "x² − 4x + 4: Δ = (−4)² − 4(1)(4) = 16 − 16 = 0 → una raíz doble (x = 2)",
          incorrecto: "Concluir «dos raíces» cuando Δ = 0 → es una sola raíz (doble)"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "En la fórmula general, todo el −b va sobre el mismo cociente 2a, y la raíz cubre b² − 4ac completo",
          correcto: "x = (−b ± √(b²−4ac)) / (2a) — el 2a divide a TODO el numerador",
          incorrecto: "Dividir solo la raíz entre 2a y dejar −b aparte → error de fórmula"
        }
      ]
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Discriminante",
      pregunta: "¿Cuántas raíces reales tiene 2x² + 3x + 5 = 0?",
      opciones: [
        "Dos raíces reales distintas",
        "Ninguna raíz real",
        "Una raíz doble"
      ],
      correcta: 1,
      explicacion: "Δ = b² − 4ac = 3² − 4(2)(5) = 9 − 40 = −31. Como Δ < 0, la ecuación no tiene raíces reales: la parábola no corta el eje x.",
      pasos: []
    },
    {
      id: 9,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Fórmula general",
      pregunta: "Resuelve con la fórmula general: x² − 2x − 3 = 0",
      opciones: ["x = 3 y x = −1", "x = 1 y x = −3", "x = 2 y x = −3"],
      correcta: 0,
      explicacion: "Con a=1, b=−2, c=−3: Δ = (−2)² − 4(1)(−3) = 4 + 12 = 16, √16 = 4. x = (2 ± 4)/2 → x = 6/2 = 3 o x = −2/2 = −1.",
      pasos: []
    },

    // ── Cierre ────────────────────────────────────────────────────────────────
    {
      id: 10,
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Lo esencial de las cuadráticas",
      puntos: [
        { math: "y = ax^2 + bx + c", texto: "parábola; a > 0 abre arriba (mín), a < 0 abre abajo (máx)" },
        { math: "x_v = \\dfrac{-b}{2a}", texto: "x del vértice y eje de simetría" },
        { titulo: "Raíces", texto: "cortes con el eje x; resolver ax² + bx + c = 0" },
        { math: "x=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}", texto: "fórmula general" },
        { math: "\\Delta = b^2 - 4ac", texto: "Δ>0: dos raíces; Δ=0: una; Δ<0: ninguna real" },
        { titulo: "Corte con eje y", texto: "la parábola pasa por (0, c)" }
      ]
    }

  ]
};
