// Catálogo canónico de materias del sitio público.
//
// El design system define siete materias con un acento de color cada una; esta
// es la fuente única para la Home (tarjetas y navegación) y para /materia/:slug.
//
// El contenido NO se duplica aquí: se recolecta de los índices existentes
// (cuestionarios, presentaciones, documentos, cursos). El problema es que el
// campo `materia` de cada módulo está escrito a mano y varía ("Pensamiento
// Matemático", "Matemáticas avanzadas", "Ciencias"), así que la clasificación
// se hace por ESTRUCTURA —la clave del índice o la carpeta del archivo— y solo
// se cae al texto cuando no hay otra pista.

import { CUESTIONARIOS_INDEX } from "./cuestionarios/cuestionariosIndex.js";
import { listaDocumentos } from "./documentos/documentosIndex.js";
import { listaCursos } from "./cursos/cursosIndex.js";

// ── Las siete materias ───────────────────────────────────────────────────────
// `acento` es el token del design system (--fx-<acento>, -tint, -text).
// `glifo` es la marca de materia: carácter Unicode compuesto en la fuente que
// corresponde, no un SVG dibujado a mano.
export const MATERIAS = [
  {
    slug: "matematicas",
    nombre: "Matemáticas",
    acento: "math",
    glifo: "Σ",
    fuenteGlifo: "mono",
    descripcion:
      "Aritmética, álgebra, geometría y cálculo, con presentaciones que se proyectan en clase y cuestionarios cronometrados.",
  },
  {
    slug: "espanol",
    nombre: "Español",
    acento: "indigo",
    glifo: "¶",
    fuenteGlifo: "math",
    descripcion:
      "Comprensión lectora, gramática y análisis de textos: la sección que más pesa en casi todos los exámenes.",
  },
  {
    slug: "fisica",
    nombre: "Física",
    acento: "indigo",
    glifo: "λ",
    fuenteGlifo: "math",
    descripcion:
      "Pensamiento científico, movimiento y energía, con simulaciones que puedes mover mientras explicas.",
  },
  {
    slug: "biologia",
    nombre: "Biología",
    acento: "sage",
    glifo: "❋",
    fuenteGlifo: "body",
    descripcion:
      "De la célula a los sistemas del cuerpo humano, en presentaciones por tema y cuestionarios de repaso.",
  },
  {
    slug: "quimica",
    nombre: "Química",
    acento: "coral",
    glifo: "⬡",
    fuenteGlifo: "mono",
    descripcion:
      "Estructura de la materia, nomenclatura, estequiometría y química orgánica, paso a paso.",
  },
  {
    slug: "geografia",
    nombre: "Geografía",
    acento: "sage",
    glifo: "◎",
    fuenteGlifo: "body",
    descripcion:
      "La Tierra, el espacio geográfico y la geografía humana: lo que evalúan las guías oficiales.",
  },
  {
    slug: "historia",
    nombre: "Historia",
    acento: "amber",
    glifo: "≡",
    fuenteGlifo: "mono",
    descripcion:
      "Procesos históricos de México y del mundo. En preparación: aún no hay material publicado.",
  },
];

export function buscarMateria(slug) {
  return MATERIAS.find((m) => m.slug === slug) || null;
}

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
