// Datos de la presentación: Cuadriláteros y Polígonos

export const PRESENTACION = {
  id: "cuadrilateros-poligonos",
  titulo: "Cuadriláteros y Polígonos",
  materia: "Matemáticas",
  subtema: "Geometría",
  slides: [

    // ── PORTADA ───────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Cuadriláteros y Polígonos",
      subtitulo: "Paralelogramos, trapecios y polígonos regulares",
      etiqueta: "Geometría · Preparatoria"
    },

    // ── PARALELOGRAMOS ────────────────────────────────────────────────────────

    {
      id: 1,
      tipo: "definicion",
      titulo: "Paralelogramo",
      simbolo: "AB \\parallel DC,\\quad AD \\parallel BC",
      cuerpo: "Un paralelogramo es un cuadrilátero con dos pares de lados opuestos paralelos e iguales. Sus ángulos opuestos son iguales, los consecutivos son suplementarios y sus diagonales se bisectan mutuamente.",
      svgDiagram: "paralelogramo-def",
      condiciones: [
        {
          texto: "① Lados opuestos paralelos e iguales",
          math: "AB = DC,\\quad AD = BC"
        },
        {
          texto: "② Ángulos opuestos iguales · consecutivos suplementarios",
          math: "\\angle A = \\angle C,\\quad \\angle A + \\angle B = 180^\\circ"
        }
      ]
    },

    {
      id: 2,
      tipo: "concepto",
      titulo: "Paralelogramo — Fórmulas",
      etiqueta: "Área, perímetro y lados",
      formula: "A = b \\cdot h",
      svgDiagram: "paralelogramo-formulas",
      items: [
        { math: "A = b \\cdot h", texto: "área: base por altura perpendicular" },
        { math: "P = 2(a + b)", texto: "perímetro: suma de los cuatro lados" },
        { math: "\\angle A + \\angle B = 180^\\circ", texto: "ángulos consecutivos suplementarios" }
      ],
      nota: "La altura h es siempre perpendicular a la base, nunca el lado oblicuo."
    },

    {
      id: 3,
      tipo: "lista_criterios",
      titulo: "Tipos de Paralelogramos",
      etiqueta: "Cuatro casos especiales",
      variante: "paralelogramos",
      criterios: [
        {
          sigla: "RBDE",
          nombre: "Romboide",
          desc: "Paralelogramo general: lados adyacentes desiguales, ángulos no rectos."
        },
        {
          sigla: "RECT",
          nombre: "Rectángulo",
          desc: "Cuatro ángulos rectos (90°); diagonales iguales entre sí."
        },
        {
          sigla: "RMBO",
          nombre: "Rombo",
          desc: "Cuatro lados iguales; diagonales perpendiculares entre sí."
        },
        {
          sigla: "CUAD",
          nombre: "Cuadrado",
          desc: "Cuatro lados iguales y cuatro ángulos rectos: el más simétrico."
        }
      ]
    },

    {
      id: 4,
      tipo: "criterio_detalle",
      titulo: "Rectángulo",
      etiqueta: "Paralelogramo con cuatro ángulos rectos",
      svgDiagram: "rectangulo-detalle",
      enunciado: "El rectángulo es un paralelogramo con los cuatro ángulos interiores de 90°. Sus diagonales son iguales en longitud y se bisectan mutuamente.",
      math: "A = b \\cdot h,\\quad P = 2(b + h),\\quad d = \\sqrt{b^2 + h^2}",
      por_que: "Al ser todos los ángulos rectos, los dos catetos del triángulo que forma la diagonal son exactamente los lados b y h, de modo que Pitágoras da la diagonal directamente.",
      math_razon: "d^2 = b^2 + h^2 \\implies d = \\sqrt{b^2 + h^2}"
    },

    {
      id: 5,
      tipo: "criterio_detalle",
      titulo: "Rombo",
      etiqueta: "Paralelogramo con cuatro lados iguales",
      svgDiagram: "rombo-detalle",
      enunciado: "El rombo tiene los cuatro lados iguales. Sus diagonales se cortan en ángulo recto y se bisectan; cada diagonal divide al rombo en dos triángulos isósceles congruentes.",
      math: "A = \\dfrac{d_1 \\cdot d_2}{2},\\quad P = 4l,\\quad l = \\sqrt{\\left(\\tfrac{d_1}{2}\\right)^2 + \\left(\\tfrac{d_2}{2}\\right)^2}",
      por_que: "Las dos diagonales forman cuatro triángulos rectángulos congruentes. El área total equivale al área de un rectángulo de lados d₁ y d₂ dividida entre dos.",
      math_razon: "A = 4 \\cdot \\tfrac{1}{2} \\cdot \\tfrac{d_1}{2} \\cdot \\tfrac{d_2}{2} = \\dfrac{d_1 d_2}{2}"
    },

    {
      id: 6,
      tipo: "criterio_detalle",
      titulo: "Cuadrado",
      etiqueta: "Rombo y rectángulo a la vez",
      svgDiagram: "cuadrado-detalle",
      enunciado: "El cuadrado reúne todas las propiedades del rectángulo (cuatro ángulos rectos) y del rombo (cuatro lados iguales). Es el paralelogramo con mayor simetría.",
      math: "A = l^2,\\quad P = 4l,\\quad d = l\\sqrt{2}",
      por_que: "La diagonal une dos vértices opuestos creando un triángulo rectángulo isósceles de catetos l, l. Pitágoras da d = √(l²+l²) = l√2.",
      math_razon: "d = \\sqrt{l^2 + l^2} = \\sqrt{2l^2} = l\\sqrt{2}"
    },

    // ── EJERCICIOS DE PARALELOGRAMOS ──────────────────────────────────────────

    {
      id: "pe1",
      tipo: "ejercicio",
      svgDiagram: "pe1-rect",
      etiqueta: "Paralelogramos · Ejercicio 1 / 3",
      pregunta: "Un rectángulo tiene base 8 cm y altura 6 cm. ¿Cuánto mide su diagonal?",
      math_pregunta: "b = 8\\text{ cm},\\quad h = 6\\text{ cm},\\quad d = ?",
      opciones: ["10 cm", "√89 cm", "14 cm"],
      correcta: 0,
      explicacion: "Por el teorema de Pitágoras: d = √(b²+h²) = √(64+36) = √100 = 10 cm.",
      pasos: [
        { pre: "Diagonal: ", math: "d = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10\\text{ cm}" }
      ]
    },

    {
      id: "pe2",
      tipo: "ejercicio",
      svgDiagram: "pe2-rombo",
      etiqueta: "Paralelogramos · Ejercicio 2 / 3",
      pregunta: "Un rombo tiene diagonales de 10 cm y 24 cm. ¿Cuánto mide su área?",
      math_pregunta: "d_1 = 10\\text{ cm},\\quad d_2 = 24\\text{ cm},\\quad A = ?",
      opciones: ["60 cm²", "120 cm²", "240 cm²"],
      correcta: 1,
      explicacion: "Área del rombo = d₁·d₂/2 = 10·24/2 = 120 cm².",
      pasos: [
        { pre: "Área = ", math: "\\dfrac{d_1 \\cdot d_2}{2} = \\dfrac{10 \\times 24}{2} = 120\\text{ cm}^2" }
      ]
    },

    {
      id: "pe3",
      tipo: "ejercicio",
      svgDiagram: "pe3-cuadrado",
      etiqueta: "Paralelogramos · Ejercicio 3 / 3",
      pregunta: "El área de un cuadrado es 49 cm². ¿Cuánto mide su diagonal?",
      math_pregunta: "A = 49\\text{ cm}^2,\\quad d = ?",
      opciones: ["7 cm", "7\\sqrt{2} \\text{ cm}", "14 cm"],
      correcta: 1,
      explicacion: "El lado es l = √49 = 7 cm. La diagonal del cuadrado es d = l√2 = 7√2 cm.",
      pasos: [
        { pre: "Lado: ", math: "l = \\sqrt{49} = 7\\text{ cm}" },
        { pre: "Diagonal: ", math: "d = l\\sqrt{2} = 7\\sqrt{2}\\text{ cm}" }
      ]
    },

    // ── TRAPECIOS ─────────────────────────────────────────────────────────────

    {
      id: 10,
      tipo: "definicion",
      titulo: "Trapecio",
      simbolo: "B \\parallel b,\\quad B \\neq b",
      cuerpo: "Un trapecio es un cuadrilátero con exactamente un par de lados paralelos llamados bases. La base mayor se denota B y la base menor b. Los lados no paralelos se llaman lados laterales o catetos.",
      svgDiagram: "trapecio-def",
      condiciones: [
        {
          texto: "① Un par de lados paralelos (bases)",
          math: "B \\parallel b,\\quad B > b"
        },
        {
          texto: "② Mediana: une los puntos medios de los lados laterales",
          math: "m = \\dfrac{B + b}{2}"
        }
      ]
    },

    {
      id: 11,
      tipo: "concepto",
      titulo: "Trapecio — Fórmulas",
      etiqueta: "Área, perímetro y mediana",
      formula: "A = \\dfrac{(B + b)\\cdot h}{2}",
      svgDiagram: "trapecio-formulas",
      items: [
        { math: "A = \\dfrac{(B+b)h}{2}", texto: "área: semisuma de bases por altura" },
        { math: "P = B + b + c + d", texto: "perímetro: suma de los cuatro lados" },
        { math: "m = \\dfrac{B+b}{2}", texto: "mediana: paralela a las bases" }
      ],
      nota: "La mediana m es paralela a ambas bases; su longitud es la media aritmética de B y b."
    },

    {
      id: 12,
      tipo: "lista_criterios",
      titulo: "Tipos de Trapecios",
      etiqueta: "Tres clasificaciones",
      variante: "trapecios",
      criterios: [
        {
          sigla: "ESC",
          nombre: "Escaleno",
          desc: "Lados laterales desiguales. Sin eje de simetría."
        },
        {
          sigla: "ISO",
          nombre: "Isósceles",
          desc: "Lados laterales iguales. Los ángulos de cada base son iguales."
        },
        {
          sigla: "REC",
          nombre: "Rectángulo",
          desc: "Un lado lateral perpendicular a las bases. Tiene dos ángulos rectos."
        }
      ]
    },

    {
      id: 13,
      tipo: "criterio_detalle",
      titulo: "Trapecio Isósceles",
      etiqueta: "Lados laterales iguales",
      svgDiagram: "trapecio-isosceles-detalle",
      enunciado: "El trapecio isósceles tiene sus dos lados laterales iguales (c = d). Sus diagonales son iguales y los ángulos de cada base son iguales entre sí.",
      math: "c = d,\\quad \\angle A = \\angle B,\\quad \\angle C = \\angle D",
      por_que: "La simetría axial respecto a la mediatriz de ambas bases garantiza la igualdad de los lados laterales, de los ángulos correspondientes y de las diagonales.",
      math_razon: "\\text{Diagonal} = \\sqrt{h^2 + \\left(\\tfrac{B+b}{2}\\right)^2 + \\left(\\tfrac{B-b}{2}\\right)^2}"
    },

    {
      id: 14,
      tipo: "criterio_detalle",
      titulo: "Trapecio Rectángulo",
      etiqueta: "Un lado lateral perpendicular a las bases",
      svgDiagram: "trapecio-rect-detalle",
      enunciado: "El trapecio rectángulo tiene un lado lateral perpendicular a las dos bases. Ese lado lateral coincide exactamente con la altura del trapecio, lo que simplifica todos los cálculos.",
      math: "\\angle A = \\angle D = 90^\\circ,\\quad h = c,\\quad A = \\dfrac{(B + b)\\cdot c}{2}",
      por_que: "Al ser el lado c perpendicular a las bases, la altura h del trapecio es exactamente c, el lado vertical. No es necesario calcularla por separado.",
      math_razon: "h = c \\implies A = \\dfrac{(B+b)c}{2}"
    },

    // ── EJERCICIOS DE TRAPECIOS ───────────────────────────────────────────────

    {
      id: "te1",
      tipo: "ejercicio",
      svgDiagram: "te1-area",
      etiqueta: "Trapecios · Ejercicio 1 / 3",
      pregunta: "Un trapecio tiene bases de 12 cm y 8 cm, y altura de 5 cm. ¿Cuál es su área?",
      math_pregunta: "B = 12\\text{ cm},\\; b = 8\\text{ cm},\\; h = 5\\text{ cm}",
      opciones: ["40 cm²", "50 cm²", "60 cm²"],
      correcta: 1,
      explicacion: "Área = (B+b)·h/2 = (12+8)·5/2 = 20·5/2 = 50 cm².",
      pasos: [
        { pre: "Área = ", math: "\\dfrac{(12 + 8) \\cdot 5}{2} = \\dfrac{100}{2} = 50\\text{ cm}^2" }
      ]
    },

    {
      id: "te2",
      tipo: "ejercicio",
      svgDiagram: "te2-mediana",
      etiqueta: "Trapecios · Ejercicio 2 / 3",
      pregunta: "Un trapecio tiene bases de 14 cm y 6 cm. ¿Cuánto mide su mediana?",
      math_pregunta: "B = 14\\text{ cm},\\; b = 6\\text{ cm},\\; m = ?",
      opciones: ["8 cm", "10 cm", "20 cm"],
      correcta: 1,
      explicacion: "La mediana m = (B+b)/2 = (14+6)/2 = 20/2 = 10 cm.",
      pasos: [
        { pre: "Mediana: ", math: "m = \\dfrac{B + b}{2} = \\dfrac{14 + 6}{2} = 10\\text{ cm}" }
      ]
    },

    {
      id: "te3",
      tipo: "ejercicio",
      svgDiagram: "te3-iso",
      etiqueta: "Trapecios · Ejercicio 3 / 3",
      pregunta: "En un trapecio isósceles, ∠A = 65°. ¿Cuánto miden ∠B y ∠D?",
      math_pregunta: "\\angle A = 65^\\circ,\\quad \\angle B = ?,\\quad \\angle D = ?",
      opciones: ["∠B = 65°, ∠D = 115°", "∠B = 65°, ∠D = 250°", "∠B = 115°, ∠D = 115°"],
      correcta: 0,
      explicacion: "En el trapecio isósceles los ángulos de la misma base son iguales: ∠B = ∠A = 65°. Los ángulos de la otra base son suplementarios a los de la base mayor: ∠D = 180°−65° = 115°.",
      pasos: [
        { pre: "Misma base (isósceles): ", math: "\\angle B = \\angle A = 65^\\circ" },
        { pre: "Base opuesta (suplementarios): ", math: "\\angle D = 180^\\circ - 65^\\circ = 115^\\circ" }
      ]
    },

    // ── POLÍGONOS REGULARES ───────────────────────────────────────────────────

    {
      id: 18,
      tipo: "definicion",
      titulo: "Polígono Regular",
      simbolo: "l_1 = l_2 = \\cdots = l_n,\\quad \\alpha_1 = \\alpha_2 = \\cdots = \\alpha_n",
      cuerpo: "Un polígono regular tiene todos sus lados iguales y todos sus ángulos interiores iguales. Al aumentar el número de lados n, el polígono se aproxima cada vez más a un círculo.",
      svgDiagram: "poligono-regular-def",
      condiciones: [
        {
          texto: "① Todos los lados iguales (equilátero)",
          math: "l_1 = l_2 = \\cdots = l_n = l"
        },
        {
          texto: "② Todos los ángulos iguales (equiángulo)",
          math: "\\alpha = \\dfrac{(n-2) \\cdot 180^\\circ}{n}"
        }
      ]
    },

    {
      id: 19,
      tipo: "concepto",
      titulo: "Ángulo Interior",
      etiqueta: "Fórmula general para n lados",
      formula: "\\alpha = \\dfrac{(n-2)\\cdot 180^\\circ}{n}",
      svgDiagram: "angulo-interior-formula",
      items: [
        { math: "n = 3:\\; 60^\\circ", texto: "triángulo equilátero" },
        { math: "n = 4:\\; 90^\\circ", texto: "cuadrado" },
        { math: "n = 6:\\; 120^\\circ", texto: "hexágono regular" },
        { math: "n = 8:\\; 135^\\circ", texto: "octágono regular" }
      ],
      nota: "La suma de todos los ángulos interiores es siempre (n−2)·180°."
    },

    {
      id: 20,
      tipo: "concepto",
      titulo: "Ángulo Exterior",
      etiqueta: "Complemento del ángulo interior",
      formula: "\\beta = \\dfrac{360^\\circ}{n}",
      svgDiagram: "angulo-exterior-formula",
      items: [
        { math: "\\alpha + \\beta = 180^\\circ", texto: "ángulo interior + exterior = llano" },
        { math: "n = 4:\\; 90^\\circ", texto: "cuadrado" },
        { math: "n = 6:\\; 60^\\circ", texto: "hexágono regular" },
        { math: "n = 8:\\; 45^\\circ", texto: "octágono regular" }
      ],
      nota: "La suma de todos los ángulos exteriores de cualquier polígono convexo es siempre 360°."
    },

    {
      id: 21,
      tipo: "lista_criterios",
      titulo: "Polígonos Regulares",
      etiqueta: "De triángulo a hexágono",
      variante: "poligonos",
      criterios: [
        {
          sigla: "TRI",
          nombre: "Triángulo (n = 3)",
          desc: "α = 60°  ·  β = 120°  ·  Σ = 180°"
        },
        {
          sigla: "CUA",
          nombre: "Cuadrado (n = 4)",
          desc: "α = 90°  ·  β = 90°  ·  Σ = 360°"
        },
        {
          sigla: "PEN",
          nombre: "Pentágono (n = 5)",
          desc: "α = 108°  ·  β = 72°  ·  Σ = 540°"
        },
        {
          sigla: "HEX",
          nombre: "Hexágono (n = 6)",
          desc: "α = 120°  ·  β = 60°  ·  Σ = 720°"
        }
      ]
    },

    {
      id: "21b",
      tipo: "lista_criterios",
      titulo: "Polígonos Regulares",
      etiqueta: "Heptágono y octágono",
      variante: "poligonos",
      criterios: [
        {
          sigla: "HEP",
          nombre: "Heptágono (n = 7)",
          desc: "α ≈ 128.6°  ·  β ≈ 51.4°  ·  Σ = 900°"
        },
        {
          sigla: "OCT",
          nombre: "Octágono (n = 8)",
          desc: "α = 135°  ·  β = 45°  ·  Σ = 1 080°"
        }
      ]
    },

    // ── EJERCICIOS DE POLÍGONOS ───────────────────────────────────────────────

    {
      id: "poe1",
      tipo: "ejercicio",
      svgDiagram: "poe1-hex",
      etiqueta: "Polígonos · Ejercicio 1 / 3",
      pregunta: "¿Cuál es el ángulo interior de un hexágono regular?",
      math_pregunta: "n = 6,\\quad \\alpha = ?",
      opciones: ["108°", "120°", "135°"],
      correcta: 1,
      explicacion: "α = (n−2)·180°/n = (6−2)·180°/6 = 4·180°/6 = 720°/6 = 120°.",
      pasos: [
        { pre: "Ángulo interior: ", math: "\\alpha = \\dfrac{(6-2) \\cdot 180^\\circ}{6} = \\dfrac{720^\\circ}{6} = 120^\\circ" }
      ]
    },

    {
      id: "poe2",
      tipo: "ejercicio",
      svgDiagram: "poe2-angext",
      etiqueta: "Polígonos · Ejercicio 2 / 3",
      pregunta: "Un polígono regular tiene ángulo exterior de 45°. ¿Cuántos lados tiene?",
      math_pregunta: "\\beta = 45^\\circ,\\quad n = ?",
      opciones: ["6 lados", "8 lados", "10 lados"],
      correcta: 1,
      explicacion: "β = 360°/n → n = 360°/45° = 8 lados. Es un octágono regular.",
      pasos: [
        { pre: "Despejar n: ", math: "n = \\dfrac{360^\\circ}{\\beta} = \\dfrac{360^\\circ}{45^\\circ} = 8" }
      ]
    },

    {
      id: "poe3",
      tipo: "ejercicio",
      svgDiagram: "poe3-suma",
      etiqueta: "Polígonos · Ejercicio 3 / 3",
      pregunta: "¿Cuánto suman los ángulos interiores de un octágono?",
      math_pregunta: "n = 8,\\quad \\sum \\alpha = ?",
      opciones: ["900°", "1 080°", "1 260°"],
      correcta: 1,
      explicacion: "Suma = (n−2)·180° = (8−2)·180° = 6·180° = 1 080°.",
      pasos: [
        { pre: "Suma de ángulos interiores: ", math: "(8-2) \\cdot 180^\\circ = 6 \\times 180^\\circ = 1\\,080^\\circ" }
      ]
    },

    // ── RESUMEN ───────────────────────────────────────────────────────────────

    {
      id: 27,
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Lo que aprendimos hoy",
      puntos: [
        { titulo: "Paralelogramo", texto: "lados opuestos paralelos e iguales; diagonales se bisectan" },
        { math: "A_{\\square} = b \\cdot h", texto: "área del paralelogramo (y sus variantes romboide, rectángulo, rombo, cuadrado)" },
        { math: "d_{\\text{rect.}} = \\sqrt{b^2+h^2},\\; A_{\\text{rombo}} = \\dfrac{d_1 d_2}{2},\\; A_{\\text{cuad.}} = l^2", texto: "fórmulas de rectángulo, rombo y cuadrado" },
        { titulo: "Trapecio", texto: "un par de lados paralelos (bases B y b); tres tipos: escaleno, isósceles, rectángulo" },
        { math: "A_{\\text{trap.}} = \\dfrac{(B+b)\\cdot h}{2},\\quad m = \\dfrac{B+b}{2}", texto: "área y mediana del trapecio" },
        { math: "\\alpha = \\dfrac{(n-2)\\cdot 180^\\circ}{n},\\quad \\beta = \\dfrac{360^\\circ}{n}", texto: "ángulos interior y exterior de un polígono regular de n lados" }
      ]
    }

  ]
};
