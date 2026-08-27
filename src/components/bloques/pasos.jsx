// Procedimiento y cierre.
import { M } from "../../data/teoria/shared.jsx";
import { eyebrow, tarjeta } from "./ui.js";

// Demostración o procedimiento paso a paso. Cierra con ∎, como en un texto de
// matemáticas: el símbolo dice «hasta aquí llega el argumento».
//
// `datos` son los valores DADOS del problema —lo que se sabe antes de empezar—,
// cada uno con su rótulo: «△ ABC · AB = 5, BC = 6, CA = 7». Van arriba y
// separados de los pasos porque no son un paso: son el punto de partida, y
// mezclarlos con el procedimiento hace que el primer paso parezca deducir algo
// que en realidad venía en el enunciado.
export function Pasos({ bloque, tema, reflujo }) {
  const datos = bloque.datos || [];
  return (
    <div style={tarjeta(tema)}>
      {bloque.metodo && <div style={eyebrow(tema)}>{bloque.metodo}</div>}
      {datos.length > 0 && (
        <div style={{
          display: "grid",
          // Dos dados caben en paralelo cuando son dos cosas comparables —los
          // dos triángulos del enunciado, los dos casos del circuito—, que es
          // como venían. Más de dos, o en reflujo, se apilan.
          gridTemplateColumns: !reflujo && datos.length === 2 ? "1fr 1fr" : "1fr",
          gap: 10,
          marginBottom: 15,
          paddingBottom: 14,
          borderBottom: `1px solid ${tema.border}`,
        }}>
          {datos.map((d, i) => (
            <div key={i}>
              {d.label && (
                <div style={{
                  fontFamily: tema.mono, fontSize: 10.5, letterSpacing: "0.16em",
                  textTransform: "uppercase", color: tema.acento, marginBottom: 5,
                }}>{d.label}</div>
              )}
              {d.math && (
                <div style={{ fontFamily: tema.formula, fontSize: 16, color: tema.texto, lineHeight: 1.5 }}>
                  <M>{d.math}</M>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {(bloque.pasos || []).map((p, i) => (
        <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginTop: i ? 13 : 0 }}>
          <span style={{
            width: 24, height: 24, borderRadius: "50%",
            border: `1px solid ${tema.acentoBorde}`, color: tema.acento,
            fontFamily: tema.mono, fontSize: 11.5,
            display: "grid", placeItems: "center", flexShrink: 0,
          }}>{i + 1}</span>
          {/* `pre` es el nombre que traen los 249 pasos del corpus: la prosa que
              va ANTES de la fórmula («Primer par de lados: »). El bloque leía
              `texto`, un campo que no existe en ningún paso, así que esa prosa
              no se pintaba nunca y los ejemplos resueltos se veían como una
              columna de fórmulas sin decir qué hacía cada una. Se aceptan los
              dos nombres para no renombrar 249 entradas de datos. */}
          <div style={{ fontSize: 15.5, lineHeight: 1.55, color: tema.cuerpo }}>
            {p.texto ?? p.pre}
            {p.math && (
              <>
                {(p.texto ?? p.pre) ? " " : null}
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
