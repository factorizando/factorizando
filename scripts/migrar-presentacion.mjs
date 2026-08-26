// Migra una presentación al sistema de bloques (`tipo: "lienzo"`).
//
// Herramienta de la fase 4C de docs/PLAN_MIGRACION.md:
//   node scripts/migrar-presentacion.mjs espanol/signos-puntuacion
//   node scripts/migrar-presentacion.mjs espanol/signos-puntuacion --ver
//
// Las reglas de reacomodo salieron de migrar Acentuación entera y de revisarla
// diapositiva por diapositiva. Están aquí y no en la cabeza de nadie:
//
//   · el primer `texto` es el enunciado que define la diapositiva → `destacado`;
//   · con uno o dos contrastes tras la tabla, se apilan a su derecha (tabla 7 /
//     contraste 5) y la tabla crece en filas para dejarles sitio;
//   · con tres, los dos `par` van en paralelo a 6 —son lo mismo entre sí— y la
//     trampa ocupa las doce debajo, que es otra cosa y con 4 columnas se aprieta;
//   · los contrastes a la derecha entran con `revelar`;
//   · los reactivos van a dos columnas, y si el enunciado trae una palabra entre
//     comillas angulares, esa palabra pasa a ser el apoyo visual. Si lo que trae
//     es una ORACIÓN con hueco, el enunciado se queda con la instrucción y la
//     oración va sola a la tarjeta: si no, aparece dos veces.
//
// No inventa `notas`: el guion del profesor lo escribe quien da la clase.
// Con --ver no escribe nada; imprime lo que haría.
import { createServer } from "vite";
import { readFileSync, writeFileSync } from "node:fs";

const arg = process.argv[2];
const soloVer = process.argv.includes("--ver");
if (!arg) {
  console.error("Uso: node scripts/migrar-presentacion.mjs <materia>/<slug> [--ver]");
  process.exit(1);
}
const RUTA = `src/data/presentaciones/${arg.replace(/\.js$/, "")}.js`;

function lit(v, ind = "  ") {
  // `undefined` dentro de un array —una fila de tabla sin tercera columna— no se
  // puede omitir como en un objeto: hay que emitir algo o el array se descoloca.
  if (v === undefined) return '""';
  if (v === null) return "null";
  if (typeof v === "number" || typeof v === "boolean") return String(v);
  if (typeof v === "string") return JSON.stringify(v);
  if (Array.isArray(v)) {
    if (v.every((x) => typeof x === "string" || typeof x === "number")) {
      const l = "[" + v.map((x) => lit(x)).join(", ") + "]";
      if (l.length <= 96) return l;
    }
    return "[\n" + v.map((x) => ind + "  " + lit(x, ind + "  ")).join(",\n") + ",\n" + ind + "]";
  }
  const ks = Object.keys(v).filter((k) => v[k] !== undefined);
  if (!ks.length) return "{}";
  return "{\n" + ks.map((k) => `${ind}  ${k}: ${lit(v[k], ind + "  ")}`).join(",\n") + ",\n" + ind + "}";
}

const esOracion = (t) => /_{2,}/.test(t || "") && (t || "").trim().split(/\s+/).length >= 4;

function migrarEjercicio(sl) {
  const m = (sl.pregunta || "").match(/«([^»]+)»/);
  const apoyo = m ? m[1] : undefined;
  let enunciado = sl.pregunta;
  let apoyoPie = apoyo ? "obsérvala antes de responder" : undefined;

  if (apoyo && esOracion(apoyo)) {
    // El enunciado traía la oración y la instrucción; se queda con la segunda.
    const resto = enunciado.replace(`«${apoyo}»`, "").replace(/^\s*[—–-]\s*/, "").trim();
    enunciado = (resto || "Completa la oración").replace(/\.$/, "");
    enunciado = enunciado.charAt(0).toUpperCase() + enunciado.slice(1);
    apoyoPie = "elige la palabra que falta";
  }

  // Un reactivo con figura no va a dos columnas: la figura ocupa la derecha y la
  // pregunta con sus opciones la izquierda. Olvidar esto tiraba el diagrama —en
  // Acentuación no se notó porque ninguno de sus 42 reactivos tenía.
  const figura = sl.svgDiagram;
  const pregunta = {
    tipo: "pregunta",
    disposicion: figura ? undefined : "lado",
    ancho: figura ? 7 : 12,
    etiqueta: sl.etiqueta, enunciado, apoyo: figura ? undefined : apoyo, apoyoPie: figura ? undefined : apoyoPie,
    opciones: sl.opciones, correcta: sl.correcta, explicacion: sl.explicacion,
  };
  return {
    id: sl.id, tipo: "lienzo",
    bloques: figura ? [pregunta, { tipo: "figura", ancho: 5, clave: figura }] : [pregunta],
  };
}

function migrarCompuesta(sl) {
  const src = sl.bloques || [];
  const idxTabla = src.findIndex((b) => b.tipo === "tabla");
  const contrastes = idxTabla === -1 ? [] : src.slice(idxTabla + 1).filter((b) => b.tipo === "par" || b.tipo === "trampa");
  const enFila = contrastes.length >= 3;
  const aLaDerecha = enFila ? [] : contrastes;

  const bloques = [];
  let primerTexto = true;
  for (const [i, b] of src.entries()) {
    if (b.tipo === "texto") {
      bloques.push({ tipo: primerTexto ? "destacado" : "texto", texto: b.texto });
      primerTexto = false;
    } else if (b.tipo === "diagrama") {
      bloques.push({ tipo: "figura", clave: b.id, titulo: b.titulo });
    } else if (b.tipo === "tabla") {
      bloques.push({
        tipo: "tabla",
        ancho: aLaDerecha.length ? 7 : 12,
        alto: aLaDerecha.length || undefined,
        titulo: b.titulo, columnas: b.columnas,
        filas: (b.filas || []).map((f) => (Array.isArray(f) ? f : [f.tiempo, f.correcto, f.error])),
      });
    } else if (b.tipo === "par" || b.tipo === "trampa") {
      const derecha = idxTabla !== -1 && i > idxTabla;
      bloques.push({
        tipo: b.tipo,
        ancho: derecha ? 5 : enFila ? (b.tipo === "par" ? 6 : 12) : 12,
        revelar: derecha || undefined,
        letra: b.letra, etiqueta: b.etiqueta, titulo: b.titulo,
        asi_es: b.correcto ?? b.asi_es, asi_no: b.incorrecto ?? b.asi_no,
      });
    }
  }
  return { id: sl.id, tipo: "lienzo", etiqueta: sl.etiqueta, titulo: sl.titulo, bloques };
}


// ── Los tipos que no eran ni reactivo ni regla compuesta ───────────────────
// Todos se reducen a bloques que ya existen; lo único que hacía falta era que
// `lista` aceptara items con fórmula, que es la forma que comparten casi todos.

function migrarResumen(sl) {
  return {
    id: sl.id, tipo: "lienzo", etiqueta: sl.etiqueta, titulo: sl.titulo,
    bloques: [{ tipo: "lista", items: sl.puntos || [] }],
  };
}

function migrarConcepto(sl) {
  const b = [];
  if (sl.formula) b.push({ tipo: "formula", math: sl.formula });
  // Con figura, el dibujo y la lista van a la par: se miran a la vez.
  if (sl.svgDiagram) {
    b.push({ tipo: "figura", ancho: 6, clave: sl.svgDiagram });
    b.push({ tipo: "lista", ancho: 6, items: sl.items || [] });
  } else if (sl.items?.length) {
    b.push({ tipo: "lista", items: sl.items });
  }
  if (sl.nota) b.push({ tipo: "nota", texto: sl.nota });
  return { id: sl.id, tipo: "lienzo", etiqueta: sl.etiqueta, titulo: sl.titulo, bloques: b };
}

function migrarCriterioDetalle(sl) {
  const b = [];
  if (sl.enunciado) b.push({ tipo: "destacado", texto: sl.enunciado });
  const conFigura = !!sl.svgDiagram;
  if (conFigura) b.push({ tipo: "figura", ancho: 6, clave: sl.svgDiagram });
  if (sl.math) b.push({ tipo: "formula", ancho: conFigura ? 6 : 12, math: sl.math });
  // El «por qué» es el argumento, no un apunte al margen: va en texto, y con
  // `revelar` para poder preguntarlo antes de enseñarlo.
  if (sl.por_que) b.push({ tipo: "nota", ancho: 12, revelar: true, etiqueta: "Por qué", texto: sl.por_que });
  if (sl.math_razon) b.push({ tipo: "formula", math: sl.math_razon });
  return { id: sl.id, tipo: "lienzo", etiqueta: sl.etiqueta, titulo: sl.titulo, bloques: b };
}

function migrarEjemplo(sl) {
  const b = [];
  if (sl.enunciado) b.push({ tipo: "destacado", texto: sl.enunciado });
  const conFigura = !!sl.svgDiagram;
  if (conFigura) b.push({ tipo: "figura", ancho: 5, clave: sl.svgDiagram });
  if (sl.pasos?.length) {
    b.push({ tipo: "pasos", ancho: conFigura ? 7 : 12, metodo: sl.datos ? "Datos: " + sl.datos : undefined,
             pasos: sl.pasos.map((p) => (typeof p === "string" ? { texto: p } : p)) });
  }
  return { id: sl.id, tipo: "lienzo", etiqueta: sl.etiqueta, titulo: sl.titulo, bloques: b };
}

function migrarDefinicion(sl) {
  const b = [{ tipo: "definicion", etiqueta: sl.etiqueta, termino: sl.titulo,
               texto: sl.enunciado || sl.texto || "" }];
  if (sl.formula || sl.math) b.push({ tipo: "formula", math: sl.formula || sl.math });
  if (sl.svgDiagram) b.push({ tipo: "figura", clave: sl.svgDiagram });
  if (sl.condiciones?.length) b.push({ tipo: "lista", items: sl.condiciones });
  return { id: sl.id, tipo: "lienzo", etiqueta: sl.etiqueta, titulo: sl.titulo, bloques: b };
}

function migrarListaCriterios(sl) {
  const items = sl.criterios || sl.items || [];
  return {
    id: sl.id, tipo: "lienzo", etiqueta: sl.etiqueta, titulo: sl.titulo,
    bloques: [{ tipo: "lista", estilo: "numerada", items }],
  };
}

const s = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "warn" });
try {
  const { PRESENTACION: P } = await s.ssrLoadModule("/" + RUTA);
  const sinMigrar = new Set();

  const nuevas = P.slides.map((sl) => {
    if (sl.tipo === "lienzo") return sl;
    if (sl.tipo === "ejercicio") return migrarEjercicio(sl);
    if (sl.tipo === "regla_rica" || sl.tipo === "regla") return migrarCompuesta(sl);
    if (sl.tipo === "resumen") return migrarResumen(sl);
    if (sl.tipo === "concepto") return migrarConcepto(sl);
    if (sl.tipo === "criterio_detalle") return migrarCriterioDetalle(sl);
    if (sl.tipo === "ejemplo") return migrarEjemplo(sl);
    if (sl.tipo === "definicion") return migrarDefinicion(sl);
    if (sl.tipo === "lista_criterios") return migrarListaCriterios(sl);
    if (sl.tipo === "portada") {
      return {
        id: sl.id, tipo: "lienzo",
        bloques: [{ tipo: "portada", kicker: sl.etiqueta, titulo: sl.titulo, subtitulo: sl.subtitulo, figura: sl.svgDiagram }],
      };
    }
    sinMigrar.add(sl.tipo);
    return sl;
  });

  const cuenta = {};
  for (const x of nuevas) cuenta[x.tipo] = (cuenta[x.tipo] || 0) + 1;
  console.log(`${arg}: ${nuevas.length} diapositivas ·`, JSON.stringify(cuenta));
  if (sinMigrar.size) console.log(`  sin migrar (necesitan mano): ${[...sinMigrar].join(", ")}`);
  if (soloVer) { console.log("  (--ver: no se escribió nada)"); process.exit(0); }

  const original = readFileSync(RUTA, "utf8");
  const cabecera = original.slice(0, original.indexOf("export const PRESENTACION"));
  const meta = { id: P.id, titulo: P.titulo, materia: P.materia, subtema: P.subtema, examenes: P.examenes, nivel: P.nivel };
  writeFileSync(RUTA,
    cabecera + "export const PRESENTACION = {\n" +
    Object.entries(meta).filter(([, v]) => v !== undefined).map(([k, v]) => `  ${k}: ${lit(v)},`).join("\n") +
    "\n  slides: [\n" + nuevas.map((x) => "    " + lit(x, "    ")).join(",\n") + ",\n  ],\n};\n");
} finally {
  await s.close();
}
