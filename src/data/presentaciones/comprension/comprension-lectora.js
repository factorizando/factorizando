// Presentación: Comprensión Lectora — tipos de texto, idea principal, propósito,
// inferencia e interpretación de textos discontinuos (anuncios y gráficas)
// Comprensión Lectora · EXANI-I

export const PRESENTACION = {
  id: "comprension-lectora",
  titulo: "Comprensión Lectora",
  materia: "Comprensión Lectora",
  subtema: "Estrategias de lectura",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Comprensión Lectora",
      subtitulo: "Tipo de texto, idea principal, propósito del autor, inferencias y lectura de anuncios y gráficas",
      etiqueta: "Comprensión Lectora · EXANI-I"
    },

    // ── Tipos de texto ─────────────────────────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Concepto 1 · Tipología",
      titulo: "Tipos de texto según su función",
      bloques: [
        {
          tipo: "texto",
          texto: "Identificar el tipo de texto orienta toda la lectura: dice qué busca el autor y cómo está organizada la información. Un texto narrativo cuenta hechos en el tiempo (con personajes y acciones); uno descriptivo pinta cómo es algo o alguien; uno expositivo explica o informa de manera objetiva; uno argumentativo defiende una opinión con razones; uno instructivo indica pasos a seguir; y uno dramático se escribe en diálogos para ser representado."
        },
        {
          tipo: "tabla",
          titulo: "Reconocer el tipo de texto",
          columnas: ["Tipo", "Intención", "Pista / ejemplo"],
          filas: [
            { tiempo: "Narrativo",     correcto: "Contar hechos en el tiempo", error: "Cuento, novela, crónica, anécdota" },
            { tiempo: "Descriptivo",   correcto: "Decir cómo es algo",         error: "Retrato, descripción de un lugar" },
            { tiempo: "Expositivo",    correcto: "Informar / explicar",        error: "Artículo, texto escolar, noticia" },
            { tiempo: "Argumentativo", correcto: "Convencer con razones",      error: "Ensayo, artículo de opinión, reseña" },
            { tiempo: "Instructivo",   correcto: "Indicar cómo hacer algo",    error: "Receta, manual, instructivo" },
            { tiempo: "Dramático",     correcto: "Representarse en diálogos",  error: "Obra de teatro, guion" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "la función define el tipo, no el tema",
          correcto: "Un texto que da pasos numerados para armar un mueble es instructivo, aunque hable de madera",
          incorrecto: "Clasificar por el tema («es sobre animales ⇒ científico») → lo que cuenta es la intención: contar, explicar o convencer"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Expositivo y argumentativo se confunden: el expositivo informa con neutralidad; el argumentativo toma postura y la defiende",
          correcto: "«El reciclaje reduce residuos» (informa) vs. «Todos DEBERÍAMOS reciclar porque…» (argumenta)",
          incorrecto: "Llamar argumentativo a un texto solo porque trata un tema polémico, aunque no defienda una postura"
        }
      ]
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Tipo de texto",
      pregunta: "Un texto está escrito en diálogos, con los nombres de los personajes seguidos de dos puntos e indicaciones entre paréntesis sobre cómo actuar. ¿De qué tipo de texto se trata?",
      opciones: ["Narrativo", "Dramático", "Expositivo"],
      correcta: 1,
      explicacion: "Los diálogos encabezados por el nombre del personaje y las acotaciones entre paréntesis (las indicaciones de actuación) son rasgos del texto dramático, escrito para ser representado. Un texto narrativo contaría los hechos con un narrador, no en forma de guion.",
      pasos: []
    },

    // ── Tema e idea principal ──────────────────────────────────────────────────
    {
      id: 3,
      tipo: "regla_rica",
      etiqueta: "Concepto 2 · Contenido",
      titulo: "Tema, idea principal e ideas secundarias",
      bloques: [
        {
          tipo: "texto",
          texto: "El tema es el asunto general del texto: se expresa en una palabra o frase corta y responde a «¿de qué trata?». La idea principal es la afirmación más importante sobre ese tema: responde a «¿qué dice el texto de eso?» y suele ser una oración completa. Las ideas secundarias amplían, ejemplifican o explican la principal. No confundir tema (asunto) con idea principal (lo que se sostiene sobre el asunto)."
        },
        {
          tipo: "tabla",
          titulo: "Tema vs. idea principal",
          columnas: ["Elemento", "Responde a", "Forma"],
          filas: [
            { tiempo: "Tema",             correcto: "¿De qué trata?",         error: "Palabra o frase: «el agua»" },
            { tiempo: "Idea principal",   correcto: "¿Qué afirma sobre el tema?", error: "Oración: «el agua es un recurso escaso»" },
            { tiempo: "Ideas secundarias", correcto: "¿Cómo lo apoya?",       error: "Datos, ejemplos, explicaciones" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "la idea principal es una oración, el tema es una etiqueta",
          correcto: "Tema: la contaminación del aire. Idea principal: «la contaminación del aire daña la salud respiratoria»",
          incorrecto: "Dar como idea principal solo «la contaminación» → eso es el tema, falta lo que el texto afirma"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "La idea principal no siempre está en la primera oración: puede estar al final o no estar escrita (hay que deducirla del conjunto)",
          correcto: "Buscar la afirmación que el resto del texto sostiene o ejemplifica",
          incorrecto: "Tomar siempre la primera frase como idea principal → a veces solo es una introducción o un ejemplo"
        }
      ]
    },
    {
      id: 4,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Idea principal",
      pregunta: "Lee: «Las abejas polinizan gran parte de los cultivos. Sin su trabajo, muchas frutas y verduras desaparecerían. Por eso, su disminución amenaza la producción de alimentos.» ¿Cuál es la idea principal?",
      opciones: [
        "Las abejas vuelan de flor en flor",
        "La disminución de las abejas amenaza la producción de alimentos",
        "Las frutas y verduras son saludables"
      ],
      correcta: 1,
      explicacion: "La idea principal es la afirmación que el resto del texto sostiene: las dos primeras oraciones explican por qué la pérdida de abejas pone en riesgo los alimentos, conclusión que aparece marcada por «por eso». Las otras opciones son detalles secundarios o ideas ajenas al texto.",
      pasos: []
    },
    {
      id: 5,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Tema central",
      pregunta: "Un texto explica cómo se forman los huracanes, qué los alimenta y por qué pierden fuerza al tocar tierra. ¿Cuál es su tema?",
      opciones: ["Los desastres naturales en general", "Los huracanes", "El clima de las costas"],
      correcta: 1,
      explicacion: "El tema es el asunto preciso del que trata todo el texto: los huracanes. «Desastres naturales» es demasiado amplio (abarca sismos, sequías…) y «el clima de las costas» no es el foco. El tema debe ajustarse a lo que realmente desarrolla el texto.",
      pasos: []
    },

    // ── Propósito del autor ────────────────────────────────────────────────────
    {
      id: 6,
      tipo: "regla_rica",
      etiqueta: "Concepto 3 · Intención",
      titulo: "Propósito o intención comunicativa del autor",
      bloques: [
        {
          tipo: "texto",
          texto: "Todo texto se escribe con un propósito: informar (dar datos), persuadir o convencer (que el lector piense o haga algo), instruir (enseñar a hacer algo) o entretener (provocar disfrute). Reconocer el propósito ayuda a interpretar el texto y a no tomar como información objetiva lo que en realidad busca convencer o vender. Los anuncios publicitarios, por ejemplo, casi siempre buscan persuadir."
        },
        {
          tipo: "tabla",
          titulo: "Propósitos comunicativos frecuentes",
          columnas: ["Propósito", "Busca que el lector…", "Texto típico"],
          filas: [
            { tiempo: "Informar",   correcto: "Conozca datos o hechos",   error: "Noticia, artículo, reporte" },
            { tiempo: "Persuadir",  correcto: "Cambie de idea o actúe",   error: "Anuncio, discurso, opinión" },
            { tiempo: "Instruir",   correcto: "Aprenda a hacer algo",     error: "Manual, receta, tutorial" },
            { tiempo: "Entretener", correcto: "Disfrute la lectura",      error: "Cuento, chiste, novela" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el anuncio informa para vender, no para informar",
          correcto: "Un cartel que dice «¡El mejor combo al mejor precio!» tiene propósito persuasivo: quiere que compres",
          incorrecto: "Leer un anuncio como información neutral → su intención real es convencer al consumidor"
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "Un mismo tema puede tratarse con distintos propósitos: hablar del ejercicio para informar (un estudio) o para persuadir (una campaña que invita a moverse)",
          correcto: "Fíjate en si el texto solo da datos o si además te invita a actuar",
          incorrecto: "Deducir el propósito solo por el tema → el propósito está en la intención, no en el asunto"
        }
      ]
    },
    {
      id: 7,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Propósito del autor",
      pregunta: "Un cartel muestra una hamburguesa enorme y dice: «COMBO FAMILIAR — ¡Destruye tu hambre por solo $99! Llévalo ya.» ¿Cuál es el propósito principal del texto?",
      opciones: ["Informar sobre nutrición", "Persuadir al lector de comprar", "Explicar una receta"],
      correcta: 1,
      explicacion: "El lenguaje llamativo, el precio destacado y la invitación directa («Llévalo ya») revelan una intención persuasiva: convencer al lector de comprar. No informa de manera objetiva ni enseña a preparar nada; es publicidad.",
      pasos: []
    },

    // ── Inferencia y vocabulario en contexto ───────────────────────────────────
    {
      id: 8,
      tipo: "regla_rica",
      etiqueta: "Concepto 4 · Leer entre líneas",
      titulo: "Inferencias y vocabulario en contexto",
      bloques: [
        {
          tipo: "texto",
          texto: "Inferir es deducir información que el texto no dice de forma explícita, pero que se desprende de lo que sí dice. Una buena inferencia se apoya en pistas del texto, no en suposiciones personales. El significado de una palabra desconocida también se infiere por contexto: las palabras que la rodean acotan su sentido. Hay que distinguir lo que el texto afirma de lo que solo sugiere."
        },
        {
          tipo: "tabla",
          titulo: "Explícito vs. inferido",
          columnas: ["Tipo de información", "De dónde sale", "Ejemplo"],
          filas: [
            { tiempo: "Explícita",   correcto: "Está escrita literalmente",   error: "«Llegó empapado»" },
            { tiempo: "Inferida",    correcto: "Se deduce de las pistas",     error: "De «empapado» → estaba lloviendo" },
            { tiempo: "Vocabulario", correcto: "Se acota por el contexto",    error: "«árido»: si habla de un desierto, = seco" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "la inferencia se apoya en el texto, no en la imaginación",
          correcto: "«Cerró la sombrilla y sacudió el abrigo» → se infiere que venía de la lluvia",
          incorrecto: "Inferir que «el personaje estaba triste» sin ninguna pista en el texto → eso es suponer, no inferir"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Una inferencia válida no contradice el texto ni añade datos inventados: solo conecta las pistas que el propio texto ofrece",
          correcto: "Elegir la opción que se deduce de lo leído",
          incorrecto: "Elegir una opción «lógica en general» pero sin respaldo en el texto → no es una inferencia del texto"
        }
      ]
    },
    {
      id: 9,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Vocabulario en contexto",
      pregunta: "«Tras caminar todo el día bajo el sol, el grupo de excursionistas llegó exhausto al campamento.» Según el contexto, ¿qué significa «exhausto»?",
      opciones: ["Muy cansado", "Desorientado", "Contento"],
      correcta: 0,
      explicacion: "El contexto da la pista: «caminar todo el día bajo el sol» provoca agotamiento, así que «exhausto» significa muy cansado, agotado. Las otras opciones no encajan con el esfuerzo descrito. Inferir por contexto evita necesitar el diccionario.",
      pasos: []
    },

    // ── Textos discontinuos: anuncios y gráficas ───────────────────────────────
    {
      id: 10,
      tipo: "regla_rica",
      etiqueta: "Concepto 5 · Textos discontinuos",
      titulo: "Interpretar anuncios, tablas y gráficas",
      bloques: [
        {
          tipo: "texto",
          texto: "No todo texto es un párrafo: los textos discontinuos —anuncios, carteles, tablas, gráficas e infografías— combinan palabras, números e imágenes. Para leerlos hay que fijarse en el título (qué se mide), los ejes o columnas (qué representa cada uno), las unidades y la fuente. En una gráfica de barras se comparan cantidades; en una de líneas, una tendencia en el tiempo; en una circular, partes de un todo."
        },
        {
          tipo: "tabla",
          titulo: "Qué leer en cada tipo de gráfico",
          columnas: ["Recurso", "Sirve para", "Qué revisar"],
          filas: [
            { tiempo: "Gráfica de barras", correcto: "Comparar cantidades",        error: "La barra más alta / más baja" },
            { tiempo: "Gráfica de líneas", correcto: "Ver tendencia en el tiempo",  error: "Si sube, baja o se mantiene" },
            { tiempo: "Gráfica circular",  correcto: "Mostrar partes de un total",  error: "La rebanada mayor = mayor porcentaje" },
            { tiempo: "Tabla",             correcto: "Cruzar datos exactos",        error: "Fila y columna correctas" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "leer los ejes antes de concluir",
          correcto: "Si el eje vertical es «número de alumnos» y la barra más alta está en «10», ese valor es el más frecuente",
          incorrecto: "Concluir sin mirar las unidades del eje → una barra «alta» puede representar pocos casos según la escala"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "En una gráfica circular, la rebanada más grande es el mayor porcentaje, pero NO es necesariamente «la mayoría»: solo lo es si pasa del 50%",
          correcto: "Una rebanada del 40% es la mayor, pero no es mayoría",
          incorrecto: "Leer «la rebanada más grande» como «más de la mitad» sin verificar el porcentaje"
        }
      ]
    },
    {
      id: 11,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Interpretar una gráfica",
      pregunta: "Una gráfica de barras titulada «Calificaciones por alumnos» tiene en el eje vertical «número de alumnos» y en el horizontal las calificaciones 10, 9, 8, 7, 6, 5. La barra más alta está en la calificación 10. ¿Qué se concluye?",
      opciones: [
        "El promedio del grupo es 10",
        "La calificación más frecuente fue 10",
        "Todos los alumnos sacaron 10"
      ],
      correcta: 1,
      explicacion: "La barra más alta indica la calificación que más alumnos obtuvieron, es decir, la más frecuente (la moda): 10. No implica que el promedio sea 10 ni que todos la sacaran, pues las demás calificaciones también tienen barras. Leer el eje evita estas confusiones.",
      pasos: []
    },

    // ── Cierre ─────────────────────────────────────────────────────────────────
    {
      id: 12,
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Lo esencial de la comprensión lectora",
      puntos: [
        { titulo: "Tipo de texto", texto: "según su función: narrar, describir, exponer, argumentar, instruir o representar" },
        { titulo: "Tema", texto: "el asunto («¿de qué trata?»), en una frase corta" },
        { titulo: "Idea principal", texto: "la afirmación central sobre el tema, en una oración completa" },
        { titulo: "Propósito", texto: "informar, persuadir, instruir o entretener; el anuncio persuade" },
        { titulo: "Inferir", texto: "deducir de las pistas del texto, sin inventar ni contradecir" },
        { titulo: "Gráficas", texto: "leer título, ejes y unidades; barras comparan, líneas muestran tendencia, circular reparte un todo" }
      ]
    }

  ]
};
