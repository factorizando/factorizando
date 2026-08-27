// Vista de repaso autónomo: el alumno navega la presentación a su propio ritmo.
// No requiere sesión activa ni código. Respuestas se guardan solo localmente.
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BotonPantallaCompleta from "../components/BotonPantallaCompleta.jsx";
import { buscarPresentacion } from "../data/presentaciones/presentacionesIndex.js";
import { obtenerTema } from "../data/presentaciones/temas.jsx";
import SlideRenderer from "../components/SlideRenderer.jsx";
import { revelablesDe } from "../components/bloques/ui.js";

export default function PresentacionVer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const PRESENTACION = buscarPresentacion(id);
  const slides = PRESENTACION?.slides ?? [];

  // El esquema se recuerda entre sesiones: quien da clase en un salón con luz lo
  // pone en claro una vez y no vuelve a pensarlo.
  const [esquema, setEsquema] = useState(
    () => (typeof localStorage === "undefined" ? "oscuro" : localStorage.getItem("fx-esquema-presentacion") || "oscuro")
  );
  // El tema claro solo se ofrece si la presentación lo puede honrar. Los doce
  // tipos de diapositiva antiguos llevan 61 negros y blancos translúcidos cocidos
  // —una tabla con fondo oscuro sobre papel blanco— y tokenizarlos sería invertir
  // en código que la fase 4C sustituye. Los bloques nuevos no escriben ni un hex,
  // así que en cuanto una presentación se migra, el botón aparece solo.
  const admiteClaro = slides.length > 0 && slides.every((s) => s.tipo === "lienzo");
  const esquemaEfectivo = admiteClaro ? esquema : "oscuro";
  const tema = obtenerTema(PRESENTACION?.materia, esquemaEfectivo);

  function alternarEsquema() {
    setEsquema((e) => {
      const nuevo = e === "oscuro" ? "claro" : "oscuro";
      try { localStorage.setItem("fx-esquema-presentacion", nuevo); } catch { /* modo privado */ }
      return nuevo;
    });
  }

  const [slideIdx, setSlideIdx] = useState(0);
  const [respuestas, setRespuestas] = useState({});
  const [resaltado, setResaltado] = useState(null);
  // Cuántos bloques con `revelar` se han descubierto en la diapositiva actual.
  // -1 = ninguno todavía. Los bloques sin `revelar` no cuentan ni se ocultan.
  const [revelados, setRevelados] = useState(-1);

  const slide = slides[slideIdx];
  const [expandido, setExpandido] = useState({});
  const highlightInicialRef = useRef(null);
  const rootRef = useRef(null);



  // Nº de tarjetas navegables del slide según su tipo.
  // En concepto, el recuadro de fórmula cuenta como una tarjeta (índice 0).
  function numTarjetas(s) {
    if (!s) return 0;
    const svg = s.svgDiagram ? 1 : 0;
    if (s.tipo === "criterio_detalle") return 1 + svg + (s.por_que ? 1 : 0);
    if (Array.isArray(s.items)) return (s.formula ? 1 : 0) + svg + s.items.length;
    if (Array.isArray(s.bloques)) return s.bloques.length;
    if (Array.isArray(s.puntos)) return s.puntos.length;
    return 0;
  }
  // ¿La tarjeta de índice idx es desplegable? (solo los items de tipo concepto lo son;
  // se descuenta el desplazamiento de la fórmula y del diagrama).
  function tarjetaExpandible(s, idx) {
    if (!s || idx == null || !Array.isArray(s.items)) return false;
    const off = (s.formula ? 1 : 0) + (s.svgDiagram ? 1 : 0);
    const it = s.items[idx - off];
    return !!(it && it.expandable);
  }
  function toggleExpandir(idx, abierto) {
    setExpandido(prev => ({ ...prev, [idx]: abierto }));
  }
  // Cruza de diapositiva (dir = ±1) dejando resaltada la primera/última tarjeta.
  // Dentro de un lienzo con bloques ocultos, avanzar descubre el siguiente antes
  // de pasar de diapositiva: es el ritmo con el que se explica en clase.
  function avanzar(dir) {
    const pendientes = revelablesDe(slide);
    if (dir > 0 && revelados < pendientes - 1) { setRevelados((r) => r + 1); return; }
    if (dir < 0 && revelados > -1) { setRevelados((r) => r - 1); return; }
    avanzarSlide(dir);
  }

  function avanzarSlide(dir) {
    const nuevo = slideIdx + dir;
    if (nuevo < 0 || nuevo >= slides.length) return;
    const m = numTarjetas(slides[nuevo]);
    highlightInicialRef.current = m > 0 ? (dir > 0 ? 0 : m - 1) : null;
    // Yendo hacia delante se entra con todo por revelar; volviendo atrás, con
    // todo ya revelado, que es como se dejó.
    setRevelados(dir > 0 ? -1 : revelablesDe(slides[nuevo]) - 1);
    setSlideIdx(nuevo);
  }

  // Navegación con teclado:
  //   ↑/↓  recorren las tarjetas del slide; al pasar el borde cruzan de diapositiva (flujo continuo).
  //   →/←  despliegan/contraen la tarjeta resaltada si es desplegable; si no, cambian de slide.
  //   AvPág/RePág saltan de diapositiva directo (apuntador).
  useEffect(() => {
    function onKey(e) {
      const t = e.target;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      const n = numTarjetas(slide);
      const cur = resaltado;
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          if (n > 0 && (cur === null || cur < n - 1)) setResaltado(cur === null ? 0 : cur + 1);
          else avanzar(1);
          break;
        case "ArrowUp":
          e.preventDefault();
          if (n > 0 && cur !== null && cur > 0) setResaltado(cur - 1);
          else avanzar(-1);
          break;
        case "ArrowRight":
          e.preventDefault();
          if (tarjetaExpandible(slide, cur) && !expandido[cur]) toggleExpandir(cur, true);
          else avanzar(1);
          break;
        case "ArrowLeft":
          e.preventDefault();
          if (tarjetaExpandible(slide, cur) && expandido[cur]) toggleExpandir(cur, false);
          else avanzar(-1);
          break;
        case "PageDown":
          e.preventDefault();
          avanzarSlide(1);   // el apuntador salta de diapositiva, sin revelar
          break;
        case "PageUp":
          e.preventDefault();
          avanzarSlide(-1);
          break;
        default:
          break;
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- avanzarSlide está declarada en el cuerpo del componente y es estable
  }, [slide, slideIdx, slides.length, resaltado, expandido]);

  // Al cambiar de slide: limpiar despliegues y tomar el resaltado inicial pendiente.
  useEffect(() => {
    setResaltado(highlightInicialRef.current);
    highlightInicialRef.current = null;
    setExpandido({});
  }, [slideIdx]);

  if (!PRESENTACION) {
    return (
      <div style={{ minHeight: "100vh", background: "#0e0f11", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#6b6860", fontSize: 16, marginBottom: 20 }}>Presentación no encontrada.</p>
          <button onClick={() => navigate(-1)} style={{ background: "none", border: "none", color: "#3b9eff", fontSize: 14, cursor: "pointer" }}>
            ← Volver
          </button>
        </div>
      </div>
    );
  }

  function irASlide(idx) {
    if (idx < 0 || idx >= slides.length) return;
    // Saltar directo muestra la diapositiva completa: quien salta ya sabe a
    // dónde va, y descubrirla bloque a bloque sería un estorbo.
    setRevelados(revelablesDe(slides[idx]) - 1);
    setSlideIdx(idx);
  }

  function responder(opcionIdx) {
    const key = String(slide.id);
    if (respuestas[key] !== undefined) return;
    setRespuestas(prev => ({ ...prev, [key]: opcionIdx }));
  }

  const respuestaDada = slide ? (respuestas[String(slide.id)] ?? null) : null;

  return (
    <div ref={rootRef} className="pantalla-completa" style={{ background: tema.bg, display: "flex", flexDirection: "column", fontFamily: tema.body, overflow: "hidden" }}>
      {/* Barra superior */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", height: 52, borderBottom: `1px solid ${tema.border}`, background: esquemaEfectivo === "claro" ? tema.card : "rgba(0,0,0,0.5)", flexShrink: 0, gap: 16 }}>
        <span style={{ fontFamily: tema.mono, fontSize: 11, color: tema.muted, letterSpacing: "0.1em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {PRESENTACION.titulo}
        </span>
        <span style={{ fontFamily: tema.mono, fontSize: 12, color: tema.muted, flexShrink: 0 }}>
          {slideIdx + 1} / {slides.length}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          {admiteClaro && (
          <button
            onClick={alternarEsquema}
            title={esquemaEfectivo === "oscuro" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
            aria-label={esquemaEfectivo === "oscuro" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
            style={{ background: "none", border: "none", color: tema.muted, cursor: "pointer", padding: 6, display: "flex", opacity: 0.75 }}
          >
            {esquemaEfectivo === "oscuro" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
                <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.2 5.2l1.6 1.6M17.2 17.2l1.6 1.6M18.8 5.2l-1.6 1.6M6.8 17.2l-1.6 1.6"
                  stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
            )}
          </button>
          )}
          <BotonPantallaCompleta targetRef={rootRef} tema={tema} />
          <button
            onClick={() => navigate(-1)}
            style={{ background: "none", border: "none", fontFamily: tema.mono, fontSize: 11, color: tema.muted, cursor: "pointer", letterSpacing: "0.08em", opacity: 0.7, flexShrink: 0, transition: "opacity 0.15s" }}
            onMouseEnter={e => e.currentTarget.style.opacity = "1"}
            onMouseLeave={e => e.currentTarget.style.opacity = "0.7"}
          >
            ← Salir
          </button>
        </div>
      </div>

      {/* Diapositiva */}
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
        <SlideRenderer
          slide={slide}
          tema={tema}
          modo="alumno"
          respuestaDada={respuestaDada}
          onResponder={responder}
          resaltadoIdx={resaltado}
          onResaltar={(idx) => setResaltado(prev => (prev === idx ? null : idx))}
          expandidos={expandido}
          onExpandir={toggleExpandir}
          revelados={revelados}
        />
      </div>

      {/* Barra inferior */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", height: 60, borderTop: `1px solid ${tema.border}`, background: esquemaEfectivo === "claro" ? tema.card : "rgba(0,0,0,0.4)", flexShrink: 0, gap: 16 }}>
        <button
          onClick={() => avanzar(-1)}
          disabled={slideIdx === 0}
          style={{ flexShrink: 0, background: "transparent", border: `1px solid ${tema.border}`, color: slideIdx === 0 ? "#2a2820" : tema.texto, borderRadius: 8, padding: "7px 22px", fontSize: 14, cursor: slideIdx === 0 ? "default" : "pointer", fontFamily: "inherit", transition: "all 0.15s" }}
        >
          ← Anterior
        </button>

        {/* Progreso. Con pocas diapositivas, un punto por diapositiva: se ve de un
            golpe cuántas quedan y cuáles son ejercicios. Pasadas 20 los puntos
            miden 7 px con 5 de separación —inatinables incluso en laptop, y en
            un teléfono directamente decorativos—, así que se cambian por una
            barra con marcas y el nombre de la diapositiva actual. */}
        {slides.length <= 20 ? (
          <div style={{ display: "flex", gap: 5, alignItems: "center", flex: 1, minWidth: 0, overflow: "hidden", justifyContent: "center" }}>
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => irASlide(i)}
                title={`${i + 1}. ${s.titulo || s.etiqueta || s.tipo}`}
                style={{ width: i === slideIdx ? 22 : 7, height: 7, borderRadius: 4, background: i === slideIdx ? tema.acento : i < slideIdx ? tema.acentoOpaco : tema.border, border: s.tipo === "ejercicio" && i !== slideIdx ? `1px solid ${tema.acentoBorde}` : "none", cursor: "pointer", padding: 0, transition: "all 0.22s" }}
              />
            ))}
          </div>
        ) : (
          <Deslizador slides={slides} slideIdx={slideIdx} irASlide={irASlide} tema={tema} />
        )}

        <button
          onClick={() => avanzar(1)}
          disabled={slideIdx === slides.length - 1}
          style={{ flexShrink: 0, background: slideIdx < slides.length - 1 ? tema.acento : "transparent", border: `1px solid ${slideIdx < slides.length - 1 ? tema.acento : tema.border}`, color: slideIdx < slides.length - 1 ? "#0d0d0f" : "#2a2820", borderRadius: 8, padding: "7px 22px", fontSize: 14, fontWeight: slideIdx < slides.length - 1 ? 700 : 400, cursor: slideIdx === slides.length - 1 ? "default" : "pointer", fontFamily: "inherit", transition: "all 0.15s" }}
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
}

// Barra de avance para presentaciones largas. Se arrastra y se toca en cualquier
// punto; las marcas son los ejercicios, que es lo que se busca al saltar.
function Deslizador({ slides, slideIdx, irASlide, tema }) {
  const pistaRef = useRef(null);

  function alPuntero(e) {
    const caja = pistaRef.current?.getBoundingClientRect();
    if (!caja) return;
    const t = Math.min(1, Math.max(0, (e.clientX - caja.left) / caja.width));
    irASlide(Math.round(t * (slides.length - 1)));
  }

  const pct = (slideIdx / (slides.length - 1)) * 100;
  const actual = slides[slideIdx];

  return (
    <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 7, padding: "0 4px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 16, fontFamily: tema.mono, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: tema.sub }}>
        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {actual?.etiqueta || actual?.titulo || ""}
        </span>
        <span style={{ flexShrink: 0 }}>{slideIdx + 1} de {slides.length}</span>
      </div>
      <div
        ref={pistaRef}
        onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); alPuntero(e); }}
        onPointerMove={(e) => { if (e.buttons) alPuntero(e); }}
        style={{ position: "relative", height: 14, display: "flex", alignItems: "center", cursor: "pointer", touchAction: "none" }}
      >
        <div style={{ position: "absolute", left: 0, right: 0, height: 4, borderRadius: 2, background: tema.border }} />
        <div style={{ position: "absolute", left: 0, width: `${pct}%`, height: 4, borderRadius: 2, background: tema.acento }} />
        {slides.map((s, i) => (
          s.tipo === "ejercicio" || s.tipo === "pregunta" ? (
            <span key={i} style={{
              position: "absolute", left: `${(i / (slides.length - 1)) * 100}%`,
              width: 1.5, height: 8, borderRadius: 1, background: tema.sub, transform: "translateX(-50%)",
            }} />
          ) : null
        ))}
        <span style={{
          position: "absolute", left: `${pct}%`, transform: "translateX(-50%)",
          width: 12, height: 12, borderRadius: "50%",
          background: tema.acento, border: `2px solid ${tema.bg}`,
        }} />
      </div>
    </div>
  );
}
