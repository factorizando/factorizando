// Taller de Pizzas, Cajas y Vasos — componente raíz.
//
// Lo monta TallerRunner con { alumnoId, guardarSesion, cargarSesiones }.
//
// Tres juegos para un curso de regularización de primaria: división con
// residuo, multiplicación como grupos iguales y fracciones. Comparten
// interfaz y mecánica de fondo —se plantea la situación, el niño manipula o
// contesta, retroalimentación inmediata, siguiente— para que aprender a usar
// el taller no cueste tres veces.
//
// El rango de edad se elige una sola vez, al principio: de 7 a 10 años hay
// una distancia enorme y el mismo juego tiene que poder ser dos juegos. Una
// vez elegido, el niño ya no vuelve a ver esa pantalla; el maestro sí puede
// cambiarlo desde la barra de arriba.
import { useCallback, useState } from "react";
import { JUEGOS, RANGOS, RANGOS_POR_ID } from "../../../data/talleres/pizzas-cajas-vasos/index.js";
import { alternarSilencio, estaSilenciado } from "./lib/sonido.js";
import { anotarIntento, cerrarPartida, compararConAnterior } from "./lib/registro.js";
import { C, ACENTO, FUENTE, TAM } from "./estilo.js";
import { Rotulo } from "./ui.jsx";
import JuegoPizzeria from "./JuegoPizzeria.jsx";
import JuegoFabrica from "./JuegoFabrica.jsx";
import JuegoHuerto from "./JuegoHuerto.jsx";
import JuegoVasos from "./JuegoVasos.jsx";
import PanelProfesor from "./PanelProfesor.jsx";

// Nombre con el que la partida entra al expediente del alumno. Se escribe
// como lo diría el maestro, no como lo nombra el código.
function nombreActividad(juego, modo) {
  if (juego === "pizzeria") return "La Pizzería · división con residuo";
  if (juego === "fabrica") return modo === "huerto" ? "El Huerto · área y producto" : "La Fábrica de Cajas · multiplicación";
  const comoSeLlama = { llenar: "llenar", comparar: "comparar", equivalencias: "equivalencias", mezcla: "mezclado" };
  return `Los Vasos Medidores · ${comoSeLlama[modo] || "fracciones"}`;
}

function Tarjeta({ children, onClick, acento, minHeight = 150, estilo = {} }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        textAlign: "left", background: C.panel, border: `2px solid ${C.borde}`,
        borderRadius: 16, padding: "22px 22px", cursor: "pointer",
        fontFamily: "inherit", color: C.texto, minHeight,
        touchAction: "manipulation", ...estilo,
      }}
      onPointerEnter={(e) => { e.currentTarget.style.borderColor = acento; }}
      onPointerLeave={(e) => { e.currentTarget.style.borderColor = C.borde; }}
    >
      {children}
    </button>
  );
}

export default function PizzasCajasVasos({ alumnoId, guardarSesion, cargarSesiones }) {
  const [rangoId, setRangoId] = useState(null);
  const [juegoId, setJuegoId] = useState(null);
  const [modo, setModo] = useState(null);
  const [verPanel, setVerPanel] = useState(false);
  const [silencio, setSilencio] = useState(estaSilenciado);

  const rango = rangoId ? RANGOS_POR_ID[rangoId] : null;
  const juego = juegoId ? JUEGOS.find((j) => j.id === juegoId) : null;

  const registrar = useCallback(
    (categoria, acerto) => anotarIntento(alumnoId, { rango: rangoId, juego: juegoId, categoria, acerto }),
    [alumnoId, rangoId, juegoId]
  );

  // Cierre de partida: el marcador grueso va al expediente y el detalle de
  // errores al dispositivo. Devuelve el mensaje de la pantalla de resultados,
  // que compara al alumno con su propia partida anterior y con nadie más.
  const finalizar = useCallback(
    ({ juego: j, modo: m, aciertos, errores, total }) => {
      // A propósito optimista: si Supabase falla, la clase no se interrumpe.
      Promise.resolve(guardarSesion?.({
        actividad: nombreActividad(j, m ?? modo),
        grupo: rangoId,
        aciertos,
        errores,
      })).catch((e) => console.warn("[pizzas-cajas-vasos] no se guardó la sesión:", e.message));

      const anterior = cerrarPartida(alumnoId, {
        juego: j, modo: m ?? modo, rango: rangoId, aciertos, errores, total,
      });
      return compararConAnterior(aciertos, total, anterior);
    },
    [alumnoId, rangoId, modo, guardarSesion]
  );

  const marco = {
    height: "100%", overflowY: "auto", background: C.fondo, color: C.texto, fontFamily: FUENTE,
  };

  function abrirJuego(j) {
    const modos = (j.modos || []).filter((m) => !m.soloRangos || m.soloRangos.includes(rangoId));
    setJuegoId(j.id);
    // `null` significa "falta elegir modo" y por eso un juego sin modos —o con
    // uno solo disponible en este rango— entra derecho al juego. La pizzería
    // no tiene variantes: se le pone "" para que no se quede esperando una
    // elección que nadie va a hacer.
    setModo(modos.length === 0 ? "" : modos.length === 1 ? modos[0].id : null);
  }

  const modosDisponibles = (juego?.modos || []).filter(
    (m) => !m.soloRangos || m.soloRangos.includes(rangoId)
  );
  // Estando dentro de un juego que tiene varias formas de jugarse, el paso
  // atrás natural es la elección de modo, no el catálogo entero.
  const atrasAModos = modo !== null && modosDisponibles.length > 1;

  function volver() {
    if (atrasAModos) {
      setModo(null);
    } else if (juegoId) {
      setJuegoId(null);
      setModo(null);
    }
  }

  const botonPanel = (
    <button
      type="button"
      onClick={() => setVerPanel(true)}
      title="Panel del maestro"
      aria-label="Panel del maestro"
      style={{
        background: "transparent", border: `1px solid ${C.borde}`, borderRadius: 8,
        color: C.apagado, cursor: "pointer", fontSize: 15, width: 44, height: 44,
      }}
    >
      ▤
    </button>
  );

  // ── Elegir el rango de edad ─────────────────────────────────────────────
  if (!rango) {
    return (
      <div style={marco}>
        <div style={{ maxWidth: 880, margin: "0 auto", padding: "44px 26px 70px", position: "relative" }}>
          <div style={{ position: "absolute", top: 20, right: 26 }}>{botonPanel}</div>
          <Rotulo color={C.naranja}>Pizzas, cajas y vasos</Rotulo>
          <h1 style={{ fontSize: TAM.titulo, fontWeight: 800, margin: "12px 0 10px" }}>
            ¿Con quién vamos a trabajar hoy?
          </h1>
          <p style={{ color: C.tenue, fontSize: TAM.cuerpo, lineHeight: 1.55, margin: "0 0 30px", maxWidth: "62ch" }}>
            Esto lo elige el maestro una sola vez y cambia la dificultad de los tres juegos.
            Si un alumno de nueve todavía necesita contar los dibujos, va mejor en el bloque de abajo:
            el rango es de representación, no de edad.
          </p>

          <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {RANGOS.map((r) => (
              <Tarjeta key={r.id} acento={C.naranja} onClick={() => setRangoId(r.id)} minHeight={190}>
                <div style={{ fontSize: 30, fontWeight: 800, marginBottom: 8 }}>{r.nombre}</div>
                <div style={{ color: C.tenue, fontSize: 16.5, lineHeight: 1.45, marginBottom: 16 }}>{r.detalle}</div>
                <ul style={{ margin: 0, paddingLeft: 18, color: C.apagado, fontSize: 15, lineHeight: 1.7 }}>
                  <li>Divide entre {r.pizzeria.porCaja[0]} y {r.pizzeria.porCaja[1]}, hasta {r.pizzeria.totalMax} rebanadas</li>
                  <li>Multiplica con factores del {r.fabrica.factores[0]} al {r.fabrica.factores[1]}
                    {r.fabrica.dosCifras ? " (y algunos de dos cifras)" : ""}</li>
                  <li>Fracciones con denominadores hasta {Math.max(...r.vasos.denominadores)}</li>
                </ul>
              </Tarjeta>
            ))}
          </div>
        </div>
        {verPanel && (
          <PanelProfesor alumnoId={alumnoId} cargarSesiones={cargarSesiones} onCerrar={() => setVerPanel(false)} />
        )}
      </div>
    );
  }

  return (
    <div style={marco}>
      {/* Barra del taller. El control de rango y el panel son para el maestro
          y por eso van chicos y sin color: esto se proyecta frente al niño. */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 12, padding: "12px 22px", borderBottom: `1px solid ${C.borde}`,
        position: "sticky", top: 0, background: C.fondo, zIndex: 5,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
          {juegoId && (
            <button
              type="button"
              onClick={volver}
              style={{
                background: "transparent", border: "none", color: C.tenue, cursor: "pointer",
                fontFamily: "inherit", fontSize: 16, fontWeight: 700, padding: "8px 6px", minHeight: 44,
              }}
            >
              ←&nbsp;{atrasAModos ? "Cómo jugar" : "Juegos"}
            </button>
          )}
          {juego && (
            <span style={{ color: ACENTO[modo === "huerto" ? "huerto" : juego.id], fontSize: 16, fontWeight: 800 }}>
              {juego.icono} {juego.nombre}
            </span>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button
            type="button"
            onClick={() => { setRangoId(null); setJuegoId(null); setModo(null); }}
            title="Cambiar el rango de edad"
            style={{
              background: "transparent", border: `1px solid ${C.borde}`, borderRadius: 8,
              color: C.apagado, cursor: "pointer", fontFamily: "inherit",
              fontSize: 13.5, fontWeight: 700, padding: "0 12px", height: 44,
            }}
          >
            {rango.nombre}
          </button>
          <button
            type="button"
            onClick={() => setSilencio(alternarSilencio())}
            title={silencio ? "Activar sonido" : "Silenciar"}
            aria-label={silencio ? "Activar sonido" : "Silenciar"}
            style={{
              background: "transparent", border: `1px solid ${C.borde}`, borderRadius: 8,
              color: C.apagado, cursor: "pointer", fontSize: 16, width: 44, height: 44,
            }}
          >
            {silencio ? "🔇" : "🔊"}
          </button>
          {botonPanel}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "26px 26px 70px" }}>
        {/* ── Elegir juego ─────────────────────────────────────────────── */}
        {!juego && (
          <>
            <Rotulo color={C.naranja}>Elige un juego</Rotulo>
            <div style={{
              display: "grid", gap: 16, marginTop: 16,
              gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            }}>
              {JUEGOS.map((j) => (
                <Tarjeta key={j.id} acento={ACENTO[j.id]} onClick={() => abrirJuego(j)} minHeight={200}>
                  <div style={{ fontSize: 46, lineHeight: 1, marginBottom: 14 }}>{j.icono}</div>
                  <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 6 }}>{j.nombre}</div>
                  <div style={{ color: C.tenue, fontSize: 16, lineHeight: 1.45, marginBottom: 14 }}>{j.resumen}</div>
                  <div style={{
                    display: "inline-block", fontSize: 12.5, fontWeight: 800, letterSpacing: ".08em",
                    textTransform: "uppercase", color: ACENTO[j.id],
                    border: `1px solid ${ACENTO[j.id]}55`, borderRadius: 999, padding: "5px 12px",
                  }}>
                    {j.operacion}
                  </div>
                </Tarjeta>
              ))}
            </div>
          </>
        )}

        {/* ── Elegir modo ──────────────────────────────────────────────── */}
        {juego && modo === null && (
          <>
            <Rotulo color={ACENTO[juego.id]}>{juego.nombre} · ¿cómo lo jugamos?</Rotulo>
            <div style={{
              display: "grid", gap: 14, marginTop: 16,
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            }}>
              {modosDisponibles.map((m) => (
                <Tarjeta
                  key={m.id} acento={ACENTO[m.id] || ACENTO[juego.id]}
                  onClick={() => setModo(m.id)} minHeight={120}
                >
                  <div style={{ fontSize: 21, fontWeight: 800, marginBottom: 6 }}>{m.nombre}</div>
                  <div style={{ color: C.tenue, fontSize: 15.5, lineHeight: 1.45 }}>{m.desc}</div>
                </Tarjeta>
              ))}
            </div>
            {juego.id === "vasos" && rangoId === "7-8" && (
              <p style={{ color: C.apagado, fontSize: 15, marginTop: 20, maxWidth: "64ch", lineHeight: 1.55 }}>
                Las equivalencias aparecen en el bloque de 9 y 10 años: antes de compararlas hay que
                tener firme qué es una fracción y cuál vale más.
              </p>
            )}
          </>
        )}

        {/* ── Jugar ────────────────────────────────────────────────────── */}
        {juego && modo !== null && (
          <>
            {juego.id === "pizzeria" && (
              <JuegoPizzeria
                key={`pizzeria-${rangoId}`}
                rango={rango} registrar={registrar} finalizar={finalizar}
                onSalir={() => { setJuegoId(null); setModo(null); }}
              />
            )}
            {juego.id === "fabrica" && modo !== "huerto" && (
              <JuegoFabrica
                key={`fabrica-${rangoId}`}
                rango={rango} registrar={registrar} finalizar={finalizar}
                onSalir={() => { setJuegoId(null); setModo(null); }}
              />
            )}
            {juego.id === "fabrica" && modo === "huerto" && (
              <JuegoHuerto
                key={`huerto-${rangoId}`}
                rango={rango} registrar={registrar} finalizar={finalizar}
                onSalir={() => { setJuegoId(null); setModo(null); }}
              />
            )}
            {juego.id === "vasos" && (
              <JuegoVasos
                key={`vasos-${rangoId}-${modo}`}
                rango={rango} modo={modo} registrar={registrar} finalizar={finalizar}
                onSalir={() => { setJuegoId(null); setModo(null); }}
              />
            )}
          </>
        )}
      </div>

      {verPanel && (
        <PanelProfesor alumnoId={alumnoId} cargarSesiones={cargarSesiones} onCerrar={() => setVerPanel(false)} />
      )}
    </div>
  );
}
