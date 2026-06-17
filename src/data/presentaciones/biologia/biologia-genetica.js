// Datos de la presentación: Genética y Biotecnología (Biología · UNAM · Área 1)
// Subtemas: ADN, ARN y dogma central · Leyes de Mendel y Punnett · Mutaciones · Biotecnología → Resumen.
// 16 reactivos por subtema.

export const PRESENTACION = {
  id: "biologia-genetica",
  titulo: "Genética y Biotecnología",
  materia: "Biología",
  subtema: "Herencia e información genética",
  slides: [

    // ── PORTADA ───────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Genética y Biotecnología",
      subtitulo: "ADN y ARN · Dogma central · Leyes de Mendel · Cuadro de Punnett · Mutaciones · ADN recombinante",
      etiqueta: "Biología · UNAM",
      svgDiagram: "gen-portada",
    },

    // ══ SUBTEMA 1 · ADN, ARN Y DOGMA CENTRAL ══════════════════════════════════
    {
      id: "adn",
      tipo: "concepto",
      titulo: "ADN y ARN",
      etiqueta: "La molécula de la herencia",
      formula: "A\\text{–}T \\quad C\\text{–}G",
      svgDiagram: "gen-adn",
      items: [
        { math: "\\text{ADN}", texto: "doble hélice; guarda la información genética. Bases: A, T, C, G" },
        { math: "\\text{Apareamiento}", texto: "A se une con T, y C con G (bases complementarias)" },
        { math: "\\text{ARN}", texto: "una sola cadena; lleva el mensaje del ADN. En vez de T usa U (uracilo)" },
        { math: "\\text{Gen}", texto: "fragmento de ADN que codifica una proteína o carácter" }
      ],
      nota: "El ADN fue descrito como doble hélice por Watson y Crick (1953). Las bases nitrogenadas se aparean A–T y C–G. Un gen es un segmento de ADN con la «receta» de una proteína. El conjunto de todo el ADN de un organismo es su genoma."
    },

    {
      id: "dogma",
      tipo: "criterio_detalle",
      titulo: "El dogma central",
      etiqueta: "ADN → ARN → proteína",
      svgDiagram: "gen-dogma",
      enunciado: "La información fluye del ADN a las proteínas en tres pasos: la REPLICACIÓN copia el ADN (para dividirse); la TRANSCRIPCIÓN pasa la información del ADN a un ARN mensajero; la TRADUCCIÓN lee ese ARN en los ribosomas para fabricar la proteína.",
      math: "\\text{ADN} \\xrightarrow{\\text{transcripción}} \\text{ARN} \\xrightarrow{\\text{traducción}} \\text{proteína}",
      por_que: "Cada paso tiene un nombre preciso: replicación = copiar ADN a ADN; transcripción = pasar de ADN a ARN; traducción = pasar de ARN a proteína (en el ribosoma). El orden y los nombres son una pregunta clásica de examen.",
      math_razon: "\\text{ADN} \\xrightarrow{\\text{replicación}} \\text{ADN (copia)}"
    },

    // Reactivos · ADN y dogma (16)
    {
      id: "ad1",
      tipo: "ejercicio",
      svgDiagram: "gen-adn",
      etiqueta: "Genética · ADN · Reactivo 1 / 16",
      pregunta: "En la molécula de ADN, la base adenina (A) siempre se aparea con:",
      opciones: ["Timina (T)", "Citosina (C)", "Guanina (G)", "Uracilo (U)"],
      correcta: 0,
      explicacion: "Las bases del ADN se aparean de forma complementaria: A con T y C con G. El uracilo (U) sustituye a la timina, pero solo en el ARN.",
      pasos: [
        { pre: "Bases complementarias: ", math: "A\\text{–}T,\\quad C\\text{–}G" }
      ]
    },
    {
      id: "ad2",
      tipo: "ejercicio",
      svgDiagram: "gen-dogma",
      etiqueta: "Genética · Dogma central · Reactivo 2 / 16",
      pregunta: "El proceso en el que la información del ADN se copia a una molécula de ARN mensajero se llama:",
      opciones: ["Transcripción", "Traducción", "Replicación", "Mutación"],
      correcta: 0,
      explicacion: "La transcripción es el paso ADN → ARN: la información del gen se copia a un ARN mensajero que luego saldrá del núcleo para ser traducido.",
      pasos: [
        { pre: "ADN → ARN: ", math: "\\text{transcripción}" }
      ]
    },
    {
      id: "ad3",
      tipo: "ejercicio",
      svgDiagram: "gen-dogma",
      etiqueta: "Genética · Dogma central · Reactivo 3 / 16",
      pregunta: "La síntesis de proteínas a partir del ARN mensajero ocurre en los ribosomas y se denomina:",
      opciones: ["Traducción", "Transcripción", "Replicación", "Fecundación"],
      correcta: 0,
      explicacion: "La traducción es el paso ARN → proteína: el ribosoma lee el ARN mensajero y une los aminoácidos en el orden indicado para formar la proteína.",
      pasos: [
        { pre: "ARN → proteína: ", math: "\\text{traducción (en el ribosoma)}" }
      ]
    },
    {
      id: "ad4",
      tipo: "ejercicio",
      etiqueta: "Genética · ADN · Reactivo 4 / 16",
      pregunta: "Un segmento de ADN que contiene la información para un carácter o una proteína se llama:",
      opciones: ["Gen", "Cromosoma", "Ribosoma", "Nucleótido"],
      correcta: 0,
      explicacion: "El gen es la unidad de la herencia: un fragmento de ADN con la información de una proteína o carácter. Muchos genes se organizan en un cromosoma.",
      pasos: [
        { pre: "Unidad de herencia: ", math: "\\text{gen}" }
      ]
    },
    {
      id: "ad5",
      tipo: "ejercicio",
      svgDiagram: "gen-adn",
      etiqueta: "Genética · ADN · Reactivo 5 / 16",
      pregunta: "La estructura de doble hélice del ADN fue propuesta en 1953 por:",
      opciones: ["Watson y Crick", "Mendel y Darwin", "Hooke y Schwann", "Oparin y Haldane"],
      correcta: 0,
      explicacion: "James Watson y Francis Crick describieron en 1953 la estructura de doble hélice del ADN, apoyándose en los datos de Rosalind Franklin.",
      pasos: [
        { pre: "Doble hélice (1953): ", math: "\\text{Watson y Crick}" }
      ]
    },
    {
      id: "ad6",
      tipo: "ejercicio",
      svgDiagram: "gen-adn",
      etiqueta: "Genética · ADN · Reactivo 6 / 16",
      pregunta: "En el ADN, la citosina (C) se aparea siempre con:",
      opciones: ["Guanina (G)", "Adenina (A)", "Timina (T)", "Uracilo (U)"],
      correcta: 0,
      explicacion: "La citosina se aparea con la guanina (C–G), mientras que la adenina lo hace con la timina (A–T).",
      pasos: [
        { pre: "Complementaria: ", math: "C\\text{–}G" }
      ]
    },
    {
      id: "ad7",
      tipo: "ejercicio",
      etiqueta: "Genética · ADN · Reactivo 7 / 16",
      pregunta: "Una diferencia entre el ARN y el ADN es que el ARN:",
      opciones: ["Tiene una sola cadena y usa uracilo en vez de timina", "Tiene doble hélice", "No contiene bases nitrogenadas", "Guarda toda la información hereditaria"],
      correcta: 0,
      explicacion: "El ARN es de una sola cadena y emplea uracilo (U) en lugar de timina. El ADN es de doble cadena y usa timina.",
      pasos: [
        { pre: "ARN: ", math: "\\text{1 cadena, U en vez de T}" }
      ]
    },
    {
      id: "ad8",
      tipo: "ejercicio",
      svgDiagram: "gen-dogma",
      etiqueta: "Genética · Dogma central · Reactivo 8 / 16",
      pregunta: "El proceso por el cual el ADN se copia a sí mismo antes de la división celular se llama:",
      opciones: ["Replicación", "Transcripción", "Traducción", "Mutación"],
      correcta: 0,
      explicacion: "La replicación es la duplicación del ADN (ADN → ADN), necesaria para que cada célula hija reciba una copia completa del material genético.",
      pasos: [
        { pre: "ADN → ADN: ", math: "\\text{replicación}" }
      ]
    },
    {
      id: "ad9",
      tipo: "ejercicio",
      etiqueta: "Genética · ADN · Reactivo 9 / 16",
      pregunta: "Las cuatro bases nitrogenadas del ADN son:",
      opciones: ["Adenina, timina, citosina y guanina", "Adenina, uracilo, citosina y glucosa", "Glicina, alanina, valina y leucina", "Sodio, potasio, calcio y cloro"],
      correcta: 0,
      explicacion: "Las bases del ADN son adenina (A), timina (T), citosina (C) y guanina (G). En el ARN, la timina se sustituye por uracilo.",
      pasos: [
        { pre: "Bases del ADN: ", math: "A, T, C, G" }
      ]
    },
    {
      id: "ad10",
      tipo: "ejercicio",
      etiqueta: "Genética · ADN · Reactivo 10 / 16",
      pregunta: "El conjunto completo del ADN (todos los genes) de un organismo se denomina:",
      opciones: ["Genoma", "Gen", "Alelo", "Codón"],
      correcta: 0,
      explicacion: "El genoma es la totalidad de la información genética (todo el ADN) de un organismo.",
      pasos: [
        { pre: "Todo el ADN: ", math: "\\text{genoma}" }
      ]
    },
    {
      id: "ad11",
      tipo: "ejercicio",
      etiqueta: "Genética · ADN · Reactivo 11 / 16",
      pregunta: "Cuando el ADN se enrolla y compacta fuertemente durante la división celular, forma estructuras llamadas:",
      opciones: ["Cromosomas", "Ribosomas", "Lisosomas", "Plásmidos"],
      correcta: 0,
      explicacion: "Durante la división, el ADN se condensa formando los cromosomas, que facilitan el reparto del material genético a las células hijas.",
      pasos: [
        { pre: "ADN condensado: ", math: "\\text{cromosoma}" }
      ]
    },
    {
      id: "ad12",
      tipo: "ejercicio",
      etiqueta: "Genética · ADN · Reactivo 12 / 16",
      pregunta: "La unidad que forma al ADN, compuesta por un azúcar, un fosfato y una base nitrogenada, es el:",
      opciones: ["Nucleótido", "Aminoácido", "Monosacárido", "Ácido graso"],
      correcta: 0,
      explicacion: "El ADN es un polímero de nucleótidos; cada nucleótido tiene un azúcar (desoxirribosa), un grupo fosfato y una base nitrogenada.",
      pasos: [
        { pre: "Monómero del ADN: ", math: "\\text{nucleótido}" }
      ]
    },
    {
      id: "ad13",
      tipo: "ejercicio",
      etiqueta: "Genética · Dogma central · Reactivo 13 / 16",
      pregunta: "El tipo de ARN que copia la información del gen y la lleva del núcleo al ribosoma es el ARN:",
      opciones: ["Mensajero (ARNm)", "De transferencia (ARNt)", "Ribosomal (ARNr)", "Mitocondrial"],
      correcta: 0,
      explicacion: "El ARN mensajero (ARNm) transporta la información del ADN desde el núcleo hasta los ribosomas, donde se traduce en proteína.",
      pasos: [
        { pre: "Lleva el mensaje: ", math: "\\text{ARN mensajero}" }
      ]
    },
    {
      id: "ad14",
      tipo: "ejercicio",
      svgDiagram: "gen-dogma",
      etiqueta: "Genética · Dogma central · Reactivo 14 / 16",
      pregunta: "El orden correcto del flujo de información en el dogma central es:",
      opciones: ["ADN → ARN → proteína", "Proteína → ARN → ADN", "ARN → ADN → proteína", "ADN → proteína → ARN"],
      correcta: 0,
      explicacion: "El dogma central establece que la información va del ADN al ARN (transcripción) y del ARN a la proteína (traducción).",
      pasos: [
        { pre: "Flujo: ", math: "\\text{ADN} \\to \\text{ARN} \\to \\text{proteína}" }
      ]
    },
    {
      id: "ad15",
      tipo: "ejercicio",
      etiqueta: "Genética · ADN · Reactivo 15 / 16",
      pregunta: "En las células eucariotas, el ADN se encuentra principalmente en:",
      opciones: ["El núcleo", "El citoplasma libre", "La membrana", "El ribosoma"],
      correcta: 0,
      explicacion: "En las eucariotas, la mayor parte del ADN está dentro del núcleo (también hay algo en mitocondrias y cloroplastos).",
      pasos: [
        { pre: "Ubicación: ", math: "\\text{núcleo}" }
      ]
    },
    {
      id: "ad16",
      tipo: "ejercicio",
      etiqueta: "Genética · ADN · Reactivo 16 / 16",
      pregunta: "La función principal del ADN es:",
      opciones: ["Almacenar y transmitir la información genética", "Producir energía (ATP)", "Digerir los alimentos", "Dar rigidez a la célula"],
      correcta: 0,
      explicacion: "El ADN almacena la información genética y la transmite de una generación a otra, además de dirigir la síntesis de proteínas.",
      pasos: [
        { pre: "Guarda la información: ", math: "\\text{ADN}" }
      ]
    },

    // ══ SUBTEMA 2 · LEYES DE MENDEL Y PUNNETT ═════════════════════════════════
    {
      id: "mendel",
      tipo: "concepto",
      titulo: "Las leyes de Mendel",
      etiqueta: "Cómo se heredan los caracteres",
      formula: "Aa \\times Aa \\to 3 : 1",
      svgDiagram: "gen-punnett",
      items: [
        { math: "\\text{Alelo}", texto: "cada versión de un gen; dominante (A) se impone, recesivo (a) se oculta" },
        { math: "\\text{Homocigoto}", texto: "dos alelos iguales (AA o aa)" },
        { math: "\\text{Heterocigoto}", texto: "dos alelos distintos (Aa); se expresa el dominante" },
        { math: "\\text{Genotipo / fenotipo}", texto: "genotipo = los alelos (Aa); fenotipo = el rasgo que se ve" }
      ],
      nota: "Mendel formuló las leyes de la herencia trabajando con chícharos. Un cruce de dos heterocigotos (Aa × Aa) da una proporción fenotípica de 3 dominantes : 1 recesivo, y genotípica 1 AA : 2 Aa : 1 aa. El cuadro de Punnett sirve para predecir estas proporciones."
    },

    {
      id: "punnett",
      tipo: "criterio_detalle",
      titulo: "El cuadro de Punnett",
      etiqueta: "Predecir la descendencia",
      svgDiagram: "gen-punnett",
      enunciado: "El cuadro de Punnett combina los alelos de cada progenitor para predecir los genotipos posibles. En un cruce Aa × Aa se obtienen: 1 AA, 2 Aa y 1 aa. Como A es dominante, 3 de cada 4 muestran el rasgo dominante y 1 de cada 4, el recesivo.",
      math: "Aa \\times Aa \\Rightarrow 1\\,AA : 2\\,Aa : 1\\,aa",
      por_que: "El recesivo (aa) solo aparece cuando se juntan los dos alelos recesivos: por eso es 1 de 4 (25%). Los otros 3 de 4 (75%) tienen al menos una A dominante y muestran el rasgo dominante. La proporción fenotípica es 3:1.",
      math_razon: "\\text{fenotipo: } 3\\ \\text{dominante} : 1\\ \\text{recesivo} = 75\\% : 25\\%"
    },

    // Reactivos · Mendel (16)
    {
      id: "me1",
      tipo: "ejercicio",
      svgDiagram: "gen-punnett",
      etiqueta: "Genética · Mendel · Reactivo 1 / 16",
      pregunta: "Al cruzar dos individuos heterocigotos (Aa × Aa), ¿qué proporción fenotípica se espera?",
      opciones: ["3 dominante : 1 recesivo", "1 : 1", "todos dominantes", "todos recesivos"],
      correcta: 0,
      explicacion: "Aa × Aa produce 1 AA : 2 Aa : 1 aa. Como A domina, 3 de 4 muestran el rasgo dominante y 1 de 4 el recesivo: proporción 3:1.",
      pasos: [
        { pre: "Cuadro de Punnett: ", math: "Aa \\times Aa \\to 3:1" }
      ]
    },
    {
      id: "me2",
      tipo: "ejercicio",
      etiqueta: "Genética · Mendel · Reactivo 2 / 16",
      pregunta: "Un organismo con genotipo «Aa» para un gen se denomina:",
      opciones: ["Heterocigoto", "Homocigoto dominante", "Homocigoto recesivo", "Haploide"],
      correcta: 0,
      explicacion: "Tener dos alelos distintos (uno dominante A y uno recesivo a) es ser heterocigoto. AA sería homocigoto dominante y aa homocigoto recesivo.",
      pasos: [
        { pre: "Dos alelos distintos: ", math: "Aa = \\text{heterocigoto}" }
      ]
    },
    {
      id: "me3",
      tipo: "ejercicio",
      etiqueta: "Genética · Mendel · Reactivo 3 / 16",
      pregunta: "El conjunto de alelos de un organismo (p. ej. Aa) constituye su ________, y el rasgo observable, su ________.",
      opciones: ["genotipo — fenotipo", "fenotipo — genotipo", "cromosoma — gen", "alelo — gen"],
      correcta: 0,
      explicacion: "El genotipo es la constitución genética (los alelos, como Aa); el fenotipo es la característica que se observa (color, forma, etc.) resultado de ese genotipo y el ambiente.",
      pasos: [
        { pre: "Genes vs. rasgo visible: ", math: "\\text{genotipo} \\to \\text{fenotipo}" }
      ]
    },
    {
      id: "me4",
      tipo: "ejercicio",
      svgDiagram: "gen-punnett",
      etiqueta: "Genética · Mendel · Reactivo 4 / 16",
      pregunta: "En el cruce Aa × Aa, ¿qué porcentaje de la descendencia será homocigoto recesivo (aa)?",
      opciones: ["25 %", "50 %", "75 %", "100 %"],
      correcta: 0,
      explicacion: "De las cuatro combinaciones (AA, Aa, Aa, aa), solo una es aa: 1 de 4 = 25 %. Es el único genotipo que muestra el rasgo recesivo.",
      pasos: [
        { pre: "1 de 4: ", math: "\\dfrac{1}{4} = 25\\%\\ (aa)" }
      ]
    },
    {
      id: "me5",
      tipo: "ejercicio",
      etiqueta: "Genética · Mendel · Reactivo 5 / 16",
      pregunta: "Un alelo cuyo efecto queda OCULTO cuando está junto a un alelo dominante se llama:",
      opciones: ["Recesivo", "Dominante", "Codominante", "Mutante"],
      correcta: 0,
      explicacion: "El alelo recesivo solo se manifiesta en el fenotipo cuando está en doble dosis (aa). Si hay un alelo dominante (Aa), este se impone y el recesivo queda oculto.",
      pasos: [
        { pre: "Se oculta tras el dominante: ", math: "a = \\text{recesivo}" }
      ]
    },
    {
      id: "me6",
      tipo: "ejercicio",
      etiqueta: "Genética · Mendel · Reactivo 6 / 16",
      pregunta: "Un alelo que se manifiesta en el fenotipo aunque esté presente en una sola dosis se denomina:",
      opciones: ["Dominante", "Recesivo", "Letal", "Neutro"],
      correcta: 0,
      explicacion: "El alelo dominante se expresa siempre que esté presente (en AA o en Aa), imponiéndose sobre el recesivo.",
      pasos: [
        { pre: "Se impone: ", math: "A = \\text{dominante}" }
      ]
    },
    {
      id: "me7",
      tipo: "ejercicio",
      etiqueta: "Genética · Mendel · Reactivo 7 / 16",
      pregunta: "Un individuo con genotipo «AA» es:",
      opciones: ["Homocigoto dominante", "Heterocigoto", "Homocigoto recesivo", "Haploide"],
      correcta: 0,
      explicacion: "AA tiene dos alelos dominantes iguales: es homocigoto dominante. aa sería homocigoto recesivo y Aa heterocigoto.",
      pasos: [
        { pre: "Dos alelos dominantes: ", math: "AA = \\text{homocigoto dominante}" }
      ]
    },
    {
      id: "me8",
      tipo: "ejercicio",
      etiqueta: "Genética · Mendel · Reactivo 8 / 16",
      pregunta: "Gregor Mendel, considerado el padre de la genética, realizó sus experimentos con:",
      opciones: ["Plantas de chícharo (guisante)", "Moscas de la fruta", "Bacterias", "Ratones"],
      correcta: 0,
      explicacion: "Mendel estudió la herencia cruzando plantas de chícharo (Pisum sativum), lo que le permitió formular sus leyes.",
      pasos: [
        { pre: "Experimentos: ", math: "\\text{chícharos (Mendel)}" }
      ]
    },
    {
      id: "me9",
      tipo: "ejercicio",
      svgDiagram: "gen-punnett",
      etiqueta: "Genética · Mendel · Reactivo 9 / 16",
      pregunta: "Al cruzar un homocigoto dominante (AA) con uno recesivo (aa), toda la descendencia será:",
      opciones: ["Heterocigota (Aa)", "Homocigota dominante (AA)", "Homocigota recesiva (aa)", "Mitad AA y mitad aa"],
      correcta: 0,
      explicacion: "AA × aa: cada hijo recibe una A del primero y una a del segundo, así que todos serán Aa (heterocigotos) y mostrarán el rasgo dominante.",
      pasos: [
        { pre: "AA × aa: ", math: "\\text{todos } Aa" }
      ]
    },
    {
      id: "me10",
      tipo: "ejercicio",
      svgDiagram: "gen-punnett",
      etiqueta: "Genética · Mendel · Reactivo 10 / 16",
      pregunta: "En el cruce Aa × Aa, ¿qué porcentaje de la descendencia mostrará el rasgo DOMINANTE?",
      opciones: ["75 %", "25 %", "50 %", "100 %"],
      correcta: 0,
      explicacion: "Tres de las cuatro combinaciones (AA, Aa, Aa) tienen al menos un alelo dominante: 3 de 4 = 75 % muestran el rasgo dominante.",
      pasos: [
        { pre: "3 de 4: ", math: "\\dfrac{3}{4} = 75\\%" }
      ]
    },
    {
      id: "me11",
      tipo: "ejercicio",
      etiqueta: "Genética · Mendel · Reactivo 11 / 16",
      pregunta: "Por convención, el alelo dominante se representa con una letra ________ y el recesivo con una ________.",
      opciones: ["mayúscula — minúscula", "minúscula — mayúscula", "griega — latina", "número — letra"],
      correcta: 0,
      explicacion: "El alelo dominante se escribe con mayúscula (A) y el recesivo con la misma letra en minúscula (a).",
      pasos: [
        { pre: "Notación: ", math: "A\\ (\\text{dom.}),\\ a\\ (\\text{rec.})" }
      ]
    },
    {
      id: "me12",
      tipo: "ejercicio",
      etiqueta: "Genética · Mendel · Reactivo 12 / 16",
      pregunta: "Un cruce en el que se estudia un solo carácter (como el color de la semilla) se llama:",
      opciones: ["Monohíbrido", "Dihíbrido", "Trihíbrido", "Recíproco"],
      correcta: 0,
      explicacion: "Un cruce monohíbrido analiza la herencia de un solo carácter o gen a la vez (como hizo Mendel con un rasgo).",
      pasos: [
        { pre: "Un carácter: ", math: "\\text{cruce monohíbrido}" }
      ]
    },
    {
      id: "me13",
      tipo: "ejercicio",
      etiqueta: "Genética · Mendel · Reactivo 13 / 16",
      pregunta: "Cuando dos alelos se expresan AMBOS a la vez en el heterocigoto (como en los grupos sanguíneos AB), se habla de:",
      opciones: ["Codominancia", "Dominancia completa", "Recesividad", "Mutación"],
      correcta: 0,
      explicacion: "En la codominancia ningún alelo oculta al otro: ambos se manifiestan a la vez (por ejemplo, el grupo sanguíneo AB expresa los alelos A y B).",
      pasos: [
        { pre: "Ambos se expresan: ", math: "\\text{codominancia}" }
      ]
    },
    {
      id: "me14",
      tipo: "ejercicio",
      etiqueta: "Genética · Mendel · Reactivo 14 / 16",
      pregunta: "Al cruzar dos homocigotos recesivos (aa × aa), la descendencia será:",
      opciones: ["Toda homocigota recesiva (aa)", "Toda heterocigota (Aa)", "Mitad AA y mitad aa", "Toda dominante (AA)"],
      correcta: 0,
      explicacion: "Si ambos padres solo aportan el alelo a, todos los hijos serán aa y mostrarán el rasgo recesivo.",
      pasos: [
        { pre: "aa × aa: ", math: "\\text{todos } aa" }
      ]
    },
    {
      id: "me15",
      tipo: "ejercicio",
      etiqueta: "Genética · Mendel · Reactivo 15 / 16",
      pregunta: "Una característica heredable de un organismo (como el color de los ojos) se denomina:",
      opciones: ["Carácter (rasgo)", "Alelo", "Cromosoma", "Gameto"],
      correcta: 0,
      explicacion: "Un carácter o rasgo es una característica heredable del organismo; está determinado por uno o varios genes.",
      pasos: [
        { pre: "Característica heredable: ", math: "\\text{carácter}" }
      ]
    },
    {
      id: "me16",
      tipo: "ejercicio",
      svgDiagram: "gen-punnett",
      etiqueta: "Genética · Mendel · Reactivo 16 / 16",
      pregunta: "Un cuadro de Punnett de un cruce monohíbrido (2 alelos × 2 alelos) tiene cuántas casillas:",
      opciones: ["4", "2", "6", "9"],
      correcta: 0,
      explicacion: "Un cruce monohíbrido se representa con un cuadro de Punnett de 2 × 2 = 4 casillas, una por cada combinación posible de gametos.",
      pasos: [
        { pre: "2 × 2: ", math: "4\\ \\text{casillas}" }
      ]
    },

    // ══ SUBTEMA 3 · MUTACIONES ════════════════════════════════════════════════
    {
      id: "mutaciones",
      tipo: "concepto",
      titulo: "Mutaciones",
      etiqueta: "Cambios en el ADN",
      formula: "\\text{mutación} = \\text{cambio en el ADN}",
      svgDiagram: "gen-mutacion",
      items: [
        { math: "\\text{Qué es}", texto: "cambio en la secuencia del ADN; si es en gametos, se hereda" },
        { math: "\\text{Causas}", texto: "errores en la replicación, radiación, sustancias químicas (mutágenos)" },
        { math: "\\text{Efectos}", texto: "pueden ser neutras, perjudiciales o, a veces, beneficiosas" },
        { math: "\\text{Importancia}", texto: "fuente de variabilidad y materia prima de la evolución" }
      ],
      nota: "Una mutación es un cambio genético heredable cuando ocurre en las células sexuales. Aunque muchas son dañinas o neutras, algunas dan ventajas que la selección natural favorece: por eso las mutaciones son la fuente última de la diversidad biológica."
    },

    // Reactivos · Mutaciones (16)
    {
      id: "mu1",
      tipo: "ejercicio",
      svgDiagram: "gen-mutacion",
      etiqueta: "Genética · Mutaciones · Reactivo 1 / 16",
      pregunta: "Se denomina ________ al proceso en el que ocurre un cambio genético heredable.",
      opciones: ["Mutación", "Traducción", "Replicación", "Transcripción"],
      correcta: 0,
      explicacion: "La mutación es un cambio en la secuencia del ADN. Cuando ocurre en las células sexuales se transmite a la descendencia (es heredable).",
      pasos: [
        { pre: "Cambio heredable en el ADN: ", math: "\\text{mutación}" }
      ]
    },
    {
      id: "mu2",
      tipo: "ejercicio",
      etiqueta: "Genética · Mutaciones · Reactivo 2 / 16",
      pregunta: "Un agente que aumenta la frecuencia de mutaciones, como la radiación UV o ciertas sustancias químicas, se llama:",
      opciones: ["Mutágeno", "Catalizador", "Antígeno", "Nutriente"],
      correcta: 0,
      explicacion: "Los mutágenos son factores (radiación, sustancias químicas) que dañan el ADN y aumentan la tasa de mutaciones.",
      pasos: [
        { pre: "Causa mutaciones: ", math: "\\text{mutágeno}" }
      ]
    },
    {
      id: "mu3",
      tipo: "ejercicio",
      etiqueta: "Genética · Mutaciones · Reactivo 3 / 16",
      pregunta: "Desde el punto de vista evolutivo, las mutaciones son importantes porque:",
      opciones: ["Generan variabilidad genética", "Siempre mejoran al organismo", "Detienen la evolución", "Producen clones idénticos"],
      correcta: 0,
      explicacion: "Las mutaciones introducen nuevas variantes genéticas. Esa variabilidad es la materia prima sobre la que actúa la selección natural; sin ella no habría evolución.",
      pasos: [
        { pre: "Materia prima de la evolución: ", math: "\\text{variabilidad genética}" }
      ]
    },
    {
      id: "mu4",
      tipo: "ejercicio",
      etiqueta: "Genética · Mutaciones · Reactivo 4 / 16",
      pregunta: "Para que una mutación se transmita a la descendencia, debe ocurrir en:",
      opciones: ["Las células sexuales (gametos)", "Las células de la piel", "Las neuronas", "Las células musculares"],
      correcta: 0,
      explicacion: "Solo las mutaciones en las células sexuales (gametos) se heredan; las que ocurren en células somáticas no pasan a los hijos.",
      pasos: [
        { pre: "Heredable: ", math: "\\text{mutación en gametos}" }
      ]
    },
    {
      id: "mu5",
      tipo: "ejercicio",
      etiqueta: "Genética · Mutaciones · Reactivo 5 / 16",
      pregunta: "La radiación ultravioleta del Sol puede dañar el ADN de la piel. Por ello se considera un:",
      opciones: ["Agente mutágeno", "Nutriente esencial", "Catalizador", "Antibiótico"],
      correcta: 0,
      explicacion: "La radiación UV es un mutágeno físico: altera el ADN y puede provocar mutaciones relacionadas con el cáncer de piel.",
      pasos: [
        { pre: "Daña el ADN: ", math: "\\text{UV = mutágeno}" }
      ]
    },
    {
      id: "mu6",
      tipo: "ejercicio",
      etiqueta: "Genética · Mutaciones · Reactivo 6 / 16",
      pregunta: "Respecto a sus efectos, una mutación puede ser:",
      opciones: ["Neutra, perjudicial o beneficiosa", "Siempre beneficiosa", "Siempre mortal", "Siempre neutra"],
      correcta: 0,
      explicacion: "Las mutaciones tienen efectos variados: muchas son neutras, otras perjudiciales y algunas pocas resultan beneficiosas (y son favorecidas por la selección).",
      pasos: [
        { pre: "Efectos variados: ", math: "\\text{neutra / dañina / benéfica}" }
      ]
    },
    {
      id: "mu7",
      tipo: "ejercicio",
      svgDiagram: "gen-mutacion",
      etiqueta: "Genética · Mutaciones · Reactivo 7 / 16",
      pregunta: "En esencia, una mutación génica es un cambio en:",
      opciones: ["La secuencia de bases del ADN", "El número de mitocondrias", "La forma de la membrana", "La cantidad de agua de la célula"],
      correcta: 0,
      explicacion: "Una mutación génica es una alteración en la secuencia de bases nitrogenadas del ADN (por ejemplo, cambiar una base por otra).",
      pasos: [
        { pre: "Cambio en bases: ", math: "\\text{secuencia de ADN}" }
      ]
    },
    {
      id: "mu8",
      tipo: "ejercicio",
      etiqueta: "Genética · Mutaciones · Reactivo 8 / 16",
      pregunta: "Una mutación que ocurre en una célula del cuerpo (somática), como una de la piel, NO se hereda porque:",
      opciones: ["No está en los gametos", "El ADN no cambia", "Las células somáticas no tienen ADN", "Siempre se repara sola"],
      correcta: 0,
      explicacion: "Las mutaciones somáticas afectan a células del cuerpo pero no a los gametos, por lo que no se transmiten a la descendencia.",
      pasos: [
        { pre: "No está en gametos: ", math: "\\text{no se hereda}" }
      ]
    },
    {
      id: "mu9",
      tipo: "ejercicio",
      etiqueta: "Genética · Mutaciones · Reactivo 9 / 16",
      pregunta: "La anemia falciforme, en la que los glóbulos rojos tienen forma de hoz, es causada por una:",
      opciones: ["Mutación en un gen", "Infección por bacterias", "Falta de vitaminas", "Reacción alérgica"],
      correcta: 0,
      explicacion: "La anemia falciforme se debe a una mutación en el gen de la hemoglobina, que cambia la forma de los glóbulos rojos. Es un ejemplo de mutación heredable.",
      pasos: [
        { pre: "Origen genético: ", math: "\\text{mutación}" }
      ]
    },
    {
      id: "mu10",
      tipo: "ejercicio",
      etiqueta: "Genética · Mutaciones · Reactivo 10 / 16",
      pregunta: "Las mutaciones son la fuente original de:",
      opciones: ["Nuevos alelos (variantes de los genes)", "Nuevas mitocondrias", "Más agua celular", "Más oxígeno"],
      correcta: 0,
      explicacion: "Las mutaciones crean nuevos alelos (variantes de un gen), que son el origen de la diversidad genética de las poblaciones.",
      pasos: [
        { pre: "Crean variantes: ", math: "\\text{nuevos alelos}" }
      ]
    },
    {
      id: "mu11",
      tipo: "ejercicio",
      etiqueta: "Genética · Mutaciones · Reactivo 11 / 16",
      pregunta: "¿Cuál de los siguientes es un mutágeno químico?",
      opciones: ["El humo del tabaco", "El agua pura", "La luz visible normal", "El oxígeno respirable"],
      correcta: 0,
      explicacion: "Muchas sustancias del humo del tabaco son mutágenos químicos que dañan el ADN y se asocian al cáncer.",
      pasos: [
        { pre: "Sustancia que daña ADN: ", math: "\\text{mutágeno químico}" }
      ]
    },
    {
      id: "mu12",
      tipo: "ejercicio",
      etiqueta: "Genética · Mutaciones · Reactivo 12 / 16",
      pregunta: "Una mutación beneficiosa para un organismo en su ambiente tiende a:",
      opciones: ["Ser favorecida por la selección natural", "Desaparecer de inmediato", "Volverse perjudicial", "Impedir la reproducción"],
      correcta: 0,
      explicacion: "Si una mutación da una ventaja, el organismo sobrevive y se reproduce más, por lo que la selección natural favorece esa variante.",
      pasos: [
        { pre: "Ventaja → más descendencia: ", math: "\\text{selección la favorece}" }
      ]
    },
    {
      id: "mu13",
      tipo: "ejercicio",
      etiqueta: "Genética · Mutaciones · Reactivo 13 / 16",
      pregunta: "El albinismo, caracterizado por la falta de pigmento, es resultado de una mutación que afecta la producción de:",
      opciones: ["Melanina", "Hemoglobina", "Insulina", "Clorofila"],
      correcta: 0,
      explicacion: "El albinismo se debe a una mutación que impide producir melanina, el pigmento de la piel, el pelo y los ojos.",
      pasos: [
        { pre: "Sin pigmento: ", math: "\\text{falta de melanina}" }
      ]
    },
    {
      id: "mu14",
      tipo: "ejercicio",
      etiqueta: "Genética · Mutaciones · Reactivo 14 / 16",
      pregunta: "Cuando la mutación afecta al número o la estructura de cromosomas completos, se llama mutación:",
      opciones: ["Cromosómica", "Génica (puntual)", "Silenciosa", "Reversible"],
      correcta: 0,
      explicacion: "Las mutaciones cromosómicas alteran cromosomas enteros (su número o estructura), como en el síndrome de Down (un cromosoma 21 extra). Las génicas afectan solo a un gen.",
      pasos: [
        { pre: "Afecta cromosomas: ", math: "\\text{mutación cromosómica}" }
      ]
    },
    {
      id: "mu15",
      tipo: "ejercicio",
      etiqueta: "Genética · Mutaciones · Reactivo 15 / 16",
      pregunta: "Sin mutaciones ni recombinación, una población carecería de:",
      opciones: ["Variabilidad para evolucionar", "Capacidad de respirar", "Membrana celular", "Agua"],
      correcta: 0,
      explicacion: "Las mutaciones aportan la variabilidad genética indispensable para que la selección natural actúe; sin ellas, la evolución se detendría.",
      pasos: [
        { pre: "Sin variabilidad: ", math: "\\text{no hay evolución}" }
      ]
    },
    {
      id: "mu16",
      tipo: "ejercicio",
      etiqueta: "Genética · Mutaciones · Reactivo 16 / 16",
      pregunta: "Las mutaciones, en general, ocurren de manera:",
      opciones: ["Aleatoria (al azar)", "Dirigida por la necesidad del organismo", "Solo cuando el organismo lo decide", "Únicamente en invierno"],
      correcta: 0,
      explicacion: "Las mutaciones surgen al azar, sin un propósito; es la selección natural la que luego conserva las que resultan ventajosas.",
      pasos: [
        { pre: "Sin propósito: ", math: "\\text{al azar}" }
      ]
    },

    // ══ SUBTEMA 4 · BIOTECNOLOGÍA ═════════════════════════════════════════════
    {
      id: "biotecnologia",
      tipo: "criterio_detalle",
      titulo: "Biotecnología y ADN recombinante",
      etiqueta: "Manipular genes con un fin",
      svgDiagram: "gen-biotecnologia",
      enunciado: "La tecnología del ADN recombinante consiste en insertar un gen de un organismo en el ADN de otro (por ejemplo, una bacteria) para que este fabrique una proteína útil. Así se produce insulina humana en bacterias. La clonación, los transgénicos y la terapia génica son otras aplicaciones de la biotecnología.",
      math: "\\text{gen humano} + \\text{plásmido bacteriano} \\to \\text{proteína (insulina)}",
      por_que: "Al introducir el gen de la insulina humana en una bacteria, esta lo «lee» y produce insulina idéntica a la humana en grandes cantidades. Antes se extraía de páncreas de animales; hoy se obtiene por ADN recombinante, más segura y abundante.",
      math_razon: "\\text{insulina, hormona de crecimiento, vacunas} = \\text{ADN recombinante}"
    },

    // Reactivos · Biotecnología (16)
    {
      id: "bt1",
      tipo: "ejercicio",
      svgDiagram: "gen-biotecnologia",
      etiqueta: "Genética · Biotecnología · Reactivo 1 / 16",
      pregunta: "Proteína producida mediante la tecnología del ADN recombinante para tratar la diabetes:",
      opciones: ["Insulina", "Histona", "Hemoglobina", "Telomerasa"],
      correcta: 0,
      explicacion: "La insulina humana se produce insertando su gen en bacterias, que la fabrican por ADN recombinante. Es uno de los primeros y más exitosos productos biotecnológicos.",
      pasos: [
        { pre: "ADN recombinante: ", math: "\\text{insulina}" }
      ]
    },
    {
      id: "bt2",
      tipo: "ejercicio",
      etiqueta: "Genética · Biotecnología · Reactivo 2 / 16",
      pregunta: "Obtener un organismo genéticamente idéntico a otro a partir de una de sus células se llama:",
      opciones: ["Clonación", "Fecundación", "Mutación", "Polinización"],
      correcta: 0,
      explicacion: "La clonación produce un organismo genéticamente idéntico a otro (como la oveja Dolly). Es una técnica de la biotecnología basada en copiar el material genético.",
      pasos: [
        { pre: "Copia genética: ", math: "\\text{clonación}" }
      ]
    },
    {
      id: "bt3",
      tipo: "ejercicio",
      svgDiagram: "gen-biotecnologia",
      etiqueta: "Genética · Biotecnología · Reactivo 3 / 16",
      pregunta: "En la técnica del ADN recombinante, ¿qué estructura bacteriana se usa para transportar e insertar el gen de interés?",
      opciones: ["El plásmido", "El ribosoma", "La pared celular", "El flagelo"],
      correcta: 0,
      explicacion: "El plásmido es un pequeño anillo de ADN bacteriano que se usa como «vehículo» (vector): se le inserta el gen de interés y se introduce en la bacteria para que lo exprese.",
      pasos: [
        { pre: "Vector de ADN: ", math: "\\text{plásmido}" }
      ]
    },
    {
      id: "bt4",
      tipo: "ejercicio",
      etiqueta: "Genética · Biotecnología · Reactivo 4 / 16",
      pregunta: "Un organismo al que se le ha introducido un gen de otra especie se denomina:",
      opciones: ["Transgénico", "Híbrido natural", "Clon", "Mutante espontáneo"],
      correcta: 0,
      explicacion: "Un organismo transgénico (u OGM) contiene uno o más genes de otra especie introducidos por ingeniería genética, como el maíz Bt o las bacterias que producen insulina.",
      pasos: [
        { pre: "Gen de otra especie: ", math: "\\text{transgénico (OGM)}" }
      ]
    },
    {
      id: "bt5",
      tipo: "ejercicio",
      svgDiagram: "gen-biotecnologia",
      etiqueta: "Genética · Biotecnología · Reactivo 5 / 16",
      pregunta: "La tecnología del ADN recombinante consiste esencialmente en:",
      opciones: ["Combinar genes de organismos distintos", "Eliminar todo el ADN de una célula", "Aumentar la temperatura del ADN", "Convertir ADN en proteína directamente"],
      correcta: 0,
      explicacion: "El ADN recombinante combina fragmentos de ADN de diferentes organismos (por ejemplo, un gen humano dentro de una bacteria) para obtener un producto útil.",
      pasos: [
        { pre: "Combina ADN: ", math: "\\text{ADN recombinante}" }
      ]
    },
    {
      id: "bt6",
      tipo: "ejercicio",
      etiqueta: "Genética · Biotecnología · Reactivo 6 / 16",
      pregunta: "La oveja Dolly fue célebre por ser el primer mamífero:",
      opciones: ["Clonado a partir de una célula adulta", "Transgénico con genes vegetales", "Nacido sin ADN", "Producido por fermentación"],
      correcta: 0,
      explicacion: "Dolly (1996) fue el primer mamífero clonado a partir de una célula adulta, un hito de la clonación.",
      pasos: [
        { pre: "Primer clon de adulto: ", math: "\\text{oveja Dolly}" }
      ]
    },
    {
      id: "bt7",
      tipo: "ejercicio",
      etiqueta: "Genética · Biotecnología · Reactivo 7 / 16",
      pregunta: "El conjunto de técnicas para modificar el material genético de los organismos se llama:",
      opciones: ["Ingeniería genética", "Taxonomía", "Ecología", "Anatomía"],
      correcta: 0,
      explicacion: "La ingeniería genética agrupa las técnicas para manipular el ADN (cortar, unir e insertar genes) con fines diversos.",
      pasos: [
        { pre: "Manipular el ADN: ", math: "\\text{ingeniería genética}" }
      ]
    },
    {
      id: "bt8",
      tipo: "ejercicio",
      etiqueta: "Genética · Biotecnología · Reactivo 8 / 16",
      pregunta: "Las «tijeras moleculares» que cortan el ADN en sitios específicos para la ingeniería genética son las:",
      opciones: ["Enzimas de restricción", "Hormonas", "Vitaminas", "Bases nitrogenadas"],
      correcta: 0,
      explicacion: "Las enzimas de restricción cortan el ADN en secuencias específicas; son herramientas clave para aislar e insertar genes.",
      pasos: [
        { pre: "Cortan el ADN: ", math: "\\text{enzimas de restricción}" }
      ]
    },
    {
      id: "bt9",
      tipo: "ejercicio",
      etiqueta: "Genética · Biotecnología · Reactivo 9 / 16",
      pregunta: "El maíz Bt, resistente a plagas gracias a un gen bacteriano, es un ejemplo de:",
      opciones: ["Cultivo transgénico", "Mutación natural", "Reproducción asexual", "Fermentación"],
      correcta: 0,
      explicacion: "El maíz Bt incorpora un gen de la bacteria Bacillus thuringiensis que lo hace resistente a insectos: es un organismo transgénico (OGM).",
      pasos: [
        { pre: "Gen bacteriano en maíz: ", math: "\\text{transgénico}" }
      ]
    },
    {
      id: "bt10",
      tipo: "ejercicio",
      svgDiagram: "gen-biotecnologia",
      etiqueta: "Genética · Biotecnología · Reactivo 10 / 16",
      pregunta: "En la producción de insulina recombinante, el organismo que se usa como «fábrica» para producirla suele ser:",
      opciones: ["Una bacteria", "Una planta de maíz", "Un mamífero", "Un hongo venenoso"],
      correcta: 0,
      explicacion: "Se introduce el gen humano de la insulina en bacterias (como E. coli), que la producen en grandes cantidades y de forma rápida.",
      pasos: [
        { pre: "Fábrica de proteína: ", math: "\\text{bacteria}" }
      ]
    },
    {
      id: "bt11",
      tipo: "ejercicio",
      etiqueta: "Genética · Biotecnología · Reactivo 11 / 16",
      pregunta: "La biotecnología también permite producir ________ que estimulan al sistema inmune para prevenir enfermedades.",
      opciones: ["vacunas", "plásticos", "metales", "minerales"],
      correcta: 0,
      explicacion: "Con biotecnología se desarrollan vacunas (algunas obtenidas por ingeniería genética) que protegen contra enfermedades infecciosas.",
      pasos: [
        { pre: "Previenen enfermedades: ", math: "\\text{vacunas}" }
      ]
    },
    {
      id: "bt12",
      tipo: "ejercicio",
      etiqueta: "Genética · Biotecnología · Reactivo 12 / 16",
      pregunta: "La técnica que busca corregir enfermedades hereditarias introduciendo o reparando genes en el paciente se llama:",
      opciones: ["Terapia génica", "Polinización", "Fermentación", "Mitosis"],
      correcta: 0,
      explicacion: "La terapia génica intenta tratar enfermedades genéticas modificando o reemplazando los genes defectuosos del paciente.",
      pasos: [
        { pre: "Corrige genes: ", math: "\\text{terapia génica}" }
      ]
    },
    {
      id: "bt13",
      tipo: "ejercicio",
      etiqueta: "Genética · Biotecnología · Reactivo 13 / 16",
      pregunta: "El análisis del ADN para identificar a una persona (en criminalística o pruebas de paternidad) se conoce como:",
      opciones: ["Huella genética (ADN)", "Polinización", "Fotosíntesis", "Ósmosis"],
      correcta: 0,
      explicacion: "La huella genética usa patrones únicos del ADN de cada persona para identificarla; se aplica en criminalística y pruebas de parentesco.",
      pasos: [
        { pre: "Identifica por ADN: ", math: "\\text{huella genética}" }
      ]
    },
    {
      id: "bt14",
      tipo: "ejercicio",
      etiqueta: "Genética · Biotecnología · Reactivo 14 / 16",
      pregunta: "Además de la insulina, otra hormona humana producida por ADN recombinante es la:",
      opciones: ["Hormona de crecimiento", "Adrenalina del susto", "Clorofila", "Queratina"],
      correcta: 0,
      explicacion: "La hormona de crecimiento humana también se produce por ADN recombinante en bacterias, para tratar trastornos del crecimiento.",
      pasos: [
        { pre: "Recombinante: ", math: "\\text{hormona de crecimiento}" }
      ]
    },
    {
      id: "bt15",
      tipo: "ejercicio",
      etiqueta: "Genética · Biotecnología · Reactivo 15 / 16",
      pregunta: "Una ventaja de producir insulina por ADN recombinante, en vez de extraerla de animales, es que:",
      opciones: ["Es más segura, abundante y idéntica a la humana", "Es más cara y escasa", "Provoca más rechazo", "No sirve para tratar la diabetes"],
      correcta: 0,
      explicacion: "La insulina recombinante es idéntica a la humana, se produce en grandes cantidades y reduce reacciones alérgicas frente a la insulina animal.",
      pasos: [
        { pre: "Mejor que la animal: ", math: "\\text{segura y abundante}" }
      ]
    },
    {
      id: "bt16",
      tipo: "ejercicio",
      etiqueta: "Genética · Biotecnología · Reactivo 16 / 16",
      pregunta: "En términos generales, la biotecnología es:",
      opciones: ["El uso de seres vivos o sus partes para obtener productos útiles", "El estudio de los astros", "La clasificación de las rocas", "La medición de la temperatura"],
      correcta: 0,
      explicacion: "La biotecnología utiliza organismos vivos (o sus componentes, como enzimas y genes) para fabricar productos o mejorar procesos: pan, vacunas, insulina, cultivos, etc.",
      pasos: [
        { pre: "Seres vivos con un fin: ", math: "\\text{biotecnología}" }
      ]
    },

    // ══ SUBTEMA 5 · LA PCR ════════════════════════════════════════════════════
    {
      id: "pcr",
      tipo: "criterio_detalle",
      titulo: "La PCR: reacción en cadena de la polimerasa",
      etiqueta: "Copiar ADN millones de veces",
      svgDiagram: "gen-pcr",
      enunciado: "La PCR (reacción en cadena de la polimerasa) es la técnica que permite obtener miles de millones de copias de un fragmento específico de ADN en pocas horas. Repite ciclos de tres pasos: DESNATURALIZACIÓN (calor que separa las dos cadenas), HIBRIDACIÓN (los cebadores se unen al fragmento) y EXTENSIÓN (la enzima ADN-polimerasa copia la cadena). En cada ciclo el número de copias se duplica.",
      math: "\\text{copias} = 2^{n}\\ \\ (n = \\text{n.\\!^{o}\\ de\\ ciclos})",
      por_que: "La PCR NO necesita un vector viral ni bacteriano: solo requiere el ADN molde, los cebadores, los nucleótidos y la ADN-polimerasa, todo en un tubo. Por eso se distingue del ADN recombinante (que sí inserta el gen en un plásmido). La PCR sirve para diagnóstico de enfermedades, pruebas de paternidad y análisis forense.",
      math_razon: "\\text{ADN molde} + \\text{cebadores} + \\text{polimerasa} \\to \\text{millones de copias}"
    },

    // Reactivos · PCR (8)
    {
      id: "pc1",
      tipo: "ejercicio",
      svgDiagram: "gen-pcr",
      etiqueta: "Genética · PCR · Reactivo 1 / 8",
      pregunta: "Es la técnica biotecnológica que permite obtener miles de millones de copias de un fragmento específico de ADN para identificar con rapidez una secuencia:",
      opciones: ["Reacción en cadena de la polimerasa (PCR)", "ADN recombinante", "Secuenciación del ADN", "Clonación de organismos"],
      correcta: 0,
      explicacion: "La PCR amplifica (multiplica) un fragmento de ADN millones de veces. El ADN recombinante inserta genes en otro organismo, y la secuenciación lee el orden de las bases; ninguna de ellas tiene como fin principal copiar masivamente un fragmento.",
      pasos: [
        { pre: "Amplifica ADN: ", math: "\\text{PCR}" }
      ]
    },
    {
      id: "pc2",
      tipo: "ejercicio",
      etiqueta: "Genética · PCR · Reactivo 2 / 8",
      pregunta: "A diferencia del ADN recombinante, la PCR para copiar el ADN NO requiere:",
      opciones: ["Un vector viral o bacteriano", "La enzima ADN-polimerasa", "Cebadores (primers)", "Nucleótidos libres"],
      correcta: 0,
      explicacion: "La PCR se realiza por completo en un tubo, sin introducir el gen en una célula: no usa vectores virales ni bacterianos. Sí necesita la polimerasa, los cebadores y los nucleótidos.",
      pasos: [
        { pre: "PCR sin: ", math: "\\text{vector viral/bacteriano}" }
      ]
    },
    {
      id: "pc3",
      tipo: "ejercicio",
      svgDiagram: "gen-pcr",
      etiqueta: "Genética · PCR · Reactivo 3 / 8",
      pregunta: "La enzima que «lee» la cadena molde y fabrica la nueva copia de ADN en la PCR es la:",
      opciones: ["ADN-polimerasa", "ATP-sintasa", "Amilasa", "Catalasa"],
      correcta: 0,
      explicacion: "La ADN-polimerasa (en la PCR, una termoestable como la Taq) sintetiza la nueva cadena a partir de los cebadores, copiando la cadena molde.",
      pasos: [
        { pre: "Copia el ADN: ", math: "\\text{ADN-polimerasa}" }
      ]
    },
    {
      id: "pc4",
      tipo: "ejercicio",
      svgDiagram: "gen-pcr",
      etiqueta: "Genética · PCR · Reactivo 4 / 8",
      pregunta: "El primer paso de cada ciclo de PCR, en el que el calor separa las dos cadenas del ADN, se llama:",
      opciones: ["Desnaturalización", "Hibridación", "Extensión", "Transcripción"],
      correcta: 0,
      explicacion: "La desnaturalización usa calor (~95 °C) para romper los puentes de hidrógeno y separar la doble hélice en dos cadenas simples, que servirán de molde.",
      pasos: [
        { pre: "Calor separa cadenas: ", math: "\\text{desnaturalización}" }
      ]
    },
    {
      id: "pc5",
      tipo: "ejercicio",
      etiqueta: "Genética · PCR · Reactivo 5 / 8",
      pregunta: "En cada ciclo de la PCR, la cantidad de copias del fragmento de ADN:",
      opciones: ["Se duplica", "Se reduce a la mitad", "No cambia", "Se triplica"],
      correcta: 0,
      explicacion: "Cada ciclo duplica el número de copias; por eso el crecimiento es exponencial (2ⁿ). En unos 30 ciclos se obtienen millones de copias.",
      pasos: [
        { pre: "Crecimiento: ", math: "2^{n}" }
      ]
    },
    {
      id: "pc6",
      tipo: "ejercicio",
      etiqueta: "Genética · PCR · Reactivo 6 / 8",
      pregunta: "Las cortas secuencias que se unen al ADN molde para indicar a la polimerasa dónde empezar a copiar son los:",
      opciones: ["Cebadores (primers)", "Plásmidos", "Ribosomas", "Codones de paro"],
      correcta: 0,
      explicacion: "Los cebadores o primers son fragmentos cortos de ADN que se hibridan en los extremos del fragmento a copiar y dan a la polimerasa el punto de inicio.",
      pasos: [
        { pre: "Indican el inicio: ", math: "\\text{cebadores}" }
      ]
    },
    {
      id: "pc7",
      tipo: "ejercicio",
      etiqueta: "Genética · PCR · Reactivo 7 / 8",
      pregunta: "Una aplicación frecuente de la PCR en medicina y criminalística es:",
      opciones: ["Detectar el ADN de un virus o identificar a una persona", "Producir insulina en bacterias", "Fabricar vacunas vivas", "Clonar mamíferos completos"],
      correcta: 0,
      explicacion: "Al amplificar incluso cantidades mínimas de ADN, la PCR permite detectar patógenos (por ejemplo, virus) y obtener perfiles genéticos para identificación forense o pruebas de paternidad.",
      pasos: [
        { pre: "Amplifica para detectar: ", math: "\\text{diagnóstico y forense}" }
      ]
    },
    {
      id: "pc8",
      tipo: "ejercicio",
      etiqueta: "Genética · PCR · Reactivo 8 / 8",
      pregunta: "Ordena correctamente los tres pasos de un ciclo de PCR:",
      opciones: ["Desnaturalización → hibridación → extensión", "Extensión → desnaturalización → hibridación", "Hibridación → extensión → desnaturalización", "Traducción → transcripción → replicación"],
      correcta: 0,
      explicacion: "Cada ciclo: primero el calor separa las cadenas (desnaturalización), luego los cebadores se unen (hibridación) y por último la polimerasa copia (extensión).",
      pasos: [
        { pre: "Orden: ", math: "\\text{desnat.} \\to \\text{hibrid.} \\to \\text{extensión}" }
      ]
    },

    // ── RESUMEN ───────────────────────────────────────────────────────────────
    {
      id: "resumen",
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Ideas clave de genética",
      puntos: [
        { math: "\\text{ADN}", texto: "doble hélice (Watson y Crick); bases A–T y C–G; el gen es la unidad de herencia" },
        { math: "\\text{ADN} \\to \\text{ARN} \\to \\text{proteína}", texto: "dogma central: replicación, transcripción y traducción" },
        { math: "Aa \\times Aa \\to 3:1", texto: "Mendel (chícharos): dominante/recesivo; el cuadro de Punnett predice la descendencia" },
        { math: "\\text{Genotipo / fenotipo}", texto: "genotipo = alelos; fenotipo = rasgo observable" },
        { math: "\\text{Mutación}", texto: "cambio heredable en el ADN; al azar; fuente de variabilidad y evolución" },
        { math: "\\text{Biotecnología}", texto: "ADN recombinante (insulina), clonación (Dolly), transgénicos, terapia génica" },
        { math: "\\text{PCR } (2^{n})", texto: "amplifica un fragmento de ADN millones de veces; sin vector; diagnóstico y forense" }
      ]
    }

  ]
};
