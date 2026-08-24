// Bloques que dibujan. Ninguno tiene arte propio: todos resuelven por registro,
// que es lo que la fase 2 hizo posible — antes habría que haber duplicado 468
// comparaciones aquí dentro.
import { useState } from "react";
import { DIAGRAMS } from "../diagramas/index.js";
import { INTERACTIVOS } from "../interactivos/index.js";
import { eyebrow, tarjeta } from "./ui.js";

function Pie({ bloque, tema }) {
  if (!bloque.caption) return null;
  return (
    <div style={{ fontSize: 13.5, lineHeight: 1.5, color: tema.muted, textAlign: "center", marginTop: 12 }}>
      {bloque.caption}
    </div>
  );
}

// Un diagrama estático del registro. Si la clave no existe se deja el hueco y
// se avisa en desarrollo: en producción un diagrama que falta no debe tumbar la
// clase, pero en desarrollo tiene que doler.
export function Figura({ bloque, tema }) {
  const D = DIAGRAMS[bloque.clave];
  if (!D) {
    if (import.meta.env.DEV) console.warn(`[bloques] figura sin registrar: "${bloque.clave}"`);
    return null;
  }
  return (
    <div style={{ ...tarjeta(tema), display: "flex", flexDirection: "column", alignItems: "center" }}>
      {bloque.titulo && <div style={{ ...eyebrow(tema), alignSelf: "flex-start" }}>{bloque.titulo}</div>}
      <D tema={tema} />
      <Pie bloque={bloque} tema={tema} />
    </div>
  );
}

// Manipulable: mafs para matemáticas, matter-js para física.
export function Interactivo({ bloque, tema }) {
  const C = INTERACTIVOS[bloque.clave];
  if (!C) {
    if (import.meta.env.DEV) console.warn(`[bloques] interactivo sin registrar: "${bloque.clave}"`);
    return null;
  }
  return (
    <div style={tarjeta(tema)}>
      {bloque.instruccion && <div style={eyebrow(tema)}>{bloque.instruccion}</div>}
      <C tema={tema} {...(bloque.props || {})} />
      <Pie bloque={bloque} tema={tema} />
    </div>
  );
}

// Video de YouTube sin cookies y sin cargar hasta que alguien lo pide: un iframe
// de YouTube en la diapositiva descarga ~1 MB y planta una cookie aunque nadie
// le dé al play. Hasta entonces esto es una miniatura y un botón.
export function Video({ bloque, tema }) {
  const [activo, setActivo] = useState(false);
  const id = bloque.youtube;
  if (!id) return null;

  return (
    <div style={{ ...tarjeta(tema), padding: 0, overflow: "hidden" }}>
      <div style={{ position: "relative", aspectRatio: "16 / 9", background: tema.card2 }}>
        {activo ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={bloque.titulo || "Video"}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
          />
        ) : (
          <button
            type="button"
            onClick={() => setActivo(true)}
            style={{
              position: "absolute", inset: 0, width: "100%", height: "100%",
              border: "none", cursor: "pointer", background: "transparent",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14,
            }}
          >
            <span style={{
              width: 62, height: 62, borderRadius: "50%",
              border: `1.5px solid ${tema.acentoBorde}`, background: tema.acentoSuave,
              display: "grid", placeItems: "center",
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill={tema.acento} aria-hidden="true">
                <path d="M8 5.5v13l11-6.5z" />
              </svg>
            </span>
            <span style={{ fontFamily: tema.body, fontSize: 15, color: tema.texto }}>
              {bloque.titulo || "Reproducir video"}
            </span>
            <span style={{ fontFamily: tema.mono, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: tema.sub }}>
              se carga al tocarlo
            </span>
          </button>
        )}
      </div>
      <Pie bloque={bloque} tema={tema} />
    </div>
  );
}
