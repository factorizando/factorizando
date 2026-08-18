// Generador de La Cerca y el Pasto — perímetro y área sobre el mismo terreno.
//
// Las dos reglas que sostienen el juego entero:
//
// 1. **Nunca se genera un terreno donde el perímetro coincida con el área**
//    (3 × 6 da 18 y 18; 4 × 4 da 16 y 16). Si coincidieran, un alumno que
//    confunde las dos medidas acertaría, y el taller le confirmaría el error
//    justo en el ejercicio hecho para detectarlo.
//
// 2. La mitad de la ronda son **pares**: el mismo terreno preguntado dos veces
//    seguidas, primero por la cerca y luego por el pasto (o al revés). Ese
//    choque es el juego. Preguntadas en terrenos distintos, las dos medidas se
//    quedan siendo "números que salen de la figura"; preguntadas sobre el
//    mismo dibujo, el niño tiene que ver que una va por la orilla y la otra
//    por dentro.
import { entero, elegir } from "../azar.js";

const otroPedido = (p) => (p === "cerca" ? "pasto" : "cerca");

export function generarTerreno(rango) {
  const [min, max] = rango.cercaPasto.lados;
  let ancho, alto;
  do {
    ancho = entero(min, max);
    alto = entero(min, max);
  } while (2 * (ancho + alto) === ancho * alto);
  return { ancho, alto };
}

export function ejercicioCercaPasto(rango, terreno, pedido, mismoTerreno = false) {
  const cfg = rango.cercaPasto;
  const { ancho, alto } = terreno;
  const perimetro = 2 * (ancho + alto);
  const area = ancho * alto;

  return {
    juego: "cerca-pasto",
    pedido,
    ancho,
    alto,
    perimetro,
    area,
    respuesta: pedido === "cerca" ? perimetro : area,
    // La otra medida viaja en el ejercicio para poder reconocer la confusión
    // en el momento: si contesta esto, no falló por cálculo sino por concepto.
    otraMagnitud: pedido === "cerca" ? area : perimetro,
    mismoTerreno,
    unidades: cfg.unidades,
    atajo: cfg.atajo,
    manipulacionObligatoria: cfg.manipulacionObligatoria,
    contadorEnVivo: cfg.contadorEnVivo,
    categoria: pedido === "cerca" ? "perimetro-rectangulo" : "area-rectangulo",
    clave: `${ancho}x${alto}:${pedido}`,
  };
}

export function generarRondaCercaPasto(rango, cantidad) {
  const lista = [];
  const usados = new Set();

  while (lista.length < cantidad) {
    let terreno = generarTerreno(rango);
    for (let i = 0; i < 20 && usados.has(`${terreno.ancho}x${terreno.alto}`); i++) {
      terreno = generarTerreno(rango);
    }
    usados.add(`${terreno.ancho}x${terreno.alto}`);

    const pedido = elegir(["cerca", "pasto"]);
    lista.push(ejercicioCercaPasto(rango, terreno, pedido));

    if (lista.length < cantidad && Math.random() < rango.cercaPasto.proporcionPar) {
      lista.push(ejercicioCercaPasto(rango, terreno, otroPedido(pedido), true));
    }
  }
  return lista.slice(0, cantidad);
}
