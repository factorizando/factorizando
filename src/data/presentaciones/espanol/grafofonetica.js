// Presentación: Grafofonética
// Representaciones gráficas de fonemas consonánticos, vocálicos y de secuencias
// Ortografía · EXANI-I — 20 slides

export const PRESENTACION = {
  id: "grafofonetica",
  titulo: "Grafofonética",
  materia: "Español",
  subtema: "Ortografía",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Grafofonética",
      subtitulo: "Representaciones gráficas de fonemas consonánticos, vocálicos y de secuencias",
      etiqueta: "Español · Ortografía · EXANI-I",
    },

    // ── Introducción ──────────────────────────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Introducción",
      titulo: "¿Qué es la grafofonética?",
      bloques: [
        {
          tipo: "texto",
          texto: "La grafofonética estudia la correspondencia entre fonemas (unidades de sonido) y grafemas (letras o combinaciones de letras que los representan). En español esta relación no siempre es de uno a uno: algunos fonemas tienen múltiples grafemas posibles, y algunos grafemas representan distintos fonemas según el contexto. Dominar estas correspondencias es la base de la ortografía correcta.",
        },
        {
          tipo: "diagrama",
          id: "grafo-panorama",
          titulo: "Sistema de correspondencias grafofonéticas del español",
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Fonema ≠ letra — un fonema es un sonido; un grafema es su representación escrita",
          correcto: "/b/ es un fonema (sonido). «b» y «v» son dos grafemas distintos que lo representan.",
          incorrecto: "Pensar que cada letra es un fonema distinto: «b» y «v» suenan igual en español mexicano → son el mismo fonema /b/.",
        },
      ],
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Introducción",
      pregunta: "¿Cuántos fonemas vocálicos tiene el español?",
      opciones: [
        "Tres: sólo a, e, o (las «abiertas»)",
        "Cinco: a, e, i, o, u",
        "Siete: se suman los diptongos ie y ue",
      ],
      correcta: 1,
      explicacion: "El español tiene 5 fonemas vocálicos: /a/, /e/, /i/, /o/, /u/. Cada uno corresponde a una sola letra (grafema). Los diptongos no son fonemas adicionales sino combinaciones de vocales ya existentes.",
      pasos: [],
    },

    // ── Fonemas vocálicos ─────────────────────────────────────────────────────
    {
      id: 3,
      tipo: "regla_rica",
      etiqueta: "Fonemas vocálicos",
      titulo: "Los cinco fonemas vocálicos y sus grafemas",
      bloques: [
        {
          tipo: "texto",
          texto: "El español tiene 5 fonemas vocálicos, cada uno representado por un único grafema (correspondencia biunívoca). No hay ambigüedad ortográfica en las vocales. Sin embargo, la distinción entre vocales abiertas (a, e, o) y cerradas (i, u) es clave para entender diptongos, hiatos y la acentuación.",
        },
        {
          tipo: "diagrama",
          id: "grafo-vocales",
          titulo: "Correspondencia biunívoca: un fonema, una letra",
        },
        {
          tipo: "tabla",
          titulo: "Clasificación de las vocales del español",
          columnas: ["Tipo", "Fonemas / letras", "Importancia ortográfica"],
          filas: [
            { tiempo: "Abiertas", correcto: "/a/ → a · /e/ → e · /o/ → o", error: "Dos vocales abiertas contiguas siempre forman hiato (ca-er, po-e-ta)" },
            { tiempo: "Cerradas", correcto: "/i/ → i · /u/ → u", error: "Cerrada átona + abierta = diptongo (bue-no, ai-re); cerrada tónica = hiato + tilde (pa-ís, Ma-rí-a)" },
            { tiempo: "Y con valor vocálico", correcto: "/i/ → y (al final de diptongo)", error: "hay, rey, hoy, muy — la y final equivale a la i y no lleva tilde" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "La y puede ser vocal (/i/) o consonante (/y/) según su posición",
          correcto: "«hoy» → h-o-y: la y es vocal /i/ (cierre del diptongo oy). «ya» → la y es consonante /y/.",
          incorrecto: "Tratar la y siempre como consonante: en «rey», «hay», «muy», la y tiene valor vocálico y forma parte del diptongo.",
        },
      ],
    },
    {
      id: 4,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Vocales",
      pregunta: "La letra «y» en la palabra «hoy» tiene valor:",
      opciones: [
        "Consonántico: representa el fonema /y/",
        "Vocálico: representa el fonema /i/ en el diptongo oy",
        "Es una letra muda sin fonema propio",
      ],
      correcta: 1,
      explicacion: "En «hoy», la y cierra el diptongo «oy» y funciona como la vocal /i/. En cambio, en «ya», «ayuda» o «yugo», la y aparece al inicio de sílaba y tiene valor consonántico /y/.",
      pasos: [],
    },

    // ── B y V ─────────────────────────────────────────────────────────────────
    {
      id: 5,
      tipo: "regla_rica",
      etiqueta: "Fonema /b/ · B y V",
      titulo: "B y V: dos grafemas para un solo fonema",
      bloques: [
        {
          tipo: "texto",
          texto: "En el español de México, b y v representan el mismo fonema /b/. No existe diferencia de pronunciación entre «barco» y «varco» (si se pronunciaran igual). La elección entre b y v es puramente ortográfica y depende de reglas convencionales. Este es uno de los errores más frecuentes en el EXANI-I.",
        },
        {
          tipo: "diagrama",
          id: "grafo-bv",
          titulo: "El fonema /b/ y sus dos representaciones gráficas",
        },
        {
          tipo: "tabla",
          titulo: "Principales contextos de B y V",
          columnas: ["Regla", "Casos con B", "Casos con V"],
          filas: [
            { tiempo: "Combinaciones", correcto: "bl, br (blusa, brazo) · mb (cambio)", error: "nv (enviar, invitar) · div- (dividir)" },
            { tiempo: "Verbos", correcto: "-bir: subir, recibir, escribir · -ba: iba, cantaba", error: "-vir: vivir, servir, hervir · andar, estar, tener (anduv-, estuv-, tuv-)" },
            { tiempo: "Prefijos", correcto: "bi-, biz- (bilingüe, biznieto) · bio- (biología)", error: "vice-, vi- (vicepresidente, virrey)" },
            { tiempo: "Palabras frecuentes", correcto: "bello, bajo, boca, bueno, bien", error: "vaca, verde, vez, vivir, volar" },
          ],
        },
        {
          tipo: "par",
          etiqueta: "b después de m — siempre b, nunca v",
          correcto: "El cambio climático afecta a los ecosistemas de todo el planeta.",
          incorrecto: "El camvio climático afecta a los ecosistemas de todo el planeta.",
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Los verbos en -aba, -abas… del imperfecto siempre llevan b — nunca v",
          correcto: "Cuando era niño, vivía en Guadalajara. · Ella cantaba muy bien.",
          incorrecto: "Cuando era niño, vivia en Guadalajara. · Ella cantava muy bien.",
        },
      ],
    },
    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — B y V",
      pregunta: "¿Cuál de las siguientes palabras está INCORRECTAMENTE escrita?",
      opciones: [
        "subir",
        "escribir",
        "bivir",
      ],
      correcta: 2,
      explicacion: "«bivir» es incorrecto — la forma correcta es «vivir». Los verbos en -vir (vivir, servir, hervir) se escriben con v. Los verbos en -bir (subir, escribir, recibir) se escriben con b. «Bivir» confunde ambas reglas.",
      pasos: [],
    },

    // ── C, K, QU ─────────────────────────────────────────────────────────────
    {
      id: 7,
      tipo: "regla_rica",
      etiqueta: "Fonema /k/ · C, K, QU",
      titulo: "C, K y QU: tres grafemas para el fonema /k/",
      bloques: [
        {
          tipo: "texto",
          texto: "El fonema /k/ (oclusiva velar sorda) se escribe de tres maneras distintas según el contexto. La regla fundamental: c antes de a, o, u; qu antes de e, i; k en palabras de origen extranjero o en contextos especiales. La u que acompaña al dígrafo qu es siempre muda.",
        },
        {
          tipo: "diagrama",
          id: "grafo-ck",
          titulo: "El fonema /k/ y sus tres representaciones según el contexto",
        },
        {
          tipo: "tabla",
          titulo: "Cuándo usar C, QU o K para el fonema /k/",
          columnas: ["Grafema", "Contexto", "Ejemplos"],
          filas: [
            { tiempo: "C", correcto: "Antes de a, o, u", error: "casa · col · cubo · claro · crema" },
            { tiempo: "QU", correcto: "Antes de e, i (u muda)", error: "queso · quiero · que · quien · quedar" },
            { tiempo: "K", correcto: "Palabras extranjeras, siglas, nombres", error: "kilómetro · kárate · kiosco · kiwi · km" },
          ],
        },
        {
          tipo: "par",
          etiqueta: "qu antes de e o i — la u no se pronuncia",
          correcto: "¿Quieres un poco de queso con el pan de la cena?",
          incorrecto: "¿Cuieres un poco de cueso con el pan de la cena?",
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "En QUE y QUI la U es siempre muda — nunca representa el fonema /w/",
          correcto: "«queso» suena /ke-so/ · «quiero» suena /kje-ro/ — la u no se pronuncia.",
          incorrecto: "Leer «queso» como /kwe-so/ o «quien» como /kwen/ — error: la u en qu es muda, no es un diptongo.",
        },
      ],
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — C, K, QU",
      pregunta: "¿Cuál de las siguientes palabras está CORRECTAMENTE escrita?",
      opciones: [
        "cueso (para el alimento elaborado con leche)",
        "queso",
        "keso",
      ],
      correcta: 1,
      explicacion: "«queso» — el fonema /k/ antes de e se escribe qu. «Cueso» sería /kwe-so/ (con diptongo) y no es la grafía correcta. «Keso» con k es incorrecto: k se reserva para palabras de origen extranjero y «queso» es voz latina patrimonial.",
      pasos: [],
    },

    // ── S, Z, C (seseo) ───────────────────────────────────────────────────────
    {
      id: 9,
      tipo: "regla_rica",
      etiqueta: "Fonema /s/ · S, Z, C — Seseo",
      titulo: "S, Z y C: el seseo en el español de México",
      bloques: [
        {
          tipo: "texto",
          texto: "En el español de México (y América Latina en general), el fenómeno del seseo hace que s, z y c (antes de e o i) representen el mismo fonema /s/. No hay diferencia de pronunciación entre «caza» y «casa», o entre «coser» y «cocer». Esto explica la frecuencia de errores ortográficos entre estas letras en el EXANI-I.",
        },
        {
          tipo: "tabla",
          titulo: "Distribución de S, Z y C para el fonema /s/",
          columnas: ["Grafema", "Contexto de uso", "Ejemplos"],
          filas: [
            { tiempo: "S", correcto: "Universal: antes de cualquier vocal o consonante", error: "sapo · sello · silla · sobre · sumar · isla · mismo" },
            { tiempo: "Z", correcto: "Antes de a, o, u; al final de sílaba o palabra", error: "zapato · zona · zumo · pez · luz · paz · lápiz" },
            { tiempo: "C", correcto: "Solo antes de e o i (seseo: suena /s/)", error: "cena · ciudad · cereal · cintura · cielo · dulce" },
          ],
        },
        {
          tipo: "par",
          etiqueta: "z nunca aparece antes de e o i en palabras de origen español",
          correcto: "La sentencia del juez causó gran revuelo en la ciudad.",
          incorrecto: "La zentencia del juez causó gran revuelo en la ziudad.",
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Z antes de e o i — solo en palabras de origen extranjero o nombres propios",
          correcto: "«zigzag» · «zen» · «Zinedine» — palabras de origen no español que conservan z antes de e o i.",
          incorrecto: "«zentro», «zeloso», «zimple» — error grave: el español no usa z antes de e o i en voces patrimoniales.",
        },
      ],
    },
    {
      id: 10,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — S, Z, C",
      pregunta: "¿Cuál de las siguientes opciones está CORRECTAMENTE escrita?",
      opciones: [
        "La sius recibió una sentencia favorable.",
        "La juez recibió una zentencia favorable.",
        "La juez recibió una sentencia favorable.",
      ],
      correcta: 2,
      explicacion: "«La juez recibió una sentencia favorable.» — «sentencia» comienza con s (universal). «Zentencia» es incorrecto porque z no se usa antes de e o i en palabras españolas patrimoniales. «Sius» tampoco existe.",
      pasos: [],
    },

    // ── G y J ─────────────────────────────────────────────────────────────────
    {
      id: 11,
      tipo: "regla_rica",
      etiqueta: "Fonema /x/ · G y J",
      titulo: "G y J: dos grafemas para el fonema /x/ (la jota)",
      bloques: [
        {
          tipo: "texto",
          texto: "El fonema /x/ (fricativa velar sorda, la «jota» española) puede escribirse con j o con g. La diferencia clave: j aparece antes de cualquier vocal (ja, je, ji, jo, ju); g solo representa /x/ antes de e o i. Antes de a, o, u, la letra g representa un fonema completamente distinto: /g/ (gato, gol, gusto).",
        },
        {
          tipo: "diagrama",
          id: "grafo-gj",
          titulo: "El fonema /x/: j universal vs. g solo ante e e i",
        },
        {
          tipo: "tabla",
          titulo: "J y G para el fonema /x/: contextos de uso",
          columnas: ["Grafema", "Contexto", "Ejemplos"],
          filas: [
            { tiempo: "J", correcto: "Antes de a, e, i, o, u (universal)", error: "jamón · jefe · jirafa · joven · jugo · viaje · eje" },
            { tiempo: "G + E/I", correcto: "g antes de e o i (suena /x/)", error: "gente · girasol · agente · mágico · urgente · ágil" },
            { tiempo: "G + A/O/U", correcto: "g antes de a, o, u (suena /g/, no /x/)", error: "gato · gol · gusto · grasa · gloria — fonema /g/, NO /x/" },
          ],
        },
        {
          tipo: "par",
          etiqueta: "j antes de a — siempre j, nunca g",
          correcto: "El viaje en avión dura aproximadamente dos horas y media.",
          incorrecto: "El viage en avión dura aproximadamente dos horas y media.",
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "G ante a, o, u es /g/ (como en «gato») — no es /x/ (jota)",
          correcto: "«gato» suena /ga-to/ · «gol» suena /gol/ · «gusto» suena /gus-to/ — estos son el fonema /g/, no /x/.",
          incorrecto: "Leer «gato» como «jato» o «gol» como «jol» — la g representa /x/ SOLO antes de e o i; ante a, o, u representa /g/.",
        },
      ],
    },
    {
      id: 12,
      tipo: "ejercicio",
      etiqueta: "Reactivo 6 — G y J",
      pregunta: "¿Cuál de las siguientes palabras está INCORRECTAMENTE escrita?",
      opciones: [
        "jirafa",
        "jeneral",
        "girasol",
      ],
      correcta: 1,
      explicacion: "«jeneral» es incorrecto — la palabra correcta es «general». Aunque el fonema /x/ antes de e puede escribirse g o j, la ortografía convencional de esta palabra es «general» (del latín «generalis»). No toda palabra con el sonido /x/+e puede escribirse con j: la etimología y la tradición fijan la grafía.",
      pasos: [],
    },

    // ── R y RR ────────────────────────────────────────────────────────────────
    {
      id: 13,
      tipo: "regla_rica",
      etiqueta: "Fonemas /r/ y /rr/ · R y RR",
      titulo: "R y RR: dos fonemas distintos, posición y contexto",
      bloques: [
        {
          tipo: "texto",
          texto: "A diferencia de b/v o s/z, r y rr representan DOS fonemas distintos: /r/ (vibrante simple: «caro», «pero») y /rr/ (vibrante múltiple: «carro», «perro»). El problema ortográfico no es la confusión de sonido, sino saber cuándo escribir rr y cuándo escribir r simple para la vibrante múltiple.",
        },
        {
          tipo: "tabla",
          titulo: "Reglas para escribir R y RR",
          columnas: ["Fonema", "Posición / contexto", "Ejemplos"],
          filas: [
            { tiempo: "/r/ simple", correcto: "Entre vocales (caro, pero, para)", error: "ca-ro · pe-ro · ma-ra-ca · are-na" },
            { tiempo: "/rr/ múltiple — RR", correcto: "Entre vocales: siempre RR", error: "ca-rro · pe-rro · ba-rri-o · tie-rra · co-rre" },
            { tiempo: "/rr/ múltiple — R simple", correcto: "Inicio de palabra, o tras n/l/s", error: "ro-sa · rin-cón · Is-ra-el · en-ro-dar · al-re-de-dor" },
            { tiempo: "Prefijo + palabra con R inicial", correcto: "Se escribe RR porque queda entre vocales", error: "sub+rayar = subrayar (excep.: sub+rr no se duplica) · pre+rrogativa = prerrogativa" },
          ],
        },
        {
          tipo: "par",
          etiqueta: "rr nunca va al inicio de palabra ni tras consonante",
          correcto: "El sonido de la r al inicio (rosa) es vibrante múltiple pero se escribe con r simple.",
          incorrecto: "«Rrosa», «enrredar» — error: rr solo aparece entre vocales dentro de una misma palabra.",
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Tras n, l o s, la r simple equivale fonéticamente a rr — pero se escribe r",
          correcto: "«enredar» (en + redar) → la r inicial de «redar» suena /rr/ vibrante múltiple, pero se escribe r simple.",
          incorrecto: "«enrredar» — incorrecto: la rr nunca sigue a una consonante; tras n se usa r simple aunque suene /rr/.",
        },
      ],
    },
    {
      id: 14,
      tipo: "ejercicio",
      etiqueta: "Reactivo 7 — R y RR",
      pregunta: "¿Cuál de las siguientes palabras está CORRECTAMENTE escrita?",
      opciones: [
        "enrredar",
        "enredar",
        "enredarr",
      ],
      correcta: 1,
      explicacion: "«enredar» — tras la consonante n, el fonema /rr/ se escribe con r simple. La secuencia rr nunca aparece después de una consonante. «Enrredar» y «enredarr» son grafías incorrectas.",
      pasos: [],
    },

    // ── Secuencias gráficas ───────────────────────────────────────────────────
    {
      id: 15,
      tipo: "regla_rica",
      etiqueta: "Secuencias gráficas · GUE/GUI/GÜE/GÜI · QUE/QUI",
      titulo: "Secuencias con U muda y la diéresis",
      bloques: [
        {
          tipo: "texto",
          texto: "Ciertas combinaciones de letras tienen reglas especiales sobre la pronunciación de la u. En que y qui, la u es siempre muda. En gue y gui, la u también es muda. Para indicar que la u sí se pronuncia después de g ante e o i, se escribe ü (diéresis). La diéresis es la única manera de distinguir /ge/ de /gwe/ y /gi/ de /gwi/.",
        },
        {
          tipo: "diagrama",
          id: "grafo-secuencias",
          titulo: "U muda vs. U pronunciada: qué hace la diéresis",
        },
        {
          tipo: "tabla",
          titulo: "Secuencias con U: muda vs. pronunciada",
          columnas: ["Secuencia", "¿Se pronuncia la U?", "Ejemplos"],
          filas: [
            { tiempo: "QUE / QUI", correcto: "No — u siempre muda en qu", error: "que-so /ke-so/ · quie-ro /kje-ro/ · quien · quedar" },
            { tiempo: "GUE / GUI", correcto: "No — u muda; g suena /g/", error: "gue-rra /ge-rra/ · guiar /gjar/ · guitarra · gueto" },
            { tiempo: "GÜE / GÜI", correcto: "Sí — ü pronunciada; diéresis marca la u", error: "ver-güen-za /ber-gwen-θa/ · pin-güi-no /pin-gwi-no/" },
          ],
        },
        {
          tipo: "par",
          etiqueta: "güe/güi — la diéresis indica que la u se pronuncia",
          correcto: "La vergüenza y los pingüinos son ejemplos con diéresis porque la u se pronuncia.",
          incorrecto: "La verguenza y los pinguinos — sin diéresis, la u es muda: «guerra» suena /ge-rra/, no /gwe-rra/.",
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "La diéresis (ü) solo existe en GÜE y GÜI — nunca en QUE/QUI",
          correcto: "«güero», «pingüino», «vergüenza» — ü con diéresis para que la u suene.",
          incorrecto: "«qüeso», «qüiero» — error: la u en qu es siempre muda, sin excepción, y nunca lleva diéresis.",
        },
      ],
    },
    {
      id: 16,
      tipo: "ejercicio",
      etiqueta: "Reactivo 8 — Secuencias",
      pregunta: "«Los __ viven en el Ártico y en la Antártida.» — ¿Cuál es la escritura correcta?",
      opciones: [
        "pingüinos",
        "pinguinos",
        "pinquinos",
      ],
      correcta: 0,
      explicacion: "«pingüinos» — la u entre g y la vocal i se pronuncia, por lo que lleva diéresis (ü). Sin diéresis, «pinguinos» indicaría u muda y el grupo gui sonaría /gi/ como en «guiar». «Pinquinos» no existe.",
      pasos: [],
    },

    // ── La H muda ─────────────────────────────────────────────────────────────
    {
      id: 17,
      tipo: "regla_rica",
      etiqueta: "La H · Letra sin fonema propio",
      titulo: "La H: un grafema sin fonema — siempre muda",
      bloques: [
        {
          tipo: "texto",
          texto: "La letra h es la única letra del español que no representa ningún fonema: es siempre muda en todas sus posiciones. Su uso es puramente etimológico (proviene del latín, árabe u otras lenguas). Omitir la h o añadirla donde no corresponde es una falta ortográfica grave, aunque no cambie la pronunciación.",
        },
        {
          tipo: "tabla",
          titulo: "H en distintas posiciones — siempre muda",
          columnas: ["Posición", "Regla / observación", "Ejemplos"],
          filas: [
            { tiempo: "Inicio de palabra", correcto: "Muda: h seguida de vocal", error: "hombre · hablar · hora · hueso · hijo · hierro · huevo" },
            { tiempo: "Interior de palabra", correcto: "Muda: no afecta el silabeo", error: "prohibir · cohete · vehículo · ahora · ahí · alcohol" },
            { tiempo: "Dígrafos CH, CH (histórico)", correcto: "ch = /tʃ/ (no muda aquí)", error: "chico · mucho · noche · leche · muchacho" },
            { tiempo: "H entre vocales", correcto: "No rompe diptongos ni hiatos", error: "pro-hí-be (hiato por la í tónica, no por la h) · a-hí" },
          ],
        },
        {
          tipo: "par",
          etiqueta: "h omitida — error aunque no cambie el sonido",
          correcto: "El huevo cocido es un alimento muy nutritivo y fácil de preparar.",
          incorrecto: "El uevo cocido es un alimento muy nutritivo y fácil de preparar.",
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "La h entre vocales NO rompe diptongos ni hiatos — las vocales interactúan como si no existiera",
          correcto: "«pro-hí-be» tiene hiato (la í tónica + e), con tilde en la í. La h no crea el hiato: es la tonicidad de la vocal cerrada.",
          incorrecto: "«pro-hi-be» sin tilde — error: ignorar el hiato porque la h «separa» visualmente las vocales. La h es invisible para la sílaba y la acentuación.",
        },
      ],
    },
    {
      id: 18,
      tipo: "ejercicio",
      etiqueta: "Reactivo 9 — H muda",
      pregunta: "La h en la palabra «prohibir» es:",
      opciones: [
        "Sonora: produce una pausa en la pronunciación",
        "Muda: no representa ningún fonema, pero su escritura es obligatoria",
        "Opcional: puede omitirse sin cometer falta ortográfica",
      ],
      correcta: 1,
      explicacion: "La h en «prohibir» es muda (como siempre en español): no cambia la pronunciación. Sin embargo, su omisión es una falta ortográfica grave. El silabeo es «pro-hi-bir» y lleva h en la sílaba «hi» por etimología (del latín «prohibere»).",
      pasos: [],
    },

    // ── Ejercicio integrador ──────────────────────────────────────────────────
    {
      id: 19,
      tipo: "ejercicio",
      etiqueta: "Reactivo 10 — Integrador",
      pregunta: "¿Cuál de las siguientes oraciones está CORRECTAMENTE escrita en todos sus aspectos grafofonéticos?",
      opciones: [
        "Los pinguinos sobreviven gracias a su gruesa capa de graza.",
        "Los pingüinos sobreviven gracias a su gruesa capa de grasa.",
        "Los pingüinos sobreviven gracias a su grueza capa de grasa.",
      ],
      correcta: 1,
      explicacion: "«Los pingüinos sobreviven gracias a su gruesa capa de grasa.» — «pingüinos» lleva ü porque la u se pronuncia entre g e i. «gruesa» usa gue (u muda, g suena /g/ antes de e). «grasa» con s es correcta (no «graza»: z no va antes de a en esta voz). La opción A omite la diéresis y escribe «graza» con z incorrectamente. La opción C escribe «grueza» (incorrecto).",
      pasos: [],
    },

  ],
};
