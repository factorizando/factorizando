// Datos de la presentación: Estadística descriptiva (EXANI-I)

export const PRESENTACION = {
  id: "estadistica",
  titulo: "Estadística",
  materia: "Matemáticas",
  subtema: "Probabilidad y Estadística",
  slides: [

    // ── PORTADA ───────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Estadística",
      subtitulo: "Tablas de frecuencia, medidas de tendencia central, gráficas y medidas de dispersión",
      etiqueta: "Pensamiento Matemático · EXANI-I",
      svgDiagram: "est-portada",
    },

    // ── EJEMPLO ANCLA ─────────────────────────────────────────────────────────
    {
      id: "ejemplo",
      tipo: "concepto",
      titulo: "Un ejemplo para tener en mente",
      etiqueta: "Antes de las definiciones",
      formula: "N = 300 \\text{ (población)}, \\qquad n = 5 \\text{ (muestra)}",
      svgDiagram: "ejemplo-estudiantes",
      items: [
        { math: "\\text{individuo}", texto: "cada estudiante de la tabla (una fila): Ana, Luis, Sofía…" },
        { math: "\\text{dato}", texto: "cada valor registrado: «Mujer», «Intermedio», 2, 1.60 m" },
        { math: "\\text{cualitativas}", texto: "sexo (nominal) y nivel de inglés (ordinal): describen cualidades" },
        { math: "\\text{cuantitativas}", texto: "nº de hermanos (discreta) y estatura (continua): son números" }
      ],
      nota: "Queremos saber cómo son los 300 estudiantes de tercer grado (la población), pero solo medimos a 5 (la muestra). De cada estudiante (individuo) registramos varias variables, y cada valor anotado es un dato. Guarda esta tabla en mente: en las siguientes diapositivas definimos uno por uno cada concepto que aparece aquí."
    },

    // ── VARIABLES Y DATOS ─────────────────────────────────────────────────────
    {
      id: "variables",
      tipo: "concepto",
      titulo: "Variables y Datos",
      etiqueta: "¿Qué estamos midiendo?",
      formula: "N = \\text{población}, \\qquad n = \\text{muestra}",
      svgDiagram: "tipos-variable",
      items: [
        {
          math: "\\text{cualitativa}",
          texto: "describe cualidades, no se mide con números",
          expandable: true,
          detalles: [
            "Nominal: solo distingue, sin orden — color, sexo, estado civil, marca",
            "Ordinal: tiene un orden pero sin distancia medible — nivel de escolaridad, grado de acuerdo, lugar obtenido"
          ]
        },
        {
          math: "\\text{cuantitativa}",
          texto: "se expresa con números: edad, estatura, calificación",
          expandable: true,
          detalles: [
            "Discreta: valores aislados que se cuentan — nº de hijos, goles, autos",
            "Continua: cualquier valor dentro de un intervalo — peso, tiempo, estatura"
          ]
        },
        { math: "\\text{dato}", texto: "el valor que toma la variable en cada caso: 8, «rojo», 1.70 m" },
        { math: "\\text{individuo}", texto: "la unidad de quien se toma el dato: persona, objeto o evento" }
      ],
      nota: "La variable es la característica que se estudia; el dato es el valor que se obtiene de cada individuo. La población (N) es el total estudiado y la muestra (n), una parte representativa. Toca «cualitativa» y «cuantitativa» para ver sus subtipos."
    },

    // ── EJERCICIOS · VARIABLES Y DATOS ────────────────────────────────────────
    {
      id: "ev1",
      tipo: "ejercicio",
      etiqueta: "Variables y Datos · Ejercicio 1 / 5",
      pregunta: "La variable «color de ojos» de un grupo de personas es de tipo:",
      opciones: ["cuantitativa discreta", "cualitativa nominal", "cualitativa ordinal"],
      correcta: 1,
      explicacion: "Describe una cualidad (no se mide con números) y sus categorías no tienen un orden natural: es cualitativa nominal.",
      pasos: []
    },
    {
      id: "ev2",
      tipo: "ejercicio",
      etiqueta: "Variables y Datos · Ejercicio 2 / 5",
      pregunta: "El «nivel de escolaridad» (primaria, secundaria, preparatoria, universidad) es una variable:",
      opciones: ["cualitativa ordinal", "cualitativa nominal", "cuantitativa continua"],
      correcta: 0,
      explicacion: "Es cualitativa, pero sus categorías sí tienen un orden (de menor a mayor grado), aunque sin una distancia numérica medible: es ordinal.",
      pasos: []
    },
    {
      id: "ev3",
      tipo: "ejercicio",
      etiqueta: "Variables y Datos · Ejercicio 3 / 5",
      pregunta: "El «número de hermanos» de cada estudiante es una variable:",
      opciones: ["cuantitativa continua", "cuantitativa discreta", "cualitativa ordinal"],
      correcta: 1,
      explicacion: "Se expresa con números y solo toma valores aislados que se cuentan (0, 1, 2, 3…): es cuantitativa discreta.",
      pasos: []
    },
    {
      id: "ev4",
      tipo: "ejercicio",
      etiqueta: "Variables y Datos · Ejercicio 4 / 5",
      pregunta: "El «tiempo en segundos» que tarda un corredor en una carrera es una variable:",
      opciones: ["cuantitativa discreta", "cuantitativa continua", "cualitativa nominal"],
      correcta: 1,
      explicacion: "Puede tomar cualquier valor dentro de un intervalo (12.4 s, 12.41 s…): es cuantitativa continua.",
      pasos: []
    },
    {
      id: "ev5",
      tipo: "ejercicio",
      etiqueta: "Variables y Datos · Ejercicio 5 / 5",
      pregunta: "Para estudiar a los 3000 alumnos de una escuela se encuesta a 200 de ellos. ¿Qué representa el número 3000?",
      opciones: ["la muestra", "la población", "un dato"],
      correcta: 1,
      explicacion: "La población (N) es el total que se estudia: los 3000 alumnos. Los 200 encuestados son la muestra (n).",
      pasos: []
    },

    // ── TABLAS DE FRECUENCIA ──────────────────────────────────────────────────
    {
      id: "tablas",
      tipo: "concepto",
      titulo: "Tablas de Frecuencia",
      etiqueta: "Organizar los datos",
      formula: "f_r = \\dfrac{f}{N}, \\qquad \\sum f = N",
      svgDiagram: "tabla-frecuencias",
      items: [
        { math: "f", texto: "frecuencia absoluta: cuántas veces aparece el dato" },
        { math: "f_r = f/N", texto: "frecuencia relativa: proporción del total (× 100 da el %)" },
        { math: "F", texto: "frecuencia acumulada: suma de las frecuencias hasta ese dato" }
      ],
      nota: "Las frecuencias absolutas suman el total N y las relativas suman 1 (o 100 %). En la tabla, 20 alumnos presentaron el examen y la calificación más común fue 8."
    },

    // ── EJERCICIOS · TABLAS DE FRECUENCIA ─────────────────────────────────────
    {
      id: "et1",
      tipo: "ejercicio",
      svgDiagram: "ej-est-tabla",
      etiqueta: "Tablas de Frecuencia · Ejercicio 1 / 5",
      pregunta: "Según la tabla de frecuencias, ¿cuántos alumnos obtuvieron 8 o más?",
      opciones: ["13", "8", "15"],
      correcta: 0,
      explicacion: "Se suman las frecuencias de 8, 9 y 10: 8 + 4 + 1 = 13.",
      pasos: [
        { pre: "Frecuencias de 8, 9 y 10: ", math: "8 + 4 + 1 = 13" }
      ]
    },
    {
      id: "et2",
      tipo: "ejercicio",
      etiqueta: "Tablas de Frecuencia · Ejercicio 2 / 5",
      pregunta: "Si la calificación 8 la obtuvieron 8 de los 20 alumnos, ¿cuál es su frecuencia relativa?",
      opciones: ["0.40", "0.08", "8"],
      correcta: 0,
      explicacion: "fᵣ = f/N = 8/20 = 0.40 (es decir, el 40 %).",
      pasos: [
        { pre: "Relativa: ", math: "f_r = \\dfrac{8}{20} = 0.40" }
      ]
    },
    {
      id: "et3",
      tipo: "ejercicio",
      etiqueta: "Tablas de Frecuencia · Ejercicio 3 / 5",
      pregunta: "Con frecuencias 6→2 y 7→5, ¿cuántos alumnos obtuvieron 7 o menos (frecuencia acumulada hasta 7)?",
      opciones: ["5", "7", "2"],
      correcta: 1,
      explicacion: "La frecuencia acumulada suma las frecuencias hasta ese dato: 2 + 5 = 7.",
      pasos: [
        { pre: "Acumulada: ", math: "F = 2 + 5 = 7" }
      ]
    },
    {
      id: "et4",
      tipo: "ejercicio",
      etiqueta: "Tablas de Frecuencia · Ejercicio 4 / 5",
      pregunta: "Si solo 1 de los 20 alumnos obtuvo 10, ¿qué porcentaje representa?",
      opciones: ["5 %", "10 %", "1 %"],
      correcta: 0,
      explicacion: "fᵣ = 1/20 = 0.05; multiplicado por 100 da 5 %.",
      pasos: [
        { pre: "Porcentaje: ", math: "\\dfrac{1}{20}\\times 100 = 5\\,\\%" }
      ]
    },
    {
      id: "et5",
      tipo: "ejercicio",
      etiqueta: "Tablas de Frecuencia · Ejercicio 5 / 5",
      pregunta: "En una tabla de frecuencias, la suma de todas las frecuencias absolutas (Σf) es igual a:",
      opciones: ["1", "el total de datos N", "100"],
      correcta: 1,
      explicacion: "Las frecuencias absolutas cuentan los datos, así que su suma es el total N. (Las que suman 1 son las relativas.)",
      pasos: []
    },

    // ── TENDENCIA CENTRAL (PANORAMA) ──────────────────────────────────────────
    {
      id: "tendencia",
      tipo: "concepto",
      titulo: "Medidas de Tendencia Central",
      etiqueta: "Un solo número que resume los datos",
      formula: "\\bar{x} = \\dfrac{\\sum x}{n}",
      svgDiagram: "tendencia-central",
      items: [
        { math: "\\bar{x}\\ \\text{(media)}", texto: "el promedio: suma de los datos entre cuántos son" },
        { math: "\\text{Me (mediana)}", texto: "el valor central al ordenar los datos" },
        { math: "\\text{Mo (moda)}", texto: "el dato que más se repite" }
      ],
      nota: "No tienen por qué coincidir. En el conjunto {2, 2, 6, 7, 8}: media = 5, mediana = 6 y moda = 2. Cada una mira el «centro» de forma distinta."
    },

    // ── MEDIA ─────────────────────────────────────────────────────────────────
    {
      id: "media",
      tipo: "criterio_detalle",
      titulo: "Media Aritmética",
      etiqueta: "El promedio",
      svgDiagram: "media-detalle",
      enunciado: "La media aritmética es la suma de todos los datos dividida entre el número de datos. Es la medida de tendencia central más utilizada.",
      math: "\\bar{x} = \\dfrac{x_1 + x_2 + \\cdots + x_n}{n} = \\dfrac{\\sum x}{n}",
      por_que: "Reparte el total en partes iguales. Con {2, 2, 6, 7, 8} la suma es 25 y hay 5 datos, así que x̄ = 25/5 = 5. Cuidado: un valor muy grande o muy pequeño la «jala» — es sensible a los valores extremos.",
      math_razon: "\\bar{x} = \\dfrac{2+2+6+7+8}{5} = \\dfrac{25}{5} = 5"
    },

    // ── MEDIA · EJEMPLOS ──────────────────────────────────────────────────────
    {
      id: "med-ej1",
      tipo: "concepto",
      titulo: "Media · Ejemplo 1",
      etiqueta: "Media · Ejemplo 1 / 5",
      formula: "\\bar{x} = \\dfrac{7+8+9+6+10}{5} = \\dfrac{40}{5} = 8",
      svgDiagram: "dotplot-media",
      diagramData: [7, 8, 9, 6, 10],
      items: [],
      nota: "Sumamos los 5 datos (40) y dividimos entre cuántos son (5). La media, 8, es el punto de equilibrio: los datos se reparten alrededor de ella."
    },
    {
      id: "med-ej2",
      tipo: "concepto",
      titulo: "Media · Ejemplo 2 (resultado decimal)",
      etiqueta: "Media · Ejemplo 2 / 5",
      formula: "\\bar{x} = \\dfrac{6+7+8+10}{4} = \\dfrac{31}{4} = 7.75",
      svgDiagram: "dotplot-media",
      diagramData: [6, 7, 8, 10],
      items: [],
      nota: "La media no tiene que ser uno de los datos ni un número entero: aquí cae en 7.75, entre el 7 y el 8."
    },
    {
      id: "med-ej3",
      tipo: "concepto",
      titulo: "Media · Ejemplo 3 (valor extremo)",
      etiqueta: "Media · Ejemplo 3 / 5",
      formula: "\\bar{x} = \\dfrac{5+6+7+8+24}{5} = \\dfrac{50}{5} = 10",
      svgDiagram: "dotplot-media",
      diagramData: [5, 6, 7, 8, 24],
      items: [],
      nota: "Cuatro datos están entre 5 y 8, pero el 24 «jala» la media hasta 10, lejos de la mayoría. Por eso decimos que la media es sensible a los valores extremos."
    },
    {
      id: "med-ej4",
      tipo: "concepto",
      titulo: "Media · Ejemplo 4 (seis datos)",
      etiqueta: "Media · Ejemplo 4 / 5",
      formula: "\\bar{x} = \\dfrac{15+18+12+20+10+15}{6} = \\dfrac{90}{6} = 15",
      svgDiagram: "dotplot-media",
      diagramData: [15, 18, 12, 20, 10, 15],
      items: [],
      nota: "El procedimiento es el mismo con cualquier cantidad de datos: suma total entre el número de datos."
    },
    {
      id: "med-ej5",
      tipo: "concepto",
      titulo: "Media · Ejemplo 5 (dato faltante)",
      etiqueta: "Media · Ejemplo 5 / 5",
      formula: "\\sum x = \\bar{x}\\cdot n = 8\\times 4 = 32",
      items: [
        { math: "1", texto: "Tiene 9, 7 y 8 en tres exámenes: suman 24" },
        { math: "2", texto: "Para promediar 8 en 4 exámenes necesita 8 × 4 = 32 en total" },
        { math: "3", texto: "Le falta 32 − 24 = 8 en el cuarto examen" }
      ],
      nota: "Este tipo de problema «al revés» (conocer el promedio y buscar un dato) aparece muy seguido en el EXANI-I. La clave: la suma de los datos es igual a la media por el número de datos."
    },

    // ── MEDIA · EJERCICIOS ────────────────────────────────────────────────────
    {
      id: "med-q1",
      tipo: "ejercicio",
      svgDiagram: "ej-est-media",
      etiqueta: "Media · Ejercicio 1 / 10",
      pregunta: "Las calificaciones de un alumno fueron 8, 6, 7, 9 y 10. ¿Cuál es su promedio?",
      opciones: ["8", "7.5", "9"],
      correcta: 0,
      explicacion: "La suma es 40 y hay 5 datos: x̄ = 40/5 = 8.",
      pasos: [{ pre: "Media: ", math: "\\bar{x} = \\dfrac{40}{5} = 8" }]
    },
    {
      id: "med-q2",
      tipo: "ejercicio",
      etiqueta: "Media · Ejercicio 2 / 10",
      pregunta: "¿Cuál es la media de 4, 8, 6 y 10?",
      opciones: ["7", "6.5", "8"],
      correcta: 0,
      explicacion: "La suma es 28 y hay 4 datos: 28/4 = 7.",
      pasos: [{ pre: "Media: ", math: "\\bar{x} = \\dfrac{28}{4} = 7" }]
    },
    {
      id: "med-q3",
      tipo: "ejercicio",
      etiqueta: "Media · Ejercicio 3 / 10",
      pregunta: "¿Cuál es la media de 5, 5, 5, 5 y 5?",
      opciones: ["5", "1", "25"],
      correcta: 0,
      explicacion: "Si todos los datos son iguales, la media es ese mismo valor: 5.",
      pasos: []
    },
    {
      id: "med-q4",
      tipo: "ejercicio",
      etiqueta: "Media · Ejercicio 4 / 10",
      pregunta: "¿Cuál es la media de 2, 4, 6 y 8?",
      opciones: ["5", "4", "6"],
      correcta: 0,
      explicacion: "La suma es 20 y hay 4 datos: 20/4 = 5.",
      pasos: [{ pre: "Media: ", math: "\\bar{x} = \\dfrac{20}{4} = 5" }]
    },
    {
      id: "med-q5",
      tipo: "ejercicio",
      etiqueta: "Media · Ejercicio 5 / 10",
      pregunta: "¿Cuál es el promedio de 10, 20 y 30?",
      opciones: ["20", "15", "30"],
      correcta: 0,
      explicacion: "La suma es 60 y hay 3 datos: 60/3 = 20.",
      pasos: []
    },
    {
      id: "med-q6",
      tipo: "ejercicio",
      etiqueta: "Media · Ejercicio 6 / 10",
      pregunta: "¿Cuál es la media de 7, 8, 9 y 9?",
      opciones: ["8.25", "8.5", "8"],
      correcta: 0,
      explicacion: "La suma es 33 y hay 4 datos: 33/4 = 8.25.",
      pasos: [{ pre: "Media: ", math: "\\bar{x} = \\dfrac{33}{4} = 8.25" }]
    },
    {
      id: "med-q7",
      tipo: "ejercicio",
      etiqueta: "Media · Ejercicio 7 / 10",
      pregunta: "El promedio de 4 exámenes es 8. ¿Cuánto suman las 4 calificaciones?",
      opciones: ["32", "16", "8"],
      correcta: 0,
      explicacion: "La suma es la media por el número de datos: 8 × 4 = 32.",
      pasos: [{ pre: "Suma: ", math: "\\sum x = 8 \\times 4 = 32" }]
    },
    {
      id: "med-q8",
      tipo: "ejercicio",
      etiqueta: "Media · Ejercicio 8 / 10",
      pregunta: "El promedio de 5 números es 12. ¿Cuánto suman?",
      opciones: ["60", "17", "12"],
      correcta: 0,
      explicacion: "Suma = media × n = 12 × 5 = 60.",
      pasos: [{ pre: "Suma: ", math: "\\sum x = 12 \\times 5 = 60" }]
    },
    {
      id: "med-q9",
      tipo: "ejercicio",
      etiqueta: "Media · Ejercicio 9 / 10",
      pregunta: "Un alumno tiene 9, 7 y 8. ¿Qué necesita en un cuarto examen para promediar 8?",
      opciones: ["8", "9", "10"],
      correcta: 0,
      explicacion: "Necesita 8 × 4 = 32 en total; ya lleva 24, así que le falta 32 − 24 = 8.",
      pasos: [{ pre: "Falta: ", math: "32 - 24 = 8" }]
    },
    {
      id: "med-q10",
      tipo: "ejercicio",
      etiqueta: "Media · Ejercicio 10 / 10",
      pregunta: "¿Cuál medida de tendencia central es la más afectada por un valor extremo?",
      opciones: ["la media", "la mediana", "la moda"],
      correcta: 0,
      explicacion: "La media usa todos los datos en la suma, así que un valor muy grande o muy pequeño la desplaza; la mediana y la moda casi no cambian.",
      pasos: []
    },

    // ── MEDIANA ───────────────────────────────────────────────────────────────
    {
      id: "mediana",
      tipo: "criterio_detalle",
      titulo: "Mediana",
      etiqueta: "El valor del centro",
      svgDiagram: "mediana-detalle",
      enunciado: "La mediana es el valor que queda justo en el centro cuando los datos se ordenan de menor a mayor. Deja la mitad de los datos por debajo y la mitad por encima.",
      math: "n\\ \\text{impar}: \\quad \\text{Me} = x_{\\frac{n+1}{2}}",
      por_que: "Primero se ordenan los datos. En {2, 2, 6, 7, 8} el del centro es 6. Si n es par, la mediana es el promedio de los dos valores centrales. A diferencia de la media, no le afectan los valores extremos.",
      math_razon: "n\\ \\text{par}: \\quad \\text{Me} = \\dfrac{x_{n/2} + x_{n/2+1}}{2}"
    },

    // ── MEDIANA · EJEMPLOS ────────────────────────────────────────────────────
    {
      id: "mdn-ej1",
      tipo: "concepto",
      titulo: "Mediana · Ejemplo 1 (n impar)",
      etiqueta: "Mediana · Ejemplo 1 / 3",
      formula: "3,\\ 4,\\ \\boxed{5},\\ 7,\\ 9 \\;\\Rightarrow\\; \\text{Me} = 5",
      svgDiagram: "dotplot-mediana",
      diagramData: [3, 7, 5, 9, 4],
      items: [],
      nota: "Primero se ordenan los datos. Con 5 datos (número impar) la mediana es el del centro: el tercero, 5. Deja dos datos a cada lado."
    },
    {
      id: "mdn-ej2",
      tipo: "concepto",
      titulo: "Mediana · Ejemplo 2 (n par)",
      etiqueta: "Mediana · Ejemplo 2 / 3",
      formula: "\\text{Me} = \\dfrac{20+30}{2} = 25",
      svgDiagram: "dotplot-mediana",
      diagramData: [10, 20, 30, 40],
      items: [],
      nota: "Con 4 datos (número par) no hay un único centro: la mediana es el promedio de los dos valores centrales, 20 y 30, es decir 25."
    },
    {
      id: "mdn-ej3",
      tipo: "concepto",
      titulo: "Mediana · Ejemplo 3 (resiste extremos)",
      etiqueta: "Mediana · Ejemplo 3 / 3",
      formula: "4,\\ 5,\\ \\boxed{6},\\ 7,\\ 100 \\;\\Rightarrow\\; \\text{Me} = 6",
      svgDiagram: "dotplot-mediana",
      diagramData: [4, 5, 6, 7, 100],
      items: [],
      nota: "Aunque el 100 es enorme, la mediana sigue siendo 6 (el valor central). A diferencia de la media, la mediana no se deja arrastrar por los valores extremos."
    },

    // ── MEDIANA · EJERCICIOS ──────────────────────────────────────────────────
    {
      id: "mdn-q1",
      tipo: "ejercicio",
      svgDiagram: "ej-est-mediana",
      etiqueta: "Mediana · Ejercicio 1 / 5",
      pregunta: "¿Cuál es la mediana del conjunto 3, 7, 5, 9, 4?",
      opciones: ["5", "7", "6"],
      correcta: 0,
      explicacion: "Ordenados: 3, 4, 5, 7, 9. El valor central es 5.",
      pasos: [{ pre: "Ordenar: ", math: "3,\\ 4,\\ \\boxed{5},\\ 7,\\ 9" }]
    },
    {
      id: "mdn-q2",
      tipo: "ejercicio",
      svgDiagram: "ej-est-mediana-par",
      etiqueta: "Mediana · Ejercicio 2 / 5",
      pregunta: "¿Cuál es la mediana de 10, 20, 30 y 40?",
      opciones: ["25", "30", "20"],
      correcta: 0,
      explicacion: "Número par de datos: la mediana es el promedio de los dos centrales (20 y 30) = 25.",
      pasos: [{ pre: "Mediana: ", math: "\\dfrac{20+30}{2} = 25" }]
    },
    {
      id: "mdn-q3",
      tipo: "ejercicio",
      etiqueta: "Mediana · Ejercicio 3 / 5",
      pregunta: "¿Cuál es la mediana de 8, 3 y 5?",
      opciones: ["5", "3", "8"],
      correcta: 0,
      explicacion: "Ordenados: 3, 5, 8. El valor central es 5.",
      pasos: [{ pre: "Ordenar: ", math: "3,\\ \\boxed{5},\\ 8" }]
    },
    {
      id: "mdn-q4",
      tipo: "ejercicio",
      etiqueta: "Mediana · Ejercicio 4 / 5",
      pregunta: "¿Cuál es la mediana de 2, 4, 6, 8, 10 y 12?",
      opciones: ["7", "6", "8"],
      correcta: 0,
      explicacion: "Seis datos: promedio de los dos centrales (6 y 8) = 7.",
      pasos: [{ pre: "Mediana: ", math: "\\dfrac{6+8}{2} = 7" }]
    },
    {
      id: "mdn-q5",
      tipo: "ejercicio",
      etiqueta: "Mediana · Ejercicio 5 / 5",
      pregunta: "La mediana de un conjunto de datos es el valor que:",
      opciones: ["deja la mitad de los datos por debajo y la mitad por encima", "se repite con más frecuencia", "es el promedio de todos los datos"],
      correcta: 0,
      explicacion: "La mediana es el valor central de los datos ordenados: divide el conjunto en dos mitades iguales.",
      pasos: []
    },

    // ── MODA ──────────────────────────────────────────────────────────────────
    {
      id: "moda",
      tipo: "criterio_detalle",
      titulo: "Moda",
      etiqueta: "El dato más frecuente",
      svgDiagram: "moda-detalle",
      enunciado: "La moda es el dato que aparece con mayor frecuencia. Es la única medida de tendencia central que también funciona con datos cualitativos.",
      math: "\\text{Mo} = \\text{dato con mayor frecuencia } f",
      por_que: "En {2, 2, 6, 7, 8} el 2 aparece dos veces y los demás una sola: la moda es 2. Un conjunto puede no tener moda (todos distintos) o tener varias (bimodal o multimodal).",
      math_razon: "\\{2, 2, 6, 7, 8\\} \\;\\Rightarrow\\; \\text{Mo} = 2"
    },

    // ── MODA · EJEMPLOS ───────────────────────────────────────────────────────
    {
      id: "mod-ej1",
      tipo: "concepto",
      titulo: "Moda · Ejemplo 1 (unimodal)",
      etiqueta: "Moda · Ejemplo 1 / 3",
      formula: "\\{2,4,4,5,6,4,7\\} \\;\\Rightarrow\\; \\text{Mo} = 4",
      svgDiagram: "barras-moda",
      diagramData: [2, 4, 4, 5, 6, 4, 7],
      items: [],
      nota: "Contamos cuántas veces aparece cada dato. El 4 aparece 3 veces, más que cualquier otro: es la moda. La barra más alta marca la moda."
    },
    {
      id: "mod-ej2",
      tipo: "concepto",
      titulo: "Moda · Ejemplo 2 (bimodal)",
      etiqueta: "Moda · Ejemplo 2 / 3",
      formula: "\\{1,2,2,3,3,4\\} \\;\\Rightarrow\\; \\text{Mo} = 2\\ \\text{y}\\ 3",
      svgDiagram: "barras-moda",
      diagramData: [1, 2, 2, 3, 3, 4],
      items: [],
      nota: "Aquí el 2 y el 3 empatan con dos apariciones cada uno: el conjunto es bimodal (tiene dos modas). Un conjunto puede tener una, varias o ninguna moda."
    },
    {
      id: "mod-ej3",
      tipo: "concepto",
      titulo: "Moda · Ejemplo 3 (datos cualitativos)",
      etiqueta: "Moda · Ejemplo 3 / 3",
      formula: "\\text{Mo} = \\text{rojo}",
      svgDiagram: "barras-moda",
      diagramData: ["rojo", "azul", "rojo", "verde", "rojo"],
      items: [],
      nota: "La moda es la única medida que funciona con datos cualitativos: aquí el color que más se repite es «rojo» (3 veces). No tendría sentido sacar la media de un color."
    },

    // ── MODA · EJERCICIOS ─────────────────────────────────────────────────────
    {
      id: "mod-q1",
      tipo: "ejercicio",
      svgDiagram: "ej-est-moda",
      etiqueta: "Moda · Ejercicio 1 / 5",
      pregunta: "En la serie 2, 4, 4, 5, 6, 4, 7, ¿cuál es la moda?",
      opciones: ["4", "5", "2"],
      correcta: 0,
      explicacion: "El 4 aparece 3 veces, más que cualquier otro dato: la moda es 4.",
      pasos: [{ pre: "Mayor frecuencia: ", math: "4 \\to 3 \\text{ veces}" }]
    },
    {
      id: "mod-q2",
      tipo: "ejercicio",
      etiqueta: "Moda · Ejercicio 2 / 5",
      pregunta: "¿Cuál es la moda de 1, 3, 3, 3, 5 y 7?",
      opciones: ["3", "1", "7"],
      correcta: 0,
      explicacion: "El 3 aparece 3 veces, más que los demás datos: la moda es 3.",
      pasos: []
    },
    {
      id: "mod-q3",
      tipo: "ejercicio",
      etiqueta: "Moda · Ejercicio 3 / 5",
      pregunta: "En una encuesta, los colores favoritos fueron: rojo, azul, rojo, verde, rojo. ¿Cuál es la moda?",
      opciones: ["rojo", "azul", "verde"],
      correcta: 0,
      explicacion: "«Rojo» aparece 3 veces, más que los demás: es la moda. La moda también sirve para datos cualitativos.",
      pasos: []
    },
    {
      id: "mod-q4",
      tipo: "ejercicio",
      etiqueta: "Moda · Ejercicio 4 / 5",
      pregunta: "¿Cuál es la moda del conjunto 2, 2, 5, 5, 8?",
      opciones: ["2 y 5 (bimodal)", "8", "no tiene moda"],
      correcta: 0,
      explicacion: "El 2 y el 5 aparecen dos veces cada uno: el conjunto es bimodal, con modas 2 y 5.",
      pasos: []
    },
    {
      id: "mod-q5",
      tipo: "ejercicio",
      etiqueta: "Moda · Ejercicio 5 / 5",
      pregunta: "¿Cuál es la moda del conjunto 1, 2, 3, 4, 5?",
      opciones: ["no tiene moda", "1", "5"],
      correcta: 0,
      explicacion: "Todos los datos aparecen una sola vez, así que ninguno se repite más: el conjunto no tiene moda.",
      pasos: []
    },

    // ── GRÁFICAS ESTADÍSTICAS ─────────────────────────────────────────────────
    {
      id: "graficas",
      tipo: "concepto",
      titulo: "Gráficas Estadísticas",
      etiqueta: "Ver los datos de un vistazo",
      formula: "\\text{altura de la barra} \\;\\propto\\; f",
      svgDiagram: "graficas-barras",
      items: [
        { math: "\\text{barras}", texto: "compara categorías con barras separadas (cualitativos o discretos)" },
        { math: "\\text{histograma}", texto: "datos agrupados en intervalos, con barras juntas (continuos)" },
        { math: "\\text{circular}", texto: "muestra la proporción de cada parte respecto al total" }
      ],
      nota: "Esta gráfica de barras representa la tabla de frecuencias de calificaciones que vimos antes: cada barra es la frecuencia de una calificación. La más alta (el 8) es el valor más común, es decir, la moda."
    },

    // ── EJEMPLO: GRÁFICA DE BARRAS ────────────────────────────────────────────
    {
      id: "ej-barras",
      tipo: "concepto",
      titulo: "Ejemplo: Gráfica de Barras",
      etiqueta: "Comparar categorías",
      formula: "\\text{Deporte favorito de 20 alumnos}",
      svgDiagram: "ej-barras-deporte",
      items: [
        { math: "1", texto: "Eje horizontal: las categorías (fútbol, básquet, voleibol, natación)" },
        { math: "2", texto: "Eje vertical: la frecuencia, cuántos alumnos eligieron cada una" },
        { math: "3", texto: "Barras separadas: son categorías distintas (variable cualitativa)" }
      ],
      nota: "El fútbol, con 8 alumnos, es la barra más alta: la categoría más frecuente (la moda). Las barras van separadas porque las categorías no son números. Las alturas suman el total: 8 + 5 + 4 + 3 = 20."
    },

    // ── EJEMPLO: HISTOGRAMA ───────────────────────────────────────────────────
    {
      id: "ej-histograma",
      tipo: "concepto",
      titulo: "Ejemplo: Histograma",
      etiqueta: "Datos continuos en intervalos",
      formula: "\\text{Estatura (cm) de 20 alumnos}",
      svgDiagram: "ej-histograma-estatura",
      items: [
        { math: "1", texto: "La variable es continua (estatura), así que se agrupa en intervalos o clases" },
        { math: "2", texto: "Cada barra es la frecuencia de un intervalo: [160, 170) tiene 9 alumnos" },
        { math: "3", texto: "Las barras se tocan (van juntas) porque los intervalos son continuos" }
      ],
      nota: "El intervalo [160, 170), con 9 alumnos, es el más frecuente (la clase modal). A diferencia de la gráfica de barras, aquí las barras se tocan: no hay huecos entre los intervalos. Las frecuencias suman 4 + 9 + 5 + 2 = 20."
    },

    // ── EJEMPLO: GRÁFICA CIRCULAR ─────────────────────────────────────────────
    {
      id: "ej-circular",
      tipo: "concepto",
      titulo: "Ejemplo: Gráfica Circular",
      etiqueta: "Proporción del total",
      formula: "\\text{sector} = f_r \\times 360°",
      svgDiagram: "ej-circular-transporte",
      items: [
        { math: "f_r = f/N", texto: "Frecuencia relativa de cada categoría: Camión 10/20 = 0.50" },
        { math: "\\times 360°", texto: "Por 360° se obtiene el ángulo del sector: 0.50 × 360° = 180°" },
        { math: "\\times 100", texto: "Por 100 se obtiene el porcentaje: 0.50 × 100 = 50 %" }
      ],
      nota: "Camión: 10/20 = 0.50 → 180° (50 %). Auto: 6/20 = 0.30 → 108° (30 %). Bici: 4/20 = 0.20 → 72° (20 %). El sector más grande (camión) es el más frecuente, y todos juntos suman 360° (100 %)."
    },

    // ── EJERCICIOS · GRÁFICAS ESTADÍSTICAS ────────────────────────────────────
    {
      id: "eg1",
      tipo: "ejercicio",
      etiqueta: "Gráficas Estadísticas · Ejercicio 1 / 5",
      pregunta: "¿Qué gráfica conviene para datos continuos agrupados en intervalos?",
      opciones: ["gráfica de barras separadas", "histograma", "gráfica circular"],
      correcta: 1,
      explicacion: "El histograma usa barras juntas (sin espacio) porque los intervalos son continuos.",
      pasos: []
    },
    {
      id: "eg2",
      tipo: "ejercicio",
      etiqueta: "Gráficas Estadísticas · Ejercicio 2 / 5",
      pregunta: "¿Qué gráfica muestra la proporción de cada parte respecto al total?",
      opciones: ["la gráfica circular", "la gráfica de barras", "el histograma"],
      correcta: 0,
      explicacion: "La gráfica circular (de pastel) divide el círculo en sectores proporcionales a cada categoría.",
      pasos: []
    },
    {
      id: "eg3",
      tipo: "ejercicio",
      etiqueta: "Gráficas Estadísticas · Ejercicio 3 / 5",
      pregunta: "En una gráfica de barras de frecuencias, la barra más alta corresponde a:",
      opciones: ["la media", "la moda", "la mediana"],
      correcta: 1,
      explicacion: "La barra más alta es la del dato que más se repite, es decir, la moda.",
      pasos: []
    },
    {
      id: "eg4",
      tipo: "ejercicio",
      etiqueta: "Gráficas Estadísticas · Ejercicio 4 / 5",
      pregunta: "¿Cuál es la diferencia principal entre una gráfica de barras y un histograma?",
      opciones: ["el histograma usa barras juntas para datos continuos", "no hay ninguna diferencia", "la gráfica de barras solo sirve para porcentajes"],
      correcta: 0,
      explicacion: "Las barras van separadas (categorías o datos discretos); el histograma las pone juntas porque representa intervalos continuos.",
      pasos: []
    },
    {
      id: "eg5",
      tipo: "ejercicio",
      etiqueta: "Gráficas Estadísticas · Ejercicio 5 / 5",
      pregunta: "En una gráfica circular, una categoría con frecuencia relativa 0.25 abarca un sector de:",
      opciones: ["25°", "90°", "180°"],
      correcta: 1,
      explicacion: "El sector = fᵣ × 360° = 0.25 × 360° = 90°.",
      pasos: [
        { pre: "Sector: ", math: "0.25 \\times 360° = 90°" }
      ]
    },

    // ── INTERPRETAR GRÁFICAS ──────────────────────────────────────────────────
    {
      id: "interpretar",
      tipo: "concepto",
      titulo: "Interpretar Gráficas",
      etiqueta: "Leer y sacar conclusiones",
      formula: "\\text{sector} = \\dfrac{f}{N} \\times 360°",
      svgDiagram: "graficas-circular",
      items: [
        { math: "\\text{lee los ejes}", texto: "identifica qué representa cada eje y en qué unidades" },
        { math: "\\text{compara}", texto: "la barra o sector más grande es el valor más frecuente (la moda)" },
        { math: "f_r \\times 100", texto: "en la gráfica circular cada sector es un porcentaje del total" }
      ],
      nota: "En esta gráfica circular, el sector más grande (40 %) corresponde a la calificación 8: fue la más frecuente. Los sectores siempre suman 100 % (360°)."
    },

    // ── INTERPRETAR · EJEMPLOS ────────────────────────────────────────────────
    {
      id: "int-ej1",
      tipo: "concepto",
      titulo: "Interpretar · Ejemplo 1 (datos cualitativos)",
      etiqueta: "Barras con categorías",
      formula: "\\text{Deporte favorito de 20 alumnos}",
      svgDiagram: "ej-barras-deporte",
      items: [
        { math: "\\text{Mo}", texto: "Sí podemos leer la moda: fútbol (8) es la barra más alta, la categoría favorita" },
        { math: "N = 8+5+4+3", texto: "Sí podemos obtener el total: sumando las alturas, N = 20 alumnos" },
        { math: "8 - 3 = 5", texto: "Sí podemos comparar: 5 alumnos más prefieren fútbol que natación" }
      ],
      nota: "Cuando los datos son cualitativos (categorías como deportes o colores), la gráfica solo permite contar y comparar frecuencias. NO tiene sentido calcular media ni mediana: no se puede «promediar» fútbol con natación. La única medida de tendencia central disponible es la moda."
    },
    {
      id: "int-ej2",
      tipo: "concepto",
      titulo: "Interpretar · Ejemplo 2 (datos cuantitativos)",
      etiqueta: "Barras con números",
      formula: "\\bar{x} = \\dfrac{6(2)+7(5)+8(8)+9(4)+10(1)}{20} = \\dfrac{157}{20} = 7.85",
      svgDiagram: "graficas-barras",
      items: [
        { math: "\\text{tabla}", texto: "La gráfica permite reconstruir la tabla: el 6 salió 2 veces, el 7 cinco, el 8 ocho, el 9 cuatro y el 10 una" },
        { math: "\\bar{x},\\ \\text{Me},\\ \\text{Mo}", texto: "Como los datos son números, podemos calcular las tres medidas: media 7.85, mediana 8 y moda 8" },
        { math: "5+8+4+1 = 18", texto: "También responder preguntas acumuladas: 18 alumnos sacaron 7 o más" }
      ],
      nota: "Misma gráfica de barras, pero ahora las categorías son números (calificaciones): eso lo desbloquea todo. Cada barra dice cuántas veces salió cada valor, así que la gráfica contiene los 20 datos completos y podemos calcular cualquier medida a partir de ella."
    },
    {
      id: "int-ej3",
      tipo: "concepto",
      titulo: "Interpretar · Ejemplo 3 (datos agrupados)",
      etiqueta: "Histograma de intervalos",
      formula: "\\text{Estatura (cm) de 20 alumnos}",
      svgDiagram: "ej-histograma-estatura",
      items: [
        { math: "[160, 170)", texto: "Sí podemos leer la clase modal: el intervalo más frecuente, con 9 alumnos" },
        { math: "4 + 9 = 13", texto: "Sí podemos acumular: 13 alumnos miden menos de 170 cm" },
        { math: "x = \\;?", texto: "NO podemos recuperar los datos exactos: solo sabemos que 9 miden «entre 160 y 170»" }
      ],
      nota: "Al agrupar datos continuos en intervalos se gana claridad pero se pierde detalle: el histograma ya no dice las estaturas individuales. Por eso de un histograma solo se obtienen aproximaciones de la media o la mediana, no sus valores exactos. A cambio, la forma de las barras muestra de un vistazo dónde se concentran los datos."
    },
    {
      id: "int-ej4",
      tipo: "concepto",
      titulo: "Interpretar · Ejemplo 4 (porcentajes)",
      etiqueta: "Gráfica circular",
      formula: "f = f_r \\times N = 0.40 \\times 20 = 8",
      svgDiagram: "graficas-circular",
      items: [
        { math: "f_r", texto: "La circular muestra proporciones, no cantidades: el 8 fue el 40 % de las calificaciones" },
        { math: "0.40 \\times 20 = 8", texto: "Si conocemos el total (N = 20), recuperamos las frecuencias: 40 % de 20 = 8 alumnos" },
        { math: "40+20+5 = 65\\,\\%", texto: "Y podemos sumar sectores: el 65 % del grupo sacó 8 o más" }
      ],
      nota: "Sin el total N, una gráfica circular solo permite hablar de porcentajes («el 40 % sacó 8»), no de cantidades («8 alumnos sacaron 8»). Es la misma información de la gráfica de barras del ejemplo 2, pero vista como proporción: por eso la circular es ideal para preguntas tipo «¿qué parte del total…?»."
    },

    // ── EJERCICIOS · INTERPRETAR GRÁFICAS ─────────────────────────────────────
    {
      id: "ei1",
      tipo: "ejercicio",
      etiqueta: "Interpretar Gráficas · Ejercicio 1 / 5",
      pregunta: "En una gráfica circular, un sector de 90° representa qué porcentaje del total?",
      opciones: ["25 %", "50 %", "90 %"],
      correcta: 0,
      explicacion: "El círculo completo es 360° = 100 %. Entonces 90° es 90/360 = 0.25, es decir, 25 %.",
      pasos: [
        { pre: "Porcentaje: ", math: "\\dfrac{90°}{360°} = 25\\,\\%" }
      ]
    },
    {
      id: "ei2",
      tipo: "ejercicio",
      etiqueta: "Interpretar Gráficas · Ejercicio 2 / 5",
      pregunta: "El sector más grande de una gráfica circular corresponde a:",
      opciones: ["el valor más frecuente", "el valor menos frecuente", "la media de los datos"],
      correcta: 0,
      explicacion: "El sector más grande tiene la mayor frecuencia, es decir, la categoría que más se repite (la moda).",
      pasos: []
    },
    {
      id: "ei3",
      tipo: "ejercicio",
      etiqueta: "Interpretar Gráficas · Ejercicio 3 / 5",
      pregunta: "Los sectores de una gráfica circular siempre suman:",
      opciones: ["100 % (360°)", "depende de los datos", "50 %"],
      correcta: 0,
      explicacion: "La gráfica circular reparte el total: todos los sectores juntos forman el círculo completo, 360° o 100 %.",
      pasos: []
    },
    {
      id: "ei4",
      tipo: "ejercicio",
      svgDiagram: "graficas-barras",
      etiqueta: "Interpretar Gráficas · Ejercicio 4 / 5",
      pregunta: "En la gráfica de barras de las calificaciones, ¿cuál fue la calificación más frecuente?",
      opciones: ["8", "10", "6"],
      correcta: 0,
      explicacion: "La barra más alta corresponde al 8 (con frecuencia 8), así que fue la calificación más común.",
      pasos: []
    },
    {
      id: "ei5",
      tipo: "ejercicio",
      etiqueta: "Interpretar Gráficas · Ejercicio 5 / 5",
      pregunta: "Una categoría representa el 30 % del total. ¿Cuántos grados abarca su sector en una gráfica circular?",
      opciones: ["108°", "30°", "300°"],
      correcta: 0,
      explicacion: "Sector = porcentaje × 360° = 0.30 × 360° = 108°.",
      pasos: [
        { pre: "Sector: ", math: "0.30 \\times 360° = 108°" }
      ]
    },

    // ── DISPERSIÓN (PANORAMA) ─────────────────────────────────────────────────
    {
      id: "dispersion",
      tipo: "concepto",
      titulo: "Medidas de Dispersión",
      etiqueta: "¿Qué tan juntos o separados están?",
      formula: "R = x_{\\max} - x_{\\min}",
      svgDiagram: "dispersion",
      items: [
        { math: "R\\ \\text{(rango)}", texto: "diferencia entre el dato mayor y el menor" },
        { math: "\\sigma^2\\ \\text{(varianza)}", texto: "promedio de los cuadrados de las distancias a la media" },
        { math: "\\sigma\\ \\text{(desv. estándar)}", texto: "raíz de la varianza; en las mismas unidades que los datos" }
      ],
      nota: "Dos conjuntos pueden tener la misma media (8) y verse muy distintos: arriba los datos están juntos (poca dispersión) y abajo, muy separados (mucha dispersión). Este tema aparece sobre todo en el EXANI-II; en el EXANI-I casi no se pregunta."
    },

    // ── LIMITACIÓN DEL RANGO ──────────────────────────────────────────────────
    {
      id: "rango-limite",
      tipo: "criterio_detalle",
      titulo: "Limitación del Rango",
      etiqueta: "Un outlier puede engañar",
      svgDiagram: "rango-outlier",
      enunciado: "El rango solo usa los dos valores extremos e ignora cómo se distribuyen los demás. Un único dato atípico basta para inflar el rango aunque el resto esté muy junto.",
      math: "R = x_{\\max} - x_{\\min} \\quad \\text{(solo depende de dos datos)}",
      por_que: "A = {3,4,5,6,7}: cuatro datos agrupados entre 3 y 7, R = 4. B = {3,4,5,6,23}: cuatro datos siguen entre 3 y 6, pero el 23 dispara el rango a 20. El rango «miente» por culpa de ese único valor extremo.",
      math_razon: "A\\!: R = 7-3 = 4 \\qquad B\\!: R = 23-3 = 20"
    },

    // ── DESVIACIÓN ESTÁNDAR ───────────────────────────────────────────────────
    {
      id: "desviacion",
      tipo: "criterio_detalle",
      titulo: "Desviación Estándar",
      etiqueta: "La dispersión típica",
      svgDiagram: "desviacion-detalle",
      enunciado: "La desviación estándar mide qué tan separados están los datos respecto a la media. Si es pequeña, los datos se agrupan cerca del promedio; si es grande, están dispersos.",
      math: "\\sigma = \\sqrt{\\dfrac{\\sum (x - \\bar{x})^2}{n}}",
      por_que: "Con {2, 4, 6, 8, 10} la media es 6. Las distancias a 6 son −4, −2, 0, 2, 4; sus cuadrados suman 40. La varianza es 40/5 = 8 y la desviación estándar es √8 ≈ 2.83.",
      math_razon: "\\sigma^2 = \\dfrac{16+4+0+4+16}{5} = 8, \\quad \\sigma = \\sqrt{8} \\approx 2.83"
    },

    // ── PROCESO DE CÁLCULO DE σ ───────────────────────────────────────────────
    {
      id: "proceso-sigma",
      tipo: "criterio_detalle",
      titulo: "Cómo Calcular la Desviación Estándar",
      etiqueta: "Paso a paso con {4, 6, 8}",
      svgDiagram: "proceso-sigma",
      enunciado: "① Calcula la media  ② Resta la media a cada dato (x − x̄)  ③ Eleva al cuadrado  ④ Suma los cuadrados  ⑤ Divide entre n (varianza)  ⑥ Saca la raíz cuadrada.",
      math: "\\sigma = \\sqrt{\\dfrac{\\sum (x - \\bar{x})^2}{n}}",
      por_que: "Para {4, 6, 8}: media = 6. Distancias: −2, 0, +2. Cuadrados: 4, 0, 4. Suma = 8. Varianza = 8/3 ≈ 2.67. Desviación estándar = √2.67 ≈ 1.63.",
      math_razon: "\\sigma = \\sqrt{\\dfrac{4+0+4}{3}} = \\sqrt{\\dfrac{8}{3}} \\approx 1.63"
    },

    // ── EJERCICIOS · DISPERSIÓN ───────────────────────────────────────────────
    {
      id: "eb4",
      tipo: "ejercicio",
      svgDiagram: "ej-est-rango",
      etiqueta: "Dispersión · Ejercicio 1 / 5",
      pregunta: "Las temperaturas registradas fueron 12, 7, 20, 5 y 15 °C. ¿Cuál es el rango?",
      opciones: ["15", "20", "8"],
      correcta: 0,
      explicacion: "Rango = máximo − mínimo = 20 − 5 = 15.",
      pasos: [
        { pre: "Mayor y menor: ", math: "x_{\\max}=20,\\quad x_{\\min}=5" },
        { pre: "Rango: ", math: "R = 20 - 5 = 15" }
      ]
    },
    {
      id: "ed2",
      tipo: "ejercicio",
      etiqueta: "Dispersión · Ejercicio 2 / 5",
      pregunta: "El conjunto {2, 3, 4, 5, 30} tiene rango 28. ¿Es ese rango un buen indicador de la dispersión típica del conjunto?",
      opciones: [
        "No: un solo dato extremo infla el rango aunque los demás estén muy juntos",
        "Sí: el rango siempre refleja bien cómo están distribuidos todos los datos",
        "Sí: si el rango es grande, todos los datos deben estar dispersos"
      ],
      correcta: 0,
      explicacion: "Cuatro de los cinco datos (2, 3, 4, 5) están muy juntos; solo el 30 es atípico. El rango captura ese extremo, pero no describe la dispersión del resto. Por eso se prefiere la desviación estándar, que considera todos los datos.",
      pasos: [
        { pre: "Rango: ", math: "R = 30 - 2 = 28" },
        { pre: "Pero 4 de 5 datos caben en: ", math: "[2,\\ 5], \\text{ amplitud apenas } 3" }
      ]
    },
    {
      id: "ed3",
      tipo: "ejercicio",
      etiqueta: "Dispersión · Ejercicio 3 / 5",
      pregunta: "Para el conjunto {3, 6, 9}, la media es 6. ¿Cuál es la desviación estándar?",
      opciones: ["√6 ≈ 2.45", "6", "√18 ≈ 4.24"],
      correcta: 0,
      explicacion: "Distancias a la media: 3−6=−3, 6−6=0, 9−6=+3. Cuadrados: 9, 0, 9. Suma = 18. Varianza = 18/3 = 6. Desviación estándar = √6 ≈ 2.45.",
      pasos: [
        { pre: "Cuadrados de distancias: ", math: "(-3)^2 + 0^2 + 3^2 = 9+0+9 = 18" },
        { pre: "Varianza: ", math: "\\sigma^2 = \\tfrac{18}{3} = 6" },
        { pre: "Desviación estándar: ", math: "\\sigma = \\sqrt{6} \\approx 2.45" }
      ]
    },
    {
      id: "ed4",
      tipo: "ejercicio",
      etiqueta: "Dispersión · Ejercicio 4 / 5",
      pregunta: "Para el conjunto {2, 4, 6, 8, 10}, la media es 6 y la varianza es 8. ¿Cuál es la desviación estándar?",
      opciones: ["√8 ≈ 2.83", "8", "64"],
      correcta: 0,
      explicacion: "La desviación estándar es la raíz cuadrada de la varianza: σ = √8 ≈ 2.83.",
      pasos: [
        { pre: "Desviación: ", math: "\\sigma = \\sqrt{8} \\approx 2.83" }
      ]
    },
    {
      id: "ed5",
      tipo: "ejercicio",
      etiqueta: "Dispersión · Ejercicio 5 / 5",
      pregunta: "A diferencia de la varianza, la desviación estándar tiene la ventaja de expresarse:",
      opciones: ["en las mismas unidades que los datos", "siempre en porcentaje", "siempre al cuadrado"],
      correcta: 0,
      explicacion: "La varianza queda en unidades al cuadrado; al sacar la raíz, la desviación estándar vuelve a las unidades originales de los datos.",
      pasos: []
    },

    // ── RESUMEN ───────────────────────────────────────────────────────────────
    {
      id: "resumen",
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Lo que aprendimos hoy",
      puntos: [
        { titulo: "Variables", texto: "cualitativas (nominal / ordinal) y cuantitativas (discreta / continua)" },
        { math: "\\bar{x} = \\dfrac{\\sum x}{n}", texto: "media: el promedio; es sensible a los valores extremos" },
        { math: "\\text{Me}", texto: "mediana: el valor central de los datos ordenados" },
        { math: "\\text{Mo}", texto: "moda: el dato más frecuente (también sirve para cualitativos)" },
        { math: "R = x_{\\max} - x_{\\min}", texto: "rango: la medida de dispersión más simple" },
        { math: "\\sigma = \\sqrt{\\tfrac{\\sum (x-\\bar{x})^2}{n}}", texto: "desviación estándar: separación típica respecto a la media" },
        { titulo: "Tablas y gráficas", texto: "f, fᵣ y F organizan los datos; barras/histograma comparan y la circular muestra %" }
      ]
    }

  ]
};
