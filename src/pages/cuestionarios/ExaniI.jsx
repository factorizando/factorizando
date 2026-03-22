import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const C = {
  bg: "#0e0f11",
  surface: "#13151a",
  border: "#252830",
  blue: "#3b9eff",
  gold: "#f59e0b",
  purple: "#a78bfa",
  teal: "#d77e2b",
  orange: "#f97316",
  crimson: "#f43f5e",
  text: "#e8eaf0",
  muted: "#5a6070",
  dim: "#8a9ab8",
};

const BLOCKS = [
  { label: "Redacción Indirecta", color: "#3b9eff", range: [1, 5] },
  { label: "Comprensión Lectora", color: "#f59e0b", range: [6, 10] },
  { label: "Pensamiento Científico", color: "#34d399", range: [11, 15] },
  { label: "Pensamiento Matemático", color: "#f97316", range: [16, 25] },
];

// ── Texto base para el bloque de Comprensión Lectora ─────────────────────────
const PASSAGE = `Durante más de treinta años, don Aurelio recorrió los mismos senderos del bosque de niebla. Conocía cada árbol, cada piedra, cada manantial. Los habitantes del pueblo lo llamaban "el guardabosques", aunque nadie lo había contratado oficialmente para ese cargo; era simplemente lo que hacía, lo que siempre había hecho.

Un día, una empresa constructora llegó al municipio con planes para talar una parte del bosque y construir un complejo turístico. Las autoridades, atraídas por la promesa de empleos y desarrollo, firmaron el convenio sin consultar a la comunidad. Don Aurelio fue el primero en presentarse ante el ayuntamiento con un mapa detallado del bosque, señalando las zonas donde nacían los ríos que abastecían de agua a tres municipios. "Pueden talar los árboles", dijo, "pero no podrán traer de vuelta el agua cuando se vaya."

Nadie le hizo caso al principio. Sin embargo, cuando los primeros tractores entraron al bosque y comenzaron a remover la tierra, dos de los cuatro manantiales dejaron de fluir en menos de una semana. El ingeniero a cargo ordenó detener los trabajos. La empresa abandonó el proyecto meses después, sin dar explicaciones públicas.

Don Aurelio nunca declaró victoria. Siguió recorriendo sus senderos, aunque ahora lo acompañaban algunos jóvenes del pueblo que querían aprender a leer el bosque como él.

José Manuel Ríos Guerra`;

function getBlock(id) {
  return BLOCKS.find((b) => id >= b.range[0] && id <= b.range[1]) || BLOCKS[0];
}
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function fmt(s) {
  const m = Math.floor(s / 60),
    sec = s % 60;
  return String(m).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
}
// ════════════════════════════════════════════════════════════════════
//  MathText – renderiza texto mezclado con notación matemática
//  usando KaTeX cargado dinámicamente desde CDN.
// ════════════════════════════════════════════════════════════════════
const SMAP = {
  "\u2070": "0",
  "\u00B9": "1",
  "\u00B2": "2",
  "\u00B3": "3",
  "\u2074": "4",
  "\u2075": "5",
  "\u2076": "6",
  "\u2077": "7",
  "\u2078": "8",
  "\u2079": "9",
  "\u207B": "-",
  "\u207A": "+",
  "\u1D43": "a",
  "\u1D47": "b",
  "\u1D48": "d",
  "\u1D49": "e",
  "\u1D4F": "k",
  "\u1D50": "m",
  "\u207F": "n",
  "\u1D52": "o",
  "\u1D56": "p",
  "\u1D57": "t",
  "\u1D58": "u",
  "\u1D5B": "v",
  "\u02B7": "w",
  "\u02E3": "x",
  "\u02B8": "y",
};

function toLatexInner(s) {
  // base^(p/q) o base^(−n)
  s = s.replace(
    /([\w\d\)\}])\^\(([−\-]?\d+)\/(\d+)\)/g,
    (_, b, n, d) => b + "^{\\frac{" + n + "}{" + d + "}}",
  );
  s = s.replace(
    /([\w\d\)\}])\^\(([−\-]?\d+)\)/g,
    (_, b, n) => b + "^{" + n + "}",
  );
  // superíndices Unicode
  s = s.replace(
    /([a-zA-Z0-9\)\}])([\u2070\u00B9\u00B2\u00B3\u2074-\u2079\u207B\u207A\u1D43-\u1D5B\u207F\u02B7-\u02E3\u02B8]+)/g,
    (_, base, sup) =>
      base + "^{" + [...sup].map((c) => SMAP[c] || c).join("") + "}",
  );
  // fracciones alfanuméricas n/m (evita $xx/kg etc.)
  s = s.replace(
    /(?<![a-zA-Z\d$])([−\-]?[a-zA-Z\d]{1,3})\/([−\-]?[a-zA-Z\d]{1,3})(?![a-zA-Z\d])/g,
    (m, n, d) =>
      /^[a-zA-Z]{2,}$/.test(n) || /^[a-zA-Z]{2,}$/.test(d)
        ? m
        : "\\frac{" + n + "}{" + d + "}",
  );
  return s;
}

function toLatex(s) {
  const saved = [];
  const p = (x) => {
    saved.push(x);
    return "\x05" + (saved.length - 1) + "\x06";
  };
  // nth root ³√(expr) → \sqrt[n]{expr}
  s = s.replace(/([²³⁴⁵])(√)([(（][^)）]+[)）]|[\w\d]+)/g, (_, r, __, x) => {
    const n =
      { "\u00B2": "2", "\u00B3": "3", "\u2074": "4", "\u2075": "5" }[r] || "2";
    const inner = /^[(（]/.test(x) ? x.slice(1, -1) : x;
    return p("\\sqrt[" + n + "]{" + toLatexInner(inner) + "}");
  });
  // √(expr) → \sqrt{expr}
  s = s.replace(
    /√([(（][^)）]+[)）]|[\w\d\u00B2-\u00B3\u2070-\u2079\u207B\u00B9]+)/g,
    (_, x) => {
      const inner = /^[(（]/.test(x) ? x.slice(1, -1) : x;
      return p("\\sqrt{" + toLatexInner(inner) + "}");
    },
  );
  s = toLatexInner(s);
  return s.replace(/\x05(\d+)\x06/g, (_, i) => saved[i]);
}

function hasMath(tok) {
  return (
    /[√\^²³⁴⁵⁶⁷⁸⁹⁰¹⁻⁺\u207F\u1D43-\u1D5B]/.test(tok) ||
    /(?<![a-zA-Z$])[-−]?\d+\/\d+(?!\d)/.test(tok) ||
    /(?<![a-zA-Z$\d])[a-zA-Z]\/\d|\d\/[a-zA-Z](?![a-zA-Z])/.test(tok)
  );
}

function splitMath(text) {
  const s0 = String(text ?? "");
  // proteger importes monetarios y unidades con /
  const saved = [];
  const PR = "\x01",
    PE = "\x02";
  const prot = (x) => {
    saved.push(x);
    return PR + (saved.length - 1) + PE;
  };
  const res = (x) =>
    x.replace(new RegExp(PR + "(\\d+)" + PE, "g"), (_, i) => saved[i]);
  let s1 = s0.replace(/\$[\d\s,.]+(?=[^\d/]|$)/g, prot);
  // unidades tipo m/s², km/h etc.
  s1 = s1.replace(/[a-zA-Z]+\/[a-zA-Z²³]+/g, prot);

  const out = [];
  let buf = "",
    math = false;
  for (const tok of s1.split(/(\s+|[,;:¿?¡!.]+)/)) {
    const m = hasMath(tok);
    if (m !== math) {
      if (buf) out.push({ math, s: res(buf) });
      buf = "";
      math = m;
    }
    buf += tok;
  }
  if (buf) out.push({ math, s: res(buf) });
  return out.map((seg) => ({
    ...seg,
    latex: seg.math ? toLatex(res(seg.s)) : "",
  }));
}

let _katex = null,
  _katexP = null;
function loadKaTeX() {
  if (_katex) return Promise.resolve(_katex);
  if (_katexP) return _katexP;
  _katexP = new Promise((res) => {
    if (window.katex) {
      _katex = window.katex;
      res(_katex);
      return;
    }
    const lnk = document.createElement("link");
    lnk.rel = "stylesheet";
    lnk.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css";
    document.head.appendChild(lnk);
    const sc = document.createElement("script");
    sc.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js";
    sc.onload = () => {
      _katex = window.katex;
      res(_katex);
    };
    document.head.appendChild(sc);
  });
  return _katexP;
}

function MathText({ children, style }) {
  const [ktx, setKtx] = useState(null);
  useEffect(() => {
    loadKaTeX().then(setKtx);
  }, []);
  const text = String(children ?? "");
  if (!ktx) return <span style={style}>{text}</span>;
  const segs = splitMath(text);
  return (
    <span style={style}>
      {segs.map((seg, i) =>
        seg.math ? (
          <span
            key={i}
            dangerouslySetInnerHTML={{
              __html: ktx.renderToString(seg.latex, {
                throwOnError: false,
                displayMode: false,
              }),
            }}
          />
        ) : (
          <span key={i}>{seg.s}</span>
        ),
      )}
    </span>
  );
}
// ════════════════════════════════════════════════════════════════════

// ── Banco de preguntas ────────────────────────────────────────────────────────
// instruccion → texto de instrucción (aparece en gris pequeño)
// q           → enunciado específico (vacío cuando la instrucción es suficiente)
// passage     → true si pertenece al texto de comprensión lectora
const questions = [
  // ══ BLOQUE 0 · REDACCIÓN INDIRECTA (1–5) ══
  {
    id: 1,
    block: 0,
    instruccion: "Completa el enunciado con la opción que le da sentido.",
    q: "La directora organizó una reunión _______ con todos los docentes del plantel.",
    opts: ["extraordinario", "extraordinaria", "extraordinarias"],
    ans: "extraordinaria",
    exp: "'Reunión' es un sustantivo femenino singular; el adjetivo debe concordar en género y número: 'extraordinaria'. 'Extraordinario' sería masculino y 'extraordinarias' sería plural.",
  },
  {
    id: 2,
    block: 0,
    instruccion: "Completa la oración con las grafías correctas.",
    q: "El ping___ino nadaba tranquilamente en el ag___a fría del estanque.",
    opts: ["u - u", "ü - u", "u - ü"],
    ans: "ü - u",
    exp: "'Pingüino' lleva diéresis (ü) porque la u debe pronunciarse en la secuencia 'güi'. 'Agua' se escribe con u sin diéresis, pues en 'gua' la u sí suena sin necesidad de marcarla.",
  },
  {
    id: 3,
    block: 0,
    instruccion: "Elige el enunciado con la acentuación correcta.",
    q: "",
    opts: [
      "La alumna entrego el proyecto a tiempo y obtuvo una calificacion sobresaliente",
      "La alumna entregó el proyecto a tiempo y obtuvo una calificación sobresaliente",
      "La alumna entregó el proyecto a tiempo y obtuvo una calificacion sobresaliente",
    ],
    ans: "La alumna entregó el proyecto a tiempo y obtuvo una calificación sobresaliente",
    exp: "'Entregó' es aguda terminada en vocal y lleva tilde. 'Calificación' es aguda terminada en -n y también lleva tilde. Ambas palabras deben estar acentuadas en la misma oración.",
  },
  {
    id: 4,
    block: 0,
    instruccion: "Elige la opción que complete correctamente el enunciado.",
    q: "Cuando encontré a mis vecinas en el mercado, _______ ayudé a cargar sus bolsas.",
    opts: ["las", "les", "le"],
    ans: "les",
    exp: "Se usa 'les' como pronombre de complemento indirecto porque la acción de ayudar se realiza en beneficio de 'mis vecinas'. 'Las' sería complemento directo y aquí no aplica, pues 'ayudé' rige complemento indirecto.",
  },
  {
    id: 5,
    block: 0,
    instruccion:
      "Elige la oración que utiliza correctamente los signos de puntuación.",
    q: "",
    opts: [
      "Mañana, Lorenzo, debes presentar tu informe ante el comité directivo.",
      "Mañana Lorenzo, debes presentar tu informe. Ante el comité directivo.",
      "Mañana Lorenzo debes presentar, tu informe ante el comité directivo.",
    ],
    ans: "Mañana, Lorenzo, debes presentar tu informe ante el comité directivo.",
    exp: "El vocativo 'Lorenzo' debe aislarse con comas cuando aparece en medio de la oración. Las otras opciones fragmentan la oración de forma incorrecta o colocan la coma en un lugar que altera el sentido.",
  },

  // ══ BLOQUE 1 · COMPRENSIÓN LECTORA (6–10) ══
  {
    id: 6,
    block: 1,
    passage: true,
    instruccion: "Lee el texto y responde las preguntas relacionadas.",
    q: "¿Por qué los habitantes llamaban 'guardabosques' a don Aurelio?",
    opts: [
      "Porque el gobierno lo contrató oficialmente para cuidar el bosque",
      "Porque cuidaba el bosque por vocación propia, sin nombramiento oficial",
      "Porque era el propietario legal de los terrenos forestales",
    ],
    ans: "Porque cuidaba el bosque por vocación propia, sin nombramiento oficial",
    exp: "El texto indica que 'nadie lo había contratado oficialmente para ese cargo; era simplemente lo que hacía'. Su labor era voluntaria y surgía de un compromiso personal con el entorno.",
  },
  {
    id: 7,
    block: 1,
    passage: true,
    instruccion: "Lee el texto y responde las preguntas relacionadas.",
    q: "¿Qué argumento presentó don Aurelio ante el ayuntamiento?",
    opts: [
      "Que el bosque era patrimonio cultural de la comunidad indígena",
      "Que la empresa no contaba con los permisos federales requeridos",
      "Que la tala pondría en riesgo el suministro de agua de tres municipios",
    ],
    ans: "Que la tala pondría en riesgo el suministro de agua de tres municipios",
    exp: "Don Aurelio señaló con un mapa 'las zonas donde nacían los ríos que abastecían de agua a tres municipios' y advirtió que el agua no podría recuperarse. Este fue su único argumento documentado en el texto.",
  },
  {
    id: 8,
    block: 1,
    passage: true,
    instruccion: "Lee el texto y responde las preguntas relacionadas.",
    q: "¿Qué consecuencia inmediata tuvo el inicio de los trabajos de tala?",
    opts: [
      "El ayuntamiento expulsó a la empresa del municipio",
      "Dos de los cuatro manantiales dejaron de fluir en menos de una semana",
      "Los ríos crecieron de forma inesperada e inundaron las comunidades",
    ],
    ans: "Dos de los cuatro manantiales dejaron de fluir en menos de una semana",
    exp: "El texto afirma que 'dos de los cuatro manantiales dejaron de fluir en menos de una semana', lo que confirmó la advertencia de don Aurelio y motivó al ingeniero a ordenar la detención de los trabajos.",
  },
  {
    id: 9,
    block: 1,
    passage: true,
    instruccion: "Lee el texto y responde las preguntas relacionadas.",
    q: "¿Cómo se describe la actitud de don Aurelio al final del texto?",
    opts: [
      "Triunfal: festejó públicamente el fracaso del proyecto",
      "Serena: siguió su labor y comenzó a guiar a jóvenes del pueblo",
      "Amargada: mostró resentimiento abierto hacia las autoridades",
    ],
    ans: "Serena: siguió su labor y comenzó a guiar a jóvenes del pueblo",
    exp: "El texto dice: 'Don Aurelio nunca declaró victoria. Siguió recorriendo sus senderos, aunque ahora lo acompañaban algunos jóvenes'. Su actitud es tranquila y orientada a transmitir su conocimiento.",
  },
  {
    id: 10,
    block: 1,
    passage: true,
    instruccion: "Lee el texto y responde las preguntas relacionadas.",
    q: "¿Cuál es la idea principal del texto?",
    opts: [
      "La corrupción de las autoridades ante los intereses de las empresas privadas",
      "El conocimiento del entorno natural como herramienta de protección comunitaria",
      "La importancia del turismo como motor de desarrollo en comunidades rurales",
    ],
    ans: "El conocimiento del entorno natural como herramienta de protección comunitaria",
    exp: "El eje del texto es cómo el conocimiento profundo que don Aurelio tenía del bosque le permitió anticipar y evidenciar el daño ambiental, lo que finalmente detuvo el proyecto sin necesidad de acciones legales ni políticas.",
  },

  // ══ BLOQUE 2 · PENSAMIENTO CIENTÍFICO (11–15) ══
  {
    id: 11,
    block: 2,
    instruccion: "",
    q: "Los picos de los pinzones de las islas Galápagos presentan formas y tamaños distintos según la isla que habitan y el tipo de alimento disponible. Identifica el mecanismo evolutivo que explica esta variación.",
    opts: ["Mutación espontánea", "Selección natural", "Deriva genética"],
    ans: "Selección natural",
    exp: "La selección natural favorece a los individuos cuyas características les permiten sobrevivir y reproducirse en su ambiente. Los picos mejor adaptados al alimento disponible confieren ventaja reproductiva y se transmiten a la descendencia.",
  },
  {
    id: 12,
    block: 2,
    instruccion:
      "Identifica el enunciado que describe el modelo atómico de Rutherford.",
    q: "",
    opts: [
      "El átomo es una esfera de carga positiva con electrones incrustados distribuidos en su interior",
      "El átomo tiene un núcleo central positivo donde se concentra casi toda su masa, rodeado de electrones en órbita",
      "Los electrones ocupan niveles de energía fijos y no emiten energía mientras permanecen en el mismo nivel",
    ],
    ans: "El átomo tiene un núcleo central positivo donde se concentra casi toda su masa, rodeado de electrones en órbita",
    exp: "El modelo de Rutherford (1911) estableció la existencia de un núcleo denso y positivo. El modelo de la 'esfera con electrones incrustados' pertenece a Thomson; los niveles de energía fijos son propios del modelo de Bohr.",
  },
  {
    id: 13,
    block: 2,
    instruccion:
      "Relaciona el orgánulo con la función que desempeña en la célula.",
    q: "1. Mitocondria    2. Ribosoma    3. Vacuola    4. Lisosoma\na) Síntesis de proteínas    b) Digestión de macromoléculas    c) Producción de energía (ATP)    d) Almacenamiento de sustancias",
    opts: ["1c, 2a, 3d, 4b", "1a, 2c, 3b, 4d", "1d, 2b, 3a, 4c"],
    ans: "1c, 2a, 3d, 4b",
    exp: "Mitocondria → produce ATP mediante respiración celular (c). Ribosoma → sintetiza proteínas (a). Vacuola → almacena sustancias y agua (d). Lisosoma → digiere macromoléculas y desechos intracelulares (b).",
  },
  {
    id: 14,
    block: 2,
    instruccion: "",
    q: "El agua oxigenada, usada como antiséptico, tiene la fórmula H₂O₂. Selecciona el enunciado que describe correctamente su composición.",
    opts: [
      "Contiene 2 átomos de hidrógeno y 2 átomos de oxígeno",
      "Es una mezcla de 2 moléculas de hidrógeno y 2 moléculas de oxígeno",
      "Tiene 4 átomos en total, todos del mismo elemento",
    ],
    ans: "Contiene 2 átomos de hidrógeno y 2 átomos de oxígeno",
    exp: "La fórmula H₂O₂ indica que cada molécula contiene 2 átomos de hidrógeno (H) y 2 átomos de oxígeno (O): 4 átomos de dos elementos distintos. No es una mezcla ni tiene átomos del mismo tipo.",
  },
  {
    id: 15,
    block: 2,
    instruccion: "",
    q: "Se aplica una fuerza neta de 30 N sobre un objeto de 15 kg en reposo sobre una superficie sin fricción. ¿Cuál será la aceleración del objeto?",
    opts: ["0.5 m/s²", "2 m/s²", "450 m/s²"],
    ans: "2 m/s²",
    exp: "Segunda ley de Newton: F = m × a. Despejando: a = F / m = 30 N / 15 kg = 2 m/s². La superficie sin fricción garantiza que no hay fuerzas adicionales que modifiquen el resultado.",
  },

  // ══ BLOQUE 3 · PENSAMIENTO MATEMÁTICO (16–25) ══
  {
    id: 16,
    block: 3,
    instruccion: "",
    q: "Andrea tiene 45 años y es z años mayor que su primo. Selecciona la expresión algebraica equivalente a la edad que tendrá el primo dentro de 3 años.",
    opts: ["42 + z", "48 - z", "45 - z + 3"],
    ans: "48 - z",
    exp: "El primo tiene actualmente 45 - z años. Dentro de 3 años tendrá (45 - z) + 3 = 48 - z años. La opción '42 + z' confunde el signo, y '45 - z + 3' es igual a 48 - z pero no está simplificada.",
  },
  {
    id: 17,
    block: 3,
    instruccion: "",
    q: "Un rectángulo tiene base 6k y altura 3k. ¿Cuál es la expresión que representa su área?",
    opts: ["18k", "9k²", "18k²"],
    ans: "18k²",
    exp: "Área = base × altura = 6k × 3k = 18k². Al multiplicar monomios se multiplican los coeficientes (6 × 3 = 18) y se suman los exponentes de la variable (k¹ × k¹ = k²).",
  },
  {
    id: 18,
    block: 3,
    instruccion: "",
    q: "Un atleta corre 12 vueltas de calentamiento a una pista de 400 m y después realiza 38 vueltas más de entrenamiento. ¿Cuántos kilómetros recorre en total?",
    opts: ["2.0", "20.0", "200.0"],
    ans: "20.0",
    exp: "Total de vueltas: 12 + 38 = 50. Distancia: 50 × 400 m = 20 000 m. Convirtiendo a km: 20 000 m ÷ 1 000 = 20.0 km.",
  },
  {
    id: 19,
    block: 3,
    instruccion: "",
    q: "¿Cuál opción representa una forma correcta de obtener (70)²?",
    opts: [
      "(65 + 5)² = 65² + 5²",
      "(65 + 5)² = (65)(2) + (5)(2)",
      "(65 + 5)² = 65² + 2(65)(5) + 5²",
    ],
    ans: "(65 + 5)² = 65² + 2(65)(5) + 5²",
    exp: "El cuadrado de un binomio sigue la identidad (a + b)² = a² + 2ab + b². Con a = 65 y b = 5: 65² + 2(65)(5) + 5² = 4 225 + 650 + 25 = 4 900 = 70². Las otras opciones omiten el término central 2ab.",
  },
  {
    id: 20,
    block: 3,
    instruccion: "",
    q: "En una bolsa hay 5 canicas rojas, 3 azules, 7 verdes y 5 amarillas. Si se saca una canica al azar, ¿cuál es la probabilidad de que sea roja o amarilla?",
    opts: ["5/20", "8/20", "10/20"],
    ans: "10/20",
    exp: "Casos favorables: rojas (5) + amarillas (5) = 10. Total de canicas: 5 + 3 + 7 + 5 = 20. Probabilidad = 10/20 = 1/2. Los eventos son mutuamente excluyentes, por lo que se suman sus favorables.",
  },
  {
    id: 21,
    block: 3,
    instruccion: "",
    q: "¿Cuál de las siguientes expresiones es equivalente a (x + 3)(x - 7)?",
    opts: ["x² - 4x - 21", "x² + 4x - 21", "x² - 21"],
    ans: "x² - 4x - 21",
    exp: "Se aplica la propiedad distributiva (FOIL): x·x + x·(-7) + 3·x + 3·(-7) = x² - 7x + 3x - 21 = x² - 4x - 21. El término medio resulta de sumar los productos cruzados: -7x + 3x = -4x.",
  },
  {
    id: 22,
    block: 3,
    instruccion: "",
    q: "Un triángulo isósceles tiene un ángulo en el vértice que mide 40°. ¿Cuánto mide cada uno de los dos ángulos iguales de la base?",
    opts: ["70°", "80°", "140°"],
    ans: "70°",
    exp: "La suma de los ángulos interiores de un triángulo es 180°. Los dos ángulos de la base son iguales: 2x = 180° - 40° = 140°, por lo tanto x = 70°. La opción 140° corresponde a la suma de ambos ángulos, no a cada uno.",
  },
  {
    id: 23,
    block: 3,
    instruccion: "",
    q: "En una imprenta, 1 máquina imprime 120 volantes por hora. Si la imprenta tiene 4 máquinas y trabaja 6 horas al día, ¿cuántos volantes producirá en 5 días?",
    opts: ["2 880", "14 400", "3 600"],
    ans: "14 400",
    exp: "Producción por hora: 120 × 4 = 480 volantes. Por día: 480 × 6 = 2 880 volantes. En 5 días: 2 880 × 5 = 14 400 volantes. Es importante multiplicar en el orden correcto antes de escalar al período total.",
  },
  {
    id: 24,
    block: 3,
    instruccion: "",
    q: "¿Qué opción representa un número racional ubicado entre los 2 puntos marcados en la recta numérica?",
    svg: `<svg viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg" style="background:white;font-family:'Times New Roman',serif;">
    <defs>
      <marker id="al" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="10 0,0 3.5,10 7" fill="#1a1a1a"/></marker>
      <marker id="ar" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><polygon points="0 0,10 3.5,0 7" fill="#1a1a1a"/></marker>
    </defs>
    <line x1="50" y1="62" x2="470" y2="62" stroke="#1a1a1a" stroke-width="2.5" marker-start="url(#al)" marker-end="url(#ar)"/>
    <circle cx="180" cy="62" r="14" fill="white" stroke="#1a1a1a" stroke-width="2.5"/>
    <circle cx="350" cy="62" r="14" fill="white" stroke="#1a1a1a" stroke-width="2.5"/>
    <text x="148" y="110" font-size="18" fill="#1a1a1a" text-anchor="middle">−</text>
    <text x="165" y="103" font-size="18" fill="#1a1a1a" text-anchor="middle">1</text>
    <line x1="156" y1="107" x2="174" y2="107" stroke="#1a1a1a" stroke-width="1.8"/>
    <text x="165" y="124" font-size="18" fill="#1a1a1a" text-anchor="middle">2</text>
    <text x="350" y="103" font-size="18" fill="#1a1a1a" text-anchor="middle">3</text>
    <line x1="340" y1="107" x2="360" y2="107" stroke="#1a1a1a" stroke-width="1.8"/>
    <text x="350" y="124" font-size="18" fill="#1a1a1a" text-anchor="middle">4</text>
  </svg>`,
    opts: ["-3/4", "-7/8", "1/8"],
    ans: "1/8",
    exp: "-1/2 = -0.5 y 3/4 = 0.75. Se busca un número entre -0.5 y 0.75. 1/8 = 0.125 ✓ (dentro del intervalo). -3/4 = -0.75 y -7/8 = -0.875 están fuera del rango, a la izquierda de -1/2.",
  },
  {
    id: 25,
    block: 3,
    instruccion: "",
    q: "En un triángulo rectángulo la hipotenusa mide 13 cm y uno de los catetos mide 5 cm. ¿Cuánto mide el otro cateto?",
    opts: ["8.0 cm", "12.0 cm", "18.0 cm"],
    ans: "12.0 cm",
    exp: "Teorema de Pitágoras: c² = a² + b². Despejando el cateto desconocido: b = √(13² - 5²) = √(169 - 25) = √144 = 12.0 cm. El triple pitagórico 5-12-13 es uno de los más frecuentes en el EXANI-I.",
  },
];

// ── Componente ────────────────────────────────────────────────────────────────

// ── Barra de navegación superior ─────────────────────────────────────────────
const Navbar = () => {
  const brandRef = useRef(null);

  useEffect(() => {
    const load = () => {
      if (!document.getElementById("katex-css")) {
        const lnk = document.createElement("link");
        lnk.id = "katex-css";
        lnk.rel = "stylesheet";
        lnk.href =
          "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css";
        document.head.appendChild(lnk);
      }
      if (window.katex) {
        render();
      } else if (!document.getElementById("katex-js")) {
        const sc = document.createElement("script");
        sc.id = "katex-js";
        sc.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js";
        sc.async = true;
        sc.onload = render;
        document.head.appendChild(sc);
      }
    };
    const render = () => {
      if (!brandRef.current || !window.katex) return;
      window.katex.render(
        "\\textbf{\\text{Facto}}\\textcolor{#f59e0b}{\\mathbb{R}[i]}\\textbf{\\text{zando}}",
        brandRef.current,
        { throwOnError: false, displayMode: false, trust: true, strict: false },
      );
    };
    load();
  }, []);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(14,15,17,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #252830",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <img
          src={`${import.meta.env.BASE_URL}assets/logoX.png`}
          alt="Logo Factorizando"
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            objectFit: "cover",
            border: "1px solid #3b9eff44",
          }}
        />
        <span
          style={{
            fontSize: "1.1rem",
            letterSpacing: ".04em",
            userSelect: "none",
            color: "#e8eaf0",
          }}
        >
          <span ref={brandRef}>
            {/* Fallback hasta que KaTeX cargue */}
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
              }}
            >
              Facto
              <span style={{ color: "#f59e0b" }}>
                ℝ[<em>i</em>]
              </span>
              zando
            </span>
          </span>
        </span>
      </Link>
    </div>
  );
};

export default function ExaniI() {
  const [mode, setMode] = useState("menu");
  const [examMode, setExamMode] = useState(null);
  const [queue, setQueue] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [confirmed, setConfirmed] = useState(false);
  const [selected, setSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (!timerOn || timeLeft <= 0) return;
    const t = setInterval(() => setTimeLeft((p) => p - 1), 1000);
    return () => clearInterval(t);
  }, [timerOn, timeLeft]);

  useEffect(() => {
    if (timeLeft <= 0 && timerOn) {
      setTimerOn(false);
      setMode("results");
    }
  }, [timeLeft, timerOn]);

  const startExam = (modeKey) => {
    let qs;
    if (modeKey === "all") {
      // Para CL mantenemos el orden relativo del texto; mezclamos los otros bloques
      const b0 = shuffle(questions.filter((q) => q.block === 0));
      const b1 = questions.filter((q) => q.block === 1); // sin mezclar: siguen el texto
      const b2 = shuffle(questions.filter((q) => q.block === 2));
      const b3 = shuffle(questions.filter((q) => q.block === 3));
      qs = [...b0, ...b1, ...b2, ...b3];
    } else {
      const idx = parseInt(modeKey.replace("block-", ""), 10);
      qs =
        idx === 1
          ? questions.filter((q) => q.block === idx) // CL sin mezclar
          : shuffle(questions.filter((q) => q.block === idx));
    }
    // Mezclar opciones en todos excepto el reactivo de emparejamiento (id 13)
    qs = qs.map((q) => (q.id === 13 ? q : { ...q, opts: shuffle(q.opts) }));
    setQueue(qs);
    setAnswers({});
    setCurrent(0);
    setSelected(null);
    setConfirmed(false);
    setTimeLeft(qs.length * 60);
    setTimerOn(true); // 60 s por reactivo (EXANI-I)
    setExamMode(modeKey);
    setMode("exam");
  };

  const confirmAnswer = () => {
    if (!selected) return;
    setAnswers((p) => ({ ...p, [queue[current].id]: selected }));
    setConfirmed(true);
  };

  const goNext = () => {
    if (current < queue.length - 1) {
      const nid = queue[current + 1].id;
      setCurrent((c) => c + 1);
      setSelected(answers[nid] || null);
      setConfirmed(!!answers[nid]);
    } else {
      setTimerOn(false);
      setMode("results");
    }
  };

  const score = Object.entries(answers).reduce((acc, [id, ans]) => {
    const q = questions.find((q) => q.id === Number(id));
    return acc + (q?.ans === ans ? 1 : 0);
  }, 0);

  const timerWarning = timeLeft < 60;
  const CSS = `@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}::-webkit-scrollbar{width:5px;background:#0e0f11}::-webkit-scrollbar-thumb{background:#252830;border-radius:99px}`;

  // ── MENÚ ───────────────────────────────────────────────────────────────────
  if (mode === "menu") {
    const totalQ = questions.length;
    return (
      <div style={{ minHeight: "100vh", background: C.bg, paddingBottom: 64 }}>
        <Navbar />
        <style>{CSS}</style>
        <div
          style={{
            background: C.surface,
            borderBottom: `1px solid ${C.border}`,
            padding: "44px 24px 36px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.03,
              backgroundImage: `radial-gradient(${C.teal} 1px,transparent 1px)`,
              backgroundSize: "36px 36px",
            }}
          />
          <div style={{ position: "relative" }}>
            <span
              style={{
                display: "inline-block",
                background: C.teal + "22",
                color: C.teal,
                borderRadius: 99,
                padding: "3px 14px",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 16,
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              FactoRizando · Acceso libre · CENEVAL
            </span>
            <h1
              style={{
                fontSize: "clamp(20px,4vw,34px)",
                fontWeight: 700,
                color: C.text,
                letterSpacing: "-1.5px",
                lineHeight: 1.1,
                marginBottom: 10,
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              Formulario tipo{" "}
              <span style={{ color: C.teal }}>EXANI-I-BUAP</span>
            </h1>
            <p
              style={{
                color: C.muted,
                fontSize: 14,
                maxWidth: 540,
                margin: "0 auto 24px",
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              {totalQ} reactivos · 4 áreas del CENEVAL · 60 s por reactivo
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 40,
                flexWrap: "wrap",
              }}
            >
              {[
                { label: "Reactivos", val: totalQ },
                { label: "Áreas", val: 4 },
                { label: "Tiempo total", val: `${totalQ} min` },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 900,
                      color: C.text,
                      letterSpacing: "-1px",
                      fontFamily: "'DM Sans',sans-serif",
                    }}
                  >
                    {s.val}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: C.muted,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 1.5,
                      fontFamily: "'DM Sans',sans-serif",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 760, margin: "0 auto", padding: "32px 16px" }}>
          <p
            style={{
              color: C.muted,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 12,
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            Examen completo
          </p>
          <button
            onClick={() => startExam("all")}
            style={{
              width: "100%",
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: 14,
              padding: "22px 16px",
              cursor: "pointer",
              textAlign: "center",
              marginBottom: 28,
              fontFamily: "'DM Sans',sans-serif",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = C.teal;
              e.currentTarget.style.background = C.teal + "11";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = C.border;
              e.currentTarget.style.background = C.surface;
            }}
          >
            <div style={{ fontSize: 26, marginBottom: 6 }}>📋</div>
            <div style={{ color: C.text, fontWeight: 700, fontSize: 15 }}>
              Todas las áreas
            </div>
            <div style={{ color: C.muted, fontSize: 12, marginTop: 4 }}>
              {totalQ} reactivos · {totalQ} min
            </div>
          </button>

          <p
            style={{
              color: C.muted,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 12,
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            O elige un área
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(210px,1fr))",
              gap: 10,
            }}
          >
            {BLOCKS.map((bl, i) => {
              const count = bl.range[1] - bl.range[0] + 1;
              return (
                <button
                  key={i}
                  onClick={() => startExam(`block-${i}`)}
                  style={{
                    background: C.surface,
                    border: `1px solid ${bl.color}44`,
                    borderRadius: 12,
                    padding: "18px 14px",
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "'DM Sans',sans-serif",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = bl.color + "18";
                    e.currentTarget.style.borderColor = bl.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = C.surface;
                    e.currentTarget.style.borderColor = bl.color + "44";
                  }}
                >
                  <div
                    style={{
                      color: bl.color,
                      fontWeight: 700,
                      fontSize: 13,
                      lineHeight: 1.35,
                      fontFamily: "'DM Sans',sans-serif",
                      marginBottom: 6,
                    }}
                  >
                    {bl.label}
                  </div>
                  <div style={{ color: C.muted, fontSize: 11 }}>
                    {count} reactivos · {count} min
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ── RESULTADOS ─────────────────────────────────────────────────────────────
  if (mode === "results") {
    const total = queue.length,
      pct = total > 0 ? Math.round((score / total) * 100) : 0;
    const col = pct >= 80 ? C.teal : pct >= 60 ? C.gold : C.crimson;
    const msg =
      pct >= 90
        ? "¡Excelente dominio del temario EXANI-I!"
        : pct >= 75
          ? "¡Muy bien! Repasa los temas fallidos."
          : pct >= 50
            ? "Sigue practicando, vas por buen camino."
            : "Te recomendamos reforzar el temario.";
    const displayQs =
      filter === "correct"
        ? queue.filter((q) => answers[q.id] === q.ans)
        : filter === "wrong"
          ? queue.filter((q) => answers[q.id] && answers[q.id] !== q.ans)
          : queue;

    return (
      <div style={{ minHeight: "100vh", background: C.bg, paddingBottom: 64 }}>
        <Navbar />
        <style>{CSS}</style>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px" }}>
          <div
            style={{
              display: "flex",
              gap: 12,
              marginBottom: 24,
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => setMode("menu")}
              style={{
                background: C.surface,
                color: C.dim,
                border: `1px solid ${C.border}`,
                borderRadius: 12,
                padding: "12px 28px",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "'DM Sans',sans-serif",
                cursor: "pointer",
              }}
            >
              ← Menú
            </button>
            <button
              onClick={() => startExam(examMode)}
              style={{
                background: `linear-gradient(135deg,${C.teal},${C.blue})`,
                color: "#fff",
                border: "none",
                borderRadius: 12,
                padding: "12px 28px",
                fontSize: 14,
                fontWeight: 700,
                fontFamily: "'DM Sans',sans-serif",
                cursor: "pointer",
              }}
            >
              ↺ Repetir
            </button>
          </div>
          <div
            style={{
              background: C.surface,
              border: `2px solid ${col}`,
              borderRadius: 18,
              padding: "30px 36px",
              textAlign: "center",
              maxWidth: 380,
              margin: "0 auto 32px",
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            <div
              style={{
                fontSize: 58,
                fontWeight: 900,
                color: col,
                letterSpacing: "-3px",
                lineHeight: 1,
              }}
            >
              {pct}%
            </div>
            <div style={{ color: C.dim, fontSize: 14, marginTop: 8 }}>
              <span style={{ color: C.text, fontWeight: 700 }}>{score}</span> de{" "}
              {total} correctas
            </div>
            <div
              style={{
                color: col,
                fontWeight: 700,
                fontSize: 15,
                marginTop: 10,
              }}
            >
              {msg}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 8,
              marginBottom: 20,
              flexWrap: "wrap",
            }}
          >
            {[
              ["all", "Todas"],
              ["correct", `✓ Correctas (${score})`],
              ["wrong", `✗ Incorrectas (${total - score})`],
            ].map(([f, label]) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: "6px 14px",
                  borderRadius: 99,
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: "pointer",
                  border: "none",
                  background: filter === f ? C.teal : C.surface,
                  color: filter === f ? "#fff" : C.muted,
                  fontFamily: "'DM Sans',sans-serif",
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {displayQs.map((q) => {
            const bl = getBlock(q.id),
              sel = answers[q.id];
            return (
              <div
                key={q.id}
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: 14,
                  padding: "20px 24px",
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{
                      background: bl.color + "1a",
                      color: bl.color,
                      borderRadius: 6,
                      padding: "2px 10px",
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: 1.5,
                      textTransform: "uppercase",
                      fontFamily: "'DM Sans',sans-serif",
                    }}
                  >
                    {bl.label}
                  </span>
                  <span
                    style={{
                      marginLeft: "auto",
                      color: C.muted,
                      fontSize: 12,
                      fontFamily: "'DM Sans',sans-serif",
                    }}
                  >
                    #{q.id}
                  </span>
                </div>
                {q.instruccion && (
                  <p
                    style={{
                      color: C.muted,
                      fontSize: 12,
                      marginBottom: 6,
                      fontStyle: "italic",
                      fontFamily: "'DM Sans',sans-serif",
                    }}
                  >
                    <MathText>{q.instruccion}</MathText>
                  </p>
                )}
                {q.svg && (
                  <div
                    style={{
                      margin: "12px 0",
                      borderRadius: 8,
                      overflow: "hidden",
                    }}
                    dangerouslySetInnerHTML={{ __html: q.svg }}
                  />
                )}
                {q.q && (
                  <p
                    style={{
                      color: C.text,
                      fontSize: 14,
                      fontWeight: 600,
                      marginBottom: 10,
                      lineHeight: 1.6,
                      fontFamily: "'DM Sans',sans-serif",
                      whiteSpace: "pre-line",
                    }}
                  >
                    <MathText>{q.q}</MathText>
                  </p>
                )}
                {q.svg && (
                  <div
                    style={{
                      margin: "10px 0",
                      borderRadius: 8,
                      overflow: "hidden",
                      border: "1px solid #e0e0e0",
                      background: "white",
                    }}
                    dangerouslySetInnerHTML={{ __html: q.svg }}
                  />
                )}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    marginBottom: 10,
                  }}
                >
                  {q.opts.map((opt) => {
                    const isOk = opt === q.ans,
                      isUser = opt === sel;
                    let bg = C.bg,
                      bd = `1px solid ${C.border}`,
                      co = C.dim;
                    if (isOk) {
                      bg = C.teal + "22";
                      bd = `1px solid ${C.teal}`;
                      co = C.teal;
                    } else if (isUser && !isOk) {
                      bg = C.crimson + "22";
                      bd = `1px solid ${C.crimson}`;
                      co = C.crimson;
                    }
                    return (
                      <div
                        key={opt}
                        style={{
                          background: bg,
                          border: bd,
                          color: co,
                          borderRadius: 8,
                          padding: "10px 14px",
                          fontSize: 13,
                          fontFamily: "'DM Sans',sans-serif",
                          lineHeight: 1.5,
                        }}
                      >
                        {isOk ? "✓ " : ""}
                        {isUser && !isOk ? "✗ " : ""}
                        <MathText>{opt}</MathText>
                      </div>
                    );
                  })}
                </div>
                <div
                  style={{
                    padding: "8px 12px",
                    background: bl.color + "0e",
                    borderRadius: 8,
                    border: `1px solid ${bl.color}22`,
                  }}
                >
                  <span
                    style={{
                      color: bl.color,
                      fontSize: 11,
                      fontWeight: 700,
                      fontFamily: "'DM Sans',sans-serif",
                    }}
                  >
                    💡{" "}
                  </span>
                  <span
                    style={{
                      color: C.dim,
                      fontSize: 12,
                      fontFamily: "'DM Sans',sans-serif",
                    }}
                  >
                    <MathText>{q.exp}</MathText>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ── EXAMEN ─────────────────────────────────────────────────────────────────
  const q = queue[current],
    bl = getBlock(q.id);
  const prog = ((current + 1) / queue.length) * 100;
  const answered = Object.keys(answers).length;

  return (
    <div style={{ minHeight: "100vh", background: C.bg, paddingBottom: 64 }}>
      <Navbar />
      <style>{CSS}</style>
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "24px 16px" }}>
        {/* Cabecera */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <div style={{ fontFamily: "'DM Sans',sans-serif" }}>
            <span style={{ color: C.muted, fontSize: 13 }}>Reactivo </span>
            <span style={{ color: C.text, fontWeight: 700 }}>
              {current + 1}
            </span>
            <span style={{ color: C.muted }}> / {queue.length}</span>
            <span style={{ color: C.muted, fontSize: 12, marginLeft: 10 }}>
              ({answered} respondidos)
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: timerWarning ? C.crimson : bl.color,
                background: timerWarning ? C.crimson + "18" : bl.color + "18",
                padding: "5px 12px",
                borderRadius: 20,
                border: `1px solid ${timerWarning ? C.crimson : bl.color}55`,
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              ⏱ {fmt(timeLeft)}
            </span>
            <button
              onClick={() => {
                setTimerOn(false);
                setMode("results");
              }}
              style={{
                padding: "5px 12px",
                background: C.crimson + "18",
                color: C.crimson,
                border: `1px solid ${C.crimson}44`,
                borderRadius: 20,
                cursor: "pointer",
                fontSize: 12,
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              Terminar
            </button>
          </div>
        </div>

        {/* Barra de progreso */}
        <div
          style={{
            background: C.border,
            borderRadius: 99,
            height: 4,
            overflow: "hidden",
            marginBottom: 20,
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${prog}%`,
              background: `linear-gradient(90deg,${bl.color},${C.purple})`,
              transition: "width 0.3s",
              borderRadius: 99,
            }}
          />
        </div>

        {/* Tag de área */}
        <div style={{ marginBottom: 12 }}>
          <span
            style={{
              background: bl.color + "1a",
              color: bl.color,
              borderRadius: 6,
              padding: "2px 10px",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            {bl.label}
          </span>
          <span
            style={{
              marginLeft: 10,
              color: C.muted,
              fontSize: 12,
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            #{q.id} / {questions.length}
          </span>
        </div>

        {/* Texto de comprensión lectora */}
        {q.passage && (
          <div
            style={{
              background: C.surface,
              border: `1px solid ${C.gold}44`,
              borderRadius: 12,
              marginBottom: 14,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: C.gold + "18",
                padding: "8px 16px",
                borderBottom: `1px solid ${C.gold}33`,
              }}
            >
              <span
                style={{
                  color: C.gold,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  fontFamily: "'DM Sans',sans-serif",
                }}
              >
                📄 El guardabosques — Lee el texto
              </span>
            </div>
            <div
              style={{
                padding: "16px 20px",
                maxHeight: 260,
                overflowY: "auto",
              }}
            >
              {PASSAGE.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  style={{
                    color: C.dim,
                    fontSize: 13.5,
                    lineHeight: 1.75,
                    marginBottom: 10,
                    textAlign: "justify",
                    fontFamily: "'DM Sans',sans-serif",
                    fontStyle:
                      i === PASSAGE.split("\n\n").length - 1
                        ? "italic"
                        : "normal",
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Tarjeta de pregunta */}
        <div
          style={{
            background: C.surface,
            border: `1px solid ${C.border}`,
            borderRadius: 14,
            padding: "20px 24px",
            marginBottom: 16,
          }}
        >
          {q.instruccion && (
            <p
              style={{
                color: C.muted,
                fontSize: 13,
                fontStyle: "italic",
                marginBottom: q.q ? 10 : 0,
                fontFamily: "'DM Sans',sans-serif",
                lineHeight: 1.5,
              }}
            >
              <MathText>{q.instruccion}</MathText>
            </p>
          )}
          {q.q && (
            <p
              style={{
                color: C.text,
                fontSize: "clamp(14px,2.5vw,16px)",
                fontWeight: 600,
                lineHeight: 1.7,
                fontFamily: "'DM Sans',sans-serif",
                margin: 0,
                whiteSpace: "pre-line",
              }}
            >
              <MathText>{q.q}</MathText>
            </p>
          )}
          {q.svg && (
            <div
              style={{
                margin: "16px 0 4px",
                borderRadius: 10,
                overflow: "hidden",
                border: "1px solid #e0e0e0",
                background: "white",
              }}
              dangerouslySetInnerHTML={{ __html: q.svg }}
            />
          )}
        </div>

        {/* Opciones */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            marginBottom: 20,
          }}
        >
          {q.opts.map((opt) => {
            const isSel = selected === opt,
              isOk = opt === q.ans;
            let bg = C.bg,
              bd = `1px solid ${C.border}`,
              co = C.dim;
            if (confirmed && isSel && isOk) {
              bg = C.teal + "22";
              bd = `1px solid ${C.teal}`;
              co = C.teal;
            } else if (confirmed && isSel) {
              bg = C.crimson + "22";
              bd = `1px solid ${C.crimson}`;
              co = C.crimson;
            } else if (confirmed && isOk) {
              bg = C.teal + "0e";
              bd = `1px solid ${C.teal}55`;
              co = C.teal + "aa";
            } else if (isSel) {
              bg = bl.color + "18";
              bd = `1px solid ${bl.color}`;
              co = bl.color;
            }
            return (
              <button
                key={opt}
                onClick={() => !confirmed && setSelected(opt)}
                style={{
                  background: bg,
                  border: bd,
                  color: co,
                  borderRadius: 9,
                  padding: "13px 16px",
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: confirmed ? "default" : "pointer",
                  textAlign: "left",
                  transition: "all 0.15s",
                  outline: "none",
                  fontFamily: "'DM Sans',sans-serif",
                  lineHeight: 1.5,
                }}
              >
                {confirmed && isOk ? "✓ " : ""}
                {confirmed && isSel && !isOk ? "✗ " : ""}
                <MathText>{opt}</MathText>
              </button>
            );
          })}
        </div>

        {/* Explicación */}
        {confirmed && (
          <div
            style={{
              background: bl.color + "0e",
              border: `1px solid ${bl.color}22`,
              borderRadius: 10,
              padding: "12px 16px",
              marginBottom: 16,
            }}
          >
            <span
              style={{
                color: bl.color,
                fontSize: 12,
                fontWeight: 700,
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              💡{" "}
            </span>
            <span
              style={{
                color: C.dim,
                fontSize: 13,
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              <MathText>{q.exp}</MathText>
            </span>
          </div>
        )}

        {/* Navegación */}
        <div
          style={{
            display: "flex",
            gap: 10,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => {
              if (current > 0) {
                const pid = queue[current - 1].id;
                setCurrent((c) => c - 1);
                setSelected(answers[pid] || null);
                setConfirmed(!!answers[pid]);
              }
            }}
            disabled={current === 0}
            style={{
              padding: "10px 20px",
              background: C.surface,
              color: C.muted,
              border: `1px solid ${C.border}`,
              borderRadius: 10,
              cursor: current === 0 ? "not-allowed" : "pointer",
              opacity: current === 0 ? 0.4 : 1,
              fontSize: 14,
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            ← Anterior
          </button>
          {!confirmed ? (
            <button
              onClick={confirmAnswer}
              disabled={!selected}
              style={{
                padding: "10px 28px",
                fontSize: 14,
                fontWeight: 700,
                background: selected
                  ? `linear-gradient(135deg,${bl.color},${C.purple})`
                  : C.surface,
                color: selected ? "#fff" : C.muted,
                border: "none",
                borderRadius: 10,
                cursor: selected ? "pointer" : "not-allowed",
                boxShadow: selected ? `0 4px 20px ${bl.color}33` : "none",
                fontFamily: "'DM Sans',sans-serif",
                transition: "all 0.2s",
              }}
            >
              Confirmar respuesta
            </button>
          ) : (
            <button
              onClick={goNext}
              style={{
                padding: "10px 28px",
                fontSize: 14,
                fontWeight: 700,
                background: `linear-gradient(135deg,${bl.color},${C.purple})`,
                color: "#fff",
                border: "none",
                borderRadius: 10,
                cursor: "pointer",
                boxShadow: `0 4px 20px ${bl.color}33`,
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              {current === queue.length - 1
                ? "Ver resultados →"
                : "Siguiente →"}
            </button>
          )}
        </div>

        {/* Navegador de reactivos */}
        <div
          style={{
            marginTop: 24,
            background: C.surface,
            borderRadius: 12,
            padding: 16,
            border: `1px solid ${C.border}`,
          }}
        >
          <p
            style={{
              color: C.muted,
              fontSize: 11,
              marginBottom: 10,
              textTransform: "uppercase",
              letterSpacing: 1,
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            Navegador de reactivos
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {queue.map((fq, i) => {
              const fbl = getBlock(fq.id),
                a = answers[fq.id],
                isCurr = i === current;
              let bg = C.surface,
                co = C.muted,
                bdr = `1px solid ${C.border}`;
              if (isCurr) {
                bg = fbl.color;
                co = "#fff";
                bdr = `2px solid ${fbl.color}`;
              } else if (a === fq.ans) {
                bg = C.teal + "33";
                co = C.teal;
              } else if (a) {
                bg = C.crimson + "33";
                co = C.crimson;
              }
              return (
                <button
                  key={fq.id}
                  onClick={() => {
                    setCurrent(i);
                    setSelected(answers[fq.id] || null);
                    setConfirmed(!!answers[fq.id]);
                  }}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 5,
                    background: bg,
                    color: co,
                    border: bdr,
                    cursor: "pointer",
                    fontSize: 11,
                    fontWeight: isCurr ? 700 : 400,
                    fontFamily: "'DM Sans',sans-serif",
                  }}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
          <div
            style={{
              display: "flex",
              gap: 14,
              marginTop: 10,
              flexWrap: "wrap",
            }}
          >
            {[
              [C.teal + "33", C.teal, "Correcta"],
              [C.crimson + "33", C.crimson, "Incorrecta"],
              [C.surface, C.muted, "Sin contestar"],
            ].map(([bg, co, label]) => (
              <div
                key={label}
                style={{ display: "flex", alignItems: "center", gap: 5 }}
              >
                <div
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: 3,
                    background: bg,
                    border: `1px solid ${co}`,
                  }}
                />
                <span
                  style={{
                    color: C.muted,
                    fontSize: 11,
                    fontFamily: "'DM Sans',sans-serif",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
