// src/pages/admin/AdminSolicitudes.jsx
// Bandeja de solicitudes de acceso: el registro nace en `pendiente` y desde
// aquí el administrador aprueba (como alumno, eligiendo bloque; o como tutor,
// vinculando su ficha) o rechaza con un motivo.
//
// Aprobar `regularizacion` crea además la fila de `alumnos` que el taller
// necesita (alumno_id = profiles.id). El nivel primaria/secundaria se deduce
// por edad y el admin puede corregirlo luego en Alumnos.
import { useState, useEffect } from "react";
import {
  Inbox, Clock, CircleCheck, CircleX, GraduationCap, Users,
  Mail, Phone, MapPin, CalendarDays, Building2,
} from "lucide-react";
import { supabase } from "../../lib/supabase";
import AdminLayout from "../../components/admin/AdminLayout.jsx";
import {
  Page, Card, Badge, Button, SearchField, Field, Input, Select, Textarea, Modal, EmptyState,
} from "../../components/admin/ui.jsx";

const BLOQUES = [
  { value: "preparatoria", label: "Admisión preparatoria" },
  { value: "universidad", label: "Admisión universidad" },
  { value: "regularizacion", label: "Regularización" },
];
const BLOQUE_LABEL = Object.fromEntries(BLOQUES.map((b) => [b.value, b.label]));

const NIVEL_EDU = { basica: "Secundaria", media_superior: "Preparatoria", superior: "Universidad" };

const ESTADOS = [
  { value: "pendiente", label: "Pendientes" },
  { value: "aprobado", label: "Aprobadas" },
  { value: "rechazado", label: "Rechazadas" },
  { value: "todos", label: "Todas" },
];

function fmtFecha(iso) {
  if (!iso) return "—";
  const [y, m, d] = iso.split("T")[0].split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("es-MX", { day: "2-digit", month: "short", year: "numeric" });
}
function calcEdad(fecha) {
  if (!fecha) return null;
  const hoy = new Date();
  const n = new Date(fecha);
  let e = hoy.getFullYear() - n.getFullYear();
  const m = hoy.getMonth() - n.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < n.getDate())) e--;
  return e >= 0 && e < 120 ? e : null;
}
function nivelRegularizacion(fechaNac) {
  const e = calcEdad(fechaNac);
  return e != null && e < 12 ? "primaria" : "secundaria";
}
function partirNombre(completo) {
  const partes = (completo || "").trim().split(/\s+/).filter(Boolean);
  if (partes.length === 0) return { nombre: "", apellidos: "" };
  if (partes.length === 1) return { nombre: partes[0], apellidos: "" };
  return { nombre: partes[0], apellidos: partes.slice(1).join(" ") };
}

// Nombre y apellidos: usa `apellidos` si el alta lo capturó; si no (perfiles
// anteriores a la columna), parte el nombre completo como antes.
function nombreApellidos(perfil) {
  if (perfil?.apellidos && perfil.apellidos.trim()) {
    return { nombre: (perfil.nombre || "").trim(), apellidos: perfil.apellidos.trim() };
  }
  return partirNombre(perfil?.nombre);
}

const TONO_ESTADO = {
  pendiente: { tone: "warning", Icon: Clock, label: "Pendiente" },
  aprobado: { tone: "success", Icon: CircleCheck, label: "Aprobada" },
  rechazado: { tone: "error", Icon: CircleX, label: "Rechazada" },
};

function Dato({ icono: Icono, children }) {
  return (
    <span className="ax-sub" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
      {Icono && <Icono size={14} aria-hidden="true" />} {children || "—"}
    </span>
  );
}

function SolicitudCard({ perfil, onAprobar, onRechazar }) {
  const [abierta, setAbierta] = useState(false);
  const est = TONO_ESTADO[perfil.estado_acceso] || TONO_ESTADO.pendiente;
  const edad = calcEdad(perfil.fecha_nacimiento);

  return (
    <Card>
      <div className="ax-fila">
        <span className="ax-avatar">{(perfil.nombre || perfil.email || "?").slice(0, 1).toUpperCase()}</span>
        <div className="ax-aparecer">
          <div className="ax-nombre">{perfil.nombre}{perfil.apellidos ? ` ${perfil.apellidos}` : ""}</div>
          <div className="ax-sub">{perfil.email || "—"}</div>
        </div>
        {perfil.tipo_solicitado && (
          <Badge tone="neutral">{perfil.tipo_solicitado === "tutor" ? "Tutor" : "Alumno"}</Badge>
        )}
        <Badge tone={est.tone} icono={est.Icon}>{est.label}</Badge>
      </div>

      <div className="ax-acciones" style={{ marginTop: 14, gap: 16 }}>
        <Dato icono={Phone}>{perfil.telefono}</Dato>
        {(perfil.estado || perfil.ciudad) && (
          <Dato icono={MapPin}>{perfil.estado}{perfil.ciudad ? `, ${perfil.ciudad}` : ""}</Dato>
        )}
        {perfil.fecha_nacimiento && (
          <Dato icono={CalendarDays}>{fmtFecha(perfil.fecha_nacimiento)}{edad != null ? ` · ${edad} años` : ""}</Dato>
        )}
        {perfil.nivel_educativo && (
          <Dato icono={GraduationCap}>{NIVEL_EDU[perfil.nivel_educativo] || perfil.nivel_educativo}</Dato>
        )}
        {perfil.institucion && <Dato icono={Building2}>{perfil.institucion}</Dato>}
      </div>

      {perfil.estado_acceso === "aprobado" && perfil.bloque && (
        <p className="ax-sub" style={{ margin: "12px 0 0" }}>
          Acceso: <strong>{BLOQUE_LABEL[perfil.bloque] || perfil.bloque}</strong>
        </p>
      )}
      {perfil.estado_acceso === "rechazado" && perfil.motivo_rechazo && (
        <p className="ax-sub" style={{ margin: "12px 0 0" }}>Motivo: {perfil.motivo_rechazo}</p>
      )}

      {(perfil.estado_acceso === "pendiente" || perfil.estado_acceso === "rechazado") && (
        <>
          <div className="ax-acciones" style={{ marginTop: 14 }}>
            {abierta ? (
              <>
                <Button variante="primary" icono={GraduationCap} onClick={() => onAprobar(perfil)}>Aprobar</Button>
                <Button variante="subtle" icono={CircleX} onClick={() => onRechazar(perfil)}>Rechazar</Button>
                <Button variante="ghost" onClick={() => setAbierta(false)}>Cancelar</Button>
              </>
            ) : (
              <Button variante="secondary" onClick={() => setAbierta(true)}>Revisar solicitud</Button>
            )}
          </div>
        </>
      )}
    </Card>
  );
}

function AprobarModal({ perfil, tutores, onClose, onConfirm }) {
  const [tipo, setTipo] = useState(perfil.tipo_solicitado === "tutor" ? "tutor" : "alumno");
  const [bloque, setBloque] = useState("preparatoria");
  const [tutorId, setTutorId] = useState("nuevo");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const esRegularizacion = tipo === "alumno" && bloque === "regularizacion";
  const tutoresLibres = (tutores || []).filter((t) => !t.profile_id);

  return (
    <Modal titulo="Aprobar solicitud" onClose={onClose}>
      <p className="ax-sub" style={{ margin: "0 0 16px" }}>{perfil.nombre || perfil.email}</p>

      <Field label="Tipo de cuenta">
        <div className="ax-acciones">
          <Button
            variante={tipo === "alumno" ? "primary" : "subtle"}
            icono={GraduationCap}
            onClick={() => setTipo("alumno")}
          >Alumno</Button>
          <Button
            variante={tipo === "tutor" ? "primary" : "subtle"}
            icono={Users}
            onClick={() => setTipo("tutor")}
          >Tutor</Button>
        </div>
      </Field>

      {tipo === "alumno" ? (
        <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
          <Field label="Bloque de acceso">
            <Select value={bloque} onChange={(e) => setBloque(e.target.value)}>
              {BLOQUES.map((b) => <option key={b.value} value={b.value}>{b.label}</option>)}
            </Select>
          </Field>
          {esRegularizacion && (
            <p className="ax-sub" style={{ margin: 0 }}>
              Se creará su ficha de alumno con nivel <strong>{nivelRegularizacion(perfil.fecha_nacimiento)}</strong> (por edad).
            </p>
          )}
        </div>
      ) : (
        <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
          <Field label="Ficha de tutor">
            <Select value={tutorId} onChange={(e) => setTutorId(e.target.value)}>
              <option value="nuevo">— Crear ficha nueva con estos datos —</option>
              {tutoresLibres.map((t) => (
                <option key={t.id} value={t.id}>{t.nombre} {t.apellidos}</option>
              ))}
            </Select>
          </Field>
          <p className="ax-sub" style={{ margin: 0 }}>
            {tutorId === "nuevo"
              ? "Se creará una ficha de tutor con su nombre, teléfono y correo."
              : "Se vinculará su cuenta a la ficha elegida."}
            {" "}Luego podrás asociarle alumnos desde Tutores.
          </p>
        </div>
      )}

      {error && <div className="ax-badge ax-badge-error" style={{ marginTop: 14, display: "block" }}>{error}</div>}

      <div className="ax-acciones" style={{ marginTop: 20, justifyContent: "flex-end" }}>
        <Button variante="ghost" onClick={onClose}>Cancelar</Button>
        <Button
          variante="primary"
          disabled={saving}
          onClick={async () => {
            setSaving(true); setError(null);
            const res = await onConfirm(perfil, { tipo, bloque, tutorId });
            if (res?.error) { setError(res.error); setSaving(false); }
          }}
        >{saving ? "Aprobando…" : "Aprobar"}</Button>
      </div>
    </Modal>
  );
}

function RechazarModal({ perfil, onClose, onConfirm }) {
  const [motivo, setMotivo] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  return (
    <Modal titulo="Rechazar solicitud" onClose={onClose}>
      <p className="ax-sub" style={{ margin: "0 0 16px" }}>{perfil.nombre || perfil.email}</p>
      <Field label="Motivo (lo verá el alumno)">
        <Textarea
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
          placeholder="Ej. No pudimos verificar la institución."
        />
      </Field>
      {error && <div className="ax-badge ax-badge-error" style={{ marginTop: 14, display: "block" }}>{error}</div>}
      <div className="ax-acciones" style={{ marginTop: 20, justifyContent: "flex-end" }}>
        <Button variante="ghost" onClick={onClose}>Cancelar</Button>
        <Button
          variante="primary"
          disabled={saving}
          onClick={async () => {
            setSaving(true); setError(null);
            if (!motivo.trim()) { setError("Escribe un motivo."); setSaving(false); return; }
            const res = await onConfirm(perfil, motivo.trim());
            if (res?.error) { setError(res.error); setSaving(false); }
          }}
        >{saving ? "Rechazando…" : "Rechazar"}</Button>
      </div>
    </Modal>
  );
}

export default function AdminSolicitudes({ embedded }) {
  const [perfiles, setPerfiles] = useState([]);
  const [tutores, setTutores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState("pendiente");
  const [busqueda, setBusqueda] = useState("");
  const [aprobar, setAprobar] = useState(null);
  const [rechazar, setRechazar] = useState(null);

  useEffect(() => { load(); }, []);

  async function load() {
    setLoading(true);
    const [{ data, error }, { data: tuts }] = await Promise.all([
      supabase.from("profiles").select("*").order("nombre", { ascending: true }),
      supabase.from("tutores").select("id, nombre, apellidos, profile_id").order("apellidos", { ascending: true }),
    ]);
    if (error) console.error("Error cargando solicitudes:", error);
    setPerfiles(data || []);
    setTutores(tuts || []);
    setLoading(false);
  }

  const conteos = {
    pendiente: perfiles.filter((p) => p.estado_acceso === "pendiente").length,
    aprobado: perfiles.filter((p) => p.estado_acceso === "aprobado").length,
    rechazado: perfiles.filter((p) => p.estado_acceso === "rechazado").length,
  };

  const filtrados = perfiles.filter((p) => {
    if (filtro !== "todos" && p.estado_acceso !== filtro) return false;
    if (busqueda) {
      const q = busqueda.toLowerCase();
      if (!`${p.nombre || ""} ${p.email || ""}`.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  async function asegurarAlumno(perfil) {
    if (!perfil.fecha_nacimiento) {
      return { error: "El perfil no tiene fecha de nacimiento; el alumno no podría registrarse en regularización." };
    }
    const { nombre, apellidos } = nombreApellidos(perfil);
    const fila = {
      id: perfil.id,
      nombre: nombre || "(sin nombre)",
      apellidos,
      fecha_nacimiento: perfil.fecha_nacimiento,
      email: perfil.email || null,
      telefono: perfil.telefono || null,
      nivel: nivelRegularizacion(perfil.fecha_nacimiento),
    };
    const { error } = await supabase.from("alumnos").upsert(fila, { onConflict: "id" });
    if (error) return { error: `Se aprobó el acceso pero no se pudo crear la ficha de alumno: ${error.message}` };
    return {};
  }

  async function handleAprobar(perfil, payload) {
    const base = {
      estado_acceso: "aprobado",
      motivo_rechazo: null,
      revisado_en: new Date().toISOString(),
    };

    if (payload.tipo === "tutor") {
      const { error } = await supabase
        .from("profiles")
        .update({ ...base, rol: "tutor", bloque: null })
        .eq("id", perfil.id);
      if (error) return { error: error.message || "No se pudo aprobar." };

      if (payload.tutorId === "nuevo") {
        const { nombre, apellidos } = nombreApellidos(perfil);
        const { error: terr } = await supabase.from("tutores").insert({
          nombre: nombre || "(sin nombre)",
          apellidos,
          telefono: perfil.telefono || "",
          email: perfil.email || null,
          relacion: "tutor",
          profile_id: perfil.id,
        });
        if (terr) return { error: `Se aprobó la cuenta pero no se pudo crear la ficha de tutor: ${terr.message}` };
      } else {
        const { error: terr } = await supabase
          .from("tutores").update({ profile_id: perfil.id }).eq("id", payload.tutorId);
        if (terr) return { error: `No se pudo vincular la ficha de tutor: ${terr.message}` };
      }
    } else {
      const { error } = await supabase
        .from("profiles")
        .update({ ...base, bloque: payload.bloque })
        .eq("id", perfil.id);
      if (error) return { error: error.message || "No se pudo aprobar." };

      if (payload.bloque === "regularizacion") {
        const res = await asegurarAlumno(perfil);
        if (res.error) return res;
      }
    }

    setAprobar(null);
    await load();
    return {};
  }

  async function handleRechazar(perfil, motivo) {
    const { error } = await supabase
      .from("profiles")
      .update({
        estado_acceso: "rechazado",
        bloque: null,
        motivo_rechazo: motivo,
        revisado_en: new Date().toISOString(),
      })
      .eq("id", perfil.id);
    if (error) return { error: error.message || "No se pudo rechazar." };
    // El alta del alumno creó su expediente (id = cuenta); al rechazar se borra,
    // y con él sus contactos de emergencia (FK en cascada).
    await supabase.from("alumnos").delete().eq("id", perfil.id);
    setRechazar(null);
    await load();
    return {};
  }

  const contenido = (
    <Page
      eyebrow="Personas"
      titulo="Solicitudes"
      descripcion="Aprueba el acceso y asigna el bloque, o rechaza con un motivo."
    >
      <div className="ax-acciones" style={{ justifyContent: "space-between" }}>
        <SearchField
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar por nombre o correo…"
          style={{ flex: "1 1 260px", maxWidth: 340 }}
        />
        <div className="ax-acciones">
          {ESTADOS.map((e) => {
            const on = filtro === e.value;
            const n = e.value === "todos" ? perfiles.length : conteos[e.value];
            return (
              <Button
                key={e.value}
                variante={on ? "primary" : "subtle"}
                onClick={() => setFiltro(e.value)}
              >{e.label} ({n})</Button>
            );
          })}
        </div>
      </div>

      {loading ? (
        <p className="ax-sub">Cargando…</p>
      ) : filtrados.length === 0 ? (
        <EmptyState icono={Inbox} titulo="Nada por aquí">
          {perfiles.length === 0 ? "Todavía no hay cuentas registradas." : "Ninguna solicitud coincide con el filtro."}
        </EmptyState>
      ) : (
        <div className="ax-lista">
          {filtrados.map((p) => (
            <SolicitudCard key={p.id} perfil={p} onAprobar={setAprobar} onRechazar={setRechazar} />
          ))}
        </div>
      )}

      {aprobar && (
        <AprobarModal perfil={aprobar} tutores={tutores} onClose={() => setAprobar(null)} onConfirm={handleAprobar} />
      )}
      {rechazar && (
        <RechazarModal perfil={rechazar} onClose={() => setRechazar(null)} onConfirm={handleRechazar} />
      )}
    </Page>
  );

  if (embedded) return contenido;
  return <AdminLayout active="solicitudes">{contenido}</AdminLayout>;
}
