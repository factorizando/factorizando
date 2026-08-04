// src/pages/admin/AdminInscripciones.jsx
// Panel de administración de inscripciones: CRUD completo, gestionar estados.

import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import EstadoBadge from "../../components/admin/EstadoBadge.jsx";
import AdminHeader from "../../components/admin/AdminHeader.jsx";
import {
  aFechaISO, desdeFechaISO, sumarDias, sumarMeses,
  lunesDeLaSemana, domingoDeLaSemana, textoPeriodo,
} from "../../utils/fechas.js";

const font = "'DM Sans', sans-serif";
const C = {
  bg:      "#0e0f11",
  surface: "#13151a",
  card:    "#16181f",
  border:  "#252830",
  blue:    "#3b9eff",
  green:   "#34d399",
  yellow:  "#fbbf24",
  red:     "#f43f5e",
  purple:  "#a78bfa",
  text:    "#e8eaf0",
  muted:   "#5a6070",
  dim:     "#8a9ab8",
};

function fmtDate(iso) {
  if (!iso) return "—";
  const [y, m, d] = iso.split("T")[0].split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("es-MX", {
    day: "2-digit", month: "short", year: "numeric",
  });
}

function Spinner() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 60 }}>
      <div style={{
        width: 28, height: 28, borderRadius: "50%",
        border: `2px solid ${C.blue}22`, borderTopColor: C.blue,
        animation: "spin .7s linear infinite",
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

const inputStyle = {
  background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8,
  padding: "9px 12px", color: C.text, fontSize: 13, fontFamily: font,
  outline: "none", width: "100%", boxSizing: "border-box",
};

function Field({ label, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <label style={{ color: C.dim, fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: font }}>
        {label}
      </label>
      {children}
    </div>
  );
}

function Modal({ title, onClose, children }) {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "center",
      background: "rgba(0,0,0,.6)", backdropFilter: "blur(4px)",
    }} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={{
        background: C.card, border: `1px solid ${C.border}`, borderRadius: 14,
        width: "90%", maxWidth: 480, maxHeight: "85vh", overflow: "auto", padding: "24px 28px",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <h3 style={{ margin: 0, color: C.text, fontSize: 16, fontWeight: 700, fontFamily: font }}>{title}</h3>
          <button onClick={onClose} style={{ background: "none", border: "none", color: C.muted, fontSize: 20, cursor: "pointer", padding: 4 }}>×</button>
        </div>
        {children}
      </div>
    </div>
  );
}

function ConfirmModal({ title, message, onConfirm, onCancel }) {
  const [saving, setSaving] = useState(false);
  return (
    <Modal title={title} onClose={onCancel}>
      <p style={{ color: C.dim, fontSize: 13, fontFamily: font, margin: "0 0 18px" }}>{message}</p>
      <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
        <button onClick={onCancel} style={{
          background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8,
          padding: "8px 18px", color: C.muted, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: font,
        }}>Cancelar</button>
        <button onClick={async () => { setSaving(true); await onConfirm(); }} disabled={saving} style={{
          background: C.red, border: "none", borderRadius: 8,
          padding: "8px 22px", color: "#fff", fontSize: 13, fontWeight: 700,
          cursor: saving ? "default" : "pointer", opacity: saving ? 0.6 : 1, fontFamily: font,
        }}>{saving ? "Eliminando…" : "Eliminar"}</button>
      </div>
    </Modal>
  );
}

// ── Formulario de inscripción (crear o editar) ────────────────────────────────
function InscripcionForm({ alumnos, cursos, planes, initial, onSave, onCancel }) {
  const isEdit = !!initial;
  const [alumnoId, setAlumnoId] = useState(initial?.alumno_id || "");
  const [cursoId, setCursoId] = useState(initial?.curso_id || "");
  const [planId, setPlanId] = useState(initial?.plan_precio_id || "");
  const [grupoId, setGrupoId] = useState(initial?.grupo_id || "");
  const [estado, setEstado] = useState(initial?.estado || "activa");
  const [grupos, setGrupos] = useState([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  // Fecha en que empieza a tomar clases; no es lo mismo que el día del registro.
  // Al editar una inscripción anterior a esta columna se deja vacía a propósito:
  // rellenarla con hoy inventaría un dato que nadie capturó.
  const [fechaInicio, setFechaInicio] = useState(
    initial?.fecha_inicio_clases || (isEdit ? "" : aFechaISO(new Date()))
  );
  // Monto del primer cargo. Vacío = se usa el precio del plan tal cual.
  const [montoManual, setMontoManual] = useState("");

  useEffect(() => {
    if (!cursoId) { setGrupos([]); setGrupoId(""); return; }
    async function load() {
      const { data } = await supabase.from("grupos").select("*").eq("curso_id", cursoId).order("fecha_inicio");
      setGrupos(data || []);
      if (!isEdit) setGrupoId("");
    }
    load();
  }, [cursoId]);

  const planesFiltrados = cursoId ? planes.filter((p) => p.curso_id === cursoId && p.activo) : [];

  // ── Periodo facturado ──────────────────────────────────────────────────────
  // Solo el cobro semanal está anclado al calendario (lunes a domingo). Si el
  // alumno entra en cualquier día que no sea lunes, la semana va empezada y el
  // cargo es parcial: el monto lo decide el administrador, no una fórmula.
  const planSel = planesFiltrados.find((p) => p.id === planId) || null;
  const esSemanal = planSel?.tipo_cobro === "semanal";
  const periodoInicio = esSemanal ? aFechaISO(lunesDeLaSemana(desdeFechaISO(fechaInicio))) : null;
  const periodoFin = esSemanal ? aFechaISO(domingoDeLaSemana(desdeFechaISO(fechaInicio))) : null;
  const esParcial = esSemanal && fechaInicio !== periodoInicio;
  const montoEfectivo = montoManual !== "" ? Number(montoManual) : Number(planSel?.monto ?? 0);

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");
    const payload = {
      alumno_id: alumnoId,
      curso_id: cursoId,
      plan_precio_id: planId,
      grupo_id: grupoId || null,
    };
    if (fechaInicio) payload.fecha_inicio_clases = fechaInicio;
    if (isEdit) {
      payload.estado = estado;
    } else {
      payload._cargo = {
        monto: montoEfectivo,
        periodo_inicio: periodoInicio,
        periodo_fin: periodoFin,
        es_parcial: esParcial,
      };
    }
    const err = await onSave({ ...payload, id: initial?.id || undefined });
    if (err) setError(err);
    setSaving(false);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <Field label="Alumno">
        <select value={alumnoId} onChange={(e) => setAlumnoId(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }} required>
          <option value="">Seleccionar alumno…</option>
          {alumnos.map((a) => (
            <option key={a.id} value={a.id}>{a.nombre} {a.apellidos}</option>
          ))}
        </select>
      </Field>

      <Field label="Curso">
        <select value={cursoId} onChange={(e) => setCursoId(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }} required>
          <option value="">Seleccionar curso…</option>
          {cursos.filter((c) => c.activo).map((c) => (
            <option key={c.id} value={c.id}>{c.nombre} ({c.tipo})</option>
          ))}
        </select>
      </Field>

      {grupos.length > 0 && (
        <Field label="Grupo (opcional)">
          <select value={grupoId} onChange={(e) => setGrupoId(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
            <option value="">Sin grupo</option>
            {grupos.map((g) => (
              <option key={g.id} value={g.id}>{g.nombre}</option>
            ))}
          </select>
        </Field>
      )}

      <Field label="Plan de precio">
        <select value={planId} onChange={(e) => setPlanId(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }} required>
          <option value="">Seleccionar plan…</option>
          {planesFiltrados.map((p) => (
            <option key={p.id} value={p.id}>{p.tipo_cobro} — ${p.monto}</option>
          ))}
        </select>
      </Field>

      <Field label="Inicio de clases">
        <input
          type="date"
          value={fechaInicio}
          onChange={(e) => setFechaInicio(e.target.value)}
          style={inputStyle}
          required={!isEdit}
        />
      </Field>

      {/* Resumen del primer cobro: qué semana cubre y cuánto se cobra. */}
      {!isEdit && planSel && (
        <div style={{
          background: C.surface, border: `1px solid ${esParcial ? C.yellow + "55" : C.border}`,
          borderRadius: 10, padding: "12px 14px", display: "flex", flexDirection: "column", gap: 10,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span style={{ color: C.muted, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: .5, fontFamily: font }}>
              Primer cargo
            </span>
            {esSemanal && (
              <span style={{ color: C.dim, fontSize: 12.5, fontFamily: font }}>
                Semana {textoPeriodo(periodoInicio, periodoFin)}
              </span>
            )}
            {esParcial && (
              <span style={{
                background: C.yellow + "22", color: C.yellow, borderRadius: 5,
                padding: "1px 8px", fontSize: 10.5, fontWeight: 700, fontFamily: font,
              }}>PARCIAL</span>
            )}
          </div>

          {esParcial && (
            <p style={{ color: C.muted, fontSize: 12, lineHeight: 1.5, margin: 0, fontFamily: font }}>
              Entra con la semana empezada. El precio del plan es{" "}
              <span style={{ color: C.dim }}>${planSel.monto}</span>; ajusta el monto a lo acordado.
            </p>
          )}

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: C.muted, fontSize: 13, fontFamily: font }}>Monto</span>
            <input
              type="number" step="0.01" min="0"
              value={montoManual !== "" ? montoManual : planSel.monto}
              onChange={(e) => setMontoManual(e.target.value)}
              style={{ ...inputStyle, maxWidth: 140 }}
            />
            {montoManual !== "" && Number(montoManual) !== Number(planSel.monto) && (
              <button
                type="button"
                onClick={() => setMontoManual("")}
                style={{
                  background: "none", border: "none", color: C.blue,
                  fontSize: 12, cursor: "pointer", fontFamily: font, padding: 0,
                }}
              >
                usar precio del plan
              </button>
            )}
          </div>
        </div>
      )}

      {isEdit && (
        <Field label="Estado">
          <select value={estado} onChange={(e) => setEstado(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
            <option value="activa">Activa</option>
            <option value="pausada">Pausada</option>
            <option value="finalizada">Finalizada</option>
            <option value="cancelada">Cancelada</option>
          </select>
        </Field>
      )}

      <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 8 }}>
        {error && <div style={{ flex: 1, color: C.red, fontSize: 12, fontFamily: font, alignSelf: "center" }}>{error}</div>}
        <button type="button" onClick={onCancel} style={{
          background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8,
          padding: "8px 18px", color: C.muted, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: font,
        }}>Cancelar</button>
        <button type="submit" disabled={saving || !alumnoId || !cursoId || !planId} style={{
          background: C.blue, border: "none", borderRadius: 8,
          padding: "8px 22px", color: "#fff", fontSize: 13, fontWeight: 700,
          cursor: saving ? "default" : "pointer",
          opacity: saving || !alumnoId || !cursoId || !planId ? 0.6 : 1, fontFamily: font,
        }}>{saving ? "Guardando…" : isEdit ? "Guardar cambios" : "Inscribir"}</button>
      </div>
    </form>
  );
}

// ── Fila de inscripción ──────────────────────────────────────────────────────
function InscripcionRow({ insc, alumnos, cursos, planes, onEdit, onDelete }) {
  const alumno = alumnos.find((a) => a.id === insc.alumno_id);
  const curso = cursos.find((c) => c.id === insc.curso_id);
  const plan = planes.find((p) => p.id === insc.plan_precio_id);

  return (
    <div style={{
      background: C.card, border: `1px solid ${C.border}`, borderRadius: 10,
      padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: 8,
    }}>
      <div>
        <span style={{ color: C.text, fontWeight: 600, fontSize: 14, fontFamily: font }}>
          {alumno ? `${alumno.nombre} ${alumno.apellidos}` : insc.alumno_id.slice(0, 8)}
        </span>
        <span style={{ color: C.muted, fontSize: 13, fontFamily: font }}> → </span>
        <span style={{ color: C.text, fontSize: 13, fontFamily: font }}>
          {curso?.nombre || "Curso eliminado"}
        </span>
        {plan && (
          <span style={{ marginLeft: 8, color: C.dim, fontSize: 12, fontFamily: font }}>
            ({plan.tipo_cobro} · ${plan.monto})
          </span>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <EstadoBadge estado={insc.estado} />
        <span style={{ color: C.muted, fontSize: 12, fontFamily: font }}>{fmtDate(insc.fecha_inscripcion)}</span>
        <button onClick={() => onEdit(insc)} title="Editar" style={{
          background: "none", border: "none", color: C.blue, fontSize: 15, cursor: "pointer", padding: "2px 4px",
        }}>✎</button>
        <button onClick={() => onDelete(insc)} title="Eliminar" style={{
          background: "none", border: "none", color: C.red, fontSize: 15, cursor: "pointer", padding: "2px 4px",
        }}>✕</button>
      </div>
    </div>
  );
}

// ── Página principal ─────────────────────────────────────────────────────────
export default function AdminInscripciones({ embedded }) {
  const [inscripciones, setInscripciones] = useState([]);
  const [alumnos, setAlumnos] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [planes, setPlanes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editInsc, setEditInsc] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [filtroEstado, setFiltroEstado] = useState("todos");

  useEffect(() => { loadAll(); }, []);

  async function loadAll() {
    setLoading(true);
    const [i, a, c, p] = await Promise.all([
      supabase.from("inscripciones").select("*").order("fecha_inscripcion", { ascending: false }),
      supabase.from("alumnos").select("id, nombre, apellidos"),
      supabase.from("cursos").select("*"),
      supabase.from("planes_precio").select("*"),
    ]);
    setInscripciones(i.data || []);
    setAlumnos(a.data || []);
    setCursos(c.data || []);
    setPlanes(p.data || []);
    setLoading(false);
  }

  const filtradas = inscripciones.filter((insc) => {
    if (filtroEstado !== "todos" && insc.estado !== filtroEstado) return false;
    return true;
  });

  async function handleCreate(form) {
    const payload = { ...form };
    delete payload.id;
    // `_cargo` viaja junto al formulario pero no es columna de `inscripciones`.
    const cargo = payload._cargo || {};
    delete payload._cargo;
    const { data: inscripcion, error } = await supabase
      .from("inscripciones")
      .insert(payload)
      .select()
      .single();
    if (error) {
      console.error(error);
      return error.message || "Error al inscribir";
    }

    const plan = planes.find((p) => p.id === form.plan_precio_id);
    const curso = cursos.find((c) => c.id === form.curso_id);

    if (plan) {
      const inicio = form.fecha_inicio_clases
        ? desdeFechaISO(form.fecha_inicio_clases)
        : new Date();
      // El cobro semanal está anclado al calendario y se paga al entrar, así que
      // vence el mismo día en que empieza. "mensual" usa mes natural (no 30 días
      // fijos, que corren el cobro contra el calendario) y "único" vence a la
      // semana, como hasta ahora.
      const vencimiento =
        plan.tipo_cobro === "semanal" ? inicio
        : plan.tipo_cobro === "mensual" ? sumarMeses(inicio, 1)
        : sumarDias(inicio, 7);

      const { error: cargoErr } = await supabase.from("cargos").insert({
        alumno_id: form.alumno_id,
        inscripcion_id: inscripcion.id,
        concepto: `${curso?.nombre || "Curso"} — ${plan.tipo_cobro}`,
        monto: cargo.monto ?? plan.monto,
        fecha_vencimiento: aFechaISO(vencimiento),
        periodo_inicio: cargo.periodo_inicio ?? null,
        periodo_fin: cargo.periodo_fin ?? null,
        es_parcial: cargo.es_parcial ?? false,
        estado: "pendiente",
      });
      if (cargoErr) console.error(cargoErr);
    }

    setShowForm(false);
    await loadAll();
    return null;
  }

  async function handleEdit(form) {
    if (!form.id) return null;
    const { id, ...rest } = form;
    const { error } = await supabase.from("inscripciones").update(rest).eq("id", id);
    if (error) { console.error(error); return error.message || "Error al actualizar"; }
    setEditInsc(null);
    setShowForm(false);
    await loadAll();
    return null;
  }

  async function handleDelete() {
    if (!deleteTarget) return;
    const { error } = await supabase.from("inscripciones").delete().eq("id", deleteTarget.id);
    if (error) { console.error(error); }
    setDeleteTarget(null);
    await loadAll();
  }

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: font }}>
      {!embedded && <AdminHeader active="inscripciones" />}
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "32px 16px" }}>
      {/* Filtros y acción */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
        {/* wrap: las cinco pastillas suman 426px y a 375px "Cancelada" se salía
            67px de la pantalla. */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {["todos", "activa", "pausada", "finalizada", "cancelada"].map((e) => (
            <button
              key={e}
              onClick={() => setFiltroEstado(e)}
              style={{
                border: filtroEstado === e ? "none" : `1px solid ${C.border}`,
                borderRadius: 99, padding: "8px 16px", fontSize: 12, fontWeight: 700,
                cursor: "pointer", background: filtroEstado === e ? C.blue : C.surface,
                color: filtroEstado === e ? "#fff" : C.muted, fontFamily: font,
                transition: "background .15s, color .15s",
              }}
            >
              {e === "todos" ? "Todas" : e.charAt(0).toUpperCase() + e.slice(1)}
            </button>
          ))}
        </div>
        <div style={{ flex: 1 }} />
        <span style={{ color: C.muted, fontSize: 12, fontFamily: font }}>{filtradas.length} inscripciones</span>
        <button onClick={() => { setEditInsc(null); setShowForm(true); }} style={{
          background: C.blue, border: "none", borderRadius: 8,
          padding: "8px 18px", color: "#fff", fontSize: 12, fontWeight: 700,
          cursor: "pointer", fontFamily: font,
        }}>+ Nueva inscripción</button>
      </div>

      {/* Lista */}
      {loading ? <Spinner /> : filtradas.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 20px", color: C.muted, fontSize: 14, fontFamily: font }}>
          {inscripciones.length === 0 ? "Aún no hay inscripciones registradas." : "Ninguna inscripción coincide con el filtro."}
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {filtradas.map((insc) => (
            <InscripcionRow
              key={insc.id} insc={insc} alumnos={alumnos} cursos={cursos} planes={planes}
              onEdit={(i) => { setEditInsc(i); setShowForm(true); }}
              onDelete={(i) => setDeleteTarget(i)}
            />
          ))}
        </div>
      )}

      {/* Modal crear/editar */}
      {showForm && (
        <Modal title={editInsc ? "Editar inscripción" : "Nueva inscripción"} onClose={() => { setShowForm(false); setEditInsc(null); }}>
          <InscripcionForm
            alumnos={alumnos}
            cursos={cursos}
            planes={planes}
            initial={editInsc || null}
            onSave={editInsc ? handleEdit : handleCreate}
            onCancel={() => { setShowForm(false); setEditInsc(null); }}
          />
        </Modal>
      )}

      {/* Modal eliminar */}
      {deleteTarget && (
        <ConfirmModal
          title="Eliminar inscripción"
          message="¿Eliminar esta inscripción? Los cargos asociados no se eliminarán."
          onConfirm={handleDelete}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
      </div>
    </div>
  );
}
