// Datos de la presentación: Semejanza de Triángulos
// Cada slide tiene un `tipo` que determina cómo se renderiza.

export const PRESENTACION = {
  id: "semejanza-triangulos",
  titulo: "Semejanza de Triángulos",
  materia: "Matemáticas",
  slides: [
    {
      id: 0,
      tipo: "portada",
      titulo: "Semejanza de Triángulos",
      subtitulo: "Criterios de semejanza y razón de proporcionalidad",
      etiqueta: "Geometría · Preparatoria"
    },
    {
      id: 1,
      tipo: "definicion",
      titulo: "Definición",
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
      id: 2,
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
      id: 3,
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
      id: 4,
      tipo: "criterio_detalle",
      titulo: "Criterio AA",
      etiqueta: "Ángulo–Ángulo",
      enunciado:
        "Si dos ángulos de un triángulo son iguales a dos ángulos de otro, los triángulos son semejantes.",
      math: "\\angle A = \\angle D \\;\\text{ y }\\; \\angle B = \\angle E \\implies \\triangle ABC \\sim \\triangle DEF",
      por_que:
        "La suma de los ángulos interiores siempre es 180°, por lo que el tercer ángulo queda determinado automáticamente.",
      math_razon:
        "\\angle C = 180^\\circ - \\angle A - \\angle B = 180^\\circ - \\angle D - \\angle E = \\angle F"
    },
    {
      id: 5,
      tipo: "criterio_detalle",
      titulo: "Criterio LLL",
      etiqueta: "Lado–Lado–Lado",
      enunciado:
        "Si los tres pares de lados correspondientes son proporcionales, los triángulos son semejantes.",
      math: "\\dfrac{AB}{DE} = \\dfrac{BC}{EF} = \\dfrac{CA}{FD} = k \\implies \\triangle ABC \\sim \\triangle DEF",
      por_que:
        "La proporcionalidad de los tres lados obliga a que la forma se conserve, lo que implica que los ángulos son necesariamente iguales.",
      math_razon: null
    },
    {
      id: 6,
      tipo: "criterio_detalle",
      titulo: "Criterio LAL",
      etiqueta: "Lado–Ángulo–Lado",
      enunciado:
        "Si dos pares de lados son proporcionales y el ángulo comprendido entre ellos es igual, los triángulos son semejantes.",
      math: "\\dfrac{AB}{DE} = \\dfrac{AC}{DF} \\;\\text{ y }\\; \\angle A = \\angle D \\implies \\triangle ABC \\sim \\triangle DEF",
      por_que:
        "El ángulo debe ser el comprendido entre los dos lados (el que queda entre ellos). Si el ángulo fuera otro, el criterio no aplica.",
      math_razon: null
    },
    {
      id: 7,
      tipo: "ejemplo",
      titulo: "Ejemplo 1",
      etiqueta: "Verificar semejanza — criterio LLL",
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
      id: 8,
      tipo: "ejemplo",
      titulo: "Ejemplo 2",
      etiqueta: "Encontrar un lado desconocido",
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
      id: 9,
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
      id: 10,
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
      id: 11,
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
      id: 12,
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Lo que aprendimos hoy",
      puntos: [
        { math: "\\triangle ABC \\sim \\triangle DEF", texto: "misma forma, distinto tamaño" },
        { titulo: "Criterio AA", texto: "dos ángulos iguales son suficientes" },
        { titulo: "Criterio LLL", texto: "los tres pares de lados proporcionales" },
        { titulo: "Criterio LAL", texto: "dos lados proporcionales + ángulo comprendido igual" },
        { math: "k = \\dfrac{l_1}{l_2}", texto: "razón de semejanza (factor de escala)" },
        { math: "\\dfrac{A_1}{A_2} = k^2", texto: "relación de áreas entre triángulos semejantes" }
      ]
    }
  ]
};
