// 🚧 La Cerca y el Pasto — perímetro y área sobre el mismo terreno.
//
// El juego entero descansa en una idea: perímetro y área no se separan
// explicándolos, se separan **haciéndolos**. Aquí son dos acciones distintas
// sobre el mismo dibujo —recorrer la orilla poniendo tramos de cerca, cubrir
// el suelo con cuadros de pasto— y por eso salen dos números distintos.
//
// La mitad de la ronda son pares: el mismo terreno preguntado dos veces
// seguidas, primero por una medida y luego por la otra. Ese choque es la
// clase. Y por eso el generador nunca produce terrenos donde el perímetro
// coincida con el área: ahí el niño que confunde las dos medidas acertaría, y
// se iría convencido de que da lo mismo.
//
// Cuando la respuesta es exactamente **la otra medida**, no se registra como un
// error cualquiera: se anota como `confusion-area-perimetro`, que es lo que el
// maestro necesita ver en el panel. No falló de cuenta, falló de concepto.
import { useCallback, useState } from "react";
import { generarPartida } from "../../../data/talleres/el-terreno/index.js";
import { sonar } from "./lib/sonido.js";
import { idCelda, tramosDe } from "./lib/piezas.js";
import { C, ACENTO, MATERIAL, TAM } from "./estilo.js";
import { useRonda } from "../comun/hooks.js";
import {
  Boton, Cabecera, Cierre, Operacion, Panel, RespuestaDada, Retro, Rotulo, TecladoNumerico,
} from "../comun/ui.jsx";
import { TerrenoFijo } from "./Figuras.jsx";

const COLOR = ACENTO["cerca-pasto"];

// Las dos medidas, dichas como las diría el maestro. La unidad es parte del
// concepto: la cerca se mide en tramos (o metros) y el pasto en cuadros (o
// metros cuadrados), y verlas escritas distinto ayuda a no revolverlas.
function medida(cantidad, pedido, unidades) {
  if (pedido === "cerca") return unidades ? `${cantidad} metros de cerca` : `${cantidad} tramos de cerca`;
  return unidades ? `${cantidad} metros cuadrados de pasto` : `${cantidad} cuadros de pasto`;
}

export default function JuegoCercaPasto({ rango, registrar, finalizar, onSalir }) {
  const generar = useCallback(() => generarPartida("cerca-pasto", rango.id), [rango.id]);
  const ronda = useRonda({
    generar,
    alFinalizar: (r) => finalizar({ juego: "cerca-pasto", ...r }),
  });

  const [pintados, setPintados] = useState(() => new Set());
  const [valor, setValor] = useState("");
  const [retro, setRetro] = useState(null);

  const ej = ronda.ejercicio;

  function limpiar() {
    setPintados(new Set());
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

  const esCerca = ej.pedido === "cerca";
  const piezasTotales = esCerca ? ej.perimetro : ej.area;
  const completo = pintados.size >= piezasTotales;
  // A los chicos no se les deja contestar hasta haber recorrido la figura: a
  // esa edad el número tiene que salir de la mano, no de una fórmula.
  const puedeContestar = !ej.manipulacionObligatoria || completo;

  function pintar(id) {
    if (retro) return;
    setPintados((p) => (p.has(id) ? p : new Set(p).add(id)));
  }

  function ponerTodo() {
    const todo = esCerca
      ? tramosDe(ej.ancho, ej.alto).map((t) => t.id)
      : Array.from({ length: ej.alto }, (_, f) =>
        Array.from({ length: ej.ancho }, (_, c) => idCelda(f, c))).flat();
    setPintados(new Set(todo));
  }

  function responder(n) {
    const bien = n === ej.respuesta;
    // Contestar la otra medida no es un error de cálculo: es *el* error que
    // este juego existe para encontrar.
    const confundio = !bien && n === ej.otraMagnitud;
    registrar(ej.categoria, bien);
    if (bien || confundio) registrar("confusion-area-perimetro", bien);
    if (!bien) ronda.fallar();
    sonar(bien ? "bien" : "mal");
    setRetro({ bien, confundio, respuesta: n });
  }

  function siguiente() {
    ronda.cerrarEjercicio(!!retro?.bien);
    limpiar();
  }

  const enunciado = ej.mismoTerreno
    ? (esCerca ? "El mismo terreno. Ahora hay que cercarlo." : "El mismo terreno. Ahora hay que sembrarle pasto.")
    : (esCerca ? "Este terreno necesita cerca en toda la orilla." : "Hay que cubrir todo el suelo con pasto.");

  return (
    <div>
      <Cabecera
        juego="La Cerca y el Pasto" icono="🚧" color={COLOR}
        resultados={ronda.resultados} total={ronda.total}
        enunciado={enunciado}
      />

      <div style={{
        display: "grid", gap: 22,
        gridTemplateColumns: "minmax(320px, 1.3fr) minmax(270px, .9fr)",
        alignItems: "start",
      }}>
        <Panel>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <Rotulo color={esCerca ? MATERIAL.cerca : MATERIAL.pasto}>
              {esCerca ? "Pon la cerca con el dedo" : "Pinta el pasto con el dedo"}
            </Rotulo>
            {pintados.size > 0 && !retro && (
              <button
                type="button"
                onClick={() => setPintados(new Set())}
                style={{
                  background: "transparent", border: `1px solid ${C.borde}`, borderRadius: 8,
                  color: C.apagado, cursor: "pointer", fontFamily: "inherit",
                  fontSize: 13.5, fontWeight: 700, padding: "0 12px", height: 44,
                }}
              >
                Empezar de nuevo
              </button>
            )}
          </div>

          <TerrenoFijo
            ancho={ej.ancho} alto={ej.alto}
            modo={ej.pedido}
            pintados={pintados}
            medidas={!ej.contadorEnVivo}
            unidades={ej.unidades}
            listo={completo}
            onPintar={pintar}
          />

          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: 14, marginTop: 14, flexWrap: "wrap",
          }}>
            {/* El contador en vivo es el andamio de los chicos: cuenta con
                ellos mientras recorren. A los grandes se les quita, para que
                la cuenta la lleven ellos. */}
            {ej.contadorEnVivo ? (
              <span style={{ color: C.tenue, fontSize: TAM.cuerpo }}>
                Llevas{" "}
                <strong style={{ color: completo ? C.verde : C.texto, fontSize: 26 }}>
                  {pintados.size}
                </strong>{" "}
                {esCerca ? "tramos" : "cuadros"}
              </span>
            ) : (
              <span style={{ color: C.apagado, fontSize: 15 }}>
                Puedes recorrerlo con el dedo si te ayuda a verlo.
              </span>
            )}
            {!retro && !completo && (
              <Boton variante="fantasma" tamano="chico" onClick={ponerTodo}>
                {esCerca ? "Poner toda la cerca" : "Sembrar todo"}
              </Boton>
            )}
          </div>
        </Panel>

        <Panel>
          <div style={{ fontSize: 22, fontWeight: 800, color: C.texto, marginBottom: 16, lineHeight: 1.3 }}>
            {esCerca
              ? (ej.unidades ? "¿Cuántos metros de cerca se necesitan?" : "¿Cuántos tramos de cerca se necesitan?")
              : (ej.unidades ? "¿Cuántos metros cuadrados de pasto caben?" : "¿Cuántos cuadros de pasto caben?")}
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
              {esCerca
                ? "Primero recorre toda la orilla con el dedo, tramo por tramo. Cuando la cerca esté completa aparecen los números."
                : "Primero cubre todo el suelo con el dedo. Cuando no quede tierra a la vista aparecen los números."}
            </p>
          )}

          {retro && (
            <>
              <Retro
                acerto={retro.bien}
                color={COLOR}
                titulo={retro.bien
                  ? `Sí: ${medida(ej.respuesta, ej.pedido, ej.unidades)}.`
                  : retro.confundio
                    ? `Eso es la otra medida: ${retro.respuesta} es ${esCerca ? "el pasto" : "la cerca"}.`
                    : `Son ${medida(ej.respuesta, ej.pedido, ej.unidades)}.`}
              >
                {retro.confundio ? (
                  <>
                    La cerca va <strong>por la orilla</strong>, tramo por tramo; el pasto va{" "}
                    <strong>por dentro</strong>, cuadro por cuadro. En este terreno la cerca son{" "}
                    {ej.perimetro} y el pasto {ej.area}.
                  </>
                ) : esCerca ? (
                  <>Es toda la vuelta: {ej.ancho} arriba, {ej.alto} de un lado, {ej.ancho} abajo y {ej.alto} del otro.</>
                ) : (
                  <>Son {ej.alto} filas de {ej.ancho} cuadros cada una.</>
                )}
              </Retro>

              <Operacion color={COLOR}>
                {esCerca
                  ? `${ej.ancho} + ${ej.alto} + ${ej.ancho} + ${ej.alto} = ${ej.perimetro}${ej.unidades ? " m" : ""}`
                  : `${ej.ancho} × ${ej.alto} = ${ej.area}${ej.unidades ? " m²" : ""}`}
              </Operacion>

              {esCerca && ej.atajo && (
                <p style={{ color: C.tenue, fontSize: 15.5, lineHeight: 1.5, marginTop: 10 }}>
                  Los lados se repiten de dos en dos, así que sale más rápido así:{" "}
                  <strong style={{ color: C.texto }}>({ej.ancho} + {ej.alto}) × 2 = {ej.perimetro}</strong>.
                </p>
              )}

              {ej.mismoTerreno && (
                <p style={{
                  color: C.texto, fontSize: 15.5, lineHeight: 1.5, marginTop: 14,
                  borderLeft: `3px solid ${C.amarillo}`, paddingLeft: 12,
                }}>
                  Es el mismo terreno de hace un momento: la cerca son {ej.perimetro} y el pasto {ej.area}.
                  Una figura, dos medidas distintas.
                </p>
              )}

              <div style={{ marginTop: 18 }}>
                <Boton color={COLOR} tamano="grande" onClick={siguiente} estilo={{ width: "100%" }}>
                  Siguiente terreno
                </Boton>
              </div>
            </>
          )}
        </Panel>
      </div>
    </div>
  );
}
