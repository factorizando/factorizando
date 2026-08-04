// src/pages/admin/AdminAlumnos.jsx
// Panel de administración de alumnos: lista, búsqueda, crear/editar/eliminar.

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import AdminHeader from "../../components/admin/AdminHeader.jsx";
import { GRID_FORM, TEXTO_FLEXIBLE } from "../../components/admin/layout.js";

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
        border: `2px solid ${C.blue}22`,
        borderTopColor: C.blue,
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

// ── Formulario de alumno (crear o editar) ────────────────────────────────────
function AlumnoForm({ profiles, initial, onSave, onCancel }) {
  const isEdit = !!initial;
  const [selectedProfile, setSelectedProfile] = useState(initial?.id || "");
  const [form, setForm] = useState({
    nombre: initial?.nombre || "",
    apellidos: initial?.apellidos || "",
    fecha_nacimiento: initial?.fecha_nacimiento || "",
    email: initial?.email || "",
    telefono: initial?.telefono || "",
    nivel: initial?.nivel || "prepa",
    alergias: initial?.alergias || "",
    condiciones_medicas: initial?.condiciones_medicas || "",
    notas_importantes: initial?.notas_importantes || "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [isManual, setIsManual] = useState(isEdit ? !initial?.id : false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  function handleProfileSelect(e) {
    const val = e.target.value;
    setSelectedProfile(val);
    if (val === "manual") {
      setIsManual(true);
      setForm((f) => ({ ...f, id: undefined }));
      return;
    }
    setIsManual(false);
    const p = (profiles || []).find((x) => x.id === val);
    if (p) {
      setForm((f) => ({
        ...f,
        id: p.id,
        nombre: p.nombre || "",
        email: p.email || "",
        telefono: p.telefono || "",
        fecha_nacimiento: p.fecha_nacimiento || "",
      }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    const id = initial?.id || form.id || (isManual ? crypto.randomUUID() : null);
    const result = await onSave({ ...form, id });
    if (result?.error) setError(result.error);
    setSaving(false);
  }

  const profilesSinAlumno = (profiles || []).filter((p) => !p.ya_es_alumno || isEdit);

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {!isEdit && (
        <Field label="Buscar usuario registrado">
          <select value={selectedProfile} onChange={handleProfileSelect} style={{ ...inputStyle, cursor: "pointer" }} required={!isManual}>
            <option value="">Seleccionar usuario…</option>
            {profilesSinAlumno.map((p) => (
              <option key={p.id} value={p.id}>{p.nombre || p.email} ({p.email || p.id.slice(0, 8)})</option>
            ))}
            <option value="manual">— Crear manualmente (sin usuario registrado) —</option>
          </select>
        </Field>
      )}

      <div style={{ display: "grid", gridTemplateColumns: GRID_FORM, gap: 12 }}>
        <Field label="Nombre"><input value={form.nombre} onChange={set("nombre")} style={inputStyle} required
          onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }} onBlur={(e) => { e.target.style.borderColor = C.border; }} /></Field>
        <Field label="Apellidos"><input value={form.apellidos} onChange={set("apellidos")} style={inputStyle} required
          onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }} onBlur={(e) => { e.target.style.borderColor = C.border; }} /></Field>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: GRID_FORM, gap: 12 }}>
        <Field label="Fecha de nacimiento"><input type="date" value={form.fecha_nacimiento} onChange={set("fecha_nacimiento")} style={inputStyle} required /></Field>
        <Field label="Nivel">
          <select value={form.nivel} onChange={set("nivel")} style={{ ...inputStyle, cursor: "pointer" }}>
            <option value="primaria">Primaria</option>
            <option value="secundaria">Secundaria</option>
            <option value="prepa">Preparatoria</option>
            <option value="universidad">Universidad</option>
          </select>
        </Field>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: GRID_FORM, gap: 12 }}>
        <Field label="Email"><input type="email" value={form.email} onChange={set("email")} style={inputStyle}
          onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }} onBlur={(e) => { e.target.style.borderColor = C.border; }} /></Field>
        <Field label="Teléfono"><input value={form.telefono} onChange={set("telefono")} style={inputStyle}
          onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }} onBlur={(e) => { e.target.style.borderColor = C.border; }} /></Field>
      </div>
      <Field label="Alergias"><input value={form.alergias} onChange={set("alergias")} placeholder="(opcional)" style={inputStyle}
        onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }} onBlur={(e) => { e.target.style.borderColor = C.border; }} /></Field>
      <Field label="Condiciones médicas"><input value={form.condiciones_medicas} onChange={set("condiciones_medicas")} placeholder="(opcional)" style={inputStyle}
        onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }} onBlur={(e) => { e.target.style.borderColor = C.border; }} /></Field>
      <Field label="Notas importantes"><input value={form.notas_importantes} onChange={set("notas_importantes")} placeholder="(opcional)" style={inputStyle}
        onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }} onBlur={(e) => { e.target.style.borderColor = C.border; }} /></Field>
      {error && (
        <div style={{ background: "#ff444422", border: "1px solid #ff444466", borderRadius: 8, padding: "10px 14px", color: "#ff6666", fontSize: 13, fontFamily: font }}>
          {error}
        </div>
      )}
      <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 8 }}>
        <button type="button" onClick={onCancel} style={{
          background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8,
          padding: "8px 18px", color: C.muted, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: font,
        }}>Cancelar</button>
        <button type="submit" disabled={saving} style={{
          background: C.blue, border: "none", borderRadius: 8,
          padding: "8px 22px", color: "#fff", fontSize: 13, fontWeight: 700,
          cursor: saving ? "default" : "pointer", opacity: saving ? 0.6 : 1, fontFamily: font,
        }}>{saving ? "Guardando…" : isEdit ? "Guardar cambios" : "Guardar"}</button>
      </div>
    </form>
  );
}

// ── Fila de alumno ───────────────────────────────────────────────────────────
function AlumnoRow({ alumno, onClick, onEdit, onDelete }) {
  return (
    <div style={{
      background: C.card,
      border: `1px solid ${C.border}`,
      borderRadius: 10,
      padding: "12px 16px",
      cursor: "pointer",
      transition: "border-color .15s, background .15s",
    }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.blue + "33"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.border; }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
        <div style={{ flex: 1, ...TEXTO_FLEXIBLE }} onClick={onClick}>
          <span style={{ color: C.text, fontWeight: 600, fontSize: 14, fontFamily: font }}>
            {alumno.nombre} {alumno.apellidos}
          </span>
          <span style={{
            marginLeft: 8,
            background: alumno.nivel === "prepa" ? C.blue + "22" : alumno.nivel === "universidad" ? C.purple + "22" : alumno.nivel === "secundaria" ? C.orange + "22" : C.green + "22",
            color: alumno.nivel === "prepa" ? C.blue : alumno.nivel === "universidad" ? C.purple : alumno.nivel === "secundaria" ? C.orange : C.green,
            borderRadius: 5, padding: "1px 7px", fontSize: 10, fontWeight: 700, fontFamily: font,
          }}>
            {alumno.nivel === "primaria" ? "Prim" : alumno.nivel === "secundaria" ? "Sec" : alumno.nivel === "prepa" ? "Prepa" : "Univ"}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ color: C.muted, fontSize: 12, fontFamily: font }}>
            {fmtDate(alumno.created_at)}
          </span>
          <button onClick={(e) => { e.stopPropagation(); onEdit(alumno); }} title="Editar" style={{
            background: "none", border: "none", color: C.blue, fontSize: 15, cursor: "pointer", padding: "2px 4px",
          }}>✎</button>
          <button onClick={(e) => { e.stopPropagation(); onDelete(alumno); }} title="Eliminar" style={{
            background: "none", border: "none", color: C.red, fontSize: 15, cursor: "pointer", padding: "2px 4px",
          }}>✕</button>
        </div>
      </div>
      {alumno.email && (
        <div style={{ color: C.muted, fontSize: 12, marginTop: 4, fontFamily: font, cursor: "pointer" }} onClick={onClick}>{alumno.email}</div>
      )}
    </div>
  );
}

// ── Página principal ─────────────────────────────────────────────────────────
export default function AdminAlumnos({ embedded }) {
  const navigate = useNavigate();
  const [alumnos, setAlumnos] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busqueda, setBusqueda] = useState("");
  const [filtroNivel, setFiltroNivel] = useState("todos");
  const [showForm, setShowForm] = useState(false);
  const [editAlumno, setEditAlumno] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  useEffect(() => { loadAlumnos(); }, []);

  async function loadAlumnos() {
    setLoading(true);
    const [a, p] = await Promise.all([
      supabase.from("alumnos").select("*").order("created_at", { ascending: false }),
      supabase.rpc("get_all_profiles"),
    ]);
    const alumnosList = a.data || [];
    setAlumnos(alumnosList);

    const alumnoIds = new Set(alumnosList.map((x) => x.id));
    const profs = (p.data || []).map((x) => ({ ...x, ya_es_alumno: alumnoIds.has(x.id) }));
    setProfiles(profs);
    setLoading(false);
  }

  const filtrados = alumnos.filter((a) => {
    if (filtroNivel !== "todos" && a.nivel !== filtroNivel) return false;
    if (busqueda) {
      const q = busqueda.toLowerCase();
      if (!`${a.nombre} ${a.apellidos} ${a.email || ""}`.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  async function handleCreate(form) {
    if (form.id) {
      const { id, ...rest } = form;
      const { error } = await supabase.from("alumnos").insert({ id, ...rest });
      if (error) { console.error(error); return { error: error.message || "Error al guardar el alumno." }; }
    } else {
      const { error } = await supabase.from("alumnos").insert(form);
      if (error) { console.error(error); return { error: error.message || "Error al guardar el alumno." }; }
    }
    setShowForm(false);
    await loadAlumnos();
  }

  async function handleEdit(form) {
    if (!form.id) return;
    const { id, ...rest } = form;
    const { error } = await supabase.from("alumnos").update(rest).eq("id", id);
    if (error) { console.error(error); return { error: error.message || "Error al actualizar el alumno." }; }
    setEditAlumno(null);
    setShowForm(false);
    await loadAlumnos();
  }

  async function handleDelete() {
    if (!deleteTarget) return;
    const { error } = await supabase.from("alumnos").delete().eq("id", deleteTarget.id);
    if (error) { console.error(error); }
    setDeleteTarget(null);
    await loadAlumnos();
  }

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: font }}>
      {!embedded && <AdminHeader active="alumnos" />}
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "32px 16px" }}>
      {/* Barra de búsqueda y filtros */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ position: "relative", flex: "1 1 200px", maxWidth: 300 }}>
          <span style={{
            position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)",
            color: C.muted, fontSize: 14, pointerEvents: "none",
          }}>⌕</span>
          <input
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar alumno…"
            style={{
              width: "100%", background: C.surface, border: `1px solid ${C.border}`,
              borderRadius: 9, padding: "9px 14px 9px 34px", color: C.text,
              fontSize: 13, fontFamily: font, outline: "none", boxSizing: "border-box",
            }}
            onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }}
            onBlur={(e)  => { e.target.style.borderColor = C.border; }}
          />
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {["todos", "primaria", "secundaria", "prepa", "universidad"].map((n) => (
            <button
              key={n}
              onClick={() => setFiltroNivel(n)}
              style={{
                border: filtroNivel === n ? "none" : `1px solid ${C.border}`,
                borderRadius: 99, padding: "8px 16px", fontSize: 12, fontWeight: 700,
                cursor: "pointer", background: filtroNivel === n ? C.blue : C.surface,
                color: filtroNivel === n ? "#fff" : C.muted, fontFamily: font,
                transition: "background .15s, color .15s",
              }}
            >
              {n === "todos" ? "Todos" : n === "prepa" ? "Prepa" : n === "universidad" ? "Univ" : n.charAt(0).toUpperCase() + n.slice(1)}
            </button>
          ))}
        </div>
        <div style={{ flex: 1 }} />
        <button onClick={() => { setEditAlumno(null); setShowForm(true); }} style={{
          background: C.blue, border: "none", borderRadius: 8,
          padding: "8px 18px", color: "#fff", fontSize: 12, fontWeight: 700,
          cursor: "pointer", fontFamily: font,
        }}>+ Nuevo alumno</button>
      </div>

      {/* Lista */}
      {loading ? <Spinner /> : filtrados.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 20px", color: C.muted, fontSize: 14, fontFamily: font }}>
          {alumnos.length === 0 ? "Aún no hay alumnos registrados." : "Ningún alumno coincide con la búsqueda."}
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 6, maxWidth: 600 }}>
          {filtrados.map((a) => (
            <AlumnoRow
              key={a.id} alumno={a}
              onClick={() => navigate(`/admin/alumnos/${a.id}`)}
              onEdit={(alumno) => { setEditAlumno(alumno); setShowForm(true); }}
              onDelete={(alumno) => setDeleteTarget(alumno)}
            />
          ))}
        </div>
      )}

      {/* Modal crear/editar */}
      {showForm && (
        <Modal title={editAlumno ? "Editar alumno" : "Nuevo alumno"} onClose={() => { setShowForm(false); setEditAlumno(null); }}>
          <AlumnoForm
            profiles={profiles}
            initial={editAlumno || null}
            onSave={editAlumno ? handleEdit : handleCreate}
            onCancel={() => { setShowForm(false); setEditAlumno(null); }}
          />
        </Modal>
      )}

      {/* Modal eliminar */}
      {deleteTarget && (
        <ConfirmModal
          title="Eliminar alumno"
          message={`¿Eliminar a "${deleteTarget.nombre} ${deleteTarget.apellidos}"? Esta acción no se puede deshacer.`}
          onConfirm={handleDelete}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
      </div>
    </div>
  );
}
