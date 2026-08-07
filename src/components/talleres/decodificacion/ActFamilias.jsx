// Actividad 3 — Familias de palabras (discriminación fina).
//
// Esta es la actividad que ataca el problema de raíz. El alumno adivina
// palabras por su forma general; aquí las cuatro opciones TIENEN la misma
// forma general —piso, pisa, pista, pistón— así que la silueta no le sirve de
// nada. La única salida es recorrer la palabra letra por letra.
//
// Por eso los distractores nunca son palabras distintas: si pusiéramos
// "pistón / elefante / mesa / río", acertaría sin leer y el ejercicio mediría
// exactamente lo contrario de lo que quiere medir.
import { useEffect, useMemo, useRef, useState } from "react";
import { decir, callar } from "./lib/voz.js";
import { silabificar } from "./lib/silabas.js";
import { tomar, barajar } from "./lib/texto.js";
import { C } from "./estilo.js";
import { useAyuda, useVozActiva, compararConAnterior } from "./hooks.js";
import { Boton, Panel, Rotulo, BotonAudio, Cabecera, Ayuda, Cierre } from "./ui.jsx";

const RONDAS = 8;
const DESTELLO = 1500; // ms que se ve la palabra cuando no hay voz

export default function ActFamilias({ banco, registrar, cerrarRonda, onSalir, etiquetaSalir }) {
  const { voz, hayVoz } = useVozActiva();
  const sortear = () => tomar(banco.familias, Math.min(RONDAS, banco.familias.length));
  const [familias, setFamilias] = useState(sortear);

  const [i, setI] = useState(0);
  const [elegida, setElegida] = useState(null);
  const [resuelta, setResuelta] = useState(false);
  const [destellando, setDestellando] = useState(false);
  const [limpio, setLimpio] = useState(true);   // sin reintentos en esta palabra
  const [marcador, setMarcador] = useState({ aciertos: 0, errores: 0 });
  const [anterior, setAnterior] = useState(null);
  const ayuda = useAyuda();
  const destello = useRef(null);

  const familia = familias[i];
  const opciones = useMemo(
    () => (familia ? barajar(familia.opciones) : []),
    [familia]
  );

  // Sin voz en el dispositivo el ejercicio seguiría teniendo sentido, pero no
  // se puede "escuchar" la palabra: se enseña un instante y se esconde. Lo
  // que se entrena entonces es la memoria visual precisa, que sirve igual.
  function presentar() {
    if (hayVoz) {
      decir(familia.objetivo, { voz, velocidad: 0.85 });
    } else {
      clearTimeout(destello.current);
      setDestellando(true);
      destello.current = setTimeout(() => setDestellando(false), DESTELLO);
    }
  }

  useEffect(() => {
    if (!familia) return;
    const t = setTimeout(presentar, 300);
    return () => { clearTimeout(t); callar(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [familia, voz, hayVoz]);

  useEffect(() => () => { clearTimeout(destello.current); callar(); }, []);

  if (!familia) return null;

  function elegir(palabra) {
    if (resuelta) return;
    const bien = palabra === familia.objetivo;
    setElegida(palabra);
    registrar(familia.objetivo, bien);
    if (bien) {
      if (limpio) setMarcador((m) => ({ ...m, aciertos: m.aciertos + 1 }));
      setResuelta(true);
    } else {
      setMarcador((m) => ({ ...m, errores: m.errores + 1 }));
      setLimpio(false);
      ayuda.fallo();
      // No se revela la correcta: se vuelve a decir para que la compare otra
      // vez contra las cuatro. Enseñarla aquí sería regalarle la lectura.
      setTimeout(() => { setElegida(null); presentar(); }, 900);
    }
  }

  function siguiente() {
    ayuda.reiniciar();
    setElegida(null);
    setResuelta(false);
    setLimpio(true);
    if (i + 1 >= familias.length) {
      setAnterior(cerrarRonda({ ...marcador, total: familias.length }));
      setI(familias.length);
    } else {
      setI(i + 1);
    }
  }

  if (i >= familias.length) {
    return (
      <Cierre
        aciertos={marcador.aciertos}
        total={familias.length}
        mensaje={compararConAnterior(marcador.aciertos, familias.length, anterior)}
        onRepetir={() => {
          setMarcador({ aciertos: 0, errores: 0 });
          setFamilias(sortear()); setI(0);
        }}
        onSalir={onSalir}
        etiquetaSalir={etiquetaSalir}
      />
    );
  }

  const primeraSilaba = silabificar(familia.objetivo)[0];

  return (
    <div>
      <Cabecera
        titulo="Familias de palabras"
        instruccion={hayVoz
          ? "Escucha con cuidado y toca la palabra que oíste. Se parecen mucho."
          : "Fíjate bien en la palabra que aparece y luego tócala en la lista."}
        ronda={i}
        total={familias.length}
        derecha={hayVoz
          ? <BotonAudio texto={familia.objetivo} tamano="chico" etiqueta="Repetir" velocidad={0.85} />
          : <Boton variante="neutro" tamano="chico" onClick={presentar}>Verla otra vez</Boton>}
      />

      {!hayVoz && (
        <Panel estilo={{ textAlign: "center", padding: "22px 20px", marginBottom: 18 }}>
          {/* La palabra sale del DOM al esconderse, no se vuelve transparente:
              en transparente bastaría con seleccionar el texto para verla. */}
          <div style={{
            fontSize: "clamp(34px, 6vw, 56px)", fontWeight: 800, minHeight: 66,
            color: C.texto, letterSpacing: ".02em",
          }}>
            {destellando ? familia.objetivo : ""}
          </div>
        </Panel>
      )}

      <div style={{
        display: "grid", gap: 14,
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      }}>
        {opciones.map((op) => {
          const esElegida = elegida === op;
          const correcta = resuelta && op === familia.objetivo;
          const mala = esElegida && !correcta && !resuelta;
          return (
            <button
              key={op}
              type="button"
              onClick={() => elegir(op)}
              disabled={resuelta && !correcta}
              style={{
                minHeight: 96, borderRadius: 14, fontFamily: "inherit",
                fontSize: "clamp(26px, 3.6vw, 38px)", fontWeight: 800, letterSpacing: ".01em",
                background: correcta ? "rgba(63,191,111,.15)" : mala ? "rgba(224,75,60,.15)" : C.panel,
                color: correcta ? C.verde : mala ? C.rojo : C.texto,
                border: `2px solid ${correcta ? C.verde : mala ? C.rojo : C.borde}`,
                cursor: resuelta ? "default" : "pointer",
                opacity: resuelta && !correcta ? 0.35 : 1,
                animation: mala ? "dec-tiembla .3s" : undefined,
                transition: "opacity .2s ease",
              }}
            >
              {op}
            </button>
          );
        })}
      </div>

      {resuelta ? (
        <div style={{ marginTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <Rotulo color={C.verde}>Esa era</Rotulo>
          <Boton onClick={siguiente} tamano="grande">
            {i + 1 >= familias.length ? "Terminar" : "Siguiente"}
          </Boton>
        </div>
      ) : (
        <Ayuda
          nivel={ayuda.nivel}
          pista={`Empieza con «${primeraSilaba}…». Descarta las que no.`}
          solucion={`Era «${familia.objetivo}». Léela despacio y busca en qué se diferencia de las otras tres.`}
        />
      )}
    </div>
  );
}
