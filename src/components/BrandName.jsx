// src/components/BrandName.jsx
// Renderiza: FACTO + ℝ[i] (KaTeX, dorado ámbar) + ZANDO

import { useEffect, useRef, useState } from "react";

function useKaTeX() {
  const [ready, setReady] = useState(!!window.katex);
  useEffect(() => {
    if (window.katex) { setReady(true); return; }
    if (!document.getElementById("katex-css")) {
      const link = document.createElement("link");
      link.id = "katex-css"; link.rel = "stylesheet";
      link.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css";
      document.head.appendChild(link);
    }
    if (!document.getElementById("katex-js")) {
      const script = document.createElement("script");
      script.id = "katex-js";
      script.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js";
      script.async = true;
      script.onload = () => setReady(true);
      document.head.appendChild(script);
    }
  }, []);
  return ready;
}

export default function BrandName({ size = "1.1rem" }) {
  const ref = useRef(null);
  const ready = useKaTeX();

  useEffect(() => {
    if (!ref.current || !ready || !window.katex) return;
    // Usamos \textcolor para aplicar el color directamente desde LaTeX
    window.katex.render(
      "\\textcolor{#f59e0b}{\\mathbb{R}[i]}",
      ref.current,
      {
        throwOnError: false,
        displayMode: false,
        trust: true,
        strict: false,
      }
    );
  }, [ready]);

  const wrapStyle = {
    fontFamily: "'Playfair Display', serif",
    fontSize: size,
    fontWeight: 700,
    color: "#e8eaf0",
    letterSpacing: ".04em",
    display: "inline-flex",
    alignItems: "center",
    userSelect: "none",
    lineHeight: 1,
  };

  const katexStyle = {
    display: "inline-flex",
    alignItems: "center",
    fontSize: `calc(${size} * 0.9)`,
    // Sin ready aún, mostramos placeholder con el color correcto
    color: "#f59e0b",
  };

  return (
    <span style={wrapStyle}>
      <span>Facto</span>
      <span ref={ref} style={katexStyle}>
        {/* Fallback mientras KaTeX carga */}
        {!ready && <span>ℝ[<em>i</em>]</span>}
      </span>
      <span>zando</span>
    </span>
  );
}
