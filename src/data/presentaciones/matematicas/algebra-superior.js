// Presentación: Álgebra superior
// EXANI-II · Módulo Ingenierías y Ciencias Exactas (EPIU) · Matemáticas avanzadas

export const PRESENTACION = {
  id: "algebra-superior",
  titulo: "Álgebra Superior",
  materia: "Matemáticas avanzadas",
  examenes: ["EXANI-II"],
  subtema: "Ingenierías y Ciencias Exactas",
  slides: [
    {
      id: 0,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "portada",
          kicker: "EXANI-II · Ingenierías y Ciencias Exactas",
          titulo: "Álgebra Superior",
          subtitulo: "Sistemas lineales por diversos métodos, determinantes y regla de Cramer, y teoría de ecuaciones polinomiales",
        },
      ],
    },
    {
      id: 1,
      tipo: "lienzo",
      etiqueta: "Bloque 1 · Sistemas lineales",
      titulo: "Métodos para resolver sistemas lineales",
      bloques: [
        {
          tipo: "destacado",
          texto: "Un sistema de ecuaciones lineales puede resolverse por varios métodos equivalentes. Los algebraicos clásicos son sustitución (despejar una variable y sustituirla), igualación (despejar la misma variable en ambas e igualar) y reducción o eliminación (combinar las ecuaciones para cancelar una incógnita). Para sistemas más grandes se usan métodos matriciales, como la eliminación de Gauss y la regla de Cramer. Todos deben dar el mismo resultado: la diferencia está en la eficiencia según el problema.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Panorama de métodos",
          columnas: ["Método", "Idea central", "Conviene cuando"],
          filas: [
            ["Sustitución", "Despejar y reemplazar", "Una variable ya está casi despejada"],
            ["Reducción", "Cancelar una incógnita", "Los coeficientes se eliminan fácil"],
            ["Gauss", "Triangular la matriz aumentada", "Sistemas 3×3 o más"],
            ["Cramer", "Cocientes de determinantes", "Se busca solo una incógnita"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "reducción: combinar para eliminar una incógnita",
          asi_es: "2x + 3y = 8 ;  x − y = −1 → multiplicar la 2.ª por 3 y sumar: 5x = 5 → x = 1, y = 2",
          asi_no: "Sumar sin igualar coeficientes cuando ninguna incógnita se cancela directamente",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "A",
          titulo: "Sea cual sea el método, una solución no termina hasta hallar todas las incógnitas y verificarlas en cada ecuación",
          asi_es: "x = 1, y = 2 cumple ambas: 2(1)+3(2)=8 ✓ y 1−2=−1 ✓",
          asi_no: "Reportar solo x = 1 sin calcular y ni comprobar",
        },
      ],
    },
    {
      id: 2,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — Reducción",
          enunciado: "Resuelve el sistema:  3x + 2y = 16 ;  x − 2y = 0",
          opciones: ["x = 4, y = 2", "x = 2, y = 5", "x = 6, y = 3"],
          correcta: 0,
          explicacion: "Sumando ambas ecuaciones se elimina y: (3x + 2y) + (x − 2y) = 16 + 0 → 4x = 16 → x = 4. De x − 2y = 0: 4 = 2y → y = 2. Comprobación: 3(4)+2(2)=16 ✓.",
        },
      ],
    },
    {
      id: 3,
      tipo: "lienzo",
      etiqueta: "Bloque 2 · Método de Gauss",
      titulo: "Matriz aumentada y eliminación de Gauss",
      bloques: [
        {
          tipo: "destacado",
          texto: "El método de Gauss representa el sistema como una matriz aumentada (los coeficientes y, separada, la columna de términos independientes). Mediante operaciones elementales por renglón —intercambiar renglones, multiplicar un renglón por una constante no nula, o sumar a un renglón un múltiplo de otro— se lleva la matriz a una forma triangular (escalonada). Desde ahí se despejan las incógnitas «hacia atrás» (sustitución regresiva). Estas operaciones no cambian la solución del sistema.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Operaciones elementales por renglón",
          columnas: ["Operación", "Efecto", "¿Cambia la solución?"],
          filas: [
            ["Intercambiar Rᵢ ↔ Rⱼ", "Reordena ecuaciones", "No"],
            ["k·Rᵢ (k ≠ 0)", "Escala una ecuación", "No"],
            ["Rᵢ + k·Rⱼ", "Elimina una variable", "No"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "triangular para luego despejar hacia atrás",
          asi_es: "Al llegar a una fila «0 0 1 | 3» se lee directamente z = 3, y se sustituye hacia arriba",
          asi_no: "Multiplicar un renglón por 0 → operación no válida (k debe ser distinto de cero)",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "B",
          titulo: "Una fila de ceros igualada a un número distinto de cero (0 0 0 | 5) indica que el sistema NO tiene solución",
          asi_es: "0 = 0 → infinitas soluciones ;  0 = 5 → sistema incompatible (sin solución)",
          asi_no: "Interpretar «0 0 0 | 5» como z = 5 → es una contradicción, no una solución",
        },
      ],
    },
    {
      id: 4,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — Interpretar la matriz",
          enunciado: "Al aplicar Gauss, un sistema 3×3 queda con la fila «0 0 0 | 0». ¿Qué indica?",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "El sistema no tiene solución",
            "El sistema tiene infinitas soluciones (una ecuación era dependiente)",
            "z = 0 es la única solución",
          ],
          correcta: 1,
          explicacion: "La fila «0 0 0 | 0» equivale a 0 = 0, una identidad siempre verdadera: una de las ecuaciones era combinación de las otras. El sistema queda con menos ecuaciones independientes que incógnitas → infinitas soluciones.",
        },
      ],
    },
    {
      id: 5,
      tipo: "lienzo",
      etiqueta: "Bloque 3 · Determinantes",
      titulo: "Determinantes y regla de Cramer",
      bloques: [
        {
          tipo: "destacado",
          texto: "El determinante de una matriz 2×2 [[a, b], [c, d]] es ad − bc. La regla de Cramer resuelve un sistema usando determinantes: cada incógnita es el cociente entre el determinante de la matriz de coeficientes con su columna sustituida por los términos independientes, y el determinante principal D. Así, x = Dx/D, y = Dy/D. Si D ≠ 0 hay solución única; si D = 0 el sistema no tiene solución única (es indeterminado o incompatible).",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Cramer en un sistema 2×2",
          columnas: ["Determinante", "Cálculo", "Resultado del ejemplo"],
          filas: [
            ["D (coeficientes)", "|2 3 ; 1 −1| = 2(−1) − 3(1)", "D = −5"],
            ["Dx", "|8 3 ; −1 −1| = 8(−1) − 3(−1)", "Dx = −5"],
            ["Dy", "|2 8 ; 1 −1| = 2(−1) − 8(1)", "Dy = −10"],
            ["Solución", "x = Dx/D, y = Dy/D", "x = 1, y = 2"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "cada incógnita = su determinante entre el principal",
          asi_es: "x = Dx/D = −5/−5 = 1 ;  y = Dy/D = −10/−5 = 2",
          asi_no: "Calcular el determinante como ad + bc → es ad − bc (resta de la diagonal secundaria)",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "C",
          titulo: "Si el determinante principal D = 0, la regla de Cramer no aplica: el sistema no tiene solución única",
          asi_es: "D ≠ 0 → solución única por Cramer",
          asi_no: "Dividir entre D = 0 → indefinido; hay que analizar si es incompatible o indeterminado",
        },
      ],
    },
    {
      id: 6,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — Determinante",
          enunciado: "¿Cuál es el valor del determinante |  4   2  ;  3   5  | ?",
          opciones: ["14", "26", "−2"],
          correcta: 0,
          explicacion: "Para una matriz 2×2 [[a,b],[c,d]] el determinante es ad − bc: (4)(5) − (2)(3) = 20 − 6 = 14.",
        },
      ],
    },
    {
      id: 7,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 2 — Cramer",
          enunciado: "En el sistema  x + y = 5 ;  2x − y = 4, el determinante principal D vale −3. ¿Cuánto vale x por la regla de Cramer? (Dx = −9)",
          opciones: ["x = 3", "x = 1", "x = −3"],
          correcta: 0,
          explicacion: "x = Dx/D = (−9)/(−3) = 3. (Dx se obtiene sustituyendo la columna de x por los términos independientes: |5 1 ; 4 −1| = 5(−1) − 1(4) = −9.) Comprobación: con x=3, y=2: 3+2=5 ✓.",
        },
      ],
    },
    {
      id: 8,
      tipo: "lienzo",
      etiqueta: "Bloque 4 · Teoría de ecuaciones",
      titulo: "Teorema del residuo y del factor",
      bloques: [
        {
          tipo: "destacado",
          texto: "Al dividir un polinomio P(x) entre (x − c), el teorema del residuo afirma que el residuo es exactamente P(c). De aquí se deriva el teorema del factor: (x − c) es factor de P(x) si y solo si P(c) = 0; es decir, c es una raíz del polinomio. La división sintética es un procedimiento abreviado para dividir entre (x − c) y obtener tanto el cociente como el residuo de forma rápida, usando solo los coeficientes.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Residuo y factor",
          columnas: ["Teorema", "Enunciado", "Uso"],
          filas: [
            ["Del residuo", "Residuo de P(x)÷(x−c) = P(c)", "Evaluar sin dividir del todo"],
            ["Del factor", "(x−c) es factor ⟺ P(c) = 0", "Detectar raíces y factorizar"],
            ["Raíz", "c es raíz si P(c) = 0", "Corte de la gráfica con el eje x"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "evaluar P(c) revela si (x − c) es factor",
          asi_es: "P(x)=x³−2x²−5x+6, P(1)=1−2−5+6=0 → (x−1) es factor (1 es raíz)",
          asi_no: "Suponer que (x−1) es factor sin comprobar que P(1) = 0",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "A",
          titulo: "El factor asociado a la raíz c es (x − c), con signo opuesto: la raíz 3 corresponde al factor (x − 3), y la raíz −2 al factor (x + 2)",
          asi_es: "Raíz x = −2 → factor (x + 2)",
          asi_no: "Raíz x = −2 → factor (x − 2) → error de signo",
        },
      ],
    },
    {
      id: 9,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — Teorema del residuo",
          enunciado: "¿Cuál es el residuo de dividir P(x) = x³ + 2x² − x + 4 entre (x − 2)?",
          opciones: ["18", "0", "10"],
          correcta: 0,
          explicacion: "Por el teorema del residuo, el residuo es P(2): (2)³ + 2(2)² − 2 + 4 = 8 + 8 − 2 + 4 = 18. Como no es cero, (x − 2) no es factor de P(x).",
        },
      ],
    },
    {
      id: 10,
      tipo: "lienzo",
      etiqueta: "Bloque 5 · Raíces racionales",
      titulo: "Teorema de las raíces racionales",
      bloques: [
        {
          tipo: "destacado",
          texto: "El teorema de las raíces racionales acota dónde buscar las raíces de un polinomio con coeficientes enteros. Si una fracción irreducible p/q es raíz, entonces p (numerador) divide al término independiente y q (denominador) divide al coeficiente principal. Esto genera una lista finita de candidatos ± p/q que se prueban (por ejemplo, evaluando con el teorema del residuo) hasta encontrar las raíces verdaderas.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Cómo listar candidatos",
          columnas: ["Elemento", "Regla", "Ejemplo: 2x² − 3x − 2"],
          filas: [
            ["p (numerador)", "Divisores del término indep.", "Indep. = −2 → p ∈ {±1, ±2}"],
            ["q (denominador)", "Divisores del coef. principal", "Principal = 2 → q ∈ {±1, ±2}"],
            ["Candidatos p/q", "Todas las combinaciones ±p/q", "±1, ±2, ±1/2"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "probar candidatos hasta hallar una raíz",
          asi_es: "En 2x²−3x−2: probar x=2 → 2(4)−6−2 = 0 ✓ → 2 es raíz; el otro factor da x = −1/2",
          asi_no: "Buscar raíces fuera de la lista p/q → si tiene raíces racionales, están en esa lista",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "B",
          titulo: "El teorema solo lista candidatos racionales: un polinomio puede tener raíces irracionales o complejas que no aparecen en la lista",
          asi_es: "x² − 2 tiene raíces ±√2 (irracionales): la lista racional {±1, ±2} no las contiene",
          asi_no: "Concluir que «no hay raíces» porque ningún candidato racional funciona",
        },
      ],
    },
    {
      id: 11,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — Candidatos a raíz",
          enunciado: "Para P(x) = 3x² + x − 2, ¿cuál de estos NO es un candidato a raíz racional según el teorema?",
          opciones: ["x = 1/3", "x = 2/3", "x = 1/5"],
          correcta: 2,
          explicacion: "Los candidatos son ±p/q con p divisor de −2 (±1, ±2) y q divisor de 3 (±1, ±3): así 1/3 y 2/3 son válidos. En cambio 1/5 no lo es, porque 5 no divide al coeficiente principal 3.",
        },
      ],
    },
    {
      id: 12,
      tipo: "lienzo",
      etiqueta: "Lo esencial del álgebra superior",
      titulo: "Resumen",
      bloques: [
        {
          tipo: "lista",
          items: [
            {
              titulo: "Sistemas lineales",
              texto: "sustitución, reducción, Gauss y Cramer dan la misma solución",
            },
            {
              titulo: "Gauss",
              texto: "matriz aumentada → triangular; 0=k (k≠0) ⇒ sin solución; 0=0 ⇒ infinitas",
            },
            {
              math: "\\det\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}=ad-bc",
              texto: "determinante 2×2",
            },
            {
              math: "x=\\dfrac{D_x}{D},\\ y=\\dfrac{D_y}{D}",
              texto: "regla de Cramer (requiere D ≠ 0)",
            },
            {
              titulo: "Residuo y factor",
              texto: "residuo de P(x)÷(x−c) = P(c); (x−c) es factor ⟺ P(c)=0",
            },
            {
              titulo: "Raíces racionales",
              texto: "candidatos ±p/q: p divide al independiente, q al coef. principal",
            },
          ],
        },
      ],
    },
  ],
};
