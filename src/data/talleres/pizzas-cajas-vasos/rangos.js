// Los dos bloques de edad del taller, y todo lo que cambia entre uno y otro.
//
// Este archivo es el único lugar donde se ajusta la dificultad. Los juegos
// leen de aquí y no traen ningún número propio, así que subirle el techo a
// los divisores o agregar un denominador no obliga a tocar la interfaz.
//
// El corte 7-8 / 9-10 no es de edad sino de representación: antes de los 9 la
// cantidad se cuenta (las rebanadas y las galletas se dibujan una por una) y
// después se calcula (solo el número). Un alumno de 9 que todavía necesita
// contar trabaja mejor en el bloque de abajo; el rango lo elige el maestro.

export const RANGOS = [
  {
    id: "7-8",
    nombre: "7 y 8 años",
    detalle: "Con dibujos para contar. Números chicos.",
    pizzeria: {
      // Divisor = rebanadas por caja. Con 2 a 5 la caja se llena rápido y el
      // sobrante se ve de un vistazo.
      porCaja: [2, 5],
      cajasMax: 6,
      totalMax: 29,
      proporcionExacta: 0.3,
      dibujar: true,
    },
    fabrica: {
      factores: [2, 5],
      cajasMax: 5,
      dibujarContenido: true,
      dosCifras: false,
    },
    // El huerto pide coordinar dos dimensiones a la vez; a esta edad todavía
    // se trabaja el grupo igual, no el arreglo rectangular.
    huerto: null,
    vasos: {
      denominadores: [2, 3, 4],
      modos: ["llenar", "comparar"],
    },
  },
  {
    id: "9-10",
    nombre: "9 y 10 años",
    detalle: "Solo con números. Tablas hasta el 12.",
    pizzeria: {
      porCaja: [2, 12],
      cajasMax: 14,
      totalMax: 150,
      proporcionExacta: 0.3,
      dibujar: false,
    },
    fabrica: {
      factores: [2, 12],
      cajasMax: 12,
      dibujarContenido: false,
      // Un factor de dos cifras cada cuatro rondas: lo suficiente para que
      // aparezca sin que la ronda se vuelva una prueba de multiplicación
      // escrita.
      dosCifras: true,
      proporcionDosCifras: 0.25,
      rangoDosCifras: [11, 25],
      cajasDosCifrasMax: 9,
    },
    huerto: { max: 10 },
    vasos: {
      denominadores: [2, 3, 4, 5, 6, 8, 10],
      modos: ["llenar", "comparar", "equivalencias"],
    },
  },
];

export const RANGOS_POR_ID = Object.fromEntries(RANGOS.map((r) => [r.id, r]));

// Cuántos ejercicios trae una partida. Corto a propósito: diez rondas caben
// en el tramo de atención de un niño de 7 años y dejan tiempo de sobra para
// jugar dos veces en una clase.
export const EJERCICIOS_POR_PARTIDA = 10;
