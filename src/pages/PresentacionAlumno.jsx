// Vista del alumno: entra un código de 4 caracteres y sigue la presentación
// en tiempo real. No requiere autenticación.
import { useState, useEffect, useRef } from "react";
import { supabase } from "../lib/supabase.js";
import { PRESENTACION } from "../data/presentaciones/semejanza-triangulos.js";
import SlideRenderer from "../components/SlideRenderer.jsx";

const C = {
  bg: "#07080b",
  border: "rgba(255,255,255,0.08)",
  gold: "#f5c842",
  text: "#f0ece3",
  muted: "#6a6560"
};

export default function PresentacionAlumno() {
  const [codigo, setCodigo] = useState("");
  const [sesion, setSesion] = useState(null);
  const [slideIdx, setSlideIdx] = useState(0);
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);
  const [sesionTerminada, setSesionTerminada] = useState(false);
  // Respuestas dadas: { [slideId]: opcionIdx }
  const [respuestas, setRespuestas] = useState({});
  const canalRef = useRef(null);

  const slides = PRESENTACION.slides;
  const slide = slides[slideIdx] ?? slides[0];

  async function unirse() {
    if (codigo.length !== 4) {
      setError("El código tiene 4 caracteres. Revisa con tu maestro.");
      return;
    }
    setCargando(true);
    setError("");

    const { data, error: err } = await supabase
      .from("sesiones_presentacion")
      .select()
      .eq("codigo", codigo.toUpperCase())
      .eq("activa", true)
      .single();

    setCargando(false);

    if (err || !data) {
      setError("Código no encontrado o sesión ya terminada. Verifica con tu maestro.");
      return;
    }

    setSesion(data);
    setSlideIdx(data.slide_actual);
  }

  // Suscripción Realtime: seguir el slide del maestro
  useEffect(() => {
    if (!sesion) return;

    const canal = supabase
      .channel(`alumno-${sesion.id}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "sesiones_presentacion",
          filter: `id=eq.${sesion.id}`
        },
        (payload) => {
          if (payload.new.activa === false) {
            setSesionTerminada(true);
          } else {
            setSlideIdx(payload.new.slide_actual);
          }
        }
      )
      .subscribe();

    canalRef.current = canal;
    return () => {
      supabase.removeChannel(canal);
    };
  }, [sesion]);

  async function responder(opcionIdx) {
    if (!sesion || respuestas[slide.id] !== undefined) return;

    // Actualización optimista para respuesta inmediata en UI
    setRespuestas((prev) => ({ ...prev, [slide.id]: opcionIdx }));

    await supabase.from("respuestas_presentacion").insert({
      sesion_id: sesion.id,
      slide_id: slide.id,
      opcion_elegida: opcionIdx
    });
  }

  // ── Pantalla de ingreso de código ─────────────────────────────────────────
  if (!sesion) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: C.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'DM Sans', sans-serif",
          padding: "20px"
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: `1px solid ${C.border}`,
            borderRadius: 16,
            padding: "48px 36px",
            maxWidth: 400,
            width: "100%",
            textAlign: "center"
          }}
        >
          <div
            style={{
              fontFamily: "IBM Plex Mono, monospace",
              fontSize: 11,
              letterSpacing: "0.22em",
              color: C.gold,
              textTransform: "uppercase",
              marginBottom: 18,
              opacity: 0.8
            }}
          >
            Unirse a clase
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 30,
              color: C.text,
              marginBottom: 8,
              lineHeight: 1.15
            }}
          >
            Ingresa el código
          </h1>
          <p
            style={{
              color: C.muted,
              fontSize: 15,
              marginBottom: 32,
              lineHeight: 1.6
            }}
          >
            Tu maestro tiene el código en pantalla. Son 4 caracteres.
          </p>

          <input
            type="text"
            value={codigo}
            onChange={(e) => {
              setCodigo(e.target.value.toUpperCase().slice(0, 4));
              setError("");
            }}
            onKeyDown={(e) => e.key === "Enter" && unirse()}
            placeholder="A B C D"
            maxLength={4}
            autoFocus
            style={{
              width: "100%",
              background: "rgba(255,255,255,0.05)",
              border: `1px solid ${error ? "rgba(248,113,113,0.45)" : C.border}`,
              borderRadius: 10,
              padding: "16px 20px",
              color: C.text,
              fontSize: 34,
              textAlign: "center",
              fontFamily: "IBM Plex Mono, monospace",
              letterSpacing: "0.3em",
              fontWeight: 700,
              outline: "none",
              boxSizing: "border-box",
              marginBottom: 10
            }}
          />

          {error ? (
            <p
              style={{ color: "#f87171", fontSize: 13, marginBottom: 18, lineHeight: 1.5 }}
            >
              {error}
            </p>
          ) : (
            <div style={{ height: 18 }} />
          )}

          <button
            onClick={unirse}
            disabled={cargando || codigo.length !== 4}
            style={{
              width: "100%",
              background: codigo.length === 4 ? C.gold : "rgba(255,255,255,0.05)",
              border: "none",
              borderRadius: 10,
              padding: "15px",
              fontSize: 16,
              fontWeight: 700,
              color: codigo.length === 4 ? "#0d0d0f" : C.muted,
              cursor: codigo.length === 4 && !cargando ? "pointer" : "default",
              fontFamily: "inherit",
              transition: "all 0.18s"
            }}
          >
            {cargando ? "Buscando…" : "Unirme →"}
          </button>
        </div>
      </div>
    );
  }

  // ── Sesión terminada por el maestro ───────────────────────────────────────
  if (sesionTerminada) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: C.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'DM Sans', sans-serif",
          textAlign: "center",
          padding: "32px"
        }}
      >
        <div>
          <div
            style={{
              fontSize: 48,
              marginBottom: 20
            }}
          >
            ✓
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 30,
              color: C.text,
              marginBottom: 12
            }}
          >
            Clase terminada
          </h2>
          <p style={{ color: C.muted, fontSize: 15, lineHeight: 1.6 }}>
            El maestro terminó la sesión. ¡Hasta la próxima!
          </p>
        </div>
      </div>
    );
  }

  // ── Vista sincronizada con el maestro ─────────────────────────────────────
  return (
    <div
      style={{
        minHeight: "100vh",
        height: "100vh",
        background: C.bg,
        display: "flex",
        flexDirection: "column",
        fontFamily: "'DM Sans', sans-serif",
        overflow: "hidden"
      }}
    >
      {/* Barra superior mínima */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
          height: 44,
          borderBottom: `1px solid ${C.border}`,
          background: "rgba(0,0,0,0.45)",
          flexShrink: 0
        }}
      >
        <span
          style={{
            fontFamily: "IBM Plex Mono, monospace",
            fontSize: 10.5,
            color: C.muted,
            letterSpacing: "0.1em"
          }}
        >
          {PRESENTACION.titulo}
        </span>

        {/* Progreso por puntos */}
        <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
          {slides.map((_, i) => (
            <div
              key={i}
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background:
                  i === slideIdx
                    ? C.gold
                    : i < slideIdx
                    ? "rgba(245,200,66,0.28)"
                    : "rgba(255,255,255,0.08)",
                transition: "background 0.3s"
              }}
            />
          ))}
        </div>

        <span
          style={{
            fontFamily: "IBM Plex Mono, monospace",
            fontSize: 10.5,
            color: "#3a3830"
          }}
        >
          {slideIdx + 1}/{slides.length}
        </span>
      </div>

      {/* Diapositiva actual */}
      <div style={{ flex: 1, overflow: "hidden" }}>
        <SlideRenderer
          slide={slide}
          modo="alumno"
          respuestaDada={respuestas[slide.id] ?? null}
          onResponder={responder}
        />
      </div>

      {/* Indicador de espera (para slides que no son ejercicios) */}
      {slide.tipo !== "ejercicio" && (
        <div
          style={{
            padding: "10px 16px",
            borderTop: `1px solid ${C.border}`,
            background: "rgba(0,0,0,0.3)",
            textAlign: "center",
            flexShrink: 0
          }}
        >
          <span
            style={{
              fontFamily: "IBM Plex Mono, monospace",
              fontSize: 10,
              color: "#2a2820",
              letterSpacing: "0.18em",
              textTransform: "uppercase"
            }}
          >
            · · · esperando al maestro · · ·
          </span>
        </div>
      )}
    </div>
  );
}
