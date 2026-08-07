// Banco de futbol — taller de decodificación lectora.
//
// Mismo principio que el banco de mecánica: vocabulario que el alumno ya usa
// de oído, oraciones cortas, contenido real. No todos los bancos traen las
// cinco anclas ortográficas: se ponen las que tienen una palabra ancla
// creíble DENTRO del tema. Forzar una regla con una palabra ajena rompe lo
// único que hace funcionar esta actividad.

export const BANCO = {
  id: "futbol",
  nombre: "Futbol",
  icono: "⚽",
  descripcion: "Cancha, reglas, posiciones y jugadas.",

  palabras: [
    { palabra: "portero", dato: "Es el único que puede usar las manos, y solo dentro de su área." },
    { palabra: "delantero", dato: "Juega más adelante. Vive peleado con la línea de fuera de lugar." },
    { palabra: "defensa", dato: "Cierra el paso al delantero. Suben todos juntos para dejarlo en fuera de lugar." },
    { palabra: "mediocampo", dato: "La zona de en medio. Quien la gana, manda el ritmo del partido." },
    { palabra: "árbitro", dato: "Su reloj es el que vale, aunque el marcador diga otra cosa." },
    { palabra: "portería", dato: "Mide siete metros con treinta y dos de ancho. Siempre la misma." },
    { palabra: "travesaño", dato: "El palo de arriba. Un tiro que le pega no es gol, aunque bote adentro y salga." },
    { palabra: "banderín", dato: "Marca cada esquina de la cancha. Desde ahí se cobra el tiro de esquina." },
    { palabra: "tarjeta", dato: "Amarilla avisa; roja expulsa. Dos amarillas suman una roja." },
    { palabra: "silbato", dato: "Un pitido corto detiene el juego; uno largo lo termina." },
    { palabra: "uniforme", dato: "Los dos equipos no pueden traer colores parecidos. Ni los porteros." },
    { palabra: "cancha", dato: "No todas miden igual. La regla da un rango, no una medida exacta." },
    { palabra: "balón", dato: "Se revisa la presión antes del partido. Uno flojo bota distinto." },
    { palabra: "penalti", dato: "Se cobra a once metros. El portero no puede despegar los pies de la línea." },
    { palabra: "prórroga", dato: "Treinta minutos extra en dos tiempos. Si sigue el empate, van los penaltis." },
    { palabra: "capitán", dato: "El único que debería hablarle al árbitro. Trae el gafete en el brazo." },
    { palabra: "entrenador", dato: "Arma la alineación y decide los cambios. Desde la banda no puede tocar el balón." },
    { palabra: "suplente", dato: "Espera en la banca. Cuando entra, el que sale ya no puede regresar." },
    { palabra: "remate", dato: "El toque final de la jugada. De cabeza o de pierna." },
    { palabra: "empate", dato: "Vale un punto para cada equipo. En eliminación directa no alcanza." },
  ],

  familias: [
    { objetivo: "pase", opciones: ["pase", "pasa", "paso", "peso"] },
    { objetivo: "tiro", opciones: ["tiro", "giro", "tira", "toro"] },
    { objetivo: "meta", opciones: ["meta", "mata", "mota", "menta"] },
    { objetivo: "falta", opciones: ["falta", "salta", "falda", "flauta"] },
    { objetivo: "portero", opciones: ["portero", "puntero", "potrero", "portento"] },
    { objetivo: "cancha", opciones: ["cancha", "concha", "mancha", "chancla"] },
    { objetivo: "balón", opciones: ["balón", "talón", "bastón", "salón"] },
    { objetivo: "córner", opciones: ["córner", "corneta", "cornea", "coronel"] },
    { objetivo: "tarjeta", opciones: ["tarjeta", "tableta", "carpeta", "tarima"] },
    { objetivo: "remate", opciones: ["remate", "regate", "rescate", "rebate"] },
  ],

  anclas: [
    {
      id: "be-uve",
      regla: "b o v",
      ancla: "balón",
      pregunta: "¿Con b o con v?",
      explicacion:
        "Balón va con b. Suenan igual, así que aquí no ayuda el oído: hay que fijarse en la palabra escrita. " +
        "Una pista que sí sirve: después de m siempre va b (cambio, hombro) y después de n siempre va v (envío).",
      opciones: ["b", "v"],
      reactivos: [
        "[b]alón", "[b]ota", "[b]arrera", "cam[b]io", "hom[b]ro",
        "[v]olante", "[v]encer", "[v]ictoria", "en[v]iar", "re[v]és",
        "[b]anca", "[v]uelta",
      ],
    },
    {
      id: "jota",
      regla: "El sonido /j/: j o g",
      ancla: "jugador",
      pregunta: "¿Con j o con g?",
      explicacion:
        "Jugador va con j. Antes de a, o, u ese sonido SIEMPRE es j: jugada, juego, jalar. " +
        "Y todo lo que termina en -aje va con j. Antes de e, i hay que aprendérselas: gente va con g.",
      opciones: ["j", "g"],
      reactivos: [
        "[j]ugador", "[j]ugada", "[j]uego", "tar[j]eta", "empu[j]e",
        "[g]ente", "[g]irar", "ori[g]en", "ele[g]ir", "ro[j]o",
        "[j]alar", "li[g]ero",
      ],
    },
    {
      id: "cesez",
      regla: "El sonido /s/: c, s o z",
      ancla: "espacio",
      pregunta: "¿Con c, con s o con z?",
      explicacion:
        "La c suena /s/ solo antes de e y de i: centro, cero, espacio. " +
        "Antes de a, o, u ese sonido se escribe con z: cabezazo, zaguero. La s vale en cualquier lado.",
      opciones: ["c", "s", "z"],
      reactivos: [
        "[c]entro", "[c]ero", "cabe[z]azo", "[z]aguero", "[s]aque",
        "[s]ilbato", "defen[s]a", "cé[s]ped", "ven[c]er", "as[c]enso",
        "po[s]esión", "[s]uplente",
      ],
    },
  ],

  diagrama: {
    clave: "cancha",
    titulo: "La cancha vista desde arriba",
    piezas: [
      { id: "porteria", etiqueta: "portería", dato: "Siete metros con treinta y dos de ancho. Igual en todas las canchas." },
      { id: "area-grande", etiqueta: "área grande", dato: "Aquí el portero puede usar las manos. Una falta adentro es penalti." },
      { id: "area-chica", etiqueta: "área chica", dato: "Desde su línea se cobra el saque de meta." },
      { id: "penal", etiqueta: "punto penal", dato: "A once metros exactos de la línea de gol." },
      { id: "central", etiqueta: "círculo central", dato: "Al sacar del centro, nadie del otro equipo puede entrar." },
      { id: "medio", etiqueta: "línea de medio campo", dato: "Parte la cancha en dos. En el descanso los equipos se cambian de lado." },
      { id: "corner", etiqueta: "banderín de córner", dato: "El balón se coloca dentro del cuadro, no fuera." },
    ],
  },

  textos: [
    {
      id: "tiro-esquina",
      titulo: "El tiro de esquina",
      cuerpo:
        "El balón sale por la línea de fondo. Lo tocó un defensa. " +
        "Entonces el árbitro marca un tiro de esquina. " +
        "Un jugador va hasta el banderín. Ahí coloca el balón dentro del cuadro. " +
        "Sus compañeros entran al área. " +
        "El portero busca su lugar bajo el travesaño. " +
        "El jugador levanta la mano y patea. " +
        "El balón cruza el área por el aire. Alguien salta y cabecea. " +
        "Muchos goles nacen así.",
    },
    {
      id: "tarjetas",
      titulo: "Las tarjetas",
      cuerpo:
        "El árbitro cuida el orden del partido. " +
        "Trae dos tarjetas en el bolsillo. La amarilla es un aviso. " +
        "Se marca por una falta fuerte o por perder tiempo. " +
        "La roja es una expulsión. El jugador sale y ya no regresa. " +
        "Su equipo termina con diez. " +
        "Dos amarillas también valen una roja. " +
        "Por eso un jugador amonestado juega con cuidado. " +
        "Un solo error deja al equipo corto.",
    },
    {
      id: "fuera-de-lugar",
      titulo: "El fuera de lugar",
      cuerpo:
        "El fuera de lugar confunde a muchos. La regla es corta. " +
        "Mira el momento del pase. " +
        "En ese instante, el delantero no puede estar más adelante que el último defensa. " +
        "Si lo está, el juez de línea levanta la bandera. El juego se detiene. " +
        "No importa dónde termine la jugada. " +
        "Lo que cuenta es dónde estaba al salir el pase. " +
        "Por eso los defensas suben juntos.",
    },
  ],
};
