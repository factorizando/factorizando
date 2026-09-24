// Shell compartido de los tres talleres de Descomponer números: elige el rango
// de edad, (si aplica) el modo, monta el juego y da la barra con el panel del
// maestro y el silencio.
//
// Cada taller es una entrada independiente del catálogo, pero no repite esta
// armazón: cambian el acento, el juego y el nombre de la actividad.
import { useCallback, useMemo, useState } from "react";
import {
  MODOS, RANGOS, RANGOS_POR_ID, etiquetaCategoria, nombreActividad,
} from "../../../data/talleres/descomponer/index.js";
import { compararConAnterior, crearRegistro } from "../comun/registro.js";
import { alternarSilencio, estaSilenciado } from "../comun/sonido.js";
import { Rotulo, TarjetaMenu } from "../comun/ui.jsx";
import PanelProfesor from "../comun/PanelProfesor.jsx";
import { ACENTO, C, ETIQUETA, FUENTE, TAM } from "./estilo.js";
import JuegoSuma from "./JuegoSuma.jsx";
import JuegoProducto from "./JuegoProducto.jsx";
import JuegoDivision from "./JuegoDivision.jsx";

const JUEGOS = { suma: JuegoSuma, producto: JuegoProducto, division: JuegoDivision };

function detalleRango(op, r) {
  if (op === "suma") {
    return [
      `Completa hasta ${r.suma.completar.objetivos.join(", ")}`,
      r.suma.romper.dosCifras ? "Rompe con números de dos cifras" : "Rompe con números chicos",
    ];
  }
  if (op === "producto") {
    return [
      r.producto.dosCifras ? "Factores de dos cifras" : `Factores del 2 al ${r.producto.maxFactor}`,
      r.producto.dibujar ? "Con el arreglo dibujado" : "Solo con números",
    ];
  }
  return [
    `Reparte entre ${r.division.divisor[0]} y ${r.division.divisor[1]}`,
    r.division.dibujar ? "Con dibujos para contar" : "Solo con números",
  ];
}

export default function Shell({ operacion, tallerId, alumnoId, guardarSesion, cargarSesiones }) {
  const [rangoId, setRangoId] = useState(null);
  const [modoId, setModoId] = useState(null);
  const [verPanel, setVerPanel] = useState(false);
  const [silencio, setSilencio] = useState(estaSilenciado);

  const color = ACENTO[operacion];
  const et = ETIQUETA[operacion];
  const modos = MODOS[operacion] || [];
  const rango = rangoId ? RANGOS_POR_ID[rangoId] : null;

  const registro = useMemo(() => crearRegistro(tallerId), [tallerId]);

  const registrar = useCallback(
    (categoria, acerto) =>
      registro.anotarIntento(alumnoId, { rango: rangoId, juego: operacion, categoria, acerto }),
    [alumnoId, rangoId, operacion, registro]
  );

  const finalizar = useCallback(
    ({ aciertos, errores, total }) => {
      // A propósito optimista: si Supabase falla, la clase no se interrumpe.
      Promise.resolve(guardarSesion?.({
        actividad: nombreActividad(operacion, modoId || undefined),
        grupo: rangoId,
        aciertos,
        errores,
      })).catch((e) => console.warn(`[${tallerId}] no se guardó la sesión:`, e.message));

      const anterior = registro.cerrarPartida(alumnoId, {
        juego: operacion, modo: modoId || null, rango: rangoId, aciertos, errores, total,
      });
      return compararConAnterior(aciertos, total, anterior);
    },
    [alumnoId, rangoId, modoId, operacion, registro, guardarSesion, tallerId]
  );

  function elegirRango(id) {
    setRangoId(id);
    setModoId(modos.length === 0 ? "" : modos.length === 1 ? modos[0].id : null);
  }

  function volver() {
    if (modoId !== null && modos.length > 1) setModoId(null);
    else { setRangoId(null); setModoId(null); }
  }

  const marco = { height: "100%", overflowY: "auto", background: C.fondo, color: C.texto, fontFamily: FUENTE };

  const botonPanel = (
    <button
      type="button" onClick={() => setVerPanel(true)}
      title="Panel del maestro" aria-label="Panel del maestro"
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
      nombreJuego={() => et.nombre}
      etiquetaCategoria={etiquetaCategoria}
      onCerrar={() => setVerPanel(false)}
    />
  ) : null;

  // ── Elegir el rango de edad ─────────────────────────────────────────────
  if (!rango) {
    return (
      <div style={marco}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "44px 26px 70px", position: "relative" }}>
          <div style={{ position: "absolute", top: 20, right: 26 }}>{botonPanel}</div>
          <Rotulo color={color}>{et.icono} {et.nombre}</Rotulo>
          <h1 style={{ fontSize: TAM.titulo, fontWeight: 800, margin: "12px 0 10px" }}>
            ¿Con quién vamos a trabajar hoy?
          </h1>
          <p style={{ color: C.tenue, fontSize: TAM.cuerpo, lineHeight: 1.55, margin: "0 0 30px", maxWidth: "60ch" }}>
            Lo elige el maestro una sola vez y cambia la dificultad. El corte es de representación, no de
            edad: si un alumno todavía necesita dibujar y contar, va mejor en el bloque de abajo.
          </p>
          <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))" }}>
            {RANGOS.map((r) => (
              <TarjetaMenu key={r.id} acento={color} onClick={() => elegirRango(r.id)} minHeight={170}>
                <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>{r.nombre}</div>
                <div style={{ color: C.tenue, fontSize: 16, lineHeight: 1.45, marginBottom: 14 }}>{r.detalle}</div>
                <ul style={{ margin: 0, paddingLeft: 18, color: C.apagado, fontSize: 15, lineHeight: 1.7 }}>
                  {detalleRango(operacion, r).map((t) => <li key={t}>{t}</li>)}
                </ul>
              </TarjetaMenu>
            ))}
          </div>
        </div>
        {panelMaestro}
      </div>
    );
  }

  const modo = modoId ? modos.find((m) => m.id === modoId) : null;
  const Juego = JUEGOS[operacion];

  return (
    <div style={marco}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 12, padding: "12px 22px", borderBottom: `1px solid ${C.borde}`,
        position: "sticky", top: 0, background: C.fondo, zIndex: 5,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
          {modoId !== null && (
            <button
              type="button" onClick={volver}
              style={{
                background: "transparent", border: "none", color: C.tenue, cursor: "pointer",
                fontFamily: "inherit", fontSize: 16, fontWeight: 700, padding: "8px 6px", minHeight: 44,
              }}
            >
              ←&nbsp;{modos.length > 1 ? "Cómo jugar" : "Empezar"}
            </button>
          )}
          <span style={{ color, fontSize: 16, fontWeight: 800 }}>
            {et.icono} {et.nombre}{modo ? ` · ${modo.nombre}` : ""}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button
            type="button"
            onClick={() => { setRangoId(null); setModoId(null); }}
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
            type="button" onClick={() => setSilencio(alternarSilencio())}
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
        {modoId === null ? (
          <>
            <Rotulo color={color}>{et.nombre} · ¿cómo lo jugamos?</Rotulo>
            <div style={{
              display: "grid", gap: 14, marginTop: 16,
              gridTemplateColumns: "repeat(auto-fit, minmax(min(230px, 100%), 1fr))",
            }}>
              {modos.map((m) => (
                <TarjetaMenu key={m.id} acento={color} onClick={() => setModoId(m.id)} minHeight={120}>
                  <div style={{ fontSize: 21, fontWeight: 800, marginBottom: 6 }}>{m.nombre}</div>
                  <div style={{ color: C.tenue, fontSize: 15.5, lineHeight: 1.45 }}>{m.desc}</div>
                </TarjetaMenu>
              ))}
            </div>
          </>
        ) : (
          <Juego
            key={`${operacion}-${rangoId}-${modoId}`}
            rango={rango} modo={modoId || undefined}
            registrar={registrar} finalizar={finalizar}
            onSalir={() => { setRangoId(null); setModoId(null); }}
          />
        )}
      </div>

      {panelMaestro}
    </div>
  );
}
