// Pruebas rápidas de los generadores. Se corren a mano, sin framework:
//
//     node src/data/talleres/pizzas-cajas-vasos/pruebas.js
//
// No cubren la interfaz: cubren las dos afirmaciones que, si fueran falsas,
// harían que el taller enseñe algo incorrecto —una división "exacta" que deja
// residuo, o dos fracciones "equivalentes" que no valen lo mismo— más los
// techos de dificultad de cada bloque de edad.
/* global process */ // este archivo se corre con node, no en el navegador
import { RANGOS, RANGOS_POR_ID, CATEGORIAS, generarPartida } from "./index.js";
import { generarPizzeria } from "./pizzeria.js";
import { generarFabrica, generarHuerto } from "./fabrica.js";
import { generarLlenar, generarComparar, generarEquivalencia } from "./vasos.js";

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

console.log("\nGeneradores del taller de Pizzas, Cajas y Vasos\n");

// ── Pizzería ───────────────────────────────────────────────────────────────
console.log("La Pizzería · división con residuo");

RANGOS.forEach((r) => {
  prueba(`[${r.id}] total = cajas × porCaja + sobran, siempre`, () => {
    veces(N, () => {
      const e = generarPizzeria(r);
      afirmar(e.cajas * e.porCaja + e.sobran === e.total,
        `${e.total} ≠ ${e.cajas}×${e.porCaja}+${e.sobran}`);
    });
  });

  prueba(`[${r.id}] las exactas no dejan residuo`, () => {
    veces(N, () => {
      const e = generarPizzeria(r);
      if (e.exacta) {
        afirmar(e.sobran === 0, `exacta con sobrante ${e.sobran}`);
        afirmar(e.total % e.porCaja === 0, `${e.total} no es múltiplo de ${e.porCaja}`);
      }
    });
  });

  prueba(`[${r.id}] las inexactas dejan 0 < sobran < porCaja`, () => {
    veces(N, () => {
      const e = generarPizzeria(r);
      if (!e.exacta) {
        afirmar(e.sobran >= 1 && e.sobran < e.porCaja, `sobran ${e.sobran} de ${e.porCaja}`);
      }
    });
  });

  prueba(`[${r.id}] respeta el techo del bloque de edad`, () => {
    veces(N, () => {
      const e = generarPizzeria(r);
      afirmar(e.total <= r.pizzeria.totalMax, `total ${e.total} > ${r.pizzeria.totalMax}`);
      afirmar(e.porCaja >= r.pizzeria.porCaja[0] && e.porCaja <= r.pizzeria.porCaja[1],
        `divisor ${e.porCaja} fuera de rango`);
      afirmar(e.cajas >= 2, `${e.cajas} cajas: con una sola no hay que dividir`);
      afirmar(e.cajas <= r.pizzeria.cajasMax, `${e.cajas} cajas > ${r.pizzeria.cajasMax}`);
    });
  });

  prueba(`[${r.id}] mezcla exactas e inexactas`, () => {
    const lote = veces(600, () => generarPizzeria(r));
    afirmar(lote.some((e) => e.exacta), "nunca salió una división exacta");
    afirmar(lote.some((e) => !e.exacta), "nunca salió una división con residuo");
  });
});

// ── Fábrica y Huerto ───────────────────────────────────────────────────────
console.log("\nLa Fábrica de Cajas · multiplicación");

RANGOS.forEach((r) => {
  prueba(`[${r.id}] total = cajas × porCaja, y los factores están en rango`, () => {
    veces(N, () => {
      const e = generarFabrica(r);
      afirmar(e.cajas * e.porCaja === e.total, `${e.total} ≠ ${e.cajas}×${e.porCaja}`);
      afirmar(e.cajas >= 2, "una sola caja no es multiplicar");
      const dosCifras = e.categoria === "multiplicacion-dos-cifras";
      if (dosCifras) {
        afirmar(!!r.fabrica.dosCifras, "salió un factor de dos cifras en un bloque que no los tiene");
        const [a, b] = r.fabrica.rangoDosCifras;
        afirmar(e.porCaja >= a && e.porCaja <= b, `factor ${e.porCaja} fuera de ${a}-${b}`);
      } else {
        const [a, b] = r.fabrica.factores;
        afirmar(e.porCaja >= a && e.porCaja <= b, `factor ${e.porCaja} fuera de ${a}-${b}`);
        afirmar(e.cajas <= r.fabrica.cajasMax, `${e.cajas} cajas > ${r.fabrica.cajasMax}`);
      }
    });
  });
});

prueba("[7-8] el huerto no existe todavía", () => {
  afirmar(generarHuerto(RANGOS_POR_ID["7-8"]) === null, "el bloque de 7-8 devolvió un huerto");
});

prueba("[9-10] el huerto es un rectángulo y su área es el producto", () => {
  const r = RANGOS_POR_ID["9-10"];
  veces(N, () => {
    const e = generarHuerto(r);
    afirmar(e.filas >= 2 && e.columnas >= 2, "un lado de 1 no es un rectángulo útil");
    afirmar(e.filas <= r.huerto.max && e.columnas <= r.huerto.max, "se salió de la parcela");
    afirmar(e.filas * e.columnas === e.total, "el área no es el producto");
  });
});

// ── Vasos ──────────────────────────────────────────────────────────────────
console.log("\nLos Vasos Medidores · fracciones");

RANGOS.forEach((r) => {
  prueba(`[${r.id}] llenar: 1 ≤ num < den y el denominador es del bloque`, () => {
    veces(N, () => {
      const e = generarLlenar(r);
      afirmar(r.vasos.denominadores.includes(e.den), `denominador ${e.den} ajeno al bloque`);
      afirmar(e.num >= 1 && e.num < e.den, `${e.num}/${e.den} no es una fracción propia`);
    });
  });

  prueba(`[${r.id}] comparar: nunca empata y «mayor» es de verdad el mayor`, () => {
    veces(N, () => {
      const e = generarComparar(r);
      const va = e.a.num / e.a.den, vb = e.b.num / e.b.den;
      afirmar(va !== vb, `${e.a.num}/${e.a.den} vale igual que ${e.b.num}/${e.b.den}`);
      afirmar(e.mayor === (va > vb ? "a" : "b"), "el ganador marcado no es el mayor");
    });
  });

  prueba(`[${r.id}] comparar: el par trampa tiene el mismo numerador`, () => {
    const lote = veces(1200, () => generarComparar(r));
    const trampas = lote.filter((e) => e.tipo === "mismo-numerador");
    afirmar(trampas.length > 0, "nunca salió el par de mismo numerador");
    trampas.forEach((e) => {
      afirmar(e.a.num === e.b.num, "el par trampa no comparte numerador");
      afirmar(e.a.den !== e.b.den, "el par trampa repite denominador");
      // Justo el error que se quiere provocar: gana el del denominador chico.
      const gana = e.mayor === "a" ? e.a : e.b;
      const pierde = e.mayor === "a" ? e.b : e.a;
      afirmar(gana.den < pierde.den, "el denominador mayor resultó ser el mayor");
    });
    lote.filter((e) => e.tipo === "mismo-denominador").forEach((e) => {
      afirmar(e.a.den === e.b.den, "el par de mismo denominador no lo comparte");
    });
    lote.filter((e) => e.tipo === "sin-relacion").forEach((e) => {
      afirmar(e.a.den !== e.b.den && e.a.num !== e.b.num, "el par «sin relación» comparte algo");
    });
  });
});

prueba("[7-8] no aparecen equivalencias ni denominadores mayores a 4", () => {
  const r = RANGOS_POR_ID["7-8"];
  afirmar(!r.vasos.modos.includes("equivalencias"), "el bloque de 7-8 ofrece equivalencias");
  afirmar(Math.max(...r.vasos.denominadores) === 4, "hay denominadores mayores a 4");
});

prueba("[9-10] la opción correcta vale lo mismo que el objetivo", () => {
  const r = RANGOS_POR_ID["9-10"];
  veces(N, () => {
    const e = generarEquivalencia(r);
    const o = e.objetivo;
    const c = e.opciones[e.correcta];
    afirmar(!!c, "no hay opción correcta");
    afirmar(c.num * o.den === o.num * c.den,
      `${c.num}/${c.den} no equivale a ${o.num}/${o.den}`);
    afirmar(c.den !== o.den, "la equivalente usa el mismo reparto que el objetivo");
  });
});

prueba("[9-10] ninguna opción incorrecta vale lo mismo que el objetivo", () => {
  const r = RANGOS_POR_ID["9-10"];
  veces(N, () => {
    const e = generarEquivalencia(r);
    const o = e.objetivo;
    e.opciones.forEach((f, i) => {
      if (i === e.correcta) return;
      afirmar(f.num * o.den !== o.num * f.den,
        `el distractor ${f.num}/${f.den} sí equivale a ${o.num}/${o.den}`);
    });
    afirmar(e.opciones.length === 3, `salieron ${e.opciones.length} opciones`);
    afirmar(e.opciones.every((f) => f.num >= 1 && f.num < f.den), "hay una opción impropia");
  });
});

// ── Partidas ───────────────────────────────────────────────────────────────
console.log("\nPartidas completas");

RANGOS.forEach((r) => {
  ["pizzeria", "fabrica", "vasos"].forEach((juego) => {
    prueba(`[${r.id}] ${juego}: 10 ejercicios y todas las categorías tienen etiqueta`, () => {
      const partida = generarPartida(juego, r.id);
      afirmar(partida.length === 10, `salieron ${partida.length}`);
      partida.forEach((e) => {
        const cats = e.categorias ? Object.values(e.categorias) : [e.categoria];
        cats.forEach((c) => afirmar(!!CATEGORIAS[c], `categoría sin etiqueta: ${c}`));
      });
    });
  });
});

prueba("[9-10] una partida de pizzería no repite ejercicios", () => {
  for (let i = 0; i < 200; i++) {
    const claves = generarPartida("pizzeria", "9-10").map((e) => e.clave);
    afirmar(new Set(claves).size === claves.length, `repetido en ${claves.join(" ")}`);
  }
});

console.log(fallos === 0 ? "\nTodo en orden.\n" : `\n${fallos} prueba(s) fallaron.\n`);
process.exit(fallos === 0 ? 0 : 1);
