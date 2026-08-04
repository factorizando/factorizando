// src/pages/admin/AdminTutores.jsx
// Panel de administración de tutores: gestionar tutores de alumnos.

import { useState, useEffect } from "react";
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
  red:     "#f43f5e",
  purple:  "#a78bfa",
  text:    "#e8eaf0",
  muted:   "#5a6070",
  dim:     "#8a9ab8",
};

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
  return (
    <Modal title={title} onClose={onCancel}>
      <p style={{ color: C.text, fontSize: 14, lineHeight: 1.5, fontFamily: font, margin: 0 }}>{message}</p>
      <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 20 }}>
        <button onClick={onCancel} style={{
          background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8,
          padding: "8px 18px", color: C.muted, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: font,
        }}>Cancelar</button>
        <button onClick={onConfirm} style={{
          background: C.red, border: "none", borderRadius: 8,
          padding: "8px 22px", color: "#fff", fontSize: 13, fontWeight: 700,
          cursor: "pointer", fontFamily: font,
        }}>Eliminar</button>
      </div>
    </Modal>
  );
}

// ── Formulario tutor ─────────────────────────────────────────────────────────
function TutorForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial || { nombre: "", apellidos: "", telefono: "", email: "", relacion: "padre" });
  const [saving, setSaving] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    await onSave(form);
    setSaving(false);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "grid", gridTemplateColumns: GRID_FORM, gap: 12 }}>
        <Field label="Nombre"><input value={form.nombre} onChange={set("nombre")} style={inputStyle} required
          onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }} onBlur={(e) => { e.target.style.borderColor = C.border; }} /></Field>
        <Field label="Apellidos"><input value={form.apellidos} onChange={set("apellidos")} style={inputStyle} required
          onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }} onBlur={(e) => { e.target.style.borderColor = C.border; }} /></Field>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: GRID_FORM, gap: 12 }}>
        <Field label="Teléfono"><input value={form.telefono} onChange={set("telefono")} style={inputStyle} required
          onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }} onBlur={(e) => { e.target.style.borderColor = C.border; }} /></Field>
        <Field label="Email"><input type="email" value={form.email} onChange={set("email")} style={inputStyle}
          onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }} onBlur={(e) => { e.target.style.borderColor = C.border; }} /></Field>
      </div>
      <Field label="Relación">
        <select value={form.relacion} onChange={set("relacion")} style={{ ...inputStyle, cursor: "pointer" }}>
          <option value="padre">Padre</option>
          <option value="madre">Madre</option>
          <option value="tutor">Tutor</option>
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

// ── Fila de tutor ────────────────────────────────────────────────────────────
function TutorRow({ tutor, onEdit, onDelete }) {
  return (
    <div style={{
      background: C.card, border: `1px solid ${C.border}`, borderRadius: 10,
      padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8,
      flexWrap: "wrap",
    }}>
      <div style={TEXTO_FLEXIBLE}>
        <span style={{ color: C.text, fontWeight: 600, fontSize: 14, fontFamily: font }}>
          {tutor.nombre} {tutor.apellidos}
        </span>
        <span style={{ marginLeft: 8, background: C.surface, color: C.dim, borderRadius: 5, padding: "1px 6px", fontSize: 10, fontWeight: 600, fontFamily: font }}>
          {tutor.relacion === "padre" ? "Padre" : tutor.relacion === "madre" ? "Madre" : "Tutor"}
        </span>
        <div style={{ color: C.muted, fontSize: 13, fontFamily: font, marginTop: 2 }}>
          {tutor.telefono}{tutor.email ? ` · ${tutor.email}` : ""}
        </div>
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        <button onClick={() => onEdit(tutor)} style={{
          background: C.blue + "22", border: `1px solid ${C.blue}44`, borderRadius: 6,
          padding: "4px 14px", color: C.blue, fontSize: 12, fontWeight: 700,
          cursor: "pointer", fontFamily: font,
        }}>Editar</button>
        <button onClick={() => onDelete(tutor)} style={{
          background: "none", border: `1px solid ${C.red}44`, borderRadius: 6,
          padding: "4px 14px", color: C.red, fontSize: 12, fontWeight: 700,
          cursor: "pointer", fontFamily: font,
        }}>Eliminar</button>
      </div>
    </div>
  );
}

// ── Página principal ─────────────────────────────────────────────────────────
export default function AdminTutores({ embedded }) {
  const [tutores, setTutores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editTutor, setEditTutor] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  useEffect(() => { loadAll(); }, []);

  async function loadAll() {
    setLoading(true);
    const { data } = await supabase.from("tutores").select("*").order("apellidos", { ascending: true });
    setTutores(data || []);
    setLoading(false);
  }

  const filtrados = tutores.filter((t) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return `${t.nombre} ${t.apellidos}`.toLowerCase().includes(q)
      || t.telefono.includes(q)
      || (t.email || "").toLowerCase().includes(q);
  });

  async function handleSave(form) {
    if (editTutor) {
      await supabase.from("tutores").update(form).eq("id", editTutor.id);
    } else {
      await supabase.from("tutores").insert(form);
    }
    setShowForm(false);
    setEditTutor(null);
    await loadAll();
  }

  async function handleDelete() {
    if (!deleteTarget) return;
    await supabase.from("tutores").delete().eq("id", deleteTarget.id);
    setDeleteTarget(null);
    await loadAll();
  }

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: font }}>
      {!embedded && <AdminHeader active="tutores" />}
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "32px 16px" }}>

        {/* Stats */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
          <div style={{ flex: "1 1 120px", background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10, padding: "12px 16px" }}>
            <div style={{ color: C.muted, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: font }}>Total</div>
            <div style={{ color: C.text, fontSize: 20, fontWeight: 800, marginTop: 2, fontFamily: font }}>{tutores.length}</div>
          </div>
        </div>

        {/* Búsqueda + botón */}
        <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
          <input
            placeholder="Buscar tutor…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ ...inputStyle, maxWidth: 320 }}
            onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }}
            onBlur={(e) => { e.target.style.borderColor = C.border; }}
          />
          <span style={{ color: C.muted, fontSize: 12, fontFamily: font }}>{filtrados.length} tutores</span>
          <div style={{ flex: 1 }} />
          <button onClick={() => { setEditTutor(null); setShowForm(true); }} style={{
            background: C.blue, border: "none", borderRadius: 8,
            padding: "8px 18px", color: "#fff", fontSize: 12, fontWeight: 700,
            cursor: "pointer", fontFamily: font,
          }}>+ Nuevo tutor</button>
        </div>

        {/* Lista */}
        {loading ? <Spinner /> : filtrados.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 20px", color: C.muted, fontSize: 14, fontFamily: font }}>
            {tutores.length === 0 ? "Aún no hay tutores registrados." : "Ningún tutor coincide con la búsqueda."}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {filtrados.map((t) => (
              <TutorRow
                key={t.id}
                tutor={t}
                onEdit={(tutor) => { setEditTutor(tutor); setShowForm(true); }}
                onDelete={(tutor) => setDeleteTarget(tutor)}
              />
            ))}
          </div>
        )}

        {/* Modal crear/editar */}
        {showForm && (
          <Modal title={editTutor ? "Editar tutor" : "Nuevo tutor"} onClose={() => { setShowForm(false); setEditTutor(null); }}>
            <TutorForm
              initial={editTutor || undefined}
              onSave={handleSave}
              onCancel={() => { setShowForm(false); setEditTutor(null); }}
            />
          </Modal>
        )}

        {/* Confirmación eliminar */}
        {deleteTarget && (
          <ConfirmModal
            title="Eliminar tutor"
            message={`¿Eliminar a ${deleteTarget.nombre} ${deleteTarget.apellidos}? Se eliminará de todos los alumnos asociados.`}
            onConfirm={handleDelete}
            onCancel={() => setDeleteTarget(null)}
          />
        )}
      </div>
    </div>
  );
}
