// 📏 La misma cerca, distinto terreno.
//
// El juego que ataca la creencia más pegajosa del tema: *si la cerca es la
// misma, el terreno es el mismo*. Se le dan 12 tramos de cerca y con ellos
// arma dos o tres terrenos distintos; cada uno queda dibujado en su libreta.
// Al cerrar el reto elige en cuál cupo más pasto, y ahí se ve —de un vistazo,
// con los tres dibujos juntos— que la misma cerca rinde distinto según la
// forma, y que el que más rinde es el más parecido a un cuadrado.
//
// Por eso el reto es la unidad y no el ejercicio suelto: la última pregunta no
// significa nada sin las anteriores.
import { useCallback, useState } from "react";
import { generarPartida, formasDe } from "../../../data/talleres/el-terreno/index.js";
import { sonar } from "./lib/sonido.js";
import { C, ACENTO, MATERIAL, TAM } from "./estilo.js";
import { useRonda } from "../comun/hooks.js";
import {
  Boton, Cabecera, Cierre, Operacion, Panel, RespuestaDada, Retro, Rotulo, TecladoNumerico,
} from "../comun/ui.jsx";
import { ParcelaTerreno, TarjetaTerreno } from "./Figuras.jsx";

const COLOR = ACENTO["misma-cerca"];

const normalizar = ({ filas, columnas }) => ({
  corto: Math.min(filas, columnas),
  largo: Math.max(filas, columnas),
});

export default function JuegoMismaCerca({ rango, registrar, finalizar, onSalir }) {
  const generar = useCallback(() => generarPartida("misma-cerca", rango.id), [rango.id]);
  const ronda = useRonda({
    generar,
    alFinalizar: (r) => finalizar({ juego: "misma-cerca", ...r }),
  });

  // La libreta se lleva por reto: al cambiar de perímetro se empieza en blanco.
  const [libreta, setLibreta] = useState({ perimetro: null, formas: [] });
  const [seleccion, setSeleccion] = useState({ filas: 0, columnas: 0 });
  const [fase, setFase] = useState("armar");  // armar · contar
  const [valor, setValor] = useState("");
  const [retro, setRetro] = useState(null);
  const [eleccion, setEleccion] = useState(null);

  const ej = ronda.ejercicio;

  function limpiarPaso() {
    setSeleccion({ filas: 0, columnas: 0 });
    setFase("armar");
    setValor("");
    setRetro(null);
    setEleccion(null);
  }

  function otraPartida() {
    limpiarPaso();
    setLibreta({ perimetro: null, formas: [] });
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

  const formas = libreta.perimetro === ej.perimetro ? libreta.formas : [];
  const unidad = ej.unidades ? "metros" : "tramos";

  // ── Paso: armar un terreno con la cerca dada ────────────────────────────
  if (ej.tipo === "armar") {
    const { corto, largo } = normalizar(seleccion);
    const usada = seleccion.filas > 0 ? 2 * (seleccion.filas + seleccion.columnas) : 0;
    const area = seleccion.filas * seleccion.columnas;
    const repetido = formas.some((f) => f.corto === corto && f.largo === largo);
    const cuadra = usada === ej.perimetro && !repetido;

    function responder(n) {
      const bien = n === area;
      registrar(ej.categoria, bien);
      if (!bien) ronda.fallar();
      sonar(bien ? "bien" : "mal");
      setRetro({ bien, respuesta: n });
    }

    function siguiente() {
      setLibreta({ perimetro: ej.perimetro, formas: [...formas, { corto, largo, area }] });
      ronda.cerrarEjercicio(!!retro?.bien);
      limpiarPaso();
    }

    return (
      <div>
        <Cabecera
          juego="La misma cerca" icono="📏" color={COLOR}
          resultados={ronda.resultados} total={ronda.total}
          enunciado={
            ej.forma === 0
              ? `Tienes ${ej.perimetro} ${unidad} de cerca. Arma un terreno que los use todos.`
              : `Con los mismos ${ej.perimetro} ${unidad}, arma otro terreno distinto.`
          }
        />

        <div style={{
          display: "grid", gap: 22,
          gridTemplateColumns: "minmax(300px, 1.2fr) minmax(270px, .9fr)",
          alignItems: "start",
        }}>
          <Panel>
            <Rotulo color={COLOR}>Arrastra el dedo desde la esquina</Rotulo>
            <div style={{ marginTop: 14 }}>
              <ParcelaTerreno
                max={ej.max}
                filas={seleccion.filas}
                columnas={seleccion.columnas}
                onCelda={(celda) => { if (fase === "armar") setSeleccion(celda); }}
              />
            </div>

            <div style={{ marginTop: 16, fontSize: TAM.cuerpo, color: C.tenue }}>
              Cerca usada:{" "}
              <strong style={{
                color: usada === ej.perimetro ? C.verde : usada > ej.perimetro ? C.amarillo : C.texto,
                fontSize: 26,
              }}>
                {usada}
              </strong>
              <span style={{ color: C.apagado }}> de {ej.perimetro}</span>
              {seleccion.filas > 0 && (
                <span style={{ color: C.apagado, marginLeft: 14 }}>
                  ({seleccion.filas} × {seleccion.columnas})
                </span>
              )}
            </div>

            {formas.length > 0 && (
              <div style={{ marginTop: 18, borderTop: `1px solid ${C.borde}`, paddingTop: 16 }}>
                <Rotulo>Ya armaste</Rotulo>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
                  {formas.map((f, k) => (
                    <TarjetaTerreno key={k} {...f} escala={10} unidades={ej.unidades} revelada />
                  ))}
                </div>
              </div>
            )}
          </Panel>

          <Panel>
            {fase === "armar" ? (
              <>
                <div style={{ fontSize: 22, fontWeight: 800, color: C.texto, lineHeight: 1.3 }}>
                  Usa los {ej.perimetro} {unidad} completos
                </div>
                <p style={{ color: C.tenue, fontSize: TAM.cuerpo, lineHeight: 1.5, margin: "12px 0 20px" }}>
                  {repetido
                    ? "Ese terreno ya lo armaste. Cámbiale la forma: con la misma cerca hay varias."
                    : usada > ej.perimetro
                      ? "Te pasaste de cerca. Hazlo más chico."
                      : usada > 0 && usada < ej.perimetro
                        ? "Todavía te sobra cerca. Hazlo más grande o cámbiale la forma."
                        : "Toca la parcela y arrastra sin soltar. Mientras no lo cerques, nada cuenta."}
                </p>
                <Boton
                  color={COLOR} tamano="grande" disabled={!cuadra}
                  onClick={() => setFase("contar")} estilo={{ width: "100%" }}
                >
                  {cuadra ? "Cercar el terreno 🚧" : "Todavía no cuadra"}
                </Boton>
              </>
            ) : (
              <>
                <div style={{ fontSize: 22, fontWeight: 800, color: C.texto, marginBottom: 16, lineHeight: 1.3 }}>
                  ¿Cuánto pasto le cabe a este terreno?
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
                      titulo={retro.bien
                        ? `Sí: ${area} ${ej.unidades ? "metros cuadrados" : "cuadros"}.`
                        : `Le caben ${area} ${ej.unidades ? "metros cuadrados" : "cuadros"}.`}
                    >
                      {`Gastaste los ${ej.perimetro} ${unidad} de cerca y adentro te cupo esto. Queda anotado en la libreta.`}
                    </Retro>
                    <Operacion color={COLOR}>
                      {seleccion.filas} × {seleccion.columnas} = {area}{ej.unidades ? " m²" : ""}
                    </Operacion>
                    <div style={{ marginTop: 18 }}>
                      <Boton color={COLOR} tamano="grande" onClick={siguiente} estilo={{ width: "100%" }}>
                        Anotar en la libreta
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

  // ── Paso: el remate del reto ────────────────────────────────────────────
  const mejorPropio = formas.reduce((a, b) => (b.area > a.area ? b : a), formas[0] || { area: -1 });
  const posibles = formasDe(ej.perimetro, ej.max);
  const armoElMejor = mejorPropio && ej.mejor && mejorPropio.area === ej.mejor.area;

  function elegir(k) {
    if (retro) return;
    const bien = formas[k].area === mejorPropio.area;
    setEleccion(k);
    registrar(ej.categoria, bien);
    if (!bien) ronda.fallar();
    sonar(bien ? "bien" : "mal");
    setRetro({ bien });
  }

  function siguienteReto() {
    ronda.cerrarEjercicio(!!retro?.bien);
    limpiarPaso();
  }

  return (
    <div>
      <Cabecera
        juego="La misma cerca" icono="📏" color={COLOR}
        resultados={ronda.resultados} total={ronda.total}
        enunciado={`Con los mismos ${ej.perimetro} ${unidad} de cerca armaste estos terrenos.`}
      />

      <Panel>
        <Rotulo color={COLOR}>¿En cuál cabe más pasto?</Rotulo>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 16 }}>
          {formas.map((f, k) => (
            <TarjetaTerreno
              key={k} {...f} escala={16} unidades={ej.unidades}
              revelada={!!retro}
              marcada={eleccion === k}
              ganadora={!!retro && f.area === mejorPropio.area}
              onClick={() => elegir(k)}
            />
          ))}
        </div>

        {retro && (
          <>
            <Retro
              acerto={retro.bien} color={COLOR}
              titulo={`El que más pasto tiene es el de ${mejorPropio.corto} × ${mejorPropio.largo}: ${mejorPropio.area} ${ej.unidades ? "m²" : "cuadros"}.`}
            >
              Los {formas.length} terrenos gastaron <strong>exactamente la misma cerca</strong>
              {" "}({ej.perimetro} {unidad}) y en cada uno cupo distinto pasto. Con la misma cerca,{" "}
              <strong style={{ color: C.amarillo }}>el terreno que más rinde es el más parecido a un cuadrado</strong>
              {armoElMejor
                ? ", y ese fue justo el que armaste."
                : `: con ${ej.perimetro} ${unidad} el máximo posible era ${ej.mejor.corto} × ${ej.mejor.largo}, con ${ej.mejor.area}.`}
            </Retro>

            {/* Todas las formas posibles con esa cerca, de la más larga a la
                más cuadrada: el argumento completo, de un vistazo. */}
            <div style={{ marginTop: 20 }}>
              <Rotulo>Todos los terrenos que caben con {ej.perimetro} {unidad}</Rotulo>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12, alignItems: "flex-end" }}>
                {posibles.map((f) => (
                  <div key={`${f.corto}x${f.largo}`} style={{ textAlign: "center" }}>
                    <svg width={f.largo * 9 + 6} height={f.corto * 9 + 6}
                      viewBox={`0 0 ${f.largo * 9 + 6} ${f.corto * 9 + 6}`} style={{ display: "block" }}>
                      <rect x="3" y="3" width={f.largo * 9} height={f.corto * 9}
                        fill={MATERIAL.pasto} opacity={f.area === ej.mejor.area ? 0.95 : 0.4} />
                      <rect x="3" y="3" width={f.largo * 9} height={f.corto * 9}
                        fill="none" stroke={MATERIAL.cerca} strokeWidth="3" />
                    </svg>
                    <div style={{
                      fontSize: 13, fontWeight: 700, marginTop: 6,
                      color: f.area === ej.mejor.area ? C.verde : C.apagado,
                    }}>
                      {f.corto}×{f.largo} · {f.area}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 20 }}>
              <Boton color={COLOR} tamano="grande" onClick={siguienteReto}>
                Siguiente reto
              </Boton>
            </div>
          </>
        )}
      </Panel>
    </div>
  );
}
