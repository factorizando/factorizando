// Datos de la presentación: Anatomía, Fisiología y Diversidad (Biología · EXANI-II)
// Subtemas: Tejidos · Fisiología vegetal (transporte, estomas, metabolitos) · Excreción animal · Reino Fungi · Métodos de estudio.
// Cubre reactivos del EXANI-II no atendidos por las otras presentaciones de Biología:
//   tejidos animales, intercambio de gases en plantas, alcaloides, excreción comparada, cuerpo de los hongos y muestreo.

export const PRESENTACION = {
  id: "biologia-anatomia-fisiologia",
  titulo: "Anatomía, Fisiología y Diversidad",
  materia: "Biología",
  subtema: "Tejidos, plantas, animales y hongos",
  slides: [

    // ── PORTADA ───────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Anatomía, Fisiología y Diversidad",
      subtitulo: "Tejidos · Transporte y estomas en plantas · Metabolitos · Excreción animal · Reino Fungi · Muestreo",
      etiqueta: "Biología · EXANI-II",
      svgDiagram: "ana-portada",
    },

    // ══ SUBTEMA 1 · TEJIDOS DEL CUERPO ════════════════════════════════════════
    {
      id: "tejidos",
      tipo: "concepto",
      titulo: "Los tejidos animales",
      etiqueta: "Células parecidas con una función común",
      svgDiagram: "ana-tejidos",
      items: [
        { math: "\\text{Epitelial}", texto: "recubre y protege superficies (piel, mucosas) y forma glándulas" },
        { math: "\\text{Conectivo}", texto: "une y sostiene; incluye la SANGRE, la linfa, el hueso y el cartílago" },
        { math: "\\text{Muscular}", texto: "se contrae y produce movimiento (esquelético, liso y cardiaco)" },
        { math: "\\text{Nervioso}", texto: "recibe y transmite impulsos; formado por neuronas" }
      ],
      nota: "Un tejido es un conjunto de células parecidas que cumplen una misma función; varios tejidos forman un órgano. La SANGRE es un tejido conectivo líquido: transporta oxígeno y dióxido de carbono, y contiene glóbulos blancos (leucocitos) que defienden al cuerpo de organismos patógenos. El tejido linfático también defiende, pero no transporta gases."
    },

    // Reactivos · Tejidos (10)
    {
      id: "tj1",
      tipo: "ejercicio",
      svgDiagram: "ana-tejidos",
      etiqueta: "Tejidos · Reactivo 1 / 10",
      pregunta: "Es el tejido de los mamíferos que contiene células de defensa contra patógenos y, además, transporta oxígeno y dióxido de carbono:",
      opciones: ["Sanguíneo", "Epitelial", "Linfático", "Óseo"],
      correcta: 0,
      explicacion: "La sangre es un tejido conectivo líquido: los glóbulos rojos transportan O₂ y CO₂, y los glóbulos blancos defienden al organismo de los patógenos. El tejido linfático defiende, pero no transporta gases; el epitelial recubre.",
      pasos: [
        { pre: "Transporta gases y defiende: ", math: "\\text{tejido sanguíneo}" }
      ]
    },
    {
      id: "tj2",
      tipo: "ejercicio",
      etiqueta: "Tejidos · Reactivo 2 / 10",
      pregunta: "El tejido que recubre y protege las superficies del cuerpo (como la piel y las mucosas) es el:",
      opciones: ["Epitelial", "Muscular", "Nervioso", "Sanguíneo"],
      correcta: 0,
      explicacion: "El tejido epitelial recubre la superficie del cuerpo y el interior de órganos y cavidades; también forma glándulas. Su función es protección, absorción y secreción.",
      pasos: [
        { pre: "Recubre y protege: ", math: "\\text{tejido epitelial}" }
      ]
    },
    {
      id: "tj3",
      tipo: "ejercicio",
      etiqueta: "Tejidos · Reactivo 3 / 10",
      pregunta: "La sangre, el hueso y el cartílago pertenecen al tejido:",
      opciones: ["Conectivo", "Epitelial", "Muscular", "Nervioso"],
      correcta: 0,
      explicacion: "El tejido conectivo une, sostiene y rellena. Incluye formas muy distintas: el hueso (sólido), el cartílago (flexible) y la sangre (líquido). A todos los une su función de soporte y conexión.",
      pasos: [
        { pre: "Une y sostiene: ", math: "\\text{tejido conectivo}" }
      ]
    },
    {
      id: "tj4",
      tipo: "ejercicio",
      etiqueta: "Tejidos · Reactivo 4 / 10",
      pregunta: "El tejido encargado de producir movimiento mediante la contracción es el:",
      opciones: ["Muscular", "Epitelial", "Conectivo", "Adiposo"],
      correcta: 0,
      explicacion: "El tejido muscular se contrae y relaja para generar movimiento. Hay tres tipos: esquelético (voluntario), liso (de los órganos) y cardiaco (del corazón).",
      pasos: [
        { pre: "Se contrae: ", math: "\\text{tejido muscular}" }
      ]
    },
    {
      id: "tj5",
      tipo: "ejercicio",
      etiqueta: "Tejidos · Reactivo 5 / 10",
      pregunta: "Las neuronas, células que reciben y transmiten impulsos, forman el tejido:",
      opciones: ["Nervioso", "Muscular", "Epitelial", "Óseo"],
      correcta: 0,
      explicacion: "El tejido nervioso está formado por neuronas (y células de apoyo). Su función es captar estímulos y transmitir señales eléctricas para coordinar al organismo.",
      pasos: [
        { pre: "Transmite impulsos: ", math: "\\text{tejido nervioso}" }
      ]
    },
    {
      id: "tj6",
      tipo: "ejercicio",
      etiqueta: "Tejidos · Reactivo 6 / 10",
      pregunta: "Las células de la sangre que actúan como medio de defensa eliminando organismos patógenos son los:",
      opciones: ["Glóbulos blancos (leucocitos)", "Glóbulos rojos (eritrocitos)", "Las plaquetas", "Las neuronas"],
      correcta: 0,
      explicacion: "Los glóbulos blancos o leucocitos defienden al cuerpo: rodean y destruyen microbios. Los glóbulos rojos transportan gases y las plaquetas ayudan a la coagulación.",
      pasos: [
        { pre: "Defensa: ", math: "\\text{glóbulos blancos}" }
      ]
    },
    {
      id: "tj7",
      tipo: "ejercicio",
      etiqueta: "Tejidos · Reactivo 7 / 10",
      pregunta: "Un grupo de células parecidas que realizan en conjunto una misma función se denomina:",
      opciones: ["Tejido", "Órgano", "Sistema", "Aparato"],
      correcta: 0,
      explicacion: "El tejido es el nivel de organización formado por células semejantes con una función común. Varios tejidos forman un órgano, y varios órganos un sistema.",
      pasos: [
        { pre: "Células con una función: ", math: "\\text{tejido}" }
      ]
    },
    {
      id: "tj8",
      tipo: "ejercicio",
      etiqueta: "Tejidos · Reactivo 8 / 10",
      pregunta: "Ordena correctamente los niveles de organización del cuerpo, de menor a mayor:",
      opciones: ["Célula → tejido → órgano → sistema", "Tejido → célula → órgano → sistema", "Órgano → tejido → célula → sistema", "Sistema → órgano → célula → tejido"],
      correcta: 0,
      explicacion: "Las células se agrupan en tejidos, los tejidos forman órganos, y los órganos se integran en sistemas (o aparatos). Es el orden creciente de complejidad.",
      pasos: [
        { pre: "Creciente: ", math: "\\text{célula} \\to \\text{tejido} \\to \\text{órgano} \\to \\text{sistema}" }
      ]
    },
    {
      id: "tj9",
      tipo: "ejercicio",
      etiqueta: "Tejidos · Reactivo 9 / 10",
      pregunta: "El tejido que defiende al organismo pero NO transporta oxígeno ni dióxido de carbono es el:",
      opciones: ["Linfático", "Sanguíneo", "Muscular", "Epitelial"],
      correcta: 0,
      explicacion: "El tejido linfático forma parte del sistema inmunitario y participa en la defensa, pero no transporta gases. Quien transporta O₂ y CO₂ es la sangre.",
      pasos: [
        { pre: "Defiende, no transporta gases: ", math: "\\text{tejido linfático}" }
      ]
    },
    {
      id: "tj10",
      tipo: "ejercicio",
      etiqueta: "Tejidos · Reactivo 10 / 10",
      pregunta: "Las glándulas que secretan sustancias (como sudor o saliva) derivan principalmente del tejido:",
      opciones: ["Epitelial", "Nervioso", "Muscular", "Conectivo"],
      correcta: 0,
      explicacion: "Las glándulas se forman a partir del tejido epitelial, que además de recubrir superficies puede especializarse en la secreción de sustancias.",
      pasos: [
        { pre: "Forma glándulas: ", math: "\\text{tejido epitelial}" }
      ]
    },

    // ══ SUBTEMA 2 · FISIOLOGÍA VEGETAL ════════════════════════════════════════
    {
      id: "vegetal",
      tipo: "criterio_detalle",
      titulo: "Transporte, gases y metabolitos en plantas",
      etiqueta: "Cómo funciona la planta",
      svgDiagram: "ana-vegetal",
      enunciado: "Las plantas tienen tejidos conductores: el XILEMA lleva agua y sales minerales desde la raíz hasta las hojas, y el FLOEMA reparte la savia con azúcares producidos en la fotosíntesis. El intercambio de gases (entrada de CO₂, salida de O₂) y la transpiración ocurren por los ESTOMAS, poros de la epidermis de las hojas.",
      math: "\\text{raíz} \\xrightarrow{\\text{xilema (agua)}} \\text{hoja} \\xrightarrow{\\text{floema (azúcares)}} \\text{toda la planta}",
      por_que: "Además de fabricar azúcares, las plantas producen metabolitos secundarios: sustancias que no usan para crecer, sino para defenderse. Muchos son ALCALOIDES, como la morfina (de la amapola), la cafeína, la nicotina o la quinina. De ellos se obtienen medicamentos y drogas.",
      math_razon: "\\text{amapola} \\to \\text{alcaloides} \\to \\text{morfina (analgésico)}"
    },

    // Reactivos · Fisiología vegetal (12)
    {
      id: "vg1",
      tipo: "ejercicio",
      svgDiagram: "ana-vegetal",
      etiqueta: "Plantas · Reactivo 1 / 12",
      pregunta: "Es la estructura de la planta que interviene en el intercambio de gases:",
      opciones: ["Estoma", "Xilema", "Floema", "Raíz"],
      correcta: 0,
      explicacion: "Los estomas son poros diminutos en la epidermis de las hojas. Se abren y cierran para dejar entrar CO₂ y salir O₂ y vapor de agua (transpiración). El xilema y el floema transportan, no intercambian gases.",
      pasos: [
        { pre: "Intercambio de gases: ", math: "\\text{estoma}" }
      ]
    },
    {
      id: "vg2",
      tipo: "ejercicio",
      svgDiagram: "ana-vegetal",
      etiqueta: "Plantas · Reactivo 2 / 12",
      pregunta: "El tejido conductor que transporta agua y sales minerales desde la raíz hacia las hojas es el:",
      opciones: ["Xilema", "Floema", "Estoma", "Cutícula"],
      correcta: 0,
      explicacion: "El xilema conduce el agua y las sales minerales (la savia bruta) en sentido ascendente, de la raíz a las hojas. El floema lleva los azúcares.",
      pasos: [
        { pre: "Agua hacia arriba: ", math: "\\text{xilema}" }
      ]
    },
    {
      id: "vg3",
      tipo: "ejercicio",
      svgDiagram: "ana-vegetal",
      etiqueta: "Plantas · Reactivo 3 / 12",
      pregunta: "El tejido que distribuye los azúcares producidos en la fotosíntesis hacia el resto de la planta es el:",
      opciones: ["Floema", "Xilema", "Estoma", "Epidermis"],
      correcta: 0,
      explicacion: "El floema transporta la savia elaborada (rica en azúcares) desde las hojas, donde se fabrica, hacia todas las partes de la planta. El xilema solo sube agua.",
      pasos: [
        { pre: "Reparte azúcares: ", math: "\\text{floema}" }
      ]
    },
    {
      id: "vg4",
      tipo: "ejercicio",
      etiqueta: "Plantas · Reactivo 4 / 12",
      pregunta: "Es el producto que se obtiene de los alcaloides derivados de la síntesis de aminoácidos de la planta amapola (Papaver somniferum):",
      opciones: ["Morfina", "Penicilina", "Aspirina", "Insulina"],
      correcta: 0,
      explicacion: "La amapola produce alcaloides como la morfina, un potente analgésico. La penicilina proviene de un hongo; la aspirina deriva del sauce; la insulina es una hormona animal.",
      pasos: [
        { pre: "Alcaloide de la amapola: ", math: "\\text{morfina}" }
      ]
    },
    {
      id: "vg5",
      tipo: "ejercicio",
      etiqueta: "Plantas · Reactivo 5 / 12",
      pregunta: "La morfina, la cafeína y la nicotina son ejemplos de metabolitos secundarios del tipo:",
      opciones: ["Alcaloides", "Carbohidratos", "Lípidos estructurales", "Ácidos nucleicos"],
      correcta: 0,
      explicacion: "Los alcaloides son metabolitos secundarios de las plantas (derivados de aminoácidos) que suelen servir de defensa. Muchos tienen efecto sobre el sistema nervioso: morfina, cafeína, nicotina, quinina.",
      pasos: [
        { pre: "Derivan de aminoácidos: ", math: "\\text{alcaloides}" }
      ]
    },
    {
      id: "vg6",
      tipo: "ejercicio",
      etiqueta: "Plantas · Reactivo 6 / 12",
      pregunta: "La pérdida de agua en forma de vapor a través de los estomas de las hojas se llama:",
      opciones: ["Transpiración", "Respiración", "Fotosíntesis", "Digestión"],
      correcta: 0,
      explicacion: "La transpiración es la salida de vapor de agua por los estomas. Esta pérdida ayuda a «jalar» el agua desde la raíz por el xilema (la corriente de transpiración).",
      pasos: [
        { pre: "Salida de vapor: ", math: "\\text{transpiración}" }
      ]
    },
    {
      id: "vg7",
      tipo: "ejercicio",
      etiqueta: "Plantas · Reactivo 7 / 12",
      pregunta: "Durante el día, por los estomas de la hoja entra principalmente el gas ____ que la planta usa en la fotosíntesis.",
      opciones: ["dióxido de carbono (CO₂)", "oxígeno (O₂)", "nitrógeno (N₂)", "hidrógeno (H₂)"],
      correcta: 0,
      explicacion: "En la fotosíntesis la planta toma CO₂ del aire (que entra por los estomas) y libera O₂. El CO₂ es la fuente de carbono para fabricar los azúcares.",
      pasos: [
        { pre: "Entra para fotosintetizar: ", math: "\\text{CO}_2" }
      ]
    },
    {
      id: "vg8",
      tipo: "ejercicio",
      etiqueta: "Plantas · Reactivo 8 / 12",
      pregunta: "El conjunto de sustancias que la planta NO necesita para crecer, sino que produce sobre todo para defenderse, se conoce como:",
      opciones: ["Metabolitos secundarios", "Metabolitos primarios", "Enzimas digestivas", "Hormonas animales"],
      correcta: 0,
      explicacion: "Los metabolitos secundarios (alcaloides, taninos, terpenos) no participan directamente en el crecimiento; cumplen funciones de defensa, atracción o protección. De ellos se obtienen muchos fármacos.",
      pasos: [
        { pre: "Defensa, no crecimiento: ", math: "\\text{metabolitos secundarios}" }
      ]
    },
    {
      id: "vg9",
      tipo: "ejercicio",
      etiqueta: "Plantas · Reactivo 9 / 12",
      pregunta: "Las células oclusivas (de guarda) regulan en la hoja la apertura y el cierre del:",
      opciones: ["Estoma", "Xilema", "Floema", "Núcleo"],
      correcta: 0,
      explicacion: "Cada estoma está flanqueado por dos células oclusivas o de guarda que, al hincharse o vaciarse de agua, abren o cierran el poro para controlar el intercambio de gases y la pérdida de agua.",
      pasos: [
        { pre: "Abren y cierran el poro: ", math: "\\text{estoma}" }
      ]
    },
    {
      id: "vg10",
      tipo: "ejercicio",
      etiqueta: "Plantas · Reactivo 10 / 12",
      pregunta: "La quinina (contra la malaria) y la cafeína se obtienen de plantas y, por su origen y estructura, se clasifican como:",
      opciones: ["Alcaloides", "Vitaminas", "Minerales", "Proteínas estructurales"],
      correcta: 0,
      explicacion: "Tanto la quinina como la cafeína son alcaloides vegetales. La quinina, del árbol de la quina, se usó contra el paludismo; la cafeína actúa como estimulante.",
      pasos: [
        { pre: "Origen vegetal, defensa: ", math: "\\text{alcaloides}" }
      ]
    },
    {
      id: "vg11",
      tipo: "ejercicio",
      etiqueta: "Plantas · Reactivo 11 / 12",
      pregunta: "Si se taparan todos los estomas de una hoja, la planta dejaría de poder:",
      opciones: ["Intercambiar gases con el aire", "Crecer en altura solamente", "Tener raíces", "Reproducirse por semillas"],
      correcta: 0,
      explicacion: "Sin estomas abiertos la planta no puede tomar CO₂ ni liberar O₂ y vapor de agua; se interrumpe el intercambio gaseoso del que depende la fotosíntesis.",
      pasos: [
        { pre: "Estomas cerrados: ", math: "\\text{sin intercambio de gases}" }
      ]
    },
    {
      id: "vg12",
      tipo: "ejercicio",
      etiqueta: "Plantas · Reactivo 12 / 12",
      pregunta: "La «savia bruta» (agua y sales minerales) que sube por el xilema proviene de la absorción que realiza la:",
      opciones: ["Raíz", "Flor", "Hoja", "Semilla"],
      correcta: 0,
      explicacion: "La raíz absorbe agua y sales minerales del suelo; esa savia bruta asciende por el xilema hasta las hojas, donde se usa en la fotosíntesis.",
      pasos: [
        { pre: "Absorbe del suelo: ", math: "\\text{raíz}" }
      ]
    },

    // ══ SUBTEMA 3 · EXCRECIÓN EN LOS ANIMALES ═════════════════════════════════
    {
      id: "excrecion",
      tipo: "concepto",
      titulo: "La excreción en los animales",
      etiqueta: "Cada grupo, su estructura",
      svgDiagram: "ana-excrecion",
      items: [
        { math: "\\text{Nefridios}", texto: "anélidos (lombriz de tierra) y moluscos: tubos que filtran desechos" },
        { math: "\\text{Túbulos de Malpighi}", texto: "insectos y arácnidos (saltamontes, abeja, araña)" },
        { math: "\\text{Glándulas antenales}", texto: "crustáceos (cangrejo, langosta); también llamadas glándulas verdes" },
        { math: "\\text{Riñones}", texto: "vertebrados (peces, anfibios, reptiles, aves y mamíferos)" }
      ],
      nota: "La excreción elimina los desechos del metabolismo (como el amoniaco, la urea o el ácido úrico). Cada gran grupo animal tiene su propia estructura excretora: los anélidos usan nefridios; los insectos y arácnidos, túbulos de Malpighi; los crustáceos, glándulas antenales (verdes); y los vertebrados, riñones."
    },

    // Reactivos · Excreción (10)
    {
      id: "ex1",
      tipo: "ejercicio",
      svgDiagram: "ana-excrecion",
      etiqueta: "Excreción · Reactivo 1 / 10",
      pregunta: "Estructura excretora característica de los insectos, como el saltamontes y la abeja:",
      opciones: ["Túbulos de Malpighi", "Nefridios", "Glándulas antenales", "Riñones"],
      correcta: 0,
      explicacion: "Los insectos (y los arácnidos) excretan mediante túbulos de Malpighi, que vacían los desechos (sobre todo ácido úrico) al tubo digestivo. Los nefridios son de anélidos y las glándulas antenales de crustáceos.",
      pasos: [
        { pre: "Insectos: ", math: "\\text{túbulos de Malpighi}" }
      ]
    },
    {
      id: "ex2",
      tipo: "ejercicio",
      svgDiagram: "ana-excrecion",
      etiqueta: "Excreción · Reactivo 2 / 10",
      pregunta: "La lombriz de tierra y otros anélidos eliminan sus desechos mediante:",
      opciones: ["Nefridios", "Túbulos de Malpighi", "Glándulas antenales", "Pulmones"],
      correcta: 0,
      explicacion: "Los anélidos (como la lombriz de tierra) poseen nefridios: pequeños tubos que filtran los líquidos del cuerpo y expulsan los desechos al exterior.",
      pasos: [
        { pre: "Anélidos: ", math: "\\text{nefridios}" }
      ]
    },
    {
      id: "ex3",
      tipo: "ejercicio",
      svgDiagram: "ana-excrecion",
      etiqueta: "Excreción · Reactivo 3 / 10",
      pregunta: "Los crustáceos como el cangrejo y la langosta excretan a través de las:",
      opciones: ["Glándulas antenales (verdes)", "Túbulos de Malpighi", "Nefridios", "Branquias únicamente"],
      correcta: 0,
      explicacion: "Los crustáceos usan glándulas antenales, también llamadas glándulas verdes, situadas cerca de la base de las antenas, para eliminar sus desechos nitrogenados.",
      pasos: [
        { pre: "Crustáceos: ", math: "\\text{glándulas antenales}" }
      ]
    },
    {
      id: "ex4",
      tipo: "ejercicio",
      etiqueta: "Excreción · Reactivo 4 / 10",
      pregunta: "Relaciona cada organismo con su estructura de excreción: 1) Lombriz 2) Saltamontes 3) Cangrejo, con a) Nefridios b) Túbulos de Malpighi c) Glándulas antenales.",
      opciones: ["1a, 2b, 3c", "1c, 2b, 3a", "1b, 2a, 3c", "1a, 2c, 3b"],
      correcta: 0,
      explicacion: "Lombriz (anélido) → nefridios (a); saltamontes (insecto) → túbulos de Malpighi (b); cangrejo (crustáceo) → glándulas antenales (c). La clave es identificar el grupo de cada animal.",
      pasos: [
        { pre: "Por grupo: ", math: "1a,\\ 2b,\\ 3c" }
      ]
    },
    {
      id: "ex5",
      tipo: "ejercicio",
      etiqueta: "Excreción · Reactivo 5 / 10",
      pregunta: "El órgano excretor de los vertebrados (peces, aves y mamíferos) es el:",
      opciones: ["Riñón", "Túbulo de Malpighi", "Nefridio", "Estoma"],
      correcta: 0,
      explicacion: "Los vertebrados filtran la sangre en los riñones y forman orina. Los riñones eliminan urea, sales y exceso de agua manteniendo el equilibrio interno (homeostasis).",
      pasos: [
        { pre: "Vertebrados: ", math: "\\text{riñones}" }
      ]
    },
    {
      id: "ex6",
      tipo: "ejercicio",
      etiqueta: "Excreción · Reactivo 6 / 10",
      pregunta: "La función general de la excreción en los animales es:",
      opciones: ["Eliminar los desechos del metabolismo", "Producir energía a partir de glucosa", "Reproducir al organismo", "Transportar el oxígeno"],
      correcta: 0,
      explicacion: "La excreción retira del cuerpo los productos de desecho del metabolismo (amoniaco, urea, ácido úrico, sales sobrantes), evitando que se acumulen y resulten tóxicos.",
      pasos: [
        { pre: "Elimina: ", math: "\\text{desechos metabólicos}" }
      ]
    },
    {
      id: "ex7",
      tipo: "ejercicio",
      etiqueta: "Excreción · Reactivo 7 / 10",
      pregunta: "Una araña, por ser un arácnido, comparte su tipo de estructura excretora con:",
      opciones: ["Los insectos (túbulos de Malpighi)", "Los anélidos (nefridios)", "Los crustáceos (glándulas antenales)", "Los vertebrados (riñones)"],
      correcta: 0,
      explicacion: "Insectos y arácnidos pertenecen a los artrópodos terrestres y comparten los túbulos de Malpighi como órgano excretor.",
      pasos: [
        { pre: "Arácnidos como insectos: ", math: "\\text{túbulos de Malpighi}" }
      ]
    },
    {
      id: "ex8",
      tipo: "ejercicio",
      etiqueta: "Excreción · Reactivo 8 / 10",
      pregunta: "Principal desecho nitrogenado que los mamíferos eliminan en la orina:",
      opciones: ["Urea", "Glucosa", "Oxígeno", "Almidón"],
      correcta: 0,
      explicacion: "Los mamíferos transforman el amoniaco (muy tóxico) en urea, menos dañina, que se elimina disuelta en la orina producida por los riñones.",
      pasos: [
        { pre: "En la orina: ", math: "\\text{urea}" }
      ]
    },
    {
      id: "ex9",
      tipo: "ejercicio",
      etiqueta: "Excreción · Reactivo 9 / 10",
      pregunta: "Las «glándulas verdes» son otro nombre de la estructura excretora de los:",
      opciones: ["Crustáceos", "Insectos", "Anélidos", "Mamíferos"],
      correcta: 0,
      explicacion: "Las glándulas antenales de los crustáceos también se llaman glándulas verdes por su color; eliminan los desechos cerca de la base de las antenas.",
      pasos: [
        { pre: "Glándulas verdes: ", math: "\\text{crustáceos}" }
      ]
    },
    {
      id: "ex10",
      tipo: "ejercicio",
      etiqueta: "Excreción · Reactivo 10 / 10",
      pregunta: "Al filtrar la sangre, los riñones de los vertebrados ayudan a mantener constante el medio interno. Esto es un ejemplo de:",
      opciones: ["Homeostasis", "Fotosíntesis", "Mitosis", "Fermentación"],
      correcta: 0,
      explicacion: "La homeostasis es el mantenimiento del equilibrio interno. Al regular el agua, las sales y los desechos, la excreción renal contribuye a la homeostasis del organismo.",
      pasos: [
        { pre: "Equilibrio interno: ", math: "\\text{homeostasis}" }
      ]
    },

    // ══ SUBTEMA 4 · EL REINO FUNGI (HONGOS) ═══════════════════════════════════
    {
      id: "fungi",
      tipo: "concepto",
      titulo: "El reino Fungi: los hongos",
      etiqueta: "Hifas, micelio y quitina",
      svgDiagram: "ana-fungi",
      items: [
        { math: "\\text{Hifa}", texto: "filamento de células que crece y se ramifica; unidad básica del cuerpo" },
        { math: "\\text{Micelio}", texto: "masa entretejida de hifas; forma el cuerpo de la mayoría de los hongos" },
        { math: "\\text{Pared de quitina}", texto: "sus células tienen pared, pero NO de celulosa como las plantas" },
        { math: "\\text{Heterótrofos}", texto: "se nutren por absorción; no fotosintetizan; se reproducen por esporas" }
      ],
      nota: "El cuerpo de la mayoría de los hongos (excepto los unicelulares, como las levaduras) está formado por el MICELIO, una masa entretejida de filamentos de una célula de espesor llamados HIFAS. Los hongos son eucariotas heterótrofos con pared celular de quitina; se alimentan por absorción y se reproducen mediante esporas. Incluyen mohos, levaduras y setas."
    },

    // Reactivos · Fungi (10)
    {
      id: "fu1",
      tipo: "ejercicio",
      svgDiagram: "ana-fungi",
      etiqueta: "Fungi · Reactivo 1 / 10",
      pregunta: "El cuerpo de la mayoría de los miembros del reino Fungi (excepto los unicelulares) está formado por el ________, una masa entretejida de filamentos llamados hifas.",
      opciones: ["micelio", "talo", "cuerpo fructífero", "tejido vascular"],
      correcta: 0,
      explicacion: "El micelio es el conjunto de hifas entretejidas que constituye el cuerpo del hongo. El cuerpo fructífero (como la seta) es solo la parte reproductora que sobresale.",
      pasos: [
        { pre: "Masa de hifas: ", math: "\\text{micelio}" }
      ]
    },
    {
      id: "fu2",
      tipo: "ejercicio",
      svgDiagram: "ana-fungi",
      etiqueta: "Fungi · Reactivo 2 / 10",
      pregunta: "Cada uno de los filamentos que, entretejidos, forman el cuerpo de un hongo se llama:",
      opciones: ["Hifa", "Estoma", "Nefridio", "Cloroplasto"],
      correcta: 0,
      explicacion: "Las hifas son los filamentos celulares que crecen y se ramifican; el conjunto de hifas forma el micelio.",
      pasos: [
        { pre: "Filamento del hongo: ", math: "\\text{hifa}" }
      ]
    },
    {
      id: "fu3",
      tipo: "ejercicio",
      etiqueta: "Fungi · Reactivo 3 / 10",
      pregunta: "La pared celular de los hongos está formada principalmente por:",
      opciones: ["Quitina", "Celulosa", "Colesterol", "Almidón"],
      correcta: 0,
      explicacion: "A diferencia de las plantas (que usan celulosa), los hongos tienen pared celular de quitina, el mismo polisacárido del exoesqueleto de los insectos.",
      pasos: [
        { pre: "Pared del hongo: ", math: "\\text{quitina}" }
      ]
    },
    {
      id: "fu4",
      tipo: "ejercicio",
      etiqueta: "Fungi · Reactivo 4 / 10",
      pregunta: "Respecto a su nutrición, los hongos son organismos:",
      opciones: ["Heterótrofos que absorben su alimento", "Autótrofos que hacen fotosíntesis", "Quimiosintéticos del azufre", "Productores primarios"],
      correcta: 0,
      explicacion: "Los hongos no fotosintetizan: son heterótrofos. Liberan enzimas al medio, digieren la materia por fuera y absorben los nutrientes a través de sus hifas.",
      pasos: [
        { pre: "Nutrición: ", math: "\\text{heterótrofa por absorción}" }
      ]
    },
    {
      id: "fu5",
      tipo: "ejercicio",
      etiqueta: "Fungi · Reactivo 5 / 10",
      pregunta: "Los hongos se reproducen principalmente mediante:",
      opciones: ["Esporas", "Semillas", "Estacas", "Huevos amniotas"],
      correcta: 0,
      explicacion: "Los hongos producen esporas, células reproductoras resistentes que dispersan al viento. Las semillas son de las plantas con flor.",
      pasos: [
        { pre: "Reproducción: ", math: "\\text{esporas}" }
      ]
    },
    {
      id: "fu6",
      tipo: "ejercicio",
      etiqueta: "Fungi · Reactivo 6 / 10",
      pregunta: "Las levaduras, mohos y setas pertenecen al reino:",
      opciones: ["Fungi", "Plantae", "Animalia", "Monera"],
      correcta: 0,
      explicacion: "El reino Fungi agrupa a levaduras (unicelulares), mohos y setas: todos eucariotas heterótrofos con pared de quitina.",
      pasos: [
        { pre: "Hongos: ", math: "\\text{reino Fungi}" }
      ]
    },
    {
      id: "fu7",
      tipo: "ejercicio",
      etiqueta: "Fungi · Reactivo 7 / 10",
      pregunta: "La parte visible y reproductora de una seta, que produce y libera las esporas, es el:",
      opciones: ["Cuerpo fructífero", "Micelio", "Nefridio", "Xilema"],
      correcta: 0,
      explicacion: "El cuerpo fructífero (la seta o sombrero) es la estructura reproductora que emerge del micelio; en él se forman y liberan las esporas. La mayor parte del hongo, el micelio, queda oculta en el sustrato.",
      pasos: [
        { pre: "Produce esporas: ", math: "\\text{cuerpo fructífero}" }
      ]
    },
    {
      id: "fu8",
      tipo: "ejercicio",
      etiqueta: "Fungi · Reactivo 8 / 10",
      pregunta: "Hongo unicelular usado para fermentar pan, vino y cerveza:",
      opciones: ["La levadura", "El moho del pan", "La amanita", "El champiñón"],
      correcta: 0,
      explicacion: "La levadura (Saccharomyces) es un hongo unicelular que, por fermentación, transforma azúcares en alcohol y CO₂; por eso se usa en la panadería y en la producción de vino y cerveza.",
      pasos: [
        { pre: "Fermenta: ", math: "\\text{levadura}" }
      ]
    },
    {
      id: "fu9",
      tipo: "ejercicio",
      etiqueta: "Fungi · Reactivo 9 / 10",
      pregunta: "En los ecosistemas, muchos hongos cumplen el papel ecológico de:",
      opciones: ["Descomponedores", "Productores", "Consumidores primarios", "Depredadores tope"],
      correcta: 0,
      explicacion: "Los hongos son descomponedores: degradan la materia orgánica muerta y reciclan nutrientes hacia el suelo, junto con las bacterias.",
      pasos: [
        { pre: "Reciclan materia: ", math: "\\text{descomponedores}" }
      ]
    },
    {
      id: "fu10",
      tipo: "ejercicio",
      etiqueta: "Fungi · Reactivo 10 / 10",
      pregunta: "El antibiótico penicilina se obtuvo originalmente de un:",
      opciones: ["Hongo (Penicillium)", "Una bacteria", "Una planta con flor", "Un alga verde"],
      correcta: 0,
      explicacion: "La penicilina proviene del hongo Penicillium. A diferencia de la morfina (planta) o la insulina (animal/recombinante), su origen es fúngico.",
      pasos: [
        { pre: "Origen de la penicilina: ", math: "\\text{hongo}" }
      ]
    },

    // ══ SUBTEMA 5 · MÉTODOS DE ESTUDIO DE POBLACIONES ═════════════════════════
    {
      id: "muestreo",
      tipo: "concepto",
      titulo: "Cómo se estudia a los seres vivos en el campo",
      etiqueta: "Censo, muestreo y observación",
      items: [
        { math: "\\text{Censo}", texto: "contar TODOS los individuos de una población (recuento completo)" },
        { math: "\\text{Muestreo}", texto: "estudiar una parte representativa para estimar el total" },
        { math: "\\text{Observación}", texto: "registrar comportamiento o características sin contar a todos" },
        { math: "\\text{Colecta}", texto: "recoger ejemplares para identificarlos y conservarlos" }
      ],
      nota: "Para estudiar la biodiversidad de un lugar, el biólogo elige una técnica. El CENSO cuenta a todos los individuos (útil cuando son pocos o están delimitados, como las plantas de un lago). El MUESTREO estima a partir de una porción. La OBSERVACIÓN y la COLECTA sirven para describir o identificar especies, no para cuantificar la población completa."
    },

    // Reactivos · Métodos de estudio (6)
    {
      id: "ms1",
      tipo: "ejercicio",
      etiqueta: "Métodos · Reactivo 1 / 6",
      pregunta: "¿Qué técnica se aplica para estudiar la variedad de plantas de lirio acuático que crecen en un lago, contando todos sus individuos?",
      opciones: ["Censo", "Colecta", "Observación", "Disección"],
      correcta: 0,
      explicacion: "El censo consiste en contar todos los individuos de la población. Como las plantas del lago están delimitadas, se pueden contar por completo para conocer su variedad y número.",
      pasos: [
        { pre: "Contar a todos: ", math: "\\text{censo}" }
      ]
    },
    {
      id: "ms2",
      tipo: "ejercicio",
      etiqueta: "Métodos · Reactivo 2 / 6",
      pregunta: "Cuando una población es demasiado grande para contarla por completo, se estudia una parte representativa. Esta técnica se llama:",
      opciones: ["Muestreo", "Censo", "Colecta", "Clonación"],
      correcta: 0,
      explicacion: "El muestreo toma una muestra representativa de la población y, a partir de ella, estima el total. Es útil cuando contar a todos (censo) sería imposible.",
      pasos: [
        { pre: "Parte representativa: ", math: "\\text{muestreo}" }
      ]
    },
    {
      id: "ms3",
      tipo: "ejercicio",
      etiqueta: "Métodos · Reactivo 3 / 6",
      pregunta: "Recoger ejemplares de plantas o animales para identificarlos y conservarlos en una colección se denomina:",
      opciones: ["Colecta", "Censo", "Muestreo", "Fecundación"],
      correcta: 0,
      explicacion: "La colecta es la recolección de ejemplares para su estudio, identificación y conservación (por ejemplo, en un herbario o museo). No busca contar la población.",
      pasos: [
        { pre: "Recoger ejemplares: ", math: "\\text{colecta}" }
      ]
    },
    {
      id: "ms4",
      tipo: "ejercicio",
      etiqueta: "Métodos · Reactivo 4 / 6",
      pregunta: "Registrar el comportamiento de las aves de un parque sin capturarlas ni contarlas todas corresponde a la técnica de:",
      opciones: ["Observación", "Censo total", "Colecta", "Disección"],
      correcta: 0,
      explicacion: "La observación registra características o conductas de los organismos en su ambiente, sin necesidad de contar a todos los individuos ni capturarlos.",
      pasos: [
        { pre: "Registrar sin contar a todos: ", math: "\\text{observación}" }
      ]
    },
    {
      id: "ms5",
      tipo: "ejercicio",
      etiqueta: "Métodos · Reactivo 5 / 6",
      pregunta: "La principal diferencia entre un censo y un muestreo es que el censo:",
      opciones: ["Cuenta a todos los individuos, no solo a una parte", "Solo sirve para plantas", "No usa números", "Se hace en el laboratorio"],
      correcta: 0,
      explicacion: "El censo es un recuento completo (todos los individuos), mientras que el muestreo trabaja con una fracción representativa para estimar el total.",
      pasos: [
        { pre: "Censo: ", math: "\\text{recuento completo}" }
      ]
    },
    {
      id: "ms6",
      tipo: "ejercicio",
      etiqueta: "Métodos · Reactivo 6 / 6",
      pregunta: "Para conocer cuántos árboles de una especie hay en un pequeño parque urbano cercado, lo más adecuado es realizar un:",
      opciones: ["Censo", "Muestreo estadístico", "Experimento de laboratorio", "Cultivo in vitro"],
      correcta: 0,
      explicacion: "Como el parque es pequeño y está delimitado, conviene un censo: contar todos los árboles. El muestreo se reserva para poblaciones demasiado grandes.",
      pasos: [
        { pre: "Área pequeña y cerrada: ", math: "\\text{censo}" }
      ]
    },

    // ── RESUMEN ───────────────────────────────────────────────────────────────
    {
      id: "resumen",
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Ideas clave",
      puntos: [
        { math: "\\text{Tejidos}", texto: "epitelial (recubre), conectivo (sangre, hueso), muscular (mueve), nervioso (transmite). La sangre transporta gases y defiende" },
        { math: "\\text{xilema / floema}", texto: "xilema sube agua de la raíz; floema reparte azúcares; los estomas intercambian gases" },
        { math: "\\text{Alcaloides}", texto: "metabolitos secundarios vegetales: morfina (amapola), cafeína, nicotina, quinina" },
        { math: "\\text{Excreción}", texto: "nefridios (anélidos), túbulos de Malpighi (insectos), glándulas antenales (crustáceos), riñones (vertebrados)" },
        { math: "\\text{Fungi}", texto: "cuerpo = micelio (hifas); pared de quitina; heterótrofos por absorción; esporas" },
        { math: "\\text{Censo vs. muestreo}", texto: "censo = contar a todos; muestreo = estimar con una parte representativa" }
      ]
    }

  ]
};
