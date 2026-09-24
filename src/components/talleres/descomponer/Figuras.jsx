// Figuras de los tres talleres de Descomponer números: el modelo visual que va
// antes del símbolo. Todas se dibujan con divs y SVG, sin imágenes ni fuentes
// externas.
//
// Regla que respetan las tres: **la escena nunca muestra el dato que se
// pregunta**. En la división, si se esconden las unidades por grupo, los
// grupos salen vacíos con "?"; si se esconde el residuo, no se dibuja el
// sobrante. Es la misma precaución que en los vasos medidores, donde los vasos
// se sirven hasta después de contestar.
import { C } from "./estilo.js";

const DOT = 14;

// ── Suma ────────────────────────────────────────────────────────────────────
export function FiguraSuma({ figura, color, revelado = 0 }) {
  if (figura.tipo === "completar") return <Completar figura={figura} color={color} />;
  return <Romper figura={figura} color={color} revelado={revelado} />;
}

function Completar({ figura, color }) {
  const { s, c, d, dibujar } = figura;

  if (dibujar) {
    const marcos = Math.ceil(d / 10);
    return (
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        {Array.from({ length: marcos }, (_, m) => {
          const base = m * 10;
          return (
            <div key={m} style={{
              display: "grid", gridTemplateColumns: `repeat(5, ${DOT}px)`, gap: 6,
              padding: 10, border: `2px solid ${C.borde}`, borderRadius: 12,
            }}>
              {Array.from({ length: 10 }, (_, k) => {
                const idx = base + k;
                if (idx >= d) return <span key={k} />;
                const lleno = idx < s;
                return (
                  <span key={k} style={{
                    width: DOT, height: DOT, borderRadius: "50%",
                    background: lleno ? color : "transparent",
                    border: `2px solid ${lleno ? color : C.bordeVivo}`,
                  }} />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }

  // Barra: lo que llevas y lo que falta, proporcional a la meta.
  return (
    <div>
      <div style={{
        display: "flex", height: 54, borderRadius: 10, overflow: "hidden",
        border: `2px solid ${C.borde}`,
      }}>
        <div style={{
          flex: s, background: color, color: "#10161d", display: "grid",
          placeItems: "center", fontWeight: 800, fontSize: 22,
        }}>
          {s}
        </div>
        <div style={{
          flex: c, borderLeft: `2px dashed ${C.bordeVivo}`, display: "grid",
          placeItems: "center", fontWeight: 800, fontSize: 22, color: C.apagado,
        }}>
          ?
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, color: C.tenue, fontSize: 15 }}>
        <span>llevas {s}</span>
        <span>meta {d}</span>
      </div>
    </div>
  );
}

function Romper({ figura, color, revelado }) {
  const { a, m, n, decena, total } = figura;
  const min = Math.max(0, a - Math.ceil((total - a) / 4));
  const max = total + Math.ceil((total - a) / 4);
  const x = (v) => 60 + ((v - min) / (max - min)) * 480;
  const y = 100;

  const tick = (v, etiqueta, activo, colorTick) => (
    <g>
      <line x1={x(v)} y1={y - 8} x2={x(v)} y2={y + 8} stroke={colorTick} strokeWidth={activo ? 4 : 3} />
      <text x={x(v)} y={y + 34} textAnchor="middle" fontSize="20" fontWeight="800"
        fill={activo ? C.texto : C.apagado}>{etiqueta}</text>
    </g>
  );

  // Arco por encima de la recta, del valor `de` al `a`.
  const arco = (de, hasta, etiqueta, activo, colorArco) => {
    const x1 = x(de), x2 = x(hasta);
    const medio = (x1 + x2) / 2;
    return (
      <g>
        <path d={`M ${x1} ${y - 10} Q ${medio} ${y - 62} ${x2} ${y - 10}`}
          fill="none" stroke={colorArco} strokeWidth={3} strokeDasharray={activo ? "0" : "6 6"} />
        <text x={medio} y={y - 68} textAnchor="middle" fontSize="20" fontWeight="800"
          fill={activo ? colorArco : C.apagado}>{etiqueta}</text>
      </g>
    );
  };

  return (
    <svg viewBox="0 0 600 150" style={{ width: "100%", height: "auto" }} role="img"
      aria-label={`Recta numérica de ${a} a ${total}`}>
      <line x1={30} y1={y} x2={570} y2={y} stroke={C.borde} strokeWidth={3} />
      {tick(a, a, true, color)}
      {revelado >= 1 && tick(decena, decena, true, color)}
      {revelado >= 2 && tick(total, total, true, color)}
      {revelado >= 1
        ? arco(a, decena, m, true, color)
        : arco(a, decena, "?", false, C.bordeVivo)}
      {revelado >= 2 && arco(decena, total, n, true, color)}
    </svg>
  );
}

// ── Producto ────────────────────────────────────────────────────────────────
export function FiguraProducto({ figura, color, revelado = 0 }) {
  const { a, b, m, n, pm, pn, dibujar } = figura;

  if (dibujar) {
    return (
      <div style={{ overflowX: "auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns: `repeat(${b}, ${DOT}px)`, gap: 5,
          width: "max-content", padding: 12, border: `2px solid ${C.borde}`, borderRadius: 12,
        }}>
          {Array.from({ length: a * b }, (_, i) => {
            const col = i % b;
            const izquierda = col < m;
            return (
              <span key={i} style={{
                width: DOT, height: DOT, borderRadius: 4,
                background: izquierda ? color : "transparent",
                border: `2px solid ${izquierda ? color : C.bordeVivo}`,
              }} />
            );
          })}
        </div>
        <div style={{ marginTop: 10, color: C.tenue, fontSize: 16 }}>
          {a} filas de {b}. Las primeras {m} columnas van de un color y las {n} restantes de otro.
        </div>
      </div>
    );
  }

  // Esquema del área: el rectángulo se parte en m y n columnas.
  return (
    <div>
      <div style={{ display: "flex", alignItems: "stretch", gap: 8 }}>
        <div style={{ display: "grid", placeItems: "center", color: C.tenue, fontWeight: 800, fontSize: 22 }}>
          {a}
        </div>
        <div style={{
          flex: 1, display: "flex", height: 160, borderRadius: 12, overflow: "hidden",
          border: `2px solid ${C.borde}`,
        }}>
          <div style={{
            flex: m, background: C.alto, display: "grid", placeItems: "center",
            borderRight: `2px dashed ${C.bordeVivo}`, gap: 4, textAlign: "center",
          }}>
            <span style={{ color: C.tenue, fontSize: 18, fontWeight: 700 }}>{a} × {m}</span>
            <span style={{ color: color, fontSize: 30, fontWeight: 800 }}>
              {revelado >= 2 ? pm : "?"}
            </span>
          </div>
          <div style={{ flex: n, display: "grid", placeItems: "center", gap: 4, textAlign: "center" }}>
            <span style={{ color: C.tenue, fontSize: 18, fontWeight: 700 }}>{a} × {n}</span>
            <span style={{ color: color, fontSize: 30, fontWeight: 800 }}>
              {revelado >= 3 ? pn : "?"}
            </span>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 10, color: C.tenue, fontSize: 16 }}>
        El rectángulo mide {a} por {b}. Partirlo en {m} + {n} son dos rectángulos que se pueden multiplicar por separado.
      </div>
    </div>
  );
}

// ── División ────────────────────────────────────────────────────────────────
export function FiguraDivision({ figura, color }) {
  const { b, q, r, oculto, dibujar } = figura;
  const verGrupos = oculto !== "b";

  if (dibujar) {
    return (
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {Array.from({ length: b }, (_, i) => (
            <div key={i} style={{
              display: "grid", gap: 5, padding: 9, borderRadius: 10,
              border: `2px dashed ${C.bordeVivo}`, minWidth: DOT + 18,
              gridTemplateColumns: `repeat(${Math.min(q, 5)}, ${DOT}px)`,
            }}>
              {oculto === "q"
                ? <span style={{ width: DOT, height: DOT, fontSize: 22, fontWeight: 800, color: C.apagado, lineHeight: `${DOT}px` }}>?</span>
                : Array.from({ length: q }, (_, k) => (
                  <span key={k} style={{
                    width: DOT, height: DOT, borderRadius: "50%",
                    background: color, border: `2px solid ${color}`,
                  }} />
                ))}
            </div>
          ))}
        </div>

        {/* El sobrante, aparte: es el residuo dibujado. Nunca se muestra si
            justamente es lo que se pregunta. */}
        <div style={{
          marginTop: 14, padding: "12px 14px", borderRadius: 12,
          border: `2px dashed ${oculto === "r" ? C.bordeVivo : C.amarillo}`,
          background: oculto === "r" ? "transparent" : "rgba(255,209,102,.06)",
        }}>
          <div style={{ color: C.apagado, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".08em" }}>
            Fuera de los grupos
          </div>
          <div style={{ marginTop: 10, display: "flex", gap: 6, flexWrap: "wrap", minHeight: DOT + 4 }}>
            {oculto === "r" ? (
              <span style={{ fontSize: 30, fontWeight: 800, color: C.apagado, lineHeight: 1 }}>?</span>
            ) : r === 0 ? (
              <span style={{ color: C.tenue, fontSize: 16 }}>Nada: los grupos quedaron justos.</span>
            ) : (
              Array.from({ length: r }, (_, k) => (
                <span key={k} style={{
                  width: DOT, height: DOT, borderRadius: "50%",
                  background: C.amarillo, border: `2px solid ${C.amarillo}`,
                }} />
              ))
            )}
          </div>
        </div>
      </div>
    );
  }

  // Solo números: los grupos, en tiras compactas.
  return (
    <div>
      {oculto !== "a" && (
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <div style={{ color: C.apagado, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".08em" }}>
            Total
          </div>
          <div style={{ color, fontSize: 46, fontWeight: 800, lineHeight: 1.1 }}>{figura.a}</div>
        </div>
      )}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
        {verGrupos
          ? Array.from({ length: b }, (_, i) => (
            <span key={i} style={{
              display: "grid", placeItems: "center", minWidth: 46, minHeight: 52, padding: "4px 12px",
              borderRadius: 10, border: `2px solid ${C.borde}`, background: C.alto,
              color: C.texto, fontSize: 22, fontWeight: 800,
            }}>
              {oculto === "q" ? "?" : q}
            </span>
          ))
          : <span style={{ fontSize: 30, fontWeight: 800, color: C.apagado }}>? grupos</span>}
        <span style={{
          display: "grid", placeItems: "center", minWidth: 46, minHeight: 52, padding: "4px 12px",
          borderRadius: 10, border: `2px dashed ${oculto === "r" ? C.bordeVivo : C.amarillo}`,
          color: oculto === "r" ? C.apagado : C.amarillo, fontSize: 22, fontWeight: 800,
        }}>
          {oculto === "r" ? "?" : `+${r}`}
        </span>
      </div>
      {oculto === "b" && (
        <div style={{ marginTop: 12, color: C.tenue, fontSize: 16, textAlign: "center" }}>
          Cada grupo lleva {q} y al final sobran {r}.
        </div>
      )}
    </div>
  );
}
