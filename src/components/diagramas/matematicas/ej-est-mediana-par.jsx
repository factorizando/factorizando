// Diagrama «ej-est-mediana-par» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { estChips } from "../comun.jsx";

export default function Ej_EstMedianaParSVG({ tema }) { return estChips(tema, [10, 20, 30, 40], [1, 2], "dos valores centrales"); }
