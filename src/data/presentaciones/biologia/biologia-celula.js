// Datos de la presentación: La Célula (Biología · UNAM · Área 1)
// Estructura por subtema: Teoría → Ejemplos/criterios → Reactivos tipo UNAM (15-20 por subtema).
// Subtemas: Historia de la célula · Teoría celular · Procariota vs eucariota · Organelos · Membrana y transporte · Ciclo celular (mitosis/meiosis) → Resumen.

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
      subtitulo: "Historia · Teoría celular · Procariotas y eucariotas · Organelos · Membrana y transporte · Mitosis y meiosis",
      etiqueta: "Biología · UNAM",
      svgDiagram: "cel-portada",
    },

    // ══ SUBTEMA 1 · HISTORIA DE LA CÉLULA ═════════════════════════════════════
    {
      id: "historia",
      tipo: "concepto",
      titulo: "Historia de la célula",
      etiqueta: "Quiénes construyeron la teoría celular",
      formula: "\\text{microscopio} \\Rightarrow \\text{descubrir la célula}",
      svgDiagram: "cel-historia",
      items: [
        { math: "\\text{Hooke (1665)}", texto: "observó corcho al microscopio y acuñó la palabra «célula»" },
        { math: "\\text{Leeuwenhoek (1674)}", texto: "perfeccionó el microscopio y vio los primeros microorganismos vivos («animálculos»)" },
        { math: "\\text{Brown (1831)}", texto: "describió el núcleo de la célula" },
        { math: "\\text{Schleiden y Schwann}", texto: "(1838-1839) formularon la teoría celular: plantas y animales están hechos de células" },
        { math: "\\text{Virchow (1855)}", texto: "«toda célula proviene de otra célula» (omnis cellula e cellula)" }
      ],
      nota: "El descubrimiento de la célula fue posible gracias al microscopio. Hooke vio celdillas vacías en el corcho; Leeuwenhoek, microorganismos vivos. Schleiden (botánico) y Schwann (zoólogo) unieron las observaciones en la teoría celular, y Virchow añadió que toda célula nace de otra, refutando la generación espontánea (que Pasteur también desmintió)."
    },

    {
      id: "historia-detalle",
      tipo: "criterio_detalle",
      titulo: "La línea del tiempo",
      etiqueta: "De Hooke a Virchow",
      svgDiagram: "cel-historia",
      enunciado: "Robert HOOKE (1665) llamó «células» a las celdillas del corcho que vio al microscopio (en realidad eran paredes de células muertas). Anton van LEEUWENHOEK observó por primera vez seres vivos microscópicos. SCHLEIDEN y SCHWANN concluyeron que todos los seres vivos están formados por células. VIRCHOW completó la teoría: toda célula procede de otra preexistente.",
      math: "\\text{Hooke} \\to \\text{Leeuwenhoek} \\to \\text{Schleiden/Schwann} \\to \\text{Virchow}",
      por_que: "Cada autor aportó una pieza: Hooke nombró la célula; Leeuwenhoek mostró que había vida microscópica; Schleiden y Schwann generalizaron a plantas y animales; Virchow explicó el origen de las células. Juntos construyeron la teoría celular, una de las ideas fundamentales de la biología.",
      math_razon: "\\text{microscopio} + \\text{observación} = \\text{teoría celular}"
    },

    // Reactivos · Historia (16)
    {
      id: "hi1",
      tipo: "ejercicio",
      svgDiagram: "cel-historia",
      etiqueta: "La célula · Historia · Reactivo 1 / 16",
      pregunta: "¿Quién acuñó el término «célula» en 1665 al observar láminas de corcho con un microscopio?",
      opciones: ["Robert Hooke", "Anton van Leeuwenhoek", "Rudolf Virchow", "Theodor Schwann"],
      correcta: 0,
      explicacion: "Robert Hooke observó corcho al microscopio y vio pequeñas cavidades que le recordaron las celdas de un convento; las llamó «células» (cellula = celdilla).",
      pasos: [
        { pre: "Corcho al microscopio: ", math: "\\text{Hooke} \\Rightarrow \\text{«célula»}" }
      ]
    },
    {
      id: "hi2",
      tipo: "ejercicio",
      etiqueta: "La célula · Historia · Reactivo 2 / 16",
      pregunta: "Lo que Robert Hooke observó realmente en el corcho fueron:",
      opciones: ["Las paredes de células vegetales muertas", "Bacterias vivas", "Núcleos celulares", "Glóbulos rojos"],
      correcta: 0,
      explicacion: "El corcho es tejido muerto: Hooke vio las paredes celulares vacías (las celdillas), no células vivas ni su contenido.",
      pasos: [
        { pre: "Tejido muerto: ", math: "\\text{paredes vacías (celdillas)}" }
      ]
    },
    {
      id: "hi3",
      tipo: "ejercicio",
      etiqueta: "La célula · Historia · Reactivo 3 / 16",
      pregunta: "El instrumento que hizo posible el descubrimiento de la célula y el desarrollo de la teoría celular fue:",
      opciones: ["El microscopio", "El telescopio", "La balanza", "El termómetro"],
      correcta: 0,
      explicacion: "Sin el microscopio no se habría podido ver la célula, que es invisible a simple vista. Su invención y mejora fueron clave para toda la teoría celular.",
      pasos: [
        { pre: "Permite ver lo diminuto: ", math: "\\text{microscopio}" }
      ]
    },
    {
      id: "hi4",
      tipo: "ejercicio",
      etiqueta: "La célula · Historia · Reactivo 4 / 16",
      pregunta: "¿Quién fue el primero en observar microorganismos vivos (a los que llamó «animálculos») al perfeccionar el microscopio?",
      opciones: ["Anton van Leeuwenhoek", "Robert Hooke", "Matthias Schleiden", "Louis Pasteur"],
      correcta: 0,
      explicacion: "Leeuwenhoek, con microscopios de gran aumento que él mismo construyó, observó por primera vez bacterias, protozoarios y espermatozoides: los «animálculos».",
      pasos: [
        { pre: "Primeros microorganismos vivos: ", math: "\\text{Leeuwenhoek}" }
      ]
    },
    {
      id: "hi5",
      tipo: "ejercicio",
      etiqueta: "La célula · Historia · Reactivo 5 / 16",
      pregunta: "Por sus observaciones de microorganismos, a Anton van Leeuwenhoek se le considera el padre de la:",
      opciones: ["Microbiología", "Genética", "Anatomía", "Ecología"],
      correcta: 0,
      explicacion: "Al ser el primero en observar y describir microorganismos, Leeuwenhoek es considerado el padre de la microbiología.",
      pasos: [
        { pre: "Estudio de los microorganismos: ", math: "\\text{microbiología}" }
      ]
    },
    {
      id: "hi6",
      tipo: "ejercicio",
      etiqueta: "La célula · Historia · Reactivo 6 / 16",
      pregunta: "El botánico que concluyó que todas las plantas están formadas por células fue:",
      opciones: ["Matthias Schleiden", "Theodor Schwann", "Robert Hooke", "Rudolf Virchow"],
      correcta: 0,
      explicacion: "Matthias Schleiden, en 1838, propuso que todos los tejidos de las plantas están constituidos por células.",
      pasos: [
        { pre: "Las plantas son células: ", math: "\\text{Schleiden (botánico)}" }
      ]
    },
    {
      id: "hi7",
      tipo: "ejercicio",
      etiqueta: "La célula · Historia · Reactivo 7 / 16",
      pregunta: "El zoólogo que extendió la idea anterior a los animales, afirmando que también están formados por células, fue:",
      opciones: ["Theodor Schwann", "Matthias Schleiden", "Anton van Leeuwenhoek", "Charles Darwin"],
      correcta: 0,
      explicacion: "Theodor Schwann, en 1839, concluyó que los animales también están formados por células, generalizando la teoría a todos los seres vivos.",
      pasos: [
        { pre: "Los animales son células: ", math: "\\text{Schwann (zoólogo)}" }
      ]
    },
    {
      id: "hi8",
      tipo: "ejercicio",
      etiqueta: "La célula · Historia · Reactivo 8 / 16",
      pregunta: "Se considera que la teoría celular fue formulada (1838-1839) por:",
      opciones: ["Schleiden y Schwann", "Hooke y Leeuwenhoek", "Darwin y Mendel", "Watson y Crick"],
      correcta: 0,
      explicacion: "Schleiden (plantas) y Schwann (animales) integraron sus observaciones y formularon la teoría celular: todos los seres vivos están formados por células.",
      pasos: [
        { pre: "Formularon la teoría celular: ", math: "\\text{Schleiden + Schwann}" }
      ]
    },
    {
      id: "hi9",
      tipo: "ejercicio",
      etiqueta: "La célula · Historia · Reactivo 9 / 16",
      pregunta: "La frase «omnis cellula e cellula» (toda célula proviene de otra célula) fue propuesta por:",
      opciones: ["Rudolf Virchow", "Robert Hooke", "Matthias Schleiden", "Gregor Mendel"],
      correcta: 0,
      explicacion: "Rudolf Virchow (1855) completó la teoría celular con este principio: las células solo se forman por la división de células ya existentes.",
      pasos: [
        { pre: "Origen de la célula: ", math: "\\text{Virchow: omnis cellula e cellula}" }
      ]
    },
    {
      id: "hi10",
      tipo: "ejercicio",
      etiqueta: "La célula · Historia · Reactivo 10 / 16",
      pregunta: "El científico que describió el núcleo como una estructura constante de la célula fue:",
      opciones: ["Robert Brown", "Robert Hooke", "Louis Pasteur", "Theodor Schwann"],
      correcta: 0,
      explicacion: "Robert Brown, hacia 1831, observó y nombró el núcleo de la célula como un componente característico de las células vegetales.",
      pasos: [
        { pre: "Describió el núcleo: ", math: "\\text{Robert Brown}" }
      ]
    },
    {
      id: "hi11",
      tipo: "ejercicio",
      etiqueta: "La célula · Historia · Reactivo 11 / 16",
      pregunta: "La idea de la generación espontánea (que la vida surge de la materia inerte) fue refutada experimentalmente por:",
      opciones: ["Louis Pasteur", "Robert Hooke", "Matthias Schleiden", "Anton van Leeuwenhoek"],
      correcta: 0,
      explicacion: "Louis Pasteur demostró que los microorganismos provienen de otros microorganismos, refutando la generación espontánea y apoyando el principio de Virchow.",
      pasos: [
        { pre: "Refutó la generación espontánea: ", math: "\\text{Pasteur}" }
      ]
    },
    {
      id: "hi12",
      tipo: "ejercicio",
      etiqueta: "La célula · Historia · Reactivo 12 / 16",
      pregunta: "La palabra «célula» proviene del latín cellula, que significa:",
      opciones: ["Celdilla o cuartito pequeño", "Núcleo", "Vida", "Agua"],
      correcta: 0,
      explicacion: "Hooke usó «célula» (cellula = celdilla) porque las cavidades del corcho le recordaban las pequeñas celdas o cuartos de un monasterio.",
      pasos: [
        { pre: "cellula = ", math: "\\text{celdilla pequeña}" }
      ]
    },
    {
      id: "hi13",
      tipo: "ejercicio",
      etiqueta: "La célula · Historia · Reactivo 13 / 16",
      pregunta: "¿Cuál es el orden cronológico correcto de estos aportes a la teoría celular?",
      opciones: ["Hooke → Leeuwenhoek → Schleiden/Schwann → Virchow", "Virchow → Hooke → Schwann → Leeuwenhoek", "Schwann → Hooke → Virchow → Leeuwenhoek", "Leeuwenhoek → Virchow → Hooke → Schleiden"],
      correcta: 0,
      explicacion: "Hooke (1665) nombró la célula; Leeuwenhoek (1674) vio microorganismos; Schleiden y Schwann (1838-39) formularon la teoría; Virchow (1855) la completó.",
      pasos: [
        { pre: "Cronología: ", math: "1665 \\to 1674 \\to 1838 \\to 1855" }
      ]
    },
    {
      id: "hi14",
      tipo: "ejercicio",
      etiqueta: "La célula · Historia · Reactivo 14 / 16",
      pregunta: "Anton van Leeuwenhoek destacó porque, además de observar microorganismos, él mismo:",
      opciones: ["Construyó y perfeccionó sus microscopios", "Inventó la imprenta", "Descubrió la penicilina", "Formuló las leyes de la herencia"],
      correcta: 0,
      explicacion: "Leeuwenhoek fabricaba sus propias lentes y microscopios de gran calidad, lo que le permitió alcanzar aumentos suficientes para ver bacterias y protozoarios.",
      pasos: [
        { pre: "Mejoró el instrumento: ", math: "\\text{microscopios propios}" }
      ]
    },
    {
      id: "hi15",
      tipo: "ejercicio",
      etiqueta: "La célula · Historia · Reactivo 15 / 16",
      pregunta: "El aporte de Virchow corresponde al postulado de la teoría celular que se refiere al ________ de las células.",
      opciones: ["origen", "tamaño", "color", "movimiento"],
      correcta: 0,
      explicacion: "Virchow aportó el postulado sobre el origen: toda célula se forma a partir de otra célula preexistente (continuidad genética de la vida).",
      pasos: [
        { pre: "«célula de célula»: ", math: "\\text{postulado de origen}" }
      ]
    },
    {
      id: "hi16",
      tipo: "ejercicio",
      etiqueta: "La célula · Historia · Reactivo 16 / 16",
      pregunta: "La principal contribución conjunta de Schleiden y Schwann a la biología fue:",
      opciones: ["Establecer que todos los seres vivos están formados por células", "Descubrir el ADN", "Clasificar a los seres vivos en cinco reinos", "Explicar la evolución por selección natural"],
      correcta: 0,
      explicacion: "Schleiden (plantas) y Schwann (animales) generalizaron que todos los seres vivos están compuestos por células: el primer postulado de la teoría celular.",
      pasos: [
        { pre: "Generalización: ", math: "\\text{todo ser vivo} = \\text{células}" }
      ]
    },

    // ══ SUBTEMA 2 · TEORÍA CELULAR ════════════════════════════════════════════
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
      nota: "La teoría celular tiene varios postulados. El estructural (todo ser vivo está hecho de células), el funcional (en la célula ocurren las funciones vitales), el de origen (toda célula nace de otra) y el bioquímico (en todas las células ocurren las mismas reacciones, como el ciclo de Krebs)."
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

    // Reactivos · Teoría celular (16)
    {
      id: "tc1",
      tipo: "ejercicio",
      etiqueta: "La célula · Teoría celular · Reactivo 1 / 16",
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
      etiqueta: "La célula · Teoría celular · Reactivo 2 / 16",
      pregunta: "Según la teoría celular, la unidad estructural y funcional de todos los seres vivos es:",
      opciones: ["La célula", "El átomo", "El tejido", "La molécula de ADN"],
      correcta: 0,
      explicacion: "La célula es la unidad estructural (todo ser vivo está formado por células) y funcional (en ella ocurren las funciones vitales) de la vida.",
      pasos: [
        { pre: "Unidad de vida: ", math: "\\text{célula}" }
      ]
    },
    {
      id: "tc3",
      tipo: "ejercicio",
      etiqueta: "La célula · Teoría celular · Reactivo 3 / 16",
      pregunta: "El postulado que afirma que «todos los seres vivos están formados por una o más células» es el:",
      opciones: ["Estructural", "Funcional", "De origen", "Bioquímico"],
      correcta: 0,
      explicacion: "El postulado estructural establece que la célula es el componente básico de construcción de todos los seres vivos.",
      pasos: [
        { pre: "Toda forma viva = células: ", math: "\\text{postulado estructural}" }
      ]
    },
    {
      id: "tc4",
      tipo: "ejercicio",
      etiqueta: "La célula · Teoría celular · Reactivo 4 / 16",
      pregunta: "Que en la célula ocurran la nutrición, la respiración y la reproducción ilustra el postulado:",
      opciones: ["Funcional", "Estructural", "De origen", "Hereditario"],
      correcta: 0,
      explicacion: "El postulado funcional indica que la célula es la unidad donde se realizan las funciones vitales del organismo.",
      pasos: [
        { pre: "Funciones vitales en la célula: ", math: "\\text{postulado funcional}" }
      ]
    },
    {
      id: "tc5",
      tipo: "ejercicio",
      etiqueta: "La célula · Teoría celular · Reactivo 5 / 16",
      pregunta: "El postulado de origen de la teoría celular sostiene que toda célula:",
      opciones: ["Proviene de otra célula preexistente", "Surge de la materia inerte", "Se origina del núcleo", "Nace de una proteína"],
      correcta: 0,
      explicacion: "El postulado de origen (Virchow) afirma que las células solo se forman a partir de la división de células ya existentes.",
      pasos: [
        { pre: "Continuidad celular: ", math: "\\text{célula de célula}" }
      ]
    },
    {
      id: "tc6",
      tipo: "ejercicio",
      etiqueta: "La célula · Teoría celular · Reactivo 6 / 16",
      pregunta: "Un organismo formado por una sola célula, como una bacteria o una ameba, se llama:",
      opciones: ["Unicelular", "Pluricelular", "Acelular", "Multicelular"],
      correcta: 0,
      explicacion: "Los organismos unicelulares están formados por una única célula que realiza todas las funciones vitales (bacterias, amebas, paramecios, levaduras).",
      pasos: [
        { pre: "Una sola célula: ", math: "\\text{unicelular}" }
      ]
    },
    {
      id: "tc7",
      tipo: "ejercicio",
      etiqueta: "La célula · Teoría celular · Reactivo 7 / 16",
      pregunta: "Los seres humanos, los árboles y los perros, formados por muchas células, son organismos:",
      opciones: ["Pluricelulares", "Unicelulares", "Procariotas", "Acelulares"],
      correcta: 0,
      explicacion: "Los organismos pluricelulares están formados por muchas células especializadas que se organizan en tejidos y órganos.",
      pasos: [
        { pre: "Muchas células: ", math: "\\text{pluricelular}" }
      ]
    },
    {
      id: "tc8",
      tipo: "ejercicio",
      etiqueta: "La célula · Teoría celular · Reactivo 8 / 16",
      pregunta: "El postulado que se relaciona con la transmisión de la información genética (ADN) de una célula a sus descendientes es el:",
      opciones: ["Hereditario", "Estructural", "Funcional", "Bioquímico"],
      correcta: 0,
      explicacion: "El postulado hereditario o de continuidad genética indica que el ADN, con la información de la célula, se transmite de una célula a otra durante la división.",
      pasos: [
        { pre: "Transmite el ADN: ", math: "\\text{postulado hereditario}" }
      ]
    },
    {
      id: "tc9",
      tipo: "ejercicio",
      etiqueta: "La célula · Teoría celular · Reactivo 9 / 16",
      pregunta: "¿Cuál de los siguientes NO es un ser vivo formado por células?",
      opciones: ["Un virus", "Una bacteria", "Un hongo", "Una planta"],
      correcta: 0,
      explicacion: "Los virus no son células: carecen de estructura celular y de metabolismo propio, y solo se reproducen dentro de una célula hospedera. Por eso muchos no los consideran seres vivos en sentido estricto.",
      pasos: [
        { pre: "No tiene células: ", math: "\\text{virus (acelular)}" }
      ]
    },
    {
      id: "tc10",
      tipo: "ejercicio",
      etiqueta: "La célula · Teoría celular · Reactivo 10 / 16",
      pregunta: "El postulado bioquímico de la teoría celular se refiere a que en todas las células:",
      opciones: ["Ocurren reacciones químicas semejantes", "Hay el mismo número de cromosomas", "Existe pared celular", "Hay cloroplastos"],
      correcta: 0,
      explicacion: "El postulado bioquímico señala que las reacciones metabólicas (como la respiración y la síntesis de ATP) son básicamente las mismas en todas las células.",
      pasos: [
        { pre: "Misma química: ", math: "\\text{postulado bioquímico}" }
      ]
    },
    {
      id: "tc11",
      tipo: "ejercicio",
      etiqueta: "La célula · Teoría celular · Reactivo 11 / 16",
      pregunta: "El nivel de organización biológica más pequeño que se considera con vida es:",
      opciones: ["La célula", "El átomo", "La molécula", "El organelo"],
      correcta: 0,
      explicacion: "Aunque átomos, moléculas y organelos forman parte de los seres vivos, la célula es el primer nivel con vida propia: el más pequeño capaz de realizar todas las funciones vitales.",
      pasos: [
        { pre: "Primer nivel con vida: ", math: "\\text{célula}" }
      ]
    },
    {
      id: "tc12",
      tipo: "ejercicio",
      etiqueta: "La célula · Teoría celular · Reactivo 12 / 16",
      pregunta: "La teoría celular es aplicable a:",
      opciones: ["Todos los seres vivos", "Solo las plantas", "Solo los animales", "Solo los microorganismos"],
      correcta: 0,
      explicacion: "La teoría celular es universal: todos los seres vivos, sin excepción, están formados por células (uni o pluricelulares).",
      pasos: [
        { pre: "Universal: ", math: "\\text{todos los seres vivos}" }
      ]
    },
    {
      id: "tc13",
      tipo: "ejercicio",
      etiqueta: "La célula · Teoría celular · Reactivo 13 / 16",
      pregunta: "Un ejemplo correcto de organismo unicelular es:",
      opciones: ["El paramecio", "El ser humano", "El pino", "La medusa"],
      correcta: 0,
      explicacion: "El paramecio es un protozoario unicelular. El ser humano, el pino y la medusa son pluricelulares.",
      pasos: [
        { pre: "Una sola célula: ", math: "\\text{paramecio (protozoario)}" }
      ]
    },
    {
      id: "tc14",
      tipo: "ejercicio",
      etiqueta: "La célula · Teoría celular · Reactivo 14 / 16",
      pregunta: "Ordena de menor a mayor complejidad: célula, tejido, órgano, organismo.",
      opciones: ["Célula → tejido → órgano → organismo", "Órgano → célula → tejido → organismo", "Tejido → célula → organismo → órgano", "Organismo → órgano → tejido → célula"],
      correcta: 0,
      explicacion: "Las células se agrupan en tejidos, los tejidos forman órganos y los órganos integran al organismo. Es el orden creciente de complejidad.",
      pasos: [
        { pre: "Creciente: ", math: "\\text{célula} \\to \\text{tejido} \\to \\text{órgano} \\to \\text{organismo}" }
      ]
    },
    {
      id: "tc15",
      tipo: "ejercicio",
      etiqueta: "La célula · Teoría celular · Reactivo 15 / 16",
      pregunta: "Un conjunto de células semejantes que realizan la misma función forma un:",
      opciones: ["Tejido", "Órgano", "Sistema", "Organelo"],
      correcta: 0,
      explicacion: "Un tejido es un grupo de células parecidas especializadas en una función (por ejemplo, el tejido muscular). Varios tejidos forman un órgano.",
      pasos: [
        { pre: "Células iguales con una función: ", math: "\\text{tejido}" }
      ]
    },
    {
      id: "tc16",
      tipo: "ejercicio",
      etiqueta: "La célula · Teoría celular · Reactivo 16 / 16",
      pregunta: "La afirmación «la célula es la unidad de origen de todos los seres vivos» significa que:",
      opciones: ["Todo organismo comienza a partir de células", "Las células no se reproducen", "La vida surge de minerales", "Cada célula es un organismo completo"],
      correcta: 0,
      explicacion: "Como unidad de origen, toda forma de vida comienza a partir de una o más células (por ejemplo, un nuevo organismo se inicia con el cigoto, una célula).",
      pasos: [
        { pre: "Todo empieza en células: ", math: "\\text{unidad de origen}" }
      ]
    },

    // ══ SUBTEMA 3 · PROCARIOTA VS EUCARIOTA ═══════════════════════════════════
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
      nota: "Procariota = «antes del núcleo»; eucariota = «núcleo verdadero». Las procariotas son más pequeñas (1-10 µm) y antiguas; las eucariotas, mayores y más complejas, surgieron por endosimbiosis (mitocondrias y cloroplastos derivan de antiguas bacterias)."
    },

    // Reactivos · Procariota vs eucariota (16)
    {
      id: "pe1",
      tipo: "ejercicio",
      svgDiagram: "cel-proc-euc",
      etiqueta: "La célula · Procariota / Eucariota · Reactivo 1 / 16",
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
      etiqueta: "La célula · Procariota / Eucariota · Reactivo 2 / 16",
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
      etiqueta: "La célula · Procariota / Eucariota · Reactivo 3 / 16",
      pregunta: "Una estructura presente TANTO en células procariotas como eucariotas es:",
      opciones: ["El ribosoma", "La mitocondria", "El núcleo", "El retículo endoplásmico"],
      correcta: 0,
      explicacion: "Los ribosomas (síntesis de proteínas) existen en ambos tipos de célula. Mitocondria, núcleo y retículo endoplásmico son organelos exclusivos de las eucariotas.",
      pasos: [
        { pre: "Universal: ", math: "\\text{ribosoma (hace proteínas)}" }
      ]
    },
    {
      id: "pe4",
      tipo: "ejercicio",
      svgDiagram: "cel-proc-euc",
      etiqueta: "La célula · Procariota / Eucariota · Reactivo 4 / 16",
      pregunta: "El término «eucariota» significa literalmente:",
      opciones: ["Núcleo verdadero", "Sin núcleo", "Célula pequeña", "Muchos núcleos"],
      correcta: 0,
      explicacion: "Eucariota viene de «eu» (verdadero) y «cariote» (núcleo): célula con núcleo verdadero, delimitado por membrana.",
      pasos: [
        { pre: "eu + cariote: ", math: "\\text{núcleo verdadero}" }
      ]
    },
    {
      id: "pe5",
      tipo: "ejercicio",
      etiqueta: "La célula · Procariota / Eucariota · Reactivo 5 / 16",
      pregunta: "En una célula procariota, el material genético se encuentra:",
      opciones: ["Libre en el citoplasma (nucleoide)", "Dentro de un núcleo con membrana", "En las mitocondrias", "En el aparato de Golgi"],
      correcta: 0,
      explicacion: "Al no tener núcleo, el ADN de las procariotas está disperso en una región del citoplasma llamada nucleoide.",
      pasos: [
        { pre: "Sin núcleo: ", math: "\\text{ADN en el nucleoide}" }
      ]
    },
    {
      id: "pe6",
      tipo: "ejercicio",
      etiqueta: "La célula · Procariota / Eucariota · Reactivo 6 / 16",
      pregunta: "Los organelos membranosos como mitocondrias y aparato de Golgi son exclusivos de las células:",
      opciones: ["Eucariotas", "Procariotas", "Bacterianas", "De las arqueas"],
      correcta: 0,
      explicacion: "Solo las células eucariotas poseen organelos rodeados de membrana (mitocondrias, Golgi, retículo, etc.). Las procariotas carecen de ellos.",
      pasos: [
        { pre: "Con organelos membranosos: ", math: "\\text{eucariota}" }
      ]
    },
    {
      id: "pe7",
      tipo: "ejercicio",
      etiqueta: "La célula · Procariota / Eucariota · Reactivo 7 / 16",
      pregunta: "En cuanto al tamaño, las células procariotas en general son ________ que las eucariotas.",
      opciones: ["más pequeñas", "más grandes", "del mismo tamaño", "siempre invisibles al microscopio"],
      correcta: 0,
      explicacion: "Las procariotas suelen medir 1-10 µm, mientras que las eucariotas miden de 10 a 100 µm: las procariotas son típicamente más pequeñas.",
      pasos: [
        { pre: "Tamaño: ", math: "\\text{procariota} < \\text{eucariota}" }
      ]
    },
    {
      id: "pe8",
      tipo: "ejercicio",
      etiqueta: "La célula · Procariota / Eucariota · Reactivo 8 / 16",
      pregunta: "¿Cuál de los siguientes grupos está formado SOLO por organismos eucariotas?",
      opciones: ["Plantas, animales y hongos", "Bacterias y arqueas", "Bacterias y plantas", "Arqueas y hongos"],
      correcta: 0,
      explicacion: "Plantas, animales, hongos y protistas son eucariotas. Bacterias y arqueas son procariotas.",
      pasos: [
        { pre: "Eucariotas: ", math: "\\text{plantas, animales, hongos, protistas}" }
      ]
    },
    {
      id: "pe9",
      tipo: "ejercicio",
      etiqueta: "La célula · Procariota / Eucariota · Reactivo 9 / 16",
      pregunta: "El término «procariota» significa:",
      opciones: ["Antes del núcleo", "Con dos núcleos", "Núcleo verdadero", "Sin pared"],
      correcta: 0,
      explicacion: "Procariota viene de «pro» (antes) y «cariote» (núcleo): célula sin núcleo verdadero, anterior a la aparición del núcleo en la evolución.",
      pasos: [
        { pre: "pro + cariote: ", math: "\\text{antes del núcleo}" }
      ]
    },
    {
      id: "pe10",
      tipo: "ejercicio",
      etiqueta: "La célula · Procariota / Eucariota · Reactivo 10 / 16",
      pregunta: "Según la teoría endosimbiótica, las mitocondrias y los cloroplastos se originaron a partir de:",
      opciones: ["Bacterias que vivían dentro de otra célula", "Fragmentos del núcleo", "Virus", "Cristales minerales"],
      correcta: 0,
      explicacion: "La teoría endosimbiótica (Lynn Margulis) propone que mitocondrias y cloroplastos derivan de antiguas bacterias que fueron englobadas por una célula y vivieron en simbiosis dentro de ella.",
      pasos: [
        { pre: "Endosimbiosis: ", math: "\\text{bacterias} \\to \\text{organelos}" }
      ]
    },
    {
      id: "pe11",
      tipo: "ejercicio",
      etiqueta: "La célula · Procariota / Eucariota · Reactivo 11 / 16",
      pregunta: "¿Qué tipo de célula apareció primero en la historia de la vida?",
      opciones: ["La procariota", "La eucariota", "La célula animal", "La célula vegetal"],
      correcta: 0,
      explicacion: "Las células procariotas son las más antiguas; las eucariotas, más complejas, aparecieron mucho después (en parte por endosimbiosis).",
      pasos: [
        { pre: "Más antigua: ", math: "\\text{procariota}" }
      ]
    },
    {
      id: "pe12",
      tipo: "ejercicio",
      etiqueta: "La célula · Procariota / Eucariota · Reactivo 12 / 16",
      pregunta: "El ADN de la mayoría de las bacterias tiene forma:",
      opciones: ["Circular", "Lineal con extremos libres", "Ramificada", "De doble núcleo"],
      correcta: 0,
      explicacion: "Las bacterias tienen un cromosoma de ADN circular en el nucleoide, a diferencia del ADN lineal organizado en cromosomas de los eucariotas.",
      pasos: [
        { pre: "Bacteria: ", math: "\\text{ADN circular}" }
      ]
    },
    {
      id: "pe13",
      tipo: "ejercicio",
      etiqueta: "La célula · Procariota / Eucariota · Reactivo 13 / 16",
      pregunta: "¿Cuál de estas estructuras NO se encuentra en una célula procariota?",
      opciones: ["Núcleo con membrana", "Membrana plasmática", "Ribosomas", "Citoplasma"],
      correcta: 0,
      explicacion: "Las procariotas carecen de núcleo con membrana, pero sí tienen membrana plasmática, ribosomas y citoplasma.",
      pasos: [
        { pre: "Ausente en procariota: ", math: "\\text{núcleo membranoso}" }
      ]
    },
    {
      id: "pe14",
      tipo: "ejercicio",
      etiqueta: "La célula · Procariota / Eucariota · Reactivo 14 / 16",
      pregunta: "Una levadura, por tener núcleo y organelos membranosos, es una célula:",
      opciones: ["Eucariota", "Procariota", "Bacteriana", "Sin ADN"],
      correcta: 0,
      explicacion: "Las levaduras son hongos unicelulares eucariotas: tienen núcleo verdadero y organelos como mitocondrias.",
      pasos: [
        { pre: "Hongo con núcleo: ", math: "\\text{eucariota}" }
      ]
    },
    {
      id: "pe15",
      tipo: "ejercicio",
      etiqueta: "La célula · Procariota / Eucariota · Reactivo 15 / 16",
      pregunta: "Tanto las células procariotas como las eucariotas comparten:",
      opciones: ["Membrana plasmática, citoplasma, ribosomas y ADN", "Núcleo y mitocondrias", "Cloroplastos y pared de celulosa", "Aparato de Golgi y lisosomas"],
      correcta: 0,
      explicacion: "Ambos tipos de célula tienen membrana plasmática, citoplasma, ribosomas y material genético (ADN). El resto son exclusivos de las eucariotas.",
      pasos: [
        { pre: "En común: ", math: "\\text{membrana, citoplasma, ribosomas, ADN}" }
      ]
    },
    {
      id: "pe16",
      tipo: "ejercicio",
      etiqueta: "La célula · Procariota / Eucariota · Reactivo 16 / 16",
      pregunta: "El reino que agrupa a los organismos procariotas es:",
      opciones: ["Monera", "Protista", "Fungi", "Plantae"],
      correcta: 0,
      explicacion: "El reino Monera reúne a los organismos procariotas: bacterias y arqueas.",
      pasos: [
        { pre: "Procariotas: ", math: "\\text{reino Monera}" }
      ]
    },

    // ══ SUBTEMA 4 · ORGANELOS: CÉLULA ANIMAL Y VEGETAL ════════════════════════
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

    // Reactivos · Organelos (16)
    {
      id: "or1",
      tipo: "ejercicio",
      etiqueta: "La célula · Organelos · Reactivo 1 / 16",
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
      etiqueta: "La célula · Organelos · Reactivo 2 / 16",
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
      etiqueta: "La célula · Organelos · Reactivo 3 / 16",
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
      etiqueta: "La célula · Organelos · Reactivo 4 / 16",
      pregunta: "El organelo que empaca, modifica y distribuye las proteínas para su exportación es:",
      opciones: ["El aparato de Golgi", "La mitocondria", "El ribosoma", "La vacuola"],
      correcta: 0,
      explicacion: "El aparato de Golgi recibe proteínas del retículo endoplásmico, las modifica, las empaca en vesículas y las envía a su destino. Es el «centro de empaque y envío».",
      pasos: [
        { pre: "Empaca y exporta: ", math: "\\text{aparato de Golgi}" }
      ]
    },
    {
      id: "or5",
      tipo: "ejercicio",
      etiqueta: "La célula · Organelos · Reactivo 5 / 16",
      pregunta: "El organelo que contiene el ADN y dirige las actividades de la célula es:",
      opciones: ["El núcleo", "La mitocondria", "El lisosoma", "La vacuola"],
      correcta: 0,
      explicacion: "El núcleo almacena la información genética (ADN) y controla las funciones celulares, incluida la síntesis de proteínas y la división.",
      pasos: [
        { pre: "Guarda el ADN: ", math: "\\text{núcleo}" }
      ]
    },
    {
      id: "or6",
      tipo: "ejercicio",
      etiqueta: "La célula · Organelos · Reactivo 6 / 16",
      pregunta: "La síntesis de proteínas en la célula la realizan los:",
      opciones: ["Ribosomas", "Lisosomas", "Cloroplastos", "Centriolos"],
      correcta: 0,
      explicacion: "Los ribosomas leen el ARN mensajero y unen los aminoácidos para fabricar las proteínas. Pueden estar libres o sobre el retículo endoplásmico.",
      pasos: [
        { pre: "Hacen proteínas: ", math: "\\text{ribosomas}" }
      ]
    },
    {
      id: "or7",
      tipo: "ejercicio",
      etiqueta: "La célula · Organelos · Reactivo 7 / 16",
      pregunta: "El sistema de canales que transporta sustancias dentro de la célula y participa en la síntesis de lípidos y proteínas es:",
      opciones: ["El retículo endoplásmico", "El nucléolo", "El centriolo", "El cloroplasto"],
      correcta: 0,
      explicacion: "El retículo endoplásmico es una red de membranas: el rugoso (con ribosomas) procesa proteínas y el liso sintetiza lípidos y transporta sustancias.",
      pasos: [
        { pre: "Red de transporte: ", math: "\\text{retículo endoplásmico}" }
      ]
    },
    {
      id: "or8",
      tipo: "ejercicio",
      svgDiagram: "cel-animal-vegetal",
      etiqueta: "La célula · Organelos · Reactivo 8 / 16",
      pregunta: "La estructura rígida de celulosa que da soporte y protección a la célula vegetal es:",
      opciones: ["La pared celular", "La membrana plasmática", "El citoesqueleto", "La vacuola"],
      correcta: 0,
      explicacion: "La pared celular, hecha de celulosa, rodea la membrana de las células vegetales y les da rigidez, soporte y protección.",
      pasos: [
        { pre: "Rígida, de celulosa: ", math: "\\text{pared celular}" }
      ]
    },
    {
      id: "or9",
      tipo: "ejercicio",
      etiqueta: "La célula · Organelos · Reactivo 9 / 16",
      pregunta: "La gran vacuola central de las células vegetales sirve principalmente para:",
      opciones: ["Almacenar agua y mantener la turgencia", "Producir ATP", "Sintetizar proteínas", "Realizar la fotosíntesis"],
      correcta: 0,
      explicacion: "La vacuola central almacena agua, sales y nutrientes, y al llenarse mantiene la presión (turgencia) que da firmeza a la planta.",
      pasos: [
        { pre: "Almacena agua: ", math: "\\text{vacuola central (turgencia)}" }
      ]
    },
    {
      id: "or10",
      tipo: "ejercicio",
      etiqueta: "La célula · Organelos · Reactivo 10 / 16",
      pregunta: "El proceso que ocurre dentro del cloroplasto es:",
      opciones: ["La fotosíntesis", "La respiración celular", "La digestión", "La división celular"],
      correcta: 0,
      explicacion: "En el cloroplasto, gracias a la clorofila, ocurre la fotosíntesis: se transforma CO₂ y agua en glucosa usando la luz.",
      pasos: [
        { pre: "Luz → glucosa: ", math: "\\text{fotosíntesis (cloroplasto)}" }
      ]
    },
    {
      id: "or11",
      tipo: "ejercicio",
      etiqueta: "La célula · Organelos · Reactivo 11 / 16",
      pregunta: "Los centriolos, que participan en la división celular, son característicos de la célula:",
      opciones: ["Animal", "Vegetal", "Bacteriana", "Procariota"],
      correcta: 0,
      explicacion: "Los centriolos, que organizan el huso durante la división, son típicos de las células animales (las vegetales suelen carecer de ellos).",
      pasos: [
        { pre: "División, en animal: ", math: "\\text{centriolos}" }
      ]
    },
    {
      id: "or12",
      tipo: "ejercicio",
      etiqueta: "La célula · Organelos · Reactivo 12 / 16",
      pregunta: "La estructura dentro del núcleo encargada de fabricar los ribosomas es el:",
      opciones: ["Nucléolo", "Centriolo", "Lisosoma", "Cloroplasto"],
      correcta: 0,
      explicacion: "El nucléolo, dentro del núcleo, produce los componentes de los ribosomas (ARN ribosomal).",
      pasos: [
        { pre: "Fabrica ribosomas: ", math: "\\text{nucléolo}" }
      ]
    },
    {
      id: "or13",
      tipo: "ejercicio",
      etiqueta: "La célula · Organelos · Reactivo 13 / 16",
      pregunta: "El medio acuoso donde se encuentran suspendidos los organelos de la célula es el:",
      opciones: ["Citoplasma", "Núcleo", "Cloroplasto", "Lisosoma"],
      correcta: 0,
      explicacion: "El citoplasma es el medio interno (gelatinoso) donde están suspendidos los organelos y ocurren muchas reacciones celulares.",
      pasos: [
        { pre: "Medio interno: ", math: "\\text{citoplasma}" }
      ]
    },
    {
      id: "or14",
      tipo: "ejercicio",
      etiqueta: "La célula · Organelos · Reactivo 14 / 16",
      pregunta: "A la mitocondria se le conoce como «la central energética» de la célula porque:",
      opciones: ["Produce ATP mediante la respiración celular", "Almacena el ADN", "Fabrica proteínas", "Digiere los desechos"],
      correcta: 0,
      explicacion: "La mitocondria genera la mayor parte del ATP (energía utilizable) de la célula a través de la respiración celular.",
      pasos: [
        { pre: "Produce energía: ", math: "\\text{mitocondria} \\to ATP" }
      ]
    },
    {
      id: "or15",
      tipo: "ejercicio",
      svgDiagram: "cel-animal-vegetal",
      etiqueta: "La célula · Organelos · Reactivo 15 / 16",
      pregunta: "¿Cuáles tres estructuras distinguen a la célula vegetal de la animal?",
      opciones: ["Pared celular, cloroplastos y vacuola central", "Núcleo, mitocondrias y ribosomas", "Lisosomas, centriolos y membrana", "Golgi, retículo y nucléolo"],
      correcta: 0,
      explicacion: "La célula vegetal se distingue por su pared celular (celulosa), sus cloroplastos (fotosíntesis) y su gran vacuola central.",
      pasos: [
        { pre: "Exclusivas vegetales: ", math: "\\text{pared + cloroplasto + vacuola}" }
      ]
    },
    {
      id: "or16",
      tipo: "ejercicio",
      etiqueta: "La célula · Organelos · Reactivo 16 / 16",
      pregunta: "Un organelo que tiene su propio ADN, además del núcleo, es:",
      opciones: ["La mitocondria", "El lisosoma", "El aparato de Golgi", "El ribosoma"],
      correcta: 0,
      explicacion: "La mitocondria (y el cloroplasto) tienen su propio ADN, vestigio de su origen bacteriano según la teoría endosimbiótica.",
      pasos: [
        { pre: "ADN propio: ", math: "\\text{mitocondria (y cloroplasto)}" }
      ]
    },

    // ══ SUBTEMA 5 · MEMBRANA Y TRANSPORTE ═════════════════════════════════════
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
      nota: "TODAS las células tienen membrana plasmática (flexible). Solo plantas, hongos y bacterias tienen ADEMÁS una pared celular rígida por fuera. El transporte puede ser pasivo (sin energía: difusión y ósmosis) o activo (con ATP)."
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

    // Reactivos · Membrana y transporte (16)
    {
      id: "mb1",
      tipo: "ejercicio",
      svgDiagram: "cel-membrana",
      etiqueta: "La célula · Membrana y transporte · Reactivo 1 / 16",
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
      etiqueta: "La célula · Membrana y transporte · Reactivo 2 / 16",
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
      etiqueta: "La célula · Membrana y transporte · Reactivo 3 / 16",
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
      etiqueta: "La célula · Membrana y transporte · Reactivo 4 / 16",
      pregunta: "Se dice que la membrana plasmática es de permeabilidad SELECTIVA porque:",
      opciones: ["Deja pasar unas sustancias y a otras no", "Deja pasar todo libremente", "No deja pasar nada", "Solo deja salir, nunca entrar"],
      correcta: 0,
      explicacion: "La permeabilidad selectiva significa que la membrana controla el paso: permite la entrada y salida de ciertas sustancias y bloquea otras, manteniendo el equilibrio interno.",
      pasos: [
        { pre: "Control del paso: ", math: "\\text{permeabilidad selectiva}" }
      ]
    },
    {
      id: "mb5",
      tipo: "ejercicio",
      svgDiagram: "cel-membrana",
      etiqueta: "La célula · Membrana y transporte · Reactivo 5 / 16",
      pregunta: "El modelo que describe la membrana como una bicapa fluida con proteínas que se mueven se llama:",
      opciones: ["Mosaico fluido", "Llave-cerradura", "Doble hélice", "Modelo planetario"],
      correcta: 0,
      explicacion: "El modelo del mosaico fluido (Singer y Nicolson) describe la membrana como una bicapa lipídica fluida en la que las proteínas se distribuyen como las teselas de un mosaico.",
      pasos: [
        { pre: "Bicapa fluida + proteínas: ", math: "\\text{mosaico fluido}" }
      ]
    },
    {
      id: "mb6",
      tipo: "ejercicio",
      svgDiagram: "cel-transporte",
      etiqueta: "La célula · Membrana y transporte · Reactivo 6 / 16",
      pregunta: "El movimiento de partículas de soluto desde donde están más concentradas hacia donde están menos concentradas, sin gasto de energía, es la:",
      opciones: ["Difusión", "Endocitosis", "Bomba de sodio-potasio", "Fagocitosis"],
      correcta: 0,
      explicacion: "La difusión es el transporte pasivo de partículas a favor del gradiente (de mayor a menor concentración) hasta equilibrarse, sin gastar ATP.",
      pasos: [
        { pre: "A favor del gradiente: ", math: "\\text{difusión}" }
      ]
    },
    {
      id: "mb7",
      tipo: "ejercicio",
      etiqueta: "La célula · Membrana y transporte · Reactivo 7 / 16",
      pregunta: "Cuando una sustancia cruza la membrana a favor del gradiente PERO ayudada por una proteína transportadora, el proceso es:",
      opciones: ["Difusión facilitada", "Transporte activo", "Exocitosis", "Ósmosis"],
      correcta: 0,
      explicacion: "La difusión facilitada es transporte pasivo (a favor del gradiente, sin ATP), pero usa proteínas de canal o transportadoras para moléculas que no atraviesan solas la bicapa (como la glucosa).",
      pasos: [
        { pre: "Pasivo con proteína: ", math: "\\text{difusión facilitada}" }
      ]
    },
    {
      id: "mb8",
      tipo: "ejercicio",
      etiqueta: "La célula · Membrana y transporte · Reactivo 8 / 16",
      pregunta: "El proceso por el cual la célula INTRODUCE partículas grandes envolviéndolas con su membrana se llama:",
      opciones: ["Endocitosis", "Exocitosis", "Difusión", "Ósmosis"],
      correcta: 0,
      explicacion: "En la endocitosis la membrana se invagina y engloba material del exterior formando una vesícula que entra a la célula.",
      pasos: [
        { pre: "Entrada de material: ", math: "\\text{endocitosis}" }
      ]
    },
    {
      id: "mb9",
      tipo: "ejercicio",
      etiqueta: "La célula · Membrana y transporte · Reactivo 9 / 16",
      pregunta: "La expulsión de sustancias al exterior mediante vesículas que se fusionan con la membrana se denomina:",
      opciones: ["Exocitosis", "Endocitosis", "Fagocitosis", "Difusión"],
      correcta: 0,
      explicacion: "En la exocitosis, una vesícula interna se fusiona con la membrana plasmática y libera su contenido al exterior (por ejemplo, la secreción de hormonas).",
      pasos: [
        { pre: "Salida de material: ", math: "\\text{exocitosis}" }
      ]
    },
    {
      id: "mb10",
      tipo: "ejercicio",
      etiqueta: "La célula · Membrana y transporte · Reactivo 10 / 16",
      pregunta: "Cuando un glóbulo blanco engloba y «se come» una bacteria, realiza:",
      opciones: ["Fagocitosis", "Ósmosis", "Difusión simple", "Exocitosis"],
      correcta: 0,
      explicacion: "La fagocitosis es un tipo de endocitosis en el que la célula engloba partículas sólidas grandes (como bacterias). Los glóbulos blancos la usan para defendernos.",
      pasos: [
        { pre: "«Comer» partículas sólidas: ", math: "\\text{fagocitosis}" }
      ]
    },
    {
      id: "mb11",
      tipo: "ejercicio",
      etiqueta: "La célula · Membrana y transporte · Reactivo 11 / 16",
      pregunta: "La bomba de sodio-potasio, que mantiene distintas concentraciones de iones dentro y fuera de la célula, es un ejemplo de:",
      opciones: ["Transporte activo", "Difusión simple", "Ósmosis", "Difusión facilitada"],
      correcta: 0,
      explicacion: "La bomba de sodio-potasio mueve iones en contra de su gradiente gastando ATP: es transporte activo. Es clave para el impulso nervioso.",
      pasos: [
        { pre: "Iones contra gradiente, con ATP: ", math: "\\text{transporte activo}" }
      ]
    },
    {
      id: "mb12",
      tipo: "ejercicio",
      etiqueta: "La célula · Membrana y transporte · Reactivo 12 / 16",
      pregunta: "Si una célula se coloca en una solución HIPERTÓNICA (más concentrada que su interior), la célula:",
      opciones: ["Pierde agua y se arruga", "Gana agua y se hincha", "No cambia de tamaño", "Se divide en dos"],
      correcta: 0,
      explicacion: "En un medio hipertónico hay más soluto afuera, así que el agua sale de la célula por ósmosis y esta se deshidrata (se arruga o crena).",
      pasos: [
        { pre: "Más soluto afuera: ", math: "\\text{agua sale} \\Rightarrow \\text{se arruga}" }
      ]
    },
    {
      id: "mb13",
      tipo: "ejercicio",
      etiqueta: "La célula · Membrana y transporte · Reactivo 13 / 16",
      pregunta: "Si una célula animal se coloca en una solución HIPOTÓNICA (más diluida que su interior), tiende a:",
      opciones: ["Hincharse e incluso reventar", "Arrugarse", "Perder agua", "Mantenerse igual"],
      correcta: 0,
      explicacion: "En un medio hipotónico hay menos soluto afuera, así que el agua entra a la célula por ósmosis; una célula animal puede hincharse y estallar (hemólisis si es un glóbulo rojo).",
      pasos: [
        { pre: "Más agua entra: ", math: "\\text{se hincha (puede reventar)}" }
      ]
    },
    {
      id: "mb14",
      tipo: "ejercicio",
      etiqueta: "La célula · Membrana y transporte · Reactivo 14 / 16",
      pregunta: "En una solución ISOTÓNICA, la concentración de soluto dentro y fuera de la célula es igual, por lo que:",
      opciones: ["No hay movimiento neto de agua", "El agua entra rápidamente", "El agua sale rápidamente", "La célula se divide"],
      correcta: 0,
      explicacion: "En un medio isotónico las concentraciones están equilibradas: entra y sale la misma cantidad de agua, así que no hay cambio neto de volumen.",
      pasos: [
        { pre: "Equilibrio: ", math: "\\text{sin movimiento neto de agua}" }
      ]
    },
    {
      id: "mb15",
      tipo: "ejercicio",
      etiqueta: "La célula · Membrana y transporte · Reactivo 15 / 16",
      pregunta: "Una diferencia clave entre el transporte pasivo y el activo es que el pasivo:",
      opciones: ["No gasta energía (ATP)", "Siempre necesita ATP", "Va en contra del gradiente", "Solo ocurre en procariotas"],
      correcta: 0,
      explicacion: "El transporte pasivo (difusión, ósmosis) ocurre a favor del gradiente y NO consume energía; el activo va en contra del gradiente y SÍ gasta ATP.",
      pasos: [
        { pre: "Pasivo: ", math: "\\text{sin ATP, a favor del gradiente}" }
      ]
    },
    {
      id: "mb16",
      tipo: "ejercicio",
      etiqueta: "La célula · Membrana y transporte · Reactivo 16 / 16",
      pregunta: "¿Cuál de las siguientes estructuras es UNIVERSAL, es decir, está presente en todas las células?",
      opciones: ["La membrana plasmática", "La pared celular", "El cloroplasto", "El centriolo"],
      correcta: 0,
      explicacion: "La membrana plasmática está en todas las células (procariotas y eucariotas). La pared celular, los cloroplastos y los centriolos solo aparecen en ciertos tipos.",
      pasos: [
        { pre: "En toda célula: ", math: "\\text{membrana plasmática}" }
      ]
    },

    // ══ SUBTEMA 6 · CICLO CELULAR: MITOSIS Y MEIOSIS ══════════════════════════
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
      nota: "El ciclo celular incluye la interfase (la célula crece y duplica su ADN) y la división. La mitosis da células hijas iguales a la madre (diploides, 2n). La meiosis reduce a la mitad (haploides, n) y genera variabilidad; la fecundación (n + n) restaura el 2n."
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

    // Reactivos · Ciclo celular (16)
    {
      id: "cc1",
      tipo: "ejercicio",
      svgDiagram: "cel-mitosis",
      etiqueta: "La célula · Ciclo celular · Reactivo 1 / 16",
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
      etiqueta: "La célula · Ciclo celular · Reactivo 2 / 16",
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
      etiqueta: "La célula · Ciclo celular · Reactivo 3 / 16",
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
      etiqueta: "La célula · Ciclo celular · Reactivo 4 / 16",
      pregunta: "El crecimiento de un organismo y la cicatrización de una herida ocurren gracias a la:",
      opciones: ["Mitosis", "Meiosis", "Fecundación", "Fotosíntesis"],
      correcta: 0,
      explicacion: "La mitosis produce nuevas células idénticas que permiten al organismo crecer y reparar tejidos dañados (como al cerrar una herida).",
      pasos: [
        { pre: "Crecer y reparar: ", math: "\\text{mitosis}" }
      ]
    },
    {
      id: "cc5",
      tipo: "ejercicio",
      etiqueta: "La célula · Ciclo celular · Reactivo 5 / 16",
      pregunta: "El orden correcto de las fases de la mitosis es:",
      opciones: ["Profase → metafase → anafase → telofase", "Metafase → profase → telofase → anafase", "Anafase → telofase → profase → metafase", "Telofase → anafase → metafase → profase"],
      correcta: 0,
      explicacion: "La mitosis sigue el orden: profase (se condensan los cromosomas), metafase (se alinean al centro), anafase (se separan) y telofase (se forman dos núcleos).",
      pasos: [
        { pre: "Orden: ", math: "\\text{pro} \\to \\text{meta} \\to \\text{ana} \\to \\text{telo}" }
      ]
    },
    {
      id: "cc6",
      tipo: "ejercicio",
      etiqueta: "La célula · Ciclo celular · Reactivo 6 / 16",
      pregunta: "La etapa del ciclo celular en la que la célula crece y DUPLICA su ADN antes de dividirse es la:",
      opciones: ["Interfase", "Profase", "Anafase", "Telofase"],
      correcta: 0,
      explicacion: "En la interfase, antes de la división, la célula crece, realiza sus funciones y duplica su ADN (replicación) para repartirlo después.",
      pasos: [
        { pre: "Antes de dividirse: ", math: "\\text{interfase (duplica ADN)}" }
      ]
    },
    {
      id: "cc7",
      tipo: "ejercicio",
      svgDiagram: "cel-meiosis",
      etiqueta: "La célula · Ciclo celular · Reactivo 7 / 16",
      pregunta: "A diferencia de la mitosis, la meiosis produce:",
      opciones: ["Cuatro células con la mitad de cromosomas", "Dos células idénticas", "Una sola célula gigante", "Células con el doble de cromosomas"],
      correcta: 0,
      explicacion: "La meiosis, con dos divisiones sucesivas, genera cuatro células hijas haploides (con la mitad de los cromosomas): los gametos.",
      pasos: [
        { pre: "Resultado: ", math: "1 \\to 4\\ \\text{células (n)}" }
      ]
    },
    {
      id: "cc8",
      tipo: "ejercicio",
      etiqueta: "La célula · Ciclo celular · Reactivo 8 / 16",
      pregunta: "La división del citoplasma que separa las dos células hijas al final de la mitosis se llama:",
      opciones: ["Citocinesis", "Cariocinesis", "Interfase", "Replicación"],
      correcta: 0,
      explicacion: "La citocinesis es la división del citoplasma que reparte los organelos y completa la separación en dos células hijas.",
      pasos: [
        { pre: "Divide el citoplasma: ", math: "\\text{citocinesis}" }
      ]
    },
    {
      id: "cc9",
      tipo: "ejercicio",
      etiqueta: "La célula · Ciclo celular · Reactivo 9 / 16",
      pregunta: "Una célula con dos juegos completos de cromosomas (uno del padre y uno de la madre) se describe como:",
      opciones: ["Diploide (2n)", "Haploide (n)", "Triploide (3n)", "Acromosómica"],
      correcta: 0,
      explicacion: "Una célula diploide (2n) tiene los cromosomas en pares (homólogos). Las células del cuerpo humano son diploides (46 cromosomas = 23 pares).",
      pasos: [
        { pre: "Dos juegos: ", math: "\\text{diploide (2n)}" }
      ]
    },
    {
      id: "cc10",
      tipo: "ejercicio",
      etiqueta: "La célula · Ciclo celular · Reactivo 10 / 16",
      pregunta: "Los gametos (óvulos y espermatozoides) son células:",
      opciones: ["Haploides (n)", "Diploides (2n)", "Tetraploides (4n)", "Sin cromosomas"],
      correcta: 0,
      explicacion: "Los gametos tienen un solo juego de cromosomas (haploides, n), resultado de la meiosis. Así, al unirse dos gametos, se restaura el número diploide.",
      pasos: [
        { pre: "Un solo juego: ", math: "\\text{haploide (n)}" }
      ]
    },
    {
      id: "cc11",
      tipo: "ejercicio",
      etiqueta: "La célula · Ciclo celular · Reactivo 11 / 16",
      pregunta: "¿Cuántas divisiones celulares sucesivas ocurren durante la meiosis?",
      opciones: ["Dos", "Una", "Tres", "Cuatro"],
      correcta: 0,
      explicacion: "La meiosis consta de dos divisiones consecutivas (meiosis I y meiosis II), que a partir de una célula producen cuatro células haploides.",
      pasos: [
        { pre: "Dos divisiones: ", math: "\\text{meiosis I} + \\text{meiosis II}" }
      ]
    },
    {
      id: "cc12",
      tipo: "ejercicio",
      etiqueta: "La célula · Ciclo celular · Reactivo 12 / 16",
      pregunta: "En la metafase, los cromosomas se caracterizan por:",
      opciones: ["Alinearse en el centro (ecuador) de la célula", "Separarse hacia los polos", "Formar dos núcleos", "Desaparecer"],
      correcta: 0,
      explicacion: "En la metafase los cromosomas se ordenan en el plano ecuatorial (centro) de la célula, listos para separarse en la anafase.",
      pasos: [
        { pre: "Cromosomas al centro: ", math: "\\text{metafase}" }
      ]
    },
    {
      id: "cc13",
      tipo: "ejercicio",
      etiqueta: "La célula · Ciclo celular · Reactivo 13 / 16",
      pregunta: "La fase de la mitosis en la que las cromátidas se separan y se dirigen a polos opuestos es la:",
      opciones: ["Anafase", "Profase", "Metafase", "Interfase"],
      correcta: 0,
      explicacion: "En la anafase, las cromátidas hermanas se separan y son arrastradas por el huso hacia los polos opuestos de la célula.",
      pasos: [
        { pre: "Se separan las cromátidas: ", math: "\\text{anafase}" }
      ]
    },
    {
      id: "cc14",
      tipo: "ejercicio",
      etiqueta: "La célula · Ciclo celular · Reactivo 14 / 16",
      pregunta: "Respecto al número de cromosomas, la mitosis se caracteriza porque las células hijas:",
      opciones: ["Conservan el mismo número que la célula madre", "Tienen la mitad de cromosomas", "Tienen el doble de cromosomas", "No tienen cromosomas"],
      correcta: 0,
      explicacion: "La mitosis mantiene constante el número de cromosomas: si la madre es 2n, las dos hijas también son 2n.",
      pasos: [
        { pre: "Se conserva 2n: ", math: "2n \\to 2n" }
      ]
    },
    {
      id: "cc15",
      tipo: "ejercicio",
      etiqueta: "La célula · Ciclo celular · Reactivo 15 / 16",
      pregunta: "La división celular descontrolada, en la que las células se multiplican sin freno, está relacionada con:",
      opciones: ["El cáncer", "La fotosíntesis", "La ósmosis", "La fecundación"],
      correcta: 0,
      explicacion: "Cuando el control del ciclo celular falla, las células se dividen sin regulación y forman tumores: es la base del cáncer.",
      pasos: [
        { pre: "División sin control: ", math: "\\text{cáncer}" }
      ]
    },
    {
      id: "cc16",
      tipo: "ejercicio",
      svgDiagram: "cel-meiosis",
      etiqueta: "La célula · Ciclo celular · Reactivo 16 / 16",
      pregunta: "Además de reducir los cromosomas, la meiosis es importante porque:",
      opciones: ["Genera variabilidad genética", "Produce clones idénticos", "Duplica el ADN", "Repara heridas"],
      correcta: 0,
      explicacion: "Durante la meiosis ocurre el entrecruzamiento (intercambio de segmentos entre cromosomas homólogos) y la combinación al azar de cromosomas, lo que genera variabilidad genética en los gametos.",
      pasos: [
        { pre: "Entrecruzamiento y recombinación: ", math: "\\text{variabilidad genética}" }
      ]
    },

    // ── RESUMEN ───────────────────────────────────────────────────────────────
    {
      id: "resumen",
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Ideas clave de la célula",
      puntos: [
        { math: "\\text{Historia}", texto: "Hooke («célula», corcho) → Leeuwenhoek (microorganismos) → Schleiden/Schwann (teoría celular) → Virchow (célula de célula)" },
        { math: "\\text{Teoría celular}", texto: "la célula es la unidad estructural, funcional y de origen de la vida" },
        { math: "\\text{Procariota}", texto: "sin núcleo (bacterias); eucariota: con núcleo (animales, plantas, hongos, protistas)" },
        { math: "\\text{Mitocondria}", texto: "produce ATP; cloroplasto: fotosíntesis (solo vegetal)" },
        { math: "\\text{Vegetal}", texto: "pared celular + cloroplasto + vacuola central; animal: centriolos y lisosomas" },
        { math: "\\text{Membrana}", texto: "bicapa de fosfolípidos, de permeabilidad selectiva (universal)" },
        { math: "\\text{Transporte}", texto: "pasivo (difusión/ósmosis, sin ATP) vs. activo (con ATP)" },
        { titulo: "Mitosis / meiosis", texto: "mitosis: 2 células iguales (2n); meiosis: 4 gametos con la mitad (n)" }
      ]
    }

  ]
};
