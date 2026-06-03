// Datos de la presentación: Termodinámica (Física · UNAM)
// Estructura: Teoría → Ejemplos resueltos → 18 ejercicios tipo UNAM → Resumen.

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

    // ── TEORÍA ────────────────────────────────────────────────────────────────
    {
      id: "temperatura-calor",
      tipo: "concepto",
      titulo: "Temperatura y Calor",
      etiqueta: "No son lo mismo",
      formula: "Q \\;\\neq\\; T",
      items: [
        { math: "T\\ \\text{(temperatura)}", texto: "mide el nivel de agitación de las partículas (qué tan caliente está)" },
        { math: "Q\\ \\text{(calor)}", texto: "energía que se transfiere por una diferencia de temperatura" },
        { math: "\\text{equilibrio}", texto: "dos cuerpos en contacto igualan su temperatura" }
      ],
      nota: "El calor siempre fluye del cuerpo caliente al frío, nunca al revés de forma espontánea. La temperatura es una propiedad; el calor es energía en tránsito (se mide en joules)."
    },

    {
      id: "escalas",
      tipo: "criterio_detalle",
      titulo: "Escalas de Temperatura",
      etiqueta: "Celsius, Kelvin y Fahrenheit",
      svgDiagram: "ter-escalas",
      enunciado: "La escala Celsius usa la congelación (0 °C) y ebullición (100 °C) del agua. La Kelvin es la escala absoluta del SI: parte del cero absoluto, la temperatura más baja posible.",
      math: "T_K = T_C + 273",
      por_que: "Un grado Celsius y un kelvin valen lo mismo de tamaño; solo cambia el punto de partida. El cero absoluto (0 K = −273 °C) es donde cesa la agitación de las partículas.",
      math_razon: "T_C = \\dfrac{T_F - 32}{1.8}, \\qquad 0\\ \\text{K} = -273\\ ^\\circ\\text{C}"
    },

    {
      id: "dilatacion",
      tipo: "criterio_detalle",
      titulo: "Dilatación Térmica",
      etiqueta: "Los cuerpos cambian de tamaño",
      svgDiagram: "ter-dilatacion",
      enunciado: "Al aumentar su temperatura, la mayoría de los cuerpos se dilatan (crecen); al enfriarse, se contraen. El cambio de longitud es proporcional a la longitud inicial y al cambio de temperatura.",
      math: "\\Delta L = \\alpha\\,L_0\\,\\Delta T",
      por_que: "α es el coeficiente de dilatación, propio de cada material. Por eso los puentes y las vías de tren llevan juntas de expansión: dejan espacio para que el material crezca con el calor.",
      math_razon: "\\Delta L \\propto L_0 \\ \\text{y}\\ \\Delta T"
    },

    {
      id: "calor-especifico",
      tipo: "concepto",
      titulo: "Calor Específico",
      etiqueta: "Cuánto calor cuesta calentar",
      formula: "Q = m\\,c\\,\\Delta T",
      items: [
        { math: "c", texto: "calor específico: energía para subir 1 °C a 1 kg de sustancia" },
        { math: "Q = mc\\Delta T", texto: "calor para cambiar la temperatura una cantidad ΔT" },
        { math: "Q = m\\,L", texto: "calor latente: para cambiar de fase (sin cambiar T)" }
      ],
      nota: "El agua tiene un calor específico alto (≈ 4200 J/kg·°C): cuesta mucho calentarla y enfriarla, por eso modera el clima. Durante un cambio de fase la temperatura no cambia."
    },

    {
      id: "gases",
      tipo: "criterio_detalle",
      titulo: "Leyes de los Gases",
      etiqueta: "Presión, volumen y temperatura",
      svgDiagram: "ter-gas",
      enunciado: "En un gas ideal, la presión, el volumen y la temperatura (en kelvin) están relacionados. Si una cambia, las otras se ajustan según la ley general de los gases.",
      math: "\\dfrac{P_1 V_1}{T_1} = \\dfrac{P_2 V_2}{T_2}",
      por_que: "A T constante, si subes la presión baja el volumen (Boyle). A P constante, si subes la temperatura crece el volumen (Charles). La temperatura SIEMPRE debe ir en kelvin.",
      math_razon: "P V = n R T \\qquad (\\text{ley del gas ideal})"
    },

    {
      id: "leyes-termo",
      tipo: "concepto",
      titulo: "Leyes de la Termodinámica",
      etiqueta: "Energía y dirección del calor",
      formula: "\\Delta U = Q - W",
      items: [
        { math: "\\text{1ª ley}", texto: "conservación de la energía: el calor se convierte en energía interna y trabajo" },
        { math: "\\text{2ª ley}", texto: "el calor fluye espontáneamente del cuerpo caliente al frío" },
        { math: "\\text{transferencia}", texto: "conducción, convección y radiación" }
      ],
      nota: "La primera ley es la conservación de la energía aplicada al calor. La segunda marca la dirección natural de los procesos: el desorden (entropía) tiende a aumentar."
    },

    {
      id: "transferencia",
      tipo: "concepto",
      titulo: "Transferencia de Calor",
      etiqueta: "Tres formas de propagarse",
      formula: "\\text{conducción · convección · radiación}",
      svgDiagram: "ter-transferencia",
      items: [
        { math: "\\text{conducción}", texto: "por contacto directo, sin que la materia se mueva (una barra metálica)" },
        { math: "\\text{convección}", texto: "por el movimiento del fluido caliente (el agua al hervir, el aire)" },
        { math: "\\text{radiación}", texto: "por ondas electromagnéticas, sin medio (el calor del Sol)" }
      ],
      nota: "La radiación es la única que viaja por el vacío: así llega el calor del Sol a la Tierra. La conducción necesita contacto; la convección, un fluido que circule."
    },

    // ── EJEMPLOS RESUELTOS ────────────────────────────────────────────────────
    {
      id: "ej-escala",
      tipo: "criterio_detalle",
      titulo: "Ejemplo 1 · Conversión de escalas",
      etiqueta: "De Celsius a Kelvin",
      enunciado: "Convierte una temperatura de 25 °C a la escala Kelvin.",
      math: "T_K = T_C + 273",
      por_que: "La conversión de Celsius a Kelvin solo suma 273, porque ambos grados tienen el mismo tamaño y solo cambia el origen de la escala.",
      math_razon: "T_K = 25 + 273 = 298\\ \\text{K}"
    },

    {
      id: "ej-calor",
      tipo: "criterio_detalle",
      titulo: "Ejemplo 2 · Calor específico",
      etiqueta: "Calor para calentar agua",
      enunciado: "¿Cuánto calor se necesita para elevar 10 °C la temperatura de 2 kg de agua? (c = 4200 J/kg·°C)",
      math: "Q = m\\,c\\,\\Delta T",
      por_que: "Se multiplican la masa, el calor específico y el cambio de temperatura. El resultado es la energía (en joules) que hay que entregar al agua.",
      math_razon: "Q = (2)(4200)(10) = 84\\,000\\ \\text{J}"
    },

    {
      id: "ej-dilatacion",
      tipo: "criterio_detalle",
      titulo: "Ejemplo 3 · Dilatación lineal",
      etiqueta: "Cuánto crece una barra",
      enunciado: "Una barra de 2 m se calienta 50 °C. Si su coeficiente de dilatación es α = 1.2 × 10⁻⁵ /°C, ¿cuánto aumenta su longitud?",
      math: "\\Delta L = \\alpha\\,L_0\\,\\Delta T",
      por_que: "Se sustituyen los tres factores. Aunque el cambio parezca pequeño, en estructuras grandes (puentes, rieles) se vuelve importante y por eso se dejan juntas de expansión.",
      math_razon: "\\Delta L = (1.2\\times 10^{-5})(2)(50) = 1.2\\times 10^{-3}\\ \\text{m} = 1.2\\ \\text{mm}"
    },

    {
      id: "ej-gas",
      tipo: "criterio_detalle",
      titulo: "Ejemplo 4 · Termómetro de gas",
      etiqueta: "Presión proporcional a la temperatura",
      svgDiagram: "ter-gas",
      enunciado: "Un termómetro de gas a volumen constante marca una presión P₁ cuando está a 273 K (punto triple del agua). Al tocar otro objeto, su presión sube de 8500 a 9650 (mismas unidades). ¿Cuál es la temperatura del objeto?",
      math: "\\dfrac{P_1}{T_1} = \\dfrac{P_2}{T_2}",
      por_que: "A volumen constante, la presión de un gas ideal es proporcional a su temperatura absoluta (en kelvin). Se despeja T₂ con una regla de tres.",
      math_razon: "T_2 = 273 \\cdot \\dfrac{9650}{8500} \\approx 310\\ \\text{K}"
    },

    // ── EJERCICIOS TIPO UNAM ──────────────────────────────────────────────────
    {
      id: "t1",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Ejercicio 1 / 18",
      pregunta: "El calor se define como:",
      opciones: ["Energía que se transfiere por una diferencia de temperatura", "Lo mismo que la temperatura", "Una sustancia que contienen los cuerpos calientes", "La cantidad de partículas de un cuerpo"],
      correcta: 0,
      explicacion: "El calor es energía en tránsito: fluye de un cuerpo a otro debido a la diferencia de temperatura entre ellos. Se mide en joules.",
      pasos: [
        { pre: "Energía en tránsito: ", math: "Q\\ \\text{(joules)}" }
      ]
    },

    {
      id: "t2",
      tipo: "ejercicio",
      svgDiagram: "ter-escalas",
      etiqueta: "Termodinámica · Ejercicio 2 / 18",
      pregunta: "¿A cuántos kelvin equivalen 27 °C?",
      opciones: ["300 K", "246 K", "27 K", "54 K"],
      correcta: 0,
      explicacion: "T_K = T_C + 273 = 27 + 273 = 300 K.",
      pasos: [
        { pre: "Celsius a Kelvin: ", math: "T_K = 27 + 273 = 300\\ \\text{K}" }
      ]
    },

    {
      id: "t3",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Ejercicio 3 / 18",
      pregunta: "Una temperatura de 300 K equivale en la escala Celsius a:",
      opciones: ["27 °C", "573 °C", "300 °C", "−273 °C"],
      correcta: 0,
      explicacion: "T_C = T_K − 273 = 300 − 273 = 27 °C.",
      pasos: [
        { pre: "Kelvin a Celsius: ", math: "T_C = 300 - 273 = 27\\ ^\\circ\\text{C}" }
      ]
    },

    {
      id: "t4",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Ejercicio 4 / 18",
      pregunta: "El cero absoluto, la temperatura más baja posible, corresponde a:",
      opciones: ["0 K = −273 °C", "0 °C", "−100 °C", "273 K"],
      correcta: 0,
      explicacion: "El cero absoluto es el origen de la escala Kelvin: 0 K, equivalente a −273 °C. Ahí cesa la agitación térmica de las partículas.",
      pasos: [
        { pre: "Cero absoluto: ", math: "0\\ \\text{K} = -273\\ ^\\circ\\text{C}" }
      ]
    },

    {
      id: "t5",
      tipo: "ejercicio",
      svgDiagram: "ter-dilatacion",
      etiqueta: "Termodinámica · Ejercicio 5 / 18",
      pregunta: "Al calentar una barra metálica, esta generalmente:",
      opciones: ["Se dilata (aumenta su longitud)", "Se contrae (disminuye su longitud)", "No cambia de tamaño", "Cambia de material"],
      correcta: 0,
      explicacion: "El calor aumenta la agitación de las partículas y estas ocupan más espacio: el material se dilata. Al enfriarse, se contrae.",
      pasos: [
        { pre: "Dilatación: ", math: "\\Delta L = \\alpha L_0 \\Delta T > 0" }
      ]
    },

    {
      id: "t6",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Ejercicio 6 / 18",
      pregunta: "Que el agua tenga un calor específico alto significa que:",
      opciones: ["Cuesta mucha energía cambiar su temperatura", "Se calienta y enfría muy rápido", "No puede hervir", "Tiene poca masa"],
      correcta: 0,
      explicacion: "Un calor específico alto implica que se requiere mucha energía para variar su temperatura; por eso el agua tarda en calentarse y en enfriarse, y regula el clima.",
      pasos: [
        { pre: "c alto: ", math: "Q = mc\\Delta T \\Rightarrow \\text{mucho } Q \\text{ por } \\Delta T" }
      ]
    },

    {
      id: "t7",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Ejercicio 7 / 18",
      pregunta: "¿Cuánto calor se requiere para elevar 10 °C la temperatura de 1 kg de agua? (c = 4200 J/kg·°C)",
      opciones: ["42 000 J", "4200 J", "420 000 J", "21 000 J"],
      correcta: 0,
      explicacion: "Q = m·c·ΔT = (1)(4200)(10) = 42 000 J.",
      pasos: [
        { pre: "Calor específico: ", math: "Q = (1)(4200)(10) = 42\\,000\\ \\text{J}" }
      ]
    },

    {
      id: "t8",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Ejercicio 8 / 18",
      pregunta: "Mientras un trozo de hielo se derrite, su temperatura:",
      opciones: ["Permanece constante (0 °C)", "Aumenta continuamente", "Disminuye", "Sube y luego baja"],
      correcta: 0,
      explicacion: "Durante un cambio de fase la energía (calor latente) se usa en romper la estructura, no en subir la temperatura: esta se mantiene constante hasta que termina el cambio.",
      pasos: [
        { pre: "Cambio de fase: ", math: "Q = mL \\quad (\\Delta T = 0)" }
      ]
    },

    {
      id: "t9",
      tipo: "ejercicio",
      svgDiagram: "ter-gas",
      etiqueta: "Termodinámica · Ejercicio 9 / 18",
      pregunta: "A temperatura constante, si la presión de un gas ideal aumenta, su volumen:",
      opciones: ["Disminuye", "Aumenta", "No cambia", "Se duplica"],
      correcta: 0,
      explicacion: "Es la ley de Boyle: a temperatura constante, presión y volumen son inversamente proporcionales. Si una sube, la otra baja.",
      pasos: [
        { pre: "Ley de Boyle: ", math: "P_1 V_1 = P_2 V_2" }
      ]
    },

    {
      id: "t10",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Ejercicio 10 / 18",
      pregunta: "A presión constante, si la temperatura (en kelvin) de un gas aumenta, su volumen:",
      opciones: ["Aumenta", "Disminuye", "No cambia", "Se vuelve cero"],
      correcta: 0,
      explicacion: "Es la ley de Charles: a presión constante, el volumen es directamente proporcional a la temperatura absoluta. Si T sube, V sube.",
      pasos: [
        { pre: "Ley de Charles: ", math: "\\dfrac{V_1}{T_1} = \\dfrac{V_2}{T_2}" }
      ]
    },

    {
      id: "t11",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Ejercicio 11 / 18",
      pregunta: "Un gas ocupa 2 L a 300 K. Si se calienta a 600 K manteniendo la presión constante, su nuevo volumen es:",
      opciones: ["4 L", "1 L", "2 L", "8 L"],
      correcta: 0,
      explicacion: "Por la ley de Charles, V₂ = V₁·(T₂/T₁) = 2·(600/300) = 2·2 = 4 L.",
      pasos: [
        { pre: "Charles: ", math: "V_2 = V_1\\dfrac{T_2}{T_1} = 2\\cdot\\dfrac{600}{300} = 4\\ \\text{L}" }
      ]
    },

    {
      id: "t12",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Ejercicio 12 / 18",
      pregunta: "¿Cuál es la unidad de temperatura en el Sistema Internacional?",
      opciones: ["El kelvin (K)", "El grado Celsius (°C)", "La caloría (cal)", "El joule (J)"],
      correcta: 0,
      explicacion: "La unidad SI de temperatura es el kelvin. El grado Celsius es de uso común, la caloría mide calor y el joule, energía.",
      pasos: [
        { pre: "SI: ", math: "[\\,T\\,] = \\text{K}" }
      ]
    },

    {
      id: "t13",
      tipo: "ejercicio",
      svgDiagram: "ter-transferencia",
      etiqueta: "Termodinámica · Ejercicio 13 / 18",
      pregunta: "El calor que se propaga a lo largo de una barra metálica, de su extremo caliente al frío, se transfiere por:",
      opciones: ["Conducción", "Convección", "Radiación", "Evaporación"],
      correcta: 0,
      explicacion: "En la conducción el calor pasa por contacto directo entre partículas, sin que la materia se desplace. Es típica de los sólidos, sobre todo los metales.",
      pasos: [
        { pre: "Sin movimiento de materia: ", math: "\\text{conducción}" }
      ]
    },

    {
      id: "t14",
      tipo: "ejercicio",
      svgDiagram: "ter-transferencia",
      etiqueta: "Termodinámica · Ejercicio 14 / 18",
      pregunta: "El calor del Sol llega a la Tierra atravesando el vacío del espacio. ¿Por qué mecanismo?",
      opciones: ["Radiación", "Conducción", "Convección", "Combustión"],
      correcta: 0,
      explicacion: "La radiación se propaga mediante ondas electromagnéticas y no necesita un medio material: es la única forma de transferencia que viaja por el vacío.",
      pasos: [
        { pre: "Sin medio material: ", math: "\\text{radiación}" }
      ]
    },

    {
      id: "t15",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Ejercicio 15 / 18",
      pregunta: "En una olla con agua hirviendo, el agua caliente sube y la fría baja, formando corrientes. Este mecanismo es:",
      opciones: ["Convección", "Conducción", "Radiación", "Dilatación"],
      correcta: 0,
      explicacion: "La convección transfiere calor por el movimiento del propio fluido: el caliente (menos denso) sube y el frío baja, generando corrientes.",
      pasos: [
        { pre: "Movimiento del fluido: ", math: "\\text{convección}" }
      ]
    },

    {
      id: "t16",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Ejercicio 16 / 18",
      pregunta: "La primera ley de la termodinámica es, esencialmente, la conservación de:",
      opciones: ["La energía", "La masa", "La cantidad de movimiento", "La carga eléctrica"],
      correcta: 0,
      explicacion: "La primera ley afirma que la energía no se crea ni se destruye: el calor que entra a un sistema se reparte entre su energía interna y el trabajo que realiza.",
      pasos: [
        { pre: "Primera ley: ", math: "\\Delta U = Q - W" }
      ]
    },

    {
      id: "t17",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Ejercicio 17 / 18",
      pregunta: "Dos cuerpos a distinta temperatura se ponen en contacto. Alcanzan el equilibrio térmico cuando:",
      opciones: ["Tienen la misma temperatura", "Tienen la misma masa", "Uno absorbe toda la energía del otro", "Dejan de existir"],
      correcta: 0,
      explicacion: "El calor fluye del caliente al frío hasta que ambos quedan a la misma temperatura: ese es el equilibrio térmico.",
      pasos: [
        { pre: "Equilibrio: ", math: "T_1 = T_2" }
      ]
    },

    {
      id: "t18",
      tipo: "ejercicio",
      etiqueta: "Termodinámica · Ejercicio 18 / 18",
      pregunta: "De forma espontánea, el calor siempre fluye:",
      opciones: ["Del cuerpo caliente al frío", "Del cuerpo frío al caliente", "En ambos sentidos por igual", "Del más grande al más pequeño"],
      correcta: 0,
      explicacion: "Es la segunda ley de la termodinámica: el calor pasa naturalmente del cuerpo de mayor temperatura al de menor, nunca al revés sin ayuda externa.",
      pasos: [
        { pre: "Segunda ley: ", math: "\\text{caliente} \\to \\text{frío}" }
      ]
    },

    // ── RESUMEN ───────────────────────────────────────────────────────────────
    {
      id: "resumen",
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Claves de la termodinámica",
      puntos: [
        { titulo: "Calor ≠ temperatura", texto: "el calor es energía en tránsito; la temperatura, el nivel de agitación" },
        { math: "T_K = T_C + 273", texto: "Kelvin es la escala absoluta; 0 K = −273 °C" },
        { math: "\\Delta L = \\alpha L_0 \\Delta T", texto: "dilatación: los cuerpos crecen al calentarse" },
        { math: "Q = m c \\Delta T", texto: "calor para cambiar la temperatura (c = calor específico)" },
        { math: "\\tfrac{P_1 V_1}{T_1} = \\tfrac{P_2 V_2}{T_2}", texto: "ley general de los gases (T en kelvin)" },
        { math: "\\Delta U = Q - W", texto: "1ª ley: conservación de la energía" },
        { titulo: "2ª ley", texto: "el calor fluye del cuerpo caliente al frío" },
        { titulo: "Transferencia", texto: "conducción (contacto), convección (fluido), radiación (vacío)" }
      ]
    }

  ]
};
