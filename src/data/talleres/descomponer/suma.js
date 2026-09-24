// Generador de «Sumar descomponiendo» — complementos y suma por partes.
//
// Dos esquemas, uno por modo:
//
//   completar:  (a + b) + c = d      →  «¿cuánto falta?»
//   romper:     a + b = (a + m) + n  →  m para llegar a la decena, n el resto
//
// La cuenta que ordena el archivo: **la respuesta se construye, nunca se
// sortea**. En completar, c = d − (a + b) y siempre queda ≥ 1; en romper, m es
// exactamente lo que le falta a `a` para la decena siguiente, y `n = b − m` es
// positivo, así que el reparto siempre tiene sentido.
import { entero, elegir } from "../azar.js";

// El mismo esquema, contado de distintas maneras. Se rotan para que el alumno
// no asocie la operación con una sola historia.
const CTX_COMPLETAR = [
  (a, b, s, d) => `Llevas ${a} pesos, luego juntas ${b}: en total ${s}. Quieres llegar a ${d}.`,
  (a, b, s, d) => `En la alcancía había ${a} y le agregaste ${b}: ahora hay ${s}. La meta es ${d}.`,
  (a, b, s, d) => `Un tablero marcaba ${a} puntos y le sumaste ${b}: va en ${s}. El reto es ${d}.`,
  (a, b, s, d) => `Ya llevas ${a} páginas leídas y hoy leíste ${b}: son ${s}. El plan es llegar a ${d}.`,
];

const CTX_ROMPER = [
  (a, b) => `En la tienda tienes que sumar ${a} + ${b}.`,
  (a, b) => `Para no sumar de golpe, rompe uno de los números: ${a} + ${b}.`,
  (a, b) => `Un carrito lleva ${a} y le echan ${b}. Súmalos pasando por la decena.`,
];

export const CATEGORIAS_SUMA = {
  completarA10: "suma-completar-a10",
  completarDecena: "suma-completar-decena",
  romperParte: "suma-romper-parte",
  romperTotal: "suma-romper-total",
};

function genCompletar(rango) {
  const cfg = rango.suma.completar;
  const d = elegir(cfg.objetivos);
  let a, b;

  if (cfg.dibujar) {
    // Números chicos: cualquiera que deje al menos 1 para completar.
    a = entero(1, d - 2);
    b = entero(1, d - a - 1);
  } else {
    // Múltiplos de 5 para que el complemento se haga de cabeza.
    const maxA = Math.max(1, Math.floor((d - 10) / 5));
    a = entero(1, maxA) * 5;
    const restante = d - a;
    b = entero(1, Math.max(1, (restante - 5) / 5)) * 5;
  }

  const s = a + b;
  const c = d - s;
  const ctx = elegir(CTX_COMPLETAR);

  return {
    operacion: "suma",
    modo: "completar",
    a, b, c, d, s,
    enunciado: `${ctx(a, b, s, d)} ¿Cuánto falta para llegar a ${d}?`,
    pasos: [{
      id: "falta",
      pregunta: `¿Cuánto hay que sumar a ${s} para llegar a ${d}?`,
      respuesta: c,
      categoria: d === 10 ? CATEGORIAS_SUMA.completarA10 : CATEGORIAS_SUMA.completarDecena,
    }],
    conclusion: {
      operacion: `${a} + ${b} + ${c} = ${d}`,
      texto: `${a} + ${b} = ${s}, y a ${s} le faltan ${c} para llegar a ${d}.`,
    },
    figura: { tipo: "completar", a, b, s, c, d, dibujar: cfg.dibujar },
    clave: `C:${a}+${b}+${c}=${d}`,
  };
}

function genRomper(rango) {
  const cfg = rango.suma.romper;
  // El dígito de las unidades nunca es 0: si `a` ya está en la decena no hay
  // nada que romper. En 8-9 se evita la unidad 1 para que quede al menos un
  // `b` de una cifra posible.
  const unidad = cfg.dosCifras ? entero(1, 9) : entero(2, 9);
  const decenas = cfg.dosCifras ? entero(5, 8) : entero(1, 4);
  const a = decenas * 10 + unidad;
  const m = 10 - unidad;             // lo que falta para la decena siguiente
  const techo = cfg.dosCifras ? 29 : 9;
  const b = entero(m + 1, Math.max(m + 1, techo));
  const n = b - m;
  const decena = a + m;
  const total = a + b;
  const ctx = elegir(CTX_ROMPER);

  return {
    operacion: "suma",
    modo: "romper",
    a, b, m, n, decena, total,
    enunciado: ctx(a, b),
    pasos: [
      {
        id: "parte",
        pregunta: `¿Cuánto le sumas a ${a} para llegar a la decena?`,
        respuesta: m,
        categoria: CATEGORIAS_SUMA.romperParte,
      },
      {
        id: "total",
        pregunta: `Ahora suma el resto: ¿cuánto es ${a} + ${b}?`,
        respuesta: total,
        categoria: CATEGORIAS_SUMA.romperTotal,
      },
    ],
    conclusion: {
      operacion: `${a} + ${b} = ${total}`,
      texto: `Rompes ${b} en ${m} + ${n}: ${a} + ${m} = ${decena}, y ${decena} + ${n} = ${total}.`,
    },
    figura: { tipo: "romper", a, m, n, decena, total },
    clave: `R:${a}+${b}`,
  };
}

// `modo` puede venir "completar", "romper" o "mezcla" (alterna los dos).
export function generarSuma(rango, modo = "completar") {
  const cual = modo === "mezcla" ? (Math.random() < 0.5 ? "completar" : "romper") : modo;
  return cual === "romper" ? genRomper(rango) : genCompletar(rango);
}
