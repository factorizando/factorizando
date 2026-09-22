// src/pages/admin/AdminTutores.jsx
// Panel de tutores: gestionar tutores y vincular su cuenta para el portal.
import { useState, useEffect } from "react";
import { Users, Plus, Pencil, Trash2, Link2, Unlink } from "lucide-react";
import { supabase } from "../../lib/supabase";
import AdminLayout from "../../components/admin/AdminLayout.jsx";
import {
  Page, Card, Badge, Button, SearchField, Field, Input, Select, Modal, EmptyState,
} from "../../components/admin/ui.jsx";
import { GRID_FORM } from "../../components/admin/layout.js";

const RELACION_LABEL = { padre: "Padre", madre: "Madre", tutor: "Tutor" };

function TutorForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial || { nombre: "", apellidos: "", telefono: "", email: "", relacion: "padre" });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    const res = await onSave(form);
    if (res?.error) { setError(res.error); setSaving(false); return; }
    setSaving(false);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "grid", gridTemplateColumns: GRID_FORM, gap: 12 }}>
        <Field label="Nombre"><Input value={form.nombre} onChange={set("nombre")} required /></Field>
        <Field label="Apellidos"><Input value={form.apellidos} onChange={set("apellidos")} required /></Field>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: GRID_FORM, gap: 12 }}>
        <Field label="Teléfono"><Input value={form.telefono} onChange={set("telefono")} required /></Field>
        <Field label="Email"><Input type="email" value={form.email} onChange={set("email")} /></Field>
      </div>
      <Field label="Relación">
        <Select value={form.relacion} onChange={set("relacion")}>
          <option value="padre">Padre</option>
          <option value="madre">Madre</option>
          <option value="tutor">Tutor</option>
        </Select>
      </Field>
      {error && <div className="ax-badge ax-badge-error" style={{ display: "block" }}>{error}</div>}
      <div className="ax-acciones" style={{ justifyContent: "flex-end" }}>
        <Button variante="ghost" onClick={onCancel}>Cancelar</Button>
        <Button variante="primary" type="submit" disabled={saving}>{saving ? "Guardando…" : "Guardar"}</Button>
      </div>
    </form>
  );
}

function CuentaPicker({ profiles, onSelect, onClose }) {
  const [search, setSearch] = useState("");
  const q = search.trim().toLowerCase();
  const filtrados = (profiles || []).filter((p) =>
    !q || `${p.nombre || ""} ${p.email || ""}`.toLowerCase().includes(q)
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <SearchField value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar por nombre o correo…" />
      <div className="ax-lista" style={{ maxHeight: 300, overflow: "auto" }}>
        {filtrados.length === 0 ? (
          <p className="ax-sub">Ninguna cuenta coincide.</p>
        ) : filtrados.map((p) => (
          <div className="ax-fila" key={p.id}>
            <div className="ax-aparecer">
              <div className="ax-nombre">{p.nombre || "(sin nombre)"}</div>
              <div className="ax-sub">{p.email || p.id.slice(0, 8)}</div>
            </div>
            <Button variante="primary" onClick={() => onSelect(p.id)}>Vincular</Button>
          </div>
        ))}
      </div>
      <div className="ax-acciones" style={{ justifyContent: "flex-end" }}>
        <Button variante="ghost" onClick={onClose}>Cancelar</Button>
      </div>
    </div>
  );
}

export default function AdminTutores({ embedded }) {
  const [tutores, setTutores] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [conteos, setConteos] = useState({});
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editTutor, setEditTutor] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [linkTarget, setLinkTarget] = useState(null);

  useEffect(() => { loadAll(); }, []);

  async function loadAll() {
    setLoading(true);
    const [{ data: tuts }, { data: profs }, { data: vinculos }] = await Promise.all([
      supabase.from("tutores").select("*").order("apellidos", { ascending: true }),
      supabase.rpc("get_all_profiles"),
      supabase.from("alumno_tutor").select("tutor_id").eq("estado", "activo"),
    ]);
    setTutores(tuts || []);
    setProfiles(profs || []);
    const c = {};
    (vinculos || []).forEach((v) => { c[v.tutor_id] = (c[v.tutor_id] || 0) + 1; });
    setConteos(c);
    setLoading(false);
  }

  const perfilPorId = Object.fromEntries(profiles.map((p) => [p.id, p]));

  const filtrados = tutores.filter((t) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return `${t.nombre} ${t.apellidos}`.toLowerCase().includes(q)
      || (t.telefono || "").includes(q)
      || (t.email || "").toLowerCase().includes(q);
  });

  async function handleSave(form) {
    if (editTutor) {
      const { error } = await supabase.from("tutores").update(form).eq("id", editTutor.id);
      if (error) return { error: error.message };
    } else {
      const { error } = await supabase.from("tutores").insert(form);
      if (error) return { error: error.message };
    }
    setShowForm(false);
    setEditTutor(null);
    await loadAll();
    return {};
  }

  async function handleDelete() {
    if (!deleteTarget) return;
    await supabase.from("tutores").delete().eq("id", deleteTarget.id);
    setDeleteTarget(null);
    await loadAll();
  }

  async function handleLink(profileId) {
    if (!linkTarget) return;
    await supabase.from("tutores").update({ profile_id: profileId }).eq("id", linkTarget.id);
    // La cuenta debe quedar con rol tutor y aprobada para que el portal le abra.
    const perfil = perfilPorId[profileId];
    if (perfil && perfil.rol !== "admin" && perfil.rol !== "profesor") {
      await supabase.from("profiles").update({ rol: "tutor", estado_acceso: "aprobado" }).eq("id", profileId);
    }
    setLinkTarget(null);
    await loadAll();
  }

  async function handleUnlink(tutor) {
    await supabase.from("tutores").update({ profile_id: null }).eq("id", tutor.id);
    await loadAll();
  }

  const contenido = (
    <Page
      eyebrow="Personas"
      titulo="Tutores"
      descripcion="Tutores de los alumnos, con o sin cuenta. Vincula una cuenta para dar acceso a su portal."
      acciones={
        <Button variante="primary" icono={Plus} onClick={() => { setEditTutor(null); setShowForm(true); }}>
          Nuevo tutor
        </Button>
      }
    >
      <div className="ax-acciones" style={{ justifyContent: "space-between" }}>
        <SearchField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar tutor…"
          style={{ flex: "1 1 240px", maxWidth: 340 }}
        />
        <span className="ax-sub">{filtrados.length} tutores</span>
      </div>

      {loading ? (
        <p className="ax-sub">Cargando…</p>
      ) : filtrados.length === 0 ? (
        <EmptyState icono={Users} titulo="Sin tutores">
          {tutores.length === 0 ? "Aún no hay tutores registrados." : "Ningún tutor coincide con la búsqueda."}
        </EmptyState>
      ) : (
        <div className="ax-lista">
          {filtrados.map((t) => {
            const perfil = t.profile_id ? perfilPorId[t.profile_id] : null;
            return (
              <Card key={t.id}>
                <div className="ax-fila">
                  <span className="ax-avatar">{(t.nombre || "?").slice(0, 1).toUpperCase()}</span>
                  <div className="ax-aparecer">
                    <div className="ax-nombre">{t.nombre} {t.apellidos}</div>
                    <div className="ax-sub">{t.telefono}{t.email ? ` · ${t.email}` : ""}</div>
                  </div>
                  <Badge tone="accent">{RELACION_LABEL[t.relacion] || t.relacion}</Badge>
                  <Badge tone="neutral">{conteos[t.id] || 0} {(conteos[t.id] || 0) === 1 ? "alumno" : "alumnos"}</Badge>
                  <div className="ax-acciones">
                    <Button variante="ghost" icono={Pencil} title="Editar" onClick={() => { setEditTutor(t); setShowForm(true); }} />
                    <Button variante="ghost" icono={Trash2} title="Eliminar" onClick={() => setDeleteTarget(t)} />
                  </div>
                </div>
                <div className="ax-acciones" style={{ marginTop: 12, justifyContent: "space-between" }}>
                  <span className="ax-sub">
                    {perfil ? `Cuenta: ${perfil.nombre || perfil.email || "vinculada"}` : "Sin cuenta vinculada"}
                  </span>
                  {perfil ? (
                    <Button variante="ghost" icono={Unlink} onClick={() => handleUnlink(t)}>Quitar vínculo</Button>
                  ) : (
                    <Button variante="secondary" icono={Link2} onClick={() => setLinkTarget(t)}>Vincular cuenta</Button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {showForm && (
        <Modal titulo={editTutor ? "Editar tutor" : "Nuevo tutor"} onClose={() => { setShowForm(false); setEditTutor(null); }}>
          <TutorForm initial={editTutor || undefined} onSave={handleSave} onCancel={() => { setShowForm(false); setEditTutor(null); }} />
        </Modal>
      )}

      {deleteTarget && (
        <Modal titulo="Eliminar tutor" onClose={() => setDeleteTarget(null)}>
          <p className="ax-sub" style={{ margin: "0 0 18px" }}>
            ¿Eliminar a {deleteTarget.nombre} {deleteTarget.apellidos}? Se eliminará de todos los alumnos asociados.
          </p>
          <div className="ax-acciones" style={{ justifyContent: "flex-end" }}>
            <Button variante="ghost" onClick={() => setDeleteTarget(null)}>Cancelar</Button>
            <Button variante="primary" icono={Trash2} onClick={handleDelete}>Eliminar</Button>
          </div>
        </Modal>
      )}

      {linkTarget && (
        <Modal titulo={`Vincular cuenta a ${linkTarget.nombre} ${linkTarget.apellidos}`} onClose={() => setLinkTarget(null)}>
          <CuentaPicker profiles={profiles} onSelect={handleLink} onClose={() => setLinkTarget(null)} />
        </Modal>
      )}
    </Page>
  );

  if (embedded) return contenido;
  return <AdminLayout active="tutores">{contenido}</AdminLayout>;
}
