// Renderizador de diapositivas para el sistema de presentaciones.
// Recibe un objeto `slide`, un `tema` y props de contexto (modo, votos, etc.)
import { useState, useEffect } from "react";
import { M, useKaTeX } from "../data/teoria/shared.jsx";
import { TEMAS, useFuentesTema } from "../data/presentaciones/temas.jsx";

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
          fontFamily: "'Playfair Display', serif",
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

function HistogramaVotos({ votos, totalVotos, opciones, correcta, tema }) {
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
              <span style={{ color: isOk ? tema.verde : tema.muted }}>
                {String.fromCharCode(65 + i)}. {op.length > 14 ? op.slice(0, 14) + "…" : op}
              </span>
              <span style={{ color: isOk ? tema.verde : tema.sub }}>
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
                  background: isOk ? tema.verde : tema.azul,
                  borderRadius: 4,
                  transition: "width 0.4s ease"
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Tipos de diapositiva ──────────────────────────────────────────────────────

function SlidePortada({ slide, tema }) {
  const DecoSVG = tema.DecoSVG;
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
      <DecoSVG tema={tema} />
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
          fontFamily: "'Playfair Display', serif",
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

function TriangulosSemejantesSVG({ tema }) {
  const A = [115, 16], B = [10, 178], C = [240, 178];
  const D = [365, 81], E = [302, 178], F = [440, 178];

  function mid([x1,y1],[x2,y2]) { return [(x1+x2)/2,(y1+y2)/2]; }
  function vsub([x1,y1],[x2,y2]) { return [x1-x2,y1-y2]; }
  function vadd([x1,y1],[x2,y2]) { return [x1+x2,y1+y2]; }
  function vscale([x,y],s) { return [x*s,y*s]; }
  function vunit([x,y]) { const l=Math.hypot(x,y); return [x/l,y/l]; }
  function vperp([x,y]) { return [-y,x]; }
  function fmt([x,y]) { return `${x.toFixed(1)},${y.toFixed(1)}`; }

  function tickPath(P1, P2) {
    const m = mid(P1,P2), p = vperp(vunit(vsub(P2,P1)));
    return `M ${fmt(vadd(m,vscale(p,6)))} L ${fmt(vadd(m,vscale(p,-6)))}`;
  }
  function tick2Path(P1, P2) {
    const m=mid(P1,P2), d=vunit(vsub(P2,P1)), p=vperp(d);
    return [-4,4].map(o=>{const c=vadd(m,vscale(d,o));return `M ${fmt(vadd(c,vscale(p,6)))} L ${fmt(vadd(c,vscale(p,-6)))}`;}).join(" ");
  }
  function tick3Path(P1, P2) {
    const m=mid(P1,P2), d=vunit(vsub(P2,P1)), p=vperp(d);
    return [-7,0,7].map(o=>{const c=vadd(m,vscale(d,o));return `M ${fmt(vadd(c,vscale(p,6)))} L ${fmt(vadd(c,vscale(p,-6)))}`;}).join(" ");
  }
  function arcPath(V, P1, P2, r) {
    const s=vadd(V,vscale(vunit(vsub(P1,V)),r)), e=vadd(V,vscale(vunit(vsub(P2,V)),r));
    return `M ${fmt(s)} A ${r},${r} 0 0,1 ${fmt(e)}`;
  }
  const pts = ps => ps.map(fmt).join(" ");

  return (
    <svg viewBox="0 0 510 200" width="100%" style={{ maxHeight: 168, display: "block" }}>
      <polygon points={pts([A,B,C])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([D,E,F])} fill={tema.azulSuave} stroke="none"/>

      <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={tema.azul} strokeWidth="2" opacity="0.85"/>
      <line x1={D[0]} y1={D[1]} x2={E[0]} y2={E[1]} stroke={tema.azul} strokeWidth="2" opacity="0.85"/>
      <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={tema.verde} strokeWidth="2" opacity="0.85"/>
      <line x1={E[0]} y1={E[1]} x2={F[0]} y2={F[1]} stroke={tema.verde} strokeWidth="2" opacity="0.85"/>
      <line x1={C[0]} y1={C[1]} x2={A[0]} y2={A[1]} stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <line x1={F[0]} y1={F[1]} x2={D[0]} y2={D[1]} stroke={tema.acento} strokeWidth="2" opacity="0.85"/>

      <path d={tickPath(A,B)} stroke={tema.azul} strokeWidth="1.5" fill="none" opacity="0.9"/>
      <path d={tickPath(D,E)} stroke={tema.azul} strokeWidth="1.5" fill="none" opacity="0.9"/>
      <path d={tick2Path(B,C)} stroke={tema.verde} strokeWidth="1.5" fill="none" opacity="0.9"/>
      <path d={tick2Path(E,F)} stroke={tema.verde} strokeWidth="1.5" fill="none" opacity="0.9"/>
      <path d={tick3Path(C,A)} stroke={tema.acento} strokeWidth="1.5" fill="none" opacity="0.9"/>
      <path d={tick3Path(F,D)} stroke={tema.acento} strokeWidth="1.5" fill="none" opacity="0.9"/>

      <path d={arcPath(A,C,B,22)} stroke={tema.azul} strokeWidth="1.5" fill="none" opacity="0.8"/>
      <path d={arcPath(D,F,E,16)} stroke={tema.azul} strokeWidth="1.5" fill="none" opacity="0.8"/>
      <path d={arcPath(B,A,C,22)} stroke={tema.verde} strokeWidth="1.5" fill="none" opacity="0.8"/>
      <path d={arcPath(E,D,F,16)} stroke={tema.verde} strokeWidth="1.5" fill="none" opacity="0.8"/>
      <path d={arcPath(C,B,A,22)} stroke={tema.acento} strokeWidth="1.5" fill="none" opacity="0.8"/>
      <path d={arcPath(F,E,D,16)} stroke={tema.acento} strokeWidth="1.5" fill="none" opacity="0.8"/>

      <text x={A[0]-5} y={A[1]-10} fill={tema.azul} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x={B[0]-14} y={B[1]+4} fill={tema.verde} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x={C[0]+7} y={C[1]+4} fill={tema.acento} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic">C</text>
      <text x={D[0]-5} y={D[1]-10} fill={tema.azul} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x={E[0]-14} y={E[1]+4} fill={tema.verde} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic">E</text>
      <text x={F[0]+7} y={F[1]+4} fill={tema.acento} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic">F</text>

      <text x="275" y="128" fill="rgba(240,236,227,0.32)" fontSize="36" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
    </svg>
  );
}

function SlideDefinicion({ slide, tema }) {
  return (
    <div
      style={{
        padding: "24px 32px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        boxSizing: "border-box"
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

      {slide.svgDiagram === "triangulos-semejantes" && (
        <TriangulosSemejantesSVG tema={tema} />
      )}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {slide.condiciones.map((c, i) => (
          <div
            key={i}
            style={{
              background: tema.card,
              border: `1px solid ${tema.border}`,
              borderRadius: 10,
              padding: "14px 18px"
            }}
          >
            <div
              style={{
                fontFamily: tema.mono,
                fontSize: 10.5,
                letterSpacing: "0.14em",
                color: i === 0 ? tema.azul : tema.acento,
                textTransform: "uppercase",
                marginBottom: 10
              }}
            >
              {c.texto}
            </div>
            <div style={{ textAlign: "center", fontSize: "1.05em" }}>
              <M>{c.math}</M>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RazonSemejanzaSVG({ tema }) {
  // Big triangle △ABC, small triangle △DEF (k = 2)
  // D = E + 0.5*(A − B) ensuring DEF ∼ ABC with k = 2
  // Big: A(85,20) B(10,170) C(170,170)  →  base BC = 160, height = 150
  // Small: D(310,95) E(273,170) F(353,170) →  base EF = 80, height = 75

  return (
    <svg viewBox="0 0 490 200" width="100%" style={{ maxHeight: 135, display: "block" }}>
      {/* Triangle fills */}
      <polygon points="85,20 10,170 170,170" fill={tema.azulSuave} stroke="none"/>
      <polygon points="310,95 273,170 353,170" fill={tema.azulSuave} stroke="none"/>

      {/* Sides: AB/DE = azul, BC/EF = verde, CA/FD = acento */}
      <line x1="85" y1="20" x2="10"  y2="170" stroke={tema.azul}   strokeWidth="2.5" opacity="0.85"/>
      <line x1="310" y1="95" x2="273" y2="170" stroke={tema.azul}   strokeWidth="2.5" opacity="0.85"/>
      <line x1="10"  y1="170" x2="170" y2="170" stroke={tema.verde}  strokeWidth="2.5" opacity="0.85"/>
      <line x1="273" y1="170" x2="353" y2="170" stroke={tema.verde}  strokeWidth="2.5" opacity="0.85"/>
      <line x1="170" y1="170" x2="85"  y2="20"  stroke={tema.acento} strokeWidth="2.5" opacity="0.85"/>
      <line x1="353" y1="170" x2="310" y2="95"  stroke={tema.acento} strokeWidth="2.5" opacity="0.85"/>

      {/* Side labels — big triangle */}
      <text x="36"  y="90"  fill={tema.azul}   fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">2a</text>
      <text x="90"  y="186" fill={tema.verde}  fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">2b</text>
      <text x="139" y="89"  fill={tema.acento} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">2c</text>

      {/* Side labels — small triangle */}
      <text x="283" y="128" fill={tema.azul}   fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">a</text>
      <text x="313" y="186" fill={tema.verde}  fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">b</text>
      <text x="341" y="128" fill={tema.acento} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">c</text>

      {/* Vertex labels */}
      <text x="85"  y="12"  fill={tema.azul}   fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="1"   y="178" fill={tema.verde}  fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="175" y="178" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">C</text>
      <text x="310" y="87"  fill={tema.azul}   fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="261" y="182" fill={tema.verde}  fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">E</text>
      <text x="357" y="182" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>

      {/* k = 2a/a = 2b/b = 2c/c = 2 */}
      <text x="213" y="97"  fill="rgba(240,236,227,0.50)" fontSize="22" fontWeight="700" fontFamily="'DM Sans',sans-serif" textAnchor="middle">k = 2</text>
      <text x="213" y="115" fill="rgba(240,236,227,0.22)" fontSize="10.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.08em">2a/a = 2b/b = 2c/c</text>
    </svg>
  );
}

function SlideConcepto({ slide, tema }) {
  const compact = !!slide.svgDiagram;
  return (
    <div
      style={{
        padding: compact ? "18px 28px" : "36px 44px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: compact ? 14 : 26,
        boxSizing: "border-box"
      }}
    >
      <Encabezado titulo={slide.titulo} etiqueta={slide.etiqueta} tema={tema} />

      <div
        style={{
          background: "rgba(0,0,0,0.45)",
          border: `2px solid ${tema.acentoFuerte}`,
          borderRadius: 12,
          padding: compact ? "14px 24px" : "22px 28px",
          textAlign: "center",
          fontSize: compact ? "1.6em" : "1.9em"
        }}
      >
        <M>{slide.formula}</M>
      </div>

      {slide.svgDiagram === "razon-semejanza" && (
        <RazonSemejanzaSVG tema={tema} />
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: compact ? 8 : 10 }}>
        {slide.items.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              background: tema.card,
              border: `1px solid ${tema.border}`,
              borderRadius: 8,
              padding: compact ? "9px 18px" : "13px 22px"
            }}
          >
            <span style={{ fontSize: "1.1em", minWidth: 52 }}>
              <M>{item.math}</M>
            </span>
            <span style={{ color: "#4a4640", fontSize: 17 }}>→</span>
            <span style={{ fontSize: 15, color: "#c4bfb3" }}>{item.texto}</span>
          </div>
        ))}
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

function SlideListaCriterios({ slide, tema }) {
  const colores = [tema.acento, tema.azul, tema.verde];
  const bgColores = [tema.acentoMed, tema.azulMed, "rgba(74,222,128,0.1)"];
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
          flex: 1,
          justifyContent: "center"
        }}
      >
        {slide.criterios.map((c, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 22,
              background: tema.card,
              border: `1px solid ${tema.border}`,
              borderRadius: 12,
              padding: "18px 26px"
            }}
          >
            <div
              style={{
                minWidth: 62,
                height: 62,
                borderRadius: 10,
                background: bgColores[i],
                border: `2px solid ${colores[i]}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: tema.mono,
                fontWeight: 700,
                fontSize: 16,
                color: colores[i],
                flexShrink: 0
              }}
            >
              {c.sigla}
            </div>
            <div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: tema.texto,
                  marginBottom: 5
                }}
              >
                {c.nombre}
              </div>
              <div style={{ fontSize: 14.5, color: tema.sub, lineHeight: 1.55 }}>
                {c.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideCriterioDetalle({ slide, tema }) {
  return (
    <div
      style={{
        padding: "36px 44px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 22,
        boxSizing: "border-box"
      }}
    >
      <Encabezado titulo={slide.titulo} etiqueta={slide.etiqueta} tema={tema} />

      <div
        style={{
          background: tema.acentoSuave,
          border: `1px solid ${tema.acentoBorde}`,
          borderRadius: 10,
          padding: "20px 28px"
        }}
      >
        <p
          style={{
            fontSize: 16.5,
            color: tema.texto,
            lineHeight: 1.7,
            fontWeight: 300,
            margin: "0 0 18px"
          }}
        >
          {slide.enunciado}
        </p>
        <div style={{ textAlign: "center", fontSize: "1.25em" }}>
          <M>{slide.math}</M>
        </div>
      </div>

      <div
        style={{
          background: tema.azulSuave,
          border: `1px solid ${tema.azulBorde}`,
          borderRadius: 10,
          padding: "18px 24px"
        }}
      >
        <div
          style={{
            fontFamily: tema.mono,
            fontSize: 10,
            letterSpacing: "0.2em",
            color: tema.azul,
            textTransform: "uppercase",
            marginBottom: 10
          }}
        >
          ¿Por qué funciona?
        </div>
        <p
          style={{
            fontSize: 15,
            color: tema.azulTexto,
            lineHeight: 1.65,
            margin: 0,
            marginBottom: slide.math_razon ? 14 : 0
          }}
        >
          {slide.por_que}
        </p>
        {slide.math_razon && (
          <div style={{ textAlign: "center", fontSize: "1.1em", marginTop: 12 }}>
            <M>{slide.math_razon}</M>
          </div>
        )}
      </div>
    </div>
  );
}

function SlideEjemplo({ slide, tema }) {
  return (
    <div
      style={{
        padding: "36px 44px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 22,
        boxSizing: "border-box",
        overflowY: "auto"
      }}
    >
      <Encabezado titulo={slide.titulo} etiqueta={slide.etiqueta} tema={tema} />

      <p style={{ fontSize: 15.5, color: "#c4bfb3", lineHeight: 1.65, margin: 0 }}>
        {slide.enunciado}
      </p>

      {slide.datos.length > 0 && (
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

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {slide.pasos.map((p, i) => (
          <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
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
        ))}
      </div>
    </div>
  );
}

function SlideEjercicio({ slide, modo, votos, totalVotos, respuestaDada, onResponder, tema, resaltadoIdx, onResaltar }) {
  const done = respuestaDada !== null && respuestaDada !== undefined;
  const correcta = slide.correcta;

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

        {/* Opciones */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: 10, alignContent: "start" }}
        >
          {slide.opciones.map((op, i) => {
            const isOk = i === correcta;
            const isSel = respuestaDada === i;

            let bg = "rgba(255,255,255,0.04)";
            let border = "1px solid rgba(255,255,255,0.1)";
            let color = "#c4bfb3";

            if (modo === "alumno" && done) {
              if (isOk) {
                bg = "rgba(74,222,128,0.1)";
                border = "2px solid rgba(74,222,128,0.45)";
                color = tema.verde;
              } else if (isSel) {
                bg = "rgba(248,113,113,0.09)";
                border = "2px solid rgba(248,113,113,0.4)";
                color = "#fca5a5";
              }
            } else if (modo === "director" && isOk) {
              border = "1px solid rgba(74,222,128,0.25)";
              bg = "rgba(74,222,128,0.04)";
            }

            const votoCount = votos?.[i] || 0;

            const resaltado = resaltadoIdx === i;
            if (resaltado) {
              border = `2px solid ${tema.acento}`;
              bg = bg === "rgba(255,255,255,0.04)" ? tema.acentoSuave : bg;
            }

            return (
              <button
                key={i}
                onClick={() => {
                  if (modo === "alumno" && !done) onResponder(i);
                  if (modo === "director" && onResaltar) onResaltar(i);
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
                  transform: resaltado ? "scale(1.01)" : "scale(1)",
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
                  {String.fromCharCode(65 + i)}.
                </span>
                <span style={{ flex: 1 }}>{op}</span>
                {modo === "director" && votos !== undefined && (
                  <span
                    style={{
                      fontFamily: tema.mono,
                      fontSize: 11,
                      color: isOk ? tema.verde : tema.muted,
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
              background:
                respuestaDada === correcta
                  ? "rgba(74,222,128,0.1)"
                  : "rgba(248,113,113,0.08)",
              border: `1px solid ${
                respuestaDada === correcta
                  ? "rgba(74,222,128,0.25)"
                  : "rgba(248,113,113,0.2)"
              }`,
              color: respuestaDada === correcta ? tema.verde : "#fca5a5",
              fontSize: 14.5,
              lineHeight: 1.6
            }}
          >
            {respuestaDada === correcta ? "✓ " : "✗ "}
            {slide.explicacion}
          </div>
        )}
      </div>

      {/* Histograma en modo director */}
      {modo === "director" && (
        <HistogramaVotos
          votos={votos}
          totalVotos={totalVotos}
          opciones={slide.opciones}
          correcta={correcta}
          tema={tema}
        />
      )}
    </div>
  );
}

function SlideResumen({ slide, tema }) {
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
        {slide.puntos.map((p, i) => (
          <div
            key={i}
            style={{
              background: tema.card,
              border: `1px solid ${tema.border}`,
              borderRadius: 10,
              padding: "14px 18px",
              display: "flex",
              gap: 12,
              alignItems: "flex-start"
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
        ))}
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
            fontFamily: "'Playfair Display', serif",
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
            style={{
              background: activo ? tema.acentoSuave : tema.card,
              border: `1px solid ${activo ? tema.acento : tema.border}`,
              borderRadius: 8,
              padding: "10px 12px",
              display: "flex",
              flexDirection: "column",
              cursor: modo === "director" ? "pointer" : "default",
              boxShadow: activo ? `0 0 0 2px ${tema.acentoBorde}, 0 0 18px ${tema.acentoBorde}` : "none",
              transform: activo ? "scale(1.015)" : "scale(1)",
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
              <span style={{ color: tema.verde, marginRight: 4, fontWeight: 700 }}>✓</span>
              {ej.correcto}
            </div>
            <div style={{ height: 1, background: tema.border, margin: "8px 0" }} />
            <div style={{ fontSize: 12.5, color: tema.muted, lineHeight: 1.55, flex: 1 }}>
              <span style={{ color: "#f5c842", marginRight: 4, fontWeight: 700 }}>✗</span>
              {ej.incorrecto}
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Exportación principal ─────────────────────────────────────────────────────

export default function SlideRenderer({
  slide,
  tema = TEMAS.matematicas,
  modo = "alumno",
  votos,
  totalVotos,
  respuestaDada,
  onResponder,
  resaltadoIdx = null,
  onResaltar = null,
}) {
  useKaTeX();
  useFuentesTema(tema);

  const props = { slide, tema, modo, votos, totalVotos, respuestaDada, onResponder, resaltadoIdx, onResaltar };

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
    case "regla":
      return <SlideRegla {...props} />;
    default:
      return (
        <div style={{ padding: 40, color: "#888" }}>
          Tipo de slide "{slide.tipo}" no reconocido.
        </div>
      );
  }
}
