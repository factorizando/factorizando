// El acertijo que guarda un portal.
//
// Aparece encima del nivel, se contesta y se cierra: no es una pantalla aparte
// ni una pausa del juego, es lo que hay dentro del portal que el jugador acaba
// de pisar.
//
// Al fallar **no se pierde nada**: se muestra la explicación —que cuenta cómo
// se llega, no solo cuál era— y el portal se queda ahí para volver a
// intentarlo con otro acertijo del mismo tema. Lo que sí queda anotado, y solo
// una vez, es si le salió a la primera: esa es toda la medición.
import { useState } from "react";
import { C, TAM } from "./estilo.js";
import { sonar } from "../comun/sonido.js";
import { Boton, Panel, Retro, Rotulo, TecladoNumerico } from "../comun/ui.jsx";
import { FiguraDeAcertijo } from "./Figuras.jsx";

const ETIQUETA_MATERIA = { matematicas: "Matemáticas", espanol: "Español" };

export default function Acertijo({ acertijo, color, onResuelto }) {
  const [valor, setValor] = useState("");
  const [elegidas, setElegidas] = useState([]);
  const [retro, setRetro] = useState(null);

  function responder(respuesta) {
    const bien = acertijo.tipo === "numero"
      ? respuesta === acertijo.respuesta
      : respuesta === acertijo.correcta;
    sonar(bien ? "bien" : "mal");
    setRetro({ bien });
  }

  // Los de ordenar se resuelven tocando las tarjetas en orden. Se revisa
  // cuando ya están todas: corregir a medias delataría la respuesta.
  function tocarTarjeta(texto) {
    if (retro || elegidas.includes(texto)) return;
    const nuevas = [...elegidas, texto];
    setElegidas(nuevas);
    sonar("toque");
    if (nuevas.length === acertijo.orden.length) {
      const bien = nuevas.every((t, i) => t === acertijo.orden[i]);
      sonar(bien ? "bien" : "mal");
      setRetro({ bien });
    }
  }

  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(8,11,16,.92)", zIndex: 40,
      display: "grid", placeItems: "center", padding: 20, overflowY: "auto",
    }}>
      <Panel estilo={{ maxWidth: 760, width: "100%", border: `2px solid ${color}`, maxHeight: "94vh", overflowY: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <Rotulo color={color}>◈ Portal · {ETIQUETA_MATERIA[acertijo.materia]}</Rotulo>
        </div>

        {acertijo.texto && (
          <p style={{
            margin: "16px 0 0", fontSize: "clamp(20px, 2.4vw, 27px)", fontWeight: 700,
            color: C.texto, lineHeight: 1.35, borderLeft: `4px solid ${color}`, paddingLeft: 14,
          }}>
            {acertijo.texto}
          </p>
        )}

        <p style={{
          margin: "16px 0 0", fontSize: TAM.enunciado, fontWeight: 800, color: C.texto, lineHeight: 1.3,
        }}>
          {acertijo.enunciado}
        </p>

        {acertijo.figura && (
          <div style={{
            margin: "18px 0 4px", display: "flex", justifyContent: "center",
            background: C.alto, borderRadius: 14, padding: "14px 16px",
            // Con la figura muy alta, el teclado se iba abajo del borde justo
            // cuando hay que contestar.
            maxHeight: "34vh", overflow: "hidden",
          }}>
            <div style={{ maxWidth: 460, width: "100%", display: "flex", justifyContent: "center" }}>
              <FiguraDeAcertijo figura={acertijo.figura} />
            </div>
          </div>
        )}

        {!retro ? (
          <div style={{ marginTop: 20 }}>
            {acertijo.tipo === "orden" ? (
              <div>
                <div style={{ display: "grid", gap: 10 }}>
                  {acertijo.tarjetas.map((t) => {
                    const puesto = elegidas.indexOf(t);
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => tocarTarjeta(t)}
                        disabled={puesto >= 0}
                        style={{
                          display: "flex", alignItems: "center", gap: 14, textAlign: "left",
                          background: puesto >= 0 ? C.alto : C.panel,
                          border: `2px solid ${puesto >= 0 ? color : C.borde}`,
                          borderRadius: 12, padding: "16px 18px", minHeight: 62,
                          color: C.texto, fontFamily: "inherit", fontSize: 19, fontWeight: 700,
                          cursor: puesto >= 0 ? "default" : "pointer",
                          opacity: puesto >= 0 ? 0.75 : 1, touchAction: "manipulation",
                        }}
                      >
                        <span style={{
                          width: 34, height: 34, borderRadius: "50%", flexShrink: 0,
                          display: "grid", placeItems: "center", fontSize: 17, fontWeight: 800,
                          background: puesto >= 0 ? color : C.alto,
                          color: puesto >= 0 ? "#10161d" : C.apagado,
                          border: `2px solid ${puesto >= 0 ? color : C.borde}`,
                        }}>
                          {puesto >= 0 ? puesto + 1 : "·"}
                        </span>
                        {t}
                      </button>
                    );
                  })}
                </div>
                {elegidas.length > 0 && (
                  <div style={{ marginTop: 12, textAlign: "right" }}>
                    <Boton variante="fantasma" tamano="chico" onClick={() => setElegidas([])}>
                      Empezar de nuevo
                    </Boton>
                  </div>
                )}
              </div>
            ) : acertijo.tipo === "numero" ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <TecladoNumerico
                  valor={valor} onCambiar={setValor} onEnviar={responder}
                  color={color} maxDigitos={4}
                />
              </div>
            ) : (
              <div style={{ display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
                {acertijo.opciones.map((op, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => responder(i)}
                    style={{
                      background: C.alto, border: `2px solid ${C.borde}`, borderRadius: 12,
                      color: C.texto, fontFamily: "inherit", fontSize: 19, fontWeight: 700,
                      padding: "18px 20px", minHeight: 64, cursor: "pointer", textAlign: "left",
                      touchAction: "manipulation",
                    }}
                    onPointerEnter={(e) => { e.currentTarget.style.borderColor = color; }}
                    onPointerLeave={(e) => { e.currentTarget.style.borderColor = C.borde; }}
                  >
                    {op}
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <>
            <Retro
              acerto={retro.bien}
              color={color}
              titulo={retro.bien ? "¡El portal se abre!" : "El portal no se abrió"}
            >
              {retro.bien
                ? acertijo.explicacion
                : <>
                    {acertijo.tipo === "numero"
                      ? `La respuesta era ${acertijo.respuesta}. `
                      : acertijo.tipo === "orden"
                        ? `El orden era: ${acertijo.orden.join(" → ")}. `
                        : `Era «${acertijo.opciones[acertijo.correcta]}». `}
                    {acertijo.explicacion}
                  </>}
            </Retro>
            <div style={{ marginTop: 18, display: "flex", gap: 12, justifyContent: "flex-end" }}>
              <Boton color={color} tamano="grande" onClick={() => onResuelto(retro.bien)}>
                {retro.bien ? "Tomar la llave 🔑" : "Volver al mapa"}
              </Boton>
            </div>
          </>
        )}
      </Panel>
    </div>
  );
}
