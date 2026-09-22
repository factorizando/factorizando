// src/pages/admin/AdminAlumnos.jsx
// Panel de alumnos: lista, búsqueda, crear/editar/eliminar.
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Plus, Pencil, Trash2 } from "lucide-react";
import { supabase } from "../../lib/supabase";
import AdminLayout from "../../components/admin/AdminLayout.jsx";
import {
  Page, Card, Badge, Button, SearchField, Field, Input, Select, Modal, EmptyState,
} from "../../components/admin/ui.jsx";
import { GRID_FORM } from "../../components/admin/layout.js";

const NIVEL_LABEL = { primaria: "Primaria", secundaria: "Secundaria", prepa: "Preparatoria", universidad: "Universidad" };

function fmtDate(iso) {
  if (!iso) return "—";
  const [y, m, d] = iso.split("T")[0].split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("es-MX", { day: "2-digit", month: "short", year: "numeric" });
}

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
    if (result?.error) { setError(result.error); setSaving(false); return; }
    setSaving(false);
  }

  const profilesSinAlumno = (profiles || []).filter((p) => !p.ya_es_alumno || isEdit);

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {!isEdit && (
        <Field label="Buscar usuario registrado">
          <Select value={selectedProfile} onChange={handleProfileSelect} required={!isManual}>
            <option value="">Seleccionar usuario…</option>
            {profilesSinAlumno.map((p) => (
              <option key={p.id} value={p.id}>{p.nombre || p.email} ({p.email || p.id.slice(0, 8)})</option>
            ))}
            <option value="manual">— Crear manualmente (sin cuenta) —</option>
          </Select>
        </Field>
      )}

      <div style={{ display: "grid", gridTemplateColumns: GRID_FORM, gap: 12 }}>
        <Field label="Nombre"><Input value={form.nombre} onChange={set("nombre")} required /></Field>
        <Field label="Apellidos"><Input value={form.apellidos} onChange={set("apellidos")} required /></Field>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: GRID_FORM, gap: 12 }}>
        <Field label="Fecha de nacimiento"><Input type="date" value={form.fecha_nacimiento} onChange={set("fecha_nacimiento")} required /></Field>
        <Field label="Nivel">
          <Select value={form.nivel} onChange={set("nivel")}>
            <option value="primaria">Primaria</option>
            <option value="secundaria">Secundaria</option>
            <option value="prepa">Preparatoria</option>
            <option value="universidad">Universidad</option>
          </Select>
        </Field>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: GRID_FORM, gap: 12 }}>
        <Field label="Email"><Input type="email" value={form.email} onChange={set("email")} /></Field>
        <Field label="Teléfono"><Input value={form.telefono} onChange={set("telefono")} /></Field>
      </div>
      <Field label="Alergias"><Input value={form.alergias} onChange={set("alergias")} placeholder="(opcional)" /></Field>
      <Field label="Condiciones médicas"><Input value={form.condiciones_medicas} onChange={set("condiciones_medicas")} placeholder="(opcional)" /></Field>
      <Field label="Notas importantes"><Input value={form.notas_importantes} onChange={set("notas_importantes")} placeholder="(opcional)" /></Field>

      {error && <div className="ax-badge ax-badge-error" style={{ display: "block" }}>{error}</div>}

      <div className="ax-acciones" style={{ justifyContent: "flex-end" }}>
        <Button variante="ghost" onClick={onCancel}>Cancelar</Button>
        <Button variante="primary" type="submit" disabled={saving}>{saving ? "Guardando…" : isEdit ? "Guardar cambios" : "Guardar"}</Button>
      </div>
    </form>
  );
}

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
    setProfiles((p.data || []).map((x) => ({ ...x, ya_es_alumno: alumnoIds.has(x.id) })));
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

  const NIVELES = ["todos", "primaria", "secundaria", "prepa", "universidad"];

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
    if (error) console.error(error);
    setDeleteTarget(null);
    await loadAlumnos();
  }

  const contenido = (
    <Page
      eyebrow="Personas"
      titulo="Alumnos"
      descripcion="Altas manuales (sin cuenta) y alumnos registrados."
      acciones={
        <Button variante="primary" icono={Plus} onClick={() => { setEditAlumno(null); setShowForm(true); }}>
          Nuevo alumno
        </Button>
      }
    >
      <div className="ax-acciones" style={{ justifyContent: "space-between" }}>
        <SearchField
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar alumno…"
          style={{ flex: "1 1 240px", maxWidth: 320 }}
        />
        <div className="ax-acciones">
          {NIVELES.map((n) => (
            <Button key={n} variante={filtroNivel === n ? "primary" : "subtle"} onClick={() => setFiltroNivel(n)}>
              {n === "todos" ? "Todos" : NIVEL_LABEL[n] || n}
            </Button>
          ))}
        </div>
      </div>

      {loading ? (
        <p className="ax-sub">Cargando…</p>
      ) : filtrados.length === 0 ? (
        <EmptyState icono={GraduationCap} titulo="Sin alumnos">
          {alumnos.length === 0 ? "Aún no hay alumnos registrados." : "Ningún alumno coincide con la búsqueda."}
        </EmptyState>
      ) : (
        <div className="ax-lista">
          {filtrados.map((a) => (
            <Card key={a.id}>
              <div className="ax-fila">
                <span className="ax-avatar">{(a.nombre || "?").slice(0, 1).toUpperCase()}</span>
                <div className="ax-aparecer">
                  <div className="ax-nombre">{a.nombre} {a.apellidos}</div>
                  <div className="ax-sub">{a.email || a.telefono || "Sin contacto"}</div>
                </div>
                <Badge tone="accent">{NIVEL_LABEL[a.nivel] || a.nivel}</Badge>
                <span className="ax-sub" style={{ whiteSpace: "nowrap" }}>{fmtDate(a.created_at)}</span>
                <div className="ax-acciones">
                  <Button variante="ghost" icono={Pencil} title="Editar" onClick={() => { setEditAlumno(a); setShowForm(true); }} />
                  <Button variante="ghost" icono={Trash2} title="Eliminar" onClick={() => setDeleteTarget(a)} />
                </div>
              </div>
              <div className="ax-acciones" style={{ marginTop: 10 }}>
                <Button variante="secondary" onClick={() => navigate(`/admin/alumnos/${a.id}`)}>
                  Abrir ficha
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {showForm && (
        <Modal titulo={editAlumno ? "Editar alumno" : "Nuevo alumno"} ancho={560} onClose={() => { setShowForm(false); setEditAlumno(null); }}>
          <AlumnoForm
            profiles={profiles}
            initial={editAlumno || null}
            onSave={editAlumno ? handleEdit : handleCreate}
            onCancel={() => { setShowForm(false); setEditAlumno(null); }}
          />
        </Modal>
      )}

      {deleteTarget && (
        <Modal titulo="Eliminar alumno" onClose={() => setDeleteTarget(null)}>
          <p className="ax-sub" style={{ margin: "0 0 18px" }}>
            ¿Eliminar a "{deleteTarget.nombre} {deleteTarget.apellidos}"? Esta acción no se puede deshacer.
          </p>
          <div className="ax-acciones" style={{ justifyContent: "flex-end" }}>
            <Button variante="ghost" onClick={() => setDeleteTarget(null)}>Cancelar</Button>
            <Button variante="primary" icono={Trash2} onClick={handleDelete}>Eliminar</Button>
          </div>
        </Modal>
      )}
    </Page>
  );

  if (embedded) return contenido;
  return <AdminLayout active="alumnos">{contenido}</AdminLayout>;
}
