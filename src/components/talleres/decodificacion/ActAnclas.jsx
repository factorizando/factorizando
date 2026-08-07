// Actividad 4 — Anclas ortográficas.
//
// Las reglas difíciles (güe, j, ll/y, r/rr, c/s/z) se enseñan desde una
// palabra que él YA pronuncia bien y que le importa: cigüeñal, bujía, llanta.
// Esa palabra es el ancla. Primero se mira la regla apoyada en ella, y solo
// después se estira hacia palabras nuevas, incluidas trampas que no llevan la
// marca (guiso, guerra).
//
// Ojo con lo que esta actividad NO es: en yeísmo mexicano ll y y suenan
// igual, y taza y tasa también. Aquí no se decide de oído sino por regla, y
// la tarjeta de regla lo dice con todas sus letras.
import { useEffect, useState } from "react";
import { callar } from "./lib/voz.js";
import { parsearReactivo, tomar } from "./lib/texto.js";
import { C } from "./estilo.js";
import { useAyuda, compararConAnterior } from "./hooks.js";
import { Boton, Panel, Rotulo, BotonAudio, Cabecera, Ayuda, Cierre } from "./ui.jsx";

const RONDAS = 8;

export default function ActAnclas({ banco, registrar, cerrarRonda, onSalir, etiquetaSalir, anclaId }) {
  const anclas = banco.anclas || [];
  const inicial = Math.max(0, anclas.findIndex((a) => a.id === anclaId));
  const sortear = (a) =>
    (a ? tomar(a.reactivos, Math.min(RONDAS, a.reactivos.length)).map(parsearReactivo) : []);

  const [indiceAncla, setIndiceAncla] = useState(inicial);
  const [reactivos, setReactivos] = useState(() => sortear(anclas[inicial]));
  const ancla = anclas[indiceAncla];

  const [verRegla, setVerRegla] = useState(true);
  const [i, setI] = useState(0);
  const [elegida, setElegida] = useState(null);
  const [resuelta, setResuelta] = useState(false);
  const [limpio, setLimpio] = useState(true);   // sin reintentos en este reactivo
  const [marcador, setMarcador] = useState({ aciertos: 0, errores: 0 });
  const [anterior, setAnterior] = useState(null);
  const ayuda = useAyuda();

  useEffect(() => () => callar(), []);

  // Pasar a la siguiente regla vuelve a sortear sus reactivos y regresa a la
  // tarjeta: la regla se vuelve a leer cada vez que se cambia de ancla.
  function cambiarAncla(k) {
    setIndiceAncla(k);
    setReactivos(sortear(anclas[k]));
    setI(0);
    setElegida(null);
    setResuelta(false);
    setLimpio(true);
    setMarcador({ aciertos: 0, errores: 0 });
    setVerRegla(true);
  }

  if (!ancla) {
    return (
      <Panel estilo={{ textAlign: "center" }}>
        <p style={{ color: C.tenue, fontSize: 17, margin: 0 }}>
          Este tema todavía no tiene anclas ortográficas.
        </p>
      </Panel>
    );
  }

  // ── Tarjeta de regla ────────────────────────────────────────────────────
  if (verRegla) {
    return (
      <div>
        <Cabecera titulo="Anclas ortográficas" instruccion={ancla.regla} ronda={0} total={0} />
        <Panel estilo={{ maxWidth: 760 }}>
          <Rotulo>Palabra ancla</Rotulo>
          <div style={{
            display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap",
            margin: "12px 0 18px",
          }}>
            <span style={{
              fontSize: "clamp(34px, 6vw, 54px)", fontWeight: 800, color: C.ambar,
              letterSpacing: ".02em",
            }}>
              {ancla.ancla}
            </span>
            <BotonAudio texto={ancla.ancla} tamano="chico" velocidad={0.8} />
          </div>
          <p style={{ color: C.texto, fontSize: 19, lineHeight: 1.6, margin: 0, maxWidth: "62ch" }}>
            {ancla.explicacion}
          </p>
          <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Boton onClick={() => setVerRegla(false)} tamano="grande">Empezar</Boton>
            {anclas.length > 1 && (
              <Boton
                variante="fantasma"
                onClick={() => cambiarAncla((indiceAncla + 1) % anclas.length)}
              >
                Otra regla ({indiceAncla + 1} de {anclas.length})
              </Boton>
            )}
          </div>
        </Panel>
      </div>
    );
  }

  // ── Reactivos ───────────────────────────────────────────────────────────
  if (i >= reactivos.length) {
    return (
      <Cierre
        aciertos={marcador.aciertos}
        total={reactivos.length}
        mensaje={compararConAnterior(marcador.aciertos, reactivos.length, anterior)}
        onRepetir={() => cambiarAncla((indiceAncla + 1) % anclas.length)}
        onSalir={onSalir}
        etiquetaSalir={etiquetaSalir}
      />
    );
  }

  const r = reactivos[i];

  function elegir(op) {
    if (resuelta) return;
    const bien = op === r.ok;
    setElegida(op);
    registrar(r.palabra, bien);
    if (bien) {
      if (limpio) setMarcador((m) => ({ ...m, aciertos: m.aciertos + 1 }));
      setResuelta(true);
    } else {
      setMarcador((m) => ({ ...m, errores: m.errores + 1 }));
      setLimpio(false);
      ayuda.fallo();
      setTimeout(() => setElegida(null), 800);
    }
  }

  function siguiente() {
    ayuda.reiniciar();
    setElegida(null);
    setResuelta(false);
    setLimpio(true);
    setI(i + 1);
    if (i + 1 >= reactivos.length) {
      setAnterior(cerrarRonda({ ...marcador, total: reactivos.length }));
    }
  }

  return (
    <div>
      <Cabecera
        titulo={`Anclas · ${ancla.regla}`}
        instruccion={ancla.pregunta}
        ronda={i}
        total={reactivos.length}
        derecha={<BotonAudio texto={r.palabra} tamano="chico" velocidad={0.8} />}
      />

      <Panel estilo={{ textAlign: "center", padding: "34px 22px" }}>
        <div style={{
          fontSize: "clamp(34px, 7vw, 64px)", fontWeight: 800, letterSpacing: ".02em",
          color: C.texto, lineHeight: 1.15,
        }}>
          {r.antes}
          <span style={{
            display: "inline-block", minWidth: "1.4em", margin: "0 .06em",
            borderBottom: `5px solid ${resuelta ? C.verde : C.ambar}`,
            color: resuelta ? C.verde : C.ambar,
          }}>
            {resuelta ? r.ok : ""}
          </span>
          {r.despues}
        </div>
      </Panel>

      <div style={{
        display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 20,
      }}>
        {ancla.opciones.map((op) => {
          const esElegida = elegida === op;
          const correcta = resuelta && op === r.ok;
          const mala = esElegida && !resuelta;
          return (
            <button
              key={op}
              type="button"
              onClick={() => elegir(op)}
              disabled={resuelta}
              style={{
                minWidth: 132, minHeight: 96, borderRadius: 14, fontFamily: "inherit",
                fontSize: "clamp(30px, 4.4vw, 44px)", fontWeight: 800,
                background: correcta ? "rgba(63,191,111,.15)" : mala ? "rgba(224,75,60,.15)" : C.panel,
                color: correcta ? C.verde : mala ? C.rojo : C.texto,
                border: `2px solid ${correcta ? C.verde : mala ? C.rojo : C.borde}`,
                opacity: resuelta && !correcta ? 0.3 : 1,
                cursor: resuelta ? "default" : "pointer",
                animation: mala ? "dec-tiembla .3s" : undefined,
              }}
            >
              {op}
            </button>
          );
        })}
      </div>

      {resuelta ? (
        <div style={{ marginTop: 22, display: "flex", justifyContent: "flex-end" }}>
          <Boton onClick={siguiente} tamano="grande">
            {i + 1 >= reactivos.length ? "Terminar" : "Siguiente"}
          </Boton>
        </div>
      ) : (
        <Ayuda
          nivel={ayuda.nivel}
          pista={ancla.explicacion.split(". ")[0] + "."}
          solucion={`Se escribe «${r.palabra}».`}
        />
      )}
    </div>
  );
}
