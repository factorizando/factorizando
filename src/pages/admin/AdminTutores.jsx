// src/pages/admin/AdminTutores.jsx
// Los tutores son cuentas (`profiles` con rol='tutor'), no fichas aparte.
// Aquí se administra su relación y se les corta/restaura el acceso. La
// aprobación vive en Solicitudes y la suspensión con motivo, en Cuentas.
import { useState, useEffect } from "react";
import { Users, Pencil, Archive, RotateCcw } from "lucide-react";
import { supabase } from "../../lib/supabase";
import AdminLayout from "../../components/admin/AdminLayout.jsx";
import {
  Page, Card, Badge, Button, SearchField, Field, Select, Modal, EmptyState,
} from "../../components/admin/ui.jsx";

const RELACION_LABEL = { padre: "Padre", madre: "Madre", tutor: "Tutor" };
const RELACIONES = [
  { value: "padre", label: "Padre" },
  { value: "madre", label: "Madre" },
  { value: "tutor", label: "Tutor" },
];

function RelacionModal({ tutor, onClose }) {
  const [relacion, setRelacion] = useState(tutor.relacion || "tutor");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  async function guardar() {
    setSaving(true); setError(null);
    const { error: err } = await supabase.from("profiles").update({ relacion }).eq("id", tutor.id);
    setSaving(false);
    if (err) { setError(err.message || "No se pudo guardar."); return; }
    onClose();
  }

  return (
    <Modal titulo={`Relación de ${tutor.nombre || "tutor"}`} onClose={onClose}>
      <Field label="Relación">
        <Select value={relacion} onChange={(e) => setRelacion(e.target.value)}>
          {RELACIONES.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
        </Select>
      </Field>
      {error && <div className="ax-badge ax-badge-error" style={{ display: "block", marginTop: 12 }}>{error}</div>}
      <div className="ax-acciones" style={{ justifyContent: "flex-end", marginTop: 18 }}>
        <Button variante="ghost" onClick={onClose}>Cancelar</Button>
        <Button variante="primary" disabled={saving} onClick={guardar}>{saving ? "Guardando…" : "Guardar"}</Button>
      </div>
    </Modal>
  );
}

export default function AdminTutores({ embedded }) {
  const [tutores, setTutores] = useState([]);
  const [conteos, setConteos] = useState({});
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [mostrarArchivados, setMostrarArchivados] = useState(false);
  const [editRelacion, setEditRelacion] = useState(null);
  const [archiveTarget, setArchiveTarget] = useState(null);
  const [accionError, setAccionError] = useState(null);
  const [guardando, setGuardando] = useState(false);

  useEffect(() => { loadAll(); }, []);

  async function loadAll() {
    setLoading(true);
    const [{ data: profs }, { data: vinculos }] = await Promise.all([
      supabase.from("profiles").select("*").eq("rol", "tutor").order("apellidos", { ascending: true }),
      supabase.from("alumno_tutor").select("tutor_id").eq("estado", "activo"),
    ]);
    setTutores(profs || []);
    const c = {};
    (vinculos || []).forEach((v) => { c[v.tutor_id] = (c[v.tutor_id] || 0) + 1; });
    setConteos(c);
    setLoading(false);
  }

  const archivado = (t) => t.estado_acceso === "rechazado";

  const filtrados = tutores.filter((t) => {
    if (archivado(t) !== mostrarArchivados) return false;
    if (!search) return true;
    const q = search.toLowerCase();
    return `${t.nombre || ""} ${t.apellidos || ""} ${t.email || ""} ${t.telefono || ""}`.toLowerCase().includes(q);
  });

  // Archivar = corta el acceso (cuenta no aprobada) y desactiva sus vínculos.
  // No borra `profiles`: evita tocar cuentas de auth por accidente.
  async function handleArchivar() {
    if (!archiveTarget) return;
    setGuardando(true); setAccionError(null);
    const { error } = await supabase.from("profiles").update({ estado_acceso: "rechazado" }).eq("id", archiveTarget.id);
    if (error) { setAccionError(error.message || "No se pudo archivar."); setGuardando(false); return; }
    await supabase.from("alumno_tutor").update({ estado: "rechazado" }).eq("tutor_id", archiveTarget.id);
    setArchiveTarget(null);
    setGuardando(false);
    await loadAll();
  }

  async function handleRestaurar(t) {
    await supabase.from("profiles").update({ estado_acceso: "aprobado" }).eq("id", t.id);
    await loadAll();
  }

  const contenido = (
    <Page
      eyebrow="Personas"
      titulo="Tutores"
      descripcion="Cuentas de tutor. Administra su relación y su acceso; la aprobación se hace en Solicitudes."
    >
      <div className="ax-acciones" style={{ justifyContent: "space-between" }}>
        <SearchField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar tutor…"
          style={{ flex: "1 1 240px", maxWidth: 340 }}
        />
        <div className="ax-acciones">
          <span className="ax-sub">{filtrados.length} tutores</span>
          <Button variante={mostrarArchivados ? "primary" : "subtle"} icono={Archive} onClick={() => setMostrarArchivados((v) => !v)}>
            {mostrarArchivados ? "Ver activos" : "Ver archivados"}
          </Button>
        </div>
      </div>

      {loading ? (
        <p className="ax-sub">Cargando…</p>
      ) : filtrados.length === 0 ? (
        <EmptyState icono={Users} titulo={mostrarArchivados ? "Sin archivados" : "Sin tutores"}>
          {mostrarArchivados
            ? "No hay tutores archivados."
            : tutores.length === 0 ? "Aún no hay tutores registrados." : "Ningún tutor coincide con la búsqueda."}
        </EmptyState>
      ) : (
        <div className="ax-lista">
          {filtrados.map((t) => {
            const arch = archivado(t);
            return (
              <Card key={t.id}>
                <div className="ax-fila">
                  <span className="ax-avatar">{(t.nombre || t.email || "?").slice(0, 1).toUpperCase()}</span>
                  <div className="ax-aparecer">
                    <div className="ax-nombre">{t.nombre} {t.apellidos}</div>
                    <div className="ax-sub">{t.email || "—"}{t.telefono ? ` · ${t.telefono}` : ""}</div>
                  </div>
                  {t.relacion && <Badge tone="accent">{RELACION_LABEL[t.relacion] || t.relacion}</Badge>}
                  {arch ? (
                    <Badge tone="neutral">Archivado</Badge>
                  ) : (
                    <Badge tone="neutral">{conteos[t.id] || 0} {(conteos[t.id] || 0) === 1 ? "alumno" : "alumnos"}</Badge>
                  )}
                  <div className="ax-acciones">
                    <Button variante="ghost" icono={Pencil} title="Editar relación" onClick={() => setEditRelacion(t)} />
                    {arch ? (
                      <Button variante="ghost" icono={RotateCcw} title="Reactivar" onClick={() => handleRestaurar(t)} />
                    ) : t.estado_acceso === "aprobado" ? (
                      <Button variante="ghost" icono={Archive} title="Archivar" onClick={() => { setAccionError(null); setArchiveTarget(t); }} />
                    ) : null}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {editRelacion && <RelacionModal tutor={editRelacion} onClose={() => { setEditRelacion(null); loadAll(); }} />}

      {archiveTarget && (
        <Modal titulo="Archivar tutor" onClose={() => { setArchiveTarget(null); setAccionError(null); }}>
          <p className="ax-sub" style={{ margin: "0 0 12px", whiteSpace: "normal" }}>
            Se cortará el acceso de <strong>{archiveTarget.nombre} {archiveTarget.apellidos}</strong> y se
            desactivarán sus vínculos con alumnos. La cuenta se conserva. Para reactivarla, usa <em>Reactivar</em>.
          </p>
          {accionError && <div className="ax-badge ax-badge-error" style={{ display: "block", marginBottom: 12 }}>{accionError}</div>}
          <div className="ax-acciones" style={{ justifyContent: "flex-end" }}>
            <Button variante="ghost" onClick={() => { setArchiveTarget(null); setAccionError(null); }}>Cancelar</Button>
            <Button variante="primary" icono={Archive} disabled={guardando} onClick={handleArchivar}>
              {guardando ? "Archivando…" : "Archivar"}
            </Button>
          </div>
        </Modal>
      )}
    </Page>
  );

  if (embedded) return contenido;
  return <AdminLayout active="tutores">{contenido}</AdminLayout>;
}
