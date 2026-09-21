// src/pages/admin/AdminSolicitudes.jsx
// Bandeja de solicitudes de acceso: el registro nace en `pendiente` y desde
// aquí el administrador aprueba (eligiendo bloque) o rechaza (con motivo).
//
// Aprobar `regularizacion` crea además la fila de `alumnos` que el taller
// necesita para guardar el avance (alumno_id = profiles.id). El nivel
// primaria/secundaria se deduce por edad y el admin puede corregirlo luego.

import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import AdminHeader from "../../components/admin/AdminHeader.jsx";
import { TEXTO_FLEXIBLE } from "../../components/admin/layout.js";

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
  purple:  "#a78bfa",
  text:    "#e8eaf0",
  muted:   "#5a6070",
  dim:     "#8a9ab8",
};

const BLOQUES = [
  { value: "preparatoria",   label: "Admisión preparatoria" },
  { value: "universidad",    label: "Admisión universidad" },
  { value: "regularizacion", label: "Regularización" },
];

const BLOQUE_LABEL = Object.fromEntries(BLOQUES.map((b) => [b.value, b.label]));

const NIVEL_EDU = {
  basica: "Secundaria",
  media_superior: "Preparatoria",
  superior: "Universidad",
};

const ESTADOS = [
  { value: "pendiente", label: "Pendientes", color: C.yellow },
  { value: "aprobado",  label: "Aprobadas",  color: C.green },
  { value: "rechazado", label: "Rechazadas", color: C.red },
  { value: "todos",     label: "Todas",      color: C.muted },
];

const ESTADO_COLOR = { pendiente: C.yellow, aprobado: C.green, rechazado: C.red };

function fmtDate(iso) {
  if (!iso) return "—";
  const [y, m, d] = iso.split("T")[0].split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("es-MX", {
    day: "2-digit", month: "short", year: "numeric",
  });
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

// Mismo corte que se conversó: por debajo de 12, primaria; de ahí en adelante,
// secundaria. El administrador puede corregirlo en Alumnos.
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

function Modal({ title, onClose, children }) {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "center",
      background: "rgba(0,0,0,.6)", backdropFilter: "blur(4px)",
    }} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={{
        background: C.card, border: `1px solid ${C.border}`, borderRadius: 14,
        width: "90%", maxWidth: 520, maxHeight: "85vh", overflow: "auto", padding: "24px 28px",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
          <h3 style={{ margin: 0, color: C.text, fontSize: 16, fontWeight: 700, fontFamily: font }}>{title}</h3>
          <button onClick={onClose} style={{ background: "none", border: "none", color: C.muted, fontSize: 20, cursor: "pointer", padding: 4 }}>×</button>
        </div>
        {children}
      </div>
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

function Dato({ label, valor }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <span style={{ color: C.muted, fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", fontFamily: font }}>{label}</span>
      <span style={{ color: C.text, fontSize: 13, fontFamily: font, ...TEXTO_FLEXIBLE }}>{valor || "—"}</span>
    </div>
  );
}

function EstadoBadge({ estado }) {
  const color = ESTADO_COLOR[estado] || C.muted;
  const label = { pendiente: "Pendiente", aprobado: "Aprobada", rechazado: "Rechazada" }[estado] || estado;
  return (
    <span style={{ background: color + "22", color, borderRadius: 5, padding: "2px 9px", fontSize: 11, fontWeight: 700, fontFamily: font, whiteSpace: "nowrap" }}>
      {label}
    </span>
  );
}

// ── Ficha de solicitud ────────────────────────────────────────────────────────
function SolicitudCard({ perfil, onAprobar, onRechazar }) {
  const [abierta, setAbierta] = useState(false);
  return (
    <div style={{
      background: C.card, border: `1px solid ${C.border}`, borderRadius: 12,
      padding: "16px 18px", display: "flex", flexDirection: "column", gap: 12,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <span style={{
          width: 42, height: 42, borderRadius: "50%", flexShrink: 0, overflow: "hidden",
          background: C.surface, display: "grid", placeItems: "center", color: C.dim,
          fontSize: 16, fontWeight: 700, fontFamily: font,
        }}>
          {perfil.avatar_url
            ? <img src={perfil.avatar_url} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            : (perfil.nombre || perfil.email || "?").slice(0, 1).toUpperCase()}
        </span>
        <div style={{ flex: 1, minWidth: 180 }}>
          <div style={{ color: C.text, fontSize: 14.5, fontWeight: 700, fontFamily: font, ...TEXTO_FLEXIBLE }}>
            {perfil.nombre || "(sin nombre)"}
          </div>
          <div style={{ color: C.muted, fontSize: 12.5, fontFamily: font, ...TEXTO_FLEXIBLE }}>
            {perfil.email || "—"}
          </div>
        </div>
        <EstadoBadge estado={perfil.estado_acceso} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(150px, 100%), 1fr))", gap: 12 }}>
        <Dato label="Teléfono" valor={perfil.telefono} />
        <Dato label="Estado" valor={perfil.estado} />
        <Dato label="Ciudad" valor={perfil.ciudad} />
        <Dato label="Nacimiento" valor={fmtDate(perfil.fecha_nacimiento)} />
        <Dato label="Nivel educativo" valor={NIVEL_EDU[perfil.nivel_educativo] || perfil.nivel_educativo} />
        <Dato label="Institución" valor={perfil.institucion} />
      </div>

      {perfil.estado_acceso === "aprobado" && perfil.bloque && (
        <div style={{ color: C.green, fontSize: 12.5, fontFamily: font }}>
          Acceso: <strong>{BLOQUE_LABEL[perfil.bloque] || perfil.bloque}</strong>
        </div>
      )}
      {perfil.estado_acceso === "rechazado" && perfil.motivo_rechazo && (
        <div style={{ color: C.dim, fontSize: 12.5, fontFamily: font }}>
          Motivo: {perfil.motivo_rechazo}
        </div>
      )}

      {(perfil.estado_acceso === "pendiente" || perfil.estado_acceso === "rechazado") && (
        <>
          <button type="button" onClick={() => setAbierta((v) => !v)} style={{
            alignSelf: "flex-start", background: "none", border: "none", color: C.blue,
            fontSize: 12.5, fontWeight: 600, cursor: "pointer", fontFamily: font, padding: 0,
          }}>
            {abierta ? "Ocultar acciones" : "Revisar solicitud"}
          </button>
          {abierta && (
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button type="button" onClick={() => onAprobar(perfil)} style={{
                background: C.green, border: "none", borderRadius: 8, padding: "8px 18px",
                color: "#04221a", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: font,
              }}>Aprobar</button>
              <button type="button" onClick={() => onRechazar(perfil)} style={{
                background: "transparent", border: `1px solid ${C.red}66`, borderRadius: 8,
                padding: "8px 18px", color: C.red, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: font,
              }}>Rechazar</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// ── Diálogos ──────────────────────────────────────────────────────────────────
function AprobarModal({ perfil, onClose, onConfirm }) {
  const [bloque, setBloque] = useState("preparatoria");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const esRegularizacion = bloque === "regularizacion";

  return (
    <Modal title="Aprobar solicitud" onClose={onClose}>
      <p style={{ color: C.dim, fontSize: 13, fontFamily: font, margin: "0 0 16px" }}>
        {perfil.nombre || perfil.email}
      </p>
      <Field label="Bloque de acceso">
        <select value={bloque} onChange={(e) => setBloque(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
          {BLOQUES.map((b) => <option key={b.value} value={b.value}>{b.label}</option>)}
        </select>
      </Field>
      {esRegularizacion && (
        <p style={{ color: C.muted, fontSize: 12, fontFamily: font, lineHeight: 1.5, margin: "12px 0 0" }}>
          Se creará su ficha de alumno con nivel{" "}
          <strong style={{ color: C.text }}>{nivelRegularizacion(perfil.fecha_nacimiento)}</strong>{" "}
          (por edad). Podrás corregirlo en Alumnos.
        </p>
      )}
      {error && (
        <div style={{ background: "#ff444422", border: "1px solid #ff444466", borderRadius: 8, padding: "10px 14px", color: "#ff6666", fontSize: 13, fontFamily: font, marginTop: 14 }}>
          {error}
        </div>
      )}
      <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 20 }}>
        <button type="button" onClick={onClose} style={{
          background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8,
          padding: "8px 18px", color: C.muted, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: font,
        }}>Cancelar</button>
        <button type="button" disabled={saving} onClick={async () => {
          setSaving(true); setError(null);
          const res = await onConfirm(perfil, bloque);
          if (res?.error) { setError(res.error); setSaving(false); }
        }} style={{
          background: C.green, border: "none", borderRadius: 8, padding: "8px 22px",
          color: "#04221a", fontSize: 13, fontWeight: 700, cursor: saving ? "default" : "pointer",
          opacity: saving ? 0.6 : 1, fontFamily: font,
        }}>{saving ? "Aprobando…" : "Aprobar"}</button>
      </div>
    </Modal>
  );
}

function RechazarModal({ perfil, onClose, onConfirm }) {
  const [motivo, setMotivo] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  return (
    <Modal title="Rechazar solicitud" onClose={onClose}>
      <p style={{ color: C.dim, fontSize: 13, fontFamily: font, margin: "0 0 16px" }}>
        {perfil.nombre || perfil.email}
      </p>
      <Field label="Motivo (lo verá el alumno)">
        <textarea
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
          rows={3}
          placeholder="Ej. No pudimos verificar la institución."
          style={{ ...inputStyle, resize: "vertical", minHeight: 84 }}
        />
      </Field>
      {error && (
        <div style={{ background: "#ff444422", border: "1px solid #ff444466", borderRadius: 8, padding: "10px 14px", color: "#ff6666", fontSize: 13, fontFamily: font, marginTop: 14 }}>
          {error}
        </div>
      )}
      <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 20 }}>
        <button type="button" onClick={onClose} style={{
          background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8,
          padding: "8px 18px", color: C.muted, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: font,
        }}>Cancelar</button>
        <button type="button" disabled={saving} onClick={async () => {
          setSaving(true); setError(null);
          if (!motivo.trim()) { setError("Escribe un motivo."); setSaving(false); return; }
          const res = await onConfirm(perfil, motivo.trim());
          if (res?.error) { setError(res.error); setSaving(false); }
        }} style={{
          background: C.red, border: "none", borderRadius: 8, padding: "8px 22px",
          color: "#fff", fontSize: 13, fontWeight: 700, cursor: saving ? "default" : "pointer",
          opacity: saving ? 0.6 : 1, fontFamily: font,
        }}>{saving ? "Rechazando…" : "Rechazar"}</button>
      </div>
    </Modal>
  );
}

// ── Página principal ──────────────────────────────────────────────────────────
export default function AdminSolicitudes({ embedded }) {
  const [perfiles, setPerfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState("pendiente");
  const [busqueda, setBusqueda] = useState("");
  const [aprobar, setAprobar] = useState(null);
  const [rechazar, setRechazar] = useState(null);

  useEffect(() => { load(); }, []);

  async function load() {
    setLoading(true);
    // El admin tiene política de SELECT sobre profiles; se lee directo para no
    // depender de que get_all_profiles devuelva los campos nuevos.
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .order("nombre", { ascending: true });
    if (error) console.error("Error cargando solicitudes:", error);
    setPerfiles(data || []);
    setLoading(false);
  }

  const conteos = {
    pendiente: perfiles.filter((p) => p.estado_acceso === "pendiente").length,
    aprobado:  perfiles.filter((p) => p.estado_acceso === "aprobado").length,
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

  // Crea/actualiza la ficha de alumno que el taller de regularización necesita.
  async function asegurarAlumno(perfil) {
    if (!perfil.fecha_nacimiento) {
      return { error: "El perfil no tiene fecha de nacimiento; el alumno no podría registrarse en regularización." };
    }
    const { nombre, apellidos } = partirNombre(perfil.nombre);
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

  async function handleAprobar(perfil, bloque) {
    const { error } = await supabase
      .from("profiles")
      .update({
        estado_acceso: "aprobado",
        bloque,
        motivo_rechazo: null,
        revisado_en: new Date().toISOString(),
      })
      .eq("id", perfil.id);
    if (error) return { error: error.message || "No se pudo aprobar." };

    if (bloque === "regularizacion") {
      const res = await asegurarAlumno(perfil);
      if (res.error) return res;
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
    setRechazar(null);
    await load();
    return {};
  }

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: font }}>
      {!embedded && <AdminHeader active="solicitudes" />}
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "32px 16px" }}>
        <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ position: "relative", flex: "1 1 200px", maxWidth: 300 }}>
            <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: C.muted, fontSize: 14, pointerEvents: "none" }}>⌕</span>
            <input
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar por nombre o correo…"
              style={{
                width: "100%", background: C.surface, border: `1px solid ${C.border}`,
                borderRadius: 9, padding: "9px 14px 9px 34px", color: C.text,
                fontSize: 13, fontFamily: font, outline: "none", boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {ESTADOS.map((e) => {
              const activo = filtro === e.value;
              const n = e.value === "todos" ? perfiles.length : conteos[e.value];
              return (
                <button
                  key={e.value}
                  onClick={() => setFiltro(e.value)}
                  style={{
                    border: activo ? "none" : `1px solid ${C.border}`,
                    borderRadius: 99, padding: "8px 16px", fontSize: 12, fontWeight: 700,
                    cursor: "pointer", background: activo ? e.color : C.surface,
                    color: activo ? (e.value === "todos" ? "#fff" : "#0e0f11") : C.muted,
                    fontFamily: font, transition: "background .15s, color .15s",
                  }}
                >
                  {e.label} ({n})
                </button>
              );
            })}
          </div>
        </div>

        {loading ? <Spinner /> : filtrados.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 20px", color: C.muted, fontSize: 14, fontFamily: font }}>
            {perfiles.length === 0 ? "Todavía no hay cuentas registradas." : "Ninguna solicitud coincide con el filtro."}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {filtrados.map((p) => (
              <SolicitudCard key={p.id} perfil={p} onAprobar={setAprobar} onRechazar={setRechazar} />
            ))}
          </div>
        )}
      </div>

      {aprobar && (
        <AprobarModal perfil={aprobar} onClose={() => setAprobar(null)} onConfirm={handleAprobar} />
      )}
      {rechazar && (
        <RechazarModal perfil={rechazar} onClose={() => setRechazar(null)} onConfirm={handleRechazar} />
      )}
    </div>
  );
}
