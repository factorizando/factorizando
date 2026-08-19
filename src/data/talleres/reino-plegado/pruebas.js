/* global process */ // este archivo se corre con node, no en el navegador
// Pruebas rápidas del Reino Plegado:
//
//     node src/data/talleres/reino-plegado/pruebas.js
//
// Cubren las tres cosas que, de estar mal, se descubrirían frente a un niño:
// un mapa donde no se pueda llegar a un portal o a la salida, un acertijo cuya
// respuesta no cuadre, y un nivel que pida acertijos de un tema que nadie
// escribió.
import {
  MUNDOS, GRADOS, portalesDe, portalesDelMapa, buscarCasilla, enlacesDe,
  acertijosDeNivel,
} from "./index.js";
import { GENERADORES } from "./acertijos/matematicas.js";
import { BANCO } from "./acertijos/espanol.js";
import { TEMAS_JUEGO, temasDe } from "./grados.js";
// El movimiento vive con los componentes porque es lógica de juego, pero es JS
// puro y aquí hace falta para recorrer los mapas como los recorre el jugador.
import { mover } from "../../../components/talleres/reino-plegado/lib/movimiento.js";

let fallos = 0;
const prueba = (nombre, fn) => {
  try { fn(); console.log(`  ok  ${nombre}`); }
  catch (e) { fallos++; console.log(`  NO  ${nombre}\n      ${e.message}`); }
};
const afirmar = (c, m) => { if (!c) throw new Error(m); };
const veces = (n, fn) => Array.from({ length: n }, fn);

console.log("\nEl Reino Plegado\n");

// ── Mapas ─────────────────────────────────────────────────────────────────
// Recorre el mapa desde la entrada como lo haría el jugador: con la topología
// del mundo puesta, así que en el toro las orillas se cruzan y en la banda,
// además, se voltean.
function alcanzables(nivel, topologia) {
  const enlaces = topologia === "escher" ? enlacesDe(nivel) : null;
  const inicio = buscarCasilla(nivel, "@");
  const vistos = new Set([`${inicio.fila}:${inicio.columna}`]);
  const cola = [inicio];
  while (cola.length) {
    const p = cola.shift();
    for (const d of ["arriba", "abajo", "izquierda", "derecha"]) {
      const q = mover(p, d, { mapa: nivel.mapa, topologia, enlaces });
      const k = `${q.fila}:${q.columna}`;
      if (!vistos.has(k)) { vistos.add(k); cola.push(q); }
    }
  }
  return vistos;
}

const BORDES = {
  // arriba/abajo cerrados, lados cerrados
  plano: { arriba: true, lados: true },
  // se ve igual de cerrado que el plano; lo que lo dobla son los pasajes
  escher: { arriba: true, lados: true },
  // los lados son costuras; arriba y abajo siguen siendo pared
  mobius: { arriba: true, lados: false },
  // no hay orillas
  toro: { arriba: false, lados: false },
};

console.log("Mapas");
MUNDOS.filter((m) => m.niveles.length).forEach((mundo) => {
  mundo.niveles.forEach((nivel) => {
    prueba(`[${mundo.id}/${nivel.id}] «${nivel.nombre}» está bien dibujado y se puede terminar`, () => {
      const anchos = new Set(nivel.mapa.map((f) => f.length));
      afirmar(anchos.size === 1, "las filas no miden lo mismo");
      afirmar(buscarCasilla(nivel, "@"), "no hay entrada");
      afirmar(buscarCasilla(nivel, "S"), "no hay salida");
      afirmar(portalesDe(nivel) >= 2, "un nivel con menos de dos portales no da para medir nada");

      const vistos = alcanzables(nivel, mundo.topologia);
      nivel.mapa.forEach((fila, f) => {
        fila.split("").forEach((ch, c) => {
          if (ch === "?" || ch === "S") {
            afirmar(vistos.has(`${f}:${c}`), `no se puede llegar al «${ch}» de la fila ${f}, columna ${c}`);
          }
        });
      });

      // Los bordes tienen que corresponder a la topología: una costura tapiada
      // con muro no se cruza nunca, y una orilla abierta en el plano es un
      // agujero por donde el jugador se sale del mundo.
      const b = BORDES[mundo.topologia];
      const arriba = nivel.mapa[0] + nivel.mapa[nivel.mapa.length - 1];
      const lados = nivel.mapa.map((f) => f[0] + f[f.length - 1]).join("");
      if (b.arriba) afirmar(!arriba.includes("."), "arriba y abajo deberían ser pared en este mundo");
      if (b.lados) afirmar(!lados.includes("."), "los lados deberían ser pared en este mundo");
      else afirmar(lados.includes("."), "la costura de los lados quedó tapiada con muro");
    });
  });
});

prueba("en los mundos doblados hay que cruzar la costura de verdad", () => {
  // Si un nivel del toro, de la banda o del taller de Escher se puede terminar
  // caminando como en un plano, entonces la topología es decorado y el mundo no
  // enseña nada.
  MUNDOS.filter((m) => m.niveles.length && m.topologia !== "plano").forEach((mundo) => {
    mundo.niveles.forEach((nivel) => {
      const enElPlano = alcanzables(nivel, "plano");
      const salida = buscarCasilla(nivel, "S");
      const faltantes = [...portalesDelMapa(nivel), salida]
        .filter((p) => !enElPlano.has(`${p.fila}:${p.columna}`));
      afirmar(faltantes.length > 0,
        `${mundo.id}/${nivel.id} se termina sin cruzar ninguna orilla`);
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
        if (e.tipo === "opciones") {
          afirmar(e.opciones.length >= 2, "un reactivo de opción múltiple con menos de dos opciones");
          afirmar(new Set(e.opciones).size === e.opciones.length, `opciones repetidas: ${e.opciones}`);
          afirmar(e.opciones[e.correcta] === e.respuesta,
            `la correcta no apunta a la respuesta: ${e.opciones[e.correcta]} ≠ ${e.respuesta}`);
        } else {
          afirmar(Number.isInteger(e.respuesta), `la respuesta no es un entero: ${e.respuesta}`);
          afirmar(e.respuesta > 0, `respuesta no positiva: ${e.respuesta}`);
        }
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
    if (r.orden) {
      afirmar(r.orden.length >= 3, `«${r.pregunta}» necesita al menos tres tarjetas`);
      afirmar(new Set(r.orden).size === r.orden.length, `«${r.pregunta}» repite una tarjeta`);
      afirmar(r.explicacion?.length > 15, `«${r.pregunta}» sin explicación`);
      afirmar(temasDe(r.grado, "espanol").includes(r.tema),
        `«${r.tema}» no está declarado en ${r.grado}.º en la tabla de grados`);
      return;
    }
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
  GRADOS.forEach((grado) => {
    prueba(`[${mundo.id}] un nivel de ${grado}.º se llena de acertijos`, () => {
      mundo.niveles.forEach((nivel) => {
        const n = portalesDe(nivel);
        const tanda = acertijosDeNivel({ mundoId: mundo.id, grado, cantidad: n });
        afirmar(tanda.length === n, `${nivel.id}: ${tanda.length} acertijos para ${n} portales`);
        afirmar(new Set(tanda.map((a) => a.clave)).size === n, `${nivel.id}: acertijos repetidos`);
        tanda.forEach((a) => {
          afirmar(["numero", "opciones", "orden"].includes(a.tipo), `tipo desconocido: ${a.tipo}`);
          if (a.tipo === "opciones") afirmar(a.opciones[a.correcta], "la correcta no apunta a nada");
          if (a.tipo === "orden") {
            afirmar(a.tarjetas.length === a.orden.length, "faltan tarjetas");
            afirmar(a.tarjetas.some((t, i) => t !== a.orden[i]), "las tarjetas se sirvieron ya ordenadas");
          }
        });
      });
    });
  });
});

prueba("los pasajes del mundo 4 vienen de dos en dos", () => {
  MUNDOS.filter((m) => m.topologia === "escher").forEach((mundo) => {
    mundo.niveles.forEach((nivel) => {
      const letras = nivel.mapa.join("").split("").filter((c) => /[a-z]/.test(c));
      const cuenta = {};
      letras.forEach((l) => { cuenta[l] = (cuenta[l] || 0) + 1; });
      Object.entries(cuenta).forEach(([l, n]) => {
        afirmar(n === 2, `${nivel.id}: el pasaje «${l}» aparece ${n} ${n === 1 ? "vez" : "veces"} y no dos`);
      });
      afirmar(Object.keys(enlacesDe(nivel)).length === letras.length,
        `${nivel.id}: algún pasaje quedó suelto`);
    });
  });
});

prueba("un mundo sin contenido de un grado sirve el más cercano", () => {
  // El taller de Escher se arma con temas de 5.º y 6.º; un niño de 3.º tiene
  // que recibir algo, y anotado con el grado que de verdad salió.
  const tanda = acertijosDeNivel({ mundoId: "escher", grados: { matematicas: 3, espanol: 3 }, cantidad: 4 });
  afirmar(tanda.length === 4, `se quedó sin acertijos: ${tanda.length}`);
  tanda.forEach((a) => {
    afirmar(a.grado >= 4, `sirvió un acertijo de ${a.grado}.º, que este mundo no trabaja`);
    afirmar(GRADOS.includes(a.grado), "grado fuera de rango");
  });
});

prueba("en caravana, cada portal sale del grado de quien lo abre", () => {
  // Es la razón de ser del modo: un mismo tablero jugado por niños de grados
  // distintos, y a cada uno lo suyo. Los acertijos se piden de uno en uno, con
  // el escalón del jugador en turno y una memoria compartida de lo ya visto.
  const usados = new Set();
  const chico = acertijosDeNivel({
    mundoId: "flatland", grados: { matematicas: 3, espanol: 3 }, cantidad: 1,
    materia: "matematicas", usados,
  })[0];
  const grande = acertijosDeNivel({
    mundoId: "flatland", grados: { matematicas: 6, espanol: 6 }, cantidad: 1,
    materia: "matematicas", usados,
  })[0];
  afirmar(chico.grado === 3, `al de 3.º le tocó ${chico.grado}.º`);
  afirmar(grande.grado === 6, `al de 6.º le tocó ${grande.grado}.º`);
  afirmar(chico.clave !== grande.clave, "la memoria compartida no evitó el repetido");
});

prueba("todo grado tiene de dónde sacar acertijos en todos los mundos con mapas", () => {
  MUNDOS.filter((m) => m.niveles.length).forEach((m) => {
    GRADOS.forEach((g) => {
      const tanda = acertijosDeNivel({ mundoId: m.id, grados: { matematicas: g, espanol: g }, cantidad: 3 });
      afirmar(tanda.length === 3, `${m.id} dejaría a ${g}.º sin acertijos`);
    });
  });
});

console.log(fallos === 0 ? "\nTodo en orden.\n" : `\n${fallos} prueba(s) fallaron.\n`);
process.exit(fallos === 0 ? 0 : 1);
