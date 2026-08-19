// El Reino Plegado — componente raíz.
//
// Lo monta TallerRunner con { alumnoId, guardarSesion }.
//
// Un juego de mundos y niveles donde el escenario es un espacio topológico y
// los niveles se abren resolviendo acertijos. Se juega **por turnos en una sola
// tablet**: seis jugadores con su avatar, cada quien con su avance, guardados
// en el dispositivo. No hay cuentas, no hay red y las fotos no salen de aquí.
//
// Debajo del juego corre la medición: cada acertijo está etiquetado con su
// tema y su grado, se anota el primer intento y una escalera sube o baja de
// grado según cómo vaya. El niño no ve nada de eso; el maestro lo ve completo
// en el panel de la esquina.
import { useCallback, useMemo, useState } from "react";
import { MUNDOS_POR_ID } from "../../../data/talleres/reino-plegado/index.js";
import { alternarSilencio, estaSilenciado } from "../comun/sonido.js";
import { C, FUENTE, MUNDO_COLOR, COLORES_JUGADOR } from "./estilo.js";
import {
  abrirTodo, borrarJugador, borrarTodo, cargarTodo, exportarJSON, guardarJugador,
  guardarMedicion, marcarNivel,
} from "./lib/perfiles.js";
import { anotarPrimerIntento, estadoInicial } from "./lib/medicion.js";
import Jugadores, { Avatar } from "./Jugadores.jsx";
import MapaReino from "./MapaReino.jsx";
import Nivel from "./Nivel.jsx";
import PanelMaestro from "./PanelMaestro.jsx";

export default function ReinoPlegado({ alumnoId, guardarSesion }) {
  const [datos, setDatos] = useState(cargarTodo);
  const [jugadorSolo, setJugadorSolo] = useState(null);
  const [caravana, setCaravana] = useState(null);   // { ids: [...], turno }
  const [enJuego, setEnJuego] = useState(null);   // { mundo, nivel }
  const [verPanel, setVerPanel] = useState(false);
  const [silencio, setSilencio] = useState(estaSilenciado);

  const refrescar = () => setDatos(cargarTodo());
  // Quien trae la tablet en este momento.
  const jugadorId = caravana ? caravana.ids[caravana.turno] : jugadorSolo;
  const enCaravana = useMemo(
    () => (caravana ? caravana.ids.map((id) => datos.jugadores.find((j) => j.id === id)).filter(Boolean) : []),
    [caravana, datos.jugadores]
  );
  const jugador = useMemo(
    () => datos.jugadores.find((j) => j.id === jugadorId) || null,
    [datos.jugadores, jugadorId]
  );
  const colorJugador = jugador
    ? COLORES_JUGADOR[datos.jugadores.findIndex((j) => j.id === jugador.id)]
    : C.azul;

  // Los escalones en que va cada materia. De aquí sale el grado de los
  // acertijos: si va bien en cuentas y se atora en gramática, cada materia
  // avanza por su cuenta.
  const escalones = useMemo(() => {
    const m = datos.medicion[jugadorId] || {};
    return {
      matematicas: (m.matematicas || estadoInicial(jugador?.grado)).grado,
      espanol: (m.espanol || estadoInicial(jugador?.grado)).grado,
    };
  }, [datos.medicion, jugadorId, jugador]);

  // Un acertijo contestado por primera vez: es toda la medición del juego.
  const alResponder = useCallback((acertijo, acerto) => {
    const previa = cargarTodo().medicion[jugadorId] || {};
    const estado = previa[acertijo.materia] || estadoInicial(jugador?.grado);
    const nuevo = anotarPrimerIntento(estado, {
      tema: acertijo.tema, grado: acertijo.grado, acerto,
    });
    guardarMedicion(jugadorId, { ...previa, [acertijo.materia]: nuevo });
    setDatos(cargarTodo());
  }, [jugadorId, jugador]);

  function pasarTurno() {
    setCaravana((c) => (c ? { ...c, turno: (c.turno + 1) % c.ids.length } : c));
  }

  function terminarNivel({ aciertos, total }) {
    const { mundo, nivel } = enJuego;
    // En caravana el nivel queda hecho para todos los que viajaron en ella.
    const quienes = caravana ? caravana.ids : [jugadorId];
    quienes.forEach((id) => marcarNivel(id, mundo.id, nivel.id, { aciertos, total }));
    // El expediente del alumno recibe el marcador grueso; el detalle por
    // jugador se queda en la tablet. Sin alumno seleccionado no se escribe.
    Promise.resolve(guardarSesion?.({
      actividad: `El Reino Plegado · ${mundo.nombre} · ${nivel.nombre} `
        + (caravana ? `(caravana: ${enCaravana.map((j) => j.nombre).join(", ")})` : `(${jugador.nombre})`),
      grupo: `${escalones.matematicas}.º`,
      aciertos,
      errores: total - aciertos,
    })).catch((e) => console.warn("[reino] no se guardó la sesión:", e.message));
    setEnJuego(null);
    refrescar();
  }

  const marco = {
    height: "100%", overflowY: "auto", background: C.fondo, color: C.texto, fontFamily: FUENTE,
  };

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

  const panel = verPanel ? (
    <PanelMaestro
      jugadores={datos.jugadores}
      medicion={datos.medicion}
      onCerrar={() => setVerPanel(false)}
      onExportar={() => {
        const blob = new Blob([exportarJSON()], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "reino-plegado.json";
        a.click();
        URL.revokeObjectURL(url);
      }}
      onBorrarTodo={() => {
        borrarTodo();
        setJugadorSolo(null);
        setCaravana(null);
        setEnJuego(null);
        refrescar();
      }}
      todoAbierto={datos.todoAbierto}
      onAbrirTodo={(v) => { abrirTodo(v); refrescar(); }}
    />
  ) : null;

  // ── Elegir jugador ──────────────────────────────────────────────────────
  if (!jugador) {
    return (
      <div style={marco}>
        <div style={{ maxWidth: 940, margin: "0 auto", padding: "40px 26px 70px", position: "relative" }}>
          <div style={{ position: "absolute", top: 18, right: 26 }}>{botonPanel}</div>
          <Jugadores
            jugadores={datos.jugadores}
            onElegir={(j) => setJugadorSolo(j.id)}
            onCaravana={(ids) => setCaravana({ ids, turno: 0 })}
            onGuardar={(d) => { guardarJugador(d); refrescar(); }}
            onBorrar={(id) => { borrarJugador(id); refrescar(); }}
          />
        </div>
        {panel}
      </div>
    );
  }

  const color = enJuego ? MUNDO_COLOR[enJuego.mundo.id] : colorJugador;

  return (
    <div style={marco}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 12, padding: "10px 22px", borderBottom: `1px solid ${C.borde}`,
        position: "sticky", top: 0, background: C.fondo, zIndex: 5,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
          <button
            type="button"
            onClick={() => {
              if (enJuego) return setEnJuego(null);
              setCaravana(null);
              setJugadorSolo(null);
            }}
            style={{
              background: "transparent", border: "none", color: C.tenue, cursor: "pointer",
              fontFamily: "inherit", fontSize: 15, fontWeight: 700, padding: "8px 6px", minHeight: 44,
            }}
          >
            ←&nbsp;{enJuego ? "Mapa del reino" : caravana ? "Deshacer la caravana" : "Cambiar jugador"}
          </button>
          <Avatar jugador={jugador} color={colorJugador} tam={34} borde={2} />
          <span style={{ fontSize: 15, fontWeight: 800, color: C.texto }}>{jugador.nombre}</span>
          {caravana && (
            <span style={{ display: "flex", alignItems: "center", gap: 6, marginLeft: 4 }}>
              <span style={{ color: C.apagado, fontSize: 13, fontWeight: 700 }}>en caravana con</span>
              {enCaravana.filter((j) => j.id !== jugador.id).map((j) => (
                <span key={j.id} style={{ opacity: 0.6 }} title={j.nombre}>
                  <Avatar jugador={j} color={C.bordeVivo} tam={26} borde={2} />
                </span>
              ))}
            </span>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
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

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 26px 70px" }}>
        {!enJuego ? (
          <MapaReino
            jugador={jugador}
            jugadores={datos.jugadores}
            progresos={datos.progreso}
            caravana={enCaravana}
            todoAbierto={datos.todoAbierto}
            onAbrirNivel={(mundo, nivel) => setEnJuego({ mundo, nivel })}
          />
        ) : (
          <Nivel
            key={`${enJuego.mundo.id}:${enJuego.nivel.id}:${caravana ? "caravana" : jugador.id}`}
            mundo={MUNDOS_POR_ID[enJuego.mundo.id]}
            nivel={enJuego.nivel}
            jugador={jugador}
            color={color}
            grados={escalones}
            caravana={caravana ? { jugadores: enCaravana, turno: caravana.turno } : null}
            alResponder={alResponder}
            onTurnoCumplido={pasarTurno}
            onTerminar={terminarNivel}
            onSalir={() => setEnJuego(null)}
          />
        )}

        {!enJuego && !alumnoId && (
          <p style={{ color: C.apagado, fontSize: 13.5, marginTop: 26 }}>
            <strong style={{ letterSpacing: ".1em", textTransform: "uppercase" }}>Modo libre</strong>
            {" "}· se entró sin elegir alumno, así que nada de esto se guarda en el expediente.
            El avance de los jugadores sí queda en esta tablet.
          </p>
        )}
      </div>

      {panel}
    </div>
  );
}
