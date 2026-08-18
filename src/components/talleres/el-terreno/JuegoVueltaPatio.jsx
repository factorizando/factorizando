// 👟 La Vuelta al Patio — el perímetro como recorrido.
//
// El juego más elemental del taller, y el primero: antes de ser una suma de
// lados, el perímetro es **la vuelta completa a un patio**. El niño camina la
// orilla con el dedo y va dejando huellas; cada lado se rotula con los pasos
// que le tocaron.
//
// De ahí sale solo el descubrimiento que el juego persigue: arriba y abajo dan
// los mismos pasos, y los otros dos también. Por eso los ejercicios de atajo
// —donde dos lados están cerrados y hay que predecir el total— no llegan hasta
// haber caminado tres vueltas completas: la regla tiene que haberse sentido
// antes de usarse. Y por eso el generador nunca hace un patio cuadrado: con
// los cuatro lados iguales, "se repiten de dos en dos" se confunde con "todos
// miden lo mismo".
import { useCallback, useState } from "react";
import { generarPartida } from "../../../data/talleres/el-terreno/index.js";
import { sonar } from "./lib/sonido.js";
import { ladoDe, tramosDe } from "./lib/piezas.js";
import { C, ACENTO, MATERIAL, TAM } from "./estilo.js";
import { useRonda } from "../comun/hooks.js";
import {
  Boton, Cabecera, Cierre, Operacion, Panel, RespuestaDada, Retro, Rotulo, TecladoNumerico,
} from "../comun/ui.jsx";
import { PatioVuelta } from "./Figuras.jsx";

const COLOR = ACENTO["vuelta-patio"];

export default function JuegoVueltaPatio({ rango, registrar, finalizar, onSalir }) {
  const generar = useCallback(() => generarPartida("vuelta-patio", rango.id), [rango.id]);
  const ronda = useRonda({
    generar,
    alFinalizar: (r) => finalizar({ juego: "vuelta-patio", ...r }),
  });

  const [pasos, setPasos] = useState(() => new Set());
  const [valor, setValor] = useState("");
  const [retro, setRetro] = useState(null);

  const ej = ronda.ejercicio;

  function limpiar() {
    setPasos(new Set());
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

  const esAtajo = ej.tipo === "atajo";
  // En el atajo solo se puede caminar lo que quedó abierto: dos lados.
  const caminables = tramosDe(ej.ancho, ej.alto).filter((t) => !ej.ladosOcultos.includes(ladoDe(t.id)));
  const completo = pasos.size >= caminables.length;
  const puedeContestar = !ej.caminarObligatorio || completo;
  const unidad = ej.unidades ? "metros" : "pasos";

  function pisar(id) {
    if (retro) return;
    setPasos((p) => (p.has(id) ? p : new Set(p).add(id)));
  }

  function caminarTodo() {
    setPasos(new Set(caminables.map((t) => t.id)));
  }

  function responder(n) {
    const bien = n === ej.perimetro;
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
        juego="La Vuelta al Patio" icono="👟" color={COLOR}
        resultados={ronda.resultados} total={ronda.total}
        enunciado={esAtajo
          ? "Dos lados del patio están cerrados. Camina los que puedas."
          : "Dale la vuelta completa al patio, por la orilla."}
      />

      <div style={{
        display: "grid", gap: 22,
        gridTemplateColumns: "minmax(320px, 1.3fr) minmax(270px, .9fr)",
        alignItems: "start",
      }}>
        <Panel>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <Rotulo color={MATERIAL.huella}>Camina con el dedo por la orilla</Rotulo>
            {pasos.size > 0 && !retro && (
              <button
                type="button"
                onClick={() => setPasos(new Set())}
                style={{
                  background: "transparent", border: `1px solid ${C.borde}`, borderRadius: 8,
                  color: C.apagado, cursor: "pointer", fontFamily: "inherit",
                  fontSize: 13.5, fontWeight: 700, padding: "0 12px", height: 44,
                }}
              >
                Volver a empezar
              </button>
            )}
          </div>

          <PatioVuelta
            ancho={ej.ancho} alto={ej.alto}
            pintados={pasos}
            ladosOcultos={ej.ladosOcultos}
            medidas
            unidades={ej.unidades}
            onPintar={pisar}
          />

          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: 14, marginTop: 16, flexWrap: "wrap",
          }}>
            {ej.contadorEnVivo ? (
              <span style={{ color: C.tenue, fontSize: TAM.cuerpo }}>
                Llevas{" "}
                <strong style={{ color: completo ? C.verde : C.texto, fontSize: 26 }}>{pasos.size}</strong>{" "}
                {unidad}
              </span>
            ) : (
              <span style={{ color: C.apagado, fontSize: 15 }}>
                Cada lado se rotula con lo que caminaste.
              </span>
            )}
            {!retro && !completo && (
              <Boton variante="fantasma" tamano="chico" onClick={caminarTodo}>
                Caminar todo
              </Boton>
            )}
          </div>
        </Panel>

        <Panel>
          <div style={{ fontSize: 22, fontWeight: 800, color: C.texto, marginBottom: 16, lineHeight: 1.3 }}>
            {esAtajo
              ? `¿Cuántos ${unidad} son la vuelta completa?`
              : `¿Cuántos ${unidad} diste en toda la vuelta?`}
          </div>

          {retro ? (
            <RespuestaDada valor={retro.respuesta} acerto={retro.bien} color={COLOR} />
          ) : puedeContestar ? (
            <TecladoNumerico
              valor={valor} onCambiar={setValor} onEnviar={responder}
              color={COLOR} maxDigitos={3}
            />
          ) : (
            <p style={{
              color: C.tenue, fontSize: TAM.cuerpo, lineHeight: 1.5, margin: 0,
              border: `2px dashed ${C.borde}`, borderRadius: 12, padding: "18px 20px",
            }}>
              {esAtajo
                ? "Primero camina los dos lados que sí se pueden. Los otros dos quedan para pensarlos."
                : "Primero dale toda la vuelta con el dedo. Cuando cierres el recorrido aparecen los números."}
            </p>
          )}

          {esAtajo && !retro && (
            <p style={{ color: C.apagado, fontSize: 15, lineHeight: 1.5, marginTop: 14 }}>
              Los lados cerrados tienen un «?». No los puedes caminar… pero a lo mejor ya sabes cuánto miden.
            </p>
          )}

          {retro && (
            <>
              <Retro
                acerto={retro.bien} color={COLOR}
                titulo={retro.bien
                  ? `Sí: ${ej.perimetro} ${unidad} de vuelta.`
                  : `La vuelta son ${ej.perimetro} ${unidad}.`}
              >
                {esAtajo ? (
                  <>
                    Los dos lados cerrados miden lo mismo que los que caminaste: el de enfrente de{" "}
                    {ej.ancho} mide {ej.ancho}, y el de enfrente de {ej.alto} mide {ej.alto}.
                  </>
                ) : (
                  <>
                    Fíjate: arriba y abajo te dieron los mismos {ej.ancho}, y los otros dos lados,
                    los mismos {ej.alto}. <strong style={{ color: C.amarillo }}>Los lados se repiten
                    de dos en dos.</strong>
                  </>
                )}
              </Retro>

              <Operacion color={COLOR}>
                {ej.ancho} + {ej.alto} + {ej.ancho} + {ej.alto} = {ej.perimetro}
              </Operacion>
              <div style={{
                marginTop: 10, padding: "10px 16px", borderRadius: 10,
                background: "rgba(255,209,102,.07)", border: `1px dashed ${C.amarillo}66`,
                textAlign: "center", fontSize: "clamp(19px, 2.2vw, 25px)", fontWeight: 800,
                color: C.amarillo, fontVariantNumeric: "tabular-nums",
              }}>
                ({ej.ancho} + {ej.alto}) × 2 = {ej.perimetro}
              </div>
              <p style={{ color: C.tenue, fontSize: 15, lineHeight: 1.5, marginTop: 10 }}>
                Con un lado largo y uno corto ya alcanza para saber la vuelta entera.
              </p>

              <div style={{ marginTop: 18 }}>
                <Boton color={COLOR} tamano="grande" onClick={siguiente} estilo={{ width: "100%" }}>
                  Siguiente patio
                </Boton>
              </div>
            </>
          )}
        </Panel>
      </div>
    </div>
  );
}
