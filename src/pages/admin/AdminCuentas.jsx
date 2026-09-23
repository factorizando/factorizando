// src/pages/admin/AdminCuentas.jsx
// Control de acceso por cuenta: suspender y reactivar.
//
// La suspensión es una capa aparte de `estado_acceso` (ver migración
// 20260923010000). Aquí se ve el contexto para decidir a mano —cargos vencidos,
// suscripción vencida y curso finalizado— y se corta o restaura el acceso.
// Aprobar/rechazar sigue viviendo en Solicitudes; el staff no se puede suspender.
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck, ShieldOff, RotateCcw, AlertTriangle, GraduationCap,
} from "lucide-react";
import { supabase } from "../../lib/supabase";
import AdminLayout from "../../components/admin/AdminLayout.jsx";
import {
  Page, Card, Badge, Button, SearchField, Field, Input, Select, Textarea, Modal, EmptyState,
} from "../../components/admin/ui.jsx";
import { BLOQUES, BLOQUE_LABEL } from "../../components/admin/layout.js";

const ROL_LABEL = { alumno: "Alumno", tutor: "Tutor", profesor: "Profesor", admin: "Admin" };

const ORIGENES = [
  { value: "pago", label: "Falta de pago" },
  { value: "ban", label: "Cuenta bloqueada (ban)" },
  { value: "curso", label: "Periodo de curso finalizado" },
  { value: "manual", label: "Decisión administrativa" },
];
const ORIGEN_LABEL = Object.fromEntries(ORIGENES.map((o) => [o.value, o.label]));

const FILTROS = [
  { value: "activas", label: "Activas" },
  { value: "suspendidas", label: "Suspendidas" },
  { value: "pendientes", label: "Pendientes" },
  { value: "staff", label: "Staff" },
  { value: "todas", label: "Todas" },
];

const ES_STAFF = (c) => c.rol === "admin" || c.rol === "profesor";

// Un alumno aprobado y sin perfil de staff/tutor es quien recibe un bloque.
const ES_ALUMNO = (c) => !ES_STAFF(c) && c.rol !== "tutor";

function hoyLocal() {
  const n = new Date();
  return new Date(n.getFullYear(), n.getMonth(), n.getDate());
}
function parseDia(iso) {
  if (!iso) return null;
  const [y, m, d] = iso.split("T")[0].split("-").map(Number);
  return new Date(y, m - 1, d);
}
function fmtFecha(iso) {
  if (!iso) return "—";
  const [y, m, d] = iso.split("T")[0].split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("es-MX", { day: "2-digit", month: "short", year: "numeric" });
}
function fmtMoney(n) { return `$${Number(n).toLocaleString("es-MX", { minimumFractionDigits: 2 })}`; }

// Una suspensión está vigente si se cortó y no venció (o no tiene fecha).
function suspVigente(c) {
  return !!c.suspendido_en && (!c.suspendido_hasta || new Date(c.suspendido_hasta) > new Date());
}

const TONO_ESTADO = {
  pendiente: { tone: "warning", label: "Pendiente" },
  aprobado: { tone: "success", label: "Aprobada" },
  rechazado: { tone: "error", label: "Rechazada" },
};

function SuspendModal({ cuenta, onClose, onConfirm }) {
  const [motivo, setMotivo] = useState("");
  const [origen, setOrigen] = useState("pago");
  const [hasta, setHasta] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  async function confirmar() {
    if (!motivo.trim()) { setError("Escribe el motivo; es lo que verá la persona."); return; }
    setSaving(true); setError(null);
    const res = await onConfirm(cuenta, { motivo: motivo.trim(), origen, hasta: hasta || null });
    if (res?.error) { setError(res.error); setSaving(false); }
  }

  return (
    <Modal titulo={`Suspender a ${cuenta.nombre || cuenta.email || "la cuenta"}`} onClose={onClose}>
      <p className="ax-sub" style={{ margin: "0 0 16px", whiteSpace: "normal" }}>
        Se le cortará el acceso de inmediato. El motivo se muestra en su pantalla de suspensión.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <Field label="Motivo (visible para la persona)">
          <Textarea value={motivo} onChange={(e) => setMotivo(e.target.value)} placeholder="Ej. Adeudo de la mensualidad de octubre." />
        </Field>
        <Field label="Origen">
          <Select value={origen} onChange={(e) => setOrigen(e.target.value)}>
            {ORIGENES.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </Select>
        </Field>
        <Field label="Suspender hasta (opcional)">
          <Input type="date" value={hasta} onChange={(e) => setHasta(e.target.value)} />
        </Field>
        {error && <div className="ax-badge ax-badge-error" style={{ display: "block" }}>{error}</div>}
        <div className="ax-acciones" style={{ justifyContent: "flex-end" }}>
          <Button variante="ghost" onClick={onClose}>Cancelar</Button>
          <Button variante="primary" icono={ShieldOff} disabled={saving} onClick={confirmar}>
            {saving ? "Suspendiendo…" : "Suspender"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default function AdminCuentas({ embedded, onNavigate }) {
  const navigate = useNavigate();
  const [cuentas, setCuentas] = useState([]);
  const [contexto, setContexto] = useState({ deuda: {}, susVenc: new Set(), cursoFin: new Set() });
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState("activas");
  const [busqueda, setBusqueda] = useState("");
  const [suspTarget, setSuspTarget] = useState(null);
  const [reactTarget, setReactTarget] = useState(null);
  const [accionError, setAccionError] = useState(null);
  const [bloqueSaving, setBloqueSaving] = useState(null);
  const [bloqueError, setBloqueError] = useState(null);

  useEffect(() => { load(); }, []);

  async function load() {
    setLoading(true);
    const [{ data: profs }, { data: cgs }, { data: sus }, { data: ins }] = await Promise.all([
      supabase.from("profiles").select("*").order("nombre", { ascending: true }),
      supabase.from("cargos").select("alumno_id, monto, estado, fecha_vencimiento").in("estado", ["pendiente", "vencido"]),
      supabase.from("suscripciones").select("alumno_id, estado, fecha_vencimiento_actual"),
      supabase.from("inscripciones").select("alumno_id, estado"),
    ]);
    const hoy = hoyLocal();

    const deuda = {};
    (cgs || []).forEach((c) => {
      const v = parseDia(c.fecha_vencimiento);
      if (!v || v >= hoy) return;
      if (!deuda[c.alumno_id]) deuda[c.alumno_id] = { count: 0, monto: 0 };
      deuda[c.alumno_id].count += 1;
      deuda[c.alumno_id].monto += Number(c.monto) || 0;
    });
    const susVenc = new Set();
    (sus || []).forEach((s) => {
      const v = parseDia(s.fecha_vencimiento_actual);
      if (s.estado === "vencida" || (s.estado === "activa" && v && v < hoy)) susVenc.add(s.alumno_id);
    });
    const act = {}, fin = {};
    (ins || []).forEach((i) => {
      if (i.estado === "activa") act[i.alumno_id] = true;
      if (i.estado === "finalizada") fin[i.alumno_id] = true;
    });
    const cursoFin = new Set(Object.keys(fin).filter((k) => !act[k]));

    setContexto({ deuda, susVenc, cursoFin });
    setCuentas(profs || []);
    setLoading(false);
  }

  const filtradas = cuentas.filter((c) => {
    if (filtro === "activas" && !(c.estado_acceso === "aprobado" && !suspVigente(c))) return false;
    if (filtro === "suspendidas" && !suspVigente(c)) return false;
    if (filtro === "pendientes" && c.estado_acceso !== "pendiente") return false;
    if (filtro === "staff" && !ES_STAFF(c)) return false;
    if (busqueda) {
      const q = busqueda.toLowerCase();
      if (!`${c.nombre || ""} ${c.apellidos || ""} ${c.email || ""}`.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  async function handleSuspender(cuenta, { motivo, origen, hasta }) {
    const { error } = await supabase.from("profiles").update({
      suspendido_en: new Date().toISOString(),
      suspendido_hasta: hasta ? new Date(`${hasta}T23:59:59`).toISOString() : null,
      motivo_suspension: motivo,
      suspension_origen: origen,
    }).eq("id", cuenta.id);
    if (error) return { error: error.message || "No se pudo suspender." };
    setSuspTarget(null);
    await load();
    return {};
  }

  async function handleReactivar() {
    if (!reactTarget) return;
    setAccionError(null);
    const { error } = await supabase.from("profiles").update({
      suspendido_en: null, suspendido_hasta: null, motivo_suspension: null, suspension_origen: null,
    }).eq("id", reactTarget.id);
    if (error) { setAccionError(error.message || "No se pudo reactivar."); return; }
    setReactTarget(null);
    await load();
  }

  // Cambia el bloque de contenido de un alumno ya aprobado. Es el único eje de
  // autorización (`profiles.bloque`); el gate lo relee al recargar.
  async function handleBloque(cuenta, nuevo) {
    if ((nuevo || null) === (cuenta.bloque || null)) return;
    setBloqueSaving(cuenta.id);
    setBloqueError(null);
    const { error } = await supabase.from("profiles").update({ bloque: nuevo || null }).eq("id", cuenta.id);
    setBloqueSaving(null);
    if (error) { setBloqueError(error.message || "No se pudo cambiar el nivel."); return; }
    await load();
  }

  function irASolicitudes() {
    if (onNavigate) onNavigate("solicitudes");
    else navigate("/admin/solicitudes");
  }

  const contenido = (
    <Page
      eyebrow="Personas"
      titulo="Cuentas"
      descripcion="Control de acceso: suspende por adeudo, ban o fin de curso, y reactiva cuando se resuelva."
      acciones={<Badge tone="accent" icono={ShieldCheck}>{cuentas.filter(suspVigente).length} suspendidas</Badge>}
    >
      <div className="ax-acciones" style={{ justifyContent: "space-between" }}>
        <SearchField
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar por nombre o correo…"
          style={{ flex: "1 1 240px", maxWidth: 340 }}
        />
        <div className="ax-acciones">
          {FILTROS.map((f) => (
            <Button key={f.value} variante={filtro === f.value ? "primary" : "subtle"} onClick={() => setFiltro(f.value)}>
              {f.label}
            </Button>
          ))}
        </div>
      </div>

      {bloqueError && (
        <div className="ax-badge ax-badge-error" style={{ display: "block" }}>{bloqueError}</div>
      )}

      {loading ? (
        <p className="ax-sub">Cargando…</p>
      ) : filtradas.length === 0 ? (
        <EmptyState icono={ShieldCheck} titulo="Sin cuentas">
          Ninguna cuenta coincide con el filtro.
        </EmptyState>
      ) : (
        <div className="ax-lista">
          {filtradas.map((c) => {
            const est = TONO_ESTADO[c.estado_acceso] || TONO_ESTADO.pendiente;
            const deuda = contexto.deuda[c.id];
            const susVenc = contexto.susVenc.has(c.id);
            const cursoFin = contexto.cursoFin.has(c.id);
            const suspendida = suspVigente(c);
            const editable = ES_ALUMNO(c) && c.estado_acceso === "aprobado";
            return (
              <Card key={c.id}>
                <div className="ax-fila">
                  <span className="ax-avatar">{(c.nombre || c.email || "?").slice(0, 1).toUpperCase()}</span>
                  <div className="ax-aparecer">
                    <div className="ax-nombre">
                      {c.nombre}{c.apellidos ? ` ${c.apellidos}` : ""}{" "}
                      <Badge tone="neutral">{ROL_LABEL[c.rol] || c.rol || "—"}</Badge>
                    </div>
                    <div className="ax-sub">{c.email || "—"}</div>
                  </div>
                  {c.bloque && !editable && <Badge tone="accent">{BLOQUE_LABEL[c.bloque] || c.bloque}</Badge>}
                  <Badge tone={est.tone}>{est.label}</Badge>
                  {suspendida && <Badge tone="warning" icono={ShieldOff}>Suspendida</Badge>}
                  {!suspendida && c.suspendido_en && <Badge tone="neutral">Suspensión vencida</Badge>}
                  <div className="ax-acciones">
                    {ES_STAFF(c) ? (
                      <span className="ax-sub">Acceso completo</span>
                    ) : c.suspendido_en ? (
                      <Button variante="secondary" icono={RotateCcw} onClick={() => { setAccionError(null); setReactTarget(c); }}>
                        Reactivar
                      </Button>
                    ) : c.estado_acceso === "aprobado" ? (
                      <Button variante="ghost" icono={ShieldOff} onClick={() => setSuspTarget(c)}>Suspender</Button>
                    ) : c.estado_acceso === "pendiente" ? (
                      <Button variante="ghost" onClick={irASolicitudes}>Revisar solicitud</Button>
                    ) : null}
                  </div>
                </div>

                {editable && (
                  <div className="ax-acciones" style={{ marginTop: 10, alignItems: "center", gap: 10 }}>
                    <span className="ax-sub">Acceso:</span>
                    <Select
                      value={c.bloque || ""}
                      disabled={bloqueSaving === c.id}
                      onChange={(e) => handleBloque(c, e.target.value)}
                      style={{ maxWidth: 260 }}
                    >
                      {!c.bloque && <option value="" disabled>Sin asignar</option>}
                      {BLOQUES.map((b) => <option key={b.value} value={b.value}>{b.label}</option>)}
                    </Select>
                    {bloqueSaving === c.id && <span className="ax-sub">Guardando…</span>}
                  </div>
                )}

                {suspendida && (
                  <div className="ax-sub" style={{ marginTop: 10, whiteSpace: "normal" }}>
                    <strong>{ORIGEN_LABEL[c.suspension_origen] || "Suspendida"}:</strong>{" "}
                    {c.motivo_suspension || "sin detalle"}
                    {c.suspendido_hasta ? ` · hasta el ${fmtFecha(c.suspendido_hasta)}` : " · sin fecha de término"}
                  </div>
                )}

                {(deuda || susVenc || cursoFin) && (
                  <div className="ax-acciones" style={{ marginTop: 10, flexWrap: "wrap" }}>
                    {deuda && (
                      <Badge tone="warning" icono={AlertTriangle}>
                        Debe {fmtMoney(deuda.monto)} · {deuda.count} {deuda.count === 1 ? "cargo vencido" : "cargos vencidos"}
                      </Badge>
                    )}
                    {susVenc && <Badge tone="warning" icono={AlertTriangle}>Suscripción vencida</Badge>}
                    {cursoFin && <Badge tone="neutral" icono={GraduationCap}>Curso finalizado</Badge>}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      )}

      {suspTarget && (
        <SuspendModal cuenta={suspTarget} onClose={() => setSuspTarget(null)} onConfirm={handleSuspender} />
      )}

      {reactTarget && (
        <Modal titulo="Reactivar cuenta" onClose={() => { setReactTarget(null); setAccionError(null); }}>
          <p className="ax-sub" style={{ margin: "0 0 18px", whiteSpace: "normal" }}>
            ¿Reactivar el acceso de <strong>{reactTarget.nombre} {reactTarget.apellidos || ""}</strong>? Se limpiará la
            suspensión y podrá entrar a su bloque.
          </p>
          {accionError && <div className="ax-badge ax-badge-error" style={{ display: "block", marginBottom: 12 }}>{accionError}</div>}
          <div className="ax-acciones" style={{ justifyContent: "flex-end" }}>
            <Button variante="ghost" onClick={() => { setReactTarget(null); setAccionError(null); }}>Cancelar</Button>
            <Button variante="primary" icono={RotateCcw} onClick={handleReactivar}>Reactivar</Button>
          </div>
        </Modal>
      )}
    </Page>
  );

  if (embedded) return contenido;
  return <AdminLayout active="cuentas">{contenido}</AdminLayout>;
}
