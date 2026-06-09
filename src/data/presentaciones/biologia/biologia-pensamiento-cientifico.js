// Presentación: Biología — Pensamiento Científico (EXANI-I)

export const PRESENTACION = {
  id: "biologia-pensamiento-cientifico",
  titulo: "Biología: Pensamiento Científico",
  materia: "Ciencias",
  subtema: "Biología · EXANI-I",
  slides: [

    // ── PORTADA ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Biología",
      subtitulo: "Célula · Herencia · Evolución · Genética aplicada · Biodiversidad · Cadena trófica",
      etiqueta: "Pensamiento Científico · EXANI-I",
    },

    // ── CÉLULA ─────────────────────────────────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "1 / 7 — La célula",
      titulo: "Estructura y funciones de la célula",
      bloques: [
        {
          tipo: "texto",
          texto: "La célula es la unidad estructural y funcional de todos los seres vivos. Las células procariotas (bacterias) carecen de núcleo definido. Las células eucariotas (animales, plantas, hongos) tienen núcleo con membrana. Las células vegetales se distinguen por tener pared celular, cloroplastos y vacuola central grande; las animales tienen centriolos y lisosomas.",
        },
        {
          tipo: "diagrama",
          id: "biologia-celula",
          titulo: "Célula animal vs célula vegetal: orgánelos principales",
        },
        {
          tipo: "tabla",
          titulo: "Orgánelos y sus funciones",
          columnas: ["Orgánelo", "Función principal", "¿En qué célula?"],
          filas: [
            { tiempo: "Núcleo",       correcto: "Almacena ADN, controla funciones",  error: "Eucariotas (animal y vegetal)" },
            { tiempo: "Mitocondria",  correcto: "Respiración celular → ATP",         error: "Eucariotas (animal y vegetal)" },
            { tiempo: "Cloroplasto",  correcto: "Fotosíntesis (CO₂ → glucosa)",      error: "Solo célula vegetal" },
            { tiempo: "Lisosoma",     correcto: "Digestión intracelular",            error: "Principalmente animal" },
            { tiempo: "Pared celular",correcto: "Soporte y protección",              error: "Vegetal, fungi, bacterias" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Membrana plasmática ≠ pared celular — son estructuras distintas",
          correcto: "TODAS las células tienen membrana plasmática (flexible, regula intercambio). Solo las vegetales, bacterias y hongos tienen ADEMÁS pared celular (rígida, externa).",
          incorrecto: "Confundir membrana con pared: la membrana plasmática es universal; la pared celular es exclusiva de ciertos tipos celulares y añade rigidez adicional.",
        },
      ],
    },

    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo — La célula",
      pregunta: "¿Cuál de las siguientes estructuras es exclusiva de la célula vegetal y le permite realizar la fotosíntesis?",
      opciones: [
        "La mitocondria, porque produce la energía que necesita la planta para vivir.",
        "El cloroplasto, porque contiene clorofila y captura la energía solar para sintetizar glucosa.",
        "El núcleo, porque almacena la información genética que dirige la fotosíntesis.",
      ],
      correcta: 1,
      explicacion: "El cloroplasto es el orgánelo exclusivo de las células vegetales (y algas) que realiza la fotosíntesis, convirtiendo energía luminosa en energía química (glucosa). Las mitocondrias y el núcleo están presentes en ambos tipos de células eucariotas (animales y vegetales).",
      pasos: [],
    },

    // ── HERENCIA ───────────────────────────────────────────────────────────────
    {
      id: 3,
      tipo: "regla_rica",
      etiqueta: "2 / 7 — Herencia genética",
      titulo: "La herencia en los seres vivos",
      bloques: [
        {
          tipo: "texto",
          texto: "Gregor Mendel descubrió las leyes de la herencia con experimentos en guisantes. Los genes se presentan en pares de alelos: el dominante (A) se expresa aunque solo haya una copia; el recesivo (a) solo se manifiesta si se tienen dos copias (aa). El cuadro de Punnett permite predecir la proporción de genotipos y fenotipos de la descendencia.",
        },
        {
          tipo: "diagrama",
          id: "biologia-herencia",
          titulo: "Cuadro de Punnett: cruce Aa × Aa y conceptos clave",
        },
        {
          tipo: "tabla",
          titulo: "Conceptos de genética mendeliana",
          columnas: ["Concepto", "Definición", "Ejemplo"],
          filas: [
            { tiempo: "Genotipo",   correcto: "Composición genética del individuo",   error: "AA, Aa, aa" },
            { tiempo: "Fenotipo",   correcto: "Característica observable",            error: "Color de flor, grupo sanguíneo" },
            { tiempo: "Homocigoto", correcto: "Los dos alelos son iguales",           error: "AA o aa" },
            { tiempo: "Heterocigoto",correcto:"Los dos alelos son distintos",         error: "Aa (portador)" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Gen DOMINANTE no significa gen más frecuente en la población",
          correcto: "Dominante significa que se expresa aunque solo haya una copia. Puede ser raro en la población (ej. polidactilia es dominante pero infrecuente).",
          incorrecto: "Confundir dominante con frecuente: un alelo puede ser dominante y estar presente solo en el 1% de la población; 'dominante' describe cómo se expresa, no cuánto abunda.",
        },
      ],
    },

    {
      id: 4,
      tipo: "ejercicio",
      etiqueta: "Reactivo — Herencia genética",
      pregunta: "En un cruce entre dos individuos con genotipo Aa (donde A = tallo alto, a = tallo bajo), ¿qué porcentaje de la descendencia presentará el fenotipo recesivo (tallo bajo)?",
      opciones: [
        "75%, porque los individuos dominantes son mayoría.",
        "50%, porque hay igual probabilidad de heredar cada alelo.",
        "25%, porque solo el genotipo aa muestra el fenotipo recesivo.",
      ],
      correcta: 2,
      explicacion: "Con el cruce Aa × Aa, el cuadro de Punnett produce: AA (25%), Aa (50%), aa (25%). Solo el genotipo aa muestra el fenotipo recesivo (tallo bajo), ya que para que el gen recesivo se exprese se necesitan dos copias. Por tanto, 1 de cada 4 descendientes (25%) será de tallo bajo.",
      pasos: [],
    },

    // ── EVOLUCIÓN ──────────────────────────────────────────────────────────────
    {
      id: 5,
      tipo: "regla_rica",
      etiqueta: "3 / 7 — Teoría de la evolución",
      titulo: "Teoría de la evolución de Darwin",
      bloques: [
        {
          tipo: "texto",
          texto: "Darwin propuso que las especies evolucionan por selección natural: los individuos con variaciones favorables para su ambiente sobreviven más y se reproducen más, transmitiendo esas características. Las mutaciones y la reproducción sexual generan variación. Con el tiempo, poblaciones separadas divergen y forman nuevas especies (especiación).",
        },
        {
          tipo: "diagrama",
          id: "biologia-evolucion",
          titulo: "Selección natural y árbol evolutivo",
        },
        {
          tipo: "tabla",
          titulo: "Mecanismos de la evolución",
          columnas: ["Mecanismo", "Qué implica", "Ejemplo"],
          filas: [
            { tiempo: "Variación genética", correcto: "Diferencias heredables entre individuos", error: "Distintos colores de plumaje" },
            { tiempo: "Selección natural",  correcto: "Supervivencia diferencial según el ambiente", error: "Cuellos largos en jirafas" },
            { tiempo: "Mutación",           correcto: "Cambio en la secuencia de ADN",           error: "Resistencia a antibióticos" },
            { tiempo: "Especiación",        correcto: "Divergencia hasta no poder cruzarse",    error: "Pinzones de las Galápagos" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "La evolución NO tiene dirección ni propósito — actúa sobre lo que ya existe",
          correcto: "La jirafa con cuello largo no lo desarrolló porque 'necesitaba' alcanzar las hojas; ya tenía variación natural en el cuello y las de cuello más largo sobrevivieron y se reprodujeron más.",
          incorrecto: "Pensar que Lamarck tenía razón: los órganos NO se modifican por el uso y desuso y esos cambios NO se heredan. La jirafa no 'estiró' el cuello generación a generación.",
        },
      ],
    },

    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo — Teoría evolutiva",
      pregunta: "Según la teoría de la selección natural de Darwin, ¿cuál explicación describe correctamente por qué las jirafas con cuello más largo predominan en la actualidad?",
      opciones: [
        "Las jirafas estiraron su cuello a lo largo de su vida para alcanzar las hojas altas y transmitieron ese cambio a sus crías.",
        "En la población original existía variación en el largo del cuello; las jirafas con cuello más largo tenían ventaja para alimentarse y se reprodujeron más.",
        "Las jirafas con cuello corto decidieron no reproducirse al notar que no podían competir por el alimento.",
      ],
      correcta: 1,
      explicacion: "La selección natural opera sobre variación preexistente, no sobre cambios adquiridos. La opción A describe el lamarckismo (uso y desuso), que Darwin superó. Las jirafas con cuello más largo tenían mayor acceso a alimento, mayor supervivencia y más descendencia: esa variación se transmitió genéticamente. La opción C implica volición, lo cual no es parte del proceso evolutivo.",
      pasos: [],
    },

    // ── MANIPULACIÓN GENÉTICA ─────────────────────────────────────────────────
    {
      id: 7,
      tipo: "regla_rica",
      etiqueta: "4 / 7 — Genética aplicada",
      titulo: "La manipulación genética y sus implicaciones",
      bloques: [
        {
          tipo: "texto",
          texto: "La ingeniería genética permite modificar el ADN de organismos para obtener productos útiles o corregir enfermedades. Los organismos genéticamente modificados (OGM) se usan en agricultura y medicina. La terapia génica busca corregir genes defectuosos. CRISPR-Cas9 es la herramienta de edición genómica más precisa. Estas tecnologías generan debates éticos sobre bioseguridad, patentes y equidad.",
        },
        {
          tipo: "diagrama",
          id: "biologia-genetica-aplicada",
          titulo: "Aplicaciones e implicaciones de la manipulación genética",
        },
        {
          tipo: "tabla",
          titulo: "Aplicaciones de la ingeniería genética",
          columnas: ["Aplicación", "Ejemplo concreto", "Beneficio principal"],
          filas: [
            { tiempo: "Organismos transgénicos", correcto: "Maíz Bt resistente a plagas",     error: "Menor uso de pesticidas" },
            { tiempo: "Producción de fármacos",  correcto: "Insulina humana en bacterias",    error: "Tratamiento de diabetes" },
            { tiempo: "Terapia génica",          correcto: "Corrección de fibrosis quística",  error: "Curar enfermedades hereditarias" },
            { tiempo: "Diagnóstico molecular",   correcto: "PCR para detectar patógenos",     error: "Diagnóstico rápido y preciso" },
          ],
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "Alimento transgénico ≠ alimento 'lleno de genes extraños'",
          correcto: "Un OGM puede tener solo un gen adicional (de miles) que le confiere resistencia a plagas o mayor contenido nutricional. Su ADN sigue siendo mayoritariamente de la misma especie.",
          incorrecto: "Pensar que comer un tomate transgénico altera el ADN humano: al digerir alimentos, el ADN (propio o ajeno) se degrada completamente. Los genes del tomate no se integran en las células humanas.",
        },
      ],
    },

    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo — Genética aplicada",
      pregunta: "La insulina para tratar la diabetes tipo 1 se produce actualmente de forma masiva mediante:",
      opciones: [
        "Extracción directa del páncreas de cerdos o bovinos en rastros.",
        "Síntesis química completa en laboratorio, átomo por átomo.",
        "Ingeniería genética: el gen humano de insulina se inserta en bacterias que producen la proteína en fermentadores.",
      ],
      correcta: 2,
      explicacion: "Desde 1982, la insulina humana se produce con ingeniería genética: el gen que codifica la insulina humana se inserta en bacterias E. coli o levaduras, que la fabrican en grandes cantidades. Esto reemplazó a la insulina animal (que podía causar reacciones inmunes). Es un ejemplo claro de beneficio médico directo de la manipulación genética.",
      pasos: [],
    },

    // ── BIODIVERSIDAD ─────────────────────────────────────────────────────────
    {
      id: 9,
      tipo: "regla_rica",
      etiqueta: "5 / 7 — Biodiversidad",
      titulo: "La biodiversidad en México",
      bloques: [
        {
          tipo: "texto",
          texto: "México es el cuarto país megadiverso del mundo: ocupa entre el 5% y 10% de las especies conocidas en solo el 1.4% de la superficie terrestre. Su riqueza se debe a su posición geográfica (entre dos regiones biogeográficas), variedad de climas, altitudes y ecosistemas. La biodiversidad incluye tres niveles: genes, especies y ecosistemas. La pérdida de biodiversidad tiene implicaciones éticas, ecológicas, económicas y culturales.",
        },
        {
          tipo: "diagrama",
          id: "biologia-biodiversidad",
          titulo: "Principales biomas y ecosistemas de México",
        },
        {
          tipo: "tabla",
          titulo: "Amenazas a la biodiversidad",
          columnas: ["Amenaza", "Causa principal", "Ejemplo en México"],
          filas: [
            { tiempo: "Deforestación",     correcto: "Cambio de uso de suelo agrícola", error: "Selva Lacandona, Sierra Madre" },
            { tiempo: "Contaminación",     correcto: "Residuos industriales y agrícolas", error: "Ríos y Golfo de México" },
            { tiempo: "Sobreexplotación",  correcto: "Pesca y caza excesivas",           error: "Vaquita marina, totoaba" },
            { tiempo: "Especies invasoras",correcto: "Introducción sin control",         error: "Pez diablo, pez globo" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Biodiversidad NO es solo número de especies — son tres niveles",
          correcto: "La biodiversidad incluye: diversidad genética (variación dentro de una especie), diversidad de especies (número y variedad) y diversidad de ecosistemas (hábitats y biomas).",
          incorrecto: "Reducir la biodiversidad solo a 'cuántas especies hay': dos bosques pueden tener el mismo número de especies pero uno ser más diverso si sus especies tienen mayor variación genética o representan ecosistemas únicos.",
        },
      ],
    },

    {
      id: 10,
      tipo: "ejercicio",
      etiqueta: "Reactivo — Biodiversidad",
      pregunta: "México es considerado uno de los países megadiversos del planeta. ¿Cuál característica explica principalmente esta riqueza biológica?",
      opciones: [
        "Sus leyes de conservación son las más avanzadas del mundo y han protegido sus ecosistemas.",
        "Su posición geográfica, diversidad de climas, altitudes y la confluencia de dos regiones biogeográficas generan gran variedad de ecosistemas.",
        "Su escasa densidad de población ha permitido que los ecosistemas naturales permanezcan intactos.",
      ],
      correcta: 1,
      explicacion: "La megadiversidad de México se debe principalmente a factores geográficos y climáticos: está ubicado entre la región neártica y la neotropical, cuenta con dos océanos, montañas (hasta 5600 m), desiertos, selvas tropicales y arrecifes. Esta variedad de condiciones genera niches ecológicos muy distintos que albergan millones de especies endémicas y migratorias.",
      pasos: [],
    },

    // ── ADAPTACIÓN Y EVOLUCIÓN ────────────────────────────────────────────────
    {
      id: 11,
      tipo: "regla_rica",
      etiqueta: "6 / 7 — Adaptación y nutrición",
      titulo: "Adaptación: nutrición, reproducción y relación con el medio",
      bloques: [
        {
          tipo: "texto",
          texto: "Una adaptación es una característica heredable que aumenta la probabilidad de sobrevivir y reproducirse en un ambiente específico. Pueden ser estructurales (morfología), fisiológicas (procesos internos) o conductuales (comportamiento). La nutrición puede ser autótrofa (producen su propio alimento: fotosíntesis, quimiosíntesis) o heterótrofa (consumen a otros: herbívoros, carnívoros, descomponedores).",
        },
        {
          tipo: "diagrama",
          id: "biologia-adaptacion",
          titulo: "Tipos de nutrición y ejemplos de adaptaciones",
        },
        {
          tipo: "tabla",
          titulo: "Tipos de nutrición",
          columnas: ["Tipo", "Organismos", "Fuente de energía"],
          filas: [
            { tiempo: "Autótrofo fotosintético", correcto: "Plantas, algas, cianobacterias",  error: "Luz solar + CO₂ → glucosa" },
            { tiempo: "Autótrofo quimiosintético",correcto: "Bacterias de fuentes hidrotermales", error: "Reacciones químicas inorgánicas" },
            { tiempo: "Heterótrofo herbívoro",    correcto: "Vaca, conejo, saltamontes",        error: "Plantas y algas" },
            { tiempo: "Heterótrofo carnívoro",    correcto: "León, águila, tiburón",            error: "Otros animales" },
            { tiempo: "Descomponedor",            correcto: "Hongos, bacterias saprófitas",     error: "Materia orgánica en descomposición" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Las adaptaciones NO son voluntarias — no hay 'esfuerzo' del organismo",
          correcto: "Las espinas del cactus evolucionaron porque las plantas con espinas perdían menos agua y evitaban más herbivoría: sobrevivieron y se reprodujeron más, no porque la planta 'decidiera' tener espinas.",
          incorrecto: "Creer que los organismos se adaptan 'conscientemente' a su ambiente: la adaptación es el resultado de la selección natural durante muchas generaciones, no una respuesta intencional.",
        },
      ],
    },

    {
      id: 12,
      tipo: "ejercicio",
      etiqueta: "Reactivo — Adaptaciones",
      pregunta: "Los cactus tienen espinas en lugar de hojas y tallos suculentos que almacenan agua. ¿Qué tipo de adaptación representan estas características?",
      opciones: [
        "Adaptaciones conductuales, porque el cactus aprendió a conservar agua en su entorno.",
        "Adaptaciones estructurales que favorecen la supervivencia en ambientes áridos con escasa disponibilidad de agua.",
        "Mutaciones dañinas que el cactus tolera porque no afectan significativamente su crecimiento.",
      ],
      correcta: 1,
      explicacion: "Las espinas son hojas modificadas (adaptación estructural) que reducen la superficie de evaporación y protegen de herbívoros. Los tallos suculentos son otra adaptación estructural para almacenar agua. Estas características surgieron por selección natural: los cactus ancestrales con esas variaciones sobrevivían mejor en zonas áridas y dejaban más descendencia. No son conductuales (no implican comportamiento aprendido) ni dañinas.",
      pasos: [],
    },

    // ── CADENA TRÓFICA ────────────────────────────────────────────────────────
    {
      id: 13,
      tipo: "regla_rica",
      etiqueta: "7 / 7 — Cadena alimentaria",
      titulo: "Transformación de la energía en la cadena alimentaria",
      bloques: [
        {
          tipo: "texto",
          texto: "En la cadena alimentaria, la energía fluye desde los productores (organismos fotosintéticos) hacia los consumidores. Solo el 10% de la energía disponible en un nivel trófico se transfiere al siguiente (regla del 10%): el 90% se pierde como calor en la respiración. Por eso las cadenas alimentarias tienen pocos eslabones y las poblaciones de depredadores son menores que las de presas.",
        },
        {
          tipo: "diagrama",
          id: "biologia-cadena-trofica",
          titulo: "Pirámide trófica y flujo de energía (regla del 10%)",
        },
        {
          tipo: "tabla",
          titulo: "Niveles tróficos",
          columnas: ["Nivel trófico", "Organismos", "Energía disponible"],
          filas: [
            { tiempo: "Productores (1°)",      correcto: "Plantas, algas, fitoplancton", error: "100% (base energética)" },
            { tiempo: "Consumidores 1° (2°)",  correcto: "Herbívoros: vaca, conejo",    error: "~10% de los productores" },
            { tiempo: "Consumidores 2° (3°)",  correcto: "Carnívoros: zorro, serpiente",error: "~1% de los productores" },
            { tiempo: "Consumidores 3° (4°)",  correcto: "Superpredadores: águila, puma",error: "~0.1% de los productores" },
            { tiempo: "Descomponedores",       correcto: "Hongos y bacterias",          error: "Reciclan materia de todos los niveles" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Productores NO son solo plantas — bacterias quimiosintéticas también producen",
          correcto: "En los ecosistemas de fuentes hidrotermales del fondo oceánico, las bacterias quimiosintéticas son los productores, sin necesidad de luz solar. Toda cadena alimentaria parte de algún productor, fotosintético o quimiosintético.",
          incorrecto: "Asumir que toda cadena alimentaria empieza con plantas: en ecosistemas sin luz (fondos oceánicos, cuevas), la energía viene de reacciones químicas inorgánicas, no del sol.",
        },
      ],
    },

    {
      id: 14,
      tipo: "ejercicio",
      etiqueta: "Reactivo — Cadena alimentaria",
      pregunta: "En la cadena: pasto → saltamontes → rana → serpiente → águila. Si una epidemia elimina a todas las ranas, ¿cuál sería el efecto más probable?",
      opciones: [
        "Los saltamontes también desaparecerían por falta de depredadores que regulen el ecosistema.",
        "Las serpientes disminuirían por falta de alimento, lo que también reduciría a las águilas; y los saltamontes aumentarían sin control.",
        "Las águilas se convertirían en herbívoras para compensar la escasez de serpientes.",
      ],
      correcta: 1,
      explicacion: "Al eliminar las ranas: (1) los saltamontes aumentarían sin su depredador principal, pudiendo dañar el pasto; (2) las serpientes disminuirían por falta de presas; (3) las águilas también reducirían su población. Este efecto en cadena ilustra la interdependencia entre niveles tróficos y cómo la eliminación de un eslabón desequilibra todo el ecosistema. Las águilas no pueden cambiar su tipo de nutrición.",
      pasos: [],
    },

    // ── RESUMEN ────────────────────────────────────────────────────────────────
    {
      id: 15,
      tipo: "resumen",
      titulo: "Resumen — Biología",
      etiqueta: "Conceptos clave para el EXANI-I",
      puntos: [
        {
          titulo: "La célula",
          texto: "Unidad de la vida · Animal (lisosomas, centriolos) vs Vegetal (cloroplasto, pared celular, vacuola central)",
        },
        {
          titulo: "Herencia mendeliana",
          texto: "Gen dominante (A) se expresa con una copia · Gen recesivo (a) solo con dos (aa) · Cruce Aa×Aa: 3 dom : 1 rec",
        },
        {
          titulo: "Evolución",
          texto: "Selección natural: variación + presión ambiental → sobreviven los más aptos · Darwin vs Lamarck (uso/desuso: incorrecto)",
        },
        {
          titulo: "Genética aplicada",
          texto: "OGM, insulina bacteriana, terapia génica, CRISPR · Beneficios médicos y agrícolas · Debate ético sobre bioseguridad",
        },
        {
          titulo: "Biodiversidad en México",
          texto: "País megadiverso · Tres niveles: genes, especies, ecosistemas · Amenazas: deforestación, contaminación, invasoras",
        },
        {
          titulo: "Adaptación y nutrición",
          texto: "Autótrofos (fotosíntesis/quimiosíntesis) vs Heterótrofos · Adaptaciones: estructurales, fisiológicas, conductuales",
        },
        {
          titulo: "Cadena trófica",
          texto: "Regla del 10%: solo 10% de energía pasa al siguiente nivel · Productores → Cons. 1° → Cons. 2° → Cons. 3°",
        },
      ],
    },
  ],
};
