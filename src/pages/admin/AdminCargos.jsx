// src/pages/admin/AdminCargos.jsx
// Panel de administración de cargos y pagos: tabla de cargos, registrar pagos, cambiar planes.

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
  orange:  "#f97316",
  red:     "#f43f5e",
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
        width: "90%", maxWidth: 440, maxHeight: "85vh", overflow: "auto", padding: "24px 28px",
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

// ── Fila de cargo ────────────────────────────────────────────────────────────
function CargoRow({ cargo, alumnos, onPay }) {
  const alumno = alumnos.find((a) => a.id === cargo.alumno_id);
  const vencido = cargo.estado === "pendiente" && new Date(cargo.fecha_vencimiento) < new Date();

  return (
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
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
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
      </div>
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

  async function handlePay({ cargo_id, monto, metodo_pago, notas }) {
    // Registrar pago
    const { error: errPago } = await supabase.from("pagos").insert({ cargo_id, monto, metodo_pago, notas });
    if (errPago) { console.error(errPago); return; }

    // Actualizar estado del cargo
    const nuevoEstado = monto >= Number(cargos.find((c) => c.id === cargo_id).monto) ? "pagado" : "pendiente";
    const { error: errCargo } = await supabase.from("cargos").update({ estado: nuevoEstado }).eq("id", cargo_id);
    if (errCargo) { console.error(errCargo); return; }

    setShowPago(false);
    setSelectedCargo(null);
    await loadAll();
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

      {/* Filtros */}
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
      </div>

      {/* Lista */}
      {loading ? <Spinner /> : filtrados.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 20px", color: C.muted, fontSize: 14, fontFamily: font }}>
          {cargos.length === 0 ? "Aún no hay cargos registrados." : "Ningún cargo coincide con el filtro."}
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {filtrados.map((c) => (
            <CargoRow key={c.id} cargo={c} alumnos={alumnos} onPay={(cargo) => { setSelectedCargo(cargo); setShowPago(true); }} />
          ))}
        </div>
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
      </div>
    </div>
  );
}
