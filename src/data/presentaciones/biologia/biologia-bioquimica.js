// Datos de la presentación: Bioquímica y Metabolismo (Biología · UNAM · Área 1)
// Subtemas: Biomoléculas · Enzimas · Metabolismo y ATP · Respiración y fermentación · Fotosíntesis → Resumen.
// 16 reactivos por subtema.

export const PRESENTACION = {
  id: "biologia-bioquimica",
  titulo: "Bioquímica y Metabolismo",
  materia: "Biología",
  examenes: ["UNAM"],
  subtema: "Composición y energía de la vida",
  slides: [
    {
      id: 0,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "portada",
          kicker: "Biología · UNAM",
          titulo: "Bioquímica y Metabolismo",
          subtitulo: "Biomoléculas · Enzimas · ATP · Respiración celular · Fermentación · Fotosíntesis",
          figura: "bq-portada",
        },
      ],
    },
    {
      id: "bioelementos",
      tipo: "lienzo",
      etiqueta: "De qué está hecha la vida",
      titulo: "Bioelementos y biomoléculas",
      bloques: [
        {
          tipo: "formula",
          math: "C \\cdot H \\cdot O \\cdot N \\cdot P \\cdot S",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "bq-biomoleculas",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\text{Carbohidratos}",
              texto: "energía rápida y estructura. Ej.: glucosa, almidón, celulosa",
            },
            {
              math: "\\text{Lípidos}",
              texto: "reserva de energía, membranas y aislamiento. Ej.: grasas, fosfolípidos",
            },
            {
              math: "\\text{Proteínas}",
              texto: "estructura, transporte, defensa y enzimas. Hechas de aminoácidos",
            },
            {
              math: "\\text{Ácidos nucleicos}",
              texto: "ADN y ARN: guardan y transmiten la información genética",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Los bioelementos primarios (C, H, O, N, P, S) forman casi toda la materia viva. El carbono es la base por su capacidad de formar cadenas. El agua es la molécula más abundante y el medio donde ocurren las reacciones.",
        },
      ],
    },
    {
      id: "biomoleculas-detalle",
      tipo: "lienzo",
      etiqueta: "Monómero → polímero",
      titulo: "Las cuatro biomoléculas",
      bloques: [
        {
          tipo: "destacado",
          texto: "Las biomoléculas orgánicas se construyen uniendo unidades pequeñas (monómeros) en cadenas grandes (polímeros): los carbohidratos se forman de monosacáridos; las proteínas, de aminoácidos; los ácidos nucleicos, de nucleótidos. Los lípidos no son polímeros verdaderos.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "bq-biomoleculas",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "\\text{aminoácidos} \\to \\text{proteína}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Reconocer el monómero permite identificar la biomolécula: si hablan de aminoácidos es una proteína; de nucleótidos, un ácido nucleico; de glucosa o monosacáridos, un carbohidrato. Las grasas son ésteres de glicerol y ácidos grasos.",
        },
        {
          tipo: "formula",
          math: "\\text{nucleótidos} \\to \\text{ADN / ARN}",
        },
      ],
    },
    {
      id: "bm1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Biomoléculas · Reactivo 1 / 16",
          enunciado: "Las proteínas son polímeros formados por la unión de muchas moléculas de:",
          opciones: ["Aminoácidos", "Monosacáridos", "Ácidos grasos", "Nucleótidos"],
          correcta: 0,
          explicacion: "Las proteínas son cadenas de aminoácidos unidos por enlaces peptídicos. Existen 20 aminoácidos distintos cuya secuencia determina la proteína.",
        },
      ],
    },
    {
      id: "bm2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Biomoléculas · Reactivo 2 / 16",
          enunciado: "¿Cuál de las siguientes biomoléculas es la principal fuente de energía rápida para la célula?",
          opciones: [
            "Los carbohidratos (glucosa)",
            "Los ácidos nucleicos",
            "Las proteínas estructurales",
            "El colesterol",
          ],
          correcta: 0,
          explicacion: "Los carbohidratos, en especial la glucosa, son la fuente de energía de uso inmediato. Los lípidos almacenan energía a largo plazo.",
        },
      ],
    },
    {
      id: "bm3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Biomoléculas · Reactivo 3 / 16",
          enunciado: "Las biomoléculas que forman parte de las membranas celulares y sirven como reserva de energía a largo plazo son:",
          opciones: ["Los lípidos", "Los carbohidratos", "Los ácidos nucleicos", "Las vitaminas"],
          correcta: 0,
          explicacion: "Los lípidos (fosfolípidos) forman la bicapa de las membranas y las grasas almacenan energía de manera concentrada y duradera.",
        },
      ],
    },
    {
      id: "bm4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Biomoléculas · Reactivo 4 / 16",
          enunciado: "El elemento químico que forma el «esqueleto» de todas las biomoléculas orgánicas por su capacidad de formar cadenas es:",
          apoyo: "esqueleto",
          apoyoPie: "obsérvala antes de responder",
          opciones: ["El carbono (C)", "El sodio (Na)", "El hierro (Fe)", "El cloro (Cl)"],
          correcta: 0,
          explicacion: "El carbono puede formar cuatro enlaces y unirse a sí mismo en cadenas y anillos, lo que le permite construir las grandes moléculas de la vida.",
        },
      ],
    },
    {
      id: "bm5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Biomoléculas · Reactivo 5 / 16",
          enunciado: "Los ácidos nucleicos (ADN y ARN) están formados por unidades llamadas:",
          opciones: ["Nucleótidos", "Aminoácidos", "Monosacáridos", "Ácidos grasos"],
          correcta: 0,
          explicacion: "El monómero de los ácidos nucleicos es el nucleótido, formado por un azúcar, un fosfato y una base nitrogenada.",
        },
      ],
    },
    {
      id: "bm6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Biomoléculas · Reactivo 6 / 16",
          enunciado: "El monómero (unidad básica) de los carbohidratos es el:",
          opciones: ["Monosacárido (como la glucosa)", "Aminoácido", "Nucleótido", "Glicerol"],
          correcta: 0,
          explicacion: "Los carbohidratos están formados por monosacáridos (azúcares simples como la glucosa). Varios monosacáridos forman polisacáridos como el almidón.",
        },
      ],
    },
    {
      id: "bm7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Biomoléculas · Reactivo 7 / 16",
          enunciado: "La molécula más abundante en los seres vivos y el medio donde ocurren las reacciones químicas es:",
          opciones: ["El agua", "La glucosa", "El ADN", "El colágeno"],
          correcta: 0,
          explicacion: "El agua es la molécula más abundante de la materia viva; actúa como disolvente y medio de las reacciones metabólicas.",
        },
      ],
    },
    {
      id: "bm8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Biomoléculas · Reactivo 8 / 16",
          enunciado: "El almidón (en plantas) y el glucógeno (en animales) son carbohidratos cuya función es:",
          opciones: [
            "Almacenar energía",
            "Formar membranas",
            "Transmitir información genética",
            "Catalizar reacciones",
          ],
          correcta: 0,
          explicacion: "El almidón y el glucógeno son polisacáridos de reserva: almacenan glucosa para liberarla como energía cuando se necesita.",
        },
      ],
    },
    {
      id: "bm9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Biomoléculas · Reactivo 9 / 16",
          enunciado: "La celulosa es un carbohidrato cuya función principal en las plantas es:",
          opciones: ["Estructural (forma la pared celular)", "Energética inmediata", "Genética", "Enzimática"],
          correcta: 0,
          explicacion: "La celulosa es un polisacárido estructural que forma la pared celular de las plantas, dándoles soporte y rigidez.",
        },
      ],
    },
    {
      id: "bm10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Biomoléculas · Reactivo 10 / 16",
          enunciado: "El enlace que une a los aminoácidos entre sí para formar una proteína se llama:",
          opciones: ["Peptídico", "Glucosídico", "Fosfodiéster", "Iónico"],
          correcta: 0,
          explicacion: "Los aminoácidos se unen mediante enlaces peptídicos para formar las cadenas de las proteínas.",
        },
      ],
    },
    {
      id: "bm11",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Biomoléculas · Reactivo 11 / 16",
          enunciado: "La función de almacenar y transmitir la información genética corresponde a:",
          opciones: ["Los ácidos nucleicos", "Los lípidos", "Los carbohidratos", "El agua"],
          correcta: 0,
          explicacion: "Los ácidos nucleicos (ADN y ARN) guardan la información genética y dirigen la síntesis de proteínas.",
        },
      ],
    },
    {
      id: "bm12",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Biomoléculas · Reactivo 12 / 16",
          enunciado: "Desde el punto de vista químico, las enzimas son:",
          opciones: ["Proteínas", "Carbohidratos", "Lípidos", "Ácidos nucleicos"],
          correcta: 0,
          explicacion: "La mayoría de las enzimas son proteínas especializadas en acelerar reacciones químicas (biocatalizadores).",
        },
      ],
    },
    {
      id: "bm13",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Biomoléculas · Reactivo 13 / 16",
          enunciado: "Las grasas y los aceites pertenecen al grupo de las biomoléculas llamadas:",
          opciones: ["Lípidos", "Proteínas", "Carbohidratos", "Ácidos nucleicos"],
          correcta: 0,
          explicacion: "Las grasas y los aceites son lípidos: almacenan mucha energía y son insolubles en agua.",
        },
      ],
    },
    {
      id: "bm14",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Biomoléculas · Reactivo 14 / 16",
          enunciado: "Los bioelementos primarios, que constituyen la mayor parte de la materia viva, son:",
          opciones: ["C, H, O, N, P y S", "Na, Cl, K y Ca", "Fe, Cu, Zn y Mg", "He, Ne, Ar y Kr"],
          correcta: 0,
          explicacion: "Los bioelementos primarios (carbono, hidrógeno, oxígeno, nitrógeno, fósforo y azufre) forman casi todas las biomoléculas.",
        },
      ],
    },
    {
      id: "bm15",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Biomoléculas · Reactivo 15 / 16",
          enunciado: "El colágeno (en la piel) y la queratina (en el cabello y las uñas) son ejemplos de proteínas con función:",
          opciones: ["Estructural", "Energética", "Genética", "De reserva"],
          correcta: 0,
          explicacion: "El colágeno y la queratina son proteínas estructurales: dan soporte y resistencia a tejidos como la piel, el cabello y las uñas.",
        },
      ],
    },
    {
      id: "bm16",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Biomoléculas · Reactivo 16 / 16",
          enunciado: "La hemoglobina, que lleva el oxígeno en la sangre, es una proteína con función de:",
          opciones: ["Transporte", "Estructura", "Reserva energética", "Información genética"],
          correcta: 0,
          explicacion: "La hemoglobina es una proteína de transporte: lleva el oxígeno desde los pulmones a todo el cuerpo.",
        },
      ],
    },
    {
      id: "enzimas",
      tipo: "lienzo",
      etiqueta: "Aceleran las reacciones",
      titulo: "Enzimas: los biocatalizadores",
      bloques: [
        {
          tipo: "formula",
          math: "\\text{enzima} = \\text{catalizador biológico}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "bq-enzima",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\text{Qué son}",
              texto: "proteínas que aceleran (catalizan) las reacciones químicas de la célula",
            },
            {
              math: "\\text{Cómo}",
              texto: "bajan la energía de activación necesaria para que la reacción ocurra",
            },
            {
              math: "\\text{Especificidad}",
              texto: "cada enzima actúa sobre un sustrato concreto (modelo llave-cerradura)",
            },
            {
              math: "\\text{No se gastan}",
              texto: "salen intactas y pueden volver a actuar",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Las enzimas son biocatalizadores: aumentan la velocidad de la reacción sin consumirse. Su actividad depende de la temperatura y el pH; si se desnaturalizan (por calor o pH extremo) pierden su forma y dejan de funcionar. Casi todas terminan en «-asa» (lipasa, amilasa).",
        },
      ],
    },
    {
      id: "en1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Bioquímica · Enzimas · Reactivo 1 / 16",
          enunciado: "Biocatalizadores que en el mundo vivo aceleran o regulan la velocidad de las reacciones químicas:",
          opciones: ["Enzimas", "Lípidos", "Vitaminas", "Carbohidratos"],
          correcta: 0,
          explicacion: "Las enzimas son los catalizadores biológicos: aceleran las reacciones bajando la energía de activación, sin consumirse en el proceso.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "bq-enzima",
        },
      ],
    },
    {
      id: "en2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Bioquímica · Enzimas · Reactivo 2 / 16",
          enunciado: "La forma en que una enzima reconoce solo a su sustrato específico se describe con el modelo de:",
          opciones: ["Llave-cerradura", "Bomba sodio-potasio", "Doble hélice", "Mosaico fluido"],
          correcta: 0,
          explicacion: "El modelo llave-cerradura explica la especificidad: el sustrato (llave) encaja exactamente en el sitio activo de la enzima (cerradura).",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "bq-enzima",
        },
      ],
    },
    {
      id: "en3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Enzimas · Reactivo 3 / 16",
          enunciado: "Si una enzima se expone a temperatura muy alta y pierde su forma tridimensional, se dice que sufrió:",
          opciones: ["Desnaturalización", "Replicación", "Fermentación", "Fotosíntesis"],
          correcta: 0,
          explicacion: "La desnaturalización es la pérdida de la estructura tridimensional de la proteína por calor o pH extremo; al cambiar su forma, la enzima ya no puede unirse al sustrato y deja de funcionar.",
        },
      ],
    },
    {
      id: "en4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Bioquímica · Enzimas · Reactivo 4 / 16",
          enunciado: "Las enzimas aceleran las reacciones químicas porque:",
          opciones: [
            "Disminuyen la energía de activación",
            "Aumentan la temperatura",
            "Aportan oxígeno",
            "Se consumen en la reacción",
          ],
          correcta: 0,
          explicacion: "Las enzimas bajan la energía de activación (la energía mínima para iniciar la reacción), de modo que la reacción ocurre más rápido y con menos energía.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "bq-enzima",
        },
      ],
    },
    {
      id: "en5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Enzimas · Reactivo 5 / 16",
          enunciado: "La molécula sobre la cual actúa una enzima se llama:",
          opciones: ["Sustrato", "Producto", "Catalizador", "Coenzima"],
          correcta: 0,
          explicacion: "El sustrato es la sustancia sobre la que actúa la enzima; se une al sitio activo y se transforma en producto.",
        },
      ],
    },
    {
      id: "en6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Enzimas · Reactivo 6 / 16",
          enunciado: "Una característica importante de las enzimas es que, al terminar la reacción:",
          opciones: [
            "No se consumen y pueden volver a actuar",
            "Se destruyen siempre",
            "Se convierten en sustrato",
            "Pierden su función para siempre",
          ],
          correcta: 0,
          explicacion: "Las enzimas no se consumen en la reacción: salen intactas y pueden catalizar muchas reacciones más.",
        },
      ],
    },
    {
      id: "en7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Bioquímica · Enzimas · Reactivo 7 / 16",
          enunciado: "La región de la enzima donde se une el sustrato se denomina:",
          opciones: ["Sitio activo", "Membrana", "Núcleo", "Ribosoma"],
          correcta: 0,
          explicacion: "El sitio activo es la zona de la enzima con la forma exacta para unir el sustrato y catalizar la reacción.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "bq-enzima",
        },
      ],
    },
    {
      id: "en8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Enzimas · Reactivo 8 / 16",
          enunciado: "La mayoría de las enzimas tienen un nombre que termina con la terminación:",
          opciones: ["-asa", "-osa", "-ina", "-ido"],
          correcta: 0,
          explicacion: "Casi todas las enzimas terminan en «-asa» (amilasa, lipasa, proteasa), mientras que muchos azúcares terminan en «-osa».",
        },
      ],
    },
    {
      id: "en9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Enzimas · Reactivo 9 / 16",
          enunciado: "Dos factores que afectan la actividad de las enzimas son:",
          opciones: ["La temperatura y el pH", "La luz y el sonido", "El color y el olor", "La masa y el volumen"],
          correcta: 0,
          explicacion: "La temperatura y el pH influyen mucho en la actividad enzimática; valores extremos pueden desnaturalizar la enzima.",
        },
      ],
    },
    {
      id: "en10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Enzimas · Reactivo 10 / 16",
          enunciado: "Que una enzima actúe únicamente sobre un tipo de sustrato se conoce como:",
          opciones: ["Especificidad", "Desnaturalización", "Catálisis", "Reversibilidad"],
          correcta: 0,
          explicacion: "La especificidad es la propiedad de cada enzima de reconocer y actuar solo sobre su sustrato particular.",
        },
      ],
    },
    {
      id: "en11",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Enzimas · Reactivo 11 / 16",
          enunciado: "La enzima amilasa, presente en la saliva, inicia la digestión de:",
          opciones: ["Los almidones (carbohidratos)", "Las proteínas", "Las grasas", "Los ácidos nucleicos"],
          correcta: 0,
          explicacion: "La amilasa salival degrada el almidón en azúcares más simples; por eso al masticar pan un rato se nota un sabor dulce.",
        },
      ],
    },
    {
      id: "en12",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Enzimas · Reactivo 12 / 16",
          enunciado: "Un catalizador es una sustancia que:",
          opciones: [
            "Acelera una reacción sin consumirse",
            "Detiene toda reacción",
            "Solo aporta energía",
            "Cambia los productos finales",
          ],
          correcta: 0,
          explicacion: "Un catalizador acelera la velocidad de una reacción sin gastarse ni alterar los productos. Las enzimas son catalizadores biológicos.",
        },
      ],
    },
    {
      id: "en13",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Enzimas · Reactivo 13 / 16",
          enunciado: "Cada enzima tiene una temperatura ________ a la cual trabaja con máxima eficiencia.",
          opciones: ["óptima", "nula", "infinita", "constante de 0 °C"],
          correcta: 0,
          explicacion: "Existe una temperatura óptima (en humanos, cercana a 37 °C) en la que la enzima alcanza su mayor actividad; por encima se desnaturaliza.",
        },
      ],
    },
    {
      id: "en14",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Enzimas · Reactivo 14 / 16",
          enunciado: "La enzima lipasa se encarga de la digestión de:",
          opciones: ["Los lípidos (grasas)", "Los carbohidratos", "Las proteínas", "El ADN"],
          correcta: 0,
          explicacion: "La lipasa degrada los lípidos (grasas) en ácidos grasos y glicerol. Su nombre indica su sustrato (lípidos).",
        },
      ],
    },
    {
      id: "en15",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Enzimas · Reactivo 15 / 16",
          enunciado: "El pH muy ácido del estómago favorece a unas enzimas pero, fuera de su rango, una enzima puede:",
          opciones: [
            "Desnaturalizarse y dejar de funcionar",
            "Volverse más rápida sin límite",
            "Convertirse en carbohidrato",
            "Duplicar su tamaño y mejorar",
          ],
          correcta: 0,
          explicacion: "Cada enzima tiene un pH óptimo; valores muy distintos alteran su estructura (la desnaturalizan) y la inactivan.",
        },
      ],
    },
    {
      id: "en16",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Enzimas · Reactivo 16 / 16",
          enunciado: "Las enzimas del ciclo de Krebs son idénticas en todos los organismos aerobios. Esto demuestra que las reacciones bioquímicas básicas son:",
          opciones: [
            "Comunes a todos los seres vivos",
            "Distintas en cada especie",
            "Exclusivas de las plantas",
            "Imposibles sin oxígeno en cualquier célula",
          ],
          correcta: 0,
          explicacion: "La universalidad de enzimas como las del ciclo de Krebs muestra la unidad bioquímica de la vida: las reacciones esenciales son comunes a todos los organismos.",
        },
      ],
    },
    {
      id: "metabolismo",
      tipo: "lienzo",
      etiqueta: "La economía energética de la célula",
      titulo: "Metabolismo y ATP",
      bloques: [
        {
          tipo: "formula",
          math: "\\text{ADP} + P_i \\rightleftharpoons \\text{ATP}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "bq-atp",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\text{Anabolismo}",
              texto: "construye moléculas grandes y GASTA energía (ej. fotosíntesis)",
            },
            {
              math: "\\text{Catabolismo}",
              texto: "rompe moléculas grandes y LIBERA energía (ej. respiración)",
            },
            {
              math: "\\text{ATP}",
              texto: "la «moneda energética»: almacena y entrega energía a la célula",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Metabolismo = conjunto de todas las reacciones de la célula. El anabolismo construye (síntesis, gasta energía); el catabolismo degrada (libera energía). El ATP es la molécula que guarda la energía: al perder un fosfato (ATP → ADP) la libera para usarla.",
        },
      ],
    },
    {
      id: "mt1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Bioquímica · Metabolismo · Reactivo 1 / 16",
          enunciado: "La molécula que funciona como la principal «moneda energética» de la célula es:",
          opciones: ["El ATP", "La glucosa", "El ADN", "El colesterol"],
          correcta: 0,
          explicacion: "El ATP (adenosín trifosfato) almacena energía en sus enlaces de fosfato y la libera al romperse (ATP → ADP + Pᵢ) para impulsar los procesos celulares.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "bq-atp",
        },
      ],
    },
    {
      id: "mt2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Metabolismo · Reactivo 2 / 16",
          enunciado: "El conjunto de reacciones que CONSTRUYEN moléculas complejas y consumen energía se llama:",
          opciones: ["Anabolismo", "Catabolismo", "Digestión", "Excreción"],
          correcta: 0,
          explicacion: "El anabolismo agrupa las reacciones de síntesis: construye moléculas grandes a partir de pequeñas y para ello gasta energía (ATP).",
        },
      ],
    },
    {
      id: "mt3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Metabolismo · Reactivo 3 / 16",
          enunciado: "La respiración celular, que degrada la glucosa para liberar energía, es un ejemplo de:",
          opciones: ["Catabolismo", "Anabolismo", "Fotosíntesis", "Síntesis de proteínas"],
          correcta: 0,
          explicacion: "El catabolismo agrupa las reacciones que rompen moléculas grandes (como la glucosa) y liberan energía. La respiración celular es el ejemplo típico.",
        },
      ],
    },
    {
      id: "mt4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Metabolismo · Reactivo 4 / 16",
          enunciado: "El metabolismo de una célula se define como:",
          opciones: [
            "El conjunto de todas sus reacciones químicas",
            "Solo la respiración",
            "Solo la digestión",
            "El transporte de membrana",
          ],
          correcta: 0,
          explicacion: "El metabolismo es el conjunto de todas las reacciones químicas de la célula, que incluyen el anabolismo y el catabolismo.",
        },
      ],
    },
    {
      id: "mt5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Bioquímica · Metabolismo · Reactivo 5 / 16",
          enunciado: "El ATP libera la energía que almacena cuando:",
          opciones: [
            "Pierde un grupo fosfato y se convierte en ADP",
            "Gana un grupo fosfato",
            "Se une a la glucosa",
            "Entra al núcleo",
          ],
          correcta: 0,
          explicacion: "Al romperse el enlace del último fosfato, el ATP se convierte en ADP + Pᵢ y libera energía utilizable para la célula.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "bq-atp",
        },
      ],
    },
    {
      id: "mt6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Metabolismo · Reactivo 6 / 16",
          enunciado: "Respecto a la energía, el anabolismo se caracteriza por:",
          opciones: ["Consumir energía", "Liberar energía", "No usar energía", "Producir calor únicamente"],
          correcta: 0,
          explicacion: "El anabolismo construye moléculas complejas y para ello consume energía (gasta ATP).",
        },
      ],
    },
    {
      id: "mt7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Metabolismo · Reactivo 7 / 16",
          enunciado: "Respecto a la energía, el catabolismo se caracteriza por:",
          opciones: ["Liberar energía", "Consumir energía", "No producir cambios", "Crear moléculas grandes"],
          correcta: 0,
          explicacion: "El catabolismo degrada moléculas complejas en simples y en el proceso libera energía (parte se almacena como ATP).",
        },
      ],
    },
    {
      id: "mt8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Metabolismo · Reactivo 8 / 16",
          enunciado: "La fotosíntesis, que fabrica glucosa, es un proceso de tipo:",
          opciones: ["Anabólico", "Catabólico", "Digestivo", "Excretor"],
          correcta: 0,
          explicacion: "La fotosíntesis construye glucosa a partir de CO₂ y agua usando energía: es un proceso anabólico.",
        },
      ],
    },
    {
      id: "mt9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Metabolismo · Reactivo 9 / 16",
          enunciado: "Las siglas ATP significan:",
          opciones: [
            "Adenosín trifosfato",
            "Ácido tricarboxílico puro",
            "Azúcar de triple potencia",
            "Aminoácido transportador proteico",
          ],
          correcta: 0,
          explicacion: "ATP significa adenosín trifosfato: una molécula con tres grupos fosfato cuyos enlaces almacenan energía.",
        },
      ],
    },
    {
      id: "mt10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Metabolismo · Reactivo 10 / 16",
          enunciado: "Las reacciones del metabolismo están reguladas y aceleradas por:",
          opciones: ["Las enzimas", "Los lípidos de reserva", "El agua sola", "Los minerales del suelo"],
          correcta: 0,
          explicacion: "Las enzimas controlan la velocidad de las reacciones metabólicas; sin ellas, el metabolismo sería demasiado lento para la vida.",
        },
      ],
    },
    {
      id: "mt11",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Bioquímica · Metabolismo · Reactivo 11 / 16",
          enunciado: "El ATP se «recarga» (se forma de nuevo) cuando el ADP:",
          opciones: [
            "Se une a un grupo fosfato usando energía",
            "Pierde un fosfato",
            "Se transforma en glucosa",
            "Se rompe en aminoácidos",
          ],
          correcta: 0,
          explicacion: "Al añadir un fosfato al ADP, usando energía (de la respiración o la fotosíntesis), se vuelve a formar ATP: así se recarga la «batería».",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "bq-atp",
        },
      ],
    },
    {
      id: "mt12",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Metabolismo · Reactivo 12 / 16",
          enunciado: "La síntesis de proteínas a partir de aminoácidos es un ejemplo de:",
          opciones: ["Anabolismo", "Catabolismo", "Fermentación", "Respiración"],
          correcta: 0,
          explicacion: "Unir aminoácidos para formar una proteína es construir una molécula compleja: un proceso anabólico que consume energía.",
        },
      ],
    },
    {
      id: "mt13",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Metabolismo · Reactivo 13 / 16",
          enunciado: "La digestión de los alimentos, que rompe moléculas grandes en pequeñas, es un proceso:",
          opciones: ["Catabólico", "Anabólico", "Fotosintético", "De biosíntesis"],
          correcta: 0,
          explicacion: "La digestión degrada moléculas complejas (proteínas, almidones, grasas) en unidades simples: es un proceso catabólico.",
        },
      ],
    },
    {
      id: "mt14",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Metabolismo · Reactivo 14 / 16",
          enunciado: "La energía del ATP está almacenada principalmente en:",
          opciones: [
            "Sus enlaces entre grupos fosfato",
            "Su base nitrogenada",
            "Su azúcar",
            "Su carga eléctrica neutra",
          ],
          correcta: 0,
          explicacion: "La energía del ATP reside en los enlaces ricos en energía entre sus grupos fosfato; al romperse el último, se libera esa energía.",
        },
      ],
    },
    {
      id: "mt15",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Metabolismo · Reactivo 15 / 16",
          enunciado: "El metabolismo se divide en dos grandes tipos de reacciones, que son:",
          opciones: [
            "Anabolismo y catabolismo",
            "Mitosis y meiosis",
            "Difusión y ósmosis",
            "Transcripción y traducción",
          ],
          correcta: 0,
          explicacion: "El metabolismo comprende el anabolismo (construye, gasta energía) y el catabolismo (degrada, libera energía).",
        },
      ],
    },
    {
      id: "mt16",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Metabolismo · Reactivo 16 / 16",
          enunciado: "La energía que aporta el ATP se utiliza, entre otras cosas, para:",
          opciones: [
            "El transporte activo, el movimiento y la síntesis de moléculas",
            "Enfriar la célula",
            "Eliminar el ADN",
            "Detener todas las reacciones",
          ],
          correcta: 0,
          explicacion: "El ATP suministra energía para el transporte activo, la contracción muscular, el movimiento celular y la síntesis de biomoléculas.",
        },
      ],
    },
    {
      id: "respiracion",
      tipo: "lienzo",
      etiqueta: "Glucosa + O₂ → energía",
      titulo: "Respiración celular",
      bloques: [
        {
          tipo: "destacado",
          texto: "La respiración aerobia oxida la glucosa usando oxígeno para producir mucha energía (ATP), además de CO₂ y agua. Ocurre en tres etapas: glucólisis (en el citoplasma), ciclo de Krebs y cadena respiratoria (en la mitocondria).",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "bq-respiracion",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "C_6H_{12}O_6 + 6\\,O_2 \\to 6\\,CO_2 + 6\\,H_2O + \\text{ATP}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "En la cadena respiratoria, los citocromos transportan electrones mediante reacciones de óxido-reducción (REDOX) y permiten producir la mayor cantidad de ATP. Por eso la respiración aerobia rinde mucha más energía que la fermentación.",
        },
        {
          tipo: "formula",
          math: "\\text{glucólisis} \\to \\text{Krebs} \\to \\text{cadena respiratoria (citocromos)}",
        },
      ],
    },
    {
      id: "fermentacion",
      tipo: "lienzo",
      etiqueta: "Sin oxígeno",
      titulo: "Fermentación",
      bloques: [
        {
          tipo: "destacado",
          texto: "La fermentación es un proceso ANAEROBIO (sin oxígeno) que degrada la glucosa de forma incompleta y produce poca energía. La fermentación láctica genera ácido láctico (en el músculo y el yogur); la alcohólica produce etanol y CO₂ (en levaduras: pan, cerveza, vino).",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "\\text{glucosa} \\xrightarrow{\\text{sin } O_2} \\text{etanol} + CO_2 + \\text{poca ATP}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Al no usar oxígeno, la glucosa no se oxida por completo, así que se libera mucha menos energía que en la respiración aerobia. La levadura Saccharomyces cerevisiae hace fermentación alcohólica: el CO₂ esponja el pan y el etanol da las bebidas.",
        },
        {
          tipo: "formula",
          math: "\\text{láctica: músculo, yogur} \\quad | \\quad \\text{alcohólica: levaduras}",
        },
      ],
    },
    {
      id: "rf1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Bioquímica · Respiración · Reactivo 1 / 16",
          enunciado: "¿Cuál es la función de los citocromos en la cadena respiratoria?",
          opciones: [
            "Transportar electrones (reacciones REDOX)",
            "Almacenar carbohidratos",
            "Sintetizar CO₂",
            "Formar la pared celular",
          ],
          correcta: 0,
          explicacion: "Los citocromos son proteínas que transportan electrones mediante reacciones de óxido-reducción (REDOX) en la cadena respiratoria, lo que permite producir ATP.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "bq-respiracion",
        },
      ],
    },
    {
      id: "rf2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Bioquímica · Respiración · Reactivo 2 / 16",
          enunciado: "El organelo donde se realizan el ciclo de Krebs y la cadena respiratoria es:",
          opciones: ["La mitocondria", "El cloroplasto", "El núcleo", "El ribosoma"],
          correcta: 0,
          explicacion: "La glucólisis ocurre en el citoplasma, pero el ciclo de Krebs y la cadena respiratoria (donde se produce la mayor parte del ATP) suceden dentro de la mitocondria.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "bq-respiracion",
        },
      ],
    },
    {
      id: "rf3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Fermentación · Reactivo 3 / 16",
          enunciado: "La levadura Saccharomyces cerevisiae produce CO₂ y etanol a partir de azúcares mediante:",
          opciones: ["Fermentación alcohólica", "Respiración aerobia", "Fotosíntesis", "Fermentación láctica"],
          correcta: 0,
          explicacion: "Las levaduras realizan fermentación alcohólica: degradan azúcares sin oxígeno y producen etanol y CO₂. Es la base de la elaboración del pan, la cerveza y el vino.",
        },
      ],
    },
    {
      id: "rf4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Fermentación · Reactivo 4 / 16",
          enunciado: "Durante un ejercicio intenso, cuando falta oxígeno en el músculo, la glucosa se degrada por fermentación láctica y se acumula:",
          opciones: ["Ácido láctico", "Etanol", "Glucógeno", "Oxígeno"],
          correcta: 0,
          explicacion: "En el músculo sin suficiente oxígeno ocurre fermentación láctica: la glucosa se transforma en ácido láctico, cuya acumulación se asocia a la fatiga muscular.",
        },
      ],
    },
    {
      id: "rf5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Bioquímica · Respiración · Reactivo 5 / 16",
          enunciado: "¿Cuáles son los reactivos (lo que entra) de la respiración celular aerobia?",
          opciones: ["Glucosa y oxígeno", "CO₂ y agua", "Etanol y CO₂", "Luz y clorofila"],
          correcta: 0,
          explicacion: "La respiración aerobia consume glucosa y oxígeno, y produce CO₂, agua y energía (ATP).",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "bq-respiracion",
        },
      ],
    },
    {
      id: "rf6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Respiración · Reactivo 6 / 16",
          enunciado: "La primera etapa de la respiración, la glucólisis, ocurre en:",
          opciones: ["El citoplasma", "La mitocondria", "El núcleo", "El cloroplasto"],
          correcta: 0,
          explicacion: "La glucólisis (rompe la glucosa en dos moléculas) ocurre en el citoplasma; las siguientes etapas (Krebs y cadena) son en la mitocondria.",
        },
      ],
    },
    {
      id: "rf7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Respiración · Reactivo 7 / 16",
          enunciado: "Comparada con la fermentación, la respiración aerobia produce:",
          opciones: ["Mucha más energía (ATP)", "Menos energía", "La misma energía", "Nada de energía"],
          correcta: 0,
          explicacion: "Como oxida por completo la glucosa con oxígeno, la respiración aerobia rinde mucho más ATP que la fermentación (que es incompleta).",
        },
      ],
    },
    {
      id: "rf8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Fermentación · Reactivo 8 / 16",
          enunciado: "La fermentación se caracteriza por ser un proceso:",
          opciones: [
            "Anaerobio (sin oxígeno)",
            "Aerobio (con oxígeno)",
            "Fotosintético",
            "Que ocurre solo en la mitocondria",
          ],
          correcta: 0,
          explicacion: "La fermentación es anaerobia: degrada la glucosa sin usar oxígeno, por lo que libera poca energía.",
        },
      ],
    },
    {
      id: "rf9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Bioquímica · Respiración · Reactivo 9 / 16",
          enunciado: "Los productos finales de la respiración celular aerobia (además del ATP) son:",
          opciones: [
            "Dióxido de carbono y agua",
            "Glucosa y oxígeno",
            "Etanol y ácido láctico",
            "Almidón y proteínas",
          ],
          correcta: 0,
          explicacion: "Al oxidar la glucosa con oxígeno, la respiración produce CO₂ y agua, junto con la energía almacenada en el ATP.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "bq-respiracion",
        },
      ],
    },
    {
      id: "rf10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Fermentación · Reactivo 10 / 16",
          enunciado: "El esponjado del pan y la producción de bebidas como la cerveza se deben a la fermentación:",
          opciones: ["Alcohólica (de las levaduras)", "Láctica (de las bacterias)", "Aerobia", "Fotosintética"],
          correcta: 0,
          explicacion: "Las levaduras producen CO₂ (que esponja la masa del pan) y etanol (en las bebidas) mediante la fermentación alcohólica.",
        },
      ],
    },
    {
      id: "rf11",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Respiración · Reactivo 11 / 16",
          enunciado: "El orden correcto de las etapas de la respiración celular aerobia es:",
          opciones: [
            "Glucólisis → ciclo de Krebs → cadena respiratoria",
            "Ciclo de Krebs → glucólisis → cadena",
            "Cadena → Krebs → glucólisis",
            "Glucólisis → cadena → Krebs",
          ],
          correcta: 0,
          explicacion: "Primero la glucólisis (citoplasma), luego el ciclo de Krebs y por último la cadena respiratoria (ambas en la mitocondria).",
        },
      ],
    },
    {
      id: "rf12",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Respiración · Reactivo 12 / 16",
          enunciado: "En la respiración aerobia, el gas indispensable que actúa como aceptor final de los electrones es:",
          opciones: ["El oxígeno", "El nitrógeno", "El dióxido de carbono", "El hidrógeno"],
          correcta: 0,
          explicacion: "El oxígeno es el aceptor final de electrones en la cadena respiratoria; al recibirlos forma agua. Sin O₂ no hay respiración aerobia.",
        },
      ],
    },
    {
      id: "rf13",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Fermentación · Reactivo 13 / 16",
          enunciado: "En comparación con la respiración aerobia, la fermentación libera:",
          opciones: ["Poca energía", "Mucha más energía", "La misma cantidad de energía", "Energía infinita"],
          correcta: 0,
          explicacion: "Como la glucosa se degrada de forma incompleta y sin oxígeno, la fermentación libera poca energía comparada con la respiración aerobia.",
        },
      ],
    },
    {
      id: "rf14",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Respiración · Reactivo 14 / 16",
          enunciado: "La respiración celular, al degradar la glucosa para obtener energía, es un proceso:",
          opciones: ["Catabólico", "Anabólico", "Fotosintético", "De biosíntesis"],
          correcta: 0,
          explicacion: "La respiración rompe la glucosa en moléculas más simples y libera energía: es un proceso catabólico.",
        },
      ],
    },
    {
      id: "rf15",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Respiración · Reactivo 15 / 16",
          enunciado: "El principal producto energético que la célula obtiene de la respiración celular es el:",
          opciones: ["ATP", "ADN", "Almidón", "Colágeno"],
          correcta: 0,
          explicacion: "La finalidad de la respiración celular es producir ATP, la energía utilizable por la célula.",
        },
      ],
    },
    {
      id: "rf16",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Fermentación · Reactivo 16 / 16",
          enunciado: "La fermentación láctica es realizada, entre otros, por bacterias que se usan para producir:",
          opciones: ["Yogur y quesos", "Pan y cerveza", "Vino y sidra", "Aceite y mantequilla"],
          correcta: 0,
          explicacion: "Las bacterias lácticas fermentan la lactosa de la leche produciendo ácido láctico, lo que da lugar al yogur y a muchos quesos.",
        },
      ],
    },
    {
      id: "fotosintesis",
      tipo: "lienzo",
      etiqueta: "Luz → alimento",
      titulo: "Fotosíntesis",
      bloques: [
        {
          tipo: "destacado",
          texto: "La fotosíntesis es el proceso por el que las plantas, algas y cianobacterias usan la energía de la LUZ para transformar CO₂ y agua en glucosa, liberando oxígeno. Ocurre en los cloroplastos gracias a la clorofila.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "bq-fotosintesis",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "6\\,CO_2 + 6\\,H_2O \\xrightarrow{\\text{luz}} C_6H_{12}O_6 + 6\\,O_2",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Es lo contrario de la respiración: la fotosíntesis CONSTRUYE glucosa y captura energía (anabolismo), mientras que la respiración la degrada y libera energía. La fotosíntesis es la fuente del oxígeno y del alimento de casi todos los ecosistemas.",
        },
        {
          tipo: "formula",
          math: "\\text{fotosíntesis: produce } O_2 \\quad | \\quad \\text{respiración: consume } O_2",
        },
      ],
    },
    {
      id: "ft1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Bioquímica · Fotosíntesis · Reactivo 1 / 16",
          enunciado: "En la fotosíntesis, las plantas usan la energía de la luz para transformar CO₂ y agua en:",
          opciones: ["Glucosa y oxígeno", "Ácido láctico y CO₂", "Proteínas y agua", "Etanol y CO₂"],
          correcta: 0,
          explicacion: "La fotosíntesis produce glucosa (alimento) y libera oxígeno como subproducto, usando CO₂, agua y la energía de la luz.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "bq-fotosintesis",
        },
      ],
    },
    {
      id: "ft2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Bioquímica · Fotosíntesis · Reactivo 2 / 16",
          enunciado: "El pigmento verde que capta la energía luminosa para la fotosíntesis es:",
          opciones: ["La clorofila", "La hemoglobina", "La melanina", "El caroteno"],
          correcta: 0,
          explicacion: "La clorofila, ubicada en los cloroplastos, es el pigmento que absorbe la luz (sobre todo roja y azul) y le da el color verde a las plantas.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "bq-fotosintesis",
        },
      ],
    },
    {
      id: "ft3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Fotosíntesis · Reactivo 3 / 16",
          enunciado: "Respecto a la energía, la fotosíntesis es un proceso ________ y la respiración celular es un proceso ________.",
          opciones: ["anabólico — catabólico", "catabólico — anabólico", "anaerobio — aerobio", "ambos catabólicos"],
          correcta: 0,
          explicacion: "La fotosíntesis construye glucosa y almacena energía (anabolismo); la respiración degrada la glucosa y libera energía (catabolismo). Son procesos complementarios.",
        },
      ],
    },
    {
      id: "ft4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Bioquímica · Fotosíntesis · Reactivo 4 / 16",
          enunciado: "El organelo donde ocurre la fotosíntesis es:",
          opciones: ["El cloroplasto", "La mitocondria", "El núcleo", "El lisosoma"],
          correcta: 0,
          explicacion: "La fotosíntesis ocurre en los cloroplastos, organelos exclusivos de las células vegetales y de las algas que contienen clorofila.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "bq-fotosintesis",
        },
      ],
    },
    {
      id: "ft5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Fotosíntesis · Reactivo 5 / 16",
          enunciado: "Los reactivos (lo que entra) de la fotosíntesis son:",
          opciones: ["CO₂, agua y luz", "Glucosa y oxígeno", "Etanol y CO₂", "Aminoácidos y ATP"],
          correcta: 0,
          explicacion: "La fotosíntesis usa dióxido de carbono, agua y la energía de la luz para producir glucosa y oxígeno.",
        },
      ],
    },
    {
      id: "ft6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Fotosíntesis · Reactivo 6 / 16",
          enunciado: "El gas que las plantas LIBERAN al ambiente durante la fotosíntesis es:",
          opciones: ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Metano"],
          correcta: 0,
          explicacion: "La fotosíntesis libera oxígeno como subproducto al romper las moléculas de agua. Ese O₂ es el que respiramos.",
        },
      ],
    },
    {
      id: "ft7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Fotosíntesis · Reactivo 7 / 16",
          enunciado: "Los organismos que fabrican su propio alimento mediante la fotosíntesis se llaman:",
          opciones: ["Autótrofos", "Heterótrofos", "Descomponedores", "Parásitos"],
          correcta: 0,
          explicacion: "Los autótrofos (plantas, algas, cianobacterias) producen su propio alimento (glucosa) a partir de sustancias inorgánicas usando la luz.",
        },
      ],
    },
    {
      id: "ft8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Fotosíntesis · Reactivo 8 / 16",
          enunciado: "¿Cuál ecuación representa correctamente la fotosíntesis?",
          opciones: [
            "6CO₂ + 6H₂O + luz → glucosa + 6O₂",
            "glucosa + 6O₂ → 6CO₂ + 6H₂O",
            "glucosa → etanol + 2CO₂",
            "ADP + Pᵢ → ATP",
          ],
          correcta: 0,
          explicacion: "La fotosíntesis combina CO₂ y agua con energía luminosa para producir glucosa y oxígeno; la segunda opción es la respiración (lo inverso).",
        },
      ],
    },
    {
      id: "ft9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Fotosíntesis · Reactivo 9 / 16",
          enunciado: "La fuente de energía que impulsa la fotosíntesis es:",
          opciones: ["La luz solar", "El calor del suelo", "La electricidad", "El oxígeno del aire"],
          correcta: 0,
          explicacion: "La energía de la luz solar (captada por la clorofila) es la que impulsa la fabricación de glucosa en la fotosíntesis.",
        },
      ],
    },
    {
      id: "ft10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Fotosíntesis · Reactivo 10 / 16",
          enunciado: "La fotosíntesis es fundamental para los ecosistemas porque:",
          opciones: [
            "Es la base del alimento y produce el oxígeno",
            "Elimina el agua del planeta",
            "Destruye la materia orgánica",
            "Consume todo el oxígeno",
          ],
          correcta: 0,
          explicacion: "La fotosíntesis introduce energía y materia orgánica (glucosa) a los ecosistemas y produce el oxígeno: por eso los productores son la base de las cadenas tróficas.",
        },
      ],
    },
    {
      id: "ft11",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Fotosíntesis · Reactivo 11 / 16",
          enunciado: "La relación entre la fotosíntesis y la respiración celular es que:",
          opciones: [
            "Son procesos inversos y complementarios",
            "Son idénticas",
            "Ambas producen oxígeno",
            "Ninguna usa CO₂",
          ],
          correcta: 0,
          explicacion: "La fotosíntesis produce glucosa y O₂ a partir de CO₂ y agua; la respiración hace lo contrario. Se complementan en el ciclo de la materia y la energía.",
        },
      ],
    },
    {
      id: "ft12",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Fotosíntesis · Reactivo 12 / 16",
          enunciado: "El color verde de las plantas se debe a que la clorofila:",
          opciones: [
            "Refleja la luz verde y absorbe la roja y azul",
            "Absorbe toda la luz",
            "Produce pigmento rojo",
            "No interactúa con la luz",
          ],
          correcta: 0,
          explicacion: "La clorofila absorbe principalmente la luz roja y azul y refleja la verde, por eso vemos verdes a las plantas.",
        },
      ],
    },
    {
      id: "ft13",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Fotosíntesis · Reactivo 13 / 16",
          enunciado: "Además de las plantas, ¿qué otros organismos realizan fotosíntesis?",
          opciones: [
            "Las algas y las cianobacterias",
            "Los hongos y los animales",
            "Solo los animales marinos",
            "Las bacterias del intestino",
          ],
          correcta: 0,
          explicacion: "Las algas y las cianobacterias también son fotosintéticas; de hecho, gran parte del oxígeno del planeta proviene del fitoplancton marino.",
        },
      ],
    },
    {
      id: "ft14",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Fotosíntesis · Reactivo 14 / 16",
          enunciado: "El oxígeno que hoy compone la atmósfera terrestre se originó en gran medida por:",
          opciones: [
            "La fotosíntesis de organismos a lo largo del tiempo",
            "La respiración de los animales",
            "La combustión de los volcanes",
            "La fermentación de las levaduras",
          ],
          correcta: 0,
          explicacion: "El oxígeno atmosférico se acumuló gracias a la fotosíntesis de cianobacterias y plantas durante millones de años.",
        },
      ],
    },
    {
      id: "ft15",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Bioquímica · Fotosíntesis · Reactivo 15 / 16",
          enunciado: "El «alimento» (compuesto orgánico) que la planta fabrica en la fotosíntesis es:",
          apoyo: "alimento",
          apoyoPie: "obsérvala antes de responder",
          opciones: ["Glucosa", "Oxígeno", "Agua", "Dióxido de carbono"],
          correcta: 0,
          explicacion: "La glucosa es el azúcar que la planta produce y usa como fuente de energía y de materia para crecer.",
        },
      ],
    },
    {
      id: "ft16",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Bioquímica · Fotosíntesis · Reactivo 16 / 16",
          enunciado: "La clorofila, pigmento esencial de la fotosíntesis, se encuentra dentro de:",
          opciones: ["Los cloroplastos", "Las mitocondrias", "Los ribosomas", "Los lisosomas"],
          correcta: 0,
          explicacion: "La clorofila está contenida en los cloroplastos, donde capta la luz para realizar la fotosíntesis.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "bq-fotosintesis",
        },
      ],
    },
    {
      id: "resumen",
      tipo: "lienzo",
      etiqueta: "Ideas clave de bioquímica",
      titulo: "Resumen",
      bloques: [
        {
          tipo: "lista",
          items: [
            {
              math: "\\text{Biomoléculas}",
              texto: "carbohidratos (energía), lípidos (membranas/reserva), proteínas (aminoácidos), ácidos nucleicos (nucleótidos)",
            },
            {
              math: "\\text{Enzimas}",
              texto: "proteínas que aceleran reacciones (biocatalizadores); modelo llave-cerradura",
            },
            {
              math: "\\text{ATP}",
              texto: "moneda energética; anabolismo construye (gasta), catabolismo degrada (libera)",
            },
            {
              math: "C_6H_{12}O_6 + 6O_2 \\to 6CO_2 + 6H_2O",
              texto: "respiración aerobia (mitocondria): mucha ATP; citocromos = REDOX",
            },
            {
              math: "\\text{Fermentación}",
              texto: "sin O₂; láctica (músculo) o alcohólica (levaduras); poca energía",
            },
            {
              math: "6CO_2 + 6H_2O \\xrightarrow{luz} C_6H_{12}O_6 + 6O_2",
              texto: "fotosíntesis (cloroplasto, clorofila): produce alimento y O₂",
            },
          ],
        },
      ],
    },
  ],
};
