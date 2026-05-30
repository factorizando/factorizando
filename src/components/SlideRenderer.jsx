// Renderizador de diapositivas para el sistema de presentaciones.
// Recibe un objeto `slide`, un `tema` y props de contexto (modo, votos, etc.)
import { useState, useEffect, useMemo, useRef } from "react";
import { M, useKaTeX } from "../data/teoria/shared.jsx";
import { TEMAS, useFuentesTema } from "../data/presentaciones/temas.jsx";
import JXG from 'jsxgraph';
import { ReactFlow, Handle, Position, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

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

      <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1fr 1fr", gap: 12 }}>
        {slide.condiciones.map((c, i) => {
          const activo = resaltadoIdx === i;
          return (
          <div
            key={i}
            onClick={() => onResaltar && onResaltar(i)}
            style={{
              background: activo ? tema.acentoSuave : tema.card,
              border: `1px solid ${activo ? tema.acento : tema.border}`,
              borderRadius: 10,
              padding: narrow ? "10px 14px" : "14px 18px",
              boxShadow: activo ? `0 0 0 2px ${tema.acentoBorde}, 0 0 16px ${tema.acentoBorde}` : "none",
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

      <div style={{ display: "flex", flexDirection: "column", gap: compact ? 8 : 10 }}>
        {slide.items.map((item, i) => {
          const activo = resaltadoIdx === i;
          return (
          <div
            key={i}
            onClick={() => onResaltar && onResaltar(i)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
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
            <span style={{ fontSize: "1.1em", minWidth: 52 }}>
              <M>{item.math}</M>
            </span>
            <span style={{ color: "#4a4640", fontSize: 17 }}>→</span>
            <span style={{ fontSize: 15, color: "#c4bfb3" }}>{item.texto}</span>
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
  const criterioSVGs =
    slide.variante === "congruencia"    ? criterioSVGsCongruencia :
    slide.variante === "paralelogramos" ? criterioSVGsParalelogramos :
    slide.variante === "trapecios"      ? criterioSVGsTrapecios :
    slide.variante === "poligonos"      ? criterioSVGsPoligonos :
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

      const W = container.clientWidth || 420;
      const H = 310;

      // ── Scene & camera ──
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(38, W / H, 0.1, 100);
      camera.position.z = 2.85;

      // ── Renderer ──
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // ── Lighting ──
      scene.add(new THREE.AmbientLight(0xffffff, 0.5));
      const sun = new THREE.DirectionalLight(0xffffff, 0.9);
      sun.position.set(4, 2, 5);
      scene.add(sun);
      // subtle back-fill light
      const fill = new THREE.DirectionalLight(0x4477cc, 0.3);
      fill.position.set(-3, -1, -4);
      scene.add(fill);

      // ── Globe group (sphere + lines rotate together) ──
      const group = new THREE.Group();
      scene.add(group);

      // Ocean sphere
      group.add(new THREE.Mesh(
        new THREE.SphereGeometry(1, 72, 72),
        new THREE.MeshPhongMaterial({
          color: 0x0d2b5c, emissive: 0x040f20,
          specular: 0x224488, shininess: 40,
        })
      ));
      // Atmosphere glow
      group.add(new THREE.Mesh(
        new THREE.SphereGeometry(1.045, 32, 32),
        new THREE.MeshPhongMaterial({
          color: 0x2255aa, transparent: true, opacity: 0.07, side: THREE.BackSide,
        })
      ));

      // ── Line builders ──
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

      // Grid every 30°
      [-60, -30, 30, 60].forEach(lat => addLat(lat, 0x1e3560, 0.55));
      [30, 60, 90, 120, 150, 210, 240, 270, 300, 330].forEach(lon => addLon(lon, 0x1e3560, 0.4));

      // Key parallels
      addLat(0,     0x3399ff, 1.0);  // Ecuador — azul
      addLat(23.5,  0xf5c842, 0.95); // Trópico de Cáncer — dorado
      addLat(-23.5, 0xf5c842, 0.85); // Trópico de Capricornio — dorado
      addLat(66.5,  0x88ccff, 0.80); // Círculo Polar Ártico — azul claro
      addLat(-66.5, 0x88ccff, 0.70); // Círculo Polar Antártico — azul claro

      // Key meridians
      addLon(0,   0xff6644, 0.95); // Greenwich — naranja
      addLon(180, 0xcc3322, 0.70); // Línea de fecha — rojo

      // Pole dots
      const dotGeo = new THREE.SphereGeometry(0.024, 8, 8);
      const dotMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const np = new THREE.Mesh(dotGeo, dotMat); np.position.set(0,  1.012, 0);
      const sp = new THREE.Mesh(dotGeo, dotMat); sp.position.set(0, -1.012, 0);
      group.add(np, sp);

      // ── Controls ──
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = false;
      controls.enablePan  = false;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.45;
      controls.enableDamping  = true;
      controls.dampingFactor  = 0.08;

      // ── Resize ──
      const onResize = () => {
        if (!container || !renderer) return;
        const w = container.clientWidth;
        camera.aspect = w / H;
        camera.updateProjectionMatrix();
        renderer.setSize(w, H);
      };
      window.addEventListener("resize", onResize);

      // ── Render loop ──
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
    { color: "#3399ff", text: "Ecuador · 0°" },
    { color: "#f5c842", text: "Trópico de Cáncer · 23.5°N" },
    { color: "#f5c842", text: "Trópico de Capricornio · 23.5°S" },
    { color: "#88ccff", text: "Círculo Polar Ártico · 66.5°N" },
    { color: "#88ccff", text: "Círculo Polar Antártico · 66.5°S" },
    { color: "#ff6644", text: "Meridiano de Greenwich · 0°" },
    { color: "#cc3322", text: "Línea Internacional de Fecha · 180°" },
    { color: "#334466", text: "Cuadrícula cada 30°" },
  ];

  return (
    <div style={{ display: "flex", gap: 14, alignItems: "center", width: "100%" }}>
      <div
        ref={mountRef}
        style={{ flex: "1 1 0", minWidth: 0, height: 310, borderRadius: 10, overflow: "hidden",
          background: "rgba(4,14,30,0.6)" }}
      />
      <div style={{ width: 185, flexShrink: 0, display: "flex", flexDirection: "column", gap: 7 }}>
        {legend.map((l, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <div style={{ width: 22, height: 3, background: l.color, borderRadius: 2, flexShrink: 0 }}/>
            <span style={{
              color: "rgba(255,255,255,0.72)", fontSize: 9.5,
              fontFamily: "monospace", lineHeight: 1.35,
            }}>
              {l.text}
            </span>
          </div>
        ))}
        <div style={{ marginTop: 8, color: "rgba(255,255,255,0.22)", fontSize: 8.5, fontFamily: "monospace" }}>
          ↺ arrastra para rotar
        </div>
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
