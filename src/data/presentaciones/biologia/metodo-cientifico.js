// Presentación: El Método Científico
// Pensamiento Científico · EXANI-II — pasos del método científico y variables.
// Esquema por caso: explicación → tabla de pasos → ejercicios.

export const PRESENTACION = {
  id: "metodo-cientifico",
  titulo: "El Método Científico",
  materia: "Ciencias",
  subtema: "Pensamiento Científico",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "El Método Científico",
      subtitulo: "Observación, hipótesis, experimentación, análisis y conclusión",
      etiqueta: "Pensamiento Científico · EXANI-II",
    },

    // ── Caso 1: ¿Qué es el método científico? ────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Los pasos del método científico",
      titulo: "Un procedimiento ordenado para construir conocimiento",
      bloques: [
        {
          tipo: "texto",
          texto: "El método científico es una secuencia ordenada de pasos para estudiar un fenómeno y obtener conclusiones confiables. No siempre es estrictamente lineal (se puede volver atrás), pero el EXANI-II evalúa que identifiques a qué paso corresponde una situación dada.",
        },
        {
          tipo: "tabla",
          titulo: "Pasos del método científico",
          columnas: ["Paso", "En qué consiste", "Ejemplo"],
          filas: [
            { tiempo: "Observación", correcto: "Percibir y registrar un hecho con los sentidos o instrumentos", error: "Notar que las hojas de una planta se cierran al anochecer" },
            { tiempo: "Problema / pregunta", correcto: "Plantear la duda que se quiere resolver", error: "¿Por qué se cierran las hojas al oscurecer?" },
            { tiempo: "Hipótesis", correcto: "Suposición o explicación tentativa que se puede comprobar", error: "Las hojas se cierran por la falta de luz" },
            { tiempo: "Experimentación", correcto: "Poner a prueba la hipótesis de forma controlada", error: "Exponer plantas a distinta luz y registrar qué ocurre" },
            { tiempo: "Análisis de resultados", correcto: "Organizar e interpretar los datos obtenidos", error: "Comparar y graficar el comportamiento en cada condición" },
            { tiempo: "Conclusión", correcto: "Afirmar si la hipótesis se acepta o se rechaza, según los datos", error: "Se concluye que la luz controla el cierre de las hojas" },
          ],
        },
        {
          tipo: "par",
          etiqueta: "hipótesis (suposición previa) ≠ conclusión (afirmación final con datos)",
          correcto: "Hipótesis: «supongo que el fertilizante aumentará el rendimiento» (antes de probar).",
          incorrecto: "Conclusión: «el fertilizante aumentó el rendimiento» (después de analizar los datos).",
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Probar o aplicar una técnica para obtener resultados = experimentación (no observación)",
          correcto: "Probar varias soluciones para teñir células y ver qué ocurre es experimentación.",
          incorrecto: "Confundirlo con observación: observar es solo percibir el fenómeno, no manipular condiciones.",
        },
      ],
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Método científico",
      pregunta: "Camillo Golgi probó varias soluciones, incluyendo el cromato de plata, para teñir células neuronales, y notó que se hacía visible una redecilla alrededor del núcleo. ¿A qué paso del método científico corresponde el planteamiento?",
      opciones: [
        "Experimentación",
        "Hipótesis",
        "Conclusión",
      ],
      correcta: 0,
      explicacion: "Probar y aplicar una técnica de forma controlada para obtener un resultado observable es la experimentación. La hipótesis es la suposición previa; la conclusión interpreta los resultados al final.",
      pasos: [],
    },
    {
      id: 3,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Método científico",
      pregunta: "Un estudiante afirma, antes de hacer cualquier prueba: «creo que las plantas regadas con agua de lluvia crecerán más que las regadas con agua de la llave». ¿A qué paso corresponde?",
      opciones: [
        "Hipótesis",
        "Conclusión",
        "Observación",
      ],
      correcta: 0,
      explicacion: "Es una suposición tentativa que aún debe comprobarse: una hipótesis. Si fuera una afirmación basada en datos ya analizados sería una conclusión.",
      pasos: [],
    },
    {
      id: 4,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Método científico",
      pregunta: "Después de medir y comparar el crecimiento de los dos grupos de plantas durante un mes, el investigador escribe: «el agua de lluvia favoreció un mayor crecimiento». ¿A qué paso corresponde?",
      opciones: [
        "Conclusión",
        "Hipótesis",
        "Experimentación",
      ],
      correcta: 0,
      explicacion: "Es una afirmación final basada en el análisis de los datos: la conclusión. Acepta o rechaza la hipótesis según la evidencia.",
      pasos: [],
    },
    {
      id: 5,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Método científico",
      pregunta: "Un biólogo registra que cierta especie de cangrejo aparece solo en las zonas más oscuras de una cueva. ¿A qué paso del método científico corresponde?",
      opciones: [
        "Observación",
        "Experimentación",
        "Conclusión",
      ],
      correcta: 0,
      explicacion: "Percibir y registrar un hecho tal como ocurre, sin manipular condiciones, es la observación: el punto de partida del método científico.",
      pasos: [],
    },
    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Método científico",
      pregunta: "En un experimento se cambia a propósito la cantidad de luz que recibe cada grupo de plantas para ver su efecto en el crecimiento. ¿Cómo se llama la variable que el experimentador modifica intencionalmente?",
      opciones: [
        "Variable independiente",
        "Variable dependiente",
        "Variable de control",
      ],
      correcta: 0,
      explicacion: "La variable independiente es la que el investigador modifica a propósito (la luz). La dependiente es la que se mide como respuesta (el crecimiento), y las de control se mantienen constantes para no alterar el resultado.",
      pasos: [],
    },
    {
      id: 7,
      tipo: "ejercicio",
      etiqueta: "Reactivo 6 — Método científico",
      pregunta: "Para comprobar si un fertilizante funciona, se usan dos grupos idénticos de plantas: a uno se le aplica fertilizante y al otro no. ¿Para qué sirve el grupo al que NO se le aplica?",
      opciones: [
        "Es el grupo de control, que sirve de comparación",
        "Es la hipótesis del experimento",
        "Es la conclusión del experimento",
      ],
      correcta: 0,
      explicacion: "El grupo de control no recibe el tratamiento y sirve de referencia para comparar: cualquier diferencia con el grupo experimental se atribuye al fertilizante.",
      pasos: [],
    },

    // ── Resumen ──────────────────────────────────────────────────────────────
    {
      id: 8,
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "El método científico de un vistazo",
      puntos: [
        { titulo: "Observación", texto: "Percibir y registrar un hecho con los sentidos o instrumentos, sin manipularlo." },
        { titulo: "Hipótesis", texto: "Suposición tentativa que se puede comprobar; se plantea ANTES de experimentar." },
        { titulo: "Experimentación", texto: "Poner a prueba la hipótesis de forma controlada (incluye el grupo de control)." },
        { titulo: "Análisis y conclusión", texto: "Interpretar los datos y afirmar, con base en ellos, si la hipótesis se acepta o se rechaza." },
        { titulo: "Variables", texto: "Independiente (se modifica a propósito), dependiente (se mide) y de control (se mantiene constante)." },
      ],
    },

  ],
};
