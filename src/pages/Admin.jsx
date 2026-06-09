// src/pages/Admin.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { listaPresentaciones, buscarPresentacion } from "../data/presentaciones/presentacionesIndex.js";
import { obtenerTema } from "../data/presentaciones/temas.jsx";

const C = {
  bg:      "#0e0f11",
  surface: "#13151a",
  card:    "#16181f",
  border:  "#252830",
  blue:    "#3b9eff",
  green:   "#34d399",
  yellow:  "#fbbf24",
  orange:  "#f97316",
  red:     "#f43f5e",
  purple:  "#a78bfa",
  text:    "#e8eaf0",
  muted:   "#5a6070",
  dim:     "#8a9ab8",
};

const font = "'DM Sans', sans-serif";

function pctColor(p) {
  if (p >= 80) return C.green;
  if (p >= 60) return C.yellow;
  if (p >= 40) return C.orange;
  return C.red;
}

function fmtDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("es-MX", {
    day: "2-digit", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}

// ── Stat card ─────────────────────────────────────────────────────────────────
function StatCard({ label, value, color, sub }) {
  return (
    <div style={{
      background: C.surface,
      border: `1px solid ${C.border}`,
      borderRadius: 14,
      padding: "20px 22px",
    }}>
      <div style={{
        color: color || C.text,
        fontWeight: 900,
        fontSize: 32,
        letterSpacing: "-1.5px",
        lineHeight: 1,
        fontFamily: font,
      }}>
        {value}
      </div>
      <div style={{
        color: C.muted,
        fontSize: 11,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: 1,
        marginTop: 8,
        fontFamily: font,
      }}>
        {label}
      </div>
      {sub && (
        <div style={{ color: C.dim, fontSize: 11, marginTop: 4, fontFamily: font }}>
          {sub}
        </div>
      )}
    </div>
  );
}

// ── Tab button ────────────────────────────────────────────────────────────────
function TabBtn({ active, onClick, children, badge }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "12px 20px",
        fontSize: 14,
        fontWeight: active ? 700 : 500,
        color: active ? C.text : C.muted,
        borderBottom: active ? `2px solid ${C.blue}` : "2px solid transparent",
        marginBottom: -1,
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontFamily: font,
        transition: "color .15s",
      }}
    >
      {children}
      {badge != null && (
        <span style={{
          background: active ? C.blue + "33" : C.border,
          color: active ? C.blue : C.dim,
          borderRadius: 99,
          padding: "1px 8px",
          fontSize: 11,
          fontWeight: 700,
        }}>
          {badge}
        </span>
      )}
    </button>
  );
}

// ── Tarjeta de presentación (compacta) ───────────────────────────────────────
function PresentacionCard({ id, titulo, materia, subtema }) {
  const tema = obtenerTema(materia);
  const pres = buscarPresentacion(id);
  const slides = pres?.slides || [];
  const nReglas = slides.filter((s) => ["regla","regla_rica","criterio_detalle","concepto","definicion"].includes(s.tipo)).length;
  const nEjerc  = slides.filter((s) => s.tipo === "ejercicio").length;

  return (
    <div style={{
      background: C.card,
      border: `1px solid ${C.border}`,
      borderLeft: `3px solid ${tema.acento}`,
      borderRadius: 10,
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "10px 14px",
      transition: "background .15s",
    }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "#1e2130"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = C.card; }}
    >
      {/* Título + subtema */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ color: C.text, fontWeight: 600, fontSize: 13, fontFamily: font, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {titulo}
        </div>
        {subtema && (
          <div style={{ color: tema.acento, fontSize: 11, fontFamily: font, marginTop: 2, opacity: 0.8 }}>
            {subtema}
          </div>
        )}
      </div>

      {/* Conteos */}
      <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
        {nReglas > 0 && (
          <span style={{ color: C.muted, fontSize: 11, fontFamily: font }}>
            {nReglas} secc.
          </span>
        )}
        {nEjerc > 0 && (
          <span style={{ color: C.muted, fontSize: 11, fontFamily: font }}>
            {nEjerc} ej.
          </span>
        )}
        {nReglas === 0 && nEjerc === 0 && (
          <span style={{ color: C.muted, fontSize: 11, fontFamily: font }}>
            {slides.length} slides
          </span>
        )}
      </div>

      {/* Botón */}
      <Link
        to={`/presentacion/${id}`}
        style={{
          flexShrink: 0,
          background: tema.acento + "22",
          color: tema.acento,
          border: `1px solid ${tema.acento}55`,
          borderRadius: 7,
          padding: "5px 12px",
          textDecoration: "none",
          fontSize: 12,
          fontWeight: 700,
          fontFamily: font,
          whiteSpace: "nowrap",
        }}
      >
        Abrir →
      </Link>
    </div>
  );
}

// ── Acordeón de materia ───────────────────────────────────────────────────────
function MateriaAccordion({ materia, presentaciones: items }) {
  const tema = obtenerTema(materia);
  const [open, setOpen] = useState(true);

  // Agrupar por subtema dentro de la materia
  const grupos = {};
  items.forEach((p) => {
    const key = p.subtema || "";
    if (!grupos[key]) grupos[key] = [];
    grupos[key].push(p);
  });
  const tieneSubtemas = Object.keys(grupos).some((k) => k !== "");

  return (
    <div style={{ borderRadius: 12, overflow: "hidden", border: `1px solid ${C.border}` }}>
      {/* Cabecera */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "12px 18px",
          background: C.surface,
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{ color: tema.acento, fontSize: 16, lineHeight: 1 }}>
          {open ? "▼" : "▶"}
        </span>
        <span style={{ color: C.text, fontWeight: 700, fontSize: 14, fontFamily: font, flex: 1 }}>
          {materia}
        </span>
        <span style={{
          background: tema.acentoSuave,
          color: tema.acento,
          borderRadius: 99,
          padding: "2px 10px",
          fontSize: 11,
          fontWeight: 700,
          fontFamily: font,
        }}>
          {items.length}
        </span>
      </button>

      {/* Contenido */}
      {open && (
        <div style={{ background: C.bg, padding: "12px 14px", display: "flex", flexDirection: "column", gap: 6 }}>
          {tieneSubtemas
            ? Object.entries(grupos).map(([sub, pres]) => (
                <div key={sub}>
                  {sub && (
                    <div style={{
                      color: C.muted,
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      fontFamily: font,
                      padding: "6px 4px 4px",
                    }}>
                      {sub}
                    </div>
                  )}
                  <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                    {pres.map((p) => (
                      <PresentacionCard key={p.id} {...p} />
                    ))}
                  </div>
                </div>
              ))
            : items.map((p) => <PresentacionCard key={p.id} {...p} />)
          }
        </div>
      )}
    </div>
  );
}

// ── Resultados de una presentación ───────────────────────────────────────────
// Tabla de una sesión: alumnos (filas) × preguntas (columnas) con ✓/✗.
function DesgloseSesion({ sesion }) {
  const th = (align) => ({
    color: C.dim, fontWeight: 600, textAlign: align,
    padding: "4px 8px", fontSize: 10,
    textTransform: "uppercase", letterSpacing: 1, whiteSpace: "nowrap",
  });
  return (
    <div style={{ marginTop: 14 }}>
      <div style={{ color: C.dim, fontSize: 11, fontFamily: font, marginBottom: 6 }}>
        Sesión <strong style={{ color: C.purple }}>{sesion.codigo}</strong> · {fmtDate(sesion.created_at)} · {sesion.rows.length} alumno{sesion.rows.length === 1 ? "" : "s"}
      </div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", fontSize: 12, fontFamily: font }}>
          <thead>
            <tr>
              <th style={th("left")}>Alumno</th>
              {sesion.cols.map((c) => (
                <th key={c.sid} title={c.pregunta} style={{ ...th("center"), minWidth: 30, cursor: "help" }}>
                  P{c.n}
                </th>
              ))}
              <th style={th("center")}>Aciertos</th>
            </tr>
          </thead>
          <tbody>
            {sesion.rows.map((r) => {
              const pct = r.respondidas ? Math.round((r.aciertos / r.respondidas) * 100) : 0;
              return (
                <tr key={r.uid} style={{ borderTop: `1px solid ${C.border}` }}>
                  <td style={{ padding: "6px 8px", color: C.text, whiteSpace: "nowrap" }}>{r.nombre}</td>
                  {sesion.cols.map((c) => {
                    const v = r.cells[c.sid];
                    const col = v === "ok" ? C.green : v === "bad" ? C.red : C.muted;
                    const g = v === "ok" ? "✓" : v === "bad" ? "✗" : "·";
                    return (
                      <td key={c.sid} style={{ padding: "6px 6px", textAlign: "center", color: col, fontWeight: 700 }}>
                        {g}
                      </td>
                    );
                  })}
                  <td style={{ padding: "6px 8px", textAlign: "center", color: pctColor(pct), fontWeight: 700, whiteSpace: "nowrap" }}>
                    {r.aciertos}/{r.respondidas}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Carga (bajo demanda) el detalle por pregunta a partir de respuestas_presentacion.
function DesglosePresentacion({ presentacion, profiles }) {
  const [estado, setEstado] = useState("idle"); // idle | cargando | listo | error
  const [sesiones, setSesiones] = useState([]);

  async function cargar() {
    setEstado("cargando");
    const fullPres = buscarPresentacion(presentacion.id);
    const ejercicios = (fullPres?.slides || []).filter((s) => s.tipo === "ejercicio");
    const numEj = new Map(ejercicios.map((e, i) => [String(e.id), i + 1]));
    const correctaEj = new Map(ejercicios.map((e) => [String(e.id), e.correcta]));
    const preguntaEj = new Map(ejercicios.map((e) => [String(e.id), e.pregunta]));

    const { data: ses, error: e1 } = await supabase
      .from("sesiones_presentacion")
      .select("id, codigo, created_at")
      .eq("presentacion_id", presentacion.id)
      .order("created_at", { ascending: false });
    if (e1) { console.error("[Admin] sesiones:", e1); setEstado("error"); return; }

    const ids = (ses || []).map((s) => s.id);
    if (ids.length === 0) { setSesiones([]); setEstado("listo"); return; }

    const { data: resp, error: e2 } = await supabase
      .from("respuestas_presentacion")
      .select("sesion_id, slide_id, opcion_elegida, user_id")
      .in("sesion_id", ids);
    if (e2) { console.error("[Admin] respuestas:", e2); setEstado("error"); return; }

    const bySes = {};
    (resp || []).forEach((r) => { (bySes[r.sesion_id] ||= []).push(r); });

    const armadas = (ses || []).map((s) => {
      const rs = bySes[s.id] || [];
      if (rs.length === 0) return null;

      const slidesAnswered = [...new Set(rs.map((r) => String(r.slide_id)))]
        .filter((sid) => numEj.has(sid))
        .sort((a, b) => numEj.get(a) - numEj.get(b));
      if (slidesAnswered.length === 0) return null;

      const byUser = {};
      rs.forEach((r) => {
        const sid = String(r.slide_id);
        if (!numEj.has(sid)) return;
        (byUser[r.user_id] ||= {})[sid] = r.opcion_elegida;
      });

      const rows = Object.entries(byUser).map(([uid, answers]) => {
        let aciertos = 0, respondidas = 0;
        const cells = {};
        slidesAnswered.forEach((sid) => {
          if (answers[sid] === undefined) { cells[sid] = null; return; }
          respondidas++;
          const ok = answers[sid] === correctaEj.get(sid);
          if (ok) aciertos++;
          cells[sid] = ok ? "ok" : "bad";
        });
        const prof = profiles[uid] || {};
        return { uid, nombre: prof.nombre || prof.email || uid.slice(0, 8), cells, aciertos, respondidas };
      }).sort((a, b) => a.nombre.localeCompare(b.nombre));

      const cols = slidesAnswered.map((sid) => ({ sid, n: numEj.get(sid), pregunta: preguntaEj.get(sid) }));
      return { id: s.id, codigo: s.codigo, created_at: s.created_at, cols, rows };
    }).filter(Boolean);

    setSesiones(armadas);
    setEstado("listo");
  }

  const btn = {
    background: C.blue + "18", color: C.blue, border: `1px solid ${C.blue}44`,
    borderRadius: 6, padding: "6px 12px", fontSize: 12, cursor: "pointer",
    fontFamily: font, marginTop: 12,
  };

  if (estado === "idle") {
    return <button onClick={cargar} style={btn}>Ver desglose por pregunta ✦</button>;
  }
  if (estado === "cargando") {
    return <p style={{ color: C.muted, fontSize: 13, fontFamily: font, marginTop: 12 }}>Cargando desglose…</p>;
  }
  if (estado === "error") {
    return <p style={{ color: C.red, fontSize: 13, fontFamily: font, marginTop: 12 }}>No se pudo cargar el desglose (permisos o conexión).</p>;
  }
  if (sesiones.length === 0) {
    return <p style={{ color: C.muted, fontSize: 13, fontFamily: font, marginTop: 12 }}>No hay respuestas registradas por pregunta para esta presentación.</p>;
  }
  return (
    <div style={{ marginTop: 14, borderTop: `1px dashed ${C.border}`, paddingTop: 8 }}>
      <div style={{ color: C.dim, fontSize: 11, fontFamily: font, textTransform: "uppercase", letterSpacing: 1, marginBottom: 2 }}>
        Desglose por pregunta
      </div>
      {sesiones.map((s) => <DesgloseSesion key={s.id} sesion={s} />)}
    </div>
  );
}

function ResultadosPresentacion({ presentacion, resultados, profiles, onDelete, onUpdate }) {
  const [open, setOpen] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({ puntaje: 0, total: 0 });
  const propios = resultados
    .filter((r) => r.cuestionario_id === "presentacion-" + presentacion.id)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  const promedio = propios.length
    ? Math.round(propios.reduce((s, r) => s + Math.round((r.puntaje / r.total) * 100), 0) / propios.length)
    : 0;

  return (
    <div style={{ border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden", marginBottom: 10 }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          background: open ? C.card : C.surface,
          border: "none",
          cursor: "pointer",
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          textAlign: "left",
        }}
      >
        <div style={{
          width: 36, height: 36, borderRadius: 8,
          background: C.purple + "22",
          border: `1px solid ${C.purple}44`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18, flexShrink: 0,
        }}>
          📽
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: C.text, fontWeight: 700, fontSize: 14, fontFamily: font }}>
            {presentacion.titulo}
          </div>
          <div style={{ color: C.muted, fontSize: 11, marginTop: 2, fontFamily: font }}>
            {presentacion.materia}
          </div>
        </div>

        <div style={{ textAlign: "center", minWidth: 64 }}>
          <div style={{ color: C.dim, fontSize: 10, fontFamily: font, textTransform: "uppercase", letterSpacing: 1 }}>Sesiones</div>
          <div style={{ color: C.text, fontWeight: 700, fontSize: 17, fontFamily: font }}>{propios.length}</div>
        </div>
        {propios.length > 0 && (
          <div style={{ textAlign: "center", minWidth: 66 }}>
            <div style={{ color: C.dim, fontSize: 10, fontFamily: font, textTransform: "uppercase", letterSpacing: 1 }}>Promedio</div>
            <div style={{ color: pctColor(promedio), fontWeight: 700, fontSize: 17, fontFamily: font }}>{promedio}%</div>
          </div>
        )}
        <div style={{ color: C.muted, fontSize: 18, marginLeft: 4 }}>{open ? "▲" : "▼"}</div>
      </button>

      {open && (
        <div style={{ background: C.card, borderTop: `1px solid ${C.border}`, padding: "14px 18px" }}>
          {propios.length === 0 ? (
            <p style={{ color: C.muted, fontSize: 13, fontFamily: font }}>
              Ningún alumno ha completado esta presentación aún.
            </p>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, fontFamily: font }}>
              <thead>
                <tr>
                  {["Alumno", "Puntaje", "%", "Fecha", ""].map((h) => (
                    <th key={h} style={{
                      color: C.dim, fontWeight: 600, textAlign: "left",
                      padding: "4px 8px", fontSize: 11,
                      textTransform: "uppercase", letterSpacing: 1,
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {propios.map((r) => {
                  const profile = profiles[r.user_id] || {};
                  const nombre = profile.nombre || profile.email || r.user_id.slice(0, 8);
                  const editing = editingId === r.id;
                  const pct = editing
                    ? Math.round((editValues.puntaje / editValues.total) * 100)
                    : Math.round((r.puntaje / r.total) * 100);
                  const confirming = deletingId === r.id;
                  return (
                    <tr key={r.id} style={{ borderTop: `1px solid ${C.border}` }}>
                      <td style={{ padding: "8px 8px", color: C.text }}>{nombre}</td>
                      <td style={{ padding: "8px 8px", color: C.dim }}>
                        {editing ? (
                          <span style={{ display: "flex", gap: 4, alignItems: "center" }}>
                            <input type="number" min={0} value={editValues.puntaje} onChange={(e) => setEditValues((v) => ({ ...v, puntaje: Number(e.target.value) }))} style={{ width: 44, background: C.surface, border: `1px solid ${C.blue}66`, borderRadius: 4, color: C.text, padding: "2px 5px", fontSize: 12, fontFamily: font, textAlign: "center" }} />
                            <span style={{ color: C.muted }}>/</span>
                            <input type="number" min={1} value={editValues.total} onChange={(e) => setEditValues((v) => ({ ...v, total: Number(e.target.value) }))} style={{ width: 44, background: C.surface, border: `1px solid ${C.blue}66`, borderRadius: 4, color: C.text, padding: "2px 5px", fontSize: 12, fontFamily: font, textAlign: "center" }} />
                          </span>
                        ) : (
                          `${r.puntaje}/${r.total}`
                        )}
                      </td>
                      <td style={{ padding: "8px 8px" }}>
                        <span style={{
                          background: pctColor(pct) + "22",
                          color: pctColor(pct),
                          borderRadius: 6,
                          padding: "2px 10px",
                          fontWeight: 700,
                          fontSize: 12,
                        }}>
                          {pct}%
                        </span>
                      </td>
                      <td style={{ padding: "8px 8px", color: C.muted, fontSize: 12, whiteSpace: "nowrap" }}>
                        {fmtDate(r.created_at)}
                      </td>
                      <td style={{ padding: "8px 8px", textAlign: "right", whiteSpace: "nowrap" }}>
                        {editing ? (
                          <span style={{ display: "flex", gap: 6, justifyContent: "flex-end", alignItems: "center" }}>
                            <button onClick={() => { onUpdate(r.id, editValues); setEditingId(null); }} style={{ background: C.blue + "22", color: C.blue, border: `1px solid ${C.blue}44`, borderRadius: 5, padding: "2px 8px", fontSize: 11, cursor: "pointer", fontFamily: font }}>Guardar</button>
                            <button onClick={() => setEditingId(null)} style={{ background: "none", color: C.muted, border: `1px solid ${C.border}`, borderRadius: 5, padding: "2px 8px", fontSize: 11, cursor: "pointer", fontFamily: font }}>Cancelar</button>
                          </span>
                        ) : confirming ? (
                          <span style={{ display: "flex", gap: 6, justifyContent: "flex-end", alignItems: "center" }}>
                            <span style={{ color: C.muted, fontSize: 11 }}>¿Eliminar?</span>
                            <button onClick={() => { onDelete(r.id); setDeletingId(null); }} style={{ background: C.red + "22", color: C.red, border: `1px solid ${C.red}44`, borderRadius: 5, padding: "2px 8px", fontSize: 11, cursor: "pointer", fontFamily: font }}>Sí</button>
                            <button onClick={() => setDeletingId(null)} style={{ background: "none", color: C.muted, border: `1px solid ${C.border}`, borderRadius: 5, padding: "2px 8px", fontSize: 11, cursor: "pointer", fontFamily: font }}>No</button>
                          </span>
                        ) : (
                          <span style={{ display: "flex", gap: 4, justifyContent: "flex-end" }}>
                            <button onClick={() => { setEditingId(r.id); setEditValues({ puntaje: r.puntaje, total: r.total }); }} style={{ background: "none", color: C.dim, border: "none", cursor: "pointer", fontSize: 13, padding: "2px 4px", lineHeight: 1, borderRadius: 4 }} title="Editar puntaje">✎</button>
                            <button onClick={() => setDeletingId(r.id)} style={{ background: "none", color: C.muted, border: "none", cursor: "pointer", fontSize: 14, padding: "2px 4px", lineHeight: 1, borderRadius: 4 }} title="Eliminar registro">✕</button>
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
          <DesglosePresentacion presentacion={presentacion} profiles={profiles} />
        </div>
      )}
    </div>
  );
}

// ── Resumen por alumno (Cuestionarios) ───────────────────────────────────────
function ResumenAlumno({ nombre, nivel, resultados, onDelete, onUpdate }) {
  const [open, setOpen] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({ puntaje: 0, total: 0 });
  const intentos  = resultados.length;
  const promedio  = intentos
    ? Math.round(resultados.reduce((s, r) => s + Math.round((r.puntaje / r.total) * 100), 0) / intentos)
    : 0;
  const mejorPct  = intentos
    ? Math.max(...resultados.map((r) => Math.round((r.puntaje / r.total) * 100)))
    : 0;

  const nivelColor =
    nivel === "preparatoria" ? C.blue :
    nivel === "universidad"  ? C.purple : C.green;

  return (
    <div style={{ border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden", marginBottom: 10 }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          background: open ? C.card : C.surface,
          border: "none",
          cursor: "pointer",
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          textAlign: "left",
        }}
      >
        {/* Avatar inicial */}
        <div style={{
          width: 36, height: 36, borderRadius: "50%",
          background: nivelColor + "22",
          border: `1px solid ${nivelColor}44`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: nivelColor, fontWeight: 700, fontSize: 15, fontFamily: font,
          flexShrink: 0,
        }}>
          {(nombre || "?")[0].toUpperCase()}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: C.text, fontWeight: 700, fontSize: 14, fontFamily: font }}>
            {nombre || "Sin nombre"}
          </div>
          <span style={{
            display: "inline-block",
            background: nivelColor + "22",
            color: nivelColor,
            borderRadius: 99,
            padding: "2px 10px",
            fontSize: 11,
            fontWeight: 700,
            fontFamily: font,
            marginTop: 3,
          }}>
            {nivel}
          </span>
        </div>

        <div style={{ textAlign: "center", minWidth: 56 }}>
          <div style={{ color: C.dim, fontSize: 10, fontFamily: font, textTransform: "uppercase", letterSpacing: 1 }}>Intentos</div>
          <div style={{ color: C.text, fontWeight: 700, fontSize: 17, fontFamily: font }}>{intentos}</div>
        </div>
        <div style={{ textAlign: "center", minWidth: 66 }}>
          <div style={{ color: C.dim, fontSize: 10, fontFamily: font, textTransform: "uppercase", letterSpacing: 1 }}>Promedio</div>
          <div style={{ color: pctColor(promedio), fontWeight: 700, fontSize: 17, fontFamily: font }}>{promedio}%</div>
        </div>
        <div style={{ textAlign: "center", minWidth: 56 }}>
          <div style={{ color: C.dim, fontSize: 10, fontFamily: font, textTransform: "uppercase", letterSpacing: 1 }}>Mejor</div>
          <div style={{ color: pctColor(mejorPct), fontWeight: 700, fontSize: 17, fontFamily: font }}>{mejorPct}%</div>
        </div>
        <div style={{ color: C.muted, fontSize: 18, marginLeft: 4 }}>{open ? "▲" : "▼"}</div>
      </button>

      {open && (
        <div style={{ background: C.card, borderTop: `1px solid ${C.border}`, padding: "14px 18px" }}>
          {resultados.length === 0 ? (
            <p style={{ color: C.muted, fontSize: 13, fontFamily: font }}>Sin resultados registrados.</p>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, fontFamily: font }}>
              <thead>
                <tr>
                  {["Cuestionario", "Puntaje", "%", "Fecha", ""].map((h) => (
                    <th key={h} style={{
                      color: C.dim, fontWeight: 600, textAlign: "left",
                      padding: "4px 8px", fontSize: 11,
                      textTransform: "uppercase", letterSpacing: 1,
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {resultados.map((r) => {
                  const editing = editingId === r.id;
                  const pct = editing
                    ? Math.round((editValues.puntaje / editValues.total) * 100)
                    : Math.round((r.puntaje / r.total) * 100);
                  const confirming = deletingId === r.id;
                  return (
                    <tr key={r.id} style={{ borderTop: `1px solid ${C.border}` }}>
                      <td style={{ padding: "8px 8px", color: C.text, maxWidth: 260 }}>
                        {r.cuestionario_titulo || r.cuestionario_id}
                      </td>
                      <td style={{ padding: "8px 8px", color: C.dim }}>
                        {editing ? (
                          <span style={{ display: "flex", gap: 4, alignItems: "center" }}>
                            <input type="number" min={0} value={editValues.puntaje} onChange={(e) => setEditValues((v) => ({ ...v, puntaje: Number(e.target.value) }))} style={{ width: 44, background: C.surface, border: `1px solid ${C.blue}66`, borderRadius: 4, color: C.text, padding: "2px 5px", fontSize: 12, fontFamily: font, textAlign: "center" }} />
                            <span style={{ color: C.muted }}>/</span>
                            <input type="number" min={1} value={editValues.total} onChange={(e) => setEditValues((v) => ({ ...v, total: Number(e.target.value) }))} style={{ width: 44, background: C.surface, border: `1px solid ${C.blue}66`, borderRadius: 4, color: C.text, padding: "2px 5px", fontSize: 12, fontFamily: font, textAlign: "center" }} />
                          </span>
                        ) : (
                          `${r.puntaje}/${r.total}`
                        )}
                      </td>
                      <td style={{ padding: "8px 8px" }}>
                        <span style={{
                          background: pctColor(pct) + "22",
                          color: pctColor(pct),
                          borderRadius: 6,
                          padding: "2px 10px",
                          fontWeight: 700,
                          fontSize: 12,
                        }}>
                          {pct}%
                        </span>
                      </td>
                      <td style={{ padding: "8px 8px", color: C.muted, fontSize: 12, whiteSpace: "nowrap" }}>
                        {fmtDate(r.created_at)}
                      </td>
                      <td style={{ padding: "8px 8px", textAlign: "right", whiteSpace: "nowrap" }}>
                        {editing ? (
                          <span style={{ display: "flex", gap: 6, justifyContent: "flex-end", alignItems: "center" }}>
                            <button onClick={() => { onUpdate(r.id, editValues); setEditingId(null); }} style={{ background: C.blue + "22", color: C.blue, border: `1px solid ${C.blue}44`, borderRadius: 5, padding: "2px 8px", fontSize: 11, cursor: "pointer", fontFamily: font }}>Guardar</button>
                            <button onClick={() => setEditingId(null)} style={{ background: "none", color: C.muted, border: `1px solid ${C.border}`, borderRadius: 5, padding: "2px 8px", fontSize: 11, cursor: "pointer", fontFamily: font }}>Cancelar</button>
                          </span>
                        ) : confirming ? (
                          <span style={{ display: "flex", gap: 6, justifyContent: "flex-end", alignItems: "center" }}>
                            <span style={{ color: C.muted, fontSize: 11 }}>¿Eliminar?</span>
                            <button onClick={() => { onDelete(r.id); setDeletingId(null); }} style={{ background: C.red + "22", color: C.red, border: `1px solid ${C.red}44`, borderRadius: 5, padding: "2px 8px", fontSize: 11, cursor: "pointer", fontFamily: font }}>Sí</button>
                            <button onClick={() => setDeletingId(null)} style={{ background: "none", color: C.muted, border: `1px solid ${C.border}`, borderRadius: 5, padding: "2px 8px", fontSize: 11, cursor: "pointer", fontFamily: font }}>No</button>
                          </span>
                        ) : (
                          <span style={{ display: "flex", gap: 4, justifyContent: "flex-end" }}>
                            <button onClick={() => { setEditingId(r.id); setEditValues({ puntaje: r.puntaje, total: r.total }); }} style={{ background: "none", color: C.dim, border: "none", cursor: "pointer", fontSize: 13, padding: "2px 4px", lineHeight: 1, borderRadius: 4 }} title="Editar puntaje">✎</button>
                            <button onClick={() => setDeletingId(r.id)} style={{ background: "none", color: C.muted, border: "none", cursor: "pointer", fontSize: 14, padding: "2px 4px", lineHeight: 1, borderRadius: 4 }} title="Eliminar registro">✕</button>
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}

// ── Página principal ──────────────────────────────────────────────────────────
export default function Admin() {
  const [tab, setTab] = useState("cuestionarios");
  const [loading, setLoading] = useState(true);
  const [resultados, setResultados] = useState([]);
  const [profiles, setProfiles] = useState({});
  const [filtroNivel, setFiltroNivel] = useState("todos");
  const [busqueda, setBusqueda] = useState("");

  const presentaciones = listaPresentaciones();

  useEffect(() => {
    const load = async () => {
      const [{ data: results }, { data: profs }] = await Promise.all([
        supabase.rpc("get_all_resultados"),
        supabase.rpc("get_all_profiles"),
      ]);
      setResultados(results || []);
      const map = {};
      (profs || []).forEach((p) => { map[p.id] = p; });
      setProfiles(map);
      setLoading(false);
    };
    load();
  }, []);

  async function handleDelete(id) {
    const { error } = await supabase.from("resultados").delete().eq("id", id);
    if (error) { console.error("Error eliminando registro:", error); return; }
    setResultados((prev) => prev.filter((r) => r.id !== id));
  }

  async function handleUpdate(id, { puntaje, total }) {
    const { error } = await supabase.from("resultados").update({ puntaje, total }).eq("id", id);
    if (error) { console.error("Error actualizando registro:", error); return; }
    setResultados((prev) => prev.map((r) => r.id === id ? { ...r, puntaje, total } : r));
  }

  // Agrupar por alumno
  const byUser = {};
  resultados.forEach((r) => {
    if (!byUser[r.user_id]) byUser[r.user_id] = [];
    byUser[r.user_id].push(r);
  });

  const alumnos = Object.entries(byUser)
    .map(([uid, res]) => ({
      uid,
      profile: profiles[uid] || { nombre: "", nivel: "—" },
      resultados: res,
    }))
    .filter((a) => {
      if (filtroNivel !== "todos" && a.profile.nivel !== filtroNivel) return false;
      if (busqueda && !a.profile.nombre.toLowerCase().includes(busqueda.toLowerCase())) return false;
      return true;
    });

  const totalIntentos   = resultados.length;
  const promedioGlobal  = totalIntentos
    ? Math.round(resultados.reduce((s, r) => s + Math.round((r.puntaje / r.total) * 100), 0) / totalIntentos)
    : 0;

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{
          width: 32, height: 32, borderRadius: "50%",
          border: "2px solid rgba(59,158,255,.15)",
          borderTopColor: C.blue,
          animation: "spin .7s linear infinite",
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: font }}>
      {/* ── Navbar ─────────────────────────────────────────────────────────── */}
      <div style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(14,15,17,0.96)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${C.border}`,
        padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 56,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            background: C.blue + "22",
            border: `1px solid ${C.blue}44`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14,
          }}>
            ⚙
          </div>
          <span style={{ color: C.text, fontWeight: 700, fontSize: 15 }}>
            Panel de Administrador
          </span>
        </div>
        <Link to="/" style={{
          color: C.muted, fontSize: 13, textDecoration: "none",
          border: `1px solid ${C.border}`, borderRadius: 8,
          padding: "5px 14px", fontFamily: font,
          transition: "color .15s",
        }}
          onMouseEnter={(e) => { e.currentTarget.style.color = C.text; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = C.muted; }}
        >
          ← Inicio
        </Link>
      </div>

      <div style={{ maxWidth: 980, margin: "0 auto", padding: "32px 16px" }}>

        {/* ── Stats globales ──────────────────────────────────────────────── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 14,
          marginBottom: 32,
        }}>
          <StatCard
            label="Alumnos registrados"
            value={Object.keys(byUser).length}
          />
          <StatCard
            label="Intentos totales"
            value={totalIntentos}
            sub="en todos los cuestionarios"
          />
          <StatCard
            label="Promedio global"
            value={`${promedioGlobal}%`}
            color={promedioGlobal > 0 ? pctColor(promedioGlobal) : C.muted}
          />
          <StatCard
            label="Presentaciones"
            value={presentaciones.length}
            color={C.purple}
            sub="disponibles"
          />
        </div>

        {/* ── Tabs ───────────────────────────────────────────────────────── */}
        <div style={{
          borderBottom: `1px solid ${C.border}`,
          marginBottom: 28,
          display: "flex",
          gap: 0,
        }}>
          <TabBtn
            active={tab === "cuestionarios"}
            onClick={() => setTab("cuestionarios")}
            badge={Object.keys(byUser).length}
          >
            Cuestionarios
          </TabBtn>
          <TabBtn
            active={tab === "presentaciones"}
            onClick={() => setTab("presentaciones")}
            badge={presentaciones.length}
          >
            Presentaciones
          </TabBtn>
        </div>

        {/* ── Tab: Cuestionarios ──────────────────────────────────────────── */}
        {tab === "cuestionarios" && (
          <>
            {/* Filtros */}
            <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
              <div style={{ position: "relative", flex: "1 1 200px", maxWidth: 300 }}>
                <span style={{
                  position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)",
                  color: C.muted, fontSize: 14, pointerEvents: "none",
                }}>
                  ⌕
                </span>
                <input
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  placeholder="Buscar alumno…"
                  style={{
                    width: "100%",
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    borderRadius: 9,
                    padding: "9px 14px 9px 34px",
                    color: C.text,
                    fontSize: 13,
                    fontFamily: font,
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }}
                  onBlur={(e)  => { e.target.style.borderColor = C.border; }}
                />
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                {["todos", "preparatoria", "universidad"].map((n) => (
                  <button
                    key={n}
                    onClick={() => setFiltroNivel(n)}
                    style={{
                      border: filtroNivel === n ? "none" : `1px solid ${C.border}`,
                      borderRadius: 99,
                      padding: "8px 16px",
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: "pointer",
                      background: filtroNivel === n ? C.blue : C.surface,
                      color: filtroNivel === n ? "#fff" : C.muted,
                      fontFamily: font,
                      transition: "background .15s, color .15s",
                    }}
                  >
                    {n.charAt(0).toUpperCase() + n.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Lista de alumnos */}
            {alumnos.length === 0 ? (
              <div style={{
                textAlign: "center",
                padding: "80px 20px",
                color: C.muted,
                fontSize: 15,
                fontFamily: font,
              }}>
                <div style={{ fontSize: 40, marginBottom: 16, opacity: 0.4 }}>📋</div>
                {totalIntentos === 0
                  ? "Aún no hay resultados registrados."
                  : "No hay alumnos que coincidan con el filtro."}
              </div>
            ) : (
              alumnos.map((a) => (
                <ResumenAlumno
                  key={a.uid}
                  nombre={a.profile.nombre || a.profile.email || a.uid.slice(0, 8)}
                  nivel={a.profile.nivel}
                  resultados={a.resultados}
                  onDelete={handleDelete}
                  onUpdate={handleUpdate}
                />
              ))
            )}
          </>
        )}

        {/* ── Tab: Presentaciones ─────────────────────────────────────────── */}
        {tab === "presentaciones" && (
          <>
            {presentaciones.length === 0 ? (
              <div style={{
                textAlign: "center",
                padding: "80px 20px",
                color: C.muted,
                fontSize: 15,
                fontFamily: font,
              }}>
                <div style={{ fontSize: 40, marginBottom: 16, opacity: 0.4 }}>📽</div>
                No hay presentaciones registradas aún.
              </div>
            ) : (
              <>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {(() => {
                    const byMateria = {};
                    presentaciones.forEach((p) => {
                      if (!byMateria[p.materia]) byMateria[p.materia] = [];
                      byMateria[p.materia].push(p);
                    });
                    return Object.entries(byMateria).map(([materia, items]) => (
                      <MateriaAccordion key={materia} materia={materia} presentaciones={items} />
                    ));
                  })()}
                </div>

                {/* Historial de puntuaciones */}
                <div style={{ marginTop: 40 }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 18,
                  }}>
                    <div style={{ flex: 1, height: 1, background: C.border }} />
                    <span style={{
                      color: C.dim,
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      fontFamily: font,
                      whiteSpace: "nowrap",
                    }}>
                      Puntuaciones por presentación
                    </span>
                    <div style={{ flex: 1, height: 1, background: C.border }} />
                  </div>
                  {presentaciones.map((p) => (
                    <ResultadosPresentacion
                      key={p.id}
                      presentacion={p}
                      resultados={resultados}
                      profiles={profiles}
                      onDelete={handleDelete}
                      onUpdate={handleUpdate}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
