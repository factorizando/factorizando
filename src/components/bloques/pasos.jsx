// Procedimiento y cierre.
import { M } from "../../data/teoria/shared.jsx";
import { eyebrow, tarjeta } from "./ui.js";

// Demostración o procedimiento paso a paso. Cierra con ∎, como en un texto de
// matemáticas: el símbolo dice «hasta aquí llega el argumento».
export function Pasos({ bloque, tema }) {
  return (
    <div style={tarjeta(tema)}>
      {bloque.metodo && <div style={eyebrow(tema)}>{bloque.metodo}</div>}
      {(bloque.pasos || []).map((p, i) => (
        <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginTop: i ? 13 : 0 }}>
          <span style={{
            width: 24, height: 24, borderRadius: "50%",
            border: `1px solid ${tema.acentoBorde}`, color: tema.acento,
            fontFamily: tema.mono, fontSize: 11.5,
            display: "grid", placeItems: "center", flexShrink: 0,
          }}>{i + 1}</span>
          <div style={{ fontSize: 15.5, lineHeight: 1.55, color: tema.cuerpo }}>
            {p.texto}
            {p.math && (
              <>
                {p.texto ? " " : null}
                <span style={{ fontFamily: tema.formula, fontSize: 18, color: tema.texto }}><M>{p.math}</M></span>
              </>
            )}
          </div>
        </div>
      ))}
      <div style={{ fontFamily: tema.formula, fontSize: 16, color: tema.muted, textAlign: "right", marginTop: 6 }}>∎</div>
    </div>
  );
}

// Síntesis final: tres ideas, nunca un resumen de todo. Si caben más de tres,
// no es un cierre — es otra diapositiva.
export function Cierre({ bloque, tema, reflujo }) {
  const tarjetas = bloque.tarjetas || [];
  return (
    <div style={{ display: "grid", gridTemplateColumns: reflujo ? "1fr" : `repeat(${tarjetas.length}, minmax(0, 1fr))`, gap: 14 }}>
      {tarjetas.map((t, i) => (
        <div key={i} style={{ background: tema.card, border: `1px solid ${tema.border}`, borderRadius: 10, padding: "15px 17px" }}>
          <div style={{ fontFamily: tema.titulo, fontWeight: 600, fontSize: 16, color: tema.texto, marginBottom: 6 }}>{t.titulo}</div>
          <div style={{ fontSize: 14, lineHeight: 1.5, color: tema.muted }}>{t.detalle}</div>
        </div>
      ))}
    </div>
  );
}
