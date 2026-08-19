// Generadores de acertijos de matemáticas.
//
// Nada de listas fijas: cada acertijo se arma al vuelo dentro del rango de su
// grado, así que repetir un nivel no es repetir el examen. Un generador por
// tema; el grado entra como parámetro y es lo único que mueve la dificultad.
//
// Todos devuelven la misma forma:
//   { tipo: "numero" | "opciones", enunciado, respuesta, opciones?, figura?,
//     explicacion, clave }
//
// La `explicacion` no repite la respuesta: cuenta **cómo se llega**, porque es
// lo único que el jugador se lleva cuando falla. Y el enunciado usa el mundo
// donde está parado —la plaza, las calles, los faroles— para que el acertijo no
// se sienta una pausa del juego sino parte de él.
import { entero, elegir, barajar } from "../../azar.js";

// ── Suma y resta agrupando centenas, decenas y unidades ───────────────────
const COSAS = [
  { cosa: "faroles", lugar: "la plaza", ca: "Cuántos" },
  { cosa: "ladrillos", lugar: "la muralla", ca: "Cuántos" },
  { cosa: "macetas", lugar: "el mercado", ca: "Cuántas" },
  { cosa: "monedas", lugar: "el cofre", ca: "Cuántas" },
  { cosa: "libros", lugar: "la biblioteca", ca: "Cuántos" },
];

export function sumaResta(grado) {
  const { cosa, lugar, ca } = elegir(COSAS);
  const resta = grado >= 4 && Math.random() < 0.4;

  if (resta) {
    // Sin préstamo: la resta también se agrupa por columnas.
    const c = entero(3, 8), d = entero(3, 8), u = entero(3, 8);
    const a = c * 100 + d * 10 + u;
    const c2 = entero(1, c - 1), d2 = entero(1, d - 1), u2 = entero(1, u - 1);
    const b = c2 * 100 + d2 * 10 + u2;
    return {
      tipo: "numero",
      enunciado: `En ${lugar} había ${a} ${cosa} y se llevaron ${b}. ¿${ca} quedaron?`,
      respuesta: a - b,
      figura: { tipo: "agrupacion", props: { a, b, signo: "−" } },
      explicacion: `Por columnas: ${c}00 − ${c2}00 = ${(c - c2) * 100}, ` +
        `${d}0 − ${d2}0 = ${(d - d2) * 10}, ${u} − ${u2} = ${u - u2}.`,
      clave: `sr:${a}-${b}`,
    };
  }

  // Suma. En 3.º nunca hay que llevar: la agrupación se ve limpia.
  const llevada = grado >= 4;
  const u1 = entero(1, llevada ? 8 : 4), u2 = entero(1, llevada ? 8 : 9 - u1);
  const d1 = entero(1, llevada ? 8 : 4), d2 = entero(1, llevada ? 8 : 9 - d1);
  const c1 = entero(1, 4), c2 = entero(1, 4);
  const a = c1 * 100 + d1 * 10 + u1;
  const b = c2 * 100 + d2 * 10 + u2;
  return {
    tipo: "numero",
    enunciado: `En ${lugar} hay ${a} ${cosa} y llegan ${b} más. ¿${ca} hay ahora?`,
    respuesta: a + b,
    figura: { tipo: "agrupacion", props: { a, b, signo: "+" } },
    explicacion: `Junta lo del mismo tamaño: ${c1}00 + ${c2}00 = ${(c1 + c2) * 100}, ` +
      `${d1}0 + ${d2}0 = ${(d1 + d2) * 10}, ${u1} + ${u2} = ${u1 + u2}.`,
    clave: `sr:${a}+${b}`,
  };
}

// ── Multiplicar es sumar el mismo grupo varias veces ──────────────────────
// El género va escrito: "en cada una van 3 costales" y "¿cuántos costales?"
// no se resuelven solos, y una concordancia mal hecha delante de un niño que
// está aprendiendo clases de palabra es justo lo que no queremos.
const GRUPOS = [
  { envase: "cajas", ea: "una", cosa: "manzanas", ca: "Cuántas" },
  { envase: "carretas", ea: "una", cosa: "costales", ca: "Cuántos" },
  { envase: "mesas", ea: "una", cosa: "platos", ca: "Cuántos" },
  { envase: "estantes", ea: "uno", cosa: "frascos", ca: "Cuántos" },
  { envase: "jaulas", ea: "una", cosa: "palomas", ca: "Cuántas" },
];

export function multiplicacion(grado) {
  const { envase, ea, cosa, ca } = elegir(GRUPOS);
  // En 4.º entra el factor de dos cifras, que es donde sirve descomponer.
  const dosCifras = grado >= 4 && Math.random() < 0.35;
  const grupos = dosCifras ? entero(3, 6) : entero(2, grado >= 4 ? 9 : 5);
  const porGrupo = dosCifras ? entero(11, 19) : entero(2, grado >= 4 ? 9 : 5);

  const explicacion = dosCifras
    ? `Parte el ${porGrupo}: ${grupos} × 10 = ${grupos * 10} y ${grupos} × ${porGrupo - 10} = ` +
      `${grupos * (porGrupo - 10)}. Júntalos.`
    : `Es sumar ${porGrupo} ${grupos} veces: ${Array.from({ length: Math.min(grupos, 5) }, () => porGrupo).join(" + ")}` +
      `${grupos > 5 ? " + …" : ""}.`;

  return {
    tipo: "numero",
    enunciado: `Pasan ${grupos} ${envase} y en cada ${ea} van ${porGrupo} ${cosa}. ¿${ca} ${cosa} en total?`,
    respuesta: grupos * porGrupo,
    figura: { tipo: "grupos", props: { grupos, porGrupo } },
    explicacion,
    clave: `mult:${grupos}x${porGrupo}`,
  };
}

// ── La recta numérica ─────────────────────────────────────────────────────
export function rectaNumerica(grado) {
  if (grado <= 4) {
    const paso = elegir([5, 10]);
    const fin = paso * entero(6, 10);
    const marca = paso * entero(1, fin / paso - 1);
    return {
      tipo: "numero",
      enunciado: "¿Qué número marca la bandera en la recta?",
      respuesta: marca,
      figura: { tipo: "recta", props: { inicio: 0, fin, paso, marca } },
      explicacion: `Las marcas van de ${paso} en ${paso}: cuenta desde el 0 y llevas ${marca / paso} brincos.`,
      clave: `recta:${fin}:${marca}`,
    };
  }
  // 5.º y 6.º: la recta se parte en décimos, y la bandera cae entre dos enteros.
  const entera = entero(1, 8);
  const decima = entero(1, 9);
  const marca = Number((entera + decima / 10).toFixed(1));
  return {
    tipo: "numero",
    enunciado: "¿Qué número marca la bandera? Escríbelo sin el punto (por ejemplo, 3.4 se escribe 34).",
    respuesta: Math.round(marca * 10),
    figura: { tipo: "recta", props: { inicio: entera, fin: entera + 1, paso: 0.1, marca, decimales: 1 } },
    explicacion: `Entre ${entera} y ${entera + 1} hay 10 partes iguales; la bandera está en la ${decima}.`,
    clave: `recta:dec:${marca}`,
  };
}

// ── Planos, mapas viales y trayectoria ────────────────────────────────────
// La ruta se arma como una caminata de verdad —esquina por esquina— y no
// sorteando puntos: así siempre es un camino posible por las calles.
function caminata(ancho, alto, pasos) {
  const ruta = [[entero(0, ancho), entero(0, alto)]];
  for (let i = 0; i < pasos; i++) {
    const [x, y] = ruta[ruta.length - 1];
    const opciones = [];
    if (x < ancho) opciones.push([x + 1, y]);
    if (x > 0) opciones.push([x - 1, y]);
    if (y < alto) opciones.push([x, y + 1]);
    if (y > 0) opciones.push([x, y - 1]);
    const siguiente = elegir(opciones.filter(([nx, ny]) =>
      !ruta.some(([px, py]) => px === nx && py === ny)) || opciones);
    if (!siguiente) break;
    ruta.push(siguiente);
  }
  return ruta;
}

export function planosTrayectorias(grado) {
  const ancho = 5, alto = 4;

  if (grado <= 4) {
    const ruta = caminata(ancho, alto, entero(5, 8));
    return {
      tipo: "numero",
      enunciado: "El cartero siguió la ruta marcada. ¿Cuántas cuadras caminó?",
      respuesta: ruta.length - 1,
      figura: { tipo: "croquis", props: { ancho, alto, ruta } },
      explicacion: "Cada tramo entre dos esquinas es una cuadra: cuéntalos uno por uno.",
      clave: `ruta:${ruta.length}:${ruta[0].join("")}`,
    };
  }

  // 5.º y 6.º: ya no se cuenta la ruta dibujada, se calcula la más corta.
  const a = [entero(0, ancho), entero(0, alto)];
  let b = [entero(0, ancho), entero(0, alto)];
  while (Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) < 3) {
    b = [entero(0, ancho), entero(0, alto)];
  }
  const dx = Math.abs(a[0] - b[0]), dy = Math.abs(a[1] - b[1]);
  return {
    tipo: "numero",
    enunciado: "¿Cuál es el camino más corto de la casa a la escuela, en cuadras?",
    respuesta: dx + dy,
    figura: { tipo: "croquis", props: { ancho, alto, puntos: { a, b } } },
    explicacion: `Hay que avanzar ${dx} de lado y ${dy} de subida o bajada. Cualquier ruta que ` +
      "no dé vueltas de más mide lo mismo.",
    clave: `corto:${a.join("")}-${b.join("")}`,
  };
}

// ── Perímetro y área ──────────────────────────────────────────────────────
export function perimetroArea(grado) {
  const ancho = entero(3, 12), alto = entero(2, 9);

  if (grado <= 4) {
    return {
      tipo: "numero",
      enunciado: `Hay que poner reja alrededor de un patio de ${ancho} m por ${alto} m. ¿Cuántos metros de reja?`,
      respuesta: 2 * (ancho + alto),
      figura: { tipo: "rectangulo", props: { ancho, alto, resaltar: "borde" } },
      explicacion: `Es toda la vuelta, y los lados se repiten de dos en dos: (${ancho} + ${alto}) × 2.`,
      clave: `per:${ancho}x${alto}`,
    };
  }

  if (Math.random() < 0.5) {
    return {
      tipo: "numero",
      enunciado: `¿Cuántos metros cuadrados de pasto lleva un patio de ${ancho} m por ${alto} m?`,
      respuesta: ancho * alto,
      figura: { tipo: "rectangulo", props: { ancho, alto, resaltar: "relleno" } },
      explicacion: `El área es lo que cabe adentro: ${alto} filas de ${ancho} cuadros.`,
      clave: `area:${ancho}x${alto}`,
    };
  }

  // Triángulo: la mitad del rectángulo que lo envuelve, y el dibujo lo enseña.
  const base = entero(4, 12), altura = elegir([2, 4, 6, 8]);
  return {
    tipo: "numero",
    enunciado: `Un jardín triangular mide ${base} m de base y ${altura} m de altura. ¿Cuántos metros cuadrados tiene?`,
    respuesta: (base * altura) / 2,
    figura: { tipo: "triangulo", props: { base, altura } },
    explicacion: `El triángulo es la mitad del rectángulo de ${base} × ${altura} = ${base * altura}.`,
    clave: `tri:${base}x${altura}`,
  };
}



// Distractores para cuando un acertijo numérico se quiere de opción múltiple:
// se construyen con los errores típicos, no con números al azar.
export function opcionesAlrededor(respuesta) {
  const candidatos = new Set([respuesta]);
  [respuesta + 1, respuesta - 1, respuesta + 10, Math.max(1, respuesta - 10), respuesta * 2]
    .forEach((n) => { if (n > 0 && candidatos.size < 4) candidatos.add(n); });
  return barajar([...candidatos]);
}

// ═══════════════════════════════════════════════════════════════════════════
// Temas de 5.º y 6.º
//
// Varios de estos se contestan mejor eligiendo que tecleando —comparar dos
// fracciones, decir cuál número es múltiplo de 7— y por eso devuelven
// `tipo: "opciones"`. Regla para esos: los distractores salen de los **errores
// típicos**, nunca de números al azar, y las opciones se revuelven aquí mismo
// para que la correcta no caiga siempre en el mismo lugar.
// ═══════════════════════════════════════════════════════════════════════════

// Arma un reactivo de opción múltiple ya revuelto a partir de la respuesta
// correcta y sus distractores.
function opcionMultiple({ enunciado, correcta, distractores, explicacion, clave, figura }) {
  const unicas = [];
  [correcta, ...distractores].forEach((v) => {
    const texto = String(v);
    if (!unicas.includes(texto)) unicas.push(texto);
  });
  const revueltas = barajar(unicas.slice(0, 4).map((texto) => ({ texto, ok: texto === String(correcta) })));
  return {
    tipo: "opciones",
    enunciado,
    opciones: revueltas.map((o) => o.texto),
    correcta: revueltas.findIndex((o) => o.ok),
    respuesta: String(correcta),
    figura: figura || null,
    explicacion,
    clave,
  };
}

// ── División: la vuelta de la multiplicación (mundo 2) ────────────────────
export function divisionExacta(grado) {
  const divisor = entero(2, grado >= 5 ? 12 : 9);
  const cociente = entero(2, grado >= 5 ? 12 : 9);
  const total = divisor * cociente;

  // En 5.º entra la pregunta al revés, que es la que de verdad enseña que una
  // operación es la otra caminada de vuelta.
  if (grado >= 5 && Math.random() < 0.45) {
    return {
      tipo: "numero",
      enunciado: `¿Por cuánto hay que multiplicar ${divisor} para llegar a ${total}?`,
      respuesta: cociente,
      explicacion: `Es la misma pregunta que ${total} ÷ ${divisor}: multiplicar y dividir son el mismo camino de ida y de vuelta.`,
      clave: `inv:${divisor}x${cociente}`,
    };
  }

  return {
    tipo: "numero",
    enunciado: `Hay ${total} monedas para repartir entre ${divisor} cofres, todos con lo mismo. ¿Cuántas quedan en cada cofre?`,
    respuesta: cociente,
    explicacion: `Busca qué número por ${divisor} da ${total}: ${divisor} × ${cociente} = ${total}.`,
    clave: `div:${total}/${divisor}`,
  };
}

// ── De fracción a decimal y de vuelta (mundo 2) ───────────────────────────
const EQUIVALENCIAS = [
  ["1/2", "0.5"], ["1/4", "0.25"], ["3/4", "0.75"], ["1/5", "0.2"],
  ["2/5", "0.4"], ["3/5", "0.6"], ["1/10", "0.1"], ["7/10", "0.7"], ["1/100", "0.01"],
];

export function fraccionDecimal() {
  const [fraccion, decimal] = elegir(EQUIVALENCIAS);
  const alDerecho = Math.random() < 0.5;
  const otros = EQUIVALENCIAS.filter(([f]) => f !== fraccion);

  if (alDerecho) {
    return opcionMultiple({
      enunciado: `¿Cómo se escribe ${fraccion} con punto decimal?`,
      correcta: decimal,
      distractores: barajar(otros).slice(0, 3).map(([, d]) => d),
      explicacion: `${fraccion} es lo mismo que ${decimal}: son las dos caras del mismo número.`,
      clave: `fd:${fraccion}`,
    });
  }
  return opcionMultiple({
    enunciado: `¿Qué fracción vale lo mismo que ${decimal}?`,
    correcta: fraccion,
    distractores: barajar(otros).slice(0, 3).map(([f]) => f),
    explicacion: `${decimal} es ${fraccion}: la misma cantidad escrita de otra manera.`,
    clave: `df:${decimal}`,
  });
}

// ── Decimales (mundo 2) ───────────────────────────────────────────────────
export function decimales(grado) {
  if (grado <= 5) {
    // Comparar. La trampa es la de siempre: 0.65 tiene más cifras que 0.7 y
    // parece más grande.
    const a = Number((entero(1, 9) / 10).toFixed(2));
    const b = Number((entero(11, 99) / 100).toFixed(2));
    if (a === b) return decimales(grado);
    const mayor = a > b ? a : b;
    return opcionMultiple({
      enunciado: `¿Cuál número es mayor, ${a} o ${b}?`,
      correcta: mayor,
      distractores: [a === mayor ? b : a],
      explicacion: `Compara primero los décimos: ${String(a).split(".")[1][0]} contra ${String(b).split(".")[1][0]}. ` +
        "Tener más cifras no hace más grande a un decimal.",
      clave: `dec:${a}v${b}`,
    });
  }
  // Sumar decimales de una cifra: se contesta en décimos para no pelear con
  // el punto en el teclado.
  const a = entero(11, 89) / 10;
  const b = entero(11, 89) / 10;
  const suma = Number((a + b).toFixed(1));
  return {
    tipo: "numero",
    enunciado: `¿Cuánto es ${a} + ${b}? Escríbelo sin el punto (por ejemplo, 4.2 se escribe 42).`,
    respuesta: Math.round(suma * 10),
    explicacion: `Alinea los puntos: ${a} + ${b} = ${suma}. Los enteros con los enteros y los décimos con los décimos.`,
    clave: `sd:${a}+${b}`,
  };
}

// ── Múltiplos y divisores (mundo 3) ───────────────────────────────────────
export function multiplosDivisores() {
  const base = elegir([3, 4, 6, 7, 8, 9]);
  if (Math.random() < 0.5) {
    const multiplo = base * entero(3, 9);
    const distractores = [multiplo + 1, multiplo - 1, multiplo + base - 1]
      .filter((n) => n > 0 && n % base !== 0);
    return opcionMultiple({
      enunciado: `¿Cuál de estos números es múltiplo de ${base}?`,
      correcta: multiplo,
      distractores,
      explicacion: `${multiplo} cae justo en la tabla del ${base}: ${base} × ${multiplo / base} = ${multiplo}. Los otros se pasan o no llegan.`,
      clave: `mul:${base}:${multiplo}`,
    });
  }
  const numero = base * entero(2, 6);
  const divisores = [];
  for (let d = 1; d <= numero; d++) if (numero % d === 0) divisores.push(d);
  return {
    tipo: "numero",
    enunciado: `¿Entre cuántos números distintos se puede repartir ${numero} sin que sobre nada?`,
    respuesta: divisores.length,
    explicacion: `Son sus divisores: ${divisores.join(", ")}. Cada uno reparte ${numero} en partes iguales.`,
    clave: `divs:${numero}`,
  };
}

// ── Sucesiones (mundo 3) ──────────────────────────────────────────────────
export function series(grado) {
  if (grado <= 5) {
    // Progresión aritmética: se suma siempre lo mismo.
    const inicio = entero(2, 15);
    const paso = entero(2, 9);
    const vistos = Array.from({ length: 4 }, (_, i) => inicio + i * paso);
    return {
      tipo: "numero",
      enunciado: `¿Qué número sigue? ${vistos.join(", ")}, …`,
      respuesta: inicio + 4 * paso,
      explicacion: `Cada paso suma ${paso}: de ${vistos[0]} a ${vistos[1]} hay ${paso}, y así hasta el final.`,
      clave: `ari:${inicio}:${paso}`,
    };
  }
  // Progresión geométrica: se multiplica siempre por lo mismo.
  const razon = elegir([2, 3]);
  const inicio = entero(1, razon === 2 ? 6 : 3);
  const vistos = Array.from({ length: 4 }, (_, i) => inicio * razon ** i);
  return {
    tipo: "numero",
    enunciado: `¿Qué número sigue? ${vistos.join(", ")}, …`,
    respuesta: inicio * razon ** 4,
    explicacion: `Aquí no se suma: cada número es el anterior por ${razon}. ${vistos[2]} × ${razon} = ${vistos[3]}.`,
    clave: `geo:${inicio}:${razon}`,
  };
}

// ── Promedio y moda (mundo 3) ─────────────────────────────────────────────
const DIAS = ["lunes", "martes", "miércoles", "jueves", "viernes"];

export function promedio() {
  const cuantos = elegir([3, 4, 5]);
  // Se arma desde el promedio hacia atrás para que dé un número redondo: la
  // idea es entender qué es promediar, no pelear con el residuo.
  const media = entero(4, 12);
  const datos = Array.from({ length: cuantos }, () => 0);
  let resto = 0;
  for (let i = 0; i < cuantos - 1; i++) {
    const d = entero(Math.max(1, media - 3), media + 3);
    datos[i] = d;
    resto += d - media;
  }
  datos[cuantos - 1] = media - resto;
  if (datos[cuantos - 1] < 1) return promedio();

  return {
    tipo: "numero",
    enunciado: `En ${cuantos} días vendió ${datos.join(", ")} panes. ¿Cuál fue el promedio diario?`,
    respuesta: media,
    explicacion: `Se juntan todos (${datos.join(" + ")} = ${media * cuantos}) y se reparten entre los ${cuantos} días.`,
    clave: `prom:${datos.join("-")}`,
  };
}

export function moda() {
  const repetido = entero(2, 9);
  const veces = entero(3, 4);
  const otros = barajar([1, 2, 3, 4, 5, 6, 7, 8, 9].filter((n) => n !== repetido)).slice(0, 3);
  const datos = barajar([...Array.from({ length: veces }, () => repetido), ...otros]);
  return {
    tipo: "numero",
    enunciado: `Estos son los goles de cada partido: ${datos.join(", ")}. ¿Cuál es la moda?`,
    respuesta: repetido,
    explicacion: `La moda es el dato que más se repite: el ${repetido} aparece ${veces} veces y los demás una sola.`,
    clave: `moda:${datos.join("-")}`,
  };
}

// ── Fracciones (mundo 4) ──────────────────────────────────────────────────
export function fracciones(grado) {
  const den = elegir(grado <= 4 ? [2, 3, 4, 6] : [3, 4, 5, 6, 8, 10]);
  const num = entero(1, den - 1);
  return opcionMultiple({
    enunciado: "¿Qué fracción de la barra está pintada?",
    correcta: `${num}/${den}`,
    distractores: [`${den - num}/${den}`, `${num}/${den + 1}`, `${num + 1}/${den}`],
    figura: { tipo: "barra", props: { num, den } },
    explicacion: `La barra está partida en ${den} partes iguales y hay ${num} pintadas: ${num}/${den}. ` +
      "Abajo va en cuántas se partió y arriba cuántas se tomaron.",
    clave: `frac:${num}/${den}`,
  });
}

export function compararFracciones() {
  const dens = [2, 3, 4, 5, 6, 8];
  // Se carga hacia el par trampa: mismo numerador y distinto denominador, que
  // es donde el niño lee "6 es más que 3" y contesta al revés.
  const trampa = Math.random() < 0.6;
  let a, b;
  if (trampa) {
    const [d1, d2] = barajar(dens).slice(0, 2).sort((x, y) => x - y);
    const num = entero(1, d1 - 1);
    a = { num, den: d1 };
    b = { num, den: d2 };
  } else {
    const den = elegir(dens.filter((d) => d >= 3));
    const n1 = entero(1, den - 1);
    let n2 = entero(1, den - 1);
    while (n2 === n1) n2 = entero(1, den - 1);
    a = { num: n1, den };
    b = { num: n2, den };
  }
  const mayor = a.num / a.den > b.num / b.den ? a : b;
  const menor = mayor === a ? b : a;
  return opcionMultiple({
    enunciado: `¿Cuál fracción es mayor, ${a.num}/${a.den} o ${b.num}/${b.den}?`,
    correcta: `${mayor.num}/${mayor.den}`,
    distractores: [`${menor.num}/${menor.den}`],
    explicacion: trampa
      ? `Las dos llevan ${a.num} ${a.num === 1 ? "parte" : "partes"}, pero partir en ${menor.den} deja pedazos más chicos que partir en ${mayor.den}: entre más partes, más chico es cada pedazo.`
      : `Están partidas igual, en ${a.den}, así que gana la que lleva más partes.`,
    clave: `cmp:${a.num}/${a.den}:${b.num}/${b.den}`,
  });
}

export function operacionesFracciones() {
  const den = elegir([4, 5, 6, 8, 10]);
  const resta = Math.random() < 0.4;
  const n1 = entero(2, den - 2);
  // Al sumar, el resultado se queda por debajo del entero: convertir a número
  // mixto es otro tema y no toca aquí.
  const n2 = resta ? entero(1, n1 - 1) : entero(1, den - n1 - 1);
  const resultado = resta ? n1 - n2 : n1 + n2;
  return opcionMultiple({
    enunciado: `¿Cuánto es ${n1}/${den} ${resta ? "−" : "+"} ${n2}/${den}?`,
    correcta: `${resultado}/${den}`,
    distractores: [`${resultado}/${den * 2}`, `${resta ? n1 + n2 : n1 - n2}/${den}`, `${resultado}/${den + n2}`],
    explicacion: `Los pedazos son del mismo tamaño (${den} partes), así que solo se ${resta ? "quitan" : "juntan"} ` +
      `los de arriba: ${n1} ${resta ? "−" : "+"} ${n2} = ${resultado}. El de abajo no se toca.`,
    clave: `opf:${n1}${resta ? "-" : "+"}${n2}/${den}`,
  });
}

// ── Circunferencia (mundo 4) ──────────────────────────────────────────────
export function circunferencia() {
  const radio = entero(2, 9);
  const diametro = radio * 2;
  if (Math.random() < 0.5) {
    return {
      tipo: "numero",
      enunciado: `Una fuente redonda mide ${radio} m de radio. ¿Cuánto mide su diámetro?`,
      respuesta: diametro,
      figura: { tipo: "circulo", props: { radio, marca: "radio" } },
      explicacion: `El diámetro cruza el círculo de lado a lado por el centro: son dos radios, ${radio} + ${radio}.`,
      clave: `circ:d:${radio}`,
    };
  }
  const contorno = Math.round(diametro * 3.14);
  return opcionMultiple({
    enunciado: `Una rueda mide ${diametro} m de diámetro. ¿Cuánto mide su contorno, más o menos? (π vale como 3.14)`,
    correcta: contorno,
    distractores: [diametro * 2, diametro * 4, Math.round(radio * 3.14)],
    figura: { tipo: "circulo", props: { radio, marca: "diametro" } },
    explicacion: `El contorno es el diámetro por π: ${diametro} × 3.14 ≈ ${contorno}. Siempre es un poco más de tres diámetros.`,
    clave: `circ:c:${diametro}`,
  });
}

export const GENERADORES = {
  "suma-resta": sumaResta,
  multiplicacion,
  "recta-numerica": rectaNumerica,
  "planos-trayectorias": planosTrayectorias,
  "perimetro-area": perimetroArea,
  "division-exacta": divisionExacta,
  "fraccion-decimal": fraccionDecimal,
  decimales,
  "multiplos-divisores": multiplosDivisores,
  series,
  promedio,
  moda,
  fracciones,
  "comparar-fracciones": compararFracciones,
  "operaciones-fracciones": operacionesFracciones,
  circunferencia,
};
