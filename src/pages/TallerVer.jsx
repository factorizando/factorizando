// Reproductor de un taller de regularización: /regularizacion/:id
//
// Dos etapas: primero se elige a qué alumno se le registra la práctica (o se
// entra en modo libre, sin registro), luego el taller ocupa la pantalla. La
// barra superior es mínima a propósito: esto se proyecta frente al alumno.
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { buscarTaller } from "../data/talleres/talleresIndex.js";
import { etiquetaTema } from "../data/talleres/temas.js";
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

// Talleres de regularización: solo tiene sentido listar estos niveles.
const NIVELES_REGULARIZACION = ["primaria", "secundaria"];

function nombreAlumno(a) {
  return [a.nombre, a.apellidos].filter(Boolean).join(" ").trim() || "(sin nombre)";
}

export default function TallerVer() {
  const { id } = useParams();
  const taller = useMemo(() => buscarTaller(id), [id]);

  const [alumnos, setAlumnos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [filtro, setFiltro] = useState("");
  const [seleccion, setSeleccion] = useState(null); // { id, nombre } | { id: null } (modo libre)
  const contenedorRef = useRef(null);

  useEffect(() => {
    let cancelado = false;
    supabase
      .from("alumnos")
      .select("id, nombre, apellidos, nivel")
      .order("apellidos", { ascending: true })
      .then(({ data, error }) => {
        if (cancelado) return;
        if (error) console.error(error);
        setAlumnos(data || []);
        setCargando(false);
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

  // ── Etapa 1: elegir alumno ────────────────────────────────────────────────
  if (!seleccion) {
    const q = filtro.trim().toLowerCase();
    const candidatos = alumnos
      .filter((a) => NIVELES_REGULARIZACION.includes(a.nivel))
      .filter((a) => !q || nombreAlumno(a).toLowerCase().includes(q));

    return (
      <div style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: font }}>
        <main style={{ maxWidth: 620, margin: "0 auto", padding: "48px 24px 80px" }}>
          <Link to="/regularizacion" style={{
            color: C.muted, textDecoration: "none", fontSize: 13, fontWeight: 600,
          }}>
            ← Regularización
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: 14, margin: "22px 0 8px" }}>
            <span style={{ fontSize: 34, lineHeight: 1 }}>{taller.icono}</span>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700,
              fontSize: "clamp(24px, 4vw, 32px)", margin: 0,
            }}>
              {taller.titulo}
            </h1>
          </div>
          <p style={{ color: C.dim, fontSize: 14.5, lineHeight: 1.6, margin: "0 0 22px" }}>
            {taller.descripcion}
          </p>

          {/* Lo que se trabaja, para confirmar antes de proyectar que este
              taller es el de hoy. Los temas los declara el módulo del taller. */}
          {(taller.actividades || []).length > 0 && (
            <div style={{
              background: C.card, border: `1px solid ${C.border}`, borderRadius: 12,
              padding: "14px 16px", marginBottom: 30,
            }}>
              <div style={{
                fontSize: 11, fontWeight: 700, textTransform: "uppercase",
                letterSpacing: ".06em", color: C.muted, marginBottom: 10,
              }}>
                Lo que se trabaja
              </div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 9 }}>
                {taller.actividades.map((a) => (
                  <li key={a.id} style={{ fontSize: 13.5, lineHeight: 1.4 }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "baseline", flexWrap: "wrap" }}>
                      <span style={{ fontWeight: 600 }}>{a.nombre}</span>
                      <span style={{ color: C.muted, fontSize: 11 }}>{a.edades} años</span>
                    </div>
                    <div style={{ color: C.dim, fontSize: 12, marginTop: 2 }}>
                      {a.temas.map(etiquetaTema).join(" · ")}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <h2 style={{
            fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".07em",
            color: C.muted, margin: "0 0 12px",
          }}>
            ¿Con quién vas a trabajar?
          </h2>

          <input
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            placeholder="Buscar alumno…"
            style={{
              width: "100%", background: C.card, border: `1px solid ${C.border}`,
              borderRadius: 10, padding: "11px 14px", color: C.text,
              fontSize: 14, fontFamily: font, marginBottom: 12, outline: "none",
            }}
          />

          <div style={{
            border: `1px solid ${C.border}`, borderRadius: 12,
            maxHeight: 320, overflowY: "auto", background: C.card, marginBottom: 14,
          }}>
            {cargando ? (
              <p style={{ padding: "16px 18px", color: C.muted, fontSize: 13.5, margin: 0 }}>
                Cargando alumnos…
              </p>
            ) : candidatos.length === 0 ? (
              <p style={{ padding: "16px 18px", color: C.muted, fontSize: 13.5, margin: 0 }}>
                {alumnos.length === 0
                  ? "No hay alumnos registrados todavía."
                  : "Ningún alumno de primaria o secundaria coincide con la búsqueda."}
              </p>
            ) : (
              candidatos.map((a, i) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => setSeleccion({ id: a.id, nombre: nombreAlumno(a) })}
                  style={{
                    display: "flex", width: "100%", alignItems: "center",
                    justifyContent: "space-between", gap: 12,
                    background: "transparent", border: "none",
                    borderTop: i === 0 ? "none" : `1px solid ${C.border}`,
                    padding: "12px 16px", color: C.text, fontSize: 14,
                    fontFamily: font, cursor: "pointer", textAlign: "left",
                  }}
                >
                  <span>{nombreAlumno(a)}</span>
                  <span style={{
                    color: C.muted, fontSize: 11, fontWeight: 700,
                    textTransform: "capitalize", flexShrink: 0,
                  }}>{a.nivel}</span>
                </button>
              ))
            )}
          </div>

          <button
            type="button"
            onClick={() => setSeleccion({ id: null, nombre: null })}
            style={{
              background: "transparent", border: `1px dashed ${C.border}`,
              borderRadius: 10, padding: "11px 16px", color: C.muted,
              fontSize: 13.5, fontFamily: font, cursor: "pointer", width: "100%",
            }}
          >
            Practicar sin registrar avance
          </button>
        </main>
      </div>
    );
  }

  // ── Etapa 2: el taller ────────────────────────────────────────────────────
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
          <button
            type="button"
            onClick={() => setSeleccion(null)}
            style={{
              background: "transparent", border: "none", color: C.muted,
              fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: font,
              padding: "6px 8px",
            }}
          >
            ← Salir
          </button>
          <span style={{
            fontSize: 13.5, fontWeight: 700, whiteSpace: "nowrap",
            overflow: "hidden", textOverflow: "ellipsis",
          }}>
            {taller.icono} {taller.titulo}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <span style={{
            background: seleccion.id ? C.green + "22" : C.surface,
            color: seleccion.id ? C.green : C.muted,
            borderRadius: 99, padding: "4px 12px", fontSize: 12, fontWeight: 700,
            whiteSpace: "nowrap", maxWidth: 260,
            overflow: "hidden", textOverflow: "ellipsis",
          }}>
            {seleccion.id ? seleccion.nombre : "Sin registrar"}
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
        <TallerRunner taller={taller} alumnoId={seleccion.id} />
      </div>
    </div>
  );
}
