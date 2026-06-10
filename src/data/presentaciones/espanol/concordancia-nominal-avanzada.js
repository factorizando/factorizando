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
