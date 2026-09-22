// src/pages/admin/AdminSuscripciones.jsx
// Panel de administración de suscripciones: gestionar suscripciones de alumnos, planes, pagos.
//
// En el design system (tema claro): tokens `--fx-*`, estados con `BadgeEstado`
// y primitivas de `ui.jsx`.

import { useState, useEffect } from "react";
import { Plus, RefreshCw, CircleCheck, CircleX, Repeat } from "lucide-react";
import { supabase } from "../../lib/supabase";
import AdminLayout from "../../components/admin/AdminLayout.jsx";
import {
  Page, Card, Badge, BadgeEstado, Button, Stat, Field, Select, Modal, EmptyState,
} from "../../components/admin/ui.jsx";
import { aFechaISO, desdeFechaISO, sumarMeses } from "../../utils/fechas.js";

function fmtDate(iso) {
  if (!iso) return "—";
  const [y, m, d] = iso.split("T")[0].split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("es-MX", { day: "2-digit", month: "short", year: "numeric" });
}

function fmtMoney(n) {
  return `$${Number(n).toLocaleString("es-MX", { minimumFractionDigits: 2 })}`;
}

// ── Formulario nueva suscripción ─────────────────────────────────────────────
function SuscripcionForm({ alumnos, planes, onSave, onCancel }) {
  const [alumnoId, setAlumnoId] = useState("");
  const [planId, setPlanId] = useState("");
  const [metodo, setMetodo] = useState("efectivo");
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    const hoy = new Date();
    const vencimiento = sumarMeses(hoy, 1);

    await onSave({
      alumno_id: alumnoId,
      plan_id: planId,
      fecha_inicio: aFechaISO(hoy),
      fecha_vencimiento_actual: aFechaISO(vencimiento),
      estado: "activa",
      auto_renovar: true,
      metodo_pago: metodo,
    });
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

      <Field label="Plan">
        <Select value={planId} onChange={(e) => setPlanId(e.target.value)} required>
          <option value="">Seleccionar plan…</option>
          {planes.filter((p) => p.activo).map((p) => (
            <option key={p.id} value={p.id}>{p.nombre} — {fmtMoney(p.precio_mensual)}/mes</option>
          ))}
        </Select>
      </Field>

      <Field label="Método de pago">
        <Select value={metodo} onChange={(e) => setMetodo(e.target.value)}>
          <option value="efectivo">Efectivo</option>
          <option value="transferencia">Transferencia</option>
          <option value="tarjeta">Tarjeta</option>
          <option value="oxxo">OXXO</option>
        </Select>
      </Field>

      <div className="ax-acciones" style={{ justifyContent: "flex-end", marginTop: 8 }}>
        <Button variante="ghost" onClick={onCancel}>Cancelar</Button>
        <Button variante="primary" type="submit" disabled={saving || !alumnoId || !planId}>
          {saving ? "Creando…" : "Crear suscripción"}
        </Button>
      </div>
    </form>
  );
}

// ── Fila de suscripción ──────────────────────────────────────────────────────
function SuscripcionRow({ susc, alumnos, planes, onPay }) {
  const alumno = alumnos.find((a) => a.id === susc.alumno_id);
  const plan = planes.find((p) => p.id === susc.plan_id);
  const vencePronto = susc.estado === "activa" && new Date(susc.fecha_vencimiento_actual) < new Date(Date.now() + 7 * 86400000);

  return (
    <Card style={vencePronto ? { borderColor: "var(--fx-warning-border)" } : undefined}>
      <div className="ax-fila">
        <div className="ax-aparecer">
          <div className="ax-nombre">
            {alumno ? `${alumno.nombre} ${alumno.apellidos}` : susc.alumno_id.slice(0, 8)}
            <span className="ax-sub" style={{ fontWeight: 400 }}> · {plan?.nombre || "Plan eliminado"}</span>
          </div>
          <div className="ax-sub" style={{ marginTop: 2 }}>
            {plan ? `${fmtMoney(plan.precio_mensual)}/mes · ` : ""}
            Vence {fmtDate(susc.fecha_vencimiento_actual)} · Inicio {fmtDate(susc.fecha_inicio)}
          </div>
        </div>
        <div className="ax-acciones">
          {susc.auto_renovar && <Badge tone="accent" icono={Repeat}>Auto</Badge>}
          <BadgeEstado estado={susc.estado} />
          {susc.estado === "activa" && (
            <Button variante="secondary" onClick={() => onPay(susc)}>Pago</Button>
          )}
        </div>
      </div>
    </Card>
  );
}

// ── Página principal ─────────────────────────────────────────────────────────
export default function AdminSuscripciones({ embedded }) {
  const [suscripciones, setSuscripciones] = useState([]);
  const [alumnos, setAlumnos] = useState([]);
  const [planes, setPlanes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtroEstado, setFiltroEstado] = useState("todos");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => { loadAll(); }, []);

  async function loadAll() {
    setLoading(true);
    const [s, a, p] = await Promise.all([
      supabase.from("suscripciones").select("*").order("created_at", { ascending: false }),
      supabase.from("alumnos").select("id, nombre, apellidos"),
      supabase.from("planes_suscripcion").select("*"),
    ]);
    setSuscripciones(s.data || []);
    setAlumnos(a.data || []);
    setPlanes(p.data || []);
    setLoading(false);
  }

  const filtradas = suscripciones.filter((s) => {
    if (filtroEstado !== "todos" && s.estado !== filtroEstado) return false;
    return true;
  });

  async function handleCreateSusc(form) {
    const { error } = await supabase.from("suscripciones").insert(form);
    if (error) { console.error(error); return; }
    setShowForm(false);
    await loadAll();
  }

  async function handlePago(susc) {
    const planAct = planes.find((p) => p.id === susc.plan_id);
    if (!planAct) return;

    const { error: errPago } = await supabase.from("pagos_suscripcion").insert({
      suscripcion_id: susc.id,
      monto: planAct.precio_mensual,
      metodo_pago: susc.metodo_pago || "efectivo",
      periodo_cubierto: new Date().toLocaleDateString("es-MX", { month: "long", year: "numeric" }),
      estado: "pagado",
    });
    if (errPago) { console.error(errPago); return; }

    // Extender vencimiento un mes natural (31 ene → 28/29 feb, no 3 mar)
    const nuevoVenc = sumarMeses(desdeFechaISO(susc.fecha_vencimiento_actual), 1);
    const { error: errSusc } = await supabase
      .from("suscripciones")
      .update({ fecha_vencimiento_actual: aFechaISO(nuevoVenc) })
      .eq("id", susc.id);
    if (errSusc) { console.error(errSusc); return; }

    await loadAll();
  }

  const contenido = (
    <Page
      eyebrow="Cobranza"
      titulo="Suscripciones"
      descripcion="Planes recurrentes, vencimientos y registro de pagos."
      acciones={
        <Button variante="primary" icono={Plus} onClick={() => setShowForm(true)}>
          Nueva suscripción
        </Button>
      }
    >
      <div className="ax-grid-stats">
        <Stat label="Activas" value={suscripciones.filter((s) => s.estado === "activa").length} tone="success" icono={CircleCheck} />
        <Stat label="Vencidas" value={suscripciones.filter((s) => s.estado === "vencida").length} tone="error" icono={CircleX} />
        <Stat label="Total" value={suscripciones.length} tone="accent" icono={RefreshCw} />
      </div>

      <div className="ax-acciones" style={{ justifyContent: "space-between" }}>
        <div className="ax-acciones">
          {["todos", "activa", "vencida", "cancelada", "pausada"].map((e) => (
            <Button key={e} variante={filtroEstado === e ? "primary" : "subtle"} onClick={() => setFiltroEstado(e)}>
              {e === "todos" ? "Todas" : e.charAt(0).toUpperCase() + e.slice(1)}
            </Button>
          ))}
        </div>
        <span className="ax-sub">{filtradas.length} suscripciones</span>
      </div>

      {loading ? (
        <p className="ax-sub">Cargando…</p>
      ) : filtradas.length === 0 ? (
        <EmptyState icono={RefreshCw} titulo="Sin suscripciones">
          {suscripciones.length === 0 ? "Aún no hay suscripciones registradas." : "Ninguna suscripción coincide con el filtro."}
        </EmptyState>
      ) : (
        <div className="ax-lista">
          {filtradas.map((s) => (
            <SuscripcionRow key={s.id} susc={s} alumnos={alumnos} planes={planes} onPay={handlePago} />
          ))}
        </div>
      )}

      {showForm && (
        <Modal titulo="Nueva suscripción" ancho={520} onClose={() => setShowForm(false)}>
          <SuscripcionForm
            alumnos={alumnos}
            planes={planes}
            onSave={handleCreateSusc}
            onCancel={() => setShowForm(false)}
          />
        </Modal>
      )}
    </Page>
  );

  if (embedded) return contenido;
  return <AdminLayout active="suscripciones">{contenido}</AdminLayout>;
}
