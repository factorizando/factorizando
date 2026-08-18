// 🥤 Los Vasos Medidores — fracciones en tres modos.
//
//   Llenar        se pide 3/4 y el líquido se sube con el dedo hasta la marca.
//   Comparar      dos vasos, ¿cuál tiene más?
//   Equivalencias repartos distintos que llegan a la misma altura.
//
// El modo comparar es el que carga el peso pedagógico, y su decisión clave
// está en el dibujo: **los vasos se muestran vacíos**, con sus divisiones y su
// etiqueta, y el líquido solo se sirve al contestar. Si el líquido estuviera
// puesto desde el principio, la respuesta se vería sin pensar y el error que
// interesa —creer que 1/3 es más que 1/2 porque 3 es más que 2— nunca
// aparecería. Y ese error hay que hacerlo aparecer: es el más común a esta
// edad y no se corrige explicándolo, se corrige viendo el vaso servido justo
// después de haberse equivocado.
import { useCallback, useRef, useState } from "react";
import { generarPartida } from "../../../data/talleres/pizzas-cajas-vasos/index.js";
import { sonar } from "./lib/sonido.js";
import { C, ACENTO, TAM } from "./estilo.js";
import { useRonda } from "./hooks.js";
import { Boton, Cabecera, Cierre, Panel, Retro, Rotulo } from "./ui.jsx";
import { Fraccion, Vaso } from "./Figuras.jsx";

const COLOR = ACENTO.vasos;

// Geometría del vaso, en las mismas unidades del viewBox de `Vaso`. Vive aquí
// porque es lo que traduce la posición del dedo a "cuántas divisiones llenas",
// y solo este juego la necesita.
const Y_TOPE = 16, Y_BASE = 186, ALTO_CAJA = 200;

function nivelDesdePuntero(e, den) {
  const r = e.currentTarget.getBoundingClientRect();
  const y = ((e.clientY - r.top) / r.height) * ALTO_CAJA;
  const t = (Y_BASE - y) / (Y_BASE - Y_TOPE);
  // Se ajusta a la marca más cercana: en una tablet proyectada nadie atina al
  // píxel, y lo que se está evaluando es contar divisiones, no la puntería.
  return Math.max(0, Math.min(den, Math.round(t * den)));
}

const NOMBRES = { 2: "mitades", 3: "tercios", 4: "cuartos", 5: "quintos", 6: "sextos", 8: "octavos", 10: "décimos" };
const nombrePartes = (den) => NOMBRES[den] || `partes de ${den}`;

export default function JuegoVasos({ rango, modo = "mezcla", registrar, finalizar, onSalir }) {
  const generar = useCallback(() => generarPartida("vasos", rango.id, { modo }), [rango.id, modo]);
  const ronda = useRonda({
    generar,
    alFinalizar: (r) => finalizar({ juego: "vasos", modo, ...r }),
  });

  const [nivel, setNivel] = useState(0);
  const [eleccion, setEleccion] = useState(null);
  const [retro, setRetro] = useState(null);
  const arrastrando = useRef(false);

  const ej = ronda.ejercicio;

  function limpiar() {
    setNivel(0);
    setEleccion(null);
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

  function resolver(bien, extra = {}) {
    registrar(ej.categoria, bien);
    if (!bien) ronda.fallar();
    sonar(bien ? "bien" : "mal");
    setRetro({ bien, ...extra });
  }

  function siguiente() {
    ronda.cerrarEjercicio(!!retro?.bien);
    limpiar();
  }

  const enunciado =
    ej.modo === "llenar" ? "Llena el vaso hasta la marca que se pide."
      : ej.modo === "comparar" ? "¿Cuál de los dos vasos tiene más jugo?"
        : "Encuentra el vaso que tiene la misma cantidad.";

  return (
    <div>
      <Cabecera
        juego="Los Vasos Medidores" icono="🥤" color={COLOR}
        resultados={ronda.resultados} total={ronda.total}
        enunciado={enunciado}
      />

      {ej.modo === "llenar" && (
        <ModoLlenar
          ej={ej} nivel={nivel} setNivel={setNivel} retro={retro}
          arrastrando={arrastrando} onResolver={resolver} onSiguiente={siguiente}
        />
      )}
      {ej.modo === "comparar" && (
        <ModoComparar
          ej={ej} eleccion={eleccion} setEleccion={setEleccion} retro={retro}
          onResolver={resolver} onSiguiente={siguiente}
        />
      )}
      {ej.modo === "equivalencias" && (
        <ModoEquivalencias
          ej={ej} eleccion={eleccion} setEleccion={setEleccion} retro={retro}
          onResolver={resolver} onSiguiente={siguiente}
        />
      )}
    </div>
  );
}

// ── Modo A · llenar ────────────────────────────────────────────────────────
function ModoLlenar({ ej, nivel, setNivel, retro, arrastrando, onResolver, onSiguiente }) {
  const resuelto = !!retro;

  function mover(e) {
    if (resuelto) return;
    setNivel(nivelDesdePuntero(e, ej.den));
  }

  return (
    <div style={{
      display: "grid", gap: 22,
      gridTemplateColumns: "minmax(260px, 1fr) minmax(260px, 1fr)",
      alignItems: "start",
    }}>
      <Panel estilo={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ touchAction: "none", cursor: resuelto ? "default" : "ns-resize", padding: "6px 20px" }}
          onPointerDown={(e) => {
            if (resuelto) return;
            arrastrando.current = true;
            e.currentTarget.setPointerCapture?.(e.pointerId);
            mover(e);
          }}
          onPointerMove={(e) => { if (arrastrando.current) mover(e); }}
          onPointerUp={(e) => {
            arrastrando.current = false;
            e.currentTarget.releasePointerCapture?.(e.pointerId);
          }}
          onPointerCancel={() => { arrastrando.current = false; }}
        >
          <Vaso
            den={ej.den} llenas={nivel} alto={260} color={COLOR}
            marcaObjetivo={resuelto ? ej.num / ej.den : null}
            resaltado={resuelto && retro.bien}
          />
        </div>
      </Panel>

      <Panel>
        <Rotulo color={COLOR}>Hay que llegar a</Rotulo>
        <div style={{ display: "flex", alignItems: "center", gap: 20, margin: "16px 0 8px" }}>
          <Fraccion num={ej.num} den={ej.den} tam={54} color={COLOR} />
          <div style={{ color: C.tenue, fontSize: TAM.cuerpo, lineHeight: 1.45 }}>
            El vaso está partido en <strong style={{ color: C.texto }}>{ej.den} {nombrePartes(ej.den)}</strong>.
            <br />Sube el jugo hasta llenar <strong style={{ color: C.texto }}>{ej.num}</strong>.
          </div>
        </div>

        {!resuelto ? (
          <div style={{ marginTop: 22 }}>
            <p style={{ color: C.apagado, fontSize: 15, marginBottom: 14 }}>
              Arrastra el jugo con el dedo. Se detiene solo en las marcas.
            </p>
            <Boton color={COLOR} tamano="grande" estilo={{ width: "100%" }}
              onClick={() => onResolver(nivel === ej.num, { nivel })}>
              Listo
            </Boton>
          </div>
        ) : (
          <>
            <Retro
              acerto={retro.bien} color={COLOR}
              titulo={retro.bien
                ? `Justo: ${ej.num} de ${ej.den}.`
                : `La marca de ${ej.num}/${ej.den} estaba ${retro.nivel > ej.num ? "más abajo" : "más arriba"}.`}
            >
              {retro.bien
                ? `Contaste ${ej.den} partes iguales y llenaste ${ej.num}.`
                : `Llenaste ${retro.nivel} ${retro.nivel === 1 ? "parte" : "partes"} de ${ej.den}. La raya punteada marca dónde quedaban ${ej.num}.`}
            </Retro>
            <div style={{ marginTop: 18 }}>
              <Boton color={COLOR} tamano="grande" onClick={onSiguiente} estilo={{ width: "100%" }}>
                Siguiente vaso
              </Boton>
            </div>
          </>
        )}
      </Panel>
    </div>
  );
}

// ── Modo B · comparar ──────────────────────────────────────────────────────
function ModoComparar({ ej, eleccion, setEleccion, retro, onResolver, onSiguiente }) {
  const resuelto = !!retro;
  const opciones = [["a", ej.a], ["b", ej.b]];
  const ganador = ej.mayor === "a" ? ej.a : ej.b;
  const perdedor = ej.mayor === "a" ? ej.b : ej.a;

  function elegir(id) {
    if (resuelto) return;
    setEleccion(id);
    onResolver(id === ej.mayor, { eleccion: id });
  }

  return (
    <div>
      <div style={{
        display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap",
        alignItems: "flex-start",
      }}>
        {opciones.map(([id, f]) => {
          const esGanador = id === ej.mayor;
          const marcado = eleccion === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => elegir(id)}
              disabled={resuelto}
              style={{
                background: C.panel,
                border: `3px solid ${resuelto
                  ? (esGanador ? C.verde : marcado ? C.amarillo : C.borde)
                  : marcado ? COLOR : C.borde}`,
                borderRadius: 18, padding: "18px 22px 14px", cursor: resuelto ? "default" : "pointer",
                fontFamily: "inherit", minWidth: 190, touchAction: "manipulation",
              }}
            >
              {/* Vacío hasta contestar: si el jugo ya estuviera servido, no
                  habría nada que decidir. */}
              <Vaso den={f.den} llenas={resuelto ? f.num : null} alto={230} color={COLOR}
                resaltado={resuelto && esGanador} />
              <div style={{ marginTop: 12, display: "flex", justifyContent: "center" }}>
                <Fraccion num={f.num} den={f.den} tam={40} color={resuelto && esGanador ? C.verde : C.texto} />
              </div>
            </button>
          );
        })}
      </div>

      {!resuelto ? (
        <p style={{ textAlign: "center", color: C.apagado, fontSize: 16, marginTop: 18 }}>
          Toca el vaso que tenga más. Todavía no está servido: hay que imaginarlo.
        </p>
      ) : (
        <Panel estilo={{ maxWidth: 720, margin: "22px auto 0" }}>
          <Retro
            acerto={retro.bien} color={COLOR}
            titulo={`Tiene más ${ganador.num}/${ganador.den}.`}
          >
            {ej.tipo === "mismo-numerador" ? (
              <>
                Los dos vasos llevan <strong>{ganador.num}</strong>{" "}
                {ganador.num === 1 ? "parte" : "partes"}, pero no son del mismo tamaño:
                partir el vaso en <strong>{perdedor.den}</strong> deja pedazos más chicos que
                partirlo en <strong>{ganador.den}</strong>.{" "}
                <strong style={{ color: C.amarillo }}>Entre más partes, más chico es cada pedazo.</strong>
              </>
            ) : ej.tipo === "mismo-denominador" ? (
              <>
                Los dos vasos están partidos en {ganador.den} {nombrePartes(ganador.den)} iguales,
                así que gana el que lleva más partes: {ganador.num} contra {perdedor.num}.
              </>
            ) : (
              <>
                {ganador.num}/{ganador.den} pasa de la mitad del vaso y {perdedor.num}/{perdedor.den} no
                llega tan alto. Ya servidos se ve de un vistazo cuál es cuál.
              </>
            )}
          </Retro>
          <div style={{ marginTop: 18, textAlign: "center" }}>
            <Boton color={COLOR} tamano="grande" onClick={onSiguiente}>Siguiente par</Boton>
          </div>
        </Panel>
      )}
    </div>
  );
}

// ── Modo C · equivalencias ─────────────────────────────────────────────────
function ModoEquivalencias({ ej, eleccion, setEleccion, retro, onResolver, onSiguiente }) {
  const resuelto = !!retro;
  const correcta = ej.opciones[ej.correcta];

  function elegir(k) {
    if (resuelto) return;
    setEleccion(k);
    onResolver(k === ej.correcta);
  }

  return (
    <div style={{
      display: "grid", gap: 24,
      gridTemplateColumns: "minmax(200px, .6fr) minmax(320px, 1.4fr)",
      alignItems: "start",
    }}>
      <Panel estilo={{ textAlign: "center" }}>
        <Rotulo color={COLOR}>Este vaso</Rotulo>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 14 }}>
          <Vaso den={ej.objetivo.den} llenas={ej.objetivo.num} alto={240} color={COLOR} resaltado />
        </div>
        <div style={{ marginTop: 12, display: "flex", justifyContent: "center" }}>
          <Fraccion num={ej.objetivo.num} den={ej.objetivo.den} tam={42} color={COLOR} />
        </div>
      </Panel>

      <div>
        <Rotulo>¿Cuál tiene la misma cantidad de jugo?</Rotulo>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 14 }}>
          {ej.opciones.map((f, k) => {
            const esCorrecta = k === ej.correcta;
            const marcado = eleccion === k;
            return (
              <button
                key={k}
                type="button"
                onClick={() => elegir(k)}
                disabled={resuelto}
                style={{
                  background: C.panel,
                  border: `3px solid ${resuelto
                    ? (esCorrecta ? C.verde : marcado ? C.amarillo : C.borde)
                    : marcado ? COLOR : C.borde}`,
                  borderRadius: 16, padding: "14px 16px 10px", cursor: resuelto ? "default" : "pointer",
                  fontFamily: "inherit", touchAction: "manipulation",
                }}
              >
                <Vaso den={f.den} llenas={f.num} alto={185} color={COLOR} resaltado={resuelto && esCorrecta} />
                <div style={{ marginTop: 10, display: "flex", justifyContent: "center" }}>
                  <Fraccion num={f.num} den={f.den} tam={30} color={resuelto && esCorrecta ? C.verde : C.texto} />
                </div>
              </button>
            );
          })}
        </div>

        {resuelto && (
          <>
            <Retro
              acerto={retro.bien} color={COLOR}
              titulo={`${correcta.num}/${correcta.den} y ${ej.objetivo.num}/${ej.objetivo.den} llegan a la misma altura.`}
            >
              El jugo es el mismo; lo que cambia es en cuántos pedazos se partió el vaso.
              Uno lo partió en {correcta.den} y el otro en {ej.objetivo.den}, y por eso hace falta
              llevar {correcta.num} de los chiquitos para igualar {ej.objetivo.num} de los grandes.
              Cuando dos fracciones valen lo mismo se llaman <strong>equivalentes</strong>.
            </Retro>
            <div style={{ marginTop: 18 }}>
              <Boton color={COLOR} tamano="grande" onClick={onSiguiente}>Siguiente</Boton>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
