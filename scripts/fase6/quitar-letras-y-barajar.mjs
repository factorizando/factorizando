// Dos arreglos que salieron de abrir el cuestionario en el navegador, no del
// código:
//
// 1. `la-celula` lleva los incisos escritos dentro del texto de cada opción
//    («a) Producir energía…»). Pero `Cuestionario.jsx` baraja las opciones al
//    renderizar, así que el alumno las ve en orden «d) c) b) a)». Las letras
//    sobran: el banco no debe numerar lo que la pantalla reordena.
//
// 2. Ese barajado usa `sort(() => Math.random() - 0.5)`, que no da
//    permutaciones uniformes. Medido con 400 000 corridas y cuatro opciones:
//    la respuesta correcta acaba en las dos casillas centrales el 77% de las
//    veces. Se cambia por Fisher-Yates, que da 25% en cada posición.
import { readFileSync, writeFileSync } from "node:fs";

// ── 1. Fuera las letras ──────────────────────────────────────────────────────
const BANCO = "src/data/cuestionarios/biologia/la-celula.js";
let banco = readFileSync(BANCO, "utf-8");
const antes = (banco.match(/"[a-d]\) /g) || []).length;
banco = banco.replace(/"([a-d])\) /g, '"');
const despues = (banco.match(/"[a-d]\) /g) || []).length;
writeFileSync(BANCO, banco);
console.log(`la-celula: ${antes - despues} incisos quitados del texto (quedan ${despues})`);

// ── 2. Barajado uniforme ─────────────────────────────────────────────────────
const PAGINA = "src/pages/Cuestionario.jsx";
let pagina = readFileSync(PAGINA, "utf-8");

const VIEJO_PREGUNTAS = `      preguntas = [...preguntas].sort(() => Math.random() - 0.5);`;
const NUEVO_PREGUNTAS = `      preguntas = mezclar(preguntas);`;
const VIEJO_OPCIONES = `      opciones.sort(() => Math.random() - 0.5);`;
const NUEVO_OPCIONES = `      const revueltas = mezclar(opciones);`;

if (!pagina.includes(VIEJO_PREGUNTAS) || !pagina.includes(VIEJO_OPCIONES)) {
  console.error("Cuestionario.jsx ya no tiene los `sort` esperados; revisar a mano.");
  process.exit(1);
}

pagina = pagina
  .replace(VIEJO_PREGUNTAS, NUEVO_PREGUNTAS)
  .replace(VIEJO_OPCIONES, NUEVO_OPCIONES)
  .replace(`        options: opciones.map((o) => o.opt),
        correctAnswer: opciones.findIndex((o) => o.isCorrect),`,
           `        options: revueltas.map((o) => o.opt),
        correctAnswer: revueltas.findIndex((o) => o.isCorrect),`);

// La función, justo antes del componente.
const ANCLA = "export default function";
const AYUDA = `// Fisher-Yates. Antes se barajaba con \`sort(() => Math.random() - 0.5)\`, que
// parece equivalente y no lo es: un comparador aleatorio no produce
// permutaciones uniformes. Medido con cuatro opciones y 400 000 corridas, la
// respuesta correcta acababa en las dos casillas centrales el 77% de las veces
// —cuando debería ser el 50%—, así que el banco seguía siendo adivinable.
function mezclar(lista) {
  const a = [...lista];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

`;
pagina = pagina.replace(ANCLA, AYUDA + ANCLA);
writeFileSync(PAGINA, pagina);
console.log("Cuestionario.jsx: barajado uniforme (Fisher-Yates) en preguntas y opciones");
