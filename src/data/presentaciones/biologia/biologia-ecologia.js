// Datos de la presentación: Ecología (Biología · UNAM · Área 1)
// Subtemas: Niveles y factores · Cadenas tróficas y energía · Ciclos biogeoquímicos · Ecosistemas y biomas → Resumen.
// 16 reactivos por subtema.

export const PRESENTACION = {
  id: "biologia-ecologia",
  titulo: "Ecología",
  materia: "Biología",
  examenes: ["UNAM"],
  subtema: "Los seres vivos y su ambiente",
  slides: [
    {
      id: 0,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "portada",
          kicker: "Biología · UNAM",
          titulo: "Ecología",
          subtitulo: "Niveles y factores · Cadenas tróficas y flujo de energía · Ciclos del carbono, nitrógeno y agua · Biomas de México",
          figura: "eco-portada",
        },
      ],
    },
    {
      id: "niveles",
      tipo: "lienzo",
      etiqueta: "Cómo se organiza la naturaleza",
      titulo: "Niveles y factores ecológicos",
      bloques: [
        {
          tipo: "formula",
          math: "\\text{individuo} \\to \\text{población} \\to \\text{comunidad} \\to \\text{ecosistema}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "eco-niveles",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\text{Población}",
              texto: "individuos de la MISMA especie en un área",
            },
            {
              math: "\\text{Comunidad}",
              texto: "todas las poblaciones (distintas especies) que conviven",
            },
            {
              math: "\\text{Ecosistema}",
              texto: "la comunidad + el medio físico (factores bióticos y abióticos)",
            },
            {
              math: "\\text{Bióticos / abióticos}",
              texto: "bióticos = seres vivos; abióticos = agua, luz, temperatura, suelo",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Un ecosistema está formado por los factores BIÓTICOS (seres vivos) y los ABIÓTICOS (luz, agua, temperatura, suelo, minerales). El equilibrio del ecosistema depende de la interacción entre ambos. El conjunto de todos los ecosistemas de la Tierra es la biosfera.",
        },
      ],
    },
    {
      id: "ni1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Niveles y factores · Reactivo 1 / 16",
          enunciado: "La dinámica y el posible equilibrio de un ecosistema dependen de la interacción entre los factores ________ y ________.",
          opciones: ["biótico — abiótico", "físico — químico", "abiótico — ecológico", "orgánico — mineral"],
          correcta: 0,
          explicacion: "El ecosistema funciona por la interacción entre los factores bióticos (los seres vivos) y los abióticos (el medio físico: luz, agua, suelo, temperatura).",
        },
      ],
    },
    {
      id: "ni2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Niveles y factores · Reactivo 2 / 16",
          enunciado: "Un grupo de individuos de la MISMA especie que vive en un mismo lugar y tiempo forma una:",
          opciones: ["Población", "Comunidad", "Biosfera", "Especie nueva"],
          correcta: 0,
          explicacion: "Una población es el conjunto de individuos de la misma especie que habitan un área en un momento dado. Varias poblaciones forman una comunidad.",
        },
      ],
    },
    {
      id: "ni3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Niveles y factores · Reactivo 3 / 16",
          enunciado: "¿Cuál de los siguientes es un factor ABIÓTICO de un ecosistema?",
          opciones: ["La temperatura", "Las plantas", "Los hongos", "Las bacterias"],
          correcta: 0,
          explicacion: "Los factores abióticos son los componentes no vivos del ambiente: temperatura, luz, agua, suelo, humedad. Plantas, hongos y bacterias son factores bióticos.",
        },
      ],
    },
    {
      id: "ni4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Niveles y factores · Reactivo 4 / 16",
          enunciado: "El conjunto de poblaciones de DISTINTAS especies que conviven e interactúan en un área se denomina:",
          opciones: ["Comunidad", "Población", "Individuo", "Bioma"],
          correcta: 0,
          explicacion: "La comunidad (o biocenosis) es el conjunto de todas las poblaciones de diferentes especies que habitan e interactúan en un mismo lugar.",
        },
      ],
    },
    {
      id: "ni5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Ecología · Niveles y factores · Reactivo 5 / 16",
          enunciado: "Un ecosistema está formado por:",
          opciones: [
            "Una comunidad de seres vivos más su medio físico",
            "Solo los animales",
            "Solo las plantas",
            "Únicamente el agua y el suelo",
          ],
          correcta: 0,
          explicacion: "El ecosistema integra a la comunidad (componente biótico) y al medio físico (componente abiótico), junto con sus interacciones.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "eco-niveles",
        },
      ],
    },
    {
      id: "ni6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Niveles y factores · Reactivo 6 / 16",
          enunciado: "El conjunto de todos los ecosistemas del planeta, es decir, la zona de la Tierra donde hay vida, es la:",
          opciones: ["Biosfera", "Población", "Comunidad", "Especie"],
          correcta: 0,
          explicacion: "La biosfera es el nivel ecológico mayor: abarca todos los ecosistemas y la parte del planeta donde existe vida.",
        },
      ],
    },
    {
      id: "ni7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Ecología · Niveles y factores · Reactivo 7 / 16",
          enunciado: "El nivel de organización ecológica más simple, un único ser vivo, es el:",
          opciones: ["Individuo", "Ecosistema", "Comunidad", "Bioma"],
          correcta: 0,
          explicacion: "El individuo (un solo organismo) es el nivel más simple; varios individuos de la misma especie forman una población.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "eco-niveles",
        },
      ],
    },
    {
      id: "ni8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Niveles y factores · Reactivo 8 / 16",
          enunciado: "¿Cuál de los siguientes es un conjunto formado SOLO por factores abióticos?",
          opciones: [
            "Luz, agua y suelo",
            "Plantas, hongos y bacterias",
            "Peces, algas y caracoles",
            "Aves, insectos y reptiles",
          ],
          correcta: 0,
          explicacion: "La luz, el agua y el suelo son componentes no vivos (abióticos). Los demás conjuntos están formados por seres vivos (bióticos).",
        },
      ],
    },
    {
      id: "ni9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Niveles y factores · Reactivo 9 / 16",
          enunciado: "Los factores BIÓTICOS de un ecosistema incluyen a:",
          opciones: [
            "Las plantas, los animales y los microorganismos",
            "La temperatura y la luz",
            "El suelo y las rocas",
            "El viento y la lluvia",
          ],
          correcta: 0,
          explicacion: "Los factores bióticos son los seres vivos del ecosistema: productores, consumidores y descomponedores.",
        },
      ],
    },
    {
      id: "ni10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Niveles y factores · Reactivo 10 / 16",
          enunciado: "El lugar físico concreto donde vive una especie (por ejemplo, el fondo de un río) se llama:",
          opciones: ["Hábitat", "Nicho", "Bioma", "Población"],
          correcta: 0,
          explicacion: "El hábitat es el sitio físico donde vive un organismo; responde a la pregunta «¿dónde vive?».",
        },
      ],
    },
    {
      id: "ni11",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Niveles y factores · Reactivo 11 / 16",
          enunciado: "La función o «papel» que desempeña una especie dentro del ecosistema (qué come, con qué interactúa) se denomina:",
          opciones: ["Nicho ecológico", "Hábitat", "Bioma", "Comunidad"],
          correcta: 0,
          explicacion: "El nicho ecológico es el rol o modo de vida de la especie en su ecosistema (su alimentación, sus relaciones); responde a «¿a qué se dedica?».",
        },
      ],
    },
    {
      id: "ni12",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Niveles y factores · Reactivo 12 / 16",
          enunciado: "La rama de la biología que estudia las relaciones entre los seres vivos y su ambiente es la:",
          opciones: ["Ecología", "Genética", "Taxonomía", "Anatomía"],
          correcta: 0,
          explicacion: "La ecología estudia las interacciones de los organismos entre sí y con su medio físico.",
        },
      ],
    },
    {
      id: "ni13",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Ecología · Niveles y factores · Reactivo 13 / 16",
          enunciado: "¿Cuál es el orden correcto de los niveles de organización ecológica, de menor a mayor?",
          opciones: [
            "Individuo → población → comunidad → ecosistema → biosfera",
            "Ecosistema → individuo → población → biosfera",
            "Biosfera → comunidad → individuo → población",
            "Población → individuo → ecosistema → biosfera",
          ],
          correcta: 0,
          explicacion: "El orden creciente es: individuo, población (misma especie), comunidad (varias especies), ecosistema (comunidad + medio) y biosfera (todos los ecosistemas).",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "eco-niveles",
        },
      ],
    },
    {
      id: "ni14",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Niveles y factores · Reactivo 14 / 16",
          enunciado: "En un ecosistema acuático, la salinidad y el pH del agua son ejemplos de factores:",
          opciones: ["Abióticos", "Bióticos", "Genéticos", "Tróficos"],
          correcta: 0,
          explicacion: "La salinidad y el pH son condiciones físico-químicas del medio: factores abióticos que influyen en qué organismos pueden vivir ahí.",
        },
      ],
    },
    {
      id: "ni15",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Niveles y factores · Reactivo 15 / 16",
          enunciado: "El tamaño de una población tiende a estar limitado por:",
          opciones: [
            "La disponibilidad de recursos (alimento, espacio)",
            "El color de los individuos",
            "El nombre científico",
            "La cantidad de estrellas",
          ],
          correcta: 0,
          explicacion: "Los recursos limitados (alimento, agua, espacio) y otros factores como los depredadores regulan el crecimiento de una población.",
        },
      ],
    },
    {
      id: "ni16",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Niveles y factores · Reactivo 16 / 16",
          enunciado: "Otro nombre que recibe la comunidad (el conjunto de seres vivos de un ecosistema) es:",
          opciones: ["Biocenosis", "Biotopo", "Biosfera", "Bioma"],
          correcta: 0,
          explicacion: "La comunidad o biocenosis es el componente vivo del ecosistema; el medio físico se llama biotopo.",
        },
      ],
    },
    {
      id: "cadena",
      tipo: "lienzo",
      etiqueta: "Quién come a quién",
      titulo: "Cadenas tróficas y flujo de energía",
      bloques: [
        {
          tipo: "destacado",
          texto: "En la cadena trófica la energía fluye en un solo sentido: los PRODUCTORES (plantas) la captan del Sol por fotosíntesis; los CONSUMIDORES (herbívoros, carnívoros) se alimentan unos de otros; y los DESCOMPONEDORES (hongos, bacterias) reciclan la materia. En cada nivel solo pasa ~10 % de la energía; el resto se pierde como calor.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "eco-piramide",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "\\text{productor} \\to \\text{1.°} \\to \\text{2.°} \\to \\text{3.°}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Como solo el 10 % de la energía pasa de un nivel al siguiente (regla del 10 %), las cadenas tienen pocos eslabones y hay menos depredadores que presas. La energía fluye en un solo sentido (no se recicla); la materia, en cambio, sí se recicla gracias a los descomponedores.",
        },
        {
          tipo: "formula",
          math: "\\text{cada nivel} \\approx 10\\%\\ \\text{de la energía del anterior}",
        },
      ],
    },
    {
      id: "ca1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Ecología · Cadenas tróficas · Reactivo 1 / 16",
          enunciado: "En una cadena alimentaria, las plantas verdes que producen su propio alimento por fotosíntesis son los:",
          opciones: ["Productores", "Consumidores primarios", "Descomponedores", "Consumidores secundarios"],
          correcta: 0,
          explicacion: "Los productores (plantas, algas) fabrican su alimento por fotosíntesis y son la base de toda cadena trófica: captan la energía del Sol y la introducen al ecosistema.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "eco-piramide",
        },
      ],
    },
    {
      id: "ca2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Cadenas tróficas · Reactivo 2 / 16",
          enunciado: "Un animal herbívoro que se alimenta directamente de las plantas ocupa el nivel de:",
          opciones: ["Consumidor primario", "Productor", "Consumidor terciario", "Descomponedor"],
          correcta: 0,
          explicacion: "El consumidor primario es el herbívoro: se alimenta de los productores (plantas). Un carnívoro que come al herbívoro sería consumidor secundario.",
        },
      ],
    },
    {
      id: "ca3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Ecología · Cadenas tróficas · Reactivo 3 / 16",
          enunciado: "Aproximadamente, ¿qué porcentaje de la energía pasa de un nivel trófico al siguiente?",
          opciones: ["10 %", "50 %", "90 %", "100 %"],
          correcta: 0,
          explicacion: "Según la regla del 10 %, solo cerca del 10 % de la energía de un nivel se transfiere al siguiente; el resto (≈90 %) se pierde como calor en la respiración y otras actividades.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "eco-piramide",
        },
      ],
    },
    {
      id: "ca4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Cadenas tróficas · Reactivo 4 / 16",
          enunciado: "Los hongos y las bacterias que degradan los restos de seres vivos y reciclan la materia son:",
          opciones: ["Descomponedores", "Productores", "Consumidores primarios", "Herbívoros"],
          correcta: 0,
          explicacion: "Los descomponedores (hongos y bacterias) degradan la materia orgánica muerta y devuelven los nutrientes al suelo, cerrando el ciclo de la materia.",
        },
      ],
    },
    {
      id: "ca5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Cadenas tróficas · Reactivo 5 / 16",
          enunciado: "Un animal que se alimenta exclusivamente de plantas se denomina:",
          opciones: ["Herbívoro", "Carnívoro", "Descomponedor", "Productor"],
          correcta: 0,
          explicacion: "Los herbívoros se alimentan de plantas (productores) y ocupan el nivel de consumidores primarios.",
        },
      ],
    },
    {
      id: "ca6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Ecología · Cadenas tróficas · Reactivo 6 / 16",
          enunciado: "Un león que se come a una cebra (herbívora) actúa como:",
          opciones: ["Consumidor secundario (carnívoro)", "Productor", "Consumidor primario", "Descomponedor"],
          correcta: 0,
          explicacion: "El carnívoro que se alimenta de un herbívoro es un consumidor secundario. Si otro depredador se lo comiera, sería consumidor terciario.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "eco-piramide",
        },
      ],
    },
    {
      id: "ca7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Cadenas tróficas · Reactivo 7 / 16",
          enunciado: "Cuando varias cadenas alimentarias se entrelazan e interconectan, forman una:",
          opciones: ["Red trófica (alimentaria)", "Población", "Pirámide de edad", "Comunidad nueva"],
          correcta: 0,
          explicacion: "Una red trófica es el conjunto de cadenas alimentarias interconectadas de un ecosistema; refleja mejor la realidad, donde un organismo come y es comido por varios.",
        },
      ],
    },
    {
      id: "ca8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Cadenas tróficas · Reactivo 8 / 16",
          enunciado: "En un ecosistema, la energía:",
          opciones: [
            "Fluye en un solo sentido y se va perdiendo",
            "Se recicla una y otra vez",
            "Aumenta en cada nivel",
            "Permanece igual en todos los niveles",
          ],
          correcta: 0,
          explicacion: "La energía entra como luz solar, fluye de un nivel a otro y se va perdiendo como calor; no se recicla (a diferencia de la materia).",
        },
      ],
    },
    {
      id: "ca9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Cadenas tróficas · Reactivo 9 / 16",
          enunciado: "Los productores son organismos ________, porque fabrican su propio alimento.",
          opciones: ["autótrofos", "heterótrofos", "descomponedores", "parásitos"],
          correcta: 0,
          explicacion: "Los productores son autótrofos: producen su alimento (por fotosíntesis) y constituyen la base energética del ecosistema.",
        },
      ],
    },
    {
      id: "ca10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Cadenas tróficas · Reactivo 10 / 16",
          enunciado: "Los consumidores (herbívoros y carnívoros) son organismos ________, porque obtienen su alimento de otros seres vivos.",
          opciones: ["heterótrofos", "autótrofos", "fotosintéticos", "minerales"],
          correcta: 0,
          explicacion: "Los consumidores son heterótrofos: no producen su alimento, lo obtienen alimentándose de otros organismos.",
        },
      ],
    },
    {
      id: "ca11",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Cadenas tróficas · Reactivo 11 / 16",
          enunciado: "La fuente primaria de energía de la mayoría de los ecosistemas es:",
          opciones: ["El Sol", "El viento", "El suelo", "Los descomponedores"],
          correcta: 0,
          explicacion: "El Sol es la fuente de energía: los productores la captan por fotosíntesis y la introducen a la cadena trófica.",
        },
      ],
    },
    {
      id: "ca12",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Ecología · Cadenas tróficas · Reactivo 12 / 16",
          enunciado: "Cada «eslabón» o posición en la cadena alimentaria (productor, consumidor primario, etc.) se llama:",
          opciones: ["Nivel trófico", "Bioma", "Hábitat", "Población"],
          correcta: 0,
          explicacion: "Un nivel trófico agrupa a los organismos que ocupan la misma posición en la cadena alimentaria según cómo obtienen su energía.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "eco-piramide",
        },
      ],
    },
    {
      id: "ca13",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Cadenas tróficas · Reactivo 13 / 16",
          enunciado: "Un animal que se alimenta tanto de plantas como de otros animales (como el ser humano o el oso) es:",
          opciones: ["Omnívoro", "Herbívoro estricto", "Productor", "Descomponedor"],
          correcta: 0,
          explicacion: "Los omnívoros se alimentan de productores y de otros consumidores; pueden ocupar varios niveles tróficos.",
        },
      ],
    },
    {
      id: "ca14",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Cadenas tróficas · Reactivo 14 / 16",
          enunciado: "La importancia de los descomponedores en el ecosistema es que:",
          opciones: [
            "Devuelven los nutrientes al suelo para reutilizarlos",
            "Producen toda la energía",
            "Capturan la luz del Sol",
            "Solo se alimentan de plantas vivas",
          ],
          correcta: 0,
          explicacion: "Los descomponedores reintegran al suelo los nutrientes de la materia muerta, permitiendo que los productores los vuelvan a usar: cierran el ciclo de la materia.",
        },
      ],
    },
    {
      id: "ca15",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Ecología · Cadenas tróficas · Reactivo 15 / 16",
          enunciado: "En una pirámide trófica, a medida que se sube de nivel, el número de organismos y la energía disponible:",
          opciones: ["Disminuyen", "Aumentan", "Permanecen iguales", "Se duplican"],
          correcta: 0,
          explicacion: "Como solo pasa ~10 % de la energía a cada nivel, hay menos energía y menos individuos en los niveles superiores: por eso la pirámide se estrecha hacia arriba.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "eco-piramide",
        },
      ],
    },
    {
      id: "ca16",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Cadenas tróficas · Reactivo 16 / 16",
          enunciado: "Si en un ecosistema desaparecieran todos los productores, lo más probable es que:",
          opciones: [
            "Colapsara toda la cadena alimentaria",
            "No pasara nada",
            "Aumentaran los herbívoros",
            "Se produjera más energía",
          ],
          correcta: 0,
          explicacion: "Los productores son la base que sostiene a todos los demás niveles; sin ellos, los consumidores se quedarían sin energía y la cadena colapsaría.",
        },
      ],
    },
    {
      id: "ciclos",
      tipo: "lienzo",
      etiqueta: "La materia se recicla",
      titulo: "Ciclos biogeoquímicos",
      bloques: [
        {
          tipo: "formula",
          math: "\\text{materia: se recicla} \\;|\\; \\text{energía: fluye y se pierde}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "eco-ciclo-carbono",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\text{Carbono}",
              texto: "circula por fotosíntesis (lo capta) y respiración/combustión (lo libera como CO₂)",
            },
            {
              math: "\\text{Nitrógeno}",
              texto: "bacterias lo fijan del aire al suelo; pasa a plantas y animales y regresa",
            },
            {
              math: "\\text{Agua}",
              texto: "evaporación → condensación → precipitación → escurrimiento (ciclo hidrológico)",
            },
            {
              math: "\\text{Idea clave}",
              texto: "la materia se recicla una y otra vez; la energía no (fluye en un sentido)",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Los ciclos biogeoquímicos hacen que los elementos (C, N, O, agua) circulen entre los seres vivos y el ambiente y se reutilicen. A diferencia de la energía —que entra como luz y se pierde como calor—, la materia es finita y por eso debe reciclarse constantemente.",
        },
      ],
    },
    {
      id: "ci1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Ecología · Ciclos · Reactivo 1 / 16",
          enunciado: "En el ciclo del carbono, las plantas RETIRAN CO₂ de la atmósfera mediante la:",
          opciones: ["Fotosíntesis", "Respiración", "Combustión", "Evaporación"],
          correcta: 0,
          explicacion: "La fotosíntesis fija el CO₂ atmosférico para formar glucosa. La respiración y la combustión hacen lo contrario: liberan CO₂ a la atmósfera.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "eco-ciclo-carbono",
        },
      ],
    },
    {
      id: "ci2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Ciclos · Reactivo 2 / 16",
          enunciado: "Respecto a la energía y la materia en un ecosistema, lo correcto es que:",
          opciones: [
            "La materia se recicla y la energía fluye en un solo sentido",
            "Ambas se reciclan",
            "Ambas fluyen sin reciclarse",
            "La energía se recicla y la materia se pierde",
          ],
          correcta: 0,
          explicacion: "La materia (C, N, agua) circula en ciclos y se reutiliza; la energía entra como luz solar y se va perdiendo como calor en cada nivel, sin reciclarse.",
        },
      ],
    },
    {
      id: "ci3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Ciclos · Reactivo 3 / 16",
          enunciado: "En el ciclo del nitrógeno, los organismos que toman el N₂ del aire y lo convierten en formas aprovechables para las plantas son:",
          opciones: [
            "Bacterias fijadoras de nitrógeno",
            "Los hongos del suelo",
            "Los herbívoros",
            "Las algas marinas",
          ],
          correcta: 0,
          explicacion: "Las bacterias fijadoras de nitrógeno (muchas viven en las raíces de las leguminosas) transforman el N₂ atmosférico en compuestos que las plantas pueden absorber.",
        },
      ],
    },
    {
      id: "ci4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Ciclos · Reactivo 4 / 16",
          enunciado: "En el ciclo del agua, el paso del agua líquida a vapor por acción del calor solar se llama:",
          opciones: ["Evaporación", "Condensación", "Precipitación", "Infiltración"],
          correcta: 0,
          explicacion: "La evaporación convierte el agua líquida en vapor gracias al calor del Sol. Luego el vapor se condensa en nubes y cae como precipitación.",
        },
      ],
    },
    {
      id: "ci5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Ecología · Ciclos · Reactivo 5 / 16",
          enunciado: "En el ciclo del carbono, los procesos que DEVUELVEN CO₂ a la atmósfera son:",
          opciones: [
            "La respiración y la combustión",
            "Solo la fotosíntesis",
            "La condensación",
            "La fijación de nitrógeno",
          ],
          correcta: 0,
          explicacion: "La respiración de los seres vivos y la combustión (de madera o combustibles fósiles) liberan CO₂ a la atmósfera; la fotosíntesis lo retira.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "eco-ciclo-carbono",
        },
      ],
    },
    {
      id: "ci6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Ciclos · Reactivo 6 / 16",
          enunciado: "En el ciclo del agua, cuando el vapor se enfría y forma las nubes, ocurre la:",
          opciones: ["Condensación", "Evaporación", "Infiltración", "Precipitación"],
          correcta: 0,
          explicacion: "La condensación es el paso de vapor de agua a gotas líquidas (nubes) al enfriarse en la atmósfera.",
        },
      ],
    },
    {
      id: "ci7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Ciclos · Reactivo 7 / 16",
          enunciado: "La caída de agua desde las nubes en forma de lluvia, nieve o granizo se llama:",
          opciones: ["Precipitación", "Evaporación", "Condensación", "Transpiración"],
          correcta: 0,
          explicacion: "La precipitación es el regreso del agua a la superficie en forma de lluvia, nieve o granizo, después de la condensación.",
        },
      ],
    },
    {
      id: "ci8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Ciclos · Reactivo 8 / 16",
          enunciado: "El recorrido por el que un elemento (como el carbono o el agua) circula entre los seres vivos y el ambiente se llama ciclo:",
          opciones: ["Biogeoquímico", "Celular", "Cardíaco", "Lunar"],
          correcta: 0,
          explicacion: "Un ciclo biogeoquímico describe la circulación de un elemento entre los componentes vivos (bio) y físicos (geo) del planeta.",
        },
      ],
    },
    {
      id: "ci9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Ciclos · Reactivo 9 / 16",
          enunciado: "El nitrógeno es un elemento indispensable para los seres vivos porque forma parte de:",
          opciones: [
            "Las proteínas y los ácidos nucleicos",
            "Solo del agua",
            "Únicamente de los lípidos",
            "Las rocas y minerales solamente",
          ],
          correcta: 0,
          explicacion: "El nitrógeno es componente esencial de las proteínas (aminoácidos) y de los ácidos nucleicos (ADN y ARN), por eso su ciclo es vital.",
        },
      ],
    },
    {
      id: "ci10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Ciclos · Reactivo 10 / 16",
          enunciado: "La quema de combustibles fósiles (petróleo, carbón) afecta el ciclo del carbono porque:",
          opciones: [
            "Libera grandes cantidades de CO₂ a la atmósfera",
            "Retira CO₂ del aire",
            "Produce oxígeno",
            "Enfría el planeta",
          ],
          correcta: 0,
          explicacion: "La combustión de combustibles fósiles libera CO₂ acumulado durante millones de años, aumentando su concentración atmosférica y el efecto invernadero.",
        },
      ],
    },
    {
      id: "ci11",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Ciclos · Reactivo 11 / 16",
          enunciado: "En los ciclos de la materia, los descomponedores cumplen la función de:",
          opciones: [
            "Devolver los nutrientes al suelo",
            "Capturar la luz solar",
            "Producir oxígeno",
            "Fijar el nitrógeno del aire",
          ],
          correcta: 0,
          explicacion: "Los descomponedores liberan los nutrientes contenidos en la materia muerta y los devuelven al suelo, permitiendo su reutilización.",
        },
      ],
    },
    {
      id: "ci12",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Ecología · Ciclos · Reactivo 12 / 16",
          enunciado: "El elemento que circula entre la atmósfera, las plantas y los animales mediante la fotosíntesis y la respiración es el:",
          opciones: ["Carbono", "Hierro", "Sodio", "Calcio"],
          correcta: 0,
          explicacion: "El carbono circula en su ciclo: las plantas lo captan como CO₂ por fotosíntesis y los seres vivos lo devuelven por respiración (y por combustión).",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "eco-ciclo-carbono",
        },
      ],
    },
    {
      id: "ci13",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Ciclos · Reactivo 13 / 16",
          enunciado: "Muchas bacterias fijadoras de nitrógeno viven en simbiosis en las raíces de plantas como:",
          opciones: [
            "Las leguminosas (frijol, chícharo)",
            "Los cactus del desierto",
            "Las algas marinas",
            "Los pinos de montaña",
          ],
          correcta: 0,
          explicacion: "Las leguminosas (frijol, chícharo, alfalfa) albergan en sus raíces bacterias fijadoras de nitrógeno, lo que enriquece el suelo.",
        },
      ],
    },
    {
      id: "ci14",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Ciclos · Reactivo 14 / 16",
          enunciado: "En el ciclo del carbono, la fotosíntesis y la respiración son procesos:",
          opciones: ["Opuestos que se equilibran", "Idénticos", "Que solo liberan CO₂", "Que no afectan al carbono"],
          correcta: 0,
          explicacion: "La fotosíntesis retira CO₂ y la respiración lo libera: son procesos opuestos cuyo equilibrio mantiene estable el ciclo del carbono.",
        },
      ],
    },
    {
      id: "ci15",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Ciclos · Reactivo 15 / 16",
          enunciado: "En el ciclo del agua, las plantas devuelven vapor de agua a la atmósfera por sus hojas mediante la:",
          opciones: ["Transpiración", "Fotosíntesis", "Fijación", "Combustión"],
          correcta: 0,
          explicacion: "La transpiración es la pérdida de vapor de agua por las hojas de las plantas; contribuye al ciclo hidrológico junto con la evaporación.",
        },
      ],
    },
    {
      id: "ci16",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Ciclos · Reactivo 16 / 16",
          enunciado: "El aumento del CO₂ atmosférico por las actividades humanas se asocia principalmente con:",
          opciones: [
            "El calentamiento global (efecto invernadero)",
            "El enfriamiento del planeta",
            "La desaparición del agua",
            "La fijación de nitrógeno",
          ],
          correcta: 0,
          explicacion: "El CO₂ es un gas de efecto invernadero; su aumento intensifica la retención de calor y contribuye al calentamiento global.",
        },
      ],
    },
    {
      id: "biomas",
      tipo: "lienzo",
      etiqueta: "La biodiversidad del país",
      titulo: "Ecosistemas y biomas de México",
      bloques: [
        {
          tipo: "destacado",
          texto: "Un BIOMA es un gran ecosistema definido por su clima y su vegetación. México es megadiverso: tiene selvas (cálidas y húmedas, muy productivas), bosques de coníferas y encinos (zonas templadas y frías), desiertos (matorral xerófilo) y manglares (costas, plantas resistentes a la sal y alta productividad).",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "eco-biomas",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "\\text{clima} + \\text{vegetación} = \\text{bioma}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Cada bioma se reconoce por su clima y vegetación dominante: las selvas son cálido-húmedas; los manglares crecen en costas con agua salobre y plantas tolerantes a la salinidad; los bosques de coníferas, en climas templados y fríos. La pérdida de estos ecosistemas amenaza la biodiversidad.",
        },
        {
          tipo: "formula",
          math: "\\text{México: país megadiverso}",
        },
      ],
    },
    {
      id: "bi1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Ecología · Biomas · Reactivo 1 / 16",
          enunciado: "¿Qué ecosistema se desarrolla en los trópicos húmedos, en las costas, formado por plantas resistentes a la salinidad y con alta productividad biótica?",
          opciones: ["Manglares", "Bosques de encino", "Selvas de montaña", "Bosques de coníferas"],
          correcta: 0,
          explicacion: "Los manglares crecen en las costas tropicales, con plantas (mangles) adaptadas al agua salada; son muy productivos y sirven de refugio y criadero para muchas especies.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "eco-biomas",
        },
      ],
    },
    {
      id: "bi2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Biomas · Reactivo 2 / 16",
          enunciado: "Un gran ecosistema caracterizado por un clima y una vegetación dominante (como una selva o un desierto) se denomina:",
          opciones: ["Bioma", "Población", "Nicho", "Cadena trófica"],
          correcta: 0,
          explicacion: "Un bioma es una gran región ecológica definida por su clima y su tipo de vegetación característica: selva, desierto, bosque templado, tundra, etc.",
        },
      ],
    },
    {
      id: "bi3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Biomas · Reactivo 3 / 16",
          enunciado: "El bioma cálido y húmedo, con la mayor diversidad de plantas y animales, abundante en el sureste de México, es:",
          opciones: ["La selva", "El desierto", "La tundra", "El bosque de coníferas"],
          correcta: 0,
          explicacion: "Las selvas tropicales son cálidas y húmedas y albergan la mayor biodiversidad. En México se encuentran sobre todo en el sureste (Chiapas, península de Yucatán).",
        },
      ],
    },
    {
      id: "bi4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Biomas · Reactivo 4 / 16",
          enunciado: "Que México sea uno de los países con mayor variedad de especies y ecosistemas del mundo significa que es un país:",
          opciones: ["Megadiverso", "Endémico", "Desértico", "Homogéneo"],
          correcta: 0,
          explicacion: "México es un país megadiverso: por su clima, relieve y posición geográfica alberga una enorme variedad de especies y ecosistemas; está entre los cinco más biodiversos del planeta.",
        },
      ],
    },
    {
      id: "bi5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Ecología · Biomas · Reactivo 5 / 16",
          enunciado: "El bioma caracterizado por escasez de lluvia, grandes cambios de temperatura y plantas como los cactus es el:",
          opciones: ["Desierto", "Selva", "Manglar", "Bosque tropical"],
          correcta: 0,
          explicacion: "El desierto es un bioma árido con muy poca precipitación; su vegetación (cactus, matorral xerófilo) está adaptada a conservar agua.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "eco-biomas",
        },
      ],
    },
    {
      id: "bi6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Biomas · Reactivo 6 / 16",
          enunciado: "El bioma dominado por pinos y otros árboles de hoja perenne, propio de climas templados y fríos, es el:",
          opciones: ["Bosque de coníferas", "Selva tropical", "Manglar", "Desierto"],
          correcta: 0,
          explicacion: "Los bosques de coníferas (pinos, oyameles) se desarrollan en climas templados y fríos, como en las montañas de México.",
        },
      ],
    },
    {
      id: "bi7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Biomas · Reactivo 7 / 16",
          enunciado: "El bioma más frío, sin árboles, con suelo congelado gran parte del año (permafrost), es la:",
          opciones: ["Tundra", "Selva", "Sabana", "Pradera tropical"],
          correcta: 0,
          explicacion: "La tundra es un bioma de clima muy frío, con vegetación baja (musgos, líquenes) y suelo congelado (permafrost). No existe de forma natural en México.",
        },
      ],
    },
    {
      id: "bi8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Biomas · Reactivo 8 / 16",
          enunciado: "Una función ecológica importante de los manglares es:",
          opciones: [
            "Servir de refugio y criadero de muchas especies",
            "Producir desiertos",
            "Eliminar el oxígeno del agua",
            "Impedir toda la vida marina",
          ],
          correcta: 0,
          explicacion: "Los manglares son muy productivos: protegen la costa de la erosión y sirven de refugio y zona de crianza para peces, crustáceos y aves.",
        },
      ],
    },
    {
      id: "bi9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Biomas · Reactivo 9 / 16",
          enunciado: "La variedad de seres vivos (especies, genes y ecosistemas) que hay en una región se llama:",
          opciones: ["Biodiversidad", "Biomasa", "Densidad", "Población"],
          correcta: 0,
          explicacion: "La biodiversidad es la variedad de la vida: incluye la diversidad de especies, la genética y la de ecosistemas.",
        },
      ],
    },
    {
      id: "bi10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Biomas · Reactivo 10 / 16",
          enunciado: "El bioma de grandes extensiones de pastos, con pocos árboles, como las praderas o las sabanas, se caracteriza por dominar:",
          opciones: ["Las hierbas y pastizales", "Los árboles altos", "Los cactus", "El hielo"],
          correcta: 0,
          explicacion: "Los pastizales (praderas, sabanas) están dominados por hierbas y pastos, con pocos árboles, en climas con lluvias estacionales.",
        },
      ],
    },
    {
      id: "bi11",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Biomas · Reactivo 11 / 16",
          enunciado: "Un ecosistema marino de gran biodiversidad, formado por colonias de pequeños animales que construyen estructuras calcáreas, es el:",
          opciones: ["Arrecife de coral", "Desierto", "Bosque de pinos", "Pastizal"],
          correcta: 0,
          explicacion: "Los arrecifes de coral son ecosistemas marinos muy biodiversos, construidos por los corales; México tiene arrecifes importantes en el Caribe.",
        },
      ],
    },
    {
      id: "bi12",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Biomas · Reactivo 12 / 16",
          enunciado: "Para proteger la biodiversidad, los países establecen:",
          opciones: [
            "Áreas naturales protegidas (reservas)",
            "Más carreteras",
            "Zonas industriales",
            "Tala libre de bosques",
          ],
          correcta: 0,
          explicacion: "Las áreas naturales protegidas (parques nacionales, reservas de la biosfera) conservan ecosistemas y especies frente a las amenazas humanas.",
        },
      ],
    },
    {
      id: "bi13",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Biomas · Reactivo 13 / 16",
          enunciado: "La principal amenaza para las selvas y bosques, que reduce la biodiversidad, es:",
          opciones: ["La deforestación", "La fotosíntesis", "La lluvia", "La polinización"],
          correcta: 0,
          explicacion: "La deforestación (tala y quema de bosques y selvas) destruye hábitats, reduce la biodiversidad y altera los ciclos del agua y del carbono.",
        },
      ],
    },
    {
      id: "bi14",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Biomas · Reactivo 14 / 16",
          enunciado: "Una de las selvas húmedas más importantes de México, ubicada en Chiapas, es la:",
          opciones: ["Selva Lacandona", "Tundra del norte", "Pradera central", "Estepa siberiana"],
          correcta: 0,
          explicacion: "La Selva Lacandona, en Chiapas, es una de las selvas tropicales más biodiversas de México y un área prioritaria de conservación.",
        },
      ],
    },
    {
      id: "bi15",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Biomas · Reactivo 15 / 16",
          enunciado: "Los dos factores climáticos que más determinan qué bioma se desarrolla en una región son:",
          opciones: [
            "La temperatura y la precipitación",
            "El color del suelo y el ruido",
            "La altitud de las nubes y el viento solar",
            "La cantidad de minerales y el magnetismo",
          ],
          correcta: 0,
          explicacion: "La temperatura y la precipitación (lluvia) determinan principalmente el tipo de vegetación y, por tanto, el bioma de una región.",
        },
      ],
    },
    {
      id: "bi16",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Biomas · Reactivo 16 / 16",
          enunciado: "Una especie que vive ÚNICAMENTE en una región del mundo y en ningún otro lugar se llama:",
          opciones: ["Endémica", "Migratoria", "Doméstica", "Cosmopolita"],
          correcta: 0,
          explicacion: "Una especie endémica es exclusiva de un área geográfica determinada; México tiene muchas especies endémicas, lo que aumenta su valor como país megadiverso.",
        },
      ],
    },
    {
      id: "impacto",
      tipo: "lienzo",
      etiqueta: "Acciones que cuidan o dañan el ambiente",
      titulo: "Impacto ambiental y conservación aplicada",
      bloques: [
        {
          tipo: "formula",
          math: "\\text{acción humana} \\to \\text{proteger} \\;|\\; \\text{degradar}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "eco-biomas",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\text{Proteger}",
              texto: "consumir productos orgánicos locales, control biológico de plagas, reducir emisiones",
            },
            {
              math: "\\text{Preservar}",
              texto: "listas rojas (UICN) que registran y protegen especies amenazadas",
            },
            {
              math: "\\text{Incrementar}",
              texto: "aprovechar de forma sustentable plantas endémicas; evitar especies invasoras",
            },
            {
              math: "\\text{Degradar}",
              texto: "sobrepesca, herbicidas, gases de efecto invernadero, especies exóticas invasoras",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Cada decisión cotidiana tiene un impacto ambiental. Las acciones de conservación buscan proteger la biodiversidad (listas rojas de la UICN), incrementarla aprovechando especies endémicas de forma sustentable, y reducir la contaminación (control biológico en vez de pesticidas; menos emisiones de industrias y automóviles). El blanqueamiento de corales es un caso emblemático: se debe al aumento de la temperatura del océano por los gases de efecto invernadero, y su solución es disminuir esas emisiones.",
        },
      ],
    },
    {
      id: "im1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Impacto ambiental · Reactivo 1 / 5",
          enunciado: "¿Cuál de las siguientes acciones cotidianas protege el ambiente?",
          opciones: [
            "Consumir productos orgánicos cultivados localmente",
            "Comprar agua embotellada en envases desechables",
            "Tirar los restos de comida al drenaje",
          ],
          correcta: 0,
          explicacion: "Consumir productos orgánicos cultivados localmente reduce el uso de agroquímicos y las emisiones del transporte. El agua embotellada genera residuos plásticos y tirar comida al drenaje contamina el agua.",
        },
      ],
    },
    {
      id: "im2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Impacto ambiental · Reactivo 2 / 5",
          enunciado: "¿Qué acción contribuye a PRESERVAR la biodiversidad?",
          opciones: [
            "Incluir especies amenazadas en la lista roja (UICN)",
            "Acidificar el agua de los ríos y mares",
            "Practicar la sobrepesca en las costas",
          ],
          correcta: 0,
          explicacion: "La inclusión de especies en la lista roja de la UICN las registra como amenazadas y orienta su protección. La acidificación del agua y la sobrepesca, en cambio, reducen la biodiversidad.",
        },
      ],
    },
    {
      id: "im3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Impacto ambiental · Reactivo 3 / 5",
          enunciado: "¿Cuál de las siguientes acciones ayuda a INCREMENTAR la biodiversidad de una región?",
          opciones: [
            "Aprovechar de forma sustentable las plantas endémicas del lugar",
            "Introducir especies exóticas o invasoras",
            "Sustituir la vegetación nativa por una sola especie comercial",
          ],
          correcta: 0,
          explicacion: "Aprovechar de manera sustentable las plantas endémicas favorece su conservación y la diversidad local. Las especies exóticas o invasoras desplazan a las nativas y reducen la biodiversidad.",
        },
      ],
    },
    {
      id: "im4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Impacto ambiental · Reactivo 4 / 5",
          enunciado: "Un método de control de plagas que NO daña el ambiente es el:",
          opciones: [
            "Control biológico (usar enemigos naturales de la plaga)",
            "Uso intensivo de herbicidas",
            "Aplicación masiva de pesticidas químicos",
          ],
          correcta: 0,
          explicacion: "El control biológico emplea depredadores o parásitos naturales de la plaga, sin contaminar. Los herbicidas y pesticidas químicos dañan otros organismos, el suelo y el agua.",
        },
      ],
    },
    {
      id: "im5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Ecología · Impacto ambiental · Reactivo 5 / 5",
          enunciado: "El blanqueamiento de los corales se debe al aumento de la temperatura del océano por los gases de efecto invernadero. ¿Cuál es su principal solución?",
          opciones: [
            "Disminuir las emisiones de industrias y automóviles",
            "Aumentar la pesca en los arrecifes",
            "Verter más nutrientes al mar",
          ],
          correcta: 0,
          explicacion: "El calentamiento del océano (por los gases de efecto invernadero) provoca que los corales expulsen sus algas simbióticas y se blanqueen. La solución es reducir las emisiones de industrias y automóviles que generan esos gases.",
        },
      ],
    },
    {
      id: "resumen",
      tipo: "lienzo",
      etiqueta: "Ideas clave de ecología",
      titulo: "Resumen",
      bloques: [
        {
          tipo: "lista",
          items: [
            {
              math: "\\text{Niveles}",
              texto: "individuo → población (misma especie) → comunidad → ecosistema → biosfera",
            },
            {
              math: "\\text{Factores}",
              texto: "bióticos (seres vivos) + abióticos (luz, agua, temperatura, suelo)",
            },
            {
              math: "\\text{Cadena trófica}",
              texto: "productores → consumidores → descomponedores; energía fluye (regla del 10 %)",
            },
            {
              math: "\\text{Materia} \\neq \\text{energía}",
              texto: "la materia se recicla (ciclos C, N, agua); la energía fluye y se pierde",
            },
            {
              math: "\\text{Biomas}",
              texto: "clima + vegetación: selvas, manglares (costa, salinidad), bosques, desiertos",
            },
            {
              math: "\\text{Conservación}",
              texto: "proteger (lista roja UICN), incrementar (endémicas sustentables), control biológico, reducir emisiones",
            },
            {
              titulo: "México",
              texto: "país megadiverso: enorme variedad de especies y ecosistemas; conservar la biodiversidad",
            },
          ],
        },
      ],
    },
  ],
};
