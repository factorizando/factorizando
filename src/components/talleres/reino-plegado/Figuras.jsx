// Los dibujos que acompañan a los acertijos de matemáticas.
//
// Ninguno es adorno: cada uno enseña el camino a la respuesta. La agrupación
// separa centenas, decenas y unidades porque así es como queremos que sume; la
// recta se dibuja con sus marcas porque contar brincos es el método; el croquis
// tiene esquinas y cuadras porque de eso se trata la trayectoria.
//
// Todos en SVG a mano, sin imágenes: el salón se queda sin internet y el juego
// tiene que verse igual.
import { C } from "./estilo.js";

const COL = { centena: "#4ea8ff", decena: "#4ec97f", unidad: "#ffd166" };

// ── Suma y resta agrupando ────────────────────────────────────────────────
function Columna({ n, color, etiqueta }) {
  return (
    <div style={{ textAlign: "center", minWidth: 62 }}>
      <div style={{ fontSize: 30, fontWeight: 800, color, fontVariantNumeric: "tabular-nums" }}>{n}</div>
      <div style={{ fontSize: 11, fontWeight: 800, color: C.apagado, letterSpacing: ".08em", textTransform: "uppercase" }}>
        {etiqueta}
      </div>
    </div>
  );
}

function Fila({ valor }) {
  const c = Math.floor(valor / 100), d = Math.floor((valor % 100) / 10), u = valor % 10;
  return (
    <div style={{ display: "flex", gap: 6, justifyContent: "center" }}>
      <Columna n={c * 100} color={COL.centena} etiqueta="centenas" />
      <Columna n={d * 10} color={COL.decena} etiqueta="decenas" />
      <Columna n={u} color={COL.unidad} etiqueta="unidades" />
    </div>
  );
}

export function Agrupacion({ a, b, signo }) {
  return (
    <div style={{ display: "grid", gap: 10, justifyItems: "center" }}>
      <Fila valor={a} />
      <div style={{ display: "flex", alignItems: "center", gap: 10, color: C.tenue, fontSize: 22, fontWeight: 800 }}>
        <span>{signo}</span>
        <div style={{ width: 210, height: 2, background: C.borde }} />
      </div>
      <Fila valor={b} />
    </div>
  );
}

// ── Grupos iguales ────────────────────────────────────────────────────────
export function Grupos({ grupos, porGrupo }) {
  const dibujables = Math.min(grupos, 8);
  const puntos = Math.min(porGrupo, 12);
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
      {Array.from({ length: dibujables }, (_, g) => (
        <div key={g} style={{
          border: `2px solid ${C.amarillo}`, borderRadius: 8, padding: 6,
          display: "grid", gridTemplateColumns: `repeat(${Math.min(4, puntos)}, 10px)`, gap: 3,
          alignContent: "center", minHeight: 44,
        }}>
          {Array.from({ length: puntos }, (_, i) => (
            <span key={i} style={{ width: 10, height: 10, borderRadius: 5, background: C.amarillo }} />
          ))}
        </div>
      ))}
      {grupos > dibujables && (
        <span style={{ color: C.tenue, fontSize: 22, fontWeight: 800, alignSelf: "center" }}>
          … {grupos} en total
        </span>
      )}
    </div>
  );
}

// ── Recta numérica ────────────────────────────────────────────────────────
export function Recta({ inicio, fin, paso, marca, decimales = 0 }) {
  const n = Math.round((fin - inicio) / paso);
  const W = 620, H = 96, x0 = 30, x1 = W - 30;
  const X = (v) => x0 + ((v - inicio) / (fin - inicio)) * (x1 - x0);
  const etiqueta = (v) => (decimales ? v.toFixed(decimales) : String(Math.round(v)));

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", maxWidth: W, display: "block" }}>
      <line x1={x0} y1="52" x2={x1} y2="52" stroke={C.bordeVivo} strokeWidth="3" />
      {Array.from({ length: n + 1 }, (_, i) => {
        const v = inicio + i * paso;
        const grande = i === 0 || i === n;
        return (
          <g key={i}>
            <line x1={X(v)} y1={grande ? 40 : 45} x2={X(v)} y2={grande ? 64 : 59}
              stroke={grande ? C.texto : C.apagado} strokeWidth={grande ? 3 : 2} />
            {grande && (
              <text x={X(v)} y="84" textAnchor="middle" fontSize="17" fontWeight="800"
                fill={C.tenue} fontFamily="inherit">{etiqueta(v)}</text>
            )}
          </g>
        );
      })}
      {/* la bandera */}
      <g transform={`translate(${X(marca)} 0)`}>
        <line x1="0" y1="14" x2="0" y2="52" stroke={C.naranja} strokeWidth="3" />
        <path d="M0 14 L26 22 L0 30 Z" fill={C.naranja} />
        <circle cx="0" cy="52" r="6" fill={C.naranja} />
      </g>
    </svg>
  );
}

// ── Croquis de calles ─────────────────────────────────────────────────────
export function Croquis({ ancho, alto, ruta, puntos }) {
  const paso = 74, m = 26;
  const W = ancho * paso + m * 2, H = alto * paso + m * 2;
  const X = (x) => m + x * paso;
  const Y = (y) => m + y * paso;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", maxWidth: 520, display: "block" }}>
      {/* manzanas */}
      {Array.from({ length: alto }, (_, f) =>
        Array.from({ length: ancho }, (_, c) => (
          <rect key={`${f}-${c}`} x={X(c) + 5} y={Y(f) + 5} width={paso - 10} height={paso - 10}
            rx="5" fill="#243040" />
        ))
      )}
      {/* calles */}
      {Array.from({ length: ancho + 1 }, (_, i) => (
        <line key={`v${i}`} x1={X(i)} y1={Y(0)} x2={X(i)} y2={Y(alto)} stroke={C.borde} strokeWidth="6" />
      ))}
      {Array.from({ length: alto + 1 }, (_, j) => (
        <line key={`h${j}`} x1={X(0)} y1={Y(j)} x2={X(ancho)} y2={Y(j)} stroke={C.borde} strokeWidth="6" />
      ))}

      {ruta && (
        <>
          <polyline
            points={ruta.map(([x, y]) => `${X(x)},${Y(y)}`).join(" ")}
            fill="none" stroke={C.naranja} strokeWidth="7" strokeLinejoin="round" strokeLinecap="round"
          />
          {ruta.map(([x, y], i) => (
            <circle key={i} cx={X(x)} cy={Y(y)} r={i === 0 || i === ruta.length - 1 ? 10 : 5}
              fill={i === 0 ? C.verde : i === ruta.length - 1 ? C.rojo : C.naranja} />
          ))}
        </>
      )}

      {puntos && (
        <>
          <circle cx={X(puntos.a[0])} cy={Y(puntos.a[1])} r="12" fill={C.verde} />
          <circle cx={X(puntos.b[0])} cy={Y(puntos.b[1])} r="12" fill={C.rojo} />
          <text x={X(puntos.a[0])} y={Y(puntos.a[1]) - 18} textAnchor="middle" fontSize="15"
            fontWeight="800" fill={C.verde} fontFamily="inherit">casa</text>
          <text x={X(puntos.b[0])} y={Y(puntos.b[1]) - 18} textAnchor="middle" fontSize="15"
            fontWeight="800" fill={C.rojo} fontFamily="inherit">escuela</text>
        </>
      )}
    </svg>
  );
}

// ── Rectángulo y triángulo ────────────────────────────────────────────────
export function Rectangulo({ ancho, alto, resaltar }) {
  const paso = Math.max(18, Math.min(38, Math.round(420 / Math.max(ancho, alto))));
  const m = 26;
  const W = ancho * paso + m * 2, H = alto * paso + m * 2;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", maxWidth: W, display: "block" }}>
      <rect x={m} y={m} width={ancho * paso} height={alto * paso}
        fill={resaltar === "relleno" ? "#3f8a55" : "#243040"} opacity={resaltar === "relleno" ? 0.85 : 1} />
      {Array.from({ length: ancho + 1 }, (_, i) => (
        <line key={`v${i}`} x1={m + i * paso} y1={m} x2={m + i * paso} y2={m + alto * paso}
          stroke={C.borde} strokeWidth="1.5" />
      ))}
      {Array.from({ length: alto + 1 }, (_, j) => (
        <line key={`h${j}`} x1={m} y1={m + j * paso} x2={m + ancho * paso} y2={m + j * paso}
          stroke={C.borde} strokeWidth="1.5" />
      ))}
      <rect x={m} y={m} width={ancho * paso} height={alto * paso} fill="none"
        stroke={resaltar === "borde" ? C.naranja : C.bordeVivo} strokeWidth={resaltar === "borde" ? 6 : 3} />
      <text x={m + (ancho * paso) / 2} y={m - 8} textAnchor="middle" fontSize="16" fontWeight="800"
        fill={C.tenue} fontFamily="inherit">{ancho} m</text>
      <text x={m - 10} y={m + (alto * paso) / 2} textAnchor="middle" dominantBaseline="middle"
        fontSize="16" fontWeight="800" fill={C.tenue} fontFamily="inherit"
        transform={`rotate(-90 ${m - 10} ${m + (alto * paso) / 2})`}>{alto} m</text>
    </svg>
  );
}

export function Triangulo({ base, altura }) {
  const paso = Math.max(18, Math.min(38, Math.round(420 / Math.max(base, altura))));
  const m = 26;
  const W = base * paso + m * 2, H = altura * paso + m * 2;
  const y0 = m + altura * paso;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", maxWidth: W, display: "block" }}>
      {/* el rectángulo que lo envuelve: el triángulo es su mitad */}
      <rect x={m} y={m} width={base * paso} height={altura * paso} fill="none"
        stroke={C.borde} strokeWidth="2" strokeDasharray="7 6" />
      <polygon points={`${m},${y0} ${m + base * paso},${y0} ${m},${m}`}
        fill="#3f8a55" opacity="0.85" stroke={C.verde} strokeWidth="3" />
      <text x={m + (base * paso) / 2} y={y0 + 18} textAnchor="middle" fontSize="16" fontWeight="800"
        fill={C.tenue} fontFamily="inherit">base {base} m</text>
      <text x={m - 10} y={m + (altura * paso) / 2} textAnchor="middle" dominantBaseline="middle"
        fontSize="16" fontWeight="800" fill={C.tenue} fontFamily="inherit"
        transform={`rotate(-90 ${m - 10} ${m + (altura * paso) / 2})`}>altura {altura} m</text>
    </svg>
  );
}

// El acertijo trae `figura: { tipo, props }` y aquí se resuelve cuál es.
export function FiguraDeAcertijo({ figura }) {
  if (!figura) return null;
  const { tipo, props } = figura;
  if (tipo === "agrupacion") return <Agrupacion {...props} />;
  if (tipo === "grupos") return <Grupos {...props} />;
  if (tipo === "recta") return <Recta {...props} />;
  if (tipo === "croquis") return <Croquis {...props} />;
  if (tipo === "rectangulo") return <Rectangulo {...props} />;
  if (tipo === "triangulo") return <Triangulo {...props} />;
  return null;
}
