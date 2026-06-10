// Datos de la presentación: Concordancia Nominal
// Reglas de concordancia sustantivo–adjetivo–determinante para el EXANI-I

export const PRESENTACION = {
  id: "concordancia-nominal",
  titulo: "Concordancia Nominal",
  materia: "Español",
  slides: [
    // ── Portada ──────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Concordancia Nominal",
      subtitulo: "Género y número en el grupo nominal — EXANI-I",
      etiqueta: "Español · Redacción Indirecta"
    },

    // ── Regla 1: Concordancia básica sustantivo–adjetivo ─────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Regla 1 / 10",
      titulo: "Concordancia básica: sustantivo y adjetivo",
      bloques: [
        {
          tipo: "texto",
          texto: "El adjetivo concuerda en género (masculino/femenino) y número (singular/plural) con el sustantivo al que modifica. Es la regla base: todo adjetivo copia las dos marcas del sustantivo, esté antepuesto o pospuesto."
        },
        {
          tipo: "tabla",
          titulo: "Las cuatro combinaciones de género y número",
          columnas: ["Sustantivo", "✓ Adjetivo concuerda", "✗ Error frecuente"],
          filas: [
            { tiempo: "masc. singular", correcto: "el proyecto innovador", error: "el proyecto innovadora" },
            { tiempo: "fem. singular",  correcto: "la propuesta innovadora", error: "la propuesta innovador" },
            { tiempo: "masc. plural",   correcto: "los proyectos innovadores", error: "los proyectos innovador" },
            { tiempo: "fem. plural",    correcto: "las propuestas innovadoras", error: "las propuestas innovadora" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "adjetivo pospuesto — femenino plural",
          correcto: "Las conclusiones presentadas resultaron claras y contundentes.",
          incorrecto: "Las conclusiones presentadas resultaron claros y contundente."
        },
        {
          tipo: "par",
          etiqueta: "adjetivo de una sola terminación — solo varía el número",
          correcto: "Un argumento coherente y unas razones coherentes sostienen la tesis.",
          incorrecto: "Un argumento coherente y unas razones coherente sostienen la tesis."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "El adjetivo concuerda con su sustantivo, no con la palabra más cercana",
          correcto: "Una mesa de madera maciza ocupaba el centro del salón. (maciza ↔ madera)",
          incorrecto: "Una mesa de madera macizo ocupaba el centro del salón."
        }
      ]
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 1",
      pregunta: "«Las medidas __ por el comité fueron aprobadas en la sesión plenaria.»",
      opciones: ["propuesto", "propuestas", "propuesto"],
      correcta: 1,
      explicacion: "«propuestas» — el participio adjetival concuerda con «las medidas» (fem. pl.) → femenino plural.",
      pasos: []
    },
    {
      id: 3,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 1",
      pregunta: "«El informe __ describe con detalle los resultados del estudio longitudinal.»",
      opciones: ["preliminar", "preliminares", "preliminaria"],
      correcta: 0,
      explicacion: "«preliminar» — adjetivo de una sola terminación que concuerda en número con «el informe» (singular).",
      pasos: []
    },

    // ── Regla 2: Determinante y sustantivo ───────────────────────────────────
    {
      id: 4,
      tipo: "regla_rica",
      etiqueta: "Regla 2 / 10",
      titulo: "Determinante y sustantivo",
      bloques: [
        {
          tipo: "texto",
          texto: "Los determinantes (artículos, demostrativos, posesivos, indefinidos) también concuerdan en género y número con el sustantivo. El error típico aparece con sustantivos cuyo género no coincide con su terminación aparente (el problema, la mano, el mapa)."
        },
        {
          tipo: "tabla",
          titulo: "Determinantes que deben concordar",
          columnas: ["Tipo", "✓ Concordancia correcta", "✗ Error frecuente"],
          filas: [
            { tiempo: "artículo",     correcto: "el problema / los problemas", error: "la problema" },
            { tiempo: "demostrativo", correcto: "esta mano / estas manos",     error: "este mano" },
            { tiempo: "posesivo",     correcto: "nuestras propuestas",          error: "nuestros propuestas" },
            { tiempo: "indefinido",   correcto: "muchas dificultades",          error: "muchos dificultades" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "género no evidente por la terminación",
          correcto: "El tema central y la síntesis final ocuparon toda la sesión.",
          incorrecto: "La tema central y el síntesis final ocuparon toda la sesión."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "La terminación -a no garantiza femenino, ni -o masculino",
          correcto: "Este programa, ese idioma y aquel clima exigen atención. (todos masculinos)",
          incorrecto: "Esta programa, esa idioma y aquella clima exigen atención."
        }
      ]
    },
    {
      id: 5,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 2",
      pregunta: "«__ problema que planteó el ponente generó un intenso debate entre los asistentes.»",
      opciones: ["La", "El", "Esa"],
      correcta: 1,
      explicacion: "«El» — «problema» es masculino pese a terminar en -a. El determinante debe ir en masculino singular.",
      pasos: []
    },
    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 2",
      pregunta: "«Entregamos __ conclusiones al coordinador antes de que finalizara la jornada.»",
      opciones: ["nuestros", "nuestras", "nuestro"],
      correcta: 1,
      explicacion: "«nuestras» — el posesivo concuerda con «conclusiones» (fem. pl.) → femenino plural.",
      pasos: []
    },

    // ── Regla 3: Un adjetivo para varios sustantivos (pospuesto) ──────────────
    {
      id: 7,
      tipo: "regla_rica",
      etiqueta: "Regla 3 / 10",
      titulo: "Un adjetivo pospuesto a varios sustantivos",
      bloques: [
        {
          tipo: "texto",
          texto: "Cuando un mismo adjetivo modifica a dos o más sustantivos coordinados, va en plural. Si los sustantivos son de distinto género, predomina el masculino plural. Si todos son femeninos, el adjetivo va en femenino plural."
        },
        {
          tipo: "tabla",
          titulo: "Concordancia con sustantivos coordinados",
          columnas: ["Sustantivos", "✓ Adjetivo", "Ejemplo"],
          filas: [
            { tiempo: "masc. + masc.", correcto: "masc. plural",  error: "el cuaderno y el libro nuevos" },
            { tiempo: "fem. + fem.",   correcto: "fem. plural",    error: "la mesa y la silla blancas" },
            { tiempo: "masc. + fem.",  correcto: "masc. plural",   error: "el escritorio y la silla viejos" },
            { tiempo: "fem. + masc.",  correcto: "masc. plural",   error: "la pluma y el lápiz negros" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "distinto género — predomina el masculino plural",
          correcto: "El informe y la propuesta presentados fueron muy bien recibidos.",
          incorrecto: "El informe y la propuesta presentadas fueron muy bien recibidos."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Aun con un solo sustantivo femenino, el masculino domina la coordinación mixta",
          correcto: "Compró tres cuadernos y una libreta usados en la feria del libro.",
          incorrecto: "Compró tres cuadernos y una libreta usadas en la feria del libro."
        }
      ]
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 3",
      pregunta: "«El cuestionario y la rúbrica __ se aplicarán en la próxima evaluación diagnóstica.»",
      opciones: ["revisadas", "revisados", "revisado"],
      correcta: 1,
      explicacion: "«revisados» — un sustantivo masculino y uno femenino coordinados → el adjetivo va en masculino plural.",
      pasos: []
    },
    {
      id: 9,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 3",
      pregunta: "«La introducción y la conclusión __ aportan claridad al ensayo argumentativo.»",
      opciones: ["redactados", "redactadas", "redactada"],
      correcta: 1,
      explicacion: "«redactadas» — ambos sustantivos son femeninos → el adjetivo va en femenino plural.",
      pasos: []
    },

    // ── Regla 4: Adjetivo antepuesto a varios sustantivos ────────────────────
    {
      id: 10,
      tipo: "regla_rica",
      etiqueta: "Regla 4 / 10",
      titulo: "Adjetivo antepuesto a varios sustantivos",
      bloques: [
        {
          tipo: "texto",
          texto: "Cuando el adjetivo va DELANTE de sustantivos coordinados, suele concordar solo con el más cercano (en género y número singular). Es la diferencia clave con la Regla 3: pospuesto → plural; antepuesto → concuerda con el primero."
        },
        {
          tipo: "par",
          etiqueta: "antepuesto — concuerda con el sustantivo más próximo",
          correcto: "Mostró una notable dedicación y esfuerzo durante todo el ciclo.",
          incorrecto: "Mostró unos notables dedicación y esfuerzo durante todo el ciclo."
        },
        {
          tipo: "par",
          etiqueta: "pospuesto (contraste) — va en plural",
          correcto: "Mostró una dedicación y un esfuerzo notables durante todo el ciclo.",
          incorrecto: "Mostró una dedicación y un esfuerzo notable durante todo el ciclo."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Posición del adjetivo: antes → concuerda con el primero; después → plural",
          correcto: "Se requiere absoluta puntualidad y discreción. (antepuesto, concuerda con «puntualidad»)",
          incorrecto: "Se requiere absolutas puntualidad y discreción."
        }
      ]
    },
    {
      id: 11,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 4",
      pregunta: "«El proyecto exige __ rigor y precisión en cada una de sus etapas de desarrollo.»",
      opciones: ["sumos", "sumo", "suma"],
      correcta: 1,
      explicacion: "«sumo» — el adjetivo antepuesto concuerda con el sustantivo más cercano, «rigor» (masc. sing.).",
      pasos: []
    },
    {
      id: 12,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 4",
      pregunta: "«Demostró un compromiso y una entrega __ a lo largo del proceso de selección.»",
      opciones: ["admirable", "admirables", "admirada"],
      correcta: 1,
      explicacion: "«admirables» — el adjetivo va POSPUESTO a dos sustantivos coordinados → plural (Regla 3).",
      pasos: []
    },

    // ── Regla 5: Femeninos con «a-/ha-» tónica inicial ───────────────────────
    {
      id: 13,
      tipo: "regla_rica",
      etiqueta: "Regla 5 / 10",
      titulo: "Femeninos con «a-/ha-» tónica: el agua clara",
      bloques: [
        {
          tipo: "texto",
          texto: "Los sustantivos femeninos que empiezan por «a-» o «ha-» tónica (acentuada) llevan los artículos «el» y «un» en singular para evitar la cacofonía: el agua, un águila. Pero siguen siendo femeninos: los adjetivos y los demás determinantes van en femenino."
        },
        {
          tipo: "tabla",
          titulo: "«el/un» de eufonía — el sustantivo sigue siendo femenino",
          columnas: ["Singular (el/un)", "✓ Adjetivo femenino", "Plural"],
          filas: [
            { tiempo: "el agua",   correcto: "el agua cristalina", error: "las aguas cristalinas" },
            { tiempo: "un águila", correcto: "un águila majestuosa", error: "unas águilas majestuosas" },
            { tiempo: "el área",   correcto: "el área restringida", error: "las áreas restringidas" },
            { tiempo: "el aula",   correcto: "el aula contigua",    error: "las aulas contiguas" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el + sustantivo, pero adjetivo en femenino",
          correcto: "El área designada para el evento resultó demasiado pequeña.",
          incorrecto: "El área designado para el evento resultó demasiado pequeño."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "«el» de eufonía solo aplica si la «a-» es tónica y va pegada al sustantivo",
          correcto: "La amplia aula / el aula amplia. (con adjetivo intercalado vuelve «la»)",
          incorrecto: "El amplia aula. (al intercalar el adjetivo se rompe la regla)"
        }
      ]
    },
    {
      id: 14,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 5",
      pregunta: "«El agua __ del manantial abastece a toda la comunidad durante el estiaje.»",
      opciones: ["puro", "pura", "puros"],
      correcta: 1,
      explicacion: "«pura» — «agua» es femenino aunque lleve «el» por eufonía; el adjetivo va en femenino: «agua pura».",
      pasos: []
    },
    {
      id: 15,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 5",
      pregunta: "«__ aula asignada al grupo no contaba con suficiente ventilación natural.»",
      opciones: ["El", "La", "Un"],
      correcta: 0,
      explicacion: "«El» — ante «aula» (femenino con a- tónica) se usa «el» en singular para evitar la cacofonía «la aula».",
      pasos: []
    },

    // ── Regla 6: Sustantivos de género común y epiceno ───────────────────────
    {
      id: 16,
      tipo: "regla_rica",
      etiqueta: "Regla 6 / 10",
      titulo: "Género común y epiceno",
      bloques: [
        {
          tipo: "texto",
          texto: "En los sustantivos de género común (el/la estudiante, el/la pianista) el género lo marca el determinante. En los epicenos (la víctima, el personaje, la persona) el género gramatical es fijo y no cambia aunque se refiera a un hombre o a una mujer."
        },
        {
          tipo: "tabla",
          titulo: "Común vs. epiceno",
          columnas: ["Tipo", "Marca el género…", "Ejemplo"],
          filas: [
            { tiempo: "común",   correcto: "el determinante", error: "el estudiante / la estudiante" },
            { tiempo: "común",   correcto: "el determinante", error: "el periodista / la periodista" },
            { tiempo: "epiceno", correcto: "fijo en el sustantivo", error: "la víctima (sea hombre o mujer)" },
            { tiempo: "epiceno", correcto: "fijo en el sustantivo", error: "el personaje (sea hombre o mujer)" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "epiceno — el adjetivo concuerda con el género gramatical, no con el sexo",
          correcto: "La víctima fue trasladada al hospital; era un hombre de mediana edad.",
          incorrecto: "La víctima fue trasladado al hospital; era un hombre de mediana edad."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "En los epicenos manda el género de la palabra, aunque designe al otro sexo",
          correcto: "El personaje principal, interpretado por una actriz, resultó convincente.",
          incorrecto: "El personaje principal, interpretada por una actriz, resultó convincente."
        }
      ]
    },
    {
      id: 17,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 6",
      pregunta: "«La persona __ como responsable del área coordinará el nuevo equipo de trabajo.»",
      opciones: ["designado", "designada", "designados"],
      correcta: 1,
      explicacion: "«designada» — «persona» es epiceno femenino; el adjetivo va en femenino aunque el referente sea un varón.",
      pasos: []
    },
    {
      id: 18,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 6",
      pregunta: "«La estudiante más __ del grupo obtuvo el reconocimiento al mérito académico.»",
      opciones: ["destacado", "destacada", "destacados"],
      correcta: 1,
      explicacion: "«destacada» — «estudiante» es común; aquí el determinante «la» marca femenino, así que el adjetivo va en femenino.",
      pasos: []
    },

    // ── Regla 7: Numerales y concordancia ────────────────────────────────────
    {
      id: 19,
      tipo: "regla_rica",
      etiqueta: "Regla 7 / 10",
      titulo: "Numerales: un/una, veintiún, doscientas",
      bloques: [
        {
          tipo: "texto",
          texto: "Algunos numerales concuerdan en género con el sustantivo. «Uno» se apocopa en «un» ante masculino y es «una» ante femenino (también en los compuestos: veintiún, veintiuna). Las centenas concuerdan: doscientos/doscientas, trescientos/trescientas."
        },
        {
          tipo: "tabla",
          titulo: "Numerales que concuerdan en género",
          columnas: ["Numeral", "✓ Masculino", "✓ Femenino"],
          filas: [
            { tiempo: "1",   correcto: "un alumno",        error: "una alumna" },
            { tiempo: "21",  correcto: "veintiún alumnos", error: "veintiuna alumnas" },
            { tiempo: "200", correcto: "doscientos pesos", error: "doscientas personas" },
            { tiempo: "500", correcto: "quinientos votos", error: "quinientas firmas" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "centena + sustantivo femenino",
          correcto: "Se recibieron trescientas solicitudes durante el periodo de inscripción.",
          incorrecto: "Se recibieron trescientos solicitudes durante el periodo de inscripción."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "«veintiún» se apocopa ante el sustantivo masculino; ante femenino es «veintiuna»",
          correcto: "Asistieron veintiún profesores y veintiuna profesoras al congreso.",
          incorrecto: "Asistieron veintiuno profesores y veintiún profesoras al congreso."
        }
      ]
    },
    {
      id: 20,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 7",
      pregunta: "«El padrón registró __ candidatas para las elecciones del consejo estudiantil.»",
      opciones: ["doscientos", "doscientas", "doscienta"],
      correcta: 1,
      explicacion: "«doscientas» — la centena concuerda en género con «candidatas» (femenino) → «doscientas».",
      pasos: []
    },
    {
      id: 21,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 7",
      pregunta: "«En el almacén quedaban __ cajas listas para su distribución a las sucursales.»",
      opciones: ["veintiún", "veintiuna", "veintiunas"],
      correcta: 1,
      explicacion: "«veintiuna» — ante sustantivo femenino, «veintiuno» toma la forma «veintiuna»: «veintiuna cajas».",
      pasos: []
    },

    // ── Regla 8: Atributo y predicativo ──────────────────────────────────────
    {
      id: 22,
      tipo: "regla_rica",
      etiqueta: "Regla 8 / 10",
      titulo: "Atributo y predicativo: concuerdan con el sujeto",
      bloques: [
        {
          tipo: "texto",
          texto: "El adjetivo que funciona como atributo (con ser, estar, parecer) o como predicativo concuerda en género y número con el sujeto, aunque esté lejos del sustantivo en la oración. Localiza el sujeto y haz que el atributo lo copie."
        },
        {
          tipo: "tabla",
          titulo: "Atributos con verbos copulativos",
          columnas: ["Verbo", "✓ Atributo concuerda con sujeto", "✗ Error"],
          filas: [
            { tiempo: "ser",     correcto: "Las pruebas son concluyentes.", error: "Las pruebas son concluyente." },
            { tiempo: "estar",   correcto: "Los anexos están completos.",   error: "Los anexos están completo." },
            { tiempo: "parecer", correcto: "La hipótesis parece sólida.",    error: "La hipótesis parece sólido." },
            { tiempo: "result.", correcto: "Las cifras resultaron exactas.", error: "Las cifras resultaron exacto." }
          ]
        },
        {
          tipo: "par",
          etiqueta: "atributo separado del sujeto",
          correcto: "Las recomendaciones del comité, tras un largo análisis, fueron unánimes.",
          incorrecto: "Las recomendaciones del comité, tras un largo análisis, fueron unánime."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "El atributo concuerda con el sujeto, no con el nombre que tenga al lado",
          correcto: "La calidad de los materiales empleados fue excelente. (excelente ↔ calidad)",
          incorrecto: "La calidad de los materiales empleados fueron excelentes."
        }
      ]
    },
    {
      id: 23,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 8",
      pregunta: "«Las evidencias reunidas durante la investigación resultaron __ para el dictamen.»",
      opciones: ["decisivo", "decisivas", "decisivos"],
      correcta: 1,
      explicacion: "«decisivas» — el predicativo concuerda con el sujeto «las evidencias» (fem. pl.) → femenino plural.",
      pasos: []
    },
    {
      id: 24,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 8",
      pregunta: "«El nivel de las participaciones en el foro pareció __ a los organizadores.»",
      opciones: ["adecuadas", "adecuado", "adecuados"],
      correcta: 1,
      explicacion: "«adecuado» — el atributo concuerda con el núcleo del sujeto «el nivel» (masc. sing.), no con «participaciones».",
      pasos: []
    },

    // ── Regla 9: Participio en construcciones pasivas ────────────────────────
    {
      id: 25,
      tipo: "regla_rica",
      etiqueta: "Regla 9 / 10",
      titulo: "Participio en la voz pasiva",
      bloques: [
        {
          tipo: "texto",
          texto: "En la pasiva con «ser + participio», el participio funciona como adjetivo y concuerda en género y número con el sujeto paciente. Cuidado: en los tiempos compuestos con «haber» (he comido, han llegado) el participio es invariable y siempre termina en -o."
        },
        {
          tipo: "tabla",
          titulo: "Participio: variable en pasiva, invariable con «haber»",
          columnas: ["Construcción", "Participio", "Ejemplo"],
          filas: [
            { tiempo: "ser + part. (pasiva)", correcto: "concuerda", error: "Las leyes fueron aprobadas." },
            { tiempo: "estar + part.",         correcto: "concuerda", error: "Las puertas están cerradas." },
            { tiempo: "haber + part. (compuesto)", correcto: "invariable -o", error: "Las leyes han aprobado…" },
            { tiempo: "haber + part. (compuesto)", correcto: "invariable -o", error: "Ellas han llegado." }
          ]
        },
        {
          tipo: "par",
          etiqueta: "pasiva — el participio concuerda con el sujeto",
          correcto: "Las nuevas disposiciones fueron publicadas en el diario oficial.",
          incorrecto: "Las nuevas disposiciones fueron publicados en el diario oficial."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Con «haber» el participio NO concuerda: siempre -o",
          correcto: "Las autoridades han revisado todas las solicitudes pendientes.",
          incorrecto: "Las autoridades han revisadas todas las solicitudes pendientes."
        }
      ]
    },
    {
      id: 26,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 9",
      pregunta: "«Las observaciones del jurado fueron __ en la versión final del documento.»",
      opciones: ["incorporado", "incorporadas", "incorporados"],
      correcta: 1,
      explicacion: "«incorporadas» — pasiva con «ser»: el participio concuerda con el sujeto «las observaciones» (fem. pl.).",
      pasos: []
    },
    {
      id: 27,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 9",
      pregunta: "«Los evaluadores ya han __ las rúbricas correspondientes a cada bloque temático.»",
      opciones: ["revisadas", "revisado", "revisados"],
      correcta: 1,
      explicacion: "«revisado» — con «haber» el participio es invariable y termina en -o, aunque el complemento sea femenino plural.",
      pasos: []
    },

    // ── Regla 10: Aposición y construcciones tipo «ciudad capital» ────────────
    {
      id: 28,
      tipo: "regla_rica",
      etiqueta: "Regla 10 / 10",
      titulo: "Aposición y sustantivos en función adjetiva",
      bloques: [
        {
          tipo: "texto",
          texto: "Cuando un sustantivo modifica a otro (aposición especificativa: ciudad capital, hombres rana, casos límite), el segundo puede quedar invariable o pluralizarse según el uso. Lo seguro: el adjetivo verdadero del grupo concuerda siempre con el núcleo."
        },
        {
          tipo: "tabla",
          titulo: "Sustantivo modificador — comportamiento",
          columnas: ["Construcción", "Plural recomendado", "Observación"],
          filas: [
            { tiempo: "hora pico",      correcto: "horas pico",      error: "modificador invariable" },
            { tiempo: "ciudad capital", correcto: "ciudades capitales", error: "ambos pluralizan" },
            { tiempo: "hombre rana",    correcto: "hombres rana",    error: "modificador invariable" },
            { tiempo: "caso límite",    correcto: "casos límite",    error: "modificador invariable" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el adjetivo real concuerda con el núcleo",
          correcto: "Las ciudades fronterizas registraron un crecimiento demográfico acelerado.",
          incorrecto: "Las ciudades fronterizo registraron un crecimiento demográfico acelerado."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "El núcleo manda: identifícalo antes de concordar el adjetivo",
          correcto: "Los proyectos piloto implementados resultaron muy prometedores.",
          incorrecto: "Los proyectos piloto implementado resultaron muy prometedores."
        }
      ]
    },
    {
      id: 29,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 10",
      pregunta: "«Los programas piloto __ en tres escuelas mostraron resultados alentadores.»",
      opciones: ["aplicado", "aplicados", "aplicadas"],
      correcta: 1,
      explicacion: "«aplicados» — el núcleo es «los programas» (masc. pl.); «piloto» es modificador invariable y el adjetivo concuerda con el núcleo.",
      pasos: []
    },
    {
      id: 30,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 10",
      pregunta: "«Durante las horas pico, las estaciones más __ requieren refuerzo de personal.»",
      opciones: ["transitado", "transitadas", "transitados"],
      correcta: 1,
      explicacion: "«transitadas» — el adjetivo concuerda con «las estaciones» (fem. pl.); «pico» permanece invariable.",
      pasos: []
    },

    // ── Resumen ──────────────────────────────────────────────────────────────
    {
      id: 31,
      tipo: "resumen",
      etiqueta: "Síntesis",
      titulo: "Concordancia nominal — 10 reglas esenciales",
      puntos: [
        { titulo: "1. Base", texto: "El adjetivo copia género y número del sustantivo que modifica." },
        { titulo: "2. Determinantes", texto: "Artículo, demostrativo, posesivo e indefinido también concuerdan; cuidado con géneros no evidentes (el problema, la mano)." },
        { titulo: "3-4. Posición", texto: "Adjetivo pospuesto a varios sustantivos → plural (masc. si hay mezcla). Antepuesto → concuerda con el más cercano." },
        { titulo: "5. el agua", texto: "Femeninos con a-/ha- tónica llevan «el/un», pero el adjetivo va en femenino." },
        { titulo: "6. Común/epiceno", texto: "En común manda el determinante; en epiceno, el género fijo de la palabra." },
        { titulo: "7. Numerales", texto: "un/una, veintiún/veintiuna, doscientos/doscientas concuerdan en género." },
        { titulo: "8. Atributo", texto: "Con ser/estar/parecer, el adjetivo concuerda con el sujeto, no con el nombre vecino." },
        { titulo: "9. Participio", texto: "Variable en pasiva (ser + part.); invariable con haber (siempre -o)." }
      ]
    }
  ]
};
