// 🧱 El Mosaiquero — área de una figura que no es un rectángulo.
//
// El patio tiene una esquina mordida. No hay fórmula que aplicar, y ese es el
// punto: la única salida es **partirlo en dos rectángulos**, sacar el área de
// cada uno y sumarlas. Ese razonamiento es el que años después se llama modelo
// de área y propiedad distributiva; aquí son mosaicos.
//
// El niño elige por dónde cortar tocando una de las dos líneas punteadas, y al
// resolver se le enseña el **otro** corte con sus números: distintos pedazos,
// el mismo total. Que el área no dependa de cómo se parta la figura vale tanto
// como el resultado, y es lo que después sostiene todas las descomposiciones.
import { useCallback, useState } from "react";
import { generarPartida } from "../../../data/talleres/el-terreno/index.js";
import { sonar } from "./lib/sonido.js";
import { C, ACENTO, MATERIAL, TAM } from "./estilo.js";
import { useRonda } from "../comun/hooks.js";
import {
  Boton, Cabecera, Cierre, Operacion, Panel, RespuestaDada, Retro, Rotulo, TecladoNumerico,
} from "../comun/ui.jsx";
import { FiguraCompuesta } from "./Figuras.jsx";

const COLOR = ACENTO.mosaiquero;

export default function JuegoMosaiquero({ rango, registrar, finalizar, onSalir }) {
  const generar = useCallback(() => generarPartida("mosaiquero", rango.id), [rango.id]);
  const ronda = useRonda({
    generar,
    alFinalizar: (r) => finalizar({ juego: "mosaiquero", ...r }),
  });

  const [corte, setCorte] = useState(null);
  const [valor, setValor] = useState("");
  const [retro, setRetro] = useState(null);

  const ej = ronda.ejercicio;

  function limpiar() {
    setCorte(null);
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

  const elegido = ej.cortes.find((c) => c.id === corte) || null;
  const otro = ej.cortes.find((c) => c.id !== corte) || null;
  const unidad = ej.unidades ? "m²" : "mosaicos";

  function responder(n) {
    const bien = n === ej.area;
    registrar(ej.categoria, bien);
    if (!bien) ronda.fallar();
    sonar(bien ? "bien" : "mal");
    setRetro({ bien, respuesta: n });
  }

  function siguiente() {
    ronda.cerrarEjercicio(!!retro?.bien);
    limpiar();
  }

  const sumaDe = (partes) => partes.map((p) => p.w * p.h);

  return (
    <div>
      <Cabecera
        juego="El Mosaiquero" icono="🧱" color={COLOR}
        resultados={ronda.resultados} total={ronda.total}
        enunciado="Este patio tiene una esquina mordida: no es un rectángulo."
      />

      <div style={{
        display: "grid", gap: 22,
        gridTemplateColumns: "minmax(320px, 1.2fr) minmax(280px, .95fr)",
        alignItems: "start",
      }}>
        <Panel>
          <Rotulo color={COLOR}>
            {elegido ? "Dos rectángulos, uno de cada color" : "Toca por dónde lo vas a partir"}
          </Rotulo>
          <div style={{ marginTop: 14 }}>
            <FiguraCompuesta
              W={ej.W} H={ej.H} muesca={ej.muesca} cortes={ej.cortes}
              corteElegido={corte}
              onElegirCorte={elegido ? null : setCorte}
              mostrarProducto={!!retro}
              unidades={ej.unidades}
            />
          </div>
          {!elegido && (
            <p style={{ color: C.tenue, fontSize: TAM.cuerpo, lineHeight: 1.5, marginTop: 14 }}>
              Las dos líneas punteadas parten el patio en dos rectángulos. Cualquiera sirve:
              escoge la que se te haga más fácil.
            </p>
          )}
        </Panel>

        <Panel>
          {!elegido ? (
            <>
              <div style={{ fontSize: 22, fontWeight: 800, color: C.texto, lineHeight: 1.3 }}>
                Primero pártelo
              </div>
              <p style={{ color: C.tenue, fontSize: TAM.cuerpo, lineHeight: 1.5, margin: "12px 0 20px" }}>
                Un patio así no tiene una sola cuenta de largo por ancho. Pero si lo partes,
                cada pedazo sí es un rectángulo y ahí ya sabes qué hacer.
              </p>
              <div style={{ display: "grid", gap: 10 }}>
                {ej.cortes.map((c) => (
                  <Boton key={c.id} variante="neutro" onClick={() => setCorte(c.id)} estilo={{ width: "100%" }}>
                    {c.nombre}
                  </Boton>
                ))}
              </div>
            </>
          ) : (
            <>
              <div style={{ fontSize: 22, fontWeight: 800, color: C.texto, marginBottom: 16, lineHeight: 1.3 }}>
                ¿Cuántos {unidad} necesitas para cubrirlo?
              </div>
              {retro ? (
                <RespuestaDada valor={retro.respuesta} acerto={retro.bien} color={COLOR} />
              ) : (
                <TecladoNumerico
                  valor={valor} onCambiar={setValor} onEnviar={responder}
                  color={COLOR} maxDigitos={3}
                />
              )}

              {!retro && (
                <p style={{ color: C.apagado, fontSize: 15, lineHeight: 1.5, marginTop: 14 }}>
                  Saca cada rectángulo por separado y júntalos.
                </p>
              )}

              {retro && (
                <>
                  <Retro
                    acerto={retro.bien} color={COLOR}
                    titulo={retro.bien ? `Sí: ${ej.area} ${unidad}.` : `Son ${ej.area} ${unidad}.`}
                  >
                    {`El ${elegido.partes[0].w} × ${elegido.partes[0].h} da ${elegido.partes[0].w * elegido.partes[0].h}, ` +
                     `el otro da ${elegido.partes[1].w * elegido.partes[1].h}, y juntos cubren todo el patio.`}
                  </Retro>
                  <Operacion color={COLOR}>
                    {sumaDe(elegido.partes).join(" + ")} = {ej.area}
                  </Operacion>

                  {/* El otro corte: otros pedazos, el mismo total. */}
                  <div style={{
                    marginTop: 16, padding: "14px 16px", borderRadius: 12,
                    background: C.alto, border: `1px solid ${C.borde}`,
                  }}>
                    <Rotulo>Si lo hubieras partido al revés</Rotulo>
                    <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 12 }}>
                      <div style={{ width: 92, flexShrink: 0 }}>
                        <FiguraCompuesta
                          W={ej.W} H={ej.H} muesca={ej.muesca} cortes={ej.cortes}
                          corteElegido={otro.id} lado={Math.max(8, Math.round(84 / Math.max(ej.W, ej.H)))}
                        />
                      </div>
                      <div style={{ color: C.tenue, fontSize: 15.5, lineHeight: 1.5 }}>
                        <strong style={{ color: C.texto }}>
                          {sumaDe(otro.partes).join(" + ")} = {ej.area}
                        </strong>
                        <br />
                        Otros pedazos, el mismo total: el patio no cambia de tamaño por dónde lo partas.
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: 18 }}>
                    <Boton color={COLOR} tamano="grande" onClick={siguiente} estilo={{ width: "100%" }}>
                      Siguiente patio
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
