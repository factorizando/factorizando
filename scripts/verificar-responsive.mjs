// Comprueba en un navegador real el checklist de §3 de docs/DISENO.md, la parte
// que se puede medir.
//
// Existe porque compilar no ve ninguna de estas cosas. Un desbordamiento no es
// un error de sintaxis: es una tarjeta 40px fuera de pantalla, y el build la
// compila tan campante. La Home llevó meses con la marca oculta por debajo de
// 420px, la rejilla de exámenes saliéndose 40px en un teléfono de 320 y el
// primer botón del hero a 733px de scroll — las tres las encontró este recorrido
// en un minuto, ninguna la habría encontrado `npm run build`.
//
// Comprueba, a cada ancho:
//   · que nada se salga del viewport en horizontal (§3: «A 375px de ancho no se
//     desborda nada»);
//   · que ningún control mida menos de 44px de alto en anchos táctiles (§2.3);
//   · que no haya texto por debajo de 15px (§3) — como AVISO, ver abajo, y sólo
//     en las pantallas migradas.
//
// Lo que NO comprueba, y hay que seguir mirando a ojo: que se vea bien en
// `.fx-oscuro`, que nada se distinga sólo por matiz, y que no haya hex escritos
// a mano. Esas tres siguen siendo del ojo, no del script.
//
// Errores (salida ≠ 0) contra avisos: se rompe algo cuando el contenido se sale
// de la pantalla o cuando un dedo no puede darle. El texto pequeño va como aviso
// a propósito — `--fx-caption-size` son 13px y §2.6 acota el piso de 15 a «el
// cuerpo», así que las versalitas con tracking (fx-badge, fx-eyebrow,
// fx-card-nivel, fx-footer-tit) están en una zona que la bitácora dejó abierta
// el 26 ago 2026. El día que se cierre, esto pasa a error o desaparece.
//
// El tamaño de texto sólo se mide en pantallas MIGRADAS —las que llevan
// `.fx-page`—, porque §3 es el checklist de una pantalla del design system y la
// mitad del sitio sigue en el sistema viejo de estilos en línea: medirlas todas
// daba 34 avisos de /exani-i y /exani-ii que enterraban los cuatro reales de la
// Home. Desbordarse y no poder tocar un botón, en cambio, son fallos en
// cualquier pantalla, y se miden en todas.
import { createServer } from "vite";
import { chromium } from "playwright";

// Sólo rutas públicas: las demás viven detrás de ProtectedRoute y sin sesión
// devuelven el login, así que medirlas sería medir el login siete veces.
const RUTAS = ["/", "/materia/matematicas", "/exani-i", "/exani-ii"];

// El corte táctil es el mismo que usa el header (`.fx-nav` conmuta en 900px):
// por debajo no se da por supuesto que haya ratón, así que ahí rige la zona de
// 44px de §2.3. Por encima vale --fx-control-sm, que son 40 y están pensados
// para escritorio.
const TACTIL = 900;
const ANCHOS = [320, 360, 375, 414, 768, 1280];

const errores = [];
const avisos = [];

// Se ejecuta DENTRO de la página. Devuelve datos, no juicios: quién es error y
// quién aviso se decide aquí fuera, junto a la regla que lo dice.
function medir({ tactil }) {
  const vw = document.documentElement.clientWidth;
  const migrada = !!document.querySelector(".fx-page");
  const desbordan = [];
  const pequenos = [];
  const bajos = [];

  // getAttribute y no `className`: en SVG esa propiedad es un SVGAnimatedString
  // y se imprimía como "[object SVGAnimatedString]".
  const nombrar = (el) => {
    const cls = (el.getAttribute("class") || "").trim().split(/\s+/).filter(Boolean).slice(0, 2).join(".");
    return cls ? `${el.tagName.toLowerCase()}.${cls}` : el.tagName.toLowerCase();
  };

  for (const el of document.querySelectorAll("body *")) {
    const caja = el.getBoundingClientRect();
    if (!caja.width && !caja.height) continue;

    // Desbordamiento. Se mide contra clientWidth y no contra el ancho del
    // viewport porque con barra de desplazamiento no son lo mismo.
    if (caja.right > vw + 0.5 || caja.left < -0.5) {
      desbordan.push({ que: nombrar(el), izq: Math.round(caja.left), der: Math.round(caja.right) });
    }

    // Texto propio del elemento, no heredado de los hijos: si no, un <section>
    // entero se reporta por una sola etiqueta pequeña de dentro. Y nada dentro
    // de un <svg>: el rótulo de un diagrama es dibujo, escala con la figura y
    // no se lee como texto de la página.
    const propio = migrada && !el.closest("svg") &&
      [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
    if (propio) {
      const px = parseFloat(getComputedStyle(el).fontSize);
      if (px < 15) pequenos.push({ que: nombrar(el), px, texto: el.textContent.trim().slice(0, 32) });
    }
  }

  if (tactil) {
    const CONTROLES = "button, a[class*=btn], a[class*=pill], a[class*=card], .fx-footer-link, .fx-nav-link, [role=button]";
    for (const el of document.querySelectorAll(CONTROLES)) {
      const caja = el.getBoundingClientRect();
      // Un control oculto (menú cerrado) mide 0 y no es un problema de tacto.
      if (caja.height > 0 && caja.height < 44) {
        bajos.push({ que: nombrar(el), alto: Math.round(caja.height), texto: el.textContent.trim().slice(0, 24) });
      }
    }
  }

  return { vw, scrollW: document.documentElement.scrollWidth, desbordan, pequenos, bajos };
}

// Un mismo desajuste aparece a los seis anchos; se agrupa para que el informe
// diga «esto, en estos anchos» en vez de repetir seis veces la misma línea.
const agrupar = new Map();
const anotar = (clave, ancho) => {
  if (!agrupar.has(clave)) agrupar.set(clave, new Set());
  agrupar.get(clave).add(ancho);
};

const servidor = await createServer({ logLevel: "warn", server: { port: 0 } });
await servidor.listen();
const base = servidor.resolvedUrls.local[0].replace(/\/$/, "");

let navegador;
try {
  navegador = await chromium.launch();
} catch (e) {
  await servidor.close();
  console.error(
    "\n[responsive] no se pudo abrir Chromium. Si es una instalación nueva:\n" +
    "  npx playwright install chromium\n\n" + e.message + "\n",
  );
  process.exit(2);
}

try {
  for (const ancho of ANCHOS) {
    const pagina = await navegador.newPage({ viewport: { width: ancho, height: 800 } });
    for (const ruta of RUTAS) {
      // HashRouter: la ruta va después de #, no en el path.
      await pagina.goto(`${base}/#${ruta}`, { waitUntil: "networkidle" });
      // La marca compone con KaTeX cargado del CDN y las tarjetas esperan a los
      // índices; medir antes daría anchos que el usuario nunca ve.
      await pagina.waitForTimeout(1200);

      const r = await pagina.evaluate(medir, { tactil: ancho < TACTIL });

      if (r.scrollW > r.vw + 0.5) {
        anotar(`${ruta} · la página se desplaza en horizontal (${r.scrollW}px de contenido en ${r.vw}px de pantalla)`, ancho);
      }
      for (const d of r.desbordan) {
        anotar(`${ruta} · ${d.que} se sale del viewport (de ${d.izq} a ${d.der}, pantalla de ${r.vw})`, ancho);
      }
      for (const b of r.bajos) {
        anotar(`${ruta} · ${b.que} mide ${b.alto}px de alto, §2.3 pide 44 — "${b.texto}"`, ancho);
      }
      for (const p of r.pequenos) {
        anotar(`AVISO ${ruta} · ${p.que} a ${p.px}px, §3 pide 15 — "${p.texto}"`, ancho);
      }
    }
    await pagina.close();
  }
} finally {
  await navegador.close();
  await servidor.close();
}

for (const [clave, anchos] of agrupar) {
  const linea = `${clave}  [${[...anchos].join(", ")}]`;
  if (clave.startsWith("AVISO ")) avisos.push(linea.slice(6));
  else errores.push(linea);
}

console.log(`\n[responsive] ${RUTAS.length} rutas × ${ANCHOS.length} anchos (${ANCHOS.join(", ")})\n`);
if (avisos.length) {
  console.log(`AVISOS (${avisos.length}) — texto por debajo de 15px en pantallas migradas; ver la nota del 26 ago 2026 en docs/DISENO.md:`);
  for (const a of avisos) console.log(`  · ${a}`);
  console.log("");
}
if (errores.length) {
  console.log(`ERRORES (${errores.length}) — se sale de la pantalla o no se puede tocar:`);
  for (const e of errores) console.log(`  ✗ ${e}`);
  console.log("");
} else {
  console.log("Nada se desborda y todo control se puede tocar.\n");
}

process.exit(errores.length ? 1 : 0);
