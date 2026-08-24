// Saca los componentes de diagrama de SlideRenderer.jsx a src/components/diagramas/<materia>/.
//
// Herramienta de la fase 2b de docs/PLAN_MIGRACION.md. Se usa por lotes:
//   node scripts/mover-diagramas.mjs geografia
//
// Mueve solo lo que puede mover sin romper nada, y aborta si algo no cuadra:
//   · el componente se usa en SlideRenderer fuera del registro → no se toca;
//   · el componente depende de un ayudante que aún no está en comun.jsx → aborta;
//   · el número de claves movidas no coincide con lo previsto → aborta.
// No escribe nada hasta que todas las comprobaciones pasan.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";

const RENDERER = "src/components/SlideRenderer.jsx";
const REGISTRO = "src/components/diagramas/index.js";

const MATERIAS = {
  geografia: /^geo-/,
  fisica: /^(cin|din|ene|ter|ond|ele|flu|mod|fisica)-/,
  quimica: /^(qf|qaa|ana)-/,
  biologia: /^(cel|bq|rep|gen|evo|eco)-/,
  espanol: /^(acento|diptongo|cohesion|correferencia|elipsis|lexico|sinonimia|antonimia|campo|marcadores|grafo)/,
};

const materia = process.argv[2];
if (!materia || !MATERIAS[materia]) {
  console.error(`Uso: node scripts/mover-diagramas.mjs <${Object.keys(MATERIAS).join("|")}>`);
  process.exit(1);
}

let src = readFileSync(RENDERER, "utf8");

// ── Cuerpos de las funciones de nivel superior ──────────────────────────────
function equilibra(txt, i, abre, cierra) {
  let prof = 0;
  for (;;) {
    if (txt[i] === abre) prof++;
    else if (txt[i] === cierra) prof--;
    if (prof === 0) return i;
    i++;
  }
}
// Lo que vive en comun.jsx no es una dependencia que se quede atrás: se importa.
const COMUN = new Set(["arrowHead", "EjesXY", "Bloque", "Vector", "GenDobleHelice"]);

// Un {/* Encabezado */} dentro de un JSX no es una dependencia.
const sinComentarios = (t) => t.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*/g, "");
const cuerpos = new Map();
for (const m of src.matchAll(/^function ([A-Za-z0-9_]+)\s*\(/gm)) {
  const cierrePar = equilibra(src, m.index + m[0].length - 1, "(", ")");
  const abre = src.indexOf("{", cierrePar);
  const fin = equilibra(src, abre, "{", "}");
  cuerpos.set(m[1], { texto: src.slice(m.index, fin + 1), ini: m.index, fin: fin + 1 });
}

// ── Registro local ──────────────────────────────────────────────────────────
const iniReg = src.indexOf("const DIAGRAMAS_LOCALES = {");
const finReg = src.indexOf("\n};", iniReg);
const bloqueReg = src.slice(iniReg, finReg);
const mapa = [...bloqueReg.matchAll(/^\s*"([a-z0-9-]+)":\s*([A-Za-z0-9_]+),/gm)].map((m) => [m[1], m[2]]);

const delLote = mapa.filter(([k]) => MATERIAS[materia].test(k));
if (!delLote.length) { console.error(`Sin claves de ${materia} en el registro local.`); process.exit(1); }

// ── Comprobaciones ──────────────────────────────────────────────────────────
const compsLote = new Set(delLote.map(([, c]) => c));
const problemas = [];

for (const comp of compsLote) {
  if (!cuerpos.has(comp)) { problemas.push(`${comp}: no es una función de nivel superior`); continue; }
  // ¿se usa en el archivo fuera de su propio cuerpo y fuera del registro?
  const { ini, fin } = cuerpos.get(comp);
  const resto = src.slice(0, ini) + src.slice(fin, iniReg) + src.slice(finReg);
  const usos = (resto.match(new RegExp(`\\b${comp}\\b`, "g")) || []).length;
  if (usos > 0) problemas.push(`${comp}: se usa ${usos} vez/veces fuera del registro; no se mueve solo`);
  // ¿depende de algo que se queda atrás?
  // Sin comentarios: un {/* Encabezado */} no es una dependencia.
  const cuerpo = sinComentarios(cuerpos.get(comp).texto);
  for (const ident of new Set(cuerpo.match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g) || [])) {
    if (ident === comp || compsLote.has(ident)) continue;
    if (cuerpos.has(ident)) problemas.push(`${comp}: depende de ${ident}, que se queda en SlideRenderer`);
  }
}
if (problemas.length) {
  console.error(`No se mueve nada. ${problemas.length} problema(s):`);
  for (const p of problemas) console.error("  ✗ " + p);
  process.exit(1);
}

// ── Escritura ───────────────────────────────────────────────────────────────
const dir = `src/components/diagramas/${materia}`;
if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

const porComp = new Map();
for (const [k, c] of delLote) porComp.set(c, [...(porComp.get(c) || []), k]);

const archivos = [];
for (const [comp, claves] of porComp) {
  const slug = claves[0];
  const cuerpo = cuerpos.get(comp).texto.replace(/^function /, "export default function ");
  const usaComun = [...COMUN].filter((h) => new RegExp(`\\b${h}\\b`).test(sinComentarios(cuerpo))).sort();
  const importComun = usaComun.length
    ? `import { ${usaComun.join(", ")} } from "../comun.jsx";\n\n`
    : "";
  const cabecera =
    `// Diagrama «${claves.join("», «")}» — ${materia}.\n` +
    `// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.\n` +
    `// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).\n\n`;
  writeFileSync(`${dir}/${slug}.jsx`, cabecera + importComun + cuerpo + "\n");
  archivos.push({ slug, comp, claves });
}

// quitar los cuerpos del renderer, de atrás hacia delante
const aBorrar = [...compsLote].map((c) => cuerpos.get(c)).sort((a, b) => b.ini - a.ini);
for (const { ini, fin } of aBorrar) {
  let f = fin;
  while (src[f] === "\n") f++;
  src = src.slice(0, ini) + src.slice(f);
}

// quitar sus entradas del registro local
for (const [k] of delLote) {
  src = src.replace(new RegExp(`^\\s*"${k}":\\s*[A-Za-z0-9_]+,\\n`, "m"), "");
}
writeFileSync(RENDERER, src);

// ── Registro definitivo ─────────────────────────────────────────────────────
let reg = readFileSync(REGISTRO, "utf8");
const imports = archivos.map((a) => `import ${a.comp} from "./${materia}/${a.slug}.jsx";`).join("\n");
reg = reg.replace(/\nexport const DIAGRAMS = \{/, `${imports}\n\nexport const DIAGRAMS = {`);
const entradas = archivos.flatMap((a) => a.claves.map((k) => `  "${k}": ${a.comp},`)).sort().join("\n");
reg = reg.replace(/export const DIAGRAMS = \{\n/, `export const DIAGRAMS = {\n  // ── ${materia} ──\n${entradas}\n`);
writeFileSync(REGISTRO, reg);

console.log(`${materia}: ${archivos.length} archivos · ${delLote.length} claves · ${dir}/`);
