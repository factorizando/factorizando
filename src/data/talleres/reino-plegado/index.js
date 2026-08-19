// El Reino Plegado — capa de contenido.
//
// Un juego de mundos y niveles donde el escenario es un espacio topológico y
// los niveles se abren resolviendo acertijos de matemáticas y español. Además
// de jugarse, estima en qué grado (3.º a 6.º) va cada jugador: ver `grados.js`,
// que es la tabla que revisó el maestro, y `lib/medicion.js` en los componentes,
// que es la escalera que sube y baja de grado.
import {
  MUNDOS, MUNDOS_POR_ID, portalesDe, portalesDelMapa, buscarCasilla, casillasDe,
  enlacesDe, letrasDeEnlace,
} from "./mundos.js";
import { GRADOS, MATERIAS, TEMAS_JUEGO, temasDe, gradosDe } from "./grados.js";
import { generarAcertijo, temasDisponibles } from "./acertijos/index.js";
import { BANCO } from "./acertijos/espanol.js";
import { GENERADORES } from "./acertijos/matematicas.js";

export {
  MUNDOS, MUNDOS_POR_ID, portalesDe, portalesDelMapa, buscarCasilla, casillasDe,
  enlacesDe, letrasDeEnlace,
  GRADOS, MATERIAS, TEMAS_JUEGO, temasDe, gradosDe,
  generarAcertijo, BANCO, GENERADORES,
};

// Los temas que un nivel puede preguntar: los del mundo, cruzados con los del
// grado en que va el jugador, y solo los que tienen contenido escrito.
export function temasDelNivel(mundoId, grado) {
  const mundo = MUNDOS_POR_ID[mundoId];
  if (!mundo) return { matematicas: [], espanol: [] };
  return temasDisponibles(mundo, grado, temasDe);
}

// Los temas de un mundo para un grado, con red: si ese mundo no trabaja nada
// de ese grado —el taller de Escher se arma con temas de 5.º y 6.º— se busca el
// grado con contenido más cercano, prefiriendo hacia abajo. El acertijo se
// anota con el grado que de verdad salió, no con el que se pidió: si no, la
// medición diría que un niño de 3.º domina 5.º.
function temasConRespaldo(mundoId, materia, grado) {
  const cercanos = [grado, grado - 1, grado + 1, grado - 2, grado + 2, grado - 3, grado + 3];
  for (const g of cercanos) {
    if (g < 3 || g > 6) continue;
    const temas = temasDelNivel(mundoId, g)[materia];
    if (temas.length) return { temas, grado: g };
  }
  return { temas: [], grado };
}

// La tanda de acertijos de un nivel: uno por portal, alternando materia para
// que ningún nivel sea "el de matemáticas" o "el de español".
//
// El grado puede venir distinto por materia —la escalera sube y baja por
// separado, porque a un niño puede irle muy bien en cuentas y atorarse en
// gramática— y entonces cada acertijo sale del escalón de SU materia.
export function acertijosDeNivel({ mundoId, grado, grados, cantidad }) {
  const pedido = {
    matematicas: grados?.matematicas ?? grado,
    espanol: grados?.espanol ?? grado,
  };
  const fuente = {
    matematicas: temasConRespaldo(mundoId, "matematicas", pedido.matematicas),
    espanol: temasConRespaldo(mundoId, "espanol", pedido.espanol),
  };

  const usados = new Set();
  const salida = [];
  // Se empieza por la materia con más temas disponibles, para que la
  // alternancia no se quede sin de dónde sacar.
  let materia = fuente.espanol.temas.length > fuente.matematicas.temas.length ? "espanol" : "matematicas";

  for (let i = 0; i < cantidad; i++) {
    const otra = materia === "matematicas" ? "espanol" : "matematicas";
    const usar = fuente[materia].temas.length ? materia : otra;
    const { temas, grado: gradoReal } = fuente[usar];
    if (!temas.length) break;
    const acertijo = generarAcertijo({ tema: temas[i % temas.length], grado: gradoReal, usados });
    if (acertijo) {
      usados.add(acertijo.clave);
      salida.push(acertijo);
    }
    materia = otra;
  }
  return salida;
}

// Red de seguridad en desarrollo: un mundo que pide un tema sin contenido deja
// niveles imposibles de abrir, y eso se descubriría frente al niño.
if (import.meta.env?.DEV) {
  MUNDOS.filter((m) => m.niveles.length > 0).forEach((m) => {
    GRADOS.forEach((g) => {
      const t = temasDelNivel(m.id, g);
      if (t.matematicas.length + t.espanol.length === 0) {
        console.warn(`[reino] «${m.nombre}» no tiene ningún acertijo para ${g}.º grado`);
      }
    });
  });
}
