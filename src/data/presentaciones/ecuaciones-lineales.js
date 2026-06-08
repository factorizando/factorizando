// Presentación: Ecuaciones lineales, función lineal, variación tabular e inecuaciones
// Pensamiento Matemático · Matematización / Comprensión de lo matemático · EXANI-II

export const PRESENTACION = {
  id: "ecuaciones-lineales",
  titulo: "Ecuaciones e Inecuaciones Lineales",
  materia: "Pensamiento Matemático",
  subtema: "Matematización",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Ecuaciones e Inecuaciones Lineales",
      subtitulo: "Resolver ecuaciones de primer grado, la recta y = mx + b, variación lineal tabular e inecuaciones",
      etiqueta: "Pensamiento Matemático · EXANI-II"
    },

    // ── Ecuación de primer grado ───────────────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Bloque 1 · Ecuaciones",
      titulo: "Ecuación lineal de primer grado",
      bloques: [
        {
          tipo: "texto",
          texto: "Una ecuación lineal de primer grado tiene la forma ax + b = 0, con la incógnita elevada a la potencia 1. Resolverla es despejar x usando operaciones inversas que mantienen la igualdad: lo que se hace de un lado se hace del otro. Estrategia general: (1) quitar paréntesis y denominadores, (2) agrupar las x de un lado y los números del otro, (3) reducir y despejar dividiendo entre el coeficiente de x."
        },
        {
          tipo: "tabla",
          titulo: "Pasos para despejar",
          columnas: ["Paso", "Acción", "Ejemplo"],
          filas: [
            { tiempo: "1. Desarrollar", correcto: "Quitar paréntesis/denominadores", error: "2(x−3) = 8 → 2x − 6 = 8" },
            { tiempo: "2. Agrupar",     correcto: "x a un lado, números al otro",    error: "2x = 8 + 6" },
            { tiempo: "3. Reducir",     correcto: "Sumar términos semejantes",       error: "2x = 14" },
            { tiempo: "4. Despejar",    correcto: "Dividir entre el coeficiente",    error: "x = 14/2 = 7" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "lo que pasa al otro lado cambia de operación (inversa)",
          correcto: "x − 5 = 9 → x = 9 + 5 = 14 (el −5 pasa sumando)",
          incorrecto: "x − 5 = 9 → x = 9 − 5 = 4 → error: el término pasa con la operación INVERSA"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Verifica siempre sustituyendo: la solución correcta cumple la igualdad original",
          correcto: "x = 7 en 2(x−3) = 8: 2(7−3) = 2·4 = 8 ✓",
          incorrecto: "Dar x sin comprobar y aceptar un valor que no cumple la ecuación"
        }
      ]
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Ecuación lineal",
      pregunta: "Resuelve: 5x − 8 = 2x + 7",
      opciones: ["x = 5", "x = 3", "x = 15"],
      correcta: 0,
      explicacion: "Se agrupan las x de un lado: 5x − 2x = 7 + 8 → 3x = 15 → x = 5. Comprobación: 5(5) − 8 = 17 y 2(5) + 7 = 17 ✓.",
      pasos: []
    },
    {
      id: 3,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Con paréntesis",
      pregunta: "Resuelve: 3(x + 2) = 2(x − 1) + 10",
      opciones: ["x = 2", "x = 6", "x = −2"],
      correcta: 0,
      explicacion: "Se desarrollan los paréntesis: 3x + 6 = 2x − 2 + 10 → 3x + 6 = 2x + 8. Agrupando: 3x − 2x = 8 − 6 → x = 2.",
      pasos: []
    },

    // ── Función lineal y = mx + b ──────────────────────────────────────────────
    {
      id: 4,
      tipo: "regla_rica",
      etiqueta: "Bloque 2 · La recta",
      titulo: "Función lineal: y = mx + b",
      bloques: [
        {
          tipo: "texto",
          texto: "La función lineal y = mx + b se representa con una recta. La pendiente m mide la inclinación: cuánto cambia y por cada unidad que aumenta x (m = Δy/Δx). La ordenada al origen b es el punto donde la recta corta el eje y (cuando x = 0). Si m > 0 la recta sube; si m < 0 baja; si m = 0 es horizontal. El corte con el eje x (raíz) se halla resolviendo mx + b = 0."
        },
        {
          tipo: "tabla",
          titulo: "Lectura de la recta y = mx + b",
          columnas: ["Elemento", "Significado", "Cómo se obtiene"],
          filas: [
            { tiempo: "Pendiente m", correcto: "Inclinación (Δy/Δx)",     error: "Entre dos puntos: (y₂−y₁)/(x₂−x₁)" },
            { tiempo: "Ordenada b",  correcto: "Corte con el eje y",      error: "Valor de y cuando x = 0" },
            { tiempo: "Raíz",        correcto: "Corte con el eje x",      error: "Resolver mx + b = 0" },
            { tiempo: "Signo de m",  correcto: "Sube (+), baja (−), plana (0)", error: "m = 2 sube; m = −3 baja" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "pendiente entre dos puntos",
          correcto: "Por (1, 3) y (4, 9): m = (9 − 3)/(4 − 1) = 6/3 = 2",
          incorrecto: "Calcular (x₂−x₁)/(y₂−y₁) → invierte la fórmula de la pendiente"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "La pendiente es el cambio de y entre el cambio de x, no al revés: m = Δy/Δx",
          correcto: "Si y sube 6 cuando x sube 3, m = 6/3 = 2",
          incorrecto: "m = 3/6 = 0.5 → confunde el orden (Δx/Δy)"
        }
      ]
    },
    {
      id: 5,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Pendiente y ordenada",
      pregunta: "En la recta y = −2x + 5, ¿qué afirmación es correcta?",
      opciones: [
        "Sube de izquierda a derecha y corta el eje y en −2",
        "Baja de izquierda a derecha y corta el eje y en 5",
        "Es horizontal y corta el eje y en 5"
      ],
      correcta: 1,
      explicacion: "La pendiente m = −2 es negativa, así que la recta baja de izquierda a derecha. La ordenada al origen b = 5 indica que corta el eje y en (0, 5). No es horizontal (m ≠ 0).",
      pasos: []
    },
    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Pendiente entre puntos",
      pregunta: "¿Cuál es la pendiente de la recta que pasa por (2, 1) y (6, 9)?",
      opciones: ["m = 2", "m = 1/2", "m = 4"],
      correcta: 0,
      explicacion: "m = (y₂ − y₁)/(x₂ − x₁) = (9 − 1)/(6 − 2) = 8/4 = 2. La recta sube 2 unidades en y por cada unidad en x.",
      pasos: []
    },

    // ── Variación lineal tabular ───────────────────────────────────────────────
    {
      id: 7,
      tipo: "regla_rica",
      etiqueta: "Bloque 3 · Variación lineal",
      titulo: "Variación lineal tabular",
      bloques: [
        {
          tipo: "texto",
          texto: "Una tabla de valores representa una variación lineal cuando el ritmo de cambio es constante: por cada aumento fijo de x, y cambia siempre la misma cantidad. Esa cantidad constante es la pendiente m. Para reconocerla, se calculan las diferencias sucesivas de y (cuando x crece de uno en uno): si todas son iguales, la relación es lineal. La ordenada b se obtiene retrocediendo la tabla hasta x = 0."
        },
        {
          tipo: "tabla",
          titulo: "Ejemplo: ¿es lineal?",
          columnas: ["x", "y", "Diferencia de y"],
          filas: [
            { tiempo: "1", correcto: "5",  error: "—" },
            { tiempo: "2", correcto: "8",  error: "+3" },
            { tiempo: "3", correcto: "11", error: "+3" },
            { tiempo: "4", correcto: "14", error: "+3 → constante: m = 3" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "diferencia constante → lineal; modelo y = mx + b",
          correcto: "m = 3 (diferencia constante); en x=1, y=5 → b = 5 − 3·1 = 2 → y = 3x + 2",
          incorrecto: "Suponer lineal sin verificar que TODAS las diferencias sean iguales"
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "Si las diferencias de y NO son constantes, la variación no es lineal (podría ser cuadrática u otra)",
          correcto: "y: 1, 4, 9, 16 → diferencias 3, 5, 7 (no constantes) → NO es lineal",
          incorrecto: "Llamar lineal a una tabla cuyas diferencias cambian"
        }
      ]
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Variación tabular",
      pregunta: "Una tabla cumple: x=0→y=4, x=1→y=7, x=2→y=10, x=3→y=13. ¿Qué modelo lineal la describe?",
      opciones: ["y = 4x + 3", "y = 3x + 4", "y = 3x"],
      correcta: 1,
      explicacion: "La diferencia constante de y es +3 por cada unidad de x, así que m = 3. Cuando x = 0, y = 4, de modo que b = 4. El modelo es y = 3x + 4. (Comprobación: en x=2, 3·2+4 = 10 ✓.)",
      pasos: []
    },

    // ── Inecuaciones lineales ──────────────────────────────────────────────────
    {
      id: 9,
      tipo: "regla_rica",
      etiqueta: "Bloque 4 · Inecuaciones",
      titulo: "Inecuaciones lineales",
      bloques: [
        {
          tipo: "texto",
          texto: "Una inecuación lineal compara con <, >, ≤ o ≥ en lugar de igualar. Se resuelve casi como una ecuación: se despeja la incógnita con operaciones inversas. La diferencia crucial: si se multiplica o divide ambos lados por un número negativo, el sentido de la desigualdad se invierte (< pasa a >, ≤ pasa a ≥). La solución no es un único valor, sino un intervalo de valores."
        },
        {
          tipo: "tabla",
          titulo: "Reglas de las inecuaciones",
          columnas: ["Operación", "Efecto en la desigualdad", "Ejemplo"],
          filas: [
            { tiempo: "Sumar/restar",        correcto: "No cambia el sentido",      error: "x + 2 < 5 → x < 3" },
            { tiempo: "× o ÷ por positivo",  correcto: "No cambia el sentido",      error: "2x < 8 → x < 4" },
            { tiempo: "× o ÷ por negativo",  correcto: "INVIERTE el sentido",       error: "−x < 3 → x > −3" },
            { tiempo: "Solución",            correcto: "Un intervalo de valores",   error: "x < 4 = (−∞, 4)" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "dividir entre negativo invierte el signo de la desigualdad",
          correcto: "−3x ≤ 12 → x ≥ −4 (al dividir entre −3, ≤ pasa a ≥)",
          incorrecto: "−3x ≤ 12 → x ≤ −4 → error: olvidó invertir el sentido al dividir entre negativo"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Solo se invierte el signo al multiplicar o dividir por negativo, NO al sumar o restar números negativos",
          correcto: "x − 5 > 2 → x > 7 (restar/sumar no invierte)",
          incorrecto: "Invertir el signo solo porque aparece un número negativo en la inecuación"
        }
      ]
    },
    {
      id: 10,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Inecuación",
      pregunta: "Resuelve: 4x − 3 < 13",
      opciones: ["x < 4", "x > 4", "x < 10"],
      correcta: 0,
      explicacion: "4x − 3 < 13 → 4x < 16 → x < 4. Como se dividió entre +4 (positivo), el sentido no cambia. La solución es el intervalo (−∞, 4).",
      pasos: []
    },
    {
      id: 11,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Cambio de sentido",
      pregunta: "Resuelve: 7 − 2x ≥ 1",
      opciones: ["x ≥ 3", "x ≤ 3", "x ≤ −3"],
      correcta: 1,
      explicacion: "7 − 2x ≥ 1 → −2x ≥ −6. Al dividir entre −2 (negativo) se invierte el sentido: x ≤ 3. El error típico es dejar x ≥ 3 sin invertir la desigualdad.",
      pasos: []
    },

    // ── Cierre ────────────────────────────────────────────────────────────────
    {
      id: 12,
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Lo esencial de lo lineal",
      puntos: [
        { titulo: "Ecuación de 1.º grado", texto: "despejar con operaciones inversas; comprobar al final" },
        { math: "y = mx + b", texto: "m = pendiente (Δy/Δx); b = ordenada al origen" },
        { math: "m=\\dfrac{y_2-y_1}{x_2-x_1}", texto: "pendiente entre dos puntos" },
        { titulo: "Variación lineal tabular", texto: "diferencias de y constantes → lineal; esa diferencia es m" },
        { titulo: "Inecuaciones", texto: "como ecuaciones, pero × o ÷ por negativo INVIERTE el signo" },
        { titulo: "Solución de inecuación", texto: "un intervalo de valores, no un único número" }
      ]
    }

  ]
};
