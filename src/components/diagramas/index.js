// Registro único de diagramas estáticos (SVG).
// Clave (string usada en `figura:` / `svgDiagram:`) → componente que recibe { tema }.
//
// Patrón propuesto en docs/CONVENCIONES.md §4.2: en lugar de cadenas de `if`
// dentro de SlideRenderer, un mapa único. Los componentes viven por materia.
import DerivadaSecante from "./matematicas/derivada-secante.jsx";
import VennDos from "./matematicas/venn-dos.jsx";
import GeomDardo from "./matematicas/geom-dardo.jsx";

export const DIAGRAMS = {
  "derivada-secante": DerivadaSecante,
  "venn-dos": VennDos,
  "geom-dardo": GeomDardo,
};

export function buscarDiagrama(clave) {
  return DIAGRAMS[clave] || null;
}
