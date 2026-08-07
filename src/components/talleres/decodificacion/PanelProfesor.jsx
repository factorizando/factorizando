// Panel del profesor. Se abre con el ícono discreto de la esquina.
//
// De todo lo que hay aquí, lo más valioso para el maestro es la lista de
// palabras atoradas: le dice exactamente qué trabajar en papel la próxima
// vez. Lo demás es contexto.
//
// Dos fuentes, distintas por diseño (ver lib/registro.js): las sesiones vienen
// del expediente en Supabase y el detalle fino de este dispositivo.
import { useEffect, useMemo, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LabelList, Cell,
} from "recharts";
import { BANCOS_POR_ID } from "../../../data/talleres/decodificacion/index.js";
import { cargarRegistro, palabrasAtoradas } from "./lib/registro.js";
import { C, FUENTE } from "./estilo.js";
import { Boton, Rotulo } from "./ui.jsx";

function Seccion({ titulo, nota, children }) {
  return (
    <section style={{ marginBottom: 34 }}>
      <Rotulo color={C.ambar}>{titulo}</Rotulo>
      {nota && (
        <p style={{ color: C.apagado, fontSize: 13.5, margin: "6px 0 0", lineHeight: 1.5, maxWidth: "72ch" }}>
          {nota}
        </p>
      )}
      <div style={{ marginTop: 14 }}>{children}</div>
    </section>
  );
}

function Vacio({ children }) {
  return <p style={{ color: C.apagado, fontSize: 15, margin: 0 }}>{children}</p>;
}

export default function PanelProfesor({ alumnoId, nombreAlumno, cargarSesiones, onCerrar }) {
  const [sesiones, setSesiones] = useState(null);
  const [error, setError] = useState(null);
  const registro = useMemo(() => cargarRegistro(alumnoId), [alumnoId]);
  const atoradas = useMemo(() => palabrasAtoradas(alumnoId), [alumnoId]);

  useEffect(() => {
    let vivo = true;
    if (!alumnoId || !cargarSesiones) { setSesiones([]); return; }
    // `cargarSesiones` viene del TallerRunner y lee `taller_sesiones`.
    Promise.resolve(cargarSesiones())
      .then((s) => vivo && setSesiones(s || []))
      .catch((e) => vivo && setError(e.message));
    return () => { vivo = false; };
  }, [alumnoId, cargarSesiones]);

  // Historial de lecturas, agrupado por texto. La clave guardada es
  // "<banco>:<texto>"; se resuelve al título para que sea legible.
  const lecturas = Object.entries(registro.lecturas).map(([clave, lista]) => {
    const [bancoId, textoId] = clave.split(":");
    const banco = BANCOS_POR_ID[bancoId];
    const texto = banco?.textos.find((t) => t.id === textoId);
    return { clave, titulo: texto?.titulo || textoId, tema: banco?.nombre || bancoId, lista };
  });

  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(6,8,10,.94)", zIndex: 50,
      overflowY: "auto", fontFamily: FUENTE,
    }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "28px 26px 70px" }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-start",
          gap: 16, marginBottom: 30,
        }}>
          <div>
            <h2 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: C.texto }}>
              Panel del profesor
            </h2>
            <p style={{ color: C.tenue, fontSize: 15, margin: "6px 0 0" }}>
              {nombreAlumno || "Práctica sin registrar"}
            </p>
          </div>
          <Boton variante="neutro" onClick={onCerrar}>Cerrar</Boton>
        </div>

        <Seccion
          titulo="Palabras que se le atoran"
          nota="Ordenadas por número de errores. Son las que conviene trabajar en papel antes de la próxima sesión."
        >
          {atoradas.length === 0 ? (
            <Vacio>Todavía no hay errores registrados en este dispositivo.</Vacio>
          ) : (
            <div style={{ display: "grid", gap: 8 }}>
              {atoradas.slice(0, 14).map((p) => (
                <div key={p.palabra} style={{
                  display: "flex", alignItems: "center", gap: 14,
                  background: C.panel, border: `1px solid ${C.borde}`,
                  borderRadius: 10, padding: "10px 14px",
                }}>
                  <span style={{ fontSize: 19, fontWeight: 700, color: C.texto, flex: 1 }}>
                    {p.palabra}
                  </span>
                  {/* Barra de proporción: cuánto de lo intentado salió mal */}
                  <div style={{ width: 150, height: 8, background: C.alto, borderRadius: 4, overflow: "hidden" }}>
                    <div style={{
                      width: `${Math.round(p.tasa * 100)}%`, height: "100%",
                      background: p.tasa > 0.5 ? C.rojo : C.ambar,
                    }} />
                  </div>
                  <span style={{
                    color: C.tenue, fontSize: 14, fontVariantNumeric: "tabular-nums",
                    minWidth: 108, textAlign: "right",
                  }}>
                    {p.errores} {p.errores === 1 ? "error" : "errores"} de {p.intentos}
                  </span>
                </div>
              ))}
            </div>
          )}
        </Seccion>

        <Seccion
          titulo="Lectura repetida"
          nota="Palabras por minuto en cada pasada cronometrada, por texto. Lo que importa es la pendiente, no el número."
        >
          {lecturas.length === 0 ? (
            <Vacio>Todavía no hay lecturas cronometradas.</Vacio>
          ) : (
            <div style={{ display: "grid", gap: 20 }}>
              {lecturas.map((l) => {
                const datos = l.lista.map((h, k) => ({
                  nombre: `${k + 1}ª`, ppm: h.ppm, reciente: k === l.lista.length - 1,
                }));
                return (
                  <div key={l.clave} style={{
                    background: C.panel, border: `1px solid ${C.borde}`, borderRadius: 12, padding: 16,
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                      <strong style={{ color: C.texto, fontSize: 17 }}>{l.titulo}</strong>
                      <span style={{ color: C.apagado, fontSize: 13.5 }}>
                        {l.tema} · {l.lista.length} {l.lista.length === 1 ? "lectura" : "lecturas"}
                      </span>
                    </div>
                    <div style={{ height: 170, marginTop: 12 }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={datos} margin={{ top: 22, right: 8, left: -20, bottom: 0 }}>
                          <CartesianGrid stroke={C.borde} vertical={false} />
                          <XAxis dataKey="nombre" stroke={C.apagado} tick={{ fill: C.tenue, fontSize: 13 }} tickLine={false} />
                          <YAxis stroke={C.apagado} tick={{ fill: C.apagado, fontSize: 12 }} tickLine={false} axisLine={false} />
                          <Bar dataKey="ppm" radius={[4, 4, 0, 0]} maxBarSize={64} isAnimationActive={false}>
                            {datos.map((d, k) => <Cell key={k} fill={d.reciente ? C.ambar : C.bordeVivo} />)}
                            <LabelList dataKey="ppm" position="top" fill={C.tenue} fontSize={13} fontWeight={700} />
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </Seccion>

        <Seccion
          titulo="Sesiones registradas"
          nota="Aciertos y errores por actividad, tomados del expediente del alumno."
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
              {sesiones.map((s, k) => {
                const tot = s.aciertos + s.errores;
                return (
                  <div key={k} style={{
                    display: "flex", justifyContent: "space-between", gap: 14, flexWrap: "wrap",
                    background: C.panel, border: `1px solid ${C.borde}`, borderRadius: 9,
                    padding: "9px 14px", fontSize: 14.5, color: C.tenue,
                  }}>
                    <span style={{ color: C.texto }}>{s.actividad}</span>
                    <span style={{ fontVariantNumeric: "tabular-nums" }}>
                      {s.fecha} · {s.aciertos} bien · {s.errores} mal
                      {tot > 0 && ` · ${Math.round((s.aciertos / tot) * 100)}%`}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </Seccion>
      </div>
    </div>
  );
}
