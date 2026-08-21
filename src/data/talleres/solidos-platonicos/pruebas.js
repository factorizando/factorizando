// Pruebas de la geometría y de los generadores. Se corren a mano, sin framework:
//
//     node src/data/talleres/solidos-platonicos/pruebas.js
//
// Aquí importan más que en los otros talleres, porque las caras de cada sólido
// **no están tecleadas**: las deduce `construir()`. Si esa deducción fallara,
// el taller no mostraría un error de cálculo sino un cuerpo que no existe, y
// nadie lo notaría mirando la pantalla. Lo que se verifica es por tanto que
// cada sólido salga regular (todas las aristas iguales, todas las caras del
// mismo número de lados, todos los vértices del mismo grado), que valga Euler,
// y que el dual haga lo que el taller dice que hace: intercambiar caras con
// vértices, dejar las aristas quietas y devolver el original al aplicarlo dos
// veces.
/* global process */ // este archivo se corre con node, no en el navegador
import { GEOMETRIA, construir, dual, euler, normalizado, distancia, largo, punto, unitario } from "./poliedros.js";
import { SOLIDOS, SOLIDOS_POR_ID } from "./solidos.js";
import { CATEGORIAS } from "./index.js";
import { generarPartida, PREGUNTAS_POR_PARTIDA } from "./retos.js";

const EPS = 1e-6;
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

const iguales = (nums) => Math.max(...nums) - Math.min(...nums) < 1e-9;

// Lo que debe salir. Es la única tabla tecleada del taller, y existe para
// contrastar contra lo que se calcula.
const ESPERADO = {
  tetraedro:  { caras: 4,  aristas: 6,  vertices: 4,  lados: 3, grado: 3, dual: "tetraedro" },
  hexaedro:   { caras: 6,  aristas: 12, vertices: 8,  lados: 4, grado: 3, dual: "octaedro" },
  octaedro:   { caras: 8,  aristas: 12, vertices: 6,  lados: 3, grado: 4, dual: "hexaedro" },
  dodecaedro: { caras: 12, aristas: 30, vertices: 20, lados: 5, grado: 3, dual: "icosaedro" },
  icosaedro:  { caras: 20, aristas: 30, vertices: 12, lados: 3, grado: 5, dual: "dodecaedro" },
};

console.log("\nLos Cinco Sólidos · geometría deducida y generadores\n");

// ── Que cada sólido sea el que dice ser ─────────────────────────────────────
console.log("Construcción de los cinco");

Object.entries(ESPERADO).forEach(([id, e]) => {
  const g = GEOMETRIA[id];

  prueba(`[${id}] ${e.caras} caras, ${e.aristas} aristas, ${e.vertices} vértices`, () => {
    afirmar(g.caras.length === e.caras, `salieron ${g.caras.length} caras`);
    afirmar(g.aristas.length === e.aristas, `salieron ${g.aristas.length} aristas`);
    afirmar(g.vertices.length === e.vertices, `salieron ${g.vertices.length} vértices`);
  });

  prueba(`[${id}] es regular: aristas iguales, caras de ${e.lados} lados, vértices de grado ${e.grado}`, () => {
    const largos = g.aristas.map(([a, b]) => distancia(g.vertices[a], g.vertices[b]));
    afirmar(iguales(largos), `las aristas miden entre ${Math.min(...largos)} y ${Math.max(...largos)}`);
    afirmar(g.caras.every((c) => c.length === e.lados), "hay caras con distinto número de lados");
    afirmar(iguales(g.vertices.map((v) => largo(v))), "los vértices no están todos a la misma distancia del centro");
    g.vertices.forEach((_, i) => {
      const grado = g.caras.filter((c) => c.includes(i)).length;
      afirmar(grado === e.grado, `el vértice ${i} toca ${grado} caras`);
    });
  });

  prueba(`[${id}] cada cara es un polígono regular y plano, con los vértices en orden`, () => {
    g.caras.forEach((cara, k) => {
      const n = g.normales[k];
      const alturas = cara.map((i) => punto(g.vertices[i], n));
      afirmar(iguales(alturas), `la cara ${k} no es plana`);
      // Recorrer la cara en orden tiene que ir saltando de arista en arista:
      // si el orden estuviera mal, algún salto sería una diagonal.
      const lados = cara.map((i, p) => distancia(g.vertices[i], g.vertices[cara[(p + 1) % cara.length]]));
      afirmar(iguales(lados), `la cara ${k} no quedó en orden o no es regular`);
      afirmar(Math.abs(lados[0] - g.arista) < EPS, `la cara ${k} no usa la arista del sólido`);
    });
  });

  prueba(`[${id}] C − A + V = 2`, () => {
    afirmar(euler(g) === 2, `dio ${euler(g)}`);
  });
});

// ── El dual, que es de lo que trata el taller ───────────────────────────────
console.log("\nEl dual");

Object.entries(ESPERADO).forEach(([id, e]) => {
  const g = GEOMETRIA[id];
  const d = dual(g);

  prueba(`[${id}] el dual intercambia caras y vértices y conserva las aristas`, () => {
    afirmar(d.caras.length === e.vertices, `el dual tiene ${d.caras.length} caras y el original ${e.vertices} vértices`);
    afirmar(d.vertices.length === e.caras, `el dual tiene ${d.vertices.length} vértices y el original ${e.caras} caras`);
    afirmar(d.aristas.length === e.aristas, `el dual tiene ${d.aristas.length} aristas y el original ${e.aristas}`);
  });

  prueba(`[${id}] su dual es el ${e.dual}, y la ficha lo dice así`, () => {
    afirmar(SOLIDOS_POR_ID[id].dual === e.dual, `la ficha dice ${SOLIDOS_POR_ID[id].dual}`);
    const canonico = GEOMETRIA[e.dual];
    afirmar(d.caras.length === canonico.caras.length && d.vertices.length === canonico.vertices.length,
      "el dual calculado no coincide en cuentas con el sólido canónico");
    // Semejante al canónico: misma proporción entre arista y radio.
    const forma = (p) => p.arista / p.circunradio;
    afirmar(Math.abs(forma(d) - forma(canonico)) < 1e-9, "el dual no es semejante al sólido canónico");
  });

  prueba(`[${id}] el dual del dual es el original`, () => {
    const dd = normalizado(dual(d), 1);
    afirmar(dd.vertices.length === g.vertices.length, "no coinciden los vértices");
    // Mismo conjunto de puntos: cada vértice de uno está sobre uno del otro.
    dd.vertices.forEach((v) => {
      const cerca = g.vertices.some((w) => distancia(v, w) < 1e-9);
      afirmar(cerca, `el vértice [${v.map((x) => x.toFixed(3))}] no cayó sobre ninguno del original`);
    });
  });

  prueba(`[${id}] los vértices del dual están sobre las caras del original`, () => {
    d.vertices.forEach((v, k) => {
      // Cada vértice del dual es el centro de una cara: está en su plano y en
      // la dirección de su normal.
      afirmar(Math.abs(punto(v, g.normales[k]) - g.inradio) < 1e-9, "no está en el plano de su cara");
      const u = unitario(v);
      afirmar(distancia(u, g.normales[k]) < 1e-9, "no está en la dirección de la normal de su cara");
    });
  });
});

prueba("[tetraedro] es su propio dual, pero volteado", () => {
  const g = GEOMETRIA.tetraedro;
  const d = normalizado(dual(g), 1);
  afirmar(SOLIDOS_POR_ID.tetraedro.dual === "tetraedro", "la ficha no lo dice");
  const encima = d.vertices.some((v) => g.vertices.some((w) => distancia(v, w) < 1e-9));
  afirmar(!encima, "el dual cayó sobre el original en vez de quedar volteado");
  d.vertices.forEach((v) => {
    const opuesto = g.vertices.some((w) => distancia(v, w.map((x) => -x)) < 1e-9);
    afirmar(opuesto, "el dual no es el original con los vértices invertidos");
  });
});

// ── Lo que promete la animación de la sala del Dual ─────────────────────────
console.log("\nLo que dice la animación, paso por paso");

Object.keys(ESPERADO).forEach((id) => {
  const g = GEOMETRIA[id];
  const d = dual(g);

  // Paso 2: "dos puntos se unen cuando sus caras se tocan". No es un detalle
  // del dibujo, es la definición de las aristas del dual, y si fuera falsa la
  // animación estaría uniendo puntos que no van juntos.
  prueba(`[${id}] paso 2: dos puntos se unen exactamente cuando sus caras comparten arista`, () => {
    const comparten = (a, b) => {
      const ca = g.caras[a], cb = g.caras[b];
      return ca.filter((v) => cb.includes(v)).length === 2;
    };
    const unidos = new Set(d.aristas.map(([a, b]) => `${Math.min(a, b)}-${Math.max(a, b)}`));
    for (let a = 0; a < g.caras.length; a++) {
      for (let b = a + 1; b < g.caras.length; b++) {
        const tocan = comparten(a, b);
        const unido = unidos.has(`${a}-${b}`);
        afirmar(tocan === unido,
          tocan ? `las caras ${a} y ${b} se tocan pero sus puntos no se unen`
                : `las caras ${a} y ${b} no se tocan pero sus puntos aparecen unidos`);
      }
    }
  });

  // Paso 3: "alrededor de cada vértice hay k caras y sus k puntos cierran una
  // cara del dual". Es la frase que explica por qué los vértices se vuelven
  // caras, y la animación la dibuja.
  prueba(`[${id}] paso 3: cada vértice del original produce una cara del dual con sus caras alrededor`, () => {
    afirmar(d.caras.length === g.vertices.length, "no hay una cara del dual por vértice");
    g.vertices.forEach((_, v) => {
      const alrededor = g.caras.map((c, k) => (c.includes(v) ? k : -1)).filter((k) => k >= 0);
      afirmar(alrededor.length === g.carasPorVertice, `el vértice ${v} no toca ${g.carasPorVertice} caras`);
      const cara = d.caras.find((c) => c.length === alrededor.length
        && alrededor.every((k) => c.includes(k)));
      afirmar(cara, `las caras alrededor del vértice ${v} no forman una cara del dual`);
    });
  });

  // Paso 4: el dual "se saca" multiplicando por 1 / inradio. Que eso lo deje
  // del tamaño del original es lo que permite compararlos, y es la cuenta que
  // hace el bucle de la animación.
  prueba(`[${id}] paso 4: al crecer 1/inradio veces, el dual queda del mismo tamaño`, () => {
    afirmar(Math.abs(d.circunradio - g.inradio) < 1e-9,
      "los vértices del dual no nacen a la distancia de las caras del original");
    const crecido = d.circunradio / g.inradio;
    afirmar(Math.abs(crecido - 1) < 1e-9, `queda a radio ${crecido} en vez de 1`);
  });
});

// ── Casos que no son de los cinco: la construcción no debe saberse la tabla ──
console.log("\nLa construcción no supone que el cuerpo sea platónico");

prueba("una pirámide de base cuadrada sale con 5 caras, 8 aristas y 5 vértices", () => {
  const p = construir([[1, 1, 0], [-1, 1, 0], [-1, -1, 0], [1, -1, 0], [0, 0, 1.4]]);
  afirmar(p.caras.length === 5, `salieron ${p.caras.length} caras`);
  afirmar(p.aristas.length === 8, `salieron ${p.aristas.length} aristas`);
  afirmar(p.vertices.length === 5, `salieron ${p.vertices.length} vértices`);
  afirmar(euler(p) === 2, `Euler dio ${euler(p)}`);
});

prueba("un prisma triangular sale con 5 caras, 9 aristas y 6 vértices", () => {
  const t = [[1, 0], [-0.5, 0.866], [-0.5, -0.866]];
  const p = construir(t.flatMap(([x, y]) => [[x, y, 1], [x, y, -1]]));
  afirmar(p.caras.length === 5, `salieron ${p.caras.length} caras`);
  afirmar(p.aristas.length === 9, `salieron ${p.aristas.length} aristas`);
  afirmar(euler(p) === 2, `Euler dio ${euler(p)}`);
});

// ── Los generadores del reto ────────────────────────────────────────────────
console.log("\nEl Reto · generador de preguntas");

const partidas = Array.from({ length: 300 }, () => generarPartida());

prueba(`cada partida trae ${PREGUNTAS_POR_PARTIDA} preguntas`, () => {
  partidas.forEach((p) => afirmar(p.length === PREGUNTAS_POR_PARTIDA, `trajo ${p.length}`));
});

prueba("toda pregunta tiene 4 opciones distintas y la respuesta está entre ellas", () => {
  partidas.flat().forEach((r) => {
    afirmar(r.opciones.length === 4, `«${r.clave}» trae ${r.opciones.length} opciones`);
    afirmar(new Set(r.opciones).size === 4, `«${r.clave}» repite una opción: ${r.opciones.join(", ")}`);
    afirmar(r.opciones.includes(r.respuesta), `«${r.clave}» no incluye su respuesta`);
  });
});

prueba("toda categoría que sale tiene etiqueta para el panel del maestro", () => {
  const vistas = new Set(partidas.flat().map((r) => r.categoria));
  vistas.forEach((c) => afirmar(CATEGORIAS[c], `categoría sin etiqueta: «${c}»`));
});

prueba("las respuestas de dualidad coinciden con la geometría calculada", () => {
  partidas.flat().forEach((r) => {
    if (!r.solidoId) return;
    const s = SOLIDOS_POR_ID[r.solidoId];
    if (r.categoria === "dual-pareja") {
      afirmar(r.respuesta === SOLIDOS_POR_ID[s.dual].nombre, `«${r.clave}» responde ${r.respuesta}`);
    }
    if (r.categoria === "dual-aristas") {
      afirmar(Number(r.respuesta) === s.numAristas, `«${r.clave}» responde ${r.respuesta}`);
    }
    if (r.categoria === "contar-caras") afirmar(Number(r.respuesta) === s.numCaras, r.clave);
    if (r.categoria === "contar-vertices") afirmar(Number(r.respuesta) === s.numVertices, r.clave);
    if (r.categoria === "contar-aristas") afirmar(Number(r.respuesta) === s.numAristas, r.clave);
  });
});

prueba("los cuerpos de las preguntas de Euler cumplen C + V − A = 2", () => {
  // La pregunta da dos datos y pide el tercero: si la terna no cumpliera
  // Euler, la respuesta "correcta" sería la que no sale de la fórmula.
  partidas.flat().filter((r) => r.categoria === "euler").forEach((r) => {
    const nums = [...r.enunciado.matchAll(/(\d+)/g)].map((m) => Number(m[1]));
    const [a, b] = nums;
    const c = Number(r.respuesta);
    const terna = [a, b, c].sort((x, y) => x - y);
    // El mayor de los tres tiene que ser las aristas, y C + V − A = 2.
    const A = terna[2], C = terna[0], V = terna[1];
    afirmar(C + V - A === 2, `«${r.clave}»: ${C} + ${V} − ${A} = ${C + V - A}`);
  });
});

prueba("la ficha de cada sólido no contradice a la geometría", () => {
  SOLIDOS.forEach((s) => {
    const g = GEOMETRIA[s.id];
    afirmar(s.numCaras === g.caras.length && s.numAristas === g.aristas.length
      && s.numVertices === g.vertices.length, `la ficha de ${s.id} no cuadra`);
    afirmar(s.ladosPorCara === g.ladosPorCara, `los lados por cara de ${s.id} no cuadran`);
    afirmar(SOLIDOS_POR_ID[s.dual], `el dual de ${s.id} no es uno de los cinco`);
  });
});

console.log(fallos === 0 ? "\nTodo bien.\n" : `\n${fallos} prueba(s) sin pasar.\n`);
process.exit(fallos === 0 ? 0 : 1);
