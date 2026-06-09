// Presentación: Probabilidad (espacio muestral, clásica, frecuentista y compuesta)
// Pensamiento Matemático · Comprensión de lo matemático · EXANI-II

export const PRESENTACION = {
  id: "probabilidad-exani-ii",
  titulo: "Probabilidad",
  materia: "Pensamiento Matemático",
  subtema: "Comprensión de lo matemático",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Probabilidad",
      subtitulo: "Espacio muestral, probabilidad clásica y frecuentista, eventos compuestos y condicional",
      etiqueta: "Pensamiento Matemático · EXANI-II"
    },

    // ── Espacio muestral y eventos ─────────────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Bloque 1 · Fundamentos",
      titulo: "Espacio muestral y eventos",
      bloques: [
        {
          tipo: "texto",
          texto: "Un experimento aleatorio es una acción cuyo resultado no se puede predecir con certeza. El espacio muestral Ω es el conjunto de TODOS los resultados posibles, y un evento E es cualquier subconjunto de Ω (los resultados que nos interesan). El número de casos favorables es #E y el de casos posibles, #Ω. Cuando el experimento ocurre por etapas, el total de resultados se cuenta con el principio multiplicativo: se multiplican las opciones de cada etapa."
        },
        {
          tipo: "tabla",
          titulo: "El lenguaje de la probabilidad",
          columnas: ["Concepto", "Significado", "Ejemplo (dos dados)"],
          filas: [
            { tiempo: "Espacio muestral Ω", correcto: "Todos los resultados posibles", error: "Los 36 pares (1,1)…(6,6)" },
            { tiempo: "Evento E",            correcto: "Subconjunto de Ω que interesa", error: "«suma = 7»: 6 pares" },
            { tiempo: "Casos favorables #E",  correcto: "Cuántos cumplen el evento",    error: "#E = 6" },
            { tiempo: "Principio multiplicativo", correcto: "n₁ × n₂ × … por etapas", error: "#Ω = 6 × 6 = 36" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "para contar Ω por etapas se MULTIPLICA, no se suma",
          correcto: "Dos dados: cada cara del primero (6) con cada cara del segundo (6) → 6 × 6 = 36",
          incorrecto: "Sumar 6 + 6 = 12 → cuenta mal el espacio muestral de un experimento por etapas"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "El espacio muestral son TODOS los resultados, no solo los del evento que buscas",
          correcto: "Al lanzar dos dados, #Ω = 36 aunque solo te interese la suma 7",
          incorrecto: "Tomar #Ω = 11 (las sumas 2…12) → esas sumas NO son equiprobables"
        }
      ]
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Conteo del espacio muestral",
      pregunta: "Un menú ofrece 3 platos fuertes, 4 bebidas y 2 postres. ¿Cuántas comidas distintas (plato, bebida y postre) se pueden armar?",
      opciones: ["9 comidas", "24 comidas", "14 comidas"],
      correcta: 1,
      explicacion: "Por el principio multiplicativo se multiplican las opciones de cada etapa: 3 × 4 × 2 = 24 comidas distintas. Sumar (3+4+2 = 9) cuenta mal: cada plato se combina con cada bebida y cada postre.",
      pasos: []
    },
    {
      id: 3,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Evento dentro de Ω",
      pregunta: "Se lanzan dos dados. ¿Cuántos resultados del espacio muestral dan una suma mayor que 9?",
      opciones: ["6 resultados", "3 resultados", "9 resultados"],
      correcta: 0,
      explicacion: "Sumas mayores que 9 son 10, 11 y 12. Suma 10: (4,6),(5,5),(6,4) = 3; suma 11: (5,6),(6,5) = 2; suma 12: (6,6) = 1. En total 3 + 2 + 1 = 6 pares de los 36 posibles.",
      pasos: []
    },

    // ── Probabilidad clásica (Laplace) ─────────────────────────────────────────
    {
      id: 4,
      tipo: "regla_rica",
      etiqueta: "Bloque 2 · Regla de Laplace",
      titulo: "Probabilidad clásica y complemento",
      bloques: [
        {
          tipo: "texto",
          texto: "Cuando todos los resultados de Ω son igualmente probables, la probabilidad de un evento es P(E) = #E / #Ω (casos favorables entre casos posibles). Toda probabilidad cumple 0 ≤ P(E) ≤ 1: vale 0 si el evento es imposible y 1 si es seguro. El complemento E′ es «E no ocurre», y como E y E′ cubren todo Ω sin traslaparse, P(E′) = 1 − P(E). El complemento es la vía más rápida para los problemas de tipo «al menos uno»."
        },
        {
          tipo: "tabla",
          titulo: "Probabilidad clásica de un vistazo",
          columnas: ["Idea", "Fórmula", "Ejemplo (un dado)"],
          filas: [
            { tiempo: "Regla de Laplace", correcto: "P(E) = #E / #Ω", error: "P(par) = 3/6 = 1/2" },
            { tiempo: "Rango",            correcto: "0 ≤ P(E) ≤ 1",   error: "0 (imposible) … 1 (seguro)" },
            { tiempo: "Complemento",      correcto: "P(E′) = 1 − P(E)", error: "P(no 6) = 1 − 1/6 = 5/6" },
            { tiempo: "Porcentaje",       correcto: "P × 100",          error: "1/2 = 50 %" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "«al menos uno» se resuelve por el complemento",
          correcto: "P(al menos un 6 en dos dados) = 1 − P(ningún 6) = 1 − (5/6)(5/6) = 1 − 25/36 = 11/36",
          incorrecto: "Sumar 1/6 + 1/6 = 2/6 → cuenta dos veces el caso (6,6) y supone excluyentes lo que no lo es"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "Laplace SOLO aplica si los resultados son equiprobables: las sumas de dos dados no lo son",
          correcto: "Para la suma 7, cuenta sobre los 36 pares equiprobables: 6/36 = 1/6",
          incorrecto: "Tomar P(suma 7) = 1/11 (una de las 11 sumas) → las sumas no pesan igual"
        }
      ]
    },
    {
      id: 5,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Laplace con conteo",
      pregunta: "Se lanzan dos dados. ¿Cuál es la probabilidad de que la suma sea 7?",
      opciones: ["1/6", "7/36", "1/12"],
      correcta: 0,
      explicacion: "Los pares que suman 7 son (1,6),(2,5),(3,4),(4,3),(5,2),(6,1): 6 casos sobre 36 posibles. P = 6/36 = 1/6. La suma 7 es la más probable de todas.",
      pasos: []
    },
    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Complemento",
      pregunta: "Una caja tiene 10 focos, de los cuales 3 están fundidos. Si se elige uno al azar, ¿cuál es la probabilidad de que NO esté fundido?",
      opciones: ["3/10", "7/10", "1/3"],
      correcta: 1,
      explicacion: "Por el complemento: P(no fundido) = 1 − P(fundido) = 1 − 3/10 = 7/10. (También directo: 7 buenos de 10.)",
      pasos: []
    },

    // ── Frecuencia y probabilidad frecuentista ─────────────────────────────────
    {
      id: 7,
      tipo: "regla_rica",
      etiqueta: "Bloque 3 · Frecuencias",
      titulo: "Frecuencia y probabilidad frecuentista",
      bloques: [
        {
          tipo: "texto",
          texto: "La frecuencia absoluta f es cuántas veces ocurre un resultado; la frecuencia relativa es fᵣ = f / n, la proporción respecto al total de ensayos. Cuando los resultados NO son equiprobables (o no se conoce el modelo), la probabilidad se ESTIMA con la frecuencia relativa de muchos ensayos. La ley de los grandes números dice que, al aumentar n, la frecuencia relativa se acerca a la probabilidad real: fᵣ → P(E)."
        },
        {
          tipo: "tabla",
          titulo: "De la frecuencia a la probabilidad",
          columnas: ["Concepto", "Fórmula", "Ejemplo"],
          filas: [
            { tiempo: "Frecuencia absoluta f", correcto: "Veces que ocurre el resultado", error: "Cara salió 130 veces" },
            { tiempo: "Frecuencia relativa fᵣ", correcto: "fᵣ = f / n",                    error: "130 / 200 = 0.65" },
            { tiempo: "Estimación de P",        correcto: "P(E) ≈ fᵣ con n grande",          error: "P(cara) ≈ 0.65" },
            { tiempo: "Suma de frecuencias",    correcto: "Σf = n ;  Σfᵣ = 1",               error: "Las relativas suman 1 (100 %)" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "la frecuentista sirve cuando Laplace no aplica",
          correcto: "Tachuela que cayó «arriba» 130 de 200 veces → P(arriba) ≈ 130/200 = 0.65",
          incorrecto: "Suponer P(arriba) = 1/2 «porque son dos formas» → no son equiprobables"
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "Con pocos ensayos la frecuencia relativa es inestable; solo con n grande se acerca a P",
          correcto: "10 lanzamientos pueden dar 7 caras (0.7); con 10 000 se acerca a 0.5",
          incorrecto: "Concluir que una moneda está cargada porque en 10 tiros salieron 7 caras"
        }
      ]
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Estimar con frecuencias",
      pregunta: "En 250 partidas, un jugador ganó 90, empató 60 y perdió 100. Según la frecuencia relativa, ¿cuál es la probabilidad estimada de que gane la próxima?",
      opciones: ["0.36", "0.40", "0.24"],
      correcta: 0,
      explicacion: "Probabilidad estimada de ganar = fᵣ = 90 / 250 = 0.36 (36 %). Se usa el total de ensayos (250), no solo ganados + perdidos.",
      pasos: []
    },

    // ── Eventos compuestos: suma y producto ────────────────────────────────────
    {
      id: 9,
      tipo: "regla_rica",
      etiqueta: "Bloque 4 · Eventos compuestos",
      titulo: "Regla de la suma y del producto",
      bloques: [
        {
          tipo: "texto",
          texto: "Para «E o F» se usa la regla de la suma: P(E ∪ F) = P(E) + P(F) − P(E ∩ F); si los eventos son mutuamente excluyentes (no pueden ocurrir a la vez) la intersección es 0 y basta sumar. Para «E y F» con eventos independientes (uno no afecta al otro) se usa la regla del producto: P(E ∩ F) = P(E) · P(F). Identificar si los eventos se excluyen o son independientes decide qué regla aplicar."
        },
        {
          tipo: "tabla",
          titulo: "¿Suma o producto?",
          columnas: ["Caso", "Regla", "Cuándo"],
          filas: [
            { tiempo: "E o F (excluyentes)",     correcto: "P(E) + P(F)",                error: "No pueden ocurrir juntos" },
            { tiempo: "E o F (no excluyentes)",  correcto: "P(E) + P(F) − P(E ∩ F)",     error: "Se resta lo contado dos veces" },
            { tiempo: "E y F (independientes)",  correcto: "P(E) · P(F)",                error: "Uno no afecta al otro" },
            { tiempo: "Conector clave",          correcto: "«o» → suma ;  «y» → producto", error: "Lee el enunciado" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "si los eventos NO son excluyentes, resta la intersección",
          correcto: "Carta «as o corazón»: 4/52 + 13/52 − 1/52 = 16/52 = 4/13 (el as de corazones se contó dos veces)",
          incorrecto: "Sumar 4/52 + 13/52 = 17/52 → cuenta dos veces el as de corazones"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "El producto exige independencia: «sin reemplazo» rompe la independencia y cambia el segundo factor",
          correcto: "Dos monedas: P(dos caras) = ½ · ½ = ¼ (independientes)",
          incorrecto: "Aplicar P(E)·P(F) con el mismo denominador cuando se saca sin reemplazo"
        }
      ]
    },
    {
      id: 10,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla de la suma",
      pregunta: "De una baraja de 52 cartas se saca una. ¿Cuál es la probabilidad de que sea un rey O una carta de tréboles?",
      opciones: ["17/52", "4/13", "1/4"],
      correcta: 1,
      explicacion: "Hay 4 reyes y 13 tréboles, pero el rey de tréboles está en ambos grupos: P = 4/52 + 13/52 − 1/52 = 16/52 = 4/13. No son excluyentes, por eso se resta la intersección.",
      pasos: []
    },
    {
      id: 11,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla del producto",
      pregunta: "Se lanza una moneda y se gira una ruleta de 4 colores iguales. ¿Cuál es la probabilidad de obtener cara y el color rojo?",
      opciones: ["1/8", "1/6", "3/4"],
      correcta: 0,
      explicacion: "Son eventos independientes: P(cara) = 1/2 y P(rojo) = 1/4. Por la regla del producto: P = 1/2 · 1/4 = 1/8.",
      pasos: []
    },

    // ── Probabilidad condicional / sin reemplazo ───────────────────────────────
    {
      id: 12,
      tipo: "regla_rica",
      etiqueta: "Bloque 5 · Condicional",
      titulo: "Probabilidad condicional y sin reemplazo",
      bloques: [
        {
          tipo: "texto",
          texto: "Cuando un evento depende del resultado anterior, su probabilidad cambia: P(B | A) es la probabilidad de B dado que A ya ocurrió. Para que ocurran ambos: P(A ∩ B) = P(A) · P(B | A). El caso típico es extraer SIN reemplazo: al no devolver el objeto, bajan tanto el total como los casos favorables, así que el segundo factor tiene distinto denominador. Con reemplazo, en cambio, los eventos vuelven a ser independientes."
        },
        {
          tipo: "tabla",
          titulo: "Con y sin reemplazo",
          columnas: ["Situación", "Segundo factor", "Efecto"],
          filas: [
            { tiempo: "Con reemplazo",  correcto: "Mismo denominador", error: "Independientes: P(A)·P(B)" },
            { tiempo: "Sin reemplazo",  correcto: "Denominador − 1",   error: "Dependientes: P(A)·P(B|A)" },
            { tiempo: "Regla general",  correcto: "P(A ∩ B) = P(A)·P(B|A)", error: "Encadena las dos etapas" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "sin reemplazo, el segundo factor cambia de denominador",
          correcto: "Urna 5R y 3A, dos rojas sin reemplazo: (5/8)·(4/7) = 20/56 = 5/14",
          incorrecto: "(5/8)·(5/8) = 25/64 → trata como con reemplazo un caso que no lo es"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "Sin reemplazo baja el total Y los favorables: tras sacar una roja quedan 4 rojas de 7, no 5 de 8",
          correcto: "Segunda extracción: 4 rojas entre 7 bolas restantes",
          incorrecto: "Dejar 5/8 en la segunda extracción → olvidó que ya se retiró una roja"
        }
      ]
    },
    {
      id: 13,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Sin reemplazo",
      pregunta: "Una urna tiene 4 bolas rojas y 6 azules. Se sacan 2 sin reemplazo. ¿Cuál es la probabilidad de que ambas sean rojas?",
      opciones: ["2/15", "4/25", "2/5"],
      correcta: 0,
      explicacion: "Primera roja: 4/10. Sin reemplazo quedan 3 rojas de 9: 3/9. Producto: (4/10)·(3/9) = 12/90 = 2/15. Usar (4/10)·(4/10) supondría reemplazo, lo cual es incorrecto.",
      pasos: []
    },

    // ── Cierre ────────────────────────────────────────────────────────────────
    {
      id: 14,
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Lo esencial de probabilidad",
      puntos: [
        { math: "P(E) = \\dfrac{\\#E}{\\#\\Omega},\\quad 0 \\le P(E) \\le 1", texto: "regla de Laplace (resultados equiprobables)" },
        { math: "\\#\\Omega = n_1 \\times n_2 \\times \\cdots", texto: "principio multiplicativo para contar Ω" },
        { math: "P(E') = 1 - P(E)", texto: "complemento: ideal para «al menos uno»" },
        { math: "f_r = \\dfrac{f}{n} \\to P(E)", texto: "frecuentista: estima P cuando Laplace no aplica" },
        { math: "P(E \\cup F) = P(E) + P(F) - P(E \\cap F)", texto: "regla de la suma («o»); excluyentes: la resta es 0" },
        { math: "P(E \\cap F) = P(E)\\cdot P(F)", texto: "regla del producto («y») para independientes" },
        { math: "P(A \\cap B) = P(A)\\cdot P(B\\mid A)", texto: "condicional / sin reemplazo: cambia el denominador" }
      ]
    }

  ]
};
