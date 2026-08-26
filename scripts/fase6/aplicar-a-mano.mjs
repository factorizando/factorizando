// Inserta las explicaciones escritas a mano y corrige de paso tres enunciados
// que la auditoría encontró mal redactados. Comprueba que cada índice del mapa
// corresponda a una pregunta que sigue sin explicación: si el banco se reordena,
// falla en vez de escribir la explicación equivocada en la pregunta equivocada.
import { createServer } from "vite";
import { readFileSync, writeFileSync } from "node:fs";
import { A_MANO } from "./explicaciones-a-mano.mjs";

const RUTA = "src/data/cuestionarios/matematicas/producto-enteros.js";
const servidor = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "warn" });
const { default: banco } = await servidor.ssrLoadModule("/" + RUTA);
await servidor.close();

const huecos = banco.questions.map((q, i) => (q.explanation ? null : i)).filter((i) => i !== null);
const mios = Object.keys(A_MANO).map(Number).sort((a, b) => a - b);
const sobran = mios.filter((i) => !huecos.includes(i));
const faltan = huecos.filter((i) => !mios.includes(i));
if (sobran.length || faltan.length) {
  console.error(`el mapa no cuadra con el banco · índices que ya tenían explicación: ${sobran.join(",") || "—"} · huecos sin cubrir: ${faltan.join(",") || "—"}`);
  process.exit(1);
}

let txt = readFileSync(RUTA, "utf-8");
let n = 0, puestas = 0;
txt = txt.replace(/explanation: "",/g, () => {
  const i = huecos[n++];
  puestas++;
  return `explanation: ${JSON.stringify(A_MANO[i])},`;
});
if (n !== huecos.length) { console.error(`esperaba ${huecos.length} huecos, encontré ${n}`); process.exit(1); }

// Tres enunciados que la auditoría encontró defectuosos.
const ARREGLOS = [
  // Regalaba la respuesta en el propio paréntesis.
  ['question: "¿Cuánto es (−6)² ÷ (−4) × 1? (solo la multiplicación de −9 × 1)",',
   'question: "¿Cuánto es (−6)² ÷ (−4) × 1?",'],
  // No había lectura que diera 2000: «comer el doble» no se conecta con el
  // déficit. Reescrita como doble negación, que es justo lo que enseña el banco.
  ['question: "Un glotón come el doble de calorías recomendadas (−500 kcal de déficit) por 4 días. ¿Cuánto \'extra\' consume?",',
   'question: "Cada día que entrena, un deportista acumula un déficit de −500 kcal. Si deja de entrenar 4 días, ¿cuántas kcal deja de perder?",'],
  ['question: "¿Cuánto factores negativos tiene (−a)⁶ si a > 0?",',
   'question: "¿Cuántos factores negativos tiene (−a)⁶ si a > 0?",'],
];
for (const [viejo, nuevo] of ARREGLOS) {
  if (!txt.includes(viejo)) { console.error("no encontré el enunciado a corregir:\n  " + viejo); process.exit(1); }
  txt = txt.replace(viejo, nuevo);
}
writeFileSync(RUTA, txt);
console.log(`${puestas} explicaciones a mano · ${ARREGLOS.length} enunciados corregidos`);
