// Datos de la presentación: Termodinámica (Física · UNAM)
// Estructura por subtema: Teoría → Ejemplos resueltos → Reactivos tipo UNAM.
// Subtemas: Temperatura y calor · Escalas · Dilatación · Calor específico · Gases · Leyes · Transferencia → Resumen.

export const PRESENTACION = {
  id: "termodinamica",
  titulo: "Termodinámica",
  materia: "Física",
  subtema: "Calor y temperatura",
  slides: [
    // ── PORTADA ───────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Termodinámica",
      subtitulo: "Temperatura, escalas, calor, dilatación, gases y leyes de la termodinámica",
      etiqueta: "Física · UNAM",
      svgDiagram: "ter-portada",
    },

    // ══ SUBTEMA 1 · TEMPERATURA Y CALOR ═══════════════════════════════════════
    {
      id: "temperatura-calor",
      tipo: "concepto",
      titulo: "Temperatura y Calor",
      etiqueta: "No son lo mismo",
      formula: "Q \\;\\neq\\; T",
      items: [
        {
          math: "T\\ \\text{(temperatura)}",
          texto: "mide el nivel de agitación de las partículas (qué tan caliente está)",
        },
        {
          math: "Q\\ \\text{(calor)}",
          texto: "energía que se transfiere por una diferencia de temperatura",
        },
        { math: "\\text{equilibrio}", texto: "dos cuerpos en contacto igualan su temperatura" },
      ],
      nota: "El calor siempre fluye del cuerpo caliente al frío, nunca al revés de forma espontánea. La temperatura es una propiedad; el calor es energía en tránsito (se mide en joules).",
    },

    // Ejemplo · Temperatura y calor
    {
      id: "ej-temperatura",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Equilibrio térmico",
      etiqueta: "Hacia dónde fluye el calor",
      enunciado:
        "Pones una cuchara metálica fría dentro de una taza de café caliente. ¿En qué dirección fluye el calor y qué ocurre con las temperaturas?",
      math: "\\text{caliente} \\to \\text{frío}",
      por_que:
        "El calor siempre fluye del cuerpo de mayor temperatura (el café) al de menor (la cuchara). El café se enfría un poco y la cuchara se calienta, hasta que ambos llegan a la misma temperatura: el equilibrio térmico.",
      math_razon: "T_{café} \\downarrow,\\quad T_{cuchara} \\uparrow \\;\\Rightarrow\\; T_1 = T_2",
    },

    // Reactivos · Temperatura y calor (6)
    {
      id: "tc1",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Temperatura y calor · Reactivo 1 / 6",
      pregunta: "El calor se define como:",
      opciones: [
        "Energía que se transfiere por una diferencia de temperatura",
        "Lo mismo que la temperatura",
        "Una sustancia que contienen los cuerpos calientes",
        "La cantidad de partículas de un cuerpo",
      ],
      correcta: 0,
      explicacion:
        "El calor es energía en tránsito: fluye de un cuerpo a otro debido a la diferencia de temperatura entre ellos. Se mide en joules.",
      pasos: [{ pre: "Energía en tránsito: ", math: "Q\\ \\text{(joules)}" }],
    },

    {
      id: "tc2",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Temperatura y calor · Reactivo 2 / 6",
      pregunta:
        "Dos cuerpos a distinta temperatura se ponen en contacto. Alcanzan el equilibrio térmico cuando:",
      opciones: [
        "Tienen la misma temperatura",
        "Tienen la misma masa",
        "Uno absorbe toda la energía del otro",
        "Dejan de existir",
      ],
      correcta: 0,
      explicacion:
        "El calor fluye del caliente al frío hasta que ambos quedan a la misma temperatura: ese es el equilibrio térmico.",
      pasos: [{ pre: "Equilibrio: ", math: "T_1 = T_2" }],
    },

    {
      id: "tc3",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Temperatura y calor · Reactivo 3 / 6",
      pregunta: "La temperatura de un cuerpo es una medida de:",
      opciones: [
        "El nivel de agitación de sus partículas",
        "La cantidad de calor que contiene",
        "Su masa total",
        "Su volumen",
      ],
      correcta: 0,
      explicacion:
        "La temperatura mide qué tan agitadas están las partículas (su energía cinética promedio). No es lo mismo que el calor, que es energía en tránsito.",
      pasos: [{ pre: "Agitación de partículas: ", math: "T \\propto E_{c}\\ \\text{promedio}" }],
    },

    {
      id: "tc4",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Temperatura y calor · Reactivo 4 / 6",
      pregunta: "¿En qué unidad del Sistema Internacional se mide el calor?",
      opciones: ["El joule (J)", "El kelvin (K)", "El grado Celsius (°C)", "El newton (N)"],
      correcta: 0,
      explicacion:
        "El calor es una forma de energía, así que en el SI se mide en joules. La caloría es otra unidad de calor, pero no es la del SI.",
      pasos: [{ pre: "Energía: ", math: "[\\,Q\\,] = \\text{J}" }],
    },

    {
      id: "tc5",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Temperatura y calor · Reactivo 5 / 6",
      pregunta: "Al tocar un objeto que está más caliente que tu mano, el calor fluye:",
      opciones: [
        "Del objeto hacia tu mano",
        "De tu mano hacia el objeto",
        "En ningún sentido",
        "En ambos sentidos por igual",
      ],
      correcta: 0,
      explicacion:
        "El calor siempre se transfiere del cuerpo de mayor temperatura al de menor. Como el objeto está más caliente, el calor pasa de él a tu mano.",
      pasos: [{ pre: "Mayor a menor T: ", math: "\\text{caliente} \\to \\text{frío}" }],
    },

    {
      id: "tc6",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Temperatura y calor · Reactivo 6 / 6",
      pregunta: "¿Cuál de las siguientes afirmaciones es correcta?",
      opciones: [
        "El calor es energía y la temperatura es una propiedad",
        "El calor y la temperatura son lo mismo",
        "La temperatura es energía en tránsito",
        "El calor se mide en kelvin",
      ],
      correcta: 0,
      explicacion:
        "El calor es energía que se transfiere entre cuerpos; la temperatura es una propiedad que indica el nivel de agitación de las partículas. No son lo mismo.",
      pasos: [{ pre: "Distinción: ", math: "Q\\ \\text{(energía)} \\neq T\\ \\text{(propiedad)}" }],
    },

    // ══ SUBTEMA 2 · ESCALAS DE TEMPERATURA ════════════════════════════════════
    {
      id: "escalas",
      tipo: "criterio_detalle",
      titulo: "Escalas de Temperatura",
      etiqueta: "Celsius, Kelvin y Fahrenheit",
      svgDiagram: "ter-escalas",
      enunciado:
        "La escala Celsius usa la congelación (0 °C) y ebullición (100 °C) del agua. La Kelvin es la escala absoluta del SI: parte del cero absoluto, la temperatura más baja posible.",
      math: "T_K = T_C + 273",
      por_que:
        "Un grado Celsius y un kelvin valen lo mismo de tamaño; solo cambia el punto de partida. El cero absoluto (0 K = −273 °C) es donde cesa la agitación de las partículas.",
      math_razon: "T_C = \\dfrac{T_F - 32}{1.8}, \\qquad 0\\ \\text{K} = -273\\ ^\\circ\\text{C}",
    },

    // Ejemplo · Escalas
    {
      id: "ej-escala",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Conversión de escalas",
      etiqueta: "De Celsius a Kelvin",
      enunciado: "Convierte una temperatura de 25 °C a la escala Kelvin.",
      math: "T_K = T_C + 273",
      por_que:
        "La conversión de Celsius a Kelvin solo suma 273, porque ambos grados tienen el mismo tamaño y solo cambia el origen de la escala.",
      math_razon: "T_K = 25 + 273 = 298\\ \\text{K}",
    },

    // Reactivos · Escalas (7)
    {
      id: "es1",
      tipo: "ejercicio",
      svgDiagram: "ter-escalas",
      etiqueta: "Termodinámica · Escalas · Reactivo 1 / 7",
      pregunta: "¿A cuántos kelvin equivalen 27 °C?",
      opciones: ["300 K", "246 K", "27 K", "54 K"],
      correcta: 0,
      explicacion: "T_K = T_C + 273 = 27 + 273 = 300 K.",
      pasos: [{ pre: "Celsius a Kelvin: ", math: "T_K = 27 + 273 = 300\\ \\text{K}" }],
    },

    {
      id: "es2",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Escalas · Reactivo 2 / 7",
      pregunta: "Una temperatura de 300 K equivale en la escala Celsius a:",
      opciones: ["27 °C", "573 °C", "300 °C", "−273 °C"],
      correcta: 0,
      explicacion: "T_C = T_K − 273 = 300 − 273 = 27 °C.",
      pasos: [{ pre: "Kelvin a Celsius: ", math: "T_C = 300 - 273 = 27\\ ^\\circ\\text{C}" }],
    },

    {
      id: "es3",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Escalas · Reactivo 3 / 7",
      pregunta: "El cero absoluto, la temperatura más baja posible, corresponde a:",
      opciones: ["0 K = −273 °C", "0 °C", "−100 °C", "273 K"],
      correcta: 0,
      explicacion:
        "El cero absoluto es el origen de la escala Kelvin: 0 K, equivalente a −273 °C. Ahí cesa la agitación térmica de las partículas.",
      pasos: [{ pre: "Cero absoluto: ", math: "0\\ \\text{K} = -273\\ ^\\circ\\text{C}" }],
    },

    {
      id: "es4",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Escalas · Reactivo 4 / 7",
      pregunta: "¿Cuál es la unidad de temperatura en el Sistema Internacional?",
      opciones: ["El kelvin (K)", "El grado Celsius (°C)", "La caloría (cal)", "El joule (J)"],
      correcta: 0,
      explicacion:
        "La unidad SI de temperatura es el kelvin. El grado Celsius es de uso común, la caloría mide calor y el joule, energía.",
      pasos: [{ pre: "SI: ", math: "[\\,T\\,] = \\text{K}" }],
    },

    {
      id: "es5",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Escalas · Reactivo 5 / 7",
      pregunta: "El agua se congela a 0 °C. ¿A cuántos kelvin equivale esa temperatura?",
      opciones: ["273 K", "0 K", "−273 K", "32 K"],
      correcta: 0,
      explicacion: "T_K = T_C + 273 = 0 + 273 = 273 K.",
      pasos: [{ pre: "Celsius a Kelvin: ", math: "T_K = 0 + 273 = 273\\ \\text{K}" }],
    },

    {
      id: "es6",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Escalas · Reactivo 6 / 7",
      pregunta: "El agua hierve a 100 °C. ¿A cuántos kelvin equivale?",
      opciones: ["373 K", "173 K", "100 K", "273 K"],
      correcta: 0,
      explicacion: "T_K = T_C + 273 = 100 + 273 = 373 K.",
      pasos: [{ pre: "Celsius a Kelvin: ", math: "T_K = 100 + 273 = 373\\ \\text{K}" }],
    },

    {
      id: "es7",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Escalas · Reactivo 7 / 7",
      pregunta: "Un aumento de temperatura de 1 °C equivale a un aumento de:",
      opciones: ["1 K", "273 K", "33.8 K", "0 K"],
      correcta: 0,
      explicacion:
        "Un grado Celsius y un kelvin tienen el mismo tamaño; solo cambia el origen de la escala. Por eso un cambio de 1 °C es un cambio de 1 K.",
      pasos: [{ pre: "Mismo tamaño de grado: ", math: "\\Delta T_C = \\Delta T_K" }],
    },

    // ══ SUBTEMA 3 · DILATACIÓN TÉRMICA ════════════════════════════════════════
    {
      id: "dilatacion",
      tipo: "criterio_detalle",
      titulo: "Dilatación Térmica",
      etiqueta: "Los cuerpos cambian de tamaño",
      svgDiagram: "ter-dilatacion",
      enunciado:
        "Al aumentar su temperatura, la mayoría de los cuerpos se dilatan (crecen); al enfriarse, se contraen. El cambio de longitud es proporcional a la longitud inicial y al cambio de temperatura.",
      math: "\\Delta L = \\alpha\\,L_0\\,\\Delta T",
      por_que:
        "α es el coeficiente de dilatación, propio de cada material. Por eso los puentes y las vías de tren llevan juntas de expansión: dejan espacio para que el material crezca con el calor.",
      math_razon: "\\Delta L \\propto L_0 \\ \\text{y}\\ \\Delta T",
    },

    // Ejemplo · Dilatación
    {
      id: "ej-dilatacion",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Dilatación lineal",
      etiqueta: "Cuánto crece una barra",
      enunciado:
        "Una barra de 2 m se calienta 50 °C. Si su coeficiente de dilatación es α = 1.2 × 10⁻⁵ /°C, ¿cuánto aumenta su longitud?",
      math: "\\Delta L = \\alpha\\,L_0\\,\\Delta T",
      por_que:
        "Se sustituyen los tres factores. Aunque el cambio parezca pequeño, en estructuras grandes (puentes, rieles) se vuelve importante y por eso se dejan juntas de expansión.",
      math_razon:
        "\\Delta L = (1.2\\times 10^{-5})(2)(50) = 1.2\\times 10^{-3}\\ \\text{m} = 1.2\\ \\text{mm}",
    },

    // Reactivos · Dilatación (6)
    {
      id: "di1",
      tipo: "ejercicio",
      svgDiagram: "ter-dilatacion",
      etiqueta: "Termodinámica · Dilatación · Reactivo 1 / 6",
      pregunta: "Al calentar una barra metálica, esta generalmente:",
      opciones: [
        "Se dilata (aumenta su longitud)",
        "Se contrae (disminuye su longitud)",
        "No cambia de tamaño",
        "Cambia de material",
      ],
      correcta: 0,
      explicacion:
        "El calor aumenta la agitación de las partículas y estas ocupan más espacio: el material se dilata. Al enfriarse, se contrae.",
      pasos: [{ pre: "Dilatación: ", math: "\\Delta L = \\alpha L_0 \\Delta T > 0" }],
    },

    {
      id: "di2",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Dilatación · Reactivo 2 / 6",
      pregunta:
        "Una barra de 10 m se calienta 20 °C. Si α = 2 × 10⁻⁵ /°C, ¿cuánto aumenta su longitud?",
      opciones: ["4 mm", "4 cm", "0.4 mm", "40 mm"],
      correcta: 0,
      explicacion: "ΔL = α·L₀·ΔT = (2×10⁻⁵)(10)(20) = 4×10⁻³ m = 4 mm.",
      pasos: [
        {
          pre: "Dilatación: ",
          math: "\\Delta L = (2\\times 10^{-5})(10)(20) = 4\\times 10^{-3}\\ \\text{m} = 4\\ \\text{mm}",
        },
      ],
    },

    {
      id: "di3",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Dilatación · Reactivo 3 / 6",
      pregunta: "El aumento de longitud de una barra por dilatación es proporcional a:",
      opciones: [
        "Su longitud inicial y el cambio de temperatura",
        "Solo a su masa",
        "Solo al tiempo transcurrido",
        "Su color",
      ],
      correcta: 0,
      explicacion:
        "Según ΔL = α·L₀·ΔT, el cambio de longitud crece tanto con la longitud inicial L₀ como con el cambio de temperatura ΔT.",
      pasos: [
        { pre: "Proporcionalidad: ", math: "\\Delta L \\propto L_0\\ \\text{y}\\ \\Delta T" },
      ],
    },

    {
      id: "di4",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Dilatación · Reactivo 4 / 6",
      pregunta: "Al enfriarse, la mayoría de los cuerpos sólidos:",
      opciones: [
        "Se contraen (disminuyen su tamaño)",
        "Se dilatan",
        "No cambian de tamaño",
        "Se funden",
      ],
      correcta: 0,
      explicacion:
        "Al bajar la temperatura, las partículas se agitan menos y ocupan menos espacio: el cuerpo se contrae. Es el proceso inverso a la dilatación.",
      pasos: [{ pre: "Contracción: ", math: "\\Delta T < 0 \\Rightarrow \\Delta L < 0" }],
    },

    {
      id: "di5",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Dilatación · Reactivo 5 / 6",
      pregunta:
        "Los puentes y las vías de tren llevan juntas de expansión (pequeños espacios). ¿Por qué?",
      opciones: [
        "Para dejar lugar a la dilatación del material con el calor",
        "Para que pese menos",
        "Para que no conduzcan electricidad",
        "Para ahorrar material",
      ],
      correcta: 0,
      explicacion:
        "Con el calor, el metal se dilata; las juntas dejan el espacio necesario para que esa expansión no deforme ni rompa la estructura.",
      pasos: [{ pre: "Permitir el crecimiento: ", math: "\\Delta L = \\alpha L_0 \\Delta T" }],
    },

    {
      id: "di6",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Dilatación · Reactivo 6 / 6",
      pregunta: "Una barra de 5 m se calienta 100 °C. Si α = 1.2 × 10⁻⁵ /°C, ¿cuánto se dilata?",
      opciones: ["6 mm", "6 cm", "0.6 mm", "60 mm"],
      correcta: 0,
      explicacion: "ΔL = α·L₀·ΔT = (1.2×10⁻⁵)(5)(100) = 6×10⁻³ m = 6 mm.",
      pasos: [
        {
          pre: "Dilatación: ",
          math: "\\Delta L = (1.2\\times 10^{-5})(5)(100) = 6\\times 10^{-3}\\ \\text{m} = 6\\ \\text{mm}",
        },
      ],
    },

    // ══ SUBTEMA 4 · CALOR ESPECÍFICO Y CAMBIOS DE FASE ════════════════════════
    {
      id: "calor-especifico",
      tipo: "concepto",
      titulo: "Calor Específico",
      etiqueta: "Cuánto calor cuesta calentar",
      formula: "Q = m\\,c\\,\\Delta T",
      items: [
        { math: "c", texto: "calor específico: energía para subir 1 °C a 1 kg de sustancia" },
        { math: "Q = mc\\Delta T", texto: "calor para cambiar la temperatura una cantidad ΔT" },
        { math: "Q = m\\,L", texto: "calor latente: para cambiar de fase (sin cambiar T)" },
      ],
      nota: "El agua tiene un calor específico alto (≈ 4200 J/kg·°C): cuesta mucho calentarla y enfriarla, por eso modera el clima. Durante un cambio de fase la temperatura no cambia.",
    },

    // Ejemplo · Calor específico
    {
      id: "ej-calor",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Calor específico",
      etiqueta: "Calor para calentar agua",
      enunciado:
        "¿Cuánto calor se necesita para elevar 10 °C la temperatura de 2 kg de agua? (c = 4200 J/kg·°C)",
      math: "Q = m\\,c\\,\\Delta T",
      por_que:
        "Se multiplican la masa, el calor específico y el cambio de temperatura. El resultado es la energía (en joules) que hay que entregar al agua.",
      math_razon: "Q = (2)(4200)(10) = 84\\,000\\ \\text{J}",
    },

    // Reactivos · Calor específico (8)
    {
      id: "ce1",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Calor específico · Reactivo 1 / 8",
      pregunta: "Que el agua tenga un calor específico alto significa que:",
      opciones: [
        "Cuesta mucha energía cambiar su temperatura",
        "Se calienta y enfría muy rápido",
        "No puede hervir",
        "Tiene poca masa",
      ],
      correcta: 0,
      explicacion:
        "Un calor específico alto implica que se requiere mucha energía para variar su temperatura; por eso el agua tarda en calentarse y en enfriarse, y regula el clima.",
      pasos: [
        {
          pre: "c alto: ",
          math: "Q = mc\\Delta T \\Rightarrow \\text{mucho } Q \\text{ por } \\Delta T",
        },
      ],
    },

    {
      id: "ce2",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Calor específico · Reactivo 2 / 8",
      pregunta:
        "¿Cuánto calor se requiere para elevar 10 °C la temperatura de 1 kg de agua? (c = 4200 J/kg·°C)",
      opciones: ["42 000 J", "4200 J", "420 000 J", "21 000 J"],
      correcta: 0,
      explicacion: "Q = m·c·ΔT = (1)(4200)(10) = 42 000 J.",
      pasos: [{ pre: "Calor específico: ", math: "Q = (1)(4200)(10) = 42\\,000\\ \\text{J}" }],
    },

    {
      id: "ce3",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Calor específico · Reactivo 3 / 8",
      pregunta: "Mientras un trozo de hielo se derrite, su temperatura:",
      opciones: [
        "Permanece constante (0 °C)",
        "Aumenta continuamente",
        "Disminuye",
        "Sube y luego baja",
      ],
      correcta: 0,
      explicacion:
        "Durante un cambio de fase la energía (calor latente) se usa en romper la estructura, no en subir la temperatura: esta se mantiene constante hasta que termina el cambio.",
      pasos: [{ pre: "Cambio de fase: ", math: "Q = mL \\quad (\\Delta T = 0)" }],
    },

    {
      id: "ce4",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Calor específico · Reactivo 4 / 8",
      pregunta:
        "¿Cuánto calor se necesita para elevar 10 °C la temperatura de 3 kg de agua? (c = 4200 J/kg·°C)",
      opciones: ["126 000 J", "12 600 J", "42 000 J", "1 260 000 J"],
      correcta: 0,
      explicacion: "Q = m·c·ΔT = (3)(4200)(10) = 126 000 J.",
      pasos: [{ pre: "Calor específico: ", math: "Q = (3)(4200)(10) = 126\\,000\\ \\text{J}" }],
    },

    {
      id: "ce5",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Calor específico · Reactivo 5 / 8",
      pregunta:
        "El calor que se necesita para cambiar de fase una sustancia (sin que cambie su temperatura) se calcula con:",
      opciones: ["Q = m·L", "Q = m·c·ΔT", "Q = P·V", "Q = ½·m·v²"],
      correcta: 0,
      explicacion:
        "En un cambio de fase se usa el calor latente: Q = m·L, donde L es el calor latente de fusión o de vaporización. La temperatura no cambia durante el proceso.",
      pasos: [{ pre: "Calor latente: ", math: "Q = m\\,L" }],
    },

    {
      id: "ce6",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Calor específico · Reactivo 6 / 8",
      pregunta:
        "Se entregan 84 000 J a 2 kg de agua (c = 4200 J/kg·°C). ¿Cuánto sube su temperatura?",
      opciones: ["10 °C", "20 °C", "5 °C", "40 °C"],
      correcta: 0,
      explicacion:
        "De Q = m·c·ΔT se despeja ΔT = Q/(m·c) = 84 000 / (2·4200) = 84 000 / 8400 = 10 °C.",
      pasos: [
        {
          pre: "Despejando ΔT: ",
          math: "\\Delta T = \\dfrac{Q}{mc} = \\dfrac{84\\,000}{8400} = 10\\ ^\\circ\\text{C}",
        },
      ],
    },

    {
      id: "ce7",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Calor específico · Reactivo 7 / 8",
      pregunta: "Mientras el agua hierve a 100 °C, aunque se le siga dando calor, su temperatura:",
      opciones: ["Permanece constante", "Sigue subiendo", "Disminuye", "Sube de golpe a 200 °C"],
      correcta: 0,
      explicacion:
        "Durante la ebullición (un cambio de fase) el calor se usa en convertir el líquido en vapor, no en subir la temperatura, que se mantiene constante hasta que toda el agua se evapora.",
      pasos: [{ pre: "Cambio de fase: ", math: "Q = mL \\quad (\\Delta T = 0)" }],
    },

    {
      id: "ce8",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Calor específico · Reactivo 8 / 8",
      pregunta:
        "Con la misma cantidad de calor y la misma masa, ¿qué sustancia eleva más su temperatura?",
      opciones: [
        "La de menor calor específico",
        "La de mayor calor específico",
        "La de mayor masa",
        "Da igual, suben lo mismo",
      ],
      correcta: 0,
      explicacion:
        "Como ΔT = Q/(m·c), a menor calor específico c, mayor es el aumento de temperatura para la misma energía. Por eso los metales se calientan más rápido que el agua.",
      pasos: [{ pre: "ΔT inversa a c: ", math: "\\Delta T = \\dfrac{Q}{mc}" }],
    },

    // ══ SUBTEMA 5 · LEYES DE LOS GASES ════════════════════════════════════════
    {
      id: "gases",
      tipo: "criterio_detalle",
      titulo: "Leyes de los Gases",
      etiqueta: "Presión, volumen y temperatura",
      svgDiagram: "ter-gas",
      enunciado:
        "En un gas ideal, la presión, el volumen y la temperatura (en kelvin) están relacionados. Si una cambia, las otras se ajustan según la ley general de los gases.",
      math: "\\dfrac{P_1 V_1}{T_1} = \\dfrac{P_2 V_2}{T_2}",
      por_que:
        "A T constante, si subes la presión baja el volumen (Boyle). A P constante, si subes la temperatura crece el volumen (Charles). La temperatura SIEMPRE debe ir en kelvin.",
      math_razon: "P V = n R T \\qquad (\\text{ley del gas ideal})",
    },

    // Ejemplo · Leyes de los gases
    {
      id: "ej-gas",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Termómetro de gas",
      etiqueta: "Presión proporcional a la temperatura",
      svgDiagram: "ter-gas",
      enunciado:
        "Un termómetro de gas a volumen constante marca una presión P₁ cuando está a 273 K (punto triple del agua). Al tocar otro objeto, su presión sube de 8500 a 9650 (mismas unidades). ¿Cuál es la temperatura del objeto?",
      math: "\\dfrac{P_1}{T_1} = \\dfrac{P_2}{T_2}",
      por_que:
        "A volumen constante, la presión de un gas ideal es proporcional a su temperatura absoluta (en kelvin). Se despeja T₂ con una regla de tres.",
      math_razon: "T_2 = 273 \\cdot \\dfrac{9650}{8500} \\approx 310\\ \\text{K}",
    },

    // Reactivos · Leyes de los gases (8)
    {
      id: "gs1",
      tipo: "ejercicio",
      svgDiagram: "ter-gas",
      etiqueta: "Termodinámica · Leyes de los gases · Reactivo 1 / 8",
      pregunta: "A temperatura constante, si la presión de un gas ideal aumenta, su volumen:",
      opciones: ["Disminuye", "Aumenta", "No cambia", "Se duplica"],
      correcta: 0,
      explicacion:
        "Es la ley de Boyle: a temperatura constante, presión y volumen son inversamente proporcionales. Si una sube, la otra baja.",
      pasos: [{ pre: "Ley de Boyle: ", math: "P_1 V_1 = P_2 V_2" }],
    },

    {
      id: "gs2",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Leyes de los gases · Reactivo 2 / 8",
      pregunta: "A presión constante, si la temperatura (en kelvin) de un gas aumenta, su volumen:",
      opciones: ["Aumenta", "Disminuye", "No cambia", "Se vuelve cero"],
      correcta: 0,
      explicacion:
        "Es la ley de Charles: a presión constante, el volumen es directamente proporcional a la temperatura absoluta. Si T sube, V sube.",
      pasos: [{ pre: "Ley de Charles: ", math: "\\dfrac{V_1}{T_1} = \\dfrac{V_2}{T_2}" }],
    },

    {
      id: "gs3",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Leyes de los gases · Reactivo 3 / 8",
      pregunta:
        "Un gas ocupa 2 L a 300 K. Si se calienta a 600 K manteniendo la presión constante, su nuevo volumen es:",
      opciones: ["4 L", "1 L", "2 L", "8 L"],
      correcta: 0,
      explicacion: "Por la ley de Charles, V₂ = V₁·(T₂/T₁) = 2·(600/300) = 2·2 = 4 L.",
      pasos: [
        {
          pre: "Charles: ",
          math: "V_2 = V_1\\dfrac{T_2}{T_1} = 2\\cdot\\dfrac{600}{300} = 4\\ \\text{L}",
        },
      ],
    },

    {
      id: "gs4",
      tipo: "ejercicio",
      svgDiagram: "ter-gas",
      etiqueta: "Termodinámica · Leyes de los gases · Reactivo 4 / 8",
      pregunta:
        "Un gas ocupa 4 L a 2 atm. Si se comprime a 1 L a temperatura constante, ¿cuál es su nueva presión?",
      opciones: ["8 atm", "2 atm", "0.5 atm", "4 atm"],
      correcta: 0,
      explicacion: "Por la ley de Boyle, P₂ = P₁·V₁/V₂ = (2)(4)/1 = 8 atm.",
      pasos: [
        {
          pre: "Boyle: ",
          math: "P_2 = \\dfrac{P_1 V_1}{V_2} = \\dfrac{(2)(4)}{1} = 8\\ \\text{atm}",
        },
      ],
    },

    {
      id: "gs5",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Leyes de los gases · Reactivo 5 / 8",
      pregunta: "Al aplicar las leyes de los gases, la temperatura debe expresarse siempre en:",
      opciones: ["Kelvin", "Grados Celsius", "Grados Fahrenheit", "Joules"],
      correcta: 0,
      explicacion:
        "Las leyes de los gases requieren la temperatura absoluta (en kelvin); usar Celsius da resultados incorrectos porque su cero no es el cero absoluto.",
      pasos: [{ pre: "Temperatura absoluta: ", math: "T\\ \\text{en kelvin}" }],
    },

    {
      id: "gs6",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Leyes de los gases · Reactivo 6 / 8",
      pregunta: "A volumen constante, si la temperatura (en kelvin) de un gas aumenta, su presión:",
      opciones: ["Aumenta", "Disminuye", "No cambia", "Se vuelve cero"],
      correcta: 0,
      explicacion:
        "Es la ley de Gay-Lussac: a volumen constante, la presión es directamente proporcional a la temperatura absoluta. Si T sube, P sube.",
      pasos: [{ pre: "Ley de Gay-Lussac: ", math: "\\dfrac{P_1}{T_1} = \\dfrac{P_2}{T_2}" }],
    },

    {
      id: "gs7",
      tipo: "ejercicio",
      svgDiagram: "ter-gas",
      etiqueta: "Termodinámica · Leyes de los gases · Reactivo 7 / 8",
      pregunta:
        "Un gas ocupa 6 L a 1 atm. Si la presión sube a 2 atm a temperatura constante, ¿cuál es su nuevo volumen?",
      opciones: ["3 L", "12 L", "6 L", "1.5 L"],
      correcta: 0,
      explicacion: "Por la ley de Boyle, V₂ = P₁·V₁/P₂ = (1)(6)/2 = 3 L.",
      pasos: [
        {
          pre: "Boyle: ",
          math: "V_2 = \\dfrac{P_1 V_1}{P_2} = \\dfrac{(1)(6)}{2} = 3\\ \\text{L}",
        },
      ],
    },

    {
      id: "gs8",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Leyes de los gases · Reactivo 8 / 8",
      pregunta:
        "Un gas ocupa 3 L a 300 K. Si se enfría a 100 K manteniendo la presión constante, su nuevo volumen es:",
      opciones: ["1 L", "9 L", "3 L", "6 L"],
      correcta: 0,
      explicacion: "Por la ley de Charles, V₂ = V₁·(T₂/T₁) = 3·(100/300) = 3·(1/3) = 1 L.",
      pasos: [
        {
          pre: "Charles: ",
          math: "V_2 = V_1\\dfrac{T_2}{T_1} = 3\\cdot\\dfrac{100}{300} = 1\\ \\text{L}",
        },
      ],
    },

    // ══ SUBTEMA 6 · LEYES DE LA TERMODINÁMICA ═════════════════════════════════
    {
      id: "leyes-termo",
      tipo: "concepto",
      titulo: "Leyes de la Termodinámica",
      etiqueta: "Energía y dirección del calor",
      formula: "\\Delta U = Q - W",
      items: [
        {
          math: "\\text{1ª ley}",
          texto: "conservación de la energía: el calor se convierte en energía interna y trabajo",
        },
        {
          math: "\\text{2ª ley}",
          texto: "el calor fluye espontáneamente del cuerpo caliente al frío",
        },
        { math: "\\text{transferencia}", texto: "conducción, convección y radiación" },
      ],
      nota: "La primera ley es la conservación de la energía aplicada al calor. La segunda marca la dirección natural de los procesos: el desorden (entropía) tiende a aumentar.",
    },

    // Ejemplo · Leyes de la termodinámica
    {
      id: "ej-primera-ley",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Primera ley",
      etiqueta: "Calor, trabajo y energía interna",
      enunciado:
        "A un gas se le suministran 500 J de calor y, al expandirse, realiza 200 J de trabajo sobre el exterior. ¿Cuánto cambia su energía interna?",
      math: "\\Delta U = Q - W",
      por_que:
        "Por la primera ley (conservación de la energía), la energía interna aumenta con el calor que entra y disminuye con el trabajo que el gas realiza. Se restan ambas cantidades.",
      math_razon: "\\Delta U = 500 - 200 = 300\\ \\text{J}",
    },

    // Reactivos · Leyes de la termodinámica (6)
    {
      id: "lt1",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Leyes de la termodinámica · Reactivo 1 / 6",
      pregunta: "La primera ley de la termodinámica es, esencialmente, la conservación de:",
      opciones: ["La energía", "La masa", "La cantidad de movimiento", "La carga eléctrica"],
      correcta: 0,
      explicacion:
        "La primera ley afirma que la energía no se crea ni se destruye: el calor que entra a un sistema se reparte entre su energía interna y el trabajo que realiza.",
      pasos: [{ pre: "Primera ley: ", math: "\\Delta U = Q - W" }],
    },

    {
      id: "lt2",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Leyes de la termodinámica · Reactivo 2 / 6",
      pregunta: "De forma espontánea, el calor siempre fluye:",
      opciones: [
        "Del cuerpo caliente al frío",
        "Del cuerpo frío al caliente",
        "En ambos sentidos por igual",
        "Del más grande al más pequeño",
      ],
      correcta: 0,
      explicacion:
        "Es la segunda ley de la termodinámica: el calor pasa naturalmente del cuerpo de mayor temperatura al de menor, nunca al revés sin ayuda externa.",
      pasos: [{ pre: "Segunda ley: ", math: "\\text{caliente} \\to \\text{frío}" }],
    },

    {
      id: "lt3",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Leyes de la termodinámica · Reactivo 3 / 6",
      pregunta:
        "A un gas se le suministran 800 J de calor y realiza 300 J de trabajo. ¿Cuánto cambia su energía interna?",
      opciones: ["500 J", "1100 J", "300 J", "−500 J"],
      correcta: 0,
      explicacion: "Por la primera ley, ΔU = Q − W = 800 − 300 = 500 J.",
      pasos: [{ pre: "Primera ley: ", math: "\\Delta U = Q - W = 800 - 300 = 500\\ \\text{J}" }],
    },

    {
      id: "lt4",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Leyes de la termodinámica · Reactivo 4 / 6",
      pregunta: "Según la segunda ley, en un sistema aislado el desorden (entropía) tiende a:",
      opciones: ["Aumentar", "Disminuir", "Mantenerse siempre igual", "Volverse cero"],
      correcta: 0,
      explicacion:
        "La segunda ley establece que la entropía (el desorden) de un sistema aislado nunca disminuye: tiende a aumentar, marcando la dirección natural de los procesos.",
      pasos: [{ pre: "Entropía: ", math: "\\Delta S \\geq 0" }],
    },

    {
      id: "lt5",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Leyes de la termodinámica · Reactivo 5 / 6",
      pregunta: "Si un gas recibe 400 J de calor y no realiza ningún trabajo, su energía interna:",
      opciones: ["Aumenta 400 J", "Disminuye 400 J", "No cambia", "Aumenta 200 J"],
      correcta: 0,
      explicacion:
        "Por la primera ley, ΔU = Q − W. Si W = 0, entonces ΔU = Q = 400 J: todo el calor se convierte en energía interna.",
      pasos: [{ pre: "Con W = 0: ", math: "\\Delta U = Q = 400\\ \\text{J}" }],
    },

    {
      id: "lt6",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Leyes de la termodinámica · Reactivo 6 / 6",
      pregunta:
        "¿Es posible una máquina que convierta todo el calor que recibe en trabajo, sin ninguna pérdida?",
      opciones: [
        "No, lo prohíbe la segunda ley",
        "Sí, si está bien diseñada",
        "Sí, siempre",
        "Solo en la Tierra",
      ],
      correcta: 0,
      explicacion:
        "La segunda ley impide convertir todo el calor en trabajo: siempre se cede una parte a un foco frío. Por eso ninguna máquina térmica tiene 100 % de eficiencia.",
      pasos: [{ pre: "Segunda ley: ", math: "\\eta < 100\\%" }],
    },

    // ══ SUBTEMA 7 · TRANSFERENCIA DE CALOR ════════════════════════════════════
    {
      id: "transferencia",
      tipo: "concepto",
      titulo: "Transferencia de Calor",
      etiqueta: "Tres formas de propagarse",
      formula: "\\text{conducción ⋅ convección ⋅ radiación}",
      svgDiagram: "ter-transferencia",
      items: [
        {
          math: "\\text{conducción}",
          texto: "por contacto directo, sin que la materia se mueva (una barra metálica)",
        },
        {
          math: "\\text{convección}",
          texto: "por el movimiento del fluido caliente (el agua al hervir, el aire)",
        },
        {
          math: "\\text{radiación}",
          texto: "por ondas electromagnéticas, sin medio (el calor del Sol)",
        },
      ],
      nota: "La radiación es la única que viaja por el vacío: así llega el calor del Sol a la Tierra. La conducción necesita contacto; la convección, un fluido que circule.",
    },

    // Ejemplo · Transferencia de calor
    {
      id: "ej-transferencia",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Mecanismos de transferencia",
      etiqueta: "Conducción, convección o radiación",
      svgDiagram: "ter-transferencia",
      enunciado:
        "Acercas la mano a una fogata, sin tocarla y sin estar sobre el aire caliente que sube, y sientes el calor. ¿Por qué mecanismo te llega?",
      math: "\\text{conducción ⋅ convección ⋅ radiación}",
      por_que:
        "El calor que sientes sin contacto y sin un fluido que lo transporte llega por radiación: ondas electromagnéticas (infrarrojas) que viajan sin necesitar un medio material.",
      math_razon: "\\text{sin contacto y sin fluido} \\Rightarrow \\text{radiación}",
    },

    // Reactivos · Transferencia de calor (7)
    {
      id: "tr1",
      tipo: "ejercicio",
      svgDiagram: "ter-transferencia",
      etiqueta: "Termodinámica · Transferencia de calor · Reactivo 1 / 7",
      pregunta:
        "El calor que se propaga a lo largo de una barra metálica, de su extremo caliente al frío, se transfiere por:",
      opciones: ["Conducción", "Convección", "Radiación", "Evaporación"],
      correcta: 0,
      explicacion:
        "En la conducción el calor pasa por contacto directo entre partículas, sin que la materia se desplace. Es típica de los sólidos, sobre todo los metales.",
      pasos: [{ pre: "Sin movimiento de materia: ", math: "\\text{conducción}" }],
    },

    {
      id: "tr2",
      tipo: "ejercicio",
      svgDiagram: "ter-transferencia",
      etiqueta: "Termodinámica · Transferencia de calor · Reactivo 2 / 7",
      pregunta:
        "El calor del Sol llega a la Tierra atravesando el vacío del espacio. ¿Por qué mecanismo?",
      opciones: ["Radiación", "Conducción", "Convección", "Combustión"],
      correcta: 0,
      explicacion:
        "La radiación se propaga mediante ondas electromagnéticas y no necesita un medio material: es la única forma de transferencia que viaja por el vacío.",
      pasos: [{ pre: "Sin medio material: ", math: "\\text{radiación}" }],
    },

    {
      id: "tr3",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Transferencia de calor · Reactivo 3 / 7",
      pregunta:
        "En una olla con agua hirviendo, el agua caliente sube y la fría baja, formando corrientes. Este mecanismo es:",
      opciones: ["Convección", "Conducción", "Radiación", "Dilatación"],
      correcta: 0,
      explicacion:
        "La convección transfiere calor por el movimiento del propio fluido: el caliente (menos denso) sube y el frío baja, generando corrientes.",
      pasos: [{ pre: "Movimiento del fluido: ", math: "\\text{convección}" }],
    },

    {
      id: "tr4",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Transferencia de calor · Reactivo 4 / 7",
      pregunta: "¿Cuál de los tres mecanismos de transferencia de calor puede viajar por el vacío?",
      opciones: ["La radiación", "La conducción", "La convección", "Ninguno"],
      correcta: 0,
      explicacion:
        "Solo la radiación, al propagarse por ondas electromagnéticas, no necesita un medio material y puede atravesar el vacío. La conducción y la convección requieren materia.",
      pasos: [{ pre: "Sin medio: ", math: "\\text{radiación}" }],
    },

    {
      id: "tr5",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Transferencia de calor · Reactivo 5 / 7",
      pregunta:
        "Dejas una cuchara metálica dentro de una sopa caliente y al rato el mango también se calienta. Esto es:",
      opciones: ["Conducción", "Convección", "Radiación", "Evaporación"],
      correcta: 0,
      explicacion:
        "El calor se transmite a lo largo del metal por contacto directo entre sus partículas, sin que el material se desplace: es conducción.",
      pasos: [{ pre: "Por contacto en el sólido: ", math: "\\text{conducción}" }],
    },

    {
      id: "tr6",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Transferencia de calor · Reactivo 6 / 7",
      pregunta:
        "Un calefactor calienta una habitación: el aire caliente sube y el frío baja, circulando. El mecanismo es:",
      opciones: ["Convección", "Conducción", "Radiación", "Sublimación"],
      correcta: 0,
      explicacion:
        "El aire, al ser un fluido, transporta el calor con su propio movimiento: el caliente sube y el frío baja, formando corrientes de convección.",
      pasos: [{ pre: "Movimiento del aire: ", math: "\\text{convección}" }],
    },

    {
      id: "tr7",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Transferencia de calor · Reactivo 7 / 7",
      pregunta:
        "¿Cuál mecanismo de transferencia de calor requiere contacto directo entre los cuerpos?",
      opciones: ["La conducción", "La radiación", "La convección", "Ninguno"],
      correcta: 0,
      explicacion:
        "La conducción transfiere el calor por contacto directo entre partículas. Los metales son buenos conductores; la radiación, en cambio, no necesita contacto.",
      pasos: [{ pre: "Por contacto: ", math: "\\text{conducción}" }],
    },

    // ── RESUMEN ───────────────────────────────────────────────────────────────
    {
      id: "resumen",
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Claves de la termodinámica",
      puntos: [
        {
          titulo: "Calor ≠ temperatura",
          texto: "el calor es energía en tránsito; la temperatura, el nivel de agitación",
        },
        { math: "T_K = T_C + 273", texto: "Kelvin es la escala absoluta; 0 K = −273 °C" },
        {
          math: "\\Delta L = \\alpha L_0 \\Delta T",
          texto: "dilatación: los cuerpos crecen al calentarse",
        },
        {
          math: "Q = m c \\Delta T",
          texto: "calor para cambiar la temperatura (c = calor específico)",
        },
        {
          math: "\\tfrac{P_1 V_1}{T_1} = \\tfrac{P_2 V_2}{T_2}",
          texto: "ley general de los gases (T en kelvin)",
        },
        { math: "\\Delta U = Q - W", texto: "1ª ley: conservación de la energía" },
        { titulo: "2ª ley", texto: "el calor fluye del cuerpo caliente al frío" },
        {
          titulo: "Transferencia",
          texto: "conducción (contacto), convección (fluido), radiación (vacío)",
        },
      ],
    },
  ],
};
