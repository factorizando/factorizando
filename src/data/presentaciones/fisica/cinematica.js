// Datos de la presentación: Cinemática (Física · UNAM)
// Estructura por subtema: Teoría → Ejemplos resueltos → Reactivos tipo UNAM.
// Subtemas: Conceptos básicos · MRU · MRUA · Caída libre · Tiro parabólico → Resumen.

export const PRESENTACION = {
  id: "cinematica",
  titulo: "Cinemática",
  materia: "Física",
  subtema: "Mecánica",
  slides: [
    {
      id: 0,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "portada",
          kicker: "Física · UNAM",
          titulo: "Cinemática",
          subtitulo: "El estudio del movimiento: MRU, MRUA, caída libre y tiro parabólico",
          figura: "cin-portada",
        },
      ],
    },
    {
      id: "magnitudes",
      tipo: "lienzo",
      etiqueta: "El lenguaje de la cinemática",
      titulo: "Magnitudes del Movimiento",
      bloques: [
        {
          tipo: "formula",
          math: "\\vec{d} = x_f - x_0",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "cin-desplazamiento",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\text{posición}",
              texto: "lugar del objeto respecto a un punto de referencia",
            },
            {
              math: "\\text{distancia}",
              texto: "longitud total de la trayectoria recorrida (escalar)",
            },
            {
              math: "\\text{desplazamiento}",
              texto: "cambio neto de posición, en línea recta y con dirección (vector)",
            },
            {
              math: "\\text{trayectoria}",
              texto: "el camino o forma que sigue el objeto",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "La distancia mide todo el camino; el desplazamiento solo el cambio de posición. Si das una vuelta completa y regresas al inicio, la distancia es grande pero el desplazamiento es cero.",
        },
      ],
    },
    {
      id: "velocidad",
      tipo: "lienzo",
      etiqueta: "Qué tan rápido y hacia dónde",
      titulo: "Velocidad y Rapidez",
      bloques: [
        {
          tipo: "formula",
          math: "v = \\dfrac{\\Delta x}{\\Delta t}",
        },
        {
          tipo: "lista",
          items: [
            {
              math: "\\text{rapidez}",
              texto: "magnitud escalar: distancia recorrida entre el tiempo",
            },
            {
              math: "\\text{velocidad}",
              texto: "magnitud vectorial: desplazamiento entre el tiempo (lleva dirección)",
            },
            {
              math: "v_{media}",
              texto: "promedio de todo el recorrido",
            },
            {
              math: "v_{inst}",
              texto: "la velocidad en un instante específico",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Se mide en metros por segundo (m/s). La rapidez nunca es negativa; la velocidad sí puede serlo, según el sentido del movimiento.",
        },
      ],
    },
    {
      id: "aceleracion",
      tipo: "lienzo",
      etiqueta: "El cambio de la velocidad",
      titulo: "Aceleración",
      bloques: [
        {
          tipo: "formula",
          math: "a = \\dfrac{\\Delta v}{\\Delta t} = \\dfrac{v_f - v_0}{t}",
        },
        {
          tipo: "lista",
          items: [
            {
              math: "a > 0",
              texto: "la velocidad aumenta (el objeto se acelera)",
            },
            {
              math: "a < 0",
              texto: "la velocidad disminuye (frena o desacelera)",
            },
            {
              math: "a = 0",
              texto: "la velocidad se mantiene constante",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Se mide en metros por segundo al cuadrado (m/s²). Es un vector: tiene dirección y sentido, igual que la velocidad.",
        },
      ],
    },
    {
      id: "ej-velocidad",
      tipo: "lienzo",
      etiqueta: "Rapidez media y velocidad media",
      titulo: "Ejemplo 1 · Distancia vs. desplazamiento",
      bloques: [
        {
          tipo: "destacado",
          texto: "Un automóvil recorre 300 m hacia el este en 20 s y luego 100 m hacia el oeste en 10 s. ¿Cuál es su rapidez media y cuál su velocidad media?",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "v = \\dfrac{\\Delta x}{\\Delta t}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "La rapidez usa la distancia total (300 + 100 = 400 m) entre el tiempo total (30 s). La velocidad usa el desplazamiento neto (300 − 100 = 200 m al este) entre el mismo tiempo. Por eso salen distintas.",
        },
        {
          tipo: "formula",
          math: "v_{rapidez} = \\dfrac{400}{30} \\approx 13.3\\ \\tfrac{m}{s}, \\qquad v_{media} = \\dfrac{200}{30} \\approx 6.7\\ \\tfrac{m}{s}",
        },
      ],
    },
    {
      id: "ej-aceleracion",
      tipo: "lienzo",
      etiqueta: "Cuánto cambia la velocidad por segundo",
      titulo: "Ejemplo 2 · Aceleración",
      bloques: [
        {
          tipo: "destacado",
          texto: "Un motociclista aumenta su velocidad de 10 m/s a 28 m/s en 6 s de forma uniforme. ¿Cuál es su aceleración?",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "a = \\dfrac{v_f - v_0}{t}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "La aceleración mide el cambio de velocidad por cada segundo. Restamos la velocidad final menos la inicial y dividimos entre el tiempo. Sale positiva porque la velocidad aumenta.",
        },
        {
          tipo: "formula",
          math: "a = \\dfrac{28 - 10}{6} = \\dfrac{18}{6} = 3\\ \\tfrac{m}{s^2}",
        },
      ],
    },
    {
      id: "cb1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Cinemática · Conceptos básicos · Reactivo 1 / 7",
          enunciado: "Un atleta da una vuelta completa a una pista circular de 400 m y regresa exactamente al punto de partida. ¿Cuál es su desplazamiento?",
          opciones: ["0 m", "400 m", "200 m", "800 m"],
          correcta: 0,
          explicacion: "El desplazamiento es el cambio de posición entre el inicio y el final. Si regresa al punto de partida, la posición no cambió: el desplazamiento es cero (aunque la distancia sea 400 m).",
        },
      ],
    },
    {
      id: "cb2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Cinemática · Conceptos básicos · Reactivo 2 / 7",
          enunciado: "Un auto pasa de 0 a 20 m/s en 4 s. ¿Cuál es su aceleración?",
          opciones: ["5 m/s²", "80 m/s²", "0.2 m/s²", "24 m/s²"],
          correcta: 0,
          explicacion: "a = (v_f − v_0) / t = (20 − 0) / 4 = 5 m/s².",
        },
      ],
    },
    {
      id: "cb3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Cinemática · Conceptos básicos · Reactivo 3 / 7",
          enunciado: "¿Cuál de las siguientes es una magnitud vectorial?",
          opciones: ["La velocidad", "La rapidez", "La distancia", "El tiempo"],
          correcta: 0,
          explicacion: "La velocidad tiene magnitud y dirección, por eso es vectorial. La rapidez, la distancia y el tiempo son escalares (solo magnitud).",
        },
      ],
    },
    {
      id: "cb4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Cinemática · Conceptos básicos · Reactivo 4 / 7",
          enunciado: "La distancia recorrida por un móvil es una magnitud que:",
          opciones: [
            "Es escalar y nunca es negativa",
            "Siempre es igual al desplazamiento",
            "Tiene dirección y sentido",
            "Puede ser negativa",
          ],
          correcta: 0,
          explicacion: "La distancia mide toda la longitud del recorrido; es un escalar (solo magnitud) y siempre es positiva. El desplazamiento, en cambio, es un vector y puede ser cero o negativo.",
        },
      ],
    },
    {
      id: "cb5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Cinemática · Conceptos básicos · Reactivo 5 / 7",
          enunciado: "Un corredor recorre 200 m en 25 s. ¿Cuál es su rapidez media?",
          opciones: ["8 m/s", "5 m/s", "0.125 m/s", "225 m/s"],
          correcta: 0,
          explicacion: "Rapidez media = distancia / tiempo = 200 / 25 = 8 m/s.",
        },
      ],
    },
    {
      id: "cb6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Cinemática · Conceptos básicos · Reactivo 6 / 7",
          enunciado: "¿En qué unidades se mide la aceleración en el Sistema Internacional?",
          opciones: ["m/s²", "m/s", "m", "s"],
          correcta: 0,
          explicacion: "La aceleración es el cambio de velocidad (m/s) por unidad de tiempo (s), así que sus unidades son m/s².",
        },
      ],
    },
    {
      id: "cb7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Cinemática · Conceptos básicos · Reactivo 7 / 7",
          enunciado: "Un automóvil va frenando hasta detenerse. Su aceleración es:",
          opciones: ["Negativa (sentido contrario a la velocidad)", "Positiva", "Cero", "Igual a su velocidad"],
          correcta: 0,
          explicacion: "Al frenar, la velocidad disminuye, así que la aceleración apunta en sentido contrario al movimiento: se considera negativa (desaceleración).",
        },
      ],
    },
    {
      id: "mru",
      tipo: "lienzo",
      etiqueta: "Velocidad constante, sin aceleración",
      titulo: "Movimiento Rectilíneo Uniforme (MRU)",
      bloques: [
        {
          tipo: "destacado",
          texto: "En el MRU el objeto se mueve en línea recta con velocidad constante: recorre distancias iguales en tiempos iguales. La aceleración es cero.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "cin-graf-xt",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "x = x_0 + v\\,t",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Como la velocidad es constante, la gráfica posición-tiempo (x-t) es una recta inclinada cuya pendiente es justo la velocidad. La gráfica velocidad-tiempo (v-t) es una línea horizontal.",
        },
        {
          tipo: "formula",
          math: "a = 0, \\qquad v = \\dfrac{\\Delta x}{\\Delta t} = \\text{pendiente de la recta x-t}",
        },
      ],
    },
    {
      id: "ej-mru",
      tipo: "lienzo",
      etiqueta: "Distancia con velocidad constante",
      titulo: "Ejemplo · MRU",
      bloques: [
        {
          tipo: "destacado",
          texto: "Un autobús viaja en línea recta a una velocidad constante de 25 m/s. ¿Qué distancia recorre en 8 s?",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "cin-graf-xt",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "x = v\\,t",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "En el MRU la velocidad no cambia, así que la distancia es simplemente la velocidad multiplicada por el tiempo: no hay aceleración que considerar.",
        },
        {
          tipo: "formula",
          math: "x = (25)(8) = 200\\ m",
        },
      ],
    },
    {
      id: "mru1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Cinemática · MRU · Reactivo 1 / 7",
          enunciado: "La gráfica posición-tiempo (x-t) de un móvil es una línea recta inclinada con pendiente constante. ¿Qué tipo de movimiento describe?",
          opciones: [
            "MRU: velocidad constante",
            "Movimiento uniformemente acelerado",
            "El móvil está en reposo",
            "Caída libre",
          ],
          correcta: 0,
          explicacion: "En la gráfica x-t una recta inclinada significa velocidad constante (su pendiente). Eso es MRU, sin aceleración.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "cin-graf-xt",
        },
      ],
    },
    {
      id: "mru2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Cinemática · MRU · Reactivo 2 / 7",
          enunciado: "Un ciclista recorre 150 m en 30 s a velocidad constante. ¿Cuál es su velocidad?",
          opciones: ["5 m/s", "4.5 m/s", "180 m/s", "0.2 m/s"],
          correcta: 0,
          explicacion: "Velocidad = distancia / tiempo = 150 / 30 = 5 m/s.",
        },
      ],
    },
    {
      id: "mru3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Cinemática · MRU · Reactivo 3 / 7",
          enunciado: "Según la gráfica desplazamiento-tiempo mostrada, el móvil alcanza 8 m a los 5 s con movimiento uniforme. ¿Cuál es su velocidad media?",
          opciones: ["1.6 m/s", "0.625 m/s", "40 m/s", "3.2 m/s"],
          correcta: 0,
          explicacion: "La velocidad media es la pendiente de la recta: 8 m / 5 s = 1.6 m/s.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "cin-ej-dt",
        },
      ],
    },
    {
      id: "mru4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Cinemática · MRU · Reactivo 4 / 7",
          enunciado: "Un tren viaja a 30 m/s de forma constante. ¿Cuánto tarda en recorrer 600 m?",
          opciones: ["20 s", "0.05 s", "18 000 s", "630 s"],
          correcta: 0,
          explicacion: "De x = v·t se despeja t = x / v = 600 / 30 = 20 s.",
        },
      ],
    },
    {
      id: "mru5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Cinemática · MRU · Reactivo 5 / 7",
          enunciado: "En una gráfica velocidad-tiempo, una línea horizontal (paralela al eje del tiempo) indica que el móvil tiene:",
          opciones: ["Velocidad constante", "Aceleración constante", "Aceleración variable", "Velocidad cero"],
          correcta: 0,
          explicacion: "Si la velocidad no cambia con el tiempo, la línea v-t es horizontal. Eso es MRU: velocidad constante y aceleración nula.",
        },
      ],
    },
    {
      id: "mru6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Cinemática · MRU · Reactivo 6 / 7",
          enunciado: "Un automóvil viaja a 15 m/s constantes. ¿Qué distancia recorre en 10 s?",
          opciones: ["150 m", "1.5 m", "25 m", "300 m"],
          correcta: 0,
          explicacion: "En el MRU, x = v·t = (15)(10) = 150 m.",
        },
      ],
    },
    {
      id: "mru7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Cinemática · MRU · Reactivo 7 / 7",
          enunciado: "En el movimiento rectilíneo uniforme (MRU), la aceleración del móvil es:",
          opciones: ["Cero", "Constante y positiva", "Igual a la velocidad", "Variable"],
          correcta: 0,
          explicacion: "Por definición, en el MRU la velocidad es constante, así que no cambia: la aceleración es cero.",
        },
      ],
    },
    {
      id: "mrua",
      tipo: "lienzo",
      etiqueta: "Aceleración constante",
      titulo: "Movimiento Uniformemente Acelerado (MRUA)",
      bloques: [
        {
          tipo: "destacado",
          texto: "En el MRUA la aceleración es constante: la velocidad cambia de manera uniforme. La gráfica velocidad-tiempo es una recta inclinada y el desplazamiento es el área bajo ella.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "cin-graf-vt",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "v = v_0 + a\\,t",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Con sus ecuaciones se resuelve casi cualquier problema. La pendiente de la gráfica v-t es la aceleración, y el área bajo la gráfica es el desplazamiento recorrido.",
        },
        {
          tipo: "formula",
          math: "x = x_0 + v_0 t + \\tfrac{1}{2}a t^2, \\qquad v^2 = v_0^2 + 2a\\,\\Delta x",
        },
      ],
    },
    {
      id: "ecuaciones-mrua",
      tipo: "lienzo",
      etiqueta: "Elige según los datos que tengas",
      titulo: "Las Ecuaciones del MRUA",
      bloques: [
        {
          tipo: "formula",
          math: "a = \\text{constante}",
        },
        {
          tipo: "lista",
          items: [
            {
              math: "v = v_0 + a t",
              texto: "velocidad en función del tiempo",
            },
            {
              math: "x = x_0 + v_0 t + \\tfrac12 a t^2",
              texto: "posición en función del tiempo",
            },
            {
              math: "v^2 = v_0^2 + 2a\\,\\Delta x",
              texto: "sin tiempo: útil para distancias y frenados",
            },
            {
              math: "\\Delta x = \\dfrac{v_0 + v}{2}\\,t",
              texto: "usa la velocidad media",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Truco: identifica qué dato te falta. Si no aparece el tiempo, usa la tercera ecuación; si tienes las dos velocidades, la cuarta.",
        },
      ],
    },
    {
      id: "ej-mrua",
      tipo: "lienzo",
      etiqueta: "Distancia y velocidad final",
      titulo: "Ejemplo 1 · MRUA desde el reposo",
      bloques: [
        {
          tipo: "destacado",
          texto: "Un coche parte del reposo y acelera a 2 m/s² durante 5 s. ¿Qué distancia recorre y qué velocidad alcanza?",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "x = v_0 t + \\tfrac12 a t^2, \\qquad v = v_0 + a t",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Parte del reposo, así que v₀ = 0. La distancia se obtiene con la segunda ecuación y la velocidad final con la primera. Solo hay que sustituir los datos.",
        },
        {
          tipo: "formula",
          math: "x = \\tfrac12(2)(5^2) = 25\\ m, \\qquad v = (2)(5) = 10\\ \\tfrac{m}{s}",
        },
      ],
    },
    {
      id: "ej-frenado",
      tipo: "lienzo",
      etiqueta: "La ecuación v² = v₀² + 2aΔx",
      titulo: "Ejemplo 2 · Frenado (sin tiempo)",
      bloques: [
        {
          tipo: "destacado",
          texto: "Un coche viaja a 20 m/s y frena con una aceleración de −5 m/s² hasta detenerse. ¿Qué distancia recorre mientras frena?",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "v^2 = v_0^2 + 2a\\,\\Delta x",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Como no nos dan ni piden el tiempo, usamos la ecuación que no lo incluye. Al detenerse la velocidad final es cero; despejamos la distancia.",
        },
        {
          tipo: "formula",
          math: "\\Delta x = \\dfrac{-v_0^2}{2a} = \\dfrac{-(20)^2}{2(-5)} = \\dfrac{-400}{-10} = 40\\ m",
        },
      ],
    },
    {
      id: "ua1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Cinemática · MRUA · Reactivo 1 / 8",
          enunciado: "Un objeto parte del reposo con aceleración constante de 3 m/s². ¿Qué distancia recorre en 4 s?",
          opciones: ["24 m", "48 m", "12 m", "6 m"],
          correcta: 0,
          explicacion: "Desde el reposo, x = ½·a·t² = ½(3)(4²) = ½(3)(16) = 24 m.",
        },
      ],
    },
    {
      id: "ua2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Cinemática · MRUA · Reactivo 2 / 8",
          enunciado: "Un coche que va a 10 m/s frena con aceleración de −2 m/s². ¿Qué distancia recorre hasta detenerse?",
          opciones: ["25 m", "5 m", "2.5 m", "100 m"],
          correcta: 0,
          explicacion: "Como no se pide el tiempo, conviene v² = v₀² + 2a·Δx. Al detenerse v = 0: 0 = 10² + 2(−2)Δx → Δx = 100/4 = 25 m.",
        },
      ],
    },
    {
      id: "ua3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Cinemática · MRUA · Reactivo 3 / 8",
          enunciado: "En una gráfica velocidad-tiempo, la recta sube de 0 a 10 m/s en 4 s. ¿Qué distancia recorrió el móvil?",
          opciones: ["20 m", "40 m", "2.5 m", "10 m"],
          correcta: 0,
          explicacion: "El desplazamiento es el área bajo la gráfica v-t. Aquí es un triángulo: A = ½·base·altura = ½(4)(10) = 20 m.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "cin-ej-vt-area",
        },
      ],
    },
    {
      id: "ua4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Cinemática · MRUA · Reactivo 4 / 8",
          enunciado: "Un móvil acelera uniformemente de 4 m/s a 12 m/s. ¿Cuál es su velocidad media durante ese intervalo?",
          opciones: ["8 m/s", "16 m/s", "6 m/s", "4 m/s"],
          correcta: 0,
          explicacion: "En MRUA la velocidad media es el promedio de las velocidades inicial y final: (4 + 12)/2 = 8 m/s.",
        },
      ],
    },
    {
      id: "ua5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Cinemática · MRUA · Reactivo 5 / 8",
          enunciado: "Un objeto parte del reposo con aceleración constante de 3 m/s². ¿Qué velocidad alcanza a los 5 s?",
          opciones: ["15 m/s", "8 m/s", "0.6 m/s", "75 m/s"],
          correcta: 0,
          explicacion: "v = v₀ + a·t = 0 + (3)(5) = 15 m/s.",
        },
      ],
    },
    {
      id: "ua6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Cinemática · MRUA · Reactivo 6 / 8",
          enunciado: "En una gráfica velocidad-tiempo, ¿qué representa la pendiente de la recta?",
          opciones: ["La aceleración", "La distancia recorrida", "La velocidad media", "El tiempo total"],
          correcta: 0,
          explicacion: "La pendiente de la gráfica v-t es el cambio de velocidad entre el tiempo, es decir, la aceleración. El área bajo la curva es el desplazamiento.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "cin-graf-vt",
        },
      ],
    },
    {
      id: "ua7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Cinemática · MRUA · Reactivo 7 / 8",
          enunciado: "Un coche viaja a 30 m/s y frena con aceleración constante de −3 m/s². ¿Cuánto tarda en detenerse?",
          opciones: ["10 s", "90 s", "0.1 s", "27 s"],
          correcta: 0,
          explicacion: "De v = v₀ + a·t con v = 0: 0 = 30 + (−3)t → t = 30/3 = 10 s.",
        },
      ],
    },
    {
      id: "ua8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Cinemática · MRUA · Reactivo 8 / 8",
          enunciado: "¿Cuál de las ecuaciones del MRUA NO incluye el tiempo y es ideal para problemas de frenado?",
          opciones: ["v² = v₀² + 2aΔx", "v = v₀ + a t", "x = v₀ t + ½ a t²", "Δx = (v₀ + v)/2 · t"],
          correcta: 0,
          explicacion: "La ecuación v² = v₀² + 2aΔx relaciona velocidades, aceleración y distancia sin el tiempo, por lo que es ideal cuando este no se conoce ni se pide.",
        },
      ],
    },
    {
      id: "caida-libre",
      tipo: "lienzo",
      etiqueta: "MRUA con g",
      titulo: "Caída Libre y Tiro Vertical",
      bloques: [
        {
          tipo: "destacado",
          texto: "La caída libre es un MRUA donde la única aceleración es la gravedad, g ≈ 9.8 m/s² hacia abajo. Sin aire, todos los objetos caen igual sin importar su masa.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "cin-caida-libre",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "v = v_0 + g\\,t, \\qquad y = y_0 + v_0 t + \\tfrac12 g t^2",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Se usan las mismas ecuaciones del MRUA, cambiando a por g. En el punto más alto de un tiro vertical la velocidad es cero, y el tiempo de subida es igual al de bajada.",
        },
        {
          tipo: "formula",
          math: "g \\approx 9.8\\ \\tfrac{m}{s^2}\\ (\\text{a veces } 10), \\qquad v_{\\text{cima}} = 0",
        },
      ],
    },
    {
      id: "ej-caida",
      tipo: "lienzo",
      etiqueta: "Altura desde el tiempo de caída",
      titulo: "Ejemplo 1 · Caída libre",
      bloques: [
        {
          tipo: "destacado",
          texto: "Se deja caer una piedra desde un edificio y tarda 3 s en llegar al suelo. ¿Desde qué altura cayó? (g = 9.8 m/s²)",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "y = \\tfrac12 g t^2",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Como se «deja caer», la velocidad inicial es cero (v₀ = 0). Sustituyendo el tiempo en la ecuación de caída libre se obtiene la altura. La velocidad al llegar sería v = gt = 29.4 m/s.",
        },
        {
          tipo: "formula",
          math: "y = \\tfrac12(9.8)(3^2) = \\tfrac12(9.8)(9) = 44.1\\ m",
        },
      ],
    },
    {
      id: "ej-tiro-vertical",
      tipo: "lienzo",
      etiqueta: "Altura máxima y tiempo de subida",
      titulo: "Ejemplo 2 · Tiro vertical",
      bloques: [
        {
          tipo: "destacado",
          texto: "Se lanza una pelota verticalmente hacia arriba con una velocidad inicial de 20 m/s. ¿Cuánto tarda en llegar a su punto más alto y qué altura alcanza? (g = 10 m/s²)",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "cin-caida-libre",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "v = v_0 - g\\,t, \\qquad y = v_0 t - \\tfrac12 g t^2",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "En el punto más alto la velocidad es cero. Con v = 0 despejamos el tiempo de subida; con ese tiempo calculamos la altura máxima. El tiempo de bajada sería igual al de subida.",
        },
        {
          tipo: "formula",
          math: "t = \\dfrac{v_0}{g} = \\dfrac{20}{10} = 2\\ s, \\qquad y = (20)(2) - \\tfrac12(10)(2^2) = 40 - 20 = 20\\ m",
        },
      ],
    },
    {
      id: "cl1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Cinemática · Caída libre · Reactivo 1 / 8",
          enunciado: "Se deja caer un objeto. ¿Qué velocidad tiene a los 2 s? (g = 9.8 m/s²)",
          opciones: ["19.6 m/s", "9.8 m/s", "4.9 m/s", "39.2 m/s"],
          correcta: 0,
          explicacion: "En caída libre v = g·t = (9.8)(2) = 19.6 m/s (parte del reposo, v₀ = 0).",
        },
      ],
    },
    {
      id: "cl2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Cinemática · Caída libre · Reactivo 2 / 8",
          enunciado: "Despreciando la resistencia del aire, si soltamos al mismo tiempo y desde la misma altura una pluma y una piedra, ¿cuál llega primero al suelo?",
          opciones: [
            "Llegan al mismo tiempo",
            "La piedra, por ser más pesada",
            "La pluma, por ser más ligera",
            "Depende de su peso",
          ],
          correcta: 0,
          explicacion: "En caída libre la aceleración (g) es la misma para todos los cuerpos, sin importar su masa. Sin aire, ambos caen idéntico y llegan juntos.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "cin-caida-libre",
        },
      ],
    },
    {
      id: "cl3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Cinemática · Caída libre · Reactivo 3 / 8",
          enunciado: "Se lanza una pelota verticalmente hacia arriba. En su punto más alto, su velocidad es:",
          opciones: ["Cero", "Máxima", "Igual a la inicial", "9.8 m/s"],
          correcta: 0,
          explicacion: "En el punto más alto la pelota se detiene un instante antes de regresar: su velocidad es cero. La aceleración sigue siendo g hacia abajo.",
        },
      ],
    },
    {
      id: "cl4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Cinemática · Caída libre · Reactivo 4 / 8",
          enunciado: "¿Desde qué altura cae un objeto que tarda 2 s en llegar al suelo, si se suelta desde el reposo? (g = 10 m/s²)",
          opciones: ["20 m", "10 m", "40 m", "5 m"],
          correcta: 0,
          explicacion: "y = ½·g·t² = ½(10)(2²) = ½(10)(4) = 20 m.",
        },
      ],
    },
    {
      id: "cl5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Cinemática · Caída libre · Reactivo 5 / 8",
          enunciado: "Se deja caer un objeto desde el reposo. ¿Qué velocidad tiene a los 3 s? (g = 10 m/s²)",
          opciones: ["30 m/s", "13 m/s", "3.3 m/s", "45 m/s"],
          correcta: 0,
          explicacion: "v = g·t = (10)(3) = 30 m/s.",
        },
      ],
    },
    {
      id: "cl6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Cinemática · Caída libre · Reactivo 6 / 8",
          enunciado: "Un objeto se suelta desde el reposo y tarda 4 s en caer. ¿Qué altura recorrió? (g = 10 m/s²)",
          opciones: ["80 m", "40 m", "20 m", "160 m"],
          correcta: 0,
          explicacion: "y = ½·g·t² = ½(10)(4²) = ½(10)(16) = 80 m.",
        },
      ],
    },
    {
      id: "cl7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Cinemática · Caída libre · Reactivo 7 / 8",
          enunciado: "Se lanza una pelota hacia arriba con 20 m/s. ¿Cuánto tarda en llegar a su punto más alto? (g = 10 m/s²)",
          opciones: ["2 s", "4 s", "1 s", "20 s"],
          correcta: 0,
          explicacion: "En la cima v = 0: 0 = v₀ − g·t → t = v₀/g = 20/10 = 2 s.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "cin-caida-libre",
        },
      ],
    },
    {
      id: "cl8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Cinemática · Caída libre · Reactivo 8 / 8",
          enunciado: "En la caída libre, la aceleración de un cuerpo:",
          opciones: [
            "Es g y no depende de su masa",
            "Es mayor si el cuerpo es más pesado",
            "Es cero",
            "Aumenta con el tiempo",
          ],
          correcta: 0,
          explicacion: "Todos los cuerpos en caída libre tienen la misma aceleración, g ≈ 9.8 m/s², independientemente de su masa (despreciando el aire).",
        },
      ],
    },
    {
      id: "tiro-parabolico",
      tipo: "lienzo",
      etiqueta: "Dos movimientos a la vez",
      titulo: "Tiro Parabólico",
      bloques: [
        {
          tipo: "destacado",
          texto: "Es la combinación de dos movimientos independientes: uno horizontal (MRU, velocidad constante) y uno vertical (caída libre). La trayectoria resultante es una parábola.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "cin-tiro-parabolico",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "x = v_{0x}\\,t, \\qquad y = v_{0y}\\,t - \\tfrac12 g t^2",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Los movimientos horizontal y vertical no se afectan entre sí; solo comparten el tiempo. La componente horizontal de la velocidad nunca cambia; la vertical sí cambia por la gravedad.",
        },
        {
          tipo: "formula",
          math: "v_{0x} = v_0\\cos\\theta, \\qquad v_{0y} = v_0\\sin\\theta",
        },
      ],
    },
    {
      id: "ej-parabolico",
      tipo: "lienzo",
      etiqueta: "Combinando vertical y horizontal",
      titulo: "Ejemplo · Tiro horizontal",
      bloques: [
        {
          tipo: "destacado",
          texto: "Una pelota sale rodando horizontalmente de una mesa de 1.25 m de altura con velocidad de 3 m/s. ¿A qué distancia de la mesa cae? (g = 10 m/s²)",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "y = \\tfrac12 g t^2, \\qquad x = v_{0x}\\,t",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Primero se calcula el tiempo de caída con el movimiento vertical (la altura no depende de la velocidad horizontal). Con ese tiempo se halla el alcance horizontal, que es un MRU.",
        },
        {
          tipo: "formula",
          math: "t = \\sqrt{\\tfrac{2y}{g}} = \\sqrt{0.25} = 0.5\\ s, \\qquad x = (3)(0.5) = 1.5\\ m",
        },
      ],
    },
    {
      id: "tp1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Cinemática · Tiro parabólico · Reactivo 1 / 6",
          enunciado: "Una pelota se lanza horizontalmente desde 20 m de altura. ¿Cuánto tarda en caer al suelo? (g = 10 m/s²)",
          opciones: ["2 s", "4 s", "1 s", "0.5 s"],
          correcta: 0,
          explicacion: "El tiempo de caída solo depende del movimiento vertical: y = ½g·t² → 20 = ½(10)t² → t² = 4 → t = 2 s. La velocidad horizontal no influye en el tiempo.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "cin-tiro-parabolico",
        },
      ],
    },
    {
      id: "tp2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Cinemática · Tiro parabólico · Reactivo 2 / 6",
          enunciado: "En un tiro parabólico, despreciando la fricción del aire, la componente horizontal de la velocidad:",
          opciones: [
            "Permanece constante",
            "Aumenta con el tiempo",
            "Disminuye con el tiempo",
            "Se hace cero en la cima",
          ],
          correcta: 0,
          explicacion: "En el eje horizontal no hay aceleración (la gravedad es vertical), así que la velocidad horizontal no cambia: es un MRU. Lo que sí cambia es la componente vertical.",
        },
      ],
    },
    {
      id: "tp3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Cinemática · Tiro parabólico · Reactivo 3 / 6",
          enunciado: "¿Qué forma tiene la trayectoria que describe un proyectil en un tiro parabólico?",
          opciones: ["Una parábola", "Una recta", "Una circunferencia", "Una espiral"],
          correcta: 0,
          explicacion: "La combinación de un movimiento horizontal uniforme y uno vertical acelerado produce una trayectoria curva con forma de parábola.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "cin-tiro-parabolico",
        },
      ],
    },
    {
      id: "tp4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Cinemática · Tiro parabólico · Reactivo 4 / 6",
          enunciado: "En el tiro parabólico, el movimiento vertical del proyectil es un:",
          opciones: [
            "Movimiento de caída libre (acelerado por g)",
            "MRU sin aceleración",
            "Movimiento circular",
            "Movimiento en reposo",
          ],
          correcta: 0,
          explicacion: "El eje vertical está sometido a la gravedad, así que se comporta como una caída libre (MRUA con a = g). El horizontal, en cambio, es MRU.",
        },
      ],
    },
    {
      id: "tp5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Cinemática · Tiro parabólico · Reactivo 5 / 6",
          enunciado: "Una pelota se lanza horizontalmente a 4 m/s y tarda 2 s en caer. ¿Qué distancia horizontal recorre? (g = 10 m/s²)",
          opciones: ["8 m", "4 m", "20 m", "2 m"],
          correcta: 0,
          explicacion: "En el eje horizontal hay MRU: x = v₀ₓ·t = (4)(2) = 8 m.",
        },
      ],
    },
    {
      id: "tp6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Cinemática · Tiro parabólico · Reactivo 6 / 6",
          enunciado: "Los movimientos horizontal y vertical de un proyectil son independientes, pero comparten:",
          opciones: ["El tiempo", "La velocidad", "La aceleración", "La distancia"],
          correcta: 0,
          explicacion: "Aunque cada eje se analiza por separado, ambos ocurren simultáneamente: lo único que tienen en común es el tiempo de vuelo.",
        },
      ],
    },
    {
      id: "resumen",
      tipo: "lienzo",
      etiqueta: "Fórmulas clave de cinemática",
      titulo: "Resumen",
      bloques: [
        {
          tipo: "lista",
          items: [
            {
              math: "v = \\dfrac{\\Delta x}{\\Delta t}",
              texto: "velocidad: desplazamiento entre tiempo (vector)",
            },
            {
              math: "a = \\dfrac{\\Delta v}{\\Delta t}",
              texto: "aceleración: cambio de velocidad entre tiempo",
            },
            {
              math: "x = x_0 + v t",
              texto: "MRU: velocidad constante, a = 0",
            },
            {
              math: "v = v_0 + a t",
              texto: "MRUA: la velocidad cambia uniformemente",
            },
            {
              math: "x = x_0 + v_0 t + \\tfrac12 a t^2",
              texto: "posición en el MRUA (y en caída libre con g)",
            },
            {
              math: "v^2 = v_0^2 + 2a\\,\\Delta x",
              texto: "ecuación sin tiempo, ideal para frenados",
            },
            {
              titulo: "Caída libre",
              texto: "MRUA con a = g ≈ 9.8 m/s²; en la cima v = 0",
            },
            {
              titulo: "Tiro parabólico",
              texto: "horizontal (MRU) + vertical (caída libre), independientes",
            },
          ],
        },
      ],
    },
  ],
};
