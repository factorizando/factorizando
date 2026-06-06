// Datos de la presentación: Reproducción (Biología · UNAM · Área 1)
// Subtemas: Asexual vs sexual · Reproducción asexual · Reproducción sexual · Reproducción en plantas → Resumen.
// 16 reactivos por subtema.

export const PRESENTACION = {
  id: "biologia-reproduccion",
  titulo: "Reproducción",
  materia: "Biología",
  subtema: "Continuidad de la vida",
  slides: [

    // ── PORTADA ───────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Reproducción",
      subtitulo: "Asexual y sexual · Gemación, bipartición, esporulación · Gametos y fecundación · Reproducción en plantas",
      etiqueta: "Biología · UNAM",
      svgDiagram: "rep-portada",
    },

    // ══ SUBTEMA 1 · ASEXUAL VS SEXUAL (panorama) ══════════════════════════════
    {
      id: "panorama",
      tipo: "concepto",
      titulo: "Asexual vs. sexual",
      etiqueta: "Las dos formas de reproducirse",
      formula: "\\text{asexual: 1 progenitor} \\quad | \\quad \\text{sexual: 2 progenitores}",
      svgDiagram: "rep-asexual",
      items: [
        { math: "\\text{Asexual}", texto: "un solo progenitor; los hijos son CLONES (idénticos). Rápida, sin gametos" },
        { math: "\\text{Sexual}", texto: "dos progenitores aportan gametos; los hijos son DISTINTOS (variabilidad)" },
        { math: "\\text{Ventaja asexual}", texto: "rápida y eficiente en ambientes estables" },
        { math: "\\text{Ventaja sexual}", texto: "genera variabilidad → mejor adaptación a cambios" }
      ],
      nota: "En la reproducción asexual interviene la mitosis y los descendientes son genéticamente idénticos al progenitor. En la sexual intervienen la meiosis (forma gametos) y la fecundación, lo que combina genes de dos individuos y produce variabilidad: materia prima de la evolución."
    },

    // ══ SUBTEMA 1 (reactivos) · REPRODUCCIÓN ASEXUAL ══════════════════════════
    {
      id: "asexual-tipos",
      tipo: "criterio_detalle",
      titulo: "Tipos de reproducción asexual",
      etiqueta: "Un progenitor, hijos clones",
      svgDiagram: "rep-asexual",
      enunciado: "En la reproducción asexual un organismo origina copias de sí mismo sin gametos. Las formas más comunes son: bipartición (la célula se divide en dos), gemación (crece una yema que se desprende), esporulación (se forman esporas) y fragmentación (un fragmento regenera un organismo completo).",
      math: "\\text{bipartición · gemación · esporulación · fragmentación}",
      por_que: "Distinguir el tipo según cómo se separa el nuevo individuo: en la BIPARTICIÓN la célula se parte en dos iguales (bacterias, amebas); en la GEMACIÓN sale un «brote» o yema (levaduras, hidras); en la ESPORULACIÓN se liberan esporas (hongos, helechos); en la FRAGMENTACIÓN un trozo regenera todo (estrella de mar, planarias).",
      math_razon: "\\text{todos producen clones por mitosis (sin meiosis)}"
    },

    // Reactivos · Asexual (16)
    {
      id: "as1",
      tipo: "ejercicio",
      svgDiagram: "rep-asexual",
      etiqueta: "Reproducción · Asexual · Reactivo 1 / 16",
      pregunta: "Saccharomyces cerevisiae es una levadura cuya reproducción asexual se efectúa por medio de:",
      opciones: ["Gemación", "Conjugación", "Bipartición", "Fecundación"],
      correcta: 0,
      explicacion: "En las levaduras se forma una pequeña yema (gema) que crece y se desprende como un nuevo individuo: eso es gemación, una forma de reproducción asexual.",
      pasos: [
        { pre: "Yema que se desprende: ", math: "\\text{gemación}" }
      ]
    },
    {
      id: "as2",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Asexual · Reactivo 2 / 16",
      pregunta: "Las bacterias se reproducen asexualmente dividiéndose en dos células iguales. Este proceso se llama:",
      opciones: ["Bipartición (fisión binaria)", "Gemación", "Esporulación", "Meiosis"],
      correcta: 0,
      explicacion: "La bipartición o fisión binaria es la división de una célula en dos células hijas idénticas; es la forma típica de reproducción de las bacterias.",
      pasos: [
        { pre: "Una célula → dos iguales: ", math: "\\text{bipartición}" }
      ]
    },
    {
      id: "as3",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Asexual · Reactivo 3 / 16",
      pregunta: "Los hongos y los helechos producen estructuras reproductoras que se dispersan llamadas:",
      opciones: ["Esporas", "Gametos", "Cigotos", "Semillas"],
      correcta: 0,
      explicacion: "La esporulación produce esporas: células reproductoras que se dispersan y germinan dando un nuevo organismo. Es común en hongos, helechos y musgos.",
      pasos: [
        { pre: "Células dispersoras: ", math: "\\text{esporas}" }
      ]
    },
    {
      id: "as4",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Asexual · Reactivo 4 / 16",
      pregunta: "Si a una estrella de mar se le separa un brazo y este regenera un organismo completo, se trata de reproducción asexual por:",
      opciones: ["Fragmentación", "Gemación", "Bipartición", "Polinización"],
      correcta: 0,
      explicacion: "En la fragmentación, un fragmento del organismo regenera todas las partes faltantes y forma un individuo completo. Ocurre en estrellas de mar, planarias y muchas plantas.",
      pasos: [
        { pre: "Un trozo → organismo completo: ", math: "\\text{fragmentación}" }
      ]
    },
    {
      id: "as5",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Asexual · Reactivo 5 / 16",
      pregunta: "Una característica de TODA reproducción asexual es que los descendientes son:",
      opciones: ["Genéticamente idénticos al progenitor", "Distintos de ambos padres", "Producto de la fecundación", "Resultado de la meiosis"],
      correcta: 0,
      explicacion: "Como interviene solo la mitosis y un único progenitor, los descendientes son clones: genéticamente idénticos a él. No hay mezcla de genes ni variabilidad.",
      pasos: [
        { pre: "Clones por mitosis: ", math: "\\text{hijos idénticos}" }
      ]
    },
    {
      id: "as6",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Asexual · Reactivo 6 / 16",
      pregunta: "¿Cuántos progenitores intervienen en la reproducción asexual?",
      opciones: ["Uno", "Dos", "Tres", "Ninguno"],
      correcta: 0,
      explicacion: "La reproducción asexual requiere un solo progenitor, que genera copias de sí mismo sin necesidad de pareja ni de gametos.",
      pasos: [
        { pre: "Sin pareja: ", math: "1\\ \\text{progenitor}" }
      ]
    },
    {
      id: "as7",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Asexual · Reactivo 7 / 16",
      pregunta: "Una ventaja de la reproducción asexual es que:",
      opciones: ["Es rápida y no requiere pareja", "Genera mucha variabilidad", "Produce hijos muy distintos", "Necesita dos progenitores"],
      correcta: 0,
      explicacion: "La reproducción asexual es rápida y eficiente porque no necesita pareja ni gametos: un individuo puede generar muchos descendientes en poco tiempo.",
      pasos: [
        { pre: "Eficiencia: ", math: "\\text{rápida, sin pareja}" }
      ]
    },
    {
      id: "as8",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Asexual · Reactivo 8 / 16",
      pregunta: "A diferencia de la sexual, en la reproducción asexual NO intervienen:",
      opciones: ["Los gametos", "La mitosis", "El ADN", "Las células"],
      correcta: 0,
      explicacion: "La reproducción asexual no usa gametos ni fecundación; se basa en la mitosis de las células del progenitor.",
      pasos: [
        { pre: "Sin células sexuales: ", math: "\\text{no hay gametos}" }
      ]
    },
    {
      id: "as9",
      tipo: "ejercicio",
      svgDiagram: "rep-asexual",
      etiqueta: "Reproducción · Asexual · Reactivo 9 / 16",
      pregunta: "La hidra, un pequeño animal de agua dulce, forma una yema que crece y se desprende. Se reproduce por:",
      opciones: ["Gemación", "Bipartición", "Esporulación", "Fecundación"],
      correcta: 0,
      explicacion: "La hidra se reproduce por gemación: desarrolla una yema (brote) en su cuerpo que crece hasta formar un nuevo individuo y luego se separa.",
      pasos: [
        { pre: "Brote que se separa: ", math: "\\text{gemación}" }
      ]
    },
    {
      id: "as10",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Asexual · Reactivo 10 / 16",
      pregunta: "La ameba, un protozoario, se reproduce dividiéndose en dos. Esto es:",
      opciones: ["Bipartición", "Gemación", "Esporulación", "Polinización"],
      correcta: 0,
      explicacion: "La ameba se divide en dos células iguales por bipartición (fisión binaria), una forma de reproducción asexual.",
      pasos: [
        { pre: "Se parte en dos: ", math: "\\text{bipartición}" }
      ]
    },
    {
      id: "as11",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Asexual · Reactivo 11 / 16",
      pregunta: "La capacidad de una planaria de regenerar un organismo completo a partir de un fragmento se llama:",
      opciones: ["Regeneración (fragmentación)", "Gemación", "Conjugación", "Esporulación"],
      correcta: 0,
      explicacion: "Las planarias pueden regenerar un individuo completo a partir de un fragmento de su cuerpo: es reproducción asexual por fragmentación/regeneración.",
      pasos: [
        { pre: "Fragmento → individuo: ", math: "\\text{fragmentación}" }
      ]
    },
    {
      id: "as12",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Asexual · Reactivo 12 / 16",
      pregunta: "El tipo de división celular que está en la base de la reproducción asexual es la:",
      opciones: ["Mitosis", "Meiosis", "Fecundación", "Gametogénesis"],
      correcta: 0,
      explicacion: "La reproducción asexual se basa en la mitosis, que produce células idénticas; por eso los descendientes son clones del progenitor.",
      pasos: [
        { pre: "Produce clones: ", math: "\\text{mitosis}" }
      ]
    },
    {
      id: "as13",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Asexual · Reactivo 13 / 16",
      pregunta: "La reproducción asexual resulta especialmente ventajosa en ambientes:",
      opciones: ["Estables, que no cambian mucho", "Que cambian constantemente", "Con muchos depredadores nuevos", "Con clima impredecible"],
      correcta: 0,
      explicacion: "En ambientes estables, producir clones bien adaptados es ventajoso. En ambientes cambiantes conviene más la variabilidad de la reproducción sexual.",
      pasos: [
        { pre: "Sin cambios: ", math: "\\text{ventaja asexual}" }
      ]
    },
    {
      id: "as14",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Asexual · Reactivo 14 / 16",
      pregunta: "Obtener una planta nueva a partir de un esqueje o estaca del tallo es un ejemplo de reproducción:",
      opciones: ["Asexual", "Sexual", "Por semilla", "Por fecundación cruzada"],
      correcta: 0,
      explicacion: "La propagación por esquejes o estacas es reproducción asexual vegetativa: se obtiene un clon de la planta original.",
      pasos: [
        { pre: "Clon de la planta: ", math: "\\text{asexual (vegetativa)}" }
      ]
    },
    {
      id: "as15",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Asexual · Reactivo 15 / 16",
      pregunta: "Una DESVENTAJA de la reproducción asexual frente a la sexual es que:",
      opciones: ["Genera poca variabilidad genética", "Es muy lenta", "Requiere dos progenitores", "Produce gametos en exceso"],
      correcta: 0,
      explicacion: "Como todos los descendientes son clones, hay poca variabilidad; si el ambiente cambia o llega una enfermedad, toda la población es igualmente vulnerable.",
      pasos: [
        { pre: "Todos iguales: ", math: "\\text{poca variabilidad}" }
      ]
    },
    {
      id: "as16",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Asexual · Reactivo 16 / 16",
      pregunta: "¿Cuál de los siguientes es un ejemplo de reproducción ASEXUAL?",
      opciones: ["Una bacteria que se divide en dos", "Dos peces que liberan óvulos y espermatozoides", "Una flor polinizada que forma semillas", "Un mamífero que gesta una cría"],
      correcta: 0,
      explicacion: "La división de una bacteria (bipartición) es asexual. Las demás opciones implican gametos y fecundación, es decir, reproducción sexual.",
      pasos: [
        { pre: "Sin gametos: ", math: "\\text{bipartición = asexual}" }
      ]
    },

    // ══ SUBTEMA 2 · REPRODUCCIÓN SEXUAL ═══════════════════════════════════════
    {
      id: "sexual",
      tipo: "concepto",
      titulo: "Reproducción sexual",
      etiqueta: "Gametos y fecundación",
      formula: "\\text{gameto (n)} + \\text{gameto (n)} \\to \\text{cigoto (2n)}",
      svgDiagram: "rep-sexual",
      items: [
        { math: "\\text{Gametos}", texto: "células sexuales haploides (n): óvulo (femenino) y espermatozoide (masculino)" },
        { math: "\\text{Meiosis}", texto: "forma los gametos reduciendo los cromosomas a la mitad" },
        { math: "\\text{Fecundación}", texto: "unión de los gametos → cigoto (2n), que se desarrolla en un nuevo ser" },
        { math: "\\text{Resultado}", texto: "descendientes con mezcla de genes de ambos padres (variabilidad)" }
      ],
      nota: "La reproducción sexual requiere dos progenitores que aportan gametos. La meiosis (en las gónadas) produce gametos haploides; la fecundación los une y restablece el número diploide (2n). La combinación de genes de ambos padres genera la variabilidad sobre la que actúa la selección natural."
    },

    {
      id: "gametogenesis",
      tipo: "criterio_detalle",
      titulo: "Gametos y fecundación",
      etiqueta: "n + n = 2n",
      svgDiagram: "rep-sexual",
      enunciado: "Los gametos se forman por meiosis y son haploides (n): tienen la mitad de los cromosomas. En la fecundación, el espermatozoide (n) se une al óvulo (n) y forman el cigoto (2n), que por mitosis se desarrolla hasta formar un nuevo individuo completo.",
      math: "\\text{óvulo (n)} + \\text{esperma (n)} \\xrightarrow{\\text{fecundación}} \\text{cigoto (2n)}",
      por_que: "Si los gametos fueran diploides, cada generación duplicaría el número de cromosomas. Por eso la meiosis los reduce a n; la fecundación vuelve a sumar dos mitades y restaura el 2n característico de la especie.",
      math_razon: "\\text{cigoto} \\xrightarrow{\\text{mitosis}} \\text{embrión} \\to \\text{nuevo organismo}"
    },

    // Reactivos · Sexual (16)
    {
      id: "sx1",
      tipo: "ejercicio",
      svgDiagram: "rep-sexual",
      etiqueta: "Reproducción · Sexual · Reactivo 1 / 16",
      pregunta: "La célula que resulta de la unión del óvulo y el espermatozoide durante la fecundación se llama:",
      opciones: ["Cigoto", "Gameto", "Espora", "Gema"],
      correcta: 0,
      explicacion: "La fecundación une dos gametos haploides (óvulo + espermatozoide) y forma el cigoto, célula diploide (2n) a partir de la cual se desarrolla el nuevo organismo.",
      pasos: [
        { pre: "n + n: ", math: "\\text{cigoto (2n)}" }
      ]
    },
    {
      id: "sx2",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Sexual · Reactivo 2 / 16",
      pregunta: "Las células sexuales (óvulos y espermatozoides) se caracterizan por ser:",
      opciones: ["Haploides (n)", "Diploides (2n)", "Tetraploides (4n)", "Idénticas a las del cuerpo"],
      correcta: 0,
      explicacion: "Los gametos se forman por meiosis y son haploides: tienen la mitad de los cromosomas (n). Así, al unirse dos gametos se forma un cigoto diploide (2n).",
      pasos: [
        { pre: "Mitad de cromosomas: ", math: "\\text{gameto} = n" }
      ]
    },
    {
      id: "sx3",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Sexual · Reactivo 3 / 16",
      pregunta: "El proceso de división celular que forma los gametos en la reproducción sexual es la:",
      opciones: ["Meiosis", "Mitosis", "Bipartición", "Gemación"],
      correcta: 0,
      explicacion: "La meiosis produce los gametos reduciendo el número de cromosomas a la mitad y generando variabilidad. La mitosis, en cambio, forma células idénticas.",
      pasos: [
        { pre: "Forma gametos (n): ", math: "\\text{meiosis}" }
      ]
    },
    {
      id: "sx4",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Sexual · Reactivo 4 / 16",
      pregunta: "La principal VENTAJA de la reproducción sexual sobre la asexual es que:",
      opciones: ["Genera variabilidad genética", "Es más rápida", "No necesita pareja", "Produce clones idénticos"],
      correcta: 0,
      explicacion: "Al combinar los genes de dos progenitores, la reproducción sexual genera descendientes distintos (variabilidad), lo que mejora la capacidad de la especie para adaptarse a los cambios del ambiente.",
      pasos: [
        { pre: "Mezcla de genes: ", math: "\\text{variabilidad} \\to \\text{adaptación}" }
      ]
    },
    {
      id: "sx5",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Sexual · Reactivo 5 / 16",
      pregunta: "Si una especie tiene 2n = 24 cromosomas, ¿cuántos cromosomas tendrá cada uno de sus gametos?",
      opciones: ["12", "24", "48", "6"],
      correcta: 0,
      explicacion: "Los gametos son haploides (n), con la mitad de los cromosomas: 24 / 2 = 12. En la fecundación, 12 + 12 = 24 restablecen el número diploide.",
      pasos: [
        { pre: "Mitad de 24: ", math: "n = \\dfrac{24}{2} = 12" }
      ]
    },
    {
      id: "sx6",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Sexual · Reactivo 6 / 16",
      pregunta: "¿Cuántos progenitores se requieren, por lo general, en la reproducción sexual?",
      opciones: ["Dos", "Uno", "Tres", "Ninguno"],
      correcta: 0,
      explicacion: "La reproducción sexual requiere dos progenitores, cada uno aportando un gameto que se unirá en la fecundación.",
      pasos: [
        { pre: "Aportan gametos: ", math: "2\\ \\text{progenitores}" }
      ]
    },
    {
      id: "sx7",
      tipo: "ejercicio",
      svgDiagram: "rep-sexual",
      etiqueta: "Reproducción · Sexual · Reactivo 7 / 16",
      pregunta: "El gameto femenino se denomina:",
      opciones: ["Óvulo", "Espermatozoide", "Cigoto", "Espora"],
      correcta: 0,
      explicacion: "El gameto femenino es el óvulo; el masculino es el espermatozoide. Su unión forma el cigoto.",
      pasos: [
        { pre: "Gameto femenino: ", math: "\\text{óvulo}" }
      ]
    },
    {
      id: "sx8",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Sexual · Reactivo 8 / 16",
      pregunta: "El gameto masculino, generalmente móvil, se llama:",
      opciones: ["Espermatozoide", "Óvulo", "Cigoto", "Polen"],
      correcta: 0,
      explicacion: "El espermatozoide es el gameto masculino; suele ser móvil (con flagelo) para alcanzar al óvulo.",
      pasos: [
        { pre: "Gameto masculino: ", math: "\\text{espermatozoide}" }
      ]
    },
    {
      id: "sx9",
      tipo: "ejercicio",
      svgDiagram: "rep-sexual",
      etiqueta: "Reproducción · Sexual · Reactivo 9 / 16",
      pregunta: "La unión del gameto masculino con el femenino se denomina:",
      opciones: ["Fecundación", "Mitosis", "Gemación", "Polinización"],
      correcta: 0,
      explicacion: "La fecundación es la unión del óvulo y el espermatozoide, que da origen al cigoto.",
      pasos: [
        { pre: "Unión de gametos: ", math: "\\text{fecundación}" }
      ]
    },
    {
      id: "sx10",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Sexual · Reactivo 10 / 16",
      pregunta: "Una vez formado, el cigoto se desarrolla hasta convertirse en un nuevo organismo mediante:",
      opciones: ["Sucesivas divisiones por mitosis", "Meiosis continua", "Fermentación", "Esporulación"],
      correcta: 0,
      explicacion: "El cigoto se divide muchas veces por mitosis, formando el embrión y luego el organismo completo.",
      pasos: [
        { pre: "Cigoto crece: ", math: "\\text{mitosis} \\to \\text{embrión}" }
      ]
    },
    {
      id: "sx11",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Sexual · Reactivo 11 / 16",
      pregunta: "Cuando la fecundación ocurre dentro del cuerpo de la hembra, se denomina fecundación:",
      opciones: ["Interna", "Externa", "Cruzada", "Doble"],
      correcta: 0,
      explicacion: "La fecundación interna ocurre dentro del organismo (como en mamíferos, aves y reptiles). La externa se da en el agua (muchos peces y anfibios).",
      pasos: [
        { pre: "Dentro del cuerpo: ", math: "\\text{fecundación interna}" }
      ]
    },
    {
      id: "sx12",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Sexual · Reactivo 12 / 16",
      pregunta: "A diferencia de la asexual, los descendientes de la reproducción sexual son:",
      opciones: ["Distintos entre sí y de sus padres", "Clones idénticos al progenitor", "Siempre iguales a la madre", "Genéticamente iguales entre hermanos"],
      correcta: 0,
      explicacion: "Como combinan genes de dos progenitores, los descendientes de la reproducción sexual presentan variabilidad: son distintos entre sí y de sus padres.",
      pasos: [
        { pre: "Mezcla de genes: ", math: "\\text{descendientes distintos}" }
      ]
    },
    {
      id: "sx13",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Sexual · Reactivo 13 / 16",
      pregunta: "Los órganos que producen los gametos (como ovarios y testículos) se llaman:",
      opciones: ["Gónadas", "Glándulas salivales", "Nefronas", "Alveolos"],
      correcta: 0,
      explicacion: "Las gónadas son los órganos sexuales que producen los gametos: los ovarios (óvulos) y los testículos (espermatozoides).",
      pasos: [
        { pre: "Producen gametos: ", math: "\\text{gónadas}" }
      ]
    },
    {
      id: "sx14",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Sexual · Reactivo 14 / 16",
      pregunta: "La función de la fecundación, respecto al número de cromosomas, es:",
      opciones: ["Restablecer el número diploide (2n)", "Reducirlo a la mitad", "Duplicarlo", "Eliminarlo"],
      correcta: 0,
      explicacion: "Al unirse dos gametos haploides (n + n), la fecundación restablece el número diploide (2n) propio de la especie.",
      pasos: [
        { pre: "n + n: ", math: "\\to 2n" }
      ]
    },
    {
      id: "sx15",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Sexual · Reactivo 15 / 16",
      pregunta: "Si los gametos de una especie tienen n = 20 cromosomas, su cigoto tendrá:",
      opciones: ["40 cromosomas (2n)", "20 cromosomas", "10 cromosomas", "80 cromosomas"],
      correcta: 0,
      explicacion: "El cigoto resulta de la unión de dos gametos: 20 + 20 = 40 cromosomas (2n = 40).",
      pasos: [
        { pre: "n + n: ", math: "20 + 20 = 40\\ (2n)" }
      ]
    },
    {
      id: "sx16",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Sexual · Reactivo 16 / 16",
      pregunta: "Una DESVENTAJA de la reproducción sexual frente a la asexual es que:",
      opciones: ["Suele ser más lenta y requiere pareja", "No genera variabilidad", "Produce clones", "No usa gametos"],
      correcta: 0,
      explicacion: "La reproducción sexual necesita dos progenitores y suele ser más lenta y costosa, aunque a cambio aporta la valiosa variabilidad genética.",
      pasos: [
        { pre: "Costo: ", math: "\\text{más lenta, necesita pareja}" }
      ]
    },

    // ══ SUBTEMA 3 · REPRODUCCIÓN EN PLANTAS ═══════════════════════════════════
    {
      id: "plantas",
      tipo: "criterio_detalle",
      titulo: "Reproducción en plantas",
      etiqueta: "Flores, semillas y propagación",
      svgDiagram: "rep-planta",
      enunciado: "Las plantas con flor se reproducen sexualmente mediante la flor: el polen (gameto masculino) fecunda al óvulo, formando la semilla y el fruto. La POLINIZACIÓN es el transporte del polen (por viento, agua o animales). Las plantas también se reproducen asexualmente por estacas, bulbos, tubérculos o estolones.",
      math: "\\text{polen} + \\text{óvulo} \\xrightarrow{\\text{polinización}} \\text{semilla} \\to \\text{fruto}",
      por_que: "La flor es el órgano reproductor: el estambre produce el polen y el pistilo contiene el óvulo. Tras la polinización y fecundación, el óvulo se convierte en semilla y el ovario en fruto. La propagación vegetativa (estacas, tubérculos) es asexual: produce clones de la planta madre.",
      math_razon: "\\text{sexual: flor/semilla} \\quad | \\quad \\text{asexual: estacas, tubérculos (clones)}"
    },

    // Reactivos · Plantas (16)
    {
      id: "pl1",
      tipo: "ejercicio",
      svgDiagram: "rep-planta",
      etiqueta: "Reproducción · Plantas · Reactivo 1 / 16",
      pregunta: "El transporte del polen desde el estambre hasta el pistilo de la flor se llama:",
      opciones: ["Polinización", "Fecundación", "Germinación", "Esporulación"],
      correcta: 0,
      explicacion: "La polinización es el traslado del polen (por viento, agua o animales como las abejas) hasta el pistilo. Después ocurre la fecundación del óvulo.",
      pasos: [
        { pre: "Transporte del polen: ", math: "\\text{polinización}" }
      ]
    },
    {
      id: "pl2",
      tipo: "ejercicio",
      svgDiagram: "rep-planta",
      etiqueta: "Reproducción · Plantas · Reactivo 2 / 16",
      pregunta: "Tras la fecundación en una planta con flor, el óvulo se transforma en ________ y el ovario en ________.",
      opciones: ["semilla — fruto", "fruto — semilla", "polen — flor", "raíz — tallo"],
      correcta: 0,
      explicacion: "Después de la fecundación, el óvulo se convierte en semilla (que contiene el embrión) y el ovario madura formando el fruto que la protege.",
      pasos: [
        { pre: "Resultado de la fecundación: ", math: "\\text{óvulo} \\to \\text{semilla},\\ \\text{ovario} \\to \\text{fruto}" }
      ]
    },
    {
      id: "pl3",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Plantas · Reactivo 3 / 16",
      pregunta: "Sembrar un trozo de tallo (estaca) para obtener una planta idéntica a la original es un ejemplo de reproducción:",
      opciones: ["Asexual (vegetativa)", "Sexual por semilla", "Por polinización", "Por fecundación cruzada"],
      correcta: 0,
      explicacion: "La propagación por estacas, tubérculos o bulbos es reproducción asexual vegetativa: produce clones genéticamente idénticos a la planta madre, sin intervención de gametos.",
      pasos: [
        { pre: "Clon de la planta madre: ", math: "\\text{reproducción vegetativa (asexual)}" }
      ]
    },
    {
      id: "pl4",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Plantas · Reactivo 4 / 16",
      pregunta: "En la flor, la estructura que produce los granos de polen (gameto masculino) es:",
      opciones: ["El estambre", "El pistilo", "El pétalo", "El sépalo"],
      correcta: 0,
      explicacion: "El estambre es el órgano masculino de la flor: en su antera se producen los granos de polen. El pistilo es el órgano femenino, que contiene el óvulo.",
      pasos: [
        { pre: "Órgano masculino: ", math: "\\text{estambre} \\to \\text{polen}" }
      ]
    },
    {
      id: "pl5",
      tipo: "ejercicio",
      svgDiagram: "rep-planta",
      etiqueta: "Reproducción · Plantas · Reactivo 5 / 16",
      pregunta: "El órgano femenino de la flor, que contiene el óvulo, es:",
      opciones: ["El pistilo", "El estambre", "El pétalo", "La antera"],
      correcta: 0,
      explicacion: "El pistilo (o carpelo) es el órgano femenino de la flor; en su base (ovario) se encuentra el óvulo.",
      pasos: [
        { pre: "Órgano femenino: ", math: "\\text{pistilo (óvulo)}" }
      ]
    },
    {
      id: "pl6",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Plantas · Reactivo 6 / 16",
      pregunta: "En las plantas angiospermas, el órgano especializado en la reproducción sexual es:",
      opciones: ["La flor", "La raíz", "La hoja", "El tallo"],
      correcta: 0,
      explicacion: "La flor es el órgano reproductor de las plantas con flor (angiospermas): contiene los estambres (masculino) y el pistilo (femenino).",
      pasos: [
        { pre: "Reproductor: ", math: "\\text{la flor}" }
      ]
    },
    {
      id: "pl7",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Plantas · Reactivo 7 / 16",
      pregunta: "¿Cuál de los siguientes es un agente de polinización?",
      opciones: ["El viento", "La gravedad", "El magnetismo", "La electricidad"],
      correcta: 0,
      explicacion: "El polen se transporta por agentes como el viento, el agua y los animales (insectos, aves). Las flores se han adaptado a cada tipo de polinizador.",
      pasos: [
        { pre: "Transporta polen: ", math: "\\text{viento, agua, animales}" }
      ]
    },
    {
      id: "pl8",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Plantas · Reactivo 8 / 16",
      pregunta: "Las abejas, al pasar de flor en flor recogiendo néctar, actúan como:",
      opciones: ["Polinizadores", "Descomponedores", "Depredadores de semillas", "Productores"],
      correcta: 0,
      explicacion: "Las abejas transportan el polen de una flor a otra mientras buscan néctar, favoreciendo la polinización y la formación de frutos y semillas.",
      pasos: [
        { pre: "Llevan polen: ", math: "\\text{polinizadores}" }
      ]
    },
    {
      id: "pl9",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Plantas · Reactivo 9 / 16",
      pregunta: "El proceso por el cual una semilla origina una nueva planta se llama:",
      opciones: ["Germinación", "Polinización", "Fecundación", "Fragmentación"],
      correcta: 0,
      explicacion: "La germinación es el desarrollo del embrión de la semilla hasta formar una nueva planta cuando hay condiciones adecuadas de agua, temperatura y oxígeno.",
      pasos: [
        { pre: "Semilla → planta: ", math: "\\text{germinación}" }
      ]
    },
    {
      id: "pl10",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Plantas · Reactivo 10 / 16",
      pregunta: "La papa, que origina nuevas plantas a partir de sus «ojos», se reproduce asexualmente por:",
      opciones: ["Tubérculos", "Semillas", "Polinización", "Esporas"],
      correcta: 0,
      explicacion: "La papa es un tubérculo (tallo subterráneo) que puede generar nuevas plantas clónicas a partir de sus yemas u «ojos»: reproducción asexual vegetativa.",
      pasos: [
        { pre: "Tallo subterráneo: ", math: "\\text{tubérculo (asexual)}" }
      ]
    },
    {
      id: "pl11",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Plantas · Reactivo 11 / 16",
      pregunta: "La función del fruto en una planta es principalmente:",
      opciones: ["Proteger la semilla y ayudar a dispersarla", "Producir polen", "Realizar la fotosíntesis", "Fijar la planta al suelo"],
      correcta: 0,
      explicacion: "El fruto, que deriva del ovario, protege a la semilla y favorece su dispersión (por animales, viento o agua).",
      pasos: [
        { pre: "Protege y dispersa: ", math: "\\text{fruto}" }
      ]
    },
    {
      id: "pl12",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Plantas · Reactivo 12 / 16",
      pregunta: "En las plantas con flor, el grano de polen contiene al:",
      opciones: ["Gameto masculino", "Gameto femenino", "Cigoto", "Fruto"],
      correcta: 0,
      explicacion: "El grano de polen lleva el gameto masculino de la planta; al llegar al pistilo, fecundará al óvulo.",
      pasos: [
        { pre: "Polen lleva: ", math: "\\text{gameto masculino}" }
      ]
    },
    {
      id: "pl13",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Plantas · Reactivo 13 / 16",
      pregunta: "La cebolla y el ajo originan nuevas plantas a partir de un ________, lo cual es reproducción asexual.",
      opciones: ["bulbo", "fruto", "polen", "óvulo"],
      correcta: 0,
      explicacion: "El bulbo (como el de la cebolla o el ajo) es una estructura subterránea que genera nuevas plantas clónicas: reproducción asexual vegetativa.",
      pasos: [
        { pre: "Estructura vegetativa: ", math: "\\text{bulbo (asexual)}" }
      ]
    },
    {
      id: "pl14",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Plantas · Reactivo 14 / 16",
      pregunta: "La reproducción sexual de una planta con flor culmina con la formación de:",
      opciones: ["Semillas (con embrión)", "Esporas", "Yemas", "Estacas"],
      correcta: 0,
      explicacion: "Tras la polinización y la fecundación, se forman las semillas, que contienen el embrión de la nueva planta: es el resultado de la reproducción sexual.",
      pasos: [
        { pre: "Resultado sexual: ", math: "\\text{semilla}" }
      ]
    },
    {
      id: "pl15",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Plantas · Reactivo 15 / 16",
      pregunta: "Las hojas modificadas, generalmente coloridas, que protegen la flor y atraen polinizadores son:",
      opciones: ["Los pétalos", "Los estambres", "Los óvulos", "Las raíces"],
      correcta: 0,
      explicacion: "Los pétalos, a menudo coloridos y olorosos, protegen las partes reproductoras y atraen a los polinizadores. El conjunto de pétalos forma la corola.",
      pasos: [
        { pre: "Atraen polinizadores: ", math: "\\text{pétalos}" }
      ]
    },
    {
      id: "pl16",
      tipo: "ejercicio",
      etiqueta: "Reproducción · Plantas · Reactivo 16 / 16",
      pregunta: "La fresa produce tallos horizontales (estolones) que generan nuevas plantas. Esto es reproducción:",
      opciones: ["Asexual (vegetativa)", "Sexual por semilla", "Por polinización cruzada", "Por esporas"],
      correcta: 0,
      explicacion: "Los estolones de la fresa son tallos rastreros que enraízan y forman nuevas plantas clónicas: reproducción asexual vegetativa.",
      pasos: [
        { pre: "Tallos rastreros: ", math: "\\text{estolón (asexual)}" }
      ]
    },

    // ── RESUMEN ───────────────────────────────────────────────────────────────
    {
      id: "resumen",
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Ideas clave de reproducción",
      puntos: [
        { math: "\\text{Asexual}", texto: "un progenitor, hijos clones (mitosis); rápida, sin variabilidad" },
        { math: "\\text{Tipos asexuales}", texto: "bipartición (bacterias), gemación (levaduras), esporulación (hongos), fragmentación (estrella de mar)" },
        { math: "\\text{Sexual}", texto: "dos progenitores, gametos por meiosis; hijos distintos (variabilidad)" },
        { math: "n + n \\to 2n", texto: "fecundación: óvulo + espermatozoide → cigoto (2n)" },
        { math: "\\text{Plantas}", texto: "sexual por flor (polinización → semilla/fruto); asexual por estacas, bulbos, tubérculos y estolones" }
      ]
    }

  ]
};
