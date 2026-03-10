import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

// ─── Lista de ecuaciones LaTeX flotantes ──────────────────────────────────────
const EQUATIONS = [
  { tex: "n = p_{1}^{\\alpha_1}\\cdot p_{2}^{\\alpha_2}\\cdots p_{k}^{\\alpha_k}", scale: 1.6 },
  { tex: "x^2 - y^2 = (x + y)(x - y)", scale: 1.2 },
  { tex: "G = H \\times K", scale: 1.6 },
  { tex: "\\mathbb{Z}_6 \\cong \\mathbb{Z}_2 \\times \\mathbb{Z}_3", scale: 1.1 },
  { tex: "5 = (1 + 2i)(1 - 2i)", scale: 1.6 },
  { tex: "A \\xrightarrow{e} \\text{Im}(f) \\xrightarrow{m} B", scale: 1.6 },
  { tex: "M \\cong R^n \\oplus \\bigoplus R/(p_i^{k_i})", scale: 1.6 },
  { tex: "S^1 \\to S^3 \\to S^2", scale: 1.4 },
  { tex: "A = \\int \\lambda \\, dE(\\lambda)", scale: 1.6 },
  { tex: "\\det(A) = \\sum_{\\sigma \\in S_n} \\text{sgn}(\\sigma) \\prod_{i=1}^n a_{i,\\sigma(i)}", scale: 0.9 },
  { tex: "\\int_a^b f(x)\\,dx = F(b) - F(a)", scale: 1.6 },
  { tex: "a^2 + b^2 = c^2", scale: 0.8 },
  { tex: "f(z) = z^m e^{g(z)} \\prod_{n=1}^\\infty \\left(1 - \\frac{z}{a_n}\\right)e^{z/a_n}", scale: 1.6 },
  { tex: "H_n(X) \\cong \\mathbb{Z}^k \\oplus \\bigoplus \\mathbb{Z}_{p_i^{m_i}}", scale: 1.3 },
  { tex: "\\int_{X \\times Y} f\\,d(\\mu \\times \\nu) = \\int_X \\left(\\int_Y f\\,d\\nu\\right)d\\mu", scale: 1.6 },
  { tex: "\\hat{A} = \\sum_i \\lambda_i |\\psi_i\\rangle\\langle\\psi_i|", scale: 1.1},
  { tex: "f = m \\circ e", scale: 1.6 },
  { tex: "\\chi = V - E + F", scale: 1.7 },
  { tex: "e^{i\\pi} + 1 = 0", scale: 2.0 },
  { tex: "x^n + y^n = z^n", scale: 1.7 },
];

// ─── Componente de ecuación flotante ─────────────────────────────────────────
function FloatingEquation({ tex, style }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !window.katex) return;
    try {
      window.katex.render(tex, ref.current, {
        throwOnError: false,
        displayMode: false,
      });
    } catch (e) {
      ref.current.textContent = tex;
    }
  }, [tex]);

  return <span ref={ref} className="float-eq" style={style} />;
}

export default function Home() {
  const [symbols, setSymbols] = useState([]);
  const [visible, setVisible] = useState(false);
  const [katexLoaded, setKatexLoaded] = useState(false);

  // Cargar KaTeX dinámicamente desde CDN
  useEffect(() => {
    if (!document.getElementById("katex-css")) {
      const link = document.createElement("link");
      link.id = "katex-css";
      link.rel = "stylesheet";
      link.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css";
      document.head.appendChild(link);
    }
    if (window.katex) {
      setKatexLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js";
    script.async = true;
    script.onload = () => setKatexLoaded(true);
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
  const cols = 4;
  const rows = 5;
  const total = EQUATIONS.length; // 20 ecuaciones

  // Crear lista de celdas y mezclarla aleatoriamente
  const cells = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      cells.push({ r, c });
    }
  }
  // Mezclar (Fisher-Yates)
  for (let i = cells.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cells[i], cells[j]] = [cells[j], cells[i]];
  }

  const generated = EQUATIONS.map((eq, i) => {
    const cell = cells[i % cells.length];
    // Posición base de la celda + offset aleatorio dentro de la celda
    const cellW = 100 / cols;
    const cellH = 100 / rows;
    const left = cell.c * cellW + Math.random() * (cellW * 0.5);
    const top  = cell.r * cellH + Math.random() * (cellH * 0.5);

    return {
      id: i,
      tex: eq.tex,
      style: {
        left: `${left}%`,
        top:  `${top}%`,
        fontSize: `${eq.scale * 0.8}rem`,
        opacity: 0.05 + Math.random() * 0.05,
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${7 + Math.random() * 9}s`,
      },
    };
  });

  setSymbols(generated);
  setTimeout(() => setVisible(true), 80);
}, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg:      #0e0f11;
          --surface: #16181c;
          --border:  #2a2d35;
          --accent:  #3b9eff;
          --accent2: #7fd4ff;
          --text:    #e8eaf0;
          --muted:   #6b7280;
        }

        html, body, #root {
          height: 100%;
          background: var(--bg);
          color: var(--text);
          font-family: 'DM Sans', sans-serif;
        }

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

        .home::after {
          content: '';
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59,158,255,0.12) 0%, transparent 70%);
          top: 50%; left: 50%;
          transform: translate(-50%, -55%);
          pointer-events: none;
        }

        /* Ecuaciones flotantes */
        .float-eq {
          position: absolute;
          pointer-events: none;
          color: var(--accent2);
          animation: drift linear infinite;
          user-select: none;
          white-space: nowrap;
        }
        .float-eq .katex { color: inherit !important; font-size: 1em !important; }

        @keyframes drift {
          0%   { transform: translateY(0px) rotate(0deg); }
          50%  { transform: translateY(-18px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        /* Contenido principal */
        .card {
          position: relative; z-index: 2;
          display: flex; flex-direction: column;
          align-items: center; gap: 2.8rem;
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .card.show { opacity: 1; transform: translateY(0); }

        .logo-section { display: flex; flex-direction: column; align-items: center; gap: 1.2rem; }

        .logo-circle {
          width: 110px; height: 110px; border-radius: 50%;
          border: 2px dashed rgba(59,158,255,0.4); overflow: hidden;
          box-shadow: 0 0 30px rgba(59,158,255,0.15), inset 0 0 20px rgba(0,0,0,0.4);
          animation: spin-border 20s linear infinite;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .logo-circle:hover {
          transform: scale(1.06);
          box-shadow: 0 0 50px rgba(59,158,255,0.3), inset 0 0 20px rgba(0,0,0,0.4);
        }
        @keyframes spin-border { to { filter: hue-rotate(360deg); } }
        .logo-circle img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }

        .logo-banner img {
          max-width: 420px; width: 90vw; height: auto;
          filter: drop-shadow(0 4px 24px rgba(59,158,255,0.18));
        }

        .tagline {
          font-size: 0.95rem; font-weight: 300;
          color: var(--muted); letter-spacing: 0.18em; text-transform: uppercase;
        }

        .divider {
          width: 280px; height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          opacity: 0.5;
        }

        .section-label {
          font-size: 0.75rem; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--muted); font-weight: 400;
        }

        .btn-group { display: flex; gap: 1.4rem; flex-wrap: wrap; justify-content: center; }

        .btn {
          position: relative;
          display: flex; flex-direction: column; align-items: center; gap: 0.4rem;
          padding: 1.4rem 2.6rem;
          background: var(--surface); border: 1px solid var(--border); border-radius: 4px;
          color: var(--text); font-family: 'DM Sans', sans-serif;
          font-size: 1rem; font-weight: 500; letter-spacing: 0.05em;
          cursor: pointer; text-decoration: none; overflow: hidden; min-width: 180px;
          transition: border-color 0.3s, box-shadow 0.3s, transform 0.2s;
        }
        .btn::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(59,158,255,0.08), transparent 60%);
          opacity: 0; transition: opacity 0.3s;
        }
        .btn:hover {
          border-color: var(--accent);
          box-shadow: 0 0 24px rgba(59,158,255,0.2), 0 4px 16px rgba(0,0,0,0.4);
          transform: translateY(-3px);
        }
        .btn:hover::before { opacity: 1; }
        .btn:active { transform: translateY(-1px); }
        .btn::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px; background: var(--accent);
          transform: scaleX(0); transition: transform 0.3s;
        }
        .btn:hover::after { transform: scaleX(1); }

        .btn-icon { font-size: 1.5rem; margin-bottom: 0.1rem; }
        .btn-label { font-size: 1rem; font-weight: 500; }
        .btn-sub { font-size: 0.72rem; color: var(--muted); letter-spacing: 0.12em; text-transform: uppercase; }

        .footer {
          position: absolute; bottom: 1.5rem;
          font-size: 0.72rem; color: var(--muted); letter-spacing: 0.12em; z-index: 2;
        }

        @media (max-width: 480px) {
          .btn-group { flex-direction: column; align-items: center; }
          .btn { min-width: 240px; }
        }
      `}</style>

      <div className="home">
        {/* Ecuaciones flotantes */}
        {katexLoaded && symbols.map((s) => (
          <FloatingEquation key={s.id} tex={s.tex} style={s.style} />
        ))}

        <div className={`card ${visible ? "show" : ""}`}>
          <div className="logo-section">
            <div className="logo-circle">
              <img src={`${import.meta.env.BASE_URL}assets/logoX.png`} alt="Logo Factorizando" />
            </div>
            <div className="logo-banner">
              <img src={`${import.meta.env.BASE_URL}assets/ImWAPerfil.png`} alt="Factorizando" />
            </div>
            <p className="tagline">Plataforma de evaluación académica</p>
          </div>

          <div className="divider" />

          <p className="section-label">Selecciona tu nivel</p>

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
