// Todos los dibujos del taller, en SVG escrito a mano.
//
// Nada de imágenes ni de fuentes externas: el salón se queda sin internet a
// media clase y el taller tiene que verse exactamente igual. Un SVG además
// escala sin romperse, que es lo que hace falta cuando la misma pantalla se
// ve en la tablet y proyectada en la TV.
//
// Regla de todos estos dibujos: la cantidad tiene que poder **contarse**. Por
// eso las rebanadas y las galletas se dibujan una por una mientras son pocas,
// y solo cuando el número crece se sustituyen por la etiqueta —que es
// exactamente el momento en que el niño ya no debe contar sino calcular.
import { C } from "./estilo.js";

// ── Fracción escrita, con su raya ─────────────────────────────────────────
export function Fraccion({ num, den, tam = 34, color = C.texto }) {
  return (
    <span style={{
      display: "inline-flex", flexDirection: "column", alignItems: "center",
      lineHeight: 1, color, fontWeight: 800, fontVariantNumeric: "tabular-nums",
      verticalAlign: "middle",
    }}>
      <span style={{ fontSize: tam }}>{num}</span>
      <span style={{
        display: "block", width: `${Math.max(22, tam * 0.9)}px`, height: 3,
        background: color, borderRadius: 2, margin: `${tam * 0.09}px 0`,
      }} />
      <span style={{ fontSize: tam }}>{den}</span>
    </span>
  );
}

// ── Pizzería ──────────────────────────────────────────────────────────────
export function Rebanada({ tam = 46, apagada = false }) {
  const queso = apagada ? "#5b4a33" : "#ffcb6b";
  const orilla = apagada ? "#6e5a3c" : "#e08a2e";
  const salami = apagada ? "#7a4b42" : "#e0503c";
  return (
    <svg width={tam} height={tam} viewBox="0 0 100 100" aria-hidden="true" style={{ display: "block" }}>
      <path d="M50 96 L10 30 A46 46 0 0 1 90 30 Z" fill={queso} stroke={orilla}
        strokeWidth="4" strokeLinejoin="round" />
      <path d="M10 30 A46 46 0 0 1 90 30" fill="none" stroke={orilla} strokeWidth="13" strokeLinecap="round" />
      <circle cx="37" cy="47" r="7" fill={salami} />
      <circle cx="63" cy="51" r="6" fill={salami} />
      <circle cx="50" cy="73" r="5.5" fill={salami} />
    </svg>
  );
}

// Montón de rebanadas para contar. Se acomodan en filas de a cinco: contar
// de cinco en cinco es justo el atajo que interesa que descubra.
export function MonteRebanadas({ n, tam = 46, apagadas = false }) {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: `repeat(5, ${tam}px)`,
      gap: 6, justifyContent: "start",
    }}>
      {Array.from({ length: n }, (_, i) => <Rebanada key={i} tam={tam} apagada={apagadas} />)}
    </div>
  );
}

// Una caja de pizza vista de frente. Si caben pocas rebanadas se dibujan
// todas; si son muchas se rotula el número, porque contar doce cuadritos en
// pantalla ya no enseña nada que no enseñe el número.
export function CajaPizza({ capacidad, llenas = capacidad, ancho = 132, color = C.naranja }) {
  const dibujar = capacidad <= 8;
  const cols = Math.min(4, Math.max(2, Math.ceil(Math.sqrt(capacidad))));
  const filas = Math.ceil(capacidad / cols);
  const alto = Math.round(ancho * 0.78);

  return (
    <svg width={ancho} height={alto} viewBox="0 0 100 78" aria-hidden="true" style={{ display: "block" }}>
      {/* tapa abierta */}
      <path d="M6 20 L18 6 L82 6 L94 20 Z" fill="#7a4a22" stroke="#a5652c" strokeWidth="2" strokeLinejoin="round" />
      {/* cuerpo */}
      <rect x="6" y="20" width="88" height="52" rx="5" fill="#8d5527" stroke="#b4712f" strokeWidth="2.5" />
      <rect x="12" y="26" width="76" height="40" rx="3" fill="#3a2411" />
      {dibujar
        ? Array.from({ length: capacidad }, (_, i) => {
          const c = i % cols, f = Math.floor(i / cols);
          const w = 76 / cols, h = 40 / filas;
          return (
            <circle
              key={i}
              cx={12 + w * (c + 0.5)}
              cy={26 + h * (f + 0.5)}
              r={Math.min(w, h) * 0.32}
              fill={i < llenas ? color : "#5a4527"}
            />
          );
        })
        : (
          <text x="50" y="52" textAnchor="middle" fontSize="26" fontWeight="800"
            fill={color} fontFamily="inherit">{llenas}</text>
        )}
    </svg>
  );
}

// ── Fábrica de cajas ──────────────────────────────────────────────────────
export function Galleta({ tam = 26, color = C.amarillo }) {
  return (
    <svg width={tam} height={tam} viewBox="0 0 40 40" aria-hidden="true" style={{ display: "block" }}>
      <circle cx="20" cy="20" r="17" fill={color} stroke="#c98c2b" strokeWidth="2.5" />
      <circle cx="14" cy="15" r="3" fill="#6b3f16" />
      <circle cx="26" cy="19" r="2.6" fill="#6b3f16" />
      <circle cx="18" cy="27" r="2.6" fill="#6b3f16" />
    </svg>
  );
}

// Una caja de la banda. Con contenido visible se puede contar; con la
// etiqueta hay que multiplicar. Ese es el salto de 7-8 a 9-10 y por eso es
// una sola prop.
export function CajaGalletas({ contenido, mostrarContenido, ancho = 118, color = C.amarillo }) {
  const cols = Math.min(4, Math.max(1, Math.ceil(Math.sqrt(contenido))));
  const filas = Math.ceil(contenido / cols);
  return (
    <div style={{
      width: ancho, background: "#3a2f1a", border: `3px solid ${color}`,
      borderRadius: 10, padding: 10, minHeight: 96,
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      {mostrarContenido ? (
        <div style={{
          display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: 4, justifyItems: "center",
        }}>
          {Array.from({ length: contenido }, (_, i) => (
            <Galleta key={i} tam={Math.max(16, Math.min(28, 100 / Math.max(cols, filas)))} color={color} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 34, fontWeight: 800, color, lineHeight: 1 }}>{contenido}</div>
          <div style={{ fontSize: 12, color: C.tenue, marginTop: 4, fontWeight: 700 }}>galletas</div>
        </div>
      )}
    </div>
  );
}

// La banda transportadora: solo es el suelo sobre el que van las cajas, pero
// es lo que hace que se lean como "grupos que van pasando" y no como una
// tabla escrita en horizontal.
export function Banda({ children }) {
  return (
    <div>
      <div style={{
        display: "flex", gap: 12, alignItems: "flex-end", flexWrap: "wrap",
        padding: "4px 0 10px",
      }}>
        {children}
      </div>
      <div style={{
        height: 14, borderRadius: 7, background: C.alto,
        border: `2px solid ${C.bordeVivo}`,
        backgroundImage: `repeating-linear-gradient(90deg, ${C.bordeVivo} 0 3px, transparent 3px 16px)`,
      }} />
    </div>
  );
}

// ── El Huerto ─────────────────────────────────────────────────────────────
// La parcela cuadriculada. `seleccion` es el rectángulo que el niño va
// formando con el dedo; siempre anclado en la esquina de arriba a la
// izquierda, para que lo que crezca sean los lados y no la posición.
export function Parcela({ max, filas = 0, columnas = 0, objetivo = null, lado = 34, onCelda }) {
  const w = max * lado, h = max * lado;
  return (
    <svg
      width="100%" viewBox={`0 0 ${w} ${h}`}
      style={{ maxWidth: 460, touchAction: "none", display: "block" }}
      // Se captura el puntero para que el dedo pueda salirse de la parcela sin
      // que el arrastre se corte a media siembra.
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture?.(e.pointerId);
        onCelda?.(celdaDe(e, max));
      }}
      onPointerMove={(e) => {
        if (e.buttons > 0 || e.pointerType === "touch") onCelda?.(celdaDe(e, max), true);
      }}
      onPointerUp={(e) => e.currentTarget.releasePointerCapture?.(e.pointerId)}
    >
      <rect x="0" y="0" width={w} height={h} fill="#1d2a20" rx="6" />
      {Array.from({ length: filas }, (_, f) =>
        Array.from({ length: columnas }, (_, c) => (
          <rect key={`${f}-${c}`} x={c * lado} y={f * lado} width={lado} height={lado}
            fill={C.morado} opacity="0.75" />
        ))
      )}
      {objetivo && (
        <rect x="0" y="0" width={objetivo.columnas * lado} height={objetivo.filas * lado}
          fill="none" stroke={C.verde} strokeWidth="3" strokeDasharray="7 5" />
      )}
      {Array.from({ length: max + 1 }, (_, i) => (
        <g key={i}>
          <line x1={i * lado} y1="0" x2={i * lado} y2={h} stroke={C.borde} strokeWidth="1.5" />
          <line x1="0" y1={i * lado} x2={w} y2={i * lado} stroke={C.borde} strokeWidth="1.5" />
        </g>
      ))}
    </svg>
  );
}

// De coordenadas de puntero a celda (fila, columna) contando desde 1. Se
// calcula contra el rect real del SVG para que funcione igual con el dedo en
// la tablet que con el mouse en la laptop del maestro.
function celdaDe(e, max) {
  const r = e.currentTarget.getBoundingClientRect();
  const cx = (e.clientX - r.left) / r.width;
  const cy = (e.clientY - r.top) / r.height;
  return {
    filas: Math.min(max, Math.max(1, Math.ceil(cy * max))),
    columnas: Math.min(max, Math.max(1, Math.ceil(cx * max))),
  };
}

// ── Vasos medidores ───────────────────────────────────────────────────────
// El vaso: un trapecio con sus divisiones marcadas. `llenas` son las
// divisiones con líquido; si va en null el vaso se muestra vacío, que es
// justo lo que necesita el modo comparar —si el líquido ya estuviera puesto,
// la respuesta se vería sin pensar y el error clásico (1/3 contra 1/2) nunca
// se provocaría—.
export function Vaso({
  den, llenas = null, alto = 210, color = C.azul, resaltado = false, marcaObjetivo = null,
}) {
  const AN = 120, AL = 200;           // caja de dibujo
  const yTop = 16, yBase = 186;
  const dx = 10;                       // conicidad
  const izq = (y) => 12 + ((y - yTop) / (yBase - yTop)) * dx;
  const der = (y) => AN - 12 - ((y - yTop) / (yBase - yTop)) * dx;
  const yDe = (t) => yBase - t * (yBase - yTop);

  const nivel = llenas === null ? 0 : llenas / den;
  const yN = yDe(nivel);

  return (
    <svg width={alto * (AN / AL)} height={alto} viewBox={`0 0 ${AN} ${AL}`} aria-hidden="true"
      style={{ display: "block", overflow: "visible" }}>
      {/* líquido */}
      {llenas !== null && llenas > 0 && (
        <>
          <path
            d={`M${izq(yN)} ${yN} L${der(yN)} ${yN} L${der(yBase)} ${yBase} L${izq(yBase)} ${yBase} Z`}
            fill={color} opacity="0.85"
          />
          <ellipse cx={AN / 2} cy={yN} rx={(der(yN) - izq(yN)) / 2} ry="5" fill={color} />
        </>
      )}

      {/* divisiones */}
      {Array.from({ length: den - 1 }, (_, i) => {
        const y = yDe((i + 1) / den);
        return (
          <line key={i} x1={izq(y) + 3} y1={y} x2={der(y) - 3} y2={y}
            stroke={C.tenue} strokeWidth="2" opacity="0.75" />
        );
      })}

      {/* marca del objetivo: la raya a la que hay que llegar */}
      {marcaObjetivo !== null && (
        <line
          x1={izq(yDe(marcaObjetivo)) - 8} y1={yDe(marcaObjetivo)}
          x2={der(yDe(marcaObjetivo)) + 8} y2={yDe(marcaObjetivo)}
          stroke={C.verde} strokeWidth="3.5" strokeDasharray="8 5"
        />
      )}

      {/* vidrio */}
      <path
        d={`M12 ${yTop} L${AN - 12} ${yTop} L${der(yBase)} ${yBase} L${izq(yBase)} ${yBase} Z`}
        fill="none" stroke={resaltado ? color : C.bordeVivo} strokeWidth={resaltado ? 5 : 3.5}
        strokeLinejoin="round"
      />
      <rect x={izq(yBase) - 6} y={yBase} width={der(yBase) - izq(yBase) + 12} height="8"
        rx="4" fill={C.bordeVivo} />
    </svg>
  );
}
