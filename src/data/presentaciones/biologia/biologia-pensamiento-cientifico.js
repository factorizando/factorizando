// Presentación: Biología — Pensamiento Científico (EXANI-I)
// Estructura por tema: 1 regla_rica · 2 ejemplos · 5 ejercicios

export const PRESENTACION = {
  id: "biologia-pensamiento-cientifico",
  titulo: "Biología: Pensamiento Científico",
  materia: "Biología",
  examenes: ["EXANI-I"],
  subtema: "Biología · EXANI-I",
  slides: [
    {
      id: 0,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "portada",
          kicker: "Pensamiento Científico · EXANI-I",
          titulo: "Biología",
          subtitulo: "Célula · Herencia · Evolución · Genética aplicada · Biodiversidad · Adaptación · Ecosistemas",
        },
      ],
    },
    {
      id: 1,
      tipo: "lienzo",
      etiqueta: "1 / 7 — La célula",
      titulo: "La célula: unidad de la vida",
      bloques: [
        {
          tipo: "destacado",
          texto: "La célula es la unidad estructural y funcional de todos los seres vivos. Las células procariotas (bacterias) carecen de núcleo definido. Las células eucariotas (animales, plantas, hongos, protistas) tienen núcleo verdadero con membrana nuclear. La teoría celular establece que todo ser vivo está formado por células y toda célula proviene de otra célula.",
        },
        {
          tipo: "figura",
          clave: "biologia-celula",
          titulo: "Comparación entre célula procariota y eucariota",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 1,
          titulo: "Procariota vs Eucariota",
          columnas: ["Característica", "Procariota", "Eucariota"],
          filas: [
            ["Núcleo", "Sin membrana nuclear (nucleoide)", "Con membrana nuclear definida"],
            ["Organelos", "Solo ribosomas", "Mitocondrias, cloroplastos, RE, Golgi…"],
            ["ADN", "Circular, en citoplasma", "Lineal, en cromosomas dentro del núcleo"],
            ["Tamaño", "1–10 µm", "10–100 µm"],
            ["Ejemplos", "Bacterias, arqueas", "Animales, plantas, hongos, protistas"],
          ],
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "A",
          titulo: "Los virus NO son células y NO están vivos de forma autónoma",
          asi_es: "Los virus son partículas acelulares (sin membrana, citoplasma ni metabolismo propio). Solo se reproducen dentro de una célula huésped.",
          asi_no: "Considerar a los virus como el tipo más simple de célula: carecen de todas las características de la vida celular. Son 'parásitos moleculares', no organismos.",
        },
      ],
    },
    {
      id: 2,
      tipo: "lienzo",
      etiqueta: "Ejemplo 1 — La célula",
      titulo: "Bacteria (procariota) vs neurona humana (eucariota)",
      bloques: [
        {
          tipo: "destacado",
          texto: "Compara los componentes y características de E. coli (bacteria intestinal) con una neurona humana. ¿Qué tienen en común y qué las diferencia?",
        },
        {
          tipo: "pasos",
          ancho: 12,
          datos: [
            { label: "E. coli", math: "\\sim 2\\,\\mu\\text{m} \\cdot \\text{sin núcleo} \\cdot \\text{ADN circular} \\cdot \\text{solo ribosomas}" },
            { label: "Neurona", math: "\\sim 100\\,\\mu\\text{m (cuerpo)} \\cdot \\text{núcleo con membrana} \\cdot \\text{ADN lineal} \\cdot \\text{mitocondrias, RE, Golgi}" },
          ],
          pasos: [
            {
              pre: "Lo que comparten: ambas tienen membrana plasmática, citoplasma, ribosomas y ADN como material genético.",
            },
            {
              pre: "Diferencia clave: la neurona tiene un núcleo verdadero con membrana nuclear que contiene los 46 cromosomas lineales humanos.",
            },
            {
              pre: "La neurona tiene mitocondrias (producen ATP para sus largas distancias de señalización), retículo endoplasmático y aparato de Golgi para sintetizar neurotransmisores.",
            },
            {
              pre: "Consecuencia funcional: la bacteria es capaz de vida independiente; la neurona depende de otras células del organismo para sobrevivir.",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      tipo: "lienzo",
      etiqueta: "Ejemplo 2 — La célula",
      titulo: "La mitocondria y la respiración celular aeróbica",
      bloques: [
        {
          tipo: "destacado",
          texto: "Las mitocondrias son los organelos donde se produce la mayor parte del ATP celular. Analiza la reacción global y comprende por qué son tan importantes.",
        },
        {
          tipo: "pasos",
          ancho: 12,
          datos: [
            { label: "Ecuación global", math: "\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\longrightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\approx 38\\,\\text{ATP}" },
          ],
          pasos: [
            {
              pre: "Etapa 1 — Glucólisis (citoplasma): la glucosa se divide en 2 moléculas de piruvato, produciendo 2 ATP y 2 NADH.",
            },
            {
              pre: "Etapa 2 — Ciclo de Krebs (matriz mitocondrial): el piruvato se degrada completamente, produciendo CO₂ y portadores de electrones (NADH, FADH₂).",
            },
            {
              pre: "Etapa 3 — Cadena respiratoria (membrana interna mitocondrial): los electrones liberan energía para producir ~34 ATP más.",
            },
            {
              pre: "Total: ~38 ATP por glucosa. Las células que más ATP necesitan (músculo, neuronas) tienen mayor densidad de mitocondrias.",
            },
            {
              pre: "Por eso las mitocondrias se llaman 'la central energética de la célula'.",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — La célula",
          enunciado: "¿Cuál es la diferencia principal entre una célula procariota y una célula eucariota?",
          opciones: [
            "Las células procariotas tienen núcleo con membrana; las eucariotas no.",
            "Las células eucariotas tienen núcleo verdadero con membrana nuclear; las procariotas no.",
            "Las células procariotas son más grandes que las eucariotas.",
          ],
          correcta: 1,
          explicacion: "El criterio definitorio es el núcleo: las eucariotas tienen núcleo verdadero con membrana nuclear que envuelve el ADN; las procariotas tienen el ADN libre en el citoplasma (nucleoide), sin membrana. Las procariotas son generalmente más pequeñas (1-10 µm vs 10-100 µm).",
        },
      ],
    },
    {
      id: 5,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 2 — La célula",
          enunciado: "¿En qué organelo de la célula eucariota se produce la mayor parte del ATP?",
          opciones: [
            "En el núcleo, donde se encuentra el ADN que contiene las instrucciones energéticas.",
            "En la mitocondria, donde ocurre la respiración aeróbica.",
            "En el ribosoma, donde se sintetizan las proteínas necesarias para la energía.",
          ],
          correcta: 1,
          explicacion: "La mitocondria es el organelo donde se realiza la respiración celular aeróbica (ciclo de Krebs + cadena respiratoria), produciendo ~34 de los ~38 ATP totales por molécula de glucosa. Los ribosomas sintetizan proteínas; el núcleo almacena ADN.",
        },
      ],
    },
    {
      id: 6,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 3 — La célula",
          enunciado: "La teoría celular establece que:",
          opciones: [
            "Los virus son el tipo más simple de célula.",
            "Todo ser vivo está formado por una o más células, y toda célula proviene de una célula preexistente.",
            "Solo los organismos complejos están formados por células; los simples como las bacterias no.",
          ],
          correcta: 1,
          explicacion: "La teoría celular tiene tres postulados: (1) todos los seres vivos están formados por células; (2) la célula es la unidad básica de vida; (3) toda célula surge de una célula preexistente (Virchow). Los virus no son células (no tienen metabolismo propio); las bacterias sí son células (procariotas).",
        },
      ],
    },
    {
      id: 7,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 4 — La célula",
          enunciado: "¿Cuál de las siguientes estructuras es exclusiva de las células vegetales y NO está en las células animales?",
          opciones: ["La membrana plasmática.", "El cloroplasto.", "El ribosoma."],
          correcta: 1,
          explicacion: "Los cloroplastos son exclusivos de células vegetales (y algas): contienen clorofila y realizan la fotosíntesis. La membrana plasmática y los ribosomas están en todas las células (eucariotas y procariotas). Las células animales también tienen mitocondrias pero carecen de cloroplastos y pared celular.",
        },
      ],
    },
    {
      id: 8,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 5 — La célula",
          enunciado: "Un organismo unicelular que tiene núcleo con membrana se clasifica como:",
          opciones: [
            "Procariota, porque es unicelular.",
            "Eucariota, porque tiene núcleo verdadero con membrana nuclear.",
            "Virus, porque es demasiado pequeño para ser multicelular.",
          ],
          correcta: 1,
          explicacion: "El criterio de clasificación es la presencia de núcleo, no el número de células. Un organismo unicelular con núcleo verdadero es un eucariota unicelular (como los protistas: amibas, paramecio, levaduras). La cantidad de células no determina si es procariota o eucariota.",
        },
      ],
    },
    {
      id: 9,
      tipo: "lienzo",
      etiqueta: "2 / 7 — Herencia genética",
      titulo: "Herencia genética: leyes de Mendel",
      bloques: [
        {
          tipo: "destacado",
          texto: "Gregor Mendel descubrió las leyes de la herencia en el siglo XIX trabajando con chícharos. Los genes existen en versiones alternativas llamadas alelos. Un organismo con dos alelos iguales es homocigoto; con dos distintos, heterocigoto. El alelo dominante se expresa aunque solo haya una copia; el recesivo se expresa solo si hay dos copias.",
        },
        {
          tipo: "figura",
          clave: "biologia-herencia",
          titulo: "Cuadro de Punnett y probabilidades de herencia",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 1,
          titulo: "Conceptos clave de genética mendeliana",
          columnas: ["Concepto", "Definición", "Ejemplo"],
          filas: [
            ["Gen", "Segmento de ADN que codifica un carácter", "Gen del color de ojos"],
            ["Alelo", "Versión alternativa de un gen", "A (dominante) / a (recesivo)"],
            ["Genotipo", "Constitución alélica (ej. Aa, AA, aa)", "Aa = heterocigoto"],
            ["Fenotipo", "Carácter observable resultante", "Color de flor, tipo de sangre"],
            ["Dominante", "Se expresa con una sola copia (A_)", "Labio cortado, piel oscura"],
            ["Recesivo", "Solo se expresa con dos copias (aa)", "Fibrosis quística, albinismo"],
          ],
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "B",
          titulo: "Dominante NO significa 'más frecuente' ni 'más sano'",
          asi_es: "Dominante solo significa que un alelo enmascara al otro en el fenotipo. Un alelo recesivo puede ser más frecuente en la población.",
          asi_no: "Confundir dominancia con frecuencia o ventaja adaptativa: la corea de Huntington es un alelo dominante y letal. La resistencia a la malaria por anemia falciforme es un alelo recesivo con ventaja en regiones endémicas.",
        },
      ],
    },
    {
      id: 10,
      tipo: "lienzo",
      etiqueta: "Ejemplo 1 — Herencia",
      titulo: "Cuadro de Punnett: cruce de dos heterocigotos (Aa × Aa)",
      bloques: [
        {
          tipo: "destacado",
          texto: "Sea A = alelo dominante (flor morada) y a = alelo recesivo (flor blanca). Dos plantas heterocigotas se cruzan (Aa × Aa). ¿Qué proporciones genotípicas y fenotípicas se esperan en la descendencia?",
        },
        {
          tipo: "pasos",
          ancho: 12,
          datos: [
            { label: "Gametos de cada padre", math: "\\text{Padre Aa} \\to \\{A, a\\} \\quad \\text{Madre Aa} \\to \\{A, a\\}" },
          ],
          pasos: [
            {
              pre: "Construye el cuadro de Punnett combinando todos los gametos:",
            },
            {
              pre: "  A × A = AA  ·  A × a = Aa  ·  a × A = Aa  ·  a × a = aa",
            },
            {
              pre: "Proporciones genotípicas: ",
              math: "1\\,AA : 2\\,Aa : 1\\,aa \\quad (25\\%\\text{ AA} : 50\\%\\text{ Aa} : 25\\%\\text{ aa})",
            },
            {
              pre: "Proporciones fenotípicas: ",
              math: "3\\text{ moradas (AA o Aa)} : 1\\text{ blanca (aa)} \\quad \\to \\quad 3:1",
            },
            {
              pre: "Primera ley de Mendel (Segregación): los dos alelos de un gen se separan durante la formación de gametos, y cada gameto recibe solo uno.",
            },
          ],
        },
      ],
    },
    {
      id: 11,
      tipo: "lienzo",
      etiqueta: "Ejemplo 2 — Herencia",
      titulo: "Herencia del grupo sanguíneo ABO: codominancia",
      bloques: [
        {
          tipo: "destacado",
          texto: "El grupo sanguíneo humano se hereda con tres alelos: Iᴬ, Iᴮ (codominantes) y i (recesivo). Un padre del tipo AB (IᴬIᴮ) y una madre del tipo O (ii) tienen hijos. ¿Cuáles grupos sanguíneos son posibles?",
        },
        {
          tipo: "pasos",
          ancho: 12,
          datos: [
            { label: "Gametos padre AB", math: "\\{I^A, I^B\\}" },
            { label: "Gametos madre O", math: "\\{i, i\\}" },
          ],
          pasos: [
            {
              pre: "Cuadro de Punnett:",
            },
            {
              pre: "  Iᴬ × i = Iᴬi (grupo A) · Iᴮ × i = Iᴮi (grupo B)",
            },
            {
              pre: "Descendencia: 50% tipo A (Iᴬi) y 50% tipo B (Iᴮi).",
            },
            {
              pre: "Ningún hijo será AB ni O: AB requeriría IᴬIᴮ (imposible con gametos de la madre 'ii'); O requeriría ii (el padre no aporta ningún alelo i).",
            },
            {
              pre: "Conceptos ilustrados: codominancia (Iᴬ y Iᴮ se expresan juntos en AB) y recesividad (i solo se expresa en ii = grupo O).",
            },
          ],
        },
      ],
    },
    {
      id: 12,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — Herencia",
          enunciado: "En la primera ley de Mendel (ley de la segregación), ¿qué ocurre con los alelos de un gen durante la formación de gametos?",
          opciones: [
            "Los dos alelos se mezclan y producen un alelo intermedio en el gameto.",
            "Los dos alelos se separan: cada gameto recibe solo uno de los dos alelos.",
            "Solo el alelo dominante pasa al gameto; el recesivo se pierde.",
          ],
          correcta: 1,
          explicacion: "La primera ley de Mendel dice que los dos alelos de cada gen se separan (segregan) durante la meiosis, de modo que cada gameto solo contiene uno. Por eso un padre Aa produce gametos A y a en igual proporción. No se mezclan ni se pierde el recesivo.",
        },
      ],
    },
    {
      id: 13,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 2 — Herencia",
          enunciado: "En el cruce Aa × Aa (donde A = dominante), ¿qué proporción de la descendencia presentará el fenotipo recesivo (aa)?",
          opciones: [
            "1/4 (25%) de la descendencia será aa.",
            "1/2 (50%) de la descendencia será aa.",
            "Ninguno, porque el alelo dominante impide que aparezca el fenotipo recesivo.",
          ],
          correcta: 0,
          explicacion: "El cuadro de Punnett de Aa × Aa da: AA, Aa, Aa, aa — cuatro combinaciones. Solo 1 de 4 = 25% es aa (fenotipo recesivo). La proporción fenotípica es 3:1 (tres con fenotipo dominante, uno con fenotipo recesivo).",
        },
      ],
    },
    {
      id: 14,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 3 — Herencia",
          enunciado: "¿Qué significa que un individuo sea heterocigoto para un gen?",
          opciones: [
            "Tiene dos copias del alelo recesivo (aa).",
            "Tiene dos copias del alelo dominante (AA).",
            "Tiene dos alelos diferentes para ese gen (Aa).",
          ],
          correcta: 2,
          explicacion: "Heterocigoto significa dos alelos distintos para un gen (Aa). Homocigoto dominante es AA (dos alelos dominantes iguales) y homocigoto recesivo es aa (dos alelos recesivos iguales). Un individuo Aa expresa el fenotipo dominante pero porta el alelo recesivo.",
        },
      ],
    },
    {
      id: 15,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 4 — Herencia",
          enunciado: "Dos padres con grupos sanguíneos A y B tienen un hijo con grupo O. ¿Cuáles son los genotipos de los padres?",
          opciones: [
            "Ambos son homocigotos (IᴬIᴬ y IᴮIᴮ).",
            "Ambos son heterocigotos (Iᴬi e Iᴮi).",
            "Uno es Iᴬi y el otro IᴮIᴮ.",
          ],
          correcta: 1,
          explicacion: "Para que el hijo sea O (genotipo ii), debe recibir un alelo i de cada padre. Por lo tanto cada padre debe tener al menos un alelo i: padre A debe ser Iᴬi y madre B debe ser Iᴮi. Si alguno fuera homocigoto (IᴬIᴬ o IᴮIᴮ) no podría aportar el alelo i, y el hijo O sería imposible.",
        },
      ],
    },
    {
      id: 16,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 5 — Herencia",
          enunciado: "Una mujer portadora de hemofilia (XᴴX) se cruza con un hombre sano (XY). ¿Qué probabilidad hay de que un hijo varón padezca hemofilia?",
          opciones: [
            "50% de los varones tendrán hemofilia (XᴴY), porque la madre puede aportar Xᴴ o X.",
            "100% de los varones tendrán hemofilia.",
            "0%, porque la madre solo es portadora y no padece la enfermedad.",
          ],
          correcta: 0,
          explicacion: "La madre XᴴX aporta al 50% de sus gametos el cromosoma Xᴴ y al 50% el X normal. Los varones reciben de ella un X (o Xᴴ) y del padre el Y. Si reciben Xᴴ → son hemofílicos (XᴴY); si reciben X → son sanos (XY). Por tanto, el 50% de los hijos varones tendrán hemofilia.",
        },
      ],
    },
    {
      id: 17,
      tipo: "lienzo",
      etiqueta: "3 / 7 — Evolución",
      titulo: "Evolución biológica: selección natural y evidencias",
      bloques: [
        {
          tipo: "destacado",
          texto: "Charles Darwin propuso la selección natural como el mecanismo de la evolución. Los individuos con variaciones ventajosas para el ambiente sobreviven más y se reproducen más, transmitiendo esas variaciones a sus descendientes. A lo largo de generaciones, la población cambia. La evolución no tiene metas: las adaptaciones son resultado de presiones ambientales pasadas.",
        },
        {
          tipo: "figura",
          clave: "biologia-evolucion",
          titulo: "Selección natural: de la variación a la adaptación",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 1,
          titulo: "Evidencias de la evolución",
          columnas: ["Tipo de evidencia", "Descripción", "Ejemplo"],
          filas: [
            ["Fósiles", "Registro de organismos extintos", "Arqueopteryx (ave-reptil)"],
            [
              "Anatomía comparada",
              "Estructuras homólogas en distintas especies",
              "Ala de murciélago / brazo humano / aleta de delfín",
            ],
            [
              "Embriología",
              "Embriones similares en etapas tempranas",
              "Embriones de vertebrados con arcos branquiales",
            ],
            [
              "Genética molecular",
              "ADN compartido entre especies relacionadas",
              "Humanos y chimpancés: 98.7% del ADN igual",
            ],
          ],
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "A",
          titulo: "Los organismos no evolucionan 'porque lo necesitan'",
          asi_es: "La selección natural actúa sobre variaciones que YA EXISTEN en la población. Un organismo no desarrolla nuevas características porque las necesita; las variaciones son al azar y el ambiente selecciona cuáles permanecen.",
          asi_no: "Pensar que la jirafa alargó el cuello 'porque quiso alcanzar las hojas más altas' (error lamarckiano). En realidad, individuos con cuellos más largos sobrevivieron más y se reprodujeron más.",
        },
      ],
    },
    {
      id: 18,
      tipo: "lienzo",
      etiqueta: "Ejemplo 1 — Evolución",
      titulo: "Mariposas meladas y la Revolución Industrial",
      bloques: [
        {
          tipo: "destacado",
          texto: "Antes de 1850 en Inglaterra, casi todas las mariposas Biston betularia eran claras (camuflaje sobre cortezas con líquenes). Con la industrialización, el hollín oscureció los troncos. En 50 años, la variedad oscura dominó la población. ¿Cómo explica esto la selección natural?",
        },
        {
          tipo: "pasos",
          ancho: 12,
          datos: [
            { label: "Antes (pre-1850)", math: "\\text{Troncos claros} \\to \\text{mariposas claras se camuflan} \\to \\text{mariposas oscuras son comidas}" },
            { label: "Después (post-1850)", math: "\\text{Troncos oscuros} \\to \\text{mariposas oscuras se camuflan} \\to \\text{mariposas claras son comidas}" },
          ],
          pasos: [
            {
              pre: "Variación: la población ya contenía tanto mariposas claras como oscuras (variación genética preexistente).",
            },
            {
              pre: "Presión de selección: los pájaros comen más fácilmente las mariposas visibles (mal camufladas).",
            },
            {
              pre: "Selección diferencial: en troncos oscuros, las mariposas oscuras sobreviven más y dejan más descendencia.",
            },
            {
              pre: "Cambio en la población: en pocas generaciones, el alelo 'color oscuro' aumenta su frecuencia.",
            },
            {
              pre: "Conclusión: el ambiente (hollín industrial) seleccionó la variante oscura que YA EXISTÍA, sin 'crear' una nueva.",
            },
          ],
        },
      ],
    },
    {
      id: 19,
      tipo: "lienzo",
      etiqueta: "Ejemplo 2 — Evolución",
      titulo: "Pinzones de las Galápagos: especiación geográfica",
      bloques: [
        {
          tipo: "destacado",
          texto: "En las islas Galápagos hay 13 especies de pinzones con picos muy distintos (grueso para semillas duras, delgado para insectos, curvo para néctar). Todos descienden de una sola especie que colonizó las islas. ¿Qué proceso ocurrió?",
        },
        {
          tipo: "pasos",
          ancho: 12,
          datos: [
            { label: "Ancestro común", math: "\\text{Una población de pinzones llega a Galápagos desde América del Sur}" },
          ],
          pasos: [
            {
              pre: "Colonización: una sola especie llega a las Galápagos y se dispersa entre islas con diferentes recursos.",
            },
            {
              pre: "Aislamiento geográfico: las poblaciones en cada isla quedan separadas (el mar impide el flujo génico).",
            },
            {
              pre: "Selección diferencial: en cada isla se favorecen distintos tipos de picos según los alimentos disponibles.",
            },
            {
              pre: "Divergencia: en miles de generaciones las poblaciones acumulan diferencias genéticas y morfológicas.",
            },
            {
              pre: "Especiación: las poblaciones se diferencian tanto que ya no pueden reproducirse entre sí → nuevas especies.",
            },
            {
              pre: "Este proceso se llama radiación adaptativa: a partir de un ancestro común surgen múltiples especies adaptadas a nichos distintos.",
            },
          ],
        },
      ],
    },
    {
      id: 20,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — Evolución",
          enunciado: "¿Cuál es el mecanismo principal de la evolución propuesto por Charles Darwin?",
          opciones: [
            "Herencia de caracteres adquiridos: los organismos transmiten a sus hijos lo que aprendieron durante su vida.",
            "Selección natural: los individuos con variaciones ventajosas para el ambiente sobreviven y se reproducen más.",
            "Mutación dirigida: el ambiente causa mutaciones específicas que mejoran al organismo.",
          ],
          correcta: 1,
          explicacion: "La selección natural de Darwin establece: (1) existe variación en la población, (2) parte de esa variación es heredable, (3) hay lucha por la supervivencia, (4) los individuos con variaciones favorables sobreviven y se reproducen más. La herencia de caracteres adquiridos es la teoría lamarckiana, que fue descartada.",
        },
      ],
    },
    {
      id: 21,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 2 — Evolución",
          enunciado: "Las aletas de los delfines, las alas de los murciélagos y los brazos humanos tienen la misma estructura ósea interna (húmero, radio, cúbito, carpos, falanges). Esta evidencia se llama:",
          opciones: [
            "Estructuras análogas: órganos con la misma función pero diferente origen.",
            "Estructuras homólogas: órganos con el mismo origen evolutivo pero diferente función.",
            "Evidencia fósil: registro de formas intermedias entre las especies actuales.",
          ],
          correcta: 1,
          explicacion: "Las estructuras homólogas tienen el mismo origen evolutivo (mismo antepasado) aunque desempeñen funciones distintas (nadar, volar, agarrar). Son evidencia de evolución divergente. Las estructuras análogas (ej. ala de murciélago vs ala de mariposa) tienen la misma función pero distinto origen: evidencia de evolución convergente.",
        },
      ],
    },
    {
      id: 22,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 3 — Evolución",
          enunciado: "Una especie de insecto tiene variaciones de color: verde, café y negro. Si el ambiente es un bosque oscuro y los pájaros los cazan por la vista, ¿qué variación tendrá mayor frecuencia después de muchas generaciones?",
          opciones: [
            "La variación verde, porque es el color natural de los insectos.",
            "La variación negra, porque se camufla mejor en el ambiente oscuro y sus portadores sobreviven más.",
            "Todas por igual, porque los pájaros no distinguen los colores.",
          ],
          correcta: 1,
          explicacion: "En un ambiente oscuro, los insectos negros tienen mayor sobrevivencia porque son más difíciles de detectar por depredadores. Al sobrevivir más y reproducirse más, pasan el alelo de color negro a su descendencia. Con el tiempo, el alelo negro aumenta su frecuencia en la población. Esto es selección natural.",
        },
      ],
    },
    {
      id: 23,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 4 — Evolución",
          enunciado: "¿Cuál es la diferencia entre evolución y adaptación?",
          opciones: [
            "La evolución es el cambio heredable en las frecuencias alélicas de una población a lo largo del tiempo; la adaptación es la característica que mejora la supervivencia en un ambiente particular.",
            "La adaptación ocurre en el individuo durante su vida; la evolución ocurre solo en laboratorio.",
            "Son términos equivalentes que describen el mismo proceso a distinta velocidad.",
          ],
          correcta: 0,
          explicacion: "Evolución: proceso de cambio en la composición genética de una población a lo largo de generaciones. Adaptación: característica heredable que aumenta la aptitud biológica del organismo en un ambiente. Las adaptaciones son el resultado visible de la evolución por selección natural. Un individuo no 'evoluciona'; la población sí.",
        },
      ],
    },
    {
      id: 24,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 5 — Evolución",
          enunciado: "La comparación del ADN muestra que humanos y chimpancés comparten ~98.7% de sus genes. Esto es evidencia de que:",
          opciones: [
            "Los humanos descienden directamente de los chimpancés.",
            "Humanos y chimpancés comparten un ancestro común relativamente reciente.",
            "La identidad del ADN entre especies es solo una coincidencia sin significado evolutivo.",
          ],
          correcta: 1,
          explicacion: "La alta similitud genética indica un ancestro común reciente (~6 millones de años). Los humanos NO descienden de los chimpancés: ambos descienden de un ancestro común que ya no existe. La evidencia molecular es actualmente la más precisa para reconstruir árboles filogenéticos.",
        },
      ],
    },
    {
      id: 25,
      tipo: "lienzo",
      etiqueta: "4 / 7 — Genética aplicada",
      titulo: "Genética aplicada: biotecnología e ingeniería genética",
      bloques: [
        {
          tipo: "destacado",
          texto: "La biotecnología moderna usa conocimientos genéticos para beneficio humano: organismos transgénicos (OGMs), producción de medicamentos mediante bacterias recombinantes, diagnóstico de enfermedades genéticas, y terapias génicas. La ingeniería genética permite insertar, eliminar o modificar genes en un organismo. CRISPR-Cas9 es la herramienta más reciente y precisa.",
        },
        {
          tipo: "figura",
          clave: "biologia-genetica-aplicada",
          titulo: "Aplicaciones de la ingeniería genética",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 1,
          titulo: "Aplicaciones de la biotecnología",
          columnas: ["Aplicación", "Descripción", "Ejemplo"],
          filas: [
            ["OGMs en agricultura", "Resistencia a plagas o herbicidas", "Maíz Bt, soya Roundup Ready"],
            [
              "Medicamentos",
              "Proteínas humanas producidas en bacterias",
              "Insulina recombinante, interferones",
            ],
            [
              "Diagnóstico genético",
              "Detección de mutaciones heredables",
              "Test de BRCA1/2 para cáncer de mama",
            ],
            ["CRISPR-Cas9", "Edición precisa del genoma", "Corrección de enfermedades monogénicas"],
          ],
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "B",
          titulo: "Los OGMs no 'infectan' a organismos no modificados con sus genes",
          asi_es: "Los genes transgénicos no se transmiten por contacto físico o ingestión a otros organismos. Para que un gen pase de planta a planta necesita reproducción sexual o transferencia horizontal específica.",
          asi_no: "Creer que comer maíz transgénico modifica el ADN humano: el ADN se digiere en el intestino como cualquier otro ADN alimenticio.",
        },
      ],
    },
    {
      id: 26,
      tipo: "lienzo",
      etiqueta: "Ejemplo 1 — Genética aplicada",
      titulo: "Producción de insulina humana en E. coli",
      bloques: [
        {
          tipo: "destacado",
          texto: "Antes de 1982 la insulina para diabéticos se extraía del páncreas de cerdos (cara, escasa y con reacciones alérgicas). Hoy se produce en bacterias E. coli con el gen humano de la insulina insertado. ¿Cómo funciona?",
        },
        {
          tipo: "pasos",
          ancho: 12,
          datos: [
            { label: "Gen", math: "\\text{Gen humano de la insulina (cromosoma 11, cadenas A y B)}" },
          ],
          pasos: [
            {
              pre: "1. Se aísla el gen humano que codifica la insulina.",
            },
            {
              pre: "2. Se inserta en un plásmido (ADN circular bacteriano) usando enzimas de restricción y ADN ligasa.",
            },
            {
              pre: "3. El plásmido recombinante se introduce en E. coli (bacteria transformada).",
            },
            {
              pre: "4. La bacteria expresa el gen humano y produce insulina humana idéntica a la natural.",
            },
            {
              pre: "5. Se purifica la insulina y se usa para tratar diabetes tipo 1.",
            },
            {
              pre: "Ventaja: producción masiva, bajo costo, sin reacciones alérgicas (es proteína humana, no de cerdo).",
            },
          ],
        },
      ],
    },
    {
      id: 27,
      tipo: "lienzo",
      etiqueta: "Ejemplo 2 — Genética aplicada",
      titulo: "CRISPR-Cas9: el bisturí molecular del genoma",
      bloques: [
        {
          tipo: "destacado",
          texto: "CRISPR-Cas9 permite editar el ADN de cualquier célula con una precisión sin precedentes. Comprende sus componentes y una aplicación médica.",
        },
        {
          tipo: "pasos",
          ancho: 12,
          datos: [
            { label: "Componentes", math: "\\text{ARN guía (gRNA)} + \\text{proteína Cas9 (endonucleasa)} \\to \\text{corte preciso del ADN}" },
          ],
          pasos: [
            {
              pre: "El ARN guía (gRNA) es una secuencia de ~20 nucleótidos diseñada en el laboratorio para complementarse con el gen que se quiere editar.",
            },
            {
              pre: "La proteína Cas9 es una 'tijera molecular' (endonucleasa): corta las dos hebras del ADN en el lugar exacto donde el gRNA se une.",
            },
            {
              pre: "Una vez cortado el ADN, la célula lo repara: se puede introducir una secuencia nueva (corrección), eliminar el gen (knockout) o activarlo.",
            },
            {
              pre: "Aplicación médica: en 2023 se aprobó el primer tratamiento con CRISPR para anemia de células falciformes y beta-talasemia en EE. UU.",
            },
            {
              pre: "Debate ético: la edición de células germinales (óvulos, esperma, embriones) modifica el genoma heredable y tiene implicaciones para generaciones futuras.",
            },
          ],
        },
      ],
    },
    {
      id: 28,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — Genética aplicada",
          enunciado: "¿Cómo se produce actualmente la insulina para el tratamiento de la diabetes?",
          opciones: [
            "Se extrae del páncreas de cerdos y vacas sacrificados.",
            "Se produce en bacterias E. coli que contienen el gen humano de la insulina insertado en un plásmido.",
            "Se sintetiza químicamente aminoácido por aminoácido en laboratorio.",
          ],
          correcta: 1,
          explicacion: "Desde 1982 se usa insulina recombinante: el gen humano de la insulina se inserta en un plásmido de E. coli. Las bacterias transformadas expresan el gen y producen insulina humana idéntica. Es más barata, de mayor disponibilidad y no genera las reacciones alérgicas de la insulina porcina.",
        },
      ],
    },
    {
      id: 29,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 2 — Genética aplicada",
          enunciado: "Un organismo genéticamente modificado (OGM) es aquel que:",
          opciones: [
            "Ha mutado naturalmente por exposición a radiación solar.",
            "Tiene en su genoma uno o más genes de otro organismo (transgén) insertados por técnicas de ingeniería genética.",
            "Ha sido seleccionado artificialmente durante siglos por los humanos para potenciar caracteres deseables.",
          ],
          correcta: 1,
          explicacion: "Un OGM lleva genes de otra especie introducidos deliberadamente mediante biotecnología. La selección artificial (opción C) es diferente: solo selecciona individuos con características deseables dentro de la misma especie, sin transferir genes. Las mutaciones naturales (opción A) no implican transferencia de genes foráneos.",
        },
      ],
    },
    {
      id: 30,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 3 — Genética aplicada",
          enunciado: "¿Qué función cumple el ARN guía (gRNA) en el sistema CRISPR-Cas9?",
          opciones: [
            "Corta el ADN en una secuencia específica.",
            "Dirige a la proteína Cas9 hacia la secuencia exacta del genoma que se quiere editar.",
            "Repara el ADN después de que la Cas9 lo ha cortado.",
          ],
          correcta: 1,
          explicacion: "El ARN guía (gRNA) es una secuencia de ~20 nucleótidos que se complementa específicamente con el sitio del genoma que se desea editar, llevando allí a la proteína Cas9 (la 'tijera'). La Cas9 hace el corte; el mecanismo de reparación celular lo restaura (con o sin inserción de nueva secuencia).",
        },
      ],
    },
    {
      id: 31,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 4 — Genética aplicada",
          enunciado: "¿Por qué los diagnósticos genéticos (como la detección de mutaciones en BRCA1) tienen importancia preventiva?",
          opciones: [
            "Porque curan automáticamente la enfermedad al detectarla.",
            "Porque permiten tomar decisiones preventivas (mayor vigilancia, cirugías profilácticas) antes de que la enfermedad se desarrolle.",
            "Porque solo indican que la persona ya tiene la enfermedad diagnosticada.",
          ],
          correcta: 1,
          explicacion: "Los diagnósticos genéticos identifican mutaciones que elevan el riesgo de desarrollar cierta enfermedad, pero no son diagnósticos de enfermedad actual. Con esa información, la persona puede someterse a revisiones más frecuentes, tratamientos preventivos o decisiones quirúrgicas (como mastectomía profiláctica en alto riesgo de cáncer de mama).",
        },
      ],
    },
    {
      id: 32,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 5 — Genética aplicada",
          enunciado: "La edición del genoma en células germinales (embriones, óvulos o esperma) con CRISPR plantea debates éticos principalmente porque:",
          opciones: [
            "Genera organismos transgénicos que pueden contaminar el ambiente.",
            "Los cambios se heredarán a todas las generaciones futuras, sin posibilidad de revertirlos fácilmente.",
            "El procedimiento destruye las células madre del embrión.",
          ],
          correcta: 1,
          explicacion: "Editar células germinales modifica el ADN hereditario: todos los descendientes del individuo editado llevarán el cambio. A diferencia de las terapias somáticas (que solo afectan al individuo tratado), las modificaciones germinales tienen alcance intergeneracional irreversible, lo que plantea serias preguntas éticas sobre el consentimiento y las consecuencias no previstas.",
        },
      ],
    },
    {
      id: 33,
      tipo: "lienzo",
      etiqueta: "5 / 7 — Biodiversidad",
      titulo: "Biodiversidad en México: riqueza y amenazas",
      bloques: [
        {
          tipo: "destacado",
          texto: "México es uno de los 17 países megadiversos del mundo, concentrando ~10% de todas las especies conocidas del planeta. Es centro de origen de cultivos como maíz, jitomate, aguacate y vainilla. La biodiversidad se mide en tres niveles: diversidad genética, de especies y de ecosistemas. Entre las principales amenazas están la pérdida de hábitat, la sobreexplotación y las especies invasoras.",
        },
        {
          tipo: "figura",
          clave: "biologia-biodiversidad",
          titulo: "México megadiverso: ecosistemas y especies representativas",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 1,
          titulo: "México en cifras de biodiversidad",
          columnas: ["Grupo", "Posición mundial", "Número aprox."],
          filas: [
            ["Reptiles", "1° en diversidad", "> 800 especies"],
            ["Plantas", "4° en diversidad", "> 26,000 especies"],
            ["Mamíferos", "3° en diversidad", "> 500 especies"],
            ["Anfibios", "5° en diversidad", "> 370 especies"],
            ["Endémicas", "~50% en algunas ramas", "Solo existen en México"],
          ],
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "B",
          titulo: "Biodiversidad NO es solo el número de especies",
          asi_es: "La biodiversidad incluye diversidad genética (variación dentro de una especie), de especies (número de especies) y de ecosistemas (variedad de hábitats). Un monocultivo con miles de individuos de una sola especie tiene baja biodiversidad.",
          asi_no: "Reducir biodiversidad a 'cuántas especies hay' ignora la variación genética y la diversidad de ecosistemas, igualmente importantes para la resiliencia de los sistemas naturales.",
        },
      ],
    },
    {
      id: 34,
      tipo: "lienzo",
      etiqueta: "Ejemplo 1 — Biodiversidad",
      titulo: "¿Por qué México es megadiverso? Factores que explican su riqueza",
      bloques: [
        {
          tipo: "destacado",
          texto: "México ocupa el 1.4% del territorio mundial pero alberga ~10% de las especies del planeta. Varios factores geográficos y climáticos explican esta riqueza.",
        },
        {
          tipo: "pasos",
          ancho: 12,
          datos: [
            { label: "Superficie", math: "\\sim 1.96\\text{ millones km}^2 \\;(\\text{puesto 13° en extensión mundial})" },
          ],
          pasos: [
            {
              pre: "Factor 1 — Posición geográfica: México está en la convergencia de dos regiones biogeográficas (Neártica y Neotropical), combinando faunas de América del Norte y Sudamérica.",
            },
            {
              pre: "Factor 2 — Diversidad de relieves y climas: desde desiertos de Baja California hasta selvas de Chiapas, pasando por bosques de alta montaña, manglares y arrecifes. Más hábitats = más especies.",
            },
            {
              pre: "Factor 3 — Centro de origen de cultivos: maíz, jitomate, cacao, chiles, aguacate, vainilla — domesticados por civilizaciones mesoamericanas.",
            },
            {
              pre: "Factor 4 — Alta tasa de endemismo: ~50% de los anfibios y reptiles son endémicos (solo existen en México), producto del aislamiento geográfico histórico.",
            },
          ],
        },
      ],
    },
    {
      id: 35,
      tipo: "lienzo",
      etiqueta: "Ejemplo 2 — Biodiversidad",
      titulo: "La vaquita marina: la especie más amenazada del mundo",
      bloques: [
        {
          tipo: "destacado",
          texto: "La vaquita marina (Phocoena sinus) es una marsopa endémica del Alto Golfo de California. Con menos de 10 individuos estimados en 2023, es el mamífero marino más amenazado del planeta. Analiza las causas y posibles soluciones.",
        },
        {
          tipo: "pasos",
          ancho: 12,
          datos: [
            { label: "Población", math: "\\text{~600 en 1997} \\to \\text{~30 en 2016} \\to <10\\text{ en 2023}" },
          ],
          pasos: [
            {
              pre: "Causa principal: captura incidental (bycatch) en redes agalleras usadas para pescar la totoaba (Totoaba macdonaldi), pez también en peligro de extinción.",
            },
            {
              pre: "Factor agravante: la totoaba se pesca ilegalmente para su vejiga natatoria, muy valorada en el mercado negro asiático (~$10,000 USD/kg).",
            },
            {
              pre: "Medidas tomadas: veda de redes agalleras en la zona, patrullaje naval, rescate en cautiverio (con baja supervivencia).",
            },
            {
              pre: "Lección de conservación: cuando la población cae tan bajo, la extinción se vuelve casi inevitable incluso con protección total (depresión por endogamia, accidentes).",
            },
            {
              pre: "Importancia del endemismo: al ser exclusiva de México, su extinción sería irreversible a nivel global.",
            },
          ],
        },
      ],
    },
    {
      id: 36,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — Biodiversidad",
          enunciado: "México es considerado un país megadiverso porque:",
          opciones: [
            "Tiene el mayor territorio de América Latina.",
            "Concentra aproximadamente el 10% de todas las especies conocidas del planeta en solo el 1.4% del territorio mundial.",
            "Es el único país con ecosistemas tanto tropicales como templados en el planeta.",
          ],
          correcta: 1,
          explicacion: "México es megadiverso por su alta densidad de especies: concentra ~10% de la biodiversidad mundial en solo el 1.4% de la superficie terrestre. Hay 17 países con este título (incluye Brasil, Colombia, Indonesia). No es el de mayor territorio en LA, y otros países también tienen ecosistemas mixtos.",
        },
      ],
    },
    {
      id: 37,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 2 — Biodiversidad",
          enunciado: "¿Qué significa que una especie sea endémica de México?",
          opciones: [
            "Que está en peligro de extinción y solo queda en México.",
            "Que se distribuye de forma natural únicamente en México y no existe en ningún otro país.",
            "Que fue importada de otro país y se adaptó para vivir solo en México.",
          ],
          correcta: 1,
          explicacion: "Endémica significa distribución geográfica restringida: la especie existe de manera natural SOLO en ese territorio. Una especie puede ser endémica y abundante (no necesariamente en peligro), o puede ser endémica y amenazada. La vaquita marina es endémica del Alto Golfo de California, pero el ajolote es endémico de México sin ser una especie tan abundante.",
        },
      ],
    },
    {
      id: 38,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 3 — Biodiversidad",
          enunciado: "¿Cuál es la principal amenaza para la biodiversidad a nivel global?",
          opciones: [
            "Las especies invasoras que desplazan a las nativas.",
            "La pérdida y fragmentación del hábitat causada por la deforestación y el cambio de uso de suelo.",
            "La cacería furtiva de especies carismáticas como el tigre y el elefante.",
          ],
          correcta: 1,
          explicacion: "La pérdida y fragmentación del hábitat es la principal causa de extinción de especies a nivel global (estimada en ~80% de las extinciones). Convierte grandes extensiones de ecosistemas en parches aislados, reduciendo las poblaciones, aumentando la consanguinidad y eliminando los corredores de migración.",
        },
      ],
    },
    {
      id: 39,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 4 — Biodiversidad",
          enunciado: "¿Cuál es el nivel de biodiversidad que se refiere a la variación de genes entre individuos de una misma especie?",
          opciones: ["Diversidad de ecosistemas.", "Diversidad de especies.", "Diversidad genética."],
          correcta: 2,
          explicacion: "La diversidad genética mide la variación alélica dentro de una especie o población. Una baja diversidad genética hace a las poblaciones vulnerables a enfermedades y cambios ambientales (ej. el 'cuello de botella' genético en el guepardo). La diversidad de especies cuenta cuántas especies existen; la de ecosistemas, cuántos tipos de hábitat hay.",
        },
      ],
    },
    {
      id: 40,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 5 — Biodiversidad",
          enunciado: "El ajolote (Ambystoma mexicanum) es endémico del lago Xochimilco. Si ese hábitat desaparece por contaminación y urbanización, ¿cuál sería la consecuencia?",
          opciones: [
            "El ajolote migraría a otros lagos cercanos para adaptarse.",
            "La especie se extinguiría globalmente, porque no existe en ningún otro lugar del mundo.",
            "La especie sobreviviría en cautiverio en laboratorios de investigación de forma indefinida.",
          ],
          correcta: 1,
          explicacion: "Al ser endémico de un solo lugar, la destrucción de ese hábitat implica extinción global de la especie. Los individuos en cautiverio pueden sobrevivir por un tiempo, pero sin un hábitat natural la especie pierde su función ecológica y eventualmente la población cautiva se agota genéticamente.",
        },
      ],
    },
    {
      id: 41,
      tipo: "lienzo",
      etiqueta: "6 / 7 — Adaptación",
      titulo: "Adaptación, nutrición autótrofa y heterótrofa",
      bloques: [
        {
          tipo: "destacado",
          texto: "Las adaptaciones son características heredables que aumentan la aptitud de un organismo en su ambiente. Pueden ser morfológicas (forma), fisiológicas (procesos internos) o conductuales (comportamientos). La nutrición autótrofa (fotosíntesis) produce materia orgánica desde inorgánica; la heterótrofa la consume. Estos dos tipos de nutrición mueven la energía y la materia por los ecosistemas.",
        },
        {
          tipo: "figura",
          clave: "biologia-adaptacion",
          titulo: "Adaptaciones de organismos a su ambiente",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 1,
          titulo: "Tipos de adaptación con ejemplos",
          columnas: ["Tipo", "Descripción", "Ejemplo"],
          filas: [
            [
              "Morfológica",
              "Cambios en la forma o estructura corporal",
              "Piel gruesa del rinoceronte, camuflaje del pulpo",
            ],
            [
              "Fisiológica",
              "Cambios en procesos bioquímicos o metabólicos",
              "Joroba del camello (grasa), hibernación del oso",
            ],
            ["Conductual", "Cambios en el comportamiento", "Migración de aves, comportamiento nocturno"],
          ],
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "A",
          titulo: "Las plantas NO 'fabrican' energía — la convierten",
          asi_es: "La fotosíntesis convierte energía lumínica en energía química almacenada en glucosa. La energía se conserva (primer principio de termodinámica): no se crea ni se destruye.",
          asi_no: "Decir que las plantas 'producen energía': en realidad la capturan de la luz solar y la transforman en glucosa. Los herbívoros obtienen esa energía al comer las plantas.",
        },
      ],
    },
    {
      id: 42,
      tipo: "lienzo",
      etiqueta: "Ejemplo 1 — Adaptación",
      titulo: "El camello: tres tipos de adaptaciones al desierto",
      bloques: [
        {
          tipo: "destacado",
          texto: "El camello (Camelus dromedarius) vive en desiertos con temperaturas extremas (hasta 50°C), escasez de agua y arena. Sus adaptaciones son un clásico ejemplo de los tres tipos: morfológica, fisiológica y conductual.",
        },
        {
          tipo: "pasos",
          ancho: 12,
          datos: [
            { label: "Ambiente", math: "\\text{Temperatura > 40°C} \\cdot \\text{Escasez de agua y alimento} \\cdot \\text{Suelo arenoso}" },
          ],
          pasos: [
            {
              pre: "Adaptación fisiológica — Joroba: NO contiene agua (mito). Contiene grasa que se metaboliza cuando no hay alimento; al oxidarse produce agua metabólica.",
            },
            {
              pre: "Adaptación morfológica — Fosas nasales: estructuras que recapturan la humedad del aire exhalado antes de salir, reduciendo la pérdida de agua.",
            },
            {
              pre: "Adaptación morfológica — Patas anchas: actúan como 'raquetas' sobre la arena, distribuyendo el peso y evitando hundirse.",
            },
            {
              pre: "Adaptación fisiológica — Tolerancia a la deshidratación: puede perder hasta el 30% de su masa corporal en agua (un humano muere al perder el 10%).",
            },
            {
              pre: "Adaptación conductual — Minimiza actividad durante el calor del día y pasta al amanecer o al atardecer.",
            },
          ],
        },
      ],
    },
    {
      id: 43,
      tipo: "lienzo",
      etiqueta: "Ejemplo 2 — Adaptación",
      titulo: "Fotosíntesis: la base de casi toda la vida",
      bloques: [
        {
          tipo: "destacado",
          texto: "La fotosíntesis convierte la energía solar en glucosa, produciendo el oxígeno que respiramos. Analiza la ecuación completa y comprende cada componente.",
        },
        {
          tipo: "pasos",
          ancho: 12,
          datos: [
            { label: "Ecuación global", math: "6\\,\\text{CO}_2 + 6\\,\\text{H}_2\\text{O} \\xrightarrow{\\text{luz}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\,\\text{O}_2" },
          ],
          pasos: [
            {
              pre: "Reactivos: dióxido de carbono del aire + agua del suelo + energía luminosa (clorofila absorbe principalmente luz roja y azul).",
            },
            {
              pre: "Fase luminosa (tilacoides): la luz divide el H₂O (fotólisis) liberando O₂ y produciendo ATP y NADPH.",
            },
            {
              pre: "Fase oscura/Calvin (estroma): el ATP y NADPH se usan para convertir CO₂ en glucosa (C₆H₁₂O₆).",
            },
            {
              pre: "Resultado: 1 mol de CO₂ convertido requiere ~3 mol de ATP y 2 mol de NADPH.",
            },
            {
              pre: "Importancia: la glucosa producida es el punto de entrada de la energía solar a todas las cadenas tróficas. El O₂ liberado es el que respiramos.",
            },
          ],
        },
      ],
    },
    {
      id: 44,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — Adaptación",
          enunciado: "La joroba del camello es una adaptación que sirve principalmente para:",
          opciones: [
            "Almacenar agua para períodos de escasez en el desierto.",
            "Almacenar grasa que puede metabolizarse para obtener energía y agua metabólica.",
            "Regular la temperatura corporal al actuar como aleta disipadora de calor.",
          ],
          correcta: 1,
          explicacion: "La joroba contiene tejido adiposo (grasa), no agua. Al metabolizarse, la grasa produce energía (ATP) y agua metabólica como subproducto (la oxidación de lípidos libera H₂O). Esto permite al camello sobrevivir semanas sin comer ni beber. Este es un ejemplo de adaptación fisiológica.",
        },
      ],
    },
    {
      id: 45,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 2 — Adaptación",
          enunciado: "¿Cuál es la fuente de energía que utilizan las plantas en la fotosíntesis?",
          opciones: [
            "La energía química almacenada en el suelo.",
            "La energía luminosa del sol, captada por la clorofila.",
            "La energía térmica del ambiente.",
          ],
          correcta: 1,
          explicacion: "La fotosíntesis convierte energía luminosa en energía química (glucosa). La clorofila (pigmento verde en los cloroplastos) absorbe principalmente luz roja y azul del espectro solar. El suelo aporta agua y minerales, pero no energía; la energía térmica no puede usarse para sintetizar glucosa.",
        },
      ],
    },
    {
      id: 46,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 3 — Adaptación",
          enunciado: "Las aves migratorias viajan miles de kilómetros estacionalmente para reproducirse o buscar alimento. ¿Qué tipo de adaptación representa la migración?",
          opciones: [
            "Adaptación morfológica: cambio en la forma del cuerpo de las aves.",
            "Adaptación conductual: un comportamiento instintivo que aumenta la supervivencia y reproducción.",
            "Adaptación fisiológica: un cambio en el metabolismo de las aves durante el vuelo.",
          ],
          correcta: 1,
          explicacion: "La migración es una adaptación conductual: un comportamiento (instintivo, codificado genéticamente) que permite a las aves aprovechar recursos estacionales y condiciones favorables para la reproducción. No es morfológica (no cambia la forma) ni exclusivamente fisiológica (aunque el metabolismo también se adapta, el comportamiento de migrar es la adaptación primaria).",
        },
      ],
    },
    {
      id: 47,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 4 — Adaptación",
          enunciado: "En la ecuación de la fotosíntesis, ¿de dónde proviene el oxígeno (O₂) que se libera como subproducto?",
          opciones: [
            "Del CO₂ que absorbe la planta del aire.",
            "Del H₂O que la planta toma del suelo, por un proceso de fotólisis.",
            "De una reacción directa entre el CO₂ y la clorofila.",
          ],
          correcta: 1,
          explicacion: "En la fase luminosa de la fotosíntesis, la energía solar rompe moléculas de agua (fotólisis del agua: 2H₂O → 4H⁺ + 4e⁻ + O₂). El O₂ liberado al ambiente proviene del agua, no del CO₂. Los átomos de carbono del CO₂ se incorporan a la glucosa.",
        },
      ],
    },
    {
      id: 48,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 5 — Adaptación",
          enunciado: "Un organismo heterótrofo obtiene su energía:",
          opciones: [
            "Convirtiendo energía lumínica en energía química mediante pigmentos.",
            "Consumiendo materia orgánica de otros organismos y oxidándola para obtener ATP.",
            "Fijando CO₂ del aire directamente en compuestos orgánicos.",
          ],
          correcta: 1,
          explicacion: "Los heterótrofos (animales, hongos, bacterias heterótrofas) obtienen energía consumiendo materia orgánica (plantas, otros animales) y oxidándola mediante la respiración celular. Los autótrofos (plantas, algas) fijan CO₂ con energía lumínica (fotosíntesis) o química (quimiosíntesis).",
        },
      ],
    },
    {
      id: 49,
      tipo: "lienzo",
      etiqueta: "7 / 7 — Ecosistemas",
      titulo: "Cadena alimentaria y flujo de energía en ecosistemas",
      bloques: [
        {
          tipo: "destacado",
          texto: "La energía fluye en una sola dirección en los ecosistemas: del sol → productores → consumidores → descomponedores. Solo se transfiere ~10% de la energía de un nivel trófico al siguiente (regla del 10%): el 90% se pierde como calor. Por eso las pirámides de energía se estrechan hacia los depredadores superiores.",
        },
        {
          tipo: "figura",
          clave: "biologia-cadena-trofica",
          titulo: "Pirámide trófica y flujo de energía",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 1,
          titulo: "Niveles tróficos",
          columnas: ["Nivel", "Organismo", "Ejemplo en bosque"],
          filas: [
            ["Productores", "Autótrofos (fotosíntesis)", "Árboles, hierbas, algas"],
            ["Consumidores 1°", "Herbívoros", "Conejo, saltamontes, ciervo"],
            ["Consumidores 2°", "Carnívoros que comen herbívoros", "Serpiente, sapo, zorro"],
            ["Consumidores 3°", "Carnívoros que comen carnívoros", "Águila, jaguar, orca"],
            ["Descomponedores", "Degradan materia muerta", "Hongos, bacterias, lombrices"],
          ],
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "B",
          titulo: "Los descomponedores NO son el nivel trófico superior",
          asi_es: "Los descomponedores (hongos, bacterias) procesan la materia orgánica muerta de TODOS los niveles. No están 'al final' de la cadena: participan en paralelo reciclando nutrientes al suelo.",
          asi_no: "Colocar a los descomponedores en el último eslabón de la cadena como si fueran el depredador cimero: su función es reciclar, no depredar, y actúan sobre todos los niveles.",
        },
      ],
    },
    {
      id: 50,
      tipo: "lienzo",
      etiqueta: "Ejemplo 1 — Cadena trófica",
      titulo: "La regla del 10%: ¿por qué hay pocos depredadores?",
      bloques: [
        {
          tipo: "destacado",
          texto: "En una pradera, los productores (pastos) capturan 10,000 kcal de energía solar. Calcula cuánta energía llega a cada nivel trófico y explica por qué la cadena no puede ser muy larga.",
        },
        {
          tipo: "pasos",
          ancho: 12,
          datos: [
            { label: "Energía productores", math: "10{,}000\\,\\text{kcal}" },
            { label: "Transferencia", math: "10\\%\\text{ por nivel}" },
          ],
          pasos: [
            {
              pre: "Productores (pastos): ",
              math: "10{,}000\\,\\text{kcal}",
            },
            {
              pre: "Consumidores 1° (vacas, insectos herbívoros): ",
              math: "10{,}000 \\times 0.10 = 1{,}000\\,\\text{kcal}",
            },
            {
              pre: "Consumidores 2° (serpientes, ranas): ",
              math: "1{,}000 \\times 0.10 = 100\\,\\text{kcal}",
            },
            {
              pre: "Consumidores 3° (águila, zorro): ",
              math: "100 \\times 0.10 = 10\\,\\text{kcal}",
            },
            {
              pre: "Consumidores 4°: ",
              math: "10 \\times 0.10 = 1\\,\\text{kcal} \\quad (\\text{apenas sostenible})",
            },
            {
              pre: "Conclusión: a partir de 4-5 niveles la energía disponible es tan pequeña que no puede sostener una población viable. Por eso los depredadores cimeros son escasos y las cadenas generalmente tienen 3-5 eslabones.",
            },
          ],
        },
      ],
    },
    {
      id: 51,
      tipo: "lienzo",
      etiqueta: "Ejemplo 2 — Cadena trófica",
      titulo: "Cadena alimentaria de la selva maya",
      bloques: [
        {
          tipo: "destacado",
          texto: "Construye y analiza una cadena alimentaria típica de la selva de Yucatán, identificando el nivel trófico y el rol ecológico de cada organismo.",
        },
        {
          tipo: "pasos",
          ancho: 12,
          datos: [
            { label: "Cadena", math: "\\text{Hoja} \\to \\text{Saltamontes} \\to \\text{Tucán} \\to \\text{Jaguar}" },
          ],
          pasos: [
            {
              pre: "Hoja (árbol de ramón o chico zapote): Productor — realiza fotosíntesis, captura energía solar.",
            },
            {
              pre: "Saltamontes: Consumidor 1° (herbívoro) — come hojas, recibe ~10% de la energía del productor.",
            },
            {
              pre: "Tucán: Consumidor 2° (insectívoro) — come saltamontes, recibe ~1% de la energía del productor.",
            },
            {
              pre: "Jaguar: Consumidor 3° (carnívoro cimero) — come aves y otros animales, recibe ~0.1% de la energía original.",
            },
            {
              pre: "Si el jaguar desaparece (p. ej. por caza furtiva), la población de aves puede crecer en exceso, reducir los insectos y desequilibrar la vegetación. Esto se llama cascada trófica.",
            },
            {
              pre: "Descomponedores (hongos y bacterias) reciclan nutrientes de los cadáveres de todos los niveles al suelo, cerrando el ciclo de la materia.",
            },
          ],
        },
      ],
    },
    {
      id: 52,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — Cadena trófica",
          enunciado: "Según la regla del 10%, si los productores de un ecosistema acumulan 100,000 kcal, ¿cuánta energía llegará a los consumidores de segundo orden?",
          opciones: [
            "100,000 kcal (la energía no se pierde entre niveles).",
            "10,000 kcal (10% llega a 1° consumidores: 100,000 × 0.10).",
            "1,000 kcal (10% de 10% = 1% de los productores: 100,000 × 0.01).",
          ],
          correcta: 2,
          explicacion: "De productores a consumidores 1°: 100,000 × 0.10 = 10,000 kcal. De consumidores 1° a consumidores 2°: 10,000 × 0.10 = 1,000 kcal. El 90% de la energía se pierde como calor en la respiración y actividad metabólica de cada nivel.",
        },
      ],
    },
    {
      id: 53,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 2 — Cadena trófica",
          enunciado: "¿En qué dirección fluye la energía en una cadena alimentaria?",
          opciones: [
            "De los descomponedores hacia los productores, en un ciclo continuo.",
            "Del sol hacia los productores y de ahí hacia los consumidores de orden creciente.",
            "De los depredadores superiores hacia los productores cuando mueren.",
          ],
          correcta: 1,
          explicacion: "La energía fluye unidireccionalmente: sol → productores (fotosíntesis) → consumidores 1° → consumidores 2° → … El flujo de energía NO es cíclico: cada nivel pierde ~90% como calor. Los nutrientes (carbono, nitrógeno) SÍ ciclan gracias a los descomponedores, pero la energía no.",
        },
      ],
    },
    {
      id: 54,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 3 — Cadena trófica",
          enunciado: "¿Cuál es el rol de los descomponedores en un ecosistema?",
          opciones: [
            "Capturar energía solar para reiniciar la cadena alimentaria.",
            "Descomponer la materia orgánica muerta liberando nutrientes inorgánicos que regresan al suelo.",
            "Depredador cimero que controla las poblaciones de todos los niveles tróficos.",
          ],
          correcta: 1,
          explicacion: "Los descomponedores (hongos, bacterias) degradan la materia orgánica muerta de cualquier nivel trófico en compuestos inorgánicos (CO₂, agua, nitratos, fosfatos) que regresan al suelo y el aire, disponibles para los productores. Sin descomponedores, los nutrientes quedarían 'atrapados' en cadáveres.",
        },
      ],
    },
    {
      id: 55,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 4 — Cadena trófica",
          enunciado: "Si se eliminan los lobos de un ecosistema, la población de ciervos crece desmesuradamente. Los ciervos sobrepastan la vegetación, que se reduce, afectando a otros herbívoros y aves. ¿Cómo se llama este fenómeno?",
          opciones: [
            "Deriva genética: cambio aleatorio en la frecuencia de alelos.",
            "Cascada trófica: el impacto de eliminar un nivel superior se propaga a todos los niveles inferiores.",
            "Eutrofización: exceso de nutrientes que colapsa el ecosistema.",
          ],
          correcta: 1,
          explicacion: "Una cascada trófica ocurre cuando la alteración de un nivel trófico (depredador cimero) desencadena efectos en cascada hacia niveles inferiores. El ejemplo clásico es la reintroducción de lobos en Yellowstone (EE. UU.): al controlar los ciervos, los ríos y la vegetación se recuperaron. La deriva genética es un fenómeno evolutivo; la eutrofización es una contaminación acuática.",
        },
      ],
    },
    {
      id: 56,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 5 — Cadena trófica",
          enunciado: "¿Por qué los contaminantes como el mercurio o los PCBs se acumulan más en los depredadores cimeros que en los productores?",
          opciones: [
            "Porque los depredadores cimeros producen más contaminantes en su metabolismo.",
            "Por biomagnificación: los contaminantes no se metabolizan y se concentran en cada nivel trófico superior.",
            "Porque los productores tienen mecanismos especiales para eliminar los contaminantes.",
          ],
          correcta: 1,
          explicacion: "La biomagnificación ocurre porque los contaminantes persistentes (mercurio, PCBs, DDT) se acumulan en los tejidos grasos y no se eliminan. Cada depredador consume muchos organismos del nivel inferior, concentrando todos sus contaminantes. Un depredador cimero (atún, águila) puede acumular miles de veces la concentración del productor basal.",
        },
      ],
    },
    {
      id: 57,
      tipo: "lienzo",
      etiqueta: "Conceptos clave para el EXANI-I",
      titulo: "Resumen — Biología",
      bloques: [
        {
          tipo: "lista",
          items: [
            {
              titulo: "La célula",
              texto: "Procariota: sin núcleo (bacterias) · Eucariota: núcleo verdadero (animales, plantas, hongos) · Mitocondria = ATP · Cloroplasto = fotosíntesis",
            },
            {
              titulo: "Herencia genética",
              texto: "Alelo dominante/recesivo · Cuadro de Punnett · Razón 3:1 en Aa×Aa · Codominancia (ABO) · Herencia ligada al sexo (hemofilia)",
            },
            {
              titulo: "Evolución",
              texto: "Selección natural: variación → presión ambiental → cambio en frecuencias alélicas · Evidencias: fósiles, anatomía homóloga, ADN · No es dirigida",
            },
            {
              titulo: "Genética aplicada",
              texto: "Insulina recombinante (E. coli + gen humano) · CRISPR-Cas9 (gRNA + Cas9) · OGMs · Dilemas éticos de la edición germinal",
            },
            {
              titulo: "Biodiversidad",
              texto: "México: ~10% de especies en 1.4% del territorio · Endémica = solo en México · 3 niveles: genética, de especies, de ecosistemas",
            },
            {
              titulo: "Adaptación",
              texto: "Morfológica (forma) · Fisiológica (metabolismo) · Conductual (comportamiento) · Fotosíntesis: 6CO₂ + 6H₂O + luz → C₆H₁₂O₆ + 6O₂",
            },
            {
              titulo: "Cadenas tróficas",
              texto: "Regla del 10% · Productores → C1° → C2° → C3° → descomponedores · Biomagnificación · Cascada trófica al eliminar depredador cimero",
            },
          ],
        },
      ],
    },
  ],
};
