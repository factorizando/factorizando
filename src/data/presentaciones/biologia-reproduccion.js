// Datos de la presentación: Reproducción (Biología · UNAM · Área 1)
// Subtemas: Asexual vs sexual · Reproducción asexual · Reproducción sexual · Reproducción en plantas → Resumen.

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

    // ══ SUBTEMA 1 · ASEXUAL VS SEXUAL ═════════════════════════════════════════
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

    // ══ SUBTEMA 2 · REPRODUCCIÓN ASEXUAL ══════════════════════════════════════
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

    // Reactivos · Asexual (5)
    {
      id: "as1",
      tipo: "ejercicio",
      svgDiagram: "rep-asexual",
      etiqueta: "Reproducción · Asexual · Reactivo 1 / 5",
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
      etiqueta: "Reproducción · Asexual · Reactivo 2 / 5",
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
      etiqueta: "Reproducción · Asexual · Reactivo 3 / 5",
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
      etiqueta: "Reproducción · Asexual · Reactivo 4 / 5",
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
      etiqueta: "Reproducción · Asexual · Reactivo 5 / 5",
      pregunta: "Una característica de TODA reproducción asexual es que los descendientes son:",
      opciones: ["Genéticamente idénticos al progenitor", "Distintos de ambos padres", "Producto de la fecundación", "Resultado de la meiosis"],
      correcta: 0,
      explicacion: "Como interviene solo la mitosis y un único progenitor, los descendientes son clones: genéticamente idénticos a él. No hay mezcla de genes ni variabilidad.",
      pasos: [
        { pre: "Clones por mitosis: ", math: "\\text{hijos idénticos}" }
      ]
    },

    // ══ SUBTEMA 3 · REPRODUCCIÓN SEXUAL ═══════════════════════════════════════
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

    // Reactivos · Sexual (5)
    {
      id: "sx1",
      tipo: "ejercicio",
      svgDiagram: "rep-sexual",
      etiqueta: "Reproducción · Sexual · Reactivo 1 / 5",
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
      etiqueta: "Reproducción · Sexual · Reactivo 2 / 5",
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
      etiqueta: "Reproducción · Sexual · Reactivo 3 / 5",
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
      etiqueta: "Reproducción · Sexual · Reactivo 4 / 5",
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
      etiqueta: "Reproducción · Sexual · Reactivo 5 / 5",
      pregunta: "Si una especie tiene 2n = 24 cromosomas, ¿cuántos cromosomas tendrá cada uno de sus gametos?",
      opciones: ["12", "24", "48", "6"],
      correcta: 0,
      explicacion: "Los gametos son haploides (n), con la mitad de los cromosomas: 24 / 2 = 12. En la fecundación, 12 + 12 = 24 restablecen el número diploide.",
      pasos: [
        { pre: "Mitad de 24: ", math: "n = \\dfrac{24}{2} = 12" }
      ]
    },

    // ══ SUBTEMA 4 · REPRODUCCIÓN EN PLANTAS ═══════════════════════════════════
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

    // Reactivos · Plantas (4)
    {
      id: "pl1",
      tipo: "ejercicio",
      svgDiagram: "rep-planta",
      etiqueta: "Reproducción · Plantas · Reactivo 1 / 4",
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
      etiqueta: "Reproducción · Plantas · Reactivo 2 / 4",
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
      etiqueta: "Reproducción · Plantas · Reactivo 3 / 4",
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
      etiqueta: "Reproducción · Plantas · Reactivo 4 / 4",
      pregunta: "En la flor, la estructura que produce los granos de polen (gameto masculino) es:",
      opciones: ["El estambre", "El pistilo", "El pétalo", "El sépalo"],
      correcta: 0,
      explicacion: "El estambre es el órgano masculino de la flor: en su antera se producen los granos de polen. El pistilo es el órgano femenino, que contiene el óvulo.",
      pasos: [
        { pre: "Órgano masculino: ", math: "\\text{estambre} \\to \\text{polen}" }
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
        { math: "\\text{Plantas}", texto: "sexual por flor (polinización → semilla/fruto); asexual por estacas, bulbos y tubérculos" }
      ]
    }

  ]
};
