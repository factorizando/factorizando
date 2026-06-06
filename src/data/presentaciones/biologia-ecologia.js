// Datos de la presentación: Ecología (Biología · UNAM · Área 1)
// Subtemas: Niveles y factores · Cadenas tróficas y energía · Ciclos biogeoquímicos · Ecosistemas y biomas → Resumen.

export const PRESENTACION = {
  id: "biologia-ecologia",
  titulo: "Ecología",
  materia: "Biología",
  subtema: "Los seres vivos y su ambiente",
  slides: [

    // ── PORTADA ───────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Ecología",
      subtitulo: "Niveles y factores · Cadenas tróficas y flujo de energía · Ciclos del carbono, nitrógeno y agua · Biomas de México",
      etiqueta: "Biología · UNAM",
      svgDiagram: "eco-portada",
    },

    // ══ SUBTEMA 1 · NIVELES Y FACTORES ════════════════════════════════════════
    {
      id: "niveles",
      tipo: "concepto",
      titulo: "Niveles y factores ecológicos",
      etiqueta: "Cómo se organiza la naturaleza",
      formula: "\\text{individuo} \\to \\text{población} \\to \\text{comunidad} \\to \\text{ecosistema}",
      svgDiagram: "eco-niveles",
      items: [
        { math: "\\text{Población}", texto: "individuos de la MISMA especie en un área" },
        { math: "\\text{Comunidad}", texto: "todas las poblaciones (distintas especies) que conviven" },
        { math: "\\text{Ecosistema}", texto: "la comunidad + el medio físico (factores bióticos y abióticos)" },
        { math: "\\text{Bióticos / abióticos}", texto: "bióticos = seres vivos; abióticos = agua, luz, temperatura, suelo" }
      ],
      nota: "Un ecosistema está formado por los factores BIÓTICOS (seres vivos) y los ABIÓTICOS (luz, agua, temperatura, suelo, minerales). El equilibrio del ecosistema depende de la interacción entre ambos. El conjunto de todos los ecosistemas de la Tierra es la biosfera."
    },

    // Reactivos · Niveles y factores (4)
    {
      id: "ni1",
      tipo: "ejercicio",
      etiqueta: "Ecología · Niveles y factores · Reactivo 1 / 4",
      pregunta: "La dinámica y el posible equilibrio de un ecosistema dependen de la interacción entre los factores ________ y ________.",
      opciones: ["biótico — abiótico", "físico — químico", "abiótico — ecológico", "orgánico — mineral"],
      correcta: 0,
      explicacion: "El ecosistema funciona por la interacción entre los factores bióticos (los seres vivos) y los abióticos (el medio físico: luz, agua, suelo, temperatura).",
      pasos: [
        { pre: "Vivos + medio físico: ", math: "\\text{biótico} + \\text{abiótico}" }
      ]
    },

    {
      id: "ni2",
      tipo: "ejercicio",
      etiqueta: "Ecología · Niveles y factores · Reactivo 2 / 4",
      pregunta: "Un grupo de individuos de la MISMA especie que vive en un mismo lugar y tiempo forma una:",
      opciones: ["Población", "Comunidad", "Biosfera", "Especie nueva"],
      correcta: 0,
      explicacion: "Una población es el conjunto de individuos de la misma especie que habitan un área en un momento dado. Varias poblaciones forman una comunidad.",
      pasos: [
        { pre: "Misma especie, mismo lugar: ", math: "\\text{población}" }
      ]
    },

    {
      id: "ni3",
      tipo: "ejercicio",
      etiqueta: "Ecología · Niveles y factores · Reactivo 3 / 4",
      pregunta: "¿Cuál de los siguientes es un factor ABIÓTICO de un ecosistema?",
      opciones: ["La temperatura", "Las plantas", "Los hongos", "Las bacterias"],
      correcta: 0,
      explicacion: "Los factores abióticos son los componentes no vivos del ambiente: temperatura, luz, agua, suelo, humedad. Plantas, hongos y bacterias son factores bióticos.",
      pasos: [
        { pre: "Componente no vivo: ", math: "\\text{temperatura (abiótico)}" }
      ]
    },

    {
      id: "ni4",
      tipo: "ejercicio",
      etiqueta: "Ecología · Niveles y factores · Reactivo 4 / 4",
      pregunta: "El conjunto de poblaciones de DISTINTAS especies que conviven e interactúan en un área se denomina:",
      opciones: ["Comunidad", "Población", "Individuo", "Bioma"],
      correcta: 0,
      explicacion: "La comunidad (o biocenosis) es el conjunto de todas las poblaciones de diferentes especies que habitan e interactúan en un mismo lugar.",
      pasos: [
        { pre: "Varias especies juntas: ", math: "\\text{comunidad}" }
      ]
    },

    // ══ SUBTEMA 2 · CADENAS TRÓFICAS Y ENERGÍA ════════════════════════════════
    {
      id: "cadena",
      tipo: "criterio_detalle",
      titulo: "Cadenas tróficas y flujo de energía",
      etiqueta: "Quién come a quién",
      svgDiagram: "eco-piramide",
      enunciado: "En la cadena trófica la energía fluye en un solo sentido: los PRODUCTORES (plantas) la captan del Sol por fotosíntesis; los CONSUMIDORES (herbívoros, carnívoros) se alimentan unos de otros; y los DESCOMPONEDORES (hongos, bacterias) reciclan la materia. En cada nivel solo pasa ~10 % de la energía; el resto se pierde como calor.",
      math: "\\text{productor} \\to \\text{1.°} \\to \\text{2.°} \\to \\text{3.°}",
      por_que: "Como solo el 10 % de la energía pasa de un nivel al siguiente (regla del 10 %), las cadenas tienen pocos eslabones y hay menos depredadores que presas. La energía fluye en un solo sentido (no se recicla); la materia, en cambio, sí se recicla gracias a los descomponedores.",
      math_razon: "\\text{cada nivel} \\approx 10\\%\\ \\text{de la energía del anterior}"
    },

    // Reactivos · Cadenas tróficas (4)
    {
      id: "ca1",
      tipo: "ejercicio",
      svgDiagram: "eco-piramide",
      etiqueta: "Ecología · Cadenas tróficas · Reactivo 1 / 4",
      pregunta: "En una cadena alimentaria, las plantas verdes que producen su propio alimento por fotosíntesis son los:",
      opciones: ["Productores", "Consumidores primarios", "Descomponedores", "Consumidores secundarios"],
      correcta: 0,
      explicacion: "Los productores (plantas, algas) fabrican su alimento por fotosíntesis y son la base de toda cadena trófica: captan la energía del Sol y la introducen al ecosistema.",
      pasos: [
        { pre: "Base de la cadena: ", math: "\\text{productores (autótrofos)}" }
      ]
    },

    {
      id: "ca2",
      tipo: "ejercicio",
      etiqueta: "Ecología · Cadenas tróficas · Reactivo 2 / 4",
      pregunta: "Un animal herbívoro que se alimenta directamente de las plantas ocupa el nivel de:",
      opciones: ["Consumidor primario", "Productor", "Consumidor terciario", "Descomponedor"],
      correcta: 0,
      explicacion: "El consumidor primario es el herbívoro: se alimenta de los productores (plantas). Un carnívoro que come al herbívoro sería consumidor secundario.",
      pasos: [
        { pre: "Come plantas: ", math: "\\text{consumidor primario (herbívoro)}" }
      ]
    },

    {
      id: "ca3",
      tipo: "ejercicio",
      svgDiagram: "eco-piramide",
      etiqueta: "Ecología · Cadenas tróficas · Reactivo 3 / 4",
      pregunta: "Aproximadamente, ¿qué porcentaje de la energía pasa de un nivel trófico al siguiente?",
      opciones: ["10 %", "50 %", "90 %", "100 %"],
      correcta: 0,
      explicacion: "Según la regla del 10 %, solo cerca del 10 % de la energía de un nivel se transfiere al siguiente; el resto (≈90 %) se pierde como calor en la respiración y otras actividades.",
      pasos: [
        { pre: "Regla del 10 %: ", math: "\\approx 10\\%\\ \\text{al siguiente nivel}" }
      ]
    },

    {
      id: "ca4",
      tipo: "ejercicio",
      etiqueta: "Ecología · Cadenas tróficas · Reactivo 4 / 4",
      pregunta: "Los hongos y las bacterias que degradan los restos de seres vivos y reciclan la materia son:",
      opciones: ["Descomponedores", "Productores", "Consumidores primarios", "Herbívoros"],
      correcta: 0,
      explicacion: "Los descomponedores (hongos y bacterias) degradan la materia orgánica muerta y devuelven los nutrientes al suelo, cerrando el ciclo de la materia.",
      pasos: [
        { pre: "Reciclan la materia: ", math: "\\text{descomponedores}" }
      ]
    },

    // ══ SUBTEMA 3 · CICLOS BIOGEOQUÍMICOS ═════════════════════════════════════
    {
      id: "ciclos",
      tipo: "concepto",
      titulo: "Ciclos biogeoquímicos",
      etiqueta: "La materia se recicla",
      formula: "\\text{materia: se recicla} \\;|\\; \\text{energía: fluye y se pierde}",
      svgDiagram: "eco-ciclo-carbono",
      items: [
        { math: "\\text{Carbono}", texto: "circula por fotosíntesis (lo capta) y respiración/combustión (lo libera como CO₂)" },
        { math: "\\text{Nitrógeno}", texto: "bacterias lo fijan del aire al suelo; pasa a plantas y animales y regresa" },
        { math: "\\text{Agua}", texto: "evaporación → condensación → precipitación → escurrimiento (ciclo hidrológico)" },
        { math: "\\text{Idea clave}", texto: "la materia se recicla una y otra vez; la energía no (fluye en un sentido)" }
      ],
      nota: "Los ciclos biogeoquímicos hacen que los elementos (C, N, O, agua) circulen entre los seres vivos y el ambiente y se reutilicen. A diferencia de la energía —que entra como luz y se pierde como calor—, la materia es finita y por eso debe reciclarse constantemente."
    },

    // Reactivos · Ciclos (4)
    {
      id: "ci1",
      tipo: "ejercicio",
      svgDiagram: "eco-ciclo-carbono",
      etiqueta: "Ecología · Ciclos · Reactivo 1 / 4",
      pregunta: "En el ciclo del carbono, las plantas RETIRAN CO₂ de la atmósfera mediante la:",
      opciones: ["Fotosíntesis", "Respiración", "Combustión", "Evaporación"],
      correcta: 0,
      explicacion: "La fotosíntesis fija el CO₂ atmosférico para formar glucosa. La respiración y la combustión hacen lo contrario: liberan CO₂ a la atmósfera.",
      pasos: [
        { pre: "Captura CO₂: ", math: "\\text{fotosíntesis}" }
      ]
    },

    {
      id: "ci2",
      tipo: "ejercicio",
      etiqueta: "Ecología · Ciclos · Reactivo 2 / 4",
      pregunta: "Respecto a la energía y la materia en un ecosistema, lo correcto es que:",
      opciones: ["La materia se recicla y la energía fluye en un solo sentido", "Ambas se reciclan", "Ambas fluyen sin reciclarse", "La energía se recicla y la materia se pierde"],
      correcta: 0,
      explicacion: "La materia (C, N, agua) circula en ciclos y se reutiliza; la energía entra como luz solar y se va perdiendo como calor en cada nivel, sin reciclarse.",
      pasos: [
        { pre: "Clave ecológica: ", math: "\\text{materia: ciclo} \\;|\\; \\text{energía: flujo}" }
      ]
    },

    {
      id: "ci3",
      tipo: "ejercicio",
      etiqueta: "Ecología · Ciclos · Reactivo 3 / 4",
      pregunta: "En el ciclo del nitrógeno, los organismos que toman el N₂ del aire y lo convierten en formas aprovechables para las plantas son:",
      opciones: ["Bacterias fijadoras de nitrógeno", "Los hongos del suelo", "Los herbívoros", "Las algas marinas"],
      correcta: 0,
      explicacion: "Las bacterias fijadoras de nitrógeno (muchas viven en las raíces de las leguminosas) transforman el N₂ atmosférico en compuestos que las plantas pueden absorber.",
      pasos: [
        { pre: "Fijan el N₂ del aire: ", math: "\\text{bacterias fijadoras}" }
      ]
    },

    {
      id: "ci4",
      tipo: "ejercicio",
      etiqueta: "Ecología · Ciclos · Reactivo 4 / 4",
      pregunta: "En el ciclo del agua, el paso del agua líquida a vapor por acción del calor solar se llama:",
      opciones: ["Evaporación", "Condensación", "Precipitación", "Infiltración"],
      correcta: 0,
      explicacion: "La evaporación convierte el agua líquida en vapor gracias al calor del Sol. Luego el vapor se condensa en nubes y cae como precipitación.",
      pasos: [
        { pre: "Líquido → vapor: ", math: "\\text{evaporación}" }
      ]
    },

    // ══ SUBTEMA 4 · ECOSISTEMAS Y BIOMAS ══════════════════════════════════════
    {
      id: "biomas",
      tipo: "criterio_detalle",
      titulo: "Ecosistemas y biomas de México",
      etiqueta: "La biodiversidad del país",
      svgDiagram: "eco-biomas",
      enunciado: "Un BIOMA es un gran ecosistema definido por su clima y su vegetación. México es megadiverso: tiene selvas (cálidas y húmedas, muy productivas), bosques de coníferas y encinos (zonas templadas y frías), desiertos (matorral xerófilo) y manglares (costas, plantas resistentes a la sal y alta productividad).",
      math: "\\text{clima} + \\text{vegetación} = \\text{bioma}",
      por_que: "Cada bioma se reconoce por su clima y vegetación dominante: las selvas son cálido-húmedas; los manglares crecen en costas con agua salobre y plantas tolerantes a la salinidad; los bosques de coníferas, en climas templados y fríos. La pérdida de estos ecosistemas amenaza la biodiversidad.",
      math_razon: "\\text{México: país megadiverso}"
    },

    // Reactivos · Biomas (4)
    {
      id: "bi1",
      tipo: "ejercicio",
      svgDiagram: "eco-biomas",
      etiqueta: "Ecología · Biomas · Reactivo 1 / 4",
      pregunta: "¿Qué ecosistema se desarrolla en los trópicos húmedos, en las costas, formado por plantas resistentes a la salinidad y con alta productividad biótica?",
      opciones: ["Manglares", "Bosques de encino", "Selvas de montaña", "Bosques de coníferas"],
      correcta: 0,
      explicacion: "Los manglares crecen en las costas tropicales, con plantas (mangles) adaptadas al agua salada; son muy productivos y sirven de refugio y criadero para muchas especies.",
      pasos: [
        { pre: "Costa, salinidad, alta productividad: ", math: "\\text{manglares}" }
      ]
    },

    {
      id: "bi2",
      tipo: "ejercicio",
      etiqueta: "Ecología · Biomas · Reactivo 2 / 4",
      pregunta: "Un gran ecosistema caracterizado por un clima y una vegetación dominante (como una selva o un desierto) se denomina:",
      opciones: ["Bioma", "Población", "Nicho", "Cadena trófica"],
      correcta: 0,
      explicacion: "Un bioma es una gran región ecológica definida por su clima y su tipo de vegetación característica: selva, desierto, bosque templado, tundra, etc.",
      pasos: [
        { pre: "Clima + vegetación: ", math: "\\text{bioma}" }
      ]
    },

    {
      id: "bi3",
      tipo: "ejercicio",
      etiqueta: "Ecología · Biomas · Reactivo 3 / 4",
      pregunta: "El bioma cálido y húmedo, con la mayor diversidad de plantas y animales, abundante en el sureste de México, es:",
      opciones: ["La selva", "El desierto", "La tundra", "El bosque de coníferas"],
      correcta: 0,
      explicacion: "Las selvas tropicales son cálidas y húmedas y albergan la mayor biodiversidad. En México se encuentran sobre todo en el sureste (Chiapas, península de Yucatán).",
      pasos: [
        { pre: "Cálido-húmedo, máxima diversidad: ", math: "\\text{selva}" }
      ]
    },

    {
      id: "bi4",
      tipo: "ejercicio",
      etiqueta: "Ecología · Biomas · Reactivo 4 / 4",
      pregunta: "Que México sea uno de los países con mayor variedad de especies y ecosistemas del mundo significa que es un país:",
      opciones: ["Megadiverso", "Endémico", "Desértico", "Homogéneo"],
      correcta: 0,
      explicacion: "México es un país megadiverso: por su clima, relieve y posición geográfica alberga una enorme variedad de especies y ecosistemas; está entre los cinco más biodiversos del planeta.",
      pasos: [
        { pre: "Gran variedad de especies: ", math: "\\text{megadiverso}" }
      ]
    },

    // ── RESUMEN ───────────────────────────────────────────────────────────────
    {
      id: "resumen",
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Ideas clave de ecología",
      puntos: [
        { math: "\\text{Niveles}", texto: "individuo → población (misma especie) → comunidad → ecosistema → biosfera" },
        { math: "\\text{Factores}", texto: "bióticos (seres vivos) + abióticos (luz, agua, temperatura, suelo)" },
        { math: "\\text{Cadena trófica}", texto: "productores → consumidores → descomponedores; energía fluye (regla del 10 %)" },
        { math: "\\text{Materia} \\neq \\text{energía}", texto: "la materia se recicla (ciclos C, N, agua); la energía fluye y se pierde" },
        { math: "\\text{Biomas}", texto: "clima + vegetación: selvas, manglares (costa, salinidad), bosques, desiertos" },
        { titulo: "México", texto: "país megadiverso: enorme variedad de especies y ecosistemas" }
      ]
    }

  ]
};
