// Presentación: Cuantificación en las reacciones químicas (estequiometría)
// EXANI-II · Módulo Ciencias Experimentales · Química

export const PRESENTACION = {
  id: "estequiometria",
  titulo: "Estequiometría",
  materia: "Química",
  subtema: "Ciencias Experimentales",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Estequiometría",
      subtitulo: "El mol, masa molar, relaciones en ecuaciones balanceadas, reactivo limitante y rendimiento",
      etiqueta: "EXANI-II · Ciencias Experimentales"
    },

    // ── El mol y la masa molar ─────────────────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Bloque 1 · El mol",
      titulo: "El mol, Avogadro y la masa molar",
      bloques: [
        {
          tipo: "texto",
          texto: "El mol es la unidad que cuenta partículas: 1 mol contiene 6.022×10²³ partículas (número de Avogadro). La masa molar es la masa de un mol de una sustancia, en gramos por mol (g/mol), y se obtiene sumando las masas atómicas de la fórmula. Por ejemplo, el agua H₂O pesa 2(1) + 16 = 18 g/mol. Con la masa molar se convierte entre masa y moles: moles = masa / masa molar."
        },
        {
          tipo: "tabla",
          titulo: "Conversiones fundamentales",
          columnas: ["De → a", "Operación", "Ejemplo"],
          filas: [
            { tiempo: "masa → mol", correcto: "÷ masa molar",         error: "36 g H₂O ÷ 18 = 2 mol" },
            { tiempo: "mol → masa", correcto: "× masa molar",         error: "3 mol H₂O × 18 = 54 g" },
            { tiempo: "mol → partículas", correcto: "× 6.022×10²³",   error: "2 mol → 1.2×10²⁴ moléculas" },
            { tiempo: "masa molar", correcto: "suma de masas atómicas", error: "CO₂ = 12 + 2(16) = 44 g/mol" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el mol es un puente entre la masa y el número de partículas",
          correcto: "44 g de CO₂ = 1 mol = 6.022×10²³ moléculas",
          incorrecto: "Confundir masa molar con número de Avogadro: una se mide en g/mol, el otro cuenta partículas"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "La masa molar se calcula con los subíndices de la fórmula: en H₂O el hidrógeno cuenta dos veces",
          correcto: "H₂O = 2(1) + 16 = 18 g/mol",
          incorrecto: "H₂O = 1 + 16 = 17 g/mol → olvida el subíndice 2 del hidrógeno"
        }
      ]
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Masa molar",
      pregunta: "¿Cuál es la masa molar del ácido sulfúrico H₂SO₄? (H=1, S=32, O=16)",
      opciones: ["98 g/mol", "49 g/mol", "64 g/mol"],
      correcta: 0,
      explicacion: "Se suman: H 2(1) = 2; S 32; O 4(16) = 64. Total = 2 + 32 + 64 = 98 g/mol.",
      pasos: []
    },
    {
      id: 3,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Masa a moles",
      pregunta: "¿Cuántos moles hay en 88 g de CO₂? (masa molar = 44 g/mol)",
      opciones: ["2 mol", "4 mol", "0.5 mol"],
      correcta: 0,
      explicacion: "moles = masa / masa molar = 88 / 44 = 2 mol. En 2 mol hay 2 × 6.022×10²³ = 1.2×10²⁴ moléculas de CO₂.",
      pasos: []
    },

    // ── Relaciones estequiométricas ────────────────────────────────────────────
    {
      id: 4,
      tipo: "regla_rica",
      etiqueta: "Bloque 2 · Relaciones mol a mol",
      titulo: "Relaciones en la ecuación balanceada",
      bloques: [
        {
          tipo: "texto",
          texto: "Los coeficientes de una ecuación balanceada indican la proporción en moles entre reactivos y productos. Esa proporción es la base de todo cálculo estequiométrico: funciona como un factor de conversión entre las sustancias. Por ejemplo, en N₂ + 3H₂ → 2NH₃, un mol de N₂ reacciona con 3 de H₂ y produce 2 de NH₃. Para resolver un problema se pasa de gramos a moles, se usa la proporción de coeficientes y, si se pide, se regresa a gramos."
        },
        {
          tipo: "tabla",
          titulo: "Lectura de N₂ + 3H₂ → 2NH₃",
          columnas: ["Relación", "Proporción", "Ejemplo"],
          filas: [
            { tiempo: "N₂ : H₂",  correcto: "1 : 3", error: "2 mol N₂ requieren 6 mol H₂" },
            { tiempo: "N₂ : NH₃", correcto: "1 : 2", error: "2 mol N₂ producen 4 mol NH₃" },
            { tiempo: "H₂ : NH₃", correcto: "3 : 2", error: "6 mol H₂ producen 4 mol NH₃" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "los coeficientes son la proporción en moles, no en gramos",
          correcto: "En 2H₂ + O₂ → 2H₂O: 2 mol H₂ por 1 mol O₂ (relación 2:1 en moles)",
          incorrecto: "Interpretar «2:1» como gramos → la relación de coeficientes es de moles"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "Antes de usar la proporción de coeficientes, la ecuación DEBE estar balanceada",
          correcto: "Balancear primero; luego aplicar la relación molar",
          incorrecto: "Tomar coeficientes de una ecuación sin balancear → proporciones equivocadas"
        }
      ]
    },
    {
      id: 5,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Relación molar",
      pregunta: "En la reacción 2H₂ + O₂ → 2H₂O, ¿cuántos moles de agua se producen a partir de 5 mol de O₂ (con H₂ suficiente)?",
      opciones: ["10 mol", "5 mol", "2.5 mol"],
      correcta: 0,
      explicacion: "La relación O₂ : H₂O es 1 : 2. Por cada mol de O₂ se forman 2 de agua, así que 5 mol de O₂ producen 5 × 2 = 10 mol de H₂O.",
      pasos: []
    },

    // ── Reactivo limitante ─────────────────────────────────────────────────────
    {
      id: 6,
      tipo: "regla_rica",
      etiqueta: "Bloque 3 · Reactivo limitante",
      titulo: "Reactivo limitante y en exceso",
      bloques: [
        {
          tipo: "texto",
          texto: "Cuando se mezclan cantidades dadas de dos reactivos, normalmente uno se agota antes que el otro: ese es el reactivo limitante, y es el que determina cuánto producto se forma. El otro queda en exceso (sobra). Para identificarlo se calcula cuánto producto daría cada reactivo según la proporción de coeficientes; el que rinde MENOS producto es el limitante. El cálculo de la cantidad de producto se hace siempre a partir del reactivo limitante."
        },
        {
          tipo: "tabla",
          titulo: "Cómo hallar el limitante",
          columnas: ["Paso", "Acción", "Criterio"],
          filas: [
            { tiempo: "1. A moles",  correcto: "Pasar cada reactivo a moles", error: "÷ masa molar" },
            { tiempo: "2. Producto", correcto: "Calcular producto de cada uno", error: "Usar la proporción de coeficientes" },
            { tiempo: "3. Comparar", correcto: "El que da MENOS producto", error: "Ese es el limitante" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el limitante rinde menos producto y se agota primero",
          correcto: "Si 2 mol H₂ rinden 2 mol H₂O y 3 mol O₂ rendirían 6, el H₂ es limitante (da menos)",
          incorrecto: "Suponer que el reactivo con menos masa es el limitante → hay que comparar en moles de producto, no en gramos"
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "El producto se calcula a partir del reactivo limitante; el reactivo en exceso solo sobra",
          correcto: "Calcular el rendimiento usando el limitante",
          incorrecto: "Calcular el producto con el reactivo en exceso → sobreestima la cantidad formada"
        }
      ]
    },
    {
      id: 7,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Reactivo limitante",
      pregunta: "Para N₂ + 3H₂ → 2NH₃ se tienen 2 mol de N₂ y 3 mol de H₂. ¿Cuál es el reactivo limitante?",
      opciones: [
        "El H₂ (hidrógeno)",
        "El N₂ (nitrógeno)",
        "Ninguno, están en proporción exacta"
      ],
      correcta: 0,
      explicacion: "La proporción es 1 N₂ : 3 H₂. Para 2 mol de N₂ harían falta 6 mol de H₂, pero solo hay 3: el H₂ se agota primero, así que es el limitante (el N₂ queda en exceso).",
      pasos: []
    },

    // ── Rendimiento ────────────────────────────────────────────────────────────
    {
      id: 8,
      tipo: "regla_rica",
      etiqueta: "Bloque 4 · Rendimiento",
      titulo: "Rendimiento teórico, real y porcentual",
      bloques: [
        {
          tipo: "texto",
          texto: "El rendimiento teórico es la cantidad máxima de producto que predice la estequiometría (suponiendo que todo el limitante reacciona). El rendimiento real es lo que se obtiene en la práctica, casi siempre menor por pérdidas o reacciones incompletas. El rendimiento porcentual mide la eficiencia: (rendimiento real / rendimiento teórico) × 100. Un rendimiento del 100 % es ideal; en la realidad suele ser menor."
        },
        {
          tipo: "tabla",
          titulo: "Tipos de rendimiento",
          columnas: ["Tipo", "Significado", "Cálculo"],
          filas: [
            { tiempo: "Teórico", correcto: "Máximo predicho", error: "A partir del reactivo limitante" },
            { tiempo: "Real",    correcto: "Lo realmente obtenido", error: "Medido en el laboratorio" },
            { tiempo: "Porcentual", correcto: "Eficiencia", error: "(real / teórico) × 100" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el rendimiento porcentual compara lo real con lo teórico",
          correcto: "Real 40 g y teórico 50 g → (40/50)×100 = 80 %",
          incorrecto: "Calcular (teórico/real)×100 → invierte la razón y da más de 100 %"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "El rendimiento real nunca supera al teórico; un porcentaje mayor a 100 % indica un error de cálculo o impurezas",
          correcto: "Rendimiento porcentual ≤ 100 %",
          incorrecto: "Aceptar un rendimiento de 120 % como válido"
        }
      ]
    },
    {
      id: 9,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Rendimiento porcentual",
      pregunta: "Una reacción tiene un rendimiento teórico de 25 g, pero se obtienen 20 g. ¿Cuál es el rendimiento porcentual?",
      opciones: ["80 %", "125 %", "5 %"],
      correcta: 0,
      explicacion: "Rendimiento porcentual = (real / teórico) × 100 = (20 / 25) × 100 = 80 %. La opción 125 % invierte la razón y 5 % confunde la diferencia con el porcentaje.",
      pasos: []
    },

    // ── Cierre ────────────────────────────────────────────────────────────────
    {
      id: 10,
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Lo esencial de la estequiometría",
      puntos: [
        { titulo: "El mol", texto: "1 mol = 6.022×10²³ partículas; masa molar en g/mol" },
        { math: "\\text{moles} = \\dfrac{\\text{masa}}{\\text{masa molar}}", texto: "puente entre masa y moles" },
        { titulo: "Relación molar", texto: "los coeficientes dan la proporción en moles (ecuación balanceada)" },
        { titulo: "Reactivo limitante", texto: "el que rinde menos producto; determina lo que se forma" },
        { math: "\\%\\,\\text{rend.}=\\dfrac{\\text{real}}{\\text{teórico}}\\times 100", texto: "rendimiento porcentual (≤ 100 %)" }
      ]
    }

  ]
};
