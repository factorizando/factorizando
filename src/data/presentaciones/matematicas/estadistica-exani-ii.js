// Presentación: Estadística descriptiva — versión EXANI-II
// Pensamiento Matemático · Matematización · EXANI-II
// Estructura por tema: DEFINICIÓN (regla_rica) → 2-3 EJEMPLOS trabajados → 5-10 EJERCICIOS.
// Temario oficial (Guía EXANI-II, pp. 83-84): población y muestra, tipos de variables,
// frecuencias (absoluta, relativa, acumulada, porcentual), representación gráfica y tabular,
// media/mediana/moda, varianza y desviación estándar, y percentiles.

export const PRESENTACION = {
  id: "estadistica-exani-ii",
  titulo: "Estadística Descriptiva",
  materia: "Pensamiento Matemático",
  subtema: "Matematización",
  slides: [
    {
      id: 0,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "portada",
          kicker: "Pensamiento Matemático · EXANI-II",
          titulo: "Estadística Descriptiva",
          subtitulo: "Población y muestra, variables, frecuencias, tendencia central, dispersión, percentiles y gráficas",
          figura: "est-portada",
        },
      ],
    },
    {
      id: "def-frecuencias",
      tipo: "lienzo",
      etiqueta: "Tema 1 · Organizar los datos",
      titulo: "Población, variables y frecuencias",
      bloques: [
        {
          tipo: "destacado",
          texto: "La población (N) es el total que se estudia y la muestra (n) una parte representativa. Las variables cualitativas describen cualidades —nominales (sin orden: color, sexo) u ordinales (con orden: nivel de inglés)— y las cuantitativas se miden con números, discretas (se cuentan: nº de hijos) o continuas (cualquier valor de un intervalo: estatura). Para organizar los datos se usa una tabla de frecuencias: la frecuencia absoluta f cuenta repeticiones, la relativa fᵣ = f / n da la proporción (× 100 el porcentaje) y la acumulada F suma las frecuencias hasta ese valor.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Tipos de frecuencia",
          columnas: ["Frecuencia", "Definición", "Propiedad"],
          filas: [
            ["Absoluta f", "Veces que aparece el dato", "Σf = n (total de datos)"],
            ["Relativa fᵣ", "fᵣ = f / n", "Σfᵣ = 1  (o 100 %)"],
            ["Acumulada F", "Suma hasta ese valor", "La última F = n"],
            ["Porcentual", "fᵣ × 100", "Proporción en %"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "la frecuencia acumulada suma de menor a mayor",
          asi_es: "Si f de 6,7,8 son 2,5,8 → F de 8 = 2 + 5 + 8 = 15 alumnos con 8 o menos",
          asi_no: "Confundir la acumulada con la absoluta: F del 8 no es 8, es la suma hasta el 8",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "A",
          titulo: "La frecuencia relativa es una proporción entre 0 y 1; multiplicada por 100 da el porcentaje",
          asi_es: "fᵣ = 8/20 = 0.40 = 40 %",
          asi_no: "Reportar fᵣ = 40 (sin dividir) → ese es el porcentaje, no la frecuencia relativa",
        },
      ],
    },
    {
      id: "fr-ej1",
      tipo: "lienzo",
      etiqueta: "Tema 1 · Ejemplo 1 / 3",
      titulo: "Ejemplo 1 · Clasificar variables",
      bloques: [
        {
          tipo: "formula",
          math: "\\text{cualitativa / cuantitativa} \\;\\Rightarrow\\; \\text{nominal · ordinal · discreta · continua}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "tipos-variable",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\text{nominal}",
              texto: "«color de ojos»: cualidad sin orden natural",
            },
            {
              math: "\\text{ordinal}",
              texto: "«nivel de inglés» (básico, intermedio, avanzado): cualidad con orden",
            },
            {
              math: "\\text{discreta}",
              texto: "«nº de hermanos»: número que se cuenta (0, 1, 2…)",
            },
            {
              math: "\\text{continua}",
              texto: "«estatura»: número que admite cualquier valor de un intervalo",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Primero se decide si la variable es cualitativa (describe) o cuantitativa (se mide con números); luego su subtipo. El error típico es llamar «discreta» a la estatura: aunque se redondee, en teoría puede tomar infinitos valores intermedios, así que es continua.",
        },
      ],
    },
    {
      id: "fr-ej2",
      tipo: "lienzo",
      etiqueta: "Tema 1 · Ejemplo 2 / 3",
      titulo: "Ejemplo 2 · Completar la tabla",
      bloques: [
        {
          tipo: "formula",
          math: "f_r = \\dfrac{f}{n}, \\qquad F = \\textstyle\\sum f \\text{ hasta el dato}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "tabla-frecuencias",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "n = 20",
              texto: "total de datos: la suma de todas las frecuencias absolutas (Σf = 20)",
            },
            {
              math: "f_r(8) = \\tfrac{8}{20} = 0.40",
              texto: "la calificación 8 apareció 8 veces: relativa 0.40, o sea 40 %",
            },
            {
              math: "F(8) = 2{+}5{+}8 = 15",
              texto: "acumulada hasta el 8: 15 alumnos obtuvieron 8 o menos",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Cada columna se construye a partir de f: la relativa divide entre n, la porcentual multiplica la relativa por 100 y la acumulada va sumando de arriba hacia abajo. La última acumulada SIEMPRE es n, y la suma de las relativas SIEMPRE es 1.",
        },
      ],
    },
    {
      id: "fr-ej3",
      tipo: "lienzo",
      etiqueta: "Tema 1 · Ejemplo 3 / 3",
      titulo: "Ejemplo 3 · Leer una tabla acumulada",
      bloques: [
        {
          tipo: "destacado",
          texto: "En un grupo de 40 alumnos, las frecuencias acumuladas de aciertos son F(5)=8, F(6)=20, F(7)=33, F(8)=40. ¿Cuántos alumnos tuvieron exactamente 7 aciertos y qué porcentaje acumula el 6?",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "f(7) = F(7) - F(6) = 33 - 20 = 13",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "La frecuencia absoluta de un valor es la diferencia entre su acumulada y la anterior: f(7) = 33 − 20 = 13 alumnos. El porcentaje acumulado hasta el 6 es F(6)/n × 100 = 20/40 × 100 = 50 %: la mitad del grupo tuvo 6 aciertos o menos.",
        },
        {
          tipo: "formula",
          math: "\\%\\,\\text{acum}(6) = \\dfrac{20}{40}\\times 100 = 50\\%",
        },
      ],
    },
    {
      id: "fr-x1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Tema 1 · Ejercicio 1 / 6",
          enunciado: "La variable «marca de teléfono» de un grupo de personas es de tipo:",
          apoyo: "marca de teléfono",
          apoyoPie: "obsérvala antes de responder",
          opciones: ["cualitativa nominal", "cualitativa ordinal", "cuantitativa discreta"],
          correcta: 0,
          explicacion: "Describe una cualidad y sus categorías no tienen orden natural: es cualitativa nominal.",
        },
      ],
    },
    {
      id: "fr-x2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Tema 1 · Ejercicio 2 / 6",
          enunciado: "El «grado de satisfacción» (bajo, medio, alto) de unos clientes es una variable:",
          apoyo: "grado de satisfacción",
          apoyoPie: "obsérvala antes de responder",
          opciones: ["cualitativa ordinal", "cualitativa nominal", "cuantitativa continua"],
          correcta: 0,
          explicacion: "Es cualitativa, pero sus categorías tienen un orden (de menor a mayor) sin una distancia numérica medible: es ordinal.",
        },
      ],
    },
    {
      id: "fr-x3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Tema 1 · Ejercicio 3 / 6",
          enunciado: "En un grupo de 50 alumnos, 15 practican natación. ¿Cuál es la frecuencia relativa de los nadadores?",
          opciones: ["0.30", "0.15", "3.33"],
          correcta: 0,
          explicacion: "fᵣ = f / n = 15 / 50 = 0.30 (es decir, 30 %). El denominador es el total del grupo.",
        },
      ],
    },
    {
      id: "fr-x4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Tema 1 · Ejercicio 4 / 6",
          enunciado: "Con frecuencias 4→3, 5→7 y 6→10, ¿cuál es la frecuencia acumulada hasta el 6?",
          opciones: ["20", "10", "17"],
          correcta: 0,
          explicacion: "La acumulada suma todas las frecuencias hasta ese dato: 3 + 7 + 10 = 20.",
        },
      ],
    },
    {
      id: "fr-x5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Tema 1 · Ejercicio 5 / 6",
          enunciado: "Una categoría tiene frecuencia relativa 0.12. ¿Qué porcentaje del total representa?",
          opciones: ["12 %", "1.2 %", "120 %"],
          correcta: 0,
          explicacion: "El porcentaje es la frecuencia relativa por 100: 0.12 × 100 = 12 %.",
        },
      ],
    },
    {
      id: "fr-x6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Tema 1 · Ejercicio 6 / 6",
          enunciado: "En una tabla de frecuencias, las acumuladas son F(1)=5, F(2)=12, F(3)=20. ¿Cuántos datos tienen el valor 2?",
          opciones: ["7", "12", "8"],
          correcta: 0,
          explicacion: "f(2) = F(2) − F(1) = 12 − 5 = 7. La absoluta es la diferencia entre acumuladas consecutivas.",
        },
      ],
    },
    {
      id: "def-tendencia",
      tipo: "lienzo",
      etiqueta: "Tema 2 · Tendencia central",
      titulo: "Media, mediana, moda y media ponderada",
      bloques: [
        {
          tipo: "destacado",
          texto: "Las medidas de tendencia central resumen los datos en un valor representativo. La media x̄ = Σx / n es el promedio (sensible a los valores extremos). La mediana Me es el valor central de los datos ORDENADOS: si n es impar es el del centro, y si es par, el promedio de los dos centrales. La moda Mo es el dato más frecuente (la única que sirve para datos cualitativos). Cuando los datos tienen distinto peso se usa la media ponderada: Σ(x·w) / Σw.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Las cuatro medidas",
          columnas: ["Medida", "Cómo se obtiene", "Ejemplo {2, 2, 6, 7, 8}"],
          filas: [
            ["Media x̄", "Σx / n (promedio)", "25 / 5 = 5"],
            ["Mediana Me", "Valor central (ordenados)", "2,2,6,7,8 → 6"],
            ["Moda Mo", "El dato más frecuente", "2 (se repite)"],
            ["Ponderada", "Σ(x·w) / Σw", "Promedio con pesos"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "la media ponderada pesa cada dato según su importancia",
          asi_es: "Exámenes (70 %) con 8 y tareas (30 %) con 9: 0.70·8 + 0.30·9 = 5.6 + 2.7 = 8.3",
          asi_no: "Promediar (8 + 9)/2 = 8.5 → ignora que cada parte pesa distinto",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "B",
          titulo: "Para la mediana hay que ORDENAR primero; tomar el valor «de en medio» sin ordenar es un error",
          asi_es: "3, 7, 5, 9, 4 → ordenado 3,4,5,7,9 → Me = 5",
          asi_no: "Tomar el 5 «porque está en medio de la lista» sin ordenar (aquí coincide por suerte)",
        },
      ],
    },
    {
      id: "tc-ej1",
      tipo: "lienzo",
      etiqueta: "Tema 2 · Ejemplo 1 / 4",
      titulo: "Ejemplo 1 · Media (punto de equilibrio)",
      bloques: [
        {
          tipo: "formula",
          math: "\\bar{x} = \\dfrac{7+8+9+6+10}{5} = \\dfrac{40}{5} = 8",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "dotplot-media",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [],
        },
        {
          tipo: "nota",
          texto: "Sumamos los 5 datos (40) y dividimos entre cuántos son (5). La media, 8, es el punto de equilibrio: los datos se reparten alrededor de ella. No tiene que ser uno de los datos.",
        },
      ],
    },
    {
      id: "tc-ej2",
      tipo: "lienzo",
      etiqueta: "Tema 2 · Ejemplo 2 / 4",
      titulo: "Ejemplo 2 · Media ponderada",
      bloques: [
        {
          tipo: "destacado",
          texto: "La calificación final pesa: examen 50 %, proyecto 30 %, tareas 20 %. Un alumno obtuvo 6 en examen, 9 en proyecto y 10 en tareas. ¿Cuál es su calificación final?",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "\\bar{x}_p = \\dfrac{\\sum (x\\cdot w)}{\\sum w} = 0.5(6) + 0.3(9) + 0.2(10)",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Cada rubro se multiplica por su peso y se suman: 3.0 + 2.7 + 2.0 = 7.7. El promedio simple (6+9+10)/3 = 8.33 sería incorrecto, porque trataría por igual al examen y a las tareas, que pesan distinto.",
        },
        {
          tipo: "formula",
          math: "3.0 + 2.7 + 2.0 = 7.7",
        },
      ],
    },
    {
      id: "tc-ej3",
      tipo: "lienzo",
      etiqueta: "Tema 2 · Ejemplo 3 / 4",
      titulo: "Ejemplo 3 · Mediana (n par)",
      bloques: [
        {
          tipo: "formula",
          math: "\\text{Me} = \\dfrac{x_{n/2} + x_{n/2+1}}{2} = \\dfrac{20+30}{2} = 25",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "dotplot-mediana",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [],
        },
        {
          tipo: "nota",
          texto: "Con 4 datos (número par) no hay un único centro: la mediana es el promedio de los dos valores centrales, 20 y 30, es decir 25. Primero hay que ordenar los datos de menor a mayor.",
        },
      ],
    },
    {
      id: "tc-ej4",
      tipo: "lienzo",
      etiqueta: "Tema 2 · Ejemplo 4 / 4",
      titulo: "Ejemplo 4 · Moda (bimodal)",
      bloques: [
        {
          tipo: "formula",
          math: "\\{1,2,2,3,3,4\\} \\;\\Rightarrow\\; \\text{Mo} = 2\\ \\text{y}\\ 3",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "barras-moda",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [],
        },
        {
          tipo: "nota",
          texto: "El 2 y el 3 empatan con dos apariciones cada uno: el conjunto es bimodal. Un conjunto puede tener una moda, varias (bimodal/multimodal) o ninguna (si todos los datos son distintos).",
        },
      ],
    },
    {
      id: "tc-x1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Tema 2 · Ejercicio 1 / 8",
          enunciado: "Las calificaciones de un alumno fueron 8, 6, 7, 9 y 10. ¿Cuál es su promedio?",
          opciones: ["8", "7.5", "9"],
          correcta: 0,
          explicacion: "La suma es 40 y hay 5 datos: x̄ = 40/5 = 8.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-est-media",
        },
      ],
    },
    {
      id: "tc-x2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Tema 2 · Ejercicio 2 / 8",
          enunciado: "¿Cuál es la media del conjunto 6, 7, 8 y 10?",
          opciones: ["7.75", "7.5", "8"],
          correcta: 0,
          explicacion: "La suma es 31 y hay 4 datos: 31/4 = 7.75. La media no tiene por qué ser un número entero.",
        },
      ],
    },
    {
      id: "tc-x3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Tema 2 · Ejercicio 3 / 8",
          enunciado: "El promedio de 5 exámenes es 8. Si los primeros cuatro suman 30, ¿qué calificación tuvo el quinto?",
          opciones: ["10", "8", "6"],
          correcta: 0,
          explicacion: "La suma total es media × n = 8 × 5 = 40; ya lleva 30, así que el quinto fue 40 − 30 = 10.",
        },
      ],
    },
    {
      id: "tc-x4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Tema 2 · Ejercicio 4 / 8",
          enunciado: "La calificación final pesa: examen 60 %, tareas 40 %. Un alumno tiene 7 en examen y 10 en tareas. ¿Cuál es su final?",
          opciones: ["8.2", "8.5", "7.6"],
          correcta: 0,
          explicacion: "Media ponderada: 0.60·7 + 0.40·10 = 4.2 + 4.0 = 8.2. El promedio simple (8.5) ignoraría los pesos.",
        },
      ],
    },
    {
      id: "tc-x5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Tema 2 · Ejercicio 5 / 8",
          enunciado: "¿Cuál es la mediana del conjunto 12, 7, 20, 5, 9?",
          opciones: ["9", "12", "7"],
          correcta: 0,
          explicacion: "Ordenados: 5, 7, 9, 12, 20. Con 5 datos (impar) la mediana es el central: 9.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-est-mediana",
        },
      ],
    },
    {
      id: "tc-x6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Tema 2 · Ejercicio 6 / 8",
          enunciado: "¿Cuál es la mediana de 12, 7, 20, 5, 15 y 9?",
          opciones: ["10.5", "12", "9"],
          correcta: 0,
          explicacion: "Ordenados: 5, 7, 9, 12, 15, 20. Con 6 datos (par) es el promedio de los dos centrales: (9 + 12)/2 = 10.5.",
        },
      ],
    },
    {
      id: "tc-x7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Tema 2 · Ejercicio 7 / 8",
          enunciado: "¿Cuál es la moda del conjunto 4, 4, 7, 7, 9?",
          opciones: ["4 y 7 (bimodal)", "7", "no tiene moda"],
          correcta: 0,
          explicacion: "El 4 y el 7 aparecen dos veces cada uno: el conjunto es bimodal, con modas 4 y 7.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-est-moda",
        },
      ],
    },
    {
      id: "tc-x8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Tema 2 · Ejercicio 8 / 8",
          enunciado: "En el conjunto {4, 5, 6, 7, 48} la media es 14 y la mediana es 6. ¿Qué medida describe mejor «el centro» de los datos?",
          apoyo: "el centro",
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "la mediana, porque la media la jala el valor 48",
            "la media, porque usa todos los datos",
            "ambas son iguales de buenas aquí",
          ],
          correcta: 0,
          explicacion: "El dato 48 es atípico y arrastra la media hasta 14, lejos de la mayoría (que está entre 4 y 7). La mediana (6) resiste los extremos, así que aquí representa mejor el centro.",
        },
      ],
    },
    {
      id: "def-dispersion",
      tipo: "lienzo",
      etiqueta: "Tema 3 · Dispersión",
      titulo: "Rango, varianza y desviación estándar",
      bloques: [
        {
          tipo: "destacado",
          texto: "Las medidas de dispersión indican qué tan separados están los datos. El rango R = xₘₐₓ − xₘᵢₙ es la diferencia entre el mayor y el menor (la más simple). La varianza σ² = Σ(x − x̄)² / n es el promedio de los cuadrados de las distancias a la media. La desviación estándar σ = √(σ²) es la raíz de la varianza, y se prefiere porque queda en las mismas unidades que los datos. Una σ pequeña indica datos agrupados cerca de la media; una σ grande, datos muy dispersos.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Medidas de dispersión",
          columnas: ["Medida", "Fórmula", "Nota"],
          filas: [
            ["Rango R", "xₘₐₓ − xₘᵢₙ", "Solo usa los extremos"],
            ["Varianza σ²", "Σ(x − x̄)² / n", "Unidades al cuadrado"],
            ["Desv. estándar σ", "√(varianza)", "Mismas unidades que los datos"],
            ["Interpretación", "Mayor σ → más dispersos", "Menor σ → más homogéneos"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "la desviación estándar es la raíz de la varianza",
          asi_es: "{2,4,6,8,10}: x̄ = 6; distancias −4,−2,0,2,4; cuadrados suman 40; σ² = 40/5 = 8; σ = √8 ≈ 2.83",
          asi_no: "Reportar σ = 8 (la varianza) → falta sacar la raíz para obtener la desviación estándar",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "C",
          titulo: "Dos conjuntos con la MISMA media pueden tener dispersión muy distinta: la media no basta para describirlos",
          asi_es: "{5,5,5} y {0,5,10} tienen media 5, pero σ = 0 y σ ≈ 4.08 respectivamente",
          asi_no: "Suponer que igual media significa datos parecidos",
        },
      ],
    },
    {
      id: "def-dispersion-proceso",
      tipo: "lienzo",
      etiqueta: "Tema 3 · Dispersión (cálculo)",
      titulo: "Cómo calcular σ paso a paso",
      bloques: [
        {
          tipo: "destacado",
          texto: "Pasos para calcular σ: ① calcula la media x̄; ② resta x̄ a cada dato (x − x̄); ③ eleva cada diferencia al cuadrado; ④ suma los cuadrados; ⑤ divide entre n (esto es la varianza σ²); ⑥ saca la raíz cuadrada (esto es σ). La varianza y la desviación son distintas: σ es siempre la raíz de σ².",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 1,
          titulo: "Ejemplo con {4, 6, 8}, x̄ = 6",
          columnas: ["Dato x", "x − x̄", "(x − x̄)²"],
          filas: [
            ["4", "−2", "4"],
            ["6", " 0", "0"],
            ["8", "+2", "4"],
            ["Σ", " —", "8  →  σ² = 8/3 ≈ 2.67  →  σ ≈ 1.63"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "σ es la raíz de la varianza, no la varianza misma",
          asi_es: "σ² = 8/3 ≈ 2.67; σ = √2.67 ≈ 1.63. Son valores distintos.",
          asi_no: "Reportar σ = 2.67 (la varianza) → falta sacar la raíz cuadrada",
        },
      ],
    },
    {
      id: "ds-ej1",
      tipo: "lienzo",
      etiqueta: "Tema 3 · Ejemplo 1 / 3",
      titulo: "Ejemplo 1 · Rango",
      bloques: [
        {
          tipo: "destacado",
          texto: "Comparemos A = {3, 4, 5, 6, 7} y B = {3, 4, 5, 6, 23}. ¿Qué rango tiene cada uno y qué problema revela?",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "rango-outlier",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "R = x_{\\max} - x_{\\min}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "A: R = 7 − 3 = 4. B: R = 23 − 3 = 20. En B, cuatro de los cinco datos siguen entre 3 y 6, pero el 23 dispara el rango. El rango solo mira los dos extremos: un único valor atípico basta para «inflarlo», por eso conviene una medida que use todos los datos (la desviación estándar).",
        },
        {
          tipo: "formula",
          math: "A\\!: R = 4 \\qquad B\\!: R = 20",
        },
      ],
    },
    {
      id: "ds-ej2",
      tipo: "lienzo",
      etiqueta: "Tema 3 · Ejemplo 2 / 3",
      titulo: "Ejemplo 2 · Varianza y desviación",
      bloques: [
        {
          tipo: "destacado",
          texto: "Calcula la varianza y la desviación estándar de {2, 4, 6, 8, 10}, cuya media es 6.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "desviacion-detalle",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "\\sigma = \\sqrt{\\dfrac{\\sum (x-\\bar{x})^2}{n}}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Distancias a la media (6): −4, −2, 0, 2, 4. Sus cuadrados (16, 4, 0, 4, 16) suman 40. La varianza es 40/5 = 8 y la desviación estándar es √8 ≈ 2.83. Reportar 8 sería dar la varianza: falta la raíz.",
        },
        {
          tipo: "formula",
          math: "\\sigma^2 = \\dfrac{40}{5} = 8, \\quad \\sigma = \\sqrt{8} \\approx 2.83",
        },
      ],
    },
    {
      id: "ds-ej3",
      tipo: "lienzo",
      etiqueta: "Tema 3 · Ejemplo 3 / 3",
      titulo: "Ejemplo 3 · Comparar la dispersión",
      bloques: [
        {
          tipo: "formula",
          math: "\\text{misma media} = 8 \\;\\Rightarrow\\; \\text{distinta } \\sigma",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "dispersion",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\{6,7,8,9,10\\}",
              texto: "datos juntos a la media: σ pequeña → grupo homogéneo",
            },
            {
              math: "\\{2,5,8,11,14\\}",
              texto: "datos lejos de la media: σ grande → grupo disperso",
            },
            {
              math: "\\bar{x} = 8",
              texto: "ambos conjuntos tienen la misma media, pero NO la misma dispersión",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "La media sola no describe los datos: estos dos conjuntos promedian 8, pero el de arriba está concentrado y el de abajo, muy esparcido. La desviación estándar es la que distingue un caso del otro.",
        },
      ],
    },
    {
      id: "ds-x1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Tema 3 · Ejercicio 1 / 7",
          enunciado: "Las temperaturas fueron 12, 7, 20, 5 y 15 °C. ¿Cuál es el rango?",
          opciones: ["15", "20", "8"],
          correcta: 0,
          explicacion: "Rango = máximo − mínimo = 20 − 5 = 15.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ej-est-rango",
        },
      ],
    },
    {
      id: "ds-x2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Tema 3 · Ejercicio 2 / 7",
          enunciado: "Para el conjunto {3, 6, 9} la media es 6. ¿Cuál es la varianza?",
          opciones: ["6", "18", "3"],
          correcta: 0,
          explicacion: "Distancias: −3, 0, +3; cuadrados 9, 0, 9 suman 18. Varianza = 18/3 = 6.",
        },
      ],
    },
    {
      id: "ds-x3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Tema 3 · Ejercicio 3 / 7",
          enunciado: "Si la varianza de un conjunto es 49, ¿cuál es su desviación estándar?",
          opciones: ["7", "2401", "24.5"],
          correcta: 0,
          explicacion: "La desviación estándar es la raíz de la varianza: σ = √49 = 7.",
        },
      ],
    },
    {
      id: "ds-x4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Tema 3 · Ejercicio 4 / 7",
          enunciado: "Para el conjunto {2, 4, 6, 8, 10} (media 6), ¿cuál es la desviación estándar?",
          opciones: ["√8 ≈ 2.83", "8", "40"],
          correcta: 0,
          explicacion: "Los cuadrados de las distancias suman 40; varianza = 40/5 = 8; desviación = √8 ≈ 2.83.",
        },
      ],
    },
    {
      id: "ds-x5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Tema 3 · Ejercicio 5 / 7",
          enunciado: "¿Cuál es la desviación estándar del conjunto {5, 5, 5, 5}?",
          opciones: ["0", "5", "1"],
          correcta: 0,
          explicacion: "Todos los datos son iguales a la media (5), así que no hay dispersión: σ = 0.",
        },
      ],
    },
    {
      id: "ds-x6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Tema 3 · Ejercicio 6 / 7",
          enunciado: "Dos máquinas llenan botellas con media 500 ml. La A tiene σ = 2 ml y la B, σ = 9 ml. ¿Cuál es más precisa?",
          opciones: [
            "la A, porque su σ menor indica datos más homogéneos",
            "la B, porque su σ mayor indica más control",
            "ambas igual, porque tienen la misma media",
          ],
          correcta: 0,
          explicacion: "Una desviación estándar menor significa menos variación alrededor de la media. La máquina A (σ = 2) es más precisa que la B (σ = 9). La media igual no dice nada de la dispersión.",
        },
      ],
    },
    {
      id: "ds-x7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Tema 3 · Ejercicio 7 / 7",
          enunciado: "A diferencia de la varianza, la desviación estándar tiene la ventaja de expresarse:",
          opciones: ["en las mismas unidades que los datos", "siempre en porcentaje", "siempre al cuadrado"],
          correcta: 0,
          explicacion: "La varianza queda en unidades al cuadrado; al sacar la raíz, la desviación estándar vuelve a las unidades originales de los datos.",
        },
      ],
    },
    {
      id: "def-posicion",
      tipo: "lienzo",
      etiqueta: "Tema 4 · Posición",
      titulo: "Cuartiles, deciles y percentiles",
      bloques: [
        {
          tipo: "destacado",
          texto: "Las medidas de posición dividen los datos ORDENADOS en partes iguales. Los cuartiles (Q₁, Q₂, Q₃) los parten en 4 (25 % cada uno); los deciles (D₁…D₉) en 10 (10 % cada uno); los percentiles (P₁…P₉₉) en 100 (1 % cada uno). El percentil k indica el valor por debajo del cual queda el k % de los datos. Coinciden entre sí: Q₂ = D₅ = P₅₀ = mediana, Q₁ = P₂₅ y Q₃ = P₇₅. El rango intercuartílico RIC = Q₃ − Q₁ mide la dispersión del 50 % central.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Equivalencias entre medidas de posición",
          columnas: ["Posición", "Deja por debajo", "Equivale a"],
          filas: [
            ["Q₁ (primer cuartil)", "25 % de los datos", "= P₂₅"],
            ["Q₂ (segundo cuartil)", "50 % de los datos", "= D₅ = P₅₀ = mediana"],
            ["Q₃ (tercer cuartil)", "75 % de los datos", "= P₇₅"],
            ["RIC (intercuartílico)", "50 % central", "RIC = Q₃ − Q₁"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "cuartiles: la mediana parte los datos, y cada mitad se vuelve a partir",
          asi_es: "2,4,5,6,8,10,12,14,15,18,20 (n=11): Q₂=10; mitad baja 2,4,5,6,8 → Q₁=5; mitad alta 12,14,15,18,20 → Q₃=15",
          asi_no: "Tomar Q₁ como «el dato en la posición 1» → Q₁ es la mediana de la mitad inferior, no el primer dato",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "A",
          titulo: "El percentil es un VALOR de los datos, no el porcentaje: el P₈₀ es la calificación bajo la cual queda el 80 %",
          asi_es: "Si P₈₀ = 17, el 80 % de los alumnos sacó 17 o menos",
          asi_no: "Decir que «el P₈₀ es 80» confunde la posición con el valor del dato",
        },
      ],
    },
    {
      id: "ps-ej1",
      tipo: "lienzo",
      etiqueta: "Tema 4 · Ejemplo 1 / 3",
      titulo: "Ejemplo 1 · Cuartiles (n impar)",
      bloques: [
        {
          tipo: "formula",
          math: "Q_2 = \\text{Me} = 10, \\quad Q_1 = 5, \\quad Q_3 = 15",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "cuartiles-strip",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [],
        },
        {
          tipo: "nota",
          texto: "Con 11 datos, la mediana es el central: Q₂ = 10. La mitad inferior {2,4,5,6,8} da Q₁ = 5 (su mediana) y la superior {12,14,15,18,20} da Q₃ = 15. La caja del diagrama abarca del Q₁ al Q₃: ahí vive el 50 % central de los datos.",
        },
      ],
    },
    {
      id: "ps-ej2",
      tipo: "lienzo",
      etiqueta: "Tema 4 · Ejemplo 2 / 3",
      titulo: "Ejemplo 2 · Cuartiles (n par) y RIC",
      bloques: [
        {
          tipo: "formula",
          math: "\\text{RIC} = Q_3 - Q_1 = 14 - 8 = 6",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "cuartiles-strip",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [],
        },
        {
          tipo: "nota",
          texto: "Con 6 datos, la mediana Q₂ es el promedio de los centrales (10 y 12) = 11. La mitad baja {4,8,10} da Q₁ = 8 y la alta {12,14,18} da Q₃ = 14. El rango intercuartílico RIC = 14 − 8 = 6 mide la amplitud del 50 % central, ignorando los extremos.",
        },
      ],
    },
    {
      id: "ps-ej3",
      tipo: "lienzo",
      etiqueta: "Tema 4 · Ejemplo 3 / 3",
      titulo: "Ejemplo 3 · Interpretar un percentil",
      bloques: [
        {
          tipo: "destacado",
          texto: "Un alumno presentó un examen de admisión y su resultado fue el percentil 90 (P₉₀). ¿Qué significa exactamente?",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "P_{90} \\Rightarrow 90\\,\\%\\ \\text{quedó por debajo}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "El percentil 90 NO es una calificación de 90: significa que el 90 % de los sustentantes obtuvo un puntaje igual o menor al suyo, y solo el 10 % lo superó. El percentil ubica a un individuo dentro del grupo; es una medida de posición relativa, no el valor del dato ni el porcentaje de aciertos.",
        },
        {
          tipo: "formula",
          math: "\\text{posición relativa, no calificación}",
        },
      ],
    },
    {
      id: "ps-x1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Tema 4 · Ejercicio 1 / 6",
          enunciado: "Para los datos 3, 6, 7, 9, 11, 12, 15 (n = 7), ¿cuál es el primer cuartil Q₁?",
          opciones: ["6", "7", "9"],
          correcta: 0,
          explicacion: "La mediana es Q₂ = 9 (central). La mitad inferior es 3, 6, 7; su valor central es 6, así que Q₁ = 6.",
        },
      ],
    },
    {
      id: "ps-x2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Tema 4 · Ejercicio 2 / 6",
          enunciado: "Para esos mismos datos 3, 6, 7, 9, 11, 12, 15, ¿cuál es el tercer cuartil Q₃?",
          opciones: ["12", "11", "15"],
          correcta: 0,
          explicacion: "La mitad superior (después de la mediana 9) es 11, 12, 15; su valor central es 12, así que Q₃ = 12.",
        },
      ],
    },
    {
      id: "ps-x3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Tema 4 · Ejercicio 3 / 6",
          enunciado: "Si en un conjunto de datos Q₁ = 6 y Q₃ = 12, ¿cuál es el rango intercuartílico?",
          opciones: ["6", "18", "9"],
          correcta: 0,
          explicacion: "RIC = Q₃ − Q₁ = 12 − 6 = 6. Mide la amplitud del 50 % central y no se ve afectado por los valores extremos.",
        },
      ],
    },
    {
      id: "ps-x4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Tema 4 · Ejercicio 4 / 6",
          enunciado: "¿Con cuál de estas medidas coincide siempre el segundo cuartil Q₂?",
          opciones: ["la mediana (P₅₀)", "la media", "el rango"],
          correcta: 0,
          explicacion: "Q₂ deja el 50 % de los datos por debajo: es exactamente la mediana, equivalente a D₅ y P₅₀.",
        },
      ],
    },
    {
      id: "ps-x5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Tema 4 · Ejercicio 5 / 6",
          enunciado: "El percentil 25 (P₂₅) de las estaturas de un grupo es 1.60 m. ¿Qué significa?",
          opciones: [
            "el 25 % del grupo mide 1.60 m o menos",
            "el 25 % del grupo mide exactamente 1.60 m",
            "25 personas miden 1.60 m",
          ],
          correcta: 0,
          explicacion: "El percentil 25 es el valor bajo el cual queda el 25 % de los datos: una cuarta parte del grupo mide 1.60 m o menos. (P₂₅ equivale a Q₁.)",
        },
      ],
    },
    {
      id: "ps-x6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Tema 4 · Ejercicio 6 / 6",
          enunciado: "En una distribución, ¿qué deja por debajo el decil D₇?",
          opciones: ["el 70 % de los datos", "7 datos", "el 7 % de los datos"],
          correcta: 0,
          explicacion: "Los deciles parten los datos en 10 partes iguales (10 % cada una). El D₇ deja por debajo el 70 % de los datos (equivale a P₇₀).",
        },
      ],
    },
    {
      id: "def-graficas",
      tipo: "lienzo",
      etiqueta: "Tema 5 · Gráficas",
      titulo: "Representación gráfica de información",
      bloques: [
        {
          tipo: "destacado",
          texto: "Cada tipo de gráfica conviene a un tipo de dato. La gráfica de barras compara categorías o datos discretos con barras separadas. El histograma representa datos continuos agrupados en intervalos, con barras juntas (el área importa). El polígono de frecuencias une los puntos medios de las barras. La gráfica circular (de pastel) muestra la proporción de cada parte respecto al total: cada sector mide fᵣ × 360°. Para interpretar: identifica qué representa cada eje, compara magnitudes y recuerda que la barra o sector mayor corresponde a la moda.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "¿Qué gráfica usar?",
          columnas: ["Gráfica", "Para qué datos", "Clave"],
          filas: [
            ["Barras", "Categóricos o discretos", "Barras separadas"],
            ["Histograma", "Continuos agrupados", "Barras juntas (intervalos)"],
            ["Circular", "Proporción del total", "Sector = fᵣ × 360°"],
            ["Polígono", "Tendencia / evolución", "Une puntos medios"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "en la circular cada sector es proporcional a su frecuencia",
          asi_es: "Un grupo con fᵣ = 0.25 ocupa un sector de 0.25 × 360° = 90° (un cuarto del círculo)",
          asi_no: "Asignar 25° al 25 % → el total del círculo es 360°, no 100°",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "B",
          titulo: "La gráfica circular muestra PROPORCIONES, no valores absolutos: para comparar cantidades exactas conviene una de barras",
          asi_es: "Para «qué porcentaje prefiere cada opción» → circular",
          asi_no: "Usar la circular para leer cuántas unidades exactas hay de cada categoría",
        },
      ],
    },
    {
      id: "gr-ej1",
      tipo: "lienzo",
      etiqueta: "Tema 5 · Ejemplo 1 / 3",
      titulo: "Ejemplo 1 · Gráfica de barras",
      bloques: [
        {
          tipo: "formula",
          math: "\\text{Deporte favorito de 20 alumnos}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "ej-barras-deporte",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\text{eje X}",
              texto: "las categorías (fútbol, básquet, voleibol, natación)",
            },
            {
              math: "\\text{eje Y}",
              texto: "la frecuencia: cuántos alumnos eligieron cada una",
            },
            {
              math: "\\text{Mo}",
              texto: "el fútbol (8) es la barra más alta: la categoría más frecuente",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Las barras van separadas porque las categorías no son números (variable cualitativa). Las alturas suman el total: 8 + 5 + 4 + 3 = 20. La barra más alta marca la moda.",
        },
      ],
    },
    {
      id: "gr-ej2",
      tipo: "lienzo",
      etiqueta: "Tema 5 · Ejemplo 2 / 3",
      titulo: "Ejemplo 2 · Histograma",
      bloques: [
        {
          tipo: "formula",
          math: "\\text{Estatura (cm) de 20 alumnos}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "ej-histograma-estatura",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\text{continua}",
              texto: "la estatura se agrupa en intervalos o clases",
            },
            {
              math: "[160, 170)",
              texto: "la clase modal: el intervalo más frecuente, con 9 alumnos",
            },
            {
              math: "\\text{juntas}",
              texto: "las barras se tocan porque los intervalos son continuos",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "A diferencia de la gráfica de barras, en el histograma las barras se tocan: no hay huecos entre intervalos. Al agrupar se gana claridad pero se pierden los datos exactos: solo sabemos que 9 alumnos miden «entre 160 y 170».",
        },
      ],
    },
    {
      id: "gr-ej3",
      tipo: "lienzo",
      etiqueta: "Tema 5 · Ejemplo 3 / 3",
      titulo: "Ejemplo 3 · Gráfica circular",
      bloques: [
        {
          tipo: "formula",
          math: "\\text{sector} = f_r \\times 360°",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "ej-circular-transporte",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\text{Camión}",
              texto: "10/20 = 0.50 → 0.50 × 360° = 180° (50 %)",
            },
            {
              math: "\\text{Auto}",
              texto: "6/20 = 0.30 → 108° (30 %)",
            },
            {
              math: "\\text{Bici}",
              texto: "4/20 = 0.20 → 72° (20 %)",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Cada sector es proporcional a su frecuencia relativa. El sector más grande (camión) es el más frecuente, y todos juntos suman 360° (100 %). La circular es ideal para preguntas tipo «¿qué parte del total…?».",
        },
      ],
    },
    {
      id: "gr-x1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Tema 5 · Ejercicio 1 / 5",
          enunciado: "¿Qué gráfica conviene para datos continuos agrupados en intervalos?",
          opciones: ["el histograma", "la gráfica de barras separadas", "la gráfica circular"],
          correcta: 0,
          explicacion: "El histograma usa barras juntas (sin espacio) porque los intervalos son continuos.",
        },
      ],
    },
    {
      id: "gr-x2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Tema 5 · Ejercicio 2 / 5",
          enunciado: "En una gráfica circular, una categoría con frecuencia relativa 0.25 abarca un sector de:",
          opciones: ["90°", "25°", "180°"],
          correcta: 0,
          explicacion: "Sector = fᵣ × 360° = 0.25 × 360° = 90°.",
        },
      ],
    },
    {
      id: "gr-x3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Tema 5 · Ejercicio 3 / 5",
          enunciado: "En una gráfica de barras de frecuencias, la barra más alta corresponde a:",
          opciones: ["la moda", "la media", "la mediana"],
          correcta: 0,
          explicacion: "La barra más alta es la del dato que más se repite, es decir, la moda.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "graficas-barras",
        },
      ],
    },
    {
      id: "gr-x4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Tema 5 · Ejercicio 4 / 5",
          enunciado: "Un sector de una gráfica circular mide 144°. ¿Qué porcentaje del total representa?",
          opciones: ["40 %", "36 %", "44 %"],
          correcta: 0,
          explicacion: "El círculo completo es 360°. La proporción es 144/360 = 0.40, es decir 40 %.",
        },
      ],
    },
    {
      id: "gr-x5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Tema 5 · Ejercicio 5 / 5",
          enunciado: "¿Cuál es la diferencia principal entre una gráfica de barras y un histograma?",
          opciones: [
            "el histograma usa barras juntas para datos continuos",
            "no hay ninguna diferencia",
            "la gráfica de barras solo sirve para porcentajes",
          ],
          correcta: 0,
          explicacion: "Las barras van separadas (categorías o datos discretos); el histograma las pone juntas porque representa intervalos continuos.",
        },
      ],
    },
    {
      id: "resumen",
      tipo: "lienzo",
      etiqueta: "Lo esencial de estadística descriptiva",
      titulo: "Resumen",
      bloques: [
        {
          tipo: "lista",
          items: [
            {
              math: "f_r = \\dfrac{f}{n},\\quad \\textstyle\\sum f_r = 1",
              texto: "frecuencia relativa; la acumulada F suma hasta el dato",
            },
            {
              math: "\\bar{x} = \\dfrac{\\sum x}{n}",
              texto: "media (sensible a extremos); mediana = valor central ordenado",
            },
            {
              math: "\\bar{x}_p = \\dfrac{\\sum (x\\cdot w)}{\\sum w}",
              texto: "media ponderada cuando cada dato pesa distinto",
            },
            {
              math: "\\sigma = \\sqrt{\\dfrac{\\sum (x-\\bar{x})^2}{n}}",
              texto: "desviación estándar = raíz de la varianza",
            },
            {
              math: "Q_2 = D_5 = P_{50} = \\text{mediana}",
              texto: "posición: Q₁=P₂₅, Q₃=P₇₅; RIC = Q₃ − Q₁",
            },
            {
              titulo: "Gráficas",
              texto: "barras (discretos), histograma (continuos), circular: sector = fᵣ × 360°",
            },
          ],
        },
      ],
    },
  ],
};
