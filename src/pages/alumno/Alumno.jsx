// Perfil del alumno: /alumno
//
// Semilla del futuro perfil (cursos, avance). Por ahora resuelve lo que el
// alumno con cuenta sí puede hacer sin depender del tutor: confirmar o rechazar
// las solicitudes de vínculo que un tutor le mandó.
//
// El alumno sin cuenta no entra aquí: su tutor opera el material en su nombre.
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

const CONFIRMADO = "activo";

export default function Alumno() {
  useTemaClaro();
  const navigate = useNavigate();
  const [cargando, setCargando] = useState(true);
  const [perfil, setPerfil] = useState(null);
  const [alumno, setAlumno] = useState(null);
  const [tutores, setTutores] = useState([]); // { id, nombre, apellidos, relacion, estado }
  const [procesando, setProcesando] = useState(null);
  const [error, setError] = useState("");

  async function cargar(uid) {
    const { data: al } = await supabase
      .from("alumnos").select("id, nombre, apellidos, nivel").eq("profile_id", uid).maybeSingle();
    setAlumno(al || null);
    if (!al) { setTutores([]); return; }

    const { data: vinculos } = await supabase
      .from("alumno_tutor").select("tutor_id, estado").eq("alumno_id", al.id);
    const ids = [...new Set((vinculos || []).map((v) => v.tutor_id))];
    if (ids.length === 0) { setTutores([]); return; }

    const { data: ts } = await supabase
      .from("tutores").select("id, nombre, apellidos, relacion").in("id", ids);
    const porId = Object.fromEntries((ts || []).map((t) => [t.id, t]));
    setTutores(
      (vinculos || [])
        .map((v) => ({ ...porId[v.tutor_id], estado: v.estado }))
        .filter((t) => t.id)
    );
  }

  useEffect(() => {
    let cancelado = false;
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (cancelado) return;
      if (!session) { setCargando(false); return; }

      const { data: p } = await supabase
        .from("profiles").select("nombre, bloque").eq("id", session.user.id).single();
      if (cancelado) return;
      setPerfil(p);
      await cargar(session.user.id);
      setCargando(false);
    })();
    return () => { cancelado = true; };
  }, []);

  async function resolver(tutorId, aceptar) {
    setError("");
    setProcesando(tutorId);
    const { error: err } = await supabase.rpc("resolver_vinculo_tutor", {
      p_tutor_id: tutorId,
      p_aceptar: aceptar,
    });
    if (err) { setError(err.message || "No se pudo resolver la solicitud."); setProcesando(null); return; }
    const { data: { session } } = await supabase.auth.getSession();
    await cargar(session.user.id);
    setProcesando(null);
  }

  async function salir() {
    await supabase.auth.signOut();
    navigate("/login", { replace: true });
  }

  const pendientes = tutores.filter((t) => t.estado === "pendiente");
  const activos = tutores.filter((t) => t.estado === CONFIRMADO);

  return (
    <div className="al-root">
      <style>{CSS}</style>
      <header className="al-top">
        <Link to="/" className="al-marca">
          <img src={`${import.meta.env.BASE_URL}assets/marca/v-avatar.svg`} alt="" width="30" height="30" />
          <span>Factoℝ[i]zando</span>
        </Link>
        <div className="al-cuenta">
          {perfil?.nombre && <span className="al-nombre">{perfil.nombre}</span>}
          <button type="button" onClick={salir} className="al-ghost">Cerrar sesión</button>
        </div>
      </header>

      <main className="al-main">
        {cargando ? (
          <p className="al-muted">Cargando…</p>
        ) : !alumno ? (
          <div className="al-vacio">
            <h1>Tu perfil de alumno aún no está listo</h1>
            <p>Pide al administrador que cree tu expediente para ver tus cursos y tu avance.</p>
          </div>
        ) : (
          <>
            <header className="al-cab">
              <span className="al-eyebrow">Mi perfil</span>
              <h1 className="al-h1">{alumno.nombre} {alumno.apellidos}</h1>
              <p className="al-sub">{NIVEL_LABEL[alumno.nivel] || alumno.nivel}</p>
              {perfil?.bloque && (
                <div className="al-acciones">
                  <Link className="al-btn" to={`/${perfil.bloque}`}>Ir a mi material</Link>
                </div>
              )}
            </header>

            {error && <div className="al-alerta al-alerta-error">{error}</div>}

            <section className="al-sec">
              <h2 className="al-h2">Solicitudes de tutores</h2>
              {pendientes.length === 0 ? (
                <p className="al-muted">No tienes solicitudes pendientes.</p>
              ) : pendientes.map((t) => (
                <div className="al-tutor" key={t.id}>
                  <span className="al-avatar">{(t.nombre || "?").slice(0, 1).toUpperCase()}</span>
                  <div className="al-tutor-txt">
                    <div className="al-tutor-nombre">{t.nombre} {t.apellidos}</div>
                    <div className="al-tutor-meta">{t.relacion} · quiere ser tu tutor</div>
                  </div>
                  <div className="al-tutor-acciones">
                    <button type="button" className="al-btn" disabled={procesando === t.id}
                      onClick={() => resolver(t.id, true)}>
                      {procesando === t.id ? "…" : "Aceptar"}
                    </button>
                    <button type="button" className="al-ghost" disabled={procesando === t.id}
                      onClick={() => resolver(t.id, false)}>
                      Rechazar
                    </button>
                  </div>
                </div>
              ))}
            </section>

            <section className="al-sec">
              <h2 className="al-h2">Mis tutores</h2>
              {activos.length === 0 ? (
                <p className="al-muted">Todavía no tienes tutores confirmados.</p>
              ) : activos.map((t) => (
                <div className="al-tutor" key={t.id}>
                  <span className="al-avatar">{(t.nombre || "?").slice(0, 1).toUpperCase()}</span>
                  <div className="al-tutor-txt">
                    <div className="al-tutor-nombre">{t.nombre} {t.apellidos}</div>
                    <div className="al-tutor-meta">{t.relacion}</div>
                  </div>
                  <span className="al-badge">Vinculado</span>
                </div>
              ))}
            </section>
          </>
        )}
      </main>
    </div>
  );
}

const CSS = `
.al-root { min-height: 100vh; min-height: 100dvh; background: var(--fx-surface-sunken);
  color: var(--fx-text-body); font-family: var(--fx-font-body); }
.al-top { display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding: 14px var(--fx-gutter); background: var(--fx-surface); border-bottom: 1px solid var(--fx-border); }
.al-marca { display: inline-flex; align-items: center; gap: 10px; text-decoration: none;
  color: var(--fx-text-heading); font-family: var(--fx-font-heading); font-weight: 600; font-size: 17px; }
.al-marca img { border-radius: 50%; }
.al-cuenta { display: flex; align-items: center; gap: 12px; }
.al-nombre { font-size: var(--fx-small-size); color: var(--fx-text-muted); }
.al-ghost { background: none; border: 1px solid var(--fx-border); border-radius: var(--fx-radius-md);
  padding: 8px 14px; color: var(--fx-text-body); font-family: inherit; font-size: var(--fx-small-size);
  font-weight: 600; cursor: pointer; min-height: 40px; }
.al-ghost:hover:not(:disabled) { border-color: var(--fx-primary-200); color: var(--fx-text-heading); }
.al-ghost:disabled { opacity: .55; cursor: default; }
.al-main { max-width: 820px; margin: 0 auto; padding: clamp(24px, 4vw, 48px) var(--fx-gutter) 80px; }
.al-muted { color: var(--fx-text-muted); font-size: var(--fx-small-size); }
.al-cab { margin-bottom: 24px; }
.al-eyebrow { font-size: var(--fx-caption-size); font-weight: 700; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--fx-primary-600); }
.al-h1 { font-family: var(--fx-font-heading); font-size: clamp(24px, 4vw, 32px); font-weight: 600;
  letter-spacing: -0.015em; color: var(--fx-text-heading); margin: 6px 0; }
.al-sub { margin: 0; color: var(--fx-text-muted); font-size: var(--fx-body-size); }
.al-acciones { margin-top: 14px; }
.al-btn { display: inline-flex; align-items: center; justify-content: center; min-height: 44px;
  padding: 0 18px; border: none; border-radius: var(--fx-radius-md); background: var(--fx-primary-500);
  color: var(--fx-text-on-primary); font-family: inherit; font-size: var(--fx-small-size);
  font-weight: 600; cursor: pointer; text-decoration: none; }
.al-btn:hover { background: var(--fx-primary-600); text-decoration: none; }
.al-btn:disabled { opacity: .55; cursor: default; }
.al-sec { background: var(--fx-surface); border: 1px solid var(--fx-border);
  border-radius: var(--fx-radius-lg); padding: 20px 22px; margin-bottom: 20px; }
.al-h2 { font-family: var(--fx-font-heading); font-size: 19px; font-weight: 600;
  color: var(--fx-text-heading); margin: 0 0 14px; }
.al-tutor { display: flex; align-items: center; gap: 12px; padding: 12px 0;
  border-top: 1px solid var(--fx-border); flex-wrap: wrap; }
.al-tutor:first-of-type { border-top: none; }
.al-avatar { display: grid; place-items: center; width: 44px; height: 44px; flex: 0 0 auto;
  border-radius: 50%; background: var(--fx-primary-50); color: var(--fx-primary-700);
  font-family: var(--fx-font-heading); font-weight: 700; font-size: 18px; }
.al-tutor-txt { flex: 1; min-width: 0; }
.al-tutor-nombre { font-family: var(--fx-font-heading); font-weight: 600; font-size: 16px;
  color: var(--fx-text-heading); }
.al-tutor-meta { font-size: var(--fx-small-size); color: var(--fx-text-muted); margin-top: 2px; }
.al-tutor-acciones { display: flex; gap: 8px; flex-wrap: wrap; }
.al-badge { background: var(--fx-primary-50); color: var(--fx-primary-700);
  border: 1px solid var(--fx-primary-100); border-radius: var(--fx-radius-pill);
  padding: 4px 12px; font-size: var(--fx-small-size); font-weight: 600; }
.al-alerta { margin-bottom: 16px; border-radius: var(--fx-radius-md); padding: 10px 14px;
  font-size: var(--fx-small-size); border: 1px solid transparent; }
.al-alerta-error { background: var(--fx-error-bg); color: var(--fx-error-text); border-color: var(--fx-error-border); }
.al-vacio h1 { font-family: var(--fx-font-heading); color: var(--fx-text-heading); font-size: 24px; margin: 0 0 10px; }
.al-vacio p { margin: 0; max-width: 46ch; line-height: 1.6; }
`;
