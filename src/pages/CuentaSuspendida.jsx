// Pantalla de cuenta suspendida: /cuenta-suspendida
//
// Se llega aquí desde ProtectedRoute, AuthCard, Home o CuentaPendiente cuando
// una cuenta **aprobada** tiene la suspensión vigente. Mientras dure, no se
// entra a ningún bloque de contenido. Reactivar es una acción del admin; aquí
// solo se informa el motivo y, si aplica, la fecha de término.
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useTemaClaro } from "../lib/useTemaClaro";

const ORIGEN_LABEL = {
  pago: "Falta de pago",
  ban: "Cuenta bloqueada",
  curso: "Periodo de curso finalizado",
  manual: "Decisión administrativa",
};

function fmtFecha(iso) {
  if (!iso) return null;
  const [y, m, d] = iso.split("T")[0].split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("es-MX", { day: "2-digit", month: "long", year: "numeric" });
}

function IconoEscudo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
        d="M12 3l7 3v5.5c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3z" />
      <path strokeWidth="1.7" strokeLinecap="round" d="M9 12h6" />
    </svg>
  );
}

export default function CuentaSuspendida() {
  const navigate = useNavigate();
  useTemaClaro();
  const [cargando, setCargando] = useState(true);
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    let cancelado = false;
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (cancelado) return;
      if (!session) { navigate("/login?dest=cuenta-suspendida", { replace: true }); return; }

      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();
      if (cancelado) return;

      if (data && !data.perfil_completo) { navigate("/completar-perfil", { replace: true }); return; }
      if (data?.rol === "admin" || data?.rol === "profesor") { navigate("/admin", { replace: true }); return; }

      const vigente = data?.estado_acceso === "aprobado" && data?.suspendido_en
        && (!data.suspendido_hasta || new Date(data.suspendido_hasta) > new Date());
      if (!vigente) {
        // Ya no está suspendida (o nunca lo estuvo): cada quien a su sitio.
        if (data?.estado_acceso === "aprobado") navigate(data.rol === "tutor" ? "/tutor" : `/${data.bloque || ""}`, { replace: true });
        else navigate("/cuenta-pendiente", { replace: true });
        return;
      }

      setPerfil(data);
      setCargando(false);
    })();
    return () => { cancelado = true; };
  }, [navigate]);

  async function cerrarSesion() {
    await supabase.auth.signOut();
    navigate("/login", { replace: true });
  }

  const hasta = fmtFecha(perfil?.suspendido_hasta);

  return (
    <div className="csx-root">
      <style>{CSS}</style>
      <div className="csx-card">
        {cargando ? (
          <div className="csx-loading"><span className="csx-spinner" /> Cargando…</div>
        ) : (
          <>
            <span className="csx-icono"><IconoEscudo /></span>

            <h1 className="csx-titulo">Tu acceso está suspendido</h1>

            <p className="csx-texto">
              {hasta
                ? `Puedes volver a entrar a partir del ${hasta}. Si tu situación ya se resolvió, pide a la coordinación que reactive tu cuenta.`
                : "Un administrador suspendió tu acceso. Si crees que es un error, contacta a la coordinación para revisarlo."}
            </p>

            <div className="csx-detalle">
              {perfil?.suspension_origen && (
                <div className="csx-fila">
                  <span className="csx-fila-t">Motivo</span>
                  <span className="csx-fila-v">{ORIGEN_LABEL[perfil.suspension_origen] || perfil.suspension_origen}</span>
                </div>
              )}
              {perfil?.motivo_suspension && (
                <div className="csx-fila">
                  <span className="csx-fila-t">Detalle</span>
                  <span className="csx-fila-v">{perfil.motivo_suspension}</span>
                </div>
              )}
              <div className="csx-fila">
                <span className="csx-fila-t">Vigente</span>
                <span className="csx-fila-v">{hasta ? `hasta el ${hasta}` : "sin fecha de término"}</span>
              </div>
            </div>

            <div className="csx-acciones">
              <button type="button" className="csx-btn-secundario" onClick={cerrarSesion}>
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
.csx-root { min-height: 100vh; min-height: 100dvh; background: var(--fx-surface-sunken);
  color: var(--fx-text-body); font-family: var(--fx-font-body);
  display: flex; align-items: center; justify-content: center; padding: 32px 16px; }
.csx-card { width: 100%; max-width: 480px; background: var(--fx-surface);
  border: 1px solid var(--fx-border); border-radius: var(--fx-radius-xl);
  box-shadow: var(--fx-shadow-float); padding: 40px 36px 32px; text-align: center; }
.csx-loading { display: flex; align-items: center; gap: 10px; justify-content: center;
  color: var(--fx-text-muted); padding: 24px; }
.csx-icono { display: grid; place-items: center; width: 64px; height: 64px; margin: 0 auto 20px;
  border-radius: 50%; background: var(--fx-warning-bg); color: var(--fx-warning-text); }
.csx-icono svg { width: 30px; height: 30px; }
.csx-titulo { font-family: var(--fx-font-heading); font-size: clamp(22px, 5vw, 27px);
  font-weight: 600; letter-spacing: -0.015em; color: var(--fx-text-heading); margin: 0 0 14px; }
.csx-texto { font-size: var(--fx-body-size); line-height: 1.62; color: var(--fx-text-body);
  margin: 0 0 22px; text-wrap: pretty; }
.csx-detalle { text-align: left; background: var(--fx-surface-sunken); border: 1px solid var(--fx-border);
  border-radius: var(--fx-radius-md); padding: 14px 16px; margin-bottom: 22px;
  display: flex; flex-direction: column; gap: 10px; }
.csx-fila { display: flex; flex-direction: column; gap: 2px; }
.csx-fila-t { font-size: var(--fx-caption-size); font-weight: 700;
  letter-spacing: 0.08em; text-transform: uppercase; color: var(--fx-text-muted); }
.csx-fila-v { font-size: var(--fx-small-size); line-height: 1.5; color: var(--fx-text-body); }
.csx-acciones { display: flex; flex-direction: column; gap: 10px; }
.csx-btn-secundario { height: 48px; border-radius: var(--fx-radius-md);
  background: transparent; border: 1px solid var(--fx-border); color: var(--fx-text-body);
  font-family: var(--fx-font-body); font-size: 16px; font-weight: 600; cursor: pointer;
  transition: border-color var(--fx-transition), color var(--fx-transition); }
.csx-btn-secundario:hover { border-color: var(--fx-primary-200); color: var(--fx-text-heading); }
.csx-spinner { width: 18px; height: 18px; border: 2px solid var(--fx-primary-100);
  border-top-color: var(--fx-primary-600); border-radius: 50%; animation: csx-spin .6s linear infinite; }
@keyframes csx-spin { to { transform: rotate(360deg); } }
`;
