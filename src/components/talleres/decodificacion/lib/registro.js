// Registro del taller de decodificación.
//
// Dos destinos, a propósito distintos:
//
//   · `taller_sesiones` (Supabase, vía el puente del TallerRunner) recibe el
//     marcador grueso de cada actividad — aciertos y errores. Es lo que ya
//     aparece en el expediente del alumno y no requiere esquema nuevo.
//
//   · localStorage guarda el detalle fino que esa tabla no puede alojar: qué
//     palabras se le atoran y cuánto tardó en cada lectura repetida. Vive en
//     el dispositivo donde se trabaja (la tablet del salón). Si algún día se
//     quiere ver desde otra máquina, hace falta una tabla con una columna
//     JSONB; hasta entonces esto es lo que hay y el panel lo advierte.

const VERSION = 1;
const RAIZ = "factorizando:decodificacion";

const vacio = () => ({ v: VERSION, palabras: {}, lecturas: {}, actividades: {} });

function clave(alumnoId) {
  return `${RAIZ}:${alumnoId || "libre"}`;
}

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
    /* sin persistencia; no vale la pena interrumpir la sesión por esto */
  }
  return datos;
}

export function cargarRegistro(alumnoId) {
  return leer(alumnoId);
}

// Una palabra intentada: suma al contador que alimenta "lo que se le atora".
export function anotarPalabra(alumnoId, palabra, acerto) {
  const d = leer(alumnoId);
  const p = d.palabras[palabra] || { aciertos: 0, errores: 0 };
  if (acerto) p.aciertos++;
  else p.errores++;
  p.ultima = Date.now();
  d.palabras[palabra] = p;
  return escribir(alumnoId, d);
}

// Cierre de una actividad. Devuelve cómo le fue la vez anterior para poder
// compararlo contra sí mismo, que es el único elogio que este taller da.
//
// `total` es el número de reactivos de la ronda y no siempre coincide con
// aciertos + errores: una palabra fallada dos veces suma dos errores pero un
// solo reactivo. Para comparar rondas hace falta el denominador real.
export function anotarActividad(alumnoId, actividadId, { aciertos, errores, total }) {
  const d = leer(alumnoId);
  const previo = d.actividades[actividadId] || { rondas: [] };
  const anterior = previo.rondas[previo.rondas.length - 1] || null;
  previo.rondas = [...previo.rondas, { aciertos, errores, total, fecha: Date.now() }].slice(-30);
  d.actividades[actividadId] = previo;
  escribir(alumnoId, d);
  return anterior;
}

// Una pasada cronometrada. Devuelve el historial del texto ya con esta dentro.
export function anotarLectura(alumnoId, textoId, { segundos, palabras }) {
  const d = leer(alumnoId);
  const ppm = segundos > 0 ? Math.round((palabras / segundos) * 60) : 0;
  const historial = [...(d.lecturas[textoId] || []), { segundos, palabras, ppm, fecha: Date.now() }];
  d.lecturas[textoId] = historial.slice(-20);
  escribir(alumnoId, d);
  return d.lecturas[textoId];
}

export function historialLectura(alumnoId, textoId) {
  return leer(alumnoId).lecturas[textoId] || [];
}

// Las palabras que más se le atoran, de peor a mejor. Se ordena por número de
// errores y se desempata por tasa: 4 de 5 mal pesa más que 4 de 20.
export function palabrasAtoradas(alumnoId, minimo = 1) {
  const d = leer(alumnoId);
  return Object.entries(d.palabras)
    .map(([palabra, p]) => ({
      palabra,
      ...p,
      intentos: p.aciertos + p.errores,
      tasa: p.errores / Math.max(1, p.aciertos + p.errores),
    }))
    .filter((p) => p.errores >= minimo)
    .sort((a, b) => b.errores - a.errores || b.tasa - a.tasa);
}

export function borrarRegistro(alumnoId) {
  try {
    localStorage.removeItem(clave(alumnoId));
  } catch {
    /* nada que borrar */
  }
}
