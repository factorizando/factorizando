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
  // ── BLOQUE 1: Sujeto y Predicado (1–20) ──────────────────────────────────
  {
    id: 1, block: 0,
    instruction: "Identifica el sujeto y el predicado:",
    sentence: "Los antiguos manuscritos de la biblioteca fueron restaurados por expertos.",
    opts: [
      "Sujeto: Los antiguos manuscritos de la biblioteca / Predicado: fueron restaurados por expertos.",
      "Sujeto: Los antiguos manuscritos / Predicado: de la biblioteca fueron restaurados por expertos.",
      "Sujeto: expertos / Predicado: restauraron los antiguos manuscritos de la biblioteca.",
      "Sujeto: La biblioteca / Predicado: tiene manuscritos antiguos restaurados por expertos.",
    ],
    ans: "Sujeto: Los antiguos manuscritos de la biblioteca / Predicado: fueron restaurados por expertos.",
    exp: "El sujeto incluye el núcleo 'manuscritos' junto con todos sus modificadores, incluyendo 'de la biblioteca'. El resto es el predicado.",
  },
  {
    id: 2, block: 0,
    instruction: "Identifica la división correcta:",
    sentence: "Cerca del río, los jóvenes acampaban alegremente.",
    opts: [
      "Sujeto: Cerca del río / Predicado: los jóvenes acampaban alegremente.",
      "Sujeto: los jóvenes / Predicado: Cerca del río acampaban alegremente.",
      "Sujeto: acampaban / Predicado: Cerca del río los jóvenes alegremente.",
      "Sujeto: los jóvenes acampaban / Predicado: alegremente cerca del río.",
    ],
    ans: "Sujeto: los jóvenes / Predicado: Cerca del río acampaban alegremente.",
    exp: "El sujeto es 'los jóvenes'. Las circunstancias de lugar ('Cerca del río') y modo ('alegremente') forman parte del predicado aunque estén separadas.",
  },
  {
    id: 3, block: 0,
    instruction: "Identifica el sujeto y predicado:",
    sentence: "Me fascina ese nuevo videojuego de estrategia.",
    opts: [
      "Sujeto: Yo (tácito) / Predicado: Me fascina ese nuevo videojuego de estrategia.",
      "Sujeto: Me fascina / Predicado: ese nuevo videojuego de estrategia.",
      "Sujeto: ese nuevo videojuego de estrategia / Predicado: Me fascina.",
      "Sujeto: videojuego / Predicado: de estrategia me fascina ese nuevo.",
    ],
    ans: "Sujeto: ese nuevo videojuego de estrategia / Predicado: Me fascina.",
    exp: "En los verbos de afección (gustar, fascinar), la cosa que causa la emoción es el sujeto. El pronombre 'Me' es parte del predicado.",
  },
  {
    id: 4, block: 0,
    instruction: "¿Cuál es el sujeto y el predicado de esta oración?",
    sentence: "Ayer por la tarde, nosotros compramos las entradas para el concierto.",
    opts: [
      "Sujeto: Ayer por la tarde / Predicado: nosotros compramos las entradas para el concierto.",
      "Sujeto: las entradas para el concierto / Predicado: Ayer por la tarde nosotros compramos.",
      "Sujeto: nosotros / Predicado: Ayer por la tarde compramos las entradas para el concierto.",
      "Sujeto: el concierto / Predicado: Ayer por la tarde nosotros compramos las entradas.",
    ],
    ans: "Sujeto: nosotros / Predicado: Ayer por la tarde compramos las entradas para el concierto.",
    exp: "El pronombre 'nosotros' es el sujeto explícito. Todo lo demás (tiempo y objeto) pertenece al predicado.",
  },
  {
    id: 5, block: 0,
    instruction: "Identifica la división correcta:",
    sentence: "Llegaron muy cansados los atletas después de la competencia.",
    opts: [
      "Sujeto: Llegaron muy cansados / Predicado: los atletas después de la competencia.",
      "Sujeto: los atletas / Predicado: Llegaron muy cansados después de la competencia.",
      "Sujeto: la competencia / Predicado: Llegaron muy cansados los atletas después de.",
      "Sujeto: ellos (tácito) / Predicado: Llegaron muy cansados los atletas después de la competencia.",
    ],
    ans: "Sujeto: los atletas / Predicado: Llegaron muy cansados después de la competencia.",
    exp: "El sujeto puede ir al final o en medio de la oración. 'Los atletas' es el sujeto que realiza la acción.",
  },
  {
    id: 6, block: 0,
    instruction: "Encuentra el sujeto y el predicado:",
    sentence: "La tecnología moderna facilita la comunicación global.",
    opts: [
      "Sujeto: La tecnología moderna / Predicado: facilita la comunicación global.",
      "Sujeto: La tecnología / Predicado: moderna facilita la comunicación global.",
      "Sujeto: la comunicación global / Predicado: La tecnología moderna facilita.",
      "Sujeto: moderna / Predicado: La tecnología facilita la comunicación global.",
    ],
    ans: "Sujeto: La tecnología moderna / Predicado: facilita la comunicación global.",
    exp: "El adjetivo 'moderna' es un modificador directo del núcleo del sujeto, por lo que no debe separarse de 'La tecnología'.",
  },
  {
    id: 7, block: 0,
    instruction: "¿Cómo se divide esta oración?",
    sentence: "Durante el invierno, aquellos árboles pierden sus hojas.",
    opts: [
      "Sujeto: Durante el invierno / Predicado: aquellos árboles pierden sus hojas.",
      "Sujeto: aquellos árboles / Predicado: Durante el invierno pierden sus hojas.",
      "Sujeto: sus hojas / Predicado: Durante el invierno aquellos árboles pierden.",
      "Sujeto: el invierno / Predicado: Durante aquellos árboles pierden sus hojas.",
    ],
    ans: "Sujeto: aquellos árboles / Predicado: Durante el invierno pierden sus hojas.",
    exp: "'aquellos árboles' concuerda en número y persona con el verbo 'pierden'. El resto es el predicado.",
  },
  {
    id: 8, block: 0,
    instruction: "Identifica el sujeto y predicado:",
    sentence: "Un equipo de científicos descubrió una nueva especie en el Amazonas.",
    opts: [
      "Sujeto: científicos / Predicado: Un equipo descubrió una nueva especie en el Amazonas.",
      "Sujeto: Un equipo / Predicado: de científicos descubrió una nueva especie en el Amazonas.",
      "Sujeto: Un equipo de científicos / Predicado: descubrió una nueva especie en el Amazonas.",
      "Sujeto: El Amazonas / Predicado: tiene una nueva especie que descubrió un equipo de científicos.",
    ],
    ans: "Sujeto: Un equipo de científicos / Predicado: descubrió una nueva especie en el Amazonas.",
    exp: "'de científicos' es un modificador indirecto que debe ir pegado a su núcleo 'equipo' dentro del sujeto.",
  },
  {
    id: 9, block: 0,
    instruction: "¿Cuál es el análisis correcto?",
    sentence: "¿Vendrán tus primos a la fiesta de graduación?",
    opts: [
      "Sujeto: la fiesta de graduación / Predicado: ¿Vendrán tus primos?",
      "Sujeto: tú (tácito) / Predicado: ¿Vendrán tus primos a la fiesta de graduación?",
      "Sujeto: tus primos / Predicado: ¿Vendrán a la fiesta de graduación?",
      "Sujeto: Vendrán / Predicado: tus primos a la fiesta de graduación.",
    ],
    ans: "Sujeto: tus primos / Predicado: ¿Vendrán a la fiesta de graduación?",
    exp: "Incluso en oraciones interrogativas, el sujeto es quien realiza la acción ('tus primos').",
  },
  {
    id: 10, block: 0,
    instruction: "Divide correctamente:",
    sentence: "Nuestra salud depende de una dieta equilibrada.",
    opts: [
      "Sujeto: Nuestra salud / Predicado: depende de una dieta equilibrada.",
      "Sujeto: una dieta equilibrada / Predicado: depende de nuestra salud.",
      "Sujeto: salud / Predicado: Nuestra depende de una dieta equilibrada.",
      "Sujeto: nosotros (tácito) / Predicado: nuestra salud depende de una dieta equilibrada.",
    ],
    ans: "Sujeto: Nuestra salud / Predicado: depende de una dieta equilibrada.",
    exp: "'Nuestra salud' es el grupo nominal del que se afirma el predicado 'depende de una dieta equilibrada'.",
  },
  {
    id: 11, block: 0,
    instruction: "Encuentra el sujeto y predicado:",
    sentence: "El gato negro duerme tranquilamente en el sofá.",
    opts: [
      "Sujeto: El gato negro / Predicado: duerme tranquilamente en el sofá.",
      "Sujeto: El gato / Predicado: negro duerme tranquilamente en el sofá.",
      "Sujeto: el sofá / Predicado: El gato negro duerme tranquilamente en.",
      "Sujeto: duerme tranquilamente / Predicado: El gato negro en el sofá.",
    ],
    ans: "Sujeto: El gato negro / Predicado: duerme tranquilamente en el sofá.",
    exp: "El adjetivo 'negro' acompaña al núcleo 'gato' conformando el sujeto completo.",
  },
  {
    id: 12, block: 0,
    instruction: "Identifica la estructura:",
    sentence: "A mis hermanos les encantan los deportes extremos.",
    opts: [
      "Sujeto: A mis hermanos / Predicado: les encantan los deportes extremos.",
      "Sujeto: los deportes extremos / Predicado: A mis hermanos les encantan.",
      "Sujeto: hermanos / Predicado: A mis les encantan los deportes extremos.",
      "Sujeto: les encantan / Predicado: A mis hermanos los deportes extremos.",
    ],
    ans: "Sujeto: los deportes extremos / Predicado: A mis hermanos les encantan.",
    exp: "'A mis hermanos' es un complemento indirecto. Lo que genera el gusto (el sujeto) son 'los deportes extremos'.",
  },
  {
    id: 13, block: 0,
    instruction: "Analiza la oración:",
    sentence: "El fuerte viento derribó varios árboles del parque.",
    opts: [
      "Sujeto: varios árboles del parque / Predicado: El fuerte viento derribó.",
      "Sujeto: El fuerte viento / Predicado: derribó varios árboles del parque.",
      "Sujeto: viento / Predicado: El fuerte derribó varios árboles del parque.",
      "Sujeto: del parque / Predicado: El fuerte viento derribó varios árboles.",
    ],
    ans: "Sujeto: El fuerte viento / Predicado: derribó varios árboles del parque.",
    exp: "El elemento que realiza la acción de derribar es 'El fuerte viento'.",
  },
  {
    id: 14, block: 0,
    instruction: "¿Cuál es el sujeto y el predicado?",
    sentence: "Mañana saldrá temprano el tren hacia Madrid.",
    opts: [
      "Sujeto: Mañana / Predicado: saldrá temprano el tren hacia Madrid.",
      "Sujeto: el tren hacia Madrid / Predicado: Mañana saldrá temprano.",
      "Sujeto: Madrid / Predicado: Mañana saldrá temprano el tren hacia.",
      "Sujeto: temprano / Predicado: Mañana saldrá el tren hacia Madrid.",
    ],
    ans: "Sujeto: el tren hacia Madrid / Predicado: Mañana saldrá temprano.",
    exp: "El sujeto pospuesto es 'el tren hacia Madrid'. Todo lo demás indica tiempo, por lo que es predicado.",
  },
  {
    id: 15, block: 0,
    instruction: "Encuentra el sujeto y predicado:",
    sentence: "Ana y Luis compraron helados de chocolate.",
    opts: [
      "Sujeto: Ana / Predicado: y Luis compraron helados de chocolate.",
      "Sujeto: Ana y Luis / Predicado: compraron helados de chocolate.",
      "Sujeto: helados de chocolate / Predicado: Ana y Luis compraron.",
      "Sujeto: compraron helados / Predicado: Ana y Luis de chocolate.",
    ],
    ans: "Sujeto: Ana y Luis / Predicado: compraron helados de chocolate.",
    exp: "Es un sujeto compuesto por dos personas: 'Ana y Luis'.",
  },
  {
    id: 16, block: 0,
    instruction: "Divide esta oración:",
    sentence: "Ayer llovió muchísimo en toda la región.",
    opts: [
      "Sujeto: Ayer / Predicado: llovió muchísimo en toda la región.",
      "Sujeto: en toda la región / Predicado: Ayer llovió muchísimo.",
      "Sujeto: llovió / Predicado: Ayer muchísimo en toda la región.",
      "Sujeto: (Impersonal - no hay sujeto) / Predicado: Ayer llovió muchísimo en toda la región.",
    ],
    ans: "Sujeto: (Impersonal - no hay sujeto) / Predicado: Ayer llovió muchísimo en toda la región.",
    exp: "Los verbos meteorológicos (llover, nevar) forman oraciones impersonales: todo es predicado.",
  },
  {
    id: 17, block: 0,
    instruction: "Identifica la estructura:",
    sentence: "Esa enorme casa vieja parece deshabitada.",
    opts: [
      "Sujeto: Esa enorme casa vieja / Predicado: parece deshabitada.",
      "Sujeto: Esa enorme casa / Predicado: vieja parece deshabitada.",
      "Sujeto: deshabitada / Predicado: Esa enorme casa vieja parece.",
      "Sujeto: parece / Predicado: Esa enorme casa vieja deshabitada.",
    ],
    ans: "Sujeto: Esa enorme casa vieja / Predicado: parece deshabitada.",
    exp: "Todos los adjetivos y determinantes acompañan al núcleo 'casa' en el sujeto.",
  },
  {
    id: 18, block: 0,
    instruction: "Encuentra el sujeto y predicado:",
    sentence: "Llamó tu madre por teléfono hace un rato.",
    opts: [
      "Sujeto: tu madre / Predicado: Llamó por teléfono hace un rato.",
      "Sujeto: Llamó / Predicado: tu madre por teléfono hace un rato.",
      "Sujeto: por teléfono / Predicado: Llamó tu madre hace un rato.",
      "Sujeto: Ella (tácito) / Predicado: Llamó tu madre por teléfono hace un rato.",
    ],
    ans: "Sujeto: tu madre / Predicado: Llamó por teléfono hace un rato.",
    exp: "El sujeto explícito y pospuesto es 'tu madre'.",
  },
  {
    id: 19, block: 0,
    instruction: "Analiza la siguiente oración:",
    sentence: "Desde lejos se veía la cima de la montaña.",
    opts: [
      "Sujeto: Desde lejos / Predicado: se veía la cima de la montaña.",
      "Sujeto: la montaña / Predicado: Desde lejos se veía la cima de.",
      "Sujeto: la cima de la montaña / Predicado: Desde lejos se veía.",
      "Sujeto: se veía / Predicado: Desde lejos la cima de la montaña.",
    ],
    ans: "Sujeto: la cima de la montaña / Predicado: Desde lejos se veía.",
    exp: "En oraciones pasivas reflejas, la cosa que es vista/hecha funciona como sujeto paciente.",
  },
  {
    id: 20, block: 0,
    instruction: "Divide correctamente:",
    sentence: "Los valientes soldados defendieron el fuerte durante la noche.",
    opts: [
      "Sujeto: el fuerte / Predicado: Los valientes soldados defendieron durante la noche.",
      "Sujeto: Los valientes soldados / Predicado: defendieron el fuerte durante la noche.",
      "Sujeto: durante la noche / Predicado: Los valientes soldados defendieron el fuerte.",
      "Sujeto: soldados / Predicado: Los valientes defendieron el fuerte durante la noche.",
    ],
    ans: "Sujeto: Los valientes soldados / Predicado: defendieron el fuerte durante la noche.",
    exp: "El grupo nominal que realiza la acción ('Los valientes soldados') es el sujeto.",
  },

  // ── BLOQUE 2: Núcleos NS y NP (21–40) ────────────────────────────────────
  {
    id: 21, block: 1,
    instruction: "Identifica el Núcleo del Sujeto (NS) y el Núcleo del Predicado (NP):",
    sentence: "El perro fiel ladra a los desconocidos.",
    opts: [
      "NS: El / NP: ladra",
      "NS: perro / NP: ladra",
      "NS: fiel / NP: desconocidos",
      "NS: perro / NP: a los desconocidos",
    ],
    ans: "NS: perro / NP: ladra",
    exp: "El NS es el sustantivo principal ('perro') y el NP es el verbo conjugado principal ('ladra').",
  },
  {
    id: 22, block: 1,
    instruction: "Encuentra el NS y el NP:",
    sentence: "Las hojas secas caen en otoño.",
    opts: [
      "NS: secas / NP: caen",
      "NS: Las hojas / NP: en otoño",
      "NS: hojas / NP: caen",
      "NS: hojas / NP: otoño",
    ],
    ans: "NS: hojas / NP: caen",
    exp: "El sustantivo principal es 'hojas' (NS) y el verbo que indica la acción es 'caen' (NP).",
  },
  {
    id: 23, block: 1,
    instruction: "Identifica los núcleos:",
    sentence: "Mi hermana menor estudia medicina en la universidad.",
    opts: [
      "NS: menor / NP: estudia",
      "NS: hermana / NP: universidad",
      "NS: Mi / NP: medicina",
      "NS: hermana / NP: estudia",
    ],
    ans: "NS: hermana / NP: estudia",
    exp: "La palabra más importante del sujeto es 'hermana' y del predicado es el verbo 'estudia'.",
  },
  {
    id: 24, block: 1,
    instruction: "¿Cuáles son los núcleos de la oración?",
    sentence: "Los pájaros cantan alegremente por la mañana.",
    opts: [
      "NS: pájaros / NP: cantan",
      "NS: Los / NP: cantan",
      "NS: pájaros / NP: alegremente",
      "NS: mañana / NP: cantan",
    ],
    ans: "NS: pájaros / NP: cantan",
    exp: "NS: pájaros (quién). NP: cantan (acción).",
  },
  {
    id: 25, block: 1,
    instruction: "Encuentra el NS y el NP:",
    sentence: "Ese coche rojo corre muy rápido.",
    opts: [
      "NS: rojo / NP: rápido",
      "NS: Ese / NP: corre",
      "NS: coche / NP: corre",
      "NS: coche / NP: muy",
    ],
    ans: "NS: coche / NP: corre",
    exp: "NS: coche (sustantivo). NP: corre (verbo).",
  },
  {
    id: 26, block: 1,
    instruction: "Identifica los núcleos:",
    sentence: "La niña rubia salta la cuerda en el patio.",
    opts: [
      "NS: niña / NP: salta",
      "NS: rubia / NP: cuerda",
      "NS: niña / NP: patio",
      "NS: La / NP: salta",
    ],
    ans: "NS: niña / NP: salta",
    exp: "El núcleo del sujeto es el sustantivo 'niña'. El núcleo del predicado es el verbo 'salta'.",
  },
  {
    id: 27, block: 1,
    instruction: "¿Cuáles son el NS y el NP?",
    sentence: "Unos amigos lejanos visitaron la ciudad ayer.",
    opts: [
      "NS: lejanos / NP: ayer",
      "NS: amigos / NP: visitaron",
      "NS: Unos / NP: ciudad",
      "NS: amigos / NP: ciudad",
    ],
    ans: "NS: amigos / NP: visitaron",
    exp: "NS: amigos (quiénes realizan la acción). NP: visitaron (la acción).",
  },
  {
    id: 28, block: 1,
    instruction: "Encuentra los núcleos:",
    sentence: "El sol brillante ilumina el inmenso campo.",
    opts: [
      "NS: sol / NP: campo",
      "NS: brillante / NP: ilumina",
      "NS: El / NP: inmenso",
      "NS: sol / NP: ilumina",
    ],
    ans: "NS: sol / NP: ilumina",
    exp: "El sustantivo principal 'sol' es el NS y el verbo 'ilumina' es el NP.",
  },
  {
    id: 29, block: 1,
    instruction: "Identifica el NS y NP:",
    sentence: "Las flores del jardín huelen maravillosamente bien.",
    opts: [
      "NS: jardín / NP: maravillosamente",
      "NS: flores / NP: huelen",
      "NS: flores / NP: jardín",
      "NS: Las / NP: huelen",
    ],
    ans: "NS: flores / NP: huelen",
    exp: "Aunque 'jardín' es un sustantivo, el sujeto principal es 'flores' (NS). El verbo es 'huelen' (NP).",
  },
  {
    id: 30, block: 1,
    instruction: "¿Cuáles son los núcleos?",
    sentence: "Mi reloj nuevo marca las doce en punto.",
    opts: [
      "NS: nuevo / NP: doce",
      "NS: reloj / NP: marca",
      "NS: Mi / NP: marca",
      "NS: reloj / NP: doce",
    ],
    ans: "NS: reloj / NP: marca",
    exp: "NS: reloj. NP: marca.",
  },
  {
    id: 31, block: 1,
    instruction: "Encuentra el NS y el NP:",
    sentence: "El río caudaloso inundó el valle cercano.",
    opts: [
      "NS: caudaloso / NP: cercano",
      "NS: río / NP: inundó",
      "NS: río / NP: valle",
      "NS: El / NP: inundó",
    ],
    ans: "NS: río / NP: inundó",
    exp: "NS: río. NP: inundó.",
  },
  {
    id: 32, block: 1,
    instruction: "Identifica los núcleos de esta oración:",
    sentence: "Un fuerte viento derribó los árboles de la plaza.",
    opts: [
      "NS: fuerte / NP: árboles",
      "NS: viento / NP: derribó",
      "NS: viento / NP: plaza",
      "NS: Un / NP: derribó",
    ],
    ans: "NS: viento / NP: derribó",
    exp: "NS: viento (sustantivo principal). NP: derribó (verbo).",
  },
  {
    id: 33, block: 1,
    instruction: "¿Cuáles son el NS y el NP?",
    sentence: "El experto médico operó al paciente con éxito.",
    opts: [
      "NS: experto / NP: éxito",
      "NS: médico / NP: paciente",
      "NS: médico / NP: operó",
      "NS: paciente / NP: operó",
    ],
    ans: "NS: médico / NP: operó",
    exp: "NS: médico (quien opera). NP: operó (la acción).",
  },
  {
    id: 34, block: 1,
    instruction: "Encuentra los núcleos:",
    sentence: "Esa película antigua aburrió a los espectadores.",
    opts: [
      "NS: película / NP: aburrió",
      "NS: antigua / NP: aburrió",
      "NS: espectadores / NP: antigua",
      "NS: película / NP: espectadores",
    ],
    ans: "NS: película / NP: aburrió",
    exp: "NS: película (cosa de la que hablamos). NP: aburrió (acción).",
  },
  {
    id: 35, block: 1,
    instruction: "Identifica el NS y NP:",
    sentence: "La profesora de matemáticas explicó la lección claramente.",
    opts: [
      "NS: matemáticas / NP: lección",
      "NS: profesora / NP: explicó",
      "NS: profesora / NP: claramente",
      "NS: La / NP: explicó",
    ],
    ans: "NS: profesora / NP: explicó",
    exp: "El sustantivo principal del sujeto es 'profesora' y el verbo principal del predicado es 'explicó'.",
  },
  {
    id: 36, block: 1,
    instruction: "¿Cuáles son los núcleos?",
    sentence: "Un gato blanco maúlla en el tejado todas las noches.",
    opts: [
      "NS: gato / NP: tejado",
      "NS: blanco / NP: maúlla",
      "NS: gato / NP: maúlla",
      "NS: tejado / NP: maúlla",
    ],
    ans: "NS: gato / NP: maúlla",
    exp: "NS: gato. NP: maúlla.",
  },
  {
    id: 37, block: 1,
    instruction: "Encuentra el NS y el NP:",
    sentence: "El pastel de chocolate sabe delicioso.",
    opts: [
      "NS: pastel / NP: delicioso",
      "NS: chocolate / NP: sabe",
      "NS: pastel / NP: sabe",
      "NS: El / NP: sabe",
    ],
    ans: "NS: pastel / NP: sabe",
    exp: "NS: pastel ('de chocolate' es un modificador indirecto). NP: sabe (verbo copulativo o semicopulativo).",
  },
  {
    id: 38, block: 1,
    instruction: "Identifica los núcleos de la oración:",
    sentence: "Las estrellas brillantes adornan el cielo nocturno.",
    opts: [
      "NS: estrellas / NP: adornan",
      "NS: brillantes / NP: adornan",
      "NS: cielo / NP: nocturno",
      "NS: estrellas / NP: cielo",
    ],
    ans: "NS: estrellas / NP: adornan",
    exp: "NS: estrellas. NP: adornan.",
  },
  {
    id: 39, block: 1,
    instruction: "¿Cuáles son el NS y el NP?",
    sentence: "Mis zapatos nuevos lastiman mis pies al caminar.",
    opts: [
      "NS: nuevos / NP: caminar",
      "NS: zapatos / NP: lastiman",
      "NS: pies / NP: lastiman",
      "NS: zapatos / NP: pies",
    ],
    ans: "NS: zapatos / NP: lastiman",
    exp: "NS: zapatos (la cosa que realiza la acción). NP: lastiman (la acción).",
  },
  {
    id: 40, block: 1,
    instruction: "Encuentra los núcleos de esta oración:",
    sentence: "El viejo marinero contó muchas historias fascinantes.",
    opts: [
      "NS: viejo / NP: historias",
      "NS: marinero / NP: contó",
      "NS: marinero / NP: fascinantes",
      "NS: El / NP: contó",
    ],
    ans: "NS: marinero / NP: contó",
    exp: "El NS es 'marinero' (el sustantivo núcleo) y el NP es 'contó' (el verbo núcleo).",
  },
];

const BLOCKS = [
  { label: "Sujeto y Predicado", color: C.blue,   range: [1, 20] },
  { label: "Núcleos NS y NP",    color: C.purple, range: [21, 40] },
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

export default function SintaxisEspanol() {
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
    if (modeKey === "all") qs = shuffle(questions);
    else {
      const idx = parseInt(modeKey.replace("block-", ""), 10);
      qs = shuffle(questions.filter(q => q.block === idx));
    }
    qs = qs.map(q => ({ ...q, opts: shuffle(q.opts) }));
    const secs = modeKey === "all" ? 40 * 60 : 20 * 60;
    setQueue(qs);
    setAnswers({});
    setCurrent(0);
    setSelected(null);
    setConfirmed(false);
    setTimeLeft(secs);
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

  // ── MENU ─────────────────────────────────────────────────────────────────
  if (mode === "menu") return (
    <div style={{ minHeight: "100vh", background: C.bg, paddingBottom: 64 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 5px; background: ${C.bg}; }
        ::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 99px; }
      `}</style>

      {/* Hero */}
      <div style={{
        background: C.surface, borderBottom: `1px solid ${C.border}`,
        padding: "44px 24px 32px", textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: `linear-gradient(${C.purple} 1px,transparent 1px),linear-gradient(90deg,${C.purple} 1px,transparent 1px)`,
          backgroundSize: "44px 44px",
        }}/>
        <div style={{ position: "relative" }}>
          <span style={{
            display: "inline-block", background: C.purple + "22", color: C.purple,
            borderRadius: 99, padding: "3px 14px", fontSize: 11,
            fontWeight: 700, letterSpacing: 2, textTransform: "uppercase",
            marginBottom: 14, fontFamily: "'DM Sans',sans-serif",
          }}>FactoRizando · Español</span>
          <h1 style={{
            fontSize: "clamp(22px,4vw,36px)", fontWeight: 700, color: C.text,
            letterSpacing: "-1px", lineHeight: 1.1, marginBottom: 10,
            fontFamily: "'DM Sans',sans-serif",
          }}>
            Sintaxis: <span style={{ color: C.purple }}>Análisis Oracional</span>
          </h1>
          <p style={{ color: C.muted, fontSize: 14, maxWidth: 500, margin: "0 auto 22px", fontFamily: "'DM Sans',sans-serif" }}>
            40 preguntas · 2 bloques · 30 s por pregunta
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 36, flexWrap: "wrap", fontFamily: "'DM Sans',sans-serif" }}>
            {[{ label: "Preguntas", val: 40 }, { label: "Bloques", val: 2 }, { label: "Tiempo (todo)", val: "40 min" }].map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 20, fontWeight: 900, color: C.text, letterSpacing: "-1px" }}>{s.val}</div>
                <div style={{ fontSize: 10, color: C.muted, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "32px 16px" }}>
        {/* Modo completo */}
        <p style={{ color: C.muted, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12, fontFamily: "'DM Sans',sans-serif" }}>
          Examen completo
        </p>
        <button onClick={() => startExam("all")} style={{
          width: "100%", background: C.surface, border: `1px solid ${C.border}`,
          borderRadius: 14, padding: "22px 16px", cursor: "pointer",
          textAlign: "center", marginBottom: 28, fontFamily: "'DM Sans',sans-serif",
          transition: "all 0.2s",
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = C.purple; e.currentTarget.style.background = C.purple + "11"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.surface; }}
        >
          <div style={{ fontSize: 28, marginBottom: 6 }}>📋</div>
          <div style={{ color: C.text, fontWeight: 700, fontSize: 15 }}>Todas las preguntas</div>
          <div style={{ color: C.muted, fontSize: 12, marginTop: 4 }}>40 preguntas en orden aleatorio · 40 min</div>
        </button>

        {/* Bloques */}
        <p style={{ color: C.muted, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12, fontFamily: "'DM Sans',sans-serif" }}>
          O elige un bloque (20 min c/u)
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {BLOCKS.map((bl, i) => (
            <button key={i} onClick={() => startExam(`block-${i}`)} style={{
              background: C.surface, border: `1px solid ${bl.color}44`,
              borderRadius: 12, padding: "20px 16px", cursor: "pointer",
              textAlign: "center", fontFamily: "'DM Sans',sans-serif", transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = bl.color + "18"; e.currentTarget.style.borderColor = bl.color; }}
            onMouseLeave={e => { e.currentTarget.style.background = C.surface; e.currentTarget.style.borderColor = bl.color + "44"; }}
            >
              <div style={{ color: bl.color, fontWeight: 700, fontSize: 14 }}>{bl.label}</div>
              <div style={{ color: C.muted, fontSize: 12, marginTop: 4 }}>20 preguntas · 20 min</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // ── RESULTS ──────────────────────────────────────────────────────────────
  if (mode === "results") {
    const total = queue.length;
    const pct   = total > 0 ? Math.round((score / total) * 100) : 0;
    const col   = pct >= 80 ? C.teal : pct >= 60 ? C.gold : C.crimson;
    const msg   = pct >= 90 ? "¡Dominio sobresaliente!" : pct >= 70 ? "¡Buen trabajo!" : pct >= 50 ? "Sigue practicando" : "Necesitas repasar el tema";
    const displayQs = filter === "correct" ? queue.filter(q => answers[q.id] === q.ans)
                    : filter === "wrong"   ? queue.filter(q => answers[q.id] && answers[q.id] !== q.ans)
                    : queue;

    return (
      <div style={{ minHeight: "100vh", background: C.bg, paddingBottom: 64 }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}`}</style>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "32px 16px" }}>

          {/* Botones arriba */}
          <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
            <button onClick={() => setMode("menu")} style={{
              background: C.surface, color: C.dim, border: `1px solid ${C.border}`,
              borderRadius: 12, padding: "12px 28px", fontSize: 14, fontWeight: 600,
              fontFamily: "'DM Sans',sans-serif", cursor: "pointer",
            }}>← Menú</button>
            <button onClick={() => startExam(examMode)} style={{
              background: `linear-gradient(135deg,${C.purple},${C.blue})`,
              color: "#fff", border: "none", borderRadius: 12, padding: "12px 28px",
              fontSize: 14, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", cursor: "pointer",
            }}>↺ Repetir</button>
          </div>

          {/* Score */}
          <div style={{
            background: C.surface, border: `2px solid ${col}`,
            borderRadius: 18, padding: "30px 36px", textAlign: "center",
            maxWidth: 380, margin: "0 auto 32px", fontFamily: "'DM Sans',sans-serif",
          }}>
            <div style={{ fontSize: 58, fontWeight: 900, color: col, letterSpacing: "-3px", lineHeight: 1 }}>{pct}%</div>
            <div style={{ color: C.dim, fontSize: 14, marginTop: 8 }}>
              <span style={{ color: C.text, fontWeight: 700 }}>{score}</span> de {total} correctas
            </div>
            <div style={{ color: col, fontWeight: 700, fontSize: 15, marginTop: 10 }}>{msg}</div>
          </div>

          {/* Filtros */}
          <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
            {[["all", "Todas"], ["correct", `✓ Correctas (${score})`], ["wrong", `✗ Incorrectas (${total - score})`]].map(([f, label]) => (
              <button key={f} onClick={() => setFilter(f)} style={{
                padding: "6px 14px", borderRadius: 99, fontSize: 12, fontWeight: 700,
                cursor: "pointer", border: "none",
                background: filter === f ? C.purple : C.surface,
                color: filter === f ? "#fff" : C.muted,
                transition: "all 0.2s", fontFamily: "'DM Sans',sans-serif",
              }}>{label}</button>
            ))}
          </div>

          {/* Revisión */}
          {displayQs.map(q => {
            const bl = getBlock(q.id);
            const sel = answers[q.id];
            return (
              <div key={q.id} style={{
                background: C.surface, border: `1px solid ${C.border}`,
                borderRadius: 14, padding: "20px 24px", marginBottom: 12,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ background: bl.color + "1a", color: bl.color, borderRadius: 6, padding: "2px 10px", fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif" }}>{bl.label}</span>
                  <span style={{ marginLeft: "auto", color: C.muted, fontSize: 12, fontFamily: "'DM Sans',sans-serif" }}>#{q.id}</span>
                </div>
                <p style={{ color: C.muted, fontSize: 12, marginBottom: 4, fontFamily: "'DM Sans',sans-serif" }}>{q.instruction}</p>
                <p style={{ color: C.gold, fontSize: 14, fontStyle: "italic", marginBottom: 12, fontFamily: "'DM Sans',sans-serif" }}>"{q.sentence}"</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {q.opts.map(opt => {
                    const isOk = opt === q.ans, isUser = opt === sel;
                    let bg = C.bg, bd = `1px solid ${C.border}`, co = C.dim;
                    if (isOk)                { bg = C.teal + "22";    bd = `1px solid ${C.teal}`;    co = C.teal; }
                    else if (isUser && !isOk){ bg = C.crimson + "22"; bd = `1px solid ${C.crimson}`; co = C.crimson; }
                    return (
                      <div key={opt} style={{ background: bg, border: bd, color: co, borderRadius: 8, padding: "8px 12px", fontSize: 13, fontFamily: "'DM Sans',sans-serif" }}>
                        {isOk ? "✓ " : ""}{isUser && !isOk ? "✗ " : ""}{opt}
                      </div>
                    );
                  })}
                </div>
                <div style={{ marginTop: 10, padding: "8px 12px", background: C.blue + "0e", borderRadius: 8, border: `1px solid ${C.blue}22` }}>
                  <span style={{ color: C.blue, fontSize: 11, fontWeight: 700, fontFamily: "'DM Sans',sans-serif" }}>💡 </span>
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
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}::-webkit-scrollbar{width:5px;background:${C.bg}}::-webkit-scrollbar-thumb{background:${C.border};border-radius:99px}`}</style>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "24px 16px" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
          <div style={{ fontFamily: "'DM Sans',sans-serif" }}>
            <span style={{ color: C.muted, fontSize: 13 }}>Pregunta </span>
            <span style={{ color: C.text, fontWeight: 700 }}>{current + 1}</span>
            <span style={{ color: C.muted }}> / {queue.length}</span>
            <span style={{ color: C.muted, fontSize: 12, marginLeft: 10 }}>({answered} respondidas)</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{
              fontSize: 13, fontWeight: 700,
              color: timerWarning ? C.crimson : C.blue,
              background: timerWarning ? C.crimson + "18" : C.blue + "18",
              padding: "5px 12px", borderRadius: 20,
              border: `1px solid ${timerWarning ? C.crimson : C.blue}55`,
              fontFamily: "'DM Sans',sans-serif",
            }}>⏱ {fmt(timeLeft)}</span>
            <button onClick={() => { setTimerOn(false); setMode("results"); }} style={{
              padding: "5px 12px", background: C.crimson + "18", color: C.crimson,
              border: `1px solid ${C.crimson}44`, borderRadius: 20,
              cursor: "pointer", fontSize: 12, fontFamily: "'DM Sans',sans-serif",
            }}>Terminar</button>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ background: C.border, borderRadius: 99, height: 4, overflow: "hidden", marginBottom: 20 }}>
          <div style={{ height: "100%", width: `${prog}%`, background: `linear-gradient(90deg,${C.purple},${C.blue})`, transition: "width 0.3s", borderRadius: 99 }}/>
        </div>

        {/* Bloque badge */}
        <div style={{ marginBottom: 12 }}>
          <span style={{ background: bl.color + "1a", color: bl.color, borderRadius: 6, padding: "2px 10px", fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif" }}>{bl.label}</span>
          <span style={{ marginLeft: 10, color: C.muted, fontSize: 12, fontFamily: "'DM Sans',sans-serif" }}>#{q.id} / 40</span>
        </div>

        {/* Instrucción + oración */}
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "22px 26px", marginBottom: 8 }}>
          <p style={{ color: C.muted, fontSize: 13, marginBottom: 10, fontFamily: "'DM Sans',sans-serif" }}>{q.instruction}</p>
          <p style={{ color: C.gold, fontSize: 16, fontStyle: "italic", fontWeight: 600, lineHeight: 1.6, fontFamily: "'DM Sans',sans-serif" }}>"{q.sentence}"</p>
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
              <button key={opt} onClick={() => !confirmed && setSelected(opt)} style={{
                background: bg, border: bd, color: co,
                borderRadius: 9, padding: "11px 14px", fontSize: 13, fontWeight: 500,
                cursor: confirmed ? "default" : "pointer", textAlign: "left",
                transition: "all 0.15s", outline: "none", fontFamily: "'DM Sans',sans-serif",
                lineHeight: 1.5,
              }}>
                {confirmed && isOk ? "✓ " : ""}{confirmed && isSel && !isOk ? "✗ " : ""}{opt}
              </button>
            );
          })}
        </div>

        {/* Explicación (visible al confirmar) */}
        {confirmed && (
          <div style={{
            background: C.blue + "0e", border: `1px solid ${C.blue}22`,
            borderRadius: 10, padding: "12px 16px", marginBottom: 16,
          }}>
            <span style={{ color: C.blue, fontSize: 12, fontWeight: 700, fontFamily: "'DM Sans',sans-serif" }}>💡 Explicación: </span>
            <span style={{ color: C.dim, fontSize: 13, fontFamily: "'DM Sans',sans-serif" }}>{q.exp}</span>
          </div>
        )}

        {/* Botones acción */}
        <div style={{ display: "flex", gap: 10, justifyContent: "space-between", alignItems: "center" }}>
          <button onClick={() => {
            if (current > 0) { const pid = queue[current - 1].id; setCurrent(c => c - 1); setSelected(answers[pid] || null); setConfirmed(!!answers[pid]); }
          }} disabled={current === 0} style={{
            padding: "10px 20px", background: C.surface, color: C.muted,
            border: `1px solid ${C.border}`, borderRadius: 10,
            cursor: current === 0 ? "not-allowed" : "pointer",
            opacity: current === 0 ? 0.4 : 1, fontSize: 14, fontFamily: "'DM Sans',sans-serif",
          }}>← Anterior</button>

          {!confirmed ? (
            <button onClick={confirmAnswer} disabled={!selected} style={{
              padding: "10px 28px", fontSize: 14, fontWeight: 700,
              background: selected ? `linear-gradient(135deg,${C.purple},${C.blue})` : C.surface,
              color: selected ? "#fff" : C.muted, border: "none", borderRadius: 10,
              cursor: selected ? "pointer" : "not-allowed",
              boxShadow: selected ? `0 4px 20px ${C.purple}33` : "none",
              fontFamily: "'DM Sans',sans-serif", transition: "all 0.2s",
            }}>Confirmar respuesta</button>
          ) : (
            <button onClick={goNext} style={{
              padding: "10px 28px", fontSize: 14, fontWeight: 700,
              background: `linear-gradient(135deg,${C.teal},${C.blue})`,
              color: "#fff", border: "none", borderRadius: 10,
              cursor: "pointer", boxShadow: `0 4px 20px ${C.teal}33`,
              fontFamily: "'DM Sans',sans-serif",
            }}>
              {current === queue.length - 1 ? "Ver resultados →" : "Siguiente →"}
            </button>
          )}
        </div>

        {/* Navegador */}
        <div style={{ marginTop: 24, background: C.surface, borderRadius: 12, padding: 16, border: `1px solid ${C.border}` }}>
          <p style={{ color: C.muted, fontSize: 11, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1, fontFamily: "'DM Sans',sans-serif" }}>Navegador de preguntas</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
            {queue.map((fq, i) => {
              const ans = answers[fq.id], isCurr = i === current;
              let bg = C.surface, co = C.muted;
              if (isCurr)           { bg = C.purple;         co = "#fff"; }
              else if (ans === fq.ans) { bg = C.teal + "33";    co = C.teal; }
              else if (ans)         { bg = C.crimson + "33"; co = C.crimson; }
              return (
                <button key={fq.id} onClick={() => { setCurrent(i); setSelected(answers[fq.id] || null); setConfirmed(!!answers[fq.id]); }} style={{
                  width: 28, height: 28, borderRadius: 6, background: bg, color: co,
                  border: isCurr ? `2px solid ${C.purple}` : `1px solid ${C.border}`,
                  cursor: "pointer", fontSize: 11, fontWeight: isCurr ? 700 : 400,
                  fontFamily: "'DM Sans',sans-serif",
                }}>{i + 1}</button>
              );
            })}
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: 10 }}>
            {[[C.teal + "33", C.teal, "Correcta"], [C.crimson + "33", C.crimson, "Incorrecta"], [C.surface, C.muted, "Sin contestar"]].map(([bg, co, label]) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{ width: 12, height: 12, borderRadius: 3, background: bg, border: `1px solid ${co}` }}/>
                <span style={{ color: C.muted, fontSize: 11, fontFamily: "'DM Sans',sans-serif" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
