import { useState, useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { supabase } from "../lib/supabase";

// ─── Floating equations for the art panel ──────────────────────────────────
const EQUATIONS = [
  "x²+y²=z²", "eⁱᵖ+1=0", "∫f(x)dx", "∑aₙ",
  "lim→0", "√-1=i", "ax²+bx+c", "∂f/∂x",
];

export default function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dest = searchParams.get("dest") || "preparatoria"; // where to go after login

  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw]     = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");
  const [eqs, setEqs]           = useState([]);

  // Generate floating equations on mount
  useEffect(() => {
    const generated = EQUATIONS.map((eq, i) => ({
      id: i,
      text: eq,
      style: {
        left: `${5 + Math.random() * 85}%`,
        top:  `${5 + Math.random() * 85}%`,
        fontSize: `${0.75 + Math.random() * 0.7}rem`,
        animationDelay: `${i * 1.1}s`,
        animationDuration: `${7 + Math.random() * 5}s`,
      },
    }));
    setEqs(generated);
  }, []);

  // Redirect if already logged in
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate(`/${dest}`);
    });
  }, [dest, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (authError) {
      setError("Correo o contraseña incorrectos. Intenta de nuevo.");
    } else {
      navigate(`/${dest}`);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #0e0f11; --surface: #13151a; --panel: #1a1d24;
          --border: #252830; --border-focus: #3b9eff;
          --accent: #3b9eff; --accent-dim: rgba(59,158,255,.15);
          --text: #e8eaf0; --muted: #5a6070; --error: #ff5a5a;
        }

        html, body, #root { height: 100%; background: var(--bg); color: var(--text); font-family: 'DM Sans', sans-serif; }

        .layout {
          display: grid; grid-template-columns: 1fr 1fr; min-height: 100vh;
        }
        @media (max-width: 700px) {
          .layout { grid-template-columns: 1fr; }
          .side-art { display: none; }
        }

        /* ── Art panel ── */
        .side-art {
          position: relative; overflow: hidden;
          background: #0a0b0d;
          display: flex; align-items: center; justify-content: center;
        }
        .side-art::before {
          content: ''; position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(59,158,255,.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,158,255,.06) 1px, transparent 1px);
          background-size: 36px 36px;
        }
        .art-glow {
          position: absolute; width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(59,158,255,.14) 0%, transparent 65%);
          top: 50%; left: 50%; transform: translate(-50%, -50%);
        }
        .art-content {
          position: relative; z-index: 2;
          display: flex; flex-direction: column; align-items: center; gap: 2rem;
          padding: 3rem;
        }
        .art-logo {
          width: 130px; height: 130px; border-radius: 50%;
          border: 1.5px dashed rgba(59,158,255,.35);
          overflow: hidden;
          box-shadow: 0 0 40px rgba(59,158,255,.18);
          animation: pulse-glow 4s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 40px rgba(59,158,255,.18); }
          50%       { box-shadow: 0 0 70px rgba(59,158,255,.35); }
        }
        .art-logo img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }
        .art-brand {
          font-family: 'Playfair Display', serif; font-size: 2rem; font-weight: 700;
          letter-spacing: .04em; color: var(--text);
          text-shadow: 0 0 30px rgba(59,158,255,.3);
        }
        .art-brand span { color: var(--accent); }
        .art-quote {
          font-size: .82rem; color: var(--muted); letter-spacing: .15em;
          text-transform: uppercase; text-align: center; line-height: 1.8;
          max-width: 220px;
        }
        .floating-eq {
          position: absolute; font-family: 'Playfair Display', serif;
          color: rgba(59,158,255,.18); pointer-events: none;
          animation: float-eq linear infinite;
        }
        @keyframes float-eq {
          0%   { transform: translateY(0) rotate(0deg);   opacity: .06; }
          50%  { transform: translateY(-30px) rotate(4deg); opacity: .14; }
          100% { transform: translateY(0) rotate(0deg);   opacity: .06; }
        }

        /* ── Login panel ── */
        .side-login {
          display: flex; align-items: center; justify-content: center;
          background: var(--surface); position: relative; overflow: hidden;
        }
        .side-login::before {
          content: ''; position: absolute; top: 0; left: 0; width: 1px; height: 100%;
          background: linear-gradient(to bottom, transparent, var(--accent), transparent);
          opacity: .3;
        }
        .login-box {
          width: 100%; max-width: 400px; padding: 3rem 2.5rem;
          animation: slideIn .6s cubic-bezier(.16,1,.3,1) forwards;
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .login-eyebrow {
          font-size: .7rem; letter-spacing: .25em; text-transform: uppercase;
          color: var(--accent); margin-bottom: .8rem;
          display: flex; align-items: center; gap: .6rem;
        }
        .login-eyebrow::before { content: ''; width: 24px; height: 1px; background: var(--accent); }
        .login-title {
          font-family: 'Playfair Display', serif; font-size: 2rem; font-weight: 700;
          color: var(--text); margin-bottom: .5rem; line-height: 1.2;
        }
        .login-subtitle { font-size: .88rem; color: var(--muted); margin-bottom: 2rem; line-height: 1.6; }

        .destination {
          display: inline-flex; align-items: center; gap: .5rem;
          padding: .4rem .9rem; background: var(--accent-dim);
          border: 1px solid rgba(59,158,255,.25); border-radius: 20px;
          font-size: .75rem; color: var(--accent); letter-spacing: .1em;
          text-transform: uppercase; margin-bottom: 2rem;
        }
        .dest-dot {
          width: 6px; height: 6px; border-radius: 50%; background: var(--accent);
          animation: blink 1.5s ease-in-out infinite;
        }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: .3; } }

        .form { display: flex; flex-direction: column; gap: 1.4rem; }
        .field { display: flex; flex-direction: column; gap: .5rem; }
        .field label {
          font-size: .72rem; letter-spacing: .15em; text-transform: uppercase;
          color: var(--muted); font-weight: 500;
        }
        .input-wrap { position: relative; }
        .input-icon {
          position: absolute; left: 14px; top: 50%; transform: translateY(-50%);
          color: var(--muted); width: 16px; height: 16px; pointer-events: none;
          transition: color .2s;
        }
        .field input {
          width: 100%; padding: .85rem 1rem .85rem 2.8rem;
          background: var(--panel); border: 1px solid var(--border);
          border-radius: 3px; color: var(--text); font-family: 'DM Sans', sans-serif;
          font-size: .95rem; outline: none;
          transition: border-color .25s, box-shadow .25s, background .25s;
        }
        .field input::placeholder { color: var(--muted); opacity: .6; }
        .field input:focus {
          border-color: var(--border-focus);
          box-shadow: 0 0 0 3px var(--accent-dim);
          background: #1e2230;
        }
        .toggle-pw {
          position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
          background: none; border: none; cursor: pointer; color: var(--muted);
          padding: 4px; transition: color .2s; font-size: .85rem;
        }
        .toggle-pw:hover { color: var(--accent); }

        .error-msg {
          font-size: .78rem; color: var(--error);
          padding: .6rem .9rem; background: rgba(255,90,90,.08);
          border: 1px solid rgba(255,90,90,.2); border-radius: 3px;
          animation: shake .4s ease;
        }
        @keyframes shake {
          0%,100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }

        .btn-submit {
          position: relative; width: 100%; padding: 1rem;
          background: var(--accent); border: none; border-radius: 3px;
          color: #fff; font-family: 'DM Sans', sans-serif;
          font-size: .95rem; font-weight: 500; letter-spacing: .06em;
          cursor: pointer; overflow: hidden; margin-top: .4rem;
          transition: transform .2s, box-shadow .2s, background .2s;
          display: flex; align-items: center; justify-content: center; gap: .5rem;
        }
        .btn-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(59,158,255,.4);
          background: #2d8fe8;
        }
        .btn-submit:disabled { opacity: .7; cursor: not-allowed; }

        .spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,.3);
          border-top-color: #fff; border-radius: 50%;
          animation: spin .6s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .back-link {
          margin-top: 1.8rem; text-align: center;
          font-size: .8rem; color: var(--muted);
        }
        .back-link a { color: var(--accent); text-decoration: none; font-weight: 500; }
        .back-link a:hover { opacity: .75; }
      `}</style>

      <div className="layout">

        {/* ── Left: Art panel ── */}
        <div className="side-art">
          <div className="art-glow" />
          {eqs.map((eq) => (
            <span key={eq.id} className="floating-eq" style={eq.style}>{eq.text}</span>
          ))}
          <div className="art-content">
            <div className="art-logo">
              <img src="/assets/logoX.png" alt="Logo Factorizando" />
            </div>
            <div className="art-brand">FACTO<span>ℝ[i]</span>ZANDO</div>
            <p className="art-quote">Donde las matemáticas<br />cobran forma</p>
          </div>
        </div>

        {/* ── Right: Login form ── */}
        <div className="side-login">
          <div className="login-box">
            <div className="login-eyebrow">Acceso seguro</div>
            <h1 className="login-title">Bienvenido<br />de vuelta</h1>
            <p className="login-subtitle">
              Ingresa tus credenciales para<br />acceder a tus cuestionarios.
            </p>

            {/* Destination badge */}
            <div className="destination">
              <span className="dest-dot" />
              {dest === "universidad" ? "Universidad" : "Preparatoria"}
            </div>

            <form className="form" onSubmit={handleSubmit}>
              {/* Email */}
              <div className="field">
                <label htmlFor="email">Correo electrónico</label>
                <div className="input-wrap">
                  <input
                    id="email" type="email" required
                    placeholder="alumno@ejemplo.com"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {/* Mail icon */}
                  <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
              </div>

              {/* Password */}
              <div className="field">
                <label htmlFor="password">Contraseña</label>
                <div className="input-wrap">
                  <input
                    id="password" type={showPw ? "text" : "password"} required
                    placeholder="••••••••"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {/* Lock icon */}
                  <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <button type="button" className="toggle-pw" onClick={() => setShowPw(!showPw)}>
                    {showPw ? "🙈" : "👁"}
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && <div className="error-msg">✕ &nbsp;{error}</div>}

              {/* Submit */}
              <button type="submit" className="btn-submit" disabled={loading}>
                {loading && <span className="spinner" />}
                {loading ? "Verificando…" : "Ingresar"}
              </button>
            </form>

            <div className="back-link">
              <Link to="/">← Regresar al inicio</Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
