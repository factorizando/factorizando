// Panel del maestro. Se abre con el ícono discreto de la esquina.
//
// El ícono es pequeño y gris a propósito: esto se proyecta frente al niño y
// no debe invitarlo a entrar. Lo que hay adentro no es para él.
//
// De todo lo que se muestra, lo que de verdad sirve para planear la clase
// siguiente es la primera sección: **en qué tipo de ejercicio se equivoca**.
// Saber que sacó 6 de 10 no dice qué hacer el martes; saber que falla el
// residuo cuando la división es exacta, o que compara mal en cuanto los
// denominadores son distintos, sí.
import { useCallback, useEffect, useState } from "react";
import { JUEGOS_POR_ID, etiquetaCategoria } from "../../../data/talleres/pizzas-cajas-vasos/index.js";
import {
  borrarRegistro, categoriasFlojas, exportarJSON, partidas, resumenPorJuego,
} from "./lib/registro.js";
import { C, FUENTE } from "./estilo.js";
import { Boton, Panel, Rotulo } from "./ui.jsx";

const fmt = (ms) =>
  new Date(ms).toLocaleDateString("es-MX", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });

const nombreJuego = (id) => JUEGOS_POR_ID[id]?.nombre || id;

function Seccion({ titulo, nota, children }) {
  return (
    <section style={{ marginBottom: 34 }}>
      <Rotulo color={C.azul}>{titulo}</Rotulo>
      {nota && (
        <p style={{ color: C.apagado, fontSize: 14, margin: "6px 0 0", lineHeight: 1.5, maxWidth: "74ch" }}>
          {nota}
        </p>
      )}
      <div style={{ marginTop: 14 }}>{children}</div>
    </section>
  );
}

const Vacio = ({ children }) => (
  <p style={{ color: C.apagado, fontSize: 15, margin: 0 }}>{children}</p>
);

export default function PanelProfesor({ alumnoId, cargarSesiones, onCerrar }) {
  const [sesiones, setSesiones] = useState(null);
  const [error, setError] = useState(null);
  const [confirmando, setConfirmando] = useState(false);

  // Se lee del dispositivo una vez y se vuelve a leer al borrar; no hay nadie
  // más escribiendo mientras el panel está abierto.
  const leerLocal = useCallback(() => ({
    flojas: categoriasFlojas(alumnoId),
    historial: partidas(alumnoId),
    resumen: resumenPorJuego(alumnoId),
  }), [alumnoId]);
  const [{ flojas, historial, resumen }, setLocal] = useState(leerLocal);

  useEffect(() => {
    let vivo = true;
    if (!alumnoId || !cargarSesiones) { setSesiones([]); return; }
    Promise.resolve(cargarSesiones())
      .then((s) => vivo && setSesiones(s || []))
      .catch((e) => vivo && setError(e.message));
    return () => { vivo = false; };
  }, [alumnoId, cargarSesiones]);

  function exportar() {
    const blob = new Blob([exportarJSON(alumnoId)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `pizzas-cajas-vasos-${alumnoId || "libre"}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function borrar() {
    borrarRegistro(alumnoId);
    setConfirmando(false);
    setLocal(leerLocal());
  }

  return (
    <div style={{
      position: "fixed", inset: 0, background: C.fondo, zIndex: 50,
      overflowY: "auto", fontFamily: FUENTE,
    }}>
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "28px 26px 70px" }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-start",
          gap: 16, marginBottom: 30,
        }}>
          <div>
            <h2 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: C.texto }}>
              Panel del maestro
            </h2>
            <p style={{ color: C.tenue, fontSize: 15, margin: "6px 0 0" }}>
              {alumnoId ? "El detalle vive en esta tablet; el marcador, en el expediente." : "Práctica sin registrar"}
            </p>
          </div>
          <Boton variante="neutro" onClick={onCerrar}>Cerrar</Boton>
        </div>

        <Seccion
          titulo="En qué se equivoca más"
          nota="Ordenado por número de errores, con el bloque de edad en que ocurrieron. Es el dato que dice qué trabajar la próxima clase."
        >
          {flojas.length === 0 ? (
            <Vacio>Todavía no hay errores registrados en este dispositivo.</Vacio>
          ) : (
            <div style={{ display: "grid", gap: 8 }}>
              {flojas.slice(0, 12).map((c) => (
                <div key={`${c.rango}${c.categoria}`} style={{
                  display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap",
                  background: C.panel, border: `1px solid ${C.borde}`,
                  borderRadius: 10, padding: "11px 15px",
                }}>
                  <span style={{ fontSize: 16.5, fontWeight: 700, color: C.texto, flex: 1, minWidth: 220 }}>
                    {etiquetaCategoria(c.categoria)}
                    <span style={{ color: C.apagado, fontWeight: 600, fontSize: 13.5 }}> · {c.rango} años</span>
                  </span>
                  <div style={{ width: 140, height: 9, background: C.alto, borderRadius: 5, overflow: "hidden" }}>
                    <div style={{
                      width: `${Math.round(c.tasa * 100)}%`, height: "100%",
                      background: c.tasa > 0.5 ? C.rojo : C.amarillo,
                    }} />
                  </div>
                  <span style={{
                    color: C.tenue, fontSize: 14, fontVariantNumeric: "tabular-nums",
                    minWidth: 112, textAlign: "right",
                  }}>
                    {c.errores} {c.errores === 1 ? "error" : "errores"} de {c.intentos}
                  </span>
                </div>
              ))}
            </div>
          )}
        </Seccion>

        <Seccion titulo="Cómo va cada juego" nota="Acumulado por juego y bloque de edad, en este dispositivo.">
          {resumen.length === 0 ? (
            <Vacio>Todavía no se ha jugado ninguna partida completa.</Vacio>
          ) : (
            <div style={{ display: "grid", gap: 8 }}>
              {resumen.map((r) => {
                const tot = r.aciertos + r.errores;
                return (
                  <div key={`${r.juego}${r.rango}`} style={{
                    display: "flex", justifyContent: "space-between", gap: 14, flexWrap: "wrap",
                    background: C.panel, border: `1px solid ${C.borde}`, borderRadius: 10,
                    padding: "11px 15px", fontSize: 15.5,
                  }}>
                    <span style={{ color: C.texto, fontWeight: 700 }}>
                      {nombreJuego(r.juego)} <span style={{ color: C.apagado, fontWeight: 600 }}>· {r.rango} años</span>
                    </span>
                    <span style={{ color: C.tenue, fontVariantNumeric: "tabular-nums" }}>
                      {r.partidas} {r.partidas === 1 ? "partida" : "partidas"} · {r.aciertos} bien · {r.errores} mal
                      {tot > 0 && ` · ${Math.round((r.aciertos / tot) * 100)}%`}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </Seccion>

        <Seccion titulo="Historial de partidas" nota="Las últimas primero.">
          {historial.length === 0 ? (
            <Vacio>Sin partidas todavía.</Vacio>
          ) : (
            <div style={{ display: "grid", gap: 6 }}>
              {historial.slice(0, 25).map((p, k) => (
                <div key={k} style={{
                  display: "flex", justifyContent: "space-between", gap: 14, flexWrap: "wrap",
                  background: C.panel, border: `1px solid ${C.borde}`, borderRadius: 9,
                  padding: "9px 14px", fontSize: 14.5, color: C.tenue,
                }}>
                  <span style={{ color: C.texto }}>
                    {nombreJuego(p.juego)}{p.modo && p.modo !== "mezcla" ? ` · ${p.modo}` : ""}
                    <span style={{ color: C.apagado }}> · {p.rango} años</span>
                  </span>
                  <span style={{ fontVariantNumeric: "tabular-nums" }}>
                    {fmt(p.fecha)} · {p.aciertos} de {p.total} · {p.errores} {p.errores === 1 ? "error" : "errores"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </Seccion>

        <Seccion
          titulo="Sesiones en el expediente"
          nota="El marcador que se guarda en la ficha del alumno, visible desde cualquier dispositivo."
        >
          {!alumnoId ? (
            <Vacio>Esta práctica no se está registrando: se entró sin elegir alumno.</Vacio>
          ) : error ? (
            <Vacio>No se pudo leer el expediente ({error}).</Vacio>
          ) : sesiones === null ? (
            <Vacio>Cargando…</Vacio>
          ) : sesiones.length === 0 ? (
            <Vacio>Todavía no hay sesiones guardadas para este alumno en este taller.</Vacio>
          ) : (
            <div style={{ display: "grid", gap: 6 }}>
              {sesiones.map((s, k) => (
                <div key={k} style={{
                  display: "flex", justifyContent: "space-between", gap: 14, flexWrap: "wrap",
                  background: C.panel, border: `1px solid ${C.borde}`, borderRadius: 9,
                  padding: "9px 14px", fontSize: 14.5, color: C.tenue,
                }}>
                  <span style={{ color: C.texto }}>{s.actividad}</span>
                  <span style={{ fontVariantNumeric: "tabular-nums" }}>
                    {s.fecha} · {s.grupo} años · {s.aciertos} bien · {s.errores} mal
                  </span>
                </div>
              ))}
            </div>
          )}
        </Seccion>

        <Panel estilo={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <Boton variante="neutro" tamano="chico" onClick={exportar}>Exportar a JSON</Boton>
          {!confirmando ? (
            <Boton variante="fantasma" tamano="chico" onClick={() => setConfirmando(true)}>
              Reiniciar los datos de esta tablet
            </Boton>
          ) : (
            <>
              <span style={{ color: C.amarillo, fontSize: 15, fontWeight: 700 }}>
                Se borra el detalle de errores y el historial de este dispositivo. Lo del expediente no se toca.
              </span>
              <Boton variante="neutro" tamano="chico" onClick={() => setConfirmando(false)}>Cancelar</Boton>
              <Boton tamano="chico" color={C.rojo} onClick={borrar}>Sí, borrar</Boton>
            </>
          )}
        </Panel>
      </div>
    </div>
  );
}
