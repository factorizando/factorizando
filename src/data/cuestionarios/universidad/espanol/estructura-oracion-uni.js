// src/data/cuestionarios/universidad/espanol/oracion/estructura-oracion-uni.js
export default {
  metadata: {
    id: "estructura-oracion-uni",
    titulo: "Estructura de la oración",
    nivel: "universidad",
    materia: "Español",
    tema: "La oración",
  },
  config: {
    timePerQuestion: 60,
  },
  bloques: [
    {
      id: "sujeto-predicado",
      titulo: "Sujeto y predicado",
      from: 0,
      to: 29,
      cantidad: 30,
      color: "#6366f1",
    },
    {
      id: "nucleos-sp",
      titulo: "Núcleo del sujeto y del predicado",
      from: 30,
      to: 59,
      cantidad: 30,
      color: "#0ea5e9",
    },
    {
      id: "tipos-de-sujeto",
      titulo: "Sujeto simple, compuesto y tácito",
      from: 60,
      to: 89,
      cantidad: 30,
      color: "#8b5cf6",
    },
    {
      id: "modificador-directo",
      titulo: "Modificador directo (adyacente)",
      from: 90,
      to: 119,
      cantidad: 30,
      color: "#10b981",
    },
    {
      id: "pred-nominal-verbal",
      titulo: "Predicado nominal y verbal",
      from: 120,
      to: 149,
      cantidad: 30,
      color: "#f59e0b",
    },
    {
      id: "comp-directo",
      titulo: "Complemento directo",
      from: 150,
      to: 179,
      cantidad: 30,
      color: "#ef4444",
    },
    {
      id: "comp-indirecto",
      titulo: "Complemento indirecto",
      from: 180,
      to: 209,
      cantidad: 30,
      color: "#ec4899",
    },
    {
      id: "comp-circunstancial",
      titulo: "Complemento circunstancial",
      from: 210,
      to: 239,
      cantidad: 30,
      color: "#14b8a6",
    },
    {
      id: "comp-regimen",
      titulo: "Complemento de régimen",
      from: 240,
      to: 269,
      cantidad: 30,
      color: "#f97316",
    },
    {
      id: "comp-predicativo",
      titulo: "Complemento predicativo",
      from: 270,
      to: 299,
      cantidad: 30,
      color: "#a855f7",
    },
    {
      id: "comp-agente",
      titulo: "Complemento agente",
      from: 300,
      to: 329,
      cantidad: 30,
      color: "#0ea5e9",
    },
    {
      id: "errores-frecuentes",
      titulo: "Errores frecuentes",
      from: 330,
      to: 379,
      cantidad: 50,
      color: "#e11d48",
    },
  ],
  questions: [
    // ─── BLOQUE 1: SUJETO Y PREDICADO (30 reactivos) ────────────────────────

    // 0
    {
      question:
        "¿Cuál es el **sujeto** de la oración: *«Los científicos del CERN descubrieron una nueva partícula subatómica.»*?",
      options: [
        "Los científicos del CERN",
        "descubrieron una nueva partícula subatómica",
        "una nueva partícula subatómica",
        "del CERN descubrieron",
      ],
      correctAnswer: 0,
      explanation:
        "El sujeto es el sintagma nominal que concuerda con el verbo: «Los científicos del CERN». El predicado es todo lo que se afirma de él: «descubrieron una nueva partícula subatómica».",
    },
    // 1
    {
      question:
        "¿Cuál es el **predicado** de la oración: *«La Revolución Industrial transformó las estructuras sociales de Europa.»*?",
      options: [
        "transformó las estructuras sociales de Europa",
        "La Revolución Industrial",
        "las estructuras sociales de Europa",
        "transformó las estructuras",
      ],
      correctAnswer: 0,
      explanation:
        "El sujeto es «La Revolución Industrial» y el predicado —lo que se dice de ese sujeto— es «transformó las estructuras sociales de Europa».",
    },
    // 2
    {
      question:
        "¿Cuál es el **sujeto** de la oración: *«El informe presentado por la comisión reveló graves irregularidades.»*?",
      options: [
        "El informe presentado por la comisión",
        "reveló graves irregularidades",
        "la comisión",
        "el informe",
      ],
      correctAnswer: 0,
      explanation:
        "El sujeto incluye todo el sintagma nominal que encabeza «informe», con su modificador «presentado por la comisión». El sujeto no se reduce solo al núcleo.",
    },
    // 3
    {
      question:
        "¿Cuál es el **predicado** de la oración: *«Los escritores latinoamericanos del siglo XX renovaron la narrativa universal.»*?",
      options: [
        "renovaron la narrativa universal",
        "Los escritores latinoamericanos del siglo XX",
        "del siglo XX",
        "la narrativa universal",
      ],
      correctAnswer: 0,
      explanation:
        "El predicado es «renovaron la narrativa universal», encabezado por el verbo «renovaron». El complemento «del siglo XX» pertenece al sujeto, no al predicado.",
    },
    // 4
    {
      question:
        "¿Cuál es el **sujeto** de la oración: *«La propuesta económica del gobierno federal generó debate en el Senado.»*?",
      options: [
        "La propuesta económica del gobierno federal",
        "generó debate en el Senado",
        "el gobierno federal",
        "debate en el Senado",
      ],
      correctAnswer: 0,
      explanation:
        "El sujeto es «La propuesta económica del gobierno federal». El sintagma preposicional «del gobierno federal» funciona como complemento del nombre «propuesta», por lo que pertenece al sujeto.",
    },
    // 5
    {
      question:
        "¿Cuál es el **predicado** de la oración: *«Los avances tecnológicos del siglo XXI modificaron los hábitos de comunicación.»*?",
      options: [
        "modificaron los hábitos de comunicación",
        "Los avances tecnológicos del siglo XXI",
        "modificaron",
        "los hábitos de comunicación",
      ],
      correctAnswer: 0,
      explanation:
        "El predicado comprende el verbo y todos sus complementos: «modificaron los hábitos de comunicación». El sintagma «del siglo XXI» es parte del sujeto.",
    },
    // 6
    {
      question:
        "¿Cuál es el **sujeto** de la oración: *«Las consecuencias del calentamiento global amenazan la biodiversidad del planeta.»*?",
      options: [
        "Las consecuencias del calentamiento global",
        "amenazan la biodiversidad del planeta",
        "el calentamiento global",
        "la biodiversidad del planeta",
      ],
      correctAnswer: 0,
      explanation:
        "El sujeto es «Las consecuencias del calentamiento global». El complemento «del calentamiento global» especifica qué tipo de consecuencias son y forma parte del sintagma nominal sujeto.",
    },
    // 7
    {
      question:
        "¿Cuál es el **predicado** de la oración: *«El primer teorema de Gödel demostró los límites de la lógica formal.»*?",
      options: [
        "demostró los límites de la lógica formal",
        "El primer teorema de Gödel",
        "los límites de la lógica formal",
        "demostró los límites",
      ],
      correctAnswer: 0,
      explanation:
        "El predicado es «demostró los límites de la lógica formal». Incluye el verbo y su complemento directo completo, con el especificador «de la lógica formal».",
    },
    // 8
    {
      question:
        "¿Cuál es el **sujeto** de la oración: *«Aquellas ruinas arqueológicas descubiertas en Oaxaca sorprendieron a los expertos.»*?",
      options: [
        "Aquellas ruinas arqueológicas descubiertas en Oaxaca",
        "sorprendieron a los expertos",
        "las ruinas",
        "los expertos",
      ],
      correctAnswer: 0,
      explanation:
        "El sujeto es el sintagma nominal extenso «Aquellas ruinas arqueológicas descubiertas en Oaxaca», que incluye el participio adjetivado «descubiertas en Oaxaca» como modificador.",
    },
    // 9
    {
      question:
        "¿Cuál es el **predicado** de la oración: *«El poema más conocido de Sor Juana critica la hipocresía masculina.»*?",
      options: [
        "critica la hipocresía masculina",
        "El poema más conocido de Sor Juana",
        "Sor Juana critica",
        "la hipocresía masculina",
      ],
      correctAnswer: 0,
      explanation:
        "El predicado es «critica la hipocresía masculina». El sintagma «El poema más conocido de Sor Juana» es el sujeto; todo lo demás pertenece al predicado.",
    },
    // 10
    {
      question:
        "¿Cuál es el **sujeto** de la oración: *«Los tratados internacionales firmados en 1994 modificaron la política comercial de México.»*?",
      options: [
        "Los tratados internacionales firmados en 1994",
        "modificaron la política comercial de México",
        "1994",
        "la política comercial de México",
      ],
      correctAnswer: 0,
      explanation:
        "El sujeto es «Los tratados internacionales firmados en 1994». La frase participial «firmados en 1994» es un modificador del núcleo «tratados» dentro del sujeto.",
    },
    // 11
    {
      question:
        "¿Cuál es el **predicado** de la oración: *«La síntesis de nuevos materiales condujo a avances en medicina.»*?",
      options: [
        "condujo a avances en medicina",
        "La síntesis de nuevos materiales",
        "nuevos materiales",
        "avances en medicina",
      ],
      correctAnswer: 0,
      explanation:
        "El predicado es «condujo a avances en medicina». El sujeto es «La síntesis de nuevos materiales», donde «de nuevos materiales» complementa al sustantivo «síntesis».",
    },
    // 12
    {
      question:
        "¿Cuál es el **sujeto** de la oración: *«Esa peculiar interpretación del texto bíblico provocó controversia.»*?",
      options: [
        "Esa peculiar interpretación del texto bíblico",
        "provocó controversia",
        "el texto bíblico",
        "esa interpretación",
      ],
      correctAnswer: 0,
      explanation:
        "El sujeto completo es «Esa peculiar interpretación del texto bíblico». No puede reducirse a «esa interpretación» sin perder información que el sintagma sujeto aporta.",
    },
    // 13
    {
      question:
        "¿Cuál es el **predicado** de la oración: *«Las investigadoras del Instituto de Física publicaron sus hallazgos en Nature.»*?",
      options: [
        "publicaron sus hallazgos en Nature",
        "Las investigadoras del Instituto de Física",
        "sus hallazgos en Nature",
        "publicaron en Nature",
      ],
      correctAnswer: 0,
      explanation:
        "El predicado es «publicaron sus hallazgos en Nature» e incluye el verbo, el complemento directo «sus hallazgos» y el complemento circunstancial «en Nature».",
    },
    // 14
    {
      question:
        "¿Cuál es el **sujeto** de la oración: *«La reciente reforma educativa impulsada por el gobierno dividió a la sociedad.»*?",
      options: [
        "La reciente reforma educativa impulsada por el gobierno",
        "dividió a la sociedad",
        "el gobierno",
        "la sociedad",
      ],
      correctAnswer: 0,
      explanation:
        "El sujeto es «La reciente reforma educativa impulsada por el gobierno». La frase participial de pasiva «impulsada por el gobierno» modifica al núcleo «reforma» dentro del sujeto.",
    },
    // 15
    {
      question:
        "¿Cuál es el **predicado** de la oración: *«Los principios éticos de Kant fundamentan gran parte de la filosofía moderna.»*?",
      options: [
        "fundamentan gran parte de la filosofía moderna",
        "Los principios éticos de Kant",
        "gran parte de la filosofía moderna",
        "fundamentan la filosofía",
      ],
      correctAnswer: 0,
      explanation:
        "El predicado es «fundamentan gran parte de la filosofía moderna». El sujeto es «Los principios éticos de Kant», donde «de Kant» especifica de quién son esos principios.",
    },
    // 16
    {
      question:
        "¿Cuál es el **sujeto** de la oración: *«Un grupo de astrónomos de la UNAM detectó un exoplaneta habitable.»*?",
      options: [
        "Un grupo de astrónomos de la UNAM",
        "detectó un exoplaneta habitable",
        "la UNAM",
        "un exoplaneta habitable",
      ],
      correctAnswer: 0,
      explanation:
        "El sujeto es «Un grupo de astrónomos de la UNAM». El núcleo es «grupo» y los dos sintagmas preposicionales («de astrónomos» y «de la UNAM») funcionan como complementos del nombre dentro del sujeto.",
    },
    // 17
    {
      question:
        "¿Cuál es el **predicado** de la oración: *«La desigualdad económica perpetúa los ciclos de pobreza intergeneracional.»*?",
      options: [
        "perpetúa los ciclos de pobreza intergeneracional",
        "La desigualdad económica",
        "los ciclos de pobreza",
        "pobreza intergeneracional",
      ],
      correctAnswer: 0,
      explanation:
        "El predicado es «perpetúa los ciclos de pobreza intergeneracional». Incluye el verbo y el complemento directo completo «los ciclos de pobreza intergeneracional».",
    },
    // 18
    {
      question:
        "¿Cuál es el **sujeto** de la oración: *«El descubrimiento accidental de la penicilina salvó millones de vidas.»*?",
      options: [
        "El descubrimiento accidental de la penicilina",
        "salvó millones de vidas",
        "la penicilina",
        "millones de vidas",
      ],
      correctAnswer: 0,
      explanation:
        "El sujeto es «El descubrimiento accidental de la penicilina». El modificador «de la penicilina» indica de qué fue el descubrimiento y pertenece al sujeto.",
    },
    // 19
    {
      question:
        "¿Cuál es el **predicado** de la oración: *«Los documentos del Archivo General de la Nación registran tres siglos de historia.»*?",
      options: [
        "registran tres siglos de historia",
        "Los documentos del Archivo General de la Nación",
        "tres siglos de historia",
        "registran la historia",
      ],
      correctAnswer: 0,
      explanation:
        "El predicado es «registran tres siglos de historia». El sujeto es «Los documentos del Archivo General de la Nación», con los complementos del nombre encadenados.",
    },
    // 20
    {
      question:
        "¿Cuál es el **sujeto** de la oración: *«Las mutaciones genéticas acumuladas durante generaciones determinan la evolución de las especies.»*?",
      options: [
        "Las mutaciones genéticas acumuladas durante generaciones",
        "determinan la evolución de las especies",
        "las generaciones",
        "las especies",
      ],
      correctAnswer: 0,
      explanation:
        "El sujeto es el amplio sintagma nominal «Las mutaciones genéticas acumuladas durante generaciones», que incluye el participio «acumuladas durante generaciones» como modificador.",
    },
    // 21
    {
      question:
        "¿Cuál es el **predicado** de la oración: *«El filósofo francés Michel Foucault analizó las relaciones entre saber y poder.»*?",
      options: [
        "analizó las relaciones entre saber y poder",
        "El filósofo francés Michel Foucault",
        "las relaciones entre saber y poder",
        "saber y poder",
      ],
      correctAnswer: 0,
      explanation:
        "El predicado es «analizó las relaciones entre saber y poder». El sujeto es el sintagma nominal con aposición «El filósofo francés Michel Foucault».",
    },
    // 22
    {
      question:
        "¿Cuál es el **sujeto** de la oración: *«Esa teoría sobre el origen del universo fue refutada por nuevas evidencias.»*?",
      options: [
        "Esa teoría sobre el origen del universo",
        "fue refutada por nuevas evidencias",
        "nuevas evidencias",
        "el origen del universo",
      ],
      correctAnswer: 0,
      explanation:
        "En esta oración pasiva, el sujeto gramatical es «Esa teoría sobre el origen del universo», que recibe la acción del verbo.",
    },
    // 23
    {
      question:
        "¿Cuál es el **predicado** de la oración: *«Los poetas del modernismo hispanoamericano rechazaron el positivismo.»*?",
      options: [
        "rechazaron el positivismo",
        "Los poetas del modernismo hispanoamericano",
        "el positivismo",
        "del modernismo hispanoamericano",
      ],
      correctAnswer: 0,
      explanation:
        "El predicado es «rechazaron el positivismo». El complemento «del modernismo hispanoamericano» delimita qué poetas son y pertenece al sujeto.",
    },
    // 24
    {
      question:
        "¿Cuál es el **sujeto** de la oración: *«La interpretación semiótica de los mitos explica el pensamiento simbólico humano.»*?",
      options: [
        "La interpretación semiótica de los mitos",
        "explica el pensamiento simbólico humano",
        "los mitos",
        "el pensamiento simbólico humano",
      ],
      correctAnswer: 0,
      explanation:
        "El sujeto es «La interpretación semiótica de los mitos». El modificador «de los mitos» indica qué se interpreta y es parte del sintagma sujeto.",
    },
    // 25
    {
      question:
        "¿Cuál es el **predicado** de la oración: *«Algunos fenómenos atmosféricos de gran magnitud alteran el ecosistema marino.»*?",
      options: [
        "alteran el ecosistema marino",
        "Algunos fenómenos atmosféricos de gran magnitud",
        "de gran magnitud",
        "el ecosistema marino",
      ],
      correctAnswer: 0,
      explanation:
        "El predicado es «alteran el ecosistema marino». El sujeto es «Algunos fenómenos atmosféricos de gran magnitud», con «de gran magnitud» como complemento del nombre.",
    },
    // 26
    {
      question:
        "¿Cuál es el **sujeto** de la oración: *«El modelo neoliberal implementado en los años noventa profundizó la brecha social.»*?",
      options: [
        "El modelo neoliberal implementado en los años noventa",
        "profundizó la brecha social",
        "los años noventa",
        "la brecha social",
      ],
      correctAnswer: 0,
      explanation:
        "El sujeto es «El modelo neoliberal implementado en los años noventa». La frase participial «implementado en los años noventa» modifica al núcleo «modelo» y es parte del sujeto.",
    },
    // 27
    {
      question:
        "¿Cuál es el **predicado** de la oración: *«Los tres poderes del Estado mexicano garantizan el orden jurídico del país.»*?",
      options: [
        "garantizan el orden jurídico del país",
        "Los tres poderes del Estado mexicano",
        "el orden jurídico del país",
        "del Estado mexicano",
      ],
      correctAnswer: 0,
      explanation:
        "El predicado es «garantizan el orden jurídico del país». El sujeto es «Los tres poderes del Estado mexicano».",
    },
    // 28
    {
      question:
        "¿Cuál es el **sujeto** de la oración: *«Ese ambicioso proyecto arquitectónico diseñado por Barragán reflejó la identidad nacional.»*?",
      options: [
        "Ese ambicioso proyecto arquitectónico diseñado por Barragán",
        "reflejó la identidad nacional",
        "Barragán",
        "la identidad nacional",
      ],
      correctAnswer: 0,
      explanation:
        "El sujeto es el sintagma nominal completo «Ese ambicioso proyecto arquitectónico diseñado por Barragán». «Barragán» es el agente dentro del participio modificador, no el sujeto de la oración.",
    },
    // 29
    {
      question:
        "¿Cuál es el **predicado** de la oración: *«Las teorías lingüísticas de Noam Chomsky revolucionaron el estudio del lenguaje.»*?",
      options: [
        "revolucionaron el estudio del lenguaje",
        "Las teorías lingüísticas de Noam Chomsky",
        "el estudio del lenguaje",
        "revolucionaron las teorías",
      ],
      correctAnswer: 0,
      explanation:
        "El predicado es «revolucionaron el estudio del lenguaje». El sujeto es «Las teorías lingüísticas de Noam Chomsky», con «de Noam Chomsky» como complemento del nombre.",
    },

    // ─── BLOQUE 2A: NÚCLEO DEL SUJETO (15 reactivos) ─────────────────────

    // 30
    {
      question:
        "¿Cuál es el **núcleo del sujeto** en: *«Los brillantes estudiantes de posgrado obtuvieron la beca.»*?",
      options: ["estudiantes", "Los", "brillantes", "posgrado"],
      correctAnswer: 0,
      explanation:
        "El núcleo del sujeto es el sustantivo «estudiantes». «Los» es el artículo determinante, «brillantes» es el adjetivo calificativo y «de posgrado» es el complemento del nombre.",
    },
    // 31
    {
      question:
        "¿Cuál es el **núcleo del sujeto** en: *«La compleja estructura del ADN sorprendió a los científicos.»*?",
      options: ["estructura", "compleja", "ADN", "científicos"],
      correctAnswer: 0,
      explanation:
        "El núcleo del sujeto es «estructura». «compleja» es un adjetivo que modifica al núcleo y «del ADN» es un complemento del nombre. «científicos» pertenece al predicado.",
    },
    // 32
    {
      question:
        "¿Cuál es el **núcleo del sujeto** en: *«Aquellas antiguas tradiciones culturales mesoamericanas perduran hasta hoy.»*?",
      options: ["tradiciones", "antiguas", "Aquellas", "mesoamericanas"],
      correctAnswer: 0,
      explanation:
        "El núcleo del sujeto es «tradiciones». «Aquellas» es el determinante demostrativo, «antiguas» y «culturales» son adjetivos calificativos, y «mesoamericanas» es un adjetivo gentilicio; todos son modificadores del núcleo.",
    },
    // 33
    {
      question:
        "¿Cuál es el **núcleo del sujeto** en: *«El riguroso método científico garantiza la objetividad del conocimiento.»*?",
      options: ["método", "riguroso", "científico", "El"],
      correctAnswer: 0,
      explanation:
        "El núcleo es el sustantivo «método». «El» es el artículo, «riguroso» y «científico» son adjetivos modificadores del núcleo.",
    },
    // 34
    {
      question:
        "¿Cuál es el **núcleo del sujeto** en: *«Varios ensayos filosóficos del siglo XX cuestionaron la razón instrumental.»*?",
      options: ["ensayos", "filosóficos", "Varios", "razón"],
      correctAnswer: 0,
      explanation:
        "El núcleo es «ensayos». «Varios» es un determinante cuantificador, «filosóficos» es un adjetivo modificador y «del siglo XX» es un complemento del nombre. «razón» pertenece al predicado.",
    },
    // 35
    {
      question:
        "¿Cuál es el **núcleo del sujeto** en: *«La nueva ley de telecomunicaciones aprobada por el Congreso generó debate.»*?",
      options: ["ley", "nueva", "telecomunicaciones", "Congreso"],
      correctAnswer: 0,
      explanation:
        "El núcleo es «ley». «nueva» es adjetivo, «de telecomunicaciones» es complemento del nombre y «aprobada por el Congreso» es una frase participial que modifica el núcleo. «Congreso» está dentro del complemento agente, no es el núcleo del sujeto.",
    },
    // 36
    {
      question:
        "¿Cuál es el **núcleo del sujeto** en: *«Los profundos cambios sociales derivados de la urbanización afectaron la identidad.»*?",
      options: ["cambios", "profundos", "sociales", "urbanización"],
      correctAnswer: 0,
      explanation:
        "El núcleo es «cambios». «profundos» y «sociales» son adjetivos modificadores; «derivados de la urbanización» es la frase participial. «urbanización» está dentro del complemento agente del participio.",
    },
    // 37
    {
      question:
        "¿Cuál es el **núcleo del sujeto** en: *«Una sorprendente colección de manuscritos medievales fue encontrada en la biblioteca.»*?",
      options: ["colección", "sorprendente", "manuscritos", "Una"],
      correctAnswer: 0,
      explanation:
        "El núcleo del sujeto es «colección». «Una» es el artículo indefinido, «sorprendente» es el adjetivo calificativo y «de manuscritos medievales» es el complemento del nombre.",
    },
    // 38
    {
      question:
        "¿Cuál es el **núcleo del sujeto** en: *«El polémico ensayo sobre el libre albedrío dividió a la comunidad académica.»*?",
      options: ["ensayo", "polémico", "libre", "albedrío"],
      correctAnswer: 0,
      explanation:
        "El núcleo es «ensayo». «polémico» es su adjetivo modificador y «sobre el libre albedrío» es el complemento del nombre que indica el tema del ensayo.",
    },
    // 39
    {
      question:
        "¿Cuál es el **núcleo del sujeto** en: *«Esas devastadoras inundaciones provocadas por el cambio climático destruyeron los cultivos.»*?",
      options: ["inundaciones", "devastadoras", "Esas", "climático"],
      correctAnswer: 0,
      explanation:
        "El núcleo es «inundaciones». «Esas» es el determinante demostrativo, «devastadoras» es el adjetivo calificativo y «provocadas por el cambio climático» es la frase participial modificadora.",
    },
    // 40
    {
      question:
        "¿Cuál es el **núcleo del sujeto** en: *«Los dos principales candidatos a la rectoría debatieron sus propuestas.»*?",
      options: ["candidatos", "dos", "principales", "rectoría"],
      correctAnswer: 0,
      explanation:
        "El núcleo es «candidatos». «Los» y «dos» son determinantes (artículo y numeral), «principales» es adjetivo modificador y «a la rectoría» es complemento del nombre.",
    },
    // 41
    {
      question:
        "¿Cuál es el **núcleo del sujeto** en: *«La histórica firma del tratado de paz selló décadas de conflicto.»*?",
      options: ["firma", "histórica", "tratado", "paz"],
      correctAnswer: 0,
      explanation:
        "El núcleo es «firma». «histórica» es el adjetivo calificativo y «del tratado de paz» es el complemento del nombre. «tratado» y «paz» pertenecen a ese complemento, no son el núcleo del sujeto.",
    },
    // 42
    {
      question:
        "¿Cuál es el **núcleo del sujeto** en: *«Algunos reconocidos poetas del boom latinoamericano exploraron el realismo mágico.»*?",
      options: ["poetas", "reconocidos", "Algunos", "latinoamericano"],
      correctAnswer: 0,
      explanation:
        "El núcleo es «poetas». «Algunos» cuantifica al núcleo, «reconocidos» es adjetivo modificador y «del boom latinoamericano» es complemento del nombre.",
    },
    // 43
    {
      question:
        "¿Cuál es el **núcleo del sujeto** en: *«El reciente descubrimiento arqueológico en Teotihuacán reescribió la historia prehispánica.»*?",
      options: ["descubrimiento", "reciente", "arqueológico", "Teotihuacán"],
      correctAnswer: 0,
      explanation:
        "El núcleo es «descubrimiento». «reciente» y «arqueológico» son adjetivos modificadores; «en Teotihuacán» es un complemento circunstancial de lugar que pertenece al sujeto como modificador.",
    },
    // 44
    {
      question:
        "¿Cuál es el **núcleo del sujeto** en: *«Las condiciones laborales precarias de los trabajadores informales demandan atención urgente.»*?",
      options: ["condiciones", "precarias", "laborales", "trabajadores"],
      correctAnswer: 0,
      explanation:
        "El núcleo es «condiciones». «laborales» y «precarias» son adjetivos calificativos; «de los trabajadores informales» es el complemento del nombre. «trabajadores» está dentro de ese complemento.",
    },

    // ─── BLOQUE 2B: NÚCLEO DEL PREDICADO (15 reactivos) ──────────────────

    // 45
    {
      question:
        "¿Cuál es el **núcleo del predicado** en: *«Los investigadores analizaron minuciosamente las muestras de tejido cancerígeno.»*?",
      options: ["analizaron", "minuciosamente", "muestras", "cancerígeno"],
      correctAnswer: 0,
      explanation:
        "El núcleo del predicado es siempre el verbo principal: «analizaron». «minuciosamente» es un complemento circunstancial de modo, y «las muestras de tejido cancerígeno» es el complemento directo.",
    },
    // 46
    {
      question:
        "¿Cuál es el **núcleo del predicado** en: *«La comisión dictaminadora rechazó por unanimidad el proyecto de ley.»*?",
      options: ["rechazó", "dictaminadora", "unanimidad", "proyecto"],
      correctAnswer: 0,
      explanation:
        "El núcleo del predicado es el verbo «rechazó». «por unanimidad» es el complemento circunstancial de modo y «el proyecto de ley» es el complemento directo.",
    },
    // 47
    {
      question:
        "¿Cuál es el **núcleo del predicado** en: *«Aquel célebre físico teórico desarrolló un modelo matemático revolucionario.»*?",
      options: ["desarrolló", "célebre", "teórico", "revolucionario"],
      correctAnswer: 0,
      explanation:
        "El núcleo del predicado es «desarrolló». Los adjetivos «célebre» y «teórico» modifican al sujeto y «revolucionario» modifica al complemento directo; ninguno de ellos es el núcleo.",
    },
    // 48
    {
      question:
        "¿Cuál es el **núcleo del predicado** en: *«Los estudiantes de último semestre presentarán sus tesis el próximo viernes.»*?",
      options: ["presentarán", "último", "tesis", "viernes"],
      correctAnswer: 0,
      explanation:
        "El núcleo del predicado es el verbo «presentarán». «sus tesis» es el complemento directo y «el próximo viernes» es el complemento circunstancial de tiempo.",
    },
    // 49
    {
      question:
        "¿Cuál es el **núcleo del predicado** en: *«La directora del museo inauguró solemnemente la nueva exposición de arte contemporáneo.»*?",
      options: ["inauguró", "solemnemente", "directora", "contemporáneo"],
      correctAnswer: 0,
      explanation:
        "El núcleo es «inauguró». «solemnemente» es un adverbio modificador del verbo (circunstancial de modo) y «la nueva exposición de arte contemporáneo» es el complemento directo.",
    },
    // 50
    {
      question:
        "¿Cuál es el **núcleo del predicado** en: *«El equipo interdisciplinario diseñó un protocolo de intervención social.»*?",
      options: ["diseñó", "interdisciplinario", "protocolo", "social"],
      correctAnswer: 0,
      explanation:
        "El núcleo del predicado es «diseñó». «interdisciplinario» es un adjetivo del sujeto; «un protocolo de intervención social» es el complemento directo.",
    },
    // 51
    {
      question:
        "¿Cuál es el **núcleo del predicado** en: *«Las reformas estructurales impulsadas por el FMI agravaron la crisis económica.»*?",
      options: ["agravaron", "estructurales", "impulsadas", "económica"],
      correctAnswer: 0,
      explanation:
        "El núcleo es «agravaron». «estructurales» e «impulsadas» son adjetivos del sujeto; «la crisis económica» es el complemento directo.",
    },
    // 52
    {
      question:
        "¿Cuál es el **núcleo del predicado** en: *«El dramaturgo mexicano escribió una trilogía sobre la identidad fronteriza.»*?",
      options: ["escribió", "dramaturgo", "mexicano", "trilogía"],
      correctAnswer: 0,
      explanation:
        "El núcleo del predicado es «escribió». «dramaturgo» y «mexicano» pertenecen al sujeto; «una trilogía sobre la identidad fronteriza» es el complemento directo.",
    },
    // 53
    {
      question:
        "¿Cuál es el **núcleo del predicado** en: *«Los síntomas neurológicos del paciente evidenciaron una lesión cerebral.»*?",
      options: ["evidenciaron", "neurológicos", "paciente", "cerebral"],
      correctAnswer: 0,
      explanation:
        "El núcleo es «evidenciaron». «neurológicos» es un adjetivo del sujeto; «paciente» está dentro del complemento del nombre «del paciente»; «cerebral» modifica al complemento directo.",
    },
    // 54
    {
      question:
        "¿Cuál es el **núcleo del predicado** en: *«La arqueóloga descubrió restos de una civilización precolombina desconocida.»*?",
      options: ["descubrió", "arqueóloga", "restos", "precolombina"],
      correctAnswer: 0,
      explanation:
        "El núcleo es «descubrió». «arqueóloga» es el núcleo del sujeto; «restos de una civilización precolombina desconocida» es el complemento directo; «precolombina» es un modificador dentro de ese complemento.",
    },
    // 55
    {
      question:
        "¿Cuál es el **núcleo del predicado** en: *«Ambos candidatos presentaron propuestas contradictorias ante la ciudadanía.»*?",
      options: ["presentaron", "ambos", "propuestas", "contradictorias"],
      correctAnswer: 0,
      explanation:
        "El núcleo es «presentaron». «ambos» es el determinante del sujeto; «propuestas contradictorias» es el complemento directo y «ante la ciudadanía» es el complemento circunstancial de lugar.",
    },
    // 56
    {
      question:
        "¿Cuál es el **núcleo del predicado** en: *«El tribunal constitucional declaró inconstitucional el decreto presidencial.»*?",
      options: [
        "declaró",
        "constitucional",
        "inconstitucional",
        "presidencial",
      ],
      correctAnswer: 0,
      explanation:
        "El núcleo es «declaró». «constitucional» es adjetivo del sujeto; «inconstitucional» es el predicativo del complemento directo y «presidencial» modifica al complemento directo.",
    },
    // 57
    {
      question:
        "¿Cuál es el **núcleo del predicado** en: *«Los filósofos estoicos cultivaron la virtud como camino hacia la felicidad.»*?",
      options: ["cultivaron", "estoicos", "virtud", "felicidad"],
      correctAnswer: 0,
      explanation:
        "El núcleo es «cultivaron». «estoicos» es adjetivo del sujeto; «la virtud» es el complemento directo y «como camino hacia la felicidad» es el complemento predicativo o modal.",
    },
    // 58
    {
      question:
        "¿Cuál es el **núcleo del predicado** en: *«La conferencia magistral sobre lingüística cognitiva atrajo a especialistas de todo el mundo.»*?",
      options: ["atrajo", "magistral", "lingüística", "cognitiva"],
      correctAnswer: 0,
      explanation:
        "El núcleo es «atrajo». «magistral» es adjetivo del sujeto; «lingüística» y «cognitiva» pertenecen al complemento del nombre «sobre lingüística cognitiva» dentro del sujeto.",
    },
    // 59
    {
      question:
        "¿Cuál es el **núcleo del predicado** en: *«Los datos estadísticos del INEGI revelan una tendencia demográfica preocupante.»*?",
      options: ["revelan", "estadísticos", "tendencia", "demográfica"],
      correctAnswer: 0,
      explanation:
        "El núcleo del predicado es «revelan». «estadísticos» es adjetivo del sujeto; «una tendencia demográfica preocupante» es el complemento directo; «demográfica» y «preocupante» son adjetivos dentro de ese complemento.",
    },

    // ─── BLOQUE 3: SUJETO SIMPLE, COMPUESTO Y TÁCITO (Q60–Q89) ─────────────

    // 60
    {
      question:
        "¿Qué tipo de sujeto tiene la oración: *«El arquitecto diseñó el nuevo hospital universitario.»*?",
      options: ["Simple", "Compuesto", "Tácito", "No tiene sujeto"],
      correctAnswer: 0,
      explanation:
        "El sujeto «El arquitecto» tiene un único núcleo sustantivo. Se llama sujeto simple cuando está formado por un solo núcleo.",
    },
    // 61
    {
      question:
        "¿Qué tipo de sujeto tiene la oración: *«La doctora y su asistente realizaron el estudio clínico.»*?",
      options: ["Compuesto", "Simple", "Tácito", "Elíptico"],
      correctAnswer: 0,
      explanation:
        "«La doctora y su asistente» tiene dos núcleos coordinados por «y». El sujeto compuesto tiene dos o más núcleos.",
    },
    // 62
    {
      question:
        "¿Qué tipo de sujeto tiene la oración: *«Regresamos al país después de diez años.»*?",
      options: ["Tácito (nosotros)", "Simple", "Compuesto", "No tiene sujeto"],
      correctAnswer: 0,
      explanation:
        "La desinencia «-mos» en «regresamos» corresponde a la primera persona del plural: nosotros. El sujeto omitido se llama tácito o elíptico.",
    },
    // 63
    {
      question:
        "¿Qué tipo de sujeto tiene la oración: *«Los filósofos griegos y los pensadores medievales influyeron en el Renacimiento.»*?",
      options: ["Compuesto", "Simple", "Tácito", "Múltiple"],
      correctAnswer: 0,
      explanation:
        "Dos núcleos coordinados: «filósofos» y «pensadores». Cuando dos o más sintagmas nominales coordinados realizan la acción verbal, el sujeto es compuesto.",
    },
    // 64
    {
      question:
        "¿Cuál es el sujeto tácito de la oración: *«Decidieron modificar el plan de estudios sin consultar.»*?",
      options: [
        "Ellos / Ellas",
        "Yo",
        "Nosotros",
        "La oración no tiene sujeto tácito",
      ],
      correctAnswer: 0,
      explanation:
        "La desinencia «-ieron» en «decidieron» corresponde a la tercera persona del plural: ellos o ellas. El sujeto se recupera del morfema verbal.",
    },
    // 65
    {
      question:
        "¿Qué tipo de sujeto tiene la oración: *«La Constitución de 1917 estableció los derechos sociales en México.»*?",
      options: ["Simple", "Compuesto", "Tácito", "No tiene sujeto"],
      correctAnswer: 0,
      explanation:
        "«La Constitución de 1917» tiene un solo núcleo: «Constitución». «de 1917» es complemento del nombre, no un segundo núcleo. Sujeto simple.",
    },
    // 66
    {
      question:
        "¿Qué tipo de sujeto tiene la oración: *«Estudias demasiado cuando llega el período de exámenes.»*?",
      options: ["Tácito (tú)", "Simple", "Compuesto", "No tiene sujeto"],
      correctAnswer: 0,
      explanation:
        "La desinencia «-as» en «estudias» corresponde a la segunda persona del singular: tú. El sujeto no está expresado; es tácito.",
    },
    // 67
    {
      question:
        "¿Cuál es el sujeto de la oración: *«El rector, los decanos y los coordinadores firmaron el convenio.»*?",
      options: [
        '"El rector, los decanos y los coordinadores" (compuesto)',
        '"El rector" (simple)',
        '"los coordinadores" (simple)',
        '"firmaron el convenio" (predicado)',
      ],
      correctAnswer: 0,
      explanation:
        "El sujeto es compuesto: tres núcleos coordinados «rector», «decanos» y «coordinadores». El verbo concuerda en plural.",
    },
    // 68
    {
      question:
        "¿Qué tipo de sujeto tiene la oración: *«Analizaron las consecuencias económicas de la pandemia.»*?",
      options: [
        "Tácito (ellos/ellas)",
        "Simple",
        "No tiene sujeto",
        "Compuesto",
      ],
      correctAnswer: 0,
      explanation:
        "La desinencia «-aron» señala la tercera persona del plural. El sujeto «ellos/ellas» está omitido; es tácito.",
    },
    // 69
    {
      question:
        "¿Cuál es el sujeto tácito de la oración: *«Espero graduarme con honores el próximo año.»*?",
      options: ["Yo", "Él", "Nosotros", "Usted"],
      correctAnswer: 0,
      explanation:
        "La desinencia «-o» en «espero» corresponde a la primera persona del singular: yo. El sujeto es tácito.",
    },
    // 70
    {
      question:
        "¿Qué tipo de sujeto tiene la oración: *«La física cuántica y la relatividad general son incompatibles.»*?",
      options: ["Compuesto", "Simple", "Tácito", "No tiene sujeto"],
      correctAnswer: 0,
      explanation:
        "Dos núcleos coordinados: «física» y «relatividad». La concordancia plural del verbo «son» confirma el sujeto compuesto.",
    },
    // 71
    {
      question:
        "¿Cuál es el sujeto **simple** en: *«El análisis estadístico reveló una correlación significativa.»*?",
      options: [
        '"El análisis estadístico"',
        '"reveló una correlación significativa"',
        '"una correlación significativa"',
        '"El análisis"',
      ],
      correctAnswer: 0,
      explanation:
        "«El análisis estadístico» tiene un único núcleo: «análisis». «estadístico» es modificador directo. Sujeto simple.",
    },
    // 72
    {
      question:
        "¿Qué tipo de sujeto tiene la oración: *«Publicaron los resultados en una revista indexada.»*?",
      options: ["Tácito (ellos)", "Simple", "Compuesto", "No tiene sujeto"],
      correctAnswer: 0,
      explanation:
        "La desinencia «-aron» indica tercera persona del plural. El sujeto tácito es «ellos/ellas».",
    },
    // 73
    {
      question:
        "¿Cuál es el sujeto **compuesto** en: *«La novela y el cuento son géneros narrativos.»*?",
      options: [
        '"La novela y el cuento"',
        '"La novela"',
        '"el cuento"',
        '"géneros narrativos"',
      ],
      correctAnswer: 0,
      explanation:
        "Los dos núcleos coordinados «novela» y «cuento» forman el sujeto compuesto.",
    },
    // 74
    {
      question:
        "¿Qué tipo de sujeto tiene la oración: *«¡Callad y escuchad con atención!»*?",
      options: ["Tácito (vosotros)", "Simple", "Compuesto", "No tiene sujeto"],
      correctAnswer: 0,
      explanation:
        "Las formas imperativas «callad» y «escuchad» corresponden a «vosotros», sujeto omitido que se recupera morfológicamente.",
    },
    // 75
    {
      question:
        "¿Qué tipo de sujeto tiene la oración: *«El presidente, el secretario de Estado y el canciller negociaron el acuerdo.»*?",
      options: ["Compuesto", "Simple", "Tácito", "Plural"],
      correctAnswer: 0,
      explanation:
        "Tres sintagmas nominales coordinados forman el sujeto compuesto.",
    },
    // 76
    {
      question:
        "¿Cuál es el sujeto tácito de la oración: *«Denunciaron las irregularidades ante las autoridades competentes.»*?",
      options: ["Ellos / Ellas", "Yo", "Tú", "Nosotros"],
      correctAnswer: 0,
      explanation:
        "La desinencia «-aron» indica tercera persona del plural. El sujeto implícito es «ellos/ellas».",
    },
    // 77
    {
      question:
        "¿Qué tipo de sujeto tiene la oración: *«El teorema de Pitágoras fundamenta la trigonometría.»*?",
      options: ["Simple", "Compuesto", "Tácito", "Implícito"],
      correctAnswer: 0,
      explanation:
        "«El teorema de Pitágoras» tiene un único núcleo: «teorema». «de Pitágoras» es complemento del nombre. Sujeto simple.",
    },
    // 78
    {
      question:
        "¿Cuál es el sujeto **compuesto** de: *«La inflación, el desempleo y la deuda externa afectan la economía nacional.»*?",
      options: [
        '"La inflación, el desempleo y la deuda externa"',
        '"La inflación"',
        '"la economía nacional"',
        '"el desempleo y la deuda externa"',
      ],
      correctAnswer: 0,
      explanation:
        "Los tres sintagmas nominales coordinados conforman en conjunto el sujeto compuesto.",
    },
    // 79
    {
      question:
        "¿Qué tipo de sujeto tiene la oración: *«Comprendemos la importancia de preservar la diversidad lingüística.»*?",
      options: ["Tácito (nosotros)", "Simple", "Compuesto", "No tiene sujeto"],
      correctAnswer: 0,
      explanation:
        "La desinencia «-emos» en «comprendemos» señala la primera persona del plural: nosotros. El sujeto es tácito.",
    },
    // 80
    {
      question: "La oración *«Amamos la libertad»* tiene sujeto:",
      options: ["Tácito (nosotros)", "Simple", "Compuesto", "No determinado"],
      correctAnswer: 0,
      explanation:
        "La desinencia «-amos» corresponde a la primera persona del plural. El sujeto «nosotros» está omitido; es tácito.",
    },
    // 81
    {
      question:
        "¿Qué tipo de sujeto tiene la oración: *«La biología molecular y la genómica transformaron la medicina.»*?",
      options: ["Compuesto", "Simple", "Tácito", "Doble"],
      correctAnswer: 0,
      explanation:
        "«La biología molecular» y «la genómica» son dos sintagmas nominales coordinados: sujeto compuesto.",
    },
    // 82
    {
      question:
        "¿Cuál es el sujeto de la oración: *«Los derechos humanos y la dignidad de las personas son universales.»*?",
      options: [
        '"Los derechos humanos y la dignidad de las personas"',
        '"Los derechos humanos"',
        '"la dignidad de las personas"',
        '"son universales"',
      ],
      correctAnswer: 0,
      explanation:
        "El sujeto compuesto abarca los dos núcleos coordinados: «derechos» y «dignidad», con sus modificadores.",
    },
    // 83
    {
      question:
        "¿Qué tipo de sujeto tiene la oración: *«Recibí una distinción académica por mi desempeño.»*?",
      options: ["Tácito (yo)", "Simple", "Compuesto", "No tiene sujeto"],
      correctAnswer: 0,
      explanation:
        "La desinencia «-í» en «recibí» corresponde a la primera persona del singular: yo. El sujeto es tácito.",
    },
    // 84
    {
      question:
        "¿Qué tipo de sujeto tiene la oración: *«El lenguaje simbólico distingue al ser humano de otras especies.»*?",
      options: ["Simple", "Compuesto", "Tácito", "No tiene sujeto"],
      correctAnswer: 0,
      explanation:
        "«El lenguaje simbólico» tiene un solo núcleo: «lenguaje». «simbólico» es modificador directo. Sujeto simple.",
    },
    // 85
    {
      question:
        "La oración *«El capital y el trabajo son fuerzas complementarias»* tiene sujeto:",
      options: ["Compuesto", "Simple", "Tácito", "Implícito"],
      correctAnswer: 0,
      explanation:
        "«El capital» y «el trabajo» son dos núcleos coordinados por «y»: sujeto compuesto. El verbo «son» concuerda en plural.",
    },
    // 86
    {
      question:
        "¿Qué tipo de sujeto tiene la oración: *«Defendieron su tesis doctoral con argumentos sólidos.»*?",
      options: [
        "Tácito (ellos/ellas)",
        "Simple",
        "Compuesto",
        "No determinado",
      ],
      correctAnswer: 0,
      explanation:
        "La desinencia «-ieron» señala la tercera persona del plural. El sujeto «ellos/ellas» está omitido; es tácito.",
    },
    // 87
    {
      question:
        "¿Cuál es el sujeto tácito de la oración: *«Presentaste el informe fuera del plazo establecido.»*?",
      options: ["Tú", "Yo", "Él/Ella", "Nosotros"],
      correctAnswer: 0,
      explanation:
        "La desinencia «-aste» en «presentaste» corresponde a la segunda persona del singular: tú.",
    },
    // 88
    {
      question:
        "¿Qué tipo de sujeto tiene la oración: *«La epistemología, la ontología y la ética son ramas de la filosofía.»*?",
      options: ["Compuesto", "Simple", "Tácito", "Colectivo"],
      correctAnswer: 0,
      explanation:
        "Tres sintagmas nominales coordinados conforman el sujeto compuesto. El verbo «son» concuerda en plural.",
    },
    // 89
    {
      question:
        "¿Qué tipo de sujeto tiene la oración: *«El modelo educativo constructivista promueve el aprendizaje autónomo.»*?",
      options: ["Simple", "Compuesto", "Tácito", "No tiene sujeto"],
      correctAnswer: 0,
      explanation:
        "«El modelo educativo constructivista» tiene un único núcleo: «modelo». Los adjetivos son modificadores directos. Sujeto simple.",
    },

    // ─── BLOQUE 4: MODIFICADOR DIRECTO (ADYACENTE) (Q90–Q119) ───────────────

    // 90
    {
      question:
        "¿Cuáles son los **modificadores directos** del núcleo *«investigaciones»* en: *«Las recientes investigaciones genéticas revolucionaron la medicina»*?",
      options: [
        '"Las", "recientes", "genéticas"',
        '"Las"',
        '"recientes", "genéticas"',
        '"de la medicina"',
      ],
      correctAnswer: 0,
      explanation:
        "«Las» (artículo), «recientes» y «genéticas» (adjetivos) modifican al núcleo sin preposición: son MD. «de la medicina» es modificador indirecto en el predicado.",
    },
    // 91
    {
      question:
        "¿Cuáles son los **MD** del núcleo *«análisis»* en: *«Un profundo análisis literario reveló nuevos significados»*?",
      options: [
        '"Un", "profundo", "literario"',
        '"Un", "profundo"',
        '"literario"',
        '"nuevos significados"',
      ],
      correctAnswer: 0,
      explanation:
        "«Un» (artículo), «profundo» (adjetivo antepuesto) y «literario» (adjetivo pospuesto) son los tres MD del núcleo «análisis».",
    },
    // 92
    {
      question:
        "¿Cuál de las siguientes expresiones es un **modificador directo** y NO un modificador indirecto?",
      options: [
        '"brillante" en «la brillante propuesta»',
        '"de posgrado" en «los alumnos de posgrado»',
        '"con experiencia" en «el médico con experiencia»',
        '"sobre lingüística" en «el curso sobre lingüística»',
      ],
      correctAnswer: 0,
      explanation:
        "«brillante» modifica a «propuesta» sin preposición: es MD. Las otras opciones usan preposición («de», «con», «sobre»): son modificadores indirectos.",
    },
    // 93
    {
      question:
        "¿Cuáles son los **MD** del núcleo *«proyectos»* en: *«Esos dos ambiciosos proyectos universitarios fracasaron»*?",
      options: [
        '"Esos", "dos", "ambiciosos", "universitarios"',
        '"ambiciosos", "universitarios"',
        '"Esos", "dos"',
        '"dos", "ambiciosos"',
      ],
      correctAnswer: 0,
      explanation:
        "Los cuatro elementos modifican a «proyectos» sin preposición: «Esos» (demostrativo), «dos» (numeral), «ambiciosos» y «universitarios» (adjetivos).",
    },
    // 94
    {
      question:
        "¿Qué tipo de palabra NO puede funcionar como **modificador directo** de un sustantivo?",
      options: [
        "Un sintagma preposicional",
        "Un artículo determinado",
        "Un adjetivo calificativo",
        "Un adjetivo demostrativo",
      ],
      correctAnswer: 0,
      explanation:
        "Un sintagma preposicional siempre introduce un modificador indirecto. Los MD modifican al núcleo sin preposición (artículos, adjetivos, determinantes).",
    },
    // 95
    {
      question:
        "¿Cuáles son los **MD** del núcleo *«ley»* en: *«La nueva ley tributaria generó controversia»*?",
      options: [
        '"La", "nueva", "tributaria"',
        '"La", "nueva"',
        '"tributaria"',
        '"La"',
      ],
      correctAnswer: 0,
      explanation:
        "«La» (artículo), «nueva» (adjetivo antepuesto) y «tributaria» (adjetivo pospuesto) son los tres MD del núcleo «ley».",
    },
    // 96
    {
      question:
        "¿Cuáles son los **MD** del núcleo *«estudiantes»* en: *«Varios estudiantes extranjeros obtuvieron la beca»*?",
      options: [
        '"Varios", "extranjeros"',
        '"Varios"',
        '"extranjeros"',
        '"la beca"',
      ],
      correctAnswer: 0,
      explanation:
        "«Varios» (cuantificador) y «extranjeros» (adjetivo) son los MD de «estudiantes». «la beca» pertenece al predicado.",
    },
    // 97
    {
      question:
        "¿Cuál es la diferencia fundamental entre **modificador directo** (MD) y **modificador indirecto** (MI)?",
      options: [
        "El MD modifica sin preposición; el MI usa preposición",
        "El MD usa preposición; el MI no",
        "El MD es siempre un artículo; el MI es siempre un adjetivo",
        "No existe tal distinción en la gramática española",
      ],
      correctAnswer: 0,
      explanation:
        "La diferencia es estructural: el MD está unido directamente al núcleo (artículos, adjetivos, determinantes); el MI siempre se introduce mediante una preposición, formando un sintagma preposicional.",
    },
    // 98
    {
      question:
        "¿Cuáles son los **MD** del núcleo *«informe»* en: *«El exhaustivo informe sobre derechos humanos fue publicado»*?",
      options: [
        '"El", "exhaustivo"',
        '"exhaustivo"',
        '"sobre derechos humanos"',
        '"El", "exhaustivo", "sobre derechos humanos"',
      ],
      correctAnswer: 0,
      explanation:
        "«El» (artículo) y «exhaustivo» (adjetivo) son MD de «informe». «sobre derechos humanos» es sintagma preposicional: modificador indirecto.",
    },
    // 99
    {
      question:
        "¿Cuáles son los **MD** del núcleo *«conferencia»* en: *«Aquella memorable conferencia internacional marcó un hito»*?",
      options: [
        '"Aquella", "memorable", "internacional"',
        '"memorable", "internacional"',
        '"Aquella"',
        '"un hito"',
      ],
      correctAnswer: 0,
      explanation:
        "«Aquella» (demostrativo), «memorable» y «internacional» (adjetivos) son los tres MD del núcleo «conferencia».",
    },
    // 100
    {
      question:
        "¿Cuáles son los **MD** del núcleo *«publicaciones»* en: *«Sus primeras publicaciones científicas causaron impacto»*?",
      options: [
        '"Sus", "primeras", "científicas"',
        '"primeras", "científicas"',
        '"Sus"',
        '"Sus", "primeras"',
      ],
      correctAnswer: 0,
      explanation:
        "«Sus» (posesivo), «primeras» (numeral ordinal) y «científicas» (adjetivo calificativo) son los tres MD del núcleo «publicaciones».",
    },
    // 101
    {
      question:
        "¿Cuáles son los **MD** del núcleo *«libro»* en el sintagma *«el libro de texto obligatorio»*?",
      options: [
        '"el", "obligatorio"',
        '"de texto"',
        '"el", "de texto", "obligatorio"',
        '"obligatorio"',
      ],
      correctAnswer: 0,
      explanation:
        "«el» (artículo) y «obligatorio» (adjetivo) son MD de «libro». «de texto» es sintagma preposicional: modificador indirecto.",
    },
    // 102
    {
      question:
        "¿Cuáles son los **MD** del núcleo *«problemas»* en: *«Esos problemas sociales complejos requieren soluciones integrales»*?",
      options: [
        '"Esos", "sociales", "complejos"',
        '"Esos"',
        '"sociales"',
        '"complejos"',
      ],
      correctAnswer: 0,
      explanation:
        "«Esos» (demostrativo), «sociales» y «complejos» (adjetivos calificativos) son los MD del núcleo «problemas».",
    },
    // 103
    {
      question:
        "¿En cuál de los siguientes sintagmas el único modificador del núcleo es un **modificador indirecto**?",
      options: [
        '"problemas de salud"',
        '"el grave problema"',
        '"aquellas tendencias sociales"',
        '"varios libros ilustrados"',
      ],
      correctAnswer: 0,
      explanation:
        "En «problemas de salud» no hay artículo ni adjetivo; solo «de salud» (sintagma preposicional): modificador indirecto. Las demás opciones tienen MD.",
    },
    // 104
    {
      question:
        "¿Cuáles son los **MD** del núcleo *«crisis»* en: *«La profunda crisis económica mundial afectó a millones»*?",
      options: [
        '"La", "profunda", "económica", "mundial"',
        '"profunda", "económica", "mundial"',
        '"La", "profunda"',
        '"La"',
      ],
      correctAnswer: 0,
      explanation:
        "«La» (artículo), «profunda», «económica» y «mundial» (adjetivos) modifican directamente a «crisis» sin preposición. Los cuatro son MD.",
    },
    // 105
    {
      question:
        "¿Cuáles son los **MD** del núcleo *«investigador»* en: *«Un joven investigador brillante publicó sus hallazgos»*?",
      options: [
        '"Un", "joven", "brillante"',
        '"Un", "joven"',
        '"brillante"',
        '"joven", "brillante"',
      ],
      correctAnswer: 0,
      explanation:
        "«Un» (artículo), «joven» (adjetivo antepuesto) y «brillante» (adjetivo pospuesto) son los tres MD del núcleo «investigador».",
    },
    // 106
    {
      question: "El artículo *«el»* en *«el estudiante»* funciona como:",
      options: [
        "Modificador directo del núcleo «estudiante»",
        "Modificador indirecto",
        "Núcleo del sujeto",
        "Complemento del nombre",
      ],
      correctAnswer: 0,
      explanation:
        "Los artículos son determinantes que modifican directamente al núcleo sin preposición: son modificadores directos.",
    },
    // 107
    {
      question:
        "¿Cuáles son los **MD** del núcleo *«catedráticos»* en: *«Tres distinguidos catedráticos dictaron la conferencia»*?",
      options: [
        '"Tres", "distinguidos"',
        '"Tres"',
        '"distinguidos"',
        '"la conferencia"',
      ],
      correctAnswer: 0,
      explanation:
        "«Tres» (numeral cardinal) y «distinguidos» (adjetivo) son los MD de «catedráticos». «la conferencia» pertenece al predicado.",
    },
    // 108
    {
      question:
        "¿Cuáles son los **MD** del núcleo *«propuesta»* en: *«La propuesta más innovadora del congreso fue rechazada»*?",
      options: [
        '"La", "más innovadora"',
        '"del congreso"',
        '"La", "más innovadora", "del congreso"',
        '"más innovadora"',
      ],
      correctAnswer: 0,
      explanation:
        "«La» (artículo) y «más innovadora» (adjetivo superlativo) son los MD de «propuesta». «del congreso» es sintagma preposicional: modificador indirecto.",
    },
    // 109
    {
      question:
        "¿Cuáles son los **MD** del núcleo *«principios»* en: *«Los cinco principios filosóficos fundamentales guían su obra»*?",
      options: [
        '"Los", "cinco", "filosóficos", "fundamentales"',
        '"cinco", "filosóficos", "fundamentales"',
        '"Los", "cinco"',
        '"filosóficos", "fundamentales"',
      ],
      correctAnswer: 0,
      explanation:
        "«Los» (artículo), «cinco» (numeral), «filosóficos» y «fundamentales» (adjetivos) son los cuatro MD del núcleo «principios».",
    },
    // 110
    {
      question:
        "¿En cuál de las siguientes oraciones el adjetivo funciona como **modificador directo** (y NO como predicativo)?",
      options: [
        "«La *brillante* actriz recibió el premio»",
        "«La actriz resultó *premiada*»",
        "«Consideran *excelente* su desempeño»",
        "«El estudiante llegó *cansado*»",
      ],
      correctAnswer: 0,
      explanation:
        "En «La brillante actriz», «brillante» es un adjetivo dentro del sintagma nominal (atributivo = MD). En las demás opciones el adjetivo actúa como predicativo o atributo, asociado al verbo.",
    },
    // 111
    {
      question:
        "¿Cuáles son los **MD** del núcleo *«teorías»* en: *«Aquellas nuevas teorías revolucionarias transformaron la ciencia»*?",
      options: [
        '"Aquellas", "nuevas", "revolucionarias"',
        '"nuevas", "revolucionarias"',
        '"Aquellas", "nuevas"',
        '"Aquellas"',
      ],
      correctAnswer: 0,
      explanation:
        "«Aquellas» (demostrativo), «nuevas» y «revolucionarias» (adjetivos calificativos) son los tres MD del núcleo «teorías».",
    },
    // 112
    {
      question:
        "¿Cuáles son los **MD** del núcleo *«tratado»* en: *«El reciente tratado bilateral sobre comercio fue ratificado»*?",
      options: [
        '"El", "reciente", "bilateral"',
        '"El", "reciente", "bilateral", "sobre comercio"',
        '"sobre comercio"',
        '"El"',
      ],
      correctAnswer: 0,
      explanation:
        "«El», «reciente» y «bilateral» son los MD de «tratado». «sobre comercio» es sintagma preposicional: modificador indirecto.",
    },
    // 113
    {
      question:
        "¿Cuáles son los **MD** del núcleo *«resultados»* en: *«Los sorprendentes resultados del experimento confirmaron la hipótesis»*?",
      options: [
        '"Los", "sorprendentes"',
        '"del experimento"',
        '"Los", "sorprendentes", "del experimento"',
        '"sorprendentes"',
      ],
      correctAnswer: 0,
      explanation:
        "«Los» (artículo) y «sorprendentes» (adjetivo) son los MD de «resultados». «del experimento» es modificador indirecto.",
    },
    // 114
    {
      question:
        "¿Cuáles son los **MD** del núcleo *«defensa»* en: *«Su valiente defensa de los derechos civiles fue reconocida»*?",
      options: [
        '"Su", "valiente"',
        '"valiente"',
        '"de los derechos civiles"',
        '"Su", "valiente", "de los derechos civiles"',
      ],
      correctAnswer: 0,
      explanation:
        "«Su» (posesivo) y «valiente» (adjetivo) son los MD de «defensa». «de los derechos civiles» es modificador indirecto.",
    },
    // 115
    {
      question:
        "¿Qué función cumple *«filosófico»* en el sintagma *«el debate filosófico contemporáneo»*?",
      options: [
        "Modificador directo del núcleo «debate»",
        "Modificador indirecto",
        "Núcleo del predicado",
        "Complemento directo",
      ],
      correctAnswer: 0,
      explanation:
        "«filosófico» es adjetivo calificativo que modifica directamente al núcleo «debate» sin preposición: es modificador directo.",
    },
    // 116
    {
      question:
        "¿Cuáles son los **MD** del núcleo *«fenómenos»* en: *«Ciertos fenómenos electromagnéticos inexplicables fascinan a los científicos»*?",
      options: [
        '"Ciertos", "electromagnéticos", "inexplicables"',
        '"Ciertos"',
        '"electromagnéticos", "inexplicables"',
        '"a los científicos"',
      ],
      correctAnswer: 0,
      explanation:
        "«Ciertos» (determinante indefinido), «electromagnéticos» y «inexplicables» (adjetivos calificativos) son los MD del núcleo «fenómenos».",
    },
    // 117
    {
      question:
        "¿Cuál de los siguientes NO es **modificador directo** del núcleo *«ciudad»* en *«la bella ciudad de México colonial»*?",
      options: ['"de México"', '"la"', '"bella"', '"colonial"'],
      correctAnswer: 0,
      explanation:
        "«de México» es sintagma preposicional: modificador indirecto. «la» (artículo), «bella» y «colonial» (adjetivos) sí son MD.",
    },
    // 118
    {
      question:
        "¿Cuáles son los **MD** del núcleo *«acuerdos»* en: *«Dos importantes acuerdos internacionales fueron firmados»*?",
      options: [
        '"Dos", "importantes", "internacionales"',
        '"Dos"',
        '"importantes", "internacionales"',
        '"Dos", "importantes"',
      ],
      correctAnswer: 0,
      explanation:
        "«Dos» (numeral), «importantes» y «internacionales» (adjetivos) son los tres MD del núcleo «acuerdos».",
    },
    // 119
    {
      question:
        "¿Cuáles son los **MD** del núcleo *«análisis»* en: *«El minucioso análisis de datos cuantitativos fue publicado»*?",
      options: [
        '"El", "minucioso"',
        '"de datos cuantitativos"',
        '"El", "minucioso", "de datos cuantitativos"',
        '"minucioso"',
      ],
      correctAnswer: 0,
      explanation:
        "«El» (artículo) y «minucioso» (adjetivo) son los MD de «análisis». «de datos cuantitativos» es sintagma preposicional: modificador indirecto.",
    },

    // ─── BLOQUE 5: PREDICADO NOMINAL Y VERBAL (Q120–Q149) ───────────────────

    // 120
    {
      question:
        "¿Qué tipo de predicado tiene la oración: *«La neurociencia es una disciplina relativamente reciente.»*?",
      options: ["Nominal", "Verbal", "Mixto", "Compuesto"],
      correctAnswer: 0,
      explanation:
        "El verbo copulativo «es» une al sujeto con el atributo «una disciplina relativamente reciente». El predicado nominal se construye con verbos copulativos (ser, estar, parecer…) más un atributo.",
    },
    // 121
    {
      question:
        "¿Qué tipo de predicado tiene la oración: *«Los estudiantes aprobaron el examen de admisión.»*?",
      options: ["Verbal", "Nominal", "Copulativo", "Mixto"],
      correctAnswer: 0,
      explanation:
        "«aprobaron» es un verbo predicativo (no copulativo). El predicado verbal se construye con verbos que expresan acción o proceso, sin necesitar un atributo.",
    },
    // 122
    {
      question:
        "¿Qué tipo de predicado tiene la oración: *«El filósofo parecía exhausto después del debate.»*?",
      options: ["Nominal", "Verbal", "Activo", "Pasivo"],
      correctAnswer: 0,
      explanation:
        "«Parecer» es un verbo copulativo; «exhausto» es el atributo que se predica del sujeto. Predicado nominal.",
    },
    // 123
    {
      question:
        "¿Qué tipo de predicado tiene la oración: *«La investigadora publicó sus resultados en una revista científica.»*?",
      options: ["Verbal", "Nominal", "Copulativo", "Pasivo"],
      correctAnswer: 0,
      explanation:
        "«publicó» es un verbo predicativo transitivo. No hay verbo copulativo ni atributo. Predicado verbal.",
    },
    // 124
    {
      question:
        "¿Cuál de las siguientes oraciones tiene **predicado nominal**?",
      options: [
        "«El proyecto resultó exitoso»",
        "«El equipo desarrolló el proyecto»",
        "«Los investigadores analizaron los datos»",
        "«El director canceló la conferencia»",
      ],
      correctAnswer: 0,
      explanation:
        "«Resultar» funciona como verbo copulativo cuando lo sigue un adjetivo atributo. «exitoso» es el atributo de «El proyecto». Predicado nominal.",
    },
    // 125
    {
      question:
        "¿Qué tipo de predicado tiene la oración: *«El arte prehispánico es patrimonio de la humanidad.»*?",
      options: ["Nominal", "Verbal", "Predicativo", "Compuesto"],
      correctAnswer: 0,
      explanation:
        "«Es» es verbo copulativo; «patrimonio de la humanidad» es el atributo nominal. Predicado nominal.",
    },
    // 126
    {
      question:
        "¿Cuál es el **atributo** en el predicado nominal de: *«La propuesta del gobierno resultó polémica.»*?",
      options: ['"polémica"', '"del gobierno"', '"resultó"', '"La propuesta"'],
      correctAnswer: 0,
      explanation:
        "«polémica» es el adjetivo atributo. Se predica del sujeto «La propuesta del gobierno» a través del verbo copulativo «resultó».",
    },
    // 127
    {
      question:
        "¿Qué tipo de predicado tiene la oración: *«Los volcanes activos representan un riesgo geológico permanente.»*?",
      options: ["Verbal", "Nominal", "Copulativo", "Mixto"],
      correctAnswer: 0,
      explanation:
        "«Representar» es un verbo predicativo (no copulativo). Predicado verbal.",
    },
    // 128
    {
      question:
        "¿Cuál de los siguientes verbos forma un **predicado nominal**?",
      options: ['"parecer"', '"correr"', '"analizar"', '"descubrir"'],
      correctAnswer: 0,
      explanation:
        "«Parecer» es un verbo copulativo que exige un atributo. Los otros tres son verbos predicativos que expresan acciones.",
    },
    // 129
    {
      question:
        "¿Qué tipo de predicado tiene la oración: *«El teorema de Fermat estuvo sin demostrar por siglos.»*?",
      options: ["Nominal", "Verbal", "Activo", "Compuesto"],
      correctAnswer: 0,
      explanation:
        "«Estar» es verbo copulativo; «sin demostrar por siglos» funciona como atributo del sujeto. Predicado nominal.",
    },
    // 130
    {
      question:
        "¿Qué tipo de predicado tiene la oración: *«La comisión revisó el informe durante tres horas.»*?",
      options: ["Verbal", "Nominal", "Copulativo", "Predicativo"],
      correctAnswer: 0,
      explanation:
        "«Revisar» es un verbo predicativo transitivo. Predicado verbal.",
    },
    // 131
    {
      question: "¿Cuál de las siguientes oraciones tiene **predicado verbal**?",
      options: [
        "«Los estudiantes debatieron el tema con rigor»",
        "«La crisis económica fue devastadora»",
        "«El resultado parece prometedor»",
        "«Esas teorías resultaron incorrectas»",
      ],
      correctAnswer: 0,
      explanation:
        "«Debatir» es un verbo predicativo. Las otras opciones usan verbos copulativos («fue», «parece», «resultaron») que forman predicados nominales.",
    },
    // 132
    {
      question:
        "¿Qué tipo de predicado tiene la oración: *«El agua es esencial para la vida en la Tierra.»*?",
      options: ["Nominal", "Verbal", "Pasivo", "Compuesto"],
      correctAnswer: 0,
      explanation:
        "«Ser» es el verbo copulativo por excelencia. «esencial para la vida en la Tierra» es el atributo. Predicado nominal.",
    },
    // 133
    {
      question:
        "El verbo *«estar»* en *«Los alumnos están motivados»* forma un predicado:",
      options: ["Nominal", "Verbal", "Activo", "Transitivo"],
      correctAnswer: 0,
      explanation:
        "«Estar» es verbo copulativo; «motivados» es el atributo del sujeto. Predicado nominal.",
    },
    // 134
    {
      question:
        "¿Cuál es el **atributo** en: *«La nueva ley parece insuficiente para resolver el problema.»*?",
      options: [
        '"insuficiente para resolver el problema"',
        '"La nueva ley"',
        '"parece"',
        '"el problema"',
      ],
      correctAnswer: 0,
      explanation:
        "«insuficiente para resolver el problema» es el atributo del verbo copulativo «parece». El atributo incluye el adjetivo y su complemento.",
    },
    // 135
    {
      question:
        "¿Qué tipo de predicado tiene la oración: *«Los economistas predicen una recesión global.»*?",
      options: ["Verbal", "Nominal", "Copulativo", "Predicativo"],
      correctAnswer: 0,
      explanation:
        "«Predecir» es un verbo predicativo transitivo con complemento directo «una recesión global». Predicado verbal.",
    },
    // 136
    {
      question: "¿Cuál de los siguientes NO es un **verbo copulativo**?",
      options: ['"publicar"', '"ser"', '"estar"', '"parecer"'],
      correctAnswer: 0,
      explanation:
        "«Publicar» es un verbo predicativo transitivo. «Ser», «estar» y «parecer» son verbos copulativos prototípicos.",
    },
    // 137
    {
      question:
        "¿Qué tipo de predicado tiene la oración: *«La conferencia fue muy productiva.»*?",
      options: ["Nominal", "Verbal", "Activo", "Mixto"],
      correctAnswer: 0,
      explanation:
        "«Fue» es forma del verbo copulativo «ser». «muy productiva» es el atributo. Predicado nominal.",
    },
    // 138
    {
      question:
        "¿Cuál es el **atributo** en: *«Los métodos tradicionales de enseñanza son obsoletos.»*?",
      options: [
        '"obsoletos"',
        '"Los métodos tradicionales de enseñanza"',
        '"son"',
        '"de enseñanza"',
      ],
      correctAnswer: 0,
      explanation:
        "«obsoletos» es el adjetivo atributo predicado del sujeto a través del verbo copulativo «son».",
    },
    // 139
    {
      question:
        "¿Qué tipo de predicado tiene la oración: *«El descubrimiento de la vacuna salvó millones de vidas.»*?",
      options: ["Verbal", "Nominal", "Copulativo", "Pasivo"],
      correctAnswer: 0,
      explanation:
        "«Salvar» es un verbo predicativo transitivo. «millones de vidas» es el complemento directo. Predicado verbal.",
    },
    // 140
    {
      question:
        "¿Qué tipo de predicado tiene la oración: *«La democracia es el sistema político más extendido.»*?",
      options: ["Nominal", "Verbal", "Activo", "Compuesto"],
      correctAnswer: 0,
      explanation:
        "«Ser» es verbo copulativo; «el sistema político más extendido» es el atributo nominal. Predicado nominal.",
    },
    // 141
    {
      question:
        "¿Cuál de las siguientes oraciones tiene predicado nominal con el verbo *«quedar»*?",
      options: [
        "«La ciudad quedó destruida tras el sismo»",
        "«La ciudad quedó en el mapa»",
        "«El equipo quedó en segundo lugar»",
        "«El documento quedó en el cajón»",
      ],
      correctAnswer: 0,
      explanation:
        "«Quedar» forma predicado nominal cuando lo sigue un adjetivo o participio atributo. En «quedó destruida», «destruida» es el atributo. En las otras opciones, «quedar» es predicativo.",
    },
    // 142
    {
      question:
        "¿Qué tipo de predicado tiene la oración: *«Los datos obtenidos resultaron contradictorios.»*?",
      options: ["Nominal", "Verbal", "Activo", "Compuesto"],
      correctAnswer: 0,
      explanation:
        "«Resultar» + adjetivo funciona como verbo copulativo. «contradictorios» es el atributo del sujeto. Predicado nominal.",
    },
    // 143
    {
      question:
        "¿Cuál es el **atributo** en: *«Los argumentos del abogado fueron convincentes.»*?",
      options: [
        '"convincentes"',
        '"Los argumentos del abogado"',
        '"fueron"',
        '"del abogado"',
      ],
      correctAnswer: 0,
      explanation:
        "«convincentes» es el adjetivo atributo predicado del sujeto a través del verbo copulativo «fueron».",
    },
    // 144
    {
      question:
        "¿Qué tipo de predicado tiene la oración: *«El lingüista publicó tres artículos sobre fonología.»*?",
      options: ["Verbal", "Nominal", "Predicativo", "Copulativo"],
      correctAnswer: 0,
      explanation:
        "«Publicar» es un verbo predicativo transitivo. «tres artículos sobre fonología» es el complemento directo. Predicado verbal.",
    },
    // 145
    {
      question:
        "¿Cuál de las siguientes oraciones contiene un **predicado nominal**?",
      options: [
        "«El candidato pareció nervioso durante la entrevista»",
        "«El candidato llegó nervioso a la entrevista»",
        "«El candidato habló nerviosamente»",
        "«El candidato afrontó nervioso la entrevista»",
      ],
      correctAnswer: 0,
      explanation:
        "«Parecer» es verbo copulativo; «nervioso» es el atributo. En las demás oraciones, «nervioso» funciona como predicativo del sujeto con verbos no copulativos.",
    },
    // 146
    {
      question:
        "¿Qué tipo de predicado tiene la oración: *«Las células madre son el futuro de la medicina regenerativa.»*?",
      options: ["Nominal", "Verbal", "Transitivo", "Compuesto"],
      correctAnswer: 0,
      explanation:
        "«Ser» es verbo copulativo; «el futuro de la medicina regenerativa» es el atributo nominal. Predicado nominal.",
    },
    // 147
    {
      question:
        "¿Qué tipo de predicado tiene la oración: *«El congreso aprobó el presupuesto federal.»*?",
      options: ["Verbal", "Nominal", "Copulativo", "Pasivo"],
      correctAnswer: 0,
      explanation:
        "«Aprobar» es un verbo predicativo transitivo. «el presupuesto federal» es el complemento directo. Predicado verbal.",
    },
    // 148
    {
      question:
        "En la oración *«El nuevo rector es un reconocido investigador»*, el **atributo** es:",
      options: [
        '"un reconocido investigador"',
        '"El nuevo rector"',
        '"es"',
        '"reconocido"',
      ],
      correctAnswer: 0,
      explanation:
        "El atributo es el sintagma nominal «un reconocido investigador», predicado del sujeto a través del verbo copulativo «es».",
    },
    // 149
    {
      question: "¿Cuál de las siguientes oraciones tiene **predicado verbal**?",
      options: [
        "«La arqueóloga descubrió una tumba prehispánica»",
        "«El hallazgo fue sorprendente»",
        "«La teoría resulta insostenible»",
        "«El experimento pareció exitoso»",
      ],
      correctAnswer: 0,
      explanation:
        "«Descubrir» es un verbo predicativo transitivo con complemento directo. Las otras opciones usan verbos copulativos que forman predicados nominales.",
    },

    // ─── BLOQUE 6: COMPLEMENTO DIRECTO (Q150–Q179) ──────────────────────────

    // 150
    {
      question:
        "¿Cuál es el **complemento directo** en: *«El investigador publicó un artículo pionero.»*?",
      options: [
        '"un artículo pionero"',
        '"El investigador"',
        '"publicó"',
        '"pionero"',
      ],
      correctAnswer: 0,
      explanation:
        "El CD es «un artículo pionero»; puede sustituirse por «lo»: «El investigador lo publicó». El CD indica sobre qué recae directamente la acción del verbo transitivo.",
    },
    // 151
    {
      question:
        "¿Cuál es el **CD** en: *«La directora firmó el convenio de colaboración.»*?",
      options: [
        '"el convenio de colaboración"',
        '"La directora"',
        '"firmó"',
        '"de colaboración"',
      ],
      correctAnswer: 0,
      explanation:
        "«el convenio de colaboración» es el CD completo. Prueba pronominal: «La directora lo firmó». «de colaboración» es modificador del núcleo «convenio» dentro del CD.",
    },
    // 152
    {
      question:
        "¿Cuál de las siguientes oraciones tiene **complemento directo**?",
      options: [
        "«El rector inauguró el nuevo edificio»",
        "«La estudiante llegó tarde»",
        "«Los alumnos duermen mucho»",
        "«El conferenciante habla bien»",
      ],
      correctAnswer: 0,
      explanation:
        "«inaugurar» es un verbo transitivo con CD «el nuevo edificio». Los demás verbos son intransitivos en ese contexto y no admiten CD.",
    },
    // 153
    {
      question:
        "¿Cuál es el **CD** en: *«Los estudiantes de posgrado presentaron sus avances de investigación.»*?",
      options: [
        '"sus avances de investigación"',
        '"Los estudiantes de posgrado"',
        '"de investigación"',
        '"presentaron"',
      ],
      correctAnswer: 0,
      explanation:
        "«sus avances de investigación» es el CD; puede sustituirse por «los»: «Los estudiantes de posgrado los presentaron».",
    },
    // 154
    {
      question:
        "¿Cómo se puede verificar que un sintagma es **complemento directo**?",
      options: [
        "Sustituyéndolo por «lo», «la», «los» o «las»",
        "Sustituyéndolo por «le» o «les»",
        "Preguntando «¿a quién?» al verbo",
        "Anteponiendo la preposición «para»",
      ],
      correctAnswer: 0,
      explanation:
        "La prueba pronominal del CD es la sustitución por los pronombres átonos acusativos: lo, la, los, las. Si la sustitución resulta gramatical, el sintagma es CD.",
    },
    // 155
    {
      question:
        "¿Cuál es el **CD** en: *«El tribunal rechazó la apelación del acusado.»*?",
      options: [
        '"la apelación del acusado"',
        '"El tribunal"',
        '"del acusado"',
        '"rechazó"',
      ],
      correctAnswer: 0,
      explanation:
        "«la apelación del acusado» es el CD completo. Prueba: «El tribunal la rechazó». «del acusado» es modificador indirecto del núcleo «apelación».",
    },
    // 156
    {
      question:
        "¿Cuál de las siguientes oraciones **NO** tiene complemento directo?",
      options: [
        "«El catedrático llegó puntualmente al aula»",
        "«La investigadora describió el método»",
        "«El alumno leyó el artículo»",
        "«El doctor realizó el diagnóstico»",
      ],
      correctAnswer: 0,
      explanation:
        "«Llegar» es un verbo intransitivo; no puede tener CD. Las demás oraciones tienen verbos transitivos con sus respectivos CD.",
    },
    // 157
    {
      question:
        "En *«Los expertos analizaron los datos del experimento»*, el **CD** es:",
      options: [
        '"los datos del experimento"',
        '"Los expertos"',
        '"del experimento"',
        '"los datos"',
      ],
      correctAnswer: 0,
      explanation:
        "El CD completo es «los datos del experimento». Prueba: «Los expertos los analizaron». «del experimento» es modificador indirecto dentro del CD.",
    },
    // 158
    {
      question:
        "¿Cuál es el **CD** en: *«La asamblea aprobó las nuevas reformas constitucionales.»*?",
      options: [
        '"las nuevas reformas constitucionales"',
        '"La asamblea"',
        '"las reformas"',
        '"constitucionales"',
      ],
      correctAnswer: 0,
      explanation:
        "«las nuevas reformas constitucionales» es el CD completo. Prueba pronominal: «La asamblea las aprobó».",
    },
    // 159
    {
      question:
        "¿Cuál es el **CD** en: *«El gobierno implementó políticas de austeridad severas.»*?",
      options: [
        '"políticas de austeridad severas"',
        '"El gobierno"',
        '"de austeridad"',
        '"severas"',
      ],
      correctAnswer: 0,
      explanation:
        "El CD es «políticas de austeridad severas» con todos sus modificadores. Prueba: «El gobierno las implementó».",
    },
    // 160
    {
      question:
        "En *«La UNAM otorgó becas a estudiantes destacados»*, ¿cuál es el **complemento directo**?",
      options: [
        '"becas"',
        '"La UNAM"',
        '"a estudiantes destacados"',
        '"otorgó"',
      ],
      correctAnswer: 0,
      explanation:
        "«becas» es el CD (prueba: «La UNAM las otorgó»). «a estudiantes destacados» es el complemento indirecto (prueba: «La UNAM les otorgó becas»).",
    },
    // 161
    {
      question:
        "¿Cuál es el **CD** en: *«El poeta publicó su última antología poética.»*?",
      options: [
        '"su última antología poética"',
        '"El poeta"',
        '"última antología"',
        '"poética"',
      ],
      correctAnswer: 0,
      explanation:
        "«su última antología poética» es el CD completo, con todos sus modificadores. Prueba: «El poeta la publicó».",
    },
    // 162
    {
      question:
        "En *«Los investigadores elaboraron un protocolo detallado»*, el CD puede sustituirse por:",
      options: ['"lo"', '"le"', '"les"', '"la"'],
      correctAnswer: 0,
      explanation:
        "«un protocolo detallado» es el CD masculino singular; el pronombre acusativo correspondiente es «lo»: «Los investigadores lo elaboraron».",
    },
    // 163
    {
      question:
        "¿Cuál es el **CD** en: *«La comisión evaluó todos los proyectos presentados.»*?",
      options: [
        '"todos los proyectos presentados"',
        '"La comisión"',
        '"los proyectos"',
        '"presentados"',
      ],
      correctAnswer: 0,
      explanation:
        "El CD es «todos los proyectos presentados». Prueba: «La comisión los evaluó». «presentados» es participio que modifica al núcleo dentro del CD.",
    },
    // 164
    {
      question:
        "¿Cuál es el **CD** en: *«El filósofo cuestionó los fundamentos de la metafísica.»*?",
      options: [
        '"los fundamentos de la metafísica"',
        '"El filósofo"',
        '"de la metafísica"',
        '"los fundamentos"',
      ],
      correctAnswer: 0,
      explanation:
        "«los fundamentos de la metafísica» es el CD completo. «de la metafísica» es modificador indirecto del núcleo «fundamentos» dentro del CD.",
    },
    // 165
    {
      question:
        "¿Cuál de las siguientes oraciones tiene un **CD con preposición «a»**?",
      options: [
        "«El médico atendió a la paciente grave»",
        "«El médico llegó al hospital»",
        "«El médico trabajó para el hospital»",
        "«El médico habló de la paciente»",
      ],
      correctAnswer: 0,
      explanation:
        "Cuando el CD es una persona determinada, suele ir precedido de la preposición «a» (CD de persona): «a la paciente grave». «al hospital» en la segunda oración es CC de lugar.",
    },
    // 166
    {
      question:
        "¿Cuál es el **CD** en: *«La arqueóloga encontró vasijas prehispánicas en Teotihuacán.»*?",
      options: [
        '"vasijas prehispánicas"',
        '"La arqueóloga"',
        '"en Teotihuacán"',
        '"prehispánicas"',
      ],
      correctAnswer: 0,
      explanation:
        "«vasijas prehispánicas» es el CD. Prueba: «La arqueóloga las encontró». «en Teotihuacán» es un CC de lugar.",
    },
    // 167
    {
      question:
        "En *«La universidad reconoció el mérito académico de los graduados»*, el **CD** es:",
      options: [
        '"el mérito académico de los graduados"',
        '"La universidad"',
        '"de los graduados"',
        '"académico"',
      ],
      correctAnswer: 0,
      explanation:
        "El CD completo es «el mérito académico de los graduados». Prueba: «La universidad lo reconoció».",
    },
    // 168
    {
      question:
        "¿Cuál es el **CD** en: *«Los parlamentarios debatieron la reforma energética durante horas.»*?",
      options: [
        '"la reforma energética"',
        '"Los parlamentarios"',
        '"durante horas"',
        '"energética"',
      ],
      correctAnswer: 0,
      explanation:
        "«la reforma energética» es el CD. Prueba: «Los parlamentarios la debatieron». «durante horas» es un CC de tiempo.",
    },
    // 169
    {
      question:
        "¿Cuál es el **CD** en: *«El autor dedicó su obra a las víctimas del conflicto.»*?",
      options: [
        '"su obra"',
        '"El autor"',
        '"a las víctimas del conflicto"',
        '"del conflicto"',
      ],
      correctAnswer: 0,
      explanation:
        "«su obra» es el CD (prueba: «El autor la dedicó»). «a las víctimas del conflicto» es el complemento indirecto.",
    },
    // 170
    {
      question:
        "En *«Los científicos descubrieron una nueva especie marina en aguas profundas»*, el **CD** es:",
      options: [
        '"una nueva especie marina"',
        '"Los científicos"',
        '"en aguas profundas"',
        '"marina"',
      ],
      correctAnswer: 0,
      explanation:
        "«una nueva especie marina» es el CD. Prueba: «Los científicos la descubrieron». «en aguas profundas» es un CC de lugar.",
    },
    // 171
    {
      question:
        "¿Cuál es el **CD** en: *«La editorial rechazó el manuscrito del escritor novel.»*?",
      options: [
        '"el manuscrito del escritor novel"',
        '"La editorial"',
        '"del escritor novel"',
        '"novel"',
      ],
      correctAnswer: 0,
      explanation:
        "«el manuscrito del escritor novel» es el CD. Prueba: «La editorial lo rechazó». «del escritor novel» es modificador indirecto del núcleo «manuscrito».",
    },
    // 172
    {
      question:
        "¿Cuál de las siguientes NO es una forma de identificar el **complemento directo**?",
      options: [
        "Preguntar «¿de qué?» al verbo",
        "Sustituir por «lo/la/los/las»",
        "Preguntar «¿qué?» al verbo",
        "Convertir la oración a voz pasiva",
      ],
      correctAnswer: 0,
      explanation:
        "«¿de qué?» es la pregunta para identificar el complemento de régimen. Las otras tres son pruebas válidas del CD: sustitución acusativa, pregunta «¿qué?» y pasivización.",
    },
    // 173
    {
      question:
        "¿Cuál es el **CD** en: *«El congreso ratificó el tratado bilateral.»*?",
      options: [
        '"el tratado bilateral"',
        '"El congreso"',
        '"bilateral"',
        '"ratificó"',
      ],
      correctAnswer: 0,
      explanation:
        "«el tratado bilateral» es el CD. Prueba: «El congreso lo ratificó».",
    },
    // 174
    {
      question:
        "En *«Los alumnos leyeron tres novelas durante el semestre»*, el **CD** es:",
      options: [
        '"tres novelas"',
        '"Los alumnos"',
        '"durante el semestre"',
        '"tres"',
      ],
      correctAnswer: 0,
      explanation:
        "«tres novelas» es el CD. Prueba: «Los alumnos las leyeron». «durante el semestre» es un CC de tiempo.",
    },
    // 175
    {
      question:
        "¿Cuál es el **CD** en: *«La investigadora redactó un informe exhaustivo sobre los resultados.»*?",
      options: [
        '"un informe exhaustivo sobre los resultados"',
        '"La investigadora"',
        '"sobre los resultados"',
        '"exhaustivo"',
      ],
      correctAnswer: 0,
      explanation:
        "El CD completo es «un informe exhaustivo sobre los resultados». «sobre los resultados» es modificador indirecto del núcleo «informe» dentro del CD.",
    },
    // 176
    {
      question:
        "En *«El gobierno publicó las estadísticas oficiales del año»*, el **CD** es:",
      options: [
        '"las estadísticas oficiales del año"',
        '"El gobierno"',
        '"del año"',
        '"oficiales"',
      ],
      correctAnswer: 0,
      explanation:
        "El CD es «las estadísticas oficiales del año». Prueba: «El gobierno las publicó».",
    },
    // 177
    {
      question:
        "¿Cuál es el **CD** en: *«La orquesta interpretó las sinfonías de Beethoven.»*?",
      options: [
        '"las sinfonías de Beethoven"',
        '"La orquesta"',
        '"de Beethoven"',
        '"interpretó"',
      ],
      correctAnswer: 0,
      explanation:
        "«las sinfonías de Beethoven» es el CD completo. Prueba: «La orquesta las interpretó».",
    },
    // 178
    {
      question:
        "En *«Los estudiantes deben entregar sus trabajos antes del viernes»*, el **CD** es:",
      options: [
        '"sus trabajos"',
        '"Los estudiantes"',
        '"antes del viernes"',
        '"sus"',
      ],
      correctAnswer: 0,
      explanation:
        "«sus trabajos» es el CD. Prueba: «Los estudiantes deben entregarlos». «antes del viernes» es un CC de tiempo.",
    },
    // 179
    {
      question:
        "¿Cuál es el **CD** en: *«El jurado otorgó el primer lugar al proyecto de energías renovables.»*?",
      options: [
        '"el primer lugar"',
        '"El jurado"',
        '"al proyecto de energías renovables"',
        '"de energías renovables"',
      ],
      correctAnswer: 0,
      explanation:
        "«el primer lugar» es el CD (prueba: «El jurado lo otorgó»). «al proyecto de energías renovables» es el complemento indirecto (prueba: «El jurado le otorgó el primer lugar»).",
    },

    // ─── BLOQUE 7: COMPLEMENTO INDIRECTO (Q180–Q209) ────────────────────────

    // 180
    {
      question:
        "¿Cuál es el **complemento indirecto** en: *«El profesor entregó los exámenes a los estudiantes.»*?",
      options: [
        '"a los estudiantes"',
        '"El profesor"',
        '"los exámenes"',
        '"entregó"',
      ],
      correctAnswer: 0,
      explanation:
        "El CI indica a quién se realiza la acción. «a los estudiantes» es el CI: se sustituye por «les»: «El profesor les entregó los exámenes».",
    },
    // 181
    {
      question:
        "¿Cuál es el **CI** en: *«La editorial envió el contrato al autor.»*?",
      options: ['"al autor"', '"La editorial"', '"el contrato"', '"envió"'],
      correctAnswer: 0,
      explanation:
        "«al autor» es el CI. Prueba pronominal: «La editorial le envió el contrato».",
    },
    // 182
    {
      question: "¿Cómo se identifica el **complemento indirecto**?",
      options: [
        "Sustituyéndolo por «le» o «les»",
        "Sustituyéndolo por «lo» o «la»",
        "Preguntando «¿qué?» al verbo",
        "Sustituyéndolo por «se»",
      ],
      correctAnswer: 0,
      explanation:
        "El CI se identifica por la sustitución por los pronombres átonos dativos: «le» (singular) o «les» (plural). Si la oración resulta gramatical, el sintagma es CI.",
    },
    // 183
    {
      question:
        "¿Cuál es el **CI** en: *«El gobierno asignó recursos económicos a las universidades públicas.»*?",
      options: [
        '"a las universidades públicas"',
        '"El gobierno"',
        '"recursos económicos"',
        '"económicos"',
      ],
      correctAnswer: 0,
      explanation:
        "«a las universidades públicas» es el CI. Prueba: «El gobierno les asignó recursos económicos».",
    },
    // 184
    {
      question:
        "¿Cuál es el **CI** en: *«La directora comunicó la decisión a todo el personal.»*?",
      options: [
        '"a todo el personal"',
        '"La directora"',
        '"la decisión"',
        '"comunicó"',
      ],
      correctAnswer: 0,
      explanation:
        "«a todo el personal» es el CI. Prueba: «La directora les comunicó la decisión».",
    },
    // 185
    {
      question:
        "¿Cuál de las siguientes oraciones tiene **complemento indirecto**?",
      options: [
        "«El rector otorgó una beca a la investigadora»",
        "«La estudiante aprobó el examen»",
        "«Los alumnos leyeron el artículo»",
        "«El catedrático llegó tarde»",
      ],
      correctAnswer: 0,
      explanation:
        "Solo la primera tiene CI: «a la investigadora» (prueba: «El rector le otorgó una beca»). Las demás no tienen CI.",
    },
    // 186
    {
      question:
        "¿Cuál es el **CI** en: *«Los organizadores reservaron los mejores lugares para los ponentes.»*?",
      options: [
        '"para los ponentes"',
        '"Los organizadores"',
        '"los mejores lugares"',
        '"mejores"',
      ],
      correctAnswer: 0,
      explanation:
        "«para los ponentes» es el CI introducido por «para». La preposición «para» puede introducir CI cuando indica el destinatario o beneficiario: «Los organizadores les reservaron los mejores lugares».",
    },
    // 187
    {
      question:
        "En *«Le enviaron la convocatoria al candidato»*, ¿cuál es el **CI**?",
      options: ['"al candidato"', '"la convocatoria"', '"Le"', '"enviaron"'],
      correctAnswer: 0,
      explanation:
        "El CI es «al candidato». «Le» es el pronombre clítico que lo anticipa (duplicación del CI). El CI propiamente dicho es el sintagma nominal, no el pronombre.",
    },
    // 188
    {
      question:
        "¿Cuál es el **CI** en: *«La sociedad exige transparencia a sus gobernantes.»*?",
      options: [
        '"a sus gobernantes"',
        '"La sociedad"',
        '"transparencia"',
        '"exige"',
      ],
      correctAnswer: 0,
      explanation:
        "«a sus gobernantes» es el CI. Prueba: «La sociedad les exige transparencia».",
    },
    // 189
    {
      question:
        "¿Cuál es el **CI** en: *«El comité otorgó el reconocimiento al equipo de investigación.»*?",
      options: [
        '"al equipo de investigación"',
        '"El comité"',
        '"el reconocimiento"',
        '"de investigación"',
      ],
      correctAnswer: 0,
      explanation:
        "«al equipo de investigación» es el CI. Prueba: «El comité le otorgó el reconocimiento».",
    },
    // 190
    {
      question:
        "En *«Les explicaron los resultados a los pacientes»*, el **CI** es:",
      options: [
        '"a los pacientes"',
        '"los resultados"',
        '"Les"',
        '"explicaron"',
      ],
      correctAnswer: 0,
      explanation:
        "El CI es «a los pacientes». «Les» es el pronombre clítico que lo duplica. El CI propiamente dicho es el sintagma «a los pacientes».",
    },
    // 191
    {
      question:
        "¿Cuál es el **CI** en: *«La fundación donó equipos de cómputo a las escuelas rurales.»*?",
      options: [
        '"a las escuelas rurales"',
        '"La fundación"',
        '"equipos de cómputo"',
        '"rurales"',
      ],
      correctAnswer: 0,
      explanation:
        "«a las escuelas rurales» es el CI. Prueba: «La fundación les donó equipos de cómputo».",
    },
    // 192
    {
      question:
        "¿Cuál es el **CI** en: *«El abogado presentó nuevas pruebas al juez.»*?",
      options: ['"al juez"', '"El abogado"', '"nuevas pruebas"', '"presentó"'],
      correctAnswer: 0,
      explanation:
        "«al juez» es el CI. Prueba: «El abogado le presentó nuevas pruebas».",
    },
    // 193
    {
      question:
        "En *«Los medios de comunicación informaron a la ciudadanía sobre el desastre»*, el **CI** es:",
      options: [
        '"a la ciudadanía"',
        '"Los medios de comunicación"',
        '"sobre el desastre"',
        '"el desastre"',
      ],
      correctAnswer: 0,
      explanation:
        "«a la ciudadanía» es el CI. Prueba: «Los medios le informaron sobre el desastre». «sobre el desastre» es complemento de régimen del verbo «informar».",
    },
    // 194
    {
      question:
        "¿Cuál es el **CI** en: *«El congreso negó el aumento salarial a los trabajadores del Estado.»*?",
      options: [
        '"a los trabajadores del Estado"',
        '"El congreso"',
        '"el aumento salarial"',
        '"del Estado"',
      ],
      correctAnswer: 0,
      explanation:
        "«a los trabajadores del Estado» es el CI. Prueba: «El congreso les negó el aumento salarial».",
    },
    // 195
    {
      question:
        "¿Cuál de las siguientes oraciones **NO** tiene complemento indirecto?",
      options: [
        "«La estudiante entregó su tesis el viernes»",
        "«La estudiante entregó su tesis a su tutor»",
        "«Le entregó el informe al director»",
        "«Les comunicaron la noticia a los afectados»",
      ],
      correctAnswer: 0,
      explanation:
        "En «La estudiante entregó su tesis el viernes» no hay CI; solo CD («su tesis») y CC de tiempo («el viernes»). Las otras tres sí tienen CI.",
    },
    // 196
    {
      question:
        "¿Cuál es el **CI** en: *«El banco prestó capital a las pequeñas empresas afectadas.»*?",
      options: [
        '"a las pequeñas empresas afectadas"',
        '"El banco"',
        '"capital"',
        '"afectadas"',
      ],
      correctAnswer: 0,
      explanation:
        "«a las pequeñas empresas afectadas» es el CI. Prueba: «El banco les prestó capital».",
    },
    // 197
    {
      question:
        "¿Cuál es el **CI** en: *«La universidad proporcionó alojamiento a los investigadores visitantes.»*?",
      options: [
        '"a los investigadores visitantes"',
        '"La universidad"',
        '"alojamiento"',
        '"visitantes"',
      ],
      correctAnswer: 0,
      explanation:
        "«a los investigadores visitantes» es el CI. Prueba: «La universidad les proporcionó alojamiento».",
    },
    // 198
    {
      question:
        "En *«Le recomendaron al estudiante buscar asesoría»*, el **CI** es:",
      options: [
        '"al estudiante"',
        '"buscar asesoría"',
        '"Le"',
        '"recomendaron"',
      ],
      correctAnswer: 0,
      explanation:
        "El CI es «al estudiante». «Le» es el pronombre duplicador. «buscar asesoría» funciona como CD de infinitivo.",
    },
    // 199
    {
      question:
        "¿Cuál es el **CI** en: *«Los ciudadanos exigen a sus representantes mayor transparencia.»*?",
      options: [
        '"a sus representantes"',
        '"Los ciudadanos"',
        '"mayor transparencia"',
        '"exigen"',
      ],
      correctAnswer: 0,
      explanation:
        "«a sus representantes» es el CI. Prueba: «Los ciudadanos les exigen mayor transparencia».",
    },
    // 200
    {
      question:
        "¿Cuál es el **CI** en: *«El decano envió una circular a todos los departamentos.»*?",
      options: [
        '"a todos los departamentos"',
        '"El decano"',
        '"una circular"',
        '"envió"',
      ],
      correctAnswer: 0,
      explanation:
        "«a todos los departamentos» es el CI. Prueba: «El decano les envió una circular».",
    },
    // 201
    {
      question:
        "En *«Les concedieron a los finalistas tres días para presentar su propuesta»*, el **CI** es:",
      options: ['"a los finalistas"', '"tres días"', '"su propuesta"', '"Les"'],
      correctAnswer: 0,
      explanation:
        "El CI es «a los finalistas». «Les» es el pronombre clítico duplicador. «tres días» es el CD.",
    },
    // 202
    {
      question:
        "¿Cuál es el **CI** en: *«El asesor sugirió al alumno revisar la metodología.»*?",
      options: [
        '"al alumno"',
        '"El asesor"',
        '"revisar la metodología"',
        '"la metodología"',
      ],
      correctAnswer: 0,
      explanation:
        "«al alumno» es el CI. Prueba: «El asesor le sugirió revisar la metodología». «revisar la metodología» funciona como CD de infinitivo.",
    },
    // 203
    {
      question:
        "¿Cuál es el **CI** en: *«La institución ofreció becas de movilidad a los estudiantes destacados.»*?",
      options: [
        '"a los estudiantes destacados"',
        '"La institución"',
        '"becas de movilidad"',
        '"destacados"',
      ],
      correctAnswer: 0,
      explanation:
        "«a los estudiantes destacados» es el CI. Prueba: «La institución les ofreció becas de movilidad».",
    },
    // 204
    {
      question:
        "En *«Le comunicaron al rector los resultados de la auditoría»*, el **CI** es:",
      options: [
        '"al rector"',
        '"los resultados de la auditoría"',
        '"Le"',
        '"comunicaron"',
      ],
      correctAnswer: 0,
      explanation:
        "El CI es «al rector». «Le» es el clítico que lo anticipa. «los resultados de la auditoría» es el CD.",
    },
    // 205
    {
      question:
        "¿Cuál es el **CI** en: *«Los investigadores presentaron sus hallazgos a la comunidad científica.»*?",
      options: [
        '"a la comunidad científica"',
        '"Los investigadores"',
        '"sus hallazgos"',
        '"científica"',
      ],
      correctAnswer: 0,
      explanation:
        "«a la comunidad científica» es el CI. Prueba: «Los investigadores les presentaron sus hallazgos».",
    },
    // 206
    {
      question:
        "¿Cuál de las siguientes oraciones tiene **CI con la preposición «para»**?",
      options: [
        "«Prepararon un informe especial para el comité evaluador»",
        "«El comité evaluó el informe especial»",
        "«El informe fue preparado por el comité»",
        "«El comité rechazó el informe especial»",
      ],
      correctAnswer: 0,
      explanation:
        "«para el comité evaluador» es un CI introducido por «para», que señala al destinatario. La preposición «para» puede introducir CI cuando indica beneficiario.",
    },
    // 207
    {
      question:
        "¿Cuál es el **CI** en: *«El director comunicó las nuevas políticas a los coordinadores de área.»*?",
      options: [
        '"a los coordinadores de área"',
        '"El director"',
        '"las nuevas políticas"',
        '"de área"',
      ],
      correctAnswer: 0,
      explanation:
        "«a los coordinadores de área» es el CI. Prueba: «El director les comunicó las nuevas políticas».",
    },
    // 208
    {
      question:
        "¿Cuál es el **CI** en: *«La ONU envió ayuda humanitaria a las poblaciones afectadas.»*?",
      options: [
        '"a las poblaciones afectadas"',
        '"La ONU"',
        '"ayuda humanitaria"',
        '"afectadas"',
      ],
      correctAnswer: 0,
      explanation:
        "«a las poblaciones afectadas» es el CI. Prueba: «La ONU les envió ayuda humanitaria».",
    },
    // 209
    {
      question:
        "En *«Les informaron a los alumnos de primer ingreso los requisitos de inscripción»*, el **CI** es:",
      options: [
        '"a los alumnos de primer ingreso"',
        '"los requisitos de inscripción"',
        '"Les"',
        '"de primer ingreso"',
      ],
      correctAnswer: 0,
      explanation:
        "El CI es «a los alumnos de primer ingreso». «Les» es el pronombre clítico duplicador. «los requisitos de inscripción» es el CD.",
    },

    // ─── BLOQUE 8: COMPLEMENTO CIRCUNSTANCIAL (Q210–Q239) ───────────────────

    // 210
    {
      question:
        "¿Cuál es el **complemento circunstancial de lugar** en: *«Los estudiantes se reunieron en el auditorio principal.»*?",
      options: [
        '"en el auditorio principal"',
        '"Los estudiantes"',
        '"se reunieron"',
        '"principal"',
      ],
      correctAnswer: 0,
      explanation:
        "«en el auditorio principal» es un CC de lugar; responde a la pregunta «¿dónde?». Los CC de lugar suelen introducirse con preposiciones como «en», «a», «hacia», «desde».",
    },
    // 211
    {
      question:
        "¿Cuál es el **complemento circunstancial de tiempo** en: *«El informe fue publicado la semana pasada.»*?",
      options: [
        '"la semana pasada"',
        '"El informe"',
        '"fue publicado"',
        '"pasada"',
      ],
      correctAnswer: 0,
      explanation:
        "«la semana pasada» es un CC de tiempo; responde a «¿cuándo?». Puede expresarse mediante sintagma nominal o adverbial.",
    },
    // 212
    {
      question:
        "¿Cuál es el **complemento circunstancial de modo** en: *«La investigadora analizó los datos meticulosamente.»*?",
      options: [
        '"meticulosamente"',
        '"La investigadora"',
        '"los datos"',
        '"analizó"',
      ],
      correctAnswer: 0,
      explanation:
        "«meticulosamente» es un CC de modo; responde a «¿cómo?». Es un adverbio de modo.",
    },
    // 213
    {
      question:
        "¿Qué tipo de CC es *«por falta de recursos»* en *«El proyecto se canceló por falta de recursos»*?",
      options: ["CC de causa", "CC de finalidad", "CC de modo", "CC de lugar"],
      correctAnswer: 0,
      explanation:
        "«por falta de recursos» responde a «¿por qué?» y expresa la causa de la cancelación. Los CC de causa suelen introducirse con «por», «debido a», «a causa de».",
    },
    // 214
    {
      question:
        "¿Cuál es el **CC de finalidad** en: *«Los estudiantes se prepararon durante meses para el examen de admisión.»*?",
      options: [
        '"para el examen de admisión"',
        '"durante meses"',
        '"Los estudiantes"',
        '"se prepararon"',
      ],
      correctAnswer: 0,
      explanation:
        "«para el examen de admisión» responde a «¿para qué?» y expresa la finalidad. «durante meses» es un CC de tiempo.",
    },
    // 215
    {
      question:
        "¿Cuál es el **CC de lugar** en: *«La conferencia se llevará a cabo en el Palacio de Bellas Artes.»*?",
      options: [
        '"en el Palacio de Bellas Artes"',
        '"La conferencia"',
        '"se llevará a cabo"',
        '"Bellas Artes"',
      ],
      correctAnswer: 0,
      explanation:
        "«en el Palacio de Bellas Artes» es el CC de lugar. Responde a «¿dónde?».",
    },
    // 216
    {
      question:
        "¿Qué tipo de CC es *«con gran esfuerzo»* en: *«Los alumnos superaron el obstáculo con gran esfuerzo»*?",
      options: [
        "CC de modo",
        "CC de causa",
        "CC de finalidad",
        "CC de compañía",
      ],
      correctAnswer: 0,
      explanation:
        "«con gran esfuerzo» describe cómo se superó el obstáculo; responde a «¿cómo?». Es un CC de modo.",
    },
    // 217
    {
      question:
        "¿Cuál es el **CC de tiempo** en: *«Durante el siglo XVIII, la Ilustración transformó el pensamiento europeo.»*?",
      options: [
        '"Durante el siglo XVIII"',
        '"la Ilustración"',
        '"el pensamiento europeo"',
        '"europeo"',
      ],
      correctAnswer: 0,
      explanation:
        "«Durante el siglo XVIII» responde a «¿cuándo?» y ubica temporalmente la acción. Es un CC de tiempo en posición inicial.",
    },
    // 218
    {
      question:
        "¿Cuál es el **CC** en: *«El congreso sesionó durante toda la noche.»*?",
      options: [
        '"durante toda la noche" (CC de tiempo)',
        '"El congreso"',
        '"sesionó"',
        '"toda la noche"',
      ],
      correctAnswer: 0,
      explanation:
        "«durante toda la noche» es un CC de tiempo que expresa la duración de la acción. Responde a «¿cuánto tiempo?».",
    },
    // 219
    {
      question:
        "¿Qué tipo de CC es *«con sus colegas»* en: *«La doctora viajó a París con sus colegas.»*?",
      options: [
        "CC de compañía",
        "CC de modo",
        "CC de instrumento",
        "CC de causa",
      ],
      correctAnswer: 0,
      explanation:
        "«con sus colegas» expresa con quién se realizó la acción; es un CC de compañía. «a París» es el CC de lugar.",
    },
    // 220
    {
      question:
        "¿Cuál es el **CC de instrumento** en: *«El artista grabó las imágenes con una cámara de alta resolución.»*?",
      options: [
        '"con una cámara de alta resolución"',
        '"El artista"',
        '"las imágenes"',
        '"de alta resolución"',
      ],
      correctAnswer: 0,
      explanation:
        "«con una cámara de alta resolución» expresa el instrumento empleado para la acción. Los CC de instrumento suelen introducirse con «con».",
    },
    // 221
    {
      question:
        "¿Qué tipo de CC es *«ayer»* en: *«Ayer se publicaron los resultados del concurso.»*?",
      options: ["CC de tiempo", "CC de lugar", "CC de modo", "CC de causa"],
      correctAnswer: 0,
      explanation:
        "«ayer» es un adverbio de tiempo que responde a «¿cuándo?». Es un CC de tiempo.",
    },
    // 222
    {
      question:
        "¿Cuál es el **CC de modo** en: *«El orador expuso sus ideas con claridad y precisión.»*?",
      options: [
        '"con claridad y precisión"',
        '"El orador"',
        '"sus ideas"',
        '"precisión"',
      ],
      correctAnswer: 0,
      explanation:
        "«con claridad y precisión» describe cómo expuso sus ideas; responde a «¿cómo?». Es un CC de modo.",
    },
    // 223
    {
      question:
        "¿Qué tipo de CC es *«por el calor extremo»* en: *«Varios trabajadores se desmayaron por el calor extremo.»*?",
      options: ["CC de causa", "CC de modo", "CC de finalidad", "CC de lugar"],
      correctAnswer: 0,
      explanation:
        "«por el calor extremo» expresa la razón del desmayo. Es un CC de causa introducido por «por».",
    },
    // 224
    {
      question:
        "¿Cuál es el **CC de lugar** en: *«Los restos fósiles fueron encontrados en una cueva del sur de Francia.»*?",
      options: [
        '"en una cueva del sur de Francia"',
        '"Los restos fósiles"',
        '"fueron encontrados"',
        '"del sur de Francia"',
      ],
      correctAnswer: 0,
      explanation:
        "«en una cueva del sur de Francia» responde a «¿dónde?». Es el CC de lugar completo; «del sur de Francia» es un modificador que especifica la cueva.",
    },
    // 225
    {
      question:
        "¿Cuál es el **CC de finalidad** en: *«El científico trabajó incansablemente para obtener la vacuna.»*?",
      options: [
        '"para obtener la vacuna"',
        '"incansablemente"',
        '"El científico"',
        '"trabajó"',
      ],
      correctAnswer: 0,
      explanation:
        "«para obtener la vacuna» responde a «¿para qué?» y expresa la finalidad. «incansablemente» es un CC de modo.",
    },
    // 226
    {
      question:
        "¿Qué tipo de CC es *«tres veces»* en: *«El rector mencionó el problema tres veces durante la sesión.»*?",
      options: [
        "CC de cantidad / frecuencia",
        "CC de tiempo",
        "CC de modo",
        "CC de lugar",
      ],
      correctAnswer: 0,
      explanation:
        "«tres veces» expresa la frecuencia con que se realizó la acción. Es un CC de cantidad o frecuencia.",
    },
    // 227
    {
      question:
        "En *«Los delegados firmaron el acuerdo en Ginebra el pasado martes»*, los CC son:",
      options: [
        "CC de lugar («en Ginebra») y CC de tiempo («el pasado martes»)",
        "Solo CC de lugar",
        "Solo CC de tiempo",
        "Ningún CC",
      ],
      correctAnswer: 0,
      explanation:
        "Hay dos CC: «en Ginebra» responde a «¿dónde?» (lugar) y «el pasado martes» responde a «¿cuándo?» (tiempo). «el acuerdo» es el CD.",
    },
    // 228
    {
      question:
        "¿Qué tipo de CC es *«a pesar de las críticas»* en: *«El proyecto avanzó a pesar de las críticas»*?",
      options: [
        "CC de concesión",
        "CC de causa",
        "CC de modo",
        "CC de finalidad",
      ],
      correctAnswer: 0,
      explanation:
        "«a pesar de las críticas» expresa un obstáculo que no impidió el avance del proyecto. Es un CC de concesión, introducido con «a pesar de», «pese a», «aunque».",
    },
    // 229
    {
      question:
        "¿Cuál es el **CC** en: *«El experimento fracasó por un error en el procedimiento.»*?",
      options: [
        '"por un error en el procedimiento" (CC de causa)',
        '"El experimento"',
        '"en el procedimiento"',
        '"fracasó"',
      ],
      correctAnswer: 0,
      explanation:
        "«por un error en el procedimiento» expresa la causa del fracaso. Es un CC de causa. «en el procedimiento» es modificador del CC, no un CC independiente.",
    },
    // 230
    {
      question:
        "¿Qué tipo de CC es *«a gran velocidad»* en: *«El virus se propagó a gran velocidad»*?",
      options: ["CC de modo", "CC de cantidad", "CC de tiempo", "CC de lugar"],
      correctAnswer: 0,
      explanation:
        "«a gran velocidad» describe cómo se propagó el virus; responde a «¿cómo?». Es un CC de modo.",
    },
    // 231
    {
      question:
        "¿Cuál es el **CC de tiempo** en: *«Antes de la Revolución Industrial, la mayoría de la población era agraria.»*?",
      options: [
        '"Antes de la Revolución Industrial"',
        '"la mayoría de la población"',
        '"era agraria"',
        '"Industrial"',
      ],
      correctAnswer: 0,
      explanation:
        "«Antes de la Revolución Industrial» ubica temporalmente el estado descrito; responde a «¿cuándo?». CC de tiempo en posición inicial.",
    },
    // 232
    {
      question:
        "¿Qué tipo de CC es *«sin ningún apoyo institucional»* en: *«Logró su doctorado sin ningún apoyo institucional.»*?",
      options: [
        "CC de modo",
        "CC de causa",
        "CC de instrumento",
        "CC de concesión",
      ],
      correctAnswer: 0,
      explanation:
        "«sin ningún apoyo institucional» describe las condiciones en que se logró el doctorado; responde a «¿cómo?» / «¿en qué condiciones?». Es un CC de modo.",
    },
    // 233
    {
      question:
        "En *«Los alumnos trabajan en equipo para resolver problemas complejos»*, el **CC de finalidad** es:",
      options: [
        '"para resolver problemas complejos"',
        '"en equipo"',
        '"Los alumnos"',
        '"complejos"',
      ],
      correctAnswer: 0,
      explanation:
        "«para resolver problemas complejos» responde a «¿para qué?». «en equipo» es un CC de modo.",
    },
    // 234
    {
      question:
        "¿Qué tipo de CC es *«mediante el uso de estadísticas»* en: *«Probaron la hipótesis mediante el uso de estadísticas.»*?",
      options: [
        "CC de instrumento / medio",
        "CC de modo",
        "CC de causa",
        "CC de finalidad",
      ],
      correctAnswer: 0,
      explanation:
        "«mediante el uso de estadísticas» indica el medio empleado para probar la hipótesis. Es un CC de instrumento o medio, introducido por «mediante».",
    },
    // 235
    {
      question:
        "En *«Los migrantes cruzaron la frontera durante la madrugada»*, ¿cuál es el **CC**?",
      options: [
        '"durante la madrugada" (CC de tiempo)',
        '"Los migrantes"',
        '"la frontera"',
        '"cruzaron"',
      ],
      correctAnswer: 0,
      explanation:
        "«durante la madrugada» responde a «¿cuándo?» y es el CC de tiempo. «la frontera» es el CD del verbo «cruzar».",
    },
    // 236
    {
      question:
        "¿Cuál es el **CC de compañía** en: *«La decana viajó a España con un grupo de investigadores.»*?",
      options: [
        '"con un grupo de investigadores"',
        '"a España"',
        '"La decana"',
        '"un grupo"',
      ],
      correctAnswer: 0,
      explanation:
        "«con un grupo de investigadores» expresa con quién se realizó el viaje. Es un CC de compañía. «a España» es un CC de lugar.",
    },
    // 237
    {
      question:
        "¿Qué tipo de CC es *«en condiciones adversas»* en: *«Los alpinistas escalaron la montaña en condiciones adversas.»*?",
      options: ["CC de modo", "CC de lugar", "CC de causa", "CC de tiempo"],
      correctAnswer: 0,
      explanation:
        "«en condiciones adversas» describe las circunstancias en que se realizó la acción; responde a «¿cómo?» / «¿en qué condiciones?». Es un CC de modo.",
    },
    // 238
    {
      question:
        "En *«Los estudiantes resolvieron el ejercicio en pocos minutos»*, el **CC** es:",
      options: [
        '"en pocos minutos" (CC de tiempo)',
        '"Los estudiantes"',
        '"el ejercicio"',
        '"pocos"',
      ],
      correctAnswer: 0,
      explanation:
        "«en pocos minutos» expresa la duración de la acción; responde a «¿en cuánto tiempo?». Es un CC de tiempo. «el ejercicio» es el CD.",
    },
    // 239
    {
      question:
        "¿Cuál es el **CC de causa** en: *«Debido a la pandemia, las clases se impartieron en línea.»*?",
      options: [
        '"Debido a la pandemia"',
        '"las clases"',
        '"en línea"',
        '"se impartieron"',
      ],
      correctAnswer: 0,
      explanation:
        "«Debido a la pandemia» responde a «¿por qué?» y expresa la causa. «en línea» es un CC de modo.",
    },

    // ─── BLOQUE 9: COMPLEMENTO DE RÉGIMEN (Q240–Q269) ───────────────────────

    // 240
    {
      question:
        "¿Cuál es el **complemento de régimen** en: *«El filósofo reflexionó sobre los límites del conocimiento.»*?",
      options: [
        '"sobre los límites del conocimiento"',
        '"El filósofo"',
        '"reflexionó"',
        '"del conocimiento"',
      ],
      correctAnswer: 0,
      explanation:
        "El complemento de régimen (CR) es un sintagma preposicional cuya preposición está exigida por el verbo. «Reflexionar» rige «sobre»: no puede omitirse ni cambiarse por otra preposición.",
    },
    // 241
    {
      question:
        "¿Cuál es el **CR** en: *«La directora insistió en revisar todos los expedientes.»*?",
      options: [
        '"en revisar todos los expedientes"',
        '"La directora"',
        '"insistió"',
        '"todos los expedientes"',
      ],
      correctAnswer: 0,
      explanation:
        "«Insistir» rige la preposición «en». «en revisar todos los expedientes» es el CR; no puede omitirse sin cambiar el significado del verbo.",
    },
    // 242
    {
      question:
        "¿Cuál es el **CR** en: *«Los ciudadanos confían en las instituciones democráticas.»*?",
      options: [
        '"en las instituciones democráticas"',
        '"Los ciudadanos"',
        '"confían"',
        '"democráticas"',
      ],
      correctAnswer: 0,
      explanation:
        "«Confiar» rige «en». «en las instituciones democráticas» es el CR; la preposición «en» es obligatoria para este verbo.",
    },
    // 243
    {
      question:
        "¿Cuál es el **CR** en: *«El modelo económico depende de la estabilidad política.»*?",
      options: [
        '"de la estabilidad política"',
        '"El modelo económico"',
        '"depende"',
        '"política"',
      ],
      correctAnswer: 0,
      explanation:
        "«Depender» rige «de». «de la estabilidad política» es el CR. A diferencia del CD, no puede sustituirse por «lo/la».",
    },
    // 244
    {
      question:
        "¿Cuál es la diferencia fundamental entre el **complemento de régimen** y el **complemento circunstancial**?",
      options: [
        "La preposición del CR es exigida por el verbo; la del CC es opcional",
        "El CR siempre lleva la preposición «de»; el CC usa otras preposiciones",
        "El CR modifica al sujeto; el CC modifica al verbo",
        "No existe diferencia estructural entre ambos",
      ],
      correctAnswer: 0,
      explanation:
        "La clave del CR es que la preposición está seleccionada léxicamente por el verbo («contar con», «depender de», «referirse a»). En el CC, la preposición puede cambiar o incluso omitirse sin alterar el significado básico del verbo.",
    },
    // 245
    {
      question:
        "¿Cuál es el **CR** en: *«El investigador se especializó en genética molecular.»*?",
      options: [
        '"en genética molecular"',
        '"El investigador"',
        '"se especializó"',
        '"molecular"',
      ],
      correctAnswer: 0,
      explanation:
        "«Especializarse» rige «en». «en genética molecular» es el CR; la preposición no puede cambiarse sin alterar el significado.",
    },
    // 246
    {
      question:
        "¿Cuál es el **CR** en: *«El conferenciante habló extensamente sobre la crisis climática.»*?",
      options: [
        '"sobre la crisis climática"',
        '"El conferenciante"',
        '"extensamente"',
        '"habló"',
      ],
      correctAnswer: 0,
      explanation:
        "«Hablar» rige «de»/«sobre» para su complemento de tema. «sobre la crisis climática» es el CR. «extensamente» es un CC de modo.",
    },
    // 247
    {
      question:
        "¿Cuál es el **CR** en: *«La política exterior del país se basa en el respeto a la soberanía.»*?",
      options: [
        '"en el respeto a la soberanía"',
        '"La política exterior del país"',
        '"se basa"',
        '"a la soberanía"',
      ],
      correctAnswer: 0,
      explanation:
        "«Basarse» rige «en». «en el respeto a la soberanía» es el CR. «a la soberanía» es complemento dentro del CR, no un CR independiente.",
    },
    // 248
    {
      question:
        "¿Cuál es el **CR** en: *«El escritor renunció a publicar con esa editorial.»*?",
      options: [
        '"a publicar con esa editorial"',
        '"El escritor"',
        '"renunció"',
        '"con esa editorial"',
      ],
      correctAnswer: 0,
      explanation:
        "«Renunciar» rige «a». «a publicar con esa editorial» es el CR. «con esa editorial» es un complemento dentro del infinitivo del CR.",
    },
    // 249
    {
      question:
        "¿Cuál es el **CR** en: *«Los alumnos se quejaron de la excesiva carga académica.»*?",
      options: [
        '"de la excesiva carga académica"',
        '"Los alumnos"',
        '"se quejaron"',
        '"académica"',
      ],
      correctAnswer: 0,
      explanation:
        "«Quejarse» rige «de» de manera obligatoria. «de la excesiva carga académica» es el CR.",
    },
    // 250
    {
      question:
        "¿Cuál es el **CR** en: *«El ensayo consiste en analizar un texto filosófico.»*?",
      options: [
        '"en analizar un texto filosófico"',
        '"El ensayo"',
        '"consiste"',
        '"filosófico"',
      ],
      correctAnswer: 0,
      explanation:
        "«Consistir» rige «en». «en analizar un texto filosófico» es el CR.",
    },
    // 251
    {
      question:
        "¿Cuál es el **CR** en: *«El candidato aspira a obtener la presidencia.»*?",
      options: [
        '"a obtener la presidencia"',
        '"El candidato"',
        '"aspira"',
        '"la presidencia"',
      ],
      correctAnswer: 0,
      explanation:
        "«Aspirar» rige «a». «a obtener la presidencia» es el CR. Sin él, la oración resulta incompleta: *«El candidato aspira»*.",
    },
    // 252
    {
      question:
        "¿Cuál es el **CR** en: *«El gobierno se comprometió con la reducción de emisiones.»*?",
      options: [
        '"con la reducción de emisiones"',
        '"El gobierno"',
        '"se comprometió"',
        '"de emisiones"',
      ],
      correctAnswer: 0,
      explanation:
        "«Comprometerse» rige «con». «con la reducción de emisiones» es el CR.",
    },
    // 253
    {
      question:
        "¿Cuál es el **CR** en: *«La teoría se refiere a la evolución de las especies.»*?",
      options: [
        '"a la evolución de las especies"',
        '"La teoría"',
        '"se refiere"',
        '"de las especies"',
      ],
      correctAnswer: 0,
      explanation:
        "«Referirse» rige «a». «a la evolución de las especies» es el CR. «de las especies» es modificador del núcleo «evolución» dentro del CR.",
    },
    // 254
    {
      question:
        "¿Cuál es el **CR** en: *«Los sociólogos discutieron acerca de las causas de la desigualdad.»*?",
      options: [
        '"acerca de las causas de la desigualdad"',
        '"Los sociólogos"',
        '"discutieron"',
        '"la desigualdad"',
      ],
      correctAnswer: 0,
      explanation:
        "«Discutir» puede regir «sobre»/«acerca de». «acerca de las causas de la desigualdad» es el CR.",
    },
    // 255
    {
      question:
        "¿Cuál es el **CR** en: *«El alumno carece de los conocimientos previos necesarios.»*?",
      options: [
        '"de los conocimientos previos necesarios"',
        '"El alumno"',
        '"carece"',
        '"necesarios"',
      ],
      correctAnswer: 0,
      explanation:
        "«Carecer» rige «de» de manera obligatoria. «de los conocimientos previos necesarios» es el CR.",
    },
    // 256
    {
      question:
        "¿Cuál es el **CR** en: *«La investigación se centró en el análisis del discurso.»*?",
      options: [
        '"en el análisis del discurso"',
        '"La investigación"',
        '"se centró"',
        '"del discurso"',
      ],
      correctAnswer: 0,
      explanation:
        "«Centrarse» rige «en». «en el análisis del discurso» es el CR.",
    },
    // 257
    {
      question:
        "¿Cuál es el **CR** en: *«El rector se opuso a la privatización de los servicios universitarios.»*?",
      options: [
        '"a la privatización de los servicios universitarios"',
        '"El rector"',
        '"se opuso"',
        '"universitarios"',
      ],
      correctAnswer: 0,
      explanation:
        "«Oponerse» rige «a». «a la privatización de los servicios universitarios» es el CR.",
    },
    // 258
    {
      question:
        "¿Cuál es el **CR** en: *«La propuesta difiere de los planteamientos anteriores.»*?",
      options: [
        '"de los planteamientos anteriores"',
        '"La propuesta"',
        '"difiere"',
        '"anteriores"',
      ],
      correctAnswer: 0,
      explanation:
        "«Diferir» rige «de». «de los planteamientos anteriores» es el CR.",
    },
    // 259
    {
      question:
        "¿Cuál es el **CR** en: *«Los estudiantes se adaptaron a las nuevas modalidades de aprendizaje.»*?",
      options: [
        '"a las nuevas modalidades de aprendizaje"',
        '"Los estudiantes"',
        '"se adaptaron"',
        '"de aprendizaje"',
      ],
      correctAnswer: 0,
      explanation:
        "«Adaptarse» rige «a». «a las nuevas modalidades de aprendizaje» es el CR.",
    },
    // 260
    {
      question:
        "¿Cuál es el **CR** en: *«El comité deliberó sobre las candidaturas presentadas.»*?",
      options: [
        '"sobre las candidaturas presentadas"',
        '"El comité"',
        '"deliberó"',
        '"presentadas"',
      ],
      correctAnswer: 0,
      explanation:
        "«Deliberar» rige «sobre». «sobre las candidaturas presentadas» es el CR.",
    },
    // 261
    {
      question:
        "¿Cuál es el **CR** en: *«La sociedad civil clamó por justicia y transparencia.»*?",
      options: [
        '"por justicia y transparencia"',
        '"La sociedad civil"',
        '"clamó"',
        '"transparencia"',
      ],
      correctAnswer: 0,
      explanation:
        "«Clamar» rige «por». «por justicia y transparencia» es el CR.",
    },
    // 262
    {
      question:
        "¿Cuál es el **CR** en: *«La nueva generación depende de la tecnología digital.»*?",
      options: [
        '"de la tecnología digital"',
        '"La nueva generación"',
        '"depende"',
        '"digital"',
      ],
      correctAnswer: 0,
      explanation:
        "«Depender» rige «de». «de la tecnología digital» es el CR; sin él la oración resulta incompleta.",
    },
    // 263
    {
      question:
        "¿Cuál es el **CR** en: *«El jurado optó por el proyecto más innovador.»*?",
      options: [
        '"por el proyecto más innovador"',
        '"El jurado"',
        '"optó"',
        '"más innovador"',
      ],
      correctAnswer: 0,
      explanation:
        "«Optar» rige «por». «por el proyecto más innovador» es el CR.",
    },
    // 264
    {
      question:
        "¿Cuál es el **CR** en: *«El académico aboga por la educación pública gratuita.»*?",
      options: [
        '"por la educación pública gratuita"',
        '"El académico"',
        '"aboga"',
        '"gratuita"',
      ],
      correctAnswer: 0,
      explanation:
        "«Abogar» rige «por». «por la educación pública gratuita» es el CR.",
    },
    // 265
    {
      question:
        "¿Cuál es el **CR** en: *«El investigador prescindió de los datos atípicos del estudio.»*?",
      options: [
        '"de los datos atípicos del estudio"',
        '"El investigador"',
        '"prescindió"',
        '"del estudio"',
      ],
      correctAnswer: 0,
      explanation:
        "«Prescindir» rige «de» de manera obligatoria. «de los datos atípicos del estudio» es el CR.",
    },
    // 266
    {
      question:
        "¿Cuál es el **CR** en: *«Los participantes coincidieron en la necesidad de reformas estructurales.»*?",
      options: [
        '"en la necesidad de reformas estructurales"',
        '"Los participantes"',
        '"coincidieron"',
        '"estructurales"',
      ],
      correctAnswer: 0,
      explanation:
        "«Coincidir» rige «en». «en la necesidad de reformas estructurales» es el CR.",
    },
    // 267
    {
      question:
        "¿Cuál es el **CR** en: *«La empresa invirtió en tecnología de punta.»*?",
      options: [
        '"en tecnología de punta"',
        '"La empresa"',
        '"invirtió"',
        '"de punta"',
      ],
      correctAnswer: 0,
      explanation:
        "«Invertir» rige «en» cuando expresa aquello en lo que se invierte. «en tecnología de punta» es el CR.",
    },
    // 268
    {
      question:
        "¿Cuál es el **CR** en: *«El sociólogo se interesó por el estudio de las migraciones.»*?",
      options: [
        '"por el estudio de las migraciones"',
        '"El sociólogo"',
        '"se interesó"',
        '"de las migraciones"',
      ],
      correctAnswer: 0,
      explanation:
        "«Interesarse» rige «por». «por el estudio de las migraciones» es el CR.",
    },
    // 269
    {
      question:
        "¿Cuál es el **CR** en: *«El partido político apostó por un candidato independiente.»*?",
      options: [
        '"por un candidato independiente"',
        '"El partido político"',
        '"apostó"',
        '"independiente"',
      ],
      correctAnswer: 0,
      explanation:
        "«Apostar» en sentido figurado rige «por». «por un candidato independiente» es el CR.",
    },

    // ─── BLOQUE 10: COMPLEMENTO PREDICATIVO (Q270–Q299) ─────────────────────

    // 270
    {
      question:
        "¿Cuál es el **complemento predicativo** en: *«Los estudiantes llegaron agotados al examen.»*?",
      options: ['"agotados"', '"al examen"', '"Los estudiantes"', '"llegaron"'],
      correctAnswer: 0,
      explanation:
        "«agotados» es un predicativo del sujeto: modifica simultáneamente al sujeto «Los estudiantes» y al verbo «llegaron». Se distingue del atributo porque «llegar» es un verbo no copulativo.",
    },
    // 271
    {
      question:
        "¿Cuál es el **predicativo** en: *«El jurado declaró inocente al acusado.»*?",
      options: ['"inocente"', '"El jurado"', '"al acusado"', '"declaró"'],
      correctAnswer: 0,
      explanation:
        "«inocente» es un predicativo del objeto directo: modifica a «al acusado» (CD) y al verbo «declaró» simultáneamente.",
    },
    // 272
    {
      question:
        "¿Qué diferencia hay entre un **predicativo** y un **atributo**?",
      options: [
        "El predicativo acompaña a verbos no copulativos; el atributo requiere verbos copulativos",
        "El predicativo modifica solo al verbo; el atributo modifica solo al sujeto",
        "No existe diferencia entre ambos",
        "El predicativo siempre es un adverbio; el atributo siempre es un adjetivo",
      ],
      correctAnswer: 0,
      explanation:
        "El atributo aparece con verbos copulativos (ser, estar, parecer). El predicativo acompaña a verbos no copulativos y modifica simultáneamente al verbo y a un sustantivo (sujeto u objeto).",
    },
    // 273
    {
      question:
        "¿Cuál es el **predicativo** en: *«Los manifestantes salieron victoriosos del tribunal.»*?",
      options: [
        '"victoriosos"',
        '"del tribunal"',
        '"Los manifestantes"',
        '"salieron"',
      ],
      correctAnswer: 0,
      explanation:
        "«victoriosos» es un predicativo del sujeto: predica una cualidad de «Los manifestantes» a través del verbo no copulativo «salieron».",
    },
    // 274
    {
      question:
        "¿Cuál es el **predicativo del objeto** en: *«El pueblo eligió presidenta a la candidata progresista.»*?",
      options: [
        '"presidenta"',
        '"El pueblo"',
        '"a la candidata progresista"',
        '"progresista"',
      ],
      correctAnswer: 0,
      explanation:
        "«presidenta» es el predicativo del objeto directo «a la candidata progresista». Expresa el estado o condición en que queda el objeto tras la acción del verbo.",
    },
    // 275
    {
      question:
        "¿Cuál es el **predicativo** en: *«La investigadora regresó satisfecha de la conferencia internacional.»*?",
      options: [
        '"satisfecha"',
        '"de la conferencia internacional"',
        '"La investigadora"',
        '"regresó"',
      ],
      correctAnswer: 0,
      explanation:
        "«satisfecha» es un predicativo del sujeto. «Regresar» es un verbo no copulativo; «satisfecha» describe el estado del sujeto al realizar la acción.",
    },
    // 276
    {
      question:
        "¿Cuál es el **predicativo** en: *«El acusado compareció nervioso ante el tribunal.»*?",
      options: [
        '"nervioso"',
        '"ante el tribunal"',
        '"El acusado"',
        '"compareció"',
      ],
      correctAnswer: 0,
      explanation:
        "«nervioso» es un predicativo del sujeto. Describe el estado de «El acusado» mientras se realizaba la acción del verbo no copulativo «comparecer».",
    },
    // 277
    {
      question:
        "¿En cuál de las siguientes oraciones el adjetivo funciona como **predicativo** (y NO como atributo)?",
      options: [
        "«El paciente llegó mejorado al hospital»",
        "«El paciente está mejorado»",
        "«El paciente parece mejorado»",
        "«El paciente resultó mejorado»",
      ],
      correctAnswer: 0,
      explanation:
        "En «llegó mejorado», «mejorado» es predicativo porque «llegar» es un verbo no copulativo. En las demás opciones, «mejorado» es atributo porque «estar», «parecer» y «resultar» son copulativos.",
    },
    // 278
    {
      question:
        "¿Cuál es el **predicativo del sujeto** en: *«Los delegados regresaron convencidos tras el debate.»*?",
      options: [
        '"convencidos"',
        '"tras el debate"',
        '"Los delegados"',
        '"regresaron"',
      ],
      correctAnswer: 0,
      explanation:
        "«convencidos» es el predicativo del sujeto. Se distingue del atributo porque «regresar» no es un verbo copulativo.",
    },
    // 279
    {
      question:
        "¿Cuál es el **predicativo** en: *«Nombraron directora a la doctora García.»*?",
      options: [
        '"directora"',
        '"Nombraron"',
        '"a la doctora García"',
        '"García"',
      ],
      correctAnswer: 0,
      explanation:
        "«directora» es el predicativo del objeto directo «a la doctora García». El verbo «nombrar» selecciona esta construcción.",
    },
    // 280
    {
      question:
        "¿Cuál es el **predicativo** en: *«Los músicos tocaron emocionados ante el público.»*?",
      options: [
        '"emocionados"',
        '"ante el público"',
        '"Los músicos"',
        '"tocaron"',
      ],
      correctAnswer: 0,
      explanation:
        "«emocionados» es un predicativo del sujeto. «Tocar» es un verbo no copulativo; «emocionados» describe el estado del sujeto mientras realizaba la acción.",
    },
    // 281
    {
      question:
        "¿Cuál es el **predicativo** en: *«Eligieron representante al estudiante de mayor promedio.»*?",
      options: [
        '"representante"',
        '"Eligieron"',
        '"al estudiante de mayor promedio"',
        '"mayor"',
      ],
      correctAnswer: 0,
      explanation:
        "«representante» es el predicativo del objeto directo. «Elegir» admite la construcción elegir + OD + predicativo.",
    },
    // 282
    {
      question:
        "¿Cuál es el **predicativo del sujeto** en: *«La candidata se presentó segura al debate final.»*?",
      options: [
        '"segura"',
        '"al debate final"',
        '"La candidata"',
        '"se presentó"',
      ],
      correctAnswer: 0,
      explanation:
        "«segura» es el predicativo del sujeto: describe el estado de «La candidata» al realizarse la acción del verbo no copulativo «presentarse».",
    },
    // 283
    {
      question:
        "¿Cuál es el **predicativo** en: *«Los negociadores regresaron frustrados sin haber llegado a un acuerdo.»*?",
      options: [
        '"frustrados"',
        '"sin haber llegado a un acuerdo"',
        '"Los negociadores"',
        '"regresaron"',
      ],
      correctAnswer: 0,
      explanation:
        "«frustrados» es el predicativo del sujeto. «sin haber llegado a un acuerdo» es un CC de modo.",
    },
    // 284
    {
      question:
        "¿En cuál de las siguientes oraciones hay un **predicativo del objeto directo**?",
      options: [
        "«Consideraron excelente su propuesta»",
        "«Su propuesta resultó excelente»",
        "«Presentaron una propuesta excelente»",
        "«La propuesta era excelente»",
      ],
      correctAnswer: 0,
      explanation:
        "En «Consideraron excelente su propuesta», «excelente» es el predicativo del OD «su propuesta». En las demás, el adjetivo es atributo (verbos copulativos) o modificador directo.",
    },
    // 285
    {
      question:
        "¿Cuál es el **predicativo** en: *«Los deportistas terminaron exhaustos la maratón.»*?",
      options: [
        '"exhaustos"',
        '"la maratón"',
        '"Los deportistas"',
        '"terminaron"',
      ],
      correctAnswer: 0,
      explanation:
        "«exhaustos» es el predicativo del sujeto. «Terminar» es un verbo no copulativo; «exhaustos» describe el estado del sujeto al concluir la acción.",
    },
    // 286
    {
      question:
        "¿Cuál es el **predicativo del objeto** en: *«El director nombró coordinador al profesor más experimentado.»*?",
      options: [
        '"coordinador"',
        '"El director"',
        '"al profesor más experimentado"',
        '"experimentado"',
      ],
      correctAnswer: 0,
      explanation:
        "«coordinador» es el predicativo del objeto directo «al profesor más experimentado». Indica el cargo en que queda el objeto tras la acción.",
    },
    // 287
    {
      question:
        "¿Cuál es el **predicativo** en: *«Los ciudadanos votaron hartos de la corrupción.»*?",
      options: [
        '"hartos de la corrupción"',
        '"Los ciudadanos"',
        '"votaron"',
        '"la corrupción"',
      ],
      correctAnswer: 0,
      explanation:
        "«hartos de la corrupción» es el predicativo del sujeto. El núcleo es el adjetivo «hartos», que incluye su complemento «de la corrupción».",
    },
    // 288
    {
      question:
        "¿Cuál es el **predicativo** en: *«La comunidad recibió encantada la noticia del proyecto.»*?",
      options: [
        '"encantada"',
        '"la noticia del proyecto"',
        '"La comunidad"',
        '"recibió"',
      ],
      correctAnswer: 0,
      explanation:
        "«encantada» es el predicativo del sujeto. Describe el estado de «La comunidad» al realizar la acción del verbo no copulativo «recibir».",
    },
    // 289
    {
      question:
        "¿Cuál es el **predicativo del objeto** en: *«Nombraron embajador al veterano diplomático.»*?",
      options: [
        '"embajador"',
        '"Nombraron"',
        '"al veterano diplomático"',
        '"veterano"',
      ],
      correctAnswer: 0,
      explanation:
        "«embajador» es el predicativo del objeto directo «al veterano diplomático».",
    },
    // 290
    {
      question:
        "¿Cuál es el **predicativo** en: *«Los alumnos salieron decepcionados del examen.»*?",
      options: [
        '"decepcionados"',
        '"del examen"',
        '"Los alumnos"',
        '"salieron"',
      ],
      correctAnswer: 0,
      explanation:
        "«decepcionados» es el predicativo del sujeto. «Salir» no es un verbo copulativo; «decepcionados» describe el estado del sujeto al realizarse la acción.",
    },
    // 291
    {
      question:
        "¿Cuál es el **predicativo** en: *«El equipo de investigación regresó fortalecido del congreso.»*?",
      options: [
        '"fortalecido"',
        '"del congreso"',
        '"El equipo de investigación"',
        '"regresó"',
      ],
      correctAnswer: 0,
      explanation:
        "«fortalecido» es el predicativo del sujeto. Indica el estado en que regresó el equipo.",
    },
    // 292
    {
      question:
        "¿Cuál es el **predicativo del objeto** en: *«La asamblea declaró nulo el resultado de las elecciones.»*?",
      options: [
        '"nulo"',
        '"La asamblea"',
        '"el resultado de las elecciones"',
        '"declaró"',
      ],
      correctAnswer: 0,
      explanation:
        "«nulo» es el predicativo del objeto directo «el resultado de las elecciones». El verbo «declarar» selecciona este tipo de construcción.",
    },
    // 293
    {
      question:
        "¿Cuál es el **predicativo** en: *«La artista llegó consagrada tras su gira internacional.»*?",
      options: [
        '"consagrada"',
        '"tras su gira internacional"',
        '"La artista"',
        '"llegó"',
      ],
      correctAnswer: 0,
      explanation:
        "«consagrada» es el predicativo del sujeto. «Llegar» es un verbo no copulativo.",
    },
    // 294
    {
      question:
        "¿Cuál es el **predicativo** en: *«Los negociadores firmaron satisfechos el acuerdo definitivo.»*?",
      options: [
        '"satisfechos"',
        '"el acuerdo definitivo"',
        '"Los negociadores"',
        '"firmaron"',
      ],
      correctAnswer: 0,
      explanation:
        "«satisfechos» es el predicativo del sujeto. Describe el estado de los negociadores durante la acción del verbo no copulativo «firmar».",
    },
    // 295
    {
      question:
        "¿En cuál de las siguientes oraciones el adjetivo es **predicativo** y NO modificador directo?",
      options: [
        "«El catedrático llegó indignado al aula»",
        "«El catedrático indignado llegó al aula»",
        "«El catedrático resultó indignado»",
        "«El catedrático estaba indignado»",
      ],
      correctAnswer: 0,
      explanation:
        "En «llegó indignado», «indignado» es predicativo del sujeto (fuera del SN, con verbo no copulativo). En «catedrático indignado» es MD del núcleo. En «resultó»/«estaba» es atributo.",
    },
    // 296
    {
      question:
        "¿Cuál es el **predicativo** en: *«El comité aceptó unánime la propuesta del rector.»*?",
      options: [
        '"unánime"',
        '"la propuesta del rector"',
        '"El comité"',
        '"del rector"',
      ],
      correctAnswer: 0,
      explanation:
        "«unánime» es el predicativo del sujeto: describe el modo o estado en que el sujeto realizó la acción del verbo no copulativo «aceptar».",
    },
    // 297
    {
      question:
        "¿Cuál es el **predicativo del sujeto** en: *«Los alumnos de intercambio regresaron transformados a su país.»*?",
      options: [
        '"transformados"',
        '"a su país"',
        '"Los alumnos de intercambio"',
        '"regresaron"',
      ],
      correctAnswer: 0,
      explanation:
        "«transformados» es el predicativo del sujeto. Indica el estado en que se encontraban al regresar.",
    },
    // 298
    {
      question:
        "¿Cuál es el **predicativo del objeto** en: *«Consideraron inapropiado el comentario del funcionario.»*?",
      options: [
        '"inapropiado"',
        '"Consideraron"',
        '"el comentario del funcionario"',
        '"del funcionario"',
      ],
      correctAnswer: 0,
      explanation:
        "«inapropiado» es el predicativo del objeto directo «el comentario del funcionario». El verbo «considerar» puede construirse con predicativo del OD.",
    },
    // 299
    {
      question:
        "¿Cuál es el **predicativo** en: *«Los pacientes salieron aliviados de la consulta médica.»*?",
      options: [
        '"aliviados"',
        '"de la consulta médica"',
        '"Los pacientes"',
        '"salieron"',
      ],
      correctAnswer: 0,
      explanation:
        "«aliviados» es el predicativo del sujeto. «Salir» es un verbo no copulativo.",
    },

    // ─── BLOQUE 11: COMPLEMENTO AGENTE (Q300–Q329) ──────────────────────────

    // 300
    {
      question:
        "¿Cuál es el **complemento agente** en: *«La teoría fue refutada por nuevas evidencias científicas.»*?",
      options: [
        '"por nuevas evidencias científicas"',
        '"La teoría"',
        '"fue refutada"',
        '"científicas"',
      ],
      correctAnswer: 0,
      explanation:
        "El complemento agente (CA) aparece en oraciones pasivas e indica quién realiza la acción. Va introducido por «por». «La teoría» es el sujeto paciente.",
    },
    // 301
    {
      question:
        "¿Cuál es el **CA** en: *«El premio fue otorgado por el comité internacional.»*?",
      options: [
        '"por el comité internacional"',
        '"El premio"',
        '"fue otorgado"',
        '"internacional"',
      ],
      correctAnswer: 0,
      explanation:
        "«por el comité internacional» es el CA. «El premio» es el sujeto paciente que recibe la acción.",
    },
    // 302
    {
      question:
        "¿Qué preposición introduce el **complemento agente** en las oraciones pasivas?",
      options: ['"por"', '"de"', '"a"', '"con"'],
      correctAnswer: 0,
      explanation:
        "El CA se introduce con la preposición «por» en el español moderno estándar.",
    },
    // 303
    {
      question:
        "¿Cuál es el **CA** en: *«El acuerdo fue firmado por los representantes de ambos países.»*?",
      options: [
        '"por los representantes de ambos países"',
        '"El acuerdo"',
        '"fue firmado"',
        '"de ambos países"',
      ],
      correctAnswer: 0,
      explanation:
        "«por los representantes de ambos países» es el CA. «de ambos países» es modificador del núcleo «representantes» dentro del CA.",
    },
    // 304
    {
      question:
        "¿Cuál es el **CA** en: *«La constitución fue redactada por un congreso constituyente.»*?",
      options: [
        '"por un congreso constituyente"',
        '"La constitución"',
        '"fue redactada"',
        '"constituyente"',
      ],
      correctAnswer: 0,
      explanation:
        "«por un congreso constituyente» es el CA. Indica quién realizó la acción de redactar.",
    },
    // 305
    {
      question:
        "Al transformar una oración de voz activa a pasiva, ¿qué elemento se convierte en **complemento agente**?",
      options: [
        "El sujeto de la oración activa",
        "El complemento directo",
        "El complemento indirecto",
        "El predicado",
      ],
      correctAnswer: 0,
      explanation:
        "En la transformación activa → pasiva, el sujeto activo pasa a ser el CA introducido por «por», y el CD pasa a ser el sujeto paciente.",
    },
    // 306
    {
      question:
        "¿Cuál es el **CA** en: *«Los archivos históricos fueron digitalizados por un equipo de especialistas.»*?",
      options: [
        '"por un equipo de especialistas"',
        '"Los archivos históricos"',
        '"fueron digitalizados"',
        '"de especialistas"',
      ],
      correctAnswer: 0,
      explanation:
        "«por un equipo de especialistas» es el CA. «Los archivos históricos» es el sujeto paciente.",
    },
    // 307
    {
      question:
        "¿Cuál es el **CA** en: *«El descubrimiento fue anunciado por la NASA.»*?",
      options: [
        '"por la NASA"',
        '"El descubrimiento"',
        '"fue anunciado"',
        '"anunciado"',
      ],
      correctAnswer: 0,
      explanation:
        "«por la NASA» es el CA. «El descubrimiento» es el sujeto paciente.",
    },
    // 308
    {
      question:
        "¿Cuál es el **CA** en: *«Las reformas educativas fueron aprobadas por la Cámara de Diputados.»*?",
      options: [
        '"por la Cámara de Diputados"',
        '"Las reformas educativas"',
        '"fueron aprobadas"',
        '"educativas"',
      ],
      correctAnswer: 0,
      explanation:
        "«por la Cámara de Diputados» es el CA. «Las reformas educativas» es el sujeto paciente.",
    },
    // 309
    {
      question:
        "¿Cuál es el **CA** en: *«El puente fue construido por ingenieros mexicanos.»*?",
      options: [
        '"por ingenieros mexicanos"',
        '"El puente"',
        '"fue construido"',
        '"mexicanos"',
      ],
      correctAnswer: 0,
      explanation:
        "«por ingenieros mexicanos» es el CA. Indica quién construyó el puente.",
    },
    // 310
    {
      question:
        "Al transformar *«El rector firmó el convenio»* a voz pasiva, el **complemento agente** sería:",
      options: [
        '"por el rector"',
        '"el convenio"',
        '"fue firmado"',
        '"el rector"',
      ],
      correctAnswer: 0,
      explanation:
        "La oración pasiva es: «El convenio fue firmado por el rector». El sujeto activo «El rector» se convierte en CA introducido por «por».",
    },
    // 311
    {
      question:
        "¿Cuál es el **CA** en: *«La vacuna fue desarrollada por investigadores de varias universidades.»*?",
      options: [
        '"por investigadores de varias universidades"',
        '"La vacuna"',
        '"fue desarrollada"',
        '"de varias universidades"',
      ],
      correctAnswer: 0,
      explanation:
        "«por investigadores de varias universidades» es el CA. «de varias universidades» es modificador del núcleo «investigadores» dentro del CA.",
    },
    // 312
    {
      question:
        "¿Cuál es el **CA** en: *«El proyecto fue rechazado por el comité evaluador.»*?",
      options: [
        '"por el comité evaluador"',
        '"El proyecto"',
        '"fue rechazado"',
        '"evaluador"',
      ],
      correctAnswer: 0,
      explanation:
        "«por el comité evaluador» es el CA. «El proyecto» es el sujeto paciente.",
    },
    // 313
    {
      question:
        "¿Cuál es el **CA** en: *«Los derechos de autor fueron protegidos por la ley.»*?",
      options: [
        '"por la ley"',
        '"Los derechos de autor"',
        '"fueron protegidos"',
        '"de autor"',
      ],
      correctAnswer: 0,
      explanation:
        "«por la ley» es el CA. «Los derechos de autor» es el sujeto paciente.",
    },
    // 314
    {
      question:
        "¿Cuál de las siguientes oraciones tiene **complemento agente**?",
      options: [
        "«El informe fue elaborado por los analistas»",
        "«El informe fue elaborado rápidamente»",
        "«El informe fue entregado al rector»",
        "«El informe fue muy detallado»",
      ],
      correctAnswer: 0,
      explanation:
        "Solo la primera tiene CA: «por los analistas». La segunda tiene un CC de modo; la tercera tiene un CI; la cuarta tiene un predicado nominal.",
    },
    // 315
    {
      question:
        "¿Cuál es el **CA** en: *«El manuscrito fue traducido por un reconocido lingüista.»*?",
      options: [
        '"por un reconocido lingüista"',
        '"El manuscrito"',
        '"fue traducido"',
        '"reconocido"',
      ],
      correctAnswer: 0,
      explanation:
        "«por un reconocido lingüista» es el CA. «El manuscrito» es el sujeto paciente.",
    },
    // 316
    {
      question:
        "Al pasar *«Los estudiantes redactaron el ensayo»* a voz pasiva, la oración correcta es:",
      options: [
        "«El ensayo fue redactado por los estudiantes»",
        "«El ensayo fue redactado de los estudiantes»",
        "«El ensayo fue redactado para los estudiantes»",
        "«Los estudiantes fueron redactados por el ensayo»",
      ],
      correctAnswer: 0,
      explanation:
        "El CD «el ensayo» se convierte en sujeto paciente; el sujeto activo «los estudiantes» se convierte en CA «por los estudiantes»; el verbo pasa a «fue redactado».",
    },
    // 317
    {
      question:
        "¿Cuál es el **CA** en: *«La novela fue adaptada al cine por un director español.»*?",
      options: [
        '"por un director español"',
        '"La novela"',
        '"al cine"',
        '"fue adaptada"',
      ],
      correctAnswer: 0,
      explanation:
        "«por un director español» es el CA. «al cine» es un CC de finalidad o dirección del verbo «adaptar».",
    },
    // 318
    {
      question:
        "¿Cuál es el **CA** en: *«Los datos fueron procesados por un algoritmo de inteligencia artificial.»*?",
      options: [
        '"por un algoritmo de inteligencia artificial"',
        '"Los datos"',
        '"fueron procesados"',
        '"de inteligencia artificial"',
      ],
      correctAnswer: 0,
      explanation:
        "«por un algoritmo de inteligencia artificial» es el CA. «de inteligencia artificial» es modificador del núcleo «algoritmo» dentro del CA.",
    },
    // 319
    {
      question:
        "¿Cuál es el **CA** en: *«La sentencia fue dictada por el juez federal.»*?",
      options: [
        '"por el juez federal"',
        '"La sentencia"',
        '"fue dictada"',
        '"federal"',
      ],
      correctAnswer: 0,
      explanation:
        "«por el juez federal» es el CA. «La sentencia» es el sujeto paciente.",
    },
    // 320
    {
      question:
        "¿Cuál es el **CA** en: *«El edificio fue diseñado por el arquitecto Luis Barragán.»*?",
      options: [
        '"por el arquitecto Luis Barragán"',
        '"El edificio"',
        '"fue diseñado"',
        '"Luis Barragán"',
      ],
      correctAnswer: 0,
      explanation:
        "«por el arquitecto Luis Barragán» es el CA completo, incluida la aposición «Luis Barragán». El sujeto paciente es «El edificio».",
    },
    // 321
    {
      question:
        "En la oración pasiva *«El experimento fue realizado por el equipo del laboratorio»*, ¿cuál es el **sujeto paciente**?",
      options: [
        '"El experimento"',
        '"por el equipo del laboratorio"',
        '"fue realizado"',
        '"del laboratorio"',
      ],
      correctAnswer: 0,
      explanation:
        "El sujeto paciente es «El experimento»: recibe la acción del verbo en voz pasiva. El CA es «por el equipo del laboratorio».",
    },
    // 322
    {
      question:
        "¿Cuál es el **CA** en: *«El tratado fue negociado por diplomáticos de cuatro naciones.»*?",
      options: [
        '"por diplomáticos de cuatro naciones"',
        '"El tratado"',
        '"fue negociado"',
        '"de cuatro naciones"',
      ],
      correctAnswer: 0,
      explanation:
        "«por diplomáticos de cuatro naciones» es el CA. «de cuatro naciones» es modificador del núcleo «diplomáticos» dentro del CA.",
    },
    // 323
    {
      question:
        "¿Cuál es el **CA** en: *«El informe final fue presentado por la comisión investigadora.»*?",
      options: [
        '"por la comisión investigadora"',
        '"El informe final"',
        '"fue presentado"',
        '"investigadora"',
      ],
      correctAnswer: 0,
      explanation:
        "«por la comisión investigadora» es el CA. «El informe final» es el sujeto paciente.",
    },
    // 324
    {
      question:
        "¿Cuál de las siguientes oraciones **NO** tiene complemento agente?",
      options: [
        "«El libro fue publicado exitosamente»",
        "«El libro fue publicado por una editorial independiente»",
        "«El informe fue redactado por los analistas»",
        "«La ley fue aprobada por el congreso»",
      ],
      correctAnswer: 0,
      explanation:
        "«exitosamente» es un CC de modo, no un CA. Para que haya CA se necesita un sintagma con «por» que indique el agente de la acción pasiva.",
    },
    // 325
    {
      question:
        "¿Cuál es el **CA** en: *«Los cuadros fueron restaurados por expertos del INAH.»*?",
      options: [
        '"por expertos del INAH"',
        '"Los cuadros"',
        '"fueron restaurados"',
        '"del INAH"',
      ],
      correctAnswer: 0,
      explanation:
        "«por expertos del INAH» es el CA. «del INAH» es modificador del núcleo «expertos» dentro del CA.",
    },
    // 326
    {
      question:
        "¿Cuál es el **CA** en: *«La tesis fue defendida con éxito por la investigadora.»*?",
      options: [
        '"por la investigadora"',
        '"La tesis"',
        '"con éxito"',
        '"fue defendida"',
      ],
      correctAnswer: 0,
      explanation:
        "«por la investigadora» es el CA. «con éxito» es un CC de modo que también aparece en la oración.",
    },
    // 327
    {
      question:
        "¿Cuál es el **CA** en: *«El presupuesto fue aprobado por unanimidad por el consejo directivo.»*?",
      options: [
        '"por el consejo directivo"',
        '"El presupuesto"',
        '"por unanimidad"',
        '"fue aprobado"',
      ],
      correctAnswer: 0,
      explanation:
        "«por el consejo directivo» es el CA (señala al agente). «por unanimidad» es un CC de modo; aunque ambos usan «por», solo uno indica el agente de la pasiva.",
    },
    // 328
    {
      question:
        "¿Cuál es el **CA** en: *«Los monumentos históricos fueron catalogados por el gobierno federal.»*?",
      options: [
        '"por el gobierno federal"',
        '"Los monumentos históricos"',
        '"fueron catalogados"',
        '"históricos"',
      ],
      correctAnswer: 0,
      explanation:
        "«por el gobierno federal» es el CA. «Los monumentos históricos» es el sujeto paciente.",
    },
    // 329
    {
      question:
        "¿Cuál es el **CA** en: *«La propuesta de paz fue rechazada por ambas partes en conflicto.»*?",
      options: [
        '"por ambas partes en conflicto"',
        '"La propuesta de paz"',
        '"fue rechazada"',
        '"en conflicto"',
      ],
      correctAnswer: 0,
      explanation:
        "«por ambas partes en conflicto» es el CA completo. «en conflicto» es modificador del núcleo «partes» dentro del CA.",
    },

    // ─── BLOQUE 12: ERRORES FRECUENTES — EJERCICIOS MIXTOS (Q330–Q379) ──────

    // ── A. CD con preposición «a» de persona (no confundir con CI) ───────────

    // 330
    {
      question:
        "¿Cuál es el **complemento directo** en: *«El médico atendió a los pacientes graves en urgencias.»*?",
      options: [
        '"a los pacientes graves"',
        '"El médico"',
        '"en urgencias"',
        '"graves"',
      ],
      correctAnswer: 0,
      explanation:
        "Aunque lleva «a», puede sustituirse por «los»: «El médico los atendió». La preposición «a» ante CD de persona es obligatoria en español pero NO convierte el sintagma en CI. El CI se sustituye por «le/les», no por «lo/la».",
    },
    // 331
    {
      question:
        "En *«La profesora evaluó a cada estudiante individualmente»*, ¿cuál es el **CD**?",
      options: [
        '"a cada estudiante"',
        '"La profesora"',
        '"individualmente"',
        '"cada estudiante" (sin «a»)',
      ],
      correctAnswer: 0,
      explanation:
        "«a cada estudiante» es el CD de persona. Prueba acusativa: «La profesora los evaluó individualmente». «individualmente» es CC de modo. El error frecuente es marcar «a cada estudiante» como CI por llevar «a».",
    },
    // 332
    {
      question:
        "¿Qué función cumple *«a la investigadora»* en *«El rector distinguió a la investigadora en la ceremonia»*?",
      options: [
        "Complemento directo",
        "Complemento indirecto",
        "Complemento circunstancial de lugar",
        "Sujeto",
      ],
      correctAnswer: 0,
      explanation:
        "«a la investigadora» es el CD de persona; se sustituye por «la»: «El rector la distinguió». «en la ceremonia» es CC de lugar. La prueba clave: CD → «lo/la»; CI → «le/les».",
    },
    // 333
    {
      question:
        "En *«Los estudiantes visitaron a su tutor en el cubículo»*, el CD es:",
      options: [
        '"a su tutor"',
        '"Los estudiantes"',
        '"en el cubículo"',
        '"su tutor" (sin «a»)',
      ],
      correctAnswer: 0,
      explanation:
        "«a su tutor» es el CD con preposición de persona. Prueba: «Los estudiantes lo visitaron». «en el cubículo» es CC de lugar. La «a» no indica CI; solo indica que el OD es una persona específica.",
    },
    // 334
    {
      question:
        "En *«La junta sancionó a los funcionarios corruptos»*, la expresión *«a los funcionarios corruptos»* es:",
      options: [
        "CD con preposición de persona (sustitución: «los»)",
        "CI (sustitución: «les»)",
        "CC de modo",
        "Complemento de régimen",
      ],
      correctAnswer: 0,
      explanation:
        "Prueba definitiva: «La junta **los** sancionó» ✓ (acusativo = CD). Si fuera CI: «La junta **les** sancionó» ✗. La preposición «a» ante OD de persona es un rasgo del español, no una marca de CI.",
    },

    // ── B. CD y CI en la misma oración ──────────────────────────────────────

    // 335
    {
      question:
        "En *«El director entregó los diplomas a los egresados»*, ¿cuál es el **CD**?",
      options: [
        '"los diplomas"',
        '"a los egresados"',
        '"El director"',
        '"los egresados"',
      ],
      correctAnswer: 0,
      explanation:
        "«los diplomas» es el CD (prueba: «El director **los** entregó»). «a los egresados» es el CI (prueba: «El director **les** entregó los diplomas»). Cuando hay CD y CI juntos, el CD responde «¿qué?» y el CI responde «¿a quién?».",
    },
    // 336
    {
      question:
        "En *«La secretaría envió la convocatoria a los aspirantes»*, ¿cuál es el **CI**?",
      options: [
        '"a los aspirantes"',
        '"la convocatoria"',
        '"La secretaría"',
        '"envió"',
      ],
      correctAnswer: 0,
      explanation:
        "«a los aspirantes» es el CI; se sustituye por «les»: «La secretaría **les** envió la convocatoria». «la convocatoria» es el CD (sustituible por «la»). El error común es confundir cuál es cuál.",
    },
    // 337
    {
      question:
        "En *«Les prestó el laboratorio a los investigadores visitantes»*, ¿cuál es el **CD**?",
      options: [
        '"el laboratorio"',
        '"a los investigadores visitantes"',
        '"Les"',
        '"visitantes"',
      ],
      correctAnswer: 0,
      explanation:
        "«el laboratorio» es el CD (sustituible por «lo»). «a los investigadores visitantes» es el CI, ya duplicado por el clítico «Les». El pronombre «Les» anuncia el CI pero no lo reemplaza en el análisis; el CI propiamente dicho es el sintagma nominal.",
    },
    // 338
    {
      question:
        "En *«El coordinador asignó un asesor a cada tesista»*, identifica correctamente CD y CI:",
      options: [
        'CD = "un asesor"; CI = "a cada tesista"',
        'CD = "a cada tesista"; CI = "un asesor"',
        'CD = "cada tesista"; CI = "un asesor"',
        "No hay CD ni CI",
      ],
      correctAnswer: 0,
      explanation:
        "«un asesor» es el CD (prueba: «El coordinador **lo** asignó»). «a cada tesista» es el CI (prueba: «El coordinador **le** asignó un asesor»). El error clásico es invertir ambos porque «a cada tesista» parece más *importante*.",
    },
    // 339
    {
      question:
        "En *«La fundación otorgó una beca al mejor promedio»*, ¿cuál es la afirmación correcta?",
      options: [
        "«una beca» es CD y «al mejor promedio» es CI",
        "«una beca» es CI y «al mejor promedio» es CD",
        "Ambos sintagmas son CD",
        "«al mejor promedio» es CC de lugar",
      ],
      correctAnswer: 0,
      explanation:
        "Pruebas simultáneas: «La fundación **la** otorgó» (CD femenino) y «La fundación **le** otorgó una beca» (CI). Nunca puede haber dos CD en una misma oración con un solo verbo.",
    },

    // ── C. CI vs CC de finalidad ─────────────────────────────────────────────

    // 340
    {
      question:
        "En *«Compré este libro para mi hermana»*, ¿cuál es la función de *«para mi hermana»*?",
      options: [
        "Complemento indirecto (destinataria)",
        "CC de finalidad",
        "CC de causa",
        "Complemento de régimen",
      ],
      correctAnswer: 0,
      explanation:
        "«para mi hermana» introduce un destinatario concreto de la compra. Prueba dativa: «Le compré este libro» ✓. Cuando «para» introduce un beneficiario de una transferencia, funciona como CI, no como CC de finalidad.",
    },
    // 341
    {
      question:
        "¿En cuál de las siguientes oraciones *«para»* introduce un **CC de finalidad** y NO un CI?",
      options: [
        "«Estudió toda la noche para aprobar el examen»",
        "«Trajo flores para su madre»",
        "«Le dejó una nota para el director»",
        "«Guardó el informe para la auditora»",
      ],
      correctAnswer: 0,
      explanation:
        "«para aprobar el examen» expresa un propósito (¿para qué?), no un destinatario. Prueba: *«Estudió **le** toda la noche»* ✗. En las otras opciones, «para» introduce un beneficiario real: son CI. La distinción clave es la sustitución por «le».",
    },
    // 342
    {
      question:
        "En *«El decano guardó los documentos para el abogado»*, *«para el abogado»* funciona como:",
      options: [
        "Complemento indirecto (beneficiario)",
        "CC de finalidad",
        "CC de modo",
        "Complemento de régimen",
      ],
      correctAnswer: 0,
      explanation:
        "Hay un beneficiario concreto. Prueba: «El decano **le** guardó los documentos» ✓. Si dijera «para protegerse legalmente», sería CC de finalidad porque no habría destinatario, sino un propósito abstracto.",
    },
    // 343
    {
      question:
        "*«Investigó durante años para publicar su hallazgo»*. La expresión *«para publicar su hallazgo»* es:",
      options: [
        "CC de finalidad (propósito de la investigación)",
        "Complemento indirecto",
        "Complemento directo",
        "Complemento de régimen",
      ],
      correctAnswer: 0,
      explanation:
        "«para publicar su hallazgo» responde a «¿para qué investigó?» y expresa un objetivo futuro. No hay destinatario: *«Investigó **le**»* ✗. El error frecuente es confundirlo con CI porque «para» puede introducir ambos.",
    },
    // 344
    {
      question:
        "La prueba más confiable para distinguir un **CI** de un **CC de finalidad** introducido por *«para»* es:",
      options: [
        "El CI puede sustituirse por «le/les»; el CC de finalidad, no",
        "El CI lleva «a» y el CC de finalidad lleva «para», sin excepción",
        "El CI puede omitirse; el CC no",
        "El CI acompaña verbos intransitivos; el CC acompaña transitivos",
      ],
      correctAnswer: 0,
      explanation:
        "«**Le** compré flores» (CI) ✓ vs. *«**Le** corrí para ganar»* ✗ (CC de finalidad). La sustitución por «le/les» es el criterio definitivo para identificar el CI, independientemente de la preposición que lo introduzca.",
    },

    // ── D. CC de modo vs CC de instrumento ───────────────────────────────────

    // 345
    {
      question:
        "¿Qué tipo de CC es *«con bisturí»* en *«El cirujano operó con bisturí»*?",
      options: [
        "CC de instrumento",
        "CC de modo",
        "CC de compañía",
        "Complemento de régimen",
      ],
      correctAnswer: 0,
      explanation:
        "«con bisturí» expresa el instrumento físico utilizado. Responde a «¿con qué (herramienta)?». Los CC de instrumento nombran un objeto concreto que sirve de medio para realizar la acción.",
    },
    // 346
    {
      question:
        "¿Qué tipo de CC es *«con precisión»* en *«El cirujano operó con precisión»*?",
      options: [
        "CC de modo",
        "CC de instrumento",
        "CC de compañía",
        "CC de causa",
      ],
      correctAnswer: 0,
      explanation:
        "«con precisión» describe cómo se realizó la acción; responde a «¿cómo?». No es un objeto físico sino una cualidad del modo de actuar. Aunque las dos oraciones usan «con», la diferencia está en si se nombra una herramienta o una manera.",
    },
    // 347
    {
      question:
        "¿Cuál de las siguientes expresiones funciona como **CC de instrumento**?",
      options: [
        "«analizaron los datos con un software especializado»",
        "«explicó el tema con claridad»",
        "«habló con entusiasmo»",
        "«trabajó con dedicación»",
      ],
      correctAnswer: 0,
      explanation:
        "«con un software especializado» nombra una herramienta concreta (instrumento). Las demás expresan una cualidad de la acción (claridad, entusiasmo, dedicación): son CC de modo. La clave: ¿es un objeto/herramienta o una cualidad abstracta?",
    },
    // 348
    {
      question:
        "En *«Resolvieron el conflicto mediante el diálogo»*, *«mediante el diálogo»* es:",
      options: [
        "CC de instrumento / medio",
        "CC de modo",
        "CC de causa",
        "Complemento de régimen",
      ],
      correctAnswer: 0,
      explanation:
        "«mediante el diálogo» indica el medio empleado (¿a través de qué?). Aunque «diálogo» no es un objeto físico, funciona como instrumento en sentido amplio. Se distingue del CC de modo porque expresa el canal o medio de la acción, no la manera subjetiva de realizarla.",
    },
    // 349
    {
      question:
        "¿En cuál de las siguientes oraciones hay un **CC de modo** y NO de instrumento?",
      options: [
        "«El orador expuso sus ideas con serenidad»",
        "«Cortaron el césped con una podadora eléctrica»",
        "«Transmitieron la señal mediante satélite»",
        "«Escribió el poema con una pluma antigua»",
      ],
      correctAnswer: 0,
      explanation:
        "«con serenidad» describe la manera de actuar (¿cómo?): CC de modo. Las otras opciones nombran herramientas o medios concretos (podadora, satélite, pluma): CC de instrumento.",
    },

    // ── E. CC de causa vs CC de finalidad ────────────────────────────────────

    // 350
    {
      question:
        "¿Qué tipo de CC es *«por el nerviosismo»* en *«Cometió errores por el nerviosismo»*?",
      options: [
        "CC de causa",
        "CC de finalidad",
        "CC de modo",
        "CC de instrumento",
      ],
      correctAnswer: 0,
      explanation:
        "«por el nerviosismo» expresa la razón que ya existía y provocó los errores (¿por qué?). La **causa** señala algo previo o simultáneo que origina la acción; la **finalidad** señala un objetivo futuro que la motiva.",
    },
    // 351
    {
      question:
        "¿Qué tipo de CC es *«para aprobar el examen»* en *«Estudió toda la noche para aprobar el examen»*?",
      options: [
        "CC de finalidad",
        "CC de causa",
        "CC de modo",
        "Complemento indirecto",
      ],
      correctAnswer: 0,
      explanation:
        "«para aprobar el examen» expresa el objetivo futuro que motivó el estudio (¿para qué?). La finalidad señala algo que aún no ha ocurrido; la causa señala algo que ya ocurrió y provocó la acción.",
    },
    // 352
    {
      question: "¿En cuál de las siguientes oraciones hay un **CC de causa**?",
      options: [
        "«Suspendieron la clase debido a la tormenta»",
        "«Suspendieron la clase para descansar»",
        "«Suspendieron la clase con rapidez»",
        "«Suspendieron la clase a medianoche»",
      ],
      correctAnswer: 0,
      explanation:
        "«debido a la tormenta» señala lo que provocó la suspensión (causa preexistente). «para descansar» sería finalidad; «con rapidez» sería modo; «a medianoche» sería tiempo.",
    },
    // 353
    {
      question:
        "La diferencia clave entre **CC de causa** y **CC de finalidad** es:",
      options: [
        "La causa alude a algo previo que provoca la acción; la finalidad alude a un objetivo futuro que la motiva",
        "La causa siempre usa «por» y la finalidad siempre usa «para», sin excepción",
        "La causa modifica al sujeto; la finalidad modifica al verbo",
        "No existe diferencia gramatical real entre ambos",
      ],
      correctAnswer: 0,
      explanation:
        "«Salió **por** la lluvia» (la lluvia ya ocurría: causa) vs. «Salió **para** comprar pan» (la compra es el objetivo futuro: finalidad). Además, «por» puede introducir finalidad: «Lo hizo **por** mejorar», por lo que la preposición sola no es criterio suficiente.",
    },
    // 354
    {
      question:
        "En *«Se esforzó mucho por obtener el primer lugar»*, *«por obtener el primer lugar»* es:",
      options: [
        "CC de finalidad",
        "CC de causa",
        "CC de modo",
        "Complemento de régimen",
      ],
      correctAnswer: 0,
      explanation:
        "Aunque lleva «por», expresa un objetivo futuro que motivó el esfuerzo (¿para qué?). «Por» + infinitivo puede expresar finalidad. No hay causa preexistente: es finalidad. El error frecuente es clasificarlo como causa solo por la preposición.",
    },

    // ── F. CR vs CC ───────────────────────────────────────────────────────────

    // 355
    {
      question:
        "En *«Habló sobre el cambio climático durante una hora»*, ¿cuál es el **complemento de régimen**?",
      options: [
        '"sobre el cambio climático"',
        '"durante una hora"',
        '"Habló"',
        '"el cambio climático"',
      ],
      correctAnswer: 0,
      explanation:
        "«sobre el cambio climático» es el CR: «hablar» exige un complemento temático con «de»/«sobre». Sin él, «Habló» resulta incompleto. «durante una hora» es CC de tiempo: su preposición es opcional e intercambiable.",
    },
    // 356
    {
      question:
        "¿En cuál de las siguientes oraciones el sintagma preposicional es **complemento de régimen** y NO CC?",
      options: [
        "«El alumno carece de motivación»",
        "«El alumno estudia en la biblioteca»",
        "«El alumno llegó por la tarde»",
        "«El alumno trabaja con esfuerzo»",
      ],
      correctAnswer: 0,
      explanation:
        "«carecer» exige obligatoriamente «de»; sin él, la oración es agramatical: *«El alumno carece»* ✗. En las demás, las preposiciones son opcionales o intercambiables: CC de lugar, tiempo y modo respectivamente.",
    },
    // 357
    {
      question:
        "La prueba definitiva para saber si un sintagma preposicional es **CR** y no CC es:",
      options: [
        "Verificar si la preposición es obligatoria e insustituible para ese verbo específico",
        "Comprobar si la preposición es «de» o «en»",
        "Comprobar si el sintagma puede moverse al inicio de la oración",
        "Intentar sustituirlo por «lo/la»",
      ],
      correctAnswer: 0,
      explanation:
        "Si cambiar o eliminar la preposición hace agramatical o altera el sentido del verbo, es CR. «Depende **de** ti» → *«Depende **en** ti»* ✗. Si la preposición puede cambiarse o eliminarse sin problema, es CC.",
    },
    // 358
    {
      question:
        "En *«Llegó tarde por el tráfico»*, ¿*«por el tráfico»* es CR o CC?",
      options: [
        "CC de causa (la preposición es opcional e intercambiable)",
        "CR porque «llegar» exige «por»",
        "CR porque no puede sustituirse por «lo»",
        "CC de modo",
      ],
      correctAnswer: 0,
      explanation:
        "«Llegar» no rige ninguna preposición fija. «por el tráfico» puede reemplazarse por «debido al tráfico» o «a causa del tráfico», o simplemente omitirse. Es CC de causa. El error es confundir CC con CR solo porque ambos son sintagmas preposicionales.",
    },
    // 359
    {
      question:
        "¿En cuál de las siguientes oraciones hay **complemento de régimen**?",
      options: [
        "«El comité se encargó de revisar los expedientes»",
        "«El comité trabajó por las mañanas»",
        "«El comité sesionó en el auditorio»",
        "«El comité actuó con rapidez»",
      ],
      correctAnswer: 0,
      explanation:
        "«encargarse» rige obligatoriamente «de»: *«El comité se encargó»* resulta incompleto ✗. En las demás, las preposiciones son opcionales o intercambiables: CC de tiempo, lugar y modo respectivamente.",
    },

    // ── G. Predicativo del sujeto vs atributo ────────────────────────────────

    // 360
    {
      question:
        "¿En cuál de las siguientes oraciones el adjetivo es **atributo** y NO predicativo del sujeto?",
      options: [
        "«El resultado del experimento fue sorprendente»",
        "«El equipo regresó desanimado»",
        "«Los investigadores llegaron exhaustos»",
        "«La candidata se presentó segura»",
      ],
      correctAnswer: 0,
      explanation:
        "«fue sorprendente» usa el verbo copulativo «ser»: es atributo. En las demás, «regresar», «llegar» y «presentarse» son verbos no copulativos: el adjetivo es predicativo del sujeto. La clave: verbo copulativo → atributo; verbo no copulativo → predicativo.",
    },
    // 361
    {
      question:
        "En *«El acusado salió libre del juicio»*, ¿cuál es la función de *«libre»*?",
      options: [
        "Predicativo del sujeto",
        "Atributo",
        "Modificador directo del sujeto",
        "CC de modo",
      ],
      correctAnswer: 0,
      explanation:
        "«libre» es predicativo del sujeto: acompaña al verbo no copulativo «salir» y modifica simultáneamente al sujeto «El acusado» y a la acción verbal. No es atributo (requeriría verbo copulativo) ni MD (no está dentro del SN sujeto).",
    },
    // 362
    {
      question:
        "La diferencia entre *«El director está preocupado»* y *«El director llegó preocupado»* es:",
      options: [
        "En la primera, «preocupado» es atributo (verbo copulativo «estar»); en la segunda, es predicativo del sujeto (verbo no copulativo «llegar»)",
        "En ambas, «preocupado» es atributo",
        "En ambas, «preocupado» es predicativo",
        "En la primera es predicativo y en la segunda es atributo",
      ],
      correctAnswer: 0,
      explanation:
        "«Estar» es verbo copulativo: forma predicado nominal con atributo. «Llegar» es verbo no copulativo: el adjetivo que lo acompaña es predicativo del sujeto. Esta distinción es uno de los errores más frecuentes en el examen UNAM.",
    },
    // 363
    {
      question:
        "En *«La comunidad quedó devastada tras el huracán»*, ¿cuál es la función de *«devastada»*?",
      options: [
        "Atributo (verbo copulativo «quedar» + adjetivo)",
        "Predicativo del sujeto",
        "Modificador directo",
        "CC de modo",
      ],
      correctAnswer: 0,
      explanation:
        "«Quedar» + adjetivo/participio funciona como verbo copulativo. «devastada» es el atributo. El error más frecuente es clasificar «quedó devastada» como predicativo porque «quedar» *no parece* ser ni «ser» ni «estar».",
    },
    // 364
    {
      question:
        "¿En cuál de las siguientes oraciones hay **predicativo del sujeto** (y NO atributo)?",
      options: [
        "«Los delegados regresaron convencidos tras el debate»",
        "«Los delegados resultaron convencidos»",
        "«Los delegados parecían convencidos»",
        "«Los delegados estaban convencidos»",
      ],
      correctAnswer: 0,
      explanation:
        "«regresaron» es verbo no copulativo: «convencidos» es predicativo del sujeto. En las demás, «resultar», «parecer» y «estar» son verbos copulativos: «convencidos» es atributo.",
    },

    // ── H. Predicativo del objeto vs CD ──────────────────────────────────────

    // 365
    {
      question:
        "En *«Nombraron secretario al subdirector»*, ¿cuál es el CD y cuál es el predicativo del objeto?",
      options: [
        'CD = "al subdirector"; predicativo = "secretario"',
        'CD = "secretario"; predicativo = "al subdirector"',
        "Ambos son CD",
        "No hay CD, solo predicativo",
      ],
      correctAnswer: 0,
      explanation:
        "«al subdirector» es el CD (prueba: «Lo nombraron secretario»). «secretario» es el predicativo del objeto: expresa el cargo en que queda el OD. El error es tomar «secretario» como CD porque «suena» al objeto de la acción.",
    },
    // 366
    {
      question:
        "En *«El tribunal declaró culpable al imputado»*, ¿qué función cumple *«culpable»*?",
      options: [
        "Predicativo del objeto directo",
        "Complemento directo",
        "Atributo",
        "Modificador directo del CD",
      ],
      correctAnswer: 0,
      explanation:
        "«culpable» es predicativo del OD «al imputado». No puede sustituirse por «lo»: *«El tribunal lo declaró»* solo funciona si «lo» sustituye al imputado, no a «culpable». El predicativo del objeto no es el CD: es el adjetivo que predica algo del OD.",
    },
    // 367
    {
      question:
        "¿Cuál de las siguientes oraciones tiene **predicativo del objeto directo**?",
      options: [
        "«Eligieron representante a la delegada más votada»",
        "«Presentaron a la delegada más votada en el acto»",
        "«Invitaron a la delegada a la reunión»",
        "«La delegada resultó la más votada»",
      ],
      correctAnswer: 0,
      explanation:
        "«representante» es el predicativo del OD «a la delegada más votada». En la segunda, no hay predicativo del objeto. En la tercera, «a la reunión» es CC de lugar. En la cuarta, «la más votada» es atributo (verbo copulativo «resultar»).",
    },
    // 368
    {
      question:
        "La prueba para distinguir el **predicativo del objeto** del **CD** es:",
      options: [
        "El CD se sustituye por «lo/la»; el predicativo del objeto, no",
        "El CD lleva preposición; el predicativo no",
        "El CD es siempre un sustantivo; el predicativo es siempre un adjetivo",
        "No existe prueba para distinguirlos",
      ],
      correctAnswer: 0,
      explanation:
        "En «La nombraron **directora**»: «la» sustituye el OD («a ella»); «directora» es el predicativo y no puede sustituirse por ningún pronombre acusativo. Si puedes sustituir el sintagma por «lo/la», es CD; si no, es predicativo del objeto.",
    },
    // 369
    {
      question:
        "En *«Consideraron excelente la propuesta del equipo»*, ¿qué función cumple *«excelente»*?",
      options: [
        "Predicativo del objeto directo «la propuesta del equipo»",
        "Complemento directo",
        "Atributo del sujeto",
        "Modificador directo de «propuesta»",
      ],
      correctAnswer: 0,
      explanation:
        "«excelente» es el predicativo del OD «la propuesta del equipo». Prueba: «La consideraron excelente» (donde «la» sustituye a «la propuesta»). «excelente» no puede sustituirse por «lo»: *«Consideraron lo la propuesta»* ✗.",
    },

    // ── I. CA vs CC de modo con «por» ─────────────────────────────────────────

    // 370
    {
      question:
        "En *«La propuesta fue rechazada por unanimidad por el consejo»*, ¿cuál es el **complemento agente**?",
      options: [
        '"por el consejo"',
        '"por unanimidad"',
        '"La propuesta"',
        '"fue rechazada"',
      ],
      correctAnswer: 0,
      explanation:
        "«por el consejo» señala al agente que realizó la acción (el consejo rechazó). «por unanimidad» es un CC de modo (¿cómo se rechazó?). Ambos usan «por», pero solo uno indica el agente de la pasiva.",
    },
    // 371
    {
      question:
        "¿Cuál de los siguientes es **complemento agente** y no CC de modo?",
      options: [
        "«por el comité técnico» en «El proyecto fue aprobado por el comité técnico»",
        "«por mayoría» en «El proyecto fue aprobado por mayoría»",
        "«por escrito» en «La solicitud fue presentada por escrito»",
        "«por sorpresa» en «El ganador fue anunciado por sorpresa»",
      ],
      correctAnswer: 0,
      explanation:
        "«por el comité técnico» indica quién realizó la acción en la pasiva: CA. Prueba de transformación activa: «El comité técnico aprobó el proyecto». Las otras expresan el modo (¿cómo?): «por mayoría», «por escrito», «por sorpresa» son CC de modo.",
    },
    // 372
    {
      question:
        "La prueba para distinguir el **CA** de un **CC de modo** con *«por»* es:",
      options: [
        "El CA puede transformarse en sujeto al convertir la pasiva en activa; el CC de modo, no",
        "El CA siempre va al final de la oración; el CC de modo va al inicio",
        "El CA lleva artículo definido; el CC no",
        "No existe diferencia gramatical entre ambos",
      ],
      correctAnswer: 0,
      explanation:
        "«Fue aprobado **por el rector**» → «**El rector** lo aprobó» (CA → sujeto activo) ✓. «Fue aprobado **por aclamación**» → *«**La aclamación** lo aprobó»* ✗. El CC de modo no puede convertirse en sujeto de una oración activa con sentido equivalente.",
    },
    // 373
    {
      question:
        "En *«El acuerdo fue firmado en secreto por los ministros»*, ¿cuál es el **CA**?",
      options: [
        '"por los ministros"',
        '"en secreto"',
        '"El acuerdo"',
        '"en secreto por los ministros"',
      ],
      correctAnswer: 0,
      explanation:
        "«por los ministros» es el CA (señala al agente). «en secreto» es un CC de modo. Prueba de transformación activa: «Los ministros firmaron el acuerdo en secreto».",
    },
    // 374
    {
      question:
        "En *«El resultado fue anunciado por sorpresa»*, ¿hay complemento agente?",
      options: [
        "No; «por sorpresa» es un CC de modo",
        "Sí; «por sorpresa» es el CA",
        "Sí; «El resultado» es el CA",
        "Sí; el CA está implícito en «fue anunciado»",
      ],
      correctAnswer: 0,
      explanation:
        "«por sorpresa» describe la manera del anuncio (¿cómo?), no quién lo realizó. Para que haya CA, debe haber un referente animado o institucional que pueda transformarse en sujeto activo: *«La sorpresa anunció el resultado»* ✗ no tiene sentido.",
    },

    // ── J. Varios complementos simultáneos ───────────────────────────────────

    // 375
    {
      question:
        "En *«El rector entregó los diplomas a los egresados en el auditorio ayer»*, ¿cuál es el **CD**?",
      options: [
        '"los diplomas"',
        '"a los egresados"',
        '"en el auditorio"',
        '"ayer"',
      ],
      correctAnswer: 0,
      explanation:
        "«los diplomas» es el CD (prueba: «El rector **los** entregó»). «a los egresados» es CI; «en el auditorio» es CC de lugar; «ayer» es CC de tiempo. La oración tiene cuatro complementos distintos: CD, CI y dos CC.",
    },
    // 376
    {
      question:
        "En la misma oración *«El rector entregó los diplomas a los egresados en el auditorio ayer»*, ¿cuál es el **CI**?",
      options: [
        '"a los egresados"',
        '"los diplomas"',
        '"en el auditorio"',
        '"ayer"',
      ],
      correctAnswer: 0,
      explanation:
        "«a los egresados» es el CI (prueba: «El rector **les** entregó los diplomas»). «los diplomas» es CD; «en el auditorio» es CC de lugar; «ayer» es CC de tiempo.",
    },
    // 377
    {
      question:
        "En *«El gobierno asignó recursos a las universidades por decreto este año»*, ¿cuántos **CC** hay y de qué tipo son?",
      options: [
        "Dos CC: «por decreto» (modo) y «este año» (tiempo)",
        "Un CC: «por decreto» (modo)",
        "Tres CC: «a las universidades», «por decreto» y «este año»",
        "Ningún CC",
      ],
      correctAnswer: 0,
      explanation:
        "«por decreto» describe el modo de la asignación (¿cómo?); «este año» ubica temporalmente la acción (¿cuándo?). «a las universidades» es el CI y «recursos» es el CD. El error más común es confundir el CI con un CC.",
    },
    // 378
    {
      question:
        "En *«A los investigadores les otorgaron el premio en el extranjero»*, ¿cuál es el **sujeto**?",
      options: [
        "Sujeto tácito (ellos/ellas); la oración tiene orden no canónico",
        "«A los investigadores»",
        "«el premio»",
        "«en el extranjero»",
      ],
      correctAnswer: 0,
      explanation:
        "La oración tiene orden invertido. «A los investigadores» es el CI (duplicado por «les»). «el premio» es el CD. «en el extranjero» es CC de lugar. El sujeto «ellos/ellas» es tácito: se recupera de la desinencia «-aron». El error más frecuente es tomar el primer sintagma como sujeto.",
    },
    // 379
    {
      question:
        "En *«Ayer le enviaron al director un informe confidencial desde la capital»*, identifica todos los complementos:",
      options: [
        "CI = «al director»; CD = «un informe confidencial»; CC de tiempo = «Ayer»; CC de lugar = «desde la capital»",
        "CD = «al director»; CI = «un informe confidencial»; sin CC",
        "Solo hay CD y CC de tiempo",
        "CI = «al director»; CD = «un informe confidencial»; solo un CC: «desde la capital»",
      ],
      correctAnswer: 0,
      explanation:
        "«le» duplica el CI «al director». «un informe confidencial» es el CD (prueba: «lo enviaron»). «Ayer» es CC de tiempo y «desde la capital» es CC de lugar. El sujeto «ellos/ellas» es tácito. La opción correcta requiere identificar los cuatro complementos sin confundirlos.",
    },
  ],
};
