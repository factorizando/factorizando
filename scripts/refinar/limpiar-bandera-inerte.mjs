// Los 208 reactivos a los que se les quitó el recuadro se quedaron con
// `preguntaDentro: true` puesto. La bandera sólo hace algo si hay recuadro —el
// componente exige `apoyo`— así que ahí no cambia nada y sólo engaña a quien lea
// el archivo creyendo que la pregunta se compone dentro de una caja que no existe.
import { createServer } from "vite";
import { readFileSync, writeFileSync, readdirSync } from "node:fs";

const base = "src/data/presentaciones";
const rutas = [];
for (const d of readdirSync(base, { withFileTypes: true })) {
  if (!d.isDirectory()) continue;
  for (const f of readdirSync(`${base}/${d.name}`)) if (f.endsWith(".js")) rutas.push(`${base}/${d.name}/${f}`);
}
const servidor = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "warn" });
let quitadas = 0;
for (const ruta of rutas) {
  const m = await servidor.ssrLoadModule("/" + ruta);
  if (!m.PRESENTACION) continue;
  const sinRecuadro = [];
  for (const sl of m.PRESENTACION.slides || [])
    for (const b of sl.bloques || [])
      if (b.tipo === "pregunta" && b.preguntaDentro && !b.apoyo) sinRecuadro.push(b.enunciado);
  if (!sinRecuadro.length) continue;
  let txt = readFileSync(ruta, "utf-8");
  for (const e of sinRecuadro) {
    const bloque = `preguntaDentro: true,\n          enunciado: ${JSON.stringify(e)},`;
    if (!txt.includes(bloque)) continue;
    txt = txt.split(bloque).join(`enunciado: ${JSON.stringify(e)},`);
    quitadas += 1;
  }
  writeFileSync(ruta, txt);
}
await servidor.close();
console.log(`${quitadas} banderas inertes retiradas`);
