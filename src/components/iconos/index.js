// Registro de íconos a medida (SVG). El campo `icono` de un curso puede ser
// un emoji (string) o una clave de este registro; CursoVer resuelve cuál usar.
import IconoOmega from "./omega.jsx";

export const ICONOS = {
  omega: IconoOmega,
};

export function buscarIcono(clave) {
  return ICONOS[clave] || null;
}
