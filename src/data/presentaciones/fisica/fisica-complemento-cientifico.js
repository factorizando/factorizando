// Presentación: Física (complemento) — electricidad estática, ondas y radiación,
// y transferencia de calor. Completa los temas del Pensamiento Científico del EXANI-I.
// Pensamiento Científico · Física · EXANI-I

export const PRESENTACION = {
  id: "fisica-complemento-cientifico",
  titulo: "Física: Electricidad Estática, Ondas y Calor",
  materia: "Física",
  subtema: "Física",
  slides: [
    {
      id: 0,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "portada",
          kicker: "Pensamiento Científico · Física · EXANI-I",
          titulo: "Electricidad Estática, Ondas y Calor",
          subtitulo: "Cargas eléctricas, espectro electromagnético y formas de transferir calor",
        },
      ],
    },
    {
      id: 1,
      tipo: "lienzo",
      etiqueta: "Concepto 1 · Cargas",
      titulo: "Electricidad estática: cargas, fricción e inducción",
      bloques: [
        {
          tipo: "destacado",
          texto: "La materia tiene cargas eléctricas: positivas (protones) y negativas (electrones). Un cuerpo neutro tiene igual número de ambas. Al frotar dos materiales (fricción), los electrones pasan de uno a otro: uno queda cargado negativamente y el otro positivamente. La regla básica: cargas iguales se repelen y cargas opuestas se atraen. Un cuerpo cargado también puede atraer a uno neutro por inducción, reorganizando sus cargas.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Formas de cargar un cuerpo y la fuerza entre cargas",
          columnas: ["Concepto", "Qué ocurre", "Resultado"],
          filas: [
            ["Fricción", "Se frotan dos materiales", "Los electrones pasan de uno a otro"],
            ["Inducción", "Se acerca (sin tocar) un cuerpo cargado", "Reordena las cargas del neutro"],
            ["Cargas iguales", "(+ y +) ó (− y −)", "Se repelen"],
            ["Cargas opuestas", "(+ y −)", "Se atraen"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "frotar transfiere electrones, no los crea",
          asi_es: "Al frotar un globo con lana, el globo gana electrones y queda cargado (negativo)",
          asi_no: "Pensar que la fricción «fabrica» carga → solo transfiere electrones de un cuerpo al otro",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "A",
          titulo: "Un globo frotado pega en la pared (neutra) porque la carga induce el efecto contrario en la pared y la atrae; entre dos globos frotados igual, en cambio, se repelen",
          asi_es: "Dos globos cargados con el mismo signo se separan: se repelen",
          asi_no: "Suponer que dos cuerpos cargados siempre se atraen → solo si tienen signos opuestos",
        },
      ],
    },
    {
      id: 2,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — Globo frotado con lana",
          enunciado: "Se inflan dos globos y se frota cada uno con un suéter de lana del mismo modo. Al acercarlos, ¿qué ocurre y por qué?",
          opciones: [
            "Se atraen, porque tienen cargas opuestas",
            "Se repelen, porque quedaron con el mismo tipo de carga",
            "No interactúan, porque están descargados",
          ],
          correcta: 1,
          explicacion: "Al frotarse igual con lana, ambos globos ganan electrones y quedan con carga negativa (el mismo signo). Cargas iguales se repelen, así que los globos se separan. Si tuvieran signos opuestos se atraerían, pero aquí recibieron el mismo tratamiento.",
        },
      ],
    },
    {
      id: 3,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 2 — Atracción y repulsión",
          enunciado: "Una varilla con carga positiva se acerca a una esfera y la repele. ¿Qué se concluye sobre la carga de la esfera?",
          opciones: ["Es negativa", "Es positiva", "Es neutra"],
          correcta: 1,
          explicacion: "Solo las cargas del mismo signo se repelen. Si la varilla positiva repele a la esfera, la esfera también es positiva. Una esfera neutra sería atraída por inducción, y una negativa sería atraída por tener signo opuesto.",
        },
      ],
    },
    {
      id: 4,
      tipo: "lienzo",
      etiqueta: "Concepto 2 · Ondas",
      titulo: "Ondas y espectro electromagnético",
      bloques: [
        {
          tipo: "destacado",
          texto: "Una onda transporta energía sin transportar materia. Se describe por su longitud de onda (distancia entre dos crestas) y su frecuencia (cuántas oscilaciones por segundo): a mayor frecuencia, menor longitud de onda. La luz es una onda electromagnética; el ojo solo percibe una franja (la luz visible). Más allá del rojo está el infrarrojo (lo emiten los cuerpos calientes); más allá del violeta, el ultravioleta, de mayor energía.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "El espectro electromagnético (de menor a mayor energía)",
          columnas: ["Radiación", "Característica", "Uso / ejemplo"],
          filas: [
            ["Ondas de radio", "Mayor longitud, menor energía", "Radio, TV, celular"],
            ["Infrarrojo", "La emiten los cuerpos por su calor", "Termómetro infrarrojo, control remoto"],
            ["Luz visible", "La única que vemos (rojo→violeta)", "Arcoíris"],
            ["Ultravioleta", "Más energía que la visible", "Quema la piel; lámparas UV"],
            ["Rayos X / gamma", "Muy alta energía, penetrantes", "Radiografías"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "frecuencia y longitud de onda son inversas",
          asi_es: "El ultravioleta tiene más frecuencia y menor longitud de onda que la luz visible",
          asi_no: "Suponer que «más longitud de onda = más energía» → es al revés: más energía va con más frecuencia y menor longitud",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "B",
          titulo: "Todo cuerpo emite radiación infrarroja según su temperatura; por eso un termómetro infrarrojo mide la temperatura sin tocar, detectando esa emisión",
          asi_es: "El termómetro infrarrojo capta la radiación emitida por la piel",
          asi_no: "Creer que el termómetro infrarrojo «ilumina» la piel para medirla → mide la radiación que el cuerpo emite, no una que refleje",
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
          etiqueta: "Reactivo 1 — Termómetro infrarrojo",
          enunciado: "Un termómetro infrarrojo mide la temperatura de la frente sin contacto. ¿En qué principio se basa?",
          opciones: [
            "En la radiación infrarroja que el cuerpo emite según su temperatura",
            "En el sonido que rebota en la piel",
            "En la corriente eléctrica que pasa por la piel",
          ],
          correcta: 0,
          explicacion: "Todo cuerpo emite radiación infrarroja, y su intensidad depende de la temperatura. El termómetro detecta esa radiación emitida por la piel y la convierte en una lectura de temperatura, sin necesidad de tocar. No usa sonido ni corriente.",
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
          etiqueta: "Reactivo 2 — Energía de la radiación",
          enunciado: "De las siguientes radiaciones, ¿cuál tiene MAYOR energía (mayor frecuencia y menor longitud de onda)?",
          opciones: ["Ondas de radio", "Luz visible", "Ultravioleta"],
          correcta: 2,
          explicacion: "En el espectro, la energía crece al aumentar la frecuencia (y disminuir la longitud de onda). El ultravioleta tiene más frecuencia que la luz visible y mucho más que las ondas de radio, así que es el de mayor energía de los tres. Por eso el UV puede dañar la piel.",
        },
      ],
    },
    {
      id: 7,
      tipo: "lienzo",
      etiqueta: "Concepto 3 · Calor",
      titulo: "Transferencia de calor: conducción, convección y radiación",
      bloques: [
        {
          tipo: "destacado",
          texto: "El calor es energía que fluye espontáneamente del cuerpo más caliente al más frío hasta igualar temperaturas. Se transfiere de tres maneras: por conducción (contacto directo, típico de sólidos y metales), por convección (movimiento de un fluido caliente, como el agua o el aire) y por radiación (ondas, sin necesidad de contacto ni medio, como el calor del Sol). No es lo mismo calor que temperatura: la temperatura mide qué tan caliente está algo; el calor es la energía que se transfiere.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Las tres formas de transferir calor",
          columnas: ["Forma", "Cómo se transmite", "Ejemplo"],
          filas: [
            ["Conducción", "Por contacto directo", "La cuchara se calienta en la sopa"],
            ["Convección", "Por movimiento de un fluido", "El agua que hierve circula"],
            ["Radiación", "Por ondas, sin contacto", "El calor del Sol o de una fogata"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "más superficie de contacto = se cuece más rápido",
          asi_es: "La carne en trozos pequeños se cuece antes: más superficie expuesta al calor",
          asi_no: "Creer que el tamaño no influye → a igual calor, más superficie expuesta acelera la cocción",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "C",
          titulo: "Calor y temperatura no son lo mismo: dos cuerpos pueden estar a la misma temperatura y contener cantidades de calor muy distintas según su masa",
          asi_es: "Una alberca y una taza a 30 °C: la alberca contiene mucho más calor (más masa)",
          asi_no: "Usar «calor» y «temperatura» como sinónimos → la temperatura es el nivel; el calor, la energía que fluye",
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
          etiqueta: "Reactivo 1 — Cocción más rápida",
          enunciado: "Una persona asa carne en una parrilla y quiere que se cueza más rápido sin cambiar el fuego. ¿Qué conviene hacer?",
          opciones: [
            "Colocar la carne en trozos pequeños para exponer más superficie al calor",
            "Poner un solo trozo grande y grueso",
            "Alejar la carne del fuego",
          ],
          correcta: 0,
          explicacion: "Al cortar la carne en porciones pequeñas se aumenta la superficie en contacto con el calor, y el calor penetra desde más lados, así que se cuece más rápido. Un trozo grande tarda más (menos superficie por volumen) y alejarla del fuego la cocería aún más lento.",
        },
      ],
    },
    {
      id: 9,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 2 — Forma de transferencia",
          enunciado: "Sentimos el calor del Sol aunque entre la Tierra y el Sol hay vacío (sin aire). ¿Por qué forma de transferencia nos llega ese calor?",
          opciones: ["Conducción", "Convección", "Radiación"],
          correcta: 2,
          explicacion: "La radiación es la única forma de transferir calor que no necesita un medio material: viaja como ondas electromagnéticas a través del vacío. Por eso el calor del Sol llega a la Tierra. La conducción y la convección requieren materia (un sólido o un fluido).",
        },
      ],
    },
    {
      id: 10,
      tipo: "lienzo",
      etiqueta: "Lo esencial de cargas, ondas y calor",
      titulo: "Resumen",
      bloques: [
        {
          tipo: "lista",
          items: [
            {
              titulo: "Cargas",
              texto: "iguales se repelen, opuestas se atraen; la fricción transfiere electrones",
            },
            {
              titulo: "Inducción",
              texto: "un cuerpo cargado atrae a uno neutro reorganizando sus cargas",
            },
            {
              titulo: "Onda",
              texto: "transporta energía, no materia; más frecuencia ⇒ menor longitud de onda",
            },
            {
              titulo: "Espectro",
              texto: "radio < infrarrojo < visible < ultravioleta < rayos X (energía creciente)",
            },
            {
              titulo: "Infrarrojo",
              texto: "los cuerpos lo emiten según su temperatura (termómetro sin contacto)",
            },
            {
              titulo: "Calor",
              texto: "se transfiere por conducción, convección y radiación; calor ≠ temperatura",
            },
          ],
        },
      ],
    },
  ],
};
