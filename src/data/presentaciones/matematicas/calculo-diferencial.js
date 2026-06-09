// Presentación: Cálculo diferencial y optimización
// EXANI-II · Módulo Ingenierías y Ciencias Exactas (EPIU) · Matemáticas avanzadas

export const PRESENTACION = {
  id: "calculo-diferencial",
  titulo: "Cálculo Diferencial y Optimización",
  materia: "Matemáticas avanzadas",
  subtema: "Ingenierías y Ciencias Exactas",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Cálculo Diferencial y Optimización",
      subtitulo: "La derivada: definición, reglas de derivación, funciones trascendentes, máximos y mínimos, y optimización",
      etiqueta: "EXANI-II · Ingenierías y Ciencias Exactas"
    },

    // ── Definición formal de la derivada ───────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Bloque 1 · La derivada",
      titulo: "Definición formal e interpretación",
      bloques: [
        {
          tipo: "texto",
          texto: "La derivada de una función f en un punto x es el límite del cociente incremental: f'(x) = lím(h→0) [f(x + h) − f(x)] / h. Geométricamente, representa la pendiente de la recta tangente a la curva en ese punto; físicamente, la razón de cambio instantánea (por ejemplo, la velocidad es la derivada de la posición respecto al tiempo). El cociente [f(x+h) − f(x)]/h es la pendiente de una secante; al hacer h → 0, esa secante se convierte en la tangente."
        },
        {
          tipo: "tabla",
          titulo: "Tres lecturas de la derivada",
          columnas: ["Interpretación", "Significado", "Ejemplo"],
          filas: [
            { tiempo: "Geométrica", correcto: "Pendiente de la tangente", error: "Inclinación de la curva en un punto" },
            { tiempo: "Física",     correcto: "Razón de cambio instantánea", error: "Velocidad = derivada de la posición" },
            { tiempo: "Notación",   correcto: "f'(x), dy/dx, Df(x)",        error: "Distintas formas de lo mismo" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "la derivada como límite de la pendiente secante",
          correcto: "Para f(x)=x²: f'(x) = lím(h→0)[(x+h)² − x²]/h = lím(h→0)(2x + h) = 2x",
          incorrecto: "Evaluar el cociente en h = 0 directamente → da 0/0; primero se simplifica y luego se toma el límite"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "La derivada en un punto es un número (la pendiente ahí); la derivada como función da la pendiente en cualquier x",
          correcto: "f(x)=x² ⟹ f'(x)=2x; en x=3 la pendiente es f'(3)=6",
          incorrecto: "Confundir f(x) con f'(x): f(3)=9 es el valor; f'(3)=6 es la pendiente"
        }
      ]
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Definición",
      pregunta: "Usando la definición, la derivada de f(x) = x² es f'(x) = lím(h→0)[(x+h)² − x²]/h. ¿A qué se simplifica antes de tomar el límite?",
      opciones: [
        "2x + h",
        "2x + h²",
        "x + h"
      ],
      correcta: 0,
      explicacion: "(x+h)² − x² = x² + 2xh + h² − x² = 2xh + h². Al dividir entre h: (2xh + h²)/h = 2x + h. Tomando h → 0 se obtiene f'(x) = 2x.",
      pasos: []
    },

    // ── Reglas básicas de derivación ───────────────────────────────────────────
    {
      id: 3,
      tipo: "regla_rica",
      etiqueta: "Bloque 2 · Reglas básicas",
      titulo: "Reglas de derivación: constante, potencia y suma",
      bloques: [
        {
          tipo: "texto",
          texto: "En la práctica no se usa la definición cada vez, sino reglas. La derivada de una constante es 0. La regla de la potencia: la derivada de xⁿ es n·xⁿ⁻¹ (baja el exponente como factor y se reduce en 1). Una constante que multiplica se conserva: la derivada de c·f(x) es c·f'(x). La derivada de una suma o resta es la suma o resta de las derivadas. Con estas reglas se deriva cualquier polinomio término a término."
        },
        {
          tipo: "tabla",
          titulo: "Reglas fundamentales",
          columnas: ["Regla", "Fórmula", "Ejemplo"],
          filas: [
            { tiempo: "Constante", correcto: "d/dx (c) = 0",            error: "d/dx (7) = 0" },
            { tiempo: "Potencia",  correcto: "d/dx (xⁿ) = n·xⁿ⁻¹",      error: "d/dx (x⁵) = 5x⁴" },
            { tiempo: "Múltiplo",  correcto: "d/dx (c·f) = c·f'",       error: "d/dx (4x³) = 12x²" },
            { tiempo: "Suma/resta", correcto: "(f ± g)' = f' ± g'",     error: "Se deriva término a término" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "derivar un polinomio término a término",
          correcto: "f(x)=3x⁴ − 5x² + 2x − 7 ⟹ f'(x)=12x³ − 10x + 2",
          incorrecto: "Olvidar que la derivada de la constante −7 es 0 (no −7) y que la de 2x es 2"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "La derivada de un término lineal ax es a (su pendiente constante), y la de una constante es 0",
          correcto: "d/dx (2x) = 2 ;  d/dx (−7) = 0",
          incorrecto: "d/dx (2x) = 2x → error: el exponente de x es 1, así 1·2·x⁰ = 2"
        }
      ]
    },
    {
      id: 4,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Derivar un polinomio",
      pregunta: "¿Cuál es la derivada de f(x) = 2x³ − 4x² + 7x − 9?",
      opciones: [
        "6x² − 8x + 7",
        "6x² − 8x + 7 − 9",
        "2x² − 4x + 7"
      ],
      correcta: 0,
      explicacion: "Derivando término a término: d/dx(2x³)=6x²; d/dx(−4x²)=−8x; d/dx(7x)=7; d/dx(−9)=0. Resultado: f'(x) = 6x² − 8x + 7.",
      pasos: []
    },

    // ── Producto, cociente y cadena ────────────────────────────────────────────
    {
      id: 5,
      tipo: "regla_rica",
      etiqueta: "Bloque 3 · Reglas avanzadas",
      titulo: "Producto, cociente y regla de la cadena",
      bloques: [
        {
          tipo: "texto",
          texto: "Para funciones combinadas hay tres reglas clave. Producto: (f·g)' = f'·g + f·g'. Cociente: (f/g)' = (f'·g − f·g') / g². Regla de la cadena (para funciones compuestas): si y = f(g(x)), entonces y' = f'(g(x))·g'(x), es decir, se deriva la función «de afuera» dejando lo de adentro igual y se multiplica por la derivada «de adentro». La cadena es la regla que más se olvida aplicar."
        },
        {
          tipo: "tabla",
          titulo: "Reglas para funciones combinadas",
          columnas: ["Regla", "Fórmula", "Ejemplo"],
          filas: [
            { tiempo: "Producto", correcto: "(f·g)' = f'g + fg'",       error: "(x²·sen x)' = 2x·sen x + x²·cos x" },
            { tiempo: "Cociente", correcto: "(f/g)' = (f'g − fg')/g²",  error: "Numerador: deriva 1.º por 2.º menos 1.º por deriv. 2.º" },
            { tiempo: "Cadena",   correcto: "[f(g(x))]' = f'(g)·g'(x)",  error: "(3x²+1)⁵)' = 5(3x²+1)⁴·6x = 30x(3x²+1)⁴" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "regla de la cadena: derivar afuera por derivar adentro",
          correcto: "y=(3x²+1)⁵ ⟹ y' = 5(3x²+1)⁴ · (6x) = 30x(3x²+1)⁴",
          incorrecto: "y=(3x²+1)⁵ ⟹ y' = 5(3x²+1)⁴ → falta multiplicar por la derivada interna 6x"
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "La derivada de un producto NO es el producto de las derivadas: (f·g)' ≠ f'·g'",
          correcto: "(x²·x³)' por producto = 2x·x³ + x²·3x² = 5x⁴ (y coincide con (x⁵)' = 5x⁴)",
          incorrecto: "(x²·x³)' = (2x)(3x²) = 6x³ → falso: no se multiplican las derivadas"
        }
      ]
    },
    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla de la cadena",
      pregunta: "¿Cuál es la derivada de f(x) = (x² + 3)⁴?",
      opciones: [
        "8x(x² + 3)³",
        "4(x² + 3)³",
        "8x³"
      ],
      correcta: 0,
      explicacion: "Por la regla de la cadena: derivada externa 4(x²+3)³ por la interna (2x): 4(x²+3)³·2x = 8x(x²+3)³. La opción 4(x²+3)³ olvida multiplicar por la derivada interna 2x.",
      pasos: []
    },

    // ── Funciones trascendentes ────────────────────────────────────────────────
    {
      id: 7,
      tipo: "regla_rica",
      etiqueta: "Bloque 4 · Funciones trascendentes",
      titulo: "Derivadas de funciones trascendentes",
      bloques: [
        {
          tipo: "texto",
          texto: "Además de las algebraicas, hay que conocer las derivadas de las funciones trascendentes. Trigonométricas: la derivada de sen x es cos x, y la de cos x es −sen x (¡con signo negativo!). Exponencial: la derivada de eˣ es ella misma, eˣ. Logaritmo natural: la derivada de ln x es 1/x. Combinadas con la regla de la cadena, permiten derivar expresiones como sen(2x) o e^(3x)."
        },
        {
          tipo: "tabla",
          titulo: "Derivadas trascendentes básicas",
          columnas: ["Función", "Derivada", "Con cadena (ejemplo)"],
          filas: [
            { tiempo: "sen x", correcto: "cos x",   error: "d/dx sen(2x) = 2cos(2x)" },
            { tiempo: "cos x", correcto: "−sen x",  error: "d/dx cos(5x) = −5 sen(5x)" },
            { tiempo: "eˣ",    correcto: "eˣ",      error: "d/dx e^(3x) = 3e^(3x)" },
            { tiempo: "ln x",  correcto: "1/x",     error: "d/dx ln(x²) = (1/x²)·2x = 2/x" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "la derivada del coseno lleva signo negativo",
          correcto: "d/dx cos x = −sen x",
          incorrecto: "d/dx cos x = sen x → error: falta el signo negativo"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "eˣ es la única función cuya derivada es ella misma; no la confundas con la potencia xⁿ",
          correcto: "d/dx eˣ = eˣ (exponencial) ;  d/dx x³ = 3x² (potencia)",
          incorrecto: "d/dx eˣ = x·eˣ⁻¹ → error: la regla de la potencia no aplica a la exponencial"
        }
      ]
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Trascendentes",
      pregunta: "¿Cuál es la derivada de f(x) = sen(3x)?",
      opciones: [
        "3 cos(3x)",
        "cos(3x)",
        "−3 cos(3x)"
      ],
      correcta: 0,
      explicacion: "Regla de la cadena: la derivada de sen(u) es cos(u)·u'. Con u = 3x, u' = 3: f'(x) = cos(3x)·3 = 3 cos(3x).",
      pasos: []
    },

    // ── Máximos y mínimos ──────────────────────────────────────────────────────
    {
      id: 9,
      tipo: "regla_rica",
      etiqueta: "Bloque 5 · Máximos y mínimos",
      titulo: "Puntos críticos, máximos y mínimos",
      bloques: [
        {
          tipo: "texto",
          texto: "En un máximo o un mínimo de una función suave, la tangente es horizontal, así que la derivada vale cero. Esos valores se llaman puntos críticos: se obtienen resolviendo f'(x) = 0. Para clasificarlos: con el criterio de la primera derivada, si f' pasa de positiva a negativa hay un máximo, y de negativa a positiva, un mínimo. Con el criterio de la segunda derivada: si f''(x) > 0 el punto es mínimo (cóncava hacia arriba) y si f''(x) < 0 es máximo (cóncava hacia abajo)."
        },
        {
          tipo: "tabla",
          titulo: "Hallar y clasificar extremos",
          columnas: ["Paso", "Acción", "Criterio"],
          filas: [
            { tiempo: "1. Críticos", correcto: "Resolver f'(x) = 0",       error: "Tangente horizontal" },
            { tiempo: "2. Clasificar (1.ª)", correcto: "Cambio de signo de f'", error: "+ a − ⇒ máx ; − a + ⇒ mín" },
            { tiempo: "2. Clasificar (2.ª)", correcto: "Signo de f''(x)",   error: "f''>0 ⇒ mín ; f''<0 ⇒ máx" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "puntos críticos donde la pendiente es cero",
          correcto: "f(x)=x³−3x² ⟹ f'(x)=3x²−6x=3x(x−2)=0 → x=0 y x=2; f''=6x−6: f''(0)=−6 (máx), f''(2)=6 (mín)",
          incorrecto: "Suponer que todo punto crítico es máximo: hay que clasificarlo con un criterio"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "f'(x) = 0 localiza candidatos a extremo, pero no todos lo son (puede ser un punto de inflexión); siempre hay que clasificar",
          correcto: "En f(x)=x³, f'(0)=0 pero x=0 no es máx ni mín (es inflexión)",
          incorrecto: "Afirmar que x=0 es mínimo de x³ solo porque f'(0)=0"
        }
      ]
    },
    {
      id: 10,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Máximos y mínimos",
      pregunta: "Para f(x) = x² − 6x + 5, ¿en qué valor de x hay un mínimo?",
      opciones: ["x = 3", "x = 6", "x = −3"],
      correcta: 0,
      explicacion: "f'(x) = 2x − 6 = 0 → x = 3. Como f''(x) = 2 > 0, el punto es un mínimo. (Coincide con el vértice de la parábola, que abre hacia arriba.)",
      pasos: []
    },

    // ── Optimización ───────────────────────────────────────────────────────────
    {
      id: 11,
      tipo: "regla_rica",
      etiqueta: "Bloque 6 · Optimización",
      titulo: "Problemas de optimización",
      bloques: [
        {
          tipo: "texto",
          texto: "Optimizar es encontrar el valor que hace máxima o mínima una cantidad (área, volumen, costo, distancia). El procedimiento: (1) escribir la cantidad a optimizar como función; (2) usar la condición o restricción del problema para dejarla en una sola variable; (3) derivar e igualar a cero para hallar el punto crítico; (4) clasificarlo y responder. Es la aplicación más importante de la derivada en ingeniería y física."
        },
        {
          tipo: "tabla",
          titulo: "Ejemplo: corral rectangular contra un muro (100 m de cerca, 3 lados)",
          columnas: ["Paso", "Planteamiento", "Resultado"],
          filas: [
            { tiempo: "Restricción", correcto: "2x + y = 100 → y = 100 − 2x", error: "x = ancho, y = largo" },
            { tiempo: "Función",     correcto: "A = x·y = x(100 − 2x)",       error: "A = 100x − 2x²" },
            { tiempo: "Derivar = 0", correcto: "A' = 100 − 4x = 0",           error: "x = 25, y = 50" },
            { tiempo: "Respuesta",   correcto: "A máx = 25·50",               error: "1250 m²" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "reducir a una variable usando la restricción",
          correcto: "Con 2x + y = 100, sustituir y = 100 − 2x deja A solo en función de x",
          incorrecto: "Derivar A = x·y sin sustituir → no se puede optimizar con dos variables libres"
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "No olvides el último paso: convertir el valor crítico de x en la cantidad pedida (el área, el volumen, etc.)",
          correcto: "x = 25 da el área máxima A = 25·50 = 1250 m²",
          incorrecto: "Responder «x = 25» cuando la pregunta pide el área máxima (1250 m²)"
        }
      ]
    },
    {
      id: 12,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Optimización",
      pregunta: "Se quiere un rectángulo de perímetro 40 m con área máxima. Si A(x) = x(20 − x), ¿qué dimensiones la maximizan?",
      opciones: [
        "10 m × 10 m (un cuadrado)",
        "5 m × 15 m",
        "8 m × 12 m"
      ],
      correcta: 0,
      explicacion: "A(x) = x(20 − x) = 20x − x². A'(x) = 20 − 2x = 0 → x = 10, y = 20 − 10 = 10. El área máxima se logra con un cuadrado de 10 × 10 (A = 100 m²); f''=−2<0 confirma que es máximo.",
      pasos: []
    },

    // ── Cierre ────────────────────────────────────────────────────────────────
    {
      id: 13,
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Lo esencial del cálculo diferencial",
      puntos: [
        { math: "f'(x)=\\lim_{h\\to 0}\\dfrac{f(x+h)-f(x)}{h}", texto: "definición: pendiente de la tangente" },
        { math: "\\dfrac{d}{dx}x^{n}=n\\,x^{n-1}", texto: "regla de la potencia (deriva término a término)" },
        { titulo: "Producto, cociente, cadena", texto: "(fg)'=f'g+fg'; (f/g)'=(f'g−fg')/g²; cadena: f'(g)·g'" },
        { titulo: "Trascendentes", texto: "(sen x)'=cos x; (cos x)'=−sen x; (eˣ)'=eˣ; (ln x)'=1/x" },
        { titulo: "Extremos", texto: "f'(x)=0 da críticos; f''>0 mín, f''<0 máx" },
        { titulo: "Optimización", texto: "función → restricción a 1 variable → derivar=0 → clasificar y responder" }
      ]
    }

  ]
};
