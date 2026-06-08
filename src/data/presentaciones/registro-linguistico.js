// Presentación: Registro lingüístico — adecuación de la lengua a la situación comunicativa
// Redacción Indirecta · Área Comunicativa · EXANI-II

export const PRESENTACION = {
  id: "registro-linguistico",
  titulo: "Registro Lingüístico",
  materia: "Español",
  subtema: "Redacción Indirecta",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Registro Lingüístico",
      subtitulo: "Cómo se adapta la lengua a cada situación comunicativa: formalidad, canal, tema e interlocutor",
      etiqueta: "Español · Redacción Indirecta · EXANI-II"
    },

    // ── Introducción ──────────────────────────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Introducción",
      titulo: "¿Qué es el registro lingüístico?",
      bloques: [
        {
          tipo: "texto",
          texto: "El registro lingüístico es la variación del modo de hablar o escribir según la situación comunicativa. Una misma persona no se expresa igual en una entrevista de trabajo que con sus amigos: ajusta su vocabulario, su sintaxis y su tono. El EXANI-II evalúa la adecuación: la capacidad de elegir y reconocer el registro apropiado para cada contexto. No existe un registro «mejor» en abstracto; existe el registro adecuado a la situación."
        },
        {
          tipo: "tabla",
          titulo: "Factores que determinan el registro",
          columnas: ["Factor", "Pregunta clave", "Ejemplo de efecto"],
          filas: [
            { tiempo: "Relación entre interlocutores", correcto: "¿Hay confianza o distancia?", error: "Tú/usted, trato cercano o protocolario" },
            { tiempo: "Canal",                          correcto: "¿Oral o escrito?",            error: "El escrito tiende a ser más planificado y formal" },
            { tiempo: "Tema",                           correcto: "¿Cotidiano o especializado?", error: "Un tema técnico exige tecnicismos precisos" },
            { tiempo: "Intención",                      correcto: "¿Informar, convencer, agradar?", error: "Define el tono y la selección léxica" }
          ]
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "No hay un registro correcto universal: lo que se evalúa es la adecuación al contexto",
          correcto: "«Estimado profesor, le escribo para solicitar una prórroga.» (correo a un docente → formal)",
          incorrecto: "«Profe, ¿me da chance de entregar después?» (mismo correo formal → registro inadecuado al canal y a la distancia)"
        }
      ]
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Introducción",
      pregunta: "Un estudiante envía un correo al rector de la universidad. ¿Cuál es el factor que MÁS exige elevar la formalidad del registro?",
      opciones: [
        "El tema del mensaje, que siempre es técnico",
        "La relación de distancia jerárquica con el destinatario",
        "El canal escrito, que obliga a usar tecnicismos"
      ],
      correcta: 1,
      explicacion: "La relación entre interlocutores —aquí, la distancia jerárquica con una autoridad— es lo que más exige un registro formal (trato de «usted», fórmulas de cortesía). El canal escrito influye, pero no obliga a tecnicismos; y el tema no es necesariamente técnico.",
      pasos: []
    },

    // ── Formal vs. informal ───────────────────────────────────────────────────
    {
      id: 3,
      tipo: "regla_rica",
      etiqueta: "Dimensión 1 · Grado de formalidad",
      titulo: "Registro formal vs. informal (coloquial)",
      bloques: [
        {
          tipo: "texto",
          texto: "El eje formal–informal es el más evaluado. El registro formal aparece en contextos de distancia, prestigio o seriedad: documentos, exámenes, trato con desconocidos o superiores. El registro informal o coloquial se usa en la confianza: familia, amistades, conversación cotidiana. Cada uno deja marcas reconocibles en el léxico, el tratamiento personal y la sintaxis."
        },
        {
          tipo: "tabla",
          titulo: "Marcas de cada registro",
          columnas: ["Rasgo", "Registro formal", "Registro informal"],
          filas: [
            { tiempo: "Tratamiento",   correcto: "usted, fórmulas de cortesía",        error: "tú, vos, apodos" },
            { tiempo: "Léxico",        correcto: "preciso, sin coloquialismos",        error: "muletillas, modismos («o sea», «padrísimo»)" },
            { tiempo: "Sintaxis",      correcto: "oraciones completas y planificadas",  error: "frases cortas, elipsis, interjecciones" },
            { tiempo: "Apócope/abrev.", correcto: "se evita («profesor», no «profe»)",   error: "frecuente («profe», «bici», «finde»)" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "misma idea, dos registros — elegir según el contexto",
          correcto: "Formal: «Le agradecería que revisara mi solicitud cuando le sea posible.»",
          incorrecto: "Informal: «Oye, échale un ojo a mi solicitud cuando puedas, ¿va?» (válido entre amigos, inadecuado en un trámite)"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "El registro informal no es incorrecto: es inadecuado solo cuando el contexto pide formalidad",
          correcto: "Entre amigos: «¿Vienes al cine?» (informal y perfectamente adecuado)",
          incorrecto: "En una carta de presentación: «¿Se animan a contratarme?» (coloquialismo inadecuado al contexto)"
        }
      ]
    },
    {
      id: 4,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Formal vs. informal",
      pregunta: "¿Cuál de las siguientes versiones corresponde a un registro FORMAL adecuado para una solicitud institucional?",
      opciones: [
        "«Quería ver si me echan la mano con la beca.»",
        "«Solicito atentamente que se considere mi postulación a la beca.»",
        "«Porfa, necesito la beca, ¿sí se puede?»"
      ],
      correcta: 1,
      explicacion: "«Solicito atentamente que se considere mi postulación…» usa léxico preciso, fórmula de cortesía y sintaxis planificada, propios del registro formal. Las otras dos opciones contienen coloquialismos («echar la mano», «porfa») inadecuados para un documento institucional.",
      pasos: []
    },
    {
      id: 5,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Formal vs. informal",
      pregunta: "«El evento estuvo súper padre y la neta nadie se quería ir.» ¿Qué rasgo identifica el registro de esta oración?",
      opciones: [
        "Registro formal por usar oraciones completas",
        "Registro informal por los modismos y muletillas («súper padre», «la neta»)",
        "Registro especializado por el tema del evento"
      ],
      correcta: 1,
      explicacion: "Los modismos «súper padre» y «la neta» son coloquialismos característicos del registro informal. No hay tecnicismos (no es especializado) y la presencia de modismos descarta el registro formal.",
      pasos: []
    },

    // ── Niveles de la lengua ──────────────────────────────────────────────────
    {
      id: 6,
      tipo: "regla_rica",
      etiqueta: "Dimensión 2 · Nivel de lengua",
      titulo: "Niveles: culto, estándar y popular",
      bloques: [
        {
          tipo: "texto",
          texto: "El nivel de lengua refleja el dominio y la norma que emplea el hablante. El nivel culto se apega a la norma, posee léxico amplio y construcciones complejas; es propio de textos académicos y literarios. El nivel estándar es el de uso común correcto, neutro, comprensible para todos. El nivel popular o vulgar se aleja de la norma: incluye incorrecciones, vulgarismos y expresiones marcadas socialmente. El EXANI-II valora el nivel culto y estándar en la redacción formal."
        },
        {
          tipo: "tabla",
          titulo: "Los tres niveles de la lengua",
          columnas: ["Nivel", "Características", "Ejemplo"],
          filas: [
            { tiempo: "Culto",    correcto: "Apego a la norma, riqueza léxica, sintaxis elaborada", error: "«Resulta imprescindible reconsiderar dicha hipótesis.»" },
            { tiempo: "Estándar", correcto: "Uso correcto y neutro, accesible a todos",             error: "«Hay que volver a pensar esa idea.»" },
            { tiempo: "Popular",  correcto: "Aleja de la norma; vulgarismos e incorrecciones",      error: "«Hay que repensar esa cosa, ¿no?, pos sí.»" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "vulgarismo vs. forma normativa",
          correcto: "Normativo: «No hubo problemas.» / «Vayamos al museo.»",
          incorrecto: "Vulgarismo: «No hubieron problemas.» / «Vámonos al museo, haiga lo que haiga.»"
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "Un texto puede ser formal pero contener vulgarismos: formalidad (contexto) y nivel (norma) son ejes distintos",
          correcto: "Formal y culto: «Le informo que no se presentaron incidencias.»",
          incorrecto: "Formal en intención pero con vulgarismo: «Le informo que no hubieron incidencias.» (concordancia incorrecta de «haber»)"
        }
      ]
    },
    {
      id: 7,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Niveles de lengua",
      pregunta: "«Dijistes que ibas a venir, pero no vinistes.» ¿Qué nivel de lengua refleja y por qué?",
      opciones: [
        "Nivel culto, por el uso de tiempos pasados",
        "Nivel popular, por los vulgarismos «dijistes» y «vinistes»",
        "Nivel estándar, porque se entiende el mensaje"
      ],
      correcta: 1,
      explicacion: "Las formas «dijistes» y «vinistes» son vulgarismos: la segunda persona del pretérito no lleva -s final (lo correcto es «dijiste», «viniste»). Esa desviación de la norma sitúa la oración en el nivel popular, aunque el mensaje se entienda.",
      pasos: []
    },

    // ── Canal y registro especializado ────────────────────────────────────────
    {
      id: 8,
      tipo: "regla_rica",
      etiqueta: "Dimensión 3 · Canal y especialización",
      titulo: "Canal (oral/escrito) y registro especializado",
      bloques: [
        {
          tipo: "texto",
          texto: "El canal condiciona el registro. El registro oral es inmediato y espontáneo: admite repeticiones, frases inacabadas, apoyo en gestos y entonación. El registro escrito es planificado y autónomo: exige claridad, puntuación y estructura, porque el lector no comparte el contexto del emisor. Además, cada campo del saber tiene un registro especializado o técnico, con tecnicismos propios (jurídico, científico, médico). El tecnicismo es preciso ante expertos, pero puede dificultar la comprensión de un público general."
        },
        {
          tipo: "tabla",
          titulo: "Rasgos según canal y especialización",
          columnas: ["Tipo", "Rasgo principal", "Ejemplo"],
          filas: [
            { tiempo: "Oral espontáneo", correcto: "Inmediato, con muletillas y elipsis", error: "«Eh… o sea, lo que digo es que… ya sabes.»" },
            { tiempo: "Escrito planificado", correcto: "Estructurado, puntuado, autónomo", error: "«El informe concluye que la medida fue eficaz.»" },
            { tiempo: "Especializado/técnico", correcto: "Tecnicismos precisos de un campo", error: "«El paciente presenta taquicardia sinusal.»" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "registro técnico vs. divulgativo de la misma idea",
          correcto: "Técnico (ante médicos): «Se observa hiperglucemia posprandial.»",
          incorrecto: "Divulgativo (público general): «El nivel de azúcar en la sangre sube tras comer.» (no es un error: cada uno es adecuado a su público)"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "El tecnicismo es una virtud ante expertos, pero un obstáculo ante público general: la adecuación depende del destinatario",
          correcto: "En una revista científica: «La reacción es exotérmica.»",
          incorrecto: "En un folleto para niños: «La reacción es exotérmica.» (tecnicismo inadecuado al público → debió decir «libera calor»)"
        }
      ]
    },
    {
      id: 9,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Canal y especialización",
      pregunta: "Un divulgador escribe para un público infantil: «Las plantas hacen la fotosíntesis para fabricar su alimento con la luz del sol.» ¿Por qué es adecuado el registro?",
      opciones: [
        "Porque usa tecnicismos avanzados que demuestran rigor",
        "Porque explica un concepto con léxico accesible al destinatario",
        "Porque emplea un registro oral espontáneo con muletillas"
      ],
      correcta: 1,
      explicacion: "El registro es adecuado porque ajusta el léxico al destinatario (público infantil): conserva el término «fotosíntesis» pero lo explica con palabras sencillas. No abusa de tecnicismos ni emplea rasgos orales espontáneos.",
      pasos: []
    },

    // ── Adecuación: la competencia clave ──────────────────────────────────────
    {
      id: 10,
      tipo: "regla_rica",
      etiqueta: "La competencia clave · Adecuación",
      titulo: "Adecuación: elegir el registro que pide la situación",
      bloques: [
        {
          tipo: "texto",
          texto: "Adecuación es la propiedad textual que consiste en ajustar el registro a la situación comunicativa concreta: quién escribe, a quién, por qué canal, con qué intención y sobre qué tema. Un texto adecuado respeta las convenciones del contexto; un texto inadecuado las rompe, aunque sea gramaticalmente correcto. En el EXANI-II, los reactivos suelen presentar una situación y pedir la versión cuyo registro encaje con ella."
        },
        {
          tipo: "tabla",
          titulo: "Situación → registro adecuado",
          columnas: ["Situación comunicativa", "Registro adecuado", "Marca esperada"],
          filas: [
            { tiempo: "Oficio a una autoridad",      correcto: "Formal, culto, escrito",       error: "«Por medio del presente, solicito…»" },
            { tiempo: "Mensaje a un amigo",          correcto: "Informal, coloquial",          error: "«¿Cómo vas? ¿Nos vemos hoy?»" },
            { tiempo: "Artículo científico",         correcto: "Formal, especializado",        error: "«Los datos evidencian una correlación significativa.»" },
            { tiempo: "Publicidad para jóvenes",     correcto: "Informal cuidado, cercano",    error: "«Vive la experiencia. Atrévete.»" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "adecuado vs. inadecuado en la misma situación (queja formal a una empresa)",
          correcto: "«Manifiesto mi inconformidad con el servicio recibido y solicito una solución.»",
          incorrecto: "«Su servicio es un desastre, ya me harté, arréglenlo o me voy.» (correcto gramaticalmente, inadecuado al registro formal)"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "Una oración puede ser gramaticalmente correcta y aun así inadecuada: la adecuación se juzga contra el contexto, no contra la gramática",
          correcto: "En una felicitación formal: «Reciba mi más sincera enhorabuena.»",
          incorrecto: "En esa misma felicitación formal: «¡Felicidades, crack!» (gramatical, pero inadecuado al registro)"
        }
      ]
    },
    {
      id: 11,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Adecuación",
      pregunta: "Situación: un alumno debe escribir la conclusión de un ensayo académico. ¿Cuál opción es la ADECUADA al registro?",
      opciones: [
        "«Pues ya para acabar, esto es lo que pienso y ya.»",
        "«En conclusión, la evidencia analizada respalda la hipótesis planteada.»",
        "«Bueno, la verdad es que el tema da para mucho, ¿no creen?»"
      ],
      correcta: 1,
      explicacion: "«En conclusión, la evidencia analizada respalda la hipótesis planteada» tiene el registro formal-culto que exige un ensayo académico: conector apropiado, léxico preciso y objetividad. Las otras opciones usan un registro coloquial inadecuado al contexto académico.",
      pasos: []
    },
    {
      id: 12,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Adecuación",
      pregunta: "Situación: un mensaje breve a un compañero de equipo para confirmar una reunión informal. ¿Cuál registro es el ADECUADO?",
      opciones: [
        "«Por medio de la presente confirmo mi asistencia a la sesión.»",
        "«Va, nos vemos a las 5 para organizar el trabajo.»",
        "«Se notifica formalmente la celebración del encuentro acordado.»"
      ],
      correcta: 1,
      explicacion: "Entre compañeros y para un mensaje breve e informal, «Va, nos vemos a las 5…» es lo adecuado: cercano y eficiente. Las otras dos versiones tienen un registro excesivamente formal y burocrático, inadecuado para la confianza y el canal del mensaje.",
      pasos: []
    },

    // ── Errores: mezcla de registros ──────────────────────────────────────────
    {
      id: 13,
      tipo: "regla_rica",
      etiqueta: "El error más evaluado · Mezcla de registros",
      titulo: "Mezcla de registros: la incoherencia que se penaliza",
      bloques: [
        {
          tipo: "texto",
          texto: "El error de adecuación más frecuente es la mezcla de registros: introducir una marca coloquial en un texto formal (o al revés) rompiendo la coherencia del tono. El texto debe mantener un registro uniforme de principio a fin. El EXANI-II pide con frecuencia detectar la palabra o expresión que «rompe» el registro y sustituirla por una equivalente del registro dominante."
        },
        {
          tipo: "tabla",
          titulo: "Detectar y corregir la mezcla de registros",
          columnas: ["Texto con mezcla", "Elemento que rompe", "Corrección"],
          filas: [
            { tiempo: "«El estudio demuestra que el método es un exitazo.»", correcto: "«exitazo» (coloquial)", error: "«es eficaz / exitoso»" },
            { tiempo: "«Se solicita su valiosa colaboración, porfa.»",       correcto: "«porfa» (coloquial)",  error: "«por favor / atentamente»" },
            { tiempo: "«El informe concluye que la cosa salió mal.»",        correcto: "«la cosa salió mal»",  error: "«los resultados fueron negativos»" },
            { tiempo: "«Los datos están súper claros.»",                     correcto: "«súper» (coloquial)",  error: "«muy claros / evidentes»" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "registro uniforme vs. registro mezclado",
          correcto: "Uniforme (formal): «El experimento confirmó la hipótesis de manera contundente.»",
          incorrecto: "Mezclado: «El experimento confirmó la hipótesis y quedó increíble.» («increíble» rompe el tono académico)"
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "Basta una sola palabra de otro registro para romper la coherencia tonal de todo el texto",
          correcto: "«La propuesta resulta viable y se recomienda su aprobación.»",
          incorrecto: "«La propuesta resulta viable y, la verdad, está genial.» (dos marcas coloquiales rompen el registro formal)"
        }
      ]
    },
    {
      id: 14,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Mezcla de registros",
      pregunta: "«La investigación, basada en datos de diez años, arrojó resultados padrísimos.» ¿Qué elemento rompe el registro y cómo se corrige?",
      opciones: [
        "«investigación»; debería decir «chamba»",
        "«padrísimos»; debería decir «notables / relevantes»",
        "«datos de diez años»; debería eliminarse"
      ],
      correcta: 1,
      explicacion: "«padrísimos» es un coloquialismo que rompe el registro formal-académico del resto de la oración. La corrección adecuada es un adjetivo del mismo nivel, como «notables» o «relevantes», para mantener un registro uniforme.",
      pasos: []
    },

    // ── Cierre ────────────────────────────────────────────────────────────────
    {
      id: 15,
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Lo esencial del registro lingüístico",
      puntos: [
        { titulo: "Registro = adecuación", texto: "ajustar la lengua a la situación; no hay un registro «mejor», solo el adecuado" },
        { titulo: "Cuatro factores", texto: "relación entre interlocutores, canal, tema e intención" },
        { titulo: "Eje formal–informal", texto: "tratamiento (usted/tú), léxico y sintaxis lo delatan" },
        { titulo: "Niveles de lengua", texto: "culto, estándar y popular; el EXANI-II valora el culto y el estándar" },
        { titulo: "Canal y especialización", texto: "oral vs. escrito; el tecnicismo se ajusta al destinatario" },
        { titulo: "Error clave", texto: "mezclar registros rompe la coherencia tonal; mantén el registro uniforme" }
      ]
    }

  ]
};
