// Vista del maestro (director de la presentación).
// Crea sesiones, controla el slide actual y ve los votos en tiempo real.
import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../lib/supabase.js";
import { buscarPresentacion } from "../data/presentaciones/presentacionesIndex.js";
import { obtenerTema } from "../data/presentaciones/temas.jsx";
import SlideRenderer from "../components/SlideRenderer.jsx";
import AnotacionOverlay from "../components/AnotacionOverlay.jsx";
import PaletaSimbolos, { CARET } from "../components/PaletaSimbolos.jsx";

function generarCodigo() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from(
    { length: 4 },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
}

export default function PresentacionDirector() {
  const { id } = useParams();
  const PRESENTACION = buscarPresentacion(id);
  const tema = obtenerTema(PRESENTACION?.materia);

  const [sesion, setSesion] = useState(null);
  const [slideIdx, setSlideIdx] = useState(0);
  const [votos, setVotos] = useState({}); // { [slideId]: { [opcionIdx]: count } }
  const [votantes, setVotantes] = useState({}); // { [slideId]: [ { userId, opcion } ] }
  const [perfiles, setPerfiles] = useState({}); // { [userId]: nombre }
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");
  const [resaltado, setResaltado] = useState(null);
  const [expandido, setExpandido] = useState({}); // { [itemIdx]: bool } tarjetas desplegadas
  const [anotacion, setAnotacion] = useState("");
  const canalRef = useRef(null);
  const salaRef = useRef(null);
  const anotacionInputRef = useRef(null);
  const highlightInicialRef = useRef(null); // tarjeta a resaltar al aterrizar en un slide nuevo

  if (!PRESENTACION) {
    return (
      <div style={{ minHeight: "100vh", background: tema.bg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: tema.body }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: tema.muted, fontSize: 16, marginBottom: 20 }}>Presentación no encontrada.</p>
          <Link to="/admin" style={{ color: tema.acento, fontSize: 14 }}>← Volver al panel</Link>
        </div>
      </div>
    );
  }

  const slides = PRESENTACION.slides;
  const slide = slides[slideIdx];
  const slideKey = String(slide.id);
  const totalVotosSlide =
    slide.tipo === "ejercicio"
      ? Object.values(votos[slideKey] || {}).reduce((a, b) => a + b, 0)
      : 0;

  // Navegación con teclado:
  //   ↑/↓  recorren las tarjetas del slide; al pasar el borde cruzan de diapositiva (flujo continuo).
  //   →/←  despliegan/contraen la tarjeta resaltada si es desplegable; si no, cambian de slide.
  //   AvPág/RePág saltan de diapositiva directo (apuntador).
  useEffect(() => {
    function onKey(e) {
      const t = e.target;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      const n = numTarjetas(slide);
      const cur = resaltado;
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          if (n > 0 && (cur === null || cur < n - 1)) emitirResaltado(cur === null ? 0 : cur + 1);
          else avanzarSlide(1);
          break;
        case "ArrowUp":
          e.preventDefault();
          if (n > 0 && cur !== null && cur > 0) emitirResaltado(cur - 1);
          else avanzarSlide(-1);
          break;
        case "ArrowRight":
          e.preventDefault();
          if (tarjetaExpandible(slide, cur) && !expandido[cur]) expandir(cur, true);
          else avanzarSlide(1);
          break;
        case "ArrowLeft":
          e.preventDefault();
          if (tarjetaExpandible(slide, cur) && expandido[cur]) expandir(cur, false);
          else avanzarSlide(-1);
          break;
        case "PageDown":
          e.preventDefault();
          avanzarSlide(1);
          break;
        case "PageUp":
          e.preventDefault();
          avanzarSlide(-1);
          break;
        default:
          break;
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slide, slideIdx, slides.length, resaltado, expandido, sesion]);

  // Suscripción a votos cuando hay sesión activa
  useEffect(() => {
    if (!sesion) return;

    // Cargar nombres de los alumnos (para la lista de respuestas en vivo)
    supabase.rpc("get_all_profiles").then(({ data, error }) => {
      if (error) {
        console.error("[Director] Error cargando perfiles:", error);
        return;
      }
      const map = {};
      (data || []).forEach((p) => {
        map[p.id] = p.nombre || p.email || String(p.id).slice(0, 8);
      });
      setPerfiles(map);
    });

    // Cargar votos existentes (por si el director recarga la página)
    supabase
      .from("respuestas_presentacion")
      .select("slide_id, opcion_elegida, user_id")
      .eq("sesion_id", sesion.id)
      .then(({ data, error }) => {
        if (error) {
          console.error("[Director] Error cargando votos:", error);
          return;
        }
        if (!data) return;
        const agg = {};
        const det = {};
        data.forEach(({ slide_id, opcion_elegida, user_id }) => {
          const key = String(slide_id);
          if (!agg[key]) agg[key] = {};
          agg[key][opcion_elegida] = (agg[key][opcion_elegida] || 0) + 1;
          if (!det[key]) det[key] = [];
          det[key].push({ userId: user_id, opcion: opcion_elegida });
        });
        setVotos(agg);
        setVotantes(det);
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
          const key = String(payload.new.slide_id);
          const opcion = payload.new.opcion_elegida;
          const userId = payload.new.user_id;
          setVotos((prev) => ({
            ...prev,
            [key]: {
              ...(prev[key] || {}),
              [opcion]: ((prev[key] || {})[opcion] || 0) + 1
            }
          }));
          setVotantes((prev) => ({
            ...prev,
            [key]: [...(prev[key] || []), { userId, opcion }]
          }));
        }
      )
      .subscribe();

    canalRef.current = canal;

    // Canal broadcast para resaltado de elementos
    const sala = supabase.channel(`sala-${sesion.id}`).subscribe();
    salaRef.current = sala;

    return () => {
      supabase.removeChannel(canal);
      supabase.removeChannel(sala);
    };
  }, [sesion]);

  // Limpiar tarjetas desplegadas al cambiar de slide; el resaltado toma el valor
  // pendiente (primera/última tarjeta) si venimos del flujo continuo con flechas.
  useEffect(() => {
    setResaltado(highlightInicialRef.current);
    highlightInicialRef.current = null;
    setExpandido({});
  }, [slideIdx]);

  // Nº de tarjetas navegables del slide según su tipo.
  function numTarjetas(s) {
    if (!s) return 0;
    if (Array.isArray(s.items)) return s.items.length;
    if (Array.isArray(s.bloques)) return s.bloques.length;
    if (Array.isArray(s.puntos)) return s.puntos.length;
    return 0;
  }
  // ¿La tarjeta de índice idx es desplegable? (solo los items de tipo concepto lo son)
  function tarjetaExpandible(s, idx) {
    return !!(s && idx != null && Array.isArray(s.items) && s.items[idx] && s.items[idx].expandable);
  }

  function emitirResaltado(nuevo) {
    setResaltado(nuevo);
    salaRef.current?.send({
      type: "broadcast",
      event: "resaltado",
      payload: { idx: nuevo },
    });
  }

  function resaltar(idx) {
    emitirResaltado(resaltado === idx ? null : idx);
  }

  // Cruza de diapositiva (dir = ±1) dejando resaltada la primera/última tarjeta.
  function avanzarSlide(dir) {
    const nuevo = slideIdx + dir;
    if (nuevo < 0 || nuevo >= slides.length) return;
    const m = numTarjetas(slides[nuevo]);
    highlightInicialRef.current = m > 0 ? (dir > 0 ? 0 : m - 1) : null;
    irASlide(nuevo);
    if (highlightInicialRef.current !== null) emitirResaltado(highlightInicialRef.current);
  }

  // Desplegar/plegar una tarjeta expandible y avisar a los alumnos.
  function expandir(idx, abierto) {
    setExpandido((prev) => ({ ...prev, [idx]: abierto }));
    salaRef.current?.send({
      type: "broadcast",
      event: "expandir",
      payload: { idx, abierto },
    });
  }

  // Anotación en vivo: muestra el texto en la diapositiva y lo envía a los alumnos.
  function emitirAnotacion(texto) {
    setAnotacion(texto);
    salaRef.current?.send({
      type: "broadcast",
      event: "anotacion",
      payload: { texto },
    });
  }

  // Inserta el LaTeX de un símbolo en la posición del cursor. Si el cursor no
  // está dentro de una zona $...$, envuelve el símbolo en $ $ para que se
  // renderice. El marcador CARET indica dónde dejar el cursor en plantillas.
  function insertarEnAnotacion(ins) {
    const el = anotacionInputRef.current;
    const inicio = el ? el.selectionStart : anotacion.length;
    const fin = el ? el.selectionEnd : anotacion.length;
    const antes = anotacion.slice(0, inicio);
    const despues = anotacion.slice(fin);
    const dentroMath = (antes.match(/\$/g) || []).length % 2 === 1;

    let carga = dentroMath ? ins : "$" + ins + "$";
    let caretRel;
    const marca = carga.indexOf(CARET);
    if (marca >= 0) {
      carga = carga.slice(0, marca) + carga.slice(marca + 1);
      caretRel = marca;
    } else {
      // tras el símbolo; si añadimos $ de cierre, deja el cursor antes de él.
      caretRel = dentroMath ? carga.length : carga.length - 1;
    }

    const pos = inicio + caretRel;
    emitirAnotacion(antes + carga + despues);
    // En el siguiente frame el input ya tiene el valor nuevo: reubica el cursor.
    requestAnimationFrame(() => {
      const el2 = anotacionInputRef.current;
      if (el2) {
        el2.focus();
        el2.setSelectionRange(pos, pos);
      }
    });
  }

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
    setVotantes({});
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
    setVotantes({});
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
          background: tema.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: tema.body
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 480, padding: "32px 24px" }}>
          <div
            style={{
              fontFamily: tema.mono,
              fontSize: 11,
              letterSpacing: "0.22em",
              color: tema.acento,
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
              color: tema.texto,
              marginBottom: 10,
              lineHeight: 1.1
            }}
          >
            {PRESENTACION.titulo}
          </h1>
          <p
            style={{
              color: tema.muted,
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
                color: tema.rojo,
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
              background: tema.acento,
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

          <div style={{ marginTop: 24 }}>
            <Link
              to="/admin"
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
              ← Panel de administrador
            </Link>
          </div>
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
        background: tema.bg,
        display: "flex",
        flexDirection: "column",
        fontFamily: tema.body,
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
          borderBottom: `1px solid ${tema.border}`,
          background: "rgba(0,0,0,0.5)",
          flexShrink: 0,
          gap: 16
        }}
      >
        <span
          style={{
            fontFamily: tema.mono,
            fontSize: 11,
            color: tema.muted,
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
            background: tema.acentoSuave,
            border: `1px solid ${tema.acentoBorde}`,
            borderRadius: 8,
            padding: "4px 16px"
          }}
        >
          <span style={{ fontSize: 12, color: tema.muted }}>Código:</span>
          <span
            style={{
              fontFamily: tema.mono,
              fontSize: 24,
              fontWeight: 700,
              color: tema.acento,
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
              fontFamily: tema.mono,
              fontSize: 12,
              color: tema.muted
            }}
          >
            {slideIdx + 1} / {slides.length}
          </span>
          <button
            onClick={terminarSesion}
            style={{
              background: "rgba(248,113,113,0.1)",
              border: "1px solid rgba(248,113,113,0.28)",
              color: tema.rojo,
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
          tema={tema}
          modo="director"
          votos={votos[slideKey]}
          votantes={votantes[slideKey]}
          perfiles={perfiles}
          totalVotos={totalVotosSlide}
          resaltadoIdx={resaltado}
          onResaltar={resaltar}
          expandidos={expandido}
          onExpandir={expandir}
        />
        <AnotacionOverlay texto={anotacion} tema={tema} />
      </div>

      {/* Barra de anotación en vivo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "0 24px",
          height: 46,
          borderTop: `1px solid ${tema.border}`,
          background: "rgba(0,0,0,0.25)",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontFamily: tema.mono,
            fontSize: 11,
            color: tema.muted,
            letterSpacing: "0.08em",
            whiteSpace: "nowrap",
          }}
        >
          ✍ En pantalla
        </span>
        <input
          ref={anotacionInputRef}
          value={anotacion}
          onChange={(e) => emitirAnotacion(e.target.value)}
          placeholder="Escribe una palabra u oración para mostrarla en la diapositiva…"
          style={{
            flex: 1,
            minWidth: 0,
            background: "rgba(255,255,255,0.05)",
            border: `1px solid ${tema.border}`,
            borderRadius: 8,
            padding: "7px 12px",
            color: tema.texto,
            fontSize: 14,
            fontFamily: "inherit",
            outline: "none",
          }}
        />
        <PaletaSimbolos tema={tema} onInsert={insertarEnAnotacion} />
        {anotacion && (
          <button
            onClick={() => emitirAnotacion("")}
            style={{
              flexShrink: 0,
              background: "transparent",
              border: `1px solid ${tema.border}`,
              color: tema.muted,
              borderRadius: 6,
              padding: "5px 14px",
              fontSize: 13,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Limpiar
          </button>
        )}
      </div>

      {/* Barra inferior: navegación */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          height: 60,
          borderTop: `1px solid ${tema.border}`,
          background: "rgba(0,0,0,0.4)",
          flexShrink: 0,
          gap: 16
        }}
      >
        <button
          onClick={() => irASlide(slideIdx - 1)}
          disabled={slideIdx === 0}
          style={{
            flexShrink: 0,
            background: "transparent",
            border: `1px solid ${tema.border}`,
            color: slideIdx === 0 ? "#2a2820" : tema.texto,
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
        <div style={{ display: "flex", gap: 5, alignItems: "center", flex: 1, minWidth: 0, overflow: "hidden", justifyContent: "center" }}>
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
                    ? tema.acento
                    : i < slideIdx
                    ? tema.acentoOpaco
                    : "rgba(255,255,255,0.09)",
                border:
                  s.tipo === "ejercicio" && i !== slideIdx
                    ? `1px solid ${tema.acentoBorde}`
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
            flexShrink: 0,
            background:
              slideIdx < slides.length - 1 ? tema.acento : "transparent",
            border: `1px solid ${
              slideIdx < slides.length - 1 ? tema.acento : tema.border
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
