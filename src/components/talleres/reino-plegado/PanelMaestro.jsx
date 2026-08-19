// Panel del maestro. Ícono discreto en la esquina, porque esto se proyecta
// frente a los niños y no es para ellos.
//
// Lo único que importa aquí es la primera columna: **en qué grado va cada
// jugador**, sacada de sus primeros intentos y no de cuántos niveles terminó.
// Terminar niveles solo dice que insistió; la estimación dice qué domina.
import { useState } from "react";
import { etiquetaTema } from "../../../data/talleres/temas.js";
import { Boton, Panel, Rotulo } from "../comun/ui.jsx";
import { C, COLORES_JUGADOR, FUENTE } from "./estilo.js";
import { estimacion, temasFlojos } from "./lib/medicion.js";
import { Avatar } from "./Jugadores.jsx";

const MATERIA = { matematicas: "Matemáticas", espanol: "Español" };

function Estimacion({ estado }) {
  const { grado, detalle, escalon } = estimacion(estado || {});
  if (!detalle?.length) {
    return <span style={{ color: C.apagado, fontSize: 14 }}>Sin datos todavía</span>;
  }
  return (
    <div>
      <div style={{ fontSize: 17, fontWeight: 800, color: grado ? C.verde : C.tenue }}>
        {grado ? `Domina ${grado}.º` : "Aún sin estimación"}
        <span style={{ color: C.apagado, fontWeight: 600, fontSize: 13.5 }}> · va en {escalon}.º</span>
      </div>
      <div style={{ display: "flex", gap: 10, marginTop: 6, flexWrap: "wrap" }}>
        {detalle.map((d) => (
          <span key={d.grado} style={{
            fontSize: 13, fontWeight: 700, color: d.tasa >= 0.75 ? C.verde : d.tasa >= 0.5 ? C.amarillo : C.rojo,
            fontVariantNumeric: "tabular-nums",
          }}>
            {d.grado}.º {d.aciertos}/{d.intentos}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function PanelMaestro({
  jugadores, medicion, todoAbierto, onAbrirTodo, onExportar, onBorrarTodo, onCerrar,
}) {
  const [confirmando, setConfirmando] = useState(false);

  return (
    <div style={{
      position: "fixed", inset: 0, background: C.fondo, zIndex: 50,
      overflowY: "auto", fontFamily: FUENTE,
    }}>
      <div style={{ maxWidth: 940, margin: "0 auto", padding: "28px 26px 70px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, marginBottom: 26 }}>
          <div>
            <h2 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: C.texto }}>Panel del maestro</h2>
            <p style={{ color: C.tenue, fontSize: 15, margin: "6px 0 0", maxWidth: "70ch", lineHeight: 1.5 }}>
              La estimación sale de los <strong>primeros intentos</strong> de cada acertijo: los reintentos
              abren la puerta pero no cuentan. «Domina 4.º» quiere decir que acierta al menos tres de cada
              cuatro reactivos de ese grado.
            </p>
          </div>
          <Boton variante="neutro" onClick={onCerrar}>Cerrar</Boton>
        </div>

        {jugadores.length === 0 && (
          <p style={{ color: C.apagado, fontSize: 15 }}>Todavía no hay jugadores en esta tablet.</p>
        )}

        <div style={{ display: "grid", gap: 14 }}>
          {jugadores.map((j, i) => {
            const m = medicion[j.id] || {};
            const flojos = ["matematicas", "espanol"]
              .flatMap((mat) => temasFlojos(m[mat]).map((t) => ({ ...t, materia: mat })))
              .sort((a, b) => b.errores - a.errores)
              .slice(0, 4);

            return (
              <div key={j.id} style={{
                background: C.panel, border: `1px solid ${C.borde}`, borderRadius: 14, padding: "16px 18px",
              }}>
                <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                  <Avatar jugador={j} color={COLORES_JUGADOR[i]} tam={52} borde={2} />
                  <div style={{ minWidth: 130 }}>
                    <div style={{ fontSize: 19, fontWeight: 800, color: C.texto }}>{j.nombre}</div>
                    <div style={{ fontSize: 13, color: C.apagado }}>declarado: {j.grado}.º</div>
                  </div>
                  {["matematicas", "espanol"].map((mat) => (
                    <div key={mat} style={{ minWidth: 210 }}>
                      <Rotulo>{MATERIA[mat]}</Rotulo>
                      <div style={{ marginTop: 4 }}><Estimacion estado={m[mat]} /></div>
                    </div>
                  ))}
                </div>

                {flojos.length > 0 && (
                  <div style={{ marginTop: 14, borderTop: `1px solid ${C.borde}`, paddingTop: 12 }}>
                    <Rotulo>Lo que más se le atora</Rotulo>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
                      {flojos.map((t) => (
                        <span key={t.tema} style={{
                          background: C.alto, border: `1px solid ${C.borde}`, borderRadius: 999,
                          padding: "6px 12px", fontSize: 13.5, color: C.tenue,
                        }}>
                          {etiquetaTema(t.tema)} · {t.errores} de {t.intentos}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <Panel estilo={{ marginTop: 26, display: "grid", gap: 14 }}>
          <label style={{
            display: "flex", alignItems: "center", gap: 12, cursor: "pointer",
            color: C.texto, fontSize: 15.5, fontWeight: 700,
          }}>
            <input
              type="checkbox"
              checked={!!todoAbierto}
              onChange={(e) => onAbrirTodo(e.target.checked)}
              style={{ width: 22, height: 22, accentColor: C.azul, cursor: "pointer" }}
            />
            Abrir todos los mundos
            <span style={{ color: C.apagado, fontWeight: 500, fontSize: 14 }}>
              · normalmente cada mundo se abre al llevar la mitad del anterior
            </span>
          </label>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <Boton variante="neutro" tamano="chico" onClick={onExportar}>Exportar avance a JSON</Boton>
          {!confirmando ? (
            <Boton variante="fantasma" tamano="chico" onClick={() => setConfirmando(true)}>
              Borrar jugadores y avance de esta tablet
            </Boton>
          ) : (
            <>
              <span style={{ color: C.amarillo, fontSize: 15, fontWeight: 700 }}>
                Se borran los seis jugadores, sus fotos y todo su avance. No se puede deshacer.
              </span>
              <Boton variante="neutro" tamano="chico" onClick={() => setConfirmando(false)}>Cancelar</Boton>
              <Boton tamano="chico" color={C.rojo} onClick={() => { onBorrarTodo(); setConfirmando(false); }}>
                Sí, borrar
              </Boton>
            </>
          )}
          </div>
        </Panel>
      </div>
    </div>
  );
}
