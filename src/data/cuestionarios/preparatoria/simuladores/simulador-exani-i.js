// src/data/cuestionarios/preparatoria/simuladores/simulador-exani-i.js
// Simulador tipo EXANI-I — 130 reactivos
// Estructura oficial CENEVAL (Guía para el sustentante, junio 2025):
//   Pensamiento científico   30  (reactivos   0-29)  — completo
//   Comprensión lectora      30  (reactivos  30-59)  — completo
//   Redacción indirecta      30  (reactivos  60-89)  — completo
//   Pensamiento matemático   40  (reactivos  90-129) — completo

export default {
  metadata: {
    id: "simulador-exani-i",
    titulo: "Simulador EXANI-I",
    nivel: "preparatoria",
    materia: "Simulador",
    tema: "EXANI-I",
  },
  // 4.5 h para 160 reactivos ≈ 101 s/reactivo; usamos 100 s
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
    // Subárea: Relación de temas, procesos y componentes     (10–19)
    // Subárea: Interpretación y argumentación                (20–29)
    // ═══════════════════════════════════════════════════════════════════════

    // ── Identificación de variables, conceptos y procesos ─────────────────

    // 0 · Estructura y funciones de la célula — organelos
    {
      question: "¿Cuál es la función principal de las mitocondrias en la célula?",
      options: [
        "Producir proteínas a partir de aminoácidos",
        "Producir energía (ATP) mediante la respiración celular",
        "Almacenar el material genético de la célula",
      ],
      correctAnswer: 1,
      explanation: "Las mitocondrias son los organelos responsables de producir energía en forma de ATP a través de la respiración celular. Por eso se les llama 'centrales energéticas de la célula'.",
    },

    // 1 · Estructura y funciones — célula vegetal vs. animal
    {
      question: "¿Cuál de las siguientes estructuras está presente en las células vegetales pero NO en las células animales?",
      options: [
        "Membrana celular",
        "Núcleo",
        "Pared celular",
      ],
      correctAnswer: 2,
      explanation: "La pared celular, compuesta principalmente de celulosa, es una estructura rígida exclusiva de las células vegetales. Las células animales solo poseen membrana celular.",
    },

    // 2 · Teoría de la evolución de Darwin
    {
      question: "¿Cuál es el mecanismo principal por el que ocurre la evolución según Charles Darwin?",
      options: [
        "Selección natural",
        "Mutación espontánea",
        "Herencia de caracteres adquiridos",
      ],
      correctAnswer: 0,
      explanation: "Darwin propuso que la evolución ocurre mediante la selección natural: los individuos mejor adaptados al ambiente sobreviven y se reproducen más, transmitiendo sus características a la descendencia.",
    },

    // 3 · La herencia en los seres vivos — genética mendeliana
    {
      question: "Si el alelo A (ojos cafés) es dominante y el alelo a (ojos azules) es recesivo, ¿qué fenotipo tendrá un individuo con genotipo Aa?",
      options: [
        "Ojos azules",
        "Ojos cafés",
        "Una mezcla de café y azul",
      ],
      correctAnswer: 1,
      explanation: "Cuando hay un alelo dominante (A), su fenotipo se expresa independientemente del alelo recesivo. El individuo Aa (heterocigoto) tendrá ojos cafés porque A es dominante sobre a.",
    },

    // 4 · Biomoléculas — función de los carbohidratos
    {
      question: "¿Cuál es la función principal de los carbohidratos en el cuerpo humano?",
      options: [
        "Formar la estructura de las membranas celulares",
        "Proporcionar energía de rápida disponibilidad",
        "Regular las reacciones químicas del organismo",
      ],
      correctAnswer: 1,
      explanation: "Los carbohidratos (como la glucosa) son la principal fuente de energía inmediata del organismo. Las grasas forman membranas y las enzimas (proteínas) regulan las reacciones químicas.",
    },

    // 5 · Modelos atómicos — Thomson
    {
      question: "¿Cuál modelo atómico describió al átomo como una esfera de carga positiva con electrones incrustados, conocido como el 'pudín de pasas'?",
      options: [
        "Modelo de Bohr",
        "Modelo de Rutherford",
        "Modelo de Thomson",
      ],
      correctAnswer: 2,
      explanation: "El modelo de Thomson (1897) describía al átomo como una esfera de carga positiva con electrones incrustados. Rutherford descubrió el núcleo y Bohr propuso los niveles de energía.",
    },

    // 6 · Tipos de enlace químico — covalente
    {
      question: "¿Qué tipo de enlace químico se forma cuando dos átomos comparten electrones?",
      options: [
        "Enlace iónico",
        "Enlace covalente",
        "Enlace metálico",
      ],
      correctAnswer: 1,
      explanation: "En el enlace covalente, dos átomos comparten uno o más pares de electrones. El enlace iónico implica transferencia de electrones y el metálico ocurre entre átomos de metal.",
    },

    // 7 · Estados de agregación de la materia
    {
      question: "¿Cuál de los siguientes estados de la materia tiene forma y volumen definidos?",
      options: [
        "Gas",
        "Líquido",
        "Sólido",
      ],
      correctAnswer: 2,
      explanation: "Los sólidos tienen forma y volumen definidos porque sus partículas están muy unidas y solo vibran en su lugar. Los líquidos tienen volumen definido pero no forma fija; los gases no tienen ni forma ni volumen fijo.",
    },

    // 8 · Flotación — principio de Arquímedes
    {
      question: "Un objeto flota en el agua cuando:",
      options: [
        "Su densidad es mayor que la del agua",
        "Su densidad es igual a la del agua",
        "Su densidad es menor que la del agua",
      ],
      correctAnswer: 2,
      explanation: "El principio de Arquímedes establece que un objeto flota cuando su densidad es menor que la del fluido. Si su densidad es mayor, se hunde; si es igual, queda suspendido en equilibrio.",
    },

    // 9 · Equilibrio y fricción
    {
      question: "¿Cuál es la función de la fricción en el movimiento de los objetos?",
      options: [
        "Acelerar el movimiento de los objetos",
        "Oponerse al movimiento relativo entre dos superficies en contacto",
        "Mantener los objetos en el aire",
      ],
      correctAnswer: 1,
      explanation: "La fricción (o rozamiento) es una fuerza que se opone al movimiento relativo entre superficies en contacto. Puede ser estática (impide iniciar el movimiento) o cinética (actúa durante el movimiento).",
    },

    // ── Relación de temas, procesos y componentes ──────────────────────────

    // 10 · Electricidad en sistemas biológicos — sistema nervioso
    {
      question: "¿Cuál es la función del sistema nervioso relacionada con los impulsos eléctricos?",
      options: [
        "Transportar oxígeno a todos los tejidos del cuerpo",
        "Transmitir señales eléctricas entre el cerebro y el resto del cuerpo",
        "Producir hormonas para regular el metabolismo",
      ],
      correctAnswer: 1,
      explanation: "El sistema nervioso utiliza impulsos eléctricos (potenciales de acción) para transmitir información entre el cerebro, la médula espinal y el resto del cuerpo, coordinando las respuestas del organismo.",
    },

    // 11 · Ciencia y tecnología — pasteurización
    {
      question: "¿Cuál de las siguientes situaciones aplica el principio de la pasteurización?",
      options: [
        "Hervir el agua para purificarla",
        "Calentar la leche a alta temperatura por un tiempo breve para eliminar bacterias patógenas",
        "Congelar alimentos para conservarlos",
      ],
      correctAnswer: 1,
      explanation: "La pasteurización consiste en calentar un líquido a una temperatura determinada por un tiempo corto para eliminar microorganismos patógenos sin alterar significativamente sus propiedades nutritivas.",
    },

    // 12 · Cambios químicos y reacciones químicas
    {
      question: "¿Cuál de los siguientes es un ejemplo de cambio químico?",
      options: [
        "Disolver azúcar en agua",
        "Cortar papel en pedazos pequeños",
        "Quemar madera",
      ],
      correctAnswer: 2,
      explanation: "La combustión de la madera es un cambio químico porque produce nuevas sustancias (CO₂ y H₂O). Disolver azúcar y cortar papel son cambios físicos: no se forman nuevas sustancias.",
    },

    // 13 · Métodos de separación de mezclas — filtración
    {
      question: "¿Qué método de separación se usa para separar una mezcla de agua y arena?",
      options: [
        "Destilación",
        "Filtración",
        "Evaporación",
      ],
      correctAnswer: 1,
      explanation: "La filtración separa un sólido de un líquido según el tamaño de las partículas: la arena queda retenida en el filtro y el agua pasa. La destilación separa líquidos con distintos puntos de ebullición.",
    },

    // 14 · Impacto de productos químicos en el ambiente
    {
      question: "¿Cuál es una consecuencia del uso excesivo de pesticidas en la agricultura?",
      options: [
        "Mejora de la calidad del agua subterránea",
        "Contaminación del suelo y el agua, afectando la biodiversidad",
        "Aumento de la producción de oxígeno en los ecosistemas",
      ],
      correctAnswer: 1,
      explanation: "El exceso de pesticidas contamina el suelo y los cuerpos de agua, afecta organismos no objetivo (como insectos benéficos) y puede acumularse en la cadena alimentaria, dañando la salud humana y la biodiversidad.",
    },

    // 15 · Manipulación genética — ingeniería genética en medicina
    {
      question: "¿Cuál es una aplicación de la ingeniería genética en la medicina?",
      options: [
        "Producción de insulina mediante bacterias modificadas genéticamente",
        "Clonación de animales para aumentar la producción ganadera sin restricciones",
        "Eliminación total de todas las enfermedades hereditarias en una sola generación",
      ],
      correctAnswer: 0,
      explanation: "La ingeniería genética permite insertar el gen humano de la insulina en bacterias para que la produzcan en grandes cantidades. Esta insulina se usa para tratar la diabetes y fue uno de los primeros medicamentos obtenidos por biotecnología.",
    },

    // 16 · Sistema solar y gravitación
    {
      question: "¿Cuál es la fuerza que mantiene a los planetas en órbita alrededor del Sol?",
      options: [
        "La fricción del espacio interplanetario",
        "La fuerza de gravedad",
        "La fuerza electromagnética",
      ],
      correctAnswer: 1,
      explanation: "La fuerza gravitacional entre el Sol y los planetas es la que los mantiene en órbita. Newton describió que esta fuerza depende de las masas de los cuerpos y la distancia entre ellos.",
    },

    // 17 · Velocidad y aceleración
    {
      question: "¿Cuál de los siguientes enunciados describe correctamente el concepto de aceleración?",
      options: [
        "Un ciclista recorre 30 km en 1 hora manteniendo la misma velocidad",
        "Un automóvil aumenta su velocidad de 40 km/h a 80 km/h en 10 segundos",
        "Un tren avanza 500 m en línea recta a velocidad constante",
      ],
      correctAnswer: 1,
      explanation: "La aceleración es el cambio de velocidad en el tiempo. El automóvil que pasa de 40 km/h a 80 km/h experimenta una aceleración. Los otros casos describen movimiento uniforme (velocidad constante).",
    },

    // 18 · Avances tecnológicos — fibra óptica
    {
      question: "¿Qué tecnología permite la transmisión de datos a alta velocidad mediante pulsos de luz en las telecomunicaciones modernas?",
      options: [
        "Cable de cobre",
        "Fibra óptica",
        "Señal de radio AM",
      ],
      correctAnswer: 1,
      explanation: "La fibra óptica transmite información mediante pulsos de luz a través de filamentos de vidrio o plástico, con mayor velocidad y menor pérdida de señal que el cable de cobre. Es fundamental en internet de alta velocidad.",
    },

    // 19 · Impacto de procesos químicos en la salud — resistencia bacteriana
    {
      question: "El uso incorrecto de antibióticos (sin terminar el tratamiento o sin prescripción) genera principalmente:",
      options: [
        "Mayor efectividad de los medicamentos en tratamientos futuros",
        "Resistencia bacteriana a los antibióticos",
        "Eliminación permanente de las bacterias del organismo",
      ],
      correctAnswer: 1,
      explanation: "El uso incorrecto de antibióticos favorece la selección de bacterias resistentes que sobreviven y se multiplican. Estas cepas ya no responden a los tratamientos comunes, representando un grave problema de salud pública.",
    },

    // ── Interpretación y argumentación del conocimiento científico ──────────

    // 20 · Aporte calórico — macronutrientes
    {
      question: "¿Cuál de los siguientes macronutrientes proporciona mayor cantidad de energía por gramo?",
      options: [
        "Carbohidratos (4 kcal/g)",
        "Proteínas (4 kcal/g)",
        "Lípidos (9 kcal/g)",
      ],
      correctAnswer: 2,
      explanation: "Las grasas (lípidos) aportan 9 kcal por gramo, más del doble que los carbohidratos y las proteínas, que aportan 4 kcal/g cada uno. Por eso los alimentos ricos en grasa son más calóricos.",
    },

    // 21 · Composición química — sustancias puras y mezclas
    {
      question: "¿Cuál de las siguientes opciones es una sustancia pura?",
      options: [
        "Agua de mar",
        "Aire",
        "Agua destilada (H₂O)",
      ],
      correctAnswer: 2,
      explanation: "El agua destilada es una sustancia pura compuesta únicamente por moléculas de H₂O. El agua de mar y el aire son mezclas porque contienen varias sustancias diferentes combinadas.",
    },

    // 22 · Energía potencial y cinética
    {
      question: "Un libro está sobre un estante alto. Al caer, su energía se transforma de:",
      options: [
        "Cinética a potencial",
        "Potencial a cinética",
        "Térmica a cinética",
      ],
      correctAnswer: 1,
      explanation: "Mientras el libro está quieto en el estante, tiene energía potencial gravitacional (almacenada por su posición). Al caer, esa energía se convierte en energía cinética (energía del movimiento).",
    },

    // 23 · Intercambio de energía en reacciones químicas — exotérmica
    {
      question: "Una reacción química que libera calor al ambiente se denomina:",
      options: [
        "Endotérmica",
        "Exotérmica",
        "Isotérmica",
      ],
      correctAnswer: 1,
      explanation: "Las reacciones exotérmicas liberan energía en forma de calor (el sistema pierde energía). Un ejemplo es la combustión. Las reacciones endotérmicas absorben calor del ambiente, como la fotosíntesis.",
    },

    // 24 · Sustancias conductoras de electricidad
    {
      question: "¿Cuál de las siguientes sustancias es un buen conductor de electricidad?",
      options: [
        "Madera seca",
        "Vidrio",
        "Cobre",
      ],
      correctAnswer: 2,
      explanation: "El cobre es un excelente conductor eléctrico porque sus electrones de valencia se mueven libremente. La madera seca y el vidrio son aislantes: sus electrones están fuertemente ligados y no circulan.",
    },

    // 25 · Manifestaciones de la electricidad — corazón
    {
      question: "¿Cuál es el efecto de la electricidad en el cuerpo humano que permite el funcionamiento del corazón?",
      options: [
        "La electricidad calienta el músculo cardíaco para que se contraiga",
        "Los impulsos eléctricos coordinan las contracciones rítmicas del músculo cardíaco",
        "La electricidad produce las hormonas que regulan el ritmo cardíaco",
      ],
      correctAnswer: 1,
      explanation: "El corazón funciona gracias a impulsos eléctricos generados por el nodo sinusal, que coordinan la contracción rítmica del músculo cardíaco. El electrocardiograma (ECG) registra esta actividad eléctrica.",
    },

    // 26 · Biodiversidad en México
    {
      question: "México es considerado un país 'megadiverso' principalmente porque:",
      options: [
        "Tiene la mayor superficie territorial de América Latina",
        "Concentra una gran variedad de especies de flora y fauna en su territorio",
        "Posee las reservas de petróleo más grandes del continente",
      ],
      correctAnswer: 1,
      explanation: "México es uno de los 12 países megadiversos del mundo: alberga entre el 10 y 12% de las especies del planeta, gracias a su gran variedad de climas, ecosistemas y zonas biogeográficas.",
    },

    // 27 · Adaptación y evolución — fotosíntesis
    {
      question: "Las plantas capturan energía solar para producir su propio alimento mediante el proceso de:",
      options: [
        "Respiración celular",
        "Fotosíntesis",
        "Fermentación",
      ],
      correctAnswer: 1,
      explanation: "La fotosíntesis es el proceso por el que las plantas usan energía solar, CO₂ y agua para producir glucosa y oxígeno. Es la base de casi todas las cadenas alimentarias en la Tierra.",
    },

    // 28 · Cadenas tróficas — productores
    {
      question: "En una cadena alimentaria, el organismo que produce su propio alimento a partir de la energía solar se denomina:",
      options: [
        "Consumidor primario",
        "Productor",
        "Descomponedor",
      ],
      correctAnswer: 1,
      explanation: "Los productores (plantas y algas) son organismos autótrofos que generan su alimento mediante la fotosíntesis, constituyendo la base de la cadena alimentaria. Los consumidores obtienen energía al alimentarse de otros organismos.",
    },

    // 29 · Cambios tecnológicos — energías renovables
    {
      question: "¿Cuál es la principal ventaja ambiental del uso de energías renovables (solar, eólica) frente a los combustibles fósiles?",
      options: [
        "Son más económicas de producir en todos los contextos",
        "No generan ningún tipo de residuo",
        "Reducen la emisión de gases de efecto invernadero",
      ],
      correctAnswer: 2,
      explanation: "Las energías renovables no queman combustibles durante su operación, por lo que no emiten CO₂ ni otros gases de efecto invernadero, contribuyendo a reducir el cambio climático. Los combustibles fósiles liberan grandes cantidades de CO₂.",
    },

    // ═══════════════════════════════════════════════════════════════════════
    // BLOQUE 2 · COMPRENSIÓN LECTORA  (reactivos 30–59)
    // ───────────────────────────────────────────────────────────────────────
    // Subárea: Ámbito de estudio       — Textos A, B, C  (30–41)
    // Subárea: Ámbito literario        — Textos D, E, F  (42–53)
    // Subárea: Participación social    — Textos G, H     (54–59)
    // ═══════════════════════════════════════════════════════════════════════

    // ── TEXTO A · Artículo de investigación — La biodiversidad ────────────
    // (Reactivos 30–33: identificación ×2, interpretación, evaluación)

    // 30 · Identificación de información
    {
      question: "Lee el siguiente texto y responde.<br><br>«Según la Unión Internacional para la Conservación de la Naturaleza (UICN), más de 40 000 especies se encuentran en peligro de extinción, y la tasa de desaparición es entre cien y mil veces mayor que la tasa natural. Las causas principales son la destrucción de hábitats, la sobreexplotación de recursos, la contaminación y el cambio climático. Los ecosistemas biodiversos proveen servicios esenciales: purifican el agua, regulan el clima y proporcionan recursos medicinales. Se estima que el 25% de los medicamentos modernos provienen de organismos vivos. Frente a esta crisis, los expertos proponen áreas naturales protegidas, prácticas agrícolas sostenibles y educación ambiental.»<br><br>¿Qué afirma el texto sobre la tasa de desaparición de especies?",
      options: [
        "Es entre cien y mil veces mayor que la tasa natural de extinción",
        "Es igual a la tasa natural de extinción",
        "Es inferior a la tasa registrada en el siglo pasado",
      ],
      correctAnswer: 0,
      explanation: "El texto afirma explícitamente que 'la tasa de desaparición es entre cien y mil veces mayor que la tasa natural.'",
    },

    // 31 · Identificación de información
    {
      question: "Con base en el texto sobre biodiversidad:<br><br>«Según la UICN, más de 40 000 especies están en peligro de extinción. Los ecosistemas biodiversos proveen servicios esenciales: purifican el agua, regulan el clima y proporcionan recursos medicinales. El 25% de los medicamentos modernos provienen de organismos vivos. Los expertos proponen áreas protegidas, prácticas agrícolas sostenibles y educación ambiental para frenar esta crisis.»<br><br>¿Cuál es uno de los servicios que ofrecen los ecosistemas biodiversos?",
      options: [
        "La producción de combustibles fósiles",
        "El control de erupciones volcánicas",
        "La regulación del clima",
      ],
      correctAnswer: 2,
      explanation: "El texto menciona explícitamente que los ecosistemas biodiversos 'regulan el clima', además de purificar el agua y proporcionar recursos medicinales.",
    },

    // 32 · Interpretación
    {
      question: "De acuerdo con el texto sobre biodiversidad:<br><br>«Los ecosistemas biodiversos proveen servicios esenciales: purifican el agua, regulan el clima y proporcionan recursos medicinales. Se estima que el 25% de los medicamentos modernos provienen de organismos vivos. Las causas de la pérdida de biodiversidad incluyen la destrucción de hábitats y el cambio climático.»<br><br>¿Qué inferencia válida se puede hacer sobre el 25% de medicamentos que provienen de organismos vivos?",
      options: [
        "Fueron descubiertos exclusivamente en regiones polares",
        "Dependen de organismos vivos que podrían verse amenazados por la pérdida de biodiversidad",
        "Solo son efectivos en enfermedades relacionadas con plantas",
      ],
      correctAnswer: 1,
      explanation: "Si el 25% de los medicamentos provienen de organismos vivos y muchas especies están amenazadas, es válido inferir que la pérdida de biodiversidad puede comprometer el desarrollo de futuros medicamentos.",
    },

    // 33 · Evaluación de la forma y el contenido
    {
      question: "A partir del texto sobre biodiversidad:<br><br>«Más de 40 000 especies están en peligro. Los ecosistemas biodiversos son esenciales para el ser humano. Los expertos proponen áreas protegidas, prácticas sostenibles y educación ambiental para enfrentar esta crisis.»<br><br>¿Cuál es el propósito principal del texto?",
      options: [
        "Narrar la historia de una especie en peligro de extinción",
        "Argumentar que el ser humano no tiene responsabilidad en la extinción de especies",
        "Informar sobre la crisis de pérdida de biodiversidad y las medidas propuestas para enfrentarla",
      ],
      correctAnswer: 2,
      explanation: "El texto tiene un propósito informativo-argumentativo: expone el problema, sus causas, las consecuencias para el ser humano y las soluciones propuestas. No narra una historia ni excluye la responsabilidad humana.",
    },

    // ── TEXTO B · Ensayo académico — Las redes sociales ───────────────────
    // (Reactivos 34–37: identificación, interpretación ×2, evaluación)

    // 34 · Identificación de información
    {
      question: "Lee el siguiente texto y responde.<br><br>«Las redes sociales han transformado la forma en que los jóvenes se comunican. Diversas investigaciones señalan que su uso excesivo puede generar ansiedad, depresión y problemas de autoestima, especialmente cuando los usuarios se comparan con imágenes idealizadas. Sin embargo, sería erróneo concluir que son inherentemente perjudiciales: usadas de manera consciente y moderada, pueden fortalecer vínculos sociales, fomentar la creatividad y facilitar el acceso a información. El verdadero desafío es desarrollar habilidades digitales críticas que permitan aprovechar sus beneficios sin caer en sus riesgos.»<br><br>¿Qué consecuencias del uso excesivo de redes sociales menciona el texto?",
      options: [
        "Mejora del rendimiento académico y mayor concentración",
        "Fortalecimiento de los vínculos sociales presenciales",
        "Ansiedad, depresión y problemas de autoestima",
      ],
      correctAnswer: 2,
      explanation: "El texto menciona explícitamente que el uso excesivo puede generar 'ansiedad, depresión y problemas de autoestima, especialmente cuando los usuarios se comparan con imágenes idealizadas.'",
    },

    // 35 · Interpretación — idea central
    {
      question: "Con base en el texto sobre redes sociales:<br><br>«Su uso excesivo puede generar ansiedad, depresión y problemas de autoestima. Sin embargo, sería erróneo concluir que son inherentemente perjudiciales: usadas de manera consciente y moderada, pueden fortalecer vínculos sociales y facilitar el acceso a información. El verdadero desafío es desarrollar habilidades digitales críticas.»<br><br>¿Cuál es la idea central que defiende el texto?",
      options: [
        "Que las redes sociales deberían prohibirse para menores de edad",
        "Que el impacto de las redes sociales depende de la forma en que se usen",
        "Que las redes sociales son siempre perjudiciales para la salud mental",
      ],
      correctAnswer: 1,
      explanation: "El texto argumenta que las redes no son 'inherentemente perjudiciales': su efecto depende del uso. El desafío es desarrollar habilidades críticas para usarlas bien.",
    },

    // 36 · Interpretación — inferencia válida
    {
      question: "De acuerdo con el texto sobre redes sociales:<br><br>«Usadas de manera consciente y moderada, las redes sociales pueden fortalecer vínculos sociales, fomentar la creatividad y facilitar el acceso a información. El verdadero desafío es desarrollar habilidades digitales críticas.»<br><br>¿Qué inferencia válida se puede hacer a partir del texto?",
      options: [
        "Un uso reflexivo de las redes sociales puede tener efectos positivos",
        "Los jóvenes que usan redes moderadamente no tienen vida social presencial",
        "Las investigaciones científicas concluyen que las redes deben eliminarse",
      ],
      correctAnswer: 0,
      explanation: "El texto afirma que usadas 'de manera consciente y moderada, pueden fortalecer vínculos sociales, fomentar la creatividad y facilitar el acceso a información', lo que permite inferir efectos positivos con un uso reflexivo.",
    },

    // 37 · Evaluación de la forma y el contenido
    {
      question: "A partir del texto sobre redes sociales:<br><br>«Sería erróneo concluir que las redes sociales son inherentemente perjudiciales: usadas de manera consciente y moderada, pueden fortalecer vínculos sociales y facilitar el acceso a información. El verdadero desafío es desarrollar habilidades digitales críticas.»<br><br>¿Por qué el autor afirma que sería 'erróneo' concluir que las redes son inherentemente perjudiciales?",
      options: [
        "Para contradecir todas las investigaciones científicas mencionadas antes",
        "Para presentar una visión equilibrada que reconoce tanto riesgos como beneficios",
        "Para defender que los jóvenes no necesitan orientación en el uso de la tecnología",
      ],
      correctAnswer: 1,
      explanation: "La aclaración busca matizar el argumento y ofrecer una postura equilibrada: reconoce los riesgos del uso excesivo, pero también los beneficios potenciales de un uso responsable.",
    },

    // ── TEXTO C · Artículo de investigación — El agua potable ─────────────
    // (Reactivos 38–41: identificación ×2, interpretación, evaluación)

    // 38 · Identificación de información
    {
      question: "Lee el siguiente texto y responde.<br><br>«El acceso al agua potable fue reconocido como derecho humano fundamental por la ONU en 2010. Sin embargo, según la Organización Mundial de la Salud, más de 2 000 millones de personas carecen de agua segura. La contaminación por actividades industriales, agrícolas y domésticas agrava el problema. Enfermedades como el cólera y la disentería causan millones de muertes al año, principalmente en países de bajos ingresos. Los expertos proponen tecnologías accesibles de purificación y una regulación más estricta de los contaminantes industriales como medidas prioritarias.»<br><br>¿En qué año fue reconocido el acceso al agua potable como derecho humano?",
      options: [
        "En 1948, con la Declaración Universal de los Derechos Humanos",
        "En 2010, por la Organización de las Naciones Unidas",
        "En 1990, durante la Cumbre de la Tierra en Río de Janeiro",
      ],
      correctAnswer: 1,
      explanation: "El texto indica explícitamente que fue reconocido como derecho humano 'por la ONU en 2010'.",
    },

    // 39 · Identificación de información
    {
      question: "Con base en el texto sobre agua potable:<br><br>«La contaminación por actividades industriales, agrícolas y domésticas agrava el problema del acceso al agua. Enfermedades como el cólera y la disentería causan millones de muertes al año, principalmente en países de bajos ingresos.»<br><br>¿Qué enfermedades relacionadas con el agua contaminada menciona el texto?",
      options: [
        "El cólera y la disentería",
        "La diabetes y la hipertensión",
        "El asma y la tuberculosis",
      ],
      correctAnswer: 0,
      explanation: "El texto menciona explícitamente el cólera y la disentería como enfermedades relacionadas con el agua contaminada.",
    },

    // 40 · Interpretación
    {
      question: "De acuerdo con el texto sobre agua potable:<br><br>«Más de 2 000 millones de personas carecen de agua segura. Enfermedades como el cólera y la disentería causan millones de muertes al año, principalmente en países de bajos ingresos.»<br><br>¿Qué inferencia válida puede hacerse sobre la relación entre pobreza y acceso al agua?",
      options: [
        "Los países de altos ingresos sufren la crisis de agua con igual frecuencia",
        "Los países ricos provocan mayor contaminación del agua que los pobres",
        "Las personas con menores recursos son las más afectadas por la falta de agua segura",
      ],
      correctAnswer: 2,
      explanation: "El texto señala que las enfermedades por agua contaminada afectan 'principalmente a países de bajos ingresos', lo que permite inferir que la pobreza agrava la falta de acceso a agua segura.",
    },

    // 41 · Evaluación de la forma y el contenido
    {
      question: "A partir del texto sobre agua potable:<br><br>«Según la Organización Mundial de la Salud, más de 2 000 millones de personas carecen de agua segura. Los expertos proponen tecnologías accesibles de purificación y una regulación más estricta de los contaminantes industriales.»<br><br>¿Por qué el texto cita datos de organismos como la OMS y la ONU?",
      options: [
        "Para dar sustento y autoridad a las afirmaciones sobre la crisis del agua",
        "Para cuestionar la credibilidad de los organismos internacionales",
        "Para demostrar que el problema del agua ya está resuelto a nivel mundial",
      ],
      correctAnswer: 0,
      explanation: "Citar a la OMS y la ONU tiene como función respaldar las afirmaciones con fuentes reconocidas internacionalmente, dándole credibilidad y autoridad al texto.",
    },

    // ── TEXTO D · Cuento — Las cartas del abuelo ──────────────────────────
    // (Reactivos 42–45: identificación, interpretación, evaluación, interpretación)

    // 42 · Identificación de información
    {
      question: "Lee el siguiente texto y responde.<br><br>«El abuelo guardaba en su cajón una colección de cartas amarillentas que nunca dejaba leer a nadie. Cuando le preguntaban al respecto, siempre respondía lo mismo: \"Algún día entenderás que hay palabras que solo cobran sentido cuando ya no estás listo para escucharlas.\" Después de su muerte, María encontró el cajón abierto. Las cartas estaban escritas por él mismo, dirigidas a su yo joven, llenas de consejos que nunca había podido seguir. Al leerlas, María comprendió que su abuelo había pasado toda su vida intentando pedirse perdón a sí mismo.»<br><br>¿Qué encontró María en el cajón del abuelo?",
      options: [
        "Fotografías de la familia que nunca había visto",
        "Cartas escritas por el abuelo dirigidas a su yo joven",
        "Objetos personales del abuelo de cuando era niño",
      ],
      correctAnswer: 1,
      explanation: "El texto dice explícitamente que 'las cartas estaban escritas por él mismo, dirigidas a su yo joven, llenas de consejos que nunca había podido seguir.'",
    },

    // 43 · Interpretación — frase del personaje
    {
      question: "Con base en el cuento de las cartas del abuelo:<br><br>«\"Algún día entenderás que hay palabras que solo cobran sentido cuando ya no estás listo para escucharlas.\" Las cartas estaban llenas de consejos que el abuelo nunca había podido seguir. María comprendió que él había pasado su vida intentando pedirse perdón a sí mismo.»<br><br>¿Qué significa la frase del abuelo sobre las palabras que 'solo cobran sentido cuando ya no estás listo para escucharlas'?",
      options: [
        "Que algunos mensajes solo se comprenden cuando ya no es posible actuar en consecuencia",
        "Que las palabras pierden su valor con el paso del tiempo",
        "Que las personas mayores deben guardar silencio ante los jóvenes",
      ],
      correctAnswer: 0,
      explanation: "La frase alude a que ciertas verdades solo se entienden cuando ya no podemos cambiar nada. El cuento lo confirma: el abuelo escribió consejos que 'nunca había podido seguir.'",
    },

    // 44 · Evaluación — recurso narrativo
    {
      question: "De acuerdo con el cuento de las cartas del abuelo:<br><br>«Las cartas estaban escritas por él mismo, dirigidas a su yo joven, llenas de consejos que nunca había podido seguir. Al leerlas, María comprendió que su abuelo había pasado toda su vida intentando pedirse perdón a sí mismo.»<br><br>¿Qué función narrativa cumplen las cartas que el abuelo se escribe a sí mismo?",
      options: [
        "Describir los secretos familiares que el abuelo quería preservar",
        "Expresar el conflicto interno del personaje consigo mismo",
        "Mostrar la comunicación entre el abuelo y su nieta a través del tiempo",
      ],
      correctAnswer: 1,
      explanation: "Las cartas son un recurso que externaliza el mundo interior del abuelo: su deseo de reconciliarse con sus propias decisiones y errores pasados. Representan el conflicto interno del personaje.",
    },

    // 45 · Interpretación — desenlace
    {
      question: "A partir del cuento de las cartas del abuelo:<br><br>«Después de su muerte, María encontró el cajón abierto. Las cartas estaban escritas por el abuelo a su yo joven. Al leerlas, María comprendió algo sobre la vida de su abuelo.»<br><br>¿Qué comprendió María al leer las cartas?",
      options: [
        "Que las cartas contenían mensajes para ella sobre cómo vivir su vida",
        "Que el abuelo guardaba secretos de familia que quería proteger",
        "Que el abuelo había pasado su vida intentando pedirse perdón a sí mismo",
      ],
      correctAnswer: 2,
      explanation: "El cuento lo afirma en su conclusión: 'María comprendió que su abuelo había pasado toda su vida intentando pedirse perdón a sí mismo.'",
    },

    // ── TEXTO E · Ensayo literario — La memoria ───────────────────────────
    // (Reactivos 46–49: identificación, interpretación ×2, evaluación)

    // 46 · Identificación de información
    {
      question: "Lee el siguiente texto y responde.<br><br>«La memoria no es un archivo fiel de lo que vivimos; es, más bien, una narración que construimos y reconstruimos cada vez que recordamos. Al evocar un recuerdo, lo modificamos levemente: lo teñimos con nuestro estado de ánimo presente y lo integramos en nuestra historia personal. En este sentido, recordar es siempre un acto creativo. Los escritores han explorado esta idea: Marcel Proust mostró cómo un simple olor puede despertar avalanchas de imágenes del pasado, revelando que el tiempo habita de forma permanente en los sentidos.»<br><br>¿A qué compara el autor la memoria en el texto?",
      options: [
        "A un archivo fiel de todo lo que vivimos",
        "A una fotografía que captura los momentos exactamente como ocurrieron",
        "A una narración que construimos y reconstruimos al recordar",
      ],
      correctAnswer: 2,
      explanation: "El texto afirma explícitamente: 'la memoria no es un archivo fiel de lo que vivimos; es, más bien, una narración que construimos y reconstruimos cada vez que recordamos.'",
    },

    // 47 · Interpretación — idea central
    {
      question: "Con base en el ensayo sobre la memoria:<br><br>«Al evocar un recuerdo, lo modificamos levemente: lo teñimos con nuestro estado de ánimo presente y lo integramos en nuestra historia personal. En este sentido, recordar es siempre un acto creativo.»<br><br>¿Qué quiere decir el autor al afirmar que 'recordar es siempre un acto creativo'?",
      options: [
        "Que los recuerdos son completamente inventados y no tienen ningún valor de verdad",
        "Que al recordar no solo recuperamos el pasado, sino que lo transformamos desde el presente",
        "Que solo los artistas y escritores tienen la capacidad de recordar correctamente",
      ],
      correctAnswer: 1,
      explanation: "Al recordar modificamos los recuerdos con nuestro estado de ánimo presente y los integramos en nuestra historia. Por eso es un acto creativo: no es recuperación pasiva sino construcción activa.",
    },

    // 48 · Evaluación — función de la referencia a Proust
    {
      question: "De acuerdo con el ensayo sobre la memoria:<br><br>«Los escritores han explorado esta idea: Marcel Proust mostró cómo un simple olor puede despertar avalanchas de imágenes del pasado, revelando que el tiempo habita de forma permanente en los sentidos.»<br><br>¿Para qué menciona el autor a Marcel Proust en el ensayo?",
      options: [
        "Para ilustrar, con un ejemplo literario, que el pasado vive en los sentidos",
        "Para demostrar que los escritores tienen mejor memoria que las demás personas",
        "Para criticar la obra de Proust y proponer una visión alternativa de la memoria",
      ],
      correctAnswer: 0,
      explanation: "Proust se cita como ejemplo literario que ilustra el argumento del autor: la memoria no es lineal y el pasado puede activarse sensorialmente. Refuerza la tesis del ensayo.",
    },

    // 49 · Interpretación — proceso del recuerdo
    {
      question: "A partir del ensayo sobre la memoria:<br><br>«Al evocar un recuerdo, lo modificamos levemente: lo teñimos con nuestro estado de ánimo presente y lo integramos en nuestra historia personal.»<br><br>Según el texto, ¿qué sucede con un recuerdo cada vez que lo evocamos?",
      options: [
        "Se vuelve más preciso y detallado con el paso del tiempo",
        "Se modifica levemente, influido por el estado de ánimo del presente",
        "Permanece exactamente igual, sin ninguna alteración",
      ],
      correctAnswer: 1,
      explanation: "El texto afirma que 'al evocar un recuerdo, lo modificamos levemente: lo teñimos con nuestro estado de ánimo presente.' Los recuerdos no son estáticos sino que cambian al ser evocados.",
    },

    // ── TEXTO F · Cuento — El lago y las estrellas ────────────────────────
    // (Reactivos 50–53: identificación, interpretación ×2, evaluación)

    // 50 · Identificación de información
    {
      question: "Lee el siguiente texto y responde.<br><br>«Desde niña, Sofía había escuchado que el lago al fondo del volcán era un espejo del cielo. Su abuela le contaba que, en noches claras, los peces saltaban para tocar las estrellas reflejadas y quedaban atrapados en la luz. Cuando Sofía creció y estudió biología, supo que los peces morían por los cambios bruscos de temperatura al saltar fuera del agua. Pero nunca le contó eso a su abuela. Algunas verdades, pensó, son menos verdaderas que los sueños que reemplazan.»<br><br>¿Qué le contaba la abuela de Sofía sobre el lago?",
      options: [
        "Que los peces saltaban para tocar las estrellas reflejadas y quedaban atrapados en la luz",
        "Que era peligroso acercarse al lago durante las noches",
        "Que el lago era el reflejo de los sueños de quienes lo observaban",
      ],
      correctAnswer: 0,
      explanation: "El texto dice que la abuela contaba que 'los peces saltaban para tocar las estrellas reflejadas y quedaban atrapados en la luz.'",
    },

    // 51 · Interpretación — tema central
    {
      question: "Con base en el cuento del lago y las estrellas:<br><br>«Sofía supo que los peces morían por los cambios bruscos de temperatura al saltar fuera del agua. Pero nunca le contó eso a su abuela. Algunas verdades, pensó, son menos verdaderas que los sueños que reemplazan.»<br><br>¿Cuál es el tema central del cuento?",
      options: [
        "El daño del cambio climático en los ecosistemas de los volcanes",
        "La tensión entre la explicación científica y el valor de la imaginación",
        "La importancia de la educación científica para comprender la naturaleza",
      ],
      correctAnswer: 1,
      explanation: "El cuento presenta el contraste entre el conocimiento biológico de Sofía y la historia poética de su abuela. El tema es la tensión entre ciencia e imaginación, y la elección de Sofía de preservar el relato.",
    },

    // 52 · Evaluación — decisión del personaje
    {
      question: "De acuerdo con el cuento del lago y las estrellas:<br><br>«Sofía supo que los peces morían por los cambios bruscos de temperatura al saltar fuera del agua. Pero nunca le contó eso a su abuela. Algunas verdades, pensó, son menos verdaderas que los sueños que reemplazan.»<br><br>¿Por qué Sofía decide no contarle a su abuela la explicación científica?",
      options: [
        "Porque no está segura de que su conocimiento biológico sea correcto",
        "Porque la abuela ya es muy mayor para aprender información nueva",
        "Porque valora más la historia de su abuela que la precisión científica",
      ],
      correctAnswer: 2,
      explanation: "Sofía calla porque 'algunas verdades son menos verdaderas que los sueños que reemplazan.' Elige preservar el significado emocional y poético de la historia de su abuela sobre la precisión técnica.",
    },

    // 53 · Interpretación — frase final
    {
      question: "A partir del cuento del lago y las estrellas:<br><br>«Sofía nunca le contó a su abuela la explicación biológica. Algunas verdades, pensó, son menos verdaderas que los sueños que reemplazan.»<br><br>¿Qué significa la frase final del cuento?",
      options: [
        "Que la ciencia siempre tiene menos valor que la tradición oral",
        "Que ciertas explicaciones racionales pueden empobrecer el significado de lo que describen",
        "Que los sueños son más importantes que la realidad en la vida cotidiana",
      ],
      correctAnswer: 1,
      explanation: "La frase reflexiona sobre el valor de la imaginación frente a las explicaciones técnicas. La historia de la abuela, aunque no sea biológicamente precisa, contiene una verdad emocional y simbólica más rica.",
    },

    // ── TEXTO G · Convocatoria — Concurso de cuento ───────────────────────
    // (Reactivos 54–56: identificación, interpretación, evaluación)

    // 54 · Identificación de información
    {
      question: "Lee el siguiente texto y responde.<br><br>«CONVOCATORIA — Concurso Estatal de Cuento Corto \"Jóvenes Voces 2025\". La Secretaría de Cultura convoca a jóvenes de entre 14 y 18 años. Los textos deberán ser inéditos, escritos en español, con extensión de 500 a 1 000 palabras. Se enviarán al correo concurso@culturaestado.mx antes del 30 de septiembre de 2025, en formato Word y con seudónimo, sin incluir datos del autor en el documento. Los tres primeros lugares recibirán diploma, publicación en la revista cultural del Estado y premio económico.»<br><br>¿Cuál es el requisito de extensión que deben cumplir los textos participantes?",
      options: [
        "Entre 300 y 500 palabras",
        "Entre 500 y 1 000 palabras",
        "Mínimo 1 000 palabras",
      ],
      correctAnswer: 1,
      explanation: "La convocatoria establece explícitamente que los textos deben tener 'extensión de 500 a 1 000 palabras.'",
    },

    // 55 · Interpretación — propósito del texto
    {
      question: "Con base en la convocatoria del concurso de cuento:<br><br>«La Secretaría de Cultura convoca a jóvenes de entre 14 y 18 años a participar en el Concurso Estatal de Cuento Corto. Los textos deberán ser inéditos, en español, con extensión de 500 a 1 000 palabras.»<br><br>¿Cuál es el propósito principal de este texto?",
      options: [
        "Invitar a jóvenes de entre 14 y 18 años a participar en un concurso de escritura",
        "Informar sobre los premios literarios que han ganado otros autores",
        "Explicar las bases del sistema de becas culturales del Estado",
      ],
      correctAnswer: 0,
      explanation: "Una convocatoria es un texto que hace un llamado a participar en un evento o proceso. En este caso invita específicamente a jóvenes de 14 a 18 años a un concurso de cuento corto.",
    },

    // 56 · Evaluación de la forma y el contenido
    {
      question: "De acuerdo con la convocatoria del concurso de cuento:<br><br>«Jóvenes de entre 14 y 18 años. Textos inéditos, 500 a 1 000 palabras, en formato Word con seudónimo, sin datos del autor, enviados antes del 30 de septiembre de 2025.»<br><br>¿Cuál de las siguientes situaciones describe a un participante que cumple CORRECTAMENTE con todas las bases?",
      options: [
        "Un joven de 20 años envía un cuento de 800 palabras con su nombre completo en el documento",
        "Un joven de 15 años envía un cuento publicado previamente en su blog, con seudónimo y 600 palabras",
        "Una joven de 16 años envía un cuento inédito de 700 palabras con seudónimo antes del 30 de septiembre",
      ],
      correctAnswer: 2,
      explanation: "La opción C cumple todos los requisitos: 16 años (rango 14-18), texto inédito, 700 palabras (rango 500-1 000), seudónimo, sin datos personales y entregado antes de la fecha. La A viola la edad y el uso de nombre real; la B usa un texto ya publicado.",
    },

    // ── TEXTO H · Noticia — Hábitos de lectura en México ─────────────────
    // (Reactivos 57–59: identificación, interpretación, evaluación)

    // 57 · Identificación de información
    {
      question: "Lee el siguiente texto y responde.<br><br>«CIUDAD DE MÉXICO — El INEGI publicó los resultados de su encuesta sobre hábitos de lectura en México. El 42% de la población mayor de 18 años declaró no haber leído ningún libro en el último año. Las razones más citadas fueron: falta de tiempo (35%), falta de interés (28%) y costo elevado de los libros (18%). Sin embargo, el consumo de contenidos digitales aumentó 12% respecto al año anterior. Especialistas en educación señalan la necesidad de replantear las políticas públicas de fomento a la lectura, especialmente entre los jóvenes.»<br><br>¿Cuál fue la razón más citada para no leer libros?",
      options: [
        "El costo elevado de los libros",
        "La falta de tiempo",
        "La falta de interés",
      ],
      correctAnswer: 1,
      explanation: "La noticia reporta que la razón más citada fue 'falta de tiempo (35%)', seguida de 'falta de interés (28%)' y 'costo elevado de los libros (18%)'.",
    },

    // 58 · Interpretación — inferencia válida
    {
      question: "Con base en la noticia sobre hábitos de lectura:<br><br>«El 42% de la población no leyó ningún libro en el último año. Sin embargo, el consumo de contenidos digitales como artículos en línea y publicaciones en redes sociales aumentó 12% respecto al año anterior.»<br><br>¿Qué inferencia válida puede hacerse a partir de estos datos?",
      options: [
        "Aunque la lectura de libros disminuye, el consumo de contenidos escritos digitales aumenta",
        "Los mexicanos no consumen ningún tipo de contenido escrito",
        "Los especialistas proponen eliminar los libros físicos y reemplazarlos por plataformas digitales",
      ],
      correctAnswer: 0,
      explanation: "La noticia reporta que la lectura de libros es baja, pero el consumo digital creció 12%. Se infiere que los mexicanos no dejaron de leer, sino que cambiaron el soporte.",
    },

    // 59 · Evaluación de la forma y el contenido
    {
      question: "A partir de la noticia sobre hábitos de lectura:<br><br>«Especialistas en educación señalan que estos resultados evidencian la necesidad de replantear las políticas públicas de fomento a la lectura, especialmente entre los jóvenes.»<br><br>¿Por qué la noticia incluye la opinión de especialistas en educación?",
      options: [
        "Para cuestionar la validez de los datos publicados por el INEGI",
        "Para promover los libros físicos como el único medio válido de lectura",
        "Para dar contexto analítico a los datos y señalar sus implicaciones para la política educativa",
      ],
      correctAnswer: 2,
      explanation: "En el género periodístico, las voces expertas se incluyen para dar interpretación a los hechos reportados. Los especialistas no cuestionan los datos sino que señalan su significado y las acciones necesarias.",
    },

    // ═══════════════════════════════════════════════════════════════════════
    // BLOQUE 3 · REDACCIÓN INDIRECTA  (reactivos 60–89)
    // ───────────────────────────────────────────────────────────────────────
    // Subárea: Estudio — Comunicativa (60-64), Gramatical/Semántica (65-69), Ortográfica (70-74)
    // Subárea: Participación social — Comunicativa (75-79), Gramatical/Semántica (80-84), Ortográfica (85-89)
    // Distribución de respuestas: A×10, B×10, C×10
    // ═══════════════════════════════════════════════════════════════════════

    // ── Subárea Estudio · Comunicativa ────────────────────────────────────

    // 60 · Intención comunicativa — carta formal (A)
    {
      question: "Lee el siguiente fragmento y elige la opción que mejor lo completa.<br><br>«Estimada directora:<br>Por medio de la presente me dirijo a usted para solicitar respetuosamente una prórroga para la entrega de mi trabajo de investigación. Debido a una enfermedad reciente, me fue imposible concluirlo en el plazo establecido. Quedo a su disposición para cualquier aclaración.<br>____________________»<br><br>¿Cuál de las siguientes opciones es el cierre más apropiado para esta carta formal?",
      options: [
        "Sin más por el momento, agradezco su comprensión y quedo en espera de su respuesta.",
        "Espero que no haya bronca y que me den chance de entregar después.",
        "Ya sé que me pasé del tiempo, pero es que de verdad me enfermé mucho.",
      ],
      correctAnswer: 0,
      explanation: "En una carta formal se requiere un cierre cortés y formal. La opción A usa el registro adecuado: agradece y manifiesta disposición al diálogo. Las otras opciones emplean lenguaje coloquial inapropiado para el contexto.",
    },

    // 61 · Registro y género discursivo — artículo científico (B)
    {
      question: "Lee el siguiente fragmento de un artículo de investigación y elige la opción que mejor llena el espacio en blanco.<br><br>«Los ecosistemas costeros constituyen una de las zonas con mayor biodiversidad del planeta. ____________________, su degradación es una de las problemáticas ambientales más urgentes a escala global. En los últimos cincuenta años, se ha perdido más del 35% de los manglares y praderas marinas a nivel mundial.»<br><br>¿Cuál conectivo es el más adecuado para iniciar la segunda oración?",
      options: [
        "Y por eso mismo",
        "Sin embargo, paradójicamente,",
        "Pues bien, está clarísimo que",
      ],
      correctAnswer: 1,
      explanation: "La segunda oración introduce un contraste: ecosistemas valiosos pero degradados. 'Sin embargo, paradójicamente,' es el marcador adversativo que funciona mejor en un registro académico. Las otras opciones son demasiado informales o no expresan contraste.",
    },

    // 62 · Propósito comunicativo — monografía (C)
    {
      question: "Un estudiante escribe una monografía sobre la Revolución Mexicana para su clase de historia. ¿Cuál de los siguientes párrafos de introducción corresponde mejor al propósito y registro de una monografía académica?",
      options: [
        "La Revolución Mexicana fue padrísima porque cambió al país para siempre y mucha gente se fue a la guerra.",
        "Este trabajo habla de la Revolución Mexicana, que pasó hace mucho tiempo y fue muy importante para México.",
        "El presente trabajo analiza los factores políticos, económicos y sociales que desencadenaron la Revolución Mexicana (1910-1921) y examina sus principales consecuencias en la conformación del Estado moderno mexicano.",
      ],
      correctAnswer: 2,
      explanation: "Una monografía académica requiere lenguaje formal, precisión y un planteamiento claro del objeto de estudio. La opción C define el tema, el período y los ejes de análisis. Las opciones A y B emplean lenguaje informal o vago.",
    },

    // 63 · Intención comunicativa — solicitud de beca (A)
    {
      question: "Lee el siguiente fragmento de una carta de solicitud de beca y elige la opción que mejor llena el espacio en blanco.<br><br>«El Comité de Becas de la Universidad Nacional<br>Presente:<br>Por medio de esta carta solicito considerar mi candidatura para la beca de excelencia académica. Cuento con promedio de 9.5 y he participado en tres proyectos de investigación. ____________________»<br><br>¿Qué enunciado es el más apropiado para continuar la solicitud?",
      options: [
        "Adjunto la documentación requerida y agradezco de antemano la atención prestada a mi solicitud.",
        "Ojalá me la den porque de verdad la necesito y me esforcé mucho este año.",
        "Mándenme un correo si necesitan algo más de mi parte, gracias.",
      ],
      correctAnswer: 0,
      explanation: "La solicitud de beca es un texto formal. La opción A mantiene el registro, menciona la documentación adjunta y agradece con formalidad. Las otras dos opciones usan expresiones coloquiales inadecuadas para un documento oficial.",
    },

    // 64 · Adecuación textual — artículo científico (B)
    {
      question: "Lee el siguiente fragmento y elige la opción que mejor completa las conclusiones de un artículo científico sobre el estrés académico.<br><br>«Los resultados obtenidos indican que el 68% de los estudiantes universitarios presenta niveles elevados de estrés durante los períodos de exámenes. ____________________»<br><br>¿Cuál de las siguientes opciones es la más adecuada como conclusión?",
      options: [
        "O sea, la mayoría de los chavos se estresa mucho cuando hay exámenes, lo cual es bastante lógico.",
        "Estos datos sugieren la necesidad de implementar programas institucionales de manejo del estrés dirigidos a la población estudiantil.",
        "Pues está muy claro que los estudiantes no saben estudiar y por eso se estresan tanto.",
      ],
      correctAnswer: 1,
      explanation: "Las conclusiones de un artículo científico deben proponer implicaciones basadas en los datos, con lenguaje objetivo y formal. La opción B deriva una recomendación fundamentada en los resultados. Las opciones A y C son informales o emiten juicios no respaldados.",
    },

    // ── Subárea Estudio · Gramatical y Semántica ──────────────────────────

    // 65 · Concordancia nominal — adjetivo (C)
    {
      question: "Identifica la oración que presenta un error de concordancia nominal entre sustantivo y adjetivo.",
      options: [
        "La conferencia fue muy productiva y enriquecedora para todos los asistentes.",
        "Los resultados obtenidos son consistentes con la hipótesis planteada.",
        "La investigadora presentó datos muy relevantes y concluyentes sobre los efectos estudiados, aunque algunos aspecto quedaron pendientes.",
      ],
      correctAnswer: 2,
      explanation: "En la opción C, 'algunos aspecto' presenta un error de concordancia: el adjetivo 'algunos' (plural) no concuerda con el sustantivo 'aspecto' (singular). La forma correcta es 'algunos aspectos'.",
    },

    // 66 · Uso de «haber» impersonal (A)
    {
      question: "¿Cuál de las siguientes oraciones usa correctamente el verbo «haber» en su forma impersonal?",
      options: [
        "Hubo muchas propuestas interesantes en el foro académico.",
        "Hubieron muchas propuestas interesantes en el foro académico.",
        "Habían muchas propuestas interesantes en el foro académico.",
      ],
      correctAnswer: 0,
      explanation: "Cuando 'haber' funciona como verbo impersonal (existencial), se conjuga siempre en singular: 'hubo', 'hay', 'había', nunca 'hubieron' ni 'habían'. La opción A es la única correcta.",
    },

    // 67 · Correferencia pronominal (B)
    {
      question: "Lee el siguiente fragmento y elige la opción que resuelve correctamente la correferencia pronominal para evitar ambigüedad.<br><br>«La directora convocó a la coordinadora antes de que _______ presentara el informe anual ante el consejo.»<br><br>¿Cuál de las siguientes versiones elimina la ambigüedad del pronombre?",
      options: [
        "La directora convocó a la coordinadora antes de que ella presentara el informe anual ante el consejo.",
        "La directora convocó a la coordinadora antes de que esta última presentara el informe anual ante el consejo.",
        "La directora convocó a la coordinadora antes de que las dos presentaran el informe anual ante el consejo.",
      ],
      correctAnswer: 1,
      explanation: "El demostrativo 'esta última' resuelve la ambigüedad al señalar inequívocamente a la coordinadora (mencionada en segundo lugar). 'Ella' en la opción A sigue siendo ambiguo; la opción C cambia el significado al introducir a las dos personas.",
    },

    // 68 · Sinonimia contextual (C)
    {
      question: "En el siguiente enunciado académico, ¿cuál de las opciones es el mejor sinónimo contextual de la palabra **conciso**?<br><br>«El resumen debe ser conciso: no debe exceder las 200 palabras.»",
      options: [
        "elaborado",
        "exhaustivo",
        "breve",
      ],
      correctAnswer: 2,
      explanation: "En este contexto, 'conciso' significa que el texto debe expresar las ideas con pocas palabras. 'Breve' es el sinónimo más adecuado. 'Elaborado' y 'exhaustivo' son antónimos o implican extensión, lo contrario de lo requerido.",
    },

    // 69 · Marcadores textuales — contraste (A)
    {
      question: "¿Cuál marcador textual completa mejor el siguiente fragmento para expresar una relación de contraste?<br><br>«Los investigadores esperaban que el tratamiento redujera los síntomas en un 50%. ____________________, los resultados mostraron una mejora del 78%, superando todas las expectativas.»",
      options: [
        "Sin embargo",
        "Además",
        "Por lo tanto",
      ],
      correctAnswer: 0,
      explanation: "'Sin embargo' es un marcador adversativo que introduce el contraste entre lo esperado (50%) y lo obtenido (78%). 'Además' añade información, y 'Por lo tanto' indica consecuencia, ninguno expresa el contraste correcto.",
    },

    // ── Subárea Estudio · Ortográfica ─────────────────────────────────────

    // 70 · Grafofonética b/v (B)
    {
      question: "¿En cuál de las siguientes series todas las palabras están escritas correctamente?",
      options: [
        "adbertencia, absorver, caveza",
        "advertencia, absorber, cabeza",
        "adbertencia, absorber, cabeza",
      ],
      correctAnswer: 1,
      explanation: "'Advertencia' se escribe con 'd' y 'v'; 'absorber' lleva 'b'; 'cabeza' lleva 'b'. La opción B contiene las tres palabras correctamente escritas. Las otras opciones mezclan grafías incorrectas.",
    },

    // 71 · Grafofonética g/j (C)
    {
      question: "¿En cuál de las siguientes oraciones se encuentran **todas** las palabras con g/j escritas correctamente?",
      options: [
        "La gerquía institucional establece quién ejerse la autoridad en cada área.",
        "La jerarquía institucional establece quién ejerze la autoridad en cada área.",
        "La jerarquía institucional establece quién ejerzo la autoridad en cada ingeniero.",
      ],
      correctAnswer: 2,
      explanation: "'Jerarquía' se escribe con 'j'; 'ejerzo' (de ejercer) lleva 'z' en primera persona; 'ingeniero' lleva 'g'. La opción C tiene las tres palabras correctas. Las otras opciones contienen errores en al menos una de ellas.",
    },

    // 72 · Puntuación — coma en enumeración (A)
    {
      question: "¿Cuál de las siguientes oraciones tiene la puntuación correcta en la enumeración?",
      options: [
        "Para el ensayo necesitarás papel, bolígrafo, diccionario y mucha concentración.",
        "Para el ensayo necesitarás papel bolígrafo diccionario y mucha concentración.",
        "Para el ensayo necesitarás, papel, bolígrafo, diccionario, y, mucha concentración.",
      ],
      correctAnswer: 0,
      explanation: "En una enumeración, los elementos se separan con coma. Antes de la conjunción 'y' que une el último elemento no se usa coma en español (diferencia con el inglés). La opción A aplica las comas de manera correcta.",
    },

    // 73 · Puntuación — dos puntos (B)
    {
      question: "¿En cuál oración se usan correctamente los dos puntos?",
      options: [
        "Los documentos requeridos son: que presentes, tu acta de nacimiento, y tu credencial.",
        "Los documentos requeridos son: acta de nacimiento, CURP y credencial oficial.",
        "Los documentos requeridos: son acta de nacimiento, CURP y credencial oficial.",
      ],
      correctAnswer: 1,
      explanation: "Los dos puntos se usan para introducir una enumeración después de un elemento sintetizador. En la opción B, 'son:' anticipa correctamente la lista. La A tiene comas innecesarias; la C coloca los dos puntos en lugar incorrecto, interrumpiendo el verbo.",
    },

    // 74 · Acentuación — hiato (C)
    {
      question: "¿Cuál de las siguientes palabras lleva tilde correctamente escrita?",
      options: [
        "fotografia",
        "fotográfia",
        "fotografía",
      ],
      correctAnswer: 2,
      explanation: "'Fotografía' es una palabra esdrújula (foto-gra-FÍ-a) con un hiato acentuado: la 'i' tónica va tildada para indicar que la vocal cerrada forma sílaba propia. La opción C es la única escritura correcta.",
    },

    // ── Subárea Participación Social · Comunicativa ───────────────────────

    // 75 · Registro — correo laboral (A)
    {
      question: "Un trabajador debe enviar un correo electrónico a su jefa para avisar que no podrá asistir al trabajo por enfermedad. ¿Cuál de las siguientes opciones es la más apropiada?",
      options: [
        "Estimada Lic. García: Le informo que debido a una enfermedad no podré presentarme hoy al trabajo. Adjunto el justificante médico. Quedo a su disposición. Atentamente, Carlos Mendoza.",
        "Hola jefa, no voy a ir hoy porque me siento muy mal, luego te cuento. Saludos.",
        "Jefa, avisando que no voy. Estoy enfermo. Luego paso el papel del doctor.",
      ],
      correctAnswer: 0,
      explanation: "Un correo laboral requiere un registro formal: saludo con tratamiento, motivo claro, mención del justificante y despedida formal. Solo la opción A cumple con todos estos elementos.",
    },

    // 76 · Género discursivo — crónica deportiva (B)
    {
      question: "¿Cuál de los siguientes fragmentos corresponde al género de la crónica deportiva?",
      options: [
        "Se solicita a todos los jugadores presentarse en el estadio con uniforme completo a las 17:00 hrs.",
        "El equipo local arrancó el partido con una presión sostenida sobre el arco rival. A los 23 minutos, una jugada individual del delantero número nueve terminó en un zapatazo inapelable que puso el marcador 1-0.",
        "El objetivo de este trabajo es analizar la estructura táctica del equipo ganador durante el torneo clausura.",
      ],
      correctAnswer: 1,
      explanation: "La crónica deportiva narra los sucesos de un partido en orden cronológico con un estilo ágil y descriptivo. La opción B describe la acción del juego con detalle y dinamismo, característicos de la crónica. La A es un aviso; la C es un ensayo académico.",
    },

    // 77 · Propósito comunicativo — eslogan (C)
    {
      question: "¿Cuál de los siguientes textos tiene como propósito principal persuadir al público para que use el transporte colectivo metro?",
      options: [
        "El Sistema de Transporte Colectivo Metro fue inaugurado en 1969 y actualmente cuenta con doce líneas.",
        "Las normas de uso del metro prohíben introducir bebidas alcohólicas, mascotas o artículos de gran tamaño.",
        "Muévete más rápido, gasta menos y cuida el planeta. ¡El metro es tu mejor opción!",
      ],
      correctAnswer: 2,
      explanation: "Un eslogan tiene propósito persuasivo y usa un lenguaje directo, llamativo y emotivo. La opción C invita a la acción y apela a beneficios concretos (rapidez, ahorro, medio ambiente). Las otras son informativas o normativas.",
    },

    // 78 · Adecuación textual — correo académico (A)
    {
      question: "Un estudiante de posgrado escribe un correo a una investigadora para solicitar que sea su asesora de tesis. ¿Cuál de las siguientes opciones presenta el correo más adecuado?",
      options: [
        "Estimada Dra. Ramírez: Me dirijo a usted para solicitar su asesoría en mi proyecto de tesis sobre lingüística computacional. Adjunto mi propuesta de investigación. En espera de su respuesta, reciba un cordial saludo.",
        "Hola doctora, quería preguntarle si me puede asesorar en mi tesis, es sobre algo de computación y lenguaje. Espero que sí pueda.",
        "Necesito asesora de tesis. ¿Puede ser usted? Le mando lo que tenga que mandar. Gracias.",
      ],
      correctAnswer: 0,
      explanation: "Un correo académico formal incluye saludo con tratamiento, identificación del propósito, información relevante (tema de la tesis, documentos adjuntos) y despedida. La opción A cumple todos estos requisitos; las otras son informales o imprecisas.",
    },

    // 79 · Registro lingüístico — crónica deportiva (B)
    {
      question: "Lee el siguiente fragmento de crónica deportiva y elige la opción que mejor completa el espacio en blanco con el registro adecuado.<br><br>«Los últimos minutos del partido fueron de infarto. El equipo visitante presionó con todo, pero la defensa local se mantuvo firme. Al final del tiempo reglamentario, ____________________»",
      options: [
        "no pasó nada y el partido terminó.",
        "el árbitro decretó el pitido final con el marcador sin variación, sellando un empate 0-0 que supo a poco para los aficionados.",
        "la cosa quedó igual que al principio.",
      ],
      correctAnswer: 1,
      explanation: "La crónica deportiva usa un registro vivaz y descriptivo, con vocabulario específico del deporte. La opción B continúa en el mismo tono de tensión narrativa usando términos como 'árbitro', 'marcador' y 'aficionados'. Las otras opciones son demasiado planas o coloquiales.",
    },

    // ── Subárea Participación Social · Gramatical y Semántica ─────────────

    // 80 · Concordancia nominal — participio (C)
    {
      question: "¿En cuál de las siguientes oraciones hay un error de concordancia entre el sustantivo y el adjetivo o participio que lo modifica?",
      options: [
        "Las propuestas presentadas por el comité fueron aprobadas por unanimidad.",
        "Los candidatos seleccionados deberán presentar su documentación antes del viernes.",
        "La decisión tomados por las autoridades sorprendió a la comunidad estudiantil.",
      ],
      correctAnswer: 2,
      explanation: "En la opción C, 'tomados' es un participio en masculino plural que no concuerda con 'La decisión', que es femenino singular. La forma correcta es 'tomada'. Las otras oraciones presentan concordancia correcta.",
    },

    // 81 · Concordancia verbal — ni...ni (A)
    {
      question: "¿Cuál de las siguientes oraciones presenta correctamente la concordancia verbal con la construcción «ni... ni»?",
      options: [
        "Ni el presidente ni el secretario asistieron a la reunión.",
        "Ni el presidente ni el secretario asistió a la reunión.",
        "Ni el presidente ni el secretario asistiera a la reunión.",
      ],
      correctAnswer: 0,
      explanation: "Cuando la correlación 'ni... ni' une dos sujetos, el verbo concuerda en plural. La opción A usa 'asistieron' (plural), que es la forma correcta. La B usa singular (incorrecto) y la C usa subjuntivo fuera de contexto.",
    },

    // 82 · Elipsis — coherencia (B)
    {
      question: "¿En cuál de las siguientes oraciones se usa correctamente la elipsis (omisión del verbo) para evitar repetición?",
      options: [
        "María estudia medicina y Pedro estudia estudia derecho.",
        "María estudia medicina y Pedro, derecho.",
        "María estudia medicina y Pedro estudia el derecho que le corresponde.",
      ],
      correctAnswer: 1,
      explanation: "En la opción B se omite 'estudia' en la segunda parte de la oración porque ya fue mencionado antes; la coma indica la elipsis. Esto es un recurso estilístico correcto para evitar la repetición. La A repite el verbo innecesariamente; la C cambia el significado.",
    },

    // 83 · Antonimia contextual (C)
    {
      question: "¿Cuál es el antónimo más adecuado para la palabra **resignación** en el siguiente contexto?<br><br>«La actitud de resignación ante la injusticia puede ser tan dañina como la indiferencia; en cambio, la ____________________ transforma las circunstancias.»",
      options: [
        "aceptación",
        "conformidad",
        "rebeldía",
      ],
      correctAnswer: 2,
      explanation: "En este contexto, se busca un término opuesto a 'resignación' que implique acción transformadora. 'Rebeldía' es el antónimo más adecuado porque implica resistencia activa frente a la injusticia. 'Aceptación' y 'conformidad' son sinónimos o términos similares a 'resignación'.",
    },

    // 84 · Marcadores textuales — consecuencia (A)
    {
      question: "¿Cuál marcador textual completa mejor el siguiente fragmento para expresar una relación de consecuencia?<br><br>«La tasa de desempleo juvenil alcanzó el 32% durante el último trimestre. ____________________, el gobierno anunció un programa de becas para capacitación laboral.»",
      options: [
        "En consecuencia,",
        "No obstante,",
        "Por ejemplo,",
      ],
      correctAnswer: 0,
      explanation: "'En consecuencia' es un marcador de conclusión o resultado que expresa que el programa de becas surge como respuesta directa al alto desempleo. 'No obstante' indica contraste, y 'Por ejemplo' introduce un ejemplo, no una consecuencia.",
    },

    // ── Subárea Participación Social · Ortográfica ────────────────────────

    // 85 · Uso de h (B)
    {
      question: "¿En cuál de las siguientes series todas las palabras están correctamente escritas con o sin h?",
      options: [
        "abia, abitaba, ospital",
        "había, habitaba, hospital",
        "había, abitaba, ospital",
      ],
      correctAnswer: 1,
      explanation: "'Había', 'habitaba' y 'hospital' se escriben todas con h inicial. La opción B es la única que presenta las tres palabras correctamente escritas. Las otras opciones omiten la h en al menos una palabra.",
    },

    // 86 · Diéresis (C)
    {
      question: "¿En cuál de las siguientes oraciones se usa correctamente la diéresis?",
      options: [
        "El güerrero llevaba una güitarra en la espalda.",
        "El guerrero llevaba una güitarra en la espalda.",
        "El pingüino sobrevive gracias a su gruesa capa de grasa.",
      ],
      correctAnswer: 2,
      explanation: "La diéresis (¨) se usa en español únicamente sobre la u en las combinaciones 'güe' y 'güi' para indicar que la u se pronuncia. 'Pingüino' la necesita porque de otro modo la u sería muda. En 'guerrero' y 'guitarra' la u no se pronuncia y no lleva diéresis. La opción C es la única correcta.",
    },

    // 87 · Puntuación — comillas en cita textual (A)
    {
      question: "¿En cuál de las siguientes opciones se usan correctamente las comillas para introducir una cita textual?",
      options: [
        "El autor afirma: «La lectura es el ejercicio más silencioso y revolucionario que existe.»",
        "El autor afirma que la lectura es el ejercicio más silencioso y revolucionario que existe.",
        "El autor afirma: La lectura es el ejercicio más silencioso y revolucionario que existe.",
      ],
      correctAnswer: 0,
      explanation: "Las comillas (angulares «», latinas o inglesas) se usan para reproducir una cita textual. En la opción A, los dos puntos anuncian la cita y las comillas la enmarcan correctamente. La B es discurso indirecto sin cita literal; la C omite las comillas obligatorias.",
    },

    // 88 · Punto y coma en enumeración compleja (B)
    {
      question: "¿En cuál oración se usa correctamente el punto y coma para separar los elementos de una enumeración compleja?",
      options: [
        "Asistieron: la directora de la escuela, quien presidió el acto, el representante sindical, que llegó tarde, y los padres de familia, que aplaudieron al final.",
        "Asistieron: la directora de la escuela, quien presidió el acto; el representante sindical, que llegó tarde; y los padres de familia, que aplaudieron al final.",
        "Asistieron: la directora de la escuela; quien presidió el acto; el representante sindical; que llegó tarde; y los padres de familia; que aplaudieron al final.",
      ],
      correctAnswer: 1,
      explanation: "Cuando cada elemento de una enumeración ya contiene comas internas, se usa punto y coma para separar los elementos entre sí y evitar confusión. La opción B aplica correctamente punto y coma entre los tres grupos. La A usa solo comas (confusa) y la C coloca punto y coma donde solo deberían ir comas.",
    },

    // 89 · Tilde diacrítica (C)
    {
      question: "¿En cuál de las siguientes oraciones se usan correctamente **todas** las tildes diacríticas?",
      options: [
        "Tu puedes lograrlo si tu esfuerzo es constante y el apoyo de mi familia me acompaña.",
        "Tú puedes lograrlo si tú esfuerzo es constante y el apoyo de mi familia me acompaña.",
        "Tú puedes lograrlo si tu esfuerzo es constante y el apoyo de mi familia me acompaña.",
      ],
      correctAnswer: 2,
      explanation: "'Tú' (pronombre personal) lleva tilde diacrítica; 'tu' (posesivo) no la lleva. La opción A falla porque 'Tu' como pronombre debe llevar tilde. La opción B falla porque 'tú' aplicado al posesivo ('tú esfuerzo') es incorrecto. Solo la opción C distribuye correctamente la tilde.",
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
    // ═══════════════════════════════════════════════════════════════════════

    // ── Conexiones ─────────────────────────────────────────────────────────

    // 90 · Productos notables
    {
      question: "¿Cuál es la expansión correcta de (a + b)²?",
      options: [
        "a² + b²",
        "a² + 2ab + b²",
        "a² + ab + b²",
      ],
      correctAnswer: 1,
      explanation: "(a + b)² = a² + 2ab + b². El término del medio es 2ab, no ab ni cero.",
    },

    // 91 · Factorización
    {
      question: "¿Cuál es la factorización de x² + 5x + 6?",
      options: [
        "(x + 2)(x + 3)",
        "(x + 1)(x + 6)",
        "(x + 5)(x + 1)",
      ],
      correctAnswer: 0,
      explanation: "Se buscan dos números que sumen 5 y cuyo producto sea 6: son 2 y 3. Por lo tanto x² + 5x + 6 = (x + 2)(x + 3).",
    },

    // 92 · Funciones lineales — pendiente
    {
      question: "¿Cuál es la pendiente de la función f(x) = 4x − 7?",
      options: [
        "−7",
        "4",
        "7",
      ],
      correctAnswer: 1,
      explanation: "En la forma f(x) = mx + b, m es la pendiente y b la ordenada al origen. Aquí m = 4.",
    },

    // 93 · Ángulos — suplementarios
    {
      question: "Dos ángulos son suplementarios. Si uno mide 65°, ¿cuánto mide el otro?",
      options: [
        "25°",
        "115°",
        "125°",
      ],
      correctAnswer: 1,
      explanation: "Los ángulos suplementarios suman 180°. El ángulo faltante = 180° − 65° = 115°.",
    },

    // 94 · Probabilidad e incertidumbre
    {
      question: "Se lanza un dado de seis caras. ¿Cuál es la probabilidad de obtener un número mayor que 4?",
      options: [
        "1/3",
        "1/2",
        "2/3",
      ],
      correctAnswer: 0,
      explanation: "Los números mayores que 4 son 5 y 6 (2 resultados favorables de 6 posibles). P = 2/6 = 1/3.",
    },

    // 95 · Medidas de tendencia central — media
    {
      question: "Las calificaciones de un alumno en seis exámenes son: 8, 9, 7, 10, 6 y 8. ¿Cuál es su promedio?",
      options: [
        "7.5",
        "8",
        "8.5",
      ],
      correctAnswer: 1,
      explanation: "Media = (8 + 9 + 7 + 10 + 6 + 8) / 6 = 48 / 6 = 8.",
    },

    // 96 · Medidas de tendencia central — mediana
    {
      question: "Los datos ordenados de menor a mayor son: 12, 15, 17, 20, 23, 28. ¿Cuál es la mediana?",
      options: [
        "17",
        "18.5",
        "20",
      ],
      correctAnswer: 1,
      explanation: "Con seis datos, la mediana es el promedio de los dos valores centrales (posiciones 3 y 4): (17 + 20) / 2 = 18.5.",
    },

    // 97 · Probabilidad — espacio muestral / vocales
    {
      question: "Un estudiante elige al azar una letra de la palabra EXANI. ¿Cuál es la probabilidad de que sea una vocal?",
      options: [
        "2/5",
        "3/5",
        "1/2",
      ],
      correctAnswer: 1,
      explanation: "EXANI tiene 5 letras. Las vocales son E, A e I (3 letras). P(vocal) = 3/5.",
    },

    // ── Estimación ─────────────────────────────────────────────────────────

    // 98 · Binomio al cuadrado
    {
      question: "¿Cuál es el resultado de (3x + 2)²?",
      options: [
        "9x² + 4",
        "9x² + 6x + 4",
        "9x² + 12x + 4",
      ],
      correctAnswer: 2,
      explanation: "(a + b)² = a² + 2ab + b². Con a = 3x y b = 2: (3x)² + 2(3x)(2) + 2² = 9x² + 12x + 4.",
    },

    // 99 · Diferencia de cuadrados — factorización
    {
      question: "¿Cuál es la factorización de 4x² − 25?",
      options: [
        "(2x − 5)²",
        "(2x + 5)(2x − 5)",
        "(4x + 5)(x − 5)",
      ],
      correctAnswer: 1,
      explanation: "Es una diferencia de cuadrados: 4x² − 25 = (2x)² − 5² = (2x + 5)(2x − 5).",
    },

    // 100 · Potenciación — división de potencias
    {
      question: "¿Cuánto es 4³ ÷ 4¹?",
      options: [
        "4²",
        "4⁴",
        "1⁴",
      ],
      correctAnswer: 0,
      explanation: "Al dividir potencias con la misma base se restan los exponentes: 4³ ÷ 4¹ = 4^(3−1) = 4² = 16.",
    },

    // 101 · Números racionales — orden
    {
      question: "¿Cuál es el orden correcto de menor a mayor de las fracciones 2/3, 3/4 y 5/8?",
      options: [
        "5/8, 2/3, 3/4",
        "2/3, 5/8, 3/4",
        "5/8, 3/4, 2/3",
      ],
      correctAnswer: 0,
      explanation: "Convirtiendo a decimales: 5/8 = 0.625, 2/3 ≈ 0.667, 3/4 = 0.75. El orden es 5/8 < 2/3 < 3/4.",
    },

    // 102 · Estimación de longitud — unidades
    {
      question: "Un terreno mide 3.2 km de largo. ¿A cuántos metros equivale esa medida?",
      options: [
        "320 m",
        "3 200 m",
        "32 000 m",
      ],
      correctAnswer: 1,
      explanation: "1 km = 1 000 m. Por lo tanto 3.2 km = 3.2 × 1 000 = 3 200 m.",
    },

    // 103 · Desigualdad del triángulo
    {
      question: "¿Cuál de los siguientes grupos de medidas NO puede formar un triángulo?",
      options: [
        "3 cm, 4 cm, 5 cm",
        "6 cm, 8 cm, 10 cm",
        "4 cm, 6 cm, 12 cm",
      ],
      correctAnswer: 2,
      explanation: "La suma de dos lados debe ser mayor que el tercero. En la opción C: 4 + 6 = 10, que no es mayor que 12, por lo que no forma triángulo.",
    },

    // 104 · Espacio muestral — principio multiplicativo
    {
      question: "Se lanza un dado de seis caras y una moneda al mismo tiempo. ¿Cuántos resultados posibles hay en el espacio muestral?",
      options: [
        "8",
        "12",
        "6",
      ],
      correctAnswer: 1,
      explanation: "Por el principio multiplicativo: 6 resultados del dado × 2 de la moneda = 12 resultados posibles.",
    },

    // 105 · Probabilidad clásica — pelotas
    {
      question: "Una caja contiene 5 pelotas rojas, 3 azules y 2 amarillas. Al sacar una al azar, ¿cuál es la probabilidad de que sea azul?",
      options: [
        "1/3",
        "3/10",
        "1/5",
      ],
      correctAnswer: 1,
      explanation: "Total de pelotas = 5 + 3 + 2 = 10. P(azul) = 3/10.",
    },

    // ── Sentido numérico ────────────────────────────────────────────────────

    // 106 · Máximo común divisor
    {
      question: "¿Cuál es el Máximo Común Divisor (MCD) de 24 y 36?",
      options: [
        "6",
        "12",
        "8",
      ],
      correctAnswer: 1,
      explanation: "24 = 2³ × 3 y 36 = 2² × 3². El MCD usa los factores comunes con el menor exponente: 2² × 3 = 12.",
    },

    // 107 · Mínimo común múltiplo
    {
      question: "¿Cuál es el Mínimo Común Múltiplo (MCM) de 6 y 9?",
      options: [
        "3",
        "18",
        "54",
      ],
      correctAnswer: 1,
      explanation: "6 = 2 × 3 y 9 = 3². El MCM usa todos los factores con el mayor exponente: 2 × 3² = 18.",
    },

    // 108 · Propiedades de la potenciación — potencia de potencia
    {
      question: "¿Cuál es el resultado de (x⁴)³?",
      options: [
        "x⁷",
        "x¹²",
        "3x⁴",
      ],
      correctAnswer: 1,
      explanation: "En la potencia de una potencia se multiplican los exponentes: (x⁴)³ = x^(4×3) = x¹².",
    },

    // 109 · Números decimales y fraccionarios
    {
      question: "¿Cuánto es 0.75 expresado como fracción en su mínima expresión?",
      options: [
        "75/100",
        "3/4",
        "7/10",
      ],
      correctAnswer: 1,
      explanation: "0.75 = 75/100. Simplificando entre 25: 75/100 = 3/4.",
    },

    // 110 · Criterios de congruencia de triángulos
    {
      question: "Si dos triángulos tienen iguales dos lados y el ángulo comprendido entre ellos, el criterio de congruencia que aplica es:",
      options: [
        "LLL (Lado-Lado-Lado)",
        "LAL (Lado-Ángulo-Lado)",
        "ALA (Ángulo-Lado-Ángulo)",
      ],
      correctAnswer: 1,
      explanation: "El criterio LAL establece que dos triángulos son congruentes si tienen iguales dos lados y el ángulo comprendido entre ellos.",
    },

    // 111 · Medición de objetos — capacidad
    {
      question: "¿Cuántos mililitros hay en 2.5 litros?",
      options: [
        "250 mL",
        "2 500 mL",
        "25 mL",
      ],
      correctAnswer: 1,
      explanation: "1 L = 1 000 mL. Entonces 2.5 L = 2.5 × 1 000 = 2 500 mL.",
    },

    // 112 · Transformaciones geométricas — reflexión
    {
      question: "Al reflejar el punto A(3, −2) respecto al eje x, las coordenadas del punto imagen son:",
      options: [
        "(3, 2)",
        "(−3, −2)",
        "(−3, 2)",
      ],
      correctAnswer: 0,
      explanation: "La reflexión respecto al eje x cambia el signo de la coordenada y y mantiene la x: A(3, −2) → A'(3, 2).",
    },

    // 113 · Frecuencia estadística — frecuencia relativa
    {
      question: "En un grupo de 30 estudiantes, 18 aprobaron un examen. ¿Cuál es la frecuencia relativa de los que aprobaron?",
      options: [
        "18",
        "0.6",
        "60",
      ],
      correctAnswer: 1,
      explanation: "Frecuencia relativa = frecuencia absoluta / total = 18/30 = 0.6 (equivale al 60%).",
    },

    // ── Desarrollo de usos ──────────────────────────────────────────────────

    // 114 · Representación gráfica — intersección con eje y
    {
      question: "La gráfica de la función y = 2x + 3 intersecta al eje y en el punto:",
      options: [
        "(0, 2)",
        "(0, 3)",
        "(3, 0)",
      ],
      correctAnswer: 1,
      explanation: "La intersección con el eje y ocurre cuando x = 0: y = 2(0) + 3 = 3. El punto es (0, 3).",
    },

    // 115 · Representación gráfica — par que satisface la función
    {
      question: "¿Cuál de los siguientes pares ordenados satisface la función y = −x + 5?",
      options: [
        "(3, 3)",
        "(2, 4)",
        "(4, 1)",
      ],
      correctAnswer: 2,
      explanation: "Sustituyendo x = 4: y = −4 + 5 = 1. El par (4, 1) cumple la función. Los otros no: f(3) = 2 ≠ 3 y f(2) = 3 ≠ 4.",
    },

    // 116 · Área del triángulo
    {
      question: "¿Cuál es el área de un triángulo con base de 12 cm y altura de 8 cm?",
      options: [
        "96 cm²",
        "48 cm²",
        "40 cm²",
      ],
      correctAnswer: 1,
      explanation: "Área del triángulo = (base × altura) / 2 = (12 × 8) / 2 = 96 / 2 = 48 cm².",
    },

    // 117 · Perímetro del cuadrado
    {
      question: "¿Cuál es el perímetro de un cuadrado con lado de 9 cm?",
      options: [
        "36 cm",
        "81 cm",
        "18 cm",
      ],
      correctAnswer: 0,
      explanation: "Perímetro del cuadrado = 4 × lado = 4 × 9 = 36 cm.",
    },

    // ── Lenguaje matemático ─────────────────────────────────────────────────

    // 118 · Ecuaciones de primer grado
    {
      question: "Resuelve la ecuación: 5x − 3 = 2x + 9",
      options: [
        "x = 2",
        "x = 4",
        "x = 6",
      ],
      correctAnswer: 1,
      explanation: "Agrupando: 5x − 2x = 9 + 3 → 3x = 12 → x = 4.",
    },

    // 119 · Ecuaciones de primer grado con paréntesis
    {
      question: "Si 3(x + 4) = 21, ¿cuál es el valor de x?",
      options: [
        "x = 3",
        "x = 5",
        "x = 7",
      ],
      correctAnswer: 0,
      explanation: "Distribuyendo: 3x + 12 = 21 → 3x = 9 → x = 3.",
    },

    // 120 · Binomio al cuadrado — expansión
    {
      question: "¿Cuál es el resultado de (x + 4)²?",
      options: [
        "x² + 8x + 16",
        "x² + 4x + 16",
        "x² + 16",
      ],
      correctAnswer: 0,
      explanation: "(x + 4)² = x² + 2(x)(4) + 4² = x² + 8x + 16.",
    },

    // 121 · Producto de binomios
    {
      question: "¿Cuánto es (3x − 2)(x + 5)?",
      options: [
        "3x² + 13x − 10",
        "3x² − 3x − 10",
        "3x² + 15x − 10",
      ],
      correctAnswer: 0,
      explanation: "(3x)(x) + (3x)(5) + (−2)(x) + (−2)(5) = 3x² + 15x − 2x − 10 = 3x² + 13x − 10.",
    },

    // 122 · Expresión algebraica — despejar el ancho
    {
      question: "El perímetro de un rectángulo es P = 2(l + a). Si P = 36 cm y el largo l = 11 cm, ¿cuánto mide el ancho a?",
      options: [
        "5 cm",
        "7 cm",
        "9 cm",
      ],
      correctAnswer: 1,
      explanation: "36 = 2(11 + a) → 18 = 11 + a → a = 7 cm.",
    },

    // 123 · Expresión algebraica — volumen del cubo
    {
      question: "¿Cuál es la expresión correcta para el volumen de un cubo con arista a?",
      options: [
        "3a",
        "a²",
        "a³",
      ],
      correctAnswer: 2,
      explanation: "El volumen del cubo se obtiene multiplicando las tres aristas iguales: V = a × a × a = a³.",
    },

    // 124 · Teorema de Pitágoras
    {
      question: "En un triángulo rectángulo los catetos miden 5 cm y 12 cm. ¿Cuánto mide la hipotenusa?",
      options: [
        "13 cm",
        "15 cm",
        "17 cm",
      ],
      correctAnswer: 0,
      explanation: "c² = 5² + 12² = 25 + 144 = 169 → c = √169 = 13 cm.",
    },

    // 125 · Probabilidad frecuencial
    {
      question: "Al lanzar una moneda 200 veces se obtuvieron 110 soles. ¿Cuál es la frecuencia relativa de obtener águila?",
      options: [
        "0.45",
        "0.55",
        "0.50",
      ],
      correctAnswer: 0,
      explanation: "Número de águilas = 200 − 110 = 90. Frecuencia relativa = 90/200 = 0.45.",
    },

    // ── Resignificaciones ───────────────────────────────────────────────────

    // 126 · Sistema de ecuaciones — suma y resta
    {
      question: "¿Cuál es la solución del sistema: 2x + y = 11  y  x + y = 7?",
      options: [
        "x = 3, y = 4",
        "x = 4, y = 3",
        "x = 5, y = 1",
      ],
      correctAnswer: 1,
      explanation: "Restando la segunda de la primera: x = 4. Sustituyendo en x + y = 7: y = 3.",
    },

    // 127 · Sistema de ecuaciones — suma directa
    {
      question: "Si 3x − y = 5  y  x + y = 7, ¿cuánto vale x?",
      options: [
        "x = 2",
        "x = 3",
        "x = 4",
      ],
      correctAnswer: 1,
      explanation: "Sumando las dos ecuaciones: 4x = 12 → x = 3.",
    },

    // 128 · Sistema de ecuaciones — problema verbal (precios)
    {
      question: "Un bolígrafo cuesta $12 más que un lápiz. Si juntos cuestan $20, ¿cuánto cuesta el bolígrafo?",
      options: [
        "$4",
        "$16",
        "$14",
      ],
      correctAnswer: 1,
      explanation: "Sea b = bolígrafo y l = lápiz. b = l + 12 y b + l = 20. Sustituyendo: (l + 12) + l = 20 → l = 4, b = 16.",
    },

    // 129 · Sistema de ecuaciones — problema verbal (dos números)
    {
      question: "La suma de dos números es 25 y el doble del primero menos el segundo es 20. ¿Cuál es el valor del primer número?",
      options: [
        "10",
        "15",
        "20",
      ],
      correctAnswer: 1,
      explanation: "x + y = 25 y 2x − y = 20. Sumando ambas ecuaciones: 3x = 45 → x = 15.",
    },
  ],
};
