// La escalera que estima en qué grado va cada jugador.
//
// El problema de medir dentro de un juego: si para avanzar hay que resolver,
// todos acaban en 100% y el dato no sirve. Aquí se resuelve así:
//
// 1. **Solo cuenta el primer intento** de cada acertijo. Los reintentos sirven
//    para abrir la puerta, no para medir.
// 2. El jugador empieza en el grado que declaró y la escalera lo mueve: con
//    tres aciertos seguidos sube, con dos fallos de los últimos tres baja.
//    Así el juego se acomoda solo, sin que nadie tenga que decidir el nivel.
// 3. La estimación final no es el escalón donde quedó, sino **el grado más
//    alto donde acierta al menos tres de cada cuatro a la primera**, con un
//    mínimo de intentos para que no sea casualidad.
//
// El niño no ve nada de esto: ni grado, ni porcentaje, ni escalón. Es para el
// maestro.

export const GRADO_MIN = 3;
export const GRADO_MAX = 6;
const ACIERTOS_PARA_SUBIR = 3;
const VENTANA = 3;
const FALLOS_PARA_BAJAR = 2;
const MINIMO_PARA_ESTIMAR = 4;
const TASA_DOMINIO = 0.75;

export function estadoInicial(gradoDeclarado) {
  const grado = Math.min(GRADO_MAX, Math.max(GRADO_MIN, gradoDeclarado || 4));
  return { grado, racha: 0, ultimos: [], historial: [] };
}

// Anota el primer intento de un acertijo y devuelve el estado nuevo. `tema` se
// guarda para que el panel pueda decir *en qué* falla, no solo cuánto.
export function anotarPrimerIntento(estado, { tema, grado, acerto }) {
  const e = estado || estadoInicial(grado);
  const historial = [...e.historial, { tema, grado, acerto, fecha: Date.now() }].slice(-200);
  const ultimos = [...e.ultimos, acerto].slice(-VENTANA);
  let { grado: escalon, racha } = e;

  if (acerto) {
    racha += 1;
    if (racha >= ACIERTOS_PARA_SUBIR && escalon < GRADO_MAX) {
      escalon += 1;
      racha = 0;
      return { grado: escalon, racha, ultimos: [], historial, movimiento: "subio" };
    }
  } else {
    racha = 0;
    const fallos = ultimos.filter((a) => !a).length;
    if (fallos >= FALLOS_PARA_BAJAR && escalon > GRADO_MIN) {
      escalon -= 1;
      return { grado: escalon, racha: 0, ultimos: [], historial, movimiento: "bajo" };
    }
  }
  return { grado: escalon, racha, ultimos, historial, movimiento: null };
}

// Qué grado domina, por materia. Devuelve también el desglose para que el
// panel pueda enseñar en qué se apoya la estimación.
export function estimacion(estado) {
  if (!estado?.historial?.length) return { grado: null, detalle: [] };
  const porGrado = new Map();
  estado.historial.forEach(({ grado, acerto }) => {
    const g = porGrado.get(grado) || { grado, intentos: 0, aciertos: 0 };
    g.intentos += 1;
    if (acerto) g.aciertos += 1;
    porGrado.set(grado, g);
  });

  const detalle = [...porGrado.values()]
    .map((g) => ({ ...g, tasa: g.aciertos / g.intentos }))
    .sort((a, b) => a.grado - b.grado);

  const dominados = detalle.filter((g) => g.intentos >= MINIMO_PARA_ESTIMAR && g.tasa >= TASA_DOMINIO);
  return {
    grado: dominados.length ? dominados[dominados.length - 1].grado : null,
    detalle,
    escalon: estado.grado,
  };
}

// Los temas que más se le atoran, para la clase siguiente.
export function temasFlojos(estado, minimo = 1) {
  const mapa = new Map();
  (estado?.historial || []).forEach(({ tema, acerto }) => {
    const t = mapa.get(tema) || { tema, intentos: 0, errores: 0 };
    t.intentos += 1;
    if (!acerto) t.errores += 1;
    mapa.set(tema, t);
  });
  return [...mapa.values()]
    .filter((t) => t.errores >= minimo)
    .sort((a, b) => b.errores - a.errores || b.errores / b.intentos - a.errores / a.intentos);
}
