import { useState, useEffect } from "react";

const questions = [
  // ── NÚCLEO (1–12) ──────────────────────────────────────────────────────────
  {
    id: 1, topic: "Núcleo",
    question: "¿Cuál es la función principal del núcleo celular?",
    options: [
      "a) Producir energía en forma de ATP",
      "b) Controlar las actividades celulares y almacenar la información genética",
      "c) Sintetizar lípidos de membrana",
      "d) Degradar macromoléculas mediante enzimas hidrolíticas"
    ],
    answer: "b"
  },
  {
    id: 2, topic: "Núcleo",
    question: "La envoltura nuclear está formada por:",
    options: [
      "a) Una membrana simple continua con el retículo endoplásmico liso",
      "b) Dos membranas lipídicas perforadas por poros nucleares",
      "c) Una capa de peptidoglicano reforzada con proteínas",
      "d) Tres capas fosfolipídicas con canales iónicos"
    ],
    answer: "b"
  },
  {
    id: 3, topic: "Núcleo",
    question: "Los poros nucleares permiten principalmente:",
    options: [
      "a) El paso de iones de calcio hacia el citoplasma",
      "b) La síntesis de proteínas directamente en el núcleo",
      "c) El intercambio de macromoléculas entre el núcleo y el citoplasma",
      "d) La replicación del ADN en la membrana nuclear"
    ],
    answer: "c"
  },
  {
    id: 4, topic: "Núcleo",
    question: "El nucléolo es una estructura nuclear cuya principal función es:",
    options: [
      "a) Replicar el ADN durante la mitosis",
      "b) Sintetizar ARN ribosomal y ensamblar subunidades ribosómicas",
      "c) Almacenar calcio para la señalización celular",
      "d) Desintoxicar sustancias nocivas para la célula"
    ],
    answer: "b"
  },
  {
    id: 5, topic: "Núcleo",
    question: "La cromatina es la forma en que se encuentra el ADN en el núcleo. La heterocromatina se caracteriza por:",
    options: [
      "a) Estar activamente transcrita y ser de color claro",
      "b) Estar muy condensada e inactiva transcripcionalmente",
      "c) Encontrarse solo durante la fase S del ciclo celular",
      "d) Constituir los telómeros únicamente"
    ],
    answer: "b"
  },
  {
    id: 6, topic: "Núcleo",
    question: "La lámina nuclear es una red de proteínas que se encuentra:",
    options: [
      "a) En el interior del nucléolo",
      "b) En el citosol, cerca del retículo endoplásmico",
      "c) En la cara interna de la envoltura nuclear, dando soporte estructural",
      "d) Formando los poros nucleares junto con las nucleoporinas"
    ],
    answer: "c"
  },
  {
    id: 7, topic: "Núcleo",
    question: "Durante la mitosis, la envoltura nuclear:",
    options: [
      "a) Se duplica para formar los dos núcleos hijos",
      "b) Permanece intacta durante todo el proceso",
      "c) Se fragmenta en profase y se reconstituye en telofase",
      "d) Se une al huso mitótico para separar los cromosomas"
    ],
    answer: "c"
  },
  {
    id: 8, topic: "Núcleo",
    question: "¿Cuál de los siguientes procesos ocurre en el núcleo celular?",
    options: [
      "a) Traducción del ARNm en proteínas",
      "b) Transcripción del ADN en ARN",
      "c) Fosforilación oxidativa",
      "d) Glucólisis anaerobia"
    ],
    answer: "b"
  },
  {
    id: 9, topic: "Núcleo",
    question: "Las histonas son proteínas nucleares que cumplen la función de:",
    options: [
      "a) Catalizar la replicación del ADN",
      "b) Empaquetar y organizar el ADN en el núcleo",
      "c) Transportar ARNm hacia el citoplasma",
      "d) Formar los poros de la envoltura nuclear"
    ],
    answer: "b"
  },
  {
    id: 10, topic: "Núcleo",
    question: "El cariotipo de una célula somática humana contiene:",
    options: [
      "a) 23 cromosomas haploides",
      "b) 46 cromosomas diploides organizados en 23 pares",
      "c) 48 cromosomas con 24 pares homólogos",
      "d) 22 autosomas y 2 cromosomas sexuales sin pares"
    ],
    answer: "b"
  },
  {
    id: 11, topic: "Núcleo",
    question: "El ARN mensajero (ARNm), al ser sintetizado en el núcleo, sufre modificaciones antes de salir. ¿Cuál de las siguientes NO es una modificación postranscripcional?",
    options: [
      "a) Adición de la caperuza 5' (cap de 7-metilguanosina)",
      "b) Poliadenilación en el extremo 3'",
      "c) Eliminación de intrones por splicing",
      "d) Fosforilación de aminoácidos en la cadena polipeptídica"
    ],
    answer: "d"
  },
  {
    id: 12, topic: "Núcleo",
    question: "¿En qué tipo de células está AUSENTE el núcleo definido?",
    options: [
      "a) Células eucariotas animales",
      "b) Células procariotas como bacterias",
      "c) Células vegetales con vacuola central",
      "d) Células musculares estriadas"
    ],
    answer: "b"
  },

  // ── MEMBRANA PLASMÁTICA (13–22) ──────────────────────────────────────────
  {
    id: 13, topic: "Membrana Plasmática",
    question: "El modelo que describe la organización actual de la membrana plasmática es el:",
    options: [
      "a) Modelo de mosaico fluido de Singer y Nicolson",
      "b) Modelo de sandwich de Davson y Danielli",
      "c) Modelo de bicapa rígida de Robertson",
      "d) Modelo trilaminar de Gorter y Grendel"
    ],
    answer: "a"
  },
  {
    id: 14, topic: "Membrana Plasmática",
    question: "El componente principal de la membrana plasmática es:",
    options: [
      "a) Proteínas integrales dispuestas en doble hilera",
      "b) Fosfolípidos organizados en bicapa con extremos hidrofóbicos hacia el interior",
      "c) Colesterol dispuesto uniformemente en toda la membrana",
      "d) Glucoproteínas formando una capa continua en la superficie"
    ],
    answer: "b"
  },
  {
    id: 15, topic: "Membrana Plasmática",
    question: "El transporte activo a través de la membrana plasmática se caracteriza por:",
    options: [
      "a) Moverse siempre a favor del gradiente de concentración",
      "b) No requerir proteínas transportadoras",
      "c) Requerir energía (ATP) para mover moléculas contra el gradiente",
      "d) Ser exclusivo de moléculas hidrofóbicas"
    ],
    answer: "c"
  },
  {
    id: 16, topic: "Membrana Plasmática",
    question: "La osmosis es el movimiento de:",
    options: [
      "a) Solutos a través de una membrana semipermeable de menor a mayor concentración",
      "b) Agua a través de una membrana semipermeable de mayor a menor potencial hídrico",
      "c) Proteínas integrales a lo largo del plano de la membrana",
      "d) Iones mediante canales proteicos sin gasto de energía"
    ],
    answer: "b"
  },
  {
    id: 17, topic: "Membrana Plasmática",
    question: "Una célula colocada en una solución hipertónica experimentará:",
    options: [
      "a) Turgencia, ya que el agua entra a la célula por ósmosis",
      "b) Plasmólisis o encogimiento, porque el agua sale de la célula",
      "c) Ningún cambio porque la membrana es impermeable",
      "d) Lisis celular por exceso de agua en el interior"
    ],
    answer: "b"
  },
  {
    id: 18, topic: "Membrana Plasmática",
    question: "Las proteínas periféricas de la membrana plasmática se distinguen de las integrales porque:",
    options: [
      "a) Atraviesan completamente la bicapa lipídica",
      "b) Están unidas débilmente a la superficie de la membrana sin penetrar la bicapa",
      "c) Solo se encuentran en la cara interna de la membrana",
      "d) Forman los canales iónicos selectivos"
    ],
    answer: "b"
  },
  {
    id: 19, topic: "Membrana Plasmática",
    question: "El glucocáliz o cubierta celular está compuesto principalmente de:",
    options: [
      "a) Fosfolípidos y colesterol en la cara externa",
      "b) Cadenas de carbohidratos unidas a proteínas y lípidos de la membrana",
      "c) Proteínas fibrosas como el colágeno y la elastina",
      "d) ADN mitocondrial liberado al exterior celular"
    ],
    answer: "b"
  },
  {
    id: 20, topic: "Membrana Plasmática",
    question: "La endocitosis es un proceso mediante el cual la célula:",
    options: [
      "a) Expulsa vesículas con proteínas hacia el exterior",
      "b) Introduce material del exterior formando vesículas a partir de la membrana plasmática",
      "c) Sintetiza nuevos fosfolípidos para reparar la membrana",
      "d) Transporta iones mediante canales proteicos"
    ],
    answer: "b"
  },
  {
    id: 21, topic: "Membrana Plasmática",
    question: "La bomba sodio-potasio (Na⁺/K⁺ ATPasa) transporta:",
    options: [
      "a) 2 Na⁺ hacia afuera y 3 K⁺ hacia adentro por cada ATP",
      "b) 3 Na⁺ hacia afuera y 2 K⁺ hacia adentro por cada ATP",
      "c) 3 K⁺ hacia afuera y 2 Na⁺ hacia adentro por cada ATP",
      "d) Igual cantidad de Na⁺ y K⁺ en ambas direcciones"
    ],
    answer: "b"
  },
  {
    id: 22, topic: "Membrana Plasmática",
    question: "¿Cuál es la función del colesterol en la membrana plasmática de células animales?",
    options: [
      "a) Proporcionar energía cuando la célula la necesita urgentemente",
      "b) Moderar la fluidez de la membrana evitando que sea demasiado rígida o demasiado fluida",
      "c) Actuar como receptor para hormonas proteicas",
      "d) Formar los canales acuosos (acuaporinas) para el paso de agua"
    ],
    answer: "b"
  },

  // ── PARED CELULAR (23–29) ────────────────────────────────────────────────
  {
    id: 23, topic: "Pared Celular",
    question: "La pared celular de las plantas está compuesta principalmente de:",
    options: [
      "a) Quitina entretejida con glucoproteínas",
      "b) Peptidoglicano (mureína) con cadenas cruzadas",
      "c) Celulosa organizada en microfibrillas embebidas en una matriz de pectinas y hemicelulosas",
      "d) Fosfolípidos y proteínas similares a la membrana plasmática"
    ],
    answer: "c"
  },
  {
    id: 24, topic: "Pared Celular",
    question: "La principal diferencia entre la pared celular primaria y la secundaria en plantas es:",
    options: [
      "a) La pared primaria contiene lignina y la secundaria solo celulosa",
      "b) La pared primaria es delgada y flexible; la secundaria es más gruesa, rígida y se deposita después",
      "c) La pared primaria se forma solo en células meristemáticas",
      "d) Ambas son idénticas en composición pero difieren en ubicación"
    ],
    answer: "b"
  },
  {
    id: 25, topic: "Pared Celular",
    question: "Los plasmodesmos son estructuras que:",
    options: [
      "a) Forman la pared celular secundaria en células leñosas",
      "b) Son canales que atraviesan las paredes celulares comunicando el citoplasma de células adyacentes",
      "c) Anclan el citoesqueleto a la membrana plasmática",
      "d) Degradan la pared celular durante la división"
    ],
    answer: "b"
  },
  {
    id: 26, topic: "Pared Celular",
    question: "La pared celular de los hongos está compuesta de:",
    options: [
      "a) Celulosa, igual que en las plantas",
      "b) Peptidoglicano, igual que en las bacterias",
      "c) Quitina, un polisacárido de N-acetilglucosamina",
      "d) Agar y carragenina en proporciones iguales"
    ],
    answer: "c"
  },
  {
    id: 27, topic: "Pared Celular",
    question: "La laminilla media es la capa que:",
    options: [
      "a) Se forma por última vez durante el crecimiento celular",
      "b) Separa las paredes primarias de células adyacentes y está compuesta de pectinas",
      "c) Constituye la capa más interna de la pared celular secundaria",
      "d) Contiene la mayor concentración de celulosa en la pared vegetal"
    ],
    answer: "b"
  },
  {
    id: 28, topic: "Pared Celular",
    question: "¿Cuál de los siguientes organismos NO posee pared celular?",
    options: [
      "a) Bacteria Escherichia coli",
      "b) Hongo Aspergillus niger",
      "c) Célula animal (hepatocito)",
      "d) Planta Arabidopsis thaliana"
    ],
    answer: "c"
  },
  {
    id: 29, topic: "Pared Celular",
    question: "La turgencia en células vegetales se debe a que:",
    options: [
      "a) La pared celular es completamente impermeable al agua",
      "b) La vacuola central se llena de agua y empuja contra la pared celular rígida",
      "c) El citoplasma produce glucosa que aumenta la presión osmótica",
      "d) Los plasmodesmos permiten el flujo libre de agua entre células"
    ],
    answer: "b"
  },

  // ── RIBOSOMAS (30–36) ────────────────────────────────────────────────────
  {
    id: 30, topic: "Ribosomas",
    question: "Los ribosomas son las organelas responsables de:",
    options: [
      "a) La transcripción del ADN en ARNm",
      "b) La síntesis de proteínas mediante el proceso de traducción",
      "c) La replicación del ADN durante la fase S",
      "d) La producción de ATP por fosforilación oxidativa"
    ],
    answer: "b"
  },
  {
    id: 31, topic: "Ribosomas",
    question: "Los ribosomas eucarióticos tienen una constante de sedimentación de:",
    options: [
      "a) 50S (subunidad mayor) y 30S (subunidad menor)",
      "b) 60S (subunidad mayor) y 40S (subunidad menor), formando un ribosoma 80S",
      "c) 70S en total, iguales a los ribosomas procarióticos",
      "d) 100S, siendo más grandes que los procarióticos en todos los casos"
    ],
    answer: "b"
  },
  {
    id: 32, topic: "Ribosomas",
    question: "Los ribosomas unidos al retículo endoplásmico rugoso sintetizan principalmente proteínas destinadas a:",
    options: [
      "a) Funcionar exclusivamente en el citosol de la célula",
      "b) Ser secretadas, insertadas en membranas o enviadas a lisosomas",
      "c) Formar el citoesqueleto y los microtúbulos",
      "d) Integrarse al material genético del núcleo"
    ],
    answer: "b"
  },
  {
    id: 33, topic: "Ribosomas",
    question: "¿Cuál de los siguientes componentes forma parte de los ribosomas?",
    options: [
      "a) ADN y proteínas histonas",
      "b) ARN ribosomal (ARNr) y proteínas ribosómicas",
      "c) Fosfolípidos y glucoproteínas",
      "d) ARN de transferencia (ARNt) y ARN mensajero (ARNm)"
    ],
    answer: "b"
  },
  {
    id: 34, topic: "Ribosomas",
    question: "Un polisoma (polirribosoma) es:",
    options: [
      "a) Un ribosoma con dos subunidades fusionadas permanentemente",
      "b) Varios ribosomas que traducen simultáneamente un mismo ARNm",
      "c) La unión de ribosomas con el ARNr en el nucléolo",
      "d) Un complejo ribosoma-mitocondria para síntesis de proteínas mitocondriales"
    ],
    answer: "b"
  },
  {
    id: 35, topic: "Ribosomas",
    question: "¿En qué parte de la célula eucariota se sintetizan las subunidades ribosómicas?",
    options: [
      "a) En el citoplasma, directamente sobre los microtúbulos",
      "b) En el retículo endoplásmico rugoso",
      "c) En el nucléolo dentro del núcleo",
      "d) En el aparato de Golgi durante el procesamiento proteico"
    ],
    answer: "c"
  },
  {
    id: 36, topic: "Ribosomas",
    question: "Los ribosomas mitocondriales se asemejan más a los ribosomas de:",
    options: [
      "a) El retículo endoplásmico rugoso",
      "b) El citosol de células eucariotas",
      "c) Las bacterias (procariotas), lo que apoya la teoría endosimbiótica",
      "d) El núcleo celular eucariota"
    ],
    answer: "c"
  },

  // ── RETÍCULO ENDOPLÁSMICO (37–46) ────────────────────────────────────────
  {
    id: 37, topic: "Retículo Endoplásmico",
    question: "El retículo endoplásmico rugoso (RER) se distingue del liso (REL) porque:",
    options: [
      "a) El RER está asociado a ribosomas en su superficie externa",
      "b) El RER produce lípidos y el REL sintetiza proteínas",
      "c) El REL está conectado al núcleo y el RER no",
      "d) El RER solo se encuentra en células vegetales"
    ],
    answer: "a"
  },
  {
    id: 38, topic: "Retículo Endoplásmico",
    question: "Una función importante del retículo endoplásmico liso (REL) es:",
    options: [
      "a) Añadir señales de glucosilación a las proteínas recién sintetizadas",
      "b) La síntesis de lípidos, incluyendo fosfolípidos y esteroides",
      "c) El plegamiento de proteínas secretadas mediante chaperonas",
      "d) La formación de subunidades ribosómicas menores"
    ],
    answer: "b"
  },
  {
    id: 39, topic: "Retículo Endoplásmico",
    question: "El retículo endoplásmico liso de las células hepáticas (hepatocitos) cumple la función adicional de:",
    options: [
      "a) Almacenar hierro para la síntesis de hemoglobina",
      "b) Desintoxicar fármacos y sustancias nocivas mediante enzimas del citocromo P-450",
      "c) Producir bilis directamente y enviarla al conducto hepático",
      "d) Sintetizar las enzimas digestivas del páncreas"
    ],
    answer: "b"
  },
  {
    id: 40, topic: "Retículo Endoplásmico",
    question: "Las proteínas que ingresan al RER son dirigidas allí mediante:",
    options: [
      "a) Una secuencia señal en el extremo N-terminal reconocida por el SRP (partícula de reconocimiento de señal)",
      "b) Una secuencia nuclear de localización (NLS)",
      "c) Vesículas de clatrina provenientes de la membrana plasmática",
      "d) El gradiente de pH entre el RER y el citosol"
    ],
    answer: "a"
  },
  {
    id: 41, topic: "Retículo Endoplásmico",
    question: "La N-glucosilación de proteínas ocurre principalmente en:",
    options: [
      "a) El citosol, antes de que la proteína entre al RER",
      "b) El lumen del retículo endoplásmico rugoso",
      "c) Las vesículas de transporte entre el RER y Golgi",
      "d) La cara trans del aparato de Golgi"
    ],
    answer: "b"
  },
  {
    id: 42, topic: "Retículo Endoplásmico",
    question: "El retículo endoplásmico liso del músculo esquelético (llamado retículo sarcoplásmico) cumple la función de:",
    options: [
      "a) Sintetizar las proteínas contráctiles actina y miosina",
      "b) Almacenar y liberar iones de calcio para regular la contracción muscular",
      "c) Producir ATP mediante fosforilación oxidativa",
      "d) Degradar el glucógeno para liberar glucosa"
    ],
    answer: "b"
  },
  {
    id: 43, topic: "Retículo Endoplásmico",
    question: "¿Qué ocurre con las proteínas mal plegadas en el RER?",
    options: [
      "a) Se secretan al exterior de la célula directamente",
      "b) Son retenidas por chaperonas y, si no se corrigen, son enviadas al citosol para su degradación por proteasomas (ERAD)",
      "c) Se transportan al lisosoma sin pasar por el aparato de Golgi",
      "d) Se incorporan a la membrana plasmática como proteínas integrales"
    ],
    answer: "b"
  },
  {
    id: 44, topic: "Retículo Endoplásmico",
    question: "El retículo endoplásmico liso es particularmente abundante en:",
    options: [
      "a) Células secretoras de proteínas como las células acinares del páncreas",
      "b) Células que sintetizan esteroides, como las células de Leydig en los testículos",
      "c) Neuronas que requieren alta tasa de síntesis de proteínas",
      "d) Células musculares cardiacas que necesitan generar ATP"
    ],
    answer: "b"
  },
  {
    id: 45, topic: "Retículo Endoplásmico",
    question: "Las vesículas de transporte que llevan proteínas del RER al aparato de Golgi están recubiertas de:",
    options: [
      "a) Clatrina, una proteína de cubierta para endocitosis",
      "b) Proteínas COPI para el transporte retrógrado",
      "c) Proteínas COPII que facilitan el transporte anterógrado RER → Golgi",
      "d) Dinamina para la formación de vesículas grandes"
    ],
    answer: "c"
  },
  {
    id: 46, topic: "Retículo Endoplásmico",
    question: "El estrés del retículo endoplásmico ocurre cuando:",
    options: [
      "a) Se acumulan demasiados lípidos en la membrana del RER",
      "b) Se acumulan proteínas mal plegadas en el lumen del RER, activando la respuesta UPR",
      "c) El RER pierde su conexión física con el núcleo celular",
      "d) Las vesículas COPII no pueden formarse por falta de GTP"
    ],
    answer: "b"
  },

  // ── COMPLEJO DE GOLGI (47–54) ────────────────────────────────────────────
  {
    id: 47, topic: "Complejo de Golgi",
    question: "El aparato de Golgi funciona principalmente como:",
    options: [
      "a) El lugar donde se replica el ADN antes de la mitosis",
      "b) El centro de procesamiento, clasificación y distribución de proteínas y lípidos",
      "c) El sitio de producción de ATP en presencia de oxígeno",
      "d) La estructura que degrada organelos dañados mediante autofagia"
    ],
    answer: "b"
  },
  {
    id: 48, topic: "Complejo de Golgi",
    question: "Las caras del aparato de Golgi se denominan:",
    options: [
      "a) Cara apical (recibe vesículas) y cara basal (envía vesículas)",
      "b) Cara cis (recibe del RER) y cara trans (envía a destinos finales)",
      "c) Cara proximal (hacia el núcleo) y cara distal (hacia la membrana)",
      "d) Cara interna (hacia el citosol) y cara externa (hacia el espacio extracelular)"
    ],
    answer: "b"
  },
  {
    id: 49, topic: "Complejo de Golgi",
    question: "La O-glucosilación de proteínas ocurre principalmente en:",
    options: [
      "a) El retículo endoplásmico rugoso durante la síntesis",
      "b) El aparato de Golgi, como modificación postraduccional",
      "c) El citosol después de la síntesis ribosomal",
      "d) La membrana plasmática después de la exocitosis"
    ],
    answer: "b"
  },
  {
    id: 50, topic: "Complejo de Golgi",
    question: "Los lisosomas se originan a partir de vesículas provenientes del:",
    options: [
      "a) Retículo endoplásmico liso únicamente",
      "b) Aparato de Golgi, que contiene enzimas hidrolíticas",
      "c) Núcleo celular durante la interfase",
      "d) Mitocondria cuando el ATP es escaso"
    ],
    answer: "b"
  },
  {
    id: 51, topic: "Complejo de Golgi",
    question: "¿Cuál de los siguientes eventos ocurre en el aparato de Golgi?",
    options: [
      "a) Primera N-glucosilación de las proteínas secretadas",
      "b) Modificación, maduración y empaquetamiento de proteínas en vesículas de secreción",
      "c) Síntesis de proteínas a partir de aminoácidos libres",
      "d) Replicación de los lípidos de la membrana plasmática"
    ],
    answer: "b"
  },
  {
    id: 52, topic: "Complejo de Golgi",
    question: "La exocitosis constitutiva en el aparato de Golgi se diferencia de la regulada porque:",
    options: [
      "a) La constitutiva requiere una señal hormonal para liberar vesículas",
      "b) La constitutiva es continua y no requiere señal, mientras que la regulada espera un estímulo",
      "c) La constitutiva solo ocurre en células glandulares especializadas",
      "d) La regulada siempre libera enzimas digestivas al exterior"
    ],
    answer: "b"
  },
  {
    id: 53, topic: "Complejo de Golgi",
    question: "El manosa-6-fosfato (M6P) es una señal que dirige proteínas hacia:",
    options: [
      "a) La membrana plasmática para su inserción como proteínas integrales",
      "b) Los lisosomas, ya que los receptores M6P se encuentran en la red trans-Golgi",
      "c) El retículo endoplásmico para su reprocesamiento",
      "d) El núcleo para su regulación transcripcional"
    ],
    answer: "b"
  },
  {
    id: 54, topic: "Complejo de Golgi",
    question: "Las células caliciformes del intestino tienen un aparato de Golgi muy desarrollado porque:",
    options: [
      "a) Producen grandes cantidades de ATP para la absorción activa",
      "b) Secretan grandes cantidades de glucoproteínas (mucinas) que forman el moco intestinal",
      "c) Almacenan lípidos absorbidos y los reempacan para su transporte",
      "d) Sintetizan colágeno para la lámina propia del intestino"
    ],
    answer: "b"
  },

  // ── MITOCONDRIA (55–64) ──────────────────────────────────────────────────
  {
    id: 55, topic: "Mitocondria",
    question: "La mitocondria es conocida como la 'central energética de la célula' porque:",
    options: [
      "a) Almacena glucosa en forma de glucógeno para emergencias",
      "b) Produce la mayor parte del ATP celular mediante la fosforilación oxidativa",
      "c) Genera energía lumínica a partir de energía química",
      "d) Sintetiza ácidos grasos para almacenar energía en forma de lípidos"
    ],
    answer: "b"
  },
  {
    id: 56, topic: "Mitocondria",
    question: "La membrana interna mitocondrial forma pliegues llamados:",
    options: [
      "a) Tilacoides, donde se lleva a cabo la fotosíntesis",
      "b) Crestas (cristae), que aumentan la superficie para la cadena transportadora de electrones",
      "c) Laminillas, que contienen los pigmentos fotosintéticos",
      "d) Grana, estructuras apiladas que maximizan la producción de ATP"
    ],
    answer: "b"
  },
  {
    id: 57, topic: "Mitocondria",
    question: "El ciclo de Krebs (ciclo del ácido cítrico) ocurre en:",
    options: [
      "a) La membrana interna de la mitocondria",
      "b) La matriz mitocondrial",
      "c) El citosol, cerca del retículo endoplásmico",
      "d) El espacio intermembrana de la mitocondria"
    ],
    answer: "b"
  },
  {
    id: 58, topic: "Mitocondria",
    question: "La teoría endosimbiótica propone que las mitocondrias se originaron a partir de:",
    options: [
      "a) La fragmentación del núcleo celular primitivo",
      "b) La invaginación de la membrana plasmática de células eucariotas ancestrales",
      "c) Bacterias aeróbicas que fueron incorporadas por fagocitosis a células hospederas",
      "d) La fusión de vacuolas digestivas con fragmentos de ADN"
    ],
    answer: "c"
  },
  {
    id: 59, topic: "Mitocondria",
    question: "¿Cuál de las siguientes características comparte la mitocondria con las bacterias y apoya la teoría endosimbiótica?",
    options: [
      "a) Posee membrana doble y sus ribosomas son del tipo 70S",
      "b) Contiene histonas para empaquetar su ADN circular",
      "c) Se replica mediante mitosis igual que el núcleo",
      "d) Produce ATP únicamente por glucólisis anaerobia"
    ],
    answer: "a"
  },
  {
    id: 60, topic: "Mitocondria",
    question: "La ATP sintasa (complejo V) en la membrana mitocondrial interna produce ATP mediante:",
    options: [
      "a) La oxidación directa del NADH sin flujo de protones",
      "b) El flujo de protones (H⁺) a favor del gradiente desde el espacio intermembrana hacia la matriz",
      "c) La hidrólisis de GTP obtenido en el ciclo de Krebs",
      "d) La reducción del oxígeno molecular a agua en el complejo IV"
    ],
    answer: "b"
  },
  {
    id: 61, topic: "Mitocondria",
    question: "La apoptosis (muerte celular programada) involucra a la mitocondria porque:",
    options: [
      "a) La mitocondria activa directamente la glucólisis para eliminar ATP",
      "b) Libera citocromo c al citosol, activando la cascada de caspasas",
      "c) Produce radicales libres que dañan el núcleo desencadenando la muerte",
      "d) Se fragmenta y sus fragmentos actúan como señales inflamatorias"
    ],
    answer: "b"
  },
  {
    id: 62, topic: "Mitocondria",
    question: "¿Cuántas moléculas de ATP se producen aproximadamente por la oxidación completa de una molécula de glucosa mediante glucólisis + ciclo de Krebs + fosforilación oxidativa?",
    options: [
      "a) 2 moléculas de ATP",
      "b) 8 moléculas de ATP",
      "c) Aproximadamente 30-32 moléculas de ATP",
      "d) 38 moléculas de ATP (número exacto e invariable)"
    ],
    answer: "c"
  },
  {
    id: 63, topic: "Mitocondria",
    question: "El ADN mitocondrial humano se hereda principalmente:",
    options: [
      "a) De ambos progenitores por igual, combinándose en la fecundación",
      "b) Solo del padre, ya que los espermatozoides aportan muchas mitocondrias",
      "c) Por vía materna exclusivamente, ya que proviene del ovocito",
      "d) De ninguno de los progenitores; se genera de novo en cada célula"
    ],
    answer: "c"
  },
  {
    id: 64, topic: "Mitocondria",
    question: "El espacio intermembrana de la mitocondria tiene un pH más bajo (más ácido) que la matriz debido a:",
    options: [
      "a) La acción del complejo II que bombea H⁺ activamente",
      "b) El bombeo de protones por los complejos I, III y IV de la cadena respiratoria",
      "c) La producción de CO₂ ácido en el ciclo de Krebs dentro de ese compartimento",
      "d) La entrada de agua que diluye el pH de la matriz"
    ],
    answer: "b"
  },

  // ── VACUOLAS (65–71) ─────────────────────────────────────────────────────
  {
    id: 65, topic: "Vacuolas",
    question: "La vacuola central de las células vegetales maduras cumple principalmente la función de:",
    options: [
      "a) Producir oxígeno durante la fotosíntesis",
      "b) Mantener la turgencia celular, almacenar nutrientes y contribuir al crecimiento celular",
      "c) Degradar proteínas dañadas mediante enzimas proteolíticas del citosol",
      "d) Sintetizar celulosa para la pared celular primaria"
    ],
    answer: "b"
  },
  {
    id: 66, topic: "Vacuolas",
    question: "La membrana que rodea la vacuola central en plantas se denomina:",
    options: [
      "a) Membrana plasmática externa",
      "b) Tonoplasto",
      "c) Membrana tilacoidea",
      "d) Envoltura plastidial interna"
    ],
    answer: "b"
  },
  {
    id: 67, topic: "Vacuolas",
    question: "Las vacuolas contráctiles que se encuentran en protozoos de agua dulce cumplen la función de:",
    options: [
      "a) Almacenar glucógeno como reserva energética",
      "b) Regular el contenido de agua expulsando el exceso para evitar la lisis celular",
      "c) Fagocitar partículas de alimento del medio acuoso",
      "d) Producir enzimas digestivas para la digestión intracelular"
    ],
    answer: "b"
  },
  {
    id: 68, topic: "Vacuolas",
    question: "En células animales, las vacuolas son generalmente más pequeñas y temporales. Las vacuolas fagocíticas (fagosomas) se forman cuando:",
    options: [
      "a) El retículo endoplásmico libera vesículas hacia el citosol",
      "b) La membrana plasmática engloba partículas grandes formando una vesícula intracelular",
      "c) Los lisosomas se fusionan con el aparato de Golgi",
      "d) Las mitocondrias liberan fragmentos durante la apoptosis"
    ],
    answer: "b"
  },
  {
    id: 69, topic: "Vacuolas",
    question: "La vacuola central vegetal puede ocupar hasta ______ del volumen celular en células maduras:",
    options: [
      "a) 10–20%",
      "b) 30–40%",
      "c) 50–90%",
      "d) Exactamente el 100%, desplazando todos los organelos"
    ],
    answer: "c"
  },
  {
    id: 70, topic: "Vacuolas",
    question: "Algunas vacuolas vegetales contienen pigmentos como antocianinas que dan color a flores y frutos. ¿En cuál compartimento se acumulan?",
    options: [
      "a) En el citosol libre entre organelas",
      "b) En el interior acuoso (jugo vacuolar) de la vacuola central",
      "c) En los cloroplastos junto a los carotenoides",
      "d) En la pared celular secundaria impregnada de lignina"
    ],
    answer: "b"
  },
  {
    id: 71, topic: "Vacuolas",
    question: "¿Cuál de los siguientes enunciados sobre las vacuolas es CORRECTO?",
    options: [
      "a) Las vacuolas solo se encuentran en células eucariotas vegetales",
      "b) Las vacuolas son compartimentos membranosos que pueden tener funciones de almacenamiento, digestión y regulación osmótica",
      "c) Las vacuolas carecen de membrana y son parte del citosol",
      "d) Las vacuolas animales son siempre permanentes y de gran tamaño"
    ],
    answer: "b"
  },

  // ── LISOSOMAS Y PEROXISOMAS (72–79) ──────────────────────────────────────
  {
    id: 72, topic: "Lisosomas y Peroxisomas",
    question: "Los lisosomas son organelas que contienen enzimas hidrolíticas. ¿Cuál es el pH óptimo de estas enzimas?",
    options: [
      "a) pH 7.4 (neutro, igual al citosol)",
      "b) pH 4.5–5 (ácido), mantenido por bombas de protones en su membrana",
      "c) pH 8–9 (básico), para evitar la digestión de la membrana del lisosoma",
      "d) pH 6 (ligeramente ácido), dependiendo del tipo celular"
    ],
    answer: "b"
  },
  {
    id: 73, topic: "Lisosomas y Peroxisomas",
    question: "La autofagia es un proceso en el que:",
    options: [
      "a) La célula ingiere partículas del exterior por endocitosis",
      "b) La célula digiere sus propios componentes dañados u obsoletos mediante lisosomas",
      "c) Los lisosomas se fusionan con la membrana plasmática para liberar enzimas",
      "d) Los peroxisomas degradan ácidos grasos para producir ATP"
    ],
    answer: "b"
  },
  {
    id: 74, topic: "Lisosomas y Peroxisomas",
    question: "La enfermedad de Tay-Sachs es un ejemplo de enfermedad lisosómica causada por:",
    options: [
      "a) Exceso de actividad de la hexosaminidasa A que degrada gangliósidos normales",
      "b) Deficiencia de la hexosaminidasa A, lo que causa acumulación de gangliósidos GM2 en neuronas",
      "c) La ruptura espontánea de los lisosomas en células nerviosas",
      "d) La falta de manosa-6-fosfato que impide dirigir enzimas al lisosoma"
    ],
    answer: "b"
  },
  {
    id: 75, topic: "Lisosomas y Peroxisomas",
    question: "Los peroxisomas reciben ese nombre porque:",
    options: [
      "a) Producen peroxidasa para oxidar lípidos de membrana",
      "b) Producen y degradan peróxido de hidrógeno (H₂O₂) mediante catalasa",
      "c) Contienen peroxinas que forman el poro nuclear",
      "d) Generan superóxido como señal de apoptosis"
    ],
    answer: "b"
  },
  {
    id: 76, topic: "Lisosomas y Peroxisomas",
    question: "Una función importante de los peroxisomas en células hepáticas y renales es:",
    options: [
      "a) La síntesis de proteínas de exportación como la albúmina",
      "b) La beta-oxidación de ácidos grasos de cadena muy larga y la degradación de aminoácidos",
      "c) La producción de bilis para la digestión de lípidos en el intestino",
      "d) El almacenamiento de glucógeno como reserva energética"
    ],
    answer: "b"
  },
  {
    id: 77, topic: "Lisosomas y Peroxisomas",
    question: "La diferencia principal entre lisosomas y peroxisomas radica en que:",
    options: [
      "a) Los lisosomas tienen membrana doble y los peroxisomas tienen membrana simple",
      "b) Los lisosomas usan hidrólisis ácida para degradar macromoléculas, mientras los peroxisomas usan oxidaciones y contienen catalasa",
      "c) Los peroxisomas se originan del aparato de Golgi y los lisosomas del RER",
      "d) Los lisosomas solo se encuentran en células animales y los peroxisomas solo en vegetales"
    ],
    answer: "b"
  },
  {
    id: 78, topic: "Lisosomas y Peroxisomas",
    question: "La heterofagia es el proceso lisosómico mediante el cual:",
    options: [
      "a) La célula digiere sus propias mitocondrias envejecidas",
      "b) Material externo ingerido por endocitosis es digerido al fusionarse con lisosomas",
      "c) Las enzimas lisosómicas salen al espacio extracelular para digerir la matriz",
      "d) Los lisosomas se autodestruyen al final del ciclo celular"
    ],
    answer: "b"
  },
  {
    id: 79, topic: "Lisosomas y Peroxisomas",
    question: "Los peroxisomas se multiplican en la célula mediante:",
    options: [
      "a) Brotación a partir del aparato de Golgi, igual que los lisosomas",
      "b) División por fisión binaria de peroxisomas preexistentes o formación de novo desde el RER",
      "c) Fusión de vesículas del retículo endoplásmico rugoso con enzimas oxidativas",
      "d) Replicación de su ADN propio, similar a la mitocondria"
    ],
    answer: "b"
  },

  // ── CITOESQUELETO Y CENTRIOLOS (80–87) ───────────────────────────────────
  {
    id: 80, topic: "Citoesqueleto y Centriolos",
    question: "El citoesqueleto está formado por tres tipos principales de filamentos. ¿Cuál de las siguientes opciones los enumera correctamente?",
    options: [
      "a) Microtúbulos, microfilamentos de actina y filamentos intermedios",
      "b) Macrofilamentos, microfilamentos de miosina y nanotúbulos",
      "c) Microtúbulos, filamentos de queratina exclusivamente y microfilamentos de colágeno",
      "d) Filamentos de ADN, microtúbulos y filamentos de elastina"
    ],
    answer: "a"
  },
  {
    id: 81, topic: "Citoesqueleto y Centriolos",
    question: "Los microtúbulos están compuestos de dímeros de:",
    options: [
      "a) Actina G polimerizados en forma de doble hélice",
      "b) α-tubulina y β-tubulina ensamblados en protofilamentos",
      "c) Vimentina y desmina entrelazados en estructuras estables",
      "d) Miosina II organizados en filamentos gruesos"
    ],
    answer: "b"
  },
  {
    id: 82, topic: "Citoesqueleto y Centriolos",
    question: "Los centriolos son estructuras formadas por:",
    options: [
      "a) 9 tripletes de microtúbulos dispuestos en arreglo circular (9+0)",
      "b) 9 dobletes de microtúbulos más 2 microtúbulos centrales (9+2)",
      "c) 7 microtúbulos simples en configuración hexagonal",
      "d) Filamentos de actina y miosina en proporción 2:1"
    ],
    answer: "a"
  },
  {
    id: 83, topic: "Citoesqueleto y Centriolos",
    question: "El huso mitótico, que separa los cromosomas durante la mitosis, está formado por:",
    options: [
      "a) Microfilamentos de actina que se contraen para separar cromatidas",
      "b) Microtúbulos que se polimerizan desde los centrosomas hacia los cinetocoros de los cromosomas",
      "c) Filamentos intermedios de vimentina que forman una red rígida",
      "d) Filamentos de miosina que se deslizan sobre filamentos de actina"
    ],
    answer: "b"
  },
  {
    id: 84, topic: "Citoesqueleto y Centriolos",
    question: "Los cilios y flagelos en células eucariotas presentan la organización:",
    options: [
      "a) 9+0 (9 tripletes sin par central), igual que los centriolos",
      "b) 9+2 (9 dobletes periféricos más 2 microtúbulos centrales)",
      "c) 7+2 (7 singletes periféricos más 2 centrales)",
      "d) 12+0 (12 dobletes sin microtúbulos centrales)"
    ],
    answer: "b"
  },
  {
    id: 85, topic: "Citoesqueleto y Centriolos",
    question: "Los filamentos intermedios tienen como función principal:",
    options: [
      "a) Generar movimiento celular y transporte intracelular de vesículas",
      "b) Proporcionar resistencia mecánica y estabilidad estructural a la célula",
      "c) Separar los cromosomas durante la meiosis",
      "d) Polimerizar y despolimerizar rápidamente para permitir la migración celular"
    ],
    answer: "b"
  },
  {
    id: 86, topic: "Citoesqueleto y Centriolos",
    question: "La colchicina es un fármaco que interfiere con la polimerización de microtúbulos. Su uso en oncología se basa en que:",
    options: [
      "a) Activa las histonas para compactar el ADN e impedir la transcripción",
      "b) Impide la formación del huso mitótico, bloqueando la división de células cancerosas",
      "c) Aumenta la permeabilidad de la membrana plasmática induciendo apoptosis",
      "d) Inhibe los ribosomas del retículo endoplásmico rugoso en células tumorales"
    ],
    answer: "b"
  },
  {
    id: 87, topic: "Citoesqueleto y Centriolos",
    question: "Las proteínas motoras que se desplazan sobre microtúbulos para transportar vesículas hacia el extremo (+) (hacia la periferia celular) son las:",
    options: [
      "a) Dineínas citoplásmicas, que se mueven hacia el extremo (-)",
      "b) Cinesinas, que se mueven hacia el extremo (+) alejándose del centrosoma",
      "c) Miosinas de clase V, que se mueven sobre microfilamentos de actina",
      "d) Coheínas, que unen cromatidas hermanas en la mitosis"
    ],
    answer: "b"
  },

  // ── CITOPLASMA (88–94) ────────────────────────────────────────────────────
  {
    id: 88, topic: "Citoplasma",
    question: "El citoplasma está definido como:",
    options: [
      "a) El contenido del núcleo celular, incluyendo la cromatina y el nucléolo",
      "b) Todo el contenido de la célula comprendido entre la membrana plasmática y la envoltura nuclear, incluyendo organelos y citosol",
      "c) Solo el líquido viscoso que rodea los organelos, excluyendo el citoesqueleto",
      "d) La región entre la membrana plasmática y la pared celular en organismos vegetales"
    ],
    answer: "b"
  },
  {
    id: 89, topic: "Citoplasma",
    question: "El citosol es el componente líquido del citoplasma. Está compuesto principalmente de:",
    options: [
      "a) Lípidos y esteroles en solución acuosa hipertónica",
      "b) Agua, iones, proteínas solubles, metabolitos y ARN libre",
      "c) Glucógeno y triglicéridos como fuente de energía de acceso rápido",
      "d) Colágeno y otras proteínas fibrosas que dan soporte estructural"
    ],
    answer: "b"
  },
  {
    id: 90, topic: "Citoplasma",
    question: "La glucólisis, primera etapa del catabolismo de la glucosa, ocurre en:",
    options: [
      "a) La membrana interna de la mitocondria",
      "b) El citosol (citoplasma no organélar)",
      "c) La matriz mitocondrial junto con el ciclo de Krebs",
      "d) El retículo endoplásmico liso"
    ],
    answer: "b"
  },
  {
    id: 91, topic: "Citoplasma",
    question: "Los cuerpos de inclusión citoplasmáticos son:",
    options: [
      "a) Organelos membranosos que se replican autónomamente",
      "b) Acumulaciones no membranosas de sustancias como glucógeno, lípidos o pigmentos",
      "c) Fragmentos de ADN extracromosómico que codifican toxinas",
      "d) Estructuras transitorias formadas solo durante la mitosis"
    ],
    answer: "b"
  },
  {
    id: 92, topic: "Citoplasma",
    question: "El movimiento citoplasmático (ciclosis) es un fenómeno observado principalmente en células vegetales que:",
    options: [
      "a) Permite la división del núcleo durante la mitosis",
      "b) Facilita la distribución de nutrientes, organelos y productos metabólicos dentro de la célula",
      "c) Genera ATP adicional mediante la fricción entre organelos",
      "d) Elimina productos de desecho a través de la pared celular"
    ],
    answer: "b"
  },
  {
    id: 93, topic: "Citoplasma",
    question: "El pH del citosol en células en condiciones normales es aproximadamente:",
    options: [
      "a) pH 4–5 (ácido, similar al lisosoma)",
      "b) pH 7.2–7.4 (ligeramente alcalino)",
      "c) pH 8–9 (básico, similar al espacio intermembrana mitocondrial)",
      "d) pH 6.0 exacto en todos los tipos celulares"
    ],
    answer: "b"
  },
  {
    id: 94, topic: "Citoplasma",
    question: "Los gránulos de glucógeno en el citoplasma de hepatocitos y células musculares funcionan como:",
    options: [
      "a) Señales para la apoptosis cuando se acumulan en exceso",
      "b) Reserva de glucosa de rápido acceso que puede movilizarse cuando la célula necesita energía",
      "c) Material estructural que refuerza el citoesqueleto",
      "d) Receptores de insulina en la superficie citoplasmática"
    ],
    answer: "b"
  },

  // ── PREGUNTAS INTEGRADORAS (95–100) ──────────────────────────────────────
  {
    id: 95, topic: "Integración",
    question: "¿Cuál es la ruta correcta que sigue una proteína secretada desde su síntesis hasta su liberación al exterior celular?",
    options: [
      "a) Ribosoma libre → citosol → vacuola → membrana plasmática",
      "b) Ribosoma en RER → lumen del RER → vesícula COPII → Golgi (cis→trans) → vesícula de secreción → exocitosis",
      "c) Ribosoma libre → mitocondria → Golgi → membrana plasmática",
      "d) Ribosoma en RER → lisosoma → Golgi (trans→cis) → exocitosis"
    ],
    answer: "b"
  },
  {
    id: 96, topic: "Integración",
    question: "Una célula expuesta a una solución hipotónica experimentará un aumento de volumen. En una célula vegetal, esto no causa lisis porque:",
    options: [
      "a) La membrana plasmática es impermeable al agua en células vegetales",
      "b) La pared celular rígida limita la expansión y genera presión de turgencia",
      "c) La vacuola central expulsa el exceso de agua hacia el citosol",
      "d) Los plasmodesmos redistribuyen el agua a células vecinas automáticamente"
    ],
    answer: "b"
  },
  {
    id: 97, topic: "Integración",
    question: "La teoría endosimbiótica de Lynn Margulis sugiere que tanto mitocondrias como cloroplastos son descendientes de procariotas. ¿Cuál de las siguientes evidencias apoya esta teoría?",
    options: [
      "a) Ambas organelas tienen ribosomas 80S y ADN lineal como las células eucariotas",
      "b) Ambas poseen doble membrana, ADN circular propio, ribosomas 70S y se replican por fisión",
      "c) Ambas sintetizan sus propias histonas para empaquetar su ADN",
      "d) Ambas organelas son capaces de moverse de una célula a otra mediante exocitosis"
    ],
    answer: "b"
  },
  {
    id: 98, topic: "Integración",
    question: "La enfermedad de Zellweger es un trastorno causado por la incapacidad de importar proteínas a los peroxisomas. ¿Qué efecto metabólico se esperaría?",
    options: [
      "a) Acumulación de proteínas mal plegadas en el RER",
      "b) Acumulación de ácidos grasos de cadena muy larga y deficiencia en la síntesis de plasmalógenos",
      "c) Aumento de producción de ATP por sobreactivación mitocondrial",
      "d) Déficit de glucosa porque los peroxisomas participan en la gluconeogénesis"
    ],
    answer: "b"
  },
  {
    id: 99, topic: "Integración",
    question: "¿Cuál de las siguientes afirmaciones describe correctamente la diferencia entre células procariotas y eucariotas?",
    options: [
      "a) Las células procariotas tienen mitocondrias pero carecen de núcleo definido",
      "b) Las células eucariotas tienen núcleo con membrana y organelos membranosos; las procariotas carecen de ambos",
      "c) Las células procariotas tienen retículo endoplásmico pero no aparato de Golgi",
      "d) Las células eucariotas solo se reproducen por fisión binaria, igual que las procariotas"
    ],
    answer: "b"
  },
  {
    id: 100, topic: "Integración",
    question: "Al comparar la estructura de una célula animal y una célula vegetal, ¿cuáles son las estructuras EXCLUSIVAS de la célula vegetal?",
    options: [
      "a) Mitocondrias, ribosomas y membrana plasmática",
      "b) Pared celular de celulosa, cloroplastos y vacuola central grande",
      "c) Lisosomas, centriolos y retículo endoplásmico rugoso",
      "d) Aparato de Golgi, núcleo y citoesqueleto de microtúbulos"
    ],
    answer: "b"
  }
];

const TOPIC_COLORS = {
  "Núcleo": "#3b9eff",
  "Membrana Plasmática": "#ec4899",
  "Pared Celular": "#34d399",
  "Ribosomas": "#f59e0b",
  "Retículo Endoplásmico": "#3b82f6",
  "Complejo de Golgi": "#a78bfa",
  "Mitocondria": "#f43f5e",
  "Vacuolas": "#06b6d4",
  "Lisosomas y Peroxisomas": "#f97316",
  "Citoesqueleto y Centriolos": "#84cc16",
  "Citoplasma": "#14b8a6",
  "Integración": "#a855f7",
};

const TOPIC_ICONS = {
  "Núcleo": "🔵",
  "Membrana Plasmática": "🟣",
  "Pared Celular": "🟢",
  "Ribosomas": "🟡",
  "Retículo Endoplásmico": "🔷",
  "Complejo de Golgi": "🟪",
  "Mitocondria": "🔴",
  "Vacuolas": "🩵",
  "Lisosomas y Peroxisomas": "🟠",
  "Citoesqueleto y Centriolos": "💚",
  "Citoplasma": "🩵",
  "Integración": "⭐",
};

export default function CuestionarioCelula() {
  const [mode, setMode] = useState("menu"); // menu | exam | review | results
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selected, setSelected] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(90 * 60);
  const [timerActive, setTimerActive] = useState(false);
  const [filterTopic, setFilterTopic] = useState("Todos");
  const [reviewFilter, setReviewFilter] = useState("todos"); // todos | correctas | incorrectas
  const [showExplanation, setShowExplanation] = useState(false);

  const topics = ["Todos", ...Object.keys(TOPIC_COLORS)];

  const filteredQ = filterTopic === "Todos"
    ? questions
    : questions.filter(q => q.topic === filterTopic);

  useEffect(() => {
    if (!timerActive || timeLeft <= 0) return;
    const t = setInterval(() => setTimeLeft(p => p - 1), 1000);
    return () => clearInterval(t);
  }, [timerActive, timeLeft]);

  useEffect(() => {
    if (timeLeft <= 0 && timerActive) {
      setTimerActive(false);
      setMode("results");
    }
  }, [timeLeft, timerActive]);

  const startExam = () => {
    setAnswers({});
    setSelected(null);
    setConfirmed(false);
    setCurrent(0);
    setTimeLeft(90 * 60);
    setTimerActive(true);
    setMode("exam");
  };

  const confirmAnswer = () => {
    if (!selected) return;
    setAnswers(prev => ({ ...prev, [filteredQ[current].id]: selected }));
    setConfirmed(true);
  };

  const next = () => {
    if (current < filteredQ.length - 1) {
      setCurrent(c => c + 1);
      setSelected(answers[filteredQ[current + 1]?.id] || null);
      setConfirmed(!!answers[filteredQ[current + 1]?.id]);
    } else {
      setTimerActive(false);
      setMode("results");
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(c => c - 1);
      setSelected(answers[filteredQ[current - 1]?.id] || null);
      setConfirmed(!!answers[filteredQ[current - 1]?.id]);
    }
  };

  const goToQuestion = (idx) => {
    setCurrent(idx);
    setSelected(answers[filteredQ[idx]?.id] || null);
    setConfirmed(!!answers[filteredQ[idx]?.id]);
    setShowExplanation(false);
  };

  const score = Object.entries(answers).reduce((acc, [id, ans]) => {
    const q = questions.find(q => q.id === Number(id));
    return acc + (q?.answer === ans ? 1 : 0);
  }, 0);

  const total = filteredQ.length;
  const answered = Object.keys(answers).length;
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;

  const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const getOptionStyle = (opt) => {
    const letter = opt.charAt(0);
    if (!confirmed) {
      return letter === selected
        ? { background: "rgba(59,158,255,0.15)", border: "2px solid #3b9eff", color: "#e8eaf0", cursor: "pointer" }
        : { background: "rgba(255,255,255,0.04)", border: "2px solid #252830", color: "#c8cad4", cursor: "pointer" };
    }
    const q = filteredQ[current];
    if (letter === q.answer) return { background: "rgba(52,211,153,0.15)", border: "2px solid #34d399", color: "#6ee7b7" };
    if (letter === selected && letter !== q.answer) return { background: "rgba(244,63,94,0.15)", border: "2px solid #f43f5e", color: "#fda4af" };
    return { background: "rgba(255,255,255,0.02)", border: "2px solid #1e2230", color: "#5a6070" };
  };

  const reviewQuestions = filteredQ.filter(q => {
    if (reviewFilter === "correctas") return answers[q.id] === q.answer;
    if (reviewFilter === "incorrectas") return answers[q.id] && answers[q.id] !== q.answer;
    if (reviewFilter === "sin_contestar") return !answers[q.id];
    return true;
  });

  // ── MENU ──────────────────────────────────────────────────────────────────
  if (mode === "menu") return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", background: "transparent" }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
      <div style={{ maxWidth: 720, width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ fontSize: 64, marginBottom: 8 }}>🔬</div>
          <h1 style={{ color: "#e8eaf0", fontSize: 32, fontWeight: "bold", marginBottom: 6, letterSpacing: "-0.5px" }}>
            Cuestionario: La Célula
          </h1>
          <p style={{ color: "#5a6070", fontSize: 16 }}>
            100 reactivos · Estilo UNAM / EXANI II
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 16, flexWrap: "wrap" }}>
            {["🕐 90 minutos", "📋 100 preguntas", "🔬 13 temas"].map(badge => (
              <span key={badge} style={{ background: "rgba(59,158,255,0.2)", color: "#a5b4fc", padding: "4px 14px", borderRadius: 20, fontSize: 13, border: "1px solid rgba(59,158,255,0.4)" }}>{badge}</span>
            ))}
          </div>
        </div>

        <div style={{ background: "#13151a", borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", padding: 24, marginBottom: 20 }}>
          <p style={{ color: "#5a6070", fontSize: 13, marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>Filtrar por tema</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {topics.map(t => (
              <button key={t} onClick={() => setFilterTopic(t)} style={{ padding: "6px 14px", borderRadius: 20, fontSize: 12, border: "1px solid", cursor: "pointer", transition: "all 0.2s", background: filterTopic === t ? TOPIC_COLORS[t] || "#3b9eff" : "transparent", color: filterTopic === t ? "white" : "#5a6070", borderColor: filterTopic === t ? TOPIC_COLORS[t] || "#3b9eff" : "rgba(255,255,255,0.15)" }}>
                {t === "Todos" ? "📚 Todos" : `${TOPIC_ICONS[t] || ""} ${t}`}
              </button>
            ))}
          </div>
          <p style={{ color: "#5a6070", fontSize: 12, marginTop: 10 }}>
            {filterTopic === "Todos" ? "100 reactivos seleccionados" : `${filteredQ.length} reactivo${filteredQ.length !== 1 ? "s" : ""} de "${filterTopic}"`}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
          {Object.entries(TOPIC_COLORS).map(([topic, color]) => {
            const count = questions.filter(q => q.topic === topic).length;
            return (
              <div key={topic} style={{ background: "#13151a", borderRadius: 10, padding: "10px 14px", border: `1px solid ${color}33`, display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: color, flexShrink: 0 }} />
                <span style={{ color: "#c8cad4", fontSize: 12, flex: 1 }}>{topic}</span>
                <span style={{ color: color, fontSize: 12, fontWeight: "bold" }}>{count}</span>
              </div>
            );
          })}
        </div>

        <button onClick={startExam} style={{ width: "100%", padding: "16px", background: "linear-gradient(135deg,#3b9eff,#a78bfa)", color: "white", border: "none", borderRadius: 12, fontSize: 18, fontWeight: "bold", cursor: "pointer", letterSpacing: 0.5, boxShadow: "0 8px 30px rgba(59,158,255,0.4)" }}>
          ▶ Iniciar Examen
        </button>
      </div>
    </div>
  );

  // ── RESULTS ───────────────────────────────────────────────────────────────
  if (mode === "results") {
    const topicStats = Object.keys(TOPIC_COLORS).map(topic => {
      const qs = filteredQ.filter(q => q.topic === topic);
      if (!qs.length) return null;
      const correct = qs.filter(q => answers[q.id] === q.answer).length;
      return { topic, total: qs.length, correct, pct: Math.round((correct / qs.length) * 100) };
    }).filter(Boolean);

    const grade = pct >= 90 ? "Excelente" : pct >= 70 ? "Aprobado" : pct >= 60 ? "Suficiente" : "Reprobado";
    const gradeColor = pct >= 90 ? "#34d399" : pct >= 70 ? "#3b9eff" : pct >= 60 ? "#f59e0b" : "#f43f5e";

    return (
      <div style={{ fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", background: "transparent", padding: "40px 20px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div style={{ fontSize: 56, marginBottom: 8 }}>{pct >= 70 ? "🎉" : "📚"}</div>
            <h2 style={{ color: "#e8eaf0", fontSize: 28, marginBottom: 4 }}>Resultados del Examen</h2>
            <div style={{ fontSize: 64, fontWeight: "bold", color: gradeColor, lineHeight: 1.1 }}>{pct}%</div>
            <div style={{ color: gradeColor, fontSize: 20, marginBottom: 4 }}>{grade}</div>
            <div style={{ color: "#5a6070", fontSize: 15 }}>{score} de {total} reactivos correctos · {total - answered} sin contestar</div>
          </div>

          <div style={{ background: "#13151a", borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", padding: 24, marginBottom: 20 }}>
            <h3 style={{ color: "#e8eaf0", fontSize: 15, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>Desempeño por Tema</h3>
            {topicStats.map(({ topic, total: t, correct, pct: p }) => (
              <div key={topic} style={{ marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ color: "#c8cad4", fontSize: 13 }}>{TOPIC_ICONS[topic]} {topic}</span>
                  <span style={{ color: TOPIC_COLORS[topic], fontSize: 13, fontWeight: "bold" }}>{correct}/{t}</span>
                </div>
                <div style={{ height: 6, background: "rgba(255,255,255,0.1)", borderRadius: 3 }}>
                  <div style={{ height: "100%", width: `${p}%`, background: TOPIC_COLORS[topic], borderRadius: 3, transition: "width 0.5s" }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button onClick={() => { setMode("review"); setReviewFilter("todos"); setCurrent(0); setShowExplanation(false); }} style={{ flex: 1, padding: "12px", background: "rgba(59,158,255,0.2)", color: "#a5b4fc", border: "1px solid rgba(59,158,255,0.4)", borderRadius: 10, cursor: "pointer", fontSize: 14 }}>
              📖 Revisar Respuestas
            </button>
            <button onClick={() => setMode("menu")} style={{ flex: 1, padding: "12px", background: "rgba(255,255,255,0.04)", color: "#5a6070", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, cursor: "pointer", fontSize: 14 }}>
              🏠 Menú Principal
            </button>
            <button onClick={startExam} style={{ flex: 1, padding: "12px", background: "linear-gradient(135deg,#3b9eff,#a78bfa)", color: "white", border: "none", borderRadius: 10, cursor: "pointer", fontSize: 14, fontWeight: "bold" }}>
              🔄 Nuevo Examen
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── REVIEW ────────────────────────────────────────────────────────────────
  if (mode === "review") {
    const q = reviewQuestions[current];
    const isCorrect = q && answers[q.id] === q.answer;

    return (
      <div style={{ fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", background: "transparent", padding: "24px 16px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <button onClick={() => setMode("results")} style={{ background: "none", border: "none", color: "#5a6070", cursor: "pointer", fontSize: 14 }}>← Resultados</button>
            <div style={{ display: "flex", gap: 8 }}>
              {["todos","correctas","incorrectas","sin_contestar"].map(f => (
                <button key={f} onClick={() => { setReviewFilter(f); setCurrent(0); }} style={{ padding: "4px 10px", borderRadius: 12, fontSize: 11, border: "1px solid", cursor: "pointer", background: reviewFilter === f ? "#3b9eff" : "transparent", color: reviewFilter === f ? "white" : "#5a6070", borderColor: reviewFilter === f ? "#3b9eff" : "rgba(255,255,255,0.15)" }}>
                  {f === "todos" ? "Todos" : f === "correctas" ? "✅" : f === "incorrectas" ? "❌" : "⬜"}
                </button>
              ))}
            </div>
          </div>

          {!q ? (
            <div style={{ textAlign: "center", color: "#5a6070", padding: 60 }}>No hay reactivos en este filtro</div>
          ) : (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ padding: "3px 10px", borderRadius: 12, fontSize: 12, background: `${TOPIC_COLORS[q.topic]}22`, color: TOPIC_COLORS[q.topic], border: `1px solid ${TOPIC_COLORS[q.topic]}44` }}>{TOPIC_ICONS[q.topic]} {q.topic}</span>
                <span style={{ color: "#5a6070", fontSize: 13 }}>#{q.id} · {current + 1}/{reviewQuestions.length}</span>
              </div>

              <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 14, border: "1px solid rgba(255,255,255,0.1)", padding: 22, marginBottom: 16 }}>
                <p style={{ color: "#e8eaf0", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{q.question}</p>
              </div>

              {q.options.map(opt => {
                const letter = opt.charAt(0);
                const isAns = letter === q.answer;
                const isUser = letter === answers[q.id];
                let bg = "#13151a", border = "rgba(255,255,255,0.1)", color = "#5a6070";
                if (isAns) { bg = "rgba(52,211,153,0.15)"; border = "#34d399"; color = "#6ee7b7"; }
                else if (isUser && !isAns) { bg = "rgba(244,63,94,0.15)"; border = "#f43f5e"; color = "#fda4af"; }
                return (
                  <div key={opt} style={{ background: bg, border: `1px solid ${border}`, borderRadius: 10, padding: "12px 16px", marginBottom: 8, color, fontSize: 14 }}>
                    {isAns ? "✅ " : isUser ? "❌ " : ""}{opt}
                  </div>
                );
              })}

              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16 }}>
                <button onClick={() => setCurrent(c => Math.max(0, c - 1))} disabled={current === 0} style={{ padding: "10px 20px", background: "rgba(255,255,255,0.04)", color: "#5a6070", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, cursor: current === 0 ? "not-allowed" : "pointer", opacity: current === 0 ? 0.4 : 1 }}>← Anterior</button>
                <button onClick={() => setCurrent(c => Math.min(reviewQuestions.length - 1, c + 1))} disabled={current === reviewQuestions.length - 1} style={{ padding: "10px 20px", background: "linear-gradient(135deg,#3b9eff,#a78bfa)", color: "white", border: "none", borderRadius: 8, cursor: current === reviewQuestions.length - 1 ? "not-allowed" : "pointer", opacity: current === reviewQuestions.length - 1 ? 0.4 : 1 }}>Siguiente →</button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  // ── EXAM ──────────────────────────────────────────────────────────────────
  const q = filteredQ[current];
  const timerWarning = timeLeft < 600;
  const progress = ((current + 1) / total) * 100;

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", background: "transparent", padding: "16px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
          <div>
            <span style={{ color: "#5a6070", fontSize: 13 }}>Reactivo </span>
            <span style={{ color: "#e8eaf0", fontWeight: "bold" }}>{current + 1}</span>
            <span style={{ color: "#5a6070" }}> / {total}</span>
            <span style={{ color: "#5a6070", fontSize: 12, marginLeft: 10 }}>({answered} contestados)</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 13, fontWeight: "bold", color: timerWarning ? "#f43f5e" : "#a5b4fc", background: timerWarning ? "rgba(244,63,94,0.15)" : "rgba(59,158,255,0.15)", padding: "5px 12px", borderRadius: 20, border: `1px solid ${timerWarning ? "#f43f5e" : "#3b9eff"}55` }}>
              ⏱ {fmt(timeLeft)}
            </span>
            <button onClick={() => { setTimerActive(false); setMode("results"); }} style={{ padding: "5px 12px", background: "rgba(244,63,94,0.15)", color: "#fda4af", border: "1px solid rgba(244,63,94,0.3)", borderRadius: 20, cursor: "pointer", fontSize: 12 }}>
              Terminar
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 2, marginBottom: 20 }}>
          <div style={{ height: "100%", width: `${progress}%`, background: "linear-gradient(90deg,#3b9eff,#a78bfa)", borderRadius: 2, transition: "width 0.3s" }} />
        </div>

        {/* Topic badge */}
        <div style={{ marginBottom: 12 }}>
          <span style={{ padding: "4px 12px", borderRadius: 20, fontSize: 12, background: `${TOPIC_COLORS[q.topic]}22`, color: TOPIC_COLORS[q.topic], border: `1px solid ${TOPIC_COLORS[q.topic]}44` }}>
            {TOPIC_ICONS[q.topic]} {q.topic}
          </span>
        </div>

        {/* Question */}
        <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.12)", padding: 24, marginBottom: 18 }}>
          <p style={{ color: "#e8eaf0", fontSize: 16, lineHeight: 1.75, margin: 0 }}>
            <span style={{ color: "#3b9eff", fontWeight: "bold", marginRight: 8 }}>{q.id}.</span>
            {q.question}
          </p>
        </div>

        {/* Options */}
        <div style={{ marginBottom: 18 }}>
          {q.options.map(opt => {
            const letter = opt.charAt(0);
            return (
              <div key={opt} onClick={() => !confirmed && setSelected(letter)}
                style={{ borderRadius: 12, padding: "13px 18px", marginBottom: 10, fontSize: 14, lineHeight: 1.5, transition: "all 0.18s", userSelect: "none", ...getOptionStyle(opt) }}>
                {confirmed && letter === q.answer && <span style={{ marginRight: 6 }}>✅</span>}
                {confirmed && letter === selected && letter !== q.answer && <span style={{ marginRight: 6 }}>❌</span>}
                {opt}
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: 10, justifyContent: "space-between", alignItems: "center" }}>
          <button onClick={prev} disabled={current === 0} style={{ padding: "10px 20px", background: "rgba(255,255,255,0.04)", color: "#5a6070", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, cursor: current === 0 ? "not-allowed" : "pointer", opacity: current === 0 ? 0.4 : 1, fontSize: 14 }}>← Anterior</button>

          {!confirmed ? (
            <button onClick={confirmAnswer} disabled={!selected} style={{ padding: "10px 28px", background: selected ? "linear-gradient(135deg,#3b9eff,#a78bfa)" : "rgba(255,255,255,0.04)", color: selected ? "white" : "#5a6070", border: "none", borderRadius: 10, cursor: selected ? "pointer" : "not-allowed", fontWeight: "bold", fontSize: 14, boxShadow: selected ? "0 4px 20px rgba(59,158,255,0.4)" : "none" }}>
              Confirmar respuesta
            </button>
          ) : (
            <button onClick={next} style={{ padding: "10px 28px", background: "linear-gradient(135deg,#34d399,#2d9e70)", color: "white", border: "none", borderRadius: 10, cursor: "pointer", fontWeight: "bold", fontSize: 14, boxShadow: "0 4px 20px rgba(52,211,153,0.3)" }}>
              {current === filteredQ.length - 1 ? "Ver resultados →" : "Siguiente →"}
            </button>
          )}
        </div>

        {/* Question navigator */}
        <div style={{ marginTop: 24, background: "#13151a", borderRadius: 12, padding: 16, border: "1px solid rgba(255,255,255,0.07)" }}>
          <p style={{ color: "#5a6070", fontSize: 11, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>Navegador de reactivos</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
            {filteredQ.map((fq, i) => {
              const ans = answers[fq.id];
              const isCurr = i === current;
              let bg = "rgba(255,255,255,0.06)";
              let color = "#5a6070";
              if (isCurr) { bg = "#3b9eff"; color = "white"; }
              else if (ans === fq.answer) { bg = "rgba(52,211,153,0.3)"; color = "#6ee7b7"; }
              else if (ans) { bg = "rgba(244,63,94,0.3)"; color = "#fda4af"; }
              return (
                <button key={fq.id} onClick={() => goToQuestion(i)} style={{ width: 28, height: 28, borderRadius: 6, background: bg, color, border: isCurr ? "2px solid #3b9eff" : "1px solid rgba(255,255,255,0.1)", cursor: "pointer", fontSize: 11, fontWeight: isCurr ? "bold" : "normal" }}>
                  {fq.id}
                </button>
              );
            })}
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: 10 }}>
            {[["rgba(52,211,153,0.3)","#6ee7b7","Correcta"],["rgba(244,63,94,0.3)","#fda4af","Incorrecta"],["rgba(255,255,255,0.06)","#5a6070","Sin contestar"]].map(([bg,c,label]) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{ width: 12, height: 12, borderRadius: 3, background: bg, border: `1px solid ${c}` }} />
                <span style={{ color: "#5a6070", fontSize: 11 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
