// src/pages/admin/AdminAlumnos.jsx
// Panel de alumnos: lista, búsqueda, crear/editar/eliminar.
import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Plus, Pencil, Trash2, Archive, RotateCcw } from "lucide-react";
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
  // Con cuenta, la identidad manda desde `profiles` (un trigger la copia al
  // expediente); aquí solo se editan nivel y datos médicos.
  const esCuenta = isEdit ? !!initial?.profile_id : (!isManual && !!form.id);
  const identidadDisabled = { disabled: esCuenta };

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

      {esCuenta && (
        <p className="ax-sub" style={{ margin: 0 }}>
          Su identidad se edita en la cuenta (Cuentas); aquí solo el nivel y los datos médicos.
        </p>
      )}

      <div style={{ display: "grid", gridTemplateColumns: GRID_FORM, gap: 12 }}>
        <Field label="Nombre"><Input value={form.nombre} onChange={set("nombre")} required {...identidadDisabled} /></Field>
        <Field label="Apellidos"><Input value={form.apellidos} onChange={set("apellidos")} required {...identidadDisabled} /></Field>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: GRID_FORM, gap: 12 }}>
        <Field label="Fecha de nacimiento"><Input type="date" value={form.fecha_nacimiento} onChange={set("fecha_nacimiento")} required {...identidadDisabled} /></Field>
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
        <Field label="Email"><Input type="email" value={form.email} onChange={set("email")} {...identidadDisabled} /></Field>
        <Field label="Teléfono"><Input value={form.telefono} onChange={set("telefono")} {...identidadDisabled} /></Field>
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
  const [mostrarArchivados, setMostrarArchivados] = useState(false);

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

  const profilesById = useMemo(
    () => new Map(profiles.map((p) => [p.id, p])),
    [profiles]
  );
  // El correo del alumno con cuenta vive en `profiles` (el expediente lo deja en
  // NULL); el de los alumnos manuales, sin cuenta, solo está en `alumnos`.
  const emailDe = (a) => profilesById.get(a.profile_id || a.id)?.email || a.email || "";

  const filtrados = alumnos.filter((a) => {
    if (!!a.archivado_en !== mostrarArchivados) return false;
    if (filtroNivel !== "todos" && a.nivel !== filtroNivel) return false;
    if (busqueda) {
      const q = busqueda.toLowerCase();
      if (!`${a.nombre} ${a.apellidos} ${emailDe(a)}`.toLowerCase().includes(q)) return false;
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

  // Anula la cuenta de login (no borra `profiles`, para no perder el correo).
  async function anularCuenta(alumno, estado = "rechazado") {
    const pid = alumno.profile_id || alumno.id;
    if (!pid) return;
    await supabase.from("profiles").update({ estado_acceso: estado }).eq("id", pid);
  }

  // Antes de decidir archivar vs eliminar, cuenta el historial que obliga a
  // conservar la ficha (cargos) y lo que se llevaría un borrado duro.
  async function abrirEliminar(a) {
    setDeleteTarget({ alumno: a, cargando: true, guardando: false, error: null, cargos: 0, sesiones: 0, resultados: 0 });
    const [cg, ses, res] = await Promise.all([
      supabase.from("cargos").select("id", { count: "exact", head: true }).eq("alumno_id", a.id),
      supabase.from("taller_sesiones").select("id", { count: "exact", head: true }).eq("alumno_id", a.id),
      supabase.from("resultados").select("id", { count: "exact", head: true }).eq("user_id", a.id),
    ]);
    setDeleteTarget((t) => (t && t.alumno.id === a.id
      ? { ...t, cargando: false, cargos: cg.count || 0, sesiones: ses.count || 0, resultados: res.count || 0 }
      : t));
  }

  async function handleArchivar() {
    const a = deleteTarget.alumno;
    setDeleteTarget((t) => ({ ...t, guardando: true, error: null }));
    const { error } = await supabase
      .from("alumnos").update({ archivado_en: new Date().toISOString() }).eq("id", a.id);
    if (error) { setDeleteTarget((t) => ({ ...t, guardando: false, error: error.message || "No se pudo archivar." })); return; }
    // Fuera de los flujos activos: vínculos inactivos y cuenta anulada.
    await supabase.from("alumno_tutor").update({ estado: "rechazado" }).eq("alumno_id", a.id);
    await anularCuenta(a, "rechazado");
    setDeleteTarget(null);
    await loadAlumnos();
  }

  async function handleDelete() {
    const a = deleteTarget.alumno;
    setDeleteTarget((t) => ({ ...t, guardando: true, error: null }));
    // `resultados` no tiene FK: se limpian a mano o quedarían huérfanos.
    const { error: rerr } = await supabase.from("resultados").delete().eq("user_id", a.id);
    if (rerr) { setDeleteTarget((t) => ({ ...t, guardando: false, error: `No se pudieron borrar sus resultados: ${rerr.message}` })); return; }
    const { error } = await supabase.from("alumnos").delete().eq("id", a.id);
    if (error) { setDeleteTarget((t) => ({ ...t, guardando: false, error: error.message || "No se pudo eliminar." })); return; }
    await anularCuenta(a, "rechazado");
    setDeleteTarget(null);
    await loadAlumnos();
  }

  async function handleRestaurar(a) {
    await supabase.from("alumnos").update({ archivado_en: null }).eq("id", a.id);
    const pid = a.profile_id || a.id;
    await supabase.from("profiles").update({ estado_acceso: "pendiente" }).eq("id", pid);
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
          <Button variante={mostrarArchivados ? "primary" : "subtle"} icono={Archive} onClick={() => setMostrarArchivados((v) => !v)}>
            {mostrarArchivados ? "Ver activos" : "Ver archivados"}
          </Button>
        </div>
      </div>

      {loading ? (
        <p className="ax-sub">Cargando…</p>
      ) : filtrados.length === 0 ? (
        <EmptyState icono={GraduationCap} titulo={mostrarArchivados ? "Sin archivados" : "Sin alumnos"}>
          {mostrarArchivados
            ? "No hay alumnos archivados."
            : alumnos.length === 0 ? "Aún no hay alumnos registrados." : "Ningún alumno coincide con la búsqueda."}
        </EmptyState>
      ) : (
        <div className="ax-lista">
          {filtrados.map((a) => (
            <Card key={a.id}>
              <div className="ax-fila">
                <span className="ax-avatar">{(a.nombre || "?").slice(0, 1).toUpperCase()}</span>
                <div className="ax-aparecer">
                  <div className="ax-nombre">{a.nombre} {a.apellidos}</div>
                  <div className="ax-sub">{emailDe(a) || a.telefono || "Sin contacto"}</div>
                </div>
                <Badge tone="accent">{NIVEL_LABEL[a.nivel] || a.nivel}</Badge>
                {a.archivado_en && <Badge tone="neutral">Archivado</Badge>}
                <span className="ax-sub" style={{ whiteSpace: "nowrap" }}>{fmtDate(a.created_at)}</span>
                <div className="ax-acciones">
                  <Button variante="ghost" icono={Pencil} title="Editar" onClick={() => { setEditAlumno(a); setShowForm(true); }} />
                  {a.archivado_en ? (
                    <Button variante="ghost" icono={RotateCcw} title="Restaurar" onClick={() => handleRestaurar(a)} />
                  ) : (
                    <Button variante="ghost" icono={Trash2} title="Eliminar" onClick={() => abrirEliminar(a)} />
                  )}
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
        <Modal
          titulo={deleteTarget.cargando ? "Eliminar alumno" : deleteTarget.cargos > 0 ? "Archivar alumno" : "Eliminar alumno"}
          onClose={() => setDeleteTarget(null)}
        >
          {deleteTarget.cargando ? (
            <p className="ax-sub" style={{ margin: 0 }}>Revisando historial…</p>
          ) : (
            <>
              {deleteTarget.cargos > 0 ? (
                <p className="ax-sub" style={{ margin: "0 0 12px", whiteSpace: "normal" }}>
                  <strong>{deleteTarget.alumno.nombre} {deleteTarget.alumno.apellidos}</strong> tiene{" "}
                  {deleteTarget.cargos} {deleteTarget.cargos === 1 ? "cargo" : "cargos"}. Se archivará: deja de
                  aparecer y se le retira el acceso, pero su historial de cobro se conserva.
                </p>
              ) : (
                <p className="ax-sub" style={{ margin: "0 0 12px", whiteSpace: "normal" }}>
                  <strong>{deleteTarget.alumno.nombre} {deleteTarget.alumno.apellidos}</strong> no tiene cargos. Se
                  eliminará permanentemente junto con {deleteTarget.sesiones}{" "}
                  {deleteTarget.sesiones === 1 ? "sesión" : "sesiones"} de taller y {deleteTarget.resultados}{" "}
                  {deleteTarget.resultados === 1 ? "resultado" : "resultados"} de cuestionario. Esta acción no se puede deshacer.
                </p>
              )}
              {deleteTarget.error && (
                <div className="ax-badge ax-badge-error" style={{ display: "block", marginBottom: 12 }}>{deleteTarget.error}</div>
              )}
              <div className="ax-acciones" style={{ justifyContent: "flex-end" }}>
                <Button variante="ghost" onClick={() => setDeleteTarget(null)}>Cancelar</Button>
                {deleteTarget.cargos > 0 ? (
                  <Button variante="primary" icono={Archive} disabled={deleteTarget.guardando} onClick={handleArchivar}>
                    {deleteTarget.guardando ? "Archivando…" : "Archivar"}
                  </Button>
                ) : (
                  <Button variante="primary" icono={Trash2} disabled={deleteTarget.guardando} onClick={handleDelete}>
                    {deleteTarget.guardando ? "Eliminando…" : "Eliminar"}
                  </Button>
                )}
              </div>
            </>
          )}
        </Modal>
      )}
    </Page>
  );

  if (embedded) return contenido;
  return <AdminLayout active="alumnos">{contenido}</AdminLayout>;
}
