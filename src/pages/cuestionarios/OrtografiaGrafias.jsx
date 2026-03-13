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
  // ── BLOQUE 1: Acentuación (1–65) ─────────────────────────────────────────
  // Agudas
  { id: 1,  block: 0, q: "¿Cuál de las siguientes palabras es aguda y lleva tilde correctamente?", opts: ["Arbol", "Cancíon", "Compás", "Sofa"], ans: "Compás", exp: "Las agudas se tildan si terminan en n, s o vocal. 'Compás' termina en 's'." },
  { id: 2,  block: 0, q: "¿Qué palabra aguda NO debe llevar tilde?", opts: ["Cafe", "Reloj", "Menu", "Sillon"], ans: "Reloj", exp: "'Reloj' es aguda pero termina en 'j', por lo que no lleva tilde." },
  { id: 3,  block: 0, q: "Identifica la palabra aguda en la siguiente lista:", opts: ["Cárcel", "Joven", "Escribir", "Lápiz"], ans: "Escribir", exp: "La sílaba tónica de 'escribir' es la última (-bir), por lo tanto es aguda (sin tilde por terminar en 'r')." },
  { id: 4,  block: 0, q: "Señala la palabra aguda correctamente escrita:", opts: ["Autobus", "Autobús", "Autóbus", "Áutobus"], ans: "Autobús", exp: "Es aguda terminada en 's', por lo que debe llevar tilde en la última sílaba." },
  { id: 5,  block: 0, q: "¿Por qué la palabra 'virtud' no lleva tilde?", opts: ["Es grave.", "Es esdrújula.", "Es aguda terminada en consonante distinta de n o s.", "Es un monosílabo."], ans: "Es aguda terminada en consonante distinta de n o s.", exp: "La sílaba tónica es 'tud' (aguda) y termina en 'd'." },
  { id: 6,  block: 0, q: "En la oración 'Él _____ la puerta', ¿qué forma verbal aguda completa correctamente la frase?", opts: ["abrio", "abrió", "ábrio", "abriò"], ans: "abrió", exp: "'abrió' es aguda terminada en vocal." },
  { id: 7,  block: 0, q: "¿Cuál es la sílaba tónica en la palabra aguda 'corazón'?", opts: ["co", "ra", "zón", "ninguna"], ans: "zón", exp: "La mayor fuerza de voz recae en la última sílaba 'zón'." },
  { id: 8,  block: 0, q: "Identifica la palabra que rompe la regla general de las agudas (excepción por grupo consonántico):", opts: ["Robots", "Sofás", "Camión", "Mamá"], ans: "Robots", exp: "Las agudas terminadas en 's' precedida de otra consonante (como robots) NO llevan tilde." },
  { id: 9,  block: 0, q: "¿Cuál de estas opciones contiene SOLO palabras agudas?", opts: ["Café, dolor, pared", "Mesa, silla, luz", "Árbol, césped, hoja", "Rápido, médico, pájaro"], ans: "Café, dolor, pared", exp: "Café, dolor y pared tienen la sílaba tónica en la última posición." },
  { id: 10, block: 0, q: "La palabra 'feliz' es:", opts: ["Grave con tilde", "Aguda sin tilde", "Grave sin tilde", "Aguda con tilde"], ans: "Aguda sin tilde", exp: "Es aguda terminada en 'z', por lo que no lleva tilde." },

  // Graves
  { id: 11, block: 0, q: "Las palabras graves (o llanas) llevan la sílaba tónica en:", opts: ["La última sílaba", "La penúltima sílaba", "La antepenúltima sílaba", "Antes de la antepenúltima"], ans: "La penúltima sílaba", exp: "Por definición, las graves tienen su mayor fuerza de voz en la penúltima sílaba." },
  { id: 12, block: 0, q: "¿Cuál de las siguientes palabras graves DEBE llevar tilde?", opts: ["Examen", "Joven", "Lider", "Margen"], ans: "Lider", exp: "'Líder' termina en 'r', por lo tanto, sí se tilda. Examen, joven y margen terminan en 'n' y no se tildan." },
  { id: 13, block: 0, q: "¿Por qué la palabra 'examen' NO lleva tilde?", opts: ["Porque es aguda.", "Porque es grave terminada en 'n'.", "Porque es esdrújula.", "Porque termina en vocal."], ans: "Porque es grave terminada en 'n'.", exp: "Las graves que terminan en 'n', 's' o vocal NO se tildan." },
  { id: 14, block: 0, q: "Identifica la palabra grave correctamente acentuada:", opts: ["Árbol", "Arból", "Arbol", "Árboles"], ans: "Árbol", exp: "'Árbol' es grave terminada en 'l' (consonante distinta de n o s), por lo que lleva tilde." },
  { id: 15, block: 0, q: "Señala el plural correcto de la palabra 'examen':", opts: ["Exámens", "Examenes", "Exámenes", "Exámennes"], ans: "Exámenes", exp: "Al pasar al plural, la sílaba tónica (xa) se convierte en antepenúltima, volviéndose esdrújula." },
  { id: 16, block: 0, q: "¿Cuál de las siguientes palabras es grave?", opts: ["Camión", "Difícil", "Sílaba", "Entrégaselo"], ans: "Difícil", exp: "'Difícil' tiene la fuerza de voz en la penúltima sílaba (fí)." },
  { id: 17, block: 0, q: "La palabra 'crisis' es:", opts: ["Aguda", "Esdrújula", "Grave", "Sobreesdrújula"], ans: "Grave", exp: "La sílaba tónica es 'cri', siendo la penúltima. No lleva tilde por terminar en 's'." },
  { id: 18, block: 0, q: "¿Cuál es el error en la palabra 'jóven'?", opts: ["Le falta una 's'.", "La 'v' debería ser 'b'.", "No debe llevar tilde.", "Debe ser esdrújula."], ans: "No debe llevar tilde.", exp: "'Joven' es grave terminada en 'n', por lo tanto, no se tilda." },
  { id: 19, block: 0, q: "Identifica la opción con SOLO palabras graves sin tilde:", opts: ["Cielo, tierra, agua", "Amor, paz, luz", "Último, médico, rústico", "Papá, mamá, bebé"], ans: "Cielo, tierra, agua", exp: "Cie-lo, tie-rra, a-gua; todas tienen la fuerza en la penúltima sílaba y terminan en vocal, por eso no llevan tilde." },
  { id: 20, block: 0, q: "¿Por qué 'fénix' lleva tilde?", opts: ["Porque es esdrújula.", "Porque termina en 'x', que es distinto de n o s.", "Porque es aguda terminada en consonante.", "Porque es una excepción poética."], ans: "Porque termina en 'x', que es distinto de n o s.", exp: "'Fénix' es grave. Al terminar en 'x', cumple la regla para tildarse." },

  // Esdrújulas y Sobreesdrújulas
  { id: 21, block: 0, q: "Las palabras esdrújulas...", opts: ["Se tildan solo si terminan en vocal.", "Se tildan solo si terminan en n o s.", "No se tildan nunca.", "Se tildan siempre."], ans: "Se tildan siempre.", exp: "Por regla general, todas las palabras esdrújulas llevan tilde ortográfica." },
  { id: 22, block: 0, q: "Identifica la palabra esdrújula:", opts: ["Matemáticas", "Biología", "Química", "Física"], ans: "Matemáticas", exp: "Ma-te-má-ti-cas tiene el acento en la antepenúltima sílaba." },
  { id: 23, block: 0, q: "¿Cuál de las siguientes es una palabra sobreesdrújula?", opts: ["Pájaro", "Murciélago", "Cómpraselo", "Teléfono"], ans: "Cómpraselo", exp: "'Cómpraselo' tiene la sílaba tónica antes de la antepenúltima (cóm-pra-se-lo)." },
  { id: 24, block: 0, q: "La palabra 'último' lleva tilde porque:", opts: ["Es aguda.", "Es grave.", "Es esdrújula.", "Es monosílaba."], ans: "Es esdrújula.", exp: "Su sílaba tónica es la antepenúltima (úl-ti-mo)." },
  { id: 25, block: 0, q: "¿Cómo se acentúan las palabras sobreesdrújulas?", opts: ["A veces", "Nunca", "Siempre", "Solo en plural"], ans: "Siempre", exp: "Al igual que las esdrújulas, TODAS las sobreesdrújulas llevan tilde." },
  { id: 26, block: 0, q: "Señala la palabra esdrújula escrita INCORRECTAMENTE:", opts: ["Sílaba", "Gramatica", "Célula", "Análisis"], ans: "Gramatica", exp: "Debe escribirse 'Gramática' con tilde por ser esdrújula." },
  { id: 27, block: 0, q: "Las palabras sobreesdrújulas generalmente se forman por:", opts: ["Sustantivos derivados.", "Verbo + pronombres enclíticos (ej. dígaselo).", "Adjetivos calificativos.", "Preposiciones compuestas."], ans: "Verbo + pronombres enclíticos (ej. dígaselo).", exp: "Se forman uniendo un verbo en imperativo o gerundio con dos pronombres átonos (me, te, se, lo, la, le)." },
  { id: 28, block: 0, q: "¿Dónde lleva la tilde 'exámenes'?", opts: ["e-xá-me-nes", "e-xa-mé-nes", "é-xa-me-nes", "e-xa-me-nés"], ans: "e-xá-me-nes", exp: "La tilde va en la 'a' (antepenúltima sílaba), convirtiéndola en esdrújula." },
  { id: 29, block: 0, q: "Identifica la palabra esdrújula:", opts: ["Canción", "Lápices", "Lápiz", "Cantó"], ans: "Lápices", exp: "'Lápices' (lá-pi-ces) tiene el acento en la antepenúltima sílaba." },
  { id: 30, block: 0, q: "¿Cuál NO es esdrújula?", opts: ["Lógico", "Pelícano", "Relámpago", "Acuario"], ans: "Acuario", exp: "'Acuario' es grave terminada en vocal (a-cua-rio)." },

  // Acento Diacrítico
  { id: 31, block: 0, q: "El acento diacrítico sirve para:", opts: ["Hacer que la palabra suene más fuerte.", "Diferenciar palabras que se escriben igual pero tienen funciones distintas.", "Marcar las palabras extranjeras.", "Indicar el plural."], ans: "Diferenciar palabras que se escriben igual pero tienen funciones distintas.", exp: "Permite distinguir palabras homónimas, frecuentemente monosílabos (ej. él/el, tú/tu)." },
  { id: 32, block: 0, q: "En la oración '___ coche es más rápido que ___', los monosílabos correctos son:", opts: ["Él / el", "El / él", "El / el", "Él / él"], ans: "El / él", exp: "El primer 'El' es artículo (sin tilde), el segundo 'él' es pronombre personal (con tilde)." },
  { id: 33, block: 0, q: "Identifica el uso correcto de 'mí' (con tilde):", opts: ["Esa es mí casa.", "Mí perro ladra mucho.", "Ese regalo es para mí.", "Toca la nota mí."], ans: "Ese regalo es para mí.", exp: "'Mí' lleva tilde cuando es pronombre personal. Es 'mi' (sin tilde) cuando es posesivo o nota musical." },
  { id: 34, block: 0, q: "¿Cuándo lleva tilde la palabra 'tu'?", opts: ["Cuando es adjetivo posesivo (Tu libro).", "Cuando es pronombre personal (Tú sabes).", "Siempre lleva tilde.", "Nunca lleva tilde."], ans: "Cuando es pronombre personal (Tú sabes).", exp: "Se tilda para diferenciar el pronombre 'Tú' del posesivo 'tu'." },
  { id: 35, block: 0, q: "Completa: 'Deseo que me ____ un poco ____ de agua'.", opts: ["dé / más", "de / más", "dé / mas", "de / mas"], ans: "dé / más", exp: "'Dé' lleva tilde por ser del verbo dar. 'Más' lleva tilde por indicar cantidad." },
  { id: 36, block: 0, q: "La palabra 'mas' SIN tilde equivale a:", opts: ["Cantidad (mucho).", "El símbolo de suma (+).", "La conjunción 'pero'.", "Adverbio de tiempo."], ans: "La conjunción 'pero'.", exp: "'Mas' (sin tilde) es una conjunción adversativa equivalente a 'pero'." },
  { id: 37, block: 0, q: "Señala la oración correcta:", opts: ["Si, acepto ir contigo.", "No se si podré ir.", "Ella volvió en sí después del desmayo.", "Toca una melodía en Sí mayor."], ans: "Ella volvió en sí después del desmayo.", exp: "'Sí' lleva tilde cuando es pronombre (volvió en sí) o adverbio de afirmación." },
  { id: 38, block: 0, q: "¿Qué función cumple 'sé' CON tilde?", opts: ["Pronombre reflexivo.", "Verbo 'ser' o 'saber'.", "Conjunción condicional.", "Artículo definido."], ans: "Verbo 'ser' o 'saber'.", exp: "Lleva tilde cuando corresponde al verbo saber (Yo lo sé) o al imperativo del verbo ser (Sé valiente)." },
  { id: 39, block: 0, q: "En la frase 'Te invitaré a tomar un ___', la palabra faltante es:", opts: ["Te", "Té", "Tè", "Të"], ans: "Té", exp: "'Té' lleva tilde cuando es un sustantivo (la infusión)." },
  { id: 40, block: 0, q: "Monosílabos como 'fue', 'fui', 'dio', 'vio':", opts: ["Llevan tilde siempre.", "Llevan tilde si terminan en vocal.", "Llevan acento diacrítico.", "NUNCA llevan tilde."], ans: "NUNCA llevan tilde.", exp: "Los monosílabos no se tildan, salvo los casos diacríticos. Estos cuatro nunca la llevan." },
  { id: 41, block: 0, q: "¿Cuándo lleva tilde 'aun' (Aún)?", opts: ["Cuando equivale a 'incluso'.", "Cuando equivale a 'todavía'.", "Cuando equivale a 'hasta'.", "Nunca lleva tilde."], ans: "Cuando equivale a 'todavía'.", exp: "Ejemplo: Aún (todavía) no ha llegado." },
  { id: 42, block: 0, q: "Completa: '___ tú mismo y no te dejes influenciar'.", opts: ["Se", "Sé", "Cé", "Ce"], ans: "Sé", exp: "Es el imperativo del verbo 'ser', por lo que lleva tilde." },
  { id: 43, block: 0, q: "En 'A mí me importa mi familia', los usos de mi/mí son:", opts: ["Pronombre / Pronombre", "Posesivo / Pronombre", "Pronombre / Posesivo", "Posesivo / Posesivo"], ans: "Pronombre / Posesivo", exp: "El primer 'mí' es pronombre (con tilde), el segundo 'mi' indica pertenencia (posesivo, sin tilde)." },
  { id: 44, block: 0, q: "¿Cuál es incorrecta?", opts: ["El libro es de él.", "Quiero que me de el libro.", "El anillo de oro.", "No le dé más vueltas."], ans: "Quiero que me de el libro.", exp: "Debería ser 'que me DÉ' (verbo dar)." },
  { id: 45, block: 0, q: "Los pronombres demostrativos (este, ese, aquel) y la palabra 'solo':", opts: ["Se tildan siempre.", "Se tildan en caso de ambigüedad.", "La RAE recomienda NO tildarlos nunca actualmente.", "Se tildan si son sujeto."], ans: "La RAE recomienda NO tildarlos nunca actualmente.", exp: "Desde 2010, la RAE aconseja no tildar 'solo' ni los demostrativos, incluso si hay ambigüedad." },

  // Hiatos y Diptongos
  { id: 46, block: 0, q: "¿Qué es un hiato acentual?", opts: ["La unión de dos vocales fuertes.", "Cuando una vocal débil tónica (i, u) está junto a una fuerte (a, e, o).", "La unión de dos vocales débiles.", "La separación de consonantes."], ans: "Cuando una vocal débil tónica (i, u) está junto a una fuerte (a, e, o).", exp: "La vocal débil recibe la mayor fuerza de voz y siempre debe tildarse para romper el diptongo." },
  { id: 47, block: 0, q: "Identifica la palabra con hiato acentual:", opts: ["Peine", "Ciudad", "Río", "Canción"], ans: "Río", exp: "Rí-o. La 'i' (débil) lleva la fuerza de voz junto a la 'o' (fuerte), rompiendo el diptongo." },
  { id: 48, block: 0, q: "¿Por qué 'baúl' lleva tilde?", opts: ["Porque es aguda terminada en 'l'.", "Porque es un hiato acentual (a+ú tónica).", "Porque es esdrújula.", "Porque termina en consonante."], ans: "Porque es un hiato acentual (a+ú tónica).", exp: "Aunque por regla de agudas no debería llevarla, la regla del hiato (a-ú) prevalece." },
  { id: 49, block: 0, q: "Identifica la palabra que contiene un diptongo (NO lleva tilde para romperlo):", opts: ["Día", "Grúa", "Causa", "Raíz"], ans: "Causa", exp: "En 'Cau-sa', la fuerza de voz cae en la 'a', manteniendo unidas a la 'a' y la 'u'." },
  { id: 50, block: 0, q: "La palabra 'caída' se silabea y tilda así:", opts: ["cai-da", "caí-da", "ca-í-da", "ca-i-da"], ans: "ca-í-da", exp: "Es un hiato acentual. Se separa ca-í-da y se tilda la 'i'." },
  { id: 51, block: 0, q: "¿Qué vocal SIEMPRE recibe la tilde en un hiato acentual?", opts: ["La vocal fuerte (a, e, o).", "La vocal débil (i, u).", "La primera vocal.", "La segunda vocal."], ans: "La vocal débil (i, u).", exp: "El hiato acentual se produce porque la vocal débil (cerrada) se vuelve tónica." },
  { id: 52, block: 0, q: "La palabra 'sonreír' lleva tilde porque:", opts: ["Es aguda terminada en 'r'.", "Es un hiato acentual (e-í).", "Es un caso de acento diacrítico.", "No debe llevar tilde."], ans: "Es un hiato acentual (e-í).", exp: "La 'i' tónica junto a la 'e' átona forma un hiato que exige tilde, sin importar las reglas de agudas." },
  { id: 53, block: 0, q: "Señala la opción con error de tildación en hiato:", opts: ["Heroísmo", "Egoista", "Maíz", "Búho"], ans: "Egoista", exp: "Debe ser 'Egoísta'. La 'i' lleva la mayor fuerza de voz junto a la 'o'." },
  { id: 54, block: 0, q: "¿La 'h' intercalada impide la formación de un hiato o diptongo?", opts: ["Sí, siempre.", "No, no impide ni el diptongo ni el hiato.", "Solo impide el hiato.", "Convierte todo en esdrújula."], ans: "No, no impide ni el diptongo ni el hiato.", exp: "La 'h' es muda y no afecta las reglas de acentuación fonética (ej. bú-ho lleva tilde por hiato)." },
  { id: 55, block: 0, q: "En la palabra 'farmacia', ¿hay hiato o diptongo?", opts: ["Hiato (far-ma-ci-a)", "Diptongo (far-ma-cia)", "Ambos", "Ninguno"], ans: "Diptongo (far-ma-cia)", exp: "La 'i' es átona, por lo que se une a la 'a' formando un diptongo en la última sílaba." },

  // Casos especiales y adverbios en -mente
  { id: 56, block: 0, q: "Los adverbios terminados en '-mente' conservan la tilde si:", opts: ["Siempre la conservan.", "El adjetivo original la tenía.", "Son esdrújulas.", "Nunca la conservan."], ans: "El adjetivo original la tenía.", exp: "Ej: Fácil + mente = Fácilmente. Constante + mente = Constantemente." },
  { id: 57, block: 0, q: "¿Cuál está correctamente acentuada?", opts: ["Rápidamente", "Rapidámente", "Rapidamente", "Rápídamente"], ans: "Rápidamente", exp: "El adjetivo 'rápida' lleva tilde, por lo que 'rápidamente' la conserva en el mismo lugar." },
  { id: 58, block: 0, q: "En palabras compuestas sin guion, ¿qué ocurre con la tilde?", opts: ["Se conservan ambas tildes.", "El primer elemento pierde su tilde; el segundo la conserva si la tenía.", "El primer elemento conserva su tilde.", "Nunca llevan tilde."], ans: "El primer elemento pierde su tilde; el segundo la conserva si la tenía.", exp: "Ej: décimo + séptimo = decimoséptimo. balcón + cesto = baloncesto." },
  { id: 59, block: 0, q: "Si unimos 'así' y 'mismo', obtenemos:", opts: ["asímismo", "asimismo", "ási mismo", "ásímísmó"], ans: "asimismo", exp: "Pierde la tilde del primer elemento y el segundo es grave terminado en vocal, resultando 'asimismo'." },
  { id: 60, block: 0, q: "En palabras compuestas unidas por guion (ej. teórico-práctico):", opts: ["Solo se tilda la última palabra.", "Solo se tilda la primera.", "Cada palabra conserva su tilde original.", "No llevan tilde."], ans: "Cada palabra conserva su tilde original.", exp: "El guion mantiene la independencia ortográfica de ambos elementos." },
  { id: 61, block: 0, q: "La forma verbal 'dame' (da + me) no lleva tilde porque:", opts: ["Es grave terminada en vocal.", "Es un monosílabo.", "Es un pronombre.", "Es aguda."], ans: "Es grave terminada en vocal.", exp: "Al unir el verbo 'da' y el pronombre 'me', se forma una palabra grave terminada en vocal (da-me), que no se tilda." },
  { id: 62, block: 0, q: "La forma 'dáselo' lleva tilde porque:", opts: ["Es grave.", "Es sobreesdrújula.", "Es esdrújula.", "El verbo 'da' lleva tilde."], ans: "Es esdrújula.", exp: "Dá-se-lo tiene la fuerza de voz en la antepenúltima sílaba, por lo que es esdrújula y debe tildarse." },
  { id: 63, block: 0, q: "¿Llevan tilde las palabras mayúsculas?", opts: ["Nunca.", "A veces.", "Siempre, si las reglas lo exigen.", "Solo en títulos."], ans: "Siempre, si las reglas lo exigen.", exp: "La RAE establece que las letras mayúsculas están sujetas a las mismas reglas de acentuación que las minúsculas." },
  { id: 64, block: 0, q: "Las palabras 'qué, quién, cómo, dónde, cuándo':", opts: ["Son siempre graves.", "Nunca llevan tilde.", "Llevan tilde cuando son interrogativas o exclamativas.", "Llevan tilde solo al inicio de oración."], ans: "Llevan tilde cuando son interrogativas o exclamativas.", exp: "Se tildan para diferenciarlas de sus pares relativos/conjunciones." },
  { id: 65, block: 0, q: "Identifica el uso correcto:", opts: ["¿Donde vives?", "Me dijo dónde vivía.", "El lugar dónde nací.", "Dime que te pasa."], ans: "Me dijo dónde vivía.", exp: "'Dónde' lleva tilde por ser una interrogativa indirecta." },

  // ── BLOQUE 2: Uso de Grafías (66–100) ────────────────────────────────────
  // B y V
  { id: 66,  block: 1, q: "Se escriben con B los verbos terminados en:", opts: ["-vir", "-bir (excepto hervir, servir, vivir)", "-ver", "-var"], ans: "-bir (excepto hervir, servir, vivir)", exp: "La regla indica que todos los verbos en 'bir' (escribir, recibir) se escriben con B, salvo esas tres excepciones." },
  { id: 67,  block: 1, q: "Completa: El niño cant___ muy bien. (copretérito)", opts: ["ava", "aba", "ha", "va"], ans: "aba", exp: "Las terminaciones del copretérito de la primera conjugación (-ar) se escriben siempre con 'aba'." },
  { id: 68,  block: 1, q: "¿Cuál de las siguientes palabras está mal escrita?", opts: ["Víbora", "Hervíboro", "Carnívoro", "Omnívoro"], ans: "Hervíboro", exp: "Las palabras terminadas en '-ívoro/a' se escriben con V. Lo correcto es 'Herbívoro'." },
  { id: 69,  block: 1, q: "Después de la consonante 'm', siempre se escribe:", opts: ["v", "b", "c", "s"], ans: "b", exp: "Regla ortográfica: MB (ej. tambor, ambiente, combate)." },
  { id: 70,  block: 1, q: "Después de 'd', 'b' y 'n', siempre se escribe:", opts: ["b", "v", "j", "g"], ans: "v", exp: "Regla ortográfica: NV, DV, BV (ej. invierno, advertir, obvio)." },
  { id: 71,  block: 1, q: "Completa: El gobierno otorgó una sub___ención a la empresa.", opts: ["v", "b", "c", "s"], ans: "v", exp: "Después del prefijo 'sub-', se escribe con 'v' (subvención)." },
  { id: 72,  block: 1, q: "Los adjetivos terminados en -avo, -ave, -evo, -eve, -ivo, -iva se escriben con:", opts: ["b", "v", "h", "w"], ans: "v", exp: "Ejemplos: suave, nuevo, octavo, activo, nociva." },
  { id: 73,  block: 1, q: "La palabra 'basto' con B significa:", opts: ["Extenso o muy grande.", "Tosco, grosero, o un palo de la baraja.", "Del verbo bastar.", "Ninguna de las anteriores."], ans: "Tosco, grosero, o un palo de la baraja.", exp: "'Basto' (con b) es tosco; 'vasto' (con v) es extenso." },
  { id: 74,  block: 1, q: "Los prefijos bi-, bis-, biz- que significan 'dos' se escriben con:", opts: ["v", "b", "p", "d"], ans: "b", exp: "Ejemplos: bilingüe, bisabuelo, bizcocho." },
  { id: 75,  block: 1, q: "El verbo 'ir' en copretérito se escribe:", opts: ["iva, ivas, ivamos", "iba, ibas, íbamos", "hiba, hibas, híbamos", "hiva, hivas, hívamos"], ans: "iba, ibas, íbamos", exp: "Es el único verbo terminado en -ir cuyo copretérito se escribe con 'b'." },

  // C, S y Z
  { id: 76,  block: 1, q: "Los plurales de las palabras terminadas en Z se escriben con:", opts: ["s (peces)", "c (peces)", "z (pezes)", "x (pexes)"], ans: "c (peces)", exp: "La Z cambia a C ante la E y la I (pez → peces, luz → luces)." },
  { id: 77,  block: 1, q: "¿Cuál de estas palabras se escribe con S?", opts: ["Aten__ión", "Aclara__ión", "Pre__ión", "Canc__ión"], ans: "Pre__ión", exp: "Presión. Deriva de 'preso' (palabras afines en -so, -sor, -sivo llevan -sión)." },
  { id: 78,  block: 1, q: "Las terminaciones -ción se usan en sustantivos derivados de palabras terminadas en:", opts: ["-so, -sor", "-to, -tor, -do, -dor", "-ista, -ismo", "-azo, -aza"], ans: "-to, -tor, -do, -dor", exp: "Ejemplo: Canto → Canción, Creador → Creación." },
  { id: 79,  block: 1, q: "Completa: Fue un golpe grandí___imo.", opts: ["c", "z", "x", "s"], ans: "s", exp: "Los adjetivos superlativos terminados en -ísimo/a se escriben siempre con S." },
  { id: 80,  block: 1, q: "Los sustantivos abstractos terminados en -ez, -eza se escriben con:", opts: ["s", "c", "z", "x"], ans: "z", exp: "Ejemplos: honradez, tristeza, pereza." },
  { id: 81,  block: 1, q: "Los aumentativos terminados en -azo, -aza van con:", opts: ["s (golpaso)", "c (golpaco)", "z (golpazo)", "ss (golpasso)"], ans: "z (golpazo)", exp: "Siempre se escriben con Z (ej. pelotazo, manotazo, barcaza)." },
  { id: 82,  block: 1, q: "Verbos terminados en -cir y -ducir se escriben con C, EXCEPTO:", opts: ["Conducir y reducir.", "Asir y toser.", "Decir y predecir.", "Traducir y lucir."], ans: "Asir y toser.", exp: "'Asir' (agarrar) y 'toser' son las excepciones que llevan S." },
  { id: 83,  block: 1, q: "Los adjetivos gentilicios terminados en '-ense' se escriben con:", opts: ["c", "s", "z", "x"], ans: "s", exp: "Ejemplos: mexiquense, canadiense, parisiense." },
  { id: 84,  block: 1, q: "Completa la frase: Le dio un peda___ito de pan.", opts: ["s", "c", "z", "x"], ans: "c", exp: "Los diminutivos en -cito, -cillo se escriben con C (salvo si la palabra original ya tiene S en su última sílaba)." },
  { id: 85,  block: 1, q: "Las terminaciones '-ancia', '-encia' se escriben con C, EXCEPTO:", opts: ["Paciencia y ciencia.", "Ansia y Hortensia.", "Abundancia y carencia.", "Distancia y presencia."], ans: "Ansia y Hortensia.", exp: "'Ansia' y el nombre propio 'Hortensia' son las excepciones escritas con S." },

  // G y J
  { id: 86,  block: 1, q: "Se escriben con G las palabras que tienen la raíz 'geo', que significa:", opts: ["Agua", "Tierra", "Fuego", "Aire"], ans: "Tierra", exp: "Ejemplos: Geografía, Geología, Geometría." },
  { id: 87,  block: 1, q: "Los verbos terminados en -ger y -gir se escriben con G, EXCEPTO:", opts: ["Proteger y elegir.", "Exigir y dirigir.", "Tejer y crujir.", "Fingir y surgir."], ans: "Tejer y crujir.", exp: "'Tejer' y 'crujir' (y sus derivados) son las únicas excepciones y se escriben con J." },
  { id: 88,  block: 1, q: "Las palabras terminadas en -aje y -eje se escriben con:", opts: ["g", "j", "x", "h"], ans: "j", exp: "Ejemplos: Coraje, garaje, hereje, viaje." },
  { id: 89,  block: 1, q: "Completa: La ima___en era muy clara.", opts: ["g", "j", "h", "x"], ans: "g", exp: "Las palabras que contienen la sílaba 'gen' generalmente van con G (imagen, origen, gente)." },
  { id: 90,  block: 1, q: "El pretérito del verbo 'decir' (yo di___e) se escribe con:", opts: ["g", "j", "x", "sh"], ans: "j", exp: "Los verbos cuyo infinitivo no tiene G ni J llevan J en su pretérito (decir → dije, traer → traje)." },
  { id: 91,  block: 1, q: "¿Cuál está mal escrita?", opts: ["Mensaje", "Gente", "Sujeto", "Protejer"], ans: "Protejer", exp: "Lo correcto es 'Proteger' (terminación -ger)." },
  { id: 92,  block: 1, q: "Se escriben con G las palabras terminadas en:", opts: ["-gia, -gio, -gión", "-jia, -jio, -jión", "-xia, -xio, -xión", "Ninguna de las anteriores"], ans: "-gia, -gio, -gión", exp: "Ejemplos: Magia, colegio, religión (excepción: crujía)." },

  // Y y LL
  { id: 93,  block: 1, q: "Las palabras terminadas en -illo e -illa se escriben con:", opts: ["y", "ll", "i", "ly"], ans: "ll", exp: "Ejemplos: Martillo, silla, ardilla, pasillo." },
  { id: 94,  block: 1, q: "El verbo 'caer' en su tiempo pretérito (él ca___ó) se escribe con:", opts: ["y", "ll", "i", "h"], ans: "y", exp: "Los verbos que no tienen LL ni Y en su infinitivo toman la Y para su conjugación (caer → cayó, leer → leyó)." },
  { id: 95,  block: 1, q: "Completa: El pro___ecto fue un éxito.", opts: ["ll", "i", "y", "h"], ans: "y", exp: "Se escribe Y en la sílaba 'yec' (proyecto, inyectar) y después de prefijos ad-, dis-, sub-." },
  { id: 96,  block: 1, q: "¿Qué significa 'cayó' con Y?", opts: ["Del verbo callar (guardar silencio).", "Del verbo caer (irse al suelo).", "Un callo en el pie.", "Ninguna de las anteriores."], ans: "Del verbo caer (irse al suelo).", exp: "'Cayó' es de caer. 'Calló' es de callar." },
  { id: 97,  block: 1, q: "Los verbos terminados en -ullar, -illar, -ellar se escriben con:", opts: ["y", "i", "ll", "h"], ans: "ll", exp: "Ejemplos: Maullar, cepillar, atropellar." },
  { id: 98,  block: 1, q: "¿Cuál de estas palabras está CORRECTAMENTE escrita?", opts: ["Hoyo", "Hollo", "Oyo", "Ollo"], ans: "Hoyo", exp: "'Hoyo' (hueco, cavidad) se escribe con H y con Y." },
  { id: 99,  block: 1, q: "Al final de palabra, si el sonido es 'i' y forma diptongo, se escribe con:", opts: ["i", "y", "ll", "e"], ans: "y", exp: "Ejemplos: Hoy, ley, buey, rey." },
  { id: 100, block: 1, q: "El plural de 'rey' se escribe:", opts: ["Reies", "Reyes", "Relles", "Reis"], ans: "Reyes", exp: "Las palabras terminadas en Y pluralizan añadiendo -es y manteniendo la Y." },
];

const BLOCKS = [
  { label: "Acentuación",    color: C.blue,   range: [1, 65]  },
  { label: "Uso de Grafías", color: C.purple, range: [66, 100] },
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

export default function OrtografiaGrafias() {
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
    const secs = qs.length * 30;
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

      <div style={{
        background: C.surface, borderBottom: `1px solid ${C.border}`,
        padding: "44px 24px 32px", textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: `linear-gradient(${C.blue} 1px,transparent 1px),linear-gradient(90deg,${C.blue} 1px,transparent 1px)`,
          backgroundSize: "44px 44px",
        }}/>
        <div style={{ position: "relative" }}>
          <span style={{
            display: "inline-block", background: C.blue + "22", color: C.blue,
            borderRadius: 99, padding: "3px 14px", fontSize: 11,
            fontWeight: 700, letterSpacing: 2, textTransform: "uppercase",
            marginBottom: 14, fontFamily: "'DM Sans',sans-serif",
          }}>FactoRizando · Español · Universidad</span>
          <h1 style={{
            fontSize: "clamp(20px,4vw,34px)", fontWeight: 700, color: C.text,
            letterSpacing: "-1px", lineHeight: 1.1, marginBottom: 10,
            fontFamily: "'DM Sans',sans-serif",
          }}>
            <span style={{ color: C.blue }}>Ortografía</span> y <span style={{ color: C.purple }}>Grafías</span>
          </h1>
          <p style={{ color: C.muted, fontSize: 14, maxWidth: 500, margin: "0 auto 22px", fontFamily: "'DM Sans',sans-serif" }}>
            100 reactivos · Simulador UNAM · 30 s por reactivo
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 36, flexWrap: "wrap", fontFamily: "'DM Sans',sans-serif" }}>
            {[{ label: "Reactivos", val: 100 }, { label: "Bloques", val: 2 }, { label: "Tiempo (todo)", val: "50 min" }].map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 20, fontWeight: 900, color: C.text, letterSpacing: "-1px" }}>{s.val}</div>
                <div style={{ fontSize: 10, color: C.muted, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "32px 16px" }}>
        <p style={{ color: C.muted, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12, fontFamily: "'DM Sans',sans-serif" }}>
          Examen completo
        </p>
        <button onClick={() => startExam("all")} style={{
          width: "100%", background: C.surface, border: `1px solid ${C.border}`,
          borderRadius: 14, padding: "22px 16px", cursor: "pointer",
          textAlign: "center", marginBottom: 28, fontFamily: "'DM Sans',sans-serif", transition: "all 0.2s",
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = C.blue; e.currentTarget.style.background = C.blue + "11"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.surface; }}
        >
          <div style={{ fontSize: 28, marginBottom: 6 }}>📋</div>
          <div style={{ color: C.text, fontWeight: 700, fontSize: 15 }}>Todos los reactivos</div>
          <div style={{ color: C.muted, fontSize: 12, marginTop: 4 }}>100 reactivos en orden aleatorio · 50 min</div>
        </button>

        <p style={{ color: C.muted, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12, fontFamily: "'DM Sans',sans-serif" }}>
          O elige un bloque
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {BLOCKS.map((bl, i) => {
            const count = bl.range[1] - bl.range[0] + 1;
            return (
              <button key={i} onClick={() => startExam(`block-${i}`)} style={{
                background: C.surface, border: `1px solid ${bl.color}44`,
                borderRadius: 12, padding: "20px 16px", cursor: "pointer",
                textAlign: "center", fontFamily: "'DM Sans',sans-serif", transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = bl.color + "18"; e.currentTarget.style.borderColor = bl.color; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.surface; e.currentTarget.style.borderColor = bl.color + "44"; }}
              >
                <div style={{ color: bl.color, fontWeight: 700, fontSize: 14 }}>{bl.label}</div>
                <div style={{ color: C.muted, fontSize: 12, marginTop: 4 }}>{count} reactivos · {Math.round(count * 0.5)} min</div>
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
    const msg   = pct >= 90 ? "¡Excelente! Estás listo para el examen." : pct >= 75 ? "¡Muy bien! Un pequeño repaso y estarás listo." : pct >= 50 ? "Sigue practicando." : "Necesitas repasar las reglas.";
    const displayQs = filter === "correct" ? queue.filter(q => answers[q.id] === q.ans)
                    : filter === "wrong"   ? queue.filter(q => answers[q.id] && answers[q.id] !== q.ans)
                    : queue;

    return (
      <div style={{ minHeight: "100vh", background: C.bg, paddingBottom: 64 }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}`}</style>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "32px 16px" }}>

          <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
            <button onClick={() => setMode("menu")} style={{
              background: C.surface, color: C.dim, border: `1px solid ${C.border}`,
              borderRadius: 12, padding: "12px 28px", fontSize: 14, fontWeight: 600,
              fontFamily: "'DM Sans',sans-serif", cursor: "pointer",
            }}>← Menú</button>
            <button onClick={() => startExam(examMode)} style={{
              background: `linear-gradient(135deg,${C.blue},${C.purple})`,
              color: "#fff", border: "none", borderRadius: 12, padding: "12px 28px",
              fontSize: 14, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", cursor: "pointer",
            }}>↺ Repetir</button>
          </div>

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

          <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
            {[["all", "Todas"], ["correct", `✓ Correctas (${score})`], ["wrong", `✗ Incorrectas (${total - score})`]].map(([f, label]) => (
              <button key={f} onClick={() => setFilter(f)} style={{
                padding: "6px 14px", borderRadius: 99, fontSize: 12, fontWeight: 700,
                cursor: "pointer", border: "none",
                background: filter === f ? C.blue : C.surface,
                color: filter === f ? "#fff" : C.muted,
                transition: "all 0.2s", fontFamily: "'DM Sans',sans-serif",
              }}>{label}</button>
            ))}
          </div>

          {displayQs.map(q => {
            const bl  = getBlock(q.id);
            const sel = answers[q.id];
            return (
              <div key={q.id} style={{
                background: C.surface, border: `1px solid ${C.border}`,
                borderRadius: 14, padding: "20px 24px", marginBottom: 12,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <span style={{ background: bl.color + "1a", color: bl.color, borderRadius: 6, padding: "2px 10px", fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif" }}>{bl.label}</span>
                  <span style={{ marginLeft: "auto", color: C.muted, fontSize: 12, fontFamily: "'DM Sans',sans-serif" }}>#{q.id}</span>
                </div>
                <p style={{ color: C.text, fontSize: 14, fontWeight: 600, marginBottom: 10, lineHeight: 1.55, fontFamily: "'DM Sans',sans-serif" }}>{q.q}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 10 }}>
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
                <div style={{ padding: "8px 12px", background: C.blue + "0e", borderRadius: 8, border: `1px solid ${C.blue}22` }}>
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

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
          <div style={{ fontFamily: "'DM Sans',sans-serif" }}>
            <span style={{ color: C.muted, fontSize: 13 }}>Reactivo </span>
            <span style={{ color: C.text, fontWeight: 700 }}>{current + 1}</span>
            <span style={{ color: C.muted }}> / {queue.length}</span>
            <span style={{ color: C.muted, fontSize: 12, marginLeft: 10 }}>({answered} respondidos)</span>
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

        <div style={{ background: C.border, borderRadius: 99, height: 4, overflow: "hidden", marginBottom: 20 }}>
          <div style={{ height: "100%", width: `${prog}%`, background: `linear-gradient(90deg,${C.blue},${C.purple})`, transition: "width 0.3s", borderRadius: 99 }}/>
        </div>

        <div style={{ marginBottom: 12 }}>
          <span style={{ background: bl.color + "1a", color: bl.color, borderRadius: 6, padding: "2px 10px", fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif" }}>{bl.label}</span>
          <span style={{ marginLeft: 10, color: C.muted, fontSize: 12, fontFamily: "'DM Sans',sans-serif" }}>#{q.id} / 100</span>
        </div>

        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "22px 26px", marginBottom: 16 }}>
          <p style={{ color: C.text, fontSize: 16, fontWeight: 600, lineHeight: 1.6, fontFamily: "'DM Sans',sans-serif", margin: 0 }}>{q.q}</p>
        </div>

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
                borderRadius: 9, padding: "11px 14px", fontSize: 14, fontWeight: 500,
                cursor: confirmed ? "default" : "pointer", textAlign: "left",
                transition: "all 0.15s", outline: "none", fontFamily: "'DM Sans',sans-serif", lineHeight: 1.5,
              }}>
                {confirmed && isOk ? "✓ " : ""}{confirmed && isSel && !isOk ? "✗ " : ""}{opt}
              </button>
            );
          })}
        </div>

        {confirmed && (
          <div style={{
            background: C.blue + "0e", border: `1px solid ${C.blue}22`,
            borderRadius: 10, padding: "12px 16px", marginBottom: 16,
          }}>
            <span style={{ color: C.blue, fontSize: 12, fontWeight: 700, fontFamily: "'DM Sans',sans-serif" }}>💡 Regla ortográfica: </span>
            <span style={{ color: C.dim, fontSize: 13, fontFamily: "'DM Sans',sans-serif" }}>{q.exp}</span>
          </div>
        )}

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
              background: selected ? `linear-gradient(135deg,${C.blue},${C.purple})` : C.surface,
              color: selected ? "#fff" : C.muted, border: "none", borderRadius: 10,
              cursor: selected ? "pointer" : "not-allowed",
              boxShadow: selected ? `0 4px 20px ${C.blue}33` : "none",
              fontFamily: "'DM Sans',sans-serif", transition: "all 0.2s",
            }}>Confirmar respuesta</button>
          ) : (
            <button onClick={goNext} style={{
              padding: "10px 28px", fontSize: 14, fontWeight: 700,
              background: `linear-gradient(135deg,${C.blue},${C.purple})`,
              color: "#fff", border: "none", borderRadius: 10,
              cursor: "pointer", boxShadow: `0 4px 20px ${C.blue}33`,
              fontFamily: "'DM Sans',sans-serif",
            }}>
              {current === queue.length - 1 ? "Ver resultados →" : "Siguiente →"}
            </button>
          )}
        </div>

        <div style={{ marginTop: 24, background: C.surface, borderRadius: 12, padding: 16, border: `1px solid ${C.border}` }}>
          <p style={{ color: C.muted, fontSize: 11, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1, fontFamily: "'DM Sans',sans-serif" }}>Navegador de reactivos</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
            {queue.map((fq, i) => {
              const ans = answers[fq.id], isCurr = i === current;
              let bg = C.surface, co = C.muted;
              if (isCurr)              { bg = C.blue;          co = "#fff"; }
              else if (ans === fq.ans) { bg = C.teal + "33";   co = C.teal; }
              else if (ans)            { bg = C.crimson + "33"; co = C.crimson; }
              return (
                <button key={fq.id} onClick={() => { setCurrent(i); setSelected(answers[fq.id] || null); setConfirmed(!!answers[fq.id]); }} style={{
                  width: 28, height: 28, borderRadius: 6, background: bg, color: co,
                  border: isCurr ? `2px solid ${C.blue}` : `1px solid ${C.border}`,
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
