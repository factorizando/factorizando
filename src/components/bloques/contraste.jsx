// Bloques de contraste: dos formas, una correcta y otra no.
//
// Hablan de la lengua o del procedimiento, no de quien responde — esa distinción
// es la que permite ser tajante aquí y callado en la retroalimentación
// (docs/DISENO.md §2.4). Por eso el error se marca, pero nunca en rojo: el
// tachado cae sobre la forma exacta y el texto conserva contraste legible.
import { eyebrow, tarjeta } from "./ui.js";

function AsiEs({ tema }) {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 3 }} aria-hidden="true">
      <path d="M3.5 8.4l3 3 6-7" stroke={tema.acento} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AsiNo({ tema }) {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 3 }} aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke={tema.sub} strokeWidth="1.5" />
      <line x1="3.8" y1="12.2" x2="12.2" y2="3.8" stroke={tema.sub} strokeWidth="1.5" />
    </svg>
  );
}

// `tachado` marca el fragmento exacto que está mal, en vez de teñir la frase
// entera: convierte un veredicto en un señalamiento.
function Linea({ tema, icono, texto, tachado, atenuado, punteado }) {
  return (
    <div style={{
      display: "flex", gap: 11, alignItems: "flex-start",
      fontSize: 15.5, lineHeight: 1.55,
      ...(punteado ? { padding: "9px 12px", border: `1px dashed ${tema.borderFuerte}`, borderRadius: 8, marginTop: 9 } : {}),
    }}>
      {icono}
      <span style={{ color: atenuado ? tema.muted : tema.texto }}>
        {tachado ? (
          <>
            {texto}{" "}
            <span style={{ fontFamily: tema.mono, fontSize: "0.92em", color: tema.muted, textDecoration: "line-through", textDecorationThickness: 1 }}>
              {tachado}
            </span>
          </>
        ) : texto}
      </span>
    </div>
  );
}

export function Par({ bloque, tema }) {
  return (
    <div style={tarjeta(tema)}>
      {bloque.etiqueta && <div style={eyebrow(tema)}>{bloque.etiqueta}</div>}
      <Linea tema={tema} icono={<AsiEs tema={tema} />} texto={bloque.asi_es} />
      <Linea tema={tema} icono={<AsiNo tema={tema} />} texto={bloque.asi_no} tachado={bloque.tachado} atenuado punteado />
    </div>
  );
}

// El distractor que el examen sí usa. Lleva letra para poder citarlo en voz alta
// mientras se proyecta: «cuidado con la trampa A».
export function Trampa({ bloque, tema }) {
  return (
    <div style={{ ...tarjeta(tema), display: "flex", gap: 15 }}>
      <div style={{
        width: 26, height: 26, borderRadius: 7,
        border: `1px solid ${tema.acentoBorde}`, background: tema.acentoSuave,
        color: tema.acento, fontFamily: tema.mono, fontSize: 12, fontWeight: 600,
        display: "grid", placeItems: "center", flexShrink: 0,
      }}>{bloque.letra}</div>
      <div style={{ flex: 1 }}>
        {bloque.titulo && <div style={{ ...eyebrow(tema), marginBottom: 9 }}>{bloque.titulo}</div>}
        <Linea tema={tema} icono={<AsiEs tema={tema} />} texto={bloque.asi_es} />
        <Linea tema={tema} icono={<AsiNo tema={tema} />} texto={bloque.asi_no} tachado={bloque.tachado} atenuado punteado />
      </div>
    </div>
  );
}
