// Presentación: Razones, proporciones, porcentaje y unidades de medida
// Pensamiento Matemático · Comprensión de lo matemático · EXANI-II

export const PRESENTACION = {
  id: "razones-proporciones",
  titulo: "Razones, Proporciones y Porcentaje",
  materia: "Pensamiento Matemático",
  subtema: "Comprensión de lo matemático",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Razones, Proporciones y Porcentaje",
      subtitulo: "Comparar cantidades: razón, proporción, regla de tres, porcentaje y conversión de unidades",
      etiqueta: "Pensamiento Matemático · EXANI-II"
    },

    // ── Razón y proporción ─────────────────────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Concepto 1 · Comparación",
      titulo: "Razón y proporción",
      bloques: [
        {
          tipo: "texto",
          texto: "Una razón es la comparación de dos cantidades por cociente: a/b (se lee «a es a b»). Una proporción es la igualdad de dos razones: a/b = c/d. La propiedad fundamental de las proporciones es el producto cruzado: si a/b = c/d, entonces a·d = b·c. Esta igualdad permite encontrar un término desconocido en cualquier proporción y es la base de casi todos los problemas de comparación del EXANI-II."
        },
        {
          tipo: "tabla",
          titulo: "Razón vs. proporción",
          columnas: ["Concepto", "Forma", "Ejemplo"],
          filas: [
            { tiempo: "Razón",            correcto: "a/b  («a es a b»)",       error: "3/4 compara 3 con 4" },
            { tiempo: "Proporción",       correcto: "a/b = c/d",               error: "3/4 = 6/8 (razones iguales)" },
            { tiempo: "Producto cruzado", correcto: "a·d = b·c",               error: "3·8 = 4·6 → 24 = 24 ✓" },
            { tiempo: "Término faltante", correcto: "x = (b·c) / a",           error: "Despejar la incógnita de la proporción" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el producto cruzado verifica o resuelve la proporción",
          correcto: "x/12 = 5/4  →  4·x = 12·5  →  x = 60/4 = 15",
          incorrecto: "Multiplicar «en línea» (x·5 = 12·4) → error: el producto debe ser cruzado, no directo"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "El orden de los términos importa: «3 a 4» (3/4) no es lo mismo que «4 a 3» (4/3)",
          correcto: "Si por cada 3 niñas hay 4 niños, la razón niñas:niños es 3/4",
          incorrecto: "Escribir 4/3 para «3 niñas por cada 4 niños» → invierte la comparación"
        }
      ]
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Proporción",
      pregunta: "En la proporción x/15 = 8/5, ¿cuál es el valor de x?",
      opciones: ["x = 18", "x = 24", "x = 12"],
      correcta: 1,
      explicacion: "Por producto cruzado: 5·x = 15·8 = 120, entonces x = 120/5 = 24. Verificación: 24/15 = 1.6 y 8/5 = 1.6 ✓.",
      pasos: []
    },
    {
      id: 3,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Razón",
      pregunta: "En un grupo hay 18 mujeres y 12 hombres. ¿Cuál es la razón de hombres a mujeres en su forma más simple?",
      opciones: ["3/2", "2/3", "12/18"],
      correcta: 1,
      explicacion: "La razón hombres:mujeres es 12/18. Dividiendo ambos términos entre 6: 12/18 = 2/3. El orden pedido es «hombres a mujeres», así que el numerador es 12 (hombres). La opción 3/2 invierte la comparación.",
      pasos: []
    },

    // ── Proporcionalidad directa e inversa ─────────────────────────────────────
    {
      id: 4,
      tipo: "regla_rica",
      etiqueta: "Concepto 2 · Tipos de variación",
      titulo: "Proporcionalidad directa e inversa",
      bloques: [
        {
          tipo: "texto",
          texto: "Dos magnitudes son directamente proporcionales si al aumentar una, la otra aumenta en la misma razón: su cociente es constante (y/x = k). Son inversamente proporcionales si al aumentar una, la otra disminuye en la misma razón: su producto es constante (x·y = k). Identificar el tipo de proporcionalidad es el primer paso: determina si se usa regla de tres directa o inversa."
        },
        {
          tipo: "tabla",
          titulo: "Directa vs. inversa",
          columnas: ["Tipo", "Regla", "Ejemplo típico"],
          filas: [
            { tiempo: "Directa",  correcto: "y/x = k  (a más, más)",   error: "Más kilos → más precio total" },
            { tiempo: "Inversa",  correcto: "x·y = k  (a más, menos)", error: "Más obreros → menos días de obra" },
            { tiempo: "Constante k", correcto: "El valor que no cambia", error: "Velocidad, precio unitario, trabajo total" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "reconocer el tipo antes de calcular",
          correcto: "Directa: 2 L cuestan $30; 6 L cuestan $90 (el triple de litros, el triple de precio)",
          incorrecto: "Tratar como directa un caso inverso: «más bombas → más tiempo en vaciar el tanque» (es inversa: más bombas, menos tiempo)"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "Pista para distinguirlas: si ambas suben juntas es directa; si una sube cuando la otra baja es inversa",
          correcto: "Velocidad y tiempo para una distancia fija → inversa (más rápido, menos tiempo)",
          incorrecto: "Suponer que siempre «más es más»: no toda relación es directa"
        }
      ]
    },
    {
      id: 5,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Tipo de proporcionalidad",
      pregunta: "Si 5 máquinas iguales llenan un pedido en 12 horas, ¿qué tipo de relación hay entre el número de máquinas y las horas necesarias?",
      opciones: [
        "Directa: más máquinas, más horas",
        "Inversa: más máquinas, menos horas",
        "No hay proporcionalidad"
      ],
      correcta: 1,
      explicacion: "A mayor número de máquinas, menos tiempo se necesita para el mismo trabajo: es proporcionalidad inversa. El producto (máquinas × horas) se mantiene constante: 5 × 12 = 60 «máquinas-hora» de trabajo.",
      pasos: []
    },
    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Directa",
      pregunta: "Si 4 cuadernos cuestan $52, ¿cuánto cuestan 7 cuadernos al mismo precio?",
      opciones: ["$78", "$91", "$84"],
      correcta: 1,
      explicacion: "Es proporcionalidad directa. Precio unitario = 52/4 = $13. Para 7 cuadernos: 13 × 7 = $91. (También por regla de tres: x = 52·7/4 = 364/4 = 91.)",
      pasos: []
    },

    // ── Regla de tres ──────────────────────────────────────────────────────────
    {
      id: 7,
      tipo: "regla_rica",
      etiqueta: "Herramienta · Regla de tres",
      titulo: "Regla de tres directa e inversa",
      bloques: [
        {
          tipo: "texto",
          texto: "La regla de tres encuentra un cuarto valor a partir de tres conocidos. En la regla de tres directa, se multiplica en cruz: x = (b·c)/a. En la regla de tres inversa, se multiplica en línea (porque el producto es constante): x = (a·b)/c. El error más común es aplicar la directa a un problema inverso. Por eso siempre se decide primero el tipo de proporcionalidad."
        },
        {
          tipo: "tabla",
          titulo: "Cómo plantear cada regla de tres",
          columnas: ["Caso", "Planteamiento", "Fórmula"],
          filas: [
            { tiempo: "Directa",  correcto: "a → c ;  b → x", error: "x = (b·c) / a  (producto cruzado)" },
            { tiempo: "Inversa",  correcto: "a → c ;  b → x", error: "x = (a·c) / b  (producto en línea)" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "mismo enunciado, distinta fórmula según el tipo",
          correcto: "Inversa: 6 obreros tardan 10 días; 4 obreros → x = (6·10)/4 = 15 días",
          incorrecto: "Aplicar la directa: x = (4·10)/6 ≈ 6.7 días → absurdo (menos obreros no terminan antes)"
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "Verifica con sentido común: en un problema inverso, menos recursos siempre dan un resultado mayor (más tiempo, no menos)",
          correcto: "Menos obreros → más días: el resultado debe crecer",
          incorrecto: "Si tu resultado «inverso» da menos días con menos obreros, está mal planteado"
        }
      ]
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla de tres inversa",
      pregunta: "Un depósito se vacía con 3 bombas en 8 horas. ¿En cuánto tiempo lo vaciarían 4 bombas iguales?",
      opciones: ["6 horas", "10.7 horas", "5 horas"],
      correcta: 0,
      explicacion: "Más bombas → menos tiempo: proporcionalidad inversa. El producto es constante: 3·8 = 24. Con 4 bombas: x = 24/4 = 6 horas. (Fórmula inversa: x = (3·8)/4 = 6.)",
      pasos: []
    },
    {
      id: 9,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla de tres directa",
      pregunta: "Un auto recorre 240 km con 16 litros de gasolina. ¿Cuántos litros necesita para recorrer 375 km al mismo rendimiento?",
      opciones: ["22 litros", "25 litros", "28 litros"],
      correcta: 1,
      explicacion: "Es directa (más kilómetros, más litros). x = (16·375)/240 = 6000/240 = 25 litros. (También: rendimiento = 240/16 = 15 km/L; 375/15 = 25 L.)",
      pasos: []
    },

    // ── Porcentaje ─────────────────────────────────────────────────────────────
    {
      id: 10,
      tipo: "regla_rica",
      etiqueta: "Concepto 3 · Porcentaje",
      titulo: "Porcentaje: parte por cada cien",
      bloques: [
        {
          tipo: "texto",
          texto: "Un porcentaje p% es una razón con denominador 100: p% = p/100. Calcular el p% de una cantidad N es multiplicar: (p/100)·N. Para un aumento del p%, se multiplica por (1 + p/100); para un descuento del p%, por (1 − p/100). El cálculo inverso (hallar el total a partir de la parte) se hace dividiendo: si 116 incluye un 16% de IVA, el precio sin IVA es 116 ÷ 1.16."
        },
        {
          tipo: "tabla",
          titulo: "Operaciones con porcentaje",
          columnas: ["Operación", "Fórmula", "Ejemplo"],
          filas: [
            { tiempo: "p% de N",        correcto: "(p/100) · N",        error: "15% de 80 = 0.15·80 = 12" },
            { tiempo: "Aumento de p%",  correcto: "N · (1 + p/100)",    error: "50 +20% = 50·1.20 = 60" },
            { tiempo: "Descuento de p%",correcto: "N · (1 − p/100)",    error: "200 −30% = 200·0.70 = 140" },
            { tiempo: "Inverso (total)",correcto: "Parte ÷ (1 ± p/100)", error: "116 con IVA 16% → 116/1.16 = 100" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "descuento sucesivo ≠ suma de descuentos",
          correcto: "−10% y luego −20% sobre 100: 100·0.9·0.8 = 72 (descuento real del 28%)",
          incorrecto: "Sumar 10%+20% = 30% → 70: error, los descuentos sucesivos se multiplican, no se suman"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Para «deshacer» un porcentaje se divide, no se resta el mismo porcentaje: quitar el 16% de IVA es ÷1.16, no −16%",
          correcto: "Precio con IVA $116 → sin IVA: 116/1.16 = $100",
          incorrecto: "Restar 16% a 116: 116·0.84 = 97.44 → resultado incorrecto"
        }
      ]
    },
    {
      id: 11,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Porcentaje",
      pregunta: "Una camisa de $480 tiene un descuento del 25%. ¿Cuál es su precio final?",
      opciones: ["$360", "$455", "$120"],
      correcta: 0,
      explicacion: "Descuento del 25%: se paga el 75% del precio. 480 × 0.75 = $360. (El descuento es 480 × 0.25 = $120, que es la rebaja, no el precio final.)",
      pasos: []
    },
    {
      id: 12,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Porcentaje inverso",
      pregunta: "Tras un aumento del 20%, un producto cuesta $300. ¿Cuál era su precio antes del aumento?",
      opciones: ["$240", "$250", "$280"],
      correcta: 1,
      explicacion: "El precio actual es el 120% del original: 300 = N·1.20. Entonces N = 300/1.20 = $250. (Restar 20% a 300 daría 240, que es incorrecto: el 20% se calculaba sobre el precio original, no sobre el final.)",
      pasos: []
    },

    // ── Unidades de medida ─────────────────────────────────────────────────────
    {
      id: 13,
      tipo: "regla_rica",
      etiqueta: "Concepto 4 · Unidades",
      titulo: "Unidades de medida como patrón de comparación",
      bloques: [
        {
          tipo: "texto",
          texto: "Medir es comparar una cantidad con una unidad patrón. Para convertir entre unidades se usan factores de conversión (razones que valen 1, como 1000 m / 1 km). Se multiplica cancelando las unidades que no se quieren, hasta dejar la unidad deseada. En el Sistema Internacional, las unidades de longitud, masa y capacidad cambian de 10 en 10 (km, hm, dam, m, dm, cm, mm), mientras que el tiempo cambia de 60 en 60 (h, min, s)."
        },
        {
          tipo: "tabla",
          titulo: "Equivalencias y factores frecuentes",
          columnas: ["Magnitud", "Equivalencia", "Conversión ejemplo"],
          filas: [
            { tiempo: "Longitud", correcto: "1 km = 1000 m ; 1 m = 100 cm", error: "2.5 km = 2500 m" },
            { tiempo: "Masa",     correcto: "1 kg = 1000 g",                error: "3.2 kg = 3200 g" },
            { tiempo: "Tiempo",   correcto: "1 h = 60 min = 3600 s",        error: "90 min = 1.5 h" },
            { tiempo: "Rapidez",  correcto: "km/h → m/s: ÷ 3.6",            error: "72 km/h = 72/3.6 = 20 m/s" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el factor de conversión vale 1 y cancela unidades",
          correcto: "72 km/h × (1000 m / 1 km) × (1 h / 3600 s) = 20 m/s",
          incorrecto: "Multiplicar por 3.6 al pasar de km/h a m/s → es al revés: de km/h a m/s se divide entre 3.6"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "En áreas y volúmenes el factor se eleva: 1 m = 100 cm, pero 1 m² = 10 000 cm² y 1 m³ = 1 000 000 cm³",
          correcto: "1 m² = (100 cm)² = 10 000 cm²",
          incorrecto: "Suponer 1 m² = 100 cm² → olvida elevar al cuadrado el factor"
        }
      ]
    },
    {
      id: 14,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Conversión de unidades",
      pregunta: "Un ciclista va a 54 km/h. ¿Cuál es su rapidez en metros por segundo?",
      opciones: ["10 m/s", "15 m/s", "18 m/s"],
      correcta: 1,
      explicacion: "Para pasar de km/h a m/s se divide entre 3.6: 54 ÷ 3.6 = 15 m/s. (Equivale a 54 × 1000 m / 3600 s = 54000/3600 = 15.)",
      pasos: []
    },

    // ── Cierre ────────────────────────────────────────────────────────────────
    {
      id: 15,
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Lo esencial de proporciones y porcentaje",
      puntos: [
        { math: "\\dfrac{a}{b} = \\dfrac{c}{d} \\Rightarrow a\\cdot d = b\\cdot c", texto: "proporción: producto cruzado" },
        { titulo: "Directa vs. inversa", texto: "directa: y/x = k ; inversa: x·y = k" },
        { math: "x = \\dfrac{b\\cdot c}{a}", texto: "regla de tres directa (la inversa multiplica en línea)" },
        { math: "p\\% \\text{ de } N = \\dfrac{p}{100}\\cdot N", texto: "porcentaje = parte por cada cien" },
        { titulo: "Aumento / descuento", texto: "× (1 + p/100) ó × (1 − p/100); para deshacerlo, se divide" },
        { titulo: "Conversión de unidades", texto: "factores que valen 1; km/h → m/s se divide entre 3.6" }
      ]
    }

  ]
};
