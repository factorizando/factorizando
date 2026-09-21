// Reproductor de un taller de regularización: /regularizacion/:id
//
// Quién entra y qué se registra:
//   · Alumno con bloque = regularizacion → practica y su avance se guarda en su
//     propio expediente (alumno_id = su uid).
//   · Admin / profesor → proyectan la práctica en modo libre; no se escribe nada
//     en el perfil de ningún alumno (por eso ya no hay selector de alumno).
//
// La barra superior es mínima a propósito: esto se proyecta frente al alumno.
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { buscarTaller } from "../data/talleres/talleresIndex.js";
import TallerRunner from "../components/talleres/TallerRunner.jsx";

const C = {
  bg:      "#0e0f11",
  card:    "#16181f",
  surface: "#1c1f24",
  border:  "#252830",
  blue:    "#3b9eff",
  green:   "#34d399",
  text:    "#e8eaf0",
  muted:   "#5a6070",
  dim:     "#8a9ab8",
};

const font = "'DM Sans', sans-serif";

export default function TallerVer() {
  const { id } = useParams();
  const taller = useMemo(() => buscarTaller(id), [id]);

  const [perfil, setPerfil] = useState(null); // null = cargando
  const contenedorRef = useRef(null);

  useEffect(() => {
    let cancelado = false;
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (cancelado) return;
      if (!session) { setPerfil({}); return; }
      const { data } = await supabase
        .from("profiles")
        .select("rol, nombre, bloque")
        .eq("id", session.user.id)
        .single();
      if (cancelado) return;
      setPerfil(data ? { ...data, uid: session.user.id } : { uid: session.user.id });
    });
    return () => { cancelado = true; };
  }, []);

  function pantallaCompleta() {
    const nodo = contenedorRef.current;
    if (!nodo) return;
    if (document.fullscreenElement) document.exitFullscreen();
    else nodo.requestFullscreen?.();
  }

  if (!taller) {
    return (
      <div style={{
        minHeight: "100vh", background: C.bg, color: C.text, fontFamily: font,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", gap: 14,
      }}>
        <p style={{ color: C.dim }}>No existe el taller «{id}».</p>
        <Link to="/regularizacion" style={{ color: C.blue, textDecoration: "none" }}>
          ← Ver todos los talleres
        </Link>
      </div>
    );
  }

  if (!perfil) {
    return (
      <div style={{
        minHeight: "100vh", background: C.bg, color: C.muted, fontFamily: font,
        display: "grid", placeItems: "center",
      }}>
        Cargando…
      </div>
    );
  }

  const esStaff = perfil.rol === "admin" || perfil.rol === "profesor";
  // El alumno escribe en su propio expediente; el staff no escribe nada.
  const alumnoId = esStaff ? null : perfil.uid;

  return (
    <div ref={contenedorRef} style={{
      height: "100vh", display: "flex", flexDirection: "column",
      background: C.bg, fontFamily: font,
    }}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 12, padding: "0 14px", height: 46, flexShrink: 0,
        borderBottom: `1px solid ${C.border}`, color: C.text,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
          <Link to="/regularizacion" style={{
            color: C.muted, textDecoration: "none", fontSize: 13, fontWeight: 600,
            padding: "6px 8px",
          }}>
            ← Salir
          </Link>
          <span style={{
            fontSize: 13.5, fontWeight: 700, whiteSpace: "nowrap",
            overflow: "hidden", textOverflow: "ellipsis",
          }}>
            {taller.icono} {taller.titulo}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <span style={{
            background: alumnoId ? C.green + "22" : C.surface,
            color: alumnoId ? C.green : C.muted,
            borderRadius: 99, padding: "4px 12px", fontSize: 12, fontWeight: 700,
            whiteSpace: "nowrap", maxWidth: 260,
            overflow: "hidden", textOverflow: "ellipsis",
          }}>
            {alumnoId ? (perfil.nombre || "Mi avance") : "Sin registrar"}
          </span>
          <button
            type="button"
            onClick={pantallaCompleta}
            title="Pantalla completa"
            style={{
              background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8,
              padding: "5px 10px", color: C.text, fontSize: 13,
              cursor: "pointer", fontFamily: font,
            }}
          >
            ⛶
          </button>
        </div>
      </div>

      <div style={{ flex: 1, minHeight: 0 }}>
        <TallerRunner taller={taller} alumnoId={alumnoId} />
      </div>
    </div>
  );
}
