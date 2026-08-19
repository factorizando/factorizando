// El Reino Plegado — capa de contenido.
//
// Un juego de mundos y niveles donde el escenario es un espacio topológico y
// los niveles se abren resolviendo acertijos de matemáticas y español. Además
// de jugarse, estima en qué grado (3.º a 6.º) va cada jugador: ver `grados.js`,
// que es la tabla que revisó el maestro, y `lib/medicion.js` en los componentes,
// que es la escalera que sube y baja de grado.
import { MUNDOS, MUNDOS_POR_ID, portalesDe, portalesDelMapa, buscarCasilla, casillasDe } from "./mundos.js";
import { GRADOS, MATERIAS, TEMAS_JUEGO, temasDe, gradosDe } from "./grados.js";
import { generarAcertijo, temasDisponibles } from "./acertijos/index.js";
import { BANCO } from "./acertijos/espanol.js";
import { GENERADORES } from "./acertijos/matematicas.js";

export {
  MUNDOS, MUNDOS_POR_ID, portalesDe, portalesDelMapa, buscarCasilla, casillasDe,
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

// La tanda de acertijos de un nivel: uno por portal, alternando materia para
// que ningún nivel sea "el de matemáticas" o "el de español".
//
// El grado puede venir distinto por materia —la escalera sube y baja por
// separado, porque a un niño puede irle muy bien en cuentas y atorarse en
// gramática— y entonces cada acertijo sale del escalón de SU materia.
export function acertijosDeNivel({ mundoId, grado, grados, cantidad }) {
  const porMateria = {
    matematicas: grados?.matematicas ?? grado,
    espanol: grados?.espanol ?? grado,
  };
  const temas = {
    matematicas: temasDelNivel(mundoId, porMateria.matematicas).matematicas,
    espanol: temasDelNivel(mundoId, porMateria.espanol).espanol,
  };
  const usados = new Set();
  const salida = [];
  // Se empieza por la materia con más temas disponibles, para que la
  // alternancia no se quede sin de dónde sacar.
  let materia = temas.espanol.length > temas.matematicas.length ? "espanol" : "matematicas";

  for (let i = 0; i < cantidad; i++) {
    const otra = materia === "matematicas" ? "espanol" : "matematicas";
    const lista = temas[materia].length ? temas[materia] : temas[otra];
    if (!lista.length) break;
    const tema = lista[i % lista.length];
    const materiaDelTema = temas.matematicas.includes(tema) ? "matematicas" : "espanol";
    const acertijo = generarAcertijo({ tema, grado: porMateria[materiaDelTema], usados });
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
