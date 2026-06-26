// Registro único de componentes interactivos (manipulables con el mouse).
// Clave (string usada en `interactivo:`) → componente que recibe { tema, ...props }.
//
// Patrón propuesto en docs/CONVENCIONES.md §4.4. Motores: mafs (matemáticas),
// matter-js (física). Los componentes viven por materia.
import DerivadaTangente from "./matematicas/derivada-tangente.jsx";
import SimFrecuentista from "./matematicas/sim-frecuentista.jsx";

export const INTERACTIVOS = {
  "derivada-tangente": DerivadaTangente,
  "sim-frecuentista": SimFrecuentista,
};

export function buscarInteractivo(clave) {
  return INTERACTIVOS[clave] || null;
}
