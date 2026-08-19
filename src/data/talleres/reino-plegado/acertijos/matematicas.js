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

export const GENERADORES = {
  "suma-resta": sumaResta,
  multiplicacion,
  "recta-numerica": rectaNumerica,
  "planos-trayectorias": planosTrayectorias,
  "perimetro-area": perimetroArea,
};

// Distractores para cuando un acertijo numérico se quiere de opción múltiple:
// se construyen con los errores típicos, no con números al azar.
export function opcionesAlrededor(respuesta) {
  const candidatos = new Set([respuesta]);
  [respuesta + 1, respuesta - 1, respuesta + 10, Math.max(1, respuesta - 10), respuesta * 2]
    .forEach((n) => { if (n > 0 && candidatos.size < 4) candidatos.add(n); });
  return barajar([...candidatos]);
}
