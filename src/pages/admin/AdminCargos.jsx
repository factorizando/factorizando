// src/pages/admin/AdminCargos.jsx
// Panel de administración de cargos y pagos: CRUD de cargos, registrar pagos, ver historial.

import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import EstadoBadge from "../../components/admin/EstadoBadge.jsx";
import AdminHeader from "../../components/admin/AdminHeader.jsx";
import { generarComprobantePago } from "../../utils/comprobantePago.jsx";
import ComprobantePDF from "../../components/ComprobantePDF.jsx";
import { textoPeriodo } from "../../utils/fechas.js";

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
  text:    "#e8eaf0",
  muted:   "#5a6070",
  dim:     "#8a9ab8",
};

function fmtDate(iso) {
  if (!iso) return "—";
  const [y, m, d] = iso.split("T")[0].split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("es-MX", { day: "2-digit", month: "short", year: "numeric" });
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

function Modal({ title, onClose, children, maxWidth = 480 }) {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "center",
      background: "rgba(0,0,0,.6)", backdropFilter: "blur(4px)",
    }} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={{
        background: C.card, border: `1px solid ${C.border}`, borderRadius: 14,
        width: "90%", maxWidth, maxHeight: "85vh", overflow: "auto", padding: "24px 28px",
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

// ── Formulario de cargo (crear o editar) ──────────────────────────────────────
function CargoForm({ alumnos, initial, onSave, onCancel }) {
  const [form, setForm] = useState({
    alumno_id: initial?.alumno_id || "",
    concepto: initial?.concepto || "",
    monto: initial?.monto || "",
    fecha_vencimiento: initial?.fecha_vencimiento || "",
  });
  const [saving, setSaving] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    await onSave({ ...form, monto: Number(form.monto), id: initial?.id || null });
    setSaving(false);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <Field label="Alumno">
        <select value={form.alumno_id} onChange={set("alumno_id")} style={{ ...inputStyle, cursor: "pointer" }} required>
          <option value="">Seleccionar alumno…</option>
          {alumnos.map((a) => (
            <option key={a.id} value={a.id}>{a.nombre} {a.apellidos}</option>
          ))}
        </select>
      </Field>
      <Field label="Concepto">
        <input value={form.concepto} onChange={set("concepto")} placeholder="Ej: Inscripción — mensual" style={inputStyle} required
          onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }} onBlur={(e) => { e.target.style.borderColor = C.border; }} />
      </Field>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <Field label="Monto">
          <input type="number" step="0.01" min="0" value={form.monto} onChange={set("monto")} style={inputStyle} required
            onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }} onBlur={(e) => { e.target.style.borderColor = C.border; }} />
        </Field>
        <Field label="Fecha de vencimiento">
          <input type="date" value={form.fecha_vencimiento} onChange={set("fecha_vencimiento")} style={inputStyle} required />
        </Field>
      </div>
      <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 8 }}>
        <button type="button" onClick={onCancel} style={{
          background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8,
          padding: "8px 18px", color: C.muted, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: font,
        }}>Cancelar</button>
        <button type="submit" disabled={saving || !form.alumno_id || !form.concepto || !form.monto || !form.fecha_vencimiento} style={{
          background: C.blue, border: "none", borderRadius: 8,
          padding: "8px 22px", color: "#fff", fontSize: 13, fontWeight: 700,
          cursor: saving ? "default" : "pointer",
          opacity: saving || !form.alumno_id || !form.concepto || !form.monto || !form.fecha_vencimiento ? 0.6 : 1, fontFamily: font,
        }}>{saving ? "Guardando…" : initial ? "Guardar cambios" : "Crear cargo"}</button>
      </div>
    </form>
  );
}

// ── Formulario de pago ───────────────────────────────────────────────────────
function PagoForm({ cargo, onSave, onCancel }) {
  const [monto, setMonto] = useState(cargo.monto);
  const [metodo, setMetodo] = useState("efectivo");
  const [notas, setNotas] = useState("");
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    await onSave({ cargo_id: cargo.id, monto: Number(monto), metodo_pago: metodo, notas: notas || null });
    setSaving(false);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{
        background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, padding: "12px 14px", marginBottom: 4,
      }}>
        <div style={{ color: C.text, fontSize: 13, fontWeight: 600, fontFamily: font }}>{cargo.concepto}</div>
        <div style={{ color: C.muted, fontSize: 12, marginTop: 2, fontFamily: font }}>
          Vence: {fmtDate(cargo.fecha_vencimiento)} · Total: {fmtMoney(cargo.monto)}
        </div>
      </div>

      <Field label="Monto a pagar">
        <input
          type="number" step="0.01" min="0" max={cargo.monto}
          value={monto} onChange={(e) => setMonto(e.target.value)}
          style={inputStyle}
          onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }}
          onBlur={(e) => { e.target.style.borderColor = C.border; }}
          required
        />
      </Field>

      <Field label="Método de pago">
        <select value={metodo} onChange={(e) => setMetodo(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
          <option value="efectivo">Efectivo</option>
          <option value="transferencia">Transferencia</option>
          <option value="tarjeta">Tarjeta</option>
          <option value="oxxo">OXXO</option>
        </select>
      </Field>

      <Field label="Notas (opcional)">
        <input
          value={notas} onChange={(e) => setNotas(e.target.value)}
          placeholder="Referencia, folio, etc."
          style={inputStyle}
          onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }}
          onBlur={(e) => { e.target.style.borderColor = C.border; }}
        />
      </Field>

      <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 8 }}>
        <button type="button" onClick={onCancel} style={{
          background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8,
          padding: "8px 18px", color: C.muted, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: font,
        }}>Cancelar</button>
        <button type="submit" disabled={saving || !monto} style={{
          background: C.green, border: "none", borderRadius: 8,
          padding: "8px 22px", color: "#000", fontSize: 13, fontWeight: 700,
          cursor: saving ? "default" : "pointer", opacity: saving || !monto ? 0.6 : 1, fontFamily: font,
        }}>{saving ? "Registrando…" : "Registrar pago"}</button>
      </div>
    </form>
  );
}

// ── Modal de confirmación ────────────────────────────────────────────────────
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

// ── Vista previa del comprobante antes de descargar ─────────────────────────
function ComprobantePreviewModal({ pago, cargo, alumno, onClose }) {
  const [descargando, setDescargando] = useState(false);
  return (
    <Modal title="Vista previa del comprobante" onClose={onClose} maxWidth={860}>
      <div style={{ background: "#555", borderRadius: 10, padding: 20, marginBottom: 18, overflowX: "auto" }}>
        <div style={{ width: 800 }}>
          <ComprobantePDF pago={pago} cargo={cargo} alumno={alumno} />
        </div>
      </div>
      <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
        <button onClick={onClose} style={{
          background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8,
          padding: "8px 18px", color: C.muted, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: font,
        }}>Cerrar</button>
        <button onClick={async () => {
          setDescargando(true);
          await generarComprobantePago({ pago, cargo, alumno });
          setDescargando(false);
          onClose();
        }} disabled={descargando} style={{
          background: C.blue, border: "none", borderRadius: 8,
          padding: "8px 22px", color: "#fff", fontSize: 13, fontWeight: 700,
          cursor: descargando ? "default" : "pointer", opacity: descargando ? 0.6 : 1, fontFamily: font,
        }}>{descargando ? "Generando…" : "↧ Descargar PDF"}</button>
      </div>
    </Modal>
  );
}

// ── Fila de cargo ────────────────────────────────────────────────────────────
function CargoRow({ cargo, alumnos, onPay, onEdit, onDelete, onTogglePagos, showPagos, pagos, onDownloadPago }) {
  const alumno = alumnos.find((a) => a.id === cargo.alumno_id);
  const vencido = cargo.estado === "pendiente" && new Date(cargo.fecha_vencimiento) < new Date();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      <div style={{
        background: C.card,
        border: `1px solid ${vencido ? C.red + "44" : C.border}`,
        borderRadius: 10,
        padding: "12px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 8,
      }}>
        <div>
          <span style={{ color: C.text, fontWeight: 600, fontSize: 13, fontFamily: font }}>
            {alumno ? `${alumno.nombre} ${alumno.apellidos}` : cargo.alumno_id.slice(0, 8)}
          </span>
          <span style={{ color: C.muted, fontSize: 13, fontFamily: font }}> · </span>
          <span style={{ color: C.dim, fontSize: 13, fontFamily: font }}>{cargo.concepto}</span>
          {cargo.periodo_inicio && (
            <span style={{ color: C.muted, fontSize: 12, fontFamily: font }}>
              {" · "}{textoPeriodo(cargo.periodo_inicio, cargo.periodo_fin)}
            </span>
          )}
          {cargo.es_parcial && (
            <span style={{
              background: C.yellow + "22", color: C.yellow, borderRadius: 5,
              padding: "1px 7px", fontSize: 10, fontWeight: 700, fontFamily: font, marginLeft: 6,
            }}>PARCIAL</span>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: C.text, fontWeight: 700, fontSize: 14, fontFamily: font }}>
            {fmtMoney(cargo.monto)}
          </span>
          <span style={{ color: vencido ? C.red : C.muted, fontSize: 12, fontFamily: font }}>
            {fmtDate(cargo.fecha_vencimiento)}
          </span>
          <EstadoBadge estado={vencido ? "vencido" : cargo.estado} />
          {cargo.estado === "pendiente" && (
            <button onClick={() => onPay(cargo)} style={{
              background: C.green + "22", border: `1px solid ${C.green}44`, borderRadius: 6,
              padding: "4px 12px", color: C.green, fontSize: 11, fontWeight: 700,
              cursor: "pointer", fontFamily: font,
            }}>Pagar</button>
          )}
          <button onClick={() => onEdit(cargo)} title="Editar" style={{
            background: "none", border: "none", color: C.blue, fontSize: 15, cursor: "pointer", padding: "2px 4px",
          }}>✎</button>
          <button onClick={() => onDelete(cargo)} title="Eliminar" style={{
            background: "none", border: "none", color: C.red, fontSize: 15, cursor: "pointer", padding: "2px 4px",
          }}>✕</button>
          <button onClick={() => onTogglePagos(cargo.id)} title="Ver pagos" style={{
            background: "none", border: "none", color: C.muted, fontSize: 13, cursor: "pointer", padding: "2px 6px",
          }}>{showPagos ? "▾" : "▸"}</button>
        </div>
      </div>
      {showPagos && (
        <div style={{
          background: C.surface, border: `1px solid ${C.border}`, borderTop: "none",
          borderRadius: "0 0 10px 10px", padding: "10px 16px", marginTop: -6,
        }}>
          {pagos.length === 0 ? (
            <div style={{ color: C.muted, fontSize: 12, fontFamily: font, padding: "4px 0" }}>Sin pagos registrados.</div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {pagos.map((pg) => (
                <div key={pg.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, fontFamily: font }}>
                  <div>
                    <span style={{ color: C.green, fontWeight: 600 }}>{fmtMoney(pg.monto)}</span>
                    <span style={{ color: C.muted }}> · {pg.metodo_pago}</span>
                    {pg.notas && <span style={{ color: C.dim }}> · {pg.notas}</span>}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ color: C.muted }}>{fmtDate(pg.fecha_pago)}</span>
                    <button onClick={() => onDownloadPago(pg, cargo)} title="Descargar comprobante" style={{
                      background: "none", border: "none", color: C.blue, fontSize: 14, cursor: "pointer", padding: "2px 4px",
                    }}>↧</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Página principal ─────────────────────────────────────────────────────────
export default function AdminCargos({ embedded }) {
  const [cargos, setCargos] = useState([]);
  const [alumnos, setAlumnos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtroEstado, setFiltroEstado] = useState("todos");

  const [showPago, setShowPago] = useState(false);
  const [selectedCargo, setSelectedCargo] = useState(null);
  const [showCargoForm, setShowCargoForm] = useState(false);
  const [editCargo, setEditCargo] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deletePagosCount, setDeletePagosCount] = useState(0);
  const [expandedPagos, setExpandedPagos] = useState({});
  const [pagosMap, setPagosMap] = useState({});
  const [lastPago, setLastPago] = useState(null);
  const [lastPagoCargo, setLastPagoCargo] = useState(null);
  const [preview, setPreview] = useState(null); // { pago, cargo, alumno }

  useEffect(() => { loadAll(); }, []);

  async function loadAll() {
    setLoading(true);
    const [c, a] = await Promise.all([
      supabase.from("cargos").select("*").order("fecha_vencimiento"),
      supabase.from("alumnos").select("id, nombre, apellidos"),
    ]);
    setCargos(c.data || []);
    setAlumnos(a.data || []);
    setLoading(false);
  }

  const filtrados = cargos.filter((c) => {
    if (filtroEstado === "vencidos") {
      return c.estado === "pendiente" && new Date(c.fecha_vencimiento) < new Date();
    }
    if (filtroEstado !== "todos" && c.estado !== filtroEstado) return false;
    return true;
  });

  const totalPendiente = cargos
    .filter((c) => c.estado === "pendiente")
    .reduce((s, c) => s + Number(c.monto), 0);

  const totalVencido = cargos
    .filter((c) => c.estado === "pendiente" && new Date(c.fecha_vencimiento) < new Date())
    .reduce((s, c) => s + Number(c.monto), 0);

  // ── CRUD handlers ──────────────────────────────────────────────────────────

  async function handleCreateCargo(form) {
    const { error } = await supabase.from("cargos").insert({
      alumno_id: form.alumno_id,
      concepto: form.concepto,
      monto: form.monto,
      fecha_vencimiento: form.fecha_vencimiento,
      estado: "pendiente",
    });
    if (error) { console.error(error); return; }
    setShowCargoForm(false);
    await loadAll();
  }

  async function handleEditCargo(form) {
    const { error } = await supabase.from("cargos").update({
      alumno_id: form.alumno_id,
      concepto: form.concepto,
      monto: form.monto,
      fecha_vencimiento: form.fecha_vencimiento,
    }).eq("id", form.id);
    if (error) { console.error(error); return; }
    setEditCargo(null);
    await loadAll();
  }

  async function handleDeleteCargo() {
    if (!deleteTarget) return;
    const { error } = await supabase.from("cargos").delete().eq("id", deleteTarget.id);
    if (error) { console.error(error); }
    setDeleteTarget(null);
    setDeletePagosCount(0);
    await loadAll();
  }

  async function handlePay({ cargo_id, monto, metodo_pago, notas }) {
    const { data: pagoInsertado, error: errPago } = await supabase
      .from("pagos").insert({ cargo_id, monto, metodo_pago, notas }).select().single();
    if (errPago) { console.error(errPago); return; }
    const cargo = cargos.find((c) => c.id === cargo_id);
    const nuevoEstado = monto >= Number(cargo.monto) ? "pagado" : "pendiente";
    const { error: errCargo } = await supabase.from("cargos").update({ estado: nuevoEstado }).eq("id", cargo_id);
    if (errCargo) { console.error(errCargo); return; }
    setShowPago(false);
    setSelectedCargo(null);
    setLastPago({ ...pagoInsertado, metodo_pago });
    setLastPagoCargo(cargo);
    await loadAll();
  }

  async function togglePagos(cargoId) {
    const next = { ...expandedPagos, [cargoId]: !expandedPagos[cargoId] };
    setExpandedPagos(next);
    if (next[cargoId] && !pagosMap[cargoId]) {
      const { data } = await supabase.from("pagos").select("*").eq("cargo_id", cargoId).order("fecha_pago");
      setPagosMap((m) => ({ ...m, [cargoId]: data || [] }));
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: font }}>
      {!embedded && <AdminHeader active="cargos" />}
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "32px 16px" }}>
      {/* Stats */}
      <div style={{
        display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 20,
      }}>
        {[
          { label: "Pendiente", value: fmtMoney(totalPendiente), color: C.yellow },
          { label: "Vencido", value: fmtMoney(totalVencido), color: C.red },
          { label: "Total cargos", value: cargos.length, color: C.text },
        ].map((s) => (
          <div key={s.label} style={{
            flex: "1 1 140px", background: C.surface, border: `1px solid ${C.border}`,
            borderRadius: 10, padding: "12px 16px",
          }}>
            <div style={{ color: C.muted, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: font }}>{s.label}</div>
            <div style={{ color: s.color, fontSize: 20, fontWeight: 800, marginTop: 2, fontFamily: font }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Filtros + acción */}
      <div style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
        {["todos", "pendiente", "vencidos", "pagado", "cancelado"].map((e) => (
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
            {e === "todos" ? "Todos" : e === "vencidos" ? "Vencidos" : e.charAt(0).toUpperCase() + e.slice(1)}
          </button>
        ))}
        <span style={{ marginLeft: 8, color: C.muted, fontSize: 12, fontFamily: font }}>{filtrados.length} cargos</span>
        <div style={{ flex: 1 }} />
        <button onClick={() => { setEditCargo(null); setShowCargoForm(true); }} style={{
          background: C.blue, border: "none", borderRadius: 8,
          padding: "8px 18px", color: "#fff", fontSize: 12, fontWeight: 700,
          cursor: "pointer", fontFamily: font,
        }}>+ Nuevo cargo</button>
      </div>

      {/* Lista */}
      {loading ? <Spinner /> : filtrados.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 20px", color: C.muted, fontSize: 14, fontFamily: font }}>
          {cargos.length === 0 ? "Aún no hay cargos registrados." : "Ningún cargo coincide con el filtro."}
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {filtrados.map((c) => (
            <CargoRow
              key={c.id} cargo={c} alumnos={alumnos}
              onPay={(cargo) => { setSelectedCargo(cargo); setShowPago(true); }}
              onEdit={(cargo) => { setEditCargo(cargo); setShowCargoForm(true); }}
              onDelete={async (cargo) => {
                const { count } = await supabase.from("pagos").select("id", { count: "exact", head: true }).eq("cargo_id", cargo.id);
                setDeletePagosCount(count || 0);
                setDeleteTarget(cargo);
              }}
              onTogglePagos={togglePagos}
              showPagos={!!expandedPagos[c.id]}
              pagos={pagosMap[c.id] || []}
              onDownloadPago={(pg, cargo) => {
                const alumno = alumnos.find((a) => a.id === cargo.alumno_id);
                setPreview({ pago: pg, cargo, alumno: alumno || { nombre: "", apellidos: "" } });
              }}
            />
          ))}
        </div>
      )}

      {/* Modal crear/editar cargo */}
      {showCargoForm && (
        <Modal title={editCargo ? "Editar cargo" : "Nuevo cargo"} onClose={() => { setShowCargoForm(false); setEditCargo(null); }}>
          <CargoForm
            alumnos={alumnos}
            initial={editCargo || null}
            onSave={editCargo ? handleEditCargo : handleCreateCargo}
            onCancel={() => { setShowCargoForm(false); setEditCargo(null); }}
          />
        </Modal>
      )}

      {/* Modal pago */}
      {showPago && selectedCargo && (
        <Modal title="Registrar pago" onClose={() => { setShowPago(false); setSelectedCargo(null); }}>
          <PagoForm
            cargo={selectedCargo}
            onSave={handlePay}
            onCancel={() => { setShowPago(false); setSelectedCargo(null); }}
          />
        </Modal>
      )}

      {/* Modal pago registrado */}
      {lastPago && lastPagoCargo && (
        <Modal title="Pago registrado" onClose={() => { setLastPago(null); setLastPagoCargo(null); }}>
          <p style={{ color: C.dim, fontSize: 13, fontFamily: font, margin: "0 0 6px" }}>
            El pago de <span style={{ color: C.green, fontWeight: 700 }}>{fmtMoney(lastPago.monto)}</span> se registró correctamente.
          </p>
          <p style={{ color: C.muted, fontSize: 12, fontFamily: font, margin: "0 0 18px" }}>
            Folio: {lastPago.id?.slice(0, 8).toUpperCase()}
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
            <button onClick={() => { setLastPago(null); setLastPagoCargo(null); }} style={{
              background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8,
              padding: "8px 18px", color: C.muted, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: font,
            }}>Cerrar</button>
            <button onClick={() => {
              const alumno = alumnos.find((a) => a.id === lastPagoCargo.alumno_id);
              setPreview({ pago: lastPago, cargo: lastPagoCargo, alumno: alumno || { nombre: "", apellidos: "" } });
            }} style={{
              background: C.blue, border: "none", borderRadius: 8,
              padding: "8px 22px", color: "#fff", fontSize: 13, fontWeight: 700,
              cursor: "pointer", fontFamily: font,
            }}>Ver comprobante</button>
          </div>
        </Modal>
      )}

      {/* Modal vista previa del comprobante */}
      {preview && (
        <ComprobantePreviewModal
          pago={preview.pago}
          cargo={preview.cargo}
          alumno={preview.alumno}
          onClose={() => setPreview(null)}
        />
      )}

      {/* Modal eliminar */}
      {deleteTarget && (
        <ConfirmModal
          title="Eliminar cargo"
          message={
            deletePagosCount > 0
              ? `¿Eliminar el cargo "${deleteTarget.concepto}" de ${fmtMoney(deleteTarget.monto)}? Tiene ${deletePagosCount} pago(s) registrado(s) que también se eliminarán. Esta acción no se puede deshacer.`
              : `¿Eliminar el cargo "${deleteTarget.concepto}" de ${fmtMoney(deleteTarget.monto)}? Esta acción no se puede deshacer.`
          }
          onConfirm={handleDeleteCargo}
          onCancel={() => { setDeleteTarget(null); setDeletePagosCount(0); }}
        />
      )}
      </div>
    </div>
  );
}
