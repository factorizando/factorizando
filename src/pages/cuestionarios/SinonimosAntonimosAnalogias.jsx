import { useState, useEffect } from "react";

const C = {
  bg:      "#0e0f11",
  surface: "#13151a",
  border:  "#252830",
  blue:    "#3b9eff",
  gold:    "#f59e0b",
  purple:  "#a78bfa",
  teal:    "#34d399",
  orange:  "#f97316",
  crimson: "#f43f5e",
  text:    "#e8eaf0",
  muted:   "#5a6070",
  dim:     "#8a9ab8",
};

const questions = [
  // ══════════════════════════════════════════════════════════════════════════
  //  BLOQUE 0 · SINÓNIMOS  (1 – 35)
  // ══════════════════════════════════════════════════════════════════════════
  { id: 1,  block: 0, q: "Selecciona el sinónimo de ACÉRRIMO:", opts: ["Suave","Fervoroso","Indiferente","Veloz"], ans: "Fervoroso", exp: "'Acérrimo' significa muy intenso o extremado en sus opiniones. Su sinónimo más cercano es 'fervoroso'." },
  { id: 2,  block: 0, q: "Selecciona el sinónimo de TÁCITO:", opts: ["Ruidoso","Explícito","Implícito","Evidente"], ans: "Implícito", exp: "'Tácito' es lo que se da por entendido sin expresarse, igual que 'implícito'." },
  { id: 3,  block: 0, q: "Selecciona el sinónimo de EFÍMERO:", opts: ["Eterno","Fugaz","Sólido","Permanente"], ans: "Fugaz", exp: "'Efímero' y 'fugaz' comparten el significado de aquello que dura muy poco tiempo." },
  { id: 4,  block: 0, q: "Selecciona el sinónimo de PROBO:", opts: ["Corrupto","Pérfido","Íntegro","Astuto"], ans: "Íntegro", exp: "'Probo' describe a quien es honrado y de conducta irreprochable, al igual que 'íntegro'." },
  { id: 5,  block: 0, q: "Selecciona el sinónimo de MERIDIANO:", opts: ["Oscuro","Nocturno","Claro","Confuso"], ans: "Claro", exp: "'Meridiano' se usa para describir algo completamente claro, evidente y sin ambigüedad." },
  { id: 6,  block: 0, q: "Selecciona el sinónimo de ESCUETO:", opts: ["Extenso","Conciso","Detallado","Amplio"], ans: "Conciso", exp: "'Escueto' significa expresado con brevedad y sin adornos, igual que 'conciso'." },
  { id: 7,  block: 0, q: "Selecciona el sinónimo de PUERIL:", opts: ["Maduro","Adulto","Infantil","Sereno"], ans: "Infantil", exp: "'Pueril' proviene del latín 'puer' (niño) y se aplica a lo propio de un niño o ingenuo." },
  { id: 8,  block: 0, q: "Selecciona el sinónimo de OBTUSO:", opts: ["Agudo","Perspicaz","Torpe","Veloz"], ans: "Torpe", exp: "'Obtuso', aplicado a personas, significa tardo en comprender, sinónimo de 'torpe'." },
  { id: 9,  block: 0, q: "Selecciona el sinónimo de LÓBREGO:", opts: ["Luminoso","Alegre","Tenebroso","Colorido"], ans: "Tenebroso", exp: "'Lóbrego' y 'tenebroso' describen un lugar o ambiente oscuro, triste y sombrío." },
  { id: 10, block: 0, q: "Selecciona el sinónimo de PROLIJO:", opts: ["Breve","Minucioso","Rápido","Impreciso"], ans: "Minucioso", exp: "'Prolijo' refiere a quien se extiende demasiado en detalles; es sinónimo de 'minucioso'." },
  { id: 11, block: 0, q: "Selecciona el sinónimo de ATÁVICO:", opts: ["Moderno","Ancestral","Futuro","Novedoso"], ans: "Ancestral", exp: "'Atávico' alude a la reaparición de rasgos de antepasados remotos; equivale a 'ancestral'." },
  { id: 12, block: 0, q: "Selecciona el sinónimo de FÚTIL:", opts: ["Importante","Grave","Trivial","Valioso"], ans: "Trivial", exp: "'Fútil' describe algo de escasa importancia o valor, igual que 'trivial'." },
  { id: 13, block: 0, q: "Selecciona el sinónimo de PARSIMONIA:", opts: ["Prisa","Lentitud","Calma","Agitación"], ans: "Calma", exp: "'Parsimonia' es lentitud y tranquilidad al hacer algo; su mejor sinónimo es 'calma'." },
  { id: 14, block: 0, q: "Selecciona el sinónimo de VETUSTO:", opts: ["Nuevo","Moderno","Antiguo","Joven"], ans: "Antiguo", exp: "'Vetusto' describe algo extremadamente viejo o antiguo." },
  { id: 15, block: 0, q: "Selecciona el sinónimo de DIÁFANO:", opts: ["Turbio","Opaco","Transparente","Sólido"], ans: "Transparente", exp: "'Diáfano' significa transparente o que deja pasar la luz con facilidad." },
  { id: 16, block: 0, q: "Selecciona el sinónimo de CÁNDIDO:", opts: ["Malicioso","Ingenuo","Astuto","Suspicaz"], ans: "Ingenuo", exp: "'Cándido' y 'ingenuo' refieren a quien carece de malicia o astucia." },
  { id: 17, block: 0, q: "Selecciona el sinónimo de ACUCIOSO:", opts: ["Perezoso","Diligente","Lento","Descuidado"], ans: "Diligente", exp: "'Acucioso' describe a quien trabaja con cuidado y prontitud, al igual que 'diligente'." },
  { id: 18, block: 0, q: "Selecciona el sinónimo de MAGNÁNIMO:", opts: ["Mezquino","Generoso","Tacaño","Ruin"], ans: "Generoso", exp: "'Magnánimo' es quien actúa con grandeza de ánimo y generosidad." },
  { id: 19, block: 0, q: "Selecciona el sinónimo de FRUGAL:", opts: ["Derrochador","Austero","Lujoso","Excesivo"], ans: "Austero", exp: "'Frugal' y 'austero' comparten el significado de moderado y sin excesos." },
  { id: 20, block: 0, q: "Selecciona el sinónimo de IGNOMINIOSO:", opts: ["Honorable","Vergonzoso","Glorioso","Digno"], ans: "Vergonzoso", exp: "'Ignominioso' es aquello que causa deshonra y vergüenza pública." },
  { id: 21, block: 0, q: "Selecciona el sinónimo de CONTUMAZ:", opts: ["Dócil","Obediente","Terco","Flexible"], ans: "Terco", exp: "'Contumaz' y 'terco' se aplican a quien persiste obstinadamente en un error o actitud." },
  { id: 22, block: 0, q: "Selecciona el sinónimo de PRÍSTINO:", opts: ["Contaminado","Original","Adulterado","Moderno"], ans: "Original", exp: "'Prístino' hace referencia al estado puro, primigenio y original de algo." },
  { id: 23, block: 0, q: "Selecciona el sinónimo de PÉRFIDO:", opts: ["Leal","Traidor","Honesto","Fiel"], ans: "Traidor", exp: "'Pérfido' se aplica a quien traiciona la confianza depositada en él." },
  { id: 24, block: 0, q: "Selecciona el sinónimo de ELOCUENTE:", opts: ["Torpe","Mudo","Persuasivo","Confuso"], ans: "Persuasivo", exp: "'Elocuente' es quien expresa con facilidad sus ideas de forma convincente y persuasiva." },
  { id: 25, block: 0, q: "Selecciona el sinónimo de NEFASTO:", opts: ["Favorable","Benéfico","Funesto","Auspicioso"], ans: "Funesto", exp: "'Nefasto' y 'funesto' describen algo de muy malos augurios o con consecuencias dañinas." },
  { id: 26, block: 0, q: "Selecciona el sinónimo de LETARGO:", opts: ["Actividad","Energía","Sopor","Agilidad"], ans: "Sopor", exp: "'Letargo' es un estado de sopor profundo o de inactividad prolongada." },
  { id: 27, block: 0, q: "Selecciona el sinónimo de EXECRABLE:", opts: ["Admirable","Detestable","Agradable","Neutral"], ans: "Detestable", exp: "'Execrable' y 'detestable' se aplican a lo que merece ser rechazado con indignación." },
  { id: 28, block: 0, q: "Selecciona el sinónimo de UFANO:", opts: ["Humilde","Orgulloso","Avergonzado","Tímido"], ans: "Orgulloso", exp: "'Ufano' describe a quien está satisfecho de sí mismo y lo demuestra con orgullo." },
  { id: 29, block: 0, q: "Selecciona el sinónimo de SERÁFICO:", opts: ["Demoníaco","Apacible","Inquieto","Agresivo"], ans: "Apacible", exp: "'Seráfico' describe un gesto o actitud de extrema paz y dulzura, equivalente a 'apacible'." },
  { id: 30, block: 0, q: "Selecciona el sinónimo de ACENDRADO:", opts: ["Impuro","Manchado","Puro","Mezclado"], ans: "Puro", exp: "'Acendrado' describe sentimientos o cualidades purificados, sin mezcla ni defecto." },
  { id: 31, block: 0, q: "Selecciona el sinónimo de TURBULENTO:", opts: ["Sereno","Tranquilo","Agitado","Pacífico"], ans: "Agitado", exp: "'Turbulento' y 'agitado' se aplican a situaciones o personas revueltas y conflictivas." },
  { id: 32, block: 0, q: "Selecciona el sinónimo de BENIGNO:", opts: ["Maligno","Severo","Bondadoso","Cruel"], ans: "Bondadoso", exp: "'Benigno' es quien o lo que es afable y bondadoso." },
  { id: 33, block: 0, q: "Selecciona el sinónimo de ÍNFIMO:", opts: ["Elevado","Mínimo","Gigantesco","Moderado"], ans: "Mínimo", exp: "'Ínfimo' significa lo más bajo o mínimo en grado o cantidad." },
  { id: 34, block: 0, q: "Selecciona el sinónimo de ESCABULLIRSE:", opts: ["Acercarse","Permanecer","Escaparse","Detenerse"], ans: "Escaparse", exp: "'Escabullirse' significa escaparse o desaparecer hábilmente de un lugar o situación." },
  { id: 35, block: 0, q: "Selecciona el sinónimo de FEBRICITANTE:", opts: ["Saludable","Tranquilo","Calenturiento","Frío"], ans: "Calenturiento", exp: "'Febricitante' y 'calenturiento' describen a quien padece fiebre o un estado de excitación febril." },

  // ══════════════════════════════════════════════════════════════════════════
  //  BLOQUE 1 · ANTÓNIMOS  (36 – 70)
  // ══════════════════════════════════════════════════════════════════════════
  { id: 36, block: 1, q: "Selecciona el antónimo de PRODIGALIDAD:", opts: ["Generosidad","Derroche","Avaricia","Abundancia"], ans: "Avaricia", exp: "La 'prodigalidad' es la tendencia a gastar en exceso; su contrario es la 'avaricia', el apego excesivo a los bienes." },
  { id: 37, block: 1, q: "Selecciona el antónimo de TERSURA:", opts: ["Suavidad","Aspereza","Finura","Lisura"], ans: "Aspereza", exp: "'Tersura' describe una superficie lisa y suave; su antónimo es 'aspereza', que denota rugosidad." },
  { id: 38, block: 1, q: "Selecciona el antónimo de ALTRUISMO:", opts: ["Generosidad","Filantropía","Egoísmo","Bondad"], ans: "Egoísmo", exp: "El 'altruismo' es la preocupación por el bien ajeno; lo opuesto es el 'egoísmo', centrado en el propio beneficio." },
  { id: 39, block: 1, q: "Selecciona el antónimo de FORTALEZA:", opts: ["Vigor","Firmeza","Debilidad","Resistencia"], ans: "Debilidad", exp: "'Fortaleza' implica vigor físico o moral; su antónimo directo es 'debilidad'." },
  { id: 40, block: 1, q: "Selecciona el antónimo de OPULENCIA:", opts: ["Riqueza","Lujo","Miseria","Abundancia"], ans: "Miseria", exp: "'Opulencia' es la abundancia extrema de riqueza; 'miseria' es su polo opuesto." },
  { id: 41, block: 1, q: "Selecciona el antónimo de PARSIMONIA:", opts: ["Lentitud","Calma","Precipitación","Moderación"], ans: "Precipitación", exp: "'Parsimonia' es calma y lentitud en actuar; 'precipitación' denota prisa excesiva e irreflexión." },
  { id: 42, block: 1, q: "Selecciona el antónimo de VERACIDAD:", opts: ["Honestidad","Falsedad","Sinceridad","Precisión"], ans: "Falsedad", exp: "'Veracidad' es la cualidad de decir la verdad; 'falsedad' es su antónimo directo." },
  { id: 43, block: 1, q: "Selecciona el antónimo de DILIGENCIA:", opts: ["Actividad","Eficacia","Pereza","Cuidado"], ans: "Pereza", exp: "'Diligencia' es el cuidado y actividad en hacer algo; 'pereza' es su opuesto." },
  { id: 44, block: 1, q: "Selecciona el antónimo de JÚBILO:", opts: ["Regocijo","Tristeza","Celebración","Alborozo"], ans: "Tristeza", exp: "'Júbilo' es alegría intensa y expansiva; 'tristeza' es el estado anímico contrario." },
  { id: 45, block: 1, q: "Selecciona el antónimo de INSOLENCIA:", opts: ["Atrevimiento","Descaro","Humildad","Irreverencia"], ans: "Humildad", exp: "'Insolencia' es el atrevimiento y falta de respeto; 'humildad' es su antónimo más preciso." },
  { id: 46, block: 1, q: "Selecciona el antónimo de LAXITUD:", opts: ["Debilidad","Flojedad","Rigidez","Relajamiento"], ans: "Rigidez", exp: "'Laxitud' implica relajación y falta de tensión; 'rigidez' es justamente lo opuesto." },
  { id: 47, block: 1, q: "Selecciona el antónimo de PROLIJO:", opts: ["Minucioso","Detallado","Escueto","Exhaustivo"], ans: "Escueto", exp: "'Prolijo' significa extenso y detallado en demasía; 'escueto' es breve y sin adornos." },
  { id: 48, block: 1, q: "Selecciona el antónimo de TURBIDEZ:", opts: ["Oscuridad","Opacidad","Claridad","Suciedad"], ans: "Claridad", exp: "'Turbidez' es la falta de transparencia o claridad; su antónimo es 'claridad'." },
  { id: 49, block: 1, q: "Selecciona el antónimo de MAGNÁNIMO:", opts: ["Generoso","Noble","Mezquino","Benévolo"], ans: "Mezquino", exp: "'Magnánimo' denota grandeza de ánimo y generosidad; 'mezquino' es tacaño y de miras estrechas." },
  { id: 50, block: 1, q: "Selecciona el antónimo de FRUGALIDAD:", opts: ["Austeridad","Templanza","Despilfarro","Moderación"], ans: "Despilfarro", exp: "'Frugalidad' es el uso moderado y austero de los recursos; 'despilfarro' es su antónimo." },
  { id: 51, block: 1, q: "Selecciona el antónimo de EUFORIA:", opts: ["Alegría","Entusiasmo","Depresión","Exaltación"], ans: "Depresión", exp: "'Euforia' es el estado de bienestar y ánimo exaltado; 'depresión' es su polo opuesto." },
  { id: 52, block: 1, q: "Selecciona el antónimo de LUCIDEZ:", opts: ["Claridad","Agudeza","Confusión","Perspicacia"], ans: "Confusión", exp: "'Lucidez' es la claridad mental y la capacidad de razonar bien; 'confusión' es lo contrario." },
  { id: 53, block: 1, q: "Selecciona el antónimo de CANDIDEZ:", opts: ["Ingenuidad","Malicia","Inocencia","Sencillez"], ans: "Malicia", exp: "'Candidez' es la ingenuidad y ausencia de malicia; 'malicia' es su antónimo preciso." },
  { id: 54, block: 1, q: "Selecciona el antónimo de BELICOSO:", opts: ["Agresivo","Combativo","Pacífico","Guerrero"], ans: "Pacífico", exp: "'Belicoso' es quien tiende al conflicto y la guerra; 'pacífico' es quien prefiere la paz." },
  { id: 55, block: 1, q: "Selecciona el antónimo de INDOLENCIA:", opts: ["Pereza","Apatía","Diligencia","Flojera"], ans: "Diligencia", exp: "'Indolencia' es la incapacidad de sentir dolor o la falta de interés; 'diligencia' es la acción cuidadosa y activa." },
  { id: 56, block: 1, q: "Selecciona el antónimo de PUDOR:", opts: ["Recato","Vergüenza","Descaro","Modestia"], ans: "Descaro", exp: "'Pudor' es la vergüenza o recato ante algo; 'descaro' implica total ausencia de ese sentimiento." },
  { id: 57, block: 1, q: "Selecciona el antónimo de EFÍMERO:", opts: ["Fugaz","Pasajero","Eterno","Breve"], ans: "Eterno", exp: "'Efímero' dura muy poco tiempo; 'eterno' es lo que no tiene fin ni principio." },
  { id: 58, block: 1, q: "Selecciona el antónimo de HILARIDAD:", opts: ["Diversión","Risa","Seriedad","Carcajada"], ans: "Seriedad", exp: "'Hilaridad' es el estado de risa y alegría desbordante; 'seriedad' es su antónimo." },
  { id: 59, block: 1, q: "Selecciona el antónimo de PENURIA:", opts: ["Escasez","Miseria","Abundancia","Pobreza"], ans: "Abundancia", exp: "'Penuria' es la escasez y pobreza extrema; 'abundancia' es la disposición de más de lo necesario." },
  { id: 60, block: 1, q: "Selecciona el antónimo de VOLUBLE:", opts: ["Inconstante","Variable","Firme","Inestable"], ans: "Firme", exp: "'Voluble' es inconstante y que cambia fácilmente de opinión; 'firme' implica estabilidad y convicción." },
  { id: 61, block: 1, q: "Selecciona el antónimo de LACÓNICO:", opts: ["Breve","Conciso","Verboso","Escueto"], ans: "Verboso", exp: "'Lacónico' es quien habla o escribe brevemente; 'verboso' es quien usa demasiadas palabras." },
  { id: 62, block: 1, q: "Selecciona el antónimo de PERSPICAZ:", opts: ["Sagaz","Agudo","Torpe","Astuto"], ans: "Torpe", exp: "'Perspicaz' es quien capta y comprende las cosas con agudeza; 'torpe' es su contrario." },
  { id: 63, block: 1, q: "Selecciona el antónimo de EXUBERANTE:", opts: ["Abundante","Frondoso","Escaso","Espléndido"], ans: "Escaso", exp: "'Exuberante' denota gran abundancia y vigor; 'escaso' es lo que falta o no alcanza." },
  { id: 64, block: 1, q: "Selecciona el antónimo de SERENO:", opts: ["Apacible","Tranquilo","Agitado","Calmo"], ans: "Agitado", exp: "'Sereno' implica tranquilidad y paz; 'agitado' denota movimiento, inquietud o turbación." },
  { id: 65, block: 1, q: "Selecciona el antónimo de AFLUENCIA:", opts: ["Abundancia","Flujo","Escasez","Caudal"], ans: "Escasez", exp: "'Afluencia' es la llegada abundante de personas o cosas; 'escasez' es la falta o insuficiencia." },
  { id: 66, block: 1, q: "Selecciona el antónimo de CAÓTICO:", opts: ["Desordenado","Confuso","Ordenado","Turbulento"], ans: "Ordenado", exp: "'Caótico' describe una situación sin orden ni concierto; 'ordenado' es su antónimo directo." },
  { id: 67, block: 1, q: "Selecciona el antónimo de OMINOSO:", opts: ["Amenazante","Funesto","Favorable","Siniestro"], ans: "Favorable", exp: "'Ominoso' es de muy mal agüero; 'favorable' implica que las circunstancias son propicias." },
  { id: 68, block: 1, q: "Selecciona el antónimo de ACENDRADO:", opts: ["Puro","Limpio","Impuro","Refinado"], ans: "Impuro", exp: "'Acendrado' es puro y sin mezcla; 'impuro' es lo contrario, lo que está contaminado o adulterado." },
  { id: 69, block: 1, q: "Selecciona el antónimo de PÉRFIDO:", opts: ["Traidor","Desleal","Leal","Falso"], ans: "Leal", exp: "'Pérfido' es traicionero y desleal; 'leal' es quien actúa con fidelidad y honradez." },
  { id: 70, block: 1, q: "Selecciona el antónimo de BENIGNO:", opts: ["Bondadoso","Afable","Maligno","Apacible"], ans: "Maligno", exp: "'Benigno' es amable y bondadoso; 'maligno' implica maldad e intención de causar daño." },

  // ══════════════════════════════════════════════════════════════════════════
  //  BLOQUE 2 · ANALOGÍAS  (71 – 100)
  // ══════════════════════════════════════════════════════════════════════════
  { id: 71,  block: 2, q: "PINTOR : PINCEL :: ESCRITOR : ___", opts: ["Libro","Pluma","Papel","Tinta"], ans: "Pluma", exp: "Un pintor usa un pincel como herramienta; un escritor usa una pluma. La relación es agente:herramienta." },
  { id: 72,  block: 2, q: "MÉDICO : ENFERMEDAD :: ABOGADO : ___", opts: ["Crimen","Injusticia","Ley","Tribunal"], ans: "Injusticia", exp: "El médico combate la enfermedad; el abogado combate la injusticia. Relación: profesional:problema que combate." },
  { id: 73,  block: 2, q: "AGUA : SED :: ALIMENTO : ___", opts: ["Nutrición","Hambre","Cocina","Dieta"], ans: "Hambre", exp: "El agua satisface la sed; el alimento satisface el hambre. Relación: solución:necesidad que resuelve." },
  { id: 74,  block: 2, q: "CRISÁLIDA : MARIPOSA :: RENACUAJO : ___", opts: ["Pez","Salamandra","Rana","Víbora"], ans: "Rana", exp: "La crisálida es la fase inmadura de la mariposa; el renacuajo es la fase inmadura de la rana. Relación: larva:adulto." },
  { id: 75,  block: 2, q: "SILENCIO : RUIDO :: OSCURIDAD : ___", opts: ["Noche","Sombra","Luz","Penumbra"], ans: "Luz", exp: "El silencio y el ruido son opuestos acústicos; la oscuridad y la luz son opuestos visuales. Relación de antonimia." },
  { id: 76,  block: 2, q: "ARQUITECTO : EDIFICIO :: ESCULTOR : ___", opts: ["Pintura","Museo","Estatua","Galería"], ans: "Estatua", exp: "El arquitecto crea edificios; el escultor crea estatuas. Relación: creador:obra que produce." },
  { id: 77,  block: 2, q: "CAPÍTULO : NOVELA :: ACTO : ___", opts: ["Teatro","Obra de teatro","Actor","Escenario"], ans: "Obra de teatro", exp: "El capítulo es una división de la novela; el acto es una división de la obra de teatro. Relación: parte:todo." },
  { id: 78,  block: 2, q: "HAMBRE : COMER :: SUEÑO : ___", opts: ["Soñar","Descansar","Dormir","Reposar"], ans: "Dormir", exp: "El hambre impulsa a comer; el sueño impulsa a dormir. Relación: necesidad:acción que la satisface." },
  { id: 79,  block: 2, q: "CALOR : TERMÓMETRO :: VELOCIDAD : ___", opts: ["Reloj","Velocímetro","Cronómetro","Barómetro"], ans: "Velocímetro", exp: "El termómetro mide el calor; el velocímetro mide la velocidad. Relación: magnitud:instrumento que la mide." },
  { id: 80,  block: 2, q: "LIBRO : BIBLIOTECA :: CUADRO : ___", opts: ["Marco","Pintura","Museo","Artista"], ans: "Museo", exp: "Los libros se resguardan en una biblioteca; los cuadros se resguardan en un museo. Relación: objeto:lugar donde se conserva." },
  { id: 81,  block: 2, q: "ABEJAS : COLMENA :: PÁJAROS : ___", opts: ["Nido","Vuelo","Árbol","Pluma"], ans: "Nido", exp: "Las abejas habitan en una colmena; los pájaros habitan en un nido. Relación: animal:su hábitat o morada." },
  { id: 82,  block: 2, q: "FRÍO : ABRIGO :: LLUVIA : ___", opts: ["Nube","Paraguas","Agua","Tormenta"], ans: "Paraguas", exp: "El abrigo protege del frío; el paraguas protege de la lluvia. Relación: fenómeno:objeto que protege de él." },
  { id: 83,  block: 2, q: "LUNA : SATÉLITE :: TIERRA : ___", opts: ["Estrella","Cometa","Planeta","Asteroide"], ans: "Planeta", exp: "La Luna es un satélite; la Tierra es un planeta. La relación es: objeto astral:su clasificación astronómica." },
  { id: 84,  block: 2, q: "PALABRA : ORACIÓN :: NOTA : ___", opts: ["Canción","Melodía","Piano","Armonía"], ans: "Melodía", exp: "Las palabras forman una oración; las notas musicales forman una melodía. Relación: elemento:conjunto que forma." },
  { id: 85,  block: 2, q: "HACHA : LEÑADOR :: ESCALPELO : ___", opts: ["Médico","Enfermero","Cirujano","Dentista"], ans: "Cirujano", exp: "El hacha es la herramienta del leñador; el escalpelo es la herramienta del cirujano. Relación: herramienta:quien la usa." },
  { id: 86,  block: 2, q: "MENDAZ : HONESTO :: IGNOMINIOSO : ___", opts: ["Deshonroso","Vergonzoso","Glorioso","Infame"], ans: "Glorioso", exp: "'Mendaz' (mentiroso) se opone a 'honesto'; 'ignominioso' (vergonzoso) se opone a 'glorioso'. Relación de antonimia." },
  { id: 87,  block: 2, q: "ANFIBIO : RANA :: REPTIL : ___", opts: ["Delfín","Cocodrilo","Pingüino","Ballena"], ans: "Cocodrilo", exp: "La rana es un ejemplo de anfibio; el cocodrilo es un ejemplo de reptil. Relación: clase:ejemplo que pertenece a ella." },
  { id: 88,  block: 2, q: "DIÁLOGO : PERSONAJES :: SINFONÍA : ___", opts: ["Compositores","Instrumentos","Notas","Directores"], ans: "Instrumentos", exp: "Un diálogo está ejecutado por personajes; una sinfonía está ejecutada por instrumentos. Relación: obra:sus ejecutantes." },
  { id: 89,  block: 2, q: "GENERAL : EJÉRCITO :: DIRECTOR : ___", opts: ["Película","Empresa","Orquesta","Escuela"], ans: "Orquesta", exp: "El general dirige un ejército; el director (de orquesta) dirige una orquesta. Relación: líder:grupo que conduce." },
  { id: 90,  block: 2, q: "PRÓLOGO : EPÍLOGO :: AMANECER : ___", opts: ["Mediodía","Noche","Atardecer","Crepúsculo"], ans: "Atardecer", exp: "El prólogo es el inicio de un texto; el epílogo es su final. El amanecer es el inicio del día; el atardecer, su final." },
  { id: 91,  block: 2, q: "PRODIGALIDAD : AVARO :: COBARDÍA : ___", opts: ["Miedoso","Valiente","Prudente","Tímido"], ans: "Valiente", exp: "El avaro carece de prodigalidad; el valiente carece de cobardía. Relación: cualidad ausente:persona que la posee." },
  { id: 92,  block: 2, q: "BIÓLOGO : VIDA :: GEÓLOGO : ___", opts: ["Océanos","Rocas","Tierra","Minerales"], ans: "Tierra", exp: "El biólogo estudia la vida; el geólogo estudia la Tierra (sus materiales y procesos). Relación: científico:objeto de estudio." },
  { id: 93,  block: 2, q: "CUADRADO : CUBO :: CÍRCULO : ___", opts: ["Cilindro","Cono","Esfera","Óvalo"], ans: "Esfera", exp: "El cubo es la forma tridimensional del cuadrado; la esfera es la forma tridimensional del círculo. Relación: figura 2D:su equivalente 3D." },
  { id: 94,  block: 2, q: "AMNESIA : MEMORIA :: CEGUERA : ___", opts: ["Oído","Visión","Tacto","Gusto"], ans: "Visión", exp: "La amnesia es la pérdida de memoria; la ceguera es la pérdida de la visión. Relación: privación:facultad de la que priva." },
  { id: 95,  block: 2, q: "TERMINAR : COMENZAR :: CONSTRUIR : ___", opts: ["Edificar","Crear","Demoler","Reparar"], ans: "Demoler", exp: "'Terminar' y 'comenzar' son antónimos; 'construir' y 'demoler' son antónimos. Relación de antonimia entre acciones." },
  { id: 96,  block: 2, q: "PLUMA : AVE :: ESCAMA : ___", opts: ["Serpiente","Pez","Lagarto","Tortuga"], ans: "Pez", exp: "La pluma es la cobertura cutánea característica del ave; la escama es la cobertura característica del pez. Relación: cubierta:animal." },
  { id: 97,  block: 2, q: "POETA : VERSO :: NOVELISTA : ___", opts: ["Página","Capítulo","Prosa","Párrafo"], ans: "Prosa", exp: "El poeta se expresa mediante el verso; el novelista se expresa mediante la prosa. Relación: autor:forma de escritura que emplea." },
  { id: 98,  block: 2, q: "HAMBRE : INANICIÓN :: MIEDO : ___", opts: ["Valentía","Pánico","Tristeza","Angustia"], ans: "Pánico", exp: "La inanición es el grado extremo del hambre; el pánico es el grado extremo del miedo. Relación: estado moderado:estado extremo." },
  { id: 99,  block: 2, q: "ECLIPSE : SOL :: APAGÓN : ___", opts: ["Vela","Oscuridad","Luz","Foco"], ans: "Luz", exp: "Un eclipse es la interrupción temporal de la luz solar; un apagón es la interrupción temporal de la luz eléctrica. Relación: interrupción:fuente afectada." },
  { id: 100, block: 2, q: "PÉTALO : FLOR :: ESLABÓN : ___", opts: ["Metal","Cadena","Nudo","Cuerda"], ans: "Cadena", exp: "El pétalo es la unidad que compone la flor; el eslabón es la unidad que compone una cadena. Relación: parte:todo al que pertenece." },
];

const BLOCKS = [
  { label: "Sinónimos",  color: C.blue,    range: [1,  35]  },
  { label: "Antónimos",  color: C.crimson, range: [36, 70]  },
  { label: "Analogías",  color: C.gold,    range: [71, 100] },
];

function getBlock(id) {
  return BLOCKS.find(b => id >= b.range[0] && id <= b.range[1]) || BLOCKS[0];
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function fmt(s) {
  const m = Math.floor(s / 60), sec = s % 60;
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

export default function SinonimosAntonimosAnalogias() {
  const [mode, setMode]           = useState("menu");
  const [examMode, setExamMode]   = useState(null);
  const [queue, setQueue]         = useState([]);
  const [current, setCurrent]     = useState(0);
  const [answers, setAnswers]     = useState({});
  const [confirmed, setConfirmed] = useState(false);
  const [selected, setSelected]   = useState(null);
  const [timeLeft, setTimeLeft]   = useState(0);
  const [timerOn, setTimerOn]     = useState(false);
  const [filter, setFilter]       = useState("all");

  useEffect(() => {
    if (!timerOn || timeLeft <= 0) return;
    const t = setInterval(() => setTimeLeft(p => p - 1), 1000);
    return () => clearInterval(t);
  }, [timerOn, timeLeft]);

  useEffect(() => {
    if (timeLeft <= 0 && timerOn) { setTimerOn(false); setMode("results"); }
  }, [timeLeft, timerOn]);

  const startExam = (modeKey) => {
    let qs;
    if (modeKey === "all") {
      qs = shuffle(questions);
    } else {
      const idx = parseInt(modeKey.replace("block-", ""), 10);
      qs = shuffle(questions.filter(q => q.block === idx));
    }
    qs = qs.map(q => ({ ...q, opts: shuffle(q.opts) }));
    setQueue(qs);
    setAnswers({});
    setCurrent(0);
    setSelected(null);
    setConfirmed(false);
    setTimeLeft(qs.length * 30);
    setTimerOn(true);
    setExamMode(modeKey);
    setMode("exam");
  };

  const confirmAnswer = () => {
    if (!selected) return;
    setAnswers(p => ({ ...p, [queue[current].id]: selected }));
    setConfirmed(true);
  };

  const goNext = () => {
    if (current < queue.length - 1) {
      const nid = queue[current + 1].id;
      setCurrent(c => c + 1);
      setSelected(answers[nid] || null);
      setConfirmed(!!answers[nid]);
    } else {
      setTimerOn(false);
      setMode("results");
    }
  };

  const score = Object.entries(answers).reduce((acc, [id, ans]) => {
    const q = questions.find(q => q.id === Number(id));
    return acc + (q?.ans === ans ? 1 : 0);
  }, 0);

  const timerWarning = timeLeft < 120;

  const CSS = `
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    ::-webkit-scrollbar { width: 5px; background: ${C.bg}; }
    ::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 99px; }
  `;

  // ── MENU ─────────────────────────────────────────────────────────────────
  if (mode === "menu") return (
    <div style={{ minHeight: "100vh", background: C.bg, paddingBottom: 64 }}>
      <style>{CSS}</style>

      {/* Hero */}
      <div style={{ background: C.surface, borderBottom: `1px solid ${C.border}`, padding: "44px 24px 36px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.035,
          backgroundImage: `radial-gradient(${C.blue} 1px, transparent 1px), radial-gradient(${C.gold} 1px, transparent 1px)`,
          backgroundSize: "40px 40px", backgroundPosition: "0 0, 20px 20px" }}/>
        <div style={{ position: "relative" }}>
          <span style={{ display: "inline-block", background: C.purple + "22", color: C.purple, borderRadius: 99, padding: "3px 14px", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16, fontFamily: "'DM Sans',sans-serif" }}>
            FactoRizando · Español · Universidad
          </span>
          <h1 style={{ fontSize: "clamp(22px,4.5vw,38px)", fontWeight: 700, color: C.text, letterSpacing: "-1.5px", lineHeight: 1.1, marginBottom: 12, fontFamily: "'DM Sans',sans-serif" }}>
            <span style={{ color: C.blue }}>Sinónimos</span>
            <span style={{ color: C.muted }}> · </span>
            <span style={{ color: C.crimson }}>Antónimos</span>
            <span style={{ color: C.muted }}> · </span>
            <span style={{ color: C.gold }}>Analogías</span>
          </h1>
          <p style={{ color: C.muted, fontSize: 14, maxWidth: 520, margin: "0 auto 24px", fontFamily: "'DM Sans',sans-serif" }}>
            100 reactivos · Simulador UNAM / EXANI-II · 30 s por reactivo
          </p>
          {/* Stats */}
          <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
            {[{ label: "Reactivos", val: 100 }, { label: "Bloques", val: 3 }, { label: "Tiempo (todo)", val: "50 min" }].map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 900, color: C.text, letterSpacing: "-1px", fontFamily: "'DM Sans',sans-serif" }}>{s.val}</div>
                <div style={{ fontSize: 10, color: C.muted, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, fontFamily: "'DM Sans',sans-serif" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 16px" }}>
        {/* Referencia visual de bloques */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 32 }}>
          {BLOCKS.map((bl, i) => {
            const count = bl.range[1] - bl.range[0] + 1;
            const icons = ["≡","≠","∷"];
            return (
              <div key={i} style={{ background: bl.color + "0d", border: `1px solid ${bl.color}33`, borderRadius: 12, padding: "16px 12px", textAlign: "center" }}>
                <div style={{ fontSize: 28, marginBottom: 4, color: bl.color, fontFamily: "'DM Sans',sans-serif", fontWeight: 900 }}>{icons[i]}</div>
                <div style={{ color: bl.color, fontWeight: 700, fontSize: 13, fontFamily: "'DM Sans',sans-serif" }}>{bl.label}</div>
                <div style={{ color: C.muted, fontSize: 11, marginTop: 3, fontFamily: "'DM Sans',sans-serif" }}>{count} reactivos</div>
              </div>
            );
          })}
        </div>

        {/* Examen completo */}
        <p style={{ color: C.muted, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12, fontFamily: "'DM Sans',sans-serif" }}>Examen completo</p>
        <button onClick={() => startExam("all")} style={{ width: "100%", background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "22px 16px", cursor: "pointer", textAlign: "center", marginBottom: 28, fontFamily: "'DM Sans',sans-serif", transition: "all 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = C.purple; e.currentTarget.style.background = C.purple + "11"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.surface; }}>
          <div style={{ fontSize: 26, marginBottom: 6 }}>📋</div>
          <div style={{ color: C.text, fontWeight: 700, fontSize: 15 }}>Todos los reactivos</div>
          <div style={{ color: C.muted, fontSize: 12, marginTop: 4 }}>100 reactivos en orden aleatorio · 50 min</div>
        </button>

        {/* Bloques */}
        <p style={{ color: C.muted, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12, fontFamily: "'DM Sans',sans-serif" }}>O elige un bloque</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(190px,1fr))", gap: 12 }}>
          {BLOCKS.map((bl, i) => {
            const count = bl.range[1] - bl.range[0] + 1;
            return (
              <button key={i} onClick={() => startExam(`block-${i}`)} style={{ background: C.surface, border: `1px solid ${bl.color}44`, borderRadius: 12, padding: "20px 14px", cursor: "pointer", textAlign: "center", fontFamily: "'DM Sans',sans-serif", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = bl.color + "18"; e.currentTarget.style.borderColor = bl.color; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.surface; e.currentTarget.style.borderColor = bl.color + "44"; }}>
                <div style={{ color: bl.color, fontWeight: 700, fontSize: 14, fontFamily: "'DM Sans',sans-serif" }}>{bl.label}</div>
                <div style={{ color: C.muted, fontSize: 12, marginTop: 5 }}>{count} reactivos · {Math.round(count * 0.5)} min</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  // ── RESULTS ──────────────────────────────────────────────────────────────
  if (mode === "results") {
    const total = queue.length;
    const pct   = total > 0 ? Math.round((score / total) * 100) : 0;
    const col   = pct >= 80 ? C.teal : pct >= 60 ? C.gold : C.crimson;
    const msg   = pct >= 90 ? "¡Excelente! Dominio sólido del vocabulario." : pct >= 75 ? "¡Muy bien! Repasa los conceptos que fallaste." : pct >= 50 ? "Sigue practicando, vas por buen camino." : "Necesitas reforzar el vocabulario y las relaciones lógicas.";
    const displayQs = filter === "correct" ? queue.filter(q => answers[q.id] === q.ans)
                    : filter === "wrong"   ? queue.filter(q => answers[q.id] && answers[q.id] !== q.ans)
                    : queue;

    return (
      <div style={{ minHeight: "100vh", background: C.bg, paddingBottom: 64 }}>
        <style>{CSS}</style>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "32px 16px" }}>

          {/* Botones superiores */}
          <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
            <button onClick={() => setMode("menu")} style={{ background: C.surface, color: C.dim, border: `1px solid ${C.border}`, borderRadius: 12, padding: "12px 28px", fontSize: 14, fontWeight: 600, fontFamily: "'DM Sans',sans-serif", cursor: "pointer" }}>← Menú</button>
            <button onClick={() => startExam(examMode)} style={{ background: `linear-gradient(135deg,${C.blue},${C.purple})`, color: "#fff", border: "none", borderRadius: 12, padding: "12px 28px", fontSize: 14, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", cursor: "pointer" }}>↺ Repetir</button>
          </div>

          {/* Score card */}
          <div style={{ background: C.surface, border: `2px solid ${col}`, borderRadius: 18, padding: "30px 36px", textAlign: "center", maxWidth: 380, margin: "0 auto 32px", fontFamily: "'DM Sans',sans-serif" }}>
            <div style={{ fontSize: 58, fontWeight: 900, color: col, letterSpacing: "-3px", lineHeight: 1 }}>{pct}%</div>
            <div style={{ color: C.dim, fontSize: 14, marginTop: 8 }}><span style={{ color: C.text, fontWeight: 700 }}>{score}</span> de {total} correctas</div>
            <div style={{ color: col, fontWeight: 700, fontSize: 15, marginTop: 10 }}>{msg}</div>
          </div>

          {/* Filtros */}
          <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
            {[["all", "Todas"], ["correct", `✓ Correctas (${score})`], ["wrong", `✗ Incorrectas (${total - score})`]].map(([f, label]) => (
              <button key={f} onClick={() => setFilter(f)} style={{ padding: "6px 14px", borderRadius: 99, fontSize: 12, fontWeight: 700, cursor: "pointer", border: "none", background: filter === f ? C.purple : C.surface, color: filter === f ? "#fff" : C.muted, transition: "all 0.2s", fontFamily: "'DM Sans',sans-serif" }}>{label}</button>
            ))}
          </div>

          {/* Lista de preguntas */}
          {displayQs.map(q => {
            const bl = getBlock(q.id), sel = answers[q.id];
            return (
              <div key={q.id} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "20px 24px", marginBottom: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <span style={{ background: bl.color + "1a", color: bl.color, borderRadius: 6, padding: "2px 10px", fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif" }}>{bl.label}</span>
                  <span style={{ marginLeft: "auto", color: C.muted, fontSize: 12, fontFamily: "'DM Sans',sans-serif" }}>#{q.id}</span>
                </div>
                <p style={{ color: C.text, fontSize: 14, fontWeight: 600, marginBottom: 10, lineHeight: 1.6, fontFamily: "'DM Sans',sans-serif" }}>{q.q}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 10 }}>
                  {q.opts.map(opt => {
                    const isOk = opt === q.ans, isUser = opt === sel;
                    let bg = C.bg, bd = `1px solid ${C.border}`, co = C.dim;
                    if (isOk)                { bg = C.teal + "22";    bd = `1px solid ${C.teal}`;    co = C.teal; }
                    else if (isUser && !isOk){ bg = C.crimson + "22"; bd = `1px solid ${C.crimson}`; co = C.crimson; }
                    return <div key={opt} style={{ background: bg, border: bd, color: co, borderRadius: 8, padding: "8px 12px", fontSize: 13, fontFamily: "'DM Sans',sans-serif" }}>{isOk ? "✓ " : ""}{isUser && !isOk ? "✗ " : ""}{opt}</div>;
                  })}
                </div>
                <div style={{ padding: "8px 12px", background: bl.color + "0e", borderRadius: 8, border: `1px solid ${bl.color}22` }}>
                  <span style={{ color: bl.color, fontSize: 11, fontWeight: 700, fontFamily: "'DM Sans',sans-serif" }}>💡 </span>
                  <span style={{ color: C.dim, fontSize: 12, fontFamily: "'DM Sans',sans-serif" }}>{q.exp}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ── EXAM ─────────────────────────────────────────────────────────────────
  const q    = queue[current];
  const bl   = getBlock(q.id);
  const prog = ((current + 1) / queue.length) * 100;
  const answered = Object.keys(answers).length;

  return (
    <div style={{ minHeight: "100vh", background: C.bg, paddingBottom: 64 }}>
      <style>{CSS}</style>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "24px 16px" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
          <div style={{ fontFamily: "'DM Sans',sans-serif" }}>
            <span style={{ color: C.muted, fontSize: 13 }}>Reactivo </span>
            <span style={{ color: C.text, fontWeight: 700 }}>{current + 1}</span>
            <span style={{ color: C.muted }}> / {queue.length}</span>
            <span style={{ color: C.muted, fontSize: 12, marginLeft: 10 }}>({answered} respondidos)</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: timerWarning ? C.crimson : bl.color, background: timerWarning ? C.crimson + "18" : bl.color + "18", padding: "5px 12px", borderRadius: 20, border: `1px solid ${timerWarning ? C.crimson : bl.color}55`, fontFamily: "'DM Sans',sans-serif" }}>⏱ {fmt(timeLeft)}</span>
            <button onClick={() => { setTimerOn(false); setMode("results"); }} style={{ padding: "5px 12px", background: C.crimson + "18", color: C.crimson, border: `1px solid ${C.crimson}44`, borderRadius: 20, cursor: "pointer", fontSize: 12, fontFamily: "'DM Sans',sans-serif" }}>Terminar</button>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ background: C.border, borderRadius: 99, height: 4, overflow: "hidden", marginBottom: 20 }}>
          <div style={{ height: "100%", width: `${prog}%`, background: `linear-gradient(90deg,${bl.color},${C.purple})`, transition: "width 0.3s", borderRadius: 99 }}/>
        </div>

        {/* Bloque badge */}
        <div style={{ marginBottom: 12 }}>
          <span style={{ background: bl.color + "1a", color: bl.color, borderRadius: 6, padding: "2px 10px", fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif" }}>{bl.label}</span>
          <span style={{ marginLeft: 10, color: C.muted, fontSize: 12, fontFamily: "'DM Sans',sans-serif" }}>#{q.id} / 100</span>
        </div>

        {/* Pregunta */}
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "22px 26px", marginBottom: 16 }}>
          <p style={{ color: C.text, fontSize: "clamp(15px,2.5vw,17px)", fontWeight: 600, lineHeight: 1.65, fontFamily: "'DM Sans',sans-serif", margin: 0 }}>{q.q}</p>
        </div>

        {/* Opciones */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
          {q.opts.map(opt => {
            const isSel = selected === opt, isOk = opt === q.ans;
            let bg = C.bg, bd = `1px solid ${C.border}`, co = C.dim;
            if (confirmed && isSel && isOk)  { bg = C.teal + "22";    bd = `1px solid ${C.teal}`;    co = C.teal; }
            else if (confirmed && isSel)     { bg = C.crimson + "22"; bd = `1px solid ${C.crimson}`; co = C.crimson; }
            else if (confirmed && isOk)      { bg = C.teal + "0e";    bd = `1px solid ${C.teal}55`;  co = C.teal + "99"; }
            else if (isSel)                  { bg = bl.color + "18";  bd = `1px solid ${bl.color}`;  co = bl.color; }
            return (
              <button key={opt} onClick={() => !confirmed && setSelected(opt)} style={{ background: bg, border: bd, color: co, borderRadius: 9, padding: "12px 16px", fontSize: 14, fontWeight: 500, cursor: confirmed ? "default" : "pointer", textAlign: "left", transition: "all 0.15s", outline: "none", fontFamily: "'DM Sans',sans-serif", lineHeight: 1.5 }}>
                {confirmed && isOk ? "✓ " : ""}{confirmed && isSel && !isOk ? "✗ " : ""}{opt}
              </button>
            );
          })}
        </div>

        {/* Explicación */}
        {confirmed && (
          <div style={{ background: bl.color + "0e", border: `1px solid ${bl.color}22`, borderRadius: 10, padding: "12px 16px", marginBottom: 16 }}>
            <span style={{ color: bl.color, fontSize: 12, fontWeight: 700, fontFamily: "'DM Sans',sans-serif" }}>💡 Explicación: </span>
            <span style={{ color: C.dim, fontSize: 13, fontFamily: "'DM Sans',sans-serif" }}>{q.exp}</span>
          </div>
        )}

        {/* Navegación */}
        <div style={{ display: "flex", gap: 10, justifyContent: "space-between", alignItems: "center" }}>
          <button onClick={() => { if (current > 0) { const pid = queue[current - 1].id; setCurrent(c => c - 1); setSelected(answers[pid] || null); setConfirmed(!!answers[pid]); } }} disabled={current === 0} style={{ padding: "10px 20px", background: C.surface, color: C.muted, border: `1px solid ${C.border}`, borderRadius: 10, cursor: current === 0 ? "not-allowed" : "pointer", opacity: current === 0 ? 0.4 : 1, fontSize: 14, fontFamily: "'DM Sans',sans-serif" }}>← Anterior</button>
          {!confirmed ? (
            <button onClick={confirmAnswer} disabled={!selected} style={{ padding: "10px 28px", fontSize: 14, fontWeight: 700, background: selected ? `linear-gradient(135deg,${bl.color},${C.purple})` : C.surface, color: selected ? "#fff" : C.muted, border: "none", borderRadius: 10, cursor: selected ? "pointer" : "not-allowed", boxShadow: selected ? `0 4px 20px ${bl.color}33` : "none", fontFamily: "'DM Sans',sans-serif", transition: "all 0.2s" }}>Confirmar respuesta</button>
          ) : (
            <button onClick={goNext} style={{ padding: "10px 28px", fontSize: 14, fontWeight: 700, background: `linear-gradient(135deg,${bl.color},${C.purple})`, color: "#fff", border: "none", borderRadius: 10, cursor: "pointer", boxShadow: `0 4px 20px ${bl.color}33`, fontFamily: "'DM Sans',sans-serif" }}>
              {current === queue.length - 1 ? "Ver resultados →" : "Siguiente →"}
            </button>
          )}
        </div>

        {/* Navegador de reactivos */}
        <div style={{ marginTop: 24, background: C.surface, borderRadius: 12, padding: 16, border: `1px solid ${C.border}` }}>
          <p style={{ color: C.muted, fontSize: 11, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1, fontFamily: "'DM Sans',sans-serif" }}>Navegador de reactivos</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
            {queue.map((fq, i) => {
              const fbl = getBlock(fq.id);
              const ans = answers[fq.id], isCurr = i === current;
              let bg = C.surface, co = C.muted, bdr = `1px solid ${C.border}`;
              if (isCurr)              { bg = fbl.color;       co = "#fff";     bdr = `2px solid ${fbl.color}`; }
              else if (ans === fq.ans) { bg = C.teal + "33";   co = C.teal;     bdr = `1px solid ${C.teal}55`; }
              else if (ans)            { bg = C.crimson + "33"; co = C.crimson;  bdr = `1px solid ${C.crimson}55`; }
              return (
                <button key={fq.id} onClick={() => { setCurrent(i); setSelected(answers[fq.id] || null); setConfirmed(!!answers[fq.id]); }} style={{ width: 28, height: 28, borderRadius: 6, background: bg, color: co, border: bdr, cursor: "pointer", fontSize: 11, fontWeight: isCurr ? 700 : 400, fontFamily: "'DM Sans',sans-serif" }}>{i + 1}</button>
              );
            })}
          </div>
          {/* Leyenda */}
          <div style={{ display: "flex", gap: 16, marginTop: 10, flexWrap: "wrap" }}>
            {[[C.teal + "33", C.teal, "Correcta"], [C.crimson + "33", C.crimson, "Incorrecta"], [C.surface, C.muted, "Sin contestar"]].map(([bg, co, label]) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{ width: 12, height: 12, borderRadius: 3, background: bg, border: `1px solid ${co}` }}/>
                <span style={{ color: C.muted, fontSize: 11, fontFamily: "'DM Sans',sans-serif" }}>{label}</span>
              </div>
            ))}
            {/* Bloques */}
            {BLOCKS.map(bl => (
              <div key={bl.label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{ width: 12, height: 12, borderRadius: 3, background: bl.color }}/>
                <span style={{ color: C.muted, fontSize: 11, fontFamily: "'DM Sans',sans-serif" }}>{bl.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
