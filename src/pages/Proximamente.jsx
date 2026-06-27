// Pantalla "Próximamente" que ve el público mientras el sitio está en modo
// mantenimiento (ver src/config.js → MANTENIMIENTO). Los admins no la ven: el
// gate de App.jsx les renderiza la app completa.
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useKaTeX } from "../data/teoria/shared.jsx";

// Wordmark idéntico al de la barra del Home (AppHeader): "Facto" + "zando" en
// Cormorant Garamond y la ℝ[i] en modo matemático (KaTeX), en azul.
function BrandName() {
  const ready = useKaTeX();
  const ref = useRef(null);
  useEffect(() => {
    if (ready && window.katex && ref.current) {
      try {
        window.katex.render("\\mathbb{R}[i]", ref.current, { throwOnError: false, displayMode: false });
      } catch { /* deja el fallback */ }
    }
  }, [ready]);
  return (
    <h1 style={S.brand}>
      Facto<span ref={ref} style={S.math}>ℝ[i]</span>zando
    </h1>
  );
}

export default function Proximamente({ cargando = false }) {
  return (
    <div style={S.page}>
      <style>{CSS}</style>
      <div style={S.card}>
        <span style={S.ring}>
          <img src={`${import.meta.env.BASE_URL}assets/logoX.png`} alt="Factorizando" style={S.logo} />
        </span>
        <BrandName />

        {cargando ? (
          <div style={S.spin} aria-label="Cargando" />
        ) : (
          <>
            <span style={S.eyebrow}>Muy pronto</span>
            <p style={S.sub}>
              Estamos afinando los últimos detalles de la plataforma.
              <br />Vuelve pronto.
            </p>
            <Link to="/login" style={S.admin}>Acceso de administradores</Link>
          </>
        )}
      </div>
    </div>
  );
}

const S = {
  page: {
    minHeight: "100dvh", background: "#0e0f11",
    display: "flex", alignItems: "center", justifyContent: "center",
    padding: "24px 16px", fontFamily: "'Inter', system-ui, sans-serif",
  },
  card: { textAlign: "center", maxWidth: 460, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 },
  ring: {
    width: 64, height: 64, borderRadius: "50%", overflow: "hidden",
    border: "1px dashed rgba(255,255,255,0.16)", display: "inline-block",
  },
  logo: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  brand: {
    fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700,
    fontSize: "clamp(28px, 7vw, 40px)", letterSpacing: ".01em", color: "#e8e8e8", margin: "6px 0 0",
  },
  math: { color: "#80c6ff" },
  eyebrow: {
    fontSize: 12, fontWeight: 600, letterSpacing: ".16em", textTransform: "uppercase",
    color: "#80c6ff", background: "rgba(128,198,255,0.10)",
    border: "1px solid rgba(128,198,255,0.22)", borderRadius: 999, padding: "5px 14px", marginTop: 6,
  },
  sub: { color: "#9c9c9c", fontSize: 15, lineHeight: 1.7, margin: 0 },
  admin: { marginTop: 10, color: "#80c6ff", textDecoration: "none", fontSize: 13.5, fontWeight: 600 },
  spin: {
    width: 30, height: 30, borderRadius: "50%", marginTop: 8,
    border: "2px solid rgba(128,198,255,0.2)", borderTopColor: "#80c6ff",
    animation: "px-spin .7s linear infinite",
  },
};

const CSS = `@keyframes px-spin { to { transform: rotate(360deg); } }`;
