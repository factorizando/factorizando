// Presentación: Estadística descriptiva (tendencia central, dispersión, posición y gráficas)
// Pensamiento Matemático · Matematización · EXANI-II

export const PRESENTACION = {
  id: "estadistica-exani-ii",
  titulo: "Estadística Descriptiva",
  materia: "Pensamiento Matemático",
  subtema: "Matematización",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Estadística Descriptiva",
      subtitulo: "Tablas, tendencia central, dispersión, medidas de posición y representación gráfica",
      etiqueta: "Pensamiento Matemático · EXANI-II"
    },

    // ── Tablas de frecuencia ───────────────────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Bloque 1 · Organizar los datos",
      titulo: "Variables y tablas de frecuencia",
      bloques: [
        {
          tipo: "texto",
          texto: "La población (N) es el total que se estudia y la muestra (n) una parte representativa. Las variables cualitativas describen cualidades (color, marca) y las cuantitativas se miden con números, ya sean discretas (se cuentan: nº de hijos) o continuas (cualquier valor de un intervalo: peso). Para organizar los datos se usa una tabla de frecuencias: la frecuencia absoluta f cuenta repeticiones, la relativa fᵣ = f / n da la proporción (× 100 el porcentaje) y la acumulada F suma las frecuencias hasta ese valor."
        },
        {
          tipo: "tabla",
          titulo: "Tipos de frecuencia",
          columnas: ["Frecuencia", "Definición", "Propiedad"],
          filas: [
            { tiempo: "Absoluta f",  correcto: "Veces que aparece el dato", error: "Σf = n (total de datos)" },
            { tiempo: "Relativa fᵣ", correcto: "fᵣ = f / n",                error: "Σfᵣ = 1  (o 100 %)" },
            { tiempo: "Acumulada F", correcto: "Suma hasta ese valor",      error: "La última F = n" },
            { tiempo: "Porcentual",  correcto: "fᵣ × 100",                  error: "Proporción en %" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "la frecuencia acumulada suma de menor a mayor",
          correcto: "Si f de 6,7,8 son 2,5,8 → F de 8 = 2 + 5 + 8 = 15 alumnos con 8 o menos",
          incorrecto: "Confundir la acumulada con la absoluta: F del 8 no es 8, es la suma hasta el 8"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "La frecuencia relativa es una proporción entre 0 y 1; multiplicada por 100 da el porcentaje",
          correcto: "fᵣ = 8/20 = 0.40 = 40 %",
          incorrecto: "Reportar fᵣ = 40 (sin dividir) → ese es el porcentaje, no la frecuencia relativa"
        }
      ]
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Frecuencia relativa",
      pregunta: "En un grupo de 40 alumnos, 10 reprobaron. ¿Cuál es la frecuencia relativa de los reprobados?",
      opciones: ["0.25", "0.10", "0.40"],
      correcta: 0,
      explicacion: "fᵣ = f / n = 10 / 40 = 0.25 (es decir, 25 %). El denominador es el total del grupo (40), no el número de aprobados.",
      pasos: []
    },

    // ── Tendencia central ──────────────────────────────────────────────────────
    {
      id: 3,
      tipo: "regla_rica",
      etiqueta: "Bloque 2 · Tendencia central",
      titulo: "Media, mediana y moda",
      bloques: [
        {
          tipo: "texto",
          texto: "Las medidas de tendencia central resumen los datos en un valor representativo. La media x̄ = Σx / n es el promedio (sensible a los valores extremos). La mediana Me es el valor central de los datos ORDENADOS: si n es impar es el del centro, y si es par, el promedio de los dos centrales. La moda Mo es el dato más frecuente (la única que sirve para datos cualitativos). Cuando los datos tienen distinto peso se usa la media ponderada: Σ(x·w) / Σw."
        },
        {
          tipo: "tabla",
          titulo: "Las tres medidas",
          columnas: ["Medida", "Cómo se obtiene", "Ejemplo {2, 2, 6, 7, 8}"],
          filas: [
            { tiempo: "Media x̄",  correcto: "Σx / n (promedio)",          error: "25 / 5 = 5" },
            { tiempo: "Mediana Me", correcto: "Valor central (ordenados)", error: "2,2,6,7,8 → 6" },
            { tiempo: "Moda Mo",    correcto: "El dato más frecuente",      error: "2 (se repite)" },
            { tiempo: "Ponderada",  correcto: "Σ(x·w) / Σw",               error: "Promedio con pesos" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "la media ponderada pesa cada dato según su importancia",
          correcto: "Exámenes (70 %) con 8 y tareas (30 %) con 9: 0.70·8 + 0.30·9 = 5.6 + 2.7 = 8.3",
          incorrecto: "Promediar (8 + 9)/2 = 8.5 → ignora que cada parte pesa distinto"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "Para la mediana hay que ORDENAR primero; tomar el valor «de en medio» sin ordenar es un error",
          correcto: "3, 7, 5, 9, 4 → ordenado 3,4,5,7,9 → Me = 5",
          incorrecto: "Tomar el 5 «porque está en medio de la lista» sin ordenar (aquí coincide por suerte)"
        }
      ]
    },
    {
      id: 4,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Mediana (n par)",
      pregunta: "¿Cuál es la mediana del conjunto 12, 7, 20, 5, 15, 9?",
      opciones: ["10.5", "9", "12"],
      correcta: 0,
      explicacion: "Ordenados: 5, 7, 9, 12, 15, 20. Como hay 6 datos (par), la mediana es el promedio de los dos centrales (9 y 12): (9 + 12)/2 = 10.5.",
      pasos: []
    },
    {
      id: 5,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Media ponderada",
      pregunta: "La calificación final pesa: examen 50 %, proyecto 30 %, tareas 20 %. Un alumno obtuvo 6 en examen, 9 en proyecto y 10 en tareas. ¿Cuál es su final?",
      opciones: ["7.7", "8.3", "8.0"],
      correcta: 0,
      explicacion: "Media ponderada: 0.50·6 + 0.30·9 + 0.20·10 = 3.0 + 2.7 + 2.0 = 7.7. El promedio simple (8.33) sería incorrecto porque cada rubro pesa distinto.",
      pasos: []
    },

    // ── Dispersión ─────────────────────────────────────────────────────────────
    {
      id: 6,
      tipo: "regla_rica",
      etiqueta: "Bloque 3 · Dispersión",
      titulo: "Rango, varianza y desviación estándar",
      bloques: [
        {
          tipo: "texto",
          texto: "Las medidas de dispersión indican qué tan separados están los datos. El rango R = xₘₐₓ − xₘᵢₙ es la diferencia entre el mayor y el menor (la más simple). La varianza σ² = Σ(x − x̄)² / n es el promedio de los cuadrados de las distancias a la media. La desviación estándar σ = √(σ²) es la raíz de la varianza, y se prefiere porque queda en las mismas unidades que los datos. Una σ pequeña indica datos agrupados cerca de la media; una σ grande, datos muy dispersos."
        },
        {
          tipo: "tabla",
          titulo: "Medidas de dispersión",
          columnas: ["Medida", "Fórmula", "Nota"],
          filas: [
            { tiempo: "Rango R",        correcto: "xₘₐₓ − xₘᵢₙ",            error: "Solo usa los extremos" },
            { tiempo: "Varianza σ²",     correcto: "Σ(x − x̄)² / n",         error: "Unidades al cuadrado" },
            { tiempo: "Desv. estándar σ", correcto: "√(varianza)",          error: "Mismas unidades que los datos" },
            { tiempo: "Interpretación",  correcto: "Mayor σ → más dispersos", error: "Menor σ → más homogéneos" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "la desviación estándar es la raíz de la varianza",
          correcto: "{2,4,6,8,10}: x̄ = 6; distancias −4,−2,0,2,4; cuadrados suman 40; σ² = 40/5 = 8; σ = √8 ≈ 2.83",
          incorrecto: "Reportar σ = 8 (la varianza) → falta sacar la raíz para obtener la desviación estándar"
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "Dos conjuntos con la MISMA media pueden tener dispersión muy distinta: la media no basta para describirlos",
          correcto: "{5,5,5} y {0,5,10} tienen media 5, pero σ = 0 y σ ≈ 4.08 respectivamente",
          incorrecto: "Suponer que igual media significa datos parecidos"
        }
      ]
    },
    // ── Dispersión: cálculo paso a paso ───────────────────────────────────────
    {
      id: "dispersion-proceso",
      tipo: "regla_rica",
      etiqueta: "Bloque 3 · Dispersión (cálculo)",
      titulo: "Cómo calcular σ paso a paso",
      bloques: [
        {
          tipo: "texto",
          texto: "Pasos para calcular σ: ① calcula la media x̄; ② resta x̄ a cada dato (x − x̄); ③ eleva cada diferencia al cuadrado; ④ suma los cuadrados; ⑤ divide entre n (esto es la varianza σ²); ⑥ saca la raíz cuadrada (esto es σ). La varianza y la desviación son distintas: σ es siempre la raíz de σ²."
        },
        {
          tipo: "tabla",
          titulo: "Ejemplo con {4, 6, 8}, x̄ = 6",
          columnas: ["Dato x", "x − x̄", "(x − x̄)²"],
          filas: [
            { tiempo: "4",  correcto: "−2",  error: "4"  },
            { tiempo: "6",  correcto: " 0",  error: "0"  },
            { tiempo: "8",  correcto: "+2",  error: "4"  },
            { tiempo: "Σ",  correcto: " —",  error: "8  →  σ² = 8/3 ≈ 2.67  →  σ ≈ 1.63" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "σ es la raíz de la varianza, no la varianza misma",
          correcto: "σ² = 8/3 ≈ 2.67; σ = √2.67 ≈ 1.63. Son valores distintos.",
          incorrecto: "Reportar σ = 2.67 (la varianza) → falta sacar la raíz cuadrada"
        }
      ]
    },
    {
      id: 7,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Desviación estándar",
      pregunta: "¿Cuál es la desviación estándar del conjunto 4, 6, 8 (media = 6)?",
      opciones: ["√(8/3) ≈ 1.63", "8/3 ≈ 2.67", "2"],
      correcta: 0,
      explicacion: "Distancias a la media: −2, 0, 2; sus cuadrados 4, 0, 4 suman 8. Varianza = 8/3 ≈ 2.67 y desviación estándar = √(8/3) ≈ 1.63. La opción 2.67 es la varianza, no la desviación.",
      pasos: []
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Comparar dispersión",
      pregunta: "Dos máquinas llenan botellas con la misma media de 500 ml. La A tiene σ = 2 ml y la B, σ = 9 ml. ¿Qué afirmación es correcta?",
      opciones: [
        "La máquina A es más precisa (datos más homogéneos)",
        "La máquina B es más precisa porque su σ es mayor",
        "Ambas son igual de precisas porque tienen la misma media"
      ],
      correcta: 0,
      explicacion: "Una desviación estándar menor significa datos más concentrados alrededor de la media. La máquina A (σ = 2) llena con menos variación que la B (σ = 9), así que es más precisa. La media igual no dice nada sobre la dispersión.",
      pasos: []
    },

    // ── Medidas de posición ────────────────────────────────────────────────────
    {
      id: 9,
      tipo: "regla_rica",
      etiqueta: "Bloque 4 · Posición",
      titulo: "Cuartiles, deciles y percentiles",
      bloques: [
        {
          tipo: "texto",
          texto: "Las medidas de posición dividen los datos ORDENADOS en partes iguales. Los cuartiles (Q₁, Q₂, Q₃) los parten en 4 (25 % cada uno); los deciles (D₁…D₉) en 10 (10 % cada uno); los percentiles (P₁…P₉₉) en 100 (1 % cada uno). El percentil k indica el valor por debajo del cual queda el k % de los datos. Coinciden entre sí: Q₂ = D₅ = P₅₀ = mediana, Q₁ = P₂₅ y Q₃ = P₇₅. El rango intercuartílico RIC = Q₃ − Q₁ mide la dispersión del 50 % central."
        },
        {
          tipo: "tabla",
          titulo: "Equivalencias entre medidas de posición",
          columnas: ["Posición", "Deja por debajo", "Equivale a"],
          filas: [
            { tiempo: "Q₁ (primer cuartil)",  correcto: "25 % de los datos", error: "= P₂₅" },
            { tiempo: "Q₂ (segundo cuartil)",  correcto: "50 % de los datos", error: "= D₅ = P₅₀ = mediana" },
            { tiempo: "Q₃ (tercer cuartil)",   correcto: "75 % de los datos", error: "= P₇₅" },
            { tiempo: "RIC (intercuartílico)", correcto: "50 % central",      error: "RIC = Q₃ − Q₁" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "cuartiles: la mediana parte los datos, y cada mitad se vuelve a partir",
          correcto: "2,4,5,6,8,10,12,14,15,18,20 (n=11): Q₂=10; mitad baja 2,4,5,6,8 → Q₁=5; mitad alta 12,14,15,18,20 → Q₃=15",
          incorrecto: "Tomar Q₁ como «el dato en la posición 1» → Q₁ es la mediana de la mitad inferior, no el primer dato"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "El percentil es un VALOR de los datos, no el porcentaje: el P₈₀ es la calificación bajo la cual queda el 80 %",
          correcto: "Si P₈₀ = 17, el 80 % de los alumnos sacó 17 o menos",
          incorrecto: "Decir que «el P₈₀ es 80» confunde la posición con el valor del dato"
        }
      ]
    },
    {
      id: 10,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Cuartiles",
      pregunta: "Para los datos 3, 6, 7, 9, 11, 12, 15 (n = 7), ¿cuál es el primer cuartil Q₁?",
      opciones: ["6", "7", "9"],
      correcta: 0,
      explicacion: "La mediana es el dato central: Q₂ = 9 (4ª posición). La mitad inferior es 3, 6, 7; su valor central es 6, así que Q₁ = 6. (Q₃ sería la mediana de 11, 12, 15, es decir 12.)",
      pasos: []
    },
    {
      id: 11,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Rango intercuartílico",
      pregunta: "Si en un conjunto de datos Q₁ = 6 y Q₃ = 12, ¿cuál es el rango intercuartílico?",
      opciones: ["6", "18", "9"],
      correcta: 0,
      explicacion: "El rango intercuartílico es RIC = Q₃ − Q₁ = 12 − 6 = 6. Mide la amplitud del 50 % central de los datos y, a diferencia del rango total, no se ve afectado por los valores extremos.",
      pasos: []
    },

    // ── Representación gráfica ──────────────────────────────────────────────────
    {
      id: 12,
      tipo: "regla_rica",
      etiqueta: "Bloque 5 · Gráficas",
      titulo: "Representación gráfica de información",
      bloques: [
        {
          tipo: "texto",
          texto: "Cada tipo de gráfica conviene a un tipo de dato. La gráfica de barras compara categorías o datos discretos con barras separadas. El histograma representa datos continuos agrupados en intervalos, con barras juntas (el área importa). El polígono de frecuencias une los puntos medios de las barras. La gráfica circular (de pastel) muestra la proporción de cada parte respecto al total: cada sector mide fᵣ × 360°. Para interpretar: identifica qué representa cada eje, compara magnitudes y recuerda que la barra o sector mayor corresponde a la moda."
        },
        {
          tipo: "tabla",
          titulo: "¿Qué gráfica usar?",
          columnas: ["Gráfica", "Para qué datos", "Clave"],
          filas: [
            { tiempo: "Barras",     correcto: "Categóricos o discretos", error: "Barras separadas" },
            { tiempo: "Histograma", correcto: "Continuos agrupados",      error: "Barras juntas (intervalos)" },
            { tiempo: "Circular",   correcto: "Proporción del total",     error: "Sector = fᵣ × 360°" },
            { tiempo: "Polígono",   correcto: "Tendencia / evolución",    error: "Une puntos medios" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "en la circular cada sector es proporcional a su frecuencia",
          correcto: "Un grupo con fᵣ = 0.25 ocupa un sector de 0.25 × 360° = 90° (un cuarto del círculo)",
          incorrecto: "Asignar 25° al 25 % → el total del círculo es 360°, no 100°"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "La gráfica circular muestra PROPORCIONES, no valores absolutos: para comparar cantidades exactas conviene una de barras",
          correcto: "Para «qué porcentaje prefiere cada opción» → circular",
          incorrecto: "Usar la circular para leer cuántas unidades exactas hay de cada categoría"
        }
      ]
    },
    {
      id: 13,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Gráfica circular",
      pregunta: "En una gráfica circular, una categoría ocupa un sector de 144°. ¿Qué porcentaje del total representa?",
      opciones: ["40 %", "36 %", "44 %"],
      correcta: 0,
      explicacion: "El círculo completo es 360°. La proporción es 144 / 360 = 0.40, es decir 40 %. (Equivale a despejar fᵣ de la relación sector = fᵣ × 360°.)",
      pasos: []
    },

    // ── Cierre ────────────────────────────────────────────────────────────────
    {
      id: 14,
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Lo esencial de estadística descriptiva",
      puntos: [
        { math: "f_r = \\dfrac{f}{n},\\quad \\textstyle\\sum f_r = 1", texto: "frecuencia relativa; la acumulada F suma hasta el dato" },
        { math: "\\bar{x} = \\dfrac{\\sum x}{n}", texto: "media (sensible a extremos); mediana = valor central ordenado" },
        { math: "\\bar{x}_p = \\dfrac{\\sum (x\\cdot w)}{\\sum w}", texto: "media ponderada cuando cada dato pesa distinto" },
        { math: "\\sigma = \\sqrt{\\dfrac{\\sum (x-\\bar{x})^2}{n}}", texto: "desviación estándar = raíz de la varianza" },
        { math: "Q_2 = D_5 = P_{50} = \\text{mediana}", texto: "posición: Q₁=P₂₅, Q₃=P₇₅; RIC = Q₃ − Q₁" },
        { titulo: "Gráficas", texto: "barras (discretos), histograma (continuos), circular: sector = fᵣ × 360°" }
      ]
    }

  ]
};
