// Los reactivos cuyo recuadro es UNA palabra que la pregunta ya nombra.
// Con la variante C la pregunta entra al recuadro, así que si sigue diciendo la
// palabra, la duplicación vuelve dentro de la misma caja. Hay que reescribirla.
//
// No es mecánico del todo —hay catorce formas distintas— pero son pocas, así que
// se hace con reglas explícitas y el script imprime CADA reescritura para poder
// revisarlas. Lo que ninguna regla cubre se deja intacto y se reporta.
import { createServer } from "vite";
import { readFileSync, writeFileSync, readdirSync } from "node:fs";

// Cada regla recibe el enunciado y la palabra, y devuelve el enunciado nuevo o
// null si no aplica. `P` es la palabra escapada para meterla en una expresión.
// Sólo se reescriben los casos donde la palabra del recuadro es de verdad un
// ESPÉCIMEN: algo que se mira aislado —contar sus sílabas, señalar su tónica,
// mirar una de sus letras—. Fuera quedan a propósito:
//
//  · los pares y listas («¿Qué antonimia expresan «verdadero» y «falso»?»):
//    llevarse una mitad al recuadro rompe la pareja, que es el ejercicio;
//  · los términos entrecomillados dentro de una frase («El «alimento» que la
//    planta fabrica…»): ahí las comillas marcan una acepción, no un espécimen;
//  · cualquier enunciado que nombre la palabra más de una vez.
//
// Lo que no encaje se queda como está: la pregunta arriba y el recuadro debajo.
// Forzar la variante C en un reactivo que no es de espécimen lo empeora.
const REGLAS = [
  [/^¿Cuántas sílabas tiene la palabra «X»\?$/i, "¿Cuántas sílabas tiene la siguiente palabra?"],
  [/^¿Cuál es el silabeo correcto de «X»\?$/i, "¿Cuál es el silabeo correcto de la siguiente palabra?"],
  [/^¿Cuál es la sílaba tónica de «X»\?$/i, "¿Cuál es la sílaba tónica de la siguiente palabra?"],
  [/^La palabra «X» es:$/i, "La siguiente palabra es:"],
  [/^La palabra «X» lleva el acento en:$/i, "La siguiente palabra lleva el acento en:"],
  [/^La palabra «X» forma diptongo porque:$/i, "La siguiente palabra forma diptongo porque:"],
  [/^La forma «X» necesita tilde porque:$/i, "La siguiente forma necesita tilde porque:"],
  [/^«X» no lleva tilde\. ¿Cuál es su sílaba tónica\?$/i, "La siguiente palabra no lleva tilde. ¿Cuál es su sílaba tónica?"],
  [/^En la palabra «X», la letra «([^»]+)»:$/i, "En la siguiente palabra, la letra «$1»:"],
  [/^En la palabra «X», la letra «([^»]+)» representa el fonema:$/i, "En la siguiente palabra, la letra «$1» representa el fonema:"],
  [/^La h en la palabra «X» es:$/i, "La h en la siguiente palabra es:"],
  [/^El plural de «X» es:$/i, "El plural de la siguiente palabra es:"],
  [/^El adverbio derivado de «X» se escribe:$/i, "El adverbio derivado de la siguiente palabra se escribe:"],
  [/^El verbo «X» \(llana, sin tilde\) al recibir (.+) forma:$/i, "El siguiente verbo (llana, sin tilde) al recibir $1 forma:"],
];

const norm = (t) => (t || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[«»"'.,;:¿?¡!]/g, "").trim();
const esc = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const base = "src/data/presentaciones";
const rutas = [];
for (const d of readdirSync(base, { withFileTypes: true })) {
  if (!d.isDirectory()) continue;
  for (const f of readdirSync(`${base}/${d.name}`)) if (f.endsWith(".js")) rutas.push(`${base}/${d.name}/${f}`);
}

const servidor = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "warn" });
let hechos = 0;
const sinRegla = [];
for (const ruta of rutas) {
  const m = await servidor.ssrLoadModule("/" + ruta);
  if (!m.PRESENTACION) continue;
  let txt = readFileSync(ruta, "utf-8");
  let cambio = false;
  const yaHechos = new Set();
  for (const sl of m.PRESENTACION.slides || []) {
    for (const b of sl.bloques || []) {
      if (b.tipo !== "pregunta" || !b.apoyo || !b.enunciado || b.preguntaDentro) continue;
      if (b.apoyo.trim().split(/\s+/).length !== 1) continue;
      if (!norm(b.enunciado).includes(norm(b.apoyo))) continue;

      const palabra = b.apoyo.trim();
      const P = esc(palabra);
      // Si la pregunta nombra la palabra más de una vez, o hay otra palabra
      // entrecomillada al lado, no es un espécimen suelto: se deja intacto.
      const veces = (b.enunciado.match(new RegExp(`«${P}»`, "gi")) || []).length;
      const otrasComillas = (b.enunciado.match(/«[^»]+»/g) || []).filter((x) => norm(x) !== norm(palabra)).length;
      let nuevo = null;
      if (veces === 1) {
        for (const [re_, salida] of REGLAS) {
          const patron = new RegExp(re_.source.replace("«X»", `«${P}»`), re_.flags);
          if (!patron.test(b.enunciado.trim())) continue;
          // «El verbo «canta» … al recibir «me»» nombra otras palabras, pero la del
          // recuadro sigue siendo el espécimen: la excepción es explícita.
          if (otrasComillas > 0 && !/letra «/.test(b.enunciado) && !/^El verbo «/.test(b.enunciado)) break;
          nuevo = b.enunciado.trim().replace(patron, salida);
          break;
        }
      }
      if (!nuevo) { sinRegla.push(`${m.PRESENTACION.id} · «${b.apoyo}» · ${b.enunciado}`); continue; }

      const linea = `enunciado: ${JSON.stringify(b.enunciado)},`;
      if (yaHechos.has(linea)) continue;
      yaHechos.add(linea);
      if (!txt.includes(linea)) { sinRegla.push(`${m.PRESENTACION.id}: no localicé «${b.enunciado}»`); continue; }
      txt = txt.split(linea).join(`preguntaDentro: true,\n          enunciado: ${JSON.stringify(nuevo)},`);
      console.log(`  ${m.PRESENTACION.id} «${b.apoyo}»\n     antes: ${b.enunciado}\n     ahora: ${nuevo}`);
      hechos += 1;
      cambio = true;
    }
  }
  if (cambio) writeFileSync(ruta, txt);
}
await servidor.close();
console.log(`\n${hechos} reescritas`);
if (sinRegla.length) { console.log(`\nsin regla que aplique — se dejan intactas (${sinRegla.length}):`); sinRegla.forEach(x => console.log("  " + x)); }
