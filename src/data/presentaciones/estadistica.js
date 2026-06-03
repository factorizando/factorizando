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

    // ── VARIABLES Y DATOS ─────────────────────────────────────────────────────
    {
      id: "variables",
      tipo: "concepto",
      titulo: "Variables y Datos",
      etiqueta: "¿Qué estamos midiendo?",
      formula: "N = \\text{población}, \\qquad n = \\text{muestra}",
      svgDiagram: "tipos-variable",
      items: [
        { math: "\\text{cualitativa}", texto: "describe cualidades, no se mide con números: color, sexo, marca" },
        { math: "\\text{cuantitativa}", texto: "se expresa con números: edad, estatura, calificación" },
        { math: "\\text{discreta}", texto: "valores aislados que se cuentan: nº de hijos, goles" },
        { math: "\\text{continua}", texto: "cualquier valor de un intervalo: peso, tiempo, estatura" }
      ],
      nota: "La población (N) es el total que se estudia; la muestra (n) es una parte representativa de ella. La estadística describe los datos para entenderlos."
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

    // ── EJERCICIOS EXANI-I ────────────────────────────────────────────────────
    {
      id: "eb1",
      tipo: "ejercicio",
      svgDiagram: "ej-est-media",
      etiqueta: "Estadística · Ejercicio 1 / 6",
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
      etiqueta: "Estadística · Ejercicio 2 / 6",
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
      etiqueta: "Estadística · Ejercicio 3 / 6",
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
      id: "eb4",
      tipo: "ejercicio",
      svgDiagram: "ej-est-rango",
      etiqueta: "Estadística · Ejercicio 4 / 6",
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
      id: "eb5",
      tipo: "ejercicio",
      svgDiagram: "ej-est-tabla",
      etiqueta: "Estadística · Ejercicio 5 / 6",
      pregunta: "Según la tabla de frecuencias, ¿cuántos alumnos obtuvieron 8 o más?",
      opciones: ["13", "8", "15"],
      correcta: 0,
      explicacion: "Se suman las frecuencias de 8, 9 y 10: 8 + 4 + 1 = 13.",
      pasos: [
        { pre: "Frecuencias de 8, 9 y 10: ", math: "8 + 4 + 1 = 13" }
      ]
    },

    {
      id: "eb6",
      tipo: "ejercicio",
      svgDiagram: "ej-est-mediana-par",
      etiqueta: "Estadística · Ejercicio 6 / 6",
      pregunta: "¿Cuál es la mediana de 10, 20, 30 y 40?",
      opciones: ["25", "30", "20"],
      correcta: 0,
      explicacion: "Como hay un número par de datos, la mediana es el promedio de los dos centrales: (20+30)/2 = 25.",
      pasos: [
        { pre: "Dos centrales: ", math: "20 \\text{ y } 30" },
        { pre: "Promedio: ", math: "\\text{Me} = \\dfrac{20+30}{2} = 25" }
      ]
    },

    // ── RESUMEN ───────────────────────────────────────────────────────────────
    {
      id: "resumen",
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Lo que aprendimos hoy",
      puntos: [
        { math: "\\bar{x} = \\dfrac{\\sum x}{n}", texto: "media: el promedio; es sensible a los valores extremos" },
        { math: "\\text{Me}", texto: "mediana: el valor central de los datos ordenados" },
        { math: "\\text{Mo}", texto: "moda: el dato más frecuente (también sirve para cualitativos)" },
        { math: "R = x_{\\max} - x_{\\min}", texto: "rango: la medida de dispersión más simple" },
        { math: "\\sigma = \\sqrt{\\tfrac{\\sum (x-\\bar{x})^2}{n}}", texto: "desviación estándar: separación típica respecto a la media" },
        { titulo: "Tablas", texto: "f, fᵣ y F organizan los datos; las frecuencias suman N" },
        { titulo: "Gráficas", texto: "barras e histograma comparan; la circular muestra porcentajes" }
      ]
    }

  ]
};
