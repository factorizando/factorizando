// Registro del taller de Pizzas, Cajas y Vasos.
//
// Dos destinos, igual que en el taller de decodificación y por la misma razón:
//
//   · `taller_sesiones` (Supabase, vía TallerRunner) recibe el marcador grueso
//     de cada partida —juego, bloque de edad, aciertos y errores—. Es lo que
//     aparece en el expediente del alumno y no necesitó esquema nuevo.
//
//   · localStorage guarda lo que esa tabla no puede alojar y es justo el dato
//     más útil para planear la clase siguiente: **en qué tipo de ejercicio se
//     equivoca**. No es lo mismo fallar el cociente que fallar el residuo, ni
//     comparar 2/5 con 4/5 que comparar 1/3 con 1/2. Vive en el dispositivo
//     donde se trabaja (la tablet del salón).
//
// Todo se lleva por bloque de edad: el mismo alumno puede haber jugado en 7-8
// hace un mes y en 9-10 hoy, y mezclarlos borraría precisamente la mejora.

const VERSION = 1;
const RAIZ = "factorizando:pizzas-cajas-vasos";

const vacio = () => ({ v: VERSION, partidas: [], categorias: {} });

const clave = (alumnoId) => `${RAIZ}:${alumnoId || "libre"}`;
const claveCategoria = (rango, categoria) => `${rango}::${categoria}`;

function leer(alumnoId) {
  try {
    const crudo = localStorage.getItem(clave(alumnoId));
    if (!crudo) return vacio();
    const datos = JSON.parse(crudo);
    if (datos?.v !== VERSION) return vacio();
    return { ...vacio(), ...datos };
  } catch {
    // Modo privado, cuota llena o JSON corrupto: el taller funciona igual,
    // solo se queda sin memoria entre sesiones.
    return vacio();
  }
}

function escribir(alumnoId, datos) {
  try {
    localStorage.setItem(clave(alumnoId), JSON.stringify(datos));
  } catch {
    /* sin persistencia; no vale la pena interrumpir la clase por esto */
  }
  return datos;
}

export function cargarRegistro(alumnoId) {
  return leer(alumnoId);
}

// Un ejercicio contestado. Se anota por categoría, que es la unidad con la
// que después se contesta "¿en qué se equivoca más?".
export function anotarIntento(alumnoId, { rango, juego, categoria, acerto }) {
  if (!categoria) return;
  const d = leer(alumnoId);
  const k = claveCategoria(rango, categoria);
  const c = d.categorias[k] || { juego, aciertos: 0, errores: 0 };
  if (acerto) c.aciertos++;
  else c.errores++;
  c.juego = juego;
  c.ultima = Date.now();
  d.categorias[k] = c;
  escribir(alumnoId, d);
}

// Cierre de partida. Devuelve la partida anterior **del mismo juego y el
// mismo bloque de edad** para poder decirle cuánto mejoró: es el único
// elogio que da el taller, y compararlo contra otro bloque no significaría
// nada.
export function cerrarPartida(alumnoId, { juego, modo, rango, aciertos, errores, total }) {
  const d = leer(alumnoId);
  const anterior = [...d.partidas].reverse()
    .find((p) => p.juego === juego && p.rango === rango) || null;
  d.partidas = [...d.partidas, {
    juego, modo: modo || null, rango, aciertos, errores, total, fecha: Date.now(),
  }].slice(-120);
  escribir(alumnoId, d);
  return anterior;
}

export function partidas(alumnoId) {
  return [...leer(alumnoId).partidas].reverse();
}

// Los tipos de ejercicio con más errores, de peor a mejor. El desempate por
// tasa importa: 4 errores de 5 pesa más que 4 de 40.
export function categoriasFlojas(alumnoId, { rango = null, minimo = 1 } = {}) {
  const d = leer(alumnoId);
  return Object.entries(d.categorias)
    .map(([k, c]) => {
      const [rangoId, categoria] = k.split("::");
      const intentos = c.aciertos + c.errores;
      return { rango: rangoId, categoria, ...c, intentos, tasa: c.errores / Math.max(1, intentos) };
    })
    .filter((c) => c.errores >= minimo && (!rango || c.rango === rango))
    .sort((a, b) => b.errores - a.errores || b.tasa - a.tasa);
}

// Resumen por juego y bloque, para la tabla del panel.
export function resumenPorJuego(alumnoId) {
  const grupos = new Map();
  leer(alumnoId).partidas.forEach((p) => {
    const k = `${p.juego}::${p.rango}`;
    const g = grupos.get(k) || { juego: p.juego, rango: p.rango, partidas: 0, aciertos: 0, errores: 0 };
    g.partidas++;
    g.aciertos += p.aciertos;
    g.errores += p.errores;
    grupos.set(k, g);
  });
  return [...grupos.values()];
}

export function exportarJSON(alumnoId) {
  return JSON.stringify({
    taller: "pizzas-cajas-vasos",
    alumno: alumnoId || null,
    exportado: new Date().toISOString(),
    ...leer(alumnoId),
  }, null, 2);
}

export function borrarRegistro(alumnoId) {
  try {
    localStorage.removeItem(clave(alumnoId));
  } catch {
    /* nada que borrar */
  }
}

// Compara la partida de hoy contra la anterior del mismo juego y bloque.
// Nunca contra una meta ni contra otros alumnos.
export function compararConAnterior(aciertos, total, anterior) {
  if (!anterior) return "Es tu primera partida de este juego. Queda guardada para comparar la próxima.";
  const dif = aciertos - anterior.aciertos;
  if (dif > 0) {
    return `La vez pasada acertaste ${anterior.aciertos} de ${anterior.total}. ` +
      `Hoy ${dif} ${dif === 1 ? "más" : "más"}.`;
  }
  if (dif === 0) return `Igual que la vez pasada: ${anterior.aciertos} de ${anterior.total}.`;
  return `La vez pasada acertaste ${anterior.aciertos} de ${anterior.total}. ` +
    "Hoy salieron menos, y no pasa nada: por eso se juega otra vez.";
}
