// Datos de la presentación: Agua, aire, alimentos y energía (Química · UNAM · Área 1)
// Cubre las Unidades 2 a 5 del temario oficial:
//   2 Agua (estructura/propiedades · ácidos, bases, pH y soluciones · contaminación) ·
//   3 Aire (composición · oxígeno, combustión y redox · contaminantes) ·
//   4 Alimentos (biomoléculas) · 5 Energía en las reacciones químicas → Resumen.
// 16 reactivos por subtema.

export const PRESENTACION = {
  id: "quimica-agua-aire-alimentos",
  titulo: "Agua, aire, alimentos y energía",
  materia: "Química",
  subtema: "Química de la vida cotidiana",
  slides: [
    {
      id: 0,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "portada",
          kicker: "Química · UNAM · Unidades 2–5",
          titulo: "Agua, aire, alimentos y energía",
          subtitulo: "El agua y sus propiedades · Ácidos, bases, pH y soluciones · El aire, oxígeno y redox · Contaminación · Biomoléculas · Reacciones endo/exotérmicas",
          figura: "qaa-portada",
        },
      ],
    },
    {
      id: "agua",
      tipo: "lienzo",
      etiqueta: "La molécula de la vida",
      titulo: "El agua: estructura y propiedades",
      bloques: [
        {
          tipo: "formula",
          math: "\\mathrm{H_2O}:\\ \\text{molécula angular y polar} \\Rightarrow \\text{puentes de hidrógeno}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "qaa-agua",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\text{Molécula angular}",
              texto: "el O y los 2 H forman un ángulo (~104.5°); no es lineal",
            },
            {
              math: "\\text{Polaridad}",
              texto: "el O atrae más los e⁻ → zona δ⁻ (O) y δ⁺ (H); molécula dipolar",
            },
            {
              math: "\\text{Puentes de hidrógeno}",
              texto: "el δ⁺ de un H atrae al δ⁻ del O de otra molécula; unen las moléculas",
            },
            {
              math: "\\text{Disolvente universal}",
              texto: "por su polaridad disuelve muchas sustancias polares e iónicas",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "La estructura ANGULAR y POLAR del agua explica casi todas sus propiedades: forma puentes de hidrógeno (altos puntos de fusión y ebullición, alta capacidad calorífica), es el 'disolvente universal' de sustancias polares e iónicas, y es MENOS densa en estado sólido (el hielo flota). Su alta capacidad calorífica permite regular la temperatura de los seres vivos y del planeta.",
        },
      ],
    },
    {
      id: "ag1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Agua · Estructura y propiedades · Reactivo 1 / 16",
          enunciado: "La estructura angular del agua ayuda a que:",
          opciones: [
            "se formen puentes de hidrógeno",
            "su capacidad calorífica sea baja",
            "sea un buen disolvente de compuestos no polares",
            "sea más densa en estado sólido que líquido",
          ],
          correcta: 0,
          explicacion: "La forma angular hace que la molécula sea polar (un lado δ⁻ y otro δ⁺), lo que permite que se formen puentes de hidrógeno entre moléculas vecinas.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "qaa-agua",
        },
      ],
    },
    {
      id: "ag2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Agua · Estructura y propiedades · Reactivo 2 / 16",
          enunciado: "La molécula de agua se considera POLAR porque:",
          opciones: [
            "el oxígeno atrae más los electrones que los hidrógenos",
            "está formada por dos metales",
            "no tiene enlaces",
            "tiene carga total positiva",
          ],
          correcta: 0,
          explicacion: "El oxígeno es más electronegativo: atrae los electrones compartidos hacia sí, generando una zona negativa (en el O) y dos positivas (en los H). Eso la hace dipolar (polar).",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "qaa-agua",
        },
      ],
    },
    {
      id: "ag3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Agua · Estructura y propiedades · Reactivo 3 / 16",
          enunciado: "Al agua se le llama 'disolvente universal' porque, gracias a su polaridad, disuelve muy bien las sustancias:",
          opciones: ["polares e iónicas", "no polares como el aceite", "metálicas puras", "gaseosas únicamente"],
          correcta: 0,
          explicacion: "Lo semejante disuelve a lo semejante: el agua, polar, disuelve sustancias polares (azúcar) y iónicas (sal). No disuelve bien las no polares como el aceite.",
        },
      ],
    },
    {
      id: "ag4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Agua · Estructura y propiedades · Reactivo 4 / 16",
          enunciado: "Una propiedad poco común del agua es que el hielo flota en el agua líquida. Esto se debe a que el agua sólida es:",
          opciones: [
            "menos densa que el agua líquida",
            "más densa que el agua líquida",
            "un compuesto distinto",
            "iónica",
          ],
          correcta: 0,
          explicacion: "Al congelarse, los puentes de hidrógeno ordenan las moléculas en una red más abierta: el hielo ocupa más volumen y es menos denso, por eso flota.",
        },
      ],
    },
    {
      id: "ag5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Agua · Estructura y propiedades · Reactivo 5 / 16",
          enunciado: "La alta capacidad calorífica del agua significa que:",
          opciones: [
            "necesita absorber mucho calor para subir su temperatura",
            "se calienta y enfría muy rápido",
            "no conduce el calor",
            "hierve a baja temperatura",
          ],
          correcta: 0,
          explicacion: "El agua debe absorber mucha energía para elevar su temperatura (y libera mucha al enfriarse). Por eso modera el clima y regula la temperatura corporal.",
        },
      ],
    },
    {
      id: "ag6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Agua · Estructura y propiedades · Reactivo 6 / 16",
          enunciado: "La unión entre el hidrógeno δ⁺ de una molécula de agua y el oxígeno δ⁻ de otra se llama:",
          opciones: ["puente (enlace) de hidrógeno", "enlace iónico", "enlace metálico", "enlace covalente doble"],
          correcta: 0,
          explicacion: "El puente de hidrógeno es una atracción entre el H (δ⁺) de una molécula y un átomo muy electronegativo (O, N, F, aquí el O δ⁻) de otra. Es más débil que un enlace covalente.",
        },
      ],
    },
    {
      id: "ag7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Agua · Estructura y propiedades · Reactivo 7 / 16",
          enunciado: "La fórmula del agua, H₂O, indica que la molécula está formada por:",
          opciones: [
            "2 átomos de hidrógeno y 1 de oxígeno",
            "2 de oxígeno y 1 de hidrógeno",
            "2 moléculas de hidrógeno",
            "1 de hidrógeno y 1 de oxígeno",
          ],
          correcta: 0,
          explicacion: "El subíndice 2 acompaña al H: dos átomos de hidrógeno; el oxígeno no lleva subíndice, es uno. Enlace covalente entre ellos.",
        },
      ],
    },
    {
      id: "ag8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Agua · Estructura y propiedades · Reactivo 8 / 16",
          enunciado: "Los enlaces entre el oxígeno y los hidrógenos DENTRO de la molécula de agua son de tipo:",
          opciones: ["covalente polar", "iónico", "metálico", "puente de hidrógeno"],
          correcta: 0,
          explicacion: "Dentro de la molécula, O y H comparten electrones (covalente), pero el O los atrae más: covalente polar. Los puentes de hidrógeno son ENTRE moléculas, no dentro.",
        },
      ],
    },
    {
      id: "ag9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Agua · Estructura y propiedades · Reactivo 9 / 16",
          enunciado: "Comparada con otras moléculas de tamaño similar, el agua tiene puntos de ebullición y fusión ALTOS debido a:",
          opciones: [
            "los puentes de hidrógeno entre sus moléculas",
            "su bajo peso molecular",
            "que es un gas noble",
            "que no tiene polaridad",
          ],
          correcta: 0,
          explicacion: "Los puentes de hidrógeno mantienen unidas a las moléculas; se necesita más energía (más temperatura) para separarlas, por eso el agua funde y hierve a temperaturas altas para su tamaño.",
        },
      ],
    },
    {
      id: "ag10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Agua · Estructura y propiedades · Reactivo 10 / 16",
          enunciado: "El ángulo aproximado que forman los dos enlaces O–H en la molécula de agua es de:",
          opciones: ["104.5°", "180°", "90°", "360°"],
          correcta: 0,
          explicacion: "La molécula de agua es angular con un ángulo cercano a 104.5° (los pares de electrones libres del oxígeno 'cierran' el ángulo). Si fuera 180° sería lineal y no polar.",
        },
      ],
    },
    {
      id: "ag11",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Agua · Estructura y propiedades · Reactivo 11 / 16",
          enunciado: "¿Cuál de las siguientes sustancias NO se disuelve bien en agua por ser no polar?",
          opciones: ["Aceite", "Sal (NaCl)", "Azúcar", "Bicarbonato"],
          correcta: 0,
          explicacion: "El aceite es no polar; el agua, polar, no lo disuelve (se separan en capas). La sal (iónica), el azúcar y el bicarbonato (polares) sí se disuelven.",
        },
      ],
    },
    {
      id: "ag12",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Agua · Estructura y propiedades · Reactivo 12 / 16",
          enunciado: "La capacidad del agua para subir por tubos muy finos (como en las plantas), debida a la cohesión y adhesión, se llama:",
          opciones: ["capilaridad", "evaporación", "condensación", "sublimación"],
          correcta: 0,
          explicacion: "La capilaridad resulta de la cohesión (puentes de H entre moléculas de agua) y la adhesión (atracción a las paredes); permite que el agua ascienda por los vasos de las plantas.",
        },
      ],
    },
    {
      id: "ag13",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Agua · Estructura y propiedades · Reactivo 13 / 16",
          enunciado: "El paso del agua de estado líquido a gaseoso al recibir calor se llama:",
          opciones: ["evaporación (vaporización)", "fusión", "solidificación", "condensación"],
          correcta: 0,
          explicacion: "La evaporación o vaporización es el paso de líquido a gas. La fusión es de sólido a líquido; la condensación, de gas a líquido; la solidificación, de líquido a sólido.",
        },
      ],
    },
    {
      id: "ag14",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Agua · Estructura y propiedades · Reactivo 14 / 16",
          enunciado: "Que el agua pueda absorber mucho calor sin cambiar bruscamente de temperatura es importante para los seres vivos porque:",
          opciones: [
            "ayuda a regular su temperatura interna",
            "los deshidrata rápidamente",
            "impide cualquier reacción",
            "evita la fotosíntesis",
          ],
          correcta: 0,
          explicacion: "Como el cuerpo está formado mayormente por agua, su alta capacidad calorífica amortigua los cambios de temperatura y ayuda a mantener estable la temperatura interna.",
        },
      ],
    },
    {
      id: "ag15",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Agua · Estructura y propiedades · Reactivo 15 / 16",
          enunciado: "El agua pura, a nivel del mar, hierve a una temperatura de:",
          opciones: ["100 °C", "0 °C", "50 °C", "212 °C"],
          correcta: 0,
          explicacion: "A presión normal (nivel del mar), el agua pura hierve a 100 °C y se congela a 0 °C. (212 °F equivalen a 100 °C, pero la pregunta es en grados Celsius.)",
        },
      ],
    },
    {
      id: "ag16",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Agua · Estructura y propiedades · Reactivo 16 / 16",
          enunciado: "La propiedad del agua de poder disolver gran variedad de sustancias se debe directamente a su:",
          opciones: ["polaridad", "color", "olor", "radiactividad"],
          correcta: 0,
          explicacion: "Su carácter polar (extremos δ⁺ y δ⁻) le permite rodear y separar iones y moléculas polares, disolviéndolos. De ahí su fama de 'disolvente universal'.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "qaa-agua",
        },
      ],
    },
    {
      id: "ph",
      tipo: "lienzo",
      etiqueta: "Acidez y disoluciones",
      titulo: "Ácidos, bases, pH y soluciones",
      bloques: [
        {
          tipo: "formula",
          math: "\\text{pH} < 7\\ \\text{ácido} \\quad|\\quad \\text{pH} = 7\\ \\text{neutro} \\quad|\\quad \\text{pH} > 7\\ \\text{básico}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "qaa-ph",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\text{Ácido}",
              texto: "libera H⁺; pH < 7; sabor agrio; tornasol rojo (HCl, vinagre, limón)",
            },
            {
              math: "\\text{Base}",
              texto: "libera OH⁻; pH > 7; tacto jabonoso; tornasol azul (NaOH, jabón, bicarbonato)",
            },
            {
              math: "\\text{Fuerte / débil}",
              texto: "fuerte = se ioniza por completo y conduce bien; débil = se ioniza parcialmente",
            },
            {
              math: "\\text{Soluto / disolvente}",
              texto: "en una disolución el soluto se disuelve (menor cantidad) en el disolvente (mayor cantidad)",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "La escala de pH va de 0 a 14: menos de 7 = ácido, 7 = neutro, más de 7 = básico (alcalino). Es logarítmica: cada unidad equivale a 10 veces más acidez. Los INDICADORES (tornasol, fenolftaleína, col morada) cambian de color según el pH. Los ácidos y bases FUERTES se ionizan totalmente (buenos conductores); los DÉBILES, solo en parte. En una DISOLUCIÓN, el soluto es lo que se disuelve y el disolvente (normalmente agua) es el medio.",
        },
      ],
    },
    {
      id: "ph1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Agua · Ácidos, bases y pH · Reactivo 1 / 16",
          enunciado: "Al agregar unas gotas de vinagre con pH = 3.5 a un litro de agua pura (pH = 7), el pH de la disolución resultante será:",
          opciones: ["ligeramente ácido", "muy ácido", "neutro", "ligeramente básico"],
          correcta: 0,
          explicacion: "Las pocas gotas de vinagre aportan algo de acidez al gran volumen de agua neutra: el pH baja un poco por debajo de 7, quedando LIGERAMENTE ácido (no muy ácido, porque está muy diluido).",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "qaa-ph",
        },
      ],
    },
    {
      id: "ph2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Agua · Ácidos, bases y pH · Reactivo 2 / 16",
          enunciado: "Una sustancia con pH = 2 se clasifica como:",
          opciones: ["ácida", "neutra", "básica", "alcalina"],
          correcta: 0,
          explicacion: "Todo pH menor que 7 indica una sustancia ácida; cuanto más cercano a 0, más ácida. pH = 2 corresponde a un ácido fuerte (como el jugo gástrico).",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "qaa-ph",
        },
      ],
    },
    {
      id: "ph3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Agua · Ácidos, bases y pH · Reactivo 3 / 16",
          enunciado: "Una disolución con pH = 12 es:",
          opciones: ["básica (alcalina)", "ácida", "neutra", "ligeramente ácida"],
          correcta: 0,
          explicacion: "Un pH mayor que 7 indica carácter básico o alcalino; 12 es muy básico (como la sosa o algunos limpiadores).",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "qaa-ph",
        },
      ],
    },
    {
      id: "ph4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Agua · Ácidos, bases y pH · Reactivo 4 / 16",
          enunciado: "El agua pura, a 25 °C, tiene un pH de:",
          opciones: ["7 (neutro)", "0", "14", "1"],
          correcta: 0,
          explicacion: "El agua pura es neutra: pH = 7. En ella la concentración de H⁺ es igual a la de OH⁻.",
        },
      ],
    },
    {
      id: "ph5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Agua · Ácidos, bases y pH · Reactivo 5 / 16",
          enunciado: "Un ácido FUERTE se caracteriza porque en agua:",
          opciones: [
            "se ioniza casi por completo y conduce bien la electricidad",
            "no se ioniza",
            "se ioniza solo un poco",
            "no conduce la electricidad",
          ],
          correcta: 0,
          explicacion: "Un ácido fuerte (HCl, H₂SO₄) se ioniza casi al 100%, liberando muchos iones que conducen bien la corriente. Un ácido débil (acético) se ioniza parcialmente.",
        },
      ],
    },
    {
      id: "ph6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Agua · Ácidos, bases y pH · Reactivo 6 / 16",
          enunciado: "En una disolución de azúcar en agua, el agua es el ________ y el azúcar es el ________.",
          opciones: ["disolvente — soluto", "soluto — disolvente", "ácido — base", "soluto — soluto"],
          correcta: 0,
          explicacion: "El disolvente es el componente que disuelve (mayor cantidad, aquí el agua); el soluto es lo que se disuelve (menor cantidad, el azúcar).",
        },
      ],
    },
    {
      id: "ph7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Agua · Ácidos, bases y pH · Reactivo 7 / 16",
          enunciado: "Una sustancia que cambia de color para indicar si un medio es ácido o básico se llama:",
          opciones: ["indicador", "soluto", "catalizador", "disolvente"],
          correcta: 0,
          explicacion: "Los indicadores (papel tornasol, fenolftaleína, jugo de col morada) cambian de color según el pH, permitiendo distinguir ácidos de bases.",
        },
      ],
    },
    {
      id: "ph8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Agua · Ácidos, bases y pH · Reactivo 8 / 16",
          enunciado: "El papel tornasol AZUL, al introducirse en una sustancia ácida, se vuelve:",
          opciones: ["rojo", "verde", "incoloro", "morado"],
          correcta: 0,
          explicacion: "Los ácidos enrojecen el papel tornasol (de azul a rojo). Las bases lo vuelven azul. Es una forma sencilla de identificar el carácter de una sustancia.",
        },
      ],
    },
    {
      id: "ph9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Agua · Ácidos, bases y pH · Reactivo 9 / 16",
          enunciado: "¿Cuál de las siguientes sustancias de uso cotidiano es BÁSICA?",
          opciones: ["Jabón", "Jugo de limón", "Vinagre", "Refresco de cola"],
          correcta: 0,
          explicacion: "El jabón y los productos de limpieza son básicos (pH > 7, tacto jabonoso). El limón, el vinagre y los refrescos son ácidos (pH < 7).",
        },
      ],
    },
    {
      id: "ph10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Agua · Ácidos, bases y pH · Reactivo 10 / 16",
          enunciado: "La escala de pH normalmente abarca valores de:",
          opciones: ["0 a 14", "0 a 100", "−7 a 7", "1 a 10"],
          correcta: 0,
          explicacion: "La escala de pH va de 0 a 14: de 0 a 7 ácido, 7 neutro, de 7 a 14 básico. Es una escala logarítmica.",
        },
      ],
    },
    {
      id: "ph11",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Agua · Ácidos, bases y pH · Reactivo 11 / 16",
          enunciado: "Si una disolución tiene [H⁺] = 10⁻⁵ M, su pH es:",
          opciones: ["5", "−5", "9", "10"],
          correcta: 0,
          explicacion: "pH = −log[H⁺] = −log(10⁻⁵) = 5. Como 5 < 7, la disolución es ácida.",
        },
      ],
    },
    {
      id: "ph12",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Agua · Ácidos, bases y pH · Reactivo 12 / 16",
          enunciado: "Una disolución conduce la electricidad gracias a la presencia de:",
          opciones: [
            "iones libres (electrolito)",
            "moléculas neutras de azúcar",
            "gases nobles",
            "puentes de hidrógeno",
          ],
          correcta: 0,
          explicacion: "Las sustancias que liberan iones en agua (electrolitos: ácidos, bases y sales) conducen la corriente. El azúcar disuelto no se ioniza, por eso no conduce.",
        },
      ],
    },
    {
      id: "ph13",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Agua · Ácidos, bases y pH · Reactivo 13 / 16",
          enunciado: "Al disminuir el valor del pH de 5 a 4, la acidez de la disolución:",
          opciones: ["aumenta 10 veces", "disminuye a la mitad", "no cambia", "aumenta 2 veces"],
          correcta: 0,
          explicacion: "La escala de pH es logarítmica: cada unidad menos significa 10 veces más concentración de H⁺ (más ácido). De pH 5 a 4 la acidez se multiplica por 10.",
        },
      ],
    },
    {
      id: "ph14",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Agua · Ácidos, bases y pH · Reactivo 14 / 16",
          enunciado: "Para que una disolución esté SATURADA, debe contener:",
          opciones: [
            "la máxima cantidad de soluto que puede disolver a esa temperatura",
            "muy poco soluto",
            "solo disolvente",
            "dos disolventes",
          ],
          correcta: 0,
          explicacion: "Una disolución saturada tiene la máxima cantidad de soluto disuelto posible a una temperatura dada; si se agrega más soluto, ya no se disuelve y precipita.",
        },
      ],
    },
    {
      id: "ph15",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Agua · Ácidos, bases y pH · Reactivo 15 / 16",
          enunciado: "El jugo gástrico del estómago, con pH cercano a 1–2, es:",
          opciones: ["muy ácido", "neutro", "muy básico", "ligeramente básico"],
          correcta: 0,
          explicacion: "Un pH de 1–2 es muy ácido. El jugo gástrico contiene ácido clorhídrico (HCl) que ayuda a digerir los alimentos; un antiácido (base) lo neutraliza si hay exceso.",
        },
      ],
    },
    {
      id: "ph16",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Agua · Ácidos, bases y pH · Reactivo 16 / 16",
          enunciado: "Al mezclar cantidades equivalentes de un ácido y una base se obtiene una disolución de pH cercano a:",
          opciones: ["7 (neutro)", "0", "14", "3"],
          correcta: 0,
          explicacion: "En la neutralización, el H⁺ del ácido y el OH⁻ de la base se combinan formando agua; si las cantidades son equivalentes, el pH resultante se acerca a 7 (neutro).",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "qaa-ph",
        },
      ],
    },
    {
      id: "aire",
      tipo: "lienzo",
      etiqueta: "La mezcla que respiramos y sus reacciones",
      titulo: "El aire: oxígeno, combustión y redox",
      bloques: [
        {
          tipo: "formula",
          math: "\\text{combustible} + \\mathrm{O_2} \\to \\mathrm{CO_2} + \\mathrm{H_2O} + \\text{energía}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "qaa-aire",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\text{Composición}",
              texto: "~78% N₂, ~21% O₂, ~1% otros (Ar, CO₂, vapor de agua)",
            },
            {
              math: "\\text{Combustión}",
              texto: "reacción rápida con O₂ que libera calor y luz; produce CO₂ y H₂O",
            },
            {
              math: "\\text{Oxidación}",
              texto: "el átomo PIERDE electrones (o gana oxígeno); se 'oxida'",
            },
            {
              math: "\\text{Reducción}",
              texto: "el átomo GANA electrones (o pierde oxígeno); se 'reduce'",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "El aire es una mezcla de gases: ~78% nitrógeno (N₂) y ~21% oxígeno (O₂). El oxígeno es muy reactivo: participa en la combustión (libera energía), la respiración y la oxidación de los metales. En las reacciones REDOX (óxido-reducción) hay transferencia de electrones: uno se OXIDA (pierde e⁻) y otro se REDUCE (gana e⁻); ambos ocurren a la vez. Regla mnemotécnica: 'OXida = pierde', 'REDuce = gana'.",
        },
      ],
    },
    {
      id: "ai1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Aire · Oxígeno y combustión · Reactivo 1 / 16",
          enunciado: "Las reacciones de combustión son ________ porque ________ energía calorífica hacia los alrededores.",
          opciones: [
            "exotérmicas — liberan",
            "exotérmicas — absorben",
            "endotérmicas — liberan",
            "endotérmicas — absorben",
          ],
          correcta: 0,
          explicacion: "La combustión libera calor (y luz) al entorno: es una reacción exotérmica. 'Exo' = hacia afuera; libera energía.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "qaa-aire",
        },
      ],
    },
    {
      id: "ai2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Aire · Oxígeno y combustión · Reactivo 2 / 16",
          enunciado: "El gas más abundante en el aire que respiramos es el:",
          opciones: ["nitrógeno (N₂)", "oxígeno (O₂)", "dióxido de carbono (CO₂)", "argón (Ar)"],
          correcta: 0,
          explicacion: "El aire es ~78% nitrógeno y ~21% oxígeno. Aunque respiramos el oxígeno, el componente más abundante es el nitrógeno.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "qaa-aire",
        },
      ],
    },
    {
      id: "ai3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Aire · Oxígeno y combustión · Reactivo 3 / 16",
          enunciado: "El gas del aire, indispensable para la respiración y la combustión, que representa cerca del 21%, es el:",
          opciones: ["oxígeno (O₂)", "nitrógeno (N₂)", "argón (Ar)", "metano (CH₄)"],
          correcta: 0,
          explicacion: "El oxígeno (O₂) es ~21% del aire y es el gas que permite la respiración celular y la combustión.",
        },
      ],
    },
    {
      id: "ai4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Aire · Oxígeno y combustión · Reactivo 4 / 16",
          enunciado: "En una reacción de oxidación, un átomo o ion:",
          opciones: ["pierde electrones", "gana electrones", "gana protones", "pierde neutrones"],
          correcta: 0,
          explicacion: "Oxidarse es PERDER electrones (aumenta el número de oxidación). Recuerda: 'OXida = pierde'. La reducción es ganar electrones.",
        },
      ],
    },
    {
      id: "ai5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Aire · Oxígeno y combustión · Reactivo 5 / 16",
          enunciado: "En una reacción de reducción, un átomo o ion:",
          opciones: ["gana electrones", "pierde electrones", "pierde protones", "se evapora"],
          correcta: 0,
          explicacion: "Reducirse es GANAR electrones (disminuye el número de oxidación). 'REDuce = gana'. Siempre que algo se reduce, otra cosa se oxida.",
        },
      ],
    },
    {
      id: "ai6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Aire · Oxígeno y combustión · Reactivo 6 / 16",
          enunciado: "Cuando el hierro se oxida formando herrumbre (óxido de hierro), el hierro reacciona con el ________ del aire.",
          opciones: ["oxígeno", "nitrógeno", "argón", "helio"],
          correcta: 0,
          explicacion: "La herrumbre es óxido de hierro: el hierro se combina lentamente con el oxígeno (y humedad) del aire. Es un ejemplo de oxidación.",
        },
      ],
    },
    {
      id: "ai7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Aire · Oxígeno y combustión · Reactivo 7 / 16",
          enunciado: "La combustión COMPLETA de un hidrocarburo (como el gas natural) produce principalmente:",
          opciones: ["CO₂ y H₂O", "CO y carbón", "O₂ y N₂", "NaCl y H₂O"],
          correcta: 0,
          explicacion: "En combustión completa (con suficiente oxígeno) un hidrocarburo da dióxido de carbono y agua: CH₄ + 2O₂ → CO₂ + 2H₂O. Si falta O₂, hay combustión incompleta y se forma CO (tóxico).",
        },
      ],
    },
    {
      id: "ai8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Aire · Oxígeno y combustión · Reactivo 8 / 16",
          enunciado: "La combustión INCOMPLETA, por falta de oxígeno, genera un gas tóxico llamado:",
          opciones: ["monóxido de carbono (CO)", "dióxido de carbono (CO₂)", "oxígeno (O₂)", "vapor de agua"],
          correcta: 0,
          explicacion: "Cuando no hay suficiente oxígeno, en vez de CO₂ se forma monóxido de carbono (CO), un gas incoloro, inodoro y muy tóxico porque impide el transporte de oxígeno en la sangre.",
        },
      ],
    },
    {
      id: "ai9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Aire · Oxígeno y combustión · Reactivo 9 / 16",
          enunciado: "Cuando el azufre o el nitrógeno se combinan con oxígeno forman óxidos ÁCIDOS, como el:",
          opciones: ["SO₂ y NO₂", "Na₂O y CaO", "NaCl y KCl", "Fe₂O₃ y CuO"],
          correcta: 0,
          explicacion: "El azufre forma SO₂/SO₃ y el nitrógeno NO/NO₂: son óxidos ácidos (no metal + oxígeno). Con el agua de la atmósfera generan ácidos (lluvia ácida).",
        },
      ],
    },
    {
      id: "ai10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Aire · Oxígeno y combustión · Reactivo 10 / 16",
          enunciado: "En la reacción 2 Mg + O₂ → 2 MgO, el magnesio:",
          opciones: ["se oxida (pierde electrones)", "se reduce (gana electrones)", "no cambia", "gana protones"],
          correcta: 0,
          explicacion: "El magnesio pasa de Mg⁰ a Mg²⁺: pierde electrones, por lo tanto se oxida. El oxígeno los gana (se reduce). Es una reacción redox.",
        },
      ],
    },
    {
      id: "ai11",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Aire · Oxígeno y combustión · Reactivo 11 / 16",
          enunciado: "Para que ocurra una combustión se necesitan tres elementos del 'triángulo del fuego':",
          opciones: [
            "combustible, comburente (O₂) y calor",
            "agua, sal y luz",
            "nitrógeno, argón y CO₂",
            "ácido, base y sal",
          ],
          correcta: 0,
          explicacion: "El fuego requiere combustible (lo que arde), comburente (el oxígeno) y una fuente de calor (energía de activación). Si falta uno, no hay combustión.",
        },
      ],
    },
    {
      id: "ai12",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Aire · Oxígeno y combustión · Reactivo 12 / 16",
          enunciado: "La respiración celular puede considerarse, en términos químicos, una:",
          opciones: [
            "oxidación lenta de la glucosa con O₂",
            "combustión sin oxígeno",
            "reducción del nitrógeno",
            "neutralización ácido-base",
          ],
          correcta: 0,
          explicacion: "En la respiración, la glucosa se oxida con oxígeno liberando energía: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energía. Es una oxidación controlada y lenta.",
        },
      ],
    },
    {
      id: "ai13",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Aire · Oxígeno y combustión · Reactivo 13 / 16",
          enunciado: "En una reacción redox, el agente OXIDANTE es la sustancia que:",
          opciones: [
            "se reduce (gana electrones)",
            "se oxida (pierde electrones)",
            "no participa",
            "aporta protones",
          ],
          correcta: 0,
          explicacion: "El agente oxidante provoca la oxidación de otro, y al hacerlo él mismo GANA electrones (se reduce). El oxígeno es un oxidante típico.",
        },
      ],
    },
    {
      id: "ai14",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Aire · Oxígeno y combustión · Reactivo 14 / 16",
          enunciado: "El ozono (O₃) presente en la estratósfera es importante porque:",
          opciones: [
            "filtra la radiación ultravioleta del Sol",
            "produce oxígeno para respirar",
            "provoca la lluvia ácida",
            "es el gas más abundante del aire",
          ],
          correcta: 0,
          explicacion: "La capa de ozono absorbe gran parte de la radiación ultravioleta (UV) del Sol, protegiendo a los seres vivos. (A nivel del suelo, en cambio, el ozono es un contaminante.)",
        },
      ],
    },
    {
      id: "ai15",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Aire · Oxígeno y combustión · Reactivo 15 / 16",
          enunciado: "El proceso por el cual las plantas reponen el oxígeno del aire, tomando CO₂ y liberando O₂, es la:",
          opciones: ["fotosíntesis", "combustión", "respiración", "oxidación del hierro"],
          correcta: 0,
          explicacion: "En la fotosíntesis las plantas usan CO₂, agua y luz para producir glucosa y liberar O₂, manteniendo el ciclo del oxígeno y del carbono.",
        },
      ],
    },
    {
      id: "ai16",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Aire · Oxígeno y combustión · Reactivo 16 / 16",
          enunciado: "En toda reacción de óxido-reducción (redox):",
          opciones: [
            "la oxidación y la reducción ocurren simultáneamente",
            "solo ocurre la oxidación",
            "solo ocurre la reducción",
            "no hay transferencia de electrones",
          ],
          correcta: 0,
          explicacion: "Los electrones que pierde la sustancia que se oxida son los mismos que gana la que se reduce: ambos procesos ocurren al mismo tiempo y de forma acoplada.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "qaa-aire",
        },
      ],
    },
    {
      id: "contaminacion",
      tipo: "lienzo",
      etiqueta: "Cómo dañamos el ambiente y por qué",
      titulo: "Contaminación del agua y del aire",
      bloques: [
        {
          tipo: "formula",
          math: "\\mathrm{SO_2},\\ \\mathrm{NO_2} + \\mathrm{H_2O} \\to \\text{ácidos} \\;\\Rightarrow\\; \\text{lluvia ácida}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "qaa-contaminacion",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\text{Contaminantes del agua}",
              texto: "físicos (basura, calor), químicos (metales, agroquímicos) y biológicos (microbios)",
            },
            {
              math: "\\text{Fuentes}",
              texto: "industrial, urbana (drenaje) y agrícola (fertilizantes, plaguicidas)",
            },
            {
              math: "\\text{Contaminantes del aire}",
              texto: "óxidos de N, C y S; partículas suspendidas; hidrocarburos",
            },
            {
              math: "\\text{Lluvia ácida}",
              texto: "SO₂ y NOₓ + agua → ácidos que caen con la lluvia y dañan suelos y construcciones",
            },
            {
              math: "\\text{Inversión térmica}",
              texto: "una capa de aire caliente atrapa el aire frío contaminado cerca del suelo",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "El agua se contamina con agentes físicos (sólidos, calor), químicos (metales pesados, agroquímicos, detergentes) y biológicos (bacterias, virus); sus fuentes son industrial, urbana y agrícola. El aire se contamina con óxidos de nitrógeno, carbono y azufre, partículas suspendidas e hidrocarburos. Dos efectos clave: la LLUVIA ÁCIDA (los óxidos de azufre y nitrógeno forman ácidos con el agua) y la INVERSIÓN TÉRMICA (una capa de aire caliente impide que suba el aire contaminado, atrapándolo sobre las ciudades).",
        },
      ],
    },
    {
      id: "ct1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Contaminación · Agua y aire · Reactivo 1 / 16",
          enunciado: "Una de las causas principales de la contaminación del agua es la:",
          opciones: [
            "polución agroquímica",
            "desviación del cauce de los ríos",
            "infiltración excesiva",
            "desertificación",
          ],
          correcta: 0,
          explicacion: "Los fertilizantes y plaguicidas (agroquímicos) llegan a ríos y mantos acuíferos y los contaminan; es una de las principales causas de contaminación química del agua.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "qaa-contaminacion",
        },
      ],
    },
    {
      id: "ct2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Contaminación · Agua y aire · Reactivo 2 / 16",
          enunciado: "La lluvia ácida se forma principalmente cuando se combinan con el agua de la atmósfera los óxidos de:",
          opciones: ["azufre y nitrógeno", "sodio y potasio", "calcio y magnesio", "helio y argón"],
          correcta: 0,
          explicacion: "Los óxidos de azufre (SO₂) y de nitrógeno (NOₓ), emitidos por la quema de combustibles, reaccionan con el agua formando ácidos sulfúrico y nítrico: la lluvia ácida.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "qaa-contaminacion",
        },
      ],
    },
    {
      id: "ct3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Contaminación · Agua y aire · Reactivo 3 / 16",
          enunciado: "El fenómeno en el que una capa de aire caliente atrapa al aire frío contaminado cerca del suelo se llama:",
          opciones: ["inversión térmica", "lluvia ácida", "efecto invernadero", "smog fotoquímico"],
          correcta: 0,
          explicacion: "En la inversión térmica, una capa de aire caliente queda sobre el aire frío y le impide ascender; los contaminantes se acumulan a nivel del suelo, frecuente en ciudades en invierno.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "qaa-contaminacion",
        },
      ],
    },
    {
      id: "ct4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Contaminación · Agua y aire · Reactivo 4 / 16",
          enunciado: "El gas tóxico, producto de la combustión incompleta de los automóviles, que reduce la oxigenación de la sangre es el:",
          opciones: ["monóxido de carbono (CO)", "oxígeno (O₂)", "nitrógeno (N₂)", "vapor de agua"],
          correcta: 0,
          explicacion: "El monóxido de carbono (CO) se forma por combustión incompleta; se une a la hemoglobina con más fuerza que el O₂ e impide que la sangre transporte oxígeno.",
        },
      ],
    },
    {
      id: "ct5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Contaminación · Agua y aire · Reactivo 5 / 16",
          enunciado: "Los contaminantes del agua de tipo BIOLÓGICO son, por ejemplo:",
          opciones: ["bacterias y virus", "metales pesados", "plásticos", "calor"],
          correcta: 0,
          explicacion: "Los contaminantes biológicos son microorganismos (bacterias, virus, parásitos) que causan enfermedades. Los metales y plásticos son químicos/físicos; el calor es físico.",
        },
      ],
    },
    {
      id: "ct6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Contaminación · Agua y aire · Reactivo 6 / 16",
          enunciado: "El aumento de la temperatura media del planeta por la acumulación de gases como el CO₂ se conoce como:",
          opciones: [
            "calentamiento global (efecto invernadero)",
            "inversión térmica",
            "lluvia ácida",
            "eutrofización",
          ],
          correcta: 0,
          explicacion: "Los gases de efecto invernadero (CO₂, metano) retienen el calor en la atmósfera y elevan la temperatura global; es el calentamiento global.",
        },
      ],
    },
    {
      id: "ct7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Contaminación · Agua y aire · Reactivo 7 / 16",
          enunciado: "Las partículas sólidas o líquidas muy pequeñas suspendidas en el aire (PM10, PM2.5) son contaminantes de tipo:",
          opciones: ["partículas suspendidas", "óxidos ácidos", "biológicos", "radiactivos"],
          correcta: 0,
          explicacion: "Las partículas suspendidas (polvo, hollín, cenizas) son contaminantes del aire que penetran en las vías respiratorias; se miden como PM10 y PM2.5 según su tamaño.",
        },
      ],
    },
    {
      id: "ct8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Contaminación · Agua y aire · Reactivo 8 / 16",
          enunciado: "El exceso de fertilizantes (nitratos y fosfatos) en lagos provoca un crecimiento excesivo de algas que agota el oxígeno del agua. Este fenómeno es la:",
          opciones: ["eutrofización", "inversión térmica", "lluvia ácida", "destilación"],
          correcta: 0,
          explicacion: "La eutrofización es el enriquecimiento del agua con nutrientes (de fertilizantes) que dispara el crecimiento de algas; al descomponerse, consumen el oxígeno y mueren los peces.",
        },
      ],
    },
    {
      id: "ct9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Contaminación · Agua y aire · Reactivo 9 / 16",
          enunciado: "Las principales fuentes de contaminación del agua son:",
          opciones: [
            "industrial, urbana y agrícola",
            "solar, eólica e hidráulica",
            "mineral, vegetal y animal",
            "sólida, líquida y gaseosa",
          ],
          correcta: 0,
          explicacion: "El temario clasifica las fuentes generadoras en industrial (descargas de fábricas), urbana (drenaje y basura de las ciudades) y agrícola (agroquímicos del campo).",
        },
      ],
    },
    {
      id: "ct10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Contaminación · Agua y aire · Reactivo 10 / 16",
          enunciado: "Una acción para el USO RESPONSABLE y la preservación del agua es:",
          opciones: [
            "reutilizar y evitar el desperdicio de agua",
            "verter aceite en el drenaje",
            "regar a mediodía con manguera abierta",
            "descargar químicos en los ríos",
          ],
          correcta: 0,
          explicacion: "Reutilizar, reparar fugas, cerrar la llave y no contaminar son acciones de uso responsable. Las demás opciones desperdician o contaminan el agua.",
        },
      ],
    },
    {
      id: "ct11",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Contaminación · Agua y aire · Reactivo 11 / 16",
          enunciado: "El daño de la capa de ozono se asocia principalmente a la emisión de:",
          opciones: ["clorofluorocarbonos (CFC)", "vapor de agua", "oxígeno", "nitrógeno"],
          correcta: 0,
          explicacion: "Los CFC (usados antes en aerosoles y refrigerantes) liberan cloro en la estratósfera que destruye el ozono, formando el 'agujero' que deja pasar más radiación UV.",
        },
      ],
    },
    {
      id: "ct12",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Contaminación · Agua y aire · Reactivo 12 / 16",
          enunciado: "La lluvia ácida produce efectos como:",
          opciones: [
            "daño a bosques, suelos y edificios",
            "aumento de la capa de ozono",
            "mejora de la fertilidad del suelo",
            "enfriamiento del planeta",
          ],
          correcta: 0,
          explicacion: "La lluvia ácida acidifica suelos y lagos (matando vegetación y peces) y corroe construcciones y monumentos de piedra y metal.",
        },
      ],
    },
    {
      id: "ct13",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Contaminación · Agua y aire · Reactivo 13 / 16",
          enunciado: "Un contaminante FÍSICO del agua es:",
          opciones: [
            "la contaminación térmica (agua caliente de fábricas)",
            "una bacteria patógena",
            "un fertilizante nitrogenado",
            "un detergente",
          ],
          correcta: 0,
          explicacion: "La contaminación térmica (descarga de agua caliente) y los sólidos en suspensión son contaminantes físicos: alteran propiedades sin cambiar la composición química. Las bacterias son biológicas; fertilizantes y detergentes, químicos.",
        },
      ],
    },
    {
      id: "ct14",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Contaminación · Agua y aire · Reactivo 14 / 16",
          enunciado: "Durante una contingencia por inversión térmica en una ciudad, lo recomendable es:",
          opciones: [
            "reducir el uso de automóviles y actividades al aire libre",
            "encender más fogatas",
            "aumentar la circulación de vehículos",
            "quemar más combustibles",
          ],
          correcta: 0,
          explicacion: "Como los contaminantes quedan atrapados, hay que reducir las emisiones (menos autos, menos combustión) y evitar exponerse al aire contaminado.",
        },
      ],
    },
    {
      id: "ct15",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Contaminación · Agua y aire · Reactivo 15 / 16",
          enunciado: "Los principales gases de efecto invernadero generados por la actividad humana incluyen el:",
          opciones: [
            "dióxido de carbono y el metano",
            "oxígeno y el nitrógeno",
            "argón y el neón",
            "helio y el hidrógeno",
          ],
          correcta: 0,
          explicacion: "El CO₂ (de la quema de combustibles) y el metano (CH₄, de ganadería y residuos) son los principales gases de efecto invernadero que intensifican el calentamiento global.",
        },
      ],
    },
    {
      id: "ct16",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Contaminación · Agua y aire · Reactivo 16 / 16",
          enunciado: "Los contaminantes PRIMARIOS del aire son los que:",
          opciones: [
            "se emiten directamente a la atmósfera (CO, SO₂, NOₓ)",
            "se forman después por reacciones en la atmósfera",
            "solo existen en el agua",
            "son siempre biológicos",
          ],
          correcta: 0,
          explicacion: "Los contaminantes primarios se liberan directamente de la fuente (CO, óxidos de azufre y nitrógeno, partículas, hidrocarburos). Los secundarios (como el ozono troposférico) se forman después por reacciones químicas en el aire.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "qaa-contaminacion",
        },
      ],
    },
    {
      id: "alimentos",
      tipo: "lienzo",
      etiqueta: "La química de lo que comemos",
      titulo: "Alimentos: las biomoléculas",
      bloques: [
        {
          tipo: "formula",
          math: "\\text{carbohidratos · lípidos · proteínas · vitaminas y minerales}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "qaa-alimentos",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\text{Carbohidratos}",
              texto: "fuente de energía INMEDIATA (azúcares, almidón); formados por C, H y O",
            },
            {
              math: "\\text{Lípidos}",
              texto: "ALMACÉN de energía y membranas (grasas, aceites); insolubles en agua",
            },
            {
              math: "\\text{Proteínas}",
              texto: "estructura y función; cadenas de aminoácidos unidos por enlace peptídico",
            },
            {
              math: "\\text{Vitaminas y minerales}",
              texto: "reguladores: en pequeñas cantidades, esenciales para el metabolismo",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Los alimentos aportan biomoléculas: los CARBOHIDRATOS (glucosa, almidón) son la fuente de energía de disponibilidad inmediata; los LÍPIDOS (grasas y aceites) son el principal almacén de energía y forman membranas; las PROTEÍNAS son cadenas de aminoácidos (unidos por enlace peptídico entre el grupo –COOH de uno y el –NH₂ de otro) con funciones estructurales y enzimáticas; las VITAMINAS y MINERALES, en pequeñas cantidades, regulan el metabolismo.",
        },
      ],
    },
    {
      id: "al1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Alimentos · Biomoléculas · Reactivo 1 / 16",
          enunciado: "El enlace peptídico se forma al reaccionar un grupo amino (–NH₂) de un aminoácido con un grupo ________ de otro aminoácido.",
          opciones: ["–COOH (carboxilo)", "–OH (hidroxilo)", "–OR (éter)", "–CHO (aldehído)"],
          correcta: 0,
          explicacion: "El enlace peptídico une el grupo carboxilo (–COOH) de un aminoácido con el grupo amino (–NH₂) del siguiente, liberando una molécula de agua.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "qaa-alimentos",
        },
      ],
    },
    {
      id: "al2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Alimentos · Biomoléculas · Reactivo 2 / 16",
          enunciado: "Las biomoléculas que constituyen la fuente de energía de disponibilidad INMEDIATA son los:",
          opciones: ["carbohidratos", "lípidos", "ácidos nucleicos", "minerales"],
          correcta: 0,
          explicacion: "Los carbohidratos (azúcares como la glucosa) se utilizan rápidamente para obtener energía. Los lípidos son el almacén a largo plazo.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "qaa-alimentos",
        },
      ],
    },
    {
      id: "al3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Alimentos · Biomoléculas · Reactivo 3 / 16",
          enunciado: "Las biomoléculas cuya función principal es el ALMACÉN de energía a largo plazo son los:",
          opciones: ["lípidos", "carbohidratos", "proteínas", "vitaminas"],
          correcta: 0,
          explicacion: "Los lípidos (grasas) almacenan más del doble de energía por gramo que los carbohidratos; son la reserva energética a largo plazo y aíslan térmicamente.",
        },
      ],
    },
    {
      id: "al4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Alimentos · Biomoléculas · Reactivo 4 / 16",
          enunciado: "Las unidades básicas (monómeros) que forman las proteínas son los:",
          opciones: ["aminoácidos", "monosacáridos", "ácidos grasos", "nucleótidos"],
          correcta: 0,
          explicacion: "Las proteínas son polímeros de aminoácidos. Los monosacáridos forman carbohidratos; los ácidos grasos, lípidos; los nucleótidos, ácidos nucleicos.",
        },
      ],
    },
    {
      id: "al5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Alimentos · Biomoléculas · Reactivo 5 / 16",
          enunciado: "Los elementos químicos que forman principalmente a los carbohidratos son:",
          opciones: [
            "carbono, hidrógeno y oxígeno",
            "carbono, nitrógeno y fósforo",
            "sodio, cloro y potasio",
            "hierro, cobre y zinc",
          ],
          correcta: 0,
          explicacion: "Los carbohidratos están formados por C, H y O (de ahí el nombre 'hidratos de carbono', con H y O en proporción ~2:1 como en el agua).",
        },
      ],
    },
    {
      id: "al6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Alimentos · Biomoléculas · Reactivo 6 / 16",
          enunciado: "La glucosa es un ejemplo de:",
          opciones: ["monosacárido (carbohidrato simple)", "aminoácido", "ácido graso", "vitamina"],
          correcta: 0,
          explicacion: "La glucosa es un monosacárido, el azúcar simple más importante; es la fuente directa de energía de las células.",
        },
      ],
    },
    {
      id: "al7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Alimentos · Biomoléculas · Reactivo 7 / 16",
          enunciado: "El almidón, que almacenan las plantas, es un carbohidrato formado por muchas glucosas unidas; por eso se clasifica como:",
          opciones: ["polisacárido", "monosacárido", "disacárido", "lípido"],
          correcta: 0,
          explicacion: "El almidón es un polisacárido: un polímero de muchas unidades de glucosa. Es la forma en que las plantas almacenan energía.",
        },
      ],
    },
    {
      id: "al8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Alimentos · Biomoléculas · Reactivo 8 / 16",
          enunciado: "Una característica de los lípidos (grasas y aceites) es que son:",
          opciones: [
            "insolubles en agua (hidrofóbicos)",
            "muy solubles en agua",
            "cadenas de aminoácidos",
            "buenos conductores eléctricos",
          ],
          correcta: 0,
          explicacion: "Los lípidos son no polares, por eso no se disuelven en agua (hidrofóbicos); sí se disuelven en disolventes orgánicos. Esto les permite formar membranas.",
        },
      ],
    },
    {
      id: "al9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Alimentos · Biomoléculas · Reactivo 9 / 16",
          enunciado: "Los dos grupos funcionales que SIEMPRE están presentes en todo aminoácido son:",
          opciones: [
            "amino (–NH₂) y carboxilo (–COOH)",
            "hidroxilo (–OH) y aldehído (–CHO)",
            "carbonilo (C=O) y éter (–O–)",
            "fosfato y amino",
          ],
          correcta: 0,
          explicacion: "Todo aminoácido tiene un grupo amino (–NH₂, básico) y un grupo carboxilo (–COOH, ácido) unidos al mismo carbono; entre ellos se forma el enlace peptídico.",
        },
      ],
    },
    {
      id: "al10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Alimentos · Biomoléculas · Reactivo 10 / 16",
          enunciado: "Las biomoléculas que actúan como enzimas (catalizadores biológicos) son las:",
          opciones: ["proteínas", "grasas", "azúcares", "vitaminas"],
          correcta: 0,
          explicacion: "Casi todas las enzimas son proteínas; aceleran las reacciones del metabolismo. Las proteínas también cumplen funciones estructurales, de transporte y defensa.",
        },
      ],
    },
    {
      id: "al11",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Alimentos · Biomoléculas · Reactivo 11 / 16",
          enunciado: "Las sustancias que, en pequeñas cantidades, regulan el metabolismo y cuya falta produce enfermedades (escorbuto, raquitismo) son las:",
          opciones: ["vitaminas", "grasas", "proteínas estructurales", "carbohidratos"],
          correcta: 0,
          explicacion: "Las vitaminas son reguladoras: se necesitan en pequeñas cantidades pero son esenciales; su carencia causa enfermedades (vitamina C → escorbuto; vitamina D → raquitismo).",
        },
      ],
    },
    {
      id: "al12",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Alimentos · Biomoléculas · Reactivo 12 / 16",
          enunciado: "Un mineral importante para la formación de huesos y dientes es el:",
          opciones: ["calcio", "cloro", "carbono", "neón"],
          correcta: 0,
          explicacion: "El calcio (Ca) es el mineral estructural de huesos y dientes; también participa en la contracción muscular y la coagulación. Otros minerales: hierro (sangre), yodo (tiroides).",
        },
      ],
    },
    {
      id: "al13",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Alimentos · Biomoléculas · Reactivo 13 / 16",
          enunciado: "La unión de dos monosacáridos (como glucosa + fructosa para formar sacarosa) da lugar a un:",
          opciones: ["disacárido", "polisacárido", "aminoácido", "ácido graso"],
          correcta: 0,
          explicacion: "Dos monosacáridos unidos forman un disacárido (sacarosa = glucosa + fructosa; lactosa = glucosa + galactosa). Muchos forman un polisacárido.",
        },
      ],
    },
    {
      id: "al14",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Alimentos · Biomoléculas · Reactivo 14 / 16",
          enunciado: "El elemento químico que distingue a las PROTEÍNAS de los carbohidratos y lípidos es la presencia de:",
          opciones: ["nitrógeno (N)", "oxígeno (O)", "hidrógeno (H)", "carbono (C)"],
          correcta: 0,
          explicacion: "Las proteínas contienen nitrógeno (en el grupo amino de los aminoácidos), además de C, H y O. Carbohidratos y lípidos generalmente no tienen nitrógeno.",
        },
      ],
    },
    {
      id: "al15",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Alimentos · Biomoléculas · Reactivo 15 / 16",
          enunciado: "Por cada gramo, la biomolécula que aporta MÁS energía al organismo es:",
          opciones: ["el lípido (grasa)", "el carbohidrato", "la proteína", "la vitamina"],
          correcta: 0,
          explicacion: "Los lípidos aportan ~9 kcal/g, más del doble que los carbohidratos y proteínas (~4 kcal/g); por eso son una reserva tan eficiente de energía.",
        },
      ],
    },
    {
      id: "al16",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Alimentos · Biomoléculas · Reactivo 16 / 16",
          enunciado: "Al unirse muchos aminoácidos mediante enlaces peptídicos se forma una:",
          opciones: ["proteína (cadena polipeptídica)", "molécula de almidón", "grasa", "vitamina"],
          correcta: 0,
          explicacion: "Una cadena de muchos aminoácidos unidos por enlaces peptídicos es un polipéptido; al plegarse y alcanzar su forma funcional constituye una proteína.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "qaa-alimentos",
        },
      ],
    },
    {
      id: "energia",
      tipo: "lienzo",
      etiqueta: "Reacciones que liberan o absorben calor",
      titulo: "Energía en las reacciones químicas",
      bloques: [
        {
          tipo: "formula",
          math: "\\text{exotérmica: libera calor} \\quad|\\quad \\text{endotérmica: absorbe calor}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "qaa-energia",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\text{Exotérmica}",
              texto: "LIBERA energía (calor) al entorno; los productos tienen menos energía (combustión, oxidación)",
            },
            {
              math: "\\text{Endotérmica}",
              texto: "ABSORBE energía del entorno; se enfría alrededor (fotosíntesis, cocción)",
            },
            {
              math: "\\text{Reactivos / productos}",
              texto: "exo: reactivos > productos en energía; endo: productos > reactivos",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Toda reacción implica un cambio de energía. En las reacciones EXOTÉRMICAS se libera energía al entorno (normalmente como calor): el sistema se calienta hacia afuera; ejemplos: combustión, respiración, oxidación, neutralización. En las ENDOTÉRMICAS se absorbe energía del entorno (el alrededor se enfría); ejemplos: la fotosíntesis y la descomposición por calor. Regla rápida: 'exo' = energía hacia afuera (libera); 'endo' = energía hacia adentro (absorbe).",
        },
      ],
    },
    {
      id: "en1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Energía · Reacciones químicas · Reactivo 1 / 16",
          enunciado: "Una reacción que LIBERA calor hacia los alrededores se clasifica como:",
          opciones: ["exotérmica", "endotérmica", "catalítica", "reversible"],
          correcta: 0,
          explicacion: "Si la reacción libera energía (calor) al entorno, es exotérmica. 'Exo' significa hacia afuera.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "qaa-energia",
        },
      ],
    },
    {
      id: "en2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Energía · Reacciones químicas · Reactivo 2 / 16",
          enunciado: "Una reacción que ABSORBE calor del entorno (enfriando alrededor) es:",
          opciones: ["endotérmica", "exotérmica", "de combustión", "de neutralización"],
          correcta: 0,
          explicacion: "Si la reacción toma energía del entorno, es endotérmica. 'Endo' significa hacia adentro; el alrededor se enfría.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "qaa-energia",
        },
      ],
    },
    {
      id: "en3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Energía · Reacciones químicas · Reactivo 3 / 16",
          enunciado: "La combustión de la gasolina es un ejemplo de reacción:",
          opciones: ["exotérmica", "endotérmica", "que enfría el motor", "sin cambio de energía"],
          correcta: 0,
          explicacion: "La combustión libera mucha energía en forma de calor (y luz): es exotérmica. Esa energía es la que mueve el motor.",
        },
      ],
    },
    {
      id: "en4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Energía · Reacciones químicas · Reactivo 4 / 16",
          enunciado: "La fotosíntesis, que absorbe energía luminosa para formar glucosa, es una reacción:",
          opciones: ["endotérmica", "exotérmica", "de combustión", "de oxidación rápida"],
          correcta: 0,
          explicacion: "La fotosíntesis necesita absorber energía (de la luz solar) para construir glucosa: es endotérmica (absorbe energía del entorno).",
        },
      ],
    },
    {
      id: "en5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Energía · Reacciones químicas · Reactivo 5 / 16",
          enunciado: "En una reacción EXOTÉRMICA, los productos tienen, comparados con los reactivos, una energía:",
          opciones: ["menor", "mayor", "igual", "infinita"],
          correcta: 0,
          explicacion: "Como se libera energía al entorno, los productos quedan con menos energía que los reactivos; la diferencia se desprende como calor.",
        },
      ],
    },
    {
      id: "en6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Energía · Reacciones químicas · Reactivo 6 / 16",
          enunciado: "Al disolverse ciertas sales en agua, el recipiente se SIENTE FRÍO. Esto indica que el proceso es:",
          opciones: ["endotérmico (absorbe calor)", "exotérmico (libera calor)", "una combustión", "una oxidación"],
          correcta: 0,
          explicacion: "Si el entorno (el recipiente) se enfría, el proceso está absorbiendo calor del entorno: es endotérmico (así funcionan las compresas frías instantáneas).",
        },
      ],
    },
    {
      id: "en7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Energía · Reacciones químicas · Reactivo 7 / 16",
          enunciado: "Al mezclar un ácido fuerte con una base fuerte, el recipiente se CALIENTA. La neutralización es entonces:",
          opciones: ["exotérmica", "endotérmica", "sin energía", "reversible y fría"],
          correcta: 0,
          explicacion: "La neutralización libera calor (el recipiente se calienta): es una reacción exotérmica.",
        },
      ],
    },
    {
      id: "en8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Energía · Reacciones químicas · Reactivo 8 / 16",
          enunciado: "La respiración celular, que libera la energía de la glucosa, es un proceso:",
          opciones: ["exotérmico", "endotérmico", "que absorbe luz", "sin transferencia de energía"],
          correcta: 0,
          explicacion: "La respiración celular libera la energía almacenada en la glucosa (en forma de ATP y calor): es exotérmica. Es lo contrario de la fotosíntesis.",
        },
      ],
    },
    {
      id: "en9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Energía · Reacciones químicas · Reactivo 9 / 16",
          enunciado: "En una reacción ENDOTÉRMICA, los productos tienen, comparados con los reactivos, una energía:",
          opciones: ["mayor", "menor", "igual", "cero"],
          correcta: 0,
          explicacion: "Como la reacción absorbe energía del entorno, esa energía se almacena en los productos: los productos tienen más energía que los reactivos.",
        },
      ],
    },
    {
      id: "en10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Energía · Reacciones químicas · Reactivo 10 / 16",
          enunciado: "La energía mínima que necesitan los reactivos para que la reacción comience se llama energía de:",
          opciones: ["activación", "ionización", "enlace", "ebullición"],
          correcta: 0,
          explicacion: "La energía de activación es la 'barrera' inicial que deben superar los reactivos para reaccionar; por eso muchas reacciones necesitan una chispa o calor para iniciar.",
        },
      ],
    },
    {
      id: "en11",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Energía · Reacciones químicas · Reactivo 11 / 16",
          enunciado: "Una sustancia que acelera una reacción química sin consumirse en ella es un:",
          opciones: ["catalizador", "reactivo limitante", "producto", "soluto"],
          correcta: 0,
          explicacion: "Un catalizador disminuye la energía de activación y acelera la reacción sin gastarse. Las enzimas son catalizadores biológicos.",
        },
      ],
    },
    {
      id: "en12",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Energía · Reacciones químicas · Reactivo 12 / 16",
          enunciado: "La cocción de un huevo, que necesita aplicar calor para que ocurra, es un proceso:",
          opciones: ["endotérmico", "exotérmico", "de combustión", "espontáneo en frío"],
          correcta: 0,
          explicacion: "Hay que suministrar calor (energía) para que el huevo se cueza: el proceso absorbe energía, es endotérmico.",
        },
      ],
    },
    {
      id: "en13",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Energía · Reacciones químicas · Reactivo 13 / 16",
          enunciado: "El prefijo 'EXO' en 'exotérmica' significa que la energía va hacia:",
          opciones: ["afuera (se libera)", "adentro (se absorbe)", "los lados", "ningún lado"],
          correcta: 0,
          explicacion: "'Exo' = hacia afuera: la reacción exotérmica desprende energía hacia el entorno. 'Endo' = hacia adentro: la endotérmica la absorbe.",
        },
      ],
    },
    {
      id: "en14",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Energía · Reacciones químicas · Reactivo 14 / 16",
          enunciado: "La energía que se libera o absorbe en una reacción suele manifestarse principalmente como:",
          opciones: ["calor", "sonido", "sabor", "olor"],
          correcta: 0,
          explicacion: "La energía de las reacciones se manifiesta sobre todo como calor (y a veces luz o electricidad), por eso se habla de reacciones 'térmicas' (exo/endo).",
        },
      ],
    },
    {
      id: "en15",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Energía · Reacciones químicas · Reactivo 15 / 16",
          enunciado: "Las fogatas, los cohetes y la quema de combustibles son ejemplos de reacciones:",
          opciones: ["exotérmicas", "endotérmicas", "que enfrían el ambiente", "sin energía"],
          correcta: 0,
          explicacion: "Todas liberan grandes cantidades de energía (calor y luz) al entorno: son exotérmicas.",
        },
      ],
    },
    {
      id: "en16",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Energía · Reacciones químicas · Reactivo 16 / 16",
          enunciado: "Si durante una reacción la temperatura de los alrededores AUMENTA, la reacción es:",
          opciones: ["exotérmica", "endotérmica", "neutra", "imposible"],
          correcta: 0,
          explicacion: "Si los alrededores se calientan, la reacción está cediéndoles energía: es exotérmica. Si se enfriaran, sería endotérmica.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "qaa-energia",
        },
      ],
    },
    {
      id: "resumen",
      tipo: "lienzo",
      etiqueta: "Ideas clave de las Unidades 2–5",
      titulo: "Resumen",
      bloques: [
        {
          tipo: "lista",
          items: [
            {
              math: "\\mathrm{H_2O}",
              texto: "molécula angular y polar → puentes de hidrógeno, disolvente universal, hielo flota, alta capacidad calorífica",
            },
            {
              math: "\\text{pH}",
              texto: "< 7 ácido (H⁺), 7 neutro, > 7 básico (OH⁻); fuerte = se ioniza total; soluto se disuelve en disolvente",
            },
            {
              math: "\\text{Aire}",
              texto: "~78% N₂, ~21% O₂; combustión y respiración con O₂; redox = oxida (pierde e⁻) / reduce (gana e⁻)",
            },
            {
              math: "\\text{Contaminación}",
              texto: "agua: física/química/biológica; aire: óxidos, partículas; lluvia ácida (SO₂, NOₓ) e inversión térmica",
            },
            {
              math: "\\text{Biomoléculas}",
              texto: "carbohidratos (energía inmediata), lípidos (almacén), proteínas (aminoácidos + enlace peptídico), vitaminas/minerales",
            },
            {
              math: "\\text{Energía}",
              texto: "exotérmica libera calor (combustión, respiración); endotérmica lo absorbe (fotosíntesis, cocción)",
            },
          ],
        },
      ],
    },
  ],
};
