// Diagrama «ej-est-moda» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { estBarras } from "../comun.jsx";

export default function Ej_EstModaSVG({ tema })       { return estBarras(tema, [{ x: "2", f: 1 }, { x: "4", f: 3 }, { x: "5", f: 1 }, { x: "6", f: 1 }, { x: "7", f: 1 }], 1, "frecuencia de cada valor"); }
