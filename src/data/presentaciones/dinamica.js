// Datos de la presentación: Dinámica · Leyes de Newton (Física · UNAM)
// Estructura: Teoría → Ejemplos resueltos → 18 ejercicios tipo UNAM → Resumen.

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

    // ── TEORÍA ────────────────────────────────────────────────────────────────
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

    // ── EJEMPLOS RESUELTOS ────────────────────────────────────────────────────
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
      id: "ej-peso",
      tipo: "criterio_detalle",
      titulo: "Ejemplo 2 · Peso",
      etiqueta: "Diferencia entre peso y masa",
      enunciado: "¿Cuánto pesa en la Tierra una persona cuya masa es de 60 kg? (g = 9.8 m/s²)",
      math: "P = m\\,g",
      por_que: "El peso es una fuerza, así que se mide en newtons. Se obtiene multiplicando la masa por la gravedad. Su masa (60 kg) no cambiaría en la Luna, pero su peso sí.",
      math_razon: "P = (60)(9.8) = 588\\ \\text{N}"
    },

    {
      id: "ej-friccion",
      tipo: "criterio_detalle",
      titulo: "Ejemplo 3 · Fricción",
      etiqueta: "Fuerza de fricción",
      enunciado: "Un bloque se desliza sobre una superficie con coeficiente de fricción μ = 0.4 y una fuerza normal de 50 N. ¿Cuál es la fuerza de fricción?",
      math: "f = \\mu\\,N",
      por_que: "La fricción solo necesita el coeficiente y la fuerza normal. Se multiplican directamente. Esta fuerza se opone al movimiento del bloque.",
      math_razon: "f = (0.4)(50) = 20\\ \\text{N}"
    },

    {
      id: "ej-hooke",
      tipo: "criterio_detalle",
      titulo: "Ejemplo 4 · Ley de Hooke",
      etiqueta: "Constante del resorte",
      enunciado: "Un resorte se estira 0.2 m cuando se le aplica una fuerza de 40 N. ¿Cuál es su constante elástica k?",
      math: "F = k\\,x \\;\\Rightarrow\\; k = \\dfrac{F}{x}",
      por_que: "Se despeja k de la ley de Hooke dividiendo la fuerza entre la deformación. El resultado está en newtons por metro (N/m).",
      math_razon: "k = \\dfrac{40}{0.2} = 200\\ \\tfrac{\\text{N}}{\\text{m}}"
    },

    // ── EJERCICIOS TIPO UNAM ──────────────────────────────────────────────────
    {
      id: "d1",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Ejercicio 1 / 18",
      pregunta: "Un libro permanece en reposo sobre una mesa. ¿Por qué no se mueve?",
      opciones: ["Porque la fuerza neta sobre él es cero", "Porque no tiene masa", "Porque sobre él no actúa la gravedad", "Porque la mesa lo empuja con más fuerza que su peso"],
      correcta: 0,
      explicacion: "El peso (hacia abajo) y la fuerza normal (hacia arriba) se equilibran: la fuerza neta es cero, así que por la primera ley el libro sigue en reposo.",
      pasos: [
        { pre: "Primera ley: ", math: "\\sum F = N - P = 0 \\Rightarrow v = 0" }
      ]
    },

    {
      id: "d2",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Ejercicio 2 / 18",
      pregunta: "¿Qué fuerza neta se necesita para que un objeto de 5 kg adquiera una aceleración de 3 m/s²?",
      opciones: ["15 N", "1.67 N", "8 N", "45 N"],
      correcta: 0,
      explicacion: "Por la segunda ley, F = m·a = (5)(3) = 15 N.",
      pasos: [
        { pre: "Segunda ley: ", math: "F = m\\,a = (5)(3) = 15\\ \\text{N}" }
      ]
    },

    {
      id: "d3",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Ejercicio 3 / 18",
      pregunta: "Una fuerza neta de 20 N actúa sobre un objeto de 4 kg. ¿Cuál es su aceleración?",
      opciones: ["5 m/s²", "80 m/s²", "0.2 m/s²", "16 m/s²"],
      correcta: 0,
      explicacion: "a = F / m = 20 / 4 = 5 m/s².",
      pasos: [
        { pre: "Despejando a: ", math: "a = \\dfrac{F}{m} = \\dfrac{20}{4} = 5\\ \\tfrac{m}{s^2}" }
      ]
    },

    {
      id: "d4",
      tipo: "ejercicio",
      svgDiagram: "din-fuerza-neta",
      etiqueta: "Leyes de Newton · Ejercicio 4 / 18",
      pregunta: "Sobre un cuerpo actúan dos fuerzas horizontales: 40 N hacia la derecha y 25 N hacia la izquierda. ¿Cuál es la fuerza neta?",
      opciones: ["15 N a la derecha", "65 N a la derecha", "15 N a la izquierda", "1000 N a la derecha"],
      correcta: 0,
      explicacion: "Al tener sentidos opuestos, las fuerzas se restan: 40 − 25 = 15 N, en el sentido de la mayor (a la derecha).",
      pasos: [
        { pre: "Fuerza neta: ", math: "\\sum F = 40 - 25 = 15\\ \\text{N (derecha)}" }
      ]
    },

    {
      id: "d5",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Ejercicio 5 / 18",
      pregunta: "Al caminar, empujas el suelo hacia atrás y el suelo te impulsa hacia adelante. ¿Qué ley lo explica?",
      opciones: ["Tercera ley (acción-reacción)", "Primera ley (inercia)", "Segunda ley (F = ma)", "Ley de Hooke"],
      correcta: 0,
      explicacion: "Es un par acción-reacción: tu pie ejerce una fuerza sobre el suelo y el suelo ejerce una fuerza igual y opuesta sobre ti. Esa es la tercera ley.",
      pasos: [
        { pre: "Tercera ley: ", math: "\\vec{F}_{AB} = -\\vec{F}_{BA}" }
      ]
    },

    {
      id: "d6",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Ejercicio 6 / 18",
      pregunta: "La masa de un astronauta en la Luna, comparada con la que tiene en la Tierra, es:",
      opciones: ["La misma", "Menor", "Mayor", "Cero"],
      correcta: 0,
      explicacion: "La masa es la cantidad de materia y no depende del lugar: es la misma en la Tierra y en la Luna. Lo que cambia es el peso, porque g es distinta.",
      pasos: [
        { pre: "Masa invariable; cambia el peso: ", math: "P = m\\,g" }
      ]
    },

    {
      id: "d7",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Ejercicio 7 / 18",
      pregunta: "¿Cuánto pesa un objeto cuya masa es de 10 kg? (g = 9.8 m/s²)",
      opciones: ["98 N", "10 N", "9.8 N", "980 N"],
      correcta: 0,
      explicacion: "P = m·g = (10)(9.8) = 98 N.",
      pasos: [
        { pre: "Peso: ", math: "P = m\\,g = (10)(9.8) = 98\\ \\text{N}" }
      ]
    },

    {
      id: "d8",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Ejercicio 8 / 18",
      pregunta: "Un objeto pesa 60 N en la Tierra. En la Luna, donde la gravedad es menor, su peso será:",
      opciones: ["Menor que 60 N", "Mayor que 60 N", "Igual a 60 N", "Cero"],
      correcta: 0,
      explicacion: "El peso es P = m·g. Como en la Luna g es menor (≈ 1.6 m/s²), el peso disminuye, aunque la masa siga igual.",
      pasos: [
        { pre: "Menor g ⇒ menor peso: ", math: "P_{Luna} = m\\,g_{Luna} < P_{Tierra}" }
      ]
    },

    {
      id: "d9",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Ejercicio 9 / 18",
      pregunta: "Un bloque se desliza con un coeficiente de fricción μ = 0.5 y una fuerza normal de 80 N. ¿Cuál es la fuerza de fricción?",
      opciones: ["40 N", "160 N", "0.00625 N", "80.5 N"],
      correcta: 0,
      explicacion: "f = μ·N = (0.5)(80) = 40 N.",
      pasos: [
        { pre: "Fricción: ", math: "f = \\mu\\,N = (0.5)(80) = 40\\ \\text{N}" }
      ]
    },

    {
      id: "d10",
      tipo: "ejercicio",
      svgDiagram: "din-hooke",
      etiqueta: "Leyes de Newton · Ejercicio 10 / 18",
      pregunta: "Un resorte de constante k = 300 N/m se estira 0.1 m. ¿Qué fuerza ejerce?",
      opciones: ["30 N", "3000 N", "3 N", "30.1 N"],
      correcta: 0,
      explicacion: "Por la ley de Hooke, F = k·x = (300)(0.1) = 30 N.",
      pasos: [
        { pre: "Ley de Hooke: ", math: "F = k\\,x = (300)(0.1) = 30\\ \\text{N}" }
      ]
    },

    {
      id: "d11",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Ejercicio 11 / 18",
      pregunta: "La tendencia de un cuerpo a mantener su estado de reposo o de movimiento se llama:",
      opciones: ["Inercia", "Fricción", "Peso", "Aceleración"],
      correcta: 0,
      explicacion: "La inercia es esa resistencia al cambio de movimiento, y es el contenido de la primera ley de Newton. Depende de la masa: a más masa, más inercia.",
      pasos: [
        { pre: "Primera ley: ", math: "\\sum F = 0 \\Rightarrow v = \\text{constante}" }
      ]
    },

    {
      id: "d12",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Ejercicio 12 / 18",
      pregunta: "Un libro descansa sobre una mesa horizontal. La fuerza normal que la mesa ejerce sobre el libro es:",
      opciones: ["Perpendicular a la superficie, hacia arriba", "Paralela a la superficie", "Igual a la fuerza de fricción", "Dirigida hacia abajo"],
      correcta: 0,
      explicacion: "La fuerza normal siempre es perpendicular a la superficie de contacto. Sobre una mesa horizontal apunta verticalmente hacia arriba y equilibra el peso.",
      pasos: [
        { pre: "En superficie horizontal: ", math: "N = P = m\\,g" }
      ]
    },

    {
      id: "d13",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Ejercicio 13 / 18",
      pregunta: "Una fuerza neta de 50 N produce una aceleración de 10 m/s² en un objeto. ¿Cuál es su masa?",
      opciones: ["5 kg", "500 kg", "0.2 kg", "40 kg"],
      correcta: 0,
      explicacion: "De F = m·a se despeja m = F / a = 50 / 10 = 5 kg.",
      pasos: [
        { pre: "Despejando la masa: ", math: "m = \\dfrac{F}{a} = \\dfrac{50}{10} = 5\\ \\text{kg}" }
      ]
    },

    {
      id: "d14",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Ejercicio 14 / 18",
      pregunta: "En un movimiento circular uniforme, la fuerza neta sobre el objeto apunta:",
      opciones: ["Hacia el centro de la circunferencia", "Hacia afuera del círculo", "En dirección tangente", "Es cero"],
      correcta: 0,
      explicacion: "La fuerza centrípeta apunta siempre hacia el centro; es la que cambia la dirección de la velocidad y mantiene al objeto en la curva.",
      pasos: [
        { pre: "Fuerza centrípeta: ", math: "F_c = \\dfrac{m v^2}{r}\\ \\text{(hacia el centro)}" }
      ]
    },

    {
      id: "d15",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Ejercicio 15 / 18",
      pregunta: "Según la ley de gravitación, si la distancia entre dos masas se duplica, la fuerza de atracción se vuelve:",
      opciones: ["La cuarta parte", "La mitad", "El doble", "El cuádruple"],
      correcta: 0,
      explicacion: "La fuerza es inversamente proporcional al cuadrado de la distancia. Al duplicar r, el denominador se multiplica por 2² = 4, así que la fuerza baja a 1/4.",
      pasos: [
        { pre: "Ley del inverso del cuadrado: ", math: "F \\propto \\dfrac{1}{r^2} \\Rightarrow \\dfrac{1}{2^2} = \\dfrac14" }
      ]
    },

    {
      id: "d16",
      tipo: "ejercicio",
      svgDiagram: "din-tercera-ley",
      etiqueta: "Leyes de Newton · Ejercicio 16 / 18",
      pregunta: "Un martillo golpea un clavo ejerciendo 100 N sobre él. ¿Con qué fuerza el clavo actúa sobre el martillo?",
      opciones: ["100 N, en sentido contrario", "Menos de 100 N", "Más de 100 N", "Cero"],
      correcta: 0,
      explicacion: "Por la tercera ley, la reacción tiene la misma magnitud (100 N) y sentido opuesto. Aunque el clavo se mueva más, las fuerzas del par son iguales.",
      pasos: [
        { pre: "Acción-reacción: ", math: "|\\vec{F}_{mc}| = |\\vec{F}_{cm}| = 100\\ \\text{N}" }
      ]
    },

    {
      id: "d17",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Ejercicio 17 / 18",
      pregunta: "Si se duplica la fuerza neta sobre un objeto manteniendo su masa, su aceleración:",
      opciones: ["Se duplica", "Se reduce a la mitad", "No cambia", "Se cuadruplica"],
      correcta: 0,
      explicacion: "Como a = F/m, con la masa fija la aceleración es proporcional a la fuerza: al duplicar F, a también se duplica.",
      pasos: [
        { pre: "a proporcional a F: ", math: "a = \\dfrac{F}{m} \\Rightarrow 2F \\Rightarrow 2a" }
      ]
    },

    {
      id: "d18",
      tipo: "ejercicio",
      etiqueta: "Leyes de Newton · Ejercicio 18 / 18",
      pregunta: "¿Cuál es la unidad de fuerza en el Sistema Internacional?",
      opciones: ["El newton (N)", "El joule (J)", "El watt (W)", "El pascal (Pa)"],
      correcta: 0,
      explicacion: "La fuerza se mide en newtons. 1 N = 1 kg·m/s². El joule es energía, el watt potencia y el pascal presión.",
      pasos: [
        { pre: "Definición: ", math: "1\\ \\text{N} = 1\\ \\dfrac{\\text{kg}\\cdot\\text{m}}{\\text{s}^2}" }
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
