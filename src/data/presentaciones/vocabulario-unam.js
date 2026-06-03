// Datos de la presentación: Sinónimos, Antónimos y Analogías (Vocabulario UNAM)
// Puros reactivos. Las slides se generan a partir de los arreglos PALABRAS y ANALOGIAS.
//
// PALABRAS: cada palabra produce 2 reactivos (sinónimo + antónimo).
//   p   = palabra              sig = significado (va en la explicación)
//   sin = sinónimo correcto    ant = antónimo correcto
//   ds  = 2 distractores extra para el reactivo de sinónimo
//   da  = 2 distractores extra para el reactivo de antónimo
// (En el reactivo de sinónimo, el antónimo sirve de distractor "trampa", y viceversa.)

const PALABRAS = [
  { p: "Efímero", sig: "que dura muy poco tiempo", sin: "fugaz", ant: "perdurable", ds: ["costoso", "ruidoso"], da: ["sombrío", "áspero"] },
  { p: "Fortuito", sig: "que sucede por casualidad, sin planearse", sin: "casual", ant: "premeditado", ds: ["sonoro", "amargo"], da: ["frágil", "lejano"] },
  { p: "Abyecto", sig: "despreciable, vil, bajo", sin: "ruin", ant: "noble", ds: ["lento", "húmedo"], da: ["estrecho", "tibio"] },
  { p: "Díscolo", sig: "desobediente, indisciplinado", sin: "rebelde", ant: "obediente", ds: ["pesado", "claro"], da: ["oscuro", "vacío"] },
  { p: "Ufano", sig: "orgulloso y satisfecho de sí mismo", sin: "engreído", ant: "humilde", ds: ["seco", "lejano"], da: ["denso", "rápido"] },
  { p: "Pueril", sig: "propio de un niño; ingenuo", sin: "infantil", ant: "maduro", ds: ["sólido", "ácido"], da: ["liviano", "turbio"] },
  { p: "Lánguido", sig: "decaído, falto de energía", sin: "débil", ant: "vigoroso", ds: ["honesto", "amplio"], da: ["barato", "salado"] },
  { p: "Prolijo", sig: "demasiado extenso y detallado", sin: "minucioso", ant: "conciso", ds: ["hostil", "frío"], da: ["agrio", "veloz"] },
  { p: "Mendaz", sig: "que miente o engaña", sin: "mentiroso", ant: "veraz", ds: ["lento", "rígido"], da: ["pesado", "lejano"] },
  { p: "Sagaz", sig: "astuto y perspicaz", sin: "perspicaz", ant: "ingenuo", ds: ["amargo", "húmedo"], da: ["plano", "ruidoso"] },
  { p: "Cándido", sig: "ingenuo, sin malicia", sin: "inocente", ant: "malicioso", ds: ["pesado", "agudo"], da: ["estrecho", "tibio"] },
  { p: "Insólito", sig: "raro, fuera de lo común", sin: "inusual", ant: "habitual", ds: ["costoso", "salado"], da: ["frágil", "denso"] },
  { p: "Vetusto", sig: "muy viejo o anticuado", sin: "antiguo", ant: "moderno", ds: ["alegre", "amargo"], da: ["hostil", "vacío"] },
  { p: "Hermético", sig: "cerrado, impenetrable", sin: "impenetrable", ant: "accesible", ds: ["alegre", "veloz"], da: ["barato", "tibio"] },
  { p: "Conciso", sig: "breve y preciso al expresarse", sin: "sucinto", ant: "extenso", ds: ["amargo", "rígido"], da: ["oscuro", "denso"] },
  { p: "Locuaz", sig: "que habla mucho", sin: "parlanchín", ant: "taciturno", ds: ["pesado", "húmedo"], da: ["áspero", "lejano"] },
  { p: "Tácito", sig: "que se entiende sin decirse; implícito", sin: "sobrentendido", ant: "explícito", ds: ["lento", "salado"], da: ["frágil", "amargo"] },
  { p: "Ínfimo", sig: "muy pequeño o muy bajo", sin: "mínimo", ant: "máximo", ds: ["alegre", "ruidoso"], da: ["lejano", "tibio"] },
  { p: "Magnánimo", sig: "generoso y noble de espíritu", sin: "generoso", ant: "mezquino", ds: ["frío", "veloz"], da: ["húmedo", "lento"] },
  { p: "Frugal", sig: "moderado, sobrio, sin excesos", sin: "moderado", ant: "abundante", ds: ["hostil", "agudo"], da: ["oscuro", "rígido"] },
  { p: "Adusto", sig: "serio, severo, poco amable", sin: "hosco", ant: "afable", ds: ["veloz", "húmedo"], da: ["estrecho", "salado"] },
  { p: "Afable", sig: "amable y agradable en el trato", sin: "cordial", ant: "arisco", ds: ["lento", "amargo"], da: ["denso", "lejano"] },
  { p: "Belicoso", sig: "agresivo, inclinado a la guerra", sin: "agresivo", ant: "pacífico", ds: ["húmedo", "lento"], da: ["amargo", "estrecho"] },
  { p: "Cáustico", sig: "mordaz, agresivo en la crítica", sin: "mordaz", ant: "amable", ds: ["lento", "amplio"], da: ["húmedo", "veloz"] },
  { p: "Diáfano", sig: "claro y transparente", sin: "transparente", ant: "opaco", ds: ["amargo", "rígido"], da: ["lento", "barato"] },
  { p: "Endeble", sig: "débil, poco resistente", sin: "frágil", ant: "robusto", ds: ["alegre", "salado"], da: ["lejano", "tibio"] },
  { p: "Exiguo", sig: "escaso, insuficiente", sin: "escaso", ant: "abundante", ds: ["alegre", "veloz"], da: ["hostil", "oscuro"] },
  { p: "Falaz", sig: "engañoso, que induce a error", sin: "engañoso", ant: "auténtico", ds: ["lento", "húmedo"], da: ["frágil", "amargo"] },
  { p: "Gélido", sig: "muy frío", sin: "helado", ant: "cálido", ds: ["alegre", "amargo"], da: ["barato", "rígido"] },
  { p: "Hostil", sig: "enemigo, contrario, agresivo", sin: "adverso", ant: "amistoso", ds: ["húmedo", "lento"], da: ["salado", "estrecho"] },
  { p: "Jocoso", sig: "gracioso, festivo", sin: "festivo", ant: "serio", ds: ["amargo", "denso"], da: ["lejano", "rígido"] },
  { p: "Lacónico", sig: "que habla con muy pocas palabras", sin: "breve", ant: "locuaz", ds: ["húmedo", "agrio"], da: ["frío", "lejano"] },
  { p: "Letal", sig: "que causa la muerte", sin: "mortal", ant: "inofensivo", ds: ["amargo", "lejano"], da: ["lento", "salado"] },
  { p: "Lúgubre", sig: "triste y sombrío", sin: "tétrico", ant: "alegre", ds: ["veloz", "salado"], da: ["estrecho", "barato"] },
  { p: "Nimio", sig: "insignificante, sin importancia", sin: "trivial", ant: "importante", ds: ["húmedo", "veloz"], da: ["frío", "lejano"] },
  { p: "Obsoleto", sig: "anticuado, en desuso", sin: "caduco", ant: "actual", ds: ["alegre", "amargo"], da: ["hostil", "salado"] },
  { p: "Parco", sig: "moderado, escaso, sobrio", sin: "moderado", ant: "pródigo", ds: ["húmedo", "veloz"], da: ["oscuro", "rígido"] },
  { p: "Perenne", sig: "continuo, que dura siempre", sin: "permanente", ant: "efímero", ds: ["amargo", "veloz"], da: ["barato", "tibio"] },
  { p: "Pertinaz", sig: "obstinado, que persiste", sin: "terco", ant: "voluble", ds: ["húmedo", "salado"], da: ["lejano", "amargo"] },
  { p: "Plácido", sig: "tranquilo, sereno", sin: "sereno", ant: "agitado", ds: ["amargo", "veloz"], da: ["estrecho", "salado"] },
  { p: "Próspero", sig: "favorable, que prospera", sin: "floreciente", ant: "adverso", ds: ["amargo", "lento"], da: ["húmedo", "rígido"] },
  { p: "Pulcro", sig: "limpio, aseado, cuidadoso", sin: "aseado", ant: "desaliñado", ds: ["veloz", "amargo"], da: ["lejano", "tibio"] },
  { p: "Raudo", sig: "muy rápido, veloz", sin: "veloz", ant: "lento", ds: ["amargo", "húmedo"], da: ["barato", "salado"] },
  { p: "Recóndito", sig: "oculto, escondido, profundo", sin: "oculto", ant: "visible", ds: ["amargo", "lento"], da: ["frío", "salado"] },
  { p: "Reticente", sig: "reacio, reservado a hacer algo", sin: "reacio", ant: "dispuesto", ds: ["húmedo", "veloz"], da: ["amargo", "lejano"] },
  { p: "Sobrio", sig: "moderado, sin excesos", sin: "templado", ant: "excesivo", ds: ["húmedo", "veloz"], da: ["lejano", "frío"] },
  { p: "Solícito", sig: "atento y diligente", sin: "diligente", ant: "negligente", ds: ["amargo", "frío"], da: ["salado", "estrecho"] },
  { p: "Sucinto", sig: "breve, resumido", sin: "breve", ant: "extenso", ds: ["húmedo", "amargo"], da: ["frío", "salado"] },
  { p: "Taciturno", sig: "callado y melancólico", sin: "silencioso", ant: "comunicativo", ds: ["amargo", "veloz"], da: ["lejano", "tibio"] },
  { p: "Tenaz", sig: "perseverante, firme, constante", sin: "perseverante", ant: "inconstante", ds: ["húmedo", "amargo"], da: ["frío", "salado"] },
  { p: "Trivial", sig: "común, sin importancia", sin: "banal", ant: "trascendental", ds: ["húmedo", "veloz"], da: ["frío", "lejano"] },
  { p: "Veraz", sig: "que dice la verdad", sin: "sincero", ant: "falaz", ds: ["amargo", "lento"], da: ["húmedo", "salado"] },
  { p: "Vil", sig: "despreciable, ruin, indigno", sin: "ruin", ant: "noble", ds: ["húmedo", "veloz"], da: ["frío", "estrecho"] },
  { p: "Ameno", sig: "agradable, entretenido", sin: "entretenido", ant: "tedioso", ds: ["amargo", "frío"], da: ["salado", "rígido"] },
  { p: "Arduo", sig: "difícil, trabajoso", sin: "penoso", ant: "fácil", ds: ["húmedo", "amargo"], da: ["frío", "salado"] },
  { p: "Audaz", sig: "atrevido, valiente", sin: "intrépido", ant: "cobarde", ds: ["húmedo", "amargo"], da: ["frío", "lejano"] },
  { p: "Cabal", sig: "completo, íntegro, exacto", sin: "íntegro", ant: "incompleto", ds: ["amargo", "frío"], da: ["húmedo", "salado"] },
  { p: "Conspicuo", sig: "ilustre, notable, sobresaliente", sin: "notable", ant: "insignificante", ds: ["húmedo", "amargo"], da: ["frío", "salado"] },
  { p: "Contumaz", sig: "obstinado, terco, rebelde", sin: "terco", ant: "dócil", ds: ["húmedo", "frío"], da: ["amargo", "salado"] },
  { p: "Efusivo", sig: "muy expresivo y cariñoso", sin: "expresivo", ant: "frío", ds: ["amargo", "lento"], da: ["húmedo", "salado"] },
  { p: "Egregio", sig: "ilustre, insigne, eminente", sin: "eminente", ant: "vulgar", ds: ["húmedo", "amargo"], da: ["frío", "salado"] },
  { p: "Errar", sig: "equivocarse, cometer un error", sin: "fallar", ant: "acertar", ds: ["correr", "callar"], da: ["dudar", "huir"] },
  { p: "Exacerbar", sig: "agravar o intensificar algo", sin: "agravar", ant: "calmar", ds: ["ocultar", "medir"], da: ["dudar", "soltar"] },
  { p: "Exornar", sig: "adornar, embellecer", sin: "adornar", ant: "afear", ds: ["medir", "callar"], da: ["dudar", "correr"] },
  { p: "Hacinar", sig: "amontonar, apilar cosas", sin: "amontonar", ant: "dispersar", ds: ["medir", "pulir"], da: ["dudar", "callar"] },
  { p: "Impávido", sig: "sereno, sin miedo", sin: "imperturbable", ant: "temeroso", ds: ["húmedo", "amargo"], da: ["frío", "salado"] },
  { p: "Inane", sig: "vacío, inútil, vano", sin: "fútil", ant: "sustancial", ds: ["húmedo", "frío"], da: ["amargo", "salado"] },
  { p: "Indómito", sig: "que no se deja dominar", sin: "indomable", ant: "manso", ds: ["amargo", "frío"], da: ["húmedo", "salado"] },
  { p: "Inicuo", sig: "injusto, malvado", sin: "injusto", ant: "justo", ds: ["húmedo", "amargo"], da: ["frío", "salado"] },
  { p: "Insigne", sig: "célebre, famoso, ilustre", sin: "célebre", ant: "anónimo", ds: ["húmedo", "amargo"], da: ["frío", "salado"] },
  { p: "Lozano", sig: "sano, vigoroso, fresco", sin: "vigoroso", ant: "marchito", ds: ["amargo", "lento"], da: ["húmedo", "salado"] },
  { p: "Mengua", sig: "disminución, merma", sin: "merma", ant: "aumento", ds: ["sonido", "brillo"], da: ["sombra", "ruido"] },
  { p: "Mitigar", sig: "calmar, aliviar, suavizar", sin: "aliviar", ant: "agravar", ds: ["medir", "ocultar"], da: ["dudar", "callar"] },
  { p: "Mórbido", sig: "enfermizo, malsano", sin: "malsano", ant: "sano", ds: ["amargo", "lento"], da: ["húmedo", "salado"] },
  { p: "Mundano", sig: "terrenal, frívolo, material", sin: "terrenal", ant: "espiritual", ds: ["amargo", "frío"], da: ["húmedo", "salado"] },
  { p: "Necio", sig: "tonto, ignorante, terco", sin: "ignorante", ant: "sensato", ds: ["húmedo", "amargo"], da: ["frío", "salado"] },
  { p: "Óptimo", sig: "lo mejor posible, inmejorable", sin: "inmejorable", ant: "pésimo", ds: ["amargo", "lento"], da: ["húmedo", "salado"] },
  { p: "Oneroso", sig: "costoso, gravoso", sin: "costoso", ant: "barato", ds: ["amargo", "lento"], da: ["húmedo", "salado"] },
  { p: "Opíparo", sig: "abundante y espléndido (banquete)", sin: "abundante", ant: "frugal", ds: ["amargo", "lento"], da: ["húmedo", "salado"] },
  { p: "Oprobio", sig: "deshonra, vergüenza, afrenta", sin: "deshonra", ant: "honra", ds: ["sonido", "brillo"], da: ["sombra", "ruido"] },
  { p: "Perspicaz", sig: "agudo de ingenio, sagaz", sin: "sagaz", ant: "torpe", ds: ["húmedo", "amargo"], da: ["frío", "salado"] },
  { p: "Pretérito", sig: "pasado, ya transcurrido", sin: "pasado", ant: "futuro", ds: ["amargo", "frío"], da: ["húmedo", "salado"] },
  { p: "Profuso", sig: "abundante, copioso", sin: "copioso", ant: "escaso", ds: ["amargo", "lento"], da: ["húmedo", "salado"] },
  { p: "Pródigo", sig: "que gasta o da con generosidad", sin: "derrochador", ant: "tacaño", ds: ["amargo", "frío"], da: ["húmedo", "salado"] },
  { p: "Pusilánime", sig: "cobarde, sin ánimo", sin: "apocado", ant: "valiente", ds: ["húmedo", "amargo"], da: ["frío", "salado"] },
  { p: "Quimérico", sig: "fantasioso, irreal, imposible", sin: "irreal", ant: "real", ds: ["amargo", "frío"], da: ["húmedo", "salado"] },
  { p: "Reacio", sig: "que se resiste a hacer algo", sin: "renuente", ant: "dispuesto", ds: ["húmedo", "amargo"], da: ["frío", "salado"] },
  { p: "Recato", sig: "pudor, modestia, reserva", sin: "pudor", ant: "descaro", ds: ["sonido", "brillo"], da: ["sombra", "ruido"] },
  { p: "Sosegado", sig: "tranquilo, calmado", sin: "calmado", ant: "inquieto", ds: ["amargo", "frío"], da: ["húmedo", "salado"] },
  { p: "Suntuoso", sig: "lujoso, magnífico", sin: "lujoso", ant: "humilde", ds: ["amargo", "lento"], da: ["húmedo", "salado"] },
  { p: "Tosco", sig: "burdo, rudo, sin pulir", sin: "burdo", ant: "refinado", ds: ["amargo", "frío"], da: ["húmedo", "salado"] },
  { p: "Truncar", sig: "cortar o interrumpir algo", sin: "interrumpir", ant: "completar", ds: ["medir", "pulir"], da: ["dudar", "callar"] },
  { p: "Turbio", sig: "confuso, poco claro, sucio", sin: "confuso", ant: "claro", ds: ["amargo", "lento"], da: ["húmedo", "salado"] },
  { p: "Vacuo", sig: "vacío, hueco, sin contenido", sin: "hueco", ant: "pleno", ds: ["amargo", "frío"], da: ["húmedo", "salado"] },
  { p: "Vehemente", sig: "apasionado, impetuoso", sin: "impetuoso", ant: "indiferente", ds: ["húmedo", "amargo"], da: ["frío", "salado"] },
  { p: "Venial", sig: "leve, perdonable (falta)", sin: "leve", ant: "grave", ds: ["amargo", "frío"], da: ["húmedo", "salado"] },
  { p: "Vilipendiar", sig: "denigrar, despreciar a alguien", sin: "denigrar", ant: "ensalzar", ds: ["medir", "pulir"], da: ["dudar", "callar"] },
  { p: "Vituperar", sig: "censurar, reprobar con dureza", sin: "reprobar", ant: "elogiar", ds: ["medir", "ocultar"], da: ["dudar", "correr"] },
  { p: "Zozobra", sig: "angustia, inquietud, desasosiego", sin: "desasosiego", ant: "calma", ds: ["sonido", "brillo"], da: ["sombra", "ruido"] },
  { p: "Loable", sig: "digno de elogio", sin: "encomiable", ant: "reprochable", ds: ["amargo", "frío"], da: ["húmedo", "salado"] },
];

// ANALOGIAS: formato "A es a B como C es a ___".
//   a, b, c = palabras dadas (en mayúsculas)   d = respuesta correcta
//   opts    = 3 distractores                   rel = tipo de relación
const ANALOGIAS = [
  { a: "MÉDICO", b: "HOSPITAL", c: "MAESTRO", d: "escuela", opts: ["alumno", "libro", "pizarrón"], rel: "lugar de trabajo" },
  { a: "PINTOR", b: "PINCEL", c: "ESCRITOR", d: "pluma", opts: ["lienzo", "novela", "tinta"], rel: "herramienta de trabajo" },
  { a: "PÉTALO", b: "FLOR", c: "PÁGINA", d: "libro", opts: ["letra", "lectura", "biblioteca"], rel: "parte y todo" },
  { a: "ABEJA", b: "MIEL", c: "VACA", d: "leche", opts: ["granja", "pasto", "queso"], rel: "animal y lo que produce" },
  { a: "PERRO", b: "MAMÍFERO", c: "ÁGUILA", d: "ave", opts: ["nido", "vuelo", "pluma"], rel: "especie y categoría" },
  { a: "FRÍO", b: "CALOR", c: "DÍA", d: "noche", opts: ["sol", "tarde", "luz"], rel: "antónimos" },
  { a: "ALEGRE", b: "CONTENTO", c: "TRISTE", d: "apenado", opts: ["llanto", "feliz", "enojo"], rel: "sinónimos" },
  { a: "CUCHILLO", b: "CORTAR", c: "LÁPIZ", d: "escribir", opts: ["papel", "borrar", "dibujo"], rel: "objeto y su función" },
  { a: "AGUA", b: "VASO", c: "DINERO", d: "cartera", opts: ["banco", "moneda", "gastar"], rel: "contenido y recipiente" },
  { a: "SILLA", b: "MADERA", c: "VENTANA", d: "vidrio", opts: ["casa", "sentarse", "marco"], rel: "objeto y su material" },
  { a: "PALOMA", b: "PAZ", c: "CORAZÓN", d: "amor", opts: ["sangre", "ave", "vida"], rel: "símbolo y lo que representa" },
  { a: "SEMILLA", b: "ÁRBOL", c: "NIÑO", d: "adulto", opts: ["jardín", "fruto", "juguete"], rel: "etapa inicial y final" },
  { a: "HAMBRE", b: "COMER", c: "SED", d: "beber", opts: ["agua", "saciar", "comida"], rel: "necesidad y acción que la satisface" },
  { a: "LIBRO", b: "AUTOR", c: "CUADRO", d: "pintor", opts: ["museo", "lienzo", "color"], rel: "obra y su creador" },
  { a: "ABEJA", b: "PANAL", c: "AVE", d: "nido", opts: ["árbol", "huevo", "jaula"], rel: "animal y su vivienda" },
  { a: "SOL", b: "DÍA", c: "LUNA", d: "noche", opts: ["estrella", "cielo", "oscuridad"], rel: "astro y momento que lo acompaña" },
  { a: "ZAPATO", b: "PIE", c: "GUANTE", d: "mano", opts: ["dedo", "cuero", "calcetín"], rel: "prenda y parte del cuerpo" },
  { a: "TERMÓMETRO", b: "TEMPERATURA", c: "RELOJ", d: "tiempo", opts: ["hora", "calor", "número"], rel: "instrumento y lo que mide" },
  { a: "POETA", b: "VERSO", c: "MÚSICO", d: "nota", opts: ["canción", "poema", "instrumento"], rel: "creador y unidad que produce" },
  { a: "LLUVIA", b: "NUBE", c: "FRUTO", d: "árbol", opts: ["campo", "hoja", "jardín"], rel: "elemento y de dónde proviene" },
  { a: "MÉDICO", b: "ENFERMEDAD", c: "BOMBERO", d: "incendio", opts: ["hospital", "manguera", "humo"], rel: "profesión y lo que combate" },
  { a: "ORUGA", b: "MARIPOSA", c: "RENACUAJO", d: "rana", opts: ["charco", "salto", "insecto"], rel: "etapa previa y adulto (metamorfosis)" },
  { a: "REY", b: "CORONA", c: "SOLDADO", d: "casco", opts: ["trono", "guerra", "escudo"], rel: "persona y prenda distintiva" },
  { a: "PEZ", b: "AGUA", c: "PÁJARO", d: "aire", opts: ["nido", "vuelo", "mar"], rel: "ser vivo y su medio" },
  { a: "PANADERO", b: "PAN", c: "SASTRE", d: "traje", opts: ["tela", "horno", "aguja"], rel: "oficio y lo que elabora" },
  { a: "JUEZ", b: "JUSTICIA", c: "POLICÍA", d: "orden", opts: ["cárcel", "robo", "placa"], rel: "autoridad y lo que vela" },
  { a: "RAÍZ", b: "PLANTA", c: "CIMIENTO", d: "edificio", opts: ["hoja", "ladrillo", "altura"], rel: "base que sostiene" },
  { a: "SORDO", b: "OÍR", c: "CIEGO", d: "ver", opts: ["ojo", "oreja", "hablar"], rel: "limitación y sentido afectado" },
  { a: "AVARO", b: "DINERO", c: "GLOTÓN", d: "comida", opts: ["hambre", "riqueza", "plato"], rel: "persona y su obsesión" },
  { a: "MANADA", b: "LOBOS", c: "CARDUMEN", d: "peces", opts: ["rebaño", "mar", "jauría"], rel: "conjunto y los individuos" },
  { a: "AGUDO", b: "GRAVE", c: "CLARO", d: "oscuro", opts: ["sonido", "color", "brillo"], rel: "antónimos" },
  { a: "VELOZ", b: "LENTO", c: "GIGANTE", d: "enano", opts: ["rápido", "grande", "tortuga"], rel: "antónimos" },
  { a: "PLUMA", b: "AVE", c: "ESCAMA", d: "pez", opts: ["agua", "vuelo", "piel"], rel: "recubrimiento y animal" },
  { a: "ESTRELLA", b: "CONSTELACIÓN", c: "SOLDADO", d: "ejército", opts: ["cielo", "guerra", "general"], rel: "unidad y conjunto al que pertenece" },
  { a: "CARTA", b: "SOBRE", c: "ESPADA", d: "vaina", opts: ["papel", "filo", "guerrero"], rel: "objeto y su funda" },
  { a: "HERIDA", b: "CICATRIZ", c: "FUEGO", d: "ceniza", opts: ["dolor", "llama", "humo"], rel: "causa y rastro que deja" },
  { a: "ARQUITECTO", b: "PLANO", c: "COMPOSITOR", d: "partitura", opts: ["edificio", "música", "orquesta"], rel: "creador y documento con que diseña" },
  { a: "UVA", b: "VINO", c: "TRIGO", d: "harina", opts: ["pan", "viña", "campo"], rel: "materia prima y producto" },
  { a: "PINTOR", b: "CUADRO", c: "ESCULTOR", d: "estatua", opts: ["mármol", "museo", "pincel"], rel: "artista y obra que crea" },
  { a: "RUEDA", b: "AUTO", c: "ALA", d: "avión", opts: ["motor", "vuelo", "cielo"], rel: "parte que permite el movimiento" },
  { a: "SÍLABA", b: "PALABRA", c: "PALABRA", d: "oración", opts: ["letra", "texto", "sonido"], rel: "unidad menor dentro de una mayor" },
  { a: "HILO", b: "TELA", c: "LADRILLO", d: "muro", opts: ["costura", "casa", "cemento"], rel: "componente y lo que forma" },
  { a: "TIMÓN", b: "BARCO", c: "VOLANTE", d: "auto", opts: ["mar", "rueda", "motor"], rel: "pieza con que se dirige" },
  { a: "FRÍO", b: "ABRIGO", c: "LLUVIA", d: "paraguas", opts: ["sol", "calor", "nieve"], rel: "fenómeno y lo que protege de él" },
  { a: "LEÓN", b: "RUGIDO", c: "PERRO", d: "ladrido", opts: ["maullido", "gato", "jauría"], rel: "animal y sonido que emite" },
  { a: "ENFERMO", b: "MEDICINA", c: "HAMBRIENTO", d: "alimento", opts: ["hospital", "sed", "ayuno"], rel: "estado y lo que lo remedia" },
  { a: "PINTOR", b: "COLOR", c: "ESCRITOR", d: "palabra", opts: ["pincel", "libro", "tinta"], rel: "creador y materia con que trabaja" },
  { a: "CAPULLO", b: "MARIPOSA", c: "HUEVO", d: "ave", opts: ["nido", "vuelo", "oruga"], rel: "origen y ser que nace de él" },
  { a: "DÍA", b: "SEMANA", c: "MES", d: "año", opts: ["hora", "calendario", "semana"], rel: "unidad de tiempo menor y mayor" },
  { a: "DEDO", b: "MANO", c: "HOJA", d: "árbol", opts: ["rama", "bosque", "verde"], rel: "parte y todo" },
];

// FUNCIONES: fragmento de texto e identificación de la función de la lengua que
// predomina (modelo de Jakobson). t = texto, fn = función correcta,
// d = 3 distractores (otras funciones), e = explicación.
const FUNCIONES = [
  { t: "El agua hierve a 100 °C al nivel del mar.", fn: "Referencial", d: ["Emotiva", "Metalingüística", "Apelativa"], e: "Transmite un hecho objetivo y verificable, sin opinión ni emoción: el mensaje se centra en la realidad (el referente)." },
  { t: "¡Ay, qué felicidad tan grande siento al verte de nuevo!", fn: "Emotiva", d: ["Apelativa", "Poética", "Referencial"], e: "Expresa los sentimientos del emisor; la interjección y la exclamación delatan la función emotiva o expresiva." },
  { t: "Cierra la puerta y siéntate, por favor.", fn: "Apelativa", d: ["Emotiva", "Fática", "Referencial"], e: "Busca provocar una conducta en el receptor; los verbos en imperativo son la marca de la función apelativa o conativa." },
  { t: "¿Bueno? ¿Me escuchas? ¿Sigues ahí?", fn: "Fática", d: ["Apelativa", "Emotiva", "Metalingüística"], e: "Sirve para abrir y verificar el canal de comunicación, no para dar información: es la función fática o de contacto." },
  { t: "La palabra “casa” es un sustantivo común y femenino.", fn: "Metalingüística", d: ["Referencial", "Poética", "Apelativa"], e: "El mensaje usa la lengua para hablar de la lengua misma (su gramática): función metalingüística." },
  { t: "Tus ojos son dos luceros que iluminan mi camino.", fn: "Poética", d: ["Emotiva", "Referencial", "Apelativa"], e: "Lo importante es la forma y la belleza del mensaje; la metáfora revela la función poética o estética." },
  { t: "La Revolución Mexicana inició en 1910.", fn: "Referencial", d: ["Poética", "Emotiva", "Metalingüística"], e: "Informa un dato histórico objetivo, centrado en el referente: función referencial." },
  { t: "¡Compra ahora y llévate un 50% de descuento!", fn: "Apelativa", d: ["Emotiva", "Referencial", "Fática"], e: "Es publicidad: pretende influir en el receptor para que actúe; predomina la función apelativa." },
  { t: "Me siento devastado; no sé cómo seguir adelante.", fn: "Emotiva", d: ["Referencial", "Apelativa", "Poética"], e: "El emisor manifiesta su estado de ánimo: función emotiva o expresiva." },
  { t: "Ajá… sí… claro… te escucho, sigue.", fn: "Fática", d: ["Emotiva", "Apelativa", "Referencial"], e: "Son muletillas que solo mantienen abierto el contacto, sin aportar contenido: función fática." },
  { t: "El verbo “haber” se escribe con hache y con be.", fn: "Metalingüística", d: ["Referencial", "Apelativa", "Poética"], e: "Explica una regla de la propia lengua (ortografía): función metalingüística." },
  { t: "En el silencio de la noche, la luna llora estrellas de plata.", fn: "Poética", d: ["Emotiva", "Referencial", "Fática"], e: "Emplea imágenes y personificación para embellecer el mensaje: función poética." },
  { t: "El estadio tiene capacidad para ochenta mil espectadores.", fn: "Referencial", d: ["Emotiva", "Apelativa", "Poética"], e: "Da un dato cuantificable y objetivo: función referencial." },
  { t: "No olvides lavarte las manos antes de comer.", fn: "Apelativa", d: ["Referencial", "Emotiva", "Metalingüística"], e: "Es una recomendación dirigida al receptor para que haga algo: función apelativa." },
  { t: "¡Qué miedo siento cuando truena tan fuerte!", fn: "Emotiva", d: ["Apelativa", "Referencial", "Poética"], e: "Comunica una emoción del emisor (el miedo): función emotiva." },
  { t: "¿Aló? ¿Hola? Creo que se cortó la llamada.", fn: "Fática", d: ["Apelativa", "Emotiva", "Metalingüística"], e: "Intenta restablecer y comprobar el canal de comunicación: función fática." },
  { t: "“Sinónimo” significa palabra de significado parecido.", fn: "Metalingüística", d: ["Referencial", "Apelativa", "Poética"], e: "Define el significado de un término de la lengua: función metalingüística." },
  { t: "Caminante, no hay camino, se hace camino al andar.", fn: "Poética", d: ["Apelativa", "Emotiva", "Referencial"], e: "Verso con repetición y ritmo cuidado; el centro es la forma del mensaje: función poética." },
  { t: "México colinda al norte con Estados Unidos.", fn: "Referencial", d: ["Poética", "Emotiva", "Apelativa"], e: "Aporta información geográfica objetiva: función referencial." },
  { t: "Vota por el cambio este domingo.", fn: "Apelativa", d: ["Referencial", "Emotiva", "Fática"], e: "Es un mensaje persuasivo que busca mover al receptor a actuar: función apelativa." },
];

// ── Constructores de slides ───────────────────────────────────────────────────

function slidesSinonimos() {
  return PALABRAS.map((w, i) => ({
    id: `sin-${i + 1}`,
    tipo: "ejercicio",
    etiqueta: `Sinónimos · ${i + 1} / ${PALABRAS.length}`,
    pregunta: `Elige el SINÓNIMO de: ${w.p.toUpperCase()}`,
    opciones: [w.sin, w.ant, w.ds[0], w.ds[1]],
    correcta: 0,
    explicacion: `${w.p}: ${w.sig}. Su sinónimo es «${w.sin}».`,
  }));
}

function slidesAntonimos() {
  return PALABRAS.map((w, i) => ({
    id: `ant-${i + 1}`,
    tipo: "ejercicio",
    etiqueta: `Antónimos · ${i + 1} / ${PALABRAS.length}`,
    pregunta: `Elige el ANTÓNIMO de: ${w.p.toUpperCase()}`,
    opciones: [w.ant, w.sin, w.da[0], w.da[1]],
    correcta: 0,
    explicacion: `${w.p}: ${w.sig}. Su antónimo es «${w.ant}».`,
  }));
}

function slidesAnalogias() {
  return ANALOGIAS.map((x, i) => ({
    id: `ana-${i + 1}`,
    tipo: "ejercicio",
    etiqueta: `Analogías · ${i + 1} / ${ANALOGIAS.length}`,
    pregunta: `${x.a} es a ${x.b} como ${x.c} es a ___`,
    opciones: [x.d, x.opts[0], x.opts[1], x.opts[2]],
    correcta: 0,
    explicacion: `Relación de ${x.rel}: «${x.a.toLowerCase()}» es a «${x.b.toLowerCase()}» como «${x.c.toLowerCase()}» es a «${x.d}».`,
  }));
}

function slidesFunciones() {
  return FUNCIONES.map((x, i) => ({
    id: `fun-${i + 1}`,
    tipo: "ejercicio",
    etiqueta: `Funciones de la lengua · ${i + 1} / ${FUNCIONES.length}`,
    pregunta: `¿Qué función de la lengua predomina en el siguiente fragmento?  «${x.t}»`,
    opciones: [x.fn, x.d[0], x.d[1], x.d[2]],
    correcta: 0,
    explicacion: `Función ${x.fn.toLowerCase()}. ${x.e}`,
  }));
}

// ── Slides de apoyo ───────────────────────────────────────────────────────────

const PORTADA = {
  id: "portada",
  tipo: "portada",
  titulo: "Vocabulario y Funciones de la Lengua",
  subtitulo: "Sinónimos, antónimos, analogías y funciones de la lengua · estilo UNAM",
  etiqueta: "Español · Comprensión léxica",
};

const TIP_SINONIMOS = {
  id: "tip-sinonimos",
  tipo: "definicion",
  titulo: "Sinónimos",
  simbolo: "\\approx",
  cuerpo: "Un sinónimo es una palabra que significa lo mismo o algo muy parecido. Para resolver, sustituye la palabra por cada opción y conserva el sentido de la frase.",
  condiciones: [
    { texto: "Estrategia", math: "\\text{sustituye y verifica el sentido}" },
    { texto: "Ejemplo", math: "\\text{feliz} \\approx \\text{contento}" },
  ],
};

const TIP_ANTONIMOS = {
  id: "tip-antonimos",
  tipo: "definicion",
  titulo: "Antónimos",
  simbolo: "\\neq",
  cuerpo: "Un antónimo es una palabra de significado opuesto. Cuidado con la trampa: entre las opciones suele aparecer el sinónimo, que NO es la respuesta. Busca el contrario exacto.",
  condiciones: [
    { texto: "Estrategia", math: "\\text{busca el opuesto, no el parecido}" },
    { texto: "Ejemplo", math: "\\text{alto} \\neq \\text{bajo}" },
  ],
};

const TIP_ANALOGIAS = {
  id: "tip-analogias",
  tipo: "definicion",
  titulo: "Analogías",
  simbolo: "a : b :: c : d",
  cuerpo: "Una analogía compara dos pares que guardan la MISMA relación. Primero identifica la relación del primer par (parte-todo, oficio-herramienta, causa-efecto...) y aplícala al segundo.",
  condiciones: [
    { texto: "Estrategia", math: "\\text{define la relación y repítela}" },
    { texto: "Ejemplo", math: "\\text{ave}:\\text{nido}::\\text{abeja}:\\text{panal}" },
  ],
};

const TIP_FUNCIONES = {
  id: "tip-funciones",
  tipo: "definicion",
  titulo: "Funciones de la lengua",
  simbolo: "\\text{emisor} \\;\\to\\; \\text{mensaje} \\;\\to\\; \\text{receptor}",
  cuerpo: "Según el elemento de la comunicación que predomine, el mensaje cumple una función distinta: referencial (informa un hecho), emotiva (expresa sentimientos del emisor), apelativa (ordena o convence al receptor), fática (abre o mantiene el contacto), metalingüística (habla de la lengua misma) y poética (cuida la forma y la belleza).",
  condiciones: [
    { texto: "Pregúntate", math: "\\text{dato, emocion, orden o forma}" },
    { texto: "Ejemplo", math: "\\text{cierra la puerta} \\;\\to\\; \\text{apelativa}" },
  ],
};

const CIERRE = {
  id: "cierre",
  tipo: "resumen",
  titulo: "Para seguir practicando",
  etiqueta: "Consejos finales",
  puntos: [
    { titulo: "Lee mucho", texto: "el vocabulario se gana leyendo; anota las palabras nuevas y su significado" },
    { titulo: "Raíces y prefijos", texto: "in-, des-, a- suelen negar; reconocerlos ayuda con los antónimos" },
    { titulo: "Sustituye", texto: "en sinónimos, cambia la palabra por la opción y revisa que la frase siga igual" },
    { titulo: "Define la relación", texto: "en analogías, nombra la relación del primer par antes de ver las opciones" },
    { titulo: "Cuidado con la trampa", texto: "el sinónimo aparece como distractor en los antónimos (y viceversa)" },
    { titulo: "Por descarte", texto: "elimina las opciones claramente ajenas y decide entre las dos finalistas" },
  ],
};

export const PRESENTACION = {
  id: "vocabulario-unam",
  titulo: "Vocabulario y Funciones de la Lengua",
  materia: "Español",
  subtema: "Vocabulario y funciones de la lengua",
  slides: [
    PORTADA,
    TIP_SINONIMOS,
    ...slidesSinonimos(),
    TIP_ANTONIMOS,
    ...slidesAntonimos(),
    TIP_ANALOGIAS,
    ...slidesAnalogias(),
    TIP_FUNCIONES,
    ...slidesFunciones(),
    CIERRE,
  ],
};
