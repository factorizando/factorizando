// Presentación: Física (complemento) — electricidad estática, ondas y radiación,
// y transferencia de calor. Completa los temas del Pensamiento Científico del EXANI-I.
// Pensamiento Científico · Física · EXANI-I

export const PRESENTACION = {
  id: "fisica-complemento-cientifico",
  titulo: "Física: Electricidad Estática, Ondas y Calor",
  materia: "Pensamiento Científico",
  subtema: "Física",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Electricidad Estática, Ondas y Calor",
      subtitulo: "Cargas eléctricas, espectro electromagnético y formas de transferir calor",
      etiqueta: "Pensamiento Científico · Física · EXANI-I"
    },

    // ── Electricidad estática ──────────────────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Concepto 1 · Cargas",
      titulo: "Electricidad estática: cargas, fricción e inducción",
      bloques: [
        {
          tipo: "texto",
          texto: "La materia tiene cargas eléctricas: positivas (protones) y negativas (electrones). Un cuerpo neutro tiene igual número de ambas. Al frotar dos materiales (fricción), los electrones pasan de uno a otro: uno queda cargado negativamente y el otro positivamente. La regla básica: cargas iguales se repelen y cargas opuestas se atraen. Un cuerpo cargado también puede atraer a uno neutro por inducción, reorganizando sus cargas."
        },
        {
          tipo: "tabla",
          titulo: "Formas de cargar un cuerpo y la fuerza entre cargas",
          columnas: ["Concepto", "Qué ocurre", "Resultado"],
          filas: [
            { tiempo: "Fricción",        correcto: "Se frotan dos materiales", error: "Los electrones pasan de uno a otro" },
            { tiempo: "Inducción",       correcto: "Se acerca (sin tocar) un cuerpo cargado", error: "Reordena las cargas del neutro" },
            { tiempo: "Cargas iguales",  correcto: "(+ y +) ó (− y −)",        error: "Se repelen" },
            { tiempo: "Cargas opuestas", correcto: "(+ y −)",                  error: "Se atraen" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "frotar transfiere electrones, no los crea",
          correcto: "Al frotar un globo con lana, el globo gana electrones y queda cargado (negativo)",
          incorrecto: "Pensar que la fricción «fabrica» carga → solo transfiere electrones de un cuerpo al otro"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Un globo frotado pega en la pared (neutra) porque la carga induce el efecto contrario en la pared y la atrae; entre dos globos frotados igual, en cambio, se repelen",
          correcto: "Dos globos cargados con el mismo signo se separan: se repelen",
          incorrecto: "Suponer que dos cuerpos cargados siempre se atraen → solo si tienen signos opuestos"
        }
      ]
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Globo frotado con lana",
      pregunta: "Se inflan dos globos y se frota cada uno con un suéter de lana del mismo modo. Al acercarlos, ¿qué ocurre y por qué?",
      opciones: [
        "Se atraen, porque tienen cargas opuestas",
        "Se repelen, porque quedaron con el mismo tipo de carga",
        "No interactúan, porque están descargados"
      ],
      correcta: 1,
      explicacion: "Al frotarse igual con lana, ambos globos ganan electrones y quedan con carga negativa (el mismo signo). Cargas iguales se repelen, así que los globos se separan. Si tuvieran signos opuestos se atraerían, pero aquí recibieron el mismo tratamiento.",
      pasos: []
    },
    {
      id: 3,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Atracción y repulsión",
      pregunta: "Una varilla con carga positiva se acerca a una esfera y la repele. ¿Qué se concluye sobre la carga de la esfera?",
      opciones: ["Es negativa", "Es positiva", "Es neutra"],
      correcta: 1,
      explicacion: "Solo las cargas del mismo signo se repelen. Si la varilla positiva repele a la esfera, la esfera también es positiva. Una esfera neutra sería atraída por inducción, y una negativa sería atraída por tener signo opuesto.",
      pasos: []
    },

    // ── Ondas y espectro electromagnético ──────────────────────────────────────
    {
      id: 4,
      tipo: "regla_rica",
      etiqueta: "Concepto 2 · Ondas",
      titulo: "Ondas y espectro electromagnético",
      bloques: [
        {
          tipo: "texto",
          texto: "Una onda transporta energía sin transportar materia. Se describe por su longitud de onda (distancia entre dos crestas) y su frecuencia (cuántas oscilaciones por segundo): a mayor frecuencia, menor longitud de onda. La luz es una onda electromagnética; el ojo solo percibe una franja (la luz visible). Más allá del rojo está el infrarrojo (lo emiten los cuerpos calientes); más allá del violeta, el ultravioleta, de mayor energía."
        },
        {
          tipo: "tabla",
          titulo: "El espectro electromagnético (de menor a mayor energía)",
          columnas: ["Radiación", "Característica", "Uso / ejemplo"],
          filas: [
            { tiempo: "Ondas de radio", correcto: "Mayor longitud, menor energía", error: "Radio, TV, celular" },
            { tiempo: "Infrarrojo",     correcto: "La emiten los cuerpos por su calor", error: "Termómetro infrarrojo, control remoto" },
            { tiempo: "Luz visible",    correcto: "La única que vemos (rojo→violeta)", error: "Arcoíris" },
            { tiempo: "Ultravioleta",   correcto: "Más energía que la visible", error: "Quema la piel; lámparas UV" },
            { tiempo: "Rayos X / gamma", correcto: "Muy alta energía, penetrantes", error: "Radiografías" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "frecuencia y longitud de onda son inversas",
          correcto: "El ultravioleta tiene más frecuencia y menor longitud de onda que la luz visible",
          incorrecto: "Suponer que «más longitud de onda = más energía» → es al revés: más energía va con más frecuencia y menor longitud"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "Todo cuerpo emite radiación infrarroja según su temperatura; por eso un termómetro infrarrojo mide la temperatura sin tocar, detectando esa emisión",
          correcto: "El termómetro infrarrojo capta la radiación emitida por la piel",
          incorrecto: "Creer que el termómetro infrarrojo «ilumina» la piel para medirla → mide la radiación que el cuerpo emite, no una que refleje"
        }
      ]
    },
    {
      id: 5,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Termómetro infrarrojo",
      pregunta: "Un termómetro infrarrojo mide la temperatura de la frente sin contacto. ¿En qué principio se basa?",
      opciones: [
        "En la radiación infrarroja que el cuerpo emite según su temperatura",
        "En el sonido que rebota en la piel",
        "En la corriente eléctrica que pasa por la piel"
      ],
      correcta: 0,
      explicacion: "Todo cuerpo emite radiación infrarroja, y su intensidad depende de la temperatura. El termómetro detecta esa radiación emitida por la piel y la convierte en una lectura de temperatura, sin necesidad de tocar. No usa sonido ni corriente.",
      pasos: []
    },
    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Energía de la radiación",
      pregunta: "De las siguientes radiaciones, ¿cuál tiene MAYOR energía (mayor frecuencia y menor longitud de onda)?",
      opciones: ["Ondas de radio", "Luz visible", "Ultravioleta"],
      correcta: 2,
      explicacion: "En el espectro, la energía crece al aumentar la frecuencia (y disminuir la longitud de onda). El ultravioleta tiene más frecuencia que la luz visible y mucho más que las ondas de radio, así que es el de mayor energía de los tres. Por eso el UV puede dañar la piel.",
      pasos: []
    },

    // ── Transferencia de calor ─────────────────────────────────────────────────
    {
      id: 7,
      tipo: "regla_rica",
      etiqueta: "Concepto 3 · Calor",
      titulo: "Transferencia de calor: conducción, convección y radiación",
      bloques: [
        {
          tipo: "texto",
          texto: "El calor es energía que fluye espontáneamente del cuerpo más caliente al más frío hasta igualar temperaturas. Se transfiere de tres maneras: por conducción (contacto directo, típico de sólidos y metales), por convección (movimiento de un fluido caliente, como el agua o el aire) y por radiación (ondas, sin necesidad de contacto ni medio, como el calor del Sol). No es lo mismo calor que temperatura: la temperatura mide qué tan caliente está algo; el calor es la energía que se transfiere."
        },
        {
          tipo: "tabla",
          titulo: "Las tres formas de transferir calor",
          columnas: ["Forma", "Cómo se transmite", "Ejemplo"],
          filas: [
            { tiempo: "Conducción", correcto: "Por contacto directo",         error: "La cuchara se calienta en la sopa" },
            { tiempo: "Convección", correcto: "Por movimiento de un fluido",  error: "El agua que hierve circula" },
            { tiempo: "Radiación",  correcto: "Por ondas, sin contacto",      error: "El calor del Sol o de una fogata" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "más superficie de contacto = se cuece más rápido",
          correcto: "La carne en trozos pequeños se cuece antes: más superficie expuesta al calor",
          incorrecto: "Creer que el tamaño no influye → a igual calor, más superficie expuesta acelera la cocción"
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "Calor y temperatura no son lo mismo: dos cuerpos pueden estar a la misma temperatura y contener cantidades de calor muy distintas según su masa",
          correcto: "Una alberca y una taza a 30 °C: la alberca contiene mucho más calor (más masa)",
          incorrecto: "Usar «calor» y «temperatura» como sinónimos → la temperatura es el nivel; el calor, la energía que fluye"
        }
      ]
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Cocción más rápida",
      pregunta: "Una persona asa carne en una parrilla y quiere que se cueza más rápido sin cambiar el fuego. ¿Qué conviene hacer?",
      opciones: [
        "Colocar la carne en trozos pequeños para exponer más superficie al calor",
        "Poner un solo trozo grande y grueso",
        "Alejar la carne del fuego"
      ],
      correcta: 0,
      explicacion: "Al cortar la carne en porciones pequeñas se aumenta la superficie en contacto con el calor, y el calor penetra desde más lados, así que se cuece más rápido. Un trozo grande tarda más (menos superficie por volumen) y alejarla del fuego la cocería aún más lento.",
      pasos: []
    },
    {
      id: 9,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Forma de transferencia",
      pregunta: "Sentimos el calor del Sol aunque entre la Tierra y el Sol hay vacío (sin aire). ¿Por qué forma de transferencia nos llega ese calor?",
      opciones: ["Conducción", "Convección", "Radiación"],
      correcta: 2,
      explicacion: "La radiación es la única forma de transferir calor que no necesita un medio material: viaja como ondas electromagnéticas a través del vacío. Por eso el calor del Sol llega a la Tierra. La conducción y la convección requieren materia (un sólido o un fluido).",
      pasos: []
    },

    // ── Cierre ─────────────────────────────────────────────────────────────────
    {
      id: 10,
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Lo esencial de cargas, ondas y calor",
      puntos: [
        { titulo: "Cargas", texto: "iguales se repelen, opuestas se atraen; la fricción transfiere electrones" },
        { titulo: "Inducción", texto: "un cuerpo cargado atrae a uno neutro reorganizando sus cargas" },
        { titulo: "Onda", texto: "transporta energía, no materia; más frecuencia ⇒ menor longitud de onda" },
        { titulo: "Espectro", texto: "radio < infrarrojo < visible < ultravioleta < rayos X (energía creciente)" },
        { titulo: "Infrarrojo", texto: "los cuerpos lo emiten según su temperatura (termómetro sin contacto)" },
        { titulo: "Calor", texto: "se transfiere por conducción, convección y radiación; calor ≠ temperatura" }
      ]
    }

  ]
};
