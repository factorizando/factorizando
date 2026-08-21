// Los Cinco Sólidos — componente raíz.
//
// Lo monta TallerRunner con { alumnoId, guardarSesion, cargarSesiones }.
//
// Tres salas: la galería, el dual y el reto. A diferencia de los otros
// talleres, las dos primeras **no son un juego**: no puntúan, no se ganan y no
// escriben nada. Son una vitrina para proyectar y hablar encima. Lo único que
// se registra es el reto, y por eso tampoco hay pantalla de elegir el bloque de
// edad: no cambia nada de lo que se ve.
//
// three.js (~700 KB) cuelga de las tres salas, así que entra por `lazy`: el
// menú de arriba abre al instante y la descarga empieza cuando alguien elige.
import { Suspense, lazy, useCallback, useState } from "react";
import { GRUPO, SALAS, SALAS_POR_ID, etiquetaCategoria } from "../../../data/talleres/solidos-platonicos/index.js";
import { alternarSilencio, estaSilenciado } from "../comun/sonido.js";
import { anotarIntento, cerrarPartida, compararConAnterior, registro } from "./lib/registro.js";
import { ACENTO, C, FUENTE, TAM } from "./estilo.js";
import { Rotulo, TarjetaMenu } from "../comun/ui.jsx";
import PanelProfesor from "../comun/PanelProfesor.jsx";

const Galeria = lazy(() => import("./Galeria.jsx"));
const Dualidad = lazy(() => import("./Dualidad.jsx"));
const JuegoRetos = lazy(() => import("./JuegoRetos.jsx"));

// Nombre con el que la partida entra al expediente del alumno.
const ACTIVIDAD = {
  reto: "Los Cinco Sólidos · caras, vértices, dual y Euler",
};

function Esperando() {
  return (
    <div style={{ display: "grid", placeItems: "center", height: 380, color: C.apagado, fontSize: 16 }}>
      Preparando la sala…
    </div>
  );
}

export default function SolidosPlatonicos({ alumnoId, guardarSesion, cargarSesiones }) {
  const [salaId, setSalaId] = useState(null);
  const [solidoId, setSolidoId] = useState("hexaedro");
  const [verPanel, setVerPanel] = useState(false);
  const [silencio, setSilencio] = useState(estaSilenciado);

  const sala = salaId ? SALAS_POR_ID[salaId] : null;

  const registrar = useCallback(
    (categoria, acerto) => anotarIntento(alumnoId, { rango: GRUPO, juego: "reto", categoria, acerto }),
    [alumnoId]
  );

  const finalizar = useCallback(
    ({ juego, aciertos, errores, total }) => {
      // A propósito optimista: si Supabase falla, la clase no se interrumpe.
      Promise.resolve(guardarSesion?.({
        actividad: ACTIVIDAD[juego] || juego, grupo: GRUPO, aciertos, errores,
      })).catch((e) => console.warn("[solidos-platonicos] no se guardó la sesión:", e.message));

      const anterior = cerrarPartida(alumnoId, { juego, rango: GRUPO, aciertos, errores, total });
      return compararConAnterior(aciertos, total, anterior);
    },
    [alumnoId, guardarSesion]
  );

  const irAlDual = useCallback((id) => { setSolidoId(id); setSalaId("dualidad"); }, []);

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

  const panelMaestro = verPanel ? (
    <PanelProfesor
      alumnoId={alumnoId}
      registro={registro}
      cargarSesiones={cargarSesiones}
      nombreJuego={(id) => SALAS_POR_ID[id]?.nombre || "El Reto"}
      etiquetaCategoria={etiquetaCategoria}
      onCerrar={() => setVerPanel(false)}
    />
  ) : null;

  // ── El vestíbulo ──────────────────────────────────────────────────────────
  if (!sala) {
    return (
      <div style={marco}>
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "44px 26px 70px", position: "relative" }}>
          <div style={{ position: "absolute", top: 20, right: 26 }}>{botonPanel}</div>
          <Rotulo color={C.azul}>Los cinco sólidos</Rotulo>
          <h1 style={{ fontSize: TAM.titulo, fontWeight: 800, margin: "12px 0 10px" }}>
            Solo hay cinco cuerpos perfectos, y vienen en parejas
          </h1>
          <p style={{ color: C.tenue, fontSize: TAM.cuerpo, lineHeight: 1.55, margin: "0 0 30px", maxWidth: "64ch" }}>
            Cinco cuerpos se pueden armar con caras todas iguales y esquinas todas iguales: no hay un
            sexto y nunca lo habrá. Aquí se giran con el dedo, se abren para contarles las caras, y se
            ve aparecer al que cada uno lleva dentro.
          </p>

          <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {SALAS.map((s) => (
              <TarjetaMenu key={s.id} acento={ACENTO[s.id]} onClick={() => setSalaId(s.id)} minHeight={210}>
                <div style={{ fontSize: 46, lineHeight: 1, marginBottom: 14 }}>{s.icono}</div>
                <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 6 }}>{s.nombre}</div>
                <div style={{ color: C.tenue, fontSize: 16, lineHeight: 1.45, marginBottom: 14 }}>{s.resumen}</div>
                <div style={{
                  display: "inline-block", fontSize: 12.5, fontWeight: 800, letterSpacing: ".08em",
                  textTransform: "uppercase", color: ACENTO[s.id],
                  border: `1px solid ${ACENTO[s.id]}55`, borderRadius: 999, padding: "5px 12px",
                }}>
                  {s.etiqueta}
                </div>
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
          <button
            type="button"
            onClick={() => setSalaId(null)}
            style={{
              background: "transparent", border: "none", color: C.tenue, cursor: "pointer",
              fontFamily: "inherit", fontSize: 16, fontWeight: 700, padding: "8px 6px", minHeight: 44,
            }}
          >
            ←&nbsp;Salas
          </button>
          <span style={{ color: ACENTO[sala.id], fontSize: 16, fontWeight: 800 }}>
            {sala.icono} {sala.nombre}
          </span>
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

      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "22px 26px 70px" }}>
        <Suspense fallback={<Esperando />}>
          {sala.id === "galeria" && (
            <Galeria solidoId={solidoId} onElegir={setSolidoId} onVerDual={irAlDual} />
          )}
          {sala.id === "dualidad" && (
            <Dualidad solidoId={solidoId} onElegir={setSolidoId} />
          )}
          {sala.id === "reto" && (
            <JuegoRetos registrar={registrar} finalizar={finalizar} onSalir={() => setSalaId(null)} />
          )}
        </Suspense>
      </div>

      {panelMaestro}
    </div>
  );
}
