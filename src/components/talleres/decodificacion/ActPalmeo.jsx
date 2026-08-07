// Actividad 1 — Palmeo de sílabas.
//
// Es la puerta de entrada al taller y la más básica de todas: separar una
// palabra en golpes de voz. El alumno adivina palabras por su silueta; contar
// sílabas lo obliga a recorrerla por dentro antes de decidir nada.
//
// El botón de golpear es enorme y ocupa media pantalla a propósito: se marca
// con la palma abierta, de pie frente a la TV, no con la yema del dedo.
import { useEffect, useMemo, useRef, useState } from "react";
import { silabasDe } from "./lib/silabas.js";
import { decirSilabas, callar } from "./lib/voz.js";
import { tomar } from "./lib/texto.js";
import { C } from "./estilo.js";
import { useAyuda, useVozActiva, compararConAnterior } from "./hooks.js";
import { Boton, Panel, Rotulo, BotonAudio, Cabecera, Ayuda, Cierre } from "./ui.jsx";

const RONDAS = 6;

export default function ActPalmeo({ banco, registrar, cerrarRonda, onSalir, etiquetaSalir }) {
  const { voz, hayVoz } = useVozActiva();
  // Palabras de dos sílabas para arriba: contar "sol" no entrena nada.
  const sortear = () => tomar(banco.palabras.filter((p) => silabasDe(p).length >= 2), RONDAS);
  const [palabras, setPalabras] = useState(sortear);

  const [i, setI] = useState(0);
  const [golpes, setGolpes] = useState(0);
  const [fase, setFase] = useState("contando"); // contando · resuelta
  const [acerto, setAcerto] = useState(false);
  // Se cuenta como acierto solo si no hubo reintentos en esta palabra: ver
  // `compararConAnterior` en hooks.js para por qué esa es la métrica.
  const [limpio, setLimpio] = useState(true);
  const [silabaViva, setSilabaViva] = useState(-1);
  const [marcador, setMarcador] = useState({ aciertos: 0, errores: 0 });
  const [anterior, setAnterior] = useState(null);
  const ayuda = useAyuda();
  const cancelarAudio = useRef(() => {});

  const entrada = palabras[i];
  const silabas = useMemo(() => (entrada ? silabasDe(entrada) : []), [entrada]);

  useEffect(() => () => { cancelarAudio.current?.(); callar(); }, []);

  if (!entrada) return null;

  function validar() {
    if (golpes === 0) return;
    const bien = golpes === silabas.length;
    registrar(entrada.palabra, bien);
    if (bien) {
      setAcerto(true);
      setFase("resuelta");
      if (limpio) setMarcador((m) => ({ ...m, aciertos: m.aciertos + 1 }));
      // La palabra se abre en sílabas y se lee golpe por golpe: es el momento
      // en que ve y oye al mismo tiempo lo que acaba de contar.
      cancelarAudio.current = decirSilabas(silabas, {
        voz, onSilaba: setSilabaViva,
      });
    } else {
      setMarcador((m) => ({ ...m, errores: m.errores + 1 }));
      setLimpio(false);
      setGolpes(0);
      ayuda.fallo();
    }
  }

  function siguiente() {
    cancelarAudio.current?.();
    setSilabaViva(-1);
    ayuda.reiniciar();
    setGolpes(0);
    setAcerto(false);
    setLimpio(true);
    setFase("contando");
    if (i + 1 >= palabras.length) {
      setAnterior(cerrarRonda({ ...marcador, total: palabras.length }));
      setFase("fin");
    } else {
      setI(i + 1);
    }
  }

  if (fase === "fin") {
    return (
      <Cierre
        aciertos={marcador.aciertos}
        total={palabras.length}
        mensaje={compararConAnterior(marcador.aciertos, palabras.length, anterior)}
        onRepetir={() => {
          setMarcador({ aciertos: 0, errores: 0 });
          setPalabras(sortear()); setI(0); setFase("contando");
        }}
        onSalir={onSalir}
        etiquetaSalir={etiquetaSalir}
      />
    );
  }

  return (
    <div>
      <Cabecera
        titulo="Palmeo de sílabas"
        instruccion={hayVoz
          ? "Escucha la palabra y golpea una vez por cada pedazo que oigas."
          : "Di la palabra en voz alta y golpea una vez por cada pedazo que oigas."}
        ronda={i}
        total={palabras.length}
        derecha={<BotonAudio texto={entrada.palabra} tamano="chico" />}
      />

      <Panel estilo={{ textAlign: "center", padding: "28px 24px" }}>
        {fase === "resuelta" ? (
          <div style={{
            display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 10,
          }}>
            {silabas.map((s, k) => (
              <span key={k} style={{
                fontSize: "clamp(34px, 7vw, 62px)", fontWeight: 800, letterSpacing: ".01em",
                padding: "6px 18px", borderRadius: 12,
                background: silabaViva === k ? C.ambar : C.alto,
                color: silabaViva === k ? "#1a1205" : C.texto,
                border: `2px solid ${silabaViva === k ? C.ambar : C.borde}`,
                animation: `dec-entra .28s ease both`, animationDelay: `${k * 0.09}s`,
                transition: "background .12s ease, color .12s ease",
              }}>
                {s}
              </span>
            ))}
          </div>
        ) : (
          <div style={{
            fontSize: "clamp(38px, 8vw, 72px)", fontWeight: 800, color: C.texto,
            letterSpacing: ".02em", lineHeight: 1.1,
          }}>
            {entrada.palabra}
          </div>
        )}
      </Panel>

      {fase === "contando" ? (
        <>
          <div style={{
            display: "flex", alignItems: "center", gap: 18, marginTop: 18,
            flexWrap: "wrap",
          }}>
            <button
              type="button"
              onClick={() => setGolpes((g) => Math.min(9, g + 1))}
              style={{
                flex: "1 1 320px", minHeight: 132, borderRadius: 16,
                background: `linear-gradient(180deg, ${C.alto}, ${C.panel})`,
                border: `2px solid ${C.bordeVivo}`, color: C.texto,
                fontSize: 26, fontWeight: 800, letterSpacing: ".08em",
                textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit",
              }}
              onPointerDown={(e) => { e.currentTarget.style.borderColor = C.ambar; }}
              onPointerUp={(e) => { e.currentTarget.style.borderColor = C.bordeVivo; }}
              onPointerLeave={(e) => { e.currentTarget.style.borderColor = C.bordeVivo; }}
            >
              Golpear
            </button>

            <div style={{ minWidth: 150, textAlign: "center" }}>
              <Rotulo>Golpes</Rotulo>
              <div style={{
                fontSize: 64, fontWeight: 800, color: golpes ? C.ambar : C.apagado,
                fontVariantNumeric: "tabular-nums", lineHeight: 1.1,
              }}>
                {golpes}
              </div>
              <Boton variante="fantasma" tamano="chico" onClick={() => setGolpes(0)}>
                Borrar
              </Boton>
            </div>
          </div>

          <div style={{ marginTop: 18, display: "flex", justifyContent: "flex-end" }}>
            <Boton onClick={validar} disabled={golpes === 0} tamano="grande">
              Listo
            </Boton>
          </div>

          <Ayuda
            nivel={ayuda.nivel}
            pista={`Empieza por «${silabas[0]}». Dila y sigue desde ahí.`}
            solucion={`Son ${silabas.length}: ${silabas.join(" · ")}`}
          />
        </>
      ) : (
        <div style={{ marginTop: 18 }}>
          {acerto && entrada.dato && (
            <p style={{
              color: C.tenue, fontSize: 17, lineHeight: 1.5, margin: "0 0 16px",
              maxWidth: "70ch",
            }}>
              {entrada.dato}
            </p>
          )}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Boton onClick={siguiente} tamano="grande">
              {i + 1 >= palabras.length ? "Terminar" : "Siguiente"}
            </Boton>
          </div>
        </div>
      )}
    </div>
  );
}
