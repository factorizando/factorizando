// 🍕 La Pizzería — división con residuo, en dos pasos.
//
// Llegan pedidos: hay 26 rebanadas y en cada caja caben 8. Primero se
// pregunta cuántas cajas se llenan y **después, aparte**, cuántas rebanadas
// sobran. Partirlo en dos no es un capricho de interfaz: preguntado de un
// tirón ("26 entre 8"), el residuo se contesta de memoria o no se contesta;
// preguntado así, el niño tiene que mirar lo que quedó fuera de las cajas.
//
// El cierre de cada ronda es la parte que más importa y la que casi nunca se
// enseña: para llevarse lo que sobra haría falta **una caja más**. Ahí es
// donde el residuo deja de ser un número raro al final de la división y se
// vuelve la razón por la que se pide un camión extra o una mesa más.
import { useCallback, useState } from "react";
import { generarPartida } from "../../../data/talleres/pizzas-cajas-vasos/index.js";
import { sonar } from "./lib/sonido.js";
import { C, ACENTO, TAM } from "./estilo.js";
import { useRonda, plural } from "../comun/hooks.js";
import { Boton, Cabecera, Cierre, Operacion, Panel, RespuestaDada, Retro, Rotulo, TecladoNumerico } from "../comun/ui.jsx";
import { CajaPizza, MonteRebanadas, Rebanada } from "./Figuras.jsx";

const COLOR = ACENTO.pizzeria;

export default function JuegoPizzeria({ rango, registrar, finalizar, onSalir }) {
  const generar = useCallback(() => generarPartida("pizzeria", rango.id), [rango.id]);
  const ronda = useRonda({
    generar,
    alFinalizar: (r) => finalizar({ juego: "pizzeria", ...r }),
  });

  const [paso, setPaso] = useState("cajas");   // cajas · sobra · cierre
  const [valor, setValor] = useState("");
  const [retro, setRetro] = useState(null);    // { paso, bien, respuesta }
  const [limpio, setLimpio] = useState(true);

  const ej = ronda.ejercicio;

  function reiniciarEjercicio() {
    setPaso("cajas");
    setValor("");
    setRetro(null);
    setLimpio(true);
  }

  function otraPartida() {
    reiniciarEjercicio();
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

  function responder(n) {
    const esperado = paso === "cajas" ? ej.cajas : ej.sobran;
    const bien = n === esperado;
    registrar(paso === "cajas" ? ej.categorias.cajas : ej.categorias.sobra, bien);
    if (!bien) {
      ronda.fallar();
      setLimpio(false);
    }
    sonar(bien ? "bien" : "mal");
    setRetro({ paso, bien, respuesta: n });
  }

  function seguir() {
    if (paso === "cajas") {
      setPaso("sobra");
      setValor("");
      setRetro(null);
    } else if (paso === "sobra") {
      setPaso("cierre");
    } else {
      ronda.cerrarEjercicio(limpio);
      reiniciarEjercicio();
    }
  }

  const resuelto = paso === "cierre";
  const mostrarCajas = paso !== "cajas";
  // Con dibujo (7-8) el sobrante se ve desde que se llenan las cajas: contar
  // lo que quedó fuera *es* el ejercicio a esa edad. Sin dibujo (9-10) queda
  // en "?" hasta contestar, porque ahí lo que se entrena es calcularlo.
  const sobranteVisible = resuelto || retro?.paso === "sobra" || (ej.dibujar && paso === "sobra");

  return (
    <div>
      <Cabecera
        juego="La Pizzería" icono="🍕" color={COLOR}
        resultados={ronda.resultados} total={ronda.total}
        enunciado={
          paso === "cajas"
            ? `Llegaron ${ej.total} rebanadas. En cada caja caben ${ej.porCaja}.`
            : paso === "sobra"
              ? `Se llenaron ${plural(ej.cajas, "caja", "cajas")}.`
              : "El pedido quedó así:"
        }
      />

      <div style={{
        display: "grid", gap: 22,
        gridTemplateColumns: "minmax(300px, 1.4fr) minmax(260px, .9fr)",
        alignItems: "start",
      }}>
        {/* ── La escena ────────────────────────────────────────────────── */}
        <Panel>
          {!mostrarCajas ? (
            <>
              <Rotulo>Las rebanadas del pedido</Rotulo>
              <div style={{ margin: "14px 0 22px" }}>
                {ej.dibujar ? (
                  <MonteRebanadas n={ej.total} />
                ) : (
                  <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                    <Rebanada tam={72} />
                    <div style={{ fontSize: TAM.dato, fontWeight: 800, color: COLOR, lineHeight: 1 }}>
                      {ej.total}
                    </div>
                  </div>
                )}
              </div>
              <div style={{
                display: "flex", alignItems: "center", gap: 16, paddingTop: 16,
                borderTop: `1px solid ${C.borde}`,
              }}>
                <CajaPizza capacidad={ej.porCaja} llenas={ej.porCaja} ancho={116} color={COLOR} />
                <div style={{ color: C.tenue, fontSize: TAM.cuerpo, lineHeight: 1.4 }}>
                  En cada caja caben<br />
                  <strong style={{ color: C.texto, fontSize: 26 }}>{ej.porCaja} rebanadas</strong>
                </div>
              </div>
            </>
          ) : (
            <>
              <Rotulo color={COLOR}>Cajas llenas</Rotulo>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, margin: "14px 0 20px" }}>
                {Array.from({ length: ej.cajas }, (_, k) => (
                  <CajaPizza key={k} capacidad={ej.porCaja} llenas={ej.porCaja} ancho={104} color={COLOR} />
                ))}
              </div>

              {/* El sobrante va aparte y se ve distinto: fuera de toda caja,
                  sobre la mesa. Es el residuo, dibujado. */}
              <div style={{
                border: `2px dashed ${ej.sobran > 0 ? C.amarillo : C.borde}`,
                borderRadius: 12, padding: "14px 16px",
                background: ej.sobran > 0 ? "rgba(255,209,102,.06)" : "transparent",
              }}>
                <Rotulo color={ej.sobran > 0 ? C.amarillo : C.apagado}>
                  Fuera de las cajas
                </Rotulo>
                <div style={{ marginTop: 12, minHeight: 54, display: "flex", alignItems: "center", gap: 14 }}>
                  {!sobranteVisible ? (
                    <span style={{ fontSize: 44, fontWeight: 800, color: C.apagado }}>?</span>
                  ) : ej.sobran === 0 ? (
                    <span style={{ color: C.tenue, fontSize: TAM.cuerpo }}>
                      Nada. Las cajas quedaron justas.
                    </span>
                  ) : ej.dibujar ? (
                    <MonteRebanadas n={ej.sobran} tam={42} />
                  ) : (
                    <>
                      <Rebanada tam={46} />
                      <span style={{ fontSize: 40, fontWeight: 800, color: C.amarillo }}>{ej.sobran}</span>
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </Panel>

        {/* ── La pregunta ──────────────────────────────────────────────── */}
        <Panel>
          {!resuelto ? (
            <>
              <div style={{ fontSize: 22, fontWeight: 800, color: C.texto, marginBottom: 16, lineHeight: 1.3 }}>
                {paso === "cajas" ? "¿Cuántas cajas se llenan?" : "¿Cuántas rebanadas sobran?"}
              </div>
              {retro ? (
                <RespuestaDada valor={retro.respuesta} acerto={retro.bien} color={COLOR} />
              ) : (
                <TecladoNumerico
                  valor={valor} onCambiar={setValor} onEnviar={responder}
                  color={COLOR} maxDigitos={2}
                />
              )}
            </>
          ) : (
            <>
              <Rotulo color={COLOR}>Lo que acabas de hacer</Rotulo>
              <Operacion color={COLOR}>
                {ej.exacta
                  ? `${ej.total} ÷ ${ej.porCaja} = ${ej.cajas}`
                  : `${ej.total} ÷ ${ej.porCaja} = ${ej.cajas} y sobran ${ej.sobran}`}
              </Operacion>
              <p style={{ color: C.texto, fontSize: TAM.cuerpo, lineHeight: 1.55, marginTop: 16 }}>
                {ej.exacta ? (
                  <>Las {ej.cajas} cajas quedaron llenas y no sobró ni una rebanada.
                    Cuando no sobra nada, decimos que la división es <strong>exacta</strong>.</>
                ) : (
                  <>Se llenaron {plural(ej.cajas, "caja", "cajas")} y quedaron{" "}
                    {plural(ej.sobran, "rebanada", "rebanadas")} sobre la mesa.
                    Para llevártelas haría falta <strong style={{ color: C.amarillo }}>una caja más</strong>:
                    serían {ej.cajas + 1} cajas, y la última iría a medio llenar.</>
                )}
              </p>
            </>
          )}

          {/* En la pantalla de cierre no se repite: la conclusión ya dice lo
              mismo y con más contexto. */}
          {retro && !resuelto && (
            <Retro
              acerto={retro.bien}
              color={COLOR}
              titulo={
                retro.bien
                  ? retro.paso === "cajas"
                    ? `Sí: se llenan ${plural(ej.cajas, "caja", "cajas")}.`
                    : ej.sobran === 0 ? "Sí: no sobró ninguna." : `Sí: sobran ${plural(ej.sobran, "rebanada", "rebanadas")}.`
                  : retro.paso === "cajas"
                    ? `Se llenan ${plural(ej.cajas, "caja", "cajas")}.`
                    : ej.sobran === 0 ? "No sobra ninguna: las cajas quedaron justas." : `Sobran ${plural(ej.sobran, "rebanada", "rebanadas")}.`
              }
            >
              {!retro.bien && (
                retro.paso === "cajas"
                  ? `Con ${ej.total} rebanadas de a ${ej.porCaja} se llenan ${ej.cajas}; míralas abajo.`
                  : `Quedaron ${ej.cajas} cajas de a ${ej.porCaja}, o sea ${ej.cajas * ej.porCaja} rebanadas guardadas de las ${ej.total} que llegaron.`
              )}
            </Retro>
          )}

          {(retro || resuelto) && (
            <div style={{ marginTop: 18 }}>
              <Boton color={COLOR} tamano="grande" onClick={seguir} estilo={{ width: "100%" }}>
                {paso === "cajas" ? "Ahora, ¿cuántas sobran?" : paso === "sobra" ? "Ver la operación" : "Siguiente pedido"}
              </Boton>
            </div>
          )}
        </Panel>
      </div>
    </div>
  );
}
