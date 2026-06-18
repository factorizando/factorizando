// Presentación: Cohesión Textual (EXANI-II) — Conectores y marcadores discursivos
// Tercer pilar de la cohesión (junto a la gramatical y la léxico-semántica).
// Esquema por caso: definición → ejemplos (tabla/par) → 5-6 ejercicios.
// Reutiliza los diagramas "marcadores-*" ya existentes en SlideRenderer.

export const PRESENTACION = {
  id: "cohesion-textual-exani-ii",
  titulo: "Cohesión Textual",
  materia: "Español",
  subtema: "Redacción Indirecta · EXANI-II",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Cohesión Textual",
      subtitulo: "Conectores y marcadores discursivos — las palabras que enlazan las ideas del texto",
      etiqueta: "Español · Redacción Indirecta · EXANI-II"
    },

    // ── Introducción ──────────────────────────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Introducción",
      titulo: "¿Qué une las ideas? Los conectores",
      bloques: [
        {
          tipo: "texto",
          texto: "La cohesión textual es el mecanismo que enlaza enunciados y párrafos haciendo explícita la relación lógica entre las ideas. Mientras la cohesión gramatical usa pronombres y elipsis, y la léxico-semántica usa el significado de las palabras, la cohesión textual usa CONECTORES y MARCADORES DISCURSIVOS: además, sin embargo, por lo tanto, en primer lugar, es decir… El EXANI-II evalúa elegir el conector que corresponde a la relación lógica real entre las ideas."
        },
        {
          tipo: "diagrama",
          id: "marcadores-panorama",
          titulo: "Mapa: tipos de conectores evaluados en el EXANI-II"
        },
        {
          tipo: "tabla",
          titulo: "Los grandes tipos de conectores",
          columnas: ["Tipo", "Relación que expresa", "Ejemplos"],
          filas: [
            { tiempo: "Aditivos",      correcto: "Suman información",                 error: "además, asimismo, también" },
            { tiempo: "Adversativos",  correcto: "Contrastan u oponen ideas",         error: "sin embargo, no obstante, en cambio" },
            { tiempo: "Causa / consec.", correcto: "Expresan causa o consecuencia",   error: "porque · por lo tanto" },
            { tiempo: "Ordenadores",   correcto: "Organizan la secuencia del texto",  error: "en primer lugar, después, finalmente" },
            { tiempo: "Explicativos",  correcto: "Reformulan o ejemplifican",         error: "es decir · por ejemplo" }
          ]
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "El conector debe corresponder a la relación lógica real entre las ideas — usar uno equivocado cambia o contradice el sentido",
          correcto: "Estudió mucho; por lo tanto, aprobó. (causa → consecuencia: conector consecutivo correcto)",
          incorrecto: "Estudió mucho; sin embargo, aprobó. (sin embargo expresa contraste; aquí no hay oposición → conector incorrecto)"
        }
      ]
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 / 3 — Introducción",
      pregunta: "¿Qué distingue a la cohesión textual de la gramatical y la léxico-semántica?",
      opciones: [
        "Usa conectores y marcadores discursivos para enlazar ideas y explicitar su relación lógica",
        "Usa pronombres y elipsis para evitar repeticiones",
        "Usa sinónimos y antónimos para variar el vocabulario"
      ],
      correcta: 0,
      explicacion: "La cohesión textual enlaza enunciados y párrafos mediante conectores (además, sin embargo, por lo tanto…) que hacen explícita la relación lógica entre las ideas. Los pronombres y la elipsis pertenecen a la cohesión gramatical; los sinónimos y antónimos, a la léxico-semántica.",
      pasos: []
    },
    {
      id: 3,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 / 3 — Introducción",
      pregunta: "«Llovió toda la noche; ____, el partido se suspendió.» ¿Qué tipo de relación lógica conecta las dos ideas?",
      opciones: [
        "Consecuencia (la lluvia provoca la suspensión)",
        "Oposición (las ideas se contradicen)",
        "Adición (se suma información sin relación)"
      ],
      correcta: 0,
      explicacion: "Es una relación de consecuencia: la lluvia es la causa y la suspensión, el efecto. El conector adecuado sería consecutivo («por lo tanto», «por eso», «en consecuencia»). No hay oposición ni una simple suma de datos.",
      pasos: []
    },
    {
      id: 4,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 / 3 — Introducción",
      pregunta: "En la oración «El proyecto era costoso; __, se aprobó por su impacto social», ¿qué conector hace explícita una relación de CONTRASTE?",
      opciones: [
        "no obstante",
        "por lo tanto",
        "es decir"
      ],
      correcta: 0,
      explicacion: "«no obstante» es un conector adversativo: marca que, pese al costo (un obstáculo), el proyecto se aprobó. «Por lo tanto» indicaría consecuencia y «es decir» reformulación, relaciones que no corresponden al contraste de la oración.",
      pasos: []
    },

    // ── Caso 1: Conectores aditivos ────────────────────────────────────────────
    {
      id: 5,
      tipo: "regla_rica",
      etiqueta: "Caso 1 / 6 · Aditivos",
      titulo: "Conectores aditivos — sumar información",
      bloques: [
        {
          tipo: "texto",
          texto: "Los conectores aditivos suman información en la misma dirección que la idea anterior, sin contraste. Los más frecuentes son: además, asimismo, también, igualmente, incluso, es más, por añadidura. Sirven para reforzar o ampliar un argumento. Cuidado: «asimismo» (= también) no debe confundirse con «así mismo» (= de ese modo) ni con «a sí mismo» (reflexivo)."
        },
        {
          tipo: "diagrama",
          id: "marcadores-adicion",
          titulo: "Conectores que suman: además, asimismo, también…"
        },
        {
          tipo: "tabla",
          titulo: "Conectores aditivos frecuentes",
          columnas: ["Conector", "Matiz", "Ejemplo"],
          filas: [
            { tiempo: "además",     correcto: "Suma un argumento de igual peso",  error: "Es económico; además, es ecológico." },
            { tiempo: "asimismo",   correcto: "Registro formal de «también»",     error: "Se evaluará el examen; asimismo, la entrevista." },
            { tiempo: "incluso",    correcto: "Añade un caso extremo o inesperado", error: "Todos vinieron, incluso los que dudaban." },
            { tiempo: "es más",     correcto: "Intensifica lo dicho",             error: "Es bueno; es más, es excelente." }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el aditivo mantiene la dirección de la idea, no la contradice",
          correcto: "El plan es viable; además, es barato. (se suma un argumento a favor → aditivo correcto)",
          incorrecto: "El plan es viable; además, es inviable. (se contradice la idea → debería ser un adversativo, no un aditivo)"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Un conector aditivo solo es correcto si la segunda idea va en la MISMA dirección que la primera; si hay contraste, se necesita un adversativo",
          correcto: "Domina el inglés; asimismo, habla francés. (dos cualidades que se suman)",
          incorrecto: "Domina el inglés; asimismo, no sabe francés. (contraste → corresponde «sin embargo», no «asimismo»)"
        }
      ]
    },
    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 / 5 — Aditivos",
      pregunta: "«La bicicleta es un transporte económico; ____, no contamina.» ¿Qué conector aditivo enlaza correctamente las dos ventajas?",
      opciones: ["sin embargo", "además", "porque"],
      correcta: 1,
      explicacion: "«además» suma una segunda ventaja (no contamina) en la misma dirección que la primera (es económico). «Sin embargo» marcaría un contraste inexistente y «porque» introduciría una causa, no una suma de información.",
      pasos: []
    },
    {
      id: 7,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 / 5 — Aditivos",
      pregunta: "En un texto formal, ¿qué conector equivale a «también» para sumar un requisito?",
      opciones: ["asimismo", "no obstante", "en cambio"],
      correcta: 0,
      explicacion: "«asimismo» es el conector aditivo de registro formal equivalente a «también»: «Se entregará el ensayo; asimismo, se presentará la bibliografía». «No obstante» y «en cambio» son adversativos (contraste), no aditivos.",
      pasos: []
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 / 5 — Aditivos",
      pregunta: "«Asistieron todos los alumnos; ____ los que casi nunca participan.» ¿Qué conector añade un caso extremo o inesperado?",
      opciones: ["incluso", "es decir", "por lo tanto"],
      correcta: 0,
      explicacion: "«incluso» añade un caso extremo o sorprendente dentro de la misma idea (la asistencia total). «Es decir» reformularía y «por lo tanto» indicaría consecuencia, relaciones distintas a la de añadir un caso inesperado.",
      pasos: []
    },
    {
      id: 9,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 / 5 — Aditivos",
      pregunta: "¿Cuál de las siguientes oraciones usa MAL un conector aditivo?",
      opciones: [
        "El producto es resistente; además, es frágil.",
        "El producto es resistente; además, es ligero.",
        "El producto es resistente; asimismo, es duradero."
      ],
      correcta: 0,
      explicacion: "«El producto es resistente; además, es frágil» usa mal el aditivo: «frágil» contradice «resistente», así que la relación es de contraste y correspondería un adversativo («sin embargo»). Las otras dos suman cualidades coherentes (ligero, duradero).",
      pasos: []
    },
    {
      id: 10,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 / 5 — Aditivos",
      pregunta: "«La propuesta reduce costos; ____, mejora la calidad del servicio.» ¿Qué conector es el más adecuado?",
      opciones: ["por otra parte", "aunque", "en consecuencia"],
      correcta: 0,
      explicacion: "«por otra parte» suma un segundo beneficio en la misma línea argumentativa. «Aunque» introduciría una concesión/contraste y «en consecuencia» una consecuencia, relaciones que no corresponden a la simple adición de ventajas.",
      pasos: []
    },

    // ── Caso 2: Conectores adversativos ────────────────────────────────────────
    {
      id: 11,
      tipo: "regla_rica",
      etiqueta: "Caso 2 / 6 · Adversativos",
      titulo: "Conectores adversativos — contrastar u oponer",
      bloques: [
        {
          tipo: "texto",
          texto: "Los conectores adversativos (o contraargumentativos) señalan que la segunda idea se opone, matiza o restringe a la primera. Los más usados: pero, sin embargo, no obstante, en cambio, por el contrario, ahora bien. Cercanos están los concesivos (aunque, a pesar de que, si bien), que admiten un obstáculo sin que impida la idea principal. En registro formal se prefiere «sin embargo» o «no obstante» a «pero»."
        },
        {
          tipo: "diagrama",
          id: "marcadores-adversativos",
          titulo: "Conectores que contrastan: sin embargo, no obstante, en cambio…"
        },
        {
          tipo: "tabla",
          titulo: "Adversativos y concesivos frecuentes",
          columnas: ["Conector", "Función", "Ejemplo"],
          filas: [
            { tiempo: "sin embargo",  correcto: "Contraste fuerte (formal)",        error: "Es caro; sin embargo, vale la pena." },
            { tiempo: "no obstante",  correcto: "Equivale a «sin embargo» (formal)", error: "Llovía; no obstante, salimos." },
            { tiempo: "en cambio",    correcto: "Opone dos elementos comparados",   error: "Ana es tímida; en cambio, Luis es extrovertido." },
            { tiempo: "aunque",       correcto: "Concesivo: admite un obstáculo",   error: "Aunque llovía, ganamos el partido." }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el adversativo introduce una idea que contrasta con la anterior",
          correcto: "Entrenó poco; sin embargo, ganó. (contraste: lo esperable era perder → adversativo correcto)",
          incorrecto: "Entrenó mucho; sin embargo, ganó. (no hay contraste: entrenar mucho y ganar son coherentes → sobra el adversativo)"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "«Sin embargo» exige una oposición real entre las ideas — si ambas van en la misma dirección, el adversativo es incorrecto",
          correcto: "El examen era difícil; no obstante, lo aprobó. (lo esperable era reprobar → contraste válido)",
          incorrecto: "El examen era fácil; no obstante, lo aprobó. (aprobar un examen fácil es lo esperable → no hay contraste, conector mal usado)"
        }
      ]
    },
    {
      id: 12,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 / 5 — Adversativos",
      pregunta: "«El medicamento es eficaz; ____, produce algunos efectos secundarios.» ¿Qué conector expresa correctamente el contraste?",
      opciones: ["sin embargo", "por lo tanto", "además"],
      correcta: 0,
      explicacion: "«sin embargo» marca la oposición entre la ventaja (es eficaz) y el inconveniente (efectos secundarios). «Por lo tanto» indicaría consecuencia y «además» añadiría información en la misma dirección, no un contraste.",
      pasos: []
    },
    {
      id: 13,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 / 5 — Adversativos",
      pregunta: "«____ se esforzó al máximo, no logró clasificar.» ¿Qué conector concesivo completa la oración?",
      opciones: ["Aunque", "Porque", "Por eso"],
      correcta: 0,
      explicacion: "«Aunque» es concesivo: admite un esfuerzo (obstáculo) que no impidió el resultado negativo. «Porque» daría una causa y «por eso» una consecuencia, relaciones contrarias al sentido de la frase.",
      pasos: []
    },
    {
      id: 14,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 / 5 — Adversativos",
      pregunta: "«Ana prefiere la montaña; ____, su hermana prefiere la playa.» ¿Qué conector opone las dos preferencias?",
      opciones: ["en cambio", "asimismo", "es decir"],
      correcta: 0,
      explicacion: "«en cambio» contrapone dos elementos comparados (las preferencias de cada hermana). «Asimismo» sumaría sin contraste y «es decir» reformularía, funciones que no corresponden a la oposición.",
      pasos: []
    },
    {
      id: 15,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 / 5 — Adversativos",
      pregunta: "¿En cuál de estas oraciones está MAL empleado el conector adversativo?",
      opciones: [
        "El plato era sencillo; sin embargo, estaba delicioso.",
        "El plato era sencillo; sin embargo, era barato.",
        "El plato era caro; sin embargo, no valía la pena."
      ],
      correcta: 1,
      explicacion: "«El plato era sencillo; sin embargo, era barato» usa mal el adversativo: que algo sencillo sea barato es lo esperable, no hay contraste. Correspondería un aditivo («además»). Las otras dos sí expresan oposición real (sencillo pero delicioso; caro pero sin valor).",
      pasos: []
    },
    {
      id: 16,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 / 5 — Adversativos",
      pregunta: "«____ las advertencias del meteorólogo, la excursión se llevó a cabo.» ¿Qué conector concesivo encabeza la oración?",
      opciones: ["A pesar de", "Gracias a", "Debido a"],
      correcta: 0,
      explicacion: "«A pesar de» es concesivo: las advertencias eran un obstáculo que no impidió la excursión. «Gracias a» y «debido a» expresan causa (relación distinta): indicarían que las advertencias provocaron la excursión, lo cual contradice el sentido.",
      pasos: []
    },

    // ── Caso 3: Conectores causales y consecutivos ─────────────────────────────
    {
      id: 17,
      tipo: "regla_rica",
      etiqueta: "Caso 3 / 6 · Causa y consecuencia",
      titulo: "Conectores causales y consecutivos",
      bloques: [
        {
          tipo: "texto",
          texto: "La relación causa-efecto se marca con dos familias de conectores. Los CAUSALES introducen el motivo o la razón: porque, ya que, puesto que, dado que, debido a (que), pues. Los CONSECUTIVOS introducen el resultado o efecto: por (lo) tanto, por consiguiente, en consecuencia, por eso, así que, de modo que. Clave del EXANI-II: identificar cuál idea es la causa y cuál la consecuencia para elegir bien el conector."
        },
        {
          tipo: "diagrama",
          id: "marcadores-causa-consecuencia",
          titulo: "Causa (porque, ya que) → Consecuencia (por lo tanto, por eso)"
        },
        {
          tipo: "tabla",
          titulo: "Causales vs. consecutivos",
          columnas: ["Tipo", "Conectores", "Ejemplo"],
          filas: [
            { tiempo: "Causal",        correcto: "porque, ya que, puesto que, debido a", error: "No vino porque estaba enfermo." },
            { tiempo: "Consecutivo",   correcto: "por lo tanto, por eso, en consecuencia", error: "Estaba enfermo; por eso no vino." },
            { tiempo: "Consecutivo",   correcto: "así que (más coloquial)",             error: "Llovía, así que nos quedamos." },
            { tiempo: "Consecutivo",   correcto: "por consiguiente (formal)",           error: "Subió la demanda; por consiguiente, el precio." }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el causal introduce el motivo; el consecutivo, el resultado",
          correcto: "Se agotaron las entradas porque el grupo es muy popular. (motivo tras el efecto → causal correcto)",
          incorrecto: "El grupo es muy popular porque se agotaron las entradas. (invierte causa y efecto → relación ilógica)"
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "No confundas causa con consecuencia: «porque» introduce el motivo; «por lo tanto» introduce el resultado — invertirlos vuelve ilógico el texto",
          correcto: "Bajó la temperatura; por lo tanto, el agua se congeló. (causa → consecuencia)",
          incorrecto: "Bajó la temperatura; porque el agua se congeló. (presenta el efecto como causa → ilógico)"
        }
      ]
    },
    {
      id: 18,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 / 6 — Causa y consecuencia",
      pregunta: "«Se canceló el vuelo ____ una tormenta cerró el aeropuerto.» ¿Qué conector introduce la causa?",
      opciones: ["porque", "por lo tanto", "sin embargo"],
      correcta: 0,
      explicacion: "«porque» introduce la causa (la tormenta) del efecto (la cancelación). «Por lo tanto» encabezaría la consecuencia y «sin embargo» un contraste, relaciones que no corresponden a la causa.",
      pasos: []
    },
    {
      id: 19,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 / 6 — Causa y consecuencia",
      pregunta: "«Una tormenta cerró el aeropuerto; ____, se canceló el vuelo.» ¿Qué conector introduce la consecuencia?",
      opciones: ["por lo tanto", "porque", "aunque"],
      correcta: 0,
      explicacion: "«por lo tanto» introduce la consecuencia (la cancelación) derivada de la causa (la tormenta). «Porque» marcaría una causa y «aunque» una concesión, funciones distintas a la de señalar el resultado.",
      pasos: []
    },
    {
      id: 20,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 / 6 — Causa y consecuencia",
      pregunta: "«La demanda de viviendas creció; ____, los precios subieron.» ¿Qué conector consecutivo de registro formal es el adecuado?",
      opciones: ["por consiguiente", "puesto que", "es decir"],
      correcta: 0,
      explicacion: "«por consiguiente» es un conector consecutivo formal que presenta la subida de precios como resultado del aumento de la demanda. «Puesto que» es causal y «es decir» reformulativo, relaciones que no corresponden.",
      pasos: []
    },
    {
      id: 21,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 / 6 — Causa y consecuencia",
      pregunta: "¿Cuál de las siguientes oraciones invierte ilógicamente la relación causa-consecuencia?",
      opciones: [
        "El suelo está mojado porque llovió.",
        "Llovió porque el suelo está mojado.",
        "Llovió; por eso el suelo está mojado."
      ],
      correcta: 1,
      explicacion: "«Llovió porque el suelo está mojado» invierte la lógica: presenta el efecto (suelo mojado) como causa de la lluvia. Lo correcto es que la lluvia es la causa y el suelo mojado, la consecuencia, como en las otras dos oraciones.",
      pasos: []
    },
    {
      id: 22,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 / 6 — Causa y consecuencia",
      pregunta: "«No había quórum, ____ la sesión se pospuso.» ¿Qué conector completa la relación de consecuencia?",
      opciones: ["así que", "ya que", "a pesar de que"],
      correcta: 0,
      explicacion: "«así que» introduce la consecuencia (posponer la sesión) de la causa (falta de quórum). «Ya que» sería causal y «a pesar de que» concesivo, relaciones distintas a la consecuencia buscada.",
      pasos: []
    },
    {
      id: 23,
      tipo: "ejercicio",
      etiqueta: "Reactivo 6 / 6 — Causa y consecuencia",
      pregunta: "«El equipo ganó el campeonato ____ entrenó con disciplina todo el año.» ¿Qué conector causal es el adecuado?",
      opciones: ["ya que", "por lo tanto", "en cambio"],
      correcta: 0,
      explicacion: "«ya que» introduce la causa (el entrenamiento) del efecto (ganar el campeonato). «Por lo tanto» encabezaría la consecuencia y «en cambio» un contraste, funciones que no corresponden a la causa.",
      pasos: []
    },

    // ── Caso 4: Conectores ordenadores y temporales ────────────────────────────
    {
      id: 24,
      tipo: "regla_rica",
      etiqueta: "Caso 4 / 6 · Ordenadores",
      titulo: "Ordenadores del discurso y conectores temporales",
      bloques: [
        {
          tipo: "texto",
          texto: "Los ordenadores organizan las partes del texto y guían al lector por la secuencia: en primer lugar, para empezar, a continuación, luego, después, posteriormente, por último, finalmente, para terminar. Los temporales sitúan los hechos en el tiempo: mientras tanto, entonces, más tarde, al mismo tiempo. Una regla del EXANI-II: los ordenadores deben usarse en pares o series coherentes (en primer lugar… en segundo lugar… por último)."
        },
        {
          tipo: "diagrama",
          id: "marcadores-temporales",
          titulo: "Secuencia: en primer lugar → después → finalmente"
        },
        {
          tipo: "tabla",
          titulo: "Ordenadores y temporales frecuentes",
          columnas: ["Función", "Conectores", "Ejemplo"],
          filas: [
            { tiempo: "Apertura",     correcto: "en primer lugar, para empezar, primero", error: "En primer lugar, definiremos el problema." },
            { tiempo: "Continuación", correcto: "a continuación, después, luego, posteriormente", error: "A continuación, veremos las causas." },
            { tiempo: "Cierre",       correcto: "por último, finalmente, para terminar", error: "Por último, propondremos soluciones." },
            { tiempo: "Simultaneidad", correcto: "mientras tanto, al mismo tiempo",     error: "Cocinaba; mientras tanto, ponía la mesa." }
          ]
        },
        {
          tipo: "par",
          etiqueta: "los ordenadores se usan en series coherentes",
          correcto: "En primer lugar, … En segundo lugar, … Por último, … (serie ordenada y completa)",
          incorrecto: "En primer lugar, … Finalmente, … En segundo lugar, … (rompe el orden lógico de la serie)"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "El conector de cierre («por último», «finalmente») debe ir al final de la serie — no al principio ni en medio del desarrollo",
          correcto: "Primero hervimos el agua; después, agregamos la pasta; finalmente, la escurrimos. (cierre al final)",
          incorrecto: "Finalmente hervimos el agua; después, agregamos la pasta. (un cierre no puede abrir la secuencia)"
        }
      ]
    },
    {
      id: 25,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 / 5 — Ordenadores",
      pregunta: "«____, definiremos el concepto; después, daremos ejemplos.» ¿Qué conector abre correctamente la secuencia?",
      opciones: ["En primer lugar", "Por último", "Sin embargo"],
      correcta: 0,
      explicacion: "«En primer lugar» abre la secuencia y anticipa que vendrán más pasos («después»). «Por último» es un conector de cierre (no puede iniciar) y «sin embargo» marca contraste, no orden.",
      pasos: []
    },
    {
      id: 26,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 / 5 — Ordenadores",
      pregunta: "«Expusimos las causas del problema; ____, analizaremos sus consecuencias.» ¿Qué conector da continuidad a la secuencia?",
      opciones: ["a continuación", "en conclusión", "por el contrario"],
      correcta: 0,
      explicacion: "«a continuación» indica el siguiente paso del desarrollo. «En conclusión» cerraría el texto (no corresponde a una etapa intermedia) y «por el contrario» marcaría oposición, no secuencia.",
      pasos: []
    },
    {
      id: 27,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 / 5 — Ordenadores",
      pregunta: "«Tras revisar todos los puntos, ____ presentaremos las conclusiones.» ¿Qué conector cierra correctamente la secuencia?",
      opciones: ["finalmente", "en primer lugar", "asimismo"],
      correcta: 0,
      explicacion: "«finalmente» marca el cierre de la serie, coherente con «tras revisar todos los puntos». «En primer lugar» abriría la secuencia y «asimismo» solo sumaría información sin indicar cierre.",
      pasos: []
    },
    {
      id: 28,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 / 5 — Ordenadores",
      pregunta: "«El cocinero preparaba la salsa; ____, su ayudante cortaba las verduras.» ¿Qué conector expresa simultaneidad?",
      opciones: ["mientras tanto", "por lo tanto", "es decir"],
      correcta: 0,
      explicacion: "«mientras tanto» indica que las dos acciones ocurren al mismo tiempo. «Por lo tanto» señalaría consecuencia y «es decir» reformulación, relaciones distintas a la simultaneidad temporal.",
      pasos: []
    },
    {
      id: 29,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 / 5 — Ordenadores",
      pregunta: "¿Cuál secuencia de conectores ordena correctamente un texto de tres pasos?",
      opciones: [
        "En primer lugar… en segundo lugar… por último…",
        "Por último… en primer lugar… después…",
        "Finalmente… para empezar… luego…"
      ],
      correcta: 0,
      explicacion: "«En primer lugar… en segundo lugar… por último…» respeta el orden lógico: apertura, continuación y cierre. Las otras dos colocan el conector de cierre («por último», «finalmente») al inicio, rompiendo la secuencia.",
      pasos: []
    },

    // ── Caso 5: Conectores explicativos ────────────────────────────────────────
    {
      id: 30,
      tipo: "regla_rica",
      etiqueta: "Caso 5 / 6 · Explicativos",
      titulo: "Reformulación y ejemplificación",
      bloques: [
        {
          tipo: "texto",
          texto: "Los conectores explicativos aclaran una idea de dos maneras. Los REFORMULATIVOS la dicen de otro modo, sin añadir contenido nuevo: es decir, o sea, esto es, en otras palabras, dicho de otro modo. Los EJEMPLIFICATIVOS introducen un caso concreto que ilustra lo dicho: por ejemplo, como, tal como, a saber, pongamos por caso. Clave del EXANI-II: no confundir reformular (decir lo mismo de otra forma) con ejemplificar (dar un caso particular)."
        },
        {
          tipo: "diagrama",
          id: "marcadores-reformulacion",
          titulo: "Reformular (es decir) vs. ejemplificar (por ejemplo)"
        },
        {
          tipo: "tabla",
          titulo: "Reformulativos vs. ejemplificativos",
          columnas: ["Tipo", "Conectores", "Ejemplo"],
          filas: [
            { tiempo: "Reformulativo", correcto: "es decir, o sea, esto es",   error: "Es herbívoro, es decir, se alimenta de plantas." },
            { tiempo: "Reformulativo", correcto: "en otras palabras",          error: "Aplazó el pago; en otras palabras, no pagará hoy." },
            { tiempo: "Ejemplificativo", correcto: "por ejemplo, pongamos por caso", error: "Hay frutas tropicales; por ejemplo, el mango." },
            { tiempo: "Ejemplificativo", correcto: "tal como, a saber",        error: "Trae lo necesario, a saber: agua y comida." }
          ]
        },
        {
          tipo: "par",
          etiqueta: "reformular = decir lo mismo de otro modo; ejemplificar = dar un caso",
          correcto: "Es un felino; es decir, un mamífero carnívoro de la familia de los gatos. (reformulación: aclara el mismo concepto)",
          incorrecto: "Es un felino; es decir, el tigre. (un solo caso no reformula la categoría → debería ser «por ejemplo»)"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "«Es decir» reformula (dice lo mismo de otro modo); «por ejemplo» ilustra con un caso — usarlos al revés confunde la relación",
          correcto: "Practica deportes de raqueta; por ejemplo, tenis y pádel. (casos concretos → ejemplificación)",
          incorrecto: "Practica deportes de raqueta; es decir, tenis. (un caso no equivale a la categoría → debería ser «por ejemplo»)"
        }
      ]
    },
    {
      id: 31,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 / 5 — Explicativos",
      pregunta: "«El paciente es alérgico a los lácteos; ____, no puede consumir leche ni queso.» ¿Qué conector reformula la idea?",
      opciones: ["es decir", "por ejemplo", "sin embargo"],
      correcta: 0,
      explicacion: "«es decir» reformula: explica con otras palabras qué implica la alergia a los lácteos, sin añadir un caso nuevo ni contraste. «Por ejemplo» introduciría un caso entre varios y «sin embargo» una oposición.",
      pasos: []
    },
    {
      id: 32,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 / 5 — Explicativos",
      pregunta: "«México tiene muchas lenguas indígenas; ____, el náhuatl, el maya y el zapoteco.» ¿Qué conector introduce ejemplos?",
      opciones: ["por ejemplo", "o sea", "por lo tanto"],
      correcta: 0,
      explicacion: "«por ejemplo» introduce casos concretos (náhuatl, maya, zapoteco) que ilustran la idea general. «O sea» reformularía (diría lo mismo de otro modo) y «por lo tanto» indicaría consecuencia.",
      pasos: []
    },
    {
      id: 33,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 / 5 — Explicativos",
      pregunta: "«El proyecto es deficitario; ____, gasta más de lo que produce.» ¿Qué conector aclara el término con otras palabras?",
      opciones: ["en otras palabras", "por ejemplo", "aunque"],
      correcta: 0,
      explicacion: "«en otras palabras» reformula el concepto «deficitario» explicándolo de manera más sencilla. «Por ejemplo» daría un caso particular y «aunque» introduciría una concesión, no una aclaración equivalente.",
      pasos: []
    },
    {
      id: 34,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 / 5 — Explicativos",
      pregunta: "¿Cuál oración usa MAL un conector explicativo?",
      opciones: [
        "Le gustan los cítricos; es decir, la naranja.",
        "Le gustan los cítricos; por ejemplo, la naranja.",
        "Le gustan los cítricos; es decir, las frutas de sabor ácido y alto contenido de vitamina C."
      ],
      correcta: 0,
      explicacion: "«Le gustan los cítricos; es decir, la naranja» usa mal el reformulativo: la naranja es solo UN caso, no una reformulación de la categoría «cítricos». Correspondería «por ejemplo». La opción C sí reformula la categoría completa; la B ejemplifica correctamente.",
      pasos: []
    },
    {
      id: 35,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 / 5 — Explicativos",
      pregunta: "«Necesitarás material de acampada, ____: tienda, saco y linterna.» ¿Qué conector ejemplificativo enumera los casos?",
      opciones: ["a saber", "no obstante", "por consiguiente"],
      correcta: 0,
      explicacion: "«a saber» introduce una enumeración de ejemplos concretos (tienda, saco, linterna). «No obstante» marcaría contraste y «por consiguiente» consecuencia, relaciones ajenas a la ejemplificación.",
      pasos: []
    },

    // ── Caso 6: La trampa del EXANI-II — elegir el conector correcto ───────────
    {
      id: 36,
      tipo: "regla_rica",
      etiqueta: "Caso 6 / 6 · La trampa del EXANI-II",
      titulo: "Elegir el conector según la relación lógica",
      bloques: [
        {
          tipo: "texto",
          texto: "El reactivo más frecuente del EXANI-II presenta dos ideas y pide elegir el conector que refleja su verdadera relación lógica. El método es: (1) leer ambas ideas, (2) preguntarse qué relación hay entre ellas (¿se suman? ¿se oponen? ¿una causa la otra? ¿una es ejemplo o reformulación de la otra?), (3) elegir el conector de esa familia. Un conector equivocado no solo suena raro: cambia o contradice el sentido del texto."
        },
        {
          tipo: "diagrama",
          id: "marcadores-panorama",
          titulo: "Identifica la relación → elige la familia de conector"
        },
        {
          tipo: "tabla",
          titulo: "Pregunta clave para cada relación",
          columnas: ["Si las ideas…", "La relación es…", "Conector típico"],
          filas: [
            { tiempo: "se suman en la misma línea", correcto: "Adición",      error: "además, asimismo" },
            { tiempo: "se oponen o contrastan",      correcto: "Oposición",    error: "sin embargo, no obstante" },
            { tiempo: "una explica el motivo de la otra", correcto: "Causa",   error: "porque, ya que" },
            { tiempo: "una es el resultado de la otra", correcto: "Consecuencia", error: "por lo tanto, por eso" },
            { tiempo: "una dice lo mismo o da un caso", correcto: "Explicación", error: "es decir · por ejemplo" }
          ]
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "Antes de elegir el conector, identifica la relación lógica real — el mismo par de ideas exige conectores distintos según el sentido que se quiera dar",
          correcto: "Hizo frío; por eso encendimos la chimenea. (relación de consecuencia → conector consecutivo)",
          incorrecto: "Hizo frío; es decir, encendimos la chimenea. (no es una reformulación → conector mal elegido, el sentido se rompe)"
        }
      ]
    },
    {
      id: 37,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 / 6 — Elegir el conector",
      pregunta: "«Ahorró durante meses; ____, pudo comprar la computadora.» ¿Qué conector refleja la relación lógica correcta?",
      opciones: ["por lo tanto", "sin embargo", "por ejemplo"],
      correcta: 0,
      explicacion: "La relación es de consecuencia: ahorrar (causa) permitió comprar (resultado). El conector consecutivo «por lo tanto» es el adecuado. «Sin embargo» marcaría un contraste inexistente y «por ejemplo» una ejemplificación.",
      pasos: []
    },
    {
      id: 38,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 / 6 — Elegir el conector",
      pregunta: "«El restaurante es famoso por su comida; ____, el servicio es muy lento.» ¿Qué conector corresponde?",
      opciones: ["no obstante", "por consiguiente", "es decir"],
      correcta: 0,
      explicacion: "Hay un contraste entre una virtud (comida famosa) y un defecto (servicio lento): corresponde el adversativo «no obstante». «Por consiguiente» indicaría consecuencia y «es decir» reformulación.",
      pasos: []
    },
    {
      id: 39,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 / 6 — Elegir el conector",
      pregunta: "«La empresa es transparente; ____, publica todos sus informes financieros.» ¿Qué conector refleja la relación?",
      opciones: ["es decir", "aunque", "en primer lugar"],
      correcta: 0,
      explicacion: "La segunda idea reformula y aclara qué significa que la empresa sea «transparente»: corresponde el reformulativo «es decir». «Aunque» marcaría una concesión y «en primer lugar» un orden, relaciones que no encajan.",
      pasos: []
    },
    {
      id: 40,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 / 6 — Elegir el conector",
      pregunta: "«Se agotaron los boletos ____ la demanda fue enorme.» ¿Qué conector expresa la causa?",
      opciones: ["porque", "por eso", "además"],
      correcta: 0,
      explicacion: "La segunda idea (demanda enorme) es la causa del agotamiento de boletos: corresponde el causal «porque». «Por eso» introduciría el resultado (consecuencia) y «además» sumaría información sin relación causal.",
      pasos: []
    },
    {
      id: 41,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 / 6 — Elegir el conector",
      pregunta: "«El museo ofrece muchas actividades; ____, talleres, visitas guiadas y conciertos.» ¿Qué conector corresponde?",
      opciones: ["por ejemplo", "sin embargo", "por lo tanto"],
      correcta: 0,
      explicacion: "La segunda parte da casos concretos de las «muchas actividades»: corresponde el ejemplificativo «por ejemplo». «Sin embargo» marcaría oposición y «por lo tanto» consecuencia, relaciones inexistentes aquí.",
      pasos: []
    },
    {
      id: 42,
      tipo: "ejercicio",
      etiqueta: "Reactivo 6 / 6 — Elegir el conector",
      pregunta: "«Reciclar cuesta poco esfuerzo; ____, beneficia mucho al planeta.» ¿Qué conector enlaza las dos ideas en la misma dirección?",
      opciones: ["además", "en cambio", "porque"],
      correcta: 0,
      explicacion: "Las dos ideas suman ventajas del reciclaje (poco esfuerzo y gran beneficio): corresponde el aditivo «además». «En cambio» marcaría contraste y «porque» una causa, relaciones que no reflejan la simple suma de argumentos.",
      pasos: []
    },

    // ── Resumen ───────────────────────────────────────────────────────────────
    {
      id: 43,
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Conectores y marcadores discursivos",
      puntos: [
        { titulo: "1. Aditivos", texto: "Suman en la misma dirección: además, asimismo, también, incluso. No deben unir ideas que se contradicen." },
        { titulo: "2. Adversativos", texto: "Contrastan u oponen: pero, sin embargo, no obstante, en cambio; concesivos: aunque, a pesar de que. Exigen oposición real." },
        { titulo: "3. Causales y consecutivos", texto: "Causa: porque, ya que, puesto que. Consecuencia: por lo tanto, por eso, en consecuencia. No invertir causa y efecto." },
        { titulo: "4. Ordenadores", texto: "Organizan la secuencia: en primer lugar… a continuación… por último. El cierre va al final, no al inicio." },
        { titulo: "5. Explicativos", texto: "Reformular (es decir, o sea = decir lo mismo de otro modo) vs. ejemplificar (por ejemplo, a saber = dar un caso)." },
        { titulo: "6. Elegir el conector", texto: "Identifica primero la relación lógica entre las ideas; luego elige la familia de conector que la expresa." }
      ]
    }

  ]
};
