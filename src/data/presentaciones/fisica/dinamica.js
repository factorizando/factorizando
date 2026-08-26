// Datos de la presentación: Dinámica · Leyes de Newton (Física · UNAM)
// Estructura por subtema: Teoría → Ejemplos resueltos → Reactivos tipo UNAM.
// Subtemas: Fuerza · 1ª ley · 2ª ley · 3ª ley · Peso y masa · Fricción · Hooke · Gravitación → Resumen.

export const PRESENTACION = {
  id: "dinamica",
  titulo: "Leyes de Newton",
  materia: "Física",
  subtema: "Mecánica",
  slides: [
    {
      id: 0,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "portada",
          kicker: "Física · UNAM",
          titulo: "Leyes de Newton",
          subtitulo: "Dinámica: fuerzas, inercia, F = ma, acción-reacción, fricción y Hooke",
          figura: "din-portada",
        },
      ],
    },
    {
      id: "fuerza",
      tipo: "lienzo",
      etiqueta: "La causa del cambio de movimiento",
      titulo: "Fuerza",
      bloques: [
        {
          tipo: "formula",
          math: "1\\ \\text{N} = 1\\ \\dfrac{\\text{kg}\\cdot\\text{m}}{\\text{s}^2}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "din-fuerza-neta",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\vec{F}",
              texto: "es un vector: tiene magnitud, dirección y sentido",
            },
            {
              math: "\\text{contacto}",
              texto: "empujar, jalar, fricción, tensión, normal",
            },
            {
              math: "\\text{a distancia}",
              texto: "gravedad, fuerza eléctrica, magnética",
            },
            {
              math: "\\sum \\vec{F}",
              texto: "fuerza neta o resultante: la suma de todas las fuerzas",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "La fuerza se mide en newtons (N). 1 N es la fuerza que da a 1 kg una aceleración de 1 m/s². Lo que determina el movimiento es la fuerza NETA, no cada fuerza por separado.",
        },
      ],
    },
    {
      id: "ej-fuerza-resultante",
      tipo: "lienzo",
      etiqueta: "Suma de fuerzas perpendiculares",
      titulo: "Ejemplo · Fuerza resultante",
      bloques: [
        {
          tipo: "destacado",
          texto: "Sobre un objeto actúan dos fuerzas perpendiculares entre sí: una de 3 N hacia el este y otra de 4 N hacia el norte. ¿Cuál es la magnitud de la fuerza neta?",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "din-fuerza-neta",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "F = \\sqrt{F_x^2 + F_y^2}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Cuando las fuerzas forman un ángulo recto, la resultante es la hipotenusa del triángulo que forman: se aplica el teorema de Pitágoras, no una simple suma.",
        },
        {
          tipo: "formula",
          math: "F = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\ \\text{N}",
        },
      ],
    },
    {
      id: "fz1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Leyes de Newton · Fuerza · Reactivo 1 / 6",
          enunciado: "Sobre un cuerpo actúan dos fuerzas horizontales: 40 N hacia la derecha y 25 N hacia la izquierda. ¿Cuál es la fuerza neta?",
          opciones: ["15 N a la derecha", "65 N a la derecha", "15 N a la izquierda", "1000 N a la derecha"],
          correcta: 0,
          explicacion: "Al tener sentidos opuestos, las fuerzas se restan: 40 − 25 = 15 N, en el sentido de la mayor (a la derecha).",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "din-fuerza-neta",
        },
      ],
    },
    {
      id: "fz2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Fuerza · Reactivo 2 / 6",
          enunciado: "¿Cuál es la unidad de fuerza en el Sistema Internacional?",
          opciones: ["El newton (N)", "El joule (J)", "El watt (W)", "El pascal (Pa)"],
          correcta: 0,
          explicacion: "La fuerza se mide en newtons. 1 N = 1 kg·m/s². El joule es energía, el watt potencia y el pascal presión.",
        },
      ],
    },
    {
      id: "fz3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Leyes de Newton · Fuerza · Reactivo 3 / 6",
          enunciado: "Sobre un objeto actúan dos fuerzas perpendiculares: 6 N y 8 N. ¿Cuál es la magnitud de la fuerza neta?",
          opciones: ["10 N", "14 N", "48 N", "2 N"],
          correcta: 0,
          explicacion: "Al ser perpendiculares, la resultante es la hipotenusa: F = √(6² + 8²) = √(36 + 64) = √100 = 10 N.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "din-fuerza-neta",
        },
      ],
    },
    {
      id: "fz4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Fuerza · Reactivo 4 / 6",
          enunciado: "Dos fuerzas de 30 N y 20 N actúan sobre un cuerpo en la misma dirección y sentido. ¿Cuál es la fuerza neta?",
          opciones: ["50 N", "10 N", "600 N", "25 N"],
          correcta: 0,
          explicacion: "Cuando las fuerzas tienen el mismo sentido, se suman: 30 + 20 = 50 N.",
        },
      ],
    },
    {
      id: "fz5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Fuerza · Reactivo 5 / 6",
          enunciado: "La fuerza es una magnitud:",
          opciones: [
            "Vectorial (tiene magnitud, dirección y sentido)",
            "Escalar (solo magnitud)",
            "Sin unidades",
            "Que solo existe en reposo",
          ],
          correcta: 0,
          explicacion: "La fuerza es un vector: para describirla por completo hace falta su magnitud, su dirección y su sentido.",
        },
      ],
    },
    {
      id: "fz6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Fuerza · Reactivo 6 / 6",
          enunciado: "¿Cuál de las siguientes es una fuerza que actúa a distancia (sin contacto)?",
          opciones: ["La gravedad", "La tensión de una cuerda", "La fuerza normal", "La fricción"],
          correcta: 0,
          explicacion: "La gravedad actúa entre cuerpos separados, sin necesidad de contacto. La tensión, la normal y la fricción son fuerzas de contacto.",
        },
      ],
    },
    {
      id: "primera-ley",
      tipo: "lienzo",
      etiqueta: "Un cuerpo no cambia su movimiento solo",
      titulo: "Primera Ley: Inercia",
      bloques: [
        {
          tipo: "destacado",
          texto: "Todo cuerpo permanece en reposo o en movimiento rectilíneo uniforme a menos que una fuerza neta actúe sobre él. La inercia es la resistencia a cambiar el estado de movimiento.",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "\\sum \\vec{F} = 0 \\;\\Rightarrow\\; v = \\text{constante}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Si las fuerzas se equilibran (fuerza neta cero), el objeto no acelera: sigue como estaba. Por eso usamos cinturón de seguridad: al frenar el coche, tu cuerpo «quiere» seguir en movimiento.",
        },
        {
          tipo: "formula",
          math: "\\text{reposo o MRU} \\iff \\sum \\vec{F} = 0",
        },
      ],
    },
    {
      id: "ej-inercia",
      tipo: "lienzo",
      etiqueta: "Por qué te vas hacia adelante al frenar",
      titulo: "Ejemplo · Inercia",
      bloques: [
        {
          tipo: "destacado",
          texto: "Vas sentado en un autobús en movimiento y de pronto frena bruscamente. ¿Por qué tu cuerpo se va hacia adelante?",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "\\sum F = 0 \\;\\Rightarrow\\; v = \\text{constante}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Por inercia, tu cuerpo «quiere» seguir con la velocidad que llevaba. El autobús frena por la fuerza de sus frenos, pero sobre tu cuerpo no actúa esa fuerza, así que tiende a continuar hacia adelante. Por eso es vital el cinturón de seguridad.",
        },
        {
          tipo: "formula",
          math: "\\text{sin fuerza que lo frene} \\Rightarrow \\text{el cuerpo mantiene su movimiento}",
        },
      ],
    },
    {
      id: "pl1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Primera ley · Reactivo 1 / 6",
          enunciado: "Un libro permanece en reposo sobre una mesa. ¿Por qué no se mueve?",
          opciones: [
            "Porque la fuerza neta sobre él es cero",
            "Porque no tiene masa",
            "Porque sobre él no actúa la gravedad",
            "Porque la mesa lo empuja con más fuerza que su peso",
          ],
          correcta: 0,
          explicacion: "El peso (hacia abajo) y la fuerza normal (hacia arriba) se equilibran: la fuerza neta es cero, así que por la primera ley el libro sigue en reposo.",
        },
      ],
    },
    {
      id: "pl2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Primera ley · Reactivo 2 / 6",
          enunciado: "La tendencia de un cuerpo a mantener su estado de reposo o de movimiento se llama:",
          opciones: ["Inercia", "Fricción", "Peso", "Aceleración"],
          correcta: 0,
          explicacion: "La inercia es esa resistencia al cambio de movimiento, y es el contenido de la primera ley de Newton. Depende de la masa: a más masa, más inercia.",
        },
      ],
    },
    {
      id: "pl3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Primera ley · Reactivo 3 / 6",
          enunciado: "Cuando un auto frena bruscamente, los pasajeros son lanzados hacia adelante. Esto se debe a:",
          opciones: [
            "La inercia (tienden a seguir en movimiento)",
            "La fuerza centrípeta",
            "La acción-reacción",
            "El peso de los pasajeros",
          ],
          correcta: 0,
          explicacion: "Por inercia, los pasajeros tienden a conservar la velocidad que llevaban; como el freno actúa sobre el auto y no directamente sobre ellos, continúan hacia adelante.",
        },
      ],
    },
    {
      id: "pl4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Primera ley · Reactivo 4 / 6",
          enunciado: "¿De qué magnitud depende la inercia de un cuerpo?",
          opciones: [
            "De su masa (a más masa, más inercia)",
            "De su velocidad",
            "De su peso en la Luna",
            "De la fricción",
          ],
          correcta: 0,
          explicacion: "La inercia es la resistencia a cambiar el estado de movimiento y depende únicamente de la masa: cuanta más masa, más cuesta acelerar o frenar el cuerpo.",
        },
      ],
    },
    {
      id: "pl5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Primera ley · Reactivo 5 / 6",
          enunciado: "Un objeto se mueve en línea recta con velocidad constante. ¿Cuál es la fuerza neta sobre él?",
          opciones: ["Cero", "Igual a su peso", "Constante y hacia adelante", "Igual a su masa"],
          correcta: 0,
          explicacion: "Si la velocidad es constante (MRU), no hay aceleración; por la primera ley, eso significa que la fuerza neta es cero.",
        },
      ],
    },
    {
      id: "pl6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Primera ley · Reactivo 6 / 6",
          enunciado: "Una nave en el espacio profundo apaga sus motores, lejos de cualquier fuerza. ¿Qué le ocurre?",
          opciones: [
            "Sigue moviéndose en línea recta a velocidad constante",
            "Se detiene de inmediato",
            "Acelera sin parar",
            "Da vueltas en círculo",
          ],
          correcta: 0,
          explicacion: "Sin fuerza neta que la frene o desvíe, por la primera ley la nave conserva su movimiento: continúa en línea recta con velocidad constante.",
        },
      ],
    },
    {
      id: "segunda-ley",
      tipo: "lienzo",
      etiqueta: "La fuerza neta produce aceleración",
      titulo: "Segunda Ley: F = ma",
      bloques: [
        {
          tipo: "destacado",
          texto: "La aceleración de un cuerpo es directamente proporcional a la fuerza neta que recibe e inversamente proporcional a su masa. Es la ecuación central de la dinámica.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "din-segunda-ley",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "\\sum \\vec{F} = m\\,\\vec{a}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "A más fuerza, más aceleración; a más masa, menos aceleración (cuesta más mover algo pesado). La aceleración siempre apunta en la dirección de la fuerza neta.",
        },
        {
          tipo: "formula",
          math: "a = \\dfrac{\\sum F}{m}, \\qquad [\\,F\\,] = \\text{N} = \\text{kg}\\cdot\\tfrac{m}{s^2}",
        },
      ],
    },
    {
      id: "ej-fuerza-neta",
      tipo: "lienzo",
      etiqueta: "Fuerza neta y aceleración",
      titulo: "Ejemplo 1 · Segunda ley con dos fuerzas",
      bloques: [
        {
          tipo: "destacado",
          texto: "Sobre un objeto de 100 kg se aplican dos fuerzas en la misma dirección pero de sentido contrario: una de 30 N y otra de 20 N. ¿Cuál es la magnitud de su aceleración?",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "a = \\dfrac{\\sum F}{m}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Como las fuerzas son opuestas, la fuerza neta es la resta: 30 − 20 = 10 N. Luego se aplica la segunda ley dividiendo entre la masa.",
        },
        {
          tipo: "formula",
          math: "\\sum F = 30 - 20 = 10\\ \\text{N}, \\qquad a = \\dfrac{10}{100} = 0.1\\ \\tfrac{m}{s^2}",
        },
      ],
    },
    {
      id: "ej-segunda-masa",
      tipo: "lienzo",
      etiqueta: "Cuando el dato buscado es la masa",
      titulo: "Ejemplo 2 · Despejar la masa",
      bloques: [
        {
          tipo: "destacado",
          texto: "Una fuerza neta de 24 N le da a un objeto una aceleración de 3 m/s². ¿Cuál es su masa?",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "F = m\\,a \\;\\Rightarrow\\; m = \\dfrac{F}{a}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "La segunda ley se puede despejar para cualquiera de las tres variables. Aquí buscamos la masa, así que dividimos la fuerza entre la aceleración.",
        },
        {
          tipo: "formula",
          math: "m = \\dfrac{24}{3} = 8\\ \\text{kg}",
        },
      ],
    },
    {
      id: "sl1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Segunda ley · Reactivo 1 / 8",
          enunciado: "¿Qué fuerza neta se necesita para que un objeto de 5 kg adquiera una aceleración de 3 m/s²?",
          opciones: ["15 N", "1.67 N", "8 N", "45 N"],
          correcta: 0,
          explicacion: "Por la segunda ley, F = m·a = (5)(3) = 15 N.",
        },
      ],
    },
    {
      id: "sl2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Segunda ley · Reactivo 2 / 8",
          enunciado: "Una fuerza neta de 20 N actúa sobre un objeto de 4 kg. ¿Cuál es su aceleración?",
          opciones: ["5 m/s²", "80 m/s²", "0.2 m/s²", "16 m/s²"],
          correcta: 0,
          explicacion: "a = F / m = 20 / 4 = 5 m/s².",
        },
      ],
    },
    {
      id: "sl3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Segunda ley · Reactivo 3 / 8",
          enunciado: "Una fuerza neta de 50 N produce una aceleración de 10 m/s² en un objeto. ¿Cuál es su masa?",
          opciones: ["5 kg", "500 kg", "0.2 kg", "40 kg"],
          correcta: 0,
          explicacion: "De F = m·a se despeja m = F / a = 50 / 10 = 5 kg.",
        },
      ],
    },
    {
      id: "sl4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Segunda ley · Reactivo 4 / 8",
          enunciado: "Si se duplica la fuerza neta sobre un objeto manteniendo su masa, su aceleración:",
          opciones: ["Se duplica", "Se reduce a la mitad", "No cambia", "Se cuadruplica"],
          correcta: 0,
          explicacion: "Como a = F/m, con la masa fija la aceleración es proporcional a la fuerza: al duplicar F, a también se duplica.",
        },
      ],
    },
    {
      id: "sl5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Segunda ley · Reactivo 5 / 8",
          enunciado: "¿Qué fuerza neta produce una aceleración de 4 m/s² en un objeto de 10 kg?",
          opciones: ["40 N", "2.5 N", "14 N", "0.4 N"],
          correcta: 0,
          explicacion: "F = m·a = (10)(4) = 40 N.",
        },
      ],
    },
    {
      id: "sl6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Segunda ley · Reactivo 6 / 8",
          enunciado: "Una fuerza neta de 100 N actúa sobre un objeto de 25 kg. ¿Cuál es su aceleración?",
          opciones: ["4 m/s²", "2500 m/s²", "0.25 m/s²", "125 m/s²"],
          correcta: 0,
          explicacion: "a = F / m = 100 / 25 = 4 m/s².",
        },
      ],
    },
    {
      id: "sl7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Segunda ley · Reactivo 7 / 8",
          enunciado: "Si se duplica la masa de un objeto manteniendo la misma fuerza neta, su aceleración:",
          opciones: ["Se reduce a la mitad", "Se duplica", "No cambia", "Se cuadruplica"],
          correcta: 0,
          explicacion: "Como a = F/m, la aceleración es inversamente proporcional a la masa: al duplicar m, la aceleración se reduce a la mitad.",
        },
      ],
    },
    {
      id: "sl8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Segunda ley · Reactivo 8 / 8",
          enunciado: "La aceleración de un cuerpo siempre tiene la misma dirección que:",
          opciones: ["La fuerza neta aplicada", "Su velocidad", "Su peso", "La fuerza de fricción"],
          correcta: 0,
          explicacion: "Según F = ma, la aceleración es un vector que apunta en la misma dirección y sentido que la fuerza neta resultante.",
        },
      ],
    },
    {
      id: "tercera-ley",
      tipo: "lienzo",
      etiqueta: "Toda fuerza tiene su par",
      titulo: "Tercera Ley: Acción-Reacción",
      bloques: [
        {
          tipo: "destacado",
          texto: "A toda acción corresponde una reacción de igual magnitud pero sentido contrario. Si A empuja a B, B empuja a A con la misma fuerza.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "din-tercera-ley",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "\\vec{F}_{AB} = -\\,\\vec{F}_{BA}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Las dos fuerzas actúan sobre cuerpos distintos, por eso no se cancelan. Al caminar empujas el suelo hacia atrás y el suelo te impulsa hacia adelante; así avanzas.",
        },
        {
          tipo: "formula",
          math: "|\\vec{F}_{AB}| = |\\vec{F}_{BA}| \\quad (\\text{sobre cuerpos diferentes})",
        },
      ],
    },
    {
      id: "ej-tercera",
      tipo: "lienzo",
      etiqueta: "Las fuerzas del par son iguales",
      titulo: "Ejemplo · Acción-reacción",
      bloques: [
        {
          tipo: "destacado",
          texto: "Una persona empuja contra una pared con una fuerza de 200 N. ¿Con qué fuerza la pared empuja a la persona?",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "din-tercera-ley",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "\\vec{F}_{AB} = -\\,\\vec{F}_{BA}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Por la tercera ley, la pared responde con una fuerza de igual magnitud y sentido contrario: 200 N sobre la persona. Las dos fuerzas actúan sobre cuerpos distintos, por eso no se cancelan.",
        },
        {
          tipo: "formula",
          math: "|\\vec{F}_{pared}| = |\\vec{F}_{persona}| = 200\\ \\text{N}",
        },
      ],
    },
    {
      id: "tl1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Tercera ley · Reactivo 1 / 6",
          enunciado: "Al caminar, empujas el suelo hacia atrás y el suelo te impulsa hacia adelante. ¿Qué ley lo explica?",
          opciones: [
            "Tercera ley (acción-reacción)",
            "Primera ley (inercia)",
            "Segunda ley (F = ma)",
            "Ley de Hooke",
          ],
          correcta: 0,
          explicacion: "Es un par acción-reacción: tu pie ejerce una fuerza sobre el suelo y el suelo ejerce una fuerza igual y opuesta sobre ti. Esa es la tercera ley.",
        },
      ],
    },
    {
      id: "tl2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Leyes de Newton · Tercera ley · Reactivo 2 / 6",
          enunciado: "Un martillo golpea un clavo ejerciendo 100 N sobre él. ¿Con qué fuerza el clavo actúa sobre el martillo?",
          opciones: ["100 N, en sentido contrario", "Menos de 100 N", "Más de 100 N", "Cero"],
          correcta: 0,
          explicacion: "Por la tercera ley, la reacción tiene la misma magnitud (100 N) y sentido opuesto. Aunque el clavo se mueva más, las fuerzas del par son iguales.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "din-tercera-ley",
        },
      ],
    },
    {
      id: "tl3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Tercera ley · Reactivo 3 / 6",
          enunciado: "Un cohete avanza porque expulsa gases hacia atrás. ¿Qué ley de Newton lo explica?",
          opciones: ["Tercera ley (acción-reacción)", "Primera ley (inercia)", "Ley de gravitación", "Ley de Hooke"],
          correcta: 0,
          explicacion: "El cohete empuja los gases hacia atrás (acción) y los gases empujan al cohete hacia adelante (reacción): es la tercera ley.",
        },
      ],
    },
    {
      id: "tl4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Tercera ley · Reactivo 4 / 6",
          enunciado: "Las fuerzas de un par acción-reacción no se cancelan entre sí porque:",
          opciones: [
            "Actúan sobre cuerpos distintos",
            "Tienen magnitudes diferentes",
            "Apuntan en el mismo sentido",
            "Una es mucho mayor",
          ],
          correcta: 0,
          explicacion: "Aunque son iguales en magnitud y opuestas en sentido, cada fuerza del par actúa sobre un cuerpo diferente, por eso no se anulan.",
        },
      ],
    },
    {
      id: "tl5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Tercera ley · Reactivo 5 / 6",
          enunciado: "Una persona empuja una pared con una fuerza de 150 N. ¿Con qué fuerza la pared la empuja a ella?",
          opciones: ["150 N en sentido contrario", "Cero", "75 N", "300 N"],
          correcta: 0,
          explicacion: "Por la tercera ley, la pared reacciona con una fuerza de igual magnitud (150 N) y sentido opuesto sobre la persona.",
        },
      ],
    },
    {
      id: "tl6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Tercera ley · Reactivo 6 / 6",
          enunciado: "Dos patinadores en hielo se empujan mutuamente. Las fuerzas que ejercen uno sobre el otro son:",
          opciones: [
            "Iguales en magnitud y de sentido contrario",
            "Mayores en el más pesado",
            "Mayores en el más ligero",
            "Cero, porque están en hielo",
          ],
          correcta: 0,
          explicacion: "Por la tercera ley, las fuerzas entre los dos patinadores son iguales en magnitud y opuestas, sin importar sus masas (lo que sí cambia es la aceleración de cada uno).",
        },
      ],
    },
    {
      id: "peso-masa",
      tipo: "lienzo",
      etiqueta: "No son lo mismo",
      titulo: "Peso y Masa",
      bloques: [
        {
          tipo: "formula",
          math: "P = m\\,g",
        },
        {
          tipo: "lista",
          items: [
            {
              math: "m\\ \\text{(masa)}",
              texto: "cantidad de materia; escalar en kg; no cambia de lugar",
            },
            {
              math: "P\\ \\text{(peso)}",
              texto: "fuerza con que la gravedad atrae; vector en N",
            },
            {
              math: "g \\approx 9.8\\ \\tfrac{m}{s^2}",
              texto: "aceleración de la gravedad en la Tierra",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "La masa es la misma en la Tierra, la Luna o el espacio. El peso cambia con g: en la Luna (g ≈ 1.6 m/s²) pesarías unas 6 veces menos, pero tu masa sería idéntica.",
        },
      ],
    },
    {
      id: "ej-peso",
      tipo: "lienzo",
      etiqueta: "Diferencia entre peso y masa",
      titulo: "Ejemplo · Peso",
      bloques: [
        {
          tipo: "destacado",
          texto: "¿Cuánto pesa en la Tierra una persona cuya masa es de 60 kg? (g = 9.8 m/s²)",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "P = m\\,g",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "El peso es una fuerza, así que se mide en newtons. Se obtiene multiplicando la masa por la gravedad. Su masa (60 kg) no cambiaría en la Luna, pero su peso sí.",
        },
        {
          tipo: "formula",
          math: "P = (60)(9.8) = 588\\ \\text{N}",
        },
      ],
    },
    {
      id: "pm1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Peso y masa · Reactivo 1 / 7",
          enunciado: "La masa de un astronauta en la Luna, comparada con la que tiene en la Tierra, es:",
          opciones: ["La misma", "Menor", "Mayor", "Cero"],
          correcta: 0,
          explicacion: "La masa es la cantidad de materia y no depende del lugar: es la misma en la Tierra y en la Luna. Lo que cambia es el peso, porque g es distinta.",
        },
      ],
    },
    {
      id: "pm2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Peso y masa · Reactivo 2 / 7",
          enunciado: "¿Cuánto pesa un objeto cuya masa es de 10 kg? (g = 9.8 m/s²)",
          opciones: ["98 N", "10 N", "9.8 N", "980 N"],
          correcta: 0,
          explicacion: "P = m·g = (10)(9.8) = 98 N.",
        },
      ],
    },
    {
      id: "pm3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Peso y masa · Reactivo 3 / 7",
          enunciado: "Un objeto pesa 60 N en la Tierra. En la Luna, donde la gravedad es menor, su peso será:",
          opciones: ["Menor que 60 N", "Mayor que 60 N", "Igual a 60 N", "Cero"],
          correcta: 0,
          explicacion: "El peso es P = m·g. Como en la Luna g es menor (≈ 1.6 m/s²), el peso disminuye, aunque la masa siga igual.",
        },
      ],
    },
    {
      id: "pm4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Peso y masa · Reactivo 4 / 7",
          enunciado: "¿Cuánto pesa un objeto de 5 kg de masa? (g = 10 m/s²)",
          opciones: ["50 N", "5 N", "0.5 N", "15 N"],
          correcta: 0,
          explicacion: "P = m·g = (5)(10) = 50 N.",
        },
      ],
    },
    {
      id: "pm5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Peso y masa · Reactivo 5 / 7",
          enunciado: "Un objeto pesa 100 N en la Tierra. ¿Cuál es su masa? (g = 10 m/s²)",
          opciones: ["10 kg", "1000 kg", "100 kg", "0.1 kg"],
          correcta: 0,
          explicacion: "De P = m·g se despeja m = P / g = 100 / 10 = 10 kg.",
        },
      ],
    },
    {
      id: "pm6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Peso y masa · Reactivo 6 / 7",
          enunciado: "De las siguientes, ¿cuál es una fuerza (magnitud vectorial)?",
          opciones: ["El peso", "La masa", "El tiempo", "La temperatura"],
          correcta: 0,
          explicacion: "El peso es la fuerza con que la gravedad atrae a un cuerpo, por eso es un vector y se mide en newtons. La masa es un escalar.",
        },
      ],
    },
    {
      id: "pm7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Peso y masa · Reactivo 7 / 7",
          enunciado: "¿En qué unidades se mide la masa y en cuáles el peso, respectivamente?",
          opciones: [
            "Kilogramos (kg) y newtons (N)",
            "Newtons (N) y kilogramos (kg)",
            "Ambos en kilogramos",
            "Ambos en newtons",
          ],
          correcta: 0,
          explicacion: "La masa, como cantidad de materia, se mide en kilogramos; el peso, al ser una fuerza, se mide en newtons.",
        },
      ],
    },
    {
      id: "normal-friccion",
      tipo: "lienzo",
      etiqueta: "Las fuerzas de las superficies",
      titulo: "Fuerza Normal y Fricción",
      bloques: [
        {
          tipo: "formula",
          math: "f = \\mu\\,N",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "din-friccion",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "N\\ \\text{(normal)}",
              texto: "fuerza perpendicular que la superficie ejerce sobre el objeto",
            },
            {
              math: "f\\ \\text{(fricción)}",
              texto: "se opone al movimiento; es paralela a la superficie",
            },
            {
              math: "\\mu",
              texto: "coeficiente de fricción (sin unidades): depende de los materiales",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "La fricción estática evita que el objeto empiece a moverse; la cinética actúa cuando ya se desliza. En una superficie horizontal, la normal es igual al peso (N = mg).",
        },
      ],
    },
    {
      id: "ej-friccion",
      tipo: "lienzo",
      etiqueta: "Fuerza de fricción",
      titulo: "Ejemplo · Fricción",
      bloques: [
        {
          tipo: "destacado",
          texto: "Un bloque se desliza sobre una superficie con coeficiente de fricción μ = 0.4 y una fuerza normal de 50 N. ¿Cuál es la fuerza de fricción?",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "f = \\mu\\,N",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "La fricción solo necesita el coeficiente y la fuerza normal. Se multiplican directamente. Esta fuerza se opone al movimiento del bloque.",
        },
        {
          tipo: "formula",
          math: "f = (0.4)(50) = 20\\ \\text{N}",
        },
      ],
    },
    {
      id: "fr1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Fricción · Reactivo 1 / 6",
          enunciado: "Un bloque se desliza con un coeficiente de fricción μ = 0.5 y una fuerza normal de 80 N. ¿Cuál es la fuerza de fricción?",
          opciones: ["40 N", "160 N", "0.00625 N", "80.5 N"],
          correcta: 0,
          explicacion: "f = μ·N = (0.5)(80) = 40 N.",
        },
      ],
    },
    {
      id: "fr2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Fricción · Reactivo 2 / 6",
          enunciado: "Un libro descansa sobre una mesa horizontal. La fuerza normal que la mesa ejerce sobre el libro es:",
          opciones: [
            "Perpendicular a la superficie, hacia arriba",
            "Paralela a la superficie",
            "Igual a la fuerza de fricción",
            "Dirigida hacia abajo",
          ],
          correcta: 0,
          explicacion: "La fuerza normal siempre es perpendicular a la superficie de contacto. Sobre una mesa horizontal apunta verticalmente hacia arriba y equilibra el peso.",
        },
      ],
    },
    {
      id: "fr3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Leyes de Newton · Fricción · Reactivo 3 / 6",
          enunciado: "Un bloque se desliza con coeficiente de fricción μ = 0.3 y una fuerza normal de 100 N. ¿Cuál es la fuerza de fricción?",
          opciones: ["30 N", "300 N", "0.003 N", "100.3 N"],
          correcta: 0,
          explicacion: "f = μ·N = (0.3)(100) = 30 N.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "din-friccion",
        },
      ],
    },
    {
      id: "fr4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Fricción · Reactivo 4 / 6",
          enunciado: "La fuerza de fricción sobre un objeto que se desliza siempre:",
          opciones: [
            "Se opone al movimiento",
            "Apunta en la dirección del movimiento",
            "Es perpendicular a la superficie",
            "Es cero",
          ],
          correcta: 0,
          explicacion: "La fricción es una fuerza paralela a la superficie que siempre actúa en sentido contrario al movimiento (o a la tendencia de movimiento) del objeto.",
        },
      ],
    },
    {
      id: "fr5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Fricción · Reactivo 5 / 6",
          enunciado: "Sobre una superficie horizontal, sin fuerzas verticales extra, la fuerza normal es igual a:",
          opciones: ["El peso del objeto (mg)", "La fuerza de fricción", "Cero", "La masa del objeto"],
          correcta: 0,
          explicacion: "En una superficie horizontal el objeto no acelera verticalmente, así que la normal equilibra al peso: N = mg.",
        },
      ],
    },
    {
      id: "fr6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Fricción · Reactivo 6 / 6",
          enunciado: "¿Cómo se llama la fricción que actúa sobre un objeto antes de que empiece a moverse?",
          opciones: ["Fricción estática", "Fricción cinética", "Fuerza normal", "Tensión"],
          correcta: 0,
          explicacion: "La fricción estática es la que impide que el objeto empiece a deslizarse; una vez en movimiento, actúa la fricción cinética.",
        },
      ],
    },
    {
      id: "hooke",
      tipo: "lienzo",
      etiqueta: "La fuerza de un resorte",
      titulo: "Ley de Hooke",
      bloques: [
        {
          tipo: "destacado",
          texto: "La fuerza que ejerce un resorte es directamente proporcional a su deformación (lo que se estira o comprime). Mientras no se deforme permanentemente, vale esta ley.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "din-hooke",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "F = k\\,x",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "k es la constante del resorte (su «dureza», en N/m): a mayor k, más rígido. Si estiras el doble, la fuerza es el doble. La gráfica fuerza-deformación es una recta.",
        },
        {
          tipo: "formula",
          math: "x = \\dfrac{F}{k}, \\qquad F \\propto x",
        },
      ],
    },
    {
      id: "ej-hooke",
      tipo: "lienzo",
      etiqueta: "Constante del resorte",
      titulo: "Ejemplo · Ley de Hooke",
      bloques: [
        {
          tipo: "destacado",
          texto: "Un resorte se estira 0.2 m cuando se le aplica una fuerza de 40 N. ¿Cuál es su constante elástica k?",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "F = k\\,x \\;\\Rightarrow\\; k = \\dfrac{F}{x}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Se despeja k de la ley de Hooke dividiendo la fuerza entre la deformación. El resultado está en newtons por metro (N/m).",
        },
        {
          tipo: "formula",
          math: "k = \\dfrac{40}{0.2} = 200\\ \\tfrac{\\text{N}}{\\text{m}}",
        },
      ],
    },
    {
      id: "hk1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Leyes de Newton · Ley de Hooke · Reactivo 1 / 5",
          enunciado: "Un resorte de constante k = 300 N/m se estira 0.1 m. ¿Qué fuerza ejerce?",
          opciones: ["30 N", "3000 N", "3 N", "30.1 N"],
          correcta: 0,
          explicacion: "Por la ley de Hooke, F = k·x = (300)(0.1) = 30 N.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "din-hooke",
        },
      ],
    },
    {
      id: "hk2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Ley de Hooke · Reactivo 2 / 5",
          enunciado: "Un resorte se estira 0.2 m al aplicarle una fuerza de 40 N. ¿Cuál es su constante elástica k?",
          opciones: ["200 N/m", "8 N/m", "0.005 N/m", "40.2 N/m"],
          correcta: 0,
          explicacion: "De F = k·x se despeja k = F / x = 40 / 0.2 = 200 N/m.",
        },
      ],
    },
    {
      id: "hk3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Ley de Hooke · Reactivo 3 / 5",
          enunciado: "Un resorte de constante k = 250 N/m soporta una fuerza de 50 N. ¿Cuánto se estira?",
          opciones: ["0.2 m", "5 m", "200 m", "12 500 m"],
          correcta: 0,
          explicacion: "De F = k·x se despeja x = F / k = 50 / 250 = 0.2 m.",
        },
      ],
    },
    {
      id: "hk4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Ley de Hooke · Reactivo 4 / 5",
          enunciado: "Según la ley de Hooke, la fuerza que ejerce un resorte es directamente proporcional a:",
          opciones: ["Su deformación (lo que se estira o comprime)", "Su masa", "El tiempo", "Su temperatura"],
          correcta: 0,
          explicacion: "La ley de Hooke establece F = k·x: la fuerza del resorte crece en proporción directa a la deformación x.",
        },
      ],
    },
    {
      id: "hk5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Ley de Hooke · Reactivo 5 / 5",
          enunciado: "Si se estira un resorte el doble de su deformación, la fuerza que ejerce:",
          opciones: ["Se duplica", "Se reduce a la mitad", "No cambia", "Se cuadruplica"],
          correcta: 0,
          explicacion: "Como F = k·x, la fuerza es proporcional a la deformación: al duplicar x, la fuerza también se duplica.",
        },
      ],
    },
    {
      id: "gravitacion-centripeta",
      tipo: "lienzo",
      etiqueta: "Dos fuerzas clave",
      titulo: "Gravitación y Fuerza Centrípeta",
      bloques: [
        {
          tipo: "formula",
          math: "F = G\\,\\dfrac{m_1 m_2}{r^2}",
        },
        {
          tipo: "lista",
          items: [
            {
              math: "F_{grav} \\propto \\tfrac{1}{r^2}",
              texto: "gravitación universal: si la distancia se duplica, la fuerza baja a la cuarta parte",
            },
            {
              math: "F_c = \\dfrac{m\\,v^2}{r}",
              texto: "fuerza centrípeta: apunta al centro en el movimiento circular",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "En el movimiento circular uniforme la fuerza neta no es cero: siempre apunta hacia el centro (es la que «curva» la trayectoria). La gravedad de la Tierra es la fuerza centrípeta que mantiene a la Luna en órbita.",
        },
      ],
    },
    {
      id: "ej-centripeta",
      tipo: "lienzo",
      etiqueta: "La fuerza que mantiene el giro",
      titulo: "Ejemplo · Fuerza centrípeta",
      bloques: [
        {
          tipo: "destacado",
          texto: "Un objeto de 2 kg gira en una circunferencia de 0.5 m de radio con una rapidez de 3 m/s. ¿Cuál es la fuerza centrípeta que lo mantiene en la curva?",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "F_c = \\dfrac{m\\,v^2}{r}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "La fuerza centrípeta apunta hacia el centro y depende de la masa, del cuadrado de la rapidez y del radio. Solo hay que sustituir los datos en la fórmula.",
        },
        {
          tipo: "formula",
          math: "F_c = \\dfrac{(2)(3^2)}{0.5} = \\dfrac{18}{0.5} = 36\\ \\text{N}",
        },
      ],
    },
    {
      id: "gc1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Gravitación y centrípeta · Reactivo 1 / 6",
          enunciado: "En un movimiento circular uniforme, la fuerza neta sobre el objeto apunta:",
          opciones: [
            "Hacia el centro de la circunferencia",
            "Hacia afuera del círculo",
            "En dirección tangente",
            "Es cero",
          ],
          correcta: 0,
          explicacion: "La fuerza centrípeta apunta siempre hacia el centro; es la que cambia la dirección de la velocidad y mantiene al objeto en la curva.",
        },
      ],
    },
    {
      id: "gc2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Gravitación y centrípeta · Reactivo 2 / 6",
          enunciado: "Según la ley de gravitación, si la distancia entre dos masas se duplica, la fuerza de atracción se vuelve:",
          opciones: ["La cuarta parte", "La mitad", "El doble", "El cuádruple"],
          correcta: 0,
          explicacion: "La fuerza es inversamente proporcional al cuadrado de la distancia. Al duplicar r, el denominador se multiplica por 2² = 4, así que la fuerza baja a 1/4.",
        },
      ],
    },
    {
      id: "gc3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Gravitación y centrípeta · Reactivo 3 / 6",
          enunciado: "Un objeto de 2 kg gira a 4 m/s en una circunferencia de 2 m de radio. ¿Cuál es la fuerza centrípeta?",
          opciones: ["16 N", "8 N", "4 N", "32 N"],
          correcta: 0,
          explicacion: "Fc = m·v²/r = (2)(4²)/2 = (2)(16)/2 = 32/2 = 16 N.",
        },
      ],
    },
    {
      id: "gc4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Gravitación y centrípeta · Reactivo 4 / 6",
          enunciado: "¿Qué fuerza mantiene a la Luna girando en órbita alrededor de la Tierra?",
          opciones: [
            "La fuerza de gravedad (actúa como centrípeta)",
            "La fricción del espacio",
            "La fuerza centrífuga",
            "La tensión de una cuerda",
          ],
          correcta: 0,
          explicacion: "La gravedad de la Tierra atrae a la Luna hacia el centro y hace de fuerza centrípeta, manteniéndola en su órbita.",
        },
      ],
    },
    {
      id: "gc5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Gravitación y centrípeta · Reactivo 5 / 6",
          enunciado: "Si la distancia entre dos masas se triplica, la fuerza gravitatoria entre ellas se vuelve:",
          opciones: ["La novena parte", "La tercera parte", "El triple", "El nónuplo"],
          correcta: 0,
          explicacion: "Por la ley del inverso del cuadrado, al triplicar r el denominador se multiplica por 3² = 9, así que la fuerza baja a 1/9.",
        },
      ],
    },
    {
      id: "gc6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Gravitación y centrípeta · Reactivo 6 / 6",
          enunciado: "En un movimiento circular uniforme, la fuerza centrípeta es responsable de:",
          opciones: [
            "Cambiar la dirección de la velocidad",
            "Aumentar la rapidez del objeto",
            "Detener el objeto",
            "Alejar el objeto del centro",
          ],
          correcta: 0,
          explicacion: "En el movimiento circular uniforme la rapidez no cambia; la fuerza centrípeta solo cambia continuamente la dirección de la velocidad para mantener la trayectoria curva.",
        },
      ],
    },
    {
      id: "rotacional",
      tipo: "lienzo",
      etiqueta: "Inercia, momento angular y torque",
      titulo: "Dinámica Rotacional",
      bloques: [
        {
          tipo: "formula",
          math: "I = \\sum m\\,r^2",
        },
        {
          tipo: "lista",
          items: [
            {
              math: "I = \\sum m r^2",
              texto: "momento de inercia: resistencia a girar (masas puntuales: masa por radio al cuadrado)",
            },
            {
              math: "L = m\\,v\\,r",
              texto: "momento angular: cantidad de giro de una masa que se mueve a distancia r del eje",
            },
            {
              math: "\\tau = F\\,r",
              texto: "torque o momento de fuerza: fuerza por su brazo de palanca r",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Cuanto más lejos del eje está la masa, mayor su momento de inercia (entra el radio al cuadrado). El torque mide la capacidad de una fuerza para hacer girar: a mayor brazo r, mayor torque. Es el principio de la palanca.",
        },
      ],
    },
    {
      id: "ej-inercia-rot",
      tipo: "lienzo",
      etiqueta: "Masas puntuales que giran",
      titulo: "Ejemplo · Momento de inercia",
      bloques: [
        {
          tipo: "destacado",
          texto: "Un anemómetro tiene 3 copas de 0.2 kg cada una, montadas en varillas de 0.5 m. ¿Cuál es el momento de inercia del conjunto?",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "I = \\sum m\\,r^2",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Se trata de masas puntuales todas a la misma distancia del eje. Se suma m·r² de cada copa: como son iguales, basta multiplicar por 3.",
        },
        {
          tipo: "formula",
          math: "I = 3\\,(0.2)(0.5)^2 = 3\\,(0.2)(0.25) = 0.15\\ \\text{kg}\\cdot\\text{m}^2",
        },
      ],
    },
    {
      id: "rot1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Dinámica rotacional · Reactivo 1 / 4",
          enunciado: "Un anemómetro tiene 3 copas de 0.2 kg en varillas de 0.5 m. ¿Cuál es su momento de inercia?",
          opciones: ["0.15 kg·m²", "0.3 kg·m²", "0.6 kg·m²", "0.05 kg·m²"],
          correcta: 0,
          explicacion: "I = Σ m·r² = 3·(0.2)·(0.5)² = 3·(0.2)·(0.25) = 0.15 kg·m². Cada masa va al cuadrado del radio.",
        },
      ],
    },
    {
      id: "rot2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Dinámica rotacional · Reactivo 2 / 4",
          enunciado: "En un disco hay dos masas: 3 kg a 0.6 m del eje y 9 kg a 0.2 m. ¿Cuál es el momento de inercia total?",
          opciones: ["1.44 kg·m²", "2.4 kg·m²", "7.2 kg·m²", "0.84 kg·m²"],
          correcta: 0,
          explicacion: "I = Σ m·r² = 3·(0.6)² + 9·(0.2)² = 3·0.36 + 9·0.04 = 1.08 + 0.36 = 1.44 kg·m².",
        },
      ],
    },
    {
      id: "rot3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Dinámica rotacional · Reactivo 3 / 4",
          enunciado: "Dos cuerpos de 1 kg giran en una barra a r = 0.3 m del eje, cada uno con v = 2 m/s. ¿Cuál es el momento angular total?",
          opciones: ["1.2 kg·m²/s", "0.6 kg·m²/s", "2.4 kg·m²/s", "0.36 kg·m²/s"],
          correcta: 0,
          explicacion: "Para cada cuerpo L = m·v·r = 1·2·0.3 = 0.6 kg·m²/s. Como son dos, el total es 2·0.6 = 1.2 kg·m²/s.",
        },
      ],
    },
    {
      id: "rot4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Dinámica rotacional · Reactivo 4 / 4",
          enunciado: "Para aflojar una tuerca apretada con una llave, conviene tomar la llave:",
          opciones: [
            "Lo más lejos posible del eje (mayor brazo)",
            "Lo más cerca posible del eje",
            "Justo sobre el eje",
            "Da igual dónde se tome",
          ],
          correcta: 0,
          explicacion: "El torque es τ = F·r. Cuanto mayor sea el brazo r (más lejos del eje aplicas la fuerza), mayor es el torque y más fácil resulta girar la tuerca.",
        },
      ],
    },
    {
      id: "plano-estatica-mcu",
      tipo: "lienzo",
      etiqueta: "Tres situaciones clásicas",
      titulo: "Plano Inclinado, Estática y MCU",
      bloques: [
        {
          tipo: "formula",
          math: "P_{\\parallel} = m\\,g\\,\\text{sen}\\,\\theta",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "din-friccion",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "m g\\,\\text{sen}\\,\\theta",
              texto: "componente del peso paralela al plano inclinado (la que tiende a deslizar el cuerpo)",
            },
            {
              math: "m g\\,\\text{cos}\\,\\theta",
              texto: "componente del peso perpendicular al plano (la que aprieta contra la superficie)",
            },
            {
              math: "\\sum \\vec{F} = 0",
              texto: "estática: en equilibrio, la suma de fuerzas y tensiones es cero",
            },
            {
              math: "F_c = \\dfrac{m v^2}{r}",
              texto: "MCU: fuerza centrípeta; periodo T (una vuelta) y frecuencia f = 1/T",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "En un plano inclinado el peso se descompone en m·g·senθ (a lo largo del plano) y m·g·cosθ (contra el plano). Si el cuerpo baja a velocidad constante, la fricción equilibra exactamente a m·g·senθ. En el MCU, el periodo T es el tiempo de una vuelta completa y la frecuencia es f = 1/T.",
        },
      ],
    },
    {
      id: "ej-plano",
      tipo: "lienzo",
      etiqueta: "Fricción en un plano inclinado",
      titulo: "Ejemplo · Deslizamiento uniforme",
      bloques: [
        {
          tipo: "destacado",
          texto: "Un cubo de 14 kg baja a velocidad constante por una rampa inclinada 30°. ¿Cuál es la fuerza de fricción que actúa sobre él? (g = 10 m/s²)",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "din-friccion",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "f = m\\,g\\,\\text{sen}\\,\\theta",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Si baja a velocidad constante, la fuerza neta es cero: la fricción equilibra exactamente la componente del peso paralela al plano, m·g·senθ. Con sen 30° = 0.5.",
        },
        {
          tipo: "formula",
          math: "f = (14)(10)(0.5) = 70\\ \\text{N}",
        },
      ],
    },
    {
      id: "pem1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Plano inclinado y MCU · Reactivo 1 / 3",
          enunciado: "Un cubo de 14 kg baja a velocidad constante por una rampa de 30°. ¿Cuál es la fuerza de fricción? (g = 10 m/s²)",
          opciones: ["70 N", "140 N", "121 N", "35 N"],
          correcta: 0,
          explicacion: "A velocidad constante la fricción iguala a la componente del peso paralela: f = m·g·senθ = 14·10·sen30° = 14·10·0.5 = 70 N.",
        },
      ],
    },
    {
      id: "pem2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Plano inclinado y MCU · Reactivo 2 / 3",
          enunciado: "Un objeto da una vuelta completa en una circunferencia en 0.1 s. Ese tiempo corresponde a su:",
          opciones: ["Periodo (T)", "Frecuencia (f)", "Aceleración", "Radio"],
          correcta: 0,
          explicacion: "El periodo T es el tiempo que tarda en dar una vuelta completa: aquí T = 0.1 s. La frecuencia sería f = 1/T = 10 vueltas por segundo.",
        },
      ],
    },
    {
      id: "pem3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Leyes de Newton · Plano inclinado y MCU · Reactivo 3 / 3",
          enunciado: "Una bala de 1.2 kg atada a una cuerda de 0.8 m gira a 1.5 m/s. ¿Cuál es la fuerza centrípeta?",
          opciones: ["≈ 3.4 N", "≈ 2.25 N", "≈ 1.8 N", "≈ 6.8 N"],
          correcta: 0,
          explicacion: "Fc = m·v²/r = (1.2)(1.5²)/0.8 = (1.2)(2.25)/0.8 = 2.7/0.8 ≈ 3.4 N.",
        },
      ],
    },
    {
      id: "resumen",
      tipo: "lienzo",
      etiqueta: "Las claves de la dinámica",
      titulo: "Resumen",
      bloques: [
        {
          tipo: "lista",
          items: [
            {
              titulo: "1ª ley (inercia)",
              texto: "sin fuerza neta, el cuerpo sigue en reposo o en MRU",
            },
            {
              math: "\\sum F = m a",
              texto: "2ª ley: la fuerza neta produce aceleración",
            },
            {
              math: "F_{AB} = -F_{BA}",
              texto: "3ª ley: acción y reacción, iguales y opuestas",
            },
            {
              math: "P = m g",
              texto: "peso: la masa no cambia, el peso sí (depende de g)",
            },
            {
              math: "f = \\mu N",
              texto: "fricción: se opone al movimiento; N es la normal",
            },
            {
              math: "F = k x",
              texto: "ley de Hooke: la fuerza del resorte es proporcional a x",
            },
            {
              math: "F_c = \\tfrac{m v^2}{r}",
              texto: "fuerza centrípeta: apunta al centro en el giro",
            },
            {
              math: "I = \\sum m r^2",
              texto: "rotación: momento de inercia, momento angular L = m·v·r y torque τ = F·r",
            },
            {
              math: "m g\\,\\text{sen}\\,\\theta",
              texto: "plano inclinado: la fricción equilibra a m·g·senθ si baja a velocidad constante",
            },
            {
              titulo: "Unidad",
              texto: "la fuerza se mide en newtons: 1 N = 1 kg·m/s²",
            },
          ],
        },
      ],
    },
  ],
};
