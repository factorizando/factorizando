// Color de acento por sala. La paleta y la tipografía son las de todos los
// talleres de juegos; viven en ../comun.
import { C } from "../comun/estilo.js";

export { C, FUENTE, TAM } from "../comun/estilo.js";

export const ACENTO = {
  galeria: C.azul,
  dualidad: C.morado,
  reto: C.verde,
};

// El fondo de las escenas 3D. Un pelo más oscuro que el del taller para que la
// figura iluminada se despegue del panel en un proyector.
export const FONDO_3D = "#0b1119";

// Un color por tipo de elemento, igual en las tres salas. Es la misma decisión
// que la cerca y el pasto del taller del Terreno: caras, aristas y vértices se
// cuentan por separado, así que tienen que verse distintos y verse **siempre**
// del mismo color, aunque cambie el sólido.
//
//   la cara   → el color del sólido
//   la arista → blanco hueso, que resalta sobre cualquiera de los cinco
//   el vértice→ amarillo, el único color que no usa ningún sólido
export const ELEMENTO = {
  arista: "#e8f0f8",
  vertice: "#ffd166",
};
