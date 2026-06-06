// Datos de la presentación: Genética y Biotecnología (Biología · UNAM · Área 1)
// Subtemas: ADN, ARN y dogma central · Leyes de Mendel y Punnett · Mutaciones · Biotecnología → Resumen.

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

    // Reactivos · ADN y dogma (4)
    {
      id: "ad1",
      tipo: "ejercicio",
      svgDiagram: "gen-adn",
      etiqueta: "Genética · ADN · Reactivo 1 / 4",
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
      etiqueta: "Genética · Dogma central · Reactivo 2 / 4",
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
      etiqueta: "Genética · Dogma central · Reactivo 3 / 4",
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
      etiqueta: "Genética · ADN · Reactivo 4 / 4",
      pregunta: "Un segmento de ADN que contiene la información para un carácter o una proteína se llama:",
      opciones: ["Gen", "Cromosoma", "Ribosoma", "Nucleótido"],
      correcta: 0,
      explicacion: "El gen es la unidad de la herencia: un fragmento de ADN con la información de una proteína o carácter. Muchos genes se organizan en un cromosoma.",
      pasos: [
        { pre: "Unidad de herencia: ", math: "\\text{gen}" }
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
      nota: "Mendel formuló las leyes de la herencia. Un cruce de dos heterocigotos (Aa × Aa) da una proporción fenotípica de 3 dominantes : 1 recesivo, y genotípica 1 AA : 2 Aa : 1 aa. El cuadro de Punnett sirve para predecir estas proporciones."
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

    // Reactivos · Mendel (5)
    {
      id: "me1",
      tipo: "ejercicio",
      svgDiagram: "gen-punnett",
      etiqueta: "Genética · Mendel · Reactivo 1 / 5",
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
      etiqueta: "Genética · Mendel · Reactivo 2 / 5",
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
      etiqueta: "Genética · Mendel · Reactivo 3 / 5",
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
      etiqueta: "Genética · Mendel · Reactivo 4 / 5",
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
      etiqueta: "Genética · Mendel · Reactivo 5 / 5",
      pregunta: "Un alelo cuyo efecto queda OCULTO cuando está junto a un alelo dominante se llama:",
      opciones: ["Recesivo", "Dominante", "Codominante", "Mutante"],
      correcta: 0,
      explicacion: "El alelo recesivo solo se manifiesta en el fenotipo cuando está en doble dosis (aa). Si hay un alelo dominante (Aa), este se impone y el recesivo queda oculto.",
      pasos: [
        { pre: "Se oculta tras el dominante: ", math: "a = \\text{recesivo}" }
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

    // Reactivos · Mutaciones (3)
    {
      id: "mu1",
      tipo: "ejercicio",
      svgDiagram: "gen-mutacion",
      etiqueta: "Genética · Mutaciones · Reactivo 1 / 3",
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
      etiqueta: "Genética · Mutaciones · Reactivo 2 / 3",
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
      etiqueta: "Genética · Mutaciones · Reactivo 3 / 3",
      pregunta: "Desde el punto de vista evolutivo, las mutaciones son importantes porque:",
      opciones: ["Generan variabilidad genética", "Siempre mejoran al organismo", "Detienen la evolución", "Producen clones idénticos"],
      correcta: 0,
      explicacion: "Las mutaciones introducen nuevas variantes genéticas. Esa variabilidad es la materia prima sobre la que actúa la selección natural; sin ella no habría evolución.",
      pasos: [
        { pre: "Materia prima de la evolución: ", math: "\\text{variabilidad genética}" }
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

    // Reactivos · Biotecnología (4)
    {
      id: "bt1",
      tipo: "ejercicio",
      svgDiagram: "gen-biotecnologia",
      etiqueta: "Genética · Biotecnología · Reactivo 1 / 4",
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
      etiqueta: "Genética · Biotecnología · Reactivo 2 / 4",
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
      etiqueta: "Genética · Biotecnología · Reactivo 3 / 4",
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
      etiqueta: "Genética · Biotecnología · Reactivo 4 / 4",
      pregunta: "Un organismo al que se le ha introducido un gen de otra especie se denomina:",
      opciones: ["Transgénico", "Híbrido natural", "Clon", "Mutante espontáneo"],
      correcta: 0,
      explicacion: "Un organismo transgénico (u OGM) contiene uno o más genes de otra especie introducidos por ingeniería genética, como el maíz Bt o las bacterias que producen insulina.",
      pasos: [
        { pre: "Gen de otra especie: ", math: "\\text{transgénico (OGM)}" }
      ]
    },

    // ── RESUMEN ───────────────────────────────────────────────────────────────
    {
      id: "resumen",
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Ideas clave de genética",
      puntos: [
        { math: "\\text{ADN}", texto: "doble hélice; bases A–T y C–G; el gen es la unidad de herencia" },
        { math: "\\text{ADN} \\to \\text{ARN} \\to \\text{proteína}", texto: "dogma central: replicación, transcripción y traducción" },
        { math: "Aa \\times Aa \\to 3:1", texto: "Mendel: dominante/recesivo; el cuadro de Punnett predice la descendencia" },
        { math: "\\text{Genotipo / fenotipo}", texto: "genotipo = alelos; fenotipo = rasgo observable" },
        { math: "\\text{Mutación}", texto: "cambio heredable en el ADN; fuente de variabilidad y evolución" },
        { math: "\\text{Biotecnología}", texto: "ADN recombinante (insulina), clonación, transgénicos" }
      ]
    }

  ]
};
