// Datos de la presentación: La Célula (Biología · UNAM · Área 1)
// Estructura por subtema: Teoría → Ejemplos/criterios → Reactivos tipo UNAM.
// Subtemas: Teoría celular · Procariota vs eucariota · Organelos · Membrana y transporte · Ciclo celular (mitosis/meiosis) → Resumen.

export const PRESENTACION = {
  id: "biologia-celula",
  titulo: "La Célula",
  materia: "Biología",
  subtema: "Biología celular",
  slides: [

    // ── PORTADA ───────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "La Célula",
      subtitulo: "Teoría celular · Procariotas y eucariotas · Organelos · Membrana y transporte · Mitosis y meiosis",
      etiqueta: "Biología · UNAM",
      svgDiagram: "cel-portada",
    },

    // ══ SUBTEMA 1 · TEORÍA CELULAR ════════════════════════════════════════════
    {
      id: "teoria-celular",
      tipo: "concepto",
      titulo: "La Teoría Celular",
      etiqueta: "El fundamento de la biología",
      formula: "\\text{Célula = unidad de vida}",
      svgDiagram: "cel-portada",
      items: [
        { math: "\\text{Estructural}", texto: "todos los seres vivos están formados por una o más células" },
        { math: "\\text{Funcional}", texto: "la célula es la unidad mínima que realiza las funciones vitales" },
        { math: "\\text{Origen}", texto: "toda célula proviene de otra célula preexistente (Virchow)" },
        { math: "\\text{Hereditario}", texto: "la información genética (ADN) se transmite de célula a célula" }
      ],
      nota: "Formulada por Schleiden y Schwann (1838-1839) y completada por Virchow (1855: «omnis cellula e cellula»). El postulado bioquímico añade que en todas las células ocurren las mismas reacciones (p. ej. el ciclo de Krebs es idéntico en organismos aerobios)."
    },

    {
      id: "niveles-organizacion",
      tipo: "criterio_detalle",
      titulo: "Niveles de organización",
      etiqueta: "De la molécula al organismo",
      enunciado: "La materia viva se organiza en niveles cada vez más complejos: átomo → molécula → organelo → CÉLULA → tejido → órgano → sistema → organismo. La célula es el primer nivel con vida propia.",
      math: "\\text{átomo} \\to \\text{molécula} \\to \\text{célula} \\to \\text{tejido} \\to \\text{organismo}",
      por_que: "Por debajo de la célula (átomos, moléculas, organelos) hay materia organizada pero sin vida independiente. La célula es el nivel donde aparecen el metabolismo, la reproducción y la respuesta al medio: por eso es la unidad de la vida.",
      math_razon: "\\text{célula} = \\text{primer nivel con funciones vitales completas}"
    },

    // Reactivos · Teoría celular (4)
    {
      id: "tc1",
      tipo: "ejercicio",
      etiqueta: "La célula · Teoría celular · Reactivo 1 / 4",
      pregunta: "La existencia de enzimas del ciclo de Krebs idénticas en todos los organismos de respiración aerobia es una prueba del postulado ________ de la teoría celular.",
      opciones: ["Bioquímico", "Estructural", "Funcional", "Evolutivo"],
      correcta: 0,
      explicacion: "El postulado bioquímico afirma que en todas las células ocurren las mismas reacciones químicas. Que el ciclo de Krebs sea idéntico en todos los aerobios demuestra esa unidad bioquímica.",
      pasos: [
        { pre: "Mismas reacciones en toda célula: ", math: "\\text{postulado bioquímico}" }
      ]
    },

    {
      id: "tc2",
      tipo: "ejercicio",
      etiqueta: "La célula · Teoría celular · Reactivo 2 / 4",
      pregunta: "¿Qué científico propuso que «toda célula proviene de otra célula preexistente»?",
      opciones: ["Rudolf Virchow", "Robert Hooke", "Anton van Leeuwenhoek", "Charles Darwin"],
      correcta: 0,
      explicacion: "Virchow (1855) completó la teoría celular con el principio «omnis cellula e cellula»: las células solo se originan por división de células ya existentes.",
      pasos: [
        { pre: "Origen de la célula: ", math: "\\text{omnis cellula e cellula}" }
      ]
    },

    {
      id: "tc3",
      tipo: "ejercicio",
      etiqueta: "La célula · Teoría celular · Reactivo 3 / 4",
      pregunta: "Robert Hooke acuñó el término «célula» en 1665 al observar al microscopio:",
      opciones: ["Láminas de corcho", "Una gota de agua estancada", "Sangre humana", "Tejido muscular"],
      correcta: 0,
      explicacion: "Hooke observó finas láminas de corcho y vio pequeñas cavidades que le recordaron las celdas de un convento; las llamó «células». En realidad veía las paredes vacías de células vegetales muertas.",
      pasos: [
        { pre: "Corcho al microscopio: ", math: "\\text{celdillas} \\Rightarrow \\text{«células»}" }
      ]
    },

    {
      id: "tc4",
      tipo: "ejercicio",
      etiqueta: "La célula · Teoría celular · Reactivo 4 / 4",
      pregunta: "Según la teoría celular, la unidad estructural y funcional de todos los seres vivos es:",
      opciones: ["La célula", "El átomo", "El tejido", "La molécula de ADN"],
      correcta: 0,
      explicacion: "La célula es la unidad estructural (todo ser vivo está formado por células) y funcional (en ella ocurren las funciones vitales) de la vida.",
      pasos: [
        { pre: "Unidad de vida: ", math: "\\text{célula}" }
      ]
    },

    // ══ SUBTEMA 2 · PROCARIOTA VS EUCARIOTA ═══════════════════════════════════
    {
      id: "proc-euc",
      tipo: "concepto",
      titulo: "Procariota vs. Eucariota",
      etiqueta: "Las dos grandes clases de célula",
      formula: "\\text{Procariota: sin núcleo} \\quad | \\quad \\text{Eucariota: con núcleo}",
      svgDiagram: "cel-proc-euc",
      items: [
        { math: "\\text{Procariota}", texto: "sin núcleo definido; ADN libre en el citoplasma (nucleoide). Ej.: bacterias y arqueas" },
        { math: "\\text{Eucariota}", texto: "núcleo con membrana que encierra el ADN; tiene organelos membranosos. Ej.: animales, plantas, hongos, protistas" },
        { math: "\\text{Ambas}", texto: "tienen membrana plasmática, citoplasma, ribosomas y ADN" }
      ],
      nota: "Procariota = «antes del núcleo»; eucariota = «núcleo verdadero». Las procariotas son más pequeñas (1-10 µm) y antiguas; las eucariotas, mayores y más complejas, surgieron por endosimbiosis."
    },

    // Reactivos · Procariota vs eucariota (3)
    {
      id: "pe1",
      tipo: "ejercicio",
      svgDiagram: "cel-proc-euc",
      etiqueta: "La célula · Procariota / Eucariota · Reactivo 1 / 3",
      pregunta: "La principal diferencia entre una célula procariota y una eucariota es que la procariota:",
      opciones: ["Carece de núcleo definido", "No tiene membrana plasmática", "No posee ADN", "No tiene citoplasma"],
      correcta: 0,
      explicacion: "La célula procariota no tiene núcleo rodeado de membrana: su ADN está libre en el citoplasma (nucleoide). Sí tiene membrana, citoplasma, ribosomas y ADN.",
      pasos: [
        { pre: "Sin envoltura nuclear: ", math: "\\text{ADN libre (nucleoide)}" }
      ]
    },

    {
      id: "pe2",
      tipo: "ejercicio",
      etiqueta: "La célula · Procariota / Eucariota · Reactivo 2 / 3",
      pregunta: "¿Cuál de los siguientes organismos está formado por células procariotas?",
      opciones: ["Una bacteria", "Un hongo", "Una planta", "Un protozoario"],
      correcta: 0,
      explicacion: "Solo las bacterias (y arqueas) son procariotas. Hongos, plantas, animales y protistas (como los protozoarios) son eucariotas.",
      pasos: [
        { pre: "Procariotas: ", math: "\\text{bacterias y arqueas}" }
      ]
    },

    {
      id: "pe3",
      tipo: "ejercicio",
      etiqueta: "La célula · Procariota / Eucariota · Reactivo 3 / 3",
      pregunta: "Una estructura presente TANTO en células procariotas como eucariotas es:",
      opciones: ["El ribosoma", "La mitocondria", "El núcleo", "El retículo endoplásmico"],
      correcta: 0,
      explicacion: "Los ribosomas (síntesis de proteínas) existen en ambos tipos de célula. Mitocondria, núcleo y retículo endoplásmico son organelos exclusivos de las eucariotas.",
      pasos: [
        { pre: "Universal: ", math: "\\text{ribosoma (hace proteínas)}" }
      ]
    },

    // ══ SUBTEMA 3 · ORGANELOS: CÉLULA ANIMAL Y VEGETAL ════════════════════════
    {
      id: "organelos",
      tipo: "concepto",
      titulo: "Organelos y sus funciones",
      etiqueta: "La maquinaria de la célula eucariota",
      formula: "\\text{cada organelo} \\to \\text{una función}",
      svgDiagram: "cel-animal-vegetal",
      items: [
        { math: "\\text{Núcleo}", texto: "guarda el ADN y dirige las funciones celulares" },
        { math: "\\text{Mitocondria}", texto: "respiración celular: produce energía (ATP)" },
        { math: "\\text{Cloroplasto}", texto: "fotosíntesis; SOLO en células vegetales" },
        { math: "\\text{Ribosoma}", texto: "sintetiza proteínas" },
        { math: "\\text{R. endoplásmico}", texto: "transporta y procesa proteínas y lípidos" },
        { math: "\\text{Ap. de Golgi}", texto: "empaca y exporta sustancias" },
        { math: "\\text{Lisosoma}", texto: "digestión intracelular (sobre todo en animales)" }
      ],
      nota: "La célula vegetal se distingue por tener pared celular (celulosa), cloroplastos y una gran vacuola central. La animal tiene centriolos y lisosomas. Ambas comparten núcleo, mitocondrias, ribosomas, retículo y Golgi."
    },

    {
      id: "animal-vegetal",
      tipo: "criterio_detalle",
      titulo: "Célula animal vs. célula vegetal",
      etiqueta: "Qué tiene cada una",
      svgDiagram: "cel-animal-vegetal",
      enunciado: "Ambas son eucariotas, pero la vegetal posee tres estructuras exclusivas: pared celular (rígida, de celulosa), cloroplastos (para la fotosíntesis) y una vacuola central grande. La animal tiene centriolos y lisosomas más desarrollados.",
      math: "\\text{vegetal} = \\text{pared} + \\text{cloroplasto} + \\text{vacuola central}",
      por_que: "La pared celular da soporte y forma fija a la planta; los cloroplastos le permiten fabricar su alimento (autótrofa); la vacuola central almacena agua y mantiene la turgencia. El animal, al moverse y ser heterótrofo, no las necesita.",
      math_razon: "\\text{animal} = \\text{centriolos} + \\text{lisosomas},\\ \\text{sin pared ni cloroplastos}"
    },

    // Reactivos · Organelos (4)
    {
      id: "or1",
      tipo: "ejercicio",
      etiqueta: "La célula · Organelos · Reactivo 1 / 4",
      pregunta: "El organelo encargado de la respiración celular y de producir la mayor parte del ATP es:",
      opciones: ["La mitocondria", "El cloroplasto", "El ribosoma", "El lisosoma"],
      correcta: 0,
      explicacion: "La mitocondria realiza la respiración celular (oxida la glucosa con O₂) y genera ATP. Se la llama «la central energética» de la célula.",
      pasos: [
        { pre: "Energía (ATP): ", math: "\\text{glucosa} + O_2 \\to ATP\\ (\\text{mitocondria})" }
      ]
    },

    {
      id: "or2",
      tipo: "ejercicio",
      svgDiagram: "cel-animal-vegetal",
      etiqueta: "La célula · Organelos · Reactivo 2 / 4",
      pregunta: "¿Qué estructura está presente en la célula VEGETAL pero NO en la animal?",
      opciones: ["El cloroplasto", "La mitocondria", "El núcleo", "El ribosoma"],
      correcta: 0,
      explicacion: "El cloroplasto (donde ocurre la fotosíntesis) es exclusivo de las células vegetales. Mitocondria, núcleo y ribosomas están en ambas.",
      pasos: [
        { pre: "Solo vegetal: ", math: "\\text{cloroplasto, pared, vacuola central}" }
      ]
    },

    {
      id: "or3",
      tipo: "ejercicio",
      etiqueta: "La célula · Organelos · Reactivo 3 / 4",
      pregunta: "La función de digerir partículas y desechos dentro de la célula corresponde a:",
      opciones: ["El lisosoma", "El núcleo", "El cloroplasto", "El centriolo"],
      correcta: 0,
      explicacion: "Los lisosomas contienen enzimas digestivas que degradan partículas, organelos viejos y material que entra a la célula (digestión intracelular).",
      pasos: [
        { pre: "Enzimas digestivas: ", math: "\\text{lisosoma}" }
      ]
    },

    {
      id: "or4",
      tipo: "ejercicio",
      etiqueta: "La célula · Organelos · Reactivo 4 / 4",
      pregunta: "El organelo que empaca, modifica y distribuye las proteínas para su exportación es:",
      opciones: ["El aparato de Golgi", "La mitocondria", "El ribosoma", "La vacuola"],
      correcta: 0,
      explicacion: "El aparato de Golgi recibe proteínas del retículo endoplásmico, las modifica, las empaca en vesículas y las envía a su destino. Es el «centro de empaque y envío».",
      pasos: [
        { pre: "Empaca y exporta: ", math: "\\text{aparato de Golgi}" }
      ]
    },

    // ══ SUBTEMA 4 · MEMBRANA Y TRANSPORTE ═════════════════════════════════════
    {
      id: "membrana",
      tipo: "concepto",
      titulo: "Membrana plasmática",
      etiqueta: "La frontera selectiva de la célula",
      formula: "\\text{bicapa de fosfolípidos} + \\text{proteínas}",
      svgDiagram: "cel-membrana",
      items: [
        { math: "\\text{Estructura}", texto: "doble capa de fosfolípidos con proteínas incrustadas (modelo de mosaico fluido)" },
        { math: "\\text{Función}", texto: "separa el interior del exterior y regula qué entra y sale" },
        { math: "\\text{Permeabilidad}", texto: "es selectiva: deja pasar unas sustancias y otras no" }
      ],
      nota: "TODAS las células tienen membrana plasmática (flexible). Solo plantas, hongos y bacterias tienen ADEMÁS una pared celular rígida por fuera. No confundas membrana (universal) con pared (no universal)."
    },

    {
      id: "transporte",
      tipo: "criterio_detalle",
      titulo: "Transporte a través de la membrana",
      etiqueta: "Pasivo vs. activo",
      svgDiagram: "cel-transporte",
      enunciado: "El transporte PASIVO no gasta energía: las sustancias van de donde hay más a donde hay menos (a favor del gradiente). Incluye difusión y ósmosis (paso de agua). El transporte ACTIVO sí gasta ATP porque mueve sustancias en contra del gradiente.",
      math: "\\text{pasivo: a favor del gradiente (sin ATP)}",
      por_que: "En la difusión y la ósmosis las partículas se mueven solas hacia donde están menos concentradas, hasta equilibrarse: no requiere energía. Para mover algo «cuesta arriba» (de menos a más concentrado), la célula debe gastar ATP: eso es transporte activo.",
      math_razon: "\\text{activo: en contra del gradiente (con ATP)}"
    },

    // Reactivos · Membrana y transporte (4)
    {
      id: "mb1",
      tipo: "ejercicio",
      svgDiagram: "cel-membrana",
      etiqueta: "La célula · Membrana y transporte · Reactivo 1 / 4",
      pregunta: "La membrana plasmática está formada principalmente por:",
      opciones: ["Una bicapa de fosfolípidos con proteínas", "Una pared de celulosa", "Fibras de colágeno", "Una capa de almidón"],
      correcta: 0,
      explicacion: "Según el modelo de mosaico fluido, la membrana es una doble capa de fosfolípidos con proteínas incrustadas que regulan el paso de sustancias.",
      pasos: [
        { pre: "Mosaico fluido: ", math: "\\text{bicapa lipídica} + \\text{proteínas}" }
      ]
    },

    {
      id: "mb2",
      tipo: "ejercicio",
      svgDiagram: "cel-transporte",
      etiqueta: "La célula · Membrana y transporte · Reactivo 2 / 4",
      pregunta: "El paso de agua a través de la membrana, de donde está más diluida a donde está más concentrada, se llama:",
      opciones: ["Ósmosis", "Transporte activo", "Fagocitosis", "Mitosis"],
      correcta: 0,
      explicacion: "La ósmosis es la difusión del AGUA a través de una membrana semipermeable, desde la zona menos concentrada de soluto hacia la más concentrada, sin gastar energía.",
      pasos: [
        { pre: "Difusión del agua: ", math: "\\text{ósmosis (sin ATP)}" }
      ]
    },

    {
      id: "mb3",
      tipo: "ejercicio",
      etiqueta: "La célula · Membrana y transporte · Reactivo 3 / 4",
      pregunta: "Un tipo de transporte que requiere gasto de energía (ATP) porque mueve sustancias en contra del gradiente de concentración es el:",
      opciones: ["Transporte activo", "La difusión simple", "La ósmosis", "La difusión facilitada"],
      correcta: 0,
      explicacion: "El transporte activo mueve sustancias de donde hay menos a donde hay más (en contra del gradiente), por lo que necesita energía en forma de ATP. La difusión y la ósmosis son pasivas.",
      pasos: [
        { pre: "En contra del gradiente: ", math: "\\text{transporte activo (con ATP)}" }
      ]
    },

    {
      id: "mb4",
      tipo: "ejercicio",
      etiqueta: "La célula · Membrana y transporte · Reactivo 4 / 4",
      pregunta: "Se dice que la membrana plasmática es de permeabilidad SELECTIVA porque:",
      opciones: ["Deja pasar unas sustancias y a otras no", "Deja pasar todo libremente", "No deja pasar nada", "Solo deja salir, nunca entrar"],
      correcta: 0,
      explicacion: "La permeabilidad selectiva significa que la membrana controla el paso: permite la entrada y salida de ciertas sustancias y bloquea otras, manteniendo el equilibrio interno.",
      pasos: [
        { pre: "Control del paso: ", math: "\\text{permeabilidad selectiva}" }
      ]
    },

    // ══ SUBTEMA 5 · CICLO CELULAR: MITOSIS Y MEIOSIS ══════════════════════════
    {
      id: "ciclo-celular",
      tipo: "concepto",
      titulo: "Mitosis y meiosis",
      etiqueta: "Cómo se divide la célula",
      formula: "\\text{mitosis: } 1 \\to 2 \\quad | \\quad \\text{meiosis: } 1 \\to 4",
      svgDiagram: "cel-mitosis",
      items: [
        { math: "\\text{Mitosis}", texto: "1 célula → 2 células IDÉNTICAS (mismo n.º de cromosomas). Para crecer y reparar tejidos" },
        { math: "\\text{Meiosis}", texto: "1 célula → 4 células con la MITAD de cromosomas. Forma los gametos (óvulos y espermatozoides)" },
        { math: "\\text{Fases}", texto: "profase → metafase → anafase → telofase" }
      ],
      nota: "Mitosis = células hijas genéticamente iguales a la madre (diploides, 2n). Meiosis = reduce a la mitad (haploides, n) y genera variabilidad; es la base de la reproducción sexual. La fecundación (n + n) restaura el número 2n."
    },

    {
      id: "mitosis-meiosis",
      tipo: "criterio_detalle",
      titulo: "Mitosis vs. meiosis: la diferencia clave",
      etiqueta: "Número de cromosomas",
      svgDiagram: "cel-meiosis",
      enunciado: "En la MITOSIS las dos células hijas conservan el mismo número de cromosomas que la madre (2n → 2n): sirven para crecer y reparar. En la MEIOSIS se hacen dos divisiones seguidas y el número de cromosomas se reduce a la mitad (2n → n): así se forman los gametos.",
      math: "\\text{mitosis: } 2n \\to 2n + 2n",
      por_que: "Si los gametos no redujeran sus cromosomas a la mitad, al unirse en la fecundación el número se duplicaría en cada generación. La meiosis (2n → n) evita eso: óvulo (n) + espermatozoide (n) = cigoto (2n).",
      math_razon: "\\text{meiosis: } 2n \\to n + n + n + n,\\quad n + n \\xrightarrow{\\text{fecundación}} 2n"
    },

    // Reactivos · Ciclo celular (4)
    {
      id: "cc1",
      tipo: "ejercicio",
      svgDiagram: "cel-mitosis",
      etiqueta: "La célula · Ciclo celular · Reactivo 1 / 4",
      pregunta: "El proceso de división celular que produce dos células hijas genéticamente IDÉNTICAS a la célula madre es:",
      opciones: ["La mitosis", "La meiosis", "La fecundación", "La gemación"],
      correcta: 0,
      explicacion: "La mitosis genera dos células hijas con el mismo número y tipo de cromosomas que la madre. Es la base del crecimiento y la reparación de tejidos.",
      pasos: [
        { pre: "Dos células iguales: ", math: "2n \\to 2n + 2n\\ (\\text{mitosis})" }
      ]
    },

    {
      id: "cc2",
      tipo: "ejercicio",
      svgDiagram: "cel-meiosis",
      etiqueta: "La célula · Ciclo celular · Reactivo 2 / 4",
      pregunta: "La meiosis es fundamental para la reproducción sexual porque:",
      opciones: ["Reduce a la mitad el número de cromosomas y forma gametos", "Duplica el número de cromosomas", "Produce células idénticas a la madre", "Repara los tejidos dañados"],
      correcta: 0,
      explicacion: "La meiosis reduce el número de cromosomas a la mitad (de 2n a n) y forma los gametos. Así, al unirse dos gametos en la fecundación, se restablece el número normal (2n).",
      pasos: [
        { pre: "Reducción a la mitad: ", math: "2n \\to n\\ (\\text{gametos})" }
      ]
    },

    {
      id: "cc3",
      tipo: "ejercicio",
      etiqueta: "La célula · Ciclo celular · Reactivo 3 / 4",
      pregunta: "Si una célula humana (2n = 46 cromosomas) realiza meiosis, cada gameto resultante tendrá:",
      opciones: ["23 cromosomas", "46 cromosomas", "92 cromosomas", "12 cromosomas"],
      correcta: 0,
      explicacion: "La meiosis reduce el número a la mitad: 46 / 2 = 23 cromosomas por gameto. Al unirse óvulo (23) y espermatozoide (23) se forma un cigoto con 46.",
      pasos: [
        { pre: "Mitad de 46: ", math: "\\dfrac{46}{2} = 23\\ \\text{cromosomas}" }
      ]
    },

    {
      id: "cc4",
      tipo: "ejercicio",
      etiqueta: "La célula · Ciclo celular · Reactivo 4 / 4",
      pregunta: "El crecimiento de un organismo y la cicatrización de una herida ocurren gracias a la:",
      opciones: ["Mitosis", "Meiosis", "Fecundación", "Fotosíntesis"],
      correcta: 0,
      explicacion: "La mitosis produce nuevas células idénticas que permiten al organismo crecer y reparar tejidos dañados (como al cerrar una herida).",
      pasos: [
        { pre: "Crecer y reparar: ", math: "\\text{mitosis}" }
      ]
    },

    // ── RESUMEN ───────────────────────────────────────────────────────────────
    {
      id: "resumen",
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Ideas clave de la célula",
      puntos: [
        { math: "\\text{Teoría celular}", texto: "la célula es la unidad estructural, funcional y de origen de la vida" },
        { math: "\\text{Procariota}", texto: "sin núcleo (bacterias); eucariota: con núcleo (animales, plantas, hongos, protistas)" },
        { math: "\\text{Mitocondria}", texto: "produce ATP; cloroplasto: fotosíntesis (solo vegetal)" },
        { math: "\\text{Vegetal}", texto: "pared celular + cloroplasto + vacuola central; animal: centriolos y lisosomas" },
        { math: "\\text{Membrana}", texto: "bicapa de fosfolípidos, de permeabilidad selectiva (universal)" },
        { math: "\\text{Transporte}", texto: "pasivo (difusión/ósmosis, sin ATP) vs. activo (con ATP)" },
        { titulo: "Mitosis", texto: "1 → 2 células idénticas (2n); crecer y reparar" },
        { titulo: "Meiosis", texto: "1 → 4 células con la mitad de cromosomas (n); forma gametos" }
      ]
    }

  ]
};
