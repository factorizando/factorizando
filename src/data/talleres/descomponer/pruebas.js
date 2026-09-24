// Pruebas rápidas de los generadores de Descomponer números. Se corren a mano:
//
//     node src/data/talleres/descomponer/pruebas.js
//
// Cubren lo que, de ser falso, haría que el taller enseñe algo incorrecto: una
// suma que no llega a la meta, un reparto mal formado, una división con residuo
// mayor que el divisor, o una respuesta oculta que no corresponde al término
// escondido. Más los techos de cada bloque de edad.
/* global process */ // este archivo se corre con node, no en el navegador
import { RANGOS, RANGOS_POR_ID, CATEGORIAS, generarPartida } from "./index.js";
import { generarSuma } from "./suma.js";
import { generarProducto } from "./producto.js";
import { generarDivision } from "./division.js";

const N = 4000;
let fallos = 0;

function prueba(nombre, fn) {
  try {
    fn();
    console.log(`  ok  ${nombre}`);
  } catch (e) {
    fallos++;
    console.log(`  NO  ${nombre}\n      ${e.message}`);
  }
}
function afirmar(condicion, mensaje) {
  if (!condicion) throw new Error(mensaje);
}
const veces = (n, fn) => Array.from({ length: n }, fn);

console.log("\nGeneradores de Descomponer números\n");

// ── Suma · completar ───────────────────────────────────────────────────────
console.log("Sumar descomponiendo · completar");
RANGOS.forEach((r) => {
  prueba(`[${r.id}] a + b + c = d y c ≥ 1`, () => {
    veces(N, () => {
      const e = generarSuma(r, "completar");
      afirmar(e.a + e.b + e.c === e.d, `${e.a}+${e.b}+${e.c} ≠ ${e.d}`);
      afirmar(e.c >= 1, `el complemento salió ${e.c}`);
      afirmar(r.suma.completar.objetivos.includes(e.d), `meta ${e.d} ajena al bloque`);
      afirmar(e.pasos[0].respuesta === e.c, "la respuesta del paso no es el complemento");
    });
  });
  prueba(`[${r.id}] el total parcial no alcanza la meta`, () => {
    veces(N, () => {
      const e = generarSuma(r, "completar");
      afirmar(e.s === e.a + e.b, `s ≠ a+b`);
      afirmar(e.s < e.d, `el parcial ${e.s} ya llegó a ${e.d}`);
    });
  });
});

// ── Suma · romper ──────────────────────────────────────────────────────────
console.log("\nSumar descomponiendo · romper");
RANGOS.forEach((r) => {
  prueba(`[${r.id}] m pasa la decena y n = b − m`, () => {
    veces(N, () => {
      const e = generarSuma(r, "romper");
      afirmar(e.m + e.n === e.b, `${e.m}+${e.n} ≠ ${e.b}`);
      afirmar(e.n >= 1, `el resto salió ${e.n}`);
      afirmar(e.decena === e.a + e.m, "la decena no es a + m");
      afirmar(e.decena % 10 === 0, `la decena ${e.decena} no es múltiplo de 10`);
      afirmar(e.a % 10 !== 0, `${e.a} ya estaba en la decena`);
      afirmar(e.total === e.a + e.b, "el total no es a + b");
      afirmar(e.pasos[0].respuesta === e.m && e.pasos[1].respuesta === e.total, "respuestas mal");
    });
  });
});

// ── Producto ───────────────────────────────────────────────────────────────
console.log("\nMultiplicar descomponiendo");
RANGOS.forEach((r) => {
  prueba(`[${r.id}] m + n = b y los parciales son a×m y a×n`, () => {
    veces(N, () => {
      const e = generarProducto(r);
      afirmar(e.m + e.n === e.b, `${e.m}+${e.n} ≠ ${e.b}`);
      afirmar(e.pm === e.a * e.m && e.pn === e.a * e.n, "los parciales no son a×m y a×n");
      afirmar(e.pm + e.pn === e.total, "los parciales no suman el total");
      afirmar(e.total === e.a * e.b, "el total no es a×b");
      e.pasos.forEach((p) => afirmar(Number.isFinite(p.respuesta), `respuesta no numérica en ${p.id}`));
    });
  });

  prueba(`[${r.id}] respeta el techo de factores del bloque`, () => {
    veces(N, () => {
      const e = generarProducto(r);
      if (r.producto.dosCifras) {
        afirmar(e.m % 10 === 0, `m=${e.m} no es una decena`);
        afirmar(e.n >= 1 && e.n <= 9, `n=${e.n} fuera de 1-9`);
        afirmar(e.b % 10 !== 0, `b=${e.b} es múltiplo de 10`);
      } else {
        afirmar(e.a >= 2 && e.a <= r.producto.maxFactor, `a=${e.a} fuera de rango`);
        afirmar(e.b >= 3 && e.b <= r.producto.maxFactor, `b=${e.b} fuera de rango`);
        afirmar(e.a < 10 && e.b < 10, "salió un factor de dos cifras en el bloque de abajo");
      }
    });
  });
});

// ── División ───────────────────────────────────────────────────────────────
console.log("\nDividir descomponiendo");
RANGOS.forEach((r) => {
  prueba(`[${r.id}] a = b×q + r con 0 ≤ r < b`, () => {
    veces(N, () => {
      const e = generarDivision(r);
      afirmar(e.a === e.b * e.q + e.r, `${e.a} ≠ ${e.b}×${e.q}+${e.r}`);
      afirmar(e.r >= 0 && e.r < e.b, `residuo ${e.r} fuera de [0, ${e.b})`);
      afirmar(e.b >= r.division.divisor[0] && e.b <= r.division.divisor[1], `divisor ${e.b} fuera de rango`);
      afirmar(e.q >= r.division.cociente[0] && e.q <= r.division.cociente[1], `cociente ${e.q} fuera de rango`);
    });
  });

  prueba(`[${r.id}] exacta ⇔ r = 0`, () => {
    veces(N, () => {
      const e = generarDivision(r);
      afirmar(e.exacta === (e.r === 0), `exacta=${e.exacta} con r=${e.r}`);
    });
  });

  prueba(`[${r.id}] la respuesta corresponde al término escondido`, () => {
    veces(N, () => {
      const e = generarDivision(r);
      const vals = { a: e.a, b: e.b, q: e.q, r: e.r };
      afirmar(vals[e.oculto] === e.pasos[0].respuesta,
        `oculto ${e.oculto}: esperaba ${vals[e.oculto]}, salió ${e.pasos[0].respuesta}`);
      afirmar(e.enunciado.includes("❓"), "el enunciado no marca el término escondido");
      if (r.division.dibujar) afirmar(e.oculto !== "b", "en 8-9 se escondió el número de grupos");
      const esperada = e.oculto === "r" && e.r === 0 ? "division-residuo-cero"
        : { a: "division-falta-total", b: "division-faltan-grupos",
            q: "division-falta-cociente", r: "division-falta-residuo" }[e.oculto];
      afirmar(e.pasos[0].categoria === esperada, `categoría ${e.pasos[0].categoria} ≠ ${esperada}`);
    });
  });
});

// ── Partidas ───────────────────────────────────────────────────────────────
console.log("\nPartidas completas");
Object.keys({ suma: 1, producto: 1, division: 1 }).forEach((op) => {
  RANGOS.forEach((r) => {
    const modo = op === "suma" ? "mezcla" : undefined;
    prueba(`[${r.id}] ${op}: 10 ejercicios y categorías con etiqueta`, () => {
      const partida = generarPartida(op, r.id, { modo });
      afirmar(partida.length === 10, `salieron ${partida.length}`);
      partida.forEach((e) => {
        e.pasos.forEach((p) => afirmar(!!CATEGORIAS[p.categoria], `categoría sin etiqueta: ${p.categoria}`));
      });
    });
  });
});

prueba("sin repetidos dentro de una partida de suma", () => {
  for (let i = 0; i < 200; i++) {
    const claves = generarPartida("suma", "8-9", { modo: "mezcla" }).map((e) => e.clave);
    afirmar(new Set(claves).size === claves.length, `repetido en ${claves.join(" ")}`);
  }
});

prueba("[8-9] completar solo apunta a 10 y 20", () => {
  afirmar(JSON.stringify(RANGOS_POR_ID["8-9"].suma.completar.objetivos) === "[10,20]", "metas de 8-9 cambiaron");
});

console.log(fallos === 0 ? "\nTodo en orden.\n" : `\n${fallos} prueba(s) fallaron.\n`);
process.exit(fallos === 0 ? 0 : 1);
