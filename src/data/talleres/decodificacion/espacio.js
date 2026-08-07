// Banco de espacio y cohetes — taller de decodificación lectora.
// Ver la cabecera de mecanica.js para el criterio con el que se escribe un banco.

export const BANCO = {
  id: "espacio",
  nombre: "Espacio y cohetes",
  icono: "🚀",
  descripcion: "Cohetes, órbitas, planetas y cráteres.",

  palabras: [
    { palabra: "cohete", dato: "Carga su propio oxígeno. En el espacio no hay aire que quemar." },
    { palabra: "satélite", dato: "Todo lo que gira alrededor de otro cuerpo. La Luna es uno." },
    { palabra: "órbita", dato: "Caer para siempre sin llegar nunca al suelo." },
    { palabra: "telescopio", dato: "No acerca las cosas: junta más luz de la que cabe en tu ojo." },
    { palabra: "galaxia", dato: "La nuestra tiene unos cien mil millones de estrellas." },
    { palabra: "cráter", dato: "El hoyo que deja una roca al chocar. Siempre queda redondo." },
    { palabra: "gravedad", dato: "Jala a todo lo que tiene masa. Entre más masa, más jala." },
    { palabra: "planeta", dato: "Gira alrededor de una estrella y limpió de rocas su camino." },
    { palabra: "asteroide", dato: "Roca que sobró de la formación del sistema solar." },
    { palabra: "astronauta", dato: "Flota porque cae junto con su nave, no porque no haya gravedad." },
    { palabra: "meteorito", dato: "El pedazo que sí llegó al suelo. Mientras arde en el aire es meteoro." },
    { palabra: "atmósfera", dato: "La capa de aire. Frena las rocas chicas y las quema antes de que lleguen." },
    { palabra: "transbordador", dato: "Nave que regresaba planeando y aterrizaba en pista, como un avión." },
    { palabra: "propulsor", dato: "Los cohetes que se sueltan cuando ya gastaron su combustible." },
    { palabra: "tobera", dato: "La boca por donde salen los gases. Su forma decide cuánto empuje da." },
    { palabra: "sonda", dato: "Nave sin tripulación. Se manda a donde una persona no aguantaría." },
    { palabra: "estación", dato: "Da una vuelta a la Tierra cada noventa minutos." },
    { palabra: "eclipse", dato: "Una sombra tapa a la otra. Pasa porque la Luna y el Sol se ven del mismo tamaño." },
    { palabra: "constelación", dato: "Un dibujo que hacemos nosotros. Esas estrellas ni siquiera están juntas." },
    { palabra: "combustible", dato: "En un cohete pesa más que todo lo demás junto." },
  ],

  familias: [
    { objetivo: "sonda", opciones: ["sonda", "onda", "senda", "ronda"] },
    { objetivo: "luna", opciones: ["luna", "lupa", "lima", "lona"] },
    { objetivo: "cohete", opciones: ["cohete", "copete", "coyote", "coche"] },
    { objetivo: "estrella", opciones: ["estrella", "estrecha", "escuela", "entrega"] },
    { objetivo: "planeta", opciones: ["planeta", "plancha", "paleta", "planta"] },
    { objetivo: "cometa", opciones: ["cometa", "camote", "comenta", "corneta"] },
    { objetivo: "nave", opciones: ["nave", "nube", "nieve", "llave"] },
    { objetivo: "polvo", opciones: ["polvo", "pulpo", "pollo", "polo"] },
    { objetivo: "sol", opciones: ["sol", "col", "sal", "sur"] },
  ],

  anclas: [
    {
      id: "erre",
      regla: "r o rr entre vocales",
      ancla: "tierra",
      pregunta: "¿Una r o dos?",
      explicacion:
        "Entre dos vocales, una r suena suave (aro, mirar) y dos r suenan fuertes (tierra, carro). " +
        "Di la palabra despacio: si la r retumba, van dos. Al principio de palabra basta con una, aunque suene fuerte.",
      opciones: ["rr", "r"],
      reactivos: [
        "tie[rr]a", "ate[rr]izar", "ba[rr]era", "e[rr]or", "reco[rr]er",
        "meteo[r]ito", "aste[r]oide", "explo[r]ar", "gi[r]ar", "sepa[r]ar",
        "ce[rr]ar", "tempe[r]atura",
      ],
    },
    {
      id: "cesez",
      regla: "El sonido /s/: c, s o z",
      ancla: "espacio",
      pregunta: "¿Con c, con s o con z?",
      explicacion:
        "Espacio va con c porque la c suena /s/ antes de e y de i: espacio, cielo, cinturón. " +
        "Antes de a, o, u ese sonido se escribe con z: zona, aterrizaje. La s vale en cualquier lado.",
      opciones: ["c", "s", "z"],
      reactivos: [
        "espa[c]io", "[c]ielo", "[s]atélite", "[s]onda", "[z]ona",
        "aterri[z]aje", "esta[c]ión", "[s]uperficie", "[c]inturón", "[s]ol",
        "[c]entro", "[s]istema",
      ],
    },
    {
      id: "jota",
      regla: "El sonido /j/: j o g",
      ancla: "viaje",
      pregunta: "¿Con j o con g?",
      explicacion:
        "Viaje va con j: todo lo que termina en -aje se escribe con j. Aterrizaje, despegaje, rodaje. " +
        "Antes de a, o, u el sonido /j/ también es siempre j: jalar, jugo, Júpiter.",
      opciones: ["j", "g"],
      reactivos: [
        "via[j]e", "aterriza[j]e", "[J]úpiter", "[j]alar", "traba[j]o",
        "[g]igante", "ori[g]en", "[g]irar", "ima[g]en", "[g]enerar",
        "ale[j]ar", "[j]unio",
      ],
    },
  ],

  diagrama: {
    clave: "cohete",
    titulo: "Corte de un cohete",
    piezas: [
      { id: "cofia", etiqueta: "cofia", dato: "Tapa la carga durante el ascenso y se suelta ya fuera del aire." },
      { id: "capsula", etiqueta: "cápsula", dato: "Donde va la tripulación. Es lo único que regresa entero." },
      { id: "oxigeno", etiqueta: "tanque de oxígeno", dato: "Va líquido y frísimo. Sin él el combustible no arde allá arriba." },
      { id: "combustible", etiqueta: "tanque de combustible", dato: "Ocupa la mayor parte del cohete. Se vacía en pocos minutos." },
      { id: "motor", etiqueta: "motor", dato: "Bombea el combustible y el oxígeno a una cámara y los enciende." },
      { id: "tobera", etiqueta: "tobera", dato: "Se abre como una campana para acelerar los gases de salida." },
      { id: "aleta", etiqueta: "aleta", dato: "Mantiene el cohete derecho mientras todavía hay aire." },
    ],
  },

  textos: [
    {
      id: "despegue",
      titulo: "El despegue de un cohete",
      cuerpo:
        "Un cohete despega con mucho ruido. Sus motores queman combustible. " +
        "Los gases salen por la tobera hacia abajo. Ese empuje levanta el cohete. " +
        "Al principio sube despacio. Después gana velocidad. " +
        "La primera etapa se acaba y se suelta. " +
        "Cae al mar y el cohete pesa menos. " +
        "Así sube más rápido con menos empuje. " +
        "Ocho minutos después ya está en órbita. " +
        "Ahí no hay aire que lo frene.",
    },
    {
      id: "luna-no-cae",
      titulo: "Por qué la Luna no se cae",
      cuerpo:
        "La Luna sí se está cayendo. Nunca llega al suelo. " +
        "La gravedad de la Tierra la jala. " +
        "Al mismo tiempo, la Luna avanza de lado. Muy rápido. " +
        "Cada vez que cae un poco, la Tierra se le curva debajo. " +
        "Por eso da vueltas y no choca. Eso es una órbita. " +
        "Los satélites hacen lo mismo. " +
        "Un astronauta flota porque cae junto con su nave.",
    },
    {
      id: "crateres",
      titulo: "Los cráteres",
      cuerpo:
        "La Luna está llena de cráteres. Un cráter es un hoyo redondo. " +
        "Lo hizo una roca del espacio al chocar. " +
        "La Tierra recibe golpes iguales. Casi no se le notan. " +
        "El aire quema las rocas chicas antes de llegar. " +
        "La lluvia y el viento borran las marcas viejas. " +
        "La Luna no tiene aire ni lluvia. " +
        "Por eso sus cráteres siguen ahí después de millones de años.",
    },
  ],
};
