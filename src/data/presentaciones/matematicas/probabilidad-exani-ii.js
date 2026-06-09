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

    // ── PERMUTACIONES · EJEMPLOS ──────────────────────────────────────────────

    {
      id: "perm-ej1",
      tipo: "criterio_detalle",
      titulo: "Permutaciones · Ejemplo 1",
      etiqueta: "Con repetición: anagramas de una palabra",
      svgDiagram: "permutaciones-casillas",
      enunciado: "¿Cuántas «palabras» distintas se pueden formar usando TODAS las letras de la palabra MAMÁ (sin acento: M, A, M, A)?",
      math: "\\dfrac{4!}{2!\\,2!} = \\dfrac{24}{4} = 6",
      por_que: "Si las 4 letras fueran distintas habría 4! = 24 acomodos, pero la M se repite 2 veces y la A también: cada palabra se cuenta 2!·2! = 4 veces de más. Se divide entre esos repetidos: 24 ÷ 4 = 6. Es la permutación CON repetición.",
      math_razon: "\\dfrac{n!}{n_1!\\,n_2!\\cdots}"
    },
    {
      id: "perm-ej2",
      tipo: "criterio_detalle",
      titulo: "Permutaciones · Ejemplo 2",
      etiqueta: "Con restricción: dos deben ir juntos",
      enunciado: "Cuatro amigos se forman en fila, pero dos de ellos (Ana y Beto) quieren ir juntos. ¿De cuántas maneras pueden ordenarse?",
      math: "3! \\cdot 2! = 6 \\cdot 2 = 12",
      por_que: "Se «pegan» Ana y Beto en un solo bloque: quedan 3 elementos por ordenar (el bloque + los otros 2), que dan 3! = 6 formas. Pero dentro del bloque Ana-Beto pueden ir en 2! = 2 órdenes. Por el principio multiplicativo: 6 × 2 = 12.",
      math_razon: "(\\text{bloque})\\;3! \\times (\\text{interno})\\;2!"
    },
    {
      id: "perm-ej3",
      tipo: "criterio_detalle",
      titulo: "Permutaciones · Ejemplo 3",
      etiqueta: "Circular: alrededor de una mesa",
      enunciado: "¿De cuántas maneras distintas pueden sentarse 5 personas alrededor de una mesa redonda?",
      math: "(5-1)! = 4! = 24",
      por_que: "En una mesa redonda no hay «primer lugar»: lo que importa es quién queda junto a quién, no la silla. Se fija a una persona como referencia y se ordenan las demás: (n − 1)! = 4! = 24. Por eso la permutación circular es (n − 1)!, no n!.",
      math_razon: "\\text{circular} = (n-1)!"
    },

    // ── PERMUTACIONES · EJERCICIOS ────────────────────────────────────────────

    {
      id: "perm-x1",
      tipo: "ejercicio",
      svgDiagram: "ej-combinatoria",
      etiqueta: "Permutaciones · Ejercicio 1 / 5",
      pregunta: "¿Cuántas «palabras» distintas se forman con todas las letras de CANCÁN (C, A, N, C, A, N)?",
      opciones: ["90", "720", "120"],
      correcta: 0,
      explicacion: "6 letras con C, A y N repetidas 2 veces cada una: 6!/(2!·2!·2!) = 720/8 = 90.",
    },
    {
      id: "perm-x2",
      tipo: "ejercicio",
      svgDiagram: "ej-combinatoria",
      etiqueta: "Permutaciones · Ejercicio 2 / 5",
      pregunta: "Cinco personas se forman en fila, pero dos de ellas deben ir siempre juntas. ¿De cuántas maneras pueden ordenarse?",
      opciones: ["48", "120", "24"],
      correcta: 0,
      explicacion: "Bloque de las 2 juntas: quedan 4 elementos → 4! = 24, por 2! del orden interno: 24 × 2 = 48.",
    },
    {
      id: "perm-x3",
      tipo: "ejercicio",
      etiqueta: "Permutaciones · Ejercicio 3 / 5",
      pregunta: "¿De cuántas maneras distintas pueden sentarse 6 personas alrededor de una mesa redonda?",
      opciones: ["120", "720", "60"],
      correcta: 0,
      explicacion: "Permutación circular: (6 − 1)! = 5! = 120. (720 = 6! contaría como distintas las rotaciones de la misma disposición.)",
    },
    {
      id: "perm-x4",
      tipo: "ejercicio",
      svgDiagram: "permutaciones-casillas",
      etiqueta: "Permutaciones · Ejercicio 4 / 5",
      pregunta: "Se izan en un mástil 7 banderas en fila: 3 rojas, 2 azules y 2 verdes (iguales entre sí por color). ¿Cuántas señales distintas se forman?",
      opciones: ["210", "5040", "420"],
      correcta: 0,
      explicacion: "Permutación con repetición: 7!/(3!·2!·2!) = 5040/24 = 210.",
    },
    {
      id: "perm-x5",
      tipo: "ejercicio",
      etiqueta: "Permutaciones · Ejercicio 5 / 5",
      pregunta: "¿Cuántos números IMPARES de 3 cifras distintas se pueden formar con los dígitos 1, 2, 3, 4 y 5?",
      opciones: ["36", "60", "24"],
      correcta: 0,
      explicacion: "Para que sea impar, la última cifra es 1, 3 o 5 → 3 opciones; las otras dos se eligen ordenadas de los 4 dígitos restantes: P(4,2) = 12. Total 3 × 12 = 36.",
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

    // ── COMBINACIONES · EJEMPLOS ──────────────────────────────────────────────

    {
      id: "comb-ej1",
      tipo: "criterio_detalle",
      titulo: "Combinaciones · Ejemplo 1",
      etiqueta: "Por grupos: se eligen de dos conjuntos",
      svgDiagram: "combinaciones-casillas",
      enunciado: "De 4 hombres y 5 mujeres se quiere formar un comité de 3 personas con exactamente 1 hombre y 2 mujeres. ¿De cuántas formas se puede integrar?",
      math: "C(4,1)\\cdot C(5,2) = 4 \\cdot 10 = 40",
      por_que: "Se elige por separado y se MULTIPLICA: el hombre se escoge de C(4,1) = 4 formas y las 2 mujeres de C(5,2) = 10 formas. Cada elección de hombre se combina con cada elección de mujeres: 4 × 10 = 40.",
      math_razon: "C(4,1)\\cdot C(5,2) = 40"
    },
    {
      id: "comb-ej2",
      tipo: "criterio_detalle",
      titulo: "Combinaciones · Ejemplo 2",
      etiqueta: "«Al menos uno»: por el complemento",
      enunciado: "De 8 productos, 2 están defectuosos. Se eligen 3 al azar. ¿De cuántas formas la muestra incluye AL MENOS un defectuoso?",
      math: "C(8,3) - C(6,3) = 56 - 20 = 36",
      por_que: "«Al menos uno» es más fácil por el complemento: todas las formas de elegir 3 (C(8,3) = 56) MENOS las que no llevan ningún defectuoso, es decir, las 3 elegidas entre los 6 buenos (C(6,3) = 20). 56 − 20 = 36.",
      math_razon: "\\text{total} - \\text{ninguno}"
    },
    {
      id: "comb-ej3",
      tipo: "criterio_detalle",
      titulo: "Combinaciones · Ejemplo 3",
      etiqueta: "Geométricas: triángulos con puntos",
      enunciado: "Sobre una circunferencia hay 6 puntos. ¿Cuántos triángulos distintos se pueden formar con vértices en esos puntos?",
      math: "C(6,3) = \\dfrac{6\\cdot 5\\cdot 4}{3!} = 20",
      por_que: "Un triángulo queda determinado por 3 puntos sin importar el orden, y como están sobre una circunferencia no hay 3 alineados: cada terna da un triángulo. Es C(6,3) = 20. (Para diagonales de un polígono sería C(n,2) − n, restando los lados.)",
      math_razon: "\\text{cada terna de puntos} = 1\\text{ triángulo}"
    },

    // ── COMBINACIONES · EJERCICIOS ────────────────────────────────────────────

    {
      id: "comb-x1",
      tipo: "ejercicio",
      svgDiagram: "ej-combinatoria",
      etiqueta: "Combinaciones · Ejercicio 1 / 5",
      pregunta: "De 5 hombres y 6 mujeres se forma un comité de 4 con 2 hombres y 2 mujeres. ¿De cuántas formas se puede integrar?",
      opciones: ["150", "330", "36"],
      correcta: 0,
      explicacion: "Se eligen por grupos y se multiplica: C(5,2)·C(6,2) = 10 · 15 = 150.",
    },
    {
      id: "comb-x2",
      tipo: "ejercicio",
      svgDiagram: "ej-combinatoria",
      etiqueta: "Combinaciones · Ejercicio 2 / 5",
      pregunta: "De 10 focos, 3 están fundidos. Se eligen 4 al azar. ¿De cuántas formas la muestra incluye al menos un fundido?",
      opciones: ["175", "35", "210"],
      correcta: 0,
      explicacion: "Por el complemento: C(10,4) − C(7,4) = 210 − 35 = 175 (todas menos las que no llevan ningún fundido).",
    },
    {
      id: "comb-x3",
      tipo: "ejercicio",
      etiqueta: "Combinaciones · Ejercicio 3 / 5",
      pregunta: "Un comité de 5 personas se elige de un grupo de 9, pero el director DEBE estar siempre. ¿De cuántas formas se integra el resto?",
      opciones: ["70", "126", "56"],
      correcta: 0,
      explicacion: "Fijo el director, faltan 4 lugares para los 8 restantes: C(8,4) = 70.",
    },
    {
      id: "comb-x4",
      tipo: "ejercicio",
      etiqueta: "Combinaciones · Ejercicio 4 / 5",
      pregunta: "¿Cuántas diagonales tiene un octágono (polígono de 8 lados)?",
      opciones: ["20", "28", "16"],
      correcta: 0,
      explicacion: "Segmentos entre vértices: C(8,2) = 28; se restan los 8 lados (no son diagonales): 28 − 8 = 20.",
    },
    {
      id: "comb-x5",
      tipo: "ejercicio",
      svgDiagram: "ej-combinatoria",
      etiqueta: "Combinaciones · Ejercicio 5 / 5",
      pregunta: "En una baraja de 52, ¿cuántas manos de 5 cartas se pueden formar que sean todas del mismo palo?",
      opciones: ["5148", "1287", "2598960"],
      correcta: 0,
      explicacion: "Por cada palo, C(13,5) = 1287 manos; como hay 4 palos: 4 × 1287 = 5148.",
    },

    // ── CUÁNDO LAPLACE NO APLICA · FRECUENTISTA ──────────────────────────────
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

    // ── PROBABILIDAD AXIOMÁTICA ───────────────────────────────────────────────
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

    // ── REGLA DE LA SUMA · EJEMPLOS ───────────────────────────────────────────

    {
      id: "suma-ej1",
      tipo: "criterio_detalle",
      titulo: "Regla de la Suma · Ejemplo 1",
      etiqueta: "Inclusión-exclusión con múltiplos",
      svgDiagram: "regla-suma",
      enunciado: "Se elige al azar un número del 1 al 20. ¿Cuál es la probabilidad de que sea múltiplo de 2 o de 3?",
      math: "P = \\tfrac{10}{20} + \\tfrac{6}{20} - \\tfrac{3}{20} = \\tfrac{13}{20}",
      por_que: "Múltiplos de 2: 10 números; de 3: 6 números; pero los múltiplos de 6 (6, 12, 18 = 3 números) están en AMBOS y se contarían dos veces. Se restan: (10 + 6 − 3)/20 = 13/20.",
      math_razon: "P(A\\cup B) = P(A)+P(B)-P(A\\cap B)"
    },
    {
      id: "suma-ej2",
      tipo: "criterio_detalle",
      titulo: "Regla de la Suma · Ejemplo 2",
      etiqueta: "Cartas con solapamiento grande",
      svgDiagram: "ej-carta-as",
      enunciado: "De una baraja de 52 se saca una carta. ¿Cuál es la probabilidad de que sea roja o figura (J, Q, K)?",
      math: "P = \\tfrac{26}{52} + \\tfrac{12}{52} - \\tfrac{6}{52} = \\tfrac{32}{52} = \\tfrac{8}{13}",
      por_que: "Rojas: 26; figuras: 12; pero las figuras rojas (J, Q, K de corazones y de diamantes = 6) están en ambos grupos. Por inclusión-exclusión: 26 + 12 − 6 = 32, y 32/52 = 8/13.",
      math_razon: "\\text{rojas} \\cap \\text{figuras} = 6"
    },
    {
      id: "suma-ej3",
      tipo: "criterio_detalle",
      titulo: "Regla de la Suma · Ejemplo 3",
      etiqueta: "Dos dados con eventos que se traslapan",
      svgDiagram: "dos-dados",
      enunciado: "Se lanzan dos dados. ¿Cuál es la probabilidad de que la suma sea 7 o que salga al menos un 1?",
      math: "P = \\tfrac{6}{36} + \\tfrac{11}{36} - \\tfrac{2}{36} = \\tfrac{15}{36} = \\tfrac{5}{12}",
      por_que: "Suma 7: 6 pares. Al menos un 1: 11 pares. Su intersección —pares que suman 7 Y tienen un 1— son (1,6) y (6,1) = 2. Se restan para no contarlos doble: 6 + 11 − 2 = 15, y 15/36 = 5/12.",
      math_razon: "\\#(A\\cap B) = 2"
    },

    // ── REGLA DE LA SUMA · EJERCICIOS ─────────────────────────────────────────

    {
      id: "suma-x1",
      tipo: "ejercicio",
      svgDiagram: "espacio-muestral",
      etiqueta: "Regla de la suma · Ejercicio 1 / 5",
      pregunta: "Se elige al azar un número del 1 al 30. ¿Probabilidad de que sea múltiplo de 2 o de 3?",
      opciones: ["2/3", "5/6", "1/2"],
      correcta: 0,
      explicacion: "Múltiplos de 2: 15; de 3: 10; de 6 (ambos): 5. P = (15 + 10 − 5)/30 = 20/30 = 2/3.",
    },
    {
      id: "suma-x2",
      tipo: "ejercicio",
      svgDiagram: "dos-dados",
      etiqueta: "Regla de la suma · Ejercicio 2 / 5",
      pregunta: "Se lanzan dos dados. ¿Probabilidad de que la suma sea par o mayor que 9?",
      opciones: ["5/9", "2/3", "1/2"],
      correcta: 0,
      explicacion: "Suma par: 18 pares; suma > 9 (10,11,12): 6 pares; intersección (par y >9: sumas 10 y 12): 4. P = (18 + 6 − 4)/36 = 20/36 = 5/9.",
    },
    {
      id: "suma-x3",
      tipo: "ejercicio",
      svgDiagram: "ej-carta-as",
      etiqueta: "Regla de la suma · Ejercicio 3 / 5",
      pregunta: "De una baraja de 52, ¿probabilidad de sacar una carta de corazones o una figura (J, Q, K)?",
      opciones: ["11/26", "25/52", "1/4"],
      correcta: 0,
      explicacion: "Corazones: 13; figuras: 12; figuras de corazones (J, Q, K ♥): 3. P = (13 + 12 − 3)/52 = 22/52 = 11/26.",
    },
    {
      id: "suma-x4",
      tipo: "ejercicio",
      svgDiagram: "espacio-muestral",
      etiqueta: "Regla de la suma · Ejercicio 4 / 5",
      pregunta: "Se elige un número del 1 al 20. ¿Probabilidad de que sea primo o mayor que 15?",
      opciones: ["11/20", "13/20", "1/2"],
      correcta: 0,
      explicacion: "Primos {2,3,5,7,11,13,17,19}: 8; mayores que 15 {16,17,18,19,20}: 5; ambos {17,19}: 2. P = (8 + 5 − 2)/20 = 11/20.",
    },
    {
      id: "suma-x5",
      tipo: "ejercicio",
      svgDiagram: "dos-dados",
      etiqueta: "Regla de la suma · Ejercicio 5 / 5",
      pregunta: "Se lanzan dos dados. ¿Probabilidad de que la suma sea 5 o que ambos dados muestren el mismo número (dobles)?",
      opciones: ["5/18", "1/3", "1/6"],
      correcta: 0,
      explicacion: "Suma 5: 4 pares; dobles: 6 pares; intersección: ninguno (no hay doble que sume 5). P = (4 + 6)/36 = 10/36 = 5/18.",
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

    // ── REGLA DEL PRODUCTO · EJEMPLOS ─────────────────────────────────────────

    {
      id: "prod-ej1",
      tipo: "criterio_detalle",
      titulo: "Regla del Producto · Ejemplo 1",
      etiqueta: "«Al menos uno» en ensayos repetidos",
      svgDiagram: "dos-dados",
      enunciado: "Se lanza un dado tres veces. ¿Cuál es la probabilidad de obtener al menos un 6?",
      math: "P = 1 - \\left(\\tfrac{5}{6}\\right)^3 = 1 - \\tfrac{125}{216} = \\tfrac{91}{216}",
      por_que: "«Al menos uno» se ataca por el complemento: lo contrario es «ningún 6 en los tres tiros». Cada tiro evita el 6 con probabilidad 5/6 y son independientes, así que se multiplican: (5/6)³ = 125/216. El complemento es 1 − 125/216 = 91/216.",
      math_razon: "P(\\text{al menos uno}) = 1 - P(\\text{ninguno})"
    },
    {
      id: "prod-ej2",
      tipo: "criterio_detalle",
      titulo: "Regla del Producto · Ejemplo 2",
      etiqueta: "Ensayos independientes en cadena",
      svgDiagram: "arbol-monedas",
      enunciado: "Un tirador acierta al blanco con probabilidad 0.8 en cada disparo, independientemente. ¿Cuál es la probabilidad de que acierte tres disparos seguidos?",
      math: "P = 0.8 \\times 0.8 \\times 0.8 = 0.8^3 = 0.512",
      por_que: "Como los disparos son independientes, la probabilidad de aciertos consecutivos es el producto: 0.8³ = 0.512. Cada factor repite la misma probabilidad porque las condiciones no cambian de un disparo a otro.",
      math_razon: "0.8^3 = 0.512"
    },
    {
      id: "prod-ej3",
      tipo: "criterio_detalle",
      titulo: "Regla del Producto · Ejemplo 3",
      etiqueta: "Exactamente k: producto × acomodos",
      svgDiagram: "arbol-tres-monedas",
      enunciado: "Se lanza una moneda tres veces. ¿Cuál es la probabilidad de obtener exactamente 2 caras?",
      math: "P = C(3,2)\\left(\\tfrac{1}{2}\\right)^3 = 3 \\cdot \\tfrac{1}{8} = \\tfrac{3}{8}",
      por_que: "Cada resultado de 3 lanzamientos vale (½)³ = ⅛. Pero «exactamente 2 caras» ocurre de varias maneras (CCX, CXC, XCC): son C(3,2) = 3 acomodos. Se multiplica la probabilidad de un camino por el número de caminos: 3 × ⅛ = 3/8.",
      math_razon: "P = C(n,k)\\,p^k(1-p)^{n-k}"
    },

    // ── REGLA DEL PRODUCTO · EJERCICIOS ───────────────────────────────────────

    {
      id: "prod-x1",
      tipo: "ejercicio",
      svgDiagram: "ej-dos-monedas",
      etiqueta: "Regla del producto · Ejercicio 1 / 5",
      pregunta: "Se lanza una moneda cuatro veces. ¿Cuál es la probabilidad de obtener al menos una cara?",
      opciones: ["15/16", "1/16", "1/4"],
      correcta: 0,
      explicacion: "Complemento: 1 − P(ninguna cara) = 1 − (1/2)⁴ = 1 − 1/16 = 15/16.",
    },
    {
      id: "prod-x2",
      tipo: "ejercicio",
      svgDiagram: "ej-combinatoria",
      etiqueta: "Regla del producto · Ejercicio 2 / 5",
      pregunta: "Un examen tiene 3 preguntas de opción múltiple con 4 opciones cada una. Si se responde al azar, ¿probabilidad de acertar las 3?",
      opciones: ["1/64", "3/4", "1/12"],
      correcta: 0,
      explicacion: "Independientes, P(acertar una) = 1/4: P = (1/4)³ = 1/64.",
    },
    {
      id: "prod-x3",
      tipo: "ejercicio",
      svgDiagram: "dos-dados",
      etiqueta: "Regla del producto · Ejercicio 3 / 5",
      pregunta: "Se lanza un dado dos veces. ¿Probabilidad de que el primero sea múltiplo de 3 y el segundo sea primo?",
      opciones: ["1/6", "1/4", "5/6"],
      correcta: 0,
      explicacion: "Múltiplo de 3 {3,6} = 2/6 = 1/3; primo {2,3,5} = 3/6 = 1/2; independientes: 1/3 · 1/2 = 1/6.",
    },
    {
      id: "prod-x4",
      tipo: "ejercicio",
      svgDiagram: "frecuencias-dado",
      etiqueta: "Regla del producto · Ejercicio 4 / 5",
      pregunta: "Dos máquinas fallan de forma independiente con probabilidades 0.1 y 0.2. ¿Probabilidad de que NINGUNA falle?",
      opciones: ["0.72", "0.7", "0.02"],
      correcta: 0,
      explicacion: "P(no falle cada una) = 0.9 y 0.8; independientes: 0.9 × 0.8 = 0.72.",
    },
    {
      id: "prod-x5",
      tipo: "ejercicio",
      svgDiagram: "ej-dos-monedas",
      etiqueta: "Regla del producto · Ejercicio 5 / 5",
      pregunta: "Se lanza una moneda cuatro veces. ¿Probabilidad de obtener exactamente 3 caras?",
      opciones: ["1/4", "1/16", "3/8"],
      correcta: 0,
      explicacion: "Hay C(4,3) = 4 acomodos, cada uno con probabilidad (1/2)⁴ = 1/16: P = 4 · 1/16 = 4/16 = 1/4.",
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

    // ── CONDICIONAL · EJEMPLOS SIMPLES ────────────────────────────────────────

    {
      id: "cond-ej1",
      tipo: "criterio_detalle",
      titulo: "Condicional · Ejemplo 1",
      etiqueta: "Una etapa: ya cambió el espacio muestral",
      svgDiagram: "arbol-urna",
      enunciado: "Una urna tiene 4 bolas rojas y 2 azules. Se saca una roja y NO se devuelve. Si se saca otra bola, ¿cuál es la probabilidad de que también sea roja?",
      math: "P(\\text{roja} \\mid \\text{ya salió roja}) = \\tfrac{3}{5}",
      por_que: "La condición «ya salió una roja» cambia el conteo: ahora quedan 3 rojas entre 5 bolas. La probabilidad de la segunda roja es 3/5. La idea central de la condicional es volver a contar SOBRE lo que queda.",
      math_razon: "\\text{quedan } 3\\text{ rojas de } 5"
    },
    {
      id: "cond-ej2",
      tipo: "criterio_detalle",
      titulo: "Condicional · Ejemplo 2",
      etiqueta: "Encadenar dos etapas sin reemplazo",
      svgDiagram: "arbol-urna",
      enunciado: "Una caja tiene 3 focos buenos y 2 defectuosos. Se sacan 2 focos sin reemplazo. ¿Cuál es la probabilidad de que ambos sean buenos?",
      math: "P(B \\cap B) = \\tfrac{3}{5}\\cdot\\tfrac{2}{4} = \\tfrac{6}{20} = \\tfrac{3}{10}",
      por_que: "Primer foco bueno: 3/5. Como no se devuelve, para el segundo quedan 2 buenos de 4 focos: 2/4. Se encadenan con la regla del producto condicional: 3/5 × 2/4 = 3/10.",
      math_razon: "P(A\\cap B) = P(A)\\cdot P(B\\mid A)"
    },
    {
      id: "cond-ej3",
      tipo: "criterio_detalle",
      titulo: "Condicional · Ejemplo 3",
      etiqueta: "Con reemplazo vs sin reemplazo",
      svgDiagram: "ej-carta-as",
      enunciado: "De una baraja de 52 cartas se sacan 2. ¿Cambia la probabilidad de obtener dos ases según si se devuelve o no la primera carta?",
      math: "\\text{con: } \\tfrac{4}{52}\\cdot\\tfrac{4}{52} = \\tfrac{1}{169} \\;\\;|\\;\\; \\text{sin: } \\tfrac{4}{52}\\cdot\\tfrac{3}{51} = \\tfrac{1}{221}",
      por_que: "CON reemplazo los eventos son independientes: el segundo factor sigue en 4/52. SIN reemplazo, tras sacar un as quedan 3 ases de 51 cartas, así que el segundo factor baja a 3/51. Por eso «sin reemplazo» siempre da una probabilidad menor para repetir.",
      math_razon: "\\tfrac{1}{221} < \\tfrac{1}{169}"
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

    // ── PRÁCTICA FINAL · PROBABILIDAD CLÁSICA (SIN AYUDA) ─────────────────────
    // Solo apoyo visual; el alumno debe hallar Ω, el evento y sus tamaños
    // (a menudo contando con combinaciones).

    {
      id: "pf1",
      tipo: "ejercicio",
      svgDiagram: "ej-urna-r5a3",
      etiqueta: "Práctica final · Ejercicio 1 / 20",
      pregunta: "Una urna tiene 5 rojas y 4 azules. Se sacan 2 al azar (a la vez). ¿Cuál es la probabilidad de que ambas sean rojas?",
      opciones: ["5/18", "5/14", "25/81"],
      correcta: 0,
      explicacion: "Casos: C(5,2) = 10 formas de elegir 2 rojas; total C(9,2) = 36. P = 10/36 = 5/18.",
    },
    {
      id: "pf2",
      tipo: "ejercicio",
      svgDiagram: "ej-carta-as",
      etiqueta: "Práctica final · Ejercicio 2 / 20",
      pregunta: "De una baraja de 52 se sacan 2 cartas al azar. ¿Cuál es la probabilidad de que ambas sean rojas?",
      opciones: ["25/102", "1/4", "25/51"],
      correcta: 0,
      explicacion: "C(26,2) = 325 formas de elegir 2 rojas; total C(52,2) = 1326. P = 325/1326 = 25/102.",
    },
    {
      id: "pf3",
      tipo: "ejercicio",
      svgDiagram: "dos-dados",
      etiqueta: "Práctica final · Ejercicio 3 / 20",
      pregunta: "Se lanzan dos dados. ¿Cuál es la probabilidad de que el producto de las dos caras sea par?",
      opciones: ["3/4", "1/2", "1/4"],
      correcta: 0,
      explicacion: "El producto es impar solo si ambos son impares: 3×3 = 9 pares. Pares = 36 − 9 = 27. P = 27/36 = 3/4.",
    },
    {
      id: "pf4",
      tipo: "ejercicio",
      svgDiagram: "ej-combinatoria",
      etiqueta: "Práctica final · Ejercicio 4 / 20",
      pregunta: "De 5 hombres y 3 mujeres se elige al azar un comité de 3. ¿Cuál es la probabilidad de que sean los 3 hombres?",
      opciones: ["5/28", "5/8", "1/8"],
      correcta: 0,
      explicacion: "C(5,3) = 10 comités de solo hombres; total C(8,3) = 56. P = 10/56 = 5/28.",
    },
    {
      id: "pf5",
      tipo: "ejercicio",
      svgDiagram: "dos-dados",
      etiqueta: "Práctica final · Ejercicio 5 / 20",
      pregunta: "Se lanzan dos dados. ¿Cuál es la probabilidad de que la diferencia entre la cara mayor y la menor sea exactamente 2?",
      opciones: ["2/9", "1/6", "1/4"],
      correcta: 0,
      explicacion: "Pares con diferencia 2: (1,3),(3,1),(2,4),(4,2),(3,5),(5,3),(4,6),(6,4) = 8. P = 8/36 = 2/9.",
    },
    {
      id: "pf6",
      tipo: "ejercicio",
      svgDiagram: "ej-carta-as",
      etiqueta: "Práctica final · Ejercicio 6 / 20",
      pregunta: "De una baraja de 52 se saca una carta. ¿Cuál es la probabilidad de que sea una figura roja (J, Q o K de corazones o diamantes)?",
      opciones: ["3/26", "3/13", "1/4"],
      correcta: 0,
      explicacion: "Figuras rojas: 3 por palo rojo × 2 palos = 6 cartas. P = 6/52 = 3/26.",
    },
    {
      id: "pf7",
      tipo: "ejercicio",
      svgDiagram: "ej-urna-rav",
      etiqueta: "Práctica final · Ejercicio 7 / 20",
      pregunta: "Una urna tiene 3 rojas y 5 azules. Se sacan 2 al azar (a la vez). ¿Cuál es la probabilidad de obtener una de cada color?",
      opciones: ["15/28", "15/64", "1/2"],
      correcta: 0,
      explicacion: "Favorables: C(3,1)·C(5,1) = 15; total C(8,2) = 28. P = 15/28.",
    },
    {
      id: "pf8",
      tipo: "ejercicio",
      svgDiagram: "espacio-muestral",
      etiqueta: "Práctica final · Ejercicio 8 / 20",
      pregunta: "Se elige al azar un número del 1 al 50. ¿Cuál es la probabilidad de que sea múltiplo de 7?",
      opciones: ["7/50", "1/7", "6/50"],
      correcta: 0,
      explicacion: "Múltiplos de 7 del 1 al 50: 7, 14, 21, 28, 35, 42, 49 = 7 números. P = 7/50.",
    },
    {
      id: "pf9",
      tipo: "ejercicio",
      svgDiagram: "dos-dados",
      etiqueta: "Práctica final · Ejercicio 9 / 20",
      pregunta: "Se lanzan dos dados. ¿Cuál es la probabilidad de que ambas caras sean números primos?",
      opciones: ["1/4", "1/2", "3/8"],
      correcta: 0,
      explicacion: "Primos en un dado: {2,3,5} = 3. Pares con ambos primos: 3×3 = 9. P = 9/36 = 1/4.",
    },
    {
      id: "pf10",
      tipo: "ejercicio",
      svgDiagram: "ej-combinatoria",
      etiqueta: "Práctica final · Ejercicio 10 / 20",
      pregunta: "De un grupo de 4 hombres y 4 mujeres se eligen 2 personas al azar. ¿Cuál es la probabilidad de que sean del mismo sexo?",
      opciones: ["3/7", "4/7", "1/2"],
      correcta: 0,
      explicacion: "Mismo sexo: C(4,2)+C(4,2) = 6+6 = 12; total C(8,2) = 28. P = 12/28 = 3/7.",
    },

    // ── PRÁCTICA FINAL · TEMAS COMBINADOS ─────────────────────────────────────

    {
      id: "pf11",
      tipo: "ejercicio",
      svgDiagram: "dos-dados",
      etiqueta: "Práctica final · Ejercicio 11 / 20",
      pregunta: "Se lanza un dado tres veces. ¿Cuál es la probabilidad de obtener al menos un 6?",
      opciones: ["91/216", "1/2", "125/216"],
      correcta: 0,
      explicacion: "Complemento: 1 − P(ningún 6) = 1 − (5/6)³ = 1 − 125/216 = 91/216.",
    },
    {
      id: "pf12",
      tipo: "ejercicio",
      svgDiagram: "ej-urna-r5a3",
      etiqueta: "Práctica final · Ejercicio 12 / 20",
      pregunta: "Una urna tiene 4 rojas y 6 azules. Se sacan 3 sin reemplazo. ¿Probabilidad de que las 3 sean rojas?",
      opciones: ["1/30", "8/125", "1/6"],
      correcta: 0,
      explicacion: "Sin reemplazo: 4/10 · 3/9 · 2/8 = 24/720 = 1/30.",
    },
    {
      id: "pf13",
      tipo: "ejercicio",
      svgDiagram: "ej-combinatoria",
      etiqueta: "Práctica final · Ejercicio 13 / 20",
      pregunta: "De 5 hombres y 4 mujeres se elige al azar un comité de 3. ¿Probabilidad de que sean 2 hombres y 1 mujer?",
      opciones: ["10/21", "5/14", "1/2"],
      correcta: 0,
      explicacion: "Favorables: C(5,2)·C(4,1) = 10·4 = 40; total C(9,3) = 84. P = 40/84 = 10/21.",
    },
    {
      id: "pf14",
      tipo: "ejercicio",
      svgDiagram: "espacio-muestral",
      etiqueta: "Práctica final · Ejercicio 14 / 20",
      pregunta: "Se elige al azar un número del 1 al 40. ¿Probabilidad de que sea múltiplo de 3 o de 5?",
      opciones: ["19/40", "21/40", "1/2"],
      correcta: 0,
      explicacion: "Múltiplos de 3: 13; de 5: 8; de 15 (ambos): 2. P = (13 + 8 − 2)/40 = 19/40.",
    },
    {
      id: "pf15",
      tipo: "ejercicio",
      svgDiagram: "frecuencias-dado",
      etiqueta: "Práctica final · Ejercicio 15 / 20",
      pregunta: "Un tirador acierta cada disparo con probabilidad 0.7, de forma independiente. ¿Probabilidad de acertar los 3 disparos?",
      opciones: ["0.343", "0.7", "0.21"],
      correcta: 0,
      explicacion: "Independientes: 0.7 × 0.7 × 0.7 = 0.7³ = 0.343.",
    },
    {
      id: "pf16",
      tipo: "ejercicio",
      svgDiagram: "arbol-urna",
      etiqueta: "Práctica final · Ejercicio 16 / 20",
      pregunta: "La caja A tiene 2 rojas y 3 azules; la caja B, 4 rojas y 1 azul. Se elige una caja al azar y se saca una bola. ¿Probabilidad de que sea roja?",
      opciones: ["3/5", "1/2", "2/5"],
      correcta: 0,
      explicacion: "Probabilidad total: (1/2)(2/5) + (1/2)(4/5) = 1/5 + 2/5 = 3/5.",
    },
    {
      id: "pf17",
      tipo: "ejercicio",
      svgDiagram: "ej-combinatoria",
      etiqueta: "Práctica final · Ejercicio 17 / 20",
      pregunta: "Se acomodan al azar en fila 2 mujeres y 3 hombres. ¿Cuál es la probabilidad de que las 2 mujeres queden juntas?",
      opciones: ["2/5", "1/2", "1/5"],
      correcta: 0,
      explicacion: "Favorables (mujeres como bloque): 4!·2! = 48; total 5! = 120. P = 48/120 = 2/5.",
    },
    {
      id: "pf18",
      tipo: "ejercicio",
      svgDiagram: "ej-urna-r5a3",
      etiqueta: "Práctica final · Ejercicio 18 / 20",
      pregunta: "De 10 focos, 3 están fundidos. Se eligen 2 al azar. ¿Probabilidad de que al menos uno esté fundido?",
      opciones: ["8/15", "7/15", "3/10"],
      correcta: 0,
      explicacion: "Complemento: 1 − C(7,2)/C(10,2) = 1 − 21/45 = 24/45 = 8/15.",
    },
    {
      id: "pf19",
      tipo: "ejercicio",
      svgDiagram: "ej-dos-monedas",
      etiqueta: "Práctica final · Ejercicio 19 / 20",
      pregunta: "Una familia tiene 2 hijos. Sabiendo que al menos uno es niño, ¿cuál es la probabilidad de que ambos sean niños?",
      opciones: ["1/3", "1/2", "1/4"],
      correcta: 0,
      explicacion: "Condicional: con «al menos un niño», Ω se reduce a {NN, NM, MN} = 3 casos; ambos niños = {NN} = 1. P = 1/3.",
    },
    {
      id: "pf20",
      tipo: "ejercicio",
      svgDiagram: "dos-dados",
      etiqueta: "Práctica final · Ejercicio 20 / 20",
      pregunta: "Se lanzan dos dados. Sabiendo que el primero mostró un 5, ¿cuál es la probabilidad de que la suma sea 8?",
      opciones: ["1/6", "1/9", "5/36"],
      correcta: 0,
      explicacion: "Dado que el primero es 5, el segundo debe ser 3 para sumar 8: 1 caso de 6 posibles. P = 1/6.",
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
