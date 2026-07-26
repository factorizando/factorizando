// src/pages/admin/AdminAlumnoDetalle.jsx
// Página dedicada de un alumno: info, tutores, contactos de emergencia, inscripciones, cargos.

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import EstadoBadge from "../../components/admin/EstadoBadge.jsx";
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

function fmtDate(iso) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("es-MX", { day: "2-digit", month: "short", year: "numeric" });
}
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

// ── Formularios ──────────────────────────────────────────────────────────────
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
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <Field label="Nombre"><input value={form.nombre} onChange={set("nombre")} style={inputStyle} required
          onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }} onBlur={(e) => { e.target.style.borderColor = C.border; }} /></Field>
        <Field label="Apellidos"><input value={form.apellidos} onChange={set("apellidos")} style={inputStyle} required
          onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }} onBlur={(e) => { e.target.style.borderColor = C.border; }} /></Field>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
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

function ContactoForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial || { nombre: "", telefono: "", relacion: "", orden: 1 });
  const [saving, setSaving] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    await onSave({ ...form, orden: Number(form.orden) });
    setSaving(false);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Field label="Nombre"><input value={form.nombre} onChange={set("nombre")} style={inputStyle} required
        onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }} onBlur={(e) => { e.target.style.borderColor = C.border; }} /></Field>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <Field label="Teléfono"><input value={form.telefono} onChange={set("telefono")} style={inputStyle} required
          onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }} onBlur={(e) => { e.target.style.borderColor = C.border; }} /></Field>
        <Field label="Relación"><input value={form.relacion} onChange={set("relacion")} placeholder="abuelo, tío…" style={inputStyle} required
          onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }} onBlur={(e) => { e.target.style.borderColor = C.border; }} /></Field>
      </div>
      <Field label="Prioridad">
        <select value={form.orden} onChange={set("orden")} style={{ ...inputStyle, cursor: "pointer" }}>
          <option value={1}>1 — Primero en contactar</option>
          <option value={2}>2 — Segundo en contactar</option>
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

// ── Página principal ─────────────────────────────────────────────────────────
export default function AdminAlumnoDetalle() {
  const { id } = useParams();
  const [alumno, setAlumno] = useState(null);
  const [tutores, setTutores] = useState([]);
  const [contactos, setContactos] = useState([]);
  const [inscripciones, setInscripciones] = useState([]);
  const [cargos, setCargos] = useState([]);
  const [cursos, setCursos] = useState({});
  const [loading, setLoading] = useState(true);
  const [showTutorForm, setShowTutorForm] = useState(false);
  const [editTutor, setEditTutor] = useState(null);
  const [showContactoForm, setShowContactoForm] = useState(false);
  const [editContacto, setEditContacto] = useState(null);

  useEffect(() => { loadAll(); }, [id]);

  async function loadAll() {
    setLoading(true);
    const { data: al } = await supabase.from("alumnos").select("*").eq("id", id).single();
    setAlumno(al);

    if (al) {
      const [t, c, i, cg] = await Promise.all([
        supabase.from("tutores").select("*").in("id",
          (await supabase.from("alumno_tutor").select("tutor_id").eq("alumno_id", id)).data?.map((r) => r.tutor_id) || []
        ),
        supabase.from("contactos_emergencia").select("*").eq("alumno_id", id).order("orden"),
        supabase.from("inscripciones").select("*").eq("alumno_id", id).order("fecha_inscripcion", { ascending: false }),
        supabase.from("cargos").select("*").eq("alumno_id", id).order("fecha_vencimiento"),
      ]);
      setTutores(t.data || []);
      setContactos(c.data || []);
      setInscripciones(i.data || []);
      setCargos(cg.data || []);

      const cursoIds = [...new Set([...(i.data || []).map((x) => x.curso_id)])];
      if (cursoIds.length > 0) {
        const { data: crs } = await supabase.from("cursos").select("id, nombre").in("id", cursoIds);
        const map = {};
        (crs || []).forEach((x) => { map[x.id] = x.nombre; });
        setCursos(map);
      }
    }
    setLoading(false);
  }

  // ── Tutores CRUD ─────────────────────────────────────────────────────────
  async function handleSaveTutor(form) {
    if (editTutor) {
      await supabase.from("tutores").update(form).eq("id", editTutor.id);
    } else {
      const { data } = await supabase.from("tutores").insert(form).select("id").single();
      if (data) await supabase.from("alumno_tutor").insert({ alumno_id: id, tutor_id: data.id });
    }
    setShowTutorForm(false);
    setEditTutor(null);
    await loadAll();
  }

  async function handleDeleteTutor(tutorId) {
    await supabase.from("alumno_tutor").delete().eq("alumno_id", id).eq("tutor_id", tutorId);
    await supabase.from("tutores").delete().eq("id", tutorId);
    await loadAll();
  }

  // ── Contactos CRUD ───────────────────────────────────────────────────────
  async function handleSaveContacto(form) {
    if (editContacto) {
      await supabase.from("contactos_emergencia").update(form).eq("id", editContacto.id);
    } else {
      await supabase.from("contactos_emergencia").insert({ ...form, alumno_id: id });
    }
    setShowContactoForm(false);
    setEditContacto(null);
    await loadAll();
  }

  async function handleDeleteContacto(contactoId) {
    await supabase.from("contactos_emergencia").delete().eq("id", contactoId);
    await loadAll();
  }

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{
          width: 32, height: 32, borderRadius: "50%",
          border: `2px solid ${C.blue}22`, borderTopColor: C.blue,
          animation: "spin .7s linear infinite",
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (!alumno) {
    return (
      <div style={{ minHeight: "100vh", background: C.bg, fontFamily: font, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
        <div style={{ color: C.muted, fontSize: 16 }}>Alumno no encontrado</div>
        <Link to="/admin/alumnos" style={{ color: C.blue, fontSize: 13, textDecoration: "none", fontFamily: font }}>← Volver a alumnos</Link>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: font }}>
      <AdminHeader active="alumnos" />

      <div style={{ maxWidth: 820, margin: "0 auto", padding: "32px 16px", display: "flex", flexDirection: "column", gap: 28 }}>

        {/* Info básica */}
        <div style={{
          background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "24px 28px",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
            <div>
              <h2 style={{ margin: 0, color: C.text, fontSize: 20, fontWeight: 700 }}>{alumno.nombre} {alumno.apellidos}</h2>
              <div style={{ color: C.muted, fontSize: 13, marginTop: 4 }}>{alumno.email || "Sin email"} · {alumno.telefono || "Sin teléfono"}</div>
            </div>
            <span style={{
              background: alumno.nivel === "prepa" ? C.blue + "22" : C.purple + "22",
              color: alumno.nivel === "prepa" ? C.blue : C.purple,
              borderRadius: 5, padding: "1px 7px", fontSize: 10, fontWeight: 700, fontFamily: font,
            }}>{alumno.nivel === "prepa" ? "Prepa" : "Universidad"}</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12 }}>
            {[
              { label: "Nacimiento", value: fmtDate(alumno.fecha_nacimiento) },
              { label: "Registro", value: fmtDate(alumno.created_at) },
            ].map((item) => (
              <div key={item.label} style={{
                background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, padding: "10px 14px",
              }}>
                <div style={{ color: C.muted, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{item.label}</div>
                <div style={{ color: C.text, fontSize: 13, fontWeight: 600, marginTop: 2 }}>{item.value}</div>
              </div>
            ))}
          </div>
          {(alumno.alergias || alumno.condiciones_medicas || alumno.notas_importantes) && (
            <div style={{
              background: C.yellow + "11", border: `1px solid ${C.yellow}33`, borderRadius: 8, padding: "12px 14px", marginTop: 12,
            }}>
              <div style={{ color: C.yellow, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Información médica</div>
              {alumno.alergias && <div style={{ color: C.text, fontSize: 13 }}><b>Alergias:</b> {alumno.alergias}</div>}
              {alumno.condiciones_medicas && <div style={{ color: C.text, fontSize: 13 }}><b>Condiciones:</b> {alumno.condiciones_medicas}</div>}
              {alumno.notas_importantes && <div style={{ color: C.text, fontSize: 13 }}><b>Notas:</b> {alumno.notas_importantes}</div>}
            </div>
          )}
        </div>

        {/* Tutores */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <span style={{ color: C.dim, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>Tutores · {tutores.length}</span>
            <button onClick={() => { setEditTutor(null); setShowTutorForm(true); }} style={{
              background: "none", border: `1px solid ${C.border}`, borderRadius: 6,
              padding: "4px 12px", color: C.blue, fontSize: 11, fontWeight: 700, cursor: "pointer", fontFamily: font,
            }}>+ Agregar</button>
          </div>
          {tutores.length === 0 ? (
            <div style={{ color: C.muted, fontSize: 13 }}>Sin tutores registrados</div>
          ) : tutores.map((t) => (
            <div key={t.id} style={{
              background: C.card, border: `1px solid ${C.border}`, borderRadius: 8,
              padding: "12px 16px", marginBottom: 6, display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <div>
                <span style={{ color: C.text, fontSize: 13, fontWeight: 600 }}>{t.nombre} {t.apellidos}</span>
                <span style={{ marginLeft: 8, background: C.surface, color: C.dim, borderRadius: 5, padding: "1px 6px", fontSize: 10, fontWeight: 600 }}>{t.relacion}</span>
                <div style={{ color: C.muted, fontSize: 12, marginTop: 2 }}>{t.telefono} · {t.email || "—"}</div>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                <button onClick={() => { setEditTutor(t); setShowTutorForm(true); }} style={{
                  background: "none", border: "none", color: C.dim, fontSize: 14, cursor: "pointer", padding: 4,
                }} title="Editar">✎</button>
                <button onClick={() => handleDeleteTutor(t.id)} style={{
                  background: "none", border: "none", color: C.red, fontSize: 16, cursor: "pointer", padding: 4,
                }} title="Eliminar">×</button>
              </div>
            </div>
          ))}
        </div>

        {/* Contactos de emergencia */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <span style={{ color: C.dim, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>Contactos de emergencia · {contactos.length}</span>
            <button onClick={() => { setEditContacto(null); setShowContactoForm(true); }} style={{
              background: "none", border: `1px solid ${C.border}`, borderRadius: 6,
              padding: "4px 12px", color: C.blue, fontSize: 11, fontWeight: 700, cursor: "pointer", fontFamily: font,
            }}>+ Agregar</button>
          </div>
          {contactos.length === 0 ? (
            <div style={{ color: C.muted, fontSize: 13 }}>Sin contactos registrados</div>
          ) : contactos.map((c) => (
            <div key={c.id} style={{
              background: C.card, border: `1px solid ${C.border}`, borderRadius: 8,
              padding: "12px 16px", marginBottom: 6, display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <div>
                <span style={{ color: C.text, fontSize: 13, fontWeight: 600 }}>#{c.orden} {c.nombre}</span>
                <span style={{ marginLeft: 8, color: C.dim, fontSize: 12 }}>{c.relacion}</span>
                <div style={{ color: C.muted, fontSize: 12, marginTop: 2 }}>{c.telefono}</div>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                <button onClick={() => { setEditContacto(c); setShowContactoForm(true); }} style={{
                  background: "none", border: "none", color: C.dim, fontSize: 14, cursor: "pointer", padding: 4,
                }} title="Editar">✎</button>
                <button onClick={() => handleDeleteContacto(c.id)} style={{
                  background: "none", border: "none", color: C.red, fontSize: 16, cursor: "pointer", padding: 4,
                }} title="Eliminar">×</button>
              </div>
            </div>
          ))}
        </div>

        {/* Inscripciones */}
        <div>
          <span style={{ color: C.dim, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: 10 }}>Inscripciones · {inscripciones.length}</span>
          {inscripciones.length === 0 ? (
            <div style={{ color: C.muted, fontSize: 13 }}>Sin inscripciones</div>
          ) : inscripciones.map((i) => (
            <div key={i.id} style={{
              background: C.card, border: `1px solid ${C.border}`, borderRadius: 8,
              padding: "12px 16px", marginBottom: 6, display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <div>
                <span style={{ color: C.text, fontSize: 13, fontWeight: 600 }}>{cursos[i.curso_id] || "Curso"}</span>
                <span style={{ marginLeft: 8, color: C.muted, fontSize: 12 }}>{fmtDate(i.fecha_inscripcion)}</span>
              </div>
              <EstadoBadge estado={i.estado} />
            </div>
          ))}
        </div>

        {/* Cargos */}
        <div>
          <span style={{ color: C.dim, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: 10 }}>Cargos · {cargos.length}</span>
          {cargos.length === 0 ? (
            <div style={{ color: C.muted, fontSize: 13 }}>Sin cargos</div>
          ) : cargos.map((cg) => (
            <div key={cg.id} style={{
              background: C.card, border: `1px solid ${C.border}`, borderRadius: 8,
              padding: "12px 16px", marginBottom: 6, display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <div>
                <span style={{ color: C.text, fontSize: 13, fontWeight: 600 }}>{cg.concepto}</span>
                <span style={{ marginLeft: 8, color: C.muted, fontSize: 12 }}>vence {fmtDate(cg.fecha_vencimiento)}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: C.text, fontWeight: 700, fontSize: 14 }}>{fmtMoney(cg.monto)}</span>
                <EstadoBadge estado={cg.estado} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modales */}
      {showTutorForm && (
        <Modal title={editTutor ? "Editar tutor" : "Nuevo tutor"} onClose={() => { setShowTutorForm(false); setEditTutor(null); }}>
          <TutorForm initial={editTutor || undefined} onSave={handleSaveTutor} onCancel={() => { setShowTutorForm(false); setEditTutor(null); }} />
        </Modal>
      )}
      {showContactoForm && (
        <Modal title={editContacto ? "Editar contacto" : "Nuevo contacto"} onClose={() => { setShowContactoForm(false); setEditContacto(null); }}>
          <ContactoForm initial={editContacto || undefined} onSave={handleSaveContacto} onCancel={() => { setShowContactoForm(false); setEditContacto(null); }} />
        </Modal>
      )}
    </div>
  );
}
