// Actividad 6 — Lectura repetida cronometrada.
//
// El núcleo del entrenamiento de fluidez, y la única actividad donde se ve la
// mejora con números. Tres pasadas sobre el MISMO texto:
//
//   1. Modelo — la app lee y resalta cada palabra; él sigue con la vista. Oye
//      cómo suena el texto bien leído antes de intentarlo.
//   2. Dueto — la app lee más despacio y él lee encima. La voz de la app lo
//      sostiene en las palabras donde se trabaría solo.
//   3. Solo — lee él y corre el cronómetro. Él lo detiene al terminar.
//
// El texto no rota hasta que se ha leído varias veces (META_REPETICIONES).
// Cambiarlo cada sesión destruiría la medición: la mejora que interesa es
// sobre el mismo texto, no sobre uno nuevo cada vez.
import { useEffect, useMemo, useRef, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LabelList, Cell,
} from "recharts";
import { decir, callar } from "./lib/voz.js";
import { partirEnPalabras } from "./lib/texto.js";
import { anotarLectura, historialLectura } from "./lib/registro.js";
import { META_REPETICIONES, claveLectura, elegirTexto } from "./lib/lecturas.js";
import { C } from "./estilo.js";
import { useVozActiva } from "./hooks.js";
import { Boton, Panel, Rotulo, Cabecera } from "./ui.jsx";

// `sinVoz` es la misma pasada cuando la lee el maestro en lugar de la app:
// el ejercicio no cambia, cambia quién pone el modelo de lectura.
const PASADAS = [
  { id: "modelo", nombre: "Pasada 1 · Escucha", velocidad: 0.92,
    instruccion: "La app lee en voz alta. Tú sigue las palabras con la vista, sin leer todavía.",
    sinVoz: "Escucha al maestro leer y sigue las palabras con la vista, sin leer todavía." },
  { id: "dueto", nombre: "Pasada 2 · A dueto", velocidad: 0.7,
    instruccion: "Ahora lee al mismo tiempo que la app. Va más despacio para que la alcances.",
    sinVoz: "Ahora lee al mismo tiempo que el maestro, sin adelantarte ni quedarte atrás." },
  { id: "solo", nombre: "Pasada 3 · Tú solo", velocidad: null,
    instruccion: "Lee tú en voz alta. El cronómetro corre. Detenlo cuando termines." },
];

function reloj(ms) {
  const s = Math.floor(ms / 1000);
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}.${Math.floor((ms % 1000) / 100)}`;
}

export default function ActLectura({ banco, alumnoId, cerrarRonda, onSalir, etiquetaSalir, textoId }) {
  const { voz, hayVoz } = useVozActiva();

  const texto = useMemo(() => {
    if (textoId) return banco.textos.find((t) => t.id === textoId) || elegirTexto(banco, alumnoId);
    return elegirTexto(banco, alumnoId);
  }, [banco, alumnoId, textoId]);

  const claveTexto = claveLectura(banco, texto);
  const tokens = useMemo(() => partirEnPalabras(texto.cuerpo), [texto]);

  const [pasada, setPasada] = useState(0);
  const [leyendo, setLeyendo] = useState(false);
  const [resaltada, setResaltada] = useState(-1);
  const [arrancado, setArrancado] = useState(null);   // ms del inicio del cronómetro
  const [transcurrido, setTranscurrido] = useState(0);
  const [historial, setHistorial] = useState(() => historialLectura(alumnoId, claveTexto));
  const [terminado, setTerminado] = useState(false);

  const respaldo = useRef(null);      // temporizador de respaldo del resalte
  const esperaRespaldo = useRef(null);
  const huboBoundary = useRef(false);
  const tic = useRef(null);

  useEffect(() => () => {
    callar();
    clearInterval(respaldo.current);
    clearTimeout(esperaRespaldo.current);
    clearInterval(tic.current);
  }, []);

  // ── Pasadas con voz ─────────────────────────────────────────────────────
  function leerEnVoz(velocidad) {
    if (!hayVoz) return;
    setLeyendo(true);
    setResaltada(0);
    huboBoundary.current = false;

    // `onboundary` no lo emiten todas las voces. Si a los 900 ms no llegó
    // ninguno, el resalte avanza por tiempo estimado: vale más un resalte
    // aproximado que un texto muerto mientras la voz corre.
    clearInterval(respaldo.current);
    clearTimeout(esperaRespaldo.current);
    const msPorPalabra = 60000 / (165 * velocidad);
    esperaRespaldo.current = setTimeout(() => {
      if (huboBoundary.current) return;
      let k = 0;
      respaldo.current = setInterval(() => {
        k++;
        if (k >= tokens.length) { clearInterval(respaldo.current); return; }
        setResaltada(k);
      }, msPorPalabra);
    }, 900);

    decir(texto.cuerpo, {
      voz,
      velocidad,
      onPalabra: (charIndex) => {
        huboBoundary.current = true;
        clearInterval(respaldo.current);
        const k = tokens.findIndex((t) => charIndex >= t.inicio && charIndex < t.fin);
        if (k >= 0) setResaltada(k);
      },
      onFin: () => {
        clearInterval(respaldo.current);
        setLeyendo(false);
        setResaltada(-1);
      },
    });
  }

  function detenerVoz() {
    callar();
    clearInterval(respaldo.current);
    clearTimeout(esperaRespaldo.current);
    setLeyendo(false);
    setResaltada(-1);
  }

  // ── Cronómetro ──────────────────────────────────────────────────────────
  function arrancar() {
    const t0 = performance.now();
    setArrancado(t0);
    setTranscurrido(0);
    clearInterval(tic.current);
    tic.current = setInterval(() => setTranscurrido(performance.now() - t0), 100);
  }

  function detener() {
    clearInterval(tic.current);
    const segundos = (performance.now() - arrancado) / 1000;
    setArrancado(null);
    const nuevo = anotarLectura(alumnoId, claveTexto, { segundos, palabras: tokens.length });
    setHistorial(nuevo);
    setTerminado(true);
    // El expediente registra que hizo la lectura y de qué texto; el tiempo y
    // las palabras por minuto viven en el panel del profesor, porque
    // `taller_sesiones` solo tiene columnas de aciertos y errores.
    cerrarRonda({
      aciertos: PASADAS.length, errores: 0, total: PASADAS.length,
      etiqueta: `Lectura repetida · ${texto.titulo}`,
    });
  }

  const actual = PASADAS[pasada];
  const ultima = historial[historial.length - 1];
  const previa = historial[historial.length - 2];

  // ── Resultado ───────────────────────────────────────────────────────────
  if (terminado) {
    const datos = historial.map((h, k) => ({
      nombre: `${k + 1}ª`, ppm: h.ppm, segundos: Math.round(h.segundos), reciente: k === historial.length - 1,
    }));
    let mensaje;
    if (!previa) {
      mensaje = `Primera vez con este texto: ${Math.round(ultima.segundos)} segundos, ${ultima.ppm} palabras por minuto. Ese es tu punto de partida.`;
    } else if (ultima.segundos < previa.segundos) {
      const dif = (previa.segundos - ultima.segundos).toFixed(1);
      mensaje = `Leíste este texto ${dif} segundos más rápido que la vez pasada. Pasaste de ${previa.ppm} a ${ultima.ppm} palabras por minuto.`;
    } else if (Math.abs(ultima.segundos - previa.segundos) < 1) {
      mensaje = `Prácticamente el mismo tiempo que la vez pasada: ${ultima.ppm} palabras por minuto. Ya lo tienes parejo.`;
    } else {
      mensaje = `Hoy tardaste un poco más que la vez pasada (${previa.ppm} contra ${ultima.ppm} palabras por minuto). Pasa: el cansancio se nota. La marca buena sigue ahí.`;
    }
    const faltan = META_REPETICIONES - historial.length;

    return (
      <div>
        <Cabecera titulo={`Lectura repetida · ${texto.titulo}`} instruccion={mensaje} ronda={0} total={0} />

        <Panel>
          <Rotulo>Palabras por minuto en este texto</Rotulo>
          <div style={{ height: 240, marginTop: 16 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={datos} margin={{ top: 24, right: 8, left: -18, bottom: 4 }}>
                <CartesianGrid stroke={C.borde} vertical={false} />
                <XAxis dataKey="nombre" stroke={C.apagado} tick={{ fill: C.tenue, fontSize: 15, fontWeight: 700 }} tickLine={false} />
                <YAxis stroke={C.apagado} tick={{ fill: C.apagado, fontSize: 13 }} tickLine={false} axisLine={false} />
                <Bar dataKey="ppm" radius={[4, 4, 0, 0]} maxBarSize={64} isAnimationActive={false}>
                  {datos.map((d, k) => (
                    <Cell key={k} fill={d.reciente ? C.ambar : C.bordeVivo} />
                  ))}
                  <LabelList dataKey="ppm" position="top" fill={C.texto} fontSize={15} fontWeight={800} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p style={{ color: C.apagado, fontSize: 14.5, margin: "12px 0 0" }}>
            {faltan > 0
              ? `Este texto se repite ${faltan} ${faltan === 1 ? "vez" : "veces"} más antes de pasar al siguiente.`
              : "Este texto ya cumplió sus repeticiones. La próxima sesión toca uno nuevo."}
          </p>
        </Panel>

        <div style={{ marginTop: 20, display: "flex", gap: 12, justifyContent: "flex-end", flexWrap: "wrap" }}>
          <Boton variante="neutro" onClick={() => { setTerminado(false); setPasada(0); }}>
            Leerlo otra vez
          </Boton>
          <Boton onClick={onSalir} tamano="grande">{etiquetaSalir}</Boton>
        </div>
      </div>
    );
  }

  // ── Las tres pasadas ────────────────────────────────────────────────────
  return (
    <div>
      <Cabecera
        titulo={`${actual.nombre} · ${texto.titulo}`}
        instruccion={(!hayVoz && actual.sinVoz) || actual.instruccion}
        ronda={pasada}
        total={PASADAS.length}
      />

      <Panel estilo={{ padding: "30px 34px" }}>
        <p style={{
          margin: 0, fontSize: "clamp(21px, 2.7vw, 30px)", lineHeight: 2,
          color: C.texto, fontWeight: 500, letterSpacing: ".01em", maxWidth: "46ch",
        }}>
          {tokens.map((t, k) => (
            <span
              key={k}
              style={{
                background: resaltada === k ? C.ambar : "transparent",
                color: resaltada === k ? "#1a1205" : "inherit",
                borderRadius: 5, padding: "2px 3px",
                transition: "background .08s linear",
              }}
            >
              {t.texto}{" "}
            </span>
          ))}
        </p>
      </Panel>

      <div style={{
        marginTop: 20, display: "flex", alignItems: "center", gap: 14,
        justifyContent: "space-between", flexWrap: "wrap",
      }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          {actual.id !== "solo" ? (
            <>
              {/* Sin voz el botón de reproducir no se dibuja en vez de quedar
                  inerte: la pasada la lee el maestro y solo hay que avanzar. */}
              {hayVoz && (
                <Boton
                  onClick={() => (leyendo ? detenerVoz() : leerEnVoz(actual.velocidad))}
                  tamano="grande"
                >
                  {leyendo ? "Detener" : actual.id === "modelo" ? "Escuchar" : "Empezar el dueto"}
                </Boton>
              )}
              <Boton
                variante={hayVoz ? "fantasma" : "primario"}
                tamano={hayVoz ? "normal" : "grande"}
                onClick={() => { detenerVoz(); setPasada(pasada + 1); }}
              >
                Siguiente pasada
              </Boton>
            </>
          ) : arrancado === null ? (
            <Boton onClick={arrancar} tamano="grande">Empezar a leer</Boton>
          ) : (
            <Boton onClick={detener} tamano="grande">Terminé</Boton>
          )}
        </div>

        {actual.id === "solo" && (
          <div style={{ textAlign: "right", minWidth: 190 }}>
            <Rotulo>Cronómetro</Rotulo>
            <div style={{
              fontSize: 52, fontWeight: 800, color: arrancado ? C.ambar : C.apagado,
              fontVariantNumeric: "tabular-nums", lineHeight: 1.1,
            }}>
              {reloj(transcurrido)}
            </div>
            {ultima && (
              <div style={{ color: C.apagado, fontSize: 14 }}>
                Tu marca anterior: {Math.round(ultima.segundos)} s · {ultima.ppm} ppm
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
