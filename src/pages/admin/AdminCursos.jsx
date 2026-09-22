// src/pages/admin/AdminCursos.jsx
// Panel de administración de cursos: catálogo, grupos, planes de precio, tarifas de asesoría.
//
// En el design system (tema claro): ningún hex a mano —todo sale de tokens
// `--fx-*`—, los estados llevan icono además del color (nada se distingue solo
// por matiz) y los controles usan las primitivas de `ui.jsx` y lucide.

import { useState, useEffect } from "react";
import {
  Plus, Pencil, Trash2, BookOpen, CalendarRange, CircleCheck, CircleX,
  Clock, Users, Receipt,
} from "lucide-react";
import { supabase } from "../../lib/supabase";
import AdminLayout from "../../components/admin/AdminLayout.jsx";
import {
  Page, Card, Badge, Button, Field, Input, Select, Modal, EmptyState,
} from "../../components/admin/ui.jsx";
import { GRID_FORM } from "../../components/admin/layout.js";

function fmtMoney(n) { return `$${Number(n).toLocaleString("es-MX", { minimumFractionDigits: 2 })}`; }

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
      <Field label="Nombre">
        <Input value={form.nombre} onChange={set("nombre")} placeholder="Curso de Álgebra" required />
      </Field>
      <Field label="Descripción">
        <Input value={form.descripcion} onChange={set("descripcion")} placeholder="(opcional)" />
      </Field>
      <div style={{ display: "grid", gridTemplateColumns: GRID_FORM, gap: 12 }}>
        <Field label="Tipo">
          <Select value={form.tipo} onChange={set("tipo")}>
            <option value="curso">Curso</option>
            <option value="asesoria">Asesoría</option>
          </Select>
        </Field>
        {form.tipo !== "asesoria" && (
          <Field label="Modalidad de fechas">
            <Select value={form.modalidad_fechas} onChange={set("modalidad_fechas")}>
              <option value="libre">Libre (sin cohortes)</option>
              <option value="fija">Fija (con generaciones)</option>
            </Select>
          </Field>
        )}
      </div>
      <Field label="Activo">
        <Select value={form.activo ? "si" : "no"} onChange={(e) => setForm((f) => ({ ...f, activo: e.target.value === "si" }))}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </Select>
      </Field>
      <div className="ax-acciones" style={{ justifyContent: "flex-end", marginTop: 8 }}>
        <Button variante="ghost" onClick={onCancel}>Cancelar</Button>
        <Button variante="primary" type="submit" disabled={saving}>{saving ? "Guardando…" : "Guardar"}</Button>
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
      <Field label="Nombre del grupo">
        <Input value={form.nombre} onChange={set("nombre")} placeholder="Generación Ago-Dic 2026" required />
      </Field>
      <div style={{ display: "grid", gridTemplateColumns: GRID_FORM, gap: 12 }}>
        <Field label="Fecha inicio"><Input type="date" value={form.fecha_inicio} onChange={set("fecha_inicio")} required /></Field>
        <Field label="Fecha fin"><Input type="date" value={form.fecha_fin} onChange={set("fecha_fin")} required /></Field>
      </div>
      <Field label="Cupo máximo"><Input type="number" min="1" value={form.cupo_max} onChange={set("cupo_max")} required /></Field>
      <div className="ax-acciones" style={{ justifyContent: "flex-end", marginTop: 4 }}>
        <Button variante="ghost" onClick={onCancel}>Cancelar</Button>
        <Button variante="primary" type="submit" disabled={saving}>{saving ? "Guardando…" : "Guardar"}</Button>
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
          <Select value={form.tipo_cobro} onChange={set("tipo_cobro")}>
            <option value="semanal">Semanal</option>
            <option value="mensual">Mensual</option>
            <option value="unico">Único</option>
          </Select>
        </Field>
      </div>
      <div style={{ flex: "1 1 120px" }}>
        <Field label="Monto">
          <Input type="number" step="0.01" min="0" value={form.monto} onChange={set("monto")} required />
        </Field>
      </div>
      <div className="ax-acciones" style={{ paddingBottom: 2 }}>
        <Button variante="ghost" onClick={onCancel}>Cancelar</Button>
        <Button variante="primary" type="submit" disabled={saving || !form.monto}>Agregar</Button>
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
          <Select value={form.duracion_bloque} onChange={set("duracion_bloque")}>
            <option value="1h">1 hora</option>
            <option value="2h">2 horas</option>
          </Select>
        </Field>
      </div>
      <div style={{ flex: "1 1 120px" }}>
        <Field label="Tarifa individual">
          <Input type="number" step="0.01" min="0" value={form.tarifa_individual} onChange={set("tarifa_individual")} required />
        </Field>
      </div>
      <div className="ax-acciones" style={{ paddingBottom: 2 }}>
        <Button variante="ghost" onClick={onCancel}>Cancelar</Button>
        <Button variante="primary" type="submit" disabled={saving || !form.tarifa_individual}>Agregar</Button>
      </div>
    </form>
  );
}

// ── Sección dentro del detalle ───────────────────────────────────────────────
function Seccion({ titulo, count, onAdd, children }) {
  return (
    <div>
      <div className="ax-fila" style={{ justifyContent: "space-between", marginBottom: 8 }}>
        <span className="ax-eyebrow">{titulo} · {count}</span>
        <Button variante="subtle" icono={Plus} onClick={onAdd}>Agregar</Button>
      </div>
      <div className="ax-lista">{children}</div>
    </div>
  );
}

function SubFila({ children, onDelete }) {
  return (
    <div className="ax-fila" style={{
      background: "var(--fx-surface)", border: "1px solid var(--fx-border)",
      borderRadius: "var(--fx-radius-md)", padding: "10px 14px",
    }}>
      <div className="ax-aparecer">{children}</div>
      <Button variante="ghost" icono={Trash2} title="Eliminar" onClick={onDelete} />
    </div>
  );
}

// ── Detalle de curso (sub-secciones) ─────────────────────────────────────────
function CursoDetalle({ curso, onEdit, onDelete }) {
  const [grupos, setGrupos] = useState([]);
  const [planes, setPlanes] = useState([]);
  const [tarifas, setTarifas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showGrupo, setShowGrupo] = useState(false);
  const [showPlan, setShowPlan] = useState(false);
  const [showTarifa, setShowTarifa] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(null);

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
  async function handleAddPlan(form) {
    await supabase.from("planes_precio").insert({ ...form, curso_id: curso.id });
    setShowPlan(false);
    await loadSub();
  }
  async function handleAddTarifa(form) {
    await supabase.from("tarifas_asesoria").insert({ ...form, curso_id: curso.id });
    setShowTarifa(false);
    await loadSub();
  }

  async function confirmDeleteAction() {
    if (!confirmDelete) return;
    const table = confirmDelete.type === "grupo" ? "grupos" : confirmDelete.type === "plan" ? "planes_precio" : "tarifas_asesoria";
    await supabase.from(table).delete().eq("id", confirmDelete.id);
    setConfirmDelete(null);
    await loadSub();
  }

  if (!curso) {
    return (
      <EmptyState icono={BookOpen} titulo="Selecciona un curso">
        Elige un curso de la lista para ver sus grupos, planes y tarifas.
      </EmptyState>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div className="ax-fila" style={{ justifyContent: "space-between", alignItems: "flex-start" }}>
        <div className="ax-aparecer">
          <h3 className="ax-card-tit" style={{ margin: 0 }}>{curso.nombre}</h3>
          <div className="ax-acciones" style={{ marginTop: 8, gap: 6 }}>
            <Badge tone={curso.tipo === "curso" ? "accent" : "neutral"}>{curso.tipo}</Badge>
            {curso.modalidad_fechas && (
              <Badge tone="neutral">modalidad {curso.modalidad_fechas}</Badge>
            )}
            {!curso.activo && <Badge tone="warning" icono={Clock}>inactivo</Badge>}
          </div>
        </div>
        <div className="ax-acciones">
          <Button variante="subtle" icono={Pencil} onClick={() => onEdit(curso)}>Editar</Button>
          <Button variante="ghost" icono={Trash2} onClick={() => onDelete(curso)}>Eliminar</Button>
        </div>
      </div>

      {curso.descripcion && <p className="ax-sub" style={{ margin: 0, whiteSpace: "normal" }}>{curso.descripcion}</p>}

      {loading ? <p className="ax-sub">Cargando…</p> : (
        <>
          {curso.modalidad_fechas === "fija" && (
            <Seccion titulo="Grupos" count={grupos.length} onAdd={() => setShowGrupo(true)}>
              {grupos.length === 0 ? (
                <p className="ax-sub" style={{ margin: 0 }}>Sin grupos registrados.</p>
              ) : grupos.map((g) => (
                <SubFila key={g.id} onDelete={() => setConfirmDelete({ type: "grupo", id: g.id })}>
                  <span className="ax-nombre" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                    <CalendarRange size={16} aria-hidden="true" />{g.nombre}
                  </span>
                  <div className="ax-sub" style={{ marginTop: 2 }}>
                    {g.fecha_inicio} → {g.fecha_fin} · Cupo: {g.cupo_max}
                  </div>
                </SubFila>
              ))}
            </Seccion>
          )}

          <Seccion titulo="Planes de precio" count={planes.length} onAdd={() => setShowPlan(true)}>
            {planes.length === 0 ? (
              <p className="ax-sub" style={{ margin: 0 }}>Sin planes registrados.</p>
            ) : planes.map((p) => (
              <SubFila key={p.id} onDelete={() => setConfirmDelete({ type: "plan", id: p.id })}>
                <span className="ax-nombre" style={{ textTransform: "capitalize" }}>{p.tipo_cobro}</span>
                <span style={{ marginLeft: 8, color: "var(--fx-text-heading)", fontWeight: 700 }}>{fmtMoney(p.monto)}</span>
                <div style={{ marginTop: 4 }}>
                  <Badge tone={p.activo ? "success" : "neutral"} icono={p.activo ? CircleCheck : CircleX}>
                    {p.activo ? "activo" : "inactivo"}
                  </Badge>
                </div>
              </SubFila>
            ))}
          </Seccion>

          {curso.tipo === "asesoria" && (
            <Seccion titulo="Tarifas de asesoría" count={tarifas.length} onAdd={() => setShowTarifa(true)}>
              {tarifas.length === 0 ? (
                <p className="ax-sub" style={{ margin: 0 }}>Sin tarifas registradas.</p>
              ) : tarifas.map((t) => (
                <SubFila key={t.id} onDelete={() => setConfirmDelete({ type: "tarifa", id: t.id })}>
                  <span className="ax-nombre">Bloque {t.duracion_bloque}</span>
                  <span style={{ marginLeft: 8, color: "var(--fx-text-heading)", fontWeight: 700 }}>{fmtMoney(t.tarifa_individual)}</span>
                  <span className="ax-sub" style={{ marginLeft: 6 }}>por persona</span>
                </SubFila>
              ))}
            </Seccion>
          )}
        </>
      )}

      {showGrupo && (
        <Modal titulo="Nuevo grupo" onClose={() => setShowGrupo(false)}>
          <GrupoForm onSave={handleAddGrupo} onCancel={() => setShowGrupo(false)} />
        </Modal>
      )}
      {showPlan && (
        <Modal titulo="Nuevo plan de precio" onClose={() => setShowPlan(false)}>
          <PlanForm onSave={handleAddPlan} onCancel={() => setShowPlan(false)} />
        </Modal>
      )}
      {showTarifa && (
        <Modal titulo="Nueva tarifa" onClose={() => setShowTarifa(false)}>
          <TarifaForm onSave={handleAddTarifa} onCancel={() => setShowTarifa(false)} />
        </Modal>
      )}
      {confirmDelete && (
        <Modal titulo={`Eliminar ${confirmDelete.type}`} onClose={() => setConfirmDelete(null)}>
          <p className="ax-sub" style={{ margin: "0 0 18px" }}>
            {confirmDelete.type === "grupo"
              ? "¿Eliminar este grupo?"
              : confirmDelete.type === "plan"
                ? "¿Eliminar este plan de precio?"
                : "¿Eliminar esta tarifa?"}
          </p>
          <div className="ax-acciones" style={{ justifyContent: "flex-end" }}>
            <Button variante="ghost" onClick={() => setConfirmDelete(null)}>Cancelar</Button>
            <Button variante="primary" icono={Trash2} onClick={confirmDeleteAction}>Eliminar</Button>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ── Fila de curso ────────────────────────────────────────────────────────────
function CursoRow({ curso, onSelect, selected, grupos, planes }) {
  return (
    <Card
      style={{
        cursor: "pointer",
        borderColor: selected ? "var(--fx-primary-400)" : undefined,
        background: selected ? "var(--fx-primary-50)" : undefined,
      }}
    >
      <div onClick={() => onSelect(curso)}>
        <div className="ax-fila">
          <div className="ax-aparecer">
            <div className="ax-nombre">{curso.nombre}</div>
          </div>
          <Badge tone={curso.tipo === "curso" ? "accent" : "neutral"}>{curso.tipo}</Badge>
          {!curso.activo && <Badge tone="warning" icono={Clock}>off</Badge>}
        </div>
        <div className="ax-acciones" style={{ marginTop: 10, gap: 16 }}>
          <span className="ax-sub" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <Users size={14} aria-hidden="true" /> {grupos.length} grupos
          </span>
          <span className="ax-sub" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <Receipt size={14} aria-hidden="true" /> {planes.length} planes
          </span>
        </div>
      </div>
    </Card>
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
  const [deleteCurso, setDeleteCurso] = useState(null);

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

  async function handleDeleteCurso() {
    if (!deleteCurso) return;
    await supabase.from("cursos").delete().eq("id", deleteCurso.id);
    setDeleteCurso(null);
    setSelected(null);
    await loadAll();
  }

  const contenido = (
    <Page
      eyebrow="Contenido"
      titulo="Cursos"
      descripcion="Catálogo de cursos y asesorías, con sus grupos, planes de precio y tarifas."
      acciones={
        <Button variante="primary" icono={Plus} onClick={() => { setEditCurso(null); setShowForm(true); }}>
          Nuevo curso
        </Button>
      }
    >
      <div style={{ display: "flex", gap: 20, minHeight: 400, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 280px", maxWidth: 360, display: "flex", flexDirection: "column", gap: 12 }}>
          {loading ? (
            <p className="ax-sub">Cargando…</p>
          ) : cursos.length === 0 ? (
            <EmptyState icono={BookOpen} titulo="Sin cursos">
              Aún no hay cursos registrados.
            </EmptyState>
          ) : cursos.map((c) => (
            <CursoRow key={c.id} curso={c} onSelect={setSelected} selected={selected?.id === c.id}
              grupos={gruposMap[c.id] || []} planes={planesMap[c.id] || []} />
          ))}
        </div>

        <Card style={{ flex: "1 1 320px" }}>
          <CursoDetalle curso={selected} onEdit={handleEdit} onDelete={(curso) => setDeleteCurso(curso)} />
        </Card>
      </div>

      {showForm && (
        <Modal titulo={editCurso ? "Editar curso" : "Nuevo curso"} ancho={560} onClose={() => { setShowForm(false); setEditCurso(null); }}>
          <CursoForm initial={editCurso || undefined} onSave={handleSave} onCancel={() => { setShowForm(false); setEditCurso(null); }} />
        </Modal>
      )}
      {deleteCurso && (
        <Modal titulo="Eliminar curso" onClose={() => setDeleteCurso(null)}>
          <p className="ax-sub" style={{ margin: "0 0 18px" }}>
            ¿Eliminar "{deleteCurso.nombre}"? Todos sus grupos, planes y tarifas se eliminarán también.
          </p>
          <div className="ax-acciones" style={{ justifyContent: "flex-end" }}>
            <Button variante="ghost" onClick={() => setDeleteCurso(null)}>Cancelar</Button>
            <Button variante="primary" icono={Trash2} onClick={handleDeleteCurso}>Eliminar</Button>
          </div>
        </Modal>
      )}
    </Page>
  );

  if (embedded) return contenido;
  return <AdminLayout active="cursos">{contenido}</AdminLayout>;
}
