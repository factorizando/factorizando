// Taller del Terreno — componente raíz.
//
// Lo monta TallerRunner con { alumnoId, guardarSesion, cargarSesiones }.
//
// Dos juegos para introducir perímetro y área. Comparten con los demás
// talleres de juegos la misma mecánica de fondo —se plantea la situación, el
// niño manipula, retroalimentación inmediata, siguiente— y las mismas piezas
// de interfaz, que viven en ../comun.
//
// El rango de edad se elige una sola vez, al principio; el niño ya no vuelve a
// ver esa pantalla. El maestro puede cambiarlo desde la barra de arriba.
import { useCallback, useState } from "react";
import {
  JUEGOS, JUEGOS_POR_ID, RANGOS, RANGOS_POR_ID, etiquetaCategoria,
} from "../../../data/talleres/el-terreno/index.js";
import { alternarSilencio, estaSilenciado } from "./lib/sonido.js";
import { anotarIntento, cerrarPartida, compararConAnterior, registro } from "./lib/registro.js";
import { C, ACENTO, FUENTE, TAM } from "./estilo.js";
import { Rotulo, TarjetaMenu } from "../comun/ui.jsx";
import PanelProfesor from "../comun/PanelProfesor.jsx";
import JuegoVueltaPatio from "./JuegoVueltaPatio.jsx";
import JuegoCercaPasto from "./JuegoCercaPasto.jsx";
import JuegoMismaCerca from "./JuegoMismaCerca.jsx";
import JuegoMosaiquero from "./JuegoMosaiquero.jsx";

// Nombre con el que la partida entra al expediente del alumno.
const ACTIVIDAD = {
  "vuelta-patio": "La Vuelta al Patio · perímetro como recorrido",
  "cerca-pasto": "La Cerca y el Pasto · perímetro y área",
  "misma-cerca": "La misma cerca · el área cambia con la forma",
  mosaiquero: "El Mosaiquero · área de figuras compuestas",
};

// Cada juego con su componente. El shell solo elige.
const COMPONENTES = {
  "vuelta-patio": JuegoVueltaPatio,
  "cerca-pasto": JuegoCercaPasto,
  "misma-cerca": JuegoMismaCerca,
  mosaiquero: JuegoMosaiquero,
};

export default function ElTerreno({ alumnoId, guardarSesion, cargarSesiones }) {
  const [rangoId, setRangoId] = useState(null);
  const [juegoId, setJuegoId] = useState(null);
  const [verPanel, setVerPanel] = useState(false);
  const [silencio, setSilencio] = useState(estaSilenciado);

  const rango = rangoId ? RANGOS_POR_ID[rangoId] : null;
  const juego = juegoId ? JUEGOS_POR_ID[juegoId] : null;
  const Juego = juegoId ? COMPONENTES[juegoId] : null;

  const registrar = useCallback(
    (categoria, acerto) => anotarIntento(alumnoId, { rango: rangoId, juego: juegoId, categoria, acerto }),
    [alumnoId, rangoId, juegoId]
  );

  const finalizar = useCallback(
    ({ juego: j, aciertos, errores, total }) => {
      // A propósito optimista: si Supabase falla, la clase no se interrumpe.
      Promise.resolve(guardarSesion?.({
        actividad: ACTIVIDAD[j] || j, grupo: rangoId, aciertos, errores,
      })).catch((e) => console.warn("[el-terreno] no se guardó la sesión:", e.message));

      const anterior = cerrarPartida(alumnoId, { juego: j, rango: rangoId, aciertos, errores, total });
      return compararConAnterior(aciertos, total, anterior);
    },
    [alumnoId, rangoId, guardarSesion]
  );

  const marco = {
    height: "100%", overflowY: "auto", background: C.fondo, color: C.texto, fontFamily: FUENTE,
  };

  // Un juego puede pedir un bloque de edad: El Mosaiquero supone tener firme el
  // área del rectángulo, así que no se le ofrece a los de 7-8.
  const juegosDisponibles = JUEGOS.filter((j) => !j.soloRangos || j.soloRangos.includes(rangoId));

  const panelMaestro = verPanel ? (
    <PanelProfesor
      alumnoId={alumnoId}
      registro={registro}
      cargarSesiones={cargarSesiones}
      nombreJuego={(id) => JUEGOS_POR_ID[id]?.nombre || id}
      etiquetaCategoria={etiquetaCategoria}
      onCerrar={() => setVerPanel(false)}
    />
  ) : null;

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
          <Rotulo color={C.verde}>El terreno</Rotulo>
          <h1 style={{ fontSize: TAM.titulo, fontWeight: 800, margin: "12px 0 10px" }}>
            ¿Con quién vamos a trabajar hoy?
          </h1>
          <p style={{ color: C.tenue, fontSize: TAM.cuerpo, lineHeight: 1.55, margin: "0 0 30px", maxWidth: "62ch" }}>
            Esto lo elige el maestro una sola vez y cambia la dificultad de los dos juegos.
            El corte es de representación, no de edad: si el alumno todavía necesita contar los
            cuadros con el dedo, va en el bloque de abajo aunque tenga diez.
          </p>

          <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {RANGOS.map((r) => (
              <TarjetaMenu key={r.id} acento={C.verde} onClick={() => setRangoId(r.id)} minHeight={190}>
                <div style={{ fontSize: 30, fontWeight: 800, marginBottom: 8 }}>{r.nombre}</div>
                <div style={{ color: C.tenue, fontSize: 16.5, lineHeight: 1.45, marginBottom: 16 }}>{r.detalle}</div>
                <ul style={{ margin: 0, paddingLeft: 18, color: C.apagado, fontSize: 15, lineHeight: 1.7 }}>
                  <li>Terrenos de {r.cercaPasto.lados[0]} a {r.cercaPasto.lados[1]} de lado</li>
                  <li>{r.cercaPasto.unidades ? "Medidos en metros y metros cuadrados" : "Contados en tramos y cuadros"}</li>
                  <li>Cercas de {Math.min(...r.mismaCerca.perimetros)} a {Math.max(...r.mismaCerca.perimetros)},
                    con {r.mismaCerca.formas} terrenos por reto</li>
                </ul>
              </TarjetaMenu>
            ))}
          </div>
        </div>
        {panelMaestro}
      </div>
    );
  }

  return (
    <div style={marco}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 12, padding: "12px 22px", borderBottom: `1px solid ${C.borde}`,
        position: "sticky", top: 0, background: C.fondo, zIndex: 5,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
          {juego && (
            <>
              <button
                type="button"
                onClick={() => setJuegoId(null)}
                style={{
                  background: "transparent", border: "none", color: C.tenue, cursor: "pointer",
                  fontFamily: "inherit", fontSize: 16, fontWeight: 700, padding: "8px 6px", minHeight: 44,
                }}
              >
                ←&nbsp;Juegos
              </button>
              <span style={{ color: ACENTO[juego.id], fontSize: 16, fontWeight: 800 }}>
                {juego.icono} {juego.nombre}
              </span>
            </>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button
            type="button"
            onClick={() => { setRangoId(null); setJuegoId(null); }}
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
        {!juego ? (
          <>
            <Rotulo color={C.verde}>Elige un juego</Rotulo>
            <p style={{ color: C.tenue, fontSize: TAM.cuerpo, margin: "10px 0 18px", maxWidth: "60ch", lineHeight: 1.5 }}>
              Están en el orden en que se enseñan: primero la vuelta al patio, que es el perímetro
              caminado; luego la cerca y el pasto, que separa las dos medidas; después la misma cerca,
              que enseña que el perímetro no manda sobre el área; y al final los patios que no son
              rectángulos.
            </p>
            <div style={{
              display: "grid", gap: 16,
              gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            }}>
              {juegosDisponibles.map((j) => (
                <TarjetaMenu key={j.id} acento={ACENTO[j.id]} onClick={() => setJuegoId(j.id)} minHeight={200}>
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
                </TarjetaMenu>
              ))}
            </div>
          </>
        ) : (
          <Juego
            key={`${juego.id}-${rangoId}`}
            rango={rango} registrar={registrar} finalizar={finalizar}
            onSalir={() => setJuegoId(null)}
          />
        )}
      </div>

      {panelMaestro}
    </div>
  );
}
