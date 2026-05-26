// Datos de la presentación: Congruencia y Semejanza de Triángulos

export const PRESENTACION = {
  id: "semejanza-triangulos",
  titulo: "Congruencia y Semejanza de Triángulos",
  materia: "Matemáticas",
  slides: [
    // ── PORTADA ───────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Congruencia y Semejanza",
      subtitulo: "Criterios de congruencia y semejanza de triángulos",
      etiqueta: "Geometría · Preparatoria"
    },

    // ── CONGRUENCIA ───────────────────────────────────────────────────────────

    {
      id: 1,
      tipo: "definicion",
      titulo: "Congruencia de Triángulos",
      simbolo: "\\triangle ABC \\cong \\triangle DEF",
      cuerpo: "Dos triángulos son congruentes si tienen exactamente la misma forma y el mismo tamaño: todos sus lados y ángulos correspondientes son iguales.",
      svgDiagram: "triangulos-congruentes",
      condiciones: [
        {
          texto: "① Lados correspondientes iguales",
          math: "AB = DE,\\quad BC = EF,\\quad CA = FD"
        },
        {
          texto: "② Ángulos correspondientes iguales",
          math: "\\angle A = \\angle D,\\quad \\angle B = \\angle E,\\quad \\angle C = \\angle F"
        }
      ]
    },

    {
      id: 2,
      tipo: "lista_criterios",
      titulo: "Criterios de Congruencia",
      etiqueta: "Cuatro formas de demostrar congruencia",
      variante: "congruencia",
      criterios: [
        {
          sigla: "LLL",
          nombre: "Lado–Lado–Lado",
          desc: "Los tres pares de lados correspondientes son iguales."
        },
        {
          sigla: "LAL",
          nombre: "Lado–Ángulo–Lado",
          desc: "Dos pares de lados iguales y el ángulo comprendido entre ellos igual."
        },
        {
          sigla: "ALA",
          nombre: "Ángulo–Lado–Ángulo",
          desc: "Dos pares de ángulos iguales y el lado comprendido entre ellos igual."
        },
        {
          sigla: "LAA",
          nombre: "Lado–Ángulo–Ángulo",
          desc: "Un par de lados y dos pares de ángulos iguales (el lado no está entre los dos ángulos)."
        }
      ]
    },

    {
      id: 3,
      tipo: "criterio_detalle",
      titulo: "Criterio LLL",
      etiqueta: "Lado–Lado–Lado",
      svgDiagram: "lll-cong-detalle",
      enunciado: "Si los tres pares de lados correspondientes son iguales, los triángulos son congruentes.",
      math: "AB = DE,\\; BC = EF,\\; CA = FD \\implies \\triangle ABC \\cong \\triangle DEF",
      por_que:
        "Si los tres lados coinciden en longitud, la figura queda completamente determinada: no puede tener diferente forma ni diferente tamaño.",
      math_razon: null
    },

    {
      id: 4,
      tipo: "ejemplo",
      titulo: "Ejemplo — Criterio LLL",
      etiqueta: "Verificar congruencia con tres lados",
      svgDiagram: null,
      enunciado: "Determina si △ABC y △DEF son congruentes.",
      datos: [
        { label: "△ ABC", math: "AB = 5,\\; BC = 6,\\; CA = 7" },
        { label: "△ DEF", math: "DE = 5,\\; EF = 6,\\; FD = 7" }
      ],
      pasos: [
        { pre: "Primer par de lados: ", math: "AB = DE = 5 \\checkmark" },
        { pre: "Segundo par: ", math: "BC = EF = 6 \\checkmark" },
        { pre: "Tercer par: ", math: "CA = FD = 7 \\checkmark" },
        { pre: "Los tres pares de lados son iguales → ", math: "\\triangle ABC \\cong \\triangle DEF \\;(\\text{LLL})" }
      ]
    },

    {
      id: 5,
      tipo: "criterio_detalle",
      titulo: "Criterio LAL",
      etiqueta: "Lado–Ángulo–Lado",
      svgDiagram: "lal-cong-detalle",
      enunciado: "Si dos pares de lados correspondientes son iguales y el ángulo comprendido entre ellos es igual, los triángulos son congruentes.",
      math: "AB = DE,\\; \\angle A = \\angle D,\\; AC = DF \\implies \\triangle ABC \\cong \\triangle DEF",
      por_que:
        "El ángulo comprendido fija la apertura entre los dos lados. Con esa apertura y esas longitudes, el tercer lado y los demás ángulos quedan completamente determinados.",
      math_razon: null
    },

    {
      id: 6,
      tipo: "ejemplo",
      titulo: "Ejemplo — Criterio LAL",
      etiqueta: "Verificar congruencia con dos lados y ángulo comprendido",
      svgDiagram: null,
      enunciado: "¿Son congruentes △ABC y △DEF?",
      datos: [
        { label: "△ ABC", math: "AB = 4,\\; \\angle A = 60^\\circ,\\; AC = 6" },
        { label: "△ DEF", math: "DE = 4,\\; \\angle D = 60^\\circ,\\; DF = 6" }
      ],
      pasos: [
        { pre: "Primer lado: ", math: "AB = DE = 4 \\checkmark" },
        { pre: "Ángulo comprendido: ", math: "\\angle A = \\angle D = 60^\\circ \\checkmark" },
        { pre: "Segundo lado: ", math: "AC = DF = 6 \\checkmark" },
        { pre: "El ángulo está entre los dos lados dados → ", math: "\\triangle ABC \\cong \\triangle DEF \\;(\\text{LAL})" }
      ]
    },

    {
      id: 7,
      tipo: "criterio_detalle",
      titulo: "Criterio ALA",
      etiqueta: "Ángulo–Lado–Ángulo",
      svgDiagram: "ala-cong-detalle",
      enunciado: "Si dos pares de ángulos son iguales y el lado comprendido entre ellos es igual, los triángulos son congruentes.",
      math: "\\angle A = \\angle D,\\; AB = DE,\\; \\angle B = \\angle E \\implies \\triangle ABC \\cong \\triangle DEF",
      por_que:
        "El lado fija la escala. Los dos ángulos adyacentes a ese lado dirigen los otros dos lados, que se encuentran en un único punto, determinando el triángulo por completo.",
      math_razon: "\\angle C = 180^\\circ - \\angle A - \\angle B = \\angle F \\;(\\text{queda determinado})"
    },

    {
      id: 8,
      tipo: "ejemplo",
      titulo: "Ejemplo — Criterio ALA",
      etiqueta: "Verificar congruencia con ángulo-lado-ángulo",
      svgDiagram: null,
      enunciado: "¿Son congruentes △ABC y △DEF?",
      datos: [
        { label: "△ ABC", math: "\\angle A = 45^\\circ,\\; AB = 8,\\; \\angle B = 75^\\circ" },
        { label: "△ DEF", math: "\\angle D = 45^\\circ,\\; DE = 8,\\; \\angle E = 75^\\circ" }
      ],
      pasos: [
        { pre: "Primer ángulo: ", math: "\\angle A = \\angle D = 45^\\circ \\checkmark" },
        { pre: "Lado comprendido: ", math: "AB = DE = 8 \\checkmark" },
        { pre: "Segundo ángulo: ", math: "\\angle B = \\angle E = 75^\\circ \\checkmark" },
        { pre: "Tercer ángulo deducido: ", math: "\\angle C = \\angle F = 180^\\circ - 45^\\circ - 75^\\circ = 60^\\circ" },
        { pre: "El lado AB está entre los dos ángulos dados → ", math: "\\triangle ABC \\cong \\triangle DEF \\;(\\text{ALA})" }
      ]
    },

    {
      id: 9,
      tipo: "criterio_detalle",
      titulo: "Criterio LAA",
      etiqueta: "Lado–Ángulo–Ángulo",
      svgDiagram: "laa-cong-detalle",
      enunciado: "Si un par de lados correspondientes son iguales y dos pares de ángulos son iguales (el lado no está entre los dos ángulos), los triángulos son congruentes.",
      math: "\\angle A = \\angle D,\\; \\angle B = \\angle E,\\; BC = EF \\implies \\triangle ABC \\cong \\triangle DEF",
      por_que:
        "Con dos ángulos conocidos, el tercero queda determinado (suma 180°). Eso convierte a LAA en un caso de ALA, que ya garantiza la congruencia.",
      math_razon: "\\angle C = 180^\\circ - \\angle A - \\angle B = \\angle F \\implies \\text{equivalente a ALA}"
    },

    {
      id: 10,
      tipo: "ejemplo",
      titulo: "Ejemplo — Criterio LAA",
      etiqueta: "Verificar congruencia con lado-ángulo-ángulo",
      svgDiagram: null,
      enunciado: "¿Son congruentes △ABC y △DEF? (BC no está entre los ángulos dados)",
      datos: [
        { label: "△ ABC", math: "\\angle A = 50^\\circ,\\; \\angle B = 70^\\circ,\\; BC = 5" },
        { label: "△ DEF", math: "\\angle D = 50^\\circ,\\; \\angle E = 70^\\circ,\\; EF = 5" }
      ],
      pasos: [
        { pre: "Primer ángulo: ", math: "\\angle A = \\angle D = 50^\\circ \\checkmark" },
        { pre: "Segundo ángulo: ", math: "\\angle B = \\angle E = 70^\\circ \\checkmark" },
        { pre: "Tercer ángulo deducido: ", math: "\\angle C = \\angle F = 180^\\circ - 50^\\circ - 70^\\circ = 60^\\circ" },
        { pre: "Lado (no comprendido entre los ángulos dados): ", math: "BC = EF = 5 \\checkmark" },
        { pre: "Se cumplen las condiciones LAA → ", math: "\\triangle ABC \\cong \\triangle DEF \\;(\\text{LAA})" }
      ]
    },

    // ── SEMEJANZA ─────────────────────────────────────────────────────────────

    {
      id: 11,
      tipo: "definicion",
      titulo: "Semejanza de Triángulos",
      simbolo: "\\triangle ABC \\sim \\triangle DEF",
      cuerpo: "Dos triángulos son semejantes si tienen la misma forma pero no necesariamente el mismo tamaño.",
      svgDiagram: "triangulos-semejantes",
      condiciones: [
        {
          texto: "① Ángulos correspondientes iguales",
          math: "\\angle A = \\angle D,\\quad \\angle B = \\angle E,\\quad \\angle C = \\angle F"
        },
        {
          texto: "② Lados correspondientes proporcionales",
          math: "\\dfrac{AB}{DE} = \\dfrac{BC}{EF} = \\dfrac{CA}{FD}"
        }
      ]
    },

    {
      id: 12,
      tipo: "concepto",
      titulo: "Razón de Semejanza",
      etiqueta: "Factor de escala k",
      formula: "k = \\dfrac{\\text{lado de } \\triangle_1}{\\text{lado correspondiente de } \\triangle_2}",
      svgDiagram: "razon-semejanza",
      items: [
        { math: "k > 1", texto: "el primer triángulo es el mayor" },
        { math: "k < 1", texto: "el primer triángulo es el menor" },
        { math: "k = 1", texto: "los triángulos son congruentes" }
      ],
      nota: "Las áreas se relacionan como k², no como k."
    },

    {
      id: 13,
      tipo: "lista_criterios",
      titulo: "Criterios de Semejanza",
      etiqueta: "Tres formas de demostrar semejanza",
      criterios: [
        {
          sigla: "AA",
          nombre: "Ángulo–Ángulo",
          desc: "Dos ángulos de un triángulo son iguales a dos ángulos del otro."
        },
        {
          sigla: "LLL",
          nombre: "Lado–Lado–Lado",
          desc: "Los tres pares de lados correspondientes son proporcionales."
        },
        {
          sigla: "LAL",
          nombre: "Lado–Ángulo–Lado",
          desc: "Dos lados proporcionales y el ángulo comprendido entre ellos igual."
        }
      ]
    },

    {
      id: 14,
      tipo: "criterio_detalle",
      titulo: "Criterio AA",
      etiqueta: "Ángulo–Ángulo",
      svgDiagram: "aa-detalle",
      enunciado:
        "Si dos ángulos de un triángulo son iguales a dos ángulos de otro, los triángulos son semejantes.",
      math: "\\angle A = \\angle D \\;\\text{ y }\\; \\angle B = \\angle E \\implies \\triangle ABC \\sim \\triangle DEF",
      por_que:
        "La suma de los ángulos interiores siempre es 180°, por lo que el tercer ángulo queda determinado automáticamente.",
      math_razon:
        "\\angle C = 180^\\circ - \\angle A - \\angle B = 180^\\circ - \\angle D - \\angle E = \\angle F"
    },

    {
      id: 15,
      tipo: "criterio_detalle",
      titulo: "Criterio LLL",
      etiqueta: "Lado–Lado–Lado",
      svgDiagram: "lll-detalle",
      enunciado:
        "Si los tres pares de lados correspondientes son proporcionales, los triángulos son semejantes.",
      math: "\\dfrac{AB}{DE} = \\dfrac{BC}{EF} = \\dfrac{CA}{FD} = k \\implies \\triangle ABC \\sim \\triangle DEF",
      por_que:
        "La proporcionalidad de los tres lados obliga a que la forma se conserve, lo que implica que los ángulos son necesariamente iguales.",
      math_razon: null
    },

    {
      id: 16,
      tipo: "criterio_detalle",
      titulo: "Criterio LAL",
      etiqueta: "Lado–Ángulo–Lado",
      svgDiagram: "lal-detalle",
      enunciado:
        "Si dos pares de lados son proporcionales y el ángulo comprendido entre ellos es igual, los triángulos son semejantes.",
      math: "\\dfrac{AB}{DE} = \\dfrac{AC}{DF} \\;\\text{ y }\\; \\angle A = \\angle D \\implies \\triangle ABC \\sim \\triangle DEF",
      por_que:
        "El ángulo debe ser el comprendido entre los dos lados (el que queda entre ellos). Si el ángulo fuera otro, el criterio no aplica.",
      math_razon: null
    },

    {
      id: 17,
      tipo: "ejemplo",
      titulo: "Ejemplo 1",
      etiqueta: "Verificar semejanza — criterio LLL",
      svgDiagram: "ej1-lll",
      enunciado: "Determina si los siguientes triángulos son semejantes:",
      datos: [
        { label: "△ ABC", math: "AB = 6,\\; BC = 8,\\; CA = 10" },
        { label: "△ DEF", math: "DE = 3,\\; EF = 4,\\; FD = 5" }
      ],
      pasos: [
        { pre: "Dividimos lados correspondientes: ", math: "\\dfrac{AB}{DE} = \\dfrac{6}{3} = 2" },
        { pre: "Segundo par: ", math: "\\dfrac{BC}{EF} = \\dfrac{8}{4} = 2" },
        { pre: "Tercer par: ", math: "\\dfrac{CA}{FD} = \\dfrac{10}{5} = 2" },
        {
          pre: "Los tres cocientes son iguales → ",
          math: "\\triangle ABC \\sim \\triangle DEF \\;(\\text{LLL}),\\quad k = 2"
        }
      ]
    },

    {
      id: 18,
      tipo: "ejemplo",
      titulo: "Ejemplo 2",
      etiqueta: "Encontrar un lado desconocido",
      svgDiagram: "ej2-k32",
      enunciado:
        "Si △PQR ~ △XYZ con razón de semejanza k = 3/2 y PQ = 12, ¿cuánto mide XY?",
      datos: [],
      pasos: [
        {
          pre: "La razón de semejanza relaciona lados: ",
          math: "k = \\dfrac{PQ}{XY} = \\dfrac{3}{2}"
        },
        {
          pre: "Despejamos XY: ",
          math: "XY = \\dfrac{PQ}{k} = \\dfrac{12}{\\;3/2\\;} = 12 \\times \\dfrac{2}{3} = 8"
        },
        { pre: "Resultado: ", math: "XY = 8" }
      ]
    },

    {
      id: 19,
      tipo: "ejercicio",
      etiqueta: "Ejercicio 1 / 3",
      pregunta: "Si △ABC ~ △DEF con k = 3 y AB = 15, ¿cuánto mide DE?",
      math_pregunta: "\\triangle ABC \\sim \\triangle DEF,\\quad k = 3,\\quad AB = 15",
      opciones: ["3", "5", "12", "45"],
      correcta: 1,
      explicacion:
        "La razón de semejanza k = AB/DE, por lo tanto DE = AB/k = 15/3 = 5.",
      pasos: [
        {
          pre: "Definición de k: ",
          math: "k = \\dfrac{AB}{DE} \\implies DE = \\dfrac{AB}{k} = \\dfrac{15}{3} = 5"
        }
      ]
    },

    {
      id: 20,
      tipo: "ejercicio",
      etiqueta: "Ejercicio 2 / 3",
      pregunta:
        "¿Qué criterio de semejanza se aplica cuando únicamente sabemos que dos ángulos son iguales en ambos triángulos?",
      math_pregunta: null,
      opciones: ["LLL", "LAL", "AA", "No hay suficiente información"],
      correcta: 2,
      explicacion:
        "El criterio AA establece que basta con que dos ángulos sean iguales para garantizar la semejanza (el tercero se deduce de la suma 180°).",
      pasos: []
    },

    {
      id: 21,
      tipo: "ejercicio",
      etiqueta: "Ejercicio 3 / 3",
      pregunta:
        "Dos triángulos semejantes tienen k = 2. Si el área del menor es 9 cm², ¿cuál es el área del mayor?",
      math_pregunta: "k = 2,\\quad A_{\\text{menor}} = 9\\text{ cm}^2",
      opciones: ["18 cm²", "27 cm²", "36 cm²", "81 cm²"],
      correcta: 2,
      explicacion:
        "Las áreas se relacionan como k². Área mayor = 9 × 2² = 9 × 4 = 36 cm².",
      pasos: [
        {
          pre: "Razón de áreas: ",
          math: "\\dfrac{A_{\\text{mayor}}}{A_{\\text{menor}}} = k^2 = 2^2 = 4"
        },
        { pre: "Por lo tanto: ", math: "A_{\\text{mayor}} = 9 \\times 4 = 36 \\text{ cm}^2" }
      ]
    },

    {
      id: 22,
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Lo que aprendimos hoy",
      puntos: [
        { math: "\\triangle ABC \\cong \\triangle DEF", texto: "misma forma y mismo tamaño (congruencia)" },
        { titulo: "Criterios LLL, LAL, ALA, LAA", texto: "cuatro formas de probar congruencia" },
        { math: "\\triangle ABC \\sim \\triangle DEF", texto: "misma forma, distinto tamaño (semejanza)" },
        { titulo: "Criterio AA", texto: "dos ángulos iguales son suficientes para semejanza" },
        { math: "k = \\dfrac{l_1}{l_2}", texto: "razón de semejanza (factor de escala)" },
        { math: "\\dfrac{A_1}{A_2} = k^2", texto: "relación de áreas entre triángulos semejantes" }
      ]
    }
  ]
};
