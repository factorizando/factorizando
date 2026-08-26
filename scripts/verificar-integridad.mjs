// Verifica que ningún enlace interno del sitio apunte a un recurso inexistente.
//
// Existe por una razón concreta: el plan de migración mueve archivos de sitio
// (docs/PLAN_MIGRACION.md), y lo único que garantiza que las rutas sigan
// resolviendo es que los `id` no cambien. Este script comprueba justamente eso,
// y está pensado para correrse ANTES y DESPUÉS de cada fase: si la lista de
// errores es la misma en los dos lados, la migración no rompió nada.
//
// Comprueba:
//   · cada `quiz: "/cuestionario/<id>"` de los árboles de navegación resuelve;
//   · cada `teoria:` resuelve — ruta declarada en App.jsx, o archivo real en
//     public/guias/ cuando es una guía HTML estática;
//   · cada `/ver/<id>` que aparezca en el código existe en el índice de
//     presentaciones;
//   · los `documentoRef` y `habilidades[].ref` de los cursos existen;
//   · no hay `id` repetidos en cuestionarios ni en presentaciones;
//   · `metadata.id` coincide con la clave del índice;
//   · toda pregunta tiene `id`.
//
// Los desajustes se clasifican en ERRORES (rompen una ruta: salida ≠ 0) y
// AVISOS (higiene: no rompen nada hoy). Usa el cargador de Vite, como
// generar-catalogo.mjs, porque el contenido usa import.meta.glob y módulos .jsx.
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { createServer } from "vite";

const errores = [];
const avisos = [];
const err = (m) => errores.push(m);
const avi = (m) => avisos.push(m);

const servidor = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "warn",
});

try {
  const prep = await servidor.ssrLoadModule("/src/data/preparatoriaData.js");
  const uni = await servidor.ssrLoadModule("/src/data/universidadData.js");
  const cues = await servidor.ssrLoadModule("/src/data/cuestionarios/cuestionariosIndex.js");
  const pres = await servidor.ssrLoadModule("/src/data/presentaciones/presentacionesIndex.js");
  const docs = await servidor.ssrLoadModule("/src/data/documentos/documentosIndex.js");
  const curs = await servidor.ssrLoadModule("/src/data/cursos/cursosIndex.js");

  // ── Recursos disponibles ──────────────────────────────────────────────────
  const cuestionarios = cues.obtenerTodosCuestionarios();
  const idsCuestionario = new Set(cuestionarios.map((c) => c.id));
  const idsPresentacion = new Set(Object.keys(pres.PRESENTACIONES_INDEX));
  const idsDocumento = new Set(Object.keys(docs.DOCUMENTOS_INDEX));

  const appJsx = readFileSync("src/App.jsx", "utf8");
  const rutasTeoria = new Set(
    [...appJsx.matchAll(/path="\/teoria\/([^"]+)"/g)].map((m) => m[1])
  );
  const guias = new Set(
    existsSync("public/guias") ? readdirSync("public/guias") : []
  );

  // ── Árboles de navegación ─────────────────────────────────────────────────
  // Un cuestionario sin `data` es una plantilla: inofensiva mientras nadie la
  // enlace, rota en cuanto un nodo apunte a ella. Por eso la severidad depende
  // de si el árbol la referencia, no de su sola existencia.
  const enlazados = new Set();

  function recorrer(nodos, origen, ruta = []) {
    for (const n of nodos ?? []) {
      const donde = `${origen} › ${[...ruta, n.name ?? n.id ?? "?"].join(" › ")}`;

      if (n.quiz) {
        const id = n.quiz.replace(/^\/cuestionario\//, "").split("?")[0];
        if (!idsCuestionario.has(id)) err(`cuestionario inexistente "${id}"  ·  ${donde}`);
        else enlazados.add(id);
      }

      if (n.teoria) {
        const t = String(n.teoria);
        const guia = t.match(/guias\/([^"`']+\.html)/);
        if (guia) {
          if (!guias.has(guia[1])) err(`guía inexistente "public/guias/${guia[1]}"  ·  ${donde}`);
        } else if (t.startsWith("/teoria/")) {
          const slug = t.slice("/teoria/".length);
          if (!rutasTeoria.has(slug)) err(`ruta de teoría sin declarar "/teoria/${slug}"  ·  ${donde}`);
        }
      }

      if (n.children) recorrer(n.children, origen, [...ruta, n.name ?? n.id ?? "?"]);
    }
  }
  recorrer(prep.SUBJECTS_PREP, "preparatoriaData");
  recorrer(uni.SUBJECTS_UNI, "universidadData");

  // ── Presentaciones referidas desde el código ──────────────────────────────
  const fuentes = [];
  (function listar(dir) {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = `${dir}/${e.name}`;
      if (e.isDirectory()) listar(p);
      else if (/\.jsx?$/.test(e.name)) fuentes.push(p);
    }
  })("src");

  for (const archivo of fuentes) {
    const texto = readFileSync(archivo, "utf8");
    for (const m of texto.matchAll(/["'`]\/ver\/([a-z0-9-]+)["'`]/g)) {
      if (!idsPresentacion.has(m[1])) err(`presentación inexistente "${m[1]}"  ·  ${archivo}`);
    }
  }

  // ── Cursos: solo referencian, nunca duplican ──────────────────────────────
  for (const curso of curs.listaCursos()) {
    for (const sec of curso.secciones ?? []) {
      for (const sub of sec.subsecciones ?? []) {
        const donde = `curso "${curso.id}" › ${sec.titulo} › ${sub.titulo}`;
        if (sub.documentoRef && !idsDocumento.has(sub.documentoRef)) {
          err(`documento inexistente "${sub.documentoRef}"  ·  ${donde}`);
        }
        for (const h of sub.habilidades ?? []) {
          const conjunto = { presentacion: idsPresentacion, cuestionario: idsCuestionario, documento: idsDocumento }[h.tipo];
          if (!conjunto) { avi(`tipo de habilidad desconocido "${h.tipo}"  ·  ${donde}`); continue; }
          if (h.ref && !conjunto.has(h.ref)) err(`${h.tipo} inexistente "${h.ref}"  ·  ${donde}`);
        }
      }
    }
  }

  // ── Diagramas: toda clave usada tiene que resolver ────────────────────────
  // Un `svgDiagram` sin entrada en el registro no rompe la página: simplemente no
  // dibuja nada, en silencio. Es justo el fallo que puede introducir la fase 2 al
  // mover componentes, así que se comprueba aquí. Las claves se leen del texto de
  // los dos registros para no tener que cargar SlideRenderer (arrastraría three.js).
  const clavesDe = (ruta, marcador) => {
    const txt = readFileSync(ruta, "utf8");
    const i = txt.indexOf(marcador);
    if (i === -1) return new Set();
    const fin = txt.indexOf("\n};", i);
    return new Set([...txt.slice(i, fin).matchAll(/^\s*"([a-z0-9-]+)":/gm)].map((m) => m[1]));
  };
  const registro = new Set([
    ...clavesDe("src/components/diagramas/index.js", "export const DIAGRAMS"),
    ...clavesDe("src/components/SlideRenderer.jsx", "const DIAGRAMAS_LOCALES"),
  ]);

  const usadas = new Map();
  for (const [id, p] of Object.entries(pres.PRESENTACIONES_INDEX)) {
    for (const slide of p.slides ?? []) {
      const anota = (clave) => {
        if (!clave) return;
        if (!usadas.has(clave)) usadas.set(clave, []);
        usadas.get(clave).push(`${id} › slide ${slide.id}`);
      };
      anota(slide.svgDiagram);
      for (const b of slide.bloques ?? []) {
        // `diagrama` es el bloque del esquema antiguo (clave en `id`); `figura`
        // el del sistema de bloques (clave en `clave`). Mientras dure la fase 4C
        // conviven, y olvidar el segundo dejaría sin vigilar justo lo migrado.
        if (b.tipo === "diagrama") anota(b.id);   // esquema antiguo: clave en `id`
        if (b.tipo === "figura") anota(b.clave);  // bloque de dibujo
        if (b.figura) anota(b.figura);            // portada con dibujo propio
      }
    }
  }
  // Los documentos también dibujan, con `figura:` dentro de sus elementos.
  for (const [id, d] of Object.entries(docs.DOCUMENTOS_INDEX)) {
    const recorrer = (x) => {
      if (Array.isArray(x)) return x.forEach(recorrer);
      if (!x || typeof x !== "object") return;
      if (typeof x.figura === "string") {
        if (!usadas.has(x.figura)) usadas.set(x.figura, []);
        usadas.get(x.figura).push(`documento ${id}`);
      }
      for (const k in x) recorrer(x[k]);
    };
    recorrer(d.contenido);
  }
  for (const [clave, donde] of usadas) {
    if (!registro.has(clave)) {
      err(`diagrama sin registrar "${clave}" (${donde.length} uso${donde.length > 1 ? "s" : ""})  ·  ${donde[0]}`);
    }
  }
  const huerfanas = [...registro].filter((k) => !usadas.has(k));
  if (huerfanas.length) {
    avi(`${huerfanas.length} diagramas registrados que no usa ninguna presentación ni documento: ${huerfanas.slice(0, 8).join(", ")}${huerfanas.length > 8 ? "…" : ""}`);
  }
  console.log(`[diagramas] ${registro.size} registrados · ${usadas.size} usados`);

  // ── Higiene de los propios bancos ─────────────────────────────────────────
  const vistos = new Map();
  for (const c of cuestionarios) {
    if (vistos.has(c.id)) err(`id de cuestionario repetido "${c.id}" (aparece 2+ veces en el índice)`);
    vistos.set(c.id, c);

    const metaId = c.data?.metadata?.id;
    if (metaId && metaId !== c.id) avi(`metadata.id "${metaId}" ≠ clave del índice "${c.id}"`);
    // Dos sitios dicen el nivel: la entrada del índice y el metadata del banco.
    // Que discrepen es cómo se coló que dos bancos de preparatoria se declararan
    // de universidad al copiarse de sus hermanos.
    const metaNivel = c.data?.metadata?.nivel;
    if (metaNivel && c.nivel && metaNivel !== c.nivel) {
      avi(`"${c.id}": el índice dice nivel "${c.nivel}" y su metadata dice "${metaNivel}"`);
    }
    if (!c.data) {
      const m = `cuestionario "${c.id}" sin \`data\` (plantilla con el import comentado)`;
      if (enlazados.has(c.id)) err(`${m} — y el árbol de navegación lo enlaza`);
      else avi(`${m} — nadie lo enlaza, pero /cuestionario/${c.id} falla si se abre a mano`);
      continue;
    }

    const preguntas = c.data.questions ?? [];
    const ids = preguntas.map((q) => q.id);
    const sinId = ids.filter((i) => i === undefined).length;
    if (sinId) err(`cuestionario "${c.id}": ${sinId} de ${preguntas.length} preguntas sin \`id\` (el normalizador del índice debería haberlo cubierto)`);
    if (new Set(ids).size !== ids.length) err(`cuestionario "${c.id}": ids de pregunta repetidos`);
    const tipos = [...new Set(ids.map((i) => typeof i))];
    if (tipos.length > 1) avi(`cuestionario "${c.id}": ids de tipos mezclados (${tipos.join(", ")})`);
    const vacias = preguntas.filter((q) => !q.explanation).length;
    if (vacias) avi(`cuestionario "${c.id}": ${vacias} de ${preguntas.length} preguntas sin \`explanation\``);
  }

  for (const [id, p] of Object.entries(pres.PRESENTACIONES_INDEX)) {
    if (p.id && p.id !== id) err(`presentación "${id}": su PRESENTACION.id es "${p.id}"`);
    if (!p.materia) avi(`presentación "${id}" sin \`materia\``);
    if (!p.subtema) avi(`presentación "${id}" sin \`subtema\``);
  }

  // ── Inventario de nombres repetidos entre carpetas ────────────────────────
  const porNombre = new Map();
  (function listar(dir) {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = `${dir}/${e.name}`;
      if (e.isDirectory()) listar(p);
      else if (/\.jsx?$/.test(e.name)) {
        const base = e.name.replace(/\.jsx?$/, "");
        porNombre.set(base, [...(porNombre.get(base) ?? []), p]);
      }
    }
  })("src/data/cuestionarios");
  for (const [base, rutas] of porNombre) {
    if (rutas.length > 1) avi(`nombre repetido "${base}.js" en ${rutas.length} carpetas:\n      ${rutas.join("\n      ")}`);
  }

  // ── Informe ───────────────────────────────────────────────────────────────
  console.log(`\n[integridad] ${cuestionarios.length} cuestionarios · ${idsPresentacion.size} presentaciones · ${idsDocumento.size} documentos · ${curs.listaCursos().length} cursos\n`);
  if (avisos.length) {
    console.log(`AVISOS (${avisos.length}) — no rompen ninguna ruta:`);
    for (const a of avisos) console.log(`  · ${a}`);
    console.log("");
  }
  if (errores.length) {
    console.log(`ERRORES (${errores.length}) — enlaces rotos:`);
    for (const e of errores) console.log(`  ✗ ${e}`);
    console.log("");
  } else {
    console.log("Sin enlaces rotos.\n");
  }
} finally {
  await servidor.close();
}

process.exit(errores.length ? 1 : 0);
