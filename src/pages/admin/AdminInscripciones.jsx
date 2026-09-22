// src/pages/admin/AdminInscripciones.jsx
// Panel de administración de inscripciones: CRUD completo, gestionar estados.
//
// En el design system (tema claro): tokens `--fx-*`, estados con `BadgeEstado`
// (color + ícono + texto) y primitivas de `ui.jsx`. Sin hex a mano.

import { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, ClipboardList } from "lucide-react";
import { supabase } from "../../lib/supabase";
import AdminLayout from "../../components/admin/AdminLayout.jsx";
import {
  Page, Card, Badge, BadgeEstado, Button, Field, Input, Select, Modal, EmptyState,
} from "../../components/admin/ui.jsx";
import { GRID_FORM } from "../../components/admin/layout.js";
import {
  aFechaISO, desdeFechaISO, sumarDias, sumarMeses,
  lunesDeLaSemana, domingoDeLaSemana, textoPeriodo, conceptoDeCargo,
} from "../../utils/fechas.js";

function fmtDate(iso) {
  if (!iso) return "—";
  const [y, m, d] = iso.split("T")[0].split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("es-MX", {
    day: "2-digit", month: "short", year: "numeric",
  });
}

function ConfirmModal({ title, message, onConfirm, onCancel }) {
  const [saving, setSaving] = useState(false);
  return (
    <Modal titulo={title} onClose={onCancel}>
      <p className="ax-sub" style={{ margin: "0 0 18px", whiteSpace: "normal" }}>{message}</p>
      <div className="ax-acciones" style={{ justifyContent: "flex-end" }}>
        <Button variante="ghost" onClick={onCancel}>Cancelar</Button>
        <Button variante="primary" icono={Trash2} disabled={saving}
          onClick={async () => { setSaving(true); await onConfirm(); }}>
          {saving ? "Eliminando…" : "Eliminar"}
        </Button>
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
  }, [cursoId, isEdit]);

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
        <Select value={alumnoId} onChange={(e) => setAlumnoId(e.target.value)} required>
          <option value="">Seleccionar alumno…</option>
          {alumnos.map((a) => (
            <option key={a.id} value={a.id}>{a.nombre} {a.apellidos}</option>
          ))}
        </Select>
      </Field>

      <Field label="Curso">
        <Select value={cursoId} onChange={(e) => setCursoId(e.target.value)} required>
          <option value="">Seleccionar curso…</option>
          {cursos.filter((c) => c.activo).map((c) => (
            <option key={c.id} value={c.id}>{c.nombre} ({c.tipo})</option>
          ))}
        </Select>
      </Field>

      {grupos.length > 0 && (
        <Field label="Grupo (opcional)">
          <Select value={grupoId} onChange={(e) => setGrupoId(e.target.value)}>
            <option value="">Sin grupo</option>
            {grupos.map((g) => (
              <option key={g.id} value={g.id}>{g.nombre}</option>
            ))}
          </Select>
        </Field>
      )}

      <Field label="Plan de precio">
        <Select value={planId} onChange={(e) => setPlanId(e.target.value)} required>
          <option value="">Seleccionar plan…</option>
          {planesFiltrados.map((p) => (
            <option key={p.id} value={p.id}>{p.tipo_cobro} — ${p.monto}</option>
          ))}
        </Select>
      </Field>

      <Field label="Inicio de clases">
        <Input type="date" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} required={!isEdit} />
      </Field>

      {/* Resumen del primer cobro: qué semana cubre y cuánto se cobra. */}
      {!isEdit && planSel && (
        <div style={{
          background: "var(--fx-surface-sunken)",
          border: `1px solid ${esParcial ? "var(--fx-warning-border)" : "var(--fx-border)"}`,
          borderRadius: "var(--fx-radius-md)", padding: "12px 14px",
          display: "flex", flexDirection: "column", gap: 10,
        }}>
          <div className="ax-acciones" style={{ gap: 8 }}>
            <span className="ax-eyebrow">Primer cargo</span>
            {esSemanal && (
              <span className="ax-sub">Semana {textoPeriodo(periodoInicio, periodoFin)}</span>
            )}
            {esParcial && <Badge tone="warning">Parcial</Badge>}
          </div>

          {esParcial && (
            <p className="ax-sub" style={{ margin: 0, whiteSpace: "normal" }}>
              Entra con la semana empezada. El precio del plan es{" "}
              <strong style={{ color: "var(--fx-text-heading)" }}>${planSel.monto}</strong>; ajusta el monto a lo acordado.
            </p>
          )}

          <div className="ax-acciones" style={{ gap: 8 }}>
            <span className="ax-sub">Monto</span>
            <Input
              type="number" step="0.01" min="0" style={{ maxWidth: 140 }}
              value={montoManual !== "" ? montoManual : planSel.monto}
              onChange={(e) => setMontoManual(e.target.value)}
            />
            {montoManual !== "" && Number(montoManual) !== Number(planSel.monto) && (
              <Button variante="ghost" onClick={() => setMontoManual("")}>usar precio del plan</Button>
            )}
          </div>
        </div>
      )}

      {isEdit && (
        <Field label="Estado">
          <Select value={estado} onChange={(e) => setEstado(e.target.value)}>
            <option value="activa">Activa</option>
            <option value="pausada">Pausada</option>
            <option value="finalizada">Finalizada</option>
            <option value="cancelada">Cancelada</option>
          </Select>
        </Field>
      )}

      {error && <div className="ax-badge ax-badge-error" style={{ display: "block" }}>{error}</div>}

      <div className="ax-acciones" style={{ justifyContent: "flex-end", marginTop: 8 }}>
        <Button variante="ghost" onClick={onCancel}>Cancelar</Button>
        <Button variante="primary" type="submit" disabled={saving || !alumnoId || !cursoId || !planId}>
          {saving ? "Guardando…" : isEdit ? "Guardar cambios" : "Inscribir"}
        </Button>
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
    <Card>
      <div className="ax-fila">
        <div className="ax-aparecer">
          <div className="ax-nombre">
            {alumno ? `${alumno.nombre} ${alumno.apellidos}` : insc.alumno_id.slice(0, 8)}
            <span className="ax-sub" style={{ fontWeight: 400 }}> → {curso?.nombre || "Curso eliminado"}</span>
          </div>
          <div className="ax-sub" style={{ marginTop: 2 }}>
            {plan ? `${plan.tipo_cobro} · $${plan.monto} · ` : ""}{fmtDate(insc.fecha_inscripcion)}
          </div>
        </div>
        <BadgeEstado estado={insc.estado} />
        <div className="ax-acciones">
          <Button variante="ghost" icono={Pencil} title="Editar" onClick={() => onEdit(insc)} />
          <Button variante="ghost" icono={Trash2} title="Eliminar" onClick={() => onDelete(insc)} />
        </div>
      </div>
    </Card>
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
        // Nombra el periodo en vez del tipo de plan: es la primera semana de
        // esta inscripción, así que `inicio` sirve de origen de la numeración.
        concepto: conceptoDeCargo({
          curso: curso?.nombre,
          tipoCobro: plan.tipo_cobro,
          fecha: vencimiento,
          inicioCobros: inicio,
        }),
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

  const contenido = (
    <Page
      eyebrow="Cobranza"
      titulo="Inscripciones"
      descripcion="Altas, cambios de estado y el primer cargo de cada inscripción."
      acciones={
        <Button variante="primary" icono={Plus} onClick={() => { setEditInsc(null); setShowForm(true); }}>
          Nueva inscripción
        </Button>
      }
    >
      <div className="ax-acciones" style={{ justifyContent: "space-between" }}>
        <div className="ax-acciones">
          {["todos", "activa", "pausada", "finalizada", "cancelada"].map((e) => (
            <Button key={e} variante={filtroEstado === e ? "primary" : "subtle"} onClick={() => setFiltroEstado(e)}>
              {e === "todos" ? "Todas" : e.charAt(0).toUpperCase() + e.slice(1)}
            </Button>
          ))}
        </div>
        <span className="ax-sub">{filtradas.length} inscripciones</span>
      </div>

      {loading ? (
        <p className="ax-sub">Cargando…</p>
      ) : filtradas.length === 0 ? (
        <EmptyState icono={ClipboardList} titulo="Sin inscripciones">
          {inscripciones.length === 0 ? "Aún no hay inscripciones registradas." : "Ninguna inscripción coincide con el filtro."}
        </EmptyState>
      ) : (
        <div className="ax-lista">
          {filtradas.map((insc) => (
            <InscripcionRow
              key={insc.id} insc={insc} alumnos={alumnos} cursos={cursos} planes={planes}
              onEdit={(i) => { setEditInsc(i); setShowForm(true); }}
              onDelete={(i) => setDeleteTarget(i)}
            />
          ))}
        </div>
      )}

      {showForm && (
        <Modal titulo={editInsc ? "Editar inscripción" : "Nueva inscripción"} ancho={560}
          onClose={() => { setShowForm(false); setEditInsc(null); }}>
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

      {deleteTarget && (
        <ConfirmModal
          title="Eliminar inscripción"
          message="¿Eliminar esta inscripción? Los cargos asociados no se eliminarán."
          onConfirm={handleDelete}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </Page>
  );

  if (embedded) return contenido;
  return <AdminLayout active="inscripciones">{contenido}</AdminLayout>;
}
