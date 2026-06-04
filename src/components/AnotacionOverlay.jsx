// Banner que muestra una anotación en vivo (palabra u oración que el maestro
// escribe durante la presentación) sobre la diapositiva. Se usa en la vista del
// director (pantalla proyectada) y en la del alumno (sincronizado por broadcast).
export default function AnotacionOverlay({ texto, tema }) {
  if (!texto || !texto.trim()) return null;
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
        {texto}
      </span>
    </div>
  );
}
