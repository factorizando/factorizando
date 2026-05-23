// Vista del maestro (director de la presentación).
// Crea sesiones, controla el slide actual y ve los votos en tiempo real.
import { useState, useEffect, useRef } from "react";
import { supabase } from "../lib/supabase.js";
import { PRESENTACION } from "../data/presentaciones/semejanza-triangulos.js";
import SlideRenderer from "../components/SlideRenderer.jsx";

const C = {
  bg: "#07080b",
  border: "rgba(255,255,255,0.08)",
  gold: "#f5c842",
  blue: "#3b9eff",
  text: "#f0ece3",
  muted: "#6a6560",
  red: "#f87171"
};

function generarCodigo() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from(
    { length: 4 },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
}

export default function PresentacionDirector() {
  const [sesion, setSesion] = useState(null);
  const [slideIdx, setSlideIdx] = useState(0);
  const [votos, setVotos] = useState({}); // { [slideId]: { [opcionIdx]: count } }
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");
  const canalRef = useRef(null);

  const slides = PRESENTACION.slides;
  const slide = slides[slideIdx];
  const totalVotosSlide =
    slide.tipo === "ejercicio"
      ? Object.values(votos[slide.id] || {}).reduce((a, b) => a + b, 0)
      : 0;

  // Suscripción a votos cuando hay sesión activa
  useEffect(() => {
    if (!sesion) return;

    // Cargar votos existentes (por si el director recarga la página)
    supabase
      .from("respuestas_presentacion")
      .select("slide_id, opcion_elegida")
      .eq("sesion_id", sesion.id)
      .then(({ data }) => {
        if (!data) return;
        const agg = {};
        data.forEach(({ slide_id, opcion_elegida }) => {
          if (!agg[slide_id]) agg[slide_id] = {};
          agg[slide_id][opcion_elegida] =
            (agg[slide_id][opcion_elegida] || 0) + 1;
        });
        setVotos(agg);
      });

    // Suscripción Realtime a nuevos votos
    const canal = supabase
      .channel(`votos-${sesion.id}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "respuestas_presentacion",
          filter: `sesion_id=eq.${sesion.id}`
        },
        (payload) => {
          const { slide_id, opcion_elegida } = payload.new;
          setVotos((prev) => ({
            ...prev,
            [slide_id]: {
              ...(prev[slide_id] || {}),
              [opcion_elegida]:
                ((prev[slide_id] || {})[opcion_elegida] || 0) + 1
            }
          }));
        }
      )
      .subscribe();

    canalRef.current = canal;
    return () => {
      supabase.removeChannel(canal);
    };
  }, [sesion]);

  async function iniciarSesion() {
    setCargando(true);
    setError("");
    const codigo = generarCodigo();
    const { data, error: err } = await supabase
      .from("sesiones_presentacion")
      .insert({
        codigo,
        presentacion_id: PRESENTACION.id,
        slide_actual: 0,
        activa: true
      })
      .select()
      .single();
    setCargando(false);
    if (err) {
      setError("No se pudo crear la sesión. ¿Estás autenticado?");
      return;
    }
    setSesion(data);
    setSlideIdx(0);
    setVotos({});
  }

  async function terminarSesion() {
    if (!sesion) return;
    await supabase
      .from("sesiones_presentacion")
      .update({ activa: false })
      .eq("id", sesion.id);
    setSesion(null);
    setSlideIdx(0);
    setVotos({});
  }

  async function irASlide(nuevoIdx) {
    if (nuevoIdx < 0 || nuevoIdx >= slides.length) return;
    setSlideIdx(nuevoIdx);
    if (sesion) {
      await supabase
        .from("sesiones_presentacion")
        .update({ slide_actual: nuevoIdx })
        .eq("id", sesion.id);
    }
  }

  // ── Sin sesión activa ─────────────────────────────────────────────────────
  if (!sesion) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: C.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'DM Sans', sans-serif"
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 480, padding: "32px 24px" }}>
          <div
            style={{
              fontFamily: "IBM Plex Mono, monospace",
              fontSize: 11,
              letterSpacing: "0.22em",
              color: C.gold,
              textTransform: "uppercase",
              marginBottom: 20,
              opacity: 0.8
            }}
          >
            Modo Director
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 42,
              color: C.text,
              marginBottom: 10,
              lineHeight: 1.1
            }}
          >
            {PRESENTACION.titulo}
          </h1>
          <p
            style={{
              color: C.muted,
              fontSize: 16,
              marginBottom: 12,
              lineHeight: 1.6
            }}
          >
            {slides.length} diapositivas ·{" "}
            {slides.filter((s) => s.tipo === "ejercicio").length} ejercicios
            interactivos
          </p>
          <p style={{ color: "#3a3830", fontSize: 13, marginBottom: 36 }}>
            Los alumnos se unen en <strong style={{ color: "#5a5550" }}>/clase</strong> con el código que aparecerá en pantalla.
          </p>

          {error && (
            <p
              style={{
                color: C.red,
                fontSize: 14,
                marginBottom: 18,
                background: "rgba(248,113,113,0.08)",
                border: "1px solid rgba(248,113,113,0.2)",
                borderRadius: 8,
                padding: "10px 16px"
              }}
            >
              {error}
            </p>
          )}

          <button
            onClick={iniciarSesion}
            disabled={cargando}
            style={{
              background: C.gold,
              color: "#0d0d0f",
              border: "none",
              borderRadius: 10,
              padding: "14px 44px",
              fontSize: 16,
              fontWeight: 700,
              cursor: cargando ? "default" : "pointer",
              fontFamily: "inherit",
              opacity: cargando ? 0.7 : 1,
              transition: "opacity 0.2s"
            }}
          >
            {cargando ? "Iniciando…" : "Iniciar sesión"}
          </button>
        </div>
      </div>
    );
  }

  // ── Sesión activa: vista completa ─────────────────────────────────────────
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
      {/* Barra superior */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          height: 52,
          borderBottom: `1px solid ${C.border}`,
          background: "rgba(0,0,0,0.5)",
          flexShrink: 0,
          gap: 16
        }}
      >
        <span
          style={{
            fontFamily: "IBM Plex Mono, monospace",
            fontSize: 11,
            color: C.muted,
            letterSpacing: "0.1em",
            whiteSpace: "nowrap"
          }}
        >
          {PRESENTACION.titulo}
        </span>

        {/* Código de sesión — lo más importante en pantalla */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(245,200,66,0.08)",
            border: "1px solid rgba(245,200,66,0.2)",
            borderRadius: 8,
            padding: "4px 16px"
          }}
        >
          <span style={{ fontSize: 12, color: C.muted }}>Código:</span>
          <span
            style={{
              fontFamily: "IBM Plex Mono, monospace",
              fontSize: 24,
              fontWeight: 700,
              color: C.gold,
              letterSpacing: "0.18em"
            }}
          >
            {sesion.codigo}
          </span>
          <span style={{ fontSize: 11, color: "#3a3830" }}>→ /clase</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span
            style={{
              fontFamily: "IBM Plex Mono, monospace",
              fontSize: 12,
              color: C.muted
            }}
          >
            {slideIdx + 1} / {slides.length}
          </span>
          <button
            onClick={terminarSesion}
            style={{
              background: "rgba(248,113,113,0.1)",
              border: "1px solid rgba(248,113,113,0.28)",
              color: C.red,
              borderRadius: 6,
              padding: "5px 14px",
              fontSize: 13,
              cursor: "pointer",
              fontFamily: "inherit"
            }}
          >
            Terminar
          </button>
        </div>
      </div>

      {/* Área de la diapositiva */}
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
        <SlideRenderer
          slide={slide}
          modo="director"
          votos={votos[slide.id]}
          totalVotos={totalVotosSlide}
        />
      </div>

      {/* Barra inferior: navegación */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 24px",
          height: 60,
          borderTop: `1px solid ${C.border}`,
          background: "rgba(0,0,0,0.4)",
          flexShrink: 0,
          gap: 20
        }}
      >
        <button
          onClick={() => irASlide(slideIdx - 1)}
          disabled={slideIdx === 0}
          style={{
            background: "transparent",
            border: `1px solid ${C.border}`,
            color: slideIdx === 0 ? "#2a2820" : C.text,
            borderRadius: 8,
            padding: "7px 22px",
            fontSize: 14,
            cursor: slideIdx === 0 ? "default" : "pointer",
            fontFamily: "inherit",
            transition: "all 0.15s"
          }}
        >
          ← Anterior
        </button>

        {/* Puntos de progreso */}
        <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => irASlide(i)}
              title={`${i + 1}. ${s.titulo || s.etiqueta || s.tipo}`}
              style={{
                width: i === slideIdx ? 22 : 7,
                height: 7,
                borderRadius: 4,
                background:
                  i === slideIdx
                    ? C.gold
                    : i < slideIdx
                    ? "rgba(245,200,66,0.28)"
                    : "rgba(255,255,255,0.09)",
                border:
                  s.tipo === "ejercicio" && i !== slideIdx
                    ? `1px solid rgba(245,200,66,0.2)`
                    : "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.22s"
              }}
            />
          ))}
        </div>

        <button
          onClick={() => irASlide(slideIdx + 1)}
          disabled={slideIdx === slides.length - 1}
          style={{
            background:
              slideIdx < slides.length - 1 ? C.gold : "transparent",
            border: `1px solid ${
              slideIdx < slides.length - 1 ? C.gold : C.border
            }`,
            color:
              slideIdx < slides.length - 1 ? "#0d0d0f" : "#2a2820",
            borderRadius: 8,
            padding: "7px 22px",
            fontSize: 14,
            fontWeight: slideIdx < slides.length - 1 ? 700 : 400,
            cursor:
              slideIdx === slides.length - 1 ? "default" : "pointer",
            fontFamily: "inherit",
            transition: "all 0.15s"
          }}
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
}
