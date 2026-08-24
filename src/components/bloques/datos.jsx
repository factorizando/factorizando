// Bloques que ordenan datos: tabla, pares clave→valor, paneles paralelos,
// secuencia y línea de tiempo.
import { eyebrow, tarjeta } from "./ui.js";

// Máximo seis filas en lienzo (docs/DISENO.md §2.3). Por debajo del umbral de
// reflujo la tabla se convierte en fichas apiladas: una tabla de tres columnas
// en 335 px no se lee, se adivina.
export function Tabla({ bloque, tema, reflujo }) {
  const cols = bloque.columnas || [];
  const filas = bloque.filas || [];

  if (reflujo) {
    return (
      <div style={tarjeta(tema)}>
        {bloque.titulo && <div style={eyebrow(tema)}>{bloque.titulo}</div>}
        {filas.map((f, i) => (
          <div key={i} style={{
            background: tema.card2, borderRadius: 9, padding: "11px 14px",
            marginTop: i ? 9 : 0,
          }}>
            <div style={{ fontSize: 15, lineHeight: 1.4, color: tema.texto, marginBottom: 7 }}>{f[0]}</div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 13.5 }}>
              <span style={{ color: tema.texto }}>{f[1]}</span>
              <span style={{ fontFamily: tema.mono, fontSize: 12.5, color: tema.acento, textAlign: "right" }}>{f[2]}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={tarjeta(tema)}>
      {bloque.titulo && <div style={eyebrow(tema)}>{bloque.titulo}</div>}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            {cols.map((c, i) => (
              <th key={i} style={{
                fontFamily: tema.mono, fontSize: 10.5, letterSpacing: "0.14em",
                textTransform: "uppercase", color: tema.muted, textAlign: "left",
                fontWeight: 500, padding: "0 16px 10px 0",
                borderBottom: `1px solid ${tema.border}`,
                width: bloque.anchos?.[i],
              }}>{c}</th>
            ))}
          </tr>
          {filas.map((f, i) => (
            <tr key={i}>
              {f.map((celda, j) => (
                <td key={j} style={{
                  lineHeight: 1.4, verticalAlign: "top",
                  padding: "10px 16px 10px 0",
                  borderBottom: i === filas.length - 1 ? "none" : `1px solid ${tema.border}`,
                  // La 1.ª columna es la situación, la 2.ª la regla y la 3.ª los
                  // ejemplos: mono y en acento porque son datos que se cotejan.
                  color: j === 0 ? tema.cuerpo : j === 1 ? tema.texto : tema.acento,
                  fontFamily: j === 2 ? tema.mono : undefined,
                  fontSize: j === 2 ? 13 : 15,
                }}>{celda}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Pares clave→valor: lo que en pizarrón sería una llave.
export function CuadroSemantico({ bloque, tema, reflujo }) {
  const filas = bloque.filas || [];
  return (
    <div style={tarjeta(tema)}>
      {bloque.titulo && <div style={eyebrow(tema)}>{bloque.titulo}</div>}
      <div style={{ display: "grid", gridTemplateColumns: reflujo ? "1fr" : "200px 1fr" }}>
        {filas.map((f, i) => {
          const ultima = i === filas.length - 1;
          const borde = ultima ? "none" : `1px solid ${tema.border}`;
          return (
            <div key={i} style={{ display: "contents" }}>
              <div style={{
                fontFamily: tema.mono, fontSize: 11, letterSpacing: "0.1em",
                textTransform: "uppercase", color: tema.muted,
                padding: reflujo ? "11px 0 2px" : "11px 16px 11px 0",
                borderBottom: reflujo ? "none" : borde,
              }}>{f.clave}</div>
              <div style={{
                fontSize: 15, lineHeight: 1.5, color: tema.cuerpo,
                padding: reflujo ? "0 0 11px" : "11px 0", borderBottom: borde,
              }}>{f.valor}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// De dos a cuatro paneles paralelos. Es comparación, no enumeración: si los
// paneles no se leen en horizontal a la vez, es una lista.
export function Columnas({ bloque, tema, reflujo }) {
  const paneles = bloque.paneles || [];
  return (
    <div style={tarjeta(tema)}>
      {bloque.titulo && <div style={eyebrow(tema)}>{bloque.titulo}</div>}
      <div style={{ display: "grid", gridTemplateColumns: reflujo ? "1fr" : `repeat(${paneles.length}, minmax(0, 1fr))` }}>
        {paneles.map((p, i) => (
          <div key={i} style={{
            padding: reflujo ? "14px 0" : "6px 18px",
            textAlign: reflujo ? "left" : "center",
            borderRight: !reflujo && i < paneles.length - 1 ? `1px solid ${tema.border}` : "none",
            borderBottom: reflujo && i < paneles.length - 1 ? `1px solid ${tema.border}` : "none",
          }}>
            <h4 style={{ fontFamily: tema.titulo, fontWeight: 600, fontSize: 19, letterSpacing: "-0.01em", color: tema.acento, margin: "0 0 2px" }}>
              {p.titulo}
            </h4>
            {p.alterno && <div style={{ fontSize: 13, color: tema.muted, marginBottom: 13 }}>{p.alterno}</div>}
            {p.celdas != null && (
              <div style={{ display: "flex", gap: 5, justifyContent: reflujo ? "flex-start" : "center", marginBottom: 13 }}>
                {Array.from({ length: p.celdas }, (_, c) => (
                  <span key={c} style={{
                    width: 26, height: 26, borderRadius: 6,
                    border: `1px solid ${c === p.tonica ? tema.acento : tema.borderFuerte}`,
                    background: c === p.tonica ? tema.acentoSuave : "transparent",
                    display: "grid", placeItems: "center",
                  }}>
                    {c === p.tonica && <i style={{ width: 5, height: 5, borderRadius: "50%", background: tema.acento, display: "block" }} />}
                  </span>
                ))}
              </div>
            )}
            {p.ejemplo && (
              <div style={{ fontFamily: tema.formula, fontStyle: "italic", fontSize: 19, color: tema.texto, marginBottom: 7 }}>
                {p.ejemplo}
              </div>
            )}
            {p.regla && <div style={{ fontSize: 13.5, lineHeight: 1.45, color: tema.muted }}>{p.regla}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

// Proceso ordenado que se lee de izquierda a derecha.
export function Secuencia({ bloque, tema, reflujo }) {
  const pasos = bloque.pasos || [];
  return (
    <div style={{ display: "flex", flexDirection: reflujo ? "column" : "row", alignItems: reflujo ? "stretch" : "center", gap: 11 }}>
      {pasos.map((p, i) => (
        <div key={i} style={{ display: "contents" }}>
          <div style={{ flex: 1, background: tema.card2, border: `1px solid ${tema.border}`, borderRadius: 9, padding: "13px 15px" }}>
            <div style={{ fontFamily: tema.mono, fontSize: 10, letterSpacing: "0.16em", color: tema.acento, marginBottom: 6 }}>
              {String(i + 1).padStart(2, "0")}
            </div>
            <div style={{ fontSize: 14, lineHeight: 1.45, color: tema.cuerpo }}>{p}</div>
          </div>
          {i < pasos.length - 1 && (
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ color: tema.sub, flexShrink: 0, alignSelf: "center", transform: reflujo ? "rotate(90deg)" : "none" }} aria-hidden="true">
              <path d="M6 3.5l5 4.5-5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

// Cronología o progresión.
export function LineaTiempo({ bloque, tema, reflujo }) {
  const hitos = bloque.hitos || [];
  return (
    <div style={{ position: "relative", paddingTop: reflujo ? 0 : 30 }}>
      {!reflujo && <div style={{ position: "absolute", top: 8, left: 4, right: 4, height: 1, background: tema.borderFuerte }} />}
      <div style={{ display: "grid", gridTemplateColumns: reflujo ? "1fr" : `repeat(${hitos.length}, minmax(0, 1fr))`, gap: 20 }}>
        {hitos.map((h, i) => (
          <div key={i} style={{ position: "relative" }}>
            {!reflujo && <span style={{ position: "absolute", top: -26, left: 0, width: 9, height: 9, borderRadius: "50%", background: tema.acento }} />}
            <div style={{ fontFamily: tema.mono, fontSize: 12, color: tema.acento, marginBottom: 4 }}>{h.marca}</div>
            <div style={{ fontSize: 14, lineHeight: 1.45, color: tema.cuerpo }}>{h.texto}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
