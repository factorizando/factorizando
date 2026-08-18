// 🏗️ La Fábrica de Cajas — multiplicación como grupos iguales.
//
// Por la banda pasan cajas idénticas: 7 cajas de 6 galletas cada una. La
// pregunta siempre es la misma, y la respuesta escrita —7 × 6 = 42— aparece
// **después** de contestar, nunca en el enunciado.
//
// La diferencia con estudiar la tabla del 6 es que aquí el 6 se ve: son seis
// galletas dentro de una caja, y hay siete cajas iguales. El niño que solo
// memorizó la tabla se atora en cuanto el problema no dice "multiplica"; el
// que reconoce el grupo igual sabe qué operación usar aunque el enunciado
// hable de cajas, de filas o de bolsas.
//
// Al resolver aparece el conteo acumulado bajo la banda (6, 12, 18, 24…).
// Es el puente entre sumar el mismo número muchas veces y multiplicar, y es
// también la red de seguridad del que todavía no se sabe la tabla: no se
// queda sin manera de llegar al resultado.
import { useCallback, useState } from "react";
import { generarPartida } from "../../../data/talleres/pizzas-cajas-vasos/index.js";
import { sonar } from "./lib/sonido.js";
import { C, ACENTO, TAM } from "./estilo.js";
import { useRonda, plural } from "../comun/hooks.js";
import { Boton, Cabecera, Cierre, Operacion, Panel, RespuestaDada, Retro, Rotulo, TecladoNumerico } from "../comun/ui.jsx";
import { Banda, CajaGalletas } from "./Figuras.jsx";

const COLOR = ACENTO.fabrica;

export default function JuegoFabrica({ rango, registrar, finalizar, onSalir }) {
  const generar = useCallback(() => generarPartida("fabrica", rango.id), [rango.id]);
  const ronda = useRonda({
    generar,
    alFinalizar: (r) => finalizar({ juego: "fabrica", ...r }),
  });

  const [valor, setValor] = useState("");
  const [retro, setRetro] = useState(null);

  const ej = ronda.ejercicio;

  function otraPartida() {
    setValor("");
    setRetro(null);
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
    const bien = n === ej.total;
    registrar(ej.categoria, bien);
    if (!bien) ronda.fallar();
    sonar(bien ? "bien" : "mal");
    setRetro({ bien, respuesta: n });
  }

  function siguiente() {
    ronda.cerrarEjercicio(!!retro?.bien);
    setValor("");
    setRetro(null);
  }

  // Conteo acumulado: 6, 12, 18… Solo cabe en pantalla con pocas cajas.
  const acumulado = Array.from({ length: ej.cajas }, (_, k) => (k + 1) * ej.porCaja);

  return (
    <div>
      <Cabecera
        juego="La Fábrica de Cajas" icono="🏗️" color={COLOR}
        resultados={ronda.resultados} total={ronda.total}
        enunciado={`Pasan ${plural(ej.cajas, "caja", "cajas")} y cada una lleva ${ej.porCaja} galletas.`}
      />

      <div style={{
        display: "grid", gap: 22,
        gridTemplateColumns: "minmax(320px, 1.5fr) minmax(260px, .85fr)",
        alignItems: "start",
      }}>
        <Panel>
          <Rotulo color={COLOR}>La banda</Rotulo>
          <div style={{ marginTop: 14 }}>
            <Banda>
              {Array.from({ length: ej.cajas }, (_, k) => (
                <div key={k}>
                  <CajaGalletas
                    contenido={ej.porCaja}
                    mostrarContenido={ej.dibujarContenido}
                    ancho={ej.cajas > 7 ? 82 : 112}
                    color={COLOR}
                  />
                  {retro && ej.cajas <= 12 && (
                    <div style={{
                      textAlign: "center", marginTop: 6, fontSize: 15, fontWeight: 800,
                      color: k === ej.cajas - 1 ? COLOR : C.apagado,
                      fontVariantNumeric: "tabular-nums",
                    }}>
                      {acumulado[k]}
                    </div>
                  )}
                </div>
              ))}
            </Banda>
          </div>
          {retro && ej.cajas <= 12 && (
            <p style={{ color: C.tenue, fontSize: 15, marginTop: 12, lineHeight: 1.5 }}>
              De {ej.porCaja} en {ej.porCaja}: así se llega al total sin saberse la tabla de memoria.
            </p>
          )}
        </Panel>

        <Panel>
          <div style={{ fontSize: 22, fontWeight: 800, color: C.texto, marginBottom: 16, lineHeight: 1.3 }}>
            ¿Cuántas galletas hay en total?
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
                acerto={retro.bien}
                color={COLOR}
                titulo={retro.bien
                  ? `Sí: ${ej.total} galletas.`
                  : `Son ${ej.total} galletas.`}
              >
                {retro.bien
                  ? `${plural(ej.cajas, "caja", "cajas")} de a ${ej.porCaja}.`
                  : `${ej.cajas} grupos iguales de ${ej.porCaja}. Cuéntalos abajo, de ${ej.porCaja} en ${ej.porCaja}.`}
              </Retro>
              <Operacion color={COLOR}>{ej.cajas} × {ej.porCaja} = {ej.total}</Operacion>
              <div style={{ marginTop: 18 }}>
                <Boton color={COLOR} tamano="grande" onClick={siguiente} estilo={{ width: "100%" }}>
                  Siguiente tanda
                </Boton>
              </div>
            </>
          )}
        </Panel>
      </div>
    </div>
  );
}
