// Quita el recuadro cuando lo que contiene es UNA palabra que el enunciado ya
// muestra y que no es un espécimen: una letra suelta («g»), un sufijo («-aje»),
// un miembro de un par, o incluso un espacio en blanco. Enseñarla aislada no
// añade nada y repite lo que ya se lee arriba.
//
// La regla, la misma que se aplicó a los 208 de frase repetida: cuando el
// recuadro sólo copia algo que ya está en la pregunta, se va el recuadro. Los
// espécimen de verdad —contar sílabas, señalar la tónica, mirar una letra
// dentro de la palabra— los reescribió `variante-c-palabra.mjs` y no llegan aquí.
import { createServer } from "vite";
import { readFileSync, writeFileSync, readdirSync } from "node:fs";

const norm = (t) => (t || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[«»"'.,;:¿?¡!]/g, "").trim();

const base = "src/data/presentaciones";
const rutas = [];
for (const d of readdirSync(base, { withFileTypes: true })) {
  if (!d.isDirectory()) continue;
  for (const f of readdirSync(`${base}/${d.name}`)) if (f.endsWith(".js")) rutas.push(`${base}/${d.name}/${f}`);
}
const servidor = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "warn" });
let quitados = 0;
const noLocalizados = [];
for (const ruta of rutas) {
  const m = await servidor.ssrLoadModule("/" + ruta);
  if (!m.PRESENTACION) continue;
  let txt = readFileSync(ruta, "utf-8");
  let cambio = false;
  for (const sl of m.PRESENTACION.slides || []) {
    for (const b of sl.bloques || []) {
      if (b.tipo !== "pregunta" || !b.apoyo || !b.enunciado || b.preguntaDentro) continue;
      if (b.apoyo.trim().split(/\s+/).length > 1) continue;
      if (!norm(b.enunciado).includes(norm(b.apoyo))) continue;
      const copia = `apoyo: ${JSON.stringify(b.apoyo)},`;
      if (!txt.includes(copia)) { noLocalizados.push(`${m.PRESENTACION.id}: «${b.apoyo}»`); continue; }
      // También se lleva el pie, que describía cómo mirar el recuadro que ya no está.
      const pie = b.apoyoPie ? `apoyoPie: ${JSON.stringify(b.apoyoPie)},` : null;
      const antes = txt;
      txt = txt.replace(new RegExp(`\\s*${copia.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}` + (pie ? `\\s*${pie.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}` : ""), "g"), "");
      if (txt !== antes) { quitados += 1; cambio = true; }
    }
  }
  if (cambio) writeFileSync(ruta, txt);
}
await servidor.close();
console.log(`${quitados} recuadros de una palabra retirados`);
if (noLocalizados.length) { console.log("no localizados:"); [...new Set(noLocalizados)].forEach((x) => console.log("  " + x)); }
