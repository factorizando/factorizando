// Vocabulario de temas de los talleres de regularización.
//
// El tema no vive en el taller sino en cada *actividad* de adentro: el taller
// de divisiones trabaja reparto, residuo y algoritmo en pantallas distintas, y
// la Carrera de Autos cambia de banco según el bloque de edad. Por eso cada
// TALLER declara `actividades: [{ id, nombre, edades, temas: [...] }]` y aquí
// vive la lista canónica de temas a la que apuntan.
//
// Reglas para no romper la búsqueda:
// - Un tema nuevo se agrega aquí primero; `talleresIndex.js` avisa en consola
//   (solo en dev) si una actividad apunta a un id que no existe.
// - `alias` es lo que el maestro teclearía: "adjetivos", "tablas", "sobra".
//   No hace falta repetir el label ni sus palabras.

export const AREAS_ORDEN = [
  "Números y operaciones", "División", "Fracciones y decimales",
  "Geometría y medida", "Datos y patrones", "Problemas",
  "Ortografía", "Gramática", "Vocabulario", "Decodificación y fluidez", "Comprensión lectora",
];

export const TEMAS = [
  // ── Matemáticas ─────────────────────────────────────────────────────────
  { id: "suma-resta", label: "Suma y resta", materia: "Matemáticas", area: "Números y operaciones",
    alias: ["sumar", "restar", "llevada", "adición", "sustracción"] },
  { id: "multiplicacion", label: "Multiplicación y tablas", materia: "Matemáticas", area: "Números y operaciones",
    alias: ["tablas", "multiplicar", "producto", "por"] },
  { id: "dobles-mitades", label: "Dobles, mitades y triples", materia: "Matemáticas", area: "Números y operaciones",
    alias: ["doble", "mitad", "triple"] },
  { id: "valor-posicional", label: "Valor posicional y redondeo", materia: "Matemáticas", area: "Números y operaciones",
    alias: ["decenas", "centenas", "unidades de millar", "redondear", "sucesor", "antecesor", "comparar números", "mayor que"] },
  { id: "multiplos-divisores", label: "Múltiplos y divisores", materia: "Matemáticas", area: "Números y operaciones",
    alias: ["par", "impar", "pares", "impares", "números pares", "números impares", "paridad",
            "mcm", "mcd", "mínimo común múltiplo", "máximo común divisor"] },
  { id: "potencias-raices", label: "Potencias y raíces", materia: "Matemáticas", area: "Números y operaciones",
    alias: ["cuadrado", "al cuadrado", "raíz cuadrada", "exponente"] },
  { id: "potencias-diez", label: "Multiplicar por 10, 100 y 1 000", materia: "Matemáticas", area: "Números y operaciones",
    alias: ["potencias de diez", "por diez", "por cien", "agregar ceros", "ceros"] },
  { id: "distributiva", label: "Propiedad distributiva", materia: "Matemáticas", area: "Números y operaciones",
    alias: ["descomponer", "modelo de área", "caja", "rejilla", "romper el número"] },
  { id: "calculo-mental", label: "Cálculo mental y atajos", materia: "Matemáticas", area: "Números y operaciones",
    alias: ["trucos", "atajos", "tips", "tip", "mentalmente", "de cabeza", "sin lápiz", "sin algoritmo"] },
  { id: "estimacion", label: "Estimación y cálculo aproximado", materia: "Matemáticas", area: "Números y operaciones",
    alias: ["estimar", "aproximar", "al tanteo", "razonable", "descartar", "revisar el resultado", "orden de magnitud"] },

  { id: "division-reparto", label: "División como reparto", materia: "Matemáticas", area: "División",
    alias: ["repartir", "partes iguales", "dividir", "reparto"] },
  { id: "division-exacta", label: "División exacta", materia: "Matemáticas", area: "División",
    alias: ["dividir", "divisiones", "cociente"] },
  { id: "residuo", label: "Residuo: lo que sobra", materia: "Matemáticas", area: "División",
    alias: ["sobra", "resto", "división inexacta"] },
  { id: "division-algoritmo", label: "Algoritmo de la división larga", materia: "Matemáticas", area: "División",
    alias: ["casita", "división larga", "dígito por dígito", "divisiones"] },

  { id: "fracciones", label: "Fracciones", materia: "Matemáticas", area: "Fracciones y decimales",
    alias: ["medios", "cuartos", "numerador", "denominador", "quebrados"] },
  { id: "operaciones-fracciones", label: "Sumar y restar fracciones", materia: "Matemáticas", area: "Fracciones y decimales",
    alias: ["sumar fracciones", "restar fracciones", "mismo denominador", "común denominador"] },
  { id: "fraccion-decimal", label: "De fracción a decimal y de vuelta", materia: "Matemáticas", area: "Fracciones y decimales",
    alias: ["convertir", "medio es 0.5", "equivalencia decimal"] },
  { id: "comparar-fracciones", label: "Comparar fracciones", materia: "Matemáticas", area: "Fracciones y decimales",
    alias: ["cuál es mayor", "mayor fracción", "ordenar fracciones", "un tercio o un medio", "denominador grande"] },
  { id: "fracciones-equivalentes", label: "Fracciones equivalentes", materia: "Matemáticas", area: "Fracciones y decimales",
    alias: ["equivalente", "valen lo mismo", "simplificar", "dos cuartos", "amplificar"] },
  { id: "fraccion-cantidad", label: "Fracción de una cantidad", materia: "Matemáticas", area: "Fracciones y decimales",
    alias: ["tres cuartos de", "la mitad de", "parte de un total"] },
  { id: "decimales", label: "Decimales", materia: "Matemáticas", area: "Fracciones y decimales",
    alias: ["punto decimal", "décimos", "centésimos"] },
  { id: "porcentajes", label: "Porcentajes", materia: "Matemáticas", area: "Fracciones y decimales",
    alias: ["por ciento", "%", "descuento"] },

  { id: "figuras", label: "Figuras y sus lados", materia: "Matemáticas", area: "Geometría y medida",
    alias: ["triángulo", "cuadrado", "pentágono", "hexágono", "polígono", "geometría"] },
  { id: "cuerpos-geometricos", label: "Cuerpos geométricos: caras, aristas y vértices", materia: "Matemáticas", area: "Geometría y medida",
    alias: ["sólidos", "poliedros", "cubo", "prisma", "pirámide", "tridimensional", "3d", "caras", "aristas", "vértices", "esquinas"] },
  { id: "solidos-platonicos", label: "Los cinco sólidos platónicos", materia: "Matemáticas", area: "Geometría y medida",
    alias: ["platónicos", "tetraedro", "octaedro", "dodecaedro", "icosaedro", "cuerpos regulares", "dados"] },
  { id: "dualidad-poliedros", label: "Dualidad: cada poliedro lleva otro dentro", materia: "Matemáticas", area: "Geometría y medida",
    alias: ["dual", "el dual del cubo", "parejas de sólidos", "intercambiar caras y vértices"] },
  { id: "formula-euler", label: "Fórmula de Euler: C + V − A = 2", materia: "Matemáticas", area: "Geometría y medida",
    alias: ["euler", "caras más vértices", "relación de euler", "característica de euler"] },
  { id: "perimetro-area", label: "Perímetro y área", materia: "Matemáticas", area: "Geometría y medida",
    alias: ["rectángulo", "cm2", "superficie", "contorno"] },
  { id: "circunferencia", label: "Círculo: perímetro y área", materia: "Matemáticas", area: "Geometría y medida",
    alias: ["circunferencia", "radio", "diámetro", "pi", "redondo"] },
  { id: "planos-trayectorias", label: "Planos, mapas viales y trayectoria", materia: "Matemáticas", area: "Geometría y medida",
    alias: ["mapa", "croquis", "ruta", "cuadras", "camino", "orientación", "norte", "vuelta a la derecha"] },
  { id: "recta-numerica", label: "La recta numérica", materia: "Matemáticas", area: "Geometría y medida",
    alias: ["recta", "ubicar el número", "marca", "escala", "entre qué números"] },
  { id: "unidades", label: "Conversión de unidades", materia: "Matemáticas", area: "Geometría y medida",
    alias: ["metros", "centímetros", "kilos", "gramos", "litros", "medir"] },
  { id: "tiempo-reloj", label: "El reloj y la hora", materia: "Matemáticas", area: "Geometría y medida",
    alias: ["hora", "minutos", "reloj", "tiempo"] },

  { id: "series", label: "Series y patrones", materia: "Matemáticas", area: "Datos y patrones",
    alias: ["qué número sigue", "de dos en dos", "sucesión", "conteo"] },
  { id: "promedio", label: "Promedio", materia: "Matemáticas", area: "Datos y patrones",
    alias: ["media", "estadística"] },
  { id: "moda", label: "La moda: el dato que más se repite", materia: "Matemáticas", area: "Datos y patrones",
    alias: ["el que más se repite", "dato más frecuente", "estadística"] },

  { id: "problemas-un-paso", label: "Problemas de un paso", materia: "Matemáticas", area: "Problemas",
    alias: ["problemas razonados", "situaciones"] },
  { id: "problemas-dos-pasos", label: "Problemas de dos pasos", materia: "Matemáticas", area: "Problemas",
    alias: ["problemas razonados", "cambio", "compras"] },

  // ── Español ─────────────────────────────────────────────────────────────
  { id: "ortografia", label: "Ortografía de la palabra", materia: "Español", area: "Ortografía",
    alias: ["b", "v", "h", "g", "j", "ll", "y", "escribir bien", "faltas"] },
  { id: "acentuacion", label: "Acentuación: agudas, graves y esdrújulas", materia: "Español", area: "Ortografía",
    alias: ["tilde", "acento", "aguda", "grave", "esdrújula"] },
  { id: "homofonos", label: "Homófonos", materia: "Español", area: "Ortografía",
    alias: ["haya halla", "hay ahí", "echo hecho", "tuvo tubo", "a ha", "haber a ver"] },
  { id: "puntuacion", label: "Puntuación", materia: "Español", area: "Ortografía",
    alias: ["coma", "punto", "dos puntos", "puntuar"] },
  { id: "mayusculas", label: "Mayúsculas", materia: "Español", area: "Ortografía",
    alias: ["nombres propios", "mayúscula inicial"] },
  { id: "signos", label: "Signos de interrogación y admiración", materia: "Español", area: "Ortografía",
    alias: ["pregunta", "exclamación", "signos"] },
  { id: "plurales", label: "Singular y plural", materia: "Español", area: "Ortografía",
    alias: ["plural", "lápices", "número gramatical"] },

  { id: "clases-palabra", label: "Clases de palabra", materia: "Español", area: "Gramática",
    alias: ["sustantivo", "adjetivo", "verbo", "adverbio", "pronombre", "artículo", "categorías gramaticales"] },
  { id: "tiempos-verbales", label: "Tiempos verbales", materia: "Español", area: "Gramática",
    alias: ["pasado", "presente", "futuro", "conjugar", "verbos"] },
  { id: "sintagmas", label: "Sintagmas: adjetival, verbal y preposicional", materia: "Español", area: "Gramática",
    alias: ["sintagma", "frase adjetiva", "frase verbal", "frase preposicional", "grupo de palabras"] },
  { id: "sujeto-predicado", label: "Sujeto y predicado", materia: "Español", area: "Gramática",
    alias: ["sujeto", "predicado", "oración"] },
  { id: "conectores", label: "Conectores", materia: "Español", area: "Gramática",
    alias: ["pero", "porque", "sin embargo", "nexos", "enlaces"] },

  { id: "sinonimos-antonimos", label: "Sinónimos y antónimos", materia: "Español", area: "Vocabulario",
    alias: ["sinónimo", "antónimo", "contrario", "parecido"] },
  { id: "prefijos-sufijos", label: "Prefijos y sufijos", materia: "Español", area: "Vocabulario",
    alias: ["prefijo", "sufijo", "re", "des", "in", "ito", "oso", "mente", "familia de palabras", "raíz"] },
  { id: "literal-figurado", label: "Sentido literal y figurado", materia: "Español", area: "Vocabulario",
    alias: ["figurado", "literal", "metáfora", "dicho", "expresión", "al pie de la letra"] },
  { id: "vocabulario-contexto", label: "Significado por contexto", materia: "Español", area: "Vocabulario",
    alias: ["palabra desconocida", "deducir significado", "vocabulario"] },
  { id: "silabas", label: "Sílabas", materia: "Español", area: "Vocabulario",
    alias: ["separar en sílabas", "palmadas", "sílaba"] },
  { id: "orden-alfabetico", label: "Orden alfabético", materia: "Español", area: "Vocabulario",
    alias: ["diccionario", "abecedario", "alfabeto"] },

  // Decodificar es anterior a comprender: aquí no se trabaja qué dice el
  // texto sino cómo se convierten sus letras en sonidos. Un alumno puede
  // tener excelente comprensión oral y aun así atorarse en esta área.
  { id: "decodificacion", label: "Decodificar: de letras a sonidos", materia: "Español", area: "Decodificación y fluidez",
    alias: ["leer en voz alta", "se traba al leer", "adivina las palabras", "descifrar",
            "sonidos", "fonemas", "conciencia fonológica", "no sabe leer"] },
  { id: "fluidez", label: "Fluidez lectora", materia: "Español", area: "Decodificación y fluidez",
    alias: ["lectura repetida", "velocidad de lectura", "palabras por minuto", "leer de corrido",
            "lee lento", "cronómetro", "entonación"] },
  { id: "discriminacion", label: "Palabras que se parecen", materia: "Español", area: "Decodificación y fluidez",
    alias: ["vecinos ortográficos", "confunde palabras", "parecidas", "piso pista", "discriminación"] },

  { id: "referentes", label: "Referentes y pronombres", materia: "Español", area: "Comprensión lectora",
    alias: ["a quién se refiere", "pronombre", "sustituir"] },
  { id: "secuencia", label: "Orden de los hechos", materia: "Español", area: "Comprensión lectora",
    alias: ["ordenar la historia", "secuencia", "antes y después"] },
  { id: "literal", label: "Localizar información", materia: "Español", area: "Comprensión lectora",
    alias: ["caza el dato", "buscar en el texto", "información explícita"] },
  { id: "inferencia", label: "Inferencia", materia: "Español", area: "Comprensión lectora",
    alias: ["deducir", "dicho deducido", "leer entre líneas"] },
  { id: "mapas-conceptuales", label: "Mapas conceptuales", materia: "Español", area: "Comprensión lectora",
    alias: ["esquema", "diagrama", "organizador gráfico", "concepto", "relacionar ideas"] },
  { id: "jerarquizar", label: "Jerarquizar y ordenar información", materia: "Español", area: "Comprensión lectora",
    alias: ["de lo general a lo particular", "importancia", "clasificar", "ordenar ideas", "jerarquía"] },
  { id: "idea-principal", label: "Idea principal", materia: "Español", area: "Comprensión lectora",
    alias: ["de qué trata", "resumen", "tema del texto"] },
  { id: "evidencia", label: "Sostener con evidencia", materia: "Español", area: "Comprensión lectora",
    alias: ["subrayar la prueba", "justificar", "argumentar"] },
  { id: "hecho-opinion", label: "Hecho y opinión", materia: "Español", area: "Comprensión lectora",
    alias: ["comprobable", "punto de vista", "pensamiento crítico"] },
  { id: "proposito", label: "Propósito del texto", materia: "Español", area: "Comprensión lectora",
    alias: ["para qué se escribió", "informar", "convencer", "instruir", "entretener"] },
];

export const TEMAS_POR_ID = Object.fromEntries(TEMAS.map((t) => [t.id, t]));

export function etiquetaTema(id) {
  return TEMAS_POR_ID[id]?.label || id;
}

// Sin acentos y en minúsculas: nadie teclea "sílabas" con tilde en la prisa.
export function normalizar(s) {
  return (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

// El maestro teclea en plural ("adjetivos", "divisiones") y las etiquetas
// están en singular, así que se prueba también la forma sin la -s / -es.
export function variantesConsulta(consulta) {
  const n = normalizar(consulta);
  if (!n) return [];
  const v = [n];
  const raiz = n.endsWith("es") ? n.slice(0, -2) : n.endsWith("s") ? n.slice(0, -1) : null;
  // La raíz solo se usa si sigue siendo una palabra: "par" (de "pares") pega
  // dentro de repARto y comPARar, y "tip" (de "tips") dentro de mulTIPlicación.
  if (raiz && raiz.length >= 4) v.push(raiz);
  return v;
}

export function coincide(texto, consulta) {
  const t = normalizar(texto);
  return variantesConsulta(consulta).some((v) => t.includes(v));
}

// Busca en el nombre del tema, su área y sus alias.
export function buscarTemas(consulta) {
  if (!normalizar(consulta)) return [];
  return TEMAS.filter((t) =>
    coincide(t.label, consulta) ||
    coincide(t.area, consulta) ||
    t.alias.some((a) => coincide(a, consulta))
  );
}

// Temas agrupados por materia y área, en el orden en que se enseñan.
export function temasPorArea(materia) {
  const grupos = new Map();
  TEMAS.filter((t) => !materia || t.materia === materia).forEach((t) => {
    if (!grupos.has(t.area)) grupos.set(t.area, []);
    grupos.get(t.area).push(t);
  });
  return [...grupos.entries()].sort(
    ([a], [b]) => AREAS_ORDEN.indexOf(a) - AREAS_ORDEN.indexOf(b)
  );
}
