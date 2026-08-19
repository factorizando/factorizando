// Los acertijos, servidos ya listos para dibujar.
//
// Dos regímenes distintos a propósito:
//
//   matemáticas → generadores. Los números cambian en cada partida, así que
//                 repetir un nivel no es repetir el examen.
//   español     → banco escrito a mano. Una oración no se sortea.
//
// Lo que sale de aquí tiene la misma forma en los dos casos, para que el
// componente que lo dibuja no tenga que saber de dónde vino.
import { elegir, barajar } from "../../azar.js";
import { GENERADORES } from "./matematicas.js";
import { reactivosDe } from "./espanol.js";

let contador = 0;

// Un acertijo de ese tema y ese grado. `usados` son las claves ya vistas en la
// sesión: sirve para no repetir, sobre todo en español, donde el banco es
// finito y repetir se nota enseguida.
export function generarAcertijo({ tema, grado, usados = new Set() }) {
  const base = GENERADORES[tema]
    ? deMatematicas(tema, grado, usados)
    : deEspanol(tema, grado, usados);
  if (!base) return null;
  return { id: `a${++contador}`, tema, grado, ...base };
}

function deMatematicas(tema, grado, usados) {
  let e = GENERADORES[tema](grado);
  for (let i = 0; i < 12 && usados.has(e.clave); i++) e = GENERADORES[tema](grado);
  return { materia: "matematicas", ...e };
}

function deEspanol(tema, grado, usados) {
  const disponibles = reactivosDe(tema, grado);
  if (disponibles.length === 0) return null;
  const frescos = disponibles.filter((r) => !usados.has(claveEspanol(r)));
  const r = elegir(frescos.length ? frescos : disponibles);

  // Los de ordenar traen la secuencia correcta y se sirven revueltas. Se
  // vuelve a revolver si el azar las deja ya en orden: se resolvería sin leer.
  if (r.orden) {
    let tarjetas = barajar(r.orden);
    for (let i = 0; i < 8 && tarjetas.every((t, k) => t === r.orden[k]); i++) tarjetas = barajar(r.orden);
    return {
      materia: "espanol",
      tipo: "orden",
      enunciado: r.pregunta,
      tarjetas,
      orden: r.orden,
      explicacion: r.explicacion,
      clave: claveEspanol(r),
    };
  }

  // El banco guarda siempre la respuesta en la primera opción, porque así se
  // escribe y se revisa sin contar índices. Se revuelve aquí: si no, el juego
  // se gana tocando siempre la de arriba.
  const revueltas = barajar(r.opciones.map((texto, i) => ({ texto, correcta: i === r.correcta })));

  return {
    materia: "espanol",
    tipo: "opciones",
    texto: r.texto || null,
    enunciado: r.pregunta,
    opciones: revueltas.map((o) => o.texto),
    correcta: revueltas.findIndex((o) => o.correcta),
    explicacion: r.explicacion,
    clave: claveEspanol(r),
  };
}

const claveEspanol = (r) => `es:${r.tema}:${r.grado}:${r.pregunta}`;

// Los temas de un mundo que además tocan ese grado y de verdad tienen
// contenido. Es lo que evita que un nivel pida un acertijo que nadie escribió.
export function temasDisponibles(mundo, grado, temasDelGrado) {
  const salida = { matematicas: [], espanol: [] };
  for (const materia of ["matematicas", "espanol"]) {
    salida[materia] = (mundo.temas[materia] || [])
      .filter((t) => temasDelGrado(grado, materia).includes(t))
      .filter((t) => (materia === "matematicas" ? !!GENERADORES[t] : reactivosDe(t, grado).length > 0));
  }
  return salida;
}
