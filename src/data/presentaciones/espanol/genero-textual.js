// Presentación: Género textual — prólogo, ensayo, reseña / noticia, artículo de opinión, crónica
// Redacción Indirecta · Área Comunicativa · EXANI-II

export const PRESENTACION = {
  id: "genero-textual",
  titulo: "Género Textual",
  materia: "Español",
  subtema: "Redacción Indirecta",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Género Textual",
      subtitulo: "Prólogo, ensayo y reseña · noticia, artículo de opinión y crónica: propósito, estructura y rasgos de cada género",
      etiqueta: "Español · Redacción Indirecta · EXANI-II"
    },

    // ── Introducción ──────────────────────────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Introducción",
      titulo: "¿Qué es un género textual?",
      bloques: [
        {
          tipo: "texto",
          texto: "Un género textual es un modelo convencional de texto, reconocible por su propósito comunicativo, su estructura y sus rasgos de estilo. Cuando leemos una noticia, un ensayo o una reseña, identificamos de inmediato qué tipo de texto es porque cada género sigue convenciones compartidas. El EXANI-II evalúa dos ámbitos: el de estudio (prólogo, ensayo, reseña) y el de participación social (noticia, artículo de opinión, crónica). Reconocer el género ayuda a anticipar qué información buscar y cómo interpretarla."
        },
        {
          tipo: "tabla",
          titulo: "Tres claves para identificar un género",
          columnas: ["Clave", "Pregunta", "Qué revela"],
          filas: [
            { tiempo: "Propósito",  correcto: "¿Para qué se escribe?",      error: "Informar, argumentar, valorar, narrar, presentar" },
            { tiempo: "Estructura", correcto: "¿Cómo se organiza?",          error: "Pirámide invertida, tesis-argumentos, descripción-juicio…" },
            { tiempo: "Tono/estilo", correcto: "¿Objetivo o subjetivo?",     error: "La presencia o ausencia de la opinión del autor" }
          ]
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "El criterio decisivo para distinguir géneros es el propósito comunicativo, no el tema",
          correcto: "Un mismo tema (un sismo) puede dar una noticia (informar), un artículo de opinión (valorar) o una crónica (narrar lo vivido).",
          incorrecto: "Suponer que «todo texto sobre un sismo es una noticia»: el tema no define el género; lo define el propósito."
        }
      ]
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Introducción",
      pregunta: "¿Cuál es el criterio MÁS confiable para identificar el género de un texto?",
      opciones: [
        "El tema que aborda",
        "El propósito comunicativo y su estructura",
        "La longitud del texto"
      ],
      correcta: 1,
      explicacion: "El género se reconoce por su propósito comunicativo (informar, argumentar, narrar…) y por la estructura convencional que de él se deriva. El tema y la longitud pueden coincidir entre géneros muy distintos, así que no son criterios confiables.",
      pasos: []
    },

    // ── Panorama: los dos ámbitos ─────────────────────────────────────────────
    {
      id: 3,
      tipo: "regla_rica",
      etiqueta: "Panorama",
      titulo: "Los seis géneros del EXANI-II",
      bloques: [
        {
          tipo: "texto",
          texto: "Conviene tener un mapa de los seis géneros antes de estudiarlos uno a uno. Los del ámbito de estudio acompañan o producen el conocimiento (prólogo, ensayo, reseña). Los del ámbito de participación social circulan en los medios y la vida pública (noticia, artículo de opinión, crónica). La frontera clave dentro de cada ámbito es la objetividad: hay géneros que informan con neutralidad y géneros que expresan la postura del autor."
        },
        {
          tipo: "tabla",
          titulo: "Mapa de los seis géneros",
          columnas: ["Género", "Ámbito", "Propósito dominante"],
          filas: [
            { tiempo: "Prólogo",             correcto: "Estudio",              error: "Presentar una obra al lector" },
            { tiempo: "Ensayo",              correcto: "Estudio",              error: "Argumentar una tesis personal" },
            { tiempo: "Reseña",              correcto: "Estudio",              error: "Describir y valorar una obra" },
            { tiempo: "Noticia",             correcto: "Participación social", error: "Informar hechos con objetividad" },
            { tiempo: "Artículo de opinión", correcto: "Participación social", error: "Opinar y persuadir sobre un tema" },
            { tiempo: "Crónica",             correcto: "Participación social", error: "Narrar hechos en orden temporal con estilo" }
          ]
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "Dentro de los medios, la frontera clave es objetividad vs. opinión: la noticia informa; el artículo de opinión valora",
          correcto: "Noticia: «El congreso aprobó la ley con 320 votos.» (hecho verificable)",
          incorrecto: "Artículo de opinión presentado como noticia: «El congreso aprobó una ley innecesaria y dañina.» (juicio de valor → ya no es noticia)"
        }
      ]
    },

    // ── Prólogo ───────────────────────────────────────────────────────────────
    {
      id: 4,
      tipo: "regla_rica",
      etiqueta: "Ámbito de estudio · Género 1/3",
      titulo: "El prólogo",
      bloques: [
        {
          tipo: "texto",
          texto: "El prólogo es el texto introductorio que precede a una obra y la presenta al lector. Suele explicar el origen, el propósito o el valor del libro, situar al autor y orientar la lectura. Puede escribirlo el propio autor o una persona distinta (a menudo una autoridad en el tema, que con su prestigio respalda la obra). No desarrolla el contenido: lo anticipa y lo enmarca. Es independiente del cuerpo de la obra y se lee antes de ella."
        },
        {
          tipo: "tabla",
          titulo: "Rasgos del prólogo",
          columnas: ["Aspecto", "Característica", "Marca textual"],
          filas: [
            { tiempo: "Propósito",  correcto: "Presentar y enmarcar la obra",        error: "«Este libro nació de…», «El lector encontrará…»" },
            { tiempo: "Posición",   correcto: "Antes del cuerpo de la obra",          error: "Precede a los capítulos" },
            { tiempo: "Autoría",    correcto: "El autor u otra persona (prologuista)", error: "«Tengo el honor de presentar esta obra de…»" },
            { tiempo: "Contenido",  correcto: "Anticipa, no desarrolla el tema",       error: "Habla sobre el libro, no expone el tema en sí" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "prólogo (habla sobre la obra) vs. introducción del tema",
          correcto: "Prólogo: «Las páginas que siguen reúnen veinte años de investigación del autor sobre el clima.»",
          incorrecto: "Confundirlo con el desarrollo: «El clima es el estado de la atmósfera en un lugar…» (eso ya es contenido, no prólogo)"
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "El prólogo habla acerca de la obra; no expone el tema de la obra: si ya desarrolla el contenido, no es un prólogo",
          correcto: "«Esta obra ofrece, por primera vez en español, una visión de conjunto del problema.» (habla sobre el libro)",
          incorrecto: "«El problema se origina en tres factores que analizaremos…» (desarrolla el tema → es introducción/desarrollo, no prólogo)"
        }
      ]
    },
    {
      id: 5,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Prólogo",
      pregunta: "¿Cuál fragmento corresponde a un PRÓLOGO?",
      opciones: [
        "«La fotosíntesis convierte la luz en energía química mediante la clorofila.»",
        "«Me honra presentar esta obra, fruto de una década de trabajo de su autora, que sin duda enriquecerá a sus lectores.»",
        "«En conclusión, los datos confirman la hipótesis inicial del estudio.»"
      ],
      correcta: 1,
      explicacion: "El segundo fragmento habla acerca de la obra (la presenta, sitúa a su autora y orienta al lector), rasgo propio del prólogo, además escrito por un prologuista. El primero desarrolla un tema (contenido) y el tercero es una conclusión: ninguno presenta la obra.",
      pasos: []
    },

    // ── Ensayo ────────────────────────────────────────────────────────────────
    {
      id: 6,
      tipo: "regla_rica",
      etiqueta: "Ámbito de estudio · Género 2/3",
      titulo: "El ensayo",
      bloques: [
        {
          tipo: "texto",
          texto: "El ensayo es un texto argumentativo en el que el autor expone y defiende una tesis (postura personal) sobre un tema, apoyándose en razones, ejemplos y reflexión. Combina rigor y subjetividad: parte de la perspectiva del autor, pero busca convencer con argumentos. Su estructura es flexible (introducción con la tesis, desarrollo con argumentos y conclusión), su tono reflexivo y su extensión variable. A diferencia de la reseña, no comenta otra obra: desarrolla una idea propia."
        },
        {
          tipo: "tabla",
          titulo: "Rasgos del ensayo",
          columnas: ["Aspecto", "Característica", "Marca textual"],
          filas: [
            { tiempo: "Propósito",  correcto: "Argumentar una tesis personal",       error: "«Sostengo que…», «Considero que…»" },
            { tiempo: "Estructura", correcto: "Tesis → argumentos → conclusión (flexible)", error: "Introducción, desarrollo, cierre" },
            { tiempo: "Tono",       correcto: "Subjetivo pero razonado",              error: "Marcas de 1.ª persona y reflexión" },
            { tiempo: "Base",       correcto: "Razones, ejemplos, citas",             error: "Apoya la tesis con evidencias y reflexión" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "ensayo (defiende una tesis) vs. mera exposición de datos",
          correcto: "Ensayo: «La lectura no solo informa: nos transforma. Defenderé esta idea con tres argumentos.»",
          incorrecto: "Exposición neutra (no es ensayo): «La lectura es la actividad de interpretar signos escritos.» (define, no argumenta una postura)"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Lo que distingue al ensayo es la tesis defendida con argumentos; sin postura personal argumentada, no es ensayo",
          correcto: "«El examen estandarizado mide poco de lo que importa; por eso resulta insuficiente como único criterio.» (tesis + argumento)",
          incorrecto: "«El examen estandarizado consta de 168 reactivos y dura cuatro horas y media.» (dato objetivo → expositivo, no ensayo)"
        }
      ]
    },
    {
      id: 7,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Ensayo",
      pregunta: "¿Cuál de los siguientes fragmentos pertenece a un ENSAYO?",
      opciones: [
        "«El agua hierve a 100 °C a nivel del mar.»",
        "«Creo que la tecnología nos acerca y nos aísla a la vez; intentaré mostrar por qué esta paradoja define nuestra época.»",
        "«Ayer se registraron lluvias en el norte del país.»"
      ],
      correcta: 1,
      explicacion: "El segundo fragmento plantea una tesis personal («la tecnología nos acerca y nos aísla») y anuncia que la defenderá con argumentos: es propio del ensayo. El primero es un dato objetivo (expositivo) y el tercero, información de hechos (noticia).",
      pasos: []
    },

    // ── Reseña ────────────────────────────────────────────────────────────────
    {
      id: 8,
      tipo: "regla_rica",
      etiqueta: "Ámbito de estudio · Género 3/3",
      titulo: "La reseña",
      bloques: [
        {
          tipo: "texto",
          texto: "La reseña es un texto que describe y valora una obra (libro, película, artículo, evento) para orientar a un posible lector o espectador. Tiene dos componentes: uno descriptivo (de qué trata la obra, datos, contenido) y uno crítico-valorativo (juicio razonado sobre sus aciertos y limitaciones). Se distingue del ensayo porque siempre comenta una obra ajena, y de la noticia porque incluye una valoración. Suele cerrar con una recomendación."
        },
        {
          tipo: "tabla",
          titulo: "Rasgos de la reseña",
          columnas: ["Aspecto", "Característica", "Marca textual"],
          filas: [
            { tiempo: "Propósito",  correcto: "Describir + valorar una obra",   error: "«La novela narra… y logra…», «es recomendable»" },
            { tiempo: "Objeto",     correcto: "Siempre una obra ajena",         error: "Libro, película, disco, exposición…" },
            { tiempo: "Estructura", correcto: "Ficha + síntesis + juicio",      error: "Datos, resumen, valoración, recomendación" },
            { tiempo: "Tono",       correcto: "Valorativo y fundamentado",      error: "Combina descripción objetiva y opinión razonada" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "reseña (describe + valora una obra) vs. ensayo (defiende una idea propia)",
          correcto: "Reseña: «La película retrata la migración con honestidad, aunque su ritmo decae en el segundo acto. Vale la pena verla.»",
          incorrecto: "Ensayo (no reseña): «La migración es un derecho humano que ningún muro detendrá.» (defiende una tesis; no comenta una obra)"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "La reseña sin valoración se queda en resumen; la reseña sin descripción se vuelve opinión: necesita ambos componentes",
          correcto: "«El libro reúne diez relatos (descripción) escritos con una prosa precisa y conmovedora (valoración).»",
          incorrecto: "«El libro reúne diez relatos sobre la infancia.» (solo describe → es un resumen, no una reseña completa)"
        }
      ]
    },
    {
      id: 9,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Reseña",
      pregunta: "«El documental expone con claridad el problema del agua y, aunque abusa de las cifras, consigue conmover; es muy recomendable.» ¿Por qué es una reseña?",
      opciones: [
        "Porque solo informa de un hecho reciente",
        "Porque describe la obra y emite un juicio valorativo sobre ella",
        "Porque defiende una tesis personal sin referirse a ninguna obra"
      ],
      correcta: 1,
      explicacion: "El texto combina descripción de la obra («expone el problema del agua») con valoración razonada («abusa de las cifras», «consigue conmover», «es recomendable»): esos dos componentes definen la reseña. No es noticia (valora) ni ensayo (comenta una obra concreta).",
      pasos: []
    },

    // ── Noticia ───────────────────────────────────────────────────────────────
    {
      id: 10,
      tipo: "regla_rica",
      etiqueta: "Participación social · Género 1/3",
      titulo: "La noticia",
      bloques: [
        {
          tipo: "texto",
          texto: "La noticia es un texto periodístico que informa de un hecho reciente y de interés público con objetividad. Responde a las preguntas básicas: qué, quién, cuándo, dónde, cómo y por qué. Se organiza en pirámide invertida: lo más importante va al inicio (titular y entrada o «lead») y los detalles secundarios después, de mayor a menor relevancia. Su rasgo definitorio es la ausencia de opinión del autor: presenta hechos verificables, no juicios."
        },
        {
          tipo: "tabla",
          titulo: "Rasgos de la noticia",
          columnas: ["Aspecto", "Característica", "Marca textual"],
          filas: [
            { tiempo: "Propósito",  correcto: "Informar un hecho con objetividad", error: "Datos verificables, fuentes, cifras" },
            { tiempo: "Las 6 preguntas", correcto: "Qué, quién, cuándo, dónde, cómo, por qué", error: "Se responden en la entrada o «lead»" },
            { tiempo: "Estructura", correcto: "Pirámide invertida",                error: "Titular → entrada → cuerpo (de más a menos)" },
            { tiempo: "Tono",       correcto: "Objetivo, sin opinión del autor",   error: "3.ª persona, sin adjetivos valorativos" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "noticia (informa) vs. opinión disfrazada de noticia",
          correcto: "Noticia: «El sismo de magnitud 6.1 dejó 12 heridos en la región, según Protección Civil.»",
          incorrecto: "Opinión (ya no es noticia): «El terrible sismo demostró, una vez más, la negligencia de las autoridades.»"
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "El rasgo decisivo de la noticia es la objetividad: en cuanto aparecen adjetivos valorativos o juicios del autor, deja de ser noticia",
          correcto: "«La empresa anunció 200 despidos.» (hecho)",
          incorrecto: "«La empresa anunció 200 injustos e indignantes despidos.» (valoración → editorial/opinión)"
        }
      ]
    },
    {
      id: 11,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Noticia",
      pregunta: "¿Cuál de las siguientes opciones corresponde al registro propio de una NOTICIA?",
      opciones: [
        "«Es vergonzoso que la inflación siga subiendo por culpa de las malas decisiones.»",
        "«El índice de inflación se ubicó en 4.2 % en mayo, informó el instituto de estadística.»",
        "«Considero que deberíamos preocuparnos seriamente por la economía.»"
      ],
      correcta: 1,
      explicacion: "«El índice de inflación se ubicó en 4.2 % en mayo, informó el instituto de estadística» presenta un hecho verificable, con dato y fuente, sin opinión: propio de la noticia. Las otras dos contienen juicios de valor («vergonzoso», «considero»), propios de la opinión.",
      pasos: []
    },

    // ── Artículo de opinión ───────────────────────────────────────────────────
    {
      id: 12,
      tipo: "regla_rica",
      etiqueta: "Participación social · Género 2/3",
      titulo: "El artículo de opinión",
      bloques: [
        {
          tipo: "texto",
          texto: "El artículo de opinión es un texto periodístico argumentativo en el que un autor identificado expone su postura sobre un tema de actualidad y trata de persuadir al lector. A diferencia de la noticia, la subjetividad es legítima y central: el autor valora, interpreta y propone. Se apoya en argumentos, datos y, a veces, en su autoridad o experiencia. Comparte con el ensayo el carácter argumentativo, pero es más breve, ligado a la actualidad y publicado en un medio."
        },
        {
          tipo: "tabla",
          titulo: "Rasgos del artículo de opinión",
          columnas: ["Aspecto", "Característica", "Marca textual"],
          filas: [
            { tiempo: "Propósito",  correcto: "Opinar y persuadir",            error: "«Es urgente que…», «No deberíamos permitir…»" },
            { tiempo: "Subjetividad", correcto: "Explícita y legítima",        error: "1.ª persona, adjetivos valorativos, juicios" },
            { tiempo: "Autoría",    correcto: "Autor identificado y responsable", error: "Firma del articulista" },
            { tiempo: "Vínculo",    correcto: "Tema de actualidad",            error: "Reacciona a un hecho reciente del debate público" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "artículo de opinión vs. noticia sobre el mismo hecho",
          correcto: "Opinión: «El nuevo impuesto es un error que castigará a las familias; el gobierno debería reconsiderarlo.»",
          incorrecto: "Noticia (no opinión): «El gobierno anunció un nuevo impuesto que entrará en vigor en enero.» (solo informa)"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Artículo de opinión y ensayo son argumentativos; los distingue el medio y la actualidad: el artículo es periodístico, breve y ligado a un hecho del momento",
          correcto: "Artículo de opinión: comenta en el periódico una ley aprobada esta semana.",
          incorrecto: "Confundirlo con ensayo académico: este reflexiona sobre un tema general, sin atarse a la coyuntura ni a un medio."
        }
      ]
    },
    {
      id: 13,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Artículo de opinión",
      pregunta: "«La reforma educativa, tal como está planteada, es un retroceso: ignora a los docentes y debería rechazarse.» ¿A qué género pertenece y por qué?",
      opciones: [
        "Noticia, porque trata un tema de actualidad",
        "Artículo de opinión, porque el autor valora y propone una postura sobre un hecho actual",
        "Reseña, porque comenta una obra"
      ],
      correcta: 1,
      explicacion: "El fragmento expresa un juicio («es un retroceso») y una propuesta («debería rechazarse») sobre un tema de actualidad: es un artículo de opinión. No es noticia (contiene valoración) ni reseña (no comenta una obra).",
      pasos: []
    },

    // ── Crónica ───────────────────────────────────────────────────────────────
    {
      id: 14,
      tipo: "regla_rica",
      etiqueta: "Participación social · Género 3/3",
      titulo: "La crónica",
      bloques: [
        {
          tipo: "texto",
          texto: "La crónica es un género híbrido entre información y literatura: narra hechos reales en orden temporal (cronológico), pero con un estilo personal y recursos literarios (descripciones, detalles sensoriales, voz del narrador). El cronista suele ser testigo de lo que cuenta y aporta su mirada, sin renunciar a la veracidad de los hechos. Se diferencia de la noticia por el orden cronológico (no pirámide invertida) y por su estilo expresivo; del artículo de opinión, porque su eje es narrar lo sucedido, no argumentar una tesis."
        },
        {
          tipo: "tabla",
          titulo: "Rasgos de la crónica",
          columnas: ["Aspecto", "Característica", "Marca textual"],
          filas: [
            { tiempo: "Propósito",  correcto: "Narrar hechos reales con estilo", error: "Relato en orden temporal de lo vivido" },
            { tiempo: "Orden",      correcto: "Cronológico (no pirámide invertida)", error: "«Primero…», «más tarde…», «al caer la noche…»" },
            { tiempo: "Estilo",     correcto: "Literario y expresivo",           error: "Descripciones, detalles, voz del narrador" },
            { tiempo: "Veracidad",  correcto: "Hechos reales + mirada del autor", error: "El cronista suele ser testigo presencial" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "crónica (narra con estilo, en orden temporal) vs. noticia (informa en pirámide invertida)",
          correcto: "Crónica: «Cuando el sol apenas asomaba, los corredores se agolpaban nerviosos; minutos después, el disparo rompió el silencio…»",
          incorrecto: "Noticia (no crónica): «5 000 corredores participaron ayer en el maratón de la ciudad.» (dato principal al frente, sin narración)"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "La crónica narra en orden cronológico con estilo literario, pero sus hechos son reales: no es ficción ni mera opinión",
          correcto: "Crónica: relata, hora por hora y con prosa cuidada, lo que el autor presenció en una jornada electoral.",
          incorrecto: "Confundirla con un cuento: el cuento es ficción; la crónica parte de hechos verificables."
        }
      ]
    },
    {
      id: 15,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Crónica",
      pregunta: "«Eran las seis de la mañana cuando las primeras familias llegaron a la plaza; con el correr de las horas, el bullicio fue creciendo hasta volverse fiesta.» ¿Qué género es y qué rasgo lo delata?",
      opciones: [
        "Noticia, por la pirámide invertida",
        "Crónica, por la narración en orden cronológico con estilo expresivo",
        "Artículo de opinión, por la postura del autor"
      ],
      correcta: 1,
      explicacion: "El fragmento narra hechos reales siguiendo el paso del tiempo («eran las seis», «con el correr de las horas») y con un estilo expresivo: es una crónica. No usa pirámide invertida (no es noticia) ni argumenta una postura (no es artículo de opinión).",
      pasos: []
    },

    // ── Comparación final ─────────────────────────────────────────────────────
    {
      id: 16,
      tipo: "regla_rica",
      etiqueta: "Síntesis · Cómo distinguirlos",
      titulo: "Distinguir géneros parecidos",
      bloques: [
        {
          tipo: "texto",
          texto: "Las confusiones más frecuentes del EXANI-II se dan entre géneros cercanos. Recuerda los pares clave: noticia vs. artículo de opinión (objetividad vs. valoración); ensayo vs. reseña (idea propia vs. comentario de una obra); crónica vs. noticia (orden cronológico con estilo vs. pirámide invertida objetiva); prólogo vs. introducción/desarrollo (habla sobre la obra vs. desarrolla el tema). En todos los casos, pregúntate primero por el propósito."
        },
        {
          tipo: "tabla",
          titulo: "Pares fáciles de confundir",
          columnas: ["Par de géneros", "Lo que comparten", "Lo que los distingue"],
          filas: [
            { tiempo: "Noticia vs. art. de opinión", correcto: "Tema de actualidad, medio", error: "La noticia informa; la opinión valora" },
            { tiempo: "Ensayo vs. reseña",            correcto: "Son argumentativos",        error: "El ensayo defiende una idea; la reseña comenta una obra" },
            { tiempo: "Crónica vs. noticia",          correcto: "Informan hechos reales",    error: "La crónica narra en orden temporal con estilo; la noticia, en pirámide invertida" },
            { tiempo: "Prólogo vs. desarrollo",       correcto: "Aparecen en un libro",      error: "El prólogo habla sobre la obra; el desarrollo expone el tema" }
          ]
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "Ante la duda, identifica el propósito dominante: informar, argumentar, valorar, narrar o presentar",
          correcto: "Si el texto «valora una película» → reseña; si «narra hora por hora una jornada» → crónica.",
          incorrecto: "Decidir por el tema o la longitud: dos géneros distintos pueden compartir tema y extensión."
        }
      ]
    },
    {
      id: 17,
      tipo: "ejercicio",
      etiqueta: "Reactivo final — Síntesis",
      pregunta: "Un texto comenta el último libro de un autor, resume su contenido y concluye si vale la pena leerlo. ¿Qué género es?",
      opciones: [
        "Ensayo, porque reflexiona sobre un tema",
        "Reseña, porque describe y valora una obra para orientar al lector",
        "Prólogo, porque presenta un libro"
      ],
      correcta: 1,
      explicacion: "Describir el contenido de una obra y valorar si vale la pena leerla es exactamente el propósito de la reseña. No es ensayo (no defiende una tesis propia), ni prólogo (este presenta la obra desde dentro del propio libro, no la valora desde fuera).",
      pasos: []
    },

    // ── Cierre ────────────────────────────────────────────────────────────────
    {
      id: 18,
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Los seis géneros de un vistazo",
      puntos: [
        { titulo: "Prólogo", texto: "presenta y enmarca una obra; habla sobre ella, no desarrolla el tema" },
        { titulo: "Ensayo", texto: "argumenta una tesis personal con razones y ejemplos" },
        { titulo: "Reseña", texto: "describe y valora una obra para orientar al lector" },
        { titulo: "Noticia", texto: "informa un hecho con objetividad; pirámide invertida y las 6 preguntas" },
        { titulo: "Artículo de opinión", texto: "autor identificado que valora y persuade sobre la actualidad" },
        { titulo: "Crónica", texto: "narra hechos reales en orden cronológico con estilo literario" }
      ]
    }

  ]
};
