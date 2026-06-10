// Vista de repaso autónomo: el alumno navega la presentación a su propio ritmo.
// No requiere sesión activa ni código. Respuestas se guardan solo localmente.
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { buscarPresentacion } from "../data/presentaciones/presentacionesIndex.js";
import { obtenerTema } from "../data/presentaciones/temas.jsx";
import SlideRenderer from "../components/SlideRenderer.jsx";

export default function PresentacionVer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const PRESENTACION = buscarPresentacion(id);
  const tema = obtenerTema(PRESENTACION?.materia);

  const [slideIdx, setSlideIdx] = useState(0);
  const [respuestas, setRespuestas] = useState({});
  const [resaltado, setResaltado] = useState(null);
  const [expandido, setExpandido] = useState({});
  const highlightInicialRef = useRef(null);

  const slides = PRESENTACION?.slides ?? [];
  const slide = slides[slideIdx];

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
  function toggleExpandir(idx, abierto) {
    setExpandido(prev => ({ ...prev, [idx]: abierto }));
  }
  // Cruza de diapositiva (dir = ±1) dejando resaltada la primera/última tarjeta.
  function avanzarSlide(dir) {
    const nuevo = slideIdx + dir;
    if (nuevo < 0 || nuevo >= slides.length) return;
    const m = numTarjetas(slides[nuevo]);
    highlightInicialRef.current = m > 0 ? (dir > 0 ? 0 : m - 1) : null;
    setSlideIdx(nuevo);
  }

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
          if (n > 0 && (cur === null || cur < n - 1)) setResaltado(cur === null ? 0 : cur + 1);
          else avanzarSlide(1);
          break;
        case "ArrowUp":
          e.preventDefault();
          if (n > 0 && cur !== null && cur > 0) setResaltado(cur - 1);
          else avanzarSlide(-1);
          break;
        case "ArrowRight":
          e.preventDefault();
          if (tarjetaExpandible(slide, cur) && !expandido[cur]) toggleExpandir(cur, true);
          else avanzarSlide(1);
          break;
        case "ArrowLeft":
          e.preventDefault();
          if (tarjetaExpandible(slide, cur) && expandido[cur]) toggleExpandir(cur, false);
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
  }, [slide, slideIdx, slides.length, resaltado, expandido]);

  // Al cambiar de slide: limpiar despliegues y tomar el resaltado inicial pendiente.
  useEffect(() => {
    setResaltado(highlightInicialRef.current);
    highlightInicialRef.current = null;
    setExpandido({});
  }, [slideIdx]);

  if (!PRESENTACION) {
    return (
      <div style={{ minHeight: "100vh", background: "#0e0f11", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#6b6860", fontSize: 16, marginBottom: 20 }}>Presentación no encontrada.</p>
          <button onClick={() => navigate(-1)} style={{ background: "none", border: "none", color: "#3b9eff", fontSize: 14, cursor: "pointer" }}>
            ← Volver
          </button>
        </div>
      </div>
    );
  }

  function irASlide(idx) {
    if (idx >= 0 && idx < slides.length) setSlideIdx(idx);
  }

  function responder(opcionIdx) {
    const key = String(slide.id);
    if (respuestas[key] !== undefined) return;
    setRespuestas(prev => ({ ...prev, [key]: opcionIdx }));
  }

  const respuestaDada = slide ? (respuestas[String(slide.id)] ?? null) : null;

  return (
    <div style={{ minHeight: "100vh", height: "100vh", background: tema.bg, display: "flex", flexDirection: "column", fontFamily: tema.body, overflow: "hidden" }}>

      {/* Barra superior */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", height: 52, borderBottom: `1px solid ${tema.border}`, background: "rgba(0,0,0,0.5)", flexShrink: 0, gap: 16 }}>
        <span style={{ fontFamily: tema.mono, fontSize: 11, color: tema.muted, letterSpacing: "0.1em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {PRESENTACION.titulo}
        </span>
        <span style={{ fontFamily: tema.mono, fontSize: 12, color: tema.muted, flexShrink: 0 }}>
          {slideIdx + 1} / {slides.length}
        </span>
        <button
          onClick={() => navigate(-1)}
          style={{ background: "none", border: "none", fontFamily: tema.mono, fontSize: 11, color: tema.muted, cursor: "pointer", letterSpacing: "0.08em", opacity: 0.7, flexShrink: 0, transition: "opacity 0.15s" }}
          onMouseEnter={e => e.currentTarget.style.opacity = "1"}
          onMouseLeave={e => e.currentTarget.style.opacity = "0.7"}
        >
          ← Salir
        </button>
      </div>

      {/* Diapositiva */}
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
        <SlideRenderer
          slide={slide}
          tema={tema}
          modo="alumno"
          respuestaDada={respuestaDada}
          onResponder={responder}
          resaltadoIdx={resaltado}
          onResaltar={(idx) => setResaltado(prev => (prev === idx ? null : idx))}
          expandidos={expandido}
          onExpandir={toggleExpandir}
        />
      </div>

      {/* Barra inferior */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", height: 60, borderTop: `1px solid ${tema.border}`, background: "rgba(0,0,0,0.4)", flexShrink: 0, gap: 16 }}>
        <button
          onClick={() => irASlide(slideIdx - 1)}
          disabled={slideIdx === 0}
          style={{ flexShrink: 0, background: "transparent", border: `1px solid ${tema.border}`, color: slideIdx === 0 ? "#2a2820" : tema.texto, borderRadius: 8, padding: "7px 22px", fontSize: 14, cursor: slideIdx === 0 ? "default" : "pointer", fontFamily: "inherit", transition: "all 0.15s" }}
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
              style={{ width: i === slideIdx ? 22 : 7, height: 7, borderRadius: 4, background: i === slideIdx ? tema.acento : i < slideIdx ? tema.acentoOpaco : "rgba(255,255,255,0.09)", border: s.tipo === "ejercicio" && i !== slideIdx ? `1px solid ${tema.acentoBorde}` : "none", cursor: "pointer", padding: 0, transition: "all 0.22s" }}
            />
          ))}
        </div>

        <button
          onClick={() => irASlide(slideIdx + 1)}
          disabled={slideIdx === slides.length - 1}
          style={{ flexShrink: 0, background: slideIdx < slides.length - 1 ? tema.acento : "transparent", border: `1px solid ${slideIdx < slides.length - 1 ? tema.acento : tema.border}`, color: slideIdx < slides.length - 1 ? "#0d0d0f" : "#2a2820", borderRadius: 8, padding: "7px 22px", fontSize: 14, fontWeight: slideIdx < slides.length - 1 ? 700 : 400, cursor: slideIdx === slides.length - 1 ? "default" : "pointer", fontFamily: "inherit", transition: "all 0.15s" }}
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
}
