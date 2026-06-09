// Presentación: Química — Pensamiento Científico (EXANI-I)

export const PRESENTACION = {
  id: "quimica-pensamiento-cientifico",
  titulo: "Química: Pensamiento Científico",
  materia: "Ciencias",
  subtema: "Química · EXANI-I",
  slides: [

    // ── PORTADA ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Química",
      subtitulo: "Átomos · Biomoléculas · Mezclas · Reacciones · Energía · Impacto ambiental",
      etiqueta: "Pensamiento Científico · EXANI-I",
    },

    // ── MODELOS ATÓMICOS Y TIPOS DE ENLACE ────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "1 / 7 — Estructura de la materia",
      titulo: "Modelos atómicos y tipos de enlace",
      bloques: [
        {
          tipo: "texto",
          texto: "El modelo atómico ha evolucionado desde la esfera sólida de Dalton hasta la nube electrónica del modelo cuántico actual. Los electrones de la última capa (valencia) determinan cómo los átomos se unen entre sí formando enlaces: iónico, covalente o metálico.",
        },
        {
          tipo: "diagrama",
          id: "quimica-modelos-atomicos",
          titulo: "Evolución histórica del modelo atómico",
        },
        {
          tipo: "tabla",
          titulo: "Tipos de enlace químico",
          columnas: ["Tipo de enlace", "Cómo se forma", "Ejemplo"],
          filas: [
            { tiempo: "Iónico",    correcto: "Transferencia de electrones (metal + no metal)", error: "NaCl, MgO, CaCl₂" },
            { tiempo: "Covalente", correcto: "Compartición de electrones (no metales)",        error: "H₂O, CO₂, CH₄" },
            { tiempo: "Metálico",  correcto: "Mar de electrones libres (metales)",             error: "Fe, Cu, Au, acero" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "El modelo actual NO tiene órbitas definidas como Bohr",
          correcto: "El modelo cuántico describe regiones de probabilidad (orbitales) donde es más probable encontrar el electrón, no trayectorias fijas.",
          incorrecto: "Imaginar los electrones como planetas con rutas circulares definidas: eso es el modelo de Bohr (1913), útil para hidrogenar pero incompleto para átomos multielectrónicos.",
        },
      ],
    },

    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo — Modelos atómicos",
      pregunta: "¿Cuál modelo atómico introdujo el concepto de núcleo central cargado positivamente con electrones orbitando a su alrededor?",
      opciones: [
        "Modelo de Thomson, porque propuso que los electrones están dispersos en una esfera positiva.",
        "Modelo de Rutherford, porque su experimento de lámina de oro demostró la existencia del núcleo.",
        "Modelo de Bohr, porque organizó los electrones en órbitas con niveles de energía definidos.",
      ],
      correcta: 1,
      explicacion: "Rutherford (1911) realizó el experimento de la lámina de oro y concluyó que el átomo tiene un núcleo pequeño, denso y positivo, con los electrones orbitando a su alrededor. Thomson (1897) propuso el modelo del 'pudín de pasas' sin núcleo definido. Bohr (1913) adoptó el núcleo de Rutherford pero añadió los niveles de energía.",
      pasos: [],
    },

    // ── BIOMOLÉCULAS ───────────────────────────────────────────────────────────
    {
      id: 3,
      tipo: "regla_rica",
      etiqueta: "2 / 7 — Biomoléculas",
      titulo: "Biomoléculas: carbohidratos, lípidos y proteínas",
      bloques: [
        {
          tipo: "texto",
          texto: "Las biomoléculas son compuestos orgánicos que forman los seres vivos. Los carbohidratos (azúcares) son la principal fuente de energía inmediata. Los lípidos almacenan energía a largo plazo y forman membranas. Las proteínas tienen funciones estructurales, enzimáticas e inmunológicas. Los ácidos nucleicos (ADN/ARN) almacenan información genética.",
        },
        {
          tipo: "diagrama",
          id: "quimica-biomoleculas",
          titulo: "Estructura y función de las biomoléculas principales",
        },
        {
          tipo: "tabla",
          titulo: "Biomoléculas y su función",
          columnas: ["Biomolécula", "Función principal", "Fuente alimentaria"],
          filas: [
            { tiempo: "Carbohidratos", correcto: "Energía rápida (glucosa → ATP)",     error: "Pan, arroz, fruta, azúcar" },
            { tiempo: "Lípidos",       correcto: "Reserva energética, membranas",       error: "Aceite, mantequilla, aguacate" },
            { tiempo: "Proteínas",     correcto: "Estructura, enzimas, anticuerpos",    error: "Carne, huevo, leche, leguminosas" },
            { tiempo: "Ác. nucleicos", correcto: "Información genética (ADN) y síntesis (ARN)", error: "Formadas en el organismo" },
          ],
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "Los lípidos NO son solo 'grasa dañina'",
          correcto: "Los lípidos forman las membranas celulares, son precursores de hormonas y permiten absorber vitaminas A, D, E y K (liposolubles).",
          incorrecto: "Creer que todos los lípidos son perjudiciales: las grasas insaturadas (aceite de oliva, omega-3) son esenciales para la salud. El problema es el exceso de grasas saturadas y trans.",
        },
      ],
    },

    {
      id: 4,
      tipo: "ejercicio",
      etiqueta: "Reactivo — Biomoléculas",
      pregunta: "¿Cuál biomolécula representa la principal fuente de energía inmediata para las células del cuerpo humano?",
      opciones: [
        "Las proteínas, porque contienen aminoácidos que el cuerpo puede convertir en energía.",
        "Los carbohidratos, porque la glucosa se metaboliza directamente para producir ATP.",
        "Los lípidos, porque tienen el mayor contenido calórico por gramo.",
      ],
      correcta: 1,
      explicacion: "Los carbohidratos (especialmente la glucosa) son la fuente de energía de uso inmediato para las células. La glucosa se oxida en la glucólisis y el ciclo de Krebs para producir ATP. Aunque los lípidos tienen más calorías por gramo, su metabolismo es más lento y se usan como reserva energética, no como combustible inmediato.",
      pasos: [],
    },

    // ── SUSTANCIAS PURAS Y MEZCLAS ─────────────────────────────────────────────
    {
      id: 5,
      tipo: "regla_rica",
      etiqueta: "3 / 7 — Composición química",
      titulo: "Composición química: sustancias puras y mezclas",
      bloques: [
        {
          tipo: "texto",
          texto: "Una sustancia pura tiene composición química definida y constante (elemento o compuesto). Las mezclas contienen dos o más sustancias con composición variable: las homogéneas (soluciones) tienen aspecto uniforme; las heterogéneas presentan fases visibles. La concentración de una solución indica cuánto soluto hay en el solvente.",
        },
        {
          tipo: "diagrama",
          id: "quimica-mezclas",
          titulo: "Clasificación de la materia: sustancias puras y mezclas",
        },
        {
          tipo: "tabla",
          titulo: "Clasificación de la materia",
          columnas: ["Tipo", "Característica", "Ejemplo"],
          filas: [
            { tiempo: "Elemento",          correcto: "Un solo tipo de átomo",           error: "O₂, Fe, Au, N₂" },
            { tiempo: "Compuesto",         correcto: "Átomos en proporción fija",       error: "H₂O, CO₂, NaCl" },
            { tiempo: "Mezcla homogénea",  correcto: "Composición uniforme (solución)", error: "Aire, sal+agua, vinagre" },
            { tiempo: "Mezcla heterogénea",correcto: "Fases o componentes visibles",   error: "Agua+aceite, granito, sangre" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Una SOLUCIÓN es una mezcla, no un compuesto",
          correcto: "La sal disuelta en agua sigue siendo sal (NaCl) y agua (H₂O): no hay reacción química, solo mezcla. Se puede separar por evaporación.",
          incorrecto: "Confundir solución con compuesto: en un compuesto las sustancias se unen químicamente (propiedades nuevas); en una solución se mezclan físicamente (las propiedades de cada sustancia persisten).",
        },
      ],
    },

    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo — Sustancias y mezclas",
      pregunta: "Se disuelve sal en agua hasta que no se puede ver la sal. ¿Qué tipo de mezcla se forma?",
      opciones: [
        "Mezcla heterogénea, porque hay dos sustancias diferentes presentes.",
        "Compuesto químico, porque la sal y el agua reaccionaron para formar una nueva sustancia.",
        "Mezcla homogénea (solución), porque la composición es uniforme en toda la muestra.",
      ],
      correcta: 2,
      explicacion: "Al disolver sal en agua se forma una mezcla homogénea (solución): la composición es uniforme y no se pueden distinguir las fases. No es un compuesto porque no hubo reacción química: la sal y el agua pueden recuperarse por evaporación. No es heterogénea porque no hay fases visibles.",
      pasos: [],
    },

    // ── MÉTODOS DE SEPARACIÓN ─────────────────────────────────────────────────
    {
      id: 7,
      tipo: "regla_rica",
      etiqueta: "4 / 7 — Separación de mezclas",
      titulo: "Métodos de separación de mezclas",
      bloques: [
        {
          tipo: "texto",
          texto: "Los métodos de separación aprovechan diferencias en las propiedades físicas de los componentes de una mezcla. No son reacciones químicas: no se alteran las sustancias. La filtración separa sólidos de líquidos; la destilación separa por punto de ebullición; la cromatografía por afinidad química; la centrifugación por densidad.",
        },
        {
          tipo: "diagrama",
          id: "quimica-separacion",
          titulo: "Métodos de separación de mezclas",
        },
        {
          tipo: "tabla",
          titulo: "Métodos y la propiedad que aprovechan",
          columnas: ["Método", "Propiedad aprovechada", "Aplicación"],
          filas: [
            { tiempo: "Filtración",     correcto: "Tamaño de partícula",      error: "Café, purificación de agua" },
            { tiempo: "Destilación",    correcto: "Punto de ebullición",      error: "Agua + alcohol, petróleo" },
            { tiempo: "Cromatografía",  correcto: "Afinidad química",         error: "Pigmentos, fármacos, ADN" },
            { tiempo: "Centrifugación", correcto: "Densidad",                 error: "Análisis de sangre, leche" },
            { tiempo: "Decantación",    correcto: "Densidad (fases líquidas)", error: "Aceite + agua" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "La filtración NO sirve para separar mezclas homogéneas",
          correcto: "Para separar sal del agua (solución), se usa evaporación o destilación, ya que los iones de sal pasan a través del filtro junto con el agua.",
          incorrecto: "Intentar filtrar sal del agua: como la sal está disuelta (iones dispersos), atraviesa cualquier filtro convencional. Solo la destilación o evaporación separan soluciones.",
        },
      ],
    },

    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo — Separación de mezclas",
      pregunta: "Para obtener el líquido puro a partir de una mezcla de agua y arena, el método más adecuado es:",
      opciones: [
        "Destilación, porque separa componentes por sus diferentes puntos de ebullición.",
        "Filtración, porque retiene las partículas sólidas de arena y permite pasar el agua.",
        "Cromatografía, porque separa los componentes según su afinidad con el solvente.",
      ],
      correcta: 1,
      explicacion: "La filtración es el método adecuado para separar un sólido (arena) de un líquido (agua). La arena, al no estar disuelta, queda retenida en el filtro mientras el agua pasa. La destilación separa líquidos con diferente punto de ebullición; la cromatografía separa sustancias disueltas, no sólidos en suspensión.",
      pasos: [],
    },

    // ── CAMBIOS QUÍMICOS Y REACCIONES ─────────────────────────────────────────
    {
      id: 9,
      tipo: "regla_rica",
      etiqueta: "5 / 7 — Reacciones químicas",
      titulo: "Cambios químicos y reacciones químicas",
      bloques: [
        {
          tipo: "texto",
          texto: "En un cambio químico se forman nuevas sustancias con propiedades distintas. La evidencia incluye: cambio de color, producción de gas, formación de precipitado, cambio de temperatura o de olor. En una reacción química, la materia se conserva (ley de Lavoisier): la masa de los reactivos es igual a la de los productos.",
        },
        {
          tipo: "diagrama",
          id: "quimica-reacciones",
          titulo: "Tipos de reacciones químicas",
        },
        {
          tipo: "tabla",
          titulo: "Cambio físico vs cambio químico",
          columnas: ["Tipo de cambio", "Característica", "Ejemplo"],
          filas: [
            { tiempo: "Físico",  correcto: "No se forman nuevas sustancias",     error: "Fundir hielo, cortar papel, disolver sal" },
            { tiempo: "Químico", correcto: "Se forman sustancias nuevas",        error: "Quemar madera, oxidar hierro, cocinar" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Disolver NO es un cambio químico",
          correcto: "Disolver sal en agua es un cambio físico (mezcla): las moléculas de NaCl se dispersan pero no se transforman en otra sustancia.",
          incorrecto: "Confundir disolución con reacción: que algo 'desaparezca' al disolverse no significa que reaccionó. Se puede recuperar la sal original evaporando el agua.",
        },
      ],
    },

    {
      id: 10,
      tipo: "ejercicio",
      etiqueta: "Reactivo — Cambios químicos",
      pregunta: "Al calentar hierro con azufre se forma sulfuro de hierro (FeS), una sustancia con propiedades completamente diferentes. ¿Qué tipo de cambio ocurrió?",
      opciones: [
        "Cambio físico, porque hubo un cambio de temperatura durante el proceso.",
        "Cambio químico, porque se formó una sustancia nueva con propiedades distintas a las de los reactivos.",
        "Cambio de estado, porque el hierro se fundió al aplicar calor.",
      ],
      correcta: 1,
      explicacion: "Se trata de un cambio químico (reacción de síntesis): Fe + S → FeS. El sulfuro de hierro tiene propiedades completamente distintas al hierro y al azufre por separado. La temperatura alta solo proporciona la energía de activación necesaria para que ocurra la reacción, no es el criterio que define si es físico o químico.",
      pasos: [],
    },

    // ── ENERGÍA EN REACCIONES Y APORTE CALÓRICO ───────────────────────────────
    {
      id: 11,
      tipo: "regla_rica",
      etiqueta: "6 / 7 — Energía química",
      titulo: "Energía en reacciones y aporte calórico",
      bloques: [
        {
          tipo: "texto",
          texto: "Las reacciones exotérmicas liberan energía al ambiente (ΔH negativo); las endotérmicas la absorben (ΔH positivo). El aporte calórico de los alimentos mide la energía que proporcionan por gramo: carbohidratos y proteínas aportan ~4 kcal/g; los lípidos aportan ~9 kcal/g (más del doble). La caloría alimentaria es en realidad 1 kilocaloría (kcal).",
        },
        {
          tipo: "diagrama",
          id: "quimica-energia-reacciones",
          titulo: "Perfil energético: reacción exotérmica vs endotérmica",
        },
        {
          tipo: "tabla",
          titulo: "Aporte calórico de macronutrientes",
          columnas: ["Macronutriente", "Energía (kcal/g)", "Rol energético"],
          filas: [
            { tiempo: "Carbohidratos", correcto: "4 kcal/g",  error: "Energía inmediata (glucosa → ATP)" },
            { tiempo: "Proteínas",     correcto: "4 kcal/g",  error: "Energía de reserva (secundario)" },
            { tiempo: "Lípidos",       correcto: "9 kcal/g",  error: "Reserva energética a largo plazo" },
            { tiempo: "Alcohol",       correcto: "7 kcal/g",  error: "Solo energía, sin valor nutricional" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "La 'caloría' de los alimentos = 1 kilocaloría (kcal)",
          correcto: "Cuando la etiqueta dice '200 calorías', en realidad son 200 kilocalorías. La caloría científica (cal) es la cantidad de calor para elevar 1 g de agua en 1 °C.",
          incorrecto: "Pensar que 1 caloría alimentaria = 1 cal científica: hay un factor de 1000. Una naranja de 50 kcal en etiqueta contiene 50,000 calorías científicas.",
        },
      ],
    },

    {
      id: 12,
      tipo: "ejercicio",
      etiqueta: "Reactivo — Reacciones exotérmicas y endotérmicas",
      pregunta: "La fotosíntesis es una reacción en la que las plantas absorben energía solar para producir glucosa. ¿Cómo se clasifica esta reacción?",
      opciones: [
        "Exotérmica, porque libera oxígeno al ambiente como producto.",
        "Endotérmica, porque necesita absorber energía (luz solar) del entorno para ocurrir.",
        "Neutra en energía, porque la energía solar no es calor.",
      ],
      correcta: 1,
      explicacion: "La fotosíntesis es endotérmica: 6CO₂ + 6H₂O + energía solar → C₆H₁₂O₆ + 6O₂. La energía luminosa se incorpora a las moléculas de glucosa (mayor energía potencial química). No es exotérmica porque no libera energía al entorno: la absorbe. La liberación de O₂ es un subproducto, no el criterio para clasificar la reacción.",
      pasos: [],
    },

    // ── IMPACTO EN SALUD Y AMBIENTE ────────────────────────────────────────────
    {
      id: 13,
      tipo: "regla_rica",
      etiqueta: "7 / 7 — Impacto de la química",
      titulo: "Impacto en la salud y el ambiente",
      bloques: [
        {
          tipo: "texto",
          texto: "Los productos y procesos químicos tienen aplicaciones indispensables (medicamentos, fertilizantes, materiales) pero también pueden generar riesgos: contaminación del agua y suelo por pesticidas, lluvia ácida por óxidos de azufre y nitrógeno, deterioro de la capa de ozono por CFCs, y efectos tóxicos de metales pesados y plásticos no biodegradables.",
        },
        {
          tipo: "diagrama",
          id: "quimica-impacto",
          titulo: "Beneficios y riesgos del uso de productos químicos",
        },
        {
          tipo: "tabla",
          titulo: "Productos químicos: beneficios y riesgos",
          columnas: ["Producto / proceso", "Beneficio", "Riesgo si se usa en exceso"],
          filas: [
            { tiempo: "Pesticidas",   correcto: "Mayor producción agrícola",   error: "Contaminación de suelo y agua" },
            { tiempo: "Fertilizantes",correcto: "Mejoran rendimiento de cultivos", error: "Eutrofización de ríos y lagos" },
            { tiempo: "Plásticos",    correcto: "Materiales versátiles y ligeros", error: "Contaminación persistente (microplásticos)" },
            { tiempo: "Combustibles", correcto: "Energía para transporte e industria", error: "CO₂, lluvia ácida, smog" },
          ],
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "No todos los productos químicos son dañinos — el contexto importa",
          correcto: "El flúor en pasta dental previene caries; en dosis bajas es benéfico. El mismo compuesto puede ser medicamento o veneno dependiendo de la dosis (principio de Paracelso: 'la dosis hace el veneno').",
          incorrecto: "Asumir que todo lo 'químico' es malo y lo 'natural' es seguro: el arsénico es natural y muy tóxico; muchos medicamentos que salvan vidas son compuestos sintéticos.",
        },
      ],
    },

    {
      id: 14,
      tipo: "ejercicio",
      etiqueta: "Reactivo — Impacto ambiental",
      pregunta: "El uso excesivo de fertilizantes químicos en la agricultura provoca que los nutrientes (nitratos y fosfatos) lleguen a ríos y lagos por escurrimiento. ¿Cuál es la consecuencia principal?",
      opciones: [
        "Se purifica el agua porque los nitratos son soluciones limpiadoras.",
        "Se produce eutrofización: crecimiento excesivo de algas que consume el oxígeno disuelto y mata la vida acuática.",
        "Aumenta la biodiversidad porque los nutrientes alimentan a más organismos acuáticos.",
      ],
      correcta: 1,
      explicacion: "La eutrofización ocurre cuando el exceso de nutrientes (nitratos, fosfatos) causa proliferación masiva de algas. Al morir las algas, su descomposición bacteriana consume el oxígeno disuelto, lo que provoca la muerte de peces y otros organismos acuáticos. Es un ejemplo claro del impacto negativo del uso descontrolado de productos químicos agrícolas en el ecosistema acuático.",
      pasos: [],
    },

    // ── RESUMEN ────────────────────────────────────────────────────────────────
    {
      id: 15,
      tipo: "resumen",
      titulo: "Resumen — Química",
      etiqueta: "Conceptos clave para el EXANI-I",
      puntos: [
        {
          titulo: "Modelos atómicos",
          texto: "Dalton → Thomson → Rutherford (núcleo) → Bohr (órbitas) → Actual (nube electrónica / orbitales)",
        },
        {
          titulo: "Tipos de enlace",
          texto: "Iónico (transferencia e⁻, metal+no metal) · Covalente (compartición e⁻, no metales) · Metálico (mar de e⁻)",
        },
        {
          titulo: "Biomoléculas",
          texto: "Carbohidratos (4 kcal/g, energía rápida) · Lípidos (9 kcal/g, reserva) · Proteínas (estructura/enzimas) · Ác. nucleicos (genética)",
        },
        {
          titulo: "Sustancias y mezclas",
          texto: "Puras: elementos y compuestos · Mezclas: homogéneas (soluciones) y heterogéneas (fases visibles)",
        },
        {
          titulo: "Separación de mezclas",
          texto: "Filtración (tamaño) · Destilación (punto ebullición) · Cromatografía (afinidad) · Centrifugación (densidad)",
        },
        {
          titulo: "Reacciones y energía",
          texto: "Exotérmica: libera calor (combustión, respiración) · Endotérmica: absorbe calor (fotosíntesis, fusión)",
        },
        {
          titulo: "Impacto ambiental",
          texto: "Pesticidas → suelo/agua · Fertilizantes → eutrofización · CFCs → ozono · Combustibles → CO₂, lluvia ácida",
        },
      ],
    },
  ],
};
