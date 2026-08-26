// Genera las `explanation` de `producto-enteros` y las verifica contra la clave.
//
// Por qué generarlas y no escribirlas a mano: son 250 y casi todas son la misma
// pregunta con otros números. Y por qué NO copiar el estilo del banco hermano
// `suma-enteros`, cuyas explicaciones dicen «5 + 3 = 8. Sumamos directamente.»:
// repetir la operación no enseña nada. En el producto de enteros lo que el
// alumno falla es el SIGNO, así que cada explicación nombra la regla —cuántos
// factores negativos hay, y si son par o impar— antes de dar el número.
//
// El generador se demuestra a sí mismo: calcula el resultado y lo compara con
// `correctAnswer`. Si discrepan, aborta. Así encontró que la pregunta 248 tenía
// la clave equivocada.
import { createServer } from "vite";
import { readFileSync, writeFileSync } from "node:fs";

const RUTA = "src/data/cuestionarios/matematicas/producto-enteros.js";
const MENOS = "−"; // U+2212, el mismo que usan los enunciados
const SUP = { "⁰": 0, "¹": 1, "²": 2, "³": 3, "⁴": 4, "⁵": 5, "⁶": 6, "⁷": 7, "⁸": 8, "⁹": 9 };
const aNum = (t) => Number(String(t).replace(/[−–—]/g, "-").replace(/[()\s]/g, ""));
const fmt = (n) => (n < 0 ? MENOS + Math.abs(n) : String(n));

// Descompone una expresión de puros productos en factores {base, exp}.
function factores(expr) {
  const partes = expr.replace(/\s+/g, "").split(/[×·*]/);
  const out = [];
  for (const p of partes) {
    const pot = p.match(/^\(?([−–—-]?\d+)\)?([⁰¹²³⁴⁵⁶⁷⁸⁹]+)$/u);
    if (pot) { out.push({ base: aNum(pot[1]), exp: [...pot[2]].reduce((a, c) => a * 10 + SUP[c], 0) }); continue; }
    const simple = p.match(/^\(?([−–—-]?\d+)\)?$/u);
    if (simple) { out.push({ base: aNum(simple[1]), exp: 1 }); continue; }
    return null;
  }
  return out.length ? out : null;
}

// Escribe la potencia como el producto que es: el alumno no «ve» los seis
// factores negativos de (−1)¹ × (−1)² × (−1)³ hasta que están desplegados.
function expandir(fs) {
  return fs
    .flatMap((f) => Array(f.exp).fill(f.base < 0 ? `(${fmt(f.base)})` : String(f.base)))
    .join(" × ");
}

function explicar(fs) {
  const valor = fs.reduce((a, f) => a * Math.pow(f.base, f.exp), 1);
  if (fs.some((f) => f.base === 0)) {
    return "Un factor es 0, y eso basta para que todo el producto sea 0.";
  }
  const negativos = fs.reduce((a, f) => a + (f.base < 0 ? f.exp : 0), 0);
  const magnitud = fs.reduce((a, f) => a * Math.pow(Math.abs(f.base), f.exp), 1);
  const hayPotencia = fs.some((f) => f.exp > 1);
  const desplegado = hayPotencia ? `La potencia es un producto repetido: ${expandir(fs)}. ` : "";

  if (negativos === 0) {
    return `${desplegado}${expandir(fs)} = ${magnitud}.`.replace(/^(.*?)\. \1 =/, "$1 =");
  }
  const par = negativos % 2 === 0;
  const cuantos = negativos === 1 ? "un factor negativo" : `${negativos} factores negativos`;
  const paridad = negativos === 1 ? "" : `, y ${negativos} es ${par ? "par" : "impar"}`;
  const regla = par
    ? "los negativos se emparejan y se cancelan, así que el producto es positivo"
    : "queda un negativo sin pareja, así que el producto es negativo";
  const cierre = par
    ? `Resultado: ${magnitud}.`
    : `Sin signos daría ${magnitud}; con el negativo, ${fmt(valor)}.`;
  return `${desplegado}Hay ${cuantos}${paridad}: ${regla}. ${cierre}`;
}

const servidor = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "warn" });
const { default: banco } = await servidor.ssrLoadModule("/" + RUTA);
await servidor.close();

const nuevas = [];
const problemas = [];
banco.questions.forEach((q, i) => {
  const m = q.question.match(/¿Cuánto es (.+?)\?/u) || q.question.match(/^(.+?),\s*¿cuánto es\?/u);
  const fs = m ? factores(m[1]) : null;
  if (!fs) { nuevas.push(null); return; }
  const valor = fs.reduce((a, f) => a * Math.pow(f.base, f.exp), 1);
  const clave = aNum(q.options[q.correctAnswer]);
  if (valor !== clave) {
    problemas.push(`  ${i}: "${q.question}" → calculo ${valor}, la clave dice ${q.options[q.correctAnswer]}`);
    nuevas.push(null);
    return;
  }
  nuevas.push(explicar(fs));
});

if (problemas.length) {
  console.error(`La clave y el cálculo no coinciden en ${problemas.length} preguntas. No escribo nada:`);
  problemas.forEach((p) => console.error(p));
  process.exit(1);
}

// Se sustituye la n-ésima `explanation: ""` por la n-ésima explicación: las
// preguntas están en el archivo en el mismo orden que en el arreglo.
let txt = readFileSync(RUTA, "utf-8");
let n = 0, escritas = 0;
txt = txt.replace(/explanation: "",/g, () => {
  const e = nuevas[n++];
  if (!e) return 'explanation: "",';
  escritas++;
  return `explanation: ${JSON.stringify(e)},`;
});
if (n !== banco.questions.length) { console.error(`esperaba ${banco.questions.length} huecos y encontré ${n}`); process.exit(1); }
writeFileSync(RUTA, txt);
console.log(`${escritas} explicaciones escritas · ${n - escritas} quedan a mano`);
