// Renderizador de diapositivas para el sistema de presentaciones.
// Recibe un objeto `slide`, un `tema` y props de contexto (modo, votos, etc.)
import { useState, useEffect, useMemo, useRef } from "react";
import { M, useKaTeX } from "../data/teoria/shared.jsx";
import { TEMAS, useFuentesTema } from "../data/presentaciones/temas.jsx";
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
                {String.fromCharCode(65 + i)}. {op.includes('\\') ? <M>{op}</M> : (op.length > 14 ? op.slice(0, 14) + "…" : op)}
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

function SlidePortadaDiagram({ slide, tema }) {
  if (slide.svgDiagram === "euler-line") return <EulerLineSVG tema={tema} />;
  if (slide.svgDiagram === "prob-portada") return <ProbabilidadPortadaSVG tema={tema} />;
  if (slide.svgDiagram === "est-portada") return <EstPortadaSVG tema={tema} />;
  if (slide.svgDiagram === "cin-portada") return <CinPortadaSVG tema={tema} />;
  if (slide.svgDiagram === "din-portada") return <DinPortadaSVG tema={tema} />;
  if (slide.svgDiagram === "ene-portada") return <EnePortadaSVG tema={tema} />;
  if (slide.svgDiagram === "ter-portada") return <TerPortadaSVG tema={tema} />;
  if (slide.svgDiagram === "ond-portada") return <OndPortadaSVG tema={tema} />;
  if (slide.svgDiagram === "ele-portada") return <ElePortadaSVG tema={tema} />;
  if (slide.svgDiagram === "flu-portada") return <FluPortadaSVG tema={tema} />;
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

// ─── Cuadriláteros y Polígonos: helper ───────────────────────────────────────
function qRegPoly(cx, cy, r, n, offset = -Math.PI / 2) {
  return Array.from({ length: n }, (_, k) => {
    const a = offset + (2 * Math.PI * k) / n;
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");
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
    <svg viewBox="0 0 510 200" width="100%" style={{ maxHeight: 200, display: "block" }}>
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

function TriangulosCongruentesSVG({ tema }) {
  const A = [100, 18], B = [10, 178], C = [195, 178];
  const D = [310, 18], E = [220, 178], F = [405, 178];

  function mid([x1,y1],[x2,y2]) { return [(x1+x2)/2,(y1+y2)/2]; }
  function vsub([x1,y1],[x2,y2]) { return [x1-x2,y1-y2]; }
  function vadd([x1,y1],[x2,y2]) { return [x1+x2,y1+y2]; }
  function vscale([x,y],s) { return [x*s,y*s]; }
  function vunit([x,y]) { const l=Math.hypot(x,y); return [x/l,y/l]; }
  function vperp([x,y]) { return [-y,x]; }
  function fmt([x,y]) { return `${x.toFixed(1)},${y.toFixed(1)}`; }
  function tickPath(P1,P2) { const m=mid(P1,P2),p=vperp(vunit(vsub(P2,P1))); return `M ${fmt(vadd(m,vscale(p,6)))} L ${fmt(vadd(m,vscale(p,-6)))}`; }
  function tick2Path(P1,P2) { const m=mid(P1,P2),d=vunit(vsub(P2,P1)),p=vperp(d); return [-4,4].map(o=>{const c=vadd(m,vscale(d,o));return `M ${fmt(vadd(c,vscale(p,6)))} L ${fmt(vadd(c,vscale(p,-6)))}`;}).join(" "); }
  function tick3Path(P1,P2) { const m=mid(P1,P2),d=vunit(vsub(P2,P1)),p=vperp(d); return [-7,0,7].map(o=>{const c=vadd(m,vscale(d,o));return `M ${fmt(vadd(c,vscale(p,6)))} L ${fmt(vadd(c,vscale(p,-6)))}`;}).join(" "); }
  function arcPath(V,P1,P2,r) { const s=vadd(V,vscale(vunit(vsub(P1,V)),r)),e=vadd(V,vscale(vunit(vsub(P2,V)),r)); return `M ${fmt(s)} A ${r},${r} 0 0,1 ${fmt(e)}`; }
  const pts = ps => ps.map(fmt).join(" ");

  return (
    <svg viewBox="0 0 420 200" width="100%" style={{ maxHeight: 200, display: "block" }}>
      <polygon points={pts([A,B,C])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([D,E,F])} fill={tema.azulSuave} stroke="none"/>
      <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={tema.azul}   strokeWidth="2" opacity="0.85"/>
      <line x1={D[0]} y1={D[1]} x2={E[0]} y2={E[1]} stroke={tema.azul}   strokeWidth="2" opacity="0.85"/>
      <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={tema.verde}  strokeWidth="2" opacity="0.85"/>
      <line x1={E[0]} y1={E[1]} x2={F[0]} y2={F[1]} stroke={tema.verde}  strokeWidth="2" opacity="0.85"/>
      <line x1={C[0]} y1={C[1]} x2={A[0]} y2={A[1]} stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <line x1={F[0]} y1={F[1]} x2={D[0]} y2={D[1]} stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <path d={tickPath(A,B)}   stroke={tema.azul}   strokeWidth="1.5" fill="none" opacity="0.9"/>
      <path d={tickPath(D,E)}   stroke={tema.azul}   strokeWidth="1.5" fill="none" opacity="0.9"/>
      <path d={tick2Path(B,C)}  stroke={tema.verde}  strokeWidth="1.5" fill="none" opacity="0.9"/>
      <path d={tick2Path(E,F)}  stroke={tema.verde}  strokeWidth="1.5" fill="none" opacity="0.9"/>
      <path d={tick3Path(C,A)}  stroke={tema.acento} strokeWidth="1.5" fill="none" opacity="0.9"/>
      <path d={tick3Path(F,D)}  stroke={tema.acento} strokeWidth="1.5" fill="none" opacity="0.9"/>
      <path d={arcPath(A,C,B,22)} stroke={tema.azul}   strokeWidth="1.5" fill="none" opacity="0.8"/>
      <path d={arcPath(D,F,E,22)} stroke={tema.azul}   strokeWidth="1.5" fill="none" opacity="0.8"/>
      <path d={arcPath(B,A,C,22)} stroke={tema.verde}  strokeWidth="1.5" fill="none" opacity="0.8"/>
      <path d={arcPath(E,D,F,22)} stroke={tema.verde}  strokeWidth="1.5" fill="none" opacity="0.8"/>
      <path d={arcPath(C,B,A,22)} stroke={tema.acento} strokeWidth="1.5" fill="none" opacity="0.8"/>
      <path d={arcPath(F,E,D,22)} stroke={tema.acento} strokeWidth="1.5" fill="none" opacity="0.8"/>
      <text x={A[0]-5} y={A[1]-10} fill={tema.azul}   fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="2"       y={B[1]+18} fill={tema.verde}  fontSize="15" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x={C[0]-3}  y={C[1]+18} fill={tema.acento} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">C</text>
      <text x={D[0]-5} y={D[1]-10} fill={tema.azul}   fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x={E[0]+6} y={E[1]+18} fill={tema.verde}  fontSize="15" fontFamily="Georgia,serif" fontStyle="italic">E</text>
      <text x={F[0]+7}  y={F[1]+4} fill={tema.acento} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic">F</text>
      <text x="207" y="120" fill="rgba(240,236,227,0.32)" fontSize="34" fontFamily="Georgia,serif" textAnchor="middle">≅</text>
    </svg>
  );
}

// ─── Definicion SVGs: Cuadriláteros y Polígonos ──────────────────────────────
function ParalelogramoDefSVG({ tema }) {
  return (
    <svg viewBox="0 0 360 150" width="100%" style={{ maxHeight: 138, display: "block" }}>
      <polygon points="30,15 260,15 285,125 55,125" fill={tema.azulSuave} stroke="none"/>
      <line x1="30" y1="15" x2="260" y2="15" stroke={tema.azul} strokeWidth="2" opacity="0.9"/>
      <line x1="55" y1="125" x2="285" y2="125" stroke={tema.azul} strokeWidth="2" opacity="0.9"/>
      <line x1="30" y1="15" x2="55" y2="125" stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <line x1="260" y1="15" x2="285" y2="125" stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <path d="M 138,10 L 145,15 L 138,20" stroke={tema.azul} strokeWidth="2" fill="none"/>
      <path d="M 163,120 L 170,125 L 163,130" stroke={tema.azul} strokeWidth="2" fill="none"/>
      <path d="M 36,66 L 44,72" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d="M 266,66 L 274,72" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <line x1="30" y1="15" x2="30" y2="125" stroke={tema.verde} strokeWidth="1.4" strokeDasharray="5,4" opacity="0.65"/>
      <path d="M 30,113 L 40,113 L 40,125" stroke={tema.verde} strokeWidth="1.4" fill="none" opacity="0.65"/>
      <text x="145" y="11" fill={tema.azul} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">b</text>
      <text x="14" y="72" fill={tema.verde} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">h</text>
      <text x="34" y="73" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">a</text>
      <text x="25" y="10" fill={tema.azul} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">A</text>
      <text x="263" y="10" fill={tema.azul} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="290" y="130" fill={tema.azul} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">C</text>
      <text x="50" y="140" fill={tema.azul} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">D</text>
    </svg>
  );
}
function TrapecioDefSVG({ tema }) {
  return (
    <svg viewBox="0 0 380 155" width="100%" style={{ maxHeight: 138, display: "block" }}>
      <polygon points="20,130 340,130 280,20 80,20" fill={tema.azulSuave} stroke="none"/>
      <line x1="20" y1="130" x2="340" y2="130" stroke={tema.azul} strokeWidth="2.5" opacity="0.9"/>
      <line x1="80" y1="20" x2="280" y2="20" stroke={tema.verde} strokeWidth="2.5" opacity="0.9"/>
      <line x1="20" y1="130" x2="80" y2="20" stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <line x1="340" y1="130" x2="280" y2="20" stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <line x1="180" y1="20" x2="180" y2="130" stroke={tema.verde} strokeWidth="1.4" strokeDasharray="5,4" opacity="0.6"/>
      <path d="M 180,118 L 190,118 L 190,130" stroke={tema.verde} strokeWidth="1.4" fill="none" opacity="0.6"/>
      <path d="M 173,125 L 180,130 L 173,135" stroke={tema.azul} strokeWidth="2" fill="none"/>
      <path d="M 173,15 L 180,20 L 173,25" stroke={tema.verde} strokeWidth="2" fill="none"/>
      <text x="180" y="147" fill={tema.azul} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">B</text>
      <text x="180" y="14" fill={tema.verde} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">b</text>
      <text x="192" y="78" fill={tema.verde} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">h</text>
    </svg>
  );
}
function PoligonoRegularDefSVG({ tema }) {
  const configs = [
    { n: 3, cx: 45, cy: 60, r: 30, label: "n=3" },
    { n: 4, cx: 120, cy: 60, r: 28, label: "n=4" },
    { n: 5, cx: 197, cy: 60, r: 30, label: "n=5" },
    { n: 6, cx: 275, cy: 60, r: 30, label: "n=6" },
  ];
  return (
    <svg viewBox="0 0 330 105" width="100%" style={{ maxHeight: 105, display: "block" }}>
      {configs.map(({ n, cx, cy, r, label }) => (
        <g key={n}>
          <polygon points={qRegPoly(cx, cy, r, n, n === 4 ? -Math.PI / 4 : -Math.PI / 2)}
            fill={tema.azulSuave} stroke={tema.azul} strokeWidth="1.8" opacity="0.88"/>
          <text x={cx} y={cy + r + 14} fill={tema.muted} fontSize="10"
            fontFamily="'DM Sans',sans-serif" textAnchor="middle">{label}</text>
        </g>
      ))}
    </svg>
  );
}

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

      {slide.svgDiagram === "triangulos-semejantes" && (
        <TriangulosSemejantesSVG tema={tema} />
      )}
      {slide.svgDiagram === "triangulos-congruentes" && (
        <TriangulosCongruentesSVG tema={tema} />
      )}
      {slide.svgDiagram === "paralelogramo-def"    && <ParalelogramoDefSVG    tema={tema} />}
      {slide.svgDiagram === "trapecio-def"         && <TrapecioDefSVG         tema={tema} />}
      {slide.svgDiagram === "poligono-regular-def" && <PoligonoRegularDefSVG  tema={tema} />}
      {slide.svgDiagram === "circulo-partes"       && <CirculoPartesSVG       tema={tema} />}

      <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1fr 1fr", gap: 12 }}>
        {slide.condiciones.map((c, i) => {
          const activo = resaltadoIdx === i;
          return (
          <div
            key={i}
            onClick={() => onResaltar && onResaltar(i)}
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

function RazonSemejanzaSVG({ tema }) {
  // Big triangle △ABC, small triangle △DEF (k = 2)
  // D = E + 0.5*(A − B) ensuring DEF ∼ ABC with k = 2
  // Big: A(85,20) B(10,170) C(170,170)  →  base BC = 160, height = 150
  // Small: D(310,95) E(273,170) F(353,170) →  base EF = 80, height = 75

  return (
    <svg viewBox="0 0 490 200" width="100%" style={{ maxHeight: 180, display: "block" }}>
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

// ─── Concepto SVGs: Cuadriláteros y Polígonos ────────────────────────────────
function ParalelogramoFormulasSVG({ tema }) {
  return (
    <svg viewBox="0 0 360 148" width="100%" style={{ maxHeight: 132, display: "block" }}>
      <polygon points="35,25 255,25 290,130 70,130" fill={tema.azulSuave} stroke="none"/>
      <line x1="35" y1="25" x2="255" y2="25" stroke={tema.azul} strokeWidth="2" opacity="0.9"/>
      <line x1="70" y1="130" x2="290" y2="130" stroke={tema.azul} strokeWidth="2" opacity="0.9"/>
      <line x1="35" y1="25" x2="70" y2="130" stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <line x1="255" y1="25" x2="290" y2="130" stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <line x1="35" y1="25" x2="35" y2="130" stroke={tema.verde} strokeWidth="1.4" strokeDasharray="5,4" opacity="0.7"/>
      <path d="M 35,118 L 45,118 L 45,130" stroke={tema.verde} strokeWidth="1.4" fill="none" opacity="0.7"/>
      <text x="145" y="20" fill={tema.azul} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">b</text>
      <text x="180" y="144" fill={tema.azul} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">b</text>
      <text x="19" y="82" fill={tema.verde} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">h</text>
      <text x="44" y="80" fill={tema.acento} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic">a</text>
      <text x="279" y="80" fill={tema.acento} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic">a</text>
    </svg>
  );
}
function TrapecioFormulasSVG({ tema }) {
  return (
    <svg viewBox="0 0 400 162" width="100%" style={{ maxHeight: 148, display: "block" }}>
      <polygon points="20,140 360,140 290,25 85,25" fill={tema.azulSuave} stroke="none"/>
      <line x1="20" y1="140" x2="360" y2="140" stroke={tema.azul} strokeWidth="2.5" opacity="0.9"/>
      <line x1="85" y1="25" x2="290" y2="25" stroke={tema.verde} strokeWidth="2.5" opacity="0.9"/>
      <line x1="20" y1="140" x2="85" y2="25" stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <line x1="360" y1="140" x2="290" y2="25" stroke={tema.acento} strokeWidth="2" opacity="0.85"/>
      <line x1="85" y1="25" x2="85" y2="140" stroke={tema.verde} strokeWidth="1.4" strokeDasharray="5,4" opacity="0.65"/>
      <path d="M 85,128 L 95,128 L 95,140" stroke={tema.verde} strokeWidth="1.4" fill="none" opacity="0.65"/>
      <line x1="52" y1="82" x2="325" y2="82" stroke={tema.azul} strokeWidth="1.5" strokeDasharray="6,4" opacity="0.45"/>
      <text x="190" y="156" fill={tema.azul} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">B</text>
      <text x="187" y="18" fill={tema.verde} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">b</text>
      <text x="72" y="86" fill={tema.verde} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">h</text>
      <text x="188" y="76" fill={tema.azul} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle" opacity="0.65">m</text>
    </svg>
  );
}
function AnguloInteriorFormulaSVG({ tema }) {
  return (
    <svg viewBox="0 0 310 160" width="100%" style={{ maxHeight: 148, display: "block" }}>
      <polygon points={qRegPoly(150, 80, 62, 6, -Math.PI / 2)}
        fill={tema.azulSuave} stroke={tema.azul} strokeWidth="2" opacity="0.85"/>
      <path d="M 164,28 A 18,18 0 0,1 136,28" stroke={tema.acento} strokeWidth="2.5" fill="none"/>
      <text x="150" y="46" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">α</text>
      <text x="252" y="80" fill={tema.azul} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.75">n=6</text>
      <text x="150" y="152" fill={tema.muted} fontSize="10" fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.03em">α = (n−2)·180° / n</text>
    </svg>
  );
}
function AnguloExteriorFormulaSVG({ tema }) {
  // Pentágono: centro(155,92) r=62. Vértice superior P0=(155,30), P1=(214,73), P4=(96,73)
  // Ángulo exterior β en P0: entre extensión de P1→P0 y lado P0→P4
  // Arco r=22: inicio(137,17) y fin(137,43) — ambos exactamente a r=22 de P0
  // Extensión punteada desde P0(155,30) hacia (121,5)
  return (
    <svg viewBox="0 0 310 175" width="100%" style={{ maxHeight: 160, display: "block" }}>
      {/* Extensión del lado P1→P0 más allá de P0 */}
      <line x1="155" y1="30" x2="121" y2="5"
        stroke={tema.azul} strokeWidth="2" strokeDasharray="5,3" opacity="0.6"/>
      <polygon points={qRegPoly(155, 92, 62, 5, -Math.PI / 2)}
        fill={tema.azulSuave} stroke={tema.azul} strokeWidth="2" opacity="0.85"/>
      {/* Arco ángulo exterior β en P0(155,30), r=22, CCW → pasa por el exterior (izquierda) */}
      <path d="M 137,17 A 22,22 0 0,0 137,43"
        stroke={tema.acento} strokeWidth="2.2" fill="none"/>
      <text x="123" y="35" fill={tema.acento} fontSize="13"
        fontFamily="Georgia,serif" fontStyle="italic">β</text>
      <text x="260" y="115" fill={tema.azul} fontSize="12"
        fontFamily="Georgia,serif" fontStyle="italic" opacity="0.75">n=5</text>
      <text x="155" y="168" fill={tema.muted} fontSize="10"
        fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.03em">β = 360° / n</text>
    </svg>
  );
}

function SlideConcepto({ slide, tema, resaltadoIdx, onResaltar }) {
  const compact = !!slide.svgDiagram;
  const winW = useWindowWidth();
  const narrow = winW < 500;
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

      {slide.svgDiagram === "razon-semejanza"          && <RazonSemejanzaSVG          tema={tema} />}
      {slide.svgDiagram === "paralelogramo-formulas"   && <ParalelogramoFormulasSVG   tema={tema} />}
      {slide.svgDiagram === "trapecio-formulas"        && <TrapecioFormulasSVG        tema={tema} />}
      {slide.svgDiagram === "angulo-interior-formula"  && <AnguloInteriorFormulaSVG   tema={tema} />}
      {slide.svgDiagram === "angulo-exterior-formula"  && <AnguloExteriorFormulaSVG   tema={tema} />}
      {slide.svgDiagram === "circulo-partes"           && <CirculoPartesSVG           tema={tema} />}
      {slide.svgDiagram === "circulo-formulas"         && <CirculoFormulasSVG         tema={tema} />}
      {slide.svgDiagram === "porciones-circulo"        && <PorcionesCirculoSVG        tema={tema} />}
      {slide.svgDiagram === "areas-estrategia"         && <AreasEstrategiaSVG         tema={tema} />}
      {slide.svgDiagram === "espacio-muestral"         && <EspacioMuestralSVG         tema={tema} />}
      {slide.svgDiagram === "dos-dados"                && <DosDadosSVG                tema={tema} />}
      {slide.svgDiagram === "orden-importa"            && <OrdenImportaSVG            tema={tema} />}
      {slide.svgDiagram === "frecuencias-dado"         && <FrecuenciasDadoChart       tema={tema} />}
      {slide.svgDiagram === "tipos-variable"           && <TiposVariableSVG          tema={tema} />}
      {slide.svgDiagram === "tabla-frecuencias"        && <TablaFrecuenciasEst       tema={tema} />}
      {slide.svgDiagram === "graficas-barras"          && <EstBarrasChart            tema={tema} />}
      {slide.svgDiagram === "tendencia-central"        && <TendenciaCentralSVG       tema={tema} />}
      {slide.svgDiagram === "dispersion"               && <DispersionSVG             tema={tema} />}
      {slide.svgDiagram === "graficas-circular"        && <EstCircularSVG            tema={tema} />}
      {slide.svgDiagram === "cin-desplazamiento"       && <CinDesplazamientoSVG     tema={tema} />}
      {slide.svgDiagram === "din-fuerza-neta"          && <DinFuerzaNetaSVG         tema={tema} />}
      {slide.svgDiagram === "din-friccion"             && <DinFriccionSVG           tema={tema} />}
      {slide.svgDiagram === "ene-trabajo"              && <EneTrabajoSVG            tema={tema} />}
      {slide.svgDiagram === "ter-transferencia"        && <TerTransferenciaSVG      tema={tema} />}
      {slide.svgDiagram === "ond-onda"                 && <OndOndaSVG               tema={tema} />}
      {slide.svgDiagram === "ond-tipos"                && <OndTiposSVG              tema={tema} />}
      {slide.svgDiagram === "ele-coulomb"              && <EleCoulombSVG            tema={tema} />}
      {slide.svgDiagram === "ele-magnetismo"           && <EleMagnetismoSVG         tema={tema} />}
      {slide.svgDiagram === "flu-continuidad"          && <FluContinuidadSVG        tema={tema} />}

      <div style={{ display: "flex", flexDirection: "column", gap: compact ? 8 : 10 }}>
        {slide.items.map((item, i) => {
          const activo = resaltadoIdx === i;
          return (
          <div
            key={i}
            onClick={() => onResaltar && onResaltar(i)}
            style={{
              display: "flex",
              flexDirection: item.pasos ? "column" : "row",
              alignItems: item.pasos ? "flex-start" : "center",
              gap: item.pasos ? 8 : 18,
              background: activo ? tema.acentoSuave : tema.card,
              border: `1px solid ${activo ? tema.acento : tema.border}`,
              borderRadius: 8,
              padding: compact ? "9px 18px" : "13px 22px",
              boxShadow: activo ? `0 0 0 2px ${tema.acentoBorde}, 0 0 16px ${tema.acentoBorde}` : "none",
              transform: "none",
              transition: "all 0.2s",
              cursor: onResaltar ? "pointer" : "default"
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
                <span style={{ fontSize: 15, color: "#c4bfb3" }}>{item.texto}</span>
              </>
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
      <text x="95" y="86" fill={tema.muted} fontSize="9" fontFamily="'DM Sans',sans-serif" textAnchor="middle">60° · 60° · 60°</text>
    </svg>
  );
}
function CuadradoRegSVG({ tema }) {
  return (
    <svg viewBox="0 0 190 88" width="100%" style={{ display: "block" }}>
      <polygon points={qRegPoly(95,42,32,4,-Math.PI/4)} fill={tema.azulSuave} stroke={tema.azul} strokeWidth="1.8" opacity="0.85"/>
      <text x="95" y="86" fill={tema.muted} fontSize="9" fontFamily="'DM Sans',sans-serif" textAnchor="middle">90° × 4</text>
    </svg>
  );
}
function PentagonoRegSVG({ tema }) {
  return (
    <svg viewBox="0 0 190 88" width="100%" style={{ display: "block" }}>
      <polygon points={qRegPoly(95,44,36,5,-Math.PI/2)} fill={tema.azulSuave} stroke={tema.azul} strokeWidth="1.8" opacity="0.85"/>
      <text x="95" y="86" fill={tema.muted} fontSize="9" fontFamily="'DM Sans',sans-serif" textAnchor="middle">108° × 5</text>
    </svg>
  );
}
function HexagonoRegSVG({ tema }) {
  return (
    <svg viewBox="0 0 190 88" width="100%" style={{ display: "block" }}>
      <polygon points={qRegPoly(95,44,36,6,-Math.PI/2)} fill={tema.azulSuave} stroke={tema.azul} strokeWidth="1.8" opacity="0.85"/>
      <text x="95" y="86" fill={tema.muted} fontSize="9" fontFamily="'DM Sans',sans-serif" textAnchor="middle">120° × 6</text>
    </svg>
  );
}
function HeptagonoRegSVG({ tema }) {
  return (
    <svg viewBox="0 0 190 88" width="100%" style={{ display: "block" }}>
      <polygon points={qRegPoly(95,44,36,7,-Math.PI/2)} fill={tema.azulSuave} stroke={tema.azul} strokeWidth="1.8" opacity="0.85"/>
      <text x="95" y="86" fill={tema.muted} fontSize="9" fontFamily="'DM Sans',sans-serif" textAnchor="middle">≈128.6° × 7</text>
    </svg>
  );
}
function OctagonoRegSVG({ tema }) {
  return (
    <svg viewBox="0 0 190 88" width="100%" style={{ display: "block" }}>
      <polygon points={qRegPoly(95,44,36,8,-Math.PI/2)} fill={tema.azulSuave} stroke={tema.azul} strokeWidth="1.8" opacity="0.85"/>
      <text x="95" y="86" fill={tema.muted} fontSize="9" fontFamily="'DM Sans',sans-serif" textAnchor="middle">135° × 8</text>
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
function CongLLLDetalleSVG({ tema }) {
  return (
    <svg viewBox="0 0 450 200" width="100%" style={{ display: "block", maxHeight: 200 }}>
      <polygon points="100,18 12,162 210,162" fill={tema.azulSuave} stroke="none"/>
      <polygon points="322,18 234,162 432,162" fill={tema.azulSuave} stroke="none"/>
      <line x1="100" y1="18"  x2="12"  y2="162" stroke={tema.azul}   strokeWidth="2.5" opacity="0.9"/>
      <line x1="322" y1="18"  x2="234" y2="162" stroke={tema.azul}   strokeWidth="2.5" opacity="0.9"/>
      <line x1="12"  y1="162" x2="210" y2="162" stroke={tema.verde}  strokeWidth="2.5" opacity="0.9"/>
      <line x1="234" y1="162" x2="432" y2="162" stroke={tema.verde}  strokeWidth="2.5" opacity="0.9"/>
      <line x1="210" y1="162" x2="100" y2="18"  stroke={tema.acento} strokeWidth="2.5" opacity="0.9"/>
      <line x1="432" y1="162" x2="322" y2="18"  stroke={tema.acento} strokeWidth="2.5" opacity="0.9"/>
      <path d="M 51,87 L 61,93"   stroke={tema.azul}   strokeWidth="2" fill="none"/>
      <path d="M 273,87 L 283,93" stroke={tema.azul}   strokeWidth="2" fill="none"/>
      <path d="M 107,157 L 107,167 M 115,157 L 115,167" stroke={tema.verde}  strokeWidth="2" fill="none"/>
      <path d="M 329,157 L 329,167 M 337,157 L 337,167" stroke={tema.verde}  strokeWidth="2" fill="none"/>
      <path d="M 154,81 L 146,87 M 159,87 L 151,93 M 164,93 L 156,99"     stroke={tema.acento} strokeWidth="2" fill="none"/>
      <path d="M 376,81 L 368,87 M 381,87 L 373,93 M 386,93 L 378,99"     stroke={tema.acento} strokeWidth="2" fill="none"/>
      <text x="100" y="10"  fill={tema.azul}   fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="178" fill={tema.verde}  fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="210" y="178" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="322" y="10"  fill={tema.azul}   fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="234" y="178" fill={tema.verde}  fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="436" y="178" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>
      <text x="222" y="102" fill="rgba(240,236,227,0.30)" fontSize="28" fontFamily="Georgia,serif" textAnchor="middle">≅</text>
    </svg>
  );
}

function CongLALDetalleSVG({ tema }) {
  return (
    <svg viewBox="0 0 450 200" width="100%" style={{ display: "block", maxHeight: 200 }}>
      <polygon points="100,18 12,162 210,162" fill={tema.azulSuave} stroke="none"/>
      <polygon points="322,18 234,162 432,162" fill={tema.azulSuave} stroke="none"/>
      <line x1="12"  y1="162" x2="210" y2="162" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
      <line x1="234" y1="162" x2="432" y2="162" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
      <line x1="100" y1="18"  x2="12"  y2="162" stroke={tema.azul}   strokeWidth="2.5"/>
      <line x1="322" y1="18"  x2="234" y2="162" stroke={tema.azul}   strokeWidth="2.5"/>
      <line x1="210" y1="162" x2="100" y2="18"  stroke={tema.acento} strokeWidth="2.5"/>
      <line x1="432" y1="162" x2="322" y2="18"  stroke={tema.acento} strokeWidth="2.5"/>
      <path d="M 113,35 A 22,22 0 0,1 89,37"  stroke={tema.verde} strokeWidth="2.2" fill="none"/>
      <path d="M 335,35 A 22,22 0 0,1 311,37"  stroke={tema.verde} strokeWidth="2.2" fill="none"/>
      <path d="M 51,87 L 61,93"   stroke={tema.azul}   strokeWidth="2" fill="none"/>
      <path d="M 273,87 L 283,93" stroke={tema.azul}   strokeWidth="2" fill="none"/>
      <path d="M 154,81 L 146,87 M 159,87 L 151,93"   stroke={tema.acento} strokeWidth="2" fill="none"/>
      <path d="M 376,81 L 368,87 M 381,87 L 373,93"   stroke={tema.acento} strokeWidth="2" fill="none"/>
      <text x="104" y="54"  fill={tema.verde} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">∠A</text>
      <text x="326" y="54"  fill={tema.verde} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">∠D</text>
      <text x="100" y="10"  fill={tema.azul}   fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="178" fill="rgba(240,236,227,0.45)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="210" y="178" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="322" y="10"  fill={tema.azul}   fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="234" y="178" fill="rgba(240,236,227,0.45)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="436" y="178" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>
      <text x="222" y="95"  fill="rgba(240,236,227,0.26)" fontSize="24" fontFamily="Georgia,serif" textAnchor="middle">≅</text>
      <text x="222" y="194" fill={tema.verde} fontSize="9.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.03em">∠A = ∠D  (ángulo comprendido)</text>
    </svg>
  );
}

function CongALADetalleSVG({ tema }) {
  return (
    <svg viewBox="0 0 450 200" width="100%" style={{ display: "block", maxHeight: 200 }}>
      <polygon points="100,18 12,162 210,162" fill={tema.azulSuave} stroke="none"/>
      <polygon points="322,18 234,162 432,162" fill={tema.azulSuave} stroke="none"/>
      <line x1="12"  y1="162" x2="210" y2="162" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
      <line x1="234" y1="162" x2="432" y2="162" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
      <line x1="210" y1="162" x2="100" y2="18"  stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
      <line x1="432" y1="162" x2="322" y2="18"  stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
      <line x1="100" y1="18"  x2="12"  y2="162" stroke={tema.azul} strokeWidth="2.5" opacity="0.9"/>
      <line x1="322" y1="18"  x2="234" y2="162" stroke={tema.azul} strokeWidth="2.5" opacity="0.9"/>
      <path d="M 113,35 A 22,22 0 0,1 89,37"  stroke={tema.verde}  strokeWidth="2.2" fill="none"/>
      <path d="M 335,35 A 22,22 0 0,1 311,37"  stroke={tema.verde}  strokeWidth="2.2" fill="none"/>
      <path d="M 22,145 A 20,20 0 0,1 32,162"  stroke={tema.acento} strokeWidth="2.2" fill="none"/>
      <path d="M 244,145 A 20,20 0 0,1 254,162" stroke={tema.acento} strokeWidth="2.2" fill="none"/>
      <path d="M 190,162 A 20,20 0 0,1 198,146" stroke={tema.acento} strokeWidth="1.8" fill="none" strokeDasharray="4,3"/>
      <path d="M 412,162 A 20,20 0 0,1 420,146" stroke={tema.acento} strokeWidth="1.8" fill="none" strokeDasharray="4,3"/>
      <path d="M 51,87 L 61,93"   stroke={tema.azul} strokeWidth="2" fill="none"/>
      <path d="M 273,87 L 283,93" stroke={tema.azul} strokeWidth="2" fill="none"/>
      <text x="100" y="54"  fill={tema.verde}  fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">α</text>
      <text x="322" y="54"  fill={tema.verde}  fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">α</text>
      <text x="38"  y="152" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">β</text>
      <text x="260" y="152" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">β</text>
      <text x="100" y="10"  fill={tema.azul}   fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="178" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="210" y="178" fill="rgba(240,236,227,0.45)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="322" y="10"  fill={tema.azul}   fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="234" y="178" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="436" y="178" fill="rgba(240,236,227,0.45)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>
      <text x="222" y="90"  fill="rgba(240,236,227,0.26)" fontSize="24" fontFamily="Georgia,serif" textAnchor="middle">≅</text>
      <text x="222" y="194" fill="rgba(240,236,227,0.55)" fontSize="9.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">γ = 180° − α − β  (se determina solo)</text>
    </svg>
  );
}

function CongLAADetalleSVG({ tema }) {
  return (
    <svg viewBox="0 0 450 200" width="100%" style={{ display: "block", maxHeight: 200 }}>
      <polygon points="100,18 12,162 210,162" fill={tema.azulSuave} stroke="none"/>
      <polygon points="322,18 234,162 432,162" fill={tema.azulSuave} stroke="none"/>
      <line x1="100" y1="18"  x2="12"  y2="162" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
      <line x1="322" y1="18"  x2="234" y2="162" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
      <line x1="210" y1="162" x2="100" y2="18"  stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
      <line x1="432" y1="162" x2="322" y2="18"  stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
      <line x1="12"  y1="162" x2="210" y2="162" stroke={tema.azul} strokeWidth="2.5" opacity="0.9"/>
      <line x1="234" y1="162" x2="432" y2="162" stroke={tema.azul} strokeWidth="2.5" opacity="0.9"/>
      <path d="M 113,35 A 22,22 0 0,1 89,37"  stroke={tema.verde}  strokeWidth="2.2" fill="none"/>
      <path d="M 335,35 A 22,22 0 0,1 311,37"  stroke={tema.verde}  strokeWidth="2.2" fill="none"/>
      <path d="M 22,145 A 20,20 0 0,1 32,162"  stroke={tema.acento} strokeWidth="2.2" fill="none"/>
      <path d="M 244,145 A 20,20 0 0,1 254,162" stroke={tema.acento} strokeWidth="2.2" fill="none"/>
      <path d="M 107,157 L 107,167"   stroke={tema.azul} strokeWidth="2" fill="none"/>
      <path d="M 329,157 L 329,167"   stroke={tema.azul} strokeWidth="2" fill="none"/>
      <text x="100" y="10"  fill={tema.verde}  fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="178" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="210" y="178" fill="rgba(240,236,227,0.45)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="322" y="10"  fill={tema.verde}  fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="234" y="178" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="436" y="178" fill="rgba(240,236,227,0.45)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>
      <text x="100" y="50"  fill={tema.verde}  fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">α</text>
      <text x="322" y="50"  fill={tema.verde}  fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">α</text>
      <text x="37"  y="152" fill={tema.acento} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">β</text>
      <text x="259" y="152" fill={tema.acento} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">β</text>
      <text x="222" y="90"  fill="rgba(240,236,227,0.28)" fontSize="26" fontFamily="Georgia,serif" textAnchor="middle">≅</text>
      <text x="222" y="194" fill={tema.azul} fontSize="9.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.03em">BC = EF  (lado no comprendido)</text>
    </svg>
  );
}

// △ABC: A(100,18) B(12,162) C(210,162)  △DEF: D(341,78) E(290,162) F(405,162)  k≈1.72
function CriterioAADetalleSVG({ tema }) {
  return (
    <svg viewBox="0 0 480 200" width="100%" style={{ display: "block", maxHeight: 188 }}>
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
      <text x="4"   y="178" fill={tema.verde}  fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="210" y="178" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="341" y="72"  fill={tema.azul}   fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="282" y="172" fill={tema.verde}  fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">E</text>
      <text x="409" y="172" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>

      {/* ∼ between triangles */}
      <text x="252" y="110" fill="rgba(240,236,227,0.28)" fontSize="30" fontFamily="Georgia,serif" textAnchor="middle">∼</text>

      {/* Subtitle: γ derived */}
      <text x="252" y="196" fill="rgba(240,236,227,0.20)" fontSize="9.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.05em">γ = 180° − α − β  (se determina solo)</text>
    </svg>
  );
}

// △ABC: A(100,18) B(12,162) C(210,162)  △DEF: D(341,78) E(290,162) F(405,162)  k≈1.72
function CriterioLLLDetalleSVG({ tema }) {
  return (
    <svg viewBox="0 0 480 182" width="100%" style={{ display: "block", maxHeight: 170 }}>
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
      <text x="4"   y="178" fill={tema.verde}  fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="210" y="178" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
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
    <svg viewBox="0 0 480 182" width="100%" style={{ display: "block", maxHeight: 170 }}>
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
      <text x="4"   y="178" fill="rgba(240,236,227,0.45)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="210" y="178" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="341" y="72"  fill={tema.azul}   fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="282" y="172" fill="rgba(240,236,227,0.45)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">E</text>
      <text x="409" y="172" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>

      {/* ∼ + caption */}
      <text x="252" y="82"  fill="rgba(240,236,227,0.25)" fontSize="26" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
      <text x="252" y="114" fill={tema.verde} fontSize="9.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.03em">∠A = ∠D  (ángulo comprendido)</text>
    </svg>
  );
}

// Big right △ABC: B(25,170) A(25,80) C(145,170) — sides 6,8,10 (15px/unit)
// Small right △DEF: D(210,110) E(210,150) F(260,150) — sides 3,4,5 (10px/unit)
function Ej1LLLSVG({ tema }) {
  return (
    <svg viewBox="0 0 310 192" width="100%" style={{ display: "block", maxHeight: 185 }}>
      {/* Fills */}
      <polygon points="25,80 25,170 145,170" fill={tema.azulSuave} stroke="none"/>
      <polygon points="210,110 210,150 260,150" fill={tema.azulSuave} stroke="none"/>

      {/* Right angle squares */}
      <path d="M 25,161 L 34,161 L 34,170" fill="none" stroke="rgba(240,236,227,0.45)" strokeWidth="1.2"/>
      <path d="M 210,141 L 219,141 L 219,150" fill="none" stroke="rgba(240,236,227,0.45)" strokeWidth="1.2"/>

      {/* Sides: AB/DE=azul(1), BC/EF=verde(2), CA/FD=acento(3) */}
      <line x1="25"  y1="80"  x2="25"  y2="170" stroke={tema.azul}   strokeWidth="2.5"/>
      <line x1="25"  y1="170" x2="145" y2="170" stroke={tema.verde}  strokeWidth="2.5"/>
      <line x1="145" y1="170" x2="25"  y2="80"  stroke={tema.acento} strokeWidth="2.5"/>
      <line x1="210" y1="110" x2="210" y2="150" stroke={tema.azul}   strokeWidth="2.5"/>
      <line x1="210" y1="150" x2="260" y2="150" stroke={tema.verde}  strokeWidth="2.5"/>
      <line x1="260" y1="150" x2="210" y2="110" stroke={tema.acento} strokeWidth="2.5"/>

      {/* Ticks — AB/DE: 1 azul */}
      <line x1="18"  y1="125" x2="32"  y2="125" stroke={tema.azul}  strokeWidth="2"/>
      <line x1="203" y1="130" x2="217" y2="130" stroke={tema.azul}  strokeWidth="2"/>
      {/* BC/EF: 2 verde */}
      <line x1="75"  y1="163" x2="75"  y2="177" stroke={tema.verde} strokeWidth="2"/>
      <line x1="90"  y1="163" x2="90"  y2="177" stroke={tema.verde} strokeWidth="2"/>
      <line x1="229" y1="144" x2="229" y2="157" stroke={tema.verde} strokeWidth="2"/>
      <line x1="240" y1="144" x2="240" y2="157" stroke={tema.verde} strokeWidth="2"/>
      {/* CA/FD: 3 acento (perp direction (0.600,−0.800)) */}
      <line x1="90"  y1="121" x2="84"  y2="129" stroke={tema.acento} strokeWidth="2"/>
      <line x1="85"  y1="117" x2="79"  y2="125" stroke={tema.acento} strokeWidth="2"/>
      <line x1="95"  y1="125" x2="89"  y2="133" stroke={tema.acento} strokeWidth="2"/>
      <line x1="237" y1="127" x2="232" y2="133" stroke={tema.acento} strokeWidth="2"/>
      <line x1="233" y1="123" x2="228" y2="129" stroke={tema.acento} strokeWidth="2"/>
      <line x1="241" y1="131" x2="236" y2="137" stroke={tema.acento} strokeWidth="2"/>

      {/* Side labels */}
      <text x="14"  y="129" fill={tema.azul}   fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="end">6</text>
      <text x="85"  y="185" fill={tema.verde}  fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">8</text>
      <text x="100" y="112" fill={tema.acento} fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="600">10</text>
      <text x="200" y="132" fill={tema.azul}   fontSize="11" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="end">3</text>
      <text x="235" y="163" fill={tema.verde}  fontSize="11" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">4</text>
      <text x="248" y="118" fill={tema.acento} fontSize="11" fontFamily="'DM Sans',sans-serif" fontWeight="600">5</text>

      {/* Vertex labels */}
      <text x="25"  y="73"  fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="11"  y="184" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="149" y="184" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">C</text>
      <text x="210" y="103" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="196" y="162" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">E</text>
      <text x="264" y="162" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">F</text>

      {/* k=2 between the triangles */}
      <text x="180" y="118" fill="rgba(240,236,227,0.50)" fontSize="16" fontWeight="700" fontFamily="'DM Sans',sans-serif" textAnchor="middle">k = 2</text>
      <text x="180" y="134" fill="rgba(240,236,227,0.22)" fontSize="8.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">△ABC ∼ △DEF</text>
    </svg>
  );
}

// Big △PQR: P(95,29) Q(12,170) R(198,170) — labeled PQ=12
// Small △XYZ: X(296,57) Y(240,151) Z(364,151) — labeled XY=?, k=3/2
function Ej2K32SVG({ tema }) {
  return (
    <svg viewBox="0 0 388 185" width="100%" style={{ display: "block", maxHeight: 175 }}>
      {/* Fills */}
      <polygon points="95,29 12,170 198,170" fill={tema.azulSuave} stroke="none"/>
      <polygon points="296,57 240,151 364,151" fill={tema.azulSuave} stroke="none"/>

      {/* Big triangle sides — PQ highlighted in azul, rest dimmed */}
      <line x1="95"  y1="29"  x2="12"  y2="170" stroke={tema.azul}   strokeWidth="2.8"/>
      <line x1="12"  y1="170" x2="198" y2="170" stroke="rgba(240,236,227,0.35)" strokeWidth="1.8"/>
      <line x1="198" y1="170" x2="95"  y2="29"  stroke="rgba(240,236,227,0.35)" strokeWidth="1.8"/>

      {/* Small triangle sides — XY highlighted in azul, rest dimmed */}
      <line x1="296" y1="57"  x2="240" y2="151" stroke={tema.azul}   strokeWidth="2.8"/>
      <line x1="240" y1="151" x2="364" y2="151" stroke="rgba(240,236,227,0.35)" strokeWidth="1.8"/>
      <line x1="364" y1="151" x2="296" y2="57"  stroke="rgba(240,236,227,0.35)" strokeWidth="1.8"/>

      {/* Labels on PQ and XY */}
      <text x="40"  y="108" fill={tema.azul} fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">12</text>
      <text x="258" y="110" fill={tema.azul} fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">?</text>

      {/* Vertex labels */}
      <text x="95"  y="22"  fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">P</text>
      <text x="4"   y="179" fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">Q</text>
      <text x="202" y="179" fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">R</text>
      <text x="296" y="51"  fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">X</text>
      <text x="232" y="163" fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">Y</text>
      <text x="368" y="163" fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">Z</text>

      {/* k = 3/2 in center + ∼ */}
      <text x="222" y="87"  fill="rgba(240,236,227,0.28)" fontSize="22" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
      <text x="222" y="111" fill="rgba(240,236,227,0.55)" fontSize="17" fontWeight="700" fontFamily="'DM Sans',sans-serif" textAnchor="middle">k = 3/2</text>
      <text x="222" y="127" fill="rgba(240,236,227,0.22)" fontSize="9" fontFamily="'DM Sans',sans-serif" textAnchor="middle">PQ = 12</text>
    </svg>
  );
}

// ── Ejercicio SVGs (congruencia) ──────────────────────────────────────────────
// Shared geometry: Left △ABC A(86,14) B(8,122) C(178,122)
//                  Right △DEF D(264,14) E(194,122) F(354,122)  viewBox 0 0 370 145

function _svgH() {
  function mid([x1,y1],[x2,y2]){return[(x1+x2)/2,(y1+y2)/2];}
  function vsub([x1,y1],[x2,y2]){return[x1-x2,y1-y2];}
  function vadd([x1,y1],[x2,y2]){return[x1+x2,y1+y2];}
  function vscale([x,y],s){return[x*s,y*s];}
  function vunit([x,y]){const l=Math.hypot(x,y);return[x/l,y/l];}
  function vperp([x,y]){return[-y,x];}
  function fmt([x,y]){return`${x.toFixed(1)},${y.toFixed(1)}`;}
  return{mid,vsub,vadd,vscale,vunit,vperp,fmt};
}

function Ce1LllSVG({ tema }) {
  const A=[86,14],B=[8,122],C=[178,122],D=[264,14],E=[194,122],F=[354,122];
  const {mid,vsub,vadd,vscale,vunit,vperp,fmt}=_svgH();
  function tp(P1,P2){const m=mid(P1,P2),p=vperp(vunit(vsub(P2,P1)));return`M ${fmt(vadd(m,vscale(p,6)))} L ${fmt(vadd(m,vscale(p,-6)))}`;}
  function t2p(P1,P2){const m=mid(P1,P2),d=vunit(vsub(P2,P1)),p=vperp(d);return[-4,4].map(o=>{const c=vadd(m,vscale(d,o));return`M ${fmt(vadd(c,vscale(p,6)))} L ${fmt(vadd(c,vscale(p,-6)))}`;}).join(" ");}
  function t3p(P1,P2){const m=mid(P1,P2),d=vunit(vsub(P2,P1)),p=vperp(d);return[-7,0,7].map(o=>{const c=vadd(m,vscale(d,o));return`M ${fmt(vadd(c,vscale(p,6)))} L ${fmt(vadd(c,vscale(p,-6)))}`;}).join(" ");}
  const pts=ps=>ps.map(fmt).join(" ");
  return (
    <svg viewBox="0 0 370 145" width="100%" style={{display:"block",maxHeight:145}}>
      <polygon points={pts([A,B,C])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([D,E,F])} fill={tema.azulSuave} stroke="none"/>
      <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={tema.azul}   strokeWidth="2.2"/>
      <line x1={D[0]} y1={D[1]} x2={E[0]} y2={E[1]} stroke={tema.azul}   strokeWidth="2.2"/>
      <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={tema.verde}  strokeWidth="2.2"/>
      <line x1={E[0]} y1={E[1]} x2={F[0]} y2={F[1]} stroke={tema.verde}  strokeWidth="2.2"/>
      <line x1={C[0]} y1={C[1]} x2={A[0]} y2={A[1]} stroke={tema.acento} strokeWidth="2.2"/>
      <line x1={F[0]} y1={F[1]} x2={D[0]} y2={D[1]} stroke={tema.acento} strokeWidth="2.2"/>
      <path d={tp(A,B)}  stroke={tema.azul}   strokeWidth="1.8" fill="none"/>
      <path d={tp(D,E)}  stroke={tema.azul}   strokeWidth="1.8" fill="none"/>
      <path d={t2p(B,C)} stroke={tema.verde}  strokeWidth="1.8" fill="none"/>
      <path d={t2p(E,F)} stroke={tema.verde}  strokeWidth="1.8" fill="none"/>
      <path d={t3p(C,A)} stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d={t3p(F,D)} stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <text x="186" y="74" fill="rgba(240,236,227,0.28)" fontSize="28" fontFamily="Georgia,serif" textAnchor="middle">≅</text>
      <text x="86"  y="5"   fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="138" fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="178" y="138" fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="264" y="5"   fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="194" y="138" fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="360" y="129" fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>
    </svg>
  );
}

function Ce2CondMedSVG({ tema }) {
  const A=[86,14],B=[8,122],C=[178,122],D=[264,14],E=[194,122],F=[354,122];
  const pts=ps=>ps.map(([x,y])=>`${x},${y}`).join(" ");
  const dim="rgba(240,236,227,0.30)";
  return (
    <svg viewBox="0 0 370 145" width="100%" style={{display:"block",maxHeight:145}}>
      <polygon points={pts([A,B,C])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([D,E,F])} fill={tema.azulSuave} stroke="none"/>
      {/* Left △: BC highlighted (verde), others dim */}
      <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={dim} strokeWidth="1.8"/>
      <line x1={C[0]} y1={C[1]} x2={A[0]} y2={A[1]} stroke={dim} strokeWidth="1.8"/>
      <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={tema.verde} strokeWidth="2.8"/>
      {/* Right △: EF highlighted (verde), others dim */}
      <line x1={D[0]} y1={D[1]} x2={E[0]} y2={E[1]} stroke={dim} strokeWidth="1.8"/>
      <line x1={F[0]} y1={F[1]} x2={D[0]} y2={D[1]} stroke={dim} strokeWidth="1.8"/>
      <line x1={E[0]} y1={E[1]} x2={F[0]} y2={F[1]} stroke={tema.verde} strokeWidth="2.8"/>
      {/* Side labels – left */}
      <text x="28"  y="74"  fill={dim}        fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">7</text>
      <text x="93"  y="136" fill={tema.verde}  fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">10</text>
      <text x="148" y="64"  fill={dim}        fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">8</text>
      {/* Side labels – right: only EF=? */}
      <text x="274" y="136" fill={tema.acento} fontSize="14" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">?</text>
      {/* ≅ */}
      <text x="186" y="74" fill="rgba(240,236,227,0.28)" fontSize="28" fontFamily="Georgia,serif" textAnchor="middle">≅</text>
      {/* Vertex labels */}
      <text x="86"  y="5"   fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="138" fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="178" y="138" fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="264" y="5"   fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="194" y="138" fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="360" y="129" fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>
    </svg>
  );
}

function Ce3AlaSVG({ tema }) {
  const A=[86,14],B=[8,122],C=[178,122],D=[264,14],E=[194,122],F=[354,122];
  const {mid,vsub,vadd,vscale,vunit,vperp,fmt}=_svgH();
  function tp(P1,P2){const m=mid(P1,P2),p=vperp(vunit(vsub(P2,P1)));return`M ${fmt(vadd(m,vscale(p,6)))} L ${fmt(vadd(m,vscale(p,-6)))}`;}
  function arcPath(V,P1,P2,r){const s=vadd(V,vscale(vunit(vsub(P1,V)),r)),e=vadd(V,vscale(vunit(vsub(P2,V)),r));return`M ${fmt(s)} A ${r},${r} 0 0,1 ${fmt(e)}`;}
  const pts=ps=>ps.map(fmt).join(" ");
  const dim="rgba(240,236,227,0.30)";
  return (
    <svg viewBox="0 0 370 145" width="100%" style={{display:"block",maxHeight:145}}>
      <polygon points={pts([A,B,C])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([D,E,F])} fill={tema.azulSuave} stroke="none"/>
      <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={tema.acento} strokeWidth="2.4"/>
      <line x1={D[0]} y1={D[1]} x2={E[0]} y2={E[1]} stroke={tema.acento} strokeWidth="2.4"/>
      <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={dim} strokeWidth="1.8"/>
      <line x1={E[0]} y1={E[1]} x2={F[0]} y2={F[1]} stroke={dim} strokeWidth="1.8"/>
      <line x1={C[0]} y1={C[1]} x2={A[0]} y2={A[1]} stroke={dim} strokeWidth="1.8"/>
      <line x1={F[0]} y1={F[1]} x2={D[0]} y2={D[1]} stroke={dim} strokeWidth="1.8"/>
      {/* Tick on AB and DE */}
      <path d={tp(A,B)} stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d={tp(D,E)} stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      {/* Angle arcs at A and D (60°) */}
      <path d={arcPath(A,C,B,22)} stroke={tema.verde} strokeWidth="1.6" fill="none"/>
      <path d={arcPath(D,F,E,22)} stroke={tema.verde} strokeWidth="1.6" fill="none"/>
      {/* Angle arcs at B and E (50°) */}
      <path d={arcPath(B,A,C,22)} stroke={tema.azul} strokeWidth="1.6" fill="none"/>
      <path d={arcPath(E,D,F,22)} stroke={tema.azul} strokeWidth="1.6" fill="none"/>
      {/* Angle labels */}
      <text x="86"  y="50"  fill={tema.verde} fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">60°</text>
      <text x="264" y="50"  fill={tema.verde} fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">60°</text>
      <text x="36"  y="110" fill={tema.azul}  fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="600">50°</text>
      <text x="214" y="110" fill={tema.azul}  fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="600">50°</text>
      {/* AB = DE = 8 labels */}
      <text x="29"  y="62"  fill={tema.acento} fontSize="11" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">8</text>
      <text x="215" y="62"  fill={tema.acento} fontSize="11" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">8</text>
      {/* Vertex labels */}
      <text x="86"  y="5"   fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="138" fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="178" y="138" fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="264" y="5"   fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="194" y="138" fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="360" y="129" fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>
    </svg>
  );
}

// ─── CriterioDetalle SVGs: Cuadriláteros ─────────────────────────────────────
function RectanguloDetalleSVG({ tema }) {
  return (
    <svg viewBox="0 0 430 175" width="100%" style={{ display: "block", maxHeight: 175 }}>
      <polygon points="40,22 370,22 370,148 40,148" fill={tema.azulSuave} stroke="none"/>
      <polygon points="40,22 370,22 370,148 40,148" fill="none" stroke={tema.azul} strokeWidth="2.2" opacity="0.9"/>
      <path d="M 52,22 L 52,34 L 40,34" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d="M 358,22 L 358,34 L 370,34" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d="M 358,148 L 358,136 L 370,136" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d="M 52,148 L 52,136 L 40,136" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <line x1="40" y1="22" x2="370" y2="148" stroke={tema.azul} strokeWidth="1.5" strokeDasharray="7,5" opacity="0.45"/>
      <path d="M 202,18 L 202,26 M 208,18 L 208,26" stroke={tema.azul} strokeWidth="1.5" fill="none"/>
      <path d="M 202,144 L 202,152 M 208,144 L 208,152" stroke={tema.azul} strokeWidth="1.5" fill="none"/>
      <path d="M 36,83 L 44,83" stroke={tema.azul} strokeWidth="1.5" fill="none"/>
      <path d="M 366,83 L 374,83" stroke={tema.azul} strokeWidth="1.5" fill="none"/>
      <text x="205" y="167" fill={tema.azul} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">b</text>
      <text x="385" y="88" fill={tema.azul} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic">h</text>
      <text x="218" y="77" fill={tema.azul} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.55">d</text>
      <text x="35" y="17" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">A</text>
      <text x="373" y="17" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="373" y="163" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">C</text>
      <text x="35" y="163" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">D</text>
    </svg>
  );
}
function RomboDetalleSVG({ tema }) {
  return (
    <svg viewBox="0 0 430 185" width="100%" style={{ display: "block", maxHeight: 185 }}>
      <polygon points="210,15 390,90 210,165 30,90" fill={tema.azulSuave} stroke="none"/>
      <line x1="210" y1="15" x2="390" y2="90" stroke={tema.azul} strokeWidth="2.2" opacity="0.9"/>
      <line x1="390" y1="90" x2="210" y2="165" stroke={tema.azul} strokeWidth="2.2" opacity="0.9"/>
      <line x1="210" y1="165" x2="30" y2="90" stroke={tema.azul} strokeWidth="2.2" opacity="0.9"/>
      <line x1="30" y1="90" x2="210" y2="15" stroke={tema.azul} strokeWidth="2.2" opacity="0.9"/>
      <line x1="210" y1="15" x2="210" y2="165" stroke={tema.verde} strokeWidth="1.8" strokeDasharray="7,5" opacity="0.7"/>
      <line x1="30" y1="90" x2="390" y2="90" stroke={tema.acento} strokeWidth="1.8" strokeDasharray="7,5" opacity="0.7"/>
      <path d="M 210,90 L 210,80 L 220,80" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" fill="none"/>
      <path d="M 293,49 L 300,56" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d="M 293,124 L 300,131" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d="M 120,124 L 127,131" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d="M 120,49 L 127,56" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <text x="195" y="10" fill={tema.muted} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">A</text>
      <text x="394" y="94" fill={tema.muted} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="210" y="180" fill={tema.muted} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="26" y="94" fill={tema.muted} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">D</text>
      <text x="217" y="52" fill={tema.verde} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">d₁</text>
      <text x="306" y="87" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">d₂</text>
      <text x="302" y="50" fill={tema.azul} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">l</text>
    </svg>
  );
}
function CuadradoDetalleSVG({ tema }) {
  // Cuadrado 140×140 centrado en viewBox 430×185 → proporciones exactamente 1:1
  // A=top-left(145,23), B=top-right(285,23), C=bottom-right(285,163), D=bottom-left(145,163)
  return (
    <svg viewBox="0 0 430 185" width="100%" style={{ display: "block", maxHeight: 185 }}>
      <polygon points="145,23 285,23 285,163 145,163" fill={tema.azulSuave} stroke="none"/>
      <polygon points="145,23 285,23 285,163 145,163" fill="none" stroke={tema.azul} strokeWidth="2.2" opacity="0.9"/>
      {/* Marcadores de ángulo recto */}
      <path d="M 157,23 L 157,35 L 145,35" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d="M 273,23 L 273,35 L 285,35" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d="M 273,163 L 273,151 L 285,151" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d="M 157,163 L 157,151 L 145,151" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      {/* Diagonal A→C */}
      <line x1="145" y1="23" x2="285" y2="163" stroke={tema.azul} strokeWidth="1.5" strokeDasharray="7,5" opacity="0.4"/>
      {/* Marcas de lado igual */}
      <path d="M 215,19 L 215,27" stroke={tema.azul} strokeWidth="1.8" fill="none"/>
      <path d="M 215,159 L 215,167" stroke={tema.azul} strokeWidth="1.8" fill="none"/>
      <path d="M 141,93 L 149,93" stroke={tema.azul} strokeWidth="1.8" fill="none"/>
      <path d="M 281,93 L 289,93" stroke={tema.azul} strokeWidth="1.8" fill="none"/>
      {/* Etiquetas */}
      <text x="215" y="178" fill={tema.azul} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">l</text>
      <text x="300" y="97" fill={tema.azul} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic">l</text>
      <text x="221" y="83" fill={tema.azul} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.5">d</text>
      <text x="141" y="20" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">A</text>
      <text x="288" y="20" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="288" y="176" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">C</text>
      <text x="141" y="176" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">D</text>
    </svg>
  );
}
function TrapIsoDetalleSVG({ tema }) {
  return (
    <svg viewBox="0 0 430 185" width="100%" style={{ display: "block", maxHeight: 185 }}>
      <polygon points="25,155 385,155 310,25 100,25" fill={tema.azulSuave} stroke="none"/>
      <line x1="25" y1="155" x2="385" y2="155" stroke={tema.azul} strokeWidth="2.5" opacity="0.9"/>
      <line x1="100" y1="25" x2="310" y2="25" stroke={tema.verde} strokeWidth="2.5" opacity="0.9"/>
      <line x1="25" y1="155" x2="100" y2="25" stroke={tema.acento} strokeWidth="2.2" opacity="0.9"/>
      <line x1="385" y1="155" x2="310" y2="25" stroke={tema.acento} strokeWidth="2.2" opacity="0.9"/>
      <path d="M 56,91 L 66,99" stroke={tema.acento} strokeWidth="2" fill="none"/>
      <path d="M 342,91 L 352,99" stroke={tema.acento} strokeWidth="2" fill="none"/>
      <line x1="100" y1="25" x2="100" y2="155" stroke={tema.verde} strokeWidth="1.5" strokeDasharray="6,4" opacity="0.6"/>
      <path d="M 100,143 L 110,143 L 110,155" stroke={tema.verde} strokeWidth="1.5" fill="none" opacity="0.6"/>
      <text x="205" y="175" fill={tema.azul} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">B</text>
      <text x="205" y="18" fill={tema.verde} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">b</text>
      <text x="86" y="92" fill={tema.verde} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">h</text>
      <text x="49" y="84" fill={tema.acento} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">c</text>
      <text x="364" y="84" fill={tema.acento} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic">c</text>
      <text x="22" y="168" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">A</text>
      <text x="388" y="168" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="313" y="18" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">C</text>
      <text x="97" y="18" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">D</text>
    </svg>
  );
}
function TrapRectDetalleSVG({ tema }) {
  return (
    <svg viewBox="0 0 430 185" width="100%" style={{ display: "block", maxHeight: 185 }}>
      <polygon points="50,155 370,155 370,25 165,25" fill={tema.azulSuave} stroke="none"/>
      <line x1="50" y1="155" x2="370" y2="155" stroke={tema.azul} strokeWidth="2.5" opacity="0.9"/>
      <line x1="165" y1="25" x2="370" y2="25" stroke={tema.verde} strokeWidth="2.5" opacity="0.9"/>
      <line x1="50" y1="155" x2="165" y2="25" stroke={tema.acento} strokeWidth="2.2" opacity="0.9"/>
      <line x1="370" y1="155" x2="370" y2="25" stroke={tema.azul} strokeWidth="2.2" opacity="0.9"/>
      <path d="M 358,155 L 358,143 L 370,143" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d="M 358,25 L 358,37 L 370,37" stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <text x="210" y="175" fill={tema.azul} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">B</text>
      <text x="267" y="18" fill={tema.verde} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">b</text>
      <text x="384" y="92" fill={tema.azul} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic">h = c</text>
      <text x="94" y="84" fill={tema.acento} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">d</text>
      <text x="47" y="168" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">A</text>
      <text x="373" y="168" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="373" y="20" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">C</text>
      <text x="162" y="18" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">D</text>
    </svg>
  );
}

function SlideCriterioDetalle({ slide, tema, resaltadoIdx, onResaltar }) {
  const compact = !!slide.svgDiagram;
  const winW = useWindowWidth();
  const narrow = winW < 500;
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

      {slide.svgDiagram === "aa-detalle"               && <CriterioAADetalleSVG   tema={tema} />}
      {slide.svgDiagram === "lll-detalle"              && <CriterioLLLDetalleSVG  tema={tema} />}
      {slide.svgDiagram === "lal-detalle"              && <CriterioLALDetalleSVG  tema={tema} />}
      {slide.svgDiagram === "lll-cong-detalle"         && <CongLLLDetalleSVG      tema={tema} />}
      {slide.svgDiagram === "lal-cong-detalle"         && <CongLALDetalleSVG      tema={tema} />}
      {slide.svgDiagram === "ala-cong-detalle"         && <CongALADetalleSVG      tema={tema} />}
      {slide.svgDiagram === "laa-cong-detalle"         && <CongLAADetalleSVG      tema={tema} />}
      {slide.svgDiagram === "rectangulo-detalle"       && <RectanguloDetalleSVG   tema={tema} />}
      {slide.svgDiagram === "rombo-detalle"            && <RomboDetalleSVG        tema={tema} />}
      {slide.svgDiagram === "cuadrado-detalle"         && <CuadradoDetalleSVG     tema={tema} />}
      {slide.svgDiagram === "trapecio-isosceles-detalle" && <TrapIsoDetalleSVG    tema={tema} />}
      {slide.svgDiagram === "trapecio-rect-detalle"    && <TrapRectDetalleSVG     tema={tema} />}
      {slide.svgDiagram === "angulo-central"           && <AnguloCentralSVG       tema={tema} />}
      {slide.svgDiagram === "sector-circular"          && <SectorCircularSVG      tema={tema} />}
      {slide.svgDiagram === "segmento-circular"        && <SegmentoCircularSVG    tema={tema} />}
      {slide.svgDiagram === "tangente-exterior"        && <TangenteExteriorSVG    tema={tema} />}
      {slide.svgDiagram === "angulo-inscrito"          && <AnguloInscritoSVG      tema={tema} />}
      {slide.svgDiagram === "escala-probabilidad"      && <EscalaProbabilidadSVG  tema={tema} />}
      {slide.svgDiagram === "arbol-multiplicativo"     && <ProbArbolMultiplicativo tema={tema} />}
      {slide.svgDiagram === "complemento"              && <ComplementoSVG         tema={tema} />}
      {slide.svgDiagram === "regla-suma"               && <ReglaSumaSVG           tema={tema} />}
      {slide.svgDiagram === "arbol-monedas"            && <ProbArbolMonedas       tema={tema} />}
      {slide.svgDiagram === "arbol-urna"               && <ProbArbolUrna          tema={tema} />}
      {slide.svgDiagram === "media-detalle"            && <MediaDetalleSVG        tema={tema} />}
      {slide.svgDiagram === "mediana-detalle"          && <MedianaDetalleSVG      tema={tema} />}
      {slide.svgDiagram === "moda-detalle"             && <ModaDetalleSVG         tema={tema} />}
      {slide.svgDiagram === "desviacion-detalle"       && <DesviacionDetalleSVG   tema={tema} />}
      {slide.svgDiagram === "cin-graf-xt"              && <CinGrafXtSVG           tema={tema} />}
      {slide.svgDiagram === "cin-graf-vt"              && <CinGrafVtSVG           tema={tema} />}
      {slide.svgDiagram === "cin-caida-libre"          && <CinCaidaLibreSVG       tema={tema} />}
      {slide.svgDiagram === "cin-tiro-parabolico"      && <CinTiroParabolicoSVG   tema={tema} />}
      {slide.svgDiagram === "din-segunda-ley"          && <DinSegundaLeySVG       tema={tema} />}
      {slide.svgDiagram === "din-tercera-ley"          && <DinTerceraLeySVG       tema={tema} />}
      {slide.svgDiagram === "din-hooke"                && <DinHookeSVG            tema={tema} />}
      {slide.svgDiagram === "ene-energias"             && <EneEnergiasSVG         tema={tema} />}
      {slide.svgDiagram === "ene-conservacion"         && <EneConservacionSVG     tema={tema} />}
      {slide.svgDiagram === "ene-momento"              && <EneMomentoSVG          tema={tema} />}
      {slide.svgDiagram === "ter-escalas"              && <TerEscalasSVG          tema={tema} />}
      {slide.svgDiagram === "ter-dilatacion"           && <TerDilatacionSVG       tema={tema} />}
      {slide.svgDiagram === "ter-gas"                  && <TerGasSVG              tema={tema} />}
      {slide.svgDiagram === "ond-reflexion-refraccion" && <OndReflexRefracSVG     tema={tema} />}
      {slide.svgDiagram === "ond-lente"                && <OndLenteSVG            tema={tema} />}
      {slide.svgDiagram === "ele-coulomb"              && <EleCoulombSVG          tema={tema} />}
      {slide.svgDiagram === "ele-circuito"             && <EleCircuitoSVG         tema={tema} />}
      {slide.svgDiagram === "ele-serie-paralelo"       && <EleSerieParaleloSVG    tema={tema} />}
      {slide.svgDiagram === "flu-presion"              && <FluPresionSVG          tema={tema} />}
      {slide.svgDiagram === "flu-pascal"               && <FluPascalSVG           tema={tema} />}
      {slide.svgDiagram === "flu-arquimedes"           && <FluArquimedesSVG       tema={tema} />}
      {slide.svgDiagram === "flu-continuidad"          && <FluContinuidadSVG      tema={tema} />}

      <div
        onClick={() => onResaltar && onResaltar(1)}
        style={{
          background: tema.azulSuave,
          border: `1px solid ${resaltadoIdx === 1 ? tema.azul : tema.azulBorde}`,
          borderRadius: 10,
          padding: compact ? "12px 20px" : "18px 24px",
          boxShadow: resaltadoIdx === 1 ? `0 0 0 2px ${tema.azulBorde}, 0 0 16px ${tema.azulBorde}` : "none",
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

function EjCongLLLSVG({ tema }) {
  return (
    <svg viewBox="0 0 330 138" width="100%" style={{ display: "block", maxHeight: 160 }}>
      <polygon points="70,15 10,112 155,112"  fill={tema.azulSuave} stroke="none"/>
      <polygon points="230,15 170,112 315,112" fill={tema.azulSuave} stroke="none"/>
      <line x1="70"  y1="15"  x2="10"  y2="112" stroke={tema.azul}   strokeWidth="2.5"/>
      <line x1="230" y1="15"  x2="170" y2="112" stroke={tema.azul}   strokeWidth="2.5"/>
      <line x1="10"  y1="112" x2="155" y2="112" stroke={tema.verde}  strokeWidth="2.5"/>
      <line x1="170" y1="112" x2="315" y2="112" stroke={tema.verde}  strokeWidth="2.5"/>
      <line x1="155" y1="112" x2="70"  y2="15"  stroke={tema.acento} strokeWidth="2.5"/>
      <line x1="315" y1="112" x2="230" y2="15"  stroke={tema.acento} strokeWidth="2.5"/>
      <path d="M 35,67 L 45,60"   stroke={tema.azul}   strokeWidth="2" fill="none"/>
      <path d="M 195,67 L 205,60" stroke={tema.azul}   strokeWidth="2" fill="none"/>
      <path d="M 78,106 L 78,118 M 87,106 L 87,118"    stroke={tema.verde}  strokeWidth="2" fill="none"/>
      <path d="M 238,106 L 238,118 M 247,106 L 247,118" stroke={tema.verde}  strokeWidth="2" fill="none"/>
      <path d="M 103,62 L 112,54 M 108,68 L 117,60 M 113,73 L 122,65"  stroke={tema.acento} strokeWidth="2" fill="none"/>
      <path d="M 263,62 L 272,54 M 268,68 L 277,60 M 273,73 L 282,65"  stroke={tema.acento} strokeWidth="2" fill="none"/>
      <text x="30"  y="60"  fill={tema.azul}   fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">5</text>
      <text x="82"  y="127" fill={tema.verde}  fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">6</text>
      <text x="128" y="57"  fill={tema.acento} fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="700">7</text>
      <text x="190" y="60"  fill={tema.azul}   fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">5</text>
      <text x="242" y="127" fill={tema.verde}  fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">6</text>
      <text x="288" y="57"  fill={tema.acento} fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="700">7</text>
      <text x="70"  y="8"   fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="3"   y="128" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="155" y="128" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="230" y="8"   fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="170" y="128" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="318" y="120" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">F</text>
      <text x="163" y="70" fill="rgba(240,236,227,0.45)" fontSize="22" fontFamily="Georgia,serif" textAnchor="middle">≅</text>
    </svg>
  );
}

function EjCongLALSVG({ tema }) {
  return (
    <svg viewBox="0 0 330 138" width="100%" style={{ display: "block", maxHeight: 160 }}>
      <polygon points="70,15 10,112 155,112"  fill={tema.azulSuave} stroke="none"/>
      <polygon points="230,15 170,112 315,112" fill={tema.azulSuave} stroke="none"/>
      <line x1="10"  y1="112" x2="155" y2="112" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
      <line x1="170" y1="112" x2="315" y2="112" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
      <line x1="70"  y1="15"  x2="10"  y2="112" stroke={tema.azul}   strokeWidth="2.5"/>
      <line x1="230" y1="15"  x2="170" y2="112" stroke={tema.azul}   strokeWidth="2.5"/>
      <line x1="155" y1="112" x2="70"  y2="15"  stroke={tema.acento} strokeWidth="2.5"/>
      <line x1="315" y1="112" x2="230" y2="15"  stroke={tema.acento} strokeWidth="2.5"/>
      <path d="M 82,29 A 18,18 0 0,1 61,30"   stroke={tema.verde} strokeWidth="2.2" fill="none"/>
      <path d="M 242,29 A 18,18 0 0,1 221,30"  stroke={tema.verde} strokeWidth="2.2" fill="none"/>
      <path d="M 35,67 L 45,60"   stroke={tema.azul}   strokeWidth="2" fill="none"/>
      <path d="M 195,67 L 205,60" stroke={tema.azul}   strokeWidth="2" fill="none"/>
      <path d="M 103,62 L 112,54 M 108,68 L 117,60"  stroke={tema.acento} strokeWidth="2" fill="none"/>
      <path d="M 263,62 L 272,54 M 268,68 L 277,60"  stroke={tema.acento} strokeWidth="2" fill="none"/>
      <text x="30"  y="60"  fill={tema.azul}   fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">4</text>
      <text x="128" y="57"  fill={tema.acento} fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="700">6</text>
      <text x="190" y="60"  fill={tema.azul}   fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">4</text>
      <text x="288" y="57"  fill={tema.acento} fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="700">6</text>
      <text x="76"  y="48"  fill={tema.verde} fontSize="11" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">60°</text>
      <text x="236" y="48"  fill={tema.verde} fontSize="11" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">60°</text>
      <text x="70"  y="8"   fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="3"   y="128" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="155" y="128" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="230" y="8"   fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="170" y="128" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="318" y="120" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">F</text>
      <text x="163" y="70" fill="rgba(240,236,227,0.45)" fontSize="22" fontFamily="Georgia,serif" textAnchor="middle">≅</text>
    </svg>
  );
}

function EjCongALASVG({ tema }) {
  return (
    <svg viewBox="0 0 330 138" width="100%" style={{ display: "block", maxHeight: 160 }}>
      <polygon points="70,15 10,112 155,112"  fill={tema.azulSuave} stroke="none"/>
      <polygon points="230,15 170,112 315,112" fill={tema.azulSuave} stroke="none"/>
      <line x1="10"  y1="112" x2="155" y2="112" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
      <line x1="170" y1="112" x2="315" y2="112" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
      <line x1="155" y1="112" x2="70"  y2="15"  stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
      <line x1="315" y1="112" x2="230" y2="15"  stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
      <line x1="70"  y1="15"  x2="10"  y2="112" stroke={tema.azul} strokeWidth="2.5"/>
      <line x1="230" y1="15"  x2="170" y2="112" stroke={tema.azul} strokeWidth="2.5"/>
      <path d="M 82,29 A 18,18 0 0,1 61,30"   stroke={tema.verde}  strokeWidth="2.2" fill="none"/>
      <path d="M 242,29 A 18,18 0 0,1 221,30"  stroke={tema.verde}  strokeWidth="2.2" fill="none"/>
      <path d="M 17,100 A 14,14 0 0,1 24,112"  stroke={tema.acento} strokeWidth="2.2" fill="none"/>
      <path d="M 177,100 A 14,14 0 0,1 184,112" stroke={tema.acento} strokeWidth="2.2" fill="none"/>
      <path d="M 35,67 L 45,60"   stroke={tema.azul} strokeWidth="2" fill="none"/>
      <path d="M 195,67 L 205,60" stroke={tema.azul} strokeWidth="2" fill="none"/>
      <text x="30"  y="60"  fill={tema.azul} fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">8</text>
      <text x="190" y="60"  fill={tema.azul} fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">8</text>
      <text x="76"  y="48"  fill={tema.verde}  fontSize="11" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">45°</text>
      <text x="236" y="48"  fill={tema.verde}  fontSize="11" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">45°</text>
      <text x="29"  y="99"  fill={tema.acento} fontSize="11" fontFamily="'DM Sans',sans-serif" fontWeight="600">75°</text>
      <text x="189" y="99"  fill={tema.acento} fontSize="11" fontFamily="'DM Sans',sans-serif" fontWeight="600">75°</text>
      <text x="70"  y="8"   fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="3"   y="128" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="155" y="128" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="230" y="8"   fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="170" y="128" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="318" y="120" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">F</text>
      <text x="163" y="70" fill="rgba(240,236,227,0.45)" fontSize="22" fontFamily="Georgia,serif" textAnchor="middle">≅</text>
    </svg>
  );
}

function EjCongLAASVG({ tema }) {
  return (
    <svg viewBox="0 0 330 138" width="100%" style={{ display: "block", maxHeight: 160 }}>
      <polygon points="70,15 10,112 155,112"  fill={tema.azulSuave} stroke="none"/>
      <polygon points="230,15 170,112 315,112" fill={tema.azulSuave} stroke="none"/>
      <line x1="70"  y1="15"  x2="10"  y2="112" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
      <line x1="230" y1="15"  x2="170" y2="112" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
      <line x1="155" y1="112" x2="70"  y2="15"  stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
      <line x1="315" y1="112" x2="230" y2="15"  stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
      <line x1="10"  y1="112" x2="155" y2="112" stroke={tema.azul} strokeWidth="2.5"/>
      <line x1="170" y1="112" x2="315" y2="112" stroke={tema.azul} strokeWidth="2.5"/>
      <path d="M 82,29 A 18,18 0 0,1 61,30"   stroke={tema.verde}  strokeWidth="2.2" fill="none"/>
      <path d="M 242,29 A 18,18 0 0,1 221,30"  stroke={tema.verde}  strokeWidth="2.2" fill="none"/>
      <path d="M 17,100 A 14,14 0 0,1 24,112"  stroke={tema.acento} strokeWidth="2.2" fill="none"/>
      <path d="M 177,100 A 14,14 0 0,1 184,112" stroke={tema.acento} strokeWidth="2.2" fill="none"/>
      <path d="M 78,106 L 78,118"   stroke={tema.azul} strokeWidth="2" fill="none"/>
      <path d="M 238,106 L 238,118" stroke={tema.azul} strokeWidth="2" fill="none"/>
      <text x="82"  y="127" fill={tema.azul} fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">5</text>
      <text x="242" y="127" fill={tema.azul} fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">5</text>
      <text x="76"  y="48"  fill={tema.verde}  fontSize="11" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">50°</text>
      <text x="236" y="48"  fill={tema.verde}  fontSize="11" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">50°</text>
      <text x="29"  y="99"  fill={tema.acento} fontSize="11" fontFamily="'DM Sans',sans-serif" fontWeight="600">70°</text>
      <text x="189" y="99"  fill={tema.acento} fontSize="11" fontFamily="'DM Sans',sans-serif" fontWeight="600">70°</text>
      <text x="70"  y="8"   fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="3"   y="128" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="155" y="128" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="230" y="8"   fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="170" y="128" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="318" y="120" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">F</text>
      <text x="163" y="70" fill="rgba(240,236,227,0.45)" fontSize="22" fontFamily="Georgia,serif" textAnchor="middle">≅</text>
    </svg>
  );
}

// ── Semejanza example SVGs ────────────────────────────────────────────────────

function SeAaEj1SVG({ tema }) {
  const A=[86,14],B=[8,122],C=[178,122],D=[264,14],E=[194,122],F=[354,122];
  const {vadd,vsub,vscale,vunit,fmt}=_svgH();
  function arcPath(V,P1,P2,r){const s=vadd(V,vscale(vunit(vsub(P1,V)),r)),e=vadd(V,vscale(vunit(vsub(P2,V)),r));return`M ${fmt(s)} A ${r},${r} 0 0,1 ${fmt(e)}`;}
  const pts=ps=>ps.map(([x,y])=>`${x},${y}`).join(" ");
  const st="rgba(240,236,227,0.72)";
  return (
    <svg viewBox="0 0 370 160" width="100%" style={{display:"block",maxHeight:160}}>
      <g transform="translate(0,15)">
      <polygon points={pts([A,B,C])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([D,E,F])} fill={tema.azulSuave} stroke="none"/>
      <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={st} strokeWidth="2"/>
      <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={st} strokeWidth="2"/>
      <line x1={C[0]} y1={C[1]} x2={A[0]} y2={A[1]} stroke={st} strokeWidth="2"/>
      <line x1={D[0]} y1={D[1]} x2={E[0]} y2={E[1]} stroke={st} strokeWidth="2"/>
      <line x1={E[0]} y1={E[1]} x2={F[0]} y2={F[1]} stroke={st} strokeWidth="2"/>
      <line x1={F[0]} y1={F[1]} x2={D[0]} y2={D[1]} stroke={st} strokeWidth="2"/>
      <path d={arcPath(A,C,B,22)} stroke={tema.verde} strokeWidth="1.8" fill="none"/>
      <path d={arcPath(D,F,E,22)} stroke={tema.verde} strokeWidth="1.8" fill="none"/>
      <path d={arcPath(B,A,C,22)} stroke={tema.azul}  strokeWidth="1.8" fill="none"/>
      <path d={arcPath(E,D,F,22)} stroke={tema.azul}  strokeWidth="1.8" fill="none"/>
      <text x="86"  y="48"  fill={tema.verde} fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">70°</text>
      <text x="264" y="48"  fill={tema.verde} fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">70°</text>
      <text x="36"  y="110" fill={tema.azul}  fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="600">60°</text>
      <text x="214" y="110" fill={tema.azul}  fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="600">60°</text>
      <text x="186" y="74"  fill="rgba(240,236,227,0.30)" fontSize="26" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
      <text x="86"  y="5"   fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="178" y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="264" y="5"   fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="194" y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="360" y="129" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>
      </g>
    </svg>
  );
}

function SeAaEj2SVG({ tema }) {
  // Big △ABC AB=6,BC=9; Small △DEF DE=4,EF=6 (k=3/2 — same angles, different sizes)
  const A=[86,14],B=[8,122],C=[178,122];
  const D=[274,50],E=[218,122],F=[330,122];
  const pts=ps=>ps.map(([x,y])=>`${x},${y}`).join(" ");
  const dim="rgba(240,236,227,0.28)";
  return (
    <svg viewBox="0 0 370 145" width="100%" style={{display:"block",maxHeight:145}}>
      <polygon points={pts([A,B,C])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([D,E,F])} fill={tema.azulSuave} stroke="none"/>
      <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={tema.azul}  strokeWidth="2.4"/>
      <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={tema.verde} strokeWidth="2.4"/>
      <line x1={C[0]} y1={C[1]} x2={A[0]} y2={A[1]} stroke={dim}        strokeWidth="1.5"/>
      <line x1={D[0]} y1={D[1]} x2={E[0]} y2={E[1]} stroke={tema.azul}  strokeWidth="2.4"/>
      <line x1={E[0]} y1={E[1]} x2={F[0]} y2={F[1]} stroke={tema.verde} strokeWidth="2.4"/>
      <line x1={F[0]} y1={F[1]} x2={D[0]} y2={D[1]} stroke={dim}        strokeWidth="1.5"/>
      <text x="29"  y="62"  fill={tema.azul}  fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">6</text>
      <text x="93"  y="136" fill={tema.verde} fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">9</text>
      <text x="214" y="82"  fill={tema.azul}  fontSize="11" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">4</text>
      <text x="194" y="96"  fill="rgba(240,236,227,0.50)" fontSize="13" fontWeight="700" fontFamily="'DM Sans',sans-serif" textAnchor="middle">k=3/2</text>
      <text x="186" y="78"  fill="rgba(240,236,227,0.28)" fontSize="22" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
      <text x="86"  y="5"   fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="178" y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="274" y="43"  fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="210" y="134" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">E</text>
      <text x="334" y="134" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>
    </svg>
  );
}

function SeLllEj1SVG({ tema }) {
  // Sides AB=4(azul),BC=8(verde),CA=6(acento) | DE=6,EF=12,FD=9 — k=2/3  (triángulos ampliados)
  const A=[85,8],B=[3,148],C=[185,148],D=[305,8],E=[215,148],F=[397,148];
  const {mid,vsub,vadd,vscale,vunit,vperp,fmt}=_svgH();
  function tp(P1,P2){const m=mid(P1,P2),p=vperp(vunit(vsub(P2,P1)));return`M ${fmt(vadd(m,vscale(p,6)))} L ${fmt(vadd(m,vscale(p,-6)))}`;}
  function t2p(P1,P2){const m=mid(P1,P2),d=vunit(vsub(P2,P1)),p=vperp(d);return[-4,4].map(o=>{const c=vadd(m,vscale(d,o));return`M ${fmt(vadd(c,vscale(p,6)))} L ${fmt(vadd(c,vscale(p,-6)))}`;}).join(" ");}
  function t3p(P1,P2){const m=mid(P1,P2),d=vunit(vsub(P2,P1)),p=vperp(d);return[-7,0,7].map(o=>{const c=vadd(m,vscale(d,o));return`M ${fmt(vadd(c,vscale(p,6)))} L ${fmt(vadd(c,vscale(p,-6)))}`;}).join(" ");}
  const pts=ps=>ps.map(fmt).join(" ");
  return (
    <svg viewBox="0 0 400 183" width="100%" style={{display:"block",maxHeight:183}}>
      <g transform="translate(0,20)">
      <polygon points={pts([A,B,C])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([D,E,F])} fill={tema.azulSuave} stroke="none"/>
      <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={tema.azul}   strokeWidth="2.2"/>
      <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={tema.verde}  strokeWidth="2.2"/>
      <line x1={C[0]} y1={C[1]} x2={A[0]} y2={A[1]} stroke={tema.acento} strokeWidth="2.2"/>
      <line x1={D[0]} y1={D[1]} x2={E[0]} y2={E[1]} stroke={tema.azul}   strokeWidth="2.2"/>
      <line x1={E[0]} y1={E[1]} x2={F[0]} y2={F[1]} stroke={tema.verde}  strokeWidth="2.2"/>
      <line x1={F[0]} y1={F[1]} x2={D[0]} y2={D[1]} stroke={tema.acento} strokeWidth="2.2"/>
      <path d={tp(A,B)}  stroke={tema.azul}   strokeWidth="1.8" fill="none"/>
      <path d={tp(D,E)}  stroke={tema.azul}   strokeWidth="1.8" fill="none"/>
      <path d={t2p(B,C)} stroke={tema.verde}  strokeWidth="1.8" fill="none"/>
      <path d={t2p(E,F)} stroke={tema.verde}  strokeWidth="1.8" fill="none"/>
      <path d={t3p(C,A)} stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d={t3p(F,D)} stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <text x="22"  y="74"  fill={tema.azul}   fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">4</text>
      <text x="94"  y="155" fill={tema.verde}  fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">8</text>
      <text x="153" y="68"  fill={tema.acento} fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700">6</text>
      <text x="240" y="74"  fill={tema.azul}   fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">6</text>
      <text x="306" y="155" fill={tema.verde}  fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">12</text>
      <text x="363" y="68"  fill={tema.acento} fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700">9</text>
      <text x="200" y="78"  fill="rgba(240,236,227,0.30)" fontSize="22" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
      <text x="85"  y="3"   fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="0"   y="155" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="186" y="155" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="305" y="3"   fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="214" y="155" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="398" y="155" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>
      </g>
    </svg>
  );
}

function SeLllS1SVG({ tema }) {
  // Ejercicio 1 LLL: AB=3(azul),BC=5(verde),CA=7(acento) | DE=6,EF=10,FD=14 — k=2
  const A=[86,14],B=[8,122],C=[178,122],D=[264,14],E=[194,122],F=[354,122];
  const {mid,vsub,vadd,vscale,vunit,vperp,fmt}=_svgH();
  function tp(P1,P2){const m=mid(P1,P2),p=vperp(vunit(vsub(P2,P1)));return`M ${fmt(vadd(m,vscale(p,6)))} L ${fmt(vadd(m,vscale(p,-6)))}`;}
  function t2p(P1,P2){const m=mid(P1,P2),d=vunit(vsub(P2,P1)),p=vperp(d);return[-4,4].map(o=>{const c=vadd(m,vscale(d,o));return`M ${fmt(vadd(c,vscale(p,6)))} L ${fmt(vadd(c,vscale(p,-6)))}`;}).join(" ");}
  function t3p(P1,P2){const m=mid(P1,P2),d=vunit(vsub(P2,P1)),p=vperp(d);return[-7,0,7].map(o=>{const c=vadd(m,vscale(d,o));return`M ${fmt(vadd(c,vscale(p,6)))} L ${fmt(vadd(c,vscale(p,-6)))}`;}).join(" ");}
  const pts=ps=>ps.map(fmt).join(" ");
  return (
    <svg viewBox="0 0 370 160" width="100%" style={{display:"block",maxHeight:160}}>
      <g transform="translate(0,15)">
      <polygon points={pts([A,B,C])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([D,E,F])} fill={tema.azulSuave} stroke="none"/>
      <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={tema.azul}   strokeWidth="2.2"/>
      <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={tema.verde}  strokeWidth="2.2"/>
      <line x1={C[0]} y1={C[1]} x2={A[0]} y2={A[1]} stroke={tema.acento} strokeWidth="2.2"/>
      <line x1={D[0]} y1={D[1]} x2={E[0]} y2={E[1]} stroke={tema.azul}   strokeWidth="2.2"/>
      <line x1={E[0]} y1={E[1]} x2={F[0]} y2={F[1]} stroke={tema.verde}  strokeWidth="2.2"/>
      <line x1={F[0]} y1={F[1]} x2={D[0]} y2={D[1]} stroke={tema.acento} strokeWidth="2.2"/>
      <path d={tp(A,B)}  stroke={tema.azul}   strokeWidth="1.8" fill="none"/>
      <path d={tp(D,E)}  stroke={tema.azul}   strokeWidth="1.8" fill="none"/>
      <path d={t2p(B,C)} stroke={tema.verde}  strokeWidth="1.8" fill="none"/>
      <path d={t2p(E,F)} stroke={tema.verde}  strokeWidth="1.8" fill="none"/>
      <path d={t3p(C,A)} stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d={t3p(F,D)} stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <text x="29"  y="62"  fill={tema.azul}   fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">3</text>
      <text x="93"  y="136" fill={tema.verde}  fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">5</text>
      <text x="148" y="61"  fill={tema.acento} fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700">7</text>
      <text x="207" y="62"  fill={tema.azul}   fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">6</text>
      <text x="274" y="136" fill={tema.verde}  fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">10</text>
      <text x="327" y="61"  fill={tema.acento} fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700">14</text>
      <text x="186" y="74"  fill="rgba(240,236,227,0.30)" fontSize="26" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
      <text x="86"  y="5"   fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="178" y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="264" y="5"   fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="194" y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="360" y="129" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>
      </g>
    </svg>
  );
}

function SeLllS2SVG({ tema }) {
  // Ejercicio 2 LLL: AB=8(azul),BC=10(verde),CA=dim | DE=4(azul),EF=?(verde),FD=dim
  const A=[86,14],B=[8,122],C=[178,122],D=[264,14],E=[194,122],F=[354,122];
  const {mid,vsub,vadd,vscale,vunit,vperp,fmt}=_svgH();
  function tp(P1,P2){const m=mid(P1,P2),p=vperp(vunit(vsub(P2,P1)));return`M ${fmt(vadd(m,vscale(p,6)))} L ${fmt(vadd(m,vscale(p,-6)))}`;}
  function t2p(P1,P2){const m=mid(P1,P2),d=vunit(vsub(P2,P1)),p=vperp(d);return[-4,4].map(o=>{const c=vadd(m,vscale(d,o));return`M ${fmt(vadd(c,vscale(p,6)))} L ${fmt(vadd(c,vscale(p,-6)))}`;}).join(" ");}
  const pts=ps=>ps.map(fmt).join(" ");
  const dim="rgba(240,236,227,0.20)";
  return (
    <svg viewBox="0 0 370 160" width="100%" style={{display:"block",maxHeight:160}}>
      <g transform="translate(0,15)">
      <polygon points={pts([A,B,C])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([D,E,F])} fill={tema.azulSuave} stroke="none"/>
      <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={tema.azul}   strokeWidth="2.2"/>
      <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={tema.verde}  strokeWidth="2.2"/>
      <line x1={C[0]} y1={C[1]} x2={A[0]} y2={A[1]} stroke={dim}          strokeWidth="1.5"/>
      <line x1={D[0]} y1={D[1]} x2={E[0]} y2={E[1]} stroke={tema.azul}   strokeWidth="2.2"/>
      <line x1={E[0]} y1={E[1]} x2={F[0]} y2={F[1]} stroke={tema.verde}  strokeWidth="2.2"/>
      <line x1={F[0]} y1={F[1]} x2={D[0]} y2={D[1]} stroke={dim}          strokeWidth="1.5"/>
      <path d={tp(A,B)}  stroke={tema.azul}  strokeWidth="1.8" fill="none"/>
      <path d={tp(D,E)}  stroke={tema.azul}  strokeWidth="1.8" fill="none"/>
      <path d={t2p(B,C)} stroke={tema.verde} strokeWidth="1.8" fill="none"/>
      <path d={t2p(E,F)} stroke={tema.verde} strokeWidth="1.8" fill="none"/>
      <text x="29"  y="62"  fill={tema.azul}  fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">8</text>
      <text x="93"  y="136" fill={tema.verde} fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">10</text>
      <text x="207" y="62"  fill={tema.azul}  fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">4</text>
      <text x="274" y="136" fill={tema.verde} fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">?</text>
      <text x="186" y="74"  fill="rgba(240,236,227,0.30)" fontSize="26" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
      <text x="86"  y="5"   fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="178" y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="264" y="5"   fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="194" y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="360" y="129" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>
      </g>
    </svg>
  );
}

function SeLllS3SVG({ tema }) {
  // Ejercicio 3 LLL: AB=12(azul),BC=16(verde),CA=20(acento) | DE=3,EF=4,FD=5
  const A=[86,14],B=[8,122],C=[178,122],D=[264,14],E=[194,122],F=[354,122];
  const {mid,vsub,vadd,vscale,vunit,vperp,fmt}=_svgH();
  function tp(P1,P2){const m=mid(P1,P2),p=vperp(vunit(vsub(P2,P1)));return`M ${fmt(vadd(m,vscale(p,6)))} L ${fmt(vadd(m,vscale(p,-6)))}`;}
  function t2p(P1,P2){const m=mid(P1,P2),d=vunit(vsub(P2,P1)),p=vperp(d);return[-4,4].map(o=>{const c=vadd(m,vscale(d,o));return`M ${fmt(vadd(c,vscale(p,6)))} L ${fmt(vadd(c,vscale(p,-6)))}`;}).join(" ");}
  function t3p(P1,P2){const m=mid(P1,P2),d=vunit(vsub(P2,P1)),p=vperp(d);return[-7,0,7].map(o=>{const c=vadd(m,vscale(d,o));return`M ${fmt(vadd(c,vscale(p,6)))} L ${fmt(vadd(c,vscale(p,-6)))}`;}).join(" ");}
  const pts=ps=>ps.map(fmt).join(" ");
  return (
    <svg viewBox="0 0 370 160" width="100%" style={{display:"block",maxHeight:160}}>
      <g transform="translate(0,15)">
      <polygon points={pts([A,B,C])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([D,E,F])} fill={tema.azulSuave} stroke="none"/>
      <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={tema.azul}   strokeWidth="2.2"/>
      <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={tema.verde}  strokeWidth="2.2"/>
      <line x1={C[0]} y1={C[1]} x2={A[0]} y2={A[1]} stroke={tema.acento} strokeWidth="2.2"/>
      <line x1={D[0]} y1={D[1]} x2={E[0]} y2={E[1]} stroke={tema.azul}   strokeWidth="2.2"/>
      <line x1={E[0]} y1={E[1]} x2={F[0]} y2={F[1]} stroke={tema.verde}  strokeWidth="2.2"/>
      <line x1={F[0]} y1={F[1]} x2={D[0]} y2={D[1]} stroke={tema.acento} strokeWidth="2.2"/>
      <path d={tp(A,B)}  stroke={tema.azul}   strokeWidth="1.8" fill="none"/>
      <path d={tp(D,E)}  stroke={tema.azul}   strokeWidth="1.8" fill="none"/>
      <path d={t2p(B,C)} stroke={tema.verde}  strokeWidth="1.8" fill="none"/>
      <path d={t2p(E,F)} stroke={tema.verde}  strokeWidth="1.8" fill="none"/>
      <path d={t3p(C,A)} stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d={t3p(F,D)} stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <text x="29"  y="62"  fill={tema.azul}   fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">12</text>
      <text x="93"  y="136" fill={tema.verde}  fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">16</text>
      <text x="148" y="61"  fill={tema.acento} fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700">20</text>
      <text x="207" y="62"  fill={tema.azul}   fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">3</text>
      <text x="274" y="136" fill={tema.verde}  fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">4</text>
      <text x="327" y="61"  fill={tema.acento} fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700">5</text>
      <text x="186" y="74"  fill="rgba(240,236,227,0.30)" fontSize="26" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
      <text x="86"  y="5"   fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="178" y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="264" y="5"   fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="194" y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="360" y="129" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>
      </g>
    </svg>
  );
}

function SeLllEj2SVG({ tema }) {
  // Sides AB=10(azul),BC=20(verde),CA=15(acento) | DE=6,EF=12,FD=9 — k=5/3
  const A=[86,14],B=[8,122],C=[178,122],D=[264,14],E=[194,122],F=[354,122];
  const pts=ps=>ps.map(([x,y])=>`${x},${y}`).join(" ");
  return (
    <svg viewBox="0 0 370 160" width="100%" style={{display:"block",maxHeight:160}}>
      <g transform="translate(0,15)">
      <polygon points={pts([A,B,C])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([D,E,F])} fill={tema.azulSuave} stroke="none"/>
      <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={tema.azul}   strokeWidth="2.2"/>
      <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={tema.verde}  strokeWidth="2.2"/>
      <line x1={C[0]} y1={C[1]} x2={A[0]} y2={A[1]} stroke={tema.acento} strokeWidth="2.2"/>
      <line x1={D[0]} y1={D[1]} x2={E[0]} y2={E[1]} stroke={tema.azul}   strokeWidth="2.2"/>
      <line x1={E[0]} y1={E[1]} x2={F[0]} y2={F[1]} stroke={tema.verde}  strokeWidth="2.2"/>
      <line x1={F[0]} y1={F[1]} x2={D[0]} y2={D[1]} stroke={tema.acento} strokeWidth="2.2"/>
      <text x="29"  y="62"  fill={tema.azul}   fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">10</text>
      <text x="93"  y="136" fill={tema.verde}  fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">20</text>
      <text x="148" y="61"  fill={tema.acento} fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700">15</text>
      <text x="207" y="62"  fill={tema.azul}   fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">6</text>
      <text x="274" y="136" fill={tema.verde}  fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">12</text>
      <text x="327" y="61"  fill={tema.acento} fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700">9</text>
      <text x="186" y="74"  fill="rgba(240,236,227,0.30)" fontSize="26" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
      <text x="86"  y="5"   fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="178" y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="264" y="5"   fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="194" y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="360" y="129" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>
      </g>
    </svg>
  );
}

function SeLalEj1SVG({ tema }) {
  // LAL: ∠A=∠D=55° (verde), AB/DE (azul 1 tick), AC/FD... wait CA/FD (acento 2 ticks)
  const A=[86,14],B=[8,122],C=[178,122],D=[264,14],E=[194,122],F=[354,122];
  const {mid,vsub,vadd,vscale,vunit,vperp,fmt}=_svgH();
  function tp(P1,P2){const m=mid(P1,P2),p=vperp(vunit(vsub(P2,P1)));return`M ${fmt(vadd(m,vscale(p,6)))} L ${fmt(vadd(m,vscale(p,-6)))}`;}
  function t2p(P1,P2){const m=mid(P1,P2),d=vunit(vsub(P2,P1)),p=vperp(d);return[-4,4].map(o=>{const c=vadd(m,vscale(d,o));return`M ${fmt(vadd(c,vscale(p,6)))} L ${fmt(vadd(c,vscale(p,-6)))}`;}).join(" ");}
  function arcPath(V,P1,P2,r){const s=vadd(V,vscale(vunit(vsub(P1,V)),r)),e=vadd(V,vscale(vunit(vsub(P2,V)),r));return`M ${fmt(s)} A ${r},${r} 0 0,1 ${fmt(e)}`;}
  const pts=ps=>ps.map(fmt).join(" ");
  const dim="rgba(240,236,227,0.25)";
  return (
    <svg viewBox="0 0 370 160" width="100%" style={{display:"block",maxHeight:160}}>
      <g transform="translate(0,15)">
      <polygon points={pts([A,B,C])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([D,E,F])} fill={tema.azulSuave} stroke="none"/>
      <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={tema.azul}   strokeWidth="2.2"/>
      <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={dim}          strokeWidth="1.5"/>
      <line x1={C[0]} y1={C[1]} x2={A[0]} y2={A[1]} stroke={tema.acento} strokeWidth="2.2"/>
      <line x1={D[0]} y1={D[1]} x2={E[0]} y2={E[1]} stroke={tema.azul}   strokeWidth="2.2"/>
      <line x1={E[0]} y1={E[1]} x2={F[0]} y2={F[1]} stroke={dim}          strokeWidth="1.5"/>
      <line x1={F[0]} y1={F[1]} x2={D[0]} y2={D[1]} stroke={tema.acento} strokeWidth="2.2"/>
      <path d={tp(A,B)}  stroke={tema.azul}   strokeWidth="1.8" fill="none"/>
      <path d={tp(D,E)}  stroke={tema.azul}   strokeWidth="1.8" fill="none"/>
      <path d={t2p(C,A)} stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d={t2p(F,D)} stroke={tema.acento} strokeWidth="1.8" fill="none"/>
      <path d={arcPath(A,C,B,22)} stroke={tema.verde} strokeWidth="1.8" fill="none"/>
      <path d={arcPath(D,F,E,22)} stroke={tema.verde} strokeWidth="1.8" fill="none"/>
      <text x="86"  y="48"  fill={tema.verde} fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">55°</text>
      <text x="264" y="48"  fill={tema.verde} fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">55°</text>
      <text x="186" y="74"  fill="rgba(240,236,227,0.30)" fontSize="26" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
      <text x="86"  y="5"   fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="178" y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="264" y="5"   fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="194" y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="360" y="129" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>
      </g>
    </svg>
  );
}

function SeLalEj2SVG({ tema }) {
  // LAL: ∠A=∠D=40°, AB=8, AC=12, DE=4, DF=?
  const A=[86,14],B=[8,122],C=[178,122],D=[264,14],E=[194,122],F=[354,122];
  const {vadd,vsub,vscale,vunit,fmt}=_svgH();
  function arcPath(V,P1,P2,r){const s=vadd(V,vscale(vunit(vsub(P1,V)),r)),e=vadd(V,vscale(vunit(vsub(P2,V)),r));return`M ${fmt(s)} A ${r},${r} 0 0,1 ${fmt(e)}`;}
  const pts=ps=>ps.map(([x,y])=>`${x},${y}`).join(" ");
  const dim="rgba(240,236,227,0.25)";
  return (
    <svg viewBox="0 0 370 160" width="100%" style={{display:"block",maxHeight:160}}>
      <g transform="translate(0,15)">
      <polygon points={pts([A,B,C])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([D,E,F])} fill={tema.azulSuave} stroke="none"/>
      <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={tema.azul}   strokeWidth="2.4"/>
      <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={dim}          strokeWidth="1.5"/>
      <line x1={C[0]} y1={C[1]} x2={A[0]} y2={A[1]} stroke={tema.acento} strokeWidth="2.4"/>
      <line x1={D[0]} y1={D[1]} x2={E[0]} y2={E[1]} stroke={tema.azul}   strokeWidth="2.4"/>
      <line x1={E[0]} y1={E[1]} x2={F[0]} y2={F[1]} stroke={dim}          strokeWidth="1.5"/>
      <line x1={F[0]} y1={F[1]} x2={D[0]} y2={D[1]} stroke={tema.acento} strokeWidth="2.4"/>
      <path d={arcPath(A,C,B,22)} stroke={tema.verde} strokeWidth="1.8" fill="none"/>
      <path d={arcPath(D,F,E,22)} stroke={tema.verde} strokeWidth="1.8" fill="none"/>
      <text x="86"  y="48"  fill={tema.verde} fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">40°</text>
      <text x="264" y="48"  fill={tema.verde} fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">40°</text>
      <text x="29"  y="62"  fill={tema.azul}   fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">8</text>
      <text x="148" y="61"  fill={tema.acento} fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700">12</text>
      <text x="207" y="62"  fill={tema.azul}   fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">4</text>
      <text x="327" y="61"  fill={tema.acento} fontSize="14" fontFamily="'DM Sans',sans-serif" fontWeight="700">?</text>
      <text x="186" y="74"  fill="rgba(240,236,227,0.30)" fontSize="26" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
      <text x="86"  y="5"   fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="178" y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="264" y="5"   fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="194" y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="360" y="129" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>
      </g>
    </svg>
  );
}

function SeLalS2SVG({ tema }) {
  // Ejercicio 2 LAL: AB=9(azul),AC=15(acento),∠A=∠D | DE=6(azul),DF=?(acento)
  const A=[86,14],B=[8,122],C=[178,122],D=[264,14],E=[194,122],F=[354,122];
  const {vadd,vsub,vscale,vunit,fmt}=_svgH();
  function arcPath(V,P1,P2,r){const s=vadd(V,vscale(vunit(vsub(P1,V)),r)),e=vadd(V,vscale(vunit(vsub(P2,V)),r));return`M ${fmt(s)} A ${r},${r} 0 0,1 ${fmt(e)}`;}
  const pts=ps=>ps.map(([x,y])=>`${x},${y}`).join(" ");
  const dim="rgba(240,236,227,0.20)";
  return (
    <svg viewBox="0 0 370 160" width="100%" style={{display:"block",maxHeight:160}}>
      <g transform="translate(0,15)">
      <polygon points={pts([A,B,C])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([D,E,F])} fill={tema.azulSuave} stroke="none"/>
      <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={tema.azul}   strokeWidth="2.4"/>
      <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={dim}          strokeWidth="1.5"/>
      <line x1={C[0]} y1={C[1]} x2={A[0]} y2={A[1]} stroke={tema.acento} strokeWidth="2.4"/>
      <line x1={D[0]} y1={D[1]} x2={E[0]} y2={E[1]} stroke={tema.azul}   strokeWidth="2.4"/>
      <line x1={E[0]} y1={E[1]} x2={F[0]} y2={F[1]} stroke={dim}          strokeWidth="1.5"/>
      <line x1={F[0]} y1={F[1]} x2={D[0]} y2={D[1]} stroke={tema.acento} strokeWidth="2.4"/>
      <path d={arcPath(A,C,B,22)} stroke={tema.verde} strokeWidth="1.8" fill="none"/>
      <path d={arcPath(D,F,E,22)} stroke={tema.verde} strokeWidth="1.8" fill="none"/>
      <text x="86"  y="48"  fill={tema.verde} fontSize="9"  fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">∠A</text>
      <text x="264" y="48"  fill={tema.verde} fontSize="9"  fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">∠D</text>
      <text x="29"  y="62"  fill={tema.azul}   fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">9</text>
      <text x="148" y="61"  fill={tema.acento} fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700">15</text>
      <text x="207" y="62"  fill={tema.azul}   fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">6</text>
      <text x="327" y="61"  fill={tema.acento} fontSize="14" fontFamily="'DM Sans',sans-serif" fontWeight="700">?</text>
      <text x="186" y="74"  fill="rgba(240,236,227,0.30)" fontSize="26" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
      <text x="86"  y="5"   fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="178" y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="264" y="5"   fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="194" y="138" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="360" y="129" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>
      </g>
    </svg>
  );
}

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

      {slide.svgDiagram === "ej1-lll"     && <Ej1LLLSVG     tema={tema} />}
      {slide.svgDiagram === "ej2-k32"     && <Ej2K32SVG     tema={tema} />}
      {slide.svgDiagram === "ej-cong-lll" && <EjCongLLLSVG  tema={tema} />}
      {slide.svgDiagram === "ej-cong-lal" && <EjCongLALSVG  tema={tema} />}
      {slide.svgDiagram === "ej-cong-ala" && <EjCongALASVG  tema={tema} />}
      {slide.svgDiagram === "ej-cong-laa" && <EjCongLAASVG  tema={tema} />}
      {slide.svgDiagram === "se-aa-ej1"   && <SeAaEj1SVG    tema={tema} />}
      {slide.svgDiagram === "se-aa-ej2"   && <SeAaEj2SVG    tema={tema} />}
      {slide.svgDiagram === "se-lll-ej1"  && <SeLllEj1SVG   tema={tema} />}
      {slide.svgDiagram === "se-lll-s1"   && <SeLllS1SVG    tema={tema} />}
      {slide.svgDiagram === "se-lll-s2"   && <SeLllS2SVG    tema={tema} />}
      {slide.svgDiagram === "se-lll-s3"   && <SeLllS3SVG    tema={tema} />}
      {slide.svgDiagram === "se-lll-ej2"  && <SeLllEj2SVG   tema={tema} />}
      {slide.svgDiagram === "se-lal-ej1"  && <SeLalEj1SVG   tema={tema} />}
      {slide.svgDiagram === "se-lal-ej2"  && <SeLalEj2SVG   tema={tema} />}
      {slide.svgDiagram === "se-lal-s2"   && <SeLalS2SVG    tema={tema} />}

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {slide.pasos.map((p, i) => {
          const activo = resaltadoIdx === i;
          return (
          <div
            key={i}
            onClick={() => onResaltar && onResaltar(i)}
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

function Ce4AaaSVG({ tema }) {
  // Big △ABC and small △DEF — same angles, different sizes
  const A=[74,14],B=[8,140],C=[200,140],D=[290,60],E=[254,140],F=[338,140];
  const {vadd,vsub,vscale,vunit,fmt}=_svgH();
  function arcPath(V,P1,P2,r){const s=vadd(V,vscale(vunit(vsub(P1,V)),r)),e=vadd(V,vscale(vunit(vsub(P2,V)),r));return`M ${fmt(s)} A ${r},${r} 0 0,1 ${fmt(e)}`;}
  function arc2(V,P1,P2,r){return[arcPath(V,P1,P2,r),arcPath(V,P1,P2,r+5)].join(" ");}
  const pts=ps=>ps.map(([x,y])=>`${x},${y}`).join(" ");
  const stroke="rgba(240,236,227,0.72)";
  return (
    <svg viewBox="0 0 356 156" width="100%" style={{display:"block",maxHeight:150}}>
      <polygon points={pts([A,B,C])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([D,E,F])} fill={tema.azulSuave} stroke="none"/>
      <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={stroke} strokeWidth="2"/>
      <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={stroke} strokeWidth="2"/>
      <line x1={C[0]} y1={C[1]} x2={A[0]} y2={A[1]} stroke={stroke} strokeWidth="2"/>
      <line x1={D[0]} y1={D[1]} x2={E[0]} y2={E[1]} stroke={stroke} strokeWidth="2"/>
      <line x1={E[0]} y1={E[1]} x2={F[0]} y2={F[1]} stroke={stroke} strokeWidth="2"/>
      <line x1={F[0]} y1={F[1]} x2={D[0]} y2={D[1]} stroke={stroke} strokeWidth="2"/>
      {/* Single arc at A and D */}
      <path d={arcPath(A,C,B,22)} stroke={tema.azul} strokeWidth="1.6" fill="none"/>
      <path d={arcPath(D,F,E,16)} stroke={tema.azul} strokeWidth="1.6" fill="none"/>
      {/* Double arc at B and E */}
      <path d={arc2(B,A,C,18)} stroke={tema.verde} strokeWidth="1.4" fill="none"/>
      <path d={arc2(E,D,F,12)} stroke={tema.verde} strokeWidth="1.4" fill="none"/>
      {/* Single arc at C and F (different color) */}
      <path d={arcPath(C,B,A,22)} stroke={tema.acento} strokeWidth="1.6" fill="none"/>
      <path d={arcPath(F,E,D,16)} stroke={tema.acento} strokeWidth="1.6" fill="none"/>
      {/* ∼ symbol between triangles */}
      <text x="230" y="90" fill="rgba(240,236,227,0.28)" fontSize="26" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
      {/* Vertex labels */}
      <text x="74"  y="5"   fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="152" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="200" y="152" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="290" y="52"  fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="250" y="152" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="342" y="150" fill="rgba(240,236,227,0.65)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>
    </svg>
  );
}

function Ce5AngleSVG({ tema }) {
  const P=[86,14],Q=[8,122],R=[178,122],X=[264,14],Y=[194,122],Z=[354,122];
  const {vadd,vsub,vscale,vunit,fmt}=_svgH();
  function arcPath(V,P1,P2,r){const s=vadd(V,vscale(vunit(vsub(P1,V)),r)),e=vadd(V,vscale(vunit(vsub(P2,V)),r));return`M ${fmt(s)} A ${r},${r} 0 0,1 ${fmt(e)}`;}
  const pts=ps=>ps.map(([x,y])=>`${x},${y}`).join(" ");
  const stroke="rgba(240,236,227,0.72)";
  return (
    <svg viewBox="0 0 370 145" width="100%" style={{display:"block",maxHeight:145}}>
      <polygon points={pts([P,Q,R])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([X,Y,Z])} fill={tema.azulSuave} stroke="none"/>
      <line x1={P[0]} y1={P[1]} x2={Q[0]} y2={Q[1]} stroke={stroke} strokeWidth="2"/>
      <line x1={Q[0]} y1={Q[1]} x2={R[0]} y2={R[1]} stroke={stroke} strokeWidth="2"/>
      <line x1={R[0]} y1={R[1]} x2={P[0]} y2={P[1]} stroke={stroke} strokeWidth="2"/>
      <line x1={X[0]} y1={X[1]} x2={Y[0]} y2={Y[1]} stroke={stroke} strokeWidth="2"/>
      <line x1={Y[0]} y1={Y[1]} x2={Z[0]} y2={Z[1]} stroke={stroke} strokeWidth="2"/>
      <line x1={Z[0]} y1={Z[1]} x2={X[0]} y2={X[1]} stroke={stroke} strokeWidth="2"/>
      {/* ∠P = 55° and ∠X (matching) */}
      <path d={arcPath(P,R,Q,22)} stroke={tema.azul} strokeWidth="1.6" fill="none"/>
      <path d={arcPath(X,Z,Y,22)} stroke={tema.azul} strokeWidth="1.6" fill="none"/>
      {/* ∠Q = 75° and ∠Y (matching) */}
      <path d={arcPath(Q,P,R,22)} stroke={tema.verde} strokeWidth="1.6" fill="none"/>
      <path d={arcPath(Y,X,Z,22)} stroke={tema.verde} strokeWidth="1.6" fill="none"/>
      {/* ∠R (computed) and ∠Z = ? */}
      <path d={arcPath(R,Q,P,18)} stroke={tema.acento} strokeWidth="1.6" fill="none"/>
      <path d={arcPath(Z,Y,X,18)} stroke={tema.acento} strokeWidth="1.6" fill="none"/>
      {/* Angle labels */}
      <text x="86"  y="48"  fill={tema.azul}  fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">55°</text>
      <text x="38"  y="110" fill={tema.verde} fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="600">75°</text>
      <text x="354" y="110" fill={tema.acento} fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">?</text>
      {/* ≅ */}
      <text x="186" y="74" fill="rgba(240,236,227,0.28)" fontSize="28" fontFamily="Georgia,serif" textAnchor="middle">≅</text>
      {/* Vertex labels */}
      <text x="86"  y="5"   fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">P</text>
      <text x="4"   y="138" fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">Q</text>
      <text x="178" y="138" fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">R</text>
      <text x="264" y="5"   fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">X</text>
      <text x="194" y="138" fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">Y</text>
      <text x="360" y="129" fill="rgba(240,236,227,0.72)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">Z</text>
    </svg>
  );
}

// ── Semejanza advanced exercise SVGs ─────────────────────────────────────────

function SeAreasSVG({ tema }) {
  // Big △ABC and small △DEF — shows k=4, ask for area of big given area of small=7 cm²
  const pts=ps=>ps.map(([x,y])=>`${x},${y}`).join(" ");
  const dim="rgba(240,236,227,0.35)";
  return (
    <svg viewBox="0 0 388 175" width="100%" style={{display:"block",maxHeight:160}}>
      <polygon points={pts([[95,14],[12,155],[198,155]])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([[296,90],[262,155],[340,155]])} fill={tema.acentoSuave} stroke="none"/>
      <line x1="95"  y1="14"  x2="12"  y2="155" stroke={dim} strokeWidth="1.8"/>
      <line x1="12"  y1="155" x2="198" y2="155" stroke={dim} strokeWidth="1.8"/>
      <line x1="198" y1="155" x2="95"  y2="14"  stroke={dim} strokeWidth="1.8"/>
      <line x1="296" y1="90"  x2="262" y2="155" stroke={dim} strokeWidth="1.8"/>
      <line x1="262" y1="155" x2="340" y2="155" stroke={dim} strokeWidth="1.8"/>
      <line x1="340" y1="155" x2="296" y2="90"  stroke={dim} strokeWidth="1.8"/>
      <text x="105" y="108" fill={tema.acento} fontSize="15" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">?</text>
      <text x="301" y="136" fill={tema.verde}  fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">7 cm²</text>
      <text x="228" y="82"  fill="rgba(240,236,227,0.28)" fontSize="20" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
      <text x="228" y="104" fill="rgba(240,236,227,0.55)" fontSize="15" fontWeight="700" fontFamily="'DM Sans',sans-serif" textAnchor="middle">k = 4</text>
      <text x="95"  y="7"   fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="165" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="202" y="165" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">C</text>
      <text x="296" y="83"  fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="254" y="168" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">E</text>
      <text x="344" y="168" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">F</text>
    </svg>
  );
}

function SePitSVG({ tema }) {
  // Right △ with altitude: A left, B right (both top), C bottom (right angle at C)
  // H = foot of altitude on AB; AH=4, HB=9, CH=h=6
  const A=[14,14],B=[248,14],H=[86,14],C=[86,122];
  const pts=ps=>ps.map(([x,y])=>`${x},${y}`).join(" ");
  return (
    <svg viewBox="0 0 270 140" width="100%" style={{display:"block",maxHeight:140}}>
      <polygon points={pts([A,H,C])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([H,B,C])} fill={tema.acentoSuave} stroke="none"/>
      <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke="rgba(240,236,227,0.60)" strokeWidth="2"/>
      <line x1={A[0]} y1={A[1]} x2={C[0]} y2={C[1]} stroke={tema.azul}   strokeWidth="2.2"/>
      <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={tema.acento} strokeWidth="2.2"/>
      <line x1={H[0]} y1={H[1]} x2={C[0]} y2={C[1]} stroke={tema.verde}  strokeWidth="2" strokeDasharray="5,3"/>
      {/* Right angle square at H */}
      <path d="M 86,22 L 94,22 L 94,14" fill="none" stroke="rgba(240,236,227,0.50)" strokeWidth="1.2"/>
      <text x="50"  y="10"  fill={tema.azul}   fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">4</text>
      <text x="167" y="10"  fill={tema.acento} fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">9</text>
      <text x="96"  y="72"  fill={tema.verde}  fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700">h</text>
      <text x="14"  y="27"  fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="248" y="27"  fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">B</text>
      <text x="86"  y="135" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="98"  y="24"  fill={tema.verde}  fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">H</text>
    </svg>
  );
}

function SeParalelaSVG({ tema }) {
  // Big △ ABC with parallel line DE∥BC; labels AD=4,DB=8,AE=3,EC=?
  const A=[130,14],B=[8,148],C=[252,148],D=[89,59],E=[171,59];
  const pts=ps=>ps.map(([x,y])=>`${x},${y}`).join(" ");
  return (
    <svg viewBox="0 0 270 162" width="100%" style={{display:"block",maxHeight:155}}>
      <polygon points={pts([A,B,C])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([A,D,E])} fill={tema.acentoSuave} stroke="none"/>
      <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke="rgba(240,236,227,0.60)" strokeWidth="2"/>
      <line x1={A[0]} y1={A[1]} x2={C[0]} y2={C[1]} stroke="rgba(240,236,227,0.60)" strokeWidth="2"/>
      <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={tema.verde}  strokeWidth="2.2"/>
      <line x1={D[0]} y1={D[1]} x2={E[0]} y2={E[1]} stroke={tema.acento} strokeWidth="2.2"/>
      <text x="93"  y="40"  fill={tema.azul}   fontSize="11" fontFamily="'DM Sans',sans-serif" fontWeight="700">AD=4</text>
      <text x="34"  y="112" fill="rgba(240,236,227,0.65)" fontSize="11" fontFamily="'DM Sans',sans-serif" fontWeight="600">DB=8</text>
      <text x="162" y="40"  fill={tema.acento} fontSize="11" fontFamily="'DM Sans',sans-serif" fontWeight="700">AE=3</text>
      <text x="200" y="108" fill={tema.acento} fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="700">EC=?</text>
      <text x="130" y="50"  fill={tema.acento} fontSize="9"  fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.1em">DE ∥ BC</text>
      <text x="130" y="9"   fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="3"   y="158" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="256" y="158" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">C</text>
      <text x="82"  y="70"  fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">D</text>
      <text x="177" y="70"  fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">E</text>
    </svg>
  );
}

function SeSombraSVG({ tema }) {
  // Two similar right triangles: tree 4m shadow 6m; pole shadow 9m height ?
  const pts=ps=>ps.map(([x,y])=>`${x},${y}`).join(" ");
  const dim="rgba(240,236,227,0.65)";
  return (
    <svg viewBox="0 0 380 138" width="100%" style={{display:"block",maxHeight:138}}>
      <polygon points={pts([[50,42],[50,122],[170,122]])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([[210,12],[210,122],[350,122]])} fill={tema.azulSuave} stroke="none"/>
      <path d="M 50,114 L 58,114 L 58,122" fill="none" stroke="rgba(240,236,227,0.50)" strokeWidth="1.2"/>
      <path d="M 210,114 L 218,114 L 218,122" fill="none" stroke="rgba(240,236,227,0.50)" strokeWidth="1.2"/>
      <line x1="50"  y1="42"  x2="50"  y2="122" stroke={tema.verde}  strokeWidth="2.2"/>
      <line x1="50"  y1="122" x2="170" y2="122" stroke={tema.acento} strokeWidth="2.2"/>
      <line x1="170" y1="122" x2="50"  y2="42"  stroke={dim}          strokeWidth="1.8"/>
      <line x1="210" y1="12"  x2="210" y2="122" stroke={tema.verde}  strokeWidth="2.2"/>
      <line x1="210" y1="122" x2="350" y2="122" stroke={tema.acento} strokeWidth="2.2"/>
      <line x1="350" y1="122" x2="210" y2="12"  stroke={dim}          strokeWidth="1.8"/>
      <text x="40"  y="82"  fill={tema.verde}  fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">4 m</text>
      <text x="110" y="136" fill={tema.acento} fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">6 m</text>
      <text x="200" y="67"  fill={tema.verde}  fontSize="14" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">?</text>
      <text x="280" y="136" fill={tema.acento} fontSize="12" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">9 m</text>
      <text x="192" y="80"  fill="rgba(240,236,227,0.30)" fontSize="26" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
    </svg>
  );
}

function SeK3SVG({ tema }) {
  return (
    <svg viewBox="0 0 388 185" width="100%" style={{ display: "block", maxHeight: 175 }}>
      <polygon points="95,29 12,170 198,170" fill={tema.azulSuave} stroke="none"/>
      <polygon points="296,57 240,151 364,151" fill={tema.azulSuave} stroke="none"/>
      <line x1="95"  y1="29"  x2="12"  y2="170" stroke={tema.azul}   strokeWidth="2.8"/>
      <line x1="12"  y1="170" x2="198" y2="170" stroke="rgba(240,236,227,0.35)" strokeWidth="1.8"/>
      <line x1="198" y1="170" x2="95"  y2="29"  stroke="rgba(240,236,227,0.35)" strokeWidth="1.8"/>
      <line x1="296" y1="57"  x2="240" y2="151" stroke={tema.azul}   strokeWidth="2.8"/>
      <line x1="240" y1="151" x2="364" y2="151" stroke="rgba(240,236,227,0.35)" strokeWidth="1.8"/>
      <line x1="364" y1="151" x2="296" y2="57"  stroke="rgba(240,236,227,0.35)" strokeWidth="1.8"/>
      <text x="40"  y="108" fill={tema.azul} fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">AB=15</text>
      <text x="258" y="110" fill={tema.acento} fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="end">DE=?</text>
      <text x="95"  y="22"  fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="4"   y="179" fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="202" y="179" fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">C</text>
      <text x="296" y="51"  fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="232" y="163" fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">E</text>
      <text x="368" y="163" fill="rgba(240,236,227,0.70)" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">F</text>
      <text x="222" y="87"  fill="rgba(240,236,227,0.28)" fontSize="22" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
      <text x="222" y="111" fill="rgba(240,236,227,0.55)" fontSize="17" fontWeight="700" fontFamily="'DM Sans',sans-serif" textAnchor="middle">k = 3</text>
    </svg>
  );
}

// ─── Ejercicio SVGs: Cuadriláteros y Polígonos ───────────────────────────────
function Pe1RectSVG({ tema }) {
  return (
    <svg viewBox="0 0 280 158" width="100%" style={{ display: "block", maxHeight: 138 }}>
      <polygon points="30,20 240,20 240,128 30,128" fill={tema.azulSuave} stroke={tema.azul} strokeWidth="2" opacity="0.85"/>
      <path d="M 42,20 L 42,32 L 30,32" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 228,20 L 228,32 L 240,32" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 228,128 L 228,116 L 240,116" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 42,128 L 42,116 L 30,116" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <line x1="30" y1="20" x2="240" y2="128" stroke={tema.azul} strokeWidth="1.5" strokeDasharray="6,4" opacity="0.45"/>
      <text x="135" y="148" fill={tema.azul} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">8 cm</text>
      <text x="252" y="76" fill={tema.azul} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">6 cm</text>
      <text x="148" y="66" fill={tema.muted} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.65">d=?</text>
    </svg>
  );
}
function Pe2RomboSVG({ tema }) {
  return (
    <svg viewBox="0 0 280 158" width="100%" style={{ display: "block", maxHeight: 138 }}>
      <polygon points="140,8 262,79 140,150 18,79" fill={tema.azulSuave} stroke={tema.azul} strokeWidth="2" opacity="0.85"/>
      <line x1="140" y1="8" x2="140" y2="150" stroke={tema.verde} strokeWidth="1.8" strokeDasharray="6,4" opacity="0.65"/>
      <line x1="18" y1="79" x2="262" y2="79" stroke={tema.acento} strokeWidth="1.8" strokeDasharray="6,4" opacity="0.65"/>
      <path d="M 140,79 L 140,69 L 150,69" stroke="rgba(255,255,255,0.4)" strokeWidth="1.3" fill="none"/>
      <text x="148" y="44" fill={tema.verde} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">d₁=10</text>
      <text x="182" y="76" fill={tema.acento} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">d₂=24</text>
    </svg>
  );
}
function Pe3CuadradoSVG({ tema }) {
  // Polígono 120×120 centrado → proporciones 1:1
  return (
    <svg viewBox="0 0 280 158" width="100%" style={{ display: "block", maxHeight: 138 }}>
      <polygon points="80,19 200,19 200,139 80,139" fill={tema.azulSuave} stroke={tema.azul} strokeWidth="2" opacity="0.85"/>
      <path d="M 90,19 L 90,29 L 80,29"   stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 190,19 L 190,29 L 200,29" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 190,139 L 190,129 L 200,129" stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <path d="M 90,139 L 90,129 L 80,129"  stroke={tema.acento} strokeWidth="1.5" fill="none"/>
      <text x="140" y="84" fill={tema.acento} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A = 49 cm²</text>
      <text x="140" y="154" fill={tema.azul} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">l = ?  →  d = ?</text>
    </svg>
  );
}
function Te1AreaSVG({ tema }) {
  return (
    <svg viewBox="0 0 300 152" width="100%" style={{ display: "block", maxHeight: 132 }}>
      <polygon points="15,128 272,128 225,20 68,20" fill={tema.azulSuave} stroke={tema.azul} strokeWidth="2" opacity="0.85"/>
      <line x1="68" y1="20" x2="68" y2="128" stroke={tema.verde} strokeWidth="1.4" strokeDasharray="5,4" opacity="0.65"/>
      <path d="M 68,116 L 78,116 L 78,128" stroke={tema.verde} strokeWidth="1.3" fill="none" opacity="0.65"/>
      <text x="143" y="148" fill={tema.azul} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">B = 12</text>
      <text x="146" y="14" fill={tema.verde} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">b = 8</text>
      <text x="55" y="77" fill={tema.verde} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">h=5</text>
    </svg>
  );
}
function Te2MedianaSVG({ tema }) {
  return (
    <svg viewBox="0 0 300 152" width="100%" style={{ display: "block", maxHeight: 132 }}>
      <polygon points="10,128 278,128 228,18 58,18" fill={tema.azulSuave} stroke={tema.azul} strokeWidth="2" opacity="0.85"/>
      <line x1="34" y1="73" x2="253" y2="73" stroke={tema.acento} strokeWidth="2" strokeDasharray="6,4" opacity="0.8"/>
      <text x="144" y="146" fill={tema.azul} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">B = 14</text>
      <text x="143" y="13" fill={tema.verde} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">b = 6</text>
      <text x="143" y="67" fill={tema.acento} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">m = ?</text>
    </svg>
  );
}
function Te3IsoSVG({ tema }) {
  return (
    <svg viewBox="0 0 300 152" width="100%" style={{ display: "block", maxHeight: 132 }}>
      <polygon points="14,128 278,128 218,20 74,20" fill={tema.azulSuave} stroke={tema.azul} strokeWidth="2" opacity="0.85"/>
      <path d="M 27,128 A 22,22 0 0,1 29,106" stroke={tema.acento} strokeWidth="2" fill="none"/>
      <path d="M 265,128 A 22,22 0 0,0 263,106" stroke={tema.acento} strokeWidth="2" fill="none"/>
      <text x="42" y="113" fill={tema.acento} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">∠A=65°</text>
      <text x="188" y="113" fill={tema.acento} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">∠B=?</text>
    </svg>
  );
}
function Poe1HexSVG({ tema }) {
  return (
    <svg viewBox="0 0 290 158" width="100%" style={{ display: "block", maxHeight: 138 }}>
      <polygon points={qRegPoly(140, 76, 62, 6, -Math.PI / 2)} fill={tema.azulSuave} stroke={tema.azul} strokeWidth="2" opacity="0.85"/>
      <path d="M 154,24 A 18,18 0 0,1 126,24" stroke={tema.acento} strokeWidth="2" fill="none"/>
      <text x="140" y="41" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">α=?</text>
      <text x="140" y="150" fill={tema.muted} fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle">n = 6 lados</text>
    </svg>
  );
}
function Poe2AngExtSVG({ tema }) {
  // Octágono: centro(145,84) r=58. Vértice superior P0=(145,26), P1=(186,43), P7=(104,43)
  // Ángulo exterior β=45° en P0: entre extensión de P1→P0 y lado P0→P7
  // Arco r=18: inicio(128,19) y fin(128,33) — ambos exactamente a r=18 de P0
  // Extensión punteada desde P0(145,26) hacia (106,10)
  return (
    <svg viewBox="0 0 290 158" width="100%" style={{ display: "block", maxHeight: 138 }}>
      {/* Extensión del lado P1→P0 más allá de P0 */}
      <line x1="145" y1="26" x2="106" y2="10"
        stroke={tema.azul} strokeWidth="1.8" strokeDasharray="5,3" opacity="0.6"/>
      <polygon points={qRegPoly(145, 84, 58, 8, -Math.PI / 2)}
        fill={tema.azulSuave} stroke={tema.azul} strokeWidth="2" opacity="0.85"/>
      {/* Arco ángulo exterior β en P0(145,26), r=18, CCW → pasa por el exterior (izquierda) */}
      <path d="M 128,19 A 18,18 0 0,0 128,33"
        stroke={tema.acento} strokeWidth="2" fill="none"/>
      <text x="112" y="28" fill={tema.acento} fontSize="12"
        fontFamily="Georgia,serif" fontStyle="italic">β=45°</text>
      <text x="145" y="150" fill={tema.muted} fontSize="11"
        fontFamily="'DM Sans',sans-serif" textAnchor="middle">n = 8 (octágono)</text>
    </svg>
  );
}
function Poe3SumaSVG({ tema }) {
  return (
    <svg viewBox="0 0 290 158" width="100%" style={{ display: "block", maxHeight: 138 }}>
      <polygon points={qRegPoly(145, 78, 58, 8, -Math.PI / 2)} fill={tema.azulSuave} stroke={tema.azul} strokeWidth="2" opacity="0.85"/>
      {[0,1,2,3,4,5,6,7].map(k => {
        const a = -Math.PI/2 + 2*Math.PI*k/8;
        return <circle key={k} cx={(145+58*Math.cos(a)).toFixed(1)} cy={(78+58*Math.sin(a)).toFixed(1)} r="3.5" fill={tema.acento} opacity="0.75"/>;
      })}
      <text x="145" y="84" fill={tema.muted} fontSize="13" fontFamily="'DM Sans',sans-serif" textAnchor="middle">Σ = ?</text>
      <text x="145" y="150" fill={tema.muted} fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle">n = 8 lados</text>
    </svg>
  );
}

// ── El Círculo: SVG components ───────────────────────────────────────────────

// Portada: Línea de Euler — circuncentro O, baricentro G, ortocentro H y
// el círculo de los nueve puntos inscritos.
function EulerLineSVG({ tema }) {
  const cx = 150, cy = 97, r = 72;
  const D = deg => deg * Math.PI / 180;
  const pt = ang => [cx + r * Math.cos(D(ang)), cy + r * Math.sin(D(ang))];

  const A = pt(-90);   // vértice superior
  const B = pt(130);   // vértice inferior izquierdo
  const C = pt(30);    // vértice inferior derecho

  const O = [cx, cy];                                          // circuncentro
  const G = [(A[0]+B[0]+C[0])/3, (A[1]+B[1]+C[1])/3];        // baricentro
  const H = [O[0]+3*(G[0]-O[0]), O[1]+3*(G[1]-O[1])];        // ortocentro
  const N = [(O[0]+H[0])/2, (O[1]+H[1])/2];                  // centro 9 puntos

  const dir = [H[0]-O[0], H[1]-O[1]];
  const L1 = [O[0]-1.1*dir[0], O[1]-1.1*dir[1]];             // extensión anterior
  const L2 = [H[0]+0.8*dir[0], H[1]+0.8*dir[1]];             // extensión posterior

  const f = ([x,y]) => `${x.toFixed(1)},${y.toFixed(1)}`;
  const fx = v => v.toFixed(1);

  return (
    <svg width="200" height="130" viewBox="0 0 300 195" fill="none">
      {/* Círculo circunscrito */}
      <circle cx={cx} cy={cy} r={r}
        stroke={tema.acento} strokeWidth="2" fill={tema.acentoSuave}/>
      {/* Círculo de los nueve puntos */}
      <circle cx={fx(N[0])} cy={fx(N[1])} r={r/2}
        stroke={tema.azul} strokeWidth="1.5" fill="none"
        strokeDasharray="5,3" opacity="0.85"/>
      {/* Triángulo inscrito */}
      <polygon points={`${f(A)} ${f(B)} ${f(C)}`}
        stroke={tema.texto} strokeWidth="1.5" fill="none" opacity="0.55"/>
      {/* Línea de Euler */}
      <line x1={fx(L1[0])} y1={fx(L1[1])} x2={fx(L2[0])} y2={fx(L2[1])}
        stroke={tema.verde} strokeWidth="1.6" strokeDasharray="5,3" opacity="0.9"/>
      {/* Puntos clave */}
      <circle cx={fx(O[0])} cy={fx(O[1])} r="4" fill={tema.acento}/>
      <circle cx={fx(G[0])} cy={fx(G[1])} r="4" fill={tema.verde}/>
      <circle cx={fx(H[0])} cy={fx(H[1])} r="4" fill={tema.azul}/>
      {/* Etiquetas O, G, H */}
      <text x={fx(O[0]+7)} y={fx(O[1]+5)}
        fill={tema.acento} fontSize="13" fontFamily="serif" fontStyle="italic">O</text>
      <text x={fx(G[0]-16)} y={fx(G[1]-5)}
        fill={tema.verde} fontSize="13" fontFamily="serif" fontStyle="italic">G</text>
      <text x={fx(H[0]+7)} y={fx(H[1]+5)}
        fill={tema.azul} fontSize="13" fontFamily="serif" fontStyle="italic">H</text>
      {/* Etiquetas de vértices */}
      <text x={fx(A[0])} y={fx(A[1]-9)}
        fill={tema.texto} fontSize="12" fontFamily="serif"
        textAnchor="middle" opacity="0.55">A</text>
      <text x={fx(B[0]-12)} y={fx(B[1]+4)}
        fill={tema.texto} fontSize="12" fontFamily="serif"
        textAnchor="end" opacity="0.55">B</text>
      <text x={fx(C[0]+12)} y={fx(C[1]+4)}
        fill={tema.texto} fontSize="12" fontFamily="serif" opacity="0.55">C</text>
    </svg>
  );
}

function CirculoPartesSVG({ tema }) {
  const cx=148, cy=100, r=74;
  const bl=tema.azul, a=tema.acento, gr=tema.verde;
  const D=(d)=>d*Math.PI/180;
  const P=(ang)=>[+(cx+r*Math.cos(D(ang))).toFixed(1), +(cy+r*Math.sin(D(ang))).toFixed(1)];
  const [ax,ay]=P(130), [bx,by]=P(50);
  const [arc0x,arc0y]=P(-90), [arc1x,arc1y]=P(-30);
  return (
    <svg viewBox="0 0 310 200" width="100%" style={{display:"block",maxHeight:190}}>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="2"/>
      <line x1={cx-r} y1={cy} x2={cx+r} y2={cy} stroke={gr} strokeWidth="1.6" strokeDasharray="5,3" opacity="0.8"/>
      <text x={cx} y={cy+14} fill={gr} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">d = 2r</text>
      <line x1={cx} y1={cy} x2={cx} y2={cy-r} stroke={a} strokeWidth="2.2"/>
      <text x={cx+5} y={cy-r/2} fill={a} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">r</text>
      <line x1={ax} y1={ay} x2={bx} y2={by} stroke={bl} strokeWidth="2" opacity="0.85"/>
      <text x={(+ax + +bx)/2} y={(+ay + +by)/2 - 9} fill={bl} fontSize="10" fontFamily="'DM Sans',sans-serif" textAnchor="middle" opacity="0.85">cuerda</text>
      <path d={`M ${arc0x},${arc0y} A ${r},${r} 0 0,1 ${arc1x},${arc1y}`} fill="none" stroke={gr} strokeWidth="4.5" strokeLinecap="round" opacity="0.75"/>
      <text x={+arc1x+4} y={+arc1y-24} fill={gr} fontSize="10" fontFamily="'DM Sans',sans-serif">arco</text>
      <line x1={cx+r} y1={cy-52} x2={cx+r} y2={cy+52} stroke={a} strokeWidth="1.5" strokeDasharray="4,3" opacity="0.7"/>
      <text x={cx+r+6} y={cy-38} fill={a} fontSize="10" fontFamily="'DM Sans',sans-serif" opacity="0.85">tangente</text>
      <path d={`M ${cx+r-8},${cy} L ${cx+r-8},${cy-8} L ${cx+r},${cy-8}`} fill="none" stroke="rgba(255,255,255,0.40)" strokeWidth="1.2"/>
      <circle cx={cx+r} cy={cy} r={3} fill={a} opacity="0.8"/>
      <circle cx={cx} cy={cy} r={3.5} fill={a}/>
      <text x={cx+5} y={cy-5} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">O</text>
    </svg>
  );
}

function CirculoFormulasSVG({ tema }) {
  const cx=94, cy=95, r=68;
  const bl=tema.azul, a=tema.acento, gr=tema.verde;
  const D = deg => deg * Math.PI / 180;
  // Arco verde 290° (gap de 70° en la derecha, donde está el radio horizontal)
  // P(35°) = parte inferior-derecha, P(-35°) = parte superior-derecha
  const arcSx = +(cx + r*Math.cos(D(35))).toFixed(1);   // ~149.7
  const arcSy = +(cy + r*Math.sin(D(35))).toFixed(1);   // ~134.0
  const arcEx = +(cx + r*Math.cos(D(-35))).toFixed(1);  // ~149.7
  const arcEy = +(cy + r*Math.sin(D(-35))).toFixed(1);  // ~56.0
  return (
    <svg viewBox="0 0 275 185" width="100%" style={{display:"block",maxHeight:178}}>
      <defs>
        <marker id="cf-arr-a" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M 0,0 L 5,3 L 0,6 Z" fill={a}/>
        </marker>
        <marker id="cf-arr-g" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M 0,0 L 5,3 L 0,6 Z" fill={gr}/>
        </marker>
      </defs>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="2"/>
      {/* Radio horizontal — su extremo queda dentro del gap del arco verde */}
      <line x1={cx} y1={cy} x2={cx+r} y2={cy} stroke={a} strokeWidth="2.2" markerEnd="url(#cf-arr-a)"/>
      <text x={cx+r/2} y={cy-9} fill={a} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">r</text>
      {/* Arco 290° CW — flags 1,1 correctos para este par de puntos */}
      <path d={`M ${arcSx},${arcSy} A ${r},${r} 0 1,1 ${arcEx},${arcEy}`}
        fill="none" stroke={gr} strokeWidth="2.5" markerEnd="url(#cf-arr-g)" opacity="0.85"/>
      {/* Etiqueta en el gap (a la derecha del círculo, sin solaparse) */}
      <text x={170} y={cy} fill={gr} fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="700" dominantBaseline="middle">P = 2πr</text>
      <text x={cx} y={cy+22} fill={bl} fontSize="14" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" opacity="0.9">A = πr²</text>
      <text x={cx} y={cy+40} fill="rgba(255,255,255,0.33)" fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle">π ≈ 3.1416</text>
      <circle cx={cx} cy={cy} r={3.5} fill={a}/>
    </svg>
  );
}

function PorcionesCirculoSVG({ tema }) {
  const bl=tema.azul, a=tema.acento;
  const r=30, cy=42;
  const D=(d)=>d*Math.PI/180;
  const porciones=[
    { f:1/2,  label:"1/2"  },
    { f:1/4,  label:"1/4"  },
    { f:3/4,  label:"3/4"  },
    { f:1/8,  label:"1/8"  },
    { f:1/12, label:"1/12" }
  ];
  const cxs=[42,112,182,252,322];
  const wedge=(cx,f)=>{
    const a0=-90, a1=-90+f*360;
    const x0=+(cx+r*Math.cos(D(a0))).toFixed(1), y0=+(cy+r*Math.sin(D(a0))).toFixed(1);
    const x1=+(cx+r*Math.cos(D(a1))).toFixed(1), y1=+(cy+r*Math.sin(D(a1))).toFixed(1);
    const large=f>0.5?1:0;
    return `M ${cx},${cy} L ${x0},${y0} A ${r},${r} 0 ${large},1 ${x1},${y1} Z`;
  };
  return (
    <svg viewBox="0 0 364 100" width="100%" style={{display:"block",maxHeight:118}}>
      {porciones.map((p,i)=>(
        <g key={i}>
          <circle cx={cxs[i]} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="1.6"/>
          <path d={wedge(cxs[i],p.f)} fill={`${a}40`} stroke={a} strokeWidth="1.8"/>
          <circle cx={cxs[i]} cy={cy} r={2.5} fill={a}/>
          <text x={cxs[i]} y={cy+r+18} fill={a} fontSize="14" fontFamily="Georgia,serif" textAnchor="middle">{p.label}</text>
        </g>
      ))}
    </svg>
  );
}

// ── Triángulo inscrito: teorema del ángulo inscrito ─────────────────────────
function AnguloInscritoSVG({ tema }) {
  const cx=140, cy=120, r=90;
  const bl=tema.azul, a=tema.acento, gr=tema.verde;
  const D=(d)=>d*Math.PI/180;
  const P=(deg,R=r)=>[+(cx+R*Math.cos(D(deg))).toFixed(1), +(cy+R*Math.sin(D(deg))).toFixed(1)];
  const [Ax,Ay]=P(150), [Cx,Cy]=P(30), [Bx,By]=P(-90);
  // marca del ángulo central (arco inferior 30°→150° pasando por 90°)
  const [oc0x,oc0y]=P(30,24), [oc1x,oc1y]=P(150,24);
  // marca del ángulo inscrito en B (entre las cuerdas B→C y B→A: 60°→120°)
  const ib0x=+(Bx+28*Math.cos(D(60))).toFixed(1),  ib0y=+(By+28*Math.sin(D(60))).toFixed(1);
  const ib1x=+(Bx+28*Math.cos(D(120))).toFixed(1), ib1y=+(By+28*Math.sin(D(120))).toFixed(1);
  return (
    <svg viewBox="0 0 300 232" width="100%" style={{display:"block",maxHeight:222}}>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="1.8" opacity="0.8"/>
      {/* cuerda AC (mismo arco) */}
      <line x1={Ax} y1={Ay} x2={Cx} y2={Cy} stroke={gr} strokeWidth="2" opacity="0.6"/>
      {/* radios: ángulo central */}
      <line x1={cx} y1={cy} x2={Ax} y2={Ay} stroke={a} strokeWidth="2"/>
      <line x1={cx} y1={cy} x2={Cx} y2={Cy} stroke={a} strokeWidth="2"/>
      {/* cuerdas: ángulo inscrito */}
      <line x1={Bx} y1={By} x2={Ax} y2={Ay} stroke={bl} strokeWidth="2"/>
      <line x1={Bx} y1={By} x2={Cx} y2={Cy} stroke={bl} strokeWidth="2"/>
      <path d={`M ${oc0x},${oc0y} A 24,24 0 0,1 ${oc1x},${oc1y}`} fill="none" stroke={a} strokeWidth="1.8"/>
      <path d={`M ${ib0x},${ib0y} A 28,28 0 0,1 ${ib1x},${ib1y}`} fill="none" stroke={bl} strokeWidth="1.8"/>
      <text x={cx} y={cy+44} fill={a} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">2θ</text>
      <text x={cx} y={By+40} fill={bl} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">θ</text>
      <circle cx={cx} cy={cy} r={3} fill={a}/>
      <text x={cx+6} y={cy-5} fill={a} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic">O</text>
      <circle cx={Bx} cy={By} r={3} fill={bl}/>
      <text x={Bx} y={By-8} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">B</text>
      <circle cx={Ax} cy={Ay} r={3} fill={gr}/>
      <text x={Ax-12} y={Ay+6} fill={gr} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">A</text>
      <circle cx={Cx} cy={Cy} r={3} fill={gr}/>
      <text x={Cx+6} y={Cy+6} fill={gr} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">C</text>
    </svg>
  );
}

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
function TiEj1SVG({ tema }) {
  const cx=95, cy=82, r=62;
  const bl=tema.azul, a=tema.acento, gr=tema.verde;
  const Ax=cx-r, Ay=cy, Cx=cx+r, Cy=cy, Bx=cx, By=cy-r;
  return (
    <svg viewBox="0 0 200 130" width="100%" style={{display:"block",maxHeight:150}}>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="1.8" opacity="0.8"/>
      <polygon points={`${Ax},${Ay} ${Bx},${By} ${Cx},${Cy}`} fill={`${a}22`} stroke={a} strokeWidth="2"/>
      <line x1={Ax} y1={Ay} x2={Cx} y2={Cy} stroke={gr} strokeWidth="2"/>
      <path d={`M ${Bx-10},${By+2} L ${Bx-10},${By+12} L ${Bx},${By+12}`} fill="none" stroke={a} strokeWidth="1.6"/>
      <text x={Ax+16} y={Ay-7} fill={bl} fontSize="12" fontFamily="Georgia,serif">35°</text>
      <text x={Cx-22} y={Cy-7} fill={bl} fontSize="13" fontFamily="Georgia,serif">?</text>
      <text x={cx} y={Cy+18} fill={gr} fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle">diámetro</text>
      <circle cx={cx} cy={cy} r={2.8} fill={gr}/>
    </svg>
  );
}
function TiEj2SVG({ tema }) {
  const cx=105, cy=92, r=68;
  const bl=tema.azul, a=tema.acento, gr=tema.verde;
  const D=(d)=>d*Math.PI/180;
  const P=(deg,R=r)=>[+(cx+R*Math.cos(D(deg))).toFixed(1), +(cy+R*Math.sin(D(deg))).toFixed(1)];
  const [Ax,Ay]=P(150), [Cx,Cy]=P(30), [Bx,By]=P(-90);
  return (
    <svg viewBox="0 0 220 168" width="100%" style={{display:"block",maxHeight:160}}>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="1.8" opacity="0.8"/>
      <line x1={cx} y1={cy} x2={Ax} y2={Ay} stroke={a} strokeWidth="2"/>
      <line x1={cx} y1={cy} x2={Cx} y2={Cy} stroke={a} strokeWidth="2"/>
      <line x1={Bx} y1={By} x2={Ax} y2={Ay} stroke={bl} strokeWidth="2"/>
      <line x1={Bx} y1={By} x2={Cx} y2={Cy} stroke={bl} strokeWidth="2"/>
      <line x1={Ax} y1={Ay} x2={Cx} y2={Cy} stroke={gr} strokeWidth="1.8" opacity="0.6"/>
      <text x={cx} y={cy+38} fill={a} fontSize="13" fontFamily="Georgia,serif" textAnchor="middle">80°</text>
      <text x={cx} y={By+36} fill={bl} fontSize="13" fontFamily="Georgia,serif" textAnchor="middle">?</text>
      <circle cx={cx} cy={cy} r={2.8} fill={a}/>
      <circle cx={Bx} cy={By} r={2.8} fill={bl}/>
    </svg>
  );
}
function TiEj3SVG({ tema }) {
  const cx=92, cy=80, r=60;
  const bl=tema.azul, a=tema.acento, gr=tema.verde;
  // Hipotenusa = diámetro horizontal A–C; B sobre la circunferencia con ángulo recto
  const Ax=cx-r, Ay=cy, Cx=cx+r, Cy=cy;
  // B colocado para que el ángulo en B sea recto (sobre el semicírculo)
  const Bx=cx+24, By=cy-Math.round(Math.sqrt(r*r-24*24));
  return (
    <svg viewBox="0 0 200 132" width="100%" style={{display:"block",maxHeight:150}}>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="1.8" opacity="0.8"/>
      <polygon points={`${Ax},${Ay} ${Bx},${By} ${Cx},${Cy}`} fill={`${a}22`} stroke={a} strokeWidth="2"/>
      <line x1={Ax} y1={Ay} x2={Cx} y2={Cy} stroke={gr} strokeWidth="2"/>
      <line x1={cx} y1={cy} x2={Bx} y2={By} stroke={bl} strokeWidth="1.4" strokeDasharray="4,3" opacity="0.7"/>
      <text x={(Ax+Bx)/2-12} y={(Ay+By)/2} fill={a} fontSize="12" fontFamily="Georgia,serif">6</text>
      <text x={(Cx+Bx)/2+4} y={(Cy+By)/2-2} fill={a} fontSize="12" fontFamily="Georgia,serif">8</text>
      <text x={cx} y={Cy+16} fill={gr} fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle">diámetro</text>
      <text x={(cx+Bx)/2+2} y={(cy+By)/2-3} fill={bl} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic">r</text>
      <circle cx={cx} cy={cy} r={2.8} fill={gr}/>
    </svg>
  );
}

function AnguloCentralSVG({ tema }) {
  const cx=105, cy=110, r=80;
  const bl=tema.azul, a=tema.acento, gr=tema.verde;
  const D=(d)=>d*Math.PI/180;
  const ang0=-90, ang1=-30;
  const x0=+(cx+r*Math.cos(D(ang0))).toFixed(1), y0=+(cy+r*Math.sin(D(ang0))).toFixed(1);
  const x1=+(cx+r*Math.cos(D(ang1))).toFixed(1), y1=+(cy+r*Math.sin(D(ang1))).toFixed(1);
  const arc20=+(cx+20*Math.cos(D(ang0))).toFixed(1), arc2y0=+(cy+20*Math.sin(D(ang0))).toFixed(1);
  const arc21=+(cx+20*Math.cos(D(ang1))).toFixed(1), arc2y1=+(cy+20*Math.sin(D(ang1))).toFixed(1);
  return (
    <svg viewBox="0 0 298 235" width="100%" style={{display:"block",maxHeight:225}}>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="1.8" opacity="0.8"/>
      <path d={`M ${cx},${cy} L ${x0},${y0} A ${r},${r} 0 0,1 ${x1},${y1} Z`} fill={`${a}28`}/>
      <line x1={cx} y1={cy} x2={x0} y2={y0} stroke={a} strokeWidth="2"/>
      <line x1={cx} y1={cy} x2={x1} y2={y1} stroke={a} strokeWidth="2"/>
      {/* Arco en verde para representar la longitud de arco l */}
      <path d={`M ${x0},${y0} A ${r},${r} 0 0,1 ${x1},${y1}`} fill="none" stroke={gr} strokeWidth="4.5" strokeLinecap="round" opacity="0.9"/>
      <path d={`M ${arc20},${arc2y0} A 20,20 0 0,1 ${arc21},${arc2y1}`} fill="none" stroke={a} strokeWidth="1.5" opacity="0.8"/>
      <text x={cx+26} y={cy-22} fill={a} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">θ</text>
      <circle cx={cx} cy={cy} r={3.5} fill={a}/>
      <text x={cx+5} y={cy-5} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">O</text>
      <text x={+x1+10} y={+y1-4} fill={gr} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">l</text>
      {/* Fórmulas con displaystyle separadas verticalmente */}
      <foreignObject x={188} y={42} width={108} height={128}>
        <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize: "13px" }}>
          <div style={{ marginBottom: 24 }}>
            <M>{"\\displaystyle l = \\frac{\\theta}{360^\\circ}\\cdot 2\\pi r"}</M>
          </div>
          <div>
            <M>{"\\displaystyle A = \\frac{\\theta}{360^\\circ}\\cdot \\pi r^2"}</M>
          </div>
        </div>
      </foreignObject>
    </svg>
  );
}

function SectorCircularSVG({ tema }) {
  const cx=105, cy=118, r=84;
  const bl=tema.azul, a=tema.acento;
  const D=(d)=>d*Math.PI/180;
  const ang0=-90, ang1=30;
  const x0=+(cx+r*Math.cos(D(ang0))).toFixed(1), y0=+(cy+r*Math.sin(D(ang0))).toFixed(1);
  const x1=+(cx+r*Math.cos(D(ang1))).toFixed(1), y1=+(cy+r*Math.sin(D(ang1))).toFixed(1);
  const mx=+(cx+r*Math.cos(D(-30))).toFixed(1), my=+(cy+r*Math.sin(D(-30))).toFixed(1);
  return (
    <svg viewBox="0 0 304 240" width="100%" style={{display:"block",maxHeight:230}}>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="1.8" opacity="0.7"/>
      <path d={`M ${cx},${cy} L ${x0},${y0} A ${r},${r} 0 0,1 ${x1},${y1} Z`} fill={`${a}35`} stroke={a} strokeWidth="2"/>
      <circle cx={cx} cy={cy} r={3.5} fill={a}/>
      <text x={cx+5} y={cy-5} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">O</text>
      <text x={(cx + +x0)/2-12} y={(cy + +y0)/2+2} fill={a} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">r</text>
      <text x={(cx + +x1)/2+5} y={(cy + +y1)/2+8} fill={a} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">r</text>
      <text x={cx+24} y={cy-18} fill={a} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">θ</text>
      <text x={+mx+8} y={+my+20} fill={a} fontSize="11" fontFamily="'DM Sans',sans-serif">arco</text>
      {/* Fórmula con A_sector como subíndice y fracción en displaystyle */}
      <foreignObject x={193} y={36} width={109} height={75}>
        <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize: "13px" }}>
          <M>{"\\displaystyle A_{\\text{sector}} = \\frac{\\theta}{360^\\circ}\\,\\pi r^2"}</M>
        </div>
      </foreignObject>
    </svg>
  );
}

function SegmentoCircularSVG({ tema }) {
  const cx=108, cy=112, r=78;
  const bl=tema.azul, a=tema.acento;
  const D=(d)=>d*Math.PI/180;
  const ang0=-140, ang1=-40;
  const x0=+(cx+r*Math.cos(D(ang0))).toFixed(1), y0=+(cy+r*Math.sin(D(ang0))).toFixed(1);
  const x1=+(cx+r*Math.cos(D(ang1))).toFixed(1), y1=+(cy+r*Math.sin(D(ang1))).toFixed(1);
  return (
    <svg viewBox="0 0 252 228" width="100%" style={{display:"block",maxHeight:218}}>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="1.8" opacity="0.7"/>
      <path d={`M ${cx},${cy} L ${x0},${y0} A ${r},${r} 0 0,1 ${x1},${y1} Z`} fill={tema.azulSuave} stroke={bl} strokeWidth="1.5"/>
      <path d={`M ${x0},${y0} A ${r},${r} 0 0,1 ${x1},${y1} Z`} fill={`${a}38`} stroke={a} strokeWidth="2"/>
      <line x1={x0} y1={y0} x2={x1} y2={y1} stroke={bl} strokeWidth="2.2" opacity="0.9"/>
      <line x1={cx} y1={cy} x2={x0} y2={y0} stroke={bl} strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6"/>
      <line x1={cx} y1={cy} x2={x1} y2={y1} stroke={bl} strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6"/>
      <circle cx={cx} cy={cy} r={3.5} fill={bl}/>
      <text x={cx+5} y={cy+5} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">O</text>
      <text x={(+x0 + +x1)/2} y={(+y0 + +y1)/2 - 13} fill={a} fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle" fontWeight="600">segmento</text>
      <text x={172} y={68} fill={a} fontSize="11" fontFamily="'DM Sans',sans-serif">A = A₍sector₎</text>
      <text x={172} y={84} fill={a} fontSize="11" fontFamily="'DM Sans',sans-serif">   − A₍△₎</text>
    </svg>
  );
}

function TangenteExteriorSVG({ tema }) {
  const cx=200, cy=90, r=54;
  const px=22, py=90;
  const bl=tema.azul, a=tema.acento, gr=tema.verde;
  const dist=Math.sqrt((cx-px)**2+(cy-py)**2);
  const tanLen=Math.sqrt(dist*dist-r*r);
  const ang=Math.asin(r/dist);
  const TAx=+(px+tanLen*Math.cos(-ang)).toFixed(1);
  const TAy=+(py+tanLen*Math.sin(-ang)).toFixed(1);
  const TBx=+(px+tanLen*Math.cos(ang)).toFixed(1);
  const TBy=+(py+tanLen*Math.sin(ang)).toFixed(1);
  return (
    <svg viewBox="0 0 300 180" width="100%" style={{display:"block",maxHeight:175}}>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="2"/>
      <line x1={px} y1={py} x2={TAx} y2={TAy} stroke={gr} strokeWidth="2.2" opacity="0.9"/>
      <line x1={px} y1={py} x2={TBx} y2={TBy} stroke={gr} strokeWidth="2.2" opacity="0.9"/>
      <line x1={cx} y1={cy} x2={TAx} y2={TAy} stroke={bl} strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6"/>
      <line x1={cx} y1={cy} x2={TBx} y2={TBy} stroke={bl} strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6"/>
      <line x1={px} y1={py} x2={cx} y2={cy} stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" strokeDasharray="3,4"/>
      <text x={(px + +TAx)/2 - 14} y={(py + +TAy)/2 - 6} fill={gr} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">PA</text>
      <text x={(px + +TBx)/2 - 14} y={(py + +TBy)/2 + 16} fill={gr} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">PB</text>
      <text x={80} y={94} fill="rgba(255,255,255,0.45)" fontSize="18" fontFamily="Georgia,serif">=</text>
      <circle cx={px} cy={py} r={4} fill={a}/>
      <text x={px-16} y={py+5} fill={a} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">P</text>
      <circle cx={cx} cy={cy} r={3.5} fill={bl}/>
      <text x={cx+5} y={cy-4} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">O</text>
      <circle cx={+TAx} cy={+TAy} r={3.5} fill={gr} opacity="0.9"/>
      <circle cx={+TBx} cy={+TBy} r={3.5} fill={gr} opacity="0.9"/>
      <text x={+TAx+5} y={+TAy-5} fill={gr} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">A</text>
      <text x={+TBx+5} y={+TBy+14} fill={gr} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">B</text>
    </svg>
  );
}

function AreasEstrategiaSVG({ tema }) {
  const bl=tema.azul, a=tema.acento;
  return (
    <svg viewBox="0 0 320 138" width="100%" style={{display:"block",maxHeight:130}}>
      <circle cx={55} cy={68} r={50} fill={`${a}28`} stroke={a} strokeWidth="2"/>
      <text x={120} y={78} fill="rgba(255,255,255,0.55)" fontSize="30" fontFamily="'DM Sans',sans-serif" fontWeight="300">−</text>
      <circle cx={175} cy={68} r={30} fill={tema.azulSuave} stroke={bl} strokeWidth="2"/>
      <text x={220} y={76} fill="rgba(255,255,255,0.55)" fontSize="26" fontFamily="'DM Sans',sans-serif" fontWeight="300">=</text>
      <path fillRule="evenodd" fill={`${a}28`} stroke={a} strokeWidth="1.5"
        d="M 212,68 A 42,42 0 1,0 296,68 A 42,42 0 1,0 212,68 M 228,68 A 26,26 0 1,1 280,68 A 26,26 0 1,1 228,68"/>
      <text x={55} y={133} fill={a} fontSize="10" fontFamily="'DM Sans',sans-serif" textAnchor="middle">figura grande</text>
      <text x={175} y={111} fill={bl} fontSize="10" fontFamily="'DM Sans',sans-serif" textAnchor="middle">interior</text>
      <text x={254} y={123} fill={a} fontSize="10" fontFamily="'DM Sans',sans-serif" textAnchor="middle">sombreado</text>
    </svg>
  );
}

// ── Círculo: ejercicios básicos SVG ──────────────────────────────────────────

function Cce1RadioSVG({ tema }) {
  const cx=100, cy=80, r=63;
  const bl=tema.azul, a=tema.acento;
  return (
    <svg viewBox="0 0 220 162" width="100%" style={{display:"block",maxHeight:152}}>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="2"/>
      <circle cx={cx} cy={cy} r={3.5} fill={a}/>
      <text x={cx+4} y={cy-4} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">O</text>
      <text x={cx} y={cy+20} fill={a} fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">C = 20π cm</text>
      <text x={cx} y={cy+38} fill="rgba(255,255,255,0.38)" fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle">r = ?   →   A = ?</text>
    </svg>
  );
}

function Cce2SectorSVG({ tema }) {
  const cx=96, cy=118, r=86;
  const a=tema.acento, bl=tema.azul;
  const D=(d)=>d*Math.PI/180;
  const x0=+(cx+r*Math.cos(D(-90))).toFixed(1), y0=+(cy+r*Math.sin(D(-90))).toFixed(1);
  const x1=+(cx+r*Math.cos(D(30))).toFixed(1),  y1=+(cy+r*Math.sin(D(30))).toFixed(1);
  return (
    <svg viewBox="0 0 234 218" width="100%" style={{display:"block",maxHeight:208}}>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="1.5" opacity="0.6"/>
      <path d={`M ${cx},${cy} L ${x0},${y0} A ${r},${r} 0 0,1 ${x1},${y1} Z`} fill={`${a}38`} stroke={a} strokeWidth="2"/>
      <circle cx={cx} cy={cy} r={3.5} fill={a}/>
      <text x={cx+5} y={cy-5} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">O</text>
      <text x={(cx + +x0)/2-16} y={(cy + +y0)/2} fill={a} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">r=6</text>
      <text x={cx+24} y={cy-20} fill={a} fontSize="12" fontFamily="'DM Sans',sans-serif">120°</text>
      <text x={+x1+6} y={+y1+6} fill={a} fontSize="11" fontFamily="'DM Sans',sans-serif">A=?</text>
    </svg>
  );
}

function Cce3ArcoSVG({ tema }) {
  const cx=108, cy=116, r=82;
  const a=tema.acento, bl=tema.azul, gr=tema.verde;
  const D=(d)=>d*Math.PI/180;
  const x0=+(cx+r*Math.cos(D(-90))).toFixed(1), y0=+(cy+r*Math.sin(D(-90))).toFixed(1);
  const x1=+(cx+r*Math.cos(D(-10))).toFixed(1), y1=+(cy+r*Math.sin(D(-10))).toFixed(1);
  return (
    <svg viewBox="0 0 248 228" width="100%" style={{display:"block",maxHeight:218}}>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="1.5" opacity="0.6"/>
      <path d={`M ${x0},${y0} A ${r},${r} 0 0,1 ${x1},${y1}`} fill="none" stroke={gr} strokeWidth="4.5" strokeLinecap="round" opacity="0.9"/>
      <line x1={cx} y1={cy} x2={x0} y2={y0} stroke={bl} strokeWidth="1.5" strokeDasharray="4,3" opacity="0.55"/>
      <line x1={cx} y1={cy} x2={x1} y2={y1} stroke={bl} strokeWidth="1.5" strokeDasharray="4,3" opacity="0.55"/>
      <circle cx={cx} cy={cy} r={3.5} fill={a}/>
      <text x={cx+5} y={cy-4} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">O</text>
      <text x={(cx + +x1)/2+8} y={(cy + +y1)/2+2} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">r=9</text>
      <text x={cx+24} y={cy-26} fill={a} fontSize="12" fontFamily="'DM Sans',sans-serif">80°</text>
      <text x={+x1+8} y={+y1-6} fill={gr} fontSize="12" fontFamily="'DM Sans',sans-serif">l=?</text>
    </svg>
  );
}

function Cce4TangSVG({ tema }) {
  const cx=190, cy=90, r=46;
  const px=28, py=90;
  const bl=tema.azul, a=tema.acento, gr=tema.verde;
  const dist=Math.sqrt((cx-px)**2+(cy-py)**2);
  const tanLen=Math.sqrt(dist*dist-r*r);
  const ang=Math.asin(r/dist);
  const TAx=+(px+tanLen*Math.cos(-ang)).toFixed(1);
  const TAy=+(py+tanLen*Math.sin(-ang)).toFixed(1);
  const TBx=+(px+tanLen*Math.cos(ang)).toFixed(1);
  const TBy=+(py+tanLen*Math.sin(ang)).toFixed(1);
  return (
    <svg viewBox="0 0 262 180" width="100%" style={{display:"block",maxHeight:175}}>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="2"/>
      <line x1={px} y1={py} x2={TAx} y2={TAy} stroke={gr} strokeWidth="2" opacity="0.85"/>
      <line x1={px} y1={py} x2={TBx} y2={TBy} stroke={gr} strokeWidth="2" opacity="0.85"/>
      <line x1={cx} y1={cy} x2={TAx} y2={TAy} stroke={bl} strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6"/>
      <line x1={cx} y1={cy} x2={TBx} y2={TBy} stroke={bl} strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6"/>
      <line x1={px} y1={py} x2={cx} y2={cy} stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" strokeDasharray="3,4"/>
      <circle cx={px} cy={py} r={4} fill={a}/>
      <text x={px-16} y={py+5} fill={a} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">P</text>
      <circle cx={cx} cy={cy} r={3.5} fill={bl}/>
      <text x={cx+5} y={cy-4} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">O</text>
      <circle cx={+TAx} cy={+TAy} r={3} fill={gr} opacity="0.85"/>
      <circle cx={+TBx} cy={+TBy} r={3} fill={gr} opacity="0.85"/>
      <text x={+TAx+4} y={+TAy-5} fill={gr} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">A</text>
      <text x={(cx+px)/2+2} y={py-8} fill="rgba(255,255,255,0.48)" fontSize="11" fontFamily="'DM Sans',sans-serif">PO = 13</text>
      <text x={(cx+px)/2+2} y={py+18} fill={bl} fontSize="11" fontFamily="'DM Sans',sans-serif">r = 5</text>
    </svg>
  );
}

// ── Áreas sombreadas: SVG ─────────────────────────────────────────────────────

function As1CuadCircSVG({ tema }) {
  const sq_x=16, sq_y=8, sq_w=164, sq_h=164;
  const cx=sq_x+sq_w/2, cy=sq_y+sq_h/2, r=sq_w/2;
  const a=tema.acento, bl=tema.azul;
  return (
    <svg viewBox="0 0 200 200" width="100%" style={{display:"block",maxHeight:195}}>
      <path d={`M ${sq_x},${sq_y} H ${sq_x+sq_w} V ${sq_y+sq_h} H ${sq_x} Z M ${cx-r},${cy} A ${r},${r} 0 1,0 ${cx+r},${cy} A ${r},${r} 0 1,0 ${cx-r},${cy}`}
        fillRule="evenodd" fill={`${a}32`}/>
      <rect x={sq_x} y={sq_y} width={sq_w} height={sq_h} fill="none" stroke={a} strokeWidth="2"/>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={bl} strokeWidth="2"/>
      <line x1={cx} y1={cy} x2={cx+r} y2={cy} stroke={bl} strokeWidth="1.5" strokeDasharray="4,3" opacity="0.7"/>
      <text x={cx+r/2} y={cy-7} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">r=7</text>
      <text x={cx} y={sq_y+sq_h+16} fill={a} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">l = 14 cm</text>
    </svg>
  );
}

function As2CoronaSVG({ tema }) {
  const cx=100, cy=90;
  const R=76, rr=46;
  const a=tema.acento, bl=tema.azul;
  return (
    <svg viewBox="0 0 200 182" width="100%" style={{display:"block",maxHeight:175}}>
      <path d={`M ${cx-R},${cy} A ${R},${R} 0 1,0 ${cx+R},${cy} A ${R},${R} 0 1,0 ${cx-R},${cy} M ${cx-rr},${cy} A ${rr},${rr} 0 1,1 ${cx+rr},${cy} A ${rr},${rr} 0 1,1 ${cx-rr},${cy}`}
        fillRule="evenodd" fill={`${a}32`}/>
      <circle cx={cx} cy={cy} r={R} fill="none" stroke={a} strokeWidth="2"/>
      <circle cx={cx} cy={cy} r={rr} fill="none" stroke={bl} strokeWidth="2"/>
      <circle cx={cx} cy={cy} r={3.5} fill={bl}/>
      <line x1={cx} y1={cy} x2={cx+rr} y2={cy} stroke={bl} strokeWidth="1.5" strokeDasharray="3,3" opacity="0.7"/>
      <text x={cx+rr/2} y={cy-7} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">r=6</text>
      <line x1={cx+rr} y1={cy} x2={cx+R} y2={cy} stroke={a} strokeWidth="1.5" strokeDasharray="3,3" opacity="0.7"/>
      <text x={cx+(rr+R)/2} y={cy-7} fill={a} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">R=10</text>
    </svg>
  );
}

function As3SemiRectSVG({ tema }) {
  const rx=26, ry=42, rw=248, rh=92, r=46;
  const cy=ry+rh/2;
  const a=tema.acento, bl=tema.azul;
  return (
    <svg viewBox="0 0 300 175" width="100%" style={{display:"block",maxHeight:168}}>
      <path d={`M ${rx},${ry} H ${rx+rw} V ${ry+rh} H ${rx} Z M ${rx},${cy-r} A ${r},${r} 0 0,1 ${rx},${cy+r} Z M ${rx+rw},${cy-r} A ${r},${r} 0 0,0 ${rx+rw},${cy+r} Z`}
        fillRule="evenodd" fill={`${a}32`} stroke={a} strokeWidth="1.5"/>
      <rect x={rx} y={ry} width={rw} height={rh} fill="none" stroke={bl} strokeWidth="1.5" strokeDasharray="5,3" opacity="0.5"/>
      <text x={rx+rw/2} y={ry-10} fill={a} fontSize="13" fontFamily="'DM Sans',sans-serif" textAnchor="middle" fontWeight="600">16 cm</text>
      <text x={rx+rw+12} y={cy+5} fill={bl} fontSize="12" fontFamily="'DM Sans',sans-serif">6 cm</text>
      <text x={rx-14} y={cy+22} fill={bl} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">r=3</text>
    </svg>
  );
}

function As4SectorTriSVG({ tema }) {
  const cx=44, cy=180, r=135;
  const a=tema.acento, bl=tema.azul;
  const x_right=cx+r, y_right=cy;
  const x_up=cx, y_up=cy-r;
  return (
    <svg viewBox="0 0 240 230" width="100%" style={{display:"block",maxHeight:222}}>
      <path d={`M ${x_right},${y_right} A ${r},${r} 0 0,0 ${x_up},${y_up} Z`} fill={`${a}38`} stroke="none"/>
      <polygon points={`${cx},${cy} ${x_right},${y_right} ${x_up},${y_up}`} fill={tema.azulSuave} stroke={bl} strokeWidth="1.8"/>
      <path d={`M ${cx+18},${cy} L ${cx+18},${cy-18} L ${cx},${cy-18}`} fill="none" stroke="rgba(255,255,255,0.42)" strokeWidth="1.5"/>
      <path d={`M ${x_right},${y_right} A ${r},${r} 0 0,0 ${x_up},${y_up}`} fill="none" stroke={a} strokeWidth="2.5"/>
      <circle cx={cx} cy={cy} r={3.5} fill={a}/>
      <text x={cx+6} y={cy-6} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">O</text>
      <text x={(cx+x_right)/2} y={cy+16} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">r=6</text>
      <text x={cx-18} y={(cy+y_up)/2} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">r=6</text>
      <text x={cx+26} y={cy-22} fill={a} fontSize="13" fontFamily="'DM Sans',sans-serif">90°</text>
      <text x={(x_right+x_up)/2+12} y={(y_right+y_up)/2-22} fill={a} fontSize="11" fontFamily="'DM Sans',sans-serif">segmento</text>
    </svg>
  );
}

function As5TrapSemiSVG({ tema }) {
  const sc=17;
  const B=10*sc, b=4*sc, h=8*sc;
  const cx=131, cyBot=164;
  const bx_l=cx-B/2, bx_r=cx+B/2;
  const tx_l=cx-b/2, tx_r=cx+b/2;
  const cyTop=cyBot-h;
  const rSemi=B/2;
  const a=tema.acento, bl=tema.azul;
  return (
    <svg viewBox="0 0 230 262" width="100%" style={{display:"block",maxHeight:258}}>
      <polygon points={`${bx_l},${cyBot} ${bx_r},${cyBot} ${tx_r},${cyTop} ${tx_l},${cyTop}`} fill={tema.azulSuave} stroke={bl} strokeWidth="2"/>
      <path d={`M ${bx_l},${cyBot} A ${rSemi},${rSemi} 0 0,0 ${bx_r},${cyBot}`} fill={`${a}30`} stroke={a} strokeWidth="2"/>
      <text x={cx} y={cyTop-10} fill={bl} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">b = 4 cm</text>
      <text x={cx} y={cyBot+22} fill={a} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">B = 10 cm</text>
      <line x1={bx_l-14} y1={cyBot} x2={bx_l-14} y2={cyTop} stroke="rgba(255,255,255,0.32)" strokeWidth="1" strokeDasharray="3,3"/>
      <text x={bx_l-18} y={(cyBot+cyTop)/2+4} fill={bl} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">h=8</text>
      <text x={cx} y={cyBot+54} fill={a} fontSize="13" fontFamily="'DM Sans',sans-serif" textAnchor="middle" opacity="0.85">A = πr²/2</text>
    </svg>
  );
}

function As6HexCircSVG({ tema }) {
  const cx=112, cy=112, r=82;
  const a=tema.acento, bl=tema.azul;
  const hex=Array.from({length:6},(_,i)=>{
    const ang=-Math.PI/2+i*Math.PI/3;
    return `${+(cx+r*Math.cos(ang)).toFixed(1)},${+(cy+r*Math.sin(ang)).toFixed(1)}`;
  });
  const hexPoints=hex.join(' ');
  return (
    <svg viewBox="0 0 238 232" width="100%" style={{display:"block",maxHeight:222}}>
      <circle cx={cx} cy={cy} r={r} fill={`${a}22`} stroke={a} strokeWidth="1.8" opacity="0.85"/>
      <polygon points={hexPoints} fill={tema.azulSuave} stroke={bl} strokeWidth="2"/>
      <text x={cx} y={cy+5} fill={bl} fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle" opacity="0.65">Hexágono</text>
      <text x={cx} y={cy+20} fill={bl} fontSize="10" fontFamily="'DM Sans',sans-serif" textAnchor="middle" opacity="0.45">l = r = 6 cm</text>
      {(() => {
        const [hx,hy]=hex[0].split(',').map(Number);
        return (
          <>
            <line x1={cx} y1={cy} x2={hx} y2={hy} stroke={a} strokeWidth="1.5" strokeDasharray="4,3" opacity="0.7"/>
            <text x={(cx+hx)/2+5} y={(cy+hy)/2+2} fill={a} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">r=6</text>
          </>
        );
      })()}
    </svg>
  );
}

function As7TriCircSVG({ tema }) {
  const sc=14;
  const a6=6*sc, a8=8*sc;
  const C=[136, 182];
  const B=[C[0], C[1]-a8];
  const Av=[C[0]-a6, C[1]];
  const hCx=(B[0]+Av[0])/2, hCy=(B[1]+Av[1])/2;
  const hypLen=Math.sqrt((B[0]-Av[0])**2+(B[1]-Av[1])**2);
  const rSemi=hypLen/2;
  const a=tema.acento, bl=tema.azul;
  return (
    <svg viewBox="0 0 192 212" width="100%" style={{display:"block",maxHeight:205}}>
      <path d={`M ${Av[0].toFixed(1)},${Av[1].toFixed(1)} A ${rSemi.toFixed(1)},${rSemi.toFixed(1)} 0 0,1 ${B[0].toFixed(1)},${B[1].toFixed(1)}`}
        fill={`${a}30`} stroke={a} strokeWidth="2"/>
      <polygon points={`${C[0]},${C[1]} ${B[0].toFixed(1)},${B[1].toFixed(1)} ${Av[0].toFixed(1)},${Av[1].toFixed(1)}`}
        fill={tema.azulSuave} stroke={bl} strokeWidth="2"/>
      <path d={`M ${C[0]-14},${C[1]} L ${C[0]-14},${C[1]-14} L ${C[0]},${C[1]-14}`} fill="none" stroke="rgba(255,255,255,0.42)" strokeWidth="1.5"/>
      <text x={C[0]+10} y={(C[1]+B[1])/2} fill={bl} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic">6 cm</text>
      <text x={(C[0]+Av[0])/2} y={C[1]+18} fill={bl} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">8 cm</text>
      <text x={hCx+18} y={hCy+14} fill={a} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">c=10</text>
      <text x={hCx-26} y={hCy-18} fill={a} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">r=5</text>
    </svg>
  );
}

function As8ComplejoSVG({ tema }) {
  const sc=11;
  const rW=12*sc, rH=8*sc;
  const rX=38, rY=30;
  const rSemi=rH/2;                 // diámetro = lado corto (8 cm) ⇒ r = 4 cm
  const a=tema.acento, bl=tema.azul, gr=tema.verde;
  const triH=5*sc;
  const ex=rX+rW;                   // borde derecho del rectángulo
  const cyMid=rY+rH/2;
  return (
    <svg viewBox="0 0 230 150" width="100%" style={{display:"block",maxHeight:148}}>
      <rect x={rX} y={rY} width={rW} height={rH} fill={`${bl}22`} stroke={bl} strokeWidth="2"/>
      {/* Semicircunferencia adosada al ras del lado corto derecho (bulge a la derecha) */}
      <path d={`M ${ex},${rY} A ${rSemi},${rSemi} 0 0,1 ${ex},${rY+rH}`}
        fill={`${a}28`} stroke={a} strokeWidth="2"/>
      <polygon points={`${rX},${rY+rH} ${rX+rW},${rY+rH} ${rX+rW/2},${rY+rH-triH}`}
        fill="rgba(0,0,0,0.38)" stroke={gr} strokeWidth="1.5" strokeDasharray="5,3"/>
      <text x={rX+rW/2} y={rY-10} fill={bl} fontSize="13" fontFamily="'DM Sans',sans-serif" textAnchor="middle">12 cm</text>
      <text x={rX-8} y={cyMid+4} fill={bl} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">8 cm</text>
      <text x={rX+rW/2} y={rY+rH-triH/3+4} fill={gr} fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle" opacity="0.8">quitar △</text>
      <text x={ex+rSemi*0.42} y={cyMid-3} fill={a} fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle">semic.</text>
      <text x={ex+rSemi*0.42} y={cyMid+13} fill={a} fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle">r = 4</text>
    </svg>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// PROBABILIDAD
// ════════════════════════════════════════════════════════════════════════════

// Posiciones de los puntos de un dado dentro de una celda unitaria (0–1).
const DADO_PIPS = {
  1: [[0.5, 0.5]],
  2: [[0.28, 0.28], [0.72, 0.72]],
  3: [[0.28, 0.28], [0.5, 0.5], [0.72, 0.72]],
  4: [[0.28, 0.28], [0.72, 0.28], [0.28, 0.72], [0.72, 0.72]],
  5: [[0.28, 0.28], [0.72, 0.28], [0.5, 0.5], [0.28, 0.72], [0.72, 0.72]],
  6: [[0.28, 0.28], [0.28, 0.5], [0.28, 0.72], [0.72, 0.28], [0.72, 0.5], [0.72, 0.72]],
};

function DadoSVG({ x, y, s, n, color, fill, stroke, rPip }) {
  const r = rPip || s * 0.07;
  return (
    <g>
      <rect x={x} y={y} width={s} height={s} rx={s * 0.18} fill={fill} stroke={stroke} strokeWidth="2"/>
      {DADO_PIPS[n].map(([fx, fy], i) => (
        <circle key={i} cx={x + fx * s} cy={y + fy * s} r={r} fill={color}/>
      ))}
    </g>
  );
}

function ProbabilidadPortadaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul;
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 132, maxWidth: 320 }}>
      {/* Moneda detrás */}
      <circle cx="176" cy="62" r="42" fill={tema.azulSuave} stroke={bl} strokeWidth="2.5"/>
      <circle cx="176" cy="62" r="33" fill="none" stroke={bl} strokeWidth="1" opacity="0.5"/>
      <text x="176" y="76" fill={bl} fontSize="38" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">?</text>
      {/* Dado (cara 5) */}
      <DadoSVG x={30} y={24} s={78} n={5} color={a} fill={tema.acentoSuave} stroke={a} rPip={6}/>
    </svg>
  );
}

function EspacioMuestralSVG({ tema }) {
  const a = tema.acento, bl = tema.azul;
  const s = 38, y = 22, gap = 7;
  const x0 = 8;
  return (
    <svg viewBox="0 0 278 96" width="100%" style={{ display: "block", maxHeight: 110 }}>
      {[1, 2, 3, 4, 5, 6].map((n, i) => {
        const par = n % 2 === 0;
        const x = x0 + i * (s + gap);
        return (
          <DadoSVG
            key={n}
            x={x} y={y} s={s} n={n}
            color={par ? a : tema.muted}
            fill={par ? tema.acentoSuave : tema.card}
            stroke={par ? a : tema.border}
            rPip={3}
          />
        );
      })}
      <text x={x0 + 3 * (s + gap) - gap / 2} y={y + s + 22} fill={a} fontSize="12" fontFamily="'DM Sans',sans-serif" textAnchor="middle">
        Ω = {"{1…6}"} · evento E = {"{2, 4, 6}"}
      </text>
    </svg>
  );
}

function EscalaProbabilidadSVG({ tema }) {
  const a = tema.acento, gr = tema.verde, rj = tema.rojo;
  const x0 = 40, x1 = 280, y = 56;
  const X = (f) => x0 + f * (x1 - x0);
  const ticks = [0, 0.25, 0.5, 0.75, 1];
  return (
    <svg viewBox="0 0 320 104" width="100%" style={{ display: "block", maxHeight: 120 }}>
      <defs>
        <linearGradient id="prob-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={rj}/>
          <stop offset="50%" stopColor={a}/>
          <stop offset="100%" stopColor={gr}/>
        </linearGradient>
      </defs>
      <line x1={x0} y1={y} x2={x1} y2={y} stroke="url(#prob-grad)" strokeWidth="5" strokeLinecap="round"/>
      {ticks.map((f) => (
        <line key={f} x1={X(f)} y1={y - 7} x2={X(f)} y2={y + 7} stroke={tema.texto} strokeWidth="1.5" opacity="0.55"/>
      ))}
      <text x={X(0)} y={y + 24} fill={tema.texto} fontSize="13" fontFamily="Georgia,serif" textAnchor="middle">0</text>
      <text x={X(0.5)} y={y + 24} fill={tema.texto} fontSize="13" fontFamily="Georgia,serif" textAnchor="middle">½</text>
      <text x={X(1)} y={y + 24} fill={tema.texto} fontSize="13" fontFamily="Georgia,serif" textAnchor="middle">1</text>
      <text x={X(0)} y={y - 15} fill={rj} fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle">imposible</text>
      <text x={X(0.5)} y={y - 15} fill={a} fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle">50 / 50</text>
      <text x={X(1)} y={y - 15} fill={gr} fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle">seguro</text>
    </svg>
  );
}

// Rejilla 6×6 de dos dados (36 resultados; diagonal suma = 7 resaltada).
function DosDadosSVG({ tema }) {
  const a = tema.acento, bl = tema.azul;
  const s = 22, gx = 40, gy = 26;
  const cells = [];
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      const fav = (i + 1) + (j + 1) === 7;
      cells.push(
        <rect key={`c${i}-${j}`} x={gx + j * s} y={gy + i * s} width={s - 2} height={s - 2} rx={3}
          fill={fav ? `${a}40` : tema.azulSuave} stroke={fav ? a : tema.border} strokeWidth={fav ? 1.5 : 1}/>
      );
    }
  }
  const labels = [];
  for (let k = 0; k < 6; k++) {
    labels.push(<text key={`t${k}`} x={gx + k * s + (s - 2) / 2} y={gy - 7} fill={bl} fontSize="10" fontFamily="'DM Sans',sans-serif" textAnchor="middle">{k + 1}</text>);
    labels.push(<text key={`l${k}`} x={gx - 9} y={gy + k * s + (s - 2) / 2 + 3} fill={a} fontSize="10" fontFamily="'DM Sans',sans-serif" textAnchor="middle">{k + 1}</text>);
  }
  return (
    <svg viewBox="0 0 196 176" width="100%" style={{ display: "block", maxHeight: 188 }}>
      {cells}{labels}
      <text x={gx + 3 * s} y={gy + 6 * s + 16} fill={a} fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle">suma = 7 → 6 de 36</text>
    </svg>
  );
}

// Permutaciones (orden importa) vs combinaciones (orden no importa), eligiendo 2 de {A,B,C}.
function OrdenImportaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, gr = tema.verde, T = tema.texto;
  const tEst = { fontFamily: "'DM Sans',sans-serif" };
  return (
    <svg viewBox="0 0 300 118" width="100%" style={{ display: "block", maxHeight: 130 }}>
      <line x1="150" y1="8" x2="150" y2="110" stroke={tema.border} strokeWidth="1"/>
      {/* Permutaciones */}
      <text x="74" y="20" fill={bl} fontSize="12" fontWeight="700" textAnchor="middle" style={tEst}>Permutación · P(3,2)=6</text>
      <text x="74" y="52" fill={T} fontSize="15" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">AB   BA   AC</text>
      <text x="74" y="78" fill={T} fontSize="15" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">CA   BC   CB</text>
      <text x="74" y="102" fill={tema.muted} fontSize="10" textAnchor="middle" style={tEst}>el orden cuenta</text>
      {/* Combinaciones */}
      <text x="226" y="20" fill={gr} fontSize="12" fontWeight="700" textAnchor="middle" style={tEst}>Combinación · C(3,2)=3</text>
      <text x="226" y="48" fill={T} fontSize="15" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">{"{A,B}"}</text>
      <text x="226" y="70" fill={T} fontSize="15" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">{"{A,C}   {B,C}"}</text>
      <text x="226" y="102" fill={tema.muted} fontSize="10" textAnchor="middle" style={tEst}>el orden no cuenta</text>
    </svg>
  );
}

// ─── Árbol del principio multiplicativo (2 platos × 3 bebidas) con React Flow ──
const PROB_HANDLE_OCULTO = { background: 'transparent', border: 'none', width: 6, height: 6 };

function ProbNodo({ data }) {
  const col = data.col || '#3b9eff';
  return (
    <div style={{ padding: '5px 12px', borderRadius: 8, minWidth: 52, background: `${col}1a`, border: `1.5px solid ${col}80`, fontSize: 11, color: data.t, textAlign: 'center', fontWeight: 600, whiteSpace: 'nowrap' }}>
      <Handle type="target" position={Position.Left} style={PROB_HANDLE_OCULTO} />
      {data.label}
      <Handle type="source" position={Position.Right} style={PROB_HANDLE_OCULTO} />
    </div>
  );
}
const PROB_NODE_TYPES = { probnodo: ProbNodo };

function ProbArbolMultiplicativo({ tema }) {
  const T = tema.texto, a = tema.acento, bl = tema.azul, gr = tema.verde;
  const eStyle = { stroke: 'rgba(255,255,255,0.28)', strokeWidth: 1.4 };
  const nodes = [
    { id: 'root', type: 'probnodo', position: { x: 0,   y: 128 }, data: { label: 'Menú',   t: T, col: a } },
    { id: 'p1',   type: 'probnodo', position: { x: 130, y: 58  }, data: { label: 'Pollo',  t: T, col: bl } },
    { id: 'p2',   type: 'probnodo', position: { x: 130, y: 198 }, data: { label: 'Pasta',  t: T, col: bl } },
    { id: 'b1',   type: 'probnodo', position: { x: 280, y: 18  }, data: { label: 'Agua',     t: T, col: gr } },
    { id: 'b2',   type: 'probnodo', position: { x: 280, y: 58  }, data: { label: 'Jugo',     t: T, col: gr } },
    { id: 'b3',   type: 'probnodo', position: { x: 280, y: 98  }, data: { label: 'Refresco', t: T, col: gr } },
    { id: 'b4',   type: 'probnodo', position: { x: 280, y: 158 }, data: { label: 'Agua',     t: T, col: gr } },
    { id: 'b5',   type: 'probnodo', position: { x: 280, y: 198 }, data: { label: 'Jugo',     t: T, col: gr } },
    { id: 'b6',   type: 'probnodo', position: { x: 280, y: 238 }, data: { label: 'Refresco', t: T, col: gr } },
  ];
  const edges = [
    { id: 'e1', source: 'root', target: 'p1', style: eStyle },
    { id: 'e2', source: 'root', target: 'p2', style: eStyle },
    { id: 'e3', source: 'p1', target: 'b1', style: eStyle },
    { id: 'e4', source: 'p1', target: 'b2', style: eStyle },
    { id: 'e5', source: 'p1', target: 'b3', style: eStyle },
    { id: 'e6', source: 'p2', target: 'b4', style: eStyle },
    { id: 'e7', source: 'p2', target: 'b5', style: eStyle },
    { id: 'e8', source: 'p2', target: 'b6', style: eStyle },
  ];
  return (
    <div style={{ width: '100%', height: 248 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={PROB_NODE_TYPES}
        fitView
        fitViewOptions={{ padding: 0.12 }}
        nodesDraggable={false}
        nodesConnectable={false}
        nodesFocusable={false}
        edgesFocusable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
        style={{ background: 'transparent' }}
      />
    </div>
  );
}

// Evento complementario: Ω (rectángulo) con E (círculo) y su complemento E′.
function ComplementoSVG({ tema }) {
  const a = tema.acento, bl = tema.azul;
  return (
    <svg viewBox="0 0 250 140" width="100%" style={{ display: "block", maxHeight: 150 }}>
      <rect x="10" y="18" width="230" height="104" rx="8" fill={tema.azulSuave} stroke={bl} strokeWidth="1.6"/>
      <text x="228" y="36" fill={bl} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">Ω</text>
      <circle cx="80" cy="72" r="42" fill={`${a}33`} stroke={a} strokeWidth="2"/>
      <text x="80" y="78" fill={a} fontSize="17" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="180" y="98" fill={bl} fontSize="16" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E′</text>
      <text x="180" y="115" fill={tema.muted} fontSize="9.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">«E no ocurre»</text>
    </svg>
  );
}

// Regla de la suma: excluyentes (disjuntos) vs no excluyentes (con intersección).
function ReglaSumaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, gr = tema.verde, T = tema.texto;
  return (
    <svg viewBox="0 0 320 150" width="100%" style={{ display: "block", maxHeight: 155 }}>
      <defs>
        <clipPath id="clip-suma-E"><circle cx="208" cy="58" r="34"/></clipPath>
      </defs>
      {/* Izquierda: mutuamente excluyentes */}
      <circle cx="46" cy="58" r="30" fill={`${a}26`} stroke={a} strokeWidth="2"/>
      <circle cx="112" cy="58" r="30" fill={`${bl}26`} stroke={bl} strokeWidth="2"/>
      <text x="46" y="63" fill={a} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="112" y="63" fill={bl} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">F</text>
      <text x="79" y="110" fill={T} fontSize="10.5" textAnchor="middle" fontFamily="'DM Sans',sans-serif">excluyentes</text>
      <text x="79" y="126" fill={tema.muted} fontSize="9.5" textAnchor="middle" fontFamily="'DM Sans',sans-serif">P(E∪F)=P(E)+P(F)</text>
      {/* Divisor */}
      <line x1="160" y1="14" x2="160" y2="136" stroke={tema.border} strokeWidth="1"/>
      {/* Derecha: no excluyentes (intersección resaltada) */}
      <circle cx="208" cy="58" r="34" fill={`${a}22`} stroke={a} strokeWidth="2"/>
      <circle cx="256" cy="58" r="34" fill={`${bl}22`} stroke={bl} strokeWidth="2"/>
      <circle cx="256" cy="58" r="34" fill={`${gr}66`} clipPath="url(#clip-suma-E)"/>
      <text x="194" y="63" fill={a} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="270" y="63" fill={bl} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">F</text>
      <text x="232" y="110" fill={T} fontSize="10.5" textAnchor="middle" fontFamily="'DM Sans',sans-serif">no excluyentes</text>
      <text x="232" y="126" fill={gr} fontSize="9.5" textAnchor="middle" fontFamily="'DM Sans',sans-serif">restar P(E∩F)</text>
    </svg>
  );
}

// ─── Árbol de 2 lanzamientos de moneda (regla del producto) con React Flow ────
function ProbArbolMonedas({ tema }) {
  const T = tema.texto, a = tema.acento, bl = tema.azul, gr = tema.verde;
  const eStyle = { stroke: 'rgba(255,255,255,0.28)', strokeWidth: 1.4 };
  const lStyle = { fill: tema.azulTexto, fontSize: 9, fontFamily: 'IBM Plex Mono, monospace' };
  const lBg = { fill: tema.bg, rx: 3 };
  const ed = (id, s, t) => ({ id, source: s, target: t, style: eStyle, label: '½', labelStyle: lStyle, labelBgStyle: lBg, labelShowBg: true });
  const nodes = [
    { id: 'root', type: 'probnodo', position: { x: 0,   y: 95  }, data: { label: '2 lanzam.', t: T, col: a } },
    { id: 'c1',   type: 'probnodo', position: { x: 145, y: 40  }, data: { label: 'Cara', t: T, col: bl } },
    { id: 'x1',   type: 'probnodo', position: { x: 145, y: 150 }, data: { label: 'Cruz', t: T, col: bl } },
    { id: 'cc',   type: 'probnodo', position: { x: 295, y: 8   }, data: { label: 'CC = ¼', t: T, col: gr } },
    { id: 'cx',   type: 'probnodo', position: { x: 295, y: 72  }, data: { label: 'CX = ¼', t: T, col: gr } },
    { id: 'xc',   type: 'probnodo', position: { x: 295, y: 118 }, data: { label: 'XC = ¼', t: T, col: gr } },
    { id: 'xx',   type: 'probnodo', position: { x: 295, y: 182 }, data: { label: 'XX = ¼', t: T, col: gr } },
  ];
  const edges = [
    ed('e1', 'root', 'c1'), ed('e2', 'root', 'x1'),
    ed('e3', 'c1', 'cc'), ed('e4', 'c1', 'cx'),
    ed('e5', 'x1', 'xc'), ed('e6', 'x1', 'xx'),
  ];
  return (
    <div style={{ width: '100%', height: 228 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={PROB_NODE_TYPES}
        fitView
        fitViewOptions={{ padding: 0.12 }}
        nodesDraggable={false}
        nodesConnectable={false}
        nodesFocusable={false}
        edgesFocusable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
        style={{ background: 'transparent' }}
      />
    </div>
  );
}

// ─── Árbol de urna sin reemplazo (probabilidad condicional) con React Flow ────
function ProbArbolUrna({ tema }) {
  const T = tema.texto, a = tema.acento, rj = tema.rojo, bl = tema.azul, gr = tema.verde;
  const eStyle = { stroke: 'rgba(255,255,255,0.28)', strokeWidth: 1.4 };
  const lStyle = { fill: tema.azulTexto, fontSize: 9, fontFamily: 'IBM Plex Mono, monospace' };
  const lBg = { fill: tema.bg, rx: 3 };
  const ed = (id, s, t, label) => ({ id, source: s, target: t, style: eStyle, label, labelStyle: lStyle, labelBgStyle: lBg, labelShowBg: true });
  const nodes = [
    { id: 'root', type: 'probnodo', position: { x: 0,   y: 95  }, data: { label: '2R · 3A', t: T, col: a } },
    { id: 'r1',   type: 'probnodo', position: { x: 150, y: 40  }, data: { label: 'Roja',  t: T, col: rj } },
    { id: 'a1',   type: 'probnodo', position: { x: 150, y: 150 }, data: { label: 'Azul',  t: T, col: bl } },
    { id: 'rr',   type: 'probnodo', position: { x: 312, y: 8   }, data: { label: 'RR · 1/10', t: T, col: gr } },
    { id: 'ra',   type: 'probnodo', position: { x: 312, y: 72  }, data: { label: 'RA · 3/10', t: T, col: gr } },
    { id: 'ar',   type: 'probnodo', position: { x: 312, y: 118 }, data: { label: 'AR · 3/10', t: T, col: gr } },
    { id: 'aa',   type: 'probnodo', position: { x: 312, y: 182 }, data: { label: 'AA · 3/10', t: T, col: gr } },
  ];
  const edges = [
    ed('e1', 'root', 'r1', '2/5'), ed('e2', 'root', 'a1', '3/5'),
    ed('e3', 'r1', 'rr', '1/4'), ed('e4', 'r1', 'ra', '3/4'),
    ed('e5', 'a1', 'ar', '2/4'), ed('e6', 'a1', 'aa', '2/4'),
  ];
  return (
    <div style={{ width: '100%', height: 232 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={PROB_NODE_TYPES}
        fitView
        fitViewOptions={{ padding: 0.12 }}
        nodesDraggable={false}
        nodesConnectable={false}
        nodesFocusable={false}
        edgesFocusable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
        style={{ background: 'transparent' }}
      />
    </div>
  );
}

// ─── Frecuencias relativas de lanzar un dado (probabilidad frecuentista) ──────
const DADO_FREC = [
  { cara: "1", fr: 0.160 },
  { cara: "2", fr: 0.173 },
  { cara: "3", fr: 0.163 },
  { cara: "4", fr: 0.183 },
  { cara: "5", fr: 0.153 },
  { cara: "6", fr: 0.167 },
];

function FrecuenciasDadoChart({ tema }) {
  return (
    <div style={{ width: "100%", height: 198 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={DADO_FREC} margin={{ top: 14, right: 16, left: 0, bottom: 2 }}>
          <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
          <XAxis dataKey="cara" tick={{ fill: tema.muted, fontSize: 12 }} axisLine={{ stroke: tema.border }} tickLine={false} />
          <YAxis domain={[0, 0.25]} tick={{ fill: tema.muted, fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => v.toFixed(2)} width={40} />
          <ReferenceLine y={1 / 6} stroke={tema.verde} strokeDasharray="5 4" label={{ value: "1/6 ≈ 0.167", position: "insideTopRight", fill: tema.verde, fontSize: 10 }} />
          <Bar dataKey="fr" fill={tema.acento} radius={[4, 4, 0, 0]} maxBarSize={34} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// ─── Diagramas de los ejercicios de probabilidad ─────────────────────────────

// Dado con las caras > 4 resaltadas (ejercicio 1).
function DadoMayor4SVG({ tema }) {
  const a = tema.acento;
  const s = 38, y = 12, gap = 8, x0 = 14;
  return (
    <svg viewBox="0 0 290 64" width="100%" style={{ display: "block", maxHeight: 88 }}>
      {[1, 2, 3, 4, 5, 6].map((n, i) => {
        const hi = n > 4;
        return (
          <DadoSVG key={n} x={x0 + i * (s + gap)} y={y} s={s} n={n}
            color={hi ? a : tema.muted} fill={hi ? tema.acentoSuave : tema.card} stroke={hi ? a : tema.border} rPip={3}/>
        );
      })}
    </svg>
  );
}

// Carta de baraja: as de picas (ejercicio 2).
function CartaAsSVG({ tema }) {
  const a = tema.acento, T = tema.texto;
  return (
    <svg viewBox="0 0 120 150" width="100%" style={{ display: "block", maxHeight: 158, maxWidth: 130 }}>
      <rect x="14" y="10" width="92" height="130" rx="10" fill={tema.card} stroke={a} strokeWidth="2.5"/>
      <text x="30" y="36" fill={T} fontSize="20" fontFamily="Georgia,serif" textAnchor="middle">A</text>
      <text x="60" y="94" fill={T} fontSize="46" textAnchor="middle">♠</text>
      <text x="90" y="124" fill={T} fontSize="20" fontFamily="Georgia,serif" textAnchor="middle" transform="rotate(180 90 117)">A</text>
    </svg>
  );
}

// Los 4 resultados de 2 monedas; los que tienen ≥1 cara resaltados (ejercicio 4).
function DosMonedasSVG({ tema }) {
  const a = tema.acento;
  const outs = [["C", "C"], ["C", "X"], ["X", "C"], ["X", "X"]];
  return (
    <svg viewBox="0 0 280 92" width="100%" style={{ display: "block", maxHeight: 104 }}>
      {outs.map((o, i) => {
        const hi = o.includes("C");
        const x = 14 + i * 68;
        return (
          <g key={i}>
            <circle cx={x + 16} cy={38} r={16} fill={hi ? `${a}26` : tema.card} stroke={hi ? a : tema.border} strokeWidth="1.8"/>
            <text x={x + 16} y={43} fill={hi ? a : tema.muted} fontSize="15" fontFamily="Georgia,serif" textAnchor="middle">{o[0]}</text>
            <circle cx={x + 44} cy={38} r={16} fill={hi ? `${a}26` : tema.card} stroke={hi ? a : tema.border} strokeWidth="1.8"/>
            <text x={x + 44} y={43} fill={hi ? a : tema.muted} fontSize="15" fontFamily="Georgia,serif" textAnchor="middle">{o[1]}</text>
          </g>
        );
      })}
      <text x={140} y={82} fill={a} fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle">3 de 4 tienen al menos una cara</text>
    </svg>
  );
}

// Urna con bolas de colores en una rejilla de 3 columnas.
function UrnaSVG({ tema, rojas = 0, azules = 0, verdes = 0 }) {
  const rj = tema.rojo, az = tema.azul, gr = tema.verde;
  const colores = [...Array(rojas).fill(rj), ...Array(azules).fill(az), ...Array(verdes).fill(gr)];
  const partes = [];
  if (rojas) partes.push(`${rojas}R`);
  if (azules) partes.push(`${azules}A`);
  if (verdes) partes.push(`${verdes}V`);
  return (
    <svg viewBox="0 0 150 152" width="100%" style={{ display: "block", maxHeight: 162, maxWidth: 170 }}>
      <path d="M34,32 L34,120 Q34,134 48,134 L102,134 Q116,134 116,120 L116,32"
        fill="rgba(255,255,255,0.03)" stroke={tema.border} strokeWidth="2"/>
      {colores.map((c, i) => {
        const col = i % 3, row = Math.floor(i / 3);
        const cx = 55 + col * 20, cy = 114 - row * 23;
        return <circle key={i} cx={cx} cy={cy} r={9.5} fill={`${c}59`} stroke={c} strokeWidth="1.8"/>;
      })}
      <text x="75" y="22" fill={tema.acento} fontSize="13" fontFamily="'DM Sans',sans-serif" textAnchor="middle">{partes.join(" · ")}</text>
    </svg>
  );
}
function UrnaSumaSVG({ tema })    { return <UrnaSVG tema={tema} rojas={4} azules={3} verdes={2} />; }
function UrnaSinReempSVG({ tema }) { return <UrnaSVG tema={tema} rojas={5} azules={3} />; }

// Moneda (cara) y dado (6) — eventos independientes (ejercicio 6).
function MonedaDadoSVG({ tema }) {
  const a = tema.acento, bl = tema.azul;
  return (
    <svg viewBox="0 0 200 100" width="100%" style={{ display: "block", maxHeight: 112 }}>
      <circle cx="50" cy="50" r="34" fill={tema.azulSuave} stroke={bl} strokeWidth="2.5"/>
      <text x="50" y="60" fill={bl} fontSize="28" fontFamily="Georgia,serif" textAnchor="middle">C</text>
      <text x="100" y="56" fill={tema.muted} fontSize="18" fontFamily="'DM Sans',sans-serif" textAnchor="middle">y</text>
      <DadoSVG x={122} y={16} s={68} n={6} color={a} fill={tema.acentoSuave} stroke={a} rPip={5}/>
    </svg>
  );
}

// Ruleta de 8 sectores con los números primos resaltados (ejercicio 8).
function RuletaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul;
  const cx = 80, cy = 80, r = 66;
  const primes = new Set([2, 3, 5, 7]);
  const D = (d) => d * Math.PI / 180;
  const partes = [];
  for (let k = 0; k < 8; k++) {
    const a0 = k * 45 - 90, a1 = a0 + 45;
    const x0 = cx + r * Math.cos(D(a0)), y0 = cy + r * Math.sin(D(a0));
    const x1 = cx + r * Math.cos(D(a1)), y1 = cy + r * Math.sin(D(a1));
    const num = k + 1, hi = primes.has(num);
    partes.push(
      <path key={`s${k}`} d={`M ${cx},${cy} L ${x0.toFixed(1)},${y0.toFixed(1)} A ${r},${r} 0 0,1 ${x1.toFixed(1)},${y1.toFixed(1)} Z`}
        fill={hi ? `${a}40` : tema.azulSuave} stroke={tema.border} strokeWidth="1"/>
    );
    const am = D(a0 + 22.5);
    const lx = cx + r * 0.66 * Math.cos(am), ly = cy + r * 0.66 * Math.sin(am);
    partes.push(<text key={`n${k}`} x={lx.toFixed(1)} y={(ly + 4).toFixed(1)} fill={hi ? a : tema.muted} fontSize="13" fontFamily="Georgia,serif" textAnchor="middle">{num}</text>);
  }
  return (
    <svg viewBox="0 0 220 160" width="100%" style={{ display: "block", maxHeight: 168 }}>
      {partes}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={bl} strokeWidth="2"/>
      <circle cx={cx} cy={cy} r="4" fill={bl}/>
      <text x="172" y="74" fill={a} fontSize="12" fontFamily="'DM Sans',sans-serif">primos</text>
      <text x="172" y="92" fill={tema.muted} fontSize="12" fontFamily="'IBM Plex Mono',monospace">2·3·5·7</text>
    </svg>
  );
}

// 5 personas y las 10 parejas posibles = C(5,2) (ejercicio 9).
function CombinaPersonasSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, T = tema.texto;
  const cx = 80, cy = 80, r = 56;
  const pts = Array.from({ length: 5 }, (_, i) => {
    const ang = (-90 + i * 72) * Math.PI / 180;
    return [cx + r * Math.cos(ang), cy + r * Math.sin(ang)];
  });
  const lines = [];
  for (let i = 0; i < 5; i++) for (let j = i + 1; j < 5; j++) {
    lines.push(<line key={`${i}-${j}`} x1={pts[i][0].toFixed(1)} y1={pts[i][1].toFixed(1)} x2={pts[j][0].toFixed(1)} y2={pts[j][1].toFixed(1)} stroke={`${a}66`} strokeWidth="1.4"/>);
  }
  return (
    <svg viewBox="0 0 230 158" width="100%" style={{ display: "block", maxHeight: 166 }}>
      {lines}
      {pts.map((p, i) => <circle key={i} cx={p[0].toFixed(1)} cy={p[1].toFixed(1)} r="7.5" fill={tema.azulSuave} stroke={bl} strokeWidth="2"/>)}
      <text x="180" y="74" fill={a} fontSize="13" fontFamily="'DM Sans',sans-serif">C(5,2)</text>
      <text x="180" y="95" fill={T} fontSize="16" fontFamily="'IBM Plex Mono',monospace">= 10</text>
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// Diagramas de Estadística descriptiva
// ═══════════════════════════════════════════════════════════════════════════

// Datos de ejemplo compartidos: distribución de 20 calificaciones (6 a 10).
const GRADE_FREC = [
  { x: "6", f: 2 },
  { x: "7", f: 5 },
  { x: "8", f: 8 },
  { x: "9", f: 4 },
  { x: "10", f: 1 },
];

// Portada: barras con una línea de media punteada.
function EstPortadaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul;
  const heights = [30, 54, 78, 62, 40, 22];
  const bw = 26, gap = 10, x0 = 30, base = 104, meanY = 54;
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 132, maxWidth: 320 }}>
      {heights.map((h, i) => (
        <rect key={i} x={x0 + i * (bw + gap)} y={base - h} width={bw} height={h} rx={3}
          fill={tema.acentoMed} stroke={a} strokeWidth="1.6" />
      ))}
      <line x1="16" y1={base} x2="236" y2={base} stroke={tema.border} strokeWidth="1.5" />
      <line x1="16" y1={meanY} x2="236" y2={meanY} stroke={bl} strokeWidth="2" strokeDasharray="6 4" />
      <text x="232" y={meanY - 6} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">media</text>
    </svg>
  );
}

// Árbol de clasificación de variables.
function TiposVariableSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted;
  const caja = (cx, cy, w, label, color) => (
    <g>
      <rect x={cx - w / 2} y={cy - 14} width={w} height={28} rx={7} fill={tema.card} stroke={color} strokeWidth="1.6" />
      <text x={cx} y={cy + 5} fill={color} fontSize="12.5" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">{label}</text>
    </g>
  );
  const ln = (x1, y1, x2, y2) => <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={mu} strokeWidth="1.4" opacity="0.5" />;
  return (
    <svg viewBox="0 0 360 168" width="100%" style={{ display: "block", maxHeight: 176 }}>
      {ln(180, 32, 84, 62)}
      {ln(180, 32, 264, 62)}
      {ln(264, 90, 204, 122)}
      {ln(264, 90, 310, 122)}
      {caja(180, 18, 96, "Variable", a)}
      {caja(84, 76, 112, "Cualitativa", bl)}
      {caja(264, 76, 120, "Cuantitativa", a)}
      {caja(204, 136, 96, "Discreta", a)}
      {caja(310, 136, 96, "Continua", a)}
      <text x="84" y="101" fill={mu} fontSize="9" fontFamily="'DM Sans',sans-serif" textAnchor="middle">color, sexo, marca</text>
      <text x="204" y="161" fill={mu} fontSize="9" fontFamily="'DM Sans',sans-serif" textAnchor="middle">nº de hijos, goles</text>
      <text x="310" y="161" fill={mu} fontSize="9" fontFamily="'DM Sans',sans-serif" textAnchor="middle">peso, tiempo</text>
    </svg>
  );
}

// Tabla de frecuencias (HTML) de las 20 calificaciones.
function TablaFrecuenciasEst({ tema }) {
  const rows = [
    ["6", 2, "0.10", "10%", 2],
    ["7", 5, "0.25", "25%", 7],
    ["8", 8, "0.40", "40%", 15],
    ["9", 4, "0.20", "20%", 19],
    ["10", 1, "0.05", "5%", 20],
  ];
  const th = { padding: "7px 12px", color: tema.acento, fontFamily: tema.mono, fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", borderBottom: `1px solid ${tema.acentoBorde}`, textAlign: "center" };
  const td = { padding: "6px 12px", fontFamily: tema.mono, fontSize: 13, textAlign: "center", borderBottom: `1px solid ${tema.border}` };
  const tot = { ...td, color: tema.acento, fontWeight: 700, borderBottom: "none" };
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <table style={{ borderCollapse: "collapse", background: tema.card, borderRadius: 8, overflow: "hidden" }}>
        <thead>
          <tr>
            <th style={th}>Calif. (xᵢ)</th><th style={th}>f</th><th style={th}>fᵣ</th><th style={th}>%</th><th style={th}>F</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j} style={{ ...td, color: j === 0 ? tema.azul : tema.texto }}>{c}</td>
              ))}
            </tr>
          ))}
          <tr>
            <td style={tot}>Σ</td><td style={tot}>20</td><td style={tot}>1.00</td><td style={tot}>100%</td>
            <td style={{ ...td, color: tema.muted, borderBottom: "none" }}>—</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// Gráfica de barras (Recharts) de la tabla de frecuencias.
function EstBarrasChart({ tema }) {
  return (
    <div style={{ width: "100%", height: 190 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={GRADE_FREC} margin={{ top: 14, right: 16, left: 0, bottom: 2 }}>
          <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
          <XAxis dataKey="x" tick={{ fill: tema.muted, fontSize: 12 }} axisLine={{ stroke: tema.border }} tickLine={false} />
          <YAxis allowDecimals={false} tick={{ fill: tema.muted, fontSize: 11 }} axisLine={false} tickLine={false} width={28} />
          <Bar dataKey="f" fill={tema.acento} radius={[4, 4, 0, 0]} maxBarSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// Recta numérica con los puntos {2,2,6,7,8} y las tres medidas marcadas.
function TendenciaCentralSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, gr = tema.verde, mu = tema.muted;
  const X = (v) => 24 + v * 27.6;
  const axisY = 60;
  const datos = [2, 2, 6, 7, 8];
  const counts = {};
  const marcas = [
    { v: 2, y: 80, c: a, l: "moda = 2" },
    { v: 5, y: 100, c: bl, l: "media = 5" },
    { v: 6, y: 120, c: gr, l: "mediana = 6" },
  ];
  return (
    <svg viewBox="0 0 320 140" width="100%" style={{ display: "block", maxHeight: 150 }}>
      <line x1={X(0)} y1={axisY} x2={X(10)} y2={axisY} stroke={tema.border} strokeWidth="1.5" />
      {[0, 2, 4, 6, 8, 10].map((t) => (
        <g key={t}>
          <line x1={X(t)} y1={axisY - 4} x2={X(t)} y2={axisY + 4} stroke={mu} strokeWidth="1" />
          <text x={X(t)} y={axisY + 16} fill={mu} fontSize="9" fontFamily="'DM Sans',sans-serif" textAnchor="middle">{t}</text>
        </g>
      ))}
      {datos.map((v, i) => {
        counts[v] = (counts[v] || 0) + 1;
        const cy = axisY - 12 - (counts[v] - 1) * 13;
        return <circle key={i} cx={X(v)} cy={cy} r="5.5" fill={tema.acentoMed} stroke={a} strokeWidth="1.6" />;
      })}
      {marcas.map((m, i) => (
        <g key={i}>
          <line x1={X(m.v)} y1={axisY} x2={X(m.v)} y2={m.y} stroke={m.c} strokeWidth="1.6" strokeDasharray="3 3" />
          <circle cx={X(m.v)} cy={axisY} r="3.5" fill={m.c} />
          <text x={X(m.v)} y={m.y + 11} fill={m.c} fontSize="11" fontFamily="'DM Sans',sans-serif" fontWeight="600" textAnchor="middle">{m.l}</text>
        </g>
      ))}
    </svg>
  );
}

// Dos rectas numéricas con la misma media (8) y distinta dispersión.
function DispersionSVG({ tema }) {
  const bl = tema.azul, gr = tema.verde, rj = tema.rojo;
  const X = (v) => 20 + v * 17.5;
  const fila = (y, datos, color, label) => (
    <g>
      <line x1={X(0)} y1={y} x2={X(16)} y2={y} stroke={tema.border} strokeWidth="1.4" />
      {datos.map((v, i) => <circle key={i} cx={X(v)} cy={y} r="5" fill={`${color}33`} stroke={color} strokeWidth="1.6" />)}
      <text x={X(0)} y={y - 12} fill={color} fontSize="11" fontFamily="'DM Sans',sans-serif" fontWeight="600">{label}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 320 150" width="100%" style={{ display: "block", maxHeight: 160 }}>
      <line x1={X(8)} y1={22} x2={X(8)} y2={130} stroke={bl} strokeWidth="1.6" strokeDasharray="5 4" />
      <text x={X(8)} y={16} fill={bl} fontSize="10" fontFamily="'DM Sans',sans-serif" textAnchor="middle">media = 8</text>
      {fila(54, [6, 7, 8, 9, 10], gr, "poca dispersión")}
      {fila(110, [2, 5, 8, 11, 14], rj, "mucha dispersión")}
    </svg>
  );
}

// Recta numérica con las desviaciones de {2,4,6,8,10} respecto a la media 6.
function DesviacionDetalleSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted;
  const X = (v) => 24 + v * 23;
  const axisY = 68, datos = [2, 4, 6, 8, 10], mean = 6;
  return (
    <svg viewBox="0 0 320 110" width="100%" style={{ display: "block", maxHeight: 120 }}>
      <line x1={X(0)} y1={axisY} x2={X(12)} y2={axisY} stroke={tema.border} strokeWidth="1.4" />
      <line x1={X(mean)} y1={28} x2={X(mean)} y2={axisY + 6} stroke={bl} strokeWidth="1.8" strokeDasharray="5 4" />
      <text x={X(mean)} y={22} fill={bl} fontSize="10.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">media = 6</text>
      {datos.map((v, i) => {
        const d = v - mean;
        return (
          <g key={i}>
            <line x1={X(v)} y1={axisY} x2={X(mean)} y2={axisY} stroke={d === 0 ? mu : a} strokeWidth="1" opacity="0.35" />
            <circle cx={X(v)} cy={axisY} r="5.5" fill={tema.acentoMed} stroke={a} strokeWidth="1.6" />
            <text x={X(v)} y={axisY + 18} fill={mu} fontSize="9" fontFamily="'DM Sans',sans-serif" textAnchor="middle">{v}</text>
            {d !== 0 && (
              <text x={(X(v) + X(mean)) / 2} y={axisY - 9} fill={a} fontSize="9.5" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">{d > 0 ? `+${d}` : d}</text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

// Gráfica circular (sectores) de la distribución de calificaciones.
function EstCircularSVG({ tema }) {
  const segs = [
    { lab: "calif. 6", p: 10, c: tema.rojo },
    { lab: "calif. 7", p: 25, c: tema.azul },
    { lab: "calif. 8", p: 40, c: tema.acento },
    { lab: "calif. 9", p: 20, c: tema.verde },
    { lab: "calif. 10", p: 5, c: tema.muted },
  ];
  const cx = 82, cy = 80, r = 60;
  let ang = -Math.PI / 2;
  const paths = segs.map((s, i) => {
    const a0 = ang, a1 = ang + (s.p / 100) * 2 * Math.PI;
    ang = a1;
    const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0);
    const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
    const large = (a1 - a0) > Math.PI ? 1 : 0;
    return <path key={i} d={`M ${cx} ${cy} L ${x0.toFixed(2)} ${y0.toFixed(2)} A ${r} ${r} 0 ${large} 1 ${x1.toFixed(2)} ${y1.toFixed(2)} Z`} fill={`${s.c}cc`} stroke={tema.bg} strokeWidth="1.5" />;
  });
  return (
    <svg viewBox="0 0 320 160" width="100%" style={{ display: "block", maxHeight: 168 }}>
      {paths}
      {segs.map((s, i) => (
        <g key={i} transform={`translate(176 ${32 + i * 24})`}>
          <rect x="0" y="-9" width="13" height="13" rx="3" fill={`${s.c}cc`} />
          <text x="20" y="2" fill={tema.texto} fontSize="11.5" fontFamily="'DM Sans',sans-serif">{s.lab}</text>
          <text x="120" y="2" fill={s.c} fontSize="11.5" fontFamily="'IBM Plex Mono',monospace" fontWeight="600" textAnchor="end">{s.p}%</text>
        </g>
      ))}
    </svg>
  );
}

// Helper: fila de valores en celdas, con algunos resaltados.
function estChips(tema, valores, destacados, etiqueta) {
  const a = tema.acento, T = tema.texto, mu = tema.muted;
  const w = 40, h = 40, gap = 9, x0 = 10, y = 12;
  const totalW = x0 * 2 + valores.length * w + (valores.length - 1) * gap;
  const vbH = etiqueta ? 84 : 64;
  return (
    <svg viewBox={`0 0 ${totalW} ${vbH}`} width="100%" style={{ display: "block", maxHeight: etiqueta ? 94 : 74 }}>
      {valores.map((v, i) => {
        const hi = destacados.includes(i);
        const x = x0 + i * (w + gap);
        return (
          <g key={i}>
            <rect x={x} y={y} width={w} height={h} rx={8} fill={hi ? tema.acentoMed : tema.card} stroke={hi ? a : tema.border} strokeWidth={hi ? 2 : 1.4} />
            <text x={x + w / 2} y={y + h / 2 + 6} fill={hi ? a : T} fontSize="17" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">{v}</text>
          </g>
        );
      })}
      {etiqueta && <text x={totalW / 2} y={y + h + 20} fill={mu} fontSize="12" fontFamily="'DM Sans',sans-serif" textAnchor="middle">{etiqueta}</text>}
    </svg>
  );
}

// Helper: mini gráfica de barras de frecuencias, con una barra resaltada.
function estBarras(tema, items, hiIdx, etiqueta) {
  const a = tema.acento, mu = tema.muted, T = tema.texto;
  const bw = 34, gap = 18, x0 = 18, base = 86, unit = 20;
  const totalW = x0 * 2 + items.length * bw + (items.length - 1) * gap;
  return (
    <svg viewBox={`0 0 ${totalW} ${etiqueta ? 122 : 104}`} width="100%" style={{ display: "block", maxHeight: etiqueta ? 132 : 112 }}>
      {items.map((d, i) => {
        const hi = i === hiIdx;
        const hgt = d.f * unit;
        const x = x0 + i * (bw + gap);
        return (
          <g key={i}>
            <rect x={x} y={base - hgt} width={bw} height={hgt} rx={4} fill={hi ? tema.acentoMed : tema.azulSuave} stroke={hi ? a : tema.azulBorde} strokeWidth={hi ? 2 : 1.3} />
            <text x={x + bw / 2} y={base - hgt - 5} fill={hi ? a : mu} fontSize="11" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">{d.f}</text>
            <text x={x + bw / 2} y={base + 15} fill={hi ? a : T} fontSize="13" fontFamily="'DM Sans',sans-serif" textAnchor="middle">{d.x}</text>
          </g>
        );
      })}
      <line x1={8} y1={base} x2={totalW - 8} y2={base} stroke={tema.border} strokeWidth="1.4" />
      {etiqueta && <text x={totalW / 2} y={base + 34} fill={mu} fontSize="11.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">{etiqueta}</text>}
    </svg>
  );
}

function MediaDetalleSVG({ tema })   { return estChips(tema, [2, 2, 6, 7, 8], [], "Σx = 25 · n = 5  →  media = 5"); }
function MedianaDetalleSVG({ tema }) { return estChips(tema, [2, 2, 6, 7, 8], [2], "ordenados · el centro es 6"); }
function ModaDetalleSVG({ tema })    { return estBarras(tema, [{ x: "2", f: 2 }, { x: "6", f: 1 }, { x: "7", f: 1 }, { x: "8", f: 1 }], 0, "el 2 se repite más → moda = 2"); }

function Ej_EstMediaSVG({ tema })      { return estChips(tema, [8, 6, 7, 9, 10], [], "5 calificaciones"); }
function Ej_EstMedianaSVG({ tema })    { return estChips(tema, [3, 4, 5, 7, 9], [2], "ya ordenados · valor central"); }
function Ej_EstMedianaParSVG({ tema }) { return estChips(tema, [10, 20, 30, 40], [1, 2], "dos valores centrales"); }
function Ej_EstModaSVG({ tema })       { return estBarras(tema, [{ x: "2", f: 1 }, { x: "4", f: 3 }, { x: "5", f: 1 }, { x: "6", f: 1 }, { x: "7", f: 1 }], 1, "frecuencia de cada valor"); }

// Recta numérica con el mínimo y el máximo resaltados (rango).
function Ej_EstRangoSVG({ tema }) {
  const a = tema.acento, mu = tema.muted;
  const datos = [12, 7, 20, 5, 15];
  const X = (v) => 20 + (v / 22) * 280;
  const y = 46;
  return (
    <svg viewBox="0 0 320 96" width="100%" style={{ display: "block", maxHeight: 104 }}>
      <line x1={X(0)} y1={y} x2={X(22)} y2={y} stroke={tema.border} strokeWidth="1.4" />
      {datos.map((v, i) => {
        const ext = v === 5 || v === 20;
        return (
          <g key={i}>
            <circle cx={X(v)} cy={y} r="6" fill={ext ? tema.acentoMed : tema.azulSuave} stroke={ext ? a : tema.azulBorde} strokeWidth={ext ? 2 : 1.4} />
            <text x={X(v)} y={y + 18} fill={ext ? a : mu} fontSize="11" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">{v}</text>
          </g>
        );
      })}
      <text x={X(5)} y={y - 12} fill={a} fontSize="10.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">mín</text>
      <text x={X(20)} y={y - 12} fill={a} fontSize="10.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">máx</text>
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// Diagramas de Cinemática (Física)
// ═══════════════════════════════════════════════════════════════════════════

// Punta de flecha para un segmento (x1,y1)→(x2,y2).
function arrowHead(x1, y1, x2, y2, s) {
  const ang = Math.atan2(y2 - y1, x2 - x1);
  const a1 = ang + Math.PI * 0.82, a2 = ang - Math.PI * 0.82;
  const p1 = `${(x2 + s * Math.cos(a1)).toFixed(1)},${(y2 + s * Math.sin(a1)).toFixed(1)}`;
  const p2 = `${(x2 + s * Math.cos(a2)).toFixed(1)},${(y2 + s * Math.sin(a2)).toFixed(1)}`;
  return `${x2},${y2} ${p1} ${p2}`;
}

// Ejes con flechas; etiquetas de los extremos.
function EjesXY({ ox, oy, xEnd, yTop, tema, labelX, labelY }) {
  const mu = tema.muted;
  return (
    <>
      <line x1={ox} y1={oy} x2={xEnd} y2={oy} stroke={mu} strokeWidth="1.5" />
      <line x1={ox} y1={oy} x2={ox} y2={yTop} stroke={mu} strokeWidth="1.5" />
      <polygon points={`${xEnd + 6},${oy} ${xEnd},${oy - 3.5} ${xEnd},${oy + 3.5}`} fill={mu} />
      <polygon points={`${ox},${yTop - 6} ${ox - 3.5},${yTop} ${ox + 3.5},${yTop}`} fill={mu} />
      <text x={xEnd + 2} y={oy + 14} fill={mu} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic">{labelX}</text>
      <text x={ox - 14} y={yTop + 2} fill={mu} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic">{labelY}</text>
    </>
  );
}

function CinPortadaSVG({ tema }) {
  const a = tema.acento, mu = tema.muted;
  const ox = 30, oy = 100;
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 132, maxWidth: 320 }}>
      <line x1={ox} y1={oy} x2={232} y2={oy} stroke={mu} strokeWidth="1.5" />
      <line x1={ox} y1={oy} x2={ox} y2={14} stroke={mu} strokeWidth="1.5" />
      <polygon points={`238,${oy} 232,${oy - 3.5} 232,${oy + 3.5}`} fill={mu} />
      <polygon points={`${ox},8 ${ox - 3.5},14 ${ox + 3.5},14`} fill={mu} />
      <path d={`M ${ox} ${oy} Q 150 ${oy} 210 26`} stroke={a} strokeWidth="2.5" fill="none" />
      <circle cx="210" cy="26" r="5" fill={a} />
      <text x="236" y={oy + 4} fill={mu} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic">t</text>
      <text x={ox - 9} y="12" fill={mu} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic">x</text>
    </svg>
  );
}

function CinDesplazamientoSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, T = tema.texto;
  const Ax = 32, Ay = 92, Bx = 242, By = 56;
  return (
    <svg viewBox="0 0 280 120" width="100%" style={{ display: "block", maxHeight: 128 }}>
      <path d={`M ${Ax} ${Ay} C 78 18, 128 124, 172 62 S 214 30 ${Bx} ${By}`} stroke={bl} strokeWidth="2.2" fill="none" />
      <line x1={Ax} y1={Ay} x2={Bx} y2={By} stroke={a} strokeWidth="2.5" />
      <polygon points={arrowHead(Ax, Ay, Bx, By, 9)} fill={a} />
      <circle cx={Ax} cy={Ay} r="4" fill={T} />
      <circle cx={Bx} cy={By} r="4" fill={T} />
      <text x={Ax - 12} y={Ay + 6} fill={T} fontSize="13" fontFamily="Georgia,serif">A</text>
      <text x={Bx + 6} y={By + 4} fill={T} fontSize="13" fontFamily="Georgia,serif">B</text>
      <text x="86" y="34" fill={bl} fontSize="11" fontFamily="'DM Sans',sans-serif">distancia (trayectoria)</text>
      <text x="118" y="86" fill={a} fontSize="11" fontFamily="'DM Sans',sans-serif">desplazamiento</text>
    </svg>
  );
}

function CinGrafXtSVG({ tema }) {
  const a = tema.acento, mu = tema.muted;
  const ox = 34, oy = 118;
  return (
    <svg viewBox="0 0 230 150" width="100%" style={{ display: "block", maxHeight: 160 }}>
      <EjesXY ox={ox} oy={oy} xEnd={206} yTop={20} tema={tema} labelX="t" labelY="x" />
      <line x1={ox} y1={oy} x2={196} y2={34} stroke={a} strokeWidth="2.5" />
      {/* triángulo de pendiente */}
      <line x1={108} y1={80} x2={160} y2={80} stroke={mu} strokeWidth="1.2" strokeDasharray="3 3" />
      <line x1={160} y1={80} x2={160} y2={52} stroke={mu} strokeWidth="1.2" strokeDasharray="3 3" />
      <text x={134} y={93} fill={mu} fontSize="10" fontFamily="'DM Sans',sans-serif" textAnchor="middle">Δt</text>
      <text x={166} y={69} fill={mu} fontSize="10" fontFamily="'DM Sans',sans-serif">Δx</text>
      <text x={70} y={40} fill={a} fontSize="11" fontFamily="'DM Sans',sans-serif">pendiente = v</text>
    </svg>
  );
}

function CinGrafVtSVG({ tema }) {
  const a = tema.acento, mu = tema.muted;
  const ox = 34, oy = 118, v0y = 92;
  return (
    <svg viewBox="0 0 230 150" width="100%" style={{ display: "block", maxHeight: 160 }}>
      <polygon points={`${ox},${oy} ${ox},${v0y} 196,34 196,${oy}`} fill={tema.acentoMed} stroke="none" />
      <EjesXY ox={ox} oy={oy} xEnd={206} yTop={20} tema={tema} labelX="t" labelY="v" />
      <line x1={ox} y1={v0y} x2={196} y2={34} stroke={a} strokeWidth="2.5" />
      <text x={ox - 4} y={v0y - 5} fill={mu} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">v₀</text>
      <text x={112} y={92} fill={tema.texto} fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle">área = Δx</text>
      <text x={150} y={52} fill={a} fontSize="10.5" fontFamily="'DM Sans',sans-serif">pend. = a</text>
    </svg>
  );
}

function CinCaidaLibreSVG({ tema }) {
  const a = tema.acento, mu = tema.muted, bl = tema.azul;
  const x = 44;
  const ys = [20, 38, 66, 104, 152];
  return (
    <svg viewBox="0 0 130 172" width="100%" style={{ display: "block", maxHeight: 178, maxWidth: 150 }}>
      <line x1={x} y1={12} x2={x} y2={162} stroke={mu} strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />
      {ys.map((y, i) => (
        <circle key={i} cx={x} cy={y} r={6} fill={i === ys.length - 1 ? a : tema.acentoMed} stroke={a} strokeWidth="1.6" />
      ))}
      <line x1={92} y1={22} x2={92} y2={150} stroke={bl} strokeWidth="2.2" />
      <polygon points={arrowHead(92, 22, 92, 150, 9)} fill={bl} />
      <text x={100} y={92} fill={bl} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic">g</text>
      <text x={x} y={170} fill={mu} fontSize="9.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">acelera al caer</text>
    </svg>
  );
}

function CinTiroParabolicoSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, gr = tema.verde, mu = tema.muted;
  return (
    <svg viewBox="0 0 260 140" width="100%" style={{ display: "block", maxHeight: 150 }}>
      <line x1={16} y1={118} x2={244} y2={118} stroke={mu} strokeWidth="1.5" />
      <path d="M 24 118 Q 130 -10 236 118" stroke={a} strokeWidth="2.5" fill="none" />
      {/* velocidad inicial */}
      <line x1={24} y1={118} x2={58} y2={86} stroke={gr} strokeWidth="2.2" />
      <polygon points={arrowHead(24, 118, 58, 86, 8)} fill={gr} />
      <text x={40} y={80} fill={gr} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic">v₀</text>
      {/* componentes en un punto */}
      <line x1={88} y1={64} x2={120} y2={64} stroke={bl} strokeWidth="2" />
      <polygon points={arrowHead(88, 64, 120, 64, 7)} fill={bl} />
      <line x1={88} y1={64} x2={88} y2={40} stroke={bl} strokeWidth="2" />
      <polygon points={arrowHead(88, 64, 88, 40, 7)} fill={bl} />
      <circle cx={88} cy={64} r={3} fill={tema.texto} />
      <text x={124} y={68} fill={bl} fontSize="10.5" fontFamily="Georgia,serif" fontStyle="italic">vₓ</text>
      <text x={74} y={40} fill={bl} fontSize="10.5" fontFamily="Georgia,serif" fontStyle="italic">vy</text>
    </svg>
  );
}

function CinEjDtSVG({ tema }) {
  const a = tema.acento, mu = tema.muted;
  const ox = 34, oy = 118;
  const px = 172, py = 46; // (5 s, 8 m)
  return (
    <svg viewBox="0 0 230 150" width="100%" style={{ display: "block", maxHeight: 160 }}>
      <EjesXY ox={ox} oy={oy} xEnd={206} yTop={20} tema={tema} labelX="t (s)" labelY="d (m)" />
      <line x1={px} y1={oy} x2={px} y2={py} stroke={mu} strokeWidth="1" strokeDasharray="3 3" />
      <line x1={ox} y1={py} x2={px} y2={py} stroke={mu} strokeWidth="1" strokeDasharray="3 3" />
      <line x1={ox} y1={oy} x2={px} y2={py} stroke={a} strokeWidth="2.5" />
      <circle cx={px} cy={py} r={4} fill={a} />
      <text x={px} y={oy + 14} fill={mu} fontSize="10" fontFamily="'DM Sans',sans-serif" textAnchor="middle">5</text>
      <text x={ox - 9} y={py + 4} fill={mu} fontSize="10" fontFamily="'DM Sans',sans-serif" textAnchor="end">8</text>
    </svg>
  );
}

function CinEjVtAreaSVG({ tema }) {
  const a = tema.acento, mu = tema.muted;
  const ox = 34, oy = 118;
  const px = 167, py = 43; // (4 s, 10 m/s)
  return (
    <svg viewBox="0 0 230 150" width="100%" style={{ display: "block", maxHeight: 160 }}>
      <polygon points={`${ox},${oy} ${px},${py} ${px},${oy}`} fill={tema.acentoMed} stroke="none" />
      <EjesXY ox={ox} oy={oy} xEnd={206} yTop={20} tema={tema} labelX="t (s)" labelY="v (m/s)" />
      <line x1={ox} y1={oy} x2={px} y2={py} stroke={a} strokeWidth="2.5" />
      <line x1={px} y1={oy} x2={px} y2={py} stroke={mu} strokeWidth="1" strokeDasharray="3 3" />
      <text x={108} y={104} fill={tema.texto} fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle">área = Δx</text>
      <text x={px} y={oy + 14} fill={mu} fontSize="10" fontFamily="'DM Sans',sans-serif" textAnchor="middle">4</text>
      <text x={ox - 9} y={py + 4} fill={mu} fontSize="10" fontFamily="'DM Sans',sans-serif" textAnchor="end">10</text>
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// Diagramas de Dinámica (Leyes de Newton)
// ═══════════════════════════════════════════════════════════════════════════

// Caja con etiqueta (bloque genérico).
function Bloque({ x, y, w, h, tema, label, fill }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={4} fill={fill || tema.acentoMed} stroke={tema.acento} strokeWidth="1.8" />
      {label && <text x={x + w / 2} y={y + h / 2 + 5} fill={tema.texto} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{label}</text>}
    </g>
  );
}

// Vector con punta de flecha y etiqueta.
function Vector({ x1, y1, x2, y2, color, label, lx, ly, sw }) {
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={sw || 2.4} />
      <polygon points={arrowHead(x1, y1, x2, y2, 8)} fill={color} />
      {label && <text x={lx} y={ly} fill={color} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">{label}</text>}
    </g>
  );
}

function DinPortadaSVG({ tema }) {
  const a = tema.acento, gr = tema.verde, mu = tema.muted;
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 132, maxWidth: 320 }}>
      <line x1={20} y1={92} x2={230} y2={92} stroke={mu} strokeWidth="1.5" />
      <Bloque x={60} y={52} w={54} h={40} tema={tema} label="m" />
      <Vector x1={114} y1={72} x2={188} y2={72} color={gr} label="F" lx={150} ly={66} />
      <Vector x1={60} y1={40} x2={120} y2={40} color={a} label="a" lx={88} ly={34} />
    </svg>
  );
}

function DinFuerzaNetaSVG({ tema }) {
  const gr = tema.verde, rj = tema.rojo, mu = tema.muted;
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 128 }}>
      <Bloque x={95} y={42} w={60} h={44} tema={tema} label="m" />
      <Vector x1={155} y1={64} x2={216} y2={64} color={gr} label="F₁" lx={178} ly={56} />
      <Vector x1={95} y1={64} x2={48} y2={64} color={rj} label="F₂" lx={50} ly={56} />
      <text x={125} y={108} fill={mu} fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle">fuerza neta = suma vectorial</text>
    </svg>
  );
}

function DinSegundaLeySVG({ tema }) {
  const a = tema.acento, gr = tema.verde, mu = tema.muted;
  return (
    <svg viewBox="0 0 250 110" width="100%" style={{ display: "block", maxHeight: 120 }}>
      <Bloque x={66} y={42} w={54} h={42} tema={tema} label="m" />
      <Vector x1={120} y1={54} x2={200} y2={54} color={gr} label="F" lx={170} ly={48} />
      <Vector x1={120} y1={74} x2={172} y2={74} color={a} label="a" lx={150} ly={94} />
      <text x={50} y={100} fill={mu} fontSize="10.5" fontFamily="'DM Sans',sans-serif">a en el sentido de F</text>
    </svg>
  );
}

function DinTerceraLeySVG({ tema }) {
  const gr = tema.verde, rj = tema.rojo, T = tema.texto;
  return (
    <svg viewBox="0 0 250 116" width="100%" style={{ display: "block", maxHeight: 126 }}>
      <Bloque x={71} y={48} w={44} h={38} tema={tema} label="A" fill={tema.azulSuave} />
      <Bloque x={115} y={48} w={44} h={38} tema={tema} label="B" />
      <Vector x1={115} y1={38} x2={178} y2={38} color={gr} label="" />
      <text x={120} y={31} fill={gr} fontSize="10.5" fontFamily="'DM Sans',sans-serif">acción (A → B)</text>
      <Vector x1={115} y1={98} x2={52} y2={98} color={rj} label="" />
      <text x={70} y={112} fill={rj} fontSize="10.5" fontFamily="'DM Sans',sans-serif">reacción (B → A)</text>
    </svg>
  );
}

function DinFriccionSVG({ tema }) {
  const a = tema.acento, gr = tema.verde, rj = tema.rojo, az = tema.azul, mu = tema.muted;
  const gy = 92;
  return (
    <svg viewBox="0 0 250 140" width="100%" style={{ display: "block", maxHeight: 150 }}>
      <line x1={28} y1={gy} x2={222} y2={gy} stroke={mu} strokeWidth="1.5" />
      {[40, 60, 80, 100, 120, 140, 160, 180, 200].map((x) => (
        <line key={x} x1={x} y1={gy} x2={x - 8} y2={gy + 8} stroke={mu} strokeWidth="1" opacity="0.5" />
      ))}
      <Bloque x={88} y={56} w={56} h={36} tema={tema} label="m" />
      <Vector x1={116} y1={56} x2={116} y2={22} color={a} label="N" lx={122} ly={34} />
      <Vector x1={116} y1={92} x2={116} y2={126} color={rj} label="P" lx={122} ly={116} />
      <Vector x1={144} y1={74} x2={198} y2={74} color={gr} label="F" lx={176} ly={68} />
      <Vector x1={88} y1={74} x2={44} y2={74} color={az} label="f" lx={48} ly={68} />
    </svg>
  );
}

function DinHookeSVG({ tema }) {
  const a = tema.acento, gr = tema.verde, mu = tema.muted;
  const zig = "22,60 34,48 46,72 58,48 70,72 82,48 94,72 106,48 118,72 130,60";
  return (
    <svg viewBox="0 0 250 110" width="100%" style={{ display: "block", maxHeight: 120 }}>
      <rect x={12} y={34} width={10} height={52} fill={tema.card} stroke={mu} strokeWidth="1.5" />
      {[38, 48, 58, 68, 78].map((y) => (
        <line key={y} x1={12} y1={y} x2={6} y2={y + 6} stroke={mu} strokeWidth="1" opacity="0.6" />
      ))}
      <polyline points={zig} fill="none" stroke={a} strokeWidth="2.2" />
      <Bloque x={130} y={44} w={40} h={32} tema={tema} label="m" />
      <Vector x1={170} y1={60} x2={216} y2={60} color={gr} label="F" lx={192} ly={54} />
      <line x1={70} y1={90} x2={150} y2={90} stroke={mu} strokeWidth="1" />
      <line x1={70} y1={86} x2={70} y2={94} stroke={mu} strokeWidth="1" />
      <line x1={150} y1={86} x2={150} y2={94} stroke={mu} strokeWidth="1" />
      <text x={108} y={103} fill={mu} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">x</text>
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// Diagramas de Trabajo y Energía
// ═══════════════════════════════════════════════════════════════════════════

function EnePortadaSVG({ tema }) {
  const a = tema.acento, mu = tema.muted;
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 132, maxWidth: 320 }}>
      <line x1={20} y1={102} x2={230} y2={102} stroke={mu} strokeWidth="1.5" />
      <path d="M 34 30 C 92 32 108 96 222 102" stroke={a} strokeWidth="2.5" fill="none" />
      <circle cx={40} cy={26} r={7} fill={a} />
      <text x={52} y={26} fill={mu} fontSize="10" fontFamily="'DM Sans',sans-serif">Ep</text>
      <text x={198} y={94} fill={mu} fontSize="10" fontFamily="'DM Sans',sans-serif">Ec</text>
    </svg>
  );
}

function EneTrabajoSVG({ tema }) {
  const gr = tema.verde, mu = tema.muted;
  return (
    <svg viewBox="0 0 250 110" width="100%" style={{ display: "block", maxHeight: 120 }}>
      <Bloque x={50} y={40} w={50} h={36} tema={tema} label="m" />
      <Vector x1={100} y1={58} x2={176} y2={58} color={gr} label="F" lx={150} ly={52} />
      <line x1={50} y1={90} x2={176} y2={90} stroke={mu} strokeWidth="1.2" />
      <line x1={50} y1={86} x2={50} y2={94} stroke={mu} strokeWidth="1" />
      <line x1={176} y1={86} x2={176} y2={94} stroke={mu} strokeWidth="1" />
      <text x={113} y={103} fill={mu} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">d</text>
    </svg>
  );
}

function EneEnergiasSVG({ tema }) {
  const gr = tema.verde, mu = tema.muted, bl = tema.azul;
  const gy = 112;
  return (
    <svg viewBox="0 0 250 130" width="100%" style={{ display: "block", maxHeight: 140 }}>
      <line x1={30} y1={gy} x2={220} y2={gy} stroke={mu} strokeWidth="1.5" />
      <line x1={36} y1={52} x2={150} y2={52} stroke={mu} strokeWidth="1.5" />
      <Bloque x={64} y={32} w={36} h={20} tema={tema} label="m" />
      <Vector x1={100} y1={42} x2={150} y2={42} color={gr} label="v" lx={128} ly={36} />
      <line x1={176} y1={52} x2={176} y2={gy} stroke={bl} strokeWidth="1.4" strokeDasharray="4 3" />
      <polygon points={arrowHead(176, 58, 176, 52, 7)} fill={bl} />
      <polygon points={arrowHead(176, gy - 6, 176, gy, 7)} fill={bl} />
      <text x={182} y={86} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">h</text>
      <text x={34} y={26} fill={mu} fontSize="9.5" fontFamily="'DM Sans',sans-serif">Ec = ½mv²</text>
      <text x={150} y={126} fill={mu} fontSize="9.5" fontFamily="'DM Sans',sans-serif">Ep = mgh</text>
    </svg>
  );
}

function EneConservacionSVG({ tema }) {
  const a = tema.acento, mu = tema.muted;
  return (
    <svg viewBox="0 0 250 130" width="100%" style={{ display: "block", maxHeight: 140 }}>
      <line x1={20} y1={114} x2={230} y2={114} stroke={mu} strokeWidth="1.5" />
      <path d="M 44 36 C 92 42 120 110 208 112" stroke={a} strokeWidth="2.5" fill="none" />
      <circle cx={46} cy={32} r={7} fill={tema.acentoMed} stroke={a} strokeWidth="1.6" />
      <circle cx={206} cy={106} r={7} fill={a} />
      <text x={58} y={30} fill={mu} fontSize="10" fontFamily="'DM Sans',sans-serif">Ep máx (v = 0)</text>
      <text x={150} y={100} fill={mu} fontSize="10" fontFamily="'DM Sans',sans-serif">Ec máx</text>
    </svg>
  );
}

function EneMomentoSVG({ tema }) {
  const gr = tema.verde, mu = tema.muted, T = tema.texto;
  const cart = (x, y, w, label, fill) => (
    <g>
      <rect x={x} y={y} width={w} height={18} rx={3} fill={fill} stroke={tema.acento} strokeWidth="1.5" />
      <text x={x + w / 2} y={y + 13} fill={T} fontSize="10" fontFamily="Georgia,serif" textAnchor="middle">{label}</text>
      <circle cx={x + 6} cy={y + 20} r={3.5} fill={mu} />
      <circle cx={x + w - 6} cy={y + 20} r={3.5} fill={mu} />
    </g>
  );
  return (
    <svg viewBox="0 0 250 130" width="100%" style={{ display: "block", maxHeight: 140 }}>
      <text x={8} y={42} fill={mu} fontSize="10" fontFamily="'DM Sans',sans-serif">antes</text>
      {cart(54, 28, 34, "A", tema.acentoMed)}
      <Vector x1={90} y1={37} x2={116} y2={37} color={gr} label="v" lx={98} ly={24} />
      {cart(140, 28, 34, "B", tema.azulSuave)}
      <line x1={20} y1={64} x2={230} y2={64} stroke={tema.border} strokeWidth="1" strokeDasharray="3 3" />
      <text x={8} y={98} fill={mu} fontSize="10" fontFamily="'DM Sans',sans-serif">después</text>
      {cart(96, 84, 48, "A+B", tema.acentoMed)}
      <Vector x1={146} y1={93} x2={174} y2={93} color={gr} label="v'" lx={156} ly={80} />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// Diagramas de Termodinámica
// ═══════════════════════════════════════════════════════════════════════════

function TerPortadaSVG({ tema }) {
  const rj = tema.rojo, mu = tema.muted;
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 132, maxWidth: 320 }}>
      <rect x={118} y={16} width={14} height={76} rx={7} fill={tema.card} stroke={mu} strokeWidth="1.6" />
      <rect x={121} y={48} width={8} height={46} fill={rj} />
      <circle cx={125} cy={98} r={15} fill={rj} stroke={mu} strokeWidth="1.6" />
      {[28, 42, 56, 70].map((y) => (
        <line key={y} x1={134} y1={y} x2={143} y2={y} stroke={mu} strokeWidth="1.2" />
      ))}
    </svg>
  );
}

function TerEscalasSVG({ tema }) {
  const a = tema.acento, mu = tema.muted, rj = tema.rojo, az = tema.azul, T = tema.texto;
  const cols = [{ x: 60, t: "°C", hi: "100", lo: "0" }, { x: 125, t: "K", hi: "373", lo: "273" }, { x: 190, t: "°F", hi: "212", lo: "32" }];
  const yHi = 48, yLo = 114;
  return (
    <svg viewBox="0 0 250 142" width="100%" style={{ display: "block", maxHeight: 150 }}>
      <line x1={40} y1={yHi} x2={214} y2={yHi} stroke={rj} strokeWidth="1" strokeDasharray="4 3" opacity="0.55" />
      <line x1={40} y1={yLo} x2={214} y2={yLo} stroke={az} strokeWidth="1" strokeDasharray="4 3" opacity="0.55" />
      {cols.map((c, i) => (
        <g key={i}>
          <line x1={c.x} y1={34} x2={c.x} y2={122} stroke={mu} strokeWidth="1.6" />
          <text x={c.x} y={26} fill={a} fontSize="12" textAnchor="middle" fontFamily="'DM Sans',sans-serif" fontWeight="600">{c.t}</text>
          <line x1={c.x - 4} y1={yHi} x2={c.x + 4} y2={yHi} stroke={mu} strokeWidth="1.5" />
          <line x1={c.x - 4} y1={yLo} x2={c.x + 4} y2={yLo} stroke={mu} strokeWidth="1.5" />
          <text x={c.x + 8} y={yHi + 3} fill={T} fontSize="9.5" fontFamily="'IBM Plex Mono',monospace">{c.hi}</text>
          <text x={c.x + 8} y={yLo + 3} fill={T} fontSize="9.5" fontFamily="'IBM Plex Mono',monospace">{c.lo}</text>
        </g>
      ))}
      <text x={16} y={yHi + 2} fill={rj} fontSize="8" fontFamily="'DM Sans',sans-serif">hierve</text>
      <text x={14} y={yLo + 2} fill={az} fontSize="8" fontFamily="'DM Sans',sans-serif">congela</text>
    </svg>
  );
}

function TerDilatacionSVG({ tema }) {
  const a = tema.acento, rj = tema.rojo, mu = tema.muted, az = tema.azul;
  return (
    <svg viewBox="0 0 250 110" width="100%" style={{ display: "block", maxHeight: 120 }}>
      <rect x={30} y={26} width={120} height={16} rx={2} fill={tema.azulSuave} stroke={az} strokeWidth="1.5" />
      <text x={30} y={20} fill={az} fontSize="10" fontFamily="'DM Sans',sans-serif">L₀ (frío)</text>
      <rect x={30} y={64} width={170} height={16} rx={2} fill={tema.acentoMed} stroke={a} strokeWidth="1.5" />
      <text x={30} y={58} fill={a} fontSize="10" fontFamily="'DM Sans',sans-serif">caliente (se dilata)</text>
      <line x1={150} y1={42} x2={150} y2={92} stroke={mu} strokeWidth="1" strokeDasharray="3 3" />
      <line x1={150} y1={90} x2={200} y2={90} stroke={rj} strokeWidth="1.4" />
      <line x1={150} y1={86} x2={150} y2={94} stroke={rj} strokeWidth="1.2" />
      <line x1={200} y1={86} x2={200} y2={94} stroke={rj} strokeWidth="1.2" />
      <text x={175} y={104} fill={rj} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">ΔL</text>
    </svg>
  );
}

function TerGasSVG({ tema }) {
  const a = tema.acento, mu = tema.muted, rj = tema.rojo, az = tema.azul;
  const dots = [[95, 56], [116, 72], [131, 50], [110, 90], [136, 84], [100, 72], [125, 64], [141, 96]];
  return (
    <svg viewBox="0 0 250 130" width="100%" style={{ display: "block", maxHeight: 140 }}>
      <rect x={82} y={34} width={70} height={70} fill="none" stroke={mu} strokeWidth="1.8" />
      {dots.map((d, i) => <circle key={i} cx={d[0]} cy={d[1]} r={3} fill={a} />)}
      <rect x={80} y={26} width={74} height={8} rx={2} fill={tema.acentoMed} stroke={a} strokeWidth="1.5" />
      <Vector x1={117} y1={12} x2={117} y2={24} color={az} label="P" lx={122} ly={20} />
      <path d="M 108 104 Q 113 118 117 106 Q 121 118 126 104 Q 124 112 117 110 Q 110 112 108 104" fill={rj} />
      <text x={138} y={118} fill={rj} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic">T</text>
      <text x={158} y={72} fill={mu} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic">V</text>
    </svg>
  );
}

function TerTransferenciaSVG({ tema }) {
  const a = tema.acento, mu = tema.muted, rj = tema.rojo, az = tema.azul;
  return (
    <svg viewBox="0 0 250 104" width="100%" style={{ display: "block", maxHeight: 116 }}>
      {/* conducción */}
      <rect x={20} y={36} width={56} height={12} rx={2} fill={tema.acentoMed} stroke={a} strokeWidth="1.3" />
      <circle cx={20} cy={42} r={6} fill={rj} />
      <Vector x1={34} y1={42} x2={68} y2={42} color={mu} label="" sw={1.5} />
      <text x={48} y={66} fill={mu} fontSize="9.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">conducción</text>
      {/* convección */}
      <rect x={104} y={30} width={42} height={26} rx={2} fill="none" stroke={mu} strokeWidth="1.5" />
      <Vector x1={125} y1={54} x2={125} y2={34} color={rj} label="" sw={1.6} />
      <Vector x1={112} y1={34} x2={112} y2={54} color={az} label="" sw={1.6} />
      <Vector x1={138} y1={34} x2={138} y2={54} color={az} label="" sw={1.6} />
      <text x={125} y={66} fill={mu} fontSize="9.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">convección</text>
      {/* radiación */}
      <circle cx={205} cy={42} r={9} fill={rj} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const r = deg * Math.PI / 180;
        return <line key={deg} x1={205 + 12 * Math.cos(r)} y1={42 + 12 * Math.sin(r)} x2={205 + 18 * Math.cos(r)} y2={42 + 18 * Math.sin(r)} stroke={rj} strokeWidth="1.4" />;
      })}
      <text x={205} y={66} fill={mu} fontSize="9.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">radiación</text>
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// Diagramas de Ondas, Sonido y Óptica
// ═══════════════════════════════════════════════════════════════════════════

function OndPortadaSVG({ tema }) {
  const a = tema.acento;
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 132, maxWidth: 320 }}>
      <path d="M 20 60 Q 44 26 68 60 T 116 60 T 164 60 T 212 60" stroke={a} strokeWidth="2.6" fill="none" />
    </svg>
  );
}

function OndOndaSVG({ tema }) {
  const a = tema.acento, mu = tema.muted, bl = tema.azul, gr = tema.verde;
  const axis = 64;
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 130 }}>
      <line x1={18} y1={axis} x2={232} y2={axis} stroke={mu} strokeWidth="1" strokeDasharray="3 3" />
      <path d="M 24 64 Q 48 30 72 64 T 120 64 T 168 64 T 216 64" stroke={a} strokeWidth="2.5" fill="none" />
      <line x1={48} y1={30} x2={48} y2={104} stroke={mu} strokeWidth="1" strokeDasharray="3 3" />
      <line x1={144} y1={30} x2={144} y2={104} stroke={mu} strokeWidth="1" strokeDasharray="3 3" />
      <line x1={48} y1={98} x2={144} y2={98} stroke={bl} strokeWidth="1.4" />
      <polygon points={arrowHead(62, 98, 48, 98, 6)} fill={bl} />
      <polygon points={arrowHead(130, 98, 144, 98, 6)} fill={bl} />
      <text x={96} y={113} fill={bl} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">λ</text>
      <line x1={48} y1={64} x2={48} y2={30} stroke={gr} strokeWidth="1.4" />
      <text x={53} y={46} fill={gr} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic">A</text>
    </svg>
  );
}

function OndTiposSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted;
  const comp = [20, 30, 40, 53, 67, 79, 87, 93, 106, 120, 132, 140, 146, 159, 173, 185, 193, 199, 211];
  return (
    <svg viewBox="0 0 250 132" width="100%" style={{ display: "block", maxHeight: 142 }}>
      <path d="M 20 34 Q 44 14 68 34 T 116 34 T 164 34 T 212 34" stroke={a} strokeWidth="2.2" fill="none" />
      <line x1={44} y1={46} x2={44} y2={12} stroke={bl} strokeWidth="1.6" />
      <polygon points={arrowHead(44, 24, 44, 12, 6)} fill={bl} />
      <polygon points={arrowHead(44, 34, 44, 46, 6)} fill={bl} />
      <text x={120} y={58} fill={mu} fontSize="10" fontFamily="'DM Sans',sans-serif" textAnchor="middle">transversal</text>
      {comp.map((x, i) => <line key={i} x1={x} y1={78} x2={x} y2={104} stroke={a} strokeWidth="1.6" />)}
      <text x={120} y={124} fill={mu} fontSize="10" fontFamily="'DM Sans',sans-serif" textAnchor="middle">longitudinal (compresiones)</text>
    </svg>
  );
}

function OndReflexRefracSVG({ tema }) {
  const a = tema.acento, gr = tema.verde, rj = tema.rojo, mu = tema.muted;
  const ix = 125, iy = 72;
  return (
    <svg viewBox="0 0 250 132" width="100%" style={{ display: "block", maxHeight: 142 }}>
      <rect x={20} y={iy} width={210} height={54} fill={tema.azulSuave} />
      <line x1={20} y1={iy} x2={230} y2={iy} stroke={mu} strokeWidth="1.8" />
      <line x1={ix} y1={18} x2={ix} y2={122} stroke={mu} strokeWidth="1" strokeDasharray="4 3" />
      <Vector x1={72} y1={22} x2={ix} y2={iy} color={a} label="" sw={2.2} />
      <text x={58} y={20} fill={a} fontSize="9.5" fontFamily="'DM Sans',sans-serif">incidente</text>
      <Vector x1={ix} y1={iy} x2={178} y2={22} color={gr} label="" sw={2.2} />
      <text x={182} y={24} fill={gr} fontSize="9.5" fontFamily="'DM Sans',sans-serif">reflejado</text>
      <Vector x1={ix} y1={iy} x2={150} y2={118} color={rj} label="" sw={2.2} />
      <text x={154} y={116} fill={rj} fontSize="9.5" fontFamily="'DM Sans',sans-serif">refractado</text>
      <text x={26} y={iy - 6} fill={mu} fontSize="8.5" fontFamily="'DM Sans',sans-serif">medio 1</text>
      <text x={26} y={iy + 14} fill={mu} fontSize="8.5" fontFamily="'DM Sans',sans-serif">medio 2</text>
    </svg>
  );
}

function OndLenteSVG({ tema }) {
  const a = tema.acento, gr = tema.verde, mu = tema.muted;
  const lx = 120, F = 192, axis = 60;
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 130 }}>
      <line x1={20} y1={axis} x2={232} y2={axis} stroke={mu} strokeWidth="1" strokeDasharray="3 3" />
      <path d={`M ${lx} 22 Q ${lx + 14} ${axis} ${lx} 98 Q ${lx - 14} ${axis} ${lx} 22 Z`} fill={tema.acentoMed} stroke={a} strokeWidth="1.8" />
      {[36, 60, 84].map((y, i) => (
        <g key={i}>
          <line x1={20} y1={y} x2={lx} y2={y} stroke={gr} strokeWidth="1.8" />
          <line x1={lx} y1={y} x2={F} y2={axis} stroke={gr} strokeWidth="1.8" />
        </g>
      ))}
      <circle cx={F} cy={axis} r={4} fill={a} />
      <text x={F + 5} y={axis - 6} fill={a} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">F</text>
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// Diagramas de Electricidad y Magnetismo
// ═══════════════════════════════════════════════════════════════════════════

function ElePortadaSVG({ tema }) {
  const a = tema.acento;
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 132, maxWidth: 320 }}>
      <polygon points="138,14 104,62 124,62 100,106 152,52 130,52 152,14" fill={tema.acentoMed} stroke={a} strokeWidth="2.2" strokeLinejoin="round" />
    </svg>
  );
}

function EleCoulombSVG({ tema }) {
  const rj = tema.rojo, mu = tema.muted, T = tema.texto;
  return (
    <svg viewBox="0 0 250 110" width="100%" style={{ display: "block", maxHeight: 120 }}>
      <line x1={76} y1={55} x2={174} y2={55} stroke={mu} strokeWidth="1" strokeDasharray="4 3" />
      <text x={125} y={48} fill={mu} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">r</text>
      <circle cx={60} cy={55} r={16} fill={`${rj}33`} stroke={rj} strokeWidth="1.8" />
      <text x={60} y={61} fill={rj} fontSize="18" fontFamily="Georgia,serif" textAnchor="middle">+</text>
      <circle cx={190} cy={55} r={16} fill={`${rj}33`} stroke={rj} strokeWidth="1.8" />
      <text x={190} y={61} fill={rj} fontSize="18" fontFamily="Georgia,serif" textAnchor="middle">+</text>
      <Vector x1={42} y1={55} x2={16} y2={55} color={T} label="F" lx={20} ly={48} />
      <Vector x1={208} y1={55} x2={234} y2={55} color={T} label="F" lx={222} ly={48} />
    </svg>
  );
}

function EleCircuitoSVG({ tema }) {
  const a = tema.acento, mu = tema.muted, T = tema.texto;
  const zig = "100,28 106,20 112,36 118,20 124,36 130,20 136,36 142,20 150,28";
  return (
    <svg viewBox="0 0 250 122" width="100%" style={{ display: "block", maxHeight: 132 }}>
      {/* alambres */}
      <line x1={40} y1={28} x2={100} y2={28} stroke={mu} strokeWidth="1.8" />
      <line x1={150} y1={28} x2={210} y2={28} stroke={mu} strokeWidth="1.8" />
      <line x1={210} y1={28} x2={210} y2={96} stroke={mu} strokeWidth="1.8" />
      <line x1={40} y1={28} x2={40} y2={96} stroke={mu} strokeWidth="1.8" />
      <line x1={40} y1={96} x2={110} y2={96} stroke={mu} strokeWidth="1.8" />
      <line x1={140} y1={96} x2={210} y2={96} stroke={mu} strokeWidth="1.8" />
      {/* resistencia */}
      <polyline points={zig} fill="none" stroke={a} strokeWidth="2.2" />
      <text x={125} y={14} fill={a} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">R</text>
      {/* batería */}
      <line x1={118} y1={86} x2={118} y2={106} stroke={T} strokeWidth="2.2" />
      <line x1={132} y1={91} x2={132} y2={101} stroke={T} strokeWidth="3.4" />
      <text x={125} y={119} fill={T} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">V</text>
      {/* corriente */}
      <Vector x1={210} y1={50} x2={210} y2={74} color={a} label="I" lx={216} ly={66} />
    </svg>
  );
}

function EleSerieParaleloSVG({ tema }) {
  const a = tema.acento, mu = tema.muted, T = tema.texto;
  const z = (x) => `${x},34 ${x + 5},27 ${x + 11},41 ${x + 17},27 ${x + 23},41 ${x + 29},27 ${x + 35},34`;
  const zp = (x, y) => `${x},${y} ${x + 5},${y - 7} ${x + 11},${y + 7} ${x + 17},${y - 7} ${x + 23},${y + 7} ${x + 29},${y - 7} ${x + 35},${y}`;
  return (
    <svg viewBox="0 0 250 132" width="100%" style={{ display: "block", maxHeight: 142 }}>
      {/* serie */}
      <text x={12} y={38} fill={mu} fontSize="9.5" fontFamily="'DM Sans',sans-serif">serie</text>
      <line x1={56} y1={34} x2={84} y2={34} stroke={mu} strokeWidth="1.6" />
      <polyline points={z(84)} fill="none" stroke={a} strokeWidth="2" />
      <line x1={119} y1={34} x2={147} y2={34} stroke={mu} strokeWidth="1.6" />
      <polyline points={z(147)} fill="none" stroke={a} strokeWidth="2" />
      <line x1={182} y1={34} x2={214} y2={34} stroke={mu} strokeWidth="1.6" />
      {/* paralelo */}
      <text x={12} y={99} fill={mu} fontSize="9.5" fontFamily="'DM Sans',sans-serif">paralelo</text>
      <line x1={64} y1={96} x2={84} y2={96} stroke={mu} strokeWidth="1.6" />
      <line x1={84} y1={78} x2={84} y2={114} stroke={mu} strokeWidth="1.6" />
      <line x1={186} y1={78} x2={186} y2={114} stroke={mu} strokeWidth="1.6" />
      <line x1={186} y1={96} x2={206} y2={96} stroke={mu} strokeWidth="1.6" />
      <polyline points={zp(110, 78)} fill="none" stroke={a} strokeWidth="2" />
      <line x1={84} y1={78} x2={110} y2={78} stroke={mu} strokeWidth="1.6" />
      <line x1={145} y1={78} x2={186} y2={78} stroke={mu} strokeWidth="1.6" />
      <polyline points={zp(110, 114)} fill="none" stroke={a} strokeWidth="2" />
      <line x1={84} y1={114} x2={110} y2={114} stroke={mu} strokeWidth="1.6" />
      <line x1={145} y1={114} x2={186} y2={114} stroke={mu} strokeWidth="1.6" />
    </svg>
  );
}

function EleMagnetismoSVG({ tema }) {
  const rj = tema.rojo, az = tema.azul, mu = tema.muted, T = tema.texto;
  const mx = 78, mw = 94, my = 52, mh = 22;
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 130 }}>
      {/* campo */}
      {[0, 1].map((i) => {
        const d = 14 + i * 14;
        return (
          <g key={i}>
            <path d={`M ${mx} ${my + mh / 2} C ${mx - 6} ${my - d} ${mx + mw + 6} ${my - d} ${mx + mw} ${my + mh / 2}`} fill="none" stroke={mu} strokeWidth="1.2" opacity="0.6" />
            <path d={`M ${mx} ${my + mh / 2} C ${mx - 6} ${my + mh + d} ${mx + mw + 6} ${my + mh + d} ${mx + mw} ${my + mh / 2}`} fill="none" stroke={mu} strokeWidth="1.2" opacity="0.6" />
          </g>
        );
      })}
      {/* imán */}
      <rect x={mx} y={my} width={mw / 2} height={mh} fill={`${rj}44`} stroke={rj} strokeWidth="1.6" />
      <rect x={mx + mw / 2} y={my} width={mw / 2} height={mh} fill={`${az}44`} stroke={az} strokeWidth="1.6" />
      <text x={mx + mw / 4} y={my + 16} fill={rj} fontSize="14" fontFamily="Georgia,serif" fontWeight="700" textAnchor="middle">N</text>
      <text x={mx + 3 * mw / 4} y={my + 16} fill={az} fontSize="14" fontFamily="Georgia,serif" fontWeight="700" textAnchor="middle">S</text>
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// Diagramas de Fluidos
// ═══════════════════════════════════════════════════════════════════════════

function FluPortadaSVG({ tema }) {
  const a = tema.acento, mu = tema.muted;
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 132, maxWidth: 320 }}>
      <path d="M 95 32 L 95 100 L 155 100 L 155 32" fill="none" stroke={mu} strokeWidth="1.8" />
      <path d="M 95 58 Q 110 50 125 58 T 155 58 L 155 100 L 95 100 Z" fill={`${a}33`} stroke={a} strokeWidth="1.4" />
      <path d="M 125 12 C 116 24 116 32 125 32 C 134 32 134 24 125 12 Z" fill={`${a}55`} stroke={a} strokeWidth="1.4" />
    </svg>
  );
}

function FluPresionSVG({ tema }) {
  const a = tema.acento, mu = tema.muted, az = tema.azul;
  const px = 125, py = 92;
  return (
    <svg viewBox="0 0 250 132" width="100%" style={{ display: "block", maxHeight: 142 }}>
      <path d="M 60 22 L 60 118 L 190 118 L 190 22" fill="none" stroke={mu} strokeWidth="1.8" />
      <rect x={61} y={30} width={128} height={88} fill={`${az}22`} />
      <line x1={61} y1={30} x2={189} y2={30} stroke={az} strokeWidth="1.4" />
      <line x1={px} y1={30} x2={px} y2={py} stroke={mu} strokeWidth="1" strokeDasharray="3 3" />
      <text x={px + 6} y={62} fill={mu} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">h</text>
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const r = deg * Math.PI / 180;
        const x2 = px + 18 * Math.cos(r), y2 = py + 18 * Math.sin(r);
        return <g key={deg}><line x1={px} y1={py} x2={x2} y2={y2} stroke={a} strokeWidth="1.5" /><polygon points={arrowHead(px, py, x2, y2, 5)} fill={a} /></g>;
      })}
      <circle cx={px} cy={py} r={3} fill={a} />
    </svg>
  );
}

function FluPascalSVG({ tema }) {
  const a = tema.acento, mu = tema.muted, az = tema.azul, T = tema.texto;
  return (
    <svg viewBox="0 0 250 124" width="100%" style={{ display: "block", maxHeight: 134 }}>
      {/* líquido en U */}
      <path d="M 42 56 L 42 100 L 208 100 L 208 56 L 188 56 L 188 84 L 62 84 L 62 56 Z" fill={`${az}33`} stroke={az} strokeWidth="1.4" />
      {/* tubos */}
      <line x1={42} y1={48} x2={42} y2={100} stroke={mu} strokeWidth="1.6" />
      <line x1={62} y1={48} x2={62} y2={84} stroke={mu} strokeWidth="1.6" />
      <line x1={188} y1={48} x2={188} y2={84} stroke={mu} strokeWidth="1.6" />
      <line x1={208} y1={48} x2={208} y2={100} stroke={mu} strokeWidth="1.6" />
      {/* pistón pequeño */}
      <rect x={40} y={48} width={24} height={7} fill={tema.acentoMed} stroke={a} strokeWidth="1.4" />
      <Vector x1={52} y1={30} x2={52} y2={46} color={a} label="" sw={2} />
      <text x={30} y={26} fill={T} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic">F₁,A₁</text>
      {/* pistón grande */}
      <rect x={186} y={48} width={24} height={7} fill={tema.acentoMed} stroke={a} strokeWidth="1.4" />
      <Vector x1={198} y1={46} x2={198} y2={26} color={a} label="" sw={2.6} />
      <text x={182} y={20} fill={T} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic">F₂,A₂</text>
    </svg>
  );
}

function FluArquimedesSVG({ tema }) {
  const a = tema.acento, mu = tema.muted, az = tema.azul, rj = tema.rojo, gr = tema.verde;
  const surf = 52;
  return (
    <svg viewBox="0 0 250 130" width="100%" style={{ display: "block", maxHeight: 140 }}>
      <path d="M 55 28 L 55 118 L 195 118 L 195 28" fill="none" stroke={mu} strokeWidth="1.8" />
      <rect x={56} y={surf} width={138} height={66} fill={`${az}22`} />
      <line x1={56} y1={surf} x2={194} y2={surf} stroke={az} strokeWidth="1.4" />
      <rect x={104} y={38} width={42} height={34} fill={tema.acentoMed} stroke={a} strokeWidth="1.6" />
      <Vector x1={125} y1={72} x2={125} y2={92} color={gr} label="E" lx={131} ly={88} />
      <Vector x1={125} y1={38} x2={125} y2={18} color={rj} label="P" lx={131} ly={26} />
    </svg>
  );
}

function FluContinuidadSVG({ tema }) {
  const a = tema.acento, mu = tema.muted, az = tema.azul, T = tema.texto;
  return (
    <svg viewBox="0 0 250 110" width="100%" style={{ display: "block", maxHeight: 120 }}>
      <path d="M 30 30 L 120 30 L 220 46 L 220 64 L 120 80 L 30 80 Z" fill={`${az}22`} stroke={mu} strokeWidth="1.8" />
      <Vector x1={56} y1={56} x2={86} y2={56} color={a} label="" sw={2.2} />
      <text x={66} y={70} fill={T} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic">v₁</text>
      <Vector x1={150} y1={56} x2={200} y2={56} color={a} label="" sw={2.2} />
      <text x={170} y={70} fill={T} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic">v₂</text>
      <text x={36} y={24} fill={mu} fontSize="9.5" fontFamily="Georgia,serif" fontStyle="italic">A₁</text>
      <text x={206} y={40} fill={mu} fontSize="9.5" fontFamily="Georgia,serif" fontStyle="italic">A₂</text>
    </svg>
  );
}

function renderEjercicioSVG(svgDiagram, tema) {
  if (svgDiagram === "ce1-lll")      return <Ce1LllSVG     tema={tema} />;
  if (svgDiagram === "ce2-medidas")  return <Ce2CondMedSVG tema={tema} />;
  if (svgDiagram === "ce3-ala")      return <Ce3AlaSVG     tema={tema} />;
  if (svgDiagram === "ce4-aaa")      return <Ce4AaaSVG     tema={tema} />;
  if (svgDiagram === "ce5-angulo")   return <Ce5AngleSVG   tema={tema} />;
  if (svgDiagram === "se-aa-ej1")    return <SeAaEj1SVG    tema={tema} />;
  if (svgDiagram === "se-aa-ej2")    return <SeAaEj2SVG    tema={tema} />;
  if (svgDiagram === "se-lll-ej1")   return <SeLllEj1SVG   tema={tema} />;
  if (svgDiagram === "se-lll-s1")    return <SeLllS1SVG    tema={tema} />;
  if (svgDiagram === "se-lll-s2")    return <SeLllS2SVG    tema={tema} />;
  if (svgDiagram === "se-lll-s3")    return <SeLllS3SVG    tema={tema} />;
  if (svgDiagram === "se-lll-ej2")   return <SeLllEj2SVG   tema={tema} />;
  if (svgDiagram === "se-lal-ej1")   return <SeLalEj1SVG   tema={tema} />;
  if (svgDiagram === "se-lal-ej2")   return <SeLalEj2SVG   tema={tema} />;
  if (svgDiagram === "se-lal-s2")    return <SeLalS2SVG    tema={tema} />;
  if (svgDiagram === "se-k3")         return <SeK3SVG         tema={tema} />;
  if (svgDiagram === "se-areas")     return <SeAreasSVG     tema={tema} />;
  if (svgDiagram === "se-pitagoras") return <SePitSVG       tema={tema} />;
  if (svgDiagram === "se-paralela")  return <SeParalelaSVG  tema={tema} />;
  if (svgDiagram === "se-sombra")    return <SeSombraSVG    tema={tema} />;
  if (svgDiagram === "pe1-rect")     return <Pe1RectSVG     tema={tema} />;
  if (svgDiagram === "pe2-rombo")    return <Pe2RomboSVG    tema={tema} />;
  if (svgDiagram === "pe3-cuadrado") return <Pe3CuadradoSVG tema={tema} />;
  if (svgDiagram === "te1-area")     return <Te1AreaSVG     tema={tema} />;
  if (svgDiagram === "te2-mediana")  return <Te2MedianaSVG  tema={tema} />;
  if (svgDiagram === "te3-iso")      return <Te3IsoSVG      tema={tema} />;
  if (svgDiagram === "poe1-hex")     return <Poe1HexSVG     tema={tema} />;
  if (svgDiagram === "poe2-angext")  return <Poe2AngExtSVG  tema={tema} />;
  if (svgDiagram === "poe3-suma")    return <Poe3SumaSVG    tema={tema} />;
  if (svgDiagram === "cce1-radio")   return <Cce1RadioSVG   tema={tema} />;
  if (svgDiagram === "cce2-sector")  return <Cce2SectorSVG  tema={tema} />;
  if (svgDiagram === "cce3-arco")    return <Cce3ArcoSVG    tema={tema} />;
  if (svgDiagram === "cce4-tang")    return <Cce4TangSVG    tema={tema} />;
  if (svgDiagram === "ti-ej1")       return <TiEj1SVG       tema={tema} />;
  if (svgDiagram === "ti-ej2")       return <TiEj2SVG       tema={tema} />;
  if (svgDiagram === "ti-ej3")       return <TiEj3SVG       tema={tema} />;
  if (svgDiagram === "ej-dado-mayor4") return <DadoMayor4SVG  tema={tema} />;
  if (svgDiagram === "ej-carta-as")    return <CartaAsSVG     tema={tema} />;
  if (svgDiagram === "dos-dados")      return <DosDadosSVG    tema={tema} />;
  if (svgDiagram === "ej-dos-monedas") return <DosMonedasSVG  tema={tema} />;
  if (svgDiagram === "ej-urna-rav")    return <UrnaSumaSVG    tema={tema} />;
  if (svgDiagram === "ej-moneda-dado") return <MonedaDadoSVG  tema={tema} />;
  if (svgDiagram === "ej-urna-r5a3")   return <UrnaSinReempSVG tema={tema} />;
  if (svgDiagram === "ej-ruleta")      return <RuletaSVG      tema={tema} />;
  if (svgDiagram === "ej-combinatoria") return <CombinaPersonasSVG tema={tema} />;
  if (svgDiagram === "ej-est-media")       return <Ej_EstMediaSVG      tema={tema} />;
  if (svgDiagram === "ej-est-mediana")     return <Ej_EstMedianaSVG    tema={tema} />;
  if (svgDiagram === "ej-est-moda")        return <Ej_EstModaSVG       tema={tema} />;
  if (svgDiagram === "ej-est-rango")       return <Ej_EstRangoSVG      tema={tema} />;
  if (svgDiagram === "ej-est-tabla")       return <TablaFrecuenciasEst tema={tema} />;
  if (svgDiagram === "ej-est-mediana-par") return <Ej_EstMedianaParSVG tema={tema} />;
  if (svgDiagram === "cin-graf-xt")        return <CinGrafXtSVG        tema={tema} />;
  if (svgDiagram === "cin-ej-dt")          return <CinEjDtSVG          tema={tema} />;
  if (svgDiagram === "cin-caida-libre")    return <CinCaidaLibreSVG    tema={tema} />;
  if (svgDiagram === "cin-tiro-parabolico") return <CinTiroParabolicoSVG tema={tema} />;
  if (svgDiagram === "cin-ej-vt-area")     return <CinEjVtAreaSVG      tema={tema} />;
  if (svgDiagram === "din-fuerza-neta")    return <DinFuerzaNetaSVG    tema={tema} />;
  if (svgDiagram === "din-hooke")          return <DinHookeSVG         tema={tema} />;
  if (svgDiagram === "din-tercera-ley")    return <DinTerceraLeySVG    tema={tema} />;
  if (svgDiagram === "ene-trabajo")        return <EneTrabajoSVG       tema={tema} />;
  if (svgDiagram === "ene-conservacion")   return <EneConservacionSVG  tema={tema} />;
  if (svgDiagram === "ene-momento")        return <EneMomentoSVG       tema={tema} />;
  if (svgDiagram === "ter-escalas")        return <TerEscalasSVG       tema={tema} />;
  if (svgDiagram === "ter-dilatacion")     return <TerDilatacionSVG    tema={tema} />;
  if (svgDiagram === "ter-gas")            return <TerGasSVG           tema={tema} />;
  if (svgDiagram === "ter-transferencia")  return <TerTransferenciaSVG tema={tema} />;
  if (svgDiagram === "ond-onda")           return <OndOndaSVG          tema={tema} />;
  if (svgDiagram === "ond-tipos")          return <OndTiposSVG         tema={tema} />;
  if (svgDiagram === "ond-reflexion-refraccion") return <OndReflexRefracSVG tema={tema} />;
  if (svgDiagram === "ond-lente")          return <OndLenteSVG         tema={tema} />;
  if (svgDiagram === "ele-coulomb")        return <EleCoulombSVG       tema={tema} />;
  if (svgDiagram === "ele-circuito")       return <EleCircuitoSVG      tema={tema} />;
  if (svgDiagram === "ele-serie-paralelo") return <EleSerieParaleloSVG tema={tema} />;
  if (svgDiagram === "ele-magnetismo")     return <EleMagnetismoSVG    tema={tema} />;
  if (svgDiagram === "flu-presion")        return <FluPresionSVG       tema={tema} />;
  if (svgDiagram === "flu-pascal")         return <FluPascalSVG        tema={tema} />;
  if (svgDiagram === "flu-arquimedes")     return <FluArquimedesSVG    tema={tema} />;
  if (svgDiagram === "flu-continuidad")    return <FluContinuidadSVG   tema={tema} />;
  if (svgDiagram === "as1-cuad-circ") return <As1CuadCircSVG tema={tema} />;
  if (svgDiagram === "as2-corona")   return <As2CoronaSVG   tema={tema} />;
  if (svgDiagram === "as3-semi-rect") return <As3SemiRectSVG tema={tema} />;
  if (svgDiagram === "as4-sector-tri") return <As4SectorTriSVG tema={tema} />;
  if (svgDiagram === "as5-trap-semi") return <As5TrapSemiSVG tema={tema} />;
  if (svgDiagram === "as6-hex-circ") return <As6HexCircSVG  tema={tema} />;
  if (svgDiagram === "as7-tri-circ") return <As7TriCircSVG  tema={tema} />;
  if (svgDiagram === "as8-complejo") return <As8ComplejoSVG tema={tema} />;
  return null;
}

function SlideEjercicio({ slide, modo, votos, totalVotos, respuestaDada, onResponder, tema, resaltadoIdx, onResaltar }) {
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
            {renderEjercicioSVG(slide.svgDiagram, tema)}
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
            let color = "#c4bfb3";

            if (modo === "alumno" && done) {
              if (isOk) {
                bg = "rgba(59,158,255,0.12)";
                border = "2px solid rgba(59,158,255,0.5)";
                color = "#3b9eff";
              } else if (isSel) {
                bg = "rgba(245,200,66,0.10)";
                border = "2px solid rgba(245,200,66,0.5)";
                color = "#f5c842";
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
            {respuestaDada === correcta ? "✓ " : "✗ "}
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

function SlideReglaRica({ slide, tema, modo, resaltadoIdx, onResaltar }) {
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
              onClick={handleClick}
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
                    const [c0, c1, c2] = bloque.columnas || ["Tiempo", "✓ Correcto", "✗ Error"];
                    return (
                      <tr style={{ borderBottom: `1px solid ${tema.border}` }}>
                        <th style={{ padding: "5px 14px", textAlign: "left", color: tema.muted, fontFamily: tema.mono, fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 400 }}>{c0}</th>
                        <th style={{ padding: "5px 14px", textAlign: "left", color: tema.verde, fontFamily: tema.mono, fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 400 }}>{c1}</th>
                        <th style={{ padding: "5px 14px", textAlign: "left", color: "#f5c842", fontFamily: tema.mono, fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 400 }}>{c2}</th>
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
                      <td style={{ padding: "5px 14px", color: tema.verde, fontFamily: tema.mono, fontWeight: 600 }}>{fila.correcto}</td>
                      <td style={{ padding: "5px 14px", color: tema.muted, fontFamily: tema.mono }}>{fila.error}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        if (bloque.tipo === "diagrama") {
          const svgMap = {
            "acento-clasificacion":   <AcentoClasificacionSVG    tema={tema} />,
            "diptongo-hiato":         <DiptongoHiatoSVG          tema={tema} />,
            "cohesion-panorama":           <CohesionPanoramaSVG          tema={tema} />,
            "correferencia-personal":      <CorrreferenciaPersonalSVG    tema={tema} />,
            "elipsis-nominal":             <ElipsisNominalSVG            tema={tema} />,
            "lexico-semantica-panorama":   <LexicoSemanticaPanoramaSVG   tema={tema} />,
            "sinonimia-tipos":             <SinonimiasTiposSVG           tema={tema} />,
            "sinonimia-contextual":        <SinonimiaContextualSVG       tema={tema} />,
            "antonimia-tipos":             <AntonimiasTiposSVG           tema={tema} />,
            "antonimia-contextual":        <AntonimiaContextualSVG       tema={tema} />,
            "campo-semantico":                  <CampoSemanticoSVG                 tema={tema} />,
            "marcadores-panorama":             <MarcadoresPanoramaSVG             tema={tema} />,
            "marcadores-adicion":              <MarcadoresAdicionSVG              tema={tema} />,
            "marcadores-adversativos":         <MarcadoresAdversativosSVG         tema={tema} />,
            "marcadores-causa-consecuencia":   <MarcadoresCausaConsecuenciaSVG    tema={tema} />,
            "marcadores-temporales":           <MarcadoresTemporalesSVG           tema={tema} />,
            "marcadores-reformulacion":        <MarcadoresReformulacionSVG        tema={tema} />,
            "grafo-panorama":    <GrafoPanoramaSVG    tema={tema} />,
            "grafo-vocales":     <GrafoVocalesSVG     tema={tema} />,
            "grafo-bv":          <GrafoBVSVG          tema={tema} />,
            "grafo-ck":          <GrafoCKSVG          tema={tema} />,
            "grafo-gj":          <GrafoGJSVG          tema={tema} />,
            "grafo-secuencias":  <GrafoSecuenciasSVG  tema={tema} />,
            // Geografía — Tema 1: Tierra
            "geo-coordenadas":        <GeoCoordenadaSVG        tema={tema} />,
            "geo-husos":              <GeoHusosSVG              tema={tema} />,
            "geo-placas":             <GeoPlacastSVG            tema={tema} />,
            "geo-ciclo-hidrologico":  <GeoCicloHidrologicoSVG  tema={tema} />,
            // Geografía — Globo 3D
            "geo-globo-3d": <GloboTerraqueo3D tema={tema} />,
            // Geografía — Complemento: Recursos, Mar y Política
            "geo-minerales":      <GeoMineralesSVG      tema={tema} />,
            "geo-rios":           <GeoRiosSVG           tema={tema} />,
            "geo-ciclones":       <GeoCiclonesSVG       tema={tema} />,
            "geo-organizacion":   <GeoOrganizacionSVG   tema={tema} />,
            // Geografía — Tema 2: Humana
            "geo-regiones":   <GeoRegionesSVG   tema={tema} />,
            "geo-deterioro":  <GeoDeterioroSVG  tema={tema} />,
            "geo-poblacion":  <GeoPoblacionSVG  tema={tema} />,
            "geo-economia":   <GeoEconomiaSVG   tema={tema} />,
            // Biología: Pensamiento Científico
            "biologia-celula":              <BiologiaCelulaSVG              tema={tema} />,
            "biologia-herencia":            <BiologiaHerenciaSVG            tema={tema} />,
            "biologia-evolucion":           <BiologiaEvolucionSVG           tema={tema} />,
            "biologia-genetica-aplicada":   <BiologiaGeneticaAplicadaSVG   tema={tema} />,
            "biologia-biodiversidad":       <BiologiaBiodiversidadSVG       tema={tema} />,
            "biologia-adaptacion":          <BiologiaAdaptacionSVG          tema={tema} />,
            "biologia-cadena-trofica":      <BiologiaCadenaTroficaSVG       tema={tema} />,
            // Química: Pensamiento Científico
            "quimica-modelos-atomicos":      <QuimicaModelosAtomicosSVG      tema={tema} />,
            "quimica-biomoleculas":          <QuimicaBiomoleculasSVG          tema={tema} />,
            "quimica-mezclas":               <QuimicaMezclasSVG               tema={tema} />,
            "quimica-separacion":            <QuimicaSeparacionSVG            tema={tema} />,
            "quimica-reacciones":            <QuimicaReaccionesSVG            tema={tema} />,
            "quimica-energia-reacciones":    <QuimicaEnergiaReaccionesSVG    tema={tema} />,
            "quimica-impacto":               <QuimicaImpactoSVG               tema={tema} />,
            // Física: Pensamiento Científico
            "fisica-estados-materia":   <FisicaEstadosMateriaSVG   tema={tema} />,
            "fisica-fuerzas":           <FisicaFuerzasSVG           tema={tema} />,
            "fisica-vel-acel":          <FisicaVelAcelSVG           tema={tema} />,
            "fisica-sistema-solar":     <FisicaSistemaSolarSVG      tema={tema} />,
            "fisica-energia-mecanica":  <FisicaEnergiaMecanicaSVG   tema={tema} />,
            "fisica-circuito":          <FisicaCircuitoSVG          tema={tema} />,
            "fisica-transformaciones":  <FisicaTransformacionesSVG  tema={tema} />,
          };
          return (
            <div key={i} onClick={handleClick}
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
              {svgMap[bloque.id] || null}
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
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(15px, 2.2vw, 22px)', fontWeight: 700, color: tema.texto, margin: '2px 0 0', lineHeight: 1.2 }}>{slide.titulo}</h2>
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
function AcentoClasificacionSVG({ tema }) {
  const tipos = [
    { nombre: "Aguda",        subname: "oxítona",        silabas: ["__","__","__","TÓN"], ejemplo: "ca-FÉ",    color: tema.acento },
    { nombre: "Llana",        subname: "paroxítona",     silabas: ["__","__","TÓN","__"], ejemplo: "CA-sa",   color: tema.azul   },
    { nombre: "Esdrújula",    subname: "proparoxítona",  silabas: ["__","TÓN","__","__"], ejemplo: "MÉ-di-co", color: tema.verde  },
    { nombre: "Sobreesdrúj.", subname: "",               silabas: ["TÓN","__","__","__"], ejemplo: "DÍ-ga-me-lo", color: "#c084fc" },
  ];
  const W = 680, H = 130, col = W / 4;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }}>
      {tipos.map(({ nombre, subname, silabas, ejemplo, color }, ci) => {
        const cx = ci * col + col / 2;
        return (
          <g key={ci}>
            <text x={cx} y={16} fill={color} fontSize="11.5" fontFamily="'DM Sans',sans-serif"
              fontWeight="700" textAnchor="middle" letterSpacing="0.04em">
              {nombre.toUpperCase()}
            </text>
            {subname && (
              <text x={cx} y={28} fill={tema.muted} fontSize="9" fontFamily="'DM Sans',sans-serif"
                textAnchor="middle" opacity="0.65">{subname}</text>
            )}
            {silabas.map((s, si) => {
              const bw = 32, bh = 26, gap = 6;
              const totalW = silabas.length * bw + (silabas.length - 1) * gap;
              const bx = cx - totalW / 2 + si * (bw + gap);
              const isTon = s === "TÓN";
              return (
                <g key={si}>
                  <rect x={bx} y={36} width={bw} height={bh} rx="5"
                    fill={isTon ? `${color}28` : "rgba(255,255,255,0.04)"}
                    stroke={isTon ? color : "rgba(255,255,255,0.12)"}
                    strokeWidth={isTon ? 1.8 : 1} />
                  {isTon && (
                    <text x={bx + bw / 2} y={54} fill={color} fontSize="9.5"
                      fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">●</text>
                  )}
                </g>
              );
            })}
            <text x={cx} y={84} fill={tema.texto} fontSize="11" fontFamily="Georgia,serif"
              fontStyle="italic" textAnchor="middle" opacity="0.85">{ejemplo}</text>
            {/* Regla de tilde */}
            <text x={cx} y={102} fill={tema.muted} fontSize="9" fontFamily="'DM Sans',sans-serif"
              textAnchor="middle">
              {ci === 0 ? "tilde si termina en V/N/S" :
               ci === 1 ? "tilde si NO termina en V/N/S" :
               "siempre tilde"}
            </text>
          </g>
        );
      })}
      {/* Divisores */}
      {[1,2,3].map(i => (
        <line key={i} x1={i * col} y1={8} x2={i * col} y2={H - 10}
          stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
      ))}
    </svg>
  );
}

// ─── Acentuación: diptongo vs. hiato ─────────────────────────────────────────
function DiptongoHiatoSVG({ tema }) {
  return (
    <svg viewBox="0 0 640 160" width="100%" style={{ display: "block" }}>
      {/* DIPTONGO */}
      <text x="155" y="20" fill={tema.azul} fontSize="12" fontFamily="'DM Sans',sans-serif"
        fontWeight="700" letterSpacing="0.12em" textAnchor="middle">DIPTONGO</text>
      <text x="155" y="34" fill={tema.muted} fontSize="9" fontFamily="'DM Sans',sans-serif"
        textAnchor="middle">vocal cerrada ÁTONA + vocal</text>
      {/* Ejemplo: bue-no */}
      {[["b",""], ["u","cerrada\nátona"], ["e","abierta"], ["-",""], ["n",""], ["o",""]].map(([ch, lbl], i) => {
        const x = 55 + i * 28;
        const isVowel = ["u","e","o"].includes(ch);
        const isSpecial = ch === "u";
        return (
          <g key={i}>
            <text x={x} y={65} fill={isSpecial ? tema.azul : isVowel ? tema.verde : tema.muted}
              fontSize="22" fontFamily="Georgia,serif" textAnchor="middle" fontWeight={isVowel ? "700" : "400"}>
              {ch}
            </text>
          </g>
        );
      })}
      {/* Bracket bajo ue */}
      <path d="M 70,72 Q 70,82 83,82 Q 97,82 97,72" fill="none" stroke={tema.azul} strokeWidth="1.5"/>
      <text x="83" y="95" fill={tema.azul} fontSize="9" fontFamily="'DM Sans',sans-serif" textAnchor="middle">1 sílaba</text>
      <text x="83" y="107" fill={tema.azul} fontSize="9" fontFamily="'DM Sans',sans-serif" textAnchor="middle">«bue»</text>
      {/* bracket de toda la sílaba bue */}
      <text x="155" y="130" fill={tema.verde} fontSize="10" fontFamily="'DM Sans',sans-serif" textAnchor="middle">bue-no → 2 sílabas</text>
      <text x="155" y="145" fill={tema.muted} fontSize="9" fontFamily="'DM Sans',sans-serif" textAnchor="middle">tilde sobre vocal abierta: huésped</text>

      {/* Divisor */}
      <line x1="310" y1="10" x2="310" y2="155" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4,3"/>

      {/* HIATO */}
      <text x="480" y="20" fill={tema.acento} fontSize="12" fontFamily="'DM Sans',sans-serif"
        fontWeight="700" letterSpacing="0.12em" textAnchor="middle">HIATO</text>
      <text x="480" y="34" fill={tema.muted} fontSize="9" fontFamily="'DM Sans',sans-serif"
        textAnchor="middle">vocal cerrada TÓNICA + vocal</text>
      {/* Ejemplo: pa-ís */}
      {[["p",""], ["a","abierta"], ["-",""], ["í","cerrada\ntónica"], ["s",""]].map(([ch, lbl], i) => {
        const x = 380 + i * 32;
        const isA = ch === "a";
        const isI = ch === "í";
        return (
          <g key={i}>
            <text x={x} y={65}
              fill={isI ? tema.acento : isA ? tema.verde : tema.muted}
              fontSize="22" fontFamily="Georgia,serif" textAnchor="middle"
              fontWeight={(isA || isI) ? "700" : "400"}>
              {ch}
            </text>
            {isI && (
              <text x={x} y={82} fill={tema.acento} fontSize="8"
                fontFamily="'DM Sans',sans-serif" textAnchor="middle">TÓNICA</text>
            )}
          </g>
        );
      })}
      {/* Separate brackets */}
      <path d="M 374,72 Q 374,82 381,82 Q 388,82 388,72" fill="none" stroke={tema.verde} strokeWidth="1.5"/>
      <path d="M 405,72 Q 405,82 412,82 Q 419,82 419,72" fill="none" stroke={tema.acento} strokeWidth="1.5"/>
      <text x="380" y="95" fill={tema.verde} fontSize="9" fontFamily="'DM Sans',sans-serif" textAnchor="middle">«pa»</text>
      <text x="412" y="95" fill={tema.acento} fontSize="9" fontFamily="'DM Sans',sans-serif" textAnchor="middle">«ís»</text>
      <text x="480" y="115" fill={tema.acento} fontSize="10" fontFamily="'DM Sans',sans-serif" textAnchor="middle">pa-ís → 2 sílabas distintas</text>
      <text x="480" y="130" fill={tema.acento} fontSize="10" fontFamily="'DM Sans',sans-serif" textAnchor="middle" fontWeight="700">tilde en la í SIEMPRE</text>
      <text x="480" y="145" fill={tema.muted} fontSize="9" fontFamily="'DM Sans',sans-serif" textAnchor="middle">aunque sea llana terminada en s</text>
    </svg>
  );
}

// ─── Cohesión Gramatical: Panorama ────────────────────────────────────────────
function CohesionPanoramaSVG({ tema }) {
  const leftItems = ["Pron. personales", "Pron. demostrativos", "Pron. relativos", "Sustitución léxica"];
  const rightItems = ["Elipsis nominal", "Elipsis verbal", "Elipsis oracional"];
  return (
    <svg viewBox="0 0 520 155" width="100%" style={{ display: "block" }}>
      <rect x="135" y="3" width="250" height="28" rx="7" fill={`${tema.acento}18`} stroke={tema.acento} strokeWidth="1.5"/>
      <text x="260" y="21" fill={tema.acento} fontSize="10.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">COHESIÓN GRAMATICAL</text>
      <line x1="192" y1="31" x2="115" y2="54" stroke={`${tema.azul}88`} strokeWidth="1.5" strokeDasharray="4,2"/>
      <line x1="328" y1="31" x2="405" y2="54" stroke={`${tema.verde}88`} strokeWidth="1.5" strokeDasharray="4,2"/>
      <rect x="50" y="54" width="130" height="26" rx="6" fill={`${tema.azul}18`} stroke={tema.azul} strokeWidth="1.5"/>
      <text x="115" y="71" fill={tema.azul} fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.06em">CORREFERENCIA</text>
      <rect x="340" y="54" width="130" height="26" rx="6" fill={`${tema.verde}18`} stroke={tema.verde} strokeWidth="1.5"/>
      <text x="405" y="71" fill={tema.verde} fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.06em">REL. ELÍPTICAS</text>
      <line x1="66" y1="80" x2="66" y2="148" stroke={`${tema.azul}50`} strokeWidth="1.2"/>
      {leftItems.map((item, i) => (
        <g key={i}>
          <line x1="66" y1={91 + i * 19} x2="76" y2={91 + i * 19} stroke={`${tema.azul}50`} strokeWidth="1.2"/>
          <circle cx="81" cy={91 + i * 19} r="2.5" fill={tema.azul} opacity="0.6"/>
          <text x="88" y={95 + i * 19} fill={tema.sub} fontSize="9" fontFamily="'DM Sans',sans-serif">{item}</text>
        </g>
      ))}
      <line x1="356" y1="80" x2="356" y2="130" stroke={`${tema.verde}50`} strokeWidth="1.2"/>
      {rightItems.map((item, i) => (
        <g key={i}>
          <line x1="356" y1={91 + i * 19} x2="366" y2={91 + i * 19} stroke={`${tema.verde}50`} strokeWidth="1.2"/>
          <circle cx="371" cy={91 + i * 19} r="2.5" fill={tema.verde} opacity="0.6"/>
          <text x="378" y={95 + i * 19} fill={tema.sub} fontSize="9" fontFamily="'DM Sans',sans-serif">{item}</text>
        </g>
      ))}
    </svg>
  );
}

// ─── Cohesión Gramatical: Correferencia Personal ──────────────────────────────
function CorrreferenciaPersonalSVG({ tema }) {
  const az = tema.azul, vd = tema.verde;
  return (
    <svg viewBox="0 0 510 125" width="100%" style={{ display: "block" }}>
      <text x="96"  y="13" fill={tema.muted} fontSize="8" fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.16em" fontWeight="600">ANTECEDENTE</text>
      <text x="256" y="13" fill={tema.muted} fontSize="8" fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.16em" fontWeight="600">PRONOMBRE</text>
      <text x="408" y="13" fill={tema.muted} fontSize="8" fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.16em" fontWeight="600">CONCORDANCIA</text>
      <line x1="8" y1="18" x2="502" y2="18" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
      {/* Row 1: la directora → ella */}
      <rect x="8" y="26" width="176" height="26" rx="6" fill={`${az}20`} stroke={`${az}88`} strokeWidth="1.5"/>
      <text x="96" y="43" fill={az} fontSize="14" fontFamily="Georgia,serif" textAnchor="middle" fontStyle="italic">la directora</text>
      <line x1="186" y1="39" x2="208" y2="39" stroke={az} strokeWidth="1.5"/>
      <polygon points="208,35 216,39 208,43" fill={az}/>
      <rect x="220" y="26" width="72" height="26" rx="6" fill={`${az}20`} stroke={`${az}88`} strokeWidth="1.5"/>
      <text x="256" y="43" fill={az} fontSize="14" fontFamily="Georgia,serif" textAnchor="middle" fontStyle="italic">ella</text>
      <text x="306" y="35" fill={tema.sub} fontSize="8.5" fontFamily="'DM Sans',sans-serif">fem. sing. · 3ª persona</text>
      <text x="306" y="47" fill={tema.sub} fontSize="8.5" fontFamily="'DM Sans',sans-serif">= sujeto de la 2ª oración</text>
      {/* Row 2: el informe → lo */}
      <rect x="8" y="68" width="176" height="26" rx="6" fill={`${vd}20`} stroke={`${vd}88`} strokeWidth="1.5"/>
      <text x="96" y="85" fill={vd} fontSize="14" fontFamily="Georgia,serif" textAnchor="middle" fontStyle="italic">el informe</text>
      <line x1="186" y1="81" x2="208" y2="81" stroke={vd} strokeWidth="1.5"/>
      <polygon points="208,77 216,81 208,85" fill={vd}/>
      <rect x="220" y="68" width="72" height="26" rx="6" fill={`${vd}20`} stroke={`${vd}88`} strokeWidth="1.5"/>
      <text x="256" y="85" fill={vd} fontSize="14" fontFamily="Georgia,serif" textAnchor="middle" fontStyle="italic">lo</text>
      <text x="306" y="77" fill={tema.sub} fontSize="8.5" fontFamily="'DM Sans',sans-serif">masc. sing. · OD átono</text>
      <text x="306" y="89" fill={tema.sub} fontSize="8.5" fontFamily="'DM Sans',sans-serif">= OD de la 2ª oración</text>
      <text x="8" y="114" fill={tema.muted} fontSize="8.5" fontFamily="Georgia,serif" fontStyle="italic">«La directora presentó el informe. Ella lo revisó con cuidado.»</text>
    </svg>
  );
}

// ─── Cohesión Gramatical: Elipsis Nominal ─────────────────────────────────────
function ElipsisNominalSVG({ tema }) {
  const az = tema.azul;
  const tokens  = [
    { x: 8,   w: 80, label: "Quiero el", hi: false, gap: false },
    { x: 96,  w: 50, label: "libro",     hi: true,  gap: false },
    { x: 154, w: 40, label: "azul",      hi: false, gap: false },
    { x: 202, w: 40, label: "y el",      hi: false, gap: false },
    { x: 250, w: 50, label: "libro",     hi: true,  gap: false },
    { x: 308, w: 46, label: "rojo.",     hi: false, gap: false },
  ];
  const tokensE = tokens.map((t, i) => i === 4 ? { ...t, label: "∅", hi: false, gap: true } : t);
  const ry = [26, 72];
  const h  = 22;
  return (
    <svg viewBox="0 0 520 105" width="100%" style={{ display: "block" }}>
      <text x="8" y="14" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" letterSpacing="0.15em" fontWeight="600">ORACIÓN ORIGINAL</text>
      <text x="8" y="60" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" letterSpacing="0.15em" fontWeight="600">CON ELIPSIS NOMINAL</text>
      {tokens.map((tok, i) => (
        <g key={i}>
          <rect x={tok.x} y={ry[0]} width={tok.w} height={h} rx="4"
            fill={tok.hi ? `${az}22` : "rgba(255,255,255,0.04)"}
            stroke={tok.hi ? `${az}88` : "rgba(255,255,255,0.1)"}
            strokeWidth={tok.hi ? 1.5 : 1}/>
          <text x={tok.x + tok.w / 2} y={ry[0] + 15} textAnchor="middle"
            fill={tok.hi ? az : tema.sub} fontSize="11" fontFamily="Georgia,serif"
            fontStyle="italic" fontWeight={tok.hi ? "700" : "400"}>{tok.label}</text>
        </g>
      ))}
      {tokensE.map((tok, i) => (
        <g key={i}>
          <rect x={tok.x} y={ry[1]} width={tok.w} height={h} rx="4"
            fill={tok.gap ? "none" : tok.hi ? `${az}22` : "rgba(255,255,255,0.04)"}
            stroke={tok.gap ? az : tok.hi ? `${az}88` : "rgba(255,255,255,0.1)"}
            strokeWidth={tok.gap || tok.hi ? 1.5 : 1}
            strokeDasharray={tok.gap ? "5,3" : undefined}/>
          <text x={tok.x + tok.w / 2} y={ry[1] + 15} textAnchor="middle"
            fill={tok.gap ? `${az}99` : tok.hi ? az : tema.sub}
            fontSize="11" fontFamily="Georgia,serif"
            fontStyle="italic" fontWeight={tok.hi ? "700" : "400"}>{tok.label}</text>
        </g>
      ))}
      {/* Recovery arc from first "libro" (cx=121, top y=26) to gap (cx=275, top y=72) */}
      <path d="M 121,26 C 121,6 275,6 275,72" fill="none"
        stroke={`${az}88`} strokeWidth="1.3" strokeDasharray="5,3"/>
      <polygon points="270,68 275,76 280,68" fill={`${az}88`}/>
      <text x="200" y="10" fill={az} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">elemento recuperado del contexto</text>
      <text x="8" y="100" fill={tema.muted} fontSize="8" fontFamily="Georgia,serif" fontStyle="italic">Forma completa: «Quiero el libro azul y el libro rojo.»</text>
    </svg>
  );
}

// ─── Cohesión Léxico-Semántica: Panorama ─────────────────────────────────────
function LexicoSemanticaPanoramaSVG({ tema }) {
  const sinItems = ["Total", "Parcial", "Contextual"];
  const antItems = ["Gradual", "Complementaria", "Recíproca"];
  return (
    <svg viewBox="0 0 520 158" width="100%" style={{ display: "block" }}>
      <rect x="110" y="3" width="300" height="28" rx="7" fill={`${tema.acento}18`} stroke={tema.acento} strokeWidth="1.5"/>
      <text x="260" y="21" fill={tema.acento} fontSize="9.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">COHESIÓN LÉXICO-SEMÁNTICA</text>
      <line x1="190" y1="31" x2="110" y2="54" stroke={`${tema.azul}88`} strokeWidth="1.5" strokeDasharray="4,2"/>
      <line x1="330" y1="31" x2="410" y2="54" stroke={`${tema.acento}88`} strokeWidth="1.5" strokeDasharray="4,2"/>
      <line x1="260" y1="31" x2="260" y2="108" stroke={`${tema.verde}88`} strokeWidth="1.5" strokeDasharray="4,2"/>
      <rect x="40" y="54" width="140" height="26" rx="6" fill={`${tema.azul}18`} stroke={tema.azul} strokeWidth="1.5"/>
      <text x="110" y="71" fill={tema.azul} fontSize="9.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.06em">SINONIMIA</text>
      <rect x="340" y="54" width="140" height="26" rx="6" fill={`${tema.acento}18`} stroke={tema.acento} strokeWidth="1.5"/>
      <text x="410" y="71" fill={tema.acento} fontSize="9.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.06em">ANTONIMIA</text>
      <rect x="178" y="108" width="164" height="26" rx="6" fill={`${tema.verde}18`} stroke={tema.verde} strokeWidth="1.5"/>
      <text x="260" y="125" fill={tema.verde} fontSize="9.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.06em">CAMPO SEMÁNTICO</text>
      <line x1="56" y1="80" x2="56" y2="150" stroke={`${tema.azul}50`} strokeWidth="1.2"/>
      {sinItems.map((item, i) => (
        <g key={i}>
          <line x1="56" y1={91 + i * 19} x2="66" y2={91 + i * 19} stroke={`${tema.azul}50`} strokeWidth="1.2"/>
          <circle cx="71" cy={91 + i * 19} r="2.5" fill={tema.azul} opacity="0.6"/>
          <text x="78" y={95 + i * 19} fill={tema.sub} fontSize="9" fontFamily="'DM Sans',sans-serif">{item}</text>
        </g>
      ))}
      <line x1="356" y1="80" x2="356" y2="150" stroke={`${tema.acento}50`} strokeWidth="1.2"/>
      {antItems.map((item, i) => (
        <g key={i}>
          <line x1="356" y1={91 + i * 19} x2="366" y2={91 + i * 19} stroke={`${tema.acento}50`} strokeWidth="1.2"/>
          <circle cx="371" cy={91 + i * 19} r="2.5" fill={tema.acento} opacity="0.6"/>
          <text x="378" y={95 + i * 19} fill={tema.sub} fontSize="9" fontFamily="'DM Sans',sans-serif">{item}</text>
        </g>
      ))}
      <text x="260" y="148" fill={tema.sub} fontSize="8.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">Hiperonimia · Hiponimia · Cohiponimia</text>
    </svg>
  );
}

// ─── Cohesión Léxico-Semántica: Tipos de Sinonimia ────────────────────────────
function SinonimiasTiposSVG({ tema }) {
  const cols = [
    { label: "TOTAL",       color: tema.azul,   desc: ["Idéntico en todos", "los contextos"],       ex: ["comenzar / iniciar", "automóvil / coche"] },
    { label: "PARCIAL",     color: tema.verde,  desc: ["Similar con matices", "de registro"],       ex: ["casa / hogar", "morir / fallecer"] },
    { label: "CONTEXTUAL",  color: tema.acento, desc: ["Equivalente solo", "en este fragmento"],    ex: ["«el sol» / «astro rey»", "«Newton» / «el físico»"] },
  ];
  const colW = 160, gap = 10, startX = 5;
  return (
    <svg viewBox="0 0 520 138" width="100%" style={{ display: "block" }}>
      <defs>
        <linearGradient id="ls-sinGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor={tema.azul}   stopOpacity="0.8"/>
          <stop offset="50%"  stopColor={tema.verde}  stopOpacity="0.8"/>
          <stop offset="100%" stopColor={tema.acento} stopOpacity="0.8"/>
        </linearGradient>
      </defs>
      <rect x="5" y="2" width="510" height="5" rx="2.5" fill="url(#ls-sinGrad)"/>
      <text x="5"   y="16" fill={tema.azul}   fontSize="7" fontFamily="'DM Sans',sans-serif" letterSpacing="0.08em" fontWeight="700">IDENTIDAD SEMÁNTICA ←</text>
      <text x="515" y="16" fill={tema.acento} fontSize="7" fontFamily="'DM Sans',sans-serif" letterSpacing="0.08em" fontWeight="700" textAnchor="end">→ EQUIVALENCIA CONTEXTUAL</text>
      {cols.map((col, i) => {
        const x = startX + i * (colW + gap);
        return (
          <g key={i}>
            <rect x={x} y="20" width={colW} height="116" rx="7" fill={`${col.color}10`} stroke={`${col.color}55`} strokeWidth="1.5"/>
            <rect x={x} y="20" width={colW} height="22" rx="7" fill={`${col.color}25`}/>
            <rect x={x} y="34" width={colW} height="8" fill={`${col.color}25`}/>
            <text x={x + colW / 2} y="35" fill={col.color} fontSize="9" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.12em">{col.label}</text>
            {col.desc.map((line, j) => (
              <text key={j} x={x + colW / 2} y={56 + j * 13} fill={tema.sub} fontSize="8.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">{line}</text>
            ))}
            <line x1={x + 10} y1="84" x2={x + colW - 10} y2="84" stroke={`${col.color}30`} strokeWidth="1"/>
            {col.ex.map((e, j) => (
              <text key={j} x={x + colW / 2} y={98 + j * 16} fill={col.color} fontSize="8.5" fontFamily="Georgia,serif" textAnchor="middle" fontStyle="italic">{e}</text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

// ─── Cohesión Léxico-Semántica: Sinonimia Contextual ─────────────────────────
function SinonimiaContextualSVG({ tema }) {
  const az = tema.azul, vd = tema.verde, ac = tema.acento;
  return (
    <svg viewBox="0 0 520 125" width="100%" style={{ display: "block" }}>
      <text x="260" y="12" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.14em" fontWeight="600">LA MISMA PALABRA — DISTINTOS SINÓNIMOS SEGÚN EL CONTEXTO</text>
      <line x1="5" y1="17" x2="515" y2="17" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      {/* Left: contexto intelectual */}
      <rect x="5" y="22" width="240" height="100" rx="7" fill={`${az}10`} stroke={`${az}44`} strokeWidth="1.5"/>
      <text x="125" y="38" fill={az} fontSize="8.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">CONTEXTO INTELECTUAL</text>
      <text x="125" y="55" fill={tema.texto} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">«un ensayo ligero»</text>
      <line x1="125" y1="60" x2="125" y2="69" stroke={az} strokeWidth="1.5"/>
      <polygon points="121,69 125,75 129,69" fill={az}/>
      <rect x="16" y="78" width="78" height="20" rx="5" fill={`${vd}18`} stroke={vd} strokeWidth="1.5"/>
      <text x="55" y="92" fill={vd} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">ameno ✓</text>
      <rect x="112" y="78" width="120" height="20" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="4,2"/>
      <text x="172" y="92" fill={tema.muted} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">liviano ✗</text>
      <text x="125" y="114" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle" fontStyle="italic">liviano refiere al peso físico, no al estilo</text>
      {/* Divider */}
      <line x1="260" y1="18" x2="260" y2="125" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="5,3"/>
      {/* Right: contexto físico */}
      <rect x="275" y="22" width="240" height="100" rx="7" fill={`${ac}10`} stroke={`${ac}44`} strokeWidth="1.5"/>
      <text x="395" y="38" fill={ac} fontSize="8.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">CONTEXTO FÍSICO</text>
      <text x="395" y="55" fill={tema.texto} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">«una mochila ligera»</text>
      <line x1="395" y1="60" x2="395" y2="69" stroke={ac} strokeWidth="1.5"/>
      <polygon points="391,69 395,75 399,69" fill={ac}/>
      <rect x="284" y="78" width="82" height="20" rx="5" fill={`${vd}18`} stroke={vd} strokeWidth="1.5"/>
      <text x="325" y="92" fill={vd} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">liviana ✓</text>
      <rect x="380" y="78" width="118" height="20" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="4,2"/>
      <text x="439" y="92" fill={tema.muted} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">amena ✗</text>
      <text x="395" y="114" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle" fontStyle="italic">amena es estilo literario, no peso físico</text>
    </svg>
  );
}

// ─── Cohesión Léxico-Semántica: Tipos de Antonimia ───────────────────────────
function AntonimiasTiposSVG({ tema }) {
  return (
    <svg viewBox="0 0 520 148" width="100%" style={{ display: "block" }}>
      <defs>
        <linearGradient id="ls-antGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#60a5fa" stopOpacity="0.9"/>
          <stop offset="50%"  stopColor="#a78bfa" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#f97316" stopOpacity="0.9"/>
        </linearGradient>
      </defs>
      {/* Column titles */}
      <text x="86"  y="13" fill={tema.azul}   fontSize="9" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.12em">GRADUALES</text>
      <text x="258" y="13" fill={tema.acento} fontSize="9" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.12em">COMPLEMENTARIOS</text>
      <text x="434" y="13" fill={tema.verde}  fontSize="9" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.12em">RECÍPROCOS</text>
      <line x1="172" y1="0" x2="172" y2="148" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <line x1="344" y1="0" x2="344" y2="148" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      {/* GRADUALES: spectrum bar */}
      <rect x="10" y="25" width="152" height="8" rx="4" fill="url(#ls-antGrad)"/>
      <circle cx="10"  cy="29" r="4" fill="#60a5fa"/>
      <circle cx="86"  cy="29" r="3.5" fill="#a78bfa"/>
      <circle cx="162" cy="29" r="4" fill="#f97316"/>
      <text x="10"  y="49" fill="#60a5fa" fontSize="10" fontFamily="Georgia,serif" fontStyle="italic">frío</text>
      <text x="86"  y="49" fill="#a78bfa" fontSize="10" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">tibio</text>
      <text x="162" y="49" fill="#f97316" fontSize="10" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">caliente</text>
      <text x="86" y="64" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">Hay términos intermedios</text>
      <text x="86" y="81" fill={tema.sub}   fontSize="8.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">joven / adulto / anciano</text>
      <text x="86" y="96" fill={tema.sub}   fontSize="8.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">pequeño / mediano / grande</text>
      <text x="86" y="115" fill={tema.muted} fontSize="7.5" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">«no frío» ≠ «caliente»</text>
      <text x="86" y="128" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">La negación no implica el opuesto</text>
      {/* COMPLEMENTARIOS: binary boxes */}
      <rect x="181" y="22" width="72" height="28" rx="6" fill={`${tema.acento}18`} stroke={tema.acento} strokeWidth="1.5"/>
      <text x="217" y="40" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">vivo</text>
      <rect x="263" y="22" width="72" height="28" rx="6" fill={`${tema.acento}18`} stroke={tema.acento} strokeWidth="1.5"/>
      <text x="299" y="40" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">muerto</text>
      <rect x="192" y="58" width="152" height="16" rx="4" fill="rgba(0,0,0,0.3)" stroke={`${tema.acento}33`} strokeWidth="1"/>
      <text x="268" y="70" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.07em">NO HAY TÉRMINO MEDIO</text>
      <text x="258" y="88"  fill={tema.sub}   fontSize="8.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">verdadero / falso</text>
      <text x="258" y="103" fill={tema.sub}   fontSize="8.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">soltero / casado</text>
      <text x="258" y="122" fill={tema.muted} fontSize="7.5" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">«no vivo» = «muerto»</text>
      <text x="258" y="135" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">La negación implica el opuesto</text>
      {/* RECÍPROCOS: bidirectional arrow */}
      <rect x="356" y="22" width="76" height="28" rx="6" fill={`${tema.verde}18`} stroke={tema.verde} strokeWidth="1.5"/>
      <text x="394" y="40" fill={tema.verde} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">comprar</text>
      <rect x="442" y="22" width="70" height="28" rx="6" fill={`${tema.verde}18`} stroke={tema.verde} strokeWidth="1.5"/>
      <text x="477" y="40" fill={tema.verde} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">vender</text>
      <line x1="432" y1="36" x2="442" y2="36" stroke={tema.verde} strokeWidth="1.8"/>
      <polygon points="432,32 424,36 432,40" fill={tema.verde}/>
      <polygon points="442,32 450,36 442,40" fill={tema.verde}/>
      <text x="434" y="67" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">Presuposición mutua</text>
      <text x="434" y="83"  fill={tema.sub}   fontSize="8.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">enseñar / aprender</text>
      <text x="434" y="98"  fill={tema.sub}   fontSize="8.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">preguntar / responder</text>
      <text x="434" y="117" fill={tema.muted} fontSize="7.5" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A vende implica B compra</text>
      <text x="434" y="130" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">La relación es simétrica</text>
    </svg>
  );
}

// ─── Cohesión Léxico-Semántica: Antonimia Contextual ─────────────────────────
function AntonimiaContextualSVG({ tema }) {
  const az = tema.azul, vd = tema.verde, ac = tema.acento;
  return (
    <svg viewBox="0 0 520 118" width="100%" style={{ display: "block" }}>
      <text x="260" y="12" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.14em" fontWeight="600">EL ANTÓNIMO ES RELATIVO AL MARCO DE REFERENCIA</text>
      {/* Left box */}
      <rect x="5" y="18" width="230" height="96" rx="7" fill={`${az}10`} stroke={`${az}44`} strokeWidth="1.5"/>
      <text x="120" y="34" fill={az} fontSize="8.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">ESCALA: ELEFANTES</text>
      <text x="120" y="53" fill={tema.sub}  fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">«un elefante</text>
      <text x="120" y="68" fill={az}        fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" fontWeight="700" textAnchor="middle">pequeño»</text>
      <text x="120" y="87" fill={tema.muted} fontSize="8" fontFamily="'DM Sans',sans-serif" textAnchor="middle">≈ 3 metros de altura</text>
      <text x="120" y="105" fill={tema.muted} fontSize="7.5" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">enorme en escala humana</text>
      {/* Center */}
      <text x="260" y="62" fill={ac} fontSize="22" fontFamily="Georgia,serif" textAnchor="middle">≠</text>
      <text x="260" y="77" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">referente</text>
      <text x="260" y="89" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">distinto</text>
      {/* Right box */}
      <rect x="285" y="18" width="230" height="96" rx="7" fill={`${vd}10`} stroke={`${vd}44`} strokeWidth="1.5"/>
      <text x="400" y="34" fill={vd} fontSize="8.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">ESCALA: HORMIGAS</text>
      <text x="400" y="53" fill={tema.sub}  fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">«una hormiga</text>
      <text x="400" y="68" fill={vd}        fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" fontWeight="700" textAnchor="middle">grande»</text>
      <text x="400" y="87" fill={tema.muted} fontSize="8" fontFamily="'DM Sans',sans-serif" textAnchor="middle">≈ 1 centímetro</text>
      <text x="400" y="105" fill={tema.muted} fontSize="7.5" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">minúscula en escala humana</text>
    </svg>
  );
}

// ─── Cohesión Léxico-Semántica: Campo Semántico ───────────────────────────────
function CampoSemanticoSVG({ tema }) {
  const az = tema.azul, vd = tema.verde, ac = tema.acento;
  const lv2 = [
    { x: 20,  label: "mamífero" },
    { x: 200, label: "ave" },
    { x: 378, label: "reptil" },
  ];
  const lv3 = [
    { x: 6,   w: 62,  label: "perro",     px: 55  },
    { x: 76,  w: 58,  label: "gato",      px: 95  },
    { x: 186, w: 68,  label: "águila",    px: 250 },
    { x: 262, w: 56,  label: "pato",      px: 248 },
    { x: 358, w: 72,  label: "serpiente", px: 418 },
    { x: 438, w: 68,  label: "lagarto",   px: 418 },
  ];
  return (
    <svg viewBox="0 0 520 148" width="100%" style={{ display: "block" }}>
      {/* Level 0: hiperónimo */}
      <rect x="185" y="4" width="150" height="24" rx="6" fill={`${az}22`} stroke={az} strokeWidth="1.5"/>
      <text x="260" y="20" fill={az} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic" fontWeight="700" textAnchor="middle">ANIMAL</text>
      <text x="260" y="35" fill={az} fontSize="7" fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.1em" opacity="0.7">HIPERÓNIMO</text>
      {/* Lines to level 1 */}
      <line x1="215" y1="28" x2="75"  y2="62" stroke={`${az}55`} strokeWidth="1.3"/>
      <line x1="260" y1="28" x2="255" y2="62" stroke={`${az}55`} strokeWidth="1.3"/>
      <line x1="305" y1="28" x2="433" y2="62" stroke={`${az}55`} strokeWidth="1.3"/>
      {/* Level 1: cohipónimos */}
      {lv2.map(({ x, label }) => (
        <g key={label}>
          <rect x={x} y="62" width="110" height="22" rx="5" fill={`${vd}18`} stroke={vd} strokeWidth="1.3"/>
          <text x={x + 55} y="77" fill={vd} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{label}</text>
        </g>
      ))}
      <text x="260" y="96" fill={vd} fontSize="7" fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.1em" opacity="0.7">COHIPÓNIMOS</text>
      {/* Lines to level 2 */}
      {[
        [55, 37], [55, 105], [255, 222], [255, 290], [433, 394], [433, 472],
      ].map(([py, cy], i) => {
        const lv1x = [75, 75, 245, 245, 423, 423][i];
        const lv2cx = [37, 105, 220, 290, 394, 472][i];
        return <line key={i} x1={lv1x} y1="84" x2={lv2cx} y2="108" stroke={`${vd}44`} strokeWidth="1.2"/>;
      })}
      {/* Level 2: hipónimos */}
      {lv3.map(({ x, w, label }) => (
        <g key={label}>
          <rect x={x} y="108" width={w} height="20" rx="4" fill={`${ac}14`} stroke={`${ac}44`} strokeWidth="1"/>
          <text x={x + w / 2} y="122" fill={ac} fontSize="9" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{label}</text>
        </g>
      ))}
      <text x="260" y="143" fill={ac} fontSize="7" fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.1em" opacity="0.7">HIPÓNIMOS (más específicos)</text>
    </svg>
  );
}

// ─── Marcadores Textuales: Panorama ──────────────────────────────────────────
function MarcadoresPanoramaSVG({ tema }) {
  const cats = [
    { col: 0, row: 0, label: "ADICIÓN",       color: tema.azul,   items: ["además, también", "es más, incluso"] },
    { col: 1, row: 0, label: "ADVERSATIVOS",  color: tema.acento, items: ["pero, sin embargo", "aunque, no obstante"] },
    { col: 2, row: 0, label: "CAUSALES",      color: tema.verde,  items: ["porque, ya que", "puesto que, dado que"] },
    { col: 0, row: 1, label: "CONSECUTIVOS",  color: "#c084fc",   items: ["por lo tanto", "en consecuencia, por ende"] },
    { col: 1, row: 1, label: "TEMPORALES",    color: "#fb923c",   items: ["primero, luego", "después, finalmente"] },
    { col: 2, row: 1, label: "REFORMULACIÓN", color: "#94a3b8",   items: ["es decir, o sea", "en resumen, por ejemplo"] },
  ];
  const startX = 10, colW = 160, colGap = 5;
  const rowY = [38, 100];
  return (
    <svg viewBox="0 0 520 158" width="100%" style={{ display: "block" }}>
      <rect x="135" y="3" width="250" height="27" rx="6" fill={`${tema.acento}18`} stroke={tema.acento} strokeWidth="1.5"/>
      <text x="260" y="21" fill={tema.acento} fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">MARCADORES TEXTUALES</text>
      <text x="260" y="32" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">guían al lector en las relaciones lógicas entre las ideas</text>
      {cats.map(({ col, row, label, color, items }) => {
        const x = startX + col * (colW + colGap);
        const y = rowY[row];
        return (
          <g key={label}>
            <rect x={x} y={y} width={colW} height={56} rx="5" fill={`${color}10`} stroke={`${color}50`} strokeWidth="1.3"/>
            <rect x={x} y={y} width={colW} height="18" rx="5" fill={`${color}22`}/>
            <rect x={x} y={y + 12} width={colW} height="6" fill={`${color}22`}/>
            <text x={x + colW / 2} y={y + 13} fill={color} fontSize="8" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.12em">{label}</text>
            {items.map((item, j) => (
              <text key={j} x={x + colW / 2} y={y + 31 + j * 15} fill={tema.sub} fontSize="8.5" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{item}</text>
            ))}
            {row === 0 && (
              <line x1={x + colW / 2} y1="30" x2={x + colW / 2} y2={y} stroke={`${color}44`} strokeWidth="1" strokeDasharray="3,2"/>
            )}
          </g>
        );
      })}
    </svg>
  );
}

// ─── Marcadores Textuales: Adición ───────────────────────────────────────────
function MarcadoresAdicionSVG({ tema }) {
  const cols = [
    { label: "SIMPLE",    color: tema.azul,   markers: ["además", "también", "igualmente"],    caption: "Suma información de igual peso" },
    { label: "ESCALADA",  color: tema.acento, markers: ["es más", "incluso", "hasta"],          caption: "B tiene más fuerza o peso que A" },
    { label: "PARALELA",  color: tema.verde,  markers: ["asimismo", "del mismo modo", "paralelamente"], caption: "B va en el mismo sentido que A" },
  ];
  return (
    <svg viewBox="0 0 520 118" width="100%" style={{ display: "block" }}>
      {cols.map(({ label, color, markers, caption }, i) => {
        const x = 5 + i * 172;
        const cw = 162;
        return (
          <g key={i}>
            <rect x={x} y="3" width={cw} height="112" rx="6" fill={`${color}10`} stroke={`${color}50`} strokeWidth="1.3"/>
            <rect x={x} y="3" width={cw} height="20" rx="6" fill={`${color}25`}/>
            <rect x={x} y="15" width={cw} height="8" fill={`${color}25`}/>
            <text x={x + cw / 2} y="17" fill={color} fontSize="8.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.12em">{label}</text>
            {markers.map((m, j) => (
              <text key={j} x={x + cw / 2} y={36 + j * 15} fill={color} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{m}</text>
            ))}
            {i === 0 && (
              <g>
                <rect x={x + cw / 2 - 20} y="82" width="40" height="13" rx="3" fill={`${color}22`} stroke={`${color}60`} strokeWidth="1"/>
                <text x={x + cw / 2} y="92" fill={color} fontSize="8" fontFamily="'DM Sans',sans-serif" textAnchor="middle">A</text>
                <rect x={x + cw / 2 - 20} y="97" width="40" height="13" rx="3" fill={`${color}22`} stroke={`${color}60`} strokeWidth="1"/>
                <text x={x + cw / 2} y="107" fill={color} fontSize="8" fontFamily="'DM Sans',sans-serif" textAnchor="middle">+ B</text>
              </g>
            )}
            {i === 1 && (
              <g>
                <rect x={x + cw / 2 - 24} y="80" width="48" height="16" rx="3" fill={`${color}28`} stroke={`${color}70`} strokeWidth="1.5"/>
                <text x={x + cw / 2} y="92" fill={color} fontSize="9" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">B  ↑↑↑</text>
                <rect x={x + cw / 2 - 18} y="98" width="36" height="12" rx="3" fill={`${color}15`} stroke={`${color}40`} strokeWidth="1"/>
                <text x={x + cw / 2} y="107" fill={color} fontSize="8" fontFamily="'DM Sans',sans-serif" textAnchor="middle">A</text>
              </g>
            )}
            {i === 2 && (
              <g>
                <rect x={x + cw / 2 - 24} y="82" width="22" height="22" rx="3" fill={`${color}22`} stroke={`${color}60`} strokeWidth="1"/>
                <text x={x + cw / 2 - 13} y="97" fill={color} fontSize="8" fontFamily="'DM Sans',sans-serif" textAnchor="middle">A</text>
                <rect x={x + cw / 2 + 2} y="82" width="22" height="22" rx="3" fill={`${color}22`} stroke={`${color}60`} strokeWidth="1"/>
                <text x={x + cw / 2 + 13} y="97" fill={color} fontSize="8" fontFamily="'DM Sans',sans-serif" textAnchor="middle">B</text>
              </g>
            )}
            <text x={x + cw / 2} y="113" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">{caption}</text>
          </g>
        );
      })}
    </svg>
  );
}

// ─── Marcadores Textuales: Adversativos ──────────────────────────────────────
function MarcadoresAdversativosSVG({ tema }) {
  const rows = [
    { marker: "pero",              color: tema.azul,   desc: "Contraste parcial — limita la primera cláusula",    force: 55 },
    { marker: "sin embargo · no obstante", color: tema.acento, desc: "Concesión fuerte (formal) — resultado inesperado", force: 100 },
    { marker: "aunque",            color: tema.verde,  desc: "Concesión: A es real pero no impide B",              force: 72 },
    { marker: "por el contrario",  color: "#c084fc",   desc: "Oposición total — niega o invierte lo anterior",     force: 140 },
  ];
  return (
    <svg viewBox="0 0 520 132" width="100%" style={{ display: "block" }}>
      <text x="5"   y="12" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" fontWeight="600" letterSpacing="0.12em">MARCADOR</text>
      <text x="140" y="12" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" fontWeight="600" letterSpacing="0.12em">FUNCIÓN</text>
      <text x="382" y="12" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" fontWeight="600" letterSpacing="0.12em">FUERZA DE OPOSICIÓN</text>
      <line x1="0" y1="15" x2="520" y2="15" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      {rows.map(({ marker, color, desc, force }, i) => {
        const y = 20 + i * 28;
        return (
          <g key={i}>
            <rect x="5" y={y} width="128" height="22" rx="5" fill={`${color}18`} stroke={`${color}55`} strokeWidth="1.3"/>
            <text x="69" y={y + 14} fill={color} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{marker}</text>
            <text x="140" y={y + 14} fill={tema.sub} fontSize="8" fontFamily="'DM Sans',sans-serif">{desc}</text>
            <rect x="382" y={y + 5} width="132" height="12" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            <rect x="382" y={y + 5} width={force} height="12" rx="3" fill={`${color}40`} stroke="none"/>
          </g>
        );
      })}
      <text x="382" y="129" fill={tema.muted} fontSize="7" fontFamily="'DM Sans',sans-serif">Débil</text>
      <text x="514" y="129" fill={tema.muted} fontSize="7" fontFamily="'DM Sans',sans-serif" textAnchor="end">Fuerte</text>
    </svg>
  );
}

// ─── Marcadores Textuales: Causa / Consecuencia ───────────────────────────────
function MarcadoresCausaConsecuenciaSVG({ tema }) {
  const az = tema.azul, ac = tema.acento;
  return (
    <svg viewBox="0 0 520 130" width="100%" style={{ display: "block" }}>
      {/* Background halves */}
      <rect x="0" y="0" width="520" height="64" fill={`${az}06`}/>
      <rect x="0" y="64" width="520" height="66" fill={`${ac}06`}/>
      <line x1="0" y1="64" x2="520" y2="64" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>

      {/* ── CAUSALES ── */}
      <text x="8" y="14" fill={az} fontSize="8.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" letterSpacing="0.12em">CAUSALES</text>
      <text x="8" y="25" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif">porque · ya que · puesto que · dado que · a causa de</text>
      <rect x="8"   y="31" width="88" height="22" rx="5" fill="rgba(0,0,0,0.25)" stroke="rgba(255,255,255,0.13)" strokeWidth="1"/>
      <text x="52"  y="45" fill={tema.sub} fontSize="8.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">Resultado</text>
      <line x1="98" y1="42" x2="148" y2="42" stroke={az} strokeWidth="1.8"/>
      <polygon points="98,38 90,42 98,46" fill={az}/>
      <text x="123" y="37" fill={az} fontSize="8.5" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">porque</text>
      <rect x="152" y="31" width="88" height="22" rx="5" fill={`${az}22`} stroke={az} strokeWidth="1.5"/>
      <text x="196" y="45" fill={az} fontSize="9" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">CAUSA</text>
      <text x="8" y="61" fill={tema.muted} fontSize="7.5" fontFamily="Georgia,serif" fontStyle="italic">«Llegó tarde porque perdió el autobús.»</text>

      {/* Right panel */}
      <rect x="274" y="3" width="242" height="58" rx="6" fill="rgba(0,0,0,0.2)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <text x="395" y="16" fill={az} fontSize="8" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">¿por qué ocurrió X?  →  lo nuevo = CAUSA</text>
      <text x="285" y="32" fill={tema.sub} fontSize="8" fontFamily="'DM Sans',sans-serif">«No vino,  »  +  «ya que estaba enfermo.»</text>
      <text x="285" y="46" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" fontStyle="italic">el marcador precede a la causa en la oración</text>

      {/* ── CONSECUTIVOS ── */}
      <text x="8" y="78" fill={ac} fontSize="8.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" letterSpacing="0.12em">CONSECUTIVOS</text>
      <text x="8" y="89" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif">por lo tanto · en consecuencia · por ende · de ahí que · así pues</text>
      <rect x="8"   y="95" width="88" height="22" rx="5" fill="rgba(0,0,0,0.25)" stroke="rgba(255,255,255,0.13)" strokeWidth="1"/>
      <text x="52"  y="109" fill={tema.sub} fontSize="8.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">Causa</text>
      <line x1="98" y1="106" x2="148" y2="106" stroke={ac} strokeWidth="1.8"/>
      <polygon points="148,102 156,106 148,110" fill={ac}/>
      <text x="123" y="101" fill={ac} fontSize="7.5" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">por lo tanto</text>
      <rect x="152" y="95" width="110" height="22" rx="5" fill={`${ac}22`} stroke={ac} strokeWidth="1.5"/>
      <text x="207" y="109" fill={ac} fontSize="9" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">CONSECUENCIA</text>
      <text x="8" y="126" fill={tema.muted} fontSize="7.5" fontFamily="Georgia,serif" fontStyle="italic">«Perdió el autobús. Por lo tanto, llegó tarde.»</text>

      {/* Right panel */}
      <rect x="274" y="67" width="242" height="58" rx="6" fill="rgba(0,0,0,0.2)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <text x="395" y="80" fill={ac} fontSize="8" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">¿qué resulta de X?  →  lo nuevo = EFECTO</text>
      <text x="285" y="96" fill={tema.sub} fontSize="8" fontFamily="'DM Sans',sans-serif">«Perdió el autobús.  »  +  «En consecuencia, llegó tarde.»</text>
      <text x="285" y="110" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" fontStyle="italic">el marcador precede a la consecuencia en la oración</text>
    </svg>
  );
}

// ─── Marcadores Textuales: Temporales ────────────────────────────────────────
function MarcadoresTemporalesSVG({ tema }) {
  const vd = tema.verde, az = tema.azul, ac = tema.acento;
  const TY = 50;
  const pts = [
    { x: 28,  label: "primero",    sub: "en primer lugar",   color: vd  },
    { x: 180, label: "luego",      sub: "a continuación",    color: az  },
    { x: 332, label: "después",    sub: "posteriormente",    color: az  },
    { x: 480, label: "finalmente", sub: "por último",        color: ac  },
  ];
  return (
    <svg viewBox="0 0 520 100" width="100%" style={{ display: "block" }}>
      <text x="28"  y="11" fill={vd} fontSize="7.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">INICIO</text>
      <text x="256" y="11" fill={az} fontSize="7.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">DESARROLLO</text>
      <text x="480" y="11" fill={ac} fontSize="7.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">CIERRE</text>
      {/* Timeline */}
      <line x1="28" y1={TY} x2="494" y2={TY} stroke="rgba(255,255,255,0.22)" strokeWidth="2.5"/>
      <polygon points={`488,${TY - 4} 498,${TY} 488,${TY + 4}`} fill="rgba(255,255,255,0.22)"/>
      {pts.map(({ x, label, sub, color }) => (
        <g key={x}>
          <circle cx={x} cy={TY} r="5.5" fill={color} opacity="0.9"/>
          <line x1={x} y1={TY - 6} x2={x} y2={TY - 19} stroke={color} strokeWidth="1.2" opacity="0.7"/>
          <text x={x} y={TY - 23} fill={color} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{label}</text>
          <text x={x} y={TY + 18} fill={tema.sub} fontSize="8" fontFamily="'DM Sans',sans-serif" textAnchor="middle">{sub}</text>
        </g>
      ))}
      {/* Simultaneous track */}
      <rect x="100" y="74" width="244" height="14" rx="3" fill={`${az}15`} stroke={`${az}40`} strokeWidth="1" strokeDasharray="5,3"/>
      <text x="222" y="84" fill={az} fontSize="8.5" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">mientras tanto · al mismo tiempo</text>
      <text x="8" y="98" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif">simultaneidad</text>
    </svg>
  );
}

// ─── Marcadores Textuales: Reformulación ─────────────────────────────────────
function MarcadoresReformulacionSVG({ tema }) {
  const rows = [
    { type: "EXPLICATIVA",   color: tema.azul,   marker: "es decir · o sea",          src: "Idea original",    dst: "Misma idea, otras palabras",  desc: "= equivalencia" },
    { type: "SÍNTESIS",      color: tema.verde,  marker: "en resumen · en síntesis",  src: "Ideas A + B + C",  dst: "Idea condensada",              desc: "∑ condensación" },
    { type: "EJEMPLIFICACIÓN", color: tema.acento, marker: "por ejemplo · tal como",  src: "Idea general",     dst: "Caso específico concreto",     desc: "∈ instancia" },
  ];
  return (
    <svg viewBox="0 0 520 100" width="100%" style={{ display: "block" }}>
      <text x="88"  y="10" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle" fontWeight="600" letterSpacing="0.1em">FUENTE</text>
      <text x="222" y="10" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle" fontWeight="600" letterSpacing="0.1em">MARCADOR</text>
      <text x="340" y="10" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle" fontWeight="600" letterSpacing="0.1em">REFORMULACIÓN</text>
      <line x1="5" y1="13" x2="515" y2="13" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      {rows.map(({ type, color, marker, src, dst, desc }, i) => {
        const y = 19 + i * 27;
        return (
          <g key={i}>
            <text x="5" y={y + 14} fill={color} fontSize="8" fontFamily="'DM Sans',sans-serif" fontWeight="700" letterSpacing="0.06em">{type}</text>
            <rect x="82" y={y} width="92" height="22" rx="5" fill="rgba(0,0,0,0.25)" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
            <text x="128" y={y + 14} fill={tema.sub} fontSize="8" fontFamily="'DM Sans',sans-serif" textAnchor="middle">{src}</text>
            <line x1="176" y1={y + 11} x2="210" y2={y + 11} stroke={color} strokeWidth="1.5"/>
            <polygon points={`210,${y + 7} 218,${y + 11} 210,${y + 15}`} fill={color}/>
            <text x="193" y={y + 8} fill={color} fontSize="7.5" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{marker}</text>
            <rect x="220" y={y} width="170" height="22" rx="5" fill={`${color}15`} stroke={`${color}55`} strokeWidth="1.3"/>
            <text x="305" y={y + 14} fill={color} fontSize="8" fontFamily="'DM Sans',sans-serif" textAnchor="middle">{dst}</text>
            <text x="408" y={y + 14} fill={tema.muted} fontSize="8.5" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{desc}</text>
          </g>
        );
      })}
    </svg>
  );
}

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
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(16px, 2.2vw, 24px)", fontWeight: 700, color: tema.texto, margin: 0 }}>
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

// ── Grafofonética: SVG diagrams ───────────────────────────────────────────────

function GrafoPanoramaSVG({ tema }) {
  const az = tema.azul, vd = tema.verde, ac = tema.acento;
  const purple = "#c084fc", orange = "#fb923c";

  // 5 vowel pills — cada una 43px de ancho, 4px de separación, inicio x=12
  const vowels = [
    { label: "/a/ → a", color: az     },
    { label: "/e/ → e", color: vd     },
    { label: "/i/ → i", color: ac     },
    { label: "/o/ → o", color: purple },
    { label: "/u/ → u", color: orange },
  ];
  const pillW = 43, pillGap = 4, pillStartX = 12;

  // 5 líneas de fonemas consonánticos
  const cLines = [
    { color: az,     text: "/b/ → b, v  (barco · vaca)" },
    { color: vd,     text: "/k/ → c, k, qu  (casa · queso · kilo)" },
    { color: ac,     text: "/x/ → j, g(e,i)  (jefe · gente)" },
    { color: purple, text: "/s/ → s, z, c(e,i)  (seseo mexicano)" },
    { color: orange, text: "/rr/ → rr (carro) · r (rosa, enredar)" },
  ];

  return (
    <svg viewBox="0 0 520 145" width="100%" style={{ display: "block" }}>

      {/* ── Cabecera central ── */}
      <rect x="130" y="3" width="260" height="26" rx="6" fill={`${ac}18`} stroke={ac} strokeWidth="1.5"/>
      <text x="260" y="19" fill={ac} fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.12em">GRAFOFONÉTICA</text>
      <text x="260" y="30" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">fonema (sonido) → grafema (letra o combinación)</text>

      {/* Conectores de cabecera → columnas */}
      <line x1="180" y1="29" x2="128" y2="34" stroke={`${az}70`} strokeWidth="1.2" strokeDasharray="3,2"/>
      <line x1="340" y1="29" x2="392" y2="34" stroke={`${vd}70`} strokeWidth="1.2" strokeDasharray="3,2"/>

      {/* ── Columna izquierda: VOCÁLICOS (x=4 a x=252) ── */}
      <rect x="4" y="34" width="248" height="107" rx="6" fill={`${az}08`} stroke={`${az}40`} strokeWidth="1.2"/>
      {/* Encabezado columna */}
      <rect x="4" y="34" width="248" height="20" rx="6" fill={`${az}22`}/>
      <rect x="4" y="46" width="248" height="8" fill={`${az}22`}/>
      <text x="128" y="48" fill={az} fontSize="8.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">FONEMAS VOCÁLICOS</text>
      <text x="128" y="60" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">correspondencia 1 : 1 — sin ambigüedad</text>

      {/* 5 pills vocálicos */}
      {vowels.map(({ label, color }, i) => {
        const px = pillStartX + i * (pillW + pillGap);
        return (
          <g key={i}>
            <rect x={px} y="68" width={pillW} height="17" rx="4" fill={`${color}18`} stroke={`${color}55`} strokeWidth="1"/>
            <text x={px + pillW / 2} y="80" fill={color} fontSize="8" fontFamily="'DM Sans',sans-serif" textAnchor="middle" fontWeight="600">{label}</text>
          </g>
        );
      })}

      <text x="128" y="104" fill={tema.sub} fontSize="8" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">a · e · i · o · u</text>
      <text x="128" y="117" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">cada vocal tiene una sola letra</text>
      <text x="128" y="129" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">la y puede ser vocal /i/ al final de diptongo</text>

      {/* ── Columna derecha: CONSONÁNTICOS (x=260 a x=516) ── */}
      <rect x="260" y="34" width="256" height="107" rx="6" fill={`${vd}08`} stroke={`${vd}40`} strokeWidth="1.2"/>
      {/* Encabezado columna */}
      <rect x="260" y="34" width="256" height="20" rx="6" fill={`${vd}22`}/>
      <rect x="260" y="46" width="256" height="8" fill={`${vd}22`}/>
      <text x="388" y="48" fill={vd} fontSize="8.5" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">FONEMAS CONSONÁNTICOS</text>
      <text x="388" y="60" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">representación múltiple — aquí está la dificultad</text>

      {/* 5 líneas de pares fonema → grafemas */}
      {cLines.map(({ color, text }, i) => (
        <g key={i}>
          <circle cx="270" cy={72 + i * 14} r="2.5" fill={color} opacity="0.7"/>
          <text x="278" y={76 + i * 14} fill={tema.sub} fontSize="8.5" fontFamily="'DM Sans',sans-serif">{text}</text>
        </g>
      ))}
    </svg>
  );
}

function GrafoVocalesSVG({ tema }) {
  const az = tema.azul, vd = tema.verde, ac = tema.acento;
  const purple = "#c084fc", orange = "#fb923c";
  const vocales = [
    { phoneme: "/a/", letter: "a", color: az,     examples: "alma · casa · para" },
    { phoneme: "/e/", letter: "e", color: vd,     examples: "esto · leche · mesa" },
    { phoneme: "/i/", letter: "i", color: ac,     examples: "isla · vida · iris" },
    { phoneme: "/o/", letter: "o", color: purple, examples: "obra · color · boca" },
    { phoneme: "/u/", letter: "u", color: orange, examples: "uva · luna · fruta" },
  ];
  const colW = 100, gap = 4, startX = 5;
  return (
    <svg viewBox="0 0 520 118" width="100%" style={{ display: "block" }}>
      <text x="260" y="13" fill={tema.muted} fontSize="8" fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.14em" fontWeight="600">5 FONEMAS VOCÁLICOS — CORRESPONDENCIA BIUNÍVOCA</text>
      {vocales.map(({ phoneme, letter, color, examples }, i) => {
        const x = startX + i * (colW + gap);
        return (
          <g key={i}>
            <rect x={x} y="18" width={colW} height="96" rx="6" fill={`${color}10`} stroke={`${color}45`} strokeWidth="1.3"/>
            <rect x={x} y="18" width={colW} height="24" rx="6" fill={`${color}25`}/>
            <rect x={x} y="34" width={colW} height="8" fill={`${color}25`}/>
            <text x={x + colW / 2} y="35" fill={color} fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">{phoneme}</text>
            {/* Arrow */}
            <text x={x + colW / 2} y="56" fill={color} fontSize="16" textAnchor="middle" opacity="0.6">↓</text>
            {/* Grapheme */}
            <text x={x + colW / 2} y="80" fill={color} fontSize="26" fontFamily="Georgia,serif" textAnchor="middle" fontWeight="700">{letter}</text>
            {/* Examples */}
            <text x={x + colW / 2} y="99" fill={tema.muted} fontSize="7" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{examples.split(" · ")[0]}</text>
            <text x={x + colW / 2} y="109" fill={tema.muted} fontSize="7" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{examples.split(" · ")[1]}</text>
          </g>
        );
      })}
    </svg>
  );
}

function GrafoBVSVG({ tema }) {
  const az = tema.azul, ac = tema.acento;
  const bExamples = ["barco", "bello", "cambio", "hablar", "cantaba", "escribir"];
  const vExamples = ["vaca", "vivir", "enviar", "invitar", "nueva", "tuvo"];
  return (
    <svg viewBox="0 0 520 140" width="100%" style={{ display: "block" }}>
      {/* Central phoneme node */}
      <rect x="195" y="5" width="130" height="36" rx="10" fill={`${az}20`} stroke={az} strokeWidth="2"/>
      <text x="260" y="22" fill={az} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" fontWeight="700" textAnchor="middle">/b/</text>
      <text x="260" y="35" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">oclusiva bilabial sonora</text>

      {/* Left branch: B */}
      <line x1="210" y1="41" x2="130" y2="63" stroke={`${az}70`} strokeWidth="1.5"/>
      <rect x="50" y="63" width="155" height="73" rx="6" fill={`${az}12`} stroke={`${az}50`} strokeWidth="1.3"/>
      <text x="128" y="79" fill={az} fontSize="20" fontFamily="Georgia,serif" fontWeight="700" textAnchor="middle">b</text>
      <line x1="56" y1="82" x2="196" y2="82" stroke={`${az}22`} strokeWidth="1"/>
      {bExamples.map((ex, j) => (
        <text key={j} x={70 + (j % 2) * 77} y={96 + Math.floor(j / 2) * 14} fill={tema.sub} fontSize="8.5" fontFamily="Georgia,serif" fontStyle="italic">{ex}</text>
      ))}

      {/* Right branch: V */}
      <line x1="310" y1="41" x2="390" y2="63" stroke={`${ac}70`} strokeWidth="1.5"/>
      <rect x="315" y="63" width="155" height="73" rx="6" fill={`${ac}12`} stroke={`${ac}50`} strokeWidth="1.3"/>
      <text x="393" y="79" fill={ac} fontSize="20" fontFamily="Georgia,serif" fontWeight="700" textAnchor="middle">v</text>
      <line x1="321" y1="82" x2="463" y2="82" stroke={`${ac}22`} strokeWidth="1"/>
      {vExamples.map((ex, j) => (
        <text key={j} x={333 + (j % 2) * 77} y={96 + Math.floor(j / 2) * 14} fill={tema.sub} fontSize="8.5" fontFamily="Georgia,serif" fontStyle="italic">{ex}</text>
      ))}

      {/* Note at bottom */}
      <text x="260" y="135" fill={tema.muted} fontSize="8" fontFamily="'DM Sans',sans-serif" textAnchor="middle">En español mexicano: /b/ y /v/ suenan igual — la distinción es solo ortográfica</text>
    </svg>
  );
}

function GrafoCKSVG({ tema }) {
  const az = tema.azul, vd = tema.verde, ac = tema.acento;
  const cols = [
    {
      letter: "c",
      color: az,
      rule: "Antes de A, O, U",
      sub: "(o ante consonante)",
      examples: ["ca-sa", "co-lor", "cu-bo", "cla-ro", "cre-ma"],
    },
    {
      letter: "qu",
      color: vd,
      rule: "Antes de E, I",
      sub: "(u siempre muda)",
      examples: ["que-so", "quien", "quie-ro", "que-dar", "tran-qui-lo"],
    },
    {
      letter: "k",
      color: ac,
      rule: "Préstamos extranjeros",
      sub: "(o siglas/nombres)",
      examples: ["ki-ló-me-tro", "ká-ra-te", "kiwi", "km", "ka-ra-o-ke"],
    },
  ];
  const colW = 162, gap = 5, startX = 5;
  return (
    <svg viewBox="0 0 520 145" width="100%" style={{ display: "block" }}>
      <text x="260" y="12" fill={tema.muted} fontSize="8" fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.14em" fontWeight="600">EL FONEMA /k/ — TRES REPRESENTACIONES GRÁFICAS</text>
      {cols.map(({ letter, color, rule, sub, examples }, i) => {
        const x = startX + i * (colW + gap);
        return (
          <g key={i}>
            <rect x={x} y="16" width={colW} height="126" rx="6" fill={`${color}10`} stroke={`${color}45`} strokeWidth="1.3"/>
            <rect x={x} y="16" width={colW} height="22" rx="6" fill={`${color}25`}/>
            <rect x={x} y="30" width={colW} height="8" fill={`${color}25`}/>
            <text x={x + colW / 2} y="32" fill={color} fontSize="9" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">{rule}</text>
            <text x={x + colW / 2} y="42" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">{sub}</text>
            <text x={x + colW / 2} y="68" fill={color} fontSize="28" fontFamily="Georgia,serif" fontWeight="700" textAnchor="middle">{letter}</text>
            <line x1={x + 10} y1="78" x2={x + colW - 10} y2="78" stroke={`${color}22`} strokeWidth="1"/>
            {examples.map((ex, j) => (
              <text key={j} x={x + colW / 2} y={92 + j * 13} fill={tema.sub} fontSize="8.5" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{ex}</text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

function GrafoGJSVG({ tema }) {
  const az = tema.azul, ac = tema.acento;
  const jExamples = ["jamón", "jefe", "jirafa", "joven", "jugo", "viaje"];
  const gExamples = ["gente", "girasol", "agente", "mágico", "urgente", "ágil"];
  return (
    <svg viewBox="0 0 520 148" width="100%" style={{ display: "block" }}>
      {/* Central phoneme */}
      <rect x="190" y="4" width="140" height="36" rx="10" fill={`${ac}20`} stroke={ac} strokeWidth="2"/>
      <text x="260" y="22" fill={ac} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" fontWeight="700" textAnchor="middle">/x/</text>
      <text x="260" y="35" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">fricativa velar sorda (la «jota»)</text>

      {/* Left: J */}
      <line x1="215" y1="40" x2="130" y2="62" stroke={`${az}70`} strokeWidth="1.5"/>
      <rect x="48" y="62" width="166" height="82" rx="6" fill={`${az}12`} stroke={`${az}50`} strokeWidth="1.3"/>
      <text x="131" y="81" fill={az} fontSize="22" fontFamily="Georgia,serif" fontWeight="700" textAnchor="middle">j</text>
      <rect x="56" y="85" width="150" height="16" rx="4" fill={`${az}20`}/>
      <text x="131" y="97" fill={az} fontSize="8" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">ANTES DE CUALQUIER VOCAL</text>
      <text x="131" y="109" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">ja · je · ji · jo · ju</text>
      {jExamples.map((ex, j) => (
        <text key={j} x={65 + (j % 3) * 52} y={123 + Math.floor(j / 3) * 14} fill={tema.sub} fontSize="8" fontFamily="Georgia,serif" fontStyle="italic">{ex}</text>
      ))}

      {/* Right: G */}
      <line x1="305" y1="40" x2="390" y2="62" stroke={`${ac}70`} strokeWidth="1.5"/>
      <rect x="306" y="62" width="166" height="82" rx="6" fill={`${ac}12`} stroke={`${ac}50`} strokeWidth="1.3"/>
      <text x="389" y="81" fill={ac} fontSize="22" fontFamily="Georgia,serif" fontWeight="700" textAnchor="middle">g</text>
      <rect x="314" y="85" width="150" height="16" rx="4" fill={`${ac}20`}/>
      <text x="389" y="97" fill={ac} fontSize="8" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">SOLO ANTES DE E O I</text>
      <text x="389" y="109" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">g+e · g+i (ante a/o/u → /g/ distinto)</text>
      {gExamples.map((ex, j) => (
        <text key={j} x={323 + (j % 3) * 52} y={123 + Math.floor(j / 3) * 14} fill={tema.sub} fontSize="8" fontFamily="Georgia,serif" fontStyle="italic">{ex}</text>
      ))}

      <text x="260" y="146" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">gato · gol · gusto → fonema /g/, NO /x/ — ante a/o/u, g nunca suena como jota</text>
    </svg>
  );
}

function GrafoSecuenciasSVG({ tema }) {
  const az = tema.azul, vd = tema.verde, ac = tema.acento;
  const secs = [
    {
      label: "QUE / QUI",
      color: az,
      uStatus: "U MUDA",
      uPronounced: false,
      sound: "/ke/ · /ki/",
      examples: [["que-so", "/ke-so/"], ["quien", "/kjen/"], ["quie-ro", "/kje-ro/"]],
    },
    {
      label: "GUE / GUI",
      color: vd,
      uStatus: "U MUDA",
      uPronounced: false,
      sound: "/ge/ · /gi/",
      examples: [["gue-rra", "/ge-rra/"], ["guiar", "/gjar/"], ["gui-ta-rra", "/gi/"]],
    },
    {
      label: "GÜE / GÜI",
      color: ac,
      uStatus: "U PRONUNCIADA",
      uPronounced: true,
      sound: "/gwe/ · /gwi/",
      examples: [["ver-güen-za", "/gwen/"], ["pin-güi-no", "/gwi/"], ["agüita", "/gwi/"]],
    },
  ];
  const colW = 162, gap = 5, startX = 5;
  return (
    <svg viewBox="0 0 520 138" width="100%" style={{ display: "block" }}>
      <text x="260" y="11" fill={tema.muted} fontSize="8" fontFamily="'DM Sans',sans-serif" textAnchor="middle" letterSpacing="0.14em" fontWeight="600">SECUENCIAS CON U: MUDA VS. PRONUNCIADA</text>
      {secs.map(({ label, color, uStatus, uPronounced, sound, examples }, i) => {
        const x = startX + i * (colW + gap);
        return (
          <g key={i}>
            <rect x={x} y="16" width={colW} height="120" rx="6" fill={`${color}10`} stroke={`${color}45`} strokeWidth="1.3"/>
            <rect x={x} y="16" width={colW} height="22" rx="6" fill={`${color}25`}/>
            <rect x={x} y="30" width={colW} height="8" fill={`${color}25`}/>
            <text x={x + colW / 2} y="32" fill={color} fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">{label}</text>
            {/* U status badge */}
            <rect x={x + 18} y="42" width={colW - 36} height="15" rx="4" fill={uPronounced ? `${color}35` : `rgba(255,255,255,0.06)`} stroke={color} strokeWidth="1"/>
            <text x={x + colW / 2} y="53.5" fill={uPronounced ? color : tema.muted} fontSize="8" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle">{uStatus}</text>
            {/* Sound */}
            <text x={x + colW / 2} y="69" fill={color} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{sound}</text>
            <line x1={x + 10} y1="75" x2={x + colW - 10} y2="75" stroke={`${color}22`} strokeWidth="1"/>
            {/* Examples */}
            {examples.map(([word, pron], j) => (
              <g key={j}>
                <text x={x + colW / 2} y={89 + j * 17} fill={tema.texto} fontSize="9" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{word}</text>
                <text x={x + colW / 2} y={100 + j * 17} fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">{pron}</text>
              </g>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

// ── Geografía: Coordenadas geográficas ───────────────────────────────────────
function GeoCoordenadaSVG({ tema }) {
  const t = tema.texto;
  const a = tema.acento;
  const g = "#f5c842";
  const r = "#e06448";
  return (
    <svg viewBox="0 0 320 162" width="100%" style={{ display: "block" }}>
      {/* ── PANEL IZQUIERDO: LATITUD ── */}
      <rect x="2" y="2" width="152" height="158" rx="7" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <text x="78" y="15" textAnchor="middle" fill={a} fontSize="8.5" fontFamily="monospace" letterSpacing="1.5">LATITUD</text>
      <text x="78" y="24" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="6.5" fontFamily="monospace">paralelos · dirección N/S</text>
      {/* Polo Norte 90°N */}
      <line x1="10" y1="32" x2="146" y2="32" stroke="rgba(160,210,255,0.5)" strokeWidth="1" strokeDasharray="4,3"/>
      <text x="78" y="30" textAnchor="middle" fill="rgba(160,210,255,0.7)" fontSize="6" fontFamily="monospace">90°N · POLO NORTE</text>
      {/* Círculo Polar Ártico 66.5°N */}
      <line x1="10" y1="50" x2="146" y2="50" stroke="rgba(160,210,255,0.35)" strokeWidth="0.8" strokeDasharray="3,3"/>
      <text x="6" y="49" fill="rgba(160,210,255,0.55)" fontSize="5.5" fontFamily="monospace">66.5°N</text>
      {/* Trópico de Cáncer 23.5°N */}
      <line x1="10" y1="72" x2="146" y2="72" stroke={g} strokeWidth="1" strokeDasharray="5,2" opacity="0.75"/>
      <text x="6" y="71" fill={g} fontSize="5.5" fontFamily="monospace" opacity="0.9">23.5°N</text>
      <text x="90" y="70" fill={g} fontSize="5" fontFamily="monospace" opacity="0.65">Trópico de Cáncer</text>
      {/* Ecuador 0° */}
      <line x1="10" y1="94" x2="146" y2="94" stroke={a} strokeWidth="2.5"/>
      <text x="78" y="91" textAnchor="middle" fill={a} fontSize="7.5" fontFamily="monospace" fontWeight="bold">ECUADOR 0°</text>
      {/* Trópico de Capricornio 23.5°S */}
      <line x1="10" y1="116" x2="146" y2="116" stroke={g} strokeWidth="1" strokeDasharray="5,2" opacity="0.75"/>
      <text x="6" y="115" fill={g} fontSize="5.5" fontFamily="monospace" opacity="0.9">23.5°S</text>
      <text x="90" y="114" fill={g} fontSize="5" fontFamily="monospace" opacity="0.65">T. de Capricornio</text>
      {/* Círculo Polar Antártico 66.5°S */}
      <line x1="10" y1="136" x2="146" y2="136" stroke="rgba(160,210,255,0.35)" strokeWidth="0.8" strokeDasharray="3,3"/>
      <text x="6" y="135" fill="rgba(160,210,255,0.55)" fontSize="5.5" fontFamily="monospace">66.5°S</text>
      {/* Polo Sur 90°S */}
      <line x1="10" y1="154" x2="146" y2="154" stroke="rgba(160,210,255,0.5)" strokeWidth="1" strokeDasharray="4,3"/>
      <text x="78" y="160" textAnchor="middle" fill="rgba(160,210,255,0.7)" fontSize="6" fontFamily="monospace">90°S · POLO SUR</text>

      {/* ── PANEL DERECHO: LONGITUD ── */}
      <rect x="166" y="2" width="152" height="158" rx="7" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <text x="242" y="15" textAnchor="middle" fill={r} fontSize="8.5" fontFamily="monospace" letterSpacing="1.5">LONGITUD</text>
      <text x="242" y="24" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="6.5" fontFamily="monospace">meridianos · dirección E/O</text>
      {/* Línea de Fecha 180° (left edge) */}
      <line x1="174" y1="30" x2="174" y2="155" stroke="rgba(255,120,90,0.6)" strokeWidth="1" strokeDasharray="4,3"/>
      <text x="174" y="28" textAnchor="middle" fill="rgba(255,120,90,0.75)" fontSize="5.5" fontFamily="monospace">180°</text>
      {/* 90°O */}
      <line x1="204" y1="30" x2="204" y2="155" stroke="rgba(255,255,255,0.2)" strokeWidth="0.7" strokeDasharray="3,3"/>
      <text x="204" y="28" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">90°O</text>
      {/* Greenwich 0° */}
      <line x1="242" y1="30" x2="242" y2="155" stroke={r} strokeWidth="2.5"/>
      <text x="242" y="161" textAnchor="middle" fill={r} fontSize="6.5" fontFamily="monospace" fontWeight="bold">0° GREENWICH</text>
      {/* 90°E */}
      <line x1="280" y1="30" x2="280" y2="155" stroke="rgba(255,255,255,0.2)" strokeWidth="0.7" strokeDasharray="3,3"/>
      <text x="280" y="28" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">90°E</text>
      {/* Línea de Fecha 180° (right edge) */}
      <line x1="310" y1="30" x2="310" y2="155" stroke="rgba(255,120,90,0.6)" strokeWidth="1" strokeDasharray="4,3"/>
      <text x="310" y="28" textAnchor="middle" fill="rgba(255,120,90,0.75)" fontSize="5.5" fontFamily="monospace">180°</text>
      {/* Flecha E-O */}
      <text x="178" y="95" fill="rgba(255,255,255,0.22)" fontSize="7" fontFamily="monospace">◄ OESTE</text>
      <text x="258" y="95" fill="rgba(255,255,255,0.22)" fontSize="7" fontFamily="monospace">ESTE ►</text>
      {/* Línea Ecuador horizontal referencia */}
      <line x1="174" y1="92" x2="312" y2="92" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
    </svg>
  );
}

// ── Geografía: Husos horarios ─────────────────────────────────────────────────
function GeoHusosSVG({ tema }) {
  const t = tema.texto;
  const a = tema.acento;
  const g = "#f5c842";
  const r = "rgba(255,120,90,0.75)";
  // 25 zonas: UTC-12 a UTC+12
  const zones = Array.from({ length: 25 }, (_, i) => i - 12);
  const zW = 11.6; // zone width in px (25 * 11.6 = 290, con padding = 320)
  const startX = 15;
  const barY = 26; const barH = 44;
  return (
    <svg viewBox="0 0 320 100" width="100%" style={{ display: "block" }}>
      <text x="160" y="11" textAnchor="middle" fill={a} fontSize="8" fontFamily="monospace" letterSpacing="1.5">HUSOS HORARIOS (UTC)</text>
      {zones.map((offset, i) => {
        const x = startX + i * zW;
        const isMx = offset >= -8 && offset <= -5;
        const isGmt = offset === 0;
        const isDate = offset === -12 || offset === 12;
        const fill = isDate ? "rgba(255,120,90,0.18)" : isGmt ? `${a}22` : isMx ? `${g}20` : "rgba(255,255,255,0.04)";
        const stroke = isDate ? "rgba(255,120,90,0.5)" : isGmt ? `${a}60` : isMx ? `${g}55` : "rgba(255,255,255,0.12)";
        const strokeW = (isGmt || isMx || isDate) ? 1.2 : 0.5;
        return (
          <g key={i}>
            <rect x={x} y={barY} width={zW} height={barH} fill={fill} stroke={stroke} strokeWidth={strokeW}/>
            {(isGmt || isDate || i % 4 === 0) && (
              <text x={x + zW / 2} y={barY + barH / 2 + 3.5} textAnchor="middle"
                fill={isDate ? r : isGmt ? a : "rgba(255,255,255,0.4)"}
                fontSize="5.5" fontFamily="monospace">
                {offset > 0 ? `+${offset}` : offset}
              </text>
            )}
          </g>
        );
      })}
      {/* Mexico bracket */}
      {(() => {
        const mxStart = startX + ((-8) - (-12)) * zW;
        const mxEnd = startX + ((-5) - (-12) + 1) * zW;
        return (
          <g>
            <line x1={mxStart} y1={barY + barH + 4} x2={mxEnd} y2={barY + barH + 4} stroke={g} strokeWidth="1.2"/>
            <line x1={mxStart} y1={barY + barH + 2} x2={mxStart} y2={barY + barH + 6} stroke={g} strokeWidth="1"/>
            <line x1={mxEnd}   y1={barY + barH + 2} x2={mxEnd}   y2={barY + barH + 6} stroke={g} strokeWidth="1"/>
            <text x={(mxStart + mxEnd) / 2} y={barY + barH + 15} textAnchor="middle" fill={g} fontSize="6.5" fontFamily="monospace">MÉXICO (UTC−8 a UTC−5)</text>
          </g>
        );
      })()}
      {/* GMT label */}
      {(() => {
        const gmtX = startX + (0 - (-12)) * zW + zW / 2;
        return <text x={gmtX} y={barY - 4} textAnchor="middle" fill={a} fontSize="6" fontFamily="monospace">GMT/UTC</text>;
      })()}
      {/* Date line labels */}
      <text x={startX - 2} y={barY - 4} textAnchor="middle" fill={r} fontSize="5.5" fontFamily="monospace">LÍNEA</text>
      <text x={startX - 2} y={barY + 2} textAnchor="middle" fill={r} fontSize="5.5" fontFamily="monospace">DE FECHA</text>
      <text x={startX + 25 * zW} y={barY - 4} textAnchor="middle" fill={r} fontSize="5.5" fontFamily="monospace">LÍNEA</text>
      <text x={startX + 25 * zW} y={barY + 2} textAnchor="middle" fill={r} fontSize="5.5" fontFamily="monospace">DE FECHA</text>
    </svg>
  );
}

// ── Geografía: Tipos de bordes de placas tectónicas ──────────────────────────
function GeoPlacastSVG({ tema }) {
  const a = tema.acento;
  const g = "#f5c842";
  const t = tema.texto;
  const oceColor = "#1a3a5c";
  const contColor = "#5a3c1a";
  const magmaColor = "#cc3300";
  return (
    <svg viewBox="0 0 320 158" width="100%" style={{ display: "block" }}>
      {/* ── PANEL 1: CONVERGENTE ── */}
      <rect x="2" y="2" width="98" height="154" rx="6" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <text x="51" y="13" textAnchor="middle" fill={g} fontSize="7.5" fontFamily="monospace" letterSpacing="0.5">CONVERGENTE</text>
      <text x="51" y="21" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">placas se acercan</text>
      {/* Placa oceánica (izq) con subducción */}
      <polygon points="4,90 50,70 50,105 4,125" fill={oceColor} opacity="0.85"/>
      <text x="27" y="100" textAnchor="middle" fill="rgba(150,200,255,0.8)" fontSize="5" fontFamily="monospace">oceánica</text>
      {/* Placa continental (der) */}
      <rect x="50" y="65" width="48" height="42" rx="3" fill={contColor} opacity="0.85"/>
      <text x="74" y="90" textAnchor="middle" fill="rgba(255,200,150,0.85)" fontSize="5" fontFamily="monospace">continental</text>
      {/* Flechas de movimiento */}
      <text x="15" y="63" fill={g} fontSize="9">→</text>
      <text x="80" y="63" fill={g} fontSize="9">←</text>
      {/* Volcán */}
      <polygon points="68,64 74,38 80,64" fill="#cc4400" opacity="0.9"/>
      <text x="74" y="36" textAnchor="middle" fill="#ff7755" fontSize="6">🌋</text>
      <text x="74" y="31" textAnchor="middle" fill="#ff7755" fontSize="5" fontFamily="monospace">volcán</text>
      {/* Manto */}
      <ellipse cx="27" cy="128" rx="20" ry="8" fill={magmaColor} opacity="0.4"/>
      <text x="27" y="130" textAnchor="middle" fill="#ff8866" fontSize="5" fontFamily="monospace">manto</text>
      {/* Sismo símbolo */}
      <text x="51" y="120" textAnchor="middle" fill="rgba(255,200,50,0.7)" fontSize="6" fontFamily="monospace">≋sismos</text>
      {/* Ejemplos */}
      <text x="51" y="140" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5" fontFamily="monospace">Andes · Himalaya</text>
      <text x="51" y="150" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5" fontFamily="monospace">Cinturón de Fuego</text>

      {/* ── PANEL 2: DIVERGENTE ── */}
      <rect x="111" y="2" width="98" height="154" rx="6" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <text x="160" y="13" textAnchor="middle" fill={a} fontSize="7.5" fontFamily="monospace" letterSpacing="0.5">DIVERGENTE</text>
      <text x="160" y="21" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">placas se separan</text>
      {/* Placa izquierda */}
      <rect x="113" y="65" width="42" height="42" rx="3" fill={oceColor} opacity="0.8"/>
      <text x="134" y="90" textAnchor="middle" fill="rgba(150,200,255,0.8)" fontSize="5" fontFamily="monospace">placa A</text>
      {/* Placa derecha */}
      <rect x="159" y="65" width="48" height="42" rx="3" fill={oceColor} opacity="0.8"/>
      <text x="183" y="90" textAnchor="middle" fill="rgba(150,200,255,0.8)" fontSize="5" fontFamily="monospace">placa B</text>
      {/* Flechas opuestas */}
      <text x="116" y="63" fill={a} fontSize="9">←</text>
      <text x="183" y="63" fill={a} fontSize="9">→</text>
      {/* Rift / dorsal oceánica */}
      <polygon points="155,64 160,44 165,64" fill={magmaColor} opacity="0.8"/>
      <text x="160" y="42" textAnchor="middle" fill="#ff8866" fontSize="5" fontFamily="monospace">magma</text>
      <text x="160" y="35" textAnchor="middle" fill="#ff8866" fontSize="5.5">↑</text>
      <text x="160" y="29" textAnchor="middle" fill="#ff8866" fontSize="5" fontFamily="monospace">dorsal</text>
      {/* Labels */}
      <text x="160" y="120" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5" fontFamily="monospace">sin volcanes de arco</text>
      <text x="160" y="130" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5" fontFamily="monospace">corteza nueva</text>
      <text x="160" y="140" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5" fontFamily="monospace">Dorsal del Atlántico</text>
      <text x="160" y="150" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5" fontFamily="monospace">Rift Valley · Islandia</text>

      {/* ── PANEL 3: TRANSFORMANTE ── */}
      <rect x="220" y="2" width="98" height="154" rx="6" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <text x="269" y="13" textAnchor="middle" fill="#d070ff" fontSize="7.5" fontFamily="monospace" letterSpacing="0.5">TRANSFORMANTE</text>
      <text x="269" y="21" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">placas se deslizan</text>
      {/* Placa superior */}
      <rect x="224" y="55" width="90" height="30" rx="3" fill={contColor} opacity="0.8"/>
      <text x="269" y="73" textAnchor="middle" fill="rgba(255,200,150,0.8)" fontSize="5" fontFamily="monospace">placa A  →</text>
      {/* Falla (línea zigzag) */}
      <polyline points="224,88 236,84 248,92 260,84 272,92 284,84 296,88 308,84 314,88"
        fill="none" stroke={g} strokeWidth="1.5" strokeDasharray="3,1"/>
      {/* Placa inferior */}
      <rect x="224" y="90" width="90" height="30" rx="3" fill={oceColor} opacity="0.8"/>
      <text x="269" y="108" textAnchor="middle" fill="rgba(150,200,255,0.8)" fontSize="5" fontFamily="monospace">← placa B</text>
      {/* Labels */}
      <text x="269" y="86" textAnchor="middle" fill={g} fontSize="5.5" fontFamily="monospace">falla</text>
      <text x="269" y="130" textAnchor="middle" fill="rgba(255,200,50,0.7)" fontSize="6" fontFamily="monospace">≋sismos</text>
      <text x="269" y="138" textAnchor="middle" fill="rgba(200,100,255,0.65)" fontSize="5" fontFamily="monospace">sin vulcanismo</text>
      <text x="269" y="148" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5" fontFamily="monospace">Falla de San Andrés</text>
    </svg>
  );
}

// ── Geografía: Ciclo hidrológico ──────────────────────────────────────────────
function GeoCicloHidrologicoSVG({ tema }) {
  const a = tema.acento;
  const g = "#f5c842";
  const t = tema.texto;
  const azulAgua = "#2a7fbf";
  const verdeVeg = "#3a8a3a";
  return (
    <svg viewBox="0 0 320 160" width="100%" style={{ display: "block" }}>
      {/* Fondo cielo */}
      <rect x="0" y="0" width="320" height="160" rx="6" fill="rgba(10,20,40,0.4)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      {/* ── SOL ── */}
      <circle cx="285" cy="28" r="16" fill="#ffd020" opacity="0.9"/>
      <text x="285" y="32" textAnchor="middle" fill="#fff" fontSize="12">☀</text>
      {/* ── OCÉANO / MAR ── */}
      <rect x="170" y="118" width="148" height="36" rx="5" fill={azulAgua} opacity="0.75"/>
      <text x="244" y="138" textAnchor="middle" fill="rgba(200,240,255,0.9)" fontSize="7" fontFamily="monospace">OCÉANO / MAR</text>
      {/* ── MONTAÑA ── */}
      <polygon points="10,154 65,60 120,154" fill="#4a4a5a" opacity="0.85"/>
      <polygon points="45,100 65,60 85,100" fill="rgba(220,230,255,0.25)"/>
      <text x="65" y="56" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="6" fontFamily="monospace">nieve</text>
      {/* ── VEGETACIÓN (pie montaña) ── */}
      <ellipse cx="115" cy="148" rx="18" ry="8" fill={verdeVeg} opacity="0.7"/>
      <text x="115" y="150" textAnchor="middle" fill="rgba(200,255,200,0.8)" fontSize="5" fontFamily="monospace">biósfera</text>
      {/* ── NUBE ── */}
      <ellipse cx="158" cy="42" rx="32" ry="18" fill="rgba(200,215,240,0.55)"/>
      <ellipse cx="140" cy="48" rx="20" ry="14" fill="rgba(200,215,240,0.55)"/>
      <ellipse cx="175" cy="50" rx="22" ry="13" fill="rgba(200,215,240,0.55)"/>
      <text x="158" y="45" textAnchor="middle" fill="rgba(30,50,100,0.9)" fontSize="6" fontFamily="monospace">NUBE</text>
      {/* ── RÍO ── */}
      <path d="M 105,140 Q 130,135 155,130 Q 168,126 170,120" fill="none" stroke={azulAgua} strokeWidth="3" opacity="0.8"/>
      <text x="132" y="131" fill="rgba(150,210,255,0.8)" fontSize="5.5" fontFamily="monospace">río</text>
      {/* SUELO / ACUÍFERO */}
      <rect x="10" y="148" width="158" height="10" rx="3" fill="rgba(120,90,60,0.5)"/>
      <text x="90" y="156" textAnchor="middle" fill="rgba(200,170,140,0.6)" fontSize="5" fontFamily="monospace">suelo · acuífero</text>

      {/* ── FLECHAS Y ETIQUETAS ── */}
      {/* Evaporación: océano → nube */}
      <path d="M 244,116 Q 230,80 185,55" fill="none" stroke={g} strokeWidth="1.4" strokeDasharray="4,2"
        markerEnd="url(#arrowGeo)"/>
      <text x="218" y="82" fill={g} fontSize="6" fontFamily="monospace" transform="rotate(-55,218,82)">evaporación</text>
      {/* Transpiración: vegetación → nube */}
      <path d="M 118,140 Q 130,100 138,62" fill="none" stroke={verdeVeg} strokeWidth="1.2" strokeDasharray="3,2"
        markerEnd="url(#arrowGeo)"/>
      <text x="108" y="110" fill={verdeVeg} fontSize="5.5" fontFamily="monospace" transform="rotate(-78,108,110)">trans-</text>
      <text x="106" y="118" fill={verdeVeg} fontSize="5.5" fontFamily="monospace" transform="rotate(-78,106,118)">piración</text>
      {/* Precipitación: nube → montaña */}
      <path d="M 138,62 Q 110,80 85,108" fill="none" stroke={a} strokeWidth="1.5" strokeDasharray="4,2"
        markerEnd="url(#arrowGeo)"/>
      <text x="98" y="80" fill={a} fontSize="6" fontFamily="monospace" transform="rotate(-55,98,80)">precipitación</text>
      {/* Escurrimiento: montaña → río/mar */}
      <path d="M 100,138 Q 128,135 168,120" fill="none" stroke={azulAgua} strokeWidth="1.3" strokeDasharray="4,2"
        markerEnd="url(#arrowGeo)"/>
      <text x="130" y="141" fill={azulAgua} fontSize="5.5" fontFamily="monospace">escurrimiento</text>
      {/* Infiltración: flecha hacia abajo */}
      <path d="M 92,140 L 92,152" fill="none" stroke="rgba(160,130,100,0.8)" strokeWidth="1.2"
        markerEnd="url(#arrowGeo)"/>
      <text x="58" y="146" fill="rgba(200,170,140,0.75)" fontSize="5.5" fontFamily="monospace">infiltración</text>
      {/* Definición de marcador de flecha */}
      <defs>
        <marker id="arrowGeo" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="rgba(255,255,255,0.5)"/>
        </marker>
      </defs>
      {/* Leyenda */}
      <text x="160" y="13" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">Hidrósfera + Atmósfera + Litósfera + Biósfera</text>
    </svg>
  );
}

// ── Globo Terráqueo 3D (Three.js — carga dinámica) ────────────────────────────
function GloboTerraqueo3D({ tema }) {
  const mountRef = useRef(null);
  // Canvas height — cámara calibrada para este valor
  const H = 420;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animId;
    let mounted = true;
    const cleanupRef = { fn: null };

    (async () => {
      const THREE = await import("three");
      const { OrbitControls } = await import("three/addons/controls/OrbitControls.js");
      if (!mounted || !mountRef.current) return;

      const W = container.clientWidth || 500;

      // ── Escena y cámara ──
      // FOV 40° + z=3.3 → visible height ≈ 2.40 world units > sphere diameter 2.0
      // → polos con ~10 % de margen a cada lado
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, W / H, 0.1, 100);
      camera.position.z = 3.3;

      // ── Renderer ──
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // ── Iluminación ──
      scene.add(new THREE.AmbientLight(0xffffff, 0.5));
      const sun = new THREE.DirectionalLight(0xffffff, 0.95);
      sun.position.set(4, 2, 5);
      scene.add(sun);
      const fill = new THREE.DirectionalLight(0x4477cc, 0.3);
      fill.position.set(-3, -1, -4);
      scene.add(fill);

      // ── Grupo del globo (todo rota junto) ──
      const group = new THREE.Group();
      scene.add(group);

      // Textura NASA Blue Marble (equirectangular, CC0)
      const earthTex = new THREE.TextureLoader().load(
        `${import.meta.env.BASE_URL}textures/earth.jpg`
      );
      earthTex.colorSpace = THREE.SRGBColorSpace;

      // Esfera con mapa real
      group.add(new THREE.Mesh(
        new THREE.SphereGeometry(1, 72, 72),
        new THREE.MeshPhongMaterial({
          map: earthTex,
          specular: new THREE.Color(0x112244),
          shininess: 12,
        })
      ));
      // Halo atmosférico azul
      group.add(new THREE.Mesh(
        new THREE.SphereGeometry(1.048, 32, 32),
        new THREE.MeshPhongMaterial({
          color: 0x3366cc, transparent: true, opacity: 0.10, side: THREE.BackSide,
        })
      ));

      // Rotación inicial: Meridiano de Greenwich al frente (Europa/África visible)
      group.rotation.y = Math.PI;

      // ── Constructores de líneas ──
      const addLat = (latDeg, hex, op) => {
        const phi = (latDeg * Math.PI) / 180;
        const r = 1.004;
        const pts = [];
        for (let i = 0; i <= 180; i++) {
          const theta = (i * 2 * Math.PI) / 180;
          pts.push(new THREE.Vector3(
            r * Math.cos(phi) * Math.cos(theta),
            r * Math.sin(phi),
            r * Math.cos(phi) * Math.sin(theta)
          ));
        }
        group.add(new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(pts),
          new THREE.LineBasicMaterial({ color: hex, transparent: true, opacity: op })
        ));
      };

      const addLon = (lonDeg, hex, op) => {
        const theta = (lonDeg * Math.PI) / 180;
        const r = 1.004;
        const pts = [];
        for (let i = 0; i <= 90; i++) {
          const phi = ((i * 2 - 90) * Math.PI) / 180;
          pts.push(new THREE.Vector3(
            r * Math.cos(phi) * Math.cos(theta),
            r * Math.sin(phi),
            r * Math.cos(phi) * Math.sin(theta)
          ));
        }
        group.add(new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(pts),
          new THREE.LineBasicMaterial({ color: hex, transparent: true, opacity: op })
        ));
      };

      // Cuadrícula cada 30° — blanco translúcido sobre el mapa
      [-60, -30, 30, 60].forEach(lat => addLat(lat, 0xffffff, 0.18));
      [30, 60, 90, 120, 150, 210, 240, 270, 300, 330].forEach(lon =>
        addLon(lon, 0xffffff, 0.14));

      // Paralelos clave — colores saturados para destacar sobre el mapa
      addLat(0,     0x00aaff, 1.0);   // Ecuador — azul brillante
      addLat(23.5,  0xffcc00, 1.0);   // Trópico de Cáncer — dorado
      addLat(-23.5, 0xffcc00, 0.95);  // Trópico de Capricornio — dorado
      addLat(66.5,  0x88eeff, 0.90);  // Círculo Polar Ártico — celeste
      addLat(-66.5, 0x88eeff, 0.82);  // Círculo Polar Antártico — celeste

      // Meridianos clave
      addLon(0,   0xff6633, 1.0);   // Greenwich — naranja fuerte
      addLon(180, 0xff3322, 0.80);  // Línea de fecha — rojo

      // Puntos polares
      const dotGeo = new THREE.SphereGeometry(0.028, 8, 8);
      const dotMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const np = new THREE.Mesh(dotGeo, dotMat); np.position.set(0,  1.013, 0);
      const sp = new THREE.Mesh(dotGeo, dotMat); sp.position.set(0, -1.013, 0);
      group.add(np, sp);

      // Eje polar (línea fija en escena — no rota)
      const axPts = [new THREE.Vector3(0, 1.25, 0), new THREE.Vector3(0, -1.25, 0)];
      scene.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(axPts),
        new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.18 })
      ));

      // ── Controles de órbita ──
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = false;
      controls.enablePan  = false;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.45;
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;
      // Limitar inclinación para que los polos sigan visibles
      controls.minPolarAngle = Math.PI * 0.12;
      controls.maxPolarAngle = Math.PI * 0.88;

      // ── Resize ──
      const onResize = () => {
        if (!container || !renderer) return;
        const w = container.clientWidth;
        camera.aspect = w / H;
        camera.updateProjectionMatrix();
        renderer.setSize(w, H);
      };
      window.addEventListener("resize", onResize);

      // ── Loop ──
      const animate = () => {
        animId = requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      cleanupRef.fn = () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("resize", onResize);
        controls.dispose();
        renderer.dispose();
        if (container && renderer.domElement.parentNode === container) {
          container.removeChild(renderer.domElement);
        }
      };
    })();

    return () => {
      mounted = false;
      if (cleanupRef.fn) cleanupRef.fn();
    };
  }, []);

  const legend = [
    { color: "#00aaff", text: "Ecuador · 0°" },
    { color: "#ffcc00", text: "Trópico de Cáncer · 23.5°N" },
    { color: "#ffcc00", text: "Trópico de Capricornio · 23.5°S" },
    { color: "#88eeff", text: "Círculo Polar Ártico · 66.5°N" },
    { color: "#88eeff", text: "Círculo Polar Antártico · 66.5°S" },
    { color: "#ff6633", text: "Meridiano de Greenwich · 0°" },
    { color: "#ff3322", text: "Línea de Fecha Internacional · 180°" },
    { color: "rgba(255,255,255,0.3)", text: "Cuadrícula · c/30°" },
  ];

  // Badge de punto cardinal
  const Cardinal = ({ letter, color, bg, style }) => (
    <div style={{
      position: "absolute",
      width: 36, height: 36,
      borderRadius: "50%",
      background: bg || "rgba(6,14,32,0.82)",
      border: `2.5px solid ${color}`,
      boxShadow: `0 0 10px ${color}55`,
      display: "flex", alignItems: "center", justifyContent: "center",
      color,
      fontSize: 15, fontWeight: "900", fontFamily: "monospace",
      letterSpacing: 0,
      pointerEvents: "none",
      zIndex: 10,
      userSelect: "none",
      ...style,
    }}>
      {letter}
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
      {/* ── Globo con cardinales superpuestos ── */}
      <div style={{ position: "relative", width: "100%", height: H }}>
        <div
          ref={mountRef}
          style={{ width: "100%", height: "100%", borderRadius: 12, overflow: "hidden",
            background: "rgba(3,10,24,0.7)" }}
        />
        {/* Norte — arriba, centrado */}
        <Cardinal letter="N" color="#ff5555"
          style={{ top: 10, left: "50%", transform: "translateX(-50%)" }} />
        {/* Sur — abajo, centrado */}
        <Cardinal letter="S" color="#6699ff"
          style={{ bottom: 10, left: "50%", transform: "translateX(-50%)" }} />
        {/* Este — derecha, centrado verticalmente */}
        <Cardinal letter="E" color="#f5c842"
          style={{ top: "50%", right: 10, transform: "translateY(-50%)" }} />
        {/* Oeste — izquierda, centrado verticalmente */}
        <Cardinal letter="O" color="#f5c842"
          style={{ top: "50%", left: 10, transform: "translateY(-50%)" }} />
        {/* Hint */}
        <div style={{
          position: "absolute", bottom: 14, right: 16,
          color: "rgba(255,255,255,0.22)", fontSize: 9, fontFamily: "monospace",
          pointerEvents: "none",
        }}>
          ↺ arrastra para rotar
        </div>
      </div>

      {/* ── Leyenda horizontal compacta ── */}
      <div style={{
        display: "flex", flexWrap: "wrap", gap: "5px 18px",
        padding: "8px 4px 2px",
      }}>
        {legend.map((l, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <div style={{ width: 20, height: 3, background: l.color, borderRadius: 2, flexShrink: 0 }}/>
            <span style={{ color: "rgba(255,255,255,0.68)", fontSize: 9.5, fontFamily: "monospace" }}>
              {l.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Geografía: Minerales (preciosos, industriales, energéticos) ───────────────
function GeoMineralesSVG({ tema }) {
  const a = tema.acento;
  const gold = "#f5c842";
  const cols = [
    {
      title: "PRECIOSOS", color: gold, x: 2,
      minerals: ["Oro (Au)", "Plata (Ag)", "Platino (Pt)", "Diamante"],
      world1: "Sudáfrica · Rusia",
      world2: "Australia · Canadá",
      mx: "México: 1er plata mundial",
      mx2: "Zacatecas · Guanajuato",
    },
    {
      title: "INDUSTRIALES", color: a, x: 112,
      minerals: ["Hierro (Fe)", "Cobre (Cu)", "Zinc (Zn)", "Aluminio"],
      world1: "China (hierro)",
      world2: "Chile (cobre) · Australia",
      mx: "Cobre: Sonora (Cananea)",
      mx2: "Zinc: Zacatecas · Chih.",
    },
    {
      title: "ENERGÉTICOS", color: "#e07040", x: 222,
      minerals: ["Petróleo", "Gas natural", "Carbón", "Uranio"],
      world1: "Rusia · Arabia Saudita",
      world2: "EUA · Qatar",
      mx: "Petróleo: Campeche/Tab.",
      mx2: "Gas: Tamaulipas · Ver.",
    },
  ];
  const W = 96, H = 151;
  return (
    <svg viewBox="0 0 320 155" width="100%" style={{ display: "block" }}>
      {cols.map((col) => (
        <g key={col.x}>
          <rect x={col.x} y="2" width={W} height={H} rx="6" fill={`${col.color}12`} stroke={`${col.color}40`} strokeWidth="1"/>
          <rect x={col.x} y="2" width={W} height="20" rx="6" fill={`${col.color}28`}/>
          <rect x={col.x} y="14" width={W} height="8" fill={`${col.color}28`}/>
          <text x={col.x + W / 2} y="15" textAnchor="middle" fill={col.color} fontSize="7.5" fontFamily="monospace" fontWeight="700" letterSpacing="0.5">{col.title}</text>
          {col.minerals.map((m, j) => (
            <g key={j}>
              <rect x={col.x + 6} y={26 + j * 22} width={W - 12} height="18" rx="3" fill={`${col.color}18`}/>
              <text x={col.x + W / 2} y={26 + j * 22 + 12} textAnchor="middle" fill={col.color} fontSize="6.5" fontFamily="monospace" opacity="0.9">{m}</text>
            </g>
          ))}
          <line x1={col.x + 6} y1="117" x2={col.x + W - 6} y2="117" stroke={`${col.color}30`} strokeWidth="0.7"/>
          <text x={col.x + 6} y="124" fill="rgba(255,255,255,0.4)" fontSize="4.5" fontFamily="monospace">Mundial:</text>
          <text x={col.x + 6} y="131" fill="rgba(255,255,255,0.65)" fontSize="4.5" fontFamily="monospace">{col.world1}</text>
          <text x={col.x + 6} y="138" fill="rgba(255,255,255,0.65)" fontSize="4.5" fontFamily="monospace">{col.world2}</text>
          <line x1={col.x + 6} y1="141" x2={col.x + W - 6} y2="141" stroke={`${col.color}30`} strokeWidth="0.5"/>
          <text x={col.x + 6} y="147" fill={col.color} fontSize="4.5" fontFamily="monospace" opacity="0.9">{col.mx}</text>
          <text x={col.x + 6} y="153" fill={col.color} fontSize="4.5" fontFamily="monospace" opacity="0.75">{col.mx2}</text>
        </g>
      ))}
    </svg>
  );
}

// ── Geografía: Ríos del mundo y de México ─────────────────────────────────────
function GeoRiosSVG({ tema }) {
  const a = tema.acento;
  const gold = "#f5c842";
  const maxKm = 6853;
  const maxBarW = 148;
  const worldRivers = [
    { name: "Nilo (África)",               km: 6853, color: "#8ab0cc" },
    { name: "Amazonas (Sudamérica)",        km: 6400, color: "#3a8a3a" },
    { name: "Yang-Tsé (China)",            km: 6300, color: "#cc7720" },
    { name: "Mississippi-Missouri (N.Am.)", km: 6275, color: a },
    { name: "Ob-Irtysh (Siberia)",         km: 5410, color: "#7070b0" },
  ];
  const mxRivers = [
    { name: "Bravo/Grande (frontera EUA)",        km: 3034, color: gold },
    { name: "Usumacinta-Grijalva (mayor caudal)", km: 1000, color: gold },
    { name: "Balsas (hidroeléctrico)",            km:  771, color: gold },
    { name: "Lerma-Santiago (abastece Altiplano)", km:  708, color: gold },
  ];
  const bW = (km) => Math.max(Math.round((km / maxKm) * maxBarW), 4);
  return (
    <svg viewBox="0 0 320 158" width="100%" style={{ display: "block" }}>
      {/* World rivers */}
      <rect x="2" y="2" width="316" height="74" rx="6" fill="rgba(0,0,0,0.25)" stroke="rgba(255,255,255,0.08)"/>
      <text x="160" y="13" textAnchor="middle" fill={a} fontSize="7.5" fontFamily="monospace" letterSpacing="1">RÍOS MÁS LARGOS DEL MUNDO</text>
      {worldRivers.map((r, i) => {
        const y = 18 + i * 11;
        return (
          <g key={i}>
            <text x="154" y={y + 8.5} textAnchor="end" fill="rgba(255,255,255,0.5)" fontSize="5.5" fontFamily="monospace">{r.name}</text>
            <rect x="157" y={y} width={bW(r.km)} height="10" fill={r.color} opacity="0.75" rx="2"/>
            <text x={157 + bW(r.km) + 3} y={y + 8} fill={r.color} fontSize="5.5" fontFamily="monospace">{r.km.toLocaleString("es-MX")} km</text>
          </g>
        );
      })}
      {/* Mexico rivers */}
      <rect x="2" y="80" width="316" height="76" rx="6" fill="rgba(0,0,0,0.25)" stroke="rgba(255,255,255,0.08)"/>
      <text x="160" y="92" textAnchor="middle" fill={gold} fontSize="7.5" fontFamily="monospace" letterSpacing="1">PRINCIPALES RÍOS DE MÉXICO</text>
      {mxRivers.map((r, i) => {
        const y = 97 + i * 13;
        return (
          <g key={i}>
            <text x="154" y={y + 9} textAnchor="end" fill="rgba(255,255,255,0.5)" fontSize="5.5" fontFamily="monospace">{r.name}</text>
            <rect x="157" y={y} width={bW(r.km)} height="11" fill={r.color} opacity="0.75" rx="2"/>
            <text x={157 + bW(r.km) + 3} y={y + 9} fill={r.color} fontSize="5.5" fontFamily="monospace">{r.km.toLocaleString("es-MX")} km</text>
          </g>
        );
      })}
    </svg>
  );
}

// ── Geografía: Ciclones en México ─────────────────────────────────────────────
function GeoCiclonesSVG({ tema }) {
  const a = tema.acento;
  const gold = "#f5c842";
  const orange = "#e07040";
  // Saffir-Simpson categories
  const cats = [
    { cat: "Cat. 1", km: "119–153 km/h", color: "#88cc44", label: "leve" },
    { cat: "Cat. 2", km: "154–177 km/h", color: "#cccc22", label: "moderado" },
    { cat: "Cat. 3", km: "178–208 km/h", color: "#cc8822", label: "intenso" },
    { cat: "Cat. 4", km: "209–251 km/h", color: "#cc4422", label: "extremo" },
    { cat: "Cat. 5", km: "> 252 km/h",   color: "#990022", label: "catastrófico" },
  ];
  return (
    <svg viewBox="0 0 320 158" width="100%" style={{ display: "block" }}>
      {/* Left: Pacific */}
      <rect x="2" y="2" width="96" height="154" rx="6" fill="rgba(230,112,64,0.1)" stroke="rgba(230,112,64,0.35)" strokeWidth="1"/>
      <text x="50" y="14" textAnchor="middle" fill={orange} fontSize="7" fontFamily="monospace" fontWeight="700">PACÍFICO</text>
      <text x="50" y="24" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">15 mayo–30 nov.</text>
      <text x="50" y="33" textAnchor="middle" fill={orange} fontSize="5.5" fontFamily="monospace" opacity="0.8">Pico: jul.–oct.</text>
      <line x1="10" y1="38" x2="90" y2="38" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7"/>
      <text x="8" y="48" fill="rgba(255,255,255,0.5)" fontSize="5" fontFamily="monospace">Estados:</text>
      {["Sinaloa","Nayarit","Jalisco","Colima","Michoacán","Guerrero","Oaxaca","Chiapas"].map((s, i) => (
        <text key={i} x="8" y={56 + i * 9} fill="rgba(255,255,255,0.7)" fontSize="5" fontFamily="monospace">· {s}</text>
      ))}
      <line x1="10" y1="133" x2="90" y2="133" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7"/>
      <text x="50" y="143" textAnchor="middle" fill={orange} fontSize="5" fontFamily="monospace" opacity="0.9">Patricia (2015)</text>
      <text x="50" y="152" textAnchor="middle" fill={orange} fontSize="5" fontFamily="monospace" opacity="0.7">Cat. 5 · récord W</text>

      {/* Center: Saffir-Simpson scale */}
      <rect x="104" y="2" width="112" height="154" rx="6" fill="rgba(0,0,0,0.25)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <text x="160" y="14" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="7" fontFamily="monospace" fontWeight="700">SAFFIR-SIMPSON</text>
      <text x="160" y="23" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5.5" fontFamily="monospace">escala de categorías</text>
      {cats.map((c, i) => (
        <g key={i}>
          <rect x="108" y={32 + i * 24} width="108" height="20" rx="4" fill={`${c.color}20`} stroke={`${c.color}50`} strokeWidth="0.8"/>
          <text x="114" y={32 + i * 24 + 13} fill={c.color} fontSize="7" fontFamily="monospace" fontWeight="700">{c.cat}</text>
          <text x="114" y={32 + i * 24 + 20} fill={c.color} fontSize="5" fontFamily="monospace" opacity="0.75">{c.km}</text>
          <text x="206" y={32 + i * 24 + 14} textAnchor="end" fill={c.color} fontSize="5.5" fontFamily="monospace" opacity="0.85">{c.label}</text>
        </g>
      ))}
      <text x="160" y="158" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="4.5" fontFamily="monospace">viento sostenido</text>

      {/* Right: Atlantic/Caribbean */}
      <rect x="222" y="2" width="96" height="154" rx="6" fill={`${a}10`} stroke={`${a}35`} strokeWidth="1"/>
      <text x="270" y="14" textAnchor="middle" fill={a} fontSize="7" fontFamily="monospace" fontWeight="700">ATLÁNTICO</text>
      <text x="270" y="23" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">1 jun.–30 nov.</text>
      <text x="270" y="32" textAnchor="middle" fill={a} fontSize="5.5" fontFamily="monospace" opacity="0.8">Pico: ago.–oct.</text>
      <line x1="230" y1="37" x2="310" y2="37" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7"/>
      <text x="228" y="47" fill="rgba(255,255,255,0.5)" fontSize="5" fontFamily="monospace">Estados:</text>
      {["Quintana Roo","Yucatán","Tabasco","Veracruz","Tamaulipas"].map((s, i) => (
        <text key={i} x="228" y={55 + i * 9} fill="rgba(255,255,255,0.7)" fontSize="5" fontFamily="monospace">· {s}</text>
      ))}
      <line x1="230" y1="103" x2="310" y2="103" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7"/>
      <text x="270" y="114" textAnchor="middle" fill={a} fontSize="5" fontFamily="monospace" opacity="0.9">Gilberto (1988)</text>
      <text x="270" y="123" textAnchor="middle" fill={a} fontSize="5" fontFamily="monospace" opacity="0.9">Wilma (2005)</text>
      <text x="270" y="132" textAnchor="middle" fill={a} fontSize="5" fontFamily="monospace" opacity="0.7">ambos Cat. 5</text>
    </svg>
  );
}

// ── Geografía: Organización política mundial ───────────────────────────────────
function GeoOrganizacionSVG({ tema }) {
  const a = tema.acento;
  const gold = "#f5c842";
  const red = "#cc4420";
  const disint = [
    { pais: "URSS (1991)",          resultado: "→ 15 repúblicas",            color: a },
    { pais: "Yugoslavia (1991–2008)", resultado: "→ 7 países (Balcanes)",    color: a },
    { pais: "Checoslovaquia (1993)", resultado: "→ Rep. Checa + Eslovaquia", color: a },
    { pais: "Alemania (1990)",       resultado: "Reunificación (O + W)",      color: gold },
    { pais: "Yemen (1990)",          resultado: "Reunificación",              color: gold },
    { pais: "Sudán (2011)",          resultado: "→ Sudán + Sudán del Sur",   color: a },
    { pais: "Kosovo (2008)",         resultado: "Independencia de Serbia",    color: a },
  ];
  const tension = [
    { zona: "Oriente Medio",        desc: "Israel-Palestina · guerras regionales" },
    { zona: "Ucrania-Rusia",        desc: "Invasión rusa 2022; tensión OTAN-Rusia" },
    { zona: "Corea del Norte",      desc: "Programa nuclear; tensión con Occidente" },
    { zona: "Cachemira",            desc: "Disputa India-Pakistán desde 1947" },
    { zona: "Estrecho de Taiwán",   desc: "Tensión China-Taiwán-EUA" },
    { zona: "Mar del Sur de China",  desc: "Reclamaciones territoriales China vs. vecinos" },
  ];
  return (
    <svg viewBox="0 0 320 158" width="100%" style={{ display: "block" }}>
      {/* Left: Disintegración/unificación */}
      <rect x="2" y="2" width="152" height="154" rx="6" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.08)"/>
      <text x="78" y="13" textAnchor="middle" fill={a} fontSize="7" fontFamily="monospace" fontWeight="700">DESINTEGRACIÓN / UNIFIC.</text>
      <text x="78" y="22" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5.5" fontFamily="monospace">post-Guerra Fría (1989–)</text>
      {disint.map((d, i) => (
        <g key={i}>
          <rect x="6" y={28 + i * 18} width="144" height="15" rx="3" fill={`${d.color}10`}/>
          <text x="10" y={28 + i * 18 + 10} fill={d.color} fontSize="5.5" fontFamily="monospace" fontWeight="600">{d.pais}</text>
          <text x="10" y={28 + i * 18 + 14} fill="rgba(255,255,255,0.6)" fontSize="4.5" fontFamily="monospace">{d.resultado}</text>
        </g>
      ))}

      {/* Right: Zonas de tensión */}
      <rect x="166" y="2" width="152" height="154" rx="6" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.08)"/>
      <text x="242" y="13" textAnchor="middle" fill={red} fontSize="7" fontFamily="monospace" fontWeight="700">ZONAS DE TENSIÓN</text>
      <text x="242" y="22" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5.5" fontFamily="monospace">conflictos y disputas actuales</text>
      {tension.map((z, i) => (
        <g key={i}>
          <rect x="170" y={28 + i * 21} width="144" height="18" rx="3" fill="rgba(200,70,40,0.1)"/>
          <text x="174" y={28 + i * 21 + 11} fill={red} fontSize="5.5" fontFamily="monospace" fontWeight="600">{z.zona}</text>
          <text x="174" y={28 + i * 21 + 17} fill="rgba(255,255,255,0.55)" fontSize="4.5" fontFamily="monospace">{z.desc}</text>
        </g>
      ))}
    </svg>
  );
}

// ── Geografía: Biomas mundiales y de México ───────────────────────────────────
function GeoRegionesSVG({ tema }) {
  const a = tema.acento;
  const worldZ = [
    { label: "TUNDRA / POLAR",         color: "#607090", y: 22, h: 18, res: "glaciares · petróleo ártico" },
    { label: "TAIGA",                   color: "#2a5a2a", y: 40, h: 18, res: "madera · gas natural" },
    { label: "BOSQUE TEMPLADO",         color: "#3a7a3a", y: 58, h: 16, res: "madera · agua · suelos fértiles" },
    { label: "MATORRAL / ESTEPA",       color: "#7a6a28", y: 74, h: 14, res: "ganadería · trigo · gas" },
    { label: "DESIERTO SUBTROPICAL",    color: "#b07820", y: 88, h: 14, res: "minería · energía solar" },
    { label: "SABANA",                  color: "#78a828", y: 102, h: 14, res: "ganadería extensiva" },
    { label: "◄  SELVA TROPICAL  ►",  color: "#1a7020", y: 116, h: 20, res: "Mayor biodiversidad del planeta" },
    { label: "Hemisferio Sur (espejo)", color: "#1e1e2e", y: 136, h: 22, res: "mismos biomas, orden inverso" },
  ];
  const mxZ = [
    { label: "DESIERTO / MATORRAL ÁRIDO",      color: "#b07820", y: 22,  h: 25, sub: "Sonora · Chihuahua · Baja California" },
    { label: "PASTIZAL / ESTEPA",              color: "#7a6a28", y: 47,  h: 20, sub: "Chihuahua norte · Durango" },
    { label: "BOSQUE DE PINO-ENCINO",          color: "#2a5a2a", y: 67,  h: 26, sub: "Sierra Madre Occ., Orient. y del Sur" },
    { label: "MATORRAL XERÓFILO",              color: "#8a7a30", y: 93,  h: 20, sub: "Altiplano Central" },
    { label: "BOSQUE TROP. CADUCIFOLIO",       color: "#4a8a2a", y: 113, h: 20, sub: "Costas del Pacífico y del Golfo" },
    { label: "SELVA TROPICAL HÚMEDA",          color: "#1a7020", y: 133, h: 25, sub: "Chiapas · Tabasco · Veracruz · Yucatán" },
  ];
  return (
    <svg viewBox="0 0 320 162" width="100%" style={{ display: "block" }}>
      <rect x="2"   y="2" width="153" height="158" rx="6" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.08)"/>
      <text x="78"  y="13" textAnchor="middle" fill={a} fontSize="7.5" fontFamily="monospace" letterSpacing="1">BIOMAS MUNDIALES</text>
      <text x="78"  y="21" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5.5" fontFamily="monospace">norte → sur (por latitud)</text>
      {worldZ.map((z, i) => (
        <g key={i}>
          <rect x="4"  y={z.y} width="149" height={z.h - 1} fill={z.color} opacity="0.82" rx="1.5"/>
          <text x="8"  y={z.y + z.h * 0.45} fill="rgba(255,255,255,0.95)" fontSize="5.5" fontFamily="monospace" fontWeight="600">{z.label}</text>
          <text x="8"  y={z.y + z.h * 0.82} fill="rgba(255,255,255,0.5)"  fontSize="4.5" fontFamily="monospace">{z.res}</text>
        </g>
      ))}
      <rect x="165" y="2" width="153" height="158" rx="6" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.08)"/>
      <text x="241" y="13" textAnchor="middle" fill={a} fontSize="7.5" fontFamily="monospace" letterSpacing="1">BIOMAS EN MÉXICO</text>
      <text x="241" y="21" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5.5" fontFamily="monospace">norte → sur</text>
      {mxZ.map((z, i) => (
        <g key={i}>
          <rect x="167" y={z.y} width="149" height={z.h - 1} fill={z.color} opacity="0.82" rx="1.5"/>
          <text x="171" y={z.y + z.h * 0.45} fill="rgba(255,255,255,0.95)" fontSize="5.5" fontFamily="monospace" fontWeight="600">{z.label}</text>
          <text x="171" y={z.y + z.h * 0.82} fill="rgba(255,255,255,0.5)"  fontSize="4.5" fontFamily="monospace">{z.sub}</text>
        </g>
      ))}
    </svg>
  );
}

// ── Geografía: Deterioro ambiental (4 problemas) ──────────────────────────────
function GeoDeterioroSVG({ tema }) {
  const boxes = [
    {
      title: "CAMBIO CLIMÁTICO",   sub: "Efecto Invernadero",
      hdr: "#cc4420", bg: "rgba(200,70,30,0.12)", brd: "rgba(200,70,30,0.38)",
      causa: "CO₂, CH₄, N₂O atrapan calor solar",
      efecto: "↑ T° · deshielo · ↑ nivel del mar",
      x: 2, y: 2,
    },
    {
      title: "CAPA DE OZONO",      sub: "Adelgazamiento",
      hdr: "#7744cc", bg: "rgba(100,60,200,0.12)", brd: "rgba(100,60,200,0.38)",
      causa: "Clorofluorocarbonos (CFC)",
      efecto: "↑ UV · cáncer de piel · daño ecosist.",
      x: 163, y: 2,
    },
    {
      title: "AGUA",               sub: "Contaminación y sobreexplotación",
      hdr: "#1a6aaa", bg: "rgba(26,100,170,0.12)", brd: "rgba(26,100,170,0.38)",
      causa: "Agropecuaria · industrial · doméstica",
      efecto: "Escasez · enfermedades · ↓ acuíferos",
      x: 2, y: 82,
    },
    {
      title: "MAREA NEGRA",        sub: "Petróleo",
      hdr: "#884411", bg: "rgba(100,50,20,0.15)", brd: "rgba(130,80,40,0.38)",
      causa: "Derrames en extracción y transporte",
      efecto: "Muerte ecosist. marino · aves · peces",
      x: 163, y: 82,
    },
  ];
  const W = 153, H = 74;
  return (
    <svg viewBox="0 0 320 158" width="100%" style={{ display: "block" }}>
      {boxes.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={b.y} width={W} height={H} rx="7" fill={b.bg} stroke={b.brd} strokeWidth="1"/>
          <text x={b.x + W / 2} y={b.y + 12} textAnchor="middle" fill={b.hdr} fontSize="7.5" fontFamily="monospace" fontWeight="700" letterSpacing="0.5">{b.title}</text>
          <text x={b.x + W / 2} y={b.y + 21} textAnchor="middle" fill={b.hdr} fontSize="5.5" fontFamily="monospace" opacity="0.75">{b.sub}</text>
          <line x1={b.x + 10} y1={b.y + 25} x2={b.x + W - 10} y2={b.y + 25} stroke={b.brd} strokeWidth="0.7"/>
          <text x={b.x + 8} y={b.y + 35} fill="rgba(255,255,255,0.45)" fontSize="5.5" fontFamily="monospace">Causa:</text>
          <text x={b.x + 8} y={b.y + 46} fill="rgba(255,255,255,0.85)" fontSize="5.5" fontFamily="monospace">{b.causa}</text>
          <line x1={b.x + 10} y1={b.y + 51} x2={b.x + W - 10} y2={b.y + 51} stroke={b.brd} strokeWidth="0.5" opacity="0.5"/>
          <text x={b.x + 8} y={b.y + 61} fill="rgba(255,255,255,0.45)" fontSize="5.5" fontFamily="monospace">Consecuencia:</text>
          <text x={b.x + 8} y={b.y + 71} fill={b.hdr} fontSize="5.5" fontFamily="monospace" opacity="0.9">{b.efecto}</text>
        </g>
      ))}
      {/* gap separator */}
      <line x1="2" y1="79" x2="318" y2="79" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
    </svg>
  );
}

// ── Geografía: Pirámide poblacional comparativa ───────────────────────────────
function GeoPoblacionSVG({ tema }) {
  const a = tema.acento;
  const gold = "#f5c842";
  const red = "#cc4420";
  const scale = 1.9; // px per %
  const barH = 18, barGap = 4, startY = 38, labelX = 55;

  const devAges    = [[32,"0-14","#cc4420"],[27,"15-29","#cc6020"],[20,"30-44","#aa7820"],[13,"45-59","#7a8820"],[8,"60+","#4a9820"]];
  const richAges   = [[15,"0-14","#4a9820"],[17,"15-29","#3a9840"],[21,"30-44","#2a8860"],[23,"45-59","#1a7880"],[24,"60+",a]];

  return (
    <svg viewBox="0 0 320 160" width="100%" style={{ display: "block" }}>
      {/* Panel izquierdo: países en desarrollo */}
      <rect x="2" y="2" width="148" height="156" rx="6" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.08)"/>
      <text x="76" y="13" textAnchor="middle" fill={red} fontSize="6.5" fontFamily="monospace" fontWeight="700">PAÍSES EN DESARROLLO</text>
      <text x="76" y="22" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">Pirámide con base amplia</text>
      <text x="76" y="31" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="5" fontFamily="monospace">México · India · Nigeria · Brasil</text>
      {devAges.map(([pct, label, color], i) => {
        const bW = Math.round(pct * scale);
        const y = startY + i * (barH + barGap);
        return (
          <g key={i}>
            <text x="50" y={y + barH / 2 + 3} textAnchor="end" fill="rgba(255,255,255,0.5)" fontSize="6" fontFamily="monospace">{label}</text>
            <rect x={labelX} y={y} width={bW} height={barH} fill={color} opacity="0.82" rx="2"/>
            <text x={labelX + bW + 3} y={y + barH / 2 + 3} fill={color} fontSize="6" fontFamily="monospace">{pct}%</text>
          </g>
        );
      })}
      {/* Panel derecho: países desarrollados */}
      <rect x="170" y="2" width="148" height="156" rx="6" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.08)"/>
      <text x="244" y="13" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">PAÍSES DESARROLLADOS</text>
      <text x="244" y="22" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">Pirámide envejecida / uniforme</text>
      <text x="244" y="31" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="5" fontFamily="monospace">Japón · Alemania · Suecia · EUA</text>
      {richAges.map(([pct, label, color], i) => {
        const bW = Math.round(pct * scale);
        const y = startY + i * (barH + barGap);
        return (
          <g key={i}>
            <text x="220" y={y + barH / 2 + 3} textAnchor="end" fill="rgba(255,255,255,0.5)" fontSize="6" fontFamily="monospace">{label}</text>
            <rect x="223" y={y} width={bW} height={barH} fill={color} opacity="0.82" rx="2"/>
            <text x={223 + bW + 3} y={y + barH / 2 + 3} fill={color} fontSize="6" fontFamily="monospace">{pct}%</text>
          </g>
        );
      })}
    </svg>
  );
}

// ── Geografía: Brecha del desarrollo y bloques económicos ─────────────────────
function GeoEconomiaSVG({ tema }) {
  const a = tema.acento;
  const gold = "#f5c842";
  const grn = "#3a8a3a";
  const red = "#cc4420";
  const W = 152, barH = 12, barGap = 5, startY = 38, lbW = 50, maxBW = 80;
  const PL = 2, PR = 166; // panel left x

  const devInds  = [["IDH","0.90",90,grn],["Esp. vida","80 años",89,grn],["Alfabet.","99%",99,grn],["Natalidad","10 ‰",25,a]];
  const devgInds = [["IDH","0.60",60,gold],["Esp. vida","68 años",76,gold],["Alfabet.","75%",75,gold],["Natalidad","25 ‰",63,red]];

  const panelRows = (inds, px) =>
    inds.map(([label, val, pct, color], i) => {
      const bW = Math.round(pct * maxBW / 100);
      const y = startY + i * (barH + barGap);
      const barX = px + lbW + 8;
      return (
        <g key={i}>
          <text x={px + 8} y={y + barH - 1} fill="rgba(255,255,255,0.5)" fontSize="6" fontFamily="monospace">{label}</text>
          <rect x={barX} y={y} width={bW} height={barH} fill={color} opacity="0.75" rx="2"/>
          <text x={barX + bW + 3} y={y + barH - 1} fill={color} fontSize="5.5" fontFamily="monospace">{val}</text>
        </g>
      );
    });

  return (
    <svg viewBox="0 0 320 162" width="100%" style={{ display: "block" }}>
      {/* Top: indicators */}
      <rect x={PL}  y="2" width={W} height="104" rx="6" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.08)"/>
      <text x={PL + W/2} y="13" textAnchor="middle" fill={grn}  fontSize="7" fontFamily="monospace" fontWeight="700">PAÍSES DESARROLLADOS</text>
      <text x={PL + W/2} y="22" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5.5" fontFamily="monospace">EUA · Alemania · Japón · Francia</text>
      <text x={PL + W/2} y="31" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="5" fontFamily="monospace">indicadores altos</text>
      {panelRows(devInds, PL)}

      <rect x={PR}  y="2" width={W} height="104" rx="6" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.08)"/>
      <text x={PR + W/2} y="13" textAnchor="middle" fill={gold} fontSize="7" fontFamily="monospace" fontWeight="700">PAÍSES EN DESARROLLO</text>
      <text x={PR + W/2} y="22" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5.5" fontFamily="monospace">México · India · Nigeria · Bolivia</text>
      <text x={PR + W/2} y="31" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="5" fontFamily="monospace">indicadores intermedios-bajos</text>
      {panelRows(devgInds, PR)}

      {/* Brecha label */}
      <text x="160" y="55"  textAnchor="middle" fill="rgba(255,255,255,0.22)" fontSize="5.5" fontFamily="monospace">←</text>
      <text x="160" y="63"  textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">BRECHA</text>
      <text x="160" y="71"  textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">DEL</text>
      <text x="160" y="79"  textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">DESARR.</text>
      <text x="160" y="87"  textAnchor="middle" fill="rgba(255,255,255,0.22)" fontSize="5.5" fontFamily="monospace">→</text>

      {/* Bottom: economic blocs */}
      {[
        { label:"T-MEC", sub:"EUA · Canadá · México", desc:"Mayor bloque por PIB",   color:a,    x:2   },
        { label:"U.E.",  sub:"27 países · Alemania",   desc:"Euro · Banco Central",  color:gold, x:112 },
        { label:"APEC",  sub:"Cuenca del Pacífico",    desc:"Japón · China · EUA",   color:"#4ab890", x:222 },
      ].map((bl, i) => (
        <g key={i}>
          <rect x={bl.x} y="110" width="96" height="48" rx="6"
            fill={`${bl.color}14`} stroke={`${bl.color}44`} strokeWidth="1"/>
          <text x={bl.x + 48} y="122" textAnchor="middle" fill={bl.color} fontSize="7.5" fontFamily="monospace" fontWeight="700">{bl.label}</text>
          <text x={bl.x + 48} y="132" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5" fontFamily="monospace">{bl.sub}</text>
          <text x={bl.x + 48} y="142" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">{bl.desc}</text>
          <text x={bl.x + 48} y="152" textAnchor="middle" fill={bl.color} fontSize="5" fontFamily="monospace" opacity="0.6">México ∈ T-MEC y APEC</text>
        </g>
      ))}
    </svg>
  );
}

// ── Biología: Célula animal vs vegetal ───────────────────────────────────────
function BiologiaCelulaSVG({ tema }) {
  const a = tema.acento, grn = "#4ab890", gold = "#f5c842", org = "#ff7755", lila = "#cc88ff";
  return (
    <svg viewBox="0 0 320 130" width="100%" style={{ display:"block" }}>
      {/* LEFT: Animal Cell */}
      <rect x="1" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="78" y="11" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">CÉLULA ANIMAL</text>
      <ellipse cx="72" cy="68" rx="58" ry="44" fill={`${a}08`} stroke={a} strokeWidth="1.5" opacity="0.65"/>
      {/* Nucleus */}
      <ellipse cx="68" cy="65" rx="17" ry="13" fill={`${lila}25`} stroke={lila} strokeWidth="1.5"/>
      <circle cx="70" cy="63" r="5" fill={lila} opacity="0.65"/>
      <text x="50" y="58" fill={lila} fontSize="4.5" fontFamily="monospace">núcleo</text>
      {/* Mitochondria */}
      <ellipse cx="108" cy="55" rx="11" ry="6" fill={`${org}28`} stroke={org} strokeWidth="1.2"/>
      <line x1="99" y1="53" x2="104" y2="58" stroke={org} strokeWidth="0.8" opacity="0.5"/>
      <line x1="99" y1="57" x2="104" y2="52" stroke={org} strokeWidth="0.8" opacity="0.5"/>
      <text x="106" y="50" fill={org} fontSize="4.5" fontFamily="monospace">mitocondria</text>
      {/* Golgi */}
      <path d="M 96,76 Q 100,73 104,76" fill="none" stroke={gold} strokeWidth="1.5" opacity="0.85"/>
      <path d="M 96,79 Q 100,76 104,79" fill="none" stroke={gold} strokeWidth="1.5" opacity="0.85"/>
      <path d="M 96,82 Q 100,79 104,82" fill="none" stroke={gold} strokeWidth="1.5" opacity="0.85"/>
      <text x="107" y="80" fill={gold} fontSize="4.5" fontFamily="monospace">Golgi</text>
      {/* Ribosomes */}
      {[[44,80],[50,72],[38,70],[34,60],[86,82],[80,90]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="1.8" fill="rgba(255,255,255,0.5)"/>
      ))}
      <text x="30" y="87" fill="rgba(255,255,255,0.4)" fontSize="4" fontFamily="monospace">ribosoma</text>
      {/* Lysosome */}
      <circle cx="90" cy="90" r="5" fill={`${a}35`} stroke={a} strokeWidth="1"/>
      <text x="97" y="93" fill={a} fontSize="4" fontFamily="monospace">lisosoma</text>
      {/* Centriole */}
      <rect x="46" y="78" width="8" height="4" rx="1" fill="rgba(255,220,150,0.3)" stroke={gold} strokeWidth="0.8"/>
      <text x="38" y="88" fill={gold} fontSize="3.5" fontFamily="monospace">centriolo</text>
      <text x="72" y="120" textAnchor="middle" fill={a} fontSize="4.5" fontFamily="monospace">membrana plasmática (flexible)</text>
      {/* RIGHT: Plant Cell */}
      <rect x="165" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="242" y="11" textAnchor="middle" fill={grn} fontSize="6.5" fontFamily="monospace" fontWeight="700">CÉLULA VEGETAL</text>
      {/* Cell wall */}
      <rect x="181" y="17" width="126" height="93" rx="4" fill="none" stroke={grn} strokeWidth="3" opacity="0.75"/>
      {/* Cell membrane inside */}
      <rect x="184" y="20" width="120" height="87" rx="3"
        fill={`${grn}08`} stroke={grn} strokeWidth="0.8" opacity="0.4" strokeDasharray="2,1"/>
      {/* Central vacuole */}
      <ellipse cx="242" cy="66" rx="38" ry="30" fill="rgba(80,140,220,0.15)" stroke="rgba(80,140,220,0.45)" strokeWidth="1.2"/>
      <text x="242" y="64" textAnchor="middle" fill="rgba(80,180,255,0.65)" fontSize="4.5" fontFamily="monospace">vacuola</text>
      <text x="242" y="71" textAnchor="middle" fill="rgba(80,180,255,0.5)" fontSize="4" fontFamily="monospace">central</text>
      {/* Nucleus */}
      <ellipse cx="212" cy="40" rx="12" ry="9" fill={`${lila}25`} stroke={lila} strokeWidth="1.2"/>
      <circle cx="213" cy="39" r="4" fill={lila} opacity="0.65"/>
      <text x="202" y="33" fill={lila} fontSize="4" fontFamily="monospace">núcleo</text>
      {/* Chloroplasts */}
      <ellipse cx="274" cy="40" rx="12" ry="7" fill="rgba(50,160,50,0.45)" stroke={grn} strokeWidth="1.2"/>
      <text x="274" y="33" textAnchor="middle" fill={grn} fontSize="4" fontFamily="monospace">cloroplasto</text>
      <ellipse cx="255" cy="98" rx="11" ry="6" fill="rgba(50,160,50,0.45)" stroke={grn} strokeWidth="1.2"/>
      {/* Mitochondria */}
      <ellipse cx="292" cy="58" rx="8" ry="5" fill={`${org}28`} stroke={org} strokeWidth="1"/>
      <text x="293" y="52" fill={org} fontSize="3.5" fontFamily="monospace">mitoc.</text>
      <text x="242" y="119" textAnchor="middle" fill={grn} fontSize="4.5" fontFamily="monospace">pared celular rígida (celulosa)</text>
    </svg>
  );
}

// ── Biología: Herencia genética ───────────────────────────────────────────────
function BiologiaHerenciaSVG({ tema }) {
  const a = tema.acento, gold = "#f5c842", grn = "#4ab890", lila = "#cc88ff";
  return (
    <svg viewBox="0 0 320 128" width="100%" style={{ display:"block" }}>
      {/* LEFT: Punnett Square */}
      <rect x="1" y="1" width="154" height="126" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="78" y="10" textAnchor="middle" fill={a} fontSize="6" fontFamily="monospace" fontWeight="700">CUADRO DE PUNNETT</text>
      <text x="78" y="17" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5" fontFamily="monospace">cruce: Aa × Aa</text>
      {/* Parent 2 headers (top) */}
      <text x="60" y="28" textAnchor="middle" fill={a} fontSize="11" fontWeight="700">A</text>
      <text x="108" y="28" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="11" fontStyle="italic">a</text>
      {/* Parent 1 headers (left) */}
      <text x="20" y="53" textAnchor="middle" fill={a} fontSize="11" fontWeight="700">A</text>
      <text x="20" y="88" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="11" fontStyle="italic">a</text>
      {/* AA cell */}
      <rect x="32" y="31" width="52" height="38" rx="3" fill={`${a}35`} stroke={a} strokeWidth="1.5"/>
      <text x="58" y="51" textAnchor="middle" fill={a} fontSize="10" fontWeight="700">AA</text>
      <text x="58" y="62" textAnchor="middle" fill={a} fontSize="5" fontFamily="monospace">dominante</text>
      {/* Aa top-right */}
      <rect x="86" y="31" width="52" height="38" rx="3" fill={`${a}20`} stroke={a} strokeWidth="1.2"/>
      <text x="112" y="51" textAnchor="middle" fill={a} fontSize="10" fontWeight="700">Aa</text>
      <text x="112" y="62" textAnchor="middle" fill={a} fontSize="5" fontFamily="monospace">dominante</text>
      {/* Aa bottom-left */}
      <rect x="32" y="71" width="52" height="38" rx="3" fill={`${a}20`} stroke={a} strokeWidth="1.2"/>
      <text x="58" y="91" textAnchor="middle" fill={a} fontSize="10" fontWeight="700">Aa</text>
      <text x="58" y="102" textAnchor="middle" fill={a} fontSize="5" fontFamily="monospace">dominante</text>
      {/* aa cell */}
      <rect x="86" y="71" width="52" height="38" rx="3"
        fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2"/>
      <text x="112" y="91" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="10" fontStyle="italic">aa</text>
      <text x="112" y="102" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5" fontFamily="monospace">recesivo</text>
      {/* Ratio */}
      <text x="78" y="118" textAnchor="middle" fill={gold} fontSize="5.5" fontFamily="monospace">3 dominantes : 1 recesivo</text>
      {/* RIGHT: Key concepts */}
      <rect x="165" y="1" width="154" height="126" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="242" y="11" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">CONCEPTOS CLAVE</text>
      {[
        { label:"Gen",       desc:["segmento de ADN que codifica","una característica heredable"],  color:a    },
        { label:"Alelo",     desc:["versión del gen","A=dominante · a=recesivo"],                   color:lila },
        { label:"Genotipo",  desc:["composición genética","AA, Aa, aa"],                            color:grn  },
        { label:"Fenotipo",  desc:["característica observable","color, altura, grupo sanguíneo"],   color:gold },
      ].map(({ label, desc, color }, i) => (
        <g key={i}>
          <rect x="170" y={16+i*27} width="144" height="23" rx="3"
            fill={`${color}18`} stroke={`${color}45`} strokeWidth="1"/>
          <text x="176" y={28+i*27} fill={color} fontSize="6" fontFamily="monospace" fontWeight="700">{label}</text>
          {desc.map((line,li)=>(
            <text key={li} x="176" y={28+i*27+7+li*7} fill="rgba(255,255,255,0.4)" fontSize="4.5" fontFamily="monospace">{line}</text>
          ))}
        </g>
      ))}
      <text x="242" y="125" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="5" fontFamily="monospace">Mendel: segregación + distribución independiente</text>
    </svg>
  );
}

// ── Biología: Evolución ───────────────────────────────────────────────────────
function BiologiaEvolucionSVG({ tema }) {
  const a = tema.acento, gold = "#f5c842", grn = "#4ab890", org = "#ff7755";
  return (
    <svg viewBox="0 0 320 130" width="100%" style={{ display:"block" }}>
      {/* LEFT: Natural selection */}
      <rect x="1" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="78" y="11" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">SELECCIÓN NATURAL</text>
      {/* Initial population - varied */}
      <text x="78" y="20" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5" fontFamily="monospace">población inicial (variación genética)</text>
      {[[10,5],[20,2.5],[30,5],[40,3],[50,5],[60,2],[70,5],[80,3],[90,5],[100,2.5],[110,5],[120,3],[130,4]].map(([x,r],i)=>(
        <circle key={i} cx={x+5} cy={30} r={r} fill={r>=5 ? a : "rgba(255,255,255,0.25)"} opacity="0.75"/>
      ))}
      {/* Selection pressure */}
      <line x1="8" y1="46" x2="148" y2="46" stroke={org} strokeWidth="1.5" strokeDasharray="4,2"/>
      <text x="78" y="43" textAnchor="middle" fill={org} fontSize="4.5" fontFamily="monospace">presión ambiental (depredación, clima)</text>
      {/* Survivors */}
      <text x="78" y="56" textAnchor="middle" fill={grn} fontSize="5" fontFamily="monospace">sobreviven los más adaptados</text>
      {[[22,5],[46,5],[70,5],[94,5],[118,5]].map(([x,r],i)=>(
        <circle key={i} cx={x} cy={65} r={r} fill={a} opacity="0.85"/>
      ))}
      {/* Arrow */}
      <line x1="78" y1="74" x2="78" y2="82" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
      <polygon points="74,78 82,78 78,83" fill="rgba(255,255,255,0.4)"/>
      {/* Next generation */}
      <text x="78" y="91" textAnchor="middle" fill={gold} fontSize="5" fontFamily="monospace">nueva generación (más adaptada + variación)</text>
      {[[10,5],[22,5],[34,5],[46,5],[58,5],[70,5],[82,5],[94,5],[106,5],[118,5],[130,4]].map(([x,r],i)=>(
        <circle key={i} cx={x+5} cy={100} r={r} fill={gold} opacity="0.78"/>
      ))}
      <text x="78" y="118" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="4.5" fontFamily="monospace">muchas generaciones → nueva especie</text>
      {/* RIGHT: Evolutionary tree */}
      <rect x="165" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="242" y="11" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">ÁRBOL EVOLUTIVO</text>
      {/* Time axis */}
      <line x1="178" y1="112" x2="178" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
      <text x="178" y="118" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="4" fontFamily="monospace">pasado</text>
      <text x="178" y="17" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="4" fontFamily="monospace">presente</text>
      {/* Common ancestor trunk */}
      <line x1="212" y1="108" x2="212" y2="82" stroke={a} strokeWidth="2"/>
      <circle cx="212" cy="108" r="3" fill={a} opacity="0.7"/>
      <text x="218" y="112" fill="rgba(255,255,255,0.3)" fontSize="4" fontFamily="monospace">ancestro común</text>
      {/* First split */}
      <circle cx="212" cy="82" r="2.5" fill={gold} opacity="0.8"/>
      <line x1="212" y1="82" x2="193" y2="52" stroke={grn} strokeWidth="1.5"/>
      <line x1="212" y1="82" x2="238" y2="56" stroke={a} strokeWidth="1.5"/>
      {/* Left subtree */}
      <circle cx="193" cy="52" r="2.5" fill={gold} opacity="0.8"/>
      <line x1="193" y1="52" x2="182" y2="28" stroke={grn} strokeWidth="1.5"/>
      <line x1="193" y1="52" x2="204" y2="28" stroke={grn} strokeWidth="1.5"/>
      <circle cx="182" cy="24" r="5" fill={grn} opacity="0.8"/>
      <circle cx="204" cy="24" r="5" fill={grn} opacity="0.8"/>
      <text x="180" y="19" fill={grn} fontSize="4" fontFamily="monospace">Sp A</text>
      <text x="202" y="19" fill={grn} fontSize="4" fontFamily="monospace">Sp B</text>
      {/* Right subtree */}
      <circle cx="238" cy="56" r="2.5" fill={gold} opacity="0.8"/>
      <line x1="238" y1="56" x2="226" y2="30" stroke={a} strokeWidth="1.5"/>
      <line x1="238" y1="56" x2="258" y2="34" stroke={a} strokeWidth="1.5"/>
      <line x1="258" y1="34" x2="250" y2="20" stroke={a} strokeWidth="1.5"/>
      <line x1="258" y1="34" x2="268" y2="20" stroke={a} strokeWidth="1.5"/>
      <circle cx="226" cy="26" r="5" fill={a} opacity="0.8"/>
      <circle cx="250" cy="16" r="4" fill={a} opacity="0.8"/>
      <circle cx="268" cy="16" r="4" fill={a} opacity="0.8"/>
      <text x="223" y="21" fill={a} fontSize="4" fontFamily="monospace">Sp C</text>
      <text x="246" y="12" fill={a} fontSize="4" fontFamily="monospace">Sp D</text>
      <text x="264" y="12" fill={a} fontSize="4" fontFamily="monospace">Sp E</text>
      <text x="242" y="121" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="4.5" fontFamily="monospace">especiación: divergencia de poblaciones aisladas</text>
    </svg>
  );
}

// ── Biología: Genética aplicada ───────────────────────────────────────────────
function BiologiaGeneticaAplicadaSVG({ tema }) {
  const a = tema.acento, grn = "#4ab890", gold = "#f5c842", lila = "#cc88ff", org = "#ff7755";
  const techs = [
    { label:"TRANSGÉNICOS\n(OGM)",    ej:"Maíz Bt\nSoya resistente",  imp:"Menos pesticidas\nDebate bioseguridad", color:grn,  x:4   },
    { label:"BIOTECH.\nMÉDICA",       ej:"Insulina, HGH\nVacunas ARNm", imp:"Trata enfermedades\nProducción masiva",  color:a,    x:84  },
    { label:"TERAPIA\nGÉNICA",        ej:"CRISPR-Cas9\nVectores virales",imp:"Corrige genes\nDebate ético",           color:gold, x:164 },
    { label:"DIAGNÓSTICO\nMOLECULAR", ej:"PCR\nSecuenciación ADN",    imp:"Detección rápida\nMedicina personalizada",color:lila, x:244 },
  ];
  return (
    <svg viewBox="0 0 320 128" width="100%" style={{ display:"block" }}>
      {techs.map(({ label, ej, imp, color, x }, i) => {
        const cx = x + 36;
        return (
          <g key={i}>
            <rect x={x} y="0" width="72" height="128" rx="5"
              fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            {/* Label */}
            {label.split('\n').map((line,li)=>(
              <text key={li} x={cx} y={10+li*8} textAnchor="middle" fill={color}
                fontSize="5.5" fontFamily="monospace" fontWeight="700">{line}</text>
            ))}
            {/* DNA icon */}
            {[0,6,12].map(dy=>(
              <g key={dy}>
                <line x1={cx-10} y1={28+dy} x2={cx+10} y2={28+dy} stroke={color} strokeWidth="1.5" opacity="0.5"/>
              </g>
            ))}
            <line x1={cx-12} y1={22} x2={cx-10} y2={46} stroke={color} strokeWidth="1.5" opacity="0.7"/>
            <line x1={cx+12} y1={22} x2={cx+10} y2={46} stroke={color} strokeWidth="1.5" opacity="0.7"/>
            {/* Example */}
            <text x={cx} y="56" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="4.5" fontFamily="monospace">Ejemplo:</text>
            {ej.split('\n').map((line,li)=>(
              <text key={li} x={cx} y={63+li*8} textAnchor="middle" fill={color}
                fontSize="5" fontFamily="monospace">{line}</text>
            ))}
            {/* Implication */}
            <line x1={x+6} y1="82" x2={x+66} y2="82" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7"/>
            <text x={cx} y="90" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4" fontFamily="monospace">Implicación:</text>
            {imp.split('\n').map((line,li)=>(
              <text key={li} x={cx} y={97+li*8} textAnchor="middle" fill="rgba(255,255,255,0.5)"
                fontSize="4.5" fontFamily="monospace">{line}</text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

// ── Biología: Biodiversidad en México ────────────────────────────────────────
function BiologiaBiodiversidadSVG({ tema }) {
  const a = tema.acento, grn = "#4ab890", gold = "#f5c842", org = "#ff7755", lila = "#cc88ff";
  const pW = 60, starts = [1, 65, 129, 193, 257];
  const biomes = [
    { name:"SELVA\nTROPICAL",  region:"Chiapas\nVeracruz",    key:"Mayor biodiversidad\ndel país",       color:grn,  icon:"🌿" },
    { name:"DESIERTO\nSECO",   region:"Sonora\nChihuahua",    key:"Endémicos únicos:\njaguar, ocelote", color:gold, icon:"🌵" },
    { name:"BOSQUE\nTEMPLADO", region:"Sierra Madre\nEje Neovolc.", key:"Pino-encino\naves migratorias", color:a,    icon:"🌲" },
    { name:"MANGLAR\nCOSTERO", region:"Costas Pacífico\ny Golfo",  key:"Vivero de peces\nbarreras naturales",color:org, icon:"🦀" },
    { name:"ARRECIFE\nCORAL",  region:"Caribe\nQuintana Roo",  key:"2° arrecife más\ngrande del mundo", color:lila, icon:"🐠" },
  ];
  return (
    <svg viewBox="0 0 320 128" width="100%" style={{ display:"block" }}>
      {biomes.map(({ name, region, key, color, icon }, pi) => {
        const px = starts[pi], cx = px + 30;
        return (
          <g key={pi}>
            <rect x={px} y="1" width={pW} height="126" rx="4"
              fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            {name.split('\n').map((line,li)=>(
              <text key={li} x={cx} y={9+li*7} textAnchor="middle" fill={color}
                fontSize="5.5" fontFamily="monospace" fontWeight="700">{line}</text>
            ))}
            {/* Icon area */}
            <rect x={px+4} y="24" width="52" height="40" rx="3" fill="rgba(0,0,0,0.2)"/>
            <text x={cx} y="50" textAnchor="middle" fontSize="20">{icon}</text>
            {/* Region */}
            <text x={cx} y="70" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">Región:</text>
            {region.split('\n').map((line,li)=>(
              <text key={li} x={cx} y={77+li*7} textAnchor="middle" fill="rgba(255,255,255,0.5)"
                fontSize="4.5" fontFamily="monospace">{line}</text>
            ))}
            {/* Key fact */}
            <line x1={px+4} y1="93" x2={px+56} y2="93" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7"/>
            {key.split('\n').map((line,li)=>(
              <text key={li} x={cx} y={100+li*7} textAnchor="middle" fill={color}
                fontSize="4.5" fontFamily="monospace">{line}</text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

// ── Biología: Adaptación y tipos de nutrición ─────────────────────────────────
function BiologiaAdaptacionSVG({ tema }) {
  const a = tema.acento, grn = "#4ab890", gold = "#f5c842", org = "#ff7755";
  return (
    <svg viewBox="0 0 320 130" width="100%" style={{ display:"block" }}>
      {/* LEFT: Nutrition types */}
      <rect x="1" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="78" y="11" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">TIPOS DE NUTRICIÓN</text>
      {/* Autótrofos */}
      <rect x="6" y="15" width="142" height="48" rx="3" fill={`${grn}15`} stroke={`${grn}45`} strokeWidth="1"/>
      <text x="78" y="24" textAnchor="middle" fill={grn} fontSize="6" fontFamily="monospace" fontWeight="700">AUTÓTROFOS</text>
      <text x="78" y="33" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">producen su propio alimento</text>
      <text x="20" y="43" fill={grn} fontSize="5" fontFamily="monospace">☀ Fotosintéticos:</text>
      <text x="20" y="51" fill="rgba(255,255,255,0.45)" fontSize="4.5" fontFamily="monospace">  plantas, algas, cianobacterias</text>
      <text x="20" y="59" fill={gold} fontSize="5" fontFamily="monospace">⚗ Quimiosintéticos:</text>
      {/* Heterótrofos */}
      <rect x="6" y="66" width="142" height="52" rx="3" fill={`${a}12`} stroke={`${a}40`} strokeWidth="1"/>
      <text x="78" y="75" textAnchor="middle" fill={a} fontSize="6" fontFamily="monospace" fontWeight="700">HETERÓTROFOS</text>
      <text x="78" y="83" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">consumen a otros organismos</text>
      <text x="10" y="92" fill={a} fontSize="4.5" fontFamily="monospace">🌿 Herbívoro: vaca, conejo, saltamontes</text>
      <text x="10" y="100" fill={org} fontSize="4.5" fontFamily="monospace">🦁 Carnívoro: león, serpiente, águila</text>
      <text x="10" y="108" fill={gold} fontSize="4.5" fontFamily="monospace">🍕 Omnívoro: humano, cerdo, oso</text>
      <text x="10" y="116" fill="rgba(255,200,100,0.6)" fontSize="4.5" fontFamily="monospace">🍄 Descomponedor: hongos, bacterias</text>
      {/* RIGHT: Adaptation types */}
      <rect x="165" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="242" y="11" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">TIPOS DE ADAPTACIÓN</text>
      {[
        { tipo:"ESTRUCTURAL",  color:grn,  icon:"🌵", ej:"Espinas cactus,\nplumas impermeables" },
        { tipo:"FISIOLÓGICA",  color:gold, icon:"🐪", ej:"Hibernación,\nalmacén grasa camello" },
        { tipo:"CONDUCTUAL",   color:a,    icon:"🦅", ej:"Migración,\ncamouflage activo" },
      ].map(({ tipo, color, icon, ej }, i) => (
        <g key={i}>
          <rect x="170" y={16+i*34} width="144" height="30" rx="3"
            fill={`${color}18`} stroke={`${color}45`} strokeWidth="1"/>
          <text x="178" y={29+i*34} fill={color} fontSize="6" fontFamily="monospace" fontWeight="700">{tipo}</text>
          <text x="206" y={24+i*34} fontSize="12">{icon}</text>
          {ej.split('\n').map((line,li)=>(
            <text key={li} x="178" y={33+i*34+li*8} fill="rgba(255,255,255,0.4)" fontSize="4.5" fontFamily="monospace">{line}</text>
          ))}
        </g>
      ))}
      <text x="242" y="125" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="4.5" fontFamily="monospace">adaptaciones surgen por selección natural</text>
    </svg>
  );
}

// ── Biología: Cadena trófica y pirámide energética ────────────────────────────
function BiologiaCadenaTroficaSVG({ tema }) {
  const a = tema.acento, grn = "#4ab890", gold = "#f5c842", org = "#ff7755", red = "#dd3333";
  const levels = [
    { label:"PRODUCTORES",       pct:"100%", y:80, h:20, w:240, x:40, color:grn },
    { label:"CONS. PRIMARIOS",   pct:"10%",  y:59, h:21, w:178, x:71, color:a   },
    { label:"CONS. SECUNDARIOS", pct:"1%",   y:39, h:20, w:118, x:101,color:gold},
    { label:"CONS. TERCIARIOS",  pct:"0.1%", y:20, h:19, w:60,  x:130,color:red },
  ];
  const chain = [
    { name:"Pasto",   color:grn }, { name:"Conejo", color:a    },
    { name:"Zorro",   color:gold}, { name:"Águila", color:red  },
  ];
  return (
    <svg viewBox="0 0 320 128" width="100%" style={{ display:"block" }}>
      <rect x="0" y="0" width="320" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="160" y="10" textAnchor="middle" fill={a}
        fontSize="6" fontFamily="monospace" fontWeight="700">PIRÁMIDE TRÓFICA — REGLA DEL 10%</text>
      {levels.map(({ label, pct, y, h, w, x, color }) => (
        <g key={label}>
          <rect x={x} y={y} width={w} height={h} rx="2"
            fill={`${color}30`} stroke={color} strokeWidth="1.5"/>
          <text x="160" y={y+h/2+2.5} textAnchor="middle" fill={color}
            fontSize="5.5" fontFamily="monospace" fontWeight="700">{label}</text>
          <text x={x+4} y={y+h/2+2.5} fill={color} fontSize="5.5" fontFamily="monospace">{pct}</text>
        </g>
      ))}
      {/* 90% loss annotation */}
      <text x="298" y="50" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="4.5" fontFamily="monospace">90%</text>
      <text x="298" y="57" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="4.5" fontFamily="monospace">perdido</text>
      <text x="298" y="64" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="4.5" fontFamily="monospace">como</text>
      <text x="298" y="71" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="4.5" fontFamily="monospace">calor</text>
      <line x1="293" y1="74" x2="284" y2="90" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8"/>
      {/* Food chain example */}
      {chain.map(({ name, color }, i) => {
        const cx = 35 + i * 68;
        return (
          <g key={i}>
            <rect x={cx-24} y={103} width="48" height="14" rx="3"
              fill={`${color}20`} stroke={`${color}55`} strokeWidth="1"/>
            <text x={cx} y={113} textAnchor="middle"
              fill={color} fontSize="5.5" fontFamily="monospace">{name}</text>
            {i < chain.length-1 && (
              <>
                <line x1={cx+24} y1={110} x2={cx+44} y2={110} stroke="rgba(255,255,255,0.35)" strokeWidth="1.2"/>
                <polygon points={`${cx+44},107 ${cx+44},113 ${cx+48},110`} fill="rgba(255,255,255,0.35)"/>
              </>
            )}
          </g>
        );
      })}
      <text x="160" y="124" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="4.5" fontFamily="monospace">cada flecha: "es alimento de" — la energía siempre fluye hacia arriba</text>
    </svg>
  );
}

// ── Química: Modelos atómicos ─────────────────────────────────────────────────
function QuimicaModelosAtomicosSVG({ tema }) {
  const a = tema.acento, gold = "#f5c842", grn = "#4ab890", org = "#ff7755", lila = "#cc88ff", blu = "#88aaff";
  const pW = 60, starts = [1, 65, 129, 193, 257];
  const models = [
    { name:"DALTON",     year:"1803", color:a    },
    { name:"THOMSON",    year:"1897", color:org  },
    { name:"RUTHERFORD", year:"1911", color:gold },
    { name:"BOHR",       year:"1913", color:grn  },
    { name:"ACTUAL",     year:"≥1926",color:lila },
  ];
  return (
    <svg viewBox="0 0 320 128" width="100%" style={{ display:"block" }}>
      {models.map(({ name, year, color }, pi) => {
        const px = starts[pi], cx = px + 30, cy = 55;
        return (
          <g key={pi}>
            <rect x={px} y="1" width={pW} height="126" rx="4"
              fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <text x={cx} y="11" textAnchor="middle" fill={color} fontSize="5.5" fontFamily="monospace" fontWeight="700">{name}</text>
            <text x={cx} y="18" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="4.5" fontFamily="monospace">{year}</text>
            <rect x={px+4} y="22" width="52" height="58" rx="3" fill="rgba(0,0,0,0.2)"/>
            {pi === 0 && (
              <circle cx={cx} cy={cy} r="16" fill={color} opacity="0.7"/>
            )}
            {pi === 1 && (
              <>
                <circle cx={cx} cy={cy} r="18" fill={org} opacity="0.25" stroke={org} strokeWidth="1"/>
                {[[0,0],[10,8],[-8,10],[12,-5],[-10,0],[5,-10],[-5,8],[10,-12]].map(([dx,dy],i)=>(
                  <circle key={i} cx={cx+dx} cy={cy+dy} r="2.5" fill={blu} opacity="0.9"/>
                ))}
              </>
            )}
            {pi === 2 && (
              <>
                <circle cx={cx} cy={cy} r="20" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8"/>
                <circle cx={cx} cy={cy} r="4" fill={gold} opacity="0.9"/>
                {[[20,0],[-14,14],[0,-20]].map(([dx,dy],i)=>(
                  <circle key={i} cx={cx+dx} cy={cy+dy} r="2.5" fill={blu} opacity="0.85"/>
                ))}
              </>
            )}
            {pi === 3 && (
              <>
                {[9,16,23].map((r,i)=>(
                  <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={grn} strokeWidth="0.8" opacity="0.5"/>
                ))}
                <circle cx={cx} cy={cy} r="3.5" fill={gold} opacity="0.9"/>
                <circle cx={cx+9}  cy={cy}    r="2.5" fill={blu} opacity="0.85"/>
                <circle cx={cx}    cy={cy-16} r="2.5" fill={blu} opacity="0.85"/>
                <circle cx={cx-23} cy={cy}    r="2.5" fill={blu} opacity="0.85"/>
              </>
            )}
            {pi === 4 && (
              <>
                {[[-12,-8],[-8,14],[14,10],[10,-14],[-16,2],[16,-4],[0,18],[-2,-18],[8,4],[-10,-2],[4,12],[-6,10],[-14,6],[12,-10]].map(([dx,dy],i)=>(
                  <circle key={i} cx={cx+dx} cy={cy+dy} r="1.5" fill={lila} opacity={0.35+i*0.04}/>
                ))}
                <circle cx={cx} cy={cy} r="3.5" fill={gold} opacity="0.9"/>
              </>
            )}
            {pi === 0 && <text x={cx} y="90" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">esfera sólida</text>}
            {pi === 1 && <text x={cx} y="90" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">pudín de pasas</text>}
            {pi === 2 && <text x={cx} y="90" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">núcleo central</text>}
            {pi === 3 && <text x={cx} y="90" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">órbitas fijas</text>}
            {pi === 4 && <text x={cx} y="90" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">nube electrónica</text>}
          </g>
        );
      })}
    </svg>
  );
}

// ── Química: Biomoléculas ─────────────────────────────────────────────────────
function QuimicaBiomoleculasSVG({ tema }) {
  const org = "#ff7755", gold = "#f5c842", grn = "#4ab890", lila = "#cc88ff", blu = "#88aaff";
  const pW = 77, starts = [1, 82, 163, 244];
  const bData = [
    { label:"CARBOHIDRATOS", sub:"energía rápida",      eg:"glucosa · almidón", color:org  },
    { label:"LÍPIDOS",       sub:"energía almacenada",  eg:"grasas · aceites",  color:gold },
    { label:"PROTEÍNAS",     sub:"estructura · enzimas",eg:"carne · huevo",     color:grn  },
    { label:"ÁC. NUCLEICOS", sub:"inf. genética",       eg:"ADN · ARN",         color:lila },
  ];
  return (
    <svg viewBox="0 0 320 128" width="100%" style={{ display:"block" }}>
      {bData.map(({ label, sub, eg, color }, pi) => {
        const px = starts[pi], cx = px + 38, cy = 52;
        return (
          <g key={pi}>
            <rect x={px} y="1" width={pW} height="126" rx="5"
              fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <text x={cx} y="12" textAnchor="middle" fill={color} fontSize="5.5" fontFamily="monospace" fontWeight="700">{label}</text>
            <rect x={px+4} y="16" width="69" height="66" rx="3" fill="rgba(0,0,0,0.2)"/>
            {pi === 0 && (
              // Carbohidratos: hexagon ring (glucose)
              <>
                <polygon points={`${cx+15},${cy} ${cx+7.5},${cy+13} ${cx-7.5},${cy+13} ${cx-15},${cy} ${cx-7.5},${cy-13} ${cx+7.5},${cy-13}`}
                  fill="none" stroke={color} strokeWidth="2" opacity="0.85"/>
                <text x={cx} y={cy-17} textAnchor="middle" fill={color} fontSize="5.5">O</text>
                {[[15,0],[7.5,13],[-7.5,13],[-15,0],[-7.5,-13],[7.5,-13]].map(([dx,dy],i)=>(
                  <text key={i} x={cx+dx} y={cy+dy+2} textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="4.5">C</text>
                ))}
                <text x={cx} y={cy+30} textAnchor="middle" fill={color} fontSize="5.5" fontFamily="monospace">C₆H₁₂O₆</text>
              </>
            )}
            {pi === 1 && (
              // Lípidos: glycerol + 3 fatty acid chains
              <>
                <line x1={cx-14} y1={cy-15} x2={cx-14} y2={cy+14} stroke={color} strokeWidth="2" opacity="0.8"/>
                {[-14,0,14].map((dy,i)=>(
                  <polyline key={i}
                    points={`${cx-14},${cy+dy-2} ${cx-7},${cy+dy+4} ${cx},${cy+dy-2} ${cx+7},${cy+dy+4} ${cx+14},${cy+dy-2} ${cx+21},${cy+dy+4} ${cx+28},${cy+dy-2}`}
                    fill="none" stroke={color} strokeWidth="1.5" opacity="0.75"/>
                ))}
              </>
            )}
            {pi === 2 && (
              // Proteínas: amino acid chain
              <>
                {[0,1,2,3,4].map(i => {
                  const bx = cx - 18 + i * 9;
                  return (
                    <g key={i}>
                      {i > 0 && <line x1={bx-7} y1={cy} x2={bx-2} y2={cy} stroke={color} strokeWidth="1.2" opacity="0.7"/>}
                      <circle cx={bx} cy={cy} r="5" fill={`${color}28`} stroke={color} strokeWidth="1.2" opacity="0.85"/>
                      <text x={bx} y={cy+2} textAnchor="middle" fill={color} fontSize="3.5" fontWeight="600">AA</text>
                    </g>
                  );
                })}
                <text x={cx} y={cy-14} textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="4.5" fontFamily="monospace">enlace peptídico</text>
                <text x={cx} y={cy+24} textAnchor="middle" fill={color} fontSize="4.5" fontFamily="monospace">20 aminoácidos</text>
              </>
            )}
            {pi === 3 && (
              // Ácidos nucleicos: DNA ladder
              <>
                {[-18,-9,0,9,18].map((dy,i) => {
                  const bpColors = [[blu,org],[gold,grn],[blu,gold],[org,grn],[blu,org]];
                  return (
                    <g key={i}>
                      <line x1={cx-11} y1={cy+dy} x2={cx} y2={cy+dy} stroke={bpColors[i][0]} strokeWidth="2" opacity="0.8"/>
                      <line x1={cx} y1={cy+dy} x2={cx+11} y2={cy+dy} stroke={bpColors[i][1]} strokeWidth="2" opacity="0.8"/>
                    </g>
                  );
                })}
                <line x1={cx-11} y1={cy-20} x2={cx-10} y2={cy+20} stroke={color} strokeWidth="1.8" opacity="0.8"/>
                <line x1={cx+11} y1={cy-20} x2={cx+10} y2={cy+20} stroke={color} strokeWidth="1.8" opacity="0.8"/>
                <text x={cx} y={cy+30} textAnchor="middle" fill={color} fontSize="4.5" fontFamily="monospace">A-T · G-C</text>
              </>
            )}
            <text x={cx} y="91" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5" fontFamily="monospace">{sub}</text>
            <text x={cx} y="103" textAnchor="middle" fill={color} fontSize="5.5" fontFamily="monospace" opacity="0.8">{eg}</text>
          </g>
        );
      })}
    </svg>
  );
}

// ── Química: Sustancias puras y mezclas ───────────────────────────────────────
function QuimicaMezclasSVG({ tema }) {
  const a = tema.acento, gold = "#f5c842", grn = "#4ab890";
  return (
    <svg viewBox="0 0 320 130" width="100%" style={{ display:"block" }}>
      {/* LEFT: Sustancias puras */}
      <rect x="1" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="78" y="11" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">SUSTANCIAS PURAS</text>
      {/* Elemento */}
      <rect x="5" y="16" width="144" height="50" rx="3" fill="rgba(0,0,0,0.2)"/>
      <text x="78" y="24" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">ELEMENTO (un tipo de átomo)</text>
      {[[16,33],[28,33],[40,33],[52,33],[64,33],[76,33],[88,33],[100,33],[112,33],[124,33],[136,33],[144,33],
        [22,43],[34,43],[46,43],[58,43],[70,43],[82,43],[94,43],[106,43],[118,43],[130,43]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="4" fill={a} opacity="0.75"/>
      ))}
      <text x="78" y="59" textAnchor="middle" fill={a} fontSize="5" fontFamily="monospace">Fe, O₂, Cu, N₂, Au</text>
      {/* Compuesto */}
      <rect x="5" y="70" width="144" height="50" rx="3" fill="rgba(0,0,0,0.2)"/>
      <text x="78" y="78" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">COMPUESTO (proporción fija)</text>
      {[[14,89],[40,89],[66,89],[92,89],[118,89],[144,89]].map(([x,y],i)=>(
        <g key={i}>
          <circle cx={x}   cy={y} r="4.5" fill={gold} opacity="0.8"/>
          <circle cx={x+11} cy={y} r="4.5" fill={grn}  opacity="0.8"/>
          <line x1={x+4.5} y1={y} x2={x+6.5} y2={y} stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
        </g>
      ))}
      {[[27,103],[53,103],[79,103],[105,103],[131,103]].map(([x,y],i)=>(
        <g key={i}>
          <circle cx={x}   cy={y} r="4.5" fill={gold} opacity="0.8"/>
          <circle cx={x+11} cy={y} r="4.5" fill={grn}  opacity="0.8"/>
          <line x1={x+4.5} y1={y} x2={x+6.5} y2={y} stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
        </g>
      ))}
      <text x="78" y="115" textAnchor="middle" fill={gold} fontSize="5" fontFamily="monospace">H₂O, CO₂, NaCl, glucosa</text>
      {/* RIGHT: Mezclas */}
      <rect x="165" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="242" y="11" textAnchor="middle" fill={gold} fontSize="6.5" fontFamily="monospace" fontWeight="700">MEZCLAS</text>
      {/* Homogénea */}
      <rect x="169" y="16" width="144" height="50" rx="3" fill="rgba(0,0,0,0.2)"/>
      <text x="242" y="24" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">HOMOGÉNEA (solución)</text>
      {[[178,33],[192,39],[206,31],[220,37],[234,33],[248,39],[262,33],[276,37],[290,31],[304,37],
        [184,47],[198,43],[212,49],[226,43],[240,47],[254,43],[268,49],[282,43],[296,47]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="3.5" fill={i%2===0 ? a : gold} opacity="0.75"/>
      ))}
      <text x="242" y="59" textAnchor="middle" fill={gold} fontSize="5" fontFamily="monospace">aire, sal+agua, vinagre</text>
      {/* Heterogénea */}
      <rect x="169" y="70" width="144" height="50" rx="3" fill="rgba(0,0,0,0.2)"/>
      <text x="242" y="78" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">HETEROGÉNEA (fases visibles)</text>
      <rect x="170" y="95" width="142" height="24" rx="0" fill="rgba(40,80,160,0.3)"/>
      <text x="242" y="110" textAnchor="middle" fill="rgba(100,150,255,0.5)" fontSize="5" fontFamily="monospace">agua (densa)</text>
      {[[178,84],[194,88],[210,82],[226,86],[242,82],[258,88],[274,84],[290,80],[306,86]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="3" fill={gold} opacity="0.6"/>
      ))}
      <text x="242" y="115" textAnchor="middle" fill={gold} fontSize="5" fontFamily="monospace">aceite+agua, granito, sangre</text>
    </svg>
  );
}

// ── Química: Métodos de separación ───────────────────────────────────────────
function QuimicaSeparacionSVG({ tema }) {
  const a = tema.acento, gold = "#f5c842", grn = "#4ab890", org = "#ff7755";
  return (
    <svg viewBox="0 0 320 128" width="100%" style={{ display:"block" }}>
      {/* Panel 1: Filtración */}
      <rect x="1" y="1" width="77" height="126" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="39" y="11" textAnchor="middle" fill={a} fontSize="6" fontFamily="monospace" fontWeight="700">FILTRACIÓN</text>
      <polygon points="14,22 64,22 52,55 26,55" fill="none" stroke={a} strokeWidth="1.5" opacity="0.8"/>
      <line x1="18" y1="29" x2="60" y2="29" stroke={a} strokeWidth="1" strokeDasharray="2,2" opacity="0.45"/>
      <ellipse cx="39" cy="52" rx="11" ry="3" fill={org} opacity="0.5"/>
      <line x1="39" y1="55" x2="39" y2="72" stroke={a} strokeWidth="2" opacity="0.7"/>
      <ellipse cx="39" cy="74" rx="3" ry="4" fill={a} opacity="0.6"/>
      <polygon points="26,74 52,74 55,90 23,90" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
      <text x="39" y="102" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">sólido de líquido</text>
      <text x="39" y="110" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">tamaño partícula</text>
      <text x="39" y="120" textAnchor="middle" fill={a} fontSize="5" fontFamily="monospace">café · agua+arena</text>
      {/* Panel 2: Destilación */}
      <rect x="82" y="1" width="77" height="126" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="120" y="11" textAnchor="middle" fill={gold} fontSize="6" fontFamily="monospace" fontWeight="700">DESTILACIÓN</text>
      <ellipse cx="100" cy="65" rx="14" ry="11" fill={`${gold}20`} stroke={gold} strokeWidth="1.5" opacity="0.8"/>
      <line x1="100" y1="54" x2="100" y2="42" stroke={gold} strokeWidth="1.5"/>
      <line x1="100" y1="42" x2="118" y2="35" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="2,2"/>
      <line x1="118" y1="35" x2="138" y2="52" stroke="rgba(200,200,200,0.5)" strokeWidth="2"/>
      <line x1="138" y1="52" x2="138" y2="70" stroke={a} strokeWidth="1.5"/>
      <ellipse cx="138" cy="72" rx="3" ry="4" fill={a} opacity="0.7"/>
      <text x="95" y="84" fill={org} fontSize="10">🔥</text>
      <text x="120" y="102" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">punto de ebullición</text>
      <text x="120" y="110" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">líquidos miscibles</text>
      <text x="120" y="120" textAnchor="middle" fill={gold} fontSize="5" fontFamily="monospace">agua · alcohol</text>
      {/* Panel 3: Cromatografía */}
      <rect x="163" y="1" width="77" height="126" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="201" y="11" textAnchor="middle" fill={grn} fontSize="6" fontFamily="monospace" fontWeight="700">CROMATOGRAFÍA</text>
      <rect x="187" y="20" width="28" height="62" rx="2" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
      <rect x="188" y="23" width="26" height="8" rx="1" fill={org} opacity="0.65"/>
      <rect x="188" y="33" width="26" height="8" rx="1" fill="#aa44ff" opacity="0.65"/>
      <rect x="188" y="43" width="26" height="8" rx="1" fill={gold} opacity="0.65"/>
      <rect x="188" y="53" width="26" height="8" rx="1" fill={grn} opacity="0.65"/>
      <line x1="183" y1="78" x2="219" y2="78" stroke="rgba(100,150,255,0.45)" strokeWidth="1" strokeDasharray="2,2"/>
      <text x="201" y="75" textAnchor="middle" fill="rgba(100,150,255,0.4)" fontSize="4.5" fontFamily="monospace">solvente</text>
      <text x="201" y="102" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">afinidad química</text>
      <text x="201" y="110" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">componentes disueltos</text>
      <text x="201" y="120" textAnchor="middle" fill={grn} fontSize="5" fontFamily="monospace">pigmentos · ADN</text>
      {/* Panel 4: Centrifugación */}
      <rect x="244" y="1" width="76" height="126" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="282" y="11" textAnchor="middle" fill={org} fontSize="5.5" fontFamily="monospace" fontWeight="700">CENTRIFUGACIÓN</text>
      <polygon points="268,26 296,26 298,74 266,74" fill="none" stroke={org} strokeWidth="1.5" opacity="0.8"/>
      <rect x="267" y="60" width="30" height="13" fill={gold} opacity="0.5"/>
      <rect x="267" y="46" width="30" height="14" fill="rgba(100,150,255,0.4)"/>
      <rect x="267" y="28" width="30" height="18" fill="rgba(255,255,255,0.12)"/>
      <text x="300" y="68" fill={gold} fontSize="4" fontFamily="monospace">denso</text>
      <text x="300" y="54" fill="rgba(150,200,255,0.6)" fontSize="4" fontFamily="monospace">medio</text>
      <text x="300" y="38" fill="rgba(255,255,255,0.3)" fontSize="4" fontFamily="monospace">ligero</text>
      <text x="282" y="102" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">densidad / tamaño</text>
      <text x="282" y="110" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">mezclas complejas</text>
      <text x="282" y="120" textAnchor="middle" fill={org} fontSize="5" fontFamily="monospace">sangre · leche</text>
    </svg>
  );
}

// ── Química: Reacciones químicas ──────────────────────────────────────────────
function QuimicaReaccionesSVG({ tema }) {
  const a = tema.acento, gold = "#f5c842", grn = "#4ab890", org = "#ff7755", lila = "#cc88ff";
  const types = [
    { label:"SÍNTESIS",        eq:"A + B → AB",     color:a,    x:6   },
    { label:"DESCOMPOSICIÓN",  eq:"AB → A + B",     color:grn,  x:86  },
    { label:"SUSTITUCIÓN",     eq:"AB + C → AC + B",color:gold, x:166 },
    { label:"DOBLE SUST.",     eq:"AB+CD→AD+CB",    color:lila, x:246 },
  ];
  return (
    <svg viewBox="0 0 320 128" width="100%" style={{ display:"block" }}>
      {/* Top: reaction concept */}
      <rect x="0" y="0" width="320" height="52" rx="5"
        fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="160" y="10" textAnchor="middle" fill={a} fontSize="6" fontFamily="monospace" fontWeight="700">CAMBIO QUÍMICO: se forman sustancias nuevas</text>
      {/* Reactivos */}
      <rect x="8" y="16" width="80" height="28" rx="4" fill={`${org}20`} stroke={org} strokeWidth="1.5"/>
      <text x="48" y="27" textAnchor="middle" fill={org} fontSize="7.5" fontFamily="monospace" fontWeight="700">REACTIVOS</text>
      <text x="48" y="37" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="5" fontFamily="monospace">A + B</text>
      {/* Arrow */}
      <line x1="92" y1="30" x2="126" y2="30" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
      <polygon points="126,26 126,34 132,30" fill="rgba(255,255,255,0.5)"/>
      <text x="110" y="26" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">Ea</text>
      <text x="110" y="44" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="4" fontFamily="monospace">energía activación</text>
      {/* Productos */}
      <rect x="136" y="16" width="80" height="28" rx="4" fill={`${grn}20`} stroke={grn} strokeWidth="1.5"/>
      <text x="176" y="27" textAnchor="middle" fill={grn} fontSize="7.5" fontFamily="monospace" fontWeight="700">PRODUCTOS</text>
      <text x="176" y="37" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="5" fontFamily="monospace">C + D</text>
      {/* Ley Lavoisier */}
      <rect x="222" y="14" width="96" height="30" rx="4" fill={`${gold}15`} stroke={`${gold}50`} strokeWidth="1"/>
      <text x="270" y="25" textAnchor="middle" fill={gold} fontSize="5.5" fontFamily="monospace" fontWeight="700">Ley de Lavoisier</text>
      <text x="270" y="34" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="4.5" fontFamily="monospace">masa reactivos = masa productos</text>
      <text x="270" y="41" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="4" fontFamily="monospace">la materia se conserva</text>
      {/* Bottom: 4 reaction types */}
      {types.map(({ label, eq, color, x }, i) => (
        <g key={i}>
          <rect x={x} y="56" width="64" height="68" rx="5"
            fill={`${color}15`} stroke={color} strokeWidth="1.5"/>
          <text x={x+32} y="68" textAnchor="middle" fill={color} fontSize="5.5" fontFamily="monospace" fontWeight="700">{label}</text>
          <text x={x+32} y="80" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="5.5" fontFamily="monospace">{eq}</text>
          {i === 0 && (
            <>
              <circle cx={x+14} cy={100} r="6" fill={a} opacity="0.7"/>
              <circle cx={x+26} cy={100} r="6" fill={grn} opacity="0.7"/>
              <line x1={x+34} y1={100} x2={x+42} y2={100} stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
              <polygon points={`${x+42},97 ${x+42},103 ${x+46},100`} fill="rgba(255,255,255,0.5)"/>
              <ellipse cx={x+54} cy={100} rx="9" ry="6" fill="none" stroke={a} strokeWidth="1.5"/>
              <line x1={x+47} y1={100} x2={x+61} y2={100} stroke={grn} strokeWidth="1.2"/>
            </>
          )}
          {i === 1 && (
            <>
              <ellipse cx={x+14} cy={100} rx="9" ry="6" fill="none" stroke={a} strokeWidth="1.5"/>
              <line x1={x+7} y1={100} x2={x+21} y2={100} stroke={grn} strokeWidth="1.2"/>
              <line x1={x+26} y1={100} x2={x+34} y2={100} stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
              <polygon points={`${x+34},97 ${x+34},103 ${x+38},100`} fill="rgba(255,255,255,0.5)"/>
              <circle cx={x+46} cy={100} r="6" fill={a} opacity="0.7"/>
              <circle cx={x+58} cy={100} r="6" fill={grn} opacity="0.7"/>
            </>
          )}
          <text x={x+32} y="118" textAnchor="middle" fill={color} fontSize="4.5" fontFamily="monospace">
            {["H₂+O₂→H₂O","H₂O→H₂+O₂","Fe+S→FeS","NaCl+AgNO₃→…"][i]}
          </text>
        </g>
      ))}
    </svg>
  );
}

// ── Química: Energía en reacciones ────────────────────────────────────────────
function QuimicaEnergiaReaccionesSVG({ tema }) {
  const a = tema.acento, gold = "#f5c842", grn = "#4ab890", org = "#ff7755";
  return (
    <svg viewBox="0 0 320 130" width="100%" style={{ display:"block" }}>
      {/* LEFT: Exotérmica */}
      <rect x="1" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="78" y="11" textAnchor="middle" fill={org} fontSize="6.5" fontFamily="monospace" fontWeight="700">EXOTÉRMICA</text>
      <text x="78" y="19" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5" fontFamily="monospace">libera energía al entorno</text>
      <line x1="22" y1="22" x2="22" y2="88" stroke="rgba(255,255,255,0.35)" strokeWidth="1"/>
      <polygon points="18,22 26,22 22,17" fill="rgba(255,255,255,0.35)"/>
      <text x="16" y="55" textAnchor="end" fill="rgba(255,255,255,0.4)" fontSize="5" fontFamily="monospace">Ep</text>
      <line x1="22" y1="88" x2="145" y2="88" stroke="rgba(255,255,255,0.35)" strokeWidth="1"/>
      <polygon points="145,84 145,92 150,88" fill="rgba(255,255,255,0.35)"/>
      <text x="148" y="96" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">rxn</text>
      <path d="M 30,58 C 45,58 55,26 65,26 C 75,26 85,78 100,78 L 138,78"
        fill="none" stroke={org} strokeWidth="2.5"/>
      <path d="M 30,88 L 30,58 C 45,58 55,26 65,26 C 75,26 85,78 100,78 L 138,78 L 138,88 Z"
        fill={`${org}12`}/>
      <text x="30" y="56" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">R</text>
      <text x="102" y="76" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">P</text>
      <text x="65" y="23" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="4.5" fontFamily="monospace">Ea</text>
      <line x1="118" y1="58" x2="118" y2="78" stroke={gold} strokeWidth="1.5"/>
      <polygon points="114,74 122,74 118,79" fill={gold}/>
      <text x="126" y="67" fill={gold} fontSize="5" fontFamily="monospace">–ΔH</text>
      <text x="78" y="101" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5" fontFamily="monospace">combustión, respiración</text>
      <text x="78" y="110" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5" fontFamily="monospace">oxidación, explosión</text>
      <text x="78" y="121" textAnchor="middle" fill={org} fontSize="5.5" fontFamily="monospace">genera calor</text>
      {/* RIGHT: Endotérmica */}
      <rect x="165" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="242" y="11" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">ENDOTÉRMICA</text>
      <text x="242" y="19" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5" fontFamily="monospace">absorbe energía del entorno</text>
      <line x1="187" y1="22" x2="187" y2="88" stroke="rgba(255,255,255,0.35)" strokeWidth="1"/>
      <polygon points="183,22 191,22 187,17" fill="rgba(255,255,255,0.35)"/>
      <line x1="187" y1="88" x2="310" y2="88" stroke="rgba(255,255,255,0.35)" strokeWidth="1"/>
      <polygon points="310,84 310,92 315,88" fill="rgba(255,255,255,0.35)"/>
      <text x="313" y="96" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">rxn</text>
      <path d="M 195,78 C 210,78 220,26 230,26 C 240,26 250,58 265,58 L 303,58"
        fill="none" stroke={a} strokeWidth="2.5"/>
      <path d="M 195,88 L 195,78 C 210,78 220,26 230,26 C 240,26 250,58 265,58 L 303,58 L 303,88 Z"
        fill={`${a}12`}/>
      <text x="195" y="76" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">R</text>
      <text x="267" y="56" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">P</text>
      <text x="230" y="23" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="4.5" fontFamily="monospace">Ea</text>
      <line x1="284" y1="78" x2="284" y2="58" stroke={gold} strokeWidth="1.5"/>
      <polygon points="280,62 288,62 284,57" fill={gold}/>
      <text x="292" y="67" fill={gold} fontSize="5" fontFamily="monospace">+ΔH</text>
      <text x="242" y="101" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5" fontFamily="monospace">fotosíntesis, fusión del hielo</text>
      <text x="242" y="110" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5" fontFamily="monospace">vaporización, electrólisis</text>
      <text x="242" y="121" textAnchor="middle" fill={a} fontSize="5.5" fontFamily="monospace">absorbe calor</text>
    </svg>
  );
}

// ── Química: Impacto en salud y ambiente ──────────────────────────────────────
function QuimicaImpactoSVG({ tema }) {
  const a = tema.acento, gold = "#f5c842", grn = "#4ab890", org = "#ff7755", red = "#dd3333";
  const benefits = [
    { label:"Medicamentos",     desc:"tratan enfermedades",         color:grn  },
    { label:"Fertilizantes",    desc:"mayor producción agrícola",   color:grn  },
    { label:"Plásticos",        desc:"materiales versátiles",       color:grn  },
    { label:"Vacunas",          desc:"previenen infecciones",       color:grn  },
  ];
  const risks = [
    { label:"Pesticidas",       desc:"contaminan suelo y agua",     color:org  },
    { label:"Combustibles",     desc:"CO₂ y lluvia ácida",          color:org  },
    { label:"CFCs",             desc:"destruyen capa de ozono",     color:red  },
    { label:"Metales pesados",  desc:"bioacumulación tóxica",       color:red  },
  ];
  return (
    <svg viewBox="0 0 320 128" width="100%" style={{ display:"block" }}>
      {/* Center title bar */}
      <rect x="0" y="0" width="320" height="128" rx="5" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="160" y="10" textAnchor="middle" fill={a} fontSize="6" fontFamily="monospace" fontWeight="700">PRODUCTOS Y PROCESOS QUÍMICOS: DOBLE IMPACTO</text>
      {/* Left: Beneficios */}
      <rect x="4" y="14" width="150" height="110" rx="4" fill={`${grn}10`} stroke={`${grn}40`} strokeWidth="1"/>
      <text x="79" y="24" textAnchor="middle" fill={grn} fontSize="6.5" fontFamily="monospace" fontWeight="700">BENEFICIOS</text>
      {benefits.map(({ label, desc, color }, i) => (
        <g key={i}>
          <rect x="8" y={30+i*22} width="142" height="18" rx="3"
            fill={`${color}18`} stroke={`${color}45`} strokeWidth="1"/>
          <text x="12" y={30+i*22+8} fill={color} fontSize="5.5" fontFamily="monospace">✓</text>
          <text x="22" y={30+i*22+8} fill={color} fontSize="5.5" fontFamily="monospace" fontWeight="600">{label}</text>
          <text x="22" y={30+i*22+16} fill="rgba(255,255,255,0.4)" fontSize="4.5" fontFamily="monospace">{desc}</text>
        </g>
      ))}
      {/* Right: Riesgos */}
      <rect x="166" y="14" width="150" height="110" rx="4" fill={`${org}10`} stroke={`${org}40`} strokeWidth="1"/>
      <text x="241" y="24" textAnchor="middle" fill={org} fontSize="6.5" fontFamily="monospace" fontWeight="700">RIESGOS</text>
      {risks.map(({ label, desc, color }, i) => (
        <g key={i}>
          <rect x="170" y={30+i*22} width="142" height="18" rx="3"
            fill={`${color}18`} stroke={`${color}45`} strokeWidth="1"/>
          <text x="174" y={30+i*22+8} fill={color} fontSize="5.5" fontFamily="monospace">!</text>
          <text x="184" y={30+i*22+8} fill={color} fontSize="5.5" fontFamily="monospace" fontWeight="600">{label}</text>
          <text x="184" y={30+i*22+16} fill="rgba(255,255,255,0.4)" fontSize="4.5" fontFamily="monospace">{desc}</text>
        </g>
      ))}
      {/* Bottom note */}
      <text x="160" y="120" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="4.5" fontFamily="monospace">
        Paracelso: "la dosis hace el veneno" — el contexto y la cantidad determinan el riesgo
      </text>
    </svg>
  );
}

// ── Física: Estados de la materia ─────────────────────────────────────────────
function FisicaEstadosMateriaSVG({ tema }) {
  const a = tema.acento, grn = "#4ab890", gold = "#f5c842", org = "#ff7755", blu = "#88aaff";
  const pW = 77, starts = [1, 82, 163, 244];
  const sData = [
    { label:"SÓLIDO",  sub1:"forma y volumen", sub2:"fijos",          eg:"hielo · metal",   color:a,
      mols:[[10,8],[28,8],[46,8],[10,26],[28,26],[46,26],[10,44],[28,44],[46,44]], r:6 },
    { label:"LÍQUIDO", sub1:"volumen fijo,",   sub2:"forma variable", eg:"agua · aceite",   color:grn,
      mols:[[6,15],[24,8],[44,18],[60,10],[12,34],[32,28],[52,36],[10,54],[40,50]], r:5.5 },
    { label:"GAS",     sub1:"forma y volumen", sub2:"variables",      eg:"aire · vapor",    color:gold,
      mols:[[8,6],[52,16],[20,50],[58,10],[32,36],[10,34],[60,56]], r:5 },
    { label:"PLASMA",  sub1:"gas ionizado,",   sub2:"T muy elevada",  eg:"sol · relámpago", color:org },
  ];
  return (
    <svg viewBox="0 0 320 128" width="100%" style={{ display:"block" }}>
      {sData.map(({ label, sub1, sub2, eg, color, mols, r }, pi) => {
        const px = starts[pi];
        return (
          <g key={pi}>
            <rect x={px} y="1" width={pW} height="126" rx="5"
              fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <text x={px+38} y="12" textAnchor="middle" fill={color}
              fontSize="6.5" fontFamily="monospace" fontWeight="700">{label}</text>
            <rect x={px+4} y="16" width="69" height="68" rx="3" fill="rgba(0,0,0,0.2)"/>
            {pi === 3 ? (
              <>
                {[[12,24],[40,16],[26,42],[58,34],[8,54],[36,58],[60,18]].map(([mx,my],i)=>(
                  <g key={i}>
                    <circle cx={px+4+mx} cy={16+my} r="5.5" fill={org} opacity="0.7"/>
                    <text x={px+4+mx} y={16+my+2.5} textAnchor="middle" fill="white" fontSize="6.5" fontWeight="700">+</text>
                  </g>
                ))}
                {[[28,28],[52,50],[14,40]].map(([mx,my],i)=>(
                  <circle key={i+10} cx={px+4+mx} cy={16+my} r="3" fill={blu} opacity="0.7"/>
                ))}
              </>
            ) : (mols||[]).map(([mx,my],i)=>(
              <circle key={i} cx={px+4+mx} cy={16+my} r={r}
                fill={color} opacity="0.78" stroke="rgba(0,0,0,0.2)" strokeWidth="0.5"/>
            ))}
            <text x={px+38} y="95" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5" fontFamily="monospace">{sub1}</text>
            <text x={px+38} y="103" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5" fontFamily="monospace">{sub2}</text>
            <text x={px+38} y="116" textAnchor="middle" fill={color} fontSize="5.5" fontFamily="monospace" opacity="0.8">{eg}</text>
          </g>
        );
      })}
    </svg>
  );
}

// ── Física: Fuerzas — equilibrio, fricción, flotación ─────────────────────────
function FisicaFuerzasSVG({ tema }) {
  const a = tema.acento, grn = "#4ab890", gold = "#f5c842", red = "#ff7755";
  const arrowV = (x, y1, y2, color, w=1.5) => {
    const dn = y2 > y1;
    return (
      <g>
        <line x1={x} y1={y1} x2={x} y2={dn ? y2-5 : y2+5} stroke={color} strokeWidth={w}/>
        {dn
          ? <polygon points={`${x-4},${y2-5} ${x+4},${y2-5} ${x},${y2}`} fill={color}/>
          : <polygon points={`${x-4},${y2+5} ${x+4},${y2+5} ${x},${y2}`} fill={color}/>}
      </g>
    );
  };
  const arrowH = (y, x1, x2, color, w=1.5) => {
    const rt = x2 > x1;
    return (
      <g>
        <line x1={x1} y1={y} x2={rt ? x2-5 : x2+5} y2={y} stroke={color} strokeWidth={w}/>
        {rt
          ? <polygon points={`${x2-5},${y-4} ${x2-5},${y+4} ${x2},${y}`} fill={color}/>
          : <polygon points={`${x2+5},${y-4} ${x2+5},${y+4} ${x2},${y}`} fill={color}/>}
      </g>
    );
  };
  return (
    <svg viewBox="0 0 320 130" width="100%" style={{ display:"block" }}>
      {/* LEFT: Equilibrio y fricción */}
      <rect x="1" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="78" y="11" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">EQUILIBRIO · FRICCIÓN</text>
      <line x1="18" y1="86" x2="142" y2="86" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
      {[22,32,42,52,62,72,82,92,102,112,122,132].map(x=>(
        <line key={x} x1={x} y1="86" x2={x-5} y2="93" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
      ))}
      <rect x="56" y="56" width="44" height="30" rx="3" fill={`${a}28`} stroke={a} strokeWidth="1.5"/>
      <text x="78" y="73" textAnchor="middle" fill={a} fontSize="8" fontWeight="600">m</text>
      {arrowV(78, 87, 112, gold, 2)}
      <text x="84" y="105" fill={gold} fontSize="6" fontFamily="monospace" fontWeight="600">W=mg</text>
      {arrowV(78, 55, 30, grn, 2)}
      <text x="84" y="43" fill={grn} fontSize="6" fontFamily="monospace" fontWeight="600">N</text>
      {arrowH(71, 55, 28, red, 2)}
      <text x="32" y="67" fill={red} fontSize="6" fontFamily="monospace" fontWeight="600">f</text>
      <line x1="101" y1="71" x2="127" y2="71" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="3,2"/>
      <polygon points="122,67 122,75 127,71" fill="rgba(255,255,255,0.35)"/>
      <text x="129" y="68" fill="rgba(255,255,255,0.3)" fontSize="5.5" fontFamily="monospace">v →</text>
      <text x="78" y="120" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">ΣF = 0 → equilibrio</text>
      <text x="78" y="128" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="5" fontFamily="monospace">f ≤ μ · N</text>
      {/* RIGHT: Flotación */}
      <rect x="165" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="242" y="11" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">FLOTACIÓN · ARQUÍMEDES</text>
      <rect x="192" y="26" width="100" height="82" rx="3" fill="none" stroke="rgba(100,150,220,0.4)" strokeWidth="1.5"/>
      <rect x="193" y="58" width="98" height="49" rx="2" fill="rgba(40,80,160,0.3)"/>
      <line x1="192" y1="58" x2="292" y2="58" stroke="rgba(100,150,255,0.4)" strokeWidth="1"/>
      <text x="200" y="95" fill="rgba(100,150,255,0.35)" fontSize="5" fontFamily="monospace">fluido</text>
      <rect x="218" y="43" width="48" height="30" rx="3" fill={`${a}35`} stroke={a} strokeWidth="1.5"/>
      <text x="242" y="61" textAnchor="middle" fill={a} fontSize="8" fontWeight="600">m</text>
      {arrowV(242, 42, 16, grn, 2)}
      <text x="249" y="30" fill={grn} fontSize="7" fontFamily="monospace" fontWeight="700">E ↑</text>
      {arrowV(242, 74, 98, gold, 2)}
      <text x="249" y="92" fill={gold} fontSize="7" fontFamily="monospace" fontWeight="700">W ↓</text>
      <text x="242" y="116" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">E = peso fluido desplazado</text>
      <text x="242" y="125" textAnchor="middle" fill={grn} fontSize="5.5" fontFamily="monospace" fontWeight="600">E = W → flota en equilibrio</text>
    </svg>
  );
}

// ── Física: Velocidad y aceleración ───────────────────────────────────────────
function FisicaVelAcelSVG({ tema }) {
  const a = tema.acento, grn = "#4ab890";
  return (
    <svg viewBox="0 0 320 130" width="100%" style={{ display:"block" }}>
      {/* LEFT: MRU */}
      <rect x="1" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="78" y="11" textAnchor="middle" fill={grn} fontSize="7" fontFamily="monospace" fontWeight="700">M.R.U.</text>
      <text x="78" y="19" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5.5" fontFamily="monospace">Movimiento Rectilíneo Uniforme</text>
      <line x1="28" y1="24" x2="28" y2="88" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
      <polygon points="24,24 32,24 28,19" fill="rgba(255,255,255,0.4)"/>
      <text x="21" y="22" textAnchor="end" fill="rgba(255,255,255,0.5)" fontSize="7.5" fontFamily="monospace">v</text>
      <line x1="28" y1="88" x2="142" y2="88" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
      <polygon points="142,84 142,92 147,88" fill="rgba(255,255,255,0.4)"/>
      <text x="149" y="91" fill="rgba(255,255,255,0.5)" fontSize="7.5" fontFamily="monospace">t</text>
      <line x1="28" y1="58" x2="135" y2="58" stroke={grn} strokeWidth="2.5"/>
      <line x1="25" y1="58" x2="31" y2="58" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8"/>
      <text x="22" y="61" textAnchor="end" fill="rgba(255,255,255,0.3)" fontSize="5" fontFamily="monospace">v₀</text>
      <text x="78" y="100" textAnchor="middle" fill={grn} fontSize="9" fontFamily="monospace" fontWeight="700">v = d / t</text>
      <text x="78" y="111" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">a = 0 · velocidad constante</text>
      <text x="78" y="120" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="5" fontFamily="monospace">gráfica v-t: línea horizontal</text>
      {/* RIGHT: MRUA */}
      <rect x="165" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="242" y="11" textAnchor="middle" fill={a} fontSize="7" fontFamily="monospace" fontWeight="700">M.R.U.A.</text>
      <text x="242" y="19" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5.5" fontFamily="monospace">Rect. Unif. Acelerado</text>
      <line x1="192" y1="24" x2="192" y2="88" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
      <polygon points="188,24 196,24 192,19" fill="rgba(255,255,255,0.4)"/>
      <text x="185" y="22" textAnchor="end" fill="rgba(255,255,255,0.5)" fontSize="7.5" fontFamily="monospace">v</text>
      <line x1="192" y1="88" x2="306" y2="88" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
      <polygon points="306,84 306,92 311,88" fill="rgba(255,255,255,0.4)"/>
      <text x="313" y="91" fill="rgba(255,255,255,0.5)" fontSize="7.5" fontFamily="monospace">t</text>
      <line x1="192" y1="85" x2="300" y2="30" stroke={a} strokeWidth="2.5"/>
      <line x1="189" y1="85" x2="195" y2="85" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8"/>
      <text x="186" y="88" textAnchor="end" fill="rgba(255,255,255,0.3)" fontSize="5" fontFamily="monospace">v₀</text>
      <text x="242" y="100" textAnchor="middle" fill={a} fontSize="8" fontFamily="monospace" fontWeight="700">v = v₀ + a·t</text>
      <text x="242" y="111" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">a = Δv / t = constante</text>
      <text x="242" y="120" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="5" fontFamily="monospace">gráfica v-t: línea diagonal</text>
    </svg>
  );
}

// ── Física: Sistema solar y gravitación ───────────────────────────────────────
function FisicaSistemaSolarSVG({ tema }) {
  const a = tema.acento, gold = "#f5c842", org = "#ff7755";
  const SX = 18, SY = 65;
  const planets = [
    { name:"Mer.",    px:50,  size:2.5, color:"#aaaaaa" },
    { name:"Venus",   px:66,  size:3.5, color:"#f0c040" },
    { name:"Tierra",  px:84,  size:4,   color:a         },
    { name:"Marte",   px:102, size:3,   color:org       },
    { name:"Júpiter", px:158, size:7,   color:gold      },
    { name:"Saturno", px:193, size:5.5, color:"#d4c080", rings:true },
    { name:"Urano",   px:226, size:4,   color:"#88ccee" },
    { name:"Neptuno", px:255, size:3.5, color:"#4488cc" },
  ];
  return (
    <svg viewBox="0 0 320 128" width="100%" style={{ display:"block" }}>
      <rect x="0" y="0" width="320" height="128" rx="5"
        fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="160" y="10" textAnchor="middle" fill={a}
        fontSize="6" fontFamily="monospace" fontWeight="700">SISTEMA SOLAR (esquemático)</text>
      {/* Orbit ellipses */}
      {planets.map(({ px }, i) => (
        <ellipse key={i} cx={SX} cy={SY} rx={px-SX} ry={(px-SX)*0.22}
          fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7"
          strokeDasharray={i >= 4 ? "3,2" : "none"}/>
      ))}
      {/* Asteroid belt band */}
      <ellipse cx={SX} cy={SY} rx={118} ry={26}
        fill="none" stroke="rgba(180,160,100,0.12)" strokeWidth="5"/>
      <text x={SX+120} y={SY-22} fill="rgba(180,160,100,0.4)" fontSize="4" fontFamily="monospace">cinturón</text>
      {/* Sun */}
      <circle cx={SX} cy={SY} r="11" fill="#FFD700" opacity="0.9"/>
      <circle cx={SX} cy={SY} r="8"  fill="#FFA500"/>
      <text x={SX} y={SY+3} textAnchor="middle" fill="white" fontSize="5.5" fontWeight="700">Sol</text>
      {/* Planets */}
      {planets.map(({ name, px, size, color, rings }, i) => (
        <g key={i}>
          <circle cx={px} cy={SY} r={size} fill={color} opacity="0.88"/>
          {rings && (
            <ellipse cx={px} cy={SY} rx={size+6} ry={size*0.38}
              fill="none" stroke={`${color}99`} strokeWidth="1.5"/>
          )}
          <text x={px} y={SY - size - 3} textAnchor="middle"
            fill="rgba(255,255,255,0.55)" fontSize="4.5" fontFamily="monospace">{name}</text>
        </g>
      ))}
      {/* Legend */}
      <text x="160" y="97" textAnchor="middle"
        fill="rgba(255,255,255,0.35)" fontSize="5" fontFamily="monospace">
        Terrestres (rocosos): Mercurio, Venus, Tierra, Marte
      </text>
      <text x="160" y="107" textAnchor="middle"
        fill="rgba(255,255,255,0.35)" fontSize="5" fontFamily="monospace">
        Jovianos (gaseosos/helados): Júpiter, Saturno, Urano, Neptuno
      </text>
      <text x="160" y="118" textAnchor="middle"
        fill="rgba(255,255,255,0.2)" fontSize="4.5" fontFamily="monospace">
        Plutón = planeta enano desde 2006 (UAI)
      </text>
    </svg>
  );
}

// ── Física: Energía mecánica — péndulo ────────────────────────────────────────
function FisicaEnergiaMecanicaSVG({ tema }) {
  const a = tema.acento, grn = "#4ab890";
  const PIV = { x: 160, y: 20 };
  const L = 50;
  const toXY = (angleDeg) => {
    const r = (angleDeg * Math.PI) / 180;
    return { x: PIV.x + L * Math.sin(r), y: PIV.y + L * Math.cos(r) };
  };
  const posA = toXY(-38);
  const posB = toXY(0);
  const posC = toXY(38);
  const BH = 26, BY = 102;
  return (
    <svg viewBox="0 0 320 128" width="100%" style={{ display:"block" }}>
      <rect x="0" y="0" width="320" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="160" y="11" textAnchor="middle" fill={a}
        fontSize="6.5" fontFamily="monospace" fontWeight="700">PÉNDULO: CONVERSIÓN Ep ↔ Ec</text>
      {/* Ceiling */}
      <line x1="100" y1="20" x2="220" y2="20" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
      {[104,112,120,128,136,144,152,160,168,176,184,192,200,208,216].map(x=>(
        <line key={x} x1={x} y1="20" x2={x-4} y2="26" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
      ))}
      <circle cx={PIV.x} cy={PIV.y} r="3" fill="rgba(255,255,255,0.5)"/>
      {/* Pendulum A (left, dashed) */}
      <line x1={PIV.x} y1={PIV.y+3} x2={posA.x} y2={posA.y-7}
        stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeDasharray="2,2"/>
      <circle cx={posA.x} cy={posA.y} r="8" fill={a} opacity="0.65"/>
      <text x={posA.x} y={posA.y+3} textAnchor="middle" fill="white" fontSize="7" fontWeight="700">A</text>
      {/* Pendulum C (right, dashed) */}
      <line x1={PIV.x} y1={PIV.y+3} x2={posC.x} y2={posC.y-7}
        stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeDasharray="2,2"/>
      <circle cx={posC.x} cy={posC.y} r="8" fill={a} opacity="0.65"/>
      <text x={posC.x} y={posC.y+3} textAnchor="middle" fill="white" fontSize="7" fontWeight="700">C</text>
      {/* Pendulum B (center, solid) */}
      <line x1={PIV.x} y1={PIV.y+3} x2={posB.x} y2={posB.y-9}
        stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
      <circle cx={posB.x} cy={posB.y} r="9" fill={grn} opacity="0.9"/>
      <text x={posB.x} y={posB.y+3} textAnchor="middle" fill="white" fontSize="7" fontWeight="700">B</text>
      {/* Reference height line */}
      <line x1="110" y1={posA.y+8} x2="210" y2={posA.y+8}
        stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" strokeDasharray="2,2"/>
      {/* Separator */}
      <line x1="20" y1="78" x2="300" y2="78" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7"/>
      {/* Energy bars */}
      {[
        { cx: posA.x, ep:BH, ec:0,  label:"A" },
        { cx: posB.x, ep:0,  ec:BH, label:"B" },
        { cx: posC.x, ep:BH, ec:0,  label:"C" },
      ].map(({ cx, ep, ec, label }, i) => {
        const bx = Math.round(cx) - 14;
        return (
          <g key={i}>
            <rect x={bx}    y={BY-ep}       width="12" height={Math.max(ep,1)} rx="1" fill={a}   opacity={ep>0?0.85:0.2}/>
            <rect x={bx+14} y={BY-ec}       width="12" height={Math.max(ec,1)} rx="1" fill={grn} opacity={ec>0?0.85:0.2}/>
            <line x1={bx-2} y1={BY} x2={bx+28} y2={BY} stroke="rgba(255,255,255,0.2)" strokeWidth="0.7"/>
            <text x={bx+13} y={BY+8} textAnchor="middle"
              fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">{label}</text>
          </g>
        );
      })}
      {/* Bar legend */}
      <rect x="50"  y="116" width="8" height="6" fill={a}   opacity="0.8" rx="1"/>
      <text x="61"  y="122" fill={a}   fontSize="5.5" fontFamily="monospace">Ep (potencial)</text>
      <rect x="160" y="116" width="8" height="6" fill={grn} opacity="0.8" rx="1"/>
      <text x="171" y="122" fill={grn} fontSize="5.5" fontFamily="monospace">Ec (cinética)</text>
    </svg>
  );
}

// ── Física: Circuito eléctrico serie vs paralelo ───────────────────────────────
function FisicaCircuitoSVG({ tema }) {
  const a = tema.acento, gold = "#f5c842", grn = "#4ab890";
  return (
    <svg viewBox="0 0 320 130" width="100%" style={{ display:"block" }}>
      {/* LEFT: Serie */}
      <rect x="1" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="78" y="11" textAnchor="middle" fill={gold} fontSize="6.5" fontFamily="monospace" fontWeight="700">CIRCUITO EN SERIE</text>
      <text x="78" y="19" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5" fontFamily="monospace">misma corriente · I₁ = I₂ = I</text>
      <line x1="28" y1="33" x2="138" y2="33" stroke={gold} strokeWidth="1.5"/>
      <line x1="138" y1="33" x2="138" y2="88" stroke={gold} strokeWidth="1.5"/>
      <line x1="28" y1="88" x2="138" y2="88" stroke={gold} strokeWidth="1.5"/>
      <line x1="28" y1="33" x2="28" y2="50" stroke={gold} strokeWidth="1.5"/>
      <line x1="28" y1="66" x2="28" y2="88" stroke={gold} strokeWidth="1.5"/>
      <line x1="23" y1="50" x2="33" y2="50" stroke={gold} strokeWidth="2.5"/>
      <line x1="25" y1="57" x2="31" y2="57" stroke={gold} strokeWidth="1.5"/>
      <line x1="25" y1="62" x2="31" y2="62" stroke={gold} strokeWidth="1.5"/>
      <line x1="23" y1="66" x2="33" y2="66" stroke={gold} strokeWidth="2.5"/>
      <text x="18" y="56" textAnchor="middle" fill={gold} fontSize="6">+</text>
      <text x="18" y="68" textAnchor="middle" fill={gold} fontSize="6">−</text>
      <rect x="53" y="27" width="28" height="12" rx="2" fill="rgba(0,0,0,0.3)" stroke={a} strokeWidth="1.5"/>
      <text x="67" y="36" textAnchor="middle" fill={a} fontSize="6" fontFamily="monospace">R₁</text>
      <rect x="93" y="27" width="28" height="12" rx="2" fill="rgba(0,0,0,0.3)" stroke={a} strokeWidth="1.5"/>
      <text x="107" y="36" textAnchor="middle" fill={a} fontSize="6" fontFamily="monospace">R₂</text>
      <polygon points="85,31 89,33 85,35" fill="rgba(255,255,255,0.35)"/>
      <text x="78" y="102" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">V = V₁ + V₂</text>
      <text x="78" y="111" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">R_total = R₁ + R₂</text>
      <text x="78" y="122" textAnchor="middle" fill={gold} fontSize="5.5" fontFamily="monospace">si R₁ falla → todo apagado</text>
      {/* RIGHT: Paralelo */}
      <rect x="165" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="242" y="11" textAnchor="middle" fill={grn} fontSize="6.5" fontFamily="monospace" fontWeight="700">CIRCUITO EN PARALELO</text>
      <text x="242" y="19" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5" fontFamily="monospace">mismo voltaje · V₁ = V₂ = V</text>
      <line x1="180" y1="33" x2="308" y2="33" stroke={grn} strokeWidth="1.5"/>
      <line x1="180" y1="88" x2="308" y2="88" stroke={grn} strokeWidth="1.5"/>
      <line x1="180" y1="33" x2="180" y2="50" stroke={grn} strokeWidth="1.5"/>
      <line x1="180" y1="67" x2="180" y2="88" stroke={grn} strokeWidth="1.5"/>
      <line x1="175" y1="50" x2="185" y2="50" stroke={grn} strokeWidth="2.5"/>
      <line x1="177" y1="57" x2="183" y2="57" stroke={grn} strokeWidth="1.5"/>
      <line x1="177" y1="62" x2="183" y2="62" stroke={grn} strokeWidth="1.5"/>
      <line x1="175" y1="67" x2="185" y2="67" stroke={grn} strokeWidth="2.5"/>
      <text x="172" y="56" textAnchor="end" fill={grn} fontSize="6">+</text>
      <text x="172" y="68" textAnchor="end" fill={grn} fontSize="6">−</text>
      <line x1="308" y1="33" x2="308" y2="88" stroke={grn} strokeWidth="1.5"/>
      <line x1="220" y1="33" x2="220" y2="42" stroke={grn} strokeWidth="1.5"/>
      <rect x="210" y="42" width="20" height="14" rx="2" fill="rgba(0,0,0,0.3)" stroke={a} strokeWidth="1.5"/>
      <text x="220" y="52" textAnchor="middle" fill={a} fontSize="6" fontFamily="monospace">R₁</text>
      <line x1="220" y1="56" x2="220" y2="88" stroke={grn} strokeWidth="1.5"/>
      <line x1="268" y1="33" x2="268" y2="42" stroke={grn} strokeWidth="1.5"/>
      <rect x="258" y="42" width="20" height="14" rx="2" fill="rgba(0,0,0,0.3)" stroke={a} strokeWidth="1.5"/>
      <text x="268" y="52" textAnchor="middle" fill={a} fontSize="6" fontFamily="monospace">R₂</text>
      <line x1="268" y1="56" x2="268" y2="88" stroke={grn} strokeWidth="1.5"/>
      <text x="242" y="102" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">I = I₁ + I₂</text>
      <text x="242" y="111" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">1/R_total = 1/R₁ + 1/R₂</text>
      <text x="242" y="122" textAnchor="middle" fill={grn} fontSize="5.5" fontFamily="monospace">si R₁ falla → R₂ sigue</text>
    </svg>
  );
}

// ── Física: Transformaciones de energía ───────────────────────────────────────
function FisicaTransformacionesSVG({ tema }) {
  const a = tema.acento, gold = "#f5c842", grn = "#4ab890", org = "#ff7755";
  const boxes = [
    { label:"Química",  sub:"gasolina\nbatería",  color:org,  x:6   },
    { label:"Térmica",  sub:"calor\nvapor",        color:gold, x:86  },
    { label:"Cinética", sub:"movimiento\nviento",  color:grn,  x:166 },
    { label:"Eléctrica",sub:"corriente\ncircuito", color:a,    x:246 },
  ];
  return (
    <svg viewBox="0 0 320 130" width="100%" style={{ display:"block" }}>
      <rect x="0" y="0" width="320" height="130" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="160" y="10" textAnchor="middle" fill={a}
        fontSize="6.5" fontFamily="monospace" fontWeight="700">CADENA DE TRANSFORMACIONES DE ENERGÍA</text>
      {boxes.map(({ label, sub, color, x }, i) => (
        <g key={i}>
          <rect x={x} y="16" width="64" height="54" rx="5"
            fill={`${color}18`} stroke={color} strokeWidth="1.5"/>
          <text x={x+32} y="37" textAnchor="middle" fill={color}
            fontSize="8" fontFamily="monospace" fontWeight="700">{label}</text>
          {sub.split('\n').map((s,si)=>(
            <text key={si} x={x+32} y={49+si*9} textAnchor="middle"
              fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">{s}</text>
          ))}
          {i < boxes.length-1 && (
            <>
              <line x1={x+64} y1="43" x2={x+78} y2="43" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
              <polygon points={`${x+78},39 ${x+78},47 ${x+83},43`} fill="rgba(255,255,255,0.4)"/>
            </>
          )}
        </g>
      ))}
      <text x="38" y="85" textAnchor="middle" fill={org}  fontSize="5" fontFamily="monospace" opacity="0.75">motor · fábrica</text>
      <text x="118" y="85" textAnchor="middle" fill={gold} fontSize="5" fontFamily="monospace" opacity="0.75">turbina · caldera</text>
      <text x="198" y="85" textAnchor="middle" fill={grn}  fontSize="5" fontFamily="monospace" opacity="0.75">generador · molino</text>
      <text x="278" y="85" textAnchor="middle" fill={a}    fontSize="5" fontFamily="monospace" opacity="0.75">motor eléc · LED</text>
      <rect x="16" y="93" width="288" height="28" rx="4"
        fill={`${a}10`} stroke={`${a}35`} strokeWidth="1"/>
      <text x="160" y="104" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="5.5" fontFamily="monospace">
        Ley de Conservación de la Energía (1er principio de la termodinámica)
      </text>
      <text x="160" y="114" textAnchor="middle" fill={a} fontSize="6" fontFamily="monospace" fontWeight="600">
        La energía no se crea ni se destruye, solo se transforma
      </text>
    </svg>
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
