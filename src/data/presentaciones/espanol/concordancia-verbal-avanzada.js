// Datos de la presentación: Concordancia Verbal — Nivel EXANI-II
// Casos avanzados y discutibles de concordancia sujeto-verbo.
// Asume dominio de las 24 reglas básicas (ver "concordancia-verbal").

export const PRESENTACION = {
  id: "concordancia-verbal-avanzada",
  titulo: "Concordancia Verbal · Avanzada",
  materia: "Español",
  slides: [
    // ── Portada ──────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Concordancia Verbal · Avanzada",
      subtitulo: "Casos límite y ambigüedades — EXANI-II",
      etiqueta: "Español · Redacción · Nivel universitario"
    },

    // ── Caso 1: Sujetos coordinados de distinta persona ──────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Caso 1 / 6",
      titulo: "Sujetos de distinta persona gramatical",
      bloques: [
        {
          tipo: "texto",
          texto: "Cuando se coordinan sujetos de distinta persona, el verbo va en plural y prevalece la persona de menor número: la 1.ª (yo/nosotros) gana a la 2.ª y a la 3.ª; la 2.ª (tú/vosotros) gana a la 3.ª. Es jerarquía obligatoria, no opcional."
        },
        {
          tipo: "tabla",
          titulo: "Jerarquía de personas (1.ª > 2.ª > 3.ª)",
          columnas: ["Sujetos coordinados", "Persona resultante", "Verbo"],
          filas: [
            { tiempo: "tú y yo",          correcto: "1.ª plural (nosotros)", error: "resolveremos" },
            { tiempo: "él y yo",           correcto: "1.ª plural (nosotros)", error: "viajaremos" },
            { tiempo: "tú y ella",         correcto: "2.ª plural (ustedes/vosotros)", error: "decidirán / decidiréis" },
            { tiempo: "ella, ustedes y yo", correcto: "1.ª plural (nosotros)", error: "presentaremos" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "3.ª + 1.ª → 1.ª plural",
          correcto: "El coordinador y yo revisaremos los expedientes esta semana.",
          incorrecto: "El coordinador y yo revisarán los expedientes esta semana."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "La 1.ª persona absorbe a las demás aunque aparezca al final",
          correcto: "Ni tú ni yo aceptaremos esas condiciones sin antes negociarlas.",
          incorrecto: "Ni tú ni yo aceptarán esas condiciones sin antes negociarlas."
        }
      ]
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Caso 1",
      pregunta: "«Tú y tus colegas __ el informe ante la dirección antes del cierre del semestre.»",
      opciones: ["presentarán", "presentaremos", "presentará"],
      correcta: 0,
      explicacion: "«presentarán» — «tú» (2.ª) + «tus colegas» (3.ª). La 2.ª prevalece sobre la 3.ª → 2.ª plural, que en el trato de «ustedes» se realiza como «presentarán».",
      pasos: []
    },
    {
      id: 3,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Caso 1",
      pregunta: "«Mi asesora y yo __ la metodología tras varias semanas de discusión teórica.»",
      opciones: ["definieron", "definimos", "definió"],
      correcta: 1,
      explicacion: "«definimos» — «mi asesora» (3.ª) + «yo» (1.ª). La 1.ª persona prevalece sobre la 3.ª → 1.ª plural: «nosotros definimos».",
      pasos: []
    },
    {
      id: 100,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Caso 1",
      pregunta: "«Mis compañeros y yo __ la exposición la próxima semana ante el comité.»",
      opciones: ["prepararán", "prepararemos", "preparará"],
      correcta: 1,
      explicacion: "«prepararemos» — «mis compañeros» (3.ª) + «yo» (1.ª). La 1.ª persona prevalece → 1.ª plural: «nosotros prepararemos».",
      pasos: []
    },
    {
      id: 101,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Caso 1",
      pregunta: "«Tú y tu hermano __ los encargados de organizar el evento escolar.»",
      opciones: ["serán", "serás", "seré"],
      correcta: 0,
      explicacion: "«serán» — «tú» (2.ª) + «tu hermano» (3.ª). La 2.ª prevalece sobre la 3.ª; en el trato de «ustedes» se realiza como «serán».",
      pasos: []
    },
    {
      id: 102,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Caso 1",
      pregunta: "«Ni ella ni yo __ dispuestos a renunciar al proyecto antes de tiempo.»",
      opciones: ["estaban", "estamos", "estábamos"],
      correcta: 1,
      explicacion: "«estamos» — «ella» (3.ª) + «yo» (1.ª). La 1.ª persona prevalece → 1.ª plural: «nosotros estamos».",
      pasos: []
    },

    // ── Caso 2: Pasiva refleja con «se» ──────────────────────────────────────
    {
      id: 4,
      tipo: "regla_rica",
      etiqueta: "Caso 2 / 6",
      titulo: "Pasiva refleja vs. impersonal con «se»",
      bloques: [
        {
          tipo: "texto",
          texto: "En la pasiva refleja («se + verbo + sustantivo»), el sustantivo es el sujeto gramatical y el verbo concuerda con él en número: «se venden casas». No confundir con la impersonal con «se» + complemento de persona introducido por «a», que siempre va en singular: «se entrevistó a los candidatos»."
        },
        {
          tipo: "tabla",
          titulo: "Refleja (concuerda) vs. impersonal (singular fijo)",
          columnas: ["Estructura", "Número del verbo", "Ejemplo"],
          filas: [
            { tiempo: "pasiva refleja (cosa)", correcto: "concuerda", error: "Se publicaron los resultados." },
            { tiempo: "pasiva refleja (sing.)", correcto: "singular",  error: "Se publicó el resultado." },
            { tiempo: "impersonal + «a» + pers.", correcto: "siempre singular", error: "Se premió a los ganadores." },
            { tiempo: "impersonal (sin sujeto)", correcto: "siempre singular", error: "Se vive bien aquí." }
          ]
        },
        {
          tipo: "par",
          etiqueta: "pasiva refleja — el verbo concuerda con el sujeto plural",
          correcto: "Se aprobaron las nuevas disposiciones en la última sesión ordinaria.",
          incorrecto: "Se aprobó las nuevas disposiciones en la última sesión ordinaria."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Con «a» ante persona es impersonal → singular, aunque el complemento sea plural",
          correcto: "Se entrevistó a los aspirantes seleccionados para el posgrado.",
          incorrecto: "Se entrevistaron a los aspirantes seleccionados para el posgrado."
        }
      ]
    },
    {
      id: 5,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Caso 2",
      pregunta: "«En la convocatoria __ requisitos muy estrictos para los aspirantes extranjeros.»",
      opciones: ["se estableció", "se establecieron", "se establecía"],
      correcta: 1,
      explicacion: "«se establecieron» — pasiva refleja: «requisitos» es el sujeto gramatical (plural), así que el verbo concuerda en plural.",
      pasos: []
    },
    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Caso 2",
      pregunta: "«Durante el proceso __ a los candidatos más destacados de cada región del país.»",
      opciones: ["se evaluaron", "se evaluó", "se evalúan"],
      correcta: 1,
      explicacion: "«se evaluó» — hay «a» ante complemento de persona → construcción impersonal, verbo en singular fijo, aunque «candidatos» sea plural.",
      pasos: []
    },
    {
      id: 103,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Caso 2",
      pregunta: "«En el comunicado __ las medidas que entrarán en vigor el próximo mes.»",
      opciones: ["se detalló", "se detallaron", "se detallaba"],
      correcta: 1,
      explicacion: "«se detallaron» — pasiva refleja: «las medidas» es el sujeto gramatical (plural), así que el verbo concuerda en plural.",
      pasos: []
    },
    {
      id: 104,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Caso 2",
      pregunta: "«Durante la jornada __ a los aspirantes provenientes de otros estados del país.»",
      opciones: ["se recibió", "se recibieron", "se reciben"],
      correcta: 0,
      explicacion: "«se recibió» — hay «a» ante complemento de persona → construcción impersonal: verbo en singular fijo, aunque «aspirantes» sea plural.",
      pasos: []
    },
    {
      id: 105,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Caso 2",
      pregunta: "«En la planta __ piezas de alta precisión para la industria aeronáutica.»",
      opciones: ["se fabrica", "se fabrican", "se fabricaba"],
      correcta: 1,
      explicacion: "«se fabrican» — pasiva refleja: «piezas» es el sujeto gramatical (plural) → el verbo concuerda en plural.",
      pasos: []
    },

    // ── Caso 3: Sujeto partitivo y atracción ─────────────────────────────────
    {
      id: 7,
      tipo: "regla_rica",
      etiqueta: "Caso 3 / 6",
      titulo: "Partitivos, porcentajes y «lo que»",
      bloques: [
        {
          tipo: "texto",
          texto: "Con sujetos partitivos («la mitad de», «un tercio de», «el X % de») y con sujetos encabezados por «lo que», la norma admite singular o plural, pero el EXANI-II evalúa la coherencia: elige una y mantenla. En registro formal con núcleo singular determinado («la mitad de»), suele preferirse la concordancia gramatical."
        },
        {
          tipo: "tabla",
          titulo: "Concordancia con cuantificadores",
          columnas: ["Sujeto", "✓ Formal", "△ Por sentido"],
          filas: [
            { tiempo: "la mitad de los votos", correcto: "se anuló", error: "se anularon (admitido)" },
            { tiempo: "el 70 % del alumnado",  correcto: "aprobó", error: "aprobaron (admitido)" },
            { tiempo: "un tercio de los casos", correcto: "presentó", error: "presentaron (admitido)" },
            { tiempo: "lo que sobró",           correcto: "se repartió", error: "se repartieron" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "«lo que» como sujeto → singular",
          correcto: "Lo que más preocupa a los analistas son las cifras de desempleo. (atributo plural admitido)",
          incorrecto: "Lo que más preocupan a los analistas son las cifras de desempleo."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "El verbo concuerda con «lo que» (sing.), aunque el atributo sea plural",
          correcto: "Lo que se discutió en la asamblea fueron los recortes presupuestarios.",
          incorrecto: "Lo que se discutieron en la asamblea fueron los recortes presupuestarios."
        }
      ]
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Caso 3",
      pregunta: "«Lo que realmente __ al jurado fueron las conclusiones del último capítulo de la tesis.»",
      opciones: ["convencieron", "convenció", "convencía"],
      correcta: 1,
      explicacion: "«convenció» — el sujeto es «lo que» (singular). El verbo concuerda con él, no con el atributo plural «las conclusiones».",
      pasos: []
    },
    {
      id: 9,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Caso 3",
      pregunta: "«La mitad de las propuestas presentadas __ por no ajustarse a las bases de la convocatoria.»",
      opciones: ["fue descartada", "fueron descartadas", "se descartan"],
      correcta: 0,
      explicacion: "«fue descartada» — con «la mitad de» (núcleo singular determinado), el EXANI-II prefiere la concordancia gramatical en singular en registro formal. El plural es admisible, pero la opción evaluada como correcta es la gramatical.",
      pasos: []
    },
    {
      id: 106,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Caso 3",
      pregunta: "«Lo que más __ a los vecinos es la falta de alumbrado público en la colonia.»",
      opciones: ["inquietan", "inquieta", "inquietaban"],
      correcta: 1,
      explicacion: "«inquieta» — el sujeto es «lo que» (singular); el verbo concuerda con él, no con «los vecinos» (complemento).",
      pasos: []
    },
    {
      id: 107,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Caso 3",
      pregunta: "«Un tercio de los encuestados __ no haber recibido información oportuna del proceso.»",
      opciones: ["afirmó", "afirmaron", "afirmaban"],
      correcta: 0,
      explicacion: "«afirmó» — con «un tercio de…» (núcleo singular), el registro formal del EXANI-II prefiere la concordancia gramatical en singular.",
      pasos: []
    },
    {
      id: 108,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Caso 3",
      pregunta: "«Lo que ocurrió aquella noche __ difícil de explicar incluso para los testigos.»",
      opciones: ["fueron", "fue", "eran"],
      correcta: 1,
      explicacion: "«fue» — el sujeto es «lo que» (singular); el verbo va en singular pese a la complejidad de la oración.",
      pasos: []
    },

    // ── Caso 4: Verbo «ser» entre sujeto y atributo de distinto número ──────
    {
      id: 10,
      tipo: "regla_rica",
      etiqueta: "Caso 4 / 6",
      titulo: "«Ser» entre sujeto y atributo de distinto número",
      bloques: [
        {
          tipo: "texto",
          texto: "Cuando «ser» une un sujeto singular con un atributo plural (o viceversa), el verbo tiende a concordar con el elemento PLURAL: «Mi mayor problema son las deudas». Es la llamada concordancia con el predicado nominal, frecuente en definiciones y explicaciones académicas."
        },
        {
          tipo: "par",
          etiqueta: "sujeto singular + atributo plural → verbo en plural",
          correcto: "El origen del conflicto son las desigualdades acumuladas durante décadas.",
          incorrecto: "El origen del conflicto es las desigualdades acumuladas durante décadas."
        },
        {
          tipo: "par",
          etiqueta: "atributo singular + sujeto plural",
          correcto: "Las conferencias del ciclo fueron un éxito rotundo de convocatoria.",
          incorrecto: "Las conferencias del ciclo fue un éxito rotundo de convocatoria."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Con «ser», el plural del predicado suele imponerse al sujeto singular",
          correcto: "Lo esencial en este caso son los datos verificables por terceros.",
          incorrecto: "Lo esencial en este caso es los datos verificables por terceros."
        }
      ]
    },
    {
      id: 11,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Caso 4",
      pregunta: "«El verdadero obstáculo del proyecto __ los recortes presupuestarios de los últimos años.»",
      opciones: ["fue", "fueron", "era"],
      correcta: 1,
      explicacion: "«fueron» — con «ser», ante un atributo plural («los recortes»), el verbo concuerda con el plural pese a que el sujeto «el obstáculo» sea singular.",
      pasos: []
    },
    {
      id: 12,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Caso 4",
      pregunta: "«Lo más valioso de la investigación __ las entrevistas a los protagonistas del conflicto.»",
      opciones: ["fue", "fueron", "había sido"],
      correcta: 1,
      explicacion: "«fueron» — sujeto «lo más valioso» (singular) + atributo plural «las entrevistas»: el verbo «ser» se acomoda al predicado plural.",
      pasos: []
    },
    {
      id: 109,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Caso 4",
      pregunta: "«El motivo de las protestas __ los recortes al presupuesto educativo del estado.»",
      opciones: ["fue", "fueron", "fuera"],
      correcta: 1,
      explicacion: "«fueron» — con «ser», ante el atributo plural «los recortes», el verbo concuerda con el plural pese a que el sujeto «el motivo» sea singular.",
      pasos: []
    },
    {
      id: 110,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Caso 4",
      pregunta: "«Las conferencias magistrales __ el verdadero atractivo del simposio internacional.»",
      opciones: ["fue", "fueron", "era"],
      correcta: 1,
      explicacion: "«fueron» — el sujeto «las conferencias» (plural) impone el plural al verbo «ser», aunque el atributo «el atractivo» sea singular.",
      pasos: []
    },
    {
      id: 111,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Caso 4",
      pregunta: "«La causa de tantos retrasos __ las fallas en el sistema informático del registro.»",
      opciones: ["fue", "fueron", "había sido"],
      correcta: 1,
      explicacion: "«fueron» — con «ser», el atributo plural «las fallas» impone el plural, pese a que el sujeto «la causa» sea singular.",
      pasos: []
    },

    // ── Caso 5: Relativas con antecedente complejo ───────────────────────────
    {
      id: 13,
      tipo: "regla_rica",
      etiqueta: "Caso 5 / 6",
      titulo: "Relativas: «el que», «quienes», «de los que»",
      bloques: [
        {
          tipo: "texto",
          texto: "En las oraciones de relativo, el verbo concuerda con el antecedente al que remite el relativo. Distingue: «yo soy quien lo dice» (quien → 3.ª) frente a «yo soy el que lo digo/dice» (admite 1.ª o 3.ª). La trampa está en localizar el antecedente real cuando hay varios candidatos."
        },
        {
          tipo: "tabla",
          titulo: "Concordancia del verbo en la relativa",
          columnas: ["Construcción", "Persona/número del verbo", "Ejemplo"],
          filas: [
            { tiempo: "soy quien…",      correcto: "3.ª singular", error: "Soy quien firma." },
            { tiempo: "soy el que…",     correcto: "1.ª o 3.ª",    error: "Soy el que firmo / firma." },
            { tiempo: "fui de los que…", correcto: "3.ª plural",   error: "Fui de los que protestaron." },
            { tiempo: "eres tú quien…",  correcto: "3.ª singular", error: "Eres tú quien decide." }
          ]
        },
        {
          tipo: "par",
          etiqueta: "«de los que» → antecedente plural",
          correcto: "Fui uno de los profesores que se opusieron a la medida en su momento.",
          incorrecto: "Fui uno de los profesores que se opuso a la medida en su momento."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "«eres tú quien»: con «quien» el verbo va en 3.ª, no en 2.ª",
          correcto: "Eres tú quien debe asumir las consecuencias de esa decisión.",
          incorrecto: "Eres tú quien debes asumir las consecuencias de esa decisión. (uso desaconsejado en registro formal)"
        }
      ]
    },
    {
      id: 14,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Caso 5",
      pregunta: "«La autora fue una de las investigadoras que __ el hallazgo en la revista de mayor impacto.»",
      opciones: ["publicó", "publicaron", "publicaba"],
      correcta: 1,
      explicacion: "«publicaron» — el relativo «que» remite a «las investigadoras» (plural), no a «una». La relativa va en plural.",
      pasos: []
    },
    {
      id: 15,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Caso 5",
      pregunta: "«Es usted quien __ la última palabra en este asunto, según el reglamento vigente.»",
      opciones: ["tiene", "tienes", "tengo"],
      correcta: 0,
      explicacion: "«tiene» — con «quien», el verbo de la relativa va en 3.ª persona singular, en concordancia con el relativo, no con «usted» como interlocutor.",
      pasos: []
    },
    {
      id: 112,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Caso 5",
      pregunta: "«Fuiste uno de los pocos que __ el problema desde el inicio de la gestión.»",
      opciones: ["entendió", "entendieron", "entendías"],
      correcta: 1,
      explicacion: "«entendieron» — el relativo «que» remite a «los pocos» (plural), no a «uno». La relativa va en plural.",
      pasos: []
    },
    {
      id: 113,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Caso 5",
      pregunta: "«Ustedes son quienes __ la última palabra en la votación del consejo.»",
      opciones: ["tienen", "tenemos", "tiene"],
      correcta: 0,
      explicacion: "«tienen» — «quienes» (plural) rige el verbo en 3.ª persona plural: «quienes tienen».",
      pasos: []
    },
    {
      id: 114,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Caso 5",
      pregunta: "«Ella fue una de las estudiantes que __ la beca de excelencia ese año.»",
      opciones: ["obtuvo", "obtuvieron", "obtenía"],
      correcta: 1,
      explicacion: "«obtuvieron» — «que» remite a «las estudiantes» (plural). La construcción «una de las que» lleva la relativa en plural.",
      pasos: []
    },

    // ── Caso 6: «haber» y «hacer» impersonales en perífrasis ─────────────────
    {
      id: 16,
      tipo: "regla_rica",
      etiqueta: "Caso 6 / 6",
      titulo: "Impersonales en perífrasis: «pueden haber», «suele haber»",
      bloques: [
        {
          tipo: "texto",
          texto: "El error de pluralizar «haber» impersonal se agrava en las perífrasis: el verbo auxiliar (poder, soler, deber) hereda el carácter impersonal y permanece en singular. «Puede haber problemas», nunca «pueden haber problemas». Lo mismo con «hacer» temporal en perífrasis."
        },
        {
          tipo: "tabla",
          titulo: "Perífrasis con impersonal → auxiliar en singular",
          columnas: ["Perífrasis", "✓ Singular", "✗ Error frecuente"],
          filas: [
            { tiempo: "poder + haber",  correcto: "puede haber retrasos", error: "pueden haber retrasos" },
            { tiempo: "soler + haber",  correcto: "suele haber quejas",   error: "suelen haber quejas" },
            { tiempo: "deber + haber",  correcto: "debe (de) haber pruebas", error: "deben haber pruebas" },
            { tiempo: "ir a + haber",   correcto: "va a haber cambios",   error: "van a haber cambios" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "«poder haber» — el auxiliar también es impersonal",
          correcto: "En esos expedientes puede haber inconsistencias que invaliden el proceso.",
          incorrecto: "En esos expedientes pueden haber inconsistencias que invaliden el proceso."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "El sustantivo plural NO es sujeto: el auxiliar queda en singular",
          correcto: "Suele haber discrepancias entre las versiones de los testigos.",
          incorrecto: "Suelen haber discrepancias entre las versiones de los testigos."
        }
      ]
    },
    {
      id: 17,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Caso 6",
      pregunta: "«En registros tan antiguos __ haber numerosos errores de transcripción.»",
      opciones: ["pueden", "puede", "podían"],
      correcta: 1,
      explicacion: "«puede» — en la perífrasis «poder haber», el auxiliar hereda la impersonalidad de «haber» y queda en singular, aunque «errores» sea plural.",
      pasos: []
    },
    {
      id: 18,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Caso 6",
      pregunta: "«Durante las auditorías __ a haber observaciones que retrasan la liberación de fondos.»",
      opciones: ["van", "va", "vienen"],
      correcta: 1,
      explicacion: "«va» — la perífrasis «ir a haber» es impersonal: el auxiliar permanece en singular («va a haber»), no concuerda con «observaciones».",
      pasos: []
    },
    {
      id: 115,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Caso 6",
      pregunta: "«En esos archivos tan antiguos __ haber datos incompletos o erróneos.»",
      opciones: ["suelen", "suele", "solían"],
      correcta: 1,
      explicacion: "«suele» — en la perífrasis «soler haber», el auxiliar hereda la impersonalidad de «haber» y queda en singular, aunque «datos» sea plural.",
      pasos: []
    },
    {
      id: 116,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Caso 6",
      pregunta: "«Tras el sismo __ a haber réplicas de menor intensidad durante varios días.»",
      opciones: ["van", "va", "iban"],
      correcta: 1,
      explicacion: "«va» — la perífrasis «ir a haber» es impersonal: el auxiliar permanece en singular, no concuerda con «réplicas».",
      pasos: []
    },
    {
      id: 117,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Caso 6",
      pregunta: "«En reuniones tan prolongadas __ haber momentos de tensión entre los asistentes.»",
      opciones: ["pueden", "puede", "podían"],
      correcta: 1,
      explicacion: "«puede» — en la perífrasis «poder haber», el auxiliar es impersonal y queda en singular, pese a que «momentos» sea plural.",
      pasos: []
    },

    // ── Resumen ──────────────────────────────────────────────────────────────
    {
      id: 19,
      tipo: "resumen",
      etiqueta: "Síntesis avanzada",
      titulo: "Concordancia verbal · casos EXANI-II",
      puntos: [
        { titulo: "Personas", texto: "Sujetos de distinta persona → plural; prevalece la 1.ª sobre la 2.ª, y la 2.ª sobre la 3.ª." },
        { titulo: "«se»", texto: "Pasiva refleja concuerda con el sujeto; impersonal con «a» ante persona va siempre en singular." },
        { titulo: "Partitivos / «lo que»", texto: "Mantén una sola concordancia; «lo que» rige singular aunque el atributo sea plural." },
        { titulo: "«ser»", texto: "Entre sujeto y atributo de distinto número, el verbo se acomoda al elemento plural." },
        { titulo: "Relativas", texto: "El verbo sigue al antecedente: «de los que» → plural; «quien» → 3.ª singular." },
        { titulo: "Impersonales en perífrasis", texto: "«puede/suele/va a haber» en singular: el auxiliar hereda la impersonalidad." }
      ]
    }
  ]
};
