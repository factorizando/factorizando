// Componentes de interfaz compartidos del taller de decodificación.
//
// Diseñado para tablet en horizontal proyectada a una TV: objetivos táctiles
// de 56px para arriba (44 los secundarios), tipografía grande, contraste alto
// y cero dependencia del teclado. La paleta y los hooks viven en estilo.js y
// hooks.js para que este archivo exporte solo componentes.
import { useEffect, useState } from "react";
import { decir, callar } from "./lib/voz.js";
import { C, FUENTE } from "./estilo.js";
import { useVozActiva } from "./hooks.js";

export function Boton({
  children, onClick, variante = "primario", tamano = "normal",
  disabled = false, estilo = {},
}) {
  const paletas = {
    primario: { fondo: C.ambar, color: "#1a1205", borde: "transparent" },
    neutro: { fondo: C.alto, color: C.texto, borde: C.bordeVivo },
    fantasma: { fondo: "transparent", color: C.tenue, borde: C.borde },
    peligro: { fondo: "transparent", color: C.rojo, borde: "#5a2c26" },
  };
  const p = paletas[variante] || paletas.primario;
  const t = tamano === "grande"
    ? { padding: "20px 34px", fontSize: 22, minHeight: 68 }
    : tamano === "chico"
      ? { padding: "10px 16px", fontSize: 14, minHeight: 44 }
      : { padding: "14px 24px", fontSize: 17, minHeight: 56 };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        background: p.fondo, color: p.color, border: `2px solid ${p.borde}`,
        borderRadius: 10, fontFamily: FUENTE, fontWeight: 700,
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.4 : 1, letterSpacing: ".01em",
        transition: "transform .08s ease, filter .12s ease",
        ...t, ...estilo,
      }}
      onPointerDown={(e) => { if (!disabled) e.currentTarget.style.transform = "translateY(2px)"; }}
      onPointerUp={(e) => { e.currentTarget.style.transform = "none"; }}
      onPointerLeave={(e) => { e.currentTarget.style.transform = "none"; }}
    >
      {children}
    </button>
  );
}

export function Panel({ children, estilo = {} }) {
  return (
    <div style={{
      background: C.panel, border: `1px solid ${C.borde}`, borderRadius: 14,
      padding: 24, ...estilo,
    }}>
      {children}
    </div>
  );
}

export function Rotulo({ children, color = C.apagado, estilo = {} }) {
  return (
    <div style={{
      fontSize: 12, fontWeight: 800, textTransform: "uppercase",
      letterSpacing: ".12em", color, ...estilo,
    }}>
      {children}
    </div>
  );
}

// Botón de audio. Si el dispositivo no trae voz en español, no se dibuja:
// mejor que no exista a que exista y no haga nada.
export function BotonAudio({ texto, velocidad = 0.9, etiqueta = "Escuchar", tamano = "normal" }) {
  const { voz, hayVoz } = useVozActiva();
  const [sonando, setSonando] = useState(false);
  useEffect(() => () => callar(), []);
  if (!hayVoz) return null;

  return (
    <Boton
      variante="neutro"
      tamano={tamano}
      onClick={() => {
        setSonando(true);
        decir(texto, { voz, velocidad, onFin: () => setSonando(false) });
      }}
      estilo={sonando ? { borderColor: C.ambar, color: C.ambar } : undefined}
    >
      <span style={{ marginRight: 8 }}>🔊</span>{etiqueta}
    </Boton>
  );
}

// Progreso de la ronda como una fila de barras del tablero, no como un
// porcentaje: interesa cuánto falta, no qué calificación lleva.
function Contador({ ronda, total }) {
  return (
    <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
      {Array.from({ length: total }, (_, i) => (
        <span key={i} style={{
          width: 14, height: 6, borderRadius: 2,
          background: i < ronda ? C.ambar : C.borde,
        }} />
      ))}
    </div>
  );
}

export function Cabecera({ titulo, instruccion, ronda, total, derecha }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{
        display: "flex", alignItems: "flex-end", justifyContent: "space-between",
        gap: 16, flexWrap: "wrap",
      }}>
        <div>
          <Rotulo color={C.ambar}>{titulo}</Rotulo>
          <p style={{
            margin: "8px 0 0", fontSize: 19, color: C.texto, lineHeight: 1.35,
            fontWeight: 500, maxWidth: "60ch",
          }}>
            {instruccion}
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {derecha}
          {total > 0 && <Contador ronda={ronda} total={total} />}
        </div>
      </div>
    </div>
  );
}

// Ayuda escalonada: el nivel lo administra `useAyuda` en hooks.js.
export function Ayuda({ nivel, pista, solucion }) {
  if (nivel === 0) return null;
  const texto =
    nivel === 1 ? "Míralo otra vez, sin prisa."
      : nivel === 2 ? pista
        : solucion;
  const color = nivel === 3 ? C.ambar : C.tenue;
  return (
    <div style={{
      marginTop: 16, padding: "12px 16px", borderRadius: 10,
      background: nivel === 3 ? "rgba(255,176,32,.10)" : C.alto,
      border: `1px solid ${nivel === 3 ? "rgba(255,176,32,.35)" : C.borde}`,
      color, fontSize: 17, lineHeight: 1.4, fontWeight: 600,
    }}>
      {texto}
    </div>
  );
}

export function Cierre({ aciertos, total, mensaje, onRepetir, onSalir, etiquetaSalir = "Continuar" }) {
  return (
    <Panel estilo={{ textAlign: "center", maxWidth: 620, margin: "0 auto" }}>
      <Rotulo>Te salieron a la primera</Rotulo>
      <div style={{
        fontSize: 56, fontWeight: 800, color: C.ambar, margin: "14px 0 4px",
        fontVariantNumeric: "tabular-nums",
      }}>
        {aciertos}<span style={{ color: C.apagado, fontSize: 30 }}> / {total}</span>
      </div>
      {mensaje && (
        <p style={{ color: C.tenue, fontSize: 17, lineHeight: 1.5, margin: "10px 0 22px" }}>
          {mensaje}
        </p>
      )}
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <Boton variante="neutro" onClick={onRepetir}>Otra ronda</Boton>
        <Boton onClick={onSalir}>{etiquetaSalir}</Boton>
      </div>
    </Panel>
  );
}
