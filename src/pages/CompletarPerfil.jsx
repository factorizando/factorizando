// Alta de perfil: /completar-perfil
//
// Paso 1: se elige el tipo de cuenta (alumno o tutor) y se guarda en
// `profiles.tipo_solicitado`; el admin lo ve al aprobar. El formulario cambia
// según el tipo: el alumno llena lo escolar y sus contactos de emergencia (hasta
// dos, con parentesco); el tutor solo lo básico.
//
// El alta del alumno crea su expediente de `alumnos` (id = profile_id = cuenta),
// que es lo que permite guardar los contactos y que /alumno funcione al aprobar.
// Si la cuenta se rechaza, el admin borra ese expediente.
import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Users, ArrowLeft, Plus, Trash2, X } from "lucide-react";
import { supabase } from "../lib/supabase";
import { ESTADOS } from "../data/estados";
import { useTemaClaro } from "../lib/useTemaClaro";
import Combo from "../components/Combo.jsx";

const NIVELES = [
  { v: "basica", label: "Educación básica (primaria/secundaria)" },
  { v: "media_superior", label: "Media superior (preparatoria)" },
  { v: "superior", label: "Superior (universidad)" },
];

// Estados con catálogo de escuelas cargado: en estos exigimos elegir del listado.
const ESTADOS_CON_CATALOGO = ["Puebla", "Veracruz", "Estado de México", "Ciudad de México"];

// "TECAMACHALCO" → "Tecamachalco"; "SAN MARTÍN" → "San Martín"
const titulo = (s) =>
  (s || "").toLowerCase().replace(/(^|\s|-)([a-záéíóúñ])/g, (m, p, c) => p + c.toUpperCase());

function calcEdad(fecha) {
  if (!fecha) return null;
  const hoy = new Date();
  const n = new Date(fecha);
  let e = hoy.getFullYear() - n.getFullYear();
  const m = hoy.getMonth() - n.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < n.getDate())) e--;
  return e >= 0 && e < 120 ? e : null;
}

// Nivel del expediente de `alumnos` a partir del nivel educativo y la edad.
function nivelDeExpediente(nivelEdu, fechaNac) {
  if (nivelEdu === "media_superior") return "prepa";
  if (nivelEdu === "superior") return "universidad";
  const edad = calcEdad(fechaNac);
  return edad != null && edad < 12 ? "primaria" : "secundaria";
}

const CONTACTO_VACIO = { nombre: "", telefono: "", parentesco: "" };

export default function CompletarPerfil() {
  useTemaClaro();
  const navigate = useNavigate();
  const [uid, setUid] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState("");

  const [paso, setPaso] = useState("tipo"); // "tipo" | "form"
  const [tipo, setTipo] = useState(null);   // "alumno" | "tutor"

  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [estado, setEstado] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [fechaNac, setFechaNac] = useState("");
  const [nivelEdu, setNivelEdu] = useState("");
  const [institucion, setInstitucion] = useState("");
  const [institucionCct, setInstitucionCct] = useState("");
  const [contactos, setContactos] = useState([]);

  const [avatarUrl, setAvatarUrl] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState("");
  const fileRef = useRef(null);

  // Municipios del estado elegido (para autocompletar Ciudad)
  const [municipios, setMunicipios] = useState([]);

  // Autocompletado de escuelas
  const [sugerencias, setSugerencias] = useState([]);
  const [mostrarSug, setMostrarSug] = useState(false);

  // Sesión + prellenado
  useEffect(() => {
    let cancel = false;
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (cancel) return;
      if (!session) { navigate("/login?dest=completar-perfil"); return; }
      setUid(session.user.id);
      const { data } = await supabase
        .from("profiles")
        .select("nombre, apellidos, telefono, estado, ciudad, fecha_nacimiento, nivel_educativo, institucion, institucion_cct, avatar_url, tipo_solicitado")
        .eq("id", session.user.id)
        .single();
      if (cancel) return;
      if (data) {
        setNombre(data.nombre || "");
        setApellidos(data.apellidos || "");
        setTelefono(data.telefono || "");
        // Predeterminados solo en perfil nuevo: nunca pisan lo ya guardado.
        setEstado(data.estado || "Puebla");
        setCiudad(data.ciudad || "Tecamachalco");
        setFechaNac(data.fecha_nacimiento || "");
        setNivelEdu(data.nivel_educativo || "");
        setInstitucion(data.institucion || "");
        setInstitucionCct(data.institucion_cct || "");
        setAvatarUrl(data.avatar_url || "");
        if (data.tipo_solicitado) { setTipo(data.tipo_solicitado); setPaso("form"); }
      }

      // Expediente y contactos previos (al re-completar el perfil del alumno)
      const { data: al } = await supabase
        .from("alumnos").select("id").eq("profile_id", session.user.id).maybeSingle();
      if (al) {
        const { data: cs } = await supabase
          .from("contactos_emergencia").select("nombre, telefono, relacion, orden")
          .eq("alumno_id", al.id).order("orden");
        if (!cancel && cs) {
          setContactos(cs.map((c) => ({ nombre: c.nombre, telefono: c.telefono, parentesco: c.relacion })));
        }
      }
      setCargando(false);
    });
    return () => { cancel = true; };
  }, [navigate]);

  // Municipios del estado seleccionado
  useEffect(() => {
    if (!estado) { setMunicipios([]); return; }
    let cancel = false;
    supabase.rpc("municipios_por_estado", { p_estado: estado }).then(({ data }) => {
      if (cancel) return;
      setMunicipios((data || []).map((r) => titulo(r.municipio)));
    });
    return () => { cancel = true; };
  }, [estado]);

  // Búsqueda de escuelas (debounced): filtra por estado + ciudad (municipio) + nombre.
  useEffect(() => {
    if (!estado) { setSugerencias([]); return; }
    const q = institucion.trim();
    const ciudadSel = ciudad.trim();
    if (!ciudadSel && q.length < 3) { setSugerencias([]); return; }
    const t = setTimeout(async () => {
      const { data } = await supabase.rpc("buscar_escuelas", {
        p_estado: estado,
        p_municipio: ciudadSel || null,
        p_q: q.length >= 2 ? q : null,
      });
      setSugerencias(data || []);
    }, 250);
    return () => clearTimeout(t);
  }, [institucion, estado, ciudad]);

  const onPickFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.size > 3 * 1024 * 1024) { setError("La imagen no debe superar 3 MB."); return; }
    setError("");
    setAvatarFile(f);
    setAvatarPreview(URL.createObjectURL(f));
  };

  const subirAvatar = useCallback(async () => {
    if (!avatarFile || !uid) return avatarUrl;
    const ext = (avatarFile.name.split(".").pop() || "jpg").toLowerCase();
    const path = `${uid}/${Date.now()}.${ext}`;
    const { error: upErr } = await supabase.storage
      .from("avatars")
      .upload(path, avatarFile, { contentType: avatarFile.type, upsert: false });
    if (upErr) throw upErr;
    const { data } = supabase.storage.from("avatars").getPublicUrl(path);
    return data.publicUrl;
  }, [avatarFile, uid, avatarUrl]);

  function elegirTipo(t) {
    setTipo(t);
    setError("");
    setPaso("form");
  }

  function setContacto(i, k, v) {
    setContactos((cs) => cs.map((c, j) => (j === i ? { ...c, [k]: v } : c)));
  }
  const agregarContacto = () => setContactos((cs) => (cs.length < 2 ? [...cs, { ...CONTACTO_VACIO }] : cs));
  const quitarContacto = (i) => setContactos((cs) => cs.filter((_, j) => j !== i));

  async function guardar(e) {
    e.preventDefault();
    setError("");

    // ── Validaciones comunes ──
    if (!nombre.trim()) { setError("Ingresa tu nombre."); return; }
    if (!apellidos.trim()) { setError("Ingresa tus apellidos."); return; }
    const tel = telefono.replace(/\D/g, "");
    if (tel.length !== 10) { setError("El teléfono debe tener 10 dígitos."); return; }

    // ── Validaciones del alumno ──
    if (tipo === "alumno") {
      if (!estado) { setError("Selecciona tu estado."); return; }
      if (!ciudad.trim()) { setError("Ingresa tu ciudad."); return; }
      if (!fechaNac) { setError("Ingresa tu fecha de nacimiento."); return; }
      const ed = calcEdad(fechaNac);
      if (ed == null || ed < 8 || ed > 100) { setError("Revisa tu fecha de nacimiento: la edad no es válida."); return; }
      if (!nivelEdu) { setError("Selecciona tu nivel educativo actual."); return; }
      if (!institucion.trim()) { setError("Ingresa tu institución educativa."); return; }
      if (ESTADOS_CON_CATALOGO.includes(estado) && !institucionCct) {
        setError("Elige tu escuela de la lista de sugerencias (debe estar en el catálogo)."); return;
      }
      for (const c of contactos) {
        const lleno = c.nombre.trim() || c.telefono.trim() || c.parentesco.trim();
        if (!lleno) continue;
        if (!c.nombre.trim() || !c.telefono.trim() || !c.parentesco.trim()) {
          setError("Completa nombre, teléfono y parentesco de cada contacto de emergencia."); return;
        }
        if (c.telefono.replace(/\D/g, "").length !== 10) {
          setError("El teléfono de un contacto de emergencia debe tener 10 dígitos."); return;
        }
      }
    }

    setGuardando(true);
    try {
      const url = await subirAvatar();
      const perfil = {
        nombre: nombre.trim(),
        apellidos: apellidos.trim(),
        telefono: tel,
        avatar_url: url || null,
        perfil_completo: true,
        tipo_solicitado: tipo,
      };
      if (tipo === "alumno") {
        Object.assign(perfil, {
          estado,
          ciudad: ciudad.trim(),
          fecha_nacimiento: fechaNac,
          nivel_educativo: nivelEdu,
          institucion: institucion.trim(),
          institucion_cct: institucionCct || null,
        });
      }
      const { error: upErr } = await supabase.from("profiles").update(perfil).eq("id", uid);
      if (upErr) throw upErr;

      if (tipo === "alumno") {
        const nivel = nivelDeExpediente(nivelEdu, fechaNac);
        // Expediente con el mismo id que la cuenta (invariante del proyecto).
        const { error: alErr } = await supabase.from("alumnos").upsert({
          id: uid,
          profile_id: uid,
          nombre: nombre.trim(),
          apellidos: apellidos.trim(),
          fecha_nacimiento: fechaNac,
          email: null,
          telefono: tel,
          nivel,
        }, { onConflict: "id" });
        if (alErr) throw alErr;

        // Contactos: se reemplazan por los capturados (0, 1 o 2).
        const { error: delErr } = await supabase
          .from("contactos_emergencia").delete().eq("alumno_id", uid);
        if (delErr) throw delErr;
        const filas = contactos
          .filter((c) => c.nombre.trim())
          .map((c, i) => ({
            alumno_id: uid,
            nombre: c.nombre.trim(),
            telefono: c.telefono.replace(/\D/g, ""),
            relacion: c.parentesco.trim(),
            orden: i + 1,
          }));
        if (filas.length) {
          const { error: cErr } = await supabase.from("contactos_emergencia").insert(filas);
          if (cErr) throw cErr;
        }
      }

      navigate("/cuenta-pendiente");
    } catch (err) {
      console.error(err);
      setError("No se pudo guardar tu perfil. Intenta de nuevo.");
      setGuardando(false);
    }
  }

  const edad = calcEdad(fechaNac);
  const preview = avatarPreview || avatarUrl;

  return (
    <>
      <style>{CSS}</style>
      <div className="cp-root">
        <div className="cp-card">
          {cargando ? (
            <div className="cp-loading"><span className="cp-spinner" /> Cargando…</div>
          ) : paso === "tipo" ? (
            <>
              <div className="cp-head">
                <span className="cp-eyebrow">Casi listo</span>
                <h1 className="cp-title">¿Qué tipo de cuenta es?</h1>
                <p className="cp-sub">Elige una opción para continuar. El administrador revisará tu solicitud.</p>
              </div>
              <div className="cp-tipos">
                <button type="button" className={`cp-tipo${tipo === "alumno" ? " cp-tipo-on" : ""}`} onClick={() => elegirTipo("alumno")}>
                  <span className="cp-tipo-ic"><GraduationCap size={24} aria-hidden="true" /></span>
                  <span className="cp-tipo-tit">Alumno</span>
                  <span className="cp-tipo-txt">Voy a tomar clases y quiero ver mi avance.</span>
                </button>
                <button type="button" className={`cp-tipo${tipo === "tutor" ? " cp-tipo-on" : ""}`} onClick={() => elegirTipo("tutor")}>
                  <span className="cp-tipo-ic"><Users size={24} aria-hidden="true" /></span>
                  <span className="cp-tipo-tit">Tutor</span>
                  <span className="cp-tipo-txt">Acompaño a uno o varios alumnos.</span>
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="cp-head">
                <button type="button" className="cp-volver" onClick={() => setPaso("tipo")}>
                  <ArrowLeft size={15} aria-hidden="true" /> Cambiar tipo
                </button>
                <span className="cp-eyebrow">Casi listo</span>
                <h1 className="cp-title">{tipo === "alumno" ? "Completa tu perfil de alumno" : "Completa tu perfil de tutor"}</h1>
                <p className="cp-sub">
                  {tipo === "alumno"
                    ? "Necesitamos estos datos para personalizar tu preparación."
                    : "Solo lo básico para identificarte."}
                </p>
              </div>

              <form className="cp-form" onSubmit={guardar}>
                {/* Avatar */}
                <div className="cp-avatar-row">
                  <div className="cp-avatar" onClick={() => fileRef.current?.click()}>
                    {preview ? <img src={preview} alt="avatar" /> : <span className="cp-avatar-ph">＋</span>}
                  </div>
                  <div className="cp-avatar-txt">
                    <button type="button" className="cp-avatar-btn" onClick={() => fileRef.current?.click()}>
                      {preview ? "Cambiar foto" : "Subir foto"}
                    </button>
                    <span className="cp-hint">JPG o PNG, máx. 3 MB</span>
                  </div>
                  <input ref={fileRef} type="file" accept="image/*" hidden onChange={onPickFile} />
                </div>

                <div className="cp-grid2">
                  <div className="cp-field">
                    <label>Nombre(s)</label>
                    <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ej. Ana" />
                  </div>
                  <div className="cp-field">
                    <label>Apellidos</label>
                    <input value={apellidos} onChange={(e) => setApellidos(e.target.value)} placeholder="Ej. López García" />
                  </div>
                </div>

                <div className="cp-field">
                  <label>Teléfono (WhatsApp)</label>
                  <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Ej. 2221234567" />
                </div>

                {tipo === "alumno" && (
                  <>
                    <div className="cp-field">
                      <label>Fecha de nacimiento {edad != null && <span className="cp-edad">· {edad} años</span>}</label>
                      <input type="date" value={fechaNac} onChange={(e) => setFechaNac(e.target.value)} max={new Date().toISOString().slice(0, 10)} />
                    </div>

                    <div className="cp-grid2">
                      <div className="cp-field">
                        <label>Estado</label>
                        <Combo
                          value={estado}
                          onChange={(v) => { setEstado(v); setCiudad(""); setInstitucion(""); setInstitucionCct(""); }}
                          options={ESTADOS}
                          placeholder="Selecciona…"
                        />
                      </div>
                      <div className="cp-field">
                        <label>Ciudad / Municipio</label>
                        <Combo
                          value={ciudad}
                          onChange={setCiudad}
                          options={municipios}
                          placeholder={estado ? "Escribe o elige tu municipio" : "Primero elige tu estado"}
                          textoVacio={estado ? "Sin resultados" : "Primero elige tu estado"}
                        />
                      </div>
                    </div>

                    <div className="cp-field">
                      <label>Nivel educativo actual</label>
                      <Combo
                        value={nivelEdu}
                        onChange={setNivelEdu}
                        options={NIVELES.map((n) => ({ value: n.v, label: n.label }))}
                        placeholder="Selecciona…"
                      />
                    </div>

                    <div className="cp-field cp-autocomplete">
                      <label>Institución educativa</label>
                      <input
                        value={institucion}
                        onChange={(e) => { setInstitucion(e.target.value); setInstitucionCct(""); setMostrarSug(true); }}
                        onFocus={() => setMostrarSug(true)}
                        onBlur={() => setTimeout(() => setMostrarSug(false), 150)}
                        placeholder={ciudad ? "Elige tu escuela, o busca por nombre o CCT" : "Escribe el nombre o la CCT de tu escuela"}
                        autoComplete="off"
                      />
                      {mostrarSug && sugerencias.length > 0 && (
                        <ul className="cp-sug">
                          {sugerencias.map((s) => (
                            <li key={s.cct} onMouseDown={() => { setInstitucion(s.nombre); setInstitucionCct(s.cct); setMostrarSug(false); }}>
                              <span className="cp-sug-nombre">{s.nombre}</span>
                              <span className="cp-sug-meta">
                                <span className="cp-sug-cct">{s.cct}</span>
                                {" · "}{[titulo(s.servicio), titulo(s.municipio)].filter(Boolean).join(" · ")}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Contactos de emergencia (hasta 2) */}
                    <div className="cp-contactos">
                      <span className="cp-contactos-tit">Contactos de emergencia <span className="cp-hint">(opcional, hasta 2)</span></span>
                      {contactos.map((c, i) => (
                        <div className="cp-contacto" key={i}>
                          <div className="cp-contacto-campos">
                            <input value={c.nombre} onChange={(e) => setContacto(i, "nombre", e.target.value)} placeholder="Nombre" />
                            <input value={c.telefono} onChange={(e) => setContacto(i, "telefono", e.target.value)} placeholder="Teléfono" inputMode="numeric" />
                            <input value={c.parentesco} onChange={(e) => setContacto(i, "parentesco", e.target.value)} placeholder="Parentesco (madre, tío…)" />
                          </div>
                          <button type="button" className="cp-contacto-x" onClick={() => quitarContacto(i)} aria-label="Quitar contacto">
                            <Trash2 size={16} aria-hidden="true" />
                          </button>
                        </div>
                      ))}
                      {contactos.length < 2 && (
                        <button type="button" className="cp-agregar" onClick={agregarContacto}>
                          <Plus size={15} aria-hidden="true" /> Agregar contacto
                        </button>
                      )}
                    </div>
                  </>
                )}

                {error && (
                  <div className="cp-error">
                    <X size={15} aria-hidden="true" /> <span>{error}</span>
                  </div>
                )}

                <button type="submit" className="cp-submit" disabled={guardando}>
                  {guardando && <span className="cp-spinner cp-spinner-w" />}
                  {guardando ? "Guardando…" : "Guardar y continuar"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}

const CSS = `
.cp-root { min-height: 100vh; min-height: 100dvh; background: var(--fx-surface-sunken);
  color: var(--fx-text-body); font-family: var(--fx-font-body);
  display: flex; align-items: flex-start; justify-content: center; padding: 48px 16px; }
.cp-root * { box-sizing: border-box; }
.cp-card { width: 100%; max-width: 580px; background: var(--fx-surface); border: 1px solid var(--fx-border);
  border-radius: var(--fx-radius-xl); padding: 36px 34px; box-shadow: var(--fx-shadow-float); }
.cp-loading { display: flex; align-items: center; gap: 10px; color: var(--fx-text-muted); justify-content: center; padding: 30px; }
.cp-head { margin-bottom: 24px; }
.cp-volver { display: inline-flex; align-items: center; gap: 6px; background: none; border: none; cursor: pointer;
  color: var(--fx-text-muted); font-family: inherit; font-size: var(--fx-small-size); font-weight: 600;
  padding: 0; margin-bottom: 12px; }
.cp-volver:hover { color: var(--fx-text-heading); }
.cp-eyebrow { display: block; font-family: var(--fx-font-mono); font-size: var(--fx-caption-size);
  letter-spacing: .16em; text-transform: uppercase; color: var(--fx-primary-600); font-weight: 700; }
.cp-title { font-family: var(--fx-font-heading); font-size: clamp(24px, 4vw, 30px); font-weight: 600;
  color: var(--fx-text-heading); line-height: 1.12; margin: .4rem 0; letter-spacing: -0.02em; }
.cp-sub { font-size: var(--fx-body-size); color: var(--fx-text-muted); line-height: 1.5; margin: 0; }

/* Paso de tipo */
.cp-tipos { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.cp-tipo { display: flex; flex-direction: column; align-items: flex-start; gap: 6px; text-align: left;
  background: var(--fx-surface); border: 1.5px solid var(--fx-border); border-radius: var(--fx-radius-lg);
  padding: 20px 18px; cursor: pointer; font-family: inherit; transition: border-color var(--fx-transition), background var(--fx-transition); }
.cp-tipo:hover { border-color: var(--fx-primary-300); }
.cp-tipo-on { border-color: var(--fx-primary-500); background: var(--fx-primary-50); }
.cp-tipo-ic { display: grid; place-items: center; width: 44px; height: 44px; border-radius: var(--fx-radius-md);
  background: var(--fx-primary-50); color: var(--fx-primary-700); margin-bottom: 4px; }
.cp-tipo-tit { font-family: var(--fx-font-heading); font-weight: 600; font-size: var(--fx-h5-size); color: var(--fx-text-heading); }
.cp-tipo-txt { font-size: var(--fx-small-size); color: var(--fx-text-muted); line-height: 1.45; }

/* Formulario */
.cp-form { display: flex; flex-direction: column; gap: 1rem; }
.cp-avatar-row { display: flex; align-items: center; gap: 16px; padding-bottom: 4px; }
.cp-avatar { width: 76px; height: 76px; border-radius: 50%; flex-shrink: 0; cursor: pointer; overflow: hidden;
  border: 2px dashed var(--fx-border-strong); display: grid; place-items: center; background: var(--fx-surface-sunken); }
.cp-avatar img { width: 100%; height: 100%; object-fit: cover; }
.cp-avatar-ph { font-size: 1.8rem; color: var(--fx-text-muted); }
.cp-avatar-txt { display: flex; flex-direction: column; gap: 4px; }
.cp-avatar-btn { align-self: flex-start; background: var(--fx-surface-sunken); border: 1px solid var(--fx-border);
  border-radius: var(--fx-radius-md); padding: 8px 14px; font-size: var(--fx-small-size); font-weight: 600;
  color: var(--fx-text-body); cursor: pointer; font-family: inherit; }
.cp-avatar-btn:hover { border-color: var(--fx-border-strong); color: var(--fx-text-heading); }
.cp-hint { font-size: var(--fx-caption-size); color: var(--fx-text-muted); }

.cp-grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
@media (max-width: 480px) { .cp-grid2 { grid-template-columns: 1fr; } .cp-tipos { grid-template-columns: 1fr; } }
.cp-field { display: flex; flex-direction: column; gap: .4rem; position: relative; }
.cp-field label { font-size: var(--fx-caption-size); letter-spacing: .08em; text-transform: uppercase;
  color: var(--fx-text-muted); font-weight: 700; }
.cp-edad { color: var(--fx-primary-600); text-transform: none; letter-spacing: 0; }
.cp-field input, .cp-field select { width: 100%; min-height: var(--fx-control-md); padding: 10px 13px;
  background: var(--fx-surface); border: 1px solid var(--fx-border); border-radius: var(--fx-radius-md);
  color: var(--fx-text-heading); font-family: inherit; font-size: var(--fx-small-size); outline: none;
  transition: border-color var(--fx-transition), box-shadow var(--fx-transition); }
.cp-field input:focus, .cp-field select:focus { border-color: var(--fx-primary-400); box-shadow: var(--fx-focus-ring); }
.cp-field input::placeholder { color: var(--fx-text-disabled); }

.cp-autocomplete { position: relative; }
.cp-sug { position: absolute; top: 100%; left: 0; right: 0; z-index: 10; margin-top: 4px; list-style: none;
  padding: 4px; background: var(--fx-surface); border: 1px solid var(--fx-border);
  border-radius: var(--fx-radius-md); box-shadow: var(--fx-shadow-float); max-height: 260px; overflow-y: auto; }
.cp-sug li { min-height: 44px; justify-content: center; padding: 8px 10px; border-radius: var(--fx-radius-sm); cursor: pointer; display: flex; flex-direction: column; gap: 2px; }
.cp-sug li:hover { background: var(--fx-surface-sunken); }
.cp-sug-nombre { font-size: var(--fx-small-size); color: var(--fx-text-heading); }
.cp-sug-meta { font-size: var(--fx-caption-size); color: var(--fx-text-muted); }
.cp-sug-cct { font-family: var(--fx-font-mono); color: var(--fx-primary-700); font-weight: 600; }

/* Contactos de emergencia */
.cp-contactos { display: flex; flex-direction: column; gap: 10px; border-top: 1px solid var(--fx-border); padding-top: 16px; }
.cp-contactos-tit { font-size: var(--fx-caption-size); letter-spacing: .08em; text-transform: uppercase;
  color: var(--fx-text-muted); font-weight: 700; }
.cp-contacto { display: flex; align-items: flex-start; gap: 8px; }
.cp-contacto-campos { flex: 1; min-width: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.cp-contacto-campos input:last-child { grid-column: 1 / -1; }
.cp-contacto-campos input { min-width: 0; min-height: var(--fx-control-md); padding: 10px 13px; background: var(--fx-surface);
  border: 1px solid var(--fx-border); border-radius: var(--fx-radius-md); color: var(--fx-text-heading);
  font-family: inherit; font-size: var(--fx-small-size); outline: none; }
.cp-contacto-campos input:focus { border-color: var(--fx-primary-400); box-shadow: var(--fx-focus-ring); }
.cp-contacto-x { display: grid; place-items: center; width: var(--fx-control-md); height: var(--fx-control-md);
  flex: none; background: none; border: 1px solid var(--fx-border); border-radius: var(--fx-radius-md);
  color: var(--fx-text-muted); cursor: pointer; }
.cp-contacto-x:hover { color: var(--fx-error-text); border-color: var(--fx-error-border); }
.cp-agregar { display: inline-flex; align-items: center; gap: 7px; align-self: flex-start; background: none;
  border: 1px solid var(--fx-border); border-radius: var(--fx-radius-md); padding: 8px 14px;
  color: var(--fx-primary-700); font-family: inherit; font-size: var(--fx-small-size); font-weight: 600; cursor: pointer; }
.cp-agregar:hover { background: var(--fx-primary-50); border-color: var(--fx-primary-200); }

.cp-error { display: flex; align-items: center; gap: 8px; font-size: var(--fx-small-size);
  color: var(--fx-error-text); background: var(--fx-error-bg); border: 1px solid var(--fx-error-border);
  border-radius: var(--fx-radius-md); padding: .6rem .8rem; }
.cp-error svg { flex: none; }
.cp-submit { display: inline-flex; align-items: center; justify-content: center; gap: .5rem; width: 100%;
  min-height: 48px; background: var(--fx-primary-500); border: none; border-radius: var(--fx-radius-md);
  color: var(--fx-text-on-primary); font-family: inherit; font-size: 1rem; font-weight: 600; cursor: pointer;
  transition: background var(--fx-transition); }
.cp-submit:hover:not(:disabled) { background: var(--fx-primary-600); }
.cp-submit:disabled { opacity: .6; cursor: default; }
/* iOS hace auto-zoom al enfocar controles de menos de 16px: en teléfono van a 16px. */
@media (max-width: 480px) {
  .cp-field input, .cp-contacto-campos input, .cp-sug-nombre { font-size: 16px; }
}
.cp-spinner { width: 18px; height: 18px; border: 2px solid color-mix(in srgb, var(--fx-primary-500) 30%, transparent);
  border-top-color: var(--fx-primary-500); border-radius: 50%; animation: cp-spin .6s linear infinite; }
.cp-spinner-w { border-color: color-mix(in srgb, var(--fx-text-on-primary) 40%, transparent); border-top-color: var(--fx-text-on-primary); }
@keyframes cp-spin { to { transform: rotate(360deg); } }
`;
