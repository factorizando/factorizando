// Pantalla de cuenta en revisión: /cuenta-pendiente
//
// Se llega aquí desde ProtectedRoute (estado_acceso ≠ "aprobado"), desde el
// post-login de AuthCard y tras completar el perfil. Mientras no haya decisión
// del administrador, no se entra a ningún bloque de contenido.
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useTemaClaro } from "../lib/useTemaClaro";

const ETIQUETA_BLOQUE = {
  preparatoria: "Admisión preparatoria",
  universidad: "Admisión universidad",
  regularizacion: "Regularización",
};

function IconoReloj() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="9" strokeWidth="1.7" />
      <path strokeLinecap="round" strokeWidth="1.7" d="M12 7.5v5l3 1.8" />
    </svg>
  );
}

export default function CuentaPendiente() {
  const navigate = useNavigate();
  useTemaClaro();
  const [cargando, setCargando] = useState(true);
  const [uid, setUid] = useState(null);
  const [perfil, setPerfil] = useState(null);
  const [reenviando, setReenviando] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelado = false;
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (cancelado) return;
      if (!session) { navigate("/login?dest=cuenta-pendiente", { replace: true }); return; }

      setUid(session.user.id);
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();
      if (cancelado) return;

      // Si ya no hay nada que esperar, cada quien a su sitio.
      if (data && !data.perfil_completo) { navigate("/completar-perfil", { replace: true }); return; }
      if (data?.rol === "admin") { navigate("/admin", { replace: true }); return; }
      if (data?.estado_acceso === "aprobado" && data?.suspendido_en
          && (!data.suspendido_hasta || new Date(data.suspendido_hasta) > new Date())) {
        navigate("/cuenta-suspendida", { replace: true });
        return;
      }
      if (data?.estado_acceso === "aprobado") {
        navigate(data.rol === "tutor" ? "/tutor" : `/${data.bloque || ""}`, { replace: true });
        return;
      }

      setPerfil(data || {});
      setCargando(false);
    })();
    return () => { cancelado = true; };
  }, [navigate]);

  async function volverASolicitar() {
    if (!uid || reenviando) return;
    setReenviando(true);
    setError("");
    const { error: err } = await supabase
      .from("profiles")
      .update({ estado_acceso: "pendiente", motivo_rechazo: null, revisado_en: null })
      .eq("id", uid);
    setReenviando(false);
    if (err) { setError("No se pudo reenviar la solicitud. Intenta de nuevo."); return; }
    setPerfil((p) => ({ ...p, estado_acceso: "pendiente", motivo_rechazo: null }));
  }

  async function cerrarSesion() {
    await supabase.auth.signOut();
    navigate("/login", { replace: true });
  }

  const rechazado = perfil?.estado_acceso === "rechazado";

  return (
    <div className="cpx-root">
      <style>{CSS}</style>
      <div className="cpx-card">
        {cargando ? (
          <div className="cpx-loading"><span className="cpx-spinner" /> Cargando…</div>
        ) : (
          <>
            <span className={`cpx-icono${rechazado ? " cpx-icono-rechazo" : ""}`}>
              <IconoReloj />
            </span>

            <h1 className="cpx-titulo">
              {rechazado ? "Tu solicitud no fue aprobada" : "Tu cuenta está en revisión"}
            </h1>

            <p className="cpx-texto">
              {rechazado
                ? "Un administrador revisó tu registro y de momento no otorgó acceso. Puedes corregir tus datos y volver a enviar la solicitud."
                : "Registramos tu solicitud y un administrador la revisará pronto. En cuanto la apruebe, podrás entrar al bloque que te asigne."}
            </p>

            {rechazado && perfil?.motivo_rechazo && (
              <div className="cpx-motivo">
                <span className="cpx-motivo-tit">Motivo</span>
                <p>{perfil.motivo_rechazo}</p>
              </div>
            )}

            {error && <div className="cpx-error">{error}</div>}

            <div className="cpx-acciones">
              {rechazado && (
                <>
                  <button type="button" className="cpx-btn-primario" onClick={volverASolicitar} disabled={reenviando}>
                    {reenviando ? "Enviando…" : "Volver a solicitar"}
                  </button>
                  <button type="button" className="cpx-btn-secundario" onClick={() => navigate("/completar-perfil")}>
                    Corregir mis datos
                  </button>
                </>
              )}
              <button type="button" className="cpx-btn-secundario" onClick={cerrarSesion}>
                Cerrar sesión
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const CSS = `
.cpx-root { min-height: 100vh; min-height: 100dvh; background: var(--fx-surface-sunken);
  color: var(--fx-text-body); font-family: var(--fx-font-body);
  display: flex; align-items: center; justify-content: center; padding: 32px 16px; }
.cpx-card { width: 100%; max-width: 480px; background: var(--fx-surface);
  border: 1px solid var(--fx-border); border-radius: var(--fx-radius-xl);
  box-shadow: var(--fx-shadow-float); padding: 40px 36px 32px; text-align: center; }
.cpx-loading { display: flex; align-items: center; gap: 10px; justify-content: center;
  color: var(--fx-text-muted); padding: 24px; }
.cpx-icono { display: grid; place-items: center; width: 64px; height: 64px; margin: 0 auto 20px;
  border-radius: 50%; background: var(--fx-primary-50); color: var(--fx-primary-600); }
.cpx-icono svg { width: 30px; height: 30px; }
.cpx-icono-rechazo { background: var(--fx-surface-sunken); color: var(--fx-text-muted); }
.cpx-titulo { font-family: var(--fx-font-heading); font-size: clamp(22px, 5vw, 27px);
  font-weight: 600; letter-spacing: -0.015em; color: var(--fx-text-heading); margin: 0 0 14px; }
.cpx-texto { font-size: var(--fx-body-size); line-height: 1.62; color: var(--fx-text-body);
  margin: 0 0 22px; text-wrap: pretty; }
.cpx-motivo { text-align: left; background: var(--fx-surface-sunken); border: 1px solid var(--fx-border);
  border-radius: var(--fx-radius-md); padding: 14px 16px; margin-bottom: 22px; }
.cpx-motivo-tit { display: block; font-size: var(--fx-caption-size); font-weight: 700;
  letter-spacing: 0.08em; text-transform: uppercase; color: var(--fx-text-muted); margin-bottom: 6px; }
.cpx-motivo p { margin: 0; font-size: var(--fx-small-size); line-height: 1.55; color: var(--fx-text-body); }
.cpx-error { font-size: var(--fx-small-size); color: var(--fx-error-text);
  background: var(--fx-surface-sunken); border: 1px solid var(--fx-border);
  border-radius: var(--fx-radius-md); padding: 10px 14px; margin-bottom: 18px; }
.cpx-acciones { display: flex; flex-direction: column; gap: 10px; }
.cpx-btn-primario, .cpx-btn-secundario { height: 48px; border-radius: var(--fx-radius-md);
  font-family: var(--fx-font-body); font-size: 16px; font-weight: 600; cursor: pointer;
  transition: background var(--fx-transition), border-color var(--fx-transition); }
.cpx-btn-primario { background: var(--fx-primary-600); border: none; color: #fff; }
.cpx-btn-primario:hover:not(:disabled) { background: var(--fx-primary-700, var(--fx-primary-600)); }
.cpx-btn-primario:disabled { opacity: .6; cursor: default; }
.cpx-btn-secundario { background: transparent; border: 1px solid var(--fx-border);
  color: var(--fx-text-body); }
.cpx-btn-secundario:hover { border-color: var(--fx-primary-200); color: var(--fx-text-heading); }
.cpx-spinner { width: 18px; height: 18px; border: 2px solid var(--fx-primary-100);
  border-top-color: var(--fx-primary-600); border-radius: 50%; animation: cpx-spin .6s linear infinite; }
@keyframes cpx-spin { to { transform: rotate(360deg); } }
`;
