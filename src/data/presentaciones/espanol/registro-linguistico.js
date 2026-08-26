// Presentación: Registro lingüístico — adecuación de la lengua a la situación comunicativa
// Redacción Indirecta · Área Comunicativa · EXANI-II

export const PRESENTACION = {
  id: "registro-linguistico",
  titulo: "Registro Lingüístico",
  materia: "Español",
  examenes: ["EXANI-II"],
  subtema: "Redacción Indirecta",
  slides: [
    {
      id: 0,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "portada",
          kicker: "Español · Redacción Indirecta · EXANI-II",
          titulo: "Registro Lingüístico",
          subtitulo: "Cómo se adapta la lengua a cada situación comunicativa: formalidad, canal, tema e interlocutor",
        },
      ],
    },
    {
      id: 1,
      tipo: "lienzo",
      etiqueta: "Introducción",
      titulo: "¿Qué es el registro lingüístico?",
      bloques: [
        {
          tipo: "destacado",
          texto: "El registro lingüístico es la variación del modo de hablar o escribir según la situación comunicativa. Una misma persona no se expresa igual en una entrevista de trabajo que con sus amigos: ajusta su vocabulario, su sintaxis y su tono. El EXANI-II evalúa la adecuación: la capacidad de elegir y reconocer el registro apropiado para cada contexto. No existe un registro «mejor» en abstracto; existe el registro adecuado a la situación.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 1,
          titulo: "Factores que determinan el registro",
          columnas: ["Factor", "Pregunta clave", "Ejemplo de efecto"],
          filas: [
            [
              "Relación entre interlocutores",
              "¿Hay confianza o distancia?",
              "Tú/usted, trato cercano o protocolario",
            ],
            ["Canal", "¿Oral o escrito?", "El escrito tiende a ser más planificado y formal"],
            ["Tema", "¿Cotidiano o especializado?", "Un tema técnico exige tecnicismos precisos"],
            ["Intención", "¿Informar, convencer, agradar?", "Define el tono y la selección léxica"],
          ],
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "A",
          titulo: "No hay un registro correcto universal: lo que se evalúa es la adecuación al contexto",
          asi_es: "«Estimado profesor, le escribo para solicitar una prórroga.» (correo a un docente → formal)",
          asi_no: "«Profe, ¿me da chance de entregar después?» (mismo correo formal → registro inadecuado al canal y a la distancia)",
        },
      ],
    },
    {
      id: 2,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — Introducción",
          enunciado: "Un estudiante envía un correo al rector de la universidad. ¿Cuál es el factor que MÁS exige elevar la formalidad del registro?",
          opciones: [
            "El tema del mensaje, que siempre es técnico",
            "La relación de distancia jerárquica con el destinatario",
            "El canal escrito, que obliga a usar tecnicismos",
          ],
          correcta: 1,
          explicacion: "La relación entre interlocutores —aquí, la distancia jerárquica con una autoridad— es lo que más exige un registro formal (trato de «usted», fórmulas de cortesía). El canal escrito influye, pero no obliga a tecnicismos; y el tema no es necesariamente técnico.",
        },
      ],
    },
    {
      id: 3,
      tipo: "lienzo",
      etiqueta: "Dimensión 1 · Grado de formalidad",
      titulo: "Registro formal vs. informal (coloquial)",
      bloques: [
        {
          tipo: "destacado",
          texto: "El eje formal–informal es el más evaluado. El registro formal aparece en contextos de distancia, prestigio o seriedad: documentos, exámenes, trato con desconocidos o superiores. El registro informal o coloquial se usa en la confianza: familia, amistades, conversación cotidiana. Cada uno deja marcas reconocibles en el léxico, el tratamiento personal y la sintaxis.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Marcas de cada registro",
          columnas: ["Rasgo", "Registro formal", "Registro informal"],
          filas: [
            ["Tratamiento", "usted, fórmulas de cortesía", "tú, vos, apodos"],
            ["Léxico", "preciso, sin coloquialismos", "muletillas, modismos («o sea», «padrísimo»)"],
            ["Sintaxis", "oraciones completas y planificadas", "frases cortas, elipsis, interjecciones"],
            ["Apócope/abrev.", "se evita («profesor», no «profe»)", "frecuente («profe», «bici», «finde»)"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "misma idea, dos registros — elegir según el contexto",
          asi_es: "Formal: «Le agradecería que revisara mi solicitud cuando le sea posible.»",
          asi_no: "Informal: «Oye, échale un ojo a mi solicitud cuando puedas, ¿va?» (válido entre amigos, inadecuado en un trámite)",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "B",
          titulo: "El registro informal no es incorrecto: es inadecuado solo cuando el contexto pide formalidad",
          asi_es: "Entre amigos: «¿Vienes al cine?» (informal y perfectamente adecuado)",
          asi_no: "En una carta de presentación: «¿Se animan a contratarme?» (coloquialismo inadecuado al contexto)",
        },
      ],
    },
    {
      id: 4,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — Formal vs. informal",
          enunciado: "¿Cuál de las siguientes versiones corresponde a un registro FORMAL adecuado para una solicitud institucional?",
          opciones: [
            "«Quería ver si me echan la mano con la beca.»",
            "«Solicito atentamente que se considere mi postulación a la beca.»",
            "«Porfa, necesito la beca, ¿sí se puede?»",
          ],
          correcta: 1,
          explicacion: "«Solicito atentamente que se considere mi postulación…» usa léxico preciso, fórmula de cortesía y sintaxis planificada, propios del registro formal. Las otras dos opciones contienen coloquialismos («echar la mano», «porfa») inadecuados para un documento institucional.",
        },
      ],
    },
    {
      id: 5,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 2 — Formal vs. informal",
          enunciado: "«El evento estuvo súper padre y la neta nadie se quería ir.» ¿Qué rasgo identifica el registro de esta oración?",
          apoyo: "El evento estuvo súper padre y la neta nadie se quería ir.",
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "Registro formal por usar oraciones completas",
            "Registro informal por los modismos y muletillas («súper padre», «la neta»)",
            "Registro especializado por el tema del evento",
          ],
          correcta: 1,
          explicacion: "Los modismos «súper padre» y «la neta» son coloquialismos característicos del registro informal. No hay tecnicismos (no es especializado) y la presencia de modismos descarta el registro formal.",
        },
      ],
    },
    {
      id: 6,
      tipo: "lienzo",
      etiqueta: "Dimensión 2 · Nivel de lengua",
      titulo: "Niveles: culto, estándar y popular",
      bloques: [
        {
          tipo: "destacado",
          texto: "El nivel de lengua refleja el dominio y la norma que emplea el hablante. El nivel culto se apega a la norma, posee léxico amplio y construcciones complejas; es propio de textos académicos y literarios. El nivel estándar es el de uso común correcto, neutro, comprensible para todos. El nivel popular o vulgar se aleja de la norma: incluye incorrecciones, vulgarismos y expresiones marcadas socialmente. El EXANI-II valora el nivel culto y estándar en la redacción formal.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Los tres niveles de la lengua",
          columnas: ["Nivel", "Características", "Ejemplo"],
          filas: [
            [
              "Culto",
              "Apego a la norma, riqueza léxica, sintaxis elaborada",
              "«Resulta imprescindible reconsiderar dicha hipótesis.»",
            ],
            ["Estándar", "Uso correcto y neutro, accesible a todos", "«Hay que volver a pensar esa idea.»"],
            [
              "Popular",
              "Aleja de la norma; vulgarismos e incorrecciones",
              "«Hay que repensar esa cosa, ¿no?, pos sí.»",
            ],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "vulgarismo vs. forma normativa",
          asi_es: "Normativo: «No hubo problemas.» / «Vayamos al museo.»",
          asi_no: "Vulgarismo: «No hubieron problemas.» / «Vámonos al museo, haiga lo que haiga.»",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "C",
          titulo: "Un texto puede ser formal pero contener vulgarismos: formalidad (contexto) y nivel (norma) son ejes distintos",
          asi_es: "Formal y culto: «Le informo que no se presentaron incidencias.»",
          asi_no: "Formal en intención pero con vulgarismo: «Le informo que no hubieron incidencias.» (concordancia incorrecta de «haber»)",
        },
      ],
    },
    {
      id: 7,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — Niveles de lengua",
          enunciado: "«Dijistes que ibas a venir, pero no vinistes.» ¿Qué nivel de lengua refleja y por qué?",
          apoyo: "Dijistes que ibas a venir, pero no vinistes.",
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "Nivel culto, por el uso de tiempos pasados",
            "Nivel popular, por los vulgarismos «dijistes» y «vinistes»",
            "Nivel estándar, porque se entiende el mensaje",
          ],
          correcta: 1,
          explicacion: "Las formas «dijistes» y «vinistes» son vulgarismos: la segunda persona del pretérito no lleva -s final (lo correcto es «dijiste», «viniste»). Esa desviación de la norma sitúa la oración en el nivel popular, aunque el mensaje se entienda.",
        },
      ],
    },
    {
      id: 8,
      tipo: "lienzo",
      etiqueta: "Dimensión 3 · Canal y especialización",
      titulo: "Canal (oral/escrito) y registro especializado",
      bloques: [
        {
          tipo: "destacado",
          texto: "El canal condiciona el registro. El registro oral es inmediato y espontáneo: admite repeticiones, frases inacabadas, apoyo en gestos y entonación. El registro escrito es planificado y autónomo: exige claridad, puntuación y estructura, porque el lector no comparte el contexto del emisor. Además, cada campo del saber tiene un registro especializado o técnico, con tecnicismos propios (jurídico, científico, médico). El tecnicismo es preciso ante expertos, pero puede dificultar la comprensión de un público general.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Rasgos según canal y especialización",
          columnas: ["Tipo", "Rasgo principal", "Ejemplo"],
          filas: [
            [
              "Oral espontáneo",
              "Inmediato, con muletillas y elipsis",
              "«Eh… o sea, lo que digo es que… ya sabes.»",
            ],
            [
              "Escrito planificado",
              "Estructurado, puntuado, autónomo",
              "«El informe concluye que la medida fue eficaz.»",
            ],
            [
              "Especializado/técnico",
              "Tecnicismos precisos de un campo",
              "«El paciente presenta taquicardia sinusal.»",
            ],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "registro técnico vs. divulgativo de la misma idea",
          asi_es: "Técnico (ante médicos): «Se observa hiperglucemia posprandial.»",
          asi_no: "Divulgativo (público general): «El nivel de azúcar en la sangre sube tras comer.» (no es un error: cada uno es adecuado a su público)",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "A",
          titulo: "El tecnicismo es una virtud ante expertos, pero un obstáculo ante público general: la adecuación depende del destinatario",
          asi_es: "En una revista científica: «La reacción es exotérmica.»",
          asi_no: "En un folleto para niños: «La reacción es exotérmica.» (tecnicismo inadecuado al público → debió decir «libera calor»)",
        },
      ],
    },
    {
      id: 9,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — Canal y especialización",
          enunciado: "Un divulgador escribe para un público infantil: «Las plantas hacen la fotosíntesis para fabricar su alimento con la luz del sol.» ¿Por qué es adecuado el registro?",
          apoyo: "Las plantas hacen la fotosíntesis para fabricar su alimento con la luz del sol.",
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "Porque usa tecnicismos avanzados que demuestran rigor",
            "Porque explica un concepto con léxico accesible al destinatario",
            "Porque emplea un registro oral espontáneo con muletillas",
          ],
          correcta: 1,
          explicacion: "El registro es adecuado porque ajusta el léxico al destinatario (público infantil): conserva el término «fotosíntesis» pero lo explica con palabras sencillas. No abusa de tecnicismos ni emplea rasgos orales espontáneos.",
        },
      ],
    },
    {
      id: 10,
      tipo: "lienzo",
      etiqueta: "La competencia clave · Adecuación",
      titulo: "Adecuación: elegir el registro que pide la situación",
      bloques: [
        {
          tipo: "destacado",
          texto: "Adecuación es la propiedad textual que consiste en ajustar el registro a la situación comunicativa concreta: quién escribe, a quién, por qué canal, con qué intención y sobre qué tema. Un texto adecuado respeta las convenciones del contexto; un texto inadecuado las rompe, aunque sea gramaticalmente correcto. En el EXANI-II, los reactivos suelen presentar una situación y pedir la versión cuyo registro encaje con ella.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Situación → registro adecuado",
          columnas: ["Situación comunicativa", "Registro adecuado", "Marca esperada"],
          filas: [
            ["Oficio a una autoridad", "Formal, culto, escrito", "«Por medio del presente, solicito…»"],
            ["Mensaje a un amigo", "Informal, coloquial", "«¿Cómo vas? ¿Nos vemos hoy?»"],
            [
              "Artículo científico",
              "Formal, especializado",
              "«Los datos evidencian una correlación significativa.»",
            ],
            ["Publicidad para jóvenes", "Informal cuidado, cercano", "«Vive la experiencia. Atrévete.»"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "adecuado vs. inadecuado en la misma situación (queja formal a una empresa)",
          asi_es: "«Manifiesto mi inconformidad con el servicio recibido y solicito una solución.»",
          asi_no: "«Su servicio es un desastre, ya me harté, arréglenlo o me voy.» (correcto gramaticalmente, inadecuado al registro formal)",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "B",
          titulo: "Una oración puede ser gramaticalmente correcta y aun así inadecuada: la adecuación se juzga contra el contexto, no contra la gramática",
          asi_es: "En una felicitación formal: «Reciba mi más sincera enhorabuena.»",
          asi_no: "En esa misma felicitación formal: «¡Felicidades, crack!» (gramatical, pero inadecuado al registro)",
        },
      ],
    },
    {
      id: 11,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — Adecuación",
          enunciado: "Situación: un alumno debe escribir la conclusión de un ensayo académico. ¿Cuál opción es la ADECUADA al registro?",
          opciones: [
            "«Pues ya para acabar, esto es lo que pienso y ya.»",
            "«En conclusión, la evidencia analizada respalda la hipótesis planteada.»",
            "«Bueno, la verdad es que el tema da para mucho, ¿no creen?»",
          ],
          correcta: 1,
          explicacion: "«En conclusión, la evidencia analizada respalda la hipótesis planteada» tiene el registro formal-culto que exige un ensayo académico: conector apropiado, léxico preciso y objetividad. Las otras opciones usan un registro coloquial inadecuado al contexto académico.",
        },
      ],
    },
    {
      id: 12,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 2 — Adecuación",
          enunciado: "Situación: un mensaje breve a un compañero de equipo para confirmar una reunión informal. ¿Cuál registro es el ADECUADO?",
          opciones: [
            "«Por medio de la presente confirmo mi asistencia a la sesión.»",
            "«Va, nos vemos a las 5 para organizar el trabajo.»",
            "«Se notifica formalmente la celebración del encuentro acordado.»",
          ],
          correcta: 1,
          explicacion: "Entre compañeros y para un mensaje breve e informal, «Va, nos vemos a las 5…» es lo adecuado: cercano y eficiente. Las otras dos versiones tienen un registro excesivamente formal y burocrático, inadecuado para la confianza y el canal del mensaje.",
        },
      ],
    },
    {
      id: 13,
      tipo: "lienzo",
      etiqueta: "El error más evaluado · Mezcla de registros",
      titulo: "Mezcla de registros: la incoherencia que se penaliza",
      bloques: [
        {
          tipo: "destacado",
          texto: "El error de adecuación más frecuente es la mezcla de registros: introducir una marca coloquial en un texto formal (o al revés) rompiendo la coherencia del tono. El texto debe mantener un registro uniforme de principio a fin. El EXANI-II pide con frecuencia detectar la palabra o expresión que «rompe» el registro y sustituirla por una equivalente del registro dominante.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Detectar y corregir la mezcla de registros",
          columnas: ["Texto con mezcla", "Elemento que rompe", "Corrección"],
          filas: [
            [
              "«El estudio demuestra que el método es un exitazo.»",
              "«exitazo» (coloquial)",
              "«es eficaz / exitoso»",
            ],
            [
              "«Se solicita su valiosa colaboración, porfa.»",
              "«porfa» (coloquial)",
              "«por favor / atentamente»",
            ],
            [
              "«El informe concluye que la cosa salió mal.»",
              "«la cosa salió mal»",
              "«los resultados fueron negativos»",
            ],
            ["«Los datos están súper claros.»", "«súper» (coloquial)", "«muy claros / evidentes»"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "registro uniforme vs. registro mezclado",
          asi_es: "Uniforme (formal): «El experimento confirmó la hipótesis de manera contundente.»",
          asi_no: "Mezclado: «El experimento confirmó la hipótesis y quedó increíble.» («increíble» rompe el tono académico)",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "C",
          titulo: "Basta una sola palabra de otro registro para romper la coherencia tonal de todo el texto",
          asi_es: "«La propuesta resulta viable y se recomienda su aprobación.»",
          asi_no: "«La propuesta resulta viable y, la verdad, está genial.» (dos marcas coloquiales rompen el registro formal)",
        },
      ],
    },
    {
      id: 14,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — Mezcla de registros",
          enunciado: "«La investigación, basada en datos de diez años, arrojó resultados padrísimos.» ¿Qué elemento rompe el registro y cómo se corrige?",
          apoyo: "La investigación, basada en datos de diez años, arrojó resultados padrísimos.",
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "«investigación»; debería decir «chamba»",
            "«padrísimos»; debería decir «notables / relevantes»",
            "«datos de diez años»; debería eliminarse",
          ],
          correcta: 1,
          explicacion: "«padrísimos» es un coloquialismo que rompe el registro formal-académico del resto de la oración. La corrección adecuada es un adjetivo del mismo nivel, como «notables» o «relevantes», para mantener un registro uniforme.",
        },
      ],
    },
    {
      id: 15,
      tipo: "lienzo",
      etiqueta: "Lo esencial del registro lingüístico",
      titulo: "Resumen",
      bloques: [
        {
          tipo: "lista",
          items: [
            {
              titulo: "Registro = adecuación",
              texto: "ajustar la lengua a la situación; no hay un registro «mejor», solo el adecuado",
            },
            {
              titulo: "Cuatro factores",
              texto: "relación entre interlocutores, canal, tema e intención",
            },
            {
              titulo: "Eje formal–informal",
              texto: "tratamiento (usted/tú), léxico y sintaxis lo delatan",
            },
            {
              titulo: "Niveles de lengua",
              texto: "culto, estándar y popular; el EXANI-II valora el culto y el estándar",
            },
            {
              titulo: "Canal y especialización",
              texto: "oral vs. escrito; el tecnicismo se ajusta al destinatario",
            },
            {
              titulo: "Error clave",
              texto: "mezclar registros rompe la coherencia tonal; mantén el registro uniforme",
            },
          ],
        },
      ],
    },
  ],
};
