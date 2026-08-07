// Actividad 2 — Armar con sílabas.
//
// El paso siguiente al palmeo: ya no basta contar los pedazos, hay que
// ponerlos en orden. Aquí se ataca el salto y la inversión de sílabas, que es
// justo lo que hace que "pistón" le salga "pitón" o "pinstó".
//
// Se toca, no se arrastra. El arrastre en tablet proyectada falla seguido y
// convierte un ejercicio de lectura en uno de puntería.
import { useEffect, useMemo, useRef, useState } from "react";
import { silabasDe } from "./lib/silabas.js";
import { decir, decirSilabas, callar } from "./lib/voz.js";
import { tomar, barajar } from "./lib/texto.js";
import { C } from "./estilo.js";
import { useAyuda, useVozActiva, compararConAnterior } from "./hooks.js";
import { Boton, Panel, BotonAudio, Cabecera, Ayuda, Cierre } from "./ui.jsx";

const RONDAS = 6;

export default function ActArmar({ banco, registrar, cerrarRonda, onSalir, etiquetaSalir }) {
  const { voz, hayVoz } = useVozActiva();
  // Tres sílabas o más: con dos, ordenar es una moneda al aire.
  const sortear = () => {
    const largas = banco.palabras.filter((p) => silabasDe(p).length >= 3);
    const fuente = largas.length >= RONDAS ? largas : banco.palabras;
    return tomar(fuente.filter((p) => silabasDe(p).length >= 2), RONDAS);
  };
  const [palabras, setPalabras] = useState(sortear);

  const [i, setI] = useState(0);
  const [puestas, setPuestas] = useState([]);   // índices dentro de `fichas`
  const [fase, setFase] = useState("armando"); // armando · resuelta
  const [silabaViva, setSilabaViva] = useState(-1);
  const [limpio, setLimpio] = useState(true);   // sin reintentos en esta palabra
  const [marcador, setMarcador] = useState({ aciertos: 0, errores: 0 });
  const [anterior, setAnterior] = useState(null);
  const ayuda = useAyuda();
  const cancelarAudio = useRef(() => {});

  const entrada = palabras[i];
  const silabas = useMemo(() => (entrada ? silabasDe(entrada) : []), [entrada]);
  // Las fichas se barajan una vez por palabra, no en cada render.
  const fichas = useMemo(
    () => barajar(silabas.map((s, k) => ({ s, k }))),
    [silabas]
  );

  // Se dice la palabra al entrar a cada ronda: primero el sonido completo,
  // después él la reconstruye por escrito. Ese es el orden que entrena.
  useEffect(() => {
    if (!entrada || !hayVoz) return;
    const t = setTimeout(() => decir(entrada.palabra, { voz, velocidad: 0.85 }), 250);
    return () => { clearTimeout(t); callar(); };
  }, [entrada, voz, hayVoz]);

  useEffect(() => () => { cancelarAudio.current?.(); callar(); }, []);

  if (!entrada) return null;

  const completo = puestas.length === silabas.length;
  const armada = puestas.map((p) => fichas[p].s).join("");

  function poner(idx) {
    if (fase !== "armando" || puestas.includes(idx)) return;
    const nuevas = [...puestas, idx];
    setPuestas(nuevas);
    if (nuevas.length === silabas.length) validar(nuevas);
  }

  function quitar(pos) {
    if (fase !== "armando") return;
    setPuestas(puestas.filter((_, k) => k !== pos));
  }

  function validar(nuevas) {
    const intento = nuevas.map((p) => fichas[p].s).join("");
    const bien = intento === silabas.join("");
    registrar(entrada.palabra, bien);
    if (bien) {
      if (limpio) setMarcador((m) => ({ ...m, aciertos: m.aciertos + 1 }));
      setFase("resuelta");
      cancelarAudio.current = decirSilabas(silabas, { voz, onSilaba: setSilabaViva });
    } else {
      setMarcador((m) => ({ ...m, errores: m.errores + 1 }));
      setLimpio(false);
      ayuda.fallo();
      // Se devuelven las fichas tras un instante: hay que dejar ver el
      // intento equivocado antes de borrarlo, o no se aprende nada de él.
      setTimeout(() => setPuestas([]), 700);
    }
  }

  function siguiente() {
    cancelarAudio.current?.();
    setSilabaViva(-1);
    ayuda.reiniciar();
    setPuestas([]);
    setLimpio(true);
    setFase("armando");
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
          setPalabras(sortear()); setI(0); setFase("armando");
        }}
        onSalir={onSalir}
        etiquetaSalir={etiquetaSalir}
      />
    );
  }

  const falla = completo && fase === "armando";

  return (
    <div>
      <Cabecera
        titulo="Armar con sílabas"
        instruccion={hayVoz
          ? "Escucha la palabra y arma sus sílabas en orden."
          : "Arma la palabra poniendo sus sílabas en orden."}
        ronda={i}
        total={palabras.length}
        derecha={<BotonAudio texto={entrada.palabra} tamano="chico" velocidad={0.85} />}
      />

      {/* Ranuras */}
      <Panel estilo={{ padding: "26px 22px" }}>
        <div style={{
          display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap",
          minHeight: 92, alignItems: "center",
        }}>
          {silabas.map((_, pos) => {
            const puesta = puestas[pos];
            const llena = puesta !== undefined;
            const viva = fase === "resuelta" && silabaViva === pos;
            return (
              <button
                key={pos}
                type="button"
                onClick={() => llena && quitar(pos)}
                style={{
                  minWidth: 108, minHeight: 84, borderRadius: 12, cursor: llena ? "pointer" : "default",
                  fontFamily: "inherit", fontSize: "clamp(28px, 4.5vw, 44px)", fontWeight: 800,
                  background: viva ? C.ambar : llena ? C.alto : "transparent",
                  color: viva ? "#1a1205" : llena ? C.texto : C.apagado,
                  border: `2px ${llena ? "solid" : "dashed"} ${
                    falla ? C.rojo : viva ? C.ambar : llena ? C.bordeVivo : C.borde
                  }`,
                  transition: "background .12s ease, border-color .12s ease",
                  animation: falla ? "dec-tiembla .3s" : undefined,
                }}
              >
                {llena ? fichas[puesta].s : ""}
              </button>
            );
          })}
        </div>

        {fase === "resuelta" && (
          <p style={{
            textAlign: "center", color: C.verde, fontSize: 18, fontWeight: 700,
            margin: "18px 0 0",
          }}>
            {armada}
          </p>
        )}
      </Panel>

      {/* Fichas disponibles */}
      {fase === "armando" && (
        <div style={{
          display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap",
          marginTop: 20,
        }}>
          {fichas.map((f, idx) => {
            const usada = puestas.includes(idx);
            return (
              <button
                key={idx}
                type="button"
                onClick={() => poner(idx)}
                disabled={usada}
                style={{
                  minWidth: 108, minHeight: 76, borderRadius: 12,
                  fontFamily: "inherit", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800,
                  background: usada ? "transparent" : `linear-gradient(180deg, ${C.alto}, ${C.panel})`,
                  color: usada ? "transparent" : C.texto,
                  border: `2px solid ${usada ? C.borde : C.bordeVivo}`,
                  opacity: usada ? 0.25 : 1, cursor: usada ? "default" : "pointer",
                }}
              >
                {f.s}
              </button>
            );
          })}
        </div>
      )}

      {fase === "armando" ? (
        <Ayuda
          nivel={ayuda.nivel}
          pista={`Empieza con «${silabas[0]}».`}
          solucion={`Va así: ${silabas.join(" · ")}`}
        />
      ) : (
        <div style={{ marginTop: 18 }}>
          {entrada.dato && (
            <p style={{ color: C.tenue, fontSize: 17, lineHeight: 1.5, margin: "0 0 16px", maxWidth: "70ch" }}>
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
