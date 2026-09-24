// Los dos bloques de edad de los talleres de Descomponer números, y todo lo
// que cambia entre uno y otro.
//
// Este archivo es la **única perilla** de dificultad de los tres talleres
// (sumar, multiplicar y dividir descomponiendo): los generadores leen de aquí
// y no traen ningún número propio, así que subir el techo de los factores o de
// los divisores no obliga a tocar la interfaz.
//
// El corte 8-9 / 10-12 es el mismo que usa el taller del Producto, y no es de
// edad sino de representación: en el bloque de abajo la cantidad se dibuja y
// se cuenta; en el de arriba solo hay números. Un alumno de nueve que todavía
// necesite contar trabaja mejor en el bloque de abajo, y el rango lo elige el
// maestro.

export const RANGOS = [
  {
    id: "8-9",
    nombre: "8 y 9 años",
    detalle: "Números chicos y dibujos para contar.",
    suma: {
      // Completar: (a + b) + c = d. Se apunta a la decena con dibujos.
      completar: { objetivos: [10, 20], dibujar: true },
      // Romper: a + b = (a + m) + n, con m para llegar a la decena.
      romper: { dosCifras: false },
    },
    producto: {
      // Factores de una cifra, con el arreglo dibujado.
      maxFactor: 9,
      dosCifras: false,
      dibujar: true,
    },
    division: {
      divisor: [2, 9],
      cociente: [2, 9],
      proporcionExacta: 0.3,
      dibujar: true,
    },
  },
  {
    id: "10-12",
    nombre: "10 a 12 años",
    detalle: "Solo con números, hasta dos cifras.",
    suma: {
      completar: { objetivos: [20, 30, 40, 50, 60, 80, 100], dibujar: false },
      romper: { dosCifras: true },
    },
    producto: {
      maxFactor: 99,
      dosCifras: true,
      dibujar: false,
    },
    division: {
      divisor: [11, 19],
      cociente: [4, 20],
      proporcionExacta: 0.3,
      dibujar: false,
    },
  },
];

export const RANGOS_POR_ID = Object.fromEntries(RANGOS.map((r) => [r.id, r]));

// Cuántos ejercicios trae una partida. Diez rondas caben en el tramo de
// atención y dejan tiempo para jugar dos veces en una clase.
export const EJERCICIOS_POR_PARTIDA = 10;
