// Datos de la presentación: Acentuación
// 12 reglas esenciales para el EXANI-I — Ortografía

export const PRESENTACION = {
  id: "acentuacion",
  titulo: "Acentuación",
  materia: "Español",
  slides: [
    // ── Portada ──────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Acentuación",
      subtitulo: "Las 12 reglas esenciales para el EXANI-I",
      etiqueta: "Español · Ortografía",
    },

    // ── Resumen visual completo de tildes ─────────────────────────────────────
    {
      id: "resumen-visual",
      tipo: "arbol_decision",
      etiqueta: "Mapa de referencia",
      titulo: "¿Cuándo lleva tilde?",
    },

    // ── Intro 1: Cómo silabear ────────────────────────────────────────────────
    {
      id: 49,
      tipo: "regla_rica",
      etiqueta: "Introducción · Silabeo",
      titulo: "Cómo dividir una palabra en sílabas",
      bloques: [
        {
          tipo: "texto",
          texto:
            "La sílaba es la unidad mínima de pronunciación: cada una contiene al menos una vocal. Silabear correctamente es el paso previo a clasificar una palabra y aplicar cualquier regla de acentuación. Seis reglas cubren la mayoría de los casos del español.",
        },
        {
          tipo: "tabla",
          titulo: "Reglas de silabeo",
          columnas: ["Situación", "Regla", "Ejemplos"],
          filas: [
            {
              tiempo: "1 consonante entre vocales",
              correcto: "Va con la sílaba siguiente",
              error: "ma-no · ca-sa · li-bro · pa-lo",
            },
            {
              tiempo: "2 consonantes entre vocales",
              correcto: "Se separan (una para cada lado)",
              error: "car-ta · es-ta · per-so-na · tam-bién",
            },
            {
              tiempo:
                "Grupos inseparables (pr br tr dr fr gr cr pl bl fl gl cl)",
              correcto: "Van juntos con la vocal siguiente",
              error: "pa-dre · o-bra · a-gua · re-fres-co · a-brir",
            },
            {
              tiempo: "rr · ll · ch (fonema único)",
              correcto: "Nunca se separan",
              error: "pe-rro · ca-lle · mu-cho · ha-cha",
            },
            {
              tiempo: "Diptongo (cerrada átona + abierta)",
              correcto: "Una sola sílaba",
              error: "ai-re · bue-no · viu-da · cau-sa",
            },
            {
              tiempo: "Hiato (cerrada tónica + vocal)",
              correcto: "Sílabas separadas; tilde en la cerrada",
              error: "pa-ís · Ma-rí-a · ba-úl · pro-hí-be",
            },
          ],
        },
        {
          tipo: "par",
          etiqueta: "diptongo vs. hiato — la tonicidad de la cerrada decide",
          correcto:
            "«bueno» → bue-no (2 sílabas): u es átona → diptongo → una sola sílaba.",
          incorrecto:
            "«bu-e-no» (3 sílabas) — error: la u es átona, no rompe el diptongo.",
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo:
            "La h entre vocales es muda — las vocales interactúan como si la h no existiera",
          correcto:
            "pro-hí-be (3 sílabas): la í tónica forma hiato con la e; lleva tilde por hiato.",
          incorrecto:
            "pro-hi-be sin tilde — error: ignorar que la í es tónica porque la h «separa» visualmente las vocales.",
        },
      ],
    },
    {
      id: 50,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Silabeo",
      pregunta: "¿Cuántas sílabas tiene la palabra «establecimiento»?",
      opciones: ["5 sílabas", "6 sílabas", "7 sílabas"],
      correcta: 1,
      explicacion:
        "«es-ta-ble-ci-mien-to» — 6 sílabas. El grupo «bl» es inseparable (va junto) y «mien» es diptongo (ie átono), por lo que ambos cuentan como una sola sílaba cada uno.",
      pasos: [],
    },
    {
      id: 51,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Silabeo",
      pregunta: "¿Cuál de los siguientes silabeos es correcto?",
      opciones: ["prob-le-ma", "pro-ble-ma", "pro-bl-e-ma"],
      correcta: 1,
      explicacion:
        "«pro-ble-ma» — el grupo «bl» es inseparable: nunca se divide entre dos sílabas. Siempre va junto con la vocal que sigue.",
      pasos: [],
    },
    {
      id: 52,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Silabeo",
      pregunta:
        "¿Cuál de los siguientes silabeos es correcto para la palabra «prohíbe»?",
      opciones: ["proh-í-be", "pro-hí-be", "pro-hi-be"],
      correcta: 1,
      explicacion:
        "«pro-hí-be» — la h es muda; la í es tónica y forma hiato con la e. La tilde en la í marca ese hiato. «Pro-hi-be» sin tilde y «proh-í-be» (la h no separa sílabas así) son incorrectos.",
      pasos: [],
    },

    // ── Intro 2: Cómo encontrar la sílaba tónica ─────────────────────────────
    {
      id: 53,
      tipo: "regla_rica",
      etiqueta: "Introducción · Sílaba tónica",
      titulo: "Cómo encontrar la sílaba tónica",
      bloques: [
        {
          tipo: "texto",
          texto:
            "La sílaba tónica es la que se pronuncia con mayor fuerza. Si la palabra lleva tilde, la tónica ya está señalada. Si no la lleva, pronúnciala en voz alta cambiando el acento de sílaba en sílaba: la versión que suena natural revela la tónica. En español, la mayoría de las palabras sin tilde son llanas (tónica en la penúltima sílaba).",
        },
        {
          tipo: "tabla",
          titulo: "Pistas para identificar la sílaba tónica",
          columnas: ["Pista", "Explicación", "Ejemplo"],
          filas: [
            {
              tiempo: "Lleva tilde",
              correcto: "La tilde señala directamente la tónica",
              error: "te-lé-fo-no → tónica en «lé»",
            },
            {
              tiempo: "Sin tilde, termina en vocal/n/s",
              correcto: "Casi siempre llana: tónica en penúltima",
              error: "CA-sa · LI-bro · JO-ven · ór-de-nes",
            },
            {
              tiempo: "Sin tilde, otra consonante final",
              correcto: "Puede ser aguda o llana — prueba ambas",
              error: "ciu-DAD (aguda) · ár-bol (llana)",
            },
            {
              tiempo: "Prueba oral",
              correcto:
                "Mueve el acento de sílaba en sílaba hasta que suene natural",
              error: "ma-NO vs. MA-no → MA-no ✓ (llana)",
            },
            {
              tiempo: "Prefijos (des-, in-, pre-, re-…)",
              correcto: "Siempre átonos — la tónica está en la raíz",
              error: "des-cu-BRIR · in-com-PLE-to",
            },
          ],
        },
        {
          tipo: "par",
          etiqueta: "leer la tónica sin tilde — prueba oral",
          correcto:
            "«examen» → e-XA-men: la sílaba «xa» suena más fuerte → penúltima → llana → termina en n → sin tilde.",
          incorrecto:
            "«éxamen» — error: la tónica está en «-xa-», no en «e-»; escribir tilde en la primera sílaba es incorrecto.",
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo:
            "Los prefijos (des-, in-, pre-, re-, sub-) son siempre átonos — nunca cargues el acento en ellos",
          correcto:
            "des-cu-BRIR (aguda: -brir tónica, termina en r → sin tilde) · in-com-PLE-to (llana: -ple- tónica, termina en o → sin tilde)",
          incorrecto:
            "DES-cubrir o ÍN-completo — error: el prefijo nunca es la sílaba tónica en español.",
        },
      ],
    },
    {
      id: 54,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Sílaba tónica",
      pregunta: "¿Cuál es la sílaba tónica de «teléfono»?",
      opciones: ["«te-» (primera)", "«-lé-» (segunda)", "«-fo-» (tercera)"],
      correcta: 1,
      explicacion:
        "«te-LÉ-fo-no» — la tilde sobre la é indica directamente que «-lé-» es la sílaba tónica. Es la antepenúltima → la palabra es esdrújula.",
      pasos: [],
    },
    {
      id: 55,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Sílaba tónica",
      pregunta: "«computadora» no lleva tilde. ¿Cuál es su sílaba tónica?",
      opciones: [
        "«-pu-» (segunda sílaba)",
        "«-do-» (penúltima sílaba)",
        "«-ra» (última sílaba)",
      ],
      correcta: 1,
      explicacion:
        "«com-pu-ta-DO-ra» — pronúnciala en voz alta: la sílaba «-do-» suena más fuerte. Es la penúltima → llana → termina en a → no lleva tilde.",
      pasos: [],
    },
    {
      id: 56,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Sílaba tónica",
      pregunta: "La palabra «incompleto» lleva el acento en:",
      opciones: [
        "«in-» (prefijo, primera sílaba)",
        "«-com-» (segunda sílaba)",
        "«-ple-» (penúltima sílaba)",
      ],
      correcta: 2,
      explicacion:
        "«in-com-PLE-to» — el prefijo «in-» es átono. La tónica está en «-ple-» (penúltima sílaba). Llana terminada en o → sin tilde.",
      pasos: [],
    },

    // ── Regla 1: Clasificación ────────────────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Regla 1 / 12",
      titulo: "Clasificación según la posición del acento",
      bloques: [
        {
          tipo: "texto",
          texto:
            "Toda palabra tiene una sílaba que se pronuncia con mayor intensidad: la sílaba tónica. Según dónde recaiga esa sílaba, la palabra se clasifica en uno de cuatro tipos. Identificar el tipo es el primer paso para saber si la palabra lleva tilde o no.",
        },
        {
          tipo: "diagrama",
          id: "acento-clasificacion",
          titulo: "Posición de la sílaba tónica (●) en cada tipo",
        },
        {
          tipo: "tabla",
          titulo: "Los cuatro tipos de palabras según el acento",
          columnas: ["Tipo", "Sílaba tónica", "Ejemplo (tónica en MAYÚSCULAS)"],
          filas: [
            {
              tiempo: "Aguda (oxítona)",
              correcto: "última",
              error: "ca-FÉ · can-CIÓN · re-LOJ · pa-PEL",
            },
            {
              tiempo: "Llana / grave (paroxítona)",
              correcto: "penúltima",
              error: "CA-sa · LI-bro · ÁR-bol · exa-MEN",
            },
            {
              tiempo: "Esdrújula (proparoxítona)",
              correcto: "antepenúltima",
              error: "MÉ-di-co · SÍ-la-ba · RÁ-pi-do",
            },
            {
              tiempo: "Sobreesdrújula",
              correcto: "antes de antepenúlt.",
              error: "CÓ-me-te-lo · DÍ-ga-se-la · ÁY-u-da-me",
            },
          ],
        },
        {
          tipo: "par",
          etiqueta:
            "aguda vs. llana — misma raíz, distinto acento y significado",
          correcto:
            "can-TÓ (aguda, última sílaba) → llevará tilde porque termina en vocal.",
          incorrecto:
            "CAN-to (llana, penúltima sílaba) → no lleva tilde porque termina en vocal.",
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo:
            "«Acento» ≠ «tilde» — el acento es fonético, la tilde (´) es el signo gráfico que lo marca",
          correcto:
            "Todas las palabras tienen acento prosódico. Solo algunas lo marcan gráficamente con tilde.",
          incorrecto:
            "Decir «esta palabra no tiene acento» cuando en realidad no lleva tilde es un error conceptual que aparece en el EXANI-I.",
        },
      ],
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 1",
      pregunta: "La palabra «teléfono» es:",
      opciones: ["Aguda", "Llana", "Esdrújula"],
      correcta: 2,
      explicacion:
        "«te-lé-fo-no» — el acento recae en la antepenúltima sílaba (-lé-): es esdrújula. Las esdrújulas siempre llevan tilde, sin excepción.",
      pasos: [],
    },
    {
      id: 3,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 1",
      pregunta: "La palabra «reloj» es:",
      opciones: ["Esdrújula", "Llana", "Aguda"],
      correcta: 2,
      explicacion:
        "«re-LOJ» — el acento recae en la última sílaba: es aguda. Las agudas llevan tilde solo si terminan en vocal, n o s; «reloj» termina en j, por lo que no lleva tilde.",
      pasos: [],
    },
    {
      id: 4,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 1",
      pregunta: "La palabra «imagen» es:",
      opciones: ["Aguda", "Llana", "Esdrújula"],
      correcta: 1,
      explicacion:
        "«i-MA-gen» — el acento recae en la penúltima sílaba: es llana. Las llanas terminadas en vocal, n o s no llevan tilde; «imagen» termina en n, por lo que no lleva tilde.",
      pasos: [],
    },

    // ── Regla 2: Agudas ───────────────────────────────────────────────────────
    {
      id: 5,
      tipo: "regla_rica",
      etiqueta: "Regla 2 / 12",
      titulo: "Palabras agudas — cuándo llevan tilde",
      bloques: [
        {
          tipo: "texto",
          texto:
            "Las palabras agudas llevan tilde cuando terminan en vocal (a, e, i, o, u), en n o en s. Si terminan en cualquier otra consonante, no llevan tilde. Esta es la regla más frecuente en el EXANI-I.",
        },
        {
          tipo: "tabla",
          titulo: "Terminación de agudas y tilde",
          columnas: ["Terminación", "¿Lleva tilde?", "Ejemplos"],
          filas: [
            {
              tiempo: "vocal (a/e/i/o/u)",
              correcto: "Sí",
              error: "café · mamá · aquí · dominó · menú",
            },
            {
              tiempo: "n",
              correcto: "Sí",
              error: "también · canción · jardín · común",
            },
            {
              tiempo: "s",
              correcto: "Sí",
              error: "cortés · atrás · jamás · además",
            },
            {
              tiempo: "cualquier otra consonante",
              correcto: "No",
              error: "reloj · comer · verdad · capaz · canal · papel",
            },
          ],
        },
        {
          tipo: "par",
          etiqueta: "termina en vocal → con tilde",
          correcto: "El bebé durmió toda la noche sin despertarse.",
          incorrecto: "El bebe durmio toda la noche sin despertarse.",
        },
        {
          tipo: "par",
          etiqueta: "termina en consonante distinta de n/s → sin tilde",
          correcto:
            "El reloj del salón marcaba exactamente las tres de la tarde.",
          incorrecto:
            "El relój del salón marcaba exactamente las tres de la tarde.",
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo:
            "Agudas terminadas en -ns o grupos consonánticos — se aplica la regla con normalidad",
          correcto:
            "compás (termina en s → tilde) · carácter* (llana, no aguda — cuidado al silabear)",
          incorrecto:
            "El error más frecuente: confundir el tipo de palabra antes de aplicar la regla. Silabea primero, clasifica después.",
        },
      ],
    },
    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 2",
      pregunta: "¿Cuál de estas palabras agudas está correctamente escrita?",
      opciones: ["tambien", "también", "tambièn"],
      correcta: 1,
      explicacion:
        "«también» — es aguda (tam-BIÉN) y termina en n: lleva tilde sobre la vocal tónica é del diptongo.",
      pasos: [],
    },
    {
      id: 7,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 2",
      pregunta:
        "¿Cuál de las siguientes palabras NO lleva tilde al ser aguda que termina en consonante distinta de n/s?",
      opciones: ["cajón", "canción", "verdad"],
      correcta: 2,
      explicacion:
        "«verdad» — es aguda (ver-DAD) pero termina en d: no lleva tilde. «Cajón» y «canción» terminan en n, por eso sí la llevan.",
      pasos: [],
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 2",
      pregunta:
        "«El __ estaba listo sobre la mesa.» — ¿Cuál es la forma correctamente acentuada?",
      opciones: ["cafe", "café", "cafê"],
      correcta: 1,
      explicacion:
        "«café» — es aguda (ca-FÉ) y termina en vocal e: según la regla, las agudas que terminan en vocal llevan tilde ascendente (´) sobre esa vocal.",
      pasos: [],
    },

    // ── Regla 3: Llanas ───────────────────────────────────────────────────────
    {
      id: 9,
      tipo: "regla_rica",
      etiqueta: "Regla 3 / 12",
      titulo: "Palabras llanas — cuándo llevan tilde",
      bloques: [
        {
          tipo: "texto",
          texto:
            "Las palabras llanas (o graves) llevan tilde cuando NO terminan en vocal, n ni s. Si terminan en vocal, n o s, no llevan tilde. Esta regla es la complementaria exacta de la Regla 2: lo que pide tilde en agudas, no la pide en llanas, y viceversa.",
        },
        {
          tipo: "tabla",
          titulo: "Terminación de llanas y tilde",
          columnas: ["Terminación", "¿Lleva tilde?", "Ejemplos"],
          filas: [
            {
              tiempo: "vocal (a/e/i/o/u)",
              correcto: "No",
              error: "casa · joven* · origen · libro · tribu",
            },
            {
              tiempo: "n",
              correcto: "No",
              error: "examen · imagen · joven · orden · margen",
            },
            {
              tiempo: "s",
              correcto: "No",
              error: "crisis · tesis · lunes · dosis · barcas",
            },
            {
              tiempo: "otra consonante (l/r/d/z/x…)",
              correcto: "Sí",
              error: "árbol · ángel · fácil · lápiz · tórax · álbum",
            },
          ],
        },
        {
          tipo: "par",
          etiqueta: "termina en l → con tilde",
          correcto:
            "El árbol del patio perdió todas sus hojas durante el otoño.",
          incorrecto:
            "El arbol del patio perdió todas sus hojas durante el otoño.",
        },
        {
          tipo: "par",
          etiqueta:
            "termina en n → sin tilde (error muy frecuente en el EXANI-I)",
          correcto:
            "El examen de matemáticas se realizará el próximo lunes por la mañana.",
          incorrecto:
            "El exámen de matemáticas se realizará el próximo lunes por la mañana.",
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo:
            "Llanas terminadas en grupos consonánticos (-bs, -ps, -ns, -x) siempre llevan tilde",
          correcto:
            "bíceps · fórceps · tórax · índex — todas llevan tilde: terminan en consonante distinta de n/s simple",
          incorrecto:
            "«biceps» o «forceps» sin tilde son errores ortográficos; aunque terminan en s, la s va precedida de otra consonante, lo que se analiza como terminación en consonante compleja.",
        },
      ],
    },
    {
      id: 10,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 3",
      pregunta: "¿Cuál de las siguientes palabras llanas SÍ lleva tilde?",
      opciones: ["examen", "casa", "árbol"],
      correcta: 2,
      explicacion:
        "«árbol» — es llana (ÁR-bol) y termina en l (consonante distinta de n/s): lleva tilde. «Examen» termina en n y «casa» termina en a: ambas son llanas sin tilde.",
      pasos: [],
    },
    {
      id: 11,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 3",
      pregunta:
        "«El __ está sobre el escritorio.» — ¿Cuál es la forma correctamente acentuada?",
      opciones: ["lapiz", "lapíz", "lápiz"],
      correcta: 2,
      explicacion:
        "«lápiz» — es llana (LÁ-piz) y termina en z (no en vocal, n ni s): según la regla de las llanas, lleva tilde en la vocal tónica á.",
      pasos: [],
    },
    {
      id: 12,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 3",
      pregunta: "¿Cuál de estas formas está INCORRECTAMENTE acentuada?",
      opciones: ["fácil", "jóven", "tesis"],
      correcta: 1,
      explicacion:
        "«jóven» es incorrecto — «joven» es llana y termina en n: no lleva tilde. «Fácil» sí la lleva (termina en l) y «tesis» es llana terminada en s (sin tilde correctamente).",
      pasos: [],
    },

    // ── Regla 4: Esdrújulas y sobreesdrújulas ────────────────────────────────
    {
      id: 13,
      tipo: "regla_rica",
      etiqueta: "Regla 4 / 12",
      titulo: "Esdrújulas y sobreesdrújulas — siempre con tilde",
      bloques: [
        {
          tipo: "texto",
          texto:
            "Las palabras esdrújulas y sobreesdrújulas siempre llevan tilde, sin ninguna excepción. No hace falta analizar la terminación: basta con identificar que el acento recae en la antepenúltima sílaba (o en una anterior). Esta es la regla más fácil de aplicar.",
        },
        {
          tipo: "tabla",
          titulo: "Esdrújulas y sobreesdrújulas frecuentes en el EXANI-I",
          columnas: ["Categoría", "Con tilde (correcto)", "Sin tilde (error)"],
          filas: [
            {
              tiempo: "Sustantivos",
              correcto: "médico · sílaba · código · número",
              error: "medico · silaba · codigo · numero",
            },
            {
              tiempo: "Adjetivos",
              correcto: "rápido · lógico · típico · último",
              error: "rapido · logico · tipico · ultimo",
            },
            {
              tiempo: "Verbos (imperat.)",
              correcto: "cántame · llámalo · dígame",
              error: "cantame · llamalo · digame",
            },
            {
              tiempo: "Sobreesdrújulas",
              correcto: "dígamelo · cómpratelo · envíaselo",
              error: "digamelo · compratelo · enviaselo",
            },
          ],
        },
        {
          tipo: "par",
          etiqueta: "esdrújula — antepenúltima sílaba tónica",
          correcto:
            "El médico recomendó seguir una dieta balanceada y hacer ejercicio.",
          incorrecto:
            "El medico recomendó seguir una dieta balanceada y hacer ejercicio.",
        },
        {
          tipo: "par",
          etiqueta: "sobreesdrújula — siempre lleva tilde, sin excepción",
          correcto:
            "Dígamelo cuanto antes para poder coordinar la respuesta con el equipo.",
          incorrecto:
            "Digamelo cuanto antes para poder coordinar la respuesta con el equipo.",
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo:
            "Un verbo llano que recibe pronombres enclíticos puede volverse esdrújulo y exigir tilde",
          correcto:
            "canta (llana, sin tilde) + me → cántame (esdrújula: CÁN-ta-me → con tilde)",
          incorrecto:
            "«cantame» — error: al añadir el enclítico el acento prosódico no cambia, pero el conjunto se vuelve esdrújulo y la tilde pasa a ser obligatoria.",
        },
      ],
    },
    {
      id: 14,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 4",
      pregunta: "¿Cuál de las siguientes palabras está correctamente escrita?",
      opciones: ["musica", "musíca", "música"],
      correcta: 2,
      explicacion:
        "«música» — es esdrújula (MÚ-si-ca): lleva tilde en la antepenúltima sílaba. Las esdrújulas siempre llevan tilde, sin excepción.",
      pasos: [],
    },
    {
      id: 15,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 4",
      pregunta: "La forma «digaselo» necesita tilde porque:",
      opciones: [
        "Es llana y termina en vocal",
        "Es sobreesdrújula y siempre lleva tilde",
        "Es aguda y termina en o",
      ],
      correcta: 1,
      explicacion:
        "«dígaselo» — DÍ-ga-se-lo: es sobreesdrújula (tónica antes de la antepenúltima). Las sobreesdrújulas siempre llevan tilde sin excepción.",
      pasos: [],
    },
    {
      id: 16,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 4",
      pregunta:
        "El verbo «llama» (llana, sin tilde) al recibir «me» + «lo» forma:",
      opciones: [
        "llámalo (esdrújula, con tilde)",
        "llamalo (llana, sin tilde)",
        "llamálo (aguda, con tilde)",
      ],
      correcta: 0,
      explicacion:
        "«llámalo» — LLÁ-ma-lo: al añadir dos pronombres el acento prosódico permanece en la misma sílaba, pero el conjunto pasa a ser esdrújulo. Esdrújula → siempre con tilde.",
      pasos: [],
    },

    // ── Regla 5: Diptongo ─────────────────────────────────────────────────────
    {
      id: 17,
      tipo: "regla_rica",
      etiqueta: "Regla 5 / 12",
      titulo: "Diptongo — dos vocales en una sola sílaba",
      bloques: [
        {
          tipo: "diagrama",
          id: "diptongo-hiato",
          titulo: "Diptongo vs. Hiato — la tonicidad de la cerrada decide",
        },
        {
          tipo: "texto",
          texto:
            "Un diptongo es la unión de dos vocales en una sola sílaba. Se forma cuando se combinan una vocal abierta (a, e, o) con una vocal cerrada ÁTONA (i, u) en cualquier orden, o cuando se unen dos vocales cerradas (i+u / u+i). Si la vocal cerrada es TÓNICA, no hay diptongo, sino hiato (ver Regla 6).",
        },
        {
          tipo: "tabla",
          titulo: "Combinaciones que forman diptongo",
          columnas: ["Combinación", "Secuencias posibles", "Ejemplos"],
          filas: [
            {
              tiempo: "Abierta + cerrada (i/u átona)",
              correcto: "ai · ei · oi · au · eu · ou",
              error: "ai-re · pei-ne · cau-sa · deu-da",
            },
            {
              tiempo: "Cerrada (i/u átona) + abierta",
              correcto: "ia · ie · io · ua · ue · uo",
              error: "pia-no · bue-no · cua-dro · vio-la",
            },
            {
              tiempo: "Dos cerradas",
              correcto: "iu · ui",
              error: "viu-da · cui-dar · rui-do",
            },
            {
              tiempo: "Y final (cuenta como i)",
              correcto: "ay · ey · oy · uy",
              error: "hay · ley · hoy · muy",
            },
          ],
        },
        {
          tipo: "par",
          etiqueta:
            "la tilde en diptongo va sobre la vocal abierta — no sobre la cerrada",
          correcto:
            "El huésped ilustre llegó antes de que comenzara la ceremonia.",
          incorrecto:
            "El húesped ilustre llegó antes de que comenzara la ceremonia.",
        },
        {
          tipo: "par",
          etiqueta: "diptongo ui — dos cerradas, una sola sílaba",
          correcto:
            "El ruido del tráfico dificultaba la concentración de los estudiantes.",
          incorrecto:
            "El rúido del tráfico — error: «ui» es diptongo; «rui-do» tiene dos sílabas, no tres.",
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo:
            "La vocal cerrada TÓNICA rompe el diptongo y forma hiato — entonces exige tilde propia",
          correcto:
            "Ma-RÍ-a (hiato: la í tónica lleva tilde) · ba-ÚL (hiato: ú tónica lleva tilde)",
          incorrecto:
            "Maria / baul — sin tilde: error grave. La tilde de hiato es obligatoria aunque la regla general de agudas/llanas no la pida.",
        },
      ],
    },
    {
      id: 18,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 5",
      pregunta: "¿Cuántas sílabas tiene la palabra «viuda»?",
      opciones: ["Tres: vi-u-da", "Dos: viu-da", "Una: viuda"],
      correcta: 1,
      explicacion:
        "«viu-da» — dos sílabas: «iu» es diptongo de dos vocales cerradas (i + u) en una sola sílaba.",
      pasos: [],
    },
    {
      id: 19,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 5",
      pregunta: "La palabra «bueno» forma diptongo porque:",
      opciones: [
        "«ue» son dos vocales abiertas",
        "«ue» es vocal cerrada átona (u) + vocal abierta (e)",
        "«ue» tiene la u tónica y forma hiato",
      ],
      correcta: 1,
      explicacion:
        "«bue-no» — «ue» es vocal cerrada átona (u) + vocal abierta (e): forman diptongo en una sola sílaba. La u es átona, por eso no rompe el diptongo.",
      pasos: [],
    },
    {
      id: 20,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 5",
      pregunta: "¿Cuál de las siguientes palabras contiene un diptongo?",
      opciones: ["poema", "caer", "peine"],
      correcta: 2,
      explicacion:
        "«peine» — «ei» es diptongo: vocal abierta e + vocal cerrada i en una sola sílaba. «Poema» y «caer» contienen hiatos (dos vocales abiertas en sílabas distintas).",
      pasos: [],
    },

    // ── Regla 6: Hiato ────────────────────────────────────────────────────────
    {
      id: 21,
      tipo: "regla_rica",
      etiqueta: "Regla 6 / 12",
      titulo: "Hiato — vocales en sílabas separadas",
      bloques: [
        {
          tipo: "texto",
          texto:
            "El hiato ocurre cuando dos vocales contiguas pertenecen a sílabas distintas. Hay dos casos: (1) dos vocales abiertas siempre forman hiato; (2) vocal cerrada TÓNICA junto a cualquier vocal forma hiato y siempre lleva tilde en esa vocal cerrada, aunque la regla general de agudas/llanas/esdrújulas no la pida.",
        },
        {
          tipo: "tabla",
          titulo: "Tipos de hiato",
          columnas: ["Tipo", "Combinación", "Ejemplo y silabeo"],
          filas: [
            {
              tiempo: "Dos vocales abiertas (sin tilde especial)",
              correcto: "a+a · a+e · e+a · e+o · o+a · o+e",
              error: "ca-er · le-er · po-e-ta · te-a-tro",
            },
            {
              tiempo: "Cerrada tónica + vocal abierta (TILDE siempre)",
              correcto: "í+a/e/o · ú+a/e/o",
              error: "Ma-rí-a · con-ti-nú-a · ac-tú-a",
            },
            {
              tiempo: "Vocal abierta + cerrada tónica (TILDE siempre)",
              correcto: "a/e/o+í · a/e/o+ú",
              error: "pa-ís · re-ú-ne · ba-úl · pro-hí-be",
            },
          ],
        },
        {
          tipo: "par",
          etiqueta:
            "hiato con vocal débil tónica — tilde aunque sea llana terminada en vocal",
          correcto:
            "María estudia biología en la universidad pública de su ciudad.",
          incorrecto:
            "Maria estudia biologia en la universidad pública de su ciudad.",
        },
        {
          tipo: "par",
          etiqueta: "hiato vs. diptongo — «continua» ≠ «continúa»",
          correcto:
            "El agua continúa fluyendo hacia el mar después de las lluvias. (con-ti-NÚ-a → hiato; u tónica → tilde)",
          incorrecto:
            "El agua continua fluyendo — sin tilde: «continua» sería el adjetivo (llana, diptongo), no el verbo.",
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo:
            "La tilde de hiato prevalece sobre la regla general — «país» lleva tilde aunque sea llana terminada en s",
          correcto:
            "país (pa-ís) — la i tónica forma hiato con la a: tilde obligatoria en la i.",
          incorrecto:
            "pais — llana terminada en s no llevaría tilde por regla general, pero la tilde de hiato es una excepción que siempre gana.",
        },
      ],
    },
    {
      id: 22,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 6",
      pregunta:
        "¿Cuál de las siguientes palabras contiene un hiato que obliga a usar tilde?",
      opciones: ["teatro", "caer", "raíz"],
      correcta: 2,
      explicacion:
        "«raíz» — ra-ÍZ: la í es tónica junto a la a (vocal abierta) → hiato: tilde obligatoria en la í. «Teatro» y «caer» tienen hiatos de vocales abiertas sin tilde especial.",
      pasos: [],
    },
    {
      id: 23,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 6",
      pregunta:
        "«El __ de América Latina presenta una enorme diversidad cultural.» — Elige la forma correcta.",
      opciones: ["pais", "páis", "país"],
      correcta: 2,
      explicacion:
        "«país» — pa-ís: la í es tónica y forma hiato con la a. La tilde en la í es obligatoria por hiato, aunque «país» sea llana terminada en s (que normalmente no llevaría tilde).",
      pasos: [],
    },
    {
      id: 24,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 6",
      pregunta:
        "«El río __ por el valle durante todo el año sin interrupción.» — Elige la forma correcta del verbo.",
      opciones: ["continua", "continúa", "contínua"],
      correcta: 1,
      explicacion:
        "«continúa» — con-ti-NÚ-a: la ú es vocal tónica junto a la a → hiato. La tilde en la ú distingue el verbo (continúa) del adjetivo (continua, sin tilde).",
      pasos: [],
    },

    // ── Regla 7: Monosílabos ─────────────────────────────────────────────────
    {
      id: 25,
      tipo: "regla_rica",
      etiqueta: "Regla 7 / 12",
      titulo: "Monosílabos — en general sin tilde",
      bloques: [
        {
          tipo: "texto",
          texto:
            "Los monosílabos (palabras de una sola sílaba) no llevan tilde. Solo la llevan cuando existe una tilde diacrítica que los distingue de otro monosílabo de distinta función gramatical (ver Regla 8). No añadas tildes a monosílabos por intuición o por considerar que «suenan fuertes».",
        },
        {
          tipo: "tabla",
          titulo: "Monosílabos frecuentes SIN tilde",
          columnas: ["Grupo", "Palabras sin tilde", "Error frecuente"],
          filas: [
            {
              tiempo: "Verbos de uso común",
              correcto: "fue · fui · vio · dio · vi · di · soy · ves",
              error: "«fuí», «vió», «dió» — tildes incorrectas",
            },
            {
              tiempo: "Artículos / pronombres",
              correcto: "el · la · lo · los · las · le · me · te",
              error: "«él»* solo si es pronombre (diacrítica)",
            },
            {
              tiempo: "Conjunciones / prep.",
              correcto: "y · o · a · en · de · con · sin · por · que",
              error: "«ó»* entre números ya no lleva tilde (RAE 2010)",
            },
            {
              tiempo: "Sustantivos / adjetivos",
              correcto: "fe · sol · pan · pie · bien · mal · mar · luz · flor",
              error: "«fé», «piés» — sin tilde ortográfica",
            },
          ],
        },
        {
          tipo: "par",
          etiqueta: "formas verbales monosílabas — sin tilde",
          correcto:
            "El estudiante dio su mejor esfuerzo durante todo el semestre académico.",
          incorrecto:
            "El estudiante dió su mejor esfuerzo durante todo el semestre académico.",
        },
        {
          tipo: "par",
          etiqueta: "«fue», «fui» — sin tilde aunque sean verbos importantes",
          correcto:
            "Fue una experiencia enriquecedora para todos los participantes del congreso.",
          incorrecto:
            "Fué una experiencia enriquecedora para todos los participantes del congreso.",
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo:
            "«guion», «ion», «ruin», «fie» son monosílabos según la RAE 2010 — ya no llevan tilde",
          correcto:
            "El guion del documental fue aprobado por el comité editorial de la institución.",
          incorrecto:
            "El guión del documental — «guión» con tilde era correcto antes de 2010, pero hoy la RAE lo reconoce como monosílabo y prescinde de la tilde.",
        },
      ],
    },
    {
      id: 26,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 7",
      pregunta: "¿Cuál de las siguientes formas está correctamente escrita?",
      opciones: ["fuí", "dió", "fue"],
      correcta: 2,
      explicacion:
        "«fue» — monosílabo sin pareja diacrítica: no lleva tilde. «Fuí» y «dió» son grafías incorrectas; estos verbos monosílabos nunca llevan tilde.",
      pasos: [],
    },
    {
      id: 27,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 7",
      pregunta:
        "¿Cuál de estas palabras es un monosílabo que NO lleva tilde según la RAE?",
      opciones: ["guión", "sé (verbo saber)", "pie"],
      correcta: 2,
      explicacion:
        "«pie» — monosílabo sin pareja diacrítica: no lleva tilde. «Guión» debe escribirse «guion» (monosílabo, sin tilde, RAE 2010). «Sé» sí lleva tilde diacrítica (pronombre se vs. verbo sé).",
      pasos: [],
    },
    {
      id: 28,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 7",
      pregunta:
        "«El niño __ al parque con su familia el fin de semana.» — Elige la forma correcta.",
      opciones: ["fué", "fue", "fuè"],
      correcta: 1,
      explicacion:
        "«fue» — verbo ir/ser en pretérito indefinido, monosílabo. No lleva tilde porque no tiene pareja diacrítica que lo distinga de otro monosílabo con diferente función.",
      pasos: [],
    },

    // ── Regla 8: Tilde diacrítica ────────────────────────────────────────────
    {
      id: 29,
      tipo: "regla_rica",
      etiqueta: "Regla 8 / 12",
      titulo: "Tilde diacrítica — pares que se distinguen por la tilde",
      bloques: [
        {
          tipo: "texto",
          texto:
            "La tilde diacrítica diferencia palabras homófonas (misma pronunciación, distinta función gramatical). Solo existe en los pares establecidos por la RAE. Nota importante: desde la Ortografía de 2010, «solo» (adverbio) y los demostrativos «este/ese/aquel» ya NO llevan tilde obligatoria.",
        },
        {
          tipo: "tabla",
          titulo: "Pares diacríticos esenciales — EXANI-I",
          columnas: [
            "Sin tilde (función átona)",
            "Con tilde (función tónica)",
            "Clave de distinción",
          ],
          filas: [
            {
              tiempo: "el (artículo)",
              correcto: "él (pronombre sujeto)",
              error: "el libro está · Él llegó tarde.",
            },
            {
              tiempo: "mi (posesivo)",
              correcto: "mí (pronombre tónico)",
              error: "mi casa · Este regalo es para mí.",
            },
            {
              tiempo: "tu (posesivo)",
              correcto: "tú (pronombre sujeto)",
              error: "tu libro · Tú decides.",
            },
            {
              tiempo: "si (conjunción cond.)",
              correcto: "sí (afirmación / pronombre)",
              error: "Si quieres, ven. · Sí, claro. / para sí mismo.",
            },
            {
              tiempo: "se (pronombre)",
              correcto: "sé (verbo saber/ser)",
              error: "Se fue. · No sé nada. · Sé honesto.",
            },
            {
              tiempo: "de (preposición)",
              correcto: "dé (verbo dar, subjuntivo)",
              error: "casa de campo · Espero que dé resultado.",
            },
            {
              tiempo: "mas (conjunción = pero)",
              correcto: "más (adverbio de cantidad)",
              error: "Lo quiero, mas no puedo. · Quiero más.",
            },
            {
              tiempo: "te (pronombre)",
              correcto: "té (infusión, sustantivo)",
              error: "Te llamo mañana. · Toma una taza de té.",
            },
            {
              tiempo: "aun (= incluso)",
              correcto: "aún (= todavía)",
              error: "Aun así lo hizo. · Aún no ha llegado.",
            },
          ],
        },
        {
          tipo: "par",
          etiqueta: "él (pronombre) vs. el (artículo)",
          correcto:
            "Él presentó el informe ante el consejo directivo de la institución.",
          incorrecto:
            "El presentó el informe ante el consejo directivo de la institución.",
        },
        {
          tipo: "par",
          etiqueta: "aún (todavía) vs. aun (incluso)",
          correcto:
            "Aún no hemos recibido la respuesta formal del comité evaluador.",
          incorrecto:
            "Aun no hemos recibido — sin tilde cambia el significado: pasaría a significar «incluso no».",
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo:
            "«Solo» ya no lleva tilde como adverbio (RAE 2010) — ni «este/ese/aquel» como pronombres",
          correcto:
            "Solo quiero saber la verdad del asunto. · Este es el mejor candidato. (ambas sin tilde)",
          incorrecto:
            "«Sólo» / «Éste» — estas tildes eran correctas antes de 2010 pero hoy son innecesarias y se desaconseja su uso.",
        },
      ],
    },
    {
      id: 30,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 8",
      pregunta:
        "«__ llegó antes de que comenzara la reunión del consejo.» — Elige la forma correcta.",
      opciones: ["El", "Él", "El o Él son correctos"],
      correcta: 1,
      explicacion:
        "«Él» — pronombre personal sujeto de la oración: lleva tilde diacrítica para distinguirse del artículo «el». Como sujeto, va con tilde.",
      pasos: [],
    },
    {
      id: 31,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 8",
      pregunta:
        "«No __ nada sobre la resolución que tomó el comité en la sesión de ayer.»",
      opciones: ["se", "sé", "si"],
      correcta: 1,
      explicacion:
        "«sé» — primera persona singular del verbo saber (yo sé). Lleva tilde diacrítica para distinguirse del pronombre reflexivo «se» (sin tilde). «Si» es conjunción condicional.",
      pasos: [],
    },
    {
      id: 32,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 8",
      pregunta:
        "«__ eres quien debe entregar el informe final ante el consejo directivo.»",
      opciones: ["Tu", "Tú", "tu"],
      correcta: 1,
      explicacion:
        "«Tú» — pronombre personal sujeto: lleva tilde diacrítica para distinguirse del posesivo «tu» (tu libro). Aquí es el sujeto de la oración → tilde obligatoria.",
      pasos: [],
    },

    // ── Regla 9: Interrogativos y exclamativos ────────────────────────────────
    {
      id: 33,
      tipo: "regla_rica",
      etiqueta: "Regla 9 / 12",
      titulo: "Interrogativos y exclamativos tónicos",
      bloques: [
        {
          tipo: "texto",
          texto:
            "Las palabras qué, quién/quiénes, cómo, cuándo, dónde, adónde, cuál/cuáles y cuánto/a/os/as llevan tilde cuando funcionan como interrogativos o exclamativos, tanto en preguntas directas (¿Qué quieres?) como en preguntas indirectas (No sé qué quieres) y en exclamaciones (¡Qué bonito!). Sin tilde, son relativos o conjunciones.",
        },
        {
          tipo: "tabla",
          titulo: "Tónico (tilde) vs. átono (sin tilde)",
          columnas: [
            "Con tilde — interrogativo/exclamativo",
            "Sin tilde — relativo o conjunción",
            "Par ilustrativo",
          ],
          filas: [
            {
              tiempo: "qué",
              correcto: "que (relativo / conjunción)",
              error: "¿Qué quieres? · el libro que leí",
            },
            {
              tiempo: "quién",
              correcto: "quien (relativo)",
              error: "¿Quién llegó? · la persona quien llegó*",
            },
            {
              tiempo: "cómo",
              correcto: "como (relativo / conjunción)",
              error: "¿Cómo estás? · lo hice como me dijiste",
            },
            {
              tiempo: "cuándo",
              correcto: "cuando (conjunción / relativo)",
              error: "¿Cuándo llegas? · cuando llegues, avísame",
            },
            {
              tiempo: "dónde",
              correcto: "donde (relativo)",
              error: "¿Dónde vives? · el lugar donde vivo",
            },
            {
              tiempo: "cuál",
              correcto: "cual (relativo)",
              error: "¿Cuál prefieres? · el libro el cual mencioné",
            },
            {
              tiempo: "cuánto",
              correcto: "cuanto (relativo)",
              error: "¡Cuánta gente! · haz cuanto puedas",
            },
          ],
        },
        {
          tipo: "par",
          etiqueta: "pregunta directa — siempre tilde",
          correcto:
            "¿Cuándo entregarás el informe final al director del departamento?",
          incorrecto:
            "¿Cuando entregarás el informe final al director del departamento?",
        },
        {
          tipo: "par",
          etiqueta: "pregunta indirecta — también lleva tilde",
          correcto:
            "El comité no sabe cuándo se publicarán los resultados del proceso de evaluación.",
          incorrecto:
            "El comité no sabe cuando se publicarán los resultados del proceso de evaluación.",
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo:
            "Las preguntas indirectas también llevan tilde — aunque no haya signos de interrogación",
          correcto:
            "No sé qué responder. · Ignoro dónde está. · Me preguntó cuándo llegaría. (todas llevan tilde)",
          incorrecto:
            "Pensar que solo las preguntas con ¿? llevan tilde es el error más frecuente con los interrogativos en el EXANI-I.",
        },
      ],
    },
    {
      id: 34,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 9",
      pregunta:
        "«No entiendo __ ocurrió durante la reunión de ayer con el consejo.» — Elige la forma correcta.",
      opciones: ["que", "qué", "cual"],
      correcta: 1,
      explicacion:
        "«qué» — interrogativo indirecto (pregunta embebida sin signos): «no entiendo qué ocurrió». Los interrogativos indirectos siempre llevan tilde.",
      pasos: [],
    },
    {
      id: 35,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 9",
      pregunta:
        "«El momento __ llegó el coordinador coincidió con el inicio de la sesión.» — Elige la forma correcta.",
      opciones: ["cuándo", "cuando", "cómo"],
      correcta: 1,
      explicacion:
        "«cuando» — relativo temporal (sin tilde), no un interrogativo. Equivale a «en el momento en que llegó». Si fuera «¿Cuándo llegó?» o «No sé cuándo llegó», llevaría tilde.",
      pasos: [],
    },
    {
      id: 36,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 9",
      pregunta:
        "¿Cuál de las siguientes oraciones está correctamente acentuada?",
      opciones: [
        "¿Como supiste la noticia tan pronto?",
        "¿Cómo supiste la noticia tan pronto?",
        "El modo como lo explicó fue muy claro.",
      ],
      correcta: 1,
      explicacion:
        "«¿Cómo supiste?» — interrogativo directo: lleva tilde. La opción A («¿Como?») carece de tilde incorrectamente. La opción C («como» sin tilde) es correcta en esa oración porque es relativo, no interrogativo.",
      pasos: [],
    },

    // ── Regla 10: Adverbios en -mente ─────────────────────────────────────────
    {
      id: 37,
      tipo: "regla_rica",
      etiqueta: "Regla 10 / 12",
      titulo: "Adverbios en -mente — conservan la tilde del adjetivo base",
      bloques: [
        {
          tipo: "texto",
          texto:
            "Los adverbios terminados en -mente conservan la tilde del adjetivo base del que derivan, si es que este la tenía. Si el adjetivo no llevaba tilde, el adverbio tampoco la lleva. Esto se debe a que, desde el punto de vista formal, el adjetivo conserva su carácter de palabra independiente dentro del compuesto.",
        },
        {
          tipo: "tabla",
          titulo: "Adjetivo → adverbio en -mente",
          columnas: ["Adjetivo base", "¿Lleva tilde?", "Adverbio en -mente"],
          filas: [
            {
              tiempo: "rápido",
              correcto: "Sí (esdrújula)",
              error: "rápidamente",
            },
            {
              tiempo: "fácil",
              correcto: "Sí (llana termina en l)",
              error: "fácilmente",
            },
            {
              tiempo: "lógico",
              correcto: "Sí (esdrújula)",
              error: "lógicamente",
            },
            {
              tiempo: "último",
              correcto: "Sí (esdrújula)",
              error: "últimamente",
            },
            {
              tiempo: "lento",
              correcto: "No (llana termina en o)",
              error: "lentamente",
            },
            {
              tiempo: "feliz",
              correcto: "No (llana termina en z)",
              error: "felizmente",
            },
            {
              tiempo: "libre",
              correcto: "No (llana termina en e)",
              error: "libremente",
            },
            {
              tiempo: "difícil",
              correcto: "Sí (llana termina en l)",
              error: "difícilmente",
            },
          ],
        },
        {
          tipo: "par",
          etiqueta: "adjetivo con tilde → adverbio conserva tilde",
          correcto:
            "El equipo respondió rápidamente a las demandas del cliente institucional.",
          incorrecto:
            "El equipo respondió rapidamente a las demandas del cliente institucional.",
        },
        {
          tipo: "par",
          etiqueta: "adjetivo sin tilde → adverbio sin tilde",
          correcto:
            "La reunión transcurrió felizmente sin ningún contratiempo significativo.",
          incorrecto:
            "La reunión transcurrió félizmente sin ningún contratiempo significativo.",
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo:
            "Cuando dos adjetivos coordinados comparten un solo -mente, el primero conserva su forma de adjetivo con su tilde propia",
          correcto:
            "El informe fue redactado clara y concisamente. (claro no lleva tilde; concisamente tampoco)",
          incorrecto:
            "Si fueran «rápida y eficazmente»: «rápida» conserva su tilde (forma de adjetivo) aunque no lleve «-mente».",
        },
      ],
    },
    {
      id: 38,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 10",
      pregunta: "¿Cuál de las siguientes formas está correctamente escrita?",
      opciones: ["facilmente", "fácilmente", "fácilménte"],
      correcta: 1,
      explicacion:
        "«fácilmente» — el adjetivo base «fácil» lleva tilde (llana terminada en l). El adverbio conserva esa tilde. Solo hay una tilde: en «fácil», nunca en «mente».",
      pasos: [],
    },
    {
      id: 39,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 10",
      pregunta: "El adverbio derivado de «feliz» se escribe:",
      opciones: ["félizmente", "felizménte", "felizmente"],
      correcta: 2,
      explicacion:
        "«felizmente» — «feliz» es llana terminada en z: no lleva tilde. El adverbio derivado tampoco la lleva. Solo llevan tilde los adverbios en -mente cuyo adjetivo base tenía tilde.",
      pasos: [],
    },
    {
      id: 40,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 10",
      pregunta: "¿Cuál de las siguientes formas está INCORRECTAMENTE escrita?",
      opciones: ["últimamente", "lentamente", "rapidamente"],
      correcta: 2,
      explicacion:
        "«rapidamente» es incorrecto — «rápido» es esdrújula y lleva tilde; el adverbio debe conservarla: «rápidamente». «Últimamente» y «lentamente» están correctas.",
      pasos: [],
    },

    // ── Regla 11: Verbos con enclíticos ───────────────────────────────────────
    {
      id: 41,
      tipo: "regla_rica",
      etiqueta: "Regla 11 / 12",
      titulo: "Verbos con pronombres enclíticos",
      bloques: [
        {
          tipo: "texto",
          texto:
            "Los pronombres enclíticos (me, te, se, le, lo, la, nos, les, los, las) se unen al verbo formando una sola palabra. El resultado debe aplicar las reglas generales de acentuación: si el conjunto resulta esdrújulo o sobreesdrújulo, siempre lleva tilde; si queda como aguda o llana, aplica la regla correspondiente.",
        },
        {
          tipo: "tabla",
          titulo: "Efecto de los enclíticos sobre la tilde",
          columnas: [
            "Verbo solo",
            "Tipo",
            "Verbo + enclítico(s)",
            "Tipo resultante",
          ],
          filas: [
            {
              tiempo: "dame (da+me)",
              correcto: "llana, sin tilde",
              error: "dámelo (da+me+lo) → esdrújula: CON tilde",
            },
            {
              tiempo: "canta",
              correcto: "llana, sin tilde",
              error: "cántame (canta+me) → esdrújula: CON tilde",
            },
            {
              tiempo: "di (monosílabo)",
              correcto: "sin tilde",
              error: "díselo (di+se+lo) → esdrújula: CON tilde",
            },
            {
              tiempo: "envía",
              correcto: "aguda con hiato: tilde",
              error: "envíales (envía+les) → esdrújula: CON tilde",
            },
            {
              tiempo: "mirar",
              correcto: "aguda sin tilde (r)",
              error: "mírate (mirar−r+te) → esdrújula: CON tilde",
            },
          ],
        },
        {
          tipo: "par",
          etiqueta:
            "da (monosílabo, sin tilde) → dámelo (esdrújula, con tilde)",
          correcto:
            "Dámelo antes de que salga el director de la oficina central.",
          incorrecto:
            "Damelo antes de que salga el director de la oficina central.",
        },
        {
          tipo: "par",
          etiqueta: "canta (llana, sin tilde) → cántame (esdrújula, con tilde)",
          correcto: "Cántame algo antes de que empiece la presentación formal.",
          incorrecto:
            "Cantame algo antes de que empiece la presentación formal.",
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo:
            "El verbo mantiene su acento prosódico; es la clasificación del conjunto la que determina si lleva tilde",
          correcto:
            "di + se + lo = díselo (DÍ-se-lo → esdrújula → tilde aunque «di» no la tenía solo)",
          incorrecto:
            "«diselo» — error: aunque «di» sea monosílabo sin tilde, el conjunto «díselo» es esdrújulo y siempre exige tilde.",
        },
      ],
    },
    {
      id: 42,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 11",
      pregunta:
        "El verbo «canta» (llana, sin tilde) al recibir el enclítico «me» forma:",
      opciones: [
        "cantame (llana, sin tilde)",
        "cántame (esdrújula, con tilde)",
        "cantáme (aguda, con tilde)",
      ],
      correcta: 1,
      explicacion:
        "«cántame» — CÁN-ta-me: el acento prosódico permanece en «can», pero el conjunto tiene tres sílabas con tónica en la antepenúltima → esdrújula → siempre lleva tilde.",
      pasos: [],
    },
    {
      id: 43,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 11",
      pregunta:
        "¿Cuál de las siguientes formas con pronombre enclítico está correctamente escrita?",
      opciones: ["damelo", "dámelo", "dáme-lo"],
      correcta: 1,
      explicacion:
        "«dámelo» — DÁ-me-lo: esdrújula formada por «da» + «me» + «lo». El acento cae en la antepenúltima sílaba → tilde obligatoria.",
      pasos: [],
    },
    {
      id: 44,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 11",
      pregunta:
        "«__ antes de que salgan los demás.» — Elige la forma correctamente acentuada.",
      opciones: ["Diselo", "Díselo", "Di-se-lo"],
      correcta: 1,
      explicacion:
        "«Díselo» — DÍ-se-lo: esdrújula (di+se+lo). Aunque «di» sea monosílabo sin tilde, el conjunto formado con los dos enclíticos resulta esdrújulo y siempre lleva tilde.",
      pasos: [],
    },

    // ── Regla 12: Palabras compuestas ─────────────────────────────────────────
    {
      id: 45,
      tipo: "regla_rica",
      etiqueta: "Regla 12 / 12",
      titulo: "Palabras compuestas — con guion y sin guion",
      bloques: [
        {
          tipo: "texto",
          texto:
            "Las palabras compuestas siguen reglas distintas según se escriban con o sin guion. Sin guion, el compuesto es una palabra nueva y sigue las reglas generales de acentuación (el primer elemento pierde su tilde propia). Con guion, cada elemento conserva su tilde individual porque se mantienen como palabras independientes.",
        },
        {
          tipo: "tabla",
          titulo: "Compuestos con guion vs. sin guion",
          columnas: ["Tipo", "Regla", "Ejemplo"],
          filas: [
            {
              tiempo: "Sin guion (una palabra nueva)",
              correcto: "Solo tilde si lo pide la regla general",
              error:
                "asimismo (llana, termina en o → sin tilde) · decimoséptimo (esdrújula → con tilde)",
            },
            {
              tiempo: "Con guion (palabras unidas)",
              correcto: "Cada parte conserva su tilde propia",
              error: "físico-químico · teórico-práctico · hispano-árabe",
            },
            {
              tiempo: "Adverbios en -mente (especial)",
              correcto: "El adjetivo conserva su tilde",
              error: "rápidamente · fácil y rápidamente*",
            },
          ],
        },
        {
          tipo: "par",
          etiqueta: "sin guion — el primer elemento pierde su tilde",
          correcto:
            "El trabajo de décimo segundo grado corresponde al nivel bachillerato. → «decimosegundo» (llana sin tilde)",
          incorrecto:
            "El trabajo de «décimo segundo» se escribe junto como «décimosegundo» — error: el compuesto sin guion es una nueva palabra llana terminada en o, sin tilde.",
        },
        {
          tipo: "par",
          etiqueta: "con guion — cada elemento conserva su tilde",
          correcto:
            "El análisis físico-químico del agua reveló la presencia de contaminantes.",
          incorrecto:
            "El análisis fisico-quimico del agua — error: con guion, «físico» y «químico» conservan sus tildes individuales.",
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo:
            "«Asimismo» (sin tilde) ≠ «así mismo» (dos palabras: así lleva tilde)",
          correcto:
            "Asimismo, el comité aprobó el reglamento. (compuesto fusionado: llano, termina en o → sin tilde)",
          incorrecto:
            "«Asímismo» — error: la fusión crea una nueva palabra llana terminada en 'o' que no necesita tilde, aunque «así» (su base) sí la llevaba.",
        },
      ],
    },
    {
      id: 46,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 12",
      pregunta:
        "¿Cuál de las siguientes palabras compuestas (sin guion) está correctamente escrita?",
      opciones: ["decimoseptimo", "décimoséptimo", "decimoséptimo"],
      correcta: 2,
      explicacion:
        "«decimoséptimo» — de-ci-mo-SÉP-ti-mo: la sílaba tónica es «séptimo» → esdrújula → lleva tilde. «Décimo» pierde su tilde al fusionarse; solo rige la regla del compuesto completo.",
      pasos: [],
    },
    {
      id: 47,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 12",
      pregunta:
        "¿Cuál de los siguientes compuestos CON GUION está correctamente escrito?",
      opciones: ["hispano-arabe", "hispano-árabe", "hispanoárabe"],
      correcta: 1,
      explicacion:
        "«hispano-árabe» — con guion: cada componente conserva su tilde individual. «árabe» es esdrújula y la mantiene. «hispano» es llana terminada en o: no la necesita.",
      pasos: [],
    },
    {
      id: 48,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 12",
      pregunta:
        "«__ se aprobó el proyecto y las modificaciones al reglamento.» — Elige la forma correcta.",
      opciones: ["Asímismo", "Asimismo", "Así mismo"],
      correcta: 1,
      explicacion:
        "«Asimismo» — compuesto fusionado (a-si-MIS-mo): llana terminada en o → sin tilde. «Así mismo» (dos palabras) también existe y sería correcto, pero aquí la opción con tilde en «Asímismo» es incorrecta porque la tilde iría en una sílaba que no es la tónica del compuesto.",
      pasos: [],
    },
  ],
};
