// Presentación: El Método Científico
// Pensamiento Científico · EXANI-II — pasos del método científico y variables.
// Esquema por caso: explicación → tabla de pasos → ejercicios.

export const PRESENTACION = {
  id: "metodo-cientifico",
  titulo: "El Método Científico",
  materia: "Biología",
  subtema: "Pensamiento Científico",
  slides: [
    {
      id: 0,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "portada",
          kicker: "Pensamiento Científico · EXANI-II",
          titulo: "El Método Científico",
          subtitulo: "Observación, hipótesis, experimentación, análisis y conclusión",
        },
      ],
    },
    {
      id: 1,
      tipo: "lienzo",
      etiqueta: "Los pasos del método científico",
      titulo: "Un procedimiento ordenado para construir conocimiento",
      bloques: [
        {
          tipo: "destacado",
          texto: "El método científico es una secuencia ordenada de pasos para estudiar un fenómeno y obtener conclusiones confiables. No siempre es estrictamente lineal (se puede volver atrás), pero el EXANI-II evalúa que identifiques a qué paso corresponde una situación dada.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Pasos del método científico",
          columnas: ["Paso", "En qué consiste", "Ejemplo"],
          filas: [
            [
              "Observación",
              "Percibir y registrar un hecho con los sentidos o instrumentos",
              "Notar que las hojas de una planta se cierran al anochecer",
            ],
            [
              "Problema / pregunta",
              "Plantear la duda que se quiere resolver",
              "¿Por qué se cierran las hojas al oscurecer?",
            ],
            [
              "Hipótesis",
              "Suposición o explicación tentativa que se puede comprobar",
              "Las hojas se cierran por la falta de luz",
            ],
            [
              "Experimentación",
              "Poner a prueba la hipótesis de forma controlada",
              "Exponer plantas a distinta luz y registrar qué ocurre",
            ],
            [
              "Análisis de resultados",
              "Organizar e interpretar los datos obtenidos",
              "Comparar y graficar el comportamiento en cada condición",
            ],
            [
              "Conclusión",
              "Afirmar si la hipótesis se acepta o se rechaza, según los datos",
              "Se concluye que la luz controla el cierre de las hojas",
            ],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "hipótesis (suposición previa) ≠ conclusión (afirmación final con datos)",
          asi_es: "Hipótesis: «supongo que el fertilizante aumentará el rendimiento» (antes de probar).",
          asi_no: "Conclusión: «el fertilizante aumentó el rendimiento» (después de analizar los datos).",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "A",
          titulo: "Probar o aplicar una técnica para obtener resultados = experimentación (no observación)",
          asi_es: "Probar varias soluciones para teñir células y ver qué ocurre es experimentación.",
          asi_no: "Confundirlo con observación: observar es solo percibir el fenómeno, no manipular condiciones.",
        },
      ],
    },
    {
      id: 2,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — Método científico",
          enunciado: "Camillo Golgi probó varias soluciones, incluyendo el cromato de plata, para teñir células neuronales, y notó que se hacía visible una redecilla alrededor del núcleo. ¿A qué paso del método científico corresponde el planteamiento?",
          opciones: ["Experimentación", "Hipótesis", "Conclusión"],
          correcta: 0,
          explicacion: "Probar y aplicar una técnica de forma controlada para obtener un resultado observable es la experimentación. La hipótesis es la suposición previa; la conclusión interpreta los resultados al final.",
        },
      ],
    },
    {
      id: 3,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 2 — Método científico",
          enunciado: "Un estudiante afirma, antes de hacer cualquier prueba: «creo que las plantas regadas con agua de lluvia crecerán más que las regadas con agua de la llave». ¿A qué paso corresponde?",
          apoyo: "creo que las plantas regadas con agua de lluvia crecerán más que las regadas con agua de la llave",
          apoyoPie: "obsérvala antes de responder",
          opciones: ["Hipótesis", "Conclusión", "Observación"],
          correcta: 0,
          explicacion: "Es una suposición tentativa que aún debe comprobarse: una hipótesis. Si fuera una afirmación basada en datos ya analizados sería una conclusión.",
        },
      ],
    },
    {
      id: 4,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 3 — Método científico",
          enunciado: "Después de medir y comparar el crecimiento de los dos grupos de plantas durante un mes, el investigador escribe: «el agua de lluvia favoreció un mayor crecimiento». ¿A qué paso corresponde?",
          apoyo: "el agua de lluvia favoreció un mayor crecimiento",
          apoyoPie: "obsérvala antes de responder",
          opciones: ["Conclusión", "Hipótesis", "Experimentación"],
          correcta: 0,
          explicacion: "Es una afirmación final basada en el análisis de los datos: la conclusión. Acepta o rechaza la hipótesis según la evidencia.",
        },
      ],
    },
    {
      id: 5,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 4 — Método científico",
          enunciado: "Un biólogo registra que cierta especie de cangrejo aparece solo en las zonas más oscuras de una cueva. ¿A qué paso del método científico corresponde?",
          opciones: ["Observación", "Experimentación", "Conclusión"],
          correcta: 0,
          explicacion: "Percibir y registrar un hecho tal como ocurre, sin manipular condiciones, es la observación: el punto de partida del método científico.",
        },
      ],
    },
    {
      id: 6,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 5 — Método científico",
          enunciado: "En un experimento se cambia a propósito la cantidad de luz que recibe cada grupo de plantas para ver su efecto en el crecimiento. ¿Cómo se llama la variable que el experimentador modifica intencionalmente?",
          opciones: ["Variable independiente", "Variable dependiente", "Variable de control"],
          correcta: 0,
          explicacion: "La variable independiente es la que el investigador modifica a propósito (la luz). La dependiente es la que se mide como respuesta (el crecimiento), y las de control se mantienen constantes para no alterar el resultado.",
        },
      ],
    },
    {
      id: 7,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 6 — Método científico",
          enunciado: "Para comprobar si un fertilizante funciona, se usan dos grupos idénticos de plantas: a uno se le aplica fertilizante y al otro no. ¿Para qué sirve el grupo al que NO se le aplica?",
          opciones: [
            "Es el grupo de control, que sirve de comparación",
            "Es la hipótesis del experimento",
            "Es la conclusión del experimento",
          ],
          correcta: 0,
          explicacion: "El grupo de control no recibe el tratamiento y sirve de referencia para comparar: cualquier diferencia con el grupo experimental se atribuye al fertilizante.",
        },
      ],
    },
    {
      id: 8,
      tipo: "lienzo",
      etiqueta: "El método científico de un vistazo",
      titulo: "Resumen",
      bloques: [
        {
          tipo: "lista",
          items: [
            {
              titulo: "Observación",
              texto: "Percibir y registrar un hecho con los sentidos o instrumentos, sin manipularlo.",
            },
            {
              titulo: "Hipótesis",
              texto: "Suposición tentativa que se puede comprobar; se plantea ANTES de experimentar.",
            },
            {
              titulo: "Experimentación",
              texto: "Poner a prueba la hipótesis de forma controlada (incluye el grupo de control).",
            },
            {
              titulo: "Análisis y conclusión",
              texto: "Interpretar los datos y afirmar, con base en ellos, si la hipótesis se acepta o se rechaza.",
            },
            {
              titulo: "Variables",
              texto: "Independiente (se modifica a propósito), dependiente (se mide) y de control (se mantiene constante).",
            },
          ],
        },
      ],
    },
  ],
};
