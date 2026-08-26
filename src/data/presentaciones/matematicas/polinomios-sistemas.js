// Presentación: Polinomios y sistemas de ecuaciones lineales
// Pensamiento Matemático · Matematización · EXANI-II

export const PRESENTACION = {
  id: "polinomios-sistemas",
  titulo: "Polinomios y Sistemas de Ecuaciones",
  materia: "Pensamiento Matemático",
  examenes: ["EXANI-I", "EXANI-II"],
  subtema: "Matematización",
  slides: [
    {
      id: 0,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "portada",
          kicker: "Pensamiento Matemático · EXANI-II",
          titulo: "Polinomios y Sistemas de Ecuaciones",
          subtitulo: "Operar polinomios y resolver sistemas lineales de dos y tres incógnitas",
        },
      ],
    },
    {
      id: 1,
      tipo: "lienzo",
      etiqueta: "Bloque 1 · Polinomios",
      titulo: "¿Qué es un polinomio?",
      bloques: [
        {
          tipo: "destacado",
          texto: "Un polinomio es una suma de términos formados por un coeficiente y una variable con exponente entero no negativo, por ejemplo P(x) = 3x² − 5x + 2. El grado del polinomio es el mayor exponente de la variable. El término independiente es el que no tiene variable. Conviene escribir los polinomios ordenados de mayor a menor grado para operar con ellos sin errores.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Anatomía de un polinomio",
          columnas: ["Elemento", "Definición", "En 3x² − 5x + 2"],
          filas: [
            ["Grado", "Mayor exponente de la variable", "Grado 2 (por el x²)"],
            ["Coeficientes", "Números que multiplican", "3, −5 y 2"],
            ["Término independiente", "El que no lleva variable", "2"],
            ["Número de términos", "Sumandos separados por ±", "3 términos (trinomio)"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "evaluar un polinomio = sustituir el valor de la variable",
          asi_es: "P(x)=3x²−5x+2 en x=2: 3(4) − 5(2) + 2 = 12 − 10 + 2 = 4",
          asi_no: "Sustituir x=2 solo en algunos términos → hay que sustituir en todos",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "A",
          titulo: "El grado lo fija el mayor exponente, sin importar el orden en que estén escritos los términos",
          asi_es: "−5x + 3x² + 2 tiene grado 2 (el x² manda, aunque esté en medio)",
          asi_no: "Decir que el grado es 1 porque el primer término escrito es −5x",
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
          etiqueta: "Reactivo 1 — Evaluar un polinomio",
          enunciado: "Si P(x) = 2x³ − x² + 4, ¿cuál es el valor de P(−1)?",
          opciones: ["1", "5", "−3"],
          correcta: 0,
          explicacion: "Se sustituye x = −1 en todos los términos: 2(−1)³ − (−1)² + 4 = 2(−1) − (1) + 4 = −2 − 1 + 4 = 1. Cuidado con los signos de las potencias: (−1)³ = −1 y (−1)² = 1.",
        },
      ],
    },
    {
      id: 3,
      tipo: "lienzo",
      etiqueta: "Bloque 2 · Operaciones",
      titulo: "Suma y resta de polinomios",
      bloques: [
        {
          tipo: "destacado",
          texto: "Para sumar polinomios se reducen los términos semejantes (mismo grado): se suman sus coeficientes. Para restar, primero se cambia el signo de TODOS los términos del polinomio que se resta (porque el signo menos afecta a todo el paréntesis) y luego se suma. El error más frecuente en la resta es cambiar el signo solo al primer término.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Sumar y restar paso a paso",
          columnas: ["Operación", "Procedimiento", "Ejemplo"],
          filas: [
            ["Suma", "Sumar coeficientes semejantes", "(2x²+3x) + (x²−5x) = 3x² − 2x"],
            ["Resta", "Cambiar TODOS los signos, luego sumar", "(5x−4) − (2x−7) = 5x−4−2x+7 = 3x+3"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "el signo menos cambia el signo de todo el polinomio restado",
          asi_es: "(x² + 2x − 1) − (3x² − x + 4) = x²+2x−1 −3x²+x−4 = −2x² + 3x − 5",
          asi_no: "(x²+2x−1) − (3x²−x+4) = x²+2x−1 −3x²−x+4 → error: no cambió el signo de −x ni de +4",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "B",
          titulo: "Solo se combinan términos del mismo grado: 3x² y 2x no se suman entre sí",
          asi_es: "3x² + 2x queda igual (grados distintos)",
          asi_no: "3x² + 2x = 5x³ → error: ni se suman ni se multiplican grados distintos",
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
          etiqueta: "Reactivo 1 — Resta de polinomios",
          enunciado: "Calcula: (4x² − 3x + 6) − (x² + 2x − 5)",
          opciones: ["3x² − 5x + 11", "3x² − x + 1", "5x² − 5x + 11"],
          correcta: 0,
          explicacion: "Se cambian los signos del segundo paréntesis: 4x² − 3x + 6 − x² − 2x + 5. Reduciendo: (4−1)x² + (−3−2)x + (6+5) = 3x² − 5x + 11.",
        },
      ],
    },
    {
      id: 5,
      tipo: "lienzo",
      etiqueta: "Bloque 3 · Multiplicación",
      titulo: "Multiplicación de polinomios",
      bloques: [
        {
          tipo: "destacado",
          texto: "Para multiplicar polinomios se aplica la propiedad distributiva: cada término del primer factor multiplica a cada término del segundo. Al multiplicar los términos, los coeficientes se multiplican y los exponentes de la misma base se suman (ley de los exponentes). Al final se reducen los términos semejantes que resulten.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Reglas de la multiplicación",
          columnas: ["Caso", "Regla", "Ejemplo"],
          filas: [
            ["Monomio × monomio", "× coef.,  + exponentes", "(3x²)(4x³) = 12x⁵"],
            ["Monomio × polinomio", "Distribuir a cada término", "2x(x − 3) = 2x² − 6x"],
            ["Binomio × binomio", "Cada uno por cada uno", "(x+2)(x+3) = x² + 5x + 6"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "cada término del primero por cada término del segundo",
          asi_es: "(x + 2)(x² − 3x + 1) = x³ − 3x² + x + 2x² − 6x + 2 = x³ − x² − 5x + 2",
          asi_no: "(x+2)(x²−3x+1) = x³ + 2 → error: no se distribuyó a todos los términos",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "C",
          titulo: "Al multiplicar potencias de la misma base se SUMAN los exponentes, no se multiplican",
          asi_es: "x²·x³ = x⁵",
          asi_no: "x²·x³ = x⁶ → error: los exponentes se suman en el producto",
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
          etiqueta: "Reactivo 1 — Multiplicación",
          enunciado: "Multiplica: 3x(2x² − 4x + 5)",
          opciones: ["6x³ − 12x² + 15x", "6x² − 12x + 15", "5x³ − 12x² + 15x"],
          correcta: 0,
          explicacion: "Se distribuye 3x a cada término: 3x·2x² = 6x³; 3x·(−4x) = −12x²; 3x·5 = 15x. Resultado: 6x³ − 12x² + 15x. Recuerda sumar los exponentes (x·x² = x³).",
        },
      ],
    },
    {
      id: 7,
      tipo: "lienzo",
      etiqueta: "Bloque 4 · Sistemas",
      titulo: "Sistemas de dos ecuaciones con dos incógnitas",
      bloques: [
        {
          tipo: "destacado",
          texto: "Un sistema lineal 2×2 busca los valores de x e y que cumplen dos ecuaciones a la vez. Hay tres métodos algebraicos equivalentes: sustitución (despejar una variable y sustituirla), igualación (despejar la misma variable en ambas e igualar) y reducción o eliminación (sumar/restar las ecuaciones para cancelar una variable). Geométricamente, la solución es el punto donde se cruzan las dos rectas.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Los tres métodos",
          columnas: ["Método", "Idea", "Cuándo conviene"],
          filas: [
            [
              "Sustitución",
              "Despejar una variable y sustituir",
              "Cuando una variable ya está casi despejada",
            ],
            [
              "Igualación",
              "Despejar la misma en ambas e igualar",
              "Cuando es fácil despejar la misma variable",
            ],
            ["Reducción", "Sumar/restar para cancelar una", "Cuando los coeficientes se cancelan fácil"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "reducción: sumar las ecuaciones para eliminar una incógnita",
          asi_es: "x + y = 10 ;  x − y = 4 → sumando: 2x = 14 → x = 7 ; luego y = 3",
          asi_no: "Sumar mal: si los signos de y no son opuestos, primero hay que igualar coeficientes",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "A",
          titulo: "Una solución no está completa hasta hallar AMBAS incógnitas y comprobarlas en las dos ecuaciones",
          asi_es: "x = 7, y = 3: cumple x+y=10 y x−y=4 ✓",
          asi_no: "Reportar solo x = 7 y olvidar calcular y",
        },
      ],
    },
    {
      id: 8,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — Reducción",
          enunciado: "Resuelve el sistema:  2x + y = 11 ;  x − y = 1",
          opciones: ["x = 4, y = 3", "x = 3, y = 5", "x = 5, y = 1"],
          correcta: 0,
          explicacion: "Sumando ambas ecuaciones se elimina y: (2x + y) + (x − y) = 11 + 1 → 3x = 12 → x = 4. Sustituyendo en x − y = 1: 4 − y = 1 → y = 3. Comprobación: 2(4)+3 = 11 ✓.",
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
          etiqueta: "Reactivo 2 — Sustitución",
          enunciado: "Resuelve:  y = 2x − 1 ;  3x + y = 14",
          opciones: ["x = 3, y = 5", "x = 5, y = 9", "x = 2, y = 3"],
          correcta: 0,
          explicacion: "Como y ya está despejada, se sustituye en la segunda: 3x + (2x − 1) = 14 → 5x − 1 = 14 → 5x = 15 → x = 3. Entonces y = 2(3) − 1 = 5.",
        },
      ],
    },
    {
      id: 10,
      tipo: "lienzo",
      etiqueta: "Bloque 5 · Soluciones y 3×3",
      titulo: "Tipos de solución y sistemas 3×3",
      bloques: [
        {
          tipo: "destacado",
          texto: "Un sistema lineal puede tener una única solución (las rectas se cruzan en un punto), infinitas soluciones (son la misma recta) o ninguna solución (rectas paralelas, sin punto común). En sistemas de tres ecuaciones con tres incógnitas (x, y, z) se aplica la misma idea: se elimina una variable combinando ecuaciones hasta reducir el problema a un sistema 2×2, se resuelve y se regresa para hallar la tercera.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Cuántas soluciones tiene un sistema",
          columnas: ["Caso", "Geometría", "Señal algebraica"],
          filas: [
            ["Única", "Rectas que se cruzan", "Pendientes distintas"],
            ["Infinitas", "La misma recta", "Una ecuación es múltiplo de la otra"],
            ["Ninguna", "Rectas paralelas", "Igual pendiente, distinto corte → 0 = k (falso)"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "estrategia 3×3: reducir a un sistema 2×2",
          asi_es: "Eliminar z combinando pares de ecuaciones → quedan 2 ecuaciones con x, y",
          asi_no: "Intentar despejar las tres a la vez sin reducir → se vuelve inmanejable",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "B",
          titulo: "Si al resolver llegas a una igualdad falsa (p. ej. 0 = 5), el sistema NO tiene solución; si llegas a 0 = 0, tiene infinitas",
          asi_es: "0 = 0 → infinitas soluciones ;  0 = 5 → sin solución",
          asi_no: "Interpretar 0 = 5 como x = 5 → es una contradicción, no una solución",
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
          etiqueta: "Reactivo 1 — Tipo de solución",
          enunciado: "El sistema  x + 2y = 6 ;  2x + 4y = 20  ¿qué tipo de solución tiene?",
          opciones: ["Una única solución", "Ninguna solución (rectas paralelas)", "Infinitas soluciones"],
          correcta: 1,
          explicacion: "Multiplicando la primera por 2: 2x + 4y = 12, pero la segunda dice 2x + 4y = 20. Mismo lado izquierdo, distinto resultado (12 ≠ 20): es una contradicción. Las rectas son paralelas → no hay solución.",
        },
      ],
    },
    {
      id: 12,
      tipo: "lienzo",
      etiqueta: "Lo esencial de polinomios y sistemas",
      titulo: "Resumen",
      bloques: [
        {
          tipo: "lista",
          items: [
            {
              titulo: "Polinomio",
              texto: "grado = mayor exponente; evaluar = sustituir en todos los términos",
            },
            {
              titulo: "Suma y resta",
              texto: "reducir semejantes; en la resta cambia TODOS los signos",
            },
            {
              titulo: "Multiplicación",
              texto: "distributiva; × coeficientes y + exponentes de igual base",
            },
            {
              titulo: "Sistemas 2×2",
              texto: "sustitución, igualación o reducción; halla ambas incógnitas",
            },
            {
              titulo: "Tipos de solución",
              texto: "única, infinitas (0=0) o ninguna (0=k falso)",
            },
            {
              titulo: "Sistemas 3×3",
              texto: "eliminar una variable hasta reducir a un 2×2",
            },
          ],
        },
      ],
    },
  ],
};
