// Sala 1 · La Galería.
//
// Los cinco, uno a la vez y todos del mismo tamaño (mismo radio: se comparan
// por su forma, no por quién ocupa más pantalla). Se giran con el dedo.
//
// La decisión que hace la sala: los tres números de la ficha —caras, aristas,
// vértices— **se tocan**, y al tocarlos se apaga todo lo demás en la figura y
// se quedan encendidos nada más los que se están contando. El número deja de
// ser un dato de la tarjeta y pasa a señalar algo que está girando ahí.
//
// Y el botón de abrir, que separa las caras: es la única manera de contar 20
// caras sin perder la cuenta, y de paso se ve que todas son iguales.
import { useState } from "react";
import { POR_QUE_CINCO, SOLIDOS, SOLIDOS_POR_ID } from "../../../data/talleres/solidos-platonicos/index.js";
import { Boton, Panel, Rotulo } from "../comun/ui.jsx";
import { C, ELEMENTO, TAM } from "./estilo.js";
import Visor from "./Visor.jsx";

function Interruptor({ activo, onClick, children, color }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        background: activo ? color : "transparent",
        color: activo ? "#10161d" : C.tenue,
        border: `2px solid ${activo ? color : C.borde}`,
        borderRadius: 999, padding: "0 18px", height: 44, minWidth: 44,
        fontFamily: "inherit", fontSize: 15.5, fontWeight: 800, cursor: "pointer",
        touchAction: "manipulation",
      }}
    >
      {children}
    </button>
  );
}

// Uno de los tres conteos. Es un botón: al picarlo, la figura se queda solo
// con eso encendido.
function Conteo({ etiqueta, valor, color, activo, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        flex: "1 1 90px", textAlign: "center", cursor: "pointer",
        background: activo ? `${color}1f` : C.alto,
        border: `2px solid ${activo ? color : C.borde}`,
        borderRadius: 14, padding: "12px 6px 10px", fontFamily: "inherit",
        touchAction: "manipulation",
      }}
    >
      <div style={{
        fontSize: 40, fontWeight: 800, lineHeight: 1,
        color: activo ? color : C.texto, fontVariantNumeric: "tabular-nums",
      }}>
        {valor}
      </div>
      <div style={{
        fontSize: 12.5, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase",
        color: activo ? color : C.apagado, marginTop: 6,
      }}>
        {etiqueta}
      </div>
    </button>
  );
}

export default function Galeria({ solidoId, onElegir, onVerDual }) {
  const [resaltar, setResaltar] = useState(null);
  const [abierto, setAbierto] = useState(false);
  const [girar, setGirar] = useState(true);
  const [porQue, setPorQue] = useState(false);

  const s = SOLIDOS_POR_ID[solidoId] || SOLIDOS[0];
  const d = SOLIDOS_POR_ID[s.dual];
  const alternar = (cual) => setResaltar((r) => (r === cual ? null : cual));

  return (
    <div>
      {/* Los cinco, siempre visibles y en el orden de siempre: por caras. */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
        {SOLIDOS.map((x) => {
          const activo = x.id === s.id;
          return (
            <button
              key={x.id}
              type="button"
              onClick={() => { onElegir(x.id); setResaltar(null); }}
              style={{
                flex: "1 1 150px", cursor: "pointer", fontFamily: "inherit", textAlign: "left",
                background: activo ? `${x.color}1c` : C.panel,
                border: `2px solid ${activo ? x.color : C.borde}`,
                borderRadius: 12, padding: "11px 14px", minHeight: 44,
              }}
            >
              <div style={{ fontSize: 17, fontWeight: 800, color: activo ? x.color : C.texto }}>
                {x.nombre}
              </div>
              <div style={{ fontSize: 13, color: C.apagado, marginTop: 2 }}>
                {x.numCaras} {x.cara}s
              </div>
            </button>
          );
        })}
      </div>

      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
        <div>
          <Visor
            poliedro={s.geometria}
            color={s.color}
            verVertices={resaltar === "vertices"}
            resaltar={resaltar}
            abierto={abierto ? 1 : 0}
            girar={girar}
            altura={400}
          />
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
            <Interruptor activo={girar} color={s.color} onClick={() => setGirar((g) => !g)}>
              ⟳ Girar
            </Interruptor>
            <Interruptor activo={abierto} color={s.color} onClick={() => setAbierto((a) => !a)}>
              ✧ Abrir
            </Interruptor>
            <span style={{ alignSelf: "center", color: C.apagado, fontSize: 14.5, lineHeight: 1.35 }}>
              {abierto
                ? `${s.numCaras} ${s.caras}, todos iguales.`
                : "Arrástralo con el dedo para verlo por atrás."}
            </span>
          </div>
        </div>

        <div>
          <Panel estilo={{ padding: 20 }}>
            <Rotulo color={s.color}>{s.griego}</Rotulo>
            <h2 style={{ fontSize: TAM.titulo, fontWeight: 800, margin: "6px 0 2px" }}>
              {s.nombre}
            </h2>
            <div style={{ color: C.tenue, fontSize: 15.5, marginBottom: 16 }}>
              {s.alterno ? `también llamado ${s.alterno} · ` : ""}
              caras de {s.ladosPorCara} lados
            </div>

            <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
              <Conteo etiqueta="caras" valor={s.numCaras} color={s.color}
                activo={resaltar === "caras"} onClick={() => alternar("caras")} />
              <Conteo etiqueta="aristas" valor={s.numAristas} color={ELEMENTO.arista}
                activo={resaltar === "aristas"} onClick={() => alternar("aristas")} />
              <Conteo etiqueta="vértices" valor={s.numVertices} color={ELEMENTO.vertice}
                activo={resaltar === "vertices"} onClick={() => alternar("vertices")} />
            </div>

            <div style={{
              background: C.alto, border: `1px dashed ${C.bordeVivo}`, borderRadius: 12,
              padding: "10px 14px", fontSize: 17, fontWeight: 800, textAlign: "center",
              color: C.tenue, fontVariantNumeric: "tabular-nums", marginBottom: 16,
            }}>
              {s.numCaras} + {s.numVertices} − {s.numAristas} = <span style={{ color: C.verde }}>2</span>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: C.apagado, marginTop: 4, letterSpacing: ".04em" }}>
                CARAS + VÉRTICES − ARISTAS, SIEMPRE 2
              </div>
            </div>

            <p style={{ margin: "0 0 10px", fontSize: 16, color: C.texto, lineHeight: 1.5 }}>
              En cada vértice se juntan <b>{s.carasPorVertice} caras</b>. Platón le dio{" "}
              <b>{s.elemento}</b>: {s.porque}.
            </p>
            <p style={{ margin: 0, fontSize: 15.5, color: C.tenue, lineHeight: 1.5 }}>
              {s.curiosidad}
            </p>
          </Panel>

          <Panel estilo={{ padding: 18, marginTop: 12 }}>
            <Rotulo color={C.morado}>Su pareja</Rotulo>
            <p style={{ margin: "8px 0 14px", fontSize: 16.5, color: C.texto, lineHeight: 1.45 }}>
              {s.id === d.id
                ? "El tetraedro hace pareja consigo mismo: es su propio dual."
                : <>El {s.nombre.toLowerCase()} hace pareja con el <b style={{ color: d.color }}>{d.nombre.toLowerCase()}</b>.</>}
              {" "}Sus {s.numCaras} caras son los {s.numCaras} vértices del otro.
            </p>
            <Boton tamano="chico" color={C.morado} onClick={() => onVerDual(s.id)}>
              Verlo aparecer →
            </Boton>
          </Panel>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setPorQue((v) => !v)}
        style={{
          marginTop: 18, background: "transparent", border: `1px solid ${C.borde}`,
          borderRadius: 12, padding: "12px 18px", minHeight: 44, width: "100%", textAlign: "left",
          color: C.tenue, fontFamily: "inherit", fontSize: 16, fontWeight: 700, cursor: "pointer",
        }}
      >
        {porQue ? "▾" : "▸"} ¿Y por qué son cinco y no seis?
      </button>
      {porQue && (
        <p style={{
          margin: "10px 0 0", padding: "0 4px", fontSize: 16.5, color: C.texto,
          lineHeight: 1.6, maxWidth: "76ch",
        }}>
          {POR_QUE_CINCO}
        </p>
      )}
    </div>
  );
}
