// Generador de El Mosaiquero — área de una figura que no es un rectángulo.
//
// El patio tiene una esquina mordida: es una L. No hay fórmula que aplicar, y
// ese es el punto. La única salida es **partirla en dos rectángulos**, sacar
// el área de cada uno y sumarlas, que es exactamente el razonamiento que más
// adelante se llama propiedad distributiva y modelo de área.
//
// Cada figura se puede partir de dos maneras —un corte vertical y uno
// horizontal— y las dos dan el mismo total con números distintos. Enseñar eso
// vale tanto como el resultado: el área no depende de cómo se parta.
//
// La figura se genera siempre con la muesca en la esquina de arriba a la
// derecha (el marco canónico, donde la geometría es simple) y luego se voltea
// en horizontal, en vertical o en las dos, para que no salgan diez patios con
// la misma silueta.
import { entero } from "../azar.js";

// Voltea un rectángulo dentro de una caja de W × H.
function voltearRect(r, W, H, volteoX, volteoY) {
  return {
    x: volteoX ? W - r.x - r.w : r.x,
    y: volteoY ? H - r.y - r.h : r.y,
    w: r.w,
    h: r.h,
  };
}

function voltearLinea(l, W, H, volteoX, volteoY) {
  const fx = (x) => (volteoX ? W - x : x);
  const fy = (y) => (volteoY ? H - y : y);
  return { x1: fx(l.x1), y1: fy(l.y1), x2: fx(l.x2), y2: fy(l.y2) };
}

export function generarMosaico(rango) {
  if (!rango.mosaiquero) return null;
  const [min, max] = rango.mosaiquero.caja;
  const W = entero(min, max);
  const H = entero(min, max);
  // La muesca deja al menos una fila y una columna de la caja: así siempre es
  // una L de verdad y nunca un rectángulo disfrazado.
  const mw = entero(1, W - 1);
  const mh = entero(1, H - 1);
  const volteoX = Math.random() < 0.5;
  const volteoY = Math.random() < 0.5;

  const v = (r) => voltearRect(r, W, H, volteoX, volteoY);
  const vl = (l) => voltearLinea(l, W, H, volteoX, volteoY);

  const cortes = [
    {
      id: "vertical",
      nombre: "Corte de arriba a abajo",
      linea: vl({ x1: W - mw, y1: mh, x2: W - mw, y2: H }),
      partes: [
        v({ x: 0, y: 0, w: W - mw, h: H }),
        v({ x: W - mw, y: mh, w: mw, h: H - mh }),
      ],
    },
    {
      id: "horizontal",
      nombre: "Corte de lado a lado",
      linea: vl({ x1: 0, y1: mh, x2: W - mw, y2: mh }),
      partes: [
        v({ x: 0, y: 0, w: W - mw, h: mh }),
        v({ x: 0, y: mh, w: W, h: H - mh }),
      ],
    },
  ];

  return {
    juego: "mosaiquero",
    W,
    H,
    // La muesca, ya volteada, es lo único que el dibujo necesita para saber qué
    // celdas *no* son parte del patio.
    muesca: voltearRect({ x: W - mw, y: 0, w: mw, h: mh }, W, H, volteoX, volteoY),
    area: W * H - mw * mh,
    cortes,
    unidades: rango.mosaiquero.unidades,
    categoria: "area-figura-compuesta",
    clave: `${W}x${H}-${mw}x${mh}-${volteoX ? 1 : 0}${volteoY ? 1 : 0}`,
  };
}
