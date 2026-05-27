// Vista del alumno: entra un código de 4 caracteres y sigue la presentación
// en tiempo real. Requiere autenticación.
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase.js";
import { buscarPresentacion } from "../data/presentaciones/presentacionesIndex.js";
import { obtenerTema } from "../data/presentaciones/temas.jsx";
import SlideRenderer from "../components/SlideRenderer.jsx";

export default function PresentacionAlumno() {
  const [codigo, setCodigo] = useState("");
  const [sesion, setSesion] = useState(null);
  const [presentacion, setPresentacion] = useState(null);
  const [slideIdx, setSlideIdx] = useState(0);
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);
  const [sesionTerminada, setSesionTerminada] = useState(false);
  // Respuestas dadas: { [slideId]: opcionIdx }
  const [respuestas, setRespuestas] = useState({});
  const [resaltado, setResaltado] = useState(null);
  const [user, setUser] = useState(null);
  const [puntajeFinal, setPuntajeFinal] = useState(null);
  const canalRef = useRef(null);
  const savedRef = useRef(false);

  const tema = obtenerTema(presentacion?.materia);
  const slides = presentacion?.slides ?? [];
  const slide = slides[slideIdx] ?? slides[0];

  // Obtener usuario autenticado (ProtectedRoute ya garantiza que existe)
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user: u } }) => setUser(u));
  }, []);

  // Guardar puntaje en `resultados` al terminar la sesión
  useEffect(() => {
    if (!sesionTerminada || !user || !presentacion || savedRef.current) return;
    savedRef.current = true;

    const ejercicios = presentacion.slides.filter(s => s.tipo === "ejercicio");
    if (ejercicios.length === 0) return;

    const puntaje = ejercicios.filter(s => respuestas[s.id] === s.correcta).length;
    const total = ejercicios.length;
    setPuntajeFinal({ puntaje, total });

    // PostgrestFilterBuilder solo implementa .then(), no .catch(); usar async IIFE
    (async () => {
      await supabase.from("resultados").insert({
        user_id: user.id,
        cuestionario_id: "presentacion-" + presentacion.id,
        cuestionario_titulo: presentacion.titulo,
        puntaje,
        total,
      });
    })();
  }, [sesionTerminada]); // eslint-disable-line react-hooks/exhaustive-deps

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
    setPresentacion(buscarPresentacion(data.presentacion_id));
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

    // Canal broadcast para recibir resaltado del director
    const sala = supabase
      .channel(`sala-${sesion.id}`)
      .on("broadcast", { event: "resaltado" }, ({ payload }) => {
        setResaltado(payload.idx);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(canal);
      supabase.removeChannel(sala);
    };
  }, [sesion]);

  // Limpiar resaltado al cambiar de slide
  useEffect(() => {
    setResaltado(null);
  }, [slideIdx]);

  async function responder(opcionIdx) {
    if (!sesion || respuestas[slide.id] !== undefined) return;

    // Actualización optimista para respuesta inmediata en UI
    setRespuestas((prev) => ({ ...prev, [slide.id]: opcionIdx }));

    const { error } = await supabase.from("respuestas_presentacion").insert({
      sesion_id: sesion.id,
      slide_id: String(slide.id),
      opcion_elegida: opcionIdx
    });
    if (error) console.error("[Alumno] Error guardando respuesta:", error);
  }

  // ── Pantalla de ingreso de código ─────────────────────────────────────────
  if (!sesion) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: tema.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: tema.body,
          padding: "20px"
        }}
      >
        <div
          style={{
            background: tema.card,
            border: `1px solid ${tema.border}`,
            borderRadius: 16,
            padding: "48px 36px",
            maxWidth: 400,
            width: "100%",
            textAlign: "center"
          }}
        >
          <div
            style={{
              fontFamily: tema.mono,
              fontSize: 11,
              letterSpacing: "0.22em",
              color: tema.acento,
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
              color: tema.texto,
              marginBottom: 8,
              lineHeight: 1.15
            }}
          >
            Ingresa el código
          </h1>
          <p
            style={{
              color: tema.muted,
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
              border: `1px solid ${error ? "rgba(248,113,113,0.45)" : tema.border}`,
              borderRadius: 10,
              padding: "16px 20px",
              color: tema.texto,
              fontSize: 34,
              textAlign: "center",
              fontFamily: tema.mono,
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
              background: codigo.length === 4 ? tema.acento : "rgba(255,255,255,0.05)",
              border: "none",
              borderRadius: 10,
              padding: "15px",
              fontSize: 16,
              fontWeight: 700,
              color: codigo.length === 4 ? "#0d0d0f" : tema.muted,
              cursor: codigo.length === 4 && !cargando ? "pointer" : "default",
              fontFamily: "inherit",
              transition: "all 0.18s"
            }}
          >
            {cargando ? "Buscando…" : "Unirme →"}
          </button>

          <div style={{ marginTop: 24 }}>
            <Link
              to="/"
              style={{
                fontFamily: tema.mono,
                fontSize: 12,
                color: tema.muted,
                textDecoration: "none",
                letterSpacing: "0.08em",
                opacity: 0.7,
                transition: "opacity 0.15s"
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = "1"}
              onMouseLeave={e => e.currentTarget.style.opacity = "0.7"}
            >
              ← Página principal
            </Link>
          </div>
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
          background: tema.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: tema.body,
          textAlign: "center",
          padding: "32px"
        }}
      >
        <div>
          <div style={{ fontSize: 48, marginBottom: 20 }}>✓</div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 30,
              color: tema.texto,
              marginBottom: 12
            }}
          >
            Clase terminada
          </h2>
          <p style={{ color: tema.muted, fontSize: 15, lineHeight: 1.6, marginBottom: 24 }}>
            El maestro terminó la sesión. ¡Hasta la próxima!
          </p>
          {puntajeFinal && (
            <div
              style={{
                background: "rgba(0,0,0,0.35)",
                border: `1px solid ${tema.border}`,
                borderRadius: 14,
                padding: "22px 32px",
                display: "inline-block"
              }}
            >
              <div style={{ fontFamily: tema.mono, fontSize: 11, color: tema.acento, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}>
                Tu resultado
              </div>
              <div style={{ fontSize: 48, fontWeight: 700, color: tema.texto, lineHeight: 1, marginBottom: 6 }}>
                {puntajeFinal.puntaje}
                <span style={{ fontSize: 24, color: tema.muted, fontWeight: 400 }}>
                  /{puntajeFinal.total}
                </span>
              </div>
              <div style={{ fontSize: 22, color: puntajeFinal.puntaje / puntajeFinal.total >= 0.6 ? tema.verde : tema.rojo, fontWeight: 700 }}>
                {Math.round((puntajeFinal.puntaje / puntajeFinal.total) * 100)}%
              </div>
            </div>
          )}
          <div style={{ marginTop: 28 }}>
            <Link
              to="/"
              style={{
                fontFamily: tema.mono,
                fontSize: 12,
                color: tema.muted,
                textDecoration: "none",
                letterSpacing: "0.08em",
                opacity: 0.7,
                transition: "opacity 0.15s"
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = "1"}
              onMouseLeave={e => e.currentTarget.style.opacity = "0.7"}
            >
              ← Página principal
            </Link>
          </div>
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
        background: tema.bg,
        display: "flex",
        flexDirection: "column",
        fontFamily: tema.body,
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
          borderBottom: `1px solid ${tema.border}`,
          background: "rgba(0,0,0,0.45)",
          flexShrink: 0
        }}
      >
        <span
          style={{
            fontFamily: tema.mono,
            fontSize: 10.5,
            color: tema.muted,
            letterSpacing: "0.1em"
          }}
        >
          {presentacion?.titulo}
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
                    ? tema.acento
                    : i < slideIdx
                    ? tema.acentoOpaco
                    : "rgba(255,255,255,0.08)",
                transition: "background 0.3s"
              }}
            />
          ))}
        </div>

        <span
          style={{
            fontFamily: tema.mono,
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
          tema={tema}
          modo="alumno"
          respuestaDada={respuestas[slide.id] ?? null}
          onResponder={responder}
          resaltadoIdx={resaltado}
        />
      </div>

      {/* Indicador de espera (para slides que no son ejercicios) */}
      {slide.tipo !== "ejercicio" && (
        <div
          style={{
            padding: "10px 16px",
            borderTop: `1px solid ${tema.border}`,
            background: "rgba(0,0,0,0.3)",
            textAlign: "center",
            flexShrink: 0
          }}
        >
          <span
            style={{
              fontFamily: tema.mono,
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
