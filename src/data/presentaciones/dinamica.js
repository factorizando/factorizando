// Datos de la presentación: Dinámica · Leyes de Newton (Física · UNAM)
// Estructura por subtema: Teoría → Ejemplos resueltos → Reactivos tipo UNAM.
// Subtemas: Fuerza · 1ª ley · 2ª ley · 3ª ley · Peso y masa · Fricción · Hooke · Gravitación → Resumen.

export const PRESENTACION = {
  id: "dinamica",
  titulo: "Leyes de Newton",
  materia: "Física",
  subtema: "Mecánica",
  slides: [

    // ── PORTADA ───────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Leyes de Newton",
      subtitulo: "Dinámica: fuerzas, inercia, F = ma, acción-reacción, fricción y Hooke",
      etiqueta: "Física · UNAM",
      svgDiagram: "din-portada",
    },

    // ══ SUBTEMA 1 · FUERZA ════════════════════════════════════════════════════
    {
      id: "fuerza",
      tipo: "concepto",
      titulo: "Fuerza",
      etiqueta: "La causa del cambio de movimiento",
      formula: "1\\ \\text{N} = 1\\ \\dfrac{\\text{kg}\\cdot\\text{m}}{\\text{s}^2}",
      svgDiagram: "din-fuerza-neta",
      items: [
        { math: "\\vec{F}", texto: "es un vector: tiene magnitud, dirección y sentido" },
        { math: "\\text{contacto}", texto: "empujar, jalar, fricción, tensión, normal" },
        { math: "\\text{a distancia}", texto: "gravedad, fuerza eléctrica, magnética" },
        { math: "\\sum \\vec{F}", texto: "fuerza neta o resultante: la suma de todas las fuerzas" }
      ],
      nota: "La fuerza se mide en newtons (N). 1 N es la fuerza que da a 1 kg una aceleración de 1 m/s². Lo que determina el movimiento es la fuerza NETA, no cada fuerza por separado."
    },

    // Ejemplo · Fuerza
    {
      id: "ej-fuerza-resultante",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Fuerza resultante",
      etiqueta: "Suma de fuerzas perpendiculares",
      svgDiagram: "din-fuerza-neta",
      enunciado: "Sobre un objeto actúan dos fuerzas perpendiculares entre sí: una de 3 N hacia el este y otra de 4 N hacia el norte. ¿Cuál es la magnitud de la fuerza neta?",
      math: "F = \\sqrt{F_x^2 + F_y^2}",
      por_que: "Cuando las fuerzas forman un ángulo recto, la resultante es la hipotenusa del triángulo que forman: se aplica el teorema de Pitágoras, no una simple suma.",
      math_razon: "F = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\ \\text{N}"
    },

    // Reactivos · Fuerza (6)
    {
      id: "fz1",
      tipo: "ejercicio",
      svgDiagram: "din-fuerza-neta",
      etiqueta: "Leyes de Newton · Fuerza · Reactivo 1 / 6",
      pregunta: "Sobre un cuerpo actúan dos fuerzas horizontales: 40 N hacia la derecha y 25 N hacia la izquierda. ¿Cuál es la fuerza neta?",
      opciones: ["15 N a la derecha", "65 N a la derecha", "15 N a la izquierda", "1000 N a la derecha"],
      correcta: 0,
      explicacion: "Al tener sentidos opuestos, las fuerzas se restan: 40 − 25 = 15 N, en el sentido de la mayor (a la derecha).",
      pasos: [
        { pre: "Fuerza neta: ", math: "\\sum F = 40 - 25 = 15\\ \\text{N (derecha)}" }
      ]
    },

    {
      id: "fz2",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Fuerza · Reactivo 2 / 6",
      pregunta: "¿Cuál es la unidad de fuerza en el Sistema Internacional?",
      opciones: ["El newton (N)", "El joule (J)", "El watt (W)", "El pascal (Pa)"],
      correcta: 0,
      explicacion: "La fuerza se mide en newtons. 1 N = 1 kg·m/s². El joule es energía, el watt potencia y el pascal presión.",
      pasos: [
        { pre: "Definición: ", math: "1\\ \\text{N} = 1\\ \\dfrac{\\text{kg}\\cdot\\text{m}}{\\text{s}^2}" }
      ]
    },

    {
      id: "fz3",
      tipo: "ejercicio",
      svgDiagram: "din-fuerza-neta",
      etiqueta: "Leyes de Newton · Fuerza · Reactivo 3 / 6",
      pregunta: "Sobre un objeto actúan dos fuerzas perpendiculares: 6 N y 8 N. ¿Cuál es la magnitud de la fuerza neta?",
      opciones: ["10 N", "14 N", "48 N", "2 N"],
      correcta: 0,
      explicacion: "Al ser perpendiculares, la resultante es la hipotenusa: F = √(6² + 8²) = √(36 + 64) = √100 = 10 N.",
      pasos: [
        { pre: "Teorema de Pitágoras: ", math: "F = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10\\ \\text{N}" }
      ]
    },

    {
      id: "fz4",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Fuerza · Reactivo 4 / 6",
      pregunta: "Dos fuerzas de 30 N y 20 N actúan sobre un cuerpo en la misma dirección y sentido. ¿Cuál es la fuerza neta?",
      opciones: ["50 N", "10 N", "600 N", "25 N"],
      correcta: 0,
      explicacion: "Cuando las fuerzas tienen el mismo sentido, se suman: 30 + 20 = 50 N.",
      pasos: [
        { pre: "Mismo sentido: ", math: "\\sum F = 30 + 20 = 50\\ \\text{N}" }
      ]
    },

    {
      id: "fz5",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Fuerza · Reactivo 5 / 6",
      pregunta: "La fuerza es una magnitud:",
      opciones: ["Vectorial (tiene magnitud, dirección y sentido)", "Escalar (solo magnitud)", "Sin unidades", "Que solo existe en reposo"],
      correcta: 0,
      explicacion: "La fuerza es un vector: para describirla por completo hace falta su magnitud, su dirección y su sentido.",
      pasos: [
        { pre: "Vector: ", math: "\\vec{F} = (F_x, F_y)" }
      ]
    },

    {
      id: "fz6",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Fuerza · Reactivo 6 / 6",
      pregunta: "¿Cuál de las siguientes es una fuerza que actúa a distancia (sin contacto)?",
      opciones: ["La gravedad", "La tensión de una cuerda", "La fuerza normal", "La fricción"],
      correcta: 0,
      explicacion: "La gravedad actúa entre cuerpos separados, sin necesidad de contacto. La tensión, la normal y la fricción son fuerzas de contacto.",
      pasos: [
        { pre: "A distancia: ", math: "F_{grav} = G\\dfrac{m_1 m_2}{r^2}" }
      ]
    },

    // ══ SUBTEMA 2 · PRIMERA LEY (INERCIA) ═════════════════════════════════════
    {
      id: "primera-ley",
      tipo: "criterio_detalle",
      titulo: "Primera Ley: Inercia",
      etiqueta: "Un cuerpo no cambia su movimiento solo",
      enunciado: "Todo cuerpo permanece en reposo o en movimiento rectilíneo uniforme a menos que una fuerza neta actúe sobre él. La inercia es la resistencia a cambiar el estado de movimiento.",
      math: "\\sum \\vec{F} = 0 \\;\\Rightarrow\\; v = \\text{constante}",
      por_que: "Si las fuerzas se equilibran (fuerza neta cero), el objeto no acelera: sigue como estaba. Por eso usamos cinturón de seguridad: al frenar el coche, tu cuerpo «quiere» seguir en movimiento.",
      math_razon: "\\text{reposo o MRU} \\iff \\sum \\vec{F} = 0"
    },

    // Ejemplo · Primera ley
    {
      id: "ej-inercia",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Inercia",
      etiqueta: "Por qué te vas hacia adelante al frenar",
      enunciado: "Vas sentado en un autobús en movimiento y de pronto frena bruscamente. ¿Por qué tu cuerpo se va hacia adelante?",
      math: "\\sum F = 0 \\;\\Rightarrow\\; v = \\text{constante}",
      por_que: "Por inercia, tu cuerpo «quiere» seguir con la velocidad que llevaba. El autobús frena por la fuerza de sus frenos, pero sobre tu cuerpo no actúa esa fuerza, así que tiende a continuar hacia adelante. Por eso es vital el cinturón de seguridad.",
      math_razon: "\\text{sin fuerza que lo frene} \\Rightarrow \\text{el cuerpo mantiene su movimiento}"
    },

    // Reactivos · Primera ley (6)
    {
      id: "pl1",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Primera ley · Reactivo 1 / 6",
      pregunta: "Un libro permanece en reposo sobre una mesa. ¿Por qué no se mueve?",
      opciones: ["Porque la fuerza neta sobre él es cero", "Porque no tiene masa", "Porque sobre él no actúa la gravedad", "Porque la mesa lo empuja con más fuerza que su peso"],
      correcta: 0,
      explicacion: "El peso (hacia abajo) y la fuerza normal (hacia arriba) se equilibran: la fuerza neta es cero, así que por la primera ley el libro sigue en reposo.",
      pasos: [
        { pre: "Primera ley: ", math: "\\sum F = N - P = 0 \\Rightarrow v = 0" }
      ]
    },

    {
      id: "pl2",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Primera ley · Reactivo 2 / 6",
      pregunta: "La tendencia de un cuerpo a mantener su estado de reposo o de movimiento se llama:",
      opciones: ["Inercia", "Fricción", "Peso", "Aceleración"],
      correcta: 0,
      explicacion: "La inercia es esa resistencia al cambio de movimiento, y es el contenido de la primera ley de Newton. Depende de la masa: a más masa, más inercia.",
      pasos: [
        { pre: "Primera ley: ", math: "\\sum F = 0 \\Rightarrow v = \\text{constante}" }
      ]
    },

    {
      id: "pl3",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Primera ley · Reactivo 3 / 6",
      pregunta: "Cuando un auto frena bruscamente, los pasajeros son lanzados hacia adelante. Esto se debe a:",
      opciones: ["La inercia (tienden a seguir en movimiento)", "La fuerza centrípeta", "La acción-reacción", "El peso de los pasajeros"],
      correcta: 0,
      explicacion: "Por inercia, los pasajeros tienden a conservar la velocidad que llevaban; como el freno actúa sobre el auto y no directamente sobre ellos, continúan hacia adelante.",
      pasos: [
        { pre: "Primera ley: ", math: "\\sum F = 0 \\Rightarrow v = \\text{constante}" }
      ]
    },

    {
      id: "pl4",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Primera ley · Reactivo 4 / 6",
      pregunta: "¿De qué magnitud depende la inercia de un cuerpo?",
      opciones: ["De su masa (a más masa, más inercia)", "De su velocidad", "De su peso en la Luna", "De la fricción"],
      correcta: 0,
      explicacion: "La inercia es la resistencia a cambiar el estado de movimiento y depende únicamente de la masa: cuanta más masa, más cuesta acelerar o frenar el cuerpo.",
      pasos: [
        { pre: "Inercia ∝ masa: ", math: "m \\uparrow \\Rightarrow \\text{inercia} \\uparrow" }
      ]
    },

    {
      id: "pl5",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Primera ley · Reactivo 5 / 6",
      pregunta: "Un objeto se mueve en línea recta con velocidad constante. ¿Cuál es la fuerza neta sobre él?",
      opciones: ["Cero", "Igual a su peso", "Constante y hacia adelante", "Igual a su masa"],
      correcta: 0,
      explicacion: "Si la velocidad es constante (MRU), no hay aceleración; por la primera ley, eso significa que la fuerza neta es cero.",
      pasos: [
        { pre: "MRU: ", math: "v = \\text{cte} \\Rightarrow \\sum F = 0" }
      ]
    },

    {
      id: "pl6",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Primera ley · Reactivo 6 / 6",
      pregunta: "Una nave en el espacio profundo apaga sus motores, lejos de cualquier fuerza. ¿Qué le ocurre?",
      opciones: ["Sigue moviéndose en línea recta a velocidad constante", "Se detiene de inmediato", "Acelera sin parar", "Da vueltas en círculo"],
      correcta: 0,
      explicacion: "Sin fuerza neta que la frene o desvíe, por la primera ley la nave conserva su movimiento: continúa en línea recta con velocidad constante.",
      pasos: [
        { pre: "Sin fuerza: ", math: "\\sum F = 0 \\Rightarrow v = \\text{constante}" }
      ]
    },

    // ══ SUBTEMA 3 · SEGUNDA LEY (F = ma) ══════════════════════════════════════
    {
      id: "segunda-ley",
      tipo: "criterio_detalle",
      titulo: "Segunda Ley: F = ma",
      etiqueta: "La fuerza neta produce aceleración",
      svgDiagram: "din-segunda-ley",
      enunciado: "La aceleración de un cuerpo es directamente proporcional a la fuerza neta que recibe e inversamente proporcional a su masa. Es la ecuación central de la dinámica.",
      math: "\\sum \\vec{F} = m\\,\\vec{a}",
      por_que: "A más fuerza, más aceleración; a más masa, menos aceleración (cuesta más mover algo pesado). La aceleración siempre apunta en la dirección de la fuerza neta.",
      math_razon: "a = \\dfrac{\\sum F}{m}, \\qquad [\\,F\\,] = \\text{N} = \\text{kg}\\cdot\\tfrac{m}{s^2}"
    },

    // Ejemplos · Segunda ley
    {
      id: "ej-fuerza-neta",
      tipo: "criterio_detalle",
      titulo: "Ejemplo 1 · Segunda ley con dos fuerzas",
      etiqueta: "Fuerza neta y aceleración",
      enunciado: "Sobre un objeto de 100 kg se aplican dos fuerzas en la misma dirección pero de sentido contrario: una de 30 N y otra de 20 N. ¿Cuál es la magnitud de su aceleración?",
      math: "a = \\dfrac{\\sum F}{m}",
      por_que: "Como las fuerzas son opuestas, la fuerza neta es la resta: 30 − 20 = 10 N. Luego se aplica la segunda ley dividiendo entre la masa.",
      math_razon: "\\sum F = 30 - 20 = 10\\ \\text{N}, \\qquad a = \\dfrac{10}{100} = 0.1\\ \\tfrac{m}{s^2}"
    },

    {
      id: "ej-segunda-masa",
      tipo: "criterio_detalle",
      titulo: "Ejemplo 2 · Despejar la masa",
      etiqueta: "Cuando el dato buscado es la masa",
      enunciado: "Una fuerza neta de 24 N le da a un objeto una aceleración de 3 m/s². ¿Cuál es su masa?",
      math: "F = m\\,a \\;\\Rightarrow\\; m = \\dfrac{F}{a}",
      por_que: "La segunda ley se puede despejar para cualquiera de las tres variables. Aquí buscamos la masa, así que dividimos la fuerza entre la aceleración.",
      math_razon: "m = \\dfrac{24}{3} = 8\\ \\text{kg}"
    },

    // Reactivos · Segunda ley (8)
    {
      id: "sl1",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Segunda ley · Reactivo 1 / 8",
      pregunta: "¿Qué fuerza neta se necesita para que un objeto de 5 kg adquiera una aceleración de 3 m/s²?",
      opciones: ["15 N", "1.67 N", "8 N", "45 N"],
      correcta: 0,
      explicacion: "Por la segunda ley, F = m·a = (5)(3) = 15 N.",
      pasos: [
        { pre: "Segunda ley: ", math: "F = m\\,a = (5)(3) = 15\\ \\text{N}" }
      ]
    },

    {
      id: "sl2",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Segunda ley · Reactivo 2 / 8",
      pregunta: "Una fuerza neta de 20 N actúa sobre un objeto de 4 kg. ¿Cuál es su aceleración?",
      opciones: ["5 m/s²", "80 m/s²", "0.2 m/s²", "16 m/s²"],
      correcta: 0,
      explicacion: "a = F / m = 20 / 4 = 5 m/s².",
      pasos: [
        { pre: "Despejando a: ", math: "a = \\dfrac{F}{m} = \\dfrac{20}{4} = 5\\ \\tfrac{m}{s^2}" }
      ]
    },

    {
      id: "sl3",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Segunda ley · Reactivo 3 / 8",
      pregunta: "Una fuerza neta de 50 N produce una aceleración de 10 m/s² en un objeto. ¿Cuál es su masa?",
      opciones: ["5 kg", "500 kg", "0.2 kg", "40 kg"],
      correcta: 0,
      explicacion: "De F = m·a se despeja m = F / a = 50 / 10 = 5 kg.",
      pasos: [
        { pre: "Despejando la masa: ", math: "m = \\dfrac{F}{a} = \\dfrac{50}{10} = 5\\ \\text{kg}" }
      ]
    },

    {
      id: "sl4",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Segunda ley · Reactivo 4 / 8",
      pregunta: "Si se duplica la fuerza neta sobre un objeto manteniendo su masa, su aceleración:",
      opciones: ["Se duplica", "Se reduce a la mitad", "No cambia", "Se cuadruplica"],
      correcta: 0,
      explicacion: "Como a = F/m, con la masa fija la aceleración es proporcional a la fuerza: al duplicar F, a también se duplica.",
      pasos: [
        { pre: "a proporcional a F: ", math: "a = \\dfrac{F}{m} \\Rightarrow 2F \\Rightarrow 2a" }
      ]
    },

    {
      id: "sl5",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Segunda ley · Reactivo 5 / 8",
      pregunta: "¿Qué fuerza neta produce una aceleración de 4 m/s² en un objeto de 10 kg?",
      opciones: ["40 N", "2.5 N", "14 N", "0.4 N"],
      correcta: 0,
      explicacion: "F = m·a = (10)(4) = 40 N.",
      pasos: [
        { pre: "Segunda ley: ", math: "F = m\\,a = (10)(4) = 40\\ \\text{N}" }
      ]
    },

    {
      id: "sl6",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Segunda ley · Reactivo 6 / 8",
      pregunta: "Una fuerza neta de 100 N actúa sobre un objeto de 25 kg. ¿Cuál es su aceleración?",
      opciones: ["4 m/s²", "2500 m/s²", "0.25 m/s²", "125 m/s²"],
      correcta: 0,
      explicacion: "a = F / m = 100 / 25 = 4 m/s².",
      pasos: [
        { pre: "Despejando a: ", math: "a = \\dfrac{F}{m} = \\dfrac{100}{25} = 4\\ \\tfrac{m}{s^2}" }
      ]
    },

    {
      id: "sl7",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Segunda ley · Reactivo 7 / 8",
      pregunta: "Si se duplica la masa de un objeto manteniendo la misma fuerza neta, su aceleración:",
      opciones: ["Se reduce a la mitad", "Se duplica", "No cambia", "Se cuadruplica"],
      correcta: 0,
      explicacion: "Como a = F/m, la aceleración es inversamente proporcional a la masa: al duplicar m, la aceleración se reduce a la mitad.",
      pasos: [
        { pre: "a inversa a m: ", math: "a = \\dfrac{F}{m} \\Rightarrow 2m \\Rightarrow \\dfrac{a}{2}" }
      ]
    },

    {
      id: "sl8",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Segunda ley · Reactivo 8 / 8",
      pregunta: "La aceleración de un cuerpo siempre tiene la misma dirección que:",
      opciones: ["La fuerza neta aplicada", "Su velocidad", "Su peso", "La fuerza de fricción"],
      correcta: 0,
      explicacion: "Según F = ma, la aceleración es un vector que apunta en la misma dirección y sentido que la fuerza neta resultante.",
      pasos: [
        { pre: "Misma dirección: ", math: "\\vec{a} = \\dfrac{\\sum \\vec{F}}{m}" }
      ]
    },

    // ══ SUBTEMA 4 · TERCERA LEY (ACCIÓN-REACCIÓN) ═════════════════════════════
    {
      id: "tercera-ley",
      tipo: "criterio_detalle",
      titulo: "Tercera Ley: Acción-Reacción",
      etiqueta: "Toda fuerza tiene su par",
      svgDiagram: "din-tercera-ley",
      enunciado: "A toda acción corresponde una reacción de igual magnitud pero sentido contrario. Si A empuja a B, B empuja a A con la misma fuerza.",
      math: "\\vec{F}_{AB} = -\\,\\vec{F}_{BA}",
      por_que: "Las dos fuerzas actúan sobre cuerpos distintos, por eso no se cancelan. Al caminar empujas el suelo hacia atrás y el suelo te impulsa hacia adelante; así avanzas.",
      math_razon: "|\\vec{F}_{AB}| = |\\vec{F}_{BA}| \\quad (\\text{sobre cuerpos diferentes})"
    },

    // Ejemplo · Tercera ley
    {
      id: "ej-tercera",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Acción-reacción",
      etiqueta: "Las fuerzas del par son iguales",
      svgDiagram: "din-tercera-ley",
      enunciado: "Una persona empuja contra una pared con una fuerza de 200 N. ¿Con qué fuerza la pared empuja a la persona?",
      math: "\\vec{F}_{AB} = -\\,\\vec{F}_{BA}",
      por_que: "Por la tercera ley, la pared responde con una fuerza de igual magnitud y sentido contrario: 200 N sobre la persona. Las dos fuerzas actúan sobre cuerpos distintos, por eso no se cancelan.",
      math_razon: "|\\vec{F}_{pared}| = |\\vec{F}_{persona}| = 200\\ \\text{N}"
    },

    // Reactivos · Tercera ley (6)
    {
      id: "tl1",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Tercera ley · Reactivo 1 / 6",
      pregunta: "Al caminar, empujas el suelo hacia atrás y el suelo te impulsa hacia adelante. ¿Qué ley lo explica?",
      opciones: ["Tercera ley (acción-reacción)", "Primera ley (inercia)", "Segunda ley (F = ma)", "Ley de Hooke"],
      correcta: 0,
      explicacion: "Es un par acción-reacción: tu pie ejerce una fuerza sobre el suelo y el suelo ejerce una fuerza igual y opuesta sobre ti. Esa es la tercera ley.",
      pasos: [
        { pre: "Tercera ley: ", math: "\\vec{F}_{AB} = -\\vec{F}_{BA}" }
      ]
    },

    {
      id: "tl2",
      tipo: "ejercicio",
      svgDiagram: "din-tercera-ley",
      etiqueta: "Leyes de Newton · Tercera ley · Reactivo 2 / 6",
      pregunta: "Un martillo golpea un clavo ejerciendo 100 N sobre él. ¿Con qué fuerza el clavo actúa sobre el martillo?",
      opciones: ["100 N, en sentido contrario", "Menos de 100 N", "Más de 100 N", "Cero"],
      correcta: 0,
      explicacion: "Por la tercera ley, la reacción tiene la misma magnitud (100 N) y sentido opuesto. Aunque el clavo se mueva más, las fuerzas del par son iguales.",
      pasos: [
        { pre: "Acción-reacción: ", math: "|\\vec{F}_{mc}| = |\\vec{F}_{cm}| = 100\\ \\text{N}" }
      ]
    },

    {
      id: "tl3",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Tercera ley · Reactivo 3 / 6",
      pregunta: "Un cohete avanza porque expulsa gases hacia atrás. ¿Qué ley de Newton lo explica?",
      opciones: ["Tercera ley (acción-reacción)", "Primera ley (inercia)", "Ley de gravitación", "Ley de Hooke"],
      correcta: 0,
      explicacion: "El cohete empuja los gases hacia atrás (acción) y los gases empujan al cohete hacia adelante (reacción): es la tercera ley.",
      pasos: [
        { pre: "Acción-reacción: ", math: "\\vec{F}_{gas} = -\\vec{F}_{cohete}" }
      ]
    },

    {
      id: "tl4",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Tercera ley · Reactivo 4 / 6",
      pregunta: "Las fuerzas de un par acción-reacción no se cancelan entre sí porque:",
      opciones: ["Actúan sobre cuerpos distintos", "Tienen magnitudes diferentes", "Apuntan en el mismo sentido", "Una es mucho mayor"],
      correcta: 0,
      explicacion: "Aunque son iguales en magnitud y opuestas en sentido, cada fuerza del par actúa sobre un cuerpo diferente, por eso no se anulan.",
      pasos: [
        { pre: "Sobre cuerpos diferentes: ", math: "\\vec{F}_{AB}\\ \\text{en B},\\quad \\vec{F}_{BA}\\ \\text{en A}" }
      ]
    },

    {
      id: "tl5",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Tercera ley · Reactivo 5 / 6",
      pregunta: "Una persona empuja una pared con una fuerza de 150 N. ¿Con qué fuerza la pared la empuja a ella?",
      opciones: ["150 N en sentido contrario", "Cero", "75 N", "300 N"],
      correcta: 0,
      explicacion: "Por la tercera ley, la pared reacciona con una fuerza de igual magnitud (150 N) y sentido opuesto sobre la persona.",
      pasos: [
        { pre: "Acción-reacción: ", math: "|\\vec{F}_{pared}| = |\\vec{F}_{persona}| = 150\\ \\text{N}" }
      ]
    },

    {
      id: "tl6",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Tercera ley · Reactivo 6 / 6",
      pregunta: "Dos patinadores en hielo se empujan mutuamente. Las fuerzas que ejercen uno sobre el otro son:",
      opciones: ["Iguales en magnitud y de sentido contrario", "Mayores en el más pesado", "Mayores en el más ligero", "Cero, porque están en hielo"],
      correcta: 0,
      explicacion: "Por la tercera ley, las fuerzas entre los dos patinadores son iguales en magnitud y opuestas, sin importar sus masas (lo que sí cambia es la aceleración de cada uno).",
      pasos: [
        { pre: "Par acción-reacción: ", math: "\\vec{F}_{12} = -\\vec{F}_{21}" }
      ]
    },

    // ══ SUBTEMA 5 · PESO Y MASA ═══════════════════════════════════════════════
    {
      id: "peso-masa",
      tipo: "concepto",
      titulo: "Peso y Masa",
      etiqueta: "No son lo mismo",
      formula: "P = m\\,g",
      items: [
        { math: "m\\ \\text{(masa)}", texto: "cantidad de materia; escalar en kg; no cambia de lugar" },
        { math: "P\\ \\text{(peso)}", texto: "fuerza con que la gravedad atrae; vector en N" },
        { math: "g \\approx 9.8\\ \\tfrac{m}{s^2}", texto: "aceleración de la gravedad en la Tierra" }
      ],
      nota: "La masa es la misma en la Tierra, la Luna o el espacio. El peso cambia con g: en la Luna (g ≈ 1.6 m/s²) pesarías unas 6 veces menos, pero tu masa sería idéntica."
    },

    // Ejemplo · Peso y masa
    {
      id: "ej-peso",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Peso",
      etiqueta: "Diferencia entre peso y masa",
      enunciado: "¿Cuánto pesa en la Tierra una persona cuya masa es de 60 kg? (g = 9.8 m/s²)",
      math: "P = m\\,g",
      por_que: "El peso es una fuerza, así que se mide en newtons. Se obtiene multiplicando la masa por la gravedad. Su masa (60 kg) no cambiaría en la Luna, pero su peso sí.",
      math_razon: "P = (60)(9.8) = 588\\ \\text{N}"
    },

    // Reactivos · Peso y masa (7)
    {
      id: "pm1",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Peso y masa · Reactivo 1 / 7",
      pregunta: "La masa de un astronauta en la Luna, comparada con la que tiene en la Tierra, es:",
      opciones: ["La misma", "Menor", "Mayor", "Cero"],
      correcta: 0,
      explicacion: "La masa es la cantidad de materia y no depende del lugar: es la misma en la Tierra y en la Luna. Lo que cambia es el peso, porque g es distinta.",
      pasos: [
        { pre: "Masa invariable; cambia el peso: ", math: "P = m\\,g" }
      ]
    },

    {
      id: "pm2",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Peso y masa · Reactivo 2 / 7",
      pregunta: "¿Cuánto pesa un objeto cuya masa es de 10 kg? (g = 9.8 m/s²)",
      opciones: ["98 N", "10 N", "9.8 N", "980 N"],
      correcta: 0,
      explicacion: "P = m·g = (10)(9.8) = 98 N.",
      pasos: [
        { pre: "Peso: ", math: "P = m\\,g = (10)(9.8) = 98\\ \\text{N}" }
      ]
    },

    {
      id: "pm3",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Peso y masa · Reactivo 3 / 7",
      pregunta: "Un objeto pesa 60 N en la Tierra. En la Luna, donde la gravedad es menor, su peso será:",
      opciones: ["Menor que 60 N", "Mayor que 60 N", "Igual a 60 N", "Cero"],
      correcta: 0,
      explicacion: "El peso es P = m·g. Como en la Luna g es menor (≈ 1.6 m/s²), el peso disminuye, aunque la masa siga igual.",
      pasos: [
        { pre: "Menor g ⇒ menor peso: ", math: "P_{Luna} = m\\,g_{Luna} < P_{Tierra}" }
      ]
    },

    {
      id: "pm4",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Peso y masa · Reactivo 4 / 7",
      pregunta: "¿Cuánto pesa un objeto de 5 kg de masa? (g = 10 m/s²)",
      opciones: ["50 N", "5 N", "0.5 N", "15 N"],
      correcta: 0,
      explicacion: "P = m·g = (5)(10) = 50 N.",
      pasos: [
        { pre: "Peso: ", math: "P = m\\,g = (5)(10) = 50\\ \\text{N}" }
      ]
    },

    {
      id: "pm5",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Peso y masa · Reactivo 5 / 7",
      pregunta: "Un objeto pesa 100 N en la Tierra. ¿Cuál es su masa? (g = 10 m/s²)",
      opciones: ["10 kg", "1000 kg", "100 kg", "0.1 kg"],
      correcta: 0,
      explicacion: "De P = m·g se despeja m = P / g = 100 / 10 = 10 kg.",
      pasos: [
        { pre: "Despejando la masa: ", math: "m = \\dfrac{P}{g} = \\dfrac{100}{10} = 10\\ \\text{kg}" }
      ]
    },

    {
      id: "pm6",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Peso y masa · Reactivo 6 / 7",
      pregunta: "De las siguientes, ¿cuál es una fuerza (magnitud vectorial)?",
      opciones: ["El peso", "La masa", "El tiempo", "La temperatura"],
      correcta: 0,
      explicacion: "El peso es la fuerza con que la gravedad atrae a un cuerpo, por eso es un vector y se mide en newtons. La masa es un escalar.",
      pasos: [
        { pre: "Peso (fuerza): ", math: "\\vec{P} = m\\,\\vec{g}" }
      ]
    },

    {
      id: "pm7",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Peso y masa · Reactivo 7 / 7",
      pregunta: "¿En qué unidades se mide la masa y en cuáles el peso, respectivamente?",
      opciones: ["Kilogramos (kg) y newtons (N)", "Newtons (N) y kilogramos (kg)", "Ambos en kilogramos", "Ambos en newtons"],
      correcta: 0,
      explicacion: "La masa, como cantidad de materia, se mide en kilogramos; el peso, al ser una fuerza, se mide en newtons.",
      pasos: [
        { pre: "Unidades: ", math: "[\\,m\\,] = \\text{kg}, \\qquad [\\,P\\,] = \\text{N}" }
      ]
    },

    // ══ SUBTEMA 6 · FUERZA NORMAL Y FRICCIÓN ══════════════════════════════════
    {
      id: "normal-friccion",
      tipo: "concepto",
      titulo: "Fuerza Normal y Fricción",
      etiqueta: "Las fuerzas de las superficies",
      formula: "f = \\mu\\,N",
      svgDiagram: "din-friccion",
      items: [
        { math: "N\\ \\text{(normal)}", texto: "fuerza perpendicular que la superficie ejerce sobre el objeto" },
        { math: "f\\ \\text{(fricción)}", texto: "se opone al movimiento; es paralela a la superficie" },
        { math: "\\mu", texto: "coeficiente de fricción (sin unidades): depende de los materiales" }
      ],
      nota: "La fricción estática evita que el objeto empiece a moverse; la cinética actúa cuando ya se desliza. En una superficie horizontal, la normal es igual al peso (N = mg)."
    },

    // Ejemplo · Fricción
    {
      id: "ej-friccion",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Fricción",
      etiqueta: "Fuerza de fricción",
      enunciado: "Un bloque se desliza sobre una superficie con coeficiente de fricción μ = 0.4 y una fuerza normal de 50 N. ¿Cuál es la fuerza de fricción?",
      math: "f = \\mu\\,N",
      por_que: "La fricción solo necesita el coeficiente y la fuerza normal. Se multiplican directamente. Esta fuerza se opone al movimiento del bloque.",
      math_razon: "f = (0.4)(50) = 20\\ \\text{N}"
    },

    // Reactivos · Fricción (6)
    {
      id: "fr1",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Fricción · Reactivo 1 / 6",
      pregunta: "Un bloque se desliza con un coeficiente de fricción μ = 0.5 y una fuerza normal de 80 N. ¿Cuál es la fuerza de fricción?",
      opciones: ["40 N", "160 N", "0.00625 N", "80.5 N"],
      correcta: 0,
      explicacion: "f = μ·N = (0.5)(80) = 40 N.",
      pasos: [
        { pre: "Fricción: ", math: "f = \\mu\\,N = (0.5)(80) = 40\\ \\text{N}" }
      ]
    },

    {
      id: "fr2",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Fricción · Reactivo 2 / 6",
      pregunta: "Un libro descansa sobre una mesa horizontal. La fuerza normal que la mesa ejerce sobre el libro es:",
      opciones: ["Perpendicular a la superficie, hacia arriba", "Paralela a la superficie", "Igual a la fuerza de fricción", "Dirigida hacia abajo"],
      correcta: 0,
      explicacion: "La fuerza normal siempre es perpendicular a la superficie de contacto. Sobre una mesa horizontal apunta verticalmente hacia arriba y equilibra el peso.",
      pasos: [
        { pre: "En superficie horizontal: ", math: "N = P = m\\,g" }
      ]
    },

    {
      id: "fr3",
      tipo: "ejercicio",
      svgDiagram: "din-friccion",
      etiqueta: "Leyes de Newton · Fricción · Reactivo 3 / 6",
      pregunta: "Un bloque se desliza con coeficiente de fricción μ = 0.3 y una fuerza normal de 100 N. ¿Cuál es la fuerza de fricción?",
      opciones: ["30 N", "300 N", "0.003 N", "100.3 N"],
      correcta: 0,
      explicacion: "f = μ·N = (0.3)(100) = 30 N.",
      pasos: [
        { pre: "Fricción: ", math: "f = \\mu\\,N = (0.3)(100) = 30\\ \\text{N}" }
      ]
    },

    {
      id: "fr4",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Fricción · Reactivo 4 / 6",
      pregunta: "La fuerza de fricción sobre un objeto que se desliza siempre:",
      opciones: ["Se opone al movimiento", "Apunta en la dirección del movimiento", "Es perpendicular a la superficie", "Es cero"],
      correcta: 0,
      explicacion: "La fricción es una fuerza paralela a la superficie que siempre actúa en sentido contrario al movimiento (o a la tendencia de movimiento) del objeto.",
      pasos: [
        { pre: "Sentido contrario: ", math: "f = \\mu\\,N\\ \\text{(opuesta a } v)" }
      ]
    },

    {
      id: "fr5",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Fricción · Reactivo 5 / 6",
      pregunta: "Sobre una superficie horizontal, sin fuerzas verticales extra, la fuerza normal es igual a:",
      opciones: ["El peso del objeto (mg)", "La fuerza de fricción", "Cero", "La masa del objeto"],
      correcta: 0,
      explicacion: "En una superficie horizontal el objeto no acelera verticalmente, así que la normal equilibra al peso: N = mg.",
      pasos: [
        { pre: "Equilibrio vertical: ", math: "N = P = m\\,g" }
      ]
    },

    {
      id: "fr6",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Fricción · Reactivo 6 / 6",
      pregunta: "¿Cómo se llama la fricción que actúa sobre un objeto antes de que empiece a moverse?",
      opciones: ["Fricción estática", "Fricción cinética", "Fuerza normal", "Tensión"],
      correcta: 0,
      explicacion: "La fricción estática es la que impide que el objeto empiece a deslizarse; una vez en movimiento, actúa la fricción cinética.",
      pasos: [
        { pre: "Antes de moverse: ", math: "f_{est} \\geq f_{cin}" }
      ]
    },

    // ══ SUBTEMA 7 · LEY DE HOOKE ══════════════════════════════════════════════
    {
      id: "hooke",
      tipo: "criterio_detalle",
      titulo: "Ley de Hooke",
      etiqueta: "La fuerza de un resorte",
      svgDiagram: "din-hooke",
      enunciado: "La fuerza que ejerce un resorte es directamente proporcional a su deformación (lo que se estira o comprime). Mientras no se deforme permanentemente, vale esta ley.",
      math: "F = k\\,x",
      por_que: "k es la constante del resorte (su «dureza», en N/m): a mayor k, más rígido. Si estiras el doble, la fuerza es el doble. La gráfica fuerza-deformación es una recta.",
      math_razon: "x = \\dfrac{F}{k}, \\qquad F \\propto x"
    },

    // Ejemplo · Hooke
    {
      id: "ej-hooke",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Ley de Hooke",
      etiqueta: "Constante del resorte",
      enunciado: "Un resorte se estira 0.2 m cuando se le aplica una fuerza de 40 N. ¿Cuál es su constante elástica k?",
      math: "F = k\\,x \\;\\Rightarrow\\; k = \\dfrac{F}{x}",
      por_que: "Se despeja k de la ley de Hooke dividiendo la fuerza entre la deformación. El resultado está en newtons por metro (N/m).",
      math_razon: "k = \\dfrac{40}{0.2} = 200\\ \\tfrac{\\text{N}}{\\text{m}}"
    },

    // Reactivos · Hooke (5)
    {
      id: "hk1",
      tipo: "ejercicio",
      svgDiagram: "din-hooke",
      etiqueta: "Leyes de Newton · Ley de Hooke · Reactivo 1 / 5",
      pregunta: "Un resorte de constante k = 300 N/m se estira 0.1 m. ¿Qué fuerza ejerce?",
      opciones: ["30 N", "3000 N", "3 N", "30.1 N"],
      correcta: 0,
      explicacion: "Por la ley de Hooke, F = k·x = (300)(0.1) = 30 N.",
      pasos: [
        { pre: "Ley de Hooke: ", math: "F = k\\,x = (300)(0.1) = 30\\ \\text{N}" }
      ]
    },

    {
      id: "hk2",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Ley de Hooke · Reactivo 2 / 5",
      pregunta: "Un resorte se estira 0.2 m al aplicarle una fuerza de 40 N. ¿Cuál es su constante elástica k?",
      opciones: ["200 N/m", "8 N/m", "0.005 N/m", "40.2 N/m"],
      correcta: 0,
      explicacion: "De F = k·x se despeja k = F / x = 40 / 0.2 = 200 N/m.",
      pasos: [
        { pre: "Despejando k: ", math: "k = \\dfrac{F}{x} = \\dfrac{40}{0.2} = 200\\ \\tfrac{\\text{N}}{\\text{m}}" }
      ]
    },

    {
      id: "hk3",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Ley de Hooke · Reactivo 3 / 5",
      pregunta: "Un resorte de constante k = 250 N/m soporta una fuerza de 50 N. ¿Cuánto se estira?",
      opciones: ["0.2 m", "5 m", "200 m", "12 500 m"],
      correcta: 0,
      explicacion: "De F = k·x se despeja x = F / k = 50 / 250 = 0.2 m.",
      pasos: [
        { pre: "Despejando x: ", math: "x = \\dfrac{F}{k} = \\dfrac{50}{250} = 0.2\\ \\text{m}" }
      ]
    },

    {
      id: "hk4",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Ley de Hooke · Reactivo 4 / 5",
      pregunta: "Según la ley de Hooke, la fuerza que ejerce un resorte es directamente proporcional a:",
      opciones: ["Su deformación (lo que se estira o comprime)", "Su masa", "El tiempo", "Su temperatura"],
      correcta: 0,
      explicacion: "La ley de Hooke establece F = k·x: la fuerza del resorte crece en proporción directa a la deformación x.",
      pasos: [
        { pre: "Proporcional a x: ", math: "F = k\\,x \\Rightarrow F \\propto x" }
      ]
    },

    {
      id: "hk5",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Ley de Hooke · Reactivo 5 / 5",
      pregunta: "Si se estira un resorte el doble de su deformación, la fuerza que ejerce:",
      opciones: ["Se duplica", "Se reduce a la mitad", "No cambia", "Se cuadruplica"],
      correcta: 0,
      explicacion: "Como F = k·x, la fuerza es proporcional a la deformación: al duplicar x, la fuerza también se duplica.",
      pasos: [
        { pre: "F proporcional a x: ", math: "F = k\\,x \\Rightarrow 2x \\Rightarrow 2F" }
      ]
    },

    // ══ SUBTEMA 8 · GRAVITACIÓN Y FUERZA CENTRÍPETA ═══════════════════════════
    {
      id: "gravitacion-centripeta",
      tipo: "concepto",
      titulo: "Gravitación y Fuerza Centrípeta",
      etiqueta: "Dos fuerzas clave",
      formula: "F = G\\,\\dfrac{m_1 m_2}{r^2}",
      items: [
        { math: "F_{grav} \\propto \\tfrac{1}{r^2}", texto: "gravitación universal: si la distancia se duplica, la fuerza baja a la cuarta parte" },
        { math: "F_c = \\dfrac{m\\,v^2}{r}", texto: "fuerza centrípeta: apunta al centro en el movimiento circular" }
      ],
      nota: "En el movimiento circular uniforme la fuerza neta no es cero: siempre apunta hacia el centro (es la que «curva» la trayectoria). La gravedad de la Tierra es la fuerza centrípeta que mantiene a la Luna en órbita."
    },

    // Ejemplo · Fuerza centrípeta
    {
      id: "ej-centripeta",
      tipo: "criterio_detalle",
      titulo: "Ejemplo · Fuerza centrípeta",
      etiqueta: "La fuerza que mantiene el giro",
      enunciado: "Un objeto de 2 kg gira en una circunferencia de 0.5 m de radio con una rapidez de 3 m/s. ¿Cuál es la fuerza centrípeta que lo mantiene en la curva?",
      math: "F_c = \\dfrac{m\\,v^2}{r}",
      por_que: "La fuerza centrípeta apunta hacia el centro y depende de la masa, del cuadrado de la rapidez y del radio. Solo hay que sustituir los datos en la fórmula.",
      math_razon: "F_c = \\dfrac{(2)(3^2)}{0.5} = \\dfrac{18}{0.5} = 36\\ \\text{N}"
    },

    // Reactivos · Gravitación y centrípeta (6)
    {
      id: "gc1",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Gravitación y centrípeta · Reactivo 1 / 6",
      pregunta: "En un movimiento circular uniforme, la fuerza neta sobre el objeto apunta:",
      opciones: ["Hacia el centro de la circunferencia", "Hacia afuera del círculo", "En dirección tangente", "Es cero"],
      correcta: 0,
      explicacion: "La fuerza centrípeta apunta siempre hacia el centro; es la que cambia la dirección de la velocidad y mantiene al objeto en la curva.",
      pasos: [
        { pre: "Fuerza centrípeta: ", math: "F_c = \\dfrac{m v^2}{r}\\ \\text{(hacia el centro)}" }
      ]
    },

    {
      id: "gc2",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Gravitación y centrípeta · Reactivo 2 / 6",
      pregunta: "Según la ley de gravitación, si la distancia entre dos masas se duplica, la fuerza de atracción se vuelve:",
      opciones: ["La cuarta parte", "La mitad", "El doble", "El cuádruple"],
      correcta: 0,
      explicacion: "La fuerza es inversamente proporcional al cuadrado de la distancia. Al duplicar r, el denominador se multiplica por 2² = 4, así que la fuerza baja a 1/4.",
      pasos: [
        { pre: "Ley del inverso del cuadrado: ", math: "F \\propto \\dfrac{1}{r^2} \\Rightarrow \\dfrac{1}{2^2} = \\dfrac14" }
      ]
    },

    {
      id: "gc3",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Gravitación y centrípeta · Reactivo 3 / 6",
      pregunta: "Un objeto de 2 kg gira a 4 m/s en una circunferencia de 2 m de radio. ¿Cuál es la fuerza centrípeta?",
      opciones: ["16 N", "8 N", "4 N", "32 N"],
      correcta: 0,
      explicacion: "Fc = m·v²/r = (2)(4²)/2 = (2)(16)/2 = 32/2 = 16 N.",
      pasos: [
        { pre: "Fuerza centrípeta: ", math: "F_c = \\dfrac{m v^2}{r} = \\dfrac{(2)(16)}{2} = 16\\ \\text{N}" }
      ]
    },

    {
      id: "gc4",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Gravitación y centrípeta · Reactivo 4 / 6",
      pregunta: "¿Qué fuerza mantiene a la Luna girando en órbita alrededor de la Tierra?",
      opciones: ["La fuerza de gravedad (actúa como centrípeta)", "La fricción del espacio", "La fuerza centrífuga", "La tensión de una cuerda"],
      correcta: 0,
      explicacion: "La gravedad de la Tierra atrae a la Luna hacia el centro y hace de fuerza centrípeta, manteniéndola en su órbita.",
      pasos: [
        { pre: "Gravedad como centrípeta: ", math: "F_{grav} = F_c" }
      ]
    },

    {
      id: "gc5",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Gravitación y centrípeta · Reactivo 5 / 6",
      pregunta: "Si la distancia entre dos masas se triplica, la fuerza gravitatoria entre ellas se vuelve:",
      opciones: ["La novena parte", "La tercera parte", "El triple", "El nónuplo"],
      correcta: 0,
      explicacion: "Por la ley del inverso del cuadrado, al triplicar r el denominador se multiplica por 3² = 9, así que la fuerza baja a 1/9.",
      pasos: [
        { pre: "Inverso del cuadrado: ", math: "F \\propto \\dfrac{1}{r^2} \\Rightarrow \\dfrac{1}{3^2} = \\dfrac19" }
      ]
    },

    {
      id: "gc6",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Gravitación y centrípeta · Reactivo 6 / 6",
      pregunta: "En un movimiento circular uniforme, la fuerza centrípeta es responsable de:",
      opciones: ["Cambiar la dirección de la velocidad", "Aumentar la rapidez del objeto", "Detener el objeto", "Alejar el objeto del centro"],
      correcta: 0,
      explicacion: "En el movimiento circular uniforme la rapidez no cambia; la fuerza centrípeta solo cambia continuamente la dirección de la velocidad para mantener la trayectoria curva.",
      pasos: [
        { pre: "Cambia la dirección: ", math: "F_c \\perp v" }
      ]
    },

    // ── RESUMEN ───────────────────────────────────────────────────────────────
    {
      id: "resumen",
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Las claves de la dinámica",
      puntos: [
        { titulo: "1ª ley (inercia)", texto: "sin fuerza neta, el cuerpo sigue en reposo o en MRU" },
        { math: "\\sum F = m a", texto: "2ª ley: la fuerza neta produce aceleración" },
        { math: "F_{AB} = -F_{BA}", texto: "3ª ley: acción y reacción, iguales y opuestas" },
        { math: "P = m g", texto: "peso: la masa no cambia, el peso sí (depende de g)" },
        { math: "f = \\mu N", texto: "fricción: se opone al movimiento; N es la normal" },
        { math: "F = k x", texto: "ley de Hooke: la fuerza del resorte es proporcional a x" },
        { math: "F_c = \\tfrac{m v^2}{r}", texto: "fuerza centrípeta: apunta al centro en el giro" },
        { titulo: "Unidad", texto: "la fuerza se mide en newtons: 1 N = 1 kg·m/s²" }
      ]
    }

  ]
};
