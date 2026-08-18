// 🌱 El Huerto — la multiplicación vista como área (modo de 9-10 años).
//
// La misma operación de la fábrica, pero acostada en dos dimensiones: se pide
// sembrar 4 filas por 6 columnas y el niño arrastra el dedo sobre la parcela
// hasta formar el rectángulo. Los cuadritos sembrados son el producto.
//
// Para qué sirve tender este puente: el arreglo rectangular es lo que después
// explica que 4 × 6 y 6 × 4 den lo mismo (es el mismo huerto girado), lo que
// convierte la división en "sé el área y un lado, ¿cuánto mide el otro?", y
// lo que años más tarde se vuelve el área del rectángulo y la multiplicación
// de binomios. Todo eso ya está aquí, en cuadritos de tierra.
import { useCallback, useState } from "react";
import { generarPartida } from "../../../data/talleres/pizzas-cajas-vasos/index.js";
import { sonar } from "./lib/sonido.js";
import { C, ACENTO, TAM } from "./estilo.js";
import { useRonda } from "../comun/hooks.js";
import { Boton, Cabecera, Cierre, Operacion, Panel, RespuestaDada, Retro, Rotulo, TecladoNumerico } from "../comun/ui.jsx";
import { Parcela } from "./Figuras.jsx";

const COLOR = ACENTO.huerto;

export default function JuegoHuerto({ rango, registrar, finalizar, onSalir }) {
  const generar = useCallback(() => generarPartida("huerto", rango.id), [rango.id]);
  const ronda = useRonda({
    generar,
    alFinalizar: (r) => finalizar({ juego: "fabrica", modo: "huerto", ...r }),
  });

  const [seleccion, setSeleccion] = useState({ filas: 0, columnas: 0 });
  const [fase, setFase] = useState("sembrar"); // sembrar · contar
  const [valor, setValor] = useState("");
  const [retro, setRetro] = useState(null);

  const ej = ronda.ejercicio;

  function limpiar() {
    setSeleccion({ filas: 0, columnas: 0 });
    setFase("sembrar");
    setValor("");
    setRetro(null);
  }

  function otraPartida() {
    limpiar();
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

  const cuadra = seleccion.filas === ej.filas && seleccion.columnas === ej.columnas;

  function responder(n) {
    const bien = n === ej.total;
    registrar(ej.categoria, bien);
    if (!bien) ronda.fallar();
    sonar(bien ? "bien" : "mal");
    setRetro({ bien, respuesta: n });
  }

  function siguiente() {
    ronda.cerrarEjercicio(!!retro?.bien);
    limpiar();
  }

  return (
    <div>
      <Cabecera
        juego="El Huerto" icono="🌱" color={COLOR}
        resultados={ronda.resultados} total={ronda.total}
        enunciado={`Siembra ${ej.filas} filas de ${ej.columnas} matas.`}
      />

      <div style={{
        display: "grid", gap: 22,
        gridTemplateColumns: "minmax(300px, 1.2fr) minmax(260px, .9fr)",
        alignItems: "start",
      }}>
        <Panel>
          <Rotulo color={COLOR}>Arrastra el dedo desde la esquina</Rotulo>
          <div style={{ marginTop: 14 }}>
            <Parcela
              max={rango.huerto.max}
              filas={seleccion.filas}
              columnas={seleccion.columnas}
              objetivo={fase === "contar" ? ej : null}
              onCelda={(celda) => { if (fase === "sembrar") setSeleccion(celda); }}
            />
          </div>
          <div style={{
            display: "flex", gap: 22, marginTop: 16, flexWrap: "wrap",
            fontSize: TAM.cuerpo, color: C.tenue,
          }}>
            <span>
              Filas:{" "}
              <strong style={{
                color: seleccion.filas === ej.filas ? C.verde : C.texto, fontSize: 24,
              }}>{seleccion.filas}</strong>
              <span style={{ color: C.apagado }}> de {ej.filas}</span>
            </span>
            <span>
              Columnas:{" "}
              <strong style={{
                color: seleccion.columnas === ej.columnas ? C.verde : C.texto, fontSize: 24,
              }}>{seleccion.columnas}</strong>
              <span style={{ color: C.apagado }}> de {ej.columnas}</span>
            </span>
          </div>
        </Panel>

        <Panel>
          {fase === "sembrar" ? (
            <>
              <div style={{ fontSize: 22, fontWeight: 800, color: C.texto, lineHeight: 1.3 }}>
                Forma el rectángulo de {ej.filas} × {ej.columnas}
              </div>
              <p style={{ color: C.tenue, fontSize: TAM.cuerpo, lineHeight: 1.5, margin: "12px 0 20px" }}>
                Toca la parcela y arrastra sin soltar. Puedes corregir las veces que quieras:
                mientras no siembres, nada cuenta.
              </p>
              <Boton
                color={COLOR} tamano="grande" disabled={!cuadra}
                onClick={() => setFase("contar")} estilo={{ width: "100%" }}
              >
                {cuadra ? "Sembrar 🌱" : "Todavía no cuadra"}
              </Boton>
            </>
          ) : (
            <>
              <div style={{ fontSize: 22, fontWeight: 800, color: C.texto, marginBottom: 16, lineHeight: 1.3 }}>
                ¿Cuántas matas quedaron sembradas?
              </div>
              {retro ? (
                <RespuestaDada valor={retro.respuesta} acerto={retro.bien} color={COLOR} />
              ) : (
                <TecladoNumerico
                  valor={valor} onCambiar={setValor} onEnviar={responder}
                  color={COLOR} maxDigitos={3}
                />
              )}
              {retro && (
                <>
                  <Retro
                    acerto={retro.bien} color={COLOR}
                    titulo={retro.bien ? `Sí: ${ej.total} matas.` : `Quedaron ${ej.total} matas.`}
                  >
                    {`${ej.filas} filas con ${ej.columnas} matas cada una. Los cuadritos que se pintaron son el resultado de multiplicar los dos lados.`}
                  </Retro>
                  <Operacion color={COLOR}>{ej.filas} × {ej.columnas} = {ej.total}</Operacion>
                  <div style={{ marginTop: 18 }}>
                    <Boton color={COLOR} tamano="grande" onClick={siguiente} estilo={{ width: "100%" }}>
                      Siguiente huerto
                    </Boton>
                  </div>
                </>
              )}
            </>
          )}
        </Panel>
      </div>
    </div>
  );
}
