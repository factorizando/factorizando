// Presentación: Probabilidad — versión EXANI-II (estilo visual con diagramas)
// Pensamiento Matemático · Comprensión de lo matemático · EXANI-II
// Reutiliza los componentes SVG de probabilidad ya definidos en SlideRenderer.jsx.

export const PRESENTACION = {
  id: "probabilidad-exani-ii",
  titulo: "Probabilidad",
  materia: "Pensamiento Matemático",
  subtema: "Comprensión de lo matemático",
  slides: [

    // ── PORTADA ───────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Probabilidad",
      subtitulo: "Espacio muestral, regla de Laplace, conteo, eventos compuestos, condicional y frecuencias",
      etiqueta: "Pensamiento Matemático · EXANI-II",
      svgDiagram: "prob-portada",
    },

    // ── FUNDAMENTOS ───────────────────────────────────────────────────────────
    {
      id: "conceptos",
      tipo: "concepto",
      titulo: "Espacio Muestral y Eventos",
      etiqueta: "El lenguaje de la probabilidad",
      formula: "E \\subseteq \\Omega",
      svgDiagram: "espacio-muestral",
      items: [
        {
          math: "\\text{experimento aleatorio}",
          texto: "acción cuyo resultado no se puede predecir — toca para ver ejemplos",
          expandable: true,
          detalles: [
            "Lanzar un dado de 6 caras",
            "Lanzar dos dados simultáneamente",
            "Sacar una carta de una baraja de 52",
            "Extraer dos bolas de una urna sin reemplazo",
            "Elegir al azar un alumno de un grupo",
            "Girar una ruleta de 8 sectores"
          ]
        },
        {
          math: "\\Omega",
          texto: "espacio muestral: TODOS los resultados posibles — toca para ejemplos",
          expandable: true,
          detalles: [
            "Dado: {1, 2, 3, 4, 5, 6} → #Ω = 6",
            "Dos dados: 36 pares (1,1)…(6,6) → #Ω = 36",
            "Baraja: 52 cartas → #Ω = 52",
            "Dos monedas: {CC, CX, XC, XX} → #Ω = 4"
          ]
        },
        {
          math: "E",
          texto: "evento: subconjunto de Ω que nos interesa — toca para ejemplos",
          expandable: true,
          detalles: [
            "Dado: «par» = {2, 4, 6}",
            "Dos dados: «suma 7» = {(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)}",
            "Baraja: «figura» = {J, Q, K de cada palo} = 12 cartas",
            "Dos monedas: «al menos una cara» = {CC, CX, XC}"
          ]
        },
        { math: "\\#E,\\ \\#\\Omega", texto: "casos favorables y casos posibles: la base de la regla de Laplace" }
      ],
      nota: "Para resolver un problema de probabilidad, primero se define bien Ω (todos los casos) y el evento E (los favorables). Casi todo error nace de contar mal uno de los dos."
    },

    {
      id: "laplace",
      tipo: "criterio_detalle",
      titulo: "Probabilidad Clásica (Laplace)",
      etiqueta: "Casos favorables entre casos posibles",
      svgDiagram: "escala-probabilidad",
      enunciado: "Cuando todos los resultados de Ω son igualmente probables, la probabilidad de un evento E es el número de casos favorables entre el total de casos posibles.",
      math: "P(E) = \\dfrac{\\#E}{\\#\\Omega}, \\qquad 0 \\le P(E) \\le 1",
      por_que: "Toda probabilidad vive entre 0 (imposible) y 1 (seguro); multiplicada por 100 se lee como porcentaje. Clave EXANI-II: la regla SOLO vale si los resultados son equiprobables. Las sumas de dos dados, por ejemplo, NO lo son, así que ahí se cuenta sobre los 36 pares, no sobre las 11 sumas.",
      math_razon: "P(\\text{imposible}) = 0, \\quad P(\\text{seguro}) = 1, \\quad P \\times 100 = \\%"
    },

    // ── EJEMPLOS TRABAJADOS ───────────────────────────────────────────────────
    {
      id: "ej-moneda",
      tipo: "criterio_detalle",
      titulo: "Ejemplo 1 · Una Moneda",
      etiqueta: "Laplace en su forma más simple",
      svgDiagram: "una-moneda",
      enunciado: "Se lanza una moneda justa una vez. ¿Cuál es la probabilidad de que salga cara? El espacio muestral tiene dos resultados igualmente probables: Ω = {cara, cruz}.",
      math: "P(\\text{cara}) = \\dfrac{\\#E}{\\#\\Omega} = \\dfrac{1}{2} = 0.5 = 50\\%",
      por_que: "Hay 1 caso favorable entre 2 posibles. Como la moneda no está cargada, ambos pesan igual: a cada uno le toca ½. Es el punto de partida para los lanzamientos repetidos.",
      math_razon: "\\#E = 1,\\quad \\#\\Omega = 2 \\;\\Rightarrow\\; P = \\tfrac{1}{2}"
    },

    {
      id: "ej-dado",
      tipo: "criterio_detalle",
      titulo: "Ejemplo 2 · Un Dado",
      etiqueta: "Primero contar el evento, luego dividir",
      svgDiagram: "espacio-muestral",
      enunciado: "Se lanza un dado de seis caras. ¿Cuál es la probabilidad de obtener un número par? El espacio muestral es Ω = {1, 2, 3, 4, 5, 6} y el evento «par» es E = {2, 4, 6}.",
      math: "P(\\text{par}) = \\dfrac{\\#E}{\\#\\Omega} = \\dfrac{3}{6} = \\dfrac{1}{2}",
      por_que: "A diferencia de la moneda, aquí primero hay que CONTAR cuántas caras forman el evento. Cambiando el evento cambia la cuenta: P(sale 5) = 1/6, P(mayor que 4) = 2/6 = 1/3, P(primo) = 3/6 = 1/2.",
      math_razon: "E = \\{2,4,6\\},\\ \\#E = 3 \\;\\Rightarrow\\; P = \\tfrac{3}{6} = \\tfrac{1}{2}"
    },

    {
      id: "ej-dardo",
      tipo: "criterio_detalle",
      titulo: "Ejemplo 3 · Probabilidad Geométrica",
      etiqueta: "Cuando los casos son infinitos: área entre área",
      svgDiagram: "dardo-diana",
      enunciado: "Se lanza un dardo al azar sobre una diana circular de radio R. En el centro hay un blanco de radio r = R/2. ¿Cuál es la probabilidad de dar en el blanco? Como cualquier punto del círculo es un resultado posible, los casos son infinitos y se comparan ÁREAS en lugar de contar.",
      math: "P(\\text{blanco}) = \\dfrac{\\text{área favorable}}{\\text{área total}} = \\dfrac{\\pi r^2}{\\pi R^2} = \\left(\\dfrac{r}{R}\\right)^2",
      por_que: "Con r = R/2: P = (½)² = ¼. ¡Ojo EXANI-II! El radio es la mitad, pero el área es solo la cuarta parte: por eso apenas el 25 % de los lanzamientos dan en el blanco. La probabilidad geométrica generaliza Laplace cuando no se puede contar uno por uno.",
      math_razon: "\\dfrac{\\pi (R/2)^2}{\\pi R^2} = \\dfrac{1}{4} = 25\\%"
    },

    // ── CONTEO ────────────────────────────────────────────────────────────────
    {
      id: "conteo-mult",
      tipo: "criterio_detalle",
      titulo: "Principio Multiplicativo",
      etiqueta: "Cómo contar los casos posibles",
      svgDiagram: "arbol-multiplicativo",
      enunciado: "Si una elección se hace por etapas, el número total de resultados es el producto de las opciones de cada etapa. Es la herramienta básica para hallar #Ω cuando el experimento tiene varios pasos.",
      math: "N = n_1 \\times n_2 \\times \\cdots \\times n_k",
      por_que: "Con 2 platos y 3 bebidas hay 2 × 3 = 6 menús, porque cada plato se combina con cada bebida. El árbol lo muestra: de cada rama de la primera etapa salen todas las de la segunda. Sumar (2 + 3 = 5) cuenta mal.",
      math_razon: "2 \\text{ platos} \\times 3 \\text{ bebidas} = 6 \\text{ menús}"
    },

    {
      id: "conteo-dados",
      tipo: "concepto",
      titulo: "Contar con Dos Dados",
      etiqueta: "36 resultados, pero NO 36 sumas equiprobables",
      formula: "\\#\\Omega = 6 \\times 6 = 36",
      svgDiagram: "dos-dados",
      items: [
        { math: "\\#\\Omega = 36", texto: "los 36 pares ordenados (dado 1, dado 2): principio multiplicativo 6×6" },
        { math: "P(\\text{suma}=7) = \\dfrac{6}{36} = \\dfrac{1}{6}", texto: "la suma 7 es la MÁS probable: 6 pares en la diagonal" },
        { math: "P(\\text{suma}=2)=P(\\text{suma}=12)=\\dfrac{1}{36}", texto: "las sumas 2 y 12 son las menos probables" },
        {
          math: "\\text{suma} \\in \\{2,\\dots,12\\}",
          texto: "11 sumas posibles, pero NO equiprobables — toca para ver la distribución",
          expandable: true,
          detalles: [
            "Suma 2 → 1 par → 1/36",
            "Suma 5 → 4 pares → 4/36",
            "Suma 7 → 6 pares → 6/36 (máxima)",
            "Suma 9 → 4 pares → 4/36",
            "Suma 11 → 2 pares → 2/36",
            "Suma 12 → 1 par → 1/36"
          ]
        }
      ],
      nota: "Error típico EXANI-II: tomar #Ω = 11 (las sumas) y dar P(suma 7) = 1/11. Las sumas no pesan igual; siempre se cuenta sobre los 36 pares equiprobables."
    },

    {
      id: "arbol-tres-monedas",
      tipo: "criterio_detalle",
      titulo: "Árbol de Tres Lanzamientos",
      etiqueta: "2 × 2 × 2 = 8 resultados posibles",
      svgDiagram: "arbol-tres-monedas",
      enunciado: "Al lanzar una moneda tres veces, el árbol muestra todos los caminos: en cada nivel se bifurca en Cara (C) o Cruz (X). Los caminos resaltados son los que dan exactamente 2 caras.",
      math: "2 \\times 2 \\times 2 = 8 \\text{ resultados posibles}",
      por_que: "Exactamente 2 caras: CCX, CXC y XCC — tres caminos de ocho. Como cada hoja vale ½³ = ⅛, la probabilidad es 3 × ⅛ = 3/8. El árbol vuelve visible el conteo de eventos compuestos.",
      math_razon: "P(\\text{exactamente 2 caras}) = \\dfrac{3}{8}"
    },

    {
      id: "permut-combin",
      tipo: "concepto",
      titulo: "Permutaciones y Combinaciones",
      etiqueta: "¿Importa el orden? · toca cada tarjeta",
      formula: "n! = n\\cdot(n-1)\\cdots 2\\cdot 1",
      svgDiagram: "orden-importa",
      items: [
        {
          math: "P(n,r) = \\dfrac{n!}{(n-r)!}",
          texto: "Permutación: arreglo ORDENADO de r objetos de n. AB y BA son distintas.",
          expandable: true,
          detalles: [
            "Palabras clave: «ordenar», «en fila», «podio», «primero/segundo», «clave»",
            "El orden cambia el resultado: AB ≠ BA",
            "Ejemplo: P(5,3) = 5·4·3 = 60 podios distintos"
          ]
        },
        {
          math: "C(n,r) = \\dfrac{n!}{r!\\,(n-r)!}",
          texto: "Combinación: selección SIN importar el orden. AB y BA son la misma.",
          expandable: true,
          detalles: [
            "Palabras clave: «grupo», «equipo», «comité», «escoger», «seleccionar»",
            "El orden no cambia nada: AB = BA",
            "Ejemplo: C(5,3) = 60 / 3! = 10 comités distintos"
          ]
        }
      ],
      nota: "Una sola pregunta decide: ¿el orden importa? Si sí → permutación; si no → combinación. La combinación siempre es menor, porque divide entre r! para quitar los arreglos repetidos."
    },

    {
      id: "permutaciones",
      tipo: "criterio_detalle",
      titulo: "Permutaciones · El Orden Importa",
      etiqueta: "Llenar casillas con el principio multiplicativo",
      svgDiagram: "permutaciones-casillas",
      enunciado: "Para premiar a 3 de 5 corredores con oro, plata y bronce se llenan 3 casillas. El oro tiene 5 candidatos; ya elegido, quedan 4 para la plata; luego 3 para el bronce.",
      math: "P(n,r) = n\\cdot(n-1)\\cdots(n-r+1) = \\dfrac{n!}{(n-r)!}",
      por_que: "Cada casilla quita una opción a la siguiente: 5 × 4 × 3 = 60 podios. La fórmula con factoriales solo «recorta» 5! quitándole el 2! que sobra. No hay que memorizarla: nace de contar casillas.",
      math_razon: "P(5,3) = 5\\cdot4\\cdot3 = \\dfrac{5!}{2!} = 60"
    },

    {
      id: "combinaciones",
      tipo: "criterio_detalle",
      titulo: "Combinaciones · El Orden NO Importa",
      etiqueta: "Quitar los arreglos repetidos",
      svgDiagram: "combinaciones-casillas",
      enunciado: "Ahora elegimos un comité de 3 de esas 5 personas, sin cargos. Partimos de las 60 permutaciones, pero {A, B, C} y todos sus reordenamientos son el MISMO comité: cada grupo se contó 3! = 6 veces.",
      math: "C(n,r) = \\dfrac{P(n,r)}{r!} = \\dfrac{n!}{r!\\,(n-r)!}",
      por_que: "Como cada grupo aparece r! veces, se divide entre r! para quitar repetidos. Por eso la combinación siempre es más chica que la permutación. Aquí: 60 ÷ 3! = 10 comités.",
      math_razon: "C(5,3) = \\dfrac{60}{3!} = \\dfrac{60}{6} = 10"
    },

    // ── EVENTOS COMPUESTOS ────────────────────────────────────────────────────
    {
      id: "complemento",
      tipo: "criterio_detalle",
      titulo: "Evento Complementario",
      etiqueta: "Lo que NO ocurre · la vía rápida del «al menos uno»",
      svgDiagram: "complemento",
      enunciado: "El complemento de E, escrito E′, es el evento «E no ocurre». Como E y E′ cubren todo Ω sin traslaparse, sus probabilidades suman 1.",
      math: "P(E') = 1 - P(E)",
      por_que: "Muchas veces es más fácil calcular lo que NO pasa. El «al menos uno» es el caso estrella: P(al menos un 6 en dos dados) = 1 − P(ningún 6) = 1 − (5/6)² = 1 − 25/36 = 11/36. Calcular «al menos uno» de frente obligaría a sumar varios casos.",
      math_razon: "P(\\text{al menos uno}) = 1 - P(\\text{ninguno})"
    },

    {
      id: "regla-suma",
      tipo: "criterio_detalle",
      titulo: "Regla de la Suma",
      etiqueta: "Probabilidad de «E o F»",
      svgDiagram: "regla-suma",
      enunciado: "Para «E o F» se suman sus probabilidades. Si los eventos pueden ocurrir a la vez, se RESTA la intersección, que de otro modo se contaría dos veces.",
      math: "P(E \\cup F) = P(E) + P(F) - P(E \\cap F)",
      por_que: "Si E y F son mutuamente excluyentes (no pasan juntos), P(E∩F) = 0 y basta sumar. Pero «as o corazón» NO es excluyente: P = 4/52 + 13/52 − 1/52 = 4/13, restando el as de corazones contado dos veces.",
      math_razon: "\\text{excluyentes} \\Rightarrow P(E \\cap F) = 0 \\Rightarrow P(E \\cup F) = P(E) + P(F)"
    },

    {
      id: "regla-producto",
      tipo: "criterio_detalle",
      titulo: "Regla del Producto",
      etiqueta: "Probabilidad de «E y F» (independientes)",
      svgDiagram: "arbol-monedas",
      enunciado: "Dos eventos son independientes si uno no afecta al otro. La probabilidad de que ocurran AMBOS es el producto de sus probabilidades.",
      math: "P(E \\cap F) = P(E) \\cdot P(F)",
      por_que: "Al lanzar una moneda dos veces, cada resultado vale ½ y los lanzamientos no se afectan: P(dos caras) = ½ · ½ = ¼. El conector «y» pide producto; el «o», suma. Distinguirlos es media batalla en el EXANI-II.",
      math_razon: "P(\\text{CC}) = \\tfrac{1}{2}\\cdot\\tfrac{1}{2} = \\tfrac{1}{4}"
    },

    {
      id: "condicional",
      tipo: "criterio_detalle",
      titulo: "Probabilidad Condicional",
      etiqueta: "Con y sin reemplazo",
      svgDiagram: "arbol-urna",
      enunciado: "Cuando un evento depende del resultado anterior, la probabilidad del segundo cambia. Sin reemplazo, al sacar una bola no se regresa: bajan tanto el total como los casos favorables.",
      math: "P(A \\cap B) = P(A)\\cdot P(B\\mid A)",
      por_que: "Urna con 5 rojas y 3 azules. Con reemplazo los eventos son independientes (el denominador sigue en 8). Sin reemplazo, tras sacar una roja quedan 4 rojas de 7, así que la segunda rama cambia: P(2 rojas) = (5/8)(4/7) = 5/14.",
      math_razon: "P(\\text{RR}) = \\tfrac{5}{8}\\cdot\\tfrac{4}{7} = \\tfrac{20}{56} = \\tfrac{5}{14}"
    },

    // ── MODELOS DE PROBABILIDAD ───────────────────────────────────────────────
    {
      id: "axiomatica",
      tipo: "concepto",
      titulo: "Axiomas de Kolmogorov",
      etiqueta: "Las 3 reglas que TODA probabilidad cumple",
      formula: "P:\\ \\text{eventos} \\to [0, 1]",
      svgDiagram: "tres-axiomas",
      items: [
        { math: "P(E) \\ge 0", texto: "No negatividad: ninguna probabilidad es negativa; lo mínimo es 0." },
        { math: "P(\\Omega) = 1", texto: "Normalización: el evento seguro (todo Ω) vale 1 = 100 %." },
        { math: "P(E \\cup F) = P(E) + P(F)", texto: "Aditividad: si E y F son excluyentes, sus probabilidades se suman." }
      ],
      nota: "Laplace, la geométrica y la frecuentista no son rivales: son tres maneras de asignar P que cumplen los mismos tres axiomas. Por eso todas son probabilidades de verdad."
    },

    {
      id: "ej-tachuela",
      tipo: "criterio_detalle",
      titulo: "Cuando Laplace NO Aplica",
      etiqueta: "Resultados que no son equiprobables",
      svgDiagram: "tachuela",
      enunciado: "Una tachuela cae con la punta hacia arriba o de lado. El espacio muestral Ω = {arriba, de lado} tiene dos resultados, igual que una moneda. ¿Entonces P(arriba) = ½?",
      math: "P(\\text{arriba}) \\neq \\tfrac{1}{2} \\quad(\\text{no son equiprobables})",
      por_que: "¡No! Laplace exige resultados igualmente probables, y la forma de la tachuela hace que caiga más de un lado. Como la fórmula no aplica, se estima la probabilidad lanzándola muchas veces y midiendo su frecuencia. Esto motiva la probabilidad frecuentista.",
      math_razon: "P(\\text{arriba}) \\approx \\dfrac{\\text{veces «arriba»}}{\\text{total de lanzamientos}}"
    },

    {
      id: "frecuentista",
      tipo: "concepto",
      titulo: "Probabilidad Frecuentista",
      etiqueta: "Frecuencia relativa ≈ probabilidad",
      formula: "P(E) \\approx \\dfrac{f}{n}",
      svgDiagram: "frecuencias-dado",
      items: [
        { math: "f_r = \\dfrac{f}{n}", texto: "frecuencia relativa: ocurrencias entre intentos" },
        { math: "n \\to \\infty \\Rightarrow f_r \\to P(E)", texto: "ley de los grandes números: la frecuencia se acerca a P" },
        { math: "\\textstyle\\sum f_r = 1", texto: "las frecuencias relativas suman 1 (100 %)" }
      ],
      nota: "Con pocos ensayos las frecuencias son irregulares; con muchos se estabilizan cerca de P. Así se conecta la probabilidad teórica (Laplace) con la experimental, indispensable cuando no hay equiprobabilidad."
    },

    // ── EJERCICIOS ────────────────────────────────────────────────────────────
    {
      id: "px1",
      tipo: "ejercicio",
      svgDiagram: "ej-dado-mayor4",
      etiqueta: "Probabilidad · Ejercicio 1 / 14",
      pregunta: "Al lanzar un dado, ¿cuál es la probabilidad de obtener un número primo?",
      math_pregunta: "\\Omega = \\{1,2,3,4,5,6\\}",
      opciones: ["1/2", "1/3", "2/3"],
      correcta: 0,
      explicacion: "Los primos del 1 al 6 son 2, 3 y 5: 3 casos de 6. P = 3/6 = 1/2. (El 1 no es primo.)",
      pasos: [
        { pre: "Favorables: ", math: "E = \\{2, 3, 5\\},\\ \\#E = 3" },
        { pre: "Laplace: ", math: "P = \\dfrac{3}{6} = \\dfrac{1}{2}" }
      ]
    },
    {
      id: "px2",
      tipo: "ejercicio",
      svgDiagram: "ej-carta-as",
      etiqueta: "Probabilidad · Ejercicio 2 / 14",
      pregunta: "De una baraja de 52 cartas, ¿cuál es la probabilidad de sacar una figura (J, Q o K)?",
      math_pregunta: "3\\text{ figuras} \\times 4\\text{ palos} = 12",
      opciones: ["3/13", "1/4", "3/52"],
      correcta: 0,
      explicacion: "Hay 3 figuras por palo y 4 palos: 12 cartas. P = 12/52 = 3/13.",
      pasos: [{ pre: "Favorables / posibles: ", math: "P = \\dfrac{12}{52} = \\dfrac{3}{13}" }]
    },
    {
      id: "px3",
      tipo: "ejercicio",
      svgDiagram: "ej-ruleta",
      etiqueta: "Probabilidad · Ejercicio 3 / 14",
      pregunta: "Una ruleta tiene 8 sectores iguales del 1 al 8. ¿Cuál es la probabilidad de caer en un número mayor que 5?",
      math_pregunta: "\\#\\Omega = 8",
      opciones: ["3/8", "1/2", "5/8"],
      correcta: 0,
      explicacion: "Mayores que 5: {6, 7, 8} → 3 casos. P = 3/8.",
      pasos: [{ pre: "Favorables {6,7,8}: ", math: "P = \\dfrac{3}{8}" }]
    },
    {
      id: "px4",
      tipo: "ejercicio",
      svgDiagram: "dos-dados",
      etiqueta: "Probabilidad · Ejercicio 4 / 14",
      pregunta: "Se lanzan dos dados. ¿Cuál es la probabilidad de que la suma sea 10 o más?",
      math_pregunta: "\\#\\Omega = 6 \\times 6 = 36",
      opciones: ["1/6", "1/12", "5/36"],
      correcta: 0,
      explicacion: "Suma 10: (4,6),(5,5),(6,4)=3; suma 11: (5,6),(6,5)=2; suma 12: (6,6)=1. Total 6 casos. P = 6/36 = 1/6.",
      pasos: [
        { pre: "Favorables: ", math: "3 + 2 + 1 = 6" },
        { pre: "Probabilidad: ", math: "P = \\dfrac{6}{36} = \\dfrac{1}{6}" }
      ]
    },
    {
      id: "px5",
      tipo: "ejercicio",
      svgDiagram: "ej-combinatoria",
      etiqueta: "Probabilidad · Ejercicio 5 / 14",
      pregunta: "¿De cuántas formas se puede elegir un comité de 3 personas de un grupo de 8?",
      math_pregunta: "n = 8,\\ r = 3,\\ \\text{el orden NO importa}",
      opciones: ["56", "336", "24"],
      correcta: 0,
      explicacion: "Como el orden no importa es una combinación: C(8,3) = 8!/(3!·5!) = (8·7·6)/6 = 56. (336 = 8·7·6 sería si el orden importara.)",
      pasos: [{ pre: "Combinaciones: ", math: "C(8,3) = \\dfrac{8\\cdot 7\\cdot 6}{3!} = \\dfrac{336}{6} = 56" }]
    },
    {
      id: "px6",
      tipo: "ejercicio",
      svgDiagram: "ej-combinatoria",
      etiqueta: "Probabilidad · Ejercicio 6 / 14",
      pregunta: "¿Cuántas claves de 3 dígitos DISTINTOS se pueden formar con los números del 1 al 5?",
      math_pregunta: "n = 5,\\ r = 3,\\ \\text{el orden SÍ importa}",
      opciones: ["60", "125", "10"],
      correcta: 0,
      explicacion: "El orden importa y no se repiten dígitos: es una permutación. P(5,3) = 5·4·3 = 60. (125 = 5³ permitiría repetir; 10 = C(5,3) ignoraría el orden.)",
      pasos: [{ pre: "Permutaciones: ", math: "P(5,3) = 5\\cdot 4\\cdot 3 = 60" }]
    },
    {
      id: "px7",
      tipo: "ejercicio",
      svgDiagram: "ej-dos-monedas",
      etiqueta: "Probabilidad · Ejercicio 7 / 14",
      pregunta: "Se lanza una moneda dos veces. ¿Cuál es la probabilidad de obtener al menos una cara?",
      math_pregunta: "\\Omega = \\{CC, CX, XC, XX\\}",
      opciones: ["3/4", "1/2", "1/4"],
      correcta: 0,
      explicacion: "Por el complemento: P(al menos una cara) = 1 − P(ninguna) = 1 − P(XX) = 1 − ¼ = ¾.",
      pasos: [
        { pre: "Complemento (XX): ", math: "P(\\text{XX}) = \\tfrac{1}{2}\\cdot\\tfrac{1}{2} = \\tfrac{1}{4}" },
        { pre: "Al menos una cara: ", math: "1 - \\tfrac{1}{4} = \\tfrac{3}{4}" }
      ]
    },
    {
      id: "px8",
      tipo: "ejercicio",
      svgDiagram: "ej-urna-rav",
      etiqueta: "Probabilidad · Ejercicio 8 / 14",
      pregunta: "Una urna tiene 4 bolas rojas, 3 azules y 2 verdes. Se saca una al azar. ¿Cuál es la probabilidad de que sea roja o verde?",
      math_pregunta: "\\#\\Omega = 4 + 3 + 2 = 9",
      opciones: ["2/3", "4/9", "5/9"],
      correcta: 0,
      explicacion: "Roja y verde son excluyentes (una bola no es ambas): P = 4/9 + 2/9 = 6/9 = 2/3.",
      pasos: [{ pre: "Regla de la suma (excluyentes): ", math: "\\tfrac{4}{9} + \\tfrac{2}{9} = \\tfrac{6}{9} = \\tfrac{2}{3}" }]
    },
    {
      id: "px9",
      tipo: "ejercicio",
      svgDiagram: "ej-moneda-dado",
      etiqueta: "Probabilidad · Ejercicio 9 / 14",
      pregunta: "Se lanza una moneda y un dado. ¿Cuál es la probabilidad de obtener cruz y un número par?",
      math_pregunta: "P(\\text{cruz}) = \\tfrac{1}{2},\\ P(\\text{par}) = \\tfrac{3}{6}",
      opciones: ["1/4", "1/12", "1/3"],
      correcta: 0,
      explicacion: "Son independientes: P(cruz) = 1/2 y P(par) = 3/6 = 1/2. Por la regla del producto: P = 1/2 · 1/2 = 1/4.",
      pasos: [{ pre: "Regla del producto: ", math: "P = \\tfrac{1}{2}\\cdot\\tfrac{1}{2} = \\tfrac{1}{4}" }]
    },
    {
      id: "px10",
      tipo: "ejercicio",
      svgDiagram: "ej-urna-r5a3",
      etiqueta: "Probabilidad · Ejercicio 10 / 14",
      pregunta: "Una urna tiene 5 rojas y 3 azules. Se sacan 2 sin reemplazo. ¿Cuál es la probabilidad de que ambas sean rojas?",
      math_pregunta: "5\\text{ rojas},\\ 3\\text{ azules},\\ \\text{sin reemplazo}",
      opciones: ["5/14", "25/64", "5/8"],
      correcta: 0,
      explicacion: "Sin reemplazo el denominador cambia: P = 5/8 · 4/7 = 20/56 = 5/14. (25/64 supondría reemplazo.)",
      pasos: [
        { pre: "Primera roja: ", math: "\\tfrac{5}{8}" },
        { pre: "Segunda roja (quedan 4 de 7): ", math: "\\tfrac{4}{7}" },
        { pre: "Producto: ", math: "\\tfrac{5}{8}\\cdot\\tfrac{4}{7} = \\tfrac{5}{14}" }
      ]
    },
    {
      id: "px11",
      tipo: "ejercicio",
      svgDiagram: "ej-carta-as",
      etiqueta: "Probabilidad · Ejercicio 11 / 14",
      pregunta: "De una baraja de 52 cartas se sacan 2 sin reemplazo. ¿Cuál es la probabilidad de que ambas sean ases?",
      math_pregunta: "4\\text{ ases en }52,\\ \\text{sin reemplazo}",
      opciones: ["1/221", "1/169", "1/26"],
      correcta: 0,
      explicacion: "P = 4/52 · 3/51 = 12/2652 = 1/221. El segundo factor baja a 3/51 porque ya se retiró un as. (1/169 supondría reemplazo.)",
      pasos: [{ pre: "Producto sin reemplazo: ", math: "\\tfrac{4}{52}\\cdot\\tfrac{3}{51} = \\tfrac{1}{221}" }]
    },
    {
      id: "px12",
      tipo: "ejercicio",
      svgDiagram: "arbol-urna",
      etiqueta: "Probabilidad · Ejercicio 12 / 14",
      pregunta: "Una urna tiene 3 rojas y 2 azules. Se saca una bola, resulta azul y NO se devuelve. ¿Cuál es la probabilidad de que la siguiente sea roja?",
      math_pregunta: "P(\\text{roja} \\mid \\text{ya salió azul})",
      opciones: ["3/4", "3/5", "2/5"],
      correcta: 0,
      explicacion: "Tras sacar una azul quedan 3 rojas y 1 azul: 4 bolas. P(roja | azul) = 3/4. La condición cambió el espacio muestral.",
      pasos: [{ pre: "Quedan 3R de 4 bolas: ", math: "P(\\text{roja}\\mid\\text{azul}) = \\tfrac{3}{4}" }]
    },
    {
      id: "px13",
      tipo: "ejercicio",
      svgDiagram: "dos-dados",
      etiqueta: "Probabilidad · Ejercicio 13 / 14",
      pregunta: "Se lanzan dos dados. ¿Cuál es la probabilidad de obtener al menos un 5?",
      math_pregunta: "\\#\\Omega = 36",
      opciones: ["11/36", "1/3", "10/36"],
      correcta: 0,
      explicacion: "Por el complemento: P(al menos un 5) = 1 − P(ningún 5) = 1 − (5/6)² = 1 − 25/36 = 11/36.",
      pasos: [
        { pre: "Ningún 5: ", math: "\\left(\\tfrac{5}{6}\\right)^2 = \\tfrac{25}{36}" },
        { pre: "Complemento: ", math: "1 - \\tfrac{25}{36} = \\tfrac{11}{36}" }
      ]
    },
    {
      id: "px14",
      tipo: "ejercicio",
      svgDiagram: "frecuencias-dado",
      etiqueta: "Probabilidad · Ejercicio 14 / 14",
      pregunta: "Una chinche se lanzó 400 veces y cayó «de punta» 260 veces. Según la frecuencia relativa, ¿cuál es la probabilidad estimada de que caiga de punta?",
      math_pregunta: "f = 260,\\ n = 400",
      opciones: ["0.65", "0.5", "0.35"],
      correcta: 0,
      explicacion: "Como no son equiprobables, se estima con la frecuencia relativa: fᵣ = 260/400 = 0.65 (65 %). Laplace no aplica a una chinche.",
      pasos: [{ pre: "Frecuencia relativa: ", math: "f_r = \\dfrac{260}{400} = 0.65" }]
    },

    // ── RESUMEN ───────────────────────────────────────────────────────────────
    {
      id: "resumen",
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Lo esencial de probabilidad",
      puntos: [
        { math: "P(E) = \\dfrac{\\#E}{\\#\\Omega},\\ 0 \\le P \\le 1", texto: "regla de Laplace (resultados equiprobables)" },
        { math: "N = n_1 \\times n_2 \\times \\cdots", texto: "principio multiplicativo; P(n,r) ordena, C(n,r) no" },
        { math: "P(E') = 1 - P(E)", texto: "complemento: la vía rápida del «al menos uno»" },
        { math: "P(E \\cup F) = P(E) + P(F) - P(E \\cap F)", texto: "regla de la suma («o»); excluyentes: la resta es 0" },
        { math: "P(E \\cap F) = P(E)\\cdot P(F)", texto: "regla del producto («y») para independientes" },
        { math: "P(A \\cap B) = P(A)\\cdot P(B\\mid A)", texto: "condicional / sin reemplazo: cambia el denominador" },
        { math: "f_r = \\dfrac{f}{n} \\to P(E)", texto: "frecuentista: estima P cuando Laplace no aplica" }
      ]
    }

  ]
};
