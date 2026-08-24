// Diagrama «ej-est-media» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { estChips } from "../comun.jsx";

export default function Ej_EstMediaSVG({ tema })      { return estChips(tema, [8, 6, 7, 9, 10], [], "5 calificaciones"); }
