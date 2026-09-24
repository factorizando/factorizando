// Cuerpo compartido de los tres juegos de Descomponer números: cabecera con
// progreso, la figura, la pregunta y la conclusión con la operación escrita.
//
// La mecánica es la misma en los tres talleres —se plantea la situación, el
// niño contesta con el teclado numérico, retroalimentación inmediata y
// siguiente—; lo único que cambia es la figura, que llega como nodo ya armado.
// Igual que en Pizzas, la operación escrita aparece **al resolver**, nunca en
// el enunciado.
import { C, TAM, ETIQUETA } from "./estilo.js";
import { Boton, Cabecera, Cierre, Operacion, Panel, Retro, RespuestaDada, Rotulo, TecladoNumerico } from "../comun/ui.jsx";

export default function Escenario({ operacion, ronda, pasos, color, figura, maxDigitos, onSalir, onOtra }) {
  if (ronda.terminada) {
    return (
      <Cierre
        aciertos={ronda.aciertos} total={ronda.total} mensaje={ronda.mensaje}
        color={color} onOtra={onOtra} onSalir={onSalir}
      />
    );
  }

  const ej = ronda.ejercicio;
  const et = ETIQUETA[operacion];
  const { paso, valor, setValor, retro, resuelto, ultimo } = pasos;

  const pregunta = resuelto ? null : paso.pregunta;
  const textoRetro = !retro ? null
    : retro.bien ? "¡Muy bien! Era justo eso."
      : `Todavía no. La respuesta es ${paso.respuesta}.`;

  return (
    <div>
      <Cabecera
        juego={et.nombre} icono={et.icono} color={color}
        resultados={ronda.resultados} total={ronda.total}
        enunciado={resuelto ? "El ejercicio quedó así:" : ej.enunciado}
      />

      <div style={{
        display: "grid", gap: 22,
        gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
        alignItems: "start",
      }}>
        <Panel>
          <Rotulo color={color}>La situación</Rotulo>
          <div style={{ marginTop: 16 }}>{figura}</div>
        </Panel>

        <Panel>
          {!resuelto ? (
            <>
              <div style={{ fontSize: 22, fontWeight: 800, color: C.texto, marginBottom: 16, lineHeight: 1.3 }}>
                {pregunta}
              </div>
              {retro ? (
                <RespuestaDada valor={retro.respuesta} acerto={retro.bien} color={color} />
              ) : (
                <TecladoNumerico
                  valor={valor} onCambiar={setValor} onEnviar={pasos.responder}
                  color={color} maxDigitos={maxDigitos}
                />
              )}

              {retro && (
                <Retro acerto={retro.bien} color={color} titulo={textoRetro} />
              )}

              {retro && (
                <div style={{ marginTop: 18 }}>
                  <Boton color={color} tamano="grande" onClick={pasos.seguir} estilo={{ width: "100%" }}>
                    {ultimo ? "Ver la operación" : "Siguiente paso"}
                  </Boton>
                </div>
              )}
            </>
          ) : (
            <>
              <Rotulo color={color}>Lo que acabas de hacer</Rotulo>
              <Operacion color={color}>{ej.conclusion.operacion}</Operacion>
              <p style={{ color: C.texto, fontSize: TAM.cuerpo, lineHeight: 1.55, marginTop: 16 }}>
                {ej.conclusion.texto}
              </p>
              <div style={{ marginTop: 18 }}>
                <Boton color={color} tamano="grande" onClick={pasos.siguiente} estilo={{ width: "100%" }}>
                  Siguiente ejercicio
                </Boton>
              </div>
            </>
          )}
        </Panel>
      </div>
    </div>
  );
}
