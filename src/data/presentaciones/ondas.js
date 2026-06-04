// Datos de la presentación: Ondas, Sonido y Óptica (Física · UNAM)
// Estructura por subtema: Teoría → Ejemplos resueltos → Reactivos tipo UNAM.
// Subtemas: Características · Tipos · Sonido · Fenómenos · Luz · Lentes → Resumen.

export const PRESENTACION = {
  id: "ondas",
  titulo: "Ondas, Sonido y Óptica",
  materia: "Física",
  subtema: "Ondas y luz",
  slides: [

    // ── PORTADA ───────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Ondas, Sonido y Óptica",
      subtitulo: "Características de las ondas, v = λf, sonido, reflexión, refracción y lentes",
      etiqueta: "Física · UNAM",
      svgDiagram: "ond-portada",
    },

    // ══ SUBTEMA 1 · CARACTERÍSTICAS DE LAS ONDAS ══════════════════════════════
    {
      id: "onda",
      tipo: "concepto",
      titulo: "¿Qué es una Onda?",
      etiqueta: "Una perturbación que transporta energía",
      formula: "v = \\lambda\\,f",
      svgDiagram: "ond-onda",
      items: [
        { math: "\\lambda\\ \\text{(long. de onda)}", texto: "distancia entre dos crestas consecutivas (en metros)" },
        { math: "A\\ \\text{(amplitud)}", texto: "altura de la cresta; se relaciona con la energía" },
        { math: "f\\ \\text{(frecuencia)}", texto: "oscilaciones por segundo, en hertz (Hz)" },
        { math: "T = \\tfrac{1}{f}", texto: "periodo: tiempo de una oscilación (en segundos)" }
      ],
      nota: "Una onda transporta energía sin transportar materia. La velocidad de propagación depende del medio y se relaciona con la longitud de onda y la frecuencia mediante v = λf."
    },

    // Ejemplos · Características de las ondas
    {
      id: "ej-velocidad-onda",
      tipo: "criterio_detalle",
      titulo: "Ejemplo 1 · Velocidad de una onda",
      etiqueta: "Usando v = λf",
      enunciado: "Una onda sonora tiene una longitud de onda de 2 m y una frecuencia de 170 Hz. ¿Con qué velocidad se propaga?",
      math: "v = \\lambda\\,f",
      por_que: "Se multiplican la longitud de onda por la frecuencia. El resultado (≈ 340 m/s) es justo la velocidad del sonido en el aire.",
      math_razon: "v = (2)(170) = 340\\ \\tfrac{m}{s}"
    },

    {
      id: "ej-onda-cuerda",
      tipo: "criterio_detalle",
      titulo: "Ejemplo 2 · Onda en una cuerda",
      etiqueta: "A partir del periodo",
      enunciado: "Una onda en una cuerda tiene una longitud de onda de 10 cm y un periodo de 2 s. ¿Con qué velocidad se propaga?",
      math: "v = \\dfrac{\\lambda}{T} = \\lambda\\,f",
      por_que: "Como tenemos el periodo en lugar de la frecuencia, usamos v = λ/T. Conviene mantener las unidades coherentes (aquí, centímetros y segundos).",
      math_razon: "v = \\dfrac{10\\ \\text{cm}}{2\\ \\text{s}} = 5\\ \\tfrac{\\text{cm}}{\\text{s}}"
    },

    {
      id: "ej-periodo",
      tipo: "criterio_detalle",
      titulo: "Ejemplo 3 · Periodo y frecuencia",
      etiqueta: "Son inversos",
      enunciado: "Una onda oscila con una frecuencia de 50 Hz. ¿Cuál es su periodo?",
      math: "T = \\dfrac{1}{f}",
      por_que: "El periodo y la frecuencia son inversos: si algo oscila 50 veces por segundo, cada oscilación dura 1/50 de segundo.",
      math_razon: "T = \\dfrac{1}{50} = 0.02\\ \\text{s}"
    },

    // Reactivos · Características de las ondas
    {
      id: "o1",
      tipo: "ejercicio",
      svgDiagram: "ond-onda",
      etiqueta: "Ondas y Óptica · Características · Reactivo 1 / 6",
      pregunta: "La distancia entre dos crestas consecutivas de una onda se llama:",
      opciones: ["Longitud de onda", "Amplitud", "Periodo", "Frecuencia"],
      correcta: 0,
      explicacion: "La longitud de onda (λ) es la distancia entre dos puntos equivalentes consecutivos, como dos crestas. Se mide en metros.",
      pasos: [
        { pre: "Símbolo: ", math: "\\lambda\\ \\text{(en metros)}" }
      ]
    },

    {
      id: "o2",
      tipo: "ejercicio",
      etiqueta: "Ondas y Óptica · Características · Reactivo 2 / 6",
      pregunta: "La amplitud de una onda está relacionada principalmente con:",
      opciones: ["La energía que transporta", "Su velocidad", "Su longitud de onda", "El medio en que viaja"],
      correcta: 0,
      explicacion: "La amplitud es la máxima separación respecto al equilibrio; a mayor amplitud, más energía transporta la onda (en el sonido, más volumen).",
      pasos: [
        { pre: "Mayor amplitud: ", math: "\\text{más energía / intensidad}" }
      ]
    },

    {
      id: "o3",
      tipo: "ejercicio",
      etiqueta: "Ondas y Óptica · Características · Reactivo 3 / 6",
      pregunta: "Una onda tiene una longitud de onda de 2 m y una frecuencia de 10 Hz. ¿Cuál es su velocidad?",
      opciones: ["20 m/s", "5 m/s", "0.2 m/s", "12 m/s"],
      correcta: 0,
      explicacion: "v = λ·f = (2)(10) = 20 m/s.",
      pasos: [
        { pre: "Velocidad: ", math: "v = \\lambda f = (2)(10) = 20\\ \\tfrac{m}{s}" }
      ]
    },

    {
      id: "o4",
      tipo: "ejercicio",
      etiqueta: "Ondas y Óptica · Características · Reactivo 4 / 6",
      pregunta: "Si una onda tiene una frecuencia de 4 Hz, ¿cuál es su periodo?",
      opciones: ["0.25 s", "4 s", "40 s", "2 s"],
      correcta: 0,
      explicacion: "T = 1/f = 1/4 = 0.25 s.",
      pasos: [
        { pre: "Inverso de la frecuencia: ", math: "T = \\dfrac{1}{f} = \\dfrac{1}{4} = 0.25\\ \\text{s}" }
      ]
    },

    {
      id: "o5",
      tipo: "ejercicio",
      etiqueta: "Ondas y Óptica · Características · Reactivo 5 / 6",
      pregunta: "¿En qué unidad se mide la frecuencia de una onda?",
      opciones: ["Hertz (Hz)", "Metros (m)", "Segundos (s)", "Metros por segundo (m/s)"],
      correcta: 0,
      explicacion: "La frecuencia es el número de oscilaciones por segundo y se mide en hertz (Hz). 1 Hz = 1 ciclo/s.",
      pasos: [
        { pre: "Definición: ", math: "1\\ \\text{Hz} = \\dfrac{1\\ \\text{ciclo}}{\\text{s}}" }
      ]
    },

    {
      id: "o6",
      tipo: "ejercicio",
      etiqueta: "Ondas y Óptica · Características · Reactivo 6 / 6",
      pregunta: "Una onda en una cuerda tiene λ = 10 cm y periodo T = 2 s. ¿Con qué velocidad se propaga?",
      opciones: ["5 cm/s", "20 cm/s", "0.2 cm/s", "12 cm/s"],
      correcta: 0,
      explicacion: "v = λ/T = 10 cm / 2 s = 5 cm/s.",
      pasos: [
        { pre: "Velocidad: ", math: "v = \\dfrac{\\lambda}{T} = \\dfrac{10}{2} = 5\\ \\tfrac{\\text{cm}}{\\text{s}}" }
      ]
    },

    // ══ SUBTEMA 2 · TIPOS DE ONDAS ════════════════════════════════════════════
    {
      id: "tipos",
      tipo: "concepto",
      titulo: "Tipos de Ondas",
      etiqueta: "Según cómo vibran y qué necesitan",
      formula: "\\text{transversal · longitudinal}",
      svgDiagram: "ond-tipos",
      items: [
        { math: "\\text{transversal}", texto: "las partículas vibran perpendicular a la propagación (la luz, una cuerda)" },
        { math: "\\text{longitudinal}", texto: "vibran en la misma dirección que se propaga (el sonido)" },
        { math: "\\text{mecánica}", texto: "necesita un medio material (sonido, agua)" },
        { math: "\\text{electromagnética}", texto: "viaja en el vacío (luz, radio, rayos X)" }
      ],
      nota: "Las ondas mecánicas (como el sonido) requieren un medio: no se propagan en el vacío. Las electromagnéticas (como la luz) sí pueden viajar por el vacío."
    },

    // Ejemplo · Tipos de ondas
    {
      id: "ej-tipos",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Clasificar una onda",
      etiqueta: "Mecánica/EM y transversal/longitudinal",
      svgDiagram: "ond-tipos",
      enunciado: "¿Cómo se clasifica una onda de radio: mecánica o electromagnética? ¿Y las olas del mar?",
      math: "\\text{mecánica · electromagnética}",
      por_que: "La onda de radio es electromagnética: viaja por el vacío sin necesitar un medio. Las olas del mar son mecánicas: necesitan el agua para propagarse. Toda onda que requiere materia es mecánica.",
      math_razon: "\\text{radio} \\Rightarrow \\text{EM (vacío)}, \\qquad \\text{olas} \\Rightarrow \\text{mecánica (agua)}"
    },

    // Reactivos · Tipos de ondas
    {
      id: "o9",
      tipo: "ejercicio",
      svgDiagram: "ond-tipos",
      etiqueta: "Ondas y Óptica · Tipos de ondas · Reactivo 1 / 1",
      pregunta: "En una onda transversal, las partículas del medio vibran:",
      opciones: ["Perpendicularmente a la dirección de propagación", "En la misma dirección de propagación", "En círculos completos", "Sin moverse"],
      correcta: 0,
      explicacion: "En la onda transversal la vibración es perpendicular al avance de la onda (como sacudir una cuerda). En la longitudinal es paralela.",
      pasos: [
        { pre: "Transversal: ", math: "\\text{vibración} \\perp \\text{propagación}" }
      ]
    },

    // ══ SUBTEMA 3 · EL SONIDO ═════════════════════════════════════════════════
    {
      id: "sonido",
      tipo: "criterio_detalle",
      titulo: "El Sonido",
      etiqueta: "Una onda mecánica longitudinal",
      enunciado: "El sonido es una onda mecánica longitudinal que se propaga comprimiendo y expandiendo el medio (aire, agua, sólidos). Necesita materia: en el vacío no hay sonido.",
      math: "v_{aire} \\approx 340\\ \\tfrac{m}{s}",
      por_que: "La frecuencia determina el tono (agudo o grave) y la amplitud, el volumen. El sonido viaja más rápido en los sólidos y líquidos que en el aire, porque sus partículas están más juntas.",
      math_razon: "v_{solido} > v_{liquido} > v_{aire} \\gg v_{vacio} = 0"
    },

    // Ejemplo · El sonido
    {
      id: "ej-sonido",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Distancia por el eco",
      etiqueta: "El sonido viaja a 340 m/s",
      enunciado: "Gritas frente a un acantilado y el eco regresa 2 s después. ¿A qué distancia está el acantilado? (v_sonido = 340 m/s)",
      math: "d = \\dfrac{v\\,t}{2}",
      por_que: "En esos 2 s el sonido recorre la ida y la vuelta. La distancia al acantilado es la mitad del recorrido total: se calcula lo que avanza en 2 s y se divide entre 2.",
      math_razon: "d = \\dfrac{(340)(2)}{2} = \\dfrac{680}{2} = 340\\ \\text{m}"
    },

    // Reactivos · El sonido
    {
      id: "o7",
      tipo: "ejercicio",
      svgDiagram: "ond-tipos",
      etiqueta: "Ondas y Óptica · Sonido · Reactivo 1 / 2",
      pregunta: "El sonido es una onda:",
      opciones: ["Mecánica y longitudinal", "Electromagnética", "Transversal que viaja en el vacío", "Que no transporta energía"],
      correcta: 0,
      explicacion: "El sonido es mecánica (necesita medio) y longitudinal (las partículas vibran en la misma dirección en que se propaga).",
      pasos: [
        { pre: "Tipo: ", math: "\\text{mecánica longitudinal}" }
      ]
    },

    {
      id: "o8",
      tipo: "ejercicio",
      etiqueta: "Ondas y Óptica · Sonido · Reactivo 2 / 2",
      pregunta: "¿En cuál de los siguientes medios NO se puede propagar el sonido?",
      opciones: ["El vacío", "El aire", "El agua", "El acero"],
      correcta: 0,
      explicacion: "El sonido es una onda mecánica: necesita un medio material. En el vacío no hay partículas que vibren, así que no se propaga.",
      pasos: [
        { pre: "Onda mecánica: ", math: "v_{vacío} = 0" }
      ]
    },

    // ══ SUBTEMA 4 · FENÓMENOS ONDULATORIOS ════════════════════════════════════
    {
      id: "fenomenos",
      tipo: "criterio_detalle",
      titulo: "Fenómenos Ondulatorios",
      etiqueta: "Reflexión, refracción, difracción, interferencia",
      svgDiagram: "ond-reflexion-refraccion",
      enunciado: "Al encontrar obstáculos o cambiar de medio, las ondas se comportan de formas características. Estos fenómenos los comparten el sonido y la luz por ser ondas.",
      math: "\\theta_{incidencia} = \\theta_{reflexión}",
      por_que: "Reflexión: la onda rebota (el eco, el espejo). Refracción: cambia de dirección al cambiar de medio porque cambia su velocidad. Difracción: bordea obstáculos. Interferencia: dos ondas se suman o se cancelan.",
      math_razon: "\\text{refracción} \\Rightarrow \\text{cambia } v \\Rightarrow \\text{cambia dirección}"
    },

    // Ejemplo · Fenómenos ondulatorios
    {
      id: "ej-fenomenos",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Identificar el fenómeno",
      etiqueta: "Reflexión, refracción o difracción",
      svgDiagram: "ond-reflexion-refraccion",
      enunciado: "Ves un lápiz «quebrado» al meterlo en un vaso con agua. ¿Qué fenómeno ondulatorio lo explica?",
      math: "\\text{cambia } v \\Rightarrow \\text{cambia dirección}",
      por_que: "Es refracción: al pasar la luz del agua al aire cambia su velocidad y se desvía. Por eso vemos la parte sumergida del lápiz desplazada, como si estuviera quebrado.",
      math_razon: "\\text{aire} \\leftrightarrow \\text{agua}: \\ v\\ \\text{distinta} \\Rightarrow \\text{refracción}"
    },

    // Reactivos · Fenómenos ondulatorios
    {
      id: "o11",
      tipo: "ejercicio",
      svgDiagram: "ond-reflexion-refraccion",
      etiqueta: "Ondas y Óptica · Fenómenos · Reactivo 1 / 5",
      pregunta: "Cuando un rayo de luz se refleja en un espejo plano, el ángulo de incidencia:",
      opciones: ["Es igual al ángulo de reflexión", "Es mayor al de reflexión", "Es menor al de reflexión", "Siempre vale 90°"],
      correcta: 0,
      explicacion: "Es la ley de la reflexión: el ángulo con que llega el rayo (incidencia) es igual al ángulo con que rebota (reflexión), ambos medidos desde la normal.",
      pasos: [
        { pre: "Ley de reflexión: ", math: "\\theta_i = \\theta_r" }
      ]
    },

    {
      id: "o12",
      tipo: "ejercicio",
      svgDiagram: "ond-reflexion-refraccion",
      etiqueta: "Ondas y Óptica · Fenómenos · Reactivo 2 / 5",
      pregunta: "Cuando la luz pasa del aire al agua, cambia de dirección (se refracta) porque cambia su:",
      opciones: ["Velocidad", "Color", "Frecuencia", "Energía total"],
      correcta: 0,
      explicacion: "La refracción ocurre porque la luz viaja a distinta velocidad en cada medio. Al cambiar de rapidez al entrar al agua, el rayo se desvía.",
      pasos: [
        { pre: "Cambio de medio: ", math: "\\text{cambia } v \\Rightarrow \\text{se desvía}" }
      ]
    },

    {
      id: "o13",
      tipo: "ejercicio",
      etiqueta: "Ondas y Óptica · Fenómenos · Reactivo 3 / 5",
      pregunta: "La superposición de dos ondas que produce zonas de refuerzo y zonas de cancelación se llama:",
      opciones: ["Interferencia", "Reflexión", "Refracción", "Polarización"],
      correcta: 0,
      explicacion: "La interferencia es la suma de dos ondas: donde coinciden las crestas se refuerzan (constructiva) y donde una cresta cae sobre un valle se cancelan (destructiva).",
      pasos: [
        { pre: "Superposición: ", math: "\\text{constructiva / destructiva}" }
      ]
    },

    {
      id: "o14",
      tipo: "ejercicio",
      etiqueta: "Ondas y Óptica · Fenómenos · Reactivo 4 / 5",
      pregunta: "El fenómeno por el cual una onda rodea un obstáculo o se abre al pasar por una rendija estrecha es la:",
      opciones: ["Difracción", "Reflexión", "Refracción", "Absorción"],
      correcta: 0,
      explicacion: "La difracción es la capacidad de las ondas de bordear obstáculos y abrirse tras pasar por una abertura. Por eso oyes un sonido aunque haya una pared de por medio.",
      pasos: [
        { pre: "Bordear obstáculos: ", math: "\\text{difracción}" }
      ]
    },

    {
      id: "o17",
      tipo: "ejercicio",
      etiqueta: "Ondas y Óptica · Fenómenos · Reactivo 5 / 5",
      pregunta: "El eco que escuchas en una montaña es producto de la ___ del sonido.",
      opciones: ["Reflexión", "Refracción", "Difracción", "Absorción"],
      correcta: 0,
      explicacion: "El eco es el sonido que rebota en una superficie y regresa: es una reflexión de la onda sonora.",
      pasos: [
        { pre: "Rebote: ", math: "\\text{reflexión del sonido}" }
      ]
    },

    // ══ SUBTEMA 5 · LA LUZ ════════════════════════════════════════════════════
    {
      id: "luz",
      tipo: "concepto",
      titulo: "La Luz",
      etiqueta: "Una onda electromagnética",
      formula: "c \\approx 3\\times 10^{8}\\ \\tfrac{m}{s}",
      items: [
        { math: "\\text{onda EM}", texto: "no necesita medio: viaja por el vacío a la velocidad c" },
        { math: "n = \\dfrac{c}{v}", texto: "índice de refracción: cuánto se frena la luz en un medio" },
        { math: "\\text{espectro}", texto: "la luz visible es solo una parte del espectro electromagnético" }
      ],
      nota: "La luz es la onda más rápida del universo (c ≈ 300 000 km/s). En el aire la luz viaja muchísimo más rápido que el sonido: por eso ves el relámpago antes de oír el trueno."
    },

    // Ejemplo · La luz
    {
      id: "ej-luz",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Índice de refracción",
      etiqueta: "Cuánto se frena la luz",
      enunciado: "En el agua la luz viaja a 2.25 × 10⁸ m/s. Si en el vacío viaja a 3 × 10⁸ m/s, ¿cuál es el índice de refracción del agua?",
      math: "n = \\dfrac{c}{v}",
      por_que: "El índice de refracción compara la velocidad de la luz en el vacío con la del medio. Cuanto más se frena la luz, mayor es el índice. Se dividen ambas velocidades.",
      math_razon: "n = \\dfrac{3\\times 10^8}{2.25\\times 10^8} \\approx 1.33"
    },

    // Reactivos · La luz
    {
      id: "o10",
      tipo: "ejercicio",
      etiqueta: "Ondas y Óptica · La luz · Reactivo 1 / 2",
      pregunta: "La luz es una onda:",
      opciones: ["Electromagnética (viaja en el vacío)", "Mecánica", "Longitudinal sonora", "Que necesita aire para propagarse"],
      correcta: 0,
      explicacion: "La luz es una onda electromagnética: no necesita medio y por eso llega del Sol a la Tierra atravesando el vacío del espacio.",
      pasos: [
        { pre: "En el vacío: ", math: "c \\approx 3\\times 10^8\\ \\tfrac{m}{s}" }
      ]
    },

    {
      id: "o18",
      tipo: "ejercicio",
      etiqueta: "Ondas y Óptica · La luz · Reactivo 2 / 2",
      pregunta: "En el aire, ¿qué viaja más rápido, la luz o el sonido?",
      opciones: ["La luz", "El sonido", "Ambos a la misma velocidad", "Depende del color"],
      correcta: 0,
      explicacion: "La luz (≈ 3×10⁸ m/s) es muchísimo más rápida que el sonido (≈ 340 m/s). Por eso ves el relámpago mucho antes de oír el trueno.",
      pasos: [
        { pre: "Comparación: ", math: "c \\gg v_{sonido}" }
      ]
    },

    // ══ SUBTEMA 6 · ESPEJOS Y LENTES ══════════════════════════════════════════
    {
      id: "lentes",
      tipo: "criterio_detalle",
      titulo: "Espejos y Lentes",
      etiqueta: "Refracción y reflexión de la luz",
      svgDiagram: "ond-lente",
      enunciado: "Una lente convergente (más gruesa al centro) concentra los rayos paralelos en un punto llamado foco. Una divergente (más delgada al centro) los separa. Con ellas se forman las imágenes.",
      math: "\\dfrac{1}{f} = \\dfrac{1}{d_o} + \\dfrac{1}{d_i}",
      por_que: "La lupa es una lente convergente: concentra la luz y aumenta los objetos. La ecuación de las lentes relaciona la distancia del objeto (dₒ), la de la imagen (dᵢ) y la distancia focal (f).",
      math_razon: "\\text{convergente: rayos paralelos} \\to \\text{foco } F"
    },

    // Ejemplo · Espejos y lentes
    {
      id: "ej-lente",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Ecuación de las lentes",
      etiqueta: "Posición de la imagen",
      svgDiagram: "ond-lente",
      enunciado: "Un objeto se coloca a 30 cm de una lente convergente de distancia focal 10 cm. ¿A qué distancia se forma la imagen?",
      math: "\\dfrac{1}{f} = \\dfrac{1}{d_o} + \\dfrac{1}{d_i}",
      por_que: "Se despeja 1/dᵢ restando. El resultado positivo indica que la imagen es real y se forma del otro lado de la lente.",
      math_razon: "\\dfrac{1}{d_i} = \\dfrac{1}{10} - \\dfrac{1}{30} = \\dfrac{2}{30} \\;\\Rightarrow\\; d_i = 15\\ \\text{cm}"
    },

    // Reactivos · Espejos y lentes
    {
      id: "o15",
      tipo: "ejercicio",
      svgDiagram: "ond-lente",
      etiqueta: "Ondas y Óptica · Lentes · Reactivo 1 / 2",
      pregunta: "Una lente convergente hace que los rayos de luz paralelos que la atraviesan:",
      opciones: ["Se concentren en un punto (foco)", "Se dispersen", "No cambien de dirección", "Se reflejen hacia atrás"],
      correcta: 0,
      explicacion: "La lente convergente reúne los rayos paralelos en su foco. La divergente, en cambio, los separa como si vinieran de un punto.",
      pasos: [
        { pre: "Convergente: ", math: "\\text{rayos paralelos} \\to F" }
      ]
    },

    {
      id: "o16",
      tipo: "ejercicio",
      etiqueta: "Ondas y Óptica · Lentes · Reactivo 2 / 2",
      pregunta: "Una lupa que amplía los objetos cercanos es una lente:",
      opciones: ["Convergente", "Divergente", "Plana", "Reflectora"],
      correcta: 0,
      explicacion: "La lupa es una lente convergente (más gruesa en el centro): concentra la luz y forma una imagen aumentada del objeto.",
      pasos: [
        { pre: "Lupa: ", math: "\\text{lente convergente}" }
      ]
    },

    // ── RESUMEN ───────────────────────────────────────────────────────────────
    {
      id: "resumen",
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Ondas, sonido y óptica",
      puntos: [
        { math: "v = \\lambda f", texto: "velocidad de una onda: longitud de onda por frecuencia" },
        { math: "T = \\tfrac{1}{f}", texto: "periodo y frecuencia son inversos (f en hertz)" },
        { titulo: "Tipos", texto: "transversal/longitudinal; mecánica (con medio) o electromagnética (vacío)" },
        { titulo: "Sonido", texto: "onda mecánica longitudinal; no viaja en el vacío" },
        { titulo: "Luz", texto: "onda electromagnética; c ≈ 3×10⁸ m/s" },
        { math: "\\theta_i = \\theta_r", texto: "reflexión: el eco y el espejo" },
        { titulo: "Refracción", texto: "la onda se desvía al cambiar de medio (cambia su velocidad)" },
        { titulo: "Lentes", texto: "la convergente concentra los rayos en el foco; la divergente los separa" }
      ]
    }

  ]
};
