// Presentación: Trigonometría analítica
// EXANI-II · Módulo Ingenierías y Ciencias Exactas (EPIU) · Matemáticas avanzadas

export const PRESENTACION = {
  id: "trigonometria-analitica",
  titulo: "Trigonometría Analítica",
  materia: "Matemáticas avanzadas",
  subtema: "Ingenierías y Ciencias Exactas",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Trigonometría Analítica",
      subtitulo: "Funciones trigonométricas, círculo unitario, identidades, suma de ángulos y ecuaciones trigonométricas",
      etiqueta: "EXANI-II · Ingenierías y Ciencias Exactas"
    },

    // ── Círculo unitario y medida de ángulos ───────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Bloque 1 · Fundamentos",
      titulo: "Círculo unitario, radianes y signos",
      bloques: [
        {
          tipo: "texto",
          texto: "La trigonometría analítica extiende las razones a ángulos de cualquier medida usando el círculo unitario (radio 1 centrado en el origen). Para un ángulo θ medido desde el eje x positivo, el punto sobre la circunferencia tiene coordenadas (cos θ, sen θ). Los ángulos se miden en grados o en radianes, con la equivalencia π rad = 180°. El signo de cada razón depende del cuadrante, que se recuerda con la regla ASTC: en I todas son positivas; en II solo el Seno; en III la Tangente; en IV el Coseno."
        },
        {
          tipo: "tabla",
          titulo: "Signos por cuadrante (ASTC) y radianes",
          columnas: ["Cuadrante", "Positivas", "Ángulo de referencia"],
          filas: [
            { tiempo: "I  (0°–90°)",    correcto: "Todas (A)",       error: "0 a π/2 rad" },
            { tiempo: "II (90°–180°)",  correcto: "Seno (S)",        error: "π/2 a π rad" },
            { tiempo: "III (180°–270°)", correcto: "Tangente (T)",   error: "π a 3π/2 rad" },
            { tiempo: "IV (270°–360°)", correcto: "Coseno (C)",      error: "3π/2 a 2π rad" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "convertir entre grados y radianes con π = 180°",
          correcto: "60° = 60·(π/180) = π/3 rad ;  3π/4 rad = 135°",
          incorrecto: "Confundir π/2 con 90°·π → π/2 rad ya ES 90°, no se multiplica de nuevo"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "En el círculo unitario, cos θ es la coordenada x y sen θ la coordenada y, por eso ambos van de −1 a 1",
          correcto: "cos 180° = −1, sen 180° = 0 (punto (−1, 0))",
          incorrecto: "Suponer que sen o cos pueden valer 2 → nunca salen del intervalo [−1, 1]"
        }
      ]
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Cuadrantes y signos",
      pregunta: "Si θ está en el segundo cuadrante, ¿qué signos tienen sen θ y cos θ?",
      opciones: [
        "sen θ > 0 y cos θ < 0",
        "sen θ < 0 y cos θ > 0",
        "ambos positivos"
      ],
      correcta: 0,
      explicacion: "En el segundo cuadrante (regla ASTC: solo el Seno es positivo) se tiene sen θ > 0 y cos θ < 0. En el círculo unitario, ahí la coordenada y es positiva y la x negativa.",
      pasos: []
    },
    {
      id: 3,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Radianes",
      pregunta: "¿A cuántos grados equivale 5π/6 radianes?",
      opciones: ["150°", "120°", "210°"],
      correcta: 0,
      explicacion: "Se usa π rad = 180°: (5π/6)·(180°/π) = 5·180°/6 = 900°/6 = 150°.",
      pasos: []
    },

    // ── Funciones trigonométricas y su gráfica ─────────────────────────────────
    {
      id: 4,
      tipo: "regla_rica",
      etiqueta: "Bloque 2 · Funciones",
      titulo: "Funciones trigonométricas y sus gráficas",
      bloques: [
        {
          tipo: "texto",
          texto: "Las funciones y = sen x, y = cos x son periódicas con periodo 2π (se repiten cada vuelta) y oscilan entre −1 y 1 (amplitud 1). La función y = tan x tiene periodo π y presenta asíntotas verticales donde cos x = 0 (en 90°, 270°, …). En y = a·sen(bx), el factor a modifica la amplitud y b cambia el periodo, que pasa a ser 2π/b. Conocer dominio, rango, periodo y amplitud permite interpretar y comparar sus gráficas."
        },
        {
          tipo: "tabla",
          titulo: "Características de las funciones",
          columnas: ["Función", "Periodo", "Rango"],
          filas: [
            { tiempo: "y = sen x", correcto: "2π", error: "[−1, 1]" },
            { tiempo: "y = cos x", correcto: "2π", error: "[−1, 1]" },
            { tiempo: "y = tan x", correcto: "π",  error: "(−∞, ∞), con asíntotas" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el coeficiente b cambia el periodo a 2π/b",
          correcto: "y = sen(2x) tiene periodo 2π/2 = π (oscila el doble de rápido)",
          incorrecto: "Pensar que y = sen(2x) tiene periodo 2π → el factor 2 reduce el periodo a la mitad"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "El coseno es el seno desfasado: cos x = sen(x + 90°); por eso sus gráficas tienen la misma forma, corridas 90°",
          correcto: "cos 0° = 1 coincide con sen 90° = 1",
          incorrecto: "Tratar seno y coseno como funciones de forma distinta → solo difieren en un desfase"
        }
      ]
    },
    {
      id: 5,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Periodo",
      pregunta: "¿Cuál es el periodo de la función y = 3·sen(4x)?",
      opciones: ["π/2", "2π", "8π"],
      correcta: 0,
      explicacion: "El periodo de sen(bx) es 2π/b. Con b = 4: periodo = 2π/4 = π/2. El factor 3 solo cambia la amplitud (de 1 a 3), no el periodo.",
      pasos: []
    },

    // ── Identidades recíprocas, de cociente y pitagóricas ──────────────────────
    {
      id: 6,
      tipo: "regla_rica",
      etiqueta: "Bloque 3 · Identidades básicas",
      titulo: "Recíprocas, de cociente y pitagóricas",
      bloques: [
        {
          tipo: "texto",
          texto: "Las identidades son igualdades válidas para todo ángulo. Recíprocas: csc x = 1/sen x, sec x = 1/cos x, cot x = 1/tan x. De cociente: tan x = sen x/cos x y cot x = cos x/sen x. Pitagóricas: a partir de sen²x + cos²x = 1, dividiendo entre cos²x se obtiene 1 + tan²x = sec²x, y dividiendo entre sen²x se obtiene 1 + cot²x = csc²x. Estas relaciones permiten transformar expresiones y demostrar otras identidades."
        },
        {
          tipo: "tabla",
          titulo: "Las tres familias de identidades",
          columnas: ["Tipo", "Identidad", "Derivada de"],
          filas: [
            { tiempo: "Recíproca",  correcto: "csc = 1/sen ; sec = 1/cos ; cot = 1/tan", error: "Definición de inversas" },
            { tiempo: "Cociente",   correcto: "tan = sen/cos ; cot = cos/sen",           error: "Relación entre razones" },
            { tiempo: "Pitagórica 1", correcto: "sen²x + cos²x = 1",                     error: "Teorema de Pitágoras" },
            { tiempo: "Pitagórica 2", correcto: "1 + tan²x = sec²x",                     error: "÷ cos²x en la anterior" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "usar identidades para simplificar",
          correcto: "sen²x + cos²x = 1 ⟹ la expresión (sen²x + cos²x)·sec x = sec x",
          incorrecto: "Escribir sen²x + cos²x = 2senx·cosx → eso es sen(2x), no la identidad pitagórica"
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "1 + tan²x = sec²x se obtiene dividiendo la identidad pitagórica entre cos²x; no es una fórmula independiente que haya que memorizar a ciegas",
          correcto: "(sen²x + cos²x)/cos²x = tan²x + 1 = sec²x",
          incorrecto: "Confundirla con 1 + cot²x = csc²x (esa sale al dividir entre sen²x)"
        }
      ]
    },
    {
      id: 7,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Identidad pitagórica",
      pregunta: "Si sec θ = 13/5 y θ es agudo, ¿cuánto vale tan θ?",
      opciones: ["12/5", "5/12", "8/5"],
      correcta: 0,
      explicacion: "Usando 1 + tan²θ = sec²θ: tan²θ = (13/5)² − 1 = 169/25 − 25/25 = 144/25, así que tan θ = 12/5. (Corresponde al triángulo 5-12-13.)",
      pasos: []
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Recíprocas y cociente",
      pregunta: "¿A qué es igual la expresión tan x · cos x?",
      opciones: ["sen x", "cos x", "1"],
      correcta: 0,
      explicacion: "Por la identidad de cociente, tan x = sen x/cos x. Entonces tan x · cos x = (sen x/cos x)·cos x = sen x.",
      pasos: []
    },

    // ── Suma, resta y ángulo doble ─────────────────────────────────────────────
    {
      id: 9,
      tipo: "regla_rica",
      etiqueta: "Bloque 4 · Suma de ángulos",
      titulo: "Identidades de suma, resta y ángulo doble",
      bloques: [
        {
          tipo: "texto",
          texto: "Para combinar ángulos se usan las identidades de suma y resta: sen(A ± B) = sen A·cos B ± cos A·sen B; cos(A ± B) = cos A·cos B ∓ sen A·sen B (¡el signo del coseno se invierte!). De ellas se obtienen las del ángulo doble: sen 2A = 2·sen A·cos A y cos 2A = cos²A − sen²A = 1 − 2·sen²A = 2·cos²A − 1. Sirven para calcular razones de ángulos no notables (como 75° = 45° + 30°) y para simplificar."
        },
        {
          tipo: "tabla",
          titulo: "Fórmulas de combinación de ángulos",
          columnas: ["Identidad", "Fórmula", "Nota"],
          filas: [
            { tiempo: "sen(A+B)", correcto: "sen A cos B + cos A sen B", error: "Mismo signo que la operación" },
            { tiempo: "cos(A+B)", correcto: "cos A cos B − sen A sen B", error: "Signo INVERTIDO" },
            { tiempo: "sen 2A",   correcto: "2 sen A cos A",             error: "Caso A = B en sen(A+B)" },
            { tiempo: "cos 2A",   correcto: "cos²A − sen²A",             error: "= 1 − 2sen²A = 2cos²A − 1" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "calcular un ángulo no notable como suma de notables",
          correcto: "sen 75° = sen(45°+30°) = sen45 cos30 + cos45 sen30 = (√2/2)(√3/2)+(√2/2)(1/2) = (√6+√2)/4",
          incorrecto: "sen 75° = sen 45° + sen 30° = √2/2 + 1/2 → falso: el seno NO se distribuye sobre la suma"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "sen(A+B) ≠ sen A + sen B: las funciones trigonométricas no son lineales, hay que usar la identidad",
          correcto: "sen(30°+60°) = sen 90° = 1, y la fórmula da (1/2)(1/2)+(√3/2)(√3/2)=1/4+3/4=1 ✓",
          incorrecto: "sen 30° + sen 60° = 1/2 + √3/2 ≈ 1.37 → distinto de 1"
        }
      ]
    },
    {
      id: 10,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Ángulo doble",
      pregunta: "Si sen θ = 3/5 y cos θ = 4/5, ¿cuánto vale sen 2θ?",
      opciones: ["24/25", "6/5", "7/25"],
      correcta: 0,
      explicacion: "sen 2θ = 2·sen θ·cos θ = 2·(3/5)·(4/5) = 24/25. (El valor 7/25 corresponde a cos 2θ = cos²θ − sen²θ = 16/25 − 9/25.)",
      pasos: []
    },

    // ── Cofunciones ────────────────────────────────────────────────────────────
    {
      id: 11,
      tipo: "regla_rica",
      etiqueta: "Bloque 5 · Cofunciones",
      titulo: "Cofunciones: ángulos complementarios",
      bloques: [
        {
          tipo: "texto",
          texto: "Dos ángulos son complementarios si suman 90°. Las cofunciones expresan que la razón de un ángulo es igual a la corrazón de su complementario: sen(90° − θ) = cos θ; cos(90° − θ) = sen θ; tan(90° − θ) = cot θ. Por eso «seno» y «coseno» (co-seno = seno del complemento), «tangente» y «cotangente», «secante» y «cosecante» forman parejas. Esto simplifica cálculos y explica por qué sen 60° = cos 30°."
        },
        {
          tipo: "tabla",
          titulo: "Relaciones de cofunción",
          columnas: ["Cofunción", "Identidad", "Ejemplo"],
          filas: [
            { tiempo: "Seno–coseno", correcto: "sen(90°−θ) = cos θ", error: "sen 60° = cos 30° = √3/2" },
            { tiempo: "Tangente–cotangente", correcto: "tan(90°−θ) = cot θ", error: "tan 30° = cot 60°" },
            { tiempo: "Secante–cosecante", correcto: "sec(90°−θ) = csc θ", error: "sec 60° = csc 30° = 2" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "la razón de un ángulo = corrazón del complementario",
          correcto: "cos 70° = sen(90° − 70°) = sen 20°",
          incorrecto: "Suponer cos 70° = sen 70° → solo son iguales en 45° (donde sen = cos)"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "Las cofunciones relacionan ángulos COMPLEMENTARIOS (suman 90°), no suplementarios (suman 180°)",
          correcto: "sen(90° − θ) = cos θ (complementario)",
          incorrecto: "Aplicar la relación a 90° + θ esperando el mismo resultado"
        }
      ]
    },
    {
      id: 12,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Cofunciones",
      pregunta: "¿A cuál de las siguientes expresiones es igual cos 25°?",
      opciones: ["sen 65°", "sen 25°", "tan 65°"],
      correcta: 0,
      explicacion: "Por cofunción, cos θ = sen(90° − θ). Entonces cos 25° = sen(90° − 25°) = sen 65°. Los ángulos 25° y 65° son complementarios (suman 90°).",
      pasos: []
    },

    // ── Ecuaciones trigonométricas ─────────────────────────────────────────────
    {
      id: 13,
      tipo: "regla_rica",
      etiqueta: "Bloque 6 · Ecuaciones",
      titulo: "Ecuaciones trigonométricas",
      bloques: [
        {
          tipo: "texto",
          texto: "Una ecuación trigonométrica se resuelve despejando la función trigonométrica y luego hallando los ángulos que la satisfacen. Como las funciones son periódicas, suele haber varias soluciones; normalmente se piden las del intervalo [0°, 360°). Conviene apoyarse en los valores notables y en los signos por cuadrante. A veces hay que usar identidades para dejar una sola función antes de despejar."
        },
        {
          tipo: "tabla",
          titulo: "Estrategia de solución",
          columnas: ["Paso", "Acción", "Ejemplo: 2 sen θ − 1 = 0"],
          filas: [
            { tiempo: "1. Despejar la razón", correcto: "Aislar sen/cos/tan", error: "sen θ = 1/2" },
            { tiempo: "2. Ángulo base",       correcto: "Usar valores notables", error: "θ = 30°" },
            { tiempo: "3. Otros cuadrantes",  correcto: "Según el signo (ASTC)", error: "sen > 0 en I y II → 30° y 150°" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "varias soluciones en [0°, 360°) según el cuadrante",
          correcto: "sen θ = 1/2 → θ = 30° y θ = 150° (seno positivo en I y II)",
          incorrecto: "Dar solo θ = 30° → falta la solución del segundo cuadrante"
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "No dividas entre una función que pueda ser cero: factoriza para no perder soluciones",
          correcto: "sen θ·cos θ = 0 → sen θ = 0  o  cos θ = 0 (todas las soluciones)",
          incorrecto: "Dividir entre cos θ → pierdes las soluciones donde cos θ = 0"
        }
      ]
    },
    {
      id: 14,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Ecuación trigonométrica",
      pregunta: "¿Cuáles son las soluciones de 2 cos θ − 1 = 0 en el intervalo [0°, 360°)?",
      opciones: [
        "θ = 60° y θ = 300°",
        "θ = 60° y θ = 120°",
        "θ = 30° y θ = 150°"
      ],
      correcta: 0,
      explicacion: "2 cos θ − 1 = 0 → cos θ = 1/2. El coseno vale 1/2 en θ = 60° (cuadrante I) y, por ser positivo también en IV, en θ = 360° − 60° = 300°.",
      pasos: []
    },

    // ── Cierre ────────────────────────────────────────────────────────────────
    {
      id: 15,
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Lo esencial de la trigonometría analítica",
      puntos: [
        { titulo: "Círculo unitario", texto: "(cos θ, sen θ); signos por cuadrante (ASTC); π rad = 180°" },
        { titulo: "Funciones", texto: "sen y cos: periodo 2π; tan: periodo π; sen(bx) tiene periodo 2π/b" },
        { math: "\\operatorname{sen}^2x+\\cos^2x=1;\\ 1+\\tan^2x=\\sec^2x", texto: "identidades pitagóricas" },
        { math: "\\operatorname{sen}(A\\pm B)=\\operatorname{sen}A\\cos B\\pm\\cos A\\operatorname{sen}B", texto: "suma/resta; cos invierte el signo" },
        { math: "\\operatorname{sen}2A=2\\operatorname{sen}A\\cos A", texto: "ángulo doble" },
        { titulo: "Cofunciones y ecuaciones", texto: "sen(90°−θ)=cos θ; resolver buscando todas las soluciones por cuadrante" }
      ]
    }

  ]
};
