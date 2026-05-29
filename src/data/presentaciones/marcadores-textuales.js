// Presentación: Cohesión Textual — Marcadores textuales
// 20 slides (0-19) — Redacción Indirecta · EXANI-I

export const PRESENTACION = {
  id: "marcadores-textuales",
  titulo: "Marcadores Textuales",
  materia: "Español",
  subtema: "Redacción Indirecta",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Marcadores Textuales",
      subtitulo: "Los conectores que guían al lector en las relaciones lógicas del texto",
      etiqueta: "Español · Redacción Indirecta · EXANI-I",
    },

    // ── Introducción ──────────────────────────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Introducción",
      titulo: "¿Qué son los marcadores textuales?",
      bloques: [
        {
          tipo: "texto",
          texto: "Los marcadores textuales (también llamados conectores o marcadores del discurso) son expresiones lingüísticas que señalan las relaciones lógicas y retóricas entre fragmentos de un texto. No añaden contenido temático propio: su única función es guiar al lector en la interpretación de cómo se relacionan las ideas. El EXANI-I evalúa la capacidad de identificar qué relación establece un marcador y de elegir el marcador adecuado para una relación lógica dada.",
        },
        {
          tipo: "diagrama",
          id: "marcadores-panorama",
          titulo: "Las seis familias de marcadores textuales evaluados en el EXANI-I",
        },
        {
          tipo: "tabla",
          titulo: "Clasificación funcional de los marcadores textuales",
          columnas: ["Función", "Relación que establece", "Marcadores frecuentes"],
          filas: [
            { tiempo: "Adición",        correcto: "Acumula información",            error: "además, también, es más, incluso" },
            { tiempo: "Adversativo",    correcto: "Contrasta o limita",             error: "pero, sin embargo, aunque, no obstante" },
            { tiempo: "Causal",         correcto: "Introduce la causa",             error: "porque, ya que, puesto que, dado que" },
            { tiempo: "Consecutivo",    correcto: "Introduce la consecuencia",      error: "por lo tanto, en consecuencia, por ende" },
            { tiempo: "Temporal",       correcto: "Ordena en el tiempo o el texto", error: "primero, luego, después, finalmente" },
            { tiempo: "Reformulación",  correcto: "Aclara, resume o ilustra",       error: "es decir, en resumen, por ejemplo" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Un marcador textual no añade contenido; señala la relación — elegir el marcador equivocado invierte o destruye la lógica del texto",
          correcto: "El experimento fue diseñado con cuidado. Sin embargo, los resultados fueron inesperados. (contraste: lo inesperado contradice lo cuidadoso)",
          incorrecto: "El experimento fue diseñado con cuidado. Además, los resultados fueron inesperados. (además: suma información → los resultados inesperados no son información adicional, sino un contraste)",
        },
      ],
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Introducción",
      pregunta: "«El experimento fue cuidadosamente diseñado. ___, los resultados fueron completamente inesperados.» ¿Qué marcador establece la relación correcta?",
      opciones: [
        "Además",
        "Sin embargo",
        "Por lo tanto",
      ],
      correcta: 1,
      explicacion: "«Sin embargo» — el fragmento establece un contraste entre el cuidado del diseño y lo inesperado de los resultados. «Además» acumularía información en el mismo sentido. «Por lo tanto» introduciría una consecuencia, lo que implicaría que lo inesperado es un resultado lógico del cuidado — sentido opuesto al del texto.",
      pasos: [],
    },

    // ── Familia 1: Adición ────────────────────────────────────────────────────
    {
      id: 3,
      tipo: "regla_rica",
      etiqueta: "Familia 1 / 6 · Adición",
      titulo: "Marcadores de adición — sumar, escalar o paralelizar",
      bloques: [
        {
          tipo: "texto",
          texto: "Los marcadores de adición acumulan información: presentan un elemento nuevo que se suma a lo ya dicho. Los tres subtipos clave son: (1) adición simple: añade información de igual peso (además, también, igualmente); (2) adición escalada: añade información de mayor fuerza o importancia (es más, incluso, hasta, ni siquiera); (3) adición paralela: añade información que va en el mismo sentido que la anterior, con ligero matiz de reformulación (asimismo, del mismo modo, de igual forma). El EXANI-I evalúa la diferencia entre suma simple y escalada.",
        },
        {
          tipo: "diagrama",
          id: "marcadores-adicion",
          titulo: "Tres subtipos de adición: simple, escalada y paralela",
        },
        {
          tipo: "tabla",
          titulo: "Subtipos de marcadores de adición",
          columnas: ["Subtipo", "Marcadores", "Cuándo usarlo"],
          filas: [
            { tiempo: "Simple",   correcto: "además, también, igualmente",          error: "La segunda información tiene el mismo peso que la primera" },
            { tiempo: "Escalada", correcto: "es más, incluso, hasta, ni siquiera",  error: "La segunda información tiene más fuerza o sorprende más" },
            { tiempo: "Paralela", correcto: "asimismo, del mismo modo, de igual forma", error: "La segunda corre en paralelo, con el mismo sentido que la primera" },
          ],
        },
        {
          tipo: "par",
          etiqueta: "además vs. es más — adición simple vs. escalada",
          correcto: "El proyecto fue aprobado. Es más, fue seleccionado como el mejor del año. (es más: la segunda información supera a la primera en fuerza)",
          incorrecto: "El proyecto fue aprobado. Además, fue seleccionado como el mejor. (además funciona, pero no marca que la segunda información tiene mayor peso — pierde énfasis)",
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "además ≠ es más: «además» simplemente suma; «es más» introduce una información de mayor fuerza — intercambiarlos cambia el énfasis del texto",
          correcto: "El texto era coherente. Además, estaba bien escrito. (suma de igual peso: coherencia + buena escritura)",
          incorrecto: "El texto era coherente. Es más, estaba bien escrito. (es más implica que 'bien escrito' supera a 'coherente' → solo válido si es la condición más exigente del argumento)",
        },
      ],
    },
    {
      id: 4,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Adición",
      pregunta: "«La empresa redujo costos en el primer semestre. ___, aumentó su productividad en un 15%.» ¿Qué marcador de adición es el más adecuado?",
      opciones: [
        "Por lo tanto",
        "Además",
        "Sin embargo",
      ],
      correcta: 1,
      explicacion: "«Además» — la segunda oración añade información positiva de igual peso a la primera. No hay relación causal (los costos reducidos no causan el aumento de productividad directamente), ni contraste. «Además» es el marcador de adición simple correcto.",
      pasos: [],
    },
    {
      id: 5,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Adición escalada",
      pregunta: "«El candidato superó las pruebas de aptitud. ___, obtuvo la calificación más alta de todo el proceso.» ¿Qué marcador indica que la segunda información tiene mayor peso?",
      opciones: [
        "También",
        "Es más",
        "Igualmente",
      ],
      correcta: 1,
      explicacion: "«Es más» — introduce información que supera en fuerza o importancia a la primera: no solo superó las pruebas, sino que obtuvo la mejor calificación (dato de mayor valor). «También» e «igualmente» son adición simple: presentarían la calificación alta como información de igual peso, sin marcar que es un dato más impresionante.",
      pasos: [],
    },

    // ── Familia 2: Adversativos ────────────────────────────────────────────────
    {
      id: 6,
      tipo: "regla_rica",
      etiqueta: "Familia 2 / 6 · Adversativos",
      titulo: "Marcadores adversativos — contrastar, conceder, oponerse",
      bloques: [
        {
          tipo: "texto",
          texto: "Los marcadores adversativos introducen un contraste, una limitación o una concesión respecto a lo dicho antes. Hay cuatro subtipos: (1) contraste simple (pero, mas): el segundo elemento limita el primero; (2) concesión (aunque, a pesar de que, pese a que): el primer elemento es real pero no impide el segundo; (3) oposición fuerte (sin embargo, no obstante): introduce lo inesperado con valor formal; (4) oposición total (por el contrario, antes bien): refuta completamente lo anterior. El EXANI-I evalúa la distinción entre estos subtipos y la posición sintáctica de cada marcador.",
        },
        {
          tipo: "diagrama",
          id: "marcadores-adversativos",
          titulo: "Tipos de adversativos según su fuerza de oposición",
        },
        {
          tipo: "tabla",
          titulo: "Subtipos de marcadores adversativos",
          columnas: ["Subtipo", "Marcadores", "Posición sintáctica"],
          filas: [
            { tiempo: "Contraste simple",  correcto: "pero, mas",                              error: "Une dos cláusulas dentro de la misma oración" },
            { tiempo: "Concesión",         correcto: "aunque, a pesar de que, pese a que",     error: "Puede iniciar la oración o estar en posición media" },
            { tiempo: "Oposición fuerte",  correcto: "sin embargo, no obstante",               error: "Inicia la segunda oración independiente (punto antes)" },
            { tiempo: "Oposición total",   correcto: "por el contrario, antes bien",           error: "Inicia la segunda oración; niega o invierte lo anterior" },
          ],
        },
        {
          tipo: "par",
          etiqueta: "aunque vs. sin embargo — concesión vs. oposición fuerte",
          correcto: "Aunque el proyecto fue costoso, generó grandes beneficios. (aunque: introduce la concesión al inicio de la oración subordinada)",
          incorrecto: "Sin embargo el proyecto fue costoso, generó grandes beneficios. (sin embargo: no puede iniciar una oración subordinada — requiere punto antes y después una cláusula independiente)",
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "pero ≠ sin embargo: «pero» une dos cláusulas en la misma oración; «sin embargo» inicia una nueva oración independiente con registro más formal",
          correcto: "Estudió toda la noche. Sin embargo, no aprobó el examen. (sin embargo: inicio de oración, registro formal, punto antes)",
          incorrecto: "Estudió toda la noche sin embargo no aprobó. (sin embargo entre dos cláusulas sin punto ni puntuación adecuada — uso incorrecto; debe ser «pero» o usar punto antes)",
        },
      ],
    },
    {
      id: 7,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Adversativos",
      pregunta: "«El informe era técnicamente correcto. ___, contenía errores de formato que afectaban su presentación.» ¿Qué marcador establece la relación correcta?",
      opciones: [
        "Por lo tanto",
        "Sin embargo",
        "Además",
      ],
      correcta: 1,
      explicacion: "«Sin embargo» — se establece un contraste entre la corrección técnica y los errores de formato: lo segundo va contra lo que podría esperarse del primer fragmento. «Por lo tanto» implicaría que los errores de formato son consecuencia de la corrección técnica (sin sentido). «Además» acumularía, no contrastaría.",
      pasos: [],
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Adversativos",
      pregunta: "«___ el proyecto fue costoso, generó grandes beneficios para la comunidad.» ¿Qué marcador adversativo completa correctamente la oración?",
      opciones: [
        "Sin embargo",
        "Aunque",
        "Pero",
      ],
      correcta: 1,
      explicacion: "«Aunque» — introduce una cláusula concesiva que puede encabezar la oración: «Aunque [el proyecto fue costoso], generó grandes beneficios». «Sin embargo» no puede iniciar una oración subordinada (requiere punto antes y una cláusula independiente). «Pero» no puede encabezar la oración completa porque necesita una primera cláusula previa coordinada.",
      pasos: [],
    },

    // ── Familias 3 y 4: Causales y consecutivos ───────────────────────────────
    {
      id: 9,
      tipo: "regla_rica",
      etiqueta: "Familias 3 y 4 / 6 · Causa y consecuencia",
      titulo: "Causales y consecutivos — dirección opuesta, trampa frecuente",
      bloques: [
        {
          tipo: "texto",
          texto: "Los marcadores causales introducen la CAUSA de un resultado ya mencionado: la causa aparece DESPUÉS del marcador (porque, ya que, puesto que, dado que). Los consecutivos introducen la CONSECUENCIA de lo que se acaba de decir: la consecuencia aparece DESPUÉS del marcador (por lo tanto, en consecuencia, por ende, de ahí que, así pues). La trampa más frecuente del EXANI-I es intercambiarlos: «porque» nunca introduce una consecuencia; «por lo tanto» nunca introduce una causa.",
        },
        {
          tipo: "diagrama",
          id: "marcadores-causa-consecuencia",
          titulo: "Causales vs. consecutivos — la dirección de la lógica lo cambia todo",
        },
        {
          tipo: "tabla",
          titulo: "Causales vs. consecutivos: comparación clave",
          columnas: ["Tipo", "Marcadores", "Lo que sigue al marcador"],
          filas: [
            { tiempo: "Causal",      correcto: "porque, ya que, puesto que, dado que",              error: "La CAUSA: razón que explica el resultado previo" },
            { tiempo: "Consecutivo", correcto: "por lo tanto, en consecuencia, por ende, así pues", error: "La CONSECUENCIA: resultado que se deduce de lo previo" },
          ],
        },
        {
          tipo: "par",
          etiqueta: "la dirección del razonamiento cambia todo",
          correcto: "No pudo asistir, ya que estaba enfermo. (ya que → la causa: la enfermedad explica la ausencia — es correcto)",
          incorrecto: "Estaba enfermo. Ya que, no pudo asistir. (ya que no introduce consecuencias — usar «por lo tanto» o «por eso» para la consecuencia)",
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "ya que, puesto que, dado que = solo causales — introducen la razón, jamás el resultado; confundirlos con consecutivos invierte la lógica del párrafo",
          correcto: "El proyecto fue cancelado, puesto que no había financiamiento. (puesto que → causa: la falta de fondos explica la cancelación)",
          incorrecto: "No había financiamiento, puesto que el proyecto fue cancelado. (lógica invertida: el proyecto cancelado no puede ser la causa de la falta de fondos preexistente)",
        },
      ],
    },
    {
      id: 10,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Causales",
      pregunta: "«El puente fue cerrado al tráfico ___ presentaba grietas estructurales graves.» ¿Qué marcador causal completa la oración?",
      opciones: [
        "por lo tanto",
        "ya que",
        "sin embargo",
      ],
      correcta: 1,
      explicacion: "«ya que» — introduce la causa: las grietas estructurales explican el cierre del puente. «Por lo tanto» introduciría una consecuencia (invertiría la lógica: las grietas serían el resultado del cierre, lo cual no tiene sentido). «Sin embargo» establecería un contraste, también incorrecto.",
      pasos: [],
    },
    {
      id: 11,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Consecutivos",
      pregunta: "«La investigación demostró una correlación directa entre el factor X y el fenómeno Y. ___, se recomienda controlar dicho factor en los estudios futuros.» ¿Qué marcador establece la relación correcta?",
      opciones: [
        "Ya que",
        "En consecuencia",
        "Aunque",
      ],
      correcta: 1,
      explicacion: "«En consecuencia» — la segunda oración es el resultado lógico de lo demostrado en la primera: la correlación fundamenta la recomendación. «Ya que» introduciría una causa (implicaría que la correlación es la razón de algo ya dicho antes, no la conclusión nueva). «Aunque» establecería una concesión sin sentido en este contexto.",
      pasos: [],
    },

    // ── Familia 5: Temporales ─────────────────────────────────────────────────
    {
      id: 12,
      tipo: "regla_rica",
      etiqueta: "Familia 5 / 6 · Temporales y ordenadores",
      titulo: "Marcadores temporales — secuencia, simultaneidad y cierre",
      bloques: [
        {
          tipo: "texto",
          texto: "Los marcadores temporales y ordenadores del discurso señalan el lugar de una información dentro de una secuencia: en el tiempo (primero → luego → finalmente) o en la estructura del texto (en primer lugar → por otro lado → para concluir). El EXANI-I evalúa que la secuencia sea coherente: los marcadores de inicio, desarrollo y cierre deben usarse en el orden correspondiente. Los marcadores de simultaneidad (mientras tanto, al mismo tiempo) señalan eventos que ocurren en paralelo.",
        },
        {
          tipo: "diagrama",
          id: "marcadores-temporales",
          titulo: "Línea de tiempo de los marcadores de secuencia",
        },
        {
          tipo: "tabla",
          titulo: "Marcadores según su posición en la secuencia",
          columnas: ["Posición", "Marcadores"],
          filas: [
            { tiempo: "Inicio",          correcto: "primero, en primer lugar, para comenzar, previamente, antes de" },
            { tiempo: "Desarrollo",      correcto: "luego, después, a continuación, en segundo lugar, posteriormente" },
            { tiempo: "Cierre",          correcto: "finalmente, por último, para concluir, en último lugar" },
            { tiempo: "Simultaneidad",   correcto: "mientras tanto, al mismo tiempo, paralelamente, en ese lapso" },
          ],
        },
        {
          tipo: "par",
          etiqueta: "el orden de los marcadores debe coincidir con el orden de los eventos",
          correcto: "Primero se calentó el aceite; luego se incorporaron los ingredientes; finalmente se sirvió el platillo. (secuencia coherente: inicio → desarrollo → cierre)",
          incorrecto: "Finalmente se calentó el aceite; luego se incorporaron los ingredientes; primero se sirvió. (secuencia invertida → incoherencia lógica y textual)",
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "finalmente ≠ por fin: «finalmente» es marcador textual neutro; «por fin» expresa alivio o impaciencia — son falsos equivalentes en texto formal o académico",
          correcto: "El comité revisó los documentos. Finalmente, aprobó la propuesta. (finalmente: marcador de cierre neutro, apropiado en texto formal)",
          incorrecto: "El comité revisó los documentos. Por fin, aprobó la propuesta. (por fin: carga emocional de impaciencia → inapropiado en texto formal o académico)",
        },
      ],
    },
    {
      id: 13,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Temporales",
      pregunta: "«Las instrucciones del procedimiento son: ___ lavar las manos; ___ colocar los guantes; ___ preparar el material; ___ iniciar la intervención.» ¿Qué marcadores completan la secuencia de forma coherente?",
      opciones: [
        "Finalmente · luego · después · primero",
        "Primero · luego · después · finalmente",
        "A continuación · después · primero · por último",
      ],
      correcta: 1,
      explicacion: "«Primero · luego · después · finalmente» — es la única secuencia coherente que respeta el orden inicio → desarrollo → cierre. La opción A invierte el inicio y el cierre. La opción C coloca «primero» en el tercer lugar, lo cual es incoherente.",
      pasos: [],
    },
    {
      id: 14,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Temporales",
      pregunta: "«___ el equipo procesaba los datos, ___ otro equipo analizaba los resultados preliminares.» ¿Qué par de marcadores indica correctamente la simultaneidad?",
      opciones: [
        "Aunque · sin embargo",
        "Mientras · al mismo tiempo",
        "Porque · por lo tanto",
      ],
      correcta: 1,
      explicacion: "«Mientras · al mismo tiempo» — ambos son marcadores de simultaneidad: señalan que los dos procesos ocurren en paralelo. «Aunque · sin embargo» establecerían contraste. «Porque · por lo tanto» establecerían causa-consecuencia. Solo los marcadores de simultaneidad corresponden a la relación lógica entre las dos acciones descritas.",
      pasos: [],
    },

    // ── Familia 6: Reformulación ──────────────────────────────────────────────
    {
      id: 15,
      tipo: "regla_rica",
      etiqueta: "Familia 6 / 6 · Reformulación",
      titulo: "Marcadores de reformulación — aclarar, resumir o ilustrar",
      bloques: [
        {
          tipo: "texto",
          texto: "Los marcadores de reformulación permiten al escritor volver sobre lo dicho para aclararlo, resumirlo o ilustrarlo. Hay tres subtipos: (1) explicativos: reformulan con otras palabras sin cambiar el contenido (es decir, o sea, esto es); (2) de síntesis: condensan lo dicho en uno o más párrafos anteriores (en resumen, en síntesis, en definitiva); (3) ejemplificadores: ilustran lo dicho con un caso concreto (por ejemplo, tal como, como es el caso de). El EXANI-I evalúa que el marcador elegido corresponda exactamente al tipo de reformulación que el texto necesita.",
        },
        {
          tipo: "diagrama",
          id: "marcadores-reformulacion",
          titulo: "Tres tipos de reformulación: equivalencia · síntesis · ejemplo",
        },
        {
          tipo: "tabla",
          titulo: "Subtipos de marcadores de reformulación",
          columnas: ["Subtipo", "Marcadores", "Función"],
          filas: [
            { tiempo: "Explicativo",    correcto: "es decir, o sea, esto es",               error: "Parafrasea: misma idea con otras palabras" },
            { tiempo: "Rectificativo",  correcto: "más bien, mejor dicho, o más exactamente", error: "Corrige o precisa lo dicho anteriormente" },
            { tiempo: "Síntesis",       correcto: "en resumen, en síntesis, en definitiva",  error: "Condensa lo dicho en lo más importante" },
            { tiempo: "Ejemplificador", correcto: "por ejemplo, tal como, como es el caso",  error: "Ilustra con un caso concreto de lo general" },
          ],
        },
        {
          tipo: "par",
          etiqueta: "es decir vs. por ejemplo — paráfrasis vs. ilustración",
          correcto: "La fotosíntesis es un proceso anabólico, es decir, construye moléculas complejas a partir de simples. (es decir: reformulación equivalente — la segunda es la misma idea con otras palabras)",
          incorrecto: "La fotosíntesis es un proceso anabólico, por ejemplo, construye moléculas complejas. (por ejemplo implica que es uno entre varios casos de anabolismo — no es una paráfrasis sino una ilustración)",
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "es decir ≠ por ejemplo: «es decir» reformula la misma idea; «por ejemplo» la ilustra con un caso — son funciones distintas que el EXANI-I distingue con precisión",
          correcto: "Los herbívoros, es decir, los animales que se alimentan solo de plantas, dominan muchos ecosistemas. (es decir: la segunda parte define/parafrasea 'herbívoros')",
          incorrecto: "Los herbívoros, por ejemplo, los animales que se alimentan solo de plantas. (por ejemplo implicaría que 'los animales que solo comen plantas' es un ejemplo de herbívoros — lógica circular e incorrecta)",
        },
      ],
    },
    {
      id: 16,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Reformulación",
      pregunta: "«El experimento confirmó la hipótesis inicial. ___, los hallazgos fueron coherentes con lo que se esperaba encontrar.» ¿Qué marcador de reformulación es correcto?",
      opciones: [
        "Por ejemplo",
        "Es decir",
        "Sin embargo",
      ],
      correcta: 1,
      explicacion: "«Es decir» — la segunda oración reformula la primera con otras palabras: «confirmó la hipótesis inicial» es equivalente a «los hallazgos fueron coherentes con lo esperado». Es una paráfrasis, no un ejemplo ni un contraste. «Por ejemplo» implicaría que los hallazgos son solo un caso de muchas formas de confirmar la hipótesis. «Sin embargo» establecería un contraste que no existe.",
      pasos: [],
    },

    // ── La trampa del EXANI-I ──────────────────────────────────────────────────
    {
      id: 17,
      tipo: "regla_rica",
      etiqueta: "La trampa del EXANI-I",
      titulo: "Errores frecuentes con marcadores textuales",
      bloques: [
        {
          tipo: "texto",
          texto: "El EXANI-I evalúa cuatro trampas frecuentes: (1) confundir causa y consecuencia (porque vs. por lo tanto); (2) usar un marcador de registro inadecuado para el tipo de texto (pero en un texto académico formal, donde debería ir sin embargo); (3) confundir marcadores formalmente similares con funciones distintas (además vs. es más, es decir vs. por ejemplo); (4) usar un marcador en posición sintáctica incorrecta (sin embargo dentro de una oración coordinada, donde corresponde pero).",
        },
        {
          tipo: "tabla",
          titulo: "Las cuatro trampas del EXANI-I con marcadores",
          columnas: ["Trampa", "Error frecuente", "Corrección"],
          filas: [
            { tiempo: "Causa vs. consecuencia", correcto: "«ya que» para introducir resultado", error: "Usar «por lo tanto» o «en consecuencia» para el resultado" },
            { tiempo: "Registro inadecuado",    correcto: "«pero» en texto académico formal",   error: "Usar «sin embargo» o «no obstante» en registro formal" },
            { tiempo: "Falsos equivalentes",    correcto: "«además» cuando se necesita «es más»", error: "Identificar si hay escalada (es más) o suma simple (además)" },
            { tiempo: "Posición sintáctica",    correcto: "«sin embargo» dentro de coordinación", error: "«sin embargo» requiere punto antes; dentro de oración va «pero»" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Porque ≠ por lo tanto: invertirlos invierte la lógica — «porque» mira hacia la causa; «por lo tanto» mira hacia la consecuencia",
          correcto: "Llegó tarde porque perdió el autobús. (porque → causa: la pérdida del autobús explica la tardanza)",
          incorrecto: "Perdió el autobús porque llegó tarde. (lógica invertida: llegar tarde es la consecuencia de perder el autobús, no la causa — usar «ya que llegó tarde, perdió el autobús»)",
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "Sin embargo no puede coordinarse dentro de la misma oración — es marcador de inicio de oración independiente, no de coordinación interna",
          correcto: "El proyecto era ambicioso. Sin embargo, fue completado a tiempo. (sin embargo: inicio de oración independiente, punto antes)",
          incorrecto: "El proyecto era ambicioso sin embargo fue completado a tiempo. (sin embargo entre dos cláusulas sin puntuación adecuada → uso incorrecto; aquí corresponde «pero» o «,  pero»)",
        },
      ],
    },
    {
      id: 18,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Trampa causa/consecuencia",
      pregunta: "«El nuevo fármaco redujo los síntomas en un 80%. ___, se aprobó su uso en hospitales públicos.» ¿Qué marcador establece la relación correcta?",
      opciones: [
        "Ya que",
        "Por lo tanto",
        "Aunque",
      ],
      correcta: 1,
      explicacion: "«Por lo tanto» — la aprobación del fármaco es la consecuencia lógica de su eficacia (80% de reducción de síntomas). «Ya que» introduciría una causa (implicaría que la aprobación es la razón de la eficacia, lo cual invierte la lógica). «Aunque» establecería una concesión que contradice el sentido positivo de ambas oraciones.",
      pasos: [],
    },
    {
      id: 19,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Trampa posición sintáctica",
      pregunta: "¿Cuál de las siguientes opciones usa correctamente «sin embargo»?",
      opciones: [
        "El estudio fue extenso sin embargo llegó a conclusiones claras.",
        "El estudio fue extenso. Sin embargo, llegó a conclusiones claras.",
        "Sin embargo el estudio fue extenso llegó a conclusiones claras.",
      ],
      correcta: 1,
      explicacion: "Opción B — «sin embargo» debe iniciar una oración independiente precedida por punto: «El estudio fue extenso. Sin embargo, llegó a conclusiones claras.» La opción A coloca el marcador dentro de la oración sin la puntuación adecuada (debería ser «pero»). La opción C produce una oración agramatical.",
      pasos: [],
    },

  ],
};
