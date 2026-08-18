// Generador de La Vuelta al Patio — el perímetro como recorrido.
//
// Es el juego más elemental del taller y el que va primero: antes de que el
// perímetro sea una suma de lados, es la vuelta completa a un patio. El niño
// camina la orilla y cuenta pasos.
//
// Dos tipos de ejercicio, y el segundo es el que enseña:
//
//   vuelta  camina toda la orilla y dice cuántos pasos dio.
//   atajo   solo puede caminar dos lados; los otros dos están cerrados y tiene
//           que **predecir** el total. Ahí es donde (largo + ancho) × 2 deja de
//           ser una fórmula y se vuelve la única manera de contestar.
//
// Regla del generador: **nunca un patio cuadrado**. Con los cuatro lados
// iguales, "los lados se repiten de dos en dos" se confunde con "todos los
// lados miden lo mismo", que es otra cosa y estorba justo en el descubrimiento.
import { entero } from "../azar.js";

// Los primeros ejercicios siempre son de vuelta completa: el atajo solo
// significa algo después de haber sentido la repetición caminando.
const VUELTAS_ANTES_DEL_ATAJO = 3;

export function generarPatio(rango) {
  const [min, max] = rango.vueltaPatio.lados;
  let ancho, alto;
  do {
    ancho = entero(min, max);
    alto = entero(min, max);
  } while (ancho === alto);
  return { ancho, alto };
}

export function ejercicioVuelta(rango, patio, tipo) {
  const cfg = rango.vueltaPatio;
  const { ancho, alto } = patio;
  return {
    juego: "vuelta-patio",
    tipo,
    ancho,
    alto,
    perimetro: 2 * (ancho + alto),
    // En el atajo se caminan dos lados adyacentes: uno largo y uno corto, que
    // son justo los dos que hacen falta para saberlo todo.
    ladosOcultos: tipo === "atajo" ? ["abajo", "der"] : [],
    caminarObligatorio: cfg.caminarObligatorio,
    contadorEnVivo: cfg.contadorEnVivo,
    unidades: cfg.unidades,
    categoria: tipo === "atajo" ? "perimetro-atajo" : "perimetro-recorrido",
    clave: `${ancho}x${alto}:${tipo}`,
  };
}

export function generarRondaVuelta(rango, cantidad) {
  const lista = [];
  const usados = new Set();
  while (lista.length < cantidad) {
    let patio = generarPatio(rango);
    for (let i = 0; i < 20 && usados.has(`${patio.ancho}x${patio.alto}`); i++) {
      patio = generarPatio(rango);
    }
    usados.add(`${patio.ancho}x${patio.alto}`);
    const tipo = lista.length < VUELTAS_ANTES_DEL_ATAJO
      ? "vuelta"
      : Math.random() < rango.vueltaPatio.proporcionAtajo ? "atajo" : "vuelta";
    lista.push(ejercicioVuelta(rango, patio, tipo));
  }
  return lista;
}
