// Generador de La Fábrica de Cajas — multiplicación como grupos iguales,
// y su modo El Huerto — la multiplicación como área.
//
// El enunciado siempre es el mismo: pasan N cajas y cada una lleva M cosas.
// Lo que cambia con la edad no es la pregunta sino si el contenido se dibuja
// (y entonces se puede contar) o solo se rotula (y entonces hay que
// multiplicar).
import { entero } from "../azar.js";

export function generarFabrica(rango) {
  const cfg = rango.fabrica;
  const dosCifras = !!cfg.dosCifras && Math.random() < cfg.proporcionDosCifras;

  const porCaja = dosCifras
    ? entero(cfg.rangoDosCifras[0], cfg.rangoDosCifras[1])
    : entero(cfg.factores[0], cfg.factores[1]);
  const cajas = dosCifras
    ? entero(2, cfg.cajasDosCifrasMax)
    : entero(2, cfg.cajasMax);

  return {
    juego: "fabrica",
    cajas,
    porCaja,
    total: cajas * porCaja,
    dibujarContenido: cfg.dibujarContenido,
    categoria: dosCifras
      ? "multiplicacion-dos-cifras"
      : Math.max(cajas, porCaja) <= 5
        ? "multiplicacion-tabla-baja"
        : "multiplicacion-tabla-alta",
    clave: `${cajas}x${porCaja}`,
  };
}

// El Huerto: el mismo producto visto como un rectángulo de cuadritos. Es el
// puente hacia el área y hacia la división (el mismo dibujo contesta "¿cuánto
// mide el otro lado?"), por eso solo aparece cuando la multiplicación como
// grupo igual ya está firme.
export function generarHuerto(rango) {
  if (!rango.huerto) return null;
  const max = rango.huerto.max;
  // Rectángulos, no tiras: un lado de 1 no enseña nada del arreglo.
  const filas = entero(2, max);
  const columnas = entero(2, max);
  return {
    juego: "huerto",
    filas,
    columnas,
    total: filas * columnas,
    categoria: "area-rectangulo",
    clave: `${filas}x${columnas}`,
  };
}
