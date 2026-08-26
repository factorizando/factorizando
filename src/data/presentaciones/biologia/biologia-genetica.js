// Datos de la presentación: Genética y Biotecnología (Biología · UNAM · Área 1)
// Subtemas: ADN, ARN y dogma central · Leyes de Mendel y Punnett · Mutaciones · Biotecnología → Resumen.
// 16 reactivos por subtema.

export const PRESENTACION = {
  id: "biologia-genetica",
  titulo: "Genética y Biotecnología",
  materia: "Biología",
  examenes: ["UNAM"],
  subtema: "Herencia e información genética",
  slides: [
    {
      id: 0,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "portada",
          kicker: "Biología · UNAM",
          titulo: "Genética y Biotecnología",
          subtitulo: "ADN y ARN · Dogma central · Leyes de Mendel · Cuadro de Punnett · Mutaciones · ADN recombinante",
          figura: "gen-portada",
        },
      ],
    },
    {
      id: "adn",
      tipo: "lienzo",
      etiqueta: "La molécula de la herencia",
      titulo: "ADN y ARN",
      bloques: [
        {
          tipo: "formula",
          math: "A\\text{–}T \\quad C\\text{–}G",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "gen-adn",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\text{ADN}",
              texto: "doble hélice; guarda la información genética. Bases: A, T, C, G",
            },
            {
              math: "\\text{Apareamiento}",
              texto: "A se une con T, y C con G (bases complementarias)",
            },
            {
              math: "\\text{ARN}",
              texto: "una sola cadena; lleva el mensaje del ADN. En vez de T usa U (uracilo)",
            },
            {
              math: "\\text{Gen}",
              texto: "fragmento de ADN que codifica una proteína o carácter",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "El ADN fue descrito como doble hélice por Watson y Crick (1953). Las bases nitrogenadas se aparean A–T y C–G. Un gen es un segmento de ADN con la «receta» de una proteína. El conjunto de todo el ADN de un organismo es su genoma.",
        },
      ],
    },
    {
      id: "dogma",
      tipo: "lienzo",
      etiqueta: "ADN → ARN → proteína",
      titulo: "El dogma central",
      bloques: [
        {
          tipo: "destacado",
          texto: "La información fluye del ADN a las proteínas en tres pasos: la REPLICACIÓN copia el ADN (para dividirse); la TRANSCRIPCIÓN pasa la información del ADN a un ARN mensajero; la TRADUCCIÓN lee ese ARN en los ribosomas para fabricar la proteína.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "gen-dogma",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "\\text{ADN} \\xrightarrow{\\text{transcripción}} \\text{ARN} \\xrightarrow{\\text{traducción}} \\text{proteína}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Cada paso tiene un nombre preciso: replicación = copiar ADN a ADN; transcripción = pasar de ADN a ARN; traducción = pasar de ARN a proteína (en el ribosoma). El orden y los nombres son una pregunta clásica de examen.",
        },
        {
          tipo: "formula",
          math: "\\text{ADN} \\xrightarrow{\\text{replicación}} \\text{ADN (copia)}",
        },
      ],
    },
    {
      id: "ad1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Genética · ADN · Reactivo 1 / 16",
          enunciado: "En la molécula de ADN, la base adenina (A) siempre se aparea con:",
          opciones: ["Timina (T)", "Citosina (C)", "Guanina (G)", "Uracilo (U)"],
          correcta: 0,
          explicacion: "Las bases del ADN se aparean de forma complementaria: A con T y C con G. El uracilo (U) sustituye a la timina, pero solo en el ARN.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "gen-adn",
        },
      ],
    },
    {
      id: "ad2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Genética · Dogma central · Reactivo 2 / 16",
          enunciado: "El proceso en el que la información del ADN se copia a una molécula de ARN mensajero se llama:",
          opciones: ["Transcripción", "Traducción", "Replicación", "Mutación"],
          correcta: 0,
          explicacion: "La transcripción es el paso ADN → ARN: la información del gen se copia a un ARN mensajero que luego saldrá del núcleo para ser traducido.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "gen-dogma",
        },
      ],
    },
    {
      id: "ad3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Genética · Dogma central · Reactivo 3 / 16",
          enunciado: "La síntesis de proteínas a partir del ARN mensajero ocurre en los ribosomas y se denomina:",
          opciones: ["Traducción", "Transcripción", "Replicación", "Fecundación"],
          correcta: 0,
          explicacion: "La traducción es el paso ARN → proteína: el ribosoma lee el ARN mensajero y une los aminoácidos en el orden indicado para formar la proteína.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "gen-dogma",
        },
      ],
    },
    {
      id: "ad4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · ADN · Reactivo 4 / 16",
          enunciado: "Un segmento de ADN que contiene la información para un carácter o una proteína se llama:",
          opciones: ["Gen", "Cromosoma", "Ribosoma", "Nucleótido"],
          correcta: 0,
          explicacion: "El gen es la unidad de la herencia: un fragmento de ADN con la información de una proteína o carácter. Muchos genes se organizan en un cromosoma.",
        },
      ],
    },
    {
      id: "ad5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Genética · ADN · Reactivo 5 / 16",
          enunciado: "La estructura de doble hélice del ADN fue propuesta en 1953 por:",
          opciones: ["Watson y Crick", "Mendel y Darwin", "Hooke y Schwann", "Oparin y Haldane"],
          correcta: 0,
          explicacion: "James Watson y Francis Crick describieron en 1953 la estructura de doble hélice del ADN, apoyándose en los datos de Rosalind Franklin.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "gen-adn",
        },
      ],
    },
    {
      id: "ad6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Genética · ADN · Reactivo 6 / 16",
          enunciado: "En el ADN, la citosina (C) se aparea siempre con:",
          opciones: ["Guanina (G)", "Adenina (A)", "Timina (T)", "Uracilo (U)"],
          correcta: 0,
          explicacion: "La citosina se aparea con la guanina (C–G), mientras que la adenina lo hace con la timina (A–T).",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "gen-adn",
        },
      ],
    },
    {
      id: "ad7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · ADN · Reactivo 7 / 16",
          enunciado: "Una diferencia entre el ARN y el ADN es que el ARN:",
          opciones: [
            "Tiene una sola cadena y usa uracilo en vez de timina",
            "Tiene doble hélice",
            "No contiene bases nitrogenadas",
            "Guarda toda la información hereditaria",
          ],
          correcta: 0,
          explicacion: "El ARN es de una sola cadena y emplea uracilo (U) en lugar de timina. El ADN es de doble cadena y usa timina.",
        },
      ],
    },
    {
      id: "ad8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Genética · Dogma central · Reactivo 8 / 16",
          enunciado: "El proceso por el cual el ADN se copia a sí mismo antes de la división celular se llama:",
          opciones: ["Replicación", "Transcripción", "Traducción", "Mutación"],
          correcta: 0,
          explicacion: "La replicación es la duplicación del ADN (ADN → ADN), necesaria para que cada célula hija reciba una copia completa del material genético.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "gen-dogma",
        },
      ],
    },
    {
      id: "ad9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · ADN · Reactivo 9 / 16",
          enunciado: "Las cuatro bases nitrogenadas del ADN son:",
          opciones: [
            "Adenina, timina, citosina y guanina",
            "Adenina, uracilo, citosina y glucosa",
            "Glicina, alanina, valina y leucina",
            "Sodio, potasio, calcio y cloro",
          ],
          correcta: 0,
          explicacion: "Las bases del ADN son adenina (A), timina (T), citosina (C) y guanina (G). En el ARN, la timina se sustituye por uracilo.",
        },
      ],
    },
    {
      id: "ad10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · ADN · Reactivo 10 / 16",
          enunciado: "El conjunto completo del ADN (todos los genes) de un organismo se denomina:",
          opciones: ["Genoma", "Gen", "Alelo", "Codón"],
          correcta: 0,
          explicacion: "El genoma es la totalidad de la información genética (todo el ADN) de un organismo.",
        },
      ],
    },
    {
      id: "ad11",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · ADN · Reactivo 11 / 16",
          enunciado: "Cuando el ADN se enrolla y compacta fuertemente durante la división celular, forma estructuras llamadas:",
          opciones: ["Cromosomas", "Ribosomas", "Lisosomas", "Plásmidos"],
          correcta: 0,
          explicacion: "Durante la división, el ADN se condensa formando los cromosomas, que facilitan el reparto del material genético a las células hijas.",
        },
      ],
    },
    {
      id: "ad12",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · ADN · Reactivo 12 / 16",
          enunciado: "La unidad que forma al ADN, compuesta por un azúcar, un fosfato y una base nitrogenada, es el:",
          opciones: ["Nucleótido", "Aminoácido", "Monosacárido", "Ácido graso"],
          correcta: 0,
          explicacion: "El ADN es un polímero de nucleótidos; cada nucleótido tiene un azúcar (desoxirribosa), un grupo fosfato y una base nitrogenada.",
        },
      ],
    },
    {
      id: "ad13",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Dogma central · Reactivo 13 / 16",
          enunciado: "El tipo de ARN que copia la información del gen y la lleva del núcleo al ribosoma es el ARN:",
          opciones: ["Mensajero (ARNm)", "De transferencia (ARNt)", "Ribosomal (ARNr)", "Mitocondrial"],
          correcta: 0,
          explicacion: "El ARN mensajero (ARNm) transporta la información del ADN desde el núcleo hasta los ribosomas, donde se traduce en proteína.",
        },
      ],
    },
    {
      id: "ad14",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Genética · Dogma central · Reactivo 14 / 16",
          enunciado: "El orden correcto del flujo de información en el dogma central es:",
          opciones: ["ADN → ARN → proteína", "Proteína → ARN → ADN", "ARN → ADN → proteína", "ADN → proteína → ARN"],
          correcta: 0,
          explicacion: "El dogma central establece que la información va del ADN al ARN (transcripción) y del ARN a la proteína (traducción).",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "gen-dogma",
        },
      ],
    },
    {
      id: "ad15",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · ADN · Reactivo 15 / 16",
          enunciado: "En las células eucariotas, el ADN se encuentra principalmente en:",
          opciones: ["El núcleo", "El citoplasma libre", "La membrana", "El ribosoma"],
          correcta: 0,
          explicacion: "En las eucariotas, la mayor parte del ADN está dentro del núcleo (también hay algo en mitocondrias y cloroplastos).",
        },
      ],
    },
    {
      id: "ad16",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · ADN · Reactivo 16 / 16",
          enunciado: "La función principal del ADN es:",
          opciones: [
            "Almacenar y transmitir la información genética",
            "Producir energía (ATP)",
            "Digerir los alimentos",
            "Dar rigidez a la célula",
          ],
          correcta: 0,
          explicacion: "El ADN almacena la información genética y la transmite de una generación a otra, además de dirigir la síntesis de proteínas.",
        },
      ],
    },
    {
      id: "mendel",
      tipo: "lienzo",
      etiqueta: "Cómo se heredan los caracteres",
      titulo: "Las leyes de Mendel",
      bloques: [
        {
          tipo: "formula",
          math: "Aa \\times Aa \\to 3 : 1",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "gen-punnett",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\text{Alelo}",
              texto: "cada versión de un gen; dominante (A) se impone, recesivo (a) se oculta",
            },
            {
              math: "\\text{Homocigoto}",
              texto: "dos alelos iguales (AA o aa)",
            },
            {
              math: "\\text{Heterocigoto}",
              texto: "dos alelos distintos (Aa); se expresa el dominante",
            },
            {
              math: "\\text{Genotipo / fenotipo}",
              texto: "genotipo = los alelos (Aa); fenotipo = el rasgo que se ve",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Mendel formuló las leyes de la herencia trabajando con chícharos. Un cruce de dos heterocigotos (Aa × Aa) da una proporción fenotípica de 3 dominantes : 1 recesivo, y genotípica 1 AA : 2 Aa : 1 aa. El cuadro de Punnett sirve para predecir estas proporciones.",
        },
      ],
    },
    {
      id: "punnett",
      tipo: "lienzo",
      etiqueta: "Predecir la descendencia",
      titulo: "El cuadro de Punnett",
      bloques: [
        {
          tipo: "destacado",
          texto: "El cuadro de Punnett combina los alelos de cada progenitor para predecir los genotipos posibles. En un cruce Aa × Aa se obtienen: 1 AA, 2 Aa y 1 aa. Como A es dominante, 3 de cada 4 muestran el rasgo dominante y 1 de cada 4, el recesivo.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "gen-punnett",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "Aa \\times Aa \\Rightarrow 1\\,AA : 2\\,Aa : 1\\,aa",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "El recesivo (aa) solo aparece cuando se juntan los dos alelos recesivos: por eso es 1 de 4 (25%). Los otros 3 de 4 (75%) tienen al menos una A dominante y muestran el rasgo dominante. La proporción fenotípica es 3:1.",
        },
        {
          tipo: "formula",
          math: "\\text{fenotipo: } 3\\ \\text{dominante} : 1\\ \\text{recesivo} = 75\\% : 25\\%",
        },
      ],
    },
    {
      id: "me1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Genética · Mendel · Reactivo 1 / 16",
          enunciado: "Al cruzar dos individuos heterocigotos (Aa × Aa), ¿qué proporción fenotípica se espera?",
          opciones: ["3 dominante : 1 recesivo", "1 : 1", "todos dominantes", "todos recesivos"],
          correcta: 0,
          explicacion: "Aa × Aa produce 1 AA : 2 Aa : 1 aa. Como A domina, 3 de 4 muestran el rasgo dominante y 1 de 4 el recesivo: proporción 3:1.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "gen-punnett",
        },
      ],
    },
    {
      id: "me2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Mendel · Reactivo 2 / 16",
          enunciado: "Un organismo con genotipo «Aa» para un gen se denomina:",
          apoyo: "Aa",
          apoyoPie: "obsérvala antes de responder",
          opciones: ["Heterocigoto", "Homocigoto dominante", "Homocigoto recesivo", "Haploide"],
          correcta: 0,
          explicacion: "Tener dos alelos distintos (uno dominante A y uno recesivo a) es ser heterocigoto. AA sería homocigoto dominante y aa homocigoto recesivo.",
        },
      ],
    },
    {
      id: "me3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Mendel · Reactivo 3 / 16",
          enunciado: "El conjunto de alelos de un organismo (p. ej. Aa) constituye su ________, y el rasgo observable, su ________.",
          opciones: ["genotipo — fenotipo", "fenotipo — genotipo", "cromosoma — gen", "alelo — gen"],
          correcta: 0,
          explicacion: "El genotipo es la constitución genética (los alelos, como Aa); el fenotipo es la característica que se observa (color, forma, etc.) resultado de ese genotipo y el ambiente.",
        },
      ],
    },
    {
      id: "me4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Genética · Mendel · Reactivo 4 / 16",
          enunciado: "En el cruce Aa × Aa, ¿qué porcentaje de la descendencia será homocigoto recesivo (aa)?",
          opciones: ["25 %", "50 %", "75 %", "100 %"],
          correcta: 0,
          explicacion: "De las cuatro combinaciones (AA, Aa, Aa, aa), solo una es aa: 1 de 4 = 25 %. Es el único genotipo que muestra el rasgo recesivo.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "gen-punnett",
        },
      ],
    },
    {
      id: "me5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Mendel · Reactivo 5 / 16",
          enunciado: "Un alelo cuyo efecto queda OCULTO cuando está junto a un alelo dominante se llama:",
          opciones: ["Recesivo", "Dominante", "Codominante", "Mutante"],
          correcta: 0,
          explicacion: "El alelo recesivo solo se manifiesta en el fenotipo cuando está en doble dosis (aa). Si hay un alelo dominante (Aa), este se impone y el recesivo queda oculto.",
        },
      ],
    },
    {
      id: "me6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Mendel · Reactivo 6 / 16",
          enunciado: "Un alelo que se manifiesta en el fenotipo aunque esté presente en una sola dosis se denomina:",
          opciones: ["Dominante", "Recesivo", "Letal", "Neutro"],
          correcta: 0,
          explicacion: "El alelo dominante se expresa siempre que esté presente (en AA o en Aa), imponiéndose sobre el recesivo.",
        },
      ],
    },
    {
      id: "me7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Mendel · Reactivo 7 / 16",
          enunciado: "Un individuo con genotipo «AA» es:",
          apoyo: "AA",
          apoyoPie: "obsérvala antes de responder",
          opciones: ["Homocigoto dominante", "Heterocigoto", "Homocigoto recesivo", "Haploide"],
          correcta: 0,
          explicacion: "AA tiene dos alelos dominantes iguales: es homocigoto dominante. aa sería homocigoto recesivo y Aa heterocigoto.",
        },
      ],
    },
    {
      id: "me8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Mendel · Reactivo 8 / 16",
          enunciado: "Gregor Mendel, considerado el padre de la genética, realizó sus experimentos con:",
          opciones: ["Plantas de chícharo (guisante)", "Moscas de la fruta", "Bacterias", "Ratones"],
          correcta: 0,
          explicacion: "Mendel estudió la herencia cruzando plantas de chícharo (Pisum sativum), lo que le permitió formular sus leyes.",
        },
      ],
    },
    {
      id: "me9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Genética · Mendel · Reactivo 9 / 16",
          enunciado: "Al cruzar un homocigoto dominante (AA) con uno recesivo (aa), toda la descendencia será:",
          opciones: [
            "Heterocigota (Aa)",
            "Homocigota dominante (AA)",
            "Homocigota recesiva (aa)",
            "Mitad AA y mitad aa",
          ],
          correcta: 0,
          explicacion: "AA × aa: cada hijo recibe una A del primero y una a del segundo, así que todos serán Aa (heterocigotos) y mostrarán el rasgo dominante.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "gen-punnett",
        },
      ],
    },
    {
      id: "me10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Genética · Mendel · Reactivo 10 / 16",
          enunciado: "En el cruce Aa × Aa, ¿qué porcentaje de la descendencia mostrará el rasgo DOMINANTE?",
          opciones: ["75 %", "25 %", "50 %", "100 %"],
          correcta: 0,
          explicacion: "Tres de las cuatro combinaciones (AA, Aa, Aa) tienen al menos un alelo dominante: 3 de 4 = 75 % muestran el rasgo dominante.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "gen-punnett",
        },
      ],
    },
    {
      id: "me11",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Mendel · Reactivo 11 / 16",
          enunciado: "Por convención, el alelo dominante se representa con una letra ________ y el recesivo con una ________.",
          opciones: ["mayúscula — minúscula", "minúscula — mayúscula", "griega — latina", "número — letra"],
          correcta: 0,
          explicacion: "El alelo dominante se escribe con mayúscula (A) y el recesivo con la misma letra en minúscula (a).",
        },
      ],
    },
    {
      id: "me12",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Mendel · Reactivo 12 / 16",
          enunciado: "Un cruce en el que se estudia un solo carácter (como el color de la semilla) se llama:",
          opciones: ["Monohíbrido", "Dihíbrido", "Trihíbrido", "Recíproco"],
          correcta: 0,
          explicacion: "Un cruce monohíbrido analiza la herencia de un solo carácter o gen a la vez (como hizo Mendel con un rasgo).",
        },
      ],
    },
    {
      id: "me13",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Mendel · Reactivo 13 / 16",
          enunciado: "Cuando dos alelos se expresan AMBOS a la vez en el heterocigoto (como en los grupos sanguíneos AB), se habla de:",
          opciones: ["Codominancia", "Dominancia completa", "Recesividad", "Mutación"],
          correcta: 0,
          explicacion: "En la codominancia ningún alelo oculta al otro: ambos se manifiestan a la vez (por ejemplo, el grupo sanguíneo AB expresa los alelos A y B).",
        },
      ],
    },
    {
      id: "me14",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Mendel · Reactivo 14 / 16",
          enunciado: "Al cruzar dos homocigotos recesivos (aa × aa), la descendencia será:",
          opciones: [
            "Toda homocigota recesiva (aa)",
            "Toda heterocigota (Aa)",
            "Mitad AA y mitad aa",
            "Toda dominante (AA)",
          ],
          correcta: 0,
          explicacion: "Si ambos padres solo aportan el alelo a, todos los hijos serán aa y mostrarán el rasgo recesivo.",
        },
      ],
    },
    {
      id: "me15",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Mendel · Reactivo 15 / 16",
          enunciado: "Una característica heredable de un organismo (como el color de los ojos) se denomina:",
          opciones: ["Carácter (rasgo)", "Alelo", "Cromosoma", "Gameto"],
          correcta: 0,
          explicacion: "Un carácter o rasgo es una característica heredable del organismo; está determinado por uno o varios genes.",
        },
      ],
    },
    {
      id: "me16",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Genética · Mendel · Reactivo 16 / 16",
          enunciado: "Un cuadro de Punnett de un cruce monohíbrido (2 alelos × 2 alelos) tiene cuántas casillas:",
          opciones: ["4", "2", "6", "9"],
          correcta: 0,
          explicacion: "Un cruce monohíbrido se representa con un cuadro de Punnett de 2 × 2 = 4 casillas, una por cada combinación posible de gametos.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "gen-punnett",
        },
      ],
    },
    {
      id: "mutaciones",
      tipo: "lienzo",
      etiqueta: "Cambios en el ADN",
      titulo: "Mutaciones",
      bloques: [
        {
          tipo: "formula",
          math: "\\text{mutación} = \\text{cambio en el ADN}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "gen-mutacion",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\text{Qué es}",
              texto: "cambio en la secuencia del ADN; si es en gametos, se hereda",
            },
            {
              math: "\\text{Causas}",
              texto: "errores en la replicación, radiación, sustancias químicas (mutágenos)",
            },
            {
              math: "\\text{Efectos}",
              texto: "pueden ser neutras, perjudiciales o, a veces, beneficiosas",
            },
            {
              math: "\\text{Importancia}",
              texto: "fuente de variabilidad y materia prima de la evolución",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Una mutación es un cambio genético heredable cuando ocurre en las células sexuales. Aunque muchas son dañinas o neutras, algunas dan ventajas que la selección natural favorece: por eso las mutaciones son la fuente última de la diversidad biológica.",
        },
      ],
    },
    {
      id: "mu1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Genética · Mutaciones · Reactivo 1 / 16",
          enunciado: "Se denomina ________ al proceso en el que ocurre un cambio genético heredable.",
          opciones: ["Mutación", "Traducción", "Replicación", "Transcripción"],
          correcta: 0,
          explicacion: "La mutación es un cambio en la secuencia del ADN. Cuando ocurre en las células sexuales se transmite a la descendencia (es heredable).",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "gen-mutacion",
        },
      ],
    },
    {
      id: "mu2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Mutaciones · Reactivo 2 / 16",
          enunciado: "Un agente que aumenta la frecuencia de mutaciones, como la radiación UV o ciertas sustancias químicas, se llama:",
          opciones: ["Mutágeno", "Catalizador", "Antígeno", "Nutriente"],
          correcta: 0,
          explicacion: "Los mutágenos son factores (radiación, sustancias químicas) que dañan el ADN y aumentan la tasa de mutaciones.",
        },
      ],
    },
    {
      id: "mu3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Mutaciones · Reactivo 3 / 16",
          enunciado: "Desde el punto de vista evolutivo, las mutaciones son importantes porque:",
          opciones: [
            "Generan variabilidad genética",
            "Siempre mejoran al organismo",
            "Detienen la evolución",
            "Producen clones idénticos",
          ],
          correcta: 0,
          explicacion: "Las mutaciones introducen nuevas variantes genéticas. Esa variabilidad es la materia prima sobre la que actúa la selección natural; sin ella no habría evolución.",
        },
      ],
    },
    {
      id: "mu4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Mutaciones · Reactivo 4 / 16",
          enunciado: "Para que una mutación se transmita a la descendencia, debe ocurrir en:",
          opciones: [
            "Las células sexuales (gametos)",
            "Las células de la piel",
            "Las neuronas",
            "Las células musculares",
          ],
          correcta: 0,
          explicacion: "Solo las mutaciones en las células sexuales (gametos) se heredan; las que ocurren en células somáticas no pasan a los hijos.",
        },
      ],
    },
    {
      id: "mu5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Mutaciones · Reactivo 5 / 16",
          enunciado: "La radiación ultravioleta del Sol puede dañar el ADN de la piel. Por ello se considera un:",
          opciones: ["Agente mutágeno", "Nutriente esencial", "Catalizador", "Antibiótico"],
          correcta: 0,
          explicacion: "La radiación UV es un mutágeno físico: altera el ADN y puede provocar mutaciones relacionadas con el cáncer de piel.",
        },
      ],
    },
    {
      id: "mu6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Mutaciones · Reactivo 6 / 16",
          enunciado: "Respecto a sus efectos, una mutación puede ser:",
          opciones: ["Neutra, perjudicial o beneficiosa", "Siempre beneficiosa", "Siempre mortal", "Siempre neutra"],
          correcta: 0,
          explicacion: "Las mutaciones tienen efectos variados: muchas son neutras, otras perjudiciales y algunas pocas resultan beneficiosas (y son favorecidas por la selección).",
        },
      ],
    },
    {
      id: "mu7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Genética · Mutaciones · Reactivo 7 / 16",
          enunciado: "En esencia, una mutación génica es un cambio en:",
          opciones: [
            "La secuencia de bases del ADN",
            "El número de mitocondrias",
            "La forma de la membrana",
            "La cantidad de agua de la célula",
          ],
          correcta: 0,
          explicacion: "Una mutación génica es una alteración en la secuencia de bases nitrogenadas del ADN (por ejemplo, cambiar una base por otra).",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "gen-mutacion",
        },
      ],
    },
    {
      id: "mu8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Mutaciones · Reactivo 8 / 16",
          enunciado: "Una mutación que ocurre en una célula del cuerpo (somática), como una de la piel, NO se hereda porque:",
          opciones: [
            "No está en los gametos",
            "El ADN no cambia",
            "Las células somáticas no tienen ADN",
            "Siempre se repara sola",
          ],
          correcta: 0,
          explicacion: "Las mutaciones somáticas afectan a células del cuerpo pero no a los gametos, por lo que no se transmiten a la descendencia.",
        },
      ],
    },
    {
      id: "mu9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Mutaciones · Reactivo 9 / 16",
          enunciado: "La anemia falciforme, en la que los glóbulos rojos tienen forma de hoz, es causada por una:",
          opciones: ["Mutación en un gen", "Infección por bacterias", "Falta de vitaminas", "Reacción alérgica"],
          correcta: 0,
          explicacion: "La anemia falciforme se debe a una mutación en el gen de la hemoglobina, que cambia la forma de los glóbulos rojos. Es un ejemplo de mutación heredable.",
        },
      ],
    },
    {
      id: "mu10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Mutaciones · Reactivo 10 / 16",
          enunciado: "Las mutaciones son la fuente original de:",
          opciones: [
            "Nuevos alelos (variantes de los genes)",
            "Nuevas mitocondrias",
            "Más agua celular",
            "Más oxígeno",
          ],
          correcta: 0,
          explicacion: "Las mutaciones crean nuevos alelos (variantes de un gen), que son el origen de la diversidad genética de las poblaciones.",
        },
      ],
    },
    {
      id: "mu11",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Mutaciones · Reactivo 11 / 16",
          enunciado: "¿Cuál de los siguientes es un mutágeno químico?",
          opciones: ["El humo del tabaco", "El agua pura", "La luz visible normal", "El oxígeno respirable"],
          correcta: 0,
          explicacion: "Muchas sustancias del humo del tabaco son mutágenos químicos que dañan el ADN y se asocian al cáncer.",
        },
      ],
    },
    {
      id: "mu12",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Mutaciones · Reactivo 12 / 16",
          enunciado: "Una mutación beneficiosa para un organismo en su ambiente tiende a:",
          opciones: [
            "Ser favorecida por la selección natural",
            "Desaparecer de inmediato",
            "Volverse perjudicial",
            "Impedir la reproducción",
          ],
          correcta: 0,
          explicacion: "Si una mutación da una ventaja, el organismo sobrevive y se reproduce más, por lo que la selección natural favorece esa variante.",
        },
      ],
    },
    {
      id: "mu13",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Mutaciones · Reactivo 13 / 16",
          enunciado: "El albinismo, caracterizado por la falta de pigmento, es resultado de una mutación que afecta la producción de:",
          opciones: ["Melanina", "Hemoglobina", "Insulina", "Clorofila"],
          correcta: 0,
          explicacion: "El albinismo se debe a una mutación que impide producir melanina, el pigmento de la piel, el pelo y los ojos.",
        },
      ],
    },
    {
      id: "mu14",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Mutaciones · Reactivo 14 / 16",
          enunciado: "Cuando la mutación afecta al número o la estructura de cromosomas completos, se llama mutación:",
          opciones: ["Cromosómica", "Génica (puntual)", "Silenciosa", "Reversible"],
          correcta: 0,
          explicacion: "Las mutaciones cromosómicas alteran cromosomas enteros (su número o estructura), como en el síndrome de Down (un cromosoma 21 extra). Las génicas afectan solo a un gen.",
        },
      ],
    },
    {
      id: "mu15",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Mutaciones · Reactivo 15 / 16",
          enunciado: "Sin mutaciones ni recombinación, una población carecería de:",
          opciones: ["Variabilidad para evolucionar", "Capacidad de respirar", "Membrana celular", "Agua"],
          correcta: 0,
          explicacion: "Las mutaciones aportan la variabilidad genética indispensable para que la selección natural actúe; sin ellas, la evolución se detendría.",
        },
      ],
    },
    {
      id: "mu16",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Mutaciones · Reactivo 16 / 16",
          enunciado: "Las mutaciones, en general, ocurren de manera:",
          opciones: [
            "Aleatoria (al azar)",
            "Dirigida por la necesidad del organismo",
            "Solo cuando el organismo lo decide",
            "Únicamente en invierno",
          ],
          correcta: 0,
          explicacion: "Las mutaciones surgen al azar, sin un propósito; es la selección natural la que luego conserva las que resultan ventajosas.",
        },
      ],
    },
    {
      id: "biotecnologia",
      tipo: "lienzo",
      etiqueta: "Manipular genes con un fin",
      titulo: "Biotecnología y ADN recombinante",
      bloques: [
        {
          tipo: "destacado",
          texto: "La tecnología del ADN recombinante consiste en insertar un gen de un organismo en el ADN de otro (por ejemplo, una bacteria) para que este fabrique una proteína útil. Así se produce insulina humana en bacterias. La clonación, los transgénicos y la terapia génica son otras aplicaciones de la biotecnología.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "gen-biotecnologia",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "\\text{gen humano} + \\text{plásmido bacteriano} \\to \\text{proteína (insulina)}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Al introducir el gen de la insulina humana en una bacteria, esta lo «lee» y produce insulina idéntica a la humana en grandes cantidades. Antes se extraía de páncreas de animales; hoy se obtiene por ADN recombinante, más segura y abundante.",
        },
        {
          tipo: "formula",
          math: "\\text{insulina, hormona de crecimiento, vacunas} = \\text{ADN recombinante}",
        },
      ],
    },
    {
      id: "bt1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Genética · Biotecnología · Reactivo 1 / 16",
          enunciado: "Proteína producida mediante la tecnología del ADN recombinante para tratar la diabetes:",
          opciones: ["Insulina", "Histona", "Hemoglobina", "Telomerasa"],
          correcta: 0,
          explicacion: "La insulina humana se produce insertando su gen en bacterias, que la fabrican por ADN recombinante. Es uno de los primeros y más exitosos productos biotecnológicos.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "gen-biotecnologia",
        },
      ],
    },
    {
      id: "bt2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Biotecnología · Reactivo 2 / 16",
          enunciado: "Obtener un organismo genéticamente idéntico a otro a partir de una de sus células se llama:",
          opciones: ["Clonación", "Fecundación", "Mutación", "Polinización"],
          correcta: 0,
          explicacion: "La clonación produce un organismo genéticamente idéntico a otro (como la oveja Dolly). Es una técnica de la biotecnología basada en copiar el material genético.",
        },
      ],
    },
    {
      id: "bt3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Genética · Biotecnología · Reactivo 3 / 16",
          enunciado: "En la técnica del ADN recombinante, ¿qué estructura bacteriana se usa para transportar e insertar el gen de interés?",
          opciones: ["El plásmido", "El ribosoma", "La pared celular", "El flagelo"],
          correcta: 0,
          explicacion: "El plásmido es un pequeño anillo de ADN bacteriano que se usa como «vehículo» (vector): se le inserta el gen de interés y se introduce en la bacteria para que lo exprese.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "gen-biotecnologia",
        },
      ],
    },
    {
      id: "bt4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Biotecnología · Reactivo 4 / 16",
          enunciado: "Un organismo al que se le ha introducido un gen de otra especie se denomina:",
          opciones: ["Transgénico", "Híbrido natural", "Clon", "Mutante espontáneo"],
          correcta: 0,
          explicacion: "Un organismo transgénico (u OGM) contiene uno o más genes de otra especie introducidos por ingeniería genética, como el maíz Bt o las bacterias que producen insulina.",
        },
      ],
    },
    {
      id: "bt5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Genética · Biotecnología · Reactivo 5 / 16",
          enunciado: "La tecnología del ADN recombinante consiste esencialmente en:",
          opciones: [
            "Combinar genes de organismos distintos",
            "Eliminar todo el ADN de una célula",
            "Aumentar la temperatura del ADN",
            "Convertir ADN en proteína directamente",
          ],
          correcta: 0,
          explicacion: "El ADN recombinante combina fragmentos de ADN de diferentes organismos (por ejemplo, un gen humano dentro de una bacteria) para obtener un producto útil.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "gen-biotecnologia",
        },
      ],
    },
    {
      id: "bt6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Biotecnología · Reactivo 6 / 16",
          enunciado: "La oveja Dolly fue célebre por ser el primer mamífero:",
          opciones: [
            "Clonado a partir de una célula adulta",
            "Transgénico con genes vegetales",
            "Nacido sin ADN",
            "Producido por fermentación",
          ],
          correcta: 0,
          explicacion: "Dolly (1996) fue el primer mamífero clonado a partir de una célula adulta, un hito de la clonación.",
        },
      ],
    },
    {
      id: "bt7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Biotecnología · Reactivo 7 / 16",
          enunciado: "El conjunto de técnicas para modificar el material genético de los organismos se llama:",
          opciones: ["Ingeniería genética", "Taxonomía", "Ecología", "Anatomía"],
          correcta: 0,
          explicacion: "La ingeniería genética agrupa las técnicas para manipular el ADN (cortar, unir e insertar genes) con fines diversos.",
        },
      ],
    },
    {
      id: "bt8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Biotecnología · Reactivo 8 / 16",
          enunciado: "Las «tijeras moleculares» que cortan el ADN en sitios específicos para la ingeniería genética son las:",
          apoyo: "tijeras moleculares",
          apoyoPie: "obsérvala antes de responder",
          opciones: ["Enzimas de restricción", "Hormonas", "Vitaminas", "Bases nitrogenadas"],
          correcta: 0,
          explicacion: "Las enzimas de restricción cortan el ADN en secuencias específicas; son herramientas clave para aislar e insertar genes.",
        },
      ],
    },
    {
      id: "bt9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Biotecnología · Reactivo 9 / 16",
          enunciado: "El maíz Bt, resistente a plagas gracias a un gen bacteriano, es un ejemplo de:",
          opciones: ["Cultivo transgénico", "Mutación natural", "Reproducción asexual", "Fermentación"],
          correcta: 0,
          explicacion: "El maíz Bt incorpora un gen de la bacteria Bacillus thuringiensis que lo hace resistente a insectos: es un organismo transgénico (OGM).",
        },
      ],
    },
    {
      id: "bt10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Genética · Biotecnología · Reactivo 10 / 16",
          enunciado: "En la producción de insulina recombinante, el organismo que se usa como «fábrica» para producirla suele ser:",
          opciones: ["Una bacteria", "Una planta de maíz", "Un mamífero", "Un hongo venenoso"],
          correcta: 0,
          explicacion: "Se introduce el gen humano de la insulina en bacterias (como E. coli), que la producen en grandes cantidades y de forma rápida.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "gen-biotecnologia",
        },
      ],
    },
    {
      id: "bt11",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Biotecnología · Reactivo 11 / 16",
          enunciado: "La biotecnología también permite producir ________ que estimulan al sistema inmune para prevenir enfermedades.",
          opciones: ["vacunas", "plásticos", "metales", "minerales"],
          correcta: 0,
          explicacion: "Con biotecnología se desarrollan vacunas (algunas obtenidas por ingeniería genética) que protegen contra enfermedades infecciosas.",
        },
      ],
    },
    {
      id: "bt12",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Biotecnología · Reactivo 12 / 16",
          enunciado: "La técnica que busca corregir enfermedades hereditarias introduciendo o reparando genes en el paciente se llama:",
          opciones: ["Terapia génica", "Polinización", "Fermentación", "Mitosis"],
          correcta: 0,
          explicacion: "La terapia génica intenta tratar enfermedades genéticas modificando o reemplazando los genes defectuosos del paciente.",
        },
      ],
    },
    {
      id: "bt13",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Biotecnología · Reactivo 13 / 16",
          enunciado: "El análisis del ADN para identificar a una persona (en criminalística o pruebas de paternidad) se conoce como:",
          opciones: ["Huella genética (ADN)", "Polinización", "Fotosíntesis", "Ósmosis"],
          correcta: 0,
          explicacion: "La huella genética usa patrones únicos del ADN de cada persona para identificarla; se aplica en criminalística y pruebas de parentesco.",
        },
      ],
    },
    {
      id: "bt14",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Biotecnología · Reactivo 14 / 16",
          enunciado: "Además de la insulina, otra hormona humana producida por ADN recombinante es la:",
          opciones: ["Hormona de crecimiento", "Adrenalina del susto", "Clorofila", "Queratina"],
          correcta: 0,
          explicacion: "La hormona de crecimiento humana también se produce por ADN recombinante en bacterias, para tratar trastornos del crecimiento.",
        },
      ],
    },
    {
      id: "bt15",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Biotecnología · Reactivo 15 / 16",
          enunciado: "Una ventaja de producir insulina por ADN recombinante, en vez de extraerla de animales, es que:",
          opciones: [
            "Es más segura, abundante y idéntica a la humana",
            "Es más cara y escasa",
            "Provoca más rechazo",
            "No sirve para tratar la diabetes",
          ],
          correcta: 0,
          explicacion: "La insulina recombinante es idéntica a la humana, se produce en grandes cantidades y reduce reacciones alérgicas frente a la insulina animal.",
        },
      ],
    },
    {
      id: "bt16",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · Biotecnología · Reactivo 16 / 16",
          enunciado: "En términos generales, la biotecnología es:",
          opciones: [
            "El uso de seres vivos o sus partes para obtener productos útiles",
            "El estudio de los astros",
            "La clasificación de las rocas",
            "La medición de la temperatura",
          ],
          correcta: 0,
          explicacion: "La biotecnología utiliza organismos vivos (o sus componentes, como enzimas y genes) para fabricar productos o mejorar procesos: pan, vacunas, insulina, cultivos, etc.",
        },
      ],
    },
    {
      id: "pcr",
      tipo: "lienzo",
      etiqueta: "Copiar ADN millones de veces",
      titulo: "La PCR: reacción en cadena de la polimerasa",
      bloques: [
        {
          tipo: "destacado",
          texto: "La PCR (reacción en cadena de la polimerasa) es la técnica que permite obtener miles de millones de copias de un fragmento específico de ADN en pocas horas. Repite ciclos de tres pasos: DESNATURALIZACIÓN (calor que separa las dos cadenas), HIBRIDACIÓN (los cebadores se unen al fragmento) y EXTENSIÓN (la enzima ADN-polimerasa copia la cadena). En cada ciclo el número de copias se duplica.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "gen-pcr",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "\\text{copias} = 2^{n}\\ \\ (n = \\text{n.\\!^{o}\\ de\\ ciclos})",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "La PCR NO necesita un vector viral ni bacteriano: solo requiere el ADN molde, los cebadores, los nucleótidos y la ADN-polimerasa, todo en un tubo. Por eso se distingue del ADN recombinante (que sí inserta el gen en un plásmido). La PCR sirve para diagnóstico de enfermedades, pruebas de paternidad y análisis forense.",
        },
        {
          tipo: "formula",
          math: "\\text{ADN molde} + \\text{cebadores} + \\text{polimerasa} \\to \\text{millones de copias}",
        },
      ],
    },
    {
      id: "pc1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Genética · PCR · Reactivo 1 / 8",
          enunciado: "Es la técnica biotecnológica que permite obtener miles de millones de copias de un fragmento específico de ADN para identificar con rapidez una secuencia:",
          opciones: [
            "Reacción en cadena de la polimerasa (PCR)",
            "ADN recombinante",
            "Secuenciación del ADN",
            "Clonación de organismos",
          ],
          correcta: 0,
          explicacion: "La PCR amplifica (multiplica) un fragmento de ADN millones de veces. El ADN recombinante inserta genes en otro organismo, y la secuenciación lee el orden de las bases; ninguna de ellas tiene como fin principal copiar masivamente un fragmento.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "gen-pcr",
        },
      ],
    },
    {
      id: "pc2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · PCR · Reactivo 2 / 8",
          enunciado: "A diferencia del ADN recombinante, la PCR para copiar el ADN NO requiere:",
          opciones: [
            "Un vector viral o bacteriano",
            "La enzima ADN-polimerasa",
            "Cebadores (primers)",
            "Nucleótidos libres",
          ],
          correcta: 0,
          explicacion: "La PCR se realiza por completo en un tubo, sin introducir el gen en una célula: no usa vectores virales ni bacterianos. Sí necesita la polimerasa, los cebadores y los nucleótidos.",
        },
      ],
    },
    {
      id: "pc3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Genética · PCR · Reactivo 3 / 8",
          enunciado: "La enzima que «lee» la cadena molde y fabrica la nueva copia de ADN en la PCR es la:",
          opciones: ["ADN-polimerasa", "ATP-sintasa", "Amilasa", "Catalasa"],
          correcta: 0,
          explicacion: "La ADN-polimerasa (en la PCR, una termoestable como la Taq) sintetiza la nueva cadena a partir de los cebadores, copiando la cadena molde.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "gen-pcr",
        },
      ],
    },
    {
      id: "pc4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Genética · PCR · Reactivo 4 / 8",
          enunciado: "El primer paso de cada ciclo de PCR, en el que el calor separa las dos cadenas del ADN, se llama:",
          opciones: ["Desnaturalización", "Hibridación", "Extensión", "Transcripción"],
          correcta: 0,
          explicacion: "La desnaturalización usa calor (~95 °C) para romper los puentes de hidrógeno y separar la doble hélice en dos cadenas simples, que servirán de molde.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "gen-pcr",
        },
      ],
    },
    {
      id: "pc5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · PCR · Reactivo 5 / 8",
          enunciado: "En cada ciclo de la PCR, la cantidad de copias del fragmento de ADN:",
          opciones: ["Se duplica", "Se reduce a la mitad", "No cambia", "Se triplica"],
          correcta: 0,
          explicacion: "Cada ciclo duplica el número de copias; por eso el crecimiento es exponencial (2ⁿ). En unos 30 ciclos se obtienen millones de copias.",
        },
      ],
    },
    {
      id: "pc6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · PCR · Reactivo 6 / 8",
          enunciado: "Las cortas secuencias que se unen al ADN molde para indicar a la polimerasa dónde empezar a copiar son los:",
          opciones: ["Cebadores (primers)", "Plásmidos", "Ribosomas", "Codones de paro"],
          correcta: 0,
          explicacion: "Los cebadores o primers son fragmentos cortos de ADN que se hibridan en los extremos del fragmento a copiar y dan a la polimerasa el punto de inicio.",
        },
      ],
    },
    {
      id: "pc7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · PCR · Reactivo 7 / 8",
          enunciado: "Una aplicación frecuente de la PCR en medicina y criminalística es:",
          opciones: [
            "Detectar el ADN de un virus o identificar a una persona",
            "Producir insulina en bacterias",
            "Fabricar vacunas vivas",
            "Clonar mamíferos completos",
          ],
          correcta: 0,
          explicacion: "Al amplificar incluso cantidades mínimas de ADN, la PCR permite detectar patógenos (por ejemplo, virus) y obtener perfiles genéticos para identificación forense o pruebas de paternidad.",
        },
      ],
    },
    {
      id: "pc8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Genética · PCR · Reactivo 8 / 8",
          enunciado: "Ordena correctamente los tres pasos de un ciclo de PCR:",
          opciones: [
            "Desnaturalización → hibridación → extensión",
            "Extensión → desnaturalización → hibridación",
            "Hibridación → extensión → desnaturalización",
            "Traducción → transcripción → replicación",
          ],
          correcta: 0,
          explicacion: "Cada ciclo: primero el calor separa las cadenas (desnaturalización), luego los cebadores se unen (hibridación) y por último la polimerasa copia (extensión).",
        },
      ],
    },
    {
      id: "funciones",
      tipo: "lienzo",
      etiqueta: "Contener · transmitir · regular",
      titulo: "Las tres funciones del ADN",
      bloques: [
        {
          tipo: "formula",
          math: "\\text{contener} \\;|\\; \\text{transmitir} \\;|\\; \\text{regular}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "gen-adn",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\text{Contener}",
              texto: "almacena la información genética en la secuencia de bases (A, T, C, G)",
            },
            {
              math: "\\text{Transmitir}",
              texto: "se replica y pasa la información a las células hijas en la división celular",
            },
            {
              math: "\\text{Regular}",
              texto: "controla qué genes se expresan y cuándo (regulación de la expresión génica)",
            },
            {
              math: "\\text{Clave}",
              texto: "transmitir ≠ contener ≠ regular: durante la división, el ADN TRANSMITE la información",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "El ADN cumple tres funciones biológicas: contener o almacenar la información genética, transmitirla (al replicarse durante la división celular para que las células hijas reciban una copia) y regular la expresión génica (decidir qué proteínas se fabrican). Hay que distinguirlas: contener es guardar la información; regular es controlar su uso; transmitir es el resultado que ocurre cuando la célula se divide.",
        },
      ],
    },
    {
      id: "fn1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Genética · Funciones del ADN · Reactivo 1 / 1",
          enunciado: "Durante la división celular, un resultado de las funciones biológicas del ADN es:",
          opciones: [
            "Transmitir la información genética a las células hijas",
            "Contener la información genética",
            "Regular la expresión de los genes",
          ],
          correcta: 0,
          explicacion: "Al dividirse la célula, el ADN se replica y TRANSMITE una copia de la información genética a cada célula hija. Contener (almacenar) y regular (controlar la expresión) son funciones del ADN, pero el resultado propio de la división celular es la transmisión.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "gen-adn",
        },
      ],
    },
    {
      id: "resumen",
      tipo: "lienzo",
      etiqueta: "Ideas clave de genética",
      titulo: "Resumen",
      bloques: [
        {
          tipo: "lista",
          items: [
            {
              math: "\\text{ADN}",
              texto: "doble hélice (Watson y Crick); bases A–T y C–G; el gen es la unidad de herencia",
            },
            {
              math: "\\text{ADN} \\to \\text{ARN} \\to \\text{proteína}",
              texto: "dogma central: replicación, transcripción y traducción",
            },
            {
              math: "Aa \\times Aa \\to 3:1",
              texto: "Mendel (chícharos): dominante/recesivo; el cuadro de Punnett predice la descendencia",
            },
            {
              math: "\\text{Genotipo / fenotipo}",
              texto: "genotipo = alelos; fenotipo = rasgo observable",
            },
            {
              math: "\\text{Mutación}",
              texto: "cambio heredable en el ADN; al azar; fuente de variabilidad y evolución",
            },
            {
              math: "\\text{Biotecnología}",
              texto: "ADN recombinante (insulina), clonación (Dolly), transgénicos, terapia génica",
            },
            {
              math: "\\text{PCR } (2^{n})",
              texto: "amplifica un fragmento de ADN millones de veces; sin vector; diagnóstico y forense",
            },
            {
              math: "\\text{Funciones del ADN}",
              texto: "contener, transmitir (en la división) y regular la información genética",
            },
          ],
        },
      ],
    },
  ],
};
