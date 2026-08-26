// Datos de la presentación: Física Moderna y Estructura de la Materia (Física · UNAM)
// Estructura por subtema: Teoría → Ejemplos resueltos → Reactivos tipo UNAM.
// Subtemas: El átomo · Modelos · Número atómico · Espectro · Fotón · Radioactividad · Energía nuclear → Resumen.

export const PRESENTACION = {
  id: "fisica-moderna",
  titulo: "Física Moderna",
  materia: "Física",
  examenes: ["UNAM"],
  subtema: "Estructura de la materia",
  slides: [
    {
      id: 0,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "portada",
          kicker: "Física · UNAM",
          titulo: "Física Moderna",
          subtitulo: "El átomo, modelos atómicos, espectro, fotón, radioactividad y E = mc²",
          figura: "mod-portada",
        },
      ],
    },
    {
      id: "atomo",
      tipo: "lienzo",
      etiqueta: "Las partículas de la materia",
      titulo: "El Átomo",
      bloques: [
        {
          tipo: "formula",
          math: "A = Z + N",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "mod-atomo",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "p^+",
              texto: "protón: carga positiva, en el núcleo",
            },
            {
              math: "n^0",
              texto: "neutrón: sin carga, en el núcleo",
            },
            {
              math: "e^-",
              texto: "electrón: carga negativa, gira alrededor del núcleo",
            },
            {
              math: "\\text{núcleo}",
              texto: "pequeño y muy denso: concentra casi toda la masa",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "El átomo es casi todo espacio vacío: el núcleo (protones + neutrones) es diminuto pero contiene casi toda la masa, y los electrones orbitan a gran distancia relativa.",
        },
      ],
    },
    {
      id: "ej-atomo",
      tipo: "lienzo",
      etiqueta: "Protón, neutrón y electrón",
      titulo: "Ejemplo · Cargas de las partículas",
      bloques: [
        {
          tipo: "destacado",
          texto: "¿Dónde se ubica cada partícula del átomo y qué carga tiene: protón, neutrón y electrón?",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "mod-atomo",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "p^+,\\ n^0,\\ e^-",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Protones (carga positiva) y neutrones (sin carga) están en el núcleo, que concentra casi toda la masa. Los electrones (carga negativa) giran alrededor del núcleo. En un átomo neutro hay tantos electrones como protones.",
        },
        {
          tipo: "formula",
          math: "\\text{núcleo: } p^+ + n^0, \\qquad \\text{corteza: } e^-",
        },
      ],
    },
    {
      id: "m1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Física Moderna · El átomo · Reactivo 1 / 3",
          enunciado: "La parte central del átomo, donde se concentra casi toda su masa, es el:",
          opciones: ["Núcleo", "Electrón", "Orbital", "Protón aislado"],
          correcta: 0,
          explicacion: "El núcleo contiene protones y neutrones, y en él se concentra casi toda la masa del átomo, aunque ocupe un espacio diminuto.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "mod-atomo",
        },
      ],
    },
    {
      id: "m2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Física Moderna · El átomo · Reactivo 2 / 3",
          enunciado: "El protón tiene carga eléctrica:",
          opciones: ["Positiva", "Negativa", "Neutra", "Variable"],
          correcta: 0,
          explicacion: "El protón tiene carga positiva; el electrón, negativa; el neutrón no tiene carga.",
        },
      ],
    },
    {
      id: "m3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Física Moderna · El átomo · Reactivo 3 / 3",
          enunciado: "Los electrones de un átomo se encuentran:",
          opciones: ["Girando alrededor del núcleo", "Dentro del núcleo", "Solo en los protones", "Fuera del átomo"],
          correcta: 0,
          explicacion: "Los electrones orbitan alrededor del núcleo, en niveles de energía. El núcleo solo contiene protones y neutrones.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "mod-atomo",
        },
      ],
    },
    {
      id: "modelos",
      tipo: "lienzo",
      etiqueta: "La idea del átomo fue cambiando",
      titulo: "Modelos Atómicos",
      bloques: [
        {
          tipo: "formula",
          math: "\\text{Dalton} \\to \\text{Thomson} \\to \\text{Rutherford} \\to \\text{Bohr}",
        },
        {
          tipo: "lista",
          items: [
            {
              math: "\\text{Dalton}",
              texto: "esfera maciza e indivisible",
            },
            {
              math: "\\text{Thomson}",
              texto: "«budín de pasas»: cargas positivas y negativas mezcladas",
            },
            {
              math: "\\text{Rutherford}",
              texto: "núcleo central positivo con electrones alrededor",
            },
            {
              math: "\\text{Bohr}",
              texto: "electrones en órbitas o niveles de energía definidos",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "El experimento de la lámina de oro de Rutherford reveló que el átomo tiene un núcleo pequeño y denso. Bohr añadió que los electrones ocupan niveles de energía específicos.",
        },
      ],
    },
    {
      id: "ej-modelos",
      tipo: "lienzo",
      etiqueta: "De Thomson a Rutherford",
      titulo: "Ejemplo · Evolución del modelo atómico",
      bloques: [
        {
          tipo: "destacado",
          texto: "¿Qué aportó el experimento de la lámina de oro de Rutherford respecto al modelo de Thomson?",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "\\text{Thomson} \\to \\text{Rutherford}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Thomson imaginaba el átomo como un «budín de pasas» con la carga repartida. Al disparar partículas alfa a una lámina de oro, Rutherford vio que algunas rebotaban: dedujo que la carga positiva y casi toda la masa estaban concentradas en un núcleo pequeño y denso.",
        },
        {
          tipo: "formula",
          math: "\\text{carga repartida} \\to \\text{núcleo central}",
        },
      ],
    },
    {
      id: "m7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Física Moderna · Modelos atómicos · Reactivo 1 / 2",
          enunciado: "El modelo atómico que propone electrones girando en órbitas o niveles de energía definidos es el de:",
          opciones: ["Bohr", "Dalton", "Thomson", "Demócrito"],
          correcta: 0,
          explicacion: "Bohr propuso que los electrones ocupan órbitas con energías específicas. Dalton imaginaba una esfera maciza y Thomson el «budín de pasas».",
        },
      ],
    },
    {
      id: "m8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Física Moderna · Modelos atómicos · Reactivo 2 / 2",
          enunciado: "El experimento de la lámina de oro, que reveló la existencia de un núcleo pequeño y denso, fue realizado por:",
          opciones: ["Rutherford", "Dalton", "Newton", "Bohr"],
          correcta: 0,
          explicacion: "Rutherford, al bombardear una lámina de oro con partículas alfa, dedujo que la carga positiva y la masa estaban concentradas en un núcleo diminuto.",
        },
      ],
    },
    {
      id: "numero-atomico",
      tipo: "lienzo",
      etiqueta: "Identificar un átomo",
      titulo: "Número Atómico y Másico",
      bloques: [
        {
          tipo: "destacado",
          texto: "El número atómico (Z) es la cantidad de protones e identifica al elemento. El número másico (A) es la suma de protones y neutrones. Los isótopos varían en neutrones.",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "Z = p^+, \\qquad A = Z + N",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "En un átomo neutro, el número de electrones es igual al de protones. Los neutrones se obtienen restando: N = A − Z. Dos isótopos tienen el mismo Z pero distinto A.",
        },
        {
          tipo: "formula",
          math: "N = A - Z, \\qquad e^- = Z \\ (\\text{si es neutro})",
        },
      ],
    },
    {
      id: "ej-particulas",
      tipo: "lienzo",
      etiqueta: "Protones, neutrones y electrones",
      titulo: "Ejemplo · Partículas del átomo",
      bloques: [
        {
          tipo: "destacado",
          texto: "Un átomo neutro tiene número atómico Z = 11 (sodio) y número másico A = 23. ¿Cuántos protones, neutrones y electrones tiene?",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "mod-atomo",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "N = A - Z",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "El número atómico da los protones (11). Los neutrones son A − Z = 23 − 11 = 12. Al ser neutro, los electrones igualan a los protones (11).",
        },
        {
          tipo: "formula",
          math: "p^+ = 11, \\quad N = 23 - 11 = 12, \\quad e^- = 11",
        },
      ],
    },
    {
      id: "m4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Física Moderna · Número atómico y másico · Reactivo 1 / 3",
          enunciado: "El número atómico (Z) de un elemento indica la cantidad de:",
          opciones: ["Protones", "Neutrones", "Electrones de valencia", "Niveles de energía"],
          correcta: 0,
          explicacion: "El número atómico es el número de protones del núcleo, y es lo que identifica a cada elemento.",
        },
      ],
    },
    {
      id: "m5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Física Moderna · Número atómico y másico · Reactivo 2 / 3",
          enunciado: "Un átomo tiene número atómico Z = 8 y número másico A = 16. ¿Cuántos neutrones tiene?",
          opciones: ["8", "16", "24", "0"],
          correcta: 0,
          explicacion: "N = A − Z = 16 − 8 = 8 neutrones.",
        },
      ],
    },
    {
      id: "m6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Física Moderna · Número atómico y másico · Reactivo 3 / 3",
          enunciado: "Dos isótopos de un mismo elemento tienen igual número de protones, pero distinto número de:",
          opciones: ["Neutrones", "Electrones", "Protones", "Cargas positivas"],
          correcta: 0,
          explicacion: "Los isótopos comparten el número de protones (mismo elemento) pero difieren en los neutrones, así que tienen distinto número másico.",
        },
      ],
    },
    {
      id: "espectro",
      tipo: "lienzo",
      etiqueta: "Toda la luz, visible o no",
      titulo: "Espectro Electromagnético",
      bloques: [
        {
          tipo: "formula",
          math: "c = \\lambda\\,f, \\qquad E = h\\,f",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "mod-espectro",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\text{radio} \\to \\gamma",
              texto: "de menor a mayor frecuencia y energía",
            },
            {
              math: "\\text{visible}",
              texto: "es solo una franja pequeña del espectro",
            },
            {
              math: "f \\uparrow \\Rightarrow E \\uparrow",
              texto: "a mayor frecuencia, mayor energía del fotón",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Todas son ondas electromagnéticas que viajan a la velocidad de la luz; se diferencian por su frecuencia. Los rayos gamma son los más energéticos; las ondas de radio, los menos.",
        },
      ],
    },
    {
      id: "ej-espectro",
      tipo: "lienzo",
      etiqueta: "A mayor frecuencia, mayor energía",
      titulo: "Ejemplo · Ordenar por energía",
      bloques: [
        {
          tipo: "destacado",
          texto: "Ordena de menor a mayor energía estas radiaciones: rayos X, ondas de radio y luz visible.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "mod-espectro",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "f \\uparrow \\;\\Rightarrow\\; E \\uparrow",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "La energía de la radiación crece con su frecuencia (E = hf). Las ondas de radio son de baja frecuencia (poca energía), la luz visible va en medio y los rayos X tienen alta frecuencia (mucha energía).",
        },
        {
          tipo: "formula",
          math: "\\text{radio} < \\text{visible} < \\text{rayos X}",
        },
      ],
    },
    {
      id: "m9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Física Moderna · Espectro electromagnético · Reactivo 1 / 2",
          enunciado: "De las siguientes ondas electromagnéticas, ¿cuál tiene mayor frecuencia y energía?",
          opciones: ["Rayos gamma", "Ondas de radio", "Microondas", "Luz infrarroja"],
          correcta: 0,
          explicacion: "Los rayos gamma están en el extremo de mayor frecuencia del espectro, por lo que son los más energéticos. Las ondas de radio son las de menor energía.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "mod-espectro",
        },
      ],
    },
    {
      id: "m10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Física Moderna · Espectro electromagnético · Reactivo 2 / 2",
          enunciado: "La luz visible que percibe el ojo humano es:",
          opciones: [
            "Una pequeña parte del espectro electromagnético",
            "Todo el espectro electromagnético",
            "Una onda mecánica",
            "Independiente de la frecuencia",
          ],
          correcta: 0,
          explicacion: "El espectro electromagnético es enorme (radio, microondas, infrarrojo, visible, ultravioleta, rayos X, gamma); la luz visible es solo una franja muy estrecha.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "mod-espectro",
        },
      ],
    },
    {
      id: "foton",
      tipo: "lienzo",
      etiqueta: "El fotón y el efecto fotoeléctrico",
      titulo: "La Luz como Partícula",
      bloques: [
        {
          tipo: "destacado",
          texto: "La luz también se comporta como partículas de energía llamadas fotones. Al iluminar un metal con la frecuencia adecuada, se arrancan electrones: es el efecto fotoeléctrico.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "mod-fotoelectrico",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "E = h\\,f",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Einstein explicó que cada fotón lleva una energía proporcional a su frecuencia (h es la constante de Planck). Esto probó que la luz es a la vez onda y partícula (dualidad).",
        },
        {
          tipo: "formula",
          math: "h \\approx 6.6\\times 10^{-34}\\ \\text{J·s}",
        },
      ],
    },
    {
      id: "ej-foton",
      tipo: "lienzo",
      etiqueta: "E = hf",
      titulo: "Ejemplo · Energía de un fotón",
      bloques: [
        {
          tipo: "destacado",
          texto: "¿Cuál es la energía de un fotón de luz cuya frecuencia es 5 × 10¹⁴ Hz? (h = 6.6 × 10⁻³⁴ J·s)",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "E = h\\,f",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Se multiplica la constante de Planck por la frecuencia. El resultado es una energía minúscula, típica de un solo fotón de luz visible.",
        },
        {
          tipo: "formula",
          math: "E = (6.6\\times 10^{-34})(5\\times 10^{14}) = 3.3\\times 10^{-19}\\ \\text{J}",
        },
      ],
    },
    {
      id: "m11",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Física Moderna · El fotón · Reactivo 1 / 2",
          enunciado: "La luz también se comporta como partículas de energía llamadas:",
          opciones: ["Fotones", "Neutrones", "Iones", "Protones"],
          correcta: 0,
          explicacion: "Los fotones son las partículas de luz; cada uno transporta una energía E = hf. Esto refleja la dualidad onda-partícula de la luz.",
        },
      ],
    },
    {
      id: "m12",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Física Moderna · El fotón · Reactivo 2 / 2",
          enunciado: "El efecto fotoeléctrico (emisión de electrones al iluminar un metal) demostró que la luz:",
          opciones: [
            "Está formada por fotones (partículas de energía)",
            "Solo se comporta como onda",
            "No transporta energía",
            "Es una onda mecánica",
          ],
          correcta: 0,
          explicacion: "Einstein explicó el efecto fotoeléctrico suponiendo que la luz llega en paquetes (fotones); cada fotón con suficiente energía arranca un electrón. Le valió el Premio Nobel.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "mod-fotoelectrico",
        },
      ],
    },
    {
      id: "radioactividad",
      tipo: "lienzo",
      etiqueta: "Núcleos inestables",
      titulo: "Radioactividad",
      bloques: [
        {
          tipo: "destacado",
          texto: "Algunos núcleos son inestables y emiten radiación al desintegrarse. Hay tres tipos: alfa (α), beta (β) y gamma (γ), con distinta carga y poder de penetración.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "mod-radioactividad",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "\\alpha,\\ \\beta,\\ \\gamma",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Alfa son núcleos de helio (poco penetrantes, los detiene una hoja de papel); beta son electrones (penetración media); gamma son ondas EM muy energéticas y penetrantes. La vida media es el tiempo en que decae la mitad de la muestra.",
        },
        {
          tipo: "formula",
          math: "\\alpha = \\text{He},\\ \\ \\beta = e^-,\\ \\ \\gamma = \\text{onda EM}",
        },
      ],
    },
    {
      id: "ej-vida-media",
      tipo: "lienzo",
      etiqueta: "Decaimiento radioactivo",
      titulo: "Ejemplo · Vida media",
      bloques: [
        {
          tipo: "destacado",
          texto: "Una muestra radioactiva de 80 g tiene una vida media de 5 años. ¿Cuánta queda después de 10 años?",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "mod-radioactividad",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "10\\ \\text{años} = 2\\ \\text{vidas medias}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "En cada vida media queda la mitad. En 10 años pasan 2 vidas medias: 80 → 40 (a los 5 años) → 20 (a los 10 años).",
        },
        {
          tipo: "formula",
          math: "80 \\to 40 \\to 20\\ \\text{g}",
        },
      ],
    },
    {
      id: "m13",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Física Moderna · Radioactividad · Reactivo 1 / 4",
          enunciado: "La radiación formada por núcleos de helio (2 protones y 2 neutrones) es la radiación:",
          opciones: ["Alfa (α)", "Beta (β)", "Gamma (γ)", "Ultravioleta"],
          correcta: 0,
          explicacion: "La radiación alfa son núcleos de helio. Es la menos penetrante: se detiene con una hoja de papel. La beta son electrones y la gamma, ondas electromagnéticas.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "mod-radioactividad",
        },
      ],
    },
    {
      id: "m14",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Física Moderna · Radioactividad · Reactivo 2 / 4",
          enunciado: "De los tres tipos de radiación, la más penetrante y de mayor energía es la:",
          opciones: ["Gamma (γ)", "Alfa (α)", "Beta (β)", "Todas igual"],
          correcta: 0,
          explicacion: "La radiación gamma es una onda electromagnética muy energética; es la más penetrante (se necesita plomo o concreto para frenarla). La alfa es la menos penetrante.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "mod-radioactividad",
        },
      ],
    },
    {
      id: "m15",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Física Moderna · Radioactividad · Reactivo 3 / 4",
          enunciado: "Una muestra radioactiva de 100 g tiene una vida media de 4 horas. ¿Cuánta queda después de 8 horas?",
          opciones: ["25 g", "50 g", "12.5 g", "0 g"],
          correcta: 0,
          explicacion: "En 8 horas pasan 2 vidas medias: 100 → 50 (a las 4 h) → 25 (a las 8 h).",
        },
      ],
    },
    {
      id: "m18",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Física Moderna · Radioactividad · Reactivo 4 / 4",
          enunciado: "Marie Curie, pionera en el estudio de la radioactividad, recibió el Premio Nobel en las áreas de:",
          opciones: ["Física y Química", "Medicina y Química", "Física y Biología", "Química y Biología"],
          correcta: 0,
          explicacion: "Marie Curie ganó el Nobel de Física (1903, radioactividad) y el de Química (1911, descubrimiento del radio y el polonio). Fue la primera persona en ganar dos Nobel.",
        },
      ],
    },
    {
      id: "nuclear-relatividad",
      tipo: "lienzo",
      etiqueta: "Masa convertida en energía",
      titulo: "Energía Nuclear y Relatividad",
      bloques: [
        {
          tipo: "formula",
          math: "E = m\\,c^2",
        },
        {
          tipo: "lista",
          items: [
            {
              math: "\\text{fisión}",
              texto: "un núcleo pesado se parte (reactores, bomba atómica)",
            },
            {
              math: "\\text{fusión}",
              texto: "núcleos ligeros se unen (la energía del Sol y las estrellas)",
            },
            {
              math: "E = mc^2",
              texto: "una masa pequeña equivale a una energía enorme",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "La ecuación de Einstein muestra que masa y energía son equivalentes. Como c es gigantesca, una masa minúscula libera muchísima energía: ese es el origen de la energía nuclear.",
        },
      ],
    },
    {
      id: "ej-emc2",
      tipo: "lienzo",
      etiqueta: "E = mc²",
      titulo: "Ejemplo · Equivalencia masa-energía",
      bloques: [
        {
          tipo: "destacado",
          texto: "¿Cuánta energía equivale a una masa de 1 g (0.001 kg)? (c = 3 × 10⁸ m/s)",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "E = m\\,c^2",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Se multiplica la masa por la velocidad de la luz al cuadrado. El número es enorme: con un gramo de materia se obtendría energía equivalente a miles de toneladas de explosivo.",
        },
        {
          tipo: "formula",
          math: "E = (0.001)(3\\times 10^8)^2 = 9\\times 10^{13}\\ \\text{J}",
        },
      ],
    },
    {
      id: "m16",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Física Moderna · Energía nuclear · Reactivo 1 / 2",
          enunciado: "La famosa ecuación E = mc² de Einstein relaciona:",
          opciones: [
            "La masa y la energía",
            "La fuerza y la aceleración",
            "El voltaje y la corriente",
            "La presión y el volumen",
          ],
          correcta: 0,
          explicacion: "E = mc² expresa que la masa y la energía son equivalentes: una pequeña masa equivale a una enorme cantidad de energía (c es la velocidad de la luz).",
        },
      ],
    },
    {
      id: "m17",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Física Moderna · Energía nuclear · Reactivo 2 / 2",
          enunciado: "La energía que produce el Sol proviene principalmente de la:",
          opciones: ["Fusión nuclear", "Fisión nuclear", "Combustión", "Electricidad"],
          correcta: 0,
          explicacion: "En el Sol, núcleos de hidrógeno se unen (fusión) formando helio y liberando enormes cantidades de energía. La fisión, en cambio, parte núcleos pesados.",
        },
      ],
    },
    {
      id: "resumen",
      tipo: "lienzo",
      etiqueta: "Física moderna y estructura de la materia",
      titulo: "Resumen",
      bloques: [
        {
          tipo: "lista",
          items: [
            {
              math: "A = Z + N",
              texto: "átomo: protones (Z), neutrones (N) y electrones alrededor",
            },
            {
              titulo: "Modelos",
              texto: "Dalton → Thomson → Rutherford → Bohr (niveles de energía)",
            },
            {
              titulo: "Isótopos",
              texto: "mismo número de protones, distinto número de neutrones",
            },
            {
              math: "E = h f",
              texto: "fotón: la luz es onda y partícula (efecto fotoeléctrico)",
            },
            {
              titulo: "Espectro EM",
              texto: "de radio (menor energía) a gamma (mayor energía)",
            },
            {
              titulo: "Radiación",
              texto: "α (núcleos de He), β (electrones), γ (la más penetrante)",
            },
            {
              math: "E = m c^2",
              texto: "masa y energía son equivalentes (energía nuclear)",
            },
            {
              titulo: "Fusión / fisión",
              texto: "el Sol fusiona núcleos; los reactores los parten (fisión)",
            },
          ],
        },
      ],
    },
  ],
};
