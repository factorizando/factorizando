// Datos de la presentación: Probabilidad (EXANI-I)

export const PRESENTACION = {
  id: "probabilidad",
  titulo: "Probabilidad",
  materia: "Matemáticas",
  subtema: "Probabilidad y Estadística",
  slides: [

    // ── PORTADA ───────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Probabilidad",
      subtitulo: "Espacio muestral, regla de Laplace, conteo y eventos compuestos",
      etiqueta: "Pensamiento Matemático · EXANI-I",
      svgDiagram: "prob-portada",
    },

    // ── CONCEPTOS BASE ────────────────────────────────────────────────────────

    {
      id: "conceptos",
      tipo: "concepto",
      titulo: "Conceptos Básicos",
      etiqueta: "El lenguaje de la probabilidad",
      formula: "E \\subseteq \\Omega",
      svgDiagram: "espacio-muestral",
      items: [
        {
          math: "\\text{experimento}",
          texto: "acción con resultado incierto — toca para ver ejemplos",
          expandable: true,
          detalles: [
            "Lanzar un dado de 6 caras",
            "Lanzar una moneda",
            "Lanzar dos dados simultáneamente",
            "Lanzar dos monedas",
            "Sacar una carta de una baraja de 52",
            "Extraer una bola de una urna",
            "Girar una ruleta de 8 sectores",
            "Elegir un número del 1 al 10 al azar",
            "Elegir una letra al azar de una palabra",
            "Lanzar una tachuela"
          ]
        },
        {
          math: "\\Omega",
          texto: "espacio muestral: todos los resultados posibles — toca para ver ejemplos",
          expandable: true,
          detalles: [
            "Dado: {1, 2, 3, 4, 5, 6}",
            "Moneda: {cara, cruz}",
            "Dos dados: 36 pares (1,1)…(6,6)",
            "Dos monedas: {CC, CX, XC, XX}",
            "Baraja: 52 cartas (4 palos × 13 valores)",
            "Urna (4R, 3A): {R₁, R₂, R₃, R₄, A₁, A₂, A₃}",
            "Ruleta de 8: {1, 2, 3, 4, 5, 6, 7, 8}",
            "Números: {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}",
            "Letras «HOLA»: {H, O, L, A}",
            "Tachuela: {punta arriba, punta abajo}"
          ]
        },
        {
          math: "E",
          texto: "evento: subconjunto de Ω que nos interesa — toca para ver ejemplos",
          expandable: true,
          detalles: [
            "Dado: «número par» = {2, 4, 6}",
            "Moneda: «sale cara» = {cara}",
            "Dos dados: «suma = 7» = {(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)}",
            "Dos monedas: «al menos una cara» = {CC, CX, XC}",
            "Baraja: «es as» = {A♠, A♥, A♦, A♣}",
            "Urna: «sale roja» = {R₁, R₂, R₃, R₄}",
            "Ruleta: «cae en primo» = {2, 3, 5, 7}",
            "Números: «múltiplo de 3» = {3, 6, 9}",
            "Letras «HOLA»: «es vocal» = {O, A}",
            "Tachuela: «punta arriba»"
          ]
        },
        { math: "\\#E", texto: "casos favorables: cuántos resultados cumplen el evento" }
      ],
      nota: "Al lanzar un dado, Ω = {1, 2, 3, 4, 5, 6}. El evento «sale número par» es E = {2, 4, 6}, con #E = 3 casos favorables."
    },

    // ── PROBABILIDAD CLÁSICA (LAPLACE) ────────────────────────────────────────

    {
      id: "laplace",
      tipo: "criterio_detalle",
      titulo: "Probabilidad Clásica (Laplace)",
      etiqueta: "Casos favorables entre casos posibles",
      svgDiagram: "escala-probabilidad",
      enunciado: "Cuando todos los resultados son igualmente probables, la probabilidad de un evento E es el número de casos favorables dividido entre el número total de casos posibles.",
      math: "P(E) = \\dfrac{\\text{casos favorables}}{\\text{casos posibles}} = \\dfrac{\\#E}{\\#\\Omega}",
      por_que: "Toda probabilidad vive entre 0 y 1: vale 0 si el evento es imposible y 1 si es seguro. En el dado, P(par) = 3/6 = 1/2 = 0.5. Multiplicando por 100 se expresa como porcentaje.",
      math_razon: "0 \\le P(E) \\le 1, \\qquad P(\\text{imposible}) = 0,\\quad P(\\text{seguro}) = 1"
    },

    // ── PRINCIPIO MULTIPLICATIVO ──────────────────────────────────────────────

    {
      id: "conteo-mult",
      tipo: "criterio_detalle",
      titulo: "Principio Multiplicativo",
      etiqueta: "Cómo contar los casos posibles",
      svgDiagram: "arbol-multiplicativo",
      enunciado: "Si una elección se hace por etapas, el número total de resultados posibles es el producto del número de opciones de cada etapa.",
      math: "N = n_1 \\times n_2 \\times \\cdots \\times n_k",
      por_que: "Con 2 platos y 3 bebidas, cada plato se combina con cada bebida. El árbol muestra que de cada rama de la primera etapa salen todas las opciones de la segunda: 2 × 3 = 6 menús distintos.",
      math_razon: "2 \\text{ platos} \\times 3 \\text{ bebidas} = 6 \\text{ menús}"
    },

    // ── ÁRBOL: TRES LANZAMIENTOS DE MONEDA ───────────────────────────────────

    {
      id: "arbol-tres-monedas",
      tipo: "criterio_detalle",
      titulo: "Árbol de Tres Lanzamientos",
      etiqueta: "2 × 2 × 2 = 8 resultados posibles",
      svgDiagram: "arbol-tres-monedas",
      enunciado: "Al lanzar una moneda tres veces, el árbol muestra todos los caminos posibles: en cada nivel se bifurca en Cara (C) o Cruz (X). Los 3 nodos resaltados (naranja) son los que dan exactamente 2 caras — el «2 de 3».",
      math: "2 \\times 2 \\times 2 = 8 \\text{ resultados posibles}",
      por_que: "Exactamente 2 caras: CCX, CXC y XCC — tres caminos de ocho. Como cada hoja tiene probabilidad ½³ = ⅛, la probabilidad de «2 de 3» es 3 × ⅛ = 3/8.",
      math_razon: "P(\\text{exactamente 2 caras}) = \\dfrac{3}{8}"
    },

    // ── CONTEO CON DOS DADOS ──────────────────────────────────────────────────

    {
      id: "conteo-dados",
      tipo: "concepto",
      titulo: "Contar con Dos Dados",
      etiqueta: "El espacio muestral tiene 36 resultados",
      formula: "\\#\\Omega = 6 \\times 6 = 36",
      svgDiagram: "dos-dados",
      items: [
        { math: "\\#\\Omega = 36", texto: "todos los pares (dado 1, dado 2)" },
        { math: "E:\\ \\text{suma} = 7", texto: "casos favorables en la diagonal resaltada" },
        { math: "P(E) = \\dfrac{6}{36} = \\dfrac{1}{6}", texto: "seis pares suman 7" }
      ],
      nota: "La rejilla 6×6 es el principio multiplicativo en acción: 6 resultados del primer dado por 6 del segundo."
    },

    // ── PERMUTACIONES Y COMBINACIONES ─────────────────────────────────────────

    {
      id: "permut-combin",
      tipo: "concepto",
      titulo: "Permutaciones y Combinaciones",
      etiqueta: "¿Importa el orden?",
      formula: "n! = n\\cdot(n-1)\\cdots 2\\cdot 1",
      svgDiagram: "orden-importa",
      items: [
        { math: "P(n,r) = \\dfrac{n!}{(n-r)!}", texto: "permutaciones: el orden SÍ importa (AB ≠ BA)" },
        { math: "C(n,r) = \\dfrac{n!}{r!\\,(n-r)!}", texto: "combinaciones: el orden NO importa (AB = BA)" }
      ],
      nota: "Elegir 2 letras de {A, B, C}: como permutación hay P(3,2) = 6 (AB, BA, AC, CA, BC, CB); como combinación hay C(3,2) = 3 ({A,B}, {A,C}, {B,C})."
    },

    // ── EVENTO COMPLEMENTARIO ─────────────────────────────────────────────────

    {
      id: "complemento",
      tipo: "criterio_detalle",
      titulo: "Evento Complementario",
      etiqueta: "Lo que NO ocurre",
      svgDiagram: "complemento",
      enunciado: "El complemento de E, escrito E′, es el evento «E no ocurre». Como E y E′ cubren todo el espacio muestral sin traslaparse, sus probabilidades suman 1.",
      math: "P(E') = 1 - P(E)",
      por_que: "Muchas veces es más fácil calcular la probabilidad de que algo NO pase. Ejemplo: al lanzar 2 dados, P(al menos un 6) = 1 − P(ningún 6) = 1 − 25/36 = 11/36.",
      math_razon: "P(E) + P(E') = 1"
    },

    // ── REGLA DE LA SUMA ──────────────────────────────────────────────────────

    {
      id: "regla-suma",
      tipo: "criterio_detalle",
      titulo: "Regla de la Suma",
      etiqueta: "Probabilidad de E o F",
      svgDiagram: "regla-suma",
      enunciado: "Para la probabilidad de que ocurra E o F se suman sus probabilidades. Si los eventos pueden ocurrir a la vez, se resta la parte contada dos veces: la intersección.",
      math: "P(E \\cup F) = P(E) + P(F) - P(E \\cap F)",
      por_que: "Si E y F son mutuamente excluyentes (no pueden pasar juntos), su intersección es vacía y P(E∩F) = 0, así que basta sumar. Ejemplo en un dado: P(sale 2 o 5) = 1/6 + 1/6 = 2/6 = 1/3.",
      math_razon: "\\text{excluyentes} \\Rightarrow P(E \\cap F) = 0 \\Rightarrow P(E \\cup F) = P(E) + P(F)"
    },

    // ── REGLA DEL PRODUCTO ────────────────────────────────────────────────────

    {
      id: "regla-producto",
      tipo: "criterio_detalle",
      titulo: "Regla del Producto",
      etiqueta: "Eventos independientes",
      svgDiagram: "arbol-monedas",
      enunciado: "Dos eventos son independientes si uno no afecta al otro. La probabilidad de que ocurran ambos es el producto de sus probabilidades.",
      math: "P(E \\cap F) = P(E) \\cdot P(F)",
      por_que: "Al lanzar una moneda dos veces, cada resultado tiene probabilidad ½ y los lanzamientos no se afectan. El árbol muestra los 4 resultados igualmente probables: P(dos caras) = ½ · ½ = ¼.",
      math_razon: "P(\\text{CC}) = \\tfrac{1}{2}\\cdot\\tfrac{1}{2} = \\tfrac{1}{4}"
    },

    // ── PROBABILIDAD CONDICIONAL ──────────────────────────────────────────────

    {
      id: "condicional",
      tipo: "criterio_detalle",
      titulo: "Probabilidad Condicional",
      etiqueta: "Con y sin reemplazo",
      svgDiagram: "arbol-urna",
      enunciado: "Cuando un evento depende del resultado anterior, la probabilidad del segundo cambia. Sin reemplazo, al sacar una bola no se regresa: bajan tanto el total como los casos favorables.",
      math: "P(A \\cap B) = P(A)\\cdot P(B\\mid A)",
      por_que: "Urna con 2 rojas y 3 azules. Con reemplazo los eventos son independientes (el denominador sigue en 5). Sin reemplazo, tras sacar una roja quedan 1 roja y 4 bolas, así que la segunda rama cambia a /4.",
      math_razon: "P(\\text{RR}) = \\tfrac{2}{5}\\cdot\\tfrac{1}{4} = \\tfrac{1}{10}"
    },

    // ── PROBABILIDAD FRECUENTISTA ─────────────────────────────────────────────

    {
      id: "frecuentista",
      tipo: "concepto",
      titulo: "Probabilidad Frecuentista",
      etiqueta: "Frecuencia relativa ≈ probabilidad",
      formula: "P(E) \\approx \\dfrac{\\text{veces que ocurrió } E}{\\text{número de intentos}}",
      svgDiagram: "frecuencias-dado",
      items: [
        { math: "f_r = \\dfrac{f}{n}", texto: "frecuencia relativa: ocurrencias entre intentos" },
        { math: "n \\to \\infty", texto: "ley de los grandes números: f_r se acerca a P(E)" },
        { math: "P \\approx \\tfrac{1}{6}", texto: "cada cara del dado tiende a 1/6 ≈ 0.167" }
      ],
      nota: "Con pocos lanzamientos las frecuencias son irregulares; con muchos se emparejan cerca de 1/6. Así se conecta la probabilidad teórica (Laplace) con la experimental."
    },

    // ── EJERCICIOS EXANI-I ────────────────────────────────────────────────────

    {
      id: "pb1",
      tipo: "ejercicio",
      svgDiagram: "ej-dado-mayor4",
      etiqueta: "Probabilidad · Ejercicio 1 / 9",
      pregunta: "Al lanzar un dado, ¿cuál es la probabilidad de obtener un número mayor que 4?",
      math_pregunta: "\\Omega = \\{1,2,3,4,5,6\\}",
      opciones: ["1/3", "1/2", "1/6"],
      correcta: 0,
      explicacion: "Los favorables son {5, 6}: 2 casos de 6. P = 2/6 = 1/3.",
      pasos: [
        { pre: "Casos favorables: ", math: "E = \\{5, 6\\},\\quad \\#E = 2" },
        { pre: "Laplace: ", math: "P(E) = \\dfrac{2}{6} = \\dfrac{1}{3}" }
      ]
    },

    {
      id: "pb2",
      tipo: "ejercicio",
      svgDiagram: "ej-carta-as",
      etiqueta: "Probabilidad · Ejercicio 2 / 9",
      pregunta: "De una baraja de 52 cartas, ¿cuál es la probabilidad de sacar un as?",
      math_pregunta: "\\#\\Omega = 52,\\quad \\text{hay 4 ases}",
      opciones: ["1/13", "1/4", "4/13"],
      correcta: 0,
      explicacion: "Hay 4 ases en 52 cartas. P = 4/52 = 1/13.",
      pasos: [
        { pre: "Favorables / posibles: ", math: "P = \\dfrac{4}{52} = \\dfrac{1}{13}" }
      ]
    },

    {
      id: "pb3",
      tipo: "ejercicio",
      svgDiagram: "dos-dados",
      etiqueta: "Probabilidad · Ejercicio 3 / 9",
      pregunta: "Se lanzan dos dados. ¿Cuál es la probabilidad de que la suma sea 7?",
      math_pregunta: "\\#\\Omega = 6 \\times 6 = 36",
      opciones: ["1/6", "1/12", "7/36"],
      correcta: 0,
      explicacion: "Suman 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 casos. P = 6/36 = 1/6.",
      pasos: [
        { pre: "Casos favorables: ", math: "\\#E = 6" },
        { pre: "Probabilidad: ", math: "P = \\dfrac{6}{36} = \\dfrac{1}{6}" }
      ]
    },

    {
      id: "pb4",
      tipo: "ejercicio",
      svgDiagram: "ej-dos-monedas",
      etiqueta: "Probabilidad · Ejercicio 4 / 9",
      pregunta: "Se lanza una moneda dos veces. ¿Cuál es la probabilidad de obtener al menos una cara?",
      math_pregunta: "\\Omega = \\{CC, CX, XC, XX\\}",
      opciones: ["3/4", "1/2", "1/4"],
      correcta: 0,
      explicacion: "Usando el complemento: P(al menos una cara) = 1 − P(ninguna) = 1 − P(XX) = 1 − 1/4 = 3/4.",
      pasos: [
        { pre: "Complemento (XX): ", math: "P(\\text{XX}) = \\tfrac{1}{2}\\cdot\\tfrac{1}{2} = \\tfrac{1}{4}" },
        { pre: "Al menos una cara: ", math: "1 - \\dfrac{1}{4} = \\dfrac{3}{4}" }
      ]
    },

    {
      id: "pb5",
      tipo: "ejercicio",
      svgDiagram: "ej-urna-rav",
      etiqueta: "Probabilidad · Ejercicio 5 / 9",
      pregunta: "Una urna tiene 4 bolas rojas, 3 azules y 2 verdes. Si se saca una al azar, ¿cuál es la probabilidad de que sea roja o verde?",
      math_pregunta: "\\#\\Omega = 4 + 3 + 2 = 9",
      opciones: ["2/3", "4/9", "5/9"],
      correcta: 0,
      explicacion: "Roja y verde son excluyentes: P = P(roja) + P(verde) = 4/9 + 2/9 = 6/9 = 2/3.",
      pasos: [
        { pre: "Regla de la suma (excluyentes): ", math: "\\dfrac{4}{9} + \\dfrac{2}{9} = \\dfrac{6}{9}" },
        { pre: "Simplificando: ", math: "\\dfrac{6}{9} = \\dfrac{2}{3}" }
      ]
    },

    {
      id: "pb6",
      tipo: "ejercicio",
      svgDiagram: "ej-moneda-dado",
      etiqueta: "Probabilidad · Ejercicio 6 / 9",
      pregunta: "Se lanza una moneda y un dado. ¿Cuál es la probabilidad de obtener cara y un 6?",
      math_pregunta: "P(\\text{cara}) = \\tfrac{1}{2},\\quad P(6) = \\tfrac{1}{6}",
      opciones: ["1/12", "1/8", "1/6"],
      correcta: 0,
      explicacion: "Son eventos independientes, así que se multiplican: P = 1/2 · 1/6 = 1/12.",
      pasos: [
        { pre: "Regla del producto: ", math: "P = \\dfrac{1}{2}\\cdot\\dfrac{1}{6} = \\dfrac{1}{12}" }
      ]
    },

    {
      id: "pb7",
      tipo: "ejercicio",
      svgDiagram: "ej-urna-r5a3",
      etiqueta: "Probabilidad · Ejercicio 7 / 9",
      pregunta: "Una urna tiene 5 bolas rojas y 3 azules. Se sacan 2 sin reemplazo. ¿Cuál es la probabilidad de que ambas sean rojas?",
      math_pregunta: "5\\text{ rojas},\\ 3\\text{ azules},\\ \\text{sin reemplazo}",
      opciones: ["5/14", "25/64", "5/8"],
      correcta: 0,
      explicacion: "Sin reemplazo el denominador cambia: P = 5/8 · 4/7 = 20/56 = 5/14.",
      pasos: [
        { pre: "Primera roja: ", math: "P_1 = \\dfrac{5}{8}" },
        { pre: "Segunda roja (quedan 4 de 7): ", math: "P_2 = \\dfrac{4}{7}" },
        { pre: "Producto: ", math: "\\dfrac{5}{8}\\cdot\\dfrac{4}{7} = \\dfrac{20}{56} = \\dfrac{5}{14}" }
      ]
    },

    {
      id: "pb8",
      tipo: "ejercicio",
      svgDiagram: "ej-ruleta",
      etiqueta: "Probabilidad · Ejercicio 8 / 9",
      pregunta: "Una ruleta tiene 8 sectores iguales numerados del 1 al 8. ¿Cuál es la probabilidad de caer en un número primo?",
      math_pregunta: "\\#\\Omega = 8",
      opciones: ["1/2", "3/8", "5/8"],
      correcta: 0,
      explicacion: "Primos del 1 al 8: 2, 3, 5, 7 → 4 casos. P = 4/8 = 1/2. (El 1 no es primo.)",
      pasos: [
        { pre: "Favorables (primos): ", math: "E = \\{2, 3, 5, 7\\},\\quad \\#E = 4" },
        { pre: "Probabilidad: ", math: "P = \\dfrac{4}{8} = \\dfrac{1}{2}" }
      ]
    },

    {
      id: "pb9",
      tipo: "ejercicio",
      svgDiagram: "ej-combinatoria",
      etiqueta: "Probabilidad · Ejercicio 9 / 9",
      pregunta: "¿Cuántas parejas distintas se pueden formar con 5 personas?",
      math_pregunta: "n = 5,\\quad r = 2,\\quad \\text{el orden no importa}",
      opciones: ["10", "20", "25"],
      correcta: 0,
      explicacion: "Como el orden no importa es una combinación: C(5,2) = 5!/(2!·3!) = 10.",
      pasos: [
        { pre: "Combinaciones: ", math: "C(5,2) = \\dfrac{5!}{2!\\,3!} = \\dfrac{5\\cdot 4}{2} = 10" }
      ]
    },

    // ── RESUMEN ───────────────────────────────────────────────────────────────

    {
      id: "resumen",
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Lo que aprendimos hoy",
      puntos: [
        { math: "P(E) = \\dfrac{\\#E}{\\#\\Omega}", texto: "regla de Laplace: favorables entre posibles (0 ≤ P ≤ 1)" },
        { math: "N = n_1 \\times n_2 \\times \\cdots", texto: "principio multiplicativo para contar los casos" },
        { math: "P(E') = 1 - P(E)", texto: "complemento: útil para el «al menos uno»" },
        { math: "P(E \\cup F) = P(E) + P(F) - P(E \\cap F)", texto: "regla de la suma (si son excluyentes, la resta es 0)" },
        { math: "P(E \\cap F) = P(E)\\cdot P(F)", texto: "regla del producto para eventos independientes" },
        { titulo: "Sin reemplazo", texto: "el denominador cambia: P(A)·P(B|A)" },
        { titulo: "Frecuentista", texto: "con muchos intentos, la frecuencia relativa → P(E)" }
      ]
    }

  ]
};
