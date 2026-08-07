// Elección del texto de la lectura repetida.
//
// La regla que define esta actividad: el texto NO rota cada sesión. Se lee
// varias veces antes de pasar al siguiente, porque la mejora que interesa es
// sobre el mismo texto. Cambiarlo cada vez destruiría la medición: leer un
// texto nuevo más lento no significa nada.
import { historialLectura } from "./registro.js";

export const META_REPETICIONES = 4;

export const claveLectura = (banco, texto) => `${banco.id}:${texto.id}`;

// El texto activo es el primero que todavía no llega a su cuota de lecturas.
export function elegirTexto(banco, alumnoId) {
  const pendiente = banco.textos.find(
    (t) => historialLectura(alumnoId, claveLectura(banco, t)).length < META_REPETICIONES
  );
  return pendiente || banco.textos[banco.textos.length - 1];
}
