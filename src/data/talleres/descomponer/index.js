// Descomponer números — capa de contenido compartida por los tres talleres.
//
// Cada operación es un taller independiente en el catálogo, pero comparten
// motor: los generadores (suma.js, producto.js, division.js), los dos bloques
// de edad (rangos.js) y las categorías que alimentan el panel del maestro.
// Este archivo es el único punto de entrada que necesita la interfaz.
import { RANGOS, RANGOS_POR_ID, EJERCICIOS_POR_PARTIDA } from "./rangos.js";
import { serie } from "../azar.js";
import { generarSuma } from "./suma.js";
import { generarProducto } from "./producto.js";
import { generarDivision } from "./division.js";

export { RANGOS, RANGOS_POR_ID, EJERCICIOS_POR_PARTIDA };
export { generarSuma, generarProducto, generarDivision };

// Metadatos de cada taller. `idTaller` es la ruta /regularizacion/<id> y la
// llave con que se guarda su detalle local; `color` no vive aquí sino en el
// estilo de los componentes.
export const OPERACIONES = {
  suma: {
    id: "sumar-descomponiendo",
    nombre: "Sumar descomponiendo",
    icono: "➕",
    resumen: "Completa hasta un número y rompe un sumando para pasar por la decena.",
    operacion: "Suma y complementos",
  },
  producto: {
    id: "multiplicar-descomponiendo",
    nombre: "Multiplicar descomponiendo",
    icono: "✖️",
    resumen: "Rompe un factor, multiplica por partes y suma: la propiedad distributiva.",
    operacion: "Multiplicación",
  },
  division: {
    id: "dividir-descomponiendo",
    nombre: "Dividir descomponiendo",
    icono: "➗",
    resumen: "Reconstruye el término que falta en a = b × q + r.",
    operacion: "División y residuo",
  },
};

export const OPERACIONES_POR_TALLER = Object.fromEntries(
  Object.entries(OPERACIONES).map(([op, m]) => [m.id, op])
);

// Los modos de cada taller. Los que no tienen variantes devuelven [] y el
// taller entra derecho a su juego, sin pantalla intermedia.
export const MODOS = {
  suma: [
    { id: "completar", nombre: "Completar el número", desc: "¿Cuánto falta para llegar a la meta?" },
    { id: "romper", nombre: "Romper para sumar", desc: "Pasa por la decena y suma por partes." },
    { id: "mezcla", nombre: "Mezclado", desc: "Las dos formas revueltas." },
  ],
  producto: [],
  division: [],
};

export const MODOS_POR_ID = Object.fromEntries(
  Object.entries(MODOS).map(([op, lista]) => [op, Object.fromEntries(lista.map((m) => [m.id, m]))])
);

// Cómo se le nombra al maestro cada tipo de ejercicio. Es el dato con el que
// planea la clase siguiente, así que la etiqueta se lee sola.
export const CATEGORIAS = {
  "suma-completar-a10": "Completar a 10",
  "suma-completar-decena": "Completar a 20, 30… 100",
  "suma-romper-parte": "Sumar: la parte que pasa la decena",
  "suma-romper-total": "Sumar: el total por partes",
  "producto-partir": "Multiplicar: partir el factor",
  "producto-parcial": "Multiplicar: un producto parcial",
  "producto-total": "Multiplicar: el total distribuido",
  "division-falta-total": "Dividir: falta el total",
  "division-faltan-grupos": "Dividir: faltan los grupos",
  "division-falta-cociente": "Dividir: falta el cociente",
  "division-falta-residuo": "Dividir: falta el residuo",
  "division-residuo-cero": "Dividir: cuando no sobra nada",
};

export function etiquetaCategoria(id) {
  return CATEGORIAS[id] || id;
}

export function nombreActividad(operacion, modo) {
  if (operacion === "suma") {
    return modo === "romper"
      ? "Sumar descomponiendo · romper para sumar"
      : modo === "mezcla"
        ? "Sumar descomponiendo · mezclado"
        : "Sumar descomponiendo · completar";
  }
  return OPERACIONES[operacion]?.nombre || operacion;
}

// Una partida completa. `modo` solo lo usa el taller de suma.
export function generarPartida(operacion, rangoId, { modo, cantidad = EJERCICIOS_POR_PARTIDA } = {}) {
  const rango = RANGOS_POR_ID[rangoId];
  if (!rango) throw new Error(`rango desconocido: ${rangoId}`);

  const generar = operacion === "suma"
    ? () => generarSuma(rango, modo)
    : operacion === "producto"
      ? () => generarProducto(rango)
      : operacion === "division"
        ? () => generarDivision(rango)
        : null;

  if (!generar) throw new Error(`operación desconocida: ${operacion}`);
  return serie(generar, cantidad, { clave: (e) => e.clave });
}

// Red de seguridad en desarrollo: una categoría sin etiqueta sale en el panel
// del maestro como un id críptico. Mejor gritar aquí.
if (import.meta.env?.DEV) {
  const vistas = new Set();
  RANGOS.forEach((r) => {
    for (let i = 0; i < 300; i++) {
      [...generarSuma(r, "mezcla").pasos, ...generarProducto(r).pasos, ...generarDivision(r).pasos]
        .forEach((p) => vistas.add(p.categoria));
    }
  });
  [...vistas].forEach((c) => {
    if (!CATEGORIAS[c]) console.warn(`[descomponer] categoría sin etiqueta: «${c}»`);
  });
}
