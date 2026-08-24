// Catálogo canónico de materias del sitio público.
//
// El design system define siete materias con un acento de color cada una; esta
// es la fuente única para la Home (tarjetas y navegación) y para /materia/:slug.
//
// Aquí vive SOLO la lista, sin una sola línea de contenido: la portada y el
// encabezado la cargan en el arranque, y antes arrastraban con ella todos los
// bancos de cuestionarios y presentaciones —tres megas— nada más para poder
// contarlos. La recolección del contenido real vive en `materias-contenido.js`,
// que solo carga quien de verdad lo necesita (/materia/:slug), y las cifras de
// la portada salen de `catalogo.generado.json`.


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
    acento: "ciruela",
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
    acento: "teal",
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