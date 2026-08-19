// Un nivel: el mapa, el jugador moviéndose por casillas y los portales.
//
// La regla que ordena el diseño: **el acertijo no es una puerta antes del
// nivel, es un objeto dentro del nivel**. Se camina, se llega a un portal, se
// abre lo que guarda, y con las llaves de todos los portales se abre la salida.
// Así el niño está jugando todo el tiempo y las preguntas son parte del mundo.
//
// El movimiento va por casillas y no libre a propósito: es lo que se puede
// tocar con el dedo en una tablet, y es lo que hará evidentes las costuras de
// los mundos que vienen —salir por un borde y aparecer por el otro solo se
// entiende si los pasos se cuentan—.
//
// **Modo caravana**: los seis viajan en un mismo peón por un mismo nivel. El
// que está en turno camina hasta un portal y lo abre; al cerrarlo, acierte o
// no, la tablet pasa al siguiente. Las llaves son del grupo.
//
// Lo que hace que valga la pena: el acertijo **no se genera al empezar el nivel
// sino al abrir el portal**, con el escalón del jugador que lo está abriendo.
// Así un mismo tablero lo juegan seis niños de cuatro grados distintos y a cada
// uno le toca lo suyo. Si uno falla, el portal se queda para el que sigue —con
// otro acertijo, de su propio grado—, que es exactamente lo que uno quiere que
// pase en un equipo.
import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  acertijosDeNivel, buscarCasilla, enlacesDe, letrasDeEnlace, portalesDelMapa,
} from "../../../data/talleres/reino-plegado/index.js";
import { sonar } from "../comun/sonido.js";
import { Boton, Panel, Rotulo } from "../comun/ui.jsx";
import { C, COLORES_JUGADOR, SUELO, TAM } from "./estilo.js";
import { Avatar } from "./Jugadores.jsx";
import { direccionHacia, mover } from "./lib/movimiento.js";
import Acertijo from "./Acertijo.jsx";

// three pesa 700 KB: solo baja cuando alguien quiere ver el mundo doblado.
const Vista3D = lazy(() => import("./Vista3D.jsx"));

const FLECHA = { arriba: "↑", abajo: "↓", izquierda: "←", derecha: "→" };
const clave = ({ fila, columna }) => `${fila}:${columna}`;

// Los colores de las costuras. Cada franja del borde lleva el color de la
// franja con la que está pegada del otro lado: eso es todo lo que hace falta
// para *ver* que el mundo está doblado. En la banda de Möbius los colores del
// lado derecho van al revés que los del izquierdo, y ahí se ve el volteo.
const tono = (i) => `hsl(${(i * 53) % 360} 68% 58%)`;
// El color de un pasaje sale de su letra: las dos bocas quedan del mismo color
// y se reconocen de lejos, que es todo lo que hace falta para entender que son
// la misma losa.
const tonoEnlace = (letra) => `hsl(${((letra.charCodeAt(0) - 97) * 71 + 25) % 360} 72% 60%)`;

function Costura({ n, lado, vertical, invertida }) {
  const grosor = 9;
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: vertical ? `${grosor}px` : `repeat(${n}, ${lado}px)`,
      gridTemplateRows: vertical ? `repeat(${n}, ${lado}px)` : `${grosor}px`,
      gap: 2,
    }}>
      {Array.from({ length: n }, (_, i) => (
        <span key={i} style={{
          background: tono(invertida ? n - 1 - i : i),
          borderRadius: 3, opacity: 0.9,
        }} />
      ))}
    </div>
  );
}

export default function Nivel({
  mundo, nivel, jugador, color, grados, caravana, alResponder, onTurnoCumplido, onTerminar, onSalir,
}) {
  const inicio = useMemo(() => buscarCasilla(nivel, "@"), [nivel]);
  const salida = useMemo(() => buscarCasilla(nivel, "S"), [nivel]);
  const portales = useMemo(() => portalesDelMapa(nivel), [nivel]);
  // Los pasajes del mundo 4. En los demás mundos no hay ninguno y esto queda
  // en un objeto vacío.
  const enlaces = useMemo(() => enlacesDe(nivel), [nivel]);
  const letras = useMemo(() => letrasDeEnlace(nivel), [nivel]);

  const [pos, setPos] = useState(inicio);
  // Los acertijos se van creando al abrir cada portal, no al empezar el nivel:
  // ver la nota de arriba sobre la caravana.
  const [tanda, setTanda] = useState({});
  const usados = useRef(new Set());
  const [resueltos, setResueltos] = useState(() => new Set());
  const [intentados, setIntentados] = useState(() => new Set());
  // Quién abrió cada portal y si le salió a la primera, para el marcador final.
  const [marcador, setMarcador] = useState({});
  const [abierto, setAbierto] = useState(null);   // índice del portal abierto
  const [ver3D, setVer3D] = useState(false);
  const [terminado, setTerminado] = useState(null);

  const llaves = resueltos.size;
  const todas = llaves >= portales.length;

  const indiceDePortal = useCallback(
    (p) => portales.findIndex((q) => q.fila === p.fila && q.columna === p.columna),
    [portales]
  );

  // El acertijo se pide en el momento de abrir el portal, con el escalón del
  // jugador que lo abre. `usados` vive en un ref para no repetir reactivos en
  // todo el nivel, aunque los pidan seis jugadores distintos.
  const abrirPortal = useCallback((i) => {
    setTanda((t) => {
      if (t[i]) return t;
      // Se alterna materia por portal para que ningún nivel sea "el de mates".
      const materia = i % 2 === 0 ? "matematicas" : "espanol";
      const nuevo = acertijosDeNivel({
        mundoId: mundo.id, grados, cantidad: 1, materia, usados: usados.current,
      })[0];
      if (nuevo) usados.current.add(nuevo.clave);
      return nuevo ? { ...t, [i]: nuevo } : t;
    });
    setAbierto(i);
  }, [mundo.id, grados]);

  const caminar = useCallback((direccion) => {
    if (abierto !== null || terminado) return;
    setPos((actual) => {
      const siguiente = mover(actual, direccion, {
        mapa: nivel.mapa, topologia: mundo.topologia, enlaces,
      });
      if (clave(siguiente) === clave(actual)) return actual;

      const i = indiceDePortal(siguiente);
      if (i >= 0 && !resueltos.has(i)) {
        abrirPortal(i);
      } else if (salida && clave(siguiente) === clave(salida) && todas) {
        sonar("fin");
        setTerminado(true);
      }
      return siguiente;
    });
  }, [abierto, terminado, nivel.mapa, mundo.topologia, enlaces, indiceDePortal, abrirPortal, resueltos, salida, todas]);

  // Teclado: para el maestro que prueba en la laptop. En la tablet se toca.
  useEffect(() => {
    const teclas = { ArrowUp: "arriba", ArrowDown: "abajo", ArrowLeft: "izquierda", ArrowRight: "derecha" };
    const alTeclear = (e) => {
      const d = teclas[e.key];
      if (!d) return;
      e.preventDefault();
      caminar(d);
    };
    window.addEventListener("keydown", alTeclear);
    return () => window.removeEventListener("keydown", alTeclear);
  }, [caminar]);

  function cerrarAcertijo(acerto) {
    const i = abierto;
    const acertijo = tanda[i];
    // Solo el primer intento de cada portal alimenta la medición.
    const esPrimero = !intentados.has(i);
    if (esPrimero) {
      setIntentados((s) => new Set(s).add(i));
      alResponder?.(acertijo, acerto);
    }

    // El marcador es por jugador: quién abrió cuántos y cuántos a la primera.
    setMarcador((m) => {
      const previo = m[jugador.id] || { abiertos: 0, aPrimera: 0, intentos: 0 };
      return {
        ...m,
        [jugador.id]: {
          abiertos: previo.abiertos + (acerto ? 1 : 0),
          aPrimera: previo.aPrimera + (acerto && esPrimero ? 1 : 0),
          intentos: previo.intentos + 1,
        },
      };
    });

    if (acerto) {
      // La llave se gana aunque no haya salido a la primera: fallar no cuesta
      // progreso, solo queda anotado para el maestro.
      setResueltos((s) => new Set(s).add(i));
    } else {
      // El portal se queda cerrado y sin acertijo: el que llegue después
      // —en caravana, el siguiente de la fila— recibe uno nuevo de su grado.
      setTanda((t) => {
        const copia = { ...t };
        delete copia[i];
        return copia;
      });
      setIntentados((s) => new Set(s).add(`fallo:${i}`));
    }
    setAbierto(null);
    // Pase la tablet: en caravana el turno cambia con cada portal intentado.
    if (caravana) onTurnoCumplido?.();
  }

  const columnas = nivel.mapa[0].length;
  const filas = nivel.mapa.length;
  // Con doce portales los mapas crecieron; el tope de 720 px deja sitio para
  // la cruceta al lado en una tablet en horizontal.
  const lado = Math.max(28, Math.min(52, Math.round(720 / columnas)));
  // Qué orillas están pegadas en este mundo.
  const costuras = {
    lados: mundo.topologia === "toro" || mundo.topologia === "mobius",
    arribaAbajo: mundo.topologia === "toro",
    volteo: mundo.topologia === "mobius",
  };

  if (terminado) {
    const total = portales.length;
    const limpios = total - [...intentados].filter((k) => String(k).startsWith("fallo:")).length;
    const equipo = caravana?.jugadores || [];

    return (
      <Panel estilo={{ maxWidth: 660, margin: "30px auto", textAlign: "center" }}>
        <Rotulo color={color}>Nivel terminado</Rotulo>
        <div style={{ fontSize: 54, margin: "14px 0 6px" }}>🏁</div>
        <h2 style={{ margin: "0 0 6px", fontSize: 28, fontWeight: 800, color: C.texto }}>
          {nivel.nombre}
        </h2>
        <p style={{ color: C.tenue, fontSize: TAM.cuerpo, lineHeight: 1.5, margin: "10px auto 22px", maxWidth: "44ch" }}>
          {caravana
            ? `Entre todos abrieron los ${total} portales.`
            : `Abriste los ${total} portales${limpios === total
              ? " y todos te salieron a la primera."
              : `, ${limpios} a la primera.`}`}
        </p>

        {/* En caravana el marcador es de cada quien: el nivel se gana en
            equipo, pero cada portal lo abrió alguien. */}
        {caravana && (
          <div style={{ display: "grid", gap: 8, margin: "0 auto 24px", maxWidth: 420, textAlign: "left" }}>
            {equipo.map((j, k) => {
              const m = marcador[j.id] || { abiertos: 0, aPrimera: 0 };
              return (
                <div key={j.id} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  background: C.panel, border: `1px solid ${C.borde}`, borderRadius: 10,
                  padding: "9px 14px",
                }}>
                  <Avatar jugador={j} color={COLORES_JUGADOR[k]} tam={36} borde={2} />
                  <span style={{ flex: 1, fontWeight: 700, color: C.texto }}>{j.nombre}</span>
                  <span style={{ color: C.tenue, fontSize: 14.5, fontVariantNumeric: "tabular-nums" }}>
                    {m.abiertos} {m.abiertos === 1 ? "portal" : "portales"}
                    {m.abiertos > 0 && ` · ${m.aPrimera} a la primera`}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Boton color={color} tamano="grande" onClick={() => onTerminar({ aciertos: limpios, total, marcador })}>
            Volver al mapa del reino
          </Boton>
        </div>
      </Panel>
    );
  }

  return (
    <div>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        gap: 16, flexWrap: "wrap", marginBottom: 16,
      }}>
        <div>
          <Rotulo color={color}>{mundo.icono} {mundo.nombre} · {nivel.nombre}</Rotulo>
          <p style={{ margin: "8px 0 0", color: C.tenue, fontSize: TAM.cuerpo }}>
            {todas
              ? "Ya tienes todas las llaves: corre a la salida."
              : "Camina hasta un portal y abre lo que guarda."}
          </p>
          {mundo.pista && (
            <p style={{
              margin: "10px 0 0", color: C.texto, fontSize: 15.5, lineHeight: 1.5,
              maxWidth: "56ch", borderLeft: `3px solid ${color}`, paddingLeft: 12,
            }}>
              {mundo.pista}
            </p>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {/* Con pocos portales se ven las llaves una por una; con doce, la
              fila se vuelve una tira ilegible y mejor un contador. */}
          {portales.length <= 6 ? (
            <span style={{ fontSize: 26, letterSpacing: 2 }}
              title={caravana ? "Las llaves son del grupo" : undefined}>
              {Array.from({ length: portales.length }, (_, i) => (
                <span key={i} style={{ opacity: resueltos.has(i) ? 1 : 0.25 }}>🔑</span>
              ))}
            </span>
          ) : (
            <span style={{
              display: "flex", alignItems: "center", gap: 8,
              background: C.panel, border: `1px solid ${C.borde}`, borderRadius: 999,
              padding: "6px 14px",
            }} title={caravana ? "Las llaves son del grupo" : undefined}>
              <span style={{ fontSize: 22 }}>🔑</span>
              <span style={{
                fontSize: 20, fontWeight: 800, color: llaves ? color : C.apagado,
                fontVariantNumeric: "tabular-nums",
              }}>
                {llaves}<span style={{ color: C.apagado, fontSize: 15 }}> / {portales.length}</span>
              </span>
            </span>
          )}
          {mundo.topologia !== "plano" && (
            <Boton variante="neutro" tamano="chico" color={color} onClick={() => setVer3D(true)}>
              Ver el mundo doblado
            </Boton>
          )}
          <Boton variante="fantasma" tamano="chico" onClick={onSalir}>Salir del nivel</Boton>
        </div>
      </div>

      {/* ── De quién es el turno ─────────────────────────────────────── */}
      {caravana && (
        <div style={{
          display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap",
          background: C.panel, border: `2px solid ${color}`, borderRadius: 14,
          padding: "12px 18px", marginBottom: 18,
        }}>
          <Avatar jugador={jugador} color={color} tam={52} />
          <div>
            <Rotulo color={color}>Turno de</Rotulo>
            <div style={{ fontSize: 24, fontWeight: 800, color: C.texto, marginTop: 2 }}>
              {jugador.nombre}
            </div>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: C.apagado, fontSize: 13.5, fontWeight: 700 }}>siguen</span>
            {caravana.jugadores
              .map((j, k) => ({ j, k }))
              .filter(({ j }) => j.id !== jugador.id)
              .slice(0, 5)
              .map(({ j, k }) => (
                <div key={j.id} style={{ opacity: 0.55 }} title={j.nombre}>
                  <Avatar jugador={j} color={COLORES_JUGADOR[k]} tam={34} borde={2} />
                </div>
              ))}
          </div>
        </div>
      )}

      <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "flex-start" }}>
        {/* ── El mapa, con sus costuras alrededor ─────────────────────── */}
        <div style={{
          display: "grid", gap: 6, alignItems: "center", justifyItems: "center",
          gridTemplateColumns: "auto auto auto",
        }}>
          <span />
          {costuras.arribaAbajo ? <Costura n={columnas} lado={lado} /> : <span />}
          <span />

          {costuras.lados ? <Costura n={filas} lado={lado} vertical /> : <span />}
          <div style={{
            display: "grid", gridTemplateColumns: `repeat(${columnas}, ${lado}px)`,
            gap: 2, background: C.borde, padding: 2, borderRadius: 10,
          }}>
          {nivel.mapa.map((fila, f) => fila.split("").map((ch, c) => {
            const aqui = pos.fila === f && pos.columna === c;
            const muro = ch === "#";
            const iPortal = indiceDePortal({ fila: f, columna: c });
            const portalAbierto = iPortal >= 0 && resueltos.has(iPortal);
            const esSalida = ch === "S";
            const letraEnlace = letras[`${f}:${c}`];
            const vecina = !!direccionHacia(pos, { fila: f, columna: c }) && !muro;

            return (
              <button
                key={`${f}:${c}`}
                type="button"
                disabled={!vecina}
                onClick={() => {
                  const d = direccionHacia(pos, { fila: f, columna: c });
                  if (d) caminar(d);
                }}
                style={{
                  width: lado, height: lado, border: 0, padding: 0,
                  background: muro
                    ? SUELO.muro
                    : letraEnlace
                      ? `${tonoEnlace(letraEnlace)}33`
                      : (f + c) % 2 ? SUELO.piso : SUELO.pisoAlt,
                  boxShadow: muro ? `inset 0 3px 0 ${SUELO.muroAlto}` : "none",
                  cursor: vecina ? "pointer" : "default",
                  display: "grid", placeItems: "center",
                  fontSize: Math.round(lado * 0.5), lineHeight: 1,
                  outline: vecina ? `2px solid ${color}55` : "none", outlineOffset: -3,
                  touchAction: "manipulation",
                }}
              >
                {aqui ? (
                  jugador?.avatar
                    ? <img src={jugador.avatar} alt="" style={{
                      width: lado - 8, height: lado - 8, borderRadius: "50%",
                      objectFit: "cover", border: `2px solid ${color}`,
                    }} />
                    : <span style={{ fontSize: Math.round(lado * 0.55) }}>🙂</span>
                ) : iPortal >= 0 ? (
                  <span style={{ opacity: portalAbierto ? 0.3 : 1 }}>{portalAbierto ? "·" : "◈"}</span>
                ) : letraEnlace ? (
                  <span style={{ color: tonoEnlace(letraEnlace), fontSize: Math.round(lado * 0.46) }}>◆</span>
                ) : esSalida ? (
                  <span style={{ opacity: todas ? 1 : 0.35 }}>{todas ? "🚪" : "🔒"}</span>
                ) : null}
              </button>
            );
          }))}
          </div>
          {costuras.lados ? <Costura n={filas} lado={lado} vertical invertida={costuras.volteo} /> : <span />}

          <span />
          {costuras.arribaAbajo ? <Costura n={columnas} lado={lado} /> : <span />}
          <span />
        </div>

        {/* ── Los controles ───────────────────────────────────────────── */}
        <div>
          <Rotulo>Muévete</Rotulo>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 74px)", gap: 8,
            marginTop: 12, justifyContent: "center",
          }}>
            <span />
            <BotonDir d="arriba" color={color} onClick={caminar} />
            <span />
            <BotonDir d="izquierda" color={color} onClick={caminar} />
            <span />
            <BotonDir d="derecha" color={color} onClick={caminar} />
            <span />
            <BotonDir d="abajo" color={color} onClick={caminar} />
            <span />
          </div>
          <p style={{ color: C.apagado, fontSize: 14, marginTop: 14, maxWidth: "26ch", lineHeight: 1.5 }}>
            También puedes tocar la casilla de al lado, o usar las flechas del teclado.
          </p>
        </div>
      </div>

      {abierto !== null && tanda[abierto] && (
        <Acertijo acertijo={tanda[abierto]} color={color} onResuelto={cerrarAcertijo} />
      )}

      {ver3D && (
        <Suspense fallback={
          <div style={{
            position: "fixed", inset: 0, background: "#0f1620", zIndex: 60,
            display: "grid", placeItems: "center", color: C.tenue, fontSize: 16,
          }}>
            Doblando el mundo…
          </div>
        }>
          <Vista3D
            mundo={mundo} nivel={nivel} pos={pos}
            resueltos={resueltos} portales={portales}
            onCerrar={() => setVer3D(false)}
          />
        </Suspense>
      )}
    </div>
  );
}

function BotonDir({ d, color, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(d)}
      aria-label={d}
      style={{
        width: 74, height: 74, borderRadius: 14, cursor: "pointer",
        background: C.panel, border: `2px solid ${C.bordeVivo}`, color,
        fontSize: 30, fontWeight: 800, fontFamily: "inherit", touchAction: "manipulation",
      }}
    >
      {FLECHA[d]}
    </button>
  );
}
