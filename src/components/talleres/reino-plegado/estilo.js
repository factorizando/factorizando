// Paleta del Reino Plegado.
//
// Los talleres de juegos comparten la base (fondo, paneles, tipografía) para
// que todo se vea de la misma casa; lo que cambia aquí es el acento: cada
// mundo tiene su color y se reconoce de lejos en el mapa del reino antes de
// alcanzar a leer su nombre.
import { C } from "../comun/estilo.js";

export { C, FUENTE, TAM } from "../comun/estilo.js";

export const MUNDO_COLOR = {
  flatland: C.azul,
  mobius: C.morado,
  toro: C.amarillo,
  escher: C.verde,
};

// Los seis jugadores se distinguen por color, no solo por su avatar: en el
// mapa del reino hay que ver de un vistazo quién va dónde.
export const COLORES_JUGADOR = [
  "#4ea8ff", "#ff9a3c", "#4ec97f", "#b78bff", "#ffd166", "#ef6a5e",
];

// El suelo va CLARO y el muro OSCURO, no al revés: en la primera versión el
// muro era más claro que el piso y el mapa se leía invertido —las paredes
// parecían pasillos—. Proyectado en una TV eso no se perdona.
export const SUELO = {
  piso: "#28333f",
  pisoAlt: "#2d3948",
  muro: "#10161d",
  muroAlto: "#1b2530",
};
