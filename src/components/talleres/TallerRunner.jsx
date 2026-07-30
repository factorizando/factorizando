// Monta un taller y le da persistencia.
//
// Los talleres tipo "html" corren dentro de un <iframe srcDoc>: eso aísla su CSS
// global (usan `:root`, `body`, `*`) del tema del sitio y evita que se pisen. A
// cambio, el taller no puede tocar el cliente de Supabase, así que pide guardar
// y leer por postMessage y este componente hace la escritura real.
//
// Protocolo (ver el bloque `host` en cada taller HTML):
//   taller → host : { source:"taller", rid, tipo:"guardar"|"cargar", payload }
//   host → taller : { source:"taller-host", rid, payload }  |  { ..., error }
import { useEffect, useRef, useCallback } from "react";
import { supabase } from "../../lib/supabase";
import { TALLERES_REACT } from "../../data/talleres/talleresIndex.js";

// `creado_en` es TIMESTAMPTZ (instante real), así que aquí sí aplica el parseo
// directo; el ajuste manual de CLAUDE.md es para columnas DATE.
function fmtFecha(iso) {
  return new Date(iso).toLocaleDateString("es-MX", {
    year: "numeric", month: "short", day: "numeric",
  });
}

export default function TallerRunner({ taller, alumnoId, onSesionGuardada }) {
  const iframeRef = useRef(null);

  // Guarda una tanda de práctica. Sin alumno seleccionado (modo libre) no
  // escribe: mejor no dejar filas huérfanas en el expediente.
  const guardarSesion = useCallback(
    async ({ actividad, grupo, aciertos, errores }) => {
      if (!alumnoId) return { guardado: false, motivo: "sin-alumno" };
      const { error } = await supabase.from("taller_sesiones").insert({
        alumno_id: alumnoId,
        taller_id: taller.id,
        actividad,
        grupo,
        aciertos,
        errores,
      });
      if (error) throw new Error(error.message);
      onSesionGuardada?.();
      return { guardado: true };
    },
    [alumnoId, taller.id, onSesionGuardada]
  );

  const cargarSesiones = useCallback(async () => {
    if (!alumnoId) return [];
    const { data, error } = await supabase
      .from("taller_sesiones")
      .select("actividad, grupo, aciertos, errores, creado_en")
      .eq("alumno_id", alumnoId)
      .eq("taller_id", taller.id)
      .order("creado_en", { ascending: false })
      .limit(60);
    if (error) throw new Error(error.message);
    return (data || []).map((r) => ({ ...r, fecha: fmtFecha(r.creado_en) }));
  }, [alumnoId, taller.id]);

  const esHtml = taller.render?.tipo === "html";

  // Puente postMessage. El iframe usa srcDoc, así que su origen es opaco
  // ("null") y `e.origin` no sirve para validar: se compara el contentWindow.
  useEffect(() => {
    if (!esHtml) return;

    async function onMessage(e) {
      const iframe = iframeRef.current;
      if (!iframe || e.source !== iframe.contentWindow) return;
      const msg = e.data;
      if (!msg || msg.source !== "taller") return;

      const responder = (body) =>
        iframe.contentWindow?.postMessage(
          { source: "taller-host", rid: msg.rid, ...body },
          "*"
        );

      try {
        if (msg.tipo === "guardar") {
          responder({ payload: await guardarSesion(msg.payload || {}) });
        } else if (msg.tipo === "cargar") {
          responder({ payload: await cargarSesiones() });
        } else {
          responder({ error: `tipo desconocido: ${msg.tipo}` });
        }
      } catch (err) {
        responder({ error: err.message || "error desconocido" });
      }
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [esHtml, guardarSesion, cargarSesiones]);

  if (esHtml) {
    return (
      <iframe
        ref={iframeRef}
        title={taller.titulo}
        srcDoc={taller.render.html}
        // Sin allow-same-origin: el taller queda en un origen opaco y no puede
        // tocar la sesión de Supabase ni el storage del sitio. postMessage sigue
        // funcionando, que es todo lo que necesita.
        sandbox="allow-scripts allow-popups"
        style={{ width: "100%", height: "100%", border: 0, display: "block" }}
      />
    );
  }

  const Componente = TALLERES_REACT[taller.render?.componente];
  if (!Componente) {
    return (
      <div style={{ padding: 32, color: "#8a9ab8", fontFamily: "'DM Sans', sans-serif" }}>
        El taller «{taller.titulo}» no tiene un render válido
        (<code>{taller.render?.tipo || "sin tipo"}</code>).
      </div>
    );
  }
  return (
    <Componente
      alumnoId={alumnoId}
      tallerId={taller.id}
      guardarSesion={guardarSesion}
      cargarSesiones={cargarSesiones}
    />
  );
}
