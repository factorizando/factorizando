// Datos de la presentación: Bioquímica y Metabolismo (Biología · UNAM · Área 1)
// Subtemas: Biomoléculas · Enzimas · Metabolismo y ATP · Respiración y fermentación · Fotosíntesis → Resumen.

export const PRESENTACION = {
  id: "biologia-bioquimica",
  titulo: "Bioquímica y Metabolismo",
  materia: "Biología",
  subtema: "Composición y energía de la vida",
  slides: [

    // ── PORTADA ───────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Bioquímica y Metabolismo",
      subtitulo: "Biomoléculas · Enzimas · ATP · Respiración celular · Fermentación · Fotosíntesis",
      etiqueta: "Biología · UNAM",
      svgDiagram: "bq-portada",
    },

    // ══ SUBTEMA 1 · BIOELEMENTOS Y BIOMOLÉCULAS ═══════════════════════════════
    {
      id: "bioelementos",
      tipo: "concepto",
      titulo: "Bioelementos y biomoléculas",
      etiqueta: "De qué está hecha la vida",
      formula: "C \\cdot H \\cdot O \\cdot N \\cdot P \\cdot S",
      svgDiagram: "bq-biomoleculas",
      items: [
        { math: "\\text{Carbohidratos}", texto: "energía rápida y estructura. Ej.: glucosa, almidón, celulosa" },
        { math: "\\text{Lípidos}", texto: "reserva de energía, membranas y aislamiento. Ej.: grasas, fosfolípidos" },
        { math: "\\text{Proteínas}", texto: "estructura, transporte, defensa y enzimas. Hechas de aminoácidos" },
        { math: "\\text{Ácidos nucleicos}", texto: "ADN y ARN: guardan y transmiten la información genética" }
      ],
      nota: "Los bioelementos primarios (C, H, O, N, P, S) forman casi toda la materia viva. El carbono es la base por su capacidad de formar cadenas. El agua es la molécula más abundante y el medio donde ocurren las reacciones."
    },

    {
      id: "biomoleculas-detalle",
      tipo: "criterio_detalle",
      titulo: "Las cuatro biomoléculas",
      etiqueta: "Monómero → polímero",
      svgDiagram: "bq-biomoleculas",
      enunciado: "Las biomoléculas orgánicas se construyen uniendo unidades pequeñas (monómeros) en cadenas grandes (polímeros): los carbohidratos se forman de monosacáridos; las proteínas, de aminoácidos; los ácidos nucleicos, de nucleótidos. Los lípidos no son polímeros verdaderos.",
      math: "\\text{aminoácidos} \\to \\text{proteína}",
      por_que: "Reconocer el monómero permite identificar la biomolécula: si hablan de aminoácidos es una proteína; de nucleótidos, un ácido nucleico; de glucosa o monosacáridos, un carbohidrato. Las grasas son ésteres de glicerol y ácidos grasos.",
      math_razon: "\\text{nucleótidos} \\to \\text{ADN / ARN}"
    },

    // Reactivos · Biomoléculas (4)
    {
      id: "bm1",
      tipo: "ejercicio",
      etiqueta: "Bioquímica · Biomoléculas · Reactivo 1 / 4",
      pregunta: "Las proteínas son polímeros formados por la unión de muchas moléculas de:",
      opciones: ["Aminoácidos", "Monosacáridos", "Ácidos grasos", "Nucleótidos"],
      correcta: 0,
      explicacion: "Las proteínas son cadenas de aminoácidos unidos por enlaces peptídicos. Existen 20 aminoácidos distintos cuya secuencia determina la proteína.",
      pasos: [
        { pre: "Monómero de proteína: ", math: "\\text{aminoácido}" }
      ]
    },

    {
      id: "bm2",
      tipo: "ejercicio",
      etiqueta: "Bioquímica · Biomoléculas · Reactivo 2 / 4",
      pregunta: "¿Cuál de las siguientes biomoléculas es la principal fuente de energía rápida para la célula?",
      opciones: ["Los carbohidratos (glucosa)", "Los ácidos nucleicos", "Las proteínas estructurales", "El colesterol"],
      correcta: 0,
      explicacion: "Los carbohidratos, en especial la glucosa, son la fuente de energía de uso inmediato. Los lípidos almacenan energía a largo plazo.",
      pasos: [
        { pre: "Energía rápida: ", math: "\\text{glucosa (carbohidrato)}" }
      ]
    },

    {
      id: "bm3",
      tipo: "ejercicio",
      etiqueta: "Bioquímica · Biomoléculas · Reactivo 3 / 4",
      pregunta: "Las biomoléculas que forman parte de las membranas celulares y sirven como reserva de energía a largo plazo son:",
      opciones: ["Los lípidos", "Los carbohidratos", "Los ácidos nucleicos", "Las vitaminas"],
      correcta: 0,
      explicacion: "Los lípidos (fosfolípidos) forman la bicapa de las membranas y las grasas almacenan energía de manera concentrada y duradera.",
      pasos: [
        { pre: "Membranas y reserva: ", math: "\\text{lípidos}" }
      ]
    },

    {
      id: "bm4",
      tipo: "ejercicio",
      etiqueta: "Bioquímica · Biomoléculas · Reactivo 4 / 4",
      pregunta: "El elemento químico que forma el «esqueleto» de todas las biomoléculas orgánicas por su capacidad de formar cadenas es:",
      opciones: ["El carbono (C)", "El sodio (Na)", "El hierro (Fe)", "El cloro (Cl)"],
      correcta: 0,
      explicacion: "El carbono puede formar cuatro enlaces y unirse a sí mismo en cadenas y anillos, lo que le permite construir las grandes moléculas de la vida.",
      pasos: [
        { pre: "Base de lo orgánico: ", math: "C\\ (\\text{4 enlaces})" }
      ]
    },

    // ══ SUBTEMA 2 · ENZIMAS ═══════════════════════════════════════════════════
    {
      id: "enzimas",
      tipo: "concepto",
      titulo: "Enzimas: los biocatalizadores",
      etiqueta: "Aceleran las reacciones",
      formula: "\\text{enzima} = \\text{catalizador biológico}",
      svgDiagram: "bq-enzima",
      items: [
        { math: "\\text{Qué son}", texto: "proteínas que aceleran (catalizan) las reacciones químicas de la célula" },
        { math: "\\text{Cómo}", texto: "bajan la energía de activación necesaria para que la reacción ocurra" },
        { math: "\\text{Especificidad}", texto: "cada enzima actúa sobre un sustrato concreto (modelo llave-cerradura)" },
        { math: "\\text{No se gastan}", texto: "salen intactas y pueden volver a actuar" }
      ],
      nota: "Las enzimas son biocatalizadores: aumentan la velocidad de la reacción sin consumirse. Su actividad depende de la temperatura y el pH; si se desnaturalizan (por calor o pH extremo) pierden su forma y dejan de funcionar. Casi todas terminan en «-asa» (lipasa, amilasa)."
    },

    // Reactivos · Enzimas (3)
    {
      id: "en1",
      tipo: "ejercicio",
      svgDiagram: "bq-enzima",
      etiqueta: "Bioquímica · Enzimas · Reactivo 1 / 3",
      pregunta: "Biocatalizadores que en el mundo vivo aceleran o regulan la velocidad de las reacciones químicas:",
      opciones: ["Enzimas", "Lípidos", "Vitaminas", "Carbohidratos"],
      correcta: 0,
      explicacion: "Las enzimas son los catalizadores biológicos: aceleran las reacciones bajando la energía de activación, sin consumirse en el proceso.",
      pasos: [
        { pre: "Catalizador biológico: ", math: "\\text{enzima}" }
      ]
    },

    {
      id: "en2",
      tipo: "ejercicio",
      svgDiagram: "bq-enzima",
      etiqueta: "Bioquímica · Enzimas · Reactivo 2 / 3",
      pregunta: "La forma en que una enzima reconoce solo a su sustrato específico se describe con el modelo de:",
      opciones: ["Llave-cerradura", "Bomba sodio-potasio", "Doble hélice", "Mosaico fluido"],
      correcta: 0,
      explicacion: "El modelo llave-cerradura explica la especificidad: el sustrato (llave) encaja exactamente en el sitio activo de la enzima (cerradura).",
      pasos: [
        { pre: "Encaje específico: ", math: "\\text{llave-cerradura}" }
      ]
    },

    {
      id: "en3",
      tipo: "ejercicio",
      etiqueta: "Bioquímica · Enzimas · Reactivo 3 / 3",
      pregunta: "Si una enzima se expone a temperatura muy alta y pierde su forma tridimensional, se dice que sufrió:",
      opciones: ["Desnaturalización", "Replicación", "Fermentación", "Fotosíntesis"],
      correcta: 0,
      explicacion: "La desnaturalización es la pérdida de la estructura tridimensional de la proteína por calor o pH extremo; al cambiar su forma, la enzima ya no puede unirse al sustrato y deja de funcionar.",
      pasos: [
        { pre: "Pierde su forma: ", math: "\\text{desnaturalización}" }
      ]
    },

    // ══ SUBTEMA 3 · METABOLISMO Y ATP ═════════════════════════════════════════
    {
      id: "metabolismo",
      tipo: "concepto",
      titulo: "Metabolismo y ATP",
      etiqueta: "La economía energética de la célula",
      formula: "\\text{ADP} + P_i \\rightleftharpoons \\text{ATP}",
      svgDiagram: "bq-atp",
      items: [
        { math: "\\text{Anabolismo}", texto: "construye moléculas grandes y GASTA energía (ej. fotosíntesis)" },
        { math: "\\text{Catabolismo}", texto: "rompe moléculas grandes y LIBERA energía (ej. respiración)" },
        { math: "\\text{ATP}", texto: "la «moneda energética»: almacena y entrega energía a la célula" }
      ],
      nota: "Metabolismo = conjunto de todas las reacciones de la célula. El anabolismo construye (síntesis, gasta energía); el catabolismo degrada (libera energía). El ATP es la molécula que guarda la energía: al perder un fosfato (ATP → ADP) la libera para usarla."
    },

    // Reactivos · Metabolismo y ATP (3)
    {
      id: "mt1",
      tipo: "ejercicio",
      svgDiagram: "bq-atp",
      etiqueta: "Bioquímica · Metabolismo · Reactivo 1 / 3",
      pregunta: "La molécula que funciona como la principal «moneda energética» de la célula es:",
      opciones: ["El ATP", "La glucosa", "El ADN", "El colesterol"],
      correcta: 0,
      explicacion: "El ATP (adenosín trifosfato) almacena energía en sus enlaces de fosfato y la libera al romperse (ATP → ADP + Pᵢ) para impulsar los procesos celulares.",
      pasos: [
        { pre: "Moneda energética: ", math: "\\text{ATP} \\to \\text{ADP} + P_i + \\text{energía}" }
      ]
    },

    {
      id: "mt2",
      tipo: "ejercicio",
      etiqueta: "Bioquímica · Metabolismo · Reactivo 2 / 3",
      pregunta: "El conjunto de reacciones que CONSTRUYEN moléculas complejas y consumen energía se llama:",
      opciones: ["Anabolismo", "Catabolismo", "Digestión", "Excreción"],
      correcta: 0,
      explicacion: "El anabolismo agrupa las reacciones de síntesis: construye moléculas grandes a partir de pequeñas y para ello gasta energía (ATP).",
      pasos: [
        { pre: "Construir (gasta energía): ", math: "\\text{anabolismo}" }
      ]
    },

    {
      id: "mt3",
      tipo: "ejercicio",
      etiqueta: "Bioquímica · Metabolismo · Reactivo 3 / 3",
      pregunta: "La respiración celular, que degrada la glucosa para liberar energía, es un ejemplo de:",
      opciones: ["Catabolismo", "Anabolismo", "Fotosíntesis", "Síntesis de proteínas"],
      correcta: 0,
      explicacion: "El catabolismo agrupa las reacciones que rompen moléculas grandes (como la glucosa) y liberan energía. La respiración celular es el ejemplo típico.",
      pasos: [
        { pre: "Romper (libera energía): ", math: "\\text{catabolismo}" }
      ]
    },

    // ══ SUBTEMA 4 · RESPIRACIÓN CELULAR Y FERMENTACIÓN ════════════════════════
    {
      id: "respiracion",
      tipo: "criterio_detalle",
      titulo: "Respiración celular",
      etiqueta: "Glucosa + O₂ → energía",
      svgDiagram: "bq-respiracion",
      enunciado: "La respiración aerobia oxida la glucosa usando oxígeno para producir mucha energía (ATP), además de CO₂ y agua. Ocurre en tres etapas: glucólisis (en el citoplasma), ciclo de Krebs y cadena respiratoria (en la mitocondria).",
      math: "C_6H_{12}O_6 + 6\\,O_2 \\to 6\\,CO_2 + 6\\,H_2O + \\text{ATP}",
      por_que: "En la cadena respiratoria, los citocromos transportan electrones mediante reacciones de óxido-reducción (REDOX) y permiten producir la mayor cantidad de ATP. Por eso la respiración aerobia rinde mucha más energía que la fermentación.",
      math_razon: "\\text{glucólisis} \\to \\text{Krebs} \\to \\text{cadena respiratoria (citocromos)}"
    },

    {
      id: "fermentacion",
      tipo: "criterio_detalle",
      titulo: "Fermentación",
      etiqueta: "Sin oxígeno",
      enunciado: "La fermentación es un proceso ANAEROBIO (sin oxígeno) que degrada la glucosa de forma incompleta y produce poca energía. La fermentación láctica genera ácido láctico (en el músculo y el yogur); la alcohólica produce etanol y CO₂ (en levaduras: pan, cerveza, vino).",
      math: "\\text{glucosa} \\xrightarrow{\\text{sin } O_2} \\text{etanol} + CO_2 + \\text{poca ATP}",
      por_que: "Al no usar oxígeno, la glucosa no se oxida por completo, así que se libera mucha menos energía que en la respiración aerobia. La levadura Saccharomyces cerevisiae hace fermentación alcohólica: el CO₂ esponja el pan y el etanol da las bebidas.",
      math_razon: "\\text{láctica: músculo, yogur} \\quad | \\quad \\text{alcohólica: levaduras}"
    },

    // Reactivos · Respiración y fermentación (4)
    {
      id: "rf1",
      tipo: "ejercicio",
      svgDiagram: "bq-respiracion",
      etiqueta: "Bioquímica · Respiración · Reactivo 1 / 4",
      pregunta: "¿Cuál es la función de los citocromos en la cadena respiratoria?",
      opciones: ["Transportar electrones (reacciones REDOX)", "Almacenar carbohidratos", "Sintetizar CO₂", "Formar la pared celular"],
      correcta: 0,
      explicacion: "Los citocromos son proteínas que transportan electrones mediante reacciones de óxido-reducción (REDOX) en la cadena respiratoria, lo que permite producir ATP.",
      pasos: [
        { pre: "Transporte de electrones: ", math: "\\text{citocromos (REDOX)}" }
      ]
    },

    {
      id: "rf2",
      tipo: "ejercicio",
      svgDiagram: "bq-respiracion",
      etiqueta: "Bioquímica · Respiración · Reactivo 2 / 4",
      pregunta: "El organelo donde se realizan el ciclo de Krebs y la cadena respiratoria es:",
      opciones: ["La mitocondria", "El cloroplasto", "El núcleo", "El ribosoma"],
      correcta: 0,
      explicacion: "La glucólisis ocurre en el citoplasma, pero el ciclo de Krebs y la cadena respiratoria (donde se produce la mayor parte del ATP) suceden dentro de la mitocondria.",
      pasos: [
        { pre: "Respiración aerobia: ", math: "\\text{mitocondria}" }
      ]
    },

    {
      id: "rf3",
      tipo: "ejercicio",
      etiqueta: "Bioquímica · Fermentación · Reactivo 3 / 4",
      pregunta: "La levadura Saccharomyces cerevisiae produce CO₂ y etanol a partir de azúcares mediante:",
      opciones: ["Fermentación alcohólica", "Respiración aerobia", "Fotosíntesis", "Fermentación láctica"],
      correcta: 0,
      explicacion: "Las levaduras realizan fermentación alcohólica: degradan azúcares sin oxígeno y producen etanol y CO₂. Es la base de la elaboración del pan, la cerveza y el vino.",
      pasos: [
        { pre: "Sin O₂ → etanol + CO₂: ", math: "\\text{fermentación alcohólica}" }
      ]
    },

    {
      id: "rf4",
      tipo: "ejercicio",
      etiqueta: "Bioquímica · Fermentación · Reactivo 4 / 4",
      pregunta: "Durante un ejercicio intenso, cuando falta oxígeno en el músculo, la glucosa se degrada por fermentación láctica y se acumula:",
      opciones: ["Ácido láctico", "Etanol", "Glucógeno", "Oxígeno"],
      correcta: 0,
      explicacion: "En el músculo sin suficiente oxígeno ocurre fermentación láctica: la glucosa se transforma en ácido láctico, cuya acumulación se asocia a la fatiga muscular.",
      pasos: [
        { pre: "Músculo sin O₂: ", math: "\\text{glucosa} \\to \\text{ácido láctico}" }
      ]
    },

    // ══ SUBTEMA 5 · FOTOSÍNTESIS ══════════════════════════════════════════════
    {
      id: "fotosintesis",
      tipo: "criterio_detalle",
      titulo: "Fotosíntesis",
      etiqueta: "Luz → alimento",
      svgDiagram: "bq-fotosintesis",
      enunciado: "La fotosíntesis es el proceso por el que las plantas, algas y cianobacterias usan la energía de la LUZ para transformar CO₂ y agua en glucosa, liberando oxígeno. Ocurre en los cloroplastos gracias a la clorofila.",
      math: "6\\,CO_2 + 6\\,H_2O \\xrightarrow{\\text{luz}} C_6H_{12}O_6 + 6\\,O_2",
      por_que: "Es lo contrario de la respiración: la fotosíntesis CONSTRUYE glucosa y captura energía (anabolismo), mientras que la respiración la degrada y libera energía. La fotosíntesis es la fuente del oxígeno y del alimento de casi todos los ecosistemas.",
      math_razon: "\\text{fotosíntesis: produce } O_2 \\quad | \\quad \\text{respiración: consume } O_2"
    },

    // Reactivos · Fotosíntesis (3)
    {
      id: "ft1",
      tipo: "ejercicio",
      svgDiagram: "bq-fotosintesis",
      etiqueta: "Bioquímica · Fotosíntesis · Reactivo 1 / 3",
      pregunta: "En la fotosíntesis, las plantas usan la energía de la luz para transformar CO₂ y agua en:",
      opciones: ["Glucosa y oxígeno", "Ácido láctico y CO₂", "Proteínas y agua", "Etanol y CO₂"],
      correcta: 0,
      explicacion: "La fotosíntesis produce glucosa (alimento) y libera oxígeno como subproducto, usando CO₂, agua y la energía de la luz.",
      pasos: [
        { pre: "Productos: ", math: "C_6H_{12}O_6 + O_2" }
      ]
    },

    {
      id: "ft2",
      tipo: "ejercicio",
      svgDiagram: "bq-fotosintesis",
      etiqueta: "Bioquímica · Fotosíntesis · Reactivo 2 / 3",
      pregunta: "El pigmento verde que capta la energía luminosa para la fotosíntesis es:",
      opciones: ["La clorofila", "La hemoglobina", "La melanina", "El caroteno"],
      correcta: 0,
      explicacion: "La clorofila, ubicada en los cloroplastos, es el pigmento que absorbe la luz (sobre todo roja y azul) y le da el color verde a las plantas.",
      pasos: [
        { pre: "Pigmento captador: ", math: "\\text{clorofila}" }
      ]
    },

    {
      id: "ft3",
      tipo: "ejercicio",
      etiqueta: "Bioquímica · Fotosíntesis · Reactivo 3 / 3",
      pregunta: "Respecto a la energía, la fotosíntesis es un proceso ________ y la respiración celular es un proceso ________.",
      opciones: ["anabólico — catabólico", "catabólico — anabólico", "anaerobio — aerobio", "ambos catabólicos"],
      correcta: 0,
      explicacion: "La fotosíntesis construye glucosa y almacena energía (anabolismo); la respiración degrada la glucosa y libera energía (catabolismo). Son procesos complementarios.",
      pasos: [
        { pre: "Construye vs. degrada: ", math: "\\text{anabólico} \\;|\\; \\text{catabólico}" }
      ]
    },

    // ── RESUMEN ───────────────────────────────────────────────────────────────
    {
      id: "resumen",
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Ideas clave de bioquímica",
      puntos: [
        { math: "\\text{Biomoléculas}", texto: "carbohidratos (energía), lípidos (membranas/reserva), proteínas (aminoácidos), ácidos nucleicos (nucleótidos)" },
        { math: "\\text{Enzimas}", texto: "proteínas que aceleran reacciones (biocatalizadores); modelo llave-cerradura" },
        { math: "\\text{ATP}", texto: "moneda energética; anabolismo construye (gasta), catabolismo degrada (libera)" },
        { math: "C_6H_{12}O_6 + 6O_2 \\to 6CO_2 + 6H_2O", texto: "respiración aerobia (mitocondria): mucha ATP; citocromos = REDOX" },
        { math: "\\text{Fermentación}", texto: "sin O₂; láctica (músculo) o alcohólica (levaduras); poca energía" },
        { math: "6CO_2 + 6H_2O \\xrightarrow{luz} C_6H_{12}O_6 + 6O_2", texto: "fotosíntesis (cloroplasto, clorofila): produce alimento y O₂" }
      ]
    }

  ]
};
