// Presentación: Leyes de los exponentes y simplificación de expresiones algebraicas
// Pensamiento Matemático · Comprensión de lo matemático · EXANI-II

export const PRESENTACION = {
  id: "exponentes-algebra",
  titulo: "Exponentes y Expresiones Algebraicas",
  materia: "Pensamiento Matemático",
  subtema: "Comprensión de lo matemático",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Exponentes y Expresiones Algebraicas",
      subtitulo: "Leyes de los exponentes, términos semejantes, productos notables y factorización",
      etiqueta: "Pensamiento Matemático · EXANI-II"
    },

    // ── Leyes de los exponentes ────────────────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Bloque 1 · Potencias",
      titulo: "Leyes de los exponentes",
      bloques: [
        {
          tipo: "texto",
          texto: "Una potencia aⁿ indica multiplicar la base a por sí misma n veces. Las leyes de los exponentes permiten operar potencias sin desarrollarlas. Reglas clave: al multiplicar potencias de igual base se suman los exponentes; al dividirlas se restan; al elevar una potencia a otra potencia se multiplican. Estas reglas SOLO aplican cuando la base es la misma."
        },
        {
          tipo: "tabla",
          titulo: "Las leyes fundamentales",
          columnas: ["Ley", "Regla", "Ejemplo"],
          filas: [
            { tiempo: "Producto",        correcto: "aᵐ · aⁿ = aᵐ⁺ⁿ",      error: "x³·x⁴ = x⁷" },
            { tiempo: "Cociente",        correcto: "aᵐ / aⁿ = aᵐ⁻ⁿ",      error: "x⁵/x² = x³" },
            { tiempo: "Potencia de pot.", correcto: "(aᵐ)ⁿ = aᵐ·ⁿ",        error: "(x²)³ = x⁶" },
            { tiempo: "Producto elevado", correcto: "(a·b)ⁿ = aⁿ·bⁿ",      error: "(2x)³ = 8x³" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "se suman los exponentes, NO se multiplican, en el producto",
          correcto: "x²·x³ = x²⁺³ = x⁵",
          incorrecto: "x²·x³ = x²ˣ³ = x⁶ → error: en el producto los exponentes se SUMAN"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Las leyes solo aplican con la misma base: x³·y² no se puede combinar en un solo exponente",
          correcto: "x³·x² = x⁵ (misma base x)",
          incorrecto: "x³·y² = (xy)⁵ → error: las bases son distintas, no se combinan"
        }
      ]
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Leyes de exponentes",
      pregunta: "Simplifica: (x⁴ · x³) / x²",
      opciones: ["x⁵", "x⁹", "x²⁴"],
      correcta: 0,
      explicacion: "Primero el producto: x⁴·x³ = x⁴⁺³ = x⁷. Luego el cociente: x⁷/x² = x⁷⁻² = x⁵. Se suman los exponentes al multiplicar y se restan al dividir.",
      pasos: []
    },
    {
      id: 3,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Potencia de potencia",
      pregunta: "Simplifica: (2x²y)³",
      opciones: ["6x⁶y³", "8x⁶y³", "8x⁵y³"],
      correcta: 1,
      explicacion: "Cada factor se eleva al exponente 3: 2³ = 8, (x²)³ = x⁶, y³ = y³. Resultado: 8x⁶y³. El error común es no elevar el coeficiente (2³ = 8, no 2·3 = 6) o multiplicar mal el exponente de x.",
      pasos: []
    },

    // ── Exponente cero, negativo y fraccionario ────────────────────────────────
    {
      id: 4,
      tipo: "regla_rica",
      etiqueta: "Bloque 2 · Casos especiales",
      titulo: "Exponente cero, negativo y fraccionario",
      bloques: [
        {
          tipo: "texto",
          texto: "Tres casos especiales completan las leyes. Exponente cero: toda base distinta de cero elevada a 0 vale 1 (a⁰ = 1). Exponente negativo: indica el recíproco, a⁻ⁿ = 1/aⁿ. Exponente fraccionario: representa una raíz, a^(1/n) = ⁿ√a, y en general a^(m/n) = ⁿ√(aᵐ). Estos casos surgen al aplicar la ley del cociente cuando el exponente de abajo es mayor."
        },
        {
          tipo: "tabla",
          titulo: "Casos especiales de exponente",
          columnas: ["Caso", "Regla", "Ejemplo"],
          filas: [
            { tiempo: "Cero",        correcto: "a⁰ = 1  (a ≠ 0)",        error: "7⁰ = 1 ;  (3x)⁰ = 1" },
            { tiempo: "Negativo",    correcto: "a⁻ⁿ = 1/aⁿ",             error: "2⁻³ = 1/8" },
            { tiempo: "Fraccionario", correcto: "a^(1/n) = ⁿ√a",          error: "9^(1/2) = √9 = 3" },
            { tiempo: "Frac. general", correcto: "a^(m/n) = ⁿ√(aᵐ)",       error: "8^(2/3) = ³√(8²) = 4" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el exponente negativo no hace negativo el resultado: invierte la base",
          correcto: "5⁻² = 1/5² = 1/25 (positivo)",
          incorrecto: "5⁻² = −25 → error: el signo del exponente no pasa al resultado"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "Distingue −2⁴ de (−2)⁴: sin paréntesis el exponente solo afecta al 2, no al signo",
          correcto: "(−2)⁴ = 16  (la base es −2) ;  −2⁴ = −16  (solo el 2 se eleva)",
          incorrecto: "Tratar −2⁴ como 16 → ignora que el signo queda fuera de la potencia"
        }
      ]
    },
    {
      id: 5,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Exponente negativo",
      pregunta: "¿Cuál es el valor de 3⁻²?",
      opciones: ["−9", "1/9", "−6"],
      correcta: 1,
      explicacion: "El exponente negativo indica recíproco: 3⁻² = 1/3² = 1/9. El resultado es positivo; el signo negativo del exponente no convierte el número en negativo.",
      pasos: []
    },
    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Exponente fraccionario",
      pregunta: "¿Cuál es el valor de 16^(3/4)?",
      opciones: ["8", "12", "64"],
      correcta: 0,
      explicacion: "a^(m/n) = ⁿ√(aᵐ). Conviene sacar primero la raíz: 16^(1/4) = ⁴√16 = 2, y luego elevar al cubo: 2³ = 8. (También 16^(3/4) = ⁴√(16³) = ⁴√4096 = 8.)",
      pasos: []
    },

    // ── Términos semejantes ────────────────────────────────────────────────────
    {
      id: 7,
      tipo: "regla_rica",
      etiqueta: "Bloque 3 · Simplificación",
      titulo: "Reducción de términos semejantes",
      bloques: [
        {
          tipo: "texto",
          texto: "Los términos semejantes tienen exactamente la misma parte literal (mismas variables con los mismos exponentes); solo difieren en el coeficiente. Para simplificar una expresión se suman o restan los coeficientes de los términos semejantes, manteniendo la parte literal. Términos con distinta parte literal NO se pueden combinar. Este es el primer paso para ordenar cualquier expresión algebraica."
        },
        {
          tipo: "tabla",
          titulo: "¿Son semejantes?",
          columnas: ["Términos", "¿Semejantes?", "Razón"],
          filas: [
            { tiempo: "5x  y  3x",     correcto: "Sí → 8x",        error: "Misma parte literal x" },
            { tiempo: "4x²  y  7x",    correcto: "No",             error: "Distinto exponente (x² ≠ x)" },
            { tiempo: "2xy  y  −5xy",  correcto: "Sí → −3xy",      error: "Misma parte literal xy" },
            { tiempo: "3a²b  y  3ab²", correcto: "No",             error: "Distinta distribución de exponentes" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "solo se suman los coeficientes; la parte literal no cambia",
          correcto: "7x + 2x = 9x  (no 9x²)",
          incorrecto: "7x + 2x = 9x² → error: la variable no se multiplica al sumar términos semejantes"
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "Cuida los signos al reducir: el signo pertenece al término que lo precede",
          correcto: "5x − 8x + 2x = (5 − 8 + 2)x = −x",
          incorrecto: "5x − 8x + 2x = 15x → error: no se respetan los signos de cada término"
        }
      ]
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Términos semejantes",
      pregunta: "Reduce: 6a − 4a² + 3a − a²",
      opciones: ["4a²·9a", "9a − 5a²", "5a²"],
      correcta: 1,
      explicacion: "Se agrupan por separado: términos en a: 6a + 3a = 9a; términos en a²: −4a² − a² = −5a². No son semejantes entre sí, así que el resultado queda como 9a − 5a². No pueden fundirse en un solo término.",
      pasos: []
    },

    // ── Productos notables ─────────────────────────────────────────────────────
    {
      id: 9,
      tipo: "regla_rica",
      etiqueta: "Bloque 4 · Productos notables",
      titulo: "Productos notables",
      bloques: [
        {
          tipo: "texto",
          texto: "Los productos notables son multiplicaciones con un patrón fijo que conviene memorizar para no desarrollarlas cada vez. Las tres más evaluadas: el binomio al cuadrado, (a ± b)² = a² ± 2ab + b² (el doble producto es el término que más se olvida); y la suma por diferencia, (a + b)(a − b) = a² − b² (no hay término central). Reconocerlas agiliza tanto el desarrollo como la factorización."
        },
        {
          tipo: "tabla",
          titulo: "Los productos notables clave",
          columnas: ["Producto", "Desarrollo", "Ejemplo"],
          filas: [
            { tiempo: "Binomio al cuadrado (+)", correcto: "(a+b)² = a² + 2ab + b²", error: "(x+3)² = x² + 6x + 9" },
            { tiempo: "Binomio al cuadrado (−)", correcto: "(a−b)² = a² − 2ab + b²", error: "(x−5)² = x² − 10x + 25" },
            { tiempo: "Suma por diferencia",     correcto: "(a+b)(a−b) = a² − b²",   error: "(x+4)(x−4) = x² − 16" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el binomio al cuadrado tiene un término central: el doble producto",
          correcto: "(x + 3)² = x² + 2·(x)(3) + 9 = x² + 6x + 9",
          incorrecto: "(x + 3)² = x² + 9 → error clásico: olvidar el doble producto 2ab"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "(a + b)² no es a² + b²: elevar al cuadrado un binomio no es elevar cada término por separado",
          correcto: "(2 + 3)² = 5² = 25, y a² + 2ab + b² = 4 + 12 + 9 = 25 ✓",
          incorrecto: "(2 + 3)² = 4 + 9 = 13 → falso (faltó el doble producto 2·2·3 = 12)"
        }
      ]
    },
    {
      id: 10,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Producto notable",
      pregunta: "Desarrolla: (2x − 5)²",
      opciones: ["4x² − 25", "4x² − 20x + 25", "2x² − 20x + 25"],
      correcta: 1,
      explicacion: "(a−b)² = a² − 2ab + b² con a = 2x y b = 5: (2x)² − 2·(2x)(5) + 5² = 4x² − 20x + 25. El error 4x² − 25 olvida el doble producto; debe incluir el término central −20x.",
      pasos: []
    },
    {
      id: 11,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Suma por diferencia",
      pregunta: "Multiplica: (3x + 7)(3x − 7)",
      opciones: ["9x² − 49", "9x² + 49", "9x² − 42x − 49"],
      correcta: 0,
      explicacion: "Es una suma por diferencia: (a+b)(a−b) = a² − b², con a = 3x y b = 7. Resultado: (3x)² − 7² = 9x² − 49. No hay término central porque los productos cruzados se cancelan.",
      pasos: []
    },

    // ── Factorización ──────────────────────────────────────────────────────────
    {
      id: 12,
      tipo: "regla_rica",
      etiqueta: "Bloque 5 · Factorización",
      titulo: "Factorización: el camino inverso",
      bloques: [
        {
          tipo: "texto",
          texto: "Factorizar es escribir una expresión como producto de factores; es la operación inversa al desarrollo. Los tres casos más frecuentes: factor común (sacar lo que comparten todos los términos); diferencia de cuadrados (a² − b² = (a+b)(a−b)); y trinomio cuadrado perfecto (a² ± 2ab + b² = (a ± b)²). Factorizar sirve para simplificar fracciones algebraicas y resolver ecuaciones."
        },
        {
          tipo: "tabla",
          titulo: "Casos de factorización",
          columnas: ["Caso", "Patrón", "Ejemplo"],
          filas: [
            { tiempo: "Factor común",       correcto: "ab + ac = a(b + c)",       error: "6x² + 9x = 3x(2x + 3)" },
            { tiempo: "Diferencia de cuadrados", correcto: "a² − b² = (a+b)(a−b)", error: "x² − 25 = (x+5)(x−5)" },
            { tiempo: "Trinomio cuad. perfecto", correcto: "a² + 2ab + b² = (a+b)²", error: "x² + 6x + 9 = (x+3)²" },
            { tiempo: "Trinomio x²+bx+c",   correcto: "(x+m)(x+n), m+n=b, m·n=c", error: "x² + 5x + 6 = (x+2)(x+3)" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "para el trinomio: buscar dos números que sumen b y multipliquen c",
          correcto: "x² + 5x + 6: 2 y 3 (suman 5, multiplican 6) → (x+2)(x+3)",
          incorrecto: "x² + 5x + 6 = (x+1)(x+6) → 1·6 = 6 ✓ pero 1+6 = 7 ≠ 5 ✗"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "La suma de cuadrados a² + b² NO se factoriza en los reales: solo la diferencia a² − b² lo hace",
          correcto: "x² − 9 = (x+3)(x−3)  (diferencia → sí factoriza)",
          incorrecto: "x² + 9 = (x+3)(x−3) → falso: la suma de cuadrados no es factorizable en ℝ"
        }
      ]
    },
    {
      id: 13,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Factor común",
      pregunta: "Factoriza: 12x³ − 8x²",
      opciones: ["4x²(3x − 2)", "4x(3x² − 2x)", "2x²(6x − 4)"],
      correcta: 0,
      explicacion: "El factor común es el mayor que divide a ambos términos: el numérico es 4 (MCD de 12 y 8) y el literal es x² (menor potencia). 12x³ − 8x² = 4x²(3x − 2). Las otras opciones no extraen el factor común completo.",
      pasos: []
    },
    {
      id: 14,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Trinomio",
      pregunta: "Factoriza: x² − x − 12",
      opciones: ["(x − 3)(x + 4)", "(x + 3)(x − 4)", "(x − 2)(x + 6)"],
      correcta: 1,
      explicacion: "Se buscan dos números que multipliquen −12 y sumen −1: son +3 y −4 (3·(−4) = −12, 3 + (−4) = −1). Entonces x² − x − 12 = (x + 3)(x − 4).",
      pasos: []
    },

    // ── Cierre ────────────────────────────────────────────────────────────────
    {
      id: 15,
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Lo esencial de exponentes y álgebra",
      puntos: [
        { math: "a^{m}\\cdot a^{n}=a^{m+n}\\quad \\dfrac{a^{m}}{a^{n}}=a^{m-n}", texto: "producto suma exponentes; cociente los resta" },
        { math: "a^{0}=1\\quad a^{-n}=\\dfrac{1}{a^{n}}\\quad a^{1/n}=\\sqrt[n]{a}", texto: "cero, negativo y fraccionario" },
        { titulo: "Términos semejantes", texto: "misma parte literal; se suman los coeficientes" },
        { math: "(a\\pm b)^2=a^2\\pm 2ab+b^2", texto: "binomio al cuadrado: no olvides el doble producto" },
        { math: "a^2-b^2=(a+b)(a-b)", texto: "diferencia de cuadrados (la suma no factoriza)" },
        { titulo: "Factorizar", texto: "factor común, diferencia de cuadrados y trinomios" }
      ]
    }

  ]
};
