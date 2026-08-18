// Generador de Los Vasos Medidores — fracciones.
//
// Tres modos, cada uno con una intención distinta:
//
//   llenar        de la fracción escrita a la cantidad (contar las divisiones)
//   comparar      cuál vale más — el modo donde se provoca el error clásico
//   equivalencias dos repartos distintos que dan lo mismo (2/4 = 1/2)
//
// El modo comparar está deliberadamente cargado hacia pares con el mismo
// numerador (1/3 contra 1/2): a esta edad el niño lee "3 es más que 2" y
// contesta 1/3. Ese error hay que provocarlo para poder corregirlo, así que
// no se evita: se busca. Ese es el sesgo de `PESOS_COMPARAR`.
import { entero, elegir, elegirPesado, barajar } from "./azar.js";

const PESOS_COMPARAR = [
  ["mismo-numerador", 5],   // la trampa: mismo numerador, denominador distinto
  ["mismo-denominador", 2], // el caso fácil, para que la trampa no sea la regla
  ["sin-relacion", 3],
];

const valor = (f) => f.num / f.den;
const iguales = (a, b) => a.num * b.den === b.num * a.den;

function mcd(a, b) {
  return b === 0 ? a : mcd(b, a % b);
}

// ── Modo A · llenar ────────────────────────────────────────────────────────
export function generarLlenar(rango) {
  const den = elegir(rango.vasos.denominadores);
  const num = entero(1, den - 1);
  return {
    juego: "vasos",
    modo: "llenar",
    num,
    den,
    categoria: "fraccion-representar",
    clave: `llenar:${num}/${den}`,
  };
}

// ── Modo B · comparar ──────────────────────────────────────────────────────
export function generarComparar(rango) {
  const dens = rango.vasos.denominadores;
  let tipo = elegirPesado(PESOS_COMPARAR);
  // Con un solo denominador ≥ 3 el caso "mismo denominador" no existe.
  const densConEspacio = dens.filter((d) => d >= 3);
  if (tipo === "mismo-denominador" && densConEspacio.length === 0) tipo = "mismo-numerador";

  let a, b;
  if (tipo === "mismo-numerador") {
    const [d1, d2] = barajar(dens).slice(0, 2).sort((x, y) => x - y);
    const num = entero(1, d1 - 1);
    a = { num, den: d1 };
    b = { num, den: d2 };
  } else if (tipo === "mismo-denominador") {
    const den = elegir(densConEspacio);
    const n1 = entero(1, den - 1);
    let n2 = entero(1, den - 1);
    while (n2 === n1) n2 = entero(1, den - 1);
    a = { num: n1, den };
    b = { num: n2, den };
  } else {
    // Sin relación: distinto numerador y distinto denominador, y que no
    // valgan lo mismo (1/2 contra 2/4 no es una comparación, es otro modo).
    let intentos = 0;
    do {
      const [d1, d2] = barajar(dens).slice(0, 2);
      a = { num: entero(1, d1 - 1), den: d1 };
      b = { num: entero(1, d2 - 1), den: d2 };
    } while (
      (a.den === b.den || a.num === b.num || iguales(a, b)) && ++intentos < 30
    );
    if (a.den === b.den || a.num === b.num || iguales(a, b)) {
      // Salida segura para listas de denominadores muy cortas.
      return generarComparar({ ...rango, vasos: { ...rango.vasos } });
    }
  }

  const [x, y] = barajar([a, b]);
  return {
    juego: "vasos",
    modo: "comparar",
    a: x,
    b: y,
    mayor: valor(x) > valor(y) ? "a" : "b",
    tipo,
    categoria: `fraccion-comparar-${tipo}`,
    clave: `comp:${x.num}/${x.den}:${y.num}/${y.den}`,
  };
}

// ── Modo C · equivalencias ─────────────────────────────────────────────────
// Pares de denominadores donde uno es múltiplo del otro: son los únicos que
// producen equivalencias dentro de la lista del bloque de edad.
export function paresEquivalentes(dens) {
  const pares = [];
  dens.forEach((d) => dens.forEach((D) => { if (D > d && D % d === 0) pares.push([d, D]); }));
  return pares;
}

export function generarEquivalencia(rango) {
  const dens = rango.vasos.denominadores;
  const pares = paresEquivalentes(dens);
  if (pares.length === 0) return null;

  const [d, D] = elegir(pares);
  const k = D / d;
  // El objetivo va en su forma más simple: se busca reconocer 1/2 dentro de
  // 3/6, no comparar dos fracciones ampliadas.
  let num = entero(1, d - 1);
  let intentos = 0;
  while (mcd(num, d) !== 1 && ++intentos < 20) num = entero(1, d - 1);

  const objetivo = { num, den: d };
  const correcta = { num: num * k, den: D };

  // Distractores: el más útil es el vecino con el mismo denominador —el niño
  // que cuenta divisiones sin fijarse en cuántas van llenas cae ahí—, más uno
  // de otro denominador para que la respuesta no se decida por la forma del
  // vaso.
  const opciones = [correcta];
  const vecinos = barajar(
    Array.from({ length: D - 1 }, (_, i) => ({ num: i + 1, den: D }))
      .filter((f) => !iguales(f, objetivo))
  );
  if (vecinos[0]) opciones.push(vecinos[0]);

  const otros = barajar(
    dens.filter((x) => x !== D)
      .flatMap((x) => Array.from({ length: x - 1 }, (_, i) => ({ num: i + 1, den: x })))
      .filter((f) => !iguales(f, objetivo))
  );
  if (otros[0]) opciones.push(otros[0]);
  // Relleno por si la lista de denominadores del bloque es muy corta.
  for (let i = 1; opciones.length < 3 && i < vecinos.length; i++) opciones.push(vecinos[i]);

  const barajadas = barajar(opciones);
  return {
    juego: "vasos",
    modo: "equivalencias",
    objetivo,
    opciones: barajadas,
    correcta: barajadas.findIndex((f) => iguales(f, objetivo)),
    categoria: "fraccion-equivalente",
    clave: `equiv:${num}/${d}:${D}`,
  };
}

// Un ejercicio del modo pedido; con "mezcla" sortea entre los modos que el
// bloque de edad tiene habilitados.
export function generarVaso(rango, modo = "mezcla") {
  const modos = rango.vasos.modos;
  const elegido = modo === "mezcla" ? elegir(modos) : modo;
  if (elegido === "comparar") return generarComparar(rango);
  if (elegido === "equivalencias") return generarEquivalencia(rango) || generarComparar(rango);
  return generarLlenar(rango);
}
