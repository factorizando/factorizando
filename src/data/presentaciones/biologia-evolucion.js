// Datos de la presentación: Evolución y Clasificación (Biología · UNAM · Área 1)
// Subtemas: Origen de la vida · Teorías evolutivas · Pruebas de la evolución · Clasificación de los seres vivos → Resumen.

export const PRESENTACION = {
  id: "biologia-evolucion",
  titulo: "Evolución y Clasificación",
  materia: "Biología",
  subtema: "Origen y diversidad de la vida",
  slides: [

    // ── PORTADA ───────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Evolución y Clasificación",
      subtitulo: "Origen de la vida · Lamarck y Darwin · Selección natural · Pruebas de la evolución · Los cinco reinos",
      etiqueta: "Biología · UNAM",
      svgDiagram: "evo-portada",
    },

    // ══ SUBTEMA 1 · ORIGEN DE LA VIDA ═════════════════════════════════════════
    {
      id: "origen-vida",
      tipo: "concepto",
      titulo: "El origen de la vida",
      etiqueta: "¿De dónde vino la primera célula?",
      formula: "\\text{materia inorgánica} \\to \\text{materia orgánica} \\to \\text{vida}",
      svgDiagram: "evo-origen-vida",
      items: [
        { math: "\\text{Quimiosintética}", texto: "Oparin y Haldane: la vida surgió de moléculas simples que evolucionaron en el océano primitivo" },
        { math: "\\text{Miller}", texto: "demostró en el laboratorio que se forman aminoácidos a partir de gases y descargas eléctricas" },
        { math: "\\text{Panspermia}", texto: "la vida (o sus moléculas) llegó del espacio" },
        { math: "\\text{Refutada}", texto: "la generación espontánea: la vida NO surge de la nada (Pasteur, Redi)" }
      ],
      nota: "La teoría quimiosintética de Oparin (Rusia) y Haldane (Inglaterra) propone que, en la Tierra primitiva sin oxígeno, las moléculas inorgánicas reaccionaron formando compuestos orgánicos cada vez más complejos hasta originar las primeras células. Miller (1953) lo apoyó experimentalmente."
    },

    // Reactivos · Origen de la vida (4)
    {
      id: "ov1",
      tipo: "ejercicio",
      svgDiagram: "evo-origen-vida",
      etiqueta: "Evolución · Origen de la vida · Reactivo 1 / 4",
      pregunta: "La Teoría Quimiosintética de Oparin y Haldane permitió:",
      opciones: ["Proponer que la materia orgánica evolucionó a partir de moléculas simples", "Descubrir la estructura del ADN", "Demostrar la generación espontánea", "Clonar la primera célula"],
      correcta: 0,
      explicacion: "La teoría quimiosintética propone que la vida se originó cuando moléculas inorgánicas simples se combinaron y evolucionaron hasta formar materia orgánica y, finalmente, las primeras células.",
      pasos: [
        { pre: "De lo simple a lo orgánico: ", math: "\\text{teoría quimiosintética}" }
      ]
    },

    {
      id: "ov2",
      tipo: "ejercicio",
      etiqueta: "Evolución · Origen de la vida · Reactivo 2 / 4",
      pregunta: "El experimento de Stanley Miller demostró que es posible formar ________ a partir de gases simples y descargas eléctricas.",
      opciones: ["Aminoácidos", "Células completas", "ADN", "Bacterias"],
      correcta: 0,
      explicacion: "Miller (1953) simuló la atmósfera primitiva con gases y descargas eléctricas y obtuvo aminoácidos (los componentes de las proteínas), apoyando la hipótesis de Oparin.",
      pasos: [
        { pre: "Productos del experimento: ", math: "\\text{aminoácidos}" }
      ]
    },

    {
      id: "ov3",
      tipo: "ejercicio",
      etiqueta: "Evolución · Origen de la vida · Reactivo 3 / 4",
      pregunta: "La idea de que los seres vivos pueden surgir de la materia inerte (por ejemplo, gusanos de la carne podrida) fue REFUTADA. Se conoce como teoría de la:",
      opciones: ["Generación espontánea", "Quimiosíntesis", "Panspermia", "Selección natural"],
      correcta: 0,
      explicacion: "La generación espontánea sostenía que la vida surgía de la materia inerte. Redi y, sobre todo, Pasteur la refutaron experimentalmente: todo ser vivo proviene de otro ser vivo.",
      pasos: [
        { pre: "Refutada por Pasteur: ", math: "\\text{generación espontánea}" }
      ]
    },

    {
      id: "ov4",
      tipo: "ejercicio",
      etiqueta: "Evolución · Origen de la vida · Reactivo 4 / 4",
      pregunta: "Según la teoría quimiosintética, la atmósfera de la Tierra primitiva se caracterizaba por:",
      opciones: ["Carecer de oxígeno libre", "Tener mucho oxígeno", "Ser igual a la actual", "Estar formada solo por agua"],
      correcta: 0,
      explicacion: "La atmósfera primitiva era reductora, SIN oxígeno libre. Esa ausencia de O₂ permitió que las moléculas orgánicas se formaran y acumularan sin oxidarse.",
      pasos: [
        { pre: "Atmósfera primitiva: ", math: "\\text{sin } O_2\\ \\text{libre}" }
      ]
    },

    // ══ SUBTEMA 2 · TEORÍAS EVOLUTIVAS ════════════════════════════════════════
    {
      id: "teorias-evo",
      tipo: "concepto",
      titulo: "Lamarck vs. Darwin",
      etiqueta: "Cómo cambian las especies",
      formula: "\\text{Darwin: selección natural}",
      svgDiagram: "evo-darwin-lamarck",
      items: [
        { math: "\\text{Lamarck}", texto: "el uso/desuso modifica al organismo y eso se hereda («caracteres adquiridos»). INCORRECTO" },
        { math: "\\text{Darwin}", texto: "selección natural: sobreviven y se reproducen los más aptos al ambiente" },
        { math: "\\text{Variabilidad}", texto: "los individuos de una población son distintos; el ambiente «selecciona»" },
        { math: "\\text{Adaptación}", texto: "las características ventajosas se vuelven comunes con las generaciones" }
      ],
      nota: "Lamarck proponía que el uso de un órgano lo desarrollaba y ese cambio se heredaba (el cuello de la jirafa se alargó por estirarse). Darwin lo corrigió: ya existían jirafas con cuellos de distinto largo; las de cuello largo alcanzaban más alimento, sobrevivían y dejaban más descendencia (selección natural)."
    },

    // Reactivos · Teorías evolutivas (4)
    {
      id: "te1",
      tipo: "ejercicio",
      svgDiagram: "evo-darwin-lamarck",
      etiqueta: "Evolución · Teorías · Reactivo 1 / 4",
      pregunta: "El mecanismo central de la teoría de la evolución de Charles Darwin es:",
      opciones: ["La selección natural", "La herencia de caracteres adquiridos", "La generación espontánea", "El uso y desuso de los órganos"],
      correcta: 0,
      explicacion: "Darwin propuso la selección natural: en una población con variabilidad, los individuos mejor adaptados sobreviven y se reproducen más, transmitiendo sus rasgos.",
      pasos: [
        { pre: "Sobreviven los más aptos: ", math: "\\text{selección natural}" }
      ]
    },

    {
      id: "te2",
      tipo: "ejercicio",
      etiqueta: "Evolución · Teorías · Reactivo 2 / 4",
      pregunta: "La idea de que «un órgano se desarrolla por el uso y ese cambio se hereda» corresponde a la teoría de:",
      opciones: ["Lamarck", "Darwin", "Mendel", "Pasteur"],
      correcta: 0,
      explicacion: "Lamarck propuso la herencia de los caracteres adquiridos por el uso y desuso. Hoy se sabe que es incorrecta: los cambios adquiridos en vida no se heredan.",
      pasos: [
        { pre: "Caracteres adquiridos: ", math: "\\text{Lamarck (incorrecta)}" }
      ]
    },

    {
      id: "te3",
      tipo: "ejercicio",
      etiqueta: "Evolución · Teorías · Reactivo 3 / 4",
      pregunta: "Para que la selección natural pueda actuar sobre una población, es indispensable que exista:",
      opciones: ["Variabilidad entre los individuos", "Reproducción asexual", "Un ambiente sin cambios", "Caracteres adquiridos"],
      correcta: 0,
      explicacion: "Sin variabilidad (diferencias entre individuos) no habría sobre qué seleccionar. La selección natural favorece a los individuos con rasgos ventajosos; esa variación es la materia prima.",
      pasos: [
        { pre: "Materia prima: ", math: "\\text{variabilidad}" }
      ]
    },

    {
      id: "te4",
      tipo: "ejercicio",
      etiqueta: "Evolución · Teorías · Reactivo 4 / 4",
      pregunta: "El proceso por el que, a lo largo del tiempo, una población acumula características que la hacen más apta a su ambiente se llama:",
      opciones: ["Adaptación", "Mutación instantánea", "Generación espontánea", "Polinización"],
      correcta: 0,
      explicacion: "La adaptación es el resultado de la selección natural: las características ventajosas se vuelven más frecuentes generación tras generación, ajustando a la población a su entorno.",
      pasos: [
        { pre: "Ajuste al ambiente: ", math: "\\text{adaptación}" }
      ]
    },

    // ══ SUBTEMA 3 · PRUEBAS DE LA EVOLUCIÓN ═══════════════════════════════════
    {
      id: "pruebas",
      tipo: "criterio_detalle",
      titulo: "Pruebas de la evolución",
      etiqueta: "Las evidencias",
      svgDiagram: "evo-pruebas",
      enunciado: "Varias evidencias confirman la evolución: los FÓSILES muestran formas del pasado; los órganos HOMÓLOGOS (mismo origen, distinta función, como el brazo humano y el ala de murciélago) revelan ancestros comunes; las semejanzas EMBRIONARIAS y MOLECULARES (ADN parecido entre especies) también lo prueban.",
      math: "\\text{fósiles · homología · embriología · ADN}",
      por_que: "Los órganos homólogos comparten estructura porque provienen de un ancestro común, aunque hoy tengan funciones distintas. En cambio, los órganos análogos (ala de insecto y de ave) hacen lo mismo pero tienen origen distinto: son convergencia, no parentesco.",
      math_razon: "\\text{homólogos: mismo origen} \\;|\\; \\text{análogos: misma función}"
    },

    // Reactivos · Pruebas (3)
    {
      id: "pr1",
      tipo: "ejercicio",
      svgDiagram: "evo-pruebas",
      etiqueta: "Evolución · Pruebas · Reactivo 1 / 3",
      pregunta: "El brazo del ser humano, el ala del murciélago y la aleta de la ballena tienen los mismos huesos pero distinta función. Son órganos:",
      opciones: ["Homólogos", "Análogos", "Vestigiales", "Idénticos"],
      correcta: 0,
      explicacion: "Los órganos homólogos comparten la misma estructura y origen embrionario (heredados de un ancestro común) aunque cumplan funciones diferentes. Son evidencia de evolución.",
      pasos: [
        { pre: "Mismo origen, distinta función: ", math: "\\text{homólogos}" }
      ]
    },

    {
      id: "pr2",
      tipo: "ejercicio",
      etiqueta: "Evolución · Pruebas · Reactivo 2 / 3",
      pregunta: "Los restos o huellas de organismos del pasado conservados en las rocas, que evidencian la evolución, se llaman:",
      opciones: ["Fósiles", "Homólogos", "Mutágenos", "Gametos"],
      correcta: 0,
      explicacion: "Los fósiles son restos o impresiones de organismos antiguos. Permiten conocer formas extintas y reconstruir cómo cambiaron las especies a lo largo del tiempo.",
      pasos: [
        { pre: "Restos del pasado: ", math: "\\text{fósiles}" }
      ]
    },

    {
      id: "pr3",
      tipo: "ejercicio",
      etiqueta: "Evolución · Pruebas · Reactivo 3 / 3",
      pregunta: "El ala de un insecto y el ala de un ave cumplen la misma función (volar) pero tienen orígenes distintos. Son órganos:",
      opciones: ["Análogos", "Homólogos", "Vestigiales", "Recombinantes"],
      correcta: 0,
      explicacion: "Los órganos análogos cumplen la misma función pero tienen origen evolutivo distinto. Son resultado de la evolución convergente, no de un ancestro común.",
      pasos: [
        { pre: "Misma función, distinto origen: ", math: "\\text{análogos}" }
      ]
    },

    // ══ SUBTEMA 4 · CLASIFICACIÓN DE LOS SERES VIVOS ══════════════════════════
    {
      id: "clasificacion",
      tipo: "concepto",
      titulo: "Los cinco reinos",
      etiqueta: "Clasificar la diversidad",
      formula: "\\text{Monera · Protista · Fungi · Plantae · Animalia}",
      svgDiagram: "evo-reinos",
      items: [
        { math: "\\text{Monera}", texto: "procariotas (bacterias y arqueas); unicelulares sin núcleo" },
        { math: "\\text{Protista}", texto: "eucariotas simples: protozoarios y algas" },
        { math: "\\text{Fungi}", texto: "hongos; heterótrofos con pared de quitina (levaduras, setas)" },
        { math: "\\text{Plantae}", texto: "plantas; autótrofas (fotosíntesis), con pared de celulosa" },
        { math: "\\text{Animalia}", texto: "animales; heterótrofos, pluricelulares, sin pared celular" }
      ],
      nota: "La clasificación de Whittaker en cinco reinos agrupa a los seres vivos según su tipo celular, organización y nutrición. La taxonomía ordena a los seres en una jerarquía: Reino → Filo → Clase → Orden → Familia → Género → Especie. La especie se nombra con dos palabras (nomenclatura binomial de Linneo)."
    },

    // Reactivos · Clasificación (5)
    {
      id: "cl1",
      tipo: "ejercicio",
      svgDiagram: "evo-reinos",
      etiqueta: "Evolución · Clasificación · Reactivo 1 / 5",
      pregunta: "Un alga pertenece al reino:",
      opciones: ["Protista", "Animalia", "Fungi", "Monera"],
      correcta: 0,
      explicacion: "Las algas son eucariotas, en su mayoría unicelulares o de organización sencilla, y se clasifican en el reino Protista junto con los protozoarios.",
      pasos: [
        { pre: "Eucariota simple: ", math: "\\text{reino Protista}" }
      ]
    },

    {
      id: "cl2",
      tipo: "ejercicio",
      etiqueta: "Evolución · Clasificación · Reactivo 2 / 5",
      pregunta: "Las bacterias, por ser organismos procariotas, se clasifican en el reino:",
      opciones: ["Monera", "Protista", "Fungi", "Plantae"],
      correcta: 0,
      explicacion: "El reino Monera agrupa a los organismos procariotas (sin núcleo): las bacterias y las arqueas.",
      pasos: [
        { pre: "Procariotas: ", math: "\\text{reino Monera}" }
      ]
    },

    {
      id: "cl3",
      tipo: "ejercicio",
      svgDiagram: "evo-reinos",
      etiqueta: "Evolución · Clasificación · Reactivo 3 / 5",
      pregunta: "Las levaduras y las setas, heterótrofas y con pared de quitina, pertenecen al reino:",
      opciones: ["Fungi", "Plantae", "Animalia", "Monera"],
      correcta: 0,
      explicacion: "Los hongos forman el reino Fungi: son eucariotas heterótrofos (se alimentan por absorción) con pared celular de quitina. Incluyen levaduras, mohos y setas.",
      pasos: [
        { pre: "Hongos: ", math: "\\text{reino Fungi}" }
      ]
    },

    {
      id: "cl4",
      tipo: "ejercicio",
      etiqueta: "Evolución · Clasificación · Reactivo 4 / 5",
      pregunta: "El sistema para nombrar a las especies con dos palabras (género y especie), como Homo sapiens, fue creado por:",
      opciones: ["Carlos Linneo", "Charles Darwin", "Gregor Mendel", "Luis Pasteur"],
      correcta: 0,
      explicacion: "Linneo creó la nomenclatura binomial: cada especie se nombra con dos palabras en latín (género + especie). También organizó la jerarquía taxonómica.",
      pasos: [
        { pre: "Nomenclatura binomial: ", math: "\\textit{Homo sapiens}\\ (\\text{Linneo})" }
      ]
    },

    {
      id: "cl5",
      tipo: "ejercicio",
      svgDiagram: "evo-taxonomia",
      etiqueta: "Evolución · Clasificación · Reactivo 5 / 5",
      pregunta: "En la jerarquía taxonómica, ¿cuál es la categoría MÁS específica (la que agrupa menos organismos)?",
      opciones: ["La especie", "El reino", "El filo", "La clase"],
      correcta: 0,
      explicacion: "La especie es el nivel más específico: agrupa a los individuos capaces de reproducirse entre sí. El reino es el más amplio. El orden es: Reino → Filo → Clase → Orden → Familia → Género → Especie.",
      pasos: [
        { pre: "Nivel más específico: ", math: "\\text{especie}" }
      ]
    },

    // ── RESUMEN ───────────────────────────────────────────────────────────────
    {
      id: "resumen",
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Ideas clave de evolución",
      puntos: [
        { math: "\\text{Quimiosintética}", texto: "Oparin-Haldane: la vida surgió de moléculas simples; Miller lo apoyó (aminoácidos)" },
        { math: "\\text{Lamarck} \\neq \\text{Darwin}", texto: "Lamarck (caracteres adquiridos, incorrecto); Darwin (selección natural)" },
        { math: "\\text{Selección natural}", texto: "sobreviven los más aptos; necesita variabilidad → adaptación" },
        { math: "\\text{Pruebas}", texto: "fósiles, órganos homólogos (mismo origen) vs. análogos (misma función), ADN" },
        { math: "\\text{5 reinos}", texto: "Monera, Protista, Fungi, Plantae, Animalia (Whittaker)" },
        { math: "\\text{Taxonomía}", texto: "Reino → Filo → Clase → Orden → Familia → Género → Especie (Linneo)" }
      ]
    }

  ]
};
