// Datos de la presentación: Concordancia Verbal
// 24 reglas para el EXANI-I — Redacción Indirecta

export const PRESENTACION = {
  id: "concordancia-verbal",
  titulo: "Concordancia Verbal",
  materia: "Español",
  slides: [
    // ── Portada ──────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Concordancia Verbal",
      subtitulo: "Las 24 reglas para el EXANI-I",
      etiqueta: "Español · Redacción Indirecta"
    },

    // ── Regla 1: Sujeto simple ────────────────────────────────────────────────
    {
      id: 1,
      tipo: "regla",
      etiqueta: "Regla 1 / 24",
      titulo: "Sujeto simple — concordancia directa",
      descripcion: "El verbo concuerda en número (singular/plural) y persona (1ª, 2ª, 3ª) con el núcleo del sujeto. Clave: identifica el núcleo ignorando los complementos que lo rodean; el verbo responde a ese núcleo, no a las palabras que lo modifican.",
      ejemplos: [
        {
          categoria: "Singular básico",
          correcto: "La maestra explicó el tema con claridad.",
          incorrecto: "La maestra explicaron el tema con claridad."
        },
        {
          categoria: "Plural básico",
          correcto: "Los alumnos entregaron su tarea antes del plazo.",
          incorrecto: "Los alumnos entregó su tarea antes del plazo."
        },
        {
          categoria: "Núcleo + complemento",
          correcto: "El director del plantel aprobó el nuevo reglamento.",
          incorrecto: "El director del plantel aprobaron el nuevo reglamento."
        },
        {
          categoria: "Sujeto pospuesto",
          correcto: "Llegaron los delegados internacionales al foro.",
          incorrecto: "Llegó los delegados internacionales al foro."
        },
        {
          categoria: "Colectivo singular",
          correcto: "La delegación mexicana asistió a la conferencia en Ginebra.",
          incorrecto: "La delegación mexicana asistieron a la conferencia en Ginebra."
        },
        {
          categoria: "Frase nominal compleja",
          correcto: "El conjunto de datos recopilados durante el estudio demostró la hipótesis.",
          incorrecto: "El conjunto de datos recopilados durante el estudio demostraron la hipótesis."
        }
      ]
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 1",
      pregunta: "«El informe __ presentado ante el consejo directivo en la sesión del lunes.»",
      opciones: ["fueron", "fue", "fuimos"],
      correcta: 1,
      explicacion: "«fue» — sujeto «el informe» es masculino singular → verbo en singular: «fue presentado».",
      pasos: []
    },
    {
      id: 3,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 1",
      pregunta: "«Las propuestas __ aprobadas por unanimidad en la última sesión ordinaria.»",
      opciones: ["fue", "fuimos", "fueron"],
      correcta: 2,
      explicacion: "«fueron» — sujeto «las propuestas» es femenino plural → verbo en plural: «fueron aprobadas».",
      pasos: []
    },
    {
      id: 4,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 1",
      pregunta: "«La delegación mexicana __ al evento internacional celebrado en Ginebra.»",
      opciones: ["asistieron", "asistimos", "asistió"],
      correcta: 2,
      explicacion: "«asistió» — sujeto «la delegación» es singular (colectivo) → verbo en singular: «asistió».",
      pasos: []
    },

    // ── Regla 2: Sujeto compuesto con «y» ────────────────────────────────────
    {
      id: 5,
      tipo: "regla",
      etiqueta: "Regla 2 / 24",
      titulo: "Sujeto compuesto con «y»",
      descripcion: "Cuando dos o más sujetos se unen con «y» (o «e» ante palabras que empiezan con i-/hi-), el verbo va siempre en plural. Esto aplica sin importar el género de los sujetos ni si uno de ellos es singular; la suma de dos elementos obliga el plural.",
      ejemplos: [
        {
          categoria: "Masc. + Fem.",
          correcto: "El coordinador y la jefa presentaron el informe ante el consejo.",
          incorrecto: "El coordinador y la jefa presentó el informe ante el consejo."
        },
        {
          categoria: "Fem. + Fem.",
          correcto: "La propuesta y la iniciativa fueron aprobadas por unanimidad.",
          incorrecto: "La propuesta y la iniciativa fue aprobada por unanimidad."
        },
        {
          categoria: "Masc. + Masc.",
          correcto: "El rector y el secretario firmaron el convenio de colaboración.",
          incorrecto: "El rector y el secretario firmó el convenio de colaboración."
        },
        {
          categoria: "Tres o más sujetos",
          correcto: "El director, la subdirectora y el coordinador aprobaron el plan.",
          incorrecto: "El director, la subdirectora y el coordinador aprobó el plan."
        },
        {
          categoria: "Persona + equipo",
          correcto: "La investigadora y su equipo presentaron los resultados en el congreso.",
          incorrecto: "La investigadora y su equipo presentó los resultados en el congreso."
        },
        {
          categoria: "«e» ante i-/hi-",
          correcto: "El alumno e Ignacio entregaron el proyecto a tiempo.",
          incorrecto: "El alumno e Ignacio entregó el proyecto a tiempo."
        }
      ]
    },
    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 2",
      pregunta: "«El rector y la secretaria __ el convenio ante las autoridades universitarias.»",
      opciones: ["firmó", "firmaron", "firmamos"],
      correcta: 1,
      explicacion: "«firmaron» — sujeto compuesto coordinado con «y» (dos sujetos) → verbo en plural: «firmaron».",
      pasos: []
    },
    {
      id: 7,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 2",
      pregunta: "«El análisis y la propuesta __ revisados por el comité de evaluación institucional.»",
      opciones: ["fue", "fuimos", "fueron"],
      correcta: 2,
      explicacion: "«fueron» — dos sujetos coordinados con «y» → verbo en plural: «fueron revisados».",
      pasos: []
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 2",
      pregunta: "«La investigadora y su equipo __ los resultados en el congreso internacional.»",
      opciones: ["presentó", "presentamos", "presentaron"],
      correcta: 2,
      explicacion: "«presentaron» — «la investigadora y su equipo» son dos elementos coordinados con «y» → verbo en plural.",
      pasos: []
    },

    // ── Regla 3: Sujeto con núcleo colectivo ─────────────────────────────────
    {
      id: 9,
      tipo: "regla",
      etiqueta: "Regla 3 / 24",
      titulo: "Sujeto con núcleo colectivo",
      descripcion: "Cuando el núcleo del sujeto es un sustantivo colectivo (equipo, comité, mayoría, delegación, junta, multitud...), el verbo va en singular, aunque el colectivo represente a muchos individuos.",
      ejemplos: [
        {
          categoria: "Colectivo",
          correcto: "La mayoría votó a favor de la propuesta en la sesión plenaria.",
          incorrecto: "La mayoría votaron a favor de la propuesta en la sesión."
        },
        {
          categoria: "Colectivo",
          correcto: "El equipo ganó el campeonato nacional tras meses de entrenamiento.",
          incorrecto: "El equipo ganaron el campeonato nacional."
        },
        {
          categoria: "Colectivo",
          correcto: "El comité emitió un dictamen unánime sobre el caso presentado.",
          incorrecto: "El comité emitieron un dictamen unánime sobre el caso."
        }
      ]
    },
    {
      id: 10,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 3",
      pregunta: "«La mayoría de los estudiantes __ a favor de la propuesta en la votación.»",
      opciones: ["votaron", "votamos", "votó"],
      correcta: 2,
      explicacion: "«votó» — núcleo = «la mayoría» (colectivo singular). «De los estudiantes» es solo complemento del nombre, no rige el verbo.",
      pasos: []
    },
    {
      id: 11,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 3",
      pregunta: "«El equipo __ al campeonato nacional con la mejor preparación de su historia.»",
      opciones: ["llegaron", "llegamos", "llegó"],
      correcta: 2,
      explicacion: "«llegó» — «el equipo» es un colectivo singular → verbo en singular. El error frecuente es usar plural por asociación con los miembros.",
      pasos: []
    },
    {
      id: 12,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 3",
      pregunta: "«La junta directiva __ suspender la sesión ordinaria por falta de quórum suficiente.»",
      opciones: ["decidieron", "decidimos", "decidió"],
      correcta: 2,
      explicacion: "«decidió» — «la junta directiva» es colectivo singular → verbo en singular: «decidió».",
      pasos: []
    },

    // ── Regla 4: Sujeto tácito ────────────────────────────────────────────────
    {
      id: 13,
      tipo: "regla",
      etiqueta: "Regla 4 / 24",
      titulo: "Sujeto tácito (elíptico)",
      descripcion: "El sujeto tácito no aparece explícitamente, pero se recupera de la desinencia verbal. La concordancia está implícita en la forma del verbo: -mos (1ª pl.), -ste (2ª sing.), -ron (3ª pl.), etc.",
      ejemplos: [
        {
          categoria: "1ª Plural",
          correcto: "[Nosotros] Llegamos tarde a la reunión del consejo.",
          incorrecto: "No hay error posible, pero debe saberse que -mos = 1ª persona plural."
        },
        {
          categoria: "2ª Singular",
          correcto: "[Tú] ¿Entregaste el informe a tiempo al coordinador?",
          incorrecto: "La confusión ocurre cuando se usa «entregaste» sin reconocer que el sujeto es «tú»."
        },
        {
          categoria: "3ª Plural",
          correcto: "[Ellos/Ellas] Informaron que el evento fue cancelado por las lluvias.",
          incorrecto: "Confundir «informaron» (3ª pl.) con un sujeto singular omitido."
        }
      ]
    },
    {
      id: 14,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 4",
      pregunta: "«Terminamos el proyecto antes del plazo establecido por el organismo evaluador.» — El sujeto implícito es:",
      opciones: ["Él", "Nosotros", "Ustedes"],
      correcta: 1,
      explicacion: "«Nosotros» — la desinencia «-mos» corresponde a 1ª persona plural. Es la marca inequívoca del sujeto tácito en esta forma verbal.",
      pasos: []
    },
    {
      id: 15,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 4",
      pregunta: "«¿Llegaste a tiempo a la presentación oral ante el jurado del concurso?» — El sujeto implícito es:",
      opciones: ["Tú", "Él", "Ellos"],
      correcta: 0,
      explicacion: "«Tú» — la desinencia «-ste» corresponde a 2ª persona singular del pretérito indefinido. Marca al interlocutor como sujeto.",
      pasos: []
    },
    {
      id: 16,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 4",
      pregunta: "«Informaron que el evento se canceló por las lluvias inesperadas en la región.» — El sujeto implícito es:",
      opciones: ["Yo", "Nosotros", "Ellos/Ellas"],
      correcta: 2,
      explicacion: "«Ellos/Ellas» — la desinencia «-ron» corresponde a 3ª persona plural. El sujeto tácito se refiere a personas no especificadas en el contexto.",
      pasos: []
    },

    // ── Regla 5: Inciso intercalado ───────────────────────────────────────────
    {
      id: 17,
      tipo: "regla",
      etiqueta: "Regla 5 / 24",
      titulo: "Inciso intercalado entre sujeto y verbo",
      descripcion: "Cuando hay un inciso entre el sujeto y el verbo, el verbo concuerda con el NÚCLEO del sujeto principal, no con el elemento del inciso. El inciso puede eliminarse y la concordancia no cambia.",
      ejemplos: [
        {
          categoria: "Inciso",
          correcto: "El director, así como todos los docentes, asistió a la reunión.",
          incorrecto: "El director, así como todos los docentes, asistieron a la reunión."
        },
        {
          categoria: "Inciso",
          correcto: "La propuesta, junto con sus anexos técnicos, fue entregada en tiempo.",
          incorrecto: "La propuesta, junto con sus anexos técnicos, fueron entregadas en tiempo."
        },
        {
          categoria: "Inciso",
          correcto: "El informe, acompañado de tres apéndices, fue revisado por el comité.",
          incorrecto: "El informe, acompañado de tres apéndices, fueron revisados por el comité."
        }
      ]
    },
    {
      id: 18,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 5",
      pregunta: "«El rector, así como todos los decanos, __ a la ceremonia de graduación del ciclo.»",
      opciones: ["asistieron", "asistimos", "asistió"],
      correcta: 2,
      explicacion: "«asistió» — núcleo del sujeto = «El rector» (singular). «Así como todos los decanos» es un inciso que no coordina sujetos. Prueba: elimina el inciso → «El rector asistió».",
      pasos: []
    },
    {
      id: 19,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 5",
      pregunta: "«La investigadora, acompañada de su equipo, __ los resultados preliminares del estudio.»",
      opciones: ["presentaron", "presentamos", "presentó"],
      correcta: 2,
      explicacion: "«presentó» — núcleo = «la investigadora» (singular). «Acompañada de su equipo» es un inciso adjetival. El verbo concuerda con el núcleo, no con el inciso.",
      pasos: []
    },
    {
      id: 20,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 5",
      pregunta: "«El proyecto, junto con su presupuesto y cronograma detallado, __ ante el consejo directivo.»",
      opciones: ["fueron presentados", "fuimos presentados", "fue presentado"],
      correcta: 2,
      explicacion: "«fue presentado» — núcleo = «el proyecto» (singular). «Junto con su presupuesto y cronograma» es un inciso. Verbo en singular masculino.",
      pasos: []
    },

    // ── Regla 6: Conectores que forman inciso ────────────────────────────────
    {
      id: 21,
      tipo: "regla",
      etiqueta: "Regla 6 / 24",
      titulo: "Conectores que forman inciso (no coordinan sujetos)",
      descripcion: "Los conectores «así como», «junto con», «además de», «al igual que», «incluyendo a», «acompañado de» y «seguido de» introducen incisos, NO coordinan sujetos. El verbo concuerda con el núcleo del sujeto principal.",
      ejemplos: [
        {
          categoria: "Además de",
          correcto: "El comité, además de los asesores externos, revisó el documento final.",
          incorrecto: "El comité, además de los asesores externos, revisaron el documento final."
        },
        {
          categoria: "Al igual que",
          correcto: "La directora, al igual que sus colaboradores, firmó el acuerdo institucional.",
          incorrecto: "La directora, al igual que sus colaboradores, firmaron el acuerdo."
        },
        {
          categoria: "Incluyendo a",
          correcto: "El rector, incluyendo a los decanos, aprobó la resolución del consejo.",
          incorrecto: "El rector, incluyendo a los decanos, aprobaron la resolución del consejo."
        }
      ]
    },
    {
      id: 22,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 6",
      pregunta: "«La propuesta, además de sus anexos técnicos, __ al organismo regulador para su revisión.»",
      opciones: ["fueron enviadas", "fuimos enviados", "fue enviada"],
      correcta: 2,
      explicacion: "«fue enviada» — núcleo = «la propuesta» (fem. sing.). «Además de sus anexos» es inciso. No coordina sujetos; el verbo va en singular femenino.",
      pasos: []
    },
    {
      id: 23,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 6",
      pregunta: "«El director, al igual que los coordinadores de área, __ a la reunión plenaria convocada.»",
      opciones: ["asistieron", "asistimos", "asistió"],
      correcta: 2,
      explicacion: "«asistió» — «Al igual que los coordinadores» es un inciso comparativo. El núcleo del sujeto sigue siendo «el director» (singular).",
      pasos: []
    },
    {
      id: 24,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 6",
      pregunta: "«La investigadora, incluyendo a su equipo de apoyo, __ el premio nacional de ciencias.»",
      opciones: ["recibieron", "recibimos", "recibió"],
      correcta: 2,
      explicacion: "«recibió» — «Incluyendo a su equipo» es inciso. El núcleo es «la investigadora» (singular). El verbo concuerda con el núcleo.",
      pasos: []
    },

    // ── Regla 7: Sujeto pospuesto ────────────────────────────────────────────
    {
      id: 25,
      tipo: "regla",
      etiqueta: "Regla 7 / 24",
      titulo: "Sujeto pospuesto al verbo",
      descripcion: "El sujeto puede aparecer después del verbo sin que cambie la concordancia. El verbo siempre concuerda con el sujeto real, esté antes o después de él en la oración.",
      ejemplos: [
        {
          categoria: "Pospuesto",
          correcto: "En el aula faltaron tres estudiantes el día del examen.",
          incorrecto: "En el aula faltó tres estudiantes el día del examen."
        },
        {
          categoria: "Pospuesto",
          correcto: "Al final de la cumbre firmaron el tratado todas las naciones representadas.",
          incorrecto: "Al final de la cumbre firmó el tratado todas las naciones representadas."
        },
        {
          categoria: "Interrogativa",
          correcto: "¿Cuándo llegaron los invitados internacionales al aeropuerto?",
          incorrecto: "¿Cuándo llegó los invitados internacionales al aeropuerto?"
        }
      ]
    },
    {
      id: 26,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 7",
      pregunta: "«En la exposición __ varios cuadros de artistas locales que nunca habían sido exhibidos.»",
      opciones: ["estaba", "estábamos", "estaban"],
      correcta: 2,
      explicacion: "«estaban» — sujeto pospuesto = «varios cuadros» (masc. pl.). Aunque el verbo va antes, debe concordar con el sujeto plural.",
      pasos: []
    },
    {
      id: 27,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 7",
      pregunta: "«Al final del congreso __ las conclusiones principales del evento científico internacional.»",
      opciones: ["fue presentado", "fuimos presentados", "fueron presentadas"],
      correcta: 2,
      explicacion: "«fueron presentadas» — sujeto pospuesto = «las conclusiones» (fem. pl.). El verbo concuerda con el sujeto aunque vaya después.",
      pasos: []
    },
    {
      id: 28,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 7",
      pregunta: "«¿Cuándo __ los resultados del estudio longitudinal que realizó el equipo de investigación?»",
      opciones: ["fue publicado", "fuimos publicados", "fueron publicados"],
      correcta: 2,
      explicacion: "«fueron publicados» — sujeto pospuesto = «los resultados» (masc. pl.). En interrogativas el sujeto frecuentemente va al final.",
      pasos: []
    },

    // ── Regla 8: Hay, hace, hubo ─────────────────────────────────────────────
    {
      id: 29,
      tipo: "regla",
      etiqueta: "Regla 8 / 24",
      titulo: "«Hay», «hace», «hubo» — impersonales",
      descripcion: "Las construcciones impersonales «hay», «hace» (temporal), «hubo», «había», «hará» no tienen sujeto gramatical y van siempre en tercera persona singular, sin importar el sustantivo que les sigue.",
      ejemplos: [
        {
          categoria: "Hay",
          correcto: "Hay muchos problemas pendientes que resolver en el departamento.",
          incorrecto: "Han muchos problemas pendientes que resolver en el departamento."
        },
        {
          categoria: "Hace",
          correcto: "Hace varios días que no recibimos noticias sobre los resultados.",
          incorrecto: "Hacen varios días que no recibimos noticias sobre los resultados."
        },
        {
          categoria: "Hubo",
          correcto: "Hubo varios accidentes en la autopista durante el fin de semana.",
          incorrecto: "Hubieron varios accidentes en la autopista durante el fin de semana."
        }
      ]
    },
    {
      id: 30,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 8",
      pregunta: "«__ más de cien personas en el auditorio cuando comenzó el evento cultural.»",
      opciones: ["Hubieron", "Habían", "Hubo"],
      correcta: 2,
      explicacion: "«Hubo» — impersonal, siempre en singular. «Hubieron» es un error muy frecuente en español; la forma impersonal de «haber» no tiene plural.",
      pasos: []
    },
    {
      id: 31,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 8",
      pregunta: "«__ muchos factores que considerar antes de tomar una decisión tan importante.»",
      opciones: ["Han", "Habrán", "Hay"],
      correcta: 2,
      explicacion: "«Hay» — impersonal, siempre en singular. «Han» y «habrán» son plurales que no existen como impersonales de «haber».",
      pasos: []
    },
    {
      id: 32,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 8",
      pregunta: "«__ varios días desde que se publicaron los resultados del examen nacional.»",
      opciones: ["Hacen", "Hicieron", "Hace"],
      correcta: 2,
      explicacion: "«Hace» — impersonal de tiempo, siempre en singular. «Hacen días» es un error frecuente; el verbo «hacer» en expresiones temporales es impersonal y siempre va en singular.",
      pasos: []
    },

    // ── Regla 9: Ninguno / nadie / nada ──────────────────────────────────────
    {
      id: 33,
      tipo: "regla",
      etiqueta: "Regla 9 / 24",
      titulo: "«Ninguno / nadie / nada»",
      descripcion: "Los pronombres indefinidos negativos «ninguno», «nadie» y «nada» exigen verbo en tercera persona singular, aunque vayan seguidos de un complemento preposicional en plural.",
      ejemplos: [
        {
          categoria: "Ninguno de",
          correcto: "Ninguno de los reportes cumplió los criterios establecidos por el comité.",
          incorrecto: "Ninguno de los reportes cumplieron los criterios del comité."
        },
        {
          categoria: "Nadie",
          correcto: "Nadie en el grupo de trabajo cuestionó la decisión del coordinador.",
          incorrecto: "Nadie en el grupo de trabajo cuestionaron la decisión del coordinador."
        },
        {
          categoria: "Nada",
          correcto: "Nada de lo ocurrido ayer justifica esa reacción desproporcionada.",
          incorrecto: "Nada de lo ocurrido ayer justifican esa reacción desproporcionada."
        }
      ]
    },
    {
      id: 34,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 9",
      pregunta: "«Ninguno de los proyectos presentados __ los requisitos mínimos de evaluación del concurso.»",
      opciones: ["cumplieron", "cumplimos", "cumplió"],
      correcta: 2,
      explicacion: "«cumplió» — «ninguno» es pronombre indefinido singular. «De los proyectos» es complemento, no el núcleo del sujeto. Verbo en singular.",
      pasos: []
    },
    {
      id: 35,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 9",
      pregunta: "«Nadie en el grupo de trabajo __ la decisión tomada por el coordinador académico.»",
      opciones: ["cuestionaron", "cuestionamos", "cuestionó"],
      correcta: 2,
      explicacion: "«cuestionó» — «nadie» siempre exige verbo en tercera persona singular. El complemento «en el grupo» no afecta la concordancia.",
      pasos: []
    },
    {
      id: 36,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 9",
      pregunta: "«Nada de lo que declararon los testigos __ suficientemente relevante para el caso legal.»",
      opciones: ["resultaron", "resultamos", "resultó"],
      correcta: 2,
      explicacion: "«resultó» — «nada» es pronombre indefinido singular → verbo en singular: «resultó». El complemento «de lo que declararon» no cambia la concordancia.",
      pasos: []
    },

    // ── Regla 10: Alguien, cualquiera, cada uno ───────────────────────────────
    {
      id: 37,
      tipo: "regla",
      etiqueta: "Regla 10 / 24",
      titulo: "«Alguien», «cualquiera», «cada uno»",
      descripcion: "Los pronombres indefinidos «nadie», «alguien», «cualquiera», «uno», «cada uno» exigen verbo en tercera persona singular, sin excepción.",
      ejemplos: [
        {
          categoria: "Alguien",
          correcto: "¿Alguien sabe la respuesta correcta a ese reactivo tan difícil?",
          incorrecto: "¿Alguien saben la respuesta correcta a ese reactivo?"
        },
        {
          categoria: "Cualquiera",
          correcto: "Cualquiera puede lograrlo con práctica constante y dedicación.",
          incorrecto: "Cualquiera pueden lograrlo con práctica constante y dedicación."
        },
        {
          categoria: "Cada uno",
          correcto: "Cada uno debe entregar su formulario antes del viernes por la tarde.",
          incorrecto: "Cada uno deben entregar su formulario antes del viernes."
        }
      ]
    },
    {
      id: 38,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 10",
      pregunta: "«¿__ puede explicar el procedimiento para resolver este tipo de reactivos del EXANI-I?»",
      opciones: ["Alguien saben", "Alguien supieron", "Alguien sabe"],
      correcta: 2,
      explicacion: "«Alguien sabe» — «alguien» siempre exige verbo en 3ª persona singular. «Saben» y «supieron» son plurales incompatibles con «alguien».",
      pasos: []
    },
    {
      id: 39,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 10",
      pregunta: "«Cualquiera de los candidatos __ los requisitos mínimos establecidos para el puesto.»",
      opciones: ["cumplen", "cumplimos", "cumple"],
      correcta: 2,
      explicacion: "«cumple» — «cualquiera» exige verbo en 3ª persona singular. «Cumplen» (plural) no concuerda con el pronombre indefinido singular.",
      pasos: []
    },
    {
      id: 40,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 10",
      pregunta: "«Cada uno de los participantes __ entregar su proyecto antes del plazo señalado.»",
      opciones: ["deben", "debemos", "debe"],
      correcta: 2,
      explicacion: "«debe» — «cada uno» siempre exige 3ª persona singular. «De los participantes» es complemento del pronombre y no altera la concordancia.",
      pasos: []
    },

    // ── Regla 11: Uno de los que ──────────────────────────────────────────────
    {
      id: 41,
      tipo: "regla",
      etiqueta: "Regla 11 / 24",
      titulo: "Construcción «uno de los que»",
      descripcion: "En «uno/una de los/las que», el verbo en la cláusula relativa va en plural, porque el relativo «que» retoma al antecedente plural (los/las), no al «uno/una» singular.",
      ejemplos: [
        {
          categoria: "Fem. Pl.",
          correcto: "Ella es una de las investigadoras que han publicado en revistas internacionales.",
          incorrecto: "Ella es una de las investigadoras que ha publicado en revistas internacionales."
        },
        {
          categoria: "Masc. Pl.",
          correcto: "Él fue uno de los estudiantes que aprobaron con distinción el examen nacional.",
          incorrecto: "Él fue uno de los estudiantes que aprobó con distinción el examen nacional."
        },
        {
          categoria: "Neut. Pl.",
          correcto: "Es uno de los pocos proyectos que han recibido financiamiento completo este año.",
          incorrecto: "Es uno de los pocos proyectos que ha recibido financiamiento completo este año."
        }
      ]
    },
    {
      id: 42,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 11",
      pregunta: "«Ella es una de las pocas investigadoras que __ publicado en revistas de primer nivel.»",
      opciones: ["ha", "hemos", "han"],
      correcta: 2,
      explicacion: "«han» — el relativo «que» retoma a «las pocas investigadoras» (plural). El verbo en la relativa concuerda con ese antecedente plural, no con «una».",
      pasos: []
    },
    {
      id: 43,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 11",
      pregunta: "«Fue uno de los estudiantes que __ el examen con la calificación más alta del grupo.»",
      opciones: ["aprobó", "aprobamos", "aprobaron"],
      correcta: 2,
      explicacion: "«aprobaron» — «que» retoma a «los estudiantes» (plural). El verbo en la relativa va en plural aunque la oración principal hable de «uno».",
      pasos: []
    },
    {
      id: 44,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 11",
      pregunta: "«Es uno de los pocos programas que __ logrado mantenerse sin ningún financiamiento externo.»",
      opciones: ["ha", "hemos", "han"],
      correcta: 2,
      explicacion: "«han» — «que» retoma a «los pocos programas» (plural). La construcción «uno de los que» siempre lleva plural en la relativa.",
      pasos: []
    },

    // ── Regla 12: Cuantificadores y partitivos ────────────────────────────────
    {
      id: 45,
      tipo: "regla",
      etiqueta: "Regla 12 / 24",
      titulo: "Cuantificadores y partitivos — norma preferida",
      descripcion: "Con «la mayoría de», «la mitad de», «una parte de», «el resto de», «una serie de», el verbo va preferentemente en singular (concordancia gramatical con el núcleo), aunque el plural también sea aceptado por concordancia de sentido.",
      ejemplos: [
        {
          categoria: "La mitad de",
          correcto: "La mitad de los documentos fue extraviada durante el traslado al nuevo edificio.",
          incorrecto: "La mitad de los documentos fueron extraviados. (aceptable pero no preferido)"
        },
        {
          categoria: "Una serie de",
          correcto: "Una serie de errores imprevistos provocó el fracaso del proyecto institucional.",
          incorrecto: "Una serie de errores imprevistos provocaron el fracaso. (aceptable pero no preferido)"
        },
        {
          categoria: "El resto de",
          correcto: "El resto de los participantes llegó puntualmente a la segunda sesión del taller.",
          incorrecto: "El resto de los participantes llegaron puntualmente. (aceptable, menos preciso)"
        }
      ]
    },
    {
      id: 46,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 12",
      pregunta: "«La mitad de los expedientes __ extraviada durante el traslado al nuevo edificio administrativo.»",
      opciones: ["fueron", "fuimos", "fue"],
      correcta: 2,
      explicacion: "«fue» — núcleo = «la mitad» (singular). Concordancia gramatical preferida. «Fueron» (por sentido) es aceptable pero no es la norma preferida en el EXANI-I.",
      pasos: []
    },
    {
      id: 47,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 12",
      pregunta: "«Una serie de factores imprevistos __ el retraso en la entrega del informe trimestral.»",
      opciones: ["provocaron", "provocamos", "provocó"],
      correcta: 2,
      explicacion: "«provocó» — núcleo = «una serie» (singular). Concordancia gramatical preferida. El EXANI-I generalmente evalúa esta forma como la correcta.",
      pasos: []
    },
    {
      id: 48,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 12",
      pregunta: "«El resto de los participantes __ puntualmente a la segunda sesión del taller de escritura.»",
      opciones: ["llegaron", "llegamos", "llegó"],
      correcta: 2,
      explicacion: "«llegó» — núcleo = «el resto» (singular). La concordancia gramatical (singular) es la norma preferida frente a la concordancia de sentido (plural).",
      pasos: []
    },

    // ── Regla 13: El número de ────────────────────────────────────────────────
    {
      id: 49,
      tipo: "regla",
      etiqueta: "Regla 13 / 24",
      titulo: "«El número de»",
      descripcion: "La expresión «el número de» lleva verbo en singular, porque el núcleo del sujeto es «el número» (sustantivo masculino singular), no el sustantivo que aparece en el complemento.",
      ejemplos: [
        {
          categoria: "Sing.",
          correcto: "El número de estudiantes inscritos ha aumentado considerablemente este ciclo.",
          incorrecto: "El número de estudiantes inscritos han aumentado considerablemente este ciclo."
        },
        {
          categoria: "Sing.",
          correcto: "El número de errores encontrados en el sistema resultó preocupante para el equipo.",
          incorrecto: "El número de errores encontrados en el sistema resultaron preocupantes."
        },
        {
          categoria: "Sing.",
          correcto: "El número de solicitudes recibidas supera ampliamente las expectativas del departamento.",
          incorrecto: "El número de solicitudes recibidas superan las expectativas del departamento."
        }
      ]
    },
    {
      id: 50,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 13",
      pregunta: "«El número de solicitudes recibidas __ las expectativas del departamento de admisiones.»",
      opciones: ["superan", "superamos", "supera"],
      correcta: 2,
      explicacion: "«supera» — núcleo = «el número» (masc. sing.). «De solicitudes recibidas» es complemento. El verbo concuerda con «el número», no con «las solicitudes».",
      pasos: []
    },
    {
      id: 51,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 13",
      pregunta: "«El número de estudiantes inscritos __ notablemente desde la apertura del programa académico.»",
      opciones: ["han crecido", "hemos crecido", "ha crecido"],
      correcta: 2,
      explicacion: "«ha crecido» — «el número» (sing.) rige el verbo en singular. «Han crecido» (plural) es el error más frecuente, por atracción del complemento plural.",
      pasos: []
    },
    {
      id: 52,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 13",
      pregunta: "«El número de errores detectados en el sistema __ preocupante para el equipo de desarrollo.»",
      opciones: ["resultaron", "resultamos", "resultó"],
      correcta: 2,
      explicacion: "«resultó» — núcleo = «el número» (sing.). Aunque «los errores» (pl.) atraen hacia el plural, la regla exige concordar con el núcleo: «el número» → singular.",
      pasos: []
    },

    // ── Regla 14: Un gran número de / infinidad de ────────────────────────────
    {
      id: 53,
      tipo: "regla",
      etiqueta: "Regla 14 / 24",
      titulo: "«Un gran número de» / «infinidad de»",
      descripcion: "Con «un gran número de», «una infinidad de», «una multitud de», el verbo va en plural por concordancia de sentido con el complemento plural, que domina semánticamente en estas expresiones.",
      ejemplos: [
        {
          categoria: "Gran número",
          correcto: "Un gran número de investigadores presentaron sus hallazgos en el congreso anual.",
          incorrecto: "Un gran número de investigadores presentó sus hallazgos. (gramaticalmente correcto pero inusual)"
        },
        {
          categoria: "Infinidad",
          correcto: "Una infinidad de problemas surgieron durante la implementación del nuevo sistema.",
          incorrecto: "Una infinidad de problemas surgió. (posible pero muy forzado)"
        },
        {
          categoria: "Multitud",
          correcto: "Una multitud de seguidores aclamaron al equipo campeón a su llegada al aeropuerto.",
          incorrecto: "Una multitud de seguidores aclamó al equipo. (posible pero poco natural)"
        }
      ]
    },
    {
      id: 54,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 14",
      pregunta: "«Un gran número de investigadores __ sus hallazgos en el congreso científico anual.»",
      opciones: ["presentó", "presentamos", "presentaron"],
      correcta: 2,
      explicacion: "«presentaron» — con «un gran número de» la concordancia de sentido (plural) prevalece. El complemento plural domina semánticamente en esta expresión.",
      pasos: []
    },
    {
      id: 55,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 14",
      pregunta: "«Una infinidad de propuestas __ rechazadas por no cumplir con los criterios establecidos.»",
      opciones: ["fue", "fuimos", "fueron"],
      correcta: 2,
      explicacion: "«fueron» — «una infinidad de» lleva plural por concordancia de sentido. El complemento plural (propuestas) determina el número del verbo.",
      pasos: []
    },
    {
      id: 56,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 14",
      pregunta: "«Una multitud de personas __ frente al palacio municipal para manifestar su inconformidad.»",
      opciones: ["se reunió", "nos reunimos", "se reunieron"],
      correcta: 2,
      explicacion: "«se reunieron» — «una multitud de personas» lleva plural por la fuerte presencia semántica del complemento plural. La concordancia de sentido prevalece.",
      pasos: []
    },

    // ── Regla 15: Sujetos coordinados con «o» ────────────────────────────────
    {
      id: 57,
      tipo: "regla",
      etiqueta: "Regla 15 / 24",
      titulo: "Sujetos coordinados con «o» (disyuntiva exclusiva)",
      descripcion: "Cuando los sujetos coordinados con «o» se excluyen mutuamente (solo uno realizará la acción), el verbo va en singular, concordando con el sujeto más próximo o con la idea de alternancia.",
      ejemplos: [
        {
          categoria: "Exclusión",
          correcto: "El rector o la secretaria firmará el comunicado oficial. (uno solo firmará)",
          incorrecto: "El rector o la secretaria firmarán el comunicado. (implica que ambos firman)"
        },
        {
          categoria: "Exclusión",
          correcto: "O el coordinador o su representante asistirá a la junta directiva de mañana.",
          incorrecto: "O el coordinador o su representante asistirán a la junta directiva."
        },
        {
          categoria: "Exclusión",
          correcto: "Juan o María entregará el informe mañana, según quien termine primero.",
          incorrecto: "Juan o María entregarán el informe mañana."
        }
      ]
    },
    {
      id: 58,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 15",
      pregunta: "«El director o la jefa de departamento __ el informe ante el consejo en la sesión del viernes.»",
      opciones: ["presentarán", "presentaremos", "presentará"],
      correcta: 2,
      explicacion: "«presentará» — sujetos con «o» exclusiva (solo uno presentará). El verbo va en singular. «Presentarán» implicaría que ambos presentan, lo que contradice la disyuntiva.",
      pasos: []
    },
    {
      id: 59,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 15",
      pregunta: "«O el rector o su representante oficial __ a la ceremonia de firma del convenio bilateral.»",
      opciones: ["asistirán", "asistiremos", "asistirá"],
      correcta: 2,
      explicacion: "«asistirá» — «o bien... o bien» expresa disyunción exclusiva: solo uno asistirá. El verbo va en singular.",
      pasos: []
    },
    {
      id: 60,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 15",
      pregunta: "«Pedro o Ana __ el proyecto de investigación en la exposición final del semestre escolar.»",
      opciones: ["presentarán", "presentaremos", "presentará"],
      correcta: 2,
      explicacion: "«presentará» — disyuntiva exclusiva: solo uno de los dos presentará. El verbo en singular expresa que la acción corresponde a uno u otro, no a ambos.",
      pasos: []
    },

    // ── Regla 16: O bien... o bien ────────────────────────────────────────────
    {
      id: 61,
      tipo: "regla",
      etiqueta: "Regla 16 / 24",
      titulo: "Construcción «o bien... o bien»",
      descripcion: "La construcción «o bien... o bien» expresa disyunción exclusiva. El verbo generalmente va en singular, ya que solo una de las opciones se realizará, expresando alternativa entre dos posibilidades mutuamente excluyentes.",
      ejemplos: [
        {
          categoria: "O bien",
          correcto: "O bien el director o bien su representante asistirá a la junta mensual.",
          incorrecto: "O bien el director o bien su representante asistirán a la junta mensual."
        },
        {
          categoria: "O bien",
          correcto: "O bien apruebas el examen o bien repites el curso el próximo ciclo escolar.",
          incorrecto: "O bien apruebas el examen o bien repiten el curso. (persona incorrecta)"
        },
        {
          categoria: "O bien",
          correcto: "O bien el comité acepta la propuesta o bien la rechaza en su totalidad.",
          incorrecto: "O bien el comité acepta la propuesta o bien la rechazan."
        }
      ]
    },
    {
      id: 62,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 16",
      pregunta: "«O bien el coordinador o bien su asistente administrativo __ el acta de la reunión.»",
      opciones: ["firmarán", "firmaremos", "firmará"],
      correcta: 2,
      explicacion: "«firmará» — «o bien... o bien» expresa disyunción exclusiva: solo uno firmará. El verbo va en singular, concordando con la idea de alternancia.",
      pasos: []
    },
    {
      id: 63,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 16",
      pregunta: "«O bien presentas el proyecto esta semana o bien __ excluido del proceso de evaluación.»",
      opciones: ["seréis", "serás", "será"],
      correcta: 1,
      explicacion: "«serás» — sujeto tácito «tú» (2ª persona singular), establecido por «presentas» en la primera cláusula. La concordancia es con el mismo sujeto implícito.",
      pasos: []
    },
    {
      id: 64,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 16",
      pregunta: "«O bien el rector o bien el secretario general __ presente en el evento de inauguración.»",
      opciones: ["estarán", "estaremos", "estará"],
      correcta: 2,
      explicacion: "«estará» — disyunción exclusiva: solo uno estará presente. Verbo en singular. «Estarán» implicaría que ambos estarán, contradiciendo el sentido de «o bien... o bien».",
      pasos: []
    },

    // ── Regla 17: Relativo «que» con «ser» + yo/tú ────────────────────────────
    {
      id: 65,
      tipo: "regla",
      etiqueta: "Regla 17 / 24",
      titulo: "Relativo «que» con «ser» + yo/tú (1ª/2ª persona)",
      descripcion: "En «ser + yo/tú quien/que», el verbo en la cláusula relativa concuerda con el antecedente pronominal (yo → 1ª sing., tú → 2ª sing.). Esta es la norma culta preferida; la 3ª persona también es aceptada.",
      ejemplos: [
        {
          categoria: "Yo → 1ª sing.",
          correcto: "Fui yo quien presenté la propuesta ante el consejo. (norma culta preferida)",
          incorrecto: "Fui yo quien presentó la propuesta. (aceptable, pero la norma culta prefiere la concordancia con «yo»)"
        },
        {
          categoria: "Tú → 2ª sing.",
          correcto: "Fuiste tú quien cometiste el error en la última sesión del semestre.",
          incorrecto: "Fuiste tú quien cometió el error. (aceptable, pero menos preciso)"
        },
        {
          categoria: "Nosotros",
          correcto: "Somos nosotros quienes debemos resolver el problema antes de la auditoría.",
          incorrecto: "Somos nosotros quienes deben resolver el problema. (menos preciso)"
        }
      ]
    },
    {
      id: 66,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 17",
      pregunta: "«Fui yo quien __ la propuesta ante el consejo directivo la semana pasada.»",
      opciones: ["presentó", "presentamos", "presenté"],
      correcta: 2,
      explicacion: "«presenté» — concordancia con el antecedente «yo» (1ª persona singular). La norma culta prefiere que el verbo en la relativa concuerde con el pronombre antecedente.",
      pasos: []
    },
    {
      id: 67,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 17",
      pregunta: "«Fuiste tú quien __ el informe sin verificar correctamente la información de las fuentes.»",
      opciones: ["entregó", "entregamos", "entregaste"],
      correcta: 2,
      explicacion: "«entregaste» — concordancia con «tú» (2ª persona singular). La norma culta exige que el verbo de la relativa concuerde con el antecedente pronominal: «tú → entregaste».",
      pasos: []
    },
    {
      id: 68,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 17",
      pregunta: "«Somos nosotros quienes __ solucionar el problema antes de la auditoría del próximo mes.»",
      opciones: ["deben", "debe", "debemos"],
      correcta: 2,
      explicacion: "«debemos» — concordancia con «nosotros» (1ª persona plural). El verbo de la relativa concuerda con el antecedente pronominal, no con «quienes» de forma aislada.",
      pasos: []
    },

    // ── Regla 18: Relativo «quien / quienes» ──────────────────────────────────
    {
      id: 69,
      tipo: "regla",
      etiqueta: "Regla 18 / 24",
      titulo: "Relativo «quien / quienes»",
      descripcion: "El relativo «quien» (singular) o «quienes» (plural) concuerda en número con su antecedente. El verbo dentro de la cláusula relativa concuerda con el relativo y, por ende, con el antecedente.",
      ejemplos: [
        {
          categoria: "Quien (sing.)",
          correcto: "La investigadora, quien publicó el artículo, ganó el premio nacional de ciencias.",
          incorrecto: "La investigadora, quienes publicó el artículo, ganó el premio nacional."
        },
        {
          categoria: "Quienes (pl.)",
          correcto: "Los investigadores, quienes publicaron el artículo, ganaron el premio de ciencias.",
          incorrecto: "Los investigadores, quien publicaron el artículo, ganaron el premio."
        },
        {
          categoria: "Quien (sing.)",
          correcto: "Fue el director quien tomó la decisión final sobre el presupuesto anual.",
          incorrecto: "Fue el director quienes tomó la decisión final sobre el presupuesto."
        }
      ]
    },
    {
      id: 70,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 18",
      pregunta: "«Los estudiantes, __ obtuvieron las mejores calificaciones del ciclo, recibirán una beca.»",
      opciones: ["quien", "el cual", "quienes"],
      correcta: 2,
      explicacion: "«quienes» — antecedente = «los estudiantes» (plural). El relativo «quienes» concuerda en número con su antecedente plural.",
      pasos: []
    },
    {
      id: 71,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 18",
      pregunta: "«La rectora, __ presidió la ceremonia de graduación, entregó los reconocimientos a los egresados.»",
      opciones: ["quienes", "los cuales", "quien"],
      correcta: 2,
      explicacion: "«quien» — antecedente = «la rectora» (singular). El relativo «quien» concuerda en número singular con su antecedente.",
      pasos: []
    },
    {
      id: 72,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 18",
      pregunta: "«Fue el comité __ aprobó las nuevas medidas de evaluación institucional para el próximo ciclo.»",
      opciones: ["quienes", "los cuales", "quien"],
      correcta: 2,
      explicacion: "«quien» — antecedente = «el comité» (colectivo singular). El relativo «quien» es singular y concuerda con el núcleo colectivo singular.",
      pasos: []
    },

    // ── Regla 19: Pasiva refleja ──────────────────────────────────────────────
    {
      id: 73,
      tipo: "regla",
      etiqueta: "Regla 19 / 24",
      titulo: "Pasiva refleja («se» + verbo transitivo)",
      descripcion: "En la construcción pasiva refleja («se + verbo transitivo»), el verbo concuerda con el SUJETO PACIENTE (el elemento que recibe la acción), no con un agente. El sujeto paciente puede ser singular o plural.",
      ejemplos: [
        {
          categoria: "Sing.",
          correcto: "Se entregó el premio al estudiante con mayor promedio del ciclo escolar.",
          incorrecto: "Se entregaron el premio al estudiante con mayor promedio del ciclo."
        },
        {
          categoria: "Pl.",
          correcto: "Se entregaron los premios a todos los ganadores de la convocatoria anual.",
          incorrecto: "Se entregó los premios a todos los ganadores de la convocatoria."
        },
        {
          categoria: "Sing.",
          correcto: "Se publicó el informe final de la investigación la semana pasada en el repositorio.",
          incorrecto: "Se publicaron el informe final de la investigación la semana pasada."
        }
      ]
    },
    {
      id: 74,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 19",
      pregunta: "«__ el premio al estudiante con mayor promedio durante la ceremonia de clausura del ciclo.»",
      opciones: ["Se entregaron", "Se entregamos", "Se entregó"],
      correcta: 2,
      explicacion: "«Se entregó» — sujeto paciente = «el premio» (sing.). En pasiva refleja el verbo concuerda con el sujeto paciente: singular → «se entregó».",
      pasos: []
    },
    {
      id: 75,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 19",
      pregunta: "«__ los resultados del estudio en una revista científica de alto impacto internacional.»",
      opciones: ["Se publicó", "Se publicamos", "Se publicaron"],
      correcta: 2,
      explicacion: "«Se publicaron» — sujeto paciente = «los resultados» (pl.). El verbo concuerda con el sujeto paciente plural: «se publicaron».",
      pasos: []
    },
    {
      id: 76,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 19",
      pregunta: "«__ tres propuestas de reforma al reglamento interno de la institución educativa.»",
      opciones: ["Se presentó", "Se presentamos", "Se presentaron"],
      correcta: 2,
      explicacion: "«Se presentaron» — sujeto paciente = «tres propuestas» (pl.). Verbo en plural: «se presentaron». La pasiva refleja concuerda con el sujeto paciente.",
      pasos: []
    },

    // ── Regla 20: Impersonales con «se» ──────────────────────────────────────
    {
      id: 77,
      tipo: "regla",
      etiqueta: "Regla 20 / 24",
      titulo: "Impersonales con «se» (sin sujeto gramatical)",
      descripcion: "En las construcciones impersonales con «se» (sin sujeto gramatical posible), el verbo va siempre en tercera persona singular, independientemente del complemento que le siga.",
      ejemplos: [
        {
          categoria: "Impersonal",
          correcto: "Se trabaja mucho en esta institución educativa de alto rendimiento.",
          incorrecto: "Se trabajan mucho en esta institución educativa de alto rendimiento."
        },
        {
          categoria: "Impersonal",
          correcto: "Se habla español en esta conferencia internacional de lingüística aplicada.",
          incorrecto: "Se hablan español en esta conferencia internacional de lingüística."
        },
        {
          categoria: "Impersonal",
          correcto: "Se necesita personal capacitado en tecnología para el nuevo proyecto de innovación.",
          incorrecto: "Se necesitan personal capacitado. (en impersonal, no en pasiva refleja)"
        }
      ]
    },
    {
      id: 78,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 20",
      pregunta: "«En esta empresa __ con mucha dedicación para cumplir los objetivos trimestrales de producción.»",
      opciones: ["se trabajan", "se trabajamos", "se trabaja"],
      correcta: 2,
      explicacion: "«se trabaja» — construcción impersonal: no hay sujeto gramatical. Verbo siempre en 3ª singular. «Se trabajan» es el error más frecuente en este tipo de construcciones.",
      pasos: []
    },
    {
      id: 79,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 20",
      pregunta: "«En el congreso __ únicamente en inglés y francés durante todas las sesiones técnicas.»",
      opciones: ["se hablan", "se hablamos", "se habla"],
      correcta: 2,
      explicacion: "«se habla» — impersonal: no hay sujeto. Verbo en 3ª singular. Diferente de la pasiva refleja: en impersonal no puede identificarse un sujeto paciente.",
      pasos: []
    },
    {
      id: 80,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 20",
      pregunta: "«Para este puesto __ experiencia mínima de tres años en el área de sistemas computacionales.»",
      opciones: ["se requieren", "se requerimos", "se requiere"],
      correcta: 2,
      explicacion: "«se requiere» — impersonal: sin sujeto gramatical, verbo en 3ª singular. Se diferencia de la pasiva refleja en que «experiencia» no funciona como sujeto paciente en esta lectura.",
      pasos: []
    },

    // ── Regla 21: Sujeto en infinitivo o cláusula sustantiva ──────────────────
    {
      id: 81,
      tipo: "regla",
      etiqueta: "Regla 21 / 24",
      titulo: "Sujeto en infinitivo o cláusula sustantiva (singular)",
      descripcion: "Cuando el sujeto de la oración es un solo infinitivo o una sola cláusula sustantiva (introducida por «que»), el verbo principal va en tercera persona singular.",
      ejemplos: [
        {
          categoria: "Infinitivo",
          correcto: "Estudiar todos los días es fundamental para el éxito en el EXANI-I.",
          incorrecto: "Estudiar todos los días son fundamentales para el éxito en el EXANI-I."
        },
        {
          categoria: "Cláusula",
          correcto: "Que lleguen tarde me molesta mucho porque interrumpe la clase.",
          incorrecto: "Que lleguen tarde me molestan mucho porque interrumpen la clase."
        },
        {
          categoria: "Cláusula",
          correcto: "Que el comité no haya tomado una decisión todavía resulta preocupante.",
          incorrecto: "Que el comité no haya tomado una decisión todavía resultan preocupantes."
        }
      ]
    },
    {
      id: 82,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 21",
      pregunta: "«Prepararse adecuadamente para el EXANI-I __ mucho tiempo, disciplina y constancia.»",
      opciones: ["requieren", "requerimos", "requiere"],
      correcta: 2,
      explicacion: "«requiere» — sujeto = infinitivo «prepararse» (singular). Un solo infinitivo como sujeto siempre lleva verbo en 3ª persona singular.",
      pasos: []
    },
    {
      id: 83,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 21",
      pregunta: "«Que los estudiantes no entreguen sus trabajos a tiempo __ un problema recurrente en el aula.»",
      opciones: ["son", "somos", "es"],
      correcta: 2,
      explicacion: "«es» — sujeto = cláusula sustantiva «que los estudiantes no entreguen» (singular como unidad). El verbo principal va en 3ª persona singular.",
      pasos: []
    },
    {
      id: 84,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 21",
      pregunta: "«Que el proyecto no cuente con financiamiento suficiente __ el principal obstáculo para su éxito.»",
      opciones: ["son", "somos", "es"],
      correcta: 2,
      explicacion: "«es» — sujeto = cláusula sustantiva (singular). Sin importar la complejidad interna de la cláusula, como unidad funciona como sujeto singular → verbo singular.",
      pasos: []
    },

    // ── Regla 22: Sujeto oracional coordinado ────────────────────────────────
    {
      id: 85,
      tipo: "regla",
      etiqueta: "Regla 22 / 24",
      titulo: "Sujeto oracional coordinado (plural)",
      descripcion: "Cuando el sujeto está formado por dos o más cláusulas o infinitivos coordinados con «y», el verbo va en plural, ya que la suma de los sujetos equivale a un sujeto compuesto plural.",
      ejemplos: [
        {
          categoria: "Dos infinit.",
          correcto: "Estudiar y practicar son las claves del éxito en cualquier examen.",
          incorrecto: "Estudiar y practicar es la clave del éxito en cualquier examen."
        },
        {
          categoria: "Dos cláus.",
          correcto: "Que llueva y que haga frío impiden la realización de la actividad al aire libre.",
          incorrecto: "Que llueva y que haga frío impide la realización de la actividad al aire libre."
        },
        {
          categoria: "Dos infinit.",
          correcto: "Preparar los materiales y repasar los contenidos son pasos fundamentales para el examen.",
          incorrecto: "Preparar los materiales y repasar los contenidos es un paso fundamental."
        }
      ]
    },
    {
      id: 86,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 22",
      pregunta: "«Preparar los materiales y repasar los contenidos __ fundamentales para el EXANI-I.»",
      opciones: ["es", "somos", "son"],
      correcta: 2,
      explicacion: "«son» — dos infinitivos coordinados con «y» forman un sujeto compuesto plural. Mismo principio que los sujetos nominales coordinados: «y» → plural.",
      pasos: []
    },
    {
      id: 87,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 22",
      pregunta: "«Que el equipo trabaje unido y que cumpla los plazos __ garantías de éxito del proyecto.»",
      opciones: ["es", "somos", "son"],
      correcta: 2,
      explicacion: "«son» — dos cláusulas sustantivas coordinadas con «y» → sujeto plural → verbo en plural: «son». Cada cláusula aporta un elemento distinto al sujeto compuesto.",
      pasos: []
    },
    {
      id: 88,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 22",
      pregunta: "«Estudiar con constancia y descansar adecuadamente __ hábitos que mejoran el rendimiento académico.»",
      opciones: ["es", "somos", "son"],
      correcta: 2,
      explicacion: "«son» — dos infinitivos coordinados con «y» → sujeto compuesto plural → verbo en plural. Compara: «Estudiar es fundamental» (uno) vs. «Estudiar y practicar son fundamentales» (dos).",
      pasos: []
    },

    // ── Regla 23: Vocativos ───────────────────────────────────────────────────
    {
      id: 89,
      tipo: "regla",
      etiqueta: "Regla 23 / 24",
      titulo: "Vocativos — no afectan la concordancia",
      descripcion: "Los vocativos son elementos con los que el hablante se dirige al interlocutor. No son el sujeto gramatical de la oración y, por tanto, no afectan la concordancia del verbo, que se establece con el sujeto real (frecuentemente tácito).",
      ejemplos: [
        {
          categoria: "Vocativo",
          correcto: "Juan, ¿viniste al examen de ayer por la mañana? (sujeto tácito = tú)",
          incorrecto: "Juan, ¿vino al examen de ayer? (error: concordar el verbo con el vocativo)"
        },
        {
          categoria: "Vocativo",
          correcto: "Señores, ¿llegaron a tiempo a la conferencia inaugural del congreso?",
          incorrecto: "Señores, ¿llegó a tiempo a la conferencia inaugural? (sin concordar con el interlocutor)"
        },
        {
          categoria: "Vocativo",
          correcto: "María, recuerda entregar el formulario antes del viernes sin falta.",
          incorrecto: "María, recuerde entregar el formulario. (forma de cortesía incorrecta si hay tuteo)"
        }
      ]
    },
    {
      id: 90,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 23",
      pregunta: "«Estudiantes, __ sus dudas al final de la explicación para no interrumpir la clase.»",
      opciones: ["presenta", "presenten", "presentamos"],
      correcta: 1,
      explicacion: "«presenten» — sujeto tácito = ustedes (3ª pl. o 2ª pl. formal). El vocativo «estudiantes» no es el sujeto; el verbo concuerda con el sujeto implícito «ustedes».",
      pasos: []
    },
    {
      id: 91,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 23",
      pregunta: "«Doctora, __ el informe final antes del viernes para su revisión y firma institucional.»",
      opciones: ["entreguen", "entregamos", "entregue"],
      correcta: 2,
      explicacion: "«entregue» — sujeto tácito = usted (tratamiento formal de 2ª sing.). El vocativo «doctora» no rige el verbo. Forma de cortesía: «entregue usted».",
      pasos: []
    },
    {
      id: 92,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 23",
      pregunta: "«Carlos, ¿__ el reactivo que causó más confusión entre los estudiantes del grupo?»",
      opciones: ["revisaron", "revisamos", "revisaste"],
      correcta: 2,
      explicacion: "«revisaste» — sujeto tácito = tú (2ª persona singular, tuteo). El vocativo «Carlos» no es el sujeto gramatical; el verbo concuerda con el sujeto implícito «tú».",
      pasos: []
    },

    // ── Regla 24: Construcciones enfáticas ───────────────────────────────────
    {
      id: 93,
      tipo: "regla",
      etiqueta: "Regla 24 / 24",
      titulo: "Construcciones enfáticas «es que» / «fue que»",
      descripcion: "En las construcciones enfáticas «es que», «fue que», «es... lo que», «fue... quien», el verbo copulativo va en tercera persona singular, aunque el atributo o complemento que sigue sea plural.",
      ejemplos: [
        {
          categoria: "Es lo que",
          correcto: "Es la propuesta lo que importa ahora para resolver el conflicto institucional.",
          incorrecto: "Son la propuesta lo que importan ahora para resolver el conflicto."
        },
        {
          categoria: "Fue quien",
          correcto: "Fue el equipo quien ganó el campeonato regional de matemáticas aplicadas.",
          incorrecto: "Fueron el equipo quienes ganaron el campeonato regional de matemáticas."
        },
        {
          categoria: "Es lo que",
          correcto: "Es la falta de comunicación lo que genera estos problemas recurrentes.",
          incorrecto: "Son la falta de comunicación lo que generan estos problemas recurrentes."
        }
      ]
    },
    {
      id: 94,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 24",
      pregunta: "«__ los errores de concordancia lo que más perjudica a los estudiantes en el examen EXANI-I.»",
      opciones: ["Son", "Somos", "Es"],
      correcta: 2,
      explicacion: "«Es» — construcción enfática «es... lo que»: el verbo copulativo va siempre en 3ª persona singular. «Son» es el error más frecuente por atracción del complemento plural.",
      pasos: []
    },
    {
      id: 95,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 24",
      pregunta: "«Fue el comité __ tomó la decisión de suspender el proceso de selección de personal.»",
      opciones: ["quienes", "los cuales", "quien"],
      correcta: 2,
      explicacion: "«quien» — «fue... quien» es construcción enfática singular. «El comité» es colectivo singular → relativo «quien» (singular). «Quienes» (plural) no concuerda con el colectivo singular.",
      pasos: []
    },
    {
      id: 96,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 24",
      pregunta: "«__ las propuestas lo que el consejo revisará con detenimiento en la próxima sesión ordinaria.»",
      opciones: ["Son", "Somos", "Es"],
      correcta: 2,
      explicacion: "«Es» — construcción enfática «es... lo que»: el verbo copulativo va siempre en 3ª singular. La presencia del complemento plural «las propuestas» no cambia la forma del verbo copulativo en esta estructura.",
      pasos: []
    },

    // ── Cierre ────────────────────────────────────────────────────────────────
    {
      id: 97,
      tipo: "resumen",
      titulo: "Regla de oro",
      etiqueta: "Cierre",
      puntos: [
        { titulo: "Localiza el núcleo del sujeto", texto: "El verbo concuerda con él en número y persona. Si hay duda, elimina el inciso y verifica con el núcleo." },
        { titulo: "Incisos y complementos", texto: "«Así como», «junto con», «además de», «al igual que» introducen incisos — no coordinan sujetos." },
        { titulo: "Impersonales", texto: "«Hay», «hace» (temporal), «hubo» y «se» impersonal van siempre en singular, sin excepción." },
        { titulo: "«El número de» vs. «un gran número de»", texto: "«El número de» → singular. «Un gran número de» / «infinidad de» → plural (concordancia de sentido)." },
        { titulo: "«Uno de los que»", texto: "El relativo «que» retoma el antecedente plural → verbo en plural en la relativa." },
        { titulo: "Disyunción «o» / «o bien»", texto: "Disyuntiva exclusiva (solo uno actúa) → verbo en singular." }
      ]
    }
  ]
};
