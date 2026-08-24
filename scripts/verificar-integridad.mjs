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

  // ── Higiene de los propios bancos ─────────────────────────────────────────
  const vistos = new Map();
  for (const c of cuestionarios) {
    if (vistos.has(c.id)) err(`id de cuestionario repetido "${c.id}" (aparece 2+ veces en el índice)`);
    vistos.set(c.id, c);

    const metaId = c.data?.metadata?.id;
    if (metaId && metaId !== c.id) avi(`metadata.id "${metaId}" ≠ clave del índice "${c.id}"`);
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
