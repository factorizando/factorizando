// Datos de la presentación: Materia, átomo y enlace (Química · UNAM · Área 1)
// Cubre la Unidad 1 del temario oficial "Temas básicos":
//   1.1 Sustancias puras y mezclas · 1.2 Estructura atómica · 1.3 Tabla periódica y enlace ·
//   1.4 Óxidos, ácidos, bases y sales · 1.5 Mol y masa molar → Resumen.
// 16 reactivos por subtema.

export const PRESENTACION = {
  id: "quimica-fundamentos",
  titulo: "Materia, átomo y enlace",
  materia: "Química",
  subtema: "Temas básicos",
  slides: [

    // ── PORTADA ───────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Materia, átomo y enlace",
      subtitulo: "Sustancias puras y mezclas · Estructura atómica · Tabla periódica y enlace químico · Óxidos, ácidos, bases y sales · El mol y la masa molar",
      etiqueta: "Química · UNAM · Unidad 1",
      svgDiagram: "qf-portada",
    },

    // ══ SUBTEMA 1 · SUSTANCIAS PURAS Y MEZCLAS ════════════════════════════════
    {
      id: "mezclas",
      tipo: "concepto",
      titulo: "Sustancias puras y mezclas",
      etiqueta: "Cómo se clasifica la materia",
      formula: "\\text{materia} \\to \\text{sustancia pura (elemento / compuesto)} \\;|\\; \\text{mezcla (homogénea / heterogénea)}",
      svgDiagram: "qf-mezclas",
      items: [
        { math: "\\text{Elemento}", texto: "una sola clase de átomo; no se descompone (Fe, O₂, Au, Na)" },
        { math: "\\text{Compuesto}", texto: "dos o más elementos UNIDOS químicamente, en proporción fija (H₂O, CO₂, NaCl)" },
        { math: "\\text{Mezcla homogénea}", texto: "una sola fase, no se distinguen los componentes (aire, agua de mar, bronce)" },
        { math: "\\text{Mezcla heterogénea}", texto: "se distinguen las fases o componentes (agua con aceite, granito, ensalada)" }
      ],
      nota: "La diferencia clave: en una SUSTANCIA PURA la composición es FIJA y solo se separa por métodos químicos; en una MEZCLA la composición es VARIABLE y se separa por métodos físicos (filtración, decantación, destilación, evaporación, cromatografía). Las aleaciones (bronce, acero, latón) son mezclas homogéneas de metales."
    },

    // Reactivos · Sustancias y mezclas (16)
    {
      id: "mz1",
      tipo: "ejercicio",
      svgDiagram: "qf-mezclas",
      etiqueta: "Temas básicos · Sustancias y mezclas · Reactivo 1 / 16",
      pregunta: "De las siguientes combinaciones, el ________ es un compuesto y el ________ es un elemento.",
      opciones: ["azúcar — platino", "platino — azúcar", "acero — azúcar", "azúcar — acero"],
      correcta: 0,
      explicacion: "El azúcar (sacarosa, C₁₂H₂₂O₁₁) es un compuesto: varios elementos unidos en proporción fija. El platino (Pt) es un elemento: una sola clase de átomo. El acero es una mezcla (aleación).",
      pasos: [
        { pre: "Varios elementos unidos: ", math: "\\text{azúcar = compuesto}" },
        { pre: "Un solo tipo de átomo: ", math: "\\text{Pt = elemento}" }
      ]
    },
    {
      id: "mz2",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Sustancias y mezclas · Reactivo 2 / 16",
      pregunta: "El bronce, formado por cobre (Cu) y estaño (Sn) en proporción variable, es un ejemplo de:",
      opciones: ["Mezcla homogénea (aleación)", "Compuesto", "Elemento", "Mezcla heterogénea"],
      correcta: 0,
      explicacion: "El bronce es una aleación: una mezcla homogénea de dos metales. Su proporción puede variar y sus componentes conservan sus propiedades, por lo que no es un compuesto.",
      pasos: [
        { pre: "Metales mezclados, una sola fase: ", math: "\\text{mezcla homogénea}" }
      ]
    },
    {
      id: "mz3",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Sustancias y mezclas · Reactivo 3 / 16",
      pregunta: "¿Cuál de las siguientes es una sustancia pura compuesta?",
      opciones: ["Agua (H₂O)", "Aire", "Agua de mar", "Acero"],
      correcta: 0,
      explicacion: "El agua es un compuesto: hidrógeno y oxígeno unidos en proporción fija 2:1. El aire, el agua de mar y el acero son mezclas.",
      pasos: [
        { pre: "Elementos unidos en proporción fija: ", math: "\\mathrm{H_2O}" }
      ]
    },
    {
      id: "mz4",
      tipo: "ejercicio",
      svgDiagram: "qf-mezclas",
      etiqueta: "Temas básicos · Sustancias y mezclas · Reactivo 4 / 16",
      pregunta: "Una mezcla en la que se distinguen a simple vista sus componentes o fases se llama:",
      opciones: ["Heterogénea", "Homogénea", "Compuesto", "Disolución"],
      correcta: 0,
      explicacion: "En una mezcla heterogénea los componentes no están distribuidos de manera uniforme y se distinguen las fases (agua con aceite, granito, arena con limaduras).",
      pasos: [
        { pre: "Se distinguen las fases: ", math: "\\text{heterogénea}" }
      ]
    },
    {
      id: "mz5",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Sustancias y mezclas · Reactivo 5 / 16",
      pregunta: "El método más adecuado para separar la sal disuelta en agua y recuperar la sal es la:",
      opciones: ["Evaporación", "Filtración", "Decantación", "Imantación"],
      correcta: 0,
      explicacion: "Como la sal está disuelta (no es sólido en suspensión), se evapora el agua y la sal queda en el fondo. La filtración solo separa sólidos no disueltos.",
      pasos: [
        { pre: "Soluto disuelto + disolvente volátil: ", math: "\\text{evaporación}" }
      ]
    },
    {
      id: "mz6",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Sustancias y mezclas · Reactivo 6 / 16",
      pregunta: "Para separar una mezcla de agua y aceite, que forman dos capas, se usa preferentemente la:",
      opciones: ["Decantación", "Destilación", "Cromatografía", "Filtración"],
      correcta: 0,
      explicacion: "El agua y el aceite son líquidos inmiscibles de distinta densidad: forman dos capas y se separan por decantación (vertiendo la capa superior o usando un embudo de separación).",
      pasos: [
        { pre: "Líquidos inmiscibles, distinta densidad: ", math: "\\text{decantación}" }
      ]
    },
    {
      id: "mz7",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Sustancias y mezclas · Reactivo 7 / 16",
      pregunta: "La destilación aprovecha la diferencia de ________ para separar los componentes de una mezcla líquida.",
      opciones: ["puntos de ebullición", "densidades", "colores", "tamaños de partícula"],
      correcta: 0,
      explicacion: "En la destilación se calienta la mezcla; el componente más volátil (menor punto de ebullición) se evapora primero, luego se condensa y se recoge por separado.",
      pasos: [
        { pre: "Se separa por volatilidad: ", math: "\\text{distinto punto de ebullición}" }
      ]
    },
    {
      id: "mz8",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Sustancias y mezclas · Reactivo 8 / 16",
      pregunta: "¿Cuál de los siguientes es un ELEMENTO químico?",
      opciones: ["Oro (Au)", "Agua (H₂O)", "Sal de mesa (NaCl)", "Dióxido de carbono (CO₂)"],
      correcta: 0,
      explicacion: "El oro está formado por una sola clase de átomo (Au); es un elemento. Agua, sal y CO₂ son compuestos (dos o más elementos unidos).",
      pasos: [
        { pre: "Un solo tipo de átomo: ", math: "\\mathrm{Au}" }
      ]
    },
    {
      id: "mz9",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Sustancias y mezclas · Reactivo 9 / 16",
      pregunta: "El aire limpio, formado por nitrógeno, oxígeno y otros gases distribuidos uniformemente, es una:",
      opciones: ["Mezcla homogénea", "Sustancia pura", "Mezcla heterogénea", "Compuesto"],
      correcta: 0,
      explicacion: "El aire es una mezcla homogénea de gases: una sola fase, sin separación visible. No es compuesto porque su proporción varía y sus gases conservan sus propiedades.",
      pasos: [
        { pre: "Gases mezclados, una sola fase: ", math: "\\text{mezcla homogénea}" }
      ]
    },
    {
      id: "mz10",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Sustancias y mezclas · Reactivo 10 / 16",
      pregunta: "Una mezcla homogénea de un soluto disuelto en un disolvente recibe también el nombre de:",
      opciones: ["Disolución", "Suspensión", "Coloide grueso", "Emulsión heterogénea"],
      correcta: 0,
      explicacion: "Una disolución (o solución) es una mezcla homogénea: el soluto se distribuye uniformemente en el disolvente y no se distinguen las partículas (agua salada, refresco).",
      pasos: [
        { pre: "Mezcla homogénea soluto + disolvente: ", math: "\\text{disolución}" }
      ]
    },
    {
      id: "mz11",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Sustancias y mezclas · Reactivo 11 / 16",
      pregunta: "Para separar limaduras de hierro mezcladas con arena se aprovecha que el hierro es:",
      opciones: ["Magnético (imantación)", "Soluble en agua", "Más volátil", "De distinto color"],
      correcta: 0,
      explicacion: "El hierro es ferromagnético: un imán lo atrae y lo separa de la arena. Este método se llama imantación o separación magnética.",
      pasos: [
        { pre: "Componente magnético: ", math: "\\text{imantación}" }
      ]
    },
    {
      id: "mz12",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Sustancias y mezclas · Reactivo 12 / 16",
      pregunta: "La principal diferencia entre un compuesto y una mezcla es que en el compuesto los elementos están:",
      opciones: ["Unidos químicamente en proporción fija", "Mezclados en cualquier proporción", "Separados por filtración", "Siempre en estado gaseoso"],
      correcta: 0,
      explicacion: "En un compuesto los elementos están unidos por enlaces químicos y en proporción fija (el agua siempre es 2 H por 1 O). En una mezcla la proporción es variable y se separa por métodos físicos.",
      pasos: [
        { pre: "Compuesto: ", math: "\\text{enlace químico + proporción fija}" }
      ]
    },
    {
      id: "mz13",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Sustancias y mezclas · Reactivo 13 / 16",
      pregunta: "La filtración es el método adecuado para separar:",
      opciones: ["Un sólido no disuelto de un líquido", "Dos gases", "Sal disuelta en agua", "Dos líquidos miscibles"],
      correcta: 0,
      explicacion: "La filtración retiene en el papel o malla las partículas sólidas que no están disueltas (arena en agua), dejando pasar el líquido. No sirve para sólidos disueltos.",
      pasos: [
        { pre: "Sólido en suspensión: ", math: "\\text{filtración}" }
      ]
    },
    {
      id: "mz14",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Sustancias y mezclas · Reactivo 14 / 16",
      pregunta: "El oxígeno que respiramos (O₂) está formado por átomos del mismo elemento, por lo que se clasifica como:",
      opciones: ["Sustancia pura (elemento)", "Compuesto", "Mezcla homogénea", "Mezcla heterogénea"],
      correcta: 0,
      explicacion: "Aunque la molécula O₂ tiene dos átomos, ambos son del MISMO elemento (oxígeno); por eso es una sustancia pura simple (elemento), no un compuesto.",
      pasos: [
        { pre: "Átomos del mismo elemento: ", math: "\\mathrm{O_2} = \\text{elemento}" }
      ]
    },
    {
      id: "mz15",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Sustancias y mezclas · Reactivo 15 / 16",
      pregunta: "La cromatografía permite separar mezclas aprovechando la diferente ________ de los componentes sobre un medio.",
      opciones: ["velocidad de desplazamiento (afinidad)", "carga eléctrica", "masa atómica", "radiactividad"],
      correcta: 0,
      explicacion: "En la cromatografía los componentes se desplazan a distinta velocidad según su afinidad por la fase móvil y la fase fija, separándose (por ejemplo, los pigmentos de una tinta).",
      pasos: [
        { pre: "Distinta afinidad → distinta velocidad: ", math: "\\text{cromatografía}" }
      ]
    },
    {
      id: "mz16",
      tipo: "ejercicio",
      svgDiagram: "qf-mezclas",
      etiqueta: "Temas básicos · Sustancias y mezclas · Reactivo 16 / 16",
      pregunta: "El granito, en el que se ven cristales de cuarzo, mica y feldespato, es una mezcla:",
      opciones: ["Heterogénea", "Homogénea", "Pura", "Elemental"],
      correcta: 0,
      explicacion: "En el granito se distinguen a simple vista los distintos minerales (fases): es una mezcla heterogénea.",
      pasos: [
        { pre: "Fases visibles: ", math: "\\text{heterogénea}" }
      ]
    },

    // ══ SUBTEMA 2 · ESTRUCTURA ATÓMICA ════════════════════════════════════════
    {
      id: "atomo",
      tipo: "concepto",
      titulo: "Estructura atómica",
      etiqueta: "Las partículas del átomo",
      formula: "Z = \\text{protones} \\qquad A = \\text{protones} + \\text{neutrones}",
      svgDiagram: "qf-atomo",
      items: [
        { math: "\\text{Protón } (p^+)", texto: "carga positiva, en el núcleo; define el número atómico Z y el elemento" },
        { math: "\\text{Neutrón } (n^0)", texto: "sin carga, en el núcleo; aporta masa" },
        { math: "\\text{Electrón } (e^-)", texto: "carga negativa, en la corteza; casi sin masa, determina los enlaces" },
        { math: "A = Z + n", texto: "número de masa = protones + neutrones (los electrones casi no pesan)" }
      ],
      nota: "El número atómico Z (número de protones) identifica al elemento y, en un átomo neutro, es igual al número de electrones. El número de masa A es la suma de protones y neutrones. Los ISÓTOPOS son átomos del mismo elemento (igual Z) con distinto número de neutrones (distinto A)."
    },

    // Reactivos · Estructura atómica (16)
    {
      id: "at1",
      tipo: "ejercicio",
      svgDiagram: "qf-atomo",
      etiqueta: "Temas básicos · Estructura atómica · Reactivo 1 / 16",
      pregunta: "La partícula subatómica con carga POSITIVA que se encuentra en el núcleo es el:",
      opciones: ["Protón", "Electrón", "Neutrón", "Fotón"],
      correcta: 0,
      explicacion: "El protón tiene carga positiva (+) y está en el núcleo. El neutrón también está en el núcleo pero no tiene carga; el electrón está fuera y es negativo.",
      pasos: [
        { pre: "Núcleo + carga positiva: ", math: "p^+" }
      ]
    },
    {
      id: "at2",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Estructura atómica · Reactivo 2 / 16",
      pregunta: "El número atómico (Z) de un elemento corresponde al número de:",
      opciones: ["Protones", "Neutrones", "Protones + neutrones", "Electrones de valencia"],
      correcta: 0,
      explicacion: "El número atómico Z es el número de protones del núcleo; identifica al elemento. En un átomo neutro coincide con el número de electrones.",
      pasos: [
        { pre: "Por definición: ", math: "Z = \\text{n.º de protones}" }
      ]
    },
    {
      id: "at3",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Estructura atómica · Reactivo 3 / 16",
      pregunta: "Un átomo neutro de sodio tiene Z = 11. ¿Cuántos electrones posee?",
      opciones: ["11", "22", "1", "12"],
      correcta: 0,
      explicacion: "En un átomo neutro el número de electrones es igual al número de protones (Z). Si Z = 11, hay 11 electrones.",
      pasos: [
        { pre: "Átomo neutro: ", math: "e^- = Z = 11" }
      ]
    },
    {
      id: "at4",
      tipo: "ejercicio",
      svgDiagram: "qf-atomo",
      etiqueta: "Temas básicos · Estructura atómica · Reactivo 4 / 16",
      pregunta: "Un átomo tiene 17 protones y 18 neutrones. Su número de masa (A) es:",
      opciones: ["35", "17", "18", "1"],
      correcta: 0,
      explicacion: "El número de masa es la suma de protones y neutrones: A = Z + n = 17 + 18 = 35 (corresponde al cloro-35).",
      pasos: [
        { pre: "A = protones + neutrones: ", math: "A = 17 + 18 = 35" }
      ]
    },
    {
      id: "at5",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Estructura atómica · Reactivo 5 / 16",
      pregunta: "Los isótopos de un mismo elemento se diferencian en su número de:",
      opciones: ["Neutrones", "Protones", "Electrones de valencia", "Cargas positivas"],
      correcta: 0,
      explicacion: "Los isótopos tienen el mismo número de protones (mismo elemento, mismo Z) pero distinto número de neutrones, por lo que cambia su número de masa A.",
      pasos: [
        { pre: "Mismo Z, distinto A: ", math: "\\Delta\\,\\text{neutrones}" }
      ]
    },
    {
      id: "at6",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Estructura atómica · Reactivo 6 / 16",
      pregunta: "La partícula con carga negativa y masa casi despreciable que gira alrededor del núcleo es el:",
      opciones: ["Electrón", "Protón", "Neutrón", "Núcleo"],
      correcta: 0,
      explicacion: "El electrón tiene carga negativa y una masa ~1836 veces menor que la del protón; se ubica en la corteza (alrededor del núcleo) y participa en los enlaces.",
      pasos: [
        { pre: "Carga negativa, fuera del núcleo: ", math: "e^-" }
      ]
    },
    {
      id: "at7",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Estructura atómica · Reactivo 7 / 16",
      pregunta: "Casi toda la masa de un átomo se concentra en:",
      opciones: ["El núcleo (protones y neutrones)", "La nube de electrones", "Los electrones de valencia", "El espacio vacío"],
      correcta: 0,
      explicacion: "Protones y neutrones (en el núcleo) aportan prácticamente toda la masa; los electrones pesan muy poco. El átomo es, en su mayor parte, espacio vacío.",
      pasos: [
        { pre: "Masa = p⁺ + n⁰: ", math: "\\text{núcleo}" }
      ]
    },
    {
      id: "at8",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Estructura atómica · Reactivo 8 / 16",
      pregunta: "Un catión se forma cuando un átomo neutro:",
      opciones: ["Pierde electrones", "Gana electrones", "Pierde protones", "Gana neutrones"],
      correcta: 0,
      explicacion: "Al perder electrones, el átomo queda con más protones que electrones: carga positiva neta (catión, p. ej. Na⁺). Si gana electrones forma un anión (negativo).",
      pasos: [
        { pre: "Pierde e⁻ → carga +: ", math: "\\text{catión}" }
      ]
    },
    {
      id: "at9",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Estructura atómica · Reactivo 9 / 16",
      pregunta: "El ion Mg²⁺ (Z = 12) tiene cuántos electrones:",
      opciones: ["10", "12", "14", "2"],
      correcta: 0,
      explicacion: "El magnesio neutro tiene 12 electrones; al formar Mg²⁺ ha perdido 2 electrones, así que le quedan 12 − 2 = 10.",
      pasos: [
        { pre: "Neutro 12 e⁻, pierde 2: ", math: "12 - 2 = 10" }
      ]
    },
    {
      id: "at10",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Estructura atómica · Reactivo 10 / 16",
      pregunta: "El modelo atómico que ubica los electrones en niveles u órbitas definidas alrededor del núcleo fue propuesto por:",
      opciones: ["Bohr", "Dalton", "Thomson", "Demócrito"],
      correcta: 0,
      explicacion: "Bohr propuso electrones girando en niveles o capas de energía definidas. Dalton imaginó átomos como esferas indivisibles; Thomson, el modelo del 'budín con pasas'.",
      pasos: [
        { pre: "Electrones en órbitas/niveles: ", math: "\\text{Bohr}" }
      ]
    },
    {
      id: "at11",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Estructura atómica · Reactivo 11 / 16",
      pregunta: "El número máximo de electrones que caben en el primer nivel de energía (n = 1) es:",
      opciones: ["2", "8", "18", "1"],
      correcta: 0,
      explicacion: "El primer nivel (n = 1) admite como máximo 2 electrones (subnivel 1s). El segundo nivel admite 8.",
      pasos: [
        { pre: "Regla 2n²: ", math: "2(1)^2 = 2" }
      ]
    },
    {
      id: "at12",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Estructura atómica · Reactivo 12 / 16",
      pregunta: "La configuración electrónica del oxígeno (Z = 8) es:",
      opciones: ["1s² 2s² 2p⁴", "1s² 2s² 2p⁶", "1s² 2s² 2p²", "1s² 2p⁶"],
      correcta: 0,
      explicacion: "Se reparten 8 electrones en orden de energía: 1s² (2) + 2s² (2) + 2p⁴ (4) = 8 electrones.",
      pasos: [
        { pre: "8 electrones: ", math: "1s^2\\,2s^2\\,2p^4" }
      ]
    },
    {
      id: "at13",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Estructura atómica · Reactivo 13 / 16",
      pregunta: "Los electrones de la última capa, responsables de los enlaces químicos, se llaman electrones de:",
      opciones: ["Valencia", "Núcleo", "Masa", "Carga"],
      correcta: 0,
      explicacion: "Los electrones de valencia están en el nivel más externo y son los que participan en la formación de enlaces; determinan las propiedades químicas del elemento.",
      pasos: [
        { pre: "Última capa, enlazan: ", math: "\\text{valencia}" }
      ]
    },
    {
      id: "at14",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Estructura atómica · Reactivo 14 / 16",
      pregunta: "El anión cloruro Cl⁻ (Z = 17) tiene cuántos electrones:",
      opciones: ["18", "17", "16", "35"],
      correcta: 0,
      explicacion: "El cloro neutro tiene 17 electrones; al ganar 1 electrón forma Cl⁻ con 17 + 1 = 18 electrones (estructura de gas noble, argón).",
      pasos: [
        { pre: "Gana 1 e⁻: ", math: "17 + 1 = 18" }
      ]
    },
    {
      id: "at15",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Estructura atómica · Reactivo 15 / 16",
      pregunta: "Si un átomo tiene número de masa A = 23 y Z = 11, ¿cuántos neutrones tiene?",
      opciones: ["12", "11", "23", "34"],
      correcta: 0,
      explicacion: "Los neutrones se obtienen restando: n = A − Z = 23 − 11 = 12 (es el sodio-23).",
      pasos: [
        { pre: "n = A − Z: ", math: "23 - 11 = 12" }
      ]
    },
    {
      id: "at16",
      tipo: "ejercicio",
      svgDiagram: "qf-atomo",
      etiqueta: "Temas básicos · Estructura atómica · Reactivo 16 / 16",
      pregunta: "El concepto del átomo como la partícula más pequeña e indivisible fue introducido en la antigüedad por:",
      opciones: ["Demócrito", "Bohr", "Rutherford", "Chadwick"],
      correcta: 0,
      explicacion: "Demócrito (filósofo griego) propuso que la materia estaba formada por partículas indivisibles llamadas 'átomos'. Los demás son científicos modernos que describieron su estructura.",
      pasos: [
        { pre: "Idea filosófica del átomo: ", math: "\\text{Demócrito}" }
      ]
    },

    // ══ SUBTEMA 3 · TABLA PERIÓDICA Y ENLACE ══════════════════════════════════
    {
      id: "tabla",
      tipo: "concepto",
      titulo: "Tabla periódica y enlace químico",
      etiqueta: "Cómo se organizan y se unen los elementos",
      formula: "\\text{octeto: 8 } e^- \\text{ de valencia} \\;\\Rightarrow\\; \\text{estabilidad (gas noble)}",
      svgDiagram: "qf-tabla",
      items: [
        { math: "\\text{Grupos / periodos}", texto: "columnas = grupos (misma valencia); filas = periodos (mismo nivel externo)" },
        { math: "\\text{Metales / no metales}", texto: "metales (izq.) ceden e⁻; no metales (der.) captan e⁻; metaloides en el límite" },
        { math: "\\text{Enlace iónico}", texto: "metal + no metal: se TRANSFIEREN electrones (NaCl); gran diferencia de electronegatividad" },
        { math: "\\text{Enlace covalente}", texto: "no metal + no metal: se COMPARTEN electrones (H₂O, CO₂); poca diferencia de electronegatividad" }
      ],
      nota: "La regla del octeto: los átomos tienden a ganar, perder o compartir electrones hasta tener 8 en su última capa (como los gases nobles). La ELECTRONEGATIVIDAD (capacidad de atraer electrones) crece hacia la derecha y hacia arriba; el flúor es el más electronegativo. Gran diferencia → enlace iónico; poca diferencia → covalente; nula (entre metales) → enlace metálico."
    },

    // Reactivos · Tabla periódica y enlace (16)
    {
      id: "tp1",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Tabla periódica y enlace · Reactivo 1 / 16",
      pregunta: "¿Qué familia de elementos de la tabla periódica es la MENOS reactiva?",
      opciones: ["Gases nobles", "Metales alcalinos", "Halógenos", "Metales alcalinotérreos"],
      correcta: 0,
      explicacion: "Los gases nobles (He, Ne, Ar…) ya tienen su octeto completo (8 electrones de valencia, salvo el He con 2), por lo que son muy estables y prácticamente no reaccionan.",
      pasos: [
        { pre: "Octeto completo → estable: ", math: "\\text{gases nobles}" }
      ]
    },
    {
      id: "tp2",
      tipo: "ejercicio",
      svgDiagram: "qf-tabla",
      etiqueta: "Temas básicos · Tabla periódica y enlace · Reactivo 2 / 16",
      pregunta: "Cuando un metal cede electrones a un no metal y se forman iones de carga opuesta, el enlace es:",
      opciones: ["Iónico", "Covalente", "Metálico", "Puente de hidrógeno"],
      correcta: 0,
      explicacion: "En el enlace iónico hay transferencia de electrones: el metal forma un catión (+) y el no metal un anión (−); la atracción electrostática los une (NaCl).",
      pasos: [
        { pre: "Metal + no metal, transfiere e⁻: ", math: "\\text{iónico}" }
      ]
    },
    {
      id: "tp3",
      tipo: "ejercicio",
      svgDiagram: "qf-tabla",
      etiqueta: "Temas básicos · Tabla periódica y enlace · Reactivo 3 / 16",
      pregunta: "El enlace que se forma cuando dos no metales COMPARTEN pares de electrones se llama:",
      opciones: ["Covalente", "Iónico", "Metálico", "Iónico-polar"],
      correcta: 0,
      explicacion: "Entre no metales (electronegatividad parecida) los electrones se comparten en lugar de transferirse: enlace covalente (H₂, O₂, H₂O, CO₂).",
      pasos: [
        { pre: "No metal + no metal, comparten e⁻: ", math: "\\text{covalente}" }
      ]
    },
    {
      id: "tp4",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Tabla periódica y enlace · Reactivo 4 / 16",
      pregunta: "La regla del octeto establece que los átomos tienden a tener en su última capa:",
      opciones: ["8 electrones", "2 protones", "8 neutrones", "18 electrones"],
      correcta: 0,
      explicacion: "Según la regla del octeto, los átomos ganan, pierden o comparten electrones para completar 8 en su capa de valencia (configuración estable de gas noble).",
      pasos: [
        { pre: "Estabilidad de gas noble: ", math: "8\\,e^- \\text{ de valencia}" }
      ]
    },
    {
      id: "tp5",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Tabla periódica y enlace · Reactivo 5 / 16",
      pregunta: "La capacidad de un átomo para atraer hacia sí los electrones de un enlace se denomina:",
      opciones: ["Electronegatividad", "Energía de ionización", "Radio atómico", "Masa molar"],
      correcta: 0,
      explicacion: "La electronegatividad mide cuánto atrae un átomo los electrones compartidos. Aumenta hacia la derecha y hacia arriba en la tabla; el flúor es el más electronegativo.",
      pasos: [
        { pre: "Atrae electrones de enlace: ", math: "\\text{electronegatividad}" }
      ]
    },
    {
      id: "tp6",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Tabla periódica y enlace · Reactivo 6 / 16",
      pregunta: "Los elementos de la izquierda de la tabla periódica, que ceden electrones con facilidad y conducen la electricidad, son los:",
      opciones: ["Metales", "No metales", "Gases nobles", "Halógenos"],
      correcta: 0,
      explicacion: "Los metales (izquierda y centro) tienen pocos electrones de valencia, los ceden con facilidad (forman cationes) y son buenos conductores. Los no metales (derecha) tienden a captarlos.",
      pasos: [
        { pre: "Izquierda, ceden e⁻: ", math: "\\text{metales}" }
      ]
    },
    {
      id: "tp7",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Tabla periódica y enlace · Reactivo 7 / 16",
      pregunta: "Las columnas verticales de la tabla periódica, cuyos elementos tienen propiedades semejantes, se llaman:",
      opciones: ["Grupos o familias", "Periodos", "Bloques d", "Niveles"],
      correcta: 0,
      explicacion: "Los grupos (o familias) son las columnas; sus elementos comparten el mismo número de electrones de valencia y propiedades químicas parecidas. Las filas se llaman periodos.",
      pasos: [
        { pre: "Columnas con igual valencia: ", math: "\\text{grupos}" }
      ]
    },
    {
      id: "tp8",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Tabla periódica y enlace · Reactivo 8 / 16",
      pregunta: "Los elementos con propiedades intermedias entre metales y no metales (como el silicio) se llaman:",
      opciones: ["Metaloides", "Halógenos", "Lantánidos", "Gases nobles"],
      correcta: 0,
      explicacion: "Los metaloides (B, Si, Ge, As…) tienen propiedades intermedias; algunos son semiconductores. Se ubican en la 'escalera' que separa metales de no metales.",
      pasos: [
        { pre: "Intermedios metal/no metal: ", math: "\\text{metaloides}" }
      ]
    },
    {
      id: "tp9",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Tabla periódica y enlace · Reactivo 9 / 16",
      pregunta: "La familia de los halógenos (F, Cl, Br, I) es muy reactiva porque sus átomos necesitan ganar ________ electrón para completar el octeto.",
      opciones: ["1", "2", "3", "8"],
      correcta: 0,
      explicacion: "Los halógenos tienen 7 electrones de valencia; les falta solo 1 para llegar a 8, por eso captan electrones con gran facilidad y son muy reactivos.",
      pasos: [
        { pre: "7 de valencia, falta 1: ", math: "8 - 7 = 1" }
      ]
    },
    {
      id: "tp10",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Tabla periódica y enlace · Reactivo 10 / 16",
      pregunta: "El compuesto NaCl (sal de mesa) presenta un enlace de tipo:",
      opciones: ["Iónico", "Covalente no polar", "Metálico", "Puente de hidrógeno"],
      correcta: 0,
      explicacion: "El sodio (metal) cede un electrón al cloro (no metal): se forman Na⁺ y Cl⁻ que se atraen. Es un enlace iónico, típico de metal + no metal.",
      pasos: [
        { pre: "Na⁺ + Cl⁻: ", math: "\\text{iónico}" }
      ]
    },
    {
      id: "tp11",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Tabla periódica y enlace · Reactivo 11 / 16",
      pregunta: "La estructura de Lewis representa de un átomo principalmente sus:",
      opciones: ["Electrones de valencia", "Neutrones", "Protones", "Isótopos"],
      correcta: 0,
      explicacion: "La estructura (o símbolo) de Lewis muestra los electrones de valencia como puntos alrededor del símbolo del elemento; sirve para predecir cómo se forman los enlaces.",
      pasos: [
        { pre: "Puntos = electrones externos: ", math: "\\text{valencia}" }
      ]
    },
    {
      id: "tp12",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Tabla periódica y enlace · Reactivo 12 / 16",
      pregunta: "Conforme se avanza hacia la DERECHA en un periodo de la tabla, la electronegatividad generalmente:",
      opciones: ["Aumenta", "Disminuye", "No cambia", "Se vuelve cero"],
      correcta: 0,
      explicacion: "Dentro de un periodo, la electronegatividad aumenta hacia la derecha (los no metales atraen más los electrones). También aumenta hacia arriba en un grupo.",
      pasos: [
        { pre: "Hacia la derecha: ", math: "\\uparrow \\text{electronegatividad}" }
      ]
    },
    {
      id: "tp13",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Tabla periódica y enlace · Reactivo 13 / 16",
      pregunta: "El enlace entre átomos de un mismo metal, donde los electrones forman una 'nube' compartida, se llama:",
      opciones: ["Metálico", "Iónico", "Covalente polar", "De hidrógeno"],
      correcta: 0,
      explicacion: "En el enlace metálico los cationes quedan inmersos en un 'mar' de electrones móviles; eso explica la conductividad eléctrica y la maleabilidad de los metales.",
      pasos: [
        { pre: "Nube de e⁻ entre metales: ", math: "\\text{metálico}" }
      ]
    },
    {
      id: "tp14",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Tabla periódica y enlace · Reactivo 14 / 16",
      pregunta: "La molécula de agua (H₂O) tiene enlaces covalentes POLARES porque:",
      opciones: ["El oxígeno atrae más los electrones que el hidrógeno", "El hidrógeno cede totalmente sus electrones", "Hay transferencia completa de electrones", "Es un enlace entre dos metales"],
      correcta: 0,
      explicacion: "El oxígeno es más electronegativo que el hidrógeno: comparte los electrones pero los atrae hacia sí, generando cargas parciales (δ⁻ en O, δ⁺ en H). Por eso el enlace es covalente polar.",
      pasos: [
        { pre: "Comparten, pero O atrae más: ", math: "\\text{covalente polar}" }
      ]
    },
    {
      id: "tp15",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Tabla periódica y enlace · Reactivo 15 / 16",
      pregunta: "Los metales alcalinos (grupo 1: Li, Na, K) son muy reactivos porque tienden a:",
      opciones: ["Perder 1 electrón de valencia", "Ganar 7 electrones", "Compartir 4 electrones", "No reaccionar"],
      correcta: 0,
      explicacion: "Los alcalinos tienen 1 electrón de valencia; lo pierden con facilidad para quedar con octeto, formando cationes +1 (Na⁺, K⁺). Por eso son tan reactivos.",
      pasos: [
        { pre: "1 electrón externo, lo cede: ", math: "\\text{forma } X^+" }
      ]
    },
    {
      id: "tp16",
      tipo: "ejercicio",
      svgDiagram: "qf-tabla",
      etiqueta: "Temas básicos · Tabla periódica y enlace · Reactivo 16 / 16",
      pregunta: "Un enlace covalente NO polar se presenta típicamente entre:",
      opciones: ["Dos átomos iguales (como O₂)", "Un metal y un no metal", "Dos metales", "Un gas noble y un halógeno"],
      correcta: 0,
      explicacion: "Cuando los dos átomos son iguales (misma electronegatividad), comparten los electrones por igual: enlace covalente no polar (O₂, N₂, H₂, Cl₂).",
      pasos: [
        { pre: "Misma electronegatividad: ", math: "\\text{covalente no polar}" }
      ]
    },

    // ══ SUBTEMA 4 · ÓXIDOS, ÁCIDOS, BASES Y SALES ═════════════════════════════
    {
      id: "compuestos",
      tipo: "concepto",
      titulo: "Óxidos, ácidos, bases y sales",
      etiqueta: "Las grandes familias de compuestos inorgánicos",
      formula: "\\text{metal} + \\mathrm{O_2} \\to \\text{óxido básico} \\qquad \\text{no metal} + \\mathrm{O_2} \\to \\text{óxido ácido}",
      svgDiagram: "qf-compuestos",
      items: [
        { math: "\\text{Óxido básico}", texto: "metal + oxígeno (Na₂O, CaO, MgO); con agua dan bases" },
        { math: "\\text{Óxido ácido (anhídrido)}", texto: "no metal + oxígeno (CO₂, SO₃, NO₂); con agua dan ácidos" },
        { math: "\\text{Ácido}", texto: "libera H⁺ (HCl, H₂SO₄, HNO₃); sabor agrio, pH < 7" },
        { math: "\\text{Base / hidróxido}", texto: "libera OH⁻ (NaOH, Mg(OH)₂); tacto jabonoso, pH > 7" },
        { math: "\\text{Sal}", texto: "ácido + base → sal + agua (NaCl, CaCO₃); neutralización" }
      ],
      nota: "Las fórmulas se construyen cruzando las valencias (estados de oxidación). Ejemplos clave: monóxido de carbono CO, hidróxido de magnesio Mg(OH)₂, sulfato de aluminio Al₂(SO₄)₃. Regla rápida: metal + O = óxido básico; no metal + O = óxido ácido (anhídrido); H + no metal/radical = ácido; metal + OH = hidróxido (base); metal + radical de un ácido = sal."
    },

    // Reactivos · Óxidos, ácidos, bases y sales (16)
    {
      id: "co1",
      tipo: "ejercicio",
      svgDiagram: "qf-compuestos",
      etiqueta: "Temas básicos · Óxidos, ácidos, bases y sales · Reactivo 1 / 16",
      pregunta: "Las fórmulas del monóxido de carbono, hidróxido de magnesio y sulfato de aluminio, respectivamente, son:",
      opciones: ["CO, Mg(OH)₂ y Al₂(SO₄)₃", "CO₂, MnOH y Al₂(SO₄)₃", "CO, Mg(OH)₂ y Al₂(SO₃)₂", "CO₂, Mn(OH)₂ y AlSO₄"],
      correcta: 0,
      explicacion: "Monóxido de carbono = CO (un oxígeno). Hidróxido de magnesio = Mg(OH)₂ (Mg²⁺ con dos OH⁻). Sulfato de aluminio = Al₂(SO₄)₃ (Al³⁺ con SO₄²⁻, cruzando valencias).",
      pasos: [
        { pre: "Cruzando valencias: ", math: "\\mathrm{CO,\\; Mg(OH)_2,\\; Al_2(SO_4)_3}" }
      ]
    },
    {
      id: "co2",
      tipo: "ejercicio",
      svgDiagram: "qf-compuestos",
      etiqueta: "Temas básicos · Óxidos, ácidos, bases y sales · Reactivo 2 / 16",
      pregunta: "A partir de la reacción C(s) + O₂(g) → x, el producto x es un:",
      opciones: ["Óxido ácido", "Óxido básico", "Hidróxido", "Oxisal"],
      correcta: 0,
      explicacion: "El carbono es un no metal; al combinarse con oxígeno forma CO₂, un óxido ácido (anhídrido). Los óxidos básicos se forman con metales.",
      pasos: [
        { pre: "No metal + O₂: ", math: "\\mathrm{CO_2} = \\text{óxido ácido}" }
      ]
    },
    {
      id: "co3",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Óxidos, ácidos, bases y sales · Reactivo 3 / 16",
      pregunta: "El compuesto que resulta de combinar un METAL con oxígeno se denomina:",
      opciones: ["Óxido básico", "Óxido ácido", "Ácido", "Sal"],
      correcta: 0,
      explicacion: "Metal + oxígeno = óxido básico (Na₂O, CaO, Fe₂O₃). Al reaccionar con agua, los óxidos básicos forman hidróxidos (bases).",
      pasos: [
        { pre: "Metal + O₂: ", math: "\\text{óxido básico}" }
      ]
    },
    {
      id: "co4",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Óxidos, ácidos, bases y sales · Reactivo 4 / 16",
      pregunta: "Una sustancia que en disolución libera iones hidróxido (OH⁻) es una:",
      opciones: ["Base (hidróxido)", "Ácido", "Sal neutra", "Óxido ácido"],
      correcta: 0,
      explicacion: "Las bases o hidróxidos liberan iones OH⁻ en agua (NaOH → Na⁺ + OH⁻). Tienen tacto jabonoso, sabor amargo y pH mayor que 7.",
      pasos: [
        { pre: "Libera OH⁻: ", math: "\\text{base}" }
      ]
    },
    {
      id: "co5",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Óxidos, ácidos, bases y sales · Reactivo 5 / 16",
      pregunta: "Una sustancia que en disolución libera iones hidrógeno (H⁺) es un:",
      opciones: ["Ácido", "Hidróxido", "Óxido básico", "Sal"],
      correcta: 0,
      explicacion: "Los ácidos liberan H⁺ (HCl → H⁺ + Cl⁻). Tienen sabor agrio, enrojecen el papel tornasol y su pH es menor que 7.",
      pasos: [
        { pre: "Libera H⁺: ", math: "\\text{ácido}" }
      ]
    },
    {
      id: "co6",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Óxidos, ácidos, bases y sales · Reactivo 6 / 16",
      pregunta: "La reacción entre un ácido y una base que produce una sal y agua se llama:",
      opciones: ["Neutralización", "Combustión", "Oxidación", "Síntesis de óxido"],
      correcta: 0,
      explicacion: "En la neutralización el H⁺ del ácido y el OH⁻ de la base forman agua, y el resto de los iones forman la sal: HCl + NaOH → NaCl + H₂O.",
      pasos: [
        { pre: "Ácido + base: ", math: "\\text{sal} + \\mathrm{H_2O}" }
      ]
    },
    {
      id: "co7",
      tipo: "ejercicio",
      svgDiagram: "qf-compuestos",
      etiqueta: "Temas básicos · Óxidos, ácidos, bases y sales · Reactivo 7 / 16",
      pregunta: "El compuesto NaCl (cloruro de sodio) pertenece a la familia de las/los:",
      opciones: ["Sales", "Ácidos", "Hidróxidos", "Óxidos básicos"],
      correcta: 0,
      explicacion: "El NaCl es una sal: proviene de la neutralización del ácido clorhídrico (HCl) con el hidróxido de sodio (NaOH). Resulta de la unión metal + radical del ácido.",
      pasos: [
        { pre: "HCl + NaOH → ", math: "\\mathrm{NaCl}\\;(\\text{sal})" }
      ]
    },
    {
      id: "co8",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Óxidos, ácidos, bases y sales · Reactivo 8 / 16",
      pregunta: "Cuando un óxido ÁCIDO (anhídrido) reacciona con agua, se forma un/una:",
      opciones: ["Ácido", "Base", "Sal", "Metal"],
      correcta: 0,
      explicacion: "Óxido ácido + agua → ácido. Por ejemplo CO₂ + H₂O → H₂CO₃ (ácido carbónico), o SO₃ + H₂O → H₂SO₄. Por eso la lluvia ácida se forma con óxidos de azufre y nitrógeno.",
      pasos: [
        { pre: "Anhídrido + H₂O: ", math: "\\text{ácido}" }
      ]
    },
    {
      id: "co9",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Óxidos, ácidos, bases y sales · Reactivo 9 / 16",
      pregunta: "Cuando un óxido BÁSICO reacciona con agua, se forma un/una:",
      opciones: ["Base (hidróxido)", "Ácido", "Sal", "Anhídrido"],
      correcta: 0,
      explicacion: "Óxido básico + agua → hidróxido (base). Por ejemplo CaO + H₂O → Ca(OH)₂ (cal apagada), o Na₂O + H₂O → 2 NaOH.",
      pasos: [
        { pre: "Óxido básico + H₂O: ", math: "\\text{hidróxido}" }
      ]
    },
    {
      id: "co10",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Óxidos, ácidos, bases y sales · Reactivo 10 / 16",
      pregunta: "La fórmula del ácido sulfúrico es:",
      opciones: ["H₂SO₄", "H₂SO₃", "HSO₄", "Na₂SO₄"],
      correcta: 0,
      explicacion: "El ácido sulfúrico es H₂SO₄ (dos hidrógenos, azufre y cuatro oxígenos). El H₂SO₃ es el sulfuroso y el Na₂SO₄ es una sal (sulfato de sodio).",
      pasos: [
        { pre: "Ácido sulfúrico: ", math: "\\mathrm{H_2SO_4}" }
      ]
    },
    {
      id: "co11",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Óxidos, ácidos, bases y sales · Reactivo 11 / 16",
      pregunta: "El hidróxido de calcio Ca(OH)₂ se clasifica como:",
      opciones: ["Base", "Ácido", "Óxido ácido", "Sal"],
      correcta: 0,
      explicacion: "El Ca(OH)₂ contiene el grupo OH⁻: es un hidróxido (base). Se conoce como cal apagada y se usa para neutralizar suelos ácidos.",
      pasos: [
        { pre: "Tiene OH⁻: ", math: "\\text{base}" }
      ]
    },
    {
      id: "co12",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Óxidos, ácidos, bases y sales · Reactivo 12 / 16",
      pregunta: "La fórmula del óxido de calcio (cal viva), sabiendo que el calcio actúa con valencia 2 y el oxígeno con 2, es:",
      opciones: ["CaO", "Ca₂O", "CaO₂", "Ca(OH)₂"],
      correcta: 0,
      explicacion: "Al cruzar las valencias (Ca²⁺ y O²⁻), los subíndices se simplifican: Ca₂O₂ → CaO. Es un óxido básico (metal + oxígeno).",
      pasos: [
        { pre: "Cruzar y simplificar 2/2: ", math: "\\mathrm{CaO}" }
      ]
    },
    {
      id: "co13",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Óxidos, ácidos, bases y sales · Reactivo 13 / 16",
      pregunta: "Una característica de los ÁCIDOS es que:",
      opciones: ["Enrojecen el papel tornasol y tienen sabor agrio", "Tienen tacto jabonoso y sabor amargo", "Su pH es mayor que 7", "Liberan iones OH⁻"],
      correcta: 0,
      explicacion: "Los ácidos enrojecen el papel tornasol, tienen sabor agrio y pH < 7. El tacto jabonoso, el sabor amargo, el pH > 7 y los OH⁻ son propiedades de las bases.",
      pasos: [
        { pre: "Ácido: ", math: "\\text{agrio, tornasol rojo, pH} < 7" }
      ]
    },
    {
      id: "co14",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Óxidos, ácidos, bases y sales · Reactivo 14 / 16",
      pregunta: "El gas que se forma en la combustión completa del carbono y es un óxido ácido es el:",
      opciones: ["Dióxido de carbono (CO₂)", "Hidróxido de sodio (NaOH)", "Cloruro de sodio (NaCl)", "Óxido de calcio (CaO)"],
      correcta: 0,
      explicacion: "C + O₂ → CO₂. El dióxido de carbono es un óxido ácido (no metal + oxígeno) que con agua produce ácido carbónico.",
      pasos: [
        { pre: "C + O₂ → ", math: "\\mathrm{CO_2}" }
      ]
    },
    {
      id: "co15",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · Óxidos, ácidos, bases y sales · Reactivo 15 / 16",
      pregunta: "El bicarbonato de sodio (NaHCO₃), usado como antiácido, neutraliza al ácido del estómago porque actúa como:",
      opciones: ["Base", "Ácido fuerte", "Óxido ácido", "Metal puro"],
      correcta: 0,
      explicacion: "El bicarbonato es de carácter básico: reacciona con el exceso de ácido (HCl) del estómago neutralizándolo y liberando CO₂, lo que alivia la acidez.",
      pasos: [
        { pre: "Neutraliza ácido → carácter: ", math: "\\text{básico}" }
      ]
    },
    {
      id: "co16",
      tipo: "ejercicio",
      svgDiagram: "qf-compuestos",
      etiqueta: "Temas básicos · Óxidos, ácidos, bases y sales · Reactivo 16 / 16",
      pregunta: "La reacción HCl + NaOH → NaCl + H₂O es un ejemplo de formación de una:",
      opciones: ["Sal por neutralización", "Base por hidratación", "Óxido por combustión", "Ácido por hidrólisis"],
      correcta: 0,
      explicacion: "El ácido (HCl) y la base (NaOH) reaccionan: el H⁺ y el OH⁻ forman agua, y Na⁺ con Cl⁻ forman la sal NaCl. Es una neutralización.",
      pasos: [
        { pre: "Ácido + base → ", math: "\\text{sal} + \\mathrm{H_2O}" }
      ]
    },

    // ══ SUBTEMA 5 · EL MOL Y LA MASA MOLAR ════════════════════════════════════
    {
      id: "mol",
      tipo: "concepto",
      titulo: "El mol y la masa molar",
      etiqueta: "Contar y pesar partículas",
      formula: "n = \\dfrac{m}{M} \\qquad 1\\,\\text{mol} = 6.022\\times10^{23}\\ \\text{partículas}",
      svgDiagram: "qf-mol",
      items: [
        { math: "1\\,\\text{mol}", texto: "cantidad de sustancia que contiene 6.022×10²³ partículas (número de Avogadro)" },
        { math: "M\\;(\\text{g/mol})", texto: "masa molar: suma de las masas atómicas de la fórmula (H₂O = 18 g/mol)" },
        { math: "n = m/M", texto: "moles = masa (g) ÷ masa molar (g/mol)" },
        { math: "N = n \\cdot N_A", texto: "n.º de partículas = moles × 6.022×10²³" }
      ],
      nota: "El mol es la unidad para contar partículas (átomos, moléculas, iones). Un mol de cualquier sustancia contiene el número de Avogadro de partículas (6.022×10²³) y pesa, en gramos, lo que indica su masa molar. La masa molar se calcula sumando las masas atómicas (de la tabla periódica): por ejemplo, el agua H₂O = 2(1) + 16 = 18 g/mol."
    },

    // Reactivos · El mol y la masa molar (16)
    {
      id: "mo1",
      tipo: "ejercicio",
      svgDiagram: "qf-mol",
      etiqueta: "Temas básicos · El mol y la masa molar · Reactivo 1 / 16",
      pregunta: "¿Cuántas moléculas hay en 18 g de agua (H₂O)? La masa molar del agua es 18 g/mol.",
      opciones: ["6.022×10²³", "18×10²³", "3.011×10²³", "1×10²³"],
      correcta: 0,
      explicacion: "18 g de agua equivalen a n = 18/18 = 1 mol. Un mol contiene 6.022×10²³ moléculas (número de Avogadro).",
      pasos: [
        { pre: "Moles: ", math: "n = \\tfrac{18}{18} = 1\\,\\text{mol}" },
        { pre: "Moléculas: ", math: "1 \\times 6.022\\times10^{23}" }
      ]
    },
    {
      id: "mo2",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · El mol y la masa molar · Reactivo 2 / 16",
      pregunta: "Determina la cantidad de sustancia (moles) que hay en 3.42 g de azúcar. (Masa molar del azúcar = 342 g/mol)",
      opciones: ["0.01 mol", "0.1 mol", "1 mol", "10 mol"],
      correcta: 0,
      explicacion: "n = m/M = 3.42 / 342 = 0.01 mol.",
      pasos: [
        { pre: "n = m/M: ", math: "n = \\tfrac{3.42}{342} = 0.01\\,\\text{mol}" }
      ]
    },
    {
      id: "mo3",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · El mol y la masa molar · Reactivo 3 / 16",
      pregunta: "¿Cuántos gramos de KCl hay en 0.1 mol? (Masa molar del KCl = 74.5 g/mol)",
      opciones: ["7.45 g", "74.5 g", "745 g", "0.745 g"],
      correcta: 0,
      explicacion: "m = n × M = 0.1 × 74.5 = 7.45 g.",
      pasos: [
        { pre: "m = n·M: ", math: "m = 0.1 \\times 74.5 = 7.45\\,\\text{g}" }
      ]
    },
    {
      id: "mo4",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · El mol y la masa molar · Reactivo 4 / 16",
      pregunta: "El número de partículas que contiene un mol de cualquier sustancia (número de Avogadro) es:",
      opciones: ["6.022×10²³", "3.14×10⁸", "1.6×10⁻¹⁹", "9.8×10²³"],
      correcta: 0,
      explicacion: "El número de Avogadro es 6.022×10²³ partículas por mol. Es la base para 'contar' átomos y moléculas a partir de la masa.",
      pasos: [
        { pre: "Por definición: ", math: "N_A = 6.022\\times10^{23}" }
      ]
    },
    {
      id: "mo5",
      tipo: "ejercicio",
      svgDiagram: "qf-mol",
      etiqueta: "Temas básicos · El mol y la masa molar · Reactivo 5 / 16",
      pregunta: "La masa molar del CO₂ es (C = 12, O = 16):",
      opciones: ["44 g/mol", "28 g/mol", "32 g/mol", "16 g/mol"],
      correcta: 0,
      explicacion: "M(CO₂) = 12 + 2(16) = 12 + 32 = 44 g/mol.",
      pasos: [
        { pre: "Sumar masas atómicas: ", math: "12 + 2(16) = 44" }
      ]
    },
    {
      id: "mo6",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · El mol y la masa molar · Reactivo 6 / 16",
      pregunta: "¿Cuántos moles hay en 80 g de NaOH? (Masa molar = 40 g/mol)",
      opciones: ["2 mol", "0.5 mol", "40 mol", "3200 mol"],
      correcta: 0,
      explicacion: "n = m/M = 80 / 40 = 2 mol.",
      pasos: [
        { pre: "n = m/M: ", math: "n = \\tfrac{80}{40} = 2\\,\\text{mol}" }
      ]
    },
    {
      id: "mo7",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · El mol y la masa molar · Reactivo 7 / 16",
      pregunta: "La masa molar del agua (H₂O) es (H = 1, O = 16):",
      opciones: ["18 g/mol", "17 g/mol", "16 g/mol", "34 g/mol"],
      correcta: 0,
      explicacion: "M(H₂O) = 2(1) + 16 = 18 g/mol.",
      pasos: [
        { pre: "2 H + 1 O: ", math: "2(1) + 16 = 18" }
      ]
    },
    {
      id: "mo8",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · El mol y la masa molar · Reactivo 8 / 16",
      pregunta: "¿Cuántos gramos pesa 1 mol de oxígeno molecular O₂? (O = 16)",
      opciones: ["32 g", "16 g", "8 g", "64 g"],
      correcta: 0,
      explicacion: "El O₂ tiene dos átomos de oxígeno: M = 2(16) = 32 g/mol, así que 1 mol pesa 32 g.",
      pasos: [
        { pre: "2 átomos de O: ", math: "2(16) = 32\\,\\text{g}" }
      ]
    },
    {
      id: "mo9",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · El mol y la masa molar · Reactivo 9 / 16",
      pregunta: "¿Cuántas moléculas hay en 2 moles de cualquier sustancia?",
      opciones: ["1.2044×10²⁴", "6.022×10²³", "3.011×10²³", "2×10²³"],
      correcta: 0,
      explicacion: "N = n × N_A = 2 × 6.022×10²³ = 1.2044×10²⁴ moléculas.",
      pasos: [
        { pre: "N = n·N_A: ", math: "2 \\times 6.022\\times10^{23} = 1.2044\\times10^{24}" }
      ]
    },
    {
      id: "mo10",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · El mol y la masa molar · Reactivo 10 / 16",
      pregunta: "La masa molar del NaCl es (Na = 23, Cl = 35.5):",
      opciones: ["58.5 g/mol", "48.5 g/mol", "23 g/mol", "70 g/mol"],
      correcta: 0,
      explicacion: "M(NaCl) = 23 + 35.5 = 58.5 g/mol.",
      pasos: [
        { pre: "Na + Cl: ", math: "23 + 35.5 = 58.5" }
      ]
    },
    {
      id: "mo11",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · El mol y la masa molar · Reactivo 11 / 16",
      pregunta: "Si 1 mol de carbono pesa 12 g, ¿cuántos gramos pesan 3 moles de carbono?",
      opciones: ["36 g", "12 g", "4 g", "24 g"],
      correcta: 0,
      explicacion: "m = n × M = 3 × 12 = 36 g.",
      pasos: [
        { pre: "m = n·M: ", math: "3 \\times 12 = 36\\,\\text{g}" }
      ]
    },
    {
      id: "mo12",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · El mol y la masa molar · Reactivo 12 / 16",
      pregunta: "La masa molar del ácido sulfúrico H₂SO₄ es (H = 1, S = 32, O = 16):",
      opciones: ["98 g/mol", "82 g/mol", "66 g/mol", "114 g/mol"],
      correcta: 0,
      explicacion: "M = 2(1) + 32 + 4(16) = 2 + 32 + 64 = 98 g/mol.",
      pasos: [
        { pre: "2H + S + 4O: ", math: "2 + 32 + 64 = 98" }
      ]
    },
    {
      id: "mo13",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · El mol y la masa molar · Reactivo 13 / 16",
      pregunta: "¿Cuántos moles representan 3.011×10²³ moléculas?",
      opciones: ["0.5 mol", "1 mol", "2 mol", "3 mol"],
      correcta: 0,
      explicacion: "n = N/N_A = 3.011×10²³ / 6.022×10²³ = 0.5 mol (la mitad de un mol).",
      pasos: [
        { pre: "n = N/N_A: ", math: "\\tfrac{3.011\\times10^{23}}{6.022\\times10^{23}} = 0.5" }
      ]
    },
    {
      id: "mo14",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · El mol y la masa molar · Reactivo 14 / 16",
      pregunta: "El mol es una unidad que sirve para medir la:",
      opciones: ["Cantidad de sustancia", "Temperatura", "Presión", "Velocidad de reacción"],
      correcta: 0,
      explicacion: "El mol es la unidad del Sistema Internacional para la cantidad de sustancia; permite relacionar la masa con el número de partículas.",
      pasos: [
        { pre: "Magnitud medida: ", math: "\\text{cantidad de sustancia}" }
      ]
    },
    {
      id: "mo15",
      tipo: "ejercicio",
      etiqueta: "Temas básicos · El mol y la masa molar · Reactivo 15 / 16",
      pregunta: "¿Cuántos gramos hay en 0.25 mol de agua? (M = 18 g/mol)",
      opciones: ["4.5 g", "18 g", "72 g", "0.25 g"],
      correcta: 0,
      explicacion: "m = n × M = 0.25 × 18 = 4.5 g.",
      pasos: [
        { pre: "m = n·M: ", math: "0.25 \\times 18 = 4.5\\,\\text{g}" }
      ]
    },
    {
      id: "mo16",
      tipo: "ejercicio",
      svgDiagram: "qf-mol",
      etiqueta: "Temas básicos · El mol y la masa molar · Reactivo 16 / 16",
      pregunta: "La masa molar de un compuesto se obtiene:",
      opciones: ["Sumando las masas atómicas de todos sus átomos", "Multiplicando el número de Avogadro por la masa", "Dividiendo la masa entre los moles siempre", "Contando solo los átomos de hidrógeno"],
      correcta: 0,
      explicacion: "La masa molar (g/mol) es la suma de las masas atómicas de todos los átomos de la fórmula, tomadas de la tabla periódica.",
      pasos: [
        { pre: "Sumar masas atómicas: ", math: "M = \\textstyle\\sum (\\text{masas atómicas})" }
      ]
    },

    // ── RESUMEN ───────────────────────────────────────────────────────────────
    {
      id: "resumen",
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Ideas clave de la Unidad 1",
      puntos: [
        { math: "\\text{Materia}", texto: "sustancia pura (elemento/compuesto) vs mezcla (homogénea/heterogénea); las mezclas se separan por métodos físicos" },
        { math: "A = Z + n", texto: "Z = protones (define el elemento); A = protones + neutrones; isótopos = mismo Z, distinto n" },
        { math: "\\text{Octeto}", texto: "iónico = metal + no metal (transfiere e⁻); covalente = no metal + no metal (comparte e⁻); metálico = entre metales" },
        { math: "\\text{Compuestos}", texto: "metal + O = óxido básico; no metal + O = óxido ácido; ácido (H⁺) + base (OH⁻) → sal + agua" },
        { math: "n = m/M", texto: "1 mol = 6.022×10²³ partículas; masa molar = suma de masas atómicas (H₂O = 18 g/mol)" }
      ]
    }

  ]
};
