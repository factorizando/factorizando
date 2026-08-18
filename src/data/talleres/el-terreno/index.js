// Taller del Terreno — capa de contenido.
//
// Dos juegos para introducir perímetro y área. Lo que los ordena: perímetro y
// área son la misma figura, y el niño no ve por qué son dos números distintos
// mientras los dos sean "cosas que salen de la figura". Aquí son **dos
// acciones distintas sobre el mismo terreno** —cercar la orilla y cubrir el
// suelo— con dos unidades que se ven distintas: tramos de cerca y cuadros de
// pasto.
import { serie } from "../azar.js";
import { RANGOS, RANGOS_POR_ID, EJERCICIOS_POR_PARTIDA } from "./rangos.js";
import { generarRondaCercaPasto, ejercicioCercaPasto, generarTerreno } from "./cerca-pasto.js";
import { generarRondaMismaCerca, formasDe } from "./misma-cerca.js";
import { generarRondaVuelta, generarPatio } from "./vuelta-patio.js";
import { generarMosaico } from "./mosaiquero.js";

export { RANGOS, RANGOS_POR_ID, EJERCICIOS_POR_PARTIDA };
export { generarRondaCercaPasto, ejercicioCercaPasto, generarTerreno, generarRondaMismaCerca, formasDe };
export { generarRondaVuelta, generarPatio, generarMosaico };

export const JUEGOS = [
  {
    id: "vuelta-patio",
    nombre: "La Vuelta al Patio",
    icono: "👟",
    resumen: "Camina la orilla contando pasos y descubre que los lados se repiten de dos en dos.",
    operacion: "Perímetro",
  },
  {
    id: "cerca-pasto",
    nombre: "La Cerca y el Pasto",
    icono: "🚧",
    resumen: "El mismo terreno pide dos cosas: cerca para la orilla y pasto para el suelo.",
    operacion: "Perímetro y área",
  },
  {
    id: "misma-cerca",
    nombre: "La misma cerca",
    icono: "📏",
    resumen: "Con los mismos tramos de cerca, arma terrenos distintos y mira en cuál cabe más pasto.",
    operacion: "Perímetro fijo, área que cambia",
  },
  {
    id: "mosaiquero",
    nombre: "El Mosaiquero",
    icono: "🧱",
    resumen: "El patio tiene una esquina mordida: hay que partirlo en dos rectángulos para cubrirlo.",
    operacion: "Área de figuras compuestas",
    // Partir una figura supone tener firme el área del rectángulo.
    soloRangos: ["9-10"],
  },
];

export const JUEGOS_POR_ID = Object.fromEntries(JUEGOS.map((j) => [j.id, j]));

// Cómo se le nombra al maestro cada tipo de ejercicio en el panel.
//
// `confusion-area-perimetro` es la que justifica el taller: no dice que falló,
// dice **por qué**. Se anota cuando la respuesta es exactamente la otra medida
// del mismo terreno, que no es un error de cálculo sino de concepto.
export const CATEGORIAS = {
  "perimetro-recorrido": "La vuelta completa: contar los pasos de la orilla",
  "perimetro-atajo": "Predecir la vuelta habiendo caminado solo dos lados",
  "perimetro-rectangulo": "¿Cuánta cerca? · perímetro del rectángulo",
  "area-rectangulo": "¿Cuánto pasto? · área del rectángulo",
  "confusion-area-perimetro": "Confunde las dos medidas: contesta una cuando se pide la otra",
  "area-mismo-perimetro": "Con la misma cerca, cuál terreno da más pasto",
  "area-figura-compuesta": "Área de una figura con una esquina mordida (partirla en dos)",
};

export function etiquetaCategoria(id) {
  return CATEGORIAS[id] || id;
}

export function generarPartida(juegoId, rangoId, { cantidad = EJERCICIOS_POR_PARTIDA } = {}) {
  const rango = RANGOS_POR_ID[rangoId];
  if (!rango) throw new Error(`rango desconocido: ${rangoId}`);
  if (juegoId === "vuelta-patio") return generarRondaVuelta(rango, cantidad);
  if (juegoId === "cerca-pasto") return generarRondaCercaPasto(rango, cantidad);
  if (juegoId === "misma-cerca") return generarRondaMismaCerca(rango);
  if (juegoId === "mosaiquero") {
    return serie(() => generarMosaico(rango), cantidad, { clave: (e) => e.clave });
  }
  throw new Error(`juego desconocido: ${juegoId}`);
}

// Red de seguridad en desarrollo: una categoría sin etiqueta sale en el panel
// del maestro como un id críptico.
if (import.meta.env?.DEV) {
  const vistas = new Set(["confusion-area-perimetro"]);
  RANGOS.forEach((r) => {
    generarRondaCercaPasto(r, 40).forEach((e) => vistas.add(e.categoria));
    generarRondaMismaCerca(r).forEach((e) => vistas.add(e.categoria));
    generarRondaVuelta(r, 40).forEach((e) => vistas.add(e.categoria));
    if (r.mosaiquero) vistas.add(generarMosaico(r).categoria);
  });
  [...vistas].forEach((c) => {
    if (!CATEGORIAS[c]) console.warn(`[el-terreno] categoría sin etiqueta: «${c}»`);
  });
}
