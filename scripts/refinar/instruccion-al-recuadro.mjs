// Mueve la INSTRUCCIÓN al recuadro en los reactivos de «oración con hueco».
//
// Antes había dos elementos para una sola idea: «Completa la oración» arriba, a
// cuerpo de titular, y la oración con el hueco abajo, dentro del recuadro. La
// instrucción no es la pregunta —la pregunta es la oración—, así que baja a
// rótulo dentro del propio recuadro.
//
// Sólo se mueven las INSTRUCCIONES. Los reactivos cuyo enunciado es una pregunta
// de contenido («¿Qué conector causal es el adecuado?») se quedan arriba:
// convertirlas en rótulo pequeño las degradaría de pregunta a etiqueta.
import { createServer } from "vite";
import { readFileSync, writeFileSync, readdirSync } from "node:fs";

const ES_INSTRUCCION = /^(completa|complete|elige)/i;
const DEFECTUOSO = /^\(|^\.»|\s,\s|^Complete:/;

const base = "src/data/presentaciones";
const rutas = [];
for (const d of readdirSync(base, { withFileTypes: true })) {
  if (!d.isDirectory()) continue;
  for (const f of readdirSync(`${base}/${d.name}`)) if (f.endsWith(".js")) rutas.push(`${base}/${d.name}/${f}`);
}

const servidor = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "warn" });
let movidos = 0, ficheros = 0;
const saltados = [];
for (const ruta of rutas) {
  const m = await servidor.ssrLoadModule("/" + ruta);
  if (!m.PRESENTACION) continue;
  let txt = readFileSync(ruta, "utf-8");
  let n = 0;
  const yaHechos = new Set();
  for (const sl of m.PRESENTACION.slides || []) {
    for (const b of sl.bloques || []) {
      if (b.tipo !== "pregunta" || !b.apoyo || !b.enunciado) continue;
      const esOracion = /_{2,}/.test(b.apoyo) && b.apoyo.trim().split(/\s+/).length >= 4;
      if (!esOracion) continue;
      const e = b.enunciado.trim();
      if (DEFECTUOSO.test(e)) { saltados.push(`${m.PRESENTACION.id}: defectuoso «${e}»`); continue; }
      if (!ES_INSTRUCCION.test(e)) continue;
      const viejo = `enunciado: ${JSON.stringify(b.enunciado)},`;
      if (yaHechos.has(viejo)) continue;
      if (!txt.includes(viejo)) { saltados.push(`${m.PRESENTACION.id}: no localicé «${e}»`); continue; }
      const cuenta = txt.split(viejo).length - 1;
      txt = txt.split(viejo).join(`apoyoRotulo: ${JSON.stringify(e)},`);
      yaHechos.add(viejo);
      n += cuenta;
    }
  }
  if (n) { writeFileSync(ruta, txt); ficheros++; movidos += n; }
}
await servidor.close();
console.log(`${movidos} instrucciones movidas al recuadro, en ${ficheros} presentaciones`);
if (saltados.length) { console.log(`saltados ${saltados.length}:`); [...new Set(saltados)].forEach(x => console.log("  " + x)); }
