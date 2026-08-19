// Los seis jugadores y todo lo suyo, en el dispositivo.
//
// El juego se juega por turnos en una sola tablet, así que no hay cuentas ni
// nube: los seis perfiles —nombre, avatar, grado declarado, progreso y el
// historial que sirve para estimar el grado— viven en localStorage de esa
// tablet. Los avatares son fotos de niños y el repositorio es público: no
// pueden salir de aquí.
//
// Lo que sí sale es el marcador grueso de cada nivel terminado, que va al
// expediente del alumno por el puente de siempre (`taller_sesiones`), solo si
// el maestro entró con un alumno seleccionado.

const VERSION = 1;
const CLAVE = "factorizando:reino-plegado";
export const MAX_JUGADORES = 6;

const vacio = () => ({ v: VERSION, jugadores: [], progreso: {}, medicion: {}, todoAbierto: false });

function leer() {
  try {
    const crudo = localStorage.getItem(CLAVE);
    if (!crudo) return vacio();
    const d = JSON.parse(crudo);
    if (d?.v !== VERSION) return vacio();
    return { ...vacio(), ...d };
  } catch {
    return vacio();
  }
}

function escribir(d) {
  try {
    localStorage.setItem(CLAVE, JSON.stringify(d));
  } catch {
    // Cuota llena: casi siempre son los avatares. Mejor avisar que perder la
    // partida en silencio.
    console.warn("[reino] no se pudo guardar en este dispositivo (¿memoria llena?)");
  }
  return d;
}

export function cargarTodo() {
  return leer();
}

export function jugadores() {
  return leer().jugadores;
}

export function guardarJugador({ id, nombre, avatar, grado }) {
  const d = leer();
  const i = d.jugadores.findIndex((j) => j.id === id);
  const jugador = {
    id: id || `j${Date.now().toString(36)}`,
    nombre: nombre.trim(),
    avatar: avatar || null,
    grado: grado || 4,
    creado: i >= 0 ? d.jugadores[i].creado : Date.now(),
  };
  if (i >= 0) d.jugadores[i] = { ...d.jugadores[i], ...jugador };
  else if (d.jugadores.length < MAX_JUGADORES) d.jugadores.push(jugador);
  escribir(d);
  return jugador;
}

export function borrarJugador(id) {
  const d = leer();
  d.jugadores = d.jugadores.filter((j) => j.id !== id);
  delete d.progreso[id];
  delete d.medicion[id];
  return escribir(d);
}

// ── Progreso ──────────────────────────────────────────────────────────────
// Un nivel terminado no se pierde nunca; repetirlo solo puede mejorar la marca.
export function progresoDe(jugadorId) {
  return leer().progreso[jugadorId] || {};
}

export function marcarNivel(jugadorId, mundoId, nivelId, { aciertos, total }) {
  const d = leer();
  const p = d.progreso[jugadorId] || {};
  const mundo = p[mundoId] || {};
  const previo = mundo[nivelId];
  mundo[nivelId] = {
    completado: true,
    mejor: Math.max(previo?.mejor ?? 0, aciertos),
    total,
    veces: (previo?.veces || 0) + 1,
    fecha: Date.now(),
  };
  p[mundoId] = mundo;
  d.progreso[jugadorId] = p;
  escribir(d);
  return mundo[nivelId];
}

// Un nivel se abre cuando el anterior está terminado. El primero de cada
// mundo abierto está siempre disponible.
export function nivelAbierto(progreso, mundo, indice) {
  if (indice === 0) return true;
  const anterior = mundo.niveles[indice - 1];
  return !!progreso?.[mundo.id]?.[anterior.id]?.completado;
}

// Un mundo se abre cuando el jugador lleva **la mitad** del anterior. Con cinco
// niveles en el primero eso son tres: suficiente para que se sienta ganado y
// poco para que nadie se quede atorado antes de ver la banda de Möbius, que es
// lo que hace especial al juego. El maestro puede abrirlos todos desde su panel.
export function mundoAbierto(progreso, mundos, indice, todoAbierto) {
  if (indice === 0 || todoAbierto) return true;
  const anterior = mundos[indice - 1];
  if (!anterior.niveles.length) return true;
  return nivelesTerminados(progreso, anterior.id) >= Math.ceil(anterior.niveles.length / 2);
}

export function abrirTodo(valor) {
  const d = leer();
  d.todoAbierto = !!valor;
  return escribir(d);
}

export function nivelesTerminados(progreso, mundoId) {
  return Object.values(progreso?.[mundoId] || {}).filter((n) => n.completado).length;
}

// En caravana el avance es del grupo: un nivel cuenta como hecho si cualquiera
// de los que van en ella lo terminó. Así nadie se queda atrás por haber faltado
// un día, y el mapa del reino se ve igual para todos los que viajan juntos.
export function progresoCombinado(progresos, ids) {
  const salida = {};
  ids.forEach((id) => {
    Object.entries(progresos[id] || {}).forEach(([mundoId, niveles]) => {
      salida[mundoId] = salida[mundoId] || {};
      Object.entries(niveles).forEach(([nivelId, dato]) => {
        const previo = salida[mundoId][nivelId];
        if (!previo || (dato.mejor || 0) > (previo.mejor || 0)) salida[mundoId][nivelId] = dato;
      });
    });
  });
  return salida;
}

// ── Medición ──────────────────────────────────────────────────────────────
export function medicionDe(jugadorId) {
  return leer().medicion[jugadorId] || {};
}

export function guardarMedicion(jugadorId, medicion) {
  const d = leer();
  d.medicion[jugadorId] = medicion;
  return escribir(d);
}

export function borrarTodo() {
  try {
    localStorage.removeItem(CLAVE);
  } catch { /* nada que borrar */ }
}

export function exportarJSON() {
  // Los avatares se van fuera: pesan y son fotos de niños.
  const d = leer();
  return JSON.stringify({
    ...d,
    jugadores: d.jugadores.map(({ avatar, ...resto }) => ({ ...resto, avatar: avatar ? "(imagen omitida)" : null })),
    exportado: new Date().toISOString(),
  }, null, 2);
}
