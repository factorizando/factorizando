// Diagrama «media-detalle» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { estChips } from "../comun.jsx";

export default function MediaDetalleSVG({ tema })   { return estChips(tema, [2, 2, 6, 7, 8], [], "Σx = 25 · n = 5  →  media = 5"); }
