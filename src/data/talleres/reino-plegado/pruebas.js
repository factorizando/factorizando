/* global process */ // este archivo se corre con node, no en el navegador
// Pruebas rápidas del Reino Plegado:
//
//     node src/data/talleres/reino-plegado/pruebas.js
//
// Cubren las tres cosas que, de estar mal, se descubrirían frente a un niño:
// un mapa donde no se pueda llegar a un portal o a la salida, un acertijo cuya
// respuesta no cuadre, y un nivel que pida acertijos de un tema que nadie
// escribió.
import { MUNDOS, GRADOS, portalesDe, buscarCasilla, acertijosDeNivel, temasDelNivel } from "./index.js";
import { GENERADORES } from "./acertijos/matematicas.js";
import { BANCO } from "./acertijos/espanol.js";
import { TEMAS_JUEGO, temasDe } from "./grados.js";

let fallos = 0;
const prueba = (nombre, fn) => {
  try { fn(); console.log(`  ok  ${nombre}`); }
  catch (e) { fallos++; console.log(`  NO  ${nombre}\n      ${e.message}`); }
};
const afirmar = (c, m) => { if (!c) throw new Error(m); };
const veces = (n, fn) => Array.from({ length: n }, fn);

console.log("\nEl Reino Plegado\n");

// ── Mapas ─────────────────────────────────────────────────────────────────
// Recorre el mapa desde la entrada como lo haría el jugador, casilla a casilla.
function alcanzables(nivel) {
  const rejilla = nivel.mapa.map((f) => f.split(""));
  const inicio = buscarCasilla(nivel, "@");
  const vistos = new Set([`${inicio.fila}:${inicio.columna}`]);
  const cola = [inicio];
  while (cola.length) {
    const { fila, columna } = cola.shift();
    for (const [df, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const f = fila + df, c = columna + dc;
      const k = `${f}:${c}`;
      if (vistos.has(k)) continue;
      if (f < 0 || c < 0 || f >= rejilla.length || c >= rejilla[f].length) continue;
      if (rejilla[f][c] === "#") continue;
      vistos.add(k);
      cola.push({ fila: f, columna: c });
    }
  }
  return vistos;
}

console.log("Mapas");
MUNDOS.filter((m) => m.niveles.length).forEach((mundo) => {
  mundo.niveles.forEach((nivel) => {
    prueba(`[${mundo.id}/${nivel.id}] «${nivel.nombre}» está bien dibujado y se puede terminar`, () => {
      const anchos = new Set(nivel.mapa.map((f) => f.length));
      afirmar(anchos.size === 1, "las filas no miden lo mismo");
      afirmar(buscarCasilla(nivel, "@"), "no hay entrada");
      afirmar(buscarCasilla(nivel, "S"), "no hay salida");
      afirmar(portalesDe(nivel) >= 2, "un nivel con menos de dos portales no da para medir nada");

      const vistos = alcanzables(nivel);
      nivel.mapa.forEach((fila, f) => {
        fila.split("").forEach((ch, c) => {
          if (ch === "?" || ch === "S") {
            afirmar(vistos.has(`${f}:${c}`), `no se puede llegar al «${ch}» de la fila ${f}, columna ${c}`);
          }
        });
      });

      const borde = nivel.mapa[0] + nivel.mapa[nivel.mapa.length - 1];
      afirmar(!borde.includes("."), "el mundo plano tiene que estar cerrado por arriba y por abajo");
    });
  });
});

// ── Acertijos de matemáticas ──────────────────────────────────────────────
console.log("\nAcertijos de matemáticas");
Object.entries(GENERADORES).forEach(([tema, generar]) => {
  const grados = TEMAS_JUEGO.find((t) => t.tema === tema)?.grados || [];
  prueba(`«${tema}» genera bien en ${grados.join(", ")}.º`, () => {
    afirmar(grados.length, "el tema no está en la tabla de grados");
    grados.forEach((g) => {
      veces(400, () => {
        const e = generar(g);
        afirmar(typeof e.enunciado === "string" && e.enunciado.length > 12, "enunciado vacío");
        afirmar(Number.isInteger(e.respuesta), `la respuesta no es un entero: ${e.respuesta}`);
        afirmar(e.respuesta > 0, `respuesta no positiva: ${e.respuesta}`);
        afirmar(typeof e.explicacion === "string" && e.explicacion.length > 10, "sin explicación");
        afirmar(typeof e.clave === "string", "sin clave");
        afirmar(!/¿Cuántos (macetas|monedas|manzanas|palomas)/.test(e.enunciado)
          && !/¿Cuántas (faroles|ladrillos|libros|costales|platos|frascos)/.test(e.enunciado),
          `concordancia mal: ${e.enunciado}`);
      });
    });
  });
});

prueba("la suma y la resta cuadran con lo que dicen", () => {
  [3, 4].forEach((g) => veces(600, () => {
    const e = GENERADORES["suma-resta"](g);
    const { a, b, signo } = e.figura.props;
    afirmar(e.respuesta === (signo === "+" ? a + b : a - b), `${a} ${signo} ${b} ≠ ${e.respuesta}`);
    if (g === 3) {
      afirmar(String(a % 10 + (b % 10)).length === 1 || signo === "−",
        "en 3.º no debería haber que llevar");
    }
  }));
});

prueba("el perímetro y el área cuadran con su figura", () => {
  [4, 5].forEach((g) => veces(600, () => {
    const e = GENERADORES["perimetro-area"](g);
    const p = e.figura.props;
    if (e.figura.tipo === "rectangulo") {
      const esperado = p.resaltar === "borde" ? 2 * (p.ancho + p.alto) : p.ancho * p.alto;
      afirmar(e.respuesta === esperado, `${p.ancho}×${p.alto} → ${e.respuesta}`);
    } else {
      afirmar(e.respuesta === (p.base * p.altura) / 2, "el triángulo no es la mitad del rectángulo");
    }
  }));
});

prueba("la ruta del cartero es un camino de verdad, sin saltos", () => {
  veces(600, () => {
    const e = GENERADORES["planos-trayectorias"](4);
    const { ruta, ancho, alto } = e.figura.props;
    afirmar(e.respuesta === ruta.length - 1, "las cuadras no son los tramos de la ruta");
    ruta.forEach(([x, y], i) => {
      afirmar(x >= 0 && x <= ancho && y >= 0 && y <= alto, "la ruta se sale del croquis");
      if (i === 0) return;
      const [px, py] = ruta[i - 1];
      afirmar(Math.abs(x - px) + Math.abs(y - py) === 1, "la ruta brinca de una esquina a otra");
    });
  });
});

// ── Banco de español ──────────────────────────────────────────────────────
console.log("\nBanco de español");
prueba("todos los reactivos están bien formados", () => {
  BANCO.forEach((r) => {
    afirmar(r.opciones.length === 4, `«${r.pregunta}» no tiene cuatro opciones`);
    afirmar(new Set(r.opciones).size === 4, `«${r.pregunta}» repite una opción`);
    afirmar(r.correcta === 0, "por convención la respuesta se escribe primero y se revuelve al servirla");
    afirmar(r.explicacion?.length > 15, `«${r.pregunta}» sin explicación`);
    afirmar(temasDe(r.grado, "espanol").includes(r.tema),
      `«${r.tema}» no está declarado en ${r.grado}.º en la tabla de grados`);
  });
});

prueba("las opciones se revuelven al servirse", () => {
  // Si no se revolvieran, la correcta saldría siempre en la posición 0.
  const posiciones = new Set();
  veces(60, () => {
    const a = acertijosDeNivel({ mundoId: "flatland", grado: 3, cantidad: 4 })
      .find((x) => x.materia === "espanol");
    if (a) posiciones.add(a.correcta);
  });
  afirmar(posiciones.size > 1, "la respuesta correcta siempre cae en el mismo lugar");
});

// ── Niveles completos ─────────────────────────────────────────────────────
console.log("\nNiveles completos");
MUNDOS.filter((m) => m.niveles.length).forEach((mundo) => {
  [3, 4].forEach((grado) => {
    prueba(`[${mundo.id}] un nivel de ${grado}.º se llena de acertijos`, () => {
      mundo.niveles.forEach((nivel) => {
        const n = portalesDe(nivel);
        const tanda = acertijosDeNivel({ mundoId: mundo.id, grado, cantidad: n });
        afirmar(tanda.length === n, `${nivel.id}: ${tanda.length} acertijos para ${n} portales`);
        afirmar(new Set(tanda.map((a) => a.clave)).size === n, `${nivel.id}: acertijos repetidos`);
        tanda.forEach((a) => {
          afirmar(["numero", "opciones"].includes(a.tipo), "tipo desconocido");
          if (a.tipo === "opciones") afirmar(a.opciones[a.correcta], "la correcta no apunta a nada");
        });
      });
    });
  });
});

prueba("todo grado tiene de dónde sacar acertijos en el mundo 1", () => {
  GRADOS.forEach((g) => {
    const t = temasDelNivel("flatland", g);
    afirmar(t.matematicas.length + t.espanol.length > 0, `${g}.º se quedaría sin acertijos`);
  });
});

console.log(fallos === 0 ? "\nTodo en orden.\n" : `\n${fallos} prueba(s) fallaron.\n`);
process.exit(fallos === 0 ? 0 : 1);
