// Aviso de versión nueva del PWA.
//
// El service worker está en modo "prompt" (ver vite.config.js): la versión nueva
// se descarga y queda ESPERANDO en vez de tomar el control sola. Importa por dos
// razones:
//
//   1. El alumno puede estar a media presentación, a media ronda de un taller o
//      contestando un cuestionario. Una recarga automática le borraría el avance.
//   2. Mientras la nueva espera, la precaché anterior sigue intacta, así que la
//      pestaña abierta nunca se queda apuntando a archivos que ya no existen
//      —que es lo que rompía la página tras varios despliegues seguidos—.
import { useRegisterSW } from "virtual:pwa-register/react";

const UNA_HORA = 60 * 60 * 1000;

export default function ActualizacionDisponible() {
  const {
    needRefresh: [hayVersionNueva, setHayVersionNueva],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(_url, registro) {
      // Una clase dura horas sin recargar; sin esta comprobación periódica la
      // versión nueva no se detectaría hasta la siguiente visita.
      if (registro) setInterval(() => registro.update(), UNA_HORA);
    },
  });

  if (!hayVersionNueva) return null;

  return (
    <div style={S.caja} role="status">
      <span style={S.texto}>Hay una versión nueva disponible.</span>
      {/* true = ordena al SW en espera que tome el control y recarga la página */}
      <button type="button" style={S.principal} onClick={() => updateServiceWorker(true)}>
        Actualizar
      </button>
      <button type="button" style={S.secundario} onClick={() => setHayVersionNueva(false)}>
        Después
      </button>
    </div>
  );
}

const S = {
  caja: {
    position: "fixed", left: "50%", bottom: 24, transform: "translateX(-50%)",
    zIndex: 9999, display: "flex", alignItems: "center", gap: 10,
    background: "var(--surface, #16181f)",
    border: "1px solid var(--border, #252830)",
    borderRadius: 12, padding: "10px 14px",
    boxShadow: "0 8px 28px rgba(0,0,0,.28)",
    fontFamily: "var(--font-ui, 'DM Sans', sans-serif)",
    maxWidth: "calc(100vw - 32px)", flexWrap: "wrap", justifyContent: "center",
  },
  texto: { color: "var(--text, #e8eaf0)", fontSize: 13.5 },
  principal: {
    background: "var(--azul-suave, #3b9eff)", border: "none", borderRadius: 8,
    padding: "7px 14px", color: "#fff", fontSize: 13, fontWeight: 700,
    cursor: "pointer", fontFamily: "inherit",
  },
  secundario: {
    background: "none", border: "none", color: "var(--text-muted, #5a6070)",
    fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
  },
};
