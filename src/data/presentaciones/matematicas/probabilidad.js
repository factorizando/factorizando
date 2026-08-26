// Datos de la presentación: Probabilidad (EXANI-I)

export const PRESENTACION = {
  id: "probabilidad",
  titulo: "Probabilidad",
  materia: "Matemáticas",
  examenes: ["EXANI-I"],
  subtema: "Probabilidad y Estadística",
  slides: [
    {
      id: 0,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "portada",
          kicker: "Pensamiento Matemático · EXANI-I",
          titulo: "Probabilidad",
          subtitulo: "Espacio muestral, regla de Laplace, conteo y eventos compuestos",
          figura: "prob-portada",
        },
      ],
    },
    {
      id: "conceptos",
      tipo: "lienzo",
      etiqueta: "El lenguaje de la probabilidad",
      titulo: "Conceptos Básicos",
      bloques: [
        {
          tipo: "formula",
          math: "E \\subseteq \\Omega",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "espacio-muestral",
        },
        {
          tipo: "lista",
          ancho: 6,
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
                "Lanzar una tachuela",
              ],
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
                "Tachuela: {punta arriba, punta abajo}",
              ],
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
                "Tachuela: «punta arriba»",
              ],
            },
            {
              math: "\\#E",
              texto: "casos favorables: cuántos resultados cumplen el evento",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Al lanzar un dado, Ω = {1, 2, 3, 4, 5, 6}. El evento «sale número par» es E = {2, 4, 6}, con #E = 3 casos favorables.",
        },
      ],
    },
    {
      id: "laplace",
      tipo: "lienzo",
      etiqueta: "Casos favorables entre casos posibles",
      titulo: "Probabilidad Clásica (Laplace)",
      bloques: [
        {
          tipo: "destacado",
          texto: "Cuando todos los resultados son igualmente probables, la probabilidad de un evento E es el número de casos favorables dividido entre el número total de casos posibles.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "escala-probabilidad",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "P(E) = \\dfrac{\\text{casos favorables}}{\\text{casos posibles}} = \\dfrac{\\#E}{\\#\\Omega}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Toda probabilidad vive entre 0 y 1: vale 0 si el evento es imposible y 1 si es seguro. En el dado, P(par) = 3/6 = 1/2 = 0.5. Multiplicando por 100 se expresa como porcentaje.",
        },
        {
          tipo: "formula",
          math: "0 \\le P(E) \\le 1, \\qquad P(\\text{imposible}) = 0,\\quad P(\\text{seguro}) = 1",
        },
      ],
    },
    {
      id: "ej-moneda",
      tipo: "lienzo",
      etiqueta: "El caso más simple de Laplace",
      titulo: "Ejemplo 1 · Lanzar una Moneda",
      bloques: [
        {
          tipo: "destacado",
          texto: "Se lanza una moneda justa una sola vez. ¿Cuál es la probabilidad de que salga cara? El espacio muestral tiene apenas dos resultados igualmente probables: Ω = {cara, cruz}.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "una-moneda",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "P(\\text{cara}) = \\dfrac{\\#E}{\\#\\Omega} = \\dfrac{1}{2} = 0.5 = 50\\%",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Hay 1 caso favorable (cara) entre 2 posibles. Como la moneda no está cargada, ambos resultados pesan igual, así que a cada uno le toca ½. Es la regla de Laplace en su forma más pura: basta contar 1 entre 2.",
        },
        {
          tipo: "formula",
          math: "\\#E = 1,\\quad \\#\\Omega = 2 \\;\\Rightarrow\\; P = \\tfrac{1}{2}",
        },
      ],
    },
    {
      id: "ej-dado",
      tipo: "lienzo",
      etiqueta: "Primero contar el evento, luego dividir",
      titulo: "Ejemplo 2 · Tirar un Dado",
      bloques: [
        {
          tipo: "destacado",
          texto: "Se lanza un dado de seis caras. ¿Cuál es la probabilidad de obtener un número par? El espacio muestral es Ω = {1, 2, 3, 4, 5, 6} y el evento «par» es E = {2, 4, 6} (las caras resaltadas).",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "espacio-muestral",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "P(\\text{par}) = \\dfrac{\\#E}{\\#\\Omega} = \\dfrac{3}{6} = \\dfrac{1}{2}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "De los 6 resultados posibles, 3 cumplen «ser par». A diferencia de la moneda, aquí primero tuvimos que CONTAR cuántas caras forman el evento. Cambiando el evento cambia la cuenta: P(sale 5) = 1/6, P(mayor que 4) = 2/6 = 1/3.",
        },
        {
          tipo: "formula",
          math: "E = \\{2,4,6\\},\\ \\#E = 3 \\;\\Rightarrow\\; P = \\tfrac{3}{6} = \\tfrac{1}{2}",
        },
      ],
    },
    {
      id: "ej-dardo",
      tipo: "lienzo",
      etiqueta: "Probabilidad geométrica: área entre área",
      titulo: "Ejemplo 3 · Dardo en una Diana",
      bloques: [
        {
          tipo: "destacado",
          texto: "Se lanza un dardo al azar sobre una diana circular de radio R. En el centro hay un blanco rojo de radio r = R/2. Si el dardo cae en un punto cualquiera, ¿cuál es la probabilidad de dar en el blanco? Aquí los resultados son infinitos (cualquier punto del círculo), así que en vez de contar, comparamos áreas.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "dardo-diana",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "P(\\text{blanco}) = \\dfrac{\\text{área favorable}}{\\text{área total}} = \\dfrac{\\pi r^2}{\\pi R^2} = \\left(\\dfrac{r}{R}\\right)^2",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Cuando los casos no se pueden contar uno por uno, Laplace se generaliza usando áreas. Con r = R/2: P = (½)² = ¼. ¡Ojo! El radio es la mitad, pero el área es solo la cuarta parte: por eso apenas el 25 % de los lanzamientos dan en el blanco.",
        },
        {
          tipo: "formula",
          math: "\\dfrac{\\pi (R/2)^2}{\\pi R^2} = \\dfrac{R^2/4}{R^2} = \\dfrac{1}{4} = 25\\%",
        },
      ],
    },
    {
      id: "ej-buffon",
      tipo: "lienzo",
      etiqueta: "Probabilidad geométrica que estima π",
      titulo: "Ejemplo 4 · La Aguja de Buffon",
      bloques: [
        {
          tipo: "destacado",
          texto: "Se deja caer una aguja de longitud ℓ sobre un piso con líneas paralelas separadas una distancia d (con ℓ ≤ d). ¿Cuál es la probabilidad de que la aguja cruce alguna línea? Otra vez hay infinitas posiciones y ángulos, así que es probabilidad geométrica.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "buffon",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "P(\\text{cruza}) = \\dfrac{2\\,\\ell}{\\pi\\,d}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "El que cruce depende de dónde cae el centro y de su ángulo; al promediar sobre todos los casos aparece π. Lo asombroso: si ℓ = d, entonces P = 2/π ≈ 0.637, así que lanzando muchas agujas y contando cruces se puede ESTIMAR π. Es un puente entre azar y geometría.",
        },
        {
          tipo: "formula",
          math: "\\ell = d \\;\\Rightarrow\\; P = \\dfrac{2}{\\pi} \\approx 0.637 \\;\\Rightarrow\\; \\pi \\approx \\dfrac{2}{P}",
        },
      ],
    },
    {
      id: "eb1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Básico · 1 / 12",
          enunciado: "Se lanza una moneda. ¿Cuál es la probabilidad de que salga cruz?",
          opciones: ["1/2", "1/4", "1"],
          correcta: 0,
          explicacion: "Hay 1 caso favorable (cruz) entre 2 posibles: P = 1/2.",
        },
      ],
    },
    {
      id: "eb2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Básico · 2 / 12",
          enunciado: "Al lanzar un dado, ¿cuál es la probabilidad de obtener un número impar?",
          opciones: ["1/2", "1/3", "1/6"],
          correcta: 0,
          explicacion: "Los impares son {1, 3, 5}: 3 casos de 6. P = 3/6 = 1/2.",
        },
      ],
    },
    {
      id: "eb3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Básico · 3 / 12",
          enunciado: "Al lanzar un dado, ¿cuál es la probabilidad de obtener un múltiplo de 3?",
          opciones: ["1/3", "1/2", "1/6"],
          correcta: 0,
          explicacion: "Múltiplos de 3 entre 1 y 6: {3, 6} → 2 casos. P = 2/6 = 1/3.",
        },
      ],
    },
    {
      id: "eb4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Básico · 4 / 12",
          enunciado: "Al lanzar un dado, ¿cuál es la probabilidad de obtener un número menor o igual que 4?",
          opciones: ["2/3", "1/2", "1/3"],
          correcta: 0,
          explicacion: "Los favorables son {1, 2, 3, 4}: 4 casos de 6. P = 4/6 = 2/3.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-dado-mayor4",
        },
      ],
    },
    {
      id: "eb5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Básico · 5 / 12",
          enunciado: "De una baraja de 52 cartas, ¿cuál es la probabilidad de sacar una carta de corazones?",
          opciones: ["1/4", "1/13", "1/2"],
          correcta: 0,
          explicacion: "Hay 13 corazones en 52 cartas (un palo de cuatro). P = 13/52 = 1/4.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-carta-as",
        },
      ],
    },
    {
      id: "eb6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Básico · 6 / 12",
          enunciado: "De una baraja de 52 cartas, ¿cuál es la probabilidad de sacar una figura (J, Q o K)?",
          opciones: ["3/13", "1/4", "1/13"],
          correcta: 0,
          explicacion: "Hay 3 figuras por cada palo y 4 palos: 12 cartas. P = 12/52 = 3/13.",
        },
      ],
    },
    {
      id: "eb7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Básico · 7 / 12",
          enunciado: "Una urna tiene 3 bolas rojas y 2 azules. Si se saca una al azar, ¿cuál es la probabilidad de que sea azul?",
          opciones: ["2/5", "3/5", "1/2"],
          correcta: 0,
          explicacion: "Hay 2 azules de 5 bolas. P = 2/5.",
        },
      ],
    },
    {
      id: "eb8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Básico · 8 / 12",
          enunciado: "Se elige al azar un número del 1 al 10. ¿Cuál es la probabilidad de que sea primo?",
          opciones: ["2/5", "1/2", "3/10"],
          correcta: 0,
          explicacion: "Primos del 1 al 10: 2, 3, 5, 7 → 4 casos. P = 4/10 = 2/5. (El 1 no es primo.)",
        },
      ],
    },
    {
      id: "eb9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Básico · 9 / 12",
          enunciado: "Una ruleta tiene 8 sectores iguales numerados del 1 al 8. ¿Cuál es la probabilidad de caer en un número mayor que 5?",
          opciones: ["3/8", "1/2", "5/8"],
          correcta: 0,
          explicacion: "Mayores que 5: {6, 7, 8} → 3 casos. P = 3/8.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-ruleta",
        },
      ],
    },
    {
      id: "eb10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Básico · 10 / 12",
          enunciado: "Se elige un día de la semana al azar. ¿Cuál es la probabilidad de que sea fin de semana (sábado o domingo)?",
          opciones: ["2/7", "1/7", "5/7"],
          correcta: 0,
          explicacion: "Fin de semana: sábado y domingo → 2 casos de 7. P = 2/7.",
        },
      ],
    },
    {
      id: "eb11",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Básico · 11 / 12",
          enunciado: "Una bolsa tiene 4 dulces de menta y 6 de fresa. Si tomas uno al azar, ¿cuál es la probabilidad de que sea de menta?",
          opciones: ["2/5", "2/3", "3/5"],
          correcta: 0,
          explicacion: "Hay 4 de menta de 10 dulces. P = 4/10 = 2/5.",
        },
      ],
    },
    {
      id: "eb12",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Básico · 12 / 12",
          enunciado: "Se elige un mes del año al azar. ¿Cuál es la probabilidad de que su nombre empiece con la letra J?",
          opciones: ["1/6", "1/4", "1/12"],
          correcta: 0,
          explicacion: "Empiezan con J: junio y julio → 2 casos de 12. P = 2/12 = 1/6.",
        },
      ],
    },
    {
      id: "conteo-mult",
      tipo: "lienzo",
      etiqueta: "Cómo contar los casos posibles",
      titulo: "Principio Multiplicativo",
      bloques: [
        {
          tipo: "destacado",
          texto: "Si una elección se hace por etapas, el número total de resultados posibles es el producto del número de opciones de cada etapa.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "arbol-multiplicativo",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "N = n_1 \\times n_2 \\times \\cdots \\times n_k",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Con 2 platos y 3 bebidas, cada plato se combina con cada bebida. El árbol muestra que de cada rama de la primera etapa salen todas las opciones de la segunda: 2 × 3 = 6 menús distintos.",
        },
        {
          tipo: "formula",
          math: "2 \\text{ platos} \\times 3 \\text{ bebidas} = 6 \\text{ menús}",
        },
      ],
    },
    {
      id: "arbol-tres-monedas",
      tipo: "lienzo",
      etiqueta: "2 × 2 × 2 = 8 resultados posibles",
      titulo: "Árbol de Tres Lanzamientos",
      bloques: [
        {
          tipo: "destacado",
          texto: "Al lanzar una moneda tres veces, el árbol muestra todos los caminos posibles: en cada nivel se bifurca en Cara (C) o Cruz (X). Los 3 nodos resaltados (naranja) son los que dan exactamente 2 caras — el «2 de 3».",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "arbol-tres-monedas",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "2 \\times 2 \\times 2 = 8 \\text{ resultados posibles}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Exactamente 2 caras: CCX, CXC y XCC — tres caminos de ocho. Como cada hoja tiene probabilidad ½³ = ⅛, la probabilidad de «2 de 3» es 3 × ⅛ = 3/8.",
        },
        {
          tipo: "formula",
          math: "P(\\text{exactamente 2 caras}) = \\dfrac{3}{8}",
        },
      ],
    },
    {
      id: "conteo-dados",
      tipo: "lienzo",
      etiqueta: "El espacio muestral tiene 36 resultados",
      titulo: "Contar con Dos Dados",
      bloques: [
        {
          tipo: "formula",
          math: "\\#\\Omega = 6 \\times 6 = 36",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "dos-dados",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\#\\Omega = 36",
              texto: "los 36 pares ordenados (dado 1, dado 2): principio multiplicativo 6×6",
            },
            {
              math: "P(\\text{suma}=7) = \\dfrac{6}{36} = \\dfrac{1}{6}",
              texto: "la suma 7 es la MÁS probable: 6 pares en la diagonal resaltada",
            },
            {
              math: "P(\\text{suma}=2)=P(\\text{suma}=12)=\\dfrac{1}{36}",
              texto: "las sumas 2 y 12 son las menos probables: un solo par cada una",
            },
            {
              math: "\\text{suma} \\in \\{2,\\dots,12\\}",
              texto: "11 sumas posibles, pero NO igualmente probables — toca para ver la distribución completa",
              expandable: true,
              detalles: [
                "Suma 2 → 1 par → 1/36",
                "Suma 3 → 2 pares → 2/36",
                "Suma 4 → 3 pares → 3/36",
                "Suma 5 → 4 pares → 4/36",
                "Suma 6 → 5 pares → 5/36",
                "Suma 7 → 6 pares → 6/36 (máxima)",
                "Suma 8 → 5 pares → 5/36",
                "Suma 9 → 4 pares → 4/36",
                "Suma 10 → 3 pares → 3/36",
                "Suma 11 → 2 pares → 2/36",
                "Suma 12 → 1 par → 1/36",
              ],
            },
          ],
        },
        {
          tipo: "nota",
          texto: "A diferencia de un solo dado (donde cada cara vale 1/6), las sumas de dos dados forman un «triángulo»: suben hasta el 7 y luego bajan. Por eso el 7 es el número estrella en juegos de dados, y para contar los favorables de cada suma basta seguir las diagonales de la rejilla.",
        },
      ],
    },
    {
      id: "permut-combin",
      tipo: "lienzo",
      etiqueta: "¿Importa el orden? · toca cada tarjeta",
      titulo: "Permutaciones y Combinaciones",
      bloques: [
        {
          tipo: "formula",
          math: "n! = n\\cdot(n-1)\\cdots 2\\cdot 1",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "orden-importa",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "P(n,r)",
              texto: "Permutación: arreglo ORDENADO de r objetos elegidos de n. Como el orden distingue, intercambiar dos objetos crea otra permutación — AB y BA son distintas.",
              expandable: true,
              detalles: [
                "Palabras clave: «ordenar», «en fila», «podio», «primero/segundo», «contraseña»",
                "El orden cambia el resultado: AB ≠ BA",
                "Ejemplo: P(3,2) = 6 → AB, BA, AC, CA, BC, CB",
                "Fórmula: P(n,r) = n! / (n−r)!",
              ],
            },
            {
              math: "C(n,r)",
              texto: "Combinación: selección de r objetos elegidos de n SIN importar el orden. Reacomodar los mismos objetos no crea un grupo nuevo — AB y BA son la misma.",
              expandable: true,
              detalles: [
                "Palabras clave: «grupo», «equipo», «comité», «escoger», «seleccionar»",
                "El orden no cambia nada: AB = BA",
                "Ejemplo: C(3,2) = 3 → {A,B}, {A,C}, {B,C}",
                "Fórmula: C(n,r) = n! / (r!·(n−r)!)",
              ],
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Misma idea, una pregunta decide: ¿el orden importa? Elegir 2 letras de {A, B, C} da P(3,2) = 6 permutaciones (AB, BA, AC, CA, BC, CB), pero solo C(3,2) = 3 combinaciones ({A,B}, {A,C}, {B,C}), porque AB y BA son el mismo grupo.",
        },
      ],
    },
    {
      id: "permutaciones",
      tipo: "lienzo",
      etiqueta: "El orden SÍ importa — deducir la fórmula",
      titulo: "Permutaciones · Llenar Casillas",
      bloques: [
        {
          tipo: "destacado",
          texto: "No hay que memorizar la fórmula: es solo el principio multiplicativo. Para premiar a 3 de 5 corredores con oro, plata y bronce, llenamos 3 casillas. El oro tiene 5 candidatos; ya elegido, quedan 4 para la plata; luego 3 para el bronce.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "permutaciones-casillas",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "P(n,r) = \\underbrace{n\\cdot(n-1)\\cdots(n-r+1)}_{r\\text{ factores}} = \\dfrac{n!}{(n-r)!}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Cada casilla quita una opción para la siguiente: 5 × 4 × 3 = 60 podios distintos. Escribirlo con factoriales solo «recorta» 5! quitándole el 2! que sobra: 5×4×3 = 5!/2!. La fórmula nace de contar casillas, no al revés.",
        },
        {
          tipo: "formula",
          math: "P(5,3) = 5\\cdot4\\cdot3 = \\dfrac{5!}{2!} = 60",
        },
      ],
    },
    {
      id: "perm-ej1",
      tipo: "lienzo",
      etiqueta: "Banderas en un mástil — el orden distingue",
      titulo: "Permutaciones · Ejemplo 1",
      bloques: [
        {
          tipo: "destacado",
          texto: "Se quieren formar señales izando 3 banderas, una arriba de otra, escogidas de un juego de 6 banderas de colores distintos. ¿Cuántas señales diferentes se pueden formar?",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "permutaciones-casillas",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "P(6,3) = 6 \\cdot 5 \\cdot 4 = 120",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Una señal cambia si cambia el orden de las banderas (rojo-azul-verde ≠ verde-azul-rojo): el orden SÍ importa, es permutación. La casilla de arriba tiene 6 opciones, la de en medio 5 y la de abajo 4. Por el principio multiplicativo: 6 × 5 × 4 = 120 señales.",
        },
        {
          tipo: "formula",
          math: "P(6,3) = \\dfrac{6!}{3!} = 120",
        },
      ],
    },
    {
      id: "perm-ej2",
      tipo: "lienzo",
      etiqueta: "Acomodar todo: factorial completo",
      titulo: "Permutaciones · Ejemplo 2",
      bloques: [
        {
          tipo: "destacado",
          texto: "¿De cuántas maneras distintas pueden sentarse 4 personas en una fila de 4 sillas?",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "4! = 4 \\cdot 3 \\cdot 2 \\cdot 1 = 24",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Aquí se acomodan TODOS los objetos (n = r), así que la permutación es el factorial completo: la primera silla tiene 4 candidatos, la segunda 3, la tercera 2 y la última 1. En total 4! = 24 acomodos.",
        },
        {
          tipo: "formula",
          math: "P(4,4) = 4! = 24",
        },
      ],
    },
    {
      id: "perm-ej3",
      tipo: "lienzo",
      etiqueta: "Cargos: cada puesto es distinto",
      titulo: "Permutaciones · Ejemplo 3",
      bloques: [
        {
          tipo: "destacado",
          texto: "En un club de 7 socios se eligen un presidente, un secretario y un tesorero (una persona por cargo). ¿De cuántas maneras pueden repartirse los tres cargos?",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "P(7,3) = 7 \\cdot 6 \\cdot 5 = 210",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Los cargos son distintos, así que «Ana presidenta, Beto secretario» NO es lo mismo que «Beto presidente, Ana secretaria»: el orden importa. Presidente: 7 opciones; secretario: 6; tesorero: 5. Resultado: 7 × 6 × 5 = 210.",
        },
        {
          tipo: "formula",
          math: "P(7,3) = \\dfrac{7!}{4!} = 210",
        },
      ],
    },
    {
      id: "perm-x1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Permutaciones · Ejercicio 1 / 5",
          enunciado: "En una carrera de 8 corredores (sin empates), ¿de cuántas formas pueden repartirse el primer, segundo y tercer lugar?",
          opciones: ["336", "512", "56"],
          correcta: 0,
          explicacion: "Los lugares son distintos, así que el orden importa: P(8,3) = 8·7·6 = 336. (512 = 8³ permitiría repetir corredor; 56 = C(8,3) ignoraría el orden.)",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-combinatoria",
        },
      ],
    },
    {
      id: "perm-x2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Permutaciones · Ejercicio 2 / 5",
          enunciado: "¿Cuántas claves de 4 dígitos DISTINTOS se pueden formar con los dígitos del 0 al 9?",
          opciones: ["5040", "10000", "210"],
          correcta: 0,
          explicacion: "Sin repetir y con el orden importando: P(10,4) = 10·9·8·7 = 5040. (10000 = 10⁴ permitiría repetir; 210 = C(10,4) ignoraría el orden.)",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-combinatoria",
        },
      ],
    },
    {
      id: "perm-x3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Permutaciones · Ejercicio 3 / 5",
          enunciado: "¿De cuántas maneras distintas se pueden acomodar 6 libros diferentes en un estante?",
          opciones: ["720", "36", "120"],
          correcta: 0,
          explicacion: "Se acomodan todos: 6! = 6·5·4·3·2·1 = 720. (36 = 6²; 120 = 5! olvidaría un libro.)",
        },
      ],
    },
    {
      id: "perm-x4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Permutaciones · Ejercicio 4 / 5",
          enunciado: "Con las vocales A, E, I, O, U, ¿cuántas «palabras» de 3 letras distintas se pueden formar?",
          opciones: ["60", "125", "10"],
          correcta: 0,
          explicacion: "El orden cambia la palabra y no se repiten letras: P(5,3) = 5·4·3 = 60. (125 = 5³ con repetición; 10 = C(5,3) sin orden.)",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-combinatoria",
        },
      ],
    },
    {
      id: "perm-x5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Permutaciones · Ejercicio 5 / 5",
          enunciado: "Cinco amigos se forman en fila para una foto. ¿De cuántas maneras distintas pueden ordenarse?",
          opciones: ["120", "25", "60"],
          correcta: 0,
          explicacion: "Es una permutación de todos: 5! = 120. (25 = 5²; 60 confundiría con P(5,3).)",
        },
      ],
    },
    {
      id: "combinaciones",
      tipo: "lienzo",
      etiqueta: "El orden NO importa — deducir la fórmula",
      titulo: "Combinaciones · Quitar Repetidos",
      bloques: [
        {
          tipo: "destacado",
          texto: "Ahora elegimos un comité de 3 de esas 5 personas, sin cargos. Empezamos con las mismas 60 permutaciones, pero {A, B, C} y sus reordenamientos (ABC, ACB, BAC…) son el MISMO comité. Cada grupo de 3 se contó 3! = 6 veces.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "combinaciones-casillas",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "C(n,r) = \\dfrac{P(n,r)}{r!} = \\dfrac{n!}{r!\\,(n-r)!}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Como cada grupo aparece r! veces (todas sus ordenaciones), basta dividir las permutaciones entre r! para quitar los repetidos. Así la combinación siempre es más chica que la permutación. Aquí: 60 ÷ 3! = 60 ÷ 6 = 10 comités distintos.",
        },
        {
          tipo: "formula",
          math: "C(5,3) = \\dfrac{60}{3!} = \\dfrac{60}{6} = 10",
        },
      ],
    },
    {
      id: "comb-ej1",
      tipo: "lienzo",
      etiqueta: "Una ensalada — el orden no importa",
      titulo: "Combinaciones · Ejemplo 1",
      bloques: [
        {
          tipo: "destacado",
          texto: "De 7 frutas distintas se eligen 3 para hacer una ensalada. ¿De cuántas maneras diferentes se puede elegir?",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "combinaciones-casillas",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "C(7,3) = \\dfrac{7!}{3!\\,4!} = \\dfrac{7\\cdot 6\\cdot 5}{3!} = 35",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "En una ensalada da igual el orden en que se eligen las frutas: {manzana, pera, uva} es la misma que {uva, pera, manzana}. Por eso es combinación. Se toman las 7·6·5 = 210 formas ordenadas y se dividen entre 3! = 6 reacomodos repetidos: 210 ÷ 6 = 35.",
        },
        {
          tipo: "formula",
          math: "C(7,3) = \\dfrac{210}{6} = 35",
        },
      ],
    },
    {
      id: "comb-ej2",
      tipo: "lienzo",
      etiqueta: "Formar un equipo",
      titulo: "Combinaciones · Ejemplo 2",
      bloques: [
        {
          tipo: "destacado",
          texto: "De un grupo de 10 jugadores se debe formar un equipo de 5 (sin posiciones fijas). ¿De cuántas formas se puede integrar el equipo?",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "C(10,5) = \\dfrac{10!}{5!\\,5!} = 252",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Un equipo es un grupo sin orden: que entren los mismos 5 jugadores da el mismo equipo sin importar en qué orden se nombren. Es combinación: C(10,5) = 252.",
        },
        {
          tipo: "formula",
          math: "C(10,5) = \\dfrac{10\\cdot 9\\cdot 8\\cdot 7\\cdot 6}{5!} = 252",
        },
      ],
    },
    {
      id: "comb-ej3",
      tipo: "lienzo",
      etiqueta: "Apretones de mano = parejas",
      titulo: "Combinaciones · Ejemplo 3",
      bloques: [
        {
          tipo: "destacado",
          texto: "En una reunión de 6 personas, todas se saludan de mano una vez entre sí. ¿Cuántos apretones de mano se dan en total?",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "C(6,2) = \\dfrac{6 \\cdot 5}{2} = 15",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Un apretón une a dos personas sin orden: que A salude a B es el mismo apretón que B salude a A. Es elegir parejas: C(6,2) = 15. (Si contáramos el orden, P(6,2) = 30, justo el doble.)",
        },
        {
          tipo: "formula",
          math: "C(6,2) = \\dfrac{P(6,2)}{2!} = \\dfrac{30}{2} = 15",
        },
      ],
    },
    {
      id: "comb-x1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Combinaciones · Ejercicio 1 / 5",
          enunciado: "¿De cuántas formas se puede elegir un comité de 3 personas de un grupo de 10?",
          opciones: ["120", "720", "30"],
          correcta: 0,
          explicacion: "Un comité no tiene orden: C(10,3) = (10·9·8)/3! = 720/6 = 120. (720 = P(10,3) contaría el orden.)",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-combinatoria",
        },
      ],
    },
    {
      id: "comb-x2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Combinaciones · Ejercicio 2 / 5",
          enunciado: "En una reunión de 7 personas todas se saludan de mano una vez. ¿Cuántos saludos se dan?",
          opciones: ["21", "42", "14"],
          correcta: 0,
          explicacion: "Cada saludo es una pareja sin orden: C(7,2) = (7·6)/2 = 21. (42 = P(7,2) contaría A-B distinto de B-A.)",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-combinatoria",
        },
      ],
    },
    {
      id: "comb-x3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Combinaciones · Ejercicio 3 / 5",
          enunciado: "Hay 8 puntos en un plano y no hay 3 alineados. ¿Cuántas rectas distintas quedan determinadas?",
          opciones: ["28", "56", "16"],
          correcta: 0,
          explicacion: "Cada recta queda fijada por 2 puntos sin orden: C(8,2) = (8·7)/2 = 28.",
        },
      ],
    },
    {
      id: "comb-x4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Combinaciones · Ejercicio 4 / 5",
          enunciado: "De una baraja de 52 cartas, ¿de cuántas formas se pueden elegir 2 cartas (una mano, sin importar el orden)?",
          opciones: ["1326", "2652", "104"],
          correcta: 0,
          explicacion: "Una mano no tiene orden: C(52,2) = (52·51)/2 = 1326. (2652 = P(52,2) contaría el orden.)",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-carta-as",
        },
      ],
    },
    {
      id: "comb-x5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Combinaciones · Ejercicio 5 / 5",
          enunciado: "De 6 libros distintos se eligen 4 para llevar de viaje. ¿De cuántas formas se pueden elegir?",
          opciones: ["15", "360", "24"],
          correcta: 0,
          explicacion: "Llevar un conjunto de libros no depende del orden: C(6,4) = C(6,2) = 15. (360 = P(6,4) contaría el orden.)",
        },
      ],
    },
    {
      id: "ej-tachuela",
      tipo: "lienzo",
      etiqueta: "Cuando Laplace NO se puede aplicar",
      titulo: "Ejemplo · Lanzar una Tachuela",
      bloques: [
        {
          tipo: "destacado",
          texto: "Una tachuela cae de dos formas: con la punta hacia arriba o de lado. El espacio muestral Ω = {arriba, de lado} tiene dos resultados, igual que una moneda. ¿Podemos decir entonces que P(arriba) = ½?",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "tachuela",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "P(\\text{arriba}) \\neq \\tfrac{1}{2} \\quad(\\text{los casos NO son equiprobables})",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "¡No! Laplace exige que todos los resultados sean igualmente probables, y la forma de la tachuela hace que caiga más de un lado que del otro. Como la fórmula no aplica, estimamos la probabilidad lanzándola muchas veces y midiendo su frecuencia. Esto motiva la probabilidad frecuentista.",
        },
        {
          tipo: "formula",
          math: "P(\\text{arriba}) \\approx \\dfrac{\\text{veces «arriba»}}{\\text{total de lanzamientos}}",
        },
      ],
    },
    {
      id: "frecuentista",
      tipo: "lienzo",
      etiqueta: "Frecuencia relativa ≈ probabilidad",
      titulo: "Probabilidad Frecuentista",
      bloques: [
        {
          tipo: "formula",
          math: "P(E) \\approx \\dfrac{\\text{veces que ocurrió } E}{\\text{número de intentos}}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "frecuencias-dado",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "f_r = \\dfrac{f}{n}",
              texto: "frecuencia relativa: ocurrencias entre intentos",
            },
            {
              math: "n \\to \\infty",
              texto: "ley de los grandes números: f_r se acerca a P(E)",
            },
            {
              math: "P \\approx \\tfrac{1}{6}",
              texto: "cada cara del dado tiende a 1/6 ≈ 0.167",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Con pocos lanzamientos las frecuencias son irregulares; con muchos se emparejan cerca de 1/6. Y la frecuencia relativa cumple los 3 axiomas (es ≥ 0, vale 1 sobre todo Ω y es aditiva), así que NO es solo una estimación: es una probabilidad de hecho. Así se conecta la probabilidad teórica (Laplace) con la experimental.",
        },
      ],
    },
    {
      id: "axiomatica",
      tipo: "lienzo",
      etiqueta: "Las 3 reglas que TODA probabilidad cumple (Kolmogorov)",
      titulo: "Probabilidad Axiomática",
      bloques: [
        {
          tipo: "formula",
          math: "P:\\ \\text{eventos} \\to [0, 1]",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "tres-axiomas",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "P(E) \\ge 0",
              texto: "No negatividad: ninguna probabilidad es negativa; lo mínimo es 0 (evento imposible).",
            },
            {
              math: "P(\\Omega) = 1",
              texto: "Normalización: el evento seguro —todo el espacio muestral— vale 1 = 100 %.",
            },
            {
              math: "P(E \\cup F) = P(E) + P(F)",
              texto: "Aditividad: si E y F son excluyentes (no pueden ocurrir juntos), sus probabilidades se suman.",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Estos 3 axiomas de Kolmogorov son la definición MODERNA de probabilidad: cualquier función que los cumpla es una probabilidad válida. Laplace, la geométrica y la frecuentista no son definiciones rivales, sino tres maneras de asignar P que satisfacen los mismos axiomas — por eso todas son probabilidades de verdad.",
        },
      ],
    },
    {
      id: "complemento",
      tipo: "lienzo",
      etiqueta: "Lo que NO ocurre",
      titulo: "Evento Complementario",
      bloques: [
        {
          tipo: "destacado",
          texto: "El complemento de E, escrito E′, es el evento «E no ocurre». Como E y E′ cubren todo el espacio muestral sin traslaparse, sus probabilidades suman 1.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "complemento",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "P(E') = 1 - P(E)",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Muchas veces es más fácil calcular la probabilidad de que algo NO pase. Ejemplo: al lanzar 2 dados, P(al menos un 6) = 1 − P(ningún 6) = 1 − 25/36 = 11/36.",
        },
        {
          tipo: "formula",
          math: "P(E) + P(E') = 1",
        },
      ],
    },
    {
      id: "ej-cumpleanos",
      tipo: "lienzo",
      etiqueta: "El complemento en acción",
      titulo: "Ejemplo · Paradoja del Cumpleaños",
      bloques: [
        {
          tipo: "destacado",
          texto: "En un grupo de 23 personas, ¿qué probabilidad hay de que al menos dos cumplan años el mismo día? La intuición grita «poquísima»… pero se equivoca.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "cumpleanos",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "P(\\text{coincidencia}) = 1 - \\dfrac{365}{365}\\cdot\\dfrac{364}{365}\\cdots\\dfrac{343}{365} \\approx 0.51",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Calcular «al menos dos iguales» de frente es un caos; el complemento lo vuelve fácil: P(todos distintos) multiplica 365/365 × 364/365 × … quitando un día disponible cada vez. Con 23 personas ese producto cae por debajo de ½, así que P(coincidencia) supera el 50 %. Con 50 personas ya es 97 %.",
        },
        {
          tipo: "formula",
          math: "P(\\text{coincidencia}) = 1 - P(\\text{todos distintos}) > \\tfrac{1}{2}",
        },
      ],
    },
    {
      id: "regla-suma",
      tipo: "lienzo",
      etiqueta: "Probabilidad de E o F",
      titulo: "Regla de la Suma",
      bloques: [
        {
          tipo: "destacado",
          texto: "Para la probabilidad de que ocurra E o F se suman sus probabilidades. Si los eventos pueden ocurrir a la vez, se resta la parte contada dos veces: la intersección.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "regla-suma",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "P(E \\cup F) = P(E) + P(F) - P(E \\cap F)",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Si E y F son mutuamente excluyentes (no pueden pasar juntos), su intersección es vacía y P(E∩F) = 0, así que basta sumar. Ejemplo en un dado: P(sale 2 o 5) = 1/6 + 1/6 = 2/6 = 1/3.",
        },
        {
          tipo: "formula",
          math: "\\text{excluyentes} \\Rightarrow P(E \\cap F) = 0 \\Rightarrow P(E \\cup F) = P(E) + P(F)",
        },
      ],
    },
    {
      id: "suma-ej1",
      tipo: "lienzo",
      etiqueta: "Eventos excluyentes — solo sumar",
      titulo: "Regla de la Suma · Ejemplo 1",
      bloques: [
        {
          tipo: "destacado",
          texto: "Se lanza un dado. ¿Cuál es la probabilidad de obtener un 2 o un 5?",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "regla-suma",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "P(2 \\cup 5) = \\tfrac{1}{6} + \\tfrac{1}{6} = \\tfrac{2}{6} = \\tfrac{1}{3}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Sacar 2 y sacar 5 no pueden ocurrir a la vez (un dado muestra una sola cara): son excluyentes, así que P(E∩F) = 0 y basta sumar. 1/6 + 1/6 = 1/3.",
        },
        {
          tipo: "formula",
          math: "\\text{excluyentes} \\Rightarrow P(E\\cup F) = P(E)+P(F)",
        },
      ],
    },
    {
      id: "suma-ej2",
      tipo: "lienzo",
      etiqueta: "Eventos NO excluyentes — restar la intersección",
      titulo: "Regla de la Suma · Ejemplo 2",
      bloques: [
        {
          tipo: "destacado",
          texto: "De una baraja de 52 cartas se saca una. ¿Cuál es la probabilidad de que sea un rey o una carta de corazones?",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "ej-carta-as",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "P(R \\cup \\heartsuit) = \\tfrac{4}{52} + \\tfrac{13}{52} - \\tfrac{1}{52} = \\tfrac{16}{52} = \\tfrac{4}{13}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Hay 4 reyes y 13 corazones, pero el rey de corazones está en AMBOS grupos: si solo sumáramos, lo contaríamos dos veces. Por eso se resta esa intersección (1 carta). Resultado: 16/52 = 4/13.",
        },
        {
          tipo: "formula",
          math: "P(E\\cup F) = P(E)+P(F)-P(E\\cap F)",
        },
      ],
    },
    {
      id: "suma-ej3",
      tipo: "lienzo",
      etiqueta: "Colores de una urna",
      titulo: "Regla de la Suma · Ejemplo 3",
      bloques: [
        {
          tipo: "destacado",
          texto: "Una urna tiene 5 bolas rojas, 4 azules y 1 verde. Se saca una al azar. ¿Cuál es la probabilidad de que sea azul o verde?",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "ej-urna-rav",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "P(A \\cup V) = \\tfrac{4}{10} + \\tfrac{1}{10} = \\tfrac{5}{10} = \\tfrac{1}{2}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Una bola no puede ser azul y verde a la vez: son excluyentes. Se suman directo: 4/10 + 1/10 = 5/10 = 1/2.",
        },
        {
          tipo: "formula",
          math: "\\#\\Omega = 5+4+1 = 10",
        },
      ],
    },
    {
      id: "suma-x1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Regla de la suma · Ejercicio 1 / 5",
          enunciado: "Al lanzar un dado, ¿cuál es la probabilidad de obtener un número par o el 3?",
          opciones: ["2/3", "1/2", "1/6"],
          correcta: 0,
          explicacion: "Pares {2,4,6} = 3 casos y el 3 = 1 caso; son excluyentes (el 3 no es par): P = 3/6 + 1/6 = 4/6 = 2/3.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-dado-mayor4",
        },
      ],
    },
    {
      id: "suma-x2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Regla de la suma · Ejercicio 2 / 5",
          enunciado: "De una baraja de 52, ¿cuál es la probabilidad de sacar una figura (J, Q, K) o una carta de tréboles?",
          opciones: ["11/26", "25/52", "1/4"],
          correcta: 0,
          explicacion: "Figuras = 12, tréboles = 13, pero las figuras de tréboles (J, Q, K de tréboles = 3) están en ambos: P = 12/52 + 13/52 − 3/52 = 22/52 = 11/26.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-carta-as",
        },
      ],
    },
    {
      id: "suma-x3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Regla de la suma · Ejercicio 3 / 5",
          enunciado: "Una urna tiene 3 rojas, 5 azules y 2 verdes. Se saca una. ¿Probabilidad de que sea roja o verde?",
          opciones: ["1/2", "3/10", "7/10"],
          correcta: 0,
          explicacion: "Excluyentes: P = 3/10 + 2/10 = 5/10 = 1/2.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-urna-rav",
        },
      ],
    },
    {
      id: "suma-x4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Regla de la suma · Ejercicio 4 / 5",
          enunciado: "Se lanzan dos dados. ¿Cuál es la probabilidad de que la suma sea 5 u 8?",
          opciones: ["1/4", "1/6", "11/36"],
          correcta: 0,
          explicacion: "Suma 5: 4 pares; suma 8: 5 pares; son excluyentes. P = (4+5)/36 = 9/36 = 1/4.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "dos-dados",
        },
      ],
    },
    {
      id: "suma-x5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Regla de la suma · Ejercicio 5 / 5",
          enunciado: "Se elige al azar un número del 1 al 20. ¿Probabilidad de que sea múltiplo de 4 o de 5?",
          opciones: ["2/5", "9/20", "1/2"],
          correcta: 0,
          explicacion: "Múltiplos de 4: {4,8,12,16,20} = 5; de 5: {5,10,15,20} = 4; el 20 está en ambos (1). P = 5/20 + 4/20 − 1/20 = 8/20 = 2/5.",
        },
      ],
    },
    {
      id: "regla-producto",
      tipo: "lienzo",
      etiqueta: "Eventos independientes",
      titulo: "Regla del Producto",
      bloques: [
        {
          tipo: "destacado",
          texto: "Dos eventos son independientes si uno no afecta al otro. La probabilidad de que ocurran ambos es el producto de sus probabilidades.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "arbol-monedas",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "P(E \\cap F) = P(E) \\cdot P(F)",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Al lanzar una moneda dos veces, cada resultado tiene probabilidad ½ y los lanzamientos no se afectan. El árbol muestra los 4 resultados igualmente probables: P(dos caras) = ½ · ½ = ¼.",
        },
        {
          tipo: "formula",
          math: "P(\\text{CC}) = \\tfrac{1}{2}\\cdot\\tfrac{1}{2} = \\tfrac{1}{4}",
        },
      ],
    },
    {
      id: "prod-ej1",
      tipo: "lienzo",
      etiqueta: "Dos monedas independientes",
      titulo: "Regla del Producto · Ejemplo 1",
      bloques: [
        {
          tipo: "destacado",
          texto: "Se lanza una moneda dos veces. ¿Cuál es la probabilidad de obtener dos caras?",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "arbol-monedas",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "P(C \\cap C) = \\tfrac{1}{2}\\cdot\\tfrac{1}{2} = \\tfrac{1}{4}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "El segundo lanzamiento no se ve afectado por el primero: son independientes. Por la regla del producto se multiplican: ½ × ½ = ¼. El árbol muestra los 4 resultados igualmente probables, y solo CC cumple.",
        },
        {
          tipo: "formula",
          math: "\\text{independientes} \\Rightarrow P(E\\cap F)=P(E)\\cdot P(F)",
        },
      ],
    },
    {
      id: "prod-ej2",
      tipo: "lienzo",
      etiqueta: "Dos aparatos distintos",
      titulo: "Regla del Producto · Ejemplo 2",
      bloques: [
        {
          tipo: "destacado",
          texto: "Se lanza una moneda y un dado a la vez. ¿Cuál es la probabilidad de obtener cruz y un 5?",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "ej-moneda-dado",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "P(X \\cap 5) = \\tfrac{1}{2}\\cdot\\tfrac{1}{6} = \\tfrac{1}{12}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "La moneda y el dado son independientes (uno no influye en el otro). P(cruz) = ½ y P(5) = 1/6; el conector «y» pide multiplicar: ½ × 1/6 = 1/12.",
        },
        {
          tipo: "formula",
          math: "P(X)\\cdot P(5) = \\tfrac{1}{2}\\cdot\\tfrac{1}{6}",
        },
      ],
    },
    {
      id: "prod-ej3",
      tipo: "lienzo",
      etiqueta: "El mismo dado, dos veces",
      titulo: "Regla del Producto · Ejemplo 3",
      bloques: [
        {
          tipo: "destacado",
          texto: "Se lanza un dado dos veces. ¿Cuál es la probabilidad de obtener un 6 en ambos lanzamientos?",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "dos-dados",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "P(6 \\cap 6) = \\tfrac{1}{6}\\cdot\\tfrac{1}{6} = \\tfrac{1}{36}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Cada lanzamiento es independiente y P(6) = 1/6. Se multiplican: 1/6 × 1/6 = 1/36. Coincide con que el par (6,6) es 1 de los 36 resultados posibles.",
        },
        {
          tipo: "formula",
          math: "\\tfrac{1}{6}\\cdot\\tfrac{1}{6} = \\tfrac{1}{36}",
        },
      ],
    },
    {
      id: "prod-x1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Regla del producto · Ejercicio 1 / 5",
          enunciado: "Se lanza un dado dos veces. ¿Cuál es la probabilidad de obtener dos números pares?",
          opciones: ["1/4", "1/2", "1/12"],
          correcta: 0,
          explicacion: "P(par) = 3/6 = 1/2 en cada lanzamiento; independientes: P = 1/2 · 1/2 = 1/4.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "dos-dados",
        },
      ],
    },
    {
      id: "prod-x2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Regla del producto · Ejercicio 2 / 5",
          enunciado: "Se lanza una moneda y un dado. ¿Cuál es la probabilidad de obtener cara y un número mayor que 4?",
          opciones: ["1/6", "1/4", "1/12"],
          correcta: 0,
          explicacion: "P(cara) = 1/2 y P(mayor que 4) = P({5,6}) = 2/6 = 1/3; independientes: P = 1/2 · 1/3 = 1/6.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-moneda-dado",
        },
      ],
    },
    {
      id: "prod-x3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Regla del producto · Ejercicio 3 / 5",
          enunciado: "Se lanza una moneda tres veces. ¿Cuál es la probabilidad de obtener tres caras?",
          opciones: ["1/8", "3/8", "1/6"],
          correcta: 0,
          explicacion: "Tres lanzamientos independientes: P = (1/2)³ = 1/8.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-dos-monedas",
        },
      ],
    },
    {
      id: "prod-x4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Regla del producto · Ejercicio 4 / 5",
          enunciado: "Una urna tiene 3 rojas y 2 azules. Se saca una bola, se anota y se DEVUELVE; luego se saca otra. ¿Probabilidad de roja y luego azul?",
          opciones: ["6/25", "3/10", "1/2"],
          correcta: 0,
          explicacion: "Con reemplazo los eventos son independientes (el total sigue en 5): P = 3/5 · 2/5 = 6/25.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-urna-r5a3",
        },
      ],
    },
    {
      id: "prod-x5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Regla del producto · Ejercicio 5 / 5",
          enunciado: "Una ruleta de 8 sectores (1 al 8) se gira dos veces. ¿Probabilidad de obtener un número par en ambos giros?",
          opciones: ["1/4", "1/2", "1/16"],
          correcta: 0,
          explicacion: "Pares en 1–8: {2,4,6,8} = 4, así que P(par) = 4/8 = 1/2 por giro; independientes: P = 1/2 · 1/2 = 1/4.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-ruleta",
        },
      ],
    },
    {
      id: "condicional",
      tipo: "lienzo",
      etiqueta: "Con y sin reemplazo",
      titulo: "Probabilidad Condicional",
      bloques: [
        {
          tipo: "destacado",
          texto: "Cuando un evento depende del resultado anterior, la probabilidad del segundo cambia. Sin reemplazo, al sacar una bola no se regresa: bajan tanto el total como los casos favorables.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "arbol-urna",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "P(A \\cap B) = P(A)\\cdot P(B\\mid A)",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Urna con 2 rojas y 3 azules. Con reemplazo los eventos son independientes (el denominador sigue en 5). Sin reemplazo, tras sacar una roja quedan 1 roja y 4 bolas, así que la segunda rama cambia a /4.",
        },
        {
          tipo: "formula",
          math: "P(\\text{RR}) = \\tfrac{2}{5}\\cdot\\tfrac{1}{4} = \\tfrac{1}{10}",
        },
      ],
    },
    {
      id: "cond-ej1",
      tipo: "lienzo",
      etiqueta: "Una etapa: ya cambió el espacio muestral",
      titulo: "Condicional · Ejemplo 1",
      bloques: [
        {
          tipo: "destacado",
          texto: "Una urna tiene 4 bolas rojas y 2 azules. Se saca una roja y NO se devuelve. Si se saca otra bola, ¿cuál es la probabilidad de que también sea roja?",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "arbol-urna",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "P(\\text{roja} \\mid \\text{ya salió roja}) = \\tfrac{3}{5}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "La condición «ya salió una roja» cambia el conteo: ahora quedan 3 rojas entre 5 bolas. La probabilidad de la segunda roja es 3/5. La clave de la condicional es volver a contar SOBRE lo que queda.",
        },
        {
          tipo: "formula",
          math: "\\text{quedan } 3\\text{ rojas de } 5",
        },
      ],
    },
    {
      id: "cond-ej2",
      tipo: "lienzo",
      etiqueta: "Encadenar dos etapas sin reemplazo",
      titulo: "Condicional · Ejemplo 2",
      bloques: [
        {
          tipo: "destacado",
          texto: "Una caja tiene 3 focos buenos y 2 defectuosos. Se sacan 2 focos sin reemplazo. ¿Cuál es la probabilidad de que ambos sean buenos?",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "arbol-urna",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "P(B \\cap B) = \\tfrac{3}{5}\\cdot\\tfrac{2}{4} = \\tfrac{6}{20} = \\tfrac{3}{10}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Primer foco bueno: 3/5. Como no se devuelve, para el segundo quedan 2 buenos de 4 focos: 2/4. Se encadenan con la regla del producto condicional: 3/5 × 2/4 = 3/10.",
        },
        {
          tipo: "formula",
          math: "P(A\\cap B) = P(A)\\cdot P(B\\mid A)",
        },
      ],
    },
    {
      id: "cond-ej3",
      tipo: "lienzo",
      etiqueta: "Con reemplazo vs sin reemplazo",
      titulo: "Condicional · Ejemplo 3",
      bloques: [
        {
          tipo: "destacado",
          texto: "De una baraja de 52 cartas se sacan 2. ¿Cambia la probabilidad de obtener dos ases según si se devuelve o no la primera carta?",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "ej-carta-as",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "\\text{con: } \\tfrac{4}{52}\\cdot\\tfrac{4}{52} = \\tfrac{1}{169} \\;\\;|\\;\\; \\text{sin: } \\tfrac{4}{52}\\cdot\\tfrac{3}{51} = \\tfrac{1}{221}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "CON reemplazo los eventos son independientes: el segundo factor sigue en 4/52. SIN reemplazo, tras sacar un as quedan 3 ases de 51 cartas, así que el segundo factor baja a 3/51. Por eso «sin reemplazo» siempre da una probabilidad menor para repetir.",
        },
        {
          tipo: "formula",
          math: "\\tfrac{1}{221} < \\tfrac{1}{169}",
        },
      ],
    },
    {
      id: "ej-monty",
      tipo: "lienzo",
      etiqueta: "Probabilidad condicional contraintuitiva",
      titulo: "Ejemplo · El Problema de Monty Hall",
      bloques: [
        {
          tipo: "destacado",
          texto: "Hay 3 puertas: tras una está un auto, tras las otras dos hay cabras. Eliges una puerta. El presentador, que SABE dónde está el auto, abre otra puerta con una cabra y te ofrece cambiar. ¿Conviene cambiar?",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "monty-hall",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "P(\\text{ganar al cambiar}) = \\dfrac{2}{3} \\;>\\; P(\\text{ganar al quedarte}) = \\dfrac{1}{3}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "¡Sí conviene cambiar! Tu primera elección acierta solo 1 de cada 3 veces. Las otras 2 de 3, el auto está en otra puerta y, como el presentador elimina la cabra, cambiar te lleva justo al auto. Cambiar gana 2 de cada 3 partidas: duplica tu probabilidad.",
        },
        {
          tipo: "formula",
          math: "\\text{quedarte: } \\tfrac{1}{3}, \\quad \\text{cambiar: } 1 - \\tfrac{1}{3} = \\tfrac{2}{3}",
        },
      ],
    },
    {
      id: "pb1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Probabilidad · Ejercicio 1 / 9",
          enunciado: "Al lanzar un dado, ¿cuál es la probabilidad de obtener un número mayor que 4?",
          opciones: ["1/3", "1/2", "1/6"],
          correcta: 0,
          explicacion: "Los favorables son {5, 6}: 2 casos de 6. P = 2/6 = 1/3.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-dado-mayor4",
        },
      ],
    },
    {
      id: "pb2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Probabilidad · Ejercicio 2 / 9",
          enunciado: "De una baraja de 52 cartas, ¿cuál es la probabilidad de sacar un as?",
          opciones: ["1/13", "1/4", "4/13"],
          correcta: 0,
          explicacion: "Hay 4 ases en 52 cartas. P = 4/52 = 1/13.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-carta-as",
        },
      ],
    },
    {
      id: "pb3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Probabilidad · Ejercicio 3 / 9",
          enunciado: "Se lanzan dos dados. ¿Cuál es la probabilidad de que la suma sea 7?",
          opciones: ["1/6", "1/12", "7/36"],
          correcta: 0,
          explicacion: "Suman 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 casos. P = 6/36 = 1/6.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "dos-dados",
        },
      ],
    },
    {
      id: "pb4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Probabilidad · Ejercicio 4 / 9",
          enunciado: "Se lanza una moneda dos veces. ¿Cuál es la probabilidad de obtener al menos una cara?",
          opciones: ["3/4", "1/2", "1/4"],
          correcta: 0,
          explicacion: "Usando el complemento: P(al menos una cara) = 1 − P(ninguna) = 1 − P(XX) = 1 − 1/4 = 3/4.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-dos-monedas",
        },
      ],
    },
    {
      id: "pb5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Probabilidad · Ejercicio 5 / 9",
          enunciado: "Una urna tiene 4 bolas rojas, 3 azules y 2 verdes. Si se saca una al azar, ¿cuál es la probabilidad de que sea roja o verde?",
          opciones: ["2/3", "4/9", "5/9"],
          correcta: 0,
          explicacion: "Roja y verde son excluyentes: P = P(roja) + P(verde) = 4/9 + 2/9 = 6/9 = 2/3.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-urna-rav",
        },
      ],
    },
    {
      id: "pb6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Probabilidad · Ejercicio 6 / 9",
          enunciado: "Se lanza una moneda y un dado. ¿Cuál es la probabilidad de obtener cara y un 6?",
          opciones: ["1/12", "1/8", "1/6"],
          correcta: 0,
          explicacion: "Son eventos independientes, así que se multiplican: P = 1/2 · 1/6 = 1/12.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-moneda-dado",
        },
      ],
    },
    {
      id: "pb7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Probabilidad · Ejercicio 7 / 9",
          enunciado: "Una urna tiene 5 bolas rojas y 3 azules. Se sacan 2 sin reemplazo. ¿Cuál es la probabilidad de que ambas sean rojas?",
          opciones: ["5/14", "25/64", "5/8"],
          correcta: 0,
          explicacion: "Sin reemplazo el denominador cambia: P = 5/8 · 4/7 = 20/56 = 5/14.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-urna-r5a3",
        },
      ],
    },
    {
      id: "pb8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Probabilidad · Ejercicio 8 / 9",
          enunciado: "Una ruleta tiene 8 sectores iguales numerados del 1 al 8. ¿Cuál es la probabilidad de caer en un número primo?",
          opciones: ["1/2", "3/8", "5/8"],
          correcta: 0,
          explicacion: "Primos del 1 al 8: 2, 3, 5, 7 → 4 casos. P = 4/8 = 1/2. (El 1 no es primo.)",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-ruleta",
        },
      ],
    },
    {
      id: "pb9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Probabilidad · Ejercicio 9 / 9",
          enunciado: "¿Cuántas parejas distintas se pueden formar con 5 personas?",
          opciones: ["10", "20", "25"],
          correcta: 0,
          explicacion: "Como el orden no importa es una combinación: C(5,2) = 5!/(2!·3!) = 10.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-combinatoria",
        },
      ],
    },
    {
      id: "pf1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Práctica final · Ejercicio 1 / 20",
          enunciado: "Se lanza un dado. ¿Cuál es la probabilidad de obtener un número menor que 3?",
          opciones: ["1/3", "1/2", "2/3"],
          correcta: 0,
          explicacion: "Favorables {1, 2} = 2 de 6. P = 2/6 = 1/3.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-dado-mayor4",
        },
      ],
    },
    {
      id: "pf2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Práctica final · Ejercicio 2 / 20",
          enunciado: "De una baraja de 52 cartas, ¿cuál es la probabilidad de sacar una carta roja?",
          opciones: ["1/2", "1/4", "1/13"],
          correcta: 0,
          explicacion: "Hay 26 cartas rojas (corazones y diamantes) de 52. P = 26/52 = 1/2.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-carta-as",
        },
      ],
    },
    {
      id: "pf3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Práctica final · Ejercicio 3 / 20",
          enunciado: "Una ruleta tiene 8 sectores iguales (1 al 8). ¿Cuál es la probabilidad de caer en un múltiplo de 3?",
          opciones: ["1/4", "3/8", "1/2"],
          correcta: 0,
          explicacion: "Múltiplos de 3 en 1–8: {3, 6} = 2 de 8. P = 2/8 = 1/4.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-ruleta",
        },
      ],
    },
    {
      id: "pf4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Práctica final · Ejercicio 4 / 20",
          enunciado: "Se lanzan dos dados. ¿Cuál es la probabilidad de que la suma sea 6?",
          opciones: ["5/36", "1/6", "1/12"],
          correcta: 0,
          explicacion: "Suman 6: (1,5),(2,4),(3,3),(4,2),(5,1) = 5 pares de 36. P = 5/36.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "dos-dados",
        },
      ],
    },
    {
      id: "pf5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Práctica final · Ejercicio 5 / 20",
          enunciado: "Una urna tiene 4 rojas, 3 azules y 2 verdes. Se saca una al azar. ¿Cuál es la probabilidad de que NO sea roja?",
          opciones: ["5/9", "4/9", "2/3"],
          correcta: 0,
          explicacion: "No rojas = 3 azules + 2 verdes = 5 de 9. P = 5/9.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-urna-rav",
        },
      ],
    },
    {
      id: "pf6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Práctica final · Ejercicio 6 / 20",
          enunciado: "Se lanza una moneda dos veces. ¿Cuál es la probabilidad de obtener exactamente una cara?",
          opciones: ["1/2", "1/4", "3/4"],
          correcta: 0,
          explicacion: "Casos {CX, XC} = 2 de 4 (Ω = CC, CX, XC, XX). P = 2/4 = 1/2.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-dos-monedas",
        },
      ],
    },
    {
      id: "pf7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Práctica final · Ejercicio 7 / 20",
          enunciado: "Se lanza un dado. ¿Cuál es la probabilidad de obtener un divisor de 6?",
          opciones: ["2/3", "1/2", "5/6"],
          correcta: 0,
          explicacion: "Divisores de 6: {1, 2, 3, 6} = 4 de 6. P = 4/6 = 2/3.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "espacio-muestral",
        },
      ],
    },
    {
      id: "pf8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Práctica final · Ejercicio 8 / 20",
          enunciado: "De una baraja de 52 cartas, ¿cuál es la probabilidad de sacar una figura (J, Q o K)?",
          opciones: ["3/13", "1/4", "3/52"],
          correcta: 0,
          explicacion: "Figuras: 3 por palo × 4 palos = 12 de 52. P = 12/52 = 3/13.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-carta-as",
        },
      ],
    },
    {
      id: "pf9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Práctica final · Ejercicio 9 / 20",
          enunciado: "Se elige al azar un número del 1 al 20. ¿Cuál es la probabilidad de que sea múltiplo de 5?",
          opciones: ["1/5", "1/4", "1/10"],
          correcta: 0,
          explicacion: "Múltiplos de 5: {5, 10, 15, 20} = 4 de 20. P = 4/20 = 1/5.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "espacio-muestral",
        },
      ],
    },
    {
      id: "pf10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Práctica final · Ejercicio 10 / 20",
          enunciado: "Se lanzan dos dados. ¿Cuál es la probabilidad de obtener números iguales (dobles)?",
          opciones: ["1/6", "1/12", "1/3"],
          correcta: 0,
          explicacion: "Dobles: (1,1),(2,2),…,(6,6) = 6 de 36. P = 6/36 = 1/6.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "dos-dados",
        },
      ],
    },
    {
      id: "pf11",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Práctica final · Ejercicio 11 / 20",
          enunciado: "Se lanzan dos dados. ¿Cuál es la probabilidad de obtener al menos un 6?",
          opciones: ["11/36", "1/3", "1/6"],
          correcta: 0,
          explicacion: "Complemento: 1 − P(ningún 6) = 1 − (5/6)² = 1 − 25/36 = 11/36.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "dos-dados",
        },
      ],
    },
    {
      id: "pf12",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Práctica final · Ejercicio 12 / 20",
          enunciado: "Se lanza una moneda tres veces. ¿Cuál es la probabilidad de obtener al menos una cruz?",
          opciones: ["7/8", "1/2", "3/8"],
          correcta: 0,
          explicacion: "Complemento: 1 − P(ninguna cruz) = 1 − (1/2)³ = 1 − 1/8 = 7/8.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-dos-monedas",
        },
      ],
    },
    {
      id: "pf13",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Práctica final · Ejercicio 13 / 20",
          enunciado: "Se lanza un dado. ¿Cuál es la probabilidad de obtener un número primo o el 1?",
          opciones: ["2/3", "1/2", "5/6"],
          correcta: 0,
          explicacion: "Primos {2,3,5} = 3 y el 1; son excluyentes: P = 3/6 + 1/6 = 4/6 = 2/3.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-dado-mayor4",
        },
      ],
    },
    {
      id: "pf14",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Práctica final · Ejercicio 14 / 20",
          enunciado: "De una baraja de 52, ¿cuál es la probabilidad de sacar un as o una carta de espadas?",
          opciones: ["4/13", "17/52", "1/4"],
          correcta: 0,
          explicacion: "Regla de la suma: 4/52 + 13/52 − 1/52 (el as de espadas) = 16/52 = 4/13.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-carta-as",
        },
      ],
    },
    {
      id: "pf15",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Práctica final · Ejercicio 15 / 20",
          enunciado: "Se lanza un dado dos veces. ¿Cuál es la probabilidad de obtener un número impar en el primero y un 6 en el segundo?",
          opciones: ["1/12", "1/8", "7/12"],
          correcta: 0,
          explicacion: "Independientes: P(impar) · P(6) = 3/6 · 1/6 = 1/2 · 1/6 = 1/12.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "dos-dados",
        },
      ],
    },
    {
      id: "pf16",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Práctica final · Ejercicio 16 / 20",
          enunciado: "Se lanza una moneda y se gira una ruleta de 8 (1 al 8). ¿Probabilidad de obtener cruz y un número mayor que 6?",
          opciones: ["1/8", "1/4", "3/8"],
          correcta: 0,
          explicacion: "Independientes: P(cruz) · P(>6) = 1/2 · 2/8 = 1/2 · 1/4 = 1/8.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-ruleta",
        },
      ],
    },
    {
      id: "pf17",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Práctica final · Ejercicio 17 / 20",
          enunciado: "Una urna tiene 6 rojas y 4 azules. Se sacan 2 sin reemplazo. ¿Probabilidad de que ambas sean azules?",
          opciones: ["2/15", "4/25", "2/5"],
          correcta: 0,
          explicacion: "Sin reemplazo: 4/10 · 3/9 = 12/90 = 2/15.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-urna-r5a3",
        },
      ],
    },
    {
      id: "pf18",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Práctica final · Ejercicio 18 / 20",
          enunciado: "De una baraja de 52 se sacan 2 cartas sin reemplazo. ¿Probabilidad de que ambas sean figuras (J, Q o K)?",
          opciones: ["11/221", "9/169", "3/26"],
          correcta: 0,
          explicacion: "Hay 12 figuras: 12/52 · 11/51 = 132/2652 = 11/221.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-carta-as",
        },
      ],
    },
    {
      id: "pf19",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Práctica final · Ejercicio 19 / 20",
          enunciado: "¿De cuántas formas se puede elegir un comité de 3 personas de un grupo de 12?",
          opciones: ["220", "1320", "36"],
          correcta: 0,
          explicacion: "Combinación (sin orden): C(12,3) = (12·11·10)/3! = 1320/6 = 220.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-combinatoria",
        },
      ],
    },
    {
      id: "pf20",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Práctica final · Ejercicio 20 / 20",
          enunciado: "En una competencia de 6 atletas se reparten medallas de oro, plata y bronce. ¿De cuántas maneras pueden quedar los tres primeros lugares?",
          opciones: ["120", "20", "216"],
          correcta: 0,
          explicacion: "Los lugares son distintos (importa el orden): P(6,3) = 6·5·4 = 120. (20 = C(6,3); 216 = 6³.)",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-combinatoria",
        },
      ],
    },
    {
      id: "resumen",
      tipo: "lienzo",
      etiqueta: "Lo que aprendimos hoy",
      titulo: "Resumen",
      bloques: [
        {
          tipo: "lista",
          items: [
            {
              math: "P(E) = \\dfrac{\\#E}{\\#\\Omega}",
              texto: "regla de Laplace: favorables entre posibles (0 ≤ P ≤ 1)",
            },
            {
              math: "N = n_1 \\times n_2 \\times \\cdots",
              texto: "principio multiplicativo para contar los casos",
            },
            {
              math: "P(E') = 1 - P(E)",
              texto: "complemento: útil para el «al menos uno»",
            },
            {
              math: "P(E \\cup F) = P(E) + P(F) - P(E \\cap F)",
              texto: "regla de la suma (si son excluyentes, la resta es 0)",
            },
            {
              math: "P(E \\cap F) = P(E)\\cdot P(F)",
              texto: "regla del producto para eventos independientes",
            },
            {
              titulo: "Sin reemplazo",
              texto: "el denominador cambia: P(A)·P(B|A)",
            },
            {
              math: "P(E)\\ge 0,\\ P(\\Omega)=1",
              texto: "axiomas de Kolmogorov: toda probabilidad los cumple",
            },
            {
              titulo: "Frecuentista",
              texto: "con muchos intentos, la frecuencia relativa → P(E)",
            },
          ],
        },
      ],
    },
  ],
};
