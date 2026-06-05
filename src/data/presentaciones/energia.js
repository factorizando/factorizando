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

    // Reactivos · Trabajo (8)
    {
      id: "tr1",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Trabajo · Reactivo 1 / 8",
      pregunta: "El trabajo de una fuerza es máximo cuando la fuerza y el desplazamiento son:",
      opciones: ["Paralelos (misma dirección)", "Perpendiculares", "De sentido contrario", "Iguales en magnitud"],
      correcta: 0,
      explicacion: "W = F·d·cos θ. El coseno es máximo (vale 1) cuando θ = 0°, es decir, cuando la fuerza apunta en la misma dirección del movimiento.",
      pasos: [
        { pre: "Máximo coseno: ", math: "\\cos 0^\\circ = 1 \\Rightarrow W = F\\,d" }
      ]
    },

    {
      id: "tr2",
      tipo: "ejercicio",
      svgDiagram: "ene-trabajo",
      etiqueta: "Trabajo y Energía · Trabajo · Reactivo 2 / 8",
      pregunta: "Una fuerza de 50 N desplaza un objeto 4 m en su misma dirección. ¿Qué trabajo realiza?",
      opciones: ["200 J", "12.5 J", "54 J", "100 J"],
      correcta: 0,
      explicacion: "W = F·d = (50)(4) = 200 J.",
      pasos: [
        { pre: "Trabajo: ", math: "W = F\\,d = (50)(4) = 200\\ \\text{J}" }
      ]
    },

    {
      id: "tr3",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Trabajo · Reactivo 3 / 8",
      pregunta: "Caminas horizontalmente a velocidad constante cargando una maleta. ¿Qué trabajo realiza sobre la maleta la fuerza con que la sostienes?",
      opciones: ["Cero", "Igual a su peso", "Igual a su energía cinética", "Infinito"],
      correcta: 0,
      explicacion: "La fuerza que la sostiene es vertical (hacia arriba) y el desplazamiento es horizontal: son perpendiculares (θ = 90°, cos 90° = 0), así que el trabajo es cero.",
      pasos: [
        { pre: "Fuerza ⟂ desplazamiento: ", math: "W = F d \\cos 90^\\circ = 0" }
      ]
    },

    {
      id: "tr4",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Trabajo · Reactivo 4 / 8",
      pregunta: "¿Cuál es la unidad de trabajo y energía en el Sistema Internacional?",
      opciones: ["El joule (J)", "El watt (W)", "El newton (N)", "El pascal (Pa)"],
      correcta: 0,
      explicacion: "Tanto el trabajo como la energía se miden en joules. 1 J = 1 N·m. El watt es potencia.",
      pasos: [
        { pre: "Definición: ", math: "1\\ \\text{J} = 1\\ \\text{N}\\cdot\\text{m}" }
      ]
    },

    {
      id: "tr5",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Trabajo · Reactivo 5 / 8",
      pregunta: "Se tira de un trineo con una fuerza de 10 N que forma 60° con el suelo, desplazándolo 5 m. ¿Qué trabajo se realiza? (cos 60° = 0.5)",
      opciones: ["25 J", "50 J", "43.3 J", "5 J"],
      correcta: 0,
      explicacion: "W = F·d·cos θ = (10)(5)(cos 60°) = (10)(5)(0.5) = 25 J. Solo cuenta la componente horizontal de la fuerza.",
      pasos: [
        { pre: "Con ángulo: ", math: "W = F d \\cos\\theta = (10)(5)(0.5) = 25\\ \\text{J}" }
      ]
    },

    {
      id: "tr6",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Trabajo · Reactivo 6 / 8",
      pregunta: "Un bloque se desliza y la fricción actúa en sentido contrario a su movimiento. El trabajo que realiza la fricción es:",
      opciones: ["Negativo", "Positivo", "Cero", "Igual al peso"],
      correcta: 0,
      explicacion: "La fricción se opone al desplazamiento (θ = 180°, cos 180° = −1), por lo que su trabajo es negativo: le quita energía al cuerpo.",
      pasos: [
        { pre: "Sentido contrario: ", math: "W = F d \\cos 180^\\circ = -F\\,d" }
      ]
    },

    {
      id: "tr7",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Trabajo · Reactivo 7 / 8",
      pregunta: "Una fuerza desplaza un objeto 6 m en su dirección y realiza 300 J de trabajo. ¿Cuánto vale la fuerza?",
      opciones: ["50 N", "1800 N", "0.02 N", "306 N"],
      correcta: 0,
      explicacion: "De W = F·d se despeja F = W/d = 300/6 = 50 N.",
      pasos: [
        { pre: "Despejando: ", math: "F = \\dfrac{W}{d} = \\dfrac{300}{6} = 50\\ \\text{N}" }
      ]
    },

    {
      id: "tr8",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Trabajo · Reactivo 8 / 8",
      pregunta: "Un satélite describe una órbita circular alrededor de la Tierra. El trabajo que realiza la fuerza de gravedad sobre él es:",
      opciones: ["Cero", "Positivo y grande", "Negativo", "Igual a su energía cinética"],
      correcta: 0,
      explicacion: "En una órbita circular la gravedad apunta siempre hacia el centro, perpendicular a la velocidad (al desplazamiento). Al ser θ = 90°, el trabajo es cero.",
      pasos: [
        { pre: "Fuerza ⟂ trayectoria: ", math: "W = F d \\cos 90^\\circ = 0" }
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

    // Reactivos · Energía cinética (8)
    {
      id: "ec1",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Energía cinética · Reactivo 1 / 8",
      pregunta: "¿Cuál es la energía cinética de un objeto de 4 kg que se mueve a 5 m/s?",
      opciones: ["50 J", "20 J", "10 J", "100 J"],
      correcta: 0,
      explicacion: "Ec = ½·m·v² = ½(4)(5²) = ½(4)(25) = 50 J.",
      pasos: [
        { pre: "Energía cinética: ", math: "E_c = \\tfrac12 (4)(25) = 50\\ \\text{J}" }
      ]
    },

    {
      id: "ec2",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Energía cinética · Reactivo 2 / 8",
      pregunta: "Si la velocidad de un objeto se duplica, su energía cinética se vuelve:",
      opciones: ["El cuádruple", "El doble", "La mitad", "La misma"],
      correcta: 0,
      explicacion: "Como Ec = ½mv², la energía depende del cuadrado de la velocidad. Al duplicarla, se multiplica por 2² = 4.",
      pasos: [
        { pre: "v al cuadrado: ", math: "E_c \\propto v^2 \\Rightarrow (2)^2 = 4" }
      ]
    },

    {
      id: "ec3",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Energía cinética · Reactivo 3 / 8",
      pregunta: "Según el teorema del trabajo y la energía, el trabajo neto realizado sobre un objeto es igual a:",
      opciones: ["Su cambio de energía cinética", "Su energía potencial", "Su peso", "Su cantidad de movimiento"],
      correcta: 0,
      explicacion: "El trabajo neto se invierte en cambiar la rapidez del objeto: W_neto = ΔEc = Ec_final − Ec_inicial.",
      pasos: [
        { pre: "Teorema trabajo-energía: ", math: "W_{neto} = \\Delta E_c" }
      ]
    },

    {
      id: "ec4",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Energía cinética · Reactivo 4 / 8",
      pregunta: "¿Cuál es la energía cinética de un cuerpo de 10 kg que se mueve a 2 m/s?",
      opciones: ["20 J", "40 J", "10 J", "100 J"],
      correcta: 0,
      explicacion: "Ec = ½·m·v² = ½(10)(2²) = ½(10)(4) = 20 J.",
      pasos: [
        { pre: "Energía cinética: ", math: "E_c = \\tfrac12 (10)(4) = 20\\ \\text{J}" }
      ]
    },

    {
      id: "ec5",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Energía cinética · Reactivo 5 / 8",
      pregunta: "Si la velocidad de un objeto se triplica, su energía cinética se vuelve:",
      opciones: ["Nueve veces mayor", "El triple", "Seis veces mayor", "La misma"],
      correcta: 0,
      explicacion: "Como Ec depende de v², al triplicar la velocidad se multiplica por 3² = 9.",
      pasos: [
        { pre: "v al cuadrado: ", math: "E_c \\propto v^2 \\Rightarrow (3)^2 = 9" }
      ]
    },

    {
      id: "ec6",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Energía cinética · Reactivo 6 / 8",
      pregunta: "La energía cinética de un cuerpo depende de:",
      opciones: ["Su masa y el cuadrado de su velocidad", "Solo su masa", "Su altura sobre el suelo", "Su peso y el tiempo"],
      correcta: 0,
      explicacion: "Ec = ½mv²: intervienen la masa y la velocidad al cuadrado. La altura corresponde a la energía potencial, no a la cinética.",
      pasos: [
        { pre: "Fórmula: ", math: "E_c = \\tfrac12 m v^2" }
      ]
    },

    {
      id: "ec7",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Energía cinética · Reactivo 7 / 8",
      pregunta: "Un objeto de 2 kg tiene una energía cinética de 100 J. ¿Cuál es su velocidad?",
      opciones: ["10 m/s", "50 m/s", "100 m/s", "5 m/s"],
      correcta: 0,
      explicacion: "De Ec = ½mv² se despeja v = √(2Ec/m) = √(2·100/2) = √100 = 10 m/s.",
      pasos: [
        { pre: "Despejando v: ", math: "v = \\sqrt{\\dfrac{2 E_c}{m}} = \\sqrt{\\dfrac{200}{2}} = 10\\ \\tfrac{m}{s}" }
      ]
    },

    {
      id: "ec8",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Energía cinética · Reactivo 8 / 8",
      pregunta: "Dos cuerpos se mueven con la misma velocidad, pero uno tiene el doble de masa. Su energía cinética es:",
      opciones: ["El doble", "La misma", "El cuádruple", "La mitad"],
      correcta: 0,
      explicacion: "A igual velocidad, la energía cinética es proporcional a la masa. Si la masa se duplica, la energía cinética se duplica.",
      pasos: [
        { pre: "v constante: ", math: "E_c \\propto m \\Rightarrow 2m \\Rightarrow 2E_c" }
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

    // Reactivos · Energía potencial (6)
    {
      id: "ep1",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Energía potencial · Reactivo 1 / 6",
      pregunta: "¿Cuál es la energía potencial gravitatoria de un objeto de 2 kg situado a 10 m de altura? (g = 10 m/s²)",
      opciones: ["200 J", "20 J", "100 J", "5 J"],
      correcta: 0,
      explicacion: "Ep = m·g·h = (2)(10)(10) = 200 J.",
      pasos: [
        { pre: "Potencial gravitatoria: ", math: "E_p = mgh = (2)(10)(10) = 200\\ \\text{J}" }
      ]
    },

    {
      id: "ep2",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Energía potencial · Reactivo 2 / 6",
      pregunta: "Si se duplica la altura a la que está un objeto, su energía potencial gravitatoria:",
      opciones: ["Se duplica", "Se cuadruplica", "No cambia", "Se reduce a la mitad"],
      correcta: 0,
      explicacion: "En Ep = mgh la altura aparece a la primera potencia, así que la energía potencial es proporcional a la altura: al duplicar h, se duplica Ep.",
      pasos: [
        { pre: "Proporcional a h: ", math: "E_p \\propto h \\Rightarrow 2h \\Rightarrow 2E_p" }
      ]
    },

    {
      id: "ep3",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Energía potencial · Reactivo 3 / 6",
      pregunta: "¿Qué expresión corresponde a la energía potencial elástica de un resorte?",
      opciones: ["½ k x²", "m g h", "½ m v²", "F d"],
      correcta: 0,
      explicacion: "La energía almacenada en un resorte deformado es Ep = ½kx², donde k es la constante del resorte y x la deformación.",
      pasos: [
        { pre: "Elástica: ", math: "E_p = \\tfrac12 k x^2" }
      ]
    },

    {
      id: "ep4",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Energía potencial · Reactivo 4 / 6",
      pregunta: "Un objeto de 5 kg está a 4 m de altura. ¿Cuál es su energía potencial gravitatoria? (g = 10 m/s²)",
      opciones: ["200 J", "20 J", "100 J", "9 J"],
      correcta: 0,
      explicacion: "Ep = m·g·h = (5)(10)(4) = 200 J.",
      pasos: [
        { pre: "Potencial gravitatoria: ", math: "E_p = (5)(10)(4) = 200\\ \\text{J}" }
      ]
    },

    {
      id: "ep5",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Energía potencial · Reactivo 5 / 6",
      pregunta: "Un objeto de 3 kg tiene una energía potencial de 300 J. ¿A qué altura se encuentra? (g = 10 m/s²)",
      opciones: ["10 m", "30 m", "100 m", "3 m"],
      correcta: 0,
      explicacion: "De Ep = mgh se despeja h = Ep/(mg) = 300/(3·10) = 300/30 = 10 m.",
      pasos: [
        { pre: "Despejando h: ", math: "h = \\dfrac{E_p}{mg} = \\dfrac{300}{30} = 10\\ \\text{m}" }
      ]
    },

    {
      id: "ep6",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Energía potencial · Reactivo 6 / 6",
      pregunta: "Cuando un objeto cae libremente, su energía potencial gravitatoria se transforma principalmente en energía:",
      opciones: ["Cinética", "Elástica", "Química", "Nuclear"],
      correcta: 0,
      explicacion: "Al caer, el objeto pierde altura (disminuye Ep) y gana rapidez (aumenta Ec): la energía potencial se convierte en cinética.",
      pasos: [
        { pre: "Transformación: ", math: "E_p \\rightarrow E_c" }
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

    // Reactivos · Conservación de la energía (8)
    {
      id: "cs1",
      tipo: "ejercicio",
      svgDiagram: "ene-conservacion",
      etiqueta: "Trabajo y Energía · Conservación · Reactivo 1 / 8",
      pregunta: "En el punto más alto de la trayectoria de un péndulo (donde se detiene un instante), su energía es:",
      opciones: ["Toda potencial", "Toda cinética", "Cero", "Mitad cinética y mitad potencial"],
      correcta: 0,
      explicacion: "Arriba la velocidad es cero (Ec = 0) y la altura es máxima, así que toda la energía es potencial. Abajo ocurre lo contrario: toda es cinética.",
      pasos: [
        { pre: "v = 0 arriba: ", math: "E_c = 0 \\Rightarrow E_m = E_p" }
      ]
    },

    {
      id: "cs2",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Conservación · Reactivo 2 / 8",
      pregunta: "Se deja caer un objeto desde 20 m. ¿Con qué velocidad llega al suelo? (g = 10 m/s², sin fricción)",
      opciones: ["20 m/s", "200 m/s", "14.1 m/s", "40 m/s"],
      correcta: 0,
      explicacion: "Por conservación de energía, v = √(2gh) = √(2·10·20) = √400 = 20 m/s.",
      pasos: [
        { pre: "Conservación: ", math: "v = \\sqrt{2gh} = \\sqrt{2(10)(20)} = \\sqrt{400} = 20\\ \\tfrac{m}{s}" }
      ]
    },

    {
      id: "cs3",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Conservación · Reactivo 3 / 8",
      pregunta: "Se deja caer un objeto desde 5 m. ¿Con qué velocidad llega al suelo? (g = 10 m/s², sin fricción)",
      opciones: ["10 m/s", "5 m/s", "50 m/s", "25 m/s"],
      correcta: 0,
      explicacion: "v = √(2gh) = √(2·10·5) = √100 = 10 m/s.",
      pasos: [
        { pre: "Conservación: ", math: "v = \\sqrt{2(10)(5)} = \\sqrt{100} = 10\\ \\tfrac{m}{s}" }
      ]
    },

    {
      id: "cs4",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Conservación · Reactivo 4 / 8",
      pregunta: "Dos objetos de distinta masa se sueltan desde la misma altura sin fricción. Al llegar al suelo, sus velocidades:",
      opciones: ["Son iguales", "Es mayor la del más pesado", "Es mayor la del más ligero", "Dependen del peso"],
      correcta: 0,
      explicacion: "En v = √(2gh) la masa se cancela: la velocidad de caída no depende de la masa, solo de la altura. Ambos llegan con la misma rapidez.",
      pasos: [
        { pre: "La masa se cancela: ", math: "v = \\sqrt{2gh}" }
      ]
    },

    {
      id: "cs5",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Conservación · Reactivo 5 / 8",
      pregunta: "El principio de conservación de la energía establece que la energía:",
      opciones: ["No se crea ni se destruye, solo se transforma", "Siempre aumenta", "Se destruye al usarse", "Solo existe como calor"],
      correcta: 0,
      explicacion: "La energía total de un sistema aislado se mantiene constante: puede cambiar de forma (cinética, potencial, calor…) pero la cantidad total no varía.",
      pasos: [
        { pre: "Principio: ", math: "E_{total} = \\text{constante}" }
      ]
    },

    {
      id: "cs6",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Conservación · Reactivo 6 / 8",
      pregunta: "En una montaña rusa sin fricción, ¿en qué punto la velocidad del carro es máxima?",
      opciones: ["En el punto más bajo", "En el punto más alto", "A media altura", "La velocidad es constante"],
      correcta: 0,
      explicacion: "En el punto más bajo la altura es mínima, así que la energía potencial es mínima y la cinética máxima: ahí la velocidad es máxima.",
      pasos: [
        { pre: "h mínima: ", math: "E_p\\ \\text{mín} \\Rightarrow E_c\\ \\text{máx}" }
      ]
    },

    {
      id: "cs7",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Conservación · Reactivo 7 / 8",
      pregunta: "Cuando hay fricción, parte de la energía mecánica de un cuerpo se transforma en:",
      opciones: ["Calor", "Más energía potencial", "Masa", "Trabajo positivo extra"],
      correcta: 0,
      explicacion: "La fricción disipa energía mecánica convirtiéndola en calor (energía térmica); por eso, con fricción, la energía mecánica no se conserva.",
      pasos: [
        { pre: "Disipación: ", math: "E_{mec} \\rightarrow \\text{calor}" }
      ]
    },

    {
      id: "cs8",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Conservación · Reactivo 8 / 8",
      pregunta: "Un objeto cae libremente sin fricción. Cuando ha descendido la mitad de su altura inicial, su energía cinética es:",
      opciones: ["Igual a su energía potencial", "El doble de su potencial", "Cero", "Igual a la energía mecánica total"],
      correcta: 0,
      explicacion: "A la mitad de la altura ya se convirtió la mitad de la energía potencial inicial en cinética, así que en ese punto Ec = Ep (cada una es la mitad de la energía total).",
      pasos: [
        { pre: "Mitad convertida: ", math: "E_c = E_p = \\tfrac12 E_m" }
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

    // Reactivos · Potencia (7)
    {
      id: "po1",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Potencia · Reactivo 1 / 7",
      pregunta: "Una máquina realiza 600 J de trabajo en 3 s. ¿Cuál es su potencia?",
      opciones: ["200 W", "1800 W", "0.005 W", "603 W"],
      correcta: 0,
      explicacion: "P = W / t = 600 / 3 = 200 W.",
      pasos: [
        { pre: "Potencia: ", math: "P = \\dfrac{W}{t} = \\dfrac{600}{3} = 200\\ \\text{W}" }
      ]
    },

    {
      id: "po2",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Potencia · Reactivo 2 / 7",
      pregunta: "La potencia es una magnitud que mide:",
      opciones: ["La rapidez con que se realiza un trabajo", "La fuerza aplicada", "La energía total de un cuerpo", "La distancia recorrida"],
      correcta: 0,
      explicacion: "La potencia es el trabajo (o energía transferida) por unidad de tiempo: indica qué tan rápido se hace el trabajo.",
      pasos: [
        { pre: "Definición: ", math: "P = \\dfrac{W}{t}" }
      ]
    },

    {
      id: "po3",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Potencia · Reactivo 3 / 7",
      pregunta: "Un motor realiza 1000 J de trabajo en 4 s. ¿Cuál es su potencia?",
      opciones: ["250 W", "4000 W", "996 W", "0.004 W"],
      correcta: 0,
      explicacion: "P = W / t = 1000 / 4 = 250 W.",
      pasos: [
        { pre: "Potencia: ", math: "P = \\dfrac{1000}{4} = 250\\ \\text{W}" }
      ]
    },

    {
      id: "po4",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Potencia · Reactivo 4 / 7",
      pregunta: "¿Cuál es la unidad de potencia en el Sistema Internacional?",
      opciones: ["El watt (1 W = 1 J/s)", "El joule", "El newton", "El kilogramo"],
      correcta: 0,
      explicacion: "La potencia se mide en watts. Un watt equivale a un joule por segundo: 1 W = 1 J/s.",
      pasos: [
        { pre: "Definición: ", math: "1\\ \\text{W} = 1\\ \\tfrac{\\text{J}}{\\text{s}}" }
      ]
    },

    {
      id: "po5",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Potencia · Reactivo 5 / 7",
      pregunta: "Un auto avanza a 5 m/s mientras el motor ejerce una fuerza de 100 N. ¿Qué potencia desarrolla?",
      opciones: ["500 W", "20 W", "105 W", "0.05 W"],
      correcta: 0,
      explicacion: "Cuando la fuerza es constante, P = F·v = (100)(5) = 500 W.",
      pasos: [
        { pre: "Fuerza por velocidad: ", math: "P = F\\,v = (100)(5) = 500\\ \\text{W}" }
      ]
    },

    {
      id: "po6",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Potencia · Reactivo 6 / 7",
      pregunta: "Una máquina de 200 W trabaja durante 10 s. ¿Cuánto trabajo realiza?",
      opciones: ["2000 J", "20 J", "210 J", "0.05 J"],
      correcta: 0,
      explicacion: "De P = W/t se despeja W = P·t = (200)(10) = 2000 J.",
      pasos: [
        { pre: "Despejando W: ", math: "W = P\\,t = (200)(10) = 2000\\ \\text{J}" }
      ]
    },

    {
      id: "po7",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Potencia · Reactivo 7 / 7",
      pregunta: "Dos motores realizan el mismo trabajo, pero uno tarda menos tiempo. El que tarda menos es:",
      opciones: ["El más potente", "El menos potente", "Igual de potente", "El que gasta más energía"],
      correcta: 0,
      explicacion: "Como P = W/t, a igual trabajo, menor tiempo significa mayor potencia. El motor más rápido es el más potente.",
      pasos: [
        { pre: "Mismo W, menor t: ", math: "P = \\dfrac{W}{t} \\Rightarrow t \\downarrow \\Rightarrow P \\uparrow" }
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

    // Reactivos · Cantidad de movimiento (9)
    {
      id: "cm1",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Cantidad de movimiento · Reactivo 1 / 9",
      pregunta: "¿Cuál es la cantidad de movimiento de un objeto de 3 kg que viaja a 4 m/s?",
      opciones: ["12 kg·m/s", "0.75 kg·m/s", "7 kg·m/s", "24 kg·m/s"],
      correcta: 0,
      explicacion: "p = m·v = (3)(4) = 12 kg·m/s.",
      pasos: [
        { pre: "Ímpetu: ", math: "p = m v = (3)(4) = 12\\ \\tfrac{\\text{kg}\\cdot\\text{m}}{\\text{s}}" }
      ]
    },

    {
      id: "cm2",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Cantidad de movimiento · Reactivo 2 / 9",
      pregunta: "¿En qué unidades se expresa la cantidad de movimiento?",
      opciones: ["kg·m/s", "N (newtons)", "J (joules)", "W (watts)"],
      correcta: 0,
      explicacion: "El ímpetu es masa por velocidad, así que sus unidades son kg·m/s.",
      pasos: [
        { pre: "p = m·v: ", math: "[\\,p\\,] = \\text{kg}\\cdot\\tfrac{\\text{m}}{\\text{s}}" }
      ]
    },

    {
      id: "cm3",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Cantidad de movimiento · Reactivo 3 / 9",
      pregunta: "El impulso que recibe un objeto es igual a:",
      opciones: ["Su cambio de cantidad de movimiento", "Su energía cinética", "Su peso", "Su potencia"],
      correcta: 0,
      explicacion: "El impulso (fuerza × tiempo) es igual al cambio en la cantidad de movimiento: I = F·t = Δp.",
      pasos: [
        { pre: "Teorema del impulso: ", math: "I = F\\,t = \\Delta p" }
      ]
    },

    {
      id: "cm4",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Cantidad de movimiento · Reactivo 4 / 9",
      pregunta: "En un choque entre dos cuerpos, si no actúan fuerzas externas, la cantidad de movimiento total del sistema:",
      opciones: ["Se conserva (es la misma antes y después)", "Siempre aumenta", "Siempre disminuye", "Se vuelve cero"],
      correcta: 0,
      explicacion: "Es el principio de conservación del ímpetu: sin fuerzas externas, el momento total antes del choque es igual al de después.",
      pasos: [
        { pre: "Conservación: ", math: "p_{antes} = p_{despues}" }
      ]
    },

    {
      id: "cm5",
      tipo: "ejercicio",
      svgDiagram: "ene-momento",
      etiqueta: "Trabajo y Energía · Cantidad de movimiento · Reactivo 5 / 9",
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
      id: "cm6",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Cantidad de movimiento · Reactivo 6 / 9",
      pregunta: "En un choque perfectamente inelástico, los cuerpos después del impacto:",
      opciones: ["Quedan unidos y se mueven juntos", "Rebotan sin perder energía", "Se detienen siempre los dos", "Conservan su energía cinética total"],
      correcta: 0,
      explicacion: "En el choque perfectamente inelástico los objetos quedan pegados y se mueven con una velocidad común. Se conserva el ímpetu, pero no la energía cinética (parte se disipa).",
      pasos: [
        { pre: "Inelástico: ", math: "p\\ \\text{se conserva},\\quad E_c\\ \\text{no} " }
      ]
    },

    {
      id: "cm7",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Cantidad de movimiento · Reactivo 7 / 9",
      pregunta: "¿Cuál es la cantidad de movimiento de un balón de 0.5 kg que se mueve a 10 m/s?",
      opciones: ["5 kg·m/s", "20 kg·m/s", "10.5 kg·m/s", "0.05 kg·m/s"],
      correcta: 0,
      explicacion: "p = m·v = (0.5)(10) = 5 kg·m/s.",
      pasos: [
        { pre: "Ímpetu: ", math: "p = m v = (0.5)(10) = 5\\ \\tfrac{\\text{kg}\\cdot\\text{m}}{\\text{s}}" }
      ]
    },

    {
      id: "cm8",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Cantidad de movimiento · Reactivo 8 / 9",
      pregunta: "En un choque perfectamente elástico se conservan:",
      opciones: ["La cantidad de movimiento y la energía cinética", "Solo la cantidad de movimiento", "Solo la energía cinética", "Ni el ímpetu ni la energía"],
      correcta: 0,
      explicacion: "El choque elástico es aquel en el que se conservan tanto el ímpetu como la energía cinética total del sistema; los cuerpos rebotan sin disipar energía.",
      pasos: [
        { pre: "Elástico: ", math: "p\\ \\text{y}\\ E_c\\ \\text{se conservan}" }
      ]
    },

    {
      id: "cm9",
      tipo: "ejercicio",
      etiqueta: "Trabajo y Energía · Cantidad de movimiento · Reactivo 9 / 9",
      pregunta: "Un airbag protege al conductor porque, al alargar el tiempo del impacto, logra que la fuerza sobre él sea:",
      opciones: ["Menor", "Mayor", "Igual", "Infinita"],
      correcta: 0,
      explicacion: "Como I = F·t = Δp, para un mismo cambio de cantidad de movimiento, aumentar el tiempo de contacto reduce la fuerza que actúa sobre el cuerpo.",
      pasos: [
        { pre: "Impulso constante: ", math: "F\\,t = \\Delta p \\Rightarrow t \\uparrow \\Rightarrow F \\downarrow" }
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
