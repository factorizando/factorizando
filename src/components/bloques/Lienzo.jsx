// La diapositiva componible: encabezado + bloques sobre una rejilla de 12.
//
// Adaptación híbrida (docs/DISENO.md §2.6). De 768 px en adelante la diapositiva
// es un lienzo fijo de 1280 × 720 que se escala entero: lo que se diseña es lo
// que se proyecta, y el texto no cambia de tamaño relativo entre el proyector y
// la laptop. Por debajo deja de escalar y los bloques reflujan a una columna,
// porque un teléfono acostado deja unos 263 px de alto útil y ahí un lienzo
// escalado daría cuerpo de 7 px.
import { useEffect, useRef, useState } from "react";
import { BLOQUES } from "./index.js";
import { columnas, oculto, titulo as estiloTitulo } from "./ui.js";

const ANCHO = 1280;
const ALTO = 720;
const UMBRAL = 768;

function useEscala(ref, activo) {
  const [escala, setEscala] = useState(1);
  useEffect(() => {
    if (!activo || !ref.current) { setEscala(1); return; }
    const el = ref.current;
    const medir = () => {
      const { width, height } = el.getBoundingClientRect();
      if (!width || !height) return;
      setEscala(Math.min(width / ANCHO, height / ALTO));
    };
    medir();
    const ro = new ResizeObserver(medir);
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref, activo]);
  return escala;
}

function Bloque({ bloque, tema, reflujo, contexto, orden, revelados }) {
  const Componente = BLOQUES[bloque.tipo];
  if (!Componente) {
    if (import.meta.env.DEV) console.warn(`[lienzo] bloque sin registrar: "${bloque.tipo}"`);
    return null;
  }
  // `revelar` oculta el bloque hasta que el profesor avanza. Sin esto el alumno
  // lee la respuesta antes de que se le pregunte. `orden` es su posición entre
  // los bloques que se revelan, no entre todos: intercalar un bloque normal no
  // debe descolocar la cuenta.
  const escondido = bloque.revelar && orden > revelados;
  return (
    <div style={{ ...columnas(bloque.ancho, reflujo), ...(escondido ? oculto : null), transition: "opacity 0.25s ease" }}>
      <Componente bloque={bloque} tema={tema} reflujo={reflujo} {...contexto} />
    </div>
  );
}

export default function Lienzo({ slide, tema, modo, respuestaDada, onResponder, votos, totalVotos, revelados = Infinity }) {
  const cajaRef = useRef(null);
  const [ancho, setAncho] = useState(() => (typeof window === "undefined" ? 1280 : window.innerWidth));

  useEffect(() => {
    const alCambiar = () => setAncho(window.innerWidth);
    window.addEventListener("resize", alCambiar);
    return () => window.removeEventListener("resize", alCambiar);
  }, []);

  const reflujo = ancho < UMBRAL;
  const escala = useEscala(cajaRef, !reflujo);
  const contexto = { respuestaDada, onResponder, votos, totalVotos, modo };

  const contenido = (
    <>
      {(slide.etiqueta || slide.titulo) && (
        <div style={{ gridColumn: "1 / -1" }}>
          {slide.etiqueta && (
            <div style={{ fontFamily: tema.mono, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: tema.acento, marginBottom: 7 }}>
              {slide.etiqueta}
            </div>
          )}
          {slide.titulo && <h2 style={estiloTitulo(tema, reflujo ? 21 : 34)}>{slide.titulo}</h2>}
        </div>
      )}
      {(() => {
        let orden = -1;
        return (slide.bloques || []).map((b, i) => {
          if (b.revelar) orden += 1;
          return (
            <Bloque key={i} bloque={b} tema={tema} reflujo={reflujo}
              contexto={contexto} orden={orden} revelados={revelados} />
          );
        });
      })()}

      {/* El guion del profesor. Solo en modo director: es lo que dice en voz alta
          mientras el grupo mira la diapositiva, así que el alumno no debe verlo. */}
      {modo === "director" && slide.notas && (
        <div style={{
          gridColumn: "1 / -1", marginTop: "auto",
          borderTop: `1px dashed ${tema.borderFuerte}`, paddingTop: 12,
          display: "flex", gap: 12, alignItems: "flex-start",
        }}>
          <span style={{ fontFamily: tema.mono, fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: tema.sub, flexShrink: 0, marginTop: 2 }}>
            Guion
          </span>
          <span style={{ fontSize: 14, lineHeight: 1.55, color: tema.muted }}>{slide.notas}</span>
        </div>
      )}
    </>
  );

  const rejilla = {
    display: "grid",
    gridTemplateColumns: reflujo ? "1fr" : "repeat(12, minmax(0, 1fr))",
    gap: reflujo ? 11 : 16,
    alignContent: "start",
  };

  if (reflujo) {
    return (
      <div style={{ ...rejilla, padding: "14px 16px", height: "100%", overflowY: "auto", boxSizing: "border-box" }}>
        {contenido}
      </div>
    );
  }

  return (
    <div ref={cajaRef} style={{ height: "100%", width: "100%", display: "grid", placeItems: "center", overflow: "hidden" }}>
      <div style={{
        width: ANCHO, height: ALTO,
        transform: `scale(${escala})`,
        transformOrigin: "center",
        flexShrink: 0,
        boxSizing: "border-box",
        padding: "26px 44px 22px",
        ...rejilla,
      }}>
        {contenido}
      </div>
    </div>
  );
}
