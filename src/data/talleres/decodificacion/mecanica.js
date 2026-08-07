// Banco de mecánica automotriz — taller de decodificación lectora.
//
// El principio que ordena todo este archivo: aquí NO se enseña vocabulario.
// Son palabras que el alumno ya usa de oído y cuyo significado ya entiende;
// lo que se entrena es convertirlas de letras a sonidos. Por eso las palabras
// pueden ser largas y técnicas ("catalizador", "amortiguador") mientras las
// oraciones de los textos son cortas: el tema va a su edad, la sintaxis va a
// su nivel de decodificación.
//
// Cómo agregar contenido: ver docs/TALLER_DECODIFICACION.md.

export const BANCO = {
  id: "mecanica",
  nombre: "Mecánica automotriz",
  icono: "🔧",
  descripcion: "Motor, frenos, enfriamiento y transmisión.",

  // ── Palabras ────────────────────────────────────────────────────────────
  // Base del palmeo de sílabas y del armado. Las sílabas se calculan solas
  // (lib/silabas.js); `silabas: [...]` solo se pone para forzar un caso raro.
  // `dato` se muestra al acertar: una frase que da información real, no un
  // premio. Debe poder leerla alguien que ya sabe cómo funciona la pieza.
  palabras: [
    { palabra: "pistón", dato: "Sube y baja dentro del cilindro. Es quien recibe el golpe de la explosión." },
    { palabra: "bujía", dato: "Suelta la chispa justo cuando la mezcla está más apretada." },
    { palabra: "cigüeñal", dato: "Convierte el sube y baja del pistón en giro. Sin él, el motor no movería nada." },
    { palabra: "biela", dato: "Une el pistón con el cigüeñal. Transmite el golpe hacia abajo." },
    { palabra: "válvula", dato: "Abre y cierra el paso. Una deja entrar la mezcla, otra deja salir el humo." },
    { palabra: "embrague", dato: "Separa el motor de la caja un instante para poder cambiar de velocidad." },
    { palabra: "radiador", dato: "Enfría el líquido que sacó el calor del motor." },
    { palabra: "catalizador", dato: "Limpia los gases del escape antes de que salgan al aire." },
    { palabra: "cilindro", dato: "El tubo donde corre el pistón. Ahí adentro pasa la explosión." },
    { palabra: "carburador", dato: "Mezclaba aire con gasolina. Hoy casi todos los autos usan inyectores." },
    { palabra: "alternador", dato: "Genera electricidad mientras el motor gira y mantiene cargada la batería." },
    { palabra: "amortiguador", dato: "Aguanta el rebote del resorte para que la llanta no se despegue del piso." },
    { palabra: "transmisión", dato: "Adapta el giro rápido del motor al giro lento de las ruedas." },
    { palabra: "escape", dato: "Por ahí salen los gases quemados, ya pasados por el catalizador." },
    { palabra: "admisión", dato: "Por ahí entra el aire con gasolina hacia el cilindro." },
    { palabra: "compresión", dato: "El pistón aprieta la mezcla. Entre más apretada, más fuerte la explosión." },
    { palabra: "inyector", dato: "Rocía la gasolina en forma de niebla fina, medida al miligramo." },
    { palabra: "termostato", dato: "No deja pasar el líquido al radiador hasta que el motor agarra temperatura." },
    { palabra: "anticongelante", dato: "Sube el punto de hervor del agua y baja el de congelación." },
    { palabra: "silenciador", dato: "Rompe la onda de sonido del escape antes de que salga." },
    { palabra: "suspensión", dato: "Resortes y amortiguadores. Mantiene las llantas pegadas al camino." },
    { palabra: "dirección", dato: "Traduce el giro del volante en giro de las ruedas delanteras." },
    { palabra: "balata", dato: "Se aprieta contra el disco y lo frena. Se gasta con el uso, por eso se revisa." },
    { palabra: "engrane", dato: "Rueda dentada. Según su tamaño, da fuerza o da velocidad." },
    { palabra: "culata", dato: "Tapa el cilindro por arriba. Ahí van la bujía y las válvulas." },
    { palabra: "cárter", dato: "La charola de abajo. Ahí se junta el aceite cuando el motor está apagado." },
    { palabra: "polea", dato: "Rueda por donde corre la banda que mueve el alternador y la bomba." },
    { palabra: "batería", dato: "Guarda la energía para el arranque. Después el alternador la vuelve a llenar." },
    { palabra: "chispa", dato: "El brinco de electricidad entre las dos puntas de la bujía." },
    { palabra: "volante", dato: "El del conductor gira la dirección; el del motor guarda inercia entre explosión y explosión." },
    { palabra: "llanta", dato: "Lo único del auto que toca el suelo. Todo lo demás depende de ella." },
    { palabra: "aceite", dato: "Mete una película delgadísima entre las piezas para que no se rocen." },
    { palabra: "manguera", dato: "Lleva el líquido caliente del motor al radiador y lo trae de regreso." },
    { palabra: "correa", dato: "También se le dice banda. Une la polea del cigüeñal con las demás." },
    { palabra: "arranque", dato: "El motorcito que hace girar el cigüeñal la primera vez." },
    { palabra: "carrocería", dato: "La estructura de lámina. Está calculada para deformarse en un golpe." },
    { palabra: "tornillo", dato: "Cada uno lleva su torque exacto. Ni flojo ni pasado de apretado." },
    { palabra: "herramienta", dato: "La llave correcta es la que abraza la tuerca completa, no dos caras." },
  ],

  // ── Familias de palabras ────────────────────────────────────────────────
  // Ataca de frente el hábito de adivinar por la forma general. Por eso los
  // distractores SIEMPRE son vecinos ortográficos —misma silueta, una letra o
  // sílaba de diferencia—, nunca palabras distintas. Si el alumno acierta
  // "pistón" contra "elefante", no leyó: reconoció.
  familias: [
    { objetivo: "pistón", opciones: ["piso", "pisa", "pista", "pistón"] },
    { objetivo: "motor", opciones: ["moto", "motor", "mono", "moño"] },
    { objetivo: "freno", opciones: ["freno", "frena", "fresa", "frente"] },
    { objetivo: "banda", opciones: ["banda", "bando", "banca", "venda"] },
    { objetivo: "marcha", opciones: ["marcha", "mancha", "marca", "margen"] },
    { objetivo: "llanta", opciones: ["llanta", "planta", "lanza", "llama"] },
    { objetivo: "cable", opciones: ["cable", "calle", "clave", "cabe"] },
    { objetivo: "torno", opciones: ["torno", "trono", "tono", "torso"] },
    { objetivo: "bomba", opciones: ["bomba", "bombo", "tromba", "trompa"] },
    { objetivo: "filtro", opciones: ["filtro", "fieltro", "frito", "filo"] },
    { objetivo: "cárter", opciones: ["cárter", "carta", "cartel", "cárcel"] },
    { objetivo: "balata", opciones: ["balata", "bala", "balada", "balanza"] },
    { objetivo: "tapa", opciones: ["tapa", "taza", "tasa", "tapón"] },
    { objetivo: "cadena", opciones: ["cadena", "cabina", "cadera", "cabeza"] },
    { objetivo: "junta", opciones: ["junta", "punta", "justa", "juega"] },
    { objetivo: "tuerca", opciones: ["tuerca", "turca", "tuerta", "terca"] },
  ],

  // ── Anclas ortográficas ─────────────────────────────────────────────────
  // Cada regla se enseña desde una palabra que él ya pronuncia bien, y luego
  // se estira hacia palabras nuevas. En los reactivos, la letra que se decide
  // va entre corchetes: "cig[ü]eñal". El taller la esconde y ofrece las
  // `opciones`; la respuesta correcta es justo lo que está dentro.
  anclas: [
    {
      id: "dieresis",
      regla: "La diéresis: güe, güi",
      ancla: "cigüeñal",
      pregunta: "¿Los dos puntitos van o no van?",
      explicacion:
        "En cigüeñal oyes la u: ci-güe-ñal. Los dos puntitos existen para avisarte que esa u sí suena. " +
        "En embrague no la oyes: em-bra-gue. Regla: si la u suena, lleva diéresis.",
      opciones: ["ü", "u"],
      reactivos: [
        "cig[ü]eñal", "embrag[u]e", "ping[ü]ino", "g[u]erra", "verg[ü]enza",
        "g[u]iso", "desag[ü]e", "jug[u]ete", "biling[ü]e", "mang[u]era",
        "antig[ü]edad", "g[u]itarra",
      ],
    },
    {
      id: "jota",
      regla: "El sonido /j/: j o g",
      ancla: "bujía",
      pregunta: "¿Con j o con g?",
      explicacion:
        "Bujía va con j. Antes de a, o, u el sonido /j/ SIEMPRE es j: caja, joya, jugo. " +
        "Y todas las palabras que terminan en -aje van con j: garaje, engranaje, rodaje. " +
        "Antes de e, i hay que aprendérselas una por una.",
      opciones: ["j", "g"],
      reactivos: [
        "bu[j]ía", "gara[j]e", "engrana[j]e", "roda[j]e", "ca[j]a",
        "[g]ente", "[g]irar", "in[g]eniero", "a[g]ente", "[j]uego",
        "via[j]e", "[g]imnasio",
      ],
    },
    {
      id: "elle",
      regla: "ll o y",
      ancla: "llanta",
      pregunta: "¿Con ll o con y?",
      explicacion:
        "Llanta va con ll. Las piezas chiquitas casi siempre terminan en -illo o -illa, y eso " +
        "siempre es ll: tornillo, varilla, martillo, anillo. La y aparece en otras palabras: rayo, inyector.",
      opciones: ["ll", "y"],
      reactivos: [
        "[ll]anta", "torni[ll]o", "vari[ll]a", "ani[ll]o", "marti[ll]o",
        "ho[y]o", "in[y]ector", "[y]unque", "apo[y]o", "[ll]ave",
        "destorni[ll]ador", "arro[y]o",
      ],
    },
    {
      id: "erre",
      regla: "r o rr entre vocales",
      ancla: "carrocería",
      pregunta: "¿Una r o dos?",
      explicacion:
        "Entre dos vocales, una sola r suena suave (aro, cara) y dos r suenan fuertes (carro, correa). " +
        "Di la palabra despacio: si la r retumba, van dos.",
      opciones: ["rr", "r"],
      reactivos: [
        "ca[rr]ocería", "co[rr]ea", "a[rr]anque", "he[rr]amienta", "ca[rr]o",
        "a[r]o", "carbu[r]ador", "pa[r]abrisas", "acele[r]ador", "ba[rr]a",
        "repa[r]ar", "de[rr]ape",
      ],
    },
    {
      id: "cesez",
      regla: "El sonido /s/: c, s o z",
      ancla: "cilindro",
      pregunta: "¿Con c, con s o con z?",
      explicacion:
        "Cilindro va con c porque la c suena /s/ antes de e y de i: cilindro, aceite, cerrar. " +
        "Antes de a, o, u ese sonido se escribe con z: zapata, zumbido. La s vale en cualquier lado.",
      opciones: ["c", "s", "z"],
      reactivos: [
        "[c]ilindro", "a[c]eite", "[z]apata", "[s]ilenciador", "[s]uspensión",
        "pre[s]ión", "[c]inturón", "[z]umbido", "[c]entro", "[s]oldadura",
        "direc[c]ión", "cabe[z]a",
      ],
    },
  ],

  // ── Diagrama para etiquetar ─────────────────────────────────────────────
  // `clave` resuelve al componente SVG en components/.../Diagramas.jsx. Los
  // `datos` son la razón de ser de esta actividad: aquí él sabe más que la
  // app, así que al acertar recibe información, no una felicitación.
  diagrama: {
    clave: "motor",
    titulo: "Corte de un cilindro",
    piezas: [
      { id: "bujia", etiqueta: "bujía", dato: "Va roscada en la culata, con la punta asomada a la cámara." },
      { id: "admision", etiqueta: "válvula de admisión", dato: "Se abre en el primer tiempo y deja entrar la mezcla." },
      { id: "escape", etiqueta: "válvula de escape", dato: "Se abre en el cuarto tiempo y deja salir los gases quemados." },
      { id: "piston", etiqueta: "pistón", dato: "Sus anillos sellan contra la pared del cilindro." },
      { id: "biela", etiqueta: "biela", dato: "Aguanta toda la fuerza de la explosión, tiempo tras tiempo." },
      { id: "cigüenal", etiqueta: "cigüeñal", dato: "Sus contrapesos evitan que el motor se sacuda al girar." },
      { id: "cilindro", etiqueta: "cilindro", dato: "Su pared va pulida con un rayado finísimo que retiene el aceite." },
    ],
  },

  // ── Textos para lectura repetida ────────────────────────────────────────
  // 60-90 palabras, oraciones cortas, una idea por oración. El contenido es
  // técnico de verdad; lo fácil es la sintaxis, no el tema.
  textos: [
    {
      id: "cuatro-tiempos",
      titulo: "El ciclo de cuatro tiempos",
      cuerpo:
        "El motor trabaja en cuatro tiempos. En el primero, el pistón baja. " +
        "La válvula de admisión se abre. Entra aire con gasolina. " +
        "En el segundo tiempo, el pistón sube y aprieta la mezcla. " +
        "En el tercero, la bujía suelta una chispa. La mezcla explota. " +
        "El pistón baja de golpe y mueve la biela. La biela hace girar el cigüeñal. " +
        "En el cuarto tiempo, el pistón sube otra vez. La válvula de escape se abre. " +
        "El humo sale. Luego todo empieza de nuevo.",
    },
    {
      id: "frenos",
      titulo: "El sistema de frenos",
      cuerpo:
        "Los frenos detienen el auto. El pie pisa el pedal. " +
        "El pedal empuja un líquido por un tubo delgado. " +
        "El líquido llega hasta las cuatro ruedas. " +
        "Ahí aprieta unas balatas contra el disco. " +
        "El disco gira junto con la rueda. " +
        "Cuando la balata lo aprieta, el disco pierde velocidad. " +
        "El auto se detiene. Con el uso, la balata se gasta. " +
        "Por eso hay que revisarla seguido. Un freno flojo es peligroso.",
    },
    {
      id: "radiador",
      titulo: "El radiador y el enfriamiento",
      cuerpo:
        "El motor se calienta mucho al trabajar. " +
        "Para eso está el radiador. Dentro del motor corre un líquido. " +
        "Ese líquido recoge el calor. Luego pasa al radiador por una manguera. " +
        "El radiador tiene muchas aletas delgadas. " +
        "El aire pasa entre ellas y enfría el líquido. " +
        "Un ventilador ayuda cuando el auto va despacio. " +
        "El líquido frío regresa al motor. Así el motor no se funde. " +
        "Si falta líquido, el motor se sobrecalienta.",
    },
    {
      id: "transmision",
      titulo: "La transmisión",
      cuerpo:
        "El motor gira muy rápido. Las ruedas no pueden girar así. " +
        "La transmisión arregla eso. Adentro tiene engranes de distintos tamaños. " +
        "Cada engrane da una velocidad. " +
        "En primera, el auto tiene mucha fuerza. Avanza despacio pero sube cuestas. " +
        "En cuarta, el auto corre más. " +
        "El embrague sirve para cambiar de velocidad. " +
        "Separa el motor de la caja un momento. " +
        "Así los engranes cambian sin rechinar.",
    },
  ],
};
