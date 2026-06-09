// Datos de la presentación: Cinemática (Física · UNAM)
// Estructura por subtema: Teoría → Ejemplos resueltos → Reactivos tipo UNAM.
// Subtemas: Conceptos básicos · MRU · MRUA · Caída libre · Tiro parabólico → Resumen.

export const PRESENTACION = {
  id: "cinematica",
  titulo: "Cinemática",
  materia: "Física",
  subtema: "Mecánica",
  slides: [

    // ── PORTADA ───────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Cinemática",
      subtitulo: "El estudio del movimiento: MRU, MRUA, caída libre y tiro parabólico",
      etiqueta: "Física · UNAM",
      svgDiagram: "cin-portada",
    },

    // ══ SUBTEMA 1 · CONCEPTOS BÁSICOS DEL MOVIMIENTO ══════════════════════════
    {
      id: "magnitudes",
      tipo: "concepto",
      titulo: "Magnitudes del Movimiento",
      etiqueta: "El lenguaje de la cinemática",
      formula: "\\vec{d} = x_f - x_0",
      svgDiagram: "cin-desplazamiento",
      items: [
        { math: "\\text{posición}", texto: "lugar del objeto respecto a un punto de referencia" },
        { math: "\\text{distancia}", texto: "longitud total de la trayectoria recorrida (escalar)" },
        { math: "\\text{desplazamiento}", texto: "cambio neto de posición, en línea recta y con dirección (vector)" },
        { math: "\\text{trayectoria}", texto: "el camino o forma que sigue el objeto" }
      ],
      nota: "La distancia mide todo el camino; el desplazamiento solo el cambio de posición. Si das una vuelta completa y regresas al inicio, la distancia es grande pero el desplazamiento es cero."
    },

    {
      id: "velocidad",
      tipo: "concepto",
      titulo: "Velocidad y Rapidez",
      etiqueta: "Qué tan rápido y hacia dónde",
      formula: "v = \\dfrac{\\Delta x}{\\Delta t}",
      items: [
        { math: "\\text{rapidez}", texto: "magnitud escalar: distancia recorrida entre el tiempo" },
        { math: "\\text{velocidad}", texto: "magnitud vectorial: desplazamiento entre el tiempo (lleva dirección)" },
        { math: "v_{media}", texto: "promedio de todo el recorrido" },
        { math: "v_{inst}", texto: "la velocidad en un instante específico" }
      ],
      nota: "Se mide en metros por segundo (m/s). La rapidez nunca es negativa; la velocidad sí puede serlo, según el sentido del movimiento."
    },

    {
      id: "aceleracion",
      tipo: "concepto",
      titulo: "Aceleración",
      etiqueta: "El cambio de la velocidad",
      formula: "a = \\dfrac{\\Delta v}{\\Delta t} = \\dfrac{v_f - v_0}{t}",
      items: [
        { math: "a > 0", texto: "la velocidad aumenta (el objeto se acelera)" },
        { math: "a < 0", texto: "la velocidad disminuye (frena o desacelera)" },
        { math: "a = 0", texto: "la velocidad se mantiene constante" }
      ],
      nota: "Se mide en metros por segundo al cuadrado (m/s²). Es un vector: tiene dirección y sentido, igual que la velocidad."
    },

    // Ejemplos · Conceptos básicos
    {
      id: "ej-velocidad",
      tipo: "criterio_detalle",
      titulo: "Ejemplo 1 · Distancia vs. desplazamiento",
      etiqueta: "Rapidez media y velocidad media",
      enunciado: "Un automóvil recorre 300 m hacia el este en 20 s y luego 100 m hacia el oeste en 10 s. ¿Cuál es su rapidez media y cuál su velocidad media?",
      math: "v = \\dfrac{\\Delta x}{\\Delta t}",
      por_que: "La rapidez usa la distancia total (300 + 100 = 400 m) entre el tiempo total (30 s). La velocidad usa el desplazamiento neto (300 − 100 = 200 m al este) entre el mismo tiempo. Por eso salen distintas.",
      math_razon: "v_{rapidez} = \\dfrac{400}{30} \\approx 13.3\\ \\tfrac{m}{s}, \\qquad v_{media} = \\dfrac{200}{30} \\approx 6.7\\ \\tfrac{m}{s}"
    },

    {
      id: "ej-aceleracion",
      tipo: "criterio_detalle",
      titulo: "Ejemplo 2 · Aceleración",
      etiqueta: "Cuánto cambia la velocidad por segundo",
      enunciado: "Un motociclista aumenta su velocidad de 10 m/s a 28 m/s en 6 s de forma uniforme. ¿Cuál es su aceleración?",
      math: "a = \\dfrac{v_f - v_0}{t}",
      por_que: "La aceleración mide el cambio de velocidad por cada segundo. Restamos la velocidad final menos la inicial y dividimos entre el tiempo. Sale positiva porque la velocidad aumenta.",
      math_razon: "a = \\dfrac{28 - 10}{6} = \\dfrac{18}{6} = 3\\ \\tfrac{m}{s^2}"
    },

    // Reactivos · Conceptos básicos (7)
    {
      id: "cb1",
      tipo: "ejercicio",
      etiqueta: "Cinemática · Conceptos básicos · Reactivo 1 / 7",
      pregunta: "Un atleta da una vuelta completa a una pista circular de 400 m y regresa exactamente al punto de partida. ¿Cuál es su desplazamiento?",
      opciones: ["0 m", "400 m", "200 m", "800 m"],
      correcta: 0,
      explicacion: "El desplazamiento es el cambio de posición entre el inicio y el final. Si regresa al punto de partida, la posición no cambió: el desplazamiento es cero (aunque la distancia sea 400 m).",
      pasos: [
        { pre: "Posición final = inicial: ", math: "\\vec{d} = x_f - x_0 = 0" }
      ]
    },

    {
      id: "cb2",
      tipo: "ejercicio",
      etiqueta: "Cinemática · Conceptos básicos · Reactivo 2 / 7",
      pregunta: "Un auto pasa de 0 a 20 m/s en 4 s. ¿Cuál es su aceleración?",
      opciones: ["5 m/s²", "80 m/s²", "0.2 m/s²", "24 m/s²"],
      correcta: 0,
      explicacion: "a = (v_f − v_0) / t = (20 − 0) / 4 = 5 m/s².",
      pasos: [
        { pre: "Definición: ", math: "a = \\dfrac{v_f - v_0}{t} = \\dfrac{20 - 0}{4} = 5\\ \\tfrac{m}{s^2}" }
      ]
    },

    {
      id: "cb3",
      tipo: "ejercicio",
      etiqueta: "Cinemática · Conceptos básicos · Reactivo 3 / 7",
      pregunta: "¿Cuál de las siguientes es una magnitud vectorial?",
      opciones: ["La velocidad", "La rapidez", "La distancia", "El tiempo"],
      correcta: 0,
      explicacion: "La velocidad tiene magnitud y dirección, por eso es vectorial. La rapidez, la distancia y el tiempo son escalares (solo magnitud).",
      pasos: [
        { pre: "Vector = magnitud + dirección: ", math: "\\vec{v} = \\dfrac{\\vec{d}}{\\Delta t}" }
      ]
    },

    {
      id: "cb4",
      tipo: "ejercicio",
      etiqueta: "Cinemática · Conceptos básicos · Reactivo 4 / 7",
      pregunta: "La distancia recorrida por un móvil es una magnitud que:",
      opciones: ["Es escalar y nunca es negativa", "Siempre es igual al desplazamiento", "Tiene dirección y sentido", "Puede ser negativa"],
      correcta: 0,
      explicacion: "La distancia mide toda la longitud del recorrido; es un escalar (solo magnitud) y siempre es positiva. El desplazamiento, en cambio, es un vector y puede ser cero o negativo.",
      pasos: [
        { pre: "Escalar: ", math: "d \\geq 0\\ \\text{(solo magnitud)}" }
      ]
    },

    {
      id: "cb5",
      tipo: "ejercicio",
      etiqueta: "Cinemática · Conceptos básicos · Reactivo 5 / 7",
      pregunta: "Un corredor recorre 200 m en 25 s. ¿Cuál es su rapidez media?",
      opciones: ["8 m/s", "5 m/s", "0.125 m/s", "225 m/s"],
      correcta: 0,
      explicacion: "Rapidez media = distancia / tiempo = 200 / 25 = 8 m/s.",
      pasos: [
        { pre: "Rapidez media: ", math: "v = \\dfrac{d}{t} = \\dfrac{200}{25} = 8\\ \\tfrac{m}{s}" }
      ]
    },

    {
      id: "cb6",
      tipo: "ejercicio",
      etiqueta: "Cinemática · Conceptos básicos · Reactivo 6 / 7",
      pregunta: "¿En qué unidades se mide la aceleración en el Sistema Internacional?",
      opciones: ["m/s²", "m/s", "m", "s"],
      correcta: 0,
      explicacion: "La aceleración es el cambio de velocidad (m/s) por unidad de tiempo (s), así que sus unidades son m/s².",
      pasos: [
        { pre: "Definición: ", math: "a = \\dfrac{\\Delta v}{\\Delta t} \\Rightarrow \\tfrac{m/s}{s} = \\tfrac{m}{s^2}" }
      ]
    },

    {
      id: "cb7",
      tipo: "ejercicio",
      etiqueta: "Cinemática · Conceptos básicos · Reactivo 7 / 7",
      pregunta: "Un automóvil va frenando hasta detenerse. Su aceleración es:",
      opciones: ["Negativa (sentido contrario a la velocidad)", "Positiva", "Cero", "Igual a su velocidad"],
      correcta: 0,
      explicacion: "Al frenar, la velocidad disminuye, así que la aceleración apunta en sentido contrario al movimiento: se considera negativa (desaceleración).",
      pasos: [
        { pre: "v disminuye: ", math: "a = \\dfrac{v_f - v_0}{t} < 0" }
      ]
    },

    // ══ SUBTEMA 2 · MOVIMIENTO RECTILÍNEO UNIFORME (MRU) ══════════════════════
    {
      id: "mru",
      tipo: "criterio_detalle",
      titulo: "Movimiento Rectilíneo Uniforme (MRU)",
      etiqueta: "Velocidad constante, sin aceleración",
      svgDiagram: "cin-graf-xt",
      enunciado: "En el MRU el objeto se mueve en línea recta con velocidad constante: recorre distancias iguales en tiempos iguales. La aceleración es cero.",
      math: "x = x_0 + v\\,t",
      por_que: "Como la velocidad es constante, la gráfica posición-tiempo (x-t) es una recta inclinada cuya pendiente es justo la velocidad. La gráfica velocidad-tiempo (v-t) es una línea horizontal.",
      math_razon: "a = 0, \\qquad v = \\dfrac{\\Delta x}{\\Delta t} = \\text{pendiente de la recta x-t}"
    },

    // Ejemplo · MRU
    {
      id: "ej-mru",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · MRU",
      etiqueta: "Distancia con velocidad constante",
      svgDiagram: "cin-graf-xt",
      enunciado: "Un autobús viaja en línea recta a una velocidad constante de 25 m/s. ¿Qué distancia recorre en 8 s?",
      math: "x = v\\,t",
      por_que: "En el MRU la velocidad no cambia, así que la distancia es simplemente la velocidad multiplicada por el tiempo: no hay aceleración que considerar.",
      math_razon: "x = (25)(8) = 200\\ m"
    },

    // Reactivos · MRU (7)
    {
      id: "mru1",
      tipo: "ejercicio",
      svgDiagram: "cin-graf-xt",
      etiqueta: "Cinemática · MRU · Reactivo 1 / 7",
      pregunta: "La gráfica posición-tiempo (x-t) de un móvil es una línea recta inclinada con pendiente constante. ¿Qué tipo de movimiento describe?",
      opciones: ["MRU: velocidad constante", "Movimiento uniformemente acelerado", "El móvil está en reposo", "Caída libre"],
      correcta: 0,
      explicacion: "En la gráfica x-t una recta inclinada significa velocidad constante (su pendiente). Eso es MRU, sin aceleración.",
      pasos: [
        { pre: "Pendiente de x-t: ", math: "v = \\dfrac{\\Delta x}{\\Delta t} = \\text{constante}" },
        { pre: "Por tanto: ", math: "a = 0 \\Rightarrow \\text{MRU}" }
      ]
    },

    {
      id: "mru2",
      tipo: "ejercicio",
      etiqueta: "Cinemática · MRU · Reactivo 2 / 7",
      pregunta: "Un ciclista recorre 150 m en 30 s a velocidad constante. ¿Cuál es su velocidad?",
      opciones: ["5 m/s", "4.5 m/s", "180 m/s", "0.2 m/s"],
      correcta: 0,
      explicacion: "Velocidad = distancia / tiempo = 150 / 30 = 5 m/s.",
      pasos: [
        { pre: "MRU: ", math: "v = \\dfrac{\\Delta x}{\\Delta t} = \\dfrac{150}{30} = 5\\ \\tfrac{m}{s}" }
      ]
    },

    {
      id: "mru3",
      tipo: "ejercicio",
      svgDiagram: "cin-ej-dt",
      etiqueta: "Cinemática · MRU · Reactivo 3 / 7",
      pregunta: "Según la gráfica desplazamiento-tiempo mostrada, el móvil alcanza 8 m a los 5 s con movimiento uniforme. ¿Cuál es su velocidad media?",
      opciones: ["1.6 m/s", "0.625 m/s", "40 m/s", "3.2 m/s"],
      correcta: 0,
      explicacion: "La velocidad media es la pendiente de la recta: 8 m / 5 s = 1.6 m/s.",
      pasos: [
        { pre: "Pendiente: ", math: "v = \\dfrac{\\Delta x}{\\Delta t} = \\dfrac{8}{5} = 1.6\\ \\tfrac{m}{s}" }
      ]
    },

    {
      id: "mru4",
      tipo: "ejercicio",
      etiqueta: "Cinemática · MRU · Reactivo 4 / 7",
      pregunta: "Un tren viaja a 30 m/s de forma constante. ¿Cuánto tarda en recorrer 600 m?",
      opciones: ["20 s", "0.05 s", "18 000 s", "630 s"],
      correcta: 0,
      explicacion: "De x = v·t se despeja t = x / v = 600 / 30 = 20 s.",
      pasos: [
        { pre: "Despejando el tiempo: ", math: "t = \\dfrac{x}{v} = \\dfrac{600}{30} = 20\\ s" }
      ]
    },

    {
      id: "mru5",
      tipo: "ejercicio",
      etiqueta: "Cinemática · MRU · Reactivo 5 / 7",
      pregunta: "En una gráfica velocidad-tiempo, una línea horizontal (paralela al eje del tiempo) indica que el móvil tiene:",
      opciones: ["Velocidad constante", "Aceleración constante", "Aceleración variable", "Velocidad cero"],
      correcta: 0,
      explicacion: "Si la velocidad no cambia con el tiempo, la línea v-t es horizontal. Eso es MRU: velocidad constante y aceleración nula.",
      pasos: [
        { pre: "v no cambia: ", math: "a = \\dfrac{\\Delta v}{\\Delta t} = 0" }
      ]
    },

    {
      id: "mru6",
      tipo: "ejercicio",
      etiqueta: "Cinemática · MRU · Reactivo 6 / 7",
      pregunta: "Un automóvil viaja a 15 m/s constantes. ¿Qué distancia recorre en 10 s?",
      opciones: ["150 m", "1.5 m", "25 m", "300 m"],
      correcta: 0,
      explicacion: "En el MRU, x = v·t = (15)(10) = 150 m.",
      pasos: [
        { pre: "MRU: ", math: "x = v\\,t = (15)(10) = 150\\ m" }
      ]
    },

    {
      id: "mru7",
      tipo: "ejercicio",
      etiqueta: "Cinemática · MRU · Reactivo 7 / 7",
      pregunta: "En el movimiento rectilíneo uniforme (MRU), la aceleración del móvil es:",
      opciones: ["Cero", "Constante y positiva", "Igual a la velocidad", "Variable"],
      correcta: 0,
      explicacion: "Por definición, en el MRU la velocidad es constante, así que no cambia: la aceleración es cero.",
      pasos: [
        { pre: "v constante: ", math: "a = \\dfrac{\\Delta v}{\\Delta t} = 0" }
      ]
    },

    // ══ SUBTEMA 3 · MOVIMIENTO UNIFORMEMENTE ACELERADO (MRUA) ═════════════════
    {
      id: "mrua",
      tipo: "criterio_detalle",
      titulo: "Movimiento Uniformemente Acelerado (MRUA)",
      etiqueta: "Aceleración constante",
      svgDiagram: "cin-graf-vt",
      enunciado: "En el MRUA la aceleración es constante: la velocidad cambia de manera uniforme. La gráfica velocidad-tiempo es una recta inclinada y el desplazamiento es el área bajo ella.",
      math: "v = v_0 + a\\,t",
      por_que: "Con sus ecuaciones se resuelve casi cualquier problema. La pendiente de la gráfica v-t es la aceleración, y el área bajo la gráfica es el desplazamiento recorrido.",
      math_razon: "x = x_0 + v_0 t + \\tfrac{1}{2}a t^2, \\qquad v^2 = v_0^2 + 2a\\,\\Delta x"
    },

    {
      id: "ecuaciones-mrua",
      tipo: "concepto",
      titulo: "Las Ecuaciones del MRUA",
      etiqueta: "Elige según los datos que tengas",
      formula: "a = \\text{constante}",
      items: [
        { math: "v = v_0 + a t", texto: "velocidad en función del tiempo" },
        { math: "x = x_0 + v_0 t + \\tfrac12 a t^2", texto: "posición en función del tiempo" },
        { math: "v^2 = v_0^2 + 2a\\,\\Delta x", texto: "sin tiempo: útil para distancias y frenados" },
        { math: "\\Delta x = \\dfrac{v_0 + v}{2}\\,t", texto: "usa la velocidad media" }
      ],
      nota: "Truco: identifica qué dato te falta. Si no aparece el tiempo, usa la tercera ecuación; si tienes las dos velocidades, la cuarta."
    },

    // Ejemplos · MRUA
    {
      id: "ej-mrua",
      tipo: "criterio_detalle",
      titulo: "Ejemplo 1 · MRUA desde el reposo",
      etiqueta: "Distancia y velocidad final",
      enunciado: "Un coche parte del reposo y acelera a 2 m/s² durante 5 s. ¿Qué distancia recorre y qué velocidad alcanza?",
      math: "x = v_0 t + \\tfrac12 a t^2, \\qquad v = v_0 + a t",
      por_que: "Parte del reposo, así que v₀ = 0. La distancia se obtiene con la segunda ecuación y la velocidad final con la primera. Solo hay que sustituir los datos.",
      math_razon: "x = \\tfrac12(2)(5^2) = 25\\ m, \\qquad v = (2)(5) = 10\\ \\tfrac{m}{s}"
    },

    {
      id: "ej-frenado",
      tipo: "criterio_detalle",
      titulo: "Ejemplo 2 · Frenado (sin tiempo)",
      etiqueta: "La ecuación v² = v₀² + 2aΔx",
      enunciado: "Un coche viaja a 20 m/s y frena con una aceleración de −5 m/s² hasta detenerse. ¿Qué distancia recorre mientras frena?",
      math: "v^2 = v_0^2 + 2a\\,\\Delta x",
      por_que: "Como no nos dan ni piden el tiempo, usamos la ecuación que no lo incluye. Al detenerse la velocidad final es cero; despejamos la distancia.",
      math_razon: "\\Delta x = \\dfrac{-v_0^2}{2a} = \\dfrac{-(20)^2}{2(-5)} = \\dfrac{-400}{-10} = 40\\ m"
    },

    // Reactivos · MRUA (8)
    {
      id: "ua1",
      tipo: "ejercicio",
      etiqueta: "Cinemática · MRUA · Reactivo 1 / 8",
      pregunta: "Un objeto parte del reposo con aceleración constante de 3 m/s². ¿Qué distancia recorre en 4 s?",
      opciones: ["24 m", "48 m", "12 m", "6 m"],
      correcta: 0,
      explicacion: "Desde el reposo, x = ½·a·t² = ½(3)(4²) = ½(3)(16) = 24 m.",
      pasos: [
        { pre: "v₀ = 0: ", math: "x = \\tfrac12 a t^2 = \\tfrac12 (3)(16) = 24\\ m" }
      ]
    },

    {
      id: "ua2",
      tipo: "ejercicio",
      etiqueta: "Cinemática · MRUA · Reactivo 2 / 8",
      pregunta: "Un coche que va a 10 m/s frena con aceleración de −2 m/s². ¿Qué distancia recorre hasta detenerse?",
      opciones: ["25 m", "5 m", "2.5 m", "100 m"],
      correcta: 0,
      explicacion: "Como no se pide el tiempo, conviene v² = v₀² + 2a·Δx. Al detenerse v = 0: 0 = 10² + 2(−2)Δx → Δx = 100/4 = 25 m.",
      pasos: [
        { pre: "Sin tiempo: ", math: "v^2 = v_0^2 + 2a\\,\\Delta x" },
        { pre: "Con v = 0: ", math: "\\Delta x = \\dfrac{-v_0^2}{2a} = \\dfrac{-100}{-4} = 25\\ m" }
      ]
    },

    {
      id: "ua3",
      tipo: "ejercicio",
      svgDiagram: "cin-ej-vt-area",
      etiqueta: "Cinemática · MRUA · Reactivo 3 / 8",
      pregunta: "En una gráfica velocidad-tiempo, la recta sube de 0 a 10 m/s en 4 s. ¿Qué distancia recorrió el móvil?",
      opciones: ["20 m", "40 m", "2.5 m", "10 m"],
      correcta: 0,
      explicacion: "El desplazamiento es el área bajo la gráfica v-t. Aquí es un triángulo: A = ½·base·altura = ½(4)(10) = 20 m.",
      pasos: [
        { pre: "Área del triángulo: ", math: "\\Delta x = \\tfrac12 \\, b \\, h = \\tfrac12 (4)(10) = 20\\ m" }
      ]
    },

    {
      id: "ua4",
      tipo: "ejercicio",
      etiqueta: "Cinemática · MRUA · Reactivo 4 / 8",
      pregunta: "Un móvil acelera uniformemente de 4 m/s a 12 m/s. ¿Cuál es su velocidad media durante ese intervalo?",
      opciones: ["8 m/s", "16 m/s", "6 m/s", "4 m/s"],
      correcta: 0,
      explicacion: "En MRUA la velocidad media es el promedio de las velocidades inicial y final: (4 + 12)/2 = 8 m/s.",
      pasos: [
        { pre: "Promedio: ", math: "v_{media} = \\dfrac{v_0 + v}{2} = \\dfrac{4 + 12}{2} = 8\\ \\tfrac{m}{s}" }
      ]
    },

    {
      id: "ua5",
      tipo: "ejercicio",
      etiqueta: "Cinemática · MRUA · Reactivo 5 / 8",
      pregunta: "Un objeto parte del reposo con aceleración constante de 3 m/s². ¿Qué velocidad alcanza a los 5 s?",
      opciones: ["15 m/s", "8 m/s", "0.6 m/s", "75 m/s"],
      correcta: 0,
      explicacion: "v = v₀ + a·t = 0 + (3)(5) = 15 m/s.",
      pasos: [
        { pre: "v₀ = 0: ", math: "v = a\\,t = (3)(5) = 15\\ \\tfrac{m}{s}" }
      ]
    },

    {
      id: "ua6",
      tipo: "ejercicio",
      svgDiagram: "cin-graf-vt",
      etiqueta: "Cinemática · MRUA · Reactivo 6 / 8",
      pregunta: "En una gráfica velocidad-tiempo, ¿qué representa la pendiente de la recta?",
      opciones: ["La aceleración", "La distancia recorrida", "La velocidad media", "El tiempo total"],
      correcta: 0,
      explicacion: "La pendiente de la gráfica v-t es el cambio de velocidad entre el tiempo, es decir, la aceleración. El área bajo la curva es el desplazamiento.",
      pasos: [
        { pre: "Pendiente de v-t: ", math: "a = \\dfrac{\\Delta v}{\\Delta t}" }
      ]
    },

    {
      id: "ua7",
      tipo: "ejercicio",
      etiqueta: "Cinemática · MRUA · Reactivo 7 / 8",
      pregunta: "Un coche viaja a 30 m/s y frena con aceleración constante de −3 m/s². ¿Cuánto tarda en detenerse?",
      opciones: ["10 s", "90 s", "0.1 s", "27 s"],
      correcta: 0,
      explicacion: "De v = v₀ + a·t con v = 0: 0 = 30 + (−3)t → t = 30/3 = 10 s.",
      pasos: [
        { pre: "Con v = 0: ", math: "t = \\dfrac{-v_0}{a} = \\dfrac{-30}{-3} = 10\\ s" }
      ]
    },

    {
      id: "ua8",
      tipo: "ejercicio",
      etiqueta: "Cinemática · MRUA · Reactivo 8 / 8",
      pregunta: "¿Cuál de las ecuaciones del MRUA NO incluye el tiempo y es ideal para problemas de frenado?",
      opciones: ["v² = v₀² + 2aΔx", "v = v₀ + a t", "x = v₀ t + ½ a t²", "Δx = (v₀ + v)/2 · t"],
      correcta: 0,
      explicacion: "La ecuación v² = v₀² + 2aΔx relaciona velocidades, aceleración y distancia sin el tiempo, por lo que es ideal cuando este no se conoce ni se pide.",
      pasos: [
        { pre: "Sin tiempo: ", math: "v^2 = v_0^2 + 2a\\,\\Delta x" }
      ]
    },

    // ══ SUBTEMA 4 · CAÍDA LIBRE Y TIRO VERTICAL ═══════════════════════════════
    {
      id: "caida-libre",
      tipo: "criterio_detalle",
      titulo: "Caída Libre y Tiro Vertical",
      etiqueta: "MRUA con g",
      svgDiagram: "cin-caida-libre",
      enunciado: "La caída libre es un MRUA donde la única aceleración es la gravedad, g ≈ 9.8 m/s² hacia abajo. Sin aire, todos los objetos caen igual sin importar su masa.",
      math: "v = v_0 + g\\,t, \\qquad y = y_0 + v_0 t + \\tfrac12 g t^2",
      por_que: "Se usan las mismas ecuaciones del MRUA, cambiando a por g. En el punto más alto de un tiro vertical la velocidad es cero, y el tiempo de subida es igual al de bajada.",
      math_razon: "g \\approx 9.8\\ \\tfrac{m}{s^2}\\ (\\text{a veces } 10), \\qquad v_{\\text{cima}} = 0"
    },

    // Ejemplos · Caída libre
    {
      id: "ej-caida",
      tipo: "criterio_detalle",
      titulo: "Ejemplo 1 · Caída libre",
      etiqueta: "Altura desde el tiempo de caída",
      enunciado: "Se deja caer una piedra desde un edificio y tarda 3 s en llegar al suelo. ¿Desde qué altura cayó? (g = 9.8 m/s²)",
      math: "y = \\tfrac12 g t^2",
      por_que: "Como se «deja caer», la velocidad inicial es cero (v₀ = 0). Sustituyendo el tiempo en la ecuación de caída libre se obtiene la altura. La velocidad al llegar sería v = gt = 29.4 m/s.",
      math_razon: "y = \\tfrac12(9.8)(3^2) = \\tfrac12(9.8)(9) = 44.1\\ m"
    },

    {
      id: "ej-tiro-vertical",
      tipo: "criterio_detalle",
      titulo: "Ejemplo 2 · Tiro vertical",
      etiqueta: "Altura máxima y tiempo de subida",
      svgDiagram: "cin-caida-libre",
      enunciado: "Se lanza una pelota verticalmente hacia arriba con una velocidad inicial de 20 m/s. ¿Cuánto tarda en llegar a su punto más alto y qué altura alcanza? (g = 10 m/s²)",
      math: "v = v_0 - g\\,t, \\qquad y = v_0 t - \\tfrac12 g t^2",
      por_que: "En el punto más alto la velocidad es cero. Con v = 0 despejamos el tiempo de subida; con ese tiempo calculamos la altura máxima. El tiempo de bajada sería igual al de subida.",
      math_razon: "t = \\dfrac{v_0}{g} = \\dfrac{20}{10} = 2\\ s, \\qquad y = (20)(2) - \\tfrac12(10)(2^2) = 40 - 20 = 20\\ m"
    },

    // Reactivos · Caída libre (8)
    {
      id: "cl1",
      tipo: "ejercicio",
      etiqueta: "Cinemática · Caída libre · Reactivo 1 / 8",
      pregunta: "Se deja caer un objeto. ¿Qué velocidad tiene a los 2 s? (g = 9.8 m/s²)",
      opciones: ["19.6 m/s", "9.8 m/s", "4.9 m/s", "39.2 m/s"],
      correcta: 0,
      explicacion: "En caída libre v = g·t = (9.8)(2) = 19.6 m/s (parte del reposo, v₀ = 0).",
      pasos: [
        { pre: "Caída libre: ", math: "v = g\\,t = (9.8)(2) = 19.6\\ \\tfrac{m}{s}" }
      ]
    },

    {
      id: "cl2",
      tipo: "ejercicio",
      svgDiagram: "cin-caida-libre",
      etiqueta: "Cinemática · Caída libre · Reactivo 2 / 8",
      pregunta: "Despreciando la resistencia del aire, si soltamos al mismo tiempo y desde la misma altura una pluma y una piedra, ¿cuál llega primero al suelo?",
      opciones: ["Llegan al mismo tiempo", "La piedra, por ser más pesada", "La pluma, por ser más ligera", "Depende de su peso"],
      correcta: 0,
      explicacion: "En caída libre la aceleración (g) es la misma para todos los cuerpos, sin importar su masa. Sin aire, ambos caen idéntico y llegan juntos.",
      pasos: [
        { pre: "g no depende de la masa: ", math: "a = g \\approx 9.8\\ \\tfrac{m}{s^2}" }
      ]
    },

    {
      id: "cl3",
      tipo: "ejercicio",
      etiqueta: "Cinemática · Caída libre · Reactivo 3 / 8",
      pregunta: "Se lanza una pelota verticalmente hacia arriba. En su punto más alto, su velocidad es:",
      opciones: ["Cero", "Máxima", "Igual a la inicial", "9.8 m/s"],
      correcta: 0,
      explicacion: "En el punto más alto la pelota se detiene un instante antes de regresar: su velocidad es cero. La aceleración sigue siendo g hacia abajo.",
      pasos: [
        { pre: "En la cima: ", math: "v_{\\text{cima}} = 0" }
      ]
    },

    {
      id: "cl4",
      tipo: "ejercicio",
      etiqueta: "Cinemática · Caída libre · Reactivo 4 / 8",
      pregunta: "¿Desde qué altura cae un objeto que tarda 2 s en llegar al suelo, si se suelta desde el reposo? (g = 10 m/s²)",
      opciones: ["20 m", "10 m", "40 m", "5 m"],
      correcta: 0,
      explicacion: "y = ½·g·t² = ½(10)(2²) = ½(10)(4) = 20 m.",
      pasos: [
        { pre: "Caída libre: ", math: "y = \\tfrac12 g t^2 = \\tfrac12 (10)(4) = 20\\ m" }
      ]
    },

    {
      id: "cl5",
      tipo: "ejercicio",
      etiqueta: "Cinemática · Caída libre · Reactivo 5 / 8",
      pregunta: "Se deja caer un objeto desde el reposo. ¿Qué velocidad tiene a los 3 s? (g = 10 m/s²)",
      opciones: ["30 m/s", "13 m/s", "3.3 m/s", "45 m/s"],
      correcta: 0,
      explicacion: "v = g·t = (10)(3) = 30 m/s.",
      pasos: [
        { pre: "Caída libre: ", math: "v = g\\,t = (10)(3) = 30\\ \\tfrac{m}{s}" }
      ]
    },

    {
      id: "cl6",
      tipo: "ejercicio",
      etiqueta: "Cinemática · Caída libre · Reactivo 6 / 8",
      pregunta: "Un objeto se suelta desde el reposo y tarda 4 s en caer. ¿Qué altura recorrió? (g = 10 m/s²)",
      opciones: ["80 m", "40 m", "20 m", "160 m"],
      correcta: 0,
      explicacion: "y = ½·g·t² = ½(10)(4²) = ½(10)(16) = 80 m.",
      pasos: [
        { pre: "Caída libre: ", math: "y = \\tfrac12 g t^2 = \\tfrac12 (10)(16) = 80\\ m" }
      ]
    },

    {
      id: "cl7",
      tipo: "ejercicio",
      svgDiagram: "cin-caida-libre",
      etiqueta: "Cinemática · Caída libre · Reactivo 7 / 8",
      pregunta: "Se lanza una pelota hacia arriba con 20 m/s. ¿Cuánto tarda en llegar a su punto más alto? (g = 10 m/s²)",
      opciones: ["2 s", "4 s", "1 s", "20 s"],
      correcta: 0,
      explicacion: "En la cima v = 0: 0 = v₀ − g·t → t = v₀/g = 20/10 = 2 s.",
      pasos: [
        { pre: "Tiempo de subida: ", math: "t = \\dfrac{v_0}{g} = \\dfrac{20}{10} = 2\\ s" }
      ]
    },

    {
      id: "cl8",
      tipo: "ejercicio",
      etiqueta: "Cinemática · Caída libre · Reactivo 8 / 8",
      pregunta: "En la caída libre, la aceleración de un cuerpo:",
      opciones: ["Es g y no depende de su masa", "Es mayor si el cuerpo es más pesado", "Es cero", "Aumenta con el tiempo"],
      correcta: 0,
      explicacion: "Todos los cuerpos en caída libre tienen la misma aceleración, g ≈ 9.8 m/s², independientemente de su masa (despreciando el aire).",
      pasos: [
        { pre: "Independiente de la masa: ", math: "a = g \\approx 9.8\\ \\tfrac{m}{s^2}" }
      ]
    },

    // ══ SUBTEMA 5 · TIRO PARABÓLICO ═══════════════════════════════════════════
    {
      id: "tiro-parabolico",
      tipo: "criterio_detalle",
      titulo: "Tiro Parabólico",
      etiqueta: "Dos movimientos a la vez",
      svgDiagram: "cin-tiro-parabolico",
      enunciado: "Es la combinación de dos movimientos independientes: uno horizontal (MRU, velocidad constante) y uno vertical (caída libre). La trayectoria resultante es una parábola.",
      math: "x = v_{0x}\\,t, \\qquad y = v_{0y}\\,t - \\tfrac12 g t^2",
      por_que: "Los movimientos horizontal y vertical no se afectan entre sí; solo comparten el tiempo. La componente horizontal de la velocidad nunca cambia; la vertical sí cambia por la gravedad.",
      math_razon: "v_{0x} = v_0\\cos\\theta, \\qquad v_{0y} = v_0\\sin\\theta"
    },

    // Ejemplo · Tiro parabólico
    {
      id: "ej-parabolico",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Tiro horizontal",
      etiqueta: "Combinando vertical y horizontal",
      enunciado: "Una pelota sale rodando horizontalmente de una mesa de 1.25 m de altura con velocidad de 3 m/s. ¿A qué distancia de la mesa cae? (g = 10 m/s²)",
      math: "y = \\tfrac12 g t^2, \\qquad x = v_{0x}\\,t",
      por_que: "Primero se calcula el tiempo de caída con el movimiento vertical (la altura no depende de la velocidad horizontal). Con ese tiempo se halla el alcance horizontal, que es un MRU.",
      math_razon: "t = \\sqrt{\\tfrac{2y}{g}} = \\sqrt{0.25} = 0.5\\ s, \\qquad x = (3)(0.5) = 1.5\\ m"
    },

    // Reactivos · Tiro parabólico (6)
    {
      id: "tp1",
      tipo: "ejercicio",
      svgDiagram: "cin-tiro-parabolico",
      etiqueta: "Cinemática · Tiro parabólico · Reactivo 1 / 6",
      pregunta: "Una pelota se lanza horizontalmente desde 20 m de altura. ¿Cuánto tarda en caer al suelo? (g = 10 m/s²)",
      opciones: ["2 s", "4 s", "1 s", "0.5 s"],
      correcta: 0,
      explicacion: "El tiempo de caída solo depende del movimiento vertical: y = ½g·t² → 20 = ½(10)t² → t² = 4 → t = 2 s. La velocidad horizontal no influye en el tiempo.",
      pasos: [
        { pre: "Vertical: ", math: "y = \\tfrac12 g t^2 \\Rightarrow t = \\sqrt{\\dfrac{2y}{g}}" },
        { pre: "Sustituyendo: ", math: "t = \\sqrt{\\dfrac{2(20)}{10}} = \\sqrt{4} = 2\\ s" }
      ]
    },

    {
      id: "tp2",
      tipo: "ejercicio",
      etiqueta: "Cinemática · Tiro parabólico · Reactivo 2 / 6",
      pregunta: "En un tiro parabólico, despreciando la fricción del aire, la componente horizontal de la velocidad:",
      opciones: ["Permanece constante", "Aumenta con el tiempo", "Disminuye con el tiempo", "Se hace cero en la cima"],
      correcta: 0,
      explicacion: "En el eje horizontal no hay aceleración (la gravedad es vertical), así que la velocidad horizontal no cambia: es un MRU. Lo que sí cambia es la componente vertical.",
      pasos: [
        { pre: "Sin fuerza horizontal: ", math: "a_x = 0 \\Rightarrow v_x = \\text{constante}" }
      ]
    },

    {
      id: "tp3",
      tipo: "ejercicio",
      svgDiagram: "cin-tiro-parabolico",
      etiqueta: "Cinemática · Tiro parabólico · Reactivo 3 / 6",
      pregunta: "¿Qué forma tiene la trayectoria que describe un proyectil en un tiro parabólico?",
      opciones: ["Una parábola", "Una recta", "Una circunferencia", "Una espiral"],
      correcta: 0,
      explicacion: "La combinación de un movimiento horizontal uniforme y uno vertical acelerado produce una trayectoria curva con forma de parábola.",
      pasos: [
        { pre: "Combinación de movimientos: ", math: "y = v_{0y} t - \\tfrac12 g t^2" }
      ]
    },

    {
      id: "tp4",
      tipo: "ejercicio",
      etiqueta: "Cinemática · Tiro parabólico · Reactivo 4 / 6",
      pregunta: "En el tiro parabólico, el movimiento vertical del proyectil es un:",
      opciones: ["Movimiento de caída libre (acelerado por g)", "MRU sin aceleración", "Movimiento circular", "Movimiento en reposo"],
      correcta: 0,
      explicacion: "El eje vertical está sometido a la gravedad, así que se comporta como una caída libre (MRUA con a = g). El horizontal, en cambio, es MRU.",
      pasos: [
        { pre: "Vertical con g: ", math: "y = v_{0y} t - \\tfrac12 g t^2" }
      ]
    },

    {
      id: "tp5",
      tipo: "ejercicio",
      etiqueta: "Cinemática · Tiro parabólico · Reactivo 5 / 6",
      pregunta: "Una pelota se lanza horizontalmente a 4 m/s y tarda 2 s en caer. ¿Qué distancia horizontal recorre? (g = 10 m/s²)",
      opciones: ["8 m", "4 m", "20 m", "2 m"],
      correcta: 0,
      explicacion: "En el eje horizontal hay MRU: x = v₀ₓ·t = (4)(2) = 8 m.",
      pasos: [
        { pre: "Horizontal (MRU): ", math: "x = v_{0x}\\,t = (4)(2) = 8\\ m" }
      ]
    },

    {
      id: "tp6",
      tipo: "ejercicio",
      etiqueta: "Cinemática · Tiro parabólico · Reactivo 6 / 6",
      pregunta: "Los movimientos horizontal y vertical de un proyectil son independientes, pero comparten:",
      opciones: ["El tiempo", "La velocidad", "La aceleración", "La distancia"],
      correcta: 0,
      explicacion: "Aunque cada eje se analiza por separado, ambos ocurren simultáneamente: lo único que tienen en común es el tiempo de vuelo.",
      pasos: [
        { pre: "Variable común: ", math: "t_{horizontal} = t_{vertical}" }
      ]
    },

    // ── RESUMEN ───────────────────────────────────────────────────────────────
    {
      id: "resumen",
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Fórmulas clave de cinemática",
      puntos: [
        { math: "v = \\dfrac{\\Delta x}{\\Delta t}", texto: "velocidad: desplazamiento entre tiempo (vector)" },
        { math: "a = \\dfrac{\\Delta v}{\\Delta t}", texto: "aceleración: cambio de velocidad entre tiempo" },
        { math: "x = x_0 + v t", texto: "MRU: velocidad constante, a = 0" },
        { math: "v = v_0 + a t", texto: "MRUA: la velocidad cambia uniformemente" },
        { math: "x = x_0 + v_0 t + \\tfrac12 a t^2", texto: "posición en el MRUA (y en caída libre con g)" },
        { math: "v^2 = v_0^2 + 2a\\,\\Delta x", texto: "ecuación sin tiempo, ideal para frenados" },
        { titulo: "Caída libre", texto: "MRUA con a = g ≈ 9.8 m/s²; en la cima v = 0" },
        { titulo: "Tiro parabólico", texto: "horizontal (MRU) + vertical (caída libre), independientes" }
      ]
    }

  ]
};
