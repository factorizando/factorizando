// Generador de La Misma Cerca, Distinto Terreno.
//
// El juego que rompe la creencia más pegajosa de todo el tema: *si la cerca es
// la misma, el terreno es el mismo*. Se le dan 12 tramos de cerca y arma con
// ellos dos o tres terrenos distintos; cada uno se anota en su libreta con el
// pasto que le cupo. Al final del reto elige cuál rindió más y ahí se ve que
// con la misma cerca cabe distinto pasto, y que el que más rinde es el más
// parecido a un cuadrado.
//
// Por eso la partida no es una lista plana de ejercicios sueltos: son retos de
// `formas + 1` pasos, y el último paso solo significa algo después de los
// anteriores.
import { barajar } from "../azar.js";

// Todos los rectángulos de lados enteros con ese perímetro que caben en la
// parcela, **de menor a mayor área**: el último es el que más rinde.
//
// Se recorre hasta la mitad del semiperímetro porque 2 × 4 y 4 × 2 son el
// mismo terreno acostado, y pedirlos como si fueran distintos convertiría el
// descubrimiento en un trámite.
export function formasDe(perimetro, max) {
  const semi = perimetro / 2;
  const formas = [];
  for (let corto = 1; corto <= Math.floor(semi / 2); corto++) {
    const largo = semi - corto;
    if (corto <= max && largo <= max) formas.push({ corto, largo, area: corto * largo });
  }
  return formas;
}

export function generarRondaMismaCerca(rango) {
  const cfg = rango.mismaCerca;
  return barajar(cfg.perimetros).slice(0, cfg.retos).flatMap((perimetro) => {
    const formas = formasDe(perimetro, cfg.max);
    const pedidas = Math.min(cfg.formas, formas.length);
    const comun = { juego: "misma-cerca", perimetro, max: cfg.max, unidades: cfg.unidades, formasPedidas: pedidas };

    const armar = Array.from({ length: pedidas }, (_, i) => ({
      ...comun,
      tipo: "armar",
      forma: i,
      // La misma categoría que en el otro juego, a propósito: es la misma
      // habilidad y al maestro le sirve verla sumada.
      categoria: "area-rectangulo",
      clave: `armar:${perimetro}:${i}`,
    }));

    return [...armar, {
      ...comun,
      tipo: "maximo",
      // La mejor forma posible con esa cerca. No es necesariamente una de las
      // que armó: sirve para cerrar el reto contándole cuál era el máximo.
      mejor: formas[formas.length - 1],
      categoria: "area-mismo-perimetro",
      clave: `maximo:${perimetro}`,
    }];
  });
}
