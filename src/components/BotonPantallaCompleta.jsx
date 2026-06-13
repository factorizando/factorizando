// Botón de pantalla completa (patrón YouTube) para las vistas de presentación.
// Al entrar a pantalla completa se quita la barra del navegador (que en celular
// come espacio) y, donde el dispositivo lo permite (Android), se bloquea la
// orientación horizontal. Se detecta el soporte: en navegadores sin Fullscreen
// API para contenido web (p. ej. Safari de iPhone) el botón no se muestra.
import { useState, useEffect } from "react";

const soportaFullscreen = () =>
  typeof document !== "undefined" &&
  (document.fullscreenEnabled || document.webkitFullscreenEnabled);

function bloquearHorizontal() {
  const o = typeof window !== "undefined" && window.screen && window.screen.orientation;
  if (o && o.lock) {
    // Algunos dispositivos aceptan "landscape"; otros requieren "landscape-primary".
    o.lock("landscape").catch(() => {
      o.lock("landscape-primary").catch(() => {
        /* el dispositivo no permite bloquear la orientación (p. ej. iOS) */
      });
    });
  }
}

function liberarOrientacion() {
  const o = typeof window !== "undefined" && window.screen && window.screen.orientation;
  if (o && o.unlock) {
    try {
      o.unlock();
    } catch {
      /* sin bloqueo previo */
    }
  }
}

export default function BotonPantallaCompleta({ targetRef, tema, size = 18 }) {
  const [activo, setActivo] = useState(false);

  // El bloqueo de orientación se hace AQUÍ, al confirmarse la pantalla completa.
  // Hacerlo encadenado tras `await requestFullscreen()` suele fallar en Android
  // porque se pierde la activación de usuario; el evento fullscreenchange es el
  // momento fiable.
  useEffect(() => {
    const onChange = () => {
      const fs = !!(document.fullscreenElement || document.webkitFullscreenElement);
      setActivo(fs);
      if (fs) bloquearHorizontal();
      else liberarOrientacion();
    };
    document.addEventListener("fullscreenchange", onChange);
    document.addEventListener("webkitfullscreenchange", onChange);
    return () => {
      document.removeEventListener("fullscreenchange", onChange);
      document.removeEventListener("webkitfullscreenchange", onChange);
    };
  }, []);

  if (!soportaFullscreen()) return null;

  const entrar = async () => {
    const el = targetRef?.current;
    if (!el) return;
    try {
      if (el.requestFullscreen) await el.requestFullscreen();
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    } catch {
      /* el usuario canceló o el navegador no lo permitió */
    }
    // Refuerzo: algunos navegadores también aceptan el bloqueo aquí.
    bloquearHorizontal();
  };

  const salir = async () => {
    liberarOrientacion();
    try {
      if (document.exitFullscreen) await document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    } catch {
      /* ya fuera de pantalla completa */
    }
  };

  const color = (tema && tema.muted) || "#9aa0a6";
  const titulo = activo ? "Salir de pantalla completa" : "Pantalla completa";

  return (
    <button
      onClick={() => (activo ? salir() : entrar())}
      title={titulo}
      aria-label={titulo}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 4,
        display: "flex",
        alignItems: "center",
        color,
        flexShrink: 0,
        opacity: 0.75,
        transition: "opacity 0.15s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}
    >
      {activo ? (
        // Icono "contraer" (esquinas hacia dentro)
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3v3a2 2 0 0 1-2 2H3M21 8h-3a2 2 0 0 1-2-2V3M3 16h3a2 2 0 0 1 2 2v3M16 21v-3a2 2 0 0 1 2-2h3" />
        </svg>
      ) : (
        // Icono "expandir" (esquinas hacia fuera)
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3" />
        </svg>
      )}
    </button>
  );
}
