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

    // ── ÁNGULO CENTRAL ────────────────────────────────────────────────────────

    {
      id: 4,
      tipo: "criterio_detalle",
      titulo: "Ángulo Central y Arco",
      etiqueta: "Proporcional al ángulo central",
      svgDiagram: "angulo-central",
      enunciado: "El ángulo central tiene su vértice en el centro del círculo. La longitud del arco y el área del sector son proporcionales al ángulo central θ.",
      math: "l = \\dfrac{\\theta}{360^\\circ} \\cdot 2\\pi r \\qquad A_{\\text{sector}} = \\dfrac{\\theta}{360^\\circ} \\cdot \\pi r^2",
      por_que: "Un ángulo completo (360°) corresponde a la circunferencia entera y al área total del círculo. Para un ángulo θ se toma la fracción θ/360° de cada cantidad.",
      math_razon: "\\dfrac{l}{2\\pi r} = \\dfrac{A_{\\text{sector}}}{\\pi r^2} = \\dfrac{\\theta}{360^\\circ}"
    },

    // ── SECTOR CIRCULAR ───────────────────────────────────────────────────────

    {
      id: 5,
      tipo: "criterio_detalle",
      titulo: "Sector Circular",
      etiqueta: "La rebanada del círculo",
      svgDiagram: "sector-circular",
      enunciado: "El sector circular es la región comprendida entre dos radios y el arco que subtienden. En radianes, su área tiene una fórmula compacta.",
      math: "A_{\\text{sector}} = \\dfrac{\\theta}{360^\\circ}\\cdot\\pi r^2 = \\dfrac{1}{2}\\,r^2\\,\\theta_{\\text{rad}}",
      por_que: "En radianes la longitud de arco es l = rθ, y la altura del triángulo diferencial es r, por lo que el área es ½·r·l = ½r²θ.",
      math_razon: "l = r\\theta \\;\\Rightarrow\\; A = \\tfrac{1}{2}rl = \\tfrac{1}{2}r^2\\theta"
    },

    // ── SEGMENTO CIRCULAR ─────────────────────────────────────────────────────

    {
      id: 6,
      tipo: "criterio_detalle",
      titulo: "Segmento Circular",
      etiqueta: "Sector menos el triángulo",
      svgDiagram: "segmento-circular",
      enunciado: "El segmento circular es la región limitada por una cuerda y su arco. Su área es la del sector circular menos la del triángulo formado por los dos radios y la cuerda.",
      math: "A_{\\text{seg}} = A_{\\text{sector}} - A_{\\triangle} = \\dfrac{\\theta}{360^\\circ}\\pi r^2 - \\dfrac{1}{2}r^2\\sin\\theta",
      por_que: "El triángulo isósceles con dos lados iguales a r y ángulo θ entre ellos tiene área = ½·r·r·sen(θ). El segmento es lo que queda tras quitar ese triángulo del sector.",
      math_razon: "A_{\\triangle} = \\dfrac{1}{2}r^2\\sin\\theta"
    },

    // ── POSICIONES RECTA–CÍRCULO ──────────────────────────────────────────────

    {
      id: 7,
      tipo: "lista_criterios",
      titulo: "Recta y Círculo",
      etiqueta: "Tres posiciones posibles",
      variante: "circulo",
      criterios: [
        {
          sigla: "EXT",
          nombre: "Exterior",
          desc: "La recta no toca el círculo. Distancia del centro a la recta es mayor que r."
        },
        {
          sigla: "TAN",
          nombre: "Tangente",
          desc: "La recta toca el círculo en exactamente un punto. Distancia del centro = r."
        },
        {
          sigla: "SEC",
          nombre: "Secante",
          desc: "La recta corta el círculo en dos puntos. Distancia del centro es menor que r."
        }
      ]
    },

    // ── POSICIONES DOS CÍRCULOS ───────────────────────────────────────────────

    {
      id: 8,
      tipo: "lista_criterios",
      titulo: "Dos Círculos",
      etiqueta: "Posiciones relativas",
      variante: "circulo",
      criterios: [
        {
          sigla: "EXT",
          nombre: "Exteriores",
          desc: "No se tocan. Distancia entre centros d > r₁ + r₂."
        },
        {
          sigla: "TEX",
          nombre: "Tang. exterior",
          desc: "Se tocan en un punto exterior. d = r₁ + r₂."
        },
        {
          sigla: "SEC",
          nombre: "Secantes",
          desc: "Se cortan en dos puntos. |r₁ − r₂| < d < r₁ + r₂."
        },
        {
          sigla: "TIN",
          nombre: "Tang. interior",
          desc: "Un círculo toca al otro internamente. d = |r₁ − r₂|."
        }
      ]
    },

    // ── TANGENTES DESDE UN PUNTO EXTERIOR ────────────────────────────────────

    {
      id: 9,
      tipo: "criterio_detalle",
      titulo: "Tangentes desde un Punto Exterior",
      etiqueta: "Los dos segmentos tangentes son iguales",
      svgDiagram: "tangente-exterior",
      enunciado: "Desde un punto P exterior a un círculo de centro O y radio r se pueden trazar exactamente dos tangentes. Los segmentos desde P hasta los puntos de tangencia son iguales.",
      math: "PA = PB = \\sqrt{PO^2 - r^2}",
      por_que: "Los triángulos OAP y OBP son congruentes: comparten la hipotenusa OP, tienen el ángulo recto en A y B respectivamente, y OA = OB = r. Por congruencia H-L, PA = PB.",
      math_razon: "\\triangle OAP \\cong \\triangle OBP \\;(\\text{H-L}) \\;\\Rightarrow\\; PA = PB"
    },

    // ── EJERCICIOS DEL CÍRCULO ────────────────────────────────────────────────

    {
      id: "cc1",
      tipo: "ejercicio",
      svgDiagram: "cce1-radio",
      etiqueta: "Círculo · Ejercicio 1 / 4",
      pregunta: "Un círculo tiene perímetro de 20π cm. ¿Cuánto mide su área?",
      math_pregunta: "P = 20\\pi\\text{ cm},\\quad A = ?",
      opciones: ["50π cm²", "100π cm²", "400π cm²"],
      correcta: 1,
      explicacion: "De P = 2πr → r = 10 cm. Área = π(10)² = 100π cm².",
      pasos: [
        { pre: "Despejar r: ", math: "r = \\dfrac{P}{2\\pi} = \\dfrac{20\\pi}{2\\pi} = 10\\text{ cm}" },
        { pre: "Área: ", math: "A = \\pi r^2 = 100\\pi\\text{ cm}^2" }
      ]
    },

    {
      id: "cc2",
      tipo: "ejercicio",
      svgDiagram: "cce2-sector",
      etiqueta: "Círculo · Ejercicio 2 / 4",
      pregunta: "¿Cuál es el área de un sector circular de radio 6 cm y ángulo central 120°?",
      math_pregunta: "r = 6\\text{ cm},\\quad \\theta = 120^\\circ",
      opciones: ["6π cm²", "12π cm²", "36π cm²"],
      correcta: 1,
      explicacion: "A_sector = (120/360)·π·36 = (1/3)·36π = 12π cm².",
      pasos: [
        { pre: "A sector: ", math: "\\dfrac{120^\\circ}{360^\\circ}\\cdot\\pi(6)^2 = \\dfrac{1}{3}\\cdot 36\\pi = 12\\pi\\text{ cm}^2" }
      ]
    },

    {
      id: "cc3",
      tipo: "ejercicio",
      svgDiagram: "cce3-arco",
      etiqueta: "Círculo · Ejercicio 3 / 4",
      pregunta: "Un círculo de radio 9 cm tiene un arco que subtiende 80° en el centro. ¿Cuánto mide ese arco?",
      math_pregunta: "r = 9\\text{ cm},\\quad \\theta = 80^\\circ,\\quad l = ?",
      opciones: ["2π cm", "4π cm", "8π cm"],
      correcta: 1,
      explicacion: "l = (80/360)·2π·9 = (2/9)·18π = 4π cm.",
      pasos: [
        { pre: "Longitud de arco: ", math: "l = \\dfrac{80}{360}\\cdot 2\\pi(9) = \\dfrac{2}{9}\\cdot 18\\pi = 4\\pi\\text{ cm}" }
      ]
    },

    {
      id: "cc4",
      tipo: "ejercicio",
      svgDiagram: "cce4-tang",
      etiqueta: "Círculo · Ejercicio 4 / 4",
      pregunta: "Desde un punto P exterior, la distancia PO = 13 cm y el radio del círculo es 5 cm. ¿Cuánto mide el segmento tangente PA?",
      math_pregunta: "PO = 13\\text{ cm},\\quad r = 5\\text{ cm},\\quad PA = ?",
      opciones: ["8 cm", "10 cm", "12 cm"],
      correcta: 2,
      explicacion: "PA² = PO² − r² = 169 − 25 = 144. Por lo tanto PA = 12 cm.",
      pasos: [
        { pre: "Pitágoras en △OAP: ", math: "PA = \\sqrt{PO^2 - r^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\text{ cm}" }
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
      pregunta: "Un rectángulo de 16 × 6 cm tiene un semicírculo de diámetro 6 cm quitado en cada extremo de la dimensión larga. ¿Cuál es el área restante?",
      math_pregunta: "16\\times 6\\text{ cm};\\quad r = 3\\text{ cm en cada extremo}",
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
      pregunta: "Un trapecio isósceles tiene bases B = 10 cm, b = 6 cm y altura h = 8 cm. Sobre la base mayor se construye exteriormente un semicírculo. ¿Cuál es el área total sombreada?",
      math_pregunta: "B=10,\\; b=6,\\; h=8\\text{ cm};\\quad \\text{semicírculo exterior sobre }B",
      opciones: ["64 + 12.5π cm²", "64 + 25π cm²", "80 + 25π cm²"],
      correcta: 0,
      explicacion: "A_trap = (B+b)·h/2 = 16·8/2 = 64 cm². A_semi = π(B/2)²/2 = π(5)²/2 = 12.5π cm². Total = 64 + 12.5π cm².",
      pasos: [
        { pre: "Área trapecio: ", math: "\\dfrac{(10+6)\\cdot 8}{2} = 64\\text{ cm}^2" },
        { pre: "Semicírculo (r = 5 cm): ", math: "\\dfrac{\\pi(5)^2}{2} = \\dfrac{25\\pi}{2}\\text{ cm}^2" },
        { pre: "Total: ", math: "64 + \\dfrac{25\\pi}{2}\\text{ cm}^2" }
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
      pregunta: "Figura compuesta: un rectángulo 12 × 8 cm más un sector circular de 90° y radio 8 cm adosado a uno de sus lados cortos, menos un triángulo interior de base 12 cm y altura 5 cm. ¿Cuál es el área total sombreada?",
      math_pregunta: "A_{\\square}+A_{\\text{sector}}-A_{\\triangle}",
      opciones: ["126 + 16π cm²", "66 + 16π cm²", "96 + 16π cm²"],
      correcta: 1,
      explicacion: "A_rect = 96. A_sector = (1/4)π(8)² = 16π. A_triángulo = ½·12·5 = 30. Total = 96 + 16π − 30 = 66 + 16π cm².",
      pasos: [
        { pre: "Rectángulo: ", math: "12 \\times 8 = 96\\text{ cm}^2" },
        { pre: "Sector 90°, r = 8: ", math: "\\dfrac{1}{4}\\pi(8)^2 = 16\\pi\\text{ cm}^2" },
        { pre: "Triángulo (sumar, no quitar — está afuera): ", math: "\\dfrac{1}{2}(12)(5) = 30\\text{ cm}^2" },
        { pre: "Total: ", math: "96 + 16\\pi - 30 = 66 + 16\\pi \\approx 116.3\\text{ cm}^2" }
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
