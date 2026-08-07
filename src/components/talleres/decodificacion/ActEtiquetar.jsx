// Actividad 5 — Etiquetar el diagrama.
//
// La única actividad donde él sabe más que la app. No hay que explicarle qué
// es una biela: ya lo sabe. Lo que se entrena es leer la etiqueta escrita y
// llevarla a la pieza que ya reconoce de vista. Por eso al acertar aparece un
// dato técnico real y no una felicitación: se le habla como a alguien que ya
// conoce el tema, que es exactamente lo que es.
import { useState } from "react";
import { barajar } from "./lib/texto.js";
import { Diagrama } from "./Diagramas.jsx";
import { C } from "./estilo.js";
import { useAyuda, compararConAnterior } from "./hooks.js";
import { Boton, Panel, Rotulo, BotonAudio, Cabecera, Ayuda, Cierre } from "./ui.jsx";

export default function ActEtiquetar({ banco, registrar, cerrarRonda, onSalir, etiquetaSalir }) {
  const diagrama = banco.diagrama;
  const piezas = diagrama?.piezas || [];

  const [etiquetas, setEtiquetas] = useState(() => barajar(piezas));

  const [resueltas, setResueltas] = useState(() => new Set());
  // Piezas y etiquetas que ya estuvieron en un emparejamiento fallido: solo
  // cuentan como acierto las que salen a la primera (ver hooks.js).
  const [sucias, setSucias] = useState(() => new Set());
  const [seleccion, setSeleccion] = useState(null); // { tipo, id }
  const [ultima, setUltima] = useState(null);       // pieza recién acertada
  const [fallo, setFallo] = useState(null);         // id que acaba de fallar
  const [marcador, setMarcador] = useState({ aciertos: 0, errores: 0 });
  const [anterior, setAnterior] = useState(null);
  const ayuda = useAyuda();

  if (!diagrama) {
    return (
      <Panel estilo={{ textAlign: "center" }}>
        <p style={{ color: C.tenue, fontSize: 17, margin: 0 }}>
          Este tema todavía no tiene diagrama para etiquetar.
        </p>
      </Panel>
    );
  }

  const terminado = resueltas.size === piezas.length;

  function resolver(idPieza, idEtiqueta) {
    const pieza = piezas.find((p) => p.id === idPieza);
    const bien = idPieza === idEtiqueta;
    registrar(pieza?.etiqueta || idPieza, bien);
    setSeleccion(null);
    if (bien) {
      setResueltas((s) => new Set(s).add(idPieza));
      if (!sucias.has(idPieza)) setMarcador((m) => ({ ...m, aciertos: m.aciertos + 1 }));
      setUltima(pieza);
      ayuda.reiniciar();
    } else {
      setMarcador((m) => ({ ...m, errores: m.errores + 1 }));
      setSucias((s) => new Set(s).add(idPieza).add(idEtiqueta));
      setFallo(idEtiqueta);
      setTimeout(() => setFallo(null), 400);
      ayuda.fallo();
    }
  }

  // Se puede empezar por la pieza o por la etiqueta: en la TV a veces es más
  // natural señalar primero el dibujo.
  function tocar(tipo, id) {
    if (resueltas.has(id)) return;
    if (!seleccion) { setSeleccion({ tipo, id }); return; }
    if (seleccion.tipo === tipo) { setSeleccion({ tipo, id }); return; }
    const idPieza = tipo === "pieza" ? id : seleccion.id;
    const idEtiqueta = tipo === "etiqueta" ? id : seleccion.id;
    resolver(idPieza, idEtiqueta);
  }

  function cerrar() {
    setAnterior(cerrarRonda({ ...marcador, total: piezas.length }));
    setUltima("fin");
  }

  if (ultima === "fin") {
    return (
      <Cierre
        aciertos={marcador.aciertos}
        total={piezas.length}
        mensaje={compararConAnterior(marcador.aciertos, piezas.length, anterior)}
        onRepetir={() => {
          setResueltas(new Set());
          setSucias(new Set());
          setMarcador({ aciertos: 0, errores: 0 });
          setEtiquetas(barajar(piezas)); setUltima(null);
        }}
        onSalir={onSalir}
        etiquetaSalir={etiquetaSalir}
      />
    );
  }

  const pendiente = piezas.find((p) => !resueltas.has(p.id));

  return (
    <div>
      <Cabecera
        titulo={`Etiquetar · ${diagrama.titulo}`}
        instruccion="Toca una etiqueta y luego el número de la pieza que le toca."
        ronda={resueltas.size}
        total={piezas.length}
      />

      <div style={{
        display: "grid", gap: 20, alignItems: "start",
        gridTemplateColumns: "minmax(280px, 1fr) minmax(260px, 340px)",
      }}>
        <Panel estilo={{ padding: 16, background: C.fondo }}>
          {/* Altura fija: el SVG es `height:100%`, así que sin una altura
              concreta arriba se dibujaría a su tamaño intrínseco y se saldría
              del panel por abajo. */}
          <div style={{ height: "min(58vh, 470px)", display: "flex", justifyContent: "center" }}>
            <Diagrama
              clave={diagrama.clave}
              piezas={piezas}
              resueltas={resueltas}
              seleccion={seleccion?.tipo === "pieza" ? seleccion.id : null}
              onTocarPieza={(id) => tocar("pieza", id)}
            />
          </div>
        </Panel>

        <div style={{ display: "grid", gap: 10 }}>
          {etiquetas.map((p) => {
            const lista = resueltas.has(p.id);
            const activa = seleccion?.tipo === "etiqueta" && seleccion.id === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => tocar("etiqueta", p.id)}
                disabled={lista}
                style={{
                  minHeight: 56, borderRadius: 10, fontFamily: "inherit",
                  fontSize: 19, fontWeight: 700, textAlign: "left", padding: "10px 16px",
                  background: activa ? C.ambar : lista ? "transparent" : C.panel,
                  color: activa ? "#1a1205" : lista ? C.apagado : C.texto,
                  border: `2px solid ${activa ? C.ambar : lista ? C.borde : C.bordeVivo}`,
                  textDecoration: lista ? "line-through" : "none",
                  opacity: lista ? 0.45 : 1,
                  cursor: lista ? "default" : "pointer",
                  animation: fallo === p.id ? "dec-tiembla .3s" : undefined,
                }}
              >
                {p.etiqueta}
              </button>
            );
          })}
        </div>
      </div>

      {/* Al acertar: información técnica, no aplauso. */}
      {ultima && ultima !== "fin" && (
        <Panel estilo={{ marginTop: 18, borderColor: "rgba(63,191,111,.35)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <Rotulo color={C.verde}>{ultima.etiqueta}</Rotulo>
            <BotonAudio texto={ultima.etiqueta} tamano="chico" velocidad={0.85} />
          </div>
          <p style={{ color: C.texto, fontSize: 18, lineHeight: 1.5, margin: "10px 0 0", maxWidth: "70ch" }}>
            {ultima.dato}
          </p>
        </Panel>
      )}

      {!terminado && (
        <Ayuda
          nivel={ayuda.nivel}
          pista={pendiente ? `Te falta «${pendiente.etiqueta}». Búscala leyendo la palabra completa.` : ""}
          solucion={pendiente ? `«${pendiente.etiqueta}» es la número ${piezas.indexOf(pendiente) + 1}.` : ""}
        />
      )}

      {terminado && (
        <div style={{ marginTop: 20, display: "flex", justifyContent: "flex-end" }}>
          <Boton onClick={cerrar} tamano="grande">Terminar</Boton>
        </div>
      )}
    </div>
  );
}
