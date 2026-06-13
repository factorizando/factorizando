// Overlay "Gira tu teléfono" para celulares en vertical. Las presentaciones se
// diseñan en formato horizontal, así que en un teléfono en vertical se invita a
// rotar. Se muestra solo en pantallas pequeñas con puntero táctil y orientación
// vertical (excluye tablets y escritorio). Al rotar a horizontal desaparece solo.
// Útil sobre todo en iPhone, donde no existe el botón de pantalla completa.
import { useState, useEffect } from "react";

const QUERY = "(orientation: portrait) and (max-width: 600px) and (pointer: coarse)";

export default function AvisoRotar({ tema }) {
  const [mostrar, setMostrar] = useState(false);
  const [descartado, setDescartado] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia(QUERY);
    // Al volver a vertical se reinicia el descarte para que el aviso pueda
    // reaparecer si el usuario rota a horizontal y de vuelta a vertical.
    const update = () => {
      setMostrar(mq.matches);
      if (!mq.matches) setDescartado(false);
    };
    update();
    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update); // navegadores antiguos
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
  }, []);

  if (!mostrar || descartado) return null;

  const acento = (tema && tema.acento) || "#3b9eff";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(8,9,11,0.97)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 22,
        padding: 32,
        textAlign: "center",
      }}
    >
      <svg width="76" height="76" viewBox="0 0 64 64" fill="none">
        <g className="aviso-rotar-girar">
          <rect x="23" y="9" width="18" height="34" rx="3" stroke={acento} strokeWidth="2.5" />
          <line x1="29" y1="14" x2="35" y2="14" stroke={acento} strokeWidth="2" strokeLinecap="round" />
          <circle cx="32" cy="38" r="1.6" fill={acento} />
        </g>
        <path d="M14 50 a 20 20 0 0 1 -4 -12" stroke={acento} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
        <polyline points="7,40 10,37 13,40" stroke={acento} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      </svg>
      <div style={{ color: "#fff", fontSize: 18, fontWeight: 700, fontFamily: "inherit" }}>
        Gira tu teléfono
      </div>
      <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, maxWidth: 280, lineHeight: 1.5, fontFamily: "inherit" }}>
        Esta presentación se ve mejor en horizontal.
      </div>
      <button
        onClick={() => setDescartado(true)}
        style={{
          marginTop: 8,
          background: "none",
          border: "none",
          color: "rgba(255,255,255,0.4)",
          fontSize: 12.5,
          fontFamily: "inherit",
          cursor: "pointer",
          textDecoration: "underline",
          padding: 8,
        }}
      >
        Continuar en vertical
      </button>
    </div>
  );
}
