// Sala 2 · El Dual. Es la sala por la que existe el taller.
//
// Cinco pasos, y la clase entera está en el orden: el sólido → un punto en el
// centro de cada cara → se unen los puntos vecinos → las varillas cierran
// caras → se saca y se compara. Nada de "el dual del cubo es el octaedro": el
// octaedro **aparece**, y aparece adentro del cubo, tocándole las caras.
//
// Dos decisiones que importan:
//
//   · Se avanza **paso a paso, a mano**. Una animación que corre sola se ve
//     bonita y no se entiende: el maestro necesita parar en el paso 2 y
//     preguntar "¿cuántas varillas van a salir?" antes de tocar Siguiente.
//     El botón de correrlo todo seguido está, pero no es lo que trae puesto.
//
//   · El dual no está tecleado. Sale de `dual(geometría)`, que es literalmente
//     "pon un punto en el centro de cada cara y vuelve a armar". El dibujo no
//     puede contradecir a la frase porque el dibujo *es* la frase.
//
// Al terminar, el botón ofrece repetirlo sobre el que quedó: de ahí sale que el
// dual del dual es el de partida, y que por eso vienen en parejas.
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  SOLIDOS, SOLIDOS_POR_ID, dual, frasePasoSiguiente, normalizado, pasosDual,
} from "../../../data/talleres/solidos-platonicos/index.js";
import { Boton, Rotulo } from "../comun/ui.jsx";
import { C, ELEMENTO, FONDO_3D, TAM } from "./estilo.js";
import {
  acercar, crearVisor, grupoAristas, grupoCaras, grupoEsferas, liberar, opacidad, recorte, suave,
} from "./lib/escena.js";

const PASOS = 5;                    // 0..4; el avance vive en [0, 4]
const VELOCIDAD = 1.7;              // pasos por segundo al animar la transición

// Las piezas no aparecen todas de golpe: se escalonan para que se pueda ver
// que son 20 y no una mancha que crece. Devuelve el avance de la pieza `i`.
function escalonado(t, i, total, solape = 0.55) {
  const paso = (1 - solape) / Math.max(1, total - 1);
  return suave(recorte(t, i * paso, i * paso + solape));
}

// Fila de la tabla de números. La columna del dual se va llenando conforme la
// animación va produciendo cada cosa: los vértices en el paso 1, las aristas en
// el 2 y las caras en el 3.
function Fila({ etiqueta, color, izq, der, visible, resaltada }) {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: 10,
      padding: "9px 12px", borderRadius: 10,
      background: resaltada ? `${color}1c` : "transparent",
      border: `1px solid ${resaltada ? `${color}66` : "transparent"}`,
    }}>
      <div style={{ fontSize: 30, fontWeight: 800, textAlign: "right", color: C.texto, fontVariantNumeric: "tabular-nums" }}>
        {izq}
      </div>
      <div style={{
        fontSize: 12, fontWeight: 800, letterSpacing: ".07em", textTransform: "uppercase",
        color: resaltada ? color : C.apagado, minWidth: 74, textAlign: "center",
      }}>
        {etiqueta}
      </div>
      <div style={{
        fontSize: 30, fontWeight: 800, color, fontVariantNumeric: "tabular-nums",
        opacity: visible ? 1 : 0.13, transition: "opacity .35s ease",
      }}>
        {visible ? der : "·"}
      </div>
    </div>
  );
}

export default function Dualidad({ solidoId, onElegir }) {
  const [paso, setPaso] = useState(0);
  // El sólido de partida puede ser uno de los cinco o el dual que acaba de
  // salir; en el segundo caso se guarda su geometría ya calculada para que no
  // haya ni un brinco entre "creció hasta radio 1" y "ahora empezamos de nuevo".
  const [origen, setOrigen] = useState(() => ({ id: solidoId, geometria: null }));

  useEffect(() => { setOrigen({ id: solidoId, geometria: null }); setPaso(0); }, [solidoId]);

  const s = SOLIDOS_POR_ID[origen.id];
  const d = SOLIDOS_POR_ID[s.dual];
  const geometria = origen.geometria || s.geometria;
  const geoDual = useMemo(() => dual(geometria), [geometria]);
  const pasos = useMemo(() => pasosDual(s.id), [s.id]);
  const guion = pasos[paso];

  const caja = useRef(null);
  const visor = useRef(null);
  const partes = useRef(null);
  const destino = useRef(0);
  destino.current = paso;

  // ── La escena, una sola vez ───────────────────────────────────────────────
  useEffect(() => {
    const v = crearVisor(caja.current, { girar: true, fondo: FONDO_3D, distancia: 3.9 });
    visor.current = v;
    let avance = 0;

    v.cada((dt) => {
      const p = partes.current;
      if (!p) return;
      avance = acercar(avance, destino.current, dt, VELOCIDAD * 2.6);

      const puntos = suave(recorte(avance, 0, 1));      // paso 1: los centros
      const varillas = suave(recorte(avance, 1, 2));    // paso 2: las aristas del dual
      const caras = suave(recorte(avance, 2, 3));       // paso 3: las caras del dual
      const fuera = suave(recorte(avance, 3, 4));       // paso 4: crece y se va el original

      // El original se vuelve fantasma en cuanto empieza a salir el dual, y se
      // apaga del todo al final. Sus aristas aguantan más: son las que dejan
      // ver dónde estaba.
      opacidad(p.caras, (1 - 0.72 * varillas) * (1 - fuera));
      opacidad(p.aristas, 1 - 0.92 * fuera);

      // El dual crece desde los centros de las caras (k = 1) hasta el mismo
      // radio que tenía el original (k = 1 / inradio). Las varillas y las
      // bolitas se reposicionan a mano en vez de escalar el grupo: si escalara
      // el grupo, engordarían, y una varilla tres veces más gorda ya no es una
      // arista, es un tronco.
      const k = 1 + (1 / p.inradio - 1) * fuera;

      p.puntos.children.forEach((bola, i) => {
        bola.position.copy(bola.userData.base).multiplyScalar(k);
        bola.scale.setScalar(escalonado(puntos, i, p.puntos.children.length) * 0.999 + 0.001);
      });
      opacidad(p.puntos, puntos > 0.01 ? 1 : 0);

      p.dualAristas.children.forEach((barra, i) => {
        const crecer = escalonado(varillas, i, p.dualAristas.children.length);
        barra.position.copy(barra.userData.base).multiplyScalar(k);
        barra.scale.set(1, Math.max(0.0001, barra.userData.largo * k * crecer), 1);
      });
      opacidad(p.dualAristas, varillas > 0.01 ? 1 : 0);

      p.dualCaras.scale.setScalar(k);
      opacidad(p.dualCaras, caras);
    });

    return () => { v.destruir(); visor.current = null; partes.current = null; };
  }, []);

  // ── Las piezas, cada vez que cambia el sólido de partida ──────────────────
  useEffect(() => {
    const v = visor.current;
    if (!v) return;

    const nuevas = {
      caras: grupoCaras(geometria, { color: s.color, transparente: true }),
      aristas: grupoAristas(geometria, { color: ELEMENTO.arista, radio: 0.017 }),
      puntos: grupoEsferas(geoDual.vertices, { color: ELEMENTO.vertice, radio: 0.055 }),
      dualAristas: grupoAristas(geoDual, { color: d.color, radio: 0.021 }),
      dualCaras: grupoCaras(geoDual, { color: d.color, transparente: true }),
      inradio: geometria.inradio,
    };

    // Posición y largo de origen: el bucle los multiplica por k al crecer.
    nuevas.puntos.children.forEach((b) => { b.userData.base = b.position.clone(); });
    nuevas.dualAristas.children.forEach((b) => {
      b.userData.base = b.position.clone();
      b.userData.largo = b.scale.y;
    });

    const orden = [nuevas.caras, nuevas.aristas, nuevas.puntos, nuevas.dualAristas, nuevas.dualCaras];
    orden.forEach((g) => { opacidad(g, 0); v.escena.add(g); });
    // El fantasma del original se dibuja al final: así se ve *a través* de él
    // lo que lleva dentro. El orden va objeto por objeto porque three no lo
    // hereda del grupo.
    nuevas.caras.traverse((o) => { o.renderOrder = 2; });

    const viejas = partes.current;
    partes.current = nuevas;
    if (viejas) [viejas.caras, viejas.aristas, viejas.puntos, viejas.dualAristas, viejas.dualCaras].forEach(liberar);
  }, [geometria, geoDual, s.color, d.color]);

  // ── Controles ─────────────────────────────────────────────────────────────
  const seguir = useCallback(() => setPaso((p) => Math.min(PASOS - 1, p + 1)), []);
  const atras = useCallback(() => setPaso((p) => Math.max(0, p - 1)), []);

  // Correrlo todo seguido: un paso cada tanto hasta el final.
  const [corriendo, setCorriendo] = useState(false);
  useEffect(() => {
    if (!corriendo) return undefined;
    if (paso >= PASOS - 1) { setCorriendo(false); return undefined; }
    const t = setTimeout(seguir, 2600);
    return () => clearTimeout(t);
  }, [corriendo, paso, seguir]);

  // Repetir la operación sobre el dual que quedó en pantalla. Su geometría se
  // reusa llevada a radio 1, que es exactamente el tamaño con el que terminó de
  // crecer: la figura no se mueve ni un pixel al cambiar de sólido.
  const seguirConElDual = useCallback(() => {
    setOrigen({ id: d.id, geometria: normalizado(geoDual, 1) });
    setPaso(0);
  }, [d.id, geoDual]);

  // Elegir del selector reinicia siempre, incluso si el id de arriba no cambia:
  // después de encadenar duales, el que está en pantalla ya no es `solidoId`.
  const elegir = useCallback((id) => {
    setOrigen({ id, geometria: null });
    setPaso(0);
    onElegir(id);
  }, [onElegir]);

  const final = paso === PASOS - 1;

  return (
    <div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
        {SOLIDOS.map((x) => {
          const activo = x.id === s.id;
          return (
            <button
              key={x.id}
              type="button"
              onClick={() => elegir(x.id)}
              style={{
                flex: "1 1 130px", cursor: "pointer", fontFamily: "inherit", minHeight: 44,
                background: activo ? `${x.color}1c` : C.panel,
                border: `2px solid ${activo ? x.color : C.borde}`,
                borderRadius: 12, padding: "10px 12px",
                fontSize: 16, fontWeight: 800, color: activo ? x.color : C.tenue,
              }}
            >
              {x.nombre}
            </button>
          );
        })}
      </div>

      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))" }}>
        <div ref={caja} style={{
          height: 430, borderRadius: 16, overflow: "hidden",
          background: FONDO_3D, border: `1px solid ${C.borde}`, cursor: "grab",
        }} />

        <div>
          {/* El guion del paso. Es lo que el maestro va leyendo. */}
          <div style={{
            background: C.panel, border: `2px solid ${C.borde}`, borderRadius: 16,
            padding: "18px 20px", minHeight: 196,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <Rotulo color={C.morado}>Paso {paso + 1} de {PASOS}</Rotulo>
              <div style={{ display: "flex", gap: 5 }}>
                {Array.from({ length: PASOS }, (_, i) => (
                  <span key={i} style={{
                    width: 20, height: 7, borderRadius: 3,
                    background: i <= paso ? C.morado : C.borde,
                  }} />
                ))}
              </div>
            </div>
            <h3 style={{ fontSize: TAM.enunciado, fontWeight: 800, margin: "0 0 8px", lineHeight: 1.2 }}>
              {guion.titulo}
            </h3>
            <p style={{ margin: 0, fontSize: 17, color: C.tenue, lineHeight: 1.5 }}>
              {guion.texto}
            </p>
          </div>

          {/* Los números, uno frente al otro. Es donde se ve el intercambio. */}
          <div style={{
            background: C.panel, border: `1px solid ${C.borde}`, borderRadius: 16,
            padding: "12px 14px", marginTop: 12,
          }}>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 10,
              fontSize: 12.5, fontWeight: 800, letterSpacing: ".07em", textTransform: "uppercase",
              color: C.apagado, padding: "0 12px 6px", textAlign: "center",
            }}>
              <span style={{ textAlign: "right", color: s.color }}>{s.nombre}</span>
              <span style={{ minWidth: 74 }} />
              <span style={{ textAlign: "left", color: d.color }}>su dual</span>
            </div>
            <Fila etiqueta="caras" color={d.color} izq={geometria.caras.length}
              der={geoDual.caras.length} visible={paso >= 3} resaltada={guion.resalta === "caras"} />
            <Fila etiqueta="aristas" color={d.color} izq={geometria.aristas.length}
              der={geoDual.aristas.length} visible={paso >= 2} resaltada={guion.resalta === "aristas"} />
            <Fila etiqueta="vértices" color={d.color} izq={geometria.vertices.length}
              der={geoDual.vertices.length} visible={paso >= 1} resaltada={guion.resalta === "vertices"} />
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
            <Boton variante="fantasma" tamano="chico" onClick={atras} disabled={paso === 0}>
              ◀ Atrás
            </Boton>
            {!final ? (
              <>
                <Boton color={C.morado} onClick={() => { setCorriendo(false); seguir(); }}>
                  Siguiente ▶
                </Boton>
                <Boton variante="neutro" tamano="chico" onClick={() => setCorriendo((r) => !r)}>
                  {corriendo ? "❚❚ Pausa" : "▶ Todo seguido"}
                </Boton>
              </>
            ) : (
              <>
                <Boton color={d.color} onClick={seguirConElDual}>
                  {frasePasoSiguiente(d.id)} ↻
                </Boton>
                <Boton variante="neutro" tamano="chico" onClick={() => setPaso(0)}>
                  ⟲ Otra vez
                </Boton>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
