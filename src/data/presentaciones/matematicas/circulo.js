// Datos de la presentación: El Círculo

export const PRESENTACION = {
  id: "circulo",
  titulo: "El Círculo",
  materia: "Matemáticas",
  examenes: ["EXANI-I"],
  subtema: "Geometría",
  slides: [
    {
      id: 0,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "portada",
          kicker: "Geometría · Preparatoria",
          titulo: "El Círculo",
          subtitulo: "Propiedades, sectores, segmentos y áreas sombreadas",
          figura: "euler-line",
        },
      ],
    },
    {
      id: 1,
      tipo: "lienzo",
      titulo: "El Círculo",
      bloques: [
        {
          tipo: "definicion",
          termino: "El Círculo",
          texto: "",
        },
        {
          tipo: "figura",
          clave: "circulo-partes",
        },
        {
          tipo: "lista",
          items: [
            {
              texto: "Perímetro de la circunferencia",
              math: "P = 2\\pi r = \\pi D",
            },
            {
              texto: "Área del círculo",
              math: "A = \\pi r^2",
            },
            {
              texto: "Definición de π — razón perímetro / diámetro",
              math: "\\pi = \\dfrac{P}{D}",
              destacado: true,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      tipo: "lienzo",
      etiqueta: "Terminología esencial",
      titulo: "Partes del Círculo",
      bloques: [
        {
          tipo: "formula",
          math: "D = 2r",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "circulo-partes",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "r",
              texto: "Radio: del centro a cualquier punto de la circunferencia",
            },
            {
              math: "D = 2r",
              texto: "Diámetro: cuerda que pasa por el centro",
            },
            {
              math: "\\widehat{AB}",
              texto: "Arco: porción de circunferencia entre dos puntos",
            },
            {
              math: "\\overline{AB}",
              texto: "Cuerda: segmento que une dos puntos del círculo",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "La tangente toca el círculo en exactamente un punto; la secante lo corta en dos puntos.",
        },
      ],
    },
    {
      id: 3,
      tipo: "lienzo",
      etiqueta: "Las dos fórmulas clave",
      titulo: "Circunferencia y Área",
      bloques: [
        {
          tipo: "formula",
          math: "A = \\pi r^2",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "circulo-formulas",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "P = 2\\pi r = \\pi D",
              texto: "perímetro (longitud de la circunferencia)",
            },
            {
              math: "A = \\pi r^2",
              texto: "área encerrada por el círculo",
            },
            {
              math: "\\pi \\approx 3.1416",
              texto: "número irracional = razón perímetro/diámetro",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "De P se obtiene r = P/(2π); de ahí puedes calcular el área sin necesidad de medir el radio directamente.",
        },
      ],
    },
    {
      id: "ap-intro",
      tipo: "lienzo",
      etiqueta: "De una fórmula a la otra",
      titulo: "Relaciones entre A y P",
      bloques: [
        {
          tipo: "formula",
          math: "P^2 = 4\\pi A",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "circulo-formulas",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              texto: "Radio a partir del perímetro",
              pasos: ["P = 2\\pi r", "r = \\dfrac{P}{2\\pi}"],
            },
            {
              texto: "Radio a partir del área",
              pasos: ["A = \\pi r^2", "r^2 = \\dfrac{A}{\\pi}", "r = \\sqrt{\\dfrac{A}{\\pi}}"],
            },
            {
              texto: "Perímetro directo desde el área",
              pasos: [
                "P = 2\\pi r",
                "r = \\sqrt{\\dfrac{A}{\\pi}}",
                "P = 2\\pi\\sqrt{\\dfrac{A}{\\pi}} = 2\\sqrt{\\pi A}",
              ],
            },
          ],
        },
        {
          tipo: "nota",
          texto: "La relación P² = 4πA permite convertir entre perímetro y área sin calcular el radio. Se deduce combinando P = 2πr y A = πr².",
        },
      ],
    },
    {
      id: "ej-ap1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Ejemplo 1 — Dado el radio",
          enunciado: "Un círculo tiene radio r = 10 cm. ¿Cuáles son su área A y su perímetro P?",
          opciones: [
            "A = 10\\pi\\text{ cm}^2,\\; P = 100\\pi\\text{ cm}",
            "A = 100\\pi\\text{ cm}^2,\\; P = 20\\pi\\text{ cm}",
            "A = 100\\pi\\text{ cm}^2,\\; P = 10\\pi\\text{ cm}",
          ],
          correcta: 1,
          explicacion: "Con r = 10 cm: A = πr² = π(10)² = 100π cm² y P = 2πr = 2π(10) = 20π cm. Error frecuente: usar r en lugar de 2r en la fórmula del perímetro.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "circulo-partes",
        },
      ],
    },
    {
      id: "ej-ap2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Ejemplo 2 — Dado el área, hallar P",
          enunciado: "Un círculo tiene área A = 64π cm². ¿Cuánto mide su perímetro P?",
          opciones: ["P = 8\\pi\\text{ cm}", "P = 16\\pi\\text{ cm}", "P = 64\\pi\\text{ cm}"],
          correcta: 1,
          explicacion: "Método directo: P = 2√(πA) = 2√(π·64π) = 2√(64π²) = 2·8π = 16π cm. Método por r: r = √(A/π) = √64 = 8 cm → P = 2π(8) = 16π cm.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "circulo-formulas",
        },
      ],
    },
    {
      id: "ap1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Reactivo 1 / 10 — Dado r",
          enunciado: "¿Cuáles son el área y el perímetro de un círculo con radio r = 6 cm?",
          opciones: [
            "A = 36\\pi\\text{ cm}^2,\\; P = 6\\pi\\text{ cm}",
            "A = 36\\pi\\text{ cm}^2,\\; P = 12\\pi\\text{ cm}",
            "A = 12\\pi\\text{ cm}^2,\\; P = 36\\pi\\text{ cm}",
          ],
          correcta: 1,
          explicacion: "A = πr² = π(6)² = 36π cm² y P = 2πr = 2π(6) = 12π cm. La opción A omite el factor 2 en el perímetro; la C invierte las fórmulas.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "circulo-partes",
        },
      ],
    },
    {
      id: "ap2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Reactivo 2 / 10 — Dado D",
          enunciado: "Un círculo tiene diámetro D = 14 cm. ¿Cuáles son su área A y su perímetro P?",
          opciones: [
            "A = 49\\pi\\text{ cm}^2,\\; P = 14\\pi\\text{ cm}",
            "A = 196\\pi\\text{ cm}^2,\\; P = 28\\pi\\text{ cm}",
            "A = 49\\pi\\text{ cm}^2,\\; P = 7\\pi\\text{ cm}",
          ],
          correcta: 0,
          explicacion: "r = D/2 = 7 cm. Entonces A = π(7)² = 49π cm² y P = 2π(7) = 14π cm. La opción B usa D = 14 como si fuera el radio; la C divide el perímetro a la mitad.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "circulo-partes",
        },
      ],
    },
    {
      id: "ap3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Reactivo 3 / 10 — Dado A, hallar P",
          enunciado: "El área de un círculo es A = 36π cm². ¿Cuánto mide su perímetro P?",
          opciones: ["P = 6\\pi\\text{ cm}", "P = 12\\pi\\text{ cm}", "P = 36\\pi\\text{ cm}"],
          correcta: 1,
          explicacion: "r = √(36π/π) = √36 = 6 cm → P = 2π(6) = 12π cm. Error habitual: confundir r con 2r y escribir P = 6π (opción A), o copiar directamente A = 36π como P (opción C).",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "circulo-formulas",
        },
      ],
    },
    {
      id: "ap4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Reactivo 4 / 10 — Dado P, hallar A",
          enunciado: "El perímetro de un círculo es P = 10π cm. ¿Cuánto mide su área A?",
          opciones: ["A = 100\\pi\\text{ cm}^2", "A = 10\\pi\\text{ cm}^2", "A = 25\\pi\\text{ cm}^2"],
          correcta: 2,
          explicacion: "r = P/(2π) = 10π/(2π) = 5 cm → A = π(5)² = 25π cm². La opción A usa incorrectamente r = 10 (sin dividir entre 2π); la B confunde P con A.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "circulo-formulas",
        },
      ],
    },
    {
      id: "ap5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Reactivo 5 / 10 — Dado A, hallar r y D",
          enunciado: "Un círculo tiene área A = 100π cm². ¿Cuáles son su radio r y su diámetro D?",
          opciones: [
            "r = 100\\text{ cm},\\; D = 200\\text{ cm}",
            "r = 10\\text{ cm},\\; D = 20\\text{ cm}",
            "r = 10\\pi\\text{ cm},\\; D = 20\\pi\\text{ cm}",
          ],
          correcta: 1,
          explicacion: "r = √(A/π) = √(100π/π) = √100 = 10 cm; D = 2r = 20 cm. La opción A olvida aplicar la raíz cuadrada; la C añade incorrectamente un factor π al resultado.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "circulo-partes",
        },
      ],
    },
    {
      id: "ap6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Reactivo 6 / 10 — Dado P, hallar r",
          enunciado: "El perímetro de un círculo es P = 24π cm. ¿Cuánto mide su radio r?",
          opciones: ["r = 24\\text{ cm}", "r = 12\\pi\\text{ cm}", "r = 12\\text{ cm}"],
          correcta: 2,
          explicacion: "r = P/(2π) = 24π/(2π) = 12 cm. La opción A olvida dividir entre 2π y toma el coeficiente numérico; la B conserva incorrectamente el factor π.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "circulo-formulas",
        },
      ],
    },
    {
      id: "ap7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Reactivo 7 / 10 — Caso r = 1",
          enunciado: "Para un círculo con radio unitario r = 1, ¿cuánto valen su área A y su perímetro P?",
          opciones: ["A = 1,\\; P = 2", "A = 2\\pi,\\; P = \\pi", "A = \\pi,\\; P = 2\\pi"],
          correcta: 2,
          explicacion: "Con r = 1: A = π(1)² = π y P = 2π(1) = 2π. El círculo unitario 'destila' el número π: su área es exactamente π y su perímetro es exactamente 2π. La opción A omite el factor π; la B invierte las fórmulas.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "circulo-partes",
        },
      ],
    },
    {
      id: "ap8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Reactivo 8 / 10 — Caso A = π",
          enunciado: "Si el área de un círculo es exactamente A = π cm², ¿cuánto mide su perímetro P?",
          opciones: ["P = \\pi\\text{ cm}", "P = 2\\pi\\text{ cm}", "P = 2\\text{ cm}"],
          correcta: 1,
          explicacion: "r = √(π/π) = √1 = 1 cm → P = 2π(1) = 2π cm. Cuando A = π, el radio es exactamente 1 (círculo unitario), cuyo perímetro es 2π. La opción C olvida el factor π.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "circulo-formulas",
        },
      ],
    },
    {
      id: "ap9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Reactivo 9 / 10 — Caso A = 1",
          enunciado: "Si el área de un círculo es exactamente A = 1 cm², ¿cuánto mide su perímetro P?",
          opciones: ["P = 2\\pi\\text{ cm}", "P = 2\\sqrt{\\pi}\\text{ cm}", "P = \\sqrt{\\pi}\\text{ cm}"],
          correcta: 1,
          explicacion: "r = √(1/π) = 1/√π cm → P = 2π/√π = 2π · π^{−1/2} = 2π^{1/2} = 2√π cm ≈ 3.545 cm. Usando la fórmula directa: P = 2√(πA) = 2√(π·1) = 2√π cm.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "circulo-formulas",
        },
      ],
    },
    {
      id: "ap10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Reactivo 10 / 10 — Caso P = 1",
          enunciado: "Si el perímetro de un círculo es exactamente P = 1 cm, ¿cuánto vale su área A?",
          opciones: [
            "A = \\dfrac{1}{2\\pi}\\text{ cm}^2",
            "A = \\pi\\text{ cm}^2",
            "A = \\dfrac{1}{4\\pi}\\text{ cm}^2",
          ],
          correcta: 2,
          explicacion: "r = P/(2π) = 1/(2π) cm → A = πr² = π·1/(4π²) = 1/(4π) cm² ≈ 0.0796 cm². La opción A da el radio, no el área; la B usa P = 1 como si fuera el radio unitario.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "circulo-formulas",
        },
      ],
    },
    {
      id: 4,
      tipo: "lienzo",
      etiqueta: "Una fracción del área total",
      titulo: "Área de una Porción del Círculo",
      bloques: [
        {
          tipo: "formula",
          math: "A_{\\text{porción}} = \\text{fracción} \\times \\pi r^2",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "porciones-circulo",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\dfrac{1}{2}\\,\\pi r^2",
              texto: "la mitad del círculo",
            },
            {
              math: "\\dfrac{1}{4}\\,\\pi r^2",
              texto: "una cuarta parte",
            },
            {
              math: "\\dfrac{3}{4}\\,\\pi r^2",
              texto: "tres cuartas partes",
            },
            {
              math: "\\dfrac{1}{8}\\,\\pi r^2",
              texto: "un octavo",
            },
            {
              math: "\\dfrac{1}{12}\\,\\pi r^2",
              texto: "un doceavo",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Para las porciones comunes no necesitas la fórmula del sector con ángulos: basta calcular el área total πr² y tomar la fracción que indique el dibujo.",
        },
      ],
    },
    {
      id: "ti-teorema",
      tipo: "lienzo",
      etiqueta: "Teorema del ángulo inscrito",
      titulo: "Triángulo Inscrito en una Circunferencia",
      bloques: [
        {
          tipo: "destacado",
          texto: "En un triángulo inscrito los tres vértices están sobre la circunferencia y sus lados son cuerdas. Un ángulo inscrito (con vértice en la circunferencia) mide la mitad del ángulo central que abarca el mismo arco.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "angulo-inscrito",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "\\angle_{\\text{inscrito}} = \\dfrac{1}{2}\\,\\angle_{\\text{central}}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Ambos ángulos «ven» el mismo arco AC: el central lo abarca completo y el inscrito con la mitad de abertura. El caso estrella es el Teorema de Tales (lado = diámetro ⇒ ángulo recto). Demostración: con AC diámetro, el centro O queda sobre AC; al trazar el radio OB se forman dos triángulos isósceles, pues OA = OB = OC = r. Entonces ∠OAB = ∠OBA = α y ∠OBC = ∠OCB = β, así que el ángulo en B es α + β. Como los tres ángulos de ABC suman 180°, resulta 2α + 2β = 180°.",
        },
        {
          tipo: "formula",
          math: "2\\alpha + 2\\beta = 180^\\circ \\;\\Rightarrow\\; \\angle B = \\alpha + \\beta = 90^\\circ",
        },
      ],
    },
    {
      id: "ti-casos",
      tipo: "lienzo",
      etiqueta: "Según dónde quede el centro O",
      titulo: "Ángulo Inscrito: Todos los Casos",
      bloques: [
        {
          tipo: "lista",
          estilo: "numerada",
          items: [
            {
              sigla: "DIA",
              nombre: "Un lado es diámetro (Tales)",
              desc: "El centro O cae sobre un lado. El ángulo inscrito opuesto al diámetro mide exactamente 90°.",
            },
            {
              sigla: "DEN",
              nombre: "El centro queda dentro",
              desc: "Los dos lados del ángulo encierran al centro O. El inscrito vale la mitad del ángulo central.",
            },
            {
              sigla: "FUE",
              nombre: "El centro queda fuera",
              desc: "Los dos lados dejan al centro O del mismo lado. El inscrito sigue valiendo la mitad del central.",
            },
          ],
        },
      ],
    },
    {
      id: "ti1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Triángulo inscrito · Ejercicio 1 / 3",
          enunciado: "Un triángulo está inscrito en una circunferencia y uno de sus lados es el diámetro. Si uno de sus ángulos agudos mide 35°, ¿cuánto mide el tercer ángulo?",
          opciones: ["45°", "55°", "65°"],
          correcta: 1,
          explicacion: "Por Tales, el ángulo opuesto al diámetro es 90°. Entonces 35° + 90° + γ = 180°, así que γ = 55°.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ti-ej1",
        },
      ],
    },
    {
      id: "ti2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Triángulo inscrito · Ejercicio 2 / 3",
          enunciado: "Un ángulo inscrito y un ángulo central abarcan el mismo arco. Si el ángulo central mide 80°, ¿cuánto mide el ángulo inscrito?",
          opciones: ["20°", "40°", "160°"],
          correcta: 1,
          explicacion: "El ángulo inscrito es la mitad del central que abarca el mismo arco: 80° ÷ 2 = 40°.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ti-ej2",
        },
      ],
    },
    {
      id: "ti3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Triángulo inscrito · Ejercicio 3 / 3",
          enunciado: "Un triángulo rectángulo de catetos 6 cm y 8 cm está inscrito en una circunferencia, con su hipotenusa como diámetro. ¿Cuánto mide el radio de la circunferencia?",
          opciones: ["4 cm", "5 cm", "10 cm"],
          correcta: 1,
          explicacion: "La hipotenusa es el diámetro. Por Pitágoras mide √(6²+8²) = 10 cm, así que el radio es 10 ÷ 2 = 5 cm.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ti-ej3",
        },
      ],
    },
    {
      id: 20,
      tipo: "lienzo",
      etiqueta: "Estrategia general",
      titulo: "Áreas Sombreadas",
      bloques: [
        {
          tipo: "formula",
          math: "A_{\\text{sombreada}} = A_{\\text{grande}} - A_{\\text{interior}}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "areas-estrategia",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "A_\\text{total} - A_\\text{interior}",
              texto: "restar: región grande menos la parte no sombreada",
            },
            {
              math: "A_1 + A_2 + \\cdots",
              texto: "sumar: cuando la región es unión de partes conocidas",
            },
            {
              math: "A_{\\text{sector}} - A_{\\triangle}",
              texto: "combinación: sector menos triángulo = segmento circular",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Identifica todas las figuras involucradas, escribe sus fórmulas y luego opera. El truco es siempre saber QUÉ estás sumando y QUÉ estás restando.",
        },
      ],
    },
    {
      id: "as1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Áreas sombreadas · Ejercicio 1 / 8",
          enunciado: "Un cuadrado de lado 14 cm tiene un círculo inscrito. ¿Cuál es el área total de las cuatro esquinas sombreadas?",
          opciones: ["196 − 49π cm²", "49π − 196 cm²", "196 − 14π cm²"],
          correcta: 0,
          explicacion: "Área esquinas = Área cuadrado − Área círculo = 14² − π(7)² = 196 − 49π cm².",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "as1-cuad-circ",
        },
      ],
    },
    {
      id: "as2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Áreas sombreadas · Ejercicio 2 / 8",
          enunciado: "Una corona circular tiene radio exterior R = 10 cm y radio interior r = 6 cm. ¿Cuál es su área?",
          opciones: ["16π cm²", "64π cm²", "100π cm²"],
          correcta: 1,
          explicacion: "A_corona = π(R² − r²) = π(100 − 36) = 64π cm².",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "as2-corona",
        },
      ],
    },
    {
      id: "as3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Áreas sombreadas · Ejercicio 3 / 8",
          enunciado: "A un rectángulo de 16 cm × 6 cm se le recorta un semicírculo en cada lado corto (los extremos de 6 cm), con el diámetro apoyado sobre ese lado. ¿Cuál es el área de la región sombreada que queda?",
          opciones: ["96 − 9π cm²", "96 − 18π cm²", "96 − 36π cm²"],
          correcta: 0,
          explicacion: "Los dos semicírculos forman un círculo completo de r = 3. A = 16·6 − π(3)² = 96 − 9π cm².",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "as3-semi-rect",
        },
      ],
    },
    {
      id: "as4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Áreas sombreadas · Ejercicio 4 / 8",
          enunciado: "En un sector circular de radio 6 cm y ángulo 90°, se sombrea solo el segmento circular (entre la cuerda y el arco). ¿Cuál es su área?",
          opciones: ["9π − 18 cm²", "36π − 18 cm²", "9π cm²"],
          correcta: 0,
          explicacion: "A_seg = A_sector − A_triángulo = (1/4)π·36 − ½·6·6 = 9π − 18 cm².",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "as4-sector-tri",
        },
      ],
    },
    {
      id: "as5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Áreas sombreadas · Ejercicio 5 / 8",
          enunciado: "Un trapecio isósceles tiene bases B = 10 cm, b = 4 cm y altura h = 8 cm. Sobre la base mayor se construye exteriormente un semicírculo. ¿Cuál es el área total sombreada?",
          opciones: ["56 + 12.5π cm²", "56 + 25π cm²", "112 + 12.5π cm²"],
          correcta: 0,
          explicacion: "A_trap = (B+b)·h/2 = 14·8/2 = 56 cm². A_semi = π(B/2)²/2 = π(5)²/2 = 12.5π cm². Total = 56 + 12.5π cm².",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "as5-trap-semi",
        },
      ],
    },
    {
      id: "as6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Áreas sombreadas · Ejercicio 6 / 8",
          enunciado: "Un hexágono regular de lado 6 cm está inscrito en un círculo. ¿Cuál es el área de la región entre el hexágono y el círculo?",
          opciones: ["36π − 54√3 cm²", "36π − 108 cm²", "36π − 27√3 cm²"],
          correcta: 0,
          explicacion: "En el hexágono regular, el radio circunscrito es igual al lado: r = 6 cm. A_círculo = 36π. A_hexágono = (3√3/2)·36 = 54√3. A_sombreada = 36π − 54√3 cm².",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "as6-hex-circ",
        },
      ],
    },
    {
      id: "as7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Áreas sombreadas · Ejercicio 7 / 8",
          enunciado: "Un triángulo rectángulo de catetos 6 cm y 8 cm tiene un semicírculo construido exteriormente sobre la hipotenusa. ¿Cuál es el área total del conjunto sombreado?",
          opciones: ["24 + 12.5π cm²", "48 + 25π cm²", "24 + 25π cm²"],
          correcta: 0,
          explicacion: "c = √(36+64) = 10 cm. A_triángulo = ½·6·8 = 24 cm². Semicírculo r=5: A = π(5)²/2 = 12.5π. Total = 24 + 12.5π cm².",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "as7-tri-circ",
        },
      ],
    },
    {
      id: "as8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Áreas sombreadas · Ejercicio 8 / 8",
          enunciado: "Figura compuesta: un rectángulo 12 × 8 cm más una semicircunferencia adosada a uno de sus lados cortos (su diámetro coincide con ese lado de 8 cm, así que el radio es 4 cm), menos un triángulo interior de base 12 cm y altura 5 cm. ¿Cuál es el área total sombreada?",
          opciones: ["66 + 8π cm²", "66 + 16π cm²", "96 + 8π cm²"],
          correcta: 0,
          explicacion: "A_rect = 96. Semicírculo (diámetro = lado de 8 ⇒ r = 4): A = ½π(4)² = 8π. A_triángulo = ½·12·5 = 30. Total = 96 + 8π − 30 = 66 + 8π cm².",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "as8-complejo",
        },
      ],
    },
    {
      id: 30,
      tipo: "lienzo",
      etiqueta: "Lo que aprendimos hoy",
      titulo: "Resumen",
      bloques: [
        {
          tipo: "lista",
          items: [
            {
              math: "P = 2\\pi r,\\quad A = \\pi r^2",
              texto: "perímetro (circunferencia) y área del círculo",
            },
            {
              math: "l = \\dfrac{\\theta}{360^\\circ}\\cdot 2\\pi r,\\quad A_{\\text{sector}} = \\dfrac{\\theta}{360^\\circ}\\pi r^2",
              texto: "longitud de arco y área de sector",
            },
            {
              math: "A_{\\text{seg}} = A_{\\text{sector}} - \\tfrac{1}{2}r^2\\sin\\theta",
              texto: "área del segmento circular (sector − triángulo)",
            },
            {
              math: "A_{\\text{corona}} = \\pi(R^2 - r^2)",
              texto: "área del anillo o corona circular",
            },
            {
              titulo: "Tangentes desde P exterior",
              texto: "PA = PB = √(PO² − r²)",
            },
            {
              titulo: "Áreas sombreadas",
              texto: "identifica figuras → sumar partes + restar lo que falta",
            },
          ],
        },
      ],
    },
  ],
};
