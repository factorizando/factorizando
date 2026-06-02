// Vista de repaso autónomo: el alumno navega la presentación a su propio ritmo.
// No requiere sesión activa ni código. Respuestas se guardan solo localmente.
import { useState, useEffect } from "react";
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

  const slides = PRESENTACION?.slides ?? [];
  const slide = slides[slideIdx];

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") setSlideIdx(i => Math.min(i + 1, slides.length - 1));
      if (e.key === "ArrowLeft"  || e.key === "ArrowUp")   setSlideIdx(i => Math.max(i - 1, 0));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slides.length]);

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
