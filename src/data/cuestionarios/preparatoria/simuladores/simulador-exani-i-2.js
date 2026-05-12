// src/data/cuestionarios/preparatoria/simuladores/simulador-exani-i-2.js
// Simulador tipo EXANI-I #2 — 130 reactivos
// Estructura oficial CENEVAL (Guía para el sustentante, junio 2025):
//   Pensamiento científico   30  (reactivos   0-29)  — completo
//   Comprensión lectora      30  (reactivos  30-59)  — completo
//   Redacción indirecta      30  (reactivos  60-89)  — completo
//   Pensamiento matemático   40  (reactivos  90-129) — completo

export default {
  metadata: {
    id: "simulador-exani-i-2",
    titulo: "Simulador EXANI-I #2",
    nivel: "preparatoria",
    materia: "Simulador",
    tema: "EXANI-I",
  },
  config: { timePerQuestion: 100 },
  bloques: [
    {
      id: "pensamiento-cientifico",
      titulo: "Pensamiento Científico",
      from: 0,
      to: 29,
      cantidad: 30,
      color: "#3b9eff",
    },
    {
      id: "comprension-lectora",
      titulo: "Comprensión Lectora",
      from: 30,
      to: 59,
      cantidad: 30,
      color: "#34d399",
    },
    {
      id: "redaccion-indirecta",
      titulo: "Redacción Indirecta",
      from: 60,
      to: 89,
      cantidad: 30,
      color: "#a78bfa",
    },
    {
      id: "pensamiento-matematico",
      titulo: "Pensamiento Matemático",
      from: 90,
      to: 129,
      cantidad: 40,
      color: "#f59e0b",
    },
  ],
  questions: [

    // ═══════════════════════════════════════════════════════════════════════
    // BLOQUE 1 · PENSAMIENTO CIENTÍFICO  (reactivos 0–29)
    // ───────────────────────────────────────────────────────────────────────
    // Subárea: Identificación de variables, conceptos y procesos (0–9)
    // Subárea: Relación de temas, procesos y componentes        (10–19)
    // Subárea: Interpretación y argumentación                   (20–29)
    // Distribución de respuestas: A×10, B×10, C×10
    // ═══════════════════════════════════════════════════════════════════════

    // ── Identificación de variables, conceptos y procesos ─────────────────

    // 0 · Núcleo celular — función (B)
    {
      question: "¿Cuál es la función principal del núcleo en una célula eucariota?",
      options: [
        "Producir energía mediante la respiración celular",
        "Contener el material genético y controlar las actividades celulares",
        "Sintetizar lípidos y desintoxicar sustancias nocivas",
      ],
      correctAnswer: 1,
      explanation: "El núcleo es el centro de control de la célula: contiene el ADN con la información genética y dirige la síntesis de proteínas y la división celular. La producción de energía ocurre en las mitocondrias.",
    },

    // 1 · Sistema nervioso — neurona (A)
    {
      question: "¿Cómo se llama la célula especializada del sistema nervioso que transmite impulsos eléctricos?",
      options: [
        "Neurona",
        "Glóbulo rojo",
        "Osteocito",
      ],
      correctAnswer: 0,
      explanation: "Las neuronas son las células del sistema nervioso encargadas de recibir, procesar y transmitir información mediante señales eléctricas y químicas. Los glóbulos rojos transportan oxígeno y los osteocitos forman parte del hueso.",
    },

    // 2 · Fotosíntesis — organelo (C)
    {
      question: "¿En qué organelo de la célula vegetal se lleva a cabo la fotosíntesis?",
      options: [
        "Mitocondria",
        "Ribosoma",
        "Cloroplasto",
      ],
      correctAnswer: 2,
      explanation: "La fotosíntesis ocurre en los cloroplastos, organelos que contienen clorofila, el pigmento que capta la energía luminosa. Las mitocondrias realizan la respiración celular y los ribosomas sintetizan proteínas.",
    },

    // 3 · Enlace químico — iónico (B)
    {
      question: "¿Qué tipo de enlace químico se forma cuando un átomo transfiere electrones a otro?",
      options: [
        "Enlace covalente",
        "Enlace iónico",
        "Enlace metálico",
      ],
      correctAnswer: 1,
      explanation: "El enlace iónico se forma cuando un átomo cede electrones (quedando con carga positiva) y otro los recibe (quedando con carga negativa). El enlace covalente implica compartir electrones, no transferirlos.",
    },

    // 4 · Segunda ley de Newton (A)
    {
      question: "Según la segunda ley de Newton (F = ma), si se aplica una fuerza de 20 N a un objeto de 4 kg, ¿cuál es la aceleración resultante?",
      options: [
        "5 m/s²",
        "80 m/s²",
        "0.2 m/s²",
      ],
      correctAnswer: 0,
      explanation: "Despejando a = F/m = 20 N ÷ 4 kg = 5 m/s². La opción B invierte la operación (4×20) y la C divide al revés (4÷20).",
    },

    // 5 · Sistema endocrino (C)
    {
      question: "¿Cuál es la función principal del sistema endocrino?",
      options: [
        "Transportar oxígeno y nutrientes por el cuerpo mediante la sangre",
        "Filtrar la sangre y eliminar desechos a través de la orina",
        "Producir y secretar hormonas que regulan diversas funciones corporales",
      ],
      correctAnswer: 2,
      explanation: "El sistema endocrino está formado por glándulas (como la tiroides, el páncreas y las suprarrenales) que secretan hormonas hacia la sangre para regular el metabolismo, el crecimiento, la reproducción y el equilibrio interno.",
    },

    // 6 · Temperatura vs calor (B)
    {
      question: "¿Cuál es la diferencia principal entre temperatura y calor?",
      options: [
        "La temperatura mide la energía total de un cuerpo; el calor mide el movimiento de sus partículas",
        "La temperatura mide el promedio de energía cinética de las partículas de un cuerpo; el calor es la energía que se transfiere entre cuerpos por diferencia de temperatura",
        "Temperatura y calor son términos equivalentes que describen el mismo fenómeno físico",
      ],
      correctAnswer: 1,
      explanation: "La temperatura es una propiedad intensiva que expresa la energía cinética promedio de las partículas. El calor es energía en tránsito: solo existe cuando fluye de un cuerpo más caliente a uno más frío.",
    },

    // 7 · Mezclas homogéneas vs heterogéneas (A)
    {
      question: "¿Cuál de los siguientes ejemplos corresponde a una mezcla homogénea?",
      options: [
        "Agua con sal (solución salina)",
        "Ensalada de frutas",
        "Agua con arena",
      ],
      correctAnswer: 0,
      explanation: "En una mezcla homogénea (solución), los componentes no son distinguibles a simple vista y la composición es uniforme en toda la muestra. El agua con sal es una solución; las otras dos son mezclas heterogéneas donde se distinguen los componentes.",
    },

    // 8 · Compuesto químico — definición (C)
    {
      question: "¿Cuál de las siguientes afirmaciones describe correctamente a un compuesto químico?",
      options: [
        "Sustancia formada por un solo tipo de átomo que no puede dividirse por métodos físicos",
        "Combinación de dos o más sustancias que conservan sus propiedades individuales",
        "Sustancia formada por dos o más elementos unidos químicamente en proporciones fijas",
      ],
      correctAnswer: 2,
      explanation: "Un compuesto químico está formado por átomos de diferentes elementos unidos en proporciones fijas mediante enlaces químicos (ej. H₂O). La opción A describe un elemento; la B describe una mezcla.",
    },

    // 9 · Sistema digestivo — intestino delgado (B)
    {
      question: "¿Cuál es la función principal del intestino delgado en el proceso digestivo?",
      options: [
        "Producir los jugos gástricos que descomponen las proteínas",
        "Absorber los nutrientes provenientes de los alimentos digeridos",
        "Almacenar los desechos antes de su eliminación del organismo",
      ],
      correctAnswer: 1,
      explanation: "El intestino delgado es el principal sitio de absorción de nutrientes: sus vellosidades intestinales aumentan la superficie de contacto para absorber carbohidratos, proteínas, lípidos y vitaminas hacia la sangre. Los jugos gástricos se producen en el estómago.",
    },

    // ── Relación de temas, procesos y componentes ─────────────────────────

    // 10 · Ciclo del nitrógeno (A)
    {
      question: "¿Qué proceso permite que las plantas absorban nitrógeno del suelo en una forma que puedan aprovechar?",
      options: [
        "La fijación del nitrógeno realizada por bacterias del suelo que convierten N₂ en amonio",
        "La evaporación del nitrógeno gaseoso desde las hojas hacia la atmósfera",
        "La fotosíntesis, mediante la cual las plantas toman nitrógeno directamente del CO₂",
      ],
      correctAnswer: 0,
      explanation: "Las plantas no pueden usar el nitrógeno atmosférico (N₂) directamente. Bacterias fijadoras de nitrógeno (como Rhizobium) lo convierten en amonio (NH₄⁺) o nitratos (NO₃⁻), formas que las raíces pueden absorber.",
    },

    // 11 · Relaciones ecológicas — parasitismo (C)
    {
      question: "¿Cómo se llama la relación ecológica en la que un organismo (parásito) se beneficia mientras el otro (huésped) resulta perjudicado?",
      options: [
        "Mutualismo",
        "Comensalismo",
        "Parasitismo",
      ],
      correctAnswer: 2,
      explanation: "En el parasitismo un organismo vive a expensas de otro causándole daño (ej. pulgas y su huésped). El mutualismo beneficia a ambos; el comensalismo beneficia a uno sin afectar al otro.",
    },

    // 12 · Meiosis vs mitosis (B)
    {
      question: "¿Cuál es la principal diferencia entre mitosis y meiosis?",
      options: [
        "La mitosis produce cuatro células haploides; la meiosis produce dos células diploides idénticas a la original",
        "La mitosis produce dos células diploides idénticas a la original; la meiosis produce cuatro células haploides con variación genética",
        "La mitosis ocurre solo en células reproductoras; la meiosis ocurre en todas las células somáticas",
      ],
      correctAnswer: 1,
      explanation: "La mitosis (división para crecimiento/reparación) produce 2 células diploides (2n) idénticas. La meiosis (división para reproducción sexual) produce 4 células haploides (n) con variación genética debida al entrecruzamiento.",
    },

    // 13 · Variación genética y evolución (A)
    {
      question: "¿Por qué la variación genética dentro de una población es fundamental para la evolución?",
      options: [
        "Porque proporciona la diversidad sobre la que actúa la selección natural, permitiendo que algunos individuos sobrevivan mejor en condiciones cambiantes",
        "Porque garantiza que todos los individuos de una especie sean idénticos y puedan reproducirse con éxito",
        "Porque impide que los organismos se adapten a nuevos entornos, favoreciendo la estabilidad de la especie",
      ],
      correctAnswer: 0,
      explanation: "La selección natural solo puede actuar si existen diferencias entre individuos. La variación genética asegura que algunos individuos tengan rasgos más ventajosos en un ambiente dado, aumentando su probabilidad de sobrevivir y reproducirse.",
    },

    // 14 · Reacciones exotérmicas vs endotérmicas (C)
    {
      question: "¿Cuál de los siguientes es un ejemplo de reacción exotérmica?",
      options: [
        "La fotosíntesis, en la que las plantas convierten energía luminosa en glucosa",
        "La electrólisis del agua, que separa H₂ y O₂ usando electricidad",
        "La combustión de la madera, que libera calor y luz hacia el entorno",
      ],
      correctAnswer: 2,
      explanation: "Las reacciones exotérmicas liberan energía hacia el entorno (generalmente en forma de calor). La combustión es el ejemplo clásico. La fotosíntesis y la electrólisis son endotérmicas: requieren aporte de energía.",
    },

    // 15 · Sistema solar — planetas jovianos (B)
    {
      question: "¿Qué característica distingue a los planetas jovianos (gigantes gaseosos) de los planetas terrestres?",
      options: [
        "Los planetas jovianos tienen superficies sólidas y se ubican más cerca del Sol que los terrestres",
        "Los planetas jovianos son de gran tamaño, composición principalmente gaseosa y poseen numerosas lunas y anillos",
        "Los planetas jovianos tienen mayor densidad media y menos masa que los planetas terrestres",
      ],
      correctAnswer: 1,
      explanation: "Los planetas jovianos (Júpiter, Saturno, Urano, Neptuno) son gigantescos, están compuestos principalmente de hidrógeno y helio, carecen de superficie sólida definida y tienen muchas lunas. Los terrestres (Mercurio, Venus, Tierra, Marte) son pequeños, rocosos y densos.",
    },

    // 16 · Pirámide de energía trófica (A)
    {
      question: "En una pirámide de energía, ¿por qué disminuye la cantidad de energía disponible en cada nivel trófico superior?",
      options: [
        "Porque en cada nivel se pierde energía en forma de calor durante el metabolismo de los organismos",
        "Porque los organismos de niveles superiores son más grandes y ocupan más espacio en el ecosistema",
        "Porque la energía solar disminuye con la altitud y los organismos superiores viven más lejos del suelo",
      ],
      correctAnswer: 0,
      explanation: "Solo alrededor del 10% de la energía de un nivel trófico se transfiere al siguiente; el resto se disipa como calor en los procesos metabólicos. Por eso las cadenas alimentarias tienen pocos eslabones y los depredadores superiores son escasos.",
    },

    // 17 · Genotipo vs fenotipo (C)
    {
      question: "¿Cuál es la diferencia entre genotipo y fenotipo?",
      options: [
        "El genotipo es la apariencia observable de un organismo; el fenotipo es el conjunto de sus genes",
        "Genotipo y fenotipo son términos sinónimos que describen las características hereditarias de un organismo",
        "El genotipo es la información genética de un organismo; el fenotipo es la expresión observable de esa información",
      ],
      correctAnswer: 2,
      explanation: "El genotipo es el conjunto de alelos que posee un organismo (ej. Aa). El fenotipo es la característica observable resultante de la interacción entre el genotipo y el ambiente (ej. color de ojos). Las opciones A y B invierten o confunden los conceptos.",
    },

    // 18 · Cambios físicos vs químicos (B)
    {
      question: "¿Cuál de las siguientes opciones es un ejemplo de cambio químico?",
      options: [
        "Fundir un cubo de hielo para obtener agua líquida",
        "La oxidación del hierro que produce óxido de hierro (herrumbre)",
        "Disolver sal en agua para preparar una solución salina",
      ],
      correctAnswer: 1,
      explanation: "Un cambio químico produce nuevas sustancias con propiedades diferentes a las originales. La herrumbre (Fe₂O₃) es una nueva sustancia. Fundir hielo y disolver sal son cambios físicos: la composición química del agua y la sal no cambia.",
    },

    // 19 · Espectro electromagnético (A)
    {
      question: "¿Cuál de las siguientes afirmaciones sobre el espectro electromagnético es correcta?",
      options: [
        "La luz visible es solo una pequeña porción del espectro, que también incluye rayos X, luz ultravioleta, infrarrojo y ondas de radio",
        "Las ondas de radio tienen mayor frecuencia y menor longitud de onda que los rayos gamma",
        "Todas las ondas electromagnéticas viajan a velocidades distintas según su frecuencia",
      ],
      correctAnswer: 0,
      explanation: "El espectro electromagnético abarca desde las ondas de radio (baja frecuencia, larga longitud de onda) hasta los rayos gamma (alta frecuencia, corta longitud de onda). La luz visible es una banda muy estrecha de ese espectro. Todas las ondas EM viajan a la misma velocidad en el vacío (c ≈ 3×10⁸ m/s).",
    },

    // ── Interpretación y argumentación ────────────────────────────────────

    // 20 · Variable independiente — experimento (C)
    {
      question: "Una investigadora quiere saber si la temperatura afecta la velocidad de germinación de semillas. Planta 50 semillas idénticas a 10 °C y otras 50 a 25 °C, con las demás condiciones iguales. ¿Cuál es la variable independiente?",
      options: [
        "El número de semillas utilizadas en cada grupo",
        "La velocidad de germinación de las semillas",
        "La temperatura a la que se colocan las semillas",
      ],
      correctAnswer: 2,
      explanation: "La variable independiente es la que el investigador manipula deliberadamente. En este experimento, la investigadora controla la temperatura (10°C vs 25°C). La velocidad de germinación es la variable dependiente (la que se mide).",
    },

    // 21 · Gráfica — cambio de estado (B)
    {
      question: "Una gráfica muestra la temperatura de una sustancia en función del tiempo mientras se le aplica calor constante. En un tramo la temperatura permanece fija a 100 °C durante varios minutos. ¿Qué proceso ocurre en ese tramo?",
      options: [
        "La sustancia se enfría y libera energía hacia el ambiente",
        "La sustancia experimenta un cambio de estado (ebullición), absorbiendo calor sin aumentar su temperatura",
        "La temperatura constante indica que se dejó de aplicar calor en ese momento",
      ],
      correctAnswer: 1,
      explanation: "Durante un cambio de estado (en este caso ebullición a 100 °C para el agua), la energía suministrada se invierte en romper las fuerzas entre moléculas, no en aumentar la temperatura. Por eso la gráfica muestra una meseta horizontal.",
    },

    // 22 · Interpretación de datos — concentración óptima (A)
    {
      question: "Una tabla de datos muestra que conforme aumenta la concentración de un fertilizante, la altura de las plantas crece hasta cierto punto y después disminuye. ¿Qué conclusión es válida?",
      options: [
        "Existe una concentración óptima de fertilizante; por encima de ella, el exceso resulta perjudicial para las plantas",
        "El fertilizante siempre beneficia a las plantas, independientemente de la concentración utilizada",
        "La altura de las plantas depende únicamente de la cantidad de luz solar, no del fertilizante",
      ],
      correctAnswer: 0,
      explanation: "Los datos muestran una relación no lineal: el fertilizante mejora el crecimiento hasta un límite, pero en exceso puede causar estrés osmótico o toxicidad. La conclusión válida reconoce tanto el beneficio como el límite mostrado por los datos.",
    },

    // 23 · Grupo control (C)
    {
      question: "En un experimento para probar si un nuevo antibiótico elimina bacterias, un grupo recibe el antibiótico y otro no recibe ningún tratamiento. ¿Qué nombre recibe el grupo sin tratamiento?",
      options: [
        "Grupo experimental",
        "Grupo de variables",
        "Grupo control",
      ],
      correctAnswer: 2,
      explanation: "El grupo control no recibe el tratamiento que se está probando; sirve como referencia para comparar los resultados. El grupo experimental sí recibe el tratamiento (el antibiótico). Sin grupo control no es posible atribuir los resultados al tratamiento.",
    },

    // 24 · Ley de Boyle — presión y volumen (B)
    {
      question: "Un experimento mide la presión de un gas a temperatura constante mientras se reduce su volumen. Al reducir el volumen a la mitad, la presión se duplica. ¿Cuál es la conclusión correcta?",
      options: [
        "La presión y el volumen de un gas son directamente proporcionales a temperatura constante",
        "La presión y el volumen de un gas son inversamente proporcionales a temperatura constante",
        "La temperatura del gas aumenta automáticamente cuando se reduce su volumen",
      ],
      correctAnswer: 1,
      explanation: "Estos resultados corresponden a la Ley de Boyle: P × V = constante (a temperatura constante). Si el volumen se reduce a la mitad, la presión se duplica: relación inversamente proporcional.",
    },

    // 25 · Causa directa en experimento (A)
    {
      question: "Un estudio muestra que plantas expuestas a 12 horas de luz producen el doble de flores que las expuestas a 6 horas, manteniendo constantes temperatura, agua y suelo. ¿Cuál es la causa directa del mayor número de flores?",
      options: [
        "El mayor tiempo de exposición a la luz",
        "La temperatura del ambiente durante el experimento",
        "El tipo de suelo utilizado en el cultivo",
      ],
      correctAnswer: 0,
      explanation: "La única variable que cambió entre los dos grupos fue el tiempo de exposición a la luz. Dado que todas las demás condiciones se mantuvieron constantes, la causa directa de la diferencia en la floración es la duración del fotoperiodo.",
    },

    // 26 · Evaluación de hipótesis con datos (C)
    {
      question: "Un estudiante plantea: «Si agrego más azúcar al agua, la solución se volverá más densa.» Mide la densidad a distintas concentraciones y obtiene que, efectivamente, la densidad aumenta con la concentración. ¿Qué puede concluirse?",
      options: [
        "La hipótesis fue refutada porque la densidad no depende de la cantidad de soluto",
        "No es posible concluir nada porque el experimento no incluyó grupo control",
        "Los resultados son consistentes con la hipótesis; queda apoyada, aunque no probada de manera definitiva",
      ],
      correctAnswer: 2,
      explanation: "En ciencia, los datos no 'prueban' una hipótesis en sentido absoluto; la apoyan o la refutan. Como los resultados coinciden con lo predicho, la hipótesis queda apoyada y puede seguir siendo probada con más experimentos.",
    },

    // 27 · Servicios ecosistémicos de regulación (B)
    {
      question: "¿Cuál de las siguientes opciones es un ejemplo de servicio ecosistémico de regulación?",
      options: [
        "La extracción de madera de los bosques para su uso en construcción",
        "La purificación natural del agua a través de los humedales",
        "El turismo de naturaleza en áreas protegidas",
      ],
      correctAnswer: 1,
      explanation: "Los servicios de regulación son los beneficios que los ecosistemas proveen al regular procesos naturales: purificación del agua, control de inundaciones, polinización, captura de carbono. La extracción de madera es un servicio de provisión; el turismo es un servicio cultural.",
    },

    // 28 · Contaminación del agua por nitratos (A)
    {
      question: "¿Cuál es la principal fuente de contaminación del agua por nitratos en regiones agrícolas?",
      options: [
        "El uso excesivo de fertilizantes que se filtran hacia acuíferos y cuerpos de agua superficiales",
        "Las emisiones de vehículos automotores que se depositan en cuerpos de agua cercanos",
        "La erosión de suelos rocosos que libera minerales naturales al agua",
      ],
      correctAnswer: 0,
      explanation: "El exceso de fertilizantes nitrogenados en campos agrícolas se lixivia hacia el suelo y alcanza acuíferos y ríos, provocando eutrofización (proliferación de algas que agota el oxígeno). Este proceso se llama escorrentía agrícola.",
    },

    // 29 · Biotecnología — CRISPR (C)
    {
      question: "¿Cuál de las siguientes describe correctamente la técnica CRISPR-Cas9?",
      options: [
        "Un tipo de microscopio de alta resolución que permite visualizar el interior del núcleo celular",
        "Una vacuna de ARN mensajero que estimula la respuesta inmune sin usar el patógeno completo",
        "Una herramienta de edición genética que permite cortar y modificar secuencias específicas de ADN con gran precisión",
      ],
      correctAnswer: 2,
      explanation: "CRISPR-Cas9 es un sistema de edición genética derivado de un mecanismo de defensa bacteriano. Permite localizar y cortar secuencias específicas de ADN, facilitando la corrección de genes defectuosos o la investigación de funciones génicas. Las vacunas de ARNm son una tecnología distinta.",
    },

    // ═══════════════════════════════════════════════════════════════════════
    // BLOQUE 2 · COMPRENSIÓN LECTORA  (reactivos 30–59)
    // ───────────────────────────────────────────────────────────────────────
    // Ámbito de estudio        — Textos A, B, C  (30–41)
    // Ámbito literario         — Textos D, E, F  (42–53)
    // Ámbito participación social — Textos G, H  (54–59)
    // Distribución de respuestas: A×10, B×10, C×10
    // ═══════════════════════════════════════════════════════════════════════

    // ── TEXTO A · Artículo de divulgación — Inteligencia artificial ───────
    // (Reactivos 30–33: identificación ×2, interpretación, evaluación)

    // 30 · Identificación de información (A)
    {
      question: "Lee el siguiente texto y responde.<br><br>«La inteligencia artificial (IA) es un campo de la informática que busca desarrollar sistemas capaces de realizar tareas que requieren inteligencia humana: reconocimiento de imágenes, traducción automática y toma de decisiones. En las últimas décadas, el aprendizaje automático ha transformado la IA: en lugar de programar reglas explícitas, los sistemas aprenden de grandes conjuntos de datos. Esta revolución presenta beneficios —diagnóstico médico más preciso, automatización industrial— pero también desafíos: desplazamiento laboral, sesgos algorítmicos y dilemas sobre privacidad. Los expertos coinciden en que la regulación internacional y la alfabetización digital son herramientas clave para aprovecharla de manera responsable.»<br><br>¿Qué es el aprendizaje automático según el texto?",
      options: [
        "Un método en el que los sistemas aprenden de grandes conjuntos de datos en lugar de seguir reglas explícitas programadas",
        "Un proceso por el cual los humanos enseñan manualmente a las máquinas a reconocer imágenes",
        "Una técnica para traducir idiomas mediante diccionarios digitales actualizados en tiempo real",
      ],
      correctAnswer: 0,
      explanation: "El texto define el aprendizaje automático como el método por el que «en lugar de programar reglas explícitas, los sistemas aprenden de grandes conjuntos de datos.» Las otras opciones no corresponden a esa definición.",
    },

    // 31 · Identificación de información (B)
    {
      question: "Con base en el texto sobre inteligencia artificial:<br><br>«Esta revolución presenta beneficios —diagnóstico médico más preciso, automatización industrial— pero también desafíos: desplazamiento laboral, sesgos algorítmicos y dilemas sobre privacidad y autonomía. Los expertos coinciden en que la regulación internacional y la alfabetización digital son herramientas clave.»<br><br>¿Cuál de los siguientes menciona el texto como un desafío de la IA?",
      options: [
        "La dificultad técnica para procesar grandes cantidades de datos",
        "Los sesgos algorítmicos y los dilemas éticos sobre privacidad",
        "La incapacidad de los sistemas de IA para realizar diagnósticos médicos",
      ],
      correctAnswer: 1,
      explanation: "El texto menciona explícitamente como desafíos: «desplazamiento laboral, sesgos algorítmicos y dilemas sobre privacidad.» La opción C contradice el texto, que señala el diagnóstico médico como un beneficio.",
    },

    // 32 · Interpretación (C)
    {
      question: "De acuerdo con el texto sobre inteligencia artificial:<br><br>«Los expertos coinciden en que la regulación internacional y la alfabetización digital son herramientas clave para aprovechar la IA de manera responsable.»<br><br>¿Qué inferencia válida puede hacerse sobre la regulación de la IA?",
      options: [
        "La regulación es innecesaria porque la IA no representa riesgos reales para la sociedad",
        "La regulación ya está completamente implementada a nivel internacional",
        "Sin regulación adecuada, los beneficios de la IA podrían verse opacados por sus riesgos sociales y éticos",
      ],
      correctAnswer: 2,
      explanation: "Si los expertos señalan la regulación como una «herramienta clave» para usar la IA «de manera responsable», se infiere que sin ella los riesgos —desplazamiento, sesgos, privacidad— no se gestionarían adecuadamente. Las opciones A y B contradicen el planteamiento del texto.",
    },

    // 33 · Evaluación del propósito (A)
    {
      question: "A partir del texto sobre inteligencia artificial:<br><br>«La IA presenta beneficios significativos pero también desafíos. Los expertos coinciden en que la regulación internacional y la alfabetización digital son herramientas clave para aprovecharla de manera responsable.»<br><br>¿Cuál es el propósito principal del texto?",
      options: [
        "Presentar de manera equilibrada los beneficios y desafíos de la IA y señalar medidas para su uso responsable",
        "Argumentar que la IA representa una amenaza inevitable e irreversible para el empleo humano",
        "Narrar la historia del desarrollo de la informática desde sus inicios hasta la actualidad",
      ],
      correctAnswer: 0,
      explanation: "El texto expone tanto beneficios como desafíos de la IA y concluye con propuestas (regulación, alfabetización digital), lo que indica un propósito informativo-argumentativo equilibrado. No es catastrofista ni narrativo.",
    },

    // ── TEXTO B · Ensayo académico — Ciudades y cambio climático ──────────
    // (Reactivos 34–37: identificación ×2, interpretación, evaluación)

    // 34 · Identificación de información (B)
    {
      question: "Lee el siguiente texto y responde.<br><br>«Las ciudades son responsables de aproximadamente el 70% de las emisiones globales de CO₂, a pesar de ocupar apenas el 2% de la superficie terrestre. Sin embargo, también pueden ser parte de la solución: la densificación urbana reduce la dependencia del automóvil, los edificios eficientes disminuyen el consumo energético y los espacios verdes absorben carbono y mitigan el efecto de isla de calor. Ciudades como Copenhague, Medellín y Singapur han implementado políticas de movilidad sostenible con resultados medibles. La clave está en planificar ciudades compactas, conectadas y verdes, donde la infraestructura favorezca la caminata, la bicicleta y el transporte público sobre el vehículo privado.»<br><br>Según el texto, ¿qué porcentaje de las emisiones globales de CO₂ producen las ciudades?",
      options: [
        "El 2%",
        "El 70%",
        "El 50%",
      ],
      correctAnswer: 1,
      explanation: "El texto afirma explícitamente que las ciudades «son responsables de aproximadamente el 70% de las emisiones globales de CO₂». El 2% corresponde a la superficie terrestre que ocupan, no a las emisiones.",
    },

    // 35 · Identificación de información (C)
    {
      question: "Con base en el texto sobre ciudades y cambio climático:<br><br>«Los edificios eficientes disminuyen el consumo energético y los espacios verdes absorben carbono y mitigan el efecto de isla de calor.»<br><br>¿Cuál de los siguientes beneficios de los espacios verdes menciona el texto?",
      options: [
        "Aumentar la densidad de población en zonas urbanas",
        "Reducir directamente la dependencia del automóvil en las ciudades",
        "Absorber carbono y mitigar el efecto de isla de calor",
      ],
      correctAnswer: 2,
      explanation: "El texto menciona explícitamente que los espacios verdes «absorben carbono y mitigan el efecto de isla de calor». La reducción de la dependencia del automóvil se atribuye a la densificación urbana, no a los espacios verdes.",
    },

    // 36 · Interpretación (A)
    {
      question: "De acuerdo con el texto sobre ciudades y cambio climático:<br><br>«Ciudades como Copenhague, Medellín y Singapur han implementado políticas de movilidad sostenible con resultados medibles.»<br><br>¿Qué inferencia válida puede hacerse a partir de estos ejemplos?",
      options: [
        "Es posible implementar políticas de movilidad sostenible en ciudades de distintos contextos y obtener resultados concretos",
        "Solo las ciudades europeas tienen la capacidad de aplicar políticas de movilidad sostenible con éxito",
        "Las ciudades latinoamericanas no tienen las condiciones económicas para reducir sus emisiones de CO₂",
      ],
      correctAnswer: 0,
      explanation: "Los tres ejemplos provienen de continentes distintos (Europa, América Latina, Asia), lo que permite inferir que las políticas sostenibles no están limitadas a un contexto geográfico o económico específico. Las opciones B y C contradicen el ejemplo de Medellín.",
    },

    // 37 · Evaluación de la postura (B)
    {
      question: "A partir del texto sobre ciudades y cambio climático:<br><br>«Las ciudades son responsables del 70% de las emisiones globales de CO₂, pero también pueden ser parte de la solución [...] planificando ciudades compactas, conectadas y verdes.»<br><br>¿Cuál es la postura del autor respecto a las ciudades y el cambio climático?",
      options: [
        "Las ciudades son el principal problema ambiental y no tienen solución a corto plazo",
        "Las ciudades, aunque importantes fuentes de emisiones, también pueden liderar soluciones al cambio climático",
        "El cambio climático es un problema que las ciudades no tienen responsabilidad de resolver",
      ],
      correctAnswer: 1,
      explanation: "El texto reconoce la responsabilidad de las ciudades en las emisiones (problema), pero inmediatamente señala que «también pueden ser parte de la solución». La estructura adversativa «sin embargo» marca esta postura equilibrada y propositiva.",
    },

    // ── TEXTO C · Informe — Salud mental en jóvenes ───────────────────────
    // (Reactivos 38–41: identificación ×2, interpretación, evaluación)

    // 38 · Identificación de información (C)
    {
      question: "Lee el siguiente texto y responde.<br><br>«La Organización Mundial de la Salud estima que el 50% de los trastornos mentales comienzan antes de los 14 años y el 75% antes de los 24. A pesar de ello, la brecha de tratamiento en América Latina supera el 80%: la mayoría de quienes necesitan atención no la reciben. Los factores son múltiples: estigma social, escasez de profesionales, altos costos y falta de políticas públicas integrales. Las intervenciones tempranas —programas escolares de salud emocional, psicólogos en centros comunitarios— han demostrado reducir costos a largo plazo y mejorar la calidad de vida. Invertir en salud mental no es un gasto, sino una inversión con retorno social comprobado.»<br><br>Según la OMS, ¿qué porcentaje de los trastornos mentales comienza antes de los 14 años?",
      options: [
        "El 75%",
        "El 80%",
        "El 50%",
      ],
      correctAnswer: 2,
      explanation: "El texto indica que «el 50% de los trastornos mentales comienzan antes de los 14 años». El 75% corresponde a los que inician antes de los 24 años; el 80% es la brecha de tratamiento en América Latina.",
    },

    // 39 · Identificación de información (A)
    {
      question: "Con base en el texto sobre salud mental en jóvenes:<br><br>«La brecha de tratamiento en América Latina supera el 80%. Los factores son múltiples: estigma social, escasez de profesionales, altos costos y falta de políticas públicas integrales.»<br><br>¿Cuál de los siguientes factores menciona el texto como causa de la brecha de tratamiento?",
      options: [
        "El estigma social y la escasez de profesionales de salud mental",
        "La falta de interés de los jóvenes en recibir atención psicológica",
        "El exceso de oferta de servicios de salud mental en la región",
      ],
      correctAnswer: 0,
      explanation: "El texto señala explícitamente: «estigma social, escasez de profesionales, altos costos y falta de políticas públicas integrales». Las opciones B y C no aparecen en el texto y la C contradice la realidad descrita.",
    },

    // 40 · Interpretación (B)
    {
      question: "De acuerdo con el texto sobre salud mental:<br><br>«Las intervenciones tempranas han demostrado reducir costos a largo plazo y mejorar la calidad de vida. Invertir en salud mental no es un gasto, sino una inversión con retorno social comprobado.»<br><br>¿Qué inferencia válida puede hacerse a partir de esta afirmación?",
      options: [
        "El texto sugiere que la salud mental debe financiarse exclusivamente con recursos privados",
        "Los programas de salud mental generan beneficios económicos y sociales que justifican su financiamiento",
        "El retorno de la inversión en salud mental es inmediato y se mide en términos puramente económicos",
      ],
      correctAnswer: 1,
      explanation: "La frase «retorno social comprobado» y la evidencia de que las intervenciones «reducen costos a largo plazo» permiten inferir que el financiamiento en salud mental es justificable por sus beneficios. La opción A no tiene base en el texto; la C reduce el retorno a lo económico inmediato, contradiciendo «a largo plazo».",
    },

    // 41 · Evaluación del propósito (C)
    {
      question: "A partir del texto sobre salud mental en jóvenes:<br><br>«El 50% de los trastornos mentales comienzan antes de los 14 años. La brecha de tratamiento supera el 80%. Las intervenciones tempranas reducen costos y mejoran la calidad de vida. Invertir en salud mental no es un gasto, sino una inversión.»<br><br>¿Cuál es el propósito principal de este texto?",
      options: [
        "Describir los síntomas más frecuentes de los trastornos mentales en adolescentes",
        "Narrar la experiencia personal de un joven que recibió atención psicológica",
        "Argumentar a favor de invertir en salud mental juvenil mediante datos y evidencia sobre su impacto",
      ],
      correctAnswer: 2,
      explanation: "El texto usa datos de la OMS, estadísticas de la brecha de tratamiento y evidencia de intervenciones para apoyar la tesis final: invertir en salud mental es necesario. Es un texto argumentativo-expositivo, no descriptivo ni narrativo.",
    },

    // ── TEXTO D · Cuento — «El jardín del abuelo» ─────────────────────────
    // (Reactivos 42–45: identificación, interpretación ×2, evaluación)

    // 42 · Identificación de información (A)
    {
      question: "Lee el siguiente cuento y responde.<br><br>«El abuelo sembraba cada mañana aunque sabía que no vería florecer lo que plantaba. Sus nietos no entendían esa terquedad silenciosa: ¿para qué sembrar si ya no quedaría aquí para verlo? Una tarde, el menor se atrevió a preguntarlo. El abuelo clavó la pala en la tierra, lo miró y respondió: «Yo estoy aquí porque alguien que no me conoció sembró este árbol.» El niño miró el árbol enorme que daba sombra al jardín y, por primera vez, sintió el peso dulce de lo que otros le habían dado sin pedirle nada a cambio.»<br><br>¿Qué responde el abuelo cuando el nieto le pregunta por qué sigue sembrando?",
      options: [
        "Que él está ahí gracias a que alguien que no lo conoció sembró el árbol que da sombra al jardín",
        "Que sembrar es la única actividad que le da sentido a su vejez y lo mantiene saludable",
        "Que espera vivir lo suficiente para ver florecer lo que planta",
      ],
      correctAnswer: 0,
      explanation: "El abuelo responde exactamente: «Yo estoy aquí porque alguien que no me conoció sembró este árbol.» Las opciones B y C no aparecen en el texto; la C incluso contradice la premisa del cuento (el abuelo sabe que no verá florecer lo que planta).",
    },

    // 43 · Interpretación — tema central (B)
    {
      question: "Con base en el cuento «El jardín del abuelo»:<br><br>«El abuelo sembraba aunque sabía que no vería florecer lo que plantaba. \'Yo estoy aquí porque alguien que no me conoció sembró este árbol.\'»<br><br>¿Cuál es el tema central del cuento?",
      options: [
        "La importancia del trabajo físico en la vejez para mantener la salud",
        "La solidaridad intergeneracional: actuar en beneficio de quienes vendrán después",
        "La tristeza del abuelo ante la certeza de su muerte próxima",
      ],
      correctAnswer: 1,
      explanation: "El cuento gira en torno a sembrar para otros, no para uno mismo. La respuesta del abuelo establece una cadena de generosidad entre generaciones que no se conocen. El tema no es la vejez ni la tristeza, sino el acto de dar sin esperar retorno.",
    },

    // 44 · Interpretación — frase significativa (C)
    {
      question: "A partir del cuento «El jardín del abuelo»:<br><br>«El niño sintió el peso dulce de lo que otros le habían dado sin pedirle nada a cambio.»<br><br>¿Qué significa esta frase?",
      options: [
        "Que el niño siente culpa por no haber ayudado a su abuelo con las labores del jardín",
        "Que el árbol es físicamente pesado y su sombra resulta agobiante en verano",
        "Que el niño comprende la deuda de gratitud que tiene con quienes le precedieron sin conocerlo",
      ],
      correctAnswer: 2,
      explanation: "«Peso dulce» es una paradoja que expresa algo que tiene cierta carga emocional pero que es bienvenida. El niño comprende que vive bajo la sombra de acciones ajenas hechas con generosidad, y eso le genera gratitud. Las opciones A y B interpretan la frase de manera literal o incorrecta.",
    },

    // 45 · Evaluación — actitud de los nietos (A)
    {
      question: "De acuerdo con el cuento «El jardín del abuelo»:<br><br>«Sus nietos no entendían esa terquedad silenciosa: ¿para qué sembrar si ya no quedaría aquí para verlo?»<br><br>¿Por qué los nietos no comprendían la actitud del abuelo al inicio del cuento?",
      options: [
        "Porque pensaban en términos inmediatos y no comprendían el valor de actuar para el futuro",
        "Porque el abuelo nunca les había explicado la historia del árbol que da sombra al jardín",
        "Porque el jardín era demasiado pequeño para que valiera la pena seguir sembrando en él",
      ],
      correctAnswer: 0,
      explanation: "La pregunta de los nietos («¿para qué... si ya no quedaría aquí?») revela una visión centrada en el beneficio inmediato y personal. No conciben actuar sin recibir la recompensa directa. La comprensión llega cuando el abuelo les muestra que ellos mismos son beneficiarios de esa lógica.",
    },

    // ── TEXTO E · Crónica — «La última función» ───────────────────────────
    // (Reactivos 46–49: identificación ×2, interpretación, evaluación)

    // 46 · Identificación de información (B)
    {
      question: "Lee el siguiente texto y responde.<br><br>«El teatro tenía las butacas desgastadas y el telón con un roto que nadie había reparado en años. Esa noche, sin embargo, estaba lleno. Era la última función antes de que el edificio fuera demolido para construir un estacionamiento. Los actores —algunos de ochenta años, otros debutantes— representaron una obra que ninguno olvidaría. Cuando cayó el telón, el público no aplaudió de inmediato. Hubo un silencio extraño, casi reverencial, como si todos supieran que lo que acababa de terminar no volvería a repetirse jamás. Luego el aplauso llegó, largo y sostenido, y varios de los actores lloraron en escena sin fingir que no lo hacían.»<br><br>¿Por qué era la última función en ese teatro?",
      options: [
        "Porque la compañía teatral había decidido disolver el grupo tras esa presentación",
        "Porque el edificio sería demolido para construir un estacionamiento",
        "Porque los actores habían conseguido un nuevo espacio en otra ciudad",
      ],
      correctAnswer: 1,
      explanation: "El texto afirma explícitamente que era «la última función antes de que el edificio fuera demolido para construir un estacionamiento». Las otras razones no aparecen en el texto.",
    },

    // 47 · Identificación de información (C)
    {
      question: "Con base en el texto «La última función»:<br><br>«Cuando cayó el telón, el público no aplaudió de inmediato. Hubo un silencio extraño, casi reverencial, como si todos supieran que lo que acababa de terminar no volvería a repetirse jamás. Luego el aplauso llegó, largo y sostenido.»<br><br>¿Cómo reaccionó el público inmediatamente después de que cayó el telón?",
      options: [
        "Con un aplauso inmediato y entusiasta que duró varios minutos",
        "Con abucheos y críticas a la actuación de los actores más jóvenes",
        "Con un silencio prolongado antes de que llegara el aplauso",
      ],
      correctAnswer: 2,
      explanation: "El texto describe con claridad: «el público no aplaudió de inmediato. Hubo un silencio extraño, casi reverencial [...] Luego el aplauso llegó.» La opción A invierte el orden de los hechos.",
    },

    // 48 · Interpretación — descripción del espacio (A)
    {
      question: "De acuerdo con el texto «La última función»:<br><br>«El teatro tenía las butacas desgastadas y el telón con un roto que nadie había reparado en años.»<br><br>¿Qué sugiere esta descripción sobre el teatro?",
      options: [
        "Que el teatro tenía una larga historia de uso pero había sido descuidado o carecía de recursos para su mantenimiento",
        "Que los actores habían dañado el equipo durante los ensayos previos a la función",
        "Que el público era de escasos recursos económicos y no podía costear entradas a lugares mejor equipados",
      ],
      correctAnswer: 0,
      explanation: "Las butacas «desgastadas» y el telón roto «que nadie había reparado en años» evocan el paso del tiempo y la falta de mantenimiento. Son indicios de un espacio con historia pero descuidado, quizá por falta de recursos. La descripción construye el ambiente antes de revelar que será demolido.",
    },

    // 49 · Evaluación — tono del texto (B)
    {
      question: "A partir del texto «La última función»:<br><br>«Hubo un silencio extraño, casi reverencial [...] el aplauso llegó, largo y sostenido, y varios de los actores lloraron en escena sin fingir que no lo hacían.»<br><br>¿Cuál es el tono predominante de este texto?",
      options: [
        "Irónico y crítico hacia la decisión de demoler el teatro para construir un estacionamiento",
        "Melancólico y emotivo, centrado en la despedida de un espacio y su significado para quienes lo habitaron",
        "Informativo y objetivo, sin expresar ninguna valoración sobre los hechos narrados",
      ],
      correctAnswer: 1,
      explanation: "El texto usa recursos emocionales: el silencio «reverencial», los actores que «lloraron sin fingir», la idea de algo que «no volvería a repetirse jamás». El tono es claramente melancólico. No es irónico (no hay distancia crítica) ni puramente informativo.",
    },

    // ── TEXTO F · Cuento — «El fotógrafo» ────────────────────────────────
    // (Reactivos 50–53: identificación, interpretación ×2, evaluación)

    // 50 · Identificación de información (C)
    {
      question: "Lee el siguiente cuento y responde.<br><br>«Ramón llevaba treinta años fotografiando bodas, quince cumpleaños y graduaciones. Había capturado miles de sonrisas perfectas y nunca había tomado una foto que le gustara. Una tarde, mientras esperaba que los novios salieran de la iglesia, vio a un niño que comía un helado que se derretía más rápido de lo que él podía lamer. La escena duró quizá diez segundos. Ramón levantó la cámara casi sin pensar. Cuando reveló esa foto semanas después, la miró durante largo rato. Por primera vez en treinta años, había capturado algo verdadero.»<br><br>¿Cuántos años llevaba Ramón fotografiando eventos sociales?",
      options: [
        "Quince años",
        "Veinte años",
        "Treinta años",
      ],
      correctAnswer: 2,
      explanation: "El texto establece desde la primera oración: «Ramón llevaba treinta años fotografiando bodas, quince cumpleaños y graduaciones.» Los quince corresponden al tipo de evento, no a los años de carrera.",
    },

    // 51 · Interpretación — insatisfacción de Ramón (A)
    {
      question: "Con base en el cuento «El fotógrafo»:<br><br>«Había capturado miles de sonrisas perfectas y nunca había tomado una foto que le gustara.»<br><br>¿Por qué Ramón nunca había tomado una foto que le gustara, a pesar de su larga carrera?",
      options: [
        "Porque las fotos de eventos sociales buscan poses e imágenes perfectas y artificiales, no momentos auténticos",
        "Porque su equipo fotográfico era de baja calidad y no capturaba bien la luz en interiores",
        "Porque los clientes siempre rechazaban sus mejores fotografías y exigían retoques",
      ],
      correctAnswer: 0,
      explanation: "El contraste del cuento es entre las «sonrisas perfectas» (artificiales, posadas) de los eventos sociales y la foto del niño (espontánea, genuina). La insatisfacción de Ramón viene de fotografiar lo convencional, no lo verdadero. Las opciones B y C no tienen base en el texto.",
    },

    // 52 · Evaluación — significado de la foto (B)
    {
      question: "De acuerdo con el cuento «El fotógrafo»:<br><br>«Ramón levantó la cámara casi sin pensar. Cuando reveló esa foto semanas después, la miró durante largo rato. Por primera vez en treinta años, había capturado algo verdadero.»<br><br>¿Qué representa la foto del niño con el helado en la historia?",
      options: [
        "La nostalgia de Ramón por su infancia, cuando también disfrutaba los helados en verano",
        "El tipo de imagen auténtica e imperfecta que Ramón llevaba treinta años buscando sin saberlo",
        "La prueba de que los mejores fotógrafos siempre se especializan en escenas cotidianas y no en eventos",
      ],
      correctAnswer: 1,
      explanation: "La foto del niño representa lo opuesto a las «sonrisas perfectas»: es espontánea, imprevista, genuina. Ramón la toma «casi sin pensar» y es la primera en treinta años que lo satisface. Encarna lo que buscaba sin haber podido articularlo.",
    },

    // 53 · Interpretación — «algo verdadero» (C)
    {
      question: "A partir del cuento «El fotógrafo»:<br><br>«Por primera vez en treinta años, había capturado algo verdadero.»<br><br>¿Qué quiere decir el narrador con esta frase?",
      options: [
        "Que la foto era técnicamente perfecta en cuanto a iluminación, enfoque y composición",
        "Que el niño y el helado eran famosos y Ramón había buscado fotografiarlos durante años",
        "Que la imagen reflejaba un momento espontáneo y genuino, sin la pose ni la artificialidad de las fotos de encargo",
      ],
      correctAnswer: 2,
      explanation: "'Verdadero' en el cuento se opone a 'perfecto': las fotos de eventos son técnicamente correctas pero artificiales. La del niño es imperfecta (el helado se derrite, la escena dura diez segundos) pero auténtica. El valor está en la autenticidad, no en la técnica.",
    },

    // ── TEXTO G · Convocatoria — Festival de Cortometraje ─────────────────
    // (Reactivos 54–56: identificación, interpretación, evaluación)

    // 54 · Identificación de información (A)
    {
      question: "Lee el siguiente texto y responde.<br><br>«CONVOCATORIA — Festival Nacional de Cortometraje Universitario \'Primer Plano 2025\'. La Universidad Autónoma de la Ciudad convoca a estudiantes inscritos en cualquier institución de educación superior del país. Los trabajos deberán tener entre 3 y 15 minutos de duración, ser de producción propia e inédita, y filmarse en cualquier formato (incluyendo teléfono móvil). Se enviarán en formato MP4 a cortometraje@primerplano.edu.mx antes del 15 de octubre de 2025. Cada participante puede enviar máximo dos obras. Los ganadores serán seleccionados por un jurado de cineastas profesionales y recibirán diploma, proyección pública y un taller de cine de tres días.»<br><br>¿Cuál es el requisito de duración de los cortometrajes participantes?",
      options: [
        "Entre 3 y 15 minutos",
        "Máximo 3 minutos",
        "Entre 10 y 20 minutos",
      ],
      correctAnswer: 0,
      explanation: "La convocatoria establece explícitamente que los trabajos «deberán tener entre 3 y 15 minutos de duración». Las otras opciones alteran los límites indicados.",
    },

    // 55 · Interpretación — público destinatario (B)
    {
      question: "Con base en la convocatoria del festival de cortometraje:<br><br>«La Universidad Autónoma de la Ciudad convoca a estudiantes inscritos en cualquier institución de educación superior del país.»<br><br>¿A quiénes va dirigida esta convocatoria?",
      options: [
        "A cineastas profesionales de cualquier edad y país",
        "A estudiantes de cualquier institución de educación superior del país",
        "Exclusivamente a estudiantes de la Universidad Autónoma de la Ciudad convocante",
      ],
      correctAnswer: 1,
      explanation: "La convocatoria es de una universidad específica, pero se dirige a estudiantes de «cualquier institución de educación superior del país», no solo a los propios. La opción A incluye a profesionales y extranjeros, que no están contemplados.",
    },

    // 56 · Evaluación de cumplimiento de bases (C)
    {
      question: "De acuerdo con la convocatoria del festival de cortometraje:<br><br>«Estudiantes de educación superior. Duración: 3-15 min. Producción propia e inédita. Formato MP4. Máximo dos obras. Entrega antes del 15 de octubre de 2025.»<br><br>¿Cuál de las siguientes situaciones describe a un participante que cumple correctamente con todas las bases?",
      options: [
        "Un estudiante universitario envía un cortometraje de 20 minutos filmado con cámara profesional antes del plazo",
        "Un estudiante de preparatoria envía dos cortometrajes de 8 minutos cada uno antes del 15 de octubre",
        "Una estudiante universitaria envía un cortometraje inédito de 10 minutos filmado con su teléfono antes del 15 de octubre",
      ],
      correctAnswer: 2,
      explanation: "La opción C cumple todo: es estudiante universitaria, el cortometraje es inédito (producción propia), dura 10 minutos (dentro del rango 3-15), el teléfono es formato permitido, y lo entrega antes del plazo. La A tiene una duración fuera de rango (20 min); la B no es estudiante de educación superior.",
    },

    // ── TEXTO H · Noticia — Contaminación lumínica ────────────────────────
    // (Reactivos 57–59: identificación, interpretación, evaluación)

    // 57 · Identificación de información (A)
    {
      question: "Lee el siguiente texto y responde.<br><br>«CIUDAD DE MÉXICO — Un estudio del Instituto de Astrofísica Nacional reveló que el 83% de la población mundial vive bajo cielos contaminados por luz artificial, lo que impide ver la Vía Láctea a simple vista. En México, el problema afecta principalmente a zonas urbanas, donde el alumbrado ineficiente y la publicidad luminosa dispersan luz hacia arriba. Las consecuencias van más allá de lo astronómico: la contaminación lumínica altera los ritmos circadianos de humanos y animales, afecta la migración de aves y la reproducción de insectos polinizadores. Los especialistas proponen sustituir luminarias por LED direccional, regular horarios de publicidad luminosa y crear zonas de cielo oscuro en las periferias.»<br><br>¿Qué porcentaje de la población mundial vive bajo cielos contaminados por luz artificial, según el texto?",
      options: [
        "El 83%",
        "El 63%",
        "El 73%",
      ],
      correctAnswer: 0,
      explanation: "El texto establece que «el 83% de la población mundial vive bajo cielos contaminados por luz artificial», cifra proveniente del estudio del Instituto de Astrofísica Nacional.",
    },

    // 58 · Interpretación — inferencia válida (B)
    {
      question: "Con base en la noticia sobre contaminación lumínica:<br><br>«La contaminación lumínica altera los ritmos circadianos de humanos y animales, afecta la migración de aves y la reproducción de insectos polinizadores.»<br><br>¿Qué inferencia válida puede hacerse a partir de estos datos?",
      options: [
        "La contaminación lumínica solo afecta a los astrónomos que necesitan cielos oscuros para su trabajo científico",
        "La contaminación lumínica tiene consecuencias ambientales y de salud que van más allá de impedir ver las estrellas",
        "Los insectos polinizadores se benefician de la luz artificial porque pueden trabajar también de noche",
      ],
      correctAnswer: 1,
      explanation: "El texto enumera efectos sobre ritmos circadianos, migración de aves y reproducción de polinizadores, todos impactos que van más allá de la astronomía. La opción C contradice el texto (la reproducción de insectos se ve afectada negativamente, no beneficiada).",
    },

    // 59 · Evaluación — uso de evidencia múltiple (C)
    {
      question: "A partir de la noticia sobre contaminación lumínica:<br><br>«Las consecuencias van más allá de lo astronómico: altera ritmos circadianos, afecta la migración de aves y la reproducción de insectos polinizadores.»<br><br>¿Por qué el texto incluye tanto consecuencias astronómicas como biológicas?",
      options: [
        "Para demostrar que la astronomía es la disciplina científica más afectada por la actividad humana",
        "Para comparar los costos económicos de la contaminación lumínica con los beneficios del alumbrado público",
        "Para mostrar que el problema tiene múltiples dimensiones y afecta a distintos organismos y sistemas",
      ],
      correctAnswer: 2,
      explanation: "Al presentar efectos sobre la astronomía, la salud humana, las aves y los insectos, el texto argumenta que la contaminación lumínica es un problema amplio y multidimensional, lo que refuerza la urgencia de las medidas propuestas.",
    },

    // ═══════════════════════════════════════════════════════════════════════
    // BLOQUE 3 · REDACCIÓN INDIRECTA  (reactivos 60–89)
    // ───────────────────────────────────────────────────────────────────────
    // Subárea: Estudio — Comunicativa (60-64), Gramatical/Semántica (65-69), Ortográfica (70-74)
    // Subárea: Participación social — Comunicativa (75-79), Gramatical/Semántica (80-84), Ortográfica (85-89)
    // Distribución de respuestas: A×10, B×10, C×10
    // ═══════════════════════════════════════════════════════════════════════

    // ── Subárea Estudio · Comunicativa ────────────────────────────────────

    // 60 · Registro académico — reseña (A)
    {
      question: "Un estudiante escribe una reseña de un libro de historia para una revista académica de su escuela. ¿Cuál de los siguientes párrafos de apertura es el más apropiado?",
      options: [
        "La obra *Historia y poder* de Martínez (2023) constituye un análisis riguroso de las transformaciones políticas del siglo XX en América Latina, con especial atención a los mecanismos de legitimación del Estado.",
        "Este libro está buenísimo y todo el mundo debería leerlo porque explica muy bien cosas de historia que no sabíamos.",
        "En este trabajo voy a hablar del libro que leímos en clase para ver qué tan bueno está y si vale la pena leerlo.",
      ],
      correctAnswer: 0,
      explanation: "Una reseña académica requiere lenguaje formal, identificación precisa de la obra y su autor, y un planteamiento del objeto de análisis. La opción A cumple con estos requisitos. Las otras dos usan un registro informal e impreciso, inadecuado para una publicación académica.",
    },

    // 61 · Registro y adecuación — conclusiones de informe (B)
    {
      question: "Un investigador redacta el apartado de conclusiones de su informe científico. ¿Cuál de las siguientes opciones es la más adecuada?",
      options: [
        "Pues al final resultó que nuestros datos confirmaron que sí funciona el tratamiento, lo cual es muy bueno.",
        "Los resultados obtenidos permiten concluir que el tratamiento experimental redujo significativamente los síntomas en el 78% de los participantes, con un nivel de significancia de p < 0.05.",
        "¡Qué interesante que el tratamiento funcionó tan bien! Esperamos que sirva para curar muchas enfermedades en el futuro.",
      ],
      correctAnswer: 1,
      explanation: "Las conclusiones científicas deben ser objetivas, precisas y fundamentadas en los datos (porcentaje, nivel de significancia). La opción B emplea el registro técnico adecuado. Las otras dos usan expresiones coloquiales o emotivas inapropiadas para el género científico.",
    },

    // 62 · Propósito e intención comunicativa — carta de recomendación (C)
    {
      question: "Una profesora escribe una carta de recomendación para su alumno que solicita una beca de posgrado en el extranjero. ¿Cuál de los siguientes fragmentos es el más apropiado para la carta?",
      options: [
        "El estudiante es muy buena onda y se porta bien en clase, por eso lo recomiendo sin pensarlo dos veces.",
        "Les recomiendo ampliamente a este chavo porque saca buenas calificaciones y es muy listo en todo lo que hace.",
        "Me permito recomendar ampliamente al Lic. Torres Vega, quien ha demostrado un desempeño académico sobresaliente y una notable capacidad analítica durante sus estudios de licenciatura.",
      ],
      correctAnswer: 2,
      explanation: "Una carta de recomendación institucional requiere lenguaje formal, tratamiento de respeto al destinatario, identificación completa del recomendado y argumentos sustantivos. La opción C cumple con todos estos elementos. Las opciones A y B usan un registro coloquial que desacredita la carta.",
    },

    // 63 · Adecuación al género — resumen de artículo (A)
    {
      question: "¿Cuál de los siguientes fragmentos es el más adecuado como resumen (*abstract*) de un artículo científico?",
      options: [
        "El presente estudio analiza los efectos del ejercicio aeróbico en la memoria de trabajo de adultos mayores mediante un diseño experimental con grupo control (n=60). Los resultados indican una mejora significativa (p<0.05) en el grupo experimental respecto al grupo control.",
        "En este artículo vamos a ver si hacer ejercicio ayuda a la memoria en personas grandes, porque la verdad es muy importante para la salud de todos.",
        "Este artículo trata sobre la memoria y el ejercicio. Hicimos un experimento y salieron resultados muy buenos que nos pusieron muy contentos.",
      ],
      correctAnswer: 0,
      explanation: "Un *abstract* debe sintetizar el objetivo, la metodología y los resultados con precisión y en registro científico. La opción A incluye el diseño del estudio, el tamaño de la muestra y los datos estadísticos. Las otras dos omiten información esencial y usan lenguaje informal.",
    },

    // 64 · Marcador discursivo en ensayo académico (B)
    {
      question: "Lee el fragmento y elige la opción que mejor completa el espacio en blanco dentro del cuerpo de un ensayo académico.<br><br>«La migración es un fenómeno complejo que responde a múltiples factores. ____________________. Entre estos se encuentran los conflictos armados, la violencia generalizada y los efectos del cambio climático.»",
      options: [
        "O sea que la gente se va de sus países por muchas razones que no tienen que ver solo con querer mejorar económicamente",
        "En consecuencia, las causas de la migración son diversas y no pueden reducirse a una sola explicación",
        "Los factores que explican por qué la gente migra son varios y muy variados entre sí según cada caso",
      ],
      correctAnswer: 1,
      explanation: "La oración intermedia debe conectar la idea de «múltiples factores» con la enumeración que sigue, en el registro formal del ensayo. La opción B emplea el marcador «En consecuencia» y un vocabulario preciso; las otras opciones son redundantes o coloquiales.",
    },

    // ── Subárea Estudio · Gramatical y Semántica ──────────────────────────

    // 65 · Queísmo (C)
    {
      question: "¿Cuál de las siguientes oraciones presenta queísmo (uso incorrecto de «que» en lugar de «de que»)?",
      options: [
        "El director informó de que la reunión había sido cancelada por falta de quórum.",
        "Estoy convencida de que el proyecto tendrá éxito si trabajamos de manera coordinada.",
        "El investigador estaba seguro que sus resultados eran los más precisos del estudio.",
      ],
      correctAnswer: 2,
      explanation: "El verbo «estar seguro» rige la preposición «de»: la forma correcta es «estaba seguro *de que*». Omitir la preposición («seguro que») es queísmo. Las opciones A y B usan «de que» correctamente con los verbos «informar» y «estar convencida».",
    },

    // 66 · «Deber» vs «deber de» (A)
    {
      question: "¿Cuál de las siguientes oraciones usa correctamente la diferencia entre **deber** (obligación) y **deber de** (suposición o probabilidad)?",
      options: [
        "Los participantes deben entregar el formulario antes del viernes; los que no llegaron deben de haber tenido un contratiempo.",
        "Los participantes deben de entregar el formulario antes del viernes; los que no llegaron deben haber tenido un contratiempo.",
        "Los participantes deben de entregar el formulario; los que no llegaron deben de haber tenido algún problema.",
      ],
      correctAnswer: 0,
      explanation: "«Deber + infinitivo» expresa obligación («deben entregar»); «deber de + infinitivo» expresa suposición («deben de haber tenido»). La opción A aplica correctamente ambos usos. La B los invierte; la C usa «deber de» en ambos casos, perdiendo la distinción.",
    },

    // 67 · Polisemia contextual — «capital» (B)
    {
      question: "¿Cuál es el significado de la palabra **capital** en el siguiente contexto académico?<br><br>«La inversión de capital en infraestructura educativa es fundamental para el desarrollo económico de un país.»",
      options: [
        "Ciudad principal de un país o de una entidad federativa",
        "Conjunto de recursos económicos o financieros disponibles para generar riqueza",
        "Letra de mayor tamaño utilizada al inicio de oración o en nombres propios",
      ],
      correctAnswer: 1,
      explanation: "La palabra «capital» es polisémica. En este contexto económico, significa «conjunto de recursos financieros». La acepción de «ciudad principal» y la de «letra mayúscula» corresponden a otros contextos totalmente distintos.",
    },

    // 68 · Marcador de adición (C)
    {
      question: "¿Cuál marcador textual completa mejor el siguiente fragmento para expresar una idea adicional que refuerza lo dicho?<br><br>«Los materiales reciclados reducen el impacto ambiental de la industria. ______________________, su uso puede disminuir significativamente los costos de producción a largo plazo.»",
      options: [
        "Por lo tanto",
        "No obstante",
        "Asimismo",
      ],
      correctAnswer: 2,
      explanation: "«Asimismo» es un marcador de adición que introduce una segunda ventaja de los materiales reciclados. «Por lo tanto» indicaría consecuencia y «No obstante» expresaría contraste, ninguno de los dos corresponde a la relación lógica del fragmento.",
    },

    // 69 · Sinonimia contextual — «exhaustivo» (A)
    {
      question: "¿Cuál es el sinónimo más adecuado para la palabra **exhaustivo** en el siguiente contexto?<br><br>«El comité realizó una revisión exhaustiva de todos los documentos presentados antes de emitir su dictamen.»",
      options: [
        "minuciosa",
        "veloz",
        "superficial",
      ],
      correctAnswer: 0,
      explanation: "En este contexto, «exhaustivo» significa que la revisión fue detallada y completa, sin dejar nada sin examinar. El sinónimo más preciso es «minuciosa». «Veloz» y «superficial» son opuestos al sentido del término en este contexto.",
    },

    // ── Subárea Estudio · Ortográfica ─────────────────────────────────────

    // 70 · Uso de mayúsculas (B)
    {
      question: "¿En cuál de las siguientes opciones se usan correctamente las mayúsculas?",
      options: [
        "La Revolución mexicana comenzó en octubre de 1910, cuando Francisco I. Madero llamó a la lucha contra Porfirio Díaz.",
        "La Revolución Mexicana comenzó en octubre de 1910, cuando Francisco I. Madero llamó a la lucha contra Porfirio Díaz.",
        "La revolución mexicana comenzó en Octubre de 1910, cuando francisco I. Madero llamó a la lucha contra porfirio Díaz.",
      ],
      correctAnswer: 1,
      explanation: "«Revolución Mexicana» es un nombre propio histórico y lleva mayúscula en ambas palabras. Los meses («octubre») se escriben con minúscula en español. Los nombres propios de persona («Francisco I. Madero», «Porfirio Díaz») llevan mayúscula. Solo la opción B aplica todas estas reglas correctamente.",
    },

    // 71 · Grafofonética s/c/z (C)
    {
      question: "¿En cuál de las siguientes series todas las palabras están escritas correctamente (uso de s, c y z)?",
      options: [
        "consiensia, eficácia, comienzo",
        "conciencia, eficacia, comienso",
        "conciencia, eficacia, comienzo",
      ],
      correctAnswer: 2,
      explanation: "«Conciencia» se escribe con c (ciencia); «eficacia» se escribe con c; «comienzo» se escribe con z. La opción C tiene las tres palabras correctas. La A escribe «consiensia» con s (incorrecto); la B escribe «comienso» con s (incorrecto).",
    },

    // 72 · Uso de paréntesis para sigla (A)
    {
      question: "¿En cuál de las siguientes oraciones se usan correctamente los paréntesis para introducir una sigla?",
      options: [
        "El Tratado de Libre Comercio (TLC) fue firmado en 1994 por México, Estados Unidos y Canadá.",
        "El Tratado de Libre Comercio, TLC fue firmado en 1994 por México, Estados Unidos y Canadá.",
        "El (Tratado de Libre Comercio) TLC fue firmado en 1994 por México, Estados Unidos y Canadá.",
      ],
      correctAnswer: 0,
      explanation: "La convención estándar es escribir el nombre completo seguido de la sigla entre paréntesis: «Tratado de Libre Comercio (TLC)». La opción A aplica esta regla correctamente. La B omite los paréntesis; la C los coloca en el lugar equivocado.",
    },

    // 73 · Acentuación de palabras esdrújulas (B)
    {
      question: "¿Cuál de las siguientes series contiene solo palabras esdrújulas correctamente acentuadas?",
      options: [
        "cámara, biologico, práctica",
        "cámara, biológico, práctica",
        "cámara, biológico, practico",
      ],
      correctAnswer: 1,
      explanation: "Todas las palabras esdrújulas (acento en la antepenúltima sílaba) llevan tilde sin excepción. «cámara» ✓, «biológico» ✓ y «práctica» ✓ son las formas correctas. La opción A omite la tilde en «biológico»; la C escribe «practico» (forma de primera persona del verbo, no el adjetivo).",
    },

    // 74 · Uso de la raya para inciso (C)
    {
      question: "¿En cuál de las siguientes oraciones se usan correctamente las rayas (—) para enmarcar un inciso aclaratorio?",
      options: [
        "La propuesta, que fue rechazada por el comité —volvió a presentarse con las modificaciones sugeridas.",
        "La propuesta— que fue rechazada por el comité —volvió a presentarse con las modificaciones sugeridas.",
        "La propuesta —que fue rechazada por el comité— volvió a presentarse con las modificaciones sugeridas.",
      ],
      correctAnswer: 2,
      explanation: "El inciso entre rayas requiere una raya de apertura y una de cierre, ambas con espacio antes y después (o pegadas al texto según la norma RAE, pero simétricas). La opción C enmarca correctamente el inciso. La A solo usa una raya; la B coloca la primera raya pegada al sustantivo sin el espacio correcto.",
    },

    // ── Subárea Participación Social · Comunicativa ───────────────────────

    // 75 · Texto publicitario — campaña de donación (A)
    {
      question: "¿Cuál de los siguientes textos es el más apropiado como encabezado de un anuncio para promover la donación de sangre en una universidad?",
      options: [
        "¡Tu sangre salva vidas! Dona hoy en el Centro de Salud Universitario. Un solo acto puede cambiar el destino de alguien.",
        "La donación de sangre es un proceso mediante el cual una persona permite la extracción de una cantidad determinada de sangre para su posterior transfusión.",
        "Se solicita a los estudiantes que deseen participar en el programa de donación que se presenten con identificación oficial vigente.",
      ],
      correctAnswer: 0,
      explanation: "Un anuncio de campaña social usa lenguaje directo, emotivo y un llamado a la acción claro. La opción A interpela al lector («Tu sangre»), usa exclamación y termina con un argumento de impacto. La B es una definición técnica; la C es un aviso administrativo: ninguna tiene función persuasiva.",
    },

    // 76 · Registro en publicación institucional digital (B)
    {
      question: "Un estudiante quiere publicar en el perfil institucional de Instagram de su escuela un mensaje con motivo del Día Mundial del Medio Ambiente. ¿Cuál de las siguientes opciones es la más adecuada para ese contexto?",
      options: [
        "hoy es el día del medio ambiente!! oigan cuiden la naturaleza eh, no tiren basura y ya jaja",
        "Hoy celebramos el Día Mundial del Medio Ambiente. Recordemos que pequeñas acciones cotidianas —reciclar, ahorrar agua, plantar árboles— construyen un futuro más sostenible. ¿Qué haces tú por el planeta?",
        "DÍA DEL MEDIO AMBIENTE: INFORME TÉCNICO SOBRE EL ESTADO ACTUAL DE LOS ECOSISTEMAS GLOBALES Y LAS MEDIDAS DE MITIGACIÓN PROPUESTAS POR ORGANISMOS INTERNACIONALES.",
      ],
      correctAnswer: 1,
      explanation: "Una publicación institucional en redes sociales requiere un registro semiformal: correcto y claro, pero también accesible y con cierto dinamismo. La opción B logra ese equilibrio con lenguaje cuidado, uso de raya para el inciso y una pregunta que invita a la reflexión. La A es demasiado informal; la C es demasiado técnica y en mayúsculas.",
    },

    // 77 · Género discursivo — columna de opinión (C)
    {
      question: "¿Cuál de los siguientes fragmentos corresponde al género de la **columna de opinión** en un periódico?",
      options: [
        "La Asamblea Legislativa aprobó ayer, con 42 votos a favor y 18 en contra, la nueva ley de residuos sólidos.",
        "La ley de residuos sólidos establece que los hogares deberán separar sus desechos en orgánicos, inorgánicos y reciclables.",
        "La nueva ley de residuos sólidos es un paso necesario, pero insuficiente. Mientras no existan infraestructura y cultura de separación, la norma quedará en papel. La responsabilidad no es solo individual: es estructural.",
      ],
      correctAnswer: 2,
      explanation: "La columna de opinión presenta una postura personal del autor con argumentos valorativos. La opción C emite juicios («paso necesario, pero insuficiente»), anticipa problemas y concluye con una tesis. La A es una nota informativa; la B es texto normativo o explicativo.",
    },

    // 78 · Adecuación al receptor — correo a autoridad (A)
    {
      question: "Un vecino quiere enviar un correo electrónico al director de Obras Públicas para reportar una fuga de agua en su colonia. ¿Cuál de las siguientes opciones es la más adecuada?",
      options: [
        "Estimado director: Me dirijo a usted para informar que desde hace tres días existe una fuga de agua en la calle Hidalgo 23, colonia Centro, que representa un riesgo para los peatones. Solicito respetuosamente su atención. Atentamente, Juan Pérez.",
        "Hola, hay una fuga de agua en mi calle desde hace días. ¿Pueden venir a arreglarla? Gracias.",
        "AVISO URGENTE. La fuga de agua de mi calle lleva 3 días y nadie hace nada. Es un escándalo y exijo que vengan hoy mismo.",
      ],
      correctAnswer: 0,
      explanation: "Un correo a una autoridad pública requiere: saludo formal, identificación precisa del problema (dirección, tiempo), solicitud respetuosa y despedida con nombre completo. La opción A cumple todos estos requisitos. La B es demasiado informal; la C usa un tono agresivo e imperativo que resulta contraproducente.",
    },

    // 79 · Lenguaje persuasivo — eslogan de campaña social (B)
    {
      question: "Lee el fragmento y elige la opción que mejor completa el cierre de una campaña contra el desperdicio de alimentos.<br><br>«En México se desperdicia el 34% de los alimentos producidos mientras millones de personas padecen hambre. ______________________»",
      options: [
        "El desperdicio de alimentos es un fenómeno que ocurre en distintas etapas de la cadena alimentaria, desde la producción hasta el consumo final.",
        "No desperdicies lo que alguien más necesita. Cada bocado cuenta.",
        "Se recomienda a la población conservar adecuadamente los alimentos y planificar sus compras para evitar el deterioro prematuro.",
      ],
      correctAnswer: 1,
      explanation: "El cierre de una campaña persuasiva debe hacer un llamado directo a la acción con lenguaje emotivo y conciso. La opción B interpela directamente al lector y usa una frase de impacto. La A extiende la explicación sin llamado; la C es una recomendación institucional fría, no un eslogan.",
    },

    // ── Subárea Participación Social · Gramatical y Semántica ─────────────

    // 80 · Redundancia / pleonasmo (C)
    {
      question: "¿En cuál de las siguientes oraciones hay una redundancia (pleonasmo) innecesaria?",
      options: [
        "Los voluntarios trabajaron durante toda la noche para concluir el proyecto a tiempo.",
        "El alcalde anunció las nuevas medidas en la conferencia de prensa de ayer.",
        "Los candidatos deben subir hacia arriba sus propuestas en la plataforma antes del plazo.",
      ],
      correctAnswer: 2,
      explanation: "En la opción C, «subir hacia arriba» es un pleonasmo: «subir» ya implica dirección hacia arriba, por lo que «hacia arriba» es redundante. La forma correcta es simplemente «subir sus propuestas». Las opciones A y B no presentan redundancia.",
    },

    // 81 · Leísmo (A)
    {
      question: "¿Cuál de las siguientes oraciones evita correctamente el leísmo?",
      options: [
        "Saludé a los estudiantes cuando los vi entrar al aula.",
        "Saludé a los estudiantes cuando les vi entrar al aula.",
        "Saludé a los estudiantes cuando le vi entrar al aula.",
      ],
      correctAnswer: 0,
      explanation: "«Los estudiantes» funciona como complemento directo (CD), por lo que el pronombre correcto es «los» (masculino plural de CD). Usar «les» o «le» (pronombres de complemento indirecto) para el CD masculino animado es leísmo, un error frecuente aunque extendido.",
    },

    // 82 · Cláusula relativa — referente claro (B)
    {
      question: "¿Cuál de las siguientes oraciones usa correctamente la cláusula relativa sin generar ambigüedad en el referente?",
      options: [
        "El proyecto que presentamos ayer fue aprobado por el comité, el cual fue muy bien recibido.",
        "El proyecto que presentamos ayer, el cual fue muy bien recibido, fue aprobado por el comité.",
        "El proyecto el cual presentamos fue aprobado, que fue muy bien recibido por el comité.",
      ],
      correctAnswer: 1,
      explanation: "En la opción B, «el cual» va inmediatamente después del sustantivo «proyecto», por lo que el referente es inequívoco. En la A, «el cual» está al final y podría referirse a «comité» o a «proyecto». La C mezcla «el cual» y «que» de manera confusa.",
    },

    // 83 · Antonimia contextual — «prolijo» (C)
    {
      question: "¿Cuál es el antónimo más adecuado para la palabra **prolijo** en el siguiente contexto?<br><br>«El informe resultó demasiado prolijo; sería preferible una versión más ____________________»",
      options: [
        "elaborada",
        "extensa",
        "concisa",
      ],
      correctAnswer: 2,
      explanation: "«Prolijo» significa excesivamente largo o detallado. Su antónimo en este contexto es «concisa», que significa breve y precisa. «Elaborada» y «extensa» son sinónimos o términos similares a «prolijo», no antónimos.",
    },

    // 84 · Marcador de reformulación — «es decir» (A)
    {
      question: "¿Cuál marcador textual completa mejor el siguiente fragmento para introducir una aclaración o reformulación?<br><br>«La desigualdad económica afecta de manera diferenciada a los distintos grupos sociales. ______________________, quienes tienen menos recursos acceden con mayor dificultad a servicios de salud, educación y vivienda digna.»",
      options: [
        "Es decir,",
        "En cambio,",
        "Por el contrario,",
      ],
      correctAnswer: 0,
      explanation: "«Es decir» es un marcador de reformulación que introduce una explicación más concreta de la idea anterior. La segunda oración especifica a qué grupos y de qué manera afecta la desigualdad. «En cambio» y «Por el contrario» introducen contraste, lo que no corresponde aquí.",
    },

    // ── Subárea Participación Social · Ortográfica ────────────────────────

    // 85 · Uso de la x (B)
    {
      question: "¿En cuál de las siguientes series todas las palabras están escritas correctamente (uso de x)?",
      options: [
        "esamen, excelente, esperiencia",
        "examen, excelente, experiencia",
        "examen, escelente, experiencia",
      ],
      correctAnswer: 1,
      explanation: "«Examen», «excelente» y «experiencia» se escriben todas con x. La opción B es la única que presenta las tres palabras correctas. La A escribe «esamen» y «esperiencia» sin x; la C escribe «escelente» sin x.",
    },

    // 86 · Uso de ll e y (C)
    {
      question: "¿En cuál de las siguientes oraciones están correctamente escritas todas las palabras con ll o y?",
      options: [
        "El vaquero halló una llave que no havia visto antes en el cajón.",
        "El vaquero ayó una yave que no había visto antes en el cajón.",
        "El vaquero halló una llave que no había visto antes en el cajón.",
      ],
      correctAnswer: 2,
      explanation: "«Halló» (de *hallar*) se escribe con ll; «llave» se escribe con ll; «había» (de *haber*) se escribe con h y b. La opción C tiene las tres palabras correctas. La A escribe «havia» sin h (incorrecto); la B escribe «ayó» por «halló» y «yave» por «llave» (incorrectos).",
    },

    // 87 · Puntuación en abreviaturas (A)
    {
      question: "¿En cuál de las siguientes opciones se usa correctamente el punto en las abreviaturas?",
      options: [
        "La reunión fue convocada por el Dr. García para el martes a las 10:00 a. m.",
        "La reunión fue convocada por el Dr.. García para el martes a las 10:00 a.m..",
        "La reunión fue convocada por el Dr García para el martes a las 10:00 a.m.",
      ],
      correctAnswer: 0,
      explanation: "Las abreviaturas llevan punto al final: «Dr.» ✓ La locución «a. m.» (ante merídiem) se escribe con puntos y espacios en la norma académica del español. La opción A aplica ambas reglas correctamente. La B duplica el punto tras «Dr.» y al final de la oración; la C omite el punto de la abreviatura «Dr».",
    },

    // 88 · Coma antes de «pero» (B)
    {
      question: "¿En cuál de las siguientes opciones se usa correctamente la coma antes de la conjunción adversativa **pero**?",
      options: [
        "El candidato presentó su propuesta pero nadie en el comité la apoyó.",
        "El candidato presentó su propuesta, pero nadie en el comité la apoyó.",
        "El candidato presentó su propuesta, pero, nadie en el comité la apoyó.",
      ],
      correctAnswer: 1,
      explanation: "Cuando «pero» une dos oraciones independientes, debe ir precedido de coma. La opción B aplica esta regla correctamente. La A omite la coma obligatoria; la C añade una coma innecesaria después de «pero», que interrumpe incorrectamente la oración.",
    },

    // 89 · Adverbios terminados en -mente (C)
    {
      question: "¿En cuál de las siguientes opciones están correctamente escritos los adverbios terminados en **-mente**?",
      options: [
        "La comisión revisó el caso rápidamente y exhaustívamente.",
        "La comisión revisó el caso rápidamente y exhaustibamente.",
        "La comisión revisó el caso rápidamente y exhaustivamente.",
      ],
      correctAnswer: 2,
      explanation: "Los adverbios en «-mente» conservan la tilde del adjetivo base si este la lleva: «rápida» → «rápidamente» ✓. El adjetivo «exhaustiva» no lleva tilde, por lo que «exhaustivamente» tampoco la lleva. La opción A añade una tilde inexistente («exhaustívamente»); la B cambia la v por b («exhaustibamente»).",
    },

    // ═══════════════════════════════════════════════════════════════════════
    // BLOQUE 4 · PENSAMIENTO MATEMÁTICO  (reactivos 90–129)
    // ───────────────────────────────────────────────────────────────────────
    // Subárea: Comprensión de lo matemático
    //   · Conexiones       (90–97)
    //   · Estimación       (98–105)
    //   · Sentido numérico (106–113)
    // Subárea: Matematización
    //   · Desarrollo de usos   (114–117)
    //   · Lenguaje matemático  (118–125)
    //   · Resignificaciones    (126–129)
    // Distribución de respuestas: A×13, B×14, C×13
    // ═══════════════════════════════════════════════════════════════════════

    // ── Conexiones ─────────────────────────────────────────────────────────

    // 90 · Diferencia de cuadrados (A)
    {
      question: "¿Cuál es el resultado de (x+5)(x−5)?",
      options: [
        "x²−25",
        "x²+25",
        "x²−10x−25",
      ],
      correctAnswer: 0,
      explanation: "(x+5)(x−5) es una diferencia de cuadrados: a²−b² con a=x y b=5. El resultado es x²−25. El término del medio se cancela porque los signos son opuestos.",
    },

    // 91 · Factor común (B)
    {
      question: "¿Cuál es la factorización correcta de 12x³ − 8x²?",
      options: [
        "4x(3x²−2x)",
        "4x²(3x−2)",
        "2x²(6x−4)",
      ],
      correctAnswer: 1,
      explanation: "El factor común de 12x³ y 8x² es 4x². Al extraerlo: 12x³÷4x²=3x y 8x²÷4x²=2. Por lo tanto 12x³−8x²=4x²(3x−2). La opción C también factoriza, pero no usa el máximo factor común.",
    },

    // 92 · Ecuación cuadrática por factorización (C)
    {
      question: "¿Cuáles son las soluciones de la ecuación x²−7x+12=0?",
      options: [
        "x=2 y x=6",
        "x=1 y x=12",
        "x=3 y x=4",
      ],
      correctAnswer: 2,
      explanation: "Se buscan dos números que sumen 7 y cuyo producto sea 12: son 3 y 4. Por lo tanto x²−7x+12=(x−3)(x−4)=0, y las soluciones son x=3 y x=4. Verificación: 3+4=7 ✓ y 3×4=12 ✓.",
    },

    // 93 · Pendiente entre dos puntos (A)
    {
      question: "¿Cuál es la pendiente de la recta que pasa por los puntos (1, 3) y (4, 9)?",
      options: [
        "m = 2",
        "m = 3",
        "m = 1/2",
      ],
      correctAnswer: 0,
      explanation: "La pendiente se calcula como m = (y₂−y₁)/(x₂−x₁) = (9−3)/(4−1) = 6/3 = 2.",
    },

    // 94 · Vértice de parábola (B)
    {
      question: "¿En qué valor de x se encuentra el vértice de la parábola y = x²−4x+7?",
      options: [
        "x = 7",
        "x = 2",
        "x = −2",
      ],
      correctAnswer: 1,
      explanation: "Para y = ax²+bx+c, el vértice está en x = −b/(2a). Con a=1 y b=−4: x = −(−4)/(2·1) = 4/2 = 2.",
    },

    // 95 · Ley de potencias — potencia de potencia (C)
    {
      question: "¿Cuál es el valor de (2³)²?",
      options: [
        "12",
        "32",
        "64",
      ],
      correctAnswer: 2,
      explanation: "La ley de potencia de una potencia indica (aᵐ)ⁿ = aᵐⁿ. Entonces (2³)² = 2⁶ = 64.",
    },

    // 96 · División de potencias con la misma base (A)
    {
      question: "¿Cuál es el resultado de x⁶ ÷ x²?",
      options: [
        "x⁴",
        "x³",
        "x⁸",
      ],
      correctAnswer: 0,
      explanation: "Al dividir potencias con la misma base se restan los exponentes: x⁶ ÷ x² = x⁶⁻² = x⁴.",
    },

    // 97 · Suma de fracciones algebraicas (B)
    {
      question: "¿Cuál es el resultado de 1/x + 1/y (con x≠0 y y≠0)?",
      options: [
        "1/(x+y)",
        "(x+y)/(xy)",
        "(x+y)/x",
      ],
      correctAnswer: 1,
      explanation: "Para sumar 1/x + 1/y se busca el denominador común xy: (y+x)/(xy) = (x+y)/(xy). Un error frecuente es escribir 1/(x+y), que no es equivalente.",
    },

    // ── Estimación ─────────────────────────────────────────────────────────

    // 98 · Estimar raíz cuadrada (C)
    {
      question: "¿Entre qué dos números enteros consecutivos se encuentra √80?",
      options: [
        "Entre 7 y 8",
        "Entre 9 y 10",
        "Entre 8 y 9",
      ],
      correctAnswer: 2,
      explanation: "Como 8²=64 y 9²=81, entonces √80 está entre 8 y 9 (más cerca de 9, ya que 80 es muy cercano a 81). √80 ≈ 8.94.",
    },

    // 99 · Notación científica (A)
    {
      question: "¿Cuál es la expresión en notación científica de 0.00032?",
      options: [
        "3.2 × 10⁻⁴",
        "3.2 × 10⁴",
        "32 × 10⁻⁵",
      ],
      correctAnswer: 0,
      explanation: "Para escribir 0.00032 en notación científica se mueve el punto decimal 4 lugares a la derecha: 3.2 × 10⁻⁴. La opción C es equivalente matemáticamente, pero no cumple con la forma estándar (coeficiente entre 1 y 10).",
    },

    // 100 · Redondeo a décimas (B)
    {
      question: "¿Cuál es el valor de 8.375 redondeado a la décima más cercana?",
      options: [
        "8.3",
        "8.4",
        "8.38",
      ],
      correctAnswer: 1,
      explanation: "Para redondear a décimas se observa el dígito en las centésimas: 8.375 → el dígito en centésimas es 7 (≥5), por lo que se redondea hacia arriba: 8.4. La opción C tiene dos decimales, no una décima.",
    },

    // 101 · Comparar fracciones (C)
    {
      question: "¿Cuál de las siguientes fracciones es la mayor?",
      options: [
        "5/9",
        "7/13",
        "3/5",
      ],
      correctAnswer: 2,
      explanation: "Convirtiendo a decimales: 5/9≈0.556, 7/13≈0.538, 3/5=0.600. La mayor es 3/5.",
    },

    // 102 · Estimación de área (A)
    {
      question: "Estima el área de un rectángulo con lados de 6.8 cm y 4.2 cm.",
      options: [
        "Aproximadamente 28 cm²",
        "Aproximadamente 22 cm²",
        "Aproximadamente 35 cm²",
      ],
      correctAnswer: 0,
      explanation: "Aproximando: 6.8 ≈ 7 y 4.2 ≈ 4. El área estimada es 7 × 4 = 28 cm². El valor exacto es 6.8 × 4.2 = 28.56 cm², lo que confirma que la opción A es la más cercana.",
    },

    // 103 · Porcentaje directo (B)
    {
      question: "¿Cuánto es el 20% de 350?",
      options: [
        "35",
        "70",
        "700",
      ],
      correctAnswer: 1,
      explanation: "20% de 350 = 0.20 × 350 = 70. Otra forma: 10% de 350 = 35, entonces 20% = 2 × 35 = 70.",
    },

    // 104 · Entero más cercano a una raíz (C)
    {
      question: "¿Cuál es el número entero más cercano a √45?",
      options: [
        "5",
        "6",
        "7",
      ],
      correctAnswer: 2,
      explanation: "6²=36 y 7²=49. √45 ≈ 6.71. La distancia a 6 es 0.71 y a 7 es 0.29, por lo que 7 es el entero más cercano.",
    },

    // 105 · Precio con descuento (A)
    {
      question: "Un artículo cuesta $127.80. Si se aplica un descuento del 10%, ¿cuál es el precio aproximado a pagar?",
      options: [
        "Aproximadamente $115",
        "Aproximadamente $140",
        "Aproximadamente $90",
      ],
      correctAnswer: 0,
      explanation: "El 10% de $127.80 ≈ $12.80. Precio final ≈ $127.80 − $12.80 = $115. El valor exacto es $127.80 × 0.90 = $115.02.",
    },

    // ── Sentido numérico ───────────────────────────────────────────────────

    // 106 · MCD (B)
    {
      question: "¿Cuál es el Máximo Común Divisor (MCD) de 36 y 48?",
      options: [
        "6",
        "12",
        "18",
      ],
      correctAnswer: 1,
      explanation: "Factorizando: 36=2²×3² y 48=2⁴×3. El MCD toma los factores comunes con el menor exponente: 2²×3 = 12.",
    },

    // 107 · MCM (C)
    {
      question: "¿Cuál es el Mínimo Común Múltiplo (MCM) de 6, 8 y 12?",
      options: [
        "48",
        "96",
        "24",
      ],
      correctAnswer: 2,
      explanation: "Factorizando: 6=2×3, 8=2³, 12=2²×3. El MCM toma los factores con el mayor exponente: 2³×3 = 24. Verificación: 24÷6=4 ✓, 24÷8=3 ✓, 24÷12=2 ✓.",
    },

    // 108 · Resta de fracciones (A)
    {
      question: "¿Cuál es el resultado de 2/3 − 3/8?",
      options: [
        "7/24",
        "1/5",
        "5/24",
      ],
      correctAnswer: 0,
      explanation: "El denominador común de 3 y 8 es 24. 2/3 = 16/24 y 3/8 = 9/24. Entonces 16/24 − 9/24 = 7/24.",
    },

    // 109 · Potencia negativa (B)
    {
      question: "¿Cuál es el valor de 4⁻²?",
      options: [
        "−16",
        "1/16",
        "−1/16",
      ],
      correctAnswer: 1,
      explanation: "Un exponente negativo indica el recíproco: 4⁻² = 1/4² = 1/16. El resultado es positivo porque la base (4) es positiva.",
    },

    // 110 · Porcentaje de cambio (C)
    {
      question: "Un producto pasó de costar $150 a $180. ¿Cuál es el porcentaje de aumento?",
      options: [
        "15%",
        "30%",
        "20%",
      ],
      correctAnswer: 2,
      explanation: "Porcentaje de aumento = (aumento / valor original) × 100 = (30/150) × 100 = 20%.",
    },

    // 111 · Ordenar números en la recta numérica (A)
    {
      question: "¿Cuál es el orden correcto de mayor a menor de los números: 2/3, 0.65, −0.7 y 3/5?",
      options: [
        "2/3 > 0.65 > 3/5 > −0.7",
        "0.65 > 3/5 > 2/3 > −0.7",
        "2/3 > 3/5 > 0.65 > −0.7",
      ],
      correctAnswer: 0,
      explanation: "Convirtiendo: 2/3≈0.667, 0.65, 3/5=0.6, −0.7. Orden de mayor a menor: 0.667 > 0.65 > 0.6 > −0.7, es decir: 2/3 > 0.65 > 3/5 > −0.7.",
    },

    // 112 · Fracción como porcentaje (B)
    {
      question: "¿Cuál es la representación porcentual de 5/8?",
      options: [
        "50%",
        "62.5%",
        "58%",
      ],
      correctAnswer: 1,
      explanation: "5/8 = 0.625 = 62.5%. También puede calcularse como (5÷8)×100 = 62.5%.",
    },

    // 113 · Sucesión geométrica (C)
    {
      question: "¿Cuál es el siguiente término en la sucesión: 3, 6, 12, 24, ___?",
      options: [
        "36",
        "42",
        "48",
      ],
      correctAnswer: 2,
      explanation: "Cada término se obtiene multiplicando el anterior por 2 (razón geométrica r=2). El siguiente término es 24×2 = 48.",
    },

    // ── Desarrollo de usos ─────────────────────────────────────────────────

    // 114 · Problema de velocidad promedio (A)
    {
      question: "Un corredor recorre 12 km en 1.5 horas. ¿Cuál es su velocidad promedio?",
      options: [
        "8 km/h",
        "10 km/h",
        "6 km/h",
      ],
      correctAnswer: 0,
      explanation: "Velocidad = distancia ÷ tiempo = 12 km ÷ 1.5 h = 8 km/h.",
    },

    // 115 · Problema de mezclas (B)
    {
      question: "Se mezclan 3 litros de jugo con 7 litros de agua. ¿Qué porcentaje de la mezcla total es jugo?",
      options: [
        "3%",
        "30%",
        "70%",
      ],
      correctAnswer: 1,
      explanation: "La mezcla total es 3+7 = 10 litros. El porcentaje de jugo = (3/10)×100 = 30%.",
    },

    // 116 · Problema de descuento (C)
    {
      question: "Un libro tiene un precio de $250. Si se aplica un descuento del 15%, ¿cuánto cuesta después del descuento?",
      options: [
        "$200",
        "$225",
        "$212.50",
      ],
      correctAnswer: 2,
      explanation: "Descuento = 15% de $250 = 0.15×250 = $37.50. Precio final = $250 − $37.50 = $212.50.",
    },

    // 117 · Problema de trabajo conjunto (B)
    {
      question: "Ana puede pintar una habitación en 6 horas; Carlos, en 4 horas. Si trabajan juntos, ¿en cuántas horas terminan?",
      options: [
        "5 horas",
        "2.4 horas",
        "3 horas",
      ],
      correctAnswer: 1,
      explanation: "La tasa de trabajo conjunta es 1/6 + 1/4 = 2/12 + 3/12 = 5/12 de habitación por hora. Tiempo = 1 ÷ (5/12) = 12/5 = 2.4 horas.",
    },

    // ── Lenguaje matemático ─────────────────────────────────────────────────

    // 118 · Desigualdad lineal (C)
    {
      question: "¿Cuál es la solución de la desigualdad 3x + 2 ≤ 11?",
      options: [
        "x ≤ 5",
        "x ≤ 4",
        "x ≤ 3",
      ],
      correctAnswer: 2,
      explanation: "3x + 2 ≤ 11 → 3x ≤ 9 → x ≤ 3. Se resta 2 a ambos lados y luego se divide entre 3 (positivo, sin cambiar el signo).",
    },

    // 119 · Sistema de ecuaciones 2×2 (A)
    {
      question: "¿Cuál es la solución del sistema de ecuaciones: x + y = 7 y x − y = 3?",
      options: [
        "x = 5, y = 2",
        "x = 4, y = 3",
        "x = 3, y = 4",
      ],
      correctAnswer: 0,
      explanation: "Sumando ambas ecuaciones: 2x = 10 → x = 5. Sustituyendo: 5 + y = 7 → y = 2. Verificación: 5−2=3 ✓.",
    },

    // 120 · Función lineal — intersección con eje y (B)
    {
      question: "Para la función f(x) = 3x − 6, ¿cuál es el valor de la intersección con el eje y?",
      options: [
        "y = 3",
        "y = −6",
        "y = 6",
      ],
      correctAnswer: 1,
      explanation: "La intersección con el eje y se obtiene evaluando x=0: f(0) = 3(0) − 6 = −6. En la forma f(x)=mx+b, el valor b es directamente la intersección.",
    },

    // 121 · Punto medio de un segmento (C)
    {
      question: "¿Cuál es el punto medio del segmento que une los puntos (2, 4) y (8, 10)?",
      options: [
        "(4, 6)",
        "(6, 8)",
        "(5, 7)",
      ],
      correctAnswer: 2,
      explanation: "El punto medio se calcula como PM = ((x₁+x₂)/2, (y₁+y₂)/2) = ((2+8)/2, (4+10)/2) = (10/2, 14/2) = (5, 7).",
    },

    // 122 · Distancia entre dos puntos (A)
    {
      question: "¿Cuál es la distancia entre los puntos (0, 0) y (3, 4)?",
      options: [
        "5",
        "7",
        "25",
      ],
      correctAnswer: 0,
      explanation: "d = √((3−0)² + (4−0)²) = √(9+16) = √25 = 5. Este es el triángulo 3-4-5, un caso clásico del teorema de Pitágoras.",
    },

    // 123 · Ecuación de recta (B)
    {
      question: "¿Cuál es la ecuación de la recta con pendiente 2 que pasa por el punto (0, −3)?",
      options: [
        "y = 2x + 3",
        "y = 2x − 3",
        "y = −2x + 3",
      ],
      correctAnswer: 1,
      explanation: "La forma pendiente-intersección es y = mx + b. Con m=2 y b=−3 (el punto (0,−3) indica que la intersección con y es −3): y = 2x − 3.",
    },

    // 124 · Evaluar función cuadrática (C)
    {
      question: "Si f(x) = 2x²−3x+1, ¿cuál es el valor de f(2)?",
      options: [
        "5",
        "2",
        "3",
      ],
      correctAnswer: 2,
      explanation: "f(2) = 2(2)²−3(2)+1 = 2(4)−6+1 = 8−6+1 = 3.",
    },

    // 125 · Desigualdad con coeficiente negativo (A)
    {
      question: "¿Cuál es la solución de la desigualdad −2x > 8?",
      options: [
        "x < −4",
        "x > −4",
        "x < 4",
      ],
      correctAnswer: 0,
      explanation: "Al dividir ambos lados entre −2 (número negativo), el signo de desigualdad se invierte: x < −4. Este es el error más frecuente en desigualdades: olvidar invertir el signo al dividir entre negativo.",
    },

    // ── Resignificaciones ──────────────────────────────────────────────────

    // 126 · Área de figura compuesta (B)
    {
      question: "Una figura está formada por un cuadrado de lado 6 m y un semicírculo de diámetro 6 m adosado a uno de sus lados. Usando π ≈ 3.14, ¿cuál es el área total aproximada?",
      options: [
        "45.13 m²",
        "50.13 m²",
        "64.27 m²",
      ],
      correctAnswer: 1,
      explanation: "Área del cuadrado = 6² = 36 m². Área del semicírculo = (π×r²)/2 = (3.14×3²)/2 = (3.14×9)/2 = 14.13 m². Área total = 36 + 14.13 = 50.13 m².",
    },

    // 127 · Volumen de prisma rectangular (A)
    {
      question: "¿Cuál es el volumen de una caja rectangular de 5 cm de largo, 3 cm de ancho y 4 cm de alto?",
      options: [
        "60 cm³",
        "75 cm³",
        "48 cm³",
      ],
      correctAnswer: 0,
      explanation: "El volumen de un prisma rectangular es V = largo × ancho × alto = 5 × 3 × 4 = 60 cm³.",
    },

    // 128 · Ángulo faltante en triángulo (C)
    {
      question: "En un triángulo, dos de sus ángulos miden 45° y 70°. ¿Cuánto mide el tercer ángulo?",
      options: [
        "75°",
        "55°",
        "65°",
      ],
      correctAnswer: 2,
      explanation: "La suma de los ángulos interiores de un triángulo es siempre 180°. Tercer ángulo = 180° − 45° − 70° = 65°.",
    },

    // 129 · Probabilidad simple — dado (B)
    {
      question: "Se lanza un dado de seis caras (numeradas del 1 al 6). ¿Cuál es la probabilidad de obtener un número par?",
      options: [
        "1/6",
        "1/2",
        "1/3",
      ],
      correctAnswer: 1,
      explanation: "Los números pares en un dado son: 2, 4 y 6 — tres de seis posibilidades. P(par) = 3/6 = 1/2.",
    },

  ],
};
