// Bloques de prosa: lo que se lee de corrido.
import { M } from "../../data/teoria/shared.jsx";
import { eyebrow, tarjeta, parrafo } from "./ui.js";

// El enunciado que define la diapositiva. Uno como máximo: dos enunciados clave
// equivalen a ninguno (docs/DISENO.md §2.3).
export function Destacado({ bloque, tema }) {
  return (
    <p style={{
      background: tema.acentoSuave,
      border: `1px solid ${tema.acentoBorde}`,
      borderRadius: 10,
      padding: "17px 22px",
      fontSize: 19,
      lineHeight: 1.58,
      color: tema.texto,
      margin: 0,
      textWrap: "pretty",
    }}>{bloque.texto}</p>
  );
}

// Prosa expositiva. Sin caja a propósito: si todo lleva marco, nada destaca.
export function Texto({ bloque, tema }) {
  return <p style={{ ...parrafo(tema), maxWidth: "82ch" }}>{bloque.texto}</p>;
}

export function Definicion({ bloque, tema }) {
  return (
    <div style={tarjeta(tema)}>
      {bloque.etiqueta && <div style={eyebrow(tema)}>{bloque.etiqueta}</div>}
      <div style={{ fontFamily: tema.titulo, fontWeight: 600, fontSize: 20, color: tema.texto, marginBottom: 6 }}>
        {bloque.termino}
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.62, color: tema.cuerpo, margin: 0 }}>{bloque.texto}</p>
    </div>
  );
}

// La fórmula centrada, y debajo de dónde sale: una fórmula sin procedencia se
// memoriza, no se entiende.
export function Formula({ bloque, tema }) {
  return (
    <div style={{
      textAlign: "center",
      padding: "24px 20px",
      background: tema.card,
      border: `1px solid ${tema.acentoBorde}`,
      borderRadius: 10,
    }}>
      <div style={{ fontFamily: tema.formula, fontSize: 30, color: tema.texto }}>
        <M>{bloque.math}</M>
      </div>
      {bloque.de && (
        <div style={{ ...eyebrow(tema), marginBottom: 0, marginTop: 13, letterSpacing: "0.16em" }}>
          {bloque.de}
        </div>
      )}
    </div>
  );
}

export function Lista({ bloque, tema }) {
  const numerada = bloque.estilo === "numerada";
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 9 }}>
      {(bloque.items || []).map((it, i) => (
        <li key={i} style={{ display: "flex", gap: 12, fontSize: 16, lineHeight: 1.55, color: tema.cuerpo }}>
          {numerada ? (
            <span style={{ fontFamily: tema.mono, fontSize: 12.5, color: tema.acento, flexShrink: 0, marginTop: 3 }}>
              {String(i + 1).padStart(2, "0")}
            </span>
          ) : (
            <span style={{ width: 6, height: 6, borderRadius: 2, background: tema.acento, flexShrink: 0, marginTop: 9 }} />
          )}
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

// Abre el tema: qué sabrá hacer el alumno al terminar. Las casillas son
// decorativas — nadie las marca, señalan que hay una meta.
export function Objetivos({ bloque, tema }) {
  return (
    <div style={tarjeta(tema)}>
      <div style={eyebrow(tema)}>{bloque.etiqueta || "Al terminar esta sesión"}</div>
      {(bloque.items || []).map((it, i) => (
        <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 16, lineHeight: 1.5, color: tema.cuerpo, marginTop: i ? 10 : 0 }}>
          <span style={{ width: 15, height: 15, borderRadius: 4, border: `1.5px solid ${tema.borderFuerte}`, flexShrink: 0, marginTop: 3 }} />
          <span>{it}</span>
        </div>
      ))}
    </div>
  );
}

// Apunte al margen. Nunca lleva información que se evalúe.
export function Nota({ bloque, tema }) {
  return (
    <p style={{ background: tema.card2, borderRadius: 8, padding: "13px 17px", fontSize: 14.5, lineHeight: 1.55, color: tema.muted, margin: 0 }}>
      <b style={{ fontFamily: tema.mono, fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase", color: tema.acento, marginRight: 11, fontWeight: 500 }}>
        {bloque.etiqueta || "Nota"}
      </b>
      {bloque.texto}
    </p>
  );
}
