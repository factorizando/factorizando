// src/pages/SelectorBloque.jsx
import { useParams, useNavigate, Link } from "react-router-dom";
import { buscarCuestionario } from "../data/cuestionarios/cuestionariosIndex";
import BrandName from "../components/BrandName";

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

const COLORES_BLOQUES = {
  "basico-i":      "#3b9eff",
  "basico-ii":     "#34d399",
  "intermedio-i":  "#a78bfa",
  "intermedio-ii": "#f97316",
  "cero":          "#fbbf24",
  "avanzado-i":    "#f43f5e",
  "avanzado-ii":   "#06b6d4",
  "contexto":      "#ec4899",
  "desafio":       "#8b5cf6",
};

const CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'DM Sans', sans-serif; background: #0e0f11; color: #e8eaf0; }
  ::-webkit-scrollbar { width: 5px; background: #0e0f11; }
  ::-webkit-scrollbar-thumb { background: #252830; border-radius: 99px; }
`;

export default function SelectorBloque() {
  const { id } = useParams();
  const navigate = useNavigate();
  const cuestionarioObj = buscarCuestionario(id);

  if (!cuestionarioObj) {
    return (
      <div style={{ minHeight: "100vh", background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: C.muted, fontFamily: "'DM Sans', sans-serif" }}>Cuestionario no encontrado</p>
      </div>
    );
  }

  const cuestionario = cuestionarioObj.data;
  const { metadata, bloques } = cuestionario;
  const totalPreguntas = cuestionario.questions.length;
  const tiempoTotal = Math.round(totalPreguntas * (cuestionario.config?.timePerQuestion || 60) / 60);
  const nivelLabel = metadata.nivel === "preparatoria" ? "Preparatoria" : "Universidad";

  return (
    <div style={{ minHeight: "100vh", background: C.bg, paddingBottom: 64 }}>
      <style>{CSS}</style>

      {/* ─── NAVBAR ─── */}
      <div style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(14,15,17,0.92)", backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${C.border}`,
        padding: "10px 20px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "inherit" }}>
          <img
            src={`${import.meta.env.BASE_URL}assets/logoX.png`}
            alt="Logo"
            style={{ width: 34, height: 34, borderRadius: "50%", objectFit: "cover", border: "1px solid #3b9eff44" }}
          />
          <BrandName size="1.1rem" />
        </Link>
        <button
          onClick={() => navigate(`/${metadata.nivel}`)}
          style={{
            background: "none", border: `1px solid ${C.border}`,
            borderRadius: "3px", color: C.muted,
            fontSize: ".78rem", letterSpacing: ".1em",
            textTransform: "uppercase", padding: ".4rem .9rem",
            cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
            transition: "border-color .2s, color .2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.blue; e.currentTarget.style.color = C.text; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.muted; }}
        >
          ← Materias
        </button>
      </div>

      {/* ─── BANNER HEADER ─── */}
      <div style={{
        background: C.surface,
        borderBottom: `1px solid ${C.border}`,
        padding: "44px 24px 36px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.03,
          backgroundImage: `radial-gradient(${C.blue} 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }} />
        <div style={{ position: "relative" }}>
          <span style={{
            display: "inline-block",
            background: C.blue + "22", color: C.blue,
            borderRadius: 99, padding: "3px 14px",
            fontSize: 11, fontWeight: 700,
            letterSpacing: 2, textTransform: "uppercase",
            marginBottom: 16, fontFamily: "'DM Sans', sans-serif",
          }}>
            {nivelLabel} · {metadata.materia}
          </span>

          <h1 style={{
            fontSize: "clamp(20px, 4vw, 34px)",
            fontWeight: 700, color: C.text,
            letterSpacing: "-1.5px", lineHeight: 1.1,
            marginBottom: 10, fontFamily: "'DM Sans', sans-serif",
          }}>
            {metadata.titulo}
          </h1>

          <p style={{
            color: C.muted, fontSize: 14,
            maxWidth: 540, margin: "0 auto 24px",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            {totalPreguntas} reactivos · {bloques?.length || 0} bloques · {tiempoTotal} min
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
            {[
              { label: "Reactivos",    val: totalPreguntas },
              { label: "Bloques",      val: bloques?.length || 0 },
              { label: "Tiempo total", val: `${tiempoTotal} min` },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{
                  fontSize: 22, fontWeight: 900, color: C.text,
                  letterSpacing: "-1px", fontFamily: "'DM Sans', sans-serif",
                }}>
                  {s.val}
                </div>
                <div style={{
                  fontSize: 10, color: C.muted, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: 1.5,
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── CONTENIDO ─── */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "32px 16px" }}>

        {/* Examen completo */}
        <p style={{
          color: C.muted, fontSize: 11, fontWeight: 700,
          letterSpacing: 2, textTransform: "uppercase",
          marginBottom: 12, fontFamily: "'DM Sans', sans-serif",
        }}>
          Examen completo
        </p>
        <button
          onClick={() => navigate(`/cuestionario/${id}`)}
          style={{
            width: "100%", background: C.surface,
            border: `1px solid ${C.border}`, borderRadius: 14,
            padding: "22px 16px", cursor: "pointer",
            textAlign: "center", marginBottom: 28,
            fontFamily: "'DM Sans', sans-serif", transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.blue; e.currentTarget.style.background = C.blue + "11"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.surface; }}
        >
          <div style={{ fontSize: 26, marginBottom: 6 }}>📋</div>
          <div style={{ color: C.text, fontWeight: 700, fontSize: 15 }}>Todas las preguntas</div>
          <div style={{ color: C.muted, fontSize: 12, marginTop: 4 }}>
            {totalPreguntas} reactivos · {tiempoTotal} min
          </div>
        </button>

        {/* Bloques */}
        {bloques && bloques.length > 0 && (
          <>
            <p style={{
              color: C.muted, fontSize: 11, fontWeight: 700,
              letterSpacing: 2, textTransform: "uppercase",
              marginBottom: 12, fontFamily: "'DM Sans', sans-serif",
            }}>
              O elige un bloque
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
              gap: 10,
            }}>
              {bloques.map((bloque) => {
                const color = COLORES_BLOQUES[bloque.id] || bloque.color || C.blue;
                const count = bloque.cantidad || (bloque.to - bloque.from + 1);
                return (
                  <button
                    key={bloque.id}
                    onClick={() => navigate(`/cuestionario/${id}?bloque=${bloque.id}&modo=aleatorio`)}
                    style={{
                      background: C.surface,
                      border: `1px solid ${color}44`,
                      borderRadius: 12, padding: "18px 14px",
                      cursor: "pointer", textAlign: "left",
                      fontFamily: "'DM Sans', sans-serif",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = color + "18"; e.currentTarget.style.borderColor = color; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = C.surface; e.currentTarget.style.borderColor = color + "44"; }}
                  >
                    <div style={{
                      color, fontWeight: 700, fontSize: 13,
                      lineHeight: 1.35, fontFamily: "'DM Sans', sans-serif",
                      marginBottom: 6,
                    }}>
                      {bloque.titulo}
                    </div>
                    <div style={{ color: C.muted, fontSize: 11 }}>
                      {count} reactivos · {count} min
                    </div>
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
