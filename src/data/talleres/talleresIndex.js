// Registro central de talleres de regularización (primaria / secundaria).
// Se resuelve por id en /regularizacion/:id. Mismo patrón que cursosIndex.js.
//
// Cada TALLER declara cómo se dibuja en `render`:
//   { tipo: "html",  html }        → se monta en <iframe srcDoc> (aislado)
//   { tipo: "react", componente }  → clave del registro TALLERES_REACT
//
// El modo "html" permite pegar un artefacto autónomo y usarlo el mismo día;
// el modo "react" es el destino cuando el taller ya se ganó el portado.
import { TEMAS_POR_ID, normalizar, coincide } from "./temas.js";
import { TALLER as DIVISIONES } from "./matematicas/divisiones.js";
import { TALLER as COMPRENSION } from "./espanol/comprension-lectora.js";
import { TALLER as CARRERA_MATE } from "./juegos/carrera-autos-matematicas.js";
import { TALLER as CARRERA_ESP } from "./juegos/carrera-autos-espanol.js";

export const TALLERES_INDEX = {
  [DIVISIONES.id]: DIVISIONES,
  [CARRERA_MATE.id]: CARRERA_MATE,
  [COMPRENSION.id]: COMPRENSION,
  [CARRERA_ESP.id]: CARRERA_ESP,
};

// Componentes React para talleres con render.tipo === "react".
// Reciben { alumnoId, tallerId, guardarSesion, cargarSesiones }.
export const TALLERES_REACT = {};

export function buscarTaller(id) {
  return TALLERES_INDEX[id] || null;
}

export function listaTalleres() {
  return Object.values(TALLERES_INDEX).map(
    ({ id, titulo, materia, tema, nivel, edades, icono, descripcion, actividades }) => ({
      id, titulo, materia, tema, nivel, edades, icono, descripcion,
      actividades: actividades || [],
    })
  );
}

// Todas las actividades del catálogo, aplanadas y con su taller a cuestas.
// Es la vista que necesita "hoy quiero trabajar divisiones".
export function listaActividades() {
  return listaTalleres().flatMap((t) =>
    t.actividades.map((a) => ({ ...a, taller: t }))
  );
}

// Talleres que trabajan un tema, con las actividades que lo trabajan.
// Devuelve [{ taller, actividades }] respetando el orden del índice.
export function buscarPorTema(temaId) {
  return listaTalleres()
    .map((t) => ({ taller: t, actividades: t.actividades.filter((a) => a.temas.includes(temaId)) }))
    .filter((r) => r.actividades.length > 0);
}

// Búsqueda libre: casa contra el taller (título, tema, descripción) y contra
// cada actividad (nombre y etiquetas de sus temas). Devuelve la misma forma
// que `buscarPorTema` para que el catálogo pinte igual en los dos casos.
export function buscarTalleres(consulta) {
  if (!normalizar(consulta)) return listaTalleres().map((t) => ({ taller: t, actividades: [] }));

  const casaActividad = (a) =>
    coincide(a.nombre, consulta) ||
    a.temas.some((id) => {
      const tema = TEMAS_POR_ID[id];
      return tema && (
        coincide(tema.label, consulta) ||
        coincide(tema.area, consulta) ||
        tema.alias.some((al) => coincide(al, consulta))
      );
    });

  return listaTalleres()
    .map((t) => {
      const actividades = t.actividades.filter(casaActividad);
      const casaTaller =
        coincide(t.titulo, consulta) ||
        coincide(t.tema, consulta) ||
        coincide(t.descripcion, consulta);
      return actividades.length || casaTaller ? { taller: t, actividades } : null;
    })
    .filter(Boolean);
}

// Red de seguridad en desarrollo: un tema mal escrito en una actividad no
// rompe nada, simplemente vuelve la actividad inencontrable. Mejor gritar.
if (import.meta.env?.DEV) {
  Object.values(TALLERES_INDEX).forEach((t) => {
    (t.actividades || []).forEach((a) => {
      a.temas.forEach((id) => {
        if (!TEMAS_POR_ID[id]) {
          console.warn(`[talleres] «${t.id}/${a.id}» apunta al tema inexistente «${id}»`);
        }
      });
    });
  });
}
