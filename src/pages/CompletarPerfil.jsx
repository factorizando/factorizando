import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { ESTADOS } from "../data/estados";

const NIVELES = [
  { v: "basica", label: "Educación básica (secundaria)" },
  { v: "media_superior", label: "Media superior (preparatoria)" },
  { v: "superior", label: "Superior (universidad)" },
];

// Estados con catálogo de escuelas cargado: en estos exigimos elegir del listado.
const ESTADOS_CON_CATALOGO = ["Puebla", "Veracruz", "Estado de México", "Ciudad de México"];

// nivel de contenido derivado (igual que el trigger en la base)
const nivelContenido = (ne) => (ne === "basica" ? "preparatoria" : "universidad");

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

export default function CompletarPerfil() {
  const navigate = useNavigate();
  const [uid, setUid] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState("");

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [estado, setEstado] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [fechaNac, setFechaNac] = useState("");
  const [nivelEdu, setNivelEdu] = useState("");
  const [institucion, setInstitucion] = useState("");
  const [institucionCct, setInstitucionCct] = useState("");

  const [avatarUrl, setAvatarUrl] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState("");
  const fileRef = useRef(null);

  // Municipios del estado elegido (para autocompletar Ciudad)
  const [municipios, setMunicipios] = useState([]);

  // Autocompletado de escuelas
  const [sugerencias, setSugerencias] = useState([]);
  const [mostrarSug, setMostrarSug] = useState(false);

  // Tema claro
  useEffect(() => {
    const prev = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", "light");
    return () => {
      if (prev) document.documentElement.setAttribute("data-theme", prev);
      else document.documentElement.removeAttribute("data-theme");
    };
  }, []);

  // Sesión + prellenado
  useEffect(() => {
    let cancel = false;
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (cancel) return;
      if (!session) { navigate("/login?dest=completar-perfil"); return; }
      setUid(session.user.id);
      const { data } = await supabase
        .from("profiles")
        .select("nombre, telefono, estado, ciudad, fecha_nacimiento, nivel_educativo, institucion, institucion_cct, avatar_url")
        .eq("id", session.user.id)
        .single();
      if (cancel) return;
      if (data) {
        setNombre(data.nombre || "");
        setTelefono(data.telefono || "");
        setEstado(data.estado || "");
        setCiudad(data.ciudad || "");
        setFechaNac(data.fecha_nacimiento || "");
        setNivelEdu(data.nivel_educativo || "");
        setInstitucion(data.institucion || "");
        setInstitucionCct(data.institucion_cct || "");
        setAvatarUrl(data.avatar_url || "");
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
  // Con ciudad elegida muestra todas las de ese municipio; si no, busca por nombre.
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!nombre.trim()) { setError("Ingresa tu nombre completo."); return; }
    const tel = telefono.replace(/\D/g, "");
    if (tel.length !== 10) { setError("El teléfono debe tener 10 dígitos."); return; }
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

    setGuardando(true);
    try {
      const url = await subirAvatar();
      const { error: upErr } = await supabase
        .from("profiles")
        .update({
          nombre: nombre.trim(),
          telefono: tel,
          estado,
          ciudad: ciudad.trim(),
          fecha_nacimiento: fechaNac,
          nivel_educativo: nivelEdu,
          institucion: institucion.trim(),
          institucion_cct: institucionCct || null,
          avatar_url: url || null,
          perfil_completo: true,
        })
        .eq("id", uid);
      if (upErr) throw upErr;
      navigate(`/${nivelContenido(nivelEdu)}`);
    } catch (err) {
      setError("No se pudo guardar tu perfil. Intenta de nuevo.");
      setGuardando(false);
    }
  };

  const edad = calcEdad(fechaNac);
  const preview = avatarPreview || avatarUrl;

  return (
    <>
      <style>{CSS}</style>
      <div className="cp-root">
        <div className="cp-card">
          {cargando ? (
            <div className="cp-loading"><span className="cp-spinner" /> Cargando…</div>
          ) : (
            <>
              <div className="cp-head">
                <span className="cp-eyebrow">Casi listo</span>
                <h1 className="cp-title">Completa tu perfil</h1>
                <p className="cp-sub">Necesitamos estos datos para personalizar tu preparación.</p>
              </div>

              <form className="cp-form" onSubmit={handleSubmit}>
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

                <div className="cp-field">
                  <label>Nombre completo</label>
                  <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ej. Ana López García" />
                </div>

                <div className="cp-grid2">
                  <div className="cp-field">
                    <label>Teléfono (WhatsApp)</label>
                    <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Ej. 2221234567" />
                  </div>
                  <div className="cp-field">
                    <label>Fecha de nacimiento {edad != null && <span className="cp-edad">· {edad} años</span>}</label>
                    <input type="date" value={fechaNac} onChange={(e) => setFechaNac(e.target.value)} max={new Date().toISOString().slice(0, 10)} />
                  </div>
                </div>

                <div className="cp-grid2">
                  <div className="cp-field">
                    <label>Estado</label>
                    <select
                      value={estado}
                      onChange={(e) => { setEstado(e.target.value); setCiudad(""); setInstitucion(""); setInstitucionCct(""); }}
                    >
                      <option value="" disabled>Selecciona…</option>
                      {ESTADOS.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="cp-field">
                    <label>Ciudad / Municipio</label>
                    <input
                      list="cp-municipios"
                      value={ciudad}
                      onChange={(e) => setCiudad(e.target.value)}
                      placeholder={estado ? "Escribe o elige tu municipio" : "Primero elige tu estado"}
                      autoComplete="off"
                    />
                    <datalist id="cp-municipios">
                      {municipios.map((m) => <option key={m} value={m} />)}
                    </datalist>
                  </div>
                </div>

                <div className="cp-field">
                  <label>Nivel educativo actual</label>
                  <select value={nivelEdu} onChange={(e) => setNivelEdu(e.target.value)}>
                    <option value="" disabled>Selecciona…</option>
                    {NIVELES.map((n) => <option key={n.v} value={n.v}>{n.label}</option>)}
                  </select>
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

                {error && <div className="cp-error">✕ &nbsp;{error}</div>}

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
.cp-root { min-height: 100vh; min-height: 100dvh; background: var(--bg); color: var(--text);
  font-family: var(--font-ui); display: flex; align-items: flex-start; justify-content: center; padding: 48px 16px; }
.cp-root * { box-sizing: border-box; }
.cp-card { width: 100%; max-width: 560px; background: var(--surface); border: 1px solid var(--border);
  border-radius: 18px; padding: 36px 34px; box-shadow: 0 14px 50px rgba(40,33,20,.06); }
.cp-loading { display: flex; align-items: center; gap: 10px; color: var(--text-muted); justify-content: center; padding: 30px; }
.cp-head { margin-bottom: 24px; }
.cp-eyebrow { font-size: .7rem; letter-spacing: .22em; text-transform: uppercase; color: var(--azul-suave); font-weight: 700; }
.cp-title { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 2.2rem; font-weight: 700; color: var(--heading); line-height: 1.1; margin: .3rem 0; }
.cp-sub { font-size: .9rem; color: var(--text-muted); line-height: 1.5; }

.cp-form { display: flex; flex-direction: column; gap: 1.1rem; }
.cp-avatar-row { display: flex; align-items: center; gap: 16px; padding-bottom: 6px; }
.cp-avatar { width: 76px; height: 76px; border-radius: 50%; flex-shrink: 0; cursor: pointer; overflow: hidden;
  border: 2px dashed var(--border-strong); display: grid; place-items: center; background: var(--bg); }
.cp-avatar img { width: 100%; height: 100%; object-fit: cover; }
.cp-avatar-ph { font-size: 1.8rem; color: var(--text-muted); }
.cp-avatar-txt { display: flex; flex-direction: column; gap: 4px; }
.cp-avatar-btn { align-self: flex-start; background: var(--surface-2); border: 1px solid var(--border); border-radius: 8px;
  padding: 7px 14px; font-size: .82rem; font-weight: 600; color: var(--text); cursor: pointer; }
.cp-hint { font-size: .72rem; color: var(--text-muted); }

.cp-grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1.1rem; }
@media (max-width: 480px) { .cp-grid2 { grid-template-columns: 1fr; } }
.cp-field { display: flex; flex-direction: column; gap: .4rem; position: relative; }
.cp-field label { font-size: .72rem; letter-spacing: .1em; text-transform: uppercase; color: var(--text-muted); font-weight: 600; }
.cp-edad { color: var(--azul-suave); text-transform: none; letter-spacing: 0; }
.cp-field input, .cp-field select { width: 100%; padding: .75rem .9rem; background: var(--bg); border: 1px solid var(--border);
  border-radius: 10px; color: var(--text); font-family: var(--font-ui); font-size: .95rem; outline: none;
  transition: border-color .2s, box-shadow .2s, background .2s; }
.cp-field input:focus, .cp-field select:focus { border-color: var(--azul-suave); box-shadow: 0 0 0 3px var(--azul-suave-soft); background: var(--surface); }
.cp-field input::placeholder { color: var(--text-muted); }

.cp-autocomplete { position: relative; }
.cp-sug { position: absolute; top: 100%; left: 0; right: 0; z-index: 10; margin-top: 4px; list-style: none; padding: 4px;
  background: var(--surface); border: 1px solid var(--border); border-radius: 10px; box-shadow: 0 12px 30px rgba(40,33,20,.12); max-height: 260px; overflow-y: auto; }
.cp-sug li { padding: 8px 10px; border-radius: 7px; cursor: pointer; display: flex; flex-direction: column; gap: 2px; }
.cp-sug li:hover { background: var(--surface-2); }
.cp-sug-nombre { font-size: .85rem; color: var(--text); }
.cp-sug-meta { font-size: .72rem; color: var(--text-muted); }
.cp-sug-cct { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; color: var(--azul-suave); font-weight: 600; }

.cp-error { font-size: .8rem; color: #c0392b; padding: .6rem .9rem; background: rgba(192,57,43,.07);
  border: 1px solid rgba(192,57,43,.2); border-radius: 8px; }
.cp-submit { width: 100%; padding: .95rem; margin-top: .4rem; background: var(--brand); border: none; border-radius: 10px;
  color: var(--bg); font-family: var(--font-ui); font-size: .95rem; font-weight: 600; letter-spacing: .03em; cursor: pointer;
  display: flex; align-items: center; justify-content: center; gap: .5rem; transition: transform .2s, box-shadow .2s, opacity .2s; }
.cp-submit:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(40,33,20,.22); opacity: .92; }
.cp-submit:disabled { opacity: .6; cursor: not-allowed; }
.cp-spinner { width: 18px; height: 18px; border: 2px solid var(--azul-suave-soft); border-top-color: var(--azul-suave); border-radius: 50%; animation: cp-spin .6s linear infinite; }
.cp-spinner-w { border-color: rgba(255,255,255,.4); border-top-color: #fff; }
@keyframes cp-spin { to { transform: rotate(360deg); } }
`;
