// Modal de autenticación sobre la página (estilo Coursera): atenúa el fondo y
// muestra la AuthCard. Login/registro se intercambian dentro del mismo modal.
import { useEffect, useState } from "react";
import AuthCard from "./AuthCard";

export default function AuthModal({ open, initialMode = "login", onClose }) {
  const [mode, setMode] = useState(initialMode);

  // Al abrir, respeta el modo con el que se invocó (login o registro)
  useEffect(() => { if (open) setMode(initialMode); }, [open, initialMode]);

  // Cerrar con Esc + bloquear scroll del fondo mientras está abierto
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="am-overlay"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="am-dialog" role="dialog" aria-modal="true">
        <AuthCard mode={mode} onSwitchMode={setMode} onClose={onClose} />
      </div>
      <style>{`
        .am-overlay { position: fixed; inset: 0; z-index: 1000; background: rgba(16,24,40,.55);
          display: flex; align-items: flex-start; justify-content: center; padding: 6vh 16px 24px;
          overflow-y: auto; animation: am-fade .18s ease; }
        .am-dialog { width: 100%; max-width: 430px; animation: am-pop .2s cubic-bezier(.16,1,.3,1); }
        @keyframes am-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes am-pop { from { opacity: 0; transform: translateY(10px) scale(.98); } to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
}
