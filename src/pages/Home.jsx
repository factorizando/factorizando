import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

// ─── Inline SVG math symbols that float in the background ───────────────────
const MATH_SYMBOLS = [
  "∑", "∫", "√", "π", "∞", "∂", "∇", "∈", "⊕", "×",
  "α", "β", "λ", "σ", "φ", "Δ", "Ω", "ℝ", "ℤ", "∀",
];

function FloatingSymbol({ symbol, style }) {
  return (
    <span className="float-sym" style={style}>
      {symbol}
    </span>
  );
}

export default function Home() {
  const [symbols, setSymbols] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // generate random floating symbols
    const generated = Array.from({ length: 28 }, (_, i) => ({
      id: i,
      symbol: MATH_SYMBOLS[i % MATH_SYMBOLS.length],
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        fontSize: `${0.8 + Math.random() * 1.6}rem`,
        opacity: 0.04 + Math.random() * 0.08,
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${6 + Math.random() * 8}s`,
      },
    }));
    setSymbols(generated);
    // stagger-in animation
    setTimeout(() => setVisible(true), 80);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg:       #0e0f11;
          --surface:  #16181c;
          --border:   #2a2d35;
          --accent:   #3b9eff;
          --accent2:  #7fd4ff;
          --text:     #e8eaf0;
          --muted:    #6b7280;
          --btn-prep: #1a2a40;
          --btn-uni:  #1a2a40;
        }

        html, body, #root {
          height: 100%;
          background: var(--bg);
          color: var(--text);
          font-family: 'DM Sans', sans-serif;
        }

        /* ── Layout ── */
        .home {
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 2rem;
        }

        /* ── Background grid ── */
        .home::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 48px 48px;
          opacity: 0.25;
        }

        /* ── Glow blob ── */
        .home::after {
          content: '';
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59,158,255,0.12) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -55%);
          pointer-events: none;
        }

        /* ── Floating symbols ── */
        .float-sym {
          position: absolute;
          pointer-events: none;
          font-family: 'Playfair Display', serif;
          color: var(--accent2);
          animation: drift linear infinite;
          user-select: none;
        }
        @keyframes drift {
          0%   { transform: translateY(0px) rotate(0deg); }
          50%  { transform: translateY(-22px) rotate(6deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        /* ── Content card ── */
        .card {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2.8rem;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .card.show {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Logo section ── */
        .logo-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.2rem;
        }

        .logo-circle {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          border: 2px dashed rgba(59,158,255,0.4);
          overflow: hidden;
          box-shadow:
            0 0 30px rgba(59,158,255,0.15),
            inset 0 0 20px rgba(0,0,0,0.4);
          animation: spin-border 20s linear infinite;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .logo-circle:hover {
          transform: scale(1.06);
          box-shadow: 0 0 50px rgba(59,158,255,0.3), inset 0 0 20px rgba(0,0,0,0.4);
        }
        @keyframes spin-border {
          to { filter: hue-rotate(360deg); }
        }
        .logo-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .logo-banner img {
          max-width: 420px;
          width: 90vw;
          height: auto;
          filter: drop-shadow(0 4px 24px rgba(59,158,255,0.18));
        }

        /* ── Tagline ── */
        .tagline {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 300;
          color: var(--muted);
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        /* ── Divider ── */
        .divider {
          width: 280px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          opacity: 0.5;
        }

        /* ── Section label ── */
        .section-label {
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted);
          font-weight: 400;
        }

        /* ── Button group ── */
        .btn-group {
          display: flex;
          gap: 1.4rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .btn {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          padding: 1.4rem 2.6rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 4px;
          color: var(--text);
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          cursor: pointer;
          text-decoration: none;
          overflow: hidden;
          transition: border-color 0.3s, box-shadow 0.3s, transform 0.2s;
          min-width: 180px;
        }

        .btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(59,158,255,0.08), transparent 60%);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .btn:hover {
          border-color: var(--accent);
          box-shadow: 0 0 24px rgba(59,158,255,0.2), 0 4px 16px rgba(0,0,0,0.4);
          transform: translateY(-3px);
        }
        .btn:hover::before { opacity: 1; }
        .btn:active { transform: translateY(-1px); }

        .btn-icon {
          font-size: 1.5rem;
          margin-bottom: 0.1rem;
        }

        .btn-label {
          font-size: 1rem;
          font-weight: 500;
        }

        .btn-sub {
          font-size: 0.72rem;
          color: var(--muted);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        /* accent line bottom of btn */
        .btn::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--accent);
          transform: scaleX(0);
          transition: transform 0.3s;
        }
        .btn:hover::after { transform: scaleX(1); }

        /* ── Footer ── */
        .footer {
          position: absolute;
          bottom: 1.5rem;
          font-size: 0.72rem;
          color: var(--muted);
          letter-spacing: 0.12em;
          z-index: 2;
        }

        /* ── Responsive ── */
        @media (max-width: 480px) {
          .btn-group { flex-direction: column; align-items: center; }
          .btn { min-width: 240px; }
        }
      `}</style>

      <div className="home">
        {/* Floating math symbols */}
        {symbols.map((s) => (
          <FloatingSymbol key={s.id} symbol={s.symbol} style={s.style} />
        ))}

        <div className={`card ${visible ? "show" : ""}`}>
          {/* Logo & banner */}
          <div className="logo-section">
            <div className="logo-circle">
              <img src={`${import.meta.env.BASE_URL}assets/logoX.png`} alt="Logo Factorizando" />
            </div>
            <div className="logo-banner">
              <img src={`${import.meta.env.BASE_URL}assets/ImWAPerfil.png`} alt="Factorizando" />
            </div>
            <p className="tagline">Plataforma de evaluación matemática</p>
          </div>

          <div className="divider" />

          <p className="section-label">Selecciona tu nivel</p>

          {/* Navigation buttons */}
          <div className="btn-group">
            <Link to="/preparatoria" className="btn">
              <span className="btn-icon">📐</span>
              <span className="btn-label">Preparatoria</span>
              <span className="btn-sub">Nivel medio superior</span>
            </Link>
            <Link to="/universidad" className="btn">
              <span className="btn-icon">🎓</span>
              <span className="btn-label">Universidad</span>
              <span className="btn-sub">Nivel superior</span>
            </Link>
          </div>
        </div>

        <p className="footer">© Factorizando — Todos los derechos reservados</p>
      </div>
    </>
  );
}
