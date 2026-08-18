// Los dibujos del taller del Terreno, en SVG escrito a mano.
//
// La decisión que ordena todo el archivo: **la cerca y el pasto no se parecen
// en nada**. La cerca son tramos de madera sobre la orilla, con sus postes; el
// pasto son cuadros verdes por dentro. Si las dos medidas se dibujaran igual
// —dos números que salen de la misma figura— el taller no tendría de dónde
// agarrarse para separarlas, que es justo lo que se está enseñando.
import { C, MATERIAL } from "./estilo.js";
import { idCelda, ladoDe, tramosDe } from "./lib/piezas.js";

// De la posición del dedo a la pieza que hay debajo. Se hace con la geometría
// y no con el elemento del DOM porque el puntero va capturado por el SVG
// (si no, el arrastre se corta en cuanto el dedo cruza de una pieza a otra).
function puntoEnCeldas(e, lado, margen) {
  const r = e.currentTarget.getBoundingClientRect();
  const escala = r.width / e.currentTarget.viewBox.baseVal.width;
  return {
    x: ((e.clientX - r.left) / escala - margen) / lado,
    y: ((e.clientY - r.top) / escala - margen) / lado,
  };
}

// El tramo más cercano al dedo, si está lo bastante cerca. El radio es
// generoso a propósito: en una tablet proyectada nadie recorre la orilla al
// píxel, y lo que se está midiendo es si entiende qué es la orilla.
function tramoBajo(punto, ancho, alto, ladosOcultos = []) {
  let mejor = null, mejorD = 0.75;
  tramosDe(ancho, alto).forEach((t) => {
    if (ladosOcultos.includes(ladoDe(t.id))) return;
    const d = Math.hypot(punto.x - (t.x1 + t.x2) / 2, punto.y - (t.y1 + t.y2) / 2);
    if (d < mejorD) { mejor = t.id; mejorD = d; }
  });
  return mejor;
}

function celdaBajo(punto, ancho, alto) {
  const c = Math.floor(punto.x), f = Math.floor(punto.y);
  if (c < 0 || f < 0 || c >= ancho || f >= alto) return null;
  return idCelda(f, c);
}

// ── El terreno del juego 1 ────────────────────────────────────────────────
// La cuadrícula ES el terreno: no hay parcela alrededor, porque aquí no se
// trata de encontrar la figura sino de recorrerla.
export function TerrenoFijo({
  ancho, alto, modo, pintados, medidas = false, unidades = false,
  onPintar, lado, listo = false,
}) {
  const paso = lado || Math.max(26, Math.min(74, Math.round(520 / Math.max(ancho, alto))));
  const margen = 30;
  const w = ancho * paso + margen * 2;
  const h = alto * paso + margen * 2;
  const X = (x) => margen + x * paso;
  const Y = (y) => margen + y * paso;

  function pintar(e) {
    if (!onPintar) return;
    const punto = puntoEnCeldas(e, paso, margen);
    const pieza = modo === "cerca" ? tramoBajo(punto, ancho, alto) : celdaBajo(punto, ancho, alto);
    if (pieza) onPintar(pieza);
  }

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      style={{ width: "100%", maxWidth: w, touchAction: "none", display: "block" }}
      onPointerDown={(e) => { e.currentTarget.setPointerCapture?.(e.pointerId); pintar(e); }}
      onPointerMove={(e) => { if (e.buttons > 0 || e.pointerType === "touch") pintar(e); }}
      onPointerUp={(e) => e.currentTarget.releasePointerCapture?.(e.pointerId)}
    >
      {/* suelo */}
      <rect x={X(0)} y={Y(0)} width={ancho * paso} height={alto * paso} fill={MATERIAL.tierra} />

      {/* pasto sembrado */}
      {Array.from({ length: alto }, (_, f) =>
        Array.from({ length: ancho }, (_, c) => {
          const puesto = pintados?.has(idCelda(f, c));
          if (!puesto) return null;
          return (
            <rect key={idCelda(f, c)} x={X(c) + 1} y={Y(f) + 1} width={paso - 2} height={paso - 2}
              rx={3} fill={MATERIAL.pasto} />
          );
        })
      )}

      {/* cuadrícula */}
      {Array.from({ length: ancho + 1 }, (_, i) => (
        <line key={`v${i}`} x1={X(i)} y1={Y(0)} x2={X(i)} y2={Y(alto)} stroke={C.borde} strokeWidth="1.5" />
      ))}
      {Array.from({ length: alto + 1 }, (_, j) => (
        <line key={`h${j}`} x1={X(0)} y1={Y(j)} x2={X(ancho)} y2={Y(j)} stroke={C.borde} strokeWidth="1.5" />
      ))}

      {/* la cerca, tramo por tramo */}
      {tramosDe(ancho, alto).map((t) => {
        const puesto = pintados?.has(t.id);
        return (
          <line
            key={t.id}
            x1={X(t.x1)} y1={Y(t.y1)} x2={X(t.x2)} y2={Y(t.y2)}
            stroke={puesto ? MATERIAL.cerca : MATERIAL.cercaApagada}
            strokeWidth={puesto ? 9 : 5}
            strokeLinecap="round"
          />
        );
      })}
      {/* postes de las esquinas */}
      {[[0, 0], [ancho, 0], [0, alto], [ancho, alto]].map(([x, y], k) => (
        <circle key={k} cx={X(x)} cy={Y(y)} r={listo ? 6 : 4.5} fill={MATERIAL.poste} />
      ))}

      {/* medidas rotuladas: aparecen cuando el terreno ya no se cuenta */}
      {medidas && (
        <>
          <text x={X(ancho / 2)} y={Y(0) - 10} textAnchor="middle" fontSize={17} fontWeight="800"
            fill={C.tenue} fontFamily="inherit">
            {ancho}{unidades ? " m" : ""}
          </text>
          <text x={X(0) - 10} y={Y(alto / 2)} textAnchor="middle" dominantBaseline="middle"
            fontSize={17} fontWeight="800" fill={C.tenue} fontFamily="inherit"
            transform={`rotate(-90 ${X(0) - 10} ${Y(alto / 2)})`}>
            {alto}{unidades ? " m" : ""}
          </text>
        </>
      )}
    </svg>
  );
}

// ── La parcela del juego 2 ────────────────────────────────────────────────
// Aquí la cuadrícula es el mundo y el terreno lo arma el niño arrastrando
// desde la esquina. La cerca se dibuja sola alrededor de lo que va formando:
// es lo que deja ver que dos terrenos muy distintos gastan la misma cerca.
export function ParcelaTerreno({ max, filas, columnas, onCelda, lado }) {
  const paso = lado || Math.max(24, Math.min(52, Math.round(520 / max)));
  const margen = 14;
  const w = max * paso + margen * 2;
  const X = (x) => margen + x * paso;

  function tocar(e) {
    if (!onCelda) return;
    const r = e.currentTarget.getBoundingClientRect();
    const escala = r.width / w;
    const x = ((e.clientX - r.left) / escala - margen) / paso;
    const y = ((e.clientY - r.top) / escala - margen) / paso;
    onCelda({
      filas: Math.min(max, Math.max(1, Math.ceil(y))),
      columnas: Math.min(max, Math.max(1, Math.ceil(x))),
    });
  }

  return (
    <svg
      viewBox={`0 0 ${w} ${w}`}
      style={{ width: "100%", maxWidth: w, touchAction: "none", display: "block" }}
      onPointerDown={(e) => { e.currentTarget.setPointerCapture?.(e.pointerId); tocar(e); }}
      onPointerMove={(e) => { if (e.buttons > 0 || e.pointerType === "touch") tocar(e); }}
      onPointerUp={(e) => e.currentTarget.releasePointerCapture?.(e.pointerId)}
    >
      <rect x={X(0)} y={X(0)} width={max * paso} height={max * paso} fill={MATERIAL.tierra} rx={6} />
      {filas > 0 && columnas > 0 && (
        <rect x={X(0)} y={X(0)} width={columnas * paso} height={filas * paso} fill={MATERIAL.pasto} opacity={0.85} />
      )}
      {Array.from({ length: max + 1 }, (_, i) => (
        <g key={i}>
          <line x1={X(i)} y1={X(0)} x2={X(i)} y2={X(max)} stroke={C.borde} strokeWidth="1.5" />
          <line x1={X(0)} y1={X(i)} x2={X(max)} y2={X(i)} stroke={C.borde} strokeWidth="1.5" />
        </g>
      ))}
      {filas > 0 && columnas > 0 && (
        <>
          <rect x={X(0)} y={X(0)} width={columnas * paso} height={filas * paso}
            fill="none" stroke={MATERIAL.cerca} strokeWidth="7" strokeLinejoin="round" />
          {[[0, 0], [columnas, 0], [0, filas], [columnas, filas]].map(([x, y], k) => (
            <circle key={k} cx={X(x)} cy={X(y)} r="5" fill={MATERIAL.poste} />
          ))}
        </>
      )}
    </svg>
  );
}

// ── La libreta ────────────────────────────────────────────────────────────
// Cada terreno armado queda dibujado a escala junto a los demás. Verlos lado a
// lado —misma cerca, siluetas distintas— es el argumento entero del juego 2.
export function TarjetaTerreno({
  corto, largo, area, escala = 14, unidades, revelada, marcada, ganadora, onClick,
}) {
  const clickable = !!onClick;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!clickable}
      style={{
        background: C.panel,
        border: `3px solid ${ganadora ? C.verde : marcada ? C.amarillo : C.borde}`,
        borderRadius: 14, padding: "14px 16px", cursor: clickable ? "pointer" : "default",
        fontFamily: "inherit", color: C.texto, touchAction: "manipulation",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 10, minWidth: 130,
      }}
    >
      <svg width={largo * escala + 8} height={corto * escala + 8}
        viewBox={`0 0 ${largo * escala + 8} ${corto * escala + 8}`} style={{ display: "block" }}>
        <rect x="4" y="4" width={largo * escala} height={corto * escala}
          fill={MATERIAL.pasto} opacity="0.85" />
        <rect x="4" y="4" width={largo * escala} height={corto * escala}
          fill="none" stroke={MATERIAL.cerca} strokeWidth="4" />
      </svg>
      <div style={{ fontSize: 20, fontWeight: 800 }}>{corto} × {largo}</div>
      <div style={{ fontSize: 15, fontWeight: 700, color: revelada ? (ganadora ? C.verde : C.tenue) : C.apagado }}>
        {revelada ? `${area}${unidades ? " m²" : " cuadros"}` : "¿cuánto pasto?"}
      </div>
    </button>
  );
}

// ── El patio del juego 4 ──────────────────────────────────────────────────
// Aquí la orilla no es una cerca que se pone, es un camino que se recorre: se
// dibujan huellas y va un caminante en la última pisada. En el modo atajo, dos
// de los lados están cerrados con un "?" y no se dejan caminar —esos son los
// que hay que adivinar—.
export function PatioVuelta({
  ancho, alto, pintados, ladosOcultos = [], onPintar, medidas = false, unidades = false, lado,
}) {
  const paso = lado || Math.max(26, Math.min(74, Math.round(520 / Math.max(ancho, alto))));
  const margen = 34;
  const w = ancho * paso + margen * 2;
  const h = alto * paso + margen * 2;
  const X = (x) => margen + x * paso;
  const Y = (y) => margen + y * paso;

  const tramos = tramosDe(ancho, alto);
  const porLado = { arriba: 0, abajo: 0, izq: 0, der: 0 };
  tramos.forEach((t) => { if (pintados?.has(t.id)) porLado[ladoDe(t.id)]++; });

  // El caminante se para en la última huella; si no ha empezado, en la esquina.
  const ultimo = [...tramos].reverse().find((t) => pintados?.has(t.id));
  const cx = ultimo ? X((ultimo.x1 + ultimo.x2) / 2) : X(0);
  const cy = ultimo ? Y((ultimo.y1 + ultimo.y2) / 2) : Y(0);

  const etiqueta = (n, total) => (n === 0 ? "" : `${n}${n === total ? (unidades ? " m" : " pasos") : ""}`);

  function pintar(e) {
    if (!onPintar) return;
    const punto = puntoEnCeldas(e, paso, margen);
    const pieza = tramoBajo(punto, ancho, alto, ladosOcultos);
    if (pieza) onPintar(pieza);
  }

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      style={{ width: "100%", maxWidth: w, touchAction: "none", display: "block" }}
      onPointerDown={(e) => { e.currentTarget.setPointerCapture?.(e.pointerId); pintar(e); }}
      onPointerMove={(e) => { if (e.buttons > 0 || e.pointerType === "touch") pintar(e); }}
      onPointerUp={(e) => e.currentTarget.releasePointerCapture?.(e.pointerId)}
    >
      <rect x={X(0)} y={Y(0)} width={ancho * paso} height={alto * paso} fill={MATERIAL.pastoTenue} rx={4} />
      {Array.from({ length: ancho + 1 }, (_, i) => (
        <line key={`v${i}`} x1={X(i)} y1={Y(0)} x2={X(i)} y2={Y(alto)} stroke={C.borde} strokeWidth="1" opacity="0.5" />
      ))}
      {Array.from({ length: alto + 1 }, (_, j) => (
        <line key={`h${j}`} x1={X(0)} y1={Y(j)} x2={X(ancho)} y2={Y(j)} stroke={C.borde} strokeWidth="1" opacity="0.5" />
      ))}

      {tramos.map((t) => {
        const oculto = ladosOcultos.includes(ladoDe(t.id));
        const dado = pintados?.has(t.id);
        return (
          <line
            key={t.id}
            x1={X(t.x1)} y1={Y(t.y1)} x2={X(t.x2)} y2={Y(t.y2)}
            stroke={oculto ? C.bordeVivo : dado ? MATERIAL.huella : MATERIAL.camino}
            strokeWidth={dado ? 11 : 7}
            strokeDasharray={oculto ? "6 7" : undefined}
            strokeLinecap="round"
          />
        );
      })}

      {/* separadores entre pisada y pisada: son los pasos, y se cuentan */}
      {tramos.filter((t) => pintados?.has(t.id)).map((t) => (
        <circle key={`p${t.id}`} cx={X(t.x2)} cy={Y(t.y2)} r="3.5" fill="#7a5c1e" />
      ))}

      {/* el caminante */}
      <g transform={`translate(${cx} ${cy})`}>
        <circle cx="0" cy="0" r="13" fill={C.fondo} stroke={MATERIAL.huella} strokeWidth="3" />
        <circle cx="0" cy="-3.5" r="4" fill={MATERIAL.huella} />
        <rect x="-3.5" y="1.5" width="7" height="8" rx="3" fill={MATERIAL.huella} />
      </g>

      {/* cuánto midió cada lado */}
      {medidas && (
        <>
          <text x={X(ancho / 2)} y={Y(0) - 12} textAnchor="middle" fontSize="17" fontWeight="800"
            fill={ladosOcultos.includes("arriba") ? C.apagado : C.texto} fontFamily="inherit">
            {ladosOcultos.includes("arriba") ? "?" : etiqueta(porLado.arriba, ancho)}
          </text>
          <text x={X(ancho / 2)} y={Y(alto) + 26} textAnchor="middle" fontSize="17" fontWeight="800"
            fill={ladosOcultos.includes("abajo") ? C.apagado : C.texto} fontFamily="inherit">
            {ladosOcultos.includes("abajo") ? "?" : etiqueta(porLado.abajo, ancho)}
          </text>
          <text x={X(0) - 14} y={Y(alto / 2)} textAnchor="middle" dominantBaseline="middle"
            fontSize="17" fontWeight="800" fontFamily="inherit"
            fill={ladosOcultos.includes("izq") ? C.apagado : C.texto}
            transform={`rotate(-90 ${X(0) - 14} ${Y(alto / 2)})`}>
            {ladosOcultos.includes("izq") ? "?" : etiqueta(porLado.izq, alto)}
          </text>
          <text x={X(ancho) + 16} y={Y(alto / 2)} textAnchor="middle" dominantBaseline="middle"
            fontSize="17" fontWeight="800" fontFamily="inherit"
            fill={ladosOcultos.includes("der") ? C.apagado : C.texto}
            transform={`rotate(90 ${X(ancho) + 16} ${Y(alto / 2)})`}>
            {ladosOcultos.includes("der") ? "?" : etiqueta(porLado.der, alto)}
          </text>
        </>
      )}
    </svg>
  );
}

// ── La figura del juego 5 ─────────────────────────────────────────────────
// Un patio con una esquina mordida. Mientras no se elige el corte, las dos
// líneas punteadas están ahí esperando; al elegir uno, la figura se separa en
// dos rectángulos de colores distintos con sus medidas encima. Que los dos
// cortes se puedan ver es media clase: el área no depende de cómo se parta.
export function FiguraCompuesta({
  W, H, muesca, cortes, corteElegido, onElegirCorte, lado, mostrarProducto = false, unidades = false,
}) {
  const paso = lado || Math.max(26, Math.min(70, Math.round(480 / Math.max(W, H))));
  const margen = 16;
  const w = W * paso + margen * 2;
  const h = H * paso + margen * 2;
  const X = (x) => margen + x * paso;
  const Y = (y) => margen + y * paso;
  const corte = cortes.find((c) => c.id === corteElegido) || null;
  const colores = [MATERIAL.mosaicoA, MATERIAL.mosaicoB];

  const enMuesca = (f, c) =>
    c >= muesca.x && c < muesca.x + muesca.w && f >= muesca.y && f < muesca.y + muesca.h;
  const enParte = (f, c, p) => c >= p.x && c < p.x + p.w && f >= p.y && f < p.y + p.h;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", maxWidth: w, display: "block" }}>
      {Array.from({ length: H }, (_, f) =>
        Array.from({ length: W }, (_, c) => {
          if (enMuesca(f, c)) return null;
          const k = corte ? corte.partes.findIndex((p) => enParte(f, c, p)) : -1;
          return (
            <rect key={`${f}:${c}`} x={X(c) + 1} y={Y(f) + 1} width={paso - 2} height={paso - 2} rx={3}
              fill={k >= 0 ? colores[k] : MATERIAL.tierra}
              stroke={C.borde} strokeWidth="1" />
          );
        })
      )}

      {/* el contorno del patio, para que se lea como una sola pieza */}
      {corte
        ? corte.partes.map((p, k) => (
          <rect key={k} x={X(p.x)} y={Y(p.y)} width={p.w * paso} height={p.h * paso}
            fill="none" stroke={colores[k]} strokeWidth="4" />
        ))
        : cortes.map((c) => (
          <g key={c.id} style={{ cursor: onElegirCorte ? "pointer" : "default" }}
            onPointerDown={() => onElegirCorte?.(c.id)}>
            <line x1={X(c.linea.x1)} y1={Y(c.linea.y1)} x2={X(c.linea.x2)} y2={Y(c.linea.y2)}
              stroke={C.amarillo} strokeWidth="4" strokeDasharray="9 7" strokeLinecap="round" />
            {/* objetivo táctil ancho, invisible */}
            <line x1={X(c.linea.x1)} y1={Y(c.linea.y1)} x2={X(c.linea.x2)} y2={Y(c.linea.y2)}
              stroke="transparent" strokeWidth="34" strokeLinecap="round" />
          </g>
        ))}

      {/* las medidas de cada parte, encima de la parte */}
      {corte && corte.partes.map((p, k) => (
        <text key={`t${k}`} x={X(p.x + p.w / 2)} y={Y(p.y + p.h / 2)} textAnchor="middle"
          dominantBaseline="middle" fontSize={Math.min(22, paso * 0.5)} fontWeight="800"
          fill="#0f1620" fontFamily="inherit">
          {p.w} × {p.h}{mostrarProducto ? ` = ${p.w * p.h}` : ""}
        </text>
      ))}

      {corte && unidades && (
        <text x={X(W / 2)} y={Y(H) + 12} textAnchor="middle" fontSize="13" fontWeight="700"
          fill={C.apagado} fontFamily="inherit">
          cada mosaico mide 1 m por lado
        </text>
      )}
    </svg>
  );
}
