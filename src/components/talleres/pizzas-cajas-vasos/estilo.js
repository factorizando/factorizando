// Paleta y tipografía del taller de Pizzas, Cajas y Vasos.
//
// La restricción que manda no es estética sino física: esto corre en una
// tablet **proyectada a una TV** y se mira desde el otro lado del salón. De
// ahí salen las tres decisiones de este archivo —fondo oscuro (una pantalla
// blanca a todo brillo cansa y desborda el proyector), acentos saturados que
// aguantan la pérdida de contraste del cañón, y una escala tipográfica que
// arranca donde otras terminan.
//
// A diferencia del taller de decodificación, aquí sí se usa color de juego:
// el alumno tiene 7 a 10 años y el material es una pizzería, una banda
// transportadora y unos vasos de jugo. Lo que se evita no es lo alegre, es lo
// que castiga: no hay rojo de "perdiste" ni sonido de error.
export const C = {
  fondo: "#0f1620",
  panel: "#18212c",
  alto: "#22303e",
  borde: "#2c3b4c",
  bordeVivo: "#41566d",

  naranja: "#ff9a3c",   // la pizzería
  amarillo: "#ffd166",  // las cajas y las galletas
  azul: "#4ea8ff",      // los vasos y el líquido
  verde: "#4ec97f",     // acierto
  morado: "#b78bff",    // el huerto
  rojo: "#ef6a5e",      // solo para señalar la respuesta correcta tras un fallo

  texto: "#eff5fb",
  tenue: "#a3b5c8",
  apagado: "#6f8296",
};

// Color de acento por juego: cada uno se reconoce de lejos por su color
// antes de que se alcance a leer el título.
export const ACENTO = {
  pizzeria: C.naranja,
  fabrica: C.amarillo,
  huerto: C.morado,
  vasos: C.azul,
};

// Pila del sistema, sin fuentes externas: el salón se queda sin internet a
// media clase y el taller tiene que verse igual.
export const FUENTE =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

// Escala pensada para leerse a cuatro metros de la TV.
export const TAM = {
  titulo: "clamp(26px, 3.4vw, 40px)",
  enunciado: "clamp(22px, 2.6vw, 32px)",
  dato: "clamp(38px, 6vw, 72px)",
  cuerpo: "clamp(16px, 1.5vw, 19px)",
};
