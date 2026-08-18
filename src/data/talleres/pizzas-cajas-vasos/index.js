// Taller de Pizzas, Cajas y Vasos — capa de contenido.
//
// Aquí vive todo lo que se puede ajustar sin abrir un componente: los rangos
// de dificultad (rangos.js) y los generadores de cada juego. La interfaz solo
// pide `generarPartida(juego, rango)` y dibuja lo que le devuelvan.
import { RANGOS, RANGOS_POR_ID, EJERCICIOS_POR_PARTIDA } from "./rangos.js";
import { serie } from "../azar.js";
import { generarPizzeria } from "./pizzeria.js";
import { generarFabrica, generarHuerto } from "./fabrica.js";
import { generarVaso } from "./vasos.js";

export { RANGOS, RANGOS_POR_ID, EJERCICIOS_POR_PARTIDA };
export { generarPizzeria, generarFabrica, generarHuerto, generarVaso };

// Los tres juegos de la pantalla de inicio. `modos` son las variantes de
// adentro; el huerto es un modo de la fábrica y no una cuarta tarjeta, porque
// es la misma multiplicación vista de otra manera.
export const JUEGOS = [
  {
    id: "pizzeria",
    nombre: "La Pizzería",
    icono: "🍕",
    resumen: "Cuántas cajas se llenan y cuántas rebanadas sobran.",
    operacion: "División con residuo",
  },
  {
    id: "fabrica",
    nombre: "La Fábrica de Cajas",
    icono: "🏗️",
    resumen: "Cajas iguales en la banda: cuántas galletas hay en total.",
    operacion: "Multiplicación",
    modos: [
      { id: "fabrica", nombre: "La banda", desc: "Grupos iguales." },
      { id: "huerto", nombre: "El Huerto", desc: "Formar el rectángulo y contar los cuadritos.", soloRangos: ["9-10"] },
    ],
  },
  {
    id: "vasos",
    nombre: "Los Vasos Medidores",
    icono: "🥤",
    resumen: "Llenar hasta la marca, comparar y encontrar las que valen igual.",
    operacion: "Fracciones",
    modos: [
      { id: "llenar", nombre: "Llenar", desc: "Sube el líquido hasta la fracción que se pide." },
      { id: "comparar", nombre: "¿Cuál tiene más?", desc: "Dos vasos, una decisión." },
      { id: "equivalencias", nombre: "Valen lo mismo", desc: "Repartos distintos, misma cantidad.", soloRangos: ["9-10"] },
      { id: "mezcla", nombre: "Mezclado", desc: "Los tres modos revueltos." },
    ],
  },
];

export const JUEGOS_POR_ID = Object.fromEntries(JUEGOS.map((j) => [j.id, j]));

// Cómo se le nombra al maestro cada tipo de ejercicio en el panel. Es el dato
// que de verdad usa para planear la clase siguiente, así que la etiqueta está
// escrita para leerse sola, sin tener que abrir el código.
export const CATEGORIAS = {
  "division-cociente-exacta": "¿Cuántas cajas? · división exacta",
  "division-cociente-residuo": "¿Cuántas cajas? · cuando sobra algo",
  "division-sobra": "¿Cuántas sobran? · residuo distinto de cero",
  "division-sobra-cero": "¿Cuántas sobran? · cuando no sobra nada",
  "multiplicacion-tabla-baja": "Multiplicar con factores del 2 al 5",
  "multiplicacion-tabla-alta": "Multiplicar con factores del 6 al 12",
  "multiplicacion-dos-cifras": "Multiplicar por un número de dos cifras",
  "area-rectangulo": "El huerto: los cuadritos del rectángulo",
  "fraccion-representar": "Llenar el vaso hasta la fracción pedida",
  "fraccion-comparar-mismo-numerador": "Comparar 1/3 y 1/2 · mismo numerador",
  "fraccion-comparar-mismo-denominador": "Comparar 2/5 y 4/5 · mismo denominador",
  "fraccion-comparar-sin-relacion": "Comparar fracciones sin nada en común",
  "fraccion-equivalente": "Fracciones equivalentes (2/4 = 1/2)",
};

export function etiquetaCategoria(id) {
  return CATEGORIAS[id] || id;
}

// Una partida completa. `modo` solo lo usan los juegos que tienen variantes.
export function generarPartida(juegoId, rangoId, { modo, cantidad = EJERCICIOS_POR_PARTIDA } = {}) {
  const rango = RANGOS_POR_ID[rangoId];
  if (!rango) throw new Error(`rango desconocido: ${rangoId}`);

  const clave = (e) => e.clave;
  if (juegoId === "pizzeria") return serie(() => generarPizzeria(rango), cantidad, { clave });
  if (juegoId === "fabrica") return serie(() => generarFabrica(rango), cantidad, { clave });
  if (juegoId === "huerto") return serie(() => generarHuerto(rango), cantidad, { clave });
  if (juegoId === "vasos") return serie(() => generarVaso(rango, modo), cantidad, { clave });
  throw new Error(`juego desconocido: ${juegoId}`);
}

// Red de seguridad en desarrollo: una categoría sin etiqueta sale en el panel
// del maestro como un id críptico. Mejor gritar aquí.
if (import.meta.env?.DEV) {
  const vistas = new Set();
  RANGOS.forEach((r) => {
    for (let i = 0; i < 300; i++) {
      const e = generarPizzeria(r);
      vistas.add(e.categorias.cajas);
      vistas.add(e.categorias.sobra);
      vistas.add(generarFabrica(r).categoria);
      vistas.add(generarVaso(r, "mezcla").categoria);
      if (r.huerto) vistas.add(generarHuerto(r).categoria);
    }
  });
  [...vistas].forEach((c) => {
    if (!CATEGORIAS[c]) console.warn(`[pizzas-cajas-vasos] categoría sin etiqueta: «${c}»`);
  });
}
