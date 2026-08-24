// Diagrama «ej-urna-rav» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { UrnaSVG } from "../comun.jsx";

export default function UrnaSumaSVG({ tema })    { return <UrnaSVG tema={tema} rojas={4} azules={3} verdes={2} />; }
