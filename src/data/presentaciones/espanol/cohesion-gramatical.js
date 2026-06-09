// Presentación: Cohesión Gramatical — Relaciones de correferencia y elípticas
// 7 mecanismos · 23 slides (0-23) — Redacción Indirecta · EXANI-I

export const PRESENTACION = {
  id: "cohesion-gramatical",
  titulo: "Cohesión Gramatical",
  materia: "Español",
  subtema: "Redacción Indirecta",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Cohesión Gramatical",
      subtitulo: "Relaciones de correferencia y elípticas — los mecanismos que dan unidad al texto",
      etiqueta: "Español · Redacción Indirecta · EXANI-I"
    },

    // ── Introducción ──────────────────────────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Introducción",
      titulo: "Los mecanismos que unen el texto",
      bloques: [
        {
          tipo: "texto",
          texto: "La cohesión gramatical es el conjunto de recursos lingüísticos que vinculan las partes de un texto para evitar repeticiones innecesarias y crear unidad. El EXANI-I evalúa dos grandes mecanismos: (1) correferencia: dos o más expresiones distintas que señalan al mismo referente en el texto, y (2) relaciones elípticas: omisión de un elemento que el lector puede recuperar del contexto. Reconocer y aplicar estos mecanismos es clave en la habilidad de redacción indirecta."
        },
        {
          tipo: "diagrama",
          id: "cohesion-panorama",
          titulo: "Mapa: tipos de cohesión gramatical evaluados en el EXANI-I"
        },
        {
          tipo: "tabla",
          titulo: "Los dos mecanismos principales",
          columnas: ["Mecanismo", "Definición", "Ejemplo"],
          filas: [
            { tiempo: "Correferencia",     correcto: "Misma entidad, distinta forma lingüística",  error: "«Ana llegó. Ella se disculpó.» (ella = Ana)" },
            { tiempo: "Relación elíptica", correcto: "Elemento omitido, recuperable del contexto", error: "«Ana llegó y [∅] se disculpó.» (∅ = Ana)" }
          ]
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Correferencia ≠ repetición: la correferencia evita la repetición innecesaria; la repetición literal es un defecto de estilo",
          correcto: "La doctora llegó. Ella revisó al paciente. (correferencia eficiente)",
          incorrecto: "La doctora llegó. La doctora revisó al paciente. (repetición innecesaria → defecto evaluado en el EXANI-I)"
        }
      ]
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Introducción",
      pregunta: "«El investigador publicó su artículo. __ fue muy elogiado por la comunidad académica.» ¿Qué elemento establece la correferencia con «su artículo»?",
      opciones: [
        "El investigador (repetición del sujeto)",
        "Este (pronombre demostrativo — correferencia)",
        "Así (conector de consecuencia)"
      ],
      correcta: 1,
      explicacion: "«Este fue muy elogiado…» — el pronombre demostrativo «este» (masc. sing.) establece correferencia con «su artículo». Repetir el sustantivo es un defecto de estilo que el EXANI-I evalúa negativamente. «Así» es un conector, no un elemento correfencial.",
      pasos: []
    },

    // ── Mecanismo 1 / 7: Correferencia por pronombres personales ──────────────
    {
      id: 3,
      tipo: "regla_rica",
      etiqueta: "Mecanismo 1 / 7 · Correferencia",
      titulo: "Pronombres personales — correferencia de persona",
      bloques: [
        {
          tipo: "texto",
          texto: "Los pronombres personales sustituyen a un sustantivo o grupo nominal para evitar su repetición. Los átonos (me, te, se, lo, la, le, nos, los, las, les) preceden o se unen al verbo. Los tónicos (yo, tú, él, ella, nosotros, ellos…) funcionan como sujeto explícito. Regla clave del EXANI-I: el pronombre debe concordar en género y número con su antecedente."
        },
        {
          tipo: "diagrama",
          id: "correferencia-personal",
          titulo: "Antecedente → pronombre: género, número y función"
        },
        {
          tipo: "tabla",
          titulo: "Pronombres personales y su función correfencial",
          columnas: ["Tipo", "Formas", "Concordancia con antecedente"],
          filas: [
            { tiempo: "Sujeto tónico",           correcto: "él/ella, ellos/ellas, nosotros",    error: "«María estudió. Ella aprobó.» (fem. sing.)" },
            { tiempo: "OD átono (lo/la)",         correcto: "lo, la, los, las",                  error: "«Vi el informe. Lo leí.» (masc. sing.)" },
            { tiempo: "OI átono (le/les)",        correcto: "le, les",                            error: "«Llamé a Luis. Le expliqué el caso.»" },
            { tiempo: "Reflexivo (se)",            correcto: "se (misma persona como OD u OI)",  error: "«Elena se peinó. / Se llamaron.»" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el pronombre átono concuerda en género y número con el antecedente",
          correcto: "El director redactó el informe. Lo presentó ante el consejo. (lo = informe, masc. sing.)",
          incorrecto: "El director redactó el informe. La presentó ante el consejo. (la ≠ informe → error de género)"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Leísmo: usar «le» como OD masculino animado en lugar de «lo» — el EXANI-I sigue la norma de la RAE",
          correcto: "Vi al director y lo saludé. (lo = OD masculino singular animado, norma RAE)",
          incorrecto: "Vi al director y le saludé. (le = OI; leísmo evaluado como error en redacción formal)"
        }
      ]
    },
    {
      id: 4,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Pronombres personales",
      pregunta: "«La coordinadora revisó las propuestas y __ aprobó sin modificaciones.» ¿Qué pronombre átono establece la correferencia correcta con «las propuestas»?",
      opciones: ["los aprobó", "las aprobó", "le aprobó"],
      correcta: 1,
      explicacion: "«las aprobó» — el pronombre átono de OD concuerda en género (femenino) y número (plural) con «las propuestas». «Los» sería error de género; «le» es OI y no concuerda con un objeto inanimado plural.",
      pasos: []
    },
    {
      id: 5,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Pronombres personales",
      pregunta: "«Los estudiantes entregaron sus trabajos. __ pasaron con notas sobresalientes.» ¿Qué pronombre tónico establece la correferencia correcta?",
      opciones: ["Él pasó", "Ellos pasaron", "Ella pasó"],
      correcta: 1,
      explicacion: "«Ellos pasaron» — el pronombre tónico de sujeto concuerda con «los estudiantes»: masculino plural → ellos. «Él» es singular; «ella» es femenino singular. La concordancia de género y número es obligatoria.",
      pasos: []
    },

    // ── Mecanismo 2 / 7: Correferencia por demostrativos y relativos ──────────
    {
      id: 6,
      tipo: "regla_rica",
      etiqueta: "Mecanismo 2 / 7 · Correferencia",
      titulo: "Pronombres demostrativos y relativos",
      bloques: [
        {
          tipo: "texto",
          texto: "Los demostrativos (este/ese/aquel y sus formas) señalan al referente según su distancia textual: este/esta/esto refiere a lo mencionado más recientemente; ese/esa a distancia media; aquel/aquella a lo más lejano o anterior. Los pronombres relativos (que, quien, cual, cuyo) introducen una cláusula relativa cuyo antecedente es el nombre inmediatamente previo. Distinción clave: «quien/quienes» solo refiere a personas; «que» refiere a personas y cosas."
        },
        {
          tipo: "tabla",
          titulo: "Demostrativos vs. relativos: usos en correferencia",
          columnas: ["Tipo", "Formas", "Regla de referencia"],
          filas: [
            { tiempo: "Demostrativo — cercanía",  correcto: "este, esta, esto, estos, estas",       error: "Lo último mencionado: «Habló de física y química. Esta fue la más difícil.»" },
            { tiempo: "Demostrativo — lejanía",   correcto: "aquel, aquella, aquello, aquellos",    error: "Lo mencionado primero o hace más tiempo: «En 1810 hubo un movimiento. Aquel cambió la historia.»" },
            { tiempo: "Relativo — que",           correcto: "que (personas y cosas)",               error: "«El libro que leíste es de Rulfo.» / «La maestra que explicó…»" },
            { tiempo: "Relativo — quien",         correcto: "quien/quienes (solo personas)",        error: "«La autora, quien ganó el premio, impartió la charla.»" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "este = lo más reciente; aquel = lo más lejano en el texto",
          correcto: "Aprobó física y química. Esta última fue la más difícil. (esta = química, último mencionado)",
          incorrecto: "Aprobó física y química. Aquel fue el más difícil. (aquel señala lo lejano → señalaría física, no química)"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "«Quien» solo refiere a personas; «que» refiere a personas y cosas — confundirlos es el error más evaluado",
          correcto: "El científico que descubrió la vacuna recibió el Nobel. / El libro que escribió García Márquez es un clásico.",
          incorrecto: "El libro quien escribió García Márquez es un clásico. (quien ≠ objetos inanimados)"
        }
      ]
    },
    {
      id: 7,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Demostrativos",
      pregunta: "«La conferencia abordó dos temas: la contaminación del aire y el cambio climático. __ es el más urgente para las ciudades.» ¿Qué demostrativo refiere correctamente al último tema mencionado?",
      opciones: ["Aquella", "Aquel", "Este"],
      correcta: 2,
      explicacion: "«Este» — el demostrativo de cercanía (este/esta/esto) señala al elemento mencionado más recientemente. «El cambio climático» es el último tema nombrado → «este». «Aquel» señalaría al primero (la contaminación del aire, lo más lejano en el texto).",
      pasos: []
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Relativos",
      pregunta: "«El libro __ escribió García Márquez ha sido traducido a 46 idiomas.» ¿Qué pronombre relativo completa la correferencia con «el libro»?",
      opciones: ["quien", "que", "el cual"],
      correcta: 1,
      explicacion: "«que» — el antecedente «el libro» es un objeto inanimado; solo «que» puede referir a cosas. «Quien/quienes» es exclusivo de personas. «El cual» sería válido en registros muy formales o con preposición, pero en esta construcción directa la opción correcta es «que».",
      pasos: []
    },

    // ── Mecanismo 3 / 7: Correferencia por sustitución léxica ────────────────
    {
      id: 9,
      tipo: "regla_rica",
      etiqueta: "Mecanismo 3 / 7 · Correferencia",
      titulo: "Correferencia por sustitución léxica",
      bloques: [
        {
          tipo: "texto",
          texto: "La correferencia también se establece mediante palabras distintas que nombran al mismo referente: sinónimos, hiperónimos (categoría más general), hipónimos (categoría más específica) o descripciones. A diferencia de la pronominación, aquí se usa una expresión nominal completa. El EXANI-I evalúa que el sustituto léxico sea semánticamente compatible con el contexto, no solo gramaticalmente correcto."
        },
        {
          tipo: "tabla",
          titulo: "Tipos de sustitución léxica",
          columnas: ["Tipo", "Relación semántica", "Ejemplo de correferencia"],
          filas: [
            { tiempo: "Sinónimo",     correcto: "Misma clase semántica",     error: "«El perro ladró. El can se alejó corriendo.»" },
            { tiempo: "Hiperónimo",   correcto: "Categoría más general",     error: "«Vi una rosa. La flor olía muy bien.» (flor ⊃ rosa)" },
            { tiempo: "Hipónimo",     correcto: "Categoría más específica",  error: "«Me regalaron una mascota. El gato saltó al sofá.»" },
            { tiempo: "Descripción",  correcto: "Perífrasis descriptiva",    error: "«Newton publicó sus leyes. El físico inglés las formuló en 1687.»" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "hiperónimo — sustitución por categoría superior",
          correcto: "Se encontraron restos de un mamut. El animal estaba increíblemente bien conservado. (animal = hiperónimo de mamut)",
          incorrecto: "Se encontraron restos de un mamut. El elefante estaba bien conservado. (el elefante ≠ el mamut en ese contexto)"
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "El sustituto léxico debe ser semánticamente compatible con el contexto completo, no solo con la clase del referente",
          correcto: "La doctora presentó su tesis. La investigadora había trabajado diez años. (investigadora = compatible con doctora + contexto académico)",
          incorrecto: "La doctora presentó su tesis. La enfermera había trabajado diez años. (enfermera ≠ referente doctora en ese contexto)"
        }
      ]
    },
    {
      id: 10,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Sustitución léxica",
      pregunta: "«Los colibríes migran miles de kilómetros cada año. __ pueden volar hacia atrás, algo único entre las aves.» ¿Qué sustituto léxico establece la correferencia correcta?",
      opciones: ["Los insectos", "Estos animales", "Las mariposas"],
      correcta: 1,
      explicacion: "«Estos animales» — el hiperónimo «animales» refiere correctamente a los colibríes (aves = animales), y el demostrativo «estos» ancla la referencia al antecedente inmediato. «Los insectos» y «las mariposas» son referentes incorrectos semánticamente para «colibríes».",
      pasos: []
    },
    {
      id: 11,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Sustitución léxica",
      pregunta: "«En 1953 se descifró la estructura del ADN. __ fue uno de los hitos más importantes de la biología del siglo XX.» ¿Qué sustituto cohesiona correctamente con lo mencionado?",
      opciones: ["El experimento", "Este hallazgo", "Su análisis"],
      correcta: 1,
      explicacion: "«Este hallazgo» — el demostrativo «este» retoma el referente más reciente (el descubrimiento) y «hallazgo» es sinónimo apropiado de «descifrar la estructura del ADN». «El experimento» implica un procedimiento distinto; «su análisis» requiere un antecedente posesivo claro.",
      pasos: []
    },

    // ── Mecanismo 4 / 7: Elipsis nominal ──────────────────────────────────────
    {
      id: 12,
      tipo: "regla_rica",
      etiqueta: "Mecanismo 4 / 7 · Relaciones elípticas",
      titulo: "Elipsis nominal — omisión del sustantivo",
      bloques: [
        {
          tipo: "texto",
          texto: "La elipsis nominal ocurre cuando se omite un sustantivo (o grupo nominal) que puede recuperarse del contexto inmediato. Es frecuente al comparar o enumerar elementos de la misma categoría. El elemento elidido debe ser exactamente el mismo que el que aparece en el contexto previo; si cambia, no es una elipsis válida. El EXANI-I evalúa la capacidad de identificar qué elemento se suprimió y de reconocer su recuperación."
        },
        {
          tipo: "diagrama",
          id: "elipsis-nominal",
          titulo: "Elipsis nominal: elemento elidido y su recuperación"
        },
        {
          tipo: "tabla",
          titulo: "Patrones frecuentes de elipsis nominal",
          columnas: ["Patrón", "Ejemplo con elipsis", "Elemento recuperable"],
          filas: [
            { tiempo: "Det. + Ø + adj.",     correcto: "Quiero el libro azul y el [∅] rojo.",              error: "∅ = libro" },
            { tiempo: "Comparativa con Ø",    correcto: "Su calificación fue mayor que la [∅] de Ana.",     error: "∅ = calificación" },
            { tiempo: "Det. + Ø + prep.",     correcto: "Compré la mochila grande y la [∅] de Luis.",       error: "∅ = mochila" },
            { tiempo: "Coordinadas paralelas",correcto: "Ella estudió física; él, [∅] química.",             error: "∅ = estudió (→ elipsis verbal, no nominal)" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "elipsis nominal en comparativa — el sustituto debe ser el mismo sustantivo",
          correcto: "Su proyecto es más ambicioso que el [proyecto] de Ana. (el [∅] = el proyecto de Ana)",
          incorrecto: "Su proyecto es más ambicioso que su compañera. (compara proyecto con persona → ilógico, no es elipsis válida)"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "La elipsis nominal solo es válida si el elemento recuperado es el mismo sustantivo con idéntico referente — no hay elipsis si el referente cambia",
          correcto: "Compré manzanas rojas y [manzanas] verdes. (∅ = manzanas, mismo referente)",
          incorrecto: "Compré manzanas y comí peras [∅]. (las peras no son el mismo referente que manzanas → no hay elipsis)"
        }
      ]
    },
    {
      id: 13,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Elipsis nominal",
      pregunta: "«Los resultados de este semestre son mejores que los del semestre anterior.» ¿Qué elemento está elidido tras «los del»?",
      opciones: ["del (preposición artículo)", "resultados (sustantivo)", "semestre (sustantivo)"],
      correcta: 1,
      explicacion: "«resultados» — la forma completa sería «…mejores que los [resultados] del semestre anterior». El artículo «los» anticipa el sustantivo elidido «resultados», que ya fue mencionado al inicio de la oración. Este es el patrón clásico de elipsis nominal (art. + Ø + compl.).",
      pasos: []
    },
    {
      id: 14,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Elipsis nominal",
      pregunta: "«Prefiero el café americano al [∅].» ¿Cuál es el elemento elidido y de qué tipo de elipsis se trata?",
      opciones: [
        "«al» es el elemento elidido; elipsis preposicional",
        "«café» es el elemento elidido; elipsis nominal (det. + Ø)",
        "«americano» es el elidido; elipsis adjetival"
      ],
      correcta: 1,
      explicacion: "«café» — la forma completa sería «Prefiero el café americano al café [expresso/negro/…]». El artículo contracto «al» = «a + el» anticipa el sustantivo «café», que se omite por elipsis nominal. Es el patrón (preposición + artículo + Ø + complemento).",
      pasos: []
    },

    // ── Mecanismo 5 / 7: Elipsis verbal ───────────────────────────────────────
    {
      id: 15,
      tipo: "regla_rica",
      etiqueta: "Mecanismo 5 / 7 · Relaciones elípticas",
      titulo: "Elipsis verbal — omisión del verbo",
      bloques: [
        {
          tipo: "texto",
          texto: "La elipsis verbal ocurre cuando se omite el verbo (o el grupo verbal completo) porque puede recuperarse del contexto previo. Es muy frecuente en construcciones coordinadas simétricas donde el segundo miembro comparte el verbo del primero. Señal gráfica habitual: una coma sustituye al verbo elidido en la segunda cláusula. El verbo recuperado debe ser el mismo (o compatible en tiempo y modo)."
        },
        {
          tipo: "tabla",
          titulo: "Contextos frecuentes de elipsis verbal",
          columnas: ["Contexto", "Ejemplo con elipsis", "Verbo recuperable"],
          filas: [
            { tiempo: "Coordinadas simétricas", correcto: "Él estudió química; ella, [estudió] biología.",      error: "estudió" },
            { tiempo: "Contraste A / B",         correcto: "Ana aprobó matemáticas; Luis, [aprobó] física.",    error: "aprobó" },
            { tiempo: "Pregunta-respuesta",       correcto: "¿Viniste ayer? — Sí, [vine] a las seis.",          error: "vine" },
            { tiempo: "Comparativa",             correcto: "Ella corre más rápido que yo [corro].",             error: "corro" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "la coma señala el lugar del verbo elidido en coordinadas simétricas",
          correcto: "El primer bloque fue sencillo; el segundo, [fue] más complejo. (coma + compl. sin verbo → elipsis verbal)",
          incorrecto: "El primer bloque fue sencillo; el segundo fue más complejo. (sin elipsis, verbo repetido; ambas formas son válidas pero la primera es más eficiente)"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "El verbo elidido debe tener el mismo tiempo y modo que el verbo de la cláusula de origen — si los tiempos difieren, no se puede elidir",
          correcto: "Juan llegó a las 8; María, [llegó] a las 9. (mismo tiempo → elipsis válida)",
          incorrecto: "Juan llegará a las 8; María, [llegó] a las 9. (tiempos distintos: futuro ≠ pasado → no se puede elidir)"
        }
      ]
    },
    {
      id: 16,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Elipsis verbal",
      pregunta: "«El equipo A obtuvo tres medallas de oro; el equipo B, [∅] dos de plata.» ¿Qué verbo está elidido y qué señal gráfica lo indica?",
      opciones: [
        "El verbo «obtuvo» está elidido; la coma tras «B» señala su lugar",
        "Falta un conector como «y» o «pero» antes de «dos»",
        "El verbo «ganó» debe escribirse explícitamente; no hay elipsis posible"
      ],
      correcta: 0,
      explicacion: "El verbo «obtuvo» está elidido — la coma después de «el equipo B» ocupa el lugar del verbo suprimido: «El equipo B, [obtuvo] dos de plata». Esta es la elipsis verbal clásica en construcciones contrastivas coordinadas. La coma es la señal gráfica estándar.",
      pasos: []
    },
    {
      id: 17,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Elipsis verbal",
      pregunta: "«¿Estudiaste para el examen? — Sí, [∅] toda la noche.» ¿Qué verbo se recupera por elipsis en la respuesta?",
      opciones: [
        "estudié — recuperado de la pregunta anterior",
        "dormí — por la expresión «toda la noche»",
        "repasé — sinónimo de estudiar en el contexto"
      ],
      correcta: 0,
      explicacion: "«estudié» — en el par pregunta-respuesta, la cláusula elidida recupera el verbo de la pregunta conjugado en la persona del hablante: «Sí, [estudié] toda la noche». La elipsis siempre recupera la forma más literal del contexto previo, no un sinónimo.",
      pasos: []
    },

    // ── Mecanismo 6 / 7: Elipsis oracional ────────────────────────────────────
    {
      id: 18,
      tipo: "regla_rica",
      etiqueta: "Mecanismo 6 / 7 · Relaciones elípticas",
      titulo: "Elipsis oracional — omisión de toda la cláusula",
      bloques: [
        {
          tipo: "texto",
          texto: "La elipsis oracional suprime una proposición completa (sujeto + verbo + complementos) porque puede recuperarse de una cláusula anterior o del contexto situacional. Es muy frecuente en respuestas breves, donde el hablante omite toda la cláusula y responde con un elemento enfático (sí, no, también, tampoco, exacto, claro). En textos expositivos aparece en construcciones adversativas y concesivas donde la segunda parte repite la primera."
        },
        {
          tipo: "tabla",
          titulo: "Patrones de elipsis oracional",
          columnas: ["Contexto", "Con elipsis", "Cláusula recuperable"],
          filas: [
            { tiempo: "Respuesta afirmativa",   correcto: "¿Aprobaste? — Sí. [Aprobé.]",                    error: "Aprobé." },
            { tiempo: "Respuesta negativa",      correcto: "¿Vendrás? — No. [No vendré.]",                   error: "No vendré." },
            { tiempo: "Adversativa con «pero»",  correcto: "Quería ir, pero no pudo [ir].",                  error: "ir" },
            { tiempo: "«también / tampoco»",     correcto: "Ana aprobó y Luis también [aprobó].",             error: "aprobó" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "«también» y «tampoco» son marcadores de elipsis oracional",
          correcto: "Ana entregó el trabajo a tiempo y Luis también [entregó el trabajo a tiempo]. (elipsis oracional total)",
          incorrecto: "Ana entregó el trabajo a tiempo y Luis también lo hizo. (aquí hay correferencia pronominal, no elipsis pura)"
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "La elipsis oracional total es correcta y preferible en textos formales — no es una oración incompleta sino un recurso de cohesión eficiente",
          correcto: "—¿Entendiste la explicación? —Sí. (cláusula completa elidida: [entendí la explicación])",
          incorrecto: "—¿Entendiste la explicación? —Sí entendí la explicación. (correcto gramaticalmente, pero redundante; el EXANI-I valora la cohesión eficiente)"
        }
      ]
    },
    {
      id: 19,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Elipsis oracional",
      pregunta: "«Ana aprobó matemáticas y Luis también [∅].» ¿Qué tipo de elipsis opera y qué cláusula se recupera?",
      opciones: [
        "Elipsis verbal: solo se omite el verbo «aprobó»",
        "Elipsis oracional: «aprobó matemáticas» está elidido tras «también»",
        "Correferencia pronominal: «Luis» refiere a «Ana»"
      ],
      correcta: 1,
      explicacion: "Elipsis oracional — «Luis también [aprobó matemáticas]». El adverbio «también» actúa como marcador que anticipa la cláusula elidida, idéntica a la del primer miembro. Esta estructura es muy frecuente en textos expositivos y el EXANI-I la evalúa como recurso de cohesión gramatical.",
      pasos: []
    },
    {
      id: 20,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Elipsis oracional",
      pregunta: "«Pensé que no llegarías a tiempo, pero sí [∅].» ¿Qué cláusula está elidida?",
      opciones: [
        "«llegaste a tiempo» — recuperada de la cláusula previa",
        "«sí es correcto» — expresión fija sin elipsis",
        "«puedes hacerlo» — idea nueva introducida"
      ],
      correcta: 0,
      explicacion: "«llegaste a tiempo» — la cláusula elidida se recupera de «no llegarías a tiempo» con el ajuste de persona y tiempo: «llegaste». El adverbio «sí» contrasta con la negación «no» de la cláusula anterior y afirma la proposición elidida.",
      pasos: []
    },

    // ── Mecanismo 7 / 7: Ambigüedad referencial — trampa del EXANI-I ──────────
    {
      id: 21,
      tipo: "regla_rica",
      etiqueta: "Mecanismo 7 / 7 · Trampa del EXANI-I",
      titulo: "Ambigüedad referencial — el error que más evalúa el EXANI-I",
      bloques: [
        {
          tipo: "texto",
          texto: "La ambigüedad referencial ocurre cuando un pronombre o elemento correfencial puede señalar a más de un antecedente, impidiendo recuperar el referente con certeza. El EXANI-I evalúa tanto la identificación de la ambigüedad como su corrección. Causas más frecuentes: (1) dos antecedentes del mismo género y número, (2) pronombre demasiado alejado de su antecedente, (3) «se» con múltiples lecturas, (4) demostrativo que podría apuntar a dos referentes."
        },
        {
          tipo: "tabla",
          titulo: "Tipos de ambigüedad referencial",
          columnas: ["Tipo", "Oración ambigua", "Corrección posible"],
          filas: [
            { tiempo: "Dos antecedentes del mismo género",   correcto: "Ana habló con María. Ella estaba enojada.",                   error: "¿Quién? → «Ana estaba enojada» o «María estaba enojada»" },
            { tiempo: "«Se» reflexivo vs. recíproco",         correcto: "Juan y Pedro se vieron en el mercado.",                      error: "¿Se vieron el uno al otro, o cada uno vio algo? → aclarar" },
            { tiempo: "Pronombre alejado del antecedente",   correcto: "El rector presentó el informe al consejo y lo defendió.",     error: "¿Lo = informe o lo = consejo? → «defendió el informe»" },
            { tiempo: "Demostrativo entre dos antecedentes", correcto: "El proyecto y el presupuesto fueron aprobados. Este fue disputado.", error: "¿Este = proyecto o presupuesto? → nombrar explícitamente" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "ambigüedad vs. referencia clara — cuando hay duda, se prefiere la sustitución léxica o la repetición",
          correcto: "La directora habló con su asistente. La directora estaba enojada. (repetición justificada para desambiguar)",
          incorrecto: "La directora habló con su asistente. Ella estaba enojada. (¿la directora o la asistente? → ambigüedad)"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Regla del EXANI-I: si el referente del pronombre no es inequívoco, la oración está mal cohesionada — corrígelo con sustitución léxica o repetición",
          correcto: "La maestra explicó el tema a la alumna. La docente lo hizo con paciencia. (sustitución léxica → referente inequívoco)",
          incorrecto: "La maestra explicó el tema a la alumna. Ella lo hizo con paciencia. (¿quién? → ambiguo, error de cohesión)"
        }
      ]
    },
    {
      id: 22,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Ambigüedad referencial",
      pregunta: "«El director habló con el supervisor. Él tomó la decisión final.» ¿Cuál es el problema de cohesión en este fragmento?",
      opciones: [
        "No hay problema; «él» refiere claramente al director por ser el sujeto principal.",
        "La referencia de «él» es ambigua: puede ser el director o el supervisor.",
        "«Él» debería reemplazarse por «este» para mayor precisión."
      ],
      correcta: 1,
      explicacion: "Ambigüedad referencial — «él» puede referir tanto al director como al supervisor, ya que ambos son sustantivos masculinos singulares. Para eliminar la ambigüedad debe nombrarse explícitamente al agente: «El director tomó la decisión final» o «El supervisor tomó la decisión final».",
      pasos: []
    },
    {
      id: 23,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Ambigüedad referencial",
      pregunta: "¿Cuál de las siguientes opciones corrige la ambigüedad de «El proyecto y el presupuesto fueron aprobados. Este fue el más disputado.»?",
      opciones: [
        "El proyecto y el presupuesto fueron aprobados. El presupuesto fue el más disputado.",
        "El proyecto y el presupuesto fueron aprobados. Él fue el más disputado.",
        "El proyecto y el presupuesto fueron aprobados. Aquel fue el más disputado."
      ],
      correcta: 0,
      explicacion: "Repetir el sustantivo elimina la ambigüedad — «El presupuesto fue el más disputado» es inequívoco. «Él» es pronombre de persona (no aplica a «presupuesto»). «Aquel» señalaría al elemento más lejano en el texto (el proyecto, mencionado primero), no al presupuesto.",
      pasos: []
    }

  ]
};
