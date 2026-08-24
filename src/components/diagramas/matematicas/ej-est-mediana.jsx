// Diagrama «ej-est-mediana» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { estChips } from "../comun.jsx";

export default function Ej_EstMedianaSVG({ tema })    { return estChips(tema, [3, 4, 5, 7, 9], [2], "ya ordenados · valor central"); }
