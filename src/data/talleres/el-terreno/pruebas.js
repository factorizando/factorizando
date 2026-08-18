/* global process */ // este archivo se corre con node, no en el navegador
// Pruebas rápidas de los generadores del taller del Terreno:
//
//     node src/data/talleres/el-terreno/pruebas.js
//
// Cubren lo que, de ser falso, haría que el taller **enseñe algo incorrecto**:
// un terreno donde perímetro y área coinciden (le daría por bueno el error que
// el juego existe para detectar), un reto de cerca fija sin suficientes
// terrenos distintos que armar, o una "mejor forma" que no sea la de mayor
// área.
import { RANGOS, RANGOS_POR_ID, CATEGORIAS, generarPartida } from "./index.js";
import { generarTerreno, generarRondaCercaPasto } from "./cerca-pasto.js";
import { formasDe, generarRondaMismaCerca } from "./misma-cerca.js";

const N = 3000;
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

const afirmar = (cond, msg) => { if (!cond) throw new Error(msg); };
const veces = (n, fn) => Array.from({ length: n }, fn);

console.log("\nGeneradores del taller del Terreno\n");

console.log("La Cerca y el Pasto");
RANGOS.forEach((r) => {
  prueba(`[${r.id}] el perímetro nunca coincide con el área`, () => {
    veces(N, () => {
      const { ancho, alto } = generarTerreno(r);
      afirmar(2 * (ancho + alto) !== ancho * alto, `${ancho}×${alto} tiene perímetro = área`);
    });
  });

  prueba(`[${r.id}] los lados están en rango y las medidas cuadran`, () => {
    generarRondaCercaPasto(r, 200).forEach((e) => {
      const [min, max] = r.cercaPasto.lados;
      afirmar(e.ancho >= min && e.ancho <= max && e.alto >= min && e.alto <= max,
        `${e.ancho}×${e.alto} fuera de ${min}-${max}`);
      afirmar(e.perimetro === 2 * (e.ancho + e.alto), "perímetro mal calculado");
      afirmar(e.area === e.ancho * e.alto, "área mal calculada");
      afirmar(e.respuesta === (e.pedido === "cerca" ? e.perimetro : e.area), "respuesta que no corresponde al pedido");
      afirmar(e.otraMagnitud === (e.pedido === "cerca" ? e.area : e.perimetro), "la otra medida no es la otra");
      afirmar(e.respuesta !== e.otraMagnitud, "las dos medidas coinciden: la confusión sería indetectable");
    });
  });

  prueba(`[${r.id}] el par pregunta lo otro sobre el mismo terreno`, () => {
    for (let i = 0; i < 60; i++) {
      const ronda = generarRondaCercaPasto(r, 10);
      afirmar(ronda.length === 10, `salieron ${ronda.length}`);
      ronda.forEach((e, k) => {
        if (!e.mismoTerreno) return;
        const previo = ronda[k - 1];
        afirmar(previo, "un par sin su primera mitad");
        afirmar(previo.ancho === e.ancho && previo.alto === e.alto, "el par cambió de terreno");
        afirmar(previo.pedido !== e.pedido, "el par repite la misma pregunta");
      });
      afirmar(ronda.some((e) => e.mismoTerreno), "la ronda no trajo ningún par");
    }
  });

  prueba(`[${r.id}] salen las dos preguntas`, () => {
    const lote = generarRondaCercaPasto(r, 200);
    afirmar(lote.some((e) => e.pedido === "cerca"), "nunca pidió cerca");
    afirmar(lote.some((e) => e.pedido === "pasto"), "nunca pidió pasto");
  });
});

console.log("\nLa misma cerca, distinto terreno");
RANGOS.forEach((r) => {
  prueba(`[${r.id}] cada reto tiene suficientes terrenos distintos que armar`, () => {
    r.mismaCerca.perimetros.forEach((p) => {
      const formas = formasDe(p, r.mismaCerca.max);
      afirmar(formas.length >= r.mismaCerca.formas,
        `con ${p} tramos solo hay ${formas.length} terrenos y se piden ${r.mismaCerca.formas}`);
      formas.forEach((f) => {
        afirmar(2 * (f.corto + f.largo) === p, `${f.corto}×${f.largo} no usa ${p} tramos`);
        afirmar(f.area === f.corto * f.largo, "área mal calculada");
        afirmar(f.largo <= r.mismaCerca.max, "no cabe en la parcela");
      });
      const claves = formas.map((f) => `${f.corto}x${f.largo}`);
      afirmar(new Set(claves).size === claves.length, "hay formas repetidas");
    });
  });

  prueba(`[${r.id}] las formas van de menor a mayor área y la mejor es la más cuadrada`, () => {
    r.mismaCerca.perimetros.forEach((p) => {
      const formas = formasDe(p, r.mismaCerca.max);
      formas.forEach((f, i) => {
        if (i > 0) afirmar(f.area > formas[i - 1].area, "las áreas no van creciendo");
      });
      const mejor = formas[formas.length - 1];
      const maxima = Math.max(...formas.map((f) => f.area));
      afirmar(mejor.area === maxima, "la última no es la de mayor área");
      // La más cuadrada: la de menor diferencia entre sus lados.
      const masCuadrada = [...formas].sort((a, b) => (a.largo - a.corto) - (b.largo - b.corto))[0];
      afirmar(masCuadrada.area === mejor.area, "la más cuadrada no es la que más rinde");
    });
  });

  prueba(`[${r.id}] la partida son retos completos, con su remate al final`, () => {
    for (let i = 0; i < 60; i++) {
      const ronda = generarRondaMismaCerca(r);
      const cfg = r.mismaCerca;
      afirmar(ronda.length === cfg.retos * (cfg.formas + 1),
        `salieron ${ronda.length} pasos y se esperaban ${cfg.retos * (cfg.formas + 1)}`);
      for (let k = 0; k < ronda.length; k += cfg.formas + 1) {
        const bloque = ronda.slice(k, k + cfg.formas + 1);
        const p = bloque[0].perimetro;
        afirmar(bloque.every((e) => e.perimetro === p), "un reto mezcla dos perímetros");
        afirmar(bloque.slice(0, -1).every((e) => e.tipo === "armar"), "el reto no empieza armando");
        afirmar(bloque.slice(0, -1).every((e) => e.categoria === "area-rectangulo"),
          "armar debería registrarse como área");
        afirmar(bloque[bloque.length - 1].tipo === "maximo", "el reto no cierra con el remate");
        afirmar(bloque[bloque.length - 1].mejor.area ===
          Math.max(...formasDe(p, cfg.max).map((f) => f.area)), "el remate no apunta a la mejor forma");
      }
      const perimetros = ronda.filter((e) => e.tipo === "maximo").map((e) => e.perimetro);
      afirmar(new Set(perimetros).size === perimetros.length, "la partida repite un perímetro");
    }
  });
});

console.log("\nPartidas completas");
RANGOS.forEach((r) => {
  ["cerca-pasto", "misma-cerca"].forEach((juego) => {
    prueba(`[${r.id}] ${juego}: todas las categorías tienen etiqueta`, () => {
      generarPartida(juego, r.id).forEach((e) => {
        afirmar(!!CATEGORIAS[e.categoria], `categoría sin etiqueta: ${e.categoria}`);
      });
    });
  });
});

prueba("la confusión área/perímetro tiene etiqueta en el panel", () => {
  afirmar(!!CATEGORIAS["confusion-area-perimetro"], "falta la etiqueta de la confusión");
});

console.log(fallos === 0 ? "\nTodo en orden.\n" : `\n${fallos} prueba(s) fallaron.\n`);
process.exit(fallos === 0 ? 0 : 1);
