// Generador de «Multiplicar descomponiendo» — la propiedad distributiva.
//
//     a × b = a × m + a × n        con  m + n = b
//
// La parte "fácil" (m) la da el ejercicio y el alumno reconstruye lo demás:
// cuánto queda, cuánto vale cada parte y cuánto el total. En 8-9 `m` es 5 (o un
// reparto chico) y el arreglo se dibuja para contar; en 10-12 `m` es siempre la
// decena del factor de dos cifras, que es justo el atajo del cálculo mental.
//
// Igual que en el resto del taller, nada se sortea a ver si sale: `n = b − m`
// se calcula, y los productos parciales son a × m y a × n por construcción.
import { entero, elegir } from "../azar.js";

const CTX = [
  (a, b) => `El piso de la bodega mide ${a} por ${b} cuadros.`,
  (a, b) => `Una caja trae ${a} filas de ${b} piezas.`,
  (a, b) => `Hay ${a} charolas con ${b} panes cada una.`,
  (a, b) => `Para resolver ${a} × ${b} sin el algoritmo, rompe uno de los factores.`,
];

export const CATEGORIAS_PRODUCTO = {
  partir: "producto-partir",
  parcial: "producto-parcial",
  total: "producto-total",
};

export function generarProducto(rango) {
  const cfg = rango.producto;
  const ctx = elegir(CTX);
  let a, b, m, n, pasos;

  if (!cfg.dosCifras) {
    a = entero(2, cfg.maxFactor);
    b = entero(3, cfg.maxFactor);
    // 5 es la parte cómoda (mitad de una decena); con factores chicos, un
    // reparto cualquiera que deje las dos partes con al menos 1.
    m = b >= 6 ? 5 : entero(1, b - 1);
    n = b - m;
    pasos = [
      {
        id: "partir",
        pregunta: `${b} se parte en ${m} + ¿?`,
        respuesta: n,
        categoria: CATEGORIAS_PRODUCTO.partir,
      },
      {
        id: "total",
        pregunta: `¿Cuánto es ${a} × ${b}?`,
        respuesta: a * b,
        categoria: CATEGORIAS_PRODUCTO.total,
      },
    ];
  } else {
    a = entero(12, 99);
    do { b = entero(12, 99); } while (b % 10 === 0);
    m = Math.floor(b / 10) * 10;   // la decena: multiplicar por 10 es un corrimiento
    n = b - m;
    pasos = [
      {
        id: "partir",
        pregunta: `${b} se parte en ${m} + ¿?`,
        respuesta: n,
        categoria: CATEGORIAS_PRODUCTO.partir,
      },
      {
        id: "parcial-m",
        pregunta: `¿Cuánto es ${a} × ${m}?`,
        respuesta: a * m,
        categoria: CATEGORIAS_PRODUCTO.parcial,
      },
      {
        id: "parcial-n",
        pregunta: `¿Cuánto es ${a} × ${n}?`,
        respuesta: a * n,
        categoria: CATEGORIAS_PRODUCTO.parcial,
      },
      {
        id: "total",
        pregunta: `Suma las dos partes: ¿cuánto es ${a} × ${b}?`,
        respuesta: a * b,
        categoria: CATEGORIAS_PRODUCTO.total,
      },
    ];
  }

  const pm = a * m;
  const pn = a * n;
  const total = a * b;

  return {
    operacion: "producto",
    a, b, m, n, pm, pn, total,
    enunciado: `${ctx(a, b)} Vamos a romper ${b} en ${m} + ?.`,
    pasos,
    conclusion: {
      operacion: `${a} × ${b} = ${a} × ${m} + ${a} × ${n} = ${pm} + ${pn} = ${total}`,
      texto: `En vez de multiplicar ${a} × ${b} de un golpe, se parte ${b} en ${m} + ${n}. ` +
        `${a} × ${m} = ${pm} y ${a} × ${n} = ${pn}; al sumarlos vuelve a salir ${total}.`,
    },
    figura: { tipo: "area", a, b, m, n, pm, pn, total, dibujar: cfg.dibujar },
    clave: `P:${a}x${b}`,
  };
}
