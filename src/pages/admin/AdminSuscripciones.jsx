// src/pages/admin/AdminSuscripciones.jsx
// Panel de administración de suscripciones: gestionar suscripciones de alumnos, planes, pagos.

import { useState, useEffect } from "react";
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

function fmtMoney(n) {
  return `$${Number(n).toLocaleString("es-MX", { minimumFractionDigits: 2 })}`;
}

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
    const vencimiento = new Date(hoy);
    vencimiento.setMonth(vencimiento.getMonth() + 1);

    await onSave({
      alumno_id: alumnoId,
      plan_id: planId,
      fecha_inicio: hoy.toISOString().split("T")[0],
      fecha_vencimiento_actual: vencimiento.toISOString().split("T")[0],
      estado: "activa",
      auto_renovar: true,
      metodo_pago: metodo,
    });
    setSaving(false);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <Field label="Alumno">
        <select value={alumnoId} onChange={(e) => setAlumnoId(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }} required>
          <option value="">Seleccionar alumno…</option>
          {alumnos.map((a) => (
            <option key={a.id} value={a.id}>{a.nombre} {a.apellidos}</option>
          ))}
        </select>
      </Field>

      <Field label="Plan">
        <select value={planId} onChange={(e) => setPlanId(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }} required>
          <option value="">Seleccionar plan…</option>
          {planes.filter((p) => p.activo).map((p) => (
            <option key={p.id} value={p.id}>{p.nombre} — {fmtMoney(p.precio_mensual)}/mes</option>
          ))}
        </select>
      </Field>

      <Field label="Método de pago">
        <select value={metodo} onChange={(e) => setMetodo(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
          <option value="efectivo">Efectivo</option>
          <option value="transferencia">Transferencia</option>
          <option value="tarjeta">Tarjeta</option>
          <option value="oxxo">OXXO</option>
        </select>
      </Field>

      <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 8 }}>
        <button type="button" onClick={onCancel} style={{
          background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8,
          padding: "8px 18px", color: C.muted, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: font,
        }}>Cancelar</button>
        <button type="submit" disabled={saving || !alumnoId || !planId} style={{
          background: C.blue, border: "none", borderRadius: 8,
          padding: "8px 22px", color: "#fff", fontSize: 13, fontWeight: 700,
          cursor: saving ? "default" : "pointer", opacity: saving || !alumnoId || !planId ? 0.6 : 1, fontFamily: font,
        }}>{saving ? "Creando…" : "Crear suscripción"}</button>
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
    <div style={{
      background: C.card,
      border: `1px solid ${vencePronto ? C.yellow + "44" : C.border}`,
      borderRadius: 10,
      padding: "14px 16px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 8,
    }}>
      <div>
        <span style={{ color: C.text, fontWeight: 600, fontSize: 14, fontFamily: font }}>
          {alumno ? `${alumno.nombre} ${alumno.apellidos}` : susc.alumno_id.slice(0, 8)}
        </span>
        <span style={{ color: C.muted, fontSize: 13, fontFamily: font }}> · </span>
        <span style={{ color: C.dim, fontSize: 13, fontFamily: font }}>
          {plan?.nombre || "Plan eliminado"}
        </span>
        {plan && (
          <span style={{ marginLeft: 6, color: C.muted, fontSize: 12, fontFamily: font }}>
            ({fmtMoney(plan.precio_mensual)}/mes)
          </span>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ textAlign: "right" }}>
          <div style={{ color: vencePronto ? C.yellow : C.muted, fontSize: 12, fontFamily: font }}>
            Vence: {fmtDate(susc.fecha_vencimiento_actual)}
          </div>
          <div style={{ color: C.muted, fontSize: 11, fontFamily: font }}>
            Inicio: {fmtDate(susc.fecha_inicio)}
          </div>
        </div>
        <EstadoBadge estado={susc.estado} />
        {susc.auto_renovar && (
          <span style={{ color: C.green, fontSize: 10, fontWeight: 700, fontFamily: font }}>AUTO</span>
        )}
        {susc.estado === "activa" && (
          <button onClick={() => onPay(susc)} style={{
            background: C.green + "22", border: `1px solid ${C.green}44`, borderRadius: 6,
            padding: "4px 12px", color: C.green, fontSize: 11, fontWeight: 700,
            cursor: "pointer", fontFamily: font,
          }}>Pago</button>
        )}
      </div>
    </div>
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

    // Extender vencimiento un mes
    const nuevoVenc = new Date(susc.fecha_vencimiento_actual);
    nuevoVenc.setMonth(nuevoVenc.getMonth() + 1);
    const { error: errSusc } = await supabase
      .from("suscripciones")
      .update({ fecha_vencimiento_actual: nuevoVenc.toISOString().split("T")[0] })
      .eq("id", susc.id);
    if (errSusc) { console.error(errSusc); return; }

    await loadAll();
  }

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: font }}>
      {!embedded && <AdminHeader active="suscripciones" />}
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "32px 16px" }}>
      {/* Stats */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
        {[
          { label: "Activas", value: suscripciones.filter((s) => s.estado === "activa").length, color: C.green },
          { label: "Vencidas", value: suscripciones.filter((s) => s.estado === "vencida").length, color: C.red },
          { label: "Total", value: suscripciones.length, color: C.text },
        ].map((s) => (
          <div key={s.label} style={{
            flex: "1 1 120px", background: C.surface, border: `1px solid ${C.border}`,
            borderRadius: 10, padding: "12px 16px",
          }}>
            <div style={{ color: C.muted, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: font }}>{s.label}</div>
            <div style={{ color: s.color, fontSize: 20, fontWeight: 800, marginTop: 2, fontFamily: font }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Filtros */}
      <div style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
        {["todos", "activa", "vencida", "cancelada", "pausada"].map((e) => (
          <button
            key={e}
            onClick={() => setFiltroEstado(e)}
            style={{
              border: filtroEstado === e ? "none" : `1px solid ${C.border}`,
              borderRadius: 99, padding: "8px 16px", fontSize: 12, fontWeight: 700,
              cursor: "pointer", background: filtroEstado === e ? C.blue : C.surface,
              color: filtroEstado === e ? "#fff" : C.muted, fontFamily: font,
              transition: "background .15s, color .15s",
            }}
          >
            {e === "todos" ? "Todas" : e.charAt(0).toUpperCase() + e.slice(1)}
          </button>
        ))}
        <span style={{ marginLeft: 8, color: C.muted, fontSize: 12, fontFamily: font }}>{filtradas.length} suscripciones</span>
        <div style={{ flex: 1 }} />
        <button onClick={() => setShowForm(true)} style={{
          background: C.blue, border: "none", borderRadius: 8,
          padding: "8px 18px", color: "#fff", fontSize: 12, fontWeight: 700,
          cursor: "pointer", fontFamily: font,
        }}>+ Nueva suscripción</button>
      </div>

      {/* Lista */}
      {loading ? <Spinner /> : filtradas.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 20px", color: C.muted, fontSize: 14, fontFamily: font }}>
          {suscripciones.length === 0 ? "Aún no hay suscripciones registradas." : "Ninguna suscripción coincide con el filtro."}
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {filtradas.map((s) => (
            <SuscripcionRow key={s.id} susc={s} alumnos={alumnos} planes={planes} onPay={handlePago} />
          ))}
        </div>
      )}

      {/* Modal crear suscripción */}
      {showForm && (
        <Modal title="Nueva suscripción" onClose={() => setShowForm(false)}>
          <SuscripcionForm
            alumnos={alumnos}
            planes={planes}
            onSave={handleCreateSusc}
            onCancel={() => setShowForm(false)}
          />
        </Modal>
      )}
      </div>
    </div>
  );
}
