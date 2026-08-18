// Generador de La Pizzería — división con residuo.
//
// La regla que ordena este archivo: **el dividendo se construye multiplicando**,
// nunca se sortea a ver si sale exacto. Una división marcada como exacta que
// deje residuo enseñaría exactamente lo contrario de lo que se quiere.
//
//     total = cajas × porCaja + sobran        (0 ≤ sobran < porCaja)
//
// Se mezclan divisiones exactas a propósito (`proporcionExacta`): si siempre
// sobrara algo, el alumno aprendería que en la pizzería siempre sobra, que es
// otra manera de no entender el residuo.
import { entero } from "./azar.js";

// Las cuatro categorías son las que ve el maestro en el panel. Están partidas
// por paso porque fallar el cociente y fallar el residuo son dos problemas
// distintos, y el más común de todos es contestar "nada" cuando la división
// es exacta pero el niño espera que siempre sobre.
export const CATEGORIAS_PIZZERIA = {
  cociente: { exacta: "division-cociente-exacta", residuo: "division-cociente-residuo" },
  sobra: { exacta: "division-sobra-cero", residuo: "division-sobra" },
};

export function generarPizzeria(rango) {
  const cfg = rango.pizzeria;
  const exacta = Math.random() < cfg.proporcionExacta;
  const porCaja = entero(cfg.porCaja[0], cfg.porCaja[1]);

  // Se reservan las rebanadas del sobrante antes de decidir cuántas cajas
  // caben, para que el total nunca se pase del techo del bloque de edad.
  const sobran = exacta ? 0 : entero(1, porCaja - 1);
  const techo = Math.floor((cfg.totalMax - sobran) / porCaja);
  // Al menos dos cajas: con una sola, "cuántas cajas se llenan" se contesta
  // sin dividir.
  const cajas = entero(2, Math.max(2, Math.min(cfg.cajasMax, techo)));
  const total = cajas * porCaja + sobran;

  return {
    juego: "pizzeria",
    total,
    porCaja,
    cajas,
    sobran,
    exacta,
    dibujar: cfg.dibujar,
    categorias: {
      cajas: exacta ? CATEGORIAS_PIZZERIA.cociente.exacta : CATEGORIAS_PIZZERIA.cociente.residuo,
      sobra: exacta ? CATEGORIAS_PIZZERIA.sobra.exacta : CATEGORIAS_PIZZERIA.sobra.residuo,
    },
    clave: `${total}/${porCaja}`,
  };
}
