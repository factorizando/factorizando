// src/pages/admin/AdminCargos.jsx
// Panel de administración de cargos y pagos: CRUD de cargos, registrar pagos, ver historial.
//
// En el design system (tema claro): tokens `--fx-*`, estados con `BadgeEstado`
// y primitivas de `ui.jsx`. Los modales de comprobante y calendario conservan
// sus componentes de impresión; solo cambia el chrome.

import { useState, useEffect, useRef } from "react";
import {
  Plus, Pencil, Trash2, Calendar, Download, ChevronRight, ChevronDown,
  Receipt, CircleX, Clock, Wallet,
} from "lucide-react";
import { supabase } from "../../lib/supabase";
import AdminLayout from "../../components/admin/AdminLayout.jsx";
import {
  Page, Card, Badge, BadgeEstado, Button, Stat, Field, Input, Select, Modal, EmptyState,
} from "../../components/admin/ui.jsx";
import { generarComprobantePago } from "../../utils/comprobantePago.jsx";
import ComprobantePDF from "../../components/ComprobantePDF.jsx";
import CalendarioPagos from "../../components/CalendarioPagos.jsx";
import { compartirCalendarioPagos } from "../../utils/calendarioPagosImagen.jsx";
import {
  textoPeriodo, conceptoDeCargo, desdeFechaISO, aFechaISO,
  lunesDeLaSemana, domingoDeLaSemana,
} from "../../utils/fechas.js";
import { GRID_FORM } from "../../components/admin/layout.js";

function fmtDate(iso) {
  if (!iso) return "—";
  const [y, m, d] = iso.split("T")[0].split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("es-MX", { day: "2-digit", month: "short", year: "numeric" });
}

function fmtMoney(n) {
  return `$${Number(n).toLocaleString("es-MX", { minimumFractionDigits: 2 })}`;
}

function ErrorMsg({ children }) {
  return <div className="ax-badge ax-badge-error" style={{ display: "block" }}>{children}</div>;
}

// ── Formulario de cargo (crear o editar) ──────────────────────────────────────
function CargoForm({ alumnos, inscripciones, initial, onSave, onCancel }) {
  const [form, setForm] = useState({
    alumno_id: initial?.alumno_id || "",
    inscripcion_id: initial?.inscripcion_id || "",
    concepto: initial?.concepto || "",
    monto: initial?.monto || "",
    fecha_vencimiento: initial?.fecha_vencimiento || "",
    periodo_inicio: initial?.periodo_inicio || "",
    periodo_fin: initial?.periodo_fin || "",
    notas: initial?.notas || "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  // Al cambiar de alumno hay que soltar el curso: la inscripción elegida era de
  // otro alumno y dejarla puesta ataría el cargo a quien no es.
  const setAlumno = (e) =>
    setForm((f) => ({ ...f, alumno_id: e.target.value, inscripcion_id: "" }));

  const cursosDelAlumno = (inscripciones || []).filter(
    (i) => i.alumno_id === form.alumno_id
  );
  const inscripcion = cursosDelAlumno.find((i) => i.id === form.inscripcion_id);
  const tipoCobro = inscripcion?.planes_precio?.tipo_cobro;

  // En cobro semanal el periodo se propone a partir del vencimiento (lunes a
  // domingo de esa semana), pero solo al capturar uno nuevo. En un cargo que ya
  // tiene periodo no se toca: ese periodo es lo que de verdad se facturó, y
  // moverlo solo porque se corrige la fecha de pago sería reescribir el cobro a
  // espaldas de quien edita. Para eso están ahora los campos editables.
  const periodoFijado = useRef(Boolean(initial?.periodo_inicio));
  const ultimoPeriodo = useRef(null);
  useEffect(() => {
    if (periodoFijado.current) return;
    if (tipoCobro !== "semanal" || !form.fecha_vencimiento) return;
    const venc = desdeFechaISO(form.fecha_vencimiento);
    const prop = {
      periodo_inicio: aFechaISO(lunesDeLaSemana(venc)),
      periodo_fin: aFechaISO(domingoDeLaSemana(venc)),
    };
    setForm((f) => {
      const tocadoAMano =
        (f.periodo_inicio || f.periodo_fin) &&
        (f.periodo_inicio !== ultimoPeriodo.current?.periodo_inicio ||
          f.periodo_fin !== ultimoPeriodo.current?.periodo_fin);
      if (tocadoAMano) return f;
      ultimoPeriodo.current = prop;
      return { ...f, ...prop };
    });
  }, [tipoCobro, form.fecha_vencimiento]);

  // Propone el concepto nombrando el periodo ("Semana 3 (17 – 23 ago 2026)") en
  // vez del genérico del plan. Se ancla a `periodo_inicio` y no al vencimiento:
  // el concepto describe QUÉ semana se cobra, y ahora esas dos fechas pueden
  // discrepar. Solo pisa el campo si está vacío o si aún tiene su propuesta.
  // Al editar, un concepto con la forma que genera el sistema se considera suyo
  // y se refresca al cambiar el periodo; si no, editar el periodo dejaba el
  // cargo diciendo "Semana 1" con fechas de otra semana, y eso es lo que se
  // imprime en el comprobante. Uno escrito a mano ("Material didáctico") no se
  // toca nunca.
  const ultimaPropuesta = useRef(
    /—\s(Semana\b|Mes de\b|Pago único)/.test(initial?.concepto || "")
      ? initial.concepto
      : null
  );
  const baseConcepto = form.periodo_inicio || form.fecha_vencimiento;
  useEffect(() => {
    if (!inscripcion || !baseConcepto) return;
    const propuesta = conceptoDeCargo({
      curso: inscripcion.cursos?.nombre,
      tipoCobro,
      fecha: desdeFechaISO(baseConcepto),
      inicioCobros: inscripcion.fecha_inicio_clases
        ? desdeFechaISO(inscripcion.fecha_inicio_clases)
        : inscripcion.fecha_inscripcion
          ? desdeFechaISO(inscripcion.fecha_inscripcion)
          : null,
    });
    setForm((f) => {
      if (f.concepto && f.concepto !== ultimaPropuesta.current) return f;
      ultimaPropuesta.current = propuesta;
      return { ...f, concepto: propuesta };
    });
  }, [inscripcion, tipoCobro, baseConcepto]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    // Se valida aquí para dar el motivo en claro: las mismas reglas existen como
    // CHECK en la base, pero de allá vuelven como "violates check constraint
    // cargos_periodo_completo", que no le dice nada a quien está capturando.
    const { periodo_inicio: ini, periodo_fin: fin } = form;
    if (!!ini !== !!fin) {
      setError("El periodo va completo o no va: llena las dos fechas, o ninguna.");
      return;
    }
    if (ini && fin && fin < ini) {
      setError("El fin del periodo no puede ser anterior a su inicio.");
      return;
    }
    if (initial?.es_parcial && !ini) {
      setError("Este cargo es parcial, y un parcial lo es respecto de un periodo: no puede quedarse sin él.");
      return;
    }
    setSaving(true);
    const result = await onSave({
      ...form,
      periodo_inicio: ini || null,
      periodo_fin: fin || null,
      monto: Number(form.monto),
      id: initial?.id || null,
    });
    if (result?.error) setError(result.error);
    setSaving(false);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <Field label="Alumno">
        <Select value={form.alumno_id} onChange={setAlumno} required>
          <option value="">Seleccionar alumno…</option>
          {alumnos.map((a) => (
            <option key={a.id} value={a.id}>{a.nombre} {a.apellidos}</option>
          ))}
        </Select>
      </Field>
      {/* Opcional a propósito: un cargo suelto (material, una cuota, un ajuste)
          no cuelga de ninguna inscripción, y ése es justo el caso que este
          formulario cubre. */}
      <Field label="Curso (opcional)">
        <Select
          value={form.inscripcion_id}
          onChange={set("inscripcion_id")}
          disabled={!form.alumno_id}
        >
          <option value="">
            {!form.alumno_id ? "Elige primero un alumno…"
              : cursosDelAlumno.length === 0 ? "Sin cursos inscritos"
              : "Sin curso (cargo suelto)"}
          </option>
          {cursosDelAlumno.map((i) => (
            <option key={i.id} value={i.id}>
              {i.cursos?.nombre || "Curso"}{i.estado !== "activa" ? ` (${i.estado})` : ""}
            </option>
          ))}
        </Select>
      </Field>
      <Field label="Concepto">
        <Input value={form.concepto} onChange={set("concepto")} placeholder="Ej: Inscripción — mensual" required />
      </Field>
      <div style={{ display: "grid", gridTemplateColumns: GRID_FORM, gap: 12 }}>
        <Field label="Monto">
          <Input type="number" step="0.01" min="0" value={form.monto} onChange={set("monto")} required />
        </Field>
        <Field label="Fecha de vencimiento">
          <Input type="date" value={form.fecha_vencimiento} onChange={set("fecha_vencimiento")} required />
        </Field>
      </div>
      {/* El periodo es lo que se cobra; el vencimiento, cuándo se paga. Suelen
          coincidir en el semanal, pero no tienen por qué: de ahí que se puedan
          editar por separado. */}
      <div style={{ display: "grid", gridTemplateColumns: GRID_FORM, gap: 12 }}>
        <Field label="Periodo — inicio">
          <Input type="date" value={form.periodo_inicio} onChange={set("periodo_inicio")} />
        </Field>
        <Field label="Periodo — fin">
          <Input type="date" value={form.periodo_fin} onChange={set("periodo_fin")} />
        </Field>
      </div>
      <Field label="Notas (opcional)">
        <Input value={form.notas} onChange={set("notas")} placeholder="Ej: semana 2, mes 1…" />
      </Field>
      {error && <ErrorMsg>{error}</ErrorMsg>}
      <div className="ax-acciones" style={{ justifyContent: "flex-end", marginTop: 8 }}>
        <Button variante="ghost" onClick={onCancel}>Cancelar</Button>
        <Button variante="primary" type="submit"
          disabled={saving || !form.alumno_id || !form.concepto || !form.monto || !form.fecha_vencimiento}>
          {saving ? "Guardando…" : initial ? "Guardar cambios" : "Crear cargo"}
        </Button>
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
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    const result = await onSave({ cargo_id: cargo.id, monto: Number(monto), metodo_pago: metodo, notas: notas || null });
    if (result?.error) setError(result.error);
    setSaving(false);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{
        background: "var(--fx-surface-sunken)", border: "1px solid var(--fx-border)",
        borderRadius: "var(--fx-radius-md)", padding: "12px 14px", marginBottom: 4,
      }}>
        <div className="ax-nombre">{cargo.concepto}</div>
        <div className="ax-sub" style={{ marginTop: 2 }}>
          Vence: {fmtDate(cargo.fecha_vencimiento)} · Total: {fmtMoney(cargo.monto)}
        </div>
      </div>

      <Field label="Monto a pagar">
        <Input type="number" step="0.01" min="0" max={cargo.monto}
          value={monto} onChange={(e) => setMonto(e.target.value)} required />
      </Field>

      <Field label="Método de pago">
        <Select value={metodo} onChange={(e) => setMetodo(e.target.value)}>
          <option value="efectivo">Efectivo</option>
          <option value="transferencia">Transferencia</option>
          <option value="tarjeta">Tarjeta</option>
          <option value="oxxo">OXXO</option>
        </Select>
      </Field>

      <Field label="Notas (opcional)">
        <Input value={notas} onChange={(e) => setNotas(e.target.value)} placeholder="Referencia, folio, etc." />
      </Field>

      {error && <ErrorMsg>{error}</ErrorMsg>}

      <div className="ax-acciones" style={{ justifyContent: "flex-end", marginTop: 8 }}>
        <Button variante="ghost" onClick={onCancel}>Cancelar</Button>
        <Button variante="primary" type="submit" disabled={saving || !monto}>
          {saving ? "Registrando…" : "Registrar pago"}
        </Button>
      </div>
    </form>
  );
}

// ── Modal de confirmación ────────────────────────────────────────────────────
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

// ── Vista previa del comprobante antes de descargar ─────────────────────────
function ComprobantePreviewModal({ pago, cargo, alumno, onClose }) {
  const [descargando, setDescargando] = useState(false);
  // El comprobante mide 800px fijos (es una hoja carta, no un layout fluido),
  // así que en vez de dejarlo desbordar se escala al ancho disponible. El alto
  // del contenedor sigue al del documento ya escalado para no dejar hueco.
  const marcoRef = useRef(null);
  const docRef = useRef(null);
  const [escala, setEscala] = useState(1);
  const [alto, setAlto] = useState(0);
  useEffect(() => {
    const marco = marcoRef.current;
    const doc = docRef.current;
    if (!marco || !doc) return;
    const ro = new ResizeObserver(() => {
      setEscala(Math.min(1, marco.clientWidth / 800));
      setAlto(doc.offsetHeight);
    });
    ro.observe(marco);
    ro.observe(doc);
    return () => ro.disconnect();
  }, []);

  return (
    <Modal titulo="Vista previa del comprobante" onClose={onClose} ancho={860}>
      <div ref={marcoRef} style={{
        background: "var(--fx-surface-sunken)", border: "1px solid var(--fx-border)",
        borderRadius: "var(--fx-radius-md)", padding: 20, marginBottom: 18,
      }}>
        <div style={{ height: alto * escala, overflow: "hidden" }}>
          <div ref={docRef} style={{ width: 800, transform: `scale(${escala})`, transformOrigin: "top left" }}>
            <ComprobantePDF pago={pago} cargo={cargo} alumno={alumno} />
          </div>
        </div>
      </div>
      <div className="ax-acciones" style={{ justifyContent: "flex-end" }}>
        <Button variante="ghost" onClick={onClose}>Cerrar</Button>
        <Button variante="primary" icono={Download} disabled={descargando}
          onClick={async () => {
            setDescargando(true);
            await generarComprobantePago({ pago, cargo, alumno });
            setDescargando(false);
            onClose();
          }}>
          {descargando ? "Generando…" : "Descargar PDF"}
        </Button>
      </div>
    </Modal>
  );
}

// ── Calendario de pagos compartible ─────────────────────────────────────────
function CalendarioModal({ onClose }) {
  const [desde, setDesde] = useState(aFechaISO(lunesDeLaSemana(new Date())));
  const [semanas, setSemanas] = useState(8);
  const [enviando, setEnviando] = useState(false);
  const [aviso, setAviso] = useState(null);

  // Se escala al ancho disponible igual que la vista previa del comprobante:
  // la imagen mide 620px fijos y en un teléfono no cabe.
  const marcoRef = useRef(null);
  const docRef = useRef(null);
  const [escala, setEscala] = useState(1);
  const [alto, setAlto] = useState(0);
  useEffect(() => {
    const marco = marcoRef.current, doc = docRef.current;
    if (!marco || !doc) return;
    const ro = new ResizeObserver(() => {
      setEscala(Math.min(1, marco.clientWidth / 620));
      setAlto(doc.offsetHeight);
    });
    ro.observe(marco); ro.observe(doc);
    return () => ro.disconnect();
  }, []);

  async function compartir() {
    setEnviando(true);
    setAviso(null);
    try {
      const r = await compartirCalendarioPagos({
        desde: desdeFechaISO(desde),
        semanas: Number(semanas),
        titulo: "Calendario de pagos",
      });
      if (r === "descargado") setAviso("Tu navegador no permite compartir archivos, así que se descargó la imagen.");
    } catch (e) {
      console.error(e);
      setAviso("No se pudo generar la imagen.");
    }
    setEnviando(false);
  }

  return (
    <Modal titulo="Calendario de pagos" onClose={onClose} ancho={720}>
      <div style={{ display: "grid", gridTemplateColumns: GRID_FORM, gap: 12, marginBottom: 16 }}>
        <Field label="Desde la semana del">
          <Input type="date" value={desde} onChange={(e) => setDesde(e.target.value)} />
        </Field>
        <Field label="Cuántas semanas">
          <Input type="number" min="1" max="26" value={semanas} onChange={(e) => setSemanas(e.target.value)} />
        </Field>
      </div>

      <div ref={marcoRef} style={{
        background: "var(--fx-surface-sunken)", border: "1px solid var(--fx-border)",
        borderRadius: "var(--fx-radius-md)", padding: 16, marginBottom: 16,
      }}>
        <div style={{ height: alto * escala, overflow: "hidden" }}>
          <div ref={docRef} style={{ width: 620, transform: `scale(${escala})`, transformOrigin: "top left" }}>
            <CalendarioPagos desde={desdeFechaISO(desde)} semanas={Number(semanas) || 1} />
          </div>
        </div>
      </div>

      {aviso && <div style={{ marginBottom: 12 }}><ErrorMsg>{aviso}</ErrorMsg></div>}

      <div className="ax-acciones" style={{ justifyContent: "flex-end" }}>
        <Button variante="ghost" onClick={onClose}>Cerrar</Button>
        <Button variante="primary" onClick={compartir} disabled={enviando}>
          {enviando ? "Generando…" : "Compartir imagen"}
        </Button>
      </div>
    </Modal>
  );
}

// ── Fila de cargo ────────────────────────────────────────────────────────────
function CargoRow({ cargo, alumnos, onPay, onEdit, onDelete, onTogglePagos, showPagos, pagos, onDownloadPago }) {
  const alumno = alumnos.find((a) => a.id === cargo.alumno_id);
  const vencido = cargo.estado === "pendiente" && new Date(cargo.fecha_vencimiento) < new Date();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Card style={vencido ? { borderColor: "var(--fx-error-border)" } : undefined}>
        <div className="ax-fila">
          <div className="ax-aparecer">
            <div className="ax-nombre">
              {alumno ? `${alumno.nombre} ${alumno.apellidos}` : cargo.alumno_id.slice(0, 8)}
              <span className="ax-sub" style={{ fontWeight: 400 }}> · {cargo.concepto}</span>
            </div>
            <div className="ax-sub" style={{ marginTop: 2 }}>
              {cargo.periodo_inicio ? `${textoPeriodo(cargo.periodo_inicio, cargo.periodo_fin)} · ` : ""}
              Vence {fmtDate(cargo.fecha_vencimiento)}
            </div>
            {cargo.notas && <div className="ax-sub" style={{ whiteSpace: "normal" }}>{cargo.notas}</div>}
          </div>
          <div className="ax-acciones">
            {cargo.es_parcial && <Badge tone="warning">Parcial</Badge>}
            <span className="ax-pct-num" style={{ fontSize: "var(--fx-body-size)" }}>{fmtMoney(cargo.monto)}</span>
            <BadgeEstado estado={vencido ? "vencido" : cargo.estado} />
            {cargo.estado === "pendiente" && (
              <Button variante="secondary" onClick={() => onPay(cargo)}>Pagar</Button>
            )}
            <Button variante="ghost" icono={Pencil} title="Editar" onClick={() => onEdit(cargo)} />
            <Button variante="ghost" icono={Trash2} title="Eliminar" onClick={() => onDelete(cargo)} />
            <Button variante="ghost" icono={showPagos ? ChevronDown : ChevronRight}
              title="Ver pagos" onClick={() => onTogglePagos(cargo.id)} />
          </div>
        </div>
      </Card>
      {showPagos && (
        <div style={{
          background: "var(--fx-surface-sunken)", border: "1px solid var(--fx-border)",
          borderTop: "none", borderRadius: "0 0 var(--fx-radius-lg) var(--fx-radius-lg)",
          padding: "10px 16px",
        }}>
          {pagos.length === 0 ? (
            <div className="ax-sub" style={{ padding: "4px 0" }}>Sin pagos registrados.</div>
          ) : (
            <div className="ax-lista" style={{ gap: 6 }}>
              {pagos.map((pg) => (
                <div key={pg.id} className="ax-fila" style={{ fontSize: "var(--fx-small-size)" }}>
                  <div className="ax-aparecer">
                    <strong style={{ color: "var(--fx-text-heading)" }}>{fmtMoney(pg.monto)}</strong>
                    <span className="ax-sub"> · {pg.metodo_pago}{pg.notas ? ` · ${pg.notas}` : ""}</span>
                  </div>
                  <span className="ax-sub">{fmtDate(pg.fecha_pago)}</span>
                  <Button variante="ghost" icono={Download} title="Descargar comprobante"
                    onClick={() => onDownloadPago(pg, cargo)} />
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
  const [inscripciones, setInscripciones] = useState([]);
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
  const [showCalendario, setShowCalendario] = useState(false);

  useEffect(() => { loadAll(); }, []);

  async function loadAll() {
    setLoading(true);
    // Las inscripciones se traen enteras (con el nombre del curso embebido) para
    // poder ofrecerle al formulario los cursos del alumno sin una consulta por
    // cada vez que se cambia de alumno en el desplegable.
    const [c, a, i] = await Promise.all([
      supabase.from("cargos").select("*").order("fecha_vencimiento"),
      supabase.from("alumnos").select("id, nombre, apellidos"),
      supabase
        .from("inscripciones")
        .select("id, alumno_id, estado, fecha_inicio_clases, fecha_inscripcion, cursos(nombre), planes_precio(tipo_cobro)"),
    ]);
    setCargos(c.data || []);
    setAlumnos(a.data || []);
    setInscripciones(i.data || []);
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

  // Los handlers devuelven { error } y el formulario lo pinta. Antes solo hacían
  // console.error y volvían: el modal se quedaba abierto sin decir nada, que fue
  // justo lo que escondió durante meses el fallo de cargos_source_check.
  async function handleCreateCargo(form) {
    const { error } = await supabase.from("cargos").insert({
      alumno_id: form.alumno_id,
      inscripcion_id: form.inscripcion_id || null,
      concepto: form.concepto,
      monto: form.monto,
      fecha_vencimiento: form.fecha_vencimiento,
      notas: form.notas || null,
      estado: "pendiente",
      periodo_inicio: form.periodo_inicio,
      periodo_fin: form.periodo_fin,
    });
    if (error) { console.error(error); return { error: error.message || "Error al crear el cargo." }; }
    setShowCargoForm(false);
    await loadAll();
  }

  async function handleEditCargo(form) {
    const { error } = await supabase.from("cargos").update({
      alumno_id: form.alumno_id,
      inscripcion_id: form.inscripcion_id || null,
      concepto: form.concepto,
      monto: form.monto,
      fecha_vencimiento: form.fecha_vencimiento,
      notas: form.notas || null,
      periodo_inicio: form.periodo_inicio,
      periodo_fin: form.periodo_fin,
    }).eq("id", form.id);
    if (error) { console.error(error); return { error: error.message || "Error al guardar el cargo." }; }
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
    if (errPago) { console.error(errPago); return { error: errPago.message || "No se pudo registrar el pago." }; }
    const cargo = cargos.find((c) => c.id === cargo_id);
    const nuevoEstado = monto >= Number(cargo.monto) ? "pagado" : "pendiente";
    const { error: errCargo } = await supabase.from("cargos").update({ estado: nuevoEstado }).eq("id", cargo_id);
    // El pago ya quedó guardado; lo que falló es marcar el cargo. Avisar importa:
    // si no, el cobro aparece como pendiente y se puede volver a cobrar.
    if (errCargo) { console.error(errCargo); return { error: "El pago se guardó, pero no se pudo actualizar el estado del cargo." }; }
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

  const contenido = (
    <Page
      eyebrow="Cobranza"
      titulo="Cargos"
      descripcion="Cargos por cobrar, su periodo y el registro de pagos."
      acciones={
        <>
          <Button variante="subtle" icono={Calendar} onClick={() => setShowCalendario(true)}>
            Calendario
          </Button>
          <Button variante="primary" icono={Plus} onClick={() => { setEditCargo(null); setShowCargoForm(true); }}>
            Nuevo cargo
          </Button>
        </>
      }
    >
      <div className="ax-grid-stats">
        <Stat label="Por cobrar" value={fmtMoney(totalPendiente)} tone="warning" icono={Clock} />
        <Stat label="Vencido" value={fmtMoney(totalVencido)} tone="error" icono={CircleX} />
        <Stat label="Total cargos" value={cargos.length} tone="accent" icono={Receipt} />
      </div>

      <div className="ax-acciones" style={{ justifyContent: "space-between" }}>
        <div className="ax-acciones">
          {["todos", "pendiente", "vencidos", "pagado", "cancelado"].map((e) => (
            <Button key={e} variante={filtroEstado === e ? "primary" : "subtle"} onClick={() => setFiltroEstado(e)}>
              {e === "todos" ? "Todos" : e === "vencidos" ? "Vencidos" : e.charAt(0).toUpperCase() + e.slice(1)}
            </Button>
          ))}
        </div>
        <span className="ax-sub">{filtrados.length} cargos</span>
      </div>

      {loading ? (
        <p className="ax-sub">Cargando…</p>
      ) : filtrados.length === 0 ? (
        <EmptyState icono={Wallet} titulo="Sin cargos">
          {cargos.length === 0 ? "Aún no hay cargos registrados." : "Ningún cargo coincide con el filtro."}
        </EmptyState>
      ) : (
        <div className="ax-lista" style={{ gap: 10 }}>
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

      {showCargoForm && (
        <Modal titulo={editCargo ? "Editar cargo" : "Nuevo cargo"} ancho={560}
          onClose={() => { setShowCargoForm(false); setEditCargo(null); }}>
          <CargoForm
            alumnos={alumnos}
            inscripciones={inscripciones}
            initial={editCargo || null}
            onSave={editCargo ? handleEditCargo : handleCreateCargo}
            onCancel={() => { setShowCargoForm(false); setEditCargo(null); }}
          />
        </Modal>
      )}

      {showPago && selectedCargo && (
        <Modal titulo="Registrar pago" onClose={() => { setShowPago(false); setSelectedCargo(null); }}>
          <PagoForm
            cargo={selectedCargo}
            onSave={handlePay}
            onCancel={() => { setShowPago(false); setSelectedCargo(null); }}
          />
        </Modal>
      )}

      {lastPago && lastPagoCargo && (
        <Modal titulo="Pago registrado" onClose={() => { setLastPago(null); setLastPagoCargo(null); }}>
          <p className="ax-sub" style={{ margin: "0 0 6px", whiteSpace: "normal" }}>
            El pago de <strong style={{ color: "var(--fx-text-heading)" }}>{fmtMoney(lastPago.monto)}</strong> se registró correctamente.
          </p>
          <p className="ax-sub" style={{ margin: "0 0 18px" }}>
            Folio: {lastPago.id?.slice(0, 8).toUpperCase()}
          </p>
          <div className="ax-acciones" style={{ justifyContent: "flex-end" }}>
            <Button variante="ghost" onClick={() => { setLastPago(null); setLastPagoCargo(null); }}>Cerrar</Button>
            <Button variante="primary" onClick={() => {
              const alumno = alumnos.find((a) => a.id === lastPagoCargo.alumno_id);
              setPreview({ pago: lastPago, cargo: lastPagoCargo, alumno: alumno || { nombre: "", apellidos: "" } });
            }}>Ver comprobante</Button>
          </div>
        </Modal>
      )}

      {showCalendario && <CalendarioModal onClose={() => setShowCalendario(false)} />}

      {preview && (
        <ComprobantePreviewModal
          pago={preview.pago}
          cargo={preview.cargo}
          alumno={preview.alumno}
          onClose={() => setPreview(null)}
        />
      )}

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
    </Page>
  );

  if (embedded) return contenido;
  return <AdminLayout active="cargos">{contenido}</AdminLayout>;
}
