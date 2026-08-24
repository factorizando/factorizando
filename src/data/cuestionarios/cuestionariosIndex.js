// Registro único de cuestionarios, plano y con la clave = el id de la URL.
//
// La clave es lo que aparece en `/cuestionario/<id>` y lo que se guarda en
// `resultados.cuestionario_id`: **no cambia** aunque el archivo se mueva de
// carpeta (docs/PLAN_MIGRACION.md). Cada archivo se llama igual que su id, así
// que desde la URL se encuentra el banco sin buscar.
//
// Antes esto era un árbol anidado por nivel y tema, y `materia` y `nivel` se
// deducían de la FORMA del árbol: la primera clave era el nivel y alguna clave
// intermedia era la materia. Eso ataba dos datos a una estructura de carpetas y
// obligaba a `materias-contenido.js` a recorrerla para contarlos. Ahora los dos
// son campos de la entrada, que es lo que son.
//
// `materia: null` en los simuladores es deliberado: cubren el examen completo y
// no pertenecen a una sola materia. Por eso no suman en los conteos por materia.

import CELULA_ORGANELOS from "./biologia/celula-organelos.js";
import LA_CELULA from "./biologia/la-celula.js";
import CL_AMBITO_ESTUDIO from "./espanol/cl-ambito-estudio.js";
import CL_AMBITO_LITERARIO from "./espanol/cl-ambito-literario.js";
import CL_EXANI_I_1 from "./espanol/cl-exani-i-1.js";
import CL_EXANI_I_2 from "./espanol/cl-exani-i-2.js";
import CL_PARTICIPACION_SOCIAL from "./espanol/cl-participacion-social.js";
import ESTRUCTURA_ORACION_PREPA from "./espanol/estructura-oracion-prepa.js";
import ESTRUCTURA_ORACION_UNI from "./espanol/estructura-oracion-uni.js";
import ORTOGRAFIA_GRAFIAS from "./espanol/ortografia-grafias.js";
import SINONIMOS from "./espanol/sinonimos-antonimos-analogias.js";
import SINTAXIS_ESPANOL from "./espanol/sintaxis-espanol.js";
import SUJETO_PREDICADO from "./espanol/sujeto-predicado-exani-i.js";
import ALGEBRA_PREPA from "./matematicas/algebra-prepa.js";
import DIVISIBILIDAD from "./matematicas/divisibilidad.js";
import DIVISIBILIDAD_MCD from "./matematicas/divisibilidad-mcd-mcm.js";
import NUMEROS_ENTEROS from "./matematicas/numeros-enteros.js";
import PRIMOS_MCD_MCM from "./matematicas/primos-mcd-mcm.js";
import PRODUCTO_ENTEROS from "./matematicas/producto-enteros.js";
import RACIONALES_PREPA from "./matematicas/racionales-prepa.js";
import SUMA_ENTEROS from "./matematicas/suma-enteros.js";
import UNI_RACIONALES from "./matematicas/uni-numeros-racionales.js";
import SIMULADOR_EXANI_I from "./simuladores/simulador-exani-i.js";
import SIMULADOR_EXANI_I_2 from "./simuladores/simulador-exani-i-2.js";
import SIMULADOR_EXANI_I_3 from "./simuladores/simulador-exani-i-3.jsx";
import SIMULADOR_PREPA_1 from "./simuladores/simulador-prepa-1.jsx";
import SIMULADOR_PREPA_2 from "./simuladores/simulador-prepa-2.jsx";

export const CUESTIONARIOS_INDEX = {
  // ── biologia ──
  // Los dos colgaban de `preparatoria` en el árbol viejo aunque su archivo, su
  // metadata y el único sitio que los enlaza (universidadData) dicen universidad.
  // Se corrigió al aplanar: el árbol era el que estaba mal.
  "celula-organelos": {
    titulo: "Célula y Organelos",
    descripcion: "",
    materia: "biologia",
    nivel: "universidad",
    data: CELULA_ORGANELOS,
  },
  "la-celula": {
    titulo: "La Célula",
    descripcion: "",
    materia: "biologia",
    nivel: "universidad",
    data: LA_CELULA,
  },

  // ── espanol ──
  "cl-ambito-estudio": {
    titulo: "Ámbito de estudio",
    descripcion: "Textos argumentativo-periodístico y ensayo académico",
    materia: "espanol",
    nivel: "universidad",
    data: CL_AMBITO_ESTUDIO,
  },
  "cl-ambito-literario": {
    titulo: "Ámbito literario",
    descripcion: "Textos: cuento y poema",
    materia: "espanol",
    nivel: "universidad",
    data: CL_AMBITO_LITERARIO,
  },
  "cl-exani-i-1": {
    titulo: "Textos informativos y cotidianos",
    descripcion: "Texto expositivo, anuncio publicitario y tabla de datos",
    materia: "espanol",
    nivel: "preparatoria",
    data: CL_EXANI_I_1,
  },
  "cl-exani-i-2": {
    titulo: "Textos narrativos y literarios",
    descripcion: "Relato, fragmento de teatro e instructivo",
    materia: "espanol",
    nivel: "preparatoria",
    data: CL_EXANI_I_2,
  },
  "cl-participacion-social": {
    titulo: "Ámbito de participación social",
    descripcion: "Textos: noticia y documento administrativo",
    materia: "espanol",
    nivel: "universidad",
    data: CL_PARTICIPACION_SOCIAL,
  },
  "estructura-oracion-prepa": {
    titulo: "Estructura de la Oración",
    descripcion: "Repasa todos los conceptos de estructura de la oración",
    materia: "espanol",
    nivel: "preparatoria",
    data: ESTRUCTURA_ORACION_PREPA,
  },
  "estructura-oracion-uni": {
    titulo: "Estructura de la Oración",
    descripcion: "",
    materia: "espanol",
    nivel: "universidad",
    data: ESTRUCTURA_ORACION_UNI,
  },
  "ortografia-grafias": {
    titulo: "Ortografía y Grafías",
    descripcion: "",
    materia: "espanol",
    nivel: "universidad",
    data: ORTOGRAFIA_GRAFIAS,
  },
  "sinonimos-antonimos-analogias": {
    titulo: "Sinónimos, Antónimos y Analogías",
    descripcion: "",
    materia: "espanol",
    nivel: "universidad",
    data: SINONIMOS,
  },
  "sintaxis-espanol": {
    titulo: "Sintaxis en Español",
    descripcion: "",
    materia: "espanol",
    nivel: "universidad",
    data: SINTAXIS_ESPANOL,
  },
  "sujeto-predicado-exani-i": {
    titulo: "Estructura de la Oración: Sujeto y Predicado",
    descripcion: "Aprende a identificar el sujeto y predicado en las oraciones",
    materia: "espanol",
    nivel: "preparatoria",
    data: SUJETO_PREDICADO,
  },

  // ── matematicas ──
  "algebra-prepa": {
    titulo: "Álgebra - Preparatoria",
    descripcion: "",
    materia: "matematicas",
    nivel: "preparatoria",
    data: ALGEBRA_PREPA,
  },
  "divisibilidad": {
    titulo: "Primos, M.C.D. y M.C.M.",
    descripcion: "Domina los conceptos fundamentales de divisibilidad",
    materia: "matematicas",
    nivel: "preparatoria",
    data: DIVISIBILIDAD,
  },
  "divisibilidad-mcd-mcm": {
    titulo: "Divisibilidad, M.C.D. y M.C.M. (Avanzado)",
    descripcion: "Ejercicios más complejos",
    materia: "matematicas",
    nivel: "preparatoria",
    data: DIVISIBILIDAD_MCD,
  },
  "numeros-enteros": {
    titulo: "Números Enteros",
    descripcion: "Repasa todos los conceptos de números enteros",
    materia: "matematicas",
    nivel: "preparatoria",
    data: NUMEROS_ENTEROS,
  },
  "primos-mcd-mcm": {
    titulo: "Números Primos, M.C.D. y M.C.M.",
    descripcion: "Ejercicios específicos de números primos",
    materia: "matematicas",
    nivel: "preparatoria",
    data: PRIMOS_MCD_MCM,
  },
  "producto-enteros": {
    titulo: "Producto de Enteros",
    descripcion: "Domina la multiplicación de números enteros",
    materia: "matematicas",
    nivel: "preparatoria",
    data: PRODUCTO_ENTEROS,
  },
  "racionales-prepa": {
    titulo: "Números Racionales - Preparatoria",
    descripcion: "Suma, resta, multiplicación y división de fracciones",
    materia: "matematicas",
    nivel: "preparatoria",
    data: RACIONALES_PREPA,
  },
  "suma-enteros": {
    titulo: "Suma de Enteros",
    descripcion: "Aprende a sumar números positivos y negativos",
    materia: "matematicas",
    nivel: "preparatoria",
    data: SUMA_ENTEROS,
  },
  "uni-numeros-racionales": {
    titulo: "Números Racionales (Universidad)",
    descripcion: "",
    materia: "matematicas",
    nivel: "universidad",
    data: UNI_RACIONALES,
  },

  // ── simuladores ──
  "simulador-exani-i": {
    titulo: "Simulador EXANI-I",
    descripcion: "Simulador oficial tipo EXANI-I: Pensamiento Científico, Comprensión Lectora, Redacción Indirecta y Pensamiento Matemático",
    materia: null,
    nivel: "preparatoria",
    data: SIMULADOR_EXANI_I,
  },
  "simulador-exani-i-2": {
    titulo: "Simulador EXANI-I #2",
    descripcion: "Segundo simulador tipo EXANI-I con reactivos distintos: Pensamiento Científico, Comprensión Lectora, Redacción Indirecta y Pensamiento Matemático",
    materia: null,
    nivel: "preparatoria",
    data: SIMULADOR_EXANI_I_2,
  },
  "simulador-exani-i-3": {
    titulo: "Simulador EXANI-I #3",
    descripcion: "Tercer simulador tipo EXANI-I con SVGs en Pensamiento Matemático y Pensamiento Científico: cadenas tróficas, neuroplasticidad, sistemas de ecuaciones, estadística y más.",
    materia: null,
    nivel: "preparatoria",
    data: SIMULADOR_EXANI_I_3,
  },
  "simulador-prepa-1": {
    titulo: "Simulador de Examen 1",
    descripcion: "",
    materia: null,
    nivel: "preparatoria",
    data: SIMULADOR_PREPA_1,
  },
  "simulador-prepa-2": {
    titulo: "Simulador de Examen 2",
    descripcion: "",
    materia: null,
    nivel: "preparatoria",
    data: SIMULADOR_PREPA_2,
  },
};

// ─── Identidad estable por pregunta ─────────────────────────────────────────
// El estándar pide que cada pregunta tenga un `id` propio, y ~3 500 de ellas no
// lo traían. Se asigna aquí, al cargar el índice, en vez de escribirlo en los
// archivos de banco: el valor sería el mismo —la posición dentro del archivo—
// pero editando a mano miles de literales se gana churn y riesgo sin ganar
// información. El `id` declarado siempre manda.
//
// Al ser posicional, insertar una pregunta en medio recorre los ids siguientes.
// Mientras los bancos crezcan por el final no ocurre; si algún día hace falta
// insertar en medio, se declara el `id` a mano en esa pregunta.
for (const entrada of Object.values(CUESTIONARIOS_INDEX)) {
  const preguntas = entrada.data?.questions;
  if (!Array.isArray(preguntas)) continue;
  preguntas.forEach((q, i) => {
    if (q.id === undefined) q.id = i + 1;
  });
}

// ─── Búsqueda ───────────────────────────────────────────────────────────────
// Antes recorría el árbol; ahora es un acceso directo. Devuelve la entrada con
// su `id` incorporado, que es la forma que esperan Cuestionario y SelectorBloque.
export function buscarCuestionario(id) {
  const entrada = CUESTIONARIOS_INDEX[id];
  return entrada ? { id, ...entrada } : null;
}

export function obtenerTodosCuestionarios() {
  return Object.entries(CUESTIONARIOS_INDEX).map(([id, entrada]) => ({ id, ...entrada }));
}
