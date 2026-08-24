// Renderizador de diapositivas para el sistema de presentaciones.
// Recibe un objeto `slide`, un `tema` y props de contexto (modo, votos, etc.)
import { useState, useEffect, useMemo } from "react";
import { M, useKaTeX } from "../data/teoria/shared.jsx";
import { TEMAS, useFuentesTema } from "../data/presentaciones/temas.jsx";
import { DIAGRAMS } from "./diagramas/index.js";
import { qRegPoly } from "./diagramas/comun.jsx";
import JXG from 'jsxgraph';
import { ReactFlow, Handle, Position, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ReferenceLine, ResponsiveContainer } from 'recharts';

function useWindowWidth() {
  const [w, setW] = useState(() => (typeof window !== "undefined" ? window.innerWidth : 1024));
  useEffect(() => {
    const update = () => setW(window.innerWidth);
    // orientationchange fires on mobile rotation; resize fires on desktop resize
    // small timeout because orientationchange fires before dimensions update
    const handler = () => setTimeout(update, 100);
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", handler);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", handler);
    };
  }, []);
  return w;
}

// Shuffle determinístico basado en el id del slide (LCG seeded).
// Devuelve un arreglo donde shuffledOrder[displayIdx] = originalIdx.
function shuffleIndices(length, seed) {
  const order = Array.from({ length }, (_, i) => i);
  let s = (seed ^ 0x12345678) >>> 0;
  for (let i = length - 1; i > 0; i--) {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    const j = s % (i + 1);
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

// ── Componentes de apoyo ──────────────────────────────────────────────────────

function Encabezado({ titulo, etiqueta, tema }) {
  return (
    <div style={{ marginBottom: 4 }}>
      {etiqueta && (
        <div
          style={{
            fontFamily: tema.mono,
            fontSize: 11,
            letterSpacing: "0.2em",
            color: tema.acento,
            textTransform: "uppercase",
            marginBottom: 10,
            opacity: 0.75
          }}
        >
          {etiqueta}
        </div>
      )}
      <h2
        style={{
          fontFamily: "'Sora', system-ui, sans-serif",
          fontSize: "clamp(24px, 3.5vw, 40px)",
          fontWeight: 700,
          color: tema.texto,
          letterSpacing: "-0.01em",
          margin: 0,
          lineHeight: 1.15
        }}
      >
        {titulo}
      </h2>
    </div>
  );
}

function HistogramaVotos({ votos, totalVotos, opciones, correcta, votantes, perfiles, shuffledOrder, tema }) {
  // Deduplicar por alumno (último voto gana) y ordenar por nombre.
  const porUsuario = new Map();
  const anonimos = [];
  (votantes || []).forEach((v) => {
    if (v.userId) porUsuario.set(v.userId, v.opcion);
    else anonimos.push(v);
  });
  const lista = [
    ...Array.from(porUsuario, ([userId, opcion]) => ({ userId, opcion })),
    ...anonimos,
  ].map((v) => {
    const displayIdx = shuffledOrder ? shuffledOrder.indexOf(v.opcion) : v.opcion;
    return {
      ...v,
      nombre: perfiles?.[v.userId] || "Anónimo",
      letra: String.fromCharCode(65 + displayIdx),
      ok: displayIdx === correcta,
    };
  });
  lista.sort((a, b) => a.nombre.localeCompare(b.nombre));
  const aciertos = lista.filter((a) => a.ok).length;

  return (
    <div
      style={{
        width: 210,
        flexShrink: 0,
        background: "rgba(0,0,0,0.35)",
        border: `1px solid ${tema.border}`,
        borderRadius: 12,
        padding: "18px 14px",
        display: "flex",
        flexDirection: "column",
        gap: 14
      }}
    >
      <div
        style={{
          fontFamily: tema.mono,
          fontSize: 10,
          letterSpacing: "0.18em",
          color: tema.muted,
          textTransform: "uppercase"
        }}
      >
        Votos en vivo
      </div>
      <div
        style={{
          fontFamily: tema.mono,
          fontSize: 28,
          color: tema.acento,
          textAlign: "center",
          lineHeight: 1
        }}
      >
        {totalVotos || 0}
      </div>
      {opciones.map((op, i) => {
        const count = votos?.[i] || 0;
        const pct = totalVotos > 0 ? Math.round((count / totalVotos) * 100) : 0;
        const isOk = i === correcta;
        return (
          <div key={i}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 5,
                fontSize: 12,
                fontFamily: tema.mono
              }}
            >
              <span style={{ color: isOk ? tema.acento : tema.muted }}>
                {String.fromCharCode(65 + i)}. {op.includes('\\') ? <M>{op}</M> : (op.length > 14 ? op.slice(0, 14) + "…" : op)}
              </span>
              <span style={{ color: isOk ? tema.acento : tema.sub }}>
                {count} ({pct}%)
              </span>
            </div>
            <div
              style={{
                height: 7,
                background: "rgba(255,255,255,0.06)",
                borderRadius: 4,
                overflow: "hidden"
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${pct}%`,
                  background: isOk ? tema.acento : tema.sub,
                  borderRadius: 4,
                  transition: "width 0.4s ease"
                }}
              />
            </div>
          </div>
        );
      })}

      {lista.length > 0 && (
        <div
          style={{
            borderTop: `1px solid ${tema.border}`,
            paddingTop: 12,
            display: "flex",
            flexDirection: "column",
            gap: 8
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontFamily: tema.mono,
              fontSize: 10,
              letterSpacing: "0.18em",
              color: tema.muted,
              textTransform: "uppercase"
            }}
          >
            <span>Respuestas</span>
            <span style={{ color: tema.acento }}>
              {aciertos} de {lista.length}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              maxHeight: 260,
              overflowY: "auto"
            }}
          >
            {lista.map((a, idx) => {
              const col = a.ok ? tema.acento : tema.sub;
              return (
                <div
                  key={a.userId || `anon-${idx}`}
                  style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12 }}
                >
                  <span style={{ color: col, flexShrink: 0, width: 13, display: "inline-flex" }}>
                    {a.ok ? <IconoAsiEs tema={tema} /> : <IconoAsiNo tema={tema} />}
                  </span>
                  <span
                    style={{
                      color: tema.sub,
                      flex: 1,
                      minWidth: 0,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap"
                    }}
                    title={a.nombre}
                  >
                    {a.nombre}
                  </span>
                  <span style={{ color: col, fontFamily: tema.mono, flexShrink: 0 }}>{a.letra}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Íconos de retroalimentación ───────────────────────────────────────────────
// Dibujados, no glifos: ✓ y ✗ cambian de forma y de ancho según el sistema, y en
// algunos se pintan como emoji a color.
//
// El acierto va en el acento de la materia y lo que no lo es va en gris, no en
// rojo (docs/DISENO.md §2.4). Dos razones: la deficiencia rojo-verde afecta a uno
// de cada doce hombres —si el matiz es el único canal, uno o dos de cada veinte
// alumnos no leen la retroalimentación—, y el rojo dice a la vez qué pasó y qué
// tan malo es, cuando solo hace falta lo primero. La distinción la hace la FORMA.
function IconoAsiEs({ tema, size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none"
      style={{ flexShrink: 0, verticalAlign: "-2px" }} aria-hidden="true">
      <path d="M3.5 8.4l3 3 6-7" stroke={tema.acento} strokeWidth="1.9"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconoAsiNo({ tema, size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none"
      style={{ flexShrink: 0, verticalAlign: "-2px" }} aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke={tema.sub} strokeWidth="1.6" />
      <line x1="3.8" y1="12.2" x2="12.2" y2="3.8" stroke={tema.sub} strokeWidth="1.6" />
    </svg>
  );
}

// ── Tipos de diapositiva ──────────────────────────────────────────────────────

function SlidePortadaDiagram({ slide, tema }) {
  // La portada cae al SVG decorativo del tema cuando la diapositiva no pide uno.
  const D = buscarDiagrama(slide.svgDiagram);
  if (D) return <D tema={tema} />;
  const DecoSVG = tema.DecoSVG;
  return <DecoSVG tema={tema} />;
}

function SlidePortada({ slide, tema }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        gap: 20,
        textAlign: "center",
        padding: "40px 32px"
      }}
    >
      <SlidePortadaDiagram slide={slide} tema={tema} />
      <div
        style={{
          fontFamily: tema.mono,
          fontSize: 12,
          letterSpacing: "0.22em",
          color: tema.acento,
          textTransform: "uppercase",
          opacity: 0.75
        }}
      >
        {slide.etiqueta}
      </div>
      <h1
        style={{
          fontFamily: "'Sora', system-ui, sans-serif",
          fontSize: "clamp(32px, 5.5vw, 68px)",
          fontWeight: 700,
          color: tema.texto,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          margin: 0
        }}
      >
        {slide.titulo}
      </h1>
      <p style={{ fontSize: 18, color: tema.muted, maxWidth: 500, fontWeight: 300, lineHeight: 1.6 }}>
        {slide.subtitulo}
      </p>
    </div>
  );
}

// ─── Cuadriláteros y Polígonos: helper ───────────────────────────────────────

// ─── Definicion SVGs: Cuadriláteros y Polígonos ──────────────────────────────
function SlideDefinicion({ slide, tema, resaltadoIdx, onResaltar }) {
  const winW = useWindowWidth();
  const narrow = winW < 500;
  return (
    <div
      style={{
        padding: narrow ? "16px 16px" : "24px 32px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: narrow ? 10 : 14,
        boxSizing: "border-box",
        overflowY: "auto"
      }}
    >
      <Encabezado titulo={slide.titulo} tema={tema} />

      <div
        style={{
          background: tema.acentoSuave,
          border: `1px solid ${tema.acentoBorde}`,
          borderRadius: 12,
          padding: "16px 28px",
          textAlign: "center"
        }}
      >
        <div style={{ fontSize: "1.7em", marginBottom: 10 }}>
          <M>{slide.simbolo}</M>
        </div>
        <p
          style={{
            fontSize: 16,
            color: tema.texto,
            lineHeight: 1.65,
            fontWeight: 300,
            margin: 0
          }}
        >
          {slide.cuerpo}
        </p>
      </div>

      <Diagrama clave={slide.svgDiagram} tema={tema} />

      <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1fr 1fr", gap: 12 }}>
        {slide.condiciones.map((c, i) => {
          const activo = resaltadoIdx === i;
          return (
          <div
            key={i}
            onClick={() => onResaltar && onResaltar(i)}
            data-resaltado={activo ? "true" : undefined}
            style={{
              background: activo ? tema.acentoSuave : (c.destacado ? tema.acentoMed : tema.card),
              border: `1px solid ${activo ? tema.acento : (c.destacado ? tema.acentoBorde : tema.border)}`,
              borderRadius: 10,
              padding: narrow ? "10px 14px" : (c.destacado ? "18px 28px" : "14px 18px"),
              boxShadow: activo ? `0 0 0 2px ${tema.acentoBorde}, 0 0 16px ${tema.acentoBorde}` : (c.destacado ? `0 0 12px ${tema.acentoBorde}` : "none"),
              gridColumn: c.destacado ? "1 / -1" : "auto",
              transform: "none",
              transition: "all 0.2s",
              cursor: onResaltar ? "pointer" : "default"
            }}
          >
            <div
              style={{
                fontFamily: tema.mono,
                fontSize: 10.5,
                letterSpacing: "0.14em",
                color: c.destacado ? tema.acento : (i === 0 ? tema.azul : tema.acento),
                textTransform: "uppercase",
                marginBottom: 10,
                textAlign: c.destacado ? "center" : "left"
              }}
            >
              {c.texto}
            </div>
            <div style={{ textAlign: "center", fontSize: c.destacado ? "1.7em" : "1.05em" }}>
              <M>{c.math}</M>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Concepto SVGs: Cuadriláteros y Polígonos ────────────────────────────────
function SlideConcepto({ slide, tema, resaltadoIdx, onResaltar, expandidos, onExpandir }) {
  const compact = !!slide.svgDiagram;
  const winW = useWindowWidth();
  const narrow = winW < 500;
  const [localExpanded, setLocalExpanded] = useState({});
  // Si llega `expandidos` (controlado por director/alumno) se usa ese; si no, estado local.
  const expanded = expandidos ?? localExpanded;
  // Tarjetas resaltables en orden: fórmula (0), diagrama, items.
  const offFormula = slide.formula ? 1 : 0;
  const svgIndex = offFormula;                          // el diagrama va justo después de la fórmula
  const off = offFormula + (slide.svgDiagram ? 1 : 0);  // los items empiezan después del diagrama
  return (
    <div
      style={{
        padding: narrow ? "14px 14px" : compact ? "18px 28px" : "36px 44px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: narrow ? 10 : compact ? 14 : 26,
        boxSizing: "border-box",
        overflowY: "auto"
      }}
    >
      <Encabezado titulo={slide.titulo} etiqueta={slide.etiqueta} tema={tema} />

      <div
        onClick={() => slide.formula && onResaltar && onResaltar(0)}
        data-resaltado={resaltadoIdx === 0 && slide.formula ? "true" : undefined}
        style={{
          background: "rgba(0,0,0,0.45)",
          border: `2px solid ${resaltadoIdx === 0 && slide.formula ? tema.acento : tema.acentoFuerte}`,
          borderRadius: 12,
          padding: compact ? "14px 24px" : "22px 28px",
          textAlign: "center",
          fontSize: compact ? "1.6em" : "1.9em",
          boxShadow: resaltadoIdx === 0 && slide.formula ? `0 0 0 2px ${tema.acentoBorde}, 0 0 16px ${tema.acentoBorde}` : "none",
          transition: "all 0.2s",
          cursor: slide.formula && onResaltar ? "pointer" : "default"
        }}
      >
        <M>{slide.formula}</M>
      </div>

      {slide.svgDiagram && (
        <div
          onClick={() => onResaltar && onResaltar(svgIndex)}
          data-resaltado={resaltadoIdx === svgIndex ? "true" : undefined}
          style={{
            borderRadius: 10,
            border: `1px solid ${resaltadoIdx === svgIndex ? tema.acento : "transparent"}`,
            boxShadow: resaltadoIdx === svgIndex ? `0 0 0 2px ${tema.acentoBorde}, 0 0 16px ${tema.acentoBorde}` : "none",
            padding: 4,
            transition: "all 0.2s",
            cursor: onResaltar ? "pointer" : "default"
          }}
        >
      <Diagrama clave={slide.svgDiagram} tema={tema} />
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: compact ? 8 : 10 }}>
        {slide.items.map((item, i) => {
          const idx = i + off;
          const activo = resaltadoIdx === idx;
          const isOpen = !!expanded[idx];
          return (
          <div
            key={i}
            data-resaltado={activo ? "true" : undefined}
            style={{
              background: activo ? tema.acentoSuave : tema.card,
              border: `1px solid ${activo ? tema.acento : tema.border}`,
              borderRadius: 8,
              boxShadow: activo ? `0 0 0 2px ${tema.acentoBorde}, 0 0 16px ${tema.acentoBorde}` : "none",
              transition: "all 0.2s",
              overflow: "hidden"
            }}
          >
            <div
              onClick={() => {
                if (item.expandable) {
                  const abierto = !expanded[idx];
                  if (onExpandir) onExpandir(idx, abierto);          // director → broadcast
                  if (!expandidos) setLocalExpanded(prev => ({ ...prev, [idx]: abierto })); // modo standalone
                } else if (onResaltar) onResaltar(idx);
              }}
              style={{
                display: "flex",
                flexDirection: item.pasos ? "column" : "row",
                alignItems: item.pasos ? "flex-start" : "center",
                gap: item.pasos ? 8 : 18,
                padding: compact ? "9px 18px" : "13px 22px",
                cursor: item.expandable || onResaltar ? "pointer" : "default"
              }}
            >
              {item.pasos ? (
                <>
                  <span style={{ fontSize: 13, color: tema.sub, fontWeight: 600 }}>{item.texto}</span>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10 }}>
                    {item.pasos.map((paso, j) => (
                      <span key={j} style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: "1.05em" }}>
                        {j > 0 && <span style={{ color: "#4a4640", fontSize: 16 }}>→</span>}
                        <M>{paso}</M>
                      </span>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <span style={{ fontSize: "1.1em", minWidth: 52 }}>
                    <M>{item.math}</M>
                  </span>
                  <span style={{ color: "#4a4640", fontSize: 17 }}>→</span>
                  <span style={{ fontSize: 15, color: "#c4bfb3", flex: 1 }}>{item.texto}</span>
                  {item.expandable && (
                    <span style={{
                      color: tema.azul,
                      fontSize: 12,
                      display: "inline-block",
                      transition: "transform 0.2s",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      flexShrink: 0
                    }}>▼</span>
                  )}
                </>
              )}
            </div>
            {item.expandable && isOpen && item.detalles && (
              <div style={{
                borderTop: `1px solid ${tema.border}`,
                padding: "10px 18px 12px",
                display: "grid",
                gridTemplateColumns: narrow ? "1fr" : "1fr 1fr",
                gap: "5px 16px"
              }}>
                {item.detalles.map((d, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "baseline", gap: 7, fontSize: 13 }}>
                    <span style={{ color: tema.azul, fontSize: 10, flexShrink: 0 }}>◆</span>
                    <span style={{ color: "#c4bfb3" }}>{d}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          );
        })}
      </div>

      {slide.nota && (
        <div
          style={{
            background: tema.azulSuave,
            border: `1px solid ${tema.azulBorde}`,
            borderRadius: 8,
            padding: compact ? "10px 16px" : "13px 20px",
            display: "flex",
            alignItems: "baseline",
            gap: 10
          }}
        >
          <span
            style={{
              fontFamily: tema.mono,
              fontSize: 10,
              letterSpacing: "0.2em",
              color: tema.azul,
              textTransform: "uppercase",
              flexShrink: 0
            }}
          >
            Nota
          </span>
          <span style={{ fontSize: 14.5, color: tema.azulTexto }}>{slide.nota}</span>
        </div>
      )}
    </div>
  );
}

// Triangles shared by all criterion SVGs:
// Left △ABC: A(50,10) B(8,78) C(96,78)  Right △DEF: D(148,33) E(120,78) F(178,78)  k≈1.5

function CriterioAA_SVG({ tema }) {
  return (
    <svg viewBox="0 0 190 88" width="100%" style={{ display: "block" }}>
      <polygon points="50,10 8,78 96,78" fill={tema.azulSuave} stroke="none"/>
      <polygon points="148,33 120,78 178,78" fill={tema.azulSuave} stroke="none"/>
      <polygon points="50,10 8,78 96,78" fill="none" stroke="rgba(255,255,255,0.13)" strokeWidth="1.5"/>
      <polygon points="148,33 120,78 178,78" fill="none" stroke="rgba(255,255,255,0.13)" strokeWidth="1.5"/>
      {/* Angle pair α: azul arcs at A and D */}
      <path d="M 57,20 A 12,12 0 0,1 44,20" stroke={tema.azul} strokeWidth="2" fill="none"/>
      <path d="M 153,40 A 9,9 0 0,1 143,41" stroke={tema.azul} strokeWidth="2" fill="none"/>
      {/* Angle pair β: acento arcs at B and E */}
      <path d="M 14,68 A 12,12 0 0,1 20,78" stroke={tema.acento} strokeWidth="2" fill="none"/>
      <path d="M 125,70 A 9,9 0 0,1 129,78" stroke={tema.acento} strokeWidth="2" fill="none"/>
      {/* Greek labels */}
      <text x="50" y="5" fill={tema.azul} fontSize="9" textAnchor="middle" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.85">α</text>
      <text x="148" y="28" fill={tema.azul} fontSize="8" textAnchor="middle" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.85">α</text>
      <text x="2" y="83" fill={tema.acento} fontSize="9" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.85">β</text>
      <text x="116" y="83" fill={tema.acento} fontSize="8" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.85">β</text>
    </svg>
  );
}

function CriterioLLL_SVG({ tema }) {
  return (
    <svg viewBox="0 0 190 88" width="100%" style={{ display: "block" }}>
      <polygon points="50,10 8,78 96,78" fill={tema.azulSuave} stroke="none"/>
      <polygon points="148,33 120,78 178,78" fill={tema.azulSuave} stroke="none"/>
      {/* Color-coded sides: AB/DE=azul, BC/EF=verde, CA/FD=acento */}
      <line x1="50" y1="10" x2="8"   y2="78" stroke={tema.azul}   strokeWidth="2" opacity="0.85"/>
      <line x1="148" y1="33" x2="120" y2="78" stroke={tema.azul}   strokeWidth="2" opacity="0.85"/>
      <line x1="8"   y1="78" x2="96"  y2="78" stroke={tema.verde}  strokeWidth="2" opacity="0.85"/>
      <line x1="120" y1="78" x2="178" y2="78" stroke={tema.verde}  strokeWidth="2" opacity="0.85"/>
      <line x1="96"  y1="78" x2="50"  y2="10" stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <line x1="178" y1="78" x2="148" y2="33" stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      {/* Tick marks: 1-azul, 2-verde, 3-acento */}
      <path d="M 25,41 L 33,47" stroke={tema.azul} strokeWidth="1.5" fill="none"/>
      <path d="M 131,53 L 137,58" stroke={tema.azul} strokeWidth="1.5" fill="none"/>
      <path d="M 49,74 L 49,82 M 55,74 L 55,82" stroke={tema.verde} strokeWidth="1.5" fill="none"/>
      <path d="M 146,74 L 146,82 M 152,74 L 152,82" stroke={tema.verde} strokeWidth="1.5" fill="none"/>
      <path d="M 72,36 L 66,40 M 76,42 L 70,46 M 80,48 L 74,52" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 163,50 L 157,54 M 166,54 L 160,58 M 169,57 L 163,61" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

function CriterioLAL_SVG({ tema }) {
  return (
    <svg viewBox="0 0 190 88" width="100%" style={{ display: "block" }}>
      <polygon points="50,10 8,78 96,78" fill={tema.azulSuave} stroke="none"/>
      <polygon points="148,33 120,78 178,78" fill={tema.azulSuave} stroke="none"/>
      {/* Dim base sides (not part of LAL) */}
      <line x1="8"   y1="78" x2="96"  y2="78" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5"/>
      <line x1="120" y1="78" x2="178" y2="78" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5"/>
      {/* Two proportional sides: AB/DE=azul, CA/FD=acento */}
      <line x1="50"  y1="10" x2="8"   y2="78" stroke={tema.azul}   strokeWidth="2" opacity="0.85"/>
      <line x1="148" y1="33" x2="120" y2="78" stroke={tema.azul}   strokeWidth="2" opacity="0.85"/>
      <line x1="96"  y1="78" x2="50"  y2="10" stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <line x1="178" y1="78" x2="148" y2="33" stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      {/* Included angle at A and D: verde */}
      <path d="M 57,20 A 12,12 0 0,1 44,20" stroke={tema.verde} strokeWidth="2" fill="none"/>
      <path d="M 153,40 A 9,9 0 0,1 143,41" stroke={tema.verde} strokeWidth="2" fill="none"/>
      {/* Tick marks: 1 on AB/DE (azul), 2 on CA/FD (acento) */}
      <path d="M 25,41 L 33,47" stroke={tema.azul} strokeWidth="1.5" fill="none"/>
      <path d="M 131,53 L 137,58" stroke={tema.azul} strokeWidth="1.5" fill="none"/>
      <path d="M 72,36 L 66,40 M 76,42 L 70,46" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 163,50 L 157,54 M 166,54 L 160,58" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

function CongLLL_SVG({ tema }) {
  return (
    <svg viewBox="0 0 190 88" width="100%" style={{ display: "block" }}>
      <polygon points="45,10 8,78 90,78"   fill={tema.azulSuave} stroke="none"/>
      <polygon points="145,10 108,78 190,78" fill={tema.azulSuave} stroke="none"/>
      <line x1="45"  y1="10" x2="8"   y2="78" stroke={tema.azul}   strokeWidth="2" opacity="0.85"/>
      <line x1="145" y1="10" x2="108" y2="78" stroke={tema.azul}   strokeWidth="2" opacity="0.85"/>
      <line x1="8"   y1="78" x2="90"  y2="78" stroke={tema.verde}  strokeWidth="2" opacity="0.85"/>
      <line x1="108" y1="78" x2="190" y2="78" stroke={tema.verde}  strokeWidth="2" opacity="0.85"/>
      <line x1="90"  y1="78" x2="45"  y2="10" stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <line x1="190" y1="78" x2="145" y2="10" stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <path d="M 23,41 L 31,47"   stroke={tema.azul}   strokeWidth="1.5" fill="none"/>
      <path d="M 123,41 L 131,47" stroke={tema.azul}   strokeWidth="1.5" fill="none"/>
      <path d="M 46,74 L 46,82 M 52,74 L 52,82"     stroke={tema.verde}  strokeWidth="1.5" fill="none"/>
      <path d="M 146,74 L 146,82 M 152,74 L 152,82"  stroke={tema.verde}  strokeWidth="1.5" fill="none"/>
      <path d="M 67,37 L 61,43 M 72,43 L 66,49 M 77,49 L 71,55"    stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 167,37 L 161,43 M 172,43 L 166,49 M 177,49 L 171,55" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

function CongLAL_SVG({ tema }) {
  return (
    <svg viewBox="0 0 190 88" width="100%" style={{ display: "block" }}>
      <polygon points="45,10 8,78 90,78"   fill={tema.azulSuave} stroke="none"/>
      <polygon points="145,10 108,78 190,78" fill={tema.azulSuave} stroke="none"/>
      <line x1="8"   y1="78" x2="90"  y2="78" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5"/>
      <line x1="108" y1="78" x2="190" y2="78" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5"/>
      <line x1="45"  y1="10" x2="8"   y2="78" stroke={tema.azul}   strokeWidth="2" opacity="0.85"/>
      <line x1="145" y1="10" x2="108" y2="78" stroke={tema.azul}   strokeWidth="2" opacity="0.85"/>
      <line x1="90"  y1="78" x2="45"  y2="10" stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <line x1="190" y1="78" x2="145" y2="10" stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <path d="M 52,20 A 12,12 0 0,1 39,21"   stroke={tema.verde} strokeWidth="2" fill="none"/>
      <path d="M 152,20 A 12,12 0 0,1 139,21"  stroke={tema.verde} strokeWidth="2" fill="none"/>
      <path d="M 23,41 L 31,47"   stroke={tema.azul}   strokeWidth="1.5" fill="none"/>
      <path d="M 123,41 L 131,47" stroke={tema.azul}   strokeWidth="1.5" fill="none"/>
      <path d="M 67,37 L 61,43 M 72,43 L 66,49"  stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 167,37 L 161,43 M 172,43 L 166,49" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

function CongALA_SVG({ tema }) {
  return (
    <svg viewBox="0 0 190 88" width="100%" style={{ display: "block" }}>
      <polygon points="45,10 8,78 90,78"   fill={tema.azulSuave} stroke="none"/>
      <polygon points="145,10 108,78 190,78" fill={tema.azulSuave} stroke="none"/>
      <line x1="8"   y1="78" x2="90"  y2="78" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5"/>
      <line x1="108" y1="78" x2="190" y2="78" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5"/>
      <line x1="90"  y1="78" x2="45"  y2="10" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5"/>
      <line x1="190" y1="78" x2="145" y2="10" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5"/>
      <line x1="45"  y1="10" x2="8"   y2="78" stroke={tema.azul} strokeWidth="2" opacity="0.85"/>
      <line x1="145" y1="10" x2="108" y2="78" stroke={tema.azul} strokeWidth="2" opacity="0.85"/>
      <path d="M 52,20 A 12,12 0 0,1 39,21"   stroke={tema.verde}  strokeWidth="2" fill="none"/>
      <path d="M 152,20 A 12,12 0 0,1 139,21"  stroke={tema.verde}  strokeWidth="2" fill="none"/>
      <path d="M 13,67 A 12,12 0 0,1 20,78"    stroke={tema.acento} strokeWidth="2" fill="none"/>
      <path d="M 113,67 A 12,12 0 0,1 120,78"  stroke={tema.acento} strokeWidth="2" fill="none"/>
      <path d="M 23,41 L 31,47"   stroke={tema.azul} strokeWidth="1.5" fill="none"/>
      <path d="M 123,41 L 131,47" stroke={tema.azul} strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

function CongLAA_SVG({ tema }) {
  return (
    <svg viewBox="0 0 190 88" width="100%" style={{ display: "block" }}>
      <polygon points="45,10 8,78 90,78"   fill={tema.azulSuave} stroke="none"/>
      <polygon points="145,10 108,78 190,78" fill={tema.azulSuave} stroke="none"/>
      <line x1="45"  y1="10" x2="8"   y2="78" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5"/>
      <line x1="145" y1="10" x2="108" y2="78" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5"/>
      <line x1="90"  y1="78" x2="45"  y2="10" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5"/>
      <line x1="190" y1="78" x2="145" y2="10" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5"/>
      <line x1="8"   y1="78" x2="90"  y2="78" stroke={tema.azul} strokeWidth="2" opacity="0.85"/>
      <line x1="108" y1="78" x2="190" y2="78" stroke={tema.azul} strokeWidth="2" opacity="0.85"/>
      <path d="M 52,20 A 12,12 0 0,1 39,21"   stroke={tema.verde}  strokeWidth="2" fill="none"/>
      <path d="M 152,20 A 12,12 0 0,1 139,21"  stroke={tema.verde}  strokeWidth="2" fill="none"/>
      <path d="M 13,67 A 12,12 0 0,1 20,78"    stroke={tema.acento} strokeWidth="2" fill="none"/>
      <path d="M 113,67 A 12,12 0 0,1 120,78"  stroke={tema.acento} strokeWidth="2" fill="none"/>
      <path d="M 46,74 L 46,82"   stroke={tema.azul} strokeWidth="1.5" fill="none"/>
      <path d="M 146,74 L 146,82" stroke={tema.azul} strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

// ─── Criterio small SVGs: paralelogramos ─────────────────────────────────────
function RomboideCriterioSVG({ tema }) {
  return (
    <svg viewBox="0 0 190 88" width="100%" style={{ display: "block" }}>
      <polygon points="25,8 150,8 165,80 40,80" fill={tema.azulSuave} stroke="none"/>
      <line x1="25" y1="8" x2="150" y2="8" stroke={tema.azul} strokeWidth="1.8" opacity="0.85"/>
      <line x1="40" y1="80" x2="165" y2="80" stroke={tema.azul} strokeWidth="1.8" opacity="0.85"/>
      <line x1="25" y1="8" x2="40" y2="80" stroke={tema.acento} strokeWidth="1.8" opacity="0.85"/>
      <line x1="150" y1="8" x2="165" y2="80" stroke={tema.acento} strokeWidth="1.8" opacity="0.85"/>
      <path d="M 82,4 L 87,8 L 82,12" stroke={tema.azul} strokeWidth="1.5" fill="none"/>
      <path d="M 97,76 L 102,80 L 97,84" stroke={tema.azul} strokeWidth="1.5" fill="none"/>
      <path d="M 27,43 L 35,49" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 152,43 L 160,49" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
    </svg>
  );
}
function RectanguloCriterioSVG({ tema }) {
  return (
    <svg viewBox="0 0 190 88" width="100%" style={{ display: "block" }}>
      <polygon points="12,6 178,6 178,82 12,82" fill={tema.azulSuave} stroke="none"/>
      <polygon points="12,6 178,6 178,82 12,82" fill="none" stroke={tema.azul} strokeWidth="1.8" opacity="0.85"/>
      <path d="M 20,6 L 20,14 L 12,14" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 170,6 L 170,14 L 178,14" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 170,82 L 170,74 L 178,74" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 20,82 L 20,74 L 12,74" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 93,2 L 93,10 M 97,2 L 97,10" stroke={tema.azul} strokeWidth="1.3" fill="none"/>
      <path d="M 93,78 L 93,86 M 97,78 L 97,86" stroke={tema.azul} strokeWidth="1.3" fill="none"/>
      <path d="M 8,42 L 16,42" stroke={tema.azul} strokeWidth="1.3" fill="none"/>
      <path d="M 174,42 L 182,42" stroke={tema.azul} strokeWidth="1.3" fill="none"/>
    </svg>
  );
}
function RomboCriterioSVG({ tema }) {
  return (
    <svg viewBox="0 0 190 88" width="100%" style={{ display: "block" }}>
      <polygon points="95,5 180,44 95,83 10,44" fill={tema.azulSuave} stroke="none"/>
      <line x1="95" y1="5" x2="180" y2="44" stroke={tema.azul} strokeWidth="1.8" opacity="0.85"/>
      <line x1="180" y1="44" x2="95" y2="83" stroke={tema.azul} strokeWidth="1.8" opacity="0.85"/>
      <line x1="95" y1="83" x2="10" y2="44" stroke={tema.azul} strokeWidth="1.8" opacity="0.85"/>
      <line x1="10" y1="44" x2="95" y2="5" stroke={tema.azul} strokeWidth="1.8" opacity="0.85"/>
      <line x1="95" y1="5" x2="95" y2="83" stroke="rgba(255,255,255,0.14)" strokeWidth="1" strokeDasharray="4,3"/>
      <line x1="10" y1="44" x2="180" y2="44" stroke="rgba(255,255,255,0.14)" strokeWidth="1" strokeDasharray="4,3"/>
      <path d="M 133,21 L 139,28" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 133,60 L 139,67" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 51,60 L 57,67" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 51,21 L 57,28" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
    </svg>
  );
}
function CuadradoCriterioSVG({ tema }) {
  // Polígono 70×70 centrado en el viewBox 190×88 → proporciones 1:1
  return (
    <svg viewBox="0 0 190 88" width="100%" style={{ display: "block" }}>
      <polygon points="60,5 130,5 130,75 60,75" fill={tema.azulSuave} stroke="none"/>
      <polygon points="60,5 130,5 130,75 60,75" fill="none" stroke={tema.azul} strokeWidth="1.8" opacity="0.85"/>
      <path d="M 68,5 L 68,13 L 60,13"   stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 122,5 L 122,13 L 130,13" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 122,75 L 122,67 L 130,67" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 68,75 L 68,67 L 60,67"   stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 95,1 L 95,9"   stroke={tema.azul} strokeWidth="1.5" fill="none"/>
      <path d="M 95,71 L 95,79" stroke={tema.azul} strokeWidth="1.5" fill="none"/>
      <path d="M 56,40 L 64,40"   stroke={tema.azul} strokeWidth="1.5" fill="none"/>
      <path d="M 126,40 L 134,40" stroke={tema.azul} strokeWidth="1.5" fill="none"/>
    </svg>
  );
}
// ─── Criterio small SVGs: trapecios ──────────────────────────────────────────
function TrapEscalenoCriterioSVG({ tema }) {
  return (
    <svg viewBox="0 0 190 88" width="100%" style={{ display: "block" }}>
      <polygon points="8,80 178,80 148,8 55,8" fill={tema.azulSuave} stroke="none"/>
      <line x1="8" y1="80" x2="178" y2="80" stroke={tema.azul} strokeWidth="2" opacity="0.9"/>
      <line x1="55" y1="8" x2="148" y2="8" stroke={tema.verde} strokeWidth="2" opacity="0.9"/>
      <line x1="8" y1="80" x2="55" y2="8" stroke={tema.acento} strokeWidth="1.8" opacity="0.85"/>
      <line x1="178" y1="80" x2="148" y2="8" stroke={tema.azul} strokeWidth="1.8" opacity="0.7"/>
    </svg>
  );
}
function TrapIsosCriterioSVG({ tema }) {
  return (
    <svg viewBox="0 0 190 88" width="100%" style={{ display: "block" }}>
      <polygon points="8,80 178,80 148,8 38,8" fill={tema.azulSuave} stroke="none"/>
      <line x1="8" y1="80" x2="178" y2="80" stroke={tema.azul} strokeWidth="2" opacity="0.9"/>
      <line x1="38" y1="8" x2="148" y2="8" stroke={tema.verde} strokeWidth="2" opacity="0.9"/>
      <line x1="8" y1="80" x2="38" y2="8" stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <line x1="178" y1="80" x2="148" y2="8" stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <path d="M 17,44 L 25,50" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d="M 160,44 L 168,50" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
    </svg>
  );
}
function TrapRectCriterioSVG({ tema }) {
  return (
    <svg viewBox="0 0 190 88" width="100%" style={{ display: "block" }}>
      <polygon points="20,80 168,80 168,8 80,8" fill={tema.azulSuave} stroke="none"/>
      <line x1="20" y1="80" x2="168" y2="80" stroke={tema.azul} strokeWidth="2" opacity="0.9"/>
      <line x1="80" y1="8" x2="168" y2="8" stroke={tema.verde} strokeWidth="2" opacity="0.9"/>
      <line x1="20" y1="80" x2="80" y2="8" stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <line x1="168" y1="8" x2="168" y2="80" stroke={tema.azul} strokeWidth="2" opacity="0.9"/>
      <path d="M 160,80 L 160,72 L 168,72" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 160,8 L 160,16 L 168,16" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
    </svg>
  );
}
// ─── Criterio small SVGs: polígonos regulares ────────────────────────────────
function TrianguloRegSVG({ tema }) {
  return (
    <svg viewBox="0 0 190 88" width="100%" style={{ display: "block" }}>
      <polygon points={qRegPoly(95,44,36,3,-Math.PI/2)} fill={tema.azulSuave} stroke={tema.azul} strokeWidth="1.8" opacity="0.85"/>
      <text x="95" y="86" fill={tema.muted} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">60° · 60° · 60°</text>
    </svg>
  );
}
function CuadradoRegSVG({ tema }) {
  return (
    <svg viewBox="0 0 190 88" width="100%" style={{ display: "block" }}>
      <polygon points={qRegPoly(95,42,32,4,-Math.PI/4)} fill={tema.azulSuave} stroke={tema.azul} strokeWidth="1.8" opacity="0.85"/>
      <text x="95" y="86" fill={tema.muted} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">90° × 4</text>
    </svg>
  );
}
function PentagonoRegSVG({ tema }) {
  return (
    <svg viewBox="0 0 190 88" width="100%" style={{ display: "block" }}>
      <polygon points={qRegPoly(95,44,36,5,-Math.PI/2)} fill={tema.azulSuave} stroke={tema.azul} strokeWidth="1.8" opacity="0.85"/>
      <text x="95" y="86" fill={tema.muted} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">108° × 5</text>
    </svg>
  );
}
function HexagonoRegSVG({ tema }) {
  return (
    <svg viewBox="0 0 190 88" width="100%" style={{ display: "block" }}>
      <polygon points={qRegPoly(95,44,36,6,-Math.PI/2)} fill={tema.azulSuave} stroke={tema.azul} strokeWidth="1.8" opacity="0.85"/>
      <text x="95" y="86" fill={tema.muted} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">120° × 6</text>
    </svg>
  );
}
function HeptagonoRegSVG({ tema }) {
  return (
    <svg viewBox="0 0 190 88" width="100%" style={{ display: "block" }}>
      <polygon points={qRegPoly(95,44,36,7,-Math.PI/2)} fill={tema.azulSuave} stroke={tema.azul} strokeWidth="1.8" opacity="0.85"/>
      <text x="95" y="86" fill={tema.muted} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">≈128.6° × 7</text>
    </svg>
  );
}
function OctagonoRegSVG({ tema }) {
  return (
    <svg viewBox="0 0 190 88" width="100%" style={{ display: "block" }}>
      <polygon points={qRegPoly(95,44,36,8,-Math.PI/2)} fill={tema.azulSuave} stroke={tema.azul} strokeWidth="1.8" opacity="0.85"/>
      <text x="95" y="86" fill={tema.muted} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">135° × 8</text>
    </svg>
  );
}

function SlideListaCriterios({ slide, tema, resaltadoIdx, onResaltar }) {
  const coloresAll = [tema.acento, tema.azul, tema.verde, tema.rojo];
  const bgColoresAll = [tema.acentoMed, tema.azulMed, "rgba(74,222,128,0.1)", "rgba(248,113,113,0.10)"];
  const winW = useWindowWidth();
  const narrow = winW < 500;
  const criterioSVGsSemejanza = {
    "AA":  <CriterioAA_SVG  tema={tema} />,
    "LLL": <CriterioLLL_SVG tema={tema} />,
    "LAL": <CriterioLAL_SVG tema={tema} />,
  };
  const criterioSVGsCongruencia = {
    "LLL": <CongLLL_SVG tema={tema} />,
    "LAL": <CongLAL_SVG tema={tema} />,
    "ALA": <CongALA_SVG tema={tema} />,
    "LAA": <CongLAA_SVG tema={tema} />,
  };
  const criterioSVGsParalelogramos = {
    "RBDE": <RomboideCriterioSVG   tema={tema} />,
    "RECT": <RectanguloCriterioSVG tema={tema} />,
    "RMBO": <RomboCriterioSVG      tema={tema} />,
    "CUAD": <CuadradoCriterioSVG   tema={tema} />,
  };
  const criterioSVGsTrapecios = {
    "ESC": <TrapEscalenoCriterioSVG tema={tema} />,
    "ISO": <TrapIsosCriterioSVG     tema={tema} />,
    "REC": <TrapRectCriterioSVG     tema={tema} />,
  };
  const criterioSVGsPoligonos = {
    "TRI": <TrianguloRegSVG  tema={tema} />,
    "CUA": <CuadradoRegSVG   tema={tema} />,
    "PEN": <PentagonoRegSVG  tema={tema} />,
    "HEX": <HexagonoRegSVG   tema={tema} />,
    "HEP": <HeptagonoRegSVG  tema={tema} />,
    "OCT": <OctagonoRegSVG   tema={tema} />,
  };
  const criterioSVGsInscrito = {
    "DIA": <InscritoDiametroSVG tema={tema} />,
    "DEN": <InscritoDentroSVG   tema={tema} />,
    "FUE": <InscritoFueraSVG    tema={tema} />,
  };
  const criterioSVGs =
    slide.variante === "congruencia"    ? criterioSVGsCongruencia :
    slide.variante === "paralelogramos" ? criterioSVGsParalelogramos :
    slide.variante === "trapecios"      ? criterioSVGsTrapecios :
    slide.variante === "poligonos"      ? criterioSVGsPoligonos :
    slide.variante === "inscrito"       ? criterioSVGsInscrito :
    criterioSVGsSemejanza;
  // 4 criteria → 2-column grid; 3 criteria → single column
  const cols = slide.criterios.length >= 4 ? 2 : 1;
  return (
    <div
      style={{
        padding: narrow ? "14px 14px" : "22px 28px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: narrow ? 10 : 16,
        boxSizing: "border-box"
      }}
    >
      <Encabezado titulo={slide.titulo} etiqueta={slide.etiqueta} tema={tema} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: narrow ? 10 : 14,
          flex: 1,
          overflowY: "auto",
          alignContent: "center"
        }}
      >
        {slide.criterios.map((c, i) => {
          const activo = resaltadoIdx === i;
          return (
          <div
            key={i}
            onClick={() => onResaltar && onResaltar(i)}
            data-resaltado={activo ? "true" : undefined}
            style={{
              display: "flex", flexDirection: "column", gap: 6,
              borderRadius: narrow ? 8 : 10,
              boxShadow: activo ? `0 0 0 2px ${tema.acentoBorde}, 0 0 16px ${tema.acentoBorde}` : "none",
              transform: "none",
              transition: "all 0.2s",
              cursor: onResaltar ? "pointer" : "default"
            }}
          >

            {/* Card: badge + text */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: narrow ? 10 : 14,
                background: activo ? tema.acentoSuave : tema.card,
                border: `1px solid ${activo ? tema.acento : tema.border}`,
                borderRadius: narrow ? 8 : 10,
                padding: narrow ? "8px 12px" : "12px 18px"
              }}
            >
              <div
                style={{
                  minWidth: narrow ? 38 : 48,
                  height: narrow ? 38 : 48,
                  borderRadius: 8,
                  background: bgColoresAll[i],
                  border: `2px solid ${coloresAll[i]}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: tema.mono,
                  fontWeight: 700,
                  fontSize: narrow ? 11 : 13,
                  color: coloresAll[i],
                  flexShrink: 0
                }}
              >
                {c.sigla}
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: narrow ? 12 : 15, fontWeight: 600, color: tema.texto, marginBottom: 2, lineHeight: 1.3 }}>
                  {c.nombre}
                </div>
                <div style={{ fontSize: narrow ? 10 : 12, color: tema.sub, lineHeight: 1.4 }}>
                  {c.desc}
                </div>
              </div>
            </div>

            {/* SVG debajo de la tarjeta */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ width: "100%", maxWidth: slide.criterios.length <= 2 ? 300 : 175 }}>
                {criterioSVGs[c.sigla]}
              </div>
            </div>

          </div>
          );
        })}
      </div>
    </div>
  );
}

// Congruence detail SVGs — both triangles same size
// Left: A(100,18) B(12,162) C(210,162)   Right: D(322,18) E(234,162) F(432,162)  [shift +222]
// △ABC: A(100,18) B(12,162) C(210,162)  △DEF: D(341,78) E(290,162) F(405,162)  k≈1.72
// △ABC: A(100,18) B(12,162) C(210,162)  △DEF: D(341,78) E(290,162) F(405,162)  k≈1.72
// △ABC: A(100,18) B(12,162) C(210,162)  △DEF: D(341,78) E(290,162) F(405,162)  k≈1.72
// Big right △ABC: B(25,170) A(25,80) C(145,170) — sides 6,8,10 (15px/unit)
// Small right △DEF: D(210,110) E(210,150) F(260,150) — sides 3,4,5 (10px/unit)
// Big △PQR: P(95,29) Q(12,170) R(198,170) — labeled PQ=12
// Small △XYZ: X(296,57) Y(240,151) Z(364,151) — labeled XY=?, k=3/2
// ── Ejercicio SVGs (congruencia) ──────────────────────────────────────────────
// Shared geometry: Left △ABC A(86,14) B(8,122) C(178,122)
//                  Right △DEF D(264,14) E(194,122) F(354,122)  viewBox 0 0 370 145


// ─── CriterioDetalle SVGs: Cuadriláteros ─────────────────────────────────────
function SlideCriterioDetalle({ slide, tema, resaltadoIdx, onResaltar }) {
  const compact = !!slide.svgDiagram;
  const winW = useWindowWidth();
  const narrow = winW < 500;
  // Tarjetas resaltables en orden: definición (0), diagrama, ¿por qué?
  const svgIndex = 1;
  const porQueIndex = 1 + (slide.svgDiagram ? 1 : 0);
  return (
    <div
      style={{
        padding: narrow ? "14px 14px" : compact ? "20px 32px" : "36px 44px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: narrow ? 10 : compact ? 14 : 22,
        boxSizing: "border-box",
        overflowY: "auto"
      }}
    >
      <Encabezado titulo={slide.titulo} etiqueta={slide.etiqueta} tema={tema} />

      <div
        onClick={() => onResaltar && onResaltar(0)}
        data-resaltado={resaltadoIdx === 0 ? "true" : undefined}
        style={{
          background: tema.acentoSuave,
          border: `1px solid ${resaltadoIdx === 0 ? tema.acento : tema.acentoBorde}`,
          borderRadius: 10,
          padding: compact ? "14px 22px" : "20px 28px",
          boxShadow: resaltadoIdx === 0 ? `0 0 0 2px ${tema.acentoBorde}, 0 0 16px ${tema.acentoBorde}` : "none",
          transform: "none",
          transition: "all 0.2s",
          cursor: onResaltar ? "pointer" : "default"
        }}
      >
        <p
          style={{
            fontSize: 15.5,
            color: tema.texto,
            lineHeight: 1.65,
            fontWeight: 300,
            margin: "0 0 14px"
          }}
        >
          {slide.enunciado}
        </p>
        <div style={{ textAlign: "center", fontSize: "1.15em" }}>
          <M>{slide.math}</M>
        </div>
      </div>

      {slide.svgDiagram && (
        <div
          onClick={() => onResaltar && onResaltar(svgIndex)}
          data-resaltado={resaltadoIdx === svgIndex ? "true" : undefined}
          style={{
            borderRadius: 10,
            border: `1px solid ${resaltadoIdx === svgIndex ? tema.acento : "transparent"}`,
            boxShadow: resaltadoIdx === svgIndex ? `0 0 0 2px ${tema.acentoBorde}, 0 0 16px ${tema.acentoBorde}` : "none",
            padding: 4,
            transition: "all 0.2s",
            cursor: onResaltar ? "pointer" : "default"
          }}
        >
      <Diagrama clave={slide.svgDiagram} tema={tema} />
        </div>
      )}

      <div
        onClick={() => onResaltar && onResaltar(porQueIndex)}
        data-resaltado={resaltadoIdx === porQueIndex ? "true" : undefined}
        style={{
          background: tema.azulSuave,
          border: `1px solid ${resaltadoIdx === porQueIndex ? tema.azul : tema.azulBorde}`,
          borderRadius: 10,
          padding: compact ? "12px 20px" : "18px 24px",
          boxShadow: resaltadoIdx === porQueIndex ? `0 0 0 2px ${tema.azulBorde}, 0 0 16px ${tema.azulBorde}` : "none",
          transform: "none",
          transition: "all 0.2s",
          cursor: onResaltar ? "pointer" : "default"
        }}
      >
        <div
          style={{
            fontFamily: tema.mono,
            fontSize: 10,
            letterSpacing: "0.2em",
            color: tema.azul,
            textTransform: "uppercase",
            marginBottom: 8
          }}
        >
          ¿Por qué funciona?
        </div>
        <p
          style={{
            fontSize: 14.5,
            color: tema.azulTexto,
            lineHeight: 1.6,
            margin: 0,
            marginBottom: slide.math_razon ? 12 : 0
          }}
        >
          {slide.por_que}
        </p>
        {slide.math_razon && (
          <div style={{ textAlign: "center", fontSize: "1.05em", marginTop: 10 }}>
            <M>{slide.math_razon}</M>
          </div>
        )}
      </div>
    </div>
  );
}

// Congruence example SVGs — same base triangle for all four
// Left: A(70,15) B(10,112) C(155,112)   Right: D(230,15) E(170,112) F(315,112)  [shift +160]
// Arc at A: M 82,29 A 18,18 0 0,1 61,30   Arc at B: M 17,100 A 14,14 0 0,1 24,112

// ── Semejanza example SVGs ────────────────────────────────────────────────────

function SlideEjemplo({ slide, tema, resaltadoIdx, onResaltar }) {
  const compact = !!slide.svgDiagram;
  const winW = useWindowWidth();
  const narrow = winW < 500;
  return (
    <div
      style={{
        padding: narrow ? "14px 14px" : compact ? "20px 28px" : "36px 44px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: narrow ? 10 : compact ? 14 : 22,
        boxSizing: "border-box",
        overflowY: "auto"
      }}
    >
      <Encabezado titulo={slide.titulo} etiqueta={slide.etiqueta} tema={tema} />

      <p style={{ fontSize: 15.5, color: "#c4bfb3", lineHeight: 1.65, margin: 0 }}>
        {slide.enunciado}
      </p>

      {/* When SVG is present it replaces the datos grid (side labels are embedded in SVG) */}
      {!compact && slide.datos.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: slide.datos.length > 1 ? "1fr 1fr" : "1fr",
            gap: 12
          }}
        >
          {slide.datos.map((d, i) => (
            <div
              key={i}
              style={{
                background: "rgba(0,0,0,0.38)",
                border: `1px solid ${tema.border}`,
                borderRadius: 8,
                padding: "14px 20px"
              }}
            >
              <div
                style={{
                  fontFamily: tema.mono,
                  fontSize: 10,
                  color: tema.acento,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: 10
                }}
              >
                {d.label}
              </div>
              <div style={{ textAlign: "center", fontSize: "1.1em" }}>
                <M>{d.math}</M>
              </div>
            </div>
          ))}
        </div>
      )}

      <Diagrama clave={slide.svgDiagram} tema={tema} />

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {slide.pasos.map((p, i) => {
          const activo = resaltadoIdx === i;
          return (
          <div
            key={i}
            onClick={() => onResaltar && onResaltar(i)}
            data-resaltado={activo ? "true" : undefined}
            style={{
              display: "flex", gap: 14, alignItems: "flex-start",
              background: activo ? tema.acentoSuave : "transparent",
              border: `1px solid ${activo ? tema.acento : "transparent"}`,
              borderRadius: 8,
              padding: activo ? "8px 12px" : "0",
              boxShadow: activo ? `0 0 0 2px ${tema.acentoBorde}, 0 0 16px ${tema.acentoBorde}` : "none",
              transform: "none",
              transition: "all 0.2s",
              cursor: onResaltar ? "pointer" : "default"
            }}
          >
            <div
              style={{
                minWidth: 26,
                height: 26,
                borderRadius: "50%",
                background: tema.acento,
                color: "#0d0d0f",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: tema.mono,
                fontSize: 11,
                fontWeight: 700,
                flexShrink: 0,
                marginTop: 3
              }}
            >
              {i + 1}
            </div>
            <div style={{ fontSize: 16, color: "#c4bfb3", lineHeight: 1.65, paddingTop: 3 }}>
              {p.pre}
              <M>{p.math}</M>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Semejanza advanced exercise SVGs ─────────────────────────────────────────

// ─── Ejercicio SVGs: Cuadriláteros y Polígonos ───────────────────────────────
// ── El Círculo: SVG components ───────────────────────────────────────────────

// Portada: Línea de Euler — circuncentro O, baricentro G, ortocentro H y
// el círculo de los nueve puntos inscritos.
// ── Triángulo inscrito: teorema del ángulo inscrito ─────────────────────────
// ── Triángulo inscrito: los tres casos (centro O respecto al ángulo) ────────
function InscritoCasoBase({ tema, A, C, B, derecha }) {
  const cx=75, cy=72, r=58;
  const bl=tema.azul, a=tema.acento, gr=tema.verde;
  const D=(d)=>d*Math.PI/180;
  const P=(deg)=>[+(cx+r*Math.cos(D(deg))).toFixed(1), +(cy+r*Math.sin(D(deg))).toFixed(1)];
  const [Ax,Ay]=P(A), [Cx,Cy]=P(C), [Bx,By]=P(B);
  return (
    <svg viewBox="0 0 150 148" width="100%" style={{display:"block",maxHeight:150}}>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="1.6" opacity="0.8"/>
      <polygon points={`${Ax},${Ay} ${Bx},${By} ${Cx},${Cy}`} fill={`${a}26`} stroke={a} strokeWidth="1.8"/>
      <circle cx={cx} cy={cy} r={2.8} fill={gr}/>
      <text x={cx+5} y={cy-4} fill={gr} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic">O</text>
      {derecha && (
        <path d={`M ${Bx-9},${By+1} L ${Bx-9},${By+10} L ${Bx},${By+10}`} fill="none" stroke={a} strokeWidth="1.5"/>
      )}
      <text x={Bx} y={By-5} fill={bl} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">B</text>
    </svg>
  );
}
function InscritoDiametroSVG({ tema }) { return <InscritoCasoBase tema={tema} A={180} C={0} B={-90} derecha />; }
function InscritoDentroSVG({ tema })   { return <InscritoCasoBase tema={tema} A={158} C={22} B={-90} />; }
function InscritoFueraSVG({ tema })    { return <InscritoCasoBase tema={tema} A={18}  C={74} B={-115} />; }

// ── Ejercicios del triángulo inscrito ───────────────────────────────────────
// ── Círculo: ejercicios básicos SVG ──────────────────────────────────────────

// ── Áreas sombreadas: SVG ─────────────────────────────────────────────────────

// ════════════════════════════════════════════════════════════════════════════
// PROBABILIDAD
// ════════════════════════════════════════════════════════════════════════════

// Posiciones de los puntos de un dado dentro de una celda unitaria (0–1).


// Los 3 axiomas de Kolmogorov: no negatividad, normalización y aditividad.
// Una moneda: dos resultados igualmente probables, «cara» favorable resaltada.
// Dardo en diana circular: probabilidad geométrica (área del blanco / área total).
// Rejilla 6×6 de dos dados (36 resultados; diagonal suma = 7 resaltada).
// Permutaciones (orden importa) vs combinaciones (orden no importa), eligiendo 2 de {A,B,C}.
// ─── Árbol del principio multiplicativo (2 platos × 3 bebidas) con React Flow ──


// Evento complementario: Ω (rectángulo) con E (círculo) y su complemento E′.
// Regla de la suma: excluyentes (disjuntos) vs no excluyentes (con intersección).
// ─── Teoría de conjuntos: Venn de dos conjuntos A y B en Ω (intersección sombreada) ──
// ─── Teoría de conjuntos: Venn con cardinalidades (problema de inclusión-exclusión) ──
// ─── Distribución de probabilidad: suma de dos dados (forma triangular, máx en 7) ──
// ─── Distribución binomial: nº de caras en 4 lanzamientos de moneda (p = ½) ────
// ─── Árbol de 2 lanzamientos de moneda (regla del producto) con React Flow ────
// ─── Árbol de 3 lanzamientos de moneda (principio multiplicativo) ─────────────
// ─── Árbol de urna sin reemplazo (probabilidad condicional) con React Flow ────
// ─── Frecuencias relativas de lanzar un dado (probabilidad frecuentista) ──────

// ─── Diagramas de los ejercicios de probabilidad ─────────────────────────────

// Dado con las caras > 4 resaltadas (ejercicio 1).
// Carta de baraja: as de picas (ejercicio 2).
// Los 4 resultados de 2 monedas; los que tienen ≥1 cara resaltados (ejercicio 4).
// Urna con bolas de colores en una rejilla de 3 columnas.
// Moneda (cara) y dado (6) — eventos independientes (ejercicio 6).
// Ruleta de 8 sectores con los números primos resaltados (ejercicio 8).
// 5 personas y las 10 parejas posibles = C(5,2) (ejercicio 9).
// Aguja de Buffon: líneas paralelas y agujas; las que cruzan una línea resaltadas.
// Tachuela: dos resultados NO equiprobables — barras de frecuencia desiguales.
// Paradoja del cumpleaños: P(coincidencia) crece y cruza ½ en n = 23.
// Monty Hall: 3 puertas equiprobables; quedarte (1/3) vs cambiar (2/3).
// Permutaciones: llenar 3 casillas (podio) eligiendo de 5 → 5×4×3 = 5!/2!.
// Combinaciones: las 3! ordenaciones de {A,B,C} son el mismo grupo → ÷ r!.
// ═══════════════════════════════════════════════════════════════════════════
// Diagramas de Estadística descriptiva
// ═══════════════════════════════════════════════════════════════════════════

// Datos de ejemplo compartidos: distribución de 20 calificaciones (6 a 10).

// Portada: barras con una línea de media punteada.
// Árbol de clasificación de variables.
// Tabla de frecuencias (HTML) de las 20 calificaciones.
// Tabla-ejemplo: 5 estudiantes (la muestra) con una variable de cada tipo.
// Sirve de ancla concreta antes de definir los conceptos de la diapositiva siguiente.
// Gráfica de barras (Recharts) de la tabla de frecuencias.
// Recta numérica con los puntos {2,2,6,7,8} y las tres medidas marcadas.
// Dos rectas numéricas con la misma media (8) y distinta dispersión.
// Recta numérica con las desviaciones de {2,4,6,8,10} respecto a la media 6.
// Dos rectas numéricas: A={3,4,5,6,7} R=4 vs B={3,4,5,6,23} R=20 — muestra cómo un outlier infla el rango.
// Tabla de cálculo de σ con {4,6,8}: columnas x, x−x̄, (x−x̄)².
// Gráfica circular (sectores) de la distribución de calificaciones.
// Ejemplo de gráfica de BARRAS (separadas): deporte favorito de 20 alumnos.
// Ejemplo de HISTOGRAMA (barras juntas): estatura en cm de 20 alumnos, por intervalos.
// Ejemplo de gráfica CIRCULAR: medio de transporte de 20 alumnos, con % y grados.
// Dot-plot genérico para la MEDIA: puntos sobre una recta + línea en la media.
// Dot-plot genérico para la MEDIANA: datos ordenados, resaltando el/los central(es).
// Barras de frecuencia genéricas para la MODA: resalta la(s) barra(s) más alta(s).
// Diagrama de caja (boxplot) genérico para CUARTILES / PERCENTILES.
// Recibe diagramData (arreglo de números); lo ordena y marca Q1, Q2 (mediana) y Q3
// con el método de «mediana de cada mitad» (el que se usa en EXANI).
// Helper: fila de valores en celdas, con algunos resaltados.

// Helper: mini gráfica de barras de frecuencias, con una barra resaltada.

// Recta numérica con el mínimo y el máximo resaltados (rango).
// ═══════════════════════════════════════════════════════════════════════════
// Diagramas de Cinemática (Física)
// ═══════════════════════════════════════════════════════════════════════════

// Punta de flecha para un segmento (x1,y1)→(x2,y2).

// Ejes con flechas; etiquetas de los extremos.

// ═══════════════════════════════════════════════════════════════════════════
// Diagramas de Dinámica (Leyes de Newton)
// ═══════════════════════════════════════════════════════════════════════════

// Caja con etiqueta (bloque genérico).

// Vector con punta de flecha y etiqueta.

// ═══════════════════════════════════════════════════════════════════════════
// Diagramas de Trabajo y Energía
// ═══════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════
// Diagramas de Termodinámica
// ═══════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════
// Diagramas de Ondas, Sonido y Óptica
// ═══════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════
// Diagramas de Electricidad y Magnetismo
// ═══════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════
// Diagramas de Fluidos
// ═══════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════
// Diagramas de Física Moderna
// ═══════════════════════════════════════════════════════════════════════════

function SlideEjercicio({ slide, modo, votos, votantes, perfiles, totalVotos, respuestaDada, onResponder, tema, resaltadoIdx, onResaltar }) {
  const done = respuestaDada !== null && respuestaDada !== undefined;
  const correcta = slide.correcta;

  // Shuffle determinístico: misma semilla → mismo orden para maestro y alumnos.
  const shuffledOrder = useMemo(() => {
    const seed = typeof slide.id === "number"
      ? slide.id
      : String(slide.id).split("").reduce((a, c) => a * 31 + c.charCodeAt(0), 0);
    return shuffleIndices(slide.opciones.length, seed);
  }, [slide.id, slide.opciones.length]);

  // Votos remapeados al orden de display para el histograma del director.
  const votosMapped = useMemo(() => {
    if (!votos) return votos;
    return shuffledOrder.reduce((acc, origIdx, displayIdx) => {
      acc[displayIdx] = votos[origIdx] || 0;
      return acc;
    }, {});
  }, [votos, shuffledOrder]);

  const correctaDisplay = shuffledOrder.indexOf(correcta);
  const opcionesDisplay = shuffledOrder.map(origIdx => slide.opciones[origIdx]);

  return (
    <div
      style={{
        padding: modo === "director" ? "28px 36px" : "24px 16px",
        height: "100%",
        display: "flex",
        gap: 20,
        boxSizing: "border-box",
        overflowY: "auto"
      }}
    >
      {/* Pregunta + opciones */}
      <div
        style={{ flex: 1, display: "flex", flexDirection: "column", gap: 18, minWidth: 0 }}
      >
        <div
          style={{
            fontFamily: tema.mono,
            fontSize: 11,
            color: tema.acento,
            letterSpacing: "0.18em",
            textTransform: "uppercase"
          }}
        >
          {slide.etiqueta}
        </div>

        <p
          style={{
            fontSize: modo === "director" ? 17 : 19,
            color: tema.texto,
            lineHeight: 1.65,
            margin: 0
          }}
          translate="no"
        >
          {slide.pregunta}
        </p>

        {slide.math_pregunta && (
          <div
            style={{
              background: "rgba(0,0,0,0.4)",
              border: `1px solid ${tema.border}`,
              borderRadius: 8,
              padding: "16px",
              textAlign: "center",
              fontSize: "1.4em"
            }}
          >
            <M>{slide.math_pregunta}</M>
          </div>
        )}

        {/* Diagrama SVG del ejercicio */}
        {slide.svgDiagram && (
          <div style={{ maxWidth: 380, width: "100%", alignSelf: "center" }}>
            <Diagrama clave={slide.svgDiagram} tema={tema} />
          </div>
        )}

        {/* Opciones en orden mezclado (igual para maestro y alumnos) */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: 10, alignContent: "start" }}
        >
          {shuffledOrder.map((origIdx, displayIdx) => {
            const op = slide.opciones[origIdx];
            const isOk = origIdx === correcta;
            const isSel = respuestaDada === origIdx;

            let bg = "rgba(255,255,255,0.04)";
            let border = "1px solid rgba(255,255,255,0.1)";
            let color = tema.texto;

            // Al resolver, la única opción con color es la correcta. La que eligió
            // el alumno no se tacha ni se pinta de rojo: se marca con un contorno
            // punteado y se deja que la explicación haga el trabajo
            // (docs/DISENO.md §2.4). Antes esto eran cuatro hex a mano, azul para
            // la correcta y ámbar para la elegida, sin pasar por el tema.
            if (modo === "alumno" && done) {
              if (isOk) {
                bg = tema.acentoMed;
                border = `2px solid ${tema.acentoFuerte}`;
                color = tema.acento;
              } else if (isSel) {
                bg = "transparent";
                border = `1px dashed ${tema.sub}`;
                color = tema.muted;
              }
            }

            const votoCount = votos?.[origIdx] || 0;

            // resaltadoIdx viene del director usando índices originales
            const resaltado = resaltadoIdx === origIdx;
            if (resaltado) {
              border = `2px solid ${tema.acento}`;
              bg = bg === "rgba(255,255,255,0.04)" ? tema.acentoSuave : bg;
            }

            return (
              <button
                key={origIdx}
                data-resaltado={resaltado ? "true" : undefined}
                onClick={() => {
                  if (modo === "alumno" && !done) onResponder(origIdx);
                  if (modo === "director" && onResaltar) onResaltar(origIdx);
                }}
                disabled={modo === "alumno" && done}
                style={{
                  padding: "14px 18px",
                  border,
                  borderRadius: 10,
                  background: bg,
                  color,
                  fontSize: 16,
                  fontFamily: "inherit",
                  cursor: (modo === "alumno" && !done) || modo === "director" ? "pointer" : "default",
                  transition: "all 0.2s",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  minHeight: 60,
                  boxShadow: resaltado ? `0 0 0 2px ${tema.acentoBorde}, 0 0 18px ${tema.acentoBorde}` : "none",
                  transform: "none",
                }}
              >
                <span
                  style={{
                    fontFamily: tema.mono,
                    fontSize: 12,
                    color: "rgba(255,255,255,0.28)",
                    flexShrink: 0
                  }}
                >
                  {String.fromCharCode(65 + displayIdx)}.
                </span>
                <span style={{ flex: 1 }} translate="no">{op.includes('\\') ? <M>{op}</M> : op}</span>
                {modo === "director" && votos !== undefined && (
                  <span
                    style={{
                      fontFamily: tema.mono,
                      fontSize: 11,
                      color: tema.muted,
                      flexShrink: 0
                    }}
                  >
                    {votoCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Retroalimentación del alumno */}
        {modo === "alumno" && done && (
          <div
            style={{
              padding: "14px 18px",
              borderRadius: 8,
              background: respuestaDada === correcta ? "rgba(59,158,255,0.10)" : "rgba(245,200,66,0.08)",
              border: `1px solid ${respuestaDada === correcta ? "rgba(59,158,255,0.35)" : "rgba(245,200,66,0.4)"}`,
              color: respuestaDada === correcta ? "#3b9eff" : "#f5c842",
              fontSize: 14.5,
              lineHeight: 1.6
            }}
          >
            <b style={{ fontFamily: tema.mono, fontSize: 10.5, letterSpacing: "0.16em",
              textTransform: "uppercase", color: tema.acento, marginRight: 10, fontWeight: 500 }}>
              {respuestaDada === correcta ? "Así es" : "Aún no"}
            </b>
            {slide.explicacion}
          </div>
        )}
      </div>

      {/* Histograma en modo director */}
      {modo === "director" && (
        <HistogramaVotos
          votos={votosMapped}
          totalVotos={totalVotos}
          opciones={opcionesDisplay}
          correcta={correctaDisplay}
          votantes={votantes}
          perfiles={perfiles}
          shuffledOrder={shuffledOrder}
          tema={tema}
        />
      )}
    </div>
  );
}

function SlideResumen({ slide, tema, resaltadoIdx, onResaltar }) {
  return (
    <div
      style={{
        padding: "36px 44px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 24,
        boxSizing: "border-box"
      }}
    >
      <Encabezado titulo={slide.titulo} etiqueta={slide.etiqueta} tema={tema} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {slide.puntos.map((p, i) => {
          const activo = resaltadoIdx === i;
          return (
          <div
            key={i}
            onClick={() => onResaltar && onResaltar(i)}
            data-resaltado={activo ? "true" : undefined}
            style={{
              background: activo ? tema.acentoSuave : tema.card,
              border: `1px solid ${activo ? tema.acento : tema.border}`,
              borderRadius: 10,
              padding: "14px 18px",
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
              boxShadow: activo ? `0 0 0 2px ${tema.acentoBorde}, 0 0 16px ${tema.acentoBorde}` : "none",
              transform: "none",
              transition: "all 0.2s",
              cursor: onResaltar ? "pointer" : "default"
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: tema.acento,
                flexShrink: 0,
                marginTop: 9
              }}
            />
            <div>
              {p.math && (
                <div style={{ marginBottom: 5, fontSize: "1.08em" }}>
                  <M>{p.math}</M>
                </div>
              )}
              {p.titulo && (
                <div
                  style={{
                    fontWeight: 600,
                    color: tema.acento,
                    marginBottom: 3,
                    fontSize: 13.5
                  }}
                >
                  {p.titulo}
                </div>
              )}
              <div style={{ fontSize: 13.5, color: tema.sub, lineHeight: 1.5 }}>
                {p.texto}
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}

function SlideReglaRica({ slide, tema, resaltadoIdx, onResaltar }) {
  return (
    <div
      style={{
        padding: "20px 24px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        boxSizing: "border-box",
        overflowY: "auto"
      }}
    >
      <div>
        <div
          style={{
            fontFamily: tema.mono,
            fontSize: 10,
            letterSpacing: "0.2em",
            color: tema.acento,
            textTransform: "uppercase",
            marginBottom: 6,
            opacity: 0.75
          }}
        >
          {slide.etiqueta}
        </div>
        <h2
          style={{
            fontFamily: "'Sora', system-ui, sans-serif",
            fontSize: "clamp(18px, 2.4vw, 28px)",
            fontWeight: 700,
            color: tema.texto,
            letterSpacing: "-0.01em",
            margin: 0,
            lineHeight: 1.2
          }}
        >
          {slide.titulo}
        </h2>
      </div>

      {slide.bloques.map((bloque, i) => {
        const activo = resaltadoIdx === i;
        const clickable = !!onResaltar;
        const handleClick = () => onResaltar && onResaltar(i);
        const sharedActive = {
          boxShadow: activo ? `0 0 0 2px ${tema.acentoBorde}, 0 0 18px ${tema.acentoBorde}` : "none",
          transform: "none",
          transition: "all 0.2s",
          cursor: clickable ? "pointer" : "default",
        };

        if (bloque.tipo === "texto") {
          return (
            <div
              key={i}
              onClick={handleClick}
              data-resaltado={activo ? "true" : undefined}
              style={{
                background: tema.acentoSuave,
                border: activo ? `2px solid ${tema.acento}` : `1px solid ${tema.acentoBorde}`,
                borderRadius: 8,
                padding: "10px 18px",
                flexShrink: 0,
                ...sharedActive
              }}
            >
              <p style={{ fontSize: 13.5, color: tema.texto, lineHeight: 1.65, margin: 0, fontWeight: 300 }}>
                {bloque.texto}
              </p>
            </div>
          );
        }

        if (bloque.tipo === "par") {
          return (
            <div
              key={i}
              onClick={handleClick}
              data-resaltado={activo ? "true" : undefined}
              style={{
                background: activo ? tema.acentoSuave : tema.card,
                border: activo ? `2px solid ${tema.acento}` : `1px solid ${tema.border}`,
                borderRadius: 8,
                padding: "10px 14px",
                flexShrink: 0,
                ...sharedActive
              }}
            >
              {bloque.etiqueta && (
                <div
                  style={{
                    fontFamily: tema.mono,
                    fontSize: 8.5,
                    color: tema.muted,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginBottom: 8
                  }}
                >
                  {bloque.etiqueta}
                </div>
              )}
              <div style={{ fontSize: 13, color: tema.texto, lineHeight: 1.55, marginBottom: 5 }}>
                <IconoAsiEs tema={tema} />{" "}
                {bloque.correcto}
              </div>
              <div style={{ height: 1, background: tema.border, margin: "5px 0" }} />
              <div style={{ fontSize: 13, color: tema.muted, lineHeight: 1.55 }}>
                <IconoAsiNo tema={tema} />{" "}
                {bloque.incorrecto}
              </div>
            </div>
          );
        }

        if (bloque.tipo === "tabla") {
          return (
            <div
              key={i}
              onClick={handleClick}
              data-resaltado={activo ? "true" : undefined}
              style={{
                background: "rgba(0,0,0,0.35)",
                border: activo ? `2px solid ${tema.acento}` : `1px solid ${tema.border}`,
                borderRadius: 8,
                overflow: "hidden",
                flexShrink: 0,
                ...sharedActive
              }}
            >
              {bloque.titulo && (
                <div
                  style={{
                    fontFamily: tema.mono,
                    fontSize: 9,
                    letterSpacing: "0.18em",
                    color: activo ? tema.acento : tema.acento,
                    textTransform: "uppercase",
                    padding: "7px 14px 5px",
                    borderBottom: `1px solid ${tema.border}`,
                    opacity: 0.8
                  }}
                >
                  {bloque.titulo}
                </div>
              )}
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5 }}>
                <thead>
                  {(() => {
                    const [c0, c1, c2] = bloque.columnas || ["Situación", "Así es", "Así no"];
                    return (
                      <tr style={{ borderBottom: `1px solid ${tema.border}` }}>
                        <th style={{ padding: "5px 14px", textAlign: "left", color: tema.muted, fontFamily: tema.mono, fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 400 }}>{c0}</th>
                        <th style={{ padding: "5px 14px", textAlign: "left", color: tema.texto, fontFamily: tema.mono, fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 400 }}>{c1}</th>
                        <th style={{ padding: "5px 14px", textAlign: "left", color: tema.muted, fontFamily: tema.mono, fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 400 }}>{c2}</th>
                      </tr>
                    );
                  })()}
                </thead>
                <tbody>
                  {bloque.filas.map((fila, j) => (
                    <tr
                      key={j}
                      style={{ borderBottom: j < bloque.filas.length - 1 ? `1px solid rgba(255,255,255,0.05)` : "none" }}
                    >
                      <td style={{ padding: "5px 14px", color: tema.sub, fontStyle: "italic" }}>{fila.tiempo}</td>
                      <td style={{ padding: "5px 14px", color: tema.texto, fontFamily: tema.mono, fontWeight: 600 }}>{fila.correcto}</td>
                      <td style={{ padding: "5px 14px", color: tema.muted, fontFamily: tema.mono }}>{fila.error}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        if (bloque.tipo === "diagrama") {
          return (
            <div key={i} onClick={handleClick} data-resaltado={activo ? "true" : undefined}
              style={{
                background: "rgba(0,0,0,0.25)",
                border: activo ? `2px solid ${tema.acento}` : `1px solid ${tema.border}`,
                borderRadius: 8, padding: "8px 10px", flexShrink: 0, ...sharedActive,
              }}>
              {bloque.titulo && (
                <div style={{ fontFamily: tema.mono, fontSize: 8.5, color: tema.acento, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 6, opacity: 0.8 }}>
                  {bloque.titulo}
                </div>
              )}
              <Diagrama clave={bloque.id} tema={tema} />
            </div>
          );
        }

        if (bloque.tipo === "trampa") {
          const colorMap = { A: tema.acento, B: tema.azul, C: tema.verde };
          const color = colorMap[bloque.letra] || tema.acento;
          return (
            <div
              key={i}
              onClick={handleClick}
              data-resaltado={activo ? "true" : undefined}
              style={{
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
                background: activo ? tema.acentoSuave : tema.card,
                border: activo ? `2px solid ${tema.acento}` : `1px solid ${color}44`,
                borderRadius: 8,
                padding: "10px 14px",
                flexShrink: 0,
                ...sharedActive
              }}
            >
              <div
                style={{
                  minWidth: 28,
                  height: 28,
                  borderRadius: 6,
                  background: `${color}20`,
                  border: `1.5px solid ${color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: tema.mono,
                  fontSize: 11,
                  fontWeight: 700,
                  color,
                  flexShrink: 0,
                  marginTop: 2
                }}
              >
                {bloque.letra}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: tema.mono,
                    fontSize: 9,
                    color,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: 7
                  }}
                >
                  Trampa {bloque.letra} — {bloque.titulo}
                </div>
                <div style={{ fontSize: 12.5, color: tema.texto, lineHeight: 1.5, marginBottom: 5 }}>
                  <IconoAsiEs tema={tema} />{" "}
                  {bloque.correcto}
                </div>
                <div style={{ fontSize: 12.5, color: tema.muted, lineHeight: 1.5 }}>
                  <IconoAsiNo tema={tema} />{" "}
                  {bloque.incorrecto}
                </div>
              </div>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}

// ─── Árbol de decisión interactivo: ¿lleva tilde? ────────────────────────────

const HANDLE_HIDDEN = { background: 'transparent', border: 'none', width: 8, height: 8 };

function FNStart({ data }) {
  return (
    <div style={{ padding: '4px 18px', borderRadius: 20, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.18)', fontSize: 11, fontWeight: 700, color: data.t, letterSpacing: '0.14em', textAlign: 'center', opacity: data.dim ? 0.15 : 1, transition: 'opacity 0.35s' }}>
      {data.label}
      <Handle type="source" position={Position.Bottom} style={HANDLE_HIDDEN} />
    </div>
  );
}

function FNQuestion({ data }) {
  const col = data.col || '#3b9eff';
  return (
    <div style={{ padding: '6px 12px', borderRadius: 8, minWidth: 140, background: `${col}16`, border: `1.5px solid ${col}${data.glow ? '' : '80'}`, fontSize: 10, color: data.t, textAlign: 'center', lineHeight: 1.4, opacity: data.dim ? 0.15 : 1, transition: 'all 0.35s', boxShadow: data.glow ? `0 0 14px ${col}55` : 'none' }}>
      <Handle type="target" position={Position.Top} style={HANDLE_HIDDEN} />
      {data.label}
      <Handle type="source" id="si"     position={Position.Left}   style={HANDLE_HIDDEN} />
      <Handle type="source" id="no"     position={Position.Right}  style={HANDLE_HIDDEN} />
      <Handle type="source" id="bottom" position={Position.Bottom} style={HANDLE_HIDDEN} />
      <Handle type="source" id="b25"    position={Position.Bottom} style={{ ...HANDLE_HIDDEN, left: '25%' }} />
      <Handle type="source" id="b50"    position={Position.Bottom} style={{ ...HANDLE_HIDDEN, left: '50%' }} />
      <Handle type="source" id="b75"    position={Position.Bottom} style={{ ...HANDLE_HIDDEN, left: '75%' }} />
    </div>
  );
}

function FNType({ data }) {
  const col = data.col || '#3b9eff';
  return (
    <div style={{ padding: '4px 12px', borderRadius: 16, background: `${col}22`, border: `1.5px solid ${col}70`, fontSize: 9.5, color: col, fontWeight: 700, textAlign: 'center', lineHeight: 1.35, opacity: data.dim ? 0.15 : 1, transition: 'opacity 0.35s' }}>
      <Handle type="target" position={Position.Top} style={HANDLE_HIDDEN} />
      {data.label}
      <Handle type="source" position={Position.Bottom} style={HANDLE_HIDDEN} />
    </div>
  );
}

function FNResult({ data }) {
  const isTilde = data.result !== 'no';
  const col = isTilde ? '#4ade80' : '#f5c842';
  const isActive = data.active;
  return (
    <div onClick={data.onClick} style={{ padding: '6px 10px', borderRadius: 8, minWidth: 88, background: `${col}${isActive ? '22' : '0d'}`, border: `${isActive ? '2px' : '1px'} solid ${col}${isActive ? '' : '60'}`, fontSize: 10, color: col, fontWeight: 700, textAlign: 'center', lineHeight: 1.4, cursor: 'pointer', opacity: data.dim ? 0.15 : 1, transition: 'all 0.35s', boxShadow: isActive ? `0 0 18px ${col}55` : 'none', userSelect: 'none' }}>
      <Handle type="target" position={Position.Top} style={HANDLE_HIDDEN} />
      <div style={{ fontFamily: 'monospace', letterSpacing: '0.06em', marginBottom: 2 }}>{data.label}</div>
      {data.sub && <div style={{ fontSize: 8, opacity: 0.75, fontWeight: 400, lineHeight: 1.3 }}>{data.sub}</div>}
    </div>
  );
}

const FLOW_NODE_TYPES = { start: FNStart, question: FNQuestion, type: FNType, result: FNResult };

// Paths: cada resultado → conjuntos de nodos y aristas que lo conectan al inicio
const TILDE_PATHS = {
  r1: { n: new Set(['start','nmono','ndiac','r1']),          e: new Set(['e0','e_msi','e_dsi']) },
  r2: { n: new Set(['start','nmono','ndiac','r2']),          e: new Set(['e0','e_msi','e_dno']) },
  r3: { n: new Set(['start','nmono','npos','naguda','nagc','r3']),  e: new Set(['e0','e_mno','e_ag','e4','e_agsi']) },
  r4: { n: new Set(['start','nmono','npos','naguda','nagc','r4']),  e: new Set(['e0','e_mno','e_ag','e4','e_agno']) },
  r5: { n: new Set(['start','nmono','npos','nllana','nllc','r5']),  e: new Set(['e0','e_mno','e_ll','e5','e_llsi']) },
  r6: { n: new Set(['start','nmono','npos','nllana','nllc','r6']),  e: new Set(['e0','e_mno','e_ll','e5','e_llno']) },
  r7: { n: new Set(['start','nmono','npos','nesdruj','r7']),  e: new Set(['e0','e_mno','e_es','e6']) },
};

function SlideArbolDecision({ slide, tema }) {
  const [activeResult, setActiveResult] = useState(null);
  const winW = useWindowWidth();

  const activePath = activeResult ? TILDE_PATHS[activeResult] : null;
  const nDim  = (id) => activePath ? !activePath.n.has(id) : false;
  const nGlow = (id) => activePath ? activePath.n.has(id) : false;
  const eDim  = (id) => activePath ? !activePath.e.has(id) : false;
  const eOn   = (id) => activePath ? activePath.e.has(id) : false;

  const toggle = (id) => setActiveResult(p => p === id ? null : id);

  const eStyle = (id) => ({
    stroke: eOn(id) ? '#4ade80' : eDim(id) ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.25)',
    strokeWidth: eOn(id) ? 2.2 : 1.2,
    transition: 'stroke 0.35s, stroke-width 0.35s',
    filter: eOn(id) ? 'drop-shadow(0 0 3px #4ade8077)' : 'none',
  });
  const eLabelStyle = (id) => ({
    fill: eOn(id) ? '#4ade80' : '#94a3b8',
    fontSize: 8, fontFamily: 'monospace',
    transition: 'fill 0.35s',
  });
  const eLabelBg = (id) => ({
    fill: eOn(id) ? '#0d1f12' : '#0e0f11',
    rx: 3,
  });

  const T = tema.texto;
  const nodes = useMemo(() => [
    { id: 'start',  type: 'start',    position: { x: 247, y:   0 }, data: { label: 'PALABRA', t: T, dim: nDim('start') } },
    { id: 'nmono',  type: 'question', position: { x: 215, y:  44 }, data: { label: '¿Es monosílabo?', col: '#94a3b8', t: T, dim: nDim('nmono'), glow: nGlow('nmono') } },
    { id: 'ndiac',  type: 'question', position: { x:   8, y: 132 }, data: { label: '¿Tiene par\ndiacrítico?', col: '#94a3b8', t: T, dim: nDim('ndiac'), glow: nGlow('ndiac') } },
    { id: 'npos',   type: 'question', position: { x: 446, y: 132 }, data: { label: '¿Dónde cae\nla tónica?', col: '#94a3b8', t: T, dim: nDim('npos'), glow: nGlow('npos') } },
    { id: 'r1',     type: 'result',   position: { x:   4, y: 222 }, data: { label: 'TILDE', sub: 'él·mí·tú·sé·sí…', result: 'si', active: activeResult === 'r1', dim: nDim('r1'), onClick: () => toggle('r1') } },
    { id: 'r2',     type: 'result',   position: { x: 116, y: 222 }, data: { label: 'SIN TILDE', sub: 'fue·vio·pie…', result: 'no', active: activeResult === 'r2', dim: nDim('r2'), onClick: () => toggle('r2') } },
    { id: 'naguda', type: 'type',     position: { x: 242, y: 222 }, data: { label: 'AGUDA\núltima', col: tema.acento, dim: nDim('naguda') } },
    { id: 'nllana', type: 'type',     position: { x: 518, y: 222 }, data: { label: 'LLANA\npenúltima', col: tema.azul, dim: nDim('nllana') } },
    { id: 'nesdruj',type: 'type',     position: { x: 652, y: 222 }, data: { label: 'ESDRÚJ./SOBR.\nante-penúlt.+', col: tema.verde, dim: nDim('nesdruj') } },
    { id: 'nagc',   type: 'question', position: { x: 214, y: 302 }, data: { label: '¿Termina en\nvocal, N o S?', col: tema.acento, t: T, dim: nDim('nagc'), glow: nGlow('nagc') } },
    { id: 'nllc',   type: 'question', position: { x: 491, y: 302 }, data: { label: '¿Termina en\nvocal, N o S?', col: tema.azul, t: T, dim: nDim('nllc'), glow: nGlow('nllc') } },
    { id: 'r7',     type: 'result',   position: { x: 665, y: 302 }, data: { label: 'SIEMPRE\nTILDE', sub: 'médico·sílaba…', result: 'si', active: activeResult === 'r7', dim: nDim('r7'), onClick: () => toggle('r7') } },
    { id: 'r3',     type: 'result',   position: { x: 148, y: 396 }, data: { label: 'TILDE', sub: 'café·jardín…', result: 'si', active: activeResult === 'r3', dim: nDim('r3'), onClick: () => toggle('r3') } },
    { id: 'r4',     type: 'result',   position: { x: 262, y: 396 }, data: { label: 'SIN TILDE', sub: 'reloj·verdad…', result: 'no', active: activeResult === 'r4', dim: nDim('r4'), onClick: () => toggle('r4') } },
    { id: 'r5',     type: 'result',   position: { x: 438, y: 396 }, data: { label: 'SIN TILDE', sub: 'casa·examen…', result: 'no', active: activeResult === 'r5', dim: nDim('r5'), onClick: () => toggle('r5') } },
    { id: 'r6',     type: 'result',   position: { x: 556, y: 396 }, data: { label: 'TILDE', sub: 'árbol·fácil…', result: 'si', active: activeResult === 'r6', dim: nDim('r6'), onClick: () => toggle('r6') } },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ], [activeResult, tema]);

  const edges = useMemo(() => [
    { id: 'e0',    source: 'start',  target: 'nmono',  style: eStyle('e0') },
    { id: 'e_msi', source: 'nmono',  sourceHandle: 'si', target: 'ndiac', label: 'SÍ', labelStyle: eLabelStyle('e_msi'), labelBgStyle: eLabelBg('e_msi'), style: eStyle('e_msi') },
    { id: 'e_mno', source: 'nmono',  sourceHandle: 'no', target: 'npos',  label: 'NO', labelStyle: eLabelStyle('e_mno'), labelBgStyle: eLabelBg('e_mno'), style: eStyle('e_mno') },
    { id: 'e_dsi', source: 'ndiac',  sourceHandle: 'si', target: 'r1',    label: 'SÍ', labelStyle: eLabelStyle('e_dsi'), labelBgStyle: eLabelBg('e_dsi'), style: eStyle('e_dsi') },
    { id: 'e_dno', source: 'ndiac',  sourceHandle: 'no', target: 'r2',    label: 'NO', labelStyle: eLabelStyle('e_dno'), labelBgStyle: eLabelBg('e_dno'), style: eStyle('e_dno') },
    { id: 'e_ag',  source: 'npos',   sourceHandle: 'b25', target: 'naguda', style: eStyle('e_ag') },
    { id: 'e_ll',  source: 'npos',   sourceHandle: 'b50', target: 'nllana', style: eStyle('e_ll') },
    { id: 'e_es',  source: 'npos',   sourceHandle: 'b75', target: 'nesdruj', style: eStyle('e_es') },
    { id: 'e4',    source: 'naguda', target: 'nagc',   style: eStyle('e4') },
    { id: 'e5',    source: 'nllana', target: 'nllc',   style: eStyle('e5') },
    { id: 'e6',    source: 'nesdruj',target: 'r7',     style: eStyle('e6') },
    { id: 'e_agsi',source: 'nagc',   sourceHandle: 'si', target: 'r3',   label: 'SÍ', labelStyle: eLabelStyle('e_agsi'), labelBgStyle: eLabelBg('e_agsi'), style: eStyle('e_agsi') },
    { id: 'e_agno',source: 'nagc',   sourceHandle: 'no', target: 'r4',   label: 'NO', labelStyle: eLabelStyle('e_agno'), labelBgStyle: eLabelBg('e_agno'), style: eStyle('e_agno') },
    { id: 'e_llsi',source: 'nllc',   sourceHandle: 'si', target: 'r5',   label: 'SÍ', labelStyle: eLabelStyle('e_llsi'), labelBgStyle: eLabelBg('e_llsi'), style: eStyle('e_llsi') },
    { id: 'e_llno',source: 'nllc',   sourceHandle: 'no', target: 'r6',   label: 'NO', labelStyle: eLabelStyle('e_llno'), labelBgStyle: eLabelBg('e_llno'), style: eStyle('e_llno') },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ], [activeResult]);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '10px 18px 4px', flexShrink: 0 }}>
        <div style={{ fontFamily: tema.mono, fontSize: 9, letterSpacing: '0.2em', color: tema.acento, textTransform: 'uppercase', opacity: 0.75 }}>{slide.etiqueta}</div>
        <h2 style={{ fontFamily: "'Sora', system-ui, sans-serif", fontSize: 'clamp(15px, 2.2vw, 22px)', fontWeight: 700, color: tema.texto, margin: '2px 0 0', lineHeight: 1.2 }}>{slide.titulo}</h2>
        <div style={{ fontFamily: tema.mono, fontSize: 8.5, color: tema.muted, marginTop: 3 }}>
          {activeResult ? '✓ Toca otro resultado para cambiar · o toca el mismo para deseleccionar' : 'Toca cualquier resultado (verde/amarillo) para iluminar ese camino'}
        </div>
      </div>
      <div style={{ flex: 1, position: 'relative', minHeight: 0 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={FLOW_NODE_TYPES}
          fitView
          fitViewOptions={{ padding: winW < 500 ? 0.08 : 0.14 }}
          nodesDraggable={false}
          nodesConnectable={false}
          nodesFocusable={false}
          edgesFocusable={false}
          panOnDrag={true}
          zoomOnScroll={false}
          zoomOnPinch={true}
          preventScrolling={false}
          proOptions={{ hideAttribution: true }}
          style={{ background: 'transparent' }}
        >
          <Background color="rgba(255,255,255,0.025)" gap={22} size={1} />
        </ReactFlow>
      </div>
    </div>
  );
}

// ─── Acentuación: diagrama de posición del acento ────────────────────────────
// ─── Acentuación: diptongo vs. hiato ─────────────────────────────────────────
// ─── Cohesión Gramatical: Panorama ────────────────────────────────────────────
// ─── Cohesión Gramatical: Correferencia Personal ──────────────────────────────
// ─── Cohesión Gramatical: Elipsis Nominal ─────────────────────────────────────
// ─── Cohesión Léxico-Semántica: Panorama ─────────────────────────────────────
// ─── Cohesión Léxico-Semántica: Tipos de Sinonimia ────────────────────────────
// ─── Cohesión Léxico-Semántica: Sinonimia Contextual ─────────────────────────
// ─── Cohesión Léxico-Semántica: Tipos de Antonimia ───────────────────────────
// ─── Cohesión Léxico-Semántica: Antonimia Contextual ─────────────────────────
// ─── Cohesión Léxico-Semántica: Campo Semántico ───────────────────────────────
// ─── Marcadores Textuales: Panorama ──────────────────────────────────────────
// ─── Marcadores Textuales: Adición ───────────────────────────────────────────
// ─── Marcadores Textuales: Adversativos ──────────────────────────────────────
// ─── Marcadores Textuales: Causa / Consecuencia ───────────────────────────────
// ─── Marcadores Textuales: Temporales ────────────────────────────────────────
// ─── Marcadores Textuales: Reformulación ─────────────────────────────────────
// ─── Acentuación: árbol de decisión ──────────────────────────────────────────
function SlideResumenAcentuacion({ slide, tema }) {
  const C = {
    tilde:   "#4ade80",
    noTilde: "#f5c842",
    aguda:   tema.acento,
    llana:   tema.azul,
    esdruj:  tema.verde,
    sobr:    "#c084fc",
    mono:    "#94a3b8",
  };
  const Cell = ({ label, sub, tilde, cond, ejemplo, color }) => (
    <div style={{
      flex: 1, minWidth: 0,
      display: "flex", flexDirection: "column", alignItems: "center",
      gap: 5, padding: "10px 8px",
      borderRight: "1px solid rgba(255,255,255,0.07)",
    }}>
      <div style={{ fontFamily: tema.mono, fontSize: 10, fontWeight: 700, color, letterSpacing: "0.1em", textAlign: "center" }}>{label}</div>
      {sub && <div style={{ fontFamily: tema.mono, fontSize: 8, color: tema.muted, textAlign: "center" }}>{sub}</div>}
      <div style={{ fontSize: 11, color: tema.muted, textAlign: "center", lineHeight: 1.4, minHeight: 30 }}>{cond}</div>
      <div style={{
        padding: "4px 10px", borderRadius: 5,
        background: `${tilde ? C.tilde : C.noTilde}18`,
        border: `1px solid ${tilde ? C.tilde : C.noTilde}55`,
        color: tilde ? C.tilde : C.noTilde,
        fontSize: 10, fontFamily: tema.mono, fontWeight: 700,
      }}>{tilde ? "CON TILDE" : "SIN TILDE"}</div>
      <div style={{ fontSize: 10, color: tema.muted, fontStyle: "italic", textAlign: "center" }}>{ejemplo}</div>
    </div>
  );

  return (
    <div style={{ padding: "16px 20px", height: "100%", display: "flex", flexDirection: "column", gap: 10, boxSizing: "border-box" }}>
      <div>
        <div style={{ fontFamily: tema.mono, fontSize: 10, letterSpacing: "0.2em", color: tema.acento, textTransform: "uppercase", marginBottom: 4, opacity: 0.75 }}>
          {slide.etiqueta}
        </div>
        <h2 style={{ fontFamily: "'Sora', system-ui, sans-serif", fontSize: "clamp(16px, 2.2vw, 24px)", fontWeight: 700, color: tema.texto, margin: 0 }}>
          {slide.titulo}
        </h2>
      </div>

      {/* Fila principal: 6 columnas de tipos */}
      <div style={{ display: "flex", background: "rgba(0,0,0,0.3)", border: `1px solid rgba(255,255,255,0.1)`, borderRadius: 10, overflow: "hidden", flex: 1 }}>
        {/* Monosílabas */}
        <div style={{ flex: 1.2, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 5, padding: "10px 8px", borderRight: "1px solid rgba(255,255,255,0.07)", background: "rgba(148,163,184,0.04)" }}>
          <div style={{ fontFamily: tema.mono, fontSize: 10, fontWeight: 700, color: C.mono, letterSpacing: "0.1em", textAlign: "center" }}>MONOSÍLABAS</div>
          <div style={{ fontSize: 10, color: tema.muted, textAlign: "center", lineHeight: 1.45 }}>
            Sin tilde por regla general
          </div>
          <div style={{ padding: "4px 8px", borderRadius: 5, background: `${C.noTilde}18`, border: `1px solid ${C.noTilde}55`, color: C.noTilde, fontSize: 10, fontFamily: tema.mono, fontWeight: 700 }}>
            SIN TILDE
          </div>
          <div style={{ fontSize: 9, color: tema.muted, textAlign: "center", lineHeight: 1.45, marginTop: 2 }}>
            fue · vio · dio · pie · bien
          </div>
          <div style={{ width: "100%", height: 1, background: "rgba(255,255,255,0.08)", margin: "4px 0" }} />
          <div style={{ fontSize: 9, color: C.tilde, textAlign: "center", lineHeight: 1.45 }}>
            Excepción: par diacrítico
          </div>
          <div style={{ fontSize: 9, color: tema.muted, fontStyle: "italic", textAlign: "center" }}>
            él·mí·tú·sí·sé·dé·más·té·aún
          </div>
        </div>

        {/* AGUDA */}
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 5, padding: "10px 8px", borderRight: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ fontFamily: tema.mono, fontSize: 10, fontWeight: 700, color: C.aguda, letterSpacing: "0.08em", textAlign: "center" }}>AGUDA</div>
          <div style={{ fontSize: 9, color: tema.muted, textAlign: "center" }}>tónica en la última</div>
          <div style={{ height: 1, width: "100%", background: "rgba(255,255,255,0.06)" }}/>
          <div style={{ fontSize: 10, color: tema.texto, textAlign: "center", lineHeight: 1.5 }}>Termina en<br/><b>vocal · N · S</b></div>
          <div style={{ padding: "3px 8px", borderRadius: 4, background: `${C.tilde}18`, border: `1px solid ${C.tilde}55`, color: C.tilde, fontSize: 10, fontFamily: tema.mono }}>CON TILDE</div>
          <div style={{ fontSize: 9, color: tema.muted, fontStyle: "italic", textAlign: "center" }}>café · jardín · cortés</div>
          <div style={{ height: 1, width: "100%", background: "rgba(255,255,255,0.06)" }}/>
          <div style={{ fontSize: 10, color: tema.texto, textAlign: "center", lineHeight: 1.5 }}>Otra<br/>consonante</div>
          <div style={{ padding: "3px 8px", borderRadius: 4, background: `${C.noTilde}18`, border: `1px solid ${C.noTilde}55`, color: C.noTilde, fontSize: 10, fontFamily: tema.mono }}>SIN TILDE</div>
          <div style={{ fontSize: 9, color: tema.muted, fontStyle: "italic", textAlign: "center" }}>reloj · papel · verdad</div>
        </div>

        {/* LLANA */}
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 5, padding: "10px 8px", borderRight: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ fontFamily: tema.mono, fontSize: 10, fontWeight: 700, color: C.llana, letterSpacing: "0.08em", textAlign: "center" }}>LLANA</div>
          <div style={{ fontSize: 9, color: tema.muted, textAlign: "center" }}>tónica en penúltima</div>
          <div style={{ height: 1, width: "100%", background: "rgba(255,255,255,0.06)" }}/>
          <div style={{ fontSize: 10, color: tema.texto, textAlign: "center", lineHeight: 1.5 }}>Termina en<br/><b>vocal · N · S</b></div>
          <div style={{ padding: "3px 8px", borderRadius: 4, background: `${C.noTilde}18`, border: `1px solid ${C.noTilde}55`, color: C.noTilde, fontSize: 10, fontFamily: tema.mono }}>SIN TILDE</div>
          <div style={{ fontSize: 9, color: tema.muted, fontStyle: "italic", textAlign: "center" }}>casa · examen · crisis</div>
          <div style={{ height: 1, width: "100%", background: "rgba(255,255,255,0.06)" }}/>
          <div style={{ fontSize: 10, color: tema.texto, textAlign: "center", lineHeight: 1.5 }}>Otra<br/>consonante</div>
          <div style={{ padding: "3px 8px", borderRadius: 4, background: `${C.tilde}18`, border: `1px solid ${C.tilde}55`, color: C.tilde, fontSize: 10, fontFamily: tema.mono }}>CON TILDE</div>
          <div style={{ fontSize: 9, color: tema.muted, fontStyle: "italic", textAlign: "center" }}>árbol · fácil · lápiz</div>
        </div>

        {/* ESDRÚJULA */}
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 5, padding: "10px 8px", borderRight: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ fontFamily: tema.mono, fontSize: 10, fontWeight: 700, color: C.esdruj, letterSpacing: "0.08em", textAlign: "center" }}>ESDRÚJULA</div>
          <div style={{ fontSize: 9, color: tema.muted, textAlign: "center" }}>tónica en antepenúltima</div>
          <div style={{ height: 1, width: "100%", background: "rgba(255,255,255,0.06)" }}/>
          <div style={{ padding: "5px 8px", borderRadius: 4, background: `${C.tilde}18`, border: `1.5px solid ${C.tilde}`, color: C.tilde, fontSize: 11, fontFamily: tema.mono, fontWeight: 700, marginTop: 6 }}>SIEMPRE TILDE</div>
          <div style={{ fontSize: 9, color: tema.muted, fontStyle: "italic", textAlign: "center" }}>médico · sílaba · rápido</div>
        </div>

        {/* SOBREESDRÚJULA */}
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 5, padding: "10px 8px" }}>
          <div style={{ fontFamily: tema.mono, fontSize: 9, fontWeight: 700, color: C.sobr, letterSpacing: "0.06em", textAlign: "center" }}>SOBREESD.</div>
          <div style={{ fontSize: 9, color: tema.muted, textAlign: "center" }}>antes de antepenúltima</div>
          <div style={{ height: 1, width: "100%", background: "rgba(255,255,255,0.06)" }}/>
          <div style={{ padding: "5px 8px", borderRadius: 4, background: `${C.tilde}18`, border: `1.5px solid ${C.tilde}`, color: C.tilde, fontSize: 11, fontFamily: tema.mono, fontWeight: 700, marginTop: 6 }}>SIEMPRE TILDE</div>
          <div style={{ fontSize: 9, color: tema.muted, fontStyle: "italic", textAlign: "center" }}>dígamelo · cómpratelo</div>
        </div>
      </div>

      {/* Nota hiato */}
      <div style={{
        background: `${tema.acento}12`, border: `1px solid ${tema.acento}40`,
        borderRadius: 8, padding: "8px 14px", display: "flex", alignItems: "center", gap: 10, flexShrink: 0,
      }}>
        <span style={{ fontFamily: tema.mono, fontSize: 9, fontWeight: 700, color: tema.acento, letterSpacing: "0.12em", whiteSpace: "nowrap" }}>HIATO ESPECIAL</span>
        <span style={{ fontSize: 11, color: tema.texto }}>Vocal cerrada <b>tónica</b> junto a otra vocal → <span style={{ color: "#4ade80", fontWeight: 700 }}>tilde siempre</span>, aunque la regla general no la pida.</span>
        <span style={{ fontSize: 10, color: tema.muted, fontStyle: "italic", whiteSpace: "nowrap" }}>pa-ís · Ma-rí-a · ba-úl</span>
      </div>
    </div>
  );
}

function SlideRegla({ slide, tema, modo, resaltadoIdx, onResaltar }) {
  const width = useWindowWidth();
  const gridCols = width < 560 ? "1fr" : "1fr 1fr";
  return (
    <div
      style={{
        padding: "20px 24px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        boxSizing: "border-box",
        overflowY: "auto"
      }}
    >
      <div>
        <div
          style={{
            fontFamily: tema.mono,
            fontSize: 10,
            letterSpacing: "0.2em",
            color: tema.acento,
            textTransform: "uppercase",
            marginBottom: 6,
            opacity: 0.75
          }}
        >
          {slide.etiqueta}
        </div>
        <h2
          style={{
            fontFamily: "'Sora', system-ui, sans-serif",
            fontSize: "clamp(18px, 2.4vw, 28px)",
            fontWeight: 700,
            color: tema.texto,
            letterSpacing: "-0.01em",
            margin: 0,
            lineHeight: 1.2
          }}
        >
          {slide.titulo}
        </h2>
      </div>

      <div
        style={{
          background: tema.acentoSuave,
          border: `1px solid ${tema.acentoBorde}`,
          borderRadius: 8,
          padding: "10px 18px",
          flexShrink: 0
        }}
      >
        <p style={{ fontSize: 13.5, color: tema.texto, lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
          {slide.descripcion}
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: gridCols,
          gap: 10,
          alignContent: "start"
        }}
      >
        {slide.ejemplos.map((ej, i) => {
          const activo = resaltadoIdx === i;
          return (
          <div
            key={i}
            onClick={() => modo === "director" && onResaltar && onResaltar(i)}
            data-resaltado={activo ? "true" : undefined}
            style={{
              background: activo ? tema.acentoSuave : tema.card,
              border: `1px solid ${activo ? tema.acento : tema.border}`,
              borderRadius: 8,
              padding: "10px 12px",
              display: "flex",
              flexDirection: "column",
              cursor: modo === "director" ? "pointer" : "default",
              boxShadow: activo ? `0 0 0 2px ${tema.acentoBorde}, 0 0 18px ${tema.acentoBorde}` : "none",
              transform: "none",
              transition: "all 0.2s",
            }}
          >
            <div
              style={{
                fontFamily: tema.mono,
                fontSize: 8.5,
                color: tema.muted,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: 8
              }}
            >
              {ej.categoria}
            </div>
            <div style={{ fontSize: 12.5, color: tema.texto, lineHeight: 1.55, flex: 1 }}>
              <IconoAsiEs tema={tema} />{" "}
              {ej.correcto}
            </div>
            <div style={{ height: 1, background: tema.border, margin: "8px 0" }} />
            <div style={{ fontSize: 12.5, color: tema.muted, lineHeight: 1.55, flex: 1 }}>
              <IconoAsiNo tema={tema} />{" "}
              {ej.incorrecto}
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Grafofonética: SVG diagrams ───────────────────────────────────────────────

// ── Geografía: Coordenadas geográficas ───────────────────────────────────────
// ── Geografía: Husos horarios ─────────────────────────────────────────────────
// ── Geografía: Tipos de bordes de placas tectónicas ──────────────────────────
// ── Geografía: Ciclo hidrológico ──────────────────────────────────────────────
// ── Globo Terráqueo 3D (Three.js — carga dinámica) ────────────────────────────
// ── Geografía: Minerales (preciosos, industriales, energéticos) ───────────────
// ── Geografía: Ríos del mundo y de México ─────────────────────────────────────
// ── Geografía: Ciclones en México ─────────────────────────────────────────────
// ── Geografía: Organización política mundial ───────────────────────────────────
// ── Geografía: Biomas mundiales y de México ───────────────────────────────────
// ── Geografía: Deterioro ambiental (4 problemas) ──────────────────────────────
// ── Geografía: Pirámide poblacional comparativa ───────────────────────────────
// ── Geografía: Brecha del desarrollo y bloques económicos ─────────────────────
// ── Biología: Célula animal vs vegetal ───────────────────────────────────────
// ── Biología: Herencia genética ───────────────────────────────────────────────
// ── Biología: Evolución ───────────────────────────────────────────────────────
// ── Biología: Genética aplicada ───────────────────────────────────────────────
// ── Biología: Biodiversidad en México ────────────────────────────────────────
// ── Biología: Adaptación y tipos de nutrición ─────────────────────────────────
// ── Biología: Cadena trófica y pirámide energética ────────────────────────────
// ══ BIOLOGÍA · LA CÉLULA ══════════════════════════════════════════════════════
// ══ BIOLOGÍA · BIOQUÍMICA Y METABOLISMO ═══════════════════════════════════════
// ══ BIOLOGÍA · REPRODUCCIÓN ═══════════════════════════════════════════════════
// ══ BIOLOGÍA · GENÉTICA Y BIOTECNOLOGÍA ═══════════════════════════════════════

// ══ BIOLOGÍA · EVOLUCIÓN Y CLASIFICACIÓN ══════════════════════════════════════
// ══ BIOLOGÍA · ECOLOGÍA ═══════════════════════════════════════════════════════
// ══ BIOLOGÍA · ANATOMÍA, FISIOLOGÍA Y DIVERSIDAD ══════════════════════════════
// ══ QUÍMICA · FUNDAMENTOS (Unidad 1) ══════════════════════════════════════════
// ══ QUÍMICA · AGUA, AIRE, ALIMENTOS Y ENERGÍA (Unidades 2–5) ══════════════════
// ── Química: Modelos atómicos ─────────────────────────────────────────────────
// ── Química: Biomoléculas ─────────────────────────────────────────────────────
// ── Química: Sustancias puras y mezclas ───────────────────────────────────────
// ── Química: Métodos de separación ───────────────────────────────────────────
// ── Química: Reacciones químicas ──────────────────────────────────────────────
// ── Química: Energía en reacciones ────────────────────────────────────────────
// ── Química: Impacto en salud y ambiente ──────────────────────────────────────
// ── Física: Estados de la materia ─────────────────────────────────────────────
// ── Física: Fuerzas — equilibrio, fricción, flotación ─────────────────────────
// ══════════════════════════════════════════════════════════════════════════════
// Geometría: diagramas para las presentaciones de Preparatoria (EXANI-I)
// ══════════════════════════════════════════════════════════════════════════════

// Figuras planas: rectángulo, triángulo y círculo con sus fórmulas de área
// Cuerpos geométricos: cubo, cilindro y esfera con sus volúmenes
// Desarrollo plano del cubo: 6 caras → área total = 6a²
// Transformaciones isométricas: traslación, rotación y reflexión de una figura «L»
// Ejes de simetría: cuadrado (4 ejes) vs rectángulo (2 ejes)
// Congruencia vs semejanza
// Suma de ángulos: triángulo (180°) y triángulo rectángulo (agudos complementarios)
// Teorema de Pitágoras: triángulo 3-4-5 con los cuadrados sobre sus lados
// Desigualdad triangular: 5,5,8 cierra ; 5,5,12 no cierra
// ── Física: Velocidad y aceleración ───────────────────────────────────────────
// ── Física: Sistema solar y gravitación ───────────────────────────────────────
// ── Física: Energía mecánica — péndulo ────────────────────────────────────────
// ── Física: Circuito eléctrico serie vs paralelo ───────────────────────────────
// ── Física: Transformaciones de energía ───────────────────────────────────────
// ── Física: Cambios de estado ─────────────────────────────────────────────────
// ── Física: Caída libre ───────────────────────────────────────────────────────
// ── Exportación principal ─────────────────────────────────────────────────────

// Lleva la tarjeta resaltada por el director al campo de visión, tanto en la
// vista del director como en la del alumno (que la recibe por el evento
// "resaltado"). Como solo se monta un SlideRenderer por página, basta con buscar
// el único elemento marcado con data-resaltado. Se usa block:"nearest", que
// respeta el contenedor con scroll real y no hace nada si la tarjeta ya está
// visible (evita saltos innecesarios).
function useScrollResaltadoIntoView(resaltadoIdx, slideId) {
  useEffect(() => {
    if (resaltadoIdx == null) return;
    const raf = requestAnimationFrame(() => {
      const el = document.querySelector('[data-resaltado="true"]');
      if (el) el.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
    return () => cancelAnimationFrame(raf);
  }, [resaltadoIdx, slideId]);
}


// ─── Registro de diagramas ──────────────────────────────────────────────────
// Antes, cada diapositiva resolvía su diagrama con una cadena de `if` propia:
// seis cadenas repartidas por el archivo, 468 comparaciones en total, y añadir
// un diagrama obligaba a tocar la que correspondiera. Ahora la relación
// clave → componente es un dato, y `<Diagrama>` es el único sitio que resuelve.
//
// Este mapa es TRANSITORIO: los componentes siguen definidos más arriba en este
// mismo archivo. La fase 2b de docs/PLAN_MIGRACION.md los va sacando a
// `src/components/diagramas/<materia>/`, y cada uno que se mueve desaparece de
// aquí y aparece en DIAGRAMS. Los dos conviven mientras dure la mudanza.
const DIAGRAMAS_LOCALES = {
};

// El registro definitivo manda; el local es lo que aún no se ha mudado.
function buscarDiagrama(clave) {
  if (!clave) return null;
  return DIAGRAMS[clave] ?? DIAGRAMAS_LOCALES[clave] ?? null;
}

function Diagrama({ clave, tema }) {
  const D = buscarDiagrama(clave);
  return D ? <D tema={tema} /> : null;
}

export default function SlideRenderer({
  slide,
  tema = TEMAS.matematicas,
  modo = "alumno",
  votos,
  votantes,
  perfiles,
  totalVotos,
  respuestaDada,
  onResponder,
  resaltadoIdx = null,
  onResaltar = null,
  expandidos = null,
  onExpandir = null,
}) {
  useKaTeX();
  useFuentesTema(tema);
  useScrollResaltadoIntoView(resaltadoIdx, slide?.id);

  const props = { slide, tema, modo, votos, votantes, perfiles, totalVotos, respuestaDada, onResponder, resaltadoIdx, onResaltar, expandidos, onExpandir };

  switch (slide.tipo) {
    case "portada":
      return <SlidePortada {...props} />;
    case "definicion":
      return <SlideDefinicion {...props} />;
    case "concepto":
      return <SlideConcepto {...props} />;
    case "lista_criterios":
      return <SlideListaCriterios {...props} />;
    case "criterio_detalle":
      return <SlideCriterioDetalle {...props} />;
    case "ejemplo":
      return <SlideEjemplo {...props} />;
    case "ejercicio":
      return <SlideEjercicio {...props} />;
    case "resumen":
      return <SlideResumen {...props} />;
    case "regla_rica":
      return <SlideReglaRica {...props} />;
    case "regla":
      return <SlideRegla {...props} />;
    case "resumen_acentuacion":
      return <SlideResumenAcentuacion {...props} />;
    case "arbol_decision":
      return <SlideArbolDecision {...props} />;
    default:
      return (
        <div style={{ padding: 40, color: "#888" }}>
          Tipo de slide "{slide.tipo}" no reconocido.
        </div>
      );
  }
}
