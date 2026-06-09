// Datos de la presentación: Signos de Puntuación
// Introducción + 12 reglas para el EXANI-I — Ortografía
// Cada subtema incluye un bloque de teoría (regla_rica) y de 6 a 8 reactivos.

export const PRESENTACION = {
  id: "signos-puntuacion",
  titulo: "Signos de Puntuación",
  materia: "Español",
  slides: [
    // ── Portada ──────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Signos de Puntuación",
      subtitulo: "Las 12 reglas esenciales para el EXANI-I",
      etiqueta: "Español · Ortografía"
    },

    // ── Introducción: panorama general ───────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Introducción · Sistema de puntuación",
      titulo: "El sistema de puntuación del español",
      bloques: [
        {
          tipo: "texto",
          texto: "Los signos de puntuación organizan el discurso escrito: marcan pausas, delimitan unidades sintácticas, indican el tipo de enunciado y guían la entonación del lector. En el EXANI-I se evalúa tanto el uso correcto como la identificación del uso incorrecto dentro de un texto. Conocer cuándo se usa cada signo —y cuándo NO— es igual de importante."
        },
        {
          tipo: "tabla",
          titulo: "Signos del español y su función principal",
          columnas: ["Signo", "Nombre", "Función principal"],
          filas: [
            { tiempo: ".",     correcto: "Punto",               error: "Cierra enunciado o abreviatura" },
            { tiempo: ",",     correcto: "Coma",                error: "Pausa breve; separa elementos en serie" },
            { tiempo: ";",     correcto: "Punto y coma",        error: "Pausa media; separa proposiciones relacionadas" },
            { tiempo: ":",     correcto: "Dos puntos",          error: "Anuncia enumeración, cita o consecuencia" },
            { tiempo: "…",    correcto: "Puntos suspensivos",   error: "Pausa con suspenso o enumeración incompleta" },
            { tiempo: "¿?",    correcto: "Interrogación",       error: "Pregunta directa; el signo de apertura es obligatorio" },
            { tiempo: "¡!",    correcto: "Exclamación",         error: "Énfasis o mandato; el signo de apertura es obligatorio" },
            { tiempo: "« »",   correcto: "Comillas",            error: "Citas textuales, ironía, uso metalingüístico" },
            { tiempo: "( )",   correcto: "Paréntesis",          error: "Incisos secundarios, aclaraciones, datos" },
            { tiempo: "[ ]",   correcto: "Corchetes",           error: "Incisos dentro de paréntesis; omisiones en citas" },
            { tiempo: "-",     correcto: "Guion",               error: "Une compuestos; divide palabras al final de línea" },
            { tiempo: "—",     correcto: "Raya",                error: "Diálogo; incisos extensos; aclaraciones" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "signos dobles del español — el de apertura es OBLIGATORIO",
          correcto: "¿Cuándo se publicarán los resultados? ¡Los esperamos con ansias!",
          incorrecto: "Cuándo se publicarán los resultados? Los esperamos con ansias!"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "El español exige signo de apertura en ¿? y ¡! — no es opcional como en otros idiomas",
          correcto: "¿Llegaste a tiempo a la presentación?",
          incorrecto: "Llegaste a tiempo a la presentación?"
        }
      ]
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Introducción",
      pregunta: "¿Cuál de las siguientes oraciones usa correctamente los signos de puntuación del español?",
      opciones: [
        "Llegaste temprano al examen?",
        "¿Llegaste temprano al examen?",
        "¿Llegaste temprano al examen"
      ],
      correcta: 1,
      explicacion: "«¿Llegaste temprano al examen?» — el español exige tanto el signo de apertura (¿) como el de cierre (?). Omitir el signo de apertura es una falta ortográfica.",
      pasos: []
    },
    {
      id: 3,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Introducción",
      pregunta: "¿Qué signo separa los elementos de una serie dentro de una oración?",
      opciones: ["El punto y coma", "La coma", "Los dos puntos"],
      correcta: 1,
      explicacion: "La coma separa los elementos de una enumeración. El punto y coma separa proposiciones relacionadas; los dos puntos anuncian lo que sigue (enumeración, cita, consecuencia).",
      pasos: []
    },
    {
      id: 4,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Introducción",
      pregunta: "¿Qué signo introduce cada intervención en un diálogo literario?",
      opciones: ["El guion corto (-)", "Las comillas (« »)", "La raya (—)"],
      correcta: 2,
      explicacion: "La raya (—) introduce cada parlamento en un diálogo. Las comillas se usan para citas textuales y otros usos (metalingüístico, ironía). El guion corto une compuestos léxicos.",
      pasos: []
    },
    {
      id: 5,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Introducción",
      pregunta: "¿Qué signo anuncia una enumeración, una cita textual o una consecuencia de lo dicho?",
      opciones: ["Los dos puntos (:)", "El punto y coma (;)", "Los puntos suspensivos (…)"],
      correcta: 0,
      explicacion: "Los dos puntos (:) detienen el enunciado para anunciar lo que sigue: una lista, una cita o la causa/consecuencia de lo expresado. El punto y coma marca pausa media; los puntos suspensivos indican suspenso o enumeración incompleta.",
      pasos: []
    },
    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Introducción",
      pregunta: "¿Cuál es la función principal del paréntesis ( )?",
      opciones: [
        "Cerrar un enunciado interrogativo",
        "Encerrar una aclaración o dato accesorio que podría suprimirse",
        "Separar proposiciones independientes con pausa media"
      ],
      correcta: 1,
      explicacion: "El paréntesis encierra información accesoria —aclaraciones, datos, incisos— que podría suprimirse sin afectar la idea principal. Cerrar enunciados es función del punto o de los signos dobles; la pausa media corresponde al punto y coma.",
      pasos: []
    },
    {
      id: 7,
      tipo: "ejercicio",
      etiqueta: "Reactivo 6 — Introducción",
      pregunta: "¿Cómo se llama el signo « » y para qué se emplea principalmente?",
      opciones: [
        "Corchetes; para incisos dentro de un paréntesis",
        "Comillas; para citas textuales, ironía o uso metalingüístico",
        "Raya; para introducir diálogos"
      ],
      correcta: 1,
      explicacion: "« » son las comillas (angulares o latinas), preferidas en español. Se usan para citas textuales, ironía, uso metalingüístico y títulos de obras cortas. Los corchetes son [ ] y la raya es —.",
      pasos: []
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 7 — Introducción",
      pregunta: "En la oración «Estudió matemáticas, física, química y biología», la coma cumple la función de…",
      opciones: [
        "anunciar una cita textual",
        "separar los elementos de una enumeración",
        "marcar el cierre del enunciado"
      ],
      correcta: 1,
      explicacion: "La coma separa los elementos de la serie (matemáticas, física, química), sin coma antes de la «y» final. Anunciar citas es función de los dos puntos; cerrar el enunciado, del punto.",
      pasos: []
    },

    // ── Regla 1: El punto ─────────────────────────────────────────────────────
    {
      id: 9,
      tipo: "regla_rica",
      etiqueta: "Regla 1 / 12",
      titulo: "El punto — y seguido, y aparte, final",
      bloques: [
        {
          tipo: "texto",
          texto: "El punto cierra un enunciado completo. Punto y seguido: la oración termina y se continúa en el mismo párrafo (siguiente mayúscula). Punto y aparte: el párrafo termina y se abre uno nuevo. Punto final: cierra el texto completo. Punto de abreviatura: cierra la forma abreviada de una palabra. Regla invariable: tras el punto siempre se escribe con mayúscula."
        },
        {
          tipo: "tabla",
          titulo: "Tipos de punto y sus usos",
          columnas: ["Tipo", "Uso", "Ejemplo"],
          filas: [
            { tiempo: "Punto y seguido",    correcto: "Continúa en el mismo párrafo",   error: "Llegó tarde. El examen ya había comenzado." },
            { tiempo: "Punto y aparte",     correcto: "Cambia de párrafo",              error: "Aprobó el bloque.↵↵El segundo fue más difícil." },
            { tiempo: "Punto final",        correcto: "Cierra el texto completo",       error: "…sin mayor novedad." },
            { tiempo: "Punto abreviatura",  correcto: "Cierra la abreviatura",          error: "Dr. · Sra. · pág. · aprox." },
            { tiempo: "Sin punto",          correcto: "Títulos, subtítulos, pies",      error: "Análisis de resultados (sin punto al final)" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "mayúscula siempre después del punto",
          correcto: "El proyecto fue aprobado. Los coordinadores informarán los detalles.",
          incorrecto: "El proyecto fue aprobado. los coordinadores informarán los detalles."
        },
        {
          tipo: "par",
          etiqueta: "el punto final del texto va después de las comillas o paréntesis de cierre",
          correcto: "El rector anunció el resultado del proceso (publicado en el boletín oficial).",
          incorrecto: "El rector anunció el resultado del proceso (publicado en el boletín oficial.)"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Los títulos y subtítulos NO llevan punto final",
          correcto: "Análisis de los resultados del examen de admisión",
          incorrecto: "Análisis de los resultados del examen de admisión."
        }
      ]
    },
    {
      id: 10,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 1",
      pregunta: "«Terminó la presentación__ Los asistentes aplaudieron durante varios minutos.» ¿Qué signo corresponde en el espacio?",
      opciones: [",", ";", "."],
      correcta: 2,
      explicacion: "Punto y seguido (.) — el primer enunciado cierra con «presentación» y el siguiente comienza con mayúscula en el mismo párrafo. La coma sería insuficiente para separar dos enunciados independientes.",
      pasos: []
    },
    {
      id: 11,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 1",
      pregunta: "¿Cuál de estas opciones representa el uso correcto del punto en un título?",
      opciones: [
        "Los signos de puntuación del español.",
        "Los signos de puntuación del español",
        "los signos de puntuación del español"
      ],
      correcta: 1,
      explicacion: "«Los signos de puntuación del español» (sin punto) — los títulos y subtítulos no llevan punto final. Tampoco van con minúscula inicial si son el encabezado de una sección.",
      pasos: []
    },
    {
      id: 12,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 1",
      pregunta: "«El informe fue entregado a tiempo. __ comité lo revisará esta semana.» ¿Qué corresponde en el espacio para que la mayúscula sea correcta?",
      opciones: ["el", "El", "EL"],
      correcta: 1,
      explicacion: "«El» — después de punto siempre se escribe con mayúscula inicial. «el» en minúscula después de punto es una falta ortográfica.",
      pasos: []
    },
    {
      id: 13,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Regla 1",
      pregunta: "¿Cuál de las siguientes abreviaturas usa CORRECTAMENTE el punto?",
      opciones: ["Dr Pérez atenderá hoy", "Dr. Pérez atenderá hoy", "Dr· Pérez atenderá hoy"],
      correcta: 1,
      explicacion: "«Dr.» — la abreviatura se cierra con punto. «Dr» sin punto es incorrecto y el signo «·» no es el punto de abreviatura. Otras abreviaturas con punto: Sra., pág., aprox.",
      pasos: []
    },
    {
      id: 14,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Regla 1",
      pregunta: "Cuando un párrafo termina y comienza otro con un tema o idea distinta, el signo que los separa se llama…",
      opciones: ["punto y seguido", "punto y aparte", "punto final"],
      correcta: 1,
      explicacion: "Punto y aparte — separa párrafos: la idea concluye y se abre uno nuevo. El punto y seguido continúa en el mismo párrafo; el punto final cierra todo el texto.",
      pasos: []
    },
    {
      id: 15,
      tipo: "ejercicio",
      etiqueta: "Reactivo 6 — Regla 1",
      pregunta: "«El acto se realizó en el auditorio (según el programa oficial)__» ¿Dónde se coloca el punto final del enunciado?",
      opciones: [
        "Dentro del paréntesis: «…oficial.)»",
        "Fuera del paréntesis: «…oficial).»",
        "No lleva punto porque el paréntesis ya cierra"
      ],
      correcta: 1,
      explicacion: "El punto final va FUERA del paréntesis de cierre cuando este se incluye dentro de un enunciado mayor: «…(según el programa oficial).». Lo mismo ocurre con las comillas de cierre.",
      pasos: []
    },
    {
      id: 16,
      tipo: "ejercicio",
      etiqueta: "Reactivo 7 — Regla 1",
      pregunta: "¿Cuál de las siguientes opciones está CORRECTAMENTE puntuada?",
      opciones: [
        "Aprobó el examen. después celebró con su familia.",
        "Aprobó el examen. Después celebró con su familia.",
        "Aprobó el examen, Después celebró con su familia."
      ],
      correcta: 1,
      explicacion: "«Aprobó el examen. Después celebró con su familia.» — son dos enunciados independientes separados por punto y seguido, y tras el punto se escribe con mayúscula. La coma no basta para separar dos oraciones completas.",
      pasos: []
    },

    // ── Regla 2: La coma — usos principales ──────────────────────────────────
    {
      id: 17,
      tipo: "regla_rica",
      etiqueta: "Regla 2 / 12",
      titulo: "La coma — seis usos principales",
      bloques: [
        {
          tipo: "texto",
          texto: "La coma señala una pausa breve dentro del enunciado. Sus seis usos principales obligatorios son: (1) enumeración de elementos en serie, (2) vocativo, (3) inciso explicativo, (4) conectores y ordenadores del discurso, (5) elipsis verbal y (6) dislocación del orden natural (complemento antepuesto). Conocer cada caso es indispensable para el EXANI-I."
        },
        {
          tipo: "tabla",
          titulo: "Usos obligatorios de la coma",
          columnas: ["Uso", "Regla", "Ejemplo correcto"],
          filas: [
            { tiempo: "Enumeración",        correcto: "Entre los elementos; no antes de la «y» final", error: "Compró cuadernos, lápices, gomas y reglas." },
            { tiempo: "Vocativo",           correcto: "Siempre entre comas o coma + inicio/final",     error: "María, pasa al frente. / Pasa al frente, María." },
            { tiempo: "Inciso explicativo", correcto: "Entre comas; se puede suprimir sin cambiar sentido", error: "El rector, que llegó tarde, presidió la sesión." },
            { tiempo: "Conector",           correcto: "Sin embargo, no obstante, es decir, por lo tanto…", error: "Sin embargo, el informe fue aprobado." },
            { tiempo: "Elipsis verbal",     correcto: "Sustituye al verbo omitido",                    error: "Él estudió matemáticas; ella, química." },
            { tiempo: "Complemento antepuesto", correcto: "CC al inicio → coma antes del sujeto/verbo", error: "En cuanto al presupuesto, el comité decidirá." }
          ]
        },
        {
          tipo: "par",
          etiqueta: "vocativo al inicio — coma después del nombre",
          correcto: "Carlos, entrega el formulario antes del mediodía del viernes.",
          incorrecto: "Carlos entrega el formulario antes del mediodía del viernes."
        },
        {
          tipo: "par",
          etiqueta: "inciso explicativo — entre comas, no restringe",
          correcto: "El informe final, que fue revisado por tres expertos, resultó aprobado.",
          incorrecto: "El informe final que fue revisado por tres expertos resultó aprobado. (convierte el inciso en restrictivo)"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "NUNCA se pone coma entre sujeto y verbo — es el error más grave evaluado",
          correcto: "El director del plantel aprobó el reglamento en la sesión.",
          incorrecto: "El director del plantel, aprobó el reglamento en la sesión."
        }
      ]
    },
    {
      id: 18,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 2",
      pregunta: "«__ cuéntame qué ocurrió en la reunión de ayer con el comité evaluador.» ¿Qué corresponde al inicio para que el vocativo esté bien puntuado?",
      opciones: ["Ana cuéntame", "Ana, cuéntame", "Ana: cuéntame"],
      correcta: 1,
      explicacion: "«Ana, cuéntame» — el vocativo «Ana» se separa del resto con coma. Sin ella, «Ana» parecería el sujeto de «contar», lo que cambiaría el sentido de la oración.",
      pasos: []
    },
    {
      id: 19,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 2",
      pregunta: "«El coordinador __ que llegó tarde __ abrió la sesión sin disculparse ante el grupo.» ¿Qué signos corresponden?",
      opciones: [
        "sin comas (cláusula restrictiva)",
        "solo una coma antes de «que»",
        ", que llegó tarde,"
      ],
      correcta: 2,
      explicacion: "«El coordinador, que llegó tarde, abrió la sesión…» — el inciso «que llegó tarde» es explicativo (ya sabemos de quién se habla) y va entre dos comas. Sin comas se convierte en restrictivo, lo que cambiaría el significado.",
      pasos: []
    },
    {
      id: 20,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 2",
      pregunta: "«__ el proyecto fue aprobado por unanimidad en la sesión plenaria.» ¿Qué conector con coma puede iniciar correctamente esta oración?",
      opciones: ["Sin embargo,", "Aunque", "Porque"],
      correcta: 0,
      explicacion: "«Sin embargo, el proyecto fue aprobado…» — los conectores adversativos y ordenadores del discurso (sin embargo, no obstante, por lo tanto, es decir…) van seguidos de coma cuando encabezan el enunciado.",
      pasos: []
    },
    {
      id: 21,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Regla 2",
      pregunta: "¿Cuál de las siguientes enumeraciones está CORRECTAMENTE puntuada?",
      opciones: [
        "Compró cuadernos, lápices, gomas, y reglas.",
        "Compró cuadernos, lápices, gomas y reglas.",
        "Compró cuadernos lápices gomas y reglas."
      ],
      correcta: 1,
      explicacion: "«Compró cuadernos, lápices, gomas y reglas.» — la coma separa los elementos de la serie, pero NO se escribe coma antes de la «y» que une el último elemento. Omitir todas las comas también es incorrecto.",
      pasos: []
    },
    {
      id: 22,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Regla 2",
      pregunta: "«En cuanto al presupuesto__ el comité tomará una decisión la próxima semana.» ¿Qué corresponde en el espacio?",
      opciones: ["nada (sin signo)", ",", ":"],
      correcta: 1,
      explicacion: "Coma — cuando un complemento circunstancial se antepone al sujeto y al verbo («En cuanto al presupuesto…»), se separa del resto de la oración con coma. Es el uso de la coma por dislocación del orden natural.",
      pasos: []
    },
    {
      id: 23,
      tipo: "ejercicio",
      etiqueta: "Reactivo 6 — Regla 2",
      pregunta: "«Él estudió matemáticas; ella__ química.» La coma del segundo segmento sustituye a…",
      opciones: [
        "un sustantivo omitido",
        "el verbo omitido «estudió» (elipsis verbal)",
        "una conjunción"
      ],
      correcta: 1,
      explicacion: "La coma marca la elipsis verbal: «ella, química» equivale a «ella estudió química». La coma ocupa el lugar del verbo sobrentendido para evitar repetirlo.",
      pasos: []
    },
    {
      id: 24,
      tipo: "ejercicio",
      etiqueta: "Reactivo 7 — Regla 2",
      pregunta: "¿En cuál de estas oraciones la coma marca correctamente un conector explicativo?",
      opciones: [
        "El plazo vence el viernes es decir en tres días.",
        "El plazo vence el viernes, es decir, en tres días.",
        "El plazo vence el viernes, es decir en tres días."
      ],
      correcta: 1,
      explicacion: "«El plazo vence el viernes, es decir, en tres días.» — el conector «es decir» se enmarca entre comas (una antes y otra después). Omitir cualquiera de las dos comas es incorrecto.",
      pasos: []
    },

    // ── Regla 3: La coma — prohibiciones ─────────────────────────────────────
    {
      id: 25,
      tipo: "regla_rica",
      etiqueta: "Regla 3 / 12",
      titulo: "La coma — prohibiciones y casos especiales",
      bloques: [
        {
          tipo: "texto",
          texto: "Saber cuándo NO va coma es tan importante como saber cuándo sí. Los errores más evaluados en el EXANI-I: (1) coma entre sujeto y verbo, (2) coma entre verbo y complemento directo, (3) coma antes de «que» completivo, (4) coma innecesaria antes de «y» en series simples, y (5) omitir la coma necesaria antes de «pero» con segunda cláusula verbal."
        },
        {
          tipo: "tabla",
          titulo: "Prohibiciones de la coma",
          columnas: ["Construcción prohibida", "Incorrecto", "Correcto"],
          filas: [
            { tiempo: "Sujeto + verbo",              correcto: "La propuesta fue aprobada.",               error: "La propuesta, fue aprobada." },
            { tiempo: "Verbo + complemento directo", correcto: "Entregó el informe a tiempo.",              error: "Entregó, el informe a tiempo." },
            { tiempo: "Antes de «que» completivo",   correcto: "Dijeron que el evento se canceló.",         error: "Dijeron, que el evento se canceló." },
            { tiempo: "Antes de «y» en serie simple",correcto: "Estudió, descansó y aprobó.",               error: "Estudió, descansó, y aprobó." },
            { tiempo: "«Pero» sin 2ª cláusula",      correcto: "Llegó tarde pero contento.",               error: "Llegó tarde, pero contento." }
          ]
        },
        {
          tipo: "par",
          etiqueta: "«pero» SÍ lleva coma cuando une dos cláusulas con verbo propio",
          correcto: "Estudió toda la semana, pero no logró aprobar el examen de admisión.",
          incorrecto: "Estudió toda la semana pero no logró aprobar el examen de admisión."
        },
        {
          tipo: "par",
          etiqueta: "«pero» SIN coma cuando no hay segunda cláusula verbal",
          correcto: "Llegó tarde pero contento a la ceremonia de graduación.",
          incorrecto: "Llegó tarde, pero contento a la ceremonia de graduación."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Regla definitiva: «pero/sino/aunque» llevan coma SOLO si la segunda parte tiene verbo explícito",
          correcto: "Trabajó mucho, pero no alcanzó la meta. (dos cláusulas → coma antes de «pero»)",
          incorrecto: "Trabajó mucho pero sin éxito. (sin segunda cláusula verbal → sin coma)"
        }
      ]
    },
    {
      id: 26,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 3",
      pregunta: "¿Cuál de las siguientes oraciones tiene un uso INCORRECTO de la coma?",
      opciones: [
        "El director, que llegó tarde, presidió la reunión.",
        "Los estudiantes, aprobaron el examen sin dificultad.",
        "Sin embargo, el proyecto fue aceptado por el comité."
      ],
      correcta: 1,
      explicacion: "«Los estudiantes, aprobaron el examen…» — la coma entre sujeto y verbo es un error grave. No hay inciso que justifique la pausa; la coma rompe incorrectamente la unidad sintáctica sujeto-verbo.",
      pasos: []
    },
    {
      id: 27,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 3",
      pregunta: "«El comité dijo__ que el proyecto había sido aprobado sin modificaciones.» ¿Qué corresponde en el espacio?",
      opciones: ["una coma (,)", "dos puntos (:)", "nada (sin signo)"],
      correcta: 2,
      explicacion: "Sin signo. Ante «que» completivo —que introduce lo dicho, pensado o afirmado— no se escribe coma ni ningún signo. «Dijo que…» es una construcción directa sin pausa.",
      pasos: []
    },
    {
      id: 28,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 3",
      pregunta: "«Llegó temprano__ pero el auditorio ya estaba completamente lleno de asistentes.» ¿Qué corresponde en el espacio?",
      opciones: ["nada (sin signo)", ",", ";"],
      correcta: 1,
      explicacion: "Coma — «pero» une dos cláusulas con verbo propio («llegó» / «estaba»). Cuando une dos proposiciones completas, la coma antes de «pero» es obligatoria.",
      pasos: []
    },
    {
      id: 29,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Regla 3",
      pregunta: "¿Cuál de las siguientes oraciones está puntuada CORRECTAMENTE?",
      opciones: [
        "Entregó, el informe completo a la dirección.",
        "Entregó el informe completo a la dirección.",
        "Entregó el informe completo, a la dirección."
      ],
      correcta: 1,
      explicacion: "«Entregó el informe completo a la dirección.» — no debe separarse el verbo de su complemento directo («el informe») con coma. Las opciones con coma rompen indebidamente la unidad verbo-complemento.",
      pasos: []
    },
    {
      id: 30,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Regla 3",
      pregunta: "«Estudió__ descansó__ y aprobó el examen.» ¿Qué signos corresponden para una serie simple?",
      opciones: [
        ", / , (coma en ambos)",
        ", / nada (coma solo en el primero)",
        "nada / , (coma solo antes de «y»)"
      ],
      correcta: 1,
      explicacion: "«Estudió, descansó y aprobó el examen.» — la coma separa los dos primeros elementos, pero NO se pone coma antes de la «y» que une el último elemento de una serie simple.",
      pasos: []
    },
    {
      id: 31,
      tipo: "ejercicio",
      etiqueta: "Reactivo 6 — Regla 3",
      pregunta: "¿En cuál de estas oraciones la coma es INCORRECTA?",
      opciones: [
        "La nueva convocatoria del examen, se publicó ayer.",
        "La nueva convocatoria del examen, según el boletín, ya se publicó.",
        "Ayer, sin previo aviso, se publicó la convocatoria."
      ],
      correcta: 0,
      explicacion: "«La nueva convocatoria del examen, se publicó ayer» es incorrecta: separa el sujeto («La nueva convocatoria del examen») del verbo («se publicó») con una coma injustificada. En las otras dos, las comas enmarcan incisos o complementos antepuestos.",
      pasos: []
    },
    {
      id: 32,
      tipo: "ejercicio",
      etiqueta: "Reactivo 7 — Regla 3",
      pregunta: "«Trabajó mucho__ pero sin éxito en sus resultados.» ¿Qué corresponde en el espacio?",
      opciones: ["nada (sin signo)", ",", ";"],
      correcta: 0,
      explicacion: "Sin signo — «pero sin éxito» no tiene un segundo verbo explícito (no hay segunda cláusula), por lo que «pero» NO lleva coma. Solo llevaría coma si uniera dos proposiciones con verbo propio.",
      pasos: []
    },

    // ── Regla 4: El punto y coma ──────────────────────────────────────────────
    {
      id: 33,
      tipo: "regla_rica",
      etiqueta: "Regla 4 / 12",
      titulo: "El punto y coma — pausa media",
      bloques: [
        {
          tipo: "texto",
          texto: "El punto y coma (;) marca una pausa mayor que la coma pero menor que el punto. Tres usos clave: (1) separar proposiciones estrechamente relacionadas sin conjunción, cuando la coma es insuficiente pero el punto separaría demasiado; (2) separar elementos de una serie cuyos componentes ya contienen comas internas; (3) preceder conectores adversativos (sin embargo, no obstante…) en oraciones extensas."
        },
        {
          tipo: "tabla",
          titulo: "Usos del punto y coma",
          columnas: ["Uso", "Ejemplo correcto", "Por qué no coma ni punto"],
          filas: [
            { tiempo: "Proposiciones relacionadas",  correcto: "El norte fue soleado; el sur, lluvioso.",              error: "La coma es insuficiente; el punto separa demasiado." },
            { tiempo: "Serie con comas internas",    correcto: "Ana, directora; Luis, secretario; Petra, tesorera.",   error: "La coma confundiría los grupos entre sí." },
            { tiempo: "Ante conector en oración extensa", correcto: "El proyecto avanzó bien; sin embargo, los costos se dispararon.", error: "La coma sola sería débil ante oraciones largas." },
            { tiempo: "Elipsis verbal",              correcto: "Él estudió biología; ella, química.",                  error: "La coma sola confunde con la elipsis interna." }
          ]
        },
        {
          tipo: "par",
          etiqueta: "proposiciones relacionadas — sin conjunción",
          correcto: "Llegaron los documentos; faltaba solo la firma del director.",
          incorrecto: "Llegaron los documentos, faltaba solo la firma del director."
        },
        {
          tipo: "par",
          etiqueta: "serie con elementos que ya llevan coma interna",
          correcto: "Participaron representantes de Jalisco, Guadalajara; Nuevo León, Monterrey; y Oaxaca, Oaxaca.",
          incorrecto: "Participaron representantes de Jalisco, Guadalajara, Nuevo León, Monterrey y Oaxaca, Oaxaca."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "«Sin embargo» con solo coma es posible en oraciones cortas; punto y coma en oraciones extensas",
          correcto: "El presupuesto se agotó en agosto; sin embargo, el proyecto logró terminarse.",
          incorrecto: "El presupuesto se agotó en agosto, sin embargo el proyecto logró terminarse."
        }
      ]
    },
    {
      id: 34,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 4",
      pregunta: "«El primer bloque fue sencillo__ el segundo resultó mucho más complejo de lo esperado.» ¿Qué signo conecta mejor las dos proposiciones relacionadas?",
      opciones: [". (punto y seguido)", ", (coma)", "; (punto y coma)"],
      correcta: 2,
      explicacion: "Punto y coma (;) — las dos proposiciones están estrechamente relacionadas (contrastan el nivel de dificultad); la coma sería insuficiente para dos proposiciones tan autónomas y el punto las separaría demasiado.",
      pasos: []
    },
    {
      id: 35,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 4",
      pregunta: "«Asistieron representantes de Jalisco, Guadalajara__ Nuevo León, Monterrey__ y la Ciudad de México.» ¿Qué signos corresponden?",
      opciones: [
        "comas en ambos espacios",
        "punto y coma en ambos espacios",
        "punto y coma en el primero, coma en el segundo"
      ],
      correcta: 1,
      explicacion: "Punto y coma en ambos espacios — los elementos de la serie ya contienen comas internas (ciudad, estado). El punto y coma separa los grupos: «Jalisco, Guadalajara; Nuevo León, Monterrey; y la Ciudad de México».",
      pasos: []
    },
    {
      id: 36,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 4",
      pregunta: "¿Cuál de las siguientes opciones usa CORRECTAMENTE el punto y coma?",
      opciones: [
        "El examen fue difícil; y todos aprobaron.",
        "El examen fue difícil; sin embargo, todos aprobaron.",
        "El examen fue difícil; porque todos estudiaron."
      ],
      correcta: 1,
      explicacion: "«El examen fue difícil; sin embargo, todos aprobaron.» — el punto y coma precede correctamente a un conector adversativo que introduce una proposición contrastante. Ante «y» y «porque» no se usa punto y coma.",
      pasos: []
    },
    {
      id: 37,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Regla 4",
      pregunta: "«El equipo de la mañana revisó las pruebas escritas__ el de la tarde, las orales.» ¿Qué signo corresponde para marcar la elipsis del verbo?",
      opciones: [", (coma)", "; (punto y coma)", ": (dos puntos)"],
      correcta: 1,
      explicacion: "Punto y coma — separa dos proposiciones relacionadas donde la segunda tiene elipsis verbal («el de la tarde [revisó], las orales»). El punto y coma evita la confusión con la coma interna de la elipsis.",
      pasos: []
    },
    {
      id: 38,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Regla 4",
      pregunta: "¿Cuál es la diferencia de fuerza de pausa entre la coma, el punto y coma y el punto?",
      opciones: [
        "Las tres marcan la misma pausa; cambia solo la posición.",
        "La coma marca pausa breve; el punto y coma, pausa media; el punto, pausa mayor.",
        "El punto marca la pausa más breve y la coma la mayor."
      ],
      correcta: 1,
      explicacion: "La jerarquía de pausas es: coma (breve) < punto y coma (media) < punto (mayor). El punto y coma ocupa el punto intermedio entre la coma y el punto.",
      pasos: []
    },
    {
      id: 39,
      tipo: "ejercicio",
      etiqueta: "Reactivo 6 — Regla 4",
      pregunta: "¿En cuál de estas opciones el punto y coma está MAL empleado?",
      opciones: [
        "Llegaron los documentos; faltaba solo la firma.",
        "Quiero un café; con leche.",
        "Unos optaron por quedarse; otros, por marcharse."
      ],
      correcta: 1,
      explicacion: "«Quiero un café; con leche» es incorrecto: «con leche» es solo un complemento, no una proposición independiente, así que el punto y coma separa demasiado. Bastaría una coma o ningún signo. Las otras dos unen proposiciones relacionadas o con elipsis verbal.",
      pasos: []
    },

    // ── Regla 5: Los dos puntos ───────────────────────────────────────────────
    {
      id: 40,
      tipo: "regla_rica",
      etiqueta: "Regla 5 / 12",
      titulo: "Los dos puntos — anuncio y relación",
      bloques: [
        {
          tipo: "texto",
          texto: "Los dos puntos (:) detienen el enunciado para anunciar o explicar lo que sigue. Cuatro usos principales: (1) enumeración precedida de anunciador, (2) cita textual, (3) relación causa-consecuencia o explicación entre dos proposiciones, y (4) encabezamiento de cartas y documentos. Regla clave: tras los dos puntos se escribe en minúscula, excepto en citas (mayúscula) y cartas (mayúscula en la siguiente línea)."
        },
        {
          tipo: "tabla",
          titulo: "Usos de los dos puntos",
          columnas: ["Uso", "Ejemplo correcto", "Observación"],
          filas: [
            { tiempo: "Anuncio de enumeración",     correcto: "Los documentos requeridos son: CURP, acta y comprobante.",  error: "El anunciador precede los dos puntos." },
            { tiempo: "Cita textual",               correcto: "La directora declaró: «El proyecto fue aprobado».",         error: "Mayúscula tras «:» en citas directas." },
            { tiempo: "Causa o explicación",        correcto: "Reprobó el examen: no había estudiado nada.",               error: "Los «:» sustituyen a «porque» o «dado que»." },
            { tiempo: "Encabezamiento",             correcto: "Estimado director: / A quien corresponda:",                 error: "Mayúscula en la línea siguiente del documento." },
            { tiempo: "Apósito enumerativo",        correcto: "Solo existe una salida: renunciar.",                        error: "El apósito aclara o resume lo dicho antes." }
          ]
        },
        {
          tipo: "par",
          etiqueta: "anunciador antes de los dos puntos — la lista no puede ser directa del verbo",
          correcto: "Los requisitos son los siguientes: acta de nacimiento, CURP y comprobante de domicilio.",
          incorrecto: "Los requisitos son: acta de nacimiento, CURP y comprobante de domicilio."
        },
        {
          tipo: "par",
          etiqueta: "cita textual — mayúscula tras los dos puntos",
          correcto: "El rector explicó: «El nuevo reglamento entrará en vigor a partir de enero».",
          incorrecto: "El rector explicó: «el nuevo reglamento entrará en vigor a partir de enero»."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "No se usan dos puntos si el verbo rige directamente la enumeración sin anunciador explícito",
          correcto: "Para el examen necesitarás lápiz, borrador y regla.",
          incorrecto: "Para el examen necesitarás: lápiz, borrador y regla."
        }
      ]
    },
    {
      id: 41,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 5",
      pregunta: "«Los documentos solicitados son los siguientes__ cédula, acta de nacimiento y comprobante de domicilio.» ¿Qué signo corresponde?",
      opciones: [",", ":", ";"],
      correcta: 1,
      explicacion: "Dos puntos (:) — «los documentos solicitados son los siguientes» es el anunciador de la enumeración. Los dos puntos introducen la lista que sigue.",
      pasos: []
    },
    {
      id: 42,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 5",
      pregunta: "«El comité rechazó la propuesta__ no cumplía con los criterios establecidos en la convocatoria.» ¿Qué signo corresponde?",
      opciones: [",", ".", ":"],
      correcta: 2,
      explicacion: "Dos puntos (:) — la segunda proposición es la explicación o causa de la primera. Los dos puntos sustituyen elegantemente a «porque» o «dado que», marcando la relación de forma precisa.",
      pasos: []
    },
    {
      id: 43,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 5",
      pregunta: "¿Cuál de las siguientes opciones usa INCORRECTAMENTE los dos puntos?",
      opciones: [
        "El presidente señaló: «La reunión se pospone hasta nuevo aviso».",
        "Para el registro necesitarás: llevar identificación oficial vigente.",
        "Solo existe una solución: revisar el contrato desde el principio."
      ],
      correcta: 1,
      explicacion: "«Para el registro necesitarás: llevar…» es incorrecto — el verbo «necesitarás» rige directamente el infinitivo «llevar» sin anunciador. Los dos puntos son superfluos. La forma correcta: «Para el registro necesitarás llevar identificación oficial vigente».",
      pasos: []
    },
    {
      id: 44,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Regla 5",
      pregunta: "En una cita textual introducida por dos puntos, la primera palabra de la cita se escribe…",
      opciones: ["siempre en minúscula", "con mayúscula inicial", "como esté en el original, sin regla fija"],
      correcta: 1,
      explicacion: "Con mayúscula inicial: «El rector declaró: «El proyecto fue aprobado».». Tras los dos puntos que anuncian una cita textual directa, esta comienza con mayúscula.",
      pasos: []
    },
    {
      id: 45,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Regla 5",
      pregunta: "¿Cuál es la forma CORRECTA de puntuar el encabezamiento de una carta formal?",
      opciones: ["Estimado director, ", "Estimado director:", "Estimado director."],
      correcta: 1,
      explicacion: "«Estimado director:» — en español, el saludo o encabezamiento de cartas y documentos se cierra con dos puntos, no con coma (uso del inglés) ni con punto. El texto continúa con mayúscula en la línea siguiente.",
      pasos: []
    },
    {
      id: 46,
      tipo: "ejercicio",
      etiqueta: "Reactivo 6 — Regla 5",
      pregunta: "«Solo existe una salida__ renunciar al cargo de inmediato.» ¿Qué signo introduce este apósito que resume lo dicho?",
      opciones: [", (coma)", ": (dos puntos)", "; (punto y coma)"],
      correcta: 1,
      explicacion: "Dos puntos (:) — introducen un apósito o aclaración que concreta o resume lo anunciado antes: «una salida: renunciar». Los dos puntos marcan que lo que sigue explica o especifica el elemento previo.",
      pasos: []
    },
    {
      id: 47,
      tipo: "ejercicio",
      etiqueta: "Reactivo 7 — Regla 5",
      pregunta: "Tras los dos puntos que anuncian una enumeración (no una cita), la palabra siguiente se escribe normalmente…",
      opciones: ["en mayúscula", "en minúscula", "siempre entre comillas"],
      correcta: 1,
      explicacion: "En minúscula: «Los requisitos son: acta, CURP y comprobante.». Solo se usa mayúscula tras los dos puntos en citas textuales y en el encabezamiento de cartas; en las enumeraciones se continúa en minúscula.",
      pasos: []
    },

    // ── Regla 6: Los puntos suspensivos ──────────────────────────────────────
    {
      id: 48,
      tipo: "regla_rica",
      etiqueta: "Regla 6 / 12",
      titulo: "Los puntos suspensivos — pausa, suspenso e incompletitud",
      bloques: [
        {
          tipo: "texto",
          texto: "Los puntos suspensivos (…) son siempre tres y se escriben pegados a la palabra anterior sin espacio. Cuatro usos: (1) enumeración incompleta (equivalen a «etcétera», no deben usarse juntos), (2) pausa expresiva con suspenso o duda, (3) interrupción voluntaria del discurso, y (4) omisión en una cita textual (entre corchetes: […]). Los «…» cierran el enunciado: no se añade punto adicional."
        },
        {
          tipo: "tabla",
          titulo: "Usos de los puntos suspensivos",
          columnas: ["Uso", "Ejemplo correcto", "Nota"],
          filas: [
            { tiempo: "Enumeración incompleta", correcto: "Vendían frutas, verduras, especias…",                 error: "No usar «etc.» junto a «…»; son equivalentes." },
            { tiempo: "Suspenso o duda",        correcto: "Entró al salón… y se quedó paralizado.",              error: "Pegados a la última letra, sin espacio." },
            { tiempo: "Interrupción",           correcto: "—Quería decirte que… no importa, olvídalo.",          error: "La raya introduce el diálogo." },
            { tiempo: "Omisión en cita",        correcto: "«El rector […] aprobó el proyecto».",                 error: "Dentro de cita: «[…]» con corchetes, no solos." },
            { tiempo: "Cierre de enunciado",    correcto: "No quedaba nada por hacer…",                          error: "No se añade punto: «…» ya cierra el enunciado." }
          ]
        },
        {
          tipo: "par",
          etiqueta: "no usar «etc.» y «…» juntos — son equivalentes",
          correcto: "Estudió álgebra, geometría, trigonometría… hasta dominar todo el temario.",
          incorrecto: "Estudió álgebra, geometría, trigonometría, etc.…"
        },
        {
          tipo: "par",
          etiqueta: "los puntos suspensivos son SIEMPRE tres — ni más ni menos",
          correcto: "El resultado fue… inesperado para todos los presentes.",
          incorrecto: "El resultado fue.... inesperado. / El resultado fue.. inesperado."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Los «…» ya cierran el enunciado — NO se añade punto final después",
          correcto: "Nada quedó por decir…",
          incorrecto: "Nada quedó por decir…."
        }
      ]
    },
    {
      id: 49,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 6",
      pregunta: "«El examen incluía temas de gramática, ortografía, comprensión lectora__» ¿Qué signo completa la enumeración incompleta?",
      opciones: [", etcétera.", "…", ", entre otros muchos."],
      correcta: 1,
      explicacion: "«…» — los puntos suspensivos indican enumeración incompleta. No deben usarse junto a «etcétera» porque son equivalentes; combinarlos es redundante.",
      pasos: []
    },
    {
      id: 50,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 6",
      pregunta: "¿Cuál de las siguientes opciones usa CORRECTAMENTE los puntos suspensivos?",
      opciones: [
        "El mensajero llegó tarde ... y sin los documentos.",
        "El mensajero llegó tarde… y sin los documentos.",
        "El mensajero llegó tarde, etc.… y sin los documentos."
      ],
      correcta: 1,
      explicacion: "«El mensajero llegó tarde… y sin los documentos.» — los «…» van pegados a «tarde» sin espacio previo, crean pausa expresiva y la oración continúa. Espacios antes son incorrectos; «etc.…» es redundante.",
      pasos: []
    },
    {
      id: 51,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 6",
      pregunta: "¿Qué corresponde al final de la oración «No quedaba nada por hacer»?",
      opciones: ["… (puntos suspensivos, sin punto extra)", "…. (puntos suspensivos + punto)", "... (tres puntos con espacios)"],
      correcta: 0,
      explicacion: "«…» sin punto adicional — los puntos suspensivos ya cierran el enunciado cuando van al final. No se añade un cuarto punto. Además, los «…» se escriben sin espacios entre ellos ni antes de ellos.",
      pasos: []
    },
    {
      id: 52,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Regla 6",
      pregunta: "¿Cuántos puntos componen siempre los puntos suspensivos?",
      opciones: ["Dos", "Tres", "Los que el autor considere necesarios"],
      correcta: 1,
      explicacion: "Siempre tres, ni más ni menos. Escribir dos («..») o cuatro («....») es incorrecto. Los puntos suspensivos son un signo fijo de exactamente tres puntos.",
      pasos: []
    },
    {
      id: 53,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Regla 6",
      pregunta: "Dentro de una cita textual, ¿cómo se indica que se ha omitido un fragmento del original?",
      opciones: [
        "Con puntos suspensivos solos: …",
        "Con puntos suspensivos entre corchetes: […]",
        "Con una raya: —"
      ],
      correcta: 1,
      explicacion: "«[…]» — la omisión editorial en una cita textual se marca con puntos suspensivos entre corchetes: «El rector […] aprobó el proyecto». Los puntos solos no distinguirían si la pausa es del autor original o una supresión del editor.",
      pasos: []
    },
    {
      id: 54,
      tipo: "ejercicio",
      etiqueta: "Reactivo 6 — Regla 6",
      pregunta: "«—Quería decirte que__ mejor lo dejamos así.» ¿Qué uso de los puntos suspensivos aparece aquí?",
      opciones: [
        "Enumeración incompleta",
        "Interrupción o duda del hablante",
        "Omisión en una cita textual"
      ],
      correcta: 1,
      explicacion: "Interrupción o duda — los puntos suspensivos reflejan que el hablante se interrumpe o titubea antes de continuar: «Quería decirte que… mejor lo dejamos así». No hay enumeración ni se trata de una cita.",
      pasos: []
    },

    // ── Regla 7: Interrogación y exclamación ─────────────────────────────────
    {
      id: 55,
      tipo: "regla_rica",
      etiqueta: "Regla 7 / 12",
      titulo: "Interrogación y exclamación — signos dobles obligatorios",
      bloques: [
        {
          tipo: "texto",
          texto: "El español es la única lengua que exige tanto el signo de apertura (¿ / ¡) como el de cierre (? / !). Los signos de apertura indican desde dónde comienza el tono interrogativo o exclamativo. Reglas clave: (1) nunca se pone punto después de «?» o «!» porque ya cierran el enunciado, (2) tras «?» o «!» la siguiente oración puede ir en mayúscula o minúscula según el contexto, (3) si la pregunta va en medio de un enunciado más largo, se abre «¿» en el punto exacto donde inicia la interrogación."
        },
        {
          tipo: "tabla",
          titulo: "Reglas de uso de ¿? y ¡!",
          columnas: ["Situación", "Correcto", "Error frecuente"],
          filas: [
            { tiempo: "Apertura obligatoria",          correcto: "¿Cuándo llega el director?",                     error: "Cuándo llega el director?" },
            { tiempo: "Sin punto después",             correcto: "¿Llegaste? Dime todo.",                          error: "¿Llegaste?. Dime todo." },
            { tiempo: "Interrogativa parcial",         correcto: "Ya aprobé, ¿y tú?",                             error: "¿Ya aprobé, y tú?" },
            { tiempo: "Preguntas independientes",      correcto: "¿Quién llegó? ¿Cuándo? ¿Por qué?",              error: "¿Quién llegó, cuándo y por qué?" },
            { tiempo: "Exclamación sin punto",         correcto: "¡Qué examen tan difícil! Nadie lo esperaba.",   error: "¡Qué examen tan difícil!. Nadie lo esperaba." }
          ]
        },
        {
          tipo: "par",
          etiqueta: "punto NUNCA después de signo de cierre",
          correcto: "¿Lograste terminar el examen a tiempo?",
          incorrecto: "¿Lograste terminar el examen a tiempo?."
        },
        {
          tipo: "par",
          etiqueta: "interrogativa parcial — apertura donde inicia la pregunta",
          correcto: "El examen ya comenzó, ¿puedes entrar aún?",
          incorrecto: "¿El examen ya comenzó, puedes entrar aún?"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "¿? y ¡! no son intercambiables; cada enunciado lleva su propio par de signos",
          correcto: "¿Cómo te fue? ¡Espero que bien!",
          incorrecto: "¿Cómo te fue! ¡Espero que bien?"
        }
      ]
    },
    {
      id: 56,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 7",
      pregunta: "¿Cuál de las siguientes opciones está CORRECTAMENTE puntuada?",
      opciones: [
        "¡Qué buena noticia!. Todos pasamos el examen.",
        "¡Qué buena noticia! Todos pasamos el examen.",
        "¡Qué buena noticia!, todos pasamos el examen."
      ],
      correcta: 1,
      explicacion: "«¡Qué buena noticia! Todos pasamos el examen.» — el signo de exclamación ya cierra el enunciado; no se añade punto. El enunciado siguiente comienza con mayúscula.",
      pasos: []
    },
    {
      id: 57,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 7",
      pregunta: "«Ya entregaste el informe, __ y cuándo te dieron la calificación __» ¿Qué signos hacen falta?",
      opciones: ["¿ al inicio y ? al final", "; al inicio y . al final", "nada — con la coma es suficiente"],
      correcta: 0,
      explicacion: "«¿» al inicio de la parte interrogativa y «?» al final — «Ya entregaste el informe, ¿y cuándo te dieron la calificación?». La primera parte es afirmativa; la segunda es una interrogativa parcial que requiere sus propios signos.",
      pasos: []
    },
    {
      id: 58,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 7",
      pregunta: "«¿Quién fue el autor del informe, cuándo se entregó y qué secciones incluía?» — ¿Por qué esta oración es cuestionable?",
      opciones: [
        "Usar un solo ¿? para tres preguntas independientes agrupa lo que debería separarse.",
        "Falta punto al final después del signo de cierre.",
        "La coma antes de «cuándo» es incorrecta en una pregunta."
      ],
      correcta: 0,
      explicacion: "Cuando son preguntas independientes, cada una debe llevar sus propios signos: «¿Quién fue el autor? ¿Cuándo se entregó? ¿Qué secciones incluía?». Agrupar preguntas distintas bajo un solo «¿?» puede causar ambigüedad.",
      pasos: []
    },
    {
      id: 59,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Regla 7",
      pregunta: "¿Cuál de las siguientes oraciones omite el signo de apertura obligatorio en español?",
      opciones: [
        "¿Te inscribiste ya al examen?",
        "Te inscribiste ya al examen?",
        "¡Por fin se publicaron los resultados!"
      ],
      correcta: 1,
      explicacion: "«Te inscribiste ya al examen?» omite el signo de apertura «¿», obligatorio en español. La forma correcta es «¿Te inscribiste ya al examen?». A diferencia del inglés, el español exige siempre el signo de apertura.",
      pasos: []
    },
    {
      id: 60,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Regla 7",
      pregunta: "¿Cuál es la forma CORRECTA de combinar una afirmación con una exclamación parcial al final?",
      opciones: [
        "¡Aprobaste el examen, qué alegría!",
        "Aprobaste el examen, ¡qué alegría!",
        "Aprobaste el examen ¡qué alegría"
      ],
      correcta: 1,
      explicacion: "«Aprobaste el examen, ¡qué alegría!» — la primera parte es afirmativa y la exclamación parcial («¡qué alegría!») abre su signo justo donde inicia el tono exclamativo. Abrir «¡» desde el principio incluiría indebidamente la parte afirmativa.",
      pasos: []
    },
    {
      id: 61,
      tipo: "ejercicio",
      etiqueta: "Reactivo 6 — Regla 7",
      pregunta: "¿Cuál de estas oraciones usa de forma INCORRECTA y descuadrada los signos dobles?",
      opciones: [
        "¿Cómo te fue en la entrevista?",
        "¿Cómo te fue en la entrevista! ¡Espero que bien?",
        "¡Espero que te haya ido bien!"
      ],
      correcta: 1,
      explicacion: "«¿Cómo te fue en la entrevista! ¡Espero que bien?» mezcla los signos: abre con «¿» y cierra con «!», y al revés. Cada enunciado debe abrir y cerrar con el mismo par: interrogación con «¿…?» y exclamación con «¡…!».",
      pasos: []
    },

    // ── Regla 8: Las comillas ─────────────────────────────────────────────────
    {
      id: 62,
      tipo: "regla_rica",
      etiqueta: "Regla 8 / 12",
      titulo: "Las comillas — cita, énfasis y uso metalingüístico",
      bloques: [
        {
          tipo: "texto",
          texto: "El español prefiere las comillas angulares o latinas (« »). También se usan las inglesas (\" \") y las simples (' '). Jerarquía para citas anidadas: «angulares» > \"inglesas\" > 'simples'. Cinco usos: (1) cita textual directa, (2) título de obras cortas (artículos, poemas, canciones), (3) uso metalingüístico (hablar de la palabra misma), (4) ironía o distancia, y (5) apodos y sobrenombres."
        },
        {
          tipo: "tabla",
          titulo: "Usos de las comillas",
          columnas: ["Uso", "Ejemplo correcto", "Nota"],
          filas: [
            { tiempo: "Cita textual",              correcto: "El rector dijo: «La sesión se pospone».",       error: "Punto fuera de las comillas (norma hispánica)." },
            { tiempo: "Título de obra corta",       correcto: "Leyó el poema «La canción del pirata».",       error: "Obras largas van en cursiva, no en comillas." },
            { tiempo: "Uso metalingüístico",        correcto: "La palabra «efímero» significa breve.",         error: "También válido con cursiva en textos formales." },
            { tiempo: "Ironía o distancia",         correcto: "Su «generosa» propuesta no convenció a nadie.", error: "Las comillas señalan que el sentido es irónico." },
            { tiempo: "Apodo o sobrenombre",        correcto: "Francisco «El Estudiante» García ganó el primer lugar.", error: "El apodo va entre comillas la primera vez." }
          ]
        },
        {
          tipo: "par",
          etiqueta: "signo de puntuación FUERA de las comillas (norma hispánica)",
          correcto: "La directora aclaró: «Los resultados se publicarán el viernes».",
          incorrecto: "La directora aclaró: «Los resultados se publicarán el viernes.»"
        },
        {
          tipo: "par",
          etiqueta: "cita dentro de cita — jerarquía de comillas",
          correcto: 'El informe señala: «El documento dice "aprobado por unanimidad" en la última sección».',
          incorrecto: "El informe señala: «El documento dice «aprobado por unanimidad» en la última sección»."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Los títulos de libros, películas y obras largas van en cursiva, NO entre comillas",
          correcto: "Leyó Cien años de soledad durante las vacaciones.",
          incorrecto: "Leyó «Cien años de soledad» durante las vacaciones."
        }
      ]
    },
    {
      id: 63,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 8",
      pregunta: "¿Cuál de las siguientes opciones usa CORRECTAMENTE las comillas en una cita textual?",
      opciones: [
        "El informe concluye: «los resultados son satisfactorios».",
        "El informe concluye: «Los resultados son satisfactorios».",
        "El informe concluye: «Los resultados son satisfactorios.»"
      ],
      correcta: 1,
      explicacion: "«El informe concluye: «Los resultados son satisfactorios».» — en citas introducidas por dos puntos, la primera palabra lleva mayúscula. El punto cierra fuera de las comillas (norma hispánica). La opción con minúscula y la que pone el punto dentro son incorrectas.",
      pasos: []
    },
    {
      id: 64,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 8",
      pregunta: '«La palabra __ ortografía __ proviene del griego y significa "escritura correcta".» ¿Qué signos enmarcan la palabra estudiada?',
      opciones: ["Comillas: «ortografía»", "Paréntesis: (ortografía)", "Sin signos: ortografía"],
      correcta: 0,
      explicacion: "Comillas (uso metalingüístico) — cuando se habla de una palabra como objeto de estudio lingüístico, se escribe entre comillas: «ortografía». En textos académicos también es válida la cursiva.",
      pasos: []
    },
    {
      id: 65,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 8",
      pregunta: "¿Cuál de los siguientes títulos usa CORRECTAMENTE las comillas?",
      opciones: [
        "Leyó «Don Quijote de la Mancha» completo en un mes.",
        "Leyó «La canción del pirata» en la clase de literatura.",
        "Leyó «El Quijote» en la clase de literatura del semestre."
      ],
      correcta: 1,
      explicacion: "«La canción del pirata» es un poema (obra corta) → comillas angulares, correcto. Los títulos de obras largas —novelas, películas, discos— van en cursiva, no entre comillas: Don Quijote de la Mancha, El Quijote.",
      pasos: []
    },
    {
      id: 66,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Regla 8",
      pregunta: "En la oración «Su «brillante» idea costó miles de pesos», ¿qué función cumplen las comillas en «brillante»?",
      opciones: [
        "Señalan una cita textual",
        "Marcan ironía: el sentido es el contrario al literal",
        "Indican un título de obra corta"
      ],
      correcta: 1,
      explicacion: "Ironía o distancia — las comillas indican que «brillante» debe leerse con sentido contrario al literal: la idea no fue buena. Es uno de los usos expresivos de las comillas.",
      pasos: []
    },
    {
      id: 67,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Regla 8",
      pregunta: "Según la norma hispánica, cuando una cita entrecomillada termina una oración, el punto se coloca…",
      opciones: [
        "dentro de las comillas: «…satisfactorios.»",
        "fuera de las comillas: «…satisfactorios».",
        "se omite el punto"
      ],
      correcta: 1,
      explicacion: "Fuera de las comillas: «…satisfactorios». — en español el punto se escribe después de las comillas de cierre. Colocar el punto dentro es la norma anglosajona, incorrecta en español.",
      pasos: []
    },
    {
      id: 68,
      tipo: "ejercicio",
      etiqueta: "Reactivo 6 — Regla 8",
      pregunta: "Para una cita dentro de otra cita, ¿cuál es la jerarquía CORRECTA de comillas en español?",
      opciones: [
        "«angulares» dentro de «angulares»",
        "«angulares» con \"inglesas\" dentro, y 'simples' en el tercer nivel",
        "'simples' dentro de \"inglesas\""
      ],
      correcta: 1,
      explicacion: "La jerarquía es «angulares» > \"inglesas\" > 'simples'. Ejemplo: «El documento dice \"aprobado por unanimidad\" en la sección final». Repetir comillas angulares anidadas es incorrecto.",
      pasos: []
    },

    // ── Regla 9: Paréntesis y corchetes ──────────────────────────────────────
    {
      id: 69,
      tipo: "regla_rica",
      etiqueta: "Regla 9 / 12",
      titulo: "Paréntesis ( ) y corchetes [ ] — incisos y aclaraciones",
      bloques: [
        {
          tipo: "texto",
          texto: "El paréntesis encierra información accesoria que aclara o amplía lo dicho, pero que podría suprimirse sin afectar la idea principal. Los corchetes se usan: (1) para un inciso dentro de un paréntesis, (2) para marcar omisiones editoriales en citas textuales ([…]) y (3) para intercalar aclaraciones en el texto de otro autor. Regla infalible: si al suprimir lo que está entre paréntesis la oración pierde sentido o queda mal, el paréntesis está mal usado."
        },
        {
          tipo: "tabla",
          titulo: "Paréntesis vs. corchetes",
          columnas: ["Signo", "Uso principal", "Ejemplo"],
          filas: [
            { tiempo: "( )", correcto: "Aclaración o dato accesorio",          error: "El EXANI-I (Examen Nacional de Ingreso) se aplica en agosto." },
            { tiempo: "( )", correcto: "Fechas y datos biográficos",           error: "Sor Juana Inés de la Cruz (1648-1695) fue poeta." },
            { tiempo: "( )", correcto: "Alternativa u opción",                 error: "El (los) candidato(s) debe(n) presentar identificación." },
            { tiempo: "[ ]", correcto: "Inciso dentro de paréntesis",          error: "(quien [según fuentes] rechazó la propuesta)" },
            { tiempo: "[…]", correcto: "Omisión editorial en cita textual",    error: "«El proyecto […] fue aprobado por unanimidad»." }
          ]
        },
        {
          tipo: "par",
          etiqueta: "prueba: si suprimes el paréntesis, la oración principal debe seguir correcta",
          correcto: "El director (quien llegó tarde) presidió la reunión.",
          incorrecto: "El director (quien llegó tarde presidió la reunión)."
        },
        {
          tipo: "par",
          etiqueta: "[…] para omisión en cita — no puntos suspensivos solos",
          correcto: "«El rector declaró que el proyecto […] contaba con financiamiento completo».",
          incorrecto: "«El rector declaró que el proyecto… contaba con financiamiento completo»."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "El punto va FUERA del paréntesis si este cierra dentro de un enunciado mayor",
          correcto: "El examen se aplicará en agosto (según el calendario oficial).",
          incorrecto: "El examen se aplicará en agosto (según el calendario oficial.)"
        }
      ]
    },
    {
      id: 70,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 9",
      pregunta: "«La RAE (Real Academia Española__ define la ortografía como el conjunto de normas que regulan la escritura.» ¿Qué signo cierra el paréntesis?",
      opciones: [",", ")", ":"],
      correcta: 1,
      explicacion: "Paréntesis de cierre ()) — «Real Academia Española» es una aclaración accesoria. El punto final de la oración completa va después del paréntesis de cierre, no dentro.",
      pasos: []
    },
    {
      id: 71,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 9",
      pregunta: "«El proyecto fue aprobado en la sesión del lunes (según consta en el acta oficial)__» ¿Dónde va el punto final?",
      opciones: [
        "Dentro del paréntesis: «…oficial.)»",
        "Fuera del paréntesis: «…oficial).»",
        "No lleva punto: el paréntesis ya cierra el enunciado."
      ],
      correcta: 1,
      explicacion: "Fuera del paréntesis: «…(según consta en el acta oficial).» — el punto va fuera cuando el paréntesis está incluido dentro de un enunciado mayor. Solo iría dentro si el paréntesis constituyera un enunciado completamente independiente.",
      pasos: []
    },
    {
      id: 72,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 9",
      pregunta: "«El director afirmó: «El presupuesto __ se aprobó sin modificaciones».» ¿Qué signo indica que se omitió parte de la cita?",
      opciones: ["… (puntos suspensivos solos)", "[…] (corchetes con puntos suspensivos)", "— (raya)"],
      correcta: 1,
      explicacion: "«[…]» — dentro de una cita textual, la omisión editorial se marca con corchetes y puntos suspensivos. Los puntos solos (…) no distinguen si la pausa es del autor original o una omisión del editor.",
      pasos: []
    },
    {
      id: 73,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Regla 9",
      pregunta: "¿Cuál es la forma CORRECTA de aportar las fechas biográficas de un autor?",
      opciones: [
        "Sor Juana Inés de la Cruz, 1648-1695, fue una gran poeta.",
        "Sor Juana Inés de la Cruz (1648-1695) fue una gran poeta.",
        "Sor Juana Inés de la Cruz: 1648-1695: fue una gran poeta."
      ],
      correcta: 1,
      explicacion: "«Sor Juana Inés de la Cruz (1648-1695) fue una gran poeta.» — los datos biográficos accesorios, como las fechas de nacimiento y muerte, se encierran entre paréntesis. Es un dato que podría suprimirse sin afectar la oración.",
      pasos: []
    },
    {
      id: 74,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Regla 9",
      pregunta: "Cuando se necesita intercalar una aclaración DENTRO de un texto que ya va entre paréntesis, ¿qué signo se usa?",
      opciones: ["Otro par de paréntesis", "Corchetes [ ]", "Comillas « »"],
      correcta: 1,
      explicacion: "Corchetes [ ] — para un inciso dentro de un paréntesis se usan corchetes, evitando paréntesis anidados: «(quien [según fuentes] rechazó la propuesta)». Anidar paréntesis dentro de paréntesis es incorrecto.",
      pasos: []
    },
    {
      id: 75,
      tipo: "ejercicio",
      etiqueta: "Reactivo 6 — Regla 9",
      pregunta: "¿Cuál es la «prueba» para saber si un paréntesis está bien usado?",
      opciones: [
        "Que contenga al menos cinco palabras",
        "Que la oración principal siga siendo correcta y completa si se suprime el paréntesis",
        "Que vaya siempre al final de la oración"
      ],
      correcta: 1,
      explicacion: "La prueba infalible: si al eliminar lo que está entre paréntesis la oración principal se mantiene correcta y con sentido, el paréntesis está bien usado. «El director (quien llegó tarde) presidió la reunión» → «El director presidió la reunión» sigue siendo correcta.",
      pasos: []
    },

    // ── Regla 10: El guion y la raya ─────────────────────────────────────────
    {
      id: 76,
      tipo: "regla_rica",
      etiqueta: "Regla 10 / 12",
      titulo: "El guion (-) y la raya (—) — signos distintos, usos distintos",
      bloques: [
        {
          tipo: "texto",
          texto: "El guion corto (-) y la raya (—) son signos completamente diferentes. El guion une elementos léxicos (compuestos, prefijos ante nombre propio) y divide palabras al final de línea. La raya —más larga— introduce intervenciones en diálogos, enmarca incisos extensos y señala las acotaciones del narrador. Confundirlos o usar el guion corto en lugar de la raya es un error frecuente en el EXANI-I."
        },
        {
          tipo: "tabla",
          titulo: "Guion vs. raya: usos y ejemplos",
          columnas: ["Signo", "Uso", "Ejemplo correcto"],
          filas: [
            { tiempo: "Guion (-)",  correcto: "Palabra compuesta",                    error: "El tratado franco-alemán fue renovado en Berlín." },
            { tiempo: "Guion (-)",  correcto: "Prefijo + nombre propio / sigla",      error: "El movimiento anti-OTAN generó debate en Europa." },
            { tiempo: "Guion (-)",  correcto: "División silábica al final de línea",  error: "El con-/ venio fue ratificado por ambas partes." },
            { tiempo: "Raya (—)",   correcto: "Intervención en diálogo",              error: "—¿Cuándo llega el director? —preguntó la secretaria." },
            { tiempo: "Raya (—)",   correcto: "Inciso extenso o enfático",            error: "El proyecto —aprobado por unanimidad— inicia en enero." },
            { tiempo: "Raya (—)",   correcto: "Acotación del narrador en diálogo",    error: "—Llegué a tiempo —dijo con alivio el coordinador." }
          ]
        },
        {
          tipo: "par",
          etiqueta: "raya en diálogo — sin espacio antes, espacio después de la raya inicial",
          correcto: "—¿Terminaste el informe? —preguntó el coordinador con impaciencia.",
          incorrecto: "- ¿Terminaste el informe? - preguntó el coordinador."
        },
        {
          tipo: "par",
          etiqueta: "guion en compuesto — sin espacios a los lados",
          correcto: "La reunión fue un debate político-académico de alto nivel.",
          incorrecto: "La reunión fue un debate político - académico de alto nivel."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "El guion corto con espacios (x - y) no existe en español; el guion va siempre sin espacios",
          correcto: "El acuerdo teórico-práctico fue firmado por ambas partes.",
          incorrecto: "El acuerdo teórico - práctico fue firmado por ambas partes."
        }
      ]
    },
    {
      id: 77,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 10",
      pregunta: "¿Cuál de las siguientes opciones usa CORRECTAMENTE la raya?",
      opciones: [
        "El convenio franco-alemán fue renovado en diciembre.",
        "—¿Cuándo se entregará el dictamen? —preguntó el representante.",
        "El proyecto - aprobado en sesión - comenzará en enero."
      ],
      correcta: 1,
      explicacion: "«—¿Cuándo se entregará el dictamen? —preguntó el representante.» — la raya introduce el diálogo y la acotación del narrador. El guion corto une compuestos léxicos («franco-alemán»); los guiones con espacios (- texto -) son incorrectos en español.",
      pasos: []
    },
    {
      id: 78,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 10",
      pregunta: "«El acuerdo __ que nadie esperaba __ cambió el rumbo de las negociaciones.» ¿Qué signos corresponden para un inciso extenso y enfático?",
      opciones: ["comas: , / ,", "rayas: — / —", "paréntesis: ( / )"],
      correcta: 1,
      explicacion: "Rayas (— / —) — el inciso «que nadie esperaba» puede enmarcarse entre rayas para mayor énfasis. Las comas serían gramaticalmente correctas también, pero las rayas son la opción más enfática para un inciso que interrumpe el flujo de la oración.",
      pasos: []
    },
    {
      id: 79,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 10",
      pregunta: "¿Cuál es el uso CORRECTO del guion corto?",
      opciones: [
        "El seminario teórico - práctico se realizará en línea.",
        "El seminario teórico-práctico se realizará en línea.",
        "El seminario teórico—práctico se realizará en línea."
      ],
      correcta: 1,
      explicacion: "«teórico-práctico» — el guion corto une los dos adjetivos del compuesto sin espacios a los lados. Espacios alrededor del guion son incorrectos. La raya (—) no se usa para formar compuestos léxicos.",
      pasos: []
    },
    {
      id: 80,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Regla 10",
      pregunta: "¿Cuál es la forma CORRECTA de unir un prefijo con una sigla?",
      opciones: ["El movimiento antiOTAN", "El movimiento anti-OTAN", "El movimiento anti OTAN"],
      correcta: 1,
      explicacion: "«anti-OTAN» — cuando un prefijo se une a una sigla o a un nombre propio (que conserva su mayúscula), se emplea guion corto sin espacios. Pegarlo sin guion («antiOTAN») o separarlo con espacio es incorrecto.",
      pasos: []
    },
    {
      id: 81,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Regla 10",
      pregunta: "En «—Llegué a tiempo —dijo el coordinador», la segunda raya introduce…",
      opciones: [
        "una segunda intervención del diálogo",
        "la acotación del narrador (quién habla)",
        "un inciso aclaratorio dentro del parlamento"
      ],
      correcta: 1,
      explicacion: "La segunda raya introduce la acotación del narrador: «—dijo el coordinador». La primera raya abre la intervención del personaje; la segunda separa el comentario del narrador que indica quién habla.",
      pasos: []
    },
    {
      id: 82,
      tipo: "ejercicio",
      etiqueta: "Reactivo 6 — Regla 10",
      pregunta: "¿Qué signo se usa para dividir una palabra al final de un renglón cuando no cabe completa?",
      opciones: ["La raya (—)", "El guion corto (-)", "Los puntos suspensivos (…)"],
      correcta: 1,
      explicacion: "El guion corto (-) — divide la palabra por sílabas al final de la línea: «con-/venio». La raya tiene usos distintos (diálogos, incisos) y los puntos suspensivos no sirven para dividir palabras.",
      pasos: []
    },

    // ── Regla 11: Compatibilidad entre signos ─────────────────────────────────
    {
      id: 83,
      tipo: "regla_rica",
      etiqueta: "Regla 11 / 12",
      titulo: "Combinación de signos — compatibilidad e incompatibilidad",
      bloques: [
        {
          tipo: "texto",
          texto: "En español, algunos signos pueden combinarse y otros son incompatibles. Reglas de compatibilidad que evalúa el EXANI-I: (1) «?» e «!» no admiten punto después, pues ya cierran el enunciado; (2) «…» tampoco admiten punto adicional al final; (3) la coma puede ir después de paréntesis o comillas de cierre si la estructura lo requiere; (4) los dos puntos pueden preceder comillas de apertura en citas directas."
        },
        {
          tipo: "tabla",
          titulo: "Compatibilidad entre signos",
          columnas: ["Combinación", "¿Válida?", "Ejemplo o nota"],
          filas: [
            { tiempo: "«?» + punto",                correcto: "NO",              error: "¿Llegaste?. ← incorrecto" },
            { tiempo: "«!» + punto",                correcto: "NO",              error: "¡Qué sorpresa!. ← incorrecto" },
            { tiempo: "«…» + punto",                correcto: "NO",              error: "Los «…» ya cierran el enunciado." },
            { tiempo: "«)» + coma",                 correcto: "SÍ",              error: "(según el acta), el resultado fue positivo." },
            { tiempo: "«»» + coma",                 correcto: "SÍ",              error: "Dijo «listo», y salió del salón." },
            { tiempo: "«:» + «« »»",               correcto: "SÍ",              error: "Declaró: «Todo está listo para mañana»." },
            { tiempo: "«¿» + «…» + «?»",            correcto: "SÍ (suspenso interrogativo)", error: "¿Y si no llegara a tiempo…?" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "interrogación y exclamación nunca llevan punto después",
          correcto: "¿Cuándo llegará el resultado? Todos lo esperamos con ansias.",
          incorrecto: "¿Cuándo llegará el resultado?. Todos lo esperamos con ansias."
        },
        {
          tipo: "par",
          etiqueta: "coma después de comillas de cierre — sí es válido",
          correcto: "Cuando afirmó «el proyecto está listo», todos suspiraron de alivio.",
          incorrecto: "Cuando afirmó «el proyecto está listo,» todos suspiraron de alivio."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "«¿…?» y «¡…!» — combinación válida para preguntas o exclamaciones con suspenso",
          correcto: "¿Y si llegara demasiado tarde…?",
          incorrecto: "¿Y si llegara demasiado tarde?…"
        }
      ]
    },
    {
      id: 84,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 11",
      pregunta: "¿Cuál de las siguientes combinaciones de signos es CORRECTA?",
      opciones: [
        "¿Aprobaste el examen?. Cuéntame.",
        "¿Aprobaste el examen? Cuéntame.",
        "¿Aprobaste el examen?, cuéntame."
      ],
      correcta: 1,
      explicacion: "«¿Aprobaste el examen? Cuéntame.» — el signo de interrogación ya cierra el enunciado; no se añade punto ni coma. El enunciado siguiente comienza con mayúscula.",
      pasos: []
    },
    {
      id: 85,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 11",
      pregunta: "«Cuando dijo «aprobado»__ todos lanzaron un grito de alegría.» ¿Puede ir una coma después de las comillas de cierre?",
      opciones: [
        "No, nunca se pone coma después de comillas.",
        "Sí, la coma puede ir después de las comillas si la estructura lo exige.",
        "Solo si las comillas van al inicio de la oración."
      ],
      correcta: 1,
      explicacion: "Sí — la coma puede ir inmediatamente después de las comillas de cierre (»,) si la estructura gramatical lo requiere. «Cuando dijo «aprobado», todos lanzaron un grito» — la coma cierra la subordinada temporal.",
      pasos: []
    },
    {
      id: 86,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 11",
      pregunta: "«¡Qué resultado tan inesperado__ nadie lo vio venir.» ¿Qué signo(s) corresponden al espacio?",
      opciones: ["!. (exclamación + punto)", "! (solo exclamación, luego mayúscula)", "!, (exclamación + coma)"],
      correcta: 1,
      explicacion: "«¡Qué resultado tan inesperado! Nadie lo vio venir.» — el signo de exclamación ya cierra el enunciado; no se añade punto ni coma. El enunciado siguiente comienza con mayúscula.",
      pasos: []
    },
    {
      id: 87,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Regla 11",
      pregunta: "¿Cuál de las siguientes combinaciones NO es válida en español?",
      opciones: [
        "Dos puntos seguidos de comillas de apertura: Declaró: «…»",
        "Puntos suspensivos seguidos de punto: …. ",
        "Paréntesis de cierre seguido de coma: (…), "
      ],
      correcta: 1,
      explicacion: "«….» no es válida: los puntos suspensivos ya cierran el enunciado y no admiten un punto adicional. En cambio, los dos puntos sí pueden preceder comillas de apertura, y la coma sí puede seguir a un paréntesis de cierre.",
      pasos: []
    },
    {
      id: 88,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Regla 11",
      pregunta: "Para expresar una pregunta con tono de duda o suspenso, ¿cómo se combinan los signos?",
      opciones: [
        "¿Y si no llegara a tiempo?…",
        "¿Y si no llegara a tiempo…?",
        "…¿Y si no llegara a tiempo?"
      ],
      correcta: 1,
      explicacion: "«¿Y si no llegara a tiempo…?» — los puntos suspensivos van DENTRO de los signos de interrogación, antes del signo de cierre, para combinar suspenso e interrogación. Colocar el «?» antes de los puntos rompe la unidad de la pregunta.",
      pasos: []
    },
    {
      id: 89,
      tipo: "ejercicio",
      etiqueta: "Reactivo 6 — Regla 11",
      pregunta: "¿Cuál de las siguientes oraciones combina CORRECTAMENTE los dos puntos con una cita entre comillas?",
      opciones: [
        "La directora declaró «todo está listo».",
        "La directora declaró: «Todo está listo».",
        "La directora declaró: todo está listo."
      ],
      correcta: 1,
      explicacion: "«La directora declaró: «Todo está listo».» — los dos puntos anuncian la cita textual, que abre con comillas y mayúscula inicial. Sin los dos puntos o sin comillas, la cita directa queda mal marcada.",
      pasos: []
    },

    // ── Regla 12: Coma ante conjunciones coordinantes ─────────────────────────
    {
      id: 90,
      tipo: "regla_rica",
      etiqueta: "Regla 12 / 12",
      titulo: "Coma ante conjunciones — «pero», «sino», «y», «o», «aunque»",
      bloques: [
        {
          tipo: "texto",
          texto: "La coma ante conjunciones coordinantes sigue reglas precisas. «Pero», «sino», «aunque» y «mas» llevan coma cuando unen dos cláusulas con verbo explícito. «Y» no lleva coma antes en series simples, pero sí puede llevarla cuando une oraciones contrastantes. «Sino» (conjunción adversativa excluyente) siempre lleva coma; se distingue de «si no» (condición negativa, dos palabras)."
        },
        {
          tipo: "tabla",
          titulo: "Coma ante conjunciones coordinantes",
          columnas: ["Conjunción", "¿Lleva coma?", "Ejemplo correcto"],
          filas: [
            { tiempo: "pero (dos cláusulas)",     correcto: "Sí",                              error: "Estudió mucho, pero no aprobó." },
            { tiempo: "pero (sin 2ª cláusula)",   correcto: "No",                              error: "Llegó tarde pero contento." },
            { tiempo: "sino (excluyente)",         correcto: "Sí — siempre",                   error: "No fue él, sino su representante." },
            { tiempo: "sino que (con verbo)",      correcto: "Sí — ante verbo nuevo",           error: "No solo llegó, sino que también presentó." },
            { tiempo: "aunque (cláusula)",         correcto: "Sí (proposición completa)",       error: "Fue al examen, aunque no estaba listo." },
            { tiempo: "y (serie normal)",          correcto: "No ante la última «y»",           error: "Estudió, descansó y aprobó." },
            { tiempo: "y (oraciones contrastantes)", correcto: "Sí (opcional, enfático)",      error: "Habló horas, y nadie lo escuchó." }
          ]
        },
        {
          tipo: "par",
          etiqueta: "sino vs. pero — distintos contextos",
          correcto: "No aprobó el primer bloque, sino el segundo. / Estudió, pero no aprobó.",
          incorrecto: "No aprobó el primer bloque pero el segundo. / Estudió sino que no aprobó."
        },
        {
          tipo: "par",
          etiqueta: "sino que — ante verbo nuevo explícito",
          correcto: "No solo entregó el informe, sino que también presentó el análisis completo.",
          incorrecto: "No solo entregó el informe sino que también presentó el análisis completo."
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "«Sino» (conjunción, una palabra) vs. «si no» (condición negativa, dos palabras)",
          correcto: "No llegó tarde, sino puntual. / Si no llegas a tiempo, no podrás entrar.",
          incorrecto: "No llegó tarde, si no puntual. / Sino llegas a tiempo, no podrás entrar."
        }
      ]
    },
    {
      id: 91,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regla 12",
      pregunta: "«No fue la directora quien firmó el convenio__ sino su representante legal designado.» ¿Qué signo corresponde?",
      opciones: ["nada (sin signo)", ",", ";"],
      correcta: 1,
      explicacion: "Coma — «sino» es una conjunción adversativa excluyente y siempre va precedida de coma. Contrasta y excluye la primera idea: «no fue X, sino Y».",
      pasos: []
    },
    {
      id: 92,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Regla 12",
      pregunta: "«Estudió toda la noche__ y aun así no logró aprobar el examen de admisión.» ¿Qué corresponde?",
      opciones: ["nada (sin signo)", ",", ":"],
      correcta: 1,
      explicacion: "Coma — cuando «y» une dos proposiciones de sentido contrastante o resultado inesperado («estudió mucho» + «no aprobó»), la coma es válida y enfatiza el contraste. El EXANI-I prefiere esta opción.",
      pasos: []
    },
    {
      id: 93,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Regla 12",
      pregunta: "¿Cuál de las siguientes oraciones usa CORRECTAMENTE «sino» o «si no»?",
      opciones: [
        "Si no estudias, no aprobarás el examen de admisión.",
        "No fue descuido sino una decisión deliberada del coordinador.",
        "Sino estudias con constancia, los resultados no mejorarán."
      ],
      correcta: 0,
      explicacion: "«Si no estudias, no aprobarás…» — «si no» (dos palabras) es condición negativa, correcto. La opción 2 omite la coma obligatoria antes de «sino». La opción 3 usa «sino» (conjunción) donde corresponde «si no» (condición).",
      pasos: []
    },
    {
      id: 94,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Regla 12",
      pregunta: "«Se presentó al examen__ aunque no se sentía preparado del todo.» ¿Qué corresponde en el espacio?",
      opciones: ["nada (sin signo)", ",", ":"],
      correcta: 1,
      explicacion: "Coma — «aunque» introduce una proposición concesiva con verbo propio («no se sentía preparado»), por lo que va precedido de coma. Como las demás conjunciones, lleva coma cuando une dos cláusulas con verbo explícito.",
      pasos: []
    },
    {
      id: 95,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Regla 12",
      pregunta: "«No solo entregó el informe__ sino que también presentó el análisis completo.» ¿Qué corresponde?",
      opciones: ["nada (sin signo)", ",", ";"],
      correcta: 1,
      explicacion: "Coma — «sino que» introduce una segunda cláusula con verbo nuevo y explícito («presentó»), por lo que va precedido de coma. La construcción «no solo…, sino que también…» exige la coma antes de «sino que».",
      pasos: []
    },
    {
      id: 96,
      tipo: "ejercicio",
      etiqueta: "Reactivo 6 — Regla 12",
      pregunta: "¿En cuál de estas oraciones es INCORRECTO poner coma antes de la conjunción?",
      opciones: [
        "Estudió mucho, pero no aprobó.",
        "Compró cuadernos, lápices, y gomas.",
        "Fue al examen, aunque no estaba listo."
      ],
      correcta: 1,
      explicacion: "«Compró cuadernos, lápices, y gomas» es incorrecto: no se pone coma antes de la «y» que cierra una serie simple. En las otras dos, «pero» y «aunque» unen cláusulas con verbo propio y sí exigen coma.",
      pasos: []
    }
  ]
};
