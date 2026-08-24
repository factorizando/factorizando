// Diagrama «ej-urna-r5a3» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { UrnaSVG } from "../comun.jsx";

export default function UrnaSinReempSVG({ tema }) { return <UrnaSVG tema={tema} rojas={5} azules={3} />; }
