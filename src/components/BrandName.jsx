// src/components/BrandName.jsx
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
    if (!ready || !window.katex) return;
    // Pequeño delay para asegurar que el DOM esté montado
    const id = setTimeout(() => {
      if (!ref.current) return;
      window.katex.render(
        "\\textbf{\\text{Facto}}\\textcolor{#f59e0b}{\\mathbb{R}[i]}\\textbf{\\text{zando}}",
        ref.current,
        { throwOnError: false, displayMode: false, trust: true, strict: false }
      );
    }, 0);
    return () => clearTimeout(id);
  }, [ready]);

  return (
    <span style={{ fontSize: size, letterSpacing: ".04em", userSelect: "none", color: "#e8eaf0" }}>
      <span ref={ref}>
        {/* Fallback visible siempre — KaTeX lo reemplaza cuando carga */}
        <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
          Facto<span style={{ color: "#f59e0b" }}>ℝ[<em>i</em>]</span>zando        </span>
      </span>
    </span>
  );
}
