import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CircleCheck, TriangleAlert, Eye, EyeOff } from "lucide-react";
import { supabase } from "../lib/supabase";
import { useTemaClaro } from "../lib/useTemaClaro";

// Pantalla para fijar una nueva contraseña tras el enlace de recuperación.
// Requiere una sesión activa (la crea el enlace del correo). Si no hay sesión,
// el enlace caducó o es inválido.
export default function NuevaContrasena() {
  const navigate = useNavigate();
  useTemaClaro();

  const [haySesion, setHaySesion] = useState(null); // null=cargando, bool
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [ok, setOk] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setHaySesion(!!session));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setHaySesion(!!session);
    });
    return () => subscription.unsubscribe();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    if (password.length < 8) { setError("La contraseña debe tener al menos 8 caracteres."); return; }
    if (password !== password2) { setError("Las contraseñas no coinciden."); return; }
    setLoading(true);
    const { error: err } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (err) { setError("No se pudo actualizar la contraseña. Solicita un enlace nuevo."); return; }
    setOk(true);
  };

  return (
    <div className="nc-page">
      <style>{CSS}</style>
      <div className="nc-card">
        {ok ? (
          <div className="nc-state">
            <div className="nc-ic nc-ic-ok"><CircleCheck size={30} aria-hidden="true" /></div>
            <h1 className="nc-h1">Contraseña actualizada</h1>
            <p className="nc-p">Ya puedes usar tu nueva contraseña.</p>
            <button className="nc-primary" onClick={() => navigate("/")}>Continuar</button>
          </div>
        ) : haySesion === false ? (
          <div className="nc-state">
            <div className="nc-ic"><TriangleAlert size={30} aria-hidden="true" /></div>
            <h1 className="nc-h1">Enlace no válido</h1>
            <p className="nc-p">El enlace para restablecer tu contraseña caducó o ya se usó. Solicita uno nuevo.</p>
            <Link to="/login" className="nc-link">Volver a iniciar sesión</Link>
          </div>
        ) : haySesion === null ? (
          <div className="nc-state"><div className="nc-spin nc-spin-dark" /></div>
        ) : (
          <>
            <h1 className="nc-h1">Crea una nueva contraseña</h1>
            <form className="nc-form" onSubmit={submit}>
              <div className="nc-field">
                <label htmlFor="nc-p1">Nueva contraseña</label>
                <div className="nc-pw">
                  <input id="nc-p1" type={showPw ? "text" : "password"} required autoComplete="new-password"
                    placeholder="Mínimo 8 caracteres" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <button type="button" className="nc-eye" onClick={() => setShowPw(!showPw)} aria-label="Mostrar u ocultar">
                    {showPw ? <EyeOff size={18} aria-hidden="true" /> : <Eye size={18} aria-hidden="true" />}
                  </button>
                </div>
              </div>
              <div className="nc-field">
                <label htmlFor="nc-p2">Confirmar contraseña</label>
                <input id="nc-p2" type={showPw ? "text" : "password"} required autoComplete="new-password"
                  placeholder="Repite tu contraseña" value={password2} onChange={(e) => setPassword2(e.target.value)} />
              </div>
              {error && <div className="nc-error">{error}</div>}
              <button type="submit" className="nc-primary" disabled={loading}>
                {loading && <span className="nc-spin" />}
                {loading ? "Guardando…" : "Guardar contraseña"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

const CSS = `
.nc-page { min-height: 100vh; min-height: 100dvh; background: var(--fx-bg); display: flex;
  align-items: center; justify-content: center; padding: 24px 16px; font-family: var(--fx-font-body); }
.nc-page * { box-sizing: border-box; }
.nc-card { width: 100%; max-width: 420px; background: var(--fx-surface); border: 1px solid var(--fx-border);
  border-radius: var(--fx-radius-xl); box-shadow: var(--fx-shadow-float); padding: 36px 36px 30px; }
.nc-h1 { font-family: var(--fx-font-heading); font-size: 1.4rem; font-weight: 600; color: var(--fx-text-heading);
  text-align: center; margin-bottom: 20px; letter-spacing: -0.02em; }
.nc-form { display: flex; flex-direction: column; gap: 16px; }
.nc-field { display: flex; flex-direction: column; gap: 7px; }
.nc-field label { font-size: var(--fx-caption-size); letter-spacing: .06em; text-transform: uppercase;
  font-weight: 700; color: var(--fx-text-muted); }
.nc-field input { width: 100%; min-height: var(--fx-control-md); padding: 11px 13px; background: var(--fx-surface);
  border: 1px solid var(--fx-border); border-radius: var(--fx-radius-md); color: var(--fx-text-heading);
  font-size: var(--fx-small-size); outline: none; font-family: inherit;
  transition: border-color var(--fx-transition), box-shadow var(--fx-transition); }
.nc-field input::placeholder { color: var(--fx-text-disabled); }
.nc-field input:hover { border-color: var(--fx-border-strong); }
.nc-field input:focus { border-color: var(--fx-primary-400); box-shadow: var(--fx-focus-ring); }
.nc-pw { position: relative; }
.nc-pw input { padding-right: 46px; }
.nc-eye { position: absolute; right: 8px; top: 50%; transform: translateY(-50%); display: grid;
  place-items: center; background: none; border: none; cursor: pointer; color: var(--fx-text-muted); padding: 6px; }
.nc-eye:hover { color: var(--fx-text-heading); }
.nc-error { font-size: var(--fx-small-size); color: var(--fx-error-text); background: var(--fx-error-bg);
  border: 1px solid var(--fx-error-border); border-radius: var(--fx-radius-md); padding: .6rem .8rem; }
.nc-primary { display: inline-flex; align-items: center; justify-content: center; gap: 8px; width: 100%; min-height: 48px;
  background: var(--fx-primary-500); border: none; border-radius: var(--fx-radius-md); color: var(--fx-text-on-primary);
  font-size: 1rem; font-weight: 600; cursor: pointer; font-family: inherit;
  transition: background var(--fx-transition); margin-top: 2px; }
.nc-primary:hover:not(:disabled) { background: var(--fx-primary-600); }
.nc-primary:disabled { opacity: .7; cursor: not-allowed; }
.nc-state { text-align: center; padding: 14px 0; }
.nc-ic { display: grid; place-items: center; width: 60px; height: 60px; margin: 0 auto 12px;
  border-radius: 50%; background: var(--fx-surface-sunken); color: var(--fx-text-muted); }
.nc-ic-ok { background: var(--fx-primary-50); color: var(--fx-primary-600); }
.nc-p { font-size: var(--fx-small-size); color: var(--fx-text-body); line-height: 1.6; margin-bottom: 18px; }
.nc-link { color: var(--fx-primary-700); text-decoration: none; font-weight: 600; font-size: var(--fx-small-size); }
.nc-link:hover { text-decoration: underline; }
.nc-spin { width: 16px; height: 16px; border: 2px solid color-mix(in srgb, var(--fx-text-on-primary) 40%, transparent);
  border-top-color: var(--fx-text-on-primary); border-radius: 50%; animation: nc-spin .6s linear infinite; }
.nc-spin-dark { width: 28px; height: 28px; border-color: var(--fx-primary-100); border-top-color: var(--fx-primary-500); margin: 12px auto; }
@keyframes nc-spin { to { transform: rotate(360deg); } }
`;
