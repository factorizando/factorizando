// Diagrama «moda-detalle» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { estBarras } from "../comun.jsx";

export default function ModaDetalleSVG({ tema })    { return estBarras(tema, [{ x: "2", f: 2 }, { x: "6", f: 1 }, { x: "7", f: 1 }, { x: "8", f: 1 }], 0, "el 2 se repite más → moda = 2"); }
