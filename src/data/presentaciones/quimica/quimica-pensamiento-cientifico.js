// Presentación: Química — Pensamiento Científico (EXANI-I)
// Estructura por tema: 1 regla_rica · 2 ejemplos · 5 ejercicios

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

    // ══════════════════════════════════════════════════════════════════════════
    // TEMA 1 — MODELOS ATÓMICOS Y TIPOS DE ENLACE
    // ══════════════════════════════════════════════════════════════════════════
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
          incorrecto: "Imaginar los electrones como planetas con rutas circulares definidas: eso es el modelo de Bohr (1913), útil para hidrógeno pero incompleto para átomos multielectrónicos.",
        },
      ],
    },

    // Ejemplo 1 — El experimento de Rutherford
    {
      id: 2,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 1 — Modelos atómicos",
      titulo: "El experimento de la lámina de oro de Rutherford (1911)",
      enunciado: "Rutherford disparó partículas alfa (α, carga positiva) contra una lámina de oro muy delgada. Según el modelo de Thomson, TODAS debían pasar casi sin desviarse. Los resultados sorprendieron a la ciencia.",
      datos: [
        { label: "Observación 1", math: "\\text{La mayoría de partículas } \\alpha \\text{ pasaron sin desviarse}" },
        { label: "Observación 2", math: "\\text{Algunas se desviaron en ángulos grandes (>90°)}" },
      ],
      pasos: [
        { pre: "Obs. 1 → El átomo es casi todo espacio vacío; las partículas α pasan sin encontrar obstáculo." },
        { pre: "Obs. 2 → Existe una región pequeña, densa y de carga positiva que repele fuertemente a las α: el núcleo." },
        { pre: "Conclusión: el átomo tiene un núcleo central pequeño (+) y los electrones orbitan a gran distancia." },
        { pre: "Limitación del modelo de Rutherford: no explica por qué los electrones no caen en espiral al núcleo (resuelto por Bohr en 1913)." },
      ],
    },

    // Ejemplo 2 — NaCl vs H₂O
    {
      id: 3,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 2 — Tipos de enlace",
      titulo: "Enlace iónico (NaCl) vs enlace covalente (H₂O)",
      enunciado: "Compara la formación del enlace en la sal de mesa y en el agua. Ambas son moléculas cotidianas pero sus átomos se unen de maneras completamente distintas.",
      datos: [
        { label: "NaCl — iónico", math: "\\text{Na (1 e}^- \\text{ de valencia)} \\to \\text{cede a Cl (7 e}^-\\text{)} \\to \\text{Na}^+ \\text{Cl}^-" },
        { label: "H₂O — covalente", math: "\\text{H comparte 1 e}^- \\text{ con O (6 e}^-\\text{)} \\to \\text{H}\\!-\\!\\text{O}\\!-\\!\\text{H}" },
      ],
      pasos: [
        { pre: "NaCl: el Na (metal) cede su electrón de valencia al Cl (no metal). Se forman iones Na⁺ y Cl⁻ que se atraen electrostáticamente." },
        { pre: "H₂O: el O y los dos H comparten pares de electrones. No hay transferencia: es una compartición." },
        { pre: "Consecuencia práctica: el NaCl se disuelve en agua liberando iones (conduce electricidad); el agua pura NO conduce." },
        { pre: "Regla general: ", math: "\\text{metal + no metal} \\to \\text{iónico} \\qquad \\text{no metal + no metal} \\to \\text{covalente}" },
      ],
    },

    // Ejercicio 1
    {
      id: 4,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Modelos atómicos",
      pregunta: "¿Cuál modelo atómico introdujo el concepto de núcleo central cargado positivamente con electrones orbitando a su alrededor?",
      opciones: [
        "Modelo de Thomson, porque propuso que los electrones están dispersos en una esfera positiva.",
        "Modelo de Rutherford, porque su experimento de lámina de oro demostró la existencia del núcleo.",
        "Modelo de Bohr, porque organizó los electrones en órbitas con niveles de energía definidos.",
      ],
      correcta: 1,
      explicacion: "Rutherford (1911) realizó el experimento de la lámina de oro y concluyó que el átomo tiene un núcleo pequeño, denso y positivo. Thomson (1897) propuso el modelo del 'pudín de pasas' sin núcleo definido. Bohr (1913) adoptó el núcleo de Rutherford y añadió los niveles de energía.",
      pasos: [],
    },

    // Ejercicio 2
    {
      id: 5,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Modelos atómicos",
      pregunta: "¿Cuál modelo atómico propuso que los electrones están incrustados en una esfera de carga positiva, como 'pasas en un pudín'?",
      opciones: [
        "Modelo de Rutherford.",
        "Modelo de Thomson.",
        "Modelo de Bohr.",
      ],
      correcta: 1,
      explicacion: "J.J. Thomson (1897) descubrió el electrón y propuso el modelo del 'pudín de pasas': el átomo es una esfera de carga positiva difusa con electrones incrustados en ella. Rutherford lo refutó en 1911 al demostrar la existencia del núcleo compacto.",
      pasos: [],
    },

    // Ejercicio 3
    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Tipos de enlace",
      pregunta: "¿Qué tipo de enlace se forma entre el sodio (Na) y el cloro (Cl) en la sal de mesa (NaCl)?",
      opciones: [
        "Enlace iónico: el Na cede un electrón al Cl, formando Na⁺ y Cl⁻.",
        "Enlace covalente: Na y Cl comparten un par de electrones.",
        "Enlace metálico: los electrones de Na circulan libremente alrededor de Cl.",
      ],
      correcta: 0,
      explicacion: "El Na es un metal (1 electrón de valencia) y el Cl es un no metal (7 electrones). El Na cede su electrón al Cl: se forman iones Na⁺ y Cl⁻ que se atraen por fuerzas electrostáticas. Esto define el enlace iónico: transferencia de electrones entre metal y no metal.",
      pasos: [],
    },

    // Ejercicio 4
    {
      id: 7,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Tipos de enlace",
      pregunta: "Dos átomos de nitrógeno (N₂) se unen compartiendo tres pares de electrones. ¿Qué tipo de enlace forman?",
      opciones: [
        "Enlace covalente triple, porque comparten tres pares de electrones.",
        "Enlace iónico triple, porque hay transferencia de tres electrones.",
        "Enlace metálico, porque el nitrógeno conduce electricidad.",
      ],
      correcta: 0,
      explicacion: "Cuando dos no metales comparten electrones, forman un enlace covalente. Si comparten 1 par, es simple; 2 pares, doble; 3 pares, triple. N₂ forma un enlace covalente triple (N≡N), uno de los más fuertes de la química. El N no es metal, por lo que no hay enlace iónico ni metálico.",
      pasos: [],
    },

    // Ejercicio 5
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Modelos atómicos",
      pregunta: "¿Qué partícula del átomo determina a qué elemento químico pertenece?",
      opciones: [
        "El número de protones (número atómico Z).",
        "El número de neutrones.",
        "El número de electrones en la última capa.",
      ],
      correcta: 0,
      explicacion: "El número de protones (Z) define el elemento: todos los átomos con Z=1 son hidrógeno, con Z=6 son carbono, etc. Los neutrones determinan el isótopo; los electrones de valencia determinan las propiedades químicas (cómo se enlaza), pero no qué elemento es.",
      pasos: [],
    },

    // ══════════════════════════════════════════════════════════════════════════
    // TEMA 2 — BIOMOLÉCULAS
    // ══════════════════════════════════════════════════════════════════════════
    {
      id: 9,
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
            { tiempo: "Carbohidratos", correcto: "Energía rápida (glucosa → ATP)",              error: "Pan, arroz, fruta, azúcar" },
            { tiempo: "Lípidos",       correcto: "Reserva energética, membranas, hormonas",     error: "Aceite, mantequilla, aguacate" },
            { tiempo: "Proteínas",     correcto: "Estructura, enzimas, anticuerpos",            error: "Carne, huevo, leche, leguminosas" },
            { tiempo: "Ác. nucleicos", correcto: "Información genética (ADN) y síntesis (ARN)", error: "Formadas en el organismo" },
          ],
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "Los lípidos NO son solo 'grasa dañina'",
          correcto: "Los lípidos forman las membranas celulares, son precursores de hormonas y permiten absorber vitaminas A, D, E y K. Las grasas insaturadas (omega-3) son esenciales.",
          incorrecto: "Creer que todos los lípidos son perjudiciales: el problema es el exceso de grasas saturadas y trans, no los lípidos en general.",
        },
      ],
    },

    // Ejemplo 1 — Calcular calorías
    {
      id: 10,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 1 — Biomoléculas",
      titulo: "¿Cuántas kilocalorías tiene tu almuerzo?",
      enunciado: "Una porción de comida contiene 60 g de carbohidratos, 25 g de proteínas y 15 g de lípidos. Calcula el aporte calórico total y el porcentaje de cada macronutriente.",
      datos: [
        { label: "Factores", math: "\\text{Carbs: 4 kcal/g} \\quad \\text{Proteínas: 4 kcal/g} \\quad \\text{Lípidos: 9 kcal/g}" },
      ],
      pasos: [
        { pre: "Calorías de carbohidratos: ", math: "60 \\times 4 = 240\\,\\text{kcal}" },
        { pre: "Calorías de proteínas: ", math: "25 \\times 4 = 100\\,\\text{kcal}" },
        { pre: "Calorías de lípidos: ", math: "15 \\times 9 = 135\\,\\text{kcal}" },
        { pre: "Total: ", math: "240 + 100 + 135 = 475\\,\\text{kcal}" },
        { pre: "Observación: los lípidos aportan el 28% de la masa (15/100 g) pero el 28% de las calorías (135/475). El alto valor por gramo (9 kcal) explica por qué son la reserva energética del cuerpo." },
      ],
    },

    // Ejemplo 2 — Glucosa y ATP
    {
      id: 11,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 2 — Biomoléculas",
      titulo: "La glucosa como combustible celular",
      enunciado: "Las células queman glucosa en la respiración aeróbica para producir ATP, la 'moneda energética' de la vida. Analiza la ecuación y comprende qué pasa con la energía.",
      datos: [
        { label: "Ecuación global", math: "\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\longrightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\approx 38\\,\\text{ATP}" },
      ],
      pasos: [
        { pre: "La glucosa (C₆H₁₂O₆) es un carbohidrato: su estructura almacena energía química en sus enlaces C-H." },
        { pre: "La respiración celular ocurre en tres etapas: ", math: "\\text{Glucólisis (citoplasma)} \\to \\text{Ciclo de Krebs (mitocondria)} \\to \\text{Cadena respiratoria (mitocondria)}" },
        { pre: "Rendimiento energético: 1 mol de glucosa produce ~38 ATP, equivalente a ~686 kcal de energía química." },
        { pre: "Comparación: si la glucosa simplemente 'ardiera' sin capturar energía, toda se perdería como calor. Las células capturan ~40% como ATP." },
      ],
    },

    // Ejercicio 1
    {
      id: 12,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Biomoléculas",
      pregunta: "¿Cuál biomolécula representa la principal fuente de energía inmediata para las células del cuerpo humano?",
      opciones: [
        "Las proteínas, porque contienen aminoácidos que el cuerpo convierte en energía.",
        "Los carbohidratos, porque la glucosa se metaboliza directamente para producir ATP.",
        "Los lípidos, porque tienen el mayor contenido calórico por gramo.",
      ],
      correcta: 1,
      explicacion: "Los carbohidratos (glucosa) son el combustible inmediato de las células. Aunque los lípidos tienen más calorías por gramo (9 vs 4 kcal/g), su metabolismo es más lento y se usan como reserva, no como fuente inmediata.",
      pasos: [],
    },

    // Ejercicio 2
    {
      id: 13,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Biomoléculas",
      pregunta: "¿Cuál biomolécula forma la membrana plasmática de todas las células?",
      opciones: [
        "Los lípidos (fosfolípidos), que forman la bicapa lipídica.",
        "Los carbohidratos, que sirven de reconocimiento entre células.",
        "Las proteínas, que son el componente estructural más abundante.",
      ],
      correcta: 0,
      explicacion: "La membrana plasmática está formada principalmente por una bicapa de fosfolípidos (lípidos con una cabeza polar hidrófila y una cola apolar hidrófoba). Las proteínas se incrustan en esta bicapa con funciones de transporte y señalización, y los carbohidratos funcionan como marcadores de reconocimiento, pero el armazón estructural son los fosfolípidos.",
      pasos: [],
    },

    // Ejercicio 3
    {
      id: 14,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Biomoléculas",
      pregunta: "Un atleta consume 50 g de carbohidratos, 30 g de proteínas y 20 g de lípidos. ¿Cuántas kcal obtiene en total?",
      opciones: [
        "500 kcal (50×4 + 30×4 + 20×9 = 200 + 120 + 180).",
        "300 kcal (50+30+20 × 3 kcal/g promedio).",
        "800 kcal (50×9 + 30×4 + 20×4).",
      ],
      correcta: 0,
      explicacion: "Aplicando los factores correctos: carbohidratos y proteínas aportan 4 kcal/g; lípidos aportan 9 kcal/g. Total = 50×4 + 30×4 + 20×9 = 200 + 120 + 180 = 500 kcal. La opción C confunde qué biomolécula aporta 9 kcal/g.",
      pasos: [],
    },

    // Ejercicio 4
    {
      id: 15,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Biomoléculas",
      pregunta: "Los ácidos nucleicos (ADN y ARN) tienen como función principal:",
      opciones: [
        "Almacenar y transmitir la información genética de la célula.",
        "Proporcionar energía inmediata en forma de ATP.",
        "Formar las membranas celulares junto con los fosfolípidos.",
      ],
      correcta: 0,
      explicacion: "El ADN almacena la información genética en la secuencia de bases nitrogenadas y se replica para transmitirla a células hijas. El ARN lleva esa información al ribosoma para sintetizar proteínas. La energía celular es función de los carbohidratos; las membranas son función de los lípidos.",
      pasos: [],
    },

    // Ejercicio 5
    {
      id: 16,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Biomoléculas",
      pregunta: "Una persona consume 200 kcal caminando a paso normal gasta ~4 kcal por minuto. ¿Cuántos minutos necesita para gastar esas calorías?",
      opciones: [
        "50 minutos (200 kcal ÷ 4 kcal/min).",
        "200 minutos (200 × 4 kcal/min invertido).",
        "800 minutos (200 × 4).",
      ],
      correcta: 0,
      explicacion: "Tiempo = energía / tasa de gasto = 200 kcal ÷ 4 kcal/min = 50 minutos. Este cálculo muestra por qué 'quemar' calorías con ejercicio requiere más tiempo de lo que parece.",
      pasos: [],
    },

    // ══════════════════════════════════════════════════════════════════════════
    // TEMA 3 — SUSTANCIAS PURAS Y MEZCLAS
    // ══════════════════════════════════════════════════════════════════════════
    {
      id: 17,
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
            { tiempo: "Elemento",          correcto: "Un solo tipo de átomo",            error: "O₂, Fe, Au, N₂" },
            { tiempo: "Compuesto",         correcto: "Átomos en proporción fija",        error: "H₂O, CO₂, NaCl" },
            { tiempo: "Mezcla homogénea",  correcto: "Composición uniforme (solución)",  error: "Aire, sal+agua, vinagre" },
            { tiempo: "Mezcla heterogénea",correcto: "Fases o componentes visibles",    error: "Agua+aceite, granito, sangre" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Una SOLUCIÓN es una mezcla, no un compuesto",
          correcto: "La sal disuelta en agua sigue siendo NaCl y H₂O: no hay reacción química. Se puede recuperar la sal por evaporación.",
          incorrecto: "Confundir solución con compuesto: en un compuesto las sustancias se unen químicamente formando algo nuevo; en una solución solo se mezclan físicamente.",
        },
      ],
    },

    // Ejemplo 1 — Clasificar mezclas cotidianas
    {
      id: 18,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 1 — Mezclas",
      titulo: "Clasificar mezclas cotidianas",
      enunciado: "Identifica si cada caso es un elemento, compuesto, mezcla homogénea o heterogénea. Justifica con la característica definitoria de cada categoría.",
      datos: [
        { label: "Casos a clasificar", math: "\\text{Aire · Granito · Suero fisiológico · Vinagreta · Oro puro}" },
      ],
      pasos: [
        { pre: "Aire: mezcla homogénea de gases (N₂ 78%, O₂ 21%, Ar y otros). Composición uniforme pero variable según altitud." },
        { pre: "Granito: mezcla heterogénea de minerales (cuarzo, feldespato, mica). Las fases son visibles a simple vista." },
        { pre: "Suero fisiológico (0.9% NaCl en agua): mezcla homogénea. NaCl se disuelve completamente, no hay fases visibles." },
        { pre: "Vinagreta (aceite + vinagre): mezcla heterogénea. Los dos líquidos no se mezclan (no son miscibles) y se separan." },
        { pre: "Oro puro (Au): elemento. Contiene solo átomos de oro; no puede separarse en sustancias más simples por medios físicos." },
      ],
    },

    // Ejemplo 2 — Concentración del suero fisiológico
    {
      id: 19,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 2 — Mezclas",
      titulo: "Concentración de una solución: suero fisiológico",
      enunciado: "El suero fisiológico contiene 9 g de NaCl disueltos en 1 L de agua. Esta concentración es isotónica con la sangre humana. Calcula la concentración y entiende qué significa.",
      datos: [
        { label: "Datos", math: "\\text{soluto: 9 g NaCl} \\quad \\text{solvente: 1 L (1000 mL) de agua}" },
      ],
      pasos: [
        { pre: "Concentración porcentual (m/v): ", math: "C = \\frac{\\text{masa soluto}}{\\text{volumen solución}} \\times 100 = \\frac{9\\,\\text{g}}{1000\\,\\text{mL}} \\times 100 = 0.9\\%\\text{ (m/v)}" },
        { pre: "Significado: en cada 100 mL de suero hay 0.9 g de NaCl." },
        { pre: "Importancia clínica: si la concentración fuera mayor (hipertónico), las células perderían agua por ósmosis. Si fuera menor (hipotónico), las células absorberían agua y podrían estallar." },
        { pre: "Regla práctica: ", math: "\\text{solución isotónica} \\approx 0.9\\%\\text{ NaCl} \\leftrightarrow \\text{plasma sanguíneo}" },
      ],
    },

    // Ejercicio 1
    {
      id: 20,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Mezclas",
      pregunta: "Se disuelve sal en agua hasta que no se puede ver la sal. ¿Qué tipo de mezcla se forma?",
      opciones: [
        "Mezcla heterogénea, porque hay dos sustancias diferentes presentes.",
        "Compuesto químico, porque la sal y el agua reaccionaron para formar una nueva sustancia.",
        "Mezcla homogénea (solución), porque la composición es uniforme en toda la muestra.",
      ],
      correcta: 2,
      explicacion: "Al disolver sal en agua se forma una solución (mezcla homogénea): composición uniforme, sin fases visibles. No es compuesto porque no hubo reacción química; la sal y el agua se recuperan por evaporación. No es heterogénea porque no se distinguen las fases.",
      pasos: [],
    },

    // Ejercicio 2
    {
      id: 21,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Mezclas",
      pregunta: "¿Cuál de las siguientes es una sustancia pura compuesta?",
      opciones: [
        "Agua (H₂O), porque tiene composición fija con dos tipos de átomos en proporción definida.",
        "Aire, porque siempre contiene N₂ y O₂.",
        "Sal de mar, porque contiene NaCl y otros minerales disueltos.",
      ],
      correcta: 0,
      explicacion: "Un compuesto es una sustancia pura formada por dos o más tipos de átomos en proporción fija. El H₂O siempre tiene 2 átomos de H por cada O. El aire es una mezcla homogénea (composición variable). La sal de mar es una mezcla con múltiples solutos.",
      pasos: [],
    },

    // Ejercicio 3
    {
      id: 22,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Mezclas",
      pregunta: "El bronce es una aleación de cobre y estaño en proporciones variables según el uso. ¿Cómo se clasifica?",
      opciones: [
        "Mezcla homogénea (solución sólida): composición uniforme pero variable.",
        "Compuesto químico: el cobre y el estaño se unen en proporción fija.",
        "Elemento: contiene solo un tipo de metal.",
      ],
      correcta: 0,
      explicacion: "Las aleaciones metálicas son mezclas homogéneas (soluciones sólidas): los átomos de un metal se distribuyen uniformemente entre los del otro. La composición es variable (hay bronces con 10%, 20%, 30% de estaño) y los metales no se unen químicamente en proporción fija.",
      pasos: [],
    },

    // Ejercicio 4
    {
      id: 23,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Mezclas",
      pregunta: "La vinagreta (aceite + vinagre) se agita y después de un momento las fases se separan. ¿Qué tipo de mezcla es?",
      opciones: [
        "Mezcla heterogénea, porque los dos líquidos no son miscibles y se separan en fases visibles.",
        "Mezcla homogénea, porque al agitarla se mezcla completamente.",
        "Compuesto, porque los dos líquidos se unen temporalmente.",
      ],
      correcta: 0,
      explicacion: "El aceite y el vinagre no se mezclan porque tienen diferente polaridad (el aceite es apolar; el vinagre, polar). Al agitar se dispersan temporalmente, pero al dejar reposar se separan en dos fases visibles: es una mezcla heterogénea. Para que fuera homogénea debería tener composición uniforme permanente.",
      pasos: [],
    },

    // Ejercicio 5
    {
      id: 24,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Mezclas",
      pregunta: "¿Qué diferencia a un elemento de un compuesto?",
      opciones: [
        "El elemento contiene un solo tipo de átomo; el compuesto tiene dos o más tipos en proporción fija.",
        "El elemento es siempre gaseoso; el compuesto es siempre sólido.",
        "El elemento se puede disolver en agua; el compuesto no.",
      ],
      correcta: 0,
      explicacion: "Un elemento está formado por un solo tipo de átomo (O₂ = solo oxígeno; Fe = solo hierro). Un compuesto tiene dos o más tipos de átomos en proporción definida por sus fórmulas (H₂O siempre 2H:1O). Ni el estado físico ni la solubilidad definen esta distinción.",
      pasos: [],
    },

    // ══════════════════════════════════════════════════════════════════════════
    // TEMA 4 — MÉTODOS DE SEPARACIÓN
    // ══════════════════════════════════════════════════════════════════════════
    {
      id: 25,
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
            { tiempo: "Filtración",     correcto: "Tamaño de partícula",       error: "Café, purificación de agua" },
            { tiempo: "Destilación",    correcto: "Punto de ebullición",       error: "Agua + alcohol, petróleo" },
            { tiempo: "Cromatografía",  correcto: "Afinidad química",          error: "Pigmentos, fármacos, ADN" },
            { tiempo: "Centrifugación", correcto: "Densidad",                  error: "Análisis de sangre, leche" },
            { tiempo: "Decantación",    correcto: "Densidad (fases líquidas)", error: "Aceite + agua" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "La filtración NO sirve para separar mezclas homogéneas",
          correcto: "Para separar sal del agua (solución), se usa evaporación o destilación, ya que los iones de sal pasan a través del filtro junto con el agua.",
          incorrecto: "Intentar filtrar sal del agua: como la sal está disuelta (iones dispersos), atraviesa cualquier filtro convencional.",
        },
      ],
    },

    // Ejemplo 1 — Destilación fraccionada del petróleo
    {
      id: 26,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 1 — Separación",
      titulo: "Destilación fraccionada del petróleo crudo",
      enunciado: "El petróleo crudo es una mezcla de cientos de hidrocarburos. En las refinerías se separa por destilación fraccionada: la mezcla se calienta y cada componente se evapora a distinta temperatura.",
      datos: [
        { label: "Principio", math: "\\text{Mezcla calentada} \\to \\text{vapores suben por la torre} \\to \\text{cada fracción condensa a distinta altura}" },
      ],
      pasos: [
        { pre: "Gases (GLP): < 40 °C. Se condensan en la parte alta de la torre. Uso: gas doméstico." },
        { pre: "Gasolina: 40–200 °C. Fracción de mayor demanda. Uso: vehículos." },
        { pre: "Queroseno: 200–300 °C. Uso: aviación, calefacción." },
        { pre: "Diesel: 250–350 °C. Uso: transporte pesado, generadores." },
        { pre: "Aceites/asfalto: > 350 °C. No se evaporan, quedan como residuo. Uso: lubricantes, pavimento." },
        { pre: "Propiedad aprovechada: punto de ebullición (temperatura a la que el líquido se convierte en vapor). Método: destilación." },
      ],
    },

    // Ejemplo 2 — Cromatografía en papel
    {
      id: 27,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 2 — Separación",
      titulo: "Cromatografía en papel: separar los pigmentos de una tinta",
      enunciado: "Una tinta negra parece un solo color, pero en realidad es mezcla de varios pigmentos. La cromatografía los separa porque cada pigmento tiene distinta afinidad por el papel (fase estacionaria) y por el solvente (fase móvil).",
      datos: [
        { label: "Componentes", math: "\\text{Fase estacionaria: papel (polar)} \\quad \\text{Fase móvil: solvente que sube por capilaridad}" },
      ],
      pasos: [
        { pre: "Se pone una mancha de tinta en la base de una tira de papel y se introduce el extremo en el solvente." },
        { pre: "El solvente sube por capilaridad arrastrando los pigmentos hacia arriba." },
        { pre: "Los pigmentos con mayor afinidad por el solvente (menos polares) viajan más lejos." },
        { pre: "Los pigmentos con mayor afinidad por el papel (más polares) se quedan cerca de la base." },
        { pre: "Resultado: la tinta negra se separa en bandas de color: amarillo, cian, magenta, etc." },
        { pre: "Propiedad aprovechada: afinidad química diferencial con la fase estacionaria y la móvil." },
      ],
    },

    // Ejercicio 1
    {
      id: 28,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Separación",
      pregunta: "Para obtener el agua pura a partir de una mezcla de agua y arena, el método más adecuado es:",
      opciones: [
        "Destilación, porque separa componentes por sus diferentes puntos de ebullición.",
        "Filtración, porque retiene las partículas sólidas de arena y permite pasar el agua.",
        "Cromatografía, porque separa los componentes según su afinidad con el solvente.",
      ],
      correcta: 1,
      explicacion: "La filtración es adecuada para separar un sólido no disuelto (arena) de un líquido (agua). La arena queda retenida en el filtro mientras el agua pasa. La destilación separa líquidos con diferente punto de ebullición; la cromatografía separa sustancias disueltas, no sólidos en suspensión.",
      pasos: [],
    },

    // Ejercicio 2
    {
      id: 29,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Separación",
      pregunta: "¿Qué método se usa para separar el agua del alcohol etílico en la producción de bebidas destiladas?",
      opciones: [
        "Destilación, porque el alcohol hierve a 78.4 °C y el agua a 100 °C.",
        "Filtración, porque el alcohol tiene moléculas más pequeñas que el agua.",
        "Decantación, porque el alcohol es menos denso que el agua.",
      ],
      correcta: 0,
      explicacion: "El alcohol etílico (78.4 °C) y el agua (100 °C) tienen diferentes puntos de ebullición. Al calentar la mezcla, el alcohol se evapora primero; ese vapor se condensa y se recoge como destilado más concentrado en alcohol. Este es exactamente el principio de la destilación.",
      pasos: [],
    },

    // Ejercicio 3
    {
      id: 30,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Separación",
      pregunta: "En un laboratorio forense se analizan los pigmentos de una tinta para identificar el bolígrafo usado en un documento. ¿Qué método es más adecuado?",
      opciones: [
        "Cromatografía, porque separa los pigmentos según su afinidad diferencial con el solvente y la fase estacionaria.",
        "Filtración, porque retiene las partículas de color del papel.",
        "Centrifugación, porque los pigmentos tienen diferente densidad.",
      ],
      correcta: 0,
      explicacion: "La cromatografía permite separar e identificar los pigmentos de una tinta, ya que cada uno migra distancias características según su afinidad química. Es la técnica estándar en química forense para comparar tintas. La filtración no funciona porque los pigmentos están disueltos; la centrifugación separa por densidad, no por composición química.",
      pasos: [],
    },

    // Ejercicio 4
    {
      id: 31,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Separación",
      pregunta: "Para separar aceite de agua después de un derrame, ¿qué método es más apropiado como primer paso?",
      opciones: [
        "Decantación, porque los líquidos tienen diferente densidad y no son miscibles.",
        "Destilación, porque el aceite y el agua tienen distinto punto de ebullición.",
        "Cromatografía, porque los compuestos del aceite tienen diferente afinidad química.",
      ],
      correcta: 0,
      explicacion: "El aceite flota sobre el agua porque su densidad (~0.9 g/mL) es menor que la del agua (1 g/mL), y no son miscibles. La decantación (dejar separar las fases y extraer una) es el primer paso más práctico. En derrames industriales se usan barreras para contener el aceite y luego decantarlo.",
      pasos: [],
    },

    // Ejercicio 5
    {
      id: 32,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Separación",
      pregunta: "¿Por qué NO se puede separar agua salada con un filtro de papel?",
      opciones: [
        "Porque los iones Na⁺ y Cl⁻ están disueltos y son demasiado pequeños para quedar retenidos en el filtro.",
        "Porque la sal es más densa que el papel y lo traspasa.",
        "Porque la sal reacciona con el papel durante la filtración.",
      ],
      correcta: 0,
      explicacion: "En una solución salina, la sal se ha disociado en iones Na⁺ y Cl⁻ de tamaño atómico. El filtro retiene partículas sólidas, pero los iones son tan pequeños que pasan junto con el agua. Para separar la sal disuelta se necesita evaporación (eliminar el agua) o destilación.",
      pasos: [],
    },

    // ══════════════════════════════════════════════════════════════════════════
    // TEMA 5 — CAMBIOS QUÍMICOS Y REACCIONES
    // ══════════════════════════════════════════════════════════════════════════
    {
      id: 33,
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
            { tiempo: "Físico",  correcto: "No se forman nuevas sustancias",  error: "Fundir hielo, cortar papel, disolver sal" },
            { tiempo: "Químico", correcto: "Se forman sustancias nuevas",     error: "Quemar madera, oxidar hierro, cocinar" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Disolver NO es un cambio químico",
          correcto: "Disolver sal en agua es cambio físico: las moléculas de NaCl se dispersan pero no se transforman en otra sustancia.",
          incorrecto: "Confundir disolución con reacción: que algo 'desaparezca' al disolverse no significa que reaccionó. Se puede recuperar la sal evaporando el agua.",
        },
      ],
    },

    // Ejemplo 1 — Balancear H₂ + O₂ → H₂O
    {
      id: 34,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 1 — Reacciones",
      titulo: "Balancear la reacción de síntesis del agua",
      enunciado: "La ley de Lavoisier dice que los átomos no se crean ni se destruyen en una reacción: deben estar en igual número a ambos lados. Balancea la ecuación H₂ + O₂ → H₂O.",
      datos: [
        { label: "Ecuación sin balancear", math: "\\text{H}_2 + \\text{O}_2 \\longrightarrow \\text{H}_2\\text{O}" },
      ],
      pasos: [
        { pre: "Cuenta átomos en reactivos: ", math: "2\\,\\text{H} \\;(\\text{de H}_2) \\quad 2\\,\\text{O}\\;(\\text{de O}_2)" },
        { pre: "Cuenta átomos en productos: ", math: "2\\,\\text{H} \\quad 1\\,\\text{O} \\;(\\text{en H}_2\\text{O})" },
        { pre: "El oxígeno no está balanceado: hay 2 O en reactivos y 1 en productos. Coloca 2 delante del H₂O: ", math: "\\text{H}_2 + \\text{O}_2 \\to 2\\,\\text{H}_2\\text{O}" },
        { pre: "Ahora el H no balancea: hay 2 H en reactivos y 4 en productos. Coloca 2 delante de H₂: ", math: "2\\,\\text{H}_2 + \\text{O}_2 \\longrightarrow 2\\,\\text{H}_2\\text{O}" },
        { pre: "Verificación: 4 H (izq) = 4 H (der) ✓  ·  2 O (izq) = 2 O (der) ✓  →  ecuación balanceada." },
      ],
    },

    // Ejemplo 2 — Combustión del propano
    {
      id: 35,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 2 — Reacciones",
      titulo: "Combustión del propano en una estufa de gas",
      enunciado: "Al encender el gas de la estufa (propano, C₃H₈), ocurre una combustión completa con oxígeno, produciendo dióxido de carbono y agua. Identifica reactivos, productos y tipo de reacción.",
      datos: [
        { label: "Ecuación sin balancear", math: "\\text{C}_3\\text{H}_8 + \\text{O}_2 \\longrightarrow \\text{CO}_2 + \\text{H}_2\\text{O}" },
      ],
      pasos: [
        { pre: "Primero balancea el C: hay 3 C en C₃H₈ → necesitas 3 CO₂: ", math: "\\text{C}_3\\text{H}_8 + \\text{O}_2 \\to 3\\,\\text{CO}_2 + \\text{H}_2\\text{O}" },
        { pre: "Balancea el H: hay 8 H en C₃H₈ → necesitas 4 H₂O: ", math: "\\text{C}_3\\text{H}_8 + \\text{O}_2 \\to 3\\,\\text{CO}_2 + 4\\,\\text{H}_2\\text{O}" },
        { pre: "Balancea el O: en productos hay 3×2 + 4×1 = 10 O → necesitas 5 O₂: ", math: "\\text{C}_3\\text{H}_8 + 5\\,\\text{O}_2 \\longrightarrow 3\\,\\text{CO}_2 + 4\\,\\text{H}_2\\text{O}" },
        { pre: "Tipo de reacción: combustión (reacción de oxidación), exotérmica. Libera calor y luz que usamos para cocinar." },
        { pre: "Importancia ambiental: cada mol de propano quemado produce 3 mol de CO₂, un gas de efecto invernadero." },
      ],
    },

    // Ejercicio 1
    {
      id: 36,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Reacciones",
      pregunta: "Al calentar hierro con azufre se forma sulfuro de hierro (FeS), una sustancia con propiedades completamente diferentes. ¿Qué tipo de cambio ocurrió?",
      opciones: [
        "Cambio físico, porque hubo un cambio de temperatura durante el proceso.",
        "Cambio químico, porque se formó una sustancia nueva con propiedades distintas a las de los reactivos.",
        "Cambio de estado, porque el hierro se fundió al aplicar calor.",
      ],
      correcta: 1,
      explicacion: "Es un cambio químico (reacción de síntesis: Fe + S → FeS). El sulfuro de hierro tiene propiedades completamente distintas al Fe y al S por separado. La temperatura alta solo aporta la energía de activación. La formación de una nueva sustancia es el criterio definitorio de un cambio químico.",
      pasos: [],
    },

    // Ejercicio 2
    {
      id: 37,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Reacciones",
      pregunta: "¿Cuál de los siguientes es evidencia de que ocurrió una reacción química?",
      opciones: [
        "El hielo se derritió al subir la temperatura del ambiente.",
        "Se formó un precipitado sólido al mezclar dos soluciones claras.",
        "El papel se arrugó al doblarlo varias veces.",
      ],
      correcta: 1,
      explicacion: "La formación de un precipitado (sólido insoluble que aparece al mezclar dos soluciones) es evidencia de un cambio químico: se formó una nueva sustancia. El hielo derretido es cambio físico (cambio de estado). El papel arrugado es cambio físico (deformación mecánica).",
      pasos: [],
    },

    // Ejercicio 3
    {
      id: 38,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Reacciones",
      pregunta: "En la reacción balanceada: 2H₂ + O₂ → 2H₂O, ¿cuántos átomos de hidrógeno hay en los reactivos?",
      opciones: [
        "2 átomos (en la molécula H₂).",
        "4 átomos (2 moléculas de H₂, cada una con 2 átomos).",
        "1 átomo (el subíndice 2 indica 2 moléculas, no átomos).",
      ],
      correcta: 1,
      explicacion: "2H₂ significa 2 moléculas de H₂. Cada molécula tiene 2 átomos de H, por lo tanto: 2 moléculas × 2 átomos = 4 átomos de H. En el producto (2H₂O), también hay 4 átomos de H: la ecuación está balanceada.",
      pasos: [],
    },

    // Ejercicio 4
    {
      id: 39,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Reacciones",
      pregunta: "Según la ley de Lavoisier, si 4 g de hidrógeno reaccionan con 32 g de oxígeno para formar agua, ¿cuántos gramos de agua se producen?",
      opciones: [
        "28 g (diferencia de las masas).",
        "32 g (solo se cuenta el reactivo más pesado).",
        "36 g (suma de las masas de los reactivos).",
      ],
      correcta: 2,
      explicacion: "La ley de conservación de la masa (Lavoisier): masa de reactivos = masa de productos. 4 g + 32 g = 36 g de agua producidos. No se pierde ni gana materia en la reacción.",
      pasos: [],
    },

    // Ejercicio 5
    {
      id: 40,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Reacciones",
      pregunta: "¿Cuál de las siguientes ecuaciones representa una reacción de descomposición?",
      opciones: [
        "H₂ + Cl₂ → 2HCl (síntesis: dos elementos forman un compuesto).",
        "2H₂O → 2H₂ + O₂ (descomposición: un compuesto se divide en elementos más simples).",
        "Fe + S → FeS (síntesis: dos elementos forman un compuesto).",
      ],
      correcta: 1,
      explicacion: "En una reacción de descomposición, un compuesto se desintegra en dos o más sustancias más simples. 2H₂O → 2H₂ + O₂ es la electrólisis del agua: un compuesto produce dos elementos. Las otras dos son síntesis (dos reactivos producen un solo producto).",
      pasos: [],
    },

    // ══════════════════════════════════════════════════════════════════════════
    // TEMA 6 — ENERGÍA EN REACCIONES
    // ══════════════════════════════════════════════════════════════════════════
    {
      id: 41,
      tipo: "regla_rica",
      etiqueta: "6 / 7 — Energía química",
      titulo: "Energía en reacciones y aporte calórico",
      bloques: [
        {
          tipo: "texto",
          texto: "Las reacciones exotérmicas liberan energía al ambiente (ΔH negativo); las endotérmicas la absorben (ΔH positivo). El aporte calórico de los alimentos mide la energía que proporcionan: carbohidratos y proteínas aportan ~4 kcal/g; los lípidos aportan ~9 kcal/g. La caloría alimentaria es en realidad 1 kilocaloría (kcal).",
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
            { tiempo: "Carbohidratos", correcto: "4 kcal/g", error: "Energía inmediata (glucosa → ATP)" },
            { tiempo: "Proteínas",     correcto: "4 kcal/g", error: "Energía de reserva (secundario)" },
            { tiempo: "Lípidos",       correcto: "9 kcal/g", error: "Reserva energética a largo plazo" },
            { tiempo: "Alcohol",       correcto: "7 kcal/g", error: "Solo energía, sin valor nutricional" },
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

    // Ejemplo 1 — Etiqueta nutricional
    {
      id: 42,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 1 — Energía química",
      titulo: "Leer una etiqueta nutricional y calcular kcal",
      enunciado: "Una barra de granola indica: 25 g de carbohidratos, 5 g de proteínas y 10 g de lípidos por porción. Calcula las kilocalorías totales y determina qué macronutriente aporta más energía.",
      datos: [
        { label: "Factores", math: "\\text{Carbs: 4 kcal/g} \\quad \\text{Proteínas: 4 kcal/g} \\quad \\text{Lípidos: 9 kcal/g}" },
      ],
      pasos: [
        { pre: "Calorías de carbohidratos: ", math: "25 \\times 4 = 100\\,\\text{kcal}" },
        { pre: "Calorías de proteínas: ", math: "5 \\times 4 = 20\\,\\text{kcal}" },
        { pre: "Calorías de lípidos: ", math: "10 \\times 9 = 90\\,\\text{kcal}" },
        { pre: "Total: ", math: "100 + 20 + 90 = 210\\,\\text{kcal}" },
        { pre: "Aunque los carbohidratos son más en gramos (25 g vs 10 g de lípidos), los lípidos aportan casi la misma energía (90 vs 100 kcal) gracias a su mayor densidad energética (9 kcal/g)." },
      ],
    },

    // Ejemplo 2 — Fotosíntesis vs respiración
    {
      id: 43,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 2 — Energía química",
      titulo: "Fotosíntesis y respiración celular: reacciones opuestas",
      enunciado: "La fotosíntesis y la respiración aeróbica son reacciones químicas inversas entre sí. Compara sus ecuaciones, clasifícalas energéticamente y comprende el ciclo de la materia y la energía.",
      datos: [
        { label: "Fotosíntesis", math: "6\\,\\text{CO}_2 + 6\\,\\text{H}_2\\text{O} + \\text{luz} \\longrightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\,\\text{O}_2" },
        { label: "Respiración", math: "\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\,\\text{O}_2 \\longrightarrow 6\\,\\text{CO}_2 + 6\\,\\text{H}_2\\text{O} + \\text{ATP}" },
      ],
      pasos: [
        { pre: "Fotosíntesis: absorbe energía luminosa para construir glucosa (molécula de alta energía potencial). Es ENDOTÉRMICA (ΔH > 0)." },
        { pre: "Respiración aeróbica: libera la energía almacenada en la glucosa como ATP. Es EXOTÉRMICA (ΔH < 0)." },
        { pre: "Son inversas: reactivos de una = productos de la otra. Juntas forman el ciclo del carbono." },
        { pre: "Diferencia clave: la fotosíntesis capta energía solar; la respiración libera energía química útil para la célula." },
      ],
    },

    // Ejercicio 1
    {
      id: 44,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Energía química",
      pregunta: "La fotosíntesis es una reacción en la que las plantas absorben energía solar para producir glucosa. ¿Cómo se clasifica?",
      opciones: [
        "Exotérmica, porque libera oxígeno al ambiente como producto.",
        "Endotérmica, porque necesita absorber energía (luz solar) del entorno para ocurrir.",
        "Neutra en energía, porque la energía solar no es calor.",
      ],
      correcta: 1,
      explicacion: "La fotosíntesis es endotérmica: 6CO₂ + 6H₂O + luz → C₆H₁₂O₆ + 6O₂. La energía luminosa se incorpora a la glucosa (mayor energía potencial química). La liberación de O₂ es un subproducto, no el criterio para clasificar la reacción energéticamente.",
      pasos: [],
    },

    // Ejercicio 2
    {
      id: 45,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Energía química",
      pregunta: "La combustión de madera en una fogata libera calor y luz. ¿Qué tipo de reacción es?",
      opciones: [
        "Exotérmica, porque libera energía (calor y luz) al ambiente.",
        "Endotérmica, porque necesita temperatura alta para iniciar.",
        "Neutra, porque la madera regresa al estado de CO₂ y H₂O que era originalmente.",
      ],
      correcta: 0,
      explicacion: "La combustión es exotérmica (ΔH < 0): libera energía al ambiente como calor y luz. El hecho de que necesite energía para INICIAR (energía de activación) no la hace endotérmica. Una vez iniciada, la reacción libera más energía de la que necesitó para comenzar.",
      pasos: [],
    },

    // Ejercicio 3
    {
      id: 46,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Energía química",
      pregunta: "La respiración celular aeróbica (C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP) ¿cómo se clasifica energéticamente?",
      opciones: [
        "Endotérmica, porque las células necesitan energía para respirar.",
        "Exotérmica, porque libera energía en forma de ATP y calor al oxidar la glucosa.",
        "Exotérmica, pero solo porque produce CO₂ y agua como subproductos.",
      ],
      correcta: 1,
      explicacion: "La respiración celular es exotérmica: la oxidación de la glucosa libera la energía almacenada en sus enlaces C-H. Parte de esa energía se captura como ATP (útil para la célula) y parte se disipa como calor (que mantiene la temperatura corporal). Los subproductos CO₂ y H₂O no son el criterio de clasificación.",
      pasos: [],
    },

    // Ejercicio 4
    {
      id: 47,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Energía química",
      pregunta: "Una porción de comida tiene 40 g de carbohidratos, 15 g de proteínas y un número desconocido de gramos de lípidos. Si el total es 300 kcal, ¿cuántos gramos de lípidos contiene?",
      opciones: [
        "Aproximadamente 9 g de lípidos.",
        "Aproximadamente 80 g de lípidos.",
        "Aproximadamente 20 g de lípidos.",
      ],
      correcta: 0,
      explicacion: "Energía de carbs + proteínas: 40×4 + 15×4 = 160 + 60 = 220 kcal. Energía de lípidos: 300 - 220 = 80 kcal. Gramos de lípidos: 80 ÷ 9 ≈ 8.9 g ≈ 9 g.",
      pasos: [],
    },

    // Ejercicio 5
    {
      id: 48,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Energía química",
      pregunta: "La 'caloría' indicada en las etiquetas de alimentos equivale a:",
      opciones: [
        "1 kilocaloría (kcal) = 1,000 calorías científicas.",
        "1 caloría científica (cal).",
        "1 joule de energía.",
      ],
      correcta: 0,
      explicacion: "Por convención, la 'Caloría' (con mayúscula) de los alimentos equivale a 1 kcal = 1,000 cal científicas. Si la etiqueta dice '200 calorías', son 200 kcal o 200,000 cal. Esta distinción evita confusiones al calcular el gasto energético.",
      pasos: [],
    },

    // ══════════════════════════════════════════════════════════════════════════
    // TEMA 7 — IMPACTO EN SALUD Y AMBIENTE
    // ══════════════════════════════════════════════════════════════════════════
    {
      id: 49,
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
            { tiempo: "Pesticidas",    correcto: "Mayor producción agrícola",          error: "Contaminación de suelo y agua" },
            { tiempo: "Fertilizantes", correcto: "Mejoran rendimiento de cultivos",    error: "Eutrofización de ríos y lagos" },
            { tiempo: "Plásticos",     correcto: "Materiales versátiles y ligeros",    error: "Contaminación persistente (microplásticos)" },
            { tiempo: "Combustibles",  correcto: "Energía para transporte e industria",error: "CO₂, lluvia ácida, smog" },
          ],
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "No todos los productos químicos son dañinos — la dosis importa",
          correcto: "El flúor en pasta dental previene caries; en dosis bajas es benéfico. El mismo compuesto puede ser medicamento o veneno según la dosis (principio de Paracelso).",
          incorrecto: "Asumir que todo lo 'químico' es malo y lo 'natural' es seguro: el arsénico es natural y muy tóxico; muchos medicamentos que salvan vidas son compuestos sintéticos.",
        },
      ],
    },

    // Ejemplo 1 — Lluvia ácida
    {
      id: 50,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 1 — Impacto ambiental",
      titulo: "La lluvia ácida: reacciones y consecuencias",
      enunciado: "Las fábricas y vehículos emiten dióxido de azufre (SO₂) y óxidos de nitrógeno (NOₓ) que reaccionan con la humedad atmosférica formando ácidos que caen como lluvia.",
      datos: [
        { label: "Reacciones principales", math: "\\text{SO}_2 + \\text{H}_2\\text{O} \\to \\text{H}_2\\text{SO}_3 \\quad \\text{(ácido sulfuroso)}" },
        { label: "", math: "\\text{NO}_2 + \\text{H}_2\\text{O} \\to \\text{HNO}_3 \\quad \\text{(ácido nítrico)}" },
      ],
      pasos: [
        { pre: "Origen: combustión de carbón y petróleo en plantas termoeléctricas y motores libera SO₂ y NOₓ." },
        { pre: "En la atmósfera estos gases se oxidan y reaccionan con vapor de agua formando ácido sulfúrico y nítrico." },
        { pre: "La lluvia ácida (pH < 5.6) daña: bosques (acidifica suelos, disuelve nutrientes), lagos (mata peces), monumentos (corroe piedra caliza y mármol) y metales." },
        { pre: "Solución: reducir emisiones con filtros y catalizadores; sustituir combustibles fósiles por energías limpias." },
      ],
    },

    // Ejemplo 2 — Microplásticos
    {
      id: 51,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 2 — Impacto ambiental",
      titulo: "Microplásticos: del plástico al océano al plato",
      enunciado: "Los plásticos no se biodegradan: se fragmentan en partículas cada vez más pequeñas llamadas microplásticos (< 5 mm). Estos contaminantes se acumulan en ecosistemas y cadenas tróficas.",
      datos: [
        { label: "Tiempo de degradación", math: "\\text{Bolsa plástica: } \\sim 20\\text{ años} \\quad \\text{Botella PET: }\\sim 450\\text{ años} \\quad \\text{Hilo nylon: } \\sim 600\\text{ años}" },
      ],
      pasos: [
        { pre: "Fragmentación: la luz UV y la acción mecánica del mar rompen los plásticos en trozos cada vez más pequeños sin que cambien su composición química." },
        { pre: "Bioacumulación: los microplásticos son ingeridos por zooplancton → peces pequeños → peces grandes → aves/mamíferos marinos → humanos." },
        { pre: "Se han encontrado microplásticos en sangre humana, placenta y leche materna. Los efectos en la salud aún se investigan." },
        { pre: "Solución parcial: reducir el uso de plásticos desechables, mejorar sistemas de reciclaje y desarrollar bioplásticos biodegradables." },
      ],
    },

    // Ejercicio 1
    {
      id: 52,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Impacto ambiental",
      pregunta: "El uso excesivo de fertilizantes químicos en la agricultura provoca que los nutrientes lleguen a ríos y lagos. ¿Cuál es la consecuencia principal?",
      opciones: [
        "Se purifica el agua porque los nitratos son soluciones limpiadoras.",
        "Se produce eutrofización: crecimiento excesivo de algas que consume el oxígeno disuelto y mata la vida acuática.",
        "Aumenta la biodiversidad porque los nutrientes alimentan a más organismos acuáticos.",
      ],
      correcta: 1,
      explicacion: "La eutrofización ocurre cuando el exceso de nitratos y fosfatos causa proliferación masiva de algas. Al morir, su descomposición bacteriana consume el oxígeno disuelto, causando la muerte de peces y otros organismos. Es el efecto opuesto a purificar o aumentar la biodiversidad.",
      pasos: [],
    },

    // Ejercicio 2
    {
      id: 53,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Impacto ambiental",
      pregunta: "Los CFCs (clorofluorocarbonos) usados en aerosoles y refrigerantes causaron daño a:",
      opciones: [
        "La capa de ozono estratosférica, que protege a la Tierra de la radiación ultravioleta.",
        "Los mares y océanos, acidificando el agua de mar.",
        "Los suelos agrícolas, reduciendo su fertilidad.",
      ],
      correcta: 0,
      explicacion: "Los CFCs liberan cloro en la estratósfera, que cataliza la destrucción del ozono (O₃). La capa de ozono absorbe la radiación UV-B y UV-C, que causa cáncer de piel y cataratas. Por eso el Protocolo de Montreal (1987) prohibió los CFCs. La acidificación oceánica es causada por el CO₂, no los CFCs.",
      pasos: [],
    },

    // Ejercicio 3
    {
      id: 54,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Impacto ambiental",
      pregunta: "La lluvia ácida se forma principalmente por:",
      opciones: [
        "La quema de combustibles fósiles que libera SO₂ y NOₓ a la atmósfera.",
        "El uso de fertilizantes en la agricultura.",
        "La deforestación de los bosques tropicales.",
      ],
      correcta: 0,
      explicacion: "Las plantas termoeléctricas de carbón y los motores de combustión interna emiten SO₂ y NOₓ. Estos gases reaccionan con el vapor de agua atmosférico formando ácido sulfúrico y nítrico. La lluvia resultante tiene pH < 5.6 y daña ecosistemas, edificios y cultivos.",
      pasos: [],
    },

    // Ejercicio 4
    {
      id: 55,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Impacto ambiental",
      pregunta: "¿Cuál es la principal razón por la que los plásticos son contaminantes especialmente problemáticos?",
      opciones: [
        "Se degradan de inmediato en compuestos tóxicos que envenenan el suelo.",
        "Tardan cientos de años en degradarse y se fragmentan en microplásticos que se acumulan en cadenas tróficas.",
        "Su producción consume la mayor parte del petróleo disponible en el mundo.",
      ],
      correcta: 1,
      explicacion: "Los plásticos no se biodegradan: solo se fragmentan físicamente en partículas cada vez más pequeñas (microplásticos) que persisten por siglos. Al integrarse en las cadenas tróficas (bioacumulación), llegan hasta organismos de niveles superiores, incluyendo humanos. Esta persistencia a largo plazo es su característica más problemática como contaminante.",
      pasos: [],
    },

    // Ejercicio 5
    {
      id: 56,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Impacto ambiental",
      pregunta: "El principio de Paracelso afirma: 'la dosis hace el veneno'. ¿Qué ejemplo ilustra mejor este principio?",
      opciones: [
        "El flúor en dosis bajas (pasta dental) previene caries; en dosis altas causa fluorosis ósea.",
        "El mercurio siempre es dañino sin importar la cantidad ingerida.",
        "Los productos naturales nunca tienen efectos adversos en el cuerpo humano.",
      ],
      correcta: 0,
      explicacion: "Paracelso estableció que cualquier sustancia puede ser tóxica o beneficiosa según la dosis. El flúor a 0.7-1.2 mg/L en el agua previene caries; a más de 4 mg/L causa fluorosis dental y ósea. Incluso el agua o el oxígeno en exceso pueden ser tóxicos. Esto demuestra que no es la sustancia sino la cantidad lo que determina su efecto.",
      pasos: [],
    },

    // ── RESUMEN ────────────────────────────────────────────────────────────────
    {
      id: 57,
      tipo: "resumen",
      titulo: "Resumen — Química",
      etiqueta: "Conceptos clave para el EXANI-I",
      puntos: [
        {
          titulo: "Modelos atómicos",
          texto: "Dalton → Thomson (pudín) → Rutherford (núcleo) → Bohr (órbitas) → Cuántico (orbitales/nube). El número de protones = número atómico = identidad del elemento.",
        },
        {
          titulo: "Tipos de enlace",
          texto: "Iónico: metal + no metal, transferencia e⁻ · Covalente: no metal + no metal, compartición e⁻ · Metálico: mar de e⁻",
        },
        {
          titulo: "Biomoléculas",
          texto: "Carbohidratos (4 kcal/g, energía rápida) · Lípidos (9 kcal/g, reserva + membranas) · Proteínas (estructura/enzimas) · Ác. nucleicos (genética)",
        },
        {
          titulo: "Sustancias y mezclas",
          texto: "Puras: elementos (1 tipo átomo) y compuestos (proporción fija) · Mezclas: homogéneas (soluciones) y heterogéneas (fases visibles)",
        },
        {
          titulo: "Separación de mezclas",
          texto: "Filtración (tamaño) · Destilación (punto ebullición) · Cromatografía (afinidad) · Decantación / Centrifugación (densidad)",
        },
        {
          titulo: "Reacciones y energía",
          texto: "Ley de Lavoisier: masa reactivos = masa productos · Exotérmica (libera calor, ΔH<0) · Endotérmica (absorbe calor, ΔH>0)",
        },
        {
          titulo: "Impacto ambiental",
          texto: "CFCs → capa ozono · SO₂/NOₓ → lluvia ácida · Fertilizantes → eutrofización · Plásticos → microplásticos en cadena trófica",
        },
      ],
    },
  ],
};
