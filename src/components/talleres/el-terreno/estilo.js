// Color de acento por juego del taller del Terreno. La paleta y la tipografía
// son las de todos los talleres de juegos; viven en ../comun.
import { C } from "../comun/estilo.js";

export { C, FUENTE, TAM } from "../comun/estilo.js";

export const ACENTO = {
  "cerca-pasto": C.verde,
  "misma-cerca": C.cafe,
};

// Los dos materiales del taller. Que la cerca y el pasto no se parezcan en
// nada es media clase: son dos medidas distintas y tienen que verse distintas.
export const MATERIAL = {
  pasto: "#3f8a55",
  pastoTenue: "#24402d",
  tierra: "#1d2a20",
  cerca: "#c98a52",
  cercaApagada: "#4a3b2c",
  poste: "#8a5c33",
};
