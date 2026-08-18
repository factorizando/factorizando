// Interfaz compartida por los tres juegos.
//
// Todos comparten la misma mecánica de fondo —se plantea la situación, el
// niño manipula o contesta, retroalimentación inmediata, siguiente— y por eso
// comparten también las mismas piezas: la misma cabecera, el mismo teclado,
// el mismo aviso de acierto y la misma pantalla de resultados. Un niño de 7
// años no debería aprender tres interfaces para practicar tres operaciones.
//
// Reglas que este archivo mantiene: nada por debajo de 44 px de alto, ningún
// texto por debajo de 16 px, y ningún gesto que dependa del teclado físico.
import { C, FUENTE, TAM } from "./estilo.js";

export function Boton({
  children, onClick, variante = "primario", tamano = "normal",
  color = C.naranja, disabled = false, estilo = {},
}) {
  const paletas = {
    primario: { fondo: color, color: "#10161d", borde: "transparent" },
    neutro: { fondo: C.alto, color: C.texto, borde: C.bordeVivo },
    fantasma: { fondo: "transparent", color: C.tenue, borde: C.borde },
  };
  const p = paletas[variante] || paletas.primario;
  const t = tamano === "grande"
    ? { padding: "22px 38px", fontSize: 24, minHeight: 74 }
    : tamano === "chico"
      ? { padding: "10px 16px", fontSize: 15, minHeight: 44 }
      : { padding: "16px 26px", fontSize: 19, minHeight: 60 };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        background: p.fondo, color: p.color, border: `2px solid ${p.borde}`,
        borderRadius: 12, fontFamily: FUENTE, fontWeight: 800,
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.35 : 1, touchAction: "manipulation",
        transition: "transform .08s ease",
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
      background: C.panel, border: `1px solid ${C.borde}`, borderRadius: 16,
      padding: 24, ...estilo,
    }}>
      {children}
    </div>
  );
}

export function Rotulo({ children, color = C.apagado, estilo = {} }) {
  return (
    <div style={{
      fontSize: 13, fontWeight: 800, textTransform: "uppercase",
      letterSpacing: ".12em", color, ...estilo,
    }}>
      {children}
    </div>
  );
}

// Tarjeta de menú: elegir rango, juego o modo. El borde se enciende con el
// color del juego al pasar por encima, que es la única pista de "esto se
// toca" que necesita un niño de siete años.
export function TarjetaMenu({ children, onClick, acento, minHeight = 150, estilo = {} }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        textAlign: "left", background: C.panel, border: `2px solid ${C.borde}`,
        borderRadius: 16, padding: "22px 22px", cursor: "pointer",
        fontFamily: "inherit", color: C.texto, minHeight,
        touchAction: "manipulation", ...estilo,
      }}
      onPointerEnter={(e) => { e.currentTarget.style.borderColor = acento; }}
      onPointerLeave={(e) => { e.currentTarget.style.borderColor = C.borde; }}
    >
      {children}
    </button>
  );
}

// Progreso como fila de barras y no como porcentaje: al niño le interesa
// cuánto falta, no qué calificación lleva. Las acertadas se pintan del color
// del juego; las falladas quedan tenues, nunca rojas.
export function Progreso({ resultados, total, color }) {
  return (
    <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
      {Array.from({ length: total }, (_, i) => (
        <span key={i} style={{
          width: 18, height: 8, borderRadius: 3,
          background: resultados[i] === true ? color
            : resultados[i] === false ? C.bordeVivo
              : C.borde,
        }} />
      ))}
    </div>
  );
}

export function Cabecera({ juego, icono, color, enunciado, resultados, total, derecha }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 16, flexWrap: "wrap", marginBottom: 14,
      }}>
        <Rotulo color={color}>{icono} {juego}</Rotulo>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {derecha}
          <Progreso resultados={resultados} total={total} color={color} />
        </div>
      </div>
      {enunciado && (
        <p style={{
          margin: 0, fontSize: TAM.enunciado, lineHeight: 1.3, fontWeight: 700,
          color: C.texto, maxWidth: "26ch",
        }}>
          {enunciado}
        </p>
      )}
    </div>
  );
}

// Teclado numérico. Se usa en los tres juegos que piden un número, para que
// contestar sea siempre el mismo gesto. Teclas de 72 px: se pican de pie,
// frente a la TV, con el dedo índice.
export function TecladoNumerico({ valor, onCambiar, onEnviar, color, disabled, maxDigitos = 3 }) {
  const teclas = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "borrar", "0", "listo"];

  function pulsar(t) {
    if (disabled) return;
    if (t === "borrar") return onCambiar(valor.slice(0, -1));
    if (t === "listo") return valor !== "" && onEnviar(Number(valor));
    if (valor.length >= maxDigitos) return;
    onCambiar((valor === "0" ? "" : valor) + t);
  }

  return (
    <div>
      <div style={{
        background: C.alto, border: `2px solid ${C.borde}`, borderRadius: 12,
        padding: "10px 18px", marginBottom: 12, minHeight: 66,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 42, fontWeight: 800, color: valor ? C.texto : C.apagado,
        fontVariantNumeric: "tabular-nums", letterSpacing: ".04em",
      }}>
        {valor || "—"}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, maxWidth: 320 }}>
        {teclas.map((t) => (
          <button
            key={t}
            type="button"
            disabled={disabled || (t === "listo" && valor === "")}
            onClick={() => pulsar(t)}
            style={{
              height: 72, borderRadius: 12, fontFamily: FUENTE, fontWeight: 800,
              fontSize: t === "borrar" || t === "listo" ? 16 : 28,
              cursor: disabled ? "default" : "pointer", touchAction: "manipulation",
              background: t === "listo" ? color : C.panel,
              color: t === "listo" ? "#10161d" : t === "borrar" ? C.tenue : C.texto,
              border: `2px solid ${t === "listo" ? "transparent" : C.borde}`,
              opacity: disabled || (t === "listo" && valor === "") ? 0.35 : 1,
            }}
          >
            {t === "borrar" ? "◀ Borrar" : t === "listo" ? "LISTO" : t}
          </button>
        ))}
      </div>
    </div>
  );
}

// Lo que contestó, ya sin teclado. Sustituir el teclado por esto al resolver
// no es cosmético: con las teclas puestas, la explicación se iba abajo del
// borde de la pantalla justo cuando había que leerla.
export function RespuestaDada({ valor, acerto, color }) {
  return (
    <div style={{
      background: C.alto, border: `2px solid ${acerto ? color : C.bordeVivo}`,
      borderRadius: 12, padding: "14px 18px", minHeight: 66,
      display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
    }}>
      <span style={{ fontSize: 15, fontWeight: 700, color: C.apagado }}>Contestaste</span>
      <span style={{
        fontSize: 40, fontWeight: 800, color: acerto ? color : C.tenue,
        fontVariantNumeric: "tabular-nums", lineHeight: 1,
      }}>
        {valor}
      </span>
    </div>
  );
}

// Retroalimentación. Al fallar **no hay castigo**: se dice en el lenguaje del
// juego qué pasaba en realidad, con el mismo dibujo al lado, y se sigue. Sin
// rojo de alarma, sin "incorrecto", sin restar nada.
export function Retro({ acerto, titulo, children, color = C.verde }) {
  const tinte = acerto ? color : C.amarillo;
  return (
    <div style={{
      marginTop: 18, padding: "16px 20px", borderRadius: 14,
      background: acerto ? "rgba(78,201,127,.10)" : "rgba(255,209,102,.08)",
      border: `2px solid ${acerto ? "rgba(78,201,127,.45)" : "rgba(255,209,102,.35)"}`,
    }}>
      <div style={{ fontSize: 21, fontWeight: 800, color: tinte, marginBottom: children ? 6 : 0 }}>
        {acerto ? "✓ " : "→ "}{titulo}
      </div>
      {children && (
        <div style={{ fontSize: TAM.cuerpo, color: C.texto, lineHeight: 1.45 }}>{children}</div>
      )}
    </div>
  );
}

// La operación escrita. Aparece **al resolver**, nunca en el enunciado: la
// cantidad se ve y se manipula primero, y el símbolo llega como conclusión de
// lo que ya pasó en la pantalla.
export function Operacion({ children, color }) {
  return (
    <div style={{
      marginTop: 14, padding: "12px 18px", borderRadius: 12,
      background: C.alto, border: `1px dashed ${C.bordeVivo}`,
      fontSize: "clamp(22px, 2.6vw, 30px)", fontWeight: 800, color,
      fontVariantNumeric: "tabular-nums", textAlign: "center",
    }}>
      {children}
    </div>
  );
}

export function Cierre({ aciertos, total, mensaje, color, onOtra, onSalir }) {
  return (
    <Panel estilo={{ textAlign: "center", maxWidth: 640, margin: "24px auto" }}>
      <Rotulo color={color}>Terminaste la partida</Rotulo>
      <div style={{
        fontSize: TAM.dato, fontWeight: 800, color, margin: "12px 0 2px",
        fontVariantNumeric: "tabular-nums",
      }}>
        {aciertos}<span style={{ color: C.apagado, fontSize: "0.55em" }}> de {total}</span>
      </div>
      {mensaje && (
        <p style={{ color: C.tenue, fontSize: TAM.cuerpo, lineHeight: 1.5, margin: "12px auto 24px", maxWidth: "42ch" }}>
          {mensaje}
        </p>
      )}
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <Boton variante="neutro" onClick={onSalir}>Elegir otro juego</Boton>
        <Boton color={color} onClick={onOtra}>Otra partida</Boton>
      </div>
    </Panel>
  );
}
