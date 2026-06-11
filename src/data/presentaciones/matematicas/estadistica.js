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
      subtitulo: "Tablas de frecuencia, gráficas, medidas de tendencia central y de dispersión",
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
      nota: "Esta gráfica de barras representa la misma tabla anterior: cada barra es la frecuencia de una calificación. La más alta (el 8) es el valor más común."
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

    // ── EJERCICIOS · TENDENCIA CENTRAL ────────────────────────────────────────
    {
      id: "eb1",
      tipo: "ejercicio",
      svgDiagram: "ej-est-media",
      etiqueta: "Tendencia Central · Ejercicio 1 / 5",
      pregunta: "Las calificaciones de un alumno fueron 8, 6, 7, 9 y 10. ¿Cuál es su promedio (media)?",
      opciones: ["8", "7.5", "9"],
      correcta: 0,
      explicacion: "La suma es 40 y hay 5 datos: x̄ = 40/5 = 8.",
      pasos: [
        { pre: "Suma: ", math: "8+6+7+9+10 = 40" },
        { pre: "Media: ", math: "\\bar{x} = \\dfrac{40}{5} = 8" }
      ]
    },
    {
      id: "eb2",
      tipo: "ejercicio",
      svgDiagram: "ej-est-mediana",
      etiqueta: "Tendencia Central · Ejercicio 2 / 5",
      pregunta: "¿Cuál es la mediana del conjunto 3, 7, 5, 9, 4?",
      opciones: ["5", "7", "6"],
      correcta: 0,
      explicacion: "Ordenados: 3, 4, 5, 7, 9. El valor central es 5.",
      pasos: [
        { pre: "Ordenar: ", math: "3,\\ 4,\\ \\boxed{5},\\ 7,\\ 9" },
        { pre: "Valor central: ", math: "\\text{Me} = 5" }
      ]
    },
    {
      id: "eb3",
      tipo: "ejercicio",
      svgDiagram: "ej-est-moda",
      etiqueta: "Tendencia Central · Ejercicio 3 / 5",
      pregunta: "En la serie 2, 4, 4, 5, 6, 4, 7, ¿cuál es la moda?",
      opciones: ["4", "5", "2"],
      correcta: 0,
      explicacion: "El 4 aparece 3 veces, más que cualquier otro dato: la moda es 4.",
      pasos: [
        { pre: "Frecuencia mayor: ", math: "4 \\to 3 \\text{ veces}" },
        { pre: "Moda: ", math: "\\text{Mo} = 4" }
      ]
    },
    {
      id: "eb6",
      tipo: "ejercicio",
      svgDiagram: "ej-est-mediana-par",
      etiqueta: "Tendencia Central · Ejercicio 4 / 5",
      pregunta: "¿Cuál es la mediana de 10, 20, 30 y 40?",
      opciones: ["25", "30", "20"],
      correcta: 0,
      explicacion: "Como hay un número par de datos, la mediana es el promedio de los dos centrales: (20+30)/2 = 25.",
      pasos: [
        { pre: "Dos centrales: ", math: "20 \\text{ y } 30" },
        { pre: "Promedio: ", math: "\\text{Me} = \\dfrac{20+30}{2} = 25" }
      ]
    },
    {
      id: "ec5",
      tipo: "ejercicio",
      etiqueta: "Tendencia Central · Ejercicio 5 / 5",
      pregunta: "¿Cuál medida de tendencia central se puede usar con datos cualitativos, como el color favorito?",
      opciones: ["la media", "la moda", "la mediana"],
      correcta: 1,
      explicacion: "La media y la mediana necesitan números; la moda solo cuenta cuál se repite más, así que también sirve para datos cualitativos.",
      pasos: []
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
      nota: "Dos conjuntos pueden tener la misma media (8) y verse muy distintos: arriba los datos están juntos (poca dispersión) y abajo, muy separados (mucha dispersión)."
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
      pregunta: "¿Cuál es el rango del conjunto 4, 9, 2, 7?",
      opciones: ["7", "9", "5"],
      correcta: 0,
      explicacion: "Rango = mayor − menor = 9 − 2 = 7.",
      pasos: [
        { pre: "Rango: ", math: "R = 9 - 2 = 7" }
      ]
    },
    {
      id: "ed3",
      tipo: "ejercicio",
      etiqueta: "Dispersión · Ejercicio 3 / 5",
      pregunta: "Si la desviación estándar de un conjunto de datos es muy pequeña, significa que los datos:",
      opciones: ["están muy dispersos", "están agrupados cerca de la media", "no tienen media"],
      correcta: 1,
      explicacion: "Una desviación estándar pequeña indica poca separación respecto al promedio: los datos están agrupados cerca de la media.",
      pasos: []
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
