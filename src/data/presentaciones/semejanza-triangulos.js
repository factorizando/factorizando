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
      etiqueta: "Criterios LLL y LAL",
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
        }
      ]
    },

    {
      id: "2b",
      tipo: "lista_criterios",
      titulo: "Criterios de Congruencia",
      etiqueta: "Criterios ALA y LAA",
      variante: "congruencia",
      criterios: [
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
      svgDiagram: "ej-cong-lll",
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
      svgDiagram: "ej-cong-lal",
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
      svgDiagram: "ej-cong-ala",
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
      svgDiagram: "ej-cong-laa",
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

    // ── EJERCICIOS DE CONGRUENCIA ─────────────────────────────────────────────

    {
      id: "ce1",
      tipo: "ejercicio",
      svgDiagram: "ce1-lll",
      etiqueta: "Congruencia · Ejercicio 1 / 5",
      pregunta: "Dos triángulos tienen sus tres pares de lados correspondientes iguales: AB = DE, BC = EF y CA = FD. ¿Qué criterio garantiza su congruencia?",
      math_pregunta: "AB = DE,\\quad BC = EF,\\quad CA = FD",
      opciones: ["LAL", "LLL", "LAA"],
      correcta: 1,
      explicacion: "LLL (Lado-Lado-Lado): si los tres pares de lados correspondientes son iguales, los triángulos son necesariamente congruentes.",
      pasos: []
    },

    {
      id: "ce2",
      tipo: "ejercicio",
      svgDiagram: "ce2-medidas",
      etiqueta: "Congruencia · Ejercicio 2 / 5",
      pregunta: "△ABC ≅ △DEF. Si AB = 7, BC = 10 y CA = 8, ¿cuánto mide EF?",
      math_pregunta: "\\triangle ABC \\cong \\triangle DEF,\\quad AB = 7,\\; BC = 10,\\; CA = 8",
      opciones: ["7", "8", "10"],
      correcta: 2,
      explicacion: "En triángulos congruentes los lados correspondientes son iguales. EF corresponde a BC, por lo tanto EF = BC = 10.",
      pasos: [
        { pre: "Correspondencia de lados: ", math: "BC \\leftrightarrow EF \\implies EF = BC = 10" }
      ]
    },

    {
      id: "ce3",
      tipo: "ejercicio",
      svgDiagram: "ce3-ala",
      etiqueta: "Congruencia · Ejercicio 3 / 5",
      pregunta: "En △ABC y △DEF se cumple que ∠A = ∠D = 60°, AB = DE = 8 y ∠B = ∠E = 50°. ¿Qué criterio de congruencia aplica?",
      math_pregunta: "\\angle A = \\angle D = 60^\\circ,\\quad AB = DE = 8,\\quad \\angle B = \\angle E = 50^\\circ",
      opciones: ["LAL", "LAA", "ALA"],
      correcta: 2,
      explicacion: "El lado AB = DE está comprendido entre los ángulos ∠A = ∠D y ∠B = ∠E. Eso es exactamente el criterio ALA: Ángulo–Lado–Ángulo.",
      pasos: []
    },

    {
      id: "ce4",
      tipo: "ejercicio",
      svgDiagram: "ce4-aaa",
      etiqueta: "Congruencia · Ejercicio 4 / 5",
      pregunta: "Dos triángulos tienen sus tres ángulos iguales: ∠A = ∠D, ∠B = ∠E, ∠C = ∠F. ¿Se puede concluir que son congruentes?",
      math_pregunta: "\\angle A = \\angle D,\\quad \\angle B = \\angle E,\\quad \\angle C = \\angle F",
      opciones: [
        "Sí, por el criterio AAA",
        "Sí, ángulos iguales siempre implican congruencia",
        "No, pueden ser semejantes pero de distinto tamaño"
      ],
      correcta: 2,
      explicacion: "AAA garantiza semejanza, no congruencia. Dos triángulos pueden tener los mismos ángulos y ser de distinto tamaño: uno es simplemente una ampliación del otro.",
      pasos: []
    },

    {
      id: "ce5",
      tipo: "ejercicio",
      svgDiagram: "ce5-angulo",
      etiqueta: "Congruencia · Ejercicio 5 / 5",
      pregunta: "Si △PQR ≅ △XYZ, ∠P = 55° y ∠Q = 75°, ¿cuánto mide ∠Z?",
      math_pregunta: "\\triangle PQR \\cong \\triangle XYZ,\\quad \\angle P = 55^\\circ,\\quad \\angle Q = 75^\\circ",
      opciones: ["55°", "75°", "50°"],
      correcta: 2,
      explicacion: "Primero se calcula ∠R = 180° − 55° − 75° = 50°. Por congruencia △PQR ≅ △XYZ, el vértice Z corresponde al vértice R, por lo que ∠Z = ∠R = 50°.",
      pasos: [
        { pre: "Tercer ángulo de △PQR: ", math: "\\angle R = 180^\\circ - 55^\\circ - 75^\\circ = 50^\\circ" },
        { pre: "Por congruencia (Z ↔ R): ", math: "\\angle Z = \\angle R = 50^\\circ" }
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

    // ── Ejemplos y ejercicios AA ───────────────────────────────────────────────
    {
      id: "e14a",
      tipo: "ejemplo",
      titulo: "Ejemplo AA — 1",
      etiqueta: "Criterio Ángulo–Ángulo en acción",
      svgDiagram: "se-aa-ej1",
      enunciado: "¿Son semejantes △ABC y △DEF si ∠A = ∠D = 70° y ∠B = ∠E = 60°?",
      datos: [],
      pasos: [
        { pre: "Dos ángulos coinciden: ", math: "\\angle A = \\angle D = 70^\\circ \\checkmark" },
        { pre: "Segundo par: ", math: "\\angle B = \\angle E = 60^\\circ \\checkmark" },
        { pre: "Tercer ángulo se deduce: ", math: "\\angle C = \\angle F = 180^\\circ - 70^\\circ - 60^\\circ = 50^\\circ" },
        { pre: "Conclusión (AA): ", math: "\\triangle ABC \\sim \\triangle DEF" }
      ]
    },
    {
      id: "e14b",
      tipo: "ejemplo",
      titulo: "Ejemplo AA — 2",
      etiqueta: "Encontrar la razón de semejanza",
      svgDiagram: "se-aa-ej2",
      enunciado: "△ABC ~ △DEF por AA. Si AB = 6 y DE = 4, ¿cuál es la razón de semejanza?",
      datos: [],
      pasos: [
        { pre: "Razón de semejanza: ", math: "k = \\dfrac{AB}{DE} = \\dfrac{6}{4} = \\dfrac{3}{2}" },
        { pre: "Lados correspondientes: ", math: "\\dfrac{BC}{EF} = \\dfrac{CA}{FD} = \\dfrac{3}{2}" },
        { pre: "Si BC = 9, entonces: ", math: "EF = \\dfrac{9}{\\;3/2\\;} = 6" }
      ]
    },
    {
      id: "s14a",
      tipo: "ejercicio",
      svgDiagram: "se-aa-ej1",
      etiqueta: "AA · Ejercicio 1 / 3",
      pregunta: "En △ABC y △DEF se sabe que ∠A = ∠D = 50° y ∠B = ∠E = 70°. ¿Son semejantes?",
      math_pregunta: "\\angle A = \\angle D = 50^\\circ,\\quad \\angle B = \\angle E = 70^\\circ",
      opciones: ["No, faltan datos de lados", "Sí, por criterio AA", "Solo si sus lados son iguales"],
      correcta: 1,
      explicacion: "Con dos pares de ángulos iguales se aplica AA. El tercer ángulo (60°) queda determinado automáticamente. No se necesitan datos de lados.",
      pasos: []
    },
    {
      id: "s14b",
      tipo: "ejercicio",
      svgDiagram: "se-aa-ej2",
      etiqueta: "AA · Ejercicio 2 / 3",
      pregunta: "△ABC ~ △DEF con k = 3/2. Si AB = 6 y BC = 9, ¿cuánto mide EF?",
      math_pregunta: "k = \\tfrac{3}{2},\\quad AB = 6,\\quad BC = 9",
      opciones: ["4", "6", "8"],
      correcta: 1,
      explicacion: "EF corresponde a BC. Como k = BC/EF = 3/2, despejamos: EF = BC·(2/3) = 9·(2/3) = 6.",
      pasos: [
        { pre: "Despejar EF: ", math: "EF = BC \\cdot \\dfrac{2}{3} = 9 \\cdot \\dfrac{2}{3} = 6" }
      ]
    },
    {
      id: "s14c",
      tipo: "ejercicio",
      svgDiagram: "se-aa-ej1",
      etiqueta: "AA · Ejercicio 3 / 3",
      pregunta: "En △PQR, ∠P = 65° y ∠Q = 80°. En △XYZ, ∠X = 65° y ∠Z = 35°. ¿Son semejantes?",
      math_pregunta: "\\triangle PQR\\!:\\; \\angle P = 65^\\circ,\\; \\angle Q = 80^\\circ \\quad \\triangle XYZ\\!:\\; \\angle X = 65^\\circ,\\; \\angle Z = 35^\\circ",
      opciones: ["No, ∠Q ≠ ∠Y", "Sí, ∠P = ∠X y ∠R = ∠Z (AA)", "Solo si también tienen un lado igual"],
      correcta: 1,
      explicacion: "∠R = 180°−65°−80° = 35° = ∠Z. Con ∠P = ∠X y ∠R = ∠Z se cumple AA: △PQR ~ △XYZ.",
      pasos: [
        { pre: "Tercer ángulo: ", math: "\\angle R = 180^\\circ - 65^\\circ - 80^\\circ = 35^\\circ = \\angle Z \\checkmark" },
        { pre: "AA: ", math: "\\triangle PQR \\sim \\triangle XYZ" }
      ]
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

    // ── Ejemplos y ejercicios LLL ─────────────────────────────────────────────
    {
      id: "e15a",
      tipo: "ejemplo",
      titulo: "Ejemplo LLL — 1",
      etiqueta: "Verificar proporcionalidad de los tres lados",
      svgDiagram: "se-lll-ej1",
      enunciado: "¿Son semejantes △ABC con lados 4, 8, 6 y △DEF con lados 6, 12, 9?",
      datos: [],
      pasos: [
        { pre: "Par azul: ", math: "\\dfrac{AB}{DE} = \\dfrac{4}{6} = \\dfrac{2}{3}" },
        { pre: "Par verde: ", math: "\\dfrac{BC}{EF} = \\dfrac{8}{12} = \\dfrac{2}{3}" },
        { pre: "Par acento: ", math: "\\dfrac{CA}{FD} = \\dfrac{6}{9} = \\dfrac{2}{3}" },
        { pre: "Los tres cocientes iguales → ", math: "\\triangle ABC \\sim \\triangle DEF \\;(\\text{LLL}),\\; k = \\dfrac{3}{2}" }
      ]
    },
    {
      id: "e15b",
      tipo: "ejemplo",
      titulo: "Ejemplo LLL — 2",
      etiqueta: "Identificar la razón de semejanza",
      svgDiagram: "se-lll-ej2",
      enunciado: "△ABC tiene lados 10, 20, 15. △DEF tiene lados 6, 12, 9. ¿Son semejantes? ¿Cuál es k?",
      datos: [],
      pasos: [
        { pre: "Dividir lados correspondientes: ", math: "\\dfrac{10}{6} = \\dfrac{20}{12} = \\dfrac{15}{9} = \\dfrac{5}{3}" },
        { pre: "Razón de semejanza: ", math: "k = \\dfrac{5}{3}" },
        { pre: "Conclusión (LLL): ", math: "\\triangle ABC \\sim \\triangle DEF" }
      ]
    },
    {
      id: "s15a",
      tipo: "ejercicio",
      svgDiagram: "se-lll-ej1",
      etiqueta: "LLL · Ejercicio 1 / 3",
      pregunta: "Un triángulo tiene lados 3, 5, 7 y otro tiene lados 6, 10, 14. ¿Son semejantes? ¿Cuál es k?",
      math_pregunta: "\\triangle_1\\!: 3,5,7 \\quad \\triangle_2\\!: 6,10,14",
      opciones: ["No son semejantes", "Sí, k = 2", "Sí, k = 3"],
      correcta: 1,
      explicacion: "6/3 = 10/5 = 14/7 = 2. Los tres cocientes son iguales, se cumple LLL con k = 2.",
      pasos: [
        { pre: "Cocientes: ", math: "\\dfrac{6}{3} = \\dfrac{10}{5} = \\dfrac{14}{7} = 2 \\implies k = 2" }
      ]
    },
    {
      id: "s15b",
      tipo: "ejercicio",
      svgDiagram: "se-lll-ej2",
      etiqueta: "LLL · Ejercicio 2 / 3",
      pregunta: "△ABC ~ △DEF (LLL). AB = 8, BC = 10, DE = 4. ¿Cuánto mide EF?",
      math_pregunta: "AB = 8,\\; BC = 10,\\; DE = 4",
      opciones: ["4", "5", "6"],
      correcta: 1,
      explicacion: "k = AB/DE = 8/4 = 2. Entonces EF = BC/k = 10/2 = 5.",
      pasos: [
        { pre: "k = AB/DE = ", math: "\\dfrac{8}{4} = 2" },
        { pre: "EF = BC/k = ", math: "\\dfrac{10}{2} = 5" }
      ]
    },
    {
      id: "s15c",
      tipo: "ejercicio",
      svgDiagram: "se-lll-ej1",
      etiqueta: "LLL · Ejercicio 3 / 3",
      pregunta: "Triángulos con lados 12, 16, 20 y 3, 4, 5. ¿Cuál es la razón de semejanza del mayor al menor?",
      math_pregunta: "\\triangle_1\\!: 12,16,20 \\quad \\triangle_2\\!: 3,4,5",
      opciones: ["k = 3", "k = 4", "k = 5"],
      correcta: 1,
      explicacion: "12/3 = 16/4 = 20/5 = 4. La razón de semejanza del triángulo mayor al menor es k = 4.",
      pasos: [
        { pre: "Cocientes: ", math: "\\dfrac{12}{3} = \\dfrac{16}{4} = \\dfrac{20}{5} = 4" }
      ]
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

    // ── Ejemplos y ejercicios LAL ─────────────────────────────────────────────
    {
      id: "e16a",
      tipo: "ejemplo",
      titulo: "Ejemplo LAL — 1",
      etiqueta: "Ángulo comprendido entre dos lados proporcionales",
      svgDiagram: "se-lal-ej1",
      enunciado: "△ABC y △DEF tienen AB/DE = AC/DF = 2 y ∠A = ∠D = 55°. ¿Son semejantes?",
      datos: [],
      pasos: [
        { pre: "Primer par de lados proporcionales: ", math: "\\dfrac{AB}{DE} = 2 \\checkmark" },
        { pre: "Ángulo comprendido entre ellos: ", math: "\\angle A = \\angle D = 55^\\circ \\checkmark" },
        { pre: "Segundo par de lados proporcionales: ", math: "\\dfrac{AC}{DF} = 2 \\checkmark" },
        { pre: "El ángulo está entre los dos lados → ", math: "\\triangle ABC \\sim \\triangle DEF \\;(\\text{LAL})" }
      ]
    },
    {
      id: "e16b",
      tipo: "ejemplo",
      titulo: "Ejemplo LAL — 2",
      etiqueta: "Encontrar un lado desconocido con LAL",
      svgDiagram: "se-lal-ej2",
      enunciado: "△ABC ~ △DEF (LAL). AB = 8, AC = 12, ∠A = ∠D = 40°, DE = 4. ¿Cuánto mide DF?",
      datos: [],
      pasos: [
        { pre: "Razón de semejanza: ", math: "k = \\dfrac{AB}{DE} = \\dfrac{8}{4} = 2" },
        { pre: "Ángulo comprendido coincide: ", math: "\\angle A = \\angle D = 40^\\circ \\checkmark" },
        { pre: "Despejar DF: ", math: "DF = \\dfrac{AC}{k} = \\dfrac{12}{2} = 6" }
      ]
    },
    {
      id: "s16a",
      tipo: "ejercicio",
      svgDiagram: "se-lal-ej1",
      etiqueta: "LAL · Ejercicio 1 / 3",
      pregunta: "△ABC tiene AB = 6, AC = 10, ∠A = 45°. △DEF tiene DE = 3, DF = 5, ∠D = 45°. ¿Son semejantes?",
      math_pregunta: "AB = 6,\\; AC = 10,\\; \\angle A = 45^\\circ \\quad DE = 3,\\; DF = 5,\\; \\angle D = 45^\\circ",
      opciones: ["No, el ángulo es incorrecto", "Sí, por criterio LAL", "Solo si BC = EF también"],
      correcta: 1,
      explicacion: "AB/DE = 6/3 = 2, AC/DF = 10/5 = 2, y ∠A = ∠D = 45° (ángulo comprendido). Se cumple LAL.",
      pasos: []
    },
    {
      id: "s16b",
      tipo: "ejercicio",
      svgDiagram: "se-lal-ej2",
      etiqueta: "LAL · Ejercicio 2 / 3",
      pregunta: "△ABC ~ △DEF (LAL). AB = 9, AC = 15, DE = 6, ∠A = ∠D. ¿Cuánto mide DF?",
      math_pregunta: "AB = 9,\\; AC = 15,\\; DE = 6",
      opciones: ["8", "9", "10"],
      correcta: 2,
      explicacion: "k = AB/DE = 9/6 = 3/2. DF = AC/k = 15/(3/2) = 15 × 2/3 = 10.",
      pasos: [
        { pre: "k = AB/DE = ", math: "\\dfrac{9}{6} = \\dfrac{3}{2}" },
        { pre: "DF = AC/k = ", math: "\\dfrac{15}{\\;3/2\\;} = 10" }
      ]
    },
    {
      id: "s16c",
      tipo: "ejercicio",
      svgDiagram: "se-lal-ej1",
      etiqueta: "LAL · Ejercicio 3 / 3",
      pregunta: "△PQR ~ △XYZ (LAL) con k = 3 y ∠P = ∠X. Si el área de △XYZ es 8 cm², ¿cuál es el área de △PQR?",
      math_pregunta: "k = 3,\\quad A_{\\triangle XYZ} = 8\\text{ cm}^2",
      opciones: ["24 cm²", "48 cm²", "72 cm²"],
      correcta: 2,
      explicacion: "Las áreas se relacionan como k². Área_PQR = k² × Área_XYZ = 9 × 8 = 72 cm².",
      pasos: [
        { pre: "Razón de áreas = k² = ", math: "3^2 = 9" },
        { pre: "Área PQR = ", math: "9 \\times 8 = 72 \\text{ cm}^2" }
      ]
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

    // ── Ejercicios avanzados: áreas, Pitágoras, Thales, sombras ──────────────
    {
      id: "se1",
      tipo: "ejercicio",
      svgDiagram: "se-areas",
      etiqueta: "Áreas · Ejercicio 1 / 5",
      pregunta: "△ABC ~ △DEF con k = 4. Si el área de △DEF es 7 cm², ¿cuál es el área de △ABC?",
      math_pregunta: "k = 4,\\quad A_{\\triangle DEF} = 7\\text{ cm}^2",
      opciones: ["28 cm²", "56 cm²", "112 cm²"],
      correcta: 2,
      explicacion: "Las áreas se relacionan como k². Área_ABC = k² × Área_DEF = 16 × 7 = 112 cm².",
      pasos: [
        { pre: "Razón de áreas: ", math: "k^2 = 4^2 = 16" },
        { pre: "Área ABC: ", math: "16 \\times 7 = 112 \\text{ cm}^2" }
      ]
    },
    {
      id: "se2",
      tipo: "ejercicio",
      svgDiagram: "se-areas",
      etiqueta: "Áreas · Ejercicio 2 / 5",
      pregunta: "Dos triángulos semejantes tienen áreas en razón 25:4. ¿Cuál es la razón de sus lados correspondientes?",
      math_pregunta: "\\dfrac{A_1}{A_2} = \\dfrac{25}{4}",
      opciones: ["5:2", "25:4", "√5:2"],
      correcta: 0,
      explicacion: "Si la razón de áreas es k², entonces k = √(25/4) = 5/2. La razón de lados es 5:2.",
      pasos: [
        { pre: "Razón de lados: ", math: "k = \\sqrt{\\dfrac{25}{4}} = \\dfrac{5}{2}" }
      ]
    },
    {
      id: "se3",
      tipo: "ejercicio",
      svgDiagram: "se-pitagoras",
      etiqueta: "Pitágoras · Ejercicio 3 / 5",
      pregunta: "En el triángulo rectángulo, la altura h divide a la hipotenusa en segmentos AH = 4 y HB = 9. ¿Cuánto mide h?",
      math_pregunta: "AH = 4,\\quad HB = 9,\\quad h = CH = ?",
      opciones: ["3", "6", "√13"],
      correcta: 1,
      explicacion: "Por el teorema de la altura (media geométrica): h² = AH · HB = 4 · 9 = 36, por lo tanto h = 6.",
      pasos: [
        { pre: "Teorema de la altura: ", math: "h^2 = AH \\cdot HB = 4 \\cdot 9 = 36" },
        { pre: "Resultado: ", math: "h = 6" }
      ]
    },
    {
      id: "se4",
      tipo: "ejercicio",
      svgDiagram: "se-paralela",
      etiqueta: "Thales · Ejercicio 4 / 5",
      pregunta: "DE ∥ BC en △ABC. Si AD = 4, DB = 8 y AE = 3, ¿cuánto mide EC?",
      math_pregunta: "DE \\parallel BC,\\quad AD = 4,\\; DB = 8,\\; AE = 3,\\; EC = ?",
      opciones: ["4", "6", "8"],
      correcta: 1,
      explicacion: "Por el teorema de Tales (proporcionalidad): AD/DB = AE/EC → 4/8 = 3/EC → EC = 3·8/4 = 6.",
      pasos: [
        { pre: "Teorema de Tales: ", math: "\\dfrac{AD}{DB} = \\dfrac{AE}{EC} \\implies \\dfrac{4}{8} = \\dfrac{3}{EC}" },
        { pre: "Despejar EC: ", math: "EC = \\dfrac{3 \\times 8}{4} = 6" }
      ]
    },
    {
      id: "se5",
      tipo: "ejercicio",
      svgDiagram: "se-sombra",
      etiqueta: "Sombras · Ejercicio 5 / 5",
      pregunta: "Un árbol de 4 m proyecta una sombra de 6 m. Un poste proyecta una sombra de 9 m. ¿Cuánto mide el poste?",
      math_pregunta: "\\dfrac{\\text{altura árbol}}{\\text{sombra árbol}} = \\dfrac{\\text{altura poste}}{\\text{sombra poste}}",
      opciones: ["5 m", "6 m", "7 m"],
      correcta: 1,
      explicacion: "Por semejanza de triángulos: altura/sombra es constante. x/9 = 4/6 → x = 9·4/6 = 6 m.",
      pasos: [
        { pre: "Planteamiento: ", math: "\\dfrac{x}{9} = \\dfrac{4}{6}" },
        { pre: "Despejar x: ", math: "x = \\dfrac{9 \\times 4}{6} = 6 \\text{ m}" }
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
