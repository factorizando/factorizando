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
      <path d="M 169,53 L 163,49 M 166,58 L 160,54 M 163,62 L 157,58" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
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
      <path d="M 169,53 L 163,49 M 166,58 L 160,54" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

function SlideListaCriterios({ slide, tema }) {
  const colores = [tema.acento, tema.azul, tema.verde];
  const bgColores = [tema.acentoMed, tema.azulMed, "rgba(74,222,128,0.1)"];
  const winW = useWindowWidth();
  // SVG lives outside the card; width scales with screen but stays bounded
  const svgW = Math.min(185, Math.max(110, Math.floor(winW * 0.30)));
  const criterioSVGs = {
    "AA":  <CriterioAA_SVG  tema={tema} />,
    "LLL": <CriterioLLL_SVG tema={tema} />,
    "LAL": <CriterioLAL_SVG tema={tema} />,
  };
  return (
    <div
      style={{
        padding: "22px 28px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        boxSizing: "border-box"
      }}
    >
      <Encabezado titulo={slide.titulo} etiqueta={slide.etiqueta} tema={tema} />
      <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1, justifyContent: "center" }}>
        {slide.criterios.map((c, i) => (
          <div key={i} style={{ display: "flex", gap: 14, alignItems: "center" }}>

            {/* Card box — badge + text only, no SVG inside */}
            <div
              style={{
                flex: 1,
                minWidth: 0,
                display: "flex",
                alignItems: "center",
                gap: 16,
                background: tema.card,
                border: `1px solid ${tema.border}`,
                borderRadius: 12,
                padding: "14px 20px"
              }}
            >
              <div
                style={{
                  minWidth: 54,
                  height: 54,
                  borderRadius: 10,
                  background: bgColores[i],
                  border: `2px solid ${colores[i]}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: tema.mono,
                  fontWeight: 700,
                  fontSize: 14,
                  color: colores[i],
                  flexShrink: 0
                }}
              >
                {c.sigla}
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 16, fontWeight: 600, color: tema.texto, marginBottom: 3 }}>
                  {c.nombre}
                </div>
                <div style={{ fontSize: 13, color: tema.sub, lineHeight: 1.5 }}>
                  {c.desc}
                </div>
              </div>
            </div>

            {/* SVG fuera de la caja, más grande */}
            <div style={{ width: svgW, flexShrink: 0 }}>
              {criterioSVGs[c.sigla]}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

// △ABC: A(100,18) B(12,162) C(210,162)  △DEF: D(341,78) E(290,162) F(405,162)  k≈1.72
function CriterioAADetalleSVG({ tema }) {
  return (
    <svg viewBox="0 0 480 182" width="100%" style={{ display: "block", maxHeight: 138 }}>
      {/* Triangle fills */}
      <polygon points="100,18 12,162 210,162" fill={tema.azulSuave} stroke="none"/>
      <polygon points="341,78 290,162 405,162" fill={tema.azulSuave} stroke="none"/>
      <polygon points="100,18 12,162 210,162" fill="none" stroke="rgba(255,255,255,0.11)" strokeWidth="1.5"/>
      <polygon points="341,78 290,162 405,162" fill="none" stroke="rgba(255,255,255,0.11)" strokeWidth="1.5"/>

      {/* α — azul arcs at A and D (given equal angles) */}
      <path d="M 113,35 A 22,22 0 0,1 89,37" stroke={tema.azul} strokeWidth="2.2" fill="none"/>
      <path d="M 351,91 A 16,16 0 0,1 333,92" stroke={tema.azul} strokeWidth="2.2" fill="none"/>

      {/* β — verde arcs at B and E (given equal angles) */}
      <path d="M 22,145 A 20,20 0 0,1 32,162" stroke={tema.verde} strokeWidth="2.2" fill="none"/>
      <path d="M 297,150 A 14,14 0 0,1 304,162" stroke={tema.verde} strokeWidth="2.2" fill="none"/>

      {/* γ — acento dashed arcs at C and F (derived automatically) */}
      <path d="M 190,162 A 20,20 0 0,1 198,146" stroke={tema.acento} strokeWidth="2" fill="none" strokeDasharray="4,3"/>
      <path d="M 391,162 A 14,14 0 0,1 397,151" stroke={tema.acento} strokeWidth="2" fill="none" strokeDasharray="3,2"/>

      {/* Angle labels */}
      <text x="100" y="54" fill={tema.azul}   fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">α</text>
      <text x="341" y="110" fill={tema.azul}  fontSize="11" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">α</text>
      <text x="38"  y="152" fill={tema.verde}  fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">β</text>
      <text x="309" y="149" fill={tema.verde}  fontSize="11" fontFamily="Georgia,serif" fontStyle="italic">β</text>
      <text x="184" y="148" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">γ</text>
      <text x="384" y="149" fill={tema.acento} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic">γ</text>

      {/* Vertex labels */}
      <text x="100" y="10"  fill={tema.azul}   fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="170" fill={tema.verde}  fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="215" y="170" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">C</text>
      <text x="341" y="72"  fill={tema.azul}   fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="282" y="172" fill={tema.verde}  fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">E</text>
      <text x="409" y="172" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>

      {/* ∼ between triangles */}
      <text x="252" y="110" fill="rgba(240,236,227,0.28)" fontSize="30" fontFamily="Georgia,serif" textAnchor="middle">∼</text>

      {/* Subtitle: γ derived */}
      <text x="252" y="180" fill="rgba(240,236,227,0.20)" fontSize="9.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.05em">γ = 180° − α − β  (se determina solo)</text>
    </svg>
  );
}

// △ABC: A(100,18) B(12,162) C(210,162)  △DEF: D(341,78) E(290,162) F(405,162)  k≈1.72
function CriterioLLLDetalleSVG({ tema }) {
  return (
    <svg viewBox="0 0 480 182" width="100%" style={{ display: "block", maxHeight: 138 }}>
      <polygon points="100,18 12,162 210,162" fill={tema.azulSuave} stroke="none"/>
      <polygon points="341,78 290,162 405,162" fill={tema.azulSuave} stroke="none"/>

      {/* Color-coded sides: AB/DE=azul(1 tick), BC/EF=verde(2), CA/FD=acento(3) */}
      <line x1="100" y1="18"  x2="12"  y2="162" stroke={tema.azul}   strokeWidth="2.5" opacity="0.9"/>
      <line x1="341" y1="78"  x2="290" y2="162" stroke={tema.azul}   strokeWidth="2.5" opacity="0.9"/>
      <line x1="12"  y1="162" x2="210" y2="162" stroke={tema.verde}  strokeWidth="2.5" opacity="0.9"/>
      <line x1="290" y1="162" x2="405" y2="162" stroke={tema.verde}  strokeWidth="2.5" opacity="0.9"/>
      <line x1="210" y1="162" x2="100" y2="18"  stroke={tema.acento} strokeWidth="2.5" opacity="0.9"/>
      <line x1="405" y1="162" x2="341" y2="78"  stroke={tema.acento} strokeWidth="2.5" opacity="0.9"/>

      {/* Tick marks */}
      <path d="M 51,87 L 61,93"                                     stroke={tema.azul}   strokeWidth="2" fill="none"/>
      <path d="M 312,118 L 319,122"                                  stroke={tema.azul}   strokeWidth="2" fill="none"/>
      <path d="M 107,157 L 107,167 M 115,157 L 115,167"             stroke={tema.verde}  strokeWidth="2" fill="none"/>
      <path d="M 344,157 L 344,167 M 351,157 L 351,167"             stroke={tema.verde}  strokeWidth="2" fill="none"/>
      <path d="M 154,81 L 146,87 M 159,87 L 151,93 M 164,93 L 156,99"   stroke={tema.acento} strokeWidth="2" fill="none"/>
      <path d="M 372,113 L 366,117 M 376,118 L 370,122 M 380,123 L 374,127" stroke={tema.acento} strokeWidth="2" fill="none"/>

      {/* Side labels */}
      <text x="44"  y="84"  fill={tema.azul}   fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">ka</text>
      <text x="307" y="114" fill={tema.azul}   fontSize="11" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">a</text>
      <text x="111" y="177" fill={tema.verde}  fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">kb</text>
      <text x="348" y="177" fill={tema.verde}  fontSize="11" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">b</text>
      <text x="170" y="82"  fill={tema.acento} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">kc</text>
      <text x="384" y="113" fill={tema.acento} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic">c</text>

      {/* Vertex labels */}
      <text x="100" y="10"  fill={tema.azul}   fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="170" fill={tema.verde}  fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="215" y="170" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">C</text>
      <text x="341" y="72"  fill={tema.azul}   fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="282" y="172" fill={tema.verde}  fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">E</text>
      <text x="409" y="172" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>

      {/* k label + subtitle */}
      <text x="252" y="75"  fill="rgba(240,236,227,0.25)" fontSize="26" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
      <text x="252" y="100" fill="rgba(240,236,227,0.48)" fontSize="19" fontWeight="700" fontFamily="'DM Sans',sans-serif" textAnchor="middle">k</text>
      <text x="252" y="118" fill="rgba(240,236,227,0.22)" fontSize="9.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.04em">ka/a = kb/b = kc/c</text>
    </svg>
  );
}

// △ABC: A(100,18) B(12,162) C(210,162)  △DEF: D(341,78) E(290,162) F(405,162)  k≈1.72
function CriterioLALDetalleSVG({ tema }) {
  return (
    <svg viewBox="0 0 480 182" width="100%" style={{ display: "block", maxHeight: 138 }}>
      <polygon points="100,18 12,162 210,162" fill={tema.azulSuave} stroke="none"/>
      <polygon points="341,78 290,162 405,162" fill={tema.azulSuave} stroke="none"/>

      {/* AB/DE: azul (1 tick) — first proportional side */}
      <line x1="100" y1="18"  x2="12"  y2="162" stroke={tema.azul}   strokeWidth="2.5"/>
      <line x1="341" y1="78"  x2="290" y2="162" stroke={tema.azul}   strokeWidth="2.5"/>
      {/* BC/EF: dimmed — third side, not constrained */}
      <line x1="12"  y1="162" x2="210" y2="162" stroke="rgba(240,236,227,0.18)" strokeWidth="1.5"/>
      <line x1="290" y1="162" x2="405" y2="162" stroke="rgba(240,236,227,0.18)" strokeWidth="1.5"/>
      {/* CA/FD: acento (2 ticks) — second proportional side */}
      <line x1="210" y1="162" x2="100" y2="18"  stroke={tema.acento} strokeWidth="2.5"/>
      <line x1="405" y1="162" x2="341" y2="78"  stroke={tema.acento} strokeWidth="2.5"/>

      {/* Included angle at A and D: verde arc */}
      <path d="M 113,35 A 22,22 0 0,1 89,37" stroke={tema.verde} strokeWidth="2.2" fill="none"/>
      <path d="M 351,91 A 16,16 0 0,1 333,92" stroke={tema.verde} strokeWidth="2.2" fill="none"/>

      {/* Single tick on AB (azul) */}
      <line x1="51" y1="87" x2="61" y2="93" stroke={tema.azul} strokeWidth="2"/>
      {/* Single tick on DE (azul) */}
      <line x1="312" y1="118" x2="319" y2="122" stroke={tema.azul} strokeWidth="2"/>

      {/* Double tick on CA (acento) */}
      <line x1="149" y1="90" x2="157" y2="84" stroke={tema.acento} strokeWidth="2"/>
      <line x1="153" y1="96" x2="161" y2="90" stroke={tema.acento} strokeWidth="2"/>
      {/* Double tick on FD (acento) */}
      <line x1="367" y1="120" x2="375" y2="114" stroke={tema.acento} strokeWidth="2"/>
      <line x1="371" y1="126" x2="379" y2="120" stroke={tema.acento} strokeWidth="2"/>

      {/* Angle labels */}
      <text x="104" y="52"  fill={tema.verde} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">∠A</text>
      <text x="344" y="108" fill={tema.verde} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">∠D</text>

      {/* Vertex labels */}
      <text x="100" y="10"  fill={tema.azul}   fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="170" fill="rgba(240,236,227,0.45)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="215" y="170" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">C</text>
      <text x="341" y="72"  fill={tema.azul}   fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="282" y="172" fill="rgba(240,236,227,0.45)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">E</text>
      <text x="409" y="172" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>

      {/* ∼ + caption */}
      <text x="252" y="82"  fill="rgba(240,236,227,0.25)" fontSize="26" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
      <text x="252" y="114" fill={tema.verde} fontSize="9.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.03em">∠A = ∠D  (ángulo comprendido)</text>
    </svg>
  );
}

// Big right △ABC: B(28,150) A(28,78) C(124,150) — sides 6,8,10 (12px/unit)
// Small right △DEF: E(188,132) D(188,96) F(236,132) — sides 3,4,5
function Ej1LLLSVG({ tema }) {
  return (
    <svg viewBox="0 0 265 172" width="100%" style={{ display: "block", maxHeight: 115 }}>
      {/* Fills */}
      <polygon points="28,78 28,150 124,150" fill={tema.azulSuave} stroke="none"/>
      <polygon points="188,96 188,132 236,132" fill={tema.azulSuave} stroke="none"/>

      {/* Right angle squares */}
      <path d="M 28,142 L 36,142 L 36,150" fill="none" stroke="rgba(240,236,227,0.45)" strokeWidth="1.2"/>
      <path d="M 188,124 L 196,124 L 196,132" fill="none" stroke="rgba(240,236,227,0.45)" strokeWidth="1.2"/>

      {/* Sides: AB/DE=azul(1), BC/EF=verde(2), CA/FD=acento(3) */}
      <line x1="28"  y1="78"  x2="28"  y2="150" stroke={tema.azul}   strokeWidth="2.5"/>
      <line x1="28"  y1="150" x2="124" y2="150" stroke={tema.verde}  strokeWidth="2.5"/>
      <line x1="124" y1="150" x2="28"  y2="78"  stroke={tema.acento} strokeWidth="2.5"/>
      <line x1="188" y1="96"  x2="188" y2="132" stroke={tema.azul}   strokeWidth="2.5"/>
      <line x1="188" y1="132" x2="236" y2="132" stroke={tema.verde}  strokeWidth="2.5"/>
      <line x1="236" y1="132" x2="188" y2="96"  stroke={tema.acento} strokeWidth="2.5"/>

      {/* Ticks — AB/DE: 1 azul (horizontal, ⊥ to vertical side) */}
      <line x1="22"  y1="114" x2="34"  y2="114" stroke={tema.azul}  strokeWidth="2"/>
      <line x1="182" y1="114" x2="194" y2="114" stroke={tema.azul}  strokeWidth="2"/>
      {/* BC/EF: 2 verde (vertical, ⊥ to horizontal side) */}
      <line x1="70"  y1="144" x2="70"  y2="156" stroke={tema.verde} strokeWidth="2"/>
      <line x1="82"  y1="144" x2="82"  y2="156" stroke={tema.verde} strokeWidth="2"/>
      <line x1="207" y1="126" x2="207" y2="138" stroke={tema.verde} strokeWidth="2"/>
      <line x1="217" y1="126" x2="217" y2="138" stroke={tema.verde} strokeWidth="2"/>
      {/* CA/FD: 3 acento (⊥ to diagonal, perp direction (0.600,−0.800)) */}
      <line x1="79"  y1="110" x2="73"  y2="118" stroke={tema.acento} strokeWidth="2"/>
      <line x1="75"  y1="107" x2="69"  y2="115" stroke={tema.acento} strokeWidth="2"/>
      <line x1="83"  y1="113" x2="77"  y2="121" stroke={tema.acento} strokeWidth="2"/>
      <line x1="214" y1="111" x2="210" y2="117" stroke={tema.acento} strokeWidth="2"/>
      <line x1="211" y1="109" x2="207" y2="115" stroke={tema.acento} strokeWidth="2"/>
      <line x1="217" y1="113" x2="213" y2="119" stroke={tema.acento} strokeWidth="2"/>

      {/* Side labels */}
      <text x="17"  y="118" fill={tema.azul}   fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="end">6</text>
      <text x="76"  y="165" fill={tema.verde}  fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">8</text>
      <text x="88"  y="101" fill={tema.acento} fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="600">10</text>
      <text x="180" y="116" fill={tema.azul}   fontSize="11" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="end">3</text>
      <text x="212" y="145" fill={tema.verde}  fontSize="11" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">4</text>
      <text x="221" y="104" fill={tema.acento} fontSize="11" fontFamily="'DM Sans',sans-serif" fontWeight="600">5</text>

      {/* Vertex labels */}
      <text x="28"  y="70"  fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="14"  y="164" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="128" y="163" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">C</text>
      <text x="188" y="89"  fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="174" y="142" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">E</text>
      <text x="240" y="142" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">F</text>

      {/* k=2 between the triangles */}
      <text x="158" y="100" fill="rgba(240,236,227,0.50)" fontSize="16" fontWeight="700" fontFamily="'DM Sans',sans-serif" textAnchor="middle">k = 2</text>
      <text x="158" y="116" fill="rgba(240,236,227,0.22)" fontSize="8.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">△ABC ∼ △DEF</text>
    </svg>
  );
}

// Big △PQR: P(95,14) Q(12,155) R(198,155) — labeled PQ=12
// Small △XYZ: X(296,42) Y(240,136) Z(364,136) — labeled XY=8, k=3/2
function Ej2K32SVG({ tema }) {
  return (
    <svg viewBox="0 0 388 170" width="100%" style={{ display: "block", maxHeight: 115 }}>
      {/* Fills */}
      <polygon points="95,14 12,155 198,155" fill={tema.azulSuave} stroke="none"/>
      <polygon points="296,42 240,136 364,136" fill={tema.azulSuave} stroke="none"/>

      {/* Big triangle sides — PQ highlighted in azul, rest dimmed */}
      <line x1="95"  y1="14"  x2="12"  y2="155" stroke={tema.azul}   strokeWidth="2.8"/>
      <line x1="12"  y1="155" x2="198" y2="155" stroke="rgba(240,236,227,0.35)" strokeWidth="1.8"/>
      <line x1="198" y1="155" x2="95"  y2="14"  stroke="rgba(240,236,227,0.35)" strokeWidth="1.8"/>

      {/* Small triangle sides — XY highlighted in azul, rest dimmed */}
      <line x1="296" y1="42"  x2="240" y2="136" stroke={tema.azul}   strokeWidth="2.8"/>
      <line x1="240" y1="136" x2="364" y2="136" stroke="rgba(240,236,227,0.35)" strokeWidth="1.8"/>
      <line x1="364" y1="136" x2="296" y2="42"  stroke="rgba(240,236,227,0.35)" strokeWidth="1.8"/>

      {/* Labels on PQ and XY */}
      <text x="40"  y="93"  fill={tema.azul} fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">12</text>
      <text x="258" y="95"  fill={tema.azul} fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">8</text>

      {/* Vertex labels */}
      <text x="95"  y="8"   fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">P</text>
      <text x="4"   y="163" fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">Q</text>
      <text x="202" y="163" fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">R</text>
      <text x="296" y="36"  fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">X</text>
      <text x="232" y="148" fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">Y</text>
      <text x="368" y="148" fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">Z</text>

      {/* k = 3/2 in center + ∼ */}
      <text x="222" y="72"  fill="rgba(240,236,227,0.28)" fontSize="22" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
      <text x="222" y="96"  fill="rgba(240,236,227,0.55)" fontSize="17" fontWeight="700" fontFamily="'DM Sans',sans-serif" textAnchor="middle">k = 3/2</text>
      <text x="222" y="112" fill="rgba(240,236,227,0.22)" fontSize="9" fontFamily="'DM Sans',sans-serif" textAnchor="middle">PQ / XY = 12 / 8</text>
    </svg>
  );
}

function SlideCriterioDetalle({ slide, tema }) {
  const compact = !!slide.svgDiagram;
  return (
    <div
      style={{
        padding: compact ? "20px 32px" : "36px 44px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: compact ? 14 : 22,
        boxSizing: "border-box"
      }}
    >
      <Encabezado titulo={slide.titulo} etiqueta={slide.etiqueta} tema={tema} />

      <div
        style={{
          background: tema.acentoSuave,
          border: `1px solid ${tema.acentoBorde}`,
          borderRadius: 10,
          padding: compact ? "14px 22px" : "20px 28px"
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

      {slide.svgDiagram === "aa-detalle"  && <CriterioAADetalleSVG  tema={tema} />}
      {slide.svgDiagram === "lll-detalle" && <CriterioLLLDetalleSVG tema={tema} />}
      {slide.svgDiagram === "lal-detalle" && <CriterioLALDetalleSVG tema={tema} />}

      <div
        style={{
          background: tema.azulSuave,
          border: `1px solid ${tema.azulBorde}`,
          borderRadius: 10,
          padding: compact ? "12px 20px" : "18px 24px"
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

function SlideEjemplo({ slide, tema }) {
  const compact = !!slide.svgDiagram;
  return (
    <div
      style={{
        padding: compact ? "20px 28px" : "36px 44px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: compact ? 14 : 22,
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

      {slide.svgDiagram === "ej1-lll" && <Ej1LLLSVG tema={tema} />}
      {slide.svgDiagram === "ej2-k32" && <Ej2K32SVG tema={tema} />}

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

function SlideReglaRica({ slide, tema }) {
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

      {slide.bloques.map((bloque, i) => {
        if (bloque.tipo === "texto") {
          return (
            <div
              key={i}
              style={{
                background: tema.acentoSuave,
                border: `1px solid ${tema.acentoBorde}`,
                borderRadius: 8,
                padding: "10px 18px",
                flexShrink: 0
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
              style={{
                background: tema.card,
                border: `1px solid ${tema.border}`,
                borderRadius: 8,
                padding: "10px 14px",
                flexShrink: 0
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
                <span style={{ color: tema.verde, marginRight: 6, fontWeight: 700 }}>✓</span>
                {bloque.correcto}
              </div>
              <div style={{ height: 1, background: tema.border, margin: "5px 0" }} />
              <div style={{ fontSize: 13, color: tema.muted, lineHeight: 1.55 }}>
                <span style={{ color: "#f5c842", marginRight: 6, fontWeight: 700 }}>✗</span>
                {bloque.incorrecto}
              </div>
            </div>
          );
        }

        if (bloque.tipo === "tabla") {
          return (
            <div
              key={i}
              style={{
                background: "rgba(0,0,0,0.35)",
                border: `1px solid ${tema.border}`,
                borderRadius: 8,
                overflow: "hidden",
                flexShrink: 0
              }}
            >
              {bloque.titulo && (
                <div
                  style={{
                    fontFamily: tema.mono,
                    fontSize: 9,
                    letterSpacing: "0.18em",
                    color: tema.acento,
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
                  <tr style={{ borderBottom: `1px solid ${tema.border}` }}>
                    <th style={{ padding: "5px 14px", textAlign: "left", color: tema.muted, fontFamily: tema.mono, fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 400 }}>Tiempo</th>
                    <th style={{ padding: "5px 14px", textAlign: "left", color: tema.verde, fontFamily: tema.mono, fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 400 }}>✓ Correcto</th>
                    <th style={{ padding: "5px 14px", textAlign: "left", color: "#f5c842", fontFamily: tema.mono, fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 400 }}>✗ Error</th>
                  </tr>
                </thead>
                <tbody>
                  {bloque.filas.map((fila, j) => (
                    <tr
                      key={j}
                      style={{ borderBottom: j < bloque.filas.length - 1 ? `1px solid rgba(255,255,255,0.05)` : "none" }}
                    >
                      <td style={{ padding: "5px 14px", color: tema.sub, fontStyle: "italic" }}>{fila.tiempo}</td>
                      <td style={{ padding: "5px 14px", color: tema.verde, fontFamily: tema.mono, fontWeight: 600 }}>{fila.correcto}</td>
                      <td style={{ padding: "5px 14px", color: tema.muted, fontFamily: tema.mono, textDecoration: "line-through" }}>{fila.error}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        if (bloque.tipo === "trampa") {
          const colorMap = { A: tema.acento, B: tema.azul, C: tema.verde };
          const color = colorMap[bloque.letra] || tema.acento;
          return (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
                background: tema.card,
                border: `1px solid ${color}44`,
                borderRadius: 8,
                padding: "10px 14px",
                flexShrink: 0
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
                  <span style={{ color: tema.verde, marginRight: 5, fontWeight: 700 }}>✓</span>
                  {bloque.correcto}
                </div>
                <div style={{ fontSize: 12.5, color: tema.muted, lineHeight: 1.5 }}>
                  <span style={{ color: "#f5c842", marginRight: 5, fontWeight: 700 }}>✗</span>
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
    case "regla_rica":
      return <SlideReglaRica {...props} />;
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
