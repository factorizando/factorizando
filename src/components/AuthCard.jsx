// Tarjeta de autenticación reutilizable (login + registro en el mismo componente).
// Se usa tanto en las páginas /login y /registro como dentro de AuthModal (modal
// sobre la Home, estilo Coursera). Incluye opciones sociales (deshabilitadas por
// ahora), correo+contraseña, CAPTCHA (Turnstile) y manejo de Supabase Auth.
import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import Turnstile, { TURNSTILE_SITE_KEY } from "./Turnstile";

// Icono de candado (estilo Uiverse) para la pantalla de verificación.
const IconLock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

// Campo de código OTP de 6 casillas separadas, con auto-avance, borrado y pegado.
function CodigoInput({ value, onChange, disabled }) {
  const refs = useRef([]);
  const chars = Array.from({ length: 6 }, (_, i) => value[i] ?? "");
  const update = (next) => onChange(next.replace(/\D/g, "").slice(0, 6));

  const onInput = (i, e) => {
    const d = e.target.value.replace(/\D/g, "");
    if (!d) return;
    const arr = chars.slice();
    arr[i] = d[d.length - 1];
    update(arr.join(""));
    if (i < 5) refs.current[i + 1]?.focus();
  };

  const onKeyDown = (i, e) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const arr = chars.slice();
      if (arr[i]) { arr[i] = ""; update(arr.join("")); }
      else if (i > 0) { arr[i - 1] = ""; update(arr.join("")); refs.current[i - 1]?.focus(); }
    } else if (e.key === "ArrowLeft" && i > 0) refs.current[i - 1]?.focus();
    else if (e.key === "ArrowRight" && i < 5) refs.current[i + 1]?.focus();
  };

  const onPaste = (e) => {
    e.preventDefault();
    const txt = (e.clipboardData.getData("text") || "").replace(/\D/g, "").slice(0, 6);
    if (!txt) return;
    update(txt);
    refs.current[Math.min(txt.length, 5)]?.focus();
  };

  return (
    <div className="ac-otp" onPaste={onPaste}>
      {chars.map((c, i) => (
        <input
          key={i} ref={(el) => (refs.current[i] = el)}
          type="text" inputMode="numeric" maxLength={1} pattern="[0-9]"
          className="ac-otp-box" value={c} disabled={disabled} placeholder="•"
          autoComplete={i === 0 ? "one-time-code" : "off"}
          onChange={(e) => onInput(i, e)} onKeyDown={(e) => onKeyDown(i, e)}
        />
      ))}
    </div>
  );
}

const IconGoogle = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18A11 11 0 0 0 1 12c0 1.78.43 3.45 1.18 4.94l3.66-2.84z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
  </svg>
);
const IconApple = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M16.37 1.43c0 1.14-.47 2.24-1.22 3.04-.81.86-2.13 1.53-3.23 1.44-.14-1.12.41-2.31 1.16-3.07.83-.85 2.25-1.48 3.29-1.41zM20.5 17.02c-.6 1.39-.89 2.01-1.66 3.24-1.08 1.71-2.6 3.84-4.48 3.85-1.67.02-2.1-1.09-4.37-1.08-2.27.01-2.74 1.1-4.41 1.08-1.88-.01-3.32-1.93-4.4-3.64-3.01-4.77-3.33-10.34-.48-13.1 1.01-.98 2.34-1.6 3.78-1.6 1.7 0 2.77 1.1 4.18 1.1 1.36 0 2.19-1.1 4.16-1.1 1.28 0 2.64.7 3.61 1.9-3.17 1.74-2.65 6.26.37 8.49z" />
  </svg>
);
const IconGitHub = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
  </svg>
);
const SOCIALES = [
  { id: "google", label: "Google", Icon: IconGoogle },
  { id: "apple", label: "Apple", Icon: IconApple },
  { id: "github", label: "GitHub", Icon: IconGitHub },
];

export default function AuthCard({ mode = "login", onSwitchMode, onClose, dest }) {
  const navigate = useNavigate();
  const esRegistro = mode === "registro";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [enviado, setEnviado] = useState(false); // registro → "revisa tu correo"
  const [vista, setVista] = useState("form");     // "form" | "reset" | "resetCode"
  const [codigo, setCodigo] = useState("");        // OTP de recuperación
  const [cooldown, setCooldown] = useState(0);     // segundos para reenviar
  const [captchaToken, setCaptchaToken] = useState("");
  const captchaRef = useRef(null);

  // Cuenta regresiva para habilitar el botón "Reenviar código".
  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  // A dónde llevar tras iniciar sesión: completar perfil si falta, o su nivel.
  async function rutaPostAuth() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;
    const { data } = await supabase
      .from("profiles").select("nivel, perfil_completo").eq("id", session.user.id).single();
    onClose?.();
    if (data && !data.perfil_completo) { navigate("/completar-perfil"); return; }
    if (dest) { navigate(`/${dest}`); return; }
    if (data?.nivel === "preparatoria" || data?.nivel === "universidad") navigate(`/${data.nivel}`);
    else navigate("/");
  }

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    if (esRegistro && password.length < 8) { setError("La contraseña debe tener al menos 8 caracteres."); return; }
    if (!esRegistro && !password) { setError("Ingresa tu contraseña."); return; }
    if (TURNSTILE_SITE_KEY && !captchaToken) { setError("Completa la verificación anti-robots."); return; }

    setLoading(true);
    const correo = email.trim().toLowerCase();
    const res = esRegistro
      ? await supabase.auth.signUp({
          email: correo, password,
          options: { emailRedirectTo: window.location.origin + import.meta.env.BASE_URL, captchaToken: captchaToken || undefined },
        })
      : await supabase.auth.signInWithPassword({
          email: correo, password,
          options: { captchaToken: captchaToken || undefined },
        });
    setLoading(false);
    captchaRef.current?.reset();
    setCaptchaToken("");

    const { data, error: err } = res;
    if (err) {
      setError(esRegistro ? "No se pudo crear la cuenta. Intenta de nuevo." : "Correo o contraseña incorrectos.");
      return;
    }
    if (esRegistro) {
      if (data.user && Array.isArray(data.user.identities) && data.user.identities.length === 0) {
        setError("Ese correo ya está registrado. Inicia sesión."); return;
      }
      if (data.session) await rutaPostAuth();
      else setEnviado(true);
    } else {
      await rutaPostAuth();
    }
  };

  // Paso 1: enviar el código OTP de recuperación al correo.
  const handleReset = async (e) => {
    e.preventDefault();
    setError("");
    const correo = email.trim().toLowerCase();
    if (!correo) { setError("Escribe tu correo."); return; }
    if (TURNSTILE_SITE_KEY && !captchaToken) { setError("Completa la verificación anti-robots."); return; }
    setLoading(true);
    const { error: err } = await supabase.auth.resetPasswordForEmail(correo, {
      captchaToken: captchaToken || undefined,
    });
    setLoading(false);
    captchaRef.current?.reset();
    setCaptchaToken("");
    if (err) {
      const rate = err.status === 429 || /rate/i.test(err.code || err.message || "");
      setError(rate
        ? "Demasiados intentos. Espera unos minutos antes de pedir otro código."
        : "No se pudo enviar el código. Intenta más tarde.");
      return;
    }
    setCodigo(""); setPassword("");
    setCooldown(30);
    setVista("resetCode"); // no revelamos si el correo existe (anti-enumeración)
  };

  // Paso 2: verificar el código OTP y fijar la nueva contraseña.
  const handleVerifyReset = async (e) => {
    e.preventDefault();
    setError("");
    const code = codigo.replace(/\D/g, "");
    if (code.length !== 6) { setError("El código es de 6 dígitos."); return; }
    if (password.length < 8) { setError("La nueva contraseña debe tener al menos 8 caracteres."); return; }
    setLoading(true);
    const { error: vErr } = await supabase.auth.verifyOtp({
      email: email.trim().toLowerCase(), token: code, type: "recovery",
    });
    if (vErr) { setLoading(false); setError("Código inválido o expirado. Pide uno nuevo."); return; }
    const { error: uErr } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (uErr) { setError("No se pudo actualizar la contraseña. Intenta de nuevo."); return; }
    await rutaPostAuth();
  };

  // Reenviar el código de recuperación.
  const reenviarCodigo = async () => {
    if (cooldown > 0) return;
    setError("");
    const { error: err } = await supabase.auth.resetPasswordForEmail(email.trim().toLowerCase());
    if (err) {
      const rate = err.status === 429 || /rate/i.test(err.code || err.message || "");
      setError(rate ? "Espera unos minutos antes de pedir otro código." : "No se pudo reenviar el código.");
      return;
    }
    setCooldown(30);
  };

  const cambiarVista = (v) => { setVista(v); setError(""); setCaptchaToken(""); };

  return (
    <div className="ac-card">
      <style>{CSS}</style>
      {onClose && (
        <button type="button" className="ac-close" onClick={onClose} aria-label="Cerrar">✕</button>
      )}

      {enviado ? (
        <div className="ac-state">
          <div className="ac-state-ic">✉️</div>
          <h1 className="ac-h1">Revisa tu correo</h1>
          <p className="ac-p">
            Te enviamos un enlace de confirmación a <strong>{email}</strong>. Ábrelo para
            verificar tu cuenta y continuar con tu perfil.
          </p>
          <button type="button" className="ac-switch-link" onClick={() => { setEnviado(false); onSwitchMode?.("login"); }}>
            Ir a iniciar sesión
          </button>
        </div>
      ) : vista === "resetCode" ? (
        <>
          <div className="ac-lockbadge"><IconLock /></div>
          <h1 className="ac-h1">Verificación requerida</h1>
          <p className="ac-p ac-p-tight">Ingresa el código de 6 dígitos que enviamos a</p>
          <p className="ac-email">{email}</p>
          <form className="ac-form" onSubmit={handleVerifyReset} style={{ marginTop: 4 }}>
            <CodigoInput value={codigo} onChange={setCodigo} disabled={loading} />
            <div className="ac-field">
              <label htmlFor="ac-newpw">Nueva contraseña</label>
              <div className="ac-pw">
                <input
                  id="ac-newpw" type={showPw ? "text" : "password"} required autoComplete="new-password"
                  placeholder="Mínimo 8 caracteres"
                  value={password} onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" className="ac-eye" onClick={() => setShowPw(!showPw)} aria-label="Mostrar u ocultar contraseña">
                  {showPw ? "🙈" : "👁"}
                </button>
              </div>
            </div>
            {error && <div className="ac-error">{error}</div>}
            <button type="submit" className="ac-primary" disabled={loading}>
              {loading && <span className="ac-spin" />}
              {loading ? "Verificando…" : "Verificar y guardar"}
            </button>
          </form>
          <div className="ac-resend">
            {cooldown > 0 ? (
              <span className="ac-resend-timer">Reenviar código en 0:{String(cooldown).padStart(2, "0")}</span>
            ) : (
              <button type="button" className="ac-switch-link" onClick={reenviarCodigo}>Reenviar código</button>
            )}
            <span aria-hidden="true">·</span>
            <button type="button" className="ac-switch-link" onClick={() => cambiarVista("form")}>Cancelar</button>
          </div>
        </>
      ) : vista === "reset" ? (
        <>
          <div className="ac-brandrow">
            <span className="ac-logo">
              <img src={`${import.meta.env.BASE_URL}assets/logoX.png`} alt="Factorizando" />
            </span>
          </div>
          <h1 className="ac-h1">Restablecer contraseña</h1>
          <p className="ac-p" style={{ marginBottom: 18 }}>
            Te enviaremos un código de 6 dígitos para crear una nueva contraseña.
          </p>
          <form className="ac-form" onSubmit={handleReset}>
            <div className="ac-field">
              <label htmlFor="ac-reset-email">Correo electrónico</label>
              <input
                id="ac-reset-email" type="email" required autoComplete="email"
                placeholder="tucorreo@ejemplo.com"
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Turnstile ref={captchaRef} onToken={setCaptchaToken} />
            {error && <div className="ac-error">{error}</div>}
            <button type="submit" className="ac-primary" disabled={loading}>
              {loading && <span className="ac-spin" />}
              {loading ? "Enviando…" : "Enviar código"}
            </button>
          </form>
          <p className="ac-foot">
            <button type="button" className="ac-switch-link" onClick={() => cambiarVista("form")}>← Volver</button>
          </p>
        </>
      ) : (
        <>
          <div className="ac-brandrow">
            <span className="ac-logo">
              <img src={`${import.meta.env.BASE_URL}assets/logoX.png`} alt="Factorizando" />
            </span>
          </div>
          <h1 className="ac-h1">{esRegistro ? "Crea tu cuenta" : "Bienvenido de vuelta"}</h1>

          <div className="ac-social-row">
            {SOCIALES.map((s) => {
              const Icon = s.Icon;
              return (
                <button key={s.id} type="button" className="ac-social" disabled title="Próximamente">
                  <Icon /> {s.label}
                </button>
              );
            })}
          </div>

          <div className="ac-or"><span>o</span></div>

          <form className="ac-form" onSubmit={submit}>
            <div className="ac-field">
              <label htmlFor="ac-email">Correo electrónico</label>
              <input
                id="ac-email" type="email" required autoComplete="email"
                placeholder="tucorreo@ejemplo.com"
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="ac-field">
              <label htmlFor="ac-password">Contraseña</label>
              <div className="ac-pw">
                <input
                  id="ac-password" type={showPw ? "text" : "password"} required
                  autoComplete={esRegistro ? "new-password" : "current-password"}
                  placeholder={esRegistro ? "Mínimo 8 caracteres" : "Introduce tu contraseña"}
                  value={password} onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" className="ac-eye" onClick={() => setShowPw(!showPw)} aria-label="Mostrar u ocultar contraseña">
                  {showPw ? "🙈" : "👁"}
                </button>
              </div>
              {!esRegistro && (
                <button type="button" className="ac-forgot" onClick={() => cambiarVista("reset")}>
                  ¿Olvidaste tu contraseña?
                </button>
              )}
            </div>

            <Turnstile ref={captchaRef} onToken={setCaptchaToken} />

            {error && <div className="ac-error">{error}</div>}

            <button type="submit" className="ac-primary" disabled={loading}>
              {loading && <span className="ac-spin" />}
              {loading ? "Un momento…" : esRegistro ? "Crear cuenta" : "Iniciar sesión"}
            </button>
          </form>

          <p className="ac-foot">
            {esRegistro ? "¿Ya tienes cuenta? " : "¿Primera vez aquí? "}
            {onSwitchMode ? (
              <button type="button" className="ac-switch-link" onClick={() => onSwitchMode(esRegistro ? "login" : "registro")}>
                {esRegistro ? "Inicia sesión" : "Regístrate"}
              </button>
            ) : (
              <Link to={esRegistro ? "/login" : "/registro"}>{esRegistro ? "Inicia sesión" : "Regístrate"}</Link>
            )}
          </p>
        </>
      )}
    </div>
  );
}

const CSS = `
.ac-card { position: relative; width: 100%; max-width: 430px; background: var(--card-bg);
  border: 1px solid var(--card-border); border-radius: 16px; box-shadow: var(--card-shadow);
  padding: 38px 40px 30px; font-family: var(--font-ui); }
.ac-card * { box-sizing: border-box; }
.ac-close { position: absolute; top: 14px; right: 14px; width: 32px; height: 32px;
  display: grid; place-items: center; background: none; border: none; cursor: pointer;
  color: var(--gray-500); font-size: 1rem; border-radius: 8px; transition: background .15s, color .15s; }
.ac-close:hover { background: var(--gray-100); color: var(--gray-900); }
.ac-brandrow { display: flex; justify-content: center; margin-bottom: 16px; }
.ac-logo { width: 46px; height: 46px; border-radius: 50%; overflow: hidden; border: 1px solid var(--card-border); }
.ac-logo img { width: 100%; height: 100%; object-fit: cover; display: block; }
.ac-h1 { font-size: 1.55rem; font-weight: 700; color: var(--gray-900); text-align: center; margin-bottom: 22px; letter-spacing: -.01em; }

.ac-lockbadge { width: 60px; height: 60px; margin: 0 auto 18px; border-radius: 16px;
  background: var(--gray-900); color: #fff; display: grid; place-items: center;
  transition: transform .3s ease; }
.ac-lockbadge:hover { transform: scale(1.1) rotate(10deg); }
.ac-lockbadge svg { width: 28px; height: 28px; }
.ac-p-tight { margin-bottom: 4px; }
.ac-email { text-align: center; font-size: .9rem; font-weight: 600; color: var(--gray-700); margin: 0 0 6px; }

.ac-social-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
.ac-social { display: inline-flex; align-items: center; justify-content: center; gap: 7px;
  height: 44px; padding: 0 8px; background: var(--card-bg); border: 2px solid var(--input-border); border-radius: 11px;
  color: var(--gray-700); font-size: .9rem; font-weight: 600; cursor: pointer; transition: background .15s, border-color .15s, box-shadow .15s; }
.ac-social:hover:not(:disabled) { background: var(--gray-50); border-color: var(--input-border-hover); box-shadow: 0 2px 6px rgba(17,24,39,.06); }
.ac-social:disabled { opacity: .55; cursor: not-allowed; }

.ac-or { display: flex; align-items: center; gap: 12px; margin: 18px 0; color: var(--gray-400); font-size: .82rem; }
.ac-or::before, .ac-or::after { content: ""; flex: 1; height: 1px; background: var(--gray-200); }

.ac-form { display: flex; flex-direction: column; gap: 16px; }
.ac-field { display: flex; flex-direction: column; gap: 7px; }
.ac-field label { font-size: .86rem; font-weight: 600; color: var(--gray-700); }
.ac-field input { width: 100%; height: 46px; padding: 0 13px; background: var(--input-bg);
  border: 2px solid var(--input-border); border-radius: 11px; color: var(--gray-900); font-size: .95rem; outline: none;
  font-family: var(--font-ui); transition: border-color .18s, background .18s, box-shadow .18s; }
.ac-field input::placeholder { color: var(--gray-400); }
.ac-field input:hover { border-color: var(--input-border-hover); }
.ac-field input:focus { border-color: var(--accent-blue-ink); background: var(--card-bg); box-shadow: 0 0 0 4px var(--focus-ring); }
.ac-pw { position: relative; }
.ac-pw input { padding-right: 44px; }

.ac-otp { display: flex; justify-content: center; gap: 10px; }
.ac-otp-box { width: 46px; height: 54px; text-align: center; font-size: 1.35rem; font-weight: 700;
  color: var(--gray-900); background: var(--input-bg); border: 2px solid var(--input-border); border-radius: 12px; outline: none;
  font-family: var(--font-ui); transition: border-color .18s, background .18s, box-shadow .18s, transform .18s; }
.ac-otp-box::placeholder { color: var(--gray-300); }
.ac-otp-box:hover { border-color: var(--input-border-hover); box-shadow: 0 2px 6px rgba(17,24,39,.06); }
.ac-otp-box:focus { border-color: var(--accent-blue-ink); background: var(--card-bg); box-shadow: 0 0 0 4px var(--focus-ring); transform: scale(1.06); }

.ac-forgot { align-self: flex-start; background: none; border: none; cursor: pointer; padding: 2px 0;
  margin-top: -2px; color: var(--accent-blue-ink); font-size: .82rem; font-weight: 600; font-family: var(--font-ui); }
.ac-forgot:hover { color: var(--accent-blue-ink-hover); text-decoration: underline; }
.ac-eye { position: absolute; right: 8px; top: 50%; transform: translateY(-50%);
  background: none; border: none; cursor: pointer; font-size: 1rem; padding: 6px; line-height: 1; }

.ac-error { font-size: .85rem; color: #b42318; background: #fef3f2; border: 1px solid #fecdca;
  border-radius: 8px; padding: .6rem .8rem; }

.ac-primary { display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  width: 100%; height: 48px; background-image: linear-gradient(to right, var(--gray-900), var(--gray-700)); border: none; border-radius: 12px;
  color: #fff; font-size: .98rem; font-weight: 600; cursor: pointer; font-family: var(--font-ui);
  transition: background-image .25s, box-shadow .25s, transform .25s; margin-top: 2px; }
.ac-primary:hover:not(:disabled) { background-image: linear-gradient(to right, var(--gray-800), var(--gray-600));
  box-shadow: 0 12px 24px rgba(17,24,39,.25); transform: scale(1.015); }
.ac-primary:active:not(:disabled) { transform: scale(.985); }
.ac-primary:disabled { opacity: .7; cursor: not-allowed; }
.ac-spin { width: 16px; height: 16px; border: 2px solid rgba(255,255,255,.45);
  border-top-color: #fff; border-radius: 50%; animation: ac-spin .6s linear infinite; }
@keyframes ac-spin { to { transform: rotate(360deg); } }

.ac-foot { text-align: center; font-size: .9rem; color: var(--gray-600); margin-top: 22px; }
.ac-foot a, .ac-switch-link { color: var(--accent-blue-ink); text-decoration: none; font-weight: 600;
  background: none; border: none; cursor: pointer; font-size: inherit; font-family: var(--font-ui); padding: 0; }
.ac-foot a:hover, .ac-switch-link:hover { color: var(--accent-blue-ink-hover); text-decoration: underline; }

.ac-resend { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 8px;
  text-align: center; font-size: .88rem; color: var(--gray-500); margin-top: 18px; }
.ac-resend-timer { font-weight: 600; color: var(--gray-700); }

.ac-state { text-align: center; padding: 8px 0; }
.ac-state-ic { font-size: 2.6rem; margin-bottom: 8px; }
.ac-p { font-size: .92rem; color: var(--gray-600); line-height: 1.6; margin-bottom: 18px; }

@media (max-width: 460px) {
  .ac-card { padding: 30px 22px 24px; }
  .ac-social { font-size: .82rem; gap: 5px; }
  .ac-otp { gap: 7px; }
  .ac-otp-box { width: 42px; height: 50px; font-size: 1.2rem; }
}
`;
