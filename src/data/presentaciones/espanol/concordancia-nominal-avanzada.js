// Datos de la presentación: Concordancia Nominal — Nivel EXANI-II
// Casos avanzados y discutibles de concordancia en el grupo nominal.
// Asume dominio de las reglas básicas (ver "concordancia-nominal").

export const PRESENTACION = {
  id: "concordancia-nominal-avanzada",
  titulo: "Concordancia Nominal · Avanzada",
  materia: "Español",
  slides: [
    // ── Portada ──────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Concordancia Nominal · Avanzada",
      subtitulo: "Casos límite y ambigüedades — EXANI-II",
      etiqueta: "Español · Redacción · Nivel universitario"
    },

    // ── Caso 1: Concordancia ad sensum (sílepsis) ────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Caso 1 / 6",
      titulo: "Concordancia ad sensum (sílepsis)",
      bloques: [
        {
          tipo: "texto",
          texto: "La sílepsis es la concordancia con el significado y no con la forma gramatical. Con sustantivos colectivos seguidos de complemento plural, la norma admite ambas concordancias, pero el EXANI-II suele exigir la GRAMATICAL (con el núcleo singular) en textos formales y penaliza la ad sensum cuando produce un quiebre dentro de la misma oración."
        },
        {
          tipo: "tabla",
          titulo: "Gramatical vs. ad sensum",
          columnas: ["Construcción", "✓ Formal (gramatical)", "△ Ad sensum (coloquial)"],
          filas: [
            { tiempo: "un grupo de alumnos", correcto: "estaba inquieto", error: "estaban inquietos" },
            { tiempo: "la mitad del jurado", correcto: "se mostró a favor", error: "se mostraron a favor" },
            { tiempo: "el 30 % de la muestra", correcto: "fue analizado", error: "fueron analizados" },
            { tiempo: "infinidad de personas", correcto: "acudió", error: "acudieron (admitido)" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "incoherencia interna — el error que más penaliza",
          correcto: "El alumnado, consciente de sus derechos, los defendió con firmeza.",
          incorrecto: "El alumnado, consciente de sus derechos, los defendieron con firmeza."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "No mezcles las dos concordancias dentro de la misma oración",
          correcto: "La mayoría aceptó la propuesta y la respaldó por escrito. (singular coherente)",
          incorrecto: "La mayoría aceptó la propuesta y la respaldaron por escrito. (quiebre singular→plural)"
        }
      ]
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Caso 1",
      pregunta: "«El 40 % de los encuestados __ que la reforma resultaba insuficiente, según el informe.»",
      opciones: ["consideraron", "consideró", "consideraban"],
      correcta: 1,
      explicacion: "«consideró» — con «el X % de…» el EXANI-II prefiere la concordancia gramatical con el núcleo singular «el 40 %». La forma plural se admite, pero la registrada como correcta en contextos formales es la singular.",
      pasos: []
    },
    {
      id: 3,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Caso 1",
      pregunta: "«El profesorado expresó su inconformidad y __ a la asamblea convocada para el viernes.»",
      opciones: ["asistió", "asistieron", "asistimos"],
      correcta: 0,
      explicacion: "«asistió» — al haber elegido el singular en «expresó», la coherencia obliga a mantenerlo: «asistió». Cambiar a plural produciría una sílepsis incoherente dentro de la misma oración.",
      pasos: []
    },
    {
      id: 100,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Caso 1",
      pregunta: "«Un grupo de manifestantes __ frente al palacio de gobierno durante toda la tarde.»",
      opciones: ["permaneció", "permanecieron", "permanecían"],
      correcta: 0,
      explicacion: "«permaneció» — el núcleo es «un grupo» (singular). El EXANI-II prefiere la concordancia gramatical en registro formal.",
      pasos: []
    },
    {
      id: 101,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Caso 1",
      pregunta: "«El equipo directivo evaluó la propuesta y __ su rechazo por unanimidad.»",
      opciones: ["comunicó", "comunicaron", "comunicaba"],
      correcta: 0,
      explicacion: "«comunicó» — al haber empezado con singular («evaluó»), la coherencia obliga a mantener el singular. Cambiar a plural sería una sílepsis incoherente.",
      pasos: []
    },
    {
      id: 102,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Caso 1",
      pregunta: "«El 25 % de la población encuestada __ desconfianza hacia las instituciones públicas.»",
      opciones: ["manifestó", "manifestaron", "manifiestan"],
      correcta: 0,
      explicacion: "«manifestó» — con «el X % de…» (núcleo singular determinado), el EXANI-II registra como correcta la concordancia gramatical en singular.",
      pasos: []
    },

    // ── Caso 2: Doble adjetivo a un sustantivo plural ────────────────────────
    {
      id: 4,
      tipo: "regla_rica",
      etiqueta: "Caso 2 / 6",
      titulo: "Un sustantivo plural con dos adjetivos singulares",
      bloques: [
        {
          tipo: "texto",
          texto: "Cuando un sustantivo plural designa realidades distintas repartidas entre adjetivos singulares, el sustantivo va en plural pero cada adjetivo en singular: «las lenguas española y portuguesa». Es una estructura culta frecuente en textos académicos del EXANI-II."
        },
        {
          tipo: "par",
          etiqueta: "sustantivo plural, adjetivos singulares distributivos",
          correcto: "Las literaturas medieval y renacentista comparten ciertos motivos alegóricos.",
          incorrecto: "Las literaturas medievales y renacentistas comparten ciertos motivos alegóricos."
        },
        {
          tipo: "par",
          etiqueta: "alternativa con sustantivo singular repetido",
          correcto: "La literatura medieval y la renacentista comparten motivos alegóricos.",
          incorrecto: "La literatura medieval y renacentista comparten motivos alegóricos. (un solo artículo, ambigua)"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Si los adjetivos nombran entidades separadas, van en singular pese al sustantivo plural",
          correcto: "Los siglos diecinueve y veinte concentran las grandes revoluciones industriales.",
          incorrecto: "Los siglos diecinueve y veinte concentran… → «los siglos diecinueves» es agramatical"
        }
      ]
    },
    {
      id: 5,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Caso 2",
      pregunta: "«Se compararon las economías __ y __ durante el periodo de posguerra.» (alemana, japonesa)",
      opciones: ["alemanas / japonesas", "alemana / japonesa", "alemán / japonés"],
      correcta: 1,
      explicacion: "«alemana / japonesa» — el sustantivo va en plural («las economías»), pero cada adjetivo, al designar una entidad distinta, permanece en singular.",
      pasos: []
    },
    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Caso 2",
      pregunta: "«El tratado afectó a los gobiernos __ y __ por igual.» (mexicano, canadiense)",
      opciones: ["mexicano / canadiense", "mexicanos / canadienses", "mexicana / canadiense"],
      correcta: 0,
      explicacion: "«mexicano / canadiense» — distributivos en singular sobre un sustantivo plural; cada adjetivo identifica un gobierno distinto.",
      pasos: []
    },
    {
      id: 103,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Caso 2",
      pregunta: "«Se firmaron los acuerdos __ y __ en una misma ceremonia.» (comercial, cultural)",
      opciones: ["comerciales / culturales", "comercial / cultural", "comercial / culturales"],
      correcta: 1,
      explicacion: "«comercial / cultural» — el sustantivo va en plural («los acuerdos»), pero cada adjetivo nombra una entidad distinta y queda en singular.",
      pasos: []
    },
    {
      id: 104,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Caso 2",
      pregunta: "«Las selecciones __ y __ disputarán la final del torneo continental.» (brasileña, argentina)",
      opciones: ["brasileña / argentina", "brasileñas / argentinas", "brasileña / argentinas"],
      correcta: 0,
      explicacion: "«brasileña / argentina» — sobre el sustantivo plural «las selecciones», cada adjetivo distributivo permanece en singular.",
      pasos: []
    },
    {
      id: 105,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Caso 2",
      pregunta: "«Los partidos __ y __ acordaron una alianza parlamentaria inédita.» (conservador, liberal)",
      opciones: ["conservadores / liberales", "conservador / liberal", "conservador / liberales"],
      correcta: 1,
      explicacion: "«conservador / liberal» — el sustantivo es plural («los partidos»), pero cada adjetivo identifica un partido distinto → singular.",
      pasos: []
    },

    // ── Caso 3: Concordancia en la aposición explicativa ─────────────────────
    {
      id: 7,
      tipo: "regla_rica",
      etiqueta: "Caso 3 / 6",
      titulo: "Aposición explicativa y predicativos lejanos",
      bloques: [
        {
          tipo: "texto",
          texto: "En oraciones largas con aposiciones, incisos y complementos intercalados, el adjetivo o participio debe concordar con su verdadero referente, no con el sustantivo más próximo. El EXANI-II explota esta distancia para inducir la concordancia por proximidad (error de atracción)."
        },
        {
          tipo: "par",
          etiqueta: "predicativo separado de su sujeto por un inciso largo",
          correcto: "La autora, junto con varios colaboradores del instituto, fue galardonada en Madrid.",
          incorrecto: "La autora, junto con varios colaboradores del instituto, fue galardonado en Madrid."
        },
        {
          tipo: "par",
          etiqueta: "atracción por el complemento del nombre",
          correcto: "El conjunto de reformas estructurales aprobado por el congreso entró en vigor.",
          incorrecto: "El conjunto de reformas estructurales aprobadas por el congreso entró en vigor. (si «aprobado» modifica a «conjunto»)"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Identifica a quién modifica el participio: el sentido decide la concordancia",
          correcto: "Una serie de documentos clasificados fue entregada al tribunal. (fue ↔ serie)",
          incorrecto: "Una serie de documentos clasificados fueron entregada al tribunal."
        }
      ]
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Caso 3",
      pregunta: "«La rectora, acompañada de los miembros del patronato, fue __ por la comunidad universitaria.»",
      opciones: ["recibido", "recibida", "recibidos"],
      correcta: 1,
      explicacion: "«recibida» — el participio concuerda con el sujeto «la rectora» (fem. sing.); el inciso «acompañada de los miembros…» no altera la concordancia.",
      pasos: []
    },
    {
      id: 9,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Caso 3",
      pregunta: "«Un repertorio de obras poco difundidas fue __ por la crítica especializada del momento.»",
      opciones: ["valorado", "valoradas", "valorada"],
      correcta: 0,
      explicacion: "«valorado» — el participio concuerda con el núcleo del sujeto «un repertorio» (masc. sing.), no con «obras». La distancia busca inducir el error de atracción.",
      pasos: []
    },
    {
      id: 106,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Caso 3",
      pregunta: "«El director, junto con sus asesores, fue __ por la prensa al salir del recinto.»",
      opciones: ["abordado", "abordada", "abordados"],
      correcta: 0,
      explicacion: "«abordado» — el participio concuerda con el sujeto «el director» (masc. sing.); «junto con sus asesores» es un inciso que no suma sujetos.",
      pasos: []
    },
    {
      id: 107,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Caso 3",
      pregunta: "«Una colección de manuscritos antiguos fue __ al archivo nacional el año pasado.»",
      opciones: ["donado", "donada", "donados"],
      correcta: 1,
      explicacion: "«donada» — el participio concuerda con el núcleo «una colección» (fem. sing.), no con «manuscritos». Es un error de atracción frecuente.",
      pasos: []
    },
    {
      id: 108,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Caso 3",
      pregunta: "«La ministra, acompañada de varios diputados, se mostró __ ante los medios.»",
      opciones: ["cauteloso", "cautelosa", "cautelosos"],
      correcta: 1,
      explicacion: "«cautelosa» — el predicativo concuerda con el sujeto «la ministra» (fem. sing.); el inciso intercalado no altera la concordancia.",
      pasos: []
    },

    // ── Caso 4: Títulos, cargos y tratamientos ───────────────────────────────
    {
      id: 10,
      tipo: "regla_rica",
      etiqueta: "Caso 4 / 6",
      titulo: "Tratamientos: «Su Señoría», «Vuestra Excelencia»",
      bloques: [
        {
          tipo: "texto",
          texto: "Las fórmulas de tratamiento con sustantivo femenino (Su Señoría, Vuestra Excelencia, Su Majestad) son femeninas gramaticalmente, pero el adjetivo o participio que se refiere a la persona concuerda con su sexo real, no con la fórmula. Es un caso clásico de discordancia aparente."
        },
        {
          tipo: "tabla",
          titulo: "Tratamiento femenino, referente variable",
          columnas: ["Fórmula", "Determinante", "Adjetivo (según la persona)"],
          filas: [
            { tiempo: "Su Majestad", correcto: "concuerda en fem.", error: "el rey: «está cansado»" },
            { tiempo: "Vuestra Excelencia", correcto: "concuerda en fem.", error: "un hombre: «sea tan amable… está obligado»" },
            { tiempo: "Su Señoría", correcto: "concuerda en fem.", error: "un juez: «se ha mostrado prudente»" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "fórmula femenina, persona masculina",
          correcto: "Su Majestad se mostró satisfecho con la recepción ofrecida en su honor.",
          incorrecto: "Su Majestad se mostró satisfecha con la recepción, refiriéndose al rey."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "El verbo va en 3.ª persona; el adjetivo sigue el sexo del referente",
          correcto: "Vuestra Excelencia será recibido por el comité a las nueve. (referente: un señor)",
          incorrecto: "Vuestra Excelencia seréis recibido por el comité a las nueve."
        }
      ]
    },
    {
      id: 11,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Caso 4",
      pregunta: "«Su Señoría se declaró __ con el fallo, según consignó el acta de la audiencia.» (el magistrado)",
      opciones: ["conforme", "conforma", "conformes"],
      correcta: 0,
      explicacion: "«conforme» — adjetivo de una terminación (vale para ambos géneros) en singular; concuerda con el referente individual. La forma «conforma» no existe como adjetivo.",
      pasos: []
    },
    {
      id: 12,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Caso 4",
      pregunta: "«Su Majestad permaneció __ durante toda la ceremonia oficial.» (referente: la reina)",
      opciones: ["sentado", "sentada", "sentados"],
      correcta: 1,
      explicacion: "«sentada» — aunque «Su Majestad» es fórmula femenina, aquí el referente real es la reina, de modo que el adjetivo va en femenino singular y todo coincide.",
      pasos: []
    },
    {
      id: 109,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Caso 4",
      pregunta: "«Su Excelencia se mostró __ con los términos del acuerdo. (referente: el embajador)»",
      opciones: ["complacido", "complacida", "complacidos"],
      correcta: 0,
      explicacion: "«complacido» — aunque «Su Excelencia» es fórmula femenina, el adjetivo concuerda con el sexo del referente, un varón → masculino.",
      pasos: []
    },
    {
      id: 110,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Caso 4",
      pregunta: "«Su Majestad fue __ con honores militares a su llegada al país. (referente: la reina)»",
      opciones: ["recibido", "recibida", "recibidos"],
      correcta: 1,
      explicacion: "«recibida» — el referente es la reina, así que el participio va en femenino singular, en coincidencia con la fórmula.",
      pasos: []
    },
    {
      id: 111,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Caso 4",
      pregunta: "«Su Señoría permaneció __ durante la lectura de la sentencia. (referente: una jueza)»",
      opciones: ["impasible", "impasibles", "impasibla"],
      correcta: 0,
      explicacion: "«impasible» — adjetivo de una sola terminación (vale para ambos géneros) en singular; concuerda con el referente individual.",
      pasos: []
    },

    // ── Caso 5: Coordinación con «o», «ni», «tanto… como» ────────────────────
    {
      id: 13,
      tipo: "regla_rica",
      etiqueta: "Caso 5 / 6",
      titulo: "Adjetivo sobre sujetos con «o», «ni», «tanto… como»",
      bloques: [
        {
          tipo: "texto",
          texto: "Con «o» exclusiva el adjetivo puede ir en singular (se refiere a una de las opciones); con «ni… ni» y «tanto… como» que suman referentes, el adjetivo va en plural y, si hay géneros distintos, en masculino. El EXANI-II evalúa la distinción entre coordinación disyuntiva y aditiva."
        },
        {
          tipo: "tabla",
          titulo: "Nexo coordinante → número del adjetivo",
          columnas: ["Nexo", "Número del adjetivo", "Ejemplo"],
          filas: [
            { tiempo: "o (exclusiva)", correcto: "singular", error: "un error o una omisión imputable" },
            { tiempo: "ni… ni",        correcto: "plural",   error: "ni el texto ni la imagen resultaron claros" },
            { tiempo: "tanto… como",   correcto: "plural",   error: "tanto la teoría como el método son válidos" },
            { tiempo: "y",             correcto: "plural",   error: "el método y la técnica empleados" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "«ni… ni» con géneros distintos → masculino plural",
          correcto: "Ni el diagnóstico ni la propuesta presentados convencieron al comité.",
          incorrecto: "Ni el diagnóstico ni la propuesta presentada convencieron al comité."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "«tanto… como» suma referentes: el adjetivo va en plural",
          correcto: "Tanto la metodología como el corpus elegidos fueron pertinentes.",
          incorrecto: "Tanto la metodología como el corpus elegido fueron pertinentes."
        }
      ]
    },
    {
      id: 14,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Caso 5",
      pregunta: "«Ni la introducción ni el desarrollo __ por el revisor cumplían las normas de estilo.»",
      opciones: ["analizada", "analizados", "analizado"],
      correcta: 1,
      explicacion: "«analizados» — «ni… ni» suma dos referentes de distinto género (introducción/desarrollo) → adjetivo en masculino plural.",
      pasos: []
    },
    {
      id: 15,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Caso 5",
      pregunta: "«Tanto las fuentes primarias como el archivo consultado resultaron __ para la tesis.»",
      opciones: ["decisivo", "decisivos", "decisivas"],
      correcta: 1,
      explicacion: "«decisivos» — «tanto… como» suma referentes; al mezclarse femenino (fuentes) y masculino (archivo), el adjetivo va en masculino plural.",
      pasos: []
    },
    {
      id: 112,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Caso 5",
      pregunta: "«Ni la planeación ni la ejecución __ por la dirección resultaron adecuadas.»",
      opciones: ["supervisado", "supervisadas", "supervisados"],
      correcta: 1,
      explicacion: "«supervisadas» — «ni… ni» suma dos referentes femeninos (planeación, ejecución) → adjetivo en femenino plural.",
      pasos: []
    },
    {
      id: 113,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Caso 5",
      pregunta: "«Tanto el guion como la fotografía __ por la crítica fueron premiados en el festival.»",
      opciones: ["elogiado", "elogiados", "elogiadas"],
      correcta: 1,
      explicacion: "«elogiados» — «tanto… como» suma referentes de distinto género (guion/fotografía) → masculino plural.",
      pasos: []
    },
    {
      id: 114,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Caso 5",
      pregunta: "«Ni el aula ni el laboratorio __ cumplían las normas de seguridad vigentes.»",
      opciones: ["inspeccionado", "inspeccionados", "inspeccionadas"],
      correcta: 1,
      explicacion: "«inspeccionados» — «ni… ni» suma «aula» (femenino, con «el» de eufonía) y «laboratorio» (masculino); al mezclarse géneros, predomina el masculino plural.",
      pasos: []
    },

    // ── Caso 6: «medio», «mismo», «sendos» y cuantificadores cultos ──────────
    {
      id: 16,
      tipo: "regla_rica",
      etiqueta: "Caso 6 / 6",
      titulo: "«medio», «sendos», «ambos» y adverbios que parecen adjetivos",
      bloques: [
        {
          tipo: "texto",
          texto: "Algunas palabras tienen doble naturaleza: «medio» es adjetivo (concuerda: media hora) o adverbio (invariable: medio dormida). «Sendos» significa «uno cada uno» y es siempre plural. «Ambos» concuerda en género. Distinguir el uso adjetival del adverbial es trampa habitual del EXANI-II."
        },
        {
          tipo: "tabla",
          titulo: "Doble naturaleza: adjetivo vs. adverbio",
          columnas: ["Palabra", "Como adjetivo (concuerda)", "Como adverbio (invariable)"],
          filas: [
            { tiempo: "medio",  correcto: "media naranja",      error: "estaba medio dormida" },
            { tiempo: "puro",   correcto: "agua pura",          error: "lo hizo de puro miedo" },
            { tiempo: "solo",   correcto: "un café solo",       error: "solo quiero ayudar (adv.)" },
            { tiempo: "sendos", correcto: "recibieron sendos premios", error: "(siempre plural distributivo)" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "«medio» adverbial — invariable",
          correcto: "Las puertas quedaron medio abiertas tras la inspección.",
          incorrecto: "Las puertas quedaron medias abiertas tras la inspección."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "«sendos» = uno para cada uno; nunca significa «ambos» ni «grandes»",
          correcto: "Los dos finalistas firmaron sendos contratos con la editorial.",
          incorrecto: "El finalista firmó sendos contratos. (un solo sujeto: incorrecto)"
        }
      ]
    },
    {
      id: 17,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Caso 6",
      pregunta: "«Las delegaciones llegaron __ exhaustas tras una jornada de negociaciones interminables.»",
      opciones: ["medias", "medio", "media"],
      correcta: 1,
      explicacion: "«medio» — aquí modifica al adjetivo «exhaustas», funciona como adverbio y permanece invariable: «medio exhaustas».",
      pasos: []
    },
    {
      id: 18,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Caso 6",
      pregunta: "«Los dos ponentes presentaron __ trabajos sobre el mismo fenómeno migratorio.»",
      opciones: ["ambos", "sendos", "sendas"],
      correcta: 1,
      explicacion: "«sendos» — significa «uno cada uno» (un trabajo por ponente). «Ambos» significaría «los dos juntos» y no encaja con el sentido distributivo.",
      pasos: []
    },
    {
      id: 115,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Caso 6",
      pregunta: "«Los atletas cruzaron la meta __ desfallecidos por el esfuerzo de la jornada.»",
      opciones: ["medios", "medio", "media"],
      correcta: 1,
      explicacion: "«medio» — aquí modifica al adjetivo «desfallecidos», funciona como adverbio y permanece invariable.",
      pasos: []
    },
    {
      id: 116,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Caso 6",
      pregunta: "«Las dos instituciones suscribieron __ convenios de cooperación académica.»",
      opciones: ["ambos", "sendos", "sendas"],
      correcta: 1,
      explicacion: "«sendos» — significa «uno cada una» (un convenio por institución). Concuerda con «convenios» (masc. pl.).",
      pasos: []
    },
    {
      id: 117,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Caso 6",
      pregunta: "«Las ventanas quedaron __ entornadas tras la fuerte ráfaga de viento.»",
      opciones: ["medias", "medio", "media"],
      correcta: 1,
      explicacion: "«medio» — modifica al adjetivo «entornadas»; como adverbio es invariable, pese a que «ventanas» sea femenino plural.",
      pasos: []
    },

    // ── Resumen ──────────────────────────────────────────────────────────────
    {
      id: 19,
      tipo: "resumen",
      etiqueta: "Síntesis avanzada",
      titulo: "Concordancia nominal · casos EXANI-II",
      puntos: [
        { titulo: "Ad sensum", texto: "Prefiere la concordancia gramatical en textos formales; nunca mezcles singular y plural en la misma oración." },
        { titulo: "Adjetivos distributivos", texto: "Sustantivo plural + adjetivos singulares que nombran entidades distintas: «las lenguas española y portuguesa»." },
        { titulo: "Atracción", texto: "En oraciones largas, el participio concuerda con su referente, no con el sustantivo más cercano." },
        { titulo: "Tratamientos", texto: "Su Majestad / Su Señoría: el adjetivo sigue el sexo de la persona, no la fórmula femenina." },
        { titulo: "Coordinantes", texto: "«ni… ni» y «tanto… como» suman → plural (masc. si hay mezcla); «o» exclusiva admite singular." },
        { titulo: "Doble naturaleza", texto: "«medio/solo/puro» son invariables como adverbios; «sendos» es siempre distributivo plural." }
      ]
    }
  ]
};
