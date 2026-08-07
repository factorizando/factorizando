// Silabificación del español, para el taller de decodificación.
//
// Los bancos declaran solo la palabra; las sílabas se calculan aquí. Eso es
// deliberado: el maestro agrega "amortiguador" escribiendo una línea, sin
// tener que separarla a mano y sin poder equivocarse al hacerlo. Un banco
// puede pasar `silabas` explícitas para forzar un caso raro (ver README).
//
// Reglas implementadas (ortografía, no fonética):
//   · ch, ll y rr cuentan como una sola consonante.
//   · Los grupos consonante+l/r no se parten (bl, br, cl, cr, dr, fl, fr,
//     gl, gr, pl, pr, tr y tl — en México "a-tle-ta", no "at-le-ta").
//   · Dos vocales forman diptongo salvo que ambas sean fuertes o que la
//     débil lleve tilde: "bu-jí-a" pero "bie-la".

const DIGRAFOS = ["ch", "ll", "rr"];
const INSEPARABLES = new Set([
  "bl", "br", "cl", "cr", "dr", "fl", "fr",
  "gl", "gr", "kl", "kr", "pl", "pr", "tr", "tl",
]);

const FUERTES = "aeoáéó";
const DEBILES = "iuü";
const DEBILES_TILDE = "íú";

const esVocal = (c) => FUERTES.includes(c) || DEBILES.includes(c) || DEBILES_TILDE.includes(c);

// Dos vocales seguidas se separan (hiato) si las dos son fuertes, si la débil
// lleva tilde, o si son la misma vocal repetida: "le-er", "ba-úl", "chi-i-ta".
function hayHiato(a, b) {
  if (DEBILES_TILDE.includes(a) || DEBILES_TILDE.includes(b)) return true;
  if (FUERTES.includes(a) && FUERTES.includes(b)) return true;
  return a === b;
}

// Parte la palabra en "letras", donde ch/ll/rr son una sola. La `y` es
// consonante salvo al final de palabra ("rey"), donde cierra el diptongo.
function letras(palabra) {
  const out = [];
  for (let i = 0; i < palabra.length; i++) {
    const par = palabra.slice(i, i + 2);
    if (DIGRAFOS.includes(par)) {
      out.push(par);
      i++;
    } else {
      out.push(palabra[i]);
    }
  }
  return out;
}

// Cuántas consonantes del bloque intermedio se quedan con la sílaba anterior.
function corteEntreNucleos(bloque) {
  const n = bloque.length;
  if (n === 0) return 0;                       // hiato: la-e
  if (n === 1) return 0;                       // la consonante abre la siguiente
  if (n === 2) return INSEPARABLES.has(bloque.join("")) ? 0 : 1;
  if (n === 3) return INSEPARABLES.has(bloque.slice(1).join("")) ? 1 : 2;
  return 2;                                    // cuatro o más: dos y dos
}

export function silabificar(palabra) {
  const original = (palabra || "").trim();
  if (!original) return [];

  const bajas = original.toLowerCase();
  const ls = letras(bajas);
  const lsOriginal = letras(original);

  // 1. Núcleos: grupos de vocales que suenan juntas.
  const nucleos = [];
  for (let i = 0; i < ls.length; i++) {
    if (!esVocal(ls[i])) continue;
    const inicio = i;
    // La `y` final tras vocal se pega al núcleo ("con-voy").
    while (
      i + 1 < ls.length &&
      esVocal(ls[i + 1]) &&
      !hayHiato(ls[i], ls[i + 1])
    ) i++;
    if (i + 1 === ls.length - 1 && ls[i + 1] === "y") i++;
    nucleos.push([inicio, i]);
  }
  if (nucleos.length <= 1) return [original];

  // 2. Entre cada par de núcleos, repartir las consonantes.
  const cortes = [];
  for (let k = 0; k < nucleos.length - 1; k++) {
    const desde = nucleos[k][1] + 1;
    const hasta = nucleos[k + 1][0];
    const bloque = ls.slice(desde, hasta);
    cortes.push(desde + corteEntreNucleos(bloque));
  }

  // 3. Cortar sobre las letras originales para no perder mayúsculas ni tildes.
  const silabas = [];
  let previo = 0;
  for (const corte of cortes) {
    silabas.push(lsOriginal.slice(previo, corte).join(""));
    previo = corte;
  }
  silabas.push(lsOriginal.slice(previo).join(""));
  return silabas.filter(Boolean);
}

// Las sílabas de una entrada del banco: respeta el override si viene.
export function silabasDe(entrada) {
  if (entrada?.silabas?.length) return entrada.silabas;
  return silabificar(entrada?.palabra ?? entrada);
}
