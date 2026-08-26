// Al subir la instrucción a `apoyoRotulo`, los 186 reactivos quedaron con la
// misma idea dos veces dentro del mismo recuadro: «COMPLETA LA ORACIÓN» encima
// y «ELIGE LA PALABRA QUE FALTA» debajo, las dos en versalitas. Antes se
// toleraba porque la instrucción estaba arriba a cuerpo de titular y el pie era
// una nota; ahora son dos rótulos idénticos en jerarquía. Se queda el de arriba.
import { createServer } from "vite";
import { readFileSync, writeFileSync, readdirSync } from "node:fs";

const base = "src/data/presentaciones";
const rutas = [];
for (const d of readdirSync(base, { withFileTypes: true })) {
  if (!d.isDirectory()) continue;
  for (const f of readdirSync(`${base}/${d.name}`)) if (f.endsWith(".js")) rutas.push(`${base}/${d.name}/${f}`);
}
const servidor = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "warn" });
let quitados = 0;
for (const ruta of rutas) {
  const m = await servidor.ssrLoadModule("/" + ruta);
  if (!m.PRESENTACION) continue;
  const pies = new Set();
  for (const sl of m.PRESENTACION.slides || [])
    for (const b of sl.bloques || [])
      if (b.tipo === "pregunta" && b.apoyoRotulo && b.apoyoPie) pies.add(b.apoyoPie);
  if (!pies.size) continue;
  let txt = readFileSync(ruta, "utf-8");
  let n = 0;
  for (const pie of pies) {
    // Se borra la línea entera del pie sólo dentro de bloques que ya tienen
    // rótulo; se localiza por la pareja rótulo→apoyo→pie, que es el orden en
    // que están escritos.
    const re = new RegExp(`(apoyoRotulo: [^\\n]*\\n\\s*apoyo: [^\\n]*\\n)\\s*apoyoPie: ${JSON.stringify(pie).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")},\\n`, "g");
    txt = txt.replace(re, (_, antes) => { n += 1; return antes; });
  }
  if (n) { writeFileSync(ruta, txt); quitados += n; }
}
await servidor.close();
console.log(`${quitados} pies redundantes quitados`);
