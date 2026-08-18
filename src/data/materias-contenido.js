// Recolección del contenido publicado, por materia.
//
// El contenido NO se duplica aquí: se recolecta de los índices existentes
// (cuestionarios, presentaciones, documentos, cursos). El problema es que el
// campo `materia` de cada módulo está escrito a mano y varía ("Pensamiento
// Matemático", "Matemáticas avanzadas", "Ciencias"), así que la clasificación
// se hace por ESTRUCTURA —la clave del índice o la carpeta del archivo— y solo
// se cae al texto cuando no hay otra pista.
//
// Importar este archivo trae consigo TODO el contenido del sitio, así que solo
// debe hacerlo una ruta que ya se cargue aparte (/materia/:slug) o el script
// que genera las cifras de la portada. La portada nunca.

import { CUESTIONARIOS_INDEX } from "./cuestionarios/cuestionariosIndex.js";
import { listaDocumentos } from "./documentos/documentosIndex.js";
import { listaCursos } from "./cursos/cursosIndex.js";
import { MATERIAS } from "./materias.js";


// ── Clasificación ────────────────────────────────────────────────────────────
// Claves del árbol de cuestionarios → materia. Lo que no aparece aquí
// (`simuladores`, `exaniII`) no es una materia: es una ruta de examen.
const CLAVE_A_MATERIA = {
  matematicas: "matematicas",
  espanol: "espanol",
  comprensionLectora: "espanol",
  fisica: "fisica",
  biologia: "biologia",
  medicina: "biologia",
  quimica: "quimica",
  geografia: "geografia",
  historia: "historia",
};

// Carpetas de src/data/presentaciones/ → materia.
const CARPETA_A_MATERIA = {
  matematicas: "matematicas",
  espanol: "espanol",
  comprension: "espanol",
  fisica: "fisica",
  biologia: "biologia",
  quimica: "quimica",
  geografia: "geografia",
};

// Última red: el texto libre del campo `materia`, sin acentos ni mayúsculas.
function porTexto(materia) {
  const t = (materia || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
  if (t.includes("matemat")) return "matematicas";
  if (t.includes("espanol") || t.includes("lectora") || t.includes("lengua")) return "espanol";
  if (t.includes("fisica")) return "fisica";
  if (t.includes("biolog")) return "biologia";
  if (t.includes("quimic")) return "quimica";
  if (t.includes("geograf")) return "geografia";
  if (t.includes("histor")) return "historia";
  return null;
}

// ── Cuestionarios ────────────────────────────────────────────────────────────
// Recorre el índice arrastrando el nivel (1.er nivel) y la materia (la clave
// más profunda que sí es una materia). Descarta las entradas sin `data`: están
// declaradas pero el módulo aún no existe, y abrirlas daría una pantalla vacía.
function recolectarCuestionarios() {
  const salida = [];

  const recorrer = (nodo, nivel, materia) => {
    if (Array.isArray(nodo.cuestionarios)) {
      for (const c of nodo.cuestionarios) {
        if (!c?.data) continue;
        salida.push({
          id: c.id,
          titulo: c.titulo,
          descripcion: c.description || "",
          nivel,
          materia,
          preguntas: c.data.questions?.length || 0,
        });
      }
    }
    for (const clave of Object.keys(nodo)) {
      const hijo = nodo[clave];
      if (typeof hijo !== "object" || hijo === null || Array.isArray(hijo)) continue;
      recorrer(hijo, nivel, CLAVE_A_MATERIA[clave] || materia);
    }
  };

  for (const nivel of Object.keys(CUESTIONARIOS_INDEX)) {
    recorrer(CUESTIONARIOS_INDEX[nivel], nivel, null);
  }
  return salida;
}

// ── Presentaciones ───────────────────────────────────────────────────────────
// Se clasifican por la carpeta del módulo, no por su campo `materia`: varias
// declaran "Ciencias" o "Pensamiento Matemático" y viven en carpetas distintas.
function recolectarPresentaciones() {
  const modulos = import.meta.glob("./presentaciones/*/*.js", { eager: true });
  const salida = [];
  for (const ruta of Object.keys(modulos)) {
    const p = modulos[ruta]?.PRESENTACION;
    if (!p) continue;
    const carpeta = ruta.split("/")[2];
    salida.push({
      id: p.id,
      titulo: p.titulo,
      subtema: p.subtema || null,
      slides: p.slides?.length || 0,
      materia: CARPETA_A_MATERIA[carpeta] || porTexto(p.materia),
    });
  }
  return salida.sort((a, b) => a.titulo.localeCompare(b.titulo, "es"));
}

const CUESTIONARIOS = recolectarCuestionarios();
const PRESENTACIONES = recolectarPresentaciones();

// ── API pública ──────────────────────────────────────────────────────────────

// Todo el material publicado de una materia, listo para renderizar.
export function contenidoDeMateria(slug) {
  return {
    cuestionarios: CUESTIONARIOS.filter((c) => c.materia === slug),
    presentaciones: PRESENTACIONES.filter((p) => p.materia === slug),
    documentos: listaDocumentos().filter((d) => porTexto(d.materia) === slug),
    cursos: listaCursos().filter((c) => porTexto(c.materia) === slug),
  };
}

// Cuántas piezas hay de cada tipo, para las tarjetas de la Home.
export function conteoDeMateria(slug) {
  const c = contenidoDeMateria(slug);
  return {
    cuestionarios: c.cuestionarios.length,
    presentaciones: c.presentaciones.length,
    documentos: c.documentos.length,
    cursos: c.cursos.length,
    total: c.cuestionarios.length + c.presentaciones.length + c.documentos.length + c.cursos.length,
  };
}

// Cifras del hero. Se calculan del contenido real en cada render, así que no
// hay números que actualizar a mano cuando se publica material nuevo.
export function cifrasDelSitio() {
  return {
    reactivos: CUESTIONARIOS.reduce((n, c) => n + c.preguntas, 0),
    cuestionarios: CUESTIONARIOS.length,
    presentaciones: PRESENTACIONES.length,
  };
}


// Todos los conteos de golpe: es lo que la portada necesita y lo que el script
// `scripts/generar-catalogo.mjs` congela en `catalogo.generado.json`.
export function catalogoCompleto() {
  return {
    generado: new Date().toISOString(),
    cifras: cifrasDelSitio(),
    conteos: Object.fromEntries(MATERIAS.map((m) => [m.slug, conteoDeMateria(m.slug)])),
  };
}
