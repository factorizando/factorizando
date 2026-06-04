// Datos de la presentación: Física Moderna y Estructura de la Materia (Física · UNAM)
// Estructura por subtema: Teoría → Ejemplos resueltos → Reactivos tipo UNAM.
// Subtemas: El átomo · Modelos · Número atómico · Espectro · Fotón · Radioactividad · Energía nuclear → Resumen.

export const PRESENTACION = {
  id: "fisica-moderna",
  titulo: "Física Moderna",
  materia: "Física",
  subtema: "Estructura de la materia",
  slides: [

    // ── PORTADA ───────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Física Moderna",
      subtitulo: "El átomo, modelos atómicos, espectro, fotón, radioactividad y E = mc²",
      etiqueta: "Física · UNAM",
      svgDiagram: "mod-portada",
    },

    // ══ SUBTEMA 1 · EL ÁTOMO ══════════════════════════════════════════════════
    {
      id: "atomo",
      tipo: "concepto",
      titulo: "El Átomo",
      etiqueta: "Las partículas de la materia",
      formula: "A = Z + N",
      svgDiagram: "mod-atomo",
      items: [
        { math: "p^+", texto: "protón: carga positiva, en el núcleo" },
        { math: "n^0", texto: "neutrón: sin carga, en el núcleo" },
        { math: "e^-", texto: "electrón: carga negativa, gira alrededor del núcleo" },
        { math: "\\text{núcleo}", texto: "pequeño y muy denso: concentra casi toda la masa" }
      ],
      nota: "El átomo es casi todo espacio vacío: el núcleo (protones + neutrones) es diminuto pero contiene casi toda la masa, y los electrones orbitan a gran distancia relativa."
    },

    // Ejemplo · El átomo
    {
      id: "ej-atomo",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Cargas de las partículas",
      etiqueta: "Protón, neutrón y electrón",
      svgDiagram: "mod-atomo",
      enunciado: "¿Dónde se ubica cada partícula del átomo y qué carga tiene: protón, neutrón y electrón?",
      math: "p^+,\\ n^0,\\ e^-",
      por_que: "Protones (carga positiva) y neutrones (sin carga) están en el núcleo, que concentra casi toda la masa. Los electrones (carga negativa) giran alrededor del núcleo. En un átomo neutro hay tantos electrones como protones.",
      math_razon: "\\text{núcleo: } p^+ + n^0, \\qquad \\text{corteza: } e^-"
    },

    // Reactivos · El átomo
    {
      id: "m1",
      tipo: "ejercicio",
      svgDiagram: "mod-atomo",
      etiqueta: "Física Moderna · El átomo · Reactivo 1 / 3",
      pregunta: "La parte central del átomo, donde se concentra casi toda su masa, es el:",
      opciones: ["Núcleo", "Electrón", "Orbital", "Protón aislado"],
      correcta: 0,
      explicacion: "El núcleo contiene protones y neutrones, y en él se concentra casi toda la masa del átomo, aunque ocupe un espacio diminuto.",
      pasos: [
        { pre: "Centro denso: ", math: "\\text{núcleo} = p^+ + n^0" }
      ]
    },

    {
      id: "m2",
      tipo: "ejercicio",
      etiqueta: "Física Moderna · El átomo · Reactivo 2 / 3",
      pregunta: "El protón tiene carga eléctrica:",
      opciones: ["Positiva", "Negativa", "Neutra", "Variable"],
      correcta: 0,
      explicacion: "El protón tiene carga positiva; el electrón, negativa; el neutrón no tiene carga.",
      pasos: [
        { pre: "Cargas: ", math: "p^+ > 0,\\ e^- < 0,\\ n^0 = 0" }
      ]
    },

    {
      id: "m3",
      tipo: "ejercicio",
      svgDiagram: "mod-atomo",
      etiqueta: "Física Moderna · El átomo · Reactivo 3 / 3",
      pregunta: "Los electrones de un átomo se encuentran:",
      opciones: ["Girando alrededor del núcleo", "Dentro del núcleo", "Solo en los protones", "Fuera del átomo"],
      correcta: 0,
      explicacion: "Los electrones orbitan alrededor del núcleo, en niveles de energía. El núcleo solo contiene protones y neutrones.",
      pasos: [
        { pre: "Corteza electrónica: ", math: "e^-\\ \\text{alrededor del núcleo}" }
      ]
    },

    // ══ SUBTEMA 2 · MODELOS ATÓMICOS ══════════════════════════════════════════
    {
      id: "modelos",
      tipo: "concepto",
      titulo: "Modelos Atómicos",
      etiqueta: "La idea del átomo fue cambiando",
      formula: "\\text{Dalton} \\to \\text{Thomson} \\to \\text{Rutherford} \\to \\text{Bohr}",
      items: [
        { math: "\\text{Dalton}", texto: "esfera maciza e indivisible" },
        { math: "\\text{Thomson}", texto: "«budín de pasas»: cargas positivas y negativas mezcladas" },
        { math: "\\text{Rutherford}", texto: "núcleo central positivo con electrones alrededor" },
        { math: "\\text{Bohr}", texto: "electrones en órbitas o niveles de energía definidos" }
      ],
      nota: "El experimento de la lámina de oro de Rutherford reveló que el átomo tiene un núcleo pequeño y denso. Bohr añadió que los electrones ocupan niveles de energía específicos."
    },

    // Ejemplo · Modelos atómicos
    {
      id: "ej-modelos",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Evolución del modelo atómico",
      etiqueta: "De Thomson a Rutherford",
      enunciado: "¿Qué aportó el experimento de la lámina de oro de Rutherford respecto al modelo de Thomson?",
      math: "\\text{Thomson} \\to \\text{Rutherford}",
      por_que: "Thomson imaginaba el átomo como un «budín de pasas» con la carga repartida. Al disparar partículas alfa a una lámina de oro, Rutherford vio que algunas rebotaban: dedujo que la carga positiva y casi toda la masa estaban concentradas en un núcleo pequeño y denso.",
      math_razon: "\\text{carga repartida} \\to \\text{núcleo central}"
    },

    // Reactivos · Modelos atómicos
    {
      id: "m7",
      tipo: "ejercicio",
      etiqueta: "Física Moderna · Modelos atómicos · Reactivo 1 / 2",
      pregunta: "El modelo atómico que propone electrones girando en órbitas o niveles de energía definidos es el de:",
      opciones: ["Bohr", "Dalton", "Thomson", "Demócrito"],
      correcta: 0,
      explicacion: "Bohr propuso que los electrones ocupan órbitas con energías específicas. Dalton imaginaba una esfera maciza y Thomson el «budín de pasas».",
      pasos: [
        { pre: "Niveles de energía: ", math: "\\text{modelo de Bohr}" }
      ]
    },

    {
      id: "m8",
      tipo: "ejercicio",
      etiqueta: "Física Moderna · Modelos atómicos · Reactivo 2 / 2",
      pregunta: "El experimento de la lámina de oro, que reveló la existencia de un núcleo pequeño y denso, fue realizado por:",
      opciones: ["Rutherford", "Dalton", "Newton", "Bohr"],
      correcta: 0,
      explicacion: "Rutherford, al bombardear una lámina de oro con partículas alfa, dedujo que la carga positiva y la masa estaban concentradas en un núcleo diminuto.",
      pasos: [
        { pre: "Lámina de oro: ", math: "\\text{Rutherford} \\to \\text{núcleo}" }
      ]
    },

    // ══ SUBTEMA 3 · NÚMERO ATÓMICO Y MÁSICO ═══════════════════════════════════
    {
      id: "numero-atomico",
      tipo: "criterio_detalle",
      titulo: "Número Atómico y Másico",
      etiqueta: "Identificar un átomo",
      enunciado: "El número atómico (Z) es la cantidad de protones e identifica al elemento. El número másico (A) es la suma de protones y neutrones. Los isótopos varían en neutrones.",
      math: "Z = p^+, \\qquad A = Z + N",
      por_que: "En un átomo neutro, el número de electrones es igual al de protones. Los neutrones se obtienen restando: N = A − Z. Dos isótopos tienen el mismo Z pero distinto A.",
      math_razon: "N = A - Z, \\qquad e^- = Z \\ (\\text{si es neutro})"
    },

    // Ejemplo · Número atómico y másico
    {
      id: "ej-particulas",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Partículas del átomo",
      etiqueta: "Protones, neutrones y electrones",
      svgDiagram: "mod-atomo",
      enunciado: "Un átomo neutro tiene número atómico Z = 11 (sodio) y número másico A = 23. ¿Cuántos protones, neutrones y electrones tiene?",
      math: "N = A - Z",
      por_que: "El número atómico da los protones (11). Los neutrones son A − Z = 23 − 11 = 12. Al ser neutro, los electrones igualan a los protones (11).",
      math_razon: "p^+ = 11, \\quad N = 23 - 11 = 12, \\quad e^- = 11"
    },

    // Reactivos · Número atómico y másico
    {
      id: "m4",
      tipo: "ejercicio",
      etiqueta: "Física Moderna · Número atómico y másico · Reactivo 1 / 3",
      pregunta: "El número atómico (Z) de un elemento indica la cantidad de:",
      opciones: ["Protones", "Neutrones", "Electrones de valencia", "Niveles de energía"],
      correcta: 0,
      explicacion: "El número atómico es el número de protones del núcleo, y es lo que identifica a cada elemento.",
      pasos: [
        { pre: "Definición: ", math: "Z = p^+" }
      ]
    },

    {
      id: "m5",
      tipo: "ejercicio",
      etiqueta: "Física Moderna · Número atómico y másico · Reactivo 2 / 3",
      pregunta: "Un átomo tiene número atómico Z = 8 y número másico A = 16. ¿Cuántos neutrones tiene?",
      opciones: ["8", "16", "24", "0"],
      correcta: 0,
      explicacion: "N = A − Z = 16 − 8 = 8 neutrones.",
      pasos: [
        { pre: "Neutrones: ", math: "N = A - Z = 16 - 8 = 8" }
      ]
    },

    {
      id: "m6",
      tipo: "ejercicio",
      etiqueta: "Física Moderna · Número atómico y másico · Reactivo 3 / 3",
      pregunta: "Dos isótopos de un mismo elemento tienen igual número de protones, pero distinto número de:",
      opciones: ["Neutrones", "Electrones", "Protones", "Cargas positivas"],
      correcta: 0,
      explicacion: "Los isótopos comparten el número de protones (mismo elemento) pero difieren en los neutrones, así que tienen distinto número másico.",
      pasos: [
        { pre: "Mismo Z, distinto A: ", math: "\\Delta N \\Rightarrow \\text{isótopos}" }
      ]
    },

    // ══ SUBTEMA 4 · ESPECTRO ELECTROMAGNÉTICO ═════════════════════════════════
    {
      id: "espectro",
      tipo: "concepto",
      titulo: "Espectro Electromagnético",
      etiqueta: "Toda la luz, visible o no",
      formula: "c = \\lambda\\,f, \\qquad E = h\\,f",
      svgDiagram: "mod-espectro",
      items: [
        { math: "\\text{radio} \\to \\gamma", texto: "de menor a mayor frecuencia y energía" },
        { math: "\\text{visible}", texto: "es solo una franja pequeña del espectro" },
        { math: "f \\uparrow \\Rightarrow E \\uparrow", texto: "a mayor frecuencia, mayor energía del fotón" }
      ],
      nota: "Todas son ondas electromagnéticas que viajan a la velocidad de la luz; se diferencian por su frecuencia. Los rayos gamma son los más energéticos; las ondas de radio, los menos."
    },

    // Ejemplo · Espectro electromagnético
    {
      id: "ej-espectro",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Ordenar por energía",
      etiqueta: "A mayor frecuencia, mayor energía",
      svgDiagram: "mod-espectro",
      enunciado: "Ordena de menor a mayor energía estas radiaciones: rayos X, ondas de radio y luz visible.",
      math: "f \\uparrow \\;\\Rightarrow\\; E \\uparrow",
      por_que: "La energía de la radiación crece con su frecuencia (E = hf). Las ondas de radio son de baja frecuencia (poca energía), la luz visible va en medio y los rayos X tienen alta frecuencia (mucha energía).",
      math_razon: "\\text{radio} < \\text{visible} < \\text{rayos X}"
    },

    // Reactivos · Espectro electromagnético
    {
      id: "m9",
      tipo: "ejercicio",
      svgDiagram: "mod-espectro",
      etiqueta: "Física Moderna · Espectro electromagnético · Reactivo 1 / 2",
      pregunta: "De las siguientes ondas electromagnéticas, ¿cuál tiene mayor frecuencia y energía?",
      opciones: ["Rayos gamma", "Ondas de radio", "Microondas", "Luz infrarroja"],
      correcta: 0,
      explicacion: "Los rayos gamma están en el extremo de mayor frecuencia del espectro, por lo que son los más energéticos. Las ondas de radio son las de menor energía.",
      pasos: [
        { pre: "Mayor f ⇒ mayor E: ", math: "\\gamma\\ \\text{(máxima energía)}" }
      ]
    },

    {
      id: "m10",
      tipo: "ejercicio",
      svgDiagram: "mod-espectro",
      etiqueta: "Física Moderna · Espectro electromagnético · Reactivo 2 / 2",
      pregunta: "La luz visible que percibe el ojo humano es:",
      opciones: ["Una pequeña parte del espectro electromagnético", "Todo el espectro electromagnético", "Una onda mecánica", "Independiente de la frecuencia"],
      correcta: 0,
      explicacion: "El espectro electromagnético es enorme (radio, microondas, infrarrojo, visible, ultravioleta, rayos X, gamma); la luz visible es solo una franja muy estrecha.",
      pasos: [
        { pre: "Franja estrecha: ", math: "\\text{visible} \\subset \\text{espectro EM}" }
      ]
    },

    // ══ SUBTEMA 5 · EL FOTÓN ══════════════════════════════════════════════════
    {
      id: "foton",
      tipo: "criterio_detalle",
      titulo: "La Luz como Partícula",
      etiqueta: "El fotón y el efecto fotoeléctrico",
      svgDiagram: "mod-fotoelectrico",
      enunciado: "La luz también se comporta como partículas de energía llamadas fotones. Al iluminar un metal con la frecuencia adecuada, se arrancan electrones: es el efecto fotoeléctrico.",
      math: "E = h\\,f",
      por_que: "Einstein explicó que cada fotón lleva una energía proporcional a su frecuencia (h es la constante de Planck). Esto probó que la luz es a la vez onda y partícula (dualidad).",
      math_razon: "h \\approx 6.6\\times 10^{-34}\\ \\text{J·s}"
    },

    // Ejemplo · El fotón
    {
      id: "ej-foton",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Energía de un fotón",
      etiqueta: "E = hf",
      enunciado: "¿Cuál es la energía de un fotón de luz cuya frecuencia es 5 × 10¹⁴ Hz? (h = 6.6 × 10⁻³⁴ J·s)",
      math: "E = h\\,f",
      por_que: "Se multiplica la constante de Planck por la frecuencia. El resultado es una energía minúscula, típica de un solo fotón de luz visible.",
      math_razon: "E = (6.6\\times 10^{-34})(5\\times 10^{14}) = 3.3\\times 10^{-19}\\ \\text{J}"
    },

    // Reactivos · El fotón
    {
      id: "m11",
      tipo: "ejercicio",
      etiqueta: "Física Moderna · El fotón · Reactivo 1 / 2",
      pregunta: "La luz también se comporta como partículas de energía llamadas:",
      opciones: ["Fotones", "Neutrones", "Iones", "Protones"],
      correcta: 0,
      explicacion: "Los fotones son las partículas de luz; cada uno transporta una energía E = hf. Esto refleja la dualidad onda-partícula de la luz.",
      pasos: [
        { pre: "Partícula de luz: ", math: "E = h f" }
      ]
    },

    {
      id: "m12",
      tipo: "ejercicio",
      svgDiagram: "mod-fotoelectrico",
      etiqueta: "Física Moderna · El fotón · Reactivo 2 / 2",
      pregunta: "El efecto fotoeléctrico (emisión de electrones al iluminar un metal) demostró que la luz:",
      opciones: ["Está formada por fotones (partículas de energía)", "Solo se comporta como onda", "No transporta energía", "Es una onda mecánica"],
      correcta: 0,
      explicacion: "Einstein explicó el efecto fotoeléctrico suponiendo que la luz llega en paquetes (fotones); cada fotón con suficiente energía arranca un electrón. Le valió el Premio Nobel.",
      pasos: [
        { pre: "Luz en paquetes: ", math: "E_{fotón} = h f" }
      ]
    },

    // ══ SUBTEMA 6 · RADIOACTIVIDAD ════════════════════════════════════════════
    {
      id: "radioactividad",
      tipo: "criterio_detalle",
      titulo: "Radioactividad",
      etiqueta: "Núcleos inestables",
      svgDiagram: "mod-radioactividad",
      enunciado: "Algunos núcleos son inestables y emiten radiación al desintegrarse. Hay tres tipos: alfa (α), beta (β) y gamma (γ), con distinta carga y poder de penetración.",
      math: "\\alpha,\\ \\beta,\\ \\gamma",
      por_que: "Alfa son núcleos de helio (poco penetrantes, los detiene una hoja de papel); beta son electrones (penetración media); gamma son ondas EM muy energéticas y penetrantes. La vida media es el tiempo en que decae la mitad de la muestra.",
      math_razon: "\\alpha = \\text{He},\\ \\ \\beta = e^-,\\ \\ \\gamma = \\text{onda EM}"
    },

    // Ejemplo · Radioactividad
    {
      id: "ej-vida-media",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Vida media",
      etiqueta: "Decaimiento radioactivo",
      svgDiagram: "mod-radioactividad",
      enunciado: "Una muestra radioactiva de 80 g tiene una vida media de 5 años. ¿Cuánta queda después de 10 años?",
      math: "10\\ \\text{años} = 2\\ \\text{vidas medias}",
      por_que: "En cada vida media queda la mitad. En 10 años pasan 2 vidas medias: 80 → 40 (a los 5 años) → 20 (a los 10 años).",
      math_razon: "80 \\to 40 \\to 20\\ \\text{g}"
    },

    // Reactivos · Radioactividad
    {
      id: "m13",
      tipo: "ejercicio",
      svgDiagram: "mod-radioactividad",
      etiqueta: "Física Moderna · Radioactividad · Reactivo 1 / 4",
      pregunta: "La radiación formada por núcleos de helio (2 protones y 2 neutrones) es la radiación:",
      opciones: ["Alfa (α)", "Beta (β)", "Gamma (γ)", "Ultravioleta"],
      correcta: 0,
      explicacion: "La radiación alfa son núcleos de helio. Es la menos penetrante: se detiene con una hoja de papel. La beta son electrones y la gamma, ondas electromagnéticas.",
      pasos: [
        { pre: "Núcleo de helio: ", math: "\\alpha = {}^{4}_{2}\\text{He}" }
      ]
    },

    {
      id: "m14",
      tipo: "ejercicio",
      svgDiagram: "mod-radioactividad",
      etiqueta: "Física Moderna · Radioactividad · Reactivo 2 / 4",
      pregunta: "De los tres tipos de radiación, la más penetrante y de mayor energía es la:",
      opciones: ["Gamma (γ)", "Alfa (α)", "Beta (β)", "Todas igual"],
      correcta: 0,
      explicacion: "La radiación gamma es una onda electromagnética muy energética; es la más penetrante (se necesita plomo o concreto para frenarla). La alfa es la menos penetrante.",
      pasos: [
        { pre: "Mayor penetración: ", math: "\\gamma > \\beta > \\alpha" }
      ]
    },

    {
      id: "m15",
      tipo: "ejercicio",
      etiqueta: "Física Moderna · Radioactividad · Reactivo 3 / 4",
      pregunta: "Una muestra radioactiva de 100 g tiene una vida media de 4 horas. ¿Cuánta queda después de 8 horas?",
      opciones: ["25 g", "50 g", "12.5 g", "0 g"],
      correcta: 0,
      explicacion: "En 8 horas pasan 2 vidas medias: 100 → 50 (a las 4 h) → 25 (a las 8 h).",
      pasos: [
        { pre: "Dos vidas medias: ", math: "100 \\to 50 \\to 25\\ \\text{g}" }
      ]
    },

    {
      id: "m18",
      tipo: "ejercicio",
      etiqueta: "Física Moderna · Radioactividad · Reactivo 4 / 4",
      pregunta: "Marie Curie, pionera en el estudio de la radioactividad, recibió el Premio Nobel en las áreas de:",
      opciones: ["Física y Química", "Medicina y Química", "Física y Biología", "Química y Biología"],
      correcta: 0,
      explicacion: "Marie Curie ganó el Nobel de Física (1903, radioactividad) y el de Química (1911, descubrimiento del radio y el polonio). Fue la primera persona en ganar dos Nobel.",
      pasos: [
        { pre: "Dos Nobel: ", math: "\\text{Física + Química}" }
      ]
    },

    // ══ SUBTEMA 7 · ENERGÍA NUCLEAR Y RELATIVIDAD ═════════════════════════════
    {
      id: "nuclear-relatividad",
      tipo: "concepto",
      titulo: "Energía Nuclear y Relatividad",
      etiqueta: "Masa convertida en energía",
      formula: "E = m\\,c^2",
      items: [
        { math: "\\text{fisión}", texto: "un núcleo pesado se parte (reactores, bomba atómica)" },
        { math: "\\text{fusión}", texto: "núcleos ligeros se unen (la energía del Sol y las estrellas)" },
        { math: "E = mc^2", texto: "una masa pequeña equivale a una energía enorme" }
      ],
      nota: "La ecuación de Einstein muestra que masa y energía son equivalentes. Como c es gigantesca, una masa minúscula libera muchísima energía: ese es el origen de la energía nuclear."
    },

    // Ejemplo · Energía nuclear y relatividad
    {
      id: "ej-emc2",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Equivalencia masa-energía",
      etiqueta: "E = mc²",
      enunciado: "¿Cuánta energía equivale a una masa de 1 g (0.001 kg)? (c = 3 × 10⁸ m/s)",
      math: "E = m\\,c^2",
      por_que: "Se multiplica la masa por la velocidad de la luz al cuadrado. El número es enorme: con un gramo de materia se obtendría energía equivalente a miles de toneladas de explosivo.",
      math_razon: "E = (0.001)(3\\times 10^8)^2 = 9\\times 10^{13}\\ \\text{J}"
    },

    // Reactivos · Energía nuclear y relatividad
    {
      id: "m16",
      tipo: "ejercicio",
      etiqueta: "Física Moderna · Energía nuclear · Reactivo 1 / 2",
      pregunta: "La famosa ecuación E = mc² de Einstein relaciona:",
      opciones: ["La masa y la energía", "La fuerza y la aceleración", "El voltaje y la corriente", "La presión y el volumen"],
      correcta: 0,
      explicacion: "E = mc² expresa que la masa y la energía son equivalentes: una pequeña masa equivale a una enorme cantidad de energía (c es la velocidad de la luz).",
      pasos: [
        { pre: "Equivalencia: ", math: "E = m c^2" }
      ]
    },

    {
      id: "m17",
      tipo: "ejercicio",
      etiqueta: "Física Moderna · Energía nuclear · Reactivo 2 / 2",
      pregunta: "La energía que produce el Sol proviene principalmente de la:",
      opciones: ["Fusión nuclear", "Fisión nuclear", "Combustión", "Electricidad"],
      correcta: 0,
      explicacion: "En el Sol, núcleos de hidrógeno se unen (fusión) formando helio y liberando enormes cantidades de energía. La fisión, en cambio, parte núcleos pesados.",
      pasos: [
        { pre: "Núcleos que se unen: ", math: "\\text{fusión}" }
      ]
    },

    // ── RESUMEN ───────────────────────────────────────────────────────────────
    {
      id: "resumen",
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Física moderna y estructura de la materia",
      puntos: [
        { math: "A = Z + N", texto: "átomo: protones (Z), neutrones (N) y electrones alrededor" },
        { titulo: "Modelos", texto: "Dalton → Thomson → Rutherford → Bohr (niveles de energía)" },
        { titulo: "Isótopos", texto: "mismo número de protones, distinto número de neutrones" },
        { math: "E = h f", texto: "fotón: la luz es onda y partícula (efecto fotoeléctrico)" },
        { titulo: "Espectro EM", texto: "de radio (menor energía) a gamma (mayor energía)" },
        { titulo: "Radiación", texto: "α (núcleos de He), β (electrones), γ (la más penetrante)" },
        { math: "E = m c^2", texto: "masa y energía son equivalentes (energía nuclear)" },
        { titulo: "Fusión / fisión", texto: "el Sol fusiona núcleos; los reactores los parten (fisión)" }
      ]
    }

  ]
};
