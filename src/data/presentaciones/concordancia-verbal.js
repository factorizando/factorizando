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
      tipo: "regla_rica",
      etiqueta: "Regla 1 / 24",
      titulo: "Sujeto simple — concordancia directa",
      bloques: [
        {
          tipo: "texto",
          texto: "El verbo concuerda en número (singular/plural) y persona (1ª, 2ª, 3ª) con el núcleo del sujeto. Clave: identifica el núcleo ignorando todos los complementos que lo rodean; el verbo responde a ese núcleo, no a las palabras que lo modifican."
        },
        {
          tipo: "tabla",
          titulo: "Tipos de sujeto y su concordancia",
          columnas: ["Tipo de sujeto", "✓ Verbo concuerda con…", "Ejemplo de núcleo"],
          filas: [
            { tiempo: "simple singular",       correcto: "el núcleo singular",  error: "La maestra → explicó" },
            { tiempo: "simple plural",          correcto: "el núcleo plural",    error: "Los alumnos → entregaron" },
            { tiempo: "núcleo + complemento",  correcto: "el núcleo, no el compl.", error: "El director [del plantel] → aprobó" },
            { tiempo: "colectivo singular",     correcto: "el colectivo (sing.)", error: "La delegación → asistió" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "núcleo + complemento — el error más frecuente",
          correcto: "El director del plantel aprobó el nuevo reglamento.",
          incorrecto: "El director del plantel aprobaron el nuevo reglamento."
        },
        {
          tipo: "par",
          etiqueta: "frase nominal compleja",
          correcto: "El conjunto de datos recopilados durante el estudio demostró la hipótesis.",
          incorrecto: "El conjunto de datos recopilados durante el estudio demostraron la hipótesis."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Colectivo singular: la idea de «muchos» no cambia el número gramatical",
          correcto: "La delegación mexicana asistió a la conferencia en Ginebra.",
          incorrecto: "La delegación mexicana asistieron a la conferencia en Ginebra."
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
      tipo: "regla_rica",
      etiqueta: "Regla 2 / 24",
      titulo: "Sujeto compuesto con «y»",
      bloques: [
        {
          tipo: "texto",
          texto: "Cuando dos o más sujetos se unen con «y» (o «e» ante palabras que empiezan con i-/hi-), el verbo va siempre en plural. Esto aplica sin importar el género de los sujetos ni si uno de ellos es singular; la suma de dos elementos obliga el plural."
        },
        {
          tipo: "tabla",
          titulo: "Combinaciones de sujeto compuesto",
          columnas: ["Combinación", "✓ Plural obligatorio", "✗ Error frecuente"],
          filas: [
            { tiempo: "Masc. + Fem.",      correcto: "El rector y la decana firmaron.", error: "El rector y la decana firmó." },
            { tiempo: "Fem. + Fem.",        correcto: "La propuesta y la iniciativa fueron aprobadas.", error: "…fue aprobada." },
            { tiempo: "Tres o más",         correcto: "El director, la subdirectora y el coordinador aprobaron.", error: "…aprobó." },
            { tiempo: "Persona + equipo",   correcto: "La investigadora y su equipo presentaron.", error: "…presentó." },
            { tiempo: "«e» ante i-/hi-",   correcto: "El alumno e Ignacio entregaron.", error: "…entregó." }
          ]
        },
        {
          tipo: "par",
          etiqueta: "Masc. + Fem. — caso más frecuente en el EXANI-I",
          correcto: "El coordinador y la jefa presentaron el informe ante el consejo.",
          incorrecto: "El coordinador y la jefa presentó el informe ante el consejo."
        },
        {
          tipo: "par",
          etiqueta: "Tres sujetos coordinados",
          correcto: "El director, la subdirectora y el coordinador aprobaron el plan de trabajo.",
          incorrecto: "El director, la subdirectora y el coordinador aprobó el plan de trabajo."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "No confundir «y» con incisos — «además de», «junto con» no coordinan sujetos",
          correcto: "El rector y la decana firmaron el acuerdo. (coordinación → plural)",
          incorrecto: "El rector, además de la decana, firmaron el acuerdo. (inciso → singular: firmó)"
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
      tipo: "regla_rica",
      etiqueta: "Regla 3 / 24",
      titulo: "Sujeto con núcleo colectivo",
      bloques: [
        {
          tipo: "texto",
          texto: "Un sustantivo colectivo (equipo, comité, mayoría, delegación, junta, multitud, grupo…) es gramaticalmente singular aunque nombre a muchos. El verbo va en singular. El error típico es dejarse llevar por la idea de «muchos» e ir al plural."
        },
        {
          tipo: "tabla",
          titulo: "Colectivos frecuentes y su concordancia",
          columnas: ["Colectivo", "✓ Singular", "✗ Plural (error)"],
          filas: [
            { tiempo: "equipo",      correcto: "El equipo ganó el campeonato.", error: "El equipo ganaron…" },
            { tiempo: "comité",      correcto: "El comité emitió el dictamen.", error: "El comité emitieron…" },
            { tiempo: "mayoría",     correcto: "La mayoría votó a favor.", error: "La mayoría votaron…" },
            { tiempo: "delegación",  correcto: "La delegación asistió a la cumbre.", error: "La delegación asistieron…" },
            { tiempo: "junta",       correcto: "La junta resolvió suspender la sesión.", error: "La junta resolvieron…" },
            { tiempo: "multitud",    correcto: "La multitud aplaudió al orador.", error: "La multitud aplaudieron…" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "colectivo simple — mayoría",
          correcto: "La mayoría votó a favor de la propuesta en la sesión plenaria.",
          incorrecto: "La mayoría votaron a favor de la propuesta en la sesión."
        },
        {
          tipo: "par",
          etiqueta: "colectivo + complemento — trampa doble",
          correcto: "La mayoría de los estudiantes aprobó el examen sin dificultad.",
          incorrecto: "La mayoría de los estudiantes aprobaron el examen sin dificultad."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "La idea de «muchos» atrae al plural — el verbo no debe seguirla",
          correcto: "El comité emitió un dictamen unánime sobre el caso presentado.",
          incorrecto: "El comité emitieron un dictamen unánime sobre el caso presentado."
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
      tipo: "regla_rica",
      etiqueta: "Regla 4 / 24",
      titulo: "Sujeto tácito (elíptico)",
      bloques: [
        {
          tipo: "texto",
          texto: "El sujeto tácito no aparece en la oración, pero la desinencia verbal lo revela con precisión. Identificarlo es clave para elegir la forma verbal correcta en el EXANI-I."
        },
        {
          tipo: "tabla",
          titulo: "Desinencias del pretérito → sujeto implícito",
          columnas: ["Desinencia (pretérito)", "Pronombre", "Ejemplo"],
          filas: [
            { tiempo: "-é / -í (1ª sing.)",   correcto: "Yo",          error: "[Yo] Presenté el proyecto ante el jurado." },
            { tiempo: "-ste (2ª sing.)",        correcto: "Tú",          error: "[Tú] Entregaste el informe a tiempo." },
            { tiempo: "-ó / -ió (3ª sing.)",   correcto: "Él/Ella",     error: "[Ella] Llegó tarde a la reunión." },
            { tiempo: "-mos (1ª pl.)",          correcto: "Nosotros",    error: "[Nosotros] Llegamos tarde al evento." },
            { tiempo: "-ron (3ª pl.)",          correcto: "Ellos/Ellas", error: "[Ellos] Informaron sobre la cancelación." }
          ]
        },
        {
          tipo: "par",
          etiqueta: "-mos → nosotros",
          correcto: "[Nosotros] Llegamos tarde a la reunión del consejo directivo.",
          incorrecto: "[Nosotros] Llegaron tarde a la reunión del consejo directivo."
        },
        {
          tipo: "par",
          etiqueta: "sujeto recuperable por contexto — no cambiar sujeto tácito sin marcarlo",
          correcto: "Ana llegó al auditorio. Saludó a todos y tomó la palabra. [ella sigue siendo sujeto]",
          incorrecto: "Ana llegó al auditorio. Saludaron a todos. [cambio de sujeto sin razón gramatical]"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Cambio de sujeto tácito sin aviso — error de coherencia",
          correcto: "El director llegó temprano. Revisó los documentos y firmó el acta.",
          incorrecto: "El director llegó temprano. Revisaron los documentos y firmaron el acta."
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
      tipo: "regla_rica",
      etiqueta: "Regla 5 / 24",
      titulo: "Inciso intercalado entre sujeto y verbo",
      bloques: [
        {
          tipo: "texto",
          texto: "Un inciso es un complemento entre comas que se intercala entre el sujeto y el verbo. Prueba infalible: elimina el inciso mentalmente y el verbo debe seguir concordando con el núcleo del sujeto. El inciso no suma sujetos."
        },
        {
          tipo: "tabla",
          titulo: "Conectores frecuentes de inciso",
          columnas: ["Conector", "Ejemplo correcto (verbo singular)", "Error frecuente"],
          filas: [
            { tiempo: "así como",       correcto: "El director, así como los docentes, asistió.", error: "…asistieron." },
            { tiempo: "junto con",      correcto: "La propuesta, junto con sus anexos, fue entregada.", error: "…fueron entregadas." },
            { tiempo: "además de",      correcto: "La rectora, además de los coordinadores, firmó.", error: "…firmaron." },
            { tiempo: "acompañado de",  correcto: "El informe, acompañado de tres apéndices, fue revisado.", error: "…fueron revisados." },
            { tiempo: "incluyendo",     correcto: "El presupuesto, incluyendo viáticos, fue aprobado.", error: "…fueron aprobados." }
          ]
        },
        {
          tipo: "par",
          etiqueta: "«así como» — prueba: elimina el inciso",
          correcto: "El director, así como todos los docentes, asistió a la ceremonia.",
          incorrecto: "El director, así como todos los docentes, asistieron a la ceremonia."
        },
        {
          tipo: "par",
          etiqueta: "«acompañado de» — inciso adjetival",
          correcto: "El informe, acompañado de tres apéndices, fue revisado por el comité.",
          incorrecto: "El informe, acompañado de tres apéndices, fueron revisados por el comité."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "No confundir inciso con coordinación: solo «y» obliga el plural",
          correcto: "El rector y la decana firmaron el acuerdo. (y → coordinación → plural)",
          incorrecto: "El rector, así como la decana, firmaron el acuerdo. (inciso → singular: firmó)"
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
      tipo: "regla_rica",
      etiqueta: "Regla 6 / 24",
      titulo: "Conectores que forman inciso (no coordinan sujetos)",
      bloques: [
        {
          tipo: "texto",
          texto: "Diferencia clave: «y» coordina sujetos → verbo en plural. Los conectores «además de», «al igual que», «incluyendo a», «seguido de», «acompañado de» y «junto con» introducen incisos → verbo en singular. Prueba de sustitución: si puedes reemplazar el conector por «y» sin cambiar el sentido, el plural está justificado; si no, el verbo va en singular."
        },
        {
          tipo: "tabla",
          titulo: "Coordinantes vs. conectores de inciso",
          columnas: ["Tipo", "Conector", "Efecto en el verbo"],
          filas: [
            { tiempo: "Coordinación",  correcto: "y / e",          error: "→ plural obligatorio" },
            { tiempo: "Inciso",        correcto: "además de",       error: "→ singular (núcleo)" },
            { tiempo: "Inciso",        correcto: "al igual que",    error: "→ singular (núcleo)" },
            { tiempo: "Inciso",        correcto: "junto con",       error: "→ singular (núcleo)" },
            { tiempo: "Inciso",        correcto: "seguido de",      error: "→ singular (núcleo)" },
            { tiempo: "Inciso",        correcto: "acompañado de",   error: "→ singular (núcleo)" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "«además de» — inciso, no coordinación",
          correcto: "El comité, además de los asesores externos, revisó el documento final.",
          incorrecto: "El comité, además de los asesores externos, revisaron el documento final."
        },
        {
          tipo: "par",
          etiqueta: "«al igual que» — comparativo, no coordinación",
          correcto: "La directora, al igual que sus colaboradores, firmó el acuerdo institucional.",
          incorrecto: "La directora, al igual que sus colaboradores, firmaron el acuerdo."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Prueba de sustitución: reemplaza el conector por «y»; si el sentido cambia, es inciso",
          correcto: "El rector, junto con los decanos, aprobó la propuesta. (→ singular)",
          incorrecto: "El rector, junto con los decanos, aprobaron la propuesta. (reserva plural solo para «y»)"
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
      tipo: "regla_rica",
      etiqueta: "Regla 7 / 24",
      titulo: "Sujeto pospuesto al verbo",
      bloques: [
        {
          tipo: "texto",
          texto: "El sujeto puede ir después del verbo, especialmente en oraciones que empiezan con complemento circunstancial, en interrogativas y en estructuras pasivas. El verbo siempre concuerda con el sujeto real, sin importar su posición. Truco: localiza el sujeto real antes de elegir la forma verbal."
        },
        {
          tipo: "tabla",
          titulo: "Contextos donde el sujeto va pospuesto",
          columnas: ["Estructura", "Ejemplo correcto", "Error frecuente"],
          filas: [
            { tiempo: "CC + V + sujeto",        correcto: "En el aula faltaron tres estudiantes.", error: "…faltó tres estudiantes." },
            { tiempo: "Interrogativa directa",   correcto: "¿Cuándo llegaron los invitados?", error: "¿Cuándo llegó los invitados?" },
            { tiempo: "Pasiva con sujeto al final", correcto: "Fueron publicadas las conclusiones.", error: "Fue publicadas las conclusiones." },
            { tiempo: "Sujeto singular pospuesto", correcto: "Durante la gala se entregó el premio.", error: "…se entregaron el premio." }
          ]
        },
        {
          tipo: "par",
          etiqueta: "complemento circunstancial + V + sujeto plural",
          correcto: "Al final de la cumbre firmaron el tratado todas las naciones representadas.",
          incorrecto: "Al final de la cumbre firmó el tratado todas las naciones representadas."
        },
        {
          tipo: "par",
          etiqueta: "interrogativa indirecta — sujeto al final",
          correcto: "No sé cuándo llegaron los documentos solicitados a la secretaría.",
          incorrecto: "No sé cuándo llegó los documentos solicitados a la secretaría."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Que el verbo vaya primero no significa que no haya sujeto — siempre búscalo",
          correcto: "¿Cuándo llegaron los invitados internacionales al aeropuerto? (sujeto pospuesto: «los invitados»)",
          incorrecto: "¿Cuándo llegó los invitados internacionales al aeropuerto? (verbo en singular sin concordar con el sujeto)"
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
      tipo: "regla_rica",
      etiqueta: "Regla 8a / 24",
      titulo: "«Haber» impersonal",
      bloques: [
        {
          tipo: "texto",
          texto: "Cuando «haber» expresa existencia, la oración no tiene sujeto gramatical. El sustantivo que lo acompaña es Complemento Directo (CD), no sujeto. Por eso el verbo queda fijo en 3ª persona singular sin importar la cantidad de lo que se nombra."
        },
        {
          tipo: "par",
          etiqueta: "hay · presente",
          correcto: "Hay muchos factores que considerar antes de tomar esa decisión.",
          incorrecto: "Han muchos factores que considerar antes de tomar esa decisión."
        },
        {
          tipo: "tabla",
          titulo: "Formas de haber impersonal",
          filas: [
            { tiempo: "Presente",        correcto: "hay",       error: "han" },
            { tiempo: "Pret. indefinido", correcto: "hubo",      error: "hubieron" },
            { tiempo: "Pret. imperfecto", correcto: "había",     error: "habían" },
            { tiempo: "Futuro",           correcto: "habrá",     error: "habrán" },
            { tiempo: "Condicional",      correcto: "habría",    error: "habrían" },
            { tiempo: "Pret. perfecto",   correcto: "ha habido", error: "han habido" },
            { tiempo: "Subjuntivo",       correcto: "haya",      error: "hayan" }
          ]
        },
        {
          tipo: "texto",
          texto: "Prueba del CD: sustituye el sustantivo por «lo/la/los/las». Si funciona, es CD y nunca sujeto. «¿Había muchas personas? Sí, las había.» (no: «ellas habían»)."
        },
        {
          tipo: "par",
          etiqueta: "hubo · trampa A — CD plural atrae al verbo",
          correcto: "Hubo varias quejas durante la reunión de evaluación.",
          incorrecto: "Hubieron varias quejas durante la reunión de evaluación."
        },
        {
          tipo: "par",
          etiqueta: "ha habido · trampa B — perífrasis en plural",
          correcto: "Ha habido cambios importantes en el plan de estudios.",
          incorrecto: "Han habido cambios importantes en el plan de estudios."
        }
      ]
    },
    {
      id: 292,
      tipo: "regla_rica",
      etiqueta: "Regla 8b / 24",
      titulo: "«Hacer» temporal y trampas del EXANI-I",
      bloques: [
        {
          tipo: "texto",
          texto: "«Hacer» expresa tiempo transcurrido o condiciones climáticas. Como carece de sujeto gramatical, es invariable: siempre 3ª persona singular, sin importar el número del sustantivo que lo acompaña."
        },
        {
          tipo: "tabla",
          titulo: "Formas de hacer temporal",
          filas: [
            { tiempo: "Presente",         correcto: "hace",   error: "hacen" },
            { tiempo: "Pret. imperfecto",  correcto: "hacía",  error: "hacían" },
            { tiempo: "Futuro",            correcto: "hará",   error: "harán" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "hace · trampa C — hacer temporal",
          correcto: "Hace varios días que no recibimos noticias sobre los resultados.",
          incorrecto: "Hacen varios días que no recibimos noticias sobre los resultados."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "CD plural atrae al verbo",
          correcto: "Hubo 200 personas en el evento.",
          incorrecto: "Hubieron 200 personas en el evento."
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "Perífrasis en plural",
          correcto: "Ha habido cambios en el reglamento.",
          incorrecto: "Han habido cambios en el reglamento."
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "Hacer temporal",
          correcto: "Hace semanas que no se reúne el comité.",
          incorrecto: "Hacen semanas que no se reúne el comité."
        },
        {
          tipo: "texto",
          texto: "Regla de identificación rápida: ¿puedes preguntarle «¿quién?» al verbo? Si no hay respuesta posible → impersonal → singular. La cantidad no cambia nada: hay uno, hay mil → el verbo no varía."
        }
      ]
    },
    {
      id: 30,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 8 · haber",
      pregunta: "«__ más de cien personas en el auditorio cuando comenzó el evento cultural.»",
      opciones: ["Hubieron", "Habían", "Hubo"],
      correcta: 2,
      explicacion: "«Hubo» — impersonal, siempre en singular. «Hubieron» es un error muy frecuente en español; la forma impersonal de «haber» no tiene plural.",
      pasos: []
    },
    {
      id: 31,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 8 · haber",
      pregunta: "«__ muchos factores que considerar antes de tomar una decisión tan importante.»",
      opciones: ["Han", "Habrán", "Hay"],
      correcta: 2,
      explicacion: "«Hay» — impersonal, siempre en singular. «Han» y «habrán» son plurales que no existen como impersonales de «haber».",
      pasos: []
    },
    {
      id: 301,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 8 · haber",
      pregunta: "«Es posible que __ errores en el informe final que se entregó ayer al comité.»",
      opciones: ["hayan", "habrán", "haya"],
      correcta: 2,
      explicacion: "«haya» — subjuntivo de «haber» impersonal, siempre en singular. «Hayan» es el error más frecuente en esta forma: el subjuntivo impersonal no tiene plural.",
      pasos: []
    },
    {
      id: 32,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 8 · hacer",
      pregunta: "«__ varios días desde que se publicaron los resultados del examen nacional.»",
      opciones: ["Hacen", "Hicieron", "Hace"],
      correcta: 2,
      explicacion: "«Hace» — impersonal de tiempo, siempre en singular. «Hacen días» es un error frecuente; «hacer» en expresiones temporales es impersonal y no varía.",
      pasos: []
    },
    {
      id: 321,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 8 · hacer",
      pregunta: "«__ más de dos años cuando por fin se anunció el resultado del proceso de selección.»",
      opciones: ["Hacían", "Harán", "Hacía"],
      correcta: 2,
      explicacion: "«Hacía» — impersonal de tiempo en pretérito imperfecto, siempre singular. «Hacían» es el error por atracción del complemento temporal: el verbo no concuerda con «dos años» porque no hay sujeto.",
      pasos: []
    },

    // ── Regla 9: Ninguno / nadie / nada ──────────────────────────────────────
    {
      id: 33,
      tipo: "regla_rica",
      etiqueta: "Regla 9 / 24",
      titulo: "«Ninguno», «nadie», «nada» — indefinidos negativos",
      bloques: [
        {
          tipo: "texto",
          texto: "Los pronombres indefinidos negativos «ninguno/a», «nadie» y «nada» son gramaticalmente singulares. El verbo va siempre en 3ª persona singular, aunque el complemento que los acompañe sea plural. Clave: el complemento «de los/las…» no es el sujeto; el sujeto sigue siendo el pronombre."
        },
        {
          tipo: "tabla",
          titulo: "Pronombres indefinidos negativos",
          columnas: ["Pronombre", "✓ Singular", "✗ Error plural"],
          filas: [
            { tiempo: "ninguno/a de + pl.", correcto: "cumplió / fue aprobada",  error: "cumplieron / fueron aprobadas" },
            { tiempo: "nadie",              correcto: "cuestionó",               error: "cuestionaron" },
            { tiempo: "nada de",            correcto: "resultó",                 error: "resultaron" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "ninguno de + complemento plural",
          correcto: "Ninguno de los reportes cumplió los criterios del comité evaluador.",
          incorrecto: "Ninguno de los reportes cumplieron los criterios del comité."
        },
        {
          tipo: "par",
          etiqueta: "nadie + complemento",
          correcto: "Nadie en el grupo de trabajo cuestionó la decisión del coordinador.",
          incorrecto: "Nadie en el grupo de trabajo cuestionaron la decisión del coordinador."
        },
        {
          tipo: "par",
          etiqueta: "nada de + cláusula",
          correcto: "Nada de lo que declararon los testigos resultó suficientemente relevante.",
          incorrecto: "Nada de lo que declararon los testigos resultaron suficientemente relevante."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "«De los/las…» es complemento del pronombre, no el sujeto",
          correcto: "Ninguno de los candidatos aprobó la prueba de selección.",
          incorrecto: "Ninguno de los candidatos aprobaron la prueba de selección."
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
      tipo: "regla_rica",
      etiqueta: "Regla 10 / 24",
      titulo: "«Alguien», «cualquiera», «cada uno» — indefinidos afirmativos",
      bloques: [
        {
          tipo: "texto",
          texto: "Los pronombres indefinidos afirmativos «alguien», «cualquiera», «uno/una» y «cada uno/a» exigen verbo en 3ª persona singular sin excepción. Son el contraparte afirmativo de la Regla 9. Aunque el complemento sea plural, el verbo permanece singular."
        },
        {
          tipo: "tabla",
          titulo: "Pronombres indefinidos afirmativos",
          columnas: ["Pronombre", "✓ Singular", "✗ Error plural"],
          filas: [
            { tiempo: "alguien",         correcto: "sabe",   error: "saben" },
            { tiempo: "cualquiera (de)", correcto: "cumple", error: "cumplen" },
            { tiempo: "cada uno/a",      correcto: "debe",   error: "deben" },
            { tiempo: "uno de nosotros", correcto: "tendrá", error: "tendrán" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "alguien",
          correcto: "¿Alguien sabe la respuesta correcta a ese reactivo del examen?",
          incorrecto: "¿Alguien saben la respuesta correcta a ese reactivo?"
        },
        {
          tipo: "par",
          etiqueta: "cualquiera de + plural",
          correcto: "Cualquiera de los candidatos cumple los requisitos mínimos del puesto.",
          incorrecto: "Cualquiera de los candidatos cumplen los requisitos mínimos."
        },
        {
          tipo: "par",
          etiqueta: "cada uno de + plural",
          correcto: "Cada uno de los participantes debe entregar su formulario antes del viernes.",
          incorrecto: "Cada uno de los participantes deben entregar su formulario antes del viernes."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Complemento plural no cambia la concordancia",
          correcto: "Uno de nosotros tendrá que presentar el informe ante el comité.",
          incorrecto: "Uno de nosotros tendrán que presentar el informe ante el comité."
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
      tipo: "regla_rica",
      etiqueta: "Regla 11 / 24",
      titulo: "Construcción «uno de los que»",
      bloques: [
        {
          tipo: "texto",
          texto: "En «uno/una de los/las que + verbo», el verbo de la cláusula relativa va en PLURAL. El relativo «que» retoma el antecedente plural (los/las…), no al «uno/una» singular. Truco: pregunta ¿a qué se refiere «que»? → al grupo plural, no al individuo."
        },
        {
          tipo: "par",
          etiqueta: "una de las que — antecedente plural femenino",
          correcto: "Ella es una de las investigadoras que han publicado en revistas internacionales.",
          incorrecto: "Ella es una de las investigadoras que ha publicado en revistas internacionales."
        },
        {
          tipo: "par",
          etiqueta: "uno de los que — antecedente plural masculino",
          correcto: "Él fue uno de los estudiantes que aprobaron con distinción el examen nacional.",
          incorrecto: "Él fue uno de los estudiantes que aprobó con distinción el examen nacional."
        },
        {
          tipo: "par",
          etiqueta: "uno de los pocos que",
          correcto: "Es uno de los pocos proyectos que han recibido financiamiento completo este año.",
          incorrecto: "Es uno de los pocos proyectos que ha recibido financiamiento completo este año."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Contraste: «el único que» → singular (no hay grupo plural)",
          correcto: "Él es el único candidato que cumple todos los requisitos del perfil.",
          incorrecto: "Él es el único candidato que cumplen todos los requisitos del perfil."
        },
        {
          tipo: "texto",
          texto: "Regla de identificación: busca el sustantivo plural al que se refiere «que». Si «que» retoma «los/las + sustantivo» → plural en la relativa. Si «que» retoma un único antecedente → singular."
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
      tipo: "regla_rica",
      etiqueta: "Regla 12 / 24",
      titulo: "Cuantificadores y partitivos — norma preferida",
      bloques: [
        {
          tipo: "texto",
          texto: "Con expresiones partitivas, el núcleo gramatical es el sustantivo singular de la expresión (mayoría, mitad, resto, serie…), no el complemento plural que le sigue. El EXANI-I prefiere la concordancia gramatical con el núcleo singular."
        },
        {
          tipo: "tabla",
          titulo: "Expresiones partitivas — concordancia gramatical (singular)",
          columnas: ["Expresión partitiva", "✓ Sing. (EXANI-I)", "✗ Pl. (por sentido)"],
          filas: [
            { tiempo: "la mayoría de",  correcto: "votó",          error: "votaron" },
            { tiempo: "la mitad de",    correcto: "fue extraviada", error: "fueron extraviados" },
            { tiempo: "el resto de",    correcto: "llegó",          error: "llegaron" },
            { tiempo: "una serie de",   correcto: "provocó",        error: "provocaron" },
            { tiempo: "gran parte de",  correcto: "fue destinada",  error: "fueron destinados" },
            { tiempo: "una parte de",   correcto: "aprobó",         error: "aprobaron" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "la mitad de + complemento plural",
          correcto: "La mitad de los documentos fue extraviada durante el traslado.",
          incorrecto: "La mitad de los documentos fueron extraviados durante el traslado."
        },
        {
          tipo: "par",
          etiqueta: "una serie de + complemento plural",
          correcto: "Una serie de errores imprevistos provocó el fracaso del proyecto.",
          incorrecto: "Una serie de errores imprevistos provocaron el fracaso del proyecto."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Concordancia de sentido vs concordancia gramatical",
          correcto: "El resto de los participantes llegó puntualmente. (gramatical → EXANI-I)",
          incorrecto: "El resto de los participantes llegaron puntualmente. (sentido → no preferido)"
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
      tipo: "regla_rica",
      etiqueta: "Regla 13 / 24",
      titulo: "«El número de»",
      bloques: [
        {
          tipo: "texto",
          texto: "«El número de» siempre lleva verbo en singular: el núcleo es «el número» (masc. sing.), no el complemento plural. La clave está en el artículo definido «el»: indica una cantidad concreta → concordancia gramatical con «el número»."
        },
        {
          tipo: "par",
          etiqueta: "el número de + sustantivo plural",
          correcto: "El número de estudiantes inscritos ha aumentado considerablemente este ciclo.",
          incorrecto: "El número de estudiantes inscritos han aumentado considerablemente este ciclo."
        },
        {
          tipo: "par",
          etiqueta: "el número de + verbo simple",
          correcto: "El número de solicitudes recibidas supera ampliamente las expectativas del área.",
          incorrecto: "El número de solicitudes recibidas superan las expectativas del área."
        },
        {
          tipo: "par",
          etiqueta: "el número de + verbo ser",
          correcto: "El número de participantes es mayor al esperado por los organizadores.",
          incorrecto: "El número de participantes son mayores al esperado por los organizadores."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Contraste clave: artículo definido «el» vs indefinido «un»",
          correcto: "El número de propuestas fue revisado. (el → singular)",
          incorrecto: "Un gran número de propuestas fue revisado. (un → plural preferido, ver Regla 14)"
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
      tipo: "regla_rica",
      etiqueta: "Regla 14 / 24",
      titulo: "«Un gran número de» / «infinidad de»",
      bloques: [
        {
          tipo: "texto",
          texto: "Contraste con Regla 13: cuando el artículo es indefinido («un»), el énfasis semántico recae en la cantidad del complemento plural. La concordancia de sentido prevalece → verbo en plural. Lo mismo aplica a «miles de», «centenares de», «una infinidad de»."
        },
        {
          tipo: "tabla",
          titulo: "Expresiones de cantidad indefinida → verbo plural",
          columnas: ["Expresión", "✓ Plural (preferido)", "✗ Singular (forzado)"],
          filas: [
            { tiempo: "un gran número de",           correcto: "presentaron",     error: "presentó" },
            { tiempo: "una infinidad de",             correcto: "surgieron",       error: "surgió" },
            { tiempo: "miles de",                     correcto: "se manifestaron", error: "se manifestó" },
            { tiempo: "centenares de",                correcto: "solicitaron",     error: "solicitó" },
            { tiempo: "una cantidad considerable de", correcto: "fueron destinados", error: "fue destinada" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "un gran número de — concordancia de sentido",
          correcto: "Un gran número de investigadores presentaron sus hallazgos en el congreso anual.",
          incorrecto: "Un gran número de investigadores presentó sus hallazgos en el congreso."
        },
        {
          tipo: "par",
          etiqueta: "miles de — concordancia de sentido",
          correcto: "Miles de personas se manifestaron frente al palacio de gobierno el fin de semana.",
          incorrecto: "Miles de personas se manifestó frente al palacio de gobierno."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Regla definitiva: artículo definido «el» → singular / indefinido «un» → plural",
          correcto: "El número de errores fue corregido. / Un gran número de errores fueron corregidos.",
          incorrecto: "El número de errores fueron corregidos. / Un gran número de errores fue corregido."
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
      tipo: "regla_rica",
      etiqueta: "Regla 15 / 24",
      titulo: "Sujetos coordinados con «o» (disyuntiva exclusiva)",
      bloques: [
        {
          tipo: "texto",
          texto: "«O» exclusiva: solo uno de los sujetos realizará la acción → verbo en singular. En el EXANI-I, «o» casi siempre se evalúa como exclusiva. Si ambos pudieran actuar simultáneamente («o» inclusiva), el plural sería posible, pero esta interpretación es rara en el examen."
        },
        {
          tipo: "par",
          etiqueta: "o exclusiva básica — terceras personas",
          correcto: "El rector o la secretaria firmará el comunicado. (uno solo firmará)",
          incorrecto: "El rector o la secretaria firmarán el comunicado. (implica que ambos firman)"
        },
        {
          tipo: "par",
          etiqueta: "o reforzada — o…o",
          correcto: "O el coordinador o su representante asistirá a la junta directiva de mañana.",
          incorrecto: "O el coordinador o su representante asistirán a la junta directiva."
        },
        {
          tipo: "par",
          etiqueta: "nombres propios",
          correcto: "Juan o María entregará el informe mañana, según quien termine primero.",
          incorrecto: "Juan o María entregarán el informe mañana."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Sujetos de distinta persona → concuerda con el más próximo al verbo",
          correcto: "Tú o yo presentaremos el proyecto si nadie más se ofrece. (yo → 1ª pl.)",
          incorrecto: "Tú o yo presentará el proyecto. (3ª persona incorrecta)"
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
      tipo: "regla_rica",
      etiqueta: "Regla 16 / 24",
      titulo: "Construcción «o bien... o bien»",
      bloques: [
        {
          tipo: "texto",
          texto: "«O bien... o bien» refuerza la disyunción exclusiva: de las dos opciones, solo una ocurrirá → verbo en singular. Es la variante formal de la Regla 15. No confundir con «y»: «y» siempre coordina y exige plural."
        },
        {
          tipo: "par",
          etiqueta: "o bien...o bien — terceras personas",
          correcto: "O bien el director o bien su representante asistirá a la junta mensual.",
          incorrecto: "O bien el director o bien su representante asistirán a la junta mensual."
        },
        {
          tipo: "par",
          etiqueta: "o bien — segunda persona (sujeto tácito coherente)",
          correcto: "O bien apruebas el examen o bien repites el curso el próximo ciclo escolar.",
          incorrecto: "O bien apruebas el examen o bien repiten el curso. (persona incorrecta)"
        },
        {
          tipo: "par",
          etiqueta: "o bien — colectivo singular",
          correcto: "O bien el comité acepta la propuesta o bien la rechaza en su totalidad.",
          incorrecto: "O bien el comité acepta la propuesta o bien la rechazan."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Contraste: «o bien» (singular) vs «y» (siempre plural)",
          correcto: "O bien el rector o bien el secretario firmará el acuerdo. (uno solo)",
          incorrecto: "El rector y el secretario firmará el acuerdo. (con «y» → «firmaron»)"
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
      tipo: "regla_rica",
      etiqueta: "Regla 17 / 24",
      titulo: "Relativo «que» con «ser» + yo/tú (1ª/2ª persona)",
      bloques: [
        {
          tipo: "texto",
          texto: "En «ser + pronombre personal + quien/que + verbo», la norma culta exige que el verbo de la relativa concuerde con el pronombre antecedente. El EXANI-I evalúa la concordancia culta, aunque la 3ª persona sea aceptable coloquialmente."
        },
        {
          tipo: "tabla",
          titulo: "Concordancia culta: ser + pronombre + relativa",
          columnas: ["Pronombre", "✓ Norma culta", "Aceptable (no preferida)"],
          filas: [
            { tiempo: "yo",       correcto: "presenté / fui yo quien presenté",     error: "presentó" },
            { tiempo: "tú",       correcto: "cometiste / fuiste tú quien cometiste", error: "cometió" },
            { tiempo: "nosotros", correcto: "debemos / somos quienes debemos",       error: "deben" },
            { tiempo: "ustedes",  correcto: "deben / son quienes deben",             error: "debemos" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "yo → 1ª singular",
          correcto: "Fui yo quien presenté la propuesta ante el consejo directivo.",
          incorrecto: "Fui yo quien presentó la propuesta. (3ª persona, no preferida)"
        },
        {
          tipo: "par",
          etiqueta: "tú → 2ª singular",
          correcto: "Fuiste tú quien cometiste el error en la última sesión del semestre.",
          incorrecto: "Fuiste tú quien cometió el error. (aceptable, no es la norma culta)"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "ustedes → 3ª plural (no 1ª plural)",
          correcto: "Son ustedes quienes deben aprobar el presupuesto en la próxima sesión.",
          incorrecto: "Son ustedes quienes debemos aprobar el presupuesto. (1ª persona incorrecta)"
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
      tipo: "regla_rica",
      etiqueta: "Regla 18 / 24",
      titulo: "Relativo «quien / quienes»",
      bloques: [
        {
          tipo: "texto",
          texto: "«Quien» y «quienes» solo se usan con antecedentes de persona. El verbo de la relativa concuerda con el relativo y su antecedente. Para cosas o hechos se usa «que» o «el cual / la cual», nunca «quien»."
        },
        {
          tipo: "tabla",
          titulo: "Selección del relativo según el antecedente",
          columnas: ["Antecedente", "✓ Relativo correcto", "✗ Error"],
          filas: [
            { tiempo: "persona singular",  correcto: "quien",        error: "quienes" },
            { tiempo: "persona plural",    correcto: "quienes",      error: "quien" },
            { tiempo: "cosa / hecho",      correcto: "que / el cual", error: "quien" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "quien — antecedente singular de persona",
          correcto: "La investigadora, quien publicó el artículo, ganó el premio nacional de ciencias.",
          incorrecto: "La investigadora, quienes publicó el artículo, ganó el premio."
        },
        {
          tipo: "par",
          etiqueta: "quienes — antecedente plural de persona",
          correcto: "Los investigadores, quienes publicaron el artículo, ganaron el premio.",
          incorrecto: "Los investigadores, quien publicaron el artículo, ganaron el premio."
        },
        {
          tipo: "par",
          etiqueta: "quienes libre — sin antecedente expreso",
          correcto: "Quienes no entreguen el formulario a tiempo quedarán fuera del proceso.",
          incorrecto: "Quien no entreguen el formulario a tiempo quedarán fuera del proceso."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "NO usar «quien» con antecedentes de cosa",
          correcto: "El proyecto, que fue aprobado por unanimidad, comenzará en enero.",
          incorrecto: "El proyecto, quien fue aprobado por unanimidad, comenzará en enero."
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
      tipo: "regla_rica",
      etiqueta: "Regla 19 / 24",
      titulo: "Pasiva refleja («se» + verbo transitivo)",
      bloques: [
        {
          tipo: "texto",
          texto: "Pasiva refleja: «se + verbo transitivo + sujeto paciente». El verbo concuerda con el sujeto paciente (lo que recibe la acción). Prueba: si puedes preguntar «¿qué se [verbo]?» y un sustantivo responde → pasiva refleja; el verbo concuerda con ese sustantivo."
        },
        {
          tipo: "tabla",
          titulo: "Concordancia con el sujeto paciente",
          columnas: ["Sujeto paciente", "✓ Verbo", "✗ Error"],
          filas: [
            { tiempo: "singular (el premio)",     correcto: "se entregó",    error: "se entregaron" },
            { tiempo: "plural (los premios)",      correcto: "se entregaron", error: "se entregó" },
            { tiempo: "singular (el informe)",     correcto: "se publicó",    error: "se publicaron" },
            { tiempo: "plural (los resultados)",   correcto: "se publicaron", error: "se publicó" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "paciente singular",
          correcto: "Se entregó el premio al estudiante con mayor promedio del ciclo escolar.",
          incorrecto: "Se entregaron el premio al estudiante con mayor promedio del ciclo."
        },
        {
          tipo: "par",
          etiqueta: "paciente plural pospuesto",
          correcto: "Se aprobaron en la sesión extraordinaria tres nuevas medidas de seguridad.",
          incorrecto: "Se aprobó en la sesión extraordinaria tres nuevas medidas de seguridad."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Verbo intransitivo → impersonal (no pasiva refleja)",
          correcto: "Se viajó con precaución por las carreteras en mal estado durante el invierno.",
          incorrecto: "Se viajaron con precaución por las carreteras. (intransitivo no tiene pasiva)"
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
      tipo: "regla_rica",
      etiqueta: "Regla 20 / 24",
      titulo: "Impersonales con «se» (sin sujeto gramatical)",
      bloques: [
        {
          tipo: "texto",
          texto: "Impersonal con «se»: el verbo va siempre en 3ª singular porque no existe sujeto gramatical. Ocurre con verbos intransitivos o usados sin objeto directo. Prueba: si no puedes preguntar «¿qué se [verbo]?» con un sustantivo que lo responda → es impersonal."
        },
        {
          tipo: "par",
          etiqueta: "verbo intransitivo → siempre impersonal",
          correcto: "Se trabaja mucho en esta institución educativa de alto rendimiento.",
          incorrecto: "Se trabajan mucho en esta institución educativa de alto rendimiento."
        },
        {
          tipo: "par",
          etiqueta: "lengua / actividad general",
          correcto: "Se habla español en esta conferencia internacional de lingüística aplicada.",
          incorrecto: "Se hablan español en esta conferencia internacional de lingüística."
        },
        {
          tipo: "par",
          etiqueta: "«poder» + infinitivo — impersonal",
          correcto: "Se puede mejorar el rendimiento con práctica constante y retroalimentación.",
          incorrecto: "Se pueden mejorar el rendimiento con práctica constante."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Contraste: impersonal vs pasiva refleja",
          correcto: "Se come bien aquí. (impersonal: intransitivo) / Se comen tamales. (pasiva: tamales = paciente)",
          incorrecto: "Se comen bien aquí. / Se come tamales todos los domingos."
        },
        {
          tipo: "texto",
          texto: "Regla definitiva: verbo intransitivo o sin OD identificable → impersonal → singular fijo. Verbo transitivo + sustantivo como sujeto paciente → pasiva refleja → concuerda con el paciente."
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
      tipo: "regla_rica",
      etiqueta: "Regla 21 / 24",
      titulo: "Sujeto en infinitivo o cláusula sustantiva (singular)",
      bloques: [
        {
          tipo: "texto",
          texto: "Un infinitivo o una cláusula sustantiva («que + oración») en función de sujeto equivale a un sustantivo singular → verbo en 3ª persona singular. No importa cuántos elementos haya dentro; como unidad, cuenta como uno solo."
        },
        {
          tipo: "par",
          etiqueta: "infinitivo como sujeto",
          correcto: "Prepararse adecuadamente para el examen requiere tiempo, disciplina y constancia.",
          incorrecto: "Prepararse adecuadamente para el examen requieren tiempo, disciplina y constancia."
        },
        {
          tipo: "par",
          etiqueta: "cláusula «que» como sujeto",
          correcto: "Que el comité no haya tomado una decisión todavía resulta preocupante para todos.",
          incorrecto: "Que el comité no haya tomado una decisión todavía resultan preocupantes."
        },
        {
          tipo: "par",
          etiqueta: "cláusula «que» compleja como sujeto",
          correcto: "Que los alumnos practiquen a diario es lo más recomendable según los especialistas.",
          incorrecto: "Que los alumnos practiquen a diario son lo más recomendable."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Un infinitivo → singular / Dos infinitivos con «y» → plural (Regla 22)",
          correcto: "Leer es enriquecedor. (uno → singular)",
          incorrecto: "Leer y escribir es enriquecedor. (dos con «y» → «son enriquecedores»)"
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
      tipo: "regla_rica",
      etiqueta: "Regla 22 / 24",
      titulo: "Sujeto oracional coordinado (plural)",
      bloques: [
        {
          tipo: "texto",
          texto: "Dos o más infinitivos o cláusulas sustantivas unidos por «y» forman un sujeto compuesto → verbo en plural. Es el mismo principio de la Regla 2 (sujeto nominal con «y») aplicado a sujetos oracionales."
        },
        {
          tipo: "par",
          etiqueta: "dos infinitivos con «y»",
          correcto: "Estudiar y practicar son las claves del éxito en cualquier examen nacional.",
          incorrecto: "Estudiar y practicar es la clave del éxito en cualquier examen."
        },
        {
          tipo: "par",
          etiqueta: "dos cláusulas «que» con «y»",
          correcto: "Que llueva y que haga frío impiden la realización de la actividad al aire libre.",
          incorrecto: "Que llueva y que haga frío impide la realización de la actividad al aire libre."
        },
        {
          tipo: "par",
          etiqueta: "tres infinitivos",
          correcto: "Leer, escribir y argumentar correctamente son habilidades esenciales para la vida universitaria.",
          incorrecto: "Leer, escribir y argumentar correctamente es una habilidad esencial."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Contraste con Regla 21: uno solo → singular / dos con «y» → plural",
          correcto: "Prepararse es fundamental. (uno → singular) / Prepararse y repasar son fundamentales. (dos → plural)",
          incorrecto: "Prepararse son fundamentales. / Prepararse y repasar es fundamental."
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
      tipo: "regla_rica",
      etiqueta: "Regla 23 / 24",
      titulo: "Vocativos — no afectan la concordancia",
      bloques: [
        {
          tipo: "texto",
          texto: "El vocativo es el nombre o título con que el hablante interpela al interlocutor. Va separado por comas y no es sujeto gramatical. El verbo concuerda con el sujeto tácito: la persona a quien se habla."
        },
        {
          tipo: "tabla",
          titulo: "Tipo de vocativo → sujeto tácito → tratamiento",
          columnas: ["Tipo de vocativo", "Sujeto tácito", "Tratamiento verbal"],
          filas: [
            { tiempo: "nombre propio (Juan, María)",  correcto: "tú",      error: "usted / ellos" },
            { tiempo: "título formal (doctor/a)",     correcto: "usted",   error: "tú / ellos" },
            { tiempo: "grupo (señores, estudiantes)", correcto: "ustedes", error: "usted / tú" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "nombre propio → sujeto tácito «tú»",
          correcto: "Juan, ¿viniste al examen de ayer por la mañana?",
          incorrecto: "Juan, ¿vino al examen de ayer? (3ª persona incorrecta)"
        },
        {
          tipo: "par",
          etiqueta: "título formal → sujeto tácito «usted»",
          correcto: "Doctora, ¿podría revisar el informe antes de la sesión del comité?",
          incorrecto: "Doctora, ¿podrías revisar el informe antes de la sesión? (tuteo inadecuado)"
        },
        {
          tipo: "par",
          etiqueta: "grupo → sujeto tácito «ustedes»",
          correcto: "Señores, ¿llegaron a tiempo a la conferencia inaugural del congreso?",
          incorrecto: "Señores, ¿llegó a tiempo a la conferencia inaugural?"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Vocativo intercalado — la estructura del verbo no cambia",
          correcto: "Espero, estudiantes, que hayan preparado bien el tema para la presentación.",
          incorrecto: "Espero, estudiantes, que haya preparado bien el tema para la presentación."
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
      tipo: "regla_rica",
      etiqueta: "Regla 24 / 24",
      titulo: "Construcciones enfáticas «es que» / «fue que»",
      bloques: [
        {
          tipo: "texto",
          texto: "Las construcciones de relieve («es/fue + elemento enfatizado + lo que/quien/donde/cuando») usan el verbo copulativo en 3ª persona singular invariable. El error más frecuente: concordar el copulativo con el elemento enfatizado cuando este es plural."
        },
        {
          tipo: "tabla",
          titulo: "Patrones de construcción enfática",
          columnas: ["Construcción", "✓ Copulativo sing.", "✗ Error plural"],
          filas: [
            { tiempo: "es / son… lo que",     correcto: "es",  error: "son" },
            { tiempo: "fue / fueron… quien",   correcto: "fue", error: "fueron" },
            { tiempo: "es / son… donde",       correcto: "es",  error: "son" },
            { tiempo: "fue / fueron… cuando",  correcto: "fue", error: "fueron" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "es...lo que — elemento plural (trampa frecuente)",
          correcto: "Es la concordancia verbal lo que más se evalúa en el EXANI-I de Redacción.",
          incorrecto: "Son las concordancias verbales lo que más se evalúan en el EXANI-I."
        },
        {
          tipo: "par",
          etiqueta: "fue...quien — colectivo singular",
          correcto: "Fue el equipo quien ganó el campeonato regional de matemáticas aplicadas.",
          incorrecto: "Fueron el equipo quienes ganaron el campeonato regional de matemáticas."
        },
        {
          tipo: "par",
          etiqueta: "es...donde",
          correcto: "Es en el aula donde se construye el conocimiento más significativo.",
          incorrecto: "Son en el aula donde se construyen los conocimientos más significativos."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Complemento plural no cambia el copulativo",
          correcto: "Es los errores de concordancia lo que más perjudica a los estudiantes en el EXANI-I.",
          incorrecto: "Son los errores de concordancia lo que más perjudican a los estudiantes."
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
