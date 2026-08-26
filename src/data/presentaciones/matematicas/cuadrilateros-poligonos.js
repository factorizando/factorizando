// Datos de la presentación: Cuadriláteros y Polígonos

export const PRESENTACION = {
  id: "cuadrilateros-poligonos",
  titulo: "Cuadriláteros y Polígonos",
  materia: "Matemáticas",
  subtema: "Geometría",
  slides: [
    {
      id: 0,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "portada",
          kicker: "Geometría · Preparatoria",
          titulo: "Cuadriláteros y Polígonos",
          subtitulo: "Paralelogramos, trapecios y polígonos regulares",
        },
      ],
    },
    {
      id: 1,
      tipo: "lienzo",
      titulo: "Paralelogramo",
      bloques: [
        {
          tipo: "definicion",
          termino: "Paralelogramo",
          texto: "",
        },
        {
          tipo: "figura",
          clave: "paralelogramo-def",
        },
        {
          tipo: "lista",
          items: [
            {
              texto: "① Lados opuestos paralelos e iguales",
              math: "AB = DC,\\quad AD = BC",
            },
            {
              texto: "② Ángulos opuestos iguales · consecutivos suplementarios",
              math: "\\angle A = \\angle C,\\quad \\angle A + \\angle B = 180^\\circ",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      tipo: "lienzo",
      etiqueta: "Área, perímetro y lados",
      titulo: "Paralelogramo — Fórmulas",
      bloques: [
        {
          tipo: "formula",
          math: "A = b \\cdot h",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "paralelogramo-formulas",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "A = b \\cdot h",
              texto: "área: base por altura perpendicular",
            },
            {
              math: "P = 2(a + b)",
              texto: "perímetro: suma de los cuatro lados",
            },
            {
              math: "\\angle A + \\angle B = 180^\\circ",
              texto: "ángulos consecutivos suplementarios",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "La altura h es siempre perpendicular a la base, nunca el lado oblicuo.",
        },
      ],
    },
    {
      id: 3,
      tipo: "lienzo",
      etiqueta: "Cuatro casos especiales",
      titulo: "Tipos de Paralelogramos",
      bloques: [
        {
          tipo: "lista",
          estilo: "numerada",
          items: [
            {
              sigla: "RBDE",
              nombre: "Romboide",
              desc: "Paralelogramo general: lados adyacentes desiguales, ángulos no rectos.",
            },
            {
              sigla: "RECT",
              nombre: "Rectángulo",
              desc: "Cuatro ángulos rectos (90°); diagonales iguales entre sí.",
            },
            {
              sigla: "RMBO",
              nombre: "Rombo",
              desc: "Cuatro lados iguales; diagonales perpendiculares entre sí.",
            },
            {
              sigla: "CUAD",
              nombre: "Cuadrado",
              desc: "Cuatro lados iguales y cuatro ángulos rectos: el más simétrico.",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      tipo: "lienzo",
      etiqueta: "Paralelogramo con cuatro ángulos rectos",
      titulo: "Rectángulo",
      bloques: [
        {
          tipo: "destacado",
          texto: "El rectángulo es un paralelogramo con los cuatro ángulos interiores de 90°. Sus diagonales son iguales en longitud y se bisectan mutuamente.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "rectangulo-detalle",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "A = b \\cdot h,\\quad P = 2(b + h),\\quad d = \\sqrt{b^2 + h^2}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Al ser todos los ángulos rectos, los dos catetos del triángulo que forma la diagonal son exactamente los lados b y h, de modo que Pitágoras da la diagonal directamente.",
        },
        {
          tipo: "formula",
          math: "d^2 = b^2 + h^2 \\implies d = \\sqrt{b^2 + h^2}",
        },
      ],
    },
    {
      id: 5,
      tipo: "lienzo",
      etiqueta: "Paralelogramo con cuatro lados iguales",
      titulo: "Rombo",
      bloques: [
        {
          tipo: "destacado",
          texto: "El rombo tiene los cuatro lados iguales. Sus diagonales se cortan en ángulo recto y se bisectan; cada diagonal divide al rombo en dos triángulos isósceles congruentes.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "rombo-detalle",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "A = \\dfrac{d_1 \\cdot d_2}{2},\\quad P = 4l,\\quad l = \\sqrt{\\left(\\tfrac{d_1}{2}\\right)^2 + \\left(\\tfrac{d_2}{2}\\right)^2}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Las dos diagonales forman cuatro triángulos rectángulos congruentes. El área total equivale al área de un rectángulo de lados d₁ y d₂ dividida entre dos.",
        },
        {
          tipo: "formula",
          math: "A = 4 \\cdot \\tfrac{1}{2} \\cdot \\tfrac{d_1}{2} \\cdot \\tfrac{d_2}{2} = \\dfrac{d_1 d_2}{2}",
        },
      ],
    },
    {
      id: 6,
      tipo: "lienzo",
      etiqueta: "Rombo y rectángulo a la vez",
      titulo: "Cuadrado",
      bloques: [
        {
          tipo: "destacado",
          texto: "El cuadrado reúne todas las propiedades del rectángulo (cuatro ángulos rectos) y del rombo (cuatro lados iguales). Es el paralelogramo con mayor simetría.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "cuadrado-detalle",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "A = l^2,\\quad P = 4l,\\quad d = l\\sqrt{2}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "La diagonal une dos vértices opuestos creando un triángulo rectángulo isósceles de catetos l, l. Pitágoras da d = √(l²+l²) = l√2.",
        },
        {
          tipo: "formula",
          math: "d = \\sqrt{l^2 + l^2} = \\sqrt{2l^2} = l\\sqrt{2}",
        },
      ],
    },
    {
      id: "pe1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Paralelogramos · Ejercicio 1 / 3",
          enunciado: "Un rectángulo tiene base 8 cm y altura 6 cm. ¿Cuánto mide su diagonal?",
          opciones: ["10 cm", "√89 cm", "14 cm"],
          correcta: 0,
          explicacion: "Por el teorema de Pitágoras: d = √(b²+h²) = √(64+36) = √100 = 10 cm.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "pe1-rect",
        },
      ],
    },
    {
      id: "pe2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Paralelogramos · Ejercicio 2 / 3",
          enunciado: "Un rombo tiene diagonales de 10 cm y 24 cm. ¿Cuánto mide su área?",
          opciones: ["60 cm²", "120 cm²", "240 cm²"],
          correcta: 1,
          explicacion: "Área del rombo = d₁·d₂/2 = 10·24/2 = 120 cm².",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "pe2-rombo",
        },
      ],
    },
    {
      id: "pe3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Paralelogramos · Ejercicio 3 / 3",
          enunciado: "El área de un cuadrado es 49 cm². ¿Cuánto mide su diagonal?",
          opciones: ["7 cm", "7\\sqrt{2} \\text{ cm}", "14 cm"],
          correcta: 1,
          explicacion: "El lado es l = √49 = 7 cm. La diagonal del cuadrado es d = l√2 = 7√2 cm.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "pe3-cuadrado",
        },
      ],
    },
    {
      id: 10,
      tipo: "lienzo",
      titulo: "Trapecio",
      bloques: [
        {
          tipo: "definicion",
          termino: "Trapecio",
          texto: "",
        },
        {
          tipo: "figura",
          clave: "trapecio-def",
        },
        {
          tipo: "lista",
          items: [
            {
              texto: "① Un par de lados paralelos (bases)",
              math: "B \\parallel b,\\quad B > b",
            },
            {
              texto: "② Mediana: une los puntos medios de los lados laterales",
              math: "m = \\dfrac{B + b}{2}",
            },
          ],
        },
      ],
    },
    {
      id: 11,
      tipo: "lienzo",
      etiqueta: "Área, perímetro y mediana",
      titulo: "Trapecio — Fórmulas",
      bloques: [
        {
          tipo: "formula",
          math: "A = \\dfrac{(B + b)\\cdot h}{2}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "trapecio-formulas",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "A = \\dfrac{(B+b)h}{2}",
              texto: "área: semisuma de bases por altura",
            },
            {
              math: "P = B + b + c + d",
              texto: "perímetro: suma de los cuatro lados",
            },
            {
              math: "m = \\dfrac{B+b}{2}",
              texto: "mediana: paralela a las bases",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "La mediana m es paralela a ambas bases; su longitud es la media aritmética de B y b.",
        },
      ],
    },
    {
      id: 12,
      tipo: "lienzo",
      etiqueta: "Tres clasificaciones",
      titulo: "Tipos de Trapecios",
      bloques: [
        {
          tipo: "lista",
          estilo: "numerada",
          items: [
            {
              sigla: "ESC",
              nombre: "Escaleno",
              desc: "Lados laterales desiguales. Sin eje de simetría.",
            },
            {
              sigla: "ISO",
              nombre: "Isósceles",
              desc: "Lados laterales iguales. Los ángulos de cada base son iguales.",
            },
            {
              sigla: "REC",
              nombre: "Rectángulo",
              desc: "Un lado lateral perpendicular a las bases. Tiene dos ángulos rectos.",
            },
          ],
        },
      ],
    },
    {
      id: 13,
      tipo: "lienzo",
      etiqueta: "Lados laterales iguales",
      titulo: "Trapecio Isósceles",
      bloques: [
        {
          tipo: "destacado",
          texto: "El trapecio isósceles tiene sus dos lados laterales iguales (c = d). Sus diagonales son iguales y los ángulos de cada base son iguales entre sí.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "trapecio-isosceles-detalle",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "c = d,\\quad \\angle A = \\angle B,\\quad \\angle C = \\angle D",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "La simetría axial respecto a la mediatriz de ambas bases garantiza la igualdad de los lados laterales, de los ángulos correspondientes y de las diagonales.",
        },
        {
          tipo: "formula",
          math: "\\text{Diagonal} = \\sqrt{h^2 + \\left(\\tfrac{B+b}{2}\\right)^2 + \\left(\\tfrac{B-b}{2}\\right)^2}",
        },
      ],
    },
    {
      id: 14,
      tipo: "lienzo",
      etiqueta: "Un lado lateral perpendicular a las bases",
      titulo: "Trapecio Rectángulo",
      bloques: [
        {
          tipo: "destacado",
          texto: "El trapecio rectángulo tiene un lado lateral perpendicular a las dos bases. Ese lado lateral coincide exactamente con la altura del trapecio, lo que simplifica todos los cálculos.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "trapecio-rect-detalle",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "\\angle A = \\angle D = 90^\\circ,\\quad h = c,\\quad A = \\dfrac{(B + b)\\cdot c}{2}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Al ser el lado c perpendicular a las bases, la altura h del trapecio es exactamente c, el lado vertical. No es necesario calcularla por separado.",
        },
        {
          tipo: "formula",
          math: "h = c \\implies A = \\dfrac{(B+b)c}{2}",
        },
      ],
    },
    {
      id: "te1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Trapecios · Ejercicio 1 / 3",
          enunciado: "Un trapecio tiene bases de 12 cm y 8 cm, y altura de 5 cm. ¿Cuál es su área?",
          opciones: ["40 cm²", "50 cm²", "60 cm²"],
          correcta: 1,
          explicacion: "Área = (B+b)·h/2 = (12+8)·5/2 = 20·5/2 = 50 cm².",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "te1-area",
        },
      ],
    },
    {
      id: "te2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Trapecios · Ejercicio 2 / 3",
          enunciado: "Un trapecio tiene bases de 14 cm y 6 cm. ¿Cuánto mide su mediana?",
          opciones: ["8 cm", "10 cm", "20 cm"],
          correcta: 1,
          explicacion: "La mediana m = (B+b)/2 = (14+6)/2 = 20/2 = 10 cm.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "te2-mediana",
        },
      ],
    },
    {
      id: "te3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Trapecios · Ejercicio 3 / 3",
          enunciado: "En un trapecio isósceles, ∠A = 65°. ¿Cuánto miden ∠B y ∠D?",
          opciones: ["∠B = 65°, ∠D = 115°", "∠B = 65°, ∠D = 250°", "∠B = 115°, ∠D = 115°"],
          correcta: 0,
          explicacion: "En el trapecio isósceles los ángulos de la misma base son iguales: ∠B = ∠A = 65°. Los ángulos de la otra base son suplementarios a los de la base mayor: ∠D = 180°−65° = 115°.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "te3-iso",
        },
      ],
    },
    {
      id: 18,
      tipo: "lienzo",
      titulo: "Polígono Regular",
      bloques: [
        {
          tipo: "definicion",
          termino: "Polígono Regular",
          texto: "",
        },
        {
          tipo: "figura",
          clave: "poligono-regular-def",
        },
        {
          tipo: "lista",
          items: [
            {
              texto: "① Todos los lados iguales (equilátero)",
              math: "l_1 = l_2 = \\cdots = l_n = l",
            },
            {
              texto: "② Todos los ángulos iguales (equiángulo)",
              math: "\\alpha = \\dfrac{(n-2) \\cdot 180^\\circ}{n}",
            },
          ],
        },
      ],
    },
    {
      id: 19,
      tipo: "lienzo",
      etiqueta: "Fórmula general para n lados",
      titulo: "Ángulo Interior",
      bloques: [
        {
          tipo: "formula",
          math: "\\alpha = \\dfrac{(n-2)\\cdot 180^\\circ}{n}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "angulo-interior-formula",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "n = 3:\\; 60^\\circ",
              texto: "triángulo equilátero",
            },
            {
              math: "n = 4:\\; 90^\\circ",
              texto: "cuadrado",
            },
            {
              math: "n = 6:\\; 120^\\circ",
              texto: "hexágono regular",
            },
            {
              math: "n = 8:\\; 135^\\circ",
              texto: "octágono regular",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "La suma de todos los ángulos interiores es siempre (n−2)·180°.",
        },
      ],
    },
    {
      id: 20,
      tipo: "lienzo",
      etiqueta: "Complemento del ángulo interior",
      titulo: "Ángulo Exterior",
      bloques: [
        {
          tipo: "formula",
          math: "\\beta = \\dfrac{360^\\circ}{n}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "angulo-exterior-formula",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\alpha + \\beta = 180^\\circ",
              texto: "ángulo interior + exterior = llano",
            },
            {
              math: "n = 4:\\; 90^\\circ",
              texto: "cuadrado",
            },
            {
              math: "n = 6:\\; 60^\\circ",
              texto: "hexágono regular",
            },
            {
              math: "n = 8:\\; 45^\\circ",
              texto: "octágono regular",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "La suma de todos los ángulos exteriores de cualquier polígono convexo es siempre 360°.",
        },
      ],
    },
    {
      id: 21,
      tipo: "lienzo",
      etiqueta: "De triángulo a hexágono",
      titulo: "Polígonos Regulares",
      bloques: [
        {
          tipo: "lista",
          estilo: "numerada",
          items: [
            {
              sigla: "TRI",
              nombre: "Triángulo (n = 3)",
              desc: "α = 60°  ·  β = 120°  ·  Σ = 180°",
            },
            {
              sigla: "CUA",
              nombre: "Cuadrado (n = 4)",
              desc: "α = 90°  ·  β = 90°  ·  Σ = 360°",
            },
            {
              sigla: "PEN",
              nombre: "Pentágono (n = 5)",
              desc: "α = 108°  ·  β = 72°  ·  Σ = 540°",
            },
            {
              sigla: "HEX",
              nombre: "Hexágono (n = 6)",
              desc: "α = 120°  ·  β = 60°  ·  Σ = 720°",
            },
          ],
        },
      ],
    },
    {
      id: "21b",
      tipo: "lienzo",
      etiqueta: "Heptágono y octágono",
      titulo: "Polígonos Regulares",
      bloques: [
        {
          tipo: "lista",
          estilo: "numerada",
          items: [
            {
              sigla: "HEP",
              nombre: "Heptágono (n = 7)",
              desc: "α ≈ 128.6°  ·  β ≈ 51.4°  ·  Σ = 900°",
            },
            {
              sigla: "OCT",
              nombre: "Octágono (n = 8)",
              desc: "α = 135°  ·  β = 45°  ·  Σ = 1 080°",
            },
          ],
        },
      ],
    },
    {
      id: "poe1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Polígonos · Ejercicio 1 / 3",
          enunciado: "¿Cuál es el ángulo interior de un hexágono regular?",
          opciones: ["108°", "120°", "135°"],
          correcta: 1,
          explicacion: "α = (n−2)·180°/n = (6−2)·180°/6 = 4·180°/6 = 720°/6 = 120°.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "poe1-hex",
        },
      ],
    },
    {
      id: "poe2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Polígonos · Ejercicio 2 / 3",
          enunciado: "Un polígono regular tiene ángulo exterior de 45°. ¿Cuántos lados tiene?",
          opciones: ["6 lados", "8 lados", "10 lados"],
          correcta: 1,
          explicacion: "β = 360°/n → n = 360°/45° = 8 lados. Es un octágono regular.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "poe2-angext",
        },
      ],
    },
    {
      id: "poe3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Polígonos · Ejercicio 3 / 3",
          enunciado: "¿Cuánto suman los ángulos interiores de un octágono?",
          opciones: ["900°", "1 080°", "1 260°"],
          correcta: 1,
          explicacion: "Suma = (n−2)·180° = (8−2)·180° = 6·180° = 1 080°.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "poe3-suma",
        },
      ],
    },
    {
      id: 27,
      tipo: "lienzo",
      etiqueta: "Lo que aprendimos hoy",
      titulo: "Resumen",
      bloques: [
        {
          tipo: "lista",
          items: [
            {
              titulo: "Paralelogramo",
              texto: "lados opuestos paralelos e iguales; diagonales se bisectan",
            },
            {
              math: "A_{\\square} = b \\cdot h",
              texto: "área del paralelogramo (y sus variantes romboide, rectángulo, rombo, cuadrado)",
            },
            {
              math: "d_{\\text{rect.}} = \\sqrt{b^2+h^2},\\; A_{\\text{rombo}} = \\dfrac{d_1 d_2}{2},\\; A_{\\text{cuad.}} = l^2",
              texto: "fórmulas de rectángulo, rombo y cuadrado",
            },
            {
              titulo: "Trapecio",
              texto: "un par de lados paralelos (bases B y b); tres tipos: escaleno, isósceles, rectángulo",
            },
            {
              math: "A_{\\text{trap.}} = \\dfrac{(B+b)\\cdot h}{2},\\quad m = \\dfrac{B+b}{2}",
              texto: "área y mediana del trapecio",
            },
            {
              math: "\\alpha = \\dfrac{(n-2)\\cdot 180^\\circ}{n},\\quad \\beta = \\dfrac{360^\\circ}{n}",
              texto: "ángulos interior y exterior de un polígono regular de n lados",
            },
          ],
        },
      ],
    },
  ],
};
