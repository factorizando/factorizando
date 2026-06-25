import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
            <div className="nc-ic">✅</div>
            <h1 className="nc-h1">Contraseña actualizada</h1>
            <p className="nc-p">Ya puedes usar tu nueva contraseña.</p>
            <button className="nc-primary" onClick={() => navigate("/")}>Continuar</button>
          </div>
        ) : haySesion === false ? (
          <div className="nc-state">
            <div className="nc-ic">⚠️</div>
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
                    {showPw ? "🙈" : "👁"}
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
.nc-page { min-height: 100vh; min-height: 100dvh; background: #f4f5f7; display: flex;
  align-items: center; justify-content: center; padding: 24px 16px; font-family: var(--font-ui); }
.nc-page * { box-sizing: border-box; }
.nc-card { width: 100%; max-width: 420px; background: #fff; border: 1px solid #f3f4f6; border-radius: 16px;
  box-shadow: 0 10px 15px -3px rgba(17,24,39,.08), 0 4px 6px -4px rgba(17,24,39,.05), 0 24px 48px -16px rgba(17,24,39,.14);
  padding: 36px 36px 30px; }
.nc-h1 { font-size: 1.45rem; font-weight: 700; color: #111827; text-align: center; margin-bottom: 20px; }
.nc-form { display: flex; flex-direction: column; gap: 16px; }
.nc-field { display: flex; flex-direction: column; gap: 7px; }
.nc-field label { font-size: .86rem; font-weight: 600; color: #374151; }
.nc-field input { width: 100%; height: 46px; padding: 0 13px; background: #f9fafb; border: 2px solid #e5e7eb;
  border-radius: 11px; color: #111827; font-size: .95rem; outline: none; font-family: var(--font-ui);
  transition: border-color .18s, background .18s, box-shadow .18s; }
.nc-field input::placeholder { color: #9ca3af; }
.nc-field input:hover { border-color: #d1d5db; }
.nc-field input:focus { border-color: #111827; background: #fff; box-shadow: 0 0 0 4px rgba(17,24,39,.1); }
.nc-pw { position: relative; }
.nc-pw input { padding-right: 44px; }
.nc-eye { position: absolute; right: 8px; top: 50%; transform: translateY(-50%); background: none;
  border: none; cursor: pointer; font-size: 1rem; padding: 6px; line-height: 1; }
.nc-error { font-size: .85rem; color: #b42318; background: #fef3f2; border: 1px solid #fecdca; border-radius: 8px; padding: .6rem .8rem; }
.nc-primary { display: inline-flex; align-items: center; justify-content: center; gap: 8px; width: 100%; height: 48px;
  background-image: linear-gradient(to right, #111827, #374151); border: none; border-radius: 12px; color: #fff;
  font-size: .98rem; font-weight: 600; cursor: pointer; font-family: var(--font-ui);
  transition: background-image .25s, box-shadow .25s, transform .25s; margin-top: 2px; }
.nc-primary:hover:not(:disabled) { background-image: linear-gradient(to right, #1f2937, #4b5563);
  box-shadow: 0 12px 24px rgba(17,24,39,.25); transform: scale(1.015); }
.nc-primary:active:not(:disabled) { transform: scale(.985); }
.nc-primary:disabled { opacity: .7; cursor: not-allowed; }
.nc-state { text-align: center; padding: 14px 0; }
.nc-ic { font-size: 2.6rem; margin-bottom: 8px; }
.nc-p { font-size: .92rem; color: #475467; line-height: 1.6; margin-bottom: 18px; }
.nc-link { color: #111827; text-decoration: none; font-weight: 600; font-size: .92rem; }
.nc-link:hover { text-decoration: underline; }
.nc-spin { width: 16px; height: 16px; border: 2px solid rgba(255,255,255,.45); border-top-color: #fff;
  border-radius: 50%; animation: nc-spin .6s linear infinite; }
.nc-spin-dark { width: 28px; height: 28px; border-color: rgba(17,24,39,.18); border-top-color: #111827; margin: 12px auto; }
@keyframes nc-spin { to { transform: rotate(360deg); } }
`;
