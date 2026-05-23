// Renderizador de diapositivas para el sistema de presentaciones.
// Recibe un objeto `slide` y props de contexto (modo, votos, etc.)
import { M, useKaTeX } from "../data/teoria/shared.jsx";

const C = {
  bg: "#07080b",
  card: "rgba(255,255,255,0.04)",
  border: "rgba(255,255,255,0.08)",
  gold: "#f5c842",
  blue: "#3b9eff",
  green: "#4ade80",
  red: "#f87171",
  text: "#f0ece3",
  muted: "#8a8580",
  sub: "#9a958e"
};

// ── Componentes de apoyo ──────────────────────────────────────────────────────

function Encabezado({ titulo, etiqueta }) {
  return (
    <div style={{ marginBottom: 4 }}>
      {etiqueta && (
        <div
          style={{
            fontFamily: "IBM Plex Mono, monospace",
            fontSize: 11,
            letterSpacing: "0.2em",
            color: C.gold,
            textTransform: "uppercase",
            marginBottom: 10,
            opacity: 0.75
          }}
        >
          {etiqueta}
        </div>
      )}
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(24px, 3.5vw, 40px)",
          fontWeight: 700,
          color: C.text,
          letterSpacing: "-0.01em",
          margin: 0,
          lineHeight: 1.15
        }}
      >
        {titulo}
      </h2>
    </div>
  );
}

function HistogramaVotos({ votos, totalVotos, opciones, correcta }) {
  return (
    <div
      style={{
        width: 210,
        flexShrink: 0,
        background: "rgba(0,0,0,0.35)",
        border: `1px solid ${C.border}`,
        borderRadius: 12,
        padding: "18px 14px",
        display: "flex",
        flexDirection: "column",
        gap: 14
      }}
    >
      <div
        style={{
          fontFamily: "IBM Plex Mono, monospace",
          fontSize: 10,
          letterSpacing: "0.18em",
          color: C.muted,
          textTransform: "uppercase"
        }}
      >
        Votos en vivo
      </div>
      <div
        style={{
          fontFamily: "IBM Plex Mono, monospace",
          fontSize: 28,
          color: C.gold,
          textAlign: "center",
          lineHeight: 1
        }}
      >
        {totalVotos || 0}
      </div>
      {opciones.map((op, i) => {
        const count = votos?.[i] || 0;
        const pct = totalVotos > 0 ? Math.round((count / totalVotos) * 100) : 0;
        const isOk = i === correcta;
        return (
          <div key={i}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 5,
                fontSize: 12,
                fontFamily: "IBM Plex Mono, monospace"
              }}
            >
              <span style={{ color: isOk ? C.green : C.muted }}>
                {String.fromCharCode(65 + i)}. {op.length > 14 ? op.slice(0, 14) + "…" : op}
              </span>
              <span style={{ color: isOk ? C.green : C.sub }}>
                {count} ({pct}%)
              </span>
            </div>
            <div
              style={{
                height: 7,
                background: "rgba(255,255,255,0.06)",
                borderRadius: 4,
                overflow: "hidden"
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${pct}%`,
                  background: isOk ? C.green : C.blue,
                  borderRadius: 4,
                  transition: "width 0.4s ease"
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── SVG decorativo para la portada ────────────────────────────────────────────

function TriangulosSVG() {
  return (
    <svg width="200" height="130" viewBox="0 0 300 195" fill="none">
      <polygon
        points="40,170 155,25 270,170"
        stroke="#f5c842"
        strokeWidth="2"
        fill="rgba(245,200,66,0.07)"
      />
      <polygon
        points="80,170 137,100 195,170"
        stroke="#3b9eff"
        strokeWidth="1.5"
        fill="rgba(59,158,255,0.07)"
      />
      <text x="25" y="188" fill="#f5c842" fontSize="14" fontFamily="serif">A</text>
      <text x="150" y="18" fill="#f5c842" fontSize="14" fontFamily="serif">B</text>
      <text x="272" y="188" fill="#f5c842" fontSize="14" fontFamily="serif">C</text>
      <text x="65" y="188" fill="#3b9eff" fontSize="12" fontFamily="serif">D</text>
      <text x="133" y="95" fill="#3b9eff" fontSize="12" fontFamily="serif">E</text>
      <text x="197" y="188" fill="#3b9eff" fontSize="12" fontFamily="serif">F</text>
      <text x="215" y="150" fill="#8a8580" fontSize="26" fontFamily="serif">∼</text>
    </svg>
  );
}

// ── Tipos de diapositiva ──────────────────────────────────────────────────────

function SlidePortada({ slide }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        gap: 20,
        textAlign: "center",
        padding: "40px 32px"
      }}
    >
      <TriangulosSVG />
      <div
        style={{
          fontFamily: "IBM Plex Mono, monospace",
          fontSize: 12,
          letterSpacing: "0.22em",
          color: C.gold,
          textTransform: "uppercase",
          opacity: 0.75
        }}
      >
        {slide.etiqueta}
      </div>
      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(32px, 5.5vw, 68px)",
          fontWeight: 700,
          color: C.text,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          margin: 0
        }}
      >
        {slide.titulo}
      </h1>
      <p style={{ fontSize: 18, color: C.muted, maxWidth: 500, fontWeight: 300, lineHeight: 1.6 }}>
        {slide.subtitulo}
      </p>
    </div>
  );
}

function SlideDefinicion({ slide }) {
  return (
    <div
      style={{
        padding: "36px 44px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 28,
        boxSizing: "border-box"
      }}
    >
      <Encabezado titulo={slide.titulo} />

      <div
        style={{
          background: "rgba(245,200,66,0.06)",
          border: "1px solid rgba(245,200,66,0.22)",
          borderRadius: 12,
          padding: "22px 32px",
          textAlign: "center"
        }}
      >
        <div style={{ fontSize: "1.9em", marginBottom: 14 }}>
          <M>{slide.simbolo}</M>
        </div>
        <p
          style={{
            fontSize: 17,
            color: C.text,
            lineHeight: 1.7,
            fontWeight: 300,
            margin: 0
          }}
        >
          {slide.cuerpo}
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {slide.condiciones.map((c, i) => (
          <div
            key={i}
            style={{
              background: C.card,
              border: `1px solid ${C.border}`,
              borderRadius: 10,
              padding: "18px 22px"
            }}
          >
            <div
              style={{
                fontFamily: "IBM Plex Mono, monospace",
                fontSize: 10.5,
                letterSpacing: "0.14em",
                color: i === 0 ? C.blue : C.gold,
                textTransform: "uppercase",
                marginBottom: 14
              }}
            >
              {c.texto}
            </div>
            <div style={{ textAlign: "center", fontSize: "1.1em" }}>
              <M>{c.math}</M>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideConcepto({ slide }) {
  return (
    <div
      style={{
        padding: "36px 44px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 26,
        boxSizing: "border-box"
      }}
    >
      <Encabezado titulo={slide.titulo} etiqueta={slide.etiqueta} />

      <div
        style={{
          background: "rgba(0,0,0,0.45)",
          border: "2px solid rgba(245,200,66,0.35)",
          borderRadius: 12,
          padding: "22px 28px",
          textAlign: "center",
          fontSize: "1.9em"
        }}
      >
        <M>{slide.formula}</M>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {slide.items.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              background: C.card,
              border: `1px solid ${C.border}`,
              borderRadius: 8,
              padding: "13px 22px"
            }}
          >
            <span style={{ fontSize: "1.15em", minWidth: 56 }}>
              <M>{item.math}</M>
            </span>
            <span style={{ color: "#4a4640", fontSize: 18 }}>→</span>
            <span style={{ fontSize: 15.5, color: "#c4bfb3" }}>{item.texto}</span>
          </div>
        ))}
      </div>

      {slide.nota && (
        <div
          style={{
            background: "rgba(59,158,255,0.07)",
            border: "1px solid rgba(59,158,255,0.2)",
            borderRadius: 8,
            padding: "13px 20px",
            display: "flex",
            alignItems: "baseline",
            gap: 10
          }}
        >
          <span
            style={{
              fontFamily: "IBM Plex Mono, monospace",
              fontSize: 10,
              letterSpacing: "0.2em",
              color: C.blue,
              textTransform: "uppercase",
              flexShrink: 0
            }}
          >
            Nota
          </span>
          <span style={{ fontSize: 15, color: "#b0c8f0" }}>{slide.nota}</span>
        </div>
      )}
    </div>
  );
}

function SlideListaCriterios({ slide }) {
  const colores = [C.gold, C.blue, C.green];
  const bgColores = [
    "rgba(245,200,66,0.1)",
    "rgba(59,158,255,0.1)",
    "rgba(74,222,128,0.1)"
  ];
  return (
    <div
      style={{
        padding: "36px 44px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 24,
        boxSizing: "border-box"
      }}
    >
      <Encabezado titulo={slide.titulo} etiqueta={slide.etiqueta} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
          flex: 1,
          justifyContent: "center"
        }}
      >
        {slide.criterios.map((c, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 22,
              background: C.card,
              border: `1px solid ${C.border}`,
              borderRadius: 12,
              padding: "18px 26px"
            }}
          >
            <div
              style={{
                minWidth: 62,
                height: 62,
                borderRadius: 10,
                background: bgColores[i],
                border: `2px solid ${colores[i]}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "IBM Plex Mono, monospace",
                fontWeight: 700,
                fontSize: 16,
                color: colores[i],
                flexShrink: 0
              }}
            >
              {c.sigla}
            </div>
            <div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: C.text,
                  marginBottom: 5
                }}
              >
                {c.nombre}
              </div>
              <div style={{ fontSize: 14.5, color: C.sub, lineHeight: 1.55 }}>
                {c.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideCriterioDetalle({ slide }) {
  return (
    <div
      style={{
        padding: "36px 44px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 22,
        boxSizing: "border-box"
      }}
    >
      <Encabezado titulo={slide.titulo} etiqueta={slide.etiqueta} />

      <div
        style={{
          background: "rgba(245,200,66,0.05)",
          border: "1px solid rgba(245,200,66,0.2)",
          borderRadius: 10,
          padding: "20px 28px"
        }}
      >
        <p
          style={{
            fontSize: 16.5,
            color: C.text,
            lineHeight: 1.7,
            fontWeight: 300,
            marginBottom: 18,
            margin: "0 0 18px"
          }}
        >
          {slide.enunciado}
        </p>
        <div style={{ textAlign: "center", fontSize: "1.25em" }}>
          <M>{slide.math}</M>
        </div>
      </div>

      <div
        style={{
          background: "rgba(59,158,255,0.06)",
          border: "1px solid rgba(59,158,255,0.18)",
          borderRadius: 10,
          padding: "18px 24px"
        }}
      >
        <div
          style={{
            fontFamily: "IBM Plex Mono, monospace",
            fontSize: 10,
            letterSpacing: "0.2em",
            color: C.blue,
            textTransform: "uppercase",
            marginBottom: 10
          }}
        >
          ¿Por qué funciona?
        </div>
        <p
          style={{
            fontSize: 15,
            color: "#b0c8f0",
            lineHeight: 1.65,
            margin: 0,
            marginBottom: slide.math_razon ? 14 : 0
          }}
        >
          {slide.por_que}
        </p>
        {slide.math_razon && (
          <div style={{ textAlign: "center", fontSize: "1.1em", marginTop: 12 }}>
            <M>{slide.math_razon}</M>
          </div>
        )}
      </div>
    </div>
  );
}

function SlideEjemplo({ slide }) {
  return (
    <div
      style={{
        padding: "36px 44px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 22,
        boxSizing: "border-box",
        overflowY: "auto"
      }}
    >
      <Encabezado titulo={slide.titulo} etiqueta={slide.etiqueta} />

      <p style={{ fontSize: 15.5, color: "#c4bfb3", lineHeight: 1.65, margin: 0 }}>
        {slide.enunciado}
      </p>

      {slide.datos.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: slide.datos.length > 1 ? "1fr 1fr" : "1fr",
            gap: 12
          }}
        >
          {slide.datos.map((d, i) => (
            <div
              key={i}
              style={{
                background: "rgba(0,0,0,0.38)",
                border: `1px solid ${C.border}`,
                borderRadius: 8,
                padding: "14px 20px"
              }}
            >
              <div
                style={{
                  fontFamily: "IBM Plex Mono, monospace",
                  fontSize: 10,
                  color: C.gold,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: 10
                }}
              >
                {d.label}
              </div>
              <div style={{ textAlign: "center", fontSize: "1.1em" }}>
                <M>{d.math}</M>
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {slide.pasos.map((p, i) => (
          <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <div
              style={{
                minWidth: 26,
                height: 26,
                borderRadius: "50%",
                background: C.gold,
                color: "#0d0d0f",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "IBM Plex Mono, monospace",
                fontSize: 11,
                fontWeight: 700,
                flexShrink: 0,
                marginTop: 3
              }}
            >
              {i + 1}
            </div>
            <div style={{ fontSize: 16, color: "#c4bfb3", lineHeight: 1.65, paddingTop: 3 }}>
              {p.pre}
              <M>{p.math}</M>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideEjercicio({ slide, modo, votos, totalVotos, respuestaDada, onResponder }) {
  const done = respuestaDada !== null && respuestaDada !== undefined;
  const correcta = slide.correcta;

  return (
    <div
      style={{
        padding: modo === "director" ? "28px 36px" : "28px 20px",
        height: "100%",
        display: "flex",
        gap: 20,
        boxSizing: "border-box"
      }}
    >
      {/* Pregunta + opciones */}
      <div
        style={{ flex: 1, display: "flex", flexDirection: "column", gap: 18, minWidth: 0 }}
      >
        <div
          style={{
            fontFamily: "IBM Plex Mono, monospace",
            fontSize: 11,
            color: C.gold,
            letterSpacing: "0.18em",
            textTransform: "uppercase"
          }}
        >
          {slide.etiqueta}
        </div>

        <p
          style={{
            fontSize: modo === "director" ? 17 : 19,
            color: C.text,
            lineHeight: 1.65,
            margin: 0
          }}
        >
          {slide.pregunta}
        </p>

        {slide.math_pregunta && (
          <div
            style={{
              background: "rgba(0,0,0,0.4)",
              border: `1px solid ${C.border}`,
              borderRadius: 8,
              padding: "16px",
              textAlign: "center",
              fontSize: "1.4em"
            }}
          >
            <M>{slide.math_pregunta}</M>
          </div>
        )}

        {/* Opciones */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, flex: 1 }}
        >
          {slide.opciones.map((op, i) => {
            const isOk = i === correcta;
            const isSel = respuestaDada === i;

            let bg = "rgba(255,255,255,0.04)";
            let border = "1px solid rgba(255,255,255,0.1)";
            let color = "#c4bfb3";

            if (modo === "alumno" && done) {
              if (isOk) {
                bg = "rgba(74,222,128,0.1)";
                border = "2px solid rgba(74,222,128,0.45)";
                color = C.green;
              } else if (isSel) {
                bg = "rgba(248,113,113,0.09)";
                border = "2px solid rgba(248,113,113,0.4)";
                color = "#fca5a5";
              }
            } else if (modo === "director" && isOk) {
              border = "1px solid rgba(74,222,128,0.25)";
              bg = "rgba(74,222,128,0.04)";
            }

            const votoCount = votos?.[i] || 0;

            return (
              <button
                key={i}
                onClick={() => modo === "alumno" && !done && onResponder(i)}
                disabled={modo !== "alumno" || done}
                style={{
                  padding: "14px 18px",
                  border,
                  borderRadius: 10,
                  background: bg,
                  color,
                  fontSize: 16,
                  fontFamily: "inherit",
                  cursor: modo === "alumno" && !done ? "pointer" : "default",
                  transition: "all 0.18s",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  minHeight: 60
                }}
              >
                <span
                  style={{
                    fontFamily: "IBM Plex Mono, monospace",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.28)",
                    flexShrink: 0
                  }}
                >
                  {String.fromCharCode(65 + i)}.
                </span>
                <span style={{ flex: 1 }}>{op}</span>
                {modo === "director" && votos !== undefined && (
                  <span
                    style={{
                      fontFamily: "IBM Plex Mono, monospace",
                      fontSize: 11,
                      color: isOk ? C.green : C.muted,
                      flexShrink: 0
                    }}
                  >
                    {votoCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Retroalimentación del alumno */}
        {modo === "alumno" && done && (
          <div
            style={{
              padding: "14px 18px",
              borderRadius: 8,
              background:
                respuestaDada === correcta
                  ? "rgba(74,222,128,0.1)"
                  : "rgba(248,113,113,0.08)",
              border: `1px solid ${
                respuestaDada === correcta
                  ? "rgba(74,222,128,0.25)"
                  : "rgba(248,113,113,0.2)"
              }`,
              color: respuestaDada === correcta ? C.green : "#fca5a5",
              fontSize: 14.5,
              lineHeight: 1.6
            }}
          >
            {respuestaDada === correcta ? "✓ " : "✗ "}
            {slide.explicacion}
          </div>
        )}
      </div>

      {/* Histograma en modo director */}
      {modo === "director" && (
        <HistogramaVotos
          votos={votos}
          totalVotos={totalVotos}
          opciones={slide.opciones}
          correcta={correcta}
        />
      )}
    </div>
  );
}

function SlideResumen({ slide }) {
  return (
    <div
      style={{
        padding: "36px 44px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 24,
        boxSizing: "border-box"
      }}
    >
      <Encabezado titulo={slide.titulo} etiqueta={slide.etiqueta} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {slide.puntos.map((p, i) => (
          <div
            key={i}
            style={{
              background: C.card,
              border: `1px solid ${C.border}`,
              borderRadius: 10,
              padding: "14px 18px",
              display: "flex",
              gap: 12,
              alignItems: "flex-start"
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: C.gold,
                flexShrink: 0,
                marginTop: 9
              }}
            />
            <div>
              {p.math && (
                <div style={{ marginBottom: 5, fontSize: "1.08em" }}>
                  <M>{p.math}</M>
                </div>
              )}
              {p.titulo && (
                <div
                  style={{
                    fontWeight: 600,
                    color: C.gold,
                    marginBottom: 3,
                    fontSize: 13.5
                  }}
                >
                  {p.titulo}
                </div>
              )}
              <div style={{ fontSize: 13.5, color: C.sub, lineHeight: 1.5 }}>
                {p.texto}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Exportación principal ─────────────────────────────────────────────────────

export default function SlideRenderer({
  slide,
  modo = "alumno",
  votos,
  totalVotos,
  respuestaDada,
  onResponder
}) {
  useKaTeX();

  const props = { slide, modo, votos, totalVotos, respuestaDada, onResponder };

  switch (slide.tipo) {
    case "portada":
      return <SlidePortada {...props} />;
    case "definicion":
      return <SlideDefinicion {...props} />;
    case "concepto":
      return <SlideConcepto {...props} />;
    case "lista_criterios":
      return <SlideListaCriterios {...props} />;
    case "criterio_detalle":
      return <SlideCriterioDetalle {...props} />;
    case "ejemplo":
      return <SlideEjemplo {...props} />;
    case "ejercicio":
      return <SlideEjercicio {...props} />;
    case "resumen":
      return <SlideResumen {...props} />;
    default:
      return (
        <div style={{ padding: 40, color: "#888" }}>
          Tipo de slide "{slide.tipo}" no reconocido.
        </div>
      );
  }
}
