// Reparte la posición de la respuesta correcta.
//
// El problema medido: en `la-celula`, 79 de 100 respuestas correctas estaban en
// la segunda opción. Un alumno que contestara siempre «b» sacaba 79 sobre 100
// sin saber biología, y el banco dejaba de medir nada. En `producto-enteros`,
// 162 de 250. No es un detalle de estilo: invalida el instrumento.
//
// Baraja las opciones de cada pregunta y mueve `correctAnswer` con ellas. La
// semilla es fija para que dos corridas den el mismo resultado y el diff se
// pueda revisar. En los bancos cuyas opciones llevan el prefijo «a) », «b) »…
// se re-letra después de barajar, porque esas letras son texto visible: el
// componente de cuestionario no las pone, las pinta tal cual vienen.
import { createServer } from "vite";
import { readFileSync, writeFileSync } from "node:fs";

// Ya corridos: la-celula (letras: true). Se dejan comentados en vez de borrados
// para que quede claro qué bancos se tocaron y con qué semilla.
const BANCOS = [
  // { ruta: "src/data/cuestionarios/biologia/la-celula.js", letras: true },   ✔ hecho
  { ruta: "src/data/cuestionarios/biologia/celula-organelos.js", letras: false },
  { ruta: "src/data/cuestionarios/matematicas/producto-enteros.js", letras: false },
];

// PRNG con semilla (mulberry32): reproducible entre corridas y entre máquinas.
function azar(semilla) {
  let a = semilla;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const PREFIJO = /^([a-d])\)\s*/u;
const LETRAS = ["a", "b", "c", "d", "e", "f"];

const servidor = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "warn" });
for (const { ruta, letras } of BANCOS) {
  const { default: banco } = await servidor.ssrLoadModule("/" + ruta);
  const rnd = azar(20260825);
  let txt = readFileSync(ruta, "utf-8");
  const reparto = {};
  let cambiadas = 0;

  banco.questions.forEach((q, i) => {
    const original = q.options.slice();
    const correcto = original[q.correctAnswer];
    // Fisher-Yates sobre los índices.
    const orden = original.map((_, k) => k);
    for (let k = orden.length - 1; k > 0; k -= 1) {
      const j = Math.floor(rnd() * (k + 1));
      [orden[k], orden[j]] = [orden[j], orden[k]];
    }
    let nuevas = orden.map((k) => original[k]);
    let nuevoIdx = nuevas.indexOf(correcto);

    if (letras) {
      const sinLetra = nuevas.map((o) => o.replace(PREFIJO, ""));
      if (sinLetra.some((o, k) => o === nuevas[k])) {
        console.error(`${ruta} · pregunta ${i}: esperaba prefijo «x) » en todas las opciones`);
        process.exit(1);
      }
      nuevas = sinLetra.map((o, k) => `${LETRAS[k]}) ${o}`);
      nuevoIdx = orden.findIndex((k) => k === q.correctAnswer);
    }

    reparto[nuevoIdx] = (reparto[nuevoIdx] || 0) + 1;

    const viejoBloque = `options: ${JSON.stringify(original)},`;
    const nuevoBloque = `options: ${JSON.stringify(nuevas)},`;
    if (viejoBloque === nuevoBloque && q.correctAnswer === nuevoIdx) return;
    // Se localiza el objeto de ESTA pregunta por su enunciado, que es único.
    const enunciado = `question: ${JSON.stringify(q.question)},`;
    const pos = txt.indexOf(enunciado);
    if (pos < 0) { console.error(`${ruta} · no encontré el enunciado ${i}`); process.exit(1); }
    const fin = txt.indexOf("explanation:", pos);
    const trozo = txt.slice(pos, fin);
    const reemplazo = trozo
      .replace(/options: \[[\s\S]*?\],/, nuevoBloque)
      .replace(/correctAnswer: \d+,/, `correctAnswer: ${nuevoIdx},`);
    txt = txt.slice(0, pos) + reemplazo + txt.slice(fin);
    cambiadas += 1;
  });

  writeFileSync(ruta, txt);
  const n = banco.questions.length;
  const pct = Object.entries(reparto).sort().map(([k, v]) => `${k}:${v}`).join(" ");
  console.log(`${ruta.split("/").pop().padEnd(24)} ${cambiadas}/${n} reordenadas · reparto → ${pct}`);
}
await servidor.close();
