// src/pages/admin/AdminAlumnoDetalle.jsx
// Página dedicada de un alumno: info, tutores, contactos de emergencia, inscripciones, cargos.
//
// En el design system (tema claro): tokens `--fx-*`, primitivas de `ui.jsx` y
// estados con `BadgeEstado`.

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Plus, Pencil, Trash2, Unlink, UserRound, Phone, TriangleAlert } from "lucide-react";
import { supabase } from "../../lib/supabase";
import AdminLayout from "../../components/admin/AdminLayout.jsx";
import {
  Page, Card, Badge, BadgeEstado, Button, Field, Input, Select, Modal, EmptyState,
} from "../../components/admin/ui.jsx";
import CuentaEditModal from "../../components/admin/CuentaEditModal.jsx";
import { GRID_FORM, BLOQUES, BLOQUE_LABEL } from "../../components/admin/layout.js";

const NIVEL_LABEL = {
  primaria: "Primaria", secundaria: "Secundaria",
  prepa: "Preparatoria", preparatoria: "Preparatoria", universidad: "Universidad",
};

function fmtDate(iso) {
  if (!iso) return "—";
  const [y, m, d] = iso.split("T")[0].split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("es-MX", { day: "2-digit", month: "short", year: "numeric" });
}
function fmtMoney(n) { return `$${Number(n).toLocaleString("es-MX", { minimumFractionDigits: 2 })}`; }

// ── Formularios ──────────────────────────────────────────────────────────────
function ContactoForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial || { nombre: "", telefono: "", relacion: "", orden: 1 });
  const [saving, setSaving] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    await onSave({ ...form, orden: Number(form.orden) });
    setSaving(false);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Field label="Nombre"><Input value={form.nombre} onChange={set("nombre")} required /></Field>
      <div style={{ display: "grid", gridTemplateColumns: GRID_FORM, gap: 12 }}>
        <Field label="Teléfono"><Input value={form.telefono} onChange={set("telefono")} required /></Field>
        <Field label="Relación"><Input value={form.relacion} onChange={set("relacion")} placeholder="abuelo, tío…" required /></Field>
      </div>
      <Field label="Prioridad">
        <Select value={form.orden} onChange={set("orden")}>
          <option value={1}>1 — Primero en contactar</option>
          <option value={2}>2 — Segundo en contactar</option>
        </Select>
      </Field>
      <div className="ax-acciones" style={{ justifyContent: "flex-end", marginTop: 8 }}>
        <Button variante="ghost" onClick={onCancel}>Cancelar</Button>
        <Button variante="primary" type="submit" disabled={saving}>{saving ? "Guardando…" : "Guardar"}</Button>
      </div>
    </form>
  );
}

// ── Selector de tutor (cuentas con rol='tutor') ──────────────────────────────
function TutorPicker({ tutores, assignedIds, onSelect, onCancel }) {
  const [search, setSearch] = useState("");
  const disponibles = tutores.filter((t) => !assignedIds.has(t.id));
  const filtrados = disponibles.filter((t) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return `${t.nombre || ""} ${t.apellidos || ""} ${t.email || ""}`.toLowerCase().includes(q);
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Input placeholder="Buscar tutor por nombre o correo…" value={search} onChange={(e) => setSearch(e.target.value)} autoFocus />
      <div style={{ maxHeight: 240, overflow: "auto", display: "flex", flexDirection: "column", gap: 6 }}>
        {filtrados.length === 0 ? (
          <p className="ax-sub" style={{ padding: 12, textAlign: "center", whiteSpace: "normal" }}>
            {disponibles.length === 0 ? "No hay más tutores disponibles." : "Ningún tutor coincide."}
          </p>
        ) : filtrados.map((t) => (
          <Card key={t.id} style={{ padding: "8px 12px" }}>
            <div className="ax-fila">
              <div className="ax-aparecer">
                <div className="ax-nombre">{t.nombre} {t.apellidos}</div>
                <div className="ax-sub">{t.email || t.telefono || "—"} · {t.relacion || "tutor"}</div>
              </div>
              <Button variante="secondary" onClick={() => onSelect(t.id)}>Seleccionar</Button>
            </div>
          </Card>
        ))}
      </div>
      <div className="ax-acciones" style={{ justifyContent: "flex-end" }}>
        <Button variante="ghost" onClick={onCancel}>Cancelar</Button>
      </div>
    </div>
  );
}

// ── Sección (tutores, contactos, inscripciones, cargos) ──────────────────────
function Seccion({ titulo, count, onAdd, children }) {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div className="ax-fila" style={{ justifyContent: "space-between" }}>
        <span className="ax-eyebrow">{titulo} · {count}</span>
        {onAdd && <Button variante="subtle" icono={Plus} onClick={onAdd}>Agregar</Button>}
      </div>
      {children}
    </section>
  );
}

// ── Página principal ─────────────────────────────────────────────────────────
export default function AdminAlumnoDetalle() {
  const { id } = useParams();
  const [alumno, setAlumno] = useState(null);
  const [tutores, setTutores] = useState([]);
  const [vinculosEstado, setVinculosEstado] = useState({});
  const [contactos, setContactos] = useState([]);
  const [inscripciones, setInscripciones] = useState([]);
  const [cargos, setCargos] = useState([]);
  const [cursos, setCursos] = useState({});
  const [loading, setLoading] = useState(true);
  const [showContactoForm, setShowContactoForm] = useState(false);
  const [editContacto, setEditContacto] = useState(null);
  const [allTutores, setAllTutores] = useState([]);
  const [showTutorPicker, setShowTutorPicker] = useState(false);
  const [quitarTarget, setQuitarTarget] = useState(null);
  const [perfil, setPerfil] = useState(null);
  const [guardandoBloque, setGuardandoBloque] = useState(false);
  const [bloqueError, setBloqueError] = useState(null);
  const [showEditarCuenta, setShowEditarCuenta] = useState(false);

  useEffect(() => { loadAll(); }, [id]);

  async function loadAll() {
    setLoading(true);
    const { data: al } = await supabase.from("alumnos").select("*").eq("id", id).single();
    setAlumno(al);

    if (al) {
      // Cuenta de la persona (si la tiene): de ahí sale el bloque de acceso.
      const { data: prof } = await supabase
        .from("profiles").select("id, rol, estado_acceso, bloque, email")
        .eq("id", al.profile_id || al.id).maybeSingle();
      setPerfil(prof || null);

      const { data: vinculos } = await supabase
        .from("alumno_tutor").select("tutor_id, estado").eq("alumno_id", id);
      const ids = (vinculos || []).map((r) => r.tutor_id);
      const estadoMap = {};
      (vinculos || []).forEach((r) => { estadoMap[r.tutor_id] = r.estado; });
      setVinculosEstado(estadoMap);

      const camposTutor = "id, nombre, apellidos, telefono, email, relacion";
      const [t, a, c, i, cg] = await Promise.all([
        ids.length
          ? supabase.from("profiles").select(camposTutor).in("id", ids)
          : Promise.resolve({ data: [] }),
        supabase.from("profiles").select(camposTutor).eq("rol", "tutor").eq("estado_acceso", "aprobado").order("apellidos", { ascending: true }),
        supabase.from("contactos_emergencia").select("*").eq("alumno_id", id).order("orden"),
        supabase.from("inscripciones").select("*").eq("alumno_id", id).order("fecha_inscripcion", { ascending: false }),
        supabase.from("cargos").select("*").eq("alumno_id", id).order("fecha_vencimiento"),
      ]);
      setAllTutores(a.data || []);
      setTutores(t.data || []);
      setContactos(c.data || []);
      setInscripciones(i.data || []);
      setCargos(cg.data || []);

      const cursoIds = [...new Set([...(i.data || []).map((x) => x.curso_id)])];
      if (cursoIds.length > 0) {
        const { data: crs } = await supabase.from("cursos").select("id, nombre").in("id", cursoIds);
        const map = {};
        (crs || []).forEach((x) => { map[x.id] = x.nombre; });
        setCursos(map);
      }
    }
    setLoading(false);
  }

  // ── Vínculos con tutores ─────────────────────────────────────────────────
  // Quitar de ESTE alumno: solo borra el vínculo. El tutor sigue existiendo
  // (y vinculado a otros alumnos). La eliminación global vive en Tutores.
  async function handleQuitarTutor(tutorId) {
    await supabase.from("alumno_tutor").delete().eq("alumno_id", id).eq("tutor_id", tutorId);
    setQuitarTarget(null);
    await loadAll();
  }

  async function handleLinkTutor(tutorId) {
    // El admin vincula directo (activo): es el único camino para los alumnos sin
    // cuenta, que no pueden confirmar una solicitud.
    await supabase.from("alumno_tutor").upsert(
      { alumno_id: id, tutor_id: tutorId, estado: "activo", solicitado_por: "admin", resuelto_en: new Date().toISOString() },
      { onConflict: "alumno_id,tutor_id" }
    );
    setShowTutorPicker(false);
    await loadAll();
  }

  // ── Bloque de acceso ─────────────────────────────────────────────────────
  // Único eje de autorización de una cuenta de alumno. Cambiarlo aquí o en
  // Cuentas es equivalente; el gate lo relee al recargar.
  async function handleBloque(nuevo) {
    if (!perfil || (nuevo || null) === (perfil.bloque || null)) return;
    setGuardandoBloque(true);
    setBloqueError(null);
    const { error } = await supabase.from("profiles").update({ bloque: nuevo || null }).eq("id", perfil.id);
    setGuardandoBloque(false);
    if (error) { setBloqueError(error.message || "No se pudo cambiar el nivel."); return; }
    setPerfil((p) => ({ ...p, bloque: nuevo || null }));
  }

  // ── Contactos CRUD ───────────────────────────────────────────────────────
  async function handleSaveContacto(form) {
    if (editContacto) {
      await supabase.from("contactos_emergencia").update(form).eq("id", editContacto.id);
    } else {
      await supabase.from("contactos_emergencia").insert({ ...form, alumno_id: id });
    }
    setShowContactoForm(false);
    setEditContacto(null);
    await loadAll();
  }

  async function handleDeleteContacto(contactoId) {
    await supabase.from("contactos_emergencia").delete().eq("id", contactoId);
    await loadAll();
  }

  if (loading) {
    return (
      <AdminLayout active="alumnos">
        <Page eyebrow="Personas" titulo="Ficha del alumno">
          <p className="ax-sub">Cargando…</p>
        </Page>
      </AdminLayout>
    );
  }

  if (!alumno) {
    return (
      <AdminLayout active="alumnos">
        <Page eyebrow="Personas" titulo="Ficha del alumno"
          acciones={<Link to="/admin/alumnos" className="ax-btn ax-btn-subtle">Volver a alumnos</Link>}>
          <EmptyState icono={UserRound} titulo="Alumno no encontrado">
            Puede que se haya eliminado.
          </EmptyState>
        </Page>
      </AdminLayout>
    );
  }

  const medico = alumno.alergias || alumno.condiciones_medicas || alumno.notas_importantes;

  return (
    <AdminLayout active="alumnos">
      <Page
        eyebrow="Personas"
        titulo={`${alumno.nombre} ${alumno.apellidos}`}
        descripcion={[perfil?.email || alumno.email || "Sin email", alumno.telefono || "Sin teléfono"].join(" · ")}
        acciones={
          <div className="ax-acciones">
            {perfil && (
              <Button variante="secondary" icono={Pencil} onClick={() => setShowEditarCuenta(true)}>
                Editar datos de la cuenta
              </Button>
            )}
            <Link to="/admin/alumnos" className="ax-btn ax-btn-subtle">← Alumnos</Link>
          </div>
        }
      >
        <Card>
          <div className="ax-acciones" style={{ gap: 12 }}>
            <Badge tone="accent">{NIVEL_LABEL[alumno.nivel] || alumno.nivel}</Badge>
            <span className="ax-sub">Nacimiento: {fmtDate(alumno.fecha_nacimiento)}</span>
            <span className="ax-sub">Registro: {fmtDate(alumno.created_at)}</span>
          </div>

          {(() => {
            const editable = perfil && perfil.estado_acceso === "aprobado"
              && !["admin", "profesor", "tutor"].includes(perfil.rol);
            return (
              <div className="ax-acciones" style={{ gap: 10, marginTop: 12, alignItems: "center" }}>
                <span className="ax-sub">Acceso:</span>
                {editable ? (
                  <>
                    <Select
                      value={perfil.bloque || ""}
                      disabled={guardandoBloque}
                      onChange={(e) => handleBloque(e.target.value)}
                      style={{ maxWidth: 260 }}
                    >
                      {!perfil.bloque && <option value="" disabled>Sin asignar</option>}
                      {BLOQUES.map((b) => <option key={b.value} value={b.value}>{b.label}</option>)}
                    </Select>
                    {guardandoBloque && <span className="ax-sub">Guardando…</span>}
                  </>
                ) : perfil ? (
                  <span className="ax-sub" style={{ whiteSpace: "normal" }}>
                    {perfil.estado_acceso === "aprobado"
                      ? (perfil.bloque ? BLOQUE_LABEL[perfil.bloque] : "Cuenta con acceso completo")
                      : `Cuenta ${perfil.estado_acceso}`}
                  </span>
                ) : (
                  <span className="ax-sub">Sin cuenta: no accede al contenido.</span>
                )}
              </div>
            );
          })()}

          {bloqueError && (
            <div className="ax-badge ax-badge-error" style={{ display: "block", marginTop: 10 }}>{bloqueError}</div>
          )}
          {medico && (
            <div style={{
              marginTop: 14, background: "var(--fx-warning-bg)", border: "1px solid var(--fx-warning-border)",
              borderRadius: "var(--fx-radius-md)", padding: "12px 14px",
            }}>
              <div className="ax-acciones" style={{ gap: 8, marginBottom: 8 }}>
                <TriangleAlert size={16} style={{ color: "var(--fx-warning-text)" }} aria-hidden="true" />
                <span className="ax-eyebrow" style={{ color: "var(--fx-warning-text)" }}>Información médica</span>
              </div>
              {alumno.alergias && <div className="ax-sub" style={{ whiteSpace: "normal" }}><strong>Alergias:</strong> {alumno.alergias}</div>}
              {alumno.condiciones_medicas && <div className="ax-sub" style={{ whiteSpace: "normal" }}><strong>Condiciones:</strong> {alumno.condiciones_medicas}</div>}
              {alumno.notas_importantes && <div className="ax-sub" style={{ whiteSpace: "normal" }}><strong>Notas:</strong> {alumno.notas_importantes}</div>}
            </div>
          )}
        </Card>

        {/* Tutores */}
        <Seccion titulo="Tutores" count={tutores.length} onAdd={() => setShowTutorPicker(true)}>
          {tutores.length === 0 ? (
            <p className="ax-sub" style={{ margin: 0 }}>Sin tutores registrados.</p>
          ) : (
            <div className="ax-lista">
              {tutores.map((t) => (
                <Card key={t.id} style={{ padding: "12px 16px" }}>
                  <div className="ax-fila">
                    <div className="ax-aparecer">
                      <div className="ax-nombre">
                        {t.nombre} {t.apellidos} <Badge tone="neutral">{t.relacion}</Badge>
                        {vinculosEstado[t.id] && vinculosEstado[t.id] !== "activo" && (
                          <Badge tone="warning">
                            {vinculosEstado[t.id] === "pendiente" ? "Pendiente de confirmar" : "Rechazado"}
                          </Badge>
                        )}
                      </div>
                      <div className="ax-sub" style={{ marginTop: 2 }}>{t.email || t.telefono || "—"}</div>
                    </div>
                    <div className="ax-acciones">
                      <Button variante="ghost" icono={Unlink} title="Quitar de este alumno" onClick={() => setQuitarTarget(t)} />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </Seccion>

        {/* Contactos de emergencia */}
        <Seccion titulo="Contactos de emergencia" count={contactos.length} onAdd={() => { setEditContacto(null); setShowContactoForm(true); }}>
          {contactos.length === 0 ? (
            <p className="ax-sub" style={{ margin: 0 }}>Sin contactos registrados.</p>
          ) : (
            <div className="ax-lista">
              {contactos.map((c) => (
                <Card key={c.id} style={{ padding: "12px 16px" }}>
                  <div className="ax-fila">
                    <div className="ax-aparecer">
                      <div className="ax-nombre">#{c.orden} {c.nombre} <span className="ax-sub" style={{ fontWeight: 400 }}>{c.relacion}</span></div>
                      <div className="ax-sub" style={{ marginTop: 2 }}>
                        <Phone size={13} aria-hidden="true" /> {c.telefono}
                      </div>
                    </div>
                    <div className="ax-acciones">
                      <Button variante="ghost" icono={Pencil} title="Editar" onClick={() => { setEditContacto(c); setShowContactoForm(true); }} />
                      <Button variante="ghost" icono={Trash2} title="Eliminar" onClick={() => handleDeleteContacto(c.id)} />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </Seccion>

        {/* Inscripciones */}
        <Seccion titulo="Inscripciones" count={inscripciones.length}>
          {inscripciones.length === 0 ? (
            <p className="ax-sub" style={{ margin: 0 }}>Sin inscripciones.</p>
          ) : (
            <div className="ax-lista">
              {inscripciones.map((i) => (
                <Card key={i.id} style={{ padding: "12px 16px" }}>
                  <div className="ax-fila">
                    <div className="ax-aparecer">
                      <div className="ax-nombre">{cursos[i.curso_id] || "Curso"}</div>
                      <div className="ax-sub" style={{ marginTop: 2 }}>{fmtDate(i.fecha_inscripcion)}</div>
                    </div>
                    <BadgeEstado estado={i.estado} />
                  </div>
                </Card>
              ))}
            </div>
          )}
        </Seccion>

        {/* Cargos */}
        <Seccion titulo="Cargos" count={cargos.length}>
          {cargos.length === 0 ? (
            <p className="ax-sub" style={{ margin: 0 }}>Sin cargos.</p>
          ) : (
            <div className="ax-lista">
              {cargos.map((cg) => (
                <Card key={cg.id} style={{ padding: "12px 16px" }}>
                  <div className="ax-fila">
                    <div className="ax-aparecer">
                      <div className="ax-nombre">{cg.concepto}</div>
                      <div className="ax-sub" style={{ marginTop: 2 }}>vence {fmtDate(cg.fecha_vencimiento)}</div>
                    </div>
                    <span className="ax-pct-num" style={{ fontSize: "var(--fx-body-size)" }}>{fmtMoney(cg.monto)}</span>
                    <BadgeEstado estado={cg.estado} />
                  </div>
                </Card>
              ))}
            </div>
          )}
        </Seccion>
      </Page>

      {showTutorPicker && (
        <Modal titulo="Agregar tutor" onClose={() => setShowTutorPicker(false)}>
          <TutorPicker
            tutores={allTutores}
            assignedIds={new Set(tutores.map((t) => t.id))}
            onSelect={handleLinkTutor}
            onCancel={() => setShowTutorPicker(false)}
          />
        </Modal>
      )}
      {quitarTarget && (
        <Modal titulo="Quitar tutor" onClose={() => setQuitarTarget(null)}>
          <p className="ax-sub" style={{ margin: "0 0 18px", whiteSpace: "normal" }}>
            ¿Quitar a <strong>{quitarTarget.nombre} {quitarTarget.apellidos}</strong> de {alumno?.nombre} {alumno?.apellidos}?
            El tutor seguirá existiendo (y vinculado a sus otros alumnos). Para eliminarlo por completo, hazlo desde Tutores.
          </p>
          <div className="ax-acciones" style={{ justifyContent: "flex-end" }}>
            <Button variante="ghost" onClick={() => setQuitarTarget(null)}>Cancelar</Button>
            <Button variante="primary" icono={Unlink} onClick={() => handleQuitarTutor(quitarTarget.id)}>Quitar</Button>
          </div>
        </Modal>
      )}
      {showContactoForm && (
        <Modal titulo={editContacto ? "Editar contacto" : "Nuevo contacto"} onClose={() => { setShowContactoForm(false); setEditContacto(null); }}>
          <ContactoForm initial={editContacto || undefined} onSave={handleSaveContacto} onCancel={() => { setShowContactoForm(false); setEditContacto(null); }} />
        </Modal>
      )}
      {showEditarCuenta && perfil && (
        <CuentaEditModal
          cuentaId={perfil.id}
          onClose={() => setShowEditarCuenta(false)}
          onSaved={() => { setShowEditarCuenta(false); loadAll(); }}
        />
      )}
    </AdminLayout>
  );
}
