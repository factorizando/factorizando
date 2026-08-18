// Los dos bloques de edad del taller del Terreno.
//
// Este archivo es la única perilla de dificultad. Los generadores leen de aquí
// y los componentes no traen ningún número propio.
//
// El corte 7-8 / 9-10 es el mismo del resto de los talleres de juegos: antes
// de los 9 la medida se **cuenta con el dedo** (hay que pintar la orilla tramo
// por tramo y el suelo cuadro por cuadro antes de poder contestar) y después
// se **calcula** (el terreno viene rotulado con sus lados y la manipulación
// queda como apoyo opcional). El rango lo elige el maestro.

export const RANGOS = [
  {
    id: "7-8",
    nombre: "7 y 8 años",
    detalle: "Terrenos chicos. Se pinta la cerca y el pasto con el dedo.",
    cercaPasto: {
      lados: [2, 6],
      // Pintar es requisito para desbloquear el teclado: a esta edad el número
      // tiene que salir de haber recorrido la figura, no de una fórmula.
      manipulacionObligatoria: true,
      contadorEnVivo: true,
      unidades: false,        // "tramos" y "cuadros", todavía no metros
      atajo: false,           // no se muestra (largo + ancho) × 2
      // Qué tan seguido se repite el mismo terreno con la otra pregunta. Es el
      // choque que separa las dos medidas, así que pesa la mitad de la ronda.
      proporcionPar: 0.5,
    },
    mismaCerca: {
      perimetros: [8, 10, 12, 14],
      max: 8,                 // lado de la parcela donde se arma
      formas: 2,              // cuántos terrenos distintos se piden por reto
      retos: 3,
      unidades: false,
    },
    vueltaPatio: {
      lados: [2, 6],
      // A los chicos no se les deja contestar sin haber caminado: el número
      // tiene que salir del recorrido.
      caminarObligatorio: true,
      contadorEnVivo: true,
      unidades: false,
      // Qué parte de la ronda son de predecir la vuelta habiendo caminado solo
      // dos lados. A los chicos se les deja caminarla completa casi siempre:
      // el atajo tiene que salir de haber sentido la repetición, no de una
      // regla que se les dice.
      proporcionAtajo: 0.4,
    },
    // Las figuras compuestas piden ya tener firme el área del rectángulo.
    mosaiquero: null,
  },
  {
    id: "9-10",
    nombre: "9 y 10 años",
    detalle: "Terrenos grandes, medidos en metros. La fórmula sale al final.",
    cercaPasto: {
      lados: [3, 12],
      manipulacionObligatoria: false,
      contadorEnVivo: false,
      unidades: true,         // metros y metros cuadrados
      atajo: true,            // aparece (largo + ancho) × 2 junto a la suma
      proporcionPar: 0.5,
    },
    mismaCerca: {
      perimetros: [12, 14, 16, 18, 20, 22, 24],
      max: 12,
      formas: 3,
      retos: 3,
      unidades: true,
    },
    vueltaPatio: {
      lados: [3, 12],
      caminarObligatorio: false,
      contadorEnVivo: false,
      unidades: true,
      proporcionAtajo: 0.6,
    },
    mosaiquero: {
      caja: [3, 8],           // la caja que envuelve la figura
      unidades: true,
    },
  },
];

export const RANGOS_POR_ID = Object.fromEntries(RANGOS.map((r) => [r.id, r]));

// Ejercicios por partida de La Cerca y el Pasto. La Misma Cerca no usa este
// número: su partida son `retos × (formas + 1)`, porque el remate de cada reto
// solo tiene sentido después de haber armado sus terrenos.
export const EJERCICIOS_POR_PARTIDA = 10;
