// src/pages/SelectorBloque.jsx
// Página para seleccionar modo (Todas/Aleatorio) y bloque específico

import { useParams, useNavigate } from "react-router-dom";
import { buscarCuestionario } from "../data/cuestionarios/cuestionariosIndex";

const C = {
  bg: "#0e0f11",
  surface: "#13151a",
  border: "#252830",
  blue: "#3b9eff",
  green: "#34d399",
  orange: "#f97316",
  text: "#e8eaf0",
  muted: "#5a6070",
};

// Paleta de colores por ID de bloque
const COLORES_BLOQUES = {
  "basico-i":     "#3b9eff",  // Azul
  "basico-ii":    "#34d399",  // Verde
  "intermedio-i": "#a78bfa",  // Púrpura
  "intermedio-ii":"#f97316",  // Naranja
  "cero":         "#fbbf24",  // Amarillo
  "avanzado-i":   "#f43f5e",  // Rojo
  "avanzado-ii":  "#06b6d4",  // Cyan
  "contexto":     "#ec4899",  // Rosa
  "desafio":      "#8b5cf6",  // Púrpura oscuro
};

export default function SelectorBloque() {
  const { id } = useParams();
  const navigate = useNavigate();
  const cuestionarioObj = buscarCuestionario(id);

  if (!cuestionarioObj) {
    return (
      <div style={{ minHeight: "100vh", background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: C.muted }}>Cuestionario no encontrado</p>
      </div>
    );
  }

  const cuestionario = cuestionarioObj.data;
  const { metadata, bloques } = cuestionario;
  const totalPreguntas = cuestionario.questions.length;

  const handleModoTodas = () => {
    navigate(`/cuestionario/${id}`);
  };

  const handleModoAleatorio = () => {
    navigate(`/cuestionario/${id}?modo=aleatorio`);
  };

  const handleBloque = (bloqueId) => {
    navigate(`/cuestionario/${id}?bloque=${bloqueId}`);
  };

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; background: #0e0f11; color: #e8eaf0; }
      `}</style>

      {/* ─── HEADER ─── */}
      <div style={{
        padding: "1rem 2rem",
        borderBottom: `1px solid ${C.border}`,
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(13,15,17,.9)",
        backdropFilter: "blur(12px)",
      }}>
        <button
          onClick={() => navigate("/preparatoria")}
          style={{
            background: "none",
            border: `1px solid ${C.border}`,
            color: C.muted,
            cursor: "pointer",
            padding: ".4rem .9rem",
            fontSize: ".78rem",
            letterSpacing: ".1em",
            textTransform: "uppercase",
            fontFamily: "'DM Sans', sans-serif",
            transition: "border-color .2s, color .2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = C.blue;
            e.currentTarget.style.color = C.text;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = C.border;
            e.currentTarget.style.color = C.muted;
          }}
        >
          ← Materias
        </button>
      </div>

      {/* ─── CONTENIDO PRINCIPAL ─── */}
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "clamp(2rem, 5vw, 3rem) clamp(1rem, 4vw, 2rem)" }}>

        {/* ─── TÍTULO ─── */}
        <div style={{ marginBottom: "3rem", textAlign: "center" }}>
          <div style={{
            fontSize: "clamp(0.7rem, 1.5vw, 0.8rem)",
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: C.muted,
            marginBottom: "1rem",
          }}>
            {metadata.materia} · {metadata.tema}
          </div>
          <h1 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 700,
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
          }}>
            {metadata.titulo}
          </h1>
          <p style={{ color: C.muted, fontSize: "clamp(0.8rem, 2vw, 0.9rem)" }}>
            {totalPreguntas} reactivos · {bloques?.length || 0} bloques · 120 minutos
          </p>
        </div>

        {/* ─── ESTADÍSTICAS ─── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          marginBottom: "3rem",
          textAlign: "center",
        }}>
          {[
            { valor: totalPreguntas, label: "Reactivos", color: C.blue },
            { valor: bloques?.length || 0, label: "Bloques",   color: C.green },
            { valor: "2 h",            label: "Tiempo",    color: C.orange },
          ].map(({ valor, label, color }) => (
            <div key={label} style={{
              padding: "clamp(1.2rem, 3vw, 2rem)",
              background: C.surface,
              borderRadius: "8px",
              border: `1px solid ${C.border}`,
            }}>
              <div style={{
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontWeight: 700,
                color,
                marginBottom: ".5rem",
              }}>
                {valor}
              </div>
              <div style={{
                fontSize: "clamp(0.65rem, 1.5vw, 0.8rem)",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: C.muted,
              }}>
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* ─── SELECCIONA EL MODO ─── */}
        <div style={{ marginBottom: "3rem" }}>
          <h3 style={{
            fontSize: "clamp(0.75rem, 1.5vw, 0.85rem)",
            letterSpacing: ".15em",
            textTransform: "uppercase",
            color: C.muted,
            marginBottom: "1.5rem",
          }}>
            Selecciona el modo
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(0.8rem, 2vw, 1rem)" }}>

            {/* Botón Todas */}
            <button
              onClick={handleModoTodas}
              style={{
                padding: "clamp(1.5rem, 3vw, 2rem)",
                background: C.surface,
                border: `2px solid ${C.border}`,
                borderRadius: "8px",
                color: C.text,
                cursor: "pointer",
                textAlign: "center",
                fontFamily: "'DM Sans', sans-serif",
                transition: "all .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = C.blue + "15";
                e.currentTarget.style.borderColor = C.blue;
                e.currentTarget.style.boxShadow = `0 0 20px ${C.blue}33`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = C.surface;
                e.currentTarget.style.borderColor = C.border;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)", marginBottom: ".5rem" }}>📋</div>
              <div style={{ fontSize: "clamp(1rem, 2.5vw, 1.3rem)", fontWeight: 600 }}>Todas</div>
              <div style={{ fontSize: "clamp(0.75rem, 1.5vw, 0.85rem)", color: C.muted, marginTop: ".5rem" }}>
                {totalPreguntas} preguntas en orden
              </div>
            </button>

            {/* Botón Aleatorio */}
            <button
              onClick={handleModoAleatorio}
              style={{
                padding: "clamp(1.5rem, 3vw, 2rem)",
                background: C.surface,
                border: `2px solid ${C.border}`,
                borderRadius: "8px",
                color: C.text,
                cursor: "pointer",
                textAlign: "center",
                fontFamily: "'DM Sans', sans-serif",
                transition: "all .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = C.orange + "15";
                e.currentTarget.style.borderColor = C.orange;
                e.currentTarget.style.boxShadow = `0 0 20px ${C.orange}33`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = C.surface;
                e.currentTarget.style.borderColor = C.border;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)", marginBottom: ".5rem" }}>🎲</div>
              <div style={{ fontSize: "clamp(1rem, 2.5vw, 1.3rem)", fontWeight: 600 }}>Aleatorio</div>
              <div style={{ fontSize: "clamp(0.75rem, 1.5vw, 0.85rem)", color: C.muted, marginTop: ".5rem" }}>
                {totalPreguntas} preguntas mezcladas
              </div>
            </button>
          </div>
        </div>

        {/* ─── BLOQUES ─── */}
        {bloques && bloques.length > 0 && (
          <div>
            <h3 style={{
              fontSize: "clamp(0.75rem, 1.5vw, 0.85rem)",
              letterSpacing: ".15em",
              textTransform: "uppercase",
              color: C.muted,
              marginBottom: "1.5rem",
            }}>
              O elige un bloque
            </h3>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "clamp(0.8rem, 2vw, 1rem)",
            }}>
              {bloques.map((bloque) => {
                const colorBloque = COLORES_BLOQUES[bloque.id] || bloque.color || C.blue;
                return (
                  <button
                    key={bloque.id}
                    onClick={() => handleBloque(bloque.id)}
                    style={{
                      padding: "clamp(1rem, 2vw, 1.5rem) clamp(0.8rem, 1.5vw, 1rem)",
                      background: C.surface,
                      border: `2px solid ${colorBloque}`,
                      borderRadius: "8px",
                      color: colorBloque,
                      cursor: "pointer",
                      textAlign: "center",
                      fontFamily: "'DM Sans', sans-serif",
                      transition: "all .2s",
                      minHeight: "100px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.4rem",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = colorBloque + "22";
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = `0 8px 24px ${colorBloque}33`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = C.surface;
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div style={{ fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)", fontWeight: 700, lineHeight: 1.2 }}>
                      {bloque.titulo}
                    </div>
                    <div style={{ fontSize: "clamp(0.7rem, 1.2vw, 0.8rem)", color: C.muted }}>
                      {bloque.cantidad} preg.
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
