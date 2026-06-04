// Datos de la presentación: Trabajo, Energía y Conservación (Física · UNAM)
// Estructura por subtema: Teoría → Ejemplos resueltos → Reactivos tipo UNAM.
// Subtemas: Trabajo · E. cinética · E. potencial · Conservación · Potencia · Cantidad de movimiento → Resumen.

export const PRESENTACION = {
  id: "energia",
  titulo: "Trabajo y Energía",
  materia: "Física",
  subtema: "Mecánica",
  slides: [

    // ── PORTADA ───────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Trabajo y Energía",
      subtitulo: "Trabajo, energía cinética y potencial, potencia, ímpetu y choques",
      etiqueta: "Física · UNAM",
      svgDiagram: "ene-portada",
    },

    // ══ SUBTEMA 1 · TRABAJO ═══════════════════════════════════════════════════
    {
      id: "trabajo",
      tipo: "concepto",
      titulo: "Trabajo",
      etiqueta: "Fuerza por distancia",
      formula: "W = F\\,d\\,\\cos\\theta",
      svgDiagram: "ene-trabajo",
      items: [
        { math: "W = F\\,d", texto: "cuando la fuerza es paralela al desplazamiento" },
        { math: "\\theta = 90^\\circ", texto: "si la fuerza es perpendicular, el trabajo es cero" },
        { math: "[\\,W\\,] = \\text{J}", texto: "se mide en joules: 1 J = 1 N·m" }
      ],
      nota: "Solo hace trabajo la componente de la fuerza en la dirección del movimiento. Sostener un objeto sin moverlo, o cargarlo horizontalmente, no implica trabajo físico (W = 0)."
    },

    // Ejemplo · Trabajo
    {
      id: "ej-trabajo",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Trabajo",
      etiqueta: "Fuerza paralela al movimiento",
      enunciado: "Una persona empuja una caja con una fuerza horizontal de 20 N y la desplaza 5 m en la misma dirección. ¿Qué trabajo realiza?",
      math: "W = F\\,d",
      por_que: "Como la fuerza y el desplazamiento van en la misma dirección (θ = 0°, cos 0° = 1), basta multiplicar fuerza por distancia. El resultado está en joules.",
      math_razon: "W = (20)(5) = 100\\ \\text{J}"
    },

    // Reactivos · Trabajo
    {
      id: "e1",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Trabajo · Reactivo 1 / 4",
      pregunta: "El trabajo de una fuerza es máximo cuando la fuerza y el desplazamiento son:",
      opciones: ["Paralelos (misma dirección)", "Perpendiculares", "De sentido contrario", "Iguales en magnitud"],
      correcta: 0,
      explicacion: "W = F·d·cos θ. El coseno es máximo (vale 1) cuando θ = 0°, es decir, cuando la fuerza apunta en la misma dirección del movimiento.",
      pasos: [
        { pre: "Máximo coseno: ", math: "\\cos 0^\\circ = 1 \\Rightarrow W = F\\,d" }
      ]
    },

    {
      id: "e2",
      tipo: "ejercicio",
      svgDiagram: "ene-trabajo",
      etiqueta: "Trabajo y Energía · Trabajo · Reactivo 2 / 4",
      pregunta: "Una fuerza de 50 N desplaza un objeto 4 m en su misma dirección. ¿Qué trabajo realiza?",
      opciones: ["200 J", "12.5 J", "54 J", "100 J"],
      correcta: 0,
      explicacion: "W = F·d = (50)(4) = 200 J.",
      pasos: [
        { pre: "Trabajo: ", math: "W = F\\,d = (50)(4) = 200\\ \\text{J}" }
      ]
    },

    {
      id: "e3",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Trabajo · Reactivo 3 / 4",
      pregunta: "Caminas horizontalmente a velocidad constante cargando una maleta. ¿Qué trabajo realiza sobre la maleta la fuerza con que la sostienes?",
      opciones: ["Cero", "Igual a su peso", "Igual a su energía cinética", "Infinito"],
      correcta: 0,
      explicacion: "La fuerza que la sostiene es vertical (hacia arriba) y el desplazamiento es horizontal: son perpendiculares (θ = 90°, cos 90° = 0), así que el trabajo es cero.",
      pasos: [
        { pre: "Fuerza ⟂ desplazamiento: ", math: "W = F d \\cos 90^\\circ = 0" }
      ]
    },

    {
      id: "e7",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Trabajo · Reactivo 4 / 4",
      pregunta: "¿Cuál es la unidad de trabajo y energía en el Sistema Internacional?",
      opciones: ["El joule (J)", "El watt (W)", "El newton (N)", "El pascal (Pa)"],
      correcta: 0,
      explicacion: "Tanto el trabajo como la energía se miden en joules. 1 J = 1 N·m. El watt es potencia.",
      pasos: [
        { pre: "Definición: ", math: "1\\ \\text{J} = 1\\ \\text{N}\\cdot\\text{m}" }
      ]
    },

    // ══ SUBTEMA 2 · ENERGÍA CINÉTICA ══════════════════════════════════════════
    {
      id: "energia-cinetica",
      tipo: "criterio_detalle",
      titulo: "Energía Cinética",
      etiqueta: "La energía del movimiento",
      svgDiagram: "ene-energias",
      enunciado: "Todo cuerpo en movimiento posee energía cinética, que depende de su masa y del cuadrado de su velocidad. Por eso un pequeño aumento de velocidad la dispara.",
      math: "E_c = \\tfrac{1}{2}\\,m\\,v^2",
      por_que: "Como la velocidad está al cuadrado, si la rapidez se duplica la energía cinética se cuadruplica. Es la razón por la que un choque a alta velocidad es tan peligroso.",
      math_razon: "v \\to 2v \\;\\Rightarrow\\; E_c \\to 4E_c"
    },

    // Ejemplo · Energía cinética
    {
      id: "ej-cinetica",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Energía cinética",
      etiqueta: "Energía del movimiento",
      enunciado: "¿Cuál es la energía cinética de un cuerpo de 2 kg que se mueve a 3 m/s?",
      math: "E_c = \\tfrac12 m v^2",
      por_que: "Se sustituyen la masa y la velocidad. Cuidado: la velocidad va al cuadrado antes de multiplicar por la mitad de la masa.",
      math_razon: "E_c = \\tfrac12 (2)(3^2) = \\tfrac12 (2)(9) = 9\\ \\text{J}"
    },

    // Reactivos · Energía cinética
    {
      id: "e4",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Energía cinética · Reactivo 1 / 3",
      pregunta: "¿Cuál es la energía cinética de un objeto de 4 kg que se mueve a 5 m/s?",
      opciones: ["50 J", "20 J", "10 J", "100 J"],
      correcta: 0,
      explicacion: "Ec = ½·m·v² = ½(4)(5²) = ½(4)(25) = 50 J.",
      pasos: [
        { pre: "Energía cinética: ", math: "E_c = \\tfrac12 (4)(25) = 50\\ \\text{J}" }
      ]
    },

    {
      id: "e5",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Energía cinética · Reactivo 2 / 3",
      pregunta: "Si la velocidad de un objeto se duplica, su energía cinética se vuelve:",
      opciones: ["El cuádruple", "El doble", "La mitad", "La misma"],
      correcta: 0,
      explicacion: "Como Ec = ½mv², la energía depende del cuadrado de la velocidad. Al duplicarla, se multiplica por 2² = 4.",
      pasos: [
        { pre: "v al cuadrado: ", math: "E_c \\propto v^2 \\Rightarrow (2)^2 = 4" }
      ]
    },

    {
      id: "e17",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Energía cinética · Reactivo 3 / 3",
      pregunta: "Según el teorema del trabajo y la energía, el trabajo neto realizado sobre un objeto es igual a:",
      opciones: ["Su cambio de energía cinética", "Su energía potencial", "Su peso", "Su cantidad de movimiento"],
      correcta: 0,
      explicacion: "El trabajo neto se invierte en cambiar la rapidez del objeto: W_neto = ΔEc = Ec_final − Ec_inicial.",
      pasos: [
        { pre: "Teorema trabajo-energía: ", math: "W_{neto} = \\Delta E_c" }
      ]
    },

    // ══ SUBTEMA 3 · ENERGÍA POTENCIAL ═════════════════════════════════════════
    {
      id: "energia-potencial",
      tipo: "concepto",
      titulo: "Energía Potencial",
      etiqueta: "Energía almacenada",
      formula: "E_p = m\\,g\\,h",
      items: [
        { math: "E_p = mgh", texto: "gravitatoria: depende de la altura respecto a un nivel" },
        { math: "E_p = \\tfrac12 k x^2", texto: "elástica: almacenada en un resorte deformado" },
        { math: "[\\,E_p\\,] = \\text{J}", texto: "también se mide en joules" }
      ],
      nota: "La energía potencial gravitatoria es la que un objeto tiene «guardada» por su posición elevada; al caer, se transforma en energía cinética."
    },

    // Ejemplo · Energía potencial
    {
      id: "ej-potencial",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Energía potencial",
      etiqueta: "Energía almacenada por la altura",
      enunciado: "¿Cuánta energía potencial gravitatoria tiene un objeto de 4 kg colocado a 3 m de altura? (g = 10 m/s²)",
      math: "E_p = m\\,g\\,h",
      por_que: "La energía potencial gravitatoria es masa por gravedad por altura. Solo se sustituyen los datos; el resultado está en joules. Esta energía se liberaría como cinética si el objeto cayera.",
      math_razon: "E_p = (4)(10)(3) = 120\\ \\text{J}"
    },

    // Reactivos · Energía potencial
    {
      id: "e6",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Energía potencial · Reactivo 1 / 1",
      pregunta: "¿Cuál es la energía potencial gravitatoria de un objeto de 2 kg situado a 10 m de altura? (g = 10 m/s²)",
      opciones: ["200 J", "20 J", "100 J", "5 J"],
      correcta: 0,
      explicacion: "Ep = m·g·h = (2)(10)(10) = 200 J.",
      pasos: [
        { pre: "Potencial gravitatoria: ", math: "E_p = mgh = (2)(10)(10) = 200\\ \\text{J}" }
      ]
    },

    // ══ SUBTEMA 4 · CONSERVACIÓN DE LA ENERGÍA ════════════════════════════════
    {
      id: "conservacion",
      tipo: "criterio_detalle",
      titulo: "Conservación de la Energía",
      etiqueta: "La energía no se crea ni se destruye",
      svgDiagram: "ene-conservacion",
      enunciado: "Sin fricción, la energía mecánica (cinética + potencial) permanece constante: lo que se pierde de una se gana en la otra. La energía solo se transforma.",
      math: "E_m = E_c + E_p = \\text{constante}",
      por_que: "Al caer un objeto, su altura baja (pierde Ep) y su velocidad sube (gana Ec) en la misma cantidad. Igualando Ep arriba con Ec abajo se obtiene la rapidez sin usar el tiempo.",
      math_razon: "m g h = \\tfrac12 m v^2 \\;\\Rightarrow\\; v = \\sqrt{2gh}"
    },

    // Ejemplo · Conservación de la energía
    {
      id: "ej-conservacion",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Conservación de energía",
      etiqueta: "Velocidad al caer",
      enunciado: "Se deja caer un objeto desde una altura de 5 m. ¿Con qué velocidad llega al suelo? (g = 10 m/s², sin fricción)",
      math: "m g h = \\tfrac12 m v^2 \\;\\Rightarrow\\; v = \\sqrt{2gh}",
      por_que: "La masa se cancela. Toda la energía potencial de arriba se convierte en cinética abajo. Conviene este método cuando no se conoce el tiempo.",
      math_razon: "v = \\sqrt{2(10)(5)} = \\sqrt{100} = 10\\ \\tfrac{m}{s}"
    },

    // Reactivos · Conservación de la energía
    {
      id: "e10",
      tipo: "ejercicio",
      svgDiagram: "ene-conservacion",
      etiqueta: "Trabajo y Energía · Conservación · Reactivo 1 / 2",
      pregunta: "En el punto más alto de la trayectoria de un péndulo (donde se detiene un instante), su energía es:",
      opciones: ["Toda potencial", "Toda cinética", "Cero", "Mitad cinética y mitad potencial"],
      correcta: 0,
      explicacion: "Arriba la velocidad es cero (Ec = 0) y la altura es máxima, así que toda la energía es potencial. Abajo ocurre lo contrario: toda es cinética.",
      pasos: [
        { pre: "v = 0 arriba: ", math: "E_c = 0 \\Rightarrow E_m = E_p" }
      ]
    },

    {
      id: "e11",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Conservación · Reactivo 2 / 2",
      pregunta: "Se deja caer un objeto desde 20 m. ¿Con qué velocidad llega al suelo? (g = 10 m/s², sin fricción)",
      opciones: ["20 m/s", "200 m/s", "14.1 m/s", "40 m/s"],
      correcta: 0,
      explicacion: "Por conservación de energía, v = √(2gh) = √(2·10·20) = √400 = 20 m/s.",
      pasos: [
        { pre: "Conservación: ", math: "v = \\sqrt{2gh} = \\sqrt{2(10)(20)} = \\sqrt{400} = 20\\ \\tfrac{m}{s}" }
      ]
    },

    // ══ SUBTEMA 5 · POTENCIA ══════════════════════════════════════════════════
    {
      id: "potencia",
      tipo: "concepto",
      titulo: "Potencia",
      etiqueta: "Qué tan rápido se trabaja",
      formula: "P = \\dfrac{W}{t}",
      items: [
        { math: "P = \\dfrac{W}{t}", texto: "trabajo realizado por unidad de tiempo" },
        { math: "P = F\\,v", texto: "también: fuerza por velocidad" },
        { math: "[\\,P\\,] = \\text{W}", texto: "se mide en watts: 1 W = 1 J/s" }
      ],
      nota: "Dos máquinas pueden hacer el mismo trabajo, pero la más potente lo hace en menos tiempo. 1 caballo de fuerza (HP) equivale a unos 746 W."
    },

    // Ejemplo · Potencia
    {
      id: "ej-potencia",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Potencia",
      etiqueta: "Trabajo realizado por segundo",
      enunciado: "Un motor realiza 1500 J de trabajo en 5 s. ¿Cuál es su potencia?",
      math: "P = \\dfrac{W}{t}",
      por_que: "La potencia mide qué tan rápido se hace el trabajo: se divide el trabajo entre el tiempo. El resultado está en watts (1 W = 1 J/s).",
      math_razon: "P = \\dfrac{1500}{5} = 300\\ \\text{W}"
    },

    // Reactivos · Potencia
    {
      id: "e8",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Potencia · Reactivo 1 / 2",
      pregunta: "Una máquina realiza 600 J de trabajo en 3 s. ¿Cuál es su potencia?",
      opciones: ["200 W", "1800 W", "0.005 W", "603 W"],
      correcta: 0,
      explicacion: "P = W / t = 600 / 3 = 200 W.",
      pasos: [
        { pre: "Potencia: ", math: "P = \\dfrac{W}{t} = \\dfrac{600}{3} = 200\\ \\text{W}" }
      ]
    },

    {
      id: "e9",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Potencia · Reactivo 2 / 2",
      pregunta: "La potencia es una magnitud que mide:",
      opciones: ["La rapidez con que se realiza un trabajo", "La fuerza aplicada", "La energía total de un cuerpo", "La distancia recorrida"],
      correcta: 0,
      explicacion: "La potencia es el trabajo (o energía transferida) por unidad de tiempo: indica qué tan rápido se hace el trabajo.",
      pasos: [
        { pre: "Definición: ", math: "P = \\dfrac{W}{t}" }
      ]
    },

    // ══ SUBTEMA 6 · CANTIDAD DE MOVIMIENTO Y CHOQUES ══════════════════════════
    {
      id: "impetu",
      tipo: "criterio_detalle",
      titulo: "Cantidad de Movimiento (Ímpetu)",
      etiqueta: "Masa por velocidad",
      enunciado: "La cantidad de movimiento o ímpetu mide «cuánto movimiento» lleva un cuerpo. Es un vector que combina la masa y la velocidad. El impulso de una fuerza la cambia.",
      math: "\\vec{p} = m\\,\\vec{v}",
      por_que: "Cuesta más detener un objeto pesado o muy veloz: tiene más ímpetu. El impulso (fuerza por tiempo) es igual al cambio de cantidad de movimiento.",
      math_razon: "I = F\\,t = \\Delta p, \\qquad [\\,p\\,] = \\tfrac{\\text{kg}\\cdot\\text{m}}{\\text{s}}"
    },

    {
      id: "conservacion-momento",
      tipo: "criterio_detalle",
      titulo: "Conservación del Ímpetu y Choques",
      etiqueta: "El total se conserva",
      svgDiagram: "ene-momento",
      enunciado: "Si no hay fuerzas externas, la cantidad de movimiento total de un sistema antes y después de un choque es la misma. Es la clave para resolver colisiones y retrocesos.",
      math: "p_{antes} = p_{despues}",
      por_que: "En un choque elástico se conservan el ímpetu y la energía cinética; en uno inelástico solo el ímpetu (los cuerpos pueden quedar unidos). Igualando el ímpetu total se despeja la incógnita.",
      math_razon: "m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2'"
    },

    // Ejemplos · Cantidad de movimiento
    {
      id: "ej-impetu",
      tipo: "criterio_detalle",
      titulo: "Ejemplo 1 · Cantidad de movimiento",
      etiqueta: "Masa por velocidad",
      enunciado: "¿Cuál es la cantidad de movimiento de un balón de 0.5 kg que se mueve a 8 m/s?",
      math: "p = m\\,v",
      por_que: "El ímpetu es simplemente la masa por la velocidad. Sus unidades son kg·m/s. Es un vector que apunta en la dirección del movimiento.",
      math_razon: "p = (0.5)(8) = 4\\ \\tfrac{\\text{kg}\\cdot\\text{m}}{\\text{s}}"
    },

    {
      id: "ej-momento",
      tipo: "criterio_detalle",
      titulo: "Ejemplo 2 · Conservación del ímpetu",
      etiqueta: "Retroceso desde el reposo",
      svgDiagram: "ene-momento",
      enunciado: "Un niño de 30 kg está parado y en reposo sobre un carrito. Al saltar hacia adelante a 2 m/s, el carrito sale disparado hacia atrás a 12 m/s. ¿Cuál es la masa del carrito? (sin fricción)",
      math: "p_{antes} = p_{despues} = 0",
      por_que: "Al inicio todo está en reposo, así que el ímpetu total es cero. Después, el ímpetu del niño hacia adelante debe igualar al del carrito hacia atrás para que la suma siga siendo cero.",
      math_razon: "(30)(2) = m_c (12) \\;\\Rightarrow\\; m_c = \\dfrac{60}{12} = 5\\ \\text{kg}"
    },

    // Reactivos · Cantidad de movimiento
    {
      id: "e12",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Cantidad de movimiento · Reactivo 1 / 6",
      pregunta: "¿Cuál es la cantidad de movimiento de un objeto de 3 kg que viaja a 4 m/s?",
      opciones: ["12 kg·m/s", "0.75 kg·m/s", "7 kg·m/s", "24 kg·m/s"],
      correcta: 0,
      explicacion: "p = m·v = (3)(4) = 12 kg·m/s.",
      pasos: [
        { pre: "Ímpetu: ", math: "p = m v = (3)(4) = 12\\ \\tfrac{\\text{kg}\\cdot\\text{m}}{\\text{s}}" }
      ]
    },

    {
      id: "e13",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Cantidad de movimiento · Reactivo 2 / 6",
      pregunta: "¿En qué unidades se expresa la cantidad de movimiento?",
      opciones: ["kg·m/s", "N (newtons)", "J (joules)", "W (watts)"],
      correcta: 0,
      explicacion: "El ímpetu es masa por velocidad, así que sus unidades son kg·m/s.",
      pasos: [
        { pre: "p = m·v: ", math: "[\\,p\\,] = \\text{kg}\\cdot\\tfrac{\\text{m}}{\\text{s}}" }
      ]
    },

    {
      id: "e15",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Cantidad de movimiento · Reactivo 3 / 6",
      pregunta: "El impulso que recibe un objeto es igual a:",
      opciones: ["Su cambio de cantidad de movimiento", "Su energía cinética", "Su peso", "Su potencia"],
      correcta: 0,
      explicacion: "El impulso (fuerza × tiempo) es igual al cambio en la cantidad de movimiento: I = F·t = Δp.",
      pasos: [
        { pre: "Teorema del impulso: ", math: "I = F\\,t = \\Delta p" }
      ]
    },

    {
      id: "e14",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Cantidad de movimiento · Reactivo 4 / 6",
      pregunta: "En un choque entre dos cuerpos, si no actúan fuerzas externas, la cantidad de movimiento total del sistema:",
      opciones: ["Se conserva (es la misma antes y después)", "Siempre aumenta", "Siempre disminuye", "Se vuelve cero"],
      correcta: 0,
      explicacion: "Es el principio de conservación del ímpetu: sin fuerzas externas, el momento total antes del choque es igual al de después.",
      pasos: [
        { pre: "Conservación: ", math: "p_{antes} = p_{despues}" }
      ]
    },

    {
      id: "e16",
      tipo: "ejercicio",
      svgDiagram: "ene-momento",
      etiqueta: "Trabajo y Energía · Cantidad de movimiento · Reactivo 5 / 6",
      pregunta: "Un carrito de 2 kg que va a 3 m/s choca y queda unido a otro de 1 kg que estaba en reposo. ¿Con qué velocidad se mueven juntos?",
      opciones: ["2 m/s", "3 m/s", "1.5 m/s", "6 m/s"],
      correcta: 0,
      explicacion: "Choque inelástico: p antes = (2)(3) + (1)(0) = 6. Después la masa total es 3 kg: v = 6/3 = 2 m/s.",
      pasos: [
        { pre: "Conservación del ímpetu: ", math: "(2)(3) = (2+1)\\,v" },
        { pre: "Despejando: ", math: "v = \\dfrac{6}{3} = 2\\ \\tfrac{m}{s}" }
      ]
    },

    {
      id: "e18",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Cantidad de movimiento · Reactivo 6 / 6",
      pregunta: "En un choque perfectamente inelástico, los cuerpos después del impacto:",
      opciones: ["Quedan unidos y se mueven juntos", "Rebotan sin perder energía", "Se detienen siempre los dos", "Conservan su energía cinética total"],
      correcta: 0,
      explicacion: "En el choque perfectamente inelástico los objetos quedan pegados y se mueven con una velocidad común. Se conserva el ímpetu, pero no la energía cinética (parte se disipa).",
      pasos: [
        { pre: "Inelástico: ", math: "p\\ \\text{se conserva},\\quad E_c\\ \\text{no} " }
      ]
    },

    // ── RESUMEN ───────────────────────────────────────────────────────────────
    {
      id: "resumen",
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Trabajo, energía y conservación",
      puntos: [
        { math: "W = F d \\cos\\theta", texto: "trabajo: solo la fuerza en la dirección del movimiento" },
        { math: "E_c = \\tfrac12 m v^2", texto: "energía cinética: depende del cuadrado de la velocidad" },
        { math: "E_p = m g h", texto: "energía potencial gravitatoria: depende de la altura" },
        { math: "E_c + E_p = \\text{cte}", texto: "sin fricción, la energía mecánica se conserva" },
        { math: "P = \\tfrac{W}{t}", texto: "potencia: trabajo por unidad de tiempo (watts)" },
        { math: "p = m v", texto: "cantidad de movimiento o ímpetu (kg·m/s)" },
        { math: "p_{antes}=p_{despues}", texto: "se conserva en choques sin fuerzas externas" },
        { titulo: "Choques", texto: "elástico conserva Ec; inelástico, los cuerpos quedan unidos" }
      ]
    }

  ]
};
