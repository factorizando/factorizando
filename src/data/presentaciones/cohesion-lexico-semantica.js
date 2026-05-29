// Presentación: Cohesión Léxico-Semántica — Sinonimia y antonimia contextual
// 20 slides (0-19) — Redacción Indirecta · EXANI-I

export const PRESENTACION = {
  id: "cohesion-lexico-semantica",
  titulo: "Cohesión Léxico-Semántica",
  materia: "Español",
  subtema: "Redacción Indirecta",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Cohesión Léxico-Semántica",
      subtitulo: "Sinonimia y antonimia contextual — las relaciones de significado que unifican el texto",
      etiqueta: "Español · Redacción Indirecta · EXANI-I",
    },

    // ── Introducción ──────────────────────────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Introducción",
      titulo: "Del léxico al texto: cómo las palabras crean unidad",
      bloques: [
        {
          tipo: "texto",
          texto: "La cohesión léxico-semántica es el sistema de relaciones de significado que une las palabras de un texto. A diferencia de la cohesión gramatical (que usa pronombres y elipsis), aquí la unidad se construye con el significado mismo: eligiendo términos equivalentes (sinonimia), opuestos (antonimia) o pertenecientes al mismo campo conceptual. El EXANI-I evalúa la capacidad de reconocer y aplicar estos mecanismos en tareas de redacción indirecta.",
        },
        {
          tipo: "diagrama",
          id: "lexico-semantica-panorama",
          titulo: "Mapa: mecanismos de cohesión léxico-semántica evaluados en el EXANI-I",
        },
        {
          tipo: "tabla",
          titulo: "Los cuatro mecanismos principales",
          columnas: ["Mecanismo", "Relación semántica", "Función textual"],
          filas: [
            { tiempo: "Sinonimia",              correcto: "Palabras de significado similar",           error: "Evita la repetición y matiza el referente" },
            { tiempo: "Sinonimia contextual",    correcto: "Equivalencia establecida en el texto",      error: "Crea variación expresiva sin cambiar referente" },
            { tiempo: "Antonimia",              correcto: "Palabras de significado opuesto",           error: "Contrasta, estructura el argumento" },
            { tiempo: "Antonimia contextual",   correcto: "Oposición relativa al marco del texto",     error: "Matiza comparaciones según el referente" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Cohesión léxico-semántica ≠ cohesión gramatical: usar un sinónimo no es lo mismo que usar un pronombre — ambos evitan la repetición, pero por mecanismos distintos",
          correcto: "El científico publicó su hallazgo. El investigador fue muy elogiado. (sinónimo contextual: cohesión léxico-semántica)",
          incorrecto: "El científico publicó su hallazgo. Él fue muy elogiado. (pronombre: cohesión gramatical)",
        },
      ],
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Introducción",
      pregunta: "«Llegó un viajero al pueblo. El forastero se instaló en la posada. Nadie conocía al desconocido.» ¿Qué mecanismo de cohesión mantiene la unidad de este fragmento?",
      opciones: [
        "Correferencia pronominal — los tres términos son pronombres",
        "Sinonimia contextual — los tres términos refieren al mismo personaje con palabras distintas",
        "Elipsis verbal — se omite el verbo en las últimas oraciones",
      ],
      correcta: 1,
      explicacion: "Sinonimia contextual — «viajero», «forastero» y «desconocido» son tres expresiones distintas que el texto equipara para referirse al mismo personaje. No son pronombres ni elipsis; son palabras de contenido léxico que crean cohesión por equivalencia semántica contextual.",
      pasos: [],
    },

    // ── Mecanismo 1: Sinonimia ─────────────────────────────────────────────────
    {
      id: 3,
      tipo: "regla_rica",
      etiqueta: "Mecanismo 1 / 4 · Sinonimia",
      titulo: "Sinónimos — palabras distintas, significado similar",
      bloques: [
        {
          tipo: "texto",
          texto: "Un sinónimo es una palabra que comparte el mismo significado (o gran parte de él) con otra. En lingüística se distinguen tres tipos: (1) sinónimos totales: significados idénticos e intercambiables en cualquier contexto; (2) sinónimos parciales: significados similares con matices de registro, connotación o uso regional; (3) sinónimos contextuales: dos expresiones que el texto equipara solo en ese fragmento. El EXANI-I evalúa principalmente los tipos parcial y contextual.",
        },
        {
          tipo: "diagrama",
          id: "sinonimia-tipos",
          titulo: "Espectro de la sinonimia: de la identidad a la equivalencia contextual",
        },
        {
          tipo: "tabla",
          titulo: "Tipos de sinonimia",
          columnas: ["Tipo", "Relación", "Ejemplo textual"],
          filas: [
            { tiempo: "Total (absoluto)",  correcto: "Intercambiables en cualquier contexto",          error: "«comenzar / iniciar» · «automóvil / coche»" },
            { tiempo: "Parcial",           correcto: "Similar con matices de registro o connotación",  error: "«casa» (neutro) / «hogar» (afectivo)" },
            { tiempo: "Contextual",        correcto: "Equivalentes solo en este fragmento",            error: "«el poeta» / «el Nobel» si así se describe en el texto" },
          ],
        },
        {
          tipo: "par",
          etiqueta: "sinónimos parciales: el registro distingue cuál usar en cada texto",
          correcto: "El paciente falleció esta mañana. (fallecer: registro formal/eufemístico, apropiado en texto médico)",
          incorrecto: "El paciente se murió esta mañana. (morirse: registro coloquial, inapropiado en texto formal o periodístico)",
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "No todo sustituto léxico es sinónimo: hiperónimo, hipónimo y descripción evitan la repetición, pero no son sinónimos del término original",
          correcto: "Vi una paloma. El ave posó en la cornisa. (ave = hiperónimo de paloma → sustituto léxico válido, no sinónimo)",
          incorrecto: "Vi una paloma. El gorrión posó en la cornisa. (gorrión = cohipónimo de paloma → crea un referente distinto, no evita la repetición)",
        },
      ],
    },
    {
      id: 4,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Sinonimia",
      pregunta: "«El orador habló durante dos horas. El conferenciante dominó la atención del público.» ¿Qué tipo de sinonimia vincula «orador» y «conferenciante»?",
      opciones: [
        "Sinónimos totales: intercambiables en cualquier contexto",
        "Sinónimos parciales: similares con matices de contexto o registro",
        "Sinónimos contextuales: equivalentes solo en este fragmento",
      ],
      correcta: 1,
      explicacion: "Sinónimos parciales — «orador» y «conferenciante» comparten el rasgo [+habla ante un público], pero «conferenciante» implica un evento académico o formal, mientras que «orador» es más general. Son similares con matices contextuales, lo que los hace sinónimos parciales, no totales ni exclusivamente contextuales.",
      pasos: [],
    },
    {
      id: 5,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Sinonimia",
      pregunta: "¿Cuál de los siguientes pares son sinónimos totales (intercambiables en CUALQUIER contexto sin cambio de significado ni registro)?",
      opciones: [
        "casa / hogar",
        "comenzar / iniciar",
        "anciano / viejo",
      ],
      correcta: 1,
      explicacion: "«comenzar / iniciar» son sinónimos totales: en cualquier contexto son intercambiables sin cambio de significado ni registro. «Casa / hogar» son parciales (hogar tiene carga afectiva). «Anciano / viejo» son parciales: «viejo» puede ser peyorativo según el contexto, mientras que «anciano» es más neutro y formal.",
      pasos: [],
    },

    // ── Mecanismo 2: Sinonimia contextual ─────────────────────────────────────
    {
      id: 6,
      tipo: "regla_rica",
      etiqueta: "Mecanismo 2 / 4 · Sinonimia Contextual",
      titulo: "El sinónimo contextual — equivalencia construida por el texto",
      bloques: [
        {
          tipo: "texto",
          texto: "La sinonimia contextual ocurre cuando el texto equipara dos expresiones distintas para referirse al mismo referente en ese fragmento. No es una relación fija del diccionario, sino construida por el autor: «el astro rey», «el sol» y «la estrella central» pueden ser sinónimos contextuales en un texto de astronomía. Regla clave del EXANI-I: el sinónimo contextual debe ser semánticamente compatible con TODOS los rasgos del referente en ese fragmento, no solo con algunos.",
        },
        {
          tipo: "diagrama",
          id: "sinonimia-contextual",
          titulo: "La misma palabra — distintos sinónimos según el contexto",
        },
        {
          tipo: "tabla",
          titulo: "Validez del sinónimo contextual: depende del texto completo",
          columnas: ["Expresión", "Sinónimo contextual", "Condición de validez"],
          filas: [
            { tiempo: "«el poeta»",              correcto: "«el Premio Nobel»",    error: "Solo si el texto describe que ese poeta recibió el Nobel" },
            { tiempo: "«el sol»",                correcto: "«el astro rey»",       error: "Solo en contextos donde «rey» alude a mayor brillo o centralidad" },
            { tiempo: "«el texto era ligero»",   correcto: "«ameno»",             error: "Solo si «ligero» se usa en sentido estilístico (no de peso físico)" },
          ],
        },
        {
          tipo: "par",
          etiqueta: "el sinónimo contextual solo funciona dentro de ese texto",
          correcto: "La mariposa revoloteó. El lepidóptero se posó en la flor. (lepidóptero = sinónimo contextual de mariposa; siempre válido aquí)",
          incorrecto: "El texto era ligero. Me gustó su peso liviano. (liviano refiere al peso físico → incorrecto para «ligero» en sentido estilístico)",
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "El sinónimo contextual debe ser compatible con TODOS los rasgos del referente en ese fragmento — un sinónimo parcial incorrecto crea incoherencia",
          correcto: "Beethoven compuso la 9ª Sinfonía. El compositor alemán la presentó ante el público. (compositor alemán: compatible con Beethoven en ese texto)",
          incorrecto: "Beethoven compuso la 9ª Sinfonía. El director de orquesta la presentó. (Beethoven fue compositor, no director — sinónimo contextual incorrecto)",
        },
      ],
    },
    {
      id: 7,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Sinonimia Contextual",
      pregunta: "«La novela resultó árida y difícil. El ____ de la autora alejó a muchos lectores.» ¿Qué sinónimo contextual de «árida» mantiene la cohesión?",
      opciones: [
        "Desierto",
        "Estilo hermético",
        "Suelo seco",
      ],
      correcta: 1,
      explicacion: "«Estilo hermético» — en este contexto, «árida» significa 'difícil de acceder, poco amena' (sentido figurado). Solo «estilo hermético» pertenece al campo semántico de la escritura difícil. «Desierto» y «suelo seco» activan el sentido literal del adjetivo, creando incoherencia con el referente (la novela y la autora).",
      pasos: [],
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Sinonimia Contextual",
      pregunta: "«Beethoven compuso su 9ª Sinfonía siendo sordo. El ____, a pesar de su discapacidad, creó una de las obras más grandes de la historia.» ¿Qué sinónimo contextual mantiene la cohesión?",
      opciones: [
        "El sordomudo",
        "El compositor alemán",
        "El director de orquesta",
      ],
      correcta: 1,
      explicacion: "«El compositor alemán» — es compatible con todos los rasgos de Beethoven en ese fragmento. «El sordomudo» es incorrecto: sordomudo implica también mudez, lo cual es un error factual. «El director de orquesta» es inexacto: en este fragmento Beethoven aparece como compositor; usar «director» crea un nuevo rol no establecido en el texto.",
      pasos: [],
    },

    // ── Mecanismo 3: Antonimia ─────────────────────────────────────────────────
    {
      id: 9,
      tipo: "regla_rica",
      etiqueta: "Mecanismo 3 / 4 · Antonimia",
      titulo: "Antónimos — tres tipos, tres lógicas distintas",
      bloques: [
        {
          tipo: "texto",
          texto: "Los antónimos son palabras con significados opuestos. Hay tres tipos: (1) graduales: admiten términos intermedios y dependen del grado de una propiedad (frío/caliente admite «tibio»); (2) complementarios: la afirmación de uno implica la negación del otro, sin término medio (vivo/muerto); (3) recíprocos o conversos: describen la misma relación desde perspectivas opuestas (comprar/vender). El EXANI-I evalúa la identificación del tipo y las inferencias que cada uno permite.",
        },
        {
          tipo: "diagrama",
          id: "antonimia-tipos",
          titulo: "Graduales · Complementarios · Recíprocos — lógicas distintas",
        },
        {
          tipo: "tabla",
          titulo: "Comparación de los tres tipos de antonimia",
          columnas: ["Tipo", "Lógica", "Inferencia clave"],
          filas: [
            { tiempo: "Gradual",        correcto: "Escala con términos intermedios",    error: "«no frío» ≠ «caliente» (puede ser tibio)" },
            { tiempo: "Complementario", correcto: "Binario: no hay término intermedio", error: "«no vivo» = «muerto» (la negación implica el opuesto)" },
            { tiempo: "Recíproco",      correcto: "Misma relación desde dos ángulos",   error: "Si A compra, necesariamente B vende" },
          ],
        },
        {
          tipo: "par",
          etiqueta: "graduales vs. complementarios: la negación cambia de lógica",
          correcto: "Si no es joven, puede ser adulto o anciano. (gradual: la negación deja varios términos posibles)",
          incorrecto: "Si no es joven, entonces es anciano. (error: presupone que joven/anciano son complementarios, cuando son graduales con «adulto» como término intermedio)",
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "«Comprar / vender» NO son opuestos complementarios sino recíprocos: sin comprador no hay vendedor; describen el mismo acto desde dos perspectivas",
          correcto: "Pedro compró el libro a María → María vendió el libro a Pedro. (misma transacción desde dos perspectivas)",
          incorrecto: "Pedro no compró el libro → María no vendió el libro. (inválido: puede haber otro comprador; la implicación es solo si Pedro era el único posible)",
        },
      ],
    },
    {
      id: 10,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Antonimia",
      pregunta: "¿Qué tipo de antonimia expresan «verdadero» y «falso»?",
      opciones: [
        "Gradual — hay grados de verdad",
        "Complementaria — la negación de uno implica el otro",
        "Recíproca — describen el mismo estado desde dos perspectivas",
      ],
      correcta: 1,
      explicacion: "Complementaria — «verdadero / falso» son antónimos complementarios: en lógica proposicional, una afirmación es verdadera o falsa sin término intermedio. La negación de «verdadero» implica necesariamente «falso». (En epistemología puede debatirse, pero el EXANI-I trabaja con la lógica binaria estándar de estos adjetivos.)",
      pasos: [],
    },
    {
      id: 11,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Antonimia",
      pregunta: "«La profesora enseña matemáticas a sus alumnos.» ¿Qué tipo de antonimia tiene «enseñar / aprender» y qué se puede inferir?",
      opciones: [
        "Son graduales; los alumnos aprenden más o menos según su esfuerzo",
        "Son recíprocos; si la profesora enseña, los alumnos aprenden desde la perspectiva opuesta del mismo acto",
        "Son complementarios; solo uno de los dos ocurre a la vez",
      ],
      correcta: 1,
      explicacion: "Recíprocos — «enseñar / aprender» describen la misma relación pedagógica desde perspectivas opuestas: donde hay enseñanza hay (potencialmente) aprendizaje. No son complementarios (ambos ocurren simultáneamente en el mismo evento) ni graduales (no hay términos intermedios entre enseñar y aprender dentro de esa relación).",
      pasos: [],
    },

    // ── Mecanismo 4: Antonimia contextual ─────────────────────────────────────
    {
      id: 12,
      tipo: "regla_rica",
      etiqueta: "Mecanismo 4 / 4 · Antonimia Contextual",
      titulo: "La antonimia contextual — el marco de referencia lo cambia todo",
      bloques: [
        {
          tipo: "texto",
          texto: "La antonimia contextual ocurre cuando una oposición semántica cobra significado específico según el marco de referencia del texto. Los adjetivos graduales como grande/pequeño, largo/corto, rápido/lento son inherentemente relativos: su valor depende del estándar implícito del referente. «Un coche rápido» implica una velocidad diferente que «un corredor rápido». El EXANI-I evalúa la capacidad de reconocer cuándo un antónimo contextual cambia de valor según el referente.",
        },
        {
          tipo: "diagrama",
          id: "antonimia-contextual",
          titulo: "El mismo adjetivo — distinto valor según el marco de referencia",
        },
        {
          tipo: "tabla",
          titulo: "Ejemplos de antonimia contextual relativa",
          columnas: ["Oración", "Antónimo contextual de…", "Marco de referencia implícito"],
          filas: [
            { tiempo: "«Es un libro corto»",         correcto: "largo",   error: "Número de páginas típico de ese género literario" },
            { tiempo: "«Es una carrera corta»",       correcto: "larga",  error: "Distancia estándar de esa disciplina atlética" },
            { tiempo: "«Es un viaje largo» (avión)",  correcto: "corto",  error: "Duración típica de vuelos comerciales" },
          ],
        },
        {
          tipo: "par",
          etiqueta: "el adjetivo gradual es siempre relativo al referente implícito",
          correcto: "El estadio era enorme para una ciudad de su tamaño. (enorme relativo al estándar de ciudades pequeñas, no en términos absolutos)",
          incorrecto: "El estadio era enorme. Cabían 50 personas. (contradicción: si caben solo 50 personas, «enorme» es incompatible con ese dato → incoherencia contextual)",
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Los antónimos graduales siempre remiten a un referente implícito: «sueldo alto» en México ≠ «sueldo alto» en Noruega — el EXANI-I evalúa estas inferencias",
          correcto: "Para un velocista olímpico, 12 segundos en 100 m es lento. (marco: élite mundial, cuyo récord es 9.58 s)",
          incorrecto: "Para cualquier persona, 12 segundos en 100 m es lento. (error: en la escala humana general, 12 s sigue siendo muy rápido → marco de referencia incorrecto)",
        },
      ],
    },
    {
      id: 13,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Antonimia Contextual",
      pregunta: "«Para un velocista olímpico, 12 segundos en los 100 metros es un tiempo lento.» ¿Qué marco de referencia determina el valor de «lento»?",
      opciones: [
        "El tiempo estándar de cualquier persona que corre",
        "La escala del velocismo olímpico de élite, cuyo récord mundial es ≈ 9.58 s",
        "La percepción subjetiva del espectador durante la carrera",
      ],
      correcta: 1,
      explicacion: "La escala del velocismo de élite — «lento» aquí solo cobra sentido comparado con el rendimiento de los mejores del mundo (9.58 s). En la escala humana general (promedio > 14 s), 12 s sería «rápido». El marco de referencia implícito del texto —velocistas olímpicos— determina el valor del adjetivo gradual.",
      pasos: [],
    },
    {
      id: 14,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Antonimia Contextual",
      pregunta: "«Era un salario bajo para un médico especialista.» ¿Qué inferencia es correcta?",
      opciones: [
        "El salario era menor al salario mínimo del país",
        "El salario era bajo comparado con el estándar de médicos especialistas, pero podría ser alto en otro marco",
        "El médico trabajaba de forma voluntaria sin remuneración",
      ],
      correcta: 1,
      explicacion: "Marco relativo — «bajo» es un adjetivo gradual cuyo valor depende de la escala implícita: el estándar salarial de los médicos especialistas en ese contexto. El mismo salario podría calificarse de «alto» si el marco de referencia fuera otro (por ejemplo, el salario mínimo). La antonimia contextual gradual siempre requiere identificar el referente implícito.",
      pasos: [],
    },

    // ── Campo semántico ────────────────────────────────────────────────────────
    {
      id: 15,
      tipo: "regla_rica",
      etiqueta: "Relaciones semánticas · Campo semántico",
      titulo: "Hiperonimia, hiponimia y cohiponimia",
      bloques: [
        {
          tipo: "texto",
          texto: "Un campo semántico es el conjunto de palabras que comparten un rasgo de significado común. Dentro de un campo semántico se dan tres relaciones clave: (1) hiperonimia: la palabra más general que incluye a las demás (animal → mamífero); (2) hiponimia: la palabra más específica contenida en otra (perro es hipónimo de mamífero); (3) cohiponimia: términos al mismo nivel de especificidad dentro del mismo hiperónimo (perro y gato son cohipónimos de mamífero). El EXANI-I evalúa el uso de hiperónimos como sustitutos léxicos cohesivos.",
        },
        {
          tipo: "diagrama",
          id: "campo-semantico",
          titulo: "Jerarquía semántica: hiperónimo → cohipónimos → hipónimos",
        },
        {
          tipo: "tabla",
          titulo: "Las tres relaciones del campo semántico",
          columnas: ["Relación", "Dirección", "Ejemplo"],
          filas: [
            { tiempo: "Hiperonimia",  correcto: "General incluye al específico",       error: "animal → mamífero → perro" },
            { tiempo: "Hiponimia",    correcto: "Específico contenido en el general",  error: "collie → perro → mamífero → animal" },
            { tiempo: "Cohiponimia",  correcto: "Mismo nivel bajo el mismo hiperónimo", error: "perro / gato / caballo (todos hipónimos de «mamífero»)" },
          ],
        },
        {
          tipo: "par",
          etiqueta: "hiperónimo como sustituto léxico — cohipónimo como error de cohesión",
          correcto: "Vi un cocker. El perro menó la cola. (perro = hiperónimo de cocker → sustitución válida, mismo referente)",
          incorrecto: "Vi un cocker. El labrador menó la cola. (labrador = cohipónimo de cocker → referente distinto, no el mismo animal)",
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "Usar un cohipónimo en lugar del término original no crea cohesión — introduce un referente diferente y rompe la unidad del texto",
          correcto: "El águila sobrevolaba el valle. El ave dominó el horizonte. (ave = hiperónimo de águila → mismo referente, cohesión correcta)",
          incorrecto: "El águila sobrevolaba el valle. El gavilán dominó el horizonte. (gavilán = cohipónimo de águila → lector entiende que hay dos aves distintas)",
        },
      ],
    },
    {
      id: 16,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Campo Semántico",
      pregunta: "«El águila planeó sobre el valle. El ____ dominó el horizonte durante horas.» ¿Qué sustituto léxico crea la cohesión por campo semántico?",
      opciones: [
        "El pez",
        "El ave",
        "El gavilán",
      ],
      correcta: 1,
      explicacion: "«El ave» — es el hiperónimo de «águila»: mantiene el mismo referente usando la categoría superior. «El pez» no pertenece al campo semántico de las aves rapaces. «El gavilán» es cohipónimo de «águila» (ambas aves rapaces): usarlo sugeriría que hay una segunda ave distinta, rompiendo la cohesión.",
      pasos: [],
    },

    // ── La trampa del EXANI-I ──────────────────────────────────────────────────
    {
      id: 17,
      tipo: "regla_rica",
      etiqueta: "La trampa del EXANI-I",
      titulo: "Falsos sinónimos y ruptura de registro",
      bloques: [
        {
          tipo: "texto",
          texto: "El EXANI-I evalúa dos trampas frecuentes en cohesión léxico-semántica: (1) falsos sinónimos: palabras relacionadas pero no equivalentes en el contexto del texto (historia ≠ cuento en un texto de no ficción); (2) ruptura de registro: palabras con el mismo significado denotativo pero de nivel de lengua diferente (formal/coloquial, técnico/popular) que generan inconsistencia estilística. Reconocer estas trampas requiere analizar no solo el significado sino también el contexto y el registro del fragmento.",
        },
        {
          tipo: "tabla",
          titulo: "Trampas léxico-semánticas del EXANI-I",
          columnas: ["Trampa", "Descripción", "Ejemplo de error"],
          filas: [
            { tiempo: "Falso sinónimo",          correcto: "Parecidos pero no equivalentes en ese contexto", error: "«historia / cuento» — cuento implica brevedad y ficción" },
            { tiempo: "Ruptura de registro",      correcto: "Mismo significado, distinto nivel de lengua",    error: "Mezclar «falleció» (formal) con «se murió» (coloquial)" },
            { tiempo: "Cohipónimo por sinónimo",  correcto: "Usar el mismo campo sin ser el mismo referente", error: "«cocker → labrador» (genera un referente nuevo, no cohesiona)" },
            { tiempo: "Antonimia falsa",          correcto: "Palabras que parecen opuestos pero no lo son",  error: "«ciudad / campo» no siempre son antónimos en todos los textos" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Historia ≠ cuento: aunque ambas son narraciones, «cuento» implica brevedad y ficción — usarlo para referirse a un texto de no ficción crea un falso sinónimo",
          correcto: "Escribió una historia de ciencia ficción. La narración cautivó a los lectores. (narración = sinónimo contextual válido, neutro)",
          incorrecto: "Escribió una historia de ciencia ficción. El cuento cautivó a los lectores. (cuento implica brevedad y estructura específica → puede no corresponder al referente)",
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "Mezclar registros rompe la coherencia estilística — el EXANI-I penaliza la inconsistencia de nivel de lengua dentro del mismo fragmento",
          correcto: "El paciente presentó cefalea intensa. El médico recetó analgésicos. (registro técnico-formal consistente)",
          incorrecto: "El paciente presentó cefalea intensa. El galeno le dio algo para el dolor de cabeza. (mezcla de registro técnico «cefalea» con coloquial «algo para el dolor» → incoherencia estilística)",
        },
      ],
    },
    {
      id: 18,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Falsos sinónimos",
      pregunta: "«El texto científico afirmaba que la Tierra gira alrededor del Sol. La ____ fue aceptada por la comunidad académica.» ¿Qué sustituto léxico mantiene la cohesión sin crear un falso sinónimo?",
      opciones: [
        "La leyenda",
        "La afirmación",
        "El cuento",
      ],
      correcta: 1,
      explicacion: "«La afirmación» — equivale a «afirmaba» sin añadir connotación inapropiada. «La leyenda» implica narración mítica o transmisión oral, incompatible con un texto científico. «El cuento» connota ficción e irrealidad. Ambos son falsos sinónimos en este contexto: comparten el rasgo general [+narración], pero sus connotaciones son incompatibles con el referente «texto científico».",
      pasos: [],
    },
    {
      id: 19,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Ruptura de registro",
      pregunta: "¿Cuál de las siguientes opciones corrige el problema de cohesión en: «El presidente disertó durante una hora. El mero discurseó hasta el cansancio.»?",
      opciones: [
        "El presidente discurseó hasta el cansancio.",
        "El mandatario habló extensamente hasta el final de la velada.",
        "El jefe de estado mero discurseó una hora más.",
      ],
      correcta: 1,
      explicacion: "La oración original mezcla registro formal («presidente», «disertó») con registro coloquial-informal («mero», «discurseó» — mexicanismo coloquial). «El mandatario habló extensamente» corrige la ruptura: «mandatario» es sinónimo formal de «presidente» y «habló extensamente» es equivalente culto de «disertó». Las opciones A y C mantienen «discurseó» (coloquial) o «mero» (coloquial), perpetuando la inconsistencia de registro.",
      pasos: [],
    },

  ],
};
