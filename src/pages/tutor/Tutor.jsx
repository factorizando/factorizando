// Portal del tutor: /tutor
//
// Lista los alumnos vinculados al tutor que tiene la sesión (vía
// `tutores.profile_id` + `alumno_tutor`). Distingue los vínculos **activos** de
// las **solicitudes pendientes** de confirmación del alumno.
//
// Para agregar un tutorado, el tutor busca por correo o teléfono exactos
// (`buscar_alumno_para_tutor`) y solicita el vínculo (`solicitar_vinculo_tutor`).
// Un alumno sin cuenta no puede confirmar: eso lo resuelve el administrador.
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import { useTemaClaro } from "../../lib/useTemaClaro";

const NIVEL_LABEL = {
  primaria: "Primaria",
  secundaria: "Secundaria",
  prepa: "Preparatoria",
  universidad: "Universidad",
};

function calcEdad(fecha) {
  if (!fecha) return null;
  const hoy = new Date();
  const n = new Date(fecha);
  let e = hoy.getFullYear() - n.getFullYear();
  const m = hoy.getMonth() - n.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < n.getDate())) e--;
  return e >= 0 && e < 120 ? e : null;
}

function Barra({ nombre }) {
  const navigate = useNavigate();
  const salir = async () => {
    await supabase.auth.signOut();
    navigate("/login", { replace: true });
  };
  return (
    <header className="tut-top">
      <Link to="/" className="tut-marca">
        <img src={`${import.meta.env.BASE_URL}assets/marca/v-avatar.svg`} alt="" width="30" height="30" />
        <span>Factoℝ[i]zando</span>
      </Link>
      <div className="tut-cuenta">
        {nombre && <span className="tut-nombre">{nombre}</span>}
        <button type="button" onClick={salir} className="tut-ghost">Cerrar sesión</button>
      </div>
    </header>
  );
}

// ── Modal para buscar y solicitar un tutorado ────────────────────────────────
function AgregarModal({ onClose, onSolicitado }) {
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [buscando, setBuscando] = useState(false);
  const [resultados, setResultados] = useState(null); // null = sin buscar aún
  const [error, setError] = useState("");
  const [solicitando, setSolicitando] = useState(null); // id en curso
  const [aviso, setAviso] = useState("");

  async function buscar(e) {
    e?.preventDefault();
    setError("");
    setAviso("");
    if (!email.trim() && !telefono.trim()) {
      setError("Escribe el correo o el teléfono del alumno.");
      return;
    }
    setBuscando(true);
    const { data, error: err } = await supabase.rpc("buscar_alumno_para_tutor", {
      p_email: email.trim() || null,
      p_telefono: telefono.trim() || null,
    });
    setBuscando(false);
    if (err) { setError("No se pudo buscar. Intenta de nuevo."); return; }
    setResultados(data || []);
  }

  async function solicitar(a) {
    setError("");
    setAviso("");
    setSolicitando(a.id);
    const { error: err } = await supabase.rpc("solicitar_vinculo_tutor", { p_alumno_id: a.id });
    setSolicitando(null);
    if (err) { setError(err.message || "No se pudo solicitar el vínculo."); return; }
    setAviso(`Solicitud enviada a ${a.nombre} ${a.apellidos}. Debe confirmarla desde su cuenta.`);
    setResultados((prev) => (prev || []).map((x) => x.id === a.id ? { ...x, ya_vinculado: true } : x));
    onSolicitado?.();
  }

  return (
    <div className="tut-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="tut-modal" role="dialog" aria-modal="true">
        <div className="tut-modal-cab">
          <h2>Agregar tutorado</h2>
          <button type="button" className="tut-x" onClick={onClose} aria-label="Cerrar">×</button>
        </div>
        <p className="tut-hint">
          Busca al alumno por su correo o su teléfono (coincidencia exacta). Si no tiene
          cuenta, el administrador debe vincularlo.
        </p>

        <form className="tut-buscar" onSubmit={buscar}>
          <label>
            <span>Correo</span>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="alumno@correo.com" autoFocus />
          </label>
          <label>
            <span>Teléfono (10 dígitos)</span>
            <input value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="2221234567" inputMode="numeric" />
          </label>
          <button type="submit" className="tut-btn" disabled={buscando}>
            {buscando ? "Buscando…" : "Buscar"}
          </button>
        </form>

        {error && <div className="tut-alerta tut-alerta-error">{error}</div>}
        {aviso && <div className="tut-alerta tut-alerta-ok">{aviso}</div>}

        {resultados && (
          <div className="tut-resultados">
            {resultados.length === 0 ? (
              <p className="tut-hint">Ningún alumno coincide exactamente. Verifica el dato.</p>
            ) : resultados.map((a) => (
              <div className="tut-resultado" key={a.id}>
                <div>
                  <div className="tut-card-nombre">{a.nombre} {a.apellidos}</div>
                  <div className="tut-card-meta">
                    {NIVEL_LABEL[a.nivel] || a.nivel}
                    {!a.tiene_cuenta && " · sin cuenta"}
                  </div>
                </div>
                {!a.tiene_cuenta ? (
                  <span className="tut-nota">Pídele al administrador que lo vincule</span>
                ) : a.ya_vinculado ? (
                  <span className="tut-nota">Ya vinculado</span>
                ) : (
                  <button
                    type="button"
                    className="tut-btn tut-btn-sm"
                    disabled={solicitando === a.id}
                    onClick={() => solicitar(a)}
                  >
                    {solicitando === a.id ? "Solicitando…" : "Solicitar vínculo"}
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Tutor() {
  useTemaClaro();
  const [cargando, setCargando] = useState(true);
  const [tutor, setTutor] = useState(null);
  const [alumnos, setAlumnos] = useState([]);
  const [pendientes, setPendientes] = useState([]);
  const [perfil, setPerfil] = useState(null);
  const [showAdd, setShowAdd] = useState(false);

  async function cargarPendientes() {
    const { data } = await supabase.rpc("solicitudes_pendientes_del_tutor");
    setPendientes(data || []);
  }

  useEffect(() => {
    let cancelado = false;
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (cancelado) return;
      if (!session) { setCargando(false); return; }

      const { data: p } = await supabase
        .from("profiles").select("nombre, rol").eq("id", session.user.id).single();
      if (cancelado) return;
      setPerfil(p);

      const { data: t } = await supabase
        .from("tutores").select("id, nombre, apellidos")
        .eq("profile_id", session.user.id).maybeSingle();
      if (cancelado) return;
      setTutor(t);

      if (t) {
        const { data: vinculos } = await supabase
          .from("alumno_tutor").select("alumno_id").eq("tutor_id", t.id).eq("estado", "activo");
        const ids = (vinculos || []).map((v) => v.alumno_id);
        if (ids.length) {
          const { data: als } = await supabase
            .from("alumnos").select("*").in("id", ids).order("apellidos", { ascending: true });
          if (!cancelado) setAlumnos(als || []);
        }
        const { data: pend } = await supabase.rpc("solicitudes_pendientes_del_tutor");
        if (!cancelado) setPendientes(pend || []);
      }
      setCargando(false);
    })();
    return () => { cancelado = true; };
  }, []);

  return (
    <div className="tut-root">
      <style>{CSS}</style>
      <Barra nombre={perfil?.nombre} />

      <main className="tut-main">
        {cargando ? (
          <p className="tut-muted">Cargando…</p>
        ) : !tutor ? (
          <div className="tut-vacio">
            <h1>Tu cuenta aún no está vinculada</h1>
            <p>
              Estás dentro como <strong>{perfil?.rol || "usuario"}</strong>, pero todavía no hay una
              ficha de tutor asociada a tu cuenta. Pide al administrador que enlace tu registro.
            </p>
          </div>
        ) : (
          <>
            <header className="tut-cab">
              <span className="tut-eyebrow">Tutor</span>
              <h1 className="tut-h1">{tutor.nombre} {tutor.apellidos}</h1>
              <p className="tut-sub">
                {alumnos.length === 0
                  ? "Todavía no tienes alumnos vinculados."
                  : `${alumnos.length} ${alumnos.length === 1 ? "alumno" : "alumnos"} a tu cargo.`}
              </p>
              <div className="tut-cab-acciones">
                <button type="button" className="tut-btn" onClick={() => setShowAdd(true)}>
                  Agregar tutorado
                </button>
              </div>
            </header>

            {pendientes.length > 0 && (
              <section className="tut-pendientes">
                <h2 className="tut-h2">Pendientes de confirmación</h2>
                {pendientes.map((a) => (
                  <div className="tut-pendiente" key={a.alumno_id}>
                    <span className="tut-avatar">{(a.nombre || "?").slice(0, 1).toUpperCase()}</span>
                    <div className="tut-pendiente-txt">
                      <div className="tut-card-nombre">{a.nombre} {a.apellidos}</div>
                      <div className="tut-card-meta">
                        {NIVEL_LABEL[a.nivel] || a.nivel} · esperando que confirme
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            )}

            <h2 className="tut-h2">Mis tutorados</h2>
            <div className="tut-grid">
              {alumnos.map((a) => {
                const edad = calcEdad(a.fecha_nacimiento);
                return (
                  <Link key={a.id} to={`/tutor/alumno/${a.id}`} className="tut-card">
                    <div className="tut-card-cab">
                      <span className="tut-avatar">
                        {(a.nombre || "?").slice(0, 1).toUpperCase()}
                      </span>
                      <div>
                        <div className="tut-card-nombre">{a.nombre} {a.apellidos}</div>
                        <div className="tut-card-meta">
                          {NIVEL_LABEL[a.nivel] || a.nivel}
                          {edad != null && ` · ${edad} años`}
                        </div>
                      </div>
                    </div>
                    <div className="tut-card-pie">
                      <span>{a.email || a.telefono || "Sin contacto"}</span>
                      <span className="tut-flecha" aria-hidden="true">→</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </main>

      {showAdd && (
        <AgregarModal
          onClose={() => setShowAdd(false)}
          onSolicitado={cargarPendientes}
        />
      )}
    </div>
  );
}

const CSS = `
.tut-root { min-height: 100vh; min-height: 100dvh; background: var(--fx-surface-sunken);
  color: var(--fx-text-body); font-family: var(--fx-font-body); }
.tut-top { display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding: 14px var(--fx-gutter); background: var(--fx-surface); border-bottom: 1px solid var(--fx-border); }
.tut-marca { display: inline-flex; align-items: center; gap: 10px; text-decoration: none;
  color: var(--fx-text-heading); font-family: var(--fx-font-heading); font-weight: 600; font-size: 17px; }
.tut-marca img { border-radius: 50%; }
.tut-cuenta { display: flex; align-items: center; gap: 12px; }
.tut-nombre { font-size: var(--fx-small-size); color: var(--fx-text-muted); }
.tut-ghost { background: none; border: 1px solid var(--fx-border); border-radius: var(--fx-radius-md);
  padding: 8px 14px; color: var(--fx-text-body); font-family: inherit; font-size: var(--fx-small-size);
  font-weight: 600; cursor: pointer; min-height: 40px; }
.tut-ghost:hover { border-color: var(--fx-primary-200); color: var(--fx-text-heading); }
.tut-main { max-width: 980px; margin: 0 auto; padding: clamp(24px, 4vw, 48px) var(--fx-gutter) 80px; }
.tut-muted { color: var(--fx-text-muted); }
.tut-cab { margin-bottom: 28px; }
.tut-eyebrow { font-size: var(--fx-caption-size); font-weight: 700; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--fx-primary-600); }
.tut-h1 { font-family: var(--fx-font-heading); font-size: clamp(24px, 4vw, 32px); font-weight: 600;
  letter-spacing: -0.015em; color: var(--fx-text-heading); margin: 6px 0 6px; }
.tut-h2 { font-family: var(--fx-font-heading); font-size: 18px; font-weight: 600;
  color: var(--fx-text-heading); margin: 28px 0 12px; }
.tut-sub { margin: 0; color: var(--fx-text-muted); font-size: var(--fx-body-size); }
.tut-cab-acciones { margin-top: 14px; }
.tut-grid { display: grid; gap: 14px; grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr)); }
.tut-card { display: flex; flex-direction: column; gap: 16px; background: var(--fx-surface);
  border: 1px solid var(--fx-border); border-radius: var(--fx-radius-lg); padding: 18px;
  text-decoration: none; transition: border-color var(--fx-transition), box-shadow var(--fx-transition); }
.tut-card:hover { border-color: var(--fx-primary-200); box-shadow: var(--fx-shadow-card); text-decoration: none; }
.tut-card-cab { display: flex; align-items: center; gap: 12px; }
.tut-avatar { display: grid; place-items: center; width: 44px; height: 44px; flex: 0 0 auto;
  border-radius: 50%; background: var(--fx-primary-50); color: var(--fx-primary-700);
  font-family: var(--fx-font-heading); font-weight: 700; font-size: 18px; }
.tut-card-nombre { font-family: var(--fx-font-heading); font-weight: 600; font-size: 16px; color: var(--fx-text-heading); }
.tut-card-meta { font-size: var(--fx-small-size); color: var(--fx-text-muted); margin-top: 2px; }
.tut-card-pie { display: flex; align-items: center; justify-content: space-between; gap: 10px;
  border-top: 1px solid var(--fx-border); padding-top: 12px;
  font-size: var(--fx-small-size); color: var(--fx-text-muted); }
.tut-flecha { color: var(--fx-primary-600); font-weight: 600; }
.tut-vacio h1 { font-family: var(--fx-font-heading); color: var(--fx-text-heading);
  font-size: 24px; margin: 0 0 10px; }
.tut-vacio p { margin: 0; max-width: 46ch; line-height: 1.6; }

/* Pendientes */
.tut-pendientes { background: var(--fx-surface); border: 1px solid var(--fx-warning-border);
  border-radius: var(--fx-radius-lg); padding: 6px 18px 18px; }
.tut-pendiente { display: flex; align-items: center; gap: 12px; padding: 12px 0;
  border-top: 1px solid var(--fx-border); }
.tut-pendiente:first-of-type { border-top: none; }

/* Botones */
.tut-btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  min-height: 44px; padding: 0 18px; border: none; border-radius: var(--fx-radius-md);
  background: var(--fx-primary-500); color: var(--fx-text-on-primary); font-family: inherit;
  font-size: var(--fx-small-size); font-weight: 600; cursor: pointer; }
.tut-btn:hover:not(:disabled) { background: var(--fx-primary-600); }
.tut-btn:disabled { opacity: .55; cursor: default; }
.tut-btn-sm { min-height: 38px; padding: 0 14px; }
.tut-nota { font-size: var(--fx-small-size); color: var(--fx-text-muted); }

/* Modal */
.tut-overlay { position: fixed; inset: 0; z-index: 100; display: flex; align-items: center;
  justify-content: center; padding: 24px 16px; background: rgba(10, 37, 64, 0.35);
  backdrop-filter: blur(3px); overflow-y: auto; }
.tut-modal { background: var(--fx-surface); border: 1px solid var(--fx-border);
  border-radius: var(--fx-radius-xl); box-shadow: var(--fx-shadow-float); width: 100%;
  max-width: 520px; max-height: 88vh; overflow: auto; padding: 24px 26px; }
.tut-modal-cab { display: flex; align-items: center; justify-content: space-between; gap: 14px; }
.tut-modal-cab h2 { font-family: var(--fx-font-heading); font-size: 20px; font-weight: 600;
  color: var(--fx-text-heading); margin: 0; }
.tut-x { border: none; background: none; font-size: 22px; line-height: 1; color: var(--fx-text-muted);
  cursor: pointer; padding: 4px 8px; border-radius: var(--fx-radius-sm); }
.tut-x:hover { background: var(--fx-surface-sunken); color: var(--fx-text-heading); }
.tut-hint { color: var(--fx-text-muted); font-size: var(--fx-small-size); line-height: 1.55;
  margin: 8px 0 16px; }
.tut-buscar { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; align-items: end; }
.tut-buscar label { display: flex; flex-direction: column; gap: 6px; }
.tut-buscar span { font-size: var(--fx-caption-size); font-weight: 700; letter-spacing: 0.07em;
  text-transform: uppercase; color: var(--fx-text-muted); }
.tut-buscar input { min-height: var(--fx-control-md); padding: 10px 13px; background: var(--fx-surface);
  border: 1px solid var(--fx-border); border-radius: var(--fx-radius-md); color: var(--fx-text-heading);
  font-family: inherit; font-size: var(--fx-small-size); outline: none; }
.tut-buscar input:focus { border-color: var(--fx-primary-400); box-shadow: var(--fx-focus-ring); }
.tut-buscar .tut-btn { grid-column: 1 / -1; }
@media (max-width: 480px) { .tut-buscar { grid-template-columns: 1fr; } }
.tut-alerta { margin-top: 14px; border-radius: var(--fx-radius-md); padding: 10px 14px;
  font-size: var(--fx-small-size); border: 1px solid transparent; }
.tut-alerta-error { background: var(--fx-error-bg); color: var(--fx-error-text); border-color: var(--fx-error-border); }
.tut-alerta-ok { background: var(--fx-success-bg); color: var(--fx-success-text); border-color: var(--fx-success-border); }
.tut-resultados { margin-top: 16px; display: flex; flex-direction: column; gap: 10px; }
.tut-resultado { display: flex; align-items: center; justify-content: space-between; gap: 12px;
  background: var(--fx-surface-sunken); border: 1px solid var(--fx-border);
  border-radius: var(--fx-radius-md); padding: 12px 14px; }
`;
