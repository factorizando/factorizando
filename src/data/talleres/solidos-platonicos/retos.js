// El Reto — las diez preguntas, generadas al vuelo.
//
// Vienen en el orden en que se enseñan y no revueltas: primero contar sobre el
// sólido que está girando en pantalla (que es leer la figura, no recordarla),
// después el dual, y al final Euler.
//
// Las preguntas de Euler salen de una tabla que **no** son solo los cinco: hay
// pirámides y prismas. Si todas fueran platónicas, el alumno podría contestar
// de memoria en vez de usar la fórmula, y la fórmula es justamente lo que no
// depende de qué cuerpo sea.
import { barajar, elegir, serie } from "../azar.js";
import { SOLIDOS, SOLIDOS_POR_ID } from "./solidos.js";

export const PREGUNTAS_POR_PARTIDA = 10;

// Cuerpos con los que se practica Euler, además de los cinco.
const OTROS_CUERPOS = [
  { nombre: "una pirámide de base cuadrada", caras: 5, aristas: 8, vertices: 5 },
  { nombre: "un prisma triangular", caras: 5, aristas: 9, vertices: 6 },
  { nombre: "una pirámide de base pentagonal", caras: 6, aristas: 10, vertices: 6 },
  { nombre: "un prisma hexagonal", caras: 8, aristas: 18, vertices: 12 },
  { nombre: "una caja de zapatos", caras: 6, aristas: 12, vertices: 8 },
];

// Cuatro opciones: la correcta y tres distractores tomados de números que el
// alumno podría confundir de verdad —los otros conteos del mismo sólido, los
// de sus vecinos—, nunca de números al azar.
function opciones(correcta, candidatos) {
  const pozo = [...new Set(candidatos)].filter((n) => n !== correcta && n > 0);
  const extras = [correcta + 2, correcta - 2, correcta + 4, correcta * 2].filter(
    (n) => n > 0 && n !== correcta && !pozo.includes(n)
  );
  const elegidos = [...barajar(pozo), ...extras].slice(0, 3);
  return barajar([correcta, ...elegidos]).map(String);
}

const CONTEOS = SOLIDOS.flatMap((s) => [s.numCaras, s.numAristas, s.numVertices]);

const cap = (t) => t.charAt(0).toUpperCase() + t.slice(1);

// ── Contar sobre la figura ──────────────────────────────────────────────────
function retoContar() {
  const s = elegir(SOLIDOS);
  const que = elegir(["caras", "vertices", "aristas"]);
  const dato = { caras: s.numCaras, vertices: s.numVertices, aristas: s.numAristas }[que];

  return {
    clave: `contar-${s.id}-${que}`,
    categoria: `contar-${que}`,
    solidoId: s.id,
    ver: que,                                    // qué se resalta en la figura
    enunciado: {
      caras: `¿Cuántas caras tiene el ${s.nombre.toLowerCase()}?`,
      vertices: `¿Cuántos vértices (esquinas) tiene el ${s.nombre.toLowerCase()}?`,
      aristas: `¿Cuántas aristas (filos) tiene el ${s.nombre.toLowerCase()}?`,
    }[que],
    opciones: opciones(dato, CONTEOS),
    respuesta: String(dato),
    explicacion: {
      caras: `${s.numCaras} caras, todas ${s.caras}. De ahí el nombre: ${s.griego}.`,
      vertices: `${s.numVertices} vértices. En cada uno se juntan ${s.carasPorVertice} caras.`,
      aristas: `${s.numAristas} aristas. Cada arista es el filo donde se tocan dos caras.`,
    }[que],
  };
}

// ── Con quién hace pareja ───────────────────────────────────────────────────
function retoPareja() {
  const s = elegir(SOLIDOS);
  const d = SOLIDOS_POR_ID[s.dual];
  const otros = barajar(SOLIDOS.filter((x) => x.id !== d.id)).slice(0, 3);

  return {
    clave: `pareja-${s.id}`,
    categoria: "dual-pareja",
    solidoId: s.id,
    enunciado: `Le ponemos un punto al centro de cada cara del ${s.nombre.toLowerCase()} y unimos los puntos vecinos. ¿Qué sólido aparece?`,
    opciones: barajar([d.nombre, ...otros.map((x) => x.nombre)]),
    respuesta: d.nombre,
    explicacion:
      s.id === d.id
        ? "El tetraedro es su propio dual: tiene 4 caras y 4 vértices, así que al cambiarlas de lugar vuelve a salir un tetraedro, nada más volteado."
        : `El ${s.nombre.toLowerCase()} tiene ${s.numCaras} caras, y cada cara pone un vértice: el que aparece tiene ${s.numCaras} vértices y ${s.numVertices} caras. Ése es el ${d.nombre.toLowerCase()}.`,
  };
}

// ── Los números que se intercambian ─────────────────────────────────────────
function retoNumeros() {
  const s = elegir(SOLIDOS);
  const d = SOLIDOS_POR_ID[s.dual];
  const haciaVertices = Math.random() < 0.5;
  const encabezado = `El ${s.nombre.toLowerCase()} tiene ${s.numCaras} caras y ${s.numVertices} vértices.`;

  return haciaVertices
    ? {
        clave: `numeros-v-${s.id}`,
        categoria: "dual-numeros",
        solidoId: s.id,
        enunciado: `${encabezado} ¿Cuántos vértices tiene su dual?`,
        opciones: opciones(s.numCaras, [s.numVertices, s.numAristas, d.numAristas]),
        respuesta: String(s.numCaras),
        explicacion: `Cada cara del original deja un vértice en el dual: ${s.numCaras} caras → ${s.numCaras} vértices.`,
      }
    : {
        clave: `numeros-c-${s.id}`,
        categoria: "dual-numeros",
        solidoId: s.id,
        enunciado: `${encabezado} ¿Cuántas caras tiene su dual?`,
        opciones: opciones(s.numVertices, [s.numCaras, s.numAristas, d.numAristas]),
        respuesta: String(s.numVertices),
        explicacion: `Alrededor de cada vértice del original hay ${s.carasPorVertice} caras, y sus ${s.carasPorVertice} puntos forman una cara del dual: ${s.numVertices} vértices → ${s.numVertices} caras.`,
      };
}

function retoAristas() {
  const s = elegir(SOLIDOS);
  const d = SOLIDOS_POR_ID[s.dual];

  return {
    clave: `aristas-${s.id}`,
    categoria: "dual-aristas",
    solidoId: s.id,
    enunciado: `El ${s.nombre.toLowerCase()} tiene ${s.numAristas} aristas. ¿Cuántas aristas tiene el ${d.nombre.toLowerCase()}, que es su dual?`,
    opciones: opciones(s.numAristas, [s.numCaras, s.numVertices, s.numCaras + s.numVertices]),
    respuesta: String(s.numAristas),
    explicacion: `Las mismas: ${s.numAristas}. Cada arista del original separa dos caras, y esas dos caras son dos vértices del dual que quedan unidos. Una arista de aquí, una arista de allá.`,
  };
}

// ── Euler ───────────────────────────────────────────────────────────────────
function retoEuler() {
  const cuerpos = [
    ...SOLIDOS.map((s) => ({
      nombre: `el ${s.nombre.toLowerCase()}`, solidoId: s.id,
      caras: s.numCaras, aristas: s.numAristas, vertices: s.numVertices,
    })),
    ...OTROS_CUERPOS,
  ];
  const c = elegir(cuerpos);
  const falta = elegir(["caras", "aristas", "vertices"]);
  const dato = c[falta];

  return {
    clave: `euler-${c.nombre}-${falta}`,
    categoria: "euler",
    solidoId: c.solidoId || null,
    enunciado: {
      caras: `${cap(c.nombre)} tiene ${c.aristas} aristas y ${c.vertices} vértices. ¿Cuántas caras tiene?`,
      aristas: `${cap(c.nombre)} tiene ${c.caras} caras y ${c.vertices} vértices. ¿Cuántas aristas tiene?`,
      vertices: `${cap(c.nombre)} tiene ${c.caras} caras y ${c.aristas} aristas. ¿Cuántos vértices tiene?`,
    }[falta],
    apoyo: "C + V − A = 2",
    opciones: opciones(dato, [c.caras, c.aristas, c.vertices, dato + 1, dato - 1]),
    respuesta: String(dato),
    explicacion: "En cualquier cuerpo como éste, caras + vértices − aristas = 2. Despejando: " + {
      caras: `C = 2 + A − V = 2 + ${c.aristas} − ${c.vertices} = ${c.caras}`,
      aristas: `A = C + V − 2 = ${c.caras} + ${c.vertices} − 2 = ${c.aristas}`,
      vertices: `V = 2 + A − C = 2 + ${c.aristas} − ${c.caras} = ${c.vertices}`,
    }[falta] + ".",
  };
}

// La partida: dos de contar, cinco de dual y tres de Euler, en ese orden. El
// orden es la clase; lo que cambia entre partidas es el contenido.
export function generarPartida() {
  return [
    ...serie(retoContar, 2, { clave: (r) => r.clave }),
    ...barajar([
      ...serie(retoPareja, 2, { clave: (r) => r.clave }),
      ...serie(retoNumeros, 2, { clave: (r) => r.clave }),
      retoAristas(),
    ]),
    ...serie(retoEuler, 3, { clave: (r) => r.clave }),
  ];
}
