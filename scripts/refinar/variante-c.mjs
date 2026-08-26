// Aplica la variante C: la pregunta se compone DENTRO del recuadro, encima del
// espécimen, en el color del texto del tema; el acento queda para el espécimen.
//
// Tres situaciones distintas, y sólo dos son mecánicas:
//
//  1. La pregunta ya es una pregunta real y el recuadro lleva la oración con
//     hueco. No hay nada repetido: basta la bandera.
//  2. El recuadro repite la FRASE que ya está dentro de la pregunta. Aquí NO se
//     reescribe la pregunta: de 208, sólo 7 tienen el patrón «frase» — pregunta;
//     las demás la incrustan a media frase y recortarla dejaría enunciados rotos
//     («En la oración , ¿qué conector…»). Se quita el `apoyo`, que es la copia.
//  3. El recuadro es una PALABRA que la pregunta ya nombra. Ahí sí se reescribe,
//     con reglas explícitas y revisando una por una: son pocas.
import { createServer } from "vite";
import { readFileSync, writeFileSync, readdirSync } from "node:fs";

const norm = (t) => (t || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[«»"'.,;:¿?¡!]/g, "").trim();
const DEFECTUOSO = /^\(|^\.»|\s,\s|^Complete:/;

const base = "src/data/presentaciones";
const rutas = [];
for (const d of readdirSync(base, { withFileTypes: true })) {
  if (!d.isDirectory()) continue;
  for (const f of readdirSync(`${base}/${d.name}`)) if (f.endsWith(".js")) rutas.push(`${base}/${d.name}/${f}`);
}

const servidor = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "warn" });
const cuenta = { bandera: 0, copiaFuera: 0, saltados: [] };

for (const ruta of rutas) {
  const m = await servidor.ssrLoadModule("/" + ruta);
  if (!m.PRESENTACION) continue;
  let txt = readFileSync(ruta, "utf-8");
  let cambio = false;
  // `split/join` sustituye TODAS las líneas idénticas, así que dos reactivos con
  // el mismo enunciado recibían la bandera dos veces y el objeto quedaba con la
  // clave repetida. Lo cazó el linter, no el build.
  const yaHechos = new Set();

  for (const sl of m.PRESENTACION.slides || []) {
    for (const b of sl.bloques || []) {
      if (b.tipo !== "pregunta" || !b.apoyo || !b.enunciado) continue;
      if (b.preguntaDentro) continue;
      if (DEFECTUOSO.test(b.enunciado.trim())) { cuenta.saltados.push(`${m.PRESENTACION.id}: «${b.enunciado.trim()}»`); continue; }

      const esOracion = /_{2,}/.test(b.apoyo) && b.apoyo.trim().split(/\s+/).length >= 4;
      const repetido = norm(b.enunciado).includes(norm(b.apoyo));
      const esPalabra = b.apoyo.trim().split(/\s+/).length === 1;

      // La palabra suelta se trata en el otro script: hay que reescribir texto.
      if (repetido && esPalabra) continue;

      const linea = `enunciado: ${JSON.stringify(b.enunciado)},`;
      if (yaHechos.has(linea)) continue;
      yaHechos.add(linea);
      if (!txt.includes(linea)) { cuenta.saltados.push(`${m.PRESENTACION.id}: no localicé el enunciado`); continue; }

      if (repetido && !esOracion && !/_{2,}/.test(b.apoyo)) {
        // Caso 2: el recuadro es una copia. Se va el recuadro, no la pregunta.
        const copia = `apoyo: ${JSON.stringify(b.apoyo)},`;
        if (txt.includes(copia)) {
          txt = txt.split(copia).join("");
          txt = txt.split(linea).join(`preguntaDentro: true,\n          ${linea}`);
          cuenta.copiaFuera += 1;
          cambio = true;
          continue;
        }
      }
      // Caso 1: sólo la bandera.
      txt = txt.split(linea).join(`preguntaDentro: true,\n          ${linea}`);
      cuenta.bandera += 1;
      cambio = true;
    }
  }
  if (cambio) writeFileSync(ruta, txt);
}
await servidor.close();
console.log(`bandera puesta (pregunta + oración con hueco): ${cuenta.bandera}`);
console.log(`copia del recuadro retirada (la frase ya está en la pregunta): ${cuenta.copiaFuera}`);
if (cuenta.saltados.length) { console.log(`saltados ${cuenta.saltados.length}:`); [...new Set(cuenta.saltados)].forEach(x => console.log("  " + x)); }
