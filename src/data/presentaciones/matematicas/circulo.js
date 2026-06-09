// Datos de la presentación: El Círculo

export const PRESENTACION = {
  id: "circulo",
  titulo: "El Círculo",
  materia: "Matemáticas",
  subtema: "Geometría",
  slides: [

    // ── PORTADA ───────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "El Círculo",
      subtitulo: "Propiedades, sectores, segmentos y áreas sombreadas",
      etiqueta: "Geometría · Preparatoria",
      svgDiagram: "euler-line",
    },

    // ── DEFINICIÓN ────────────────────────────────────────────────────────────

    {
      id: 1,
      tipo: "definicion",
      titulo: "El Círculo",
      simbolo: "d(O,\\,P) = r",
      cuerpo: "La circunferencia es el conjunto de todos los puntos del plano que equidistan de un punto fijo llamado centro O. Esa distancia constante r se llama radio. El círculo es la región plana interior a la circunferencia.",
      svgDiagram: "circulo-partes",
      condiciones: [
        {
          texto: "Perímetro de la circunferencia",
          math: "P = 2\\pi r = \\pi D"
        },
        {
          texto: "Área del círculo",
          math: "A = \\pi r^2"
        },
        {
          texto: "Definición de π — razón perímetro / diámetro",
          math: "\\pi = \\dfrac{P}{D}",
          destacado: true
        }
      ]
    },

    // ── PARTES DEL CÍRCULO ────────────────────────────────────────────────────

    {
      id: 2,
      tipo: "concepto",
      titulo: "Partes del Círculo",
      etiqueta: "Terminología esencial",
      formula: "D = 2r",
      svgDiagram: "circulo-partes",
      items: [
        { math: "r", texto: "Radio: del centro a cualquier punto de la circunferencia" },
        { math: "D = 2r", texto: "Diámetro: cuerda que pasa por el centro" },
        { math: "\\widehat{AB}", texto: "Arco: porción de circunferencia entre dos puntos" },
        { math: "\\overline{AB}", texto: "Cuerda: segmento que une dos puntos del círculo" }
      ],
      nota: "La tangente toca el círculo en exactamente un punto; la secante lo corta en dos puntos."
    },

    // ── CIRCUNFERENCIA Y ÁREA ─────────────────────────────────────────────────

    {
      id: 3,
      tipo: "concepto",
      titulo: "Circunferencia y Área",
      etiqueta: "Las dos fórmulas clave",
      formula: "A = \\pi r^2",
      svgDiagram: "circulo-formulas",
      items: [
        { math: "P = 2\\pi r = \\pi D", texto: "perímetro (longitud de la circunferencia)" },
        { math: "A = \\pi r^2", texto: "área encerrada por el círculo" },
        { math: "\\pi \\approx 3.1416", texto: "número irracional = razón perímetro/diámetro" }
      ],
      nota: "De P se obtiene r = P/(2π); de ahí puedes calcular el área sin necesidad de medir el radio directamente."
    },

    // ── RELACIONES ÁREA ↔ PERÍMETRO ──────────────────────────────────────────

    {
      id: "ap-intro",
      tipo: "concepto",
      titulo: "Relaciones entre A y P",
      etiqueta: "De una fórmula a la otra",
      formula: "P^2 = 4\\pi A",
      svgDiagram: "circulo-formulas",
      items: [
        {
          texto: "Radio a partir del perímetro",
          pasos: ["P = 2\\pi r", "r = \\dfrac{P}{2\\pi}"]
        },
        {
          texto: "Radio a partir del área",
          pasos: ["A = \\pi r^2", "r^2 = \\dfrac{A}{\\pi}", "r = \\sqrt{\\dfrac{A}{\\pi}}"]
        },
        {
          texto: "Perímetro directo desde el área",
          pasos: ["P = 2\\pi r", "r = \\sqrt{\\dfrac{A}{\\pi}}", "P = 2\\pi\\sqrt{\\dfrac{A}{\\pi}} = 2\\sqrt{\\pi A}"]
        },
      ],
      nota: "La relación P² = 4πA permite convertir entre perímetro y área sin calcular el radio. Se deduce combinando P = 2πr y A = πr²."
    },

    // ── EJEMPLOS RESUELTOS ────────────────────────────────────────────────────

    {
      id: "ej-ap1",
      tipo: "ejercicio",
      svgDiagram: "circulo-partes",
      etiqueta: "Ejemplo 1 — Dado el radio",
      pregunta: "Un círculo tiene radio r = 10 cm. ¿Cuáles son su área A y su perímetro P?",
      math_pregunta: "r = 10\\text{ cm},\\quad A = ?\\;,\\quad P = ?",
      opciones: [
        "A = 10\\pi\\text{ cm}^2,\\; P = 100\\pi\\text{ cm}",
        "A = 100\\pi\\text{ cm}^2,\\; P = 20\\pi\\text{ cm}",
        "A = 100\\pi\\text{ cm}^2,\\; P = 10\\pi\\text{ cm}",
      ],
      correcta: 1,
      explicacion: "Con r = 10 cm: A = πr² = π(10)² = 100π cm² y P = 2πr = 2π(10) = 20π cm. Error frecuente: usar r en lugar de 2r en la fórmula del perímetro.",
      pasos: [
        { pre: "Área: ", math: "A = \\pi r^2 = \\pi(10)^2 = 100\\pi\\text{ cm}^2" },
        { pre: "Perímetro: ", math: "P = 2\\pi r = 2\\pi(10) = 20\\pi\\text{ cm}" },
      ]
    },

    {
      id: "ej-ap2",
      tipo: "ejercicio",
      svgDiagram: "circulo-formulas",
      etiqueta: "Ejemplo 2 — Dado el área, hallar P",
      pregunta: "Un círculo tiene área A = 64π cm². ¿Cuánto mide su perímetro P?",
      math_pregunta: "A = 64\\pi\\text{ cm}^2,\\quad P = ?",
      opciones: [
        "P = 8\\pi\\text{ cm}",
        "P = 16\\pi\\text{ cm}",
        "P = 64\\pi\\text{ cm}",
      ],
      correcta: 1,
      explicacion: "Método directo: P = 2√(πA) = 2√(π·64π) = 2√(64π²) = 2·8π = 16π cm. Método por r: r = √(A/π) = √64 = 8 cm → P = 2π(8) = 16π cm.",
      pasos: [
        { pre: "Despejar r: ", math: "r = \\sqrt{\\dfrac{A}{\\pi}} = \\sqrt{\\dfrac{64\\pi}{\\pi}} = \\sqrt{64} = 8\\text{ cm}" },
        { pre: "Perímetro: ", math: "P = 2\\pi r = 2\\pi(8) = 16\\pi\\text{ cm}" },
        { pre: "O directo: ", math: "P = 2\\sqrt{\\pi A} = 2\\sqrt{64\\pi^2} = 16\\pi\\text{ cm}" },
      ]
    },

    // ── PRÁCTICA: ÁREA Y PERÍMETRO (10 reactivos) ────────────────────────────

    {
      id: "ap1",
      tipo: "ejercicio",
      svgDiagram: "circulo-partes",
      etiqueta: "Reactivo 1 / 10 — Dado r",
      pregunta: "¿Cuáles son el área y el perímetro de un círculo con radio r = 6 cm?",
      math_pregunta: "r = 6\\text{ cm}",
      opciones: [
        "A = 36\\pi\\text{ cm}^2,\\; P = 6\\pi\\text{ cm}",
        "A = 36\\pi\\text{ cm}^2,\\; P = 12\\pi\\text{ cm}",
        "A = 12\\pi\\text{ cm}^2,\\; P = 36\\pi\\text{ cm}",
      ],
      correcta: 1,
      explicacion: "A = πr² = π(6)² = 36π cm² y P = 2πr = 2π(6) = 12π cm. La opción A omite el factor 2 en el perímetro; la C invierte las fórmulas.",
      pasos: [
        { pre: "Área: ", math: "A = \\pi(6)^2 = 36\\pi\\text{ cm}^2" },
        { pre: "Perímetro: ", math: "P = 2\\pi(6) = 12\\pi\\text{ cm}" },
      ]
    },

    {
      id: "ap2",
      tipo: "ejercicio",
      svgDiagram: "circulo-partes",
      etiqueta: "Reactivo 2 / 10 — Dado D",
      pregunta: "Un círculo tiene diámetro D = 14 cm. ¿Cuáles son su área A y su perímetro P?",
      math_pregunta: "D = 14\\text{ cm},\\quad r = D/2 = 7\\text{ cm}",
      opciones: [
        "A = 49\\pi\\text{ cm}^2,\\; P = 14\\pi\\text{ cm}",
        "A = 196\\pi\\text{ cm}^2,\\; P = 28\\pi\\text{ cm}",
        "A = 49\\pi\\text{ cm}^2,\\; P = 7\\pi\\text{ cm}",
      ],
      correcta: 0,
      explicacion: "r = D/2 = 7 cm. Entonces A = π(7)² = 49π cm² y P = 2π(7) = 14π cm. La opción B usa D = 14 como si fuera el radio; la C divide el perímetro a la mitad.",
      pasos: [
        { pre: "Radio: ", math: "r = D/2 = 14/2 = 7\\text{ cm}" },
        { pre: "Área: ", math: "A = \\pi(7)^2 = 49\\pi\\text{ cm}^2" },
        { pre: "Perímetro: ", math: "P = 2\\pi(7) = 14\\pi\\text{ cm}" },
      ]
    },

    {
      id: "ap3",
      tipo: "ejercicio",
      svgDiagram: "circulo-formulas",
      etiqueta: "Reactivo 3 / 10 — Dado A, hallar P",
      pregunta: "El área de un círculo es A = 36π cm². ¿Cuánto mide su perímetro P?",
      math_pregunta: "A = 36\\pi\\text{ cm}^2,\\quad P = ?",
      opciones: [
        "P = 6\\pi\\text{ cm}",
        "P = 12\\pi\\text{ cm}",
        "P = 36\\pi\\text{ cm}",
      ],
      correcta: 1,
      explicacion: "r = √(36π/π) = √36 = 6 cm → P = 2π(6) = 12π cm. Error habitual: confundir r con 2r y escribir P = 6π (opción A), o copiar directamente A = 36π como P (opción C).",
      pasos: [
        { pre: "Despejar r: ", math: "r = \\sqrt{A/\\pi} = \\sqrt{36} = 6\\text{ cm}" },
        { pre: "Perímetro: ", math: "P = 2\\pi(6) = 12\\pi\\text{ cm}" },
      ]
    },

    {
      id: "ap4",
      tipo: "ejercicio",
      svgDiagram: "circulo-formulas",
      etiqueta: "Reactivo 4 / 10 — Dado P, hallar A",
      pregunta: "El perímetro de un círculo es P = 10π cm. ¿Cuánto mide su área A?",
      math_pregunta: "P = 10\\pi\\text{ cm},\\quad A = ?",
      opciones: [
        "A = 100\\pi\\text{ cm}^2",
        "A = 10\\pi\\text{ cm}^2",
        "A = 25\\pi\\text{ cm}^2",
      ],
      correcta: 2,
      explicacion: "r = P/(2π) = 10π/(2π) = 5 cm → A = π(5)² = 25π cm². La opción A usa incorrectamente r = 10 (sin dividir entre 2π); la B confunde P con A.",
      pasos: [
        { pre: "Despejar r: ", math: "r = \\dfrac{P}{2\\pi} = \\dfrac{10\\pi}{2\\pi} = 5\\text{ cm}" },
        { pre: "Área: ", math: "A = \\pi(5)^2 = 25\\pi\\text{ cm}^2" },
      ]
    },

    {
      id: "ap5",
      tipo: "ejercicio",
      svgDiagram: "circulo-partes",
      etiqueta: "Reactivo 5 / 10 — Dado A, hallar r y D",
      pregunta: "Un círculo tiene área A = 100π cm². ¿Cuáles son su radio r y su diámetro D?",
      math_pregunta: "A = 100\\pi\\text{ cm}^2,\\quad r = ?\\;,\\quad D = ?",
      opciones: [
        "r = 100\\text{ cm},\\; D = 200\\text{ cm}",
        "r = 10\\text{ cm},\\; D = 20\\text{ cm}",
        "r = 10\\pi\\text{ cm},\\; D = 20\\pi\\text{ cm}",
      ],
      correcta: 1,
      explicacion: "r = √(A/π) = √(100π/π) = √100 = 10 cm; D = 2r = 20 cm. La opción A olvida aplicar la raíz cuadrada; la C añade incorrectamente un factor π al resultado.",
      pasos: [
        { pre: "Radio: ", math: "r = \\sqrt{\\dfrac{A}{\\pi}} = \\sqrt{100} = 10\\text{ cm}" },
        { pre: "Diámetro: ", math: "D = 2r = 20\\text{ cm}" },
      ]
    },

    {
      id: "ap6",
      tipo: "ejercicio",
      svgDiagram: "circulo-formulas",
      etiqueta: "Reactivo 6 / 10 — Dado P, hallar r",
      pregunta: "El perímetro de un círculo es P = 24π cm. ¿Cuánto mide su radio r?",
      math_pregunta: "P = 24\\pi\\text{ cm},\\quad r = ?",
      opciones: [
        "r = 24\\text{ cm}",
        "r = 12\\pi\\text{ cm}",
        "r = 12\\text{ cm}",
      ],
      correcta: 2,
      explicacion: "r = P/(2π) = 24π/(2π) = 12 cm. La opción A olvida dividir entre 2π y toma el coeficiente numérico; la B conserva incorrectamente el factor π.",
      pasos: [
        { pre: "Despejar r: ", math: "r = \\dfrac{P}{2\\pi} = \\dfrac{24\\pi}{2\\pi} = 12\\text{ cm}" },
      ]
    },

    {
      id: "ap7",
      tipo: "ejercicio",
      svgDiagram: "circulo-partes",
      etiqueta: "Reactivo 7 / 10 — Caso r = 1",
      pregunta: "Para un círculo con radio unitario r = 1, ¿cuánto valen su área A y su perímetro P?",
      math_pregunta: "r = 1",
      opciones: [
        "A = 1,\\; P = 2",
        "A = 2\\pi,\\; P = \\pi",
        "A = \\pi,\\; P = 2\\pi",
      ],
      correcta: 2,
      explicacion: "Con r = 1: A = π(1)² = π y P = 2π(1) = 2π. El círculo unitario 'destila' el número π: su área es exactamente π y su perímetro es exactamente 2π. La opción A omite el factor π; la B invierte las fórmulas.",
      pasos: [
        { pre: "Área: ", math: "A = \\pi(1)^2 = \\pi" },
        { pre: "Perímetro: ", math: "P = 2\\pi(1) = 2\\pi" },
      ]
    },

    {
      id: "ap8",
      tipo: "ejercicio",
      svgDiagram: "circulo-formulas",
      etiqueta: "Reactivo 8 / 10 — Caso A = π",
      pregunta: "Si el área de un círculo es exactamente A = π cm², ¿cuánto mide su perímetro P?",
      math_pregunta: "A = \\pi\\text{ cm}^2,\\quad P = ?",
      opciones: [
        "P = \\pi\\text{ cm}",
        "P = 2\\pi\\text{ cm}",
        "P = 2\\text{ cm}",
      ],
      correcta: 1,
      explicacion: "r = √(π/π) = √1 = 1 cm → P = 2π(1) = 2π cm. Cuando A = π, el radio es exactamente 1 (círculo unitario), cuyo perímetro es 2π. La opción C olvida el factor π.",
      pasos: [
        { pre: "Radio: ", math: "r = \\sqrt{\\dfrac{\\pi}{\\pi}} = \\sqrt{1} = 1\\text{ cm}" },
        { pre: "Perímetro: ", math: "P = 2\\pi(1) = 2\\pi\\text{ cm}" },
      ]
    },

    {
      id: "ap9",
      tipo: "ejercicio",
      svgDiagram: "circulo-formulas",
      etiqueta: "Reactivo 9 / 10 — Caso A = 1",
      pregunta: "Si el área de un círculo es exactamente A = 1 cm², ¿cuánto mide su perímetro P?",
      math_pregunta: "A = 1\\text{ cm}^2,\\quad P = ?",
      opciones: [
        "P = 2\\pi\\text{ cm}",
        "P = 2\\sqrt{\\pi}\\text{ cm}",
        "P = \\sqrt{\\pi}\\text{ cm}",
      ],
      correcta: 1,
      explicacion: "r = √(1/π) = 1/√π cm → P = 2π/√π = 2π · π^{−1/2} = 2π^{1/2} = 2√π cm ≈ 3.545 cm. Usando la fórmula directa: P = 2√(πA) = 2√(π·1) = 2√π cm.",
      pasos: [
        { pre: "Radio: ", math: "r = \\sqrt{\\dfrac{1}{\\pi}} = \\dfrac{1}{\\sqrt{\\pi}}\\text{ cm}" },
        { pre: "Perímetro: ", math: "P = 2\\pi r = \\dfrac{2\\pi}{\\sqrt{\\pi}} = 2\\sqrt{\\pi}\\text{ cm}" },
        { pre: "O directo: ", math: "P = 2\\sqrt{\\pi A} = 2\\sqrt{\\pi \\cdot 1} = 2\\sqrt{\\pi}\\text{ cm}" },
      ]
    },

    {
      id: "ap10",
      tipo: "ejercicio",
      svgDiagram: "circulo-formulas",
      etiqueta: "Reactivo 10 / 10 — Caso P = 1",
      pregunta: "Si el perímetro de un círculo es exactamente P = 1 cm, ¿cuánto vale su área A?",
      math_pregunta: "P = 1\\text{ cm},\\quad A = ?",
      opciones: [
        "A = \\dfrac{1}{2\\pi}\\text{ cm}^2",
        "A = \\pi\\text{ cm}^2",
        "A = \\dfrac{1}{4\\pi}\\text{ cm}^2",
      ],
      correcta: 2,
      explicacion: "r = P/(2π) = 1/(2π) cm → A = πr² = π·1/(4π²) = 1/(4π) cm² ≈ 0.0796 cm². La opción A da el radio, no el área; la B usa P = 1 como si fuera el radio unitario.",
      pasos: [
        { pre: "Radio: ", math: "r = \\dfrac{P}{2\\pi} = \\dfrac{1}{2\\pi}\\text{ cm}" },
        { pre: "Área: ", math: "A = \\pi r^2 = \\pi \\cdot \\dfrac{1}{4\\pi^2} = \\dfrac{1}{4\\pi}\\text{ cm}^2" },
      ]
    },

    // ── ÁREA DE UNA PORCIÓN DEL CÍRCULO ───────────────────────────────────────

    {
      id: 4,
      tipo: "concepto",
      titulo: "Área de una Porción del Círculo",
      etiqueta: "Una fracción del área total",
      formula: "A_{\\text{porción}} = \\text{fracción} \\times \\pi r^2",
      svgDiagram: "porciones-circulo",
      items: [
        { math: "\\dfrac{1}{2}\\,\\pi r^2", texto: "la mitad del círculo" },
        { math: "\\dfrac{1}{4}\\,\\pi r^2", texto: "una cuarta parte" },
        { math: "\\dfrac{3}{4}\\,\\pi r^2", texto: "tres cuartas partes" },
        { math: "\\dfrac{1}{8}\\,\\pi r^2", texto: "un octavo" },
        { math: "\\dfrac{1}{12}\\,\\pi r^2", texto: "un doceavo" }
      ],
      nota: "Para las porciones comunes no necesitas la fórmula del sector con ángulos: basta calcular el área total πr² y tomar la fracción que indique el dibujo."
    },

    // ── TRIÁNGULO INSCRITO: TEOREMA DEL ÁNGULO INSCRITO ───────────────────────

    {
      id: "ti-teorema",
      tipo: "criterio_detalle",
      titulo: "Triángulo Inscrito en una Circunferencia",
      etiqueta: "Teorema del ángulo inscrito",
      svgDiagram: "angulo-inscrito",
      enunciado: "En un triángulo inscrito los tres vértices están sobre la circunferencia y sus lados son cuerdas. Un ángulo inscrito (con vértice en la circunferencia) mide la mitad del ángulo central que abarca el mismo arco.",
      math: "\\angle_{\\text{inscrito}} = \\dfrac{1}{2}\\,\\angle_{\\text{central}}",
      por_que: "Ambos ángulos «ven» el mismo arco AC: el central lo abarca completo y el inscrito con la mitad de abertura. El caso estrella es el Teorema de Tales (lado = diámetro ⇒ ángulo recto). Demostración: con AC diámetro, el centro O queda sobre AC; al trazar el radio OB se forman dos triángulos isósceles, pues OA = OB = OC = r. Entonces ∠OAB = ∠OBA = α y ∠OBC = ∠OCB = β, así que el ángulo en B es α + β. Como los tres ángulos de ABC suman 180°, resulta 2α + 2β = 180°.",
      math_razon: "2\\alpha + 2\\beta = 180^\\circ \\;\\Rightarrow\\; \\angle B = \\alpha + \\beta = 90^\\circ"
    },

    // ── TRIÁNGULO INSCRITO: TODOS LOS CASOS ───────────────────────────────────

    {
      id: "ti-casos",
      tipo: "lista_criterios",
      titulo: "Ángulo Inscrito: Todos los Casos",
      etiqueta: "Según dónde quede el centro O",
      variante: "inscrito",
      criterios: [
        {
          sigla: "DIA",
          nombre: "Un lado es diámetro (Tales)",
          desc: "El centro O cae sobre un lado. El ángulo inscrito opuesto al diámetro mide exactamente 90°."
        },
        {
          sigla: "DEN",
          nombre: "El centro queda dentro",
          desc: "Los dos lados del ángulo encierran al centro O. El inscrito vale la mitad del ángulo central."
        },
        {
          sigla: "FUE",
          nombre: "El centro queda fuera",
          desc: "Los dos lados dejan al centro O del mismo lado. El inscrito sigue valiendo la mitad del central."
        }
      ]
    },

    // ── EJERCICIOS: TRIÁNGULO INSCRITO ────────────────────────────────────────

    {
      id: "ti1",
      tipo: "ejercicio",
      svgDiagram: "ti-ej1",
      etiqueta: "Triángulo inscrito · Ejercicio 1 / 3",
      pregunta: "Un triángulo está inscrito en una circunferencia y uno de sus lados es el diámetro. Si uno de sus ángulos agudos mide 35°, ¿cuánto mide el tercer ángulo?",
      math_pregunta: "\\text{lado} = \\text{diámetro},\\quad \\alpha = 35^\\circ,\\quad \\gamma = ?",
      opciones: ["45°", "55°", "65°"],
      correcta: 1,
      explicacion: "Por Tales, el ángulo opuesto al diámetro es 90°. Entonces 35° + 90° + γ = 180°, así que γ = 55°.",
      pasos: [
        { pre: "Ángulo en el diámetro (Tales): ", math: "\\beta = 90^\\circ" },
        { pre: "Suma de ángulos: ", math: "\\gamma = 180^\\circ - 90^\\circ - 35^\\circ = 55^\\circ" }
      ]
    },

    {
      id: "ti2",
      tipo: "ejercicio",
      svgDiagram: "ti-ej2",
      etiqueta: "Triángulo inscrito · Ejercicio 2 / 3",
      pregunta: "Un ángulo inscrito y un ángulo central abarcan el mismo arco. Si el ángulo central mide 80°, ¿cuánto mide el ángulo inscrito?",
      math_pregunta: "\\angle_{\\text{central}} = 80^\\circ,\\quad \\angle_{\\text{inscrito}} = ?",
      opciones: ["20°", "40°", "160°"],
      correcta: 1,
      explicacion: "El ángulo inscrito es la mitad del central que abarca el mismo arco: 80° ÷ 2 = 40°.",
      pasos: [
        { pre: "Mitad del central: ", math: "\\angle_{\\text{inscrito}} = \\dfrac{80^\\circ}{2} = 40^\\circ" }
      ]
    },

    {
      id: "ti3",
      tipo: "ejercicio",
      svgDiagram: "ti-ej3",
      etiqueta: "Triángulo inscrito · Ejercicio 3 / 3",
      pregunta: "Un triángulo rectángulo de catetos 6 cm y 8 cm está inscrito en una circunferencia, con su hipotenusa como diámetro. ¿Cuánto mide el radio de la circunferencia?",
      math_pregunta: "a = 6\\text{ cm},\\quad b = 8\\text{ cm},\\quad r = ?",
      opciones: ["4 cm", "5 cm", "10 cm"],
      correcta: 1,
      explicacion: "La hipotenusa es el diámetro. Por Pitágoras mide √(6²+8²) = 10 cm, así que el radio es 10 ÷ 2 = 5 cm.",
      pasos: [
        { pre: "Hipotenusa (diámetro): ", math: "h = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10\\text{ cm}" },
        { pre: "Radio: ", math: "r = \\dfrac{h}{2} = \\dfrac{10}{2} = 5\\text{ cm}" }
      ]
    },

    // ── ÁREAS SOMBREADAS: ESTRATEGIA ──────────────────────────────────────────

    {
      id: 20,
      tipo: "concepto",
      titulo: "Áreas Sombreadas",
      etiqueta: "Estrategia general",
      formula: "A_{\\text{sombreada}} = A_{\\text{grande}} - A_{\\text{interior}}",
      svgDiagram: "areas-estrategia",
      items: [
        { math: "A_\\text{total} - A_\\text{interior}", texto: "restar: región grande menos la parte no sombreada" },
        { math: "A_1 + A_2 + \\cdots", texto: "sumar: cuando la región es unión de partes conocidas" },
        { math: "A_{\\text{sector}} - A_{\\triangle}", texto: "combinación: sector menos triángulo = segmento circular" }
      ],
      nota: "Identifica todas las figuras involucradas, escribe sus fórmulas y luego opera. El truco es siempre saber QUÉ estás sumando y QUÉ estás restando."
    },

    // ── EJERCICIOS DE ÁREAS SOMBREADAS ───────────────────────────────────────

    {
      id: "as1",
      tipo: "ejercicio",
      svgDiagram: "as1-cuad-circ",
      etiqueta: "Áreas sombreadas · Ejercicio 1 / 8",
      pregunta: "Un cuadrado de lado 14 cm tiene un círculo inscrito. ¿Cuál es el área total de las cuatro esquinas sombreadas?",
      math_pregunta: "l = 14\\text{ cm},\\quad r = 7\\text{ cm}",
      opciones: ["196 − 49π cm²", "49π − 196 cm²", "196 − 14π cm²"],
      correcta: 0,
      explicacion: "Área esquinas = Área cuadrado − Área círculo = 14² − π(7)² = 196 − 49π cm².",
      pasos: [
        { pre: "Área cuadrado: ", math: "l^2 = 196\\text{ cm}^2" },
        { pre: "Círculo inscrito (r = l/2 = 7): ", math: "\\pi r^2 = 49\\pi\\text{ cm}^2" },
        { pre: "Esquinas: ", math: "196 - 49\\pi \\approx 42.1\\text{ cm}^2" }
      ]
    },

    {
      id: "as2",
      tipo: "ejercicio",
      svgDiagram: "as2-corona",
      etiqueta: "Áreas sombreadas · Ejercicio 2 / 8",
      pregunta: "Una corona circular tiene radio exterior R = 10 cm y radio interior r = 6 cm. ¿Cuál es su área?",
      math_pregunta: "R = 10\\text{ cm},\\quad r = 6\\text{ cm}",
      opciones: ["16π cm²", "64π cm²", "100π cm²"],
      correcta: 1,
      explicacion: "A_corona = π(R² − r²) = π(100 − 36) = 64π cm².",
      pasos: [
        { pre: "A corona: ", math: "\\pi(R^2 - r^2) = \\pi(100 - 36) = 64\\pi\\text{ cm}^2" }
      ]
    },

    {
      id: "as3",
      tipo: "ejercicio",
      svgDiagram: "as3-semi-rect",
      etiqueta: "Áreas sombreadas · Ejercicio 3 / 8",
      pregunta: "A un rectángulo de 16 cm × 6 cm se le recorta un semicírculo en cada lado corto (los extremos de 6 cm), con el diámetro apoyado sobre ese lado. ¿Cuál es el área de la región sombreada que queda?",
      math_pregunta: "\\text{rectángulo } 16\\times 6\\text{ cm};\\quad \\text{semicírculo de } r=3 \\text{ en cada lado corto}",
      opciones: ["96 − 9π cm²", "96 − 18π cm²", "96 − 36π cm²"],
      correcta: 0,
      explicacion: "Los dos semicírculos forman un círculo completo de r = 3. A = 16·6 − π(3)² = 96 − 9π cm².",
      pasos: [
        { pre: "Área rectángulo: ", math: "16 \\times 6 = 96\\text{ cm}^2" },
        { pre: "2 semicírculos = 1 círculo r=3: ", math: "\\pi(3)^2 = 9\\pi\\text{ cm}^2" },
        { pre: "Área final: ", math: "96 - 9\\pi \\approx 67.7\\text{ cm}^2" }
      ]
    },

    {
      id: "as4",
      tipo: "ejercicio",
      svgDiagram: "as4-sector-tri",
      etiqueta: "Áreas sombreadas · Ejercicio 4 / 8",
      pregunta: "En un sector circular de radio 6 cm y ángulo 90°, se sombrea solo el segmento circular (entre la cuerda y el arco). ¿Cuál es su área?",
      math_pregunta: "r = 6\\text{ cm},\\quad \\theta = 90^\\circ",
      opciones: ["9π − 18 cm²", "36π − 18 cm²", "9π cm²"],
      correcta: 0,
      explicacion: "A_seg = A_sector − A_triángulo = (1/4)π·36 − ½·6·6 = 9π − 18 cm².",
      pasos: [
        { pre: "Sector (90° = 1/4 del círculo): ", math: "\\dfrac{1}{4}\\pi(6)^2 = 9\\pi\\text{ cm}^2" },
        { pre: "Triángulo isósceles (catetos r = 6): ", math: "\\dfrac{1}{2}(6)(6) = 18\\text{ cm}^2" },
        { pre: "Segmento: ", math: "9\\pi - 18 \\approx 10.3\\text{ cm}^2" }
      ]
    },

    {
      id: "as5",
      tipo: "ejercicio",
      svgDiagram: "as5-trap-semi",
      etiqueta: "Áreas sombreadas · Ejercicio 5 / 8",
      pregunta: "Un trapecio isósceles tiene bases B = 10 cm, b = 4 cm y altura h = 8 cm. Sobre la base mayor se construye exteriormente un semicírculo. ¿Cuál es el área total sombreada?",
      math_pregunta: "B=10,\\; b=4,\\; h=8\\text{ cm};\\quad \\text{semicírculo exterior sobre }B",
      opciones: ["56 + 12.5π cm²", "56 + 25π cm²", "112 + 12.5π cm²"],
      correcta: 0,
      explicacion: "A_trap = (B+b)·h/2 = 14·8/2 = 56 cm². A_semi = π(B/2)²/2 = π(5)²/2 = 12.5π cm². Total = 56 + 12.5π cm².",
      pasos: [
        { pre: "Área trapecio: ", math: "\\dfrac{(10+4)\\cdot 8}{2} = 56\\text{ cm}^2" },
        { pre: "Semicírculo (r = 5 cm): ", math: "\\dfrac{\\pi(5)^2}{2} = \\dfrac{25\\pi}{2}\\text{ cm}^2" },
        { pre: "Total: ", math: "56 + \\dfrac{25\\pi}{2}\\text{ cm}^2" }
      ]
    },

    {
      id: "as6",
      tipo: "ejercicio",
      svgDiagram: "as6-hex-circ",
      etiqueta: "Áreas sombreadas · Ejercicio 6 / 8",
      pregunta: "Un hexágono regular de lado 6 cm está inscrito en un círculo. ¿Cuál es el área de la región entre el hexágono y el círculo?",
      math_pregunta: "l = r = 6\\text{ cm}",
      opciones: ["36π − 54√3 cm²", "36π − 108 cm²", "36π − 27√3 cm²"],
      correcta: 0,
      explicacion: "En el hexágono regular, el radio circunscrito es igual al lado: r = 6 cm. A_círculo = 36π. A_hexágono = (3√3/2)·36 = 54√3. A_sombreada = 36π − 54√3 cm².",
      pasos: [
        { pre: "Radio del círculo = lado = 6 cm: ", math: "A_{\\bigcirc} = \\pi(6)^2 = 36\\pi\\text{ cm}^2" },
        { pre: "Área hexágono regular: ", math: "A = \\dfrac{3\\sqrt{3}}{2}(6)^2 = 54\\sqrt{3}\\text{ cm}^2" },
        { pre: "Región sombreada: ", math: "36\\pi - 54\\sqrt{3} \\approx 19.6\\text{ cm}^2" }
      ]
    },

    {
      id: "as7",
      tipo: "ejercicio",
      svgDiagram: "as7-tri-circ",
      etiqueta: "Áreas sombreadas · Ejercicio 7 / 8",
      pregunta: "Un triángulo rectángulo de catetos 6 cm y 8 cm tiene un semicírculo construido exteriormente sobre la hipotenusa. ¿Cuál es el área total del conjunto sombreado?",
      math_pregunta: "a=6\\text{ cm},\\; b=8\\text{ cm},\\; c=?",
      opciones: ["24 + 12.5π cm²", "48 + 25π cm²", "24 + 25π cm²"],
      correcta: 0,
      explicacion: "c = √(36+64) = 10 cm. A_triángulo = ½·6·8 = 24 cm². Semicírculo r=5: A = π(5)²/2 = 12.5π. Total = 24 + 12.5π cm².",
      pasos: [
        { pre: "Hipotenusa: ", math: "c = \\sqrt{6^2+8^2} = 10\\text{ cm},\\quad r = 5\\text{ cm}" },
        { pre: "Área triángulo: ", math: "\\tfrac{1}{2}(6)(8) = 24\\text{ cm}^2" },
        { pre: "Semicírculo: ", math: "\\dfrac{\\pi(5)^2}{2} = \\dfrac{25\\pi}{2}\\text{ cm}^2" },
        { pre: "Total: ", math: "24 + \\dfrac{25\\pi}{2} \\approx 63.3\\text{ cm}^2" }
      ]
    },

    {
      id: "as8",
      tipo: "ejercicio",
      svgDiagram: "as8-complejo",
      etiqueta: "Áreas sombreadas · Ejercicio 8 / 8",
      pregunta: "Figura compuesta: un rectángulo 12 × 8 cm más una semicircunferencia adosada a uno de sus lados cortos (su diámetro coincide con ese lado de 8 cm, así que el radio es 4 cm), menos un triángulo interior de base 12 cm y altura 5 cm. ¿Cuál es el área total sombreada?",
      math_pregunta: "A_{\\square}+A_{\\text{semicírculo}}-A_{\\triangle}",
      opciones: ["66 + 8π cm²", "66 + 16π cm²", "96 + 8π cm²"],
      correcta: 0,
      explicacion: "A_rect = 96. Semicírculo (diámetro = lado de 8 ⇒ r = 4): A = ½π(4)² = 8π. A_triángulo = ½·12·5 = 30. Total = 96 + 8π − 30 = 66 + 8π cm².",
      pasos: [
        { pre: "Rectángulo: ", math: "12 \\times 8 = 96\\text{ cm}^2" },
        { pre: "Semicírculo (r = 4 cm): ", math: "\\dfrac{1}{2}\\pi(4)^2 = 8\\pi\\text{ cm}^2" },
        { pre: "Triángulo (se resta): ", math: "\\dfrac{1}{2}(12)(5) = 30\\text{ cm}^2" },
        { pre: "Total: ", math: "96 + 8\\pi - 30 = 66 + 8\\pi \\approx 91.1\\text{ cm}^2" }
      ]
    },

    // ── RESUMEN ───────────────────────────────────────────────────────────────

    {
      id: 30,
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Lo que aprendimos hoy",
      puntos: [
        { math: "P = 2\\pi r,\\quad A = \\pi r^2", texto: "perímetro (circunferencia) y área del círculo" },
        { math: "l = \\dfrac{\\theta}{360^\\circ}\\cdot 2\\pi r,\\quad A_{\\text{sector}} = \\dfrac{\\theta}{360^\\circ}\\pi r^2", texto: "longitud de arco y área de sector" },
        { math: "A_{\\text{seg}} = A_{\\text{sector}} - \\tfrac{1}{2}r^2\\sin\\theta", texto: "área del segmento circular (sector − triángulo)" },
        { math: "A_{\\text{corona}} = \\pi(R^2 - r^2)", texto: "área del anillo o corona circular" },
        { titulo: "Tangentes desde P exterior", texto: "PA = PB = √(PO² − r²)" },
        { titulo: "Áreas sombreadas", texto: "identifica figuras → sumar partes + restar lo que falta" }
      ]
    }

  ]
};
