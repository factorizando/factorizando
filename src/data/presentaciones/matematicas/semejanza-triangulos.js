// Datos de la presentación: Congruencia y Semejanza de Triángulos

export const PRESENTACION = {
  id: "semejanza-triangulos",
  titulo: "Congruencia y Semejanza de Triángulos",
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
          titulo: "Congruencia y Semejanza",
          subtitulo: "Criterios de congruencia y semejanza de triángulos",
        },
      ],
    },
    {
      id: 1,
      tipo: "lienzo",
      titulo: "Congruencia de Triángulos",
      bloques: [
        {
          tipo: "definicion",
          termino: "Congruencia de Triángulos",
          texto: "",
        },
        {
          tipo: "figura",
          clave: "triangulos-congruentes",
        },
        {
          tipo: "lista",
          items: [
            {
              texto: "① Lados correspondientes iguales",
              math: "AB = DE,\\quad BC = EF,\\quad CA = FD",
            },
            {
              texto: "② Ángulos correspondientes iguales",
              math: "\\angle A = \\angle D,\\quad \\angle B = \\angle E,\\quad \\angle C = \\angle F",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      tipo: "lienzo",
      etiqueta: "Criterios LLL y LAL",
      titulo: "Criterios de Congruencia",
      bloques: [
        {
          tipo: "lista",
          estilo: "numerada",
          items: [
            {
              sigla: "LLL",
              nombre: "Lado–Lado–Lado",
              desc: "Los tres pares de lados correspondientes son iguales.",
            },
            {
              sigla: "LAL",
              nombre: "Lado–Ángulo–Lado",
              desc: "Dos pares de lados iguales y el ángulo comprendido entre ellos igual.",
            },
          ],
        },
      ],
    },
    {
      id: "2b",
      tipo: "lienzo",
      etiqueta: "Criterios ALA y LAA",
      titulo: "Criterios de Congruencia",
      bloques: [
        {
          tipo: "lista",
          estilo: "numerada",
          items: [
            {
              sigla: "ALA",
              nombre: "Ángulo–Lado–Ángulo",
              desc: "Dos pares de ángulos iguales y el lado comprendido entre ellos igual.",
            },
            {
              sigla: "LAA",
              nombre: "Lado–Ángulo–Ángulo",
              desc: "Un par de lados y dos pares de ángulos iguales (el lado no está entre los dos ángulos).",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      tipo: "lienzo",
      etiqueta: "Lado–Lado–Lado",
      titulo: "Criterio LLL",
      bloques: [
        {
          tipo: "destacado",
          texto: "Si los tres pares de lados correspondientes son iguales, los triángulos son congruentes.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "lll-cong-detalle",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "AB = DE,\\; BC = EF,\\; CA = FD \\implies \\triangle ABC \\cong \\triangle DEF",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Si los tres lados coinciden en longitud, la figura queda completamente determinada: no puede tener diferente forma ni diferente tamaño.",
        },
      ],
    },
    {
      id: 4,
      tipo: "lienzo",
      etiqueta: "Verificar congruencia con tres lados",
      titulo: "Ejemplo — Criterio LLL",
      bloques: [
        {
          tipo: "destacado",
          texto: "Determina si △ABC y △DEF son congruentes.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-cong-lll",
        },
        {
          tipo: "pasos",
          ancho: 7,
          metodo: "Datos: [object Object],[object Object]",
          pasos: [
            {
              pre: "Primer par de lados: ",
              math: "AB = DE = 5 \\checkmark",
            },
            {
              pre: "Segundo par: ",
              math: "BC = EF = 6 \\checkmark",
            },
            {
              pre: "Tercer par: ",
              math: "CA = FD = 7 \\checkmark",
            },
            {
              pre: "Los tres pares de lados son iguales → ",
              math: "\\triangle ABC \\cong \\triangle DEF \\;(\\text{LLL})",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      tipo: "lienzo",
      etiqueta: "Lado–Ángulo–Lado",
      titulo: "Criterio LAL",
      bloques: [
        {
          tipo: "destacado",
          texto: "Si dos pares de lados correspondientes son iguales y el ángulo comprendido entre ellos es igual, los triángulos son congruentes.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "lal-cong-detalle",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "AB = DE,\\; \\angle A = \\angle D,\\; AC = DF \\implies \\triangle ABC \\cong \\triangle DEF",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "El ángulo comprendido fija la apertura entre los dos lados. Con esa apertura y esas longitudes, el tercer lado y los demás ángulos quedan completamente determinados.",
        },
      ],
    },
    {
      id: 6,
      tipo: "lienzo",
      etiqueta: "Verificar congruencia con dos lados y ángulo comprendido",
      titulo: "Ejemplo — Criterio LAL",
      bloques: [
        {
          tipo: "destacado",
          texto: "¿Son congruentes △ABC y △DEF?",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-cong-lal",
        },
        {
          tipo: "pasos",
          ancho: 7,
          metodo: "Datos: [object Object],[object Object]",
          pasos: [
            {
              pre: "Primer lado: ",
              math: "AB = DE = 4 \\checkmark",
            },
            {
              pre: "Ángulo comprendido: ",
              math: "\\angle A = \\angle D = 60^\\circ \\checkmark",
            },
            {
              pre: "Segundo lado: ",
              math: "AC = DF = 6 \\checkmark",
            },
            {
              pre: "El ángulo está entre los dos lados dados → ",
              math: "\\triangle ABC \\cong \\triangle DEF \\;(\\text{LAL})",
            },
          ],
        },
      ],
    },
    {
      id: 7,
      tipo: "lienzo",
      etiqueta: "Ángulo–Lado–Ángulo",
      titulo: "Criterio ALA",
      bloques: [
        {
          tipo: "destacado",
          texto: "Si dos pares de ángulos son iguales y el lado comprendido entre ellos es igual, los triángulos son congruentes.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "ala-cong-detalle",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "\\angle A = \\angle D,\\; AB = DE,\\; \\angle B = \\angle E \\implies \\triangle ABC \\cong \\triangle DEF",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "El lado fija la escala. Los dos ángulos adyacentes a ese lado dirigen los otros dos lados, que se encuentran en un único punto, determinando el triángulo por completo.",
        },
        {
          tipo: "formula",
          math: "\\angle C = 180^\\circ - \\angle A - \\angle B = \\angle F \\;(\\text{queda determinado})",
        },
      ],
    },
    {
      id: 8,
      tipo: "lienzo",
      etiqueta: "Verificar congruencia con ángulo-lado-ángulo",
      titulo: "Ejemplo — Criterio ALA",
      bloques: [
        {
          tipo: "destacado",
          texto: "¿Son congruentes △ABC y △DEF?",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-cong-ala",
        },
        {
          tipo: "pasos",
          ancho: 7,
          metodo: "Datos: [object Object],[object Object]",
          pasos: [
            {
              pre: "Primer ángulo: ",
              math: "\\angle A = \\angle D = 45^\\circ \\checkmark",
            },
            {
              pre: "Lado comprendido: ",
              math: "AB = DE = 8 \\checkmark",
            },
            {
              pre: "Segundo ángulo: ",
              math: "\\angle B = \\angle E = 75^\\circ \\checkmark",
            },
            {
              pre: "Tercer ángulo deducido: ",
              math: "\\angle C = \\angle F = 180^\\circ - 45^\\circ - 75^\\circ = 60^\\circ",
            },
            {
              pre: "El lado AB está entre los dos ángulos dados → ",
              math: "\\triangle ABC \\cong \\triangle DEF \\;(\\text{ALA})",
            },
          ],
        },
      ],
    },
    {
      id: 9,
      tipo: "lienzo",
      etiqueta: "Lado–Ángulo–Ángulo",
      titulo: "Criterio LAA",
      bloques: [
        {
          tipo: "destacado",
          texto: "Si un par de lados correspondientes son iguales y dos pares de ángulos son iguales (el lado no está entre los dos ángulos), los triángulos son congruentes.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "laa-cong-detalle",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "\\angle A = \\angle D,\\; \\angle B = \\angle E,\\; BC = EF \\implies \\triangle ABC \\cong \\triangle DEF",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Con dos ángulos conocidos, el tercero queda determinado (suma 180°). Eso convierte a LAA en un caso de ALA, que ya garantiza la congruencia.",
        },
        {
          tipo: "formula",
          math: "\\angle C = 180^\\circ - \\angle A - \\angle B = \\angle F \\implies \\text{equivalente a ALA}",
        },
      ],
    },
    {
      id: 10,
      tipo: "lienzo",
      etiqueta: "Verificar congruencia con lado-ángulo-ángulo",
      titulo: "Ejemplo — Criterio LAA",
      bloques: [
        {
          tipo: "destacado",
          texto: "¿Son congruentes △ABC y △DEF? (BC no está entre los ángulos dados)",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-cong-laa",
        },
        {
          tipo: "pasos",
          ancho: 7,
          metodo: "Datos: [object Object],[object Object]",
          pasos: [
            {
              pre: "Primer ángulo: ",
              math: "\\angle A = \\angle D = 50^\\circ \\checkmark",
            },
            {
              pre: "Segundo ángulo: ",
              math: "\\angle B = \\angle E = 70^\\circ \\checkmark",
            },
            {
              pre: "Tercer ángulo deducido: ",
              math: "\\angle C = \\angle F = 180^\\circ - 50^\\circ - 70^\\circ = 60^\\circ",
            },
            {
              pre: "Lado (no comprendido entre los ángulos dados): ",
              math: "BC = EF = 5 \\checkmark",
            },
            {
              pre: "Se cumplen las condiciones LAA → ",
              math: "\\triangle ABC \\cong \\triangle DEF \\;(\\text{LAA})",
            },
          ],
        },
      ],
    },
    {
      id: "ce1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Congruencia · Ejercicio 1 / 5",
          enunciado: "Dos triángulos tienen sus tres pares de lados correspondientes iguales: AB = DE, BC = EF y CA = FD. ¿Qué criterio garantiza su congruencia?",
          opciones: ["LAL", "LLL", "LAA"],
          correcta: 1,
          explicacion: "LLL (Lado-Lado-Lado): si los tres pares de lados correspondientes son iguales, los triángulos son necesariamente congruentes.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ce1-lll",
        },
      ],
    },
    {
      id: "ce2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Congruencia · Ejercicio 2 / 5",
          enunciado: "△ABC ≅ △DEF. Si AB = 7, BC = 10 y CA = 8, ¿cuánto mide EF?",
          opciones: ["7", "8", "10"],
          correcta: 2,
          explicacion: "En triángulos congruentes los lados correspondientes son iguales. EF corresponde a BC, por lo tanto EF = BC = 10.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ce2-medidas",
        },
      ],
    },
    {
      id: "ce3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Congruencia · Ejercicio 3 / 5",
          enunciado: "En △ABC y △DEF se cumple que ∠A = ∠D = 60°, AB = DE = 8 y ∠B = ∠E = 50°. ¿Qué criterio de congruencia aplica?",
          opciones: ["LAL", "LAA", "ALA"],
          correcta: 2,
          explicacion: "El lado AB = DE está comprendido entre los ángulos ∠A = ∠D y ∠B = ∠E. Eso es exactamente el criterio ALA: Ángulo–Lado–Ángulo.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ce3-ala",
        },
      ],
    },
    {
      id: "ce4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Congruencia · Ejercicio 4 / 5",
          enunciado: "Dos triángulos tienen sus tres ángulos iguales: ∠A = ∠D, ∠B = ∠E, ∠C = ∠F. ¿Se puede concluir que son congruentes?",
          opciones: [
            "Sí, por el criterio AAA",
            "Sí, ángulos iguales siempre implican congruencia",
            "No, pueden ser semejantes pero de distinto tamaño",
          ],
          correcta: 2,
          explicacion: "AAA garantiza semejanza, no congruencia. Dos triángulos pueden tener los mismos ángulos y ser de distinto tamaño: uno es simplemente una ampliación del otro.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ce4-aaa",
        },
      ],
    },
    {
      id: "ce5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Congruencia · Ejercicio 5 / 5",
          enunciado: "Si △PQR ≅ △XYZ, ∠P = 55° y ∠Q = 75°, ¿cuánto mide ∠Z?",
          opciones: ["55°", "75°", "50°"],
          correcta: 2,
          explicacion: "Primero se calcula ∠R = 180° − 55° − 75° = 50°. Por congruencia △PQR ≅ △XYZ, el vértice Z corresponde al vértice R, por lo que ∠Z = ∠R = 50°.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ce5-angulo",
        },
      ],
    },
    {
      id: 11,
      tipo: "lienzo",
      titulo: "Semejanza de Triángulos",
      bloques: [
        {
          tipo: "definicion",
          termino: "Semejanza de Triángulos",
          texto: "",
        },
        {
          tipo: "figura",
          clave: "triangulos-semejantes",
        },
        {
          tipo: "lista",
          items: [
            {
              texto: "① Ángulos correspondientes iguales",
              math: "\\angle A = \\angle D,\\quad \\angle B = \\angle E,\\quad \\angle C = \\angle F",
            },
            {
              texto: "② Lados correspondientes proporcionales",
              math: "\\dfrac{AB}{DE} = \\dfrac{BC}{EF} = \\dfrac{CA}{FD}",
            },
          ],
        },
      ],
    },
    {
      id: 12,
      tipo: "lienzo",
      etiqueta: "Factor de escala k",
      titulo: "Razón de Semejanza",
      bloques: [
        {
          tipo: "formula",
          math: "k = \\dfrac{\\text{lado de } \\triangle_1}{\\text{lado correspondiente de } \\triangle_2}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "razon-semejanza",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "k > 1",
              texto: "el primer triángulo es el mayor",
            },
            {
              math: "k < 1",
              texto: "el primer triángulo es el menor",
            },
            {
              math: "k = 1",
              texto: "los triángulos son congruentes",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Las áreas se relacionan como k², no como k.",
        },
      ],
    },
    {
      id: 13,
      tipo: "lienzo",
      etiqueta: "Tres formas de demostrar semejanza",
      titulo: "Criterios de Semejanza",
      bloques: [
        {
          tipo: "lista",
          estilo: "numerada",
          items: [
            {
              sigla: "AA",
              nombre: "Ángulo–Ángulo",
              desc: "Dos ángulos de un triángulo son iguales a dos ángulos del otro.",
            },
            {
              sigla: "LLL",
              nombre: "Lado–Lado–Lado",
              desc: "Los tres pares de lados correspondientes son proporcionales.",
            },
            {
              sigla: "LAL",
              nombre: "Lado–Ángulo–Lado",
              desc: "Dos lados proporcionales y el ángulo comprendido entre ellos igual.",
            },
          ],
        },
      ],
    },
    {
      id: 14,
      tipo: "lienzo",
      etiqueta: "Ángulo–Ángulo",
      titulo: "Criterio AA",
      bloques: [
        {
          tipo: "destacado",
          texto: "Si dos ángulos de un triángulo son iguales a dos ángulos de otro, los triángulos son semejantes.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "aa-detalle",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "\\angle A = \\angle D \\;\\text{ y }\\; \\angle B = \\angle E \\implies \\triangle ABC \\sim \\triangle DEF",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "La suma de los ángulos interiores siempre es 180°, por lo que el tercer ángulo queda determinado automáticamente.",
        },
        {
          tipo: "formula",
          math: "\\angle C = 180^\\circ - \\angle A - \\angle B = 180^\\circ - \\angle D - \\angle E = \\angle F",
        },
      ],
    },
    {
      id: "e14a",
      tipo: "lienzo",
      etiqueta: "Criterio Ángulo–Ángulo en acción",
      titulo: "Ejemplo AA — 1",
      bloques: [
        {
          tipo: "destacado",
          texto: "¿Son semejantes △ABC y △DEF si ∠A = ∠D = 70° y ∠B = ∠E = 60°?",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "se-aa-ej1",
        },
        {
          tipo: "pasos",
          ancho: 7,
          metodo: "Datos: ",
          pasos: [
            {
              pre: "Dos ángulos coinciden: ",
              math: "\\angle A = \\angle D = 70^\\circ \\checkmark",
            },
            {
              pre: "Segundo par: ",
              math: "\\angle B = \\angle E = 60^\\circ \\checkmark",
            },
            {
              pre: "Tercer ángulo se deduce: ",
              math: "\\angle C = \\angle F = 180^\\circ - 70^\\circ - 60^\\circ = 50^\\circ",
            },
            {
              pre: "Conclusión (AA): ",
              math: "\\triangle ABC \\sim \\triangle DEF",
            },
          ],
        },
      ],
    },
    {
      id: "e14b",
      tipo: "lienzo",
      etiqueta: "Encontrar la razón de semejanza",
      titulo: "Ejemplo AA — 2",
      bloques: [
        {
          tipo: "destacado",
          texto: "△ABC ~ △DEF por AA. Si AB = 6 y DE = 4, ¿cuál es la razón de semejanza?",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "se-aa-ej2",
        },
        {
          tipo: "pasos",
          ancho: 7,
          metodo: "Datos: ",
          pasos: [
            {
              pre: "Razón de semejanza: ",
              math: "k = \\dfrac{AB}{DE} = \\dfrac{6}{4} = \\dfrac{3}{2}",
            },
            {
              pre: "Lados correspondientes: ",
              math: "\\dfrac{BC}{EF} = \\dfrac{CA}{FD} = \\dfrac{3}{2}",
            },
            {
              pre: "Si BC = 9, entonces: ",
              math: "EF = \\dfrac{9}{\\;3/2\\;} = 6",
            },
          ],
        },
      ],
    },
    {
      id: "s14a",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "AA · Ejercicio 1 / 3",
          enunciado: "En △ABC y △DEF se sabe que ∠A = ∠D = 50° y ∠B = ∠E = 70°. ¿Son semejantes?",
          opciones: ["No, faltan datos de lados", "Sí, por criterio AA", "Solo si sus lados son iguales"],
          correcta: 1,
          explicacion: "Con dos pares de ángulos iguales se aplica AA. El tercer ángulo (60°) queda determinado automáticamente. No se necesitan datos de lados.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "se-aa-ej1",
        },
      ],
    },
    {
      id: "s14b",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "AA · Ejercicio 2 / 3",
          enunciado: "△ABC ~ △DEF con k = 3/2. Si AB = 6 y BC = 9, ¿cuánto mide EF?",
          opciones: ["4", "6", "8"],
          correcta: 1,
          explicacion: "EF corresponde a BC. Como k = BC/EF = 3/2, despejamos: EF = BC·(2/3) = 9·(2/3) = 6.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "se-aa-ej2",
        },
      ],
    },
    {
      id: "s14c",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "AA · Ejercicio 3 / 3",
          enunciado: "En △PQR, ∠P = 65° y ∠Q = 80°. En △XYZ, ∠X = 65° y ∠Z = 35°. ¿Son semejantes?",
          opciones: ["No, ∠Q ≠ ∠Y", "Sí, ∠P = ∠X y ∠R = ∠Z (AA)", "Solo si también tienen un lado igual"],
          correcta: 1,
          explicacion: "∠R = 180°−65°−80° = 35° = ∠Z. Con ∠P = ∠X y ∠R = ∠Z se cumple AA: △PQR ~ △XYZ.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "se-aa-ej1",
        },
      ],
    },
    {
      id: 15,
      tipo: "lienzo",
      etiqueta: "Lado–Lado–Lado",
      titulo: "Criterio LLL",
      bloques: [
        {
          tipo: "destacado",
          texto: "Si los tres pares de lados correspondientes son proporcionales, los triángulos son semejantes.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "lll-detalle",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "\\dfrac{AB}{DE} = \\dfrac{BC}{EF} = \\dfrac{CA}{FD} = k \\implies \\triangle ABC \\sim \\triangle DEF",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "La proporcionalidad de los tres lados obliga a que la forma se conserve, lo que implica que los ángulos son necesariamente iguales.",
        },
      ],
    },
    {
      id: "e15a",
      tipo: "lienzo",
      etiqueta: "Verificar proporcionalidad de los tres lados",
      titulo: "Ejemplo LLL — 1",
      bloques: [
        {
          tipo: "destacado",
          texto: "¿Son semejantes △ABC con lados 4, 8, 6 y △DEF con lados 6, 12, 9?",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "se-lll-ej1",
        },
        {
          tipo: "pasos",
          ancho: 7,
          metodo: "Datos: ",
          pasos: [
            {
              pre: "Par azul: ",
              math: "\\dfrac{AB}{DE} = \\dfrac{4}{6} = \\dfrac{2}{3}",
            },
            {
              pre: "Par verde: ",
              math: "\\dfrac{BC}{EF} = \\dfrac{8}{12} = \\dfrac{2}{3}",
            },
            {
              pre: "Par acento: ",
              math: "\\dfrac{CA}{FD} = \\dfrac{6}{9} = \\dfrac{2}{3}",
            },
            {
              pre: "Los tres cocientes iguales → ",
              math: "\\triangle ABC \\sim \\triangle DEF \\;(\\text{LLL}),\\; k = \\dfrac{3}{2}",
            },
          ],
        },
      ],
    },
    {
      id: "e15b",
      tipo: "lienzo",
      etiqueta: "Identificar la razón de semejanza",
      titulo: "Ejemplo LLL — 2",
      bloques: [
        {
          tipo: "destacado",
          texto: "△ABC tiene lados 10, 20, 15. △DEF tiene lados 6, 12, 9. ¿Son semejantes? ¿Cuál es k?",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "se-lll-ej2",
        },
        {
          tipo: "pasos",
          ancho: 7,
          metodo: "Datos: ",
          pasos: [
            {
              pre: "Dividir lados correspondientes: ",
              math: "\\dfrac{10}{6} = \\dfrac{20}{12} = \\dfrac{15}{9} = \\dfrac{5}{3}",
            },
            {
              pre: "Razón de semejanza: ",
              math: "k = \\dfrac{5}{3}",
            },
            {
              pre: "Conclusión (LLL): ",
              math: "\\triangle ABC \\sim \\triangle DEF",
            },
          ],
        },
      ],
    },
    {
      id: "s15a",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "LLL · Ejercicio 1 / 3",
          enunciado: "Un triángulo tiene lados 3, 5, 7 y otro tiene lados 6, 10, 14. ¿Son semejantes? ¿Cuál es k?",
          opciones: ["No son semejantes", "Sí, k = 2", "Sí, k = 3"],
          correcta: 1,
          explicacion: "6/3 = 10/5 = 14/7 = 2. Los tres cocientes son iguales, se cumple LLL con k = 2.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "se-lll-s1",
        },
      ],
    },
    {
      id: "s15b",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "LLL · Ejercicio 2 / 3",
          enunciado: "△ABC ~ △DEF (LLL). AB = 8, BC = 10, DE = 4. ¿Cuánto mide EF?",
          opciones: ["4", "5", "6"],
          correcta: 1,
          explicacion: "k = AB/DE = 8/4 = 2. Entonces EF = BC/k = 10/2 = 5.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "se-lll-s2",
        },
      ],
    },
    {
      id: "s15c",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "LLL · Ejercicio 3 / 3",
          enunciado: "Triángulos con lados 12, 16, 20 y 3, 4, 5. ¿Cuál es la razón de semejanza del mayor al menor?",
          opciones: ["k = 3", "k = 4", "k = 5"],
          correcta: 1,
          explicacion: "12/3 = 16/4 = 20/5 = 4. La razón de semejanza del triángulo mayor al menor es k = 4.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "se-lll-s3",
        },
      ],
    },
    {
      id: 16,
      tipo: "lienzo",
      etiqueta: "Lado–Ángulo–Lado",
      titulo: "Criterio LAL",
      bloques: [
        {
          tipo: "destacado",
          texto: "Si dos pares de lados son proporcionales y el ángulo comprendido entre ellos es igual, los triángulos son semejantes.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "lal-detalle",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "\\dfrac{AB}{DE} = \\dfrac{AC}{DF} \\;\\text{ y }\\; \\angle A = \\angle D \\implies \\triangle ABC \\sim \\triangle DEF",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "El ángulo debe ser el comprendido entre los dos lados (el que queda entre ellos). Si el ángulo fuera otro, el criterio no aplica.",
        },
      ],
    },
    {
      id: "e16a",
      tipo: "lienzo",
      etiqueta: "Ángulo comprendido entre dos lados proporcionales",
      titulo: "Ejemplo LAL — 1",
      bloques: [
        {
          tipo: "destacado",
          texto: "△ABC y △DEF tienen AB/DE = AC/DF = 2 y ∠A = ∠D = 55°. ¿Son semejantes?",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "se-lal-ej1",
        },
        {
          tipo: "pasos",
          ancho: 7,
          metodo: "Datos: ",
          pasos: [
            {
              pre: "Primer par de lados proporcionales: ",
              math: "\\dfrac{AB}{DE} = 2 \\checkmark",
            },
            {
              pre: "Ángulo comprendido entre ellos: ",
              math: "\\angle A = \\angle D = 55^\\circ \\checkmark",
            },
            {
              pre: "Segundo par de lados proporcionales: ",
              math: "\\dfrac{AC}{DF} = 2 \\checkmark",
            },
            {
              pre: "El ángulo está entre los dos lados → ",
              math: "\\triangle ABC \\sim \\triangle DEF \\;(\\text{LAL})",
            },
          ],
        },
      ],
    },
    {
      id: "e16b",
      tipo: "lienzo",
      etiqueta: "Encontrar un lado desconocido con LAL",
      titulo: "Ejemplo LAL — 2",
      bloques: [
        {
          tipo: "destacado",
          texto: "△ABC ~ △DEF (LAL). AB = 8, AC = 12, ∠A = ∠D = 40°, DE = 4. ¿Cuánto mide DF?",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "se-lal-ej2",
        },
        {
          tipo: "pasos",
          ancho: 7,
          metodo: "Datos: ",
          pasos: [
            {
              pre: "Razón de semejanza: ",
              math: "k = \\dfrac{AB}{DE} = \\dfrac{8}{4} = 2",
            },
            {
              pre: "Ángulo comprendido coincide: ",
              math: "\\angle A = \\angle D = 40^\\circ \\checkmark",
            },
            {
              pre: "Despejar DF: ",
              math: "DF = \\dfrac{AC}{k} = \\dfrac{12}{2} = 6",
            },
          ],
        },
      ],
    },
    {
      id: "s16a",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "LAL · Ejercicio 1 / 3",
          enunciado: "△ABC tiene AB = 6, AC = 10, ∠A = 45°. △DEF tiene DE = 3, DF = 5, ∠D = 45°. ¿Son semejantes?",
          opciones: ["No, el ángulo es incorrecto", "Sí, por criterio LAL", "Solo si BC = EF también"],
          correcta: 1,
          explicacion: "AB/DE = 6/3 = 2, AC/DF = 10/5 = 2, y ∠A = ∠D = 45° (ángulo comprendido). Se cumple LAL.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "se-lal-ej1",
        },
      ],
    },
    {
      id: "s16b",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "LAL · Ejercicio 2 / 3",
          enunciado: "△ABC ~ △DEF (LAL). AB = 9, AC = 15, DE = 6, ∠A = ∠D. ¿Cuánto mide DF?",
          opciones: ["8", "9", "10"],
          correcta: 2,
          explicacion: "k = AB/DE = 9/6 = 3/2. DF = AC/k = 15/(3/2) = 15 × 2/3 = 10.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "se-lal-s2",
        },
      ],
    },
    {
      id: "s16c",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "LAL · Ejercicio 3 / 3",
          enunciado: "△PQR ~ △XYZ (LAL) con k = 3 y ∠P = ∠X. Si el área de △XYZ es 8 cm², ¿cuál es el área de △PQR?",
          opciones: ["24 cm²", "48 cm²", "72 cm²"],
          correcta: 2,
          explicacion: "Las áreas se relacionan como k². Área_PQR = k² × Área_XYZ = 9 × 8 = 72 cm².",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "se-lal-ej1",
        },
      ],
    },
    {
      id: 17,
      tipo: "lienzo",
      etiqueta: "Verificar semejanza — criterio LLL",
      titulo: "Ejemplo 1",
      bloques: [
        {
          tipo: "destacado",
          texto: "Determina si los siguientes triángulos son semejantes:",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej1-lll",
        },
        {
          tipo: "pasos",
          ancho: 7,
          metodo: "Datos: [object Object],[object Object]",
          pasos: [
            {
              pre: "Dividimos lados correspondientes: ",
              math: "\\dfrac{AB}{DE} = \\dfrac{6}{3} = 2",
            },
            {
              pre: "Segundo par: ",
              math: "\\dfrac{BC}{EF} = \\dfrac{8}{4} = 2",
            },
            {
              pre: "Tercer par: ",
              math: "\\dfrac{CA}{FD} = \\dfrac{10}{5} = 2",
            },
            {
              pre: "Los tres cocientes son iguales → ",
              math: "\\triangle ABC \\sim \\triangle DEF \\;(\\text{LLL}),\\quad k = 2",
            },
          ],
        },
      ],
    },
    {
      id: 18,
      tipo: "lienzo",
      etiqueta: "Encontrar un lado desconocido",
      titulo: "Ejemplo 2",
      bloques: [
        {
          tipo: "destacado",
          texto: "Si △PQR ~ △XYZ con razón de semejanza k = 3/2 y PQ = 12, ¿cuánto mide XY?",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej2-k32",
        },
        {
          tipo: "pasos",
          ancho: 7,
          metodo: "Datos: ",
          pasos: [
            {
              pre: "La razón de semejanza relaciona lados: ",
              math: "k = \\dfrac{PQ}{XY} = \\dfrac{3}{2}",
            },
            {
              pre: "Despejamos XY: ",
              math: "XY = \\dfrac{PQ}{k} = \\dfrac{12}{\\;3/2\\;} = 12 \\times \\dfrac{2}{3} = 8",
            },
            {
              pre: "Resultado: ",
              math: "XY = 8",
            },
          ],
        },
      ],
    },
    {
      id: 19,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Ejercicio 1 / 3",
          enunciado: "Si △ABC ~ △DEF con k = 3 y AB = 15, ¿cuánto mide DE?",
          opciones: ["3", "5", "12", "45"],
          correcta: 1,
          explicacion: "La razón de semejanza k = AB/DE, por lo tanto DE = AB/k = 15/3 = 5.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "se-k3",
        },
      ],
    },
    {
      id: 20,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Ejercicio 2 / 3",
          enunciado: "¿Qué criterio de semejanza se aplica cuando únicamente sabemos que dos ángulos son iguales en ambos triángulos?",
          opciones: ["LLL", "LAL", "AA", "No hay suficiente información"],
          correcta: 2,
          explicacion: "El criterio AA establece que basta con que dos ángulos sean iguales para garantizar la semejanza (el tercero se deduce de la suma 180°).",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ce4-aaa",
        },
      ],
    },
    {
      id: 21,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Ejercicio 3 / 3",
          enunciado: "Dos triángulos semejantes tienen k = 2. Si el área del menor es 9 cm², ¿cuál es el área del mayor?",
          opciones: ["18 cm²", "27 cm²", "36 cm²", "81 cm²"],
          correcta: 2,
          explicacion: "Las áreas se relacionan como k². Área mayor = 9 × 2² = 9 × 4 = 36 cm².",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "se-areas",
        },
      ],
    },
    {
      id: "se1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Áreas · Ejercicio 1 / 5",
          enunciado: "△ABC ~ △DEF con k = 4. Si el área de △DEF es 7 cm², ¿cuál es el área de △ABC?",
          opciones: ["28 cm²", "56 cm²", "112 cm²"],
          correcta: 2,
          explicacion: "Las áreas se relacionan como k². Área_ABC = k² × Área_DEF = 16 × 7 = 112 cm².",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "se-areas",
        },
      ],
    },
    {
      id: "se2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Áreas · Ejercicio 2 / 5",
          enunciado: "Dos triángulos semejantes tienen áreas en razón 25:4. ¿Cuál es la razón de sus lados correspondientes?",
          opciones: ["5:2", "25:4", "√5:2"],
          correcta: 0,
          explicacion: "Si la razón de áreas es k², entonces k = √(25/4) = 5/2. La razón de lados es 5:2.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "se-areas",
        },
      ],
    },
    {
      id: "se3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Pitágoras · Ejercicio 3 / 5",
          enunciado: "En el triángulo rectángulo, la altura h divide a la hipotenusa en segmentos AH = 4 y HB = 9. ¿Cuánto mide h?",
          opciones: ["3", "6", "√13"],
          correcta: 1,
          explicacion: "Por el teorema de la altura (media geométrica): h² = AH · HB = 4 · 9 = 36, por lo tanto h = 6.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "se-pitagoras",
        },
      ],
    },
    {
      id: "se4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Thales · Ejercicio 4 / 5",
          enunciado: "DE ∥ BC en △ABC. Si AD = 4, DB = 8 y AE = 3, ¿cuánto mide EC?",
          opciones: ["4", "6", "8"],
          correcta: 1,
          explicacion: "Por el teorema de Tales (proporcionalidad): AD/DB = AE/EC → 4/8 = 3/EC → EC = 3·8/4 = 6.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "se-paralela",
        },
      ],
    },
    {
      id: "se5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Sombras · Ejercicio 5 / 5",
          enunciado: "Un árbol de 4 m proyecta una sombra de 6 m. Un poste proyecta una sombra de 9 m. ¿Cuánto mide el poste?",
          opciones: ["5 m", "6 m", "7 m"],
          correcta: 1,
          explicacion: "Por semejanza de triángulos: altura/sombra es constante. x/9 = 4/6 → x = 9·4/6 = 6 m.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "se-sombra",
        },
      ],
    },
    {
      id: 22,
      tipo: "lienzo",
      etiqueta: "Lo que aprendimos hoy",
      titulo: "Resumen",
      bloques: [
        {
          tipo: "lista",
          items: [
            {
              math: "\\triangle ABC \\cong \\triangle DEF",
              texto: "misma forma y mismo tamaño (congruencia)",
            },
            {
              titulo: "Criterios LLL, LAL, ALA, LAA",
              texto: "cuatro formas de probar congruencia",
            },
            {
              math: "\\triangle ABC \\sim \\triangle DEF",
              texto: "misma forma, distinto tamaño (semejanza)",
            },
            {
              titulo: "Criterio AA",
              texto: "dos ángulos iguales son suficientes para semejanza",
            },
            {
              math: "k = \\dfrac{l_1}{l_2}",
              texto: "razón de semejanza (factor de escala)",
            },
            {
              math: "\\dfrac{A_1}{A_2} = k^2",
              texto: "relación de áreas entre triángulos semejantes",
            },
          ],
        },
      ],
    },
  ],
};
