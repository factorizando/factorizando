// Reactivo y sondeo.
//
// La regla que gobierna los dos: la respuesta del alumno nunca se tacha ni se
// pinta de rojo. Se enciende la correcta, la suya queda con contorno punteado y
// la explicación pasa a primer plano (docs/DISENO.md §2.4). El color no
// distingue acierto de error; lo hacen la forma y la palabra.
import { M } from "../../data/teoria/shared.jsx";
import { eyebrow, tarjeta } from "./ui.js";

const LETRAS = "ABCDEFGH";

export function Pregunta({ bloque, tema, respuestaDada, onResponder }) {
  const resuelto = respuestaDada != null;
  const correcta = bloque.correcta;

  return (
    <div>
      {bloque.etiqueta && (
        <div style={{ fontFamily: tema.mono, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: tema.acento, marginBottom: 7 }}>
          {bloque.etiqueta}
        </div>
      )}
      <p style={{ fontFamily: tema.titulo, fontWeight: 500, fontSize: 24, lineHeight: 1.28, letterSpacing: "-0.015em", color: tema.texto, margin: "0 0 18px", textWrap: "pretty" }}>
        {bloque.enunciado}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {(bloque.opciones || []).map((op, i) => {
          const esCorrecta = resuelto && i === correcta;
          const esElegida = resuelto && i === respuestaDada && i !== correcta;
          return (
            <button
              key={i}
              type="button"
              onClick={() => !resuelto && onResponder?.(i)}
              disabled={resuelto}
              style={{
                display: "flex", alignItems: "center", gap: 18,
                textAlign: "left", width: "100%",
                minHeight: 56, padding: "0 22px",
                borderRadius: 11,
                fontFamily: tema.body,
                cursor: resuelto ? "default" : "pointer",
                background: esCorrecta ? tema.acentoMed : "transparent",
                border: esCorrecta
                  ? `2px solid ${tema.acentoFuerte}`
                  : esElegida
                    ? `1px dashed ${tema.sub}`
                    : `1px solid ${tema.border}`,
              }}
            >
              <span style={{
                width: 30, height: 30, borderRadius: 8, flexShrink: 0,
                border: `1px solid ${esCorrecta ? tema.acentoBorde : tema.borderFuerte}`,
                color: esCorrecta ? tema.acento : tema.muted,
                fontFamily: tema.mono, fontSize: 13,
                display: "grid", placeItems: "center",
              }}>{LETRAS[i]}</span>
              <span style={{ fontSize: 18, color: esElegida ? tema.muted : tema.cuerpo }}>
                {typeof op === "string" && op.includes("\\") ? <M>{op}</M> : op}
              </span>
              {esElegida && (
                <span style={{ marginLeft: "auto", fontFamily: tema.mono, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: tema.sub }}>
                  Elegiste esta
                </span>
              )}
            </button>
          );
        })}
      </div>

      {resuelto && bloque.explicacion && (
        <p style={{ marginTop: 14, background: tema.card2, borderRadius: 9, padding: "13px 17px", fontSize: 15, lineHeight: 1.55, color: tema.cuerpo }}>
          <b style={{ fontFamily: tema.mono, fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase", color: tema.acento, marginRight: 11, fontWeight: 500 }}>
            {respuestaDada === correcta ? "Así es" : "Aún no"}
          </b>
          {bloque.explicacion}
        </p>
      )}
    </div>
  );
}

// Solo en modo director: el grupo responde y se ve el reparto, sin nombres.
// Las barras van todas en el acento; la correcta se distingue por estar llena.
export function Sondeo({ bloque, tema, votos, totalVotos }) {
  const opciones = bloque.opciones || [];
  const total = totalVotos || opciones.reduce((s, _, i) => s + (votos?.[i] || 0), 0) || 1;

  return (
    <div style={tarjeta(tema)}>
      <div style={eyebrow(tema)}>
        {bloque.etiqueta || `${total} respuesta${total === 1 ? "" : "s"}`}
      </div>
      {opciones.map((op, i) => {
        const n = votos?.[i] || 0;
        const pct = Math.round((n / total) * 100);
        const esCorrecta = i === bloque.correcta;
        return (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, marginTop: i ? 11 : 0 }}>
            <span style={{ fontFamily: tema.mono, fontSize: 12, color: esCorrecta ? tema.acento : tema.muted, width: 14 }}>
              {LETRAS[i]}
            </span>
            <span style={{ flex: 1, height: 6, borderRadius: 3, background: tema.card2, overflow: "hidden" }}>
              <i style={{
                display: "block", height: "100%", width: `${pct}%`, borderRadius: 3,
                background: tema.acento, opacity: esCorrecta ? 1 : 0.4,
                transition: "width 0.4s ease",
              }} />
            </span>
            <span style={{ fontFamily: tema.mono, fontSize: 12, color: esCorrecta ? tema.acento : tema.muted, width: 34, textAlign: "right" }}>
              {n}
            </span>
          </div>
        );
      })}
    </div>
  );
}
