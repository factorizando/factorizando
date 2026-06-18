// Datos de la presentación: Electricidad y Magnetismo (Física · UNAM)
// Estructura por subtema: Teoría → Ejemplos resueltos → Reactivos tipo UNAM.
// Subtemas: Carga · Coulomb · Corriente · Ohm · Circuitos · Potencia · Magnetismo → Resumen.

export const PRESENTACION = {
  id: "electricidad",
  titulo: "Electricidad y Magnetismo",
  materia: "Física",
  subtema: "Electromagnetismo",
  slides: [

    // ── PORTADA ───────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Electricidad y Magnetismo",
      subtitulo: "Carga, Ley de Coulomb, Ley de Ohm, circuitos, potencia y magnetismo",
      etiqueta: "Física · UNAM",
      svgDiagram: "ele-portada",
    },

    // ══ SUBTEMA 1 · CARGA ELÉCTRICA ═══════════════════════════════════════════
    {
      id: "carga",
      tipo: "concepto",
      titulo: "Carga Eléctrica",
      etiqueta: "Positiva y negativa",
      formula: "[\\,q\\,] = \\text{C (coulomb)}",
      svgDiagram: "ele-coulomb",
      items: [
        { math: "+\\ \\text{y}\\ -", texto: "hay dos tipos de carga: positiva y negativa" },
        { math: "\\text{igual} \\to \\text{repele}", texto: "cargas del mismo signo se repelen" },
        { math: "\\text{distinto} \\to \\text{atrae}", texto: "cargas de signo contrario se atraen" },
        { math: "\\text{se conserva}", texto: "la carga total no se crea ni se destruye" }
      ],
      nota: "La unidad de carga es el coulomb (C). Los materiales conductores (metales) dejan fluir las cargas; los aislantes (plástico, vidrio) no."
    },

    // Ejemplo · Carga eléctrica
    {
      id: "ej-carga",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Atracción y repulsión",
      etiqueta: "El signo decide la fuerza",
      svgDiagram: "ele-coulomb",
      enunciado: "Frotas dos globos con tu cabello y ambos quedan cargados negativamente. Al acercarlos, ¿se atraen o se repelen?",
      math: "\\text{igual} \\to \\text{repele}, \\quad \\text{distinto} \\to \\text{atrae}",
      por_que: "Las dos cargas son del mismo signo (ambos globos negativos), así que se repelen y los globos tienden a separarse. Solo cargas de signo contrario se atraerían.",
      math_razon: "(-)\\ \\text{y}\\ (-) \\Rightarrow \\text{se repelen}"
    },

    // Reactivos · Carga eléctrica
    {
      id: "el1",
      tipo: "ejercicio",
      svgDiagram: "ele-coulomb",
      etiqueta: "Electricidad · Carga eléctrica · Reactivo 1 / 4",
      pregunta: "Dos cargas eléctricas del mismo signo, al acercarse:",
      opciones: ["Se repelen", "Se atraen", "No interactúan", "Se neutralizan"],
      correcta: 0,
      explicacion: "Cargas del mismo signo (ambas + o ambas −) se repelen. Solo las de signo opuesto se atraen.",
      pasos: [
        { pre: "Mismo signo: ", math: "\\text{repulsión}" }
      ]
    },

    {
      id: "el2",
      tipo: "ejercicio",
      etiqueta: "Electricidad · Carga eléctrica · Reactivo 2 / 4",
      pregunta: "Una carga positiva y una negativa colocadas cerca:",
      opciones: ["Se atraen", "Se repelen", "Permanecen inmóviles", "Pierden su carga"],
      correcta: 0,
      explicacion: "Las cargas de signo contrario se atraen. Es el principio detrás de muchísimos fenómenos eléctricos.",
      pasos: [
        { pre: "Signos opuestos: ", math: "\\text{atracción}" }
      ]
    },

    {
      id: "el4",
      tipo: "ejercicio",
      etiqueta: "Electricidad · Carga eléctrica · Reactivo 3 / 4",
      pregunta: "¿En qué unidad se mide la carga eléctrica?",
      opciones: ["Coulomb (C)", "Ampere (A)", "Volt (V)", "Ohm (Ω)"],
      correcta: 0,
      explicacion: "La carga eléctrica se mide en coulombs (C). El ampere mide corriente, el volt voltaje y el ohm resistencia.",
      pasos: [
        { pre: "Unidad de carga: ", math: "[\\,q\\,] = \\text{C}" }
      ]
    },

    {
      id: "el16",
      tipo: "ejercicio",
      etiqueta: "Electricidad · Carga eléctrica · Reactivo 4 / 4",
      pregunta: "Un material que permite el paso fácil de la corriente eléctrica es un:",
      opciones: ["Conductor", "Aislante", "Dieléctrico", "Imán"],
      correcta: 0,
      explicacion: "Los conductores (como los metales) dejan fluir las cargas con facilidad. Los aislantes (plástico, vidrio) se oponen a su paso.",
      pasos: [
        { pre: "Deja fluir cargas: ", math: "\\text{conductor}" }
      ]
    },

    // ══ SUBTEMA 2 · LEY DE COULOMB ════════════════════════════════════════════
    {
      id: "coulomb",
      tipo: "criterio_detalle",
      titulo: "Ley de Coulomb",
      etiqueta: "La fuerza entre cargas",
      svgDiagram: "ele-coulomb",
      enunciado: "La fuerza eléctrica entre dos cargas es proporcional al producto de las cargas e inversamente proporcional al cuadrado de la distancia que las separa.",
      math: "F = k\\,\\dfrac{q_1\\,q_2}{r^2}",
      por_que: "Tiene la misma forma que la gravitación: si la distancia se duplica, la fuerza baja a la cuarta parte. La constante k vale aproximadamente 9 × 10⁹ N·m²/C².",
      math_razon: "r \\to 2r \\;\\Rightarrow\\; F \\to \\dfrac{F}{4}"
    },

    // Ejemplo · Ley de Coulomb
    {
      id: "ej-coulomb",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Ley de Coulomb",
      etiqueta: "Fuerza entre dos cargas",
      svgDiagram: "ele-coulomb",
      enunciado: "Dos cargas de 2 × 10⁻⁶ C y 3 × 10⁻⁶ C están separadas 0.10 m. ¿Cuál es la fuerza eléctrica entre ellas? (k = 9 × 10⁹ N·m²/C²)",
      math: "F = k\\,\\dfrac{q_1 q_2}{r^2}",
      por_que: "Se sustituyen las cargas, la distancia (al cuadrado) y la constante k. El producto de las cargas va en el numerador y el cuadrado de la distancia en el denominador.",
      math_razon: "F = (9\\times 10^9)\\dfrac{(2\\times 10^{-6})(3\\times 10^{-6})}{(0.1)^2} = 5.4\\ \\text{N}"
    },

    // Reactivos · Ley de Coulomb
    {
      id: "el3",
      tipo: "ejercicio",
      svgDiagram: "ele-coulomb",
      etiqueta: "Electricidad · Ley de Coulomb · Reactivo 1 / 1",
      pregunta: "Según la ley de Coulomb, si se duplica la distancia entre dos cargas, la fuerza entre ellas se vuelve:",
      opciones: ["La cuarta parte", "La mitad", "El doble", "El cuádruple"],
      correcta: 0,
      explicacion: "La fuerza es inversamente proporcional al cuadrado de la distancia. Al duplicar r, se divide entre 2² = 4.",
      pasos: [
        { pre: "Inverso del cuadrado: ", math: "F \\propto \\dfrac{1}{r^2} \\Rightarrow \\dfrac{1}{4}" }
      ]
    },

    // ══ SUBTEMA 3 · CORRIENTE ELÉCTRICA ═══════════════════════════════════════
    {
      id: "corriente",
      tipo: "concepto",
      titulo: "Corriente Eléctrica",
      etiqueta: "Cargas en movimiento",
      formula: "I = \\dfrac{Q}{t}",
      items: [
        { math: "I", texto: "corriente: carga que pasa por unidad de tiempo" },
        { math: "[\\,I\\,] = \\text{A}", texto: "se mide en amperes: 1 A = 1 C/s" },
        { math: "V", texto: "voltaje o diferencia de potencial: «empuja» a las cargas (volts)" }
      ],
      nota: "El voltaje es como la «presión» que impulsa a las cargas por el circuito; la corriente es el flujo de esas cargas. Sin diferencia de potencial no hay corriente."
    },

    // Ejemplo · Corriente eléctrica
    {
      id: "ej-corriente",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Corriente eléctrica",
      etiqueta: "Carga que fluye por segundo",
      enunciado: "Por un cable pasan 60 C de carga en 12 s. ¿Cuál es la corriente eléctrica?",
      math: "I = \\dfrac{Q}{t}",
      por_que: "La corriente es la carga dividida entre el tiempo que tarda en pasar. El resultado está en amperes (1 A = 1 C/s).",
      math_razon: "I = \\dfrac{60}{12} = 5\\ \\text{A}"
    },

    // Reactivos · Corriente eléctrica
    {
      id: "el5",
      tipo: "ejercicio",
      etiqueta: "Electricidad · Corriente eléctrica · Reactivo 1 / 2",
      pregunta: "La corriente eléctrica se define como:",
      opciones: ["La carga que fluye por unidad de tiempo", "La resistencia del cable", "La energía almacenada", "El número de cargas en reposo"],
      correcta: 0,
      explicacion: "La corriente es la cantidad de carga que atraviesa un punto por segundo: I = Q/t.",
      pasos: [
        { pre: "Definición: ", math: "I = \\dfrac{Q}{t}" }
      ]
    },

    {
      id: "el6",
      tipo: "ejercicio",
      etiqueta: "Electricidad · Corriente eléctrica · Reactivo 2 / 2",
      pregunta: "¿En qué unidad se mide la corriente eléctrica?",
      opciones: ["Ampere (A)", "Volt (V)", "Watt (W)", "Coulomb (C)"],
      correcta: 0,
      explicacion: "La corriente se mide en amperes. 1 A equivale a 1 coulomb por segundo.",
      pasos: [
        { pre: "Definición: ", math: "1\\ \\text{A} = 1\\ \\tfrac{\\text{C}}{\\text{s}}" }
      ]
    },

    // ══ SUBTEMA 4 · LEY DE OHM ════════════════════════════════════════════════
    {
      id: "ohm",
      tipo: "criterio_detalle",
      titulo: "Ley de Ohm",
      etiqueta: "Voltaje, corriente y resistencia",
      svgDiagram: "ele-circuito",
      enunciado: "En muchos materiales, el voltaje aplicado es igual a la corriente por la resistencia. La resistencia se opone al paso de la corriente.",
      math: "V = I\\,R",
      por_que: "Con un mismo voltaje, a mayor resistencia menor corriente. La resistencia se mide en ohms (Ω). De aquí se despeja cualquiera de las tres cantidades.",
      math_razon: "I = \\dfrac{V}{R}, \\qquad R = \\dfrac{V}{I}"
    },

    // Ejemplo · Ley de Ohm
    {
      id: "ej-ohm",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Ley de Ohm",
      etiqueta: "Hallar el voltaje",
      svgDiagram: "ele-circuito",
      enunciado: "Por un cable con resistencia de 10 Ω circula una corriente de 10 A. ¿Cuál es el voltaje en el cable?",
      math: "V = I\\,R",
      por_que: "La ley de Ohm relaciona las tres cantidades directamente. Solo se multiplican la corriente y la resistencia.",
      math_razon: "V = (10)(10) = 100\\ \\text{V}"
    },

    // Reactivos · Ley de Ohm
    {
      id: "el7",
      tipo: "ejercicio",
      svgDiagram: "ele-circuito",
      etiqueta: "Electricidad · Ley de Ohm · Reactivo 1 / 3",
      pregunta: "Si a una resistencia de 4 Ω se le aplica un voltaje de 12 V, ¿qué corriente circula?",
      opciones: ["3 A", "48 A", "0.33 A", "8 A"],
      correcta: 0,
      explicacion: "De la ley de Ohm, I = V/R = 12/4 = 3 A.",
      pasos: [
        { pre: "Ley de Ohm: ", math: "I = \\dfrac{V}{R} = \\dfrac{12}{4} = 3\\ \\text{A}" }
      ]
    },

    {
      id: "el8",
      tipo: "ejercicio",
      svgDiagram: "ele-circuito",
      etiqueta: "Electricidad · Ley de Ohm · Reactivo 2 / 3",
      pregunta: "Por un cable de resistencia 10 Ω circula una corriente de 10 A. ¿Cuál es el voltaje?",
      opciones: ["100 V", "1 V", "20 V", "10 V"],
      correcta: 0,
      explicacion: "V = I·R = (10)(10) = 100 V.",
      pasos: [
        { pre: "Ley de Ohm: ", math: "V = I R = (10)(10) = 100\\ \\text{V}" }
      ]
    },

    {
      id: "el9",
      tipo: "ejercicio",
      etiqueta: "Electricidad · Ley de Ohm · Reactivo 3 / 3",
      pregunta: "Si un voltaje de 20 V produce una corriente de 4 A, ¿cuál es la resistencia?",
      opciones: ["5 Ω", "80 Ω", "0.2 Ω", "24 Ω"],
      correcta: 0,
      explicacion: "R = V/I = 20/4 = 5 Ω.",
      pasos: [
        { pre: "Ley de Ohm: ", math: "R = \\dfrac{V}{I} = \\dfrac{20}{4} = 5\\ \\Omega" }
      ]
    },

    // ══ SUBTEMA 5 · CIRCUITOS EN SERIE Y PARALELO ═════════════════════════════
    {
      id: "circuitos",
      tipo: "criterio_detalle",
      titulo: "Circuitos en Serie y Paralelo",
      etiqueta: "Resistencia equivalente",
      svgDiagram: "ele-serie-paralelo",
      enunciado: "Las resistencias se pueden conectar una tras otra (serie) o en ramas separadas (paralelo). Cada arreglo combina la resistencia de forma distinta.",
      math: "R_{serie} = R_1 + R_2 + \\cdots",
      por_que: "En serie la corriente es la misma en todos y las resistencias se suman. En paralelo el voltaje es el mismo en cada rama y la resistencia total es menor que la más pequeña.",
      math_razon: "\\dfrac{1}{R_{paralelo}} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\cdots"
    },

    // Ejemplos · Circuitos
    {
      id: "ej-serie",
      tipo: "criterio_detalle",
      titulo: "Ejemplo 1 · Resistencias en serie",
      etiqueta: "Se suman",
      enunciado: "Dos resistencias de 4 Ω y 6 Ω se conectan en serie. ¿Cuál es la resistencia total?",
      math: "R_{serie} = R_1 + R_2",
      por_que: "En serie las resistencias se suman directamente, porque la corriente debe atravesarlas una tras otra.",
      math_razon: "R = 4 + 6 = 10\\ \\Omega"
    },

    {
      id: "ej-paralelo",
      tipo: "criterio_detalle",
      titulo: "Ejemplo 2 · Resistencias en paralelo",
      etiqueta: "La total baja",
      svgDiagram: "ele-serie-paralelo",
      enunciado: "Dos resistencias iguales de 6 Ω se conectan en paralelo. ¿Cuál es la resistencia equivalente?",
      math: "\\dfrac{1}{R} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2}",
      por_que: "En paralelo se suman los inversos. Para dos resistencias iguales, el resultado es la mitad de una. Siempre es menor que la más pequeña.",
      math_razon: "\\dfrac{1}{R} = \\dfrac{1}{6} + \\dfrac{1}{6} = \\dfrac{2}{6} \\;\\Rightarrow\\; R = 3\\ \\Omega"
    },

    // Reactivos · Circuitos
    {
      id: "el10",
      tipo: "ejercicio",
      svgDiagram: "ele-serie-paralelo",
      etiqueta: "Electricidad · Circuitos · Reactivo 1 / 4",
      pregunta: "Tres resistencias de 2 Ω, 3 Ω y 5 Ω se conectan en serie. ¿Cuál es la resistencia total?",
      opciones: ["10 Ω", "0.97 Ω", "30 Ω", "3.3 Ω"],
      correcta: 0,
      explicacion: "En serie se suman: R = 2 + 3 + 5 = 10 Ω.",
      pasos: [
        { pre: "Serie: ", math: "R = 2 + 3 + 5 = 10\\ \\Omega" }
      ]
    },

    {
      id: "el11",
      tipo: "ejercicio",
      svgDiagram: "ele-serie-paralelo",
      etiqueta: "Electricidad · Circuitos · Reactivo 2 / 4",
      pregunta: "Dos resistencias de 4 Ω se conectan en paralelo. ¿Cuál es la resistencia equivalente?",
      opciones: ["2 Ω", "8 Ω", "4 Ω", "16 Ω"],
      correcta: 0,
      explicacion: "Para dos resistencias iguales en paralelo, la equivalente es la mitad: 4/2 = 2 Ω.",
      pasos: [
        { pre: "Paralelo: ", math: "\\dfrac{1}{R} = \\dfrac{1}{4} + \\dfrac{1}{4} = \\dfrac{1}{2} \\Rightarrow R = 2\\ \\Omega" }
      ]
    },

    {
      id: "el12",
      tipo: "ejercicio",
      etiqueta: "Electricidad · Circuitos · Reactivo 3 / 4",
      pregunta: "En un circuito en serie, la corriente eléctrica:",
      opciones: ["Es la misma en todos los elementos", "Se divide entre los elementos", "Es cero", "Aumenta en cada resistencia"],
      correcta: 0,
      explicacion: "En serie hay un solo camino, así que la misma corriente pasa por todos los componentes. Lo que se reparte es el voltaje.",
      pasos: [
        { pre: "Serie: ", math: "I_1 = I_2 = I_3" }
      ]
    },

    {
      id: "el13",
      tipo: "ejercicio",
      etiqueta: "Electricidad · Circuitos · Reactivo 4 / 4",
      pregunta: "En un circuito en paralelo, el voltaje en cada rama:",
      opciones: ["Es el mismo en todas las ramas", "Se divide entre las ramas", "Es siempre cero", "Aumenta en cada rama"],
      correcta: 0,
      explicacion: "En paralelo todas las ramas están conectadas a los mismos dos puntos, así que comparten el mismo voltaje. Lo que se reparte es la corriente.",
      pasos: [
        { pre: "Paralelo: ", math: "V_1 = V_2 = V_3" }
      ]
    },

    // ══ SUBTEMA 6 · POTENCIA ELÉCTRICA ════════════════════════════════════════
    {
      id: "potencia",
      tipo: "concepto",
      titulo: "Potencia Eléctrica",
      etiqueta: "Energía por segundo",
      formula: "P = V\\,I",
      items: [
        { math: "P = V I", texto: "potencia: voltaje por corriente" },
        { math: "P = I^2 R", texto: "también, en términos de la resistencia" },
        { math: "[\\,P\\,] = \\text{W}", texto: "se mide en watts (W)" }
      ],
      nota: "La potencia indica cuánta energía consume un aparato por segundo. El recibo de luz se cobra en kilowatt-hora (kWh), que es energía: potencia por tiempo."
    },

    // Ejemplo · Potencia eléctrica
    {
      id: "ej-potencia",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Potencia eléctrica",
      etiqueta: "Consumo de un aparato",
      enunciado: "Un aparato conectado a 120 V deja pasar una corriente de 2 A. ¿Qué potencia consume?",
      math: "P = V\\,I",
      por_que: "La potencia es el producto del voltaje por la corriente. El resultado, en watts, indica cuánta energía gasta por segundo.",
      math_razon: "P = (120)(2) = 240\\ \\text{W}"
    },

    // Reactivos · Potencia eléctrica
    {
      id: "el14",
      tipo: "ejercicio",
      etiqueta: "Electricidad · Potencia eléctrica · Reactivo 1 / 2",
      pregunta: "Un aparato funciona a 120 V con una corriente de 5 A. ¿Qué potencia consume?",
      opciones: ["600 W", "24 W", "125 W", "115 W"],
      correcta: 0,
      explicacion: "P = V·I = (120)(5) = 600 W.",
      pasos: [
        { pre: "Potencia: ", math: "P = V I = (120)(5) = 600\\ \\text{W}" }
      ]
    },

    {
      id: "el15",
      tipo: "ejercicio",
      etiqueta: "Electricidad · Potencia eléctrica · Reactivo 2 / 2",
      pregunta: "¿En qué unidad se mide la potencia eléctrica?",
      opciones: ["Watt (W)", "Volt (V)", "Ampere (A)", "Ohm (Ω)"],
      correcta: 0,
      explicacion: "La potencia se mide en watts. 1 W = 1 J/s = 1 V·A.",
      pasos: [
        { pre: "Definición: ", math: "1\\ \\text{W} = 1\\ \\text{V}\\cdot\\text{A}" }
      ]
    },

    // ══ SUBTEMA 7 · MAGNETISMO ════════════════════════════════════════════════
    {
      id: "magnetismo",
      tipo: "concepto",
      titulo: "Magnetismo",
      etiqueta: "Imanes y electroimanes",
      formula: "N \\;\\;\\longleftrightarrow\\;\\; S",
      svgDiagram: "ele-magnetismo",
      items: [
        { math: "\\text{dos polos}", texto: "todo imán tiene polo norte y polo sur, inseparables" },
        { math: "\\text{igual} \\to \\text{repele}", texto: "polos iguales se repelen; opuestos se atraen" },
        { math: "I \\to \\vec{B}", texto: "una corriente eléctrica crea un campo magnético a su alrededor" }
      ],
      nota: "Electricidad y magnetismo están unidos: una corriente genera magnetismo (electroimán) y un imán en movimiento genera corriente (inducción, base de los generadores)."
    },

    // Ejemplo · Magnetismo
    {
      id: "ej-magnetismo",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Electroimán",
      etiqueta: "La corriente crea magnetismo",
      svgDiagram: "ele-magnetismo",
      enunciado: "Enrollas un cable alrededor de un clavo de hierro y conectas los extremos a una pila. El clavo empieza a atraer clips. ¿Por qué?",
      math: "I \\to \\vec{B}",
      por_que: "Toda corriente eléctrica genera un campo magnético a su alrededor. Al enrollar el cable y pasar corriente, los campos se suman y magnetizan el clavo: es un electroimán. Si cortas la corriente, deja de atraer.",
      math_razon: "\\text{corriente} \\Rightarrow \\text{campo magnético} \\Rightarrow \\text{electroimán}"
    },

    // Reactivos · Magnetismo
    {
      id: "el17",
      tipo: "ejercicio",
      svgDiagram: "ele-magnetismo",
      etiqueta: "Electricidad · Magnetismo · Reactivo 1 / 2",
      pregunta: "Si acercas los polos norte de dos imanes, estos:",
      opciones: ["Se repelen", "Se atraen", "Se unen sin fuerza", "Pierden el magnetismo"],
      correcta: 0,
      explicacion: "Los polos magnéticos iguales (norte con norte, o sur con sur) se repelen; los opuestos se atraen, igual que las cargas.",
      pasos: [
        { pre: "Polos iguales: ", math: "N\\text{-}N \\Rightarrow \\text{repulsión}" }
      ]
    },

    {
      id: "el18",
      tipo: "ejercicio",
      etiqueta: "Electricidad · Magnetismo · Reactivo 2 / 2",
      pregunta: "Una corriente eléctrica que circula por un cable genera a su alrededor un campo:",
      opciones: ["Magnético", "Gravitatorio", "Únicamente eléctrico", "Sonoro"],
      correcta: 0,
      explicacion: "Toda corriente eléctrica produce un campo magnético a su alrededor (descubrimiento de Oersted). Es la base de los electroimanes y los motores.",
      pasos: [
        { pre: "Electromagnetismo: ", math: "I \\to \\vec{B}" }
      ]
    },

    // ══ SUBTEMA 8 · MAGNETISMO CUANTITATIVO Y ONDAS ELECTROMAGNÉTICAS ═════════
    {
      id: "magnetismo-cuantitativo",
      tipo: "concepto",
      titulo: "Magnetismo Cuantitativo y Ondas EM",
      etiqueta: "Flujo, fuerzas magnéticas y luz",
      formula: "\\Phi = B\\,A",
      svgDiagram: "ele-magnetismo",
      items: [
        { math: "\\Phi = B A", texto: "flujo magnético: campo B por el área A que atraviesa (en weber, Wb)" },
        { math: "F = q\\,v\\,B", texto: "fuerza sobre una carga en movimiento perpendicular al campo" },
        { math: "F = \\dfrac{\\mu_0 I_1 I_2 L}{2\\pi d}", texto: "fuerza entre dos conductores paralelos con corriente" },
        { math: "B = \\mu \\tfrac{N}{L} I", texto: "campo en un solenoide; un imán en movimiento induce corriente" },
        { math: "\\lambda = \\dfrac{c}{f}", texto: "longitud de onda de una onda electromagnética (luz, láser, radio)" }
      ],
      nota: "Una carga en movimiento dentro de un campo magnético siente una fuerza F = q·v·B (máxima cuando v es perpendicular a B). Dos cables con corriente se atraen o repelen según el sentido de sus corrientes. Las ondas electromagnéticas (como la luz del láser) viajan a c = 3×10⁸ m/s y cumplen λ = c/f. Se usa μ₀ = 4π×10⁻⁷."
    },

    // Ejemplo · Flujo magnético
    {
      id: "ej-flujo",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Flujo magnético",
      etiqueta: "Campo por área",
      svgDiagram: "ele-magnetismo",
      enunciado: "Un imán produce un campo B = 2×10⁻³ T sobre la cara de una caja de área 0.05 m². ¿Cuál es el flujo magnético?",
      math: "\\Phi = B\\,A",
      por_que: "El flujo magnético es simplemente el campo multiplicado por el área que atraviesa perpendicularmente. El resultado se mide en weber (Wb).",
      math_razon: "\\Phi = (2\\times 10^{-3})(0.05) = 1\\times 10^{-4}\\ \\text{Wb}"
    },

    // Reactivos · Magnetismo cuantitativo y ondas EM (5)
    {
      id: "magc1",
      tipo: "ejercicio",
      svgDiagram: "ele-magnetismo",
      etiqueta: "Electricidad · Magnetismo cuantitativo · Reactivo 1 / 5",
      pregunta: "Un imán produce B = 2×10⁻³ T sobre una cara de 0.05 m². ¿Cuál es el flujo magnético?",
      opciones: ["1×10⁻⁴ Wb", "4×10⁻² Wb", "2.05×10⁻³ Wb", "1×10⁻² Wb"],
      correcta: 0,
      explicacion: "Φ = B·A = (2×10⁻³)·(0.05) = 1×10⁻⁴ Wb.",
      pasos: [
        { pre: "Flujo magnético: ", math: "\\Phi = B A = (2\\times 10^{-3})(0.05) = 1\\times 10^{-4}\\ \\text{Wb}" }
      ]
    },

    {
      id: "magc2",
      tipo: "ejercicio",
      etiqueta: "Electricidad · Magnetismo cuantitativo · Reactivo 2 / 5",
      pregunta: "Una carga de 4 µC se mueve a 1500 m/s perpendicular a un campo de 0.12 T. ¿Qué fuerza magnética siente?",
      opciones: ["7.2×10⁻⁴ N", "4.8×10⁻⁴ N", "7.2×10⁻² N", "1.8×10⁻³ N"],
      correcta: 0,
      explicacion: "F = q·v·B = (4×10⁻⁶)·(1500)·(0.12) = 7.2×10⁻⁴ N. Con v perpendicular a B la fuerza es máxima.",
      pasos: [
        { pre: "Fuerza magnética: ", math: "F = q\\,v\\,B = (4\\times 10^{-6})(1500)(0.12) = 7.2\\times 10^{-4}\\ \\text{N}" }
      ]
    },

    {
      id: "magc3",
      tipo: "ejercicio",
      etiqueta: "Electricidad · Magnetismo cuantitativo · Reactivo 3 / 5",
      pregunta: "Dos conductores paralelos de 0.5 m, con 7 A cada uno, se atraen con 2.25×10⁻⁴ N. ¿Cuál es su separación d? (μ₀ = 4π×10⁻⁷)",
      opciones: ["≈ 0.022 m", "≈ 0.22 m", "≈ 0.0022 m", "≈ 0.11 m"],
      correcta: 0,
      explicacion: "De F = μ₀·I₁·I₂·L/(2π·d) se despeja d = μ₀·I₁·I₂·L/(2π·F) = (4π×10⁻⁷·7·7·0.5)/(2π·2.25×10⁻⁴) ≈ 0.022 m.",
      pasos: [
        { pre: "Despejando d: ", math: "d = \\dfrac{\\mu_0 I_1 I_2 L}{2\\pi F} \\approx 0.022\\ \\text{m}" }
      ]
    },

    {
      id: "magc4",
      tipo: "ejercicio",
      etiqueta: "Electricidad · Magnetismo cuantitativo · Reactivo 4 / 5",
      pregunta: "Una onda electromagnética tiene una frecuencia de 2.5×10¹³ Hz. ¿Cuál es su longitud de onda? (c = 3×10⁸ m/s)",
      opciones: ["1.2×10⁻⁵ m", "1.2×10⁻⁴ m", "7.5×10²¹ m", "8.3×10⁴ m"],
      correcta: 0,
      explicacion: "λ = c/f = (3×10⁸)/(2.5×10¹³) = 1.2×10⁻⁵ m.",
      pasos: [
        { pre: "Longitud de onda: ", math: "\\lambda = \\dfrac{c}{f} = \\dfrac{3\\times 10^{8}}{2.5\\times 10^{13}} = 1.2\\times 10^{-5}\\ \\text{m}" }
      ]
    },

    {
      id: "magc5",
      tipo: "ejercicio",
      etiqueta: "Electricidad · Magnetismo cuantitativo · Reactivo 5 / 5",
      pregunta: "¿Cuál de los siguientes dispositivos emplea ondas electromagnéticas?",
      opciones: ["Un apuntador láser", "Un motor eléctrico", "Una bocina", "Un resorte"],
      correcta: 0,
      explicacion: "El apuntador láser emite luz, que es una onda electromagnética. El motor eléctrico y la bocina aprovechan campos magnéticos y movimiento, pero no emiten ondas electromagnéticas como función principal.",
      pasos: [
        { pre: "Emite luz (onda EM): ", math: "\\text{láser} \\Rightarrow \\text{onda electromagnética}" }
      ]
    },

    // ── RESUMEN ───────────────────────────────────────────────────────────────
    {
      id: "resumen",
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Electricidad y magnetismo",
      puntos: [
        { titulo: "Cargas", texto: "iguales se repelen, opuestas se atraen; se miden en coulombs" },
        { math: "F = k\\tfrac{q_1 q_2}{r^2}", texto: "Ley de Coulomb: inversa al cuadrado de la distancia" },
        { math: "I = \\tfrac{Q}{t}", texto: "corriente: carga por segundo (amperes)" },
        { math: "V = I R", texto: "Ley de Ohm: voltaje = corriente × resistencia" },
        { math: "R_{serie} = R_1 + R_2", texto: "en serie se suman; en paralelo la total baja" },
        { math: "P = V I", texto: "potencia eléctrica en watts" },
        { titulo: "Magnetismo", texto: "polos iguales se repelen; toda corriente crea campo magnético" },
        { math: "\\Phi = B A,\\ F = q v B", texto: "flujo magnético y fuerza sobre cargas; λ = c/f para ondas electromagnéticas (láser)" },
        { titulo: "Conductor/aislante", texto: "el conductor deja fluir la carga; el aislante se opone" }
      ]
    }

  ]
};
