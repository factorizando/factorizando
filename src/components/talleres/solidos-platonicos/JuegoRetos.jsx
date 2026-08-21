// Sala 3 · El Reto. Diez preguntas sobre lo que se acaba de ver.
//
// Se contesta con opciones y no con teclado numérico porque una de las
// preguntas —"¿cuál es su dual?"— no tiene por respuesta un número, y cambiar
// de forma de contestar a media ronda desconcierta más de lo que ayuda.
//
// Las preguntas de contar **muestran el sólido girando**, con encendido nada
// más lo que hay que contar: contar caras en una figura que también enseña sus
// vértices es una prueba de atención, no de geometría. Y se contesta una sola
// vez: si falla, se dice qué pasaba y se sigue, como en todos los talleres.
import { useCallback, useState } from "react";
import { generarPartida, SOLIDOS_POR_ID } from "../../../data/talleres/solidos-platonicos/index.js";
import { sonar } from "../comun/sonido.js";
import { useRonda } from "../comun/hooks.js";
import { Boton, Cabecera, Cierre, Panel, Retro } from "../comun/ui.jsx";
import { ACENTO, C, TAM } from "./estilo.js";
import Visor from "./Visor.jsx";

const COLOR = ACENTO.reto;

// Qué se enciende en la figura según lo que se está preguntando.
const RESALTE = {
  "contar-caras": "caras",
  "contar-aristas": "aristas",
  "contar-vertices": "vertices",
};

export default function JuegoRetos({ registrar, finalizar, onSalir }) {
  const generar = useCallback(() => generarPartida(), []);
  const ronda = useRonda({ generar, alFinalizar: (r) => finalizar({ juego: "reto", ...r }) });
  const [dada, setDada] = useState(null);

  const ej = ronda.ejercicio;

  function otraPartida() {
    setDada(null);
    ronda.reiniciar();
  }

  if (ronda.terminada) {
    return (
      <Cierre
        aciertos={ronda.aciertos} total={ronda.total} mensaje={ronda.mensaje}
        color={COLOR} onOtra={otraPartida} onSalir={onSalir}
      />
    );
  }

  const solido = ej.solidoId ? SOLIDOS_POR_ID[ej.solidoId] : null;
  const bien = dada === ej.respuesta;

  function responder(opcion) {
    if (dada !== null) return;
    const acerto = opcion === ej.respuesta;
    registrar(ej.categoria, acerto);
    if (!acerto) ronda.fallar();
    sonar(acerto ? "bien" : "mal");
    setDada(opcion);
  }

  function siguiente() {
    ronda.cerrarEjercicio(bien);
    setDada(null);
  }

  return (
    <div>
      <Cabecera
        juego="El Reto" icono="🎯" color={COLOR}
        resultados={ronda.resultados} total={ronda.total}
        enunciado={ej.enunciado}
      />

      <div style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", alignItems: "start" }}>
        {solido ? (
          <Visor
            key={`${ronda.indice}-${solido.id}`}
            poliedro={solido.geometria}
            color={solido.color}
            resaltar={RESALTE[ej.categoria] || null}
            verVertices={RESALTE[ej.categoria] === "vertices"}
            altura={320}
          />
        ) : (
          <Panel estilo={{ display: "grid", placeItems: "center", minHeight: 200, textAlign: "center" }}>
            <div>
              <div style={{ fontSize: TAM.dato, fontWeight: 800, color: COLOR, lineHeight: 1.1 }}>
                C + V − A
              </div>
              <div style={{ fontSize: 22, fontWeight: 800, color: C.tenue, marginTop: 6 }}>
                siempre da 2
              </div>
            </div>
          </Panel>
        )}

        <div>
          {ej.apoyo && (
            <div style={{
              background: C.alto, border: `1px dashed ${C.bordeVivo}`, borderRadius: 12,
              padding: "9px 14px", marginBottom: 12, textAlign: "center",
              fontSize: 19, fontWeight: 800, color: C.tenue,
            }}>
              {ej.apoyo}
            </div>
          )}

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
            {ej.opciones.map((o) => {
              const esRespuesta = o === ej.respuesta;
              const marcada = o === dada;
              const fondo = dada === null ? C.panel
                : esRespuesta ? `${COLOR}26`
                  : marcada ? C.alto : C.panel;
              const borde = dada === null ? C.borde
                : esRespuesta ? COLOR
                  : marcada ? C.bordeVivo : C.borde;
              return (
                <button
                  key={o}
                  type="button"
                  onClick={() => responder(o)}
                  disabled={dada !== null}
                  style={{
                    background: fondo, border: `2px solid ${borde}`, borderRadius: 14,
                    color: dada !== null && !esRespuesta && !marcada ? C.apagado : C.texto,
                    cursor: dada === null ? "pointer" : "default",
                    fontFamily: "inherit", fontSize: 26, fontWeight: 800,
                    minHeight: 74, padding: "10px 8px", touchAction: "manipulation",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {o}
                </button>
              );
            })}
          </div>

          {dada !== null && (
            <>
              <Retro
                acerto={bien}
                color={COLOR}
                titulo={bien ? "Eso es" : `Es ${ej.respuesta}`}
              >
                {ej.explicacion}
              </Retro>
              <div style={{ marginTop: 14 }}>
                <Boton color={COLOR} onClick={siguiente}>
                  {ronda.indice + 1 === ronda.total ? "Ver resultado" : "Siguiente"} →
                </Boton>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
