// src/pages/admin/AdminCursos.jsx
// Panel de administración de cursos: catálogo, grupos, planes de precio, tarifas de asesoría.

import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import AdminHeader from "../../components/admin/AdminHeader.jsx";

const font = "'DM Sans', sans-serif";
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

function fmtMoney(n) { return `$${Number(n).toLocaleString("es-MX", { minimumFractionDigits: 2 })}`; }

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
      <label style={{ color: C.dim, fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: font }}>{label}</label>
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
        width: "90%", maxWidth: 520, maxHeight: "85vh", overflow: "auto", padding: "24px 28px",
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

// ── Formulario curso ─────────────────────────────────────────────────────────
function CursoForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial || {
    nombre: "", descripcion: "", tipo: "curso", modalidad_fechas: "libre", activo: true,
  });
  const [saving, setSaving] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    await onSave({
      ...form,
      modalidad_fechas: form.tipo === "asesoria" ? null : form.modalidad_fechas,
    });
    setSaving(false);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <Field label="Nombre"><input value={form.nombre} onChange={set("nombre")} placeholder="Curso de Álgebra" style={inputStyle} required
        onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }}
        onBlur={(e)  => { e.target.style.borderColor = C.border; }} /></Field>
      <Field label="Descripción"><input value={form.descripcion} onChange={set("descripcion")} placeholder="(opcional)" style={inputStyle}
        onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }}
        onBlur={(e)  => { e.target.style.borderColor = C.border; }} /></Field>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <Field label="Tipo">
          <select value={form.tipo} onChange={set("tipo")} style={{ ...inputStyle, cursor: "pointer" }}>
            <option value="curso">Curso</option>
            <option value="asesoria">Asesoría</option>
          </select>
        </Field>
        {form.tipo !== "asesoria" && (
          <Field label="Modalidad de fechas">
            <select value={form.modalidad_fechas} onChange={set("modalidad_fechas")} style={{ ...inputStyle, cursor: "pointer" }}>
              <option value="libre">Libre (sin cohortes)</option>
              <option value="fija">Fija (con generaciones)</option>
            </select>
          </Field>
        )}
      </div>
      <Field label="Activo">
        <select value={form.activo ? "si" : "no"} onChange={(e) => setForm((f) => ({ ...f, activo: e.target.value === "si" }))} style={{ ...inputStyle, cursor: "pointer" }}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </Field>
      <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 8 }}>
        <button type="button" onClick={onCancel} style={{
          background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8,
          padding: "8px 18px", color: C.muted, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: font,
        }}>Cancelar</button>
        <button type="submit" disabled={saving} style={{
          background: C.blue, border: "none", borderRadius: 8,
          padding: "8px 22px", color: "#fff", fontSize: 13, fontWeight: 700,
          cursor: saving ? "default" : "pointer", opacity: saving ? 0.6 : 1, fontFamily: font,
        }}>{saving ? "Guardando…" : "Guardar"}</button>
      </div>
    </form>
  );
}

// ── Formulario grupo ─────────────────────────────────────────────────────────
function GrupoForm({ onSave, onCancel }) {
  const [form, setForm] = useState({ nombre: "", fecha_inicio: "", fecha_fin: "", cupo_max: 30 });
  const [saving, setSaving] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    await onSave({ ...form, cupo_max: Number(form.cupo_max) });
    setSaving(false);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Field label="Nombre del grupo"><input value={form.nombre} onChange={set("nombre")} placeholder="Generación Ago-Dic 2026" style={inputStyle} required
        onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }}
        onBlur={(e)  => { e.target.style.borderColor = C.border; }} /></Field>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <Field label="Fecha inicio"><input type="date" value={form.fecha_inicio} onChange={set("fecha_inicio")} style={inputStyle} required /></Field>
        <Field label="Fecha fin"><input type="date" value={form.fecha_fin} onChange={set("fecha_fin")} style={inputStyle} required /></Field>
      </div>
      <Field label="Cupo máximo"><input type="number" min="1" value={form.cupo_max} onChange={set("cupo_max")} style={inputStyle} required /></Field>
      <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 4 }}>
        <button type="button" onClick={onCancel} style={{
          background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8,
          padding: "6px 14px", color: C.muted, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: font,
        }}>Cancelar</button>
        <button type="submit" disabled={saving} style={{
          background: C.blue, border: "none", borderRadius: 8,
          padding: "6px 16px", color: "#fff", fontSize: 12, fontWeight: 700,
          cursor: saving ? "default" : "pointer", opacity: saving ? 0.6 : 1, fontFamily: font,
        }}>{saving ? "Guardando…" : "Guardar"}</button>
      </div>
    </form>
  );
}

// ── Formulario plan de precio ────────────────────────────────────────────────
function PlanForm({ onSave, onCancel }) {
  const [form, setForm] = useState({ tipo_cobro: "semanal", monto: "" });
  const [saving, setSaving] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    await onSave({ tipo_cobro: form.tipo_cobro, monto: Number(form.monto) });
    setSaving(false);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 12, alignItems: "flex-end", flexWrap: "wrap" }}>
      <div style={{ flex: "1 1 140px" }}>
        <Field label="Tipo">
          <select value={form.tipo_cobro} onChange={set("tipo_cobro")} style={{ ...inputStyle, cursor: "pointer" }}>
            <option value="semanal">Semanal</option>
            <option value="mensual">Mensual</option>
            <option value="unico">Único</option>
          </select>
        </Field>
      </div>
      <div style={{ flex: "1 1 120px" }}>
        <Field label="Monto">
          <input type="number" step="0.01" min="0" value={form.monto} onChange={set("monto")} style={inputStyle} required
            onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }}
            onBlur={(e)  => { e.target.style.borderColor = C.border; }} />
        </Field>
      </div>
      <div style={{ display: "flex", gap: 6, paddingBottom: 2 }}>
        <button type="button" onClick={onCancel} style={{
          background: C.surface, border: `1px solid ${C.border}`, borderRadius: 6,
          padding: "6px 12px", color: C.muted, fontSize: 12, cursor: "pointer", fontFamily: font,
        }}>Cancelar</button>
        <button type="submit" disabled={saving || !form.monto} style={{
          background: C.blue, border: "none", borderRadius: 6,
          padding: "6px 14px", color: "#fff", fontSize: 12, fontWeight: 700,
          cursor: saving ? "default" : "pointer", opacity: saving || !form.monto ? 0.6 : 1, fontFamily: font,
        }}>Agregar</button>
      </div>
    </form>
  );
}

// ── Formulario tarifa asesoría ───────────────────────────────────────────────
function TarifaForm({ onSave, onCancel }) {
  const [form, setForm] = useState({ duracion_bloque: "1h", tarifa_individual: "" });
  const [saving, setSaving] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    await onSave({ duracion_bloque: form.duracion_bloque, tarifa_individual: Number(form.tarifa_individual) });
    setSaving(false);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 12, alignItems: "flex-end", flexWrap: "wrap" }}>
      <div style={{ flex: "1 1 140px" }}>
        <Field label="Duración">
          <select value={form.duracion_bloque} onChange={set("duracion_bloque")} style={{ ...inputStyle, cursor: "pointer" }}>
            <option value="1h">1 hora</option>
            <option value="2h">2 horas</option>
          </select>
        </Field>
      </div>
      <div style={{ flex: "1 1 120px" }}>
        <Field label="Tarifa individual">
          <input type="number" step="0.01" min="0" value={form.tarifa_individual} onChange={set("tarifa_individual")} style={inputStyle} required
            onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }}
            onBlur={(e)  => { e.target.style.borderColor = C.border; }} />
        </Field>
      </div>
      <div style={{ display: "flex", gap: 6, paddingBottom: 2 }}>
        <button type="button" onClick={onCancel} style={{
          background: C.surface, border: `1px solid ${C.border}`, borderRadius: 6,
          padding: "6px 12px", color: C.muted, fontSize: 12, cursor: "pointer", fontFamily: font,
        }}>Cancelar</button>
        <button type="submit" disabled={saving || !form.tarifa_individual} style={{
          background: C.blue, border: "none", borderRadius: 6,
          padding: "6px 14px", color: "#fff", fontSize: 12, fontWeight: 700,
          cursor: saving ? "default" : "pointer", opacity: saving || !form.tarifa_individual ? 0.6 : 1, fontFamily: font,
        }}>Agregar</button>
      </div>
    </form>
  );
}

// ── Detalle de curso (sub-secciones) ─────────────────────────────────────────
function CursoDetalle({ curso, onEdit }) {
  const [grupos, setGrupos] = useState([]);
  const [planes, setPlanes] = useState([]);
  const [tarifas, setTarifas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showGrupo, setShowGrupo] = useState(false);
  const [showPlan, setShowPlan] = useState(false);
  const [showTarifa, setShowTarifa] = useState(false);

  useEffect(() => { if (curso) loadSub(); }, [curso]);

  async function loadSub() {
    setLoading(true);
    const [g, p, t] = await Promise.all([
      supabase.from("grupos").select("*").eq("curso_id", curso.id).order("fecha_inicio"),
      supabase.from("planes_precio").select("*").eq("curso_id", curso.id),
      supabase.from("tarifas_asesoria").select("*").eq("curso_id", curso.id),
    ]);
    setGrupos(g.data || []);
    setPlanes(p.data || []);
    setTarifas(t.data || []);
    setLoading(false);
  }

  async function handleAddGrupo(form) {
    await supabase.from("grupos").insert({ ...form, curso_id: curso.id });
    setShowGrupo(false);
    await loadSub();
  }

  async function handleDeleteGrupo(id) {
    await supabase.from("grupos").delete().eq("id", id);
    await loadSub();
  }

  async function handleAddPlan(form) {
    await supabase.from("planes_precio").insert({ ...form, curso_id: curso.id });
    setShowPlan(false);
    await loadSub();
  }

  async function handleDeletePlan(id) {
    await supabase.from("planes_precio").delete().eq("id", id);
    await loadSub();
  }

  async function handleAddTarifa(form) {
    await supabase.from("tarifas_asesoria").insert({ ...form, curso_id: curso.id });
    setShowTarifa(false);
    await loadSub();
  }

  async function handleDeleteTarifa(id) {
    await supabase.from("tarifas_asesoria").delete().eq("id", id);
    await loadSub();
  }

  if (!curso) {
    return (
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        height: "100%", color: C.muted, fontSize: 14, fontFamily: font,
      }}>
        Selecciona un curso para ver su detalle
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Cabecera */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <h3 style={{ margin: 0, color: C.text, fontSize: 18, fontWeight: 700, fontFamily: font }}>{curso.nombre}</h3>
          <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
            <span style={{
              background: curso.tipo === "curso" ? C.blue + "22" : C.orange + "22",
              color: curso.tipo === "curso" ? C.blue : C.orange,
              borderRadius: 5, padding: "1px 7px", fontSize: 10, fontWeight: 700, fontFamily: font,
            }}>{curso.tipo}</span>
            {curso.modalidad_fechas && (
              <span style={{
                background: C.surface, color: C.dim, borderRadius: 5, padding: "1px 7px",
                fontSize: 10, fontWeight: 600, fontFamily: font,
              }}>modalidad {curso.modalidad_fechas}</span>
            )}
            {!curso.activo && (
              <span style={{ background: C.red + "22", color: C.red, borderRadius: 5, padding: "1px 7px", fontSize: 10, fontWeight: 700, fontFamily: font }}>inactivo</span>
            )}
          </div>
        </div>
        <button onClick={() => onEdit(curso)} style={{
          background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8,
          padding: "6px 14px", color: C.dim, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: font,
        }}>Editar</button>
      </div>

      {curso.descripcion && (
        <div style={{ color: C.dim, fontSize: 13, fontFamily: font }}>{curso.descripcion}</div>
      )}

      {loading ? <Spinner /> : (
        <>
          {/* Grupos */}
          {curso.modalidad_fechas === "fija" && (
            <Section
              title="Grupos"
              count={grupos.length}
              onAdd={() => setShowGrupo(true)}
            >
              {grupos.length === 0 ? (
                <Empty text="Sin grupos registrados" />
              ) : grupos.map((g) => (
                <div key={g.id} style={{
                  background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8,
                  padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                  <div>
                    <span style={{ color: C.text, fontSize: 13, fontWeight: 600, fontFamily: font }}>{g.nombre}</span>
                    <div style={{ color: C.muted, fontSize: 12, marginTop: 2, fontFamily: font }}>
                      {g.fecha_inicio} → {g.fecha_fin} · Cupo: {g.cupo_max}
                    </div>
                  </div>
                  <button onClick={() => handleDeleteGrupo(g.id)} style={{
                    background: "none", border: "none", color: C.red, fontSize: 16, cursor: "pointer", padding: 4,
                  }} title="Eliminar">×</button>
                </div>
              ))}
            </Section>
          )}

          {/* Planes de precio */}
          <Section
            title="Planes de precio"
            count={planes.length}
            onAdd={() => setShowPlan(true)}
          >
            {planes.length === 0 ? (
              <Empty text="Sin planes registrados" />
            ) : planes.map((p) => (
              <div key={p.id} style={{
                background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8,
                padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <div>
                  <span style={{ color: C.text, fontSize: 13, fontWeight: 600, fontFamily: font }}>
                    {p.tipo_cobro.charAt(0).toUpperCase() + p.tipo_cobro.slice(1)}
                  </span>
                  <span style={{ marginLeft: 8, color: C.green, fontSize: 14, fontWeight: 700, fontFamily: font }}>
                    {fmtMoney(p.monto)}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{
                    background: p.activo ? C.green + "22" : C.red + "22",
                    color: p.activo ? C.green : C.red,
                    borderRadius: 99, padding: "1px 8px", fontSize: 10, fontWeight: 700, fontFamily: font,
                  }}>{p.activo ? "activo" : "inactivo"}</span>
                  <button onClick={() => handleDeletePlan(p.id)} style={{
                    background: "none", border: "none", color: C.red, fontSize: 16, cursor: "pointer", padding: 4,
                  }} title="Eliminar">×</button>
                </div>
              </div>
            ))}
          </Section>

          {/* Tarifas de asesoría */}
          {curso.tipo === "asesoria" && (
            <Section
              title="Tarifas de asesoría"
              count={tarifas.length}
              onAdd={() => setShowTarifa(true)}
            >
              {tarifas.length === 0 ? (
                <Empty text="Sin tarifas registradas" />
              ) : tarifas.map((t) => (
                <div key={t.id} style={{
                  background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8,
                  padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                  <div>
                    <span style={{ color: C.text, fontSize: 13, fontWeight: 600, fontFamily: font }}>
                      Bloque {t.duracion_bloque}
                    </span>
                    <span style={{ marginLeft: 8, color: C.green, fontSize: 14, fontWeight: 700, fontFamily: font }}>
                      {fmtMoney(t.tarifa_individual)}
                    </span>
                    <span style={{ marginLeft: 6, color: C.muted, fontSize: 12, fontFamily: font }}>por persona</span>
                  </div>
                  <button onClick={() => handleDeleteTarifa(t.id)} style={{
                    background: "none", border: "none", color: C.red, fontSize: 16, cursor: "pointer", padding: 4,
                  }} title="Eliminar">×</button>
                </div>
              ))}
            </Section>
          )}
        </>
      )}

      {/* Modales */}
      {showGrupo && (
        <Modal title="Nuevo grupo" onClose={() => setShowGrupo(false)}>
          <GrupoForm onSave={handleAddGrupo} onCancel={() => setShowGrupo(false)} />
        </Modal>
      )}
      {showPlan && (
        <Modal title="Nuevo plan de precio" onClose={() => setShowPlan(false)}>
          <PlanForm onSave={handleAddPlan} onCancel={() => setShowPlan(false)} />
        </Modal>
      )}
      {showTarifa && (
        <Modal title="Nueva tarifa" onClose={() => setShowTarifa(false)}>
          <TarifaForm onSave={handleAddTarifa} onCancel={() => setShowTarifa(false)} />
        </Modal>
      )}
    </div>
  );
}

// ── Helpers UI ───────────────────────────────────────────────────────────────
function Section({ title, count, onAdd, children }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <span style={{ color: C.dim, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: font }}>
          {title} · {count}
        </span>
        <button onClick={onAdd} style={{
          background: "none", border: `1px solid ${C.border}`, borderRadius: 6,
          padding: "3px 10px", color: C.blue, fontSize: 11, fontWeight: 700, cursor: "pointer", fontFamily: font,
        }}>+ Agregar</button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>{children}</div>
    </div>
  );
}

function Empty({ text }) {
  return <div style={{ color: C.muted, fontSize: 13, fontFamily: font }}>{text}</div>;
}

// ── Fila de curso ────────────────────────────────────────────────────────────
function CursoRow({ curso, onSelect, selected, grupos, planes }) {
  return (
    <div
      onClick={() => onSelect(curso)}
      style={{
        background: selected ? C.blue + "11" : C.card,
        border: `1px solid ${selected ? C.blue + "44" : C.border}`,
        borderRadius: 10, padding: "12px 16px", cursor: "pointer",
        transition: "border-color .15s, background .15s",
      }}
      onMouseEnter={(e) => { if (!selected) e.currentTarget.style.borderColor = C.blue + "33"; }}
      onMouseLeave={(e) => { if (!selected) e.currentTarget.style.borderColor = C.border; }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <span style={{ color: C.text, fontWeight: 600, fontSize: 14, fontFamily: font }}>{curso.nombre}</span>
          <span style={{
            marginLeft: 8,
            background: curso.tipo === "curso" ? C.blue + "22" : C.orange + "22",
            color: curso.tipo === "curso" ? C.blue : C.orange,
            borderRadius: 5, padding: "1px 7px", fontSize: 10, fontWeight: 700, fontFamily: font,
          }}>{curso.tipo}</span>
          {!curso.activo && (
            <span style={{ marginLeft: 4, background: C.red + "22", color: C.red, borderRadius: 5, padding: "1px 7px", fontSize: 10, fontWeight: 700, fontFamily: font }}>off</span>
          )}
        </div>
        <div style={{ display: "flex", gap: 8, color: C.muted, fontSize: 11, fontFamily: font }}>
          <span>{grupos.length} grupos</span>
          <span>{planes.length} planes</span>
        </div>
      </div>
    </div>
  );
}

// ── Página principal ─────────────────────────────────────────────────────────
export default function AdminCursos({ embedded }) {
  const [cursos, setCursos] = useState([]);
  const [gruposMap, setGruposMap] = useState({});
  const [planesMap, setPlanesMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editCurso, setEditCurso] = useState(null);

  useEffect(() => { loadAll(); }, []);

  async function loadAll() {
    setLoading(true);
    const [c, g, p] = await Promise.all([
      supabase.from("cursos").select("*").order("created_at", { ascending: false }),
      supabase.from("grupos").select("id, curso_id"),
      supabase.from("planes_precio").select("id, curso_id"),
    ]);
    setCursos(c.data || []);
    const gm = {};
    (g.data || []).forEach((r) => { (gm[r.curso_id] ||= []).push(r); });
    setGruposMap(gm);
    const pm = {};
    (p.data || []).forEach((r) => { (pm[r.curso_id] ||= []).push(r); });
    setPlanesMap(pm);
    setLoading(false);
  }

  async function handleSave(form) {
    if (editCurso) {
      await supabase.from("cursos").update(form).eq("id", editCurso.id);
    } else {
      await supabase.from("cursos").insert(form);
    }
    setShowForm(false);
    setEditCurso(null);
    await loadAll();
  }

  function handleEdit(curso) {
    setEditCurso(curso);
    setShowForm(true);
  }

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: font }}>
      {!embedded && <AdminHeader active="cursos" />}
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "32px 16px" }}>
      {/* Acción */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20, alignItems: "center" }}>
        <span style={{ color: C.muted, fontSize: 12, fontFamily: font }}>{cursos.length} cursos</span>
        <div style={{ flex: 1 }} />
        <button onClick={() => { setEditCurso(null); setShowForm(true); }} style={{
          background: C.blue, border: "none", borderRadius: 8,
          padding: "8px 18px", color: "#fff", fontSize: 12, fontWeight: 700,
          cursor: "pointer", fontFamily: font,
        }}>+ Nuevo curso</button>
      </div>

      {/* Layout */}
      <div style={{ display: "flex", gap: 20, minHeight: 400 }}>
        <div style={{ flex: "1 1 280px", maxWidth: 340, display: "flex", flexDirection: "column", gap: 6 }}>
          {loading ? <Spinner /> : cursos.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px", color: C.muted, fontSize: 14, fontFamily: font }}>
              Aún no hay cursos registrados.
            </div>
          ) : cursos.map((c) => (
            <CursoRow key={c.id} curso={c} onSelect={setSelected} selected={selected?.id === c.id}
              grupos={gruposMap[c.id] || []} planes={planesMap[c.id] || []} />
          ))}
        </div>

        <div style={{
          flex: "1 1 300px", background: C.surface, border: `1px solid ${C.border}`,
          borderRadius: 12, padding: 24,
        }}>
          <CursoDetalle curso={selected} onEdit={handleEdit} />
        </div>
      </div>

      {/* Modal */}
      {showForm && (
        <Modal title={editCurso ? "Editar curso" : "Nuevo curso"} onClose={() => { setShowForm(false); setEditCurso(null); }}>
          <CursoForm initial={editCurso || undefined} onSave={handleSave} onCancel={() => { setShowForm(false); setEditCurso(null); }} />
        </Modal>
      )}
      </div>
    </div>
  );
}
