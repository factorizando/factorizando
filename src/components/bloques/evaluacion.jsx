// Reactivo y sondeo.
//
// La regla que gobierna los dos: la respuesta del alumno nunca se tacha ni se
// pinta de rojo. Se enciende la correcta, la suya queda con contorno punteado y
// la explicación pasa a primer plano (docs/DISENO.md §2.4). El color no
// distingue acierto de error; lo hacen la forma y la palabra.
import { M } from "../../data/teoria/shared.jsx";
import { eyebrow, tarjeta } from "./ui.js";

const LETRAS = "ABCDEFGH";

// `disposicion: "lado"` pone el enunciado a la izquierda y las opciones a la
// derecha. Es el arreglo del problema más visible de los reactivos actuales: tres
// opciones apiladas dejan dos tercios de la diapositiva en negro.
export function Pregunta({ bloque, tema, respuestaDada, onResponder, reflujo }) {
  const resuelto = respuestaDada != null;
  const correcta = bloque.correcta;
  const aLado = bloque.disposicion === "lado" && !reflujo;
  // Una oración con hueco, no una palabra: cambia cómo se compone la tarjeta.
  const esOracion = /_{2,}/.test(bloque.apoyo || "") && (bloque.apoyo || "").trim().split(/\s+/).length >= 4;

  // El rótulo va FUERA de las dos columnas, no dentro de la primera. Cuando
  // estaba dentro, las opciones se alineaban con él y no con la pregunta: 49 px
  // de desfase que se veían como un escalón. Sacarlo es la solución estructural
  // —las dos columnas empiezan a la misma altura por construcción— en vez de
  // compensar con un margen calculado, que se rompe en cuanto el rótulo ocupa
  // dos líneas.
  // 7 para la pregunta y 5 para las opciones, no al revés. Medido sobre los 42
  // reactivos de Acentuación: el texto más largo de una opción ocupa 74 px de
  // mediana dentro de un botón de 680 — un 11 %. Esos recuadros casi vacíos
  // pesaban más que la pregunta y se llevaban la vista antes que ella.
  const columnas = aLado
    ? { display: "grid", gridTemplateColumns: "7fr 5fr", gap: 26, alignItems: "start" }
    : undefined;

  return (
    <div>
      {bloque.etiqueta && (
        <div style={{ fontFamily: tema.mono, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: tema.acento, marginBottom: 12 }}>
          {bloque.etiqueta}
        </div>
      )}

      <div style={columnas}>
        <div>
          <p style={{ fontFamily: tema.titulo, fontWeight: 500, fontSize: aLado ? 27 : 24, lineHeight: 1.28, letterSpacing: "-0.015em", color: tema.texto, margin: aLado ? 0 : "0 0 18px", textWrap: "pretty" }}>
            {bloque.enunciado}
          </p>

          {/* El apoyo se dibuja SIEMPRE que exista, no solo en dos columnas.
              Estaba condicionado a `aLado`, así que en un teléfono la oración a
              completar desaparecía y quedaba «Completa la oración» sin oración.
              Es contenido, no adorno de la disposición ancha. */}
          {bloque.apoyo && (
            // El apoyo es una palabra suelta o una oración con hueco. Una palabra
            // se agranda y se separa —es lo que hay que mirar letra por letra—;
            // una oración a ese tamaño y con esa separación se vuelve ilegible,
            // así que baja de cuerpo y se alinea a la izquierda, como se lee.
            <div style={{ marginTop: 22, background: tema.card, border: `1px solid ${tema.border}`, borderRadius: 10, padding: "18px 20px", textAlign: esOracion ? "left" : "center" }}>
              <div style={{
                fontFamily: tema.mono,
                fontSize: esOracion ? 17 : 25,
                lineHeight: esOracion ? 1.6 : 1.2,
                letterSpacing: esOracion ? "0.02em" : "0.16em",
                color: tema.acento,
              }}>{bloque.apoyo}</div>
              {bloque.apoyoPie && (
                <div style={{ fontFamily: tema.mono, fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: tema.sub, marginTop: 11, textAlign: esOracion ? "left" : "center" }}>
                  {bloque.apoyoPie}
                </div>
              )}
            </div>
          )}
        </div>

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

      </div>

      {/* La explicación ocupa su sitio desde el principio, oculta con
          `visibility`. Si apareciera de la nada, al responder empujaría la
          diapositiva y la pregunta se movería justo mientras se lee: medido, 32
          px de salto con la diapositiva centrada. Reservando el hueco, el salto
          es cero y la composición puede ir centrada sin pagar ese precio. */}
      {bloque.explicacion && (
        <p aria-hidden={!resuelto} style={{
          marginTop: 14, background: tema.card2, borderRadius: 9, padding: "13px 17px",
          fontSize: 15, lineHeight: 1.55, color: tema.cuerpo,
          visibility: resuelto ? "visible" : "hidden",
          transition: "opacity 0.2s", opacity: resuelto ? 1 : 0,
        }}>
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
