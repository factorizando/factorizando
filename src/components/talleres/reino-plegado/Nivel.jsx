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
import { useCallback, useEffect, useMemo, useState } from "react";
import { acertijosDeNivel, buscarCasilla, portalesDelMapa } from "../../../data/talleres/reino-plegado/index.js";
import { sonar } from "../comun/sonido.js";
import { Boton, Panel, Rotulo } from "../comun/ui.jsx";
import { C, SUELO, TAM } from "./estilo.js";
import { direccionHacia, mover } from "./lib/movimiento.js";
import Acertijo from "./Acertijo.jsx";

const FLECHA = { arriba: "↑", abajo: "↓", izquierda: "←", derecha: "→" };
const clave = ({ fila, columna }) => `${fila}:${columna}`;

// Los colores de las costuras. Cada franja del borde lleva el color de la
// franja con la que está pegada del otro lado: eso es todo lo que hace falta
// para *ver* que el mundo está doblado. En la banda de Möbius los colores del
// lado derecho van al revés que los del izquierdo, y ahí se ve el volteo.
const tono = (i) => `hsl(${(i * 53) % 360} 68% 58%)`;

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

export default function Nivel({ mundo, nivel, jugador, color, grados, alResponder, onTerminar, onSalir }) {
  const inicio = useMemo(() => buscarCasilla(nivel, "@"), [nivel]);
  const salida = useMemo(() => buscarCasilla(nivel, "S"), [nivel]);
  const portales = useMemo(() => portalesDelMapa(nivel), [nivel]);

  const [pos, setPos] = useState(inicio);
  // Un acertijo por portal, del grado en que va el jugador ahora mismo.
  const [tanda, setTanda] = useState(() =>
    acertijosDeNivel({ mundoId: mundo.id, grados, cantidad: portales.length }));
  const [resueltos, setResueltos] = useState(() => new Set());
  const [intentados, setIntentados] = useState(() => new Set());
  const [abierto, setAbierto] = useState(null);   // índice del portal abierto
  const [terminado, setTerminado] = useState(null);

  const llaves = resueltos.size;
  const todas = llaves >= portales.length;

  const indiceDePortal = useCallback(
    (p) => portales.findIndex((q) => q.fila === p.fila && q.columna === p.columna),
    [portales]
  );

  const caminar = useCallback((direccion) => {
    if (abierto !== null || terminado) return;
    setPos((actual) => {
      const siguiente = mover(actual, direccion, { mapa: nivel.mapa, topologia: mundo.topologia });
      if (clave(siguiente) === clave(actual)) return actual;

      const i = indiceDePortal(siguiente);
      if (i >= 0 && !resueltos.has(i)) {
        setAbierto(i);
      } else if (salida && clave(siguiente) === clave(salida) && todas) {
        sonar("fin");
        setTerminado(true);
      }
      return siguiente;
    });
  }, [abierto, terminado, nivel.mapa, mundo.topologia, indiceDePortal, resueltos, salida, todas]);

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
    if (acerto) {
      // La llave se gana aunque no haya salido a la primera: fallar no cuesta
      // progreso, solo queda anotado para el maestro.
      setResueltos((s) => new Set(s).add(i));
    } else {
      // Otro acertijo del mismo tema para el siguiente intento: se vuelve a
      // pensar, no se memoriza la respuesta.
      setTanda((t) => {
        const nuevos = [...t];
        const reemplazo = acertijosDeNivel({ mundoId: mundo.id, grados, cantidad: 1 })[0];
        if (reemplazo) nuevos[i] = reemplazo;
        return nuevos;
      });
      setIntentados((s) => new Set(s).add(`fallo:${i}`));
    }
    setAbierto(null);
  }

  const columnas = nivel.mapa[0].length;
  const filas = nivel.mapa.length;
  const lado = Math.max(30, Math.min(62, Math.round(760 / columnas)));
  // Qué orillas están pegadas en este mundo.
  const costuras = {
    lados: mundo.topologia === "toro" || mundo.topologia === "mobius",
    arribaAbajo: mundo.topologia === "toro",
    volteo: mundo.topologia === "mobius",
  };

  if (terminado) {
    const total = portales.length;
    const limpios = total - [...intentados].filter((k) => String(k).startsWith("fallo:")).length;
    return (
      <Panel estilo={{ maxWidth: 620, margin: "30px auto", textAlign: "center" }}>
        <Rotulo color={color}>Nivel terminado</Rotulo>
        <div style={{ fontSize: 54, margin: "14px 0 6px" }}>🏁</div>
        <h2 style={{ margin: "0 0 6px", fontSize: 28, fontWeight: 800, color: C.texto }}>
          {nivel.nombre}
        </h2>
        <p style={{ color: C.tenue, fontSize: TAM.cuerpo, lineHeight: 1.5, margin: "10px auto 22px", maxWidth: "40ch" }}>
          Abriste los {total} portales{limpios === total
            ? " y todos te salieron a la primera."
            : `, ${limpios} a la primera.`}
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Boton color={color} tamano="grande" onClick={() => onTerminar({ aciertos: limpios, total })}>
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
          <span style={{ fontSize: 26, letterSpacing: 2 }}>
            {Array.from({ length: portales.length }, (_, i) => (
              <span key={i} style={{ opacity: resueltos.has(i) ? 1 : 0.25 }}>🔑</span>
            ))}
          </span>
          <Boton variante="fantasma" tamano="chico" onClick={onSalir}>Salir del nivel</Boton>
        </div>
      </div>

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
                  background: muro ? SUELO.muro : (f + c) % 2 ? SUELO.piso : SUELO.pisoAlt,
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
