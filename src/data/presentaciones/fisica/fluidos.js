// Datos de la presentación: Fluidos (Física · UNAM)
// Estructura por subtema: Teoría → Ejemplos resueltos → Reactivos tipo UNAM.
// Subtemas: Densidad · Presión · Hidrostática · Pascal · Arquímedes · Gasto · Bernoulli → Resumen.

export const PRESENTACION = {
  id: "fluidos",
  titulo: "Fluidos",
  materia: "Física",
  subtema: "Hidrostática e hidrodinámica",
  slides: [

    // ── PORTADA ───────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Fluidos",
      subtitulo: "Densidad, presión, Pascal, Arquímedes, gasto y continuidad",
      etiqueta: "Física · UNAM",
      svgDiagram: "flu-portada",
    },

    // ══ SUBTEMA 1 · DENSIDAD ══════════════════════════════════════════════════
    {
      id: "densidad",
      tipo: "concepto",
      titulo: "Densidad",
      etiqueta: "Masa en cada volumen",
      formula: "\\rho = \\dfrac{m}{V}",
      items: [
        { math: "\\rho", texto: "densidad: masa entre volumen (kg/m³ o g/cm³)" },
        { math: "\\rho_{agua} = 1000\\ \\tfrac{kg}{m^3}", texto: "equivale a 1 g/cm³, valor de referencia" },
        { math: "\\rho < \\rho_{fluido}", texto: "si el cuerpo es menos denso que el fluido, flota" }
      ],
      nota: "La densidad indica qué tan «apretada» está la materia. Un cuerpo flota si es menos denso que el líquido; se hunde si es más denso. Por eso el aceite flota sobre el agua."
    },

    // Ejemplo · Densidad
    {
      id: "ej-densidad",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Densidad",
      etiqueta: "Masa entre volumen",
      enunciado: "Un objeto tiene una masa de 600 g y ocupa un volumen de 200 cm³. ¿Cuál es su densidad?",
      math: "\\rho = \\dfrac{m}{V}",
      por_que: "Se divide la masa entre el volumen. Como el resultado (3 g/cm³) es mayor que la densidad del agua (1 g/cm³), este objeto se hundiría.",
      math_razon: "\\rho = \\dfrac{600}{200} = 3\\ \\tfrac{\\text{g}}{\\text{cm}^3}"
    },

    // Reactivos · Densidad
    {
      id: "f1",
      tipo: "ejercicio",
      etiqueta: "Fluidos · Densidad · Reactivo 1 / 3",
      pregunta: "La densidad de un cuerpo es la relación entre:",
      opciones: ["Su masa y su volumen", "Su peso y su área", "Su fuerza y su tiempo", "Su volumen y su masa"],
      correcta: 0,
      explicacion: "La densidad es la masa contenida en cada unidad de volumen: ρ = m/V.",
      pasos: [
        { pre: "Definición: ", math: "\\rho = \\dfrac{m}{V}" }
      ]
    },

    {
      id: "f2",
      tipo: "ejercicio",
      etiqueta: "Fluidos · Densidad · Reactivo 2 / 3",
      pregunta: "Un cuerpo tiene una masa de 600 g y un volumen de 200 cm³. ¿Cuál es su densidad?",
      opciones: ["3 g/cm³", "0.33 g/cm³", "120 000 g/cm³", "800 g/cm³"],
      correcta: 0,
      explicacion: "ρ = m/V = 600/200 = 3 g/cm³.",
      pasos: [
        { pre: "Densidad: ", math: "\\rho = \\dfrac{600}{200} = 3\\ \\tfrac{\\text{g}}{\\text{cm}^3}" }
      ]
    },

    {
      id: "f3",
      tipo: "ejercicio",
      svgDiagram: "flu-arquimedes",
      etiqueta: "Fluidos · Densidad · Reactivo 3 / 3",
      pregunta: "Un objeto flota en el agua si su densidad es:",
      opciones: ["Menor que la del agua", "Mayor que la del agua", "Igual a su masa", "Igual a su volumen"],
      correcta: 0,
      explicacion: "Un cuerpo flota cuando es menos denso que el líquido: el empuje supera a su peso. Si es más denso, se hunde.",
      pasos: [
        { pre: "Flota si: ", math: "\\rho_{cuerpo} < \\rho_{fluido}" }
      ]
    },

    // ══ SUBTEMA 2 · PRESIÓN ═══════════════════════════════════════════════════
    {
      id: "presion",
      tipo: "concepto",
      titulo: "Presión",
      etiqueta: "Fuerza repartida en un área",
      formula: "P = \\dfrac{F}{A}",
      items: [
        { math: "P = \\dfrac{F}{A}", texto: "fuerza perpendicular entre el área sobre la que actúa" },
        { math: "[\\,P\\,] = \\text{Pa}", texto: "se mide en pascales: 1 Pa = 1 N/m²" },
        { math: "A \\downarrow \\Rightarrow P \\uparrow", texto: "a menor área, mayor presión (con la misma fuerza)" }
      ],
      nota: "Por eso un cuchillo afilado corta mejor: concentra la fuerza en un área diminuta y la presión se dispara. Lo contrario que unas raquetas de nieve, que reparten el peso."
    },

    // Ejemplo · Presión
    {
      id: "ej-presion",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Presión",
      etiqueta: "Fuerza repartida en un área",
      enunciado: "Una caja ejerce sobre el suelo una fuerza (su peso) de 300 N a través de una base de 1.5 m². ¿Qué presión ejerce?",
      math: "P = \\dfrac{F}{A}",
      por_que: "La presión es la fuerza dividida entre el área de contacto. Con la misma fuerza, si la base fuera más pequeña la presión sería mayor.",
      math_razon: "P = \\dfrac{300}{1.5} = 200\\ \\text{Pa}"
    },

    // Reactivos · Presión
    {
      id: "f4",
      tipo: "ejercicio",
      etiqueta: "Fluidos · Presión · Reactivo 1 / 5",
      pregunta: "La presión se define como:",
      opciones: ["La fuerza por unidad de área", "La fuerza por la distancia", "La masa por el volumen", "La fuerza por el tiempo"],
      correcta: 0,
      explicacion: "La presión es la fuerza perpendicular repartida sobre el área en que actúa: P = F/A.",
      pasos: [
        { pre: "Definición: ", math: "P = \\dfrac{F}{A}" }
      ]
    },

    {
      id: "f5",
      tipo: "ejercicio",
      etiqueta: "Fluidos · Presión · Reactivo 2 / 5",
      pregunta: "Una fuerza de 200 N actúa sobre un área de 4 m². ¿Cuál es la presión?",
      opciones: ["50 Pa", "800 Pa", "0.02 Pa", "204 Pa"],
      correcta: 0,
      explicacion: "P = F/A = 200/4 = 50 Pa.",
      pasos: [
        { pre: "Presión: ", math: "P = \\dfrac{F}{A} = \\dfrac{200}{4} = 50\\ \\text{Pa}" }
      ]
    },

    {
      id: "f6",
      tipo: "ejercicio",
      etiqueta: "Fluidos · Presión · Reactivo 3 / 5",
      pregunta: "¿En qué unidad se mide la presión en el Sistema Internacional?",
      opciones: ["Pascal (Pa)", "Newton (N)", "Joule (J)", "Watt (W)"],
      correcta: 0,
      explicacion: "La presión se mide en pascales. 1 Pa = 1 N/m².",
      pasos: [
        { pre: "Definición: ", math: "1\\ \\text{Pa} = 1\\ \\tfrac{\\text{N}}{\\text{m}^2}" }
      ]
    },

    {
      id: "f7",
      tipo: "ejercicio",
      etiqueta: "Fluidos · Presión · Reactivo 4 / 5",
      pregunta: "Para una misma fuerza, si el área sobre la que se aplica disminuye, la presión:",
      opciones: ["Aumenta", "Disminuye", "No cambia", "Se vuelve cero"],
      correcta: 0,
      explicacion: "Como P = F/A, al reducir el área con la misma fuerza la presión aumenta. Por eso un objeto puntiagudo ejerce mucha presión.",
      pasos: [
        { pre: "Inversa al área: ", math: "A \\downarrow \\Rightarrow P \\uparrow" }
      ]
    },

    {
      id: "f18",
      tipo: "ejercicio",
      etiqueta: "Fluidos · Presión · Reactivo 5 / 5",
      pregunta: "El instrumento que se usa para medir la presión atmosférica es el:",
      opciones: ["Barómetro", "Termómetro", "Amperímetro", "Dinamómetro"],
      correcta: 0,
      explicacion: "El barómetro mide la presión atmosférica. El termómetro mide temperatura, el amperímetro corriente y el dinamómetro fuerza.",
      pasos: [
        { pre: "Mide presión atmosférica: ", math: "\\text{barómetro}" }
      ]
    },

    // ══ SUBTEMA 3 · PRESIÓN HIDROSTÁTICA ══════════════════════════════════════
    {
      id: "hidrostatica",
      tipo: "criterio_detalle",
      titulo: "Presión Hidrostática",
      etiqueta: "La presión dentro de un líquido",
      svgDiagram: "flu-presion",
      enunciado: "Dentro de un líquido en reposo, la presión aumenta con la profundidad. No depende de la forma del recipiente, solo de qué tan hondo estés.",
      math: "P = \\rho\\,g\\,h",
      por_que: "Cuanto más profundo, más líquido tienes encima empujando, así que mayor presión. Por eso a los buzos les duelen los oídos al bajar y las presas son más gruesas en la base.",
      math_razon: "P \\propto h \\quad (\\text{a igual líquido y gravedad})"
    },

    // Ejemplo · Presión hidrostática
    {
      id: "ej-hidrostatica",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Presión hidrostática",
      etiqueta: "Presión a cierta profundidad",
      svgDiagram: "flu-presion",
      enunciado: "¿Cuál es la presión hidrostática a 10 m de profundidad en agua? (ρ = 1000 kg/m³, g = 10 m/s²)",
      math: "P = \\rho\\,g\\,h",
      por_que: "Se multiplican densidad, gravedad y profundidad. El resultado es la presión que ejerce solo la columna de agua (sin contar la atmósfera).",
      math_razon: "P = (1000)(10)(10) = 100\\,000\\ \\text{Pa} = 100\\ \\text{kPa}"
    },

    // Reactivos · Presión hidrostática
    {
      id: "f8",
      tipo: "ejercicio",
      svgDiagram: "flu-presion",
      etiqueta: "Fluidos · Presión hidrostática · Reactivo 1 / 2",
      pregunta: "Dentro de un líquido en reposo, la presión hidrostática aumenta con:",
      opciones: ["La profundidad", "El color del líquido", "El ancho del recipiente", "La temperatura ambiente"],
      correcta: 0,
      explicacion: "P = ρgh: a mayor profundidad (h), mayor presión, porque hay más líquido encima. No depende de la forma del recipiente.",
      pasos: [
        { pre: "Proporcional a h: ", math: "P = \\rho g h" }
      ]
    },

    {
      id: "f9",
      tipo: "ejercicio",
      svgDiagram: "flu-presion",
      etiqueta: "Fluidos · Presión hidrostática · Reactivo 2 / 2",
      pregunta: "¿Cuál es la presión hidrostática a 20 m de profundidad en agua? (ρ = 1000 kg/m³, g = 10 m/s²)",
      opciones: ["200 000 Pa", "2000 Pa", "20 000 Pa", "2 000 000 Pa"],
      correcta: 0,
      explicacion: "P = ρgh = (1000)(10)(20) = 200 000 Pa.",
      pasos: [
        { pre: "Presión hidrostática: ", math: "P = (1000)(10)(20) = 200\\,000\\ \\text{Pa}" }
      ]
    },

    // ══ SUBTEMA 4 · PRINCIPIO DE PASCAL ═══════════════════════════════════════
    {
      id: "pascal",
      tipo: "criterio_detalle",
      titulo: "Principio de Pascal",
      etiqueta: "La prensa hidráulica",
      svgDiagram: "flu-pascal",
      enunciado: "La presión que se aplica a un fluido encerrado se transmite por igual a todos sus puntos y en todas las direcciones. Es la base de la prensa y los frenos hidráulicos.",
      math: "\\dfrac{F_1}{A_1} = \\dfrac{F_2}{A_2}",
      por_que: "Como la presión es la misma en ambos pistones, con una fuerza pequeña sobre un área pequeña puedes levantar un peso enorme en el área grande. Es un multiplicador de fuerza.",
      math_razon: "F_2 = F_1\\,\\dfrac{A_2}{A_1}"
    },

    // Ejemplo · Principio de Pascal
    {
      id: "ej-pascal",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Prensa hidráulica",
      etiqueta: "Multiplicar la fuerza",
      svgDiagram: "flu-pascal",
      enunciado: "En una prensa hidráulica se aplican 20 N sobre un pistón de 5 cm². ¿Qué fuerza se obtiene en un pistón de 50 cm²?",
      math: "\\dfrac{F_1}{A_1} = \\dfrac{F_2}{A_2}",
      por_que: "La presión es la misma en ambos pistones. Como el área grande es 10 veces mayor, la fuerza también se multiplica por 10.",
      math_razon: "F_2 = 20\\cdot\\dfrac{50}{5} = 200\\ \\text{N}"
    },

    // Reactivos · Principio de Pascal
    {
      id: "f10",
      tipo: "ejercicio",
      svgDiagram: "flu-pascal",
      etiqueta: "Fluidos · Principio de Pascal · Reactivo 1 / 2",
      pregunta: "El principio de Pascal establece que la presión aplicada a un fluido encerrado:",
      opciones: ["Se transmite por igual en todas direcciones", "Solo actúa hacia abajo", "Disminuye con la distancia", "Solo se transmite en línea recta"],
      correcta: 0,
      explicacion: "La presión sobre un fluido confinado se transmite sin disminuir a todos sus puntos y en todas direcciones. Es la base de la prensa hidráulica.",
      pasos: [
        { pre: "Transmisión: ", math: "\\Delta P\\ \\text{igual en todo el fluido}" }
      ]
    },

    {
      id: "f11",
      tipo: "ejercicio",
      svgDiagram: "flu-pascal",
      etiqueta: "Fluidos · Principio de Pascal · Reactivo 2 / 2",
      pregunta: "En una prensa hidráulica se aplican 20 N sobre un pistón de 5 cm². ¿Qué fuerza se obtiene en otro pistón de 50 cm²?",
      opciones: ["200 N", "2 N", "20 N", "100 N"],
      correcta: 0,
      explicacion: "F₂ = F₁·(A₂/A₁) = 20·(50/5) = 20·10 = 200 N.",
      pasos: [
        { pre: "Pascal: ", math: "F_2 = 20\\cdot\\dfrac{50}{5} = 200\\ \\text{N}" }
      ]
    },

    // ══ SUBTEMA 5 · PRINCIPIO DE ARQUÍMEDES ═══════════════════════════════════
    {
      id: "arquimedes",
      tipo: "criterio_detalle",
      titulo: "Principio de Arquímedes",
      etiqueta: "La fuerza de empuje",
      svgDiagram: "flu-arquimedes",
      enunciado: "Todo cuerpo sumergido (total o parcialmente) en un fluido recibe un empuje hacia arriba igual al peso del fluido que desplaza.",
      math: "E = \\rho_{fluido}\\,g\\,V_{desplazado}",
      por_que: "Si el empuje iguala o supera al peso, el cuerpo flota; si es menor, se hunde. Por eso un barco de acero flota: desplaza muchísima agua y el empuje compensa su peso.",
      math_razon: "E \\ge P \\Rightarrow \\text{flota}, \\qquad E < P \\Rightarrow \\text{se hunde}"
    },

    // Ejemplo · Principio de Arquímedes
    {
      id: "ej-arquimedes",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Fuerza de empuje",
      etiqueta: "El peso del fluido desplazado",
      svgDiagram: "flu-arquimedes",
      enunciado: "Un cuerpo se sumerge por completo y desplaza 0.005 m³ de agua. ¿Cuál es el empuje que recibe? (ρ = 1000 kg/m³, g = 10 m/s²)",
      math: "E = \\rho_{fluido}\\,g\\,V_{desplazado}",
      por_que: "El empuje es igual al peso del agua desplazada: se multiplican la densidad del agua, la gravedad y el volumen sumergido. Si este empuje supera el peso del cuerpo, flota.",
      math_razon: "E = (1000)(10)(0.005) = 50\\ \\text{N}"
    },

    // Reactivos · Principio de Arquímedes
    {
      id: "f12",
      tipo: "ejercicio",
      svgDiagram: "flu-arquimedes",
      etiqueta: "Fluidos · Principio de Arquímedes · Reactivo 1 / 2",
      pregunta: "Según el principio de Arquímedes, el empuje sobre un cuerpo sumergido es igual al peso del:",
      opciones: ["Fluido que desplaza", "Propio cuerpo", "Aire sobre el fluido", "Recipiente"],
      correcta: 0,
      explicacion: "El empuje hacia arriba es igual al peso del fluido desplazado por el cuerpo: E = ρ_fluido·g·V_desplazado.",
      pasos: [
        { pre: "Empuje: ", math: "E = \\rho_{fluido}\\, g\\, V_{desp}" }
      ]
    },

    {
      id: "f13",
      tipo: "ejercicio",
      etiqueta: "Fluidos · Principio de Arquímedes · Reactivo 2 / 2",
      pregunta: "Un cuerpo sumergido desplaza 0.002 m³ de agua. ¿Cuál es el empuje que recibe? (ρ = 1000 kg/m³, g = 10 m/s²)",
      opciones: ["20 N", "2 N", "200 N", "0.02 N"],
      correcta: 0,
      explicacion: "E = ρ·g·V = (1000)(10)(0.002) = 20 N.",
      pasos: [
        { pre: "Arquímedes: ", math: "E = (1000)(10)(0.002) = 20\\ \\text{N}" }
      ]
    },

    // ══ SUBTEMA 6 · GASTO Y CONTINUIDAD ═══════════════════════════════════════
    {
      id: "gasto",
      tipo: "concepto",
      titulo: "Gasto y Continuidad",
      etiqueta: "Fluidos en movimiento",
      formula: "Q = A\\,v = \\dfrac{V}{t}",
      svgDiagram: "flu-continuidad",
      items: [
        { math: "Q = \\dfrac{V}{t}", texto: "gasto o caudal: volumen que pasa por segundo (m³/s)" },
        { math: "Q = A\\,v", texto: "también, área de la tubería por velocidad del fluido" },
        { math: "A_1 v_1 = A_2 v_2", texto: "continuidad: si el tubo se angosta, el fluido se acelera" }
      ],
      nota: "El gasto se conserva: en un tubo más estrecho el fluido va más rápido. Por eso al tapar parte de una manguera con el dedo, el chorro sale con más velocidad."
    },

    // Ejemplo · Gasto y continuidad
    {
      id: "ej-caudal",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Gasto (llenar una alberca)",
      etiqueta: "Caudal y tiempo",
      svgDiagram: "flu-continuidad",
      enunciado: "Una alberca de 50 m × 25 m × 3 m se llena con un tubo de 0.4 m de diámetro por el que el agua fluye a 4 m/s. ¿En cuánto tiempo se llena (aprox.)?",
      math: "Q = A\\,v, \\qquad t = \\dfrac{V}{Q}",
      por_que: "Primero el volumen de la alberca y el área del tubo (A = πr²). El caudal es A·v, y el tiempo es el volumen entre el caudal. Conviene pasarlo a horas al final.",
      math_razon: "V = 3750\\ \\text{m}^3,\\ Q \\approx 0.5\\ \\tfrac{\\text{m}^3}{\\text{s}} \\;\\Rightarrow\\; t \\approx 7460\\ \\text{s} \\approx 2.07\\ \\text{h}"
    },

    // Reactivos · Gasto y continuidad
    {
      id: "f14",
      tipo: "ejercicio",
      svgDiagram: "flu-continuidad",
      etiqueta: "Fluidos · Gasto y continuidad · Reactivo 1 / 3",
      pregunta: "Cuando un líquido pasa de una tubería ancha a una más estrecha, su velocidad:",
      opciones: ["Aumenta", "Disminuye", "No cambia", "Se vuelve cero"],
      correcta: 0,
      explicacion: "Por la ecuación de continuidad (A·v constante), al reducirse el área la velocidad debe aumentar para mantener el mismo gasto.",
      pasos: [
        { pre: "Continuidad: ", math: "A_1 v_1 = A_2 v_2" }
      ]
    },

    {
      id: "f15",
      tipo: "ejercicio",
      svgDiagram: "flu-continuidad",
      etiqueta: "Fluidos · Gasto y continuidad · Reactivo 2 / 3",
      pregunta: "Por una tubería de 10 cm² de sección el agua va a 2 m/s. Al pasar a una sección de 5 cm², su velocidad será:",
      opciones: ["4 m/s", "1 m/s", "2 m/s", "10 m/s"],
      correcta: 0,
      explicacion: "A₁v₁ = A₂v₂ → v₂ = (A₁v₁)/A₂ = (10·2)/5 = 4 m/s.",
      pasos: [
        { pre: "Continuidad: ", math: "v_2 = \\dfrac{A_1 v_1}{A_2} = \\dfrac{(10)(2)}{5} = 4\\ \\tfrac{m}{s}" }
      ]
    },

    {
      id: "f16",
      tipo: "ejercicio",
      etiqueta: "Fluidos · Gasto y continuidad · Reactivo 3 / 3",
      pregunta: "El gasto o caudal de un fluido se define como:",
      opciones: ["El volumen que pasa por unidad de tiempo", "La presión en el fondo", "La masa total del fluido", "La densidad por la altura"],
      correcta: 0,
      explicacion: "El gasto es el volumen de fluido que atraviesa una sección por segundo: Q = V/t = A·v. Se mide en m³/s.",
      pasos: [
        { pre: "Definición: ", math: "Q = \\dfrac{V}{t} = A v" }
      ]
    },

    // ══ SUBTEMA 7 · PRINCIPIO DE BERNOULLI ════════════════════════════════════
    {
      id: "bernoulli",
      tipo: "criterio_detalle",
      titulo: "Principio de Bernoulli",
      etiqueta: "Velocidad y presión",
      enunciado: "En un fluido en movimiento, donde la velocidad es mayor, la presión es menor, y viceversa. La energía total del fluido se conserva.",
      math: "v \\uparrow \\;\\Rightarrow\\; P \\downarrow",
      por_que: "Explica por qué vuelan los aviones: el aire pasa más rápido por encima del ala (menor presión arriba) que por debajo, y la diferencia de presión genera la sustentación.",
      math_razon: "P + \\tfrac12 \\rho v^2 + \\rho g h = \\text{constante}"
    },

    // Ejemplo · Principio de Bernoulli
    {
      id: "ej-bernoulli",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Principio de Bernoulli",
      etiqueta: "Por qué vuela un avión",
      enunciado: "El aire pasa más rápido por encima del ala de un avión que por debajo. ¿Dónde es menor la presión y hacia dónde apunta la fuerza resultante?",
      math: "v \\uparrow \\;\\Rightarrow\\; P \\downarrow",
      por_que: "Donde el aire va más rápido (arriba del ala) la presión es menor; abajo, donde va más lento, la presión es mayor. Esa diferencia de presión empuja el ala hacia arriba: es la sustentación que mantiene al avión en vuelo.",
      math_razon: "P_{abajo} > P_{arriba} \\;\\Rightarrow\\; \\text{fuerza hacia arriba}"
    },

    // Reactivos · Principio de Bernoulli
    {
      id: "f17",
      tipo: "ejercicio",
      etiqueta: "Fluidos · Principio de Bernoulli · Reactivo 1 / 1",
      pregunta: "Según el principio de Bernoulli, donde un fluido se mueve más rápido, su presión es:",
      opciones: ["Menor", "Mayor", "La misma", "Infinita"],
      correcta: 0,
      explicacion: "Bernoulli relaciona velocidad y presión: a mayor velocidad del fluido, menor presión. Así se explica la sustentación de las alas de un avión.",
      pasos: [
        { pre: "Bernoulli: ", math: "v \\uparrow \\Rightarrow P \\downarrow" }
      ]
    },

    // ── RESUMEN ───────────────────────────────────────────────────────────────
    {
      id: "resumen",
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Claves de los fluidos",
      puntos: [
        { math: "\\rho = \\tfrac{m}{V}", texto: "densidad: el cuerpo flota si es menos denso que el fluido" },
        { math: "P = \\tfrac{F}{A}", texto: "presión: fuerza por área (pascales)" },
        { math: "P = \\rho g h", texto: "presión hidrostática: crece con la profundidad" },
        { math: "\\tfrac{F_1}{A_1} = \\tfrac{F_2}{A_2}", texto: "Pascal: la prensa hidráulica multiplica la fuerza" },
        { math: "E = \\rho_f\\, g\\, V", texto: "Arquímedes: empuje = peso del fluido desplazado" },
        { math: "A_1 v_1 = A_2 v_2", texto: "continuidad: el tubo estrecho acelera el fluido" },
        { titulo: "Bernoulli", texto: "más velocidad del fluido ⇒ menos presión (vuelan los aviones)" },
        { titulo: "Gasto", texto: "Q = V/t = A·v, el volumen que pasa por segundo" }
      ]
    }

  ]
};
