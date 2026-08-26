// Datos de la presentación: Evolución y Clasificación (Biología · UNAM · Área 1)
// Subtemas: Origen de la vida · Teorías evolutivas · Pruebas de la evolución · Clasificación de los seres vivos → Resumen.
// 16 reactivos por subtema.

export const PRESENTACION = {
  id: "biologia-evolucion",
  titulo: "Evolución y Clasificación",
  materia: "Biología",
  examenes: ["UNAM"],
  subtema: "Origen y diversidad de la vida",
  slides: [
    {
      id: 0,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "portada",
          kicker: "Biología · UNAM",
          titulo: "Evolución y Clasificación",
          subtitulo: "Origen de la vida · Lamarck y Darwin · Selección natural · Pruebas de la evolución · Los cinco reinos",
          figura: "evo-portada",
        },
      ],
    },
    {
      id: "origen-vida",
      tipo: "lienzo",
      etiqueta: "¿De dónde vino la primera célula?",
      titulo: "El origen de la vida",
      bloques: [
        {
          tipo: "formula",
          math: "\\text{materia inorgánica} \\to \\text{materia orgánica} \\to \\text{vida}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "evo-origen-vida",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\text{Quimiosintética}",
              texto: "Oparin y Haldane: la vida surgió de moléculas simples que evolucionaron en el océano primitivo",
            },
            {
              math: "\\text{Miller}",
              texto: "demostró en el laboratorio que se forman aminoácidos a partir de gases y descargas eléctricas",
            },
            {
              math: "\\text{Panspermia}",
              texto: "la vida (o sus moléculas) llegó del espacio",
            },
            {
              math: "\\text{Refutada}",
              texto: "la generación espontánea: la vida NO surge de la nada (Pasteur, Redi)",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "La teoría quimiosintética de Oparin (Rusia) y Haldane (Inglaterra) propone que, en la Tierra primitiva sin oxígeno, las moléculas inorgánicas reaccionaron formando compuestos orgánicos cada vez más complejos hasta originar las primeras células. Miller (1953) lo apoyó experimentalmente.",
        },
      ],
    },
    {
      id: "ov1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Evolución · Origen de la vida · Reactivo 1 / 16",
          enunciado: "La Teoría Quimiosintética de Oparin y Haldane permitió:",
          opciones: [
            "Proponer que la materia orgánica evolucionó a partir de moléculas simples",
            "Descubrir la estructura del ADN",
            "Demostrar la generación espontánea",
            "Clonar la primera célula",
          ],
          correcta: 0,
          explicacion: "La teoría quimiosintética propone que la vida se originó cuando moléculas inorgánicas simples se combinaron y evolucionaron hasta formar materia orgánica y, finalmente, las primeras células.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "evo-origen-vida",
        },
      ],
    },
    {
      id: "ov2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Origen de la vida · Reactivo 2 / 16",
          enunciado: "El experimento de Stanley Miller demostró que es posible formar ________ a partir de gases simples y descargas eléctricas.",
          opciones: ["Aminoácidos", "Células completas", "ADN", "Bacterias"],
          correcta: 0,
          explicacion: "Miller (1953) simuló la atmósfera primitiva con gases y descargas eléctricas y obtuvo aminoácidos (los componentes de las proteínas), apoyando la hipótesis de Oparin.",
        },
      ],
    },
    {
      id: "ov3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Origen de la vida · Reactivo 3 / 16",
          enunciado: "La idea de que los seres vivos pueden surgir de la materia inerte (por ejemplo, gusanos de la carne podrida) fue REFUTADA. Se conoce como teoría de la:",
          opciones: ["Generación espontánea", "Quimiosíntesis", "Panspermia", "Selección natural"],
          correcta: 0,
          explicacion: "La generación espontánea sostenía que la vida surgía de la materia inerte. Redi y, sobre todo, Pasteur la refutaron experimentalmente: todo ser vivo proviene de otro ser vivo.",
        },
      ],
    },
    {
      id: "ov4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Origen de la vida · Reactivo 4 / 16",
          enunciado: "Según la teoría quimiosintética, la atmósfera de la Tierra primitiva se caracterizaba por:",
          opciones: [
            "Carecer de oxígeno libre",
            "Tener mucho oxígeno",
            "Ser igual a la actual",
            "Estar formada solo por agua",
          ],
          correcta: 0,
          explicacion: "La atmósfera primitiva era reductora, SIN oxígeno libre. Esa ausencia de O₂ permitió que las moléculas orgánicas se formaran y acumularan sin oxidarse.",
        },
      ],
    },
    {
      id: "ov5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Evolución · Origen de la vida · Reactivo 5 / 16",
          enunciado: "Los científicos que propusieron la teoría quimiosintética sobre el origen de la vida fueron:",
          opciones: ["Oparin y Haldane", "Watson y Crick", "Schleiden y Schwann", "Lamarck y Darwin"],
          correcta: 0,
          explicacion: "Alexander Oparin y John Haldane formularon, de manera independiente, la teoría quimiosintética del origen de la vida.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "evo-origen-vida",
        },
      ],
    },
    {
      id: "ov6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Origen de la vida · Reactivo 6 / 16",
          enunciado: "El científico que con sus experimentos con caldos y matraces refutó definitivamente la generación espontánea fue:",
          opciones: ["Louis Pasteur", "Charles Darwin", "Gregor Mendel", "Robert Hooke"],
          correcta: 0,
          explicacion: "Pasteur demostró que los microorganismos no aparecen espontáneamente, sino que provienen de otros microorganismos del aire.",
        },
      ],
    },
    {
      id: "ov7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Origen de la vida · Reactivo 7 / 16",
          enunciado: "Oparin llamó ________ a los agregados de moléculas orgánicas que pudieron ser un paso previo a las primeras células.",
          opciones: ["coacervados", "fósiles", "gametos", "esporas"],
          correcta: 0,
          explicacion: "Oparin propuso los coacervados: gotas formadas por moléculas orgánicas que podían intercambiar sustancias con el medio, como un precursor de las células.",
        },
      ],
    },
    {
      id: "ov8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Origen de la vida · Reactivo 8 / 16",
          enunciado: "Se cree que las primeras formas de vida en la Tierra fueron células:",
          opciones: [
            "Procariotas y anaerobias",
            "Eucariotas y aerobias",
            "Vegetales con cloroplastos",
            "Animales pluricelulares",
          ],
          correcta: 0,
          explicacion: "Las primeras células fueron procariotas y anaerobias (sin oxígeno), pues la atmósfera primitiva carecía de O₂ libre.",
        },
      ],
    },
    {
      id: "ov9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Origen de la vida · Reactivo 9 / 16",
          enunciado: "La hipótesis de que la vida (o sus moléculas) llegó a la Tierra desde el espacio se llama:",
          opciones: ["Panspermia", "Quimiosíntesis", "Generación espontánea", "Selección natural"],
          correcta: 0,
          explicacion: "La panspermia propone que la vida, o las moléculas que la originaron, llegó del espacio (por ejemplo, en meteoritos).",
        },
      ],
    },
    {
      id: "ov10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Origen de la vida · Reactivo 10 / 16",
          enunciado: "Francesco Redi, con su experimento de la carne y las moscas, demostró que:",
          opciones: [
            "Los gusanos no surgen solos de la carne",
            "La carne genera vida",
            "Las moscas no ponen huevos",
            "El aire crea insectos",
          ],
          correcta: 0,
          explicacion: "Redi mostró que en la carne cubierta no aparecían gusanos: estos provenían de los huevos de las moscas, no de la generación espontánea.",
        },
      ],
    },
    {
      id: "ov11",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Origen de la vida · Reactivo 11 / 16",
          enunciado: "Según Oparin, las primeras moléculas orgánicas se acumularon y reaccionaron en:",
          opciones: [
            "El océano (caldo o sopa primitiva)",
            "El interior del Sol",
            "Las nubes altas",
            "El hielo polar",
          ],
          correcta: 0,
          explicacion: "Oparin planteó que las moléculas orgánicas se acumularon en el océano primitivo, formando una «sopa» o caldo donde la complejidad fue aumentando.",
        },
      ],
    },
    {
      id: "ov12",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Origen de la vida · Reactivo 12 / 16",
          enunciado: "La idea central de la teoría quimiosintética es que la materia ________ se transformó en materia ________.",
          opciones: ["inorgánica — orgánica", "orgánica — inorgánica", "viva — inerte", "sólida — gaseosa"],
          correcta: 0,
          explicacion: "La quimiosíntesis plantea que la materia inorgánica simple evolucionó químicamente hasta formar materia orgánica compleja y luego la vida.",
        },
      ],
    },
    {
      id: "ov13",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Origen de la vida · Reactivo 13 / 16",
          enunciado: "En su experimento, Miller usó una mezcla de gases y aplicó descargas eléctricas para simular:",
          opciones: [
            "Los rayos de la atmósfera primitiva",
            "El calor del Sol actual",
            "La radiación de un reactor",
            "La luz de la Luna",
          ],
          correcta: 0,
          explicacion: "Miller simuló las condiciones de la Tierra primitiva: una atmósfera de gases y descargas eléctricas que representaban los rayos, fuente de energía para formar moléculas orgánicas.",
        },
      ],
    },
    {
      id: "ov14",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Origen de la vida · Reactivo 14 / 16",
          enunciado: "Por su forma de nutrición, se piensa que los primeros organismos fueron:",
          opciones: [
            "Heterótrofos (tomaban materia orgánica del medio)",
            "Autótrofos fotosintéticos",
            "Descomponedores de madera",
            "Animales depredadores",
          ],
          correcta: 0,
          explicacion: "Los primeros organismos habrían sido heterótrofos: se nutrían de la materia orgánica acumulada en el caldo primitivo, antes de que apareciera la fotosíntesis.",
        },
      ],
    },
    {
      id: "ov15",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Origen de la vida · Reactivo 15 / 16",
          enunciado: "El oxígeno comenzó a acumularse en la atmósfera terrestre cuando aparecieron organismos capaces de:",
          opciones: ["Realizar fotosíntesis", "Hacer fermentación", "Reproducirse sexualmente", "Formar fósiles"],
          correcta: 0,
          explicacion: "La fotosíntesis (de cianobacterias primero) liberó oxígeno que, con el tiempo, transformó la atmósfera y permitió la vida aerobia.",
        },
      ],
    },
    {
      id: "ov16",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Origen de la vida · Reactivo 16 / 16",
          enunciado: "Antes de la evolución biológica de las células, la teoría quimiosintética plantea una etapa de:",
          opciones: [
            "Evolución química (prebiótica)",
            "Selección artificial",
            "Reproducción sexual",
            "Mitosis acelerada",
          ],
          correcta: 0,
          explicacion: "Primero hubo una evolución química o prebiótica (formación de moléculas orgánicas cada vez más complejas) y después la evolución biológica de las primeras células.",
        },
      ],
    },
    {
      id: "teorias-evo",
      tipo: "lienzo",
      etiqueta: "Cómo cambian las especies",
      titulo: "Lamarck vs. Darwin",
      bloques: [
        {
          tipo: "formula",
          math: "\\text{Darwin: selección natural}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "evo-darwin-lamarck",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\text{Lamarck}",
              texto: "el uso/desuso modifica al organismo y eso se hereda («caracteres adquiridos»). INCORRECTO",
            },
            {
              math: "\\text{Darwin}",
              texto: "selección natural: sobreviven y se reproducen los más aptos al ambiente",
            },
            {
              math: "\\text{Variabilidad}",
              texto: "los individuos de una población son distintos; el ambiente «selecciona»",
            },
            {
              math: "\\text{Adaptación}",
              texto: "las características ventajosas se vuelven comunes con las generaciones",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Lamarck proponía que el uso de un órgano lo desarrollaba y ese cambio se heredaba (el cuello de la jirafa se alargó por estirarse). Darwin lo corrigió: ya existían jirafas con cuellos de distinto largo; las de cuello largo alcanzaban más alimento, sobrevivían y dejaban más descendencia (selección natural).",
        },
      ],
    },
    {
      id: "te1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Evolución · Teorías · Reactivo 1 / 16",
          enunciado: "El mecanismo central de la teoría de la evolución de Charles Darwin es:",
          opciones: [
            "La selección natural",
            "La herencia de caracteres adquiridos",
            "La generación espontánea",
            "El uso y desuso de los órganos",
          ],
          correcta: 0,
          explicacion: "Darwin propuso la selección natural: en una población con variabilidad, los individuos mejor adaptados sobreviven y se reproducen más, transmitiendo sus rasgos.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "evo-darwin-lamarck",
        },
      ],
    },
    {
      id: "te2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Teorías · Reactivo 2 / 16",
          enunciado: "La idea de que «un órgano se desarrolla por el uso y ese cambio se hereda» corresponde a la teoría de:",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: ["Lamarck", "Darwin", "Mendel", "Pasteur"],
          correcta: 0,
          explicacion: "Lamarck propuso la herencia de los caracteres adquiridos por el uso y desuso. Hoy se sabe que es incorrecta: los cambios adquiridos en vida no se heredan.",
        },
      ],
    },
    {
      id: "te3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Teorías · Reactivo 3 / 16",
          enunciado: "Para que la selección natural pueda actuar sobre una población, es indispensable que exista:",
          opciones: [
            "Variabilidad entre los individuos",
            "Reproducción asexual",
            "Un ambiente sin cambios",
            "Caracteres adquiridos",
          ],
          correcta: 0,
          explicacion: "Sin variabilidad (diferencias entre individuos) no habría sobre qué seleccionar. La selección natural favorece a los individuos con rasgos ventajosos; esa variación es la materia prima.",
        },
      ],
    },
    {
      id: "te4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Teorías · Reactivo 4 / 16",
          enunciado: "El proceso por el que, a lo largo del tiempo, una población acumula características que la hacen más apta a su ambiente se llama:",
          opciones: ["Adaptación", "Mutación instantánea", "Generación espontánea", "Polinización"],
          correcta: 0,
          explicacion: "La adaptación es el resultado de la selección natural: las características ventajosas se vuelven más frecuentes generación tras generación, ajustando a la población a su entorno.",
        },
      ],
    },
    {
      id: "te5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Evolución · Teorías · Reactivo 5 / 16",
          enunciado: "La «ley del uso y desuso» de los órganos fue propuesta por:",
          opciones: ["Lamarck", "Darwin", "Wallace", "Oparin"],
          correcta: 0,
          explicacion: "Lamarck propuso que el uso desarrolla los órganos y el desuso los atrofia, y que esos cambios se heredan: la ley del uso y desuso.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "evo-darwin-lamarck",
        },
      ],
    },
    {
      id: "te6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Teorías · Reactivo 6 / 16",
          enunciado: "Darwin desarrolló sus ideas en gran parte gracias a las observaciones de su viaje en el barco:",
          opciones: ["HMS Beagle", "Santa María", "Titanic", "Calypso"],
          correcta: 0,
          explicacion: "Durante su viaje en el HMS Beagle, especialmente en las islas Galápagos, Darwin reunió observaciones (como las de los pinzones) que lo llevaron a la selección natural.",
        },
      ],
    },
    {
      id: "te7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Teorías · Reactivo 7 / 16",
          enunciado: "La frase «supervivencia del más apto» resume la idea de que sobreviven los organismos:",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: ["Mejor adaptados a su ambiente", "Más grandes siempre", "Más antiguos", "Que no se reproducen"],
          correcta: 0,
          explicacion: "El «más apto» es el mejor adaptado a su ambiente: el que sobrevive y deja más descendencia, no necesariamente el más fuerte o grande.",
        },
      ],
    },
    {
      id: "te8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Teorías · Reactivo 8 / 16",
          enunciado: "Darwin observó que los organismos producen más descendencia de la que sobrevive, lo que genera:",
          opciones: [
            "Una lucha por la existencia",
            "La extinción inmediata",
            "La generación espontánea",
            "El uso y desuso",
          ],
          correcta: 0,
          explicacion: "Como los recursos son limitados y nacen más individuos de los que pueden sobrevivir, hay una lucha por la existencia en la que se favorece a los mejor adaptados.",
        },
      ],
    },
    {
      id: "te9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Teorías · Reactivo 9 / 16",
          enunciado: "A diferencia de lo que creía Lamarck, hoy sabemos que la selección natural NO está dirigida por:",
          opciones: [
            "La voluntad o necesidad del organismo",
            "El ambiente",
            "La variabilidad existente",
            "La reproducción",
          ],
          correcta: 0,
          explicacion: "La evolución no ocurre porque el organismo «quiera» o «necesite» cambiar: las variantes ya existen al azar y el ambiente selecciona las ventajosas.",
        },
      ],
    },
    {
      id: "te10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Evolución · Teorías · Reactivo 10 / 16",
          enunciado: "Según Darwin, las jirafas tienen cuello largo porque:",
          opciones: [
            "Las de cuello largo sobrevivían más y dejaban más crías",
            "Estiraban el cuello y lo heredaban",
            "Lo decidieron para alcanzar comida",
            "El ambiente las obligó a alargarlo en vida",
          ],
          correcta: 0,
          explicacion: "Para Darwin, ya existían jirafas con cuellos de distinta longitud; las de cuello largo alcanzaban más alimento, sobrevivían y se reproducían más, así que ese rasgo se volvió común.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "evo-darwin-lamarck",
        },
      ],
    },
    {
      id: "te11",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Teorías · Reactivo 11 / 16",
          enunciado: "El naturalista que llegó de forma independiente a la idea de la selección natural, al mismo tiempo que Darwin, fue:",
          opciones: ["Alfred Russel Wallace", "Gregor Mendel", "Louis Pasteur", "Carlos Linneo"],
          correcta: 0,
          explicacion: "Alfred Russel Wallace concibió la selección natural de manera independiente; él y Darwin presentaron sus ideas juntos en 1858.",
        },
      ],
    },
    {
      id: "te12",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Teorías · Reactivo 12 / 16",
          enunciado: "En biología, la evolución se define como:",
          opciones: [
            "El cambio de las especies a lo largo del tiempo",
            "El crecimiento de un individuo",
            "La división de una célula",
            "El movimiento de los animales",
          ],
          correcta: 0,
          explicacion: "La evolución biológica es el cambio de las características heredables de las poblaciones a lo largo de las generaciones.",
        },
      ],
    },
    {
      id: "te13",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Teorías · Reactivo 13 / 16",
          enunciado: "La idea de que especies distintas provienen de un mismo antepasado se expresa con el concepto de:",
          opciones: ["Ancestro común", "Generación espontánea", "Caracteres adquiridos", "Equilibrio químico"],
          correcta: 0,
          explicacion: "El ancestro común indica que especies diferentes comparten un antepasado del que descienden, ramificándose en el árbol de la vida.",
        },
      ],
    },
    {
      id: "te14",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Teorías · Reactivo 14 / 16",
          enunciado: "El proceso por el que, con el tiempo, se forman nuevas especies a partir de otras se llama:",
          opciones: ["Especiación", "Polinización", "Fermentación", "Mitosis"],
          correcta: 0,
          explicacion: "La especiación es la aparición de nuevas especies, generalmente cuando poblaciones quedan aisladas y acumulan diferencias hasta no poder reproducirse entre sí.",
        },
      ],
    },
    {
      id: "te15",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Teorías · Reactivo 15 / 16",
          enunciado: "La teoría sintética (o neodarwinismo) combina las ideas de Darwin con los conocimientos de:",
          opciones: ["La genética", "La astronomía", "La geología pura", "La química inorgánica"],
          correcta: 0,
          explicacion: "La teoría sintética integra la selección natural de Darwin con la genética (mutación, recombinación, herencia), explicando el origen de la variabilidad.",
        },
      ],
    },
    {
      id: "te16",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Teorías · Reactivo 16 / 16",
          enunciado: "Cuando los humanos seleccionan qué animales o plantas se reproducen (perros, maíz), hablamos de selección:",
          opciones: ["Artificial", "Natural", "Espontánea", "Sexual"],
          correcta: 0,
          explicacion: "La selección artificial es la realizada por el ser humano al elegir los individuos que se reproducen según rasgos deseados; Darwin la usó como analogía de la natural.",
        },
      ],
    },
    {
      id: "pruebas",
      tipo: "lienzo",
      etiqueta: "Las evidencias",
      titulo: "Pruebas de la evolución",
      bloques: [
        {
          tipo: "destacado",
          texto: "Varias evidencias confirman la evolución: los FÓSILES muestran formas del pasado; los órganos HOMÓLOGOS (mismo origen, distinta función, como el brazo humano y el ala de murciélago) revelan ancestros comunes; las semejanzas EMBRIONARIAS y MOLECULARES (ADN parecido entre especies) también lo prueban.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "evo-pruebas",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "\\text{fósiles · homología · embriología · ADN}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Los órganos homólogos comparten estructura porque provienen de un ancestro común, aunque hoy tengan funciones distintas. En cambio, los órganos análogos (ala de insecto y de ave) hacen lo mismo pero tienen origen distinto: son convergencia, no parentesco.",
        },
        {
          tipo: "formula",
          math: "\\text{homólogos: mismo origen} \\;|\\; \\text{análogos: misma función}",
        },
      ],
    },
    {
      id: "pr1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Evolución · Pruebas · Reactivo 1 / 16",
          enunciado: "El brazo del ser humano, el ala del murciélago y la aleta de la ballena tienen los mismos huesos pero distinta función. Son órganos:",
          opciones: ["Homólogos", "Análogos", "Vestigiales", "Idénticos"],
          correcta: 0,
          explicacion: "Los órganos homólogos comparten la misma estructura y origen embrionario (heredados de un ancestro común) aunque cumplan funciones diferentes. Son evidencia de evolución.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "evo-pruebas",
        },
      ],
    },
    {
      id: "pr2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Pruebas · Reactivo 2 / 16",
          enunciado: "Los restos o huellas de organismos del pasado conservados en las rocas, que evidencian la evolución, se llaman:",
          opciones: ["Fósiles", "Homólogos", "Mutágenos", "Gametos"],
          correcta: 0,
          explicacion: "Los fósiles son restos o impresiones de organismos antiguos. Permiten conocer formas extintas y reconstruir cómo cambiaron las especies a lo largo del tiempo.",
        },
      ],
    },
    {
      id: "pr3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Pruebas · Reactivo 3 / 16",
          enunciado: "El ala de un insecto y el ala de un ave cumplen la misma función (volar) pero tienen orígenes distintos. Son órganos:",
          opciones: ["Análogos", "Homólogos", "Vestigiales", "Recombinantes"],
          correcta: 0,
          explicacion: "Los órganos análogos cumplen la misma función pero tienen origen evolutivo distinto. Son resultado de la evolución convergente, no de un ancestro común.",
        },
      ],
    },
    {
      id: "pr4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Pruebas · Reactivo 4 / 16",
          enunciado: "Estructuras que perdieron su función original a lo largo de la evolución, como el apéndice o el coxis humano, se llaman:",
          opciones: ["Órganos vestigiales", "Órganos análogos", "Fósiles vivientes", "Gametos"],
          correcta: 0,
          explicacion: "Los órganos vestigiales son estructuras reducidas que tuvieron función en los ancestros y hoy están atrofiadas (apéndice, coxis, muelas del juicio). Son evidencia de evolución.",
        },
      ],
    },
    {
      id: "pr5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Pruebas · Reactivo 5 / 16",
          enunciado: "Que los embriones de peces, aves y mamíferos se parezcan en sus primeras etapas es una prueba de tipo:",
          opciones: ["Embriológico", "Geológico", "Astronómico", "Químico inorgánico"],
          correcta: 0,
          explicacion: "Las semejanzas embrionarias entre vertebrados muy distintos sugieren un ancestro común: son una prueba embriológica de la evolución.",
        },
      ],
    },
    {
      id: "pr6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Pruebas · Reactivo 6 / 16",
          enunciado: "Que especies emparentadas tengan secuencias de ADN muy parecidas es una prueba de la evolución de tipo:",
          opciones: ["Molecular", "Anatómico solamente", "Fósil", "Geográfico"],
          correcta: 0,
          explicacion: "La semejanza en el ADN y las proteínas entre especies (prueba molecular) refleja su grado de parentesco: cuanto más parecido, más cercano el ancestro común.",
        },
      ],
    },
    {
      id: "pr7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Pruebas · Reactivo 7 / 16",
          enunciado: "La ciencia que estudia los fósiles para reconstruir la historia de la vida es la:",
          opciones: ["Paleontología", "Astronomía", "Citología", "Genética"],
          correcta: 0,
          explicacion: "La paleontología estudia los fósiles y aporta evidencia directa de cómo eran los organismos del pasado y cómo cambiaron.",
        },
      ],
    },
    {
      id: "pr8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Evolución · Pruebas · Reactivo 8 / 16",
          enunciado: "La existencia de órganos homólogos en distintas especies se explica porque comparten:",
          opciones: ["Un ancestro común", "El mismo ambiente actual", "La misma alimentación", "El mismo tamaño"],
          correcta: 0,
          explicacion: "Los órganos homólogos derivan de la misma estructura de un ancestro común, lo que demuestra parentesco evolutivo aunque hoy tengan funciones distintas.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "evo-pruebas",
        },
      ],
    },
    {
      id: "pr9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Pruebas · Reactivo 9 / 16",
          enunciado: "Cuando dos especies no emparentadas desarrollan estructuras parecidas por vivir en ambientes similares (como el cuerpo del tiburón y el del delfín), ocurre una evolución:",
          opciones: ["Convergente", "Divergente", "Química", "Vestigial"],
          correcta: 0,
          explicacion: "La evolución convergente produce estructuras análogas en especies no emparentadas que enfrentan presiones ambientales semejantes.",
        },
      ],
    },
    {
      id: "pr10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Pruebas · Reactivo 10 / 16",
          enunciado: "Un fósil se forma, por lo general, cuando:",
          opciones: [
            "Los restos de un organismo se conservan y mineralizan en las rocas",
            "Un animal cambia de color",
            "Una célula se divide",
            "Una planta florece",
          ],
          correcta: 0,
          explicacion: "Los fósiles se forman cuando restos o huellas de organismos quedan enterrados y se mineralizan a lo largo de miles o millones de años.",
        },
      ],
    },
    {
      id: "pr11",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Pruebas · Reactivo 11 / 16",
          enunciado: "La comparación de la estructura interna (huesos, órganos) entre distintas especies corresponde a la:",
          opciones: ["Anatomía comparada", "Astronomía", "Geografía física", "Bioquímica del suelo"],
          correcta: 0,
          explicacion: "La anatomía comparada estudia las semejanzas y diferencias estructurales entre especies (homologías y analogías) como evidencia evolutiva.",
        },
      ],
    },
    {
      id: "pr12",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Pruebas · Reactivo 12 / 16",
          enunciado: "En un estrato de rocas sin alterar, por lo general los fósiles más antiguos se encuentran:",
          opciones: [
            "En las capas más profundas",
            "En las capas más superficiales",
            "Flotando en la superficie",
            "Fuera de las rocas",
          ],
          correcta: 0,
          explicacion: "En estratos no alterados, las capas inferiores se depositaron primero, así que los fósiles más antiguos están abajo y los más recientes arriba.",
        },
      ],
    },
    {
      id: "pr13",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Pruebas · Reactivo 13 / 16",
          enunciado: "El Archaeopteryx, con plumas y dientes, es famoso por ser un fósil de:",
          opciones: [
            "Transición (entre reptiles y aves)",
            "Una planta acuática",
            "Un mamífero moderno",
            "Una bacteria",
          ],
          correcta: 0,
          explicacion: "El Archaeopteryx es un fósil de transición que combina rasgos de reptiles (dientes, cola) y de aves (plumas, alas), evidencia del parentesco entre ambos grupos.",
        },
      ],
    },
    {
      id: "pr14",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Pruebas · Reactivo 14 / 16",
          enunciado: "Que TODOS los seres vivos usen el mismo código genético (ADN con las mismas bases) sugiere que:",
          opciones: [
            "Todos comparten un origen común",
            "Cada especie se creó por separado",
            "El ADN es distinto en cada reino",
            "La vida surge espontáneamente",
          ],
          correcta: 0,
          explicacion: "La universalidad del código genético es una poderosa prueba molecular de que toda la vida desciende de un ancestro común.",
        },
      ],
    },
    {
      id: "pr15",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Pruebas · Reactivo 15 / 16",
          enunciado: "El estudio de cómo se distribuyen las especies en el planeta (como las especies únicas de las islas) es una prueba de tipo:",
          opciones: ["Biogeográfico", "Embriológico", "Molecular", "Anatómico"],
          correcta: 0,
          explicacion: "La biogeografía analiza la distribución de las especies; por ejemplo, las especies endémicas de islas como Galápagos apoyan la evolución a partir de ancestros aislados.",
        },
      ],
    },
    {
      id: "pr16",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Pruebas · Reactivo 16 / 16",
          enunciado: "Las alas de un murciélago (mamífero) y las de un ave, al compararlas, muestran que la capacidad de volar:",
          opciones: [
            "Surgió de forma independiente en grupos distintos",
            "Prueba que son la misma especie",
            "Es imposible en mamíferos",
            "Se hereda por el uso",
          ],
          correcta: 0,
          explicacion: "El vuelo apareció de forma independiente en aves, murciélagos e insectos (análogos): es un ejemplo de evolución convergente ante una misma necesidad.",
        },
      ],
    },
    {
      id: "clasificacion",
      tipo: "lienzo",
      etiqueta: "Clasificar la diversidad",
      titulo: "Los cinco reinos",
      bloques: [
        {
          tipo: "formula",
          math: "\\text{Monera · Protista · Fungi · Plantae · Animalia}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "evo-reinos",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\text{Monera}",
              texto: "procariotas (bacterias y arqueas); unicelulares sin núcleo",
            },
            {
              math: "\\text{Protista}",
              texto: "eucariotas simples: protozoarios y algas",
            },
            {
              math: "\\text{Fungi}",
              texto: "hongos; heterótrofos con pared de quitina (levaduras, setas)",
            },
            {
              math: "\\text{Plantae}",
              texto: "plantas; autótrofas (fotosíntesis), con pared de celulosa",
            },
            {
              math: "\\text{Animalia}",
              texto: "animales; heterótrofos, pluricelulares, sin pared celular",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "La clasificación de Whittaker en cinco reinos agrupa a los seres vivos según su tipo celular, organización y nutrición. La taxonomía ordena a los seres en una jerarquía: Reino → Filo → Clase → Orden → Familia → Género → Especie. La especie se nombra con dos palabras (nomenclatura binomial de Linneo).",
        },
      ],
    },
    {
      id: "cl1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Evolución · Clasificación · Reactivo 1 / 16",
          enunciado: "Un alga pertenece al reino:",
          opciones: ["Protista", "Animalia", "Fungi", "Monera"],
          correcta: 0,
          explicacion: "Las algas son eucariotas, en su mayoría unicelulares o de organización sencilla, y se clasifican en el reino Protista junto con los protozoarios.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "evo-reinos",
        },
      ],
    },
    {
      id: "cl2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Clasificación · Reactivo 2 / 16",
          enunciado: "Las bacterias, por ser organismos procariotas, se clasifican en el reino:",
          opciones: ["Monera", "Protista", "Fungi", "Plantae"],
          correcta: 0,
          explicacion: "El reino Monera agrupa a los organismos procariotas (sin núcleo): las bacterias y las arqueas.",
        },
      ],
    },
    {
      id: "cl3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Evolución · Clasificación · Reactivo 3 / 16",
          enunciado: "Las levaduras y las setas, heterótrofas y con pared de quitina, pertenecen al reino:",
          opciones: ["Fungi", "Plantae", "Animalia", "Monera"],
          correcta: 0,
          explicacion: "Los hongos forman el reino Fungi: son eucariotas heterótrofos (se alimentan por absorción) con pared celular de quitina. Incluyen levaduras, mohos y setas.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "evo-reinos",
        },
      ],
    },
    {
      id: "cl4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Clasificación · Reactivo 4 / 16",
          enunciado: "El sistema para nombrar a las especies con dos palabras (género y especie), como Homo sapiens, fue creado por:",
          opciones: ["Carlos Linneo", "Charles Darwin", "Gregor Mendel", "Luis Pasteur"],
          correcta: 0,
          explicacion: "Linneo creó la nomenclatura binomial: cada especie se nombra con dos palabras en latín (género + especie). También organizó la jerarquía taxonómica.",
        },
      ],
    },
    {
      id: "cl5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Evolución · Clasificación · Reactivo 5 / 16",
          enunciado: "En la jerarquía taxonómica, ¿cuál es la categoría MÁS específica (la que agrupa menos organismos)?",
          opciones: ["La especie", "El reino", "El filo", "La clase"],
          correcta: 0,
          explicacion: "La especie es el nivel más específico: agrupa a los individuos capaces de reproducirse entre sí. El reino es el más amplio. El orden es: Reino → Filo → Clase → Orden → Familia → Género → Especie.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "evo-taxonomia",
        },
      ],
    },
    {
      id: "cl6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Evolución · Clasificación · Reactivo 6 / 16",
          enunciado: "Los organismos pluricelulares, heterótrofos y sin pared celular, como un perro o una lombriz, pertenecen al reino:",
          opciones: ["Animalia", "Plantae", "Fungi", "Monera"],
          correcta: 0,
          explicacion: "El reino Animalia agrupa a los animales: eucariotas pluricelulares, heterótrofos y sin pared celular.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "evo-reinos",
        },
      ],
    },
    {
      id: "cl7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Clasificación · Reactivo 7 / 16",
          enunciado: "Los organismos autótrofos, con pared de celulosa y capaces de fotosíntesis, forman el reino:",
          opciones: ["Plantae", "Animalia", "Protista", "Monera"],
          correcta: 0,
          explicacion: "El reino Plantae agrupa a las plantas: eucariotas pluricelulares, autótrofas (fotosíntesis) y con pared celular de celulosa.",
        },
      ],
    },
    {
      id: "cl8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Clasificación · Reactivo 8 / 16",
          enunciado: "La clasificación de los seres vivos en cinco reinos fue propuesta por:",
          opciones: ["Robert Whittaker", "Carlos Linneo", "Charles Darwin", "Louis Pasteur"],
          correcta: 0,
          explicacion: "Robert Whittaker propuso en 1969 el sistema de cinco reinos (Monera, Protista, Fungi, Plantae, Animalia).",
        },
      ],
    },
    {
      id: "cl9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Clasificación · Reactivo 9 / 16",
          enunciado: "La ciencia que se encarga de clasificar y nombrar a los seres vivos es la:",
          opciones: ["Taxonomía", "Ecología", "Genética", "Fisiología"],
          correcta: 0,
          explicacion: "La taxonomía es la disciplina que clasifica, ordena y nombra a los organismos según sus semejanzas y parentesco.",
        },
      ],
    },
    {
      id: "cl10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Clasificación · Reactivo 10 / 16",
          enunciado: "El nombre científico de una especie se escribe en latín y consta de dos palabras: el género y la:",
          opciones: ["especie", "familia", "clase", "variedad de color"],
          correcta: 0,
          explicacion: "La nomenclatura binomial usa dos palabras: el género (con mayúscula) y el epíteto específico (con minúscula), ambos en latín y en cursiva.",
        },
      ],
    },
    {
      id: "cl11",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Evolución · Clasificación · Reactivo 11 / 16",
          enunciado: "En la jerarquía taxonómica, la categoría MÁS amplia (la que agrupa más organismos) es:",
          opciones: ["El reino", "La especie", "El género", "La familia"],
          correcta: 0,
          explicacion: "El reino es la categoría más amplia; a partir de ahí se subdivide en filos, clases, órdenes, familias, géneros y, finalmente, especies.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "evo-taxonomia",
        },
      ],
    },
    {
      id: "cl12",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Clasificación · Reactivo 12 / 16",
          enunciado: "Una especie se define, biológicamente, como un grupo de organismos que:",
          opciones: [
            "Pueden reproducirse entre sí y tener descendencia fértil",
            "Viven en el mismo país",
            "Tienen el mismo color",
            "Comen lo mismo",
          ],
          correcta: 0,
          explicacion: "El concepto biológico de especie agrupa a los organismos que pueden cruzarse entre sí y producir descendencia fértil.",
        },
      ],
    },
    {
      id: "cl13",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Clasificación · Reactivo 13 / 16",
          enunciado: "En el nombre científico Homo sapiens, la palabra «Homo» indica el:",
          opciones: ["Género", "Reino", "Filo", "Color"],
          correcta: 0,
          explicacion: "En la nomenclatura binomial, la primera palabra (Homo) es el género y la segunda (sapiens) es el epíteto específico.",
        },
      ],
    },
    {
      id: "cl14",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Clasificación · Reactivo 14 / 16",
          enunciado: "Una característica de los organismos del reino Fungi es que se alimentan:",
          opciones: [
            "Por absorción (heterótrofos)",
            "Por fotosíntesis",
            "Cazando presas",
            "Sin necesitar nutrientes",
          ],
          correcta: 0,
          explicacion: "Los hongos son heterótrofos: absorben los nutrientes del medio (muchos son descomponedores). No realizan fotosíntesis.",
        },
      ],
    },
    {
      id: "cl15",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Evolución · Clasificación · Reactivo 15 / 16",
          enunciado: "El único reino formado exclusivamente por organismos procariotas es:",
          opciones: ["Monera", "Protista", "Fungi", "Animalia"],
          correcta: 0,
          explicacion: "Solo el reino Monera está compuesto por procariotas (bacterias y arqueas); los demás reinos son de organismos eucariotas.",
        },
      ],
    },
    {
      id: "cl16",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Evolución · Clasificación · Reactivo 16 / 16",
          enunciado: "¿Cuál es el orden correcto de las categorías taxonómicas, de la más amplia a la más específica?",
          opciones: [
            "Reino → Filo → Clase → Orden → Familia → Género → Especie",
            "Especie → Género → Reino → Filo",
            "Reino → Especie → Clase → Orden",
            "Género → Familia → Reino → Especie",
          ],
          correcta: 0,
          explicacion: "La jerarquía taxonómica va de lo más amplio a lo más específico: Reino, Filo, Clase, Orden, Familia, Género y Especie.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "evo-taxonomia",
        },
      ],
    },
    {
      id: "resumen",
      tipo: "lienzo",
      etiqueta: "Ideas clave de evolución",
      titulo: "Resumen",
      bloques: [
        {
          tipo: "lista",
          items: [
            {
              math: "\\text{Quimiosintética}",
              texto: "Oparin-Haldane: la vida surgió de moléculas simples; Miller lo apoyó (aminoácidos)",
            },
            {
              math: "\\text{Lamarck} \\neq \\text{Darwin}",
              texto: "Lamarck (caracteres adquiridos, incorrecto); Darwin (selección natural, Beagle)",
            },
            {
              math: "\\text{Selección natural}",
              texto: "sobreviven los más aptos; necesita variabilidad → adaptación",
            },
            {
              math: "\\text{Pruebas}",
              texto: "fósiles, homólogos (mismo origen) vs. análogos (misma función), embriología, ADN",
            },
            {
              math: "\\text{5 reinos}",
              texto: "Monera, Protista, Fungi, Plantae, Animalia (Whittaker)",
            },
            {
              math: "\\text{Taxonomía}",
              texto: "Reino → Filo → Clase → Orden → Familia → Género → Especie (Linneo)",
            },
          ],
        },
      ],
    },
  ],
};
