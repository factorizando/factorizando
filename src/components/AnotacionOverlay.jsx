import { M } from "../data/teoria/shared.jsx";

// Splits "texto $formula$ más texto" into [{type:"text",...},{type:"math",...},...]
function parseSegments(str) {
  const parts = str.split(/\$([^$]+)\$/);
  return parts.map((s, i) => ({ type: i % 2 === 0 ? "text" : "math", content: s }));
}

export default function AnotacionOverlay({ texto, tema }) {
  if (!texto || !texto.trim()) return null;
  const segments = parseSegments(texto);
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        bottom: 26,
        transform: "translateX(-50%)",
        maxWidth: "92%",
        background: "rgba(0,0,0,0.84)",
        border: `2px solid ${tema.acento}`,
        borderRadius: 14,
        padding: "14px 30px",
        boxShadow: `0 0 26px ${tema.acentoBorde}`,
        zIndex: 50,
        pointerEvents: "none",
      }}
    >
      <span
        style={{
          display: "block",
          textAlign: "center",
          color: tema.acento,
          fontFamily: tema.body,
          fontSize: "clamp(20px, 3.4vw, 42px)",
          fontWeight: 600,
          lineHeight: 1.25,
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      >
        {segments.map((seg, i) =>
          seg.type === "math"
            ? <M key={i}>{seg.content}</M>
            : <span key={i}>{seg.content}</span>
        )}
      </span>
    </div>
  );
}
