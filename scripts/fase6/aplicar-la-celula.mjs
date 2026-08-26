// Inserta las 100 explicaciones de `la-celula`, comprobando antes que el índice
// del mapa corresponde a la pregunta que creo. La comprobación no es paranoia:
// el banco se rebarajó, y escribir la explicación equivocada en la pregunta
// equivocada sería peor que dejarla vacía.
import { createServer } from "vite";
import { readFileSync, writeFileSync } from "node:fs";
import { LA_CELULA } from "./explicaciones-la-celula.mjs";

const RUTA = "src/data/cuestionarios/biologia/la-celula.js";
const servidor = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "warn" });
const { default: banco } = await servidor.ssrLoadModule("/" + RUTA);
await servidor.close();

const huecos = banco.questions.map((q, i) => (q.explanation ? null : i)).filter((i) => i !== null);
const mios = Object.keys(LA_CELULA).map(Number);
if (huecos.length !== mios.length || huecos.some((i) => !(i in LA_CELULA))) {
  console.error(`huecos ${huecos.length}, explicaciones ${mios.length}: no cuadran`);
  process.exit(1);
}

let txt = readFileSync(RUTA, "utf-8");
let n = 0;
// El banco escribe cada pregunta en una línea y termina en `explanation: "" }`,
// sin coma: la expresión no puede exigirla.
txt = txt.replace(/explanation: ""/g, () => `explanation: ${JSON.stringify(LA_CELULA[huecos[n++]])}`);
if (n !== huecos.length) { console.error(`esperaba ${huecos.length} huecos, encontré ${n}`); process.exit(1); }
writeFileSync(RUTA, txt);
console.log(`${n} explicaciones escritas`);
