// Presentación: Cohesión Gramatical (EXANI-II) — Relaciones de correferencia y elípticas
// Adaptación al EXANI-II: cada mecanismo sigue el esquema definición → ejemplos → 6 ejercicios.
// Copia ampliada de cohesion-gramatical (prepa); deja intacta la versión original.

export const PRESENTACION = {
  id: "cohesion-gramatical-exani-ii",
  titulo: "Cohesión Gramatical",
  materia: "Español",
  subtema: "Redacción Indirecta · EXANI-II",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Cohesión Gramatical",
      subtitulo: "Relaciones de correferencia y elípticas — los mecanismos que dan unidad al texto",
      etiqueta: "Español · Redacción Indirecta · EXANI-II"
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
          texto: "La cohesión gramatical es el conjunto de recursos lingüísticos que vinculan las partes de un texto para evitar repeticiones innecesarias y crear unidad. El EXANI-II evalúa dos grandes mecanismos: (1) correferencia: dos o más expresiones distintas que señalan al mismo referente en el texto, y (2) relaciones elípticas: omisión de un elemento que el lector puede recuperar del contexto. Reconocer y aplicar estos mecanismos es clave en la habilidad de redacción indirecta."
        },
        {
          tipo: "diagrama",
          id: "cohesion-panorama",
          titulo: "Mapa: tipos de cohesión gramatical evaluados en el EXANI-II"
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
          incorrecto: "La doctora llegó. La doctora revisó al paciente. (repetición innecesaria → defecto evaluado en el EXANI-II)"
        }
      ]
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 / 3 — Introducción",
      pregunta: "«El investigador publicó su artículo. __ fue muy elogiado por la comunidad académica.» ¿Qué elemento establece la correferencia con «su artículo»?",
      opciones: [
        "El investigador (repetición del sujeto)",
        "Este (pronombre demostrativo — correferencia)",
        "Así (conector de consecuencia)"
      ],
      correcta: 1,
      explicacion: "«Este fue muy elogiado…» — el pronombre demostrativo «este» (masc. sing.) establece correferencia con «su artículo». Repetir el sustantivo es un defecto de estilo que el EXANI-II evalúa negativamente. «Así» es un conector, no un elemento correfencial.",
      pasos: []
    },
    {
      id: 3,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 / 3 — Introducción",
      pregunta: "«Los bomberos apagaron el incendio y [∅] rescataron a dos personas.» ¿Qué representa el símbolo [∅]?",
      opciones: [
        "Una sustitución léxica por sinónimo",
        "Una relación elíptica: el sujeto «los bomberos» se omite por recuperable",
        "Una ambigüedad referencial sin solución"
      ],
      correcta: 1,
      explicacion: "Relación elíptica — el sujeto «los bomberos» no se repite en la segunda cláusula porque se recupera del contexto inmediato: «y [los bomberos] rescataron a dos personas». No hay un sinónimo nuevo (sustitución léxica) ni ambigüedad: el referente es inequívoco.",
      pasos: []
    },
    {
      id: 4,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 / 3 — Introducción",
      pregunta: "¿Cuál de los siguientes NO es un mecanismo de cohesión gramatical?",
      opciones: [
        "El uso de pronombres para retomar un referente",
        "La omisión (elipsis) de un verbo recuperable",
        "La rima entre los versos de un poema"
      ],
      correcta: 2,
      explicacion: "La rima es un recurso fónico-poético, no un mecanismo de cohesión gramatical. Los pronombres (correferencia) y la elipsis sí son mecanismos gramaticales que dan unidad al texto evitando repeticiones.",
      pasos: []
    },

    // ── Mecanismo 1 / 7: Correferencia por pronombres personales ──────────────
    {
      id: 5,
      tipo: "regla_rica",
      etiqueta: "Mecanismo 1 / 7 · Correferencia",
      titulo: "Pronombres personales — correferencia de persona",
      bloques: [
        {
          tipo: "texto",
          texto: "Los pronombres personales sustituyen a un sustantivo o grupo nominal para evitar su repetición. Los átonos (me, te, se, lo, la, le, nos, los, las, les) preceden o se unen al verbo. Los tónicos (yo, tú, él, ella, nosotros, ellos…) funcionan como sujeto explícito. Regla clave del EXANI-II: el pronombre debe concordar en género y número con su antecedente."
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
          titulo: "Leísmo: usar «le» como OD masculino animado en lugar de «lo» — el EXANI-II sigue la norma de la RAE",
          correcto: "Vi al director y lo saludé. (lo = OD masculino singular animado, norma RAE)",
          incorrecto: "Vi al director y le saludé. (le = OI; leísmo evaluado como error en redacción formal)"
        }
      ]
    },
    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 / 6 — Pronombres personales",
      pregunta: "«La coordinadora revisó las propuestas y __ aprobó sin modificaciones.» ¿Qué pronombre átono establece la correferencia correcta con «las propuestas»?",
      opciones: ["los aprobó", "las aprobó", "le aprobó"],
      correcta: 1,
      explicacion: "«las aprobó» — el pronombre átono de OD concuerda en género (femenino) y número (plural) con «las propuestas». «Los» sería error de género; «le» es OI y no concuerda con un objeto inanimado plural.",
      pasos: []
    },
    {
      id: 7,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 / 6 — Pronombres personales",
      pregunta: "«Los estudiantes entregaron sus trabajos. __ pasaron con notas sobresalientes.» ¿Qué pronombre tónico establece la correferencia correcta?",
      opciones: ["Él pasó", "Ellos pasaron", "Ella pasó"],
      correcta: 1,
      explicacion: "«Ellos pasaron» — el pronombre tónico de sujeto concuerda con «los estudiantes»: masculino plural → ellos. «Él» es singular; «ella» es femenino singular. La concordancia de género y número es obligatoria.",
      pasos: []
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 / 6 — Pronombres personales",
      pregunta: "«El jurado leyó los ensayos finalistas y __ calificó con rigor.» ¿Qué pronombre átono establece la correferencia correcta con «los ensayos finalistas»?",
      opciones: ["las calificó", "los calificó", "le calificó"],
      correcta: 1,
      explicacion: "«los calificó» — el pronombre átono de OD concuerda en género (masculino) y número (plural) con «los ensayos finalistas». «Las» sería error de género; «le» es OI y no concuerda con un objeto inanimado plural.",
      pasos: []
    },
    {
      id: 9,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 / 6 — Pronombres personales",
      pregunta: "«Encontré a tu hermano en la fiesta y __ saludé con afecto.» Según la norma de la RAE, ¿cuál es la forma correcta del pronombre de objeto directo?",
      opciones: ["lo saludé", "le saludé", "se saludé"],
      correcta: 0,
      explicacion: "«lo saludé» — «a tu hermano» es objeto directo masculino singular; la norma de la RAE pide «lo». «Le saludé» es leísmo (usar el pronombre de OI como OD), evaluado como error en redacción formal. «Se» es reflexivo y aquí no corresponde.",
      pasos: []
    },
    {
      id: 10,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 / 6 — Pronombres personales",
      pregunta: "«Premiaron a las atletas y __ entregaron las medallas en el podio.» ¿Qué pronombre átono establece la correferencia correcta con «las atletas»?",
      opciones: ["las entregaron", "les entregaron", "los entregaron"],
      correcta: 1,
      explicacion: "«les entregaron» — «a las atletas» es objeto indirecto (a quién se entregan las medallas), así que pide «les» (OI plural). «Las» sería objeto directo, pero el OD aquí es «las medallas». No confundas el OD (las medallas) con el OI (las atletas).",
      pasos: []
    },
    {
      id: 11,
      tipo: "ejercicio",
      etiqueta: "Reactivo 6 / 6 — Pronombres personales",
      pregunta: "«Los dos rivales __ saludaron con respeto antes del combate.» ¿Qué pronombre completa la correferencia con valor recíproco?",
      opciones: ["se saludaron", "les saludaron", "los saludaron"],
      correcta: 0,
      explicacion: "«se saludaron» — el pronombre «se» con valor recíproco indica que la acción es mutua: cada rival saludó al otro. «Les» y «los» introducirían un tercer referente como objeto, perdiendo el sentido recíproco entre los dos rivales.",
      pasos: []
    },

    // ── Mecanismo 2 / 7: Correferencia por demostrativos y relativos ──────────
    {
      id: 12,
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
      id: 13,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 / 6 — Demostrativos y relativos",
      pregunta: "«La conferencia abordó dos temas: la contaminación del aire y el cambio climático. __ es el más urgente para las ciudades.» ¿Qué demostrativo refiere correctamente al último tema mencionado?",
      opciones: ["Aquella", "Aquel", "Este"],
      correcta: 2,
      explicacion: "«Este» — el demostrativo de cercanía (este/esta/esto) señala al elemento mencionado más recientemente. «El cambio climático» es el último tema nombrado → «este». «Aquel» señalaría al primero (la contaminación del aire, lo más lejano en el texto).",
      pasos: []
    },
    {
      id: 14,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 / 6 — Demostrativos y relativos",
      pregunta: "«El libro __ escribió García Márquez ha sido traducido a 46 idiomas.» ¿Qué pronombre relativo completa la correferencia con «el libro»?",
      opciones: ["quien", "que", "el cual"],
      correcta: 1,
      explicacion: "«que» — el antecedente «el libro» es un objeto inanimado; solo «que» puede referir a cosas. «Quien/quienes» es exclusivo de personas. «El cual» sería válido en registros muy formales o con preposición, pero en esta construcción directa la opción correcta es «que».",
      pasos: []
    },
    {
      id: 15,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 / 6 — Demostrativos y relativos",
      pregunta: "«El museo exhibe una colección de arte virreinal y una de arte contemporáneo. __ atrae sobre todo al público joven.» ¿Qué demostrativo refiere correctamente a la última colección mencionada?",
      opciones: ["Aquella", "Esta", "Aquélla"],
      correcta: 1,
      explicacion: "«Esta» — el demostrativo de cercanía señala el elemento mencionado más recientemente (la colección de arte contemporáneo). «Aquella» apuntaría a lo más lejano en el texto (el arte virreinal), invirtiendo el sentido buscado.",
      pasos: []
    },
    {
      id: 16,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 / 6 — Demostrativos y relativos",
      pregunta: "«El autor __ novelas se traducen en todo el mundo visitará la feria del libro.» ¿Qué pronombre relativo completa la correferencia?",
      opciones: ["que", "cuyo", "cuyas"],
      correcta: 2,
      explicacion: "«cuyas» — el relativo posesivo «cuyo» concuerda en género y número con la cosa poseída, no con el poseedor: aquí lo poseído es «novelas» (femenino plural) → «cuyas novelas». «Cuyo» sería masculino singular; «que» no expresa posesión.",
      pasos: []
    },
    {
      id: 17,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 / 6 — Demostrativos y relativos",
      pregunta: "«El siglo XIX y el siglo XXI trajeron grandes transformaciones. __ vio nacer la electricidad y el ferrocarril.» ¿Qué demostrativo refiere al primer siglo mencionado?",
      opciones: ["Este", "Aquel", "Ese"],
      correcta: 1,
      explicacion: "«Aquel» — el demostrativo de lejanía señala el elemento mencionado primero o más alejado en el texto (el siglo XIX). «Este» apuntaría a lo más reciente (el siglo XXI), que no corresponde con la electricidad ni el ferrocarril decimonónicos.",
      pasos: []
    },
    {
      id: 18,
      tipo: "ejercicio",
      etiqueta: "Reactivo 6 / 6 — Demostrativos y relativos",
      pregunta: "«La doctora a __ consultaste es especialista en cardiología.» ¿Qué pronombre relativo completa la correferencia con «la doctora»?",
      opciones: ["que", "quien", "cuya"],
      correcta: 1,
      explicacion: "«quien» — tras preposición («a») y con antecedente de persona, se usa «quien»: «la doctora a quien consultaste». «Que» sin artículo resulta forzado tras preposición con personas; «cuya» expresa posesión, que aquí no existe.",
      pasos: []
    },

    // ── Mecanismo 3 / 7: Correferencia por sustitución léxica ────────────────
    {
      id: 19,
      tipo: "regla_rica",
      etiqueta: "Mecanismo 3 / 7 · Correferencia",
      titulo: "Correferencia por sustitución léxica",
      bloques: [
        {
          tipo: "texto",
          texto: "La correferencia también se establece mediante palabras distintas que nombran al mismo referente: sinónimos, hiperónimos (categoría más general), hipónimos (categoría más específica) o descripciones. A diferencia de la pronominación, aquí se usa una expresión nominal completa. El EXANI-II evalúa que el sustituto léxico sea semánticamente compatible con el contexto, no solo gramaticalmente correcto."
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
      id: 20,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 / 6 — Sustitución léxica",
      pregunta: "«Los colibríes migran miles de kilómetros cada año. __ pueden volar hacia atrás, algo único entre las aves.» ¿Qué sustituto léxico establece la correferencia correcta?",
      opciones: ["Los insectos", "Estos animales", "Las mariposas"],
      correcta: 1,
      explicacion: "«Estos animales» — el hiperónimo «animales» refiere correctamente a los colibríes (aves = animales), y el demostrativo «estos» ancla la referencia al antecedente inmediato. «Los insectos» y «las mariposas» son referentes incorrectos semánticamente para «colibríes».",
      pasos: []
    },
    {
      id: 21,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 / 6 — Sustitución léxica",
      pregunta: "«En 1953 se descifró la estructura del ADN. __ fue uno de los hitos más importantes de la biología del siglo XX.» ¿Qué sustituto cohesiona correctamente con lo mencionado?",
      opciones: ["El experimento", "Este hallazgo", "Su análisis"],
      correcta: 1,
      explicacion: "«Este hallazgo» — el demostrativo «este» retoma el referente más reciente (el descubrimiento) y «hallazgo» es sinónimo apropiado de «descifrar la estructura del ADN». «El experimento» implica un procedimiento distinto; «su análisis» requiere un antecedente posesivo claro.",
      pasos: []
    },
    {
      id: 22,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 / 6 — Sustitución léxica",
      pregunta: "«El roble del jardín tiene más de cien años. __ ha resistido tormentas y sequías.» ¿Qué sustituto léxico cohesiona correctamente?",
      opciones: ["Esta flor", "Este árbol", "Este arbusto"],
      correcta: 1,
      explicacion: "«Este árbol» — «árbol» es el hiperónimo (categoría superior) de «roble», semánticamente compatible. «Flor» y «arbusto» nombran referentes distintos: un roble no es una flor ni un arbusto, así que romperían la correferencia.",
      pasos: []
    },
    {
      id: 23,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 / 6 — Sustitución léxica",
      pregunta: "«Sor Juana Inés de la Cruz escribió versos admirables. __ es una de las grandes voces del Siglo de Oro.» ¿Qué sustituto mantiene la cohesión con el contexto?",
      opciones: ["La cantante", "La poetisa", "La pintora"],
      correcta: 1,
      explicacion: "«La poetisa» — es una descripción semánticamente compatible con «escribió versos» y con el referente. «Cantante» y «pintora» no corresponden a quien escribe versos: el sustituto léxico debe encajar con el contexto, no solo ser un nombre de persona.",
      pasos: []
    },
    {
      id: 24,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 / 6 — Sustitución léxica",
      pregunta: "«El can guardián vigilaba la entrada del rancho. El __ no dejaba pasar a ningún extraño.» ¿Qué sustituto léxico cohesiona correctamente con «el can»?",
      opciones: ["gato", "perro", "lobo"],
      correcta: 1,
      explicacion: "«perro» — «can» y «perro» son sinónimos (misma clase semántica y mismo referente). «Gato» y «lobo» nombran animales distintos, así que introducirían un referente nuevo y romperían la correferencia.",
      pasos: []
    },
    {
      id: 25,
      tipo: "ejercicio",
      etiqueta: "Reactivo 6 / 6 — Sustitución léxica",
      pregunta: "«Miguel Hidalgo proclamó la independencia en 1810. El __ es recordado cada 16 de septiembre.» ¿Qué descripción mantiene la cohesión con el referente?",
      opciones: ["virrey español", "cura de Dolores", "conquistador"],
      correcta: 1,
      explicacion: "«cura de Dolores» — es una descripción históricamente compatible con Miguel Hidalgo (fue sacerdote en Dolores). «Virrey español» y «conquistador» contradicen el referente: Hidalgo no fue virrey ni conquistador. El sustituto léxico debe ajustarse a los rasgos reales del referente.",
      pasos: []
    },

    // ── Mecanismo 4 / 7: Elipsis nominal ──────────────────────────────────────
    {
      id: 26,
      tipo: "regla_rica",
      etiqueta: "Mecanismo 4 / 7 · Relaciones elípticas",
      titulo: "Elipsis nominal — omisión del sustantivo",
      bloques: [
        {
          tipo: "texto",
          texto: "La elipsis nominal ocurre cuando se omite un sustantivo (o grupo nominal) que puede recuperarse del contexto inmediato. Es frecuente al comparar o enumerar elementos de la misma categoría. El elemento elidido debe ser exactamente el mismo que el que aparece en el contexto previo; si cambia, no es una elipsis válida. El EXANI-II evalúa la capacidad de identificar qué elemento se suprimió y de reconocer su recuperación."
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
      id: 27,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 / 6 — Elipsis nominal",
      pregunta: "«Los resultados de este semestre son mejores que los del semestre anterior.» ¿Qué elemento está elidido tras «los del»?",
      opciones: ["del (preposición artículo)", "resultados (sustantivo)", "semestre (sustantivo)"],
      correcta: 1,
      explicacion: "«resultados» — la forma completa sería «…mejores que los [resultados] del semestre anterior». El artículo «los» anticipa el sustantivo elidido «resultados», que ya fue mencionado al inicio de la oración. Este es el patrón clásico de elipsis nominal (art. + Ø + compl.).",
      pasos: []
    },
    {
      id: 28,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 / 6 — Elipsis nominal",
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
    {
      id: 29,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 / 6 — Elipsis nominal",
      pregunta: "«La temperatura de hoy es más alta que la __ ayer.» ¿Qué sustantivo está elidido tras «la»?",
      opciones: ["día", "temperatura", "alta"],
      correcta: 1,
      explicacion: "«temperatura» — la forma completa sería «…más alta que la [temperatura] de ayer». El artículo «la» anticipa el sustantivo elidido, ya mencionado al inicio. Es el patrón de elipsis nominal en comparativa (art. + Ø + complemento).",
      pasos: []
    },
    {
      id: 30,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 / 6 — Elipsis nominal",
      pregunta: "«De los dos abrigos, compré el negro y regalé el [∅] gris.» ¿Qué elemento se recupera en la elipsis y de qué tipo es?",
      opciones: [
        "«abrigo» — elipsis nominal (det. + Ø + adj.)",
        "«color» — elipsis adjetival",
        "«regalé» — elipsis verbal"
      ],
      correcta: 0,
      explicacion: "«abrigo» — la forma completa es «regalé el [abrigo] gris». El artículo «el» más el adjetivo «gris» rodean el sustantivo omitido, recuperable de «los dos abrigos». Es el patrón clásico de elipsis nominal det. + Ø + adjetivo.",
      pasos: []
    },
    {
      id: 31,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 / 6 — Elipsis nominal",
      pregunta: "«La población de Monterrey es menor que la __ de Guadalajara.» ¿Qué sustantivo está elidido tras «la»?",
      opciones: ["ciudad", "población", "menor"],
      correcta: 1,
      explicacion: "«población» — la forma completa es «…menor que la [población] de Guadalajara». El artículo «la» anticipa el sustantivo ya mencionado al inicio. Comparar con «ciudad» cambiaría el referente; «menor» es un adjetivo, no el sustantivo elidido.",
      pasos: []
    },
    {
      id: 32,
      tipo: "ejercicio",
      etiqueta: "Reactivo 6 / 6 — Elipsis nominal",
      pregunta: "«Probé dos postres: el de chocolate me gustó más que el [∅] de vainilla.» ¿Qué elemento se recupera por elipsis?",
      opciones: ["«postre» — elipsis nominal", "«gustó» — elipsis verbal", "«chocolate» — elipsis adjetival"],
      correcta: 0,
      explicacion: "«postre» — la forma completa es «…más que el [postre] de vainilla». El artículo «el» y el complemento «de vainilla» rodean el sustantivo omitido, recuperable de «dos postres». Es elipsis nominal (det. + Ø + complemento).",
      pasos: []
    },

    // ── Mecanismo 5 / 7: Elipsis verbal ───────────────────────────────────────
    {
      id: 33,
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
      id: 34,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 / 6 — Elipsis verbal",
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
      id: 35,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 / 6 — Elipsis verbal",
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
    {
      id: 36,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 / 6 — Elipsis verbal",
      pregunta: "«Mi hermana estudia medicina; yo, __ derecho.» ¿Qué verbo se recupera por elipsis y qué señal lo indica?",
      opciones: [
        "«estudio» — la coma tras «yo» marca el lugar del verbo elidido",
        "«curso» — sinónimo contextual de estudiar",
        "ninguno; la oración está incompleta y es incorrecta"
      ],
      correcta: 0,
      explicacion: "«estudio» — en la coordinada simétrica, la coma tras «yo» ocupa el lugar del verbo suprimido: «yo, [estudio] derecho». El verbo recuperado se conjuga en la persona del nuevo sujeto (yo → estudio). La elipsis recupera el mismo verbo, no un sinónimo.",
      pasos: []
    },
    {
      id: 37,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 / 6 — Elipsis verbal",
      pregunta: "«Ana terminó la tarea ayer; Luis __ mañana.» ¿Por qué NO es posible elidir el verbo en la segunda cláusula?",
      opciones: [
        "Porque los tiempos verbales difieren: «terminó» (pasado) vs. la acción de mañana (futuro)",
        "Porque falta una coma después de «Luis»",
        "Porque «Luis» necesita un pronombre antes del verbo"
      ],
      correcta: 0,
      explicacion: "Los tiempos difieren — «terminó» es pretérito y la acción de «mañana» es futura («terminará»). La elipsis verbal solo es válida cuando el verbo recuperado coincide en tiempo y modo con el original; al cambiar el tiempo, el verbo debe escribirse explícitamente.",
      pasos: []
    },
    {
      id: 38,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 / 6 — Elipsis verbal",
      pregunta: "«Tú pediste ensalada; tu amigo, __ una sopa.» ¿Qué verbo se recupera por elipsis?",
      opciones: ["«pidió» — marcado por la coma tras «tu amigo»", "«comió» — sinónimo del contexto", "ninguno; la frase está incompleta"],
      correcta: 0,
      explicacion: "«pidió» — en la coordinada simétrica, la coma tras «tu amigo» señala el verbo elidido, conjugado en la persona del nuevo sujeto: «tu amigo, [pidió] una sopa». La elipsis recupera el mismo verbo del primer miembro, no un sinónimo como «comió».",
      pasos: []
    },
    {
      id: 39,
      tipo: "ejercicio",
      etiqueta: "Reactivo 6 / 6 — Elipsis verbal",
      pregunta: "«Ella corre más rápido que yo [∅].» ¿Qué verbo se recupera en la comparativa?",
      opciones: ["«corro» — recuperado del verbo «corre»", "«camino» — sinónimo de moverse", "«soy» — verbo copulativo implícito"],
      correcta: 0,
      explicacion: "«corro» — en la comparativa «más rápido que yo», se elide el verbo «correr» conjugado en primera persona: «que yo [corro]». La elipsis recupera el mismo verbo del primer miembro, ajustado a la persona del nuevo sujeto.",
      pasos: []
    },

    // ── Mecanismo 6 / 7: Elipsis oracional ────────────────────────────────────
    {
      id: 40,
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
          incorrecto: "—¿Entendiste la explicación? —Sí entendí la explicación. (correcto gramaticalmente, pero redundante; el EXANI-II valora la cohesión eficiente)"
        }
      ]
    },
    {
      id: 41,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 / 6 — Elipsis oracional",
      pregunta: "«Ana aprobó matemáticas y Luis también [∅].» ¿Qué tipo de elipsis opera y qué cláusula se recupera?",
      opciones: [
        "Elipsis verbal: solo se omite el verbo «aprobó»",
        "Elipsis oracional: «aprobó matemáticas» está elidido tras «también»",
        "Correferencia pronominal: «Luis» refiere a «Ana»"
      ],
      correcta: 1,
      explicacion: "Elipsis oracional — «Luis también [aprobó matemáticas]». El adverbio «también» actúa como marcador que anticipa la cláusula elidida, idéntica a la del primer miembro. Esta estructura es muy frecuente en textos expositivos y el EXANI-II la evalúa como recurso de cohesión gramatical.",
      pasos: []
    },
    {
      id: 42,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 / 6 — Elipsis oracional",
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
    {
      id: 43,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 / 6 — Elipsis oracional",
      pregunta: "«No me gustó el final de la película, y a mis amigos __.» ¿Qué adverbio completa la elipsis oracional manteniendo la negación?",
      opciones: ["también", "tampoco", "siempre"],
      correcta: 1,
      explicacion: "«tampoco» — recupera la cláusula negativa elidida: «a mis amigos tampoco [les gustó el final]». «Tampoco» es el marcador de elipsis oracional que conserva la negación; «también» afirmaría, contradiciendo el «no» previo.",
      pasos: []
    },
    {
      id: 44,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 / 6 — Elipsis oracional",
      pregunta: "«Pensábamos que el plan fracasaría, pero no __.» ¿Qué cláusula se recupera por elipsis?",
      opciones: [
        "«fracasó» — recuperada de la cláusula anterior con ajuste de tiempo",
        "«funcionó mal» — sinónimo introducido",
        "«se canceló» — idea nueva"
      ],
      correcta: 0,
      explicacion: "«fracasó» — la cláusula elidida se recupera de «el plan fracasaría» ajustando el tiempo: «pero no [fracasó]». El adverbio «no» contrasta con la expectativa previa y niega la proposición omitida. La elipsis recupera el verbo literal, no un sinónimo.",
      pasos: []
    },
    {
      id: 45,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 / 6 — Elipsis oracional",
      pregunta: "«A mí me encantó la exposición y a mi hermano __.» ¿Qué adverbio completa la elipsis oracional manteniendo la afirmación?",
      opciones: ["también", "tampoco", "jamás"],
      correcta: 0,
      explicacion: "«también» — recupera la cláusula afirmativa elidida: «a mi hermano también [le encantó la exposición]». «Tampoco» y «jamás» introducirían una negación que contradice el sentido afirmativo del primer miembro.",
      pasos: []
    },
    {
      id: 46,
      tipo: "ejercicio",
      etiqueta: "Reactivo 6 / 6 — Elipsis oracional",
      pregunta: "«—¿Aprobaste el examen de admisión? —Sí.» ¿Qué tipo de elipsis hay en la respuesta «Sí»?",
      opciones: [
        "Elipsis oracional: se omite toda la cláusula «aprobé el examen de admisión»",
        "Elipsis nominal: se omite solo el sustantivo «examen»",
        "No hay elipsis: «sí» es una respuesta completa por sí misma"
      ],
      correcta: 0,
      explicacion: "Elipsis oracional — el «Sí» enfático sustituye a toda la proposición recuperable de la pregunta: «Sí, [aprobé el examen de admisión]». Es un recurso de cohesión eficiente, no una oración incompleta. No se omite solo un sustantivo (elipsis nominal).",
      pasos: []
    },

    // ── Mecanismo 7 / 7: Ambigüedad referencial — trampa del EXANI-II ──────────
    {
      id: 47,
      tipo: "regla_rica",
      etiqueta: "Mecanismo 7 / 7 · Trampa del EXANI-II",
      titulo: "Ambigüedad referencial — el error que más evalúa el EXANI-II",
      bloques: [
        {
          tipo: "texto",
          texto: "La ambigüedad referencial ocurre cuando un pronombre o elemento correfencial puede señalar a más de un antecedente, impidiendo recuperar el referente con certeza. El EXANI-II evalúa tanto la identificación de la ambigüedad como su corrección. Causas más frecuentes: (1) dos antecedentes del mismo género y número, (2) pronombre demasiado alejado de su antecedente, (3) «se» con múltiples lecturas, (4) demostrativo que podría apuntar a dos referentes."
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
          titulo: "Regla del EXANI-II: si el referente del pronombre no es inequívoco, la oración está mal cohesionada — corrígelo con sustitución léxica o repetición",
          correcto: "La maestra explicó el tema a la alumna. La docente lo hizo con paciencia. (sustitución léxica → referente inequívoco)",
          incorrecto: "La maestra explicó el tema a la alumna. Ella lo hizo con paciencia. (¿quién? → ambiguo, error de cohesión)"
        }
      ]
    },
    {
      id: 48,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 / 6 — Ambigüedad referencial",
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
      id: 49,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 / 6 — Ambigüedad referencial",
      pregunta: "¿Cuál de las siguientes opciones corrige la ambigüedad de «El proyecto y el presupuesto fueron aprobados. Este fue el más disputado.»?",
      opciones: [
        "El proyecto y el presupuesto fueron aprobados. El presupuesto fue el más disputado.",
        "El proyecto y el presupuesto fueron aprobados. Él fue el más disputado.",
        "El proyecto y el presupuesto fueron aprobados. Aquel fue el más disputado."
      ],
      correcta: 0,
      explicacion: "Repetir el sustantivo elimina la ambigüedad — «El presupuesto fue el más disputado» es inequívoco. «Él» es pronombre de persona (no aplica a «presupuesto»). «Aquel» señalaría al elemento más lejano en el texto (el proyecto, mencionado primero), no al presupuesto.",
      pasos: []
    },
    {
      id: 50,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 / 6 — Ambigüedad referencial",
      pregunta: "«Pedro le dijo a su padre que su coche estaba averiado.» ¿Por qué hay un problema de cohesión?",
      opciones: [
        "«su coche» es ambiguo: puede ser el de Pedro o el de su padre",
        "No hay ambigüedad; «su coche» es necesariamente el de Pedro",
        "El pronombre «le» está usado incorrectamente"
      ],
      correcta: 0,
      explicacion: "Ambigüedad referencial — el posesivo «su» puede remitir a Pedro o a su padre, ambos posibles poseedores del coche. Para desambiguar habría que precisar: «…que el coche de Pedro estaba averiado» o «…que el coche de su padre estaba averiado».",
      pasos: []
    },
    {
      id: 51,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 / 6 — Ambigüedad referencial",
      pregunta: "¿Cuál opción elimina la ambigüedad de «La maestra felicitó a la alumna porque ella había mejorado»?",
      opciones: [
        "La maestra felicitó a la alumna porque esta había mejorado.",
        "La maestra felicitó a la alumna porque había mejorado ella.",
        "La maestra felicitó a la alumna porque ellas habían mejorado."
      ],
      correcta: 0,
      explicacion: "«…porque esta había mejorado» — el demostrativo «esta» señala al antecedente más cercano (la alumna), eliminando la duda entre maestra y alumna. Cambiar el orden («había mejorado ella») no aclara el referente; «ellas» introduce un plural que altera el sentido.",
      pasos: []
    },
    {
      id: 52,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 / 6 — Ambigüedad referencial",
      pregunta: "«Luis visitó a su tío cuando estaba enfermo.» ¿Por qué hay ambigüedad?",
      opciones: [
        "No se sabe quién estaba enfermo: Luis o su tío",
        "El verbo «visitó» está mal conjugado",
        "Falta un pronombre de objeto directo antes de «visitó»"
      ],
      correcta: 0,
      explicacion: "Ambigüedad referencial — el sujeto elidido de «estaba enfermo» puede ser Luis o su tío, ambos compatibles. Para desambiguar: «Luis visitó a su tío, que estaba enfermo» (el tío) o «Luis, estando enfermo, visitó a su tío» (Luis).",
      pasos: []
    },
    {
      id: 53,
      tipo: "ejercicio",
      etiqueta: "Reactivo 6 / 6 — Ambigüedad referencial",
      pregunta: "¿Cuál opción corrige mejor la ambigüedad de «Sara llamó a su madre porque estaba preocupada»?",
      opciones: [
        "Sara, preocupada, llamó a su madre.",
        "Sara llamó a su madre porque ella estaba preocupada.",
        "Sara la llamó porque estaba preocupada."
      ],
      correcta: 0,
      explicacion: "«Sara, preocupada, llamó a su madre» — el adjetivo en aposición atribuye sin ambigüedad la preocupación a Sara. La opción con «ella» mantiene la duda (¿Sara o la madre?), y «la llamó» no aclara quién estaba preocupada.",
      pasos: []
    },

    // ── Integrador ────────────────────────────────────────────────────────────
    {
      id: 54,
      tipo: "ejercicio",
      etiqueta: "Integrador 1 / 4",
      pregunta: "«El gerente revisó los contratos y los firmó.» ¿Qué mecanismo de cohesión emplea «los»?",
      opciones: [
        "Correferencia por pronombre personal átono (OD)",
        "Elipsis nominal",
        "Sustitución léxica por hiperónimo"
      ],
      correcta: 0,
      explicacion: "Correferencia por pronombre personal — «los» es un pronombre átono de objeto directo (masculino plural) que sustituye a «los contratos» para evitar repetirlo. No hay omisión (elipsis) ni un sustantivo nuevo (sustitución léxica): el referente se retoma mediante un pronombre.",
      pasos: []
    },
    {
      id: 55,
      tipo: "ejercicio",
      etiqueta: "Integrador 2 / 4",
      pregunta: "«Marta prepara postres y su hermana, platillos salados.» ¿Qué mecanismo de cohesión opera en la segunda cláusula?",
      opciones: [
        "Elipsis verbal: se omite «prepara», marcado por la coma",
        "Correferencia por pronombre personal",
        "Sustitución léxica por sinónimo"
      ],
      correcta: 0,
      explicacion: "Elipsis verbal — la coma tras «su hermana» ocupa el lugar del verbo omitido: «su hermana [prepara] platillos salados». Es una coordinada simétrica donde el segundo miembro comparte el verbo del primero. No hay pronombre ni sustitución de palabras.",
      pasos: []
    },
    {
      id: 56,
      tipo: "ejercicio",
      etiqueta: "Integrador 3 / 4",
      pregunta: "«Preparé un café para el invitado y se lo serví caliente.» ¿Qué mecanismo de cohesión aparece en «se lo»?",
      opciones: [
        "Dos pronombres átonos: «se» (OI = al invitado) y «lo» (OD = el café)",
        "Una elipsis verbal marcada por la coma",
        "Una sustitución léxica por descripción"
      ],
      correcta: 0,
      explicacion: "Dos pronombres átonos — «se» retoma el objeto indirecto «al invitado» (el OI «le» se convierte en «se» ante «lo»), y «lo» retoma el objeto directo «el café». Ambos son correferencia pronominal que evita repetir los sustantivos.",
      pasos: []
    },
    {
      id: 57,
      tipo: "ejercicio",
      etiqueta: "Integrador 4 / 4",
      pregunta: "«El director y el productor discutieron por horas. Aquel defendió el guion original.» ¿A quién refiere «aquel»?",
      opciones: [
        "Al director (mencionado primero, el más lejano en el texto)",
        "Al productor (mencionado en segundo lugar)",
        "Es totalmente ambiguo: no puede saberse"
      ],
      correcta: 0,
      explicacion: "Al director — el demostrativo «aquel» señala el elemento más lejano en el texto, es decir, el primero mencionado: «el director». Si se quisiera referir al productor (lo más reciente) se usaría «este». Este contraste este/aquel desambigua entre dos antecedentes.",
      pasos: []
    },

    // ── Resumen ───────────────────────────────────────────────────────────────
    {
      id: 58,
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Los 7 mecanismos de cohesión gramatical",
      puntos: [
        { titulo: "1. Pronombres personales", texto: "Sustituyen al sustantivo; concuerdan en género y número con el antecedente. Cuidado con el leísmo (lo/la = OD; le = OI)." },
        { titulo: "2. Demostrativos y relativos", texto: "este = lo más reciente, aquel = lo más lejano. «quien» solo personas; «que» personas y cosas; «cuyo» concuerda con lo poseído." },
        { titulo: "3. Sustitución léxica", texto: "Sinónimo, hiperónimo, hipónimo o descripción. El sustituto debe ser semánticamente compatible con el contexto." },
        { titulo: "4. Elipsis nominal", texto: "Se omite un sustantivo recuperable (det. + Ø + compl.). Solo vale si el referente es el mismo." },
        { titulo: "5. Elipsis verbal", texto: "Se omite el verbo en coordinadas simétricas; la coma marca su lugar. Mismo tiempo y modo que el original." },
        { titulo: "6. Elipsis oracional", texto: "Se omite la cláusula completa; marcadores: sí/no, también/tampoco. Recurso eficiente, no oración incompleta." },
        { titulo: "7. Ambigüedad referencial", texto: "El error más evaluado: si el pronombre no señala un referente inequívoco, desambigua con repetición o sustitución léxica." }
      ]
    }

  ]
};
