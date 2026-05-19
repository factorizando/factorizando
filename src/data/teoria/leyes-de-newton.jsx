import { useState, useEffect } from "react";

/* ═══════════════════════════════════════════════════════════════════════════
   STYLES — reutiliza "cine-css" si ya fue inyectado
═══════════════════════════════════════════════════════════════════════════ */
const SHARED_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=IBM+Plex+Mono:wght@400;500;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .lr { background: #0d0d0f; color: #e0dcd4; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; min-height: 100vh; line-height: 1.6; }

  .hero { background: linear-gradient(160deg,#111115 0%,#141210 55%,#0d0d0f 100%); border-bottom: 1px solid rgba(245,200,66,0.12); padding: 52px 32px 44px; text-align: center; }
  .hero-tag { font-family:'IBM Plex Mono',monospace; font-size:11px; letter-spacing:0.18em; color:#f5c842; text-transform:uppercase; margin-bottom:16px; }
  .hero h1 { font-family:'Playfair Display',serif; font-size:clamp(24px,5vw,38px); font-weight:600; color:#f0ece3; margin-bottom:14px; line-height:1.2; }
  .hero-math { margin:14px auto; max-width:560px; font-size:18px; }
  .hero p { font-size:15px; color:#7a756e; max-width:600px; margin:10px auto 0; line-height:1.75; font-weight:300; }

  .cw { max-width:840px; margin:0 auto; padding:40px 24px 90px; }
  .section { margin-bottom:4px; }
  .sec-hd { display:flex; align-items:center; gap:14px; margin-bottom:20px; }
  .sec-num { font-family:'IBM Plex Mono',monospace; font-size:11px; font-weight:700; letter-spacing:0.12em; color:#0d0d0f; background:linear-gradient(135deg,#c8960a,#f5c842); padding:4px 10px; border-radius:3px; flex-shrink:0; }
  .sec-hd h2 { font-family:'Playfair Display',serif; font-size:22px; font-weight:600; color:#f0ece3; }

  .card { background:rgba(255,255,255,0.028); border:1px solid rgba(255,255,255,0.07); border-radius:12px; padding:22px 26px; margin-bottom:14px; }
  .card h3 { font-family:'Playfair Display',serif; font-size:16px; color:#f0ece3; margin-bottom:12px; font-style:italic; }

  .divider { height:1px; background:linear-gradient(90deg,transparent,rgba(255,255,255,0.07),transparent); margin:32px 0; }
  .hint { font-size:13px; color:#6a6560; margin-bottom:14px; font-style:italic; }

  .tip-box { background:rgba(245,200,66,0.05); border:1px solid rgba(245,200,66,0.18); border-left:3px solid #f5c842; border-radius:6px; padding:14px 18px; margin-top:14px; }
  .tip-label { font-family:'IBM Plex Mono',monospace; font-size:10px; letter-spacing:0.14em; text-transform:uppercase; color:#f5c842; margin-bottom:8px; }
  .tip-box p, .tip-box li { font-size:14px; color:#a09880; line-height:1.75; font-weight:300; }
  .tip-box ul { padding-left:16px; }
  .tip-box li { margin-bottom:4px; }

  .formula-box { background:rgba(245,200,66,0.04); border:1px solid rgba(245,200,66,0.2); border-radius:8px; padding:16px 20px; margin:12px 0; overflow-x:auto; }

  .ex-grid { display:grid; grid-template-columns:1fr 1fr; gap:13px; }
  @media(max-width:600px){ .ex-grid { grid-template-columns:1fr; } }

  .ej-card { background:rgba(0,0,0,0.32); border:1px solid rgba(255,255,255,0.07); border-radius:10px; overflow:hidden; transition:border-color 0.2s; display:flex; flex-direction:column; }
  .ej-card:hover { border-color:rgba(245,200,66,0.22); }
  .ej-hd { padding:14px 18px; display:flex; align-items:flex-start; justify-content:space-between; gap:10px; cursor:pointer; }
  .ej-label { font-family:'IBM Plex Mono',monospace; font-size:10px; letter-spacing:0.12em; color:rgba(245,200,66,0.65); text-transform:uppercase; margin-bottom:5px; }
  .ej-titulo { font-size:14px; color:#e0dcd4; font-weight:500; line-height:1.4; }
  .ej-chevron { color:rgba(245,200,66,0.5); font-size:18px; transition:transform 0.25s; flex-shrink:0; margin-top:2px; }
  .ej-chevron.open { transform:rotate(180deg); }
  .ej-body { max-height:0; overflow:hidden; transition:max-height 0.4s ease; }
  .ej-body.open { max-height:1200px; }
  .ej-content { padding:0 18px 16px; border-top:1px solid rgba(255,255,255,0.06); }

  .qz-card { background:rgba(0,0,0,0.28); border:1px solid rgba(255,255,255,0.07); border-radius:10px; padding:20px 22px; margin-bottom:12px; }
  .qz-label { font-family:'IBM Plex Mono',monospace; font-size:10px; letter-spacing:0.12em; color:rgba(245,200,66,0.6); text-transform:uppercase; margin-bottom:10px; }
  .qz-q { font-size:15px; color:#e0dcd4; font-weight:500; margin-bottom:8px; line-height:1.5; }
  .qz-opts { display:flex; flex-direction:column; gap:8px; margin-top:14px; }
  .qz-opt { display:flex; align-items:center; gap:12px; padding:10px 14px; border-radius:7px; border:1px solid rgba(255,255,255,0.08); background:rgba(255,255,255,0.02); cursor:pointer; transition:background 0.15s,border-color 0.15s; font-size:14px; color:#b0aaa0; text-align:left; width:100%; }
  .qz-opt:hover:not(:disabled) { background:rgba(255,255,255,0.05); border-color:rgba(255,255,255,0.15); }
  .qz-opt.correct  { background:rgba(80,200,120,0.10); border-color:rgba(80,200,120,0.35); color:#7ee8a2; }
  .qz-opt.wrong    { background:rgba(220,80,80,0.10);  border-color:rgba(220,80,80,0.3);   color:#f08080; }
  .qz-opt.revealed { background:rgba(245,200,66,0.07); border-color:rgba(245,200,66,0.28); color:#f5c842; }
  .qz-opt:disabled { cursor:default; }
  .opt-letter { font-family:'IBM Plex Mono',monospace; font-size:11px; font-weight:700; width:20px; height:20px; border-radius:50%; border:1px solid currentColor; display:flex; align-items:center; justify-content:center; flex-shrink:0; opacity:0.75; }
  .qz-exp { margin-top:14px; padding:12px 16px; background:rgba(245,200,66,0.05); border:1px solid rgba(245,200,66,0.15); border-radius:6px; font-size:13.5px; color:#a09880; line-height:1.7; }
  .qz-exp strong { color:#f5c842; }
  .qz-exp .step-row { display:flex; gap:8px; margin-top:6px; align-items:flex-start; }
  .qz-exp .step-num { flex-shrink:0; width:18px; height:18px; border-radius:50%; background:rgba(245,200,66,0.12); border:1px solid rgba(245,200,66,0.3); font-size:10px; color:#f5c842; display:flex; align-items:center; justify-content:center; font-family:monospace; font-weight:700; margin-top:1px; }

  .score-bar { background:rgba(245,200,66,0.07); border:1px solid rgba(245,200,66,0.2); border-radius:8px; padding:14px 20px; margin-bottom:16px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:8px; }
  .score-num { font-family:'IBM Plex Mono',monospace; font-size:28px; font-weight:700; color:#f5c842; }

  .def-grid { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:12px; }
  @media(max-width:560px){ .def-grid { grid-template-columns:1fr; } }
  .def-card { background:rgba(0,0,0,0.32); border:1px solid rgba(255,255,255,0.07); border-radius:10px; padding:18px 20px; transition:border-color 0.2s; }
  .def-card:hover { border-color:rgba(245,200,66,0.2); }
  .def-card-title { font-family:'Playfair Display',serif; font-size:15px; color:#f5c842; margin-bottom:6px; font-style:italic; }
  .def-card-body  { font-size:14px; color:#a09880; line-height:1.7; font-weight:300; }

  .eq-row { display:flex; align-items:flex-start; gap:16px; padding:14px 18px; background:rgba(0,0,0,0.28); border:1px solid rgba(255,255,255,0.06); border-radius:8px; margin-bottom:10px; transition:border-color 0.2s; }
  .eq-row:hover { border-color:rgba(245,200,66,0.18); }
  .eq-num { flex-shrink:0; width:26px; height:26px; background:linear-gradient(135deg,#c8960a,#f5c842); color:#0d0d0f; border-radius:50%; font-family:'IBM Plex Mono',monospace; font-size:11px; font-weight:700; display:flex; align-items:center; justify-content:center; margin-top:3px; }
  .eq-body { flex:1; }
  .eq-name { font-size:13px; color:#7a756e; margin-bottom:4px; font-style:italic; }

  .prop-tag { display:inline-block; font-family:'IBM Plex Mono',monospace; font-size:10px; letter-spacing:0.14em; padding:2px 8px; border-radius:2px; text-transform:uppercase; }
  .prop-dir { background:rgba(245,200,66,0.1); color:#f5c842; border:1px solid rgba(245,200,66,0.25); }
  .prop-inv { background:rgba(100,190,255,0.1); color:#7acfff; border:1px solid rgba(100,190,255,0.25); }
  .prop-exp { background:rgba(160,120,255,0.1); color:#c8b0ff; border:1px solid rgba(160,120,255,0.25); }

  table { width:100%; border-collapse:collapse; margin:12px 0; }
  th { font-family:'IBM Plex Mono',monospace; font-size:10.5px; letter-spacing:0.1em; text-transform:uppercase; color:rgba(245,200,66,0.7); padding:8px 12px; text-align:left; border-bottom:1px solid rgba(245,200,66,0.18); }
  td { padding:8px 12px; font-size:13.5px; color:#a09880; border-bottom:1px solid rgba(255,255,255,0.04); }
  tr:last-child td { border-bottom:none; }
  td strong { color:#e0dcd4; }
`;

/* ═══════════════════════════════════════════════════════════════════════════
   KATEX + STYLES LOADER
═══════════════════════════════════════════════════════════════════════════ */
function useKatex() {
  const [ready, setReady] = useState(!!window.katex);
  useEffect(() => {
    if (window.katex) { setReady(true); return; }
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css";
    document.head.appendChild(link);
    const s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.js";
    s.onload = () => setReady(true);
    document.head.appendChild(s);
  }, []);
  return ready;
}

function useStyles() {
  useEffect(() => {
    if (!document.getElementById("cine-css")) {
      const s = document.createElement("style");
      s.id = "cine-css";
      s.textContent = SHARED_CSS;
      document.head.appendChild(s);
    }
  }, []);
}

/* ═══════════════════════════════════════════════════════════════════════════
   MATH RENDERERS
═══════════════════════════════════════════════════════════════════════════ */
const M = ({ c }) => {
  if (!window.katex) return <code style={{ fontSize: 13 }}>{c}</code>;
  return <span dangerouslySetInnerHTML={{ __html: window.katex.renderToString(c, { throwOnError: false }) }} />;
};
const MB = ({ c }) => {
  if (!window.katex) return <div style={{ fontFamily: "monospace", textAlign: "center", padding: "8px", fontSize: 13 }}>{c}</div>;
  return (
    <div
      dangerouslySetInnerHTML={{ __html: window.katex.renderToString(c, { throwOnError: false, displayMode: true }) }}
      style={{ overflowX: "auto", padding: "4px 0" }}
    />
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   DIAGRAMA CUERPO LIBRE (SVG)
═══════════════════════════════════════════════════════════════════════════ */
function FBDiagram({ showNormal = true, showPeso = true, showFuerza = true, showFriccion = false, masa = "m", note = "" }) {
  const W = 300, H = 220;
  const bx = 125, by = 80, bw = 52, bh = 52;
  const cx = bx + bw / 2, cy = by + bh / 2;

  return (
    <div style={{ textAlign: "center" }}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", maxWidth: 300, background: "rgba(0,0,0,0.35)", borderRadius: 8, display: "block", margin: "0 auto" }}>
        {/* suelo */}
        <line x1={40} y1={by + bh + 2} x2={260} y2={by + bh + 2} stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
        {[50, 70, 90, 110, 130, 150, 170, 190, 210, 230, 250].map((x, i) => (
          <line key={i} x1={x} y1={by + bh + 2} x2={x - 10} y2={by + bh + 13} stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
        ))}
        {/* bloque */}
        <rect x={bx} y={by} width={bw} height={bh} fill="rgba(245,200,66,0.08)" stroke="rgba(245,200,66,0.45)" strokeWidth="1.5" rx="3" />
        <text x={cx} y={cy + 4} textAnchor="middle" fontSize="13" fill="#f5c842" fontFamily="IBM Plex Mono, monospace">{masa}</text>
        {/* Normal ↑ */}
        {showNormal && (
          <>
            <line x1={cx} y1={by} x2={cx} y2={by - 52} stroke="#7acfff" strokeWidth="2.5" strokeLinecap="round" />
            <polygon points={`${cx},${by - 52} ${cx - 5},${by - 40} ${cx + 5},${by - 40}`} fill="#7acfff" />
            <text x={cx + 9} y={by - 28} fontSize="12" fill="#7acfff" fontFamily="IBM Plex Mono, monospace">N</text>
          </>
        )}
        {/* Peso ↓ */}
        {showPeso && (
          <>
            <line x1={cx} y1={by + bh} x2={cx} y2={by + bh + 52} stroke="#f08080" strokeWidth="2.5" strokeLinecap="round" />
            <polygon points={`${cx},${by + bh + 52} ${cx - 5},${by + bh + 40} ${cx + 5},${by + bh + 40}`} fill="#f08080" />
            <text x={cx + 9} y={by + bh + 46} fontSize="12" fill="#f08080" fontFamily="IBM Plex Mono, monospace">W=mg</text>
          </>
        )}
        {/* Fuerza aplicada → */}
        {showFuerza && (
          <>
            <line x1={bx + bw} y1={cy} x2={bx + bw + 52} y2={cy} stroke="#f5c842" strokeWidth="2.5" strokeLinecap="round" />
            <polygon points={`${bx + bw + 52},${cy} ${bx + bw + 40},${cy - 5} ${bx + bw + 40},${cy + 5}`} fill="#f5c842" />
            <text x={bx + bw + 35} y={cy - 9} fontSize="12" fill="#f5c842" fontFamily="IBM Plex Mono, monospace">F</text>
          </>
        )}
        {/* Fricción ← */}
        {showFriccion && (
          <>
            <line x1={bx} y1={cy} x2={bx - 48} y2={cy} stroke="#c8b0ff" strokeWidth="2.5" strokeLinecap="round" />
            <polygon points={`${bx - 48},${cy} ${bx - 36},${cy - 5} ${bx - 36},${cy + 5}`} fill="#c8b0ff" />
            <text x={bx - 60} y={cy - 9} fontSize="12" fill="#c8b0ff" fontFamily="IBM Plex Mono, monospace">f</text>
          </>
        )}
      </svg>
      {note && <div style={{ fontSize: 11, color: "#6a6560", marginTop: 4, fontStyle: "italic" }}>{note}</div>}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   GRÁFICA LINEAL (reutilizable)
═══════════════════════════════════════════════════════════════════════════ */
function GraficaLineal({ xLabel, yLabel, xRange, yRange, xTicks, yTicks, lines, points = [], note }) {
  const W = 260, H = 180, L = 46, T = 12, R = 14, B = 34;
  const pw = W - L - R, ph = H - T - B;
  const toX = v => L + (v - xRange[0]) / (xRange[1] - xRange[0]) * pw;
  const toY = v => H - B - (v - yRange[0]) / (yRange[1] - yRange[0]) * ph;

  return (
    <div style={{ textAlign: "center" }}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", maxWidth: 260, background: "rgba(0,0,0,0.35)", borderRadius: 8, display: "block", margin: "0 auto" }}>
        {xTicks.filter(t => t > xRange[0]).map(t => (
          <line key={`gx${t}`} x1={toX(t)} y1={T} x2={toX(t)} y2={H - B} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        ))}
        {yTicks.filter(v => v > yRange[0]).map(v => (
          <line key={`gy${v}`} x1={L} y1={toY(v)} x2={W - R} y2={toY(v)} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        ))}
        <line x1={L} y1={T} x2={L} y2={H - B} stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
        <line x1={L} y1={H - B} x2={W - R} y2={H - B} stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
        {lines.map((seg, i) => (
          <line key={i} x1={toX(seg[0][0])} y1={toY(seg[0][1])} x2={toX(seg[1][0])} y2={toY(seg[1][1])}
            stroke={seg[2] || "#f5c842"} strokeWidth="2.5" strokeLinecap="round" />
        ))}
        {xTicks.map(t => (
          <g key={`xtl${t}`}>
            <line x1={toX(t)} y1={H - B} x2={toX(t)} y2={H - B + 4} stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <text x={toX(t)} y={H - B + 15} textAnchor="middle" fontSize="9.5" fill="rgba(255,255,255,0.45)">{t}</text>
          </g>
        ))}
        {yTicks.map(v => (
          <g key={`ytl${v}`}>
            <line x1={L - 4} y1={toY(v)} x2={L} y2={toY(v)} stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <text x={L - 7} y={toY(v) + 3.5} textAnchor="end" fontSize="9.5" fill="rgba(255,255,255,0.45)">{v}</text>
          </g>
        ))}
        <text x={(L + W - R) / 2} y={H - 2} textAnchor="middle" fontSize="10" fill="rgba(245,200,66,0.65)">{xLabel}</text>
        <text x={9} y={(T + H - B) / 2} textAnchor="middle" fontSize="10" fill="rgba(245,200,66,0.65)"
          transform={`rotate(-90,9,${(T + H - B) / 2})`}>{yLabel}</text>
        {points.map(([x, y, lbl], i) => (
          <g key={`pt${i}`}>
            <circle cx={toX(x)} cy={toY(y)} r="3.5" fill="#f5c842" />
            {lbl && <text x={toX(x) + 6} y={toY(y) - 5} fontSize="9" fill="rgba(245,200,66,0.85)">{lbl}</text>}
          </g>
        ))}
      </svg>
      {note && <div style={{ fontSize: 11, color: "#6a6560", marginTop: 4, fontStyle: "italic" }}>{note}</div>}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   EJ CARD
═══════════════════════════════════════════════════════════════════════════ */
function EjCard({ ej, idx }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="ej-card">
      <div className="ej-hd" onClick={() => setOpen(o => !o)}>
        <div>
          <div className="ej-label">Ejemplo {idx + 1} · {ej.tipo}</div>
          <div className="ej-titulo">{ej.titulo}</div>
        </div>
        <span className={`ej-chevron${open ? " open" : ""}`}>▾</span>
      </div>
      <div className={`ej-body${open ? " open" : ""}`}>
        <div className="ej-content" style={{ paddingTop: 14 }}>
          {ej.prob && (
            <div style={{ textAlign: "center", marginBottom: 14, background: "rgba(245,200,66,0.04)", borderRadius: 6, padding: "10px 12px" }}>
              <MB c={ej.prob} />
            </div>
          )}
          {ej.steps.map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
              <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: "50%", background: "rgba(245,200,66,0.1)", border: "1px solid rgba(245,200,66,0.28)", fontSize: 10, color: "#f5c842", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "monospace", fontWeight: 700, marginTop: 2 }}>{i + 1}</span>
              <div style={{ fontSize: 14, color: "#a09880", lineHeight: 1.75, flex: 1 }}>
                {s.pre}{s.math && <> <M c={s.math} /></>}
              </div>
            </div>
          ))}
          {ej.res && (
            <div style={{ marginTop: 12, padding: "10px 16px", background: "rgba(245,200,66,0.07)", borderRadius: 6, border: "1px solid rgba(245,200,66,0.22)", textAlign: "center" }}>
              <div style={{ fontSize: 10, fontFamily: "monospace", letterSpacing: "0.12em", textTransform: "uppercase", color: "#f5c842", marginBottom: 4 }}>Resultado</div>
              <MB c={ej.res} />
            </div>
          )}
          {ej.nota && (
            <div className="tip-box" style={{ marginTop: 12 }}>
              <div className="tip-label">Nota</div>
              <p>{ej.nota}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   QZ CARD
═══════════════════════════════════════════════════════════════════════════ */
function QzCard({ q, idx, total, selected, onSelect }) {
  const answered = selected !== null;
  const letters = ["A", "B", "C", "D"];
  return (
    <div className="qz-card">
      <div className="qz-label">Pregunta {idx + 1} de {total}</div>
      <div className="qz-q">{q.q}</div>
      {q.prob && <div style={{ textAlign: "center", marginBottom: 8, overflow: "auto" }}><MB c={q.prob} /></div>}
      <div className="qz-opts">
        {q.opts.map((opt, oi) => {
          let cls = "qz-opt";
          if (answered) {
            if (oi === q.ans) cls += " correct";
            else if (oi === selected) cls += " wrong";
          }
          return (
            <button key={oi} className={cls} disabled={answered} onClick={() => onSelect(oi)}>
              <span className="opt-letter">{letters[oi]}</span>
              <span><M c={opt} /></span>
            </button>
          );
        })}
      </div>
      {answered && (
        <div className="qz-exp">
          <strong>{selected === q.ans ? "✓ Correcto." : "✗ Incorrecto."}</strong>{" "}{q.exp}
          {q.steps && q.steps.map((s, i) => (
            <div className="step-row" key={i}>
              <span className="step-num">{i + 1}</span>
              <span>{s.pre}{s.math && <> <M c={s.math} /></>}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   QUIZ SECTION
═══════════════════════════════════════════════════════════════════════════ */
function QuizSection({ questions, title, secNum }) {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const answered = answers.filter(a => a !== null).length;
  const correct = answers.filter((a, i) => a !== null && a === questions[i].ans).length;

  const msg = correct === questions.length
    ? "¡Puntaje perfecto! 🎯"
    : correct >= 8 ? "¡Excelente dominio del tema!"
    : correct >= 6 ? "¡Buen trabajo! Repasa los errores."
    : "Revisa la teoría y vuelve a intentarlo.";

  return (
    <div className="section">
      <div className="sec-hd"><span className="sec-num">{secNum}</span><h2>{title}</h2></div>
      {answered > 0 && (
        <div className="score-bar">
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span className="score-num">{correct}</span>
            <span style={{ fontSize: 14, color: "#a09880" }}>/ {answered} respondidas ({questions.length} total)</span>
          </div>
          {answered === questions.length && (
            <div style={{ fontSize: 13, color: correct >= 8 ? "#7ee8a2" : correct >= 6 ? "#f5c842" : "#f08080" }}>{msg}</div>
          )}
        </div>
      )}
      <p className="hint">Selecciona la respuesta. Al elegir, aparece la explicación detallada.</p>
      {questions.map((q, i) => (
        <QzCard key={i} q={q} idx={i} total={questions.length}
          selected={answers[i]}
          onSelect={oi => setAnswers(prev => { const n = [...prev]; n[i] = oi; return n; })} />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   DATA — EJEMPLOS RESUELTOS
═══════════════════════════════════════════════════════════════════════════ */
const ejemplos = [
  {
    tipo: "Segunda Ley",
    titulo: "Calcular la fuerza — F = ma directo",
    prob: String.raw`\text{Un bloque de } 8\,\text{kg tiene una aceleración de } 5\,\text{m/s}^2\text{. ¿Cuál es la fuerza neta?}`,
    steps: [
      { pre: "Identificamos los datos: ", math: String.raw`m = 8\,\text{kg},\quad a = 5\,\text{m/s}^2` },
      { pre: "Aplicamos la Segunda Ley: ", math: String.raw`F = m\,a = 8 \times 5` },
    ],
    res: String.raw`F = 40\,\text{N}`,
  },
  {
    tipo: "Segunda Ley",
    titulo: "Calcular la aceleración — a = F/m",
    prob: String.raw`\text{Una fuerza neta de }72\,\text{N actúa sobre un bloque de }9\,\text{kg.}`,
    steps: [
      { pre: "Datos: ", math: String.raw`F = 72\,\text{N},\quad m = 9\,\text{kg}` },
      { pre: "Despejamos a: ", math: String.raw`a = \dfrac{F}{m} = \dfrac{72}{9}` },
    ],
    res: String.raw`a = 8\,\text{m/s}^2`,
  },
  {
    tipo: "Segunda Ley",
    titulo: "Calcular la masa — m = F/a",
    prob: String.raw`\text{Una fuerza neta de }60\,\text{N produce una aceleración de }4\,\text{m/s}^2\text{. ¿Cuál es la masa?}`,
    steps: [
      { pre: "Datos: ", math: String.raw`F = 60\,\text{N},\quad a = 4\,\text{m/s}^2` },
      { pre: "Despejamos m: ", math: String.raw`m = \dfrac{F}{a} = \dfrac{60}{4}` },
    ],
    res: String.raw`m = 15\,\text{kg}`,
  },
  {
    tipo: "Peso",
    titulo: "W = mg — Tierra vs. Luna",
    prob: String.raw`\text{Un estudiante tiene }55\,\text{kg. ¿Cuánto pesa en la Tierra y en la Luna?}`,
    steps: [
      { pre: "En la Tierra (g = 10 m/s²): ", math: String.raw`W_T = m\,g_T = 55 \times 10 = 550\,\text{N}` },
      { pre: "En la Luna (g = 1.6 m/s²): ", math: String.raw`W_L = m\,g_L = 55 \times 1.6 = 88\,\text{N}` },
      { pre: "La masa no cambia (55 kg en ambos lugares); el peso sí cambia." },
    ],
    res: String.raw`W_T = 550\,\text{N},\quad W_L = 88\,\text{N}`,
    nota: "Masa = cantidad de materia (no cambia). Peso = fuerza gravitacional (depende de g).",
  },
  {
    tipo: "Fuerzas opuestas",
    titulo: "Fuerza neta con dos fuerzas en sentidos contrarios",
    prob: String.raw`\text{Sobre un bloque de }10\,\text{kg actúan: }70\,\text{N (derecha) y }20\,\text{N (izquierda).}`,
    steps: [
      { pre: "Calculamos la fuerza neta (tomamos derecha = positivo): ", math: String.raw`F_\text{neta} = 70 - 20 = 50\,\text{N}` },
      { pre: "Aplicamos la Segunda Ley: ", math: String.raw`a = \dfrac{F_\text{neta}}{m} = \dfrac{50}{10}` },
    ],
    res: String.raw`a = 5\,\text{m/s}^2\text{ (hacia la derecha)}`,
    nota: "Cuando actúan varias fuerzas, primero calcula la fuerza neta sumando vectorialmente.",
  },
  {
    tipo: "Proporcionalidad",
    titulo: "¿Qué ocurre si se triplica la masa?",
    prob: String.raw`F = \text{cte.}\text{ Si la masa se triplica, ¿cómo cambia la aceleración?}`,
    steps: [
      { pre: "De la Segunda Ley: ", math: String.raw`a = \dfrac{F}{m} \;\Rightarrow\; a \propto \dfrac{1}{m}\;\text{(con F fija)}` },
      { pre: "Si m → 3m: ", math: String.raw`a' = \dfrac{F}{3m} = \dfrac{1}{3}\cdot\dfrac{F}{m} = \dfrac{a}{3}` },
      { pre: "Truco EXANI-I: factor en m = factor inverso en a (con F constante)." },
    ],
    res: String.raw`a' = \tfrac{a}{3}\;\text{(la aceleración se reduce a la tercera parte)}`,
    nota: "Si m → km (F cte.), entonces a → a/k. Si F → kF (m cta.), entonces a → ka.",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   DATA — QUIZ LEYES I Y II (10)
═══════════════════════════════════════════════════════════════════════════ */
const quizLeyesI_II = [
  {
    q: "Un bloque de 6 kg experimenta una fuerza neta de 24 N. ¿Cuál es su aceleración?",
    prob: String.raw`a = \dfrac{F}{m} = \dfrac{24\,\text{N}}{6\,\text{kg}} = ?`,
    opts: [String.raw`2\,\text{m/s}^2`, String.raw`3\,\text{m/s}^2`, String.raw`4\,\text{m/s}^2`, String.raw`6\,\text{m/s}^2`],
    ans: 2,
    exp: "Aplicamos directamente a = F/m = 24/6 = 4 m/s².",
    steps: [{ pre: "", math: String.raw`a = \frac{24}{6} = 4\,\text{m/s}^2` }],
  },
  {
    q: "¿Qué fuerza se necesita para dar una aceleración de 5 m/s² a un objeto de 8 kg?",
    prob: String.raw`F = m\,a = 8\,\text{kg} \times 5\,\text{m/s}^2 = ?`,
    opts: [String.raw`20\,\text{N}`, String.raw`32\,\text{N}`, String.raw`40\,\text{N}`, String.raw`45\,\text{N}`],
    ans: 2,
    exp: "F = ma = 8 × 5 = 40 N.",
    steps: [{ pre: "", math: String.raw`F = 8 \times 5 = 40\,\text{N}` }],
  },
  {
    q: "Una fuerza neta de 35 N actúa sobre un objeto con aceleración de 7 m/s². ¿Cuál es la masa del objeto?",
    prob: String.raw`m = \dfrac{F}{a} = \dfrac{35\,\text{N}}{7\,\text{m/s}^2} = ?`,
    opts: [String.raw`4\,\text{kg}`, String.raw`5\,\text{kg}`, String.raw`6\,\text{kg}`, String.raw`7\,\text{kg}`],
    ans: 1,
    exp: "Despejamos m = F/a = 35/7 = 5 kg.",
    steps: [{ pre: "", math: String.raw`m = \frac{35}{7} = 5\,\text{kg}` }],
  },
  {
    q: "¿Cuál es el peso de una roca de 12 kg? (g = 10 m/s²)",
    prob: String.raw`W = m\,g = 12\,\text{kg} \times 10\,\text{m/s}^2 = ?`,
    opts: [String.raw`12\,\text{N}`, String.raw`60\,\text{N}`, String.raw`120\,\text{N}`, String.raw`240\,\text{N}`],
    ans: 2,
    exp: "W = mg = 12 × 10 = 120 N. Recuerda que peso se mide en Newtons, no en kilogramos.",
    steps: [{ pre: "", math: String.raw`W = 12 \times 10 = 120\,\text{N}` }],
  },
  {
    q: "¿Cuál de los siguientes enunciados describe correctamente la Primera Ley de Newton?",
    opts: [
      String.raw`\text{La fuerza es igual a la masa por la aceleración}`,
      String.raw`\text{Todo cuerpo mantiene su estado si la fuerza neta es cero}`,
      String.raw`\text{A cada acción corresponde una reacción igual y opuesta}`,
      String.raw`\text{La fuerza es proporcional al cuadrado de la velocidad}`,
    ],
    ans: 1,
    exp: "La Primera Ley (inercia) establece que un objeto mantiene su estado de reposo o movimiento rectilíneo uniforme si no hay fuerza neta.",
  },
  {
    q: "Si la fuerza neta aplicada a un objeto se duplica (masa constante), ¿qué ocurre con su aceleración?",
    opts: [
      String.raw`\text{No cambia}`,
      String.raw`\text{Se duplica}`,
      String.raw`\text{Se cuadruplica}`,
      String.raw`\text{Se reduce a la mitad}`,
    ],
    ans: 1,
    exp: "De a = F/m, con m constante: a ∝ F. Si F → 2F, entonces a → 2a. Proporcionalidad directa.",
    steps: [{ pre: "", math: String.raw`a' = \frac{2F}{m} = 2 \cdot \frac{F}{m} = 2a` }],
  },
  {
    q: "Una pelota de 0.5 kg recibe una fuerza neta de 3 N. ¿Cuál es su aceleración?",
    prob: String.raw`a = \dfrac{F}{m} = \dfrac{3\,\text{N}}{0.5\,\text{kg}} = ?`,
    opts: [String.raw`1.5\,\text{m/s}^2`, String.raw`3\,\text{m/s}^2`, String.raw`6\,\text{m/s}^2`, String.raw`9\,\text{m/s}^2`],
    ans: 2,
    exp: "a = F/m = 3 / 0.5 = 6 m/s².",
    steps: [{ pre: "", math: String.raw`a = \frac{3}{0.5} = 6\,\text{m/s}^2` }],
  },
  {
    q: "Sobre un bloque de 10 kg actúan 80 N hacia la derecha y 30 N hacia la izquierda. ¿Cuál es la aceleración neta?",
    prob: String.raw`F_\text{neta} = 80 - 30 = 50\,\text{N},\quad a = \dfrac{50}{10} = ?`,
    opts: [String.raw`3\,\text{m/s}^2`, String.raw`4\,\text{m/s}^2`, String.raw`5\,\text{m/s}^2`, String.raw`8\,\text{m/s}^2`],
    ans: 2,
    exp: "Fuerza neta = 80 − 30 = 50 N. Luego a = F_neta/m = 50/10 = 5 m/s².",
    steps: [
      { pre: "Fuerza neta: ", math: String.raw`F_\text{neta} = 80 - 30 = 50\,\text{N}` },
      { pre: "Aceleración: ", math: String.raw`a = \frac{50}{10} = 5\,\text{m/s}^2` },
    ],
  },
  {
    q: "¿A qué equivale 1 Newton en unidades fundamentales del SI?",
    opts: [
      String.raw`\text{kg} \cdot \text{m/s}`,
      String.raw`\text{kg} \cdot \text{m/s}^2`,
      String.raw`\text{kg} / (\text{m} \cdot \text{s}^2)`,
      String.raw`\text{m/s}^2`,
    ],
    ans: 1,
    exp: "De F = ma: 1 N = 1 kg × 1 m/s² = 1 kg·m/s².",
    steps: [{ pre: "Unidad de fuerza: ", math: String.raw`1\,\text{N} = 1\,\text{kg}\cdot\text{m/s}^2` }],
  },
  {
    q: "Un auto de 1 200 kg frena de 20 m/s hasta detenerse en 5 segundos. ¿Cuál es la magnitud de la fuerza de frenado?",
    prob: String.raw`a = \dfrac{v_f - v_i}{\Delta t} = \dfrac{0 - 20}{5},\quad F = m\,|a|`,
    opts: [String.raw`2\,400\,\text{N}`, String.raw`4\,000\,\text{N}`, String.raw`4\,800\,\text{N}`, String.raw`6\,000\,\text{N}`],
    ans: 2,
    exp: "Aceleración: a = (0 − 20)/5 = −4 m/s². Fuerza: F = ma = 1 200 × 4 = 4 800 N.",
    steps: [
      { pre: "Aceleración de frenado: ", math: String.raw`a = \frac{0 - 20}{5} = -4\,\text{m/s}^2` },
      { pre: "Magnitud de la fuerza: ", math: String.raw`F = 1\,200 \times 4 = 4\,800\,\text{N}` },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   DATA — QUIZ LEY III Y APLICACIONES (10)
═══════════════════════════════════════════════════════════════════════════ */
const quizLeyIII = [
  {
    q: "¿Qué establece la Tercera Ley de Newton?",
    opts: [
      String.raw`\text{La fuerza es igual a la masa por la aceleración}`,
      String.raw`\text{Los objetos en reposo permanecen en reposo si no hay fuerza}`,
      String.raw`\text{A toda acción corresponde una reacción igual y opuesta en objetos distintos}`,
      String.raw`\text{La fuerza es inversamente proporcional a la distancia al cuadrado}`,
    ],
    ans: 2,
    exp: "La Tercera Ley indica que las fuerzas de acción y reacción son iguales en magnitud, opuestas en dirección, y actúan sobre objetos DISTINTOS.",
  },
  {
    q: "Al disparar un arma, el cañón retrocede. ¿Qué ley de Newton explica este fenómeno?",
    opts: [
      String.raw`\text{Primera Ley (inercia)}`,
      String.raw`\text{Segunda Ley } (F = ma)`,
      String.raw`\text{Tercera Ley (acción-reacción)}`,
      String.raw`\text{No se puede explicar con las Leyes de Newton}`,
    ],
    ans: 2,
    exp: "El disparo empuja el proyectil hacia adelante (acción) y el arma recibe una fuerza igual hacia atrás (reacción). Tercera Ley.",
  },
  {
    q: "Un atleta empuja el suelo hacia atrás con 800 N para correr. ¿Con qué fuerza empuja el suelo al atleta hacia adelante?",
    opts: [String.raw`400\,\text{N}`, String.raw`800\,\text{N}`, String.raw`1\,600\,\text{N}`, String.raw`\text{Depende de la masa del atleta}`],
    ans: 1,
    exp: "Por la Tercera Ley, la fuerza de reacción es igual en magnitud: 800 N hacia adelante.",
  },
  {
    q: "Dos bloques A (5 kg) y B (3 kg) están unidos y se empujan juntos sobre una superficie sin fricción con F = 32 N. ¿Cuál es la aceleración del sistema?",
    prob: String.raw`a = \dfrac{F}{m_A + m_B} = \dfrac{32}{5 + 3} = ?`,
    opts: [String.raw`2\,\text{m/s}^2`, String.raw`4\,\text{m/s}^2`, String.raw`6\,\text{m/s}^2`, String.raw`8\,\text{m/s}^2`],
    ans: 1,
    exp: "La fuerza actúa sobre el sistema total. a = F/(mA + mB) = 32/8 = 4 m/s².",
    steps: [{ pre: "", math: String.raw`a = \frac{32}{5 + 3} = \frac{32}{8} = 4\,\text{m/s}^2` }],
  },
  {
    q: "¿Cuál es una característica esencial del par de fuerzas de acción-reacción (Tercera Ley)?",
    opts: [
      String.raw`\text{Actúan sobre el mismo objeto}`,
      String.raw`\text{Actúan en la misma dirección}`,
      String.raw`\text{Actúan sobre objetos distintos}`,
      String.raw`\text{Solo la fuerza de acción tiene magnitud}`,
    ],
    ans: 2,
    exp: "Las fuerzas de acción y reacción SIEMPRE actúan sobre objetos diferentes. Si actuaran sobre el mismo objeto, se anularían y nada se movería.",
  },
  {
    q: "¿Cuál es la diferencia fundamental entre masa y peso?",
    opts: [
      String.raw`\text{Son sinónimos; solo difieren en unidades}`,
      String.raw`\text{La masa es cantidad de materia (kg); el peso es una fuerza (N)}`,
      String.raw`\text{La masa varía con la gravedad; el peso no}`,
      String.raw`\text{El peso se mide en kg y la masa en N}`,
    ],
    ans: 1,
    exp: "La masa es una propiedad intrínseca del objeto (kg). El peso es la fuerza gravitacional: W = mg (N). La masa no cambia; el peso sí depende de g.",
  },
  {
    q: "Un objeto pesa 490 N en la Tierra (g = 9.8 m/s²). ¿Cuánto pesaría en la Luna donde g_L = 1.6 m/s²?",
    prob: String.raw`m = \dfrac{W_T}{g_T} = \dfrac{490}{9.8},\quad W_L = m\,g_L`,
    opts: [String.raw`50\,\text{N}`, String.raw`80\,\text{N}`, String.raw`160\,\text{N}`, String.raw`490\,\text{N}`],
    ans: 1,
    exp: "Primero obtenemos la masa: m = 490/9.8 = 50 kg. Luego W_L = 50 × 1.6 = 80 N.",
    steps: [
      { pre: "Masa del objeto: ", math: String.raw`m = \frac{490}{9.8} = 50\,\text{kg}` },
      { pre: "Peso en la Luna: ", math: String.raw`W_L = 50 \times 1.6 = 80\,\text{N}` },
    ],
  },
  {
    q: "Si la masa de un objeto se reduce a la tercera parte (fuerza neta constante), ¿qué ocurre con su aceleración?",
    opts: [
      String.raw`\text{Se divide entre 3}`,
      String.raw`\text{Se mantiene igual}`,
      String.raw`\text{Se triplica}`,
      String.raw`\text{Se multiplica por 9}`,
    ],
    ans: 2,
    exp: "a = F/m. Con F constante, a ∝ 1/m. Si m → m/3, entonces a → 3a. La aceleración se triplica.",
    steps: [{ pre: "", math: String.raw`a' = \frac{F}{m/3} = 3\cdot\frac{F}{m} = 3a` }],
  },
  {
    q: "Un pasajero en un autobús que frena bruscamente se inclina hacia adelante. ¿Qué principio físico explica esto?",
    opts: [
      String.raw`\text{Segunda Ley de Newton } (F = ma)`,
      String.raw`\text{Tercera Ley de Newton (acción-reacción)}`,
      String.raw`\text{Primera Ley de Newton (inercia)}`,
      String.raw`\text{Ley de gravitación universal}`,
    ],
    ans: 2,
    exp: "El pasajero tiende a continuar con el movimiento que traía (inercia). Al frenar el autobús, el pasajero sigue hacia adelante por la Primera Ley.",
  },
  {
    q: "Sobre un objeto de 4 kg actúan tres fuerzas horizontales: 20 N al este, 8 N al oeste y 4 N al oeste. ¿Cuál es la magnitud de su aceleración?",
    prob: String.raw`F_\text{neta} = 20 - 8 - 4 = ?\,\text{N},\quad a = \dfrac{F_\text{neta}}{4\,\text{kg}}`,
    opts: [String.raw`1\,\text{m/s}^2`, String.raw`2\,\text{m/s}^2`, String.raw`3\,\text{m/s}^2`, String.raw`4\,\text{m/s}^2`],
    ans: 1,
    exp: "F_neta = 20 − 8 − 4 = 8 N (al este). a = 8/4 = 2 m/s².",
    steps: [
      { pre: "Fuerza neta: ", math: String.raw`F_\text{neta} = 20 - 8 - 4 = 8\,\text{N}` },
      { pre: "Aceleración: ", math: String.raw`a = \frac{8}{4} = 2\,\text{m/s}^2` },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════════════════ */
export default function LeyesNewton() {
  useStyles();
  useKatex();

  return (
    <div className="lr">

      {/* HERO */}
      <div className="hero">
        <div className="hero-tag">EXANI-I · Pensamiento Científico · BUAP</div>
        <h1>Leyes de Newton</h1>
        <div className="hero-math">
          <M c={String.raw`\vec{F}_\text{neta} = m\,\vec{a} \qquad W = m\,g \qquad \vec{F}_{12} = -\vec{F}_{21}`} />
        </div>
        <p>Comprende las tres leyes que gobiernan el movimiento, aplica F = ma con sus despejamientos, distingue masa de peso y domina los problemas de proporcionalidad del EXANI-I.</p>
      </div>

      <div className="cw">

        {/* ── 01 PRIMERA LEY ──────────────────────────────────────────────── */}
        <div className="section">
          <div className="sec-hd"><span className="sec-num">01</span><h2>Primera Ley — Ley de la Inercia</h2></div>

          <div className="card">
            <h3>Enunciado</h3>
            <p style={{ fontSize: 14.5, color: "#a09880", lineHeight: 1.75, fontWeight: 300, marginBottom: 16 }}>
              Todo cuerpo permanece en su estado de <strong style={{ color: "#e0dcd4" }}>reposo</strong> o de{" "}
              <strong style={{ color: "#e0dcd4" }}>movimiento rectilíneo uniforme</strong> a menos que una fuerza neta externa actúe sobre él.
            </p>
            <div className="def-grid">
              <div className="def-card">
                <div className="def-card-title">Objeto en reposo</div>
                <div className="def-card-body">
                  Si <strong style={{ color: "#e0dcd4" }}>F_neta = 0</strong> y el objeto está quieto, seguirá quieto indefinidamente.
                </div>
                <div style={{ marginTop: 10 }}><M c={String.raw`\sum \vec{F} = 0 \;\Rightarrow\; \vec{v} = 0`} /></div>
              </div>
              <div className="def-card">
                <div className="def-card-title">Objeto en movimiento</div>
                <div className="def-card-body">
                  Si <strong style={{ color: "#e0dcd4" }}>F_neta = 0</strong> y el objeto se mueve, continuará con la misma velocidad y dirección.
                </div>
                <div style={{ marginTop: 10 }}><M c={String.raw`\sum \vec{F} = 0 \;\Rightarrow\; \vec{v} = \text{cte}`} /></div>
              </div>
            </div>

            <div className="tip-box" style={{ marginTop: 18 }}>
              <div className="tip-label">Inercia — definición</div>
              <p>La <strong>inercia</strong> es la resistencia natural de un objeto a cambiar su estado de movimiento. A <strong>mayor masa → mayor inercia</strong>.</p>
              <ul style={{ marginTop: 8 }}>
                <li>Pasajero que se inclina al frenar el autobús → inercia.</li>
                <li>Moneda sobre un papel que se jala bruscamente → inercia.</li>
                <li>Cinturón de seguridad → protege ante el efecto de inercia en un choque.</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <h3>Equilibrio estático y dinámico</h3>
            <p style={{ fontSize: 14.5, color: "#a09880", lineHeight: 1.75, fontWeight: 300, marginBottom: 12 }}>
              Cuando la fuerza neta sobre un objeto es cero, decimos que está en <strong style={{ color: "#f5c842" }}>equilibrio</strong>:
            </p>
            <div className="formula-box">
              <MB c={String.raw`\sum \vec{F} = 0 \;\Leftrightarrow\; \text{Equilibrio (reposo o MRU)}`} />
            </div>
            <p style={{ fontSize: 14, color: "#7a756e", lineHeight: 1.7, marginTop: 10, fontStyle: "italic" }}>
              Ejemplo: un libro sobre la mesa está en reposo porque el peso (↓) y la normal (↑) se anulan exactamente.
            </p>
          </div>
        </div>

        <div className="divider" />

        {/* ── 02 SEGUNDA LEY ──────────────────────────────────────────────── */}
        <div className="section">
          <div className="sec-hd"><span className="sec-num">02</span><h2>Segunda Ley — F = ma</h2></div>

          <div className="card">
            <h3>Fórmula y despejamientos</h3>
            <p style={{ fontSize: 14.5, color: "#a09880", lineHeight: 1.75, fontWeight: 300, marginBottom: 16 }}>
              La aceleración de un objeto es <strong style={{ color: "#f5c842" }}>directamente proporcional</strong> a la fuerza neta e{" "}
              <strong style={{ color: "#7acfff" }}>inversamente proporcional</strong> a su masa.
            </p>
            {[
              { name: "Calcular la fuerza", label: "Cuando buscas F", eq: String.raw`F = m\,a` },
              { name: "Calcular la aceleración", label: "Cuando buscas a", eq: String.raw`a = \dfrac{F}{m}` },
              { name: "Calcular la masa", label: "Cuando buscas m", eq: String.raw`m = \dfrac{F}{a}` },
            ].map((e, i) => (
              <div className="eq-row" key={i}>
                <div className="eq-num">{i + 1}</div>
                <div className="eq-body">
                  <div className="eq-name">{e.name} · <span style={{ color: "rgba(245,200,66,0.55)", fontSize: 12 }}>({e.label})</span></div>
                  <MB c={e.eq} />
                </div>
              </div>
            ))}

            <table style={{ marginTop: 16 }}>
              <thead><tr><th>Símbolo</th><th>Significado</th><th>Unidad SI</th></tr></thead>
              <tbody>
                {[
                  [String.raw`F`, "Fuerza neta", "N (Newton)"],
                  [String.raw`m`, "Masa", "kg"],
                  [String.raw`a`, "Aceleración", "m/s²"],
                  [String.raw`1\,\text{N}`, "Equivalencia", "kg·m/s²"],
                ].map(([sym, desc, unit]) => (
                  <tr key={sym}><td><M c={sym} /></td><td>{desc}</td><td>{unit}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card">
            <h3>Gráfica F vs. a — proporcionalidad directa</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "center" }}>
              <GraficaLineal
                xLabel="Fuerza F (N)" yLabel="a (m/s²)"
                xRange={[0, 50]} yRange={[0, 10]}
                xTicks={[0, 10, 20, 30, 40, 50]} yTicks={[0, 2, 4, 6, 8, 10]}
                lines={[[[0, 0], [50, 10]]]}
                points={[[25, 5, "(25, 5)"], [50, 10, "(50, 10)"]]}
                note="m = 5 kg constante. Mayor F → mayor a"
              />
              <div>
                <div style={{ fontSize: 14, color: "#a09880", lineHeight: 1.8 }}>
                  <div style={{ marginBottom: 8 }}><span className="prop-tag prop-dir">F↑ → a↑</span> con m = cte (directa)</div>
                  <div style={{ marginBottom: 8 }}><span className="prop-tag prop-inv">m↑ → a↓</span> con F = cte (inversa)</div>
                </div>
                <div style={{ marginTop: 14, fontSize: 13, color: "#6a6560" }}>
                  Si F se multiplica por <strong style={{ color: "#a09880" }}>k</strong>, la aceleración también se multiplica por <strong style={{ color: "#a09880" }}>k</strong>.
                  Si m se multiplica por <strong style={{ color: "#a09880" }}>k</strong>, la aceleración se <em>divide</em> entre <strong style={{ color: "#a09880" }}>k</strong>.
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Fuerza neta con varias fuerzas</h3>
            <p style={{ fontSize: 14.5, color: "#a09880", lineHeight: 1.75, fontWeight: 300, marginBottom: 12 }}>
              Cuando actúan múltiples fuerzas, primero calcula la <strong style={{ color: "#e0dcd4" }}>fuerza neta</strong> y luego aplica F_neta = ma.
            </p>
            <div className="formula-box">
              <MB c={String.raw`F_\text{neta} = \sum \vec{F}_i \;\Rightarrow\; a = \dfrac{F_\text{neta}}{m}`} />
            </div>
            <div className="tip-box">
              <div className="tip-label">Truco EXANI-I</div>
              <p>Para fuerzas en línea recta: define un sentido positivo (+), suma las fuerzas en ese sentido y resta las del sentido contrario. Si F_neta {">"} 0, el objeto acelera en el sentido positivo. Si F_neta = 0, equilibrio.</p>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* ── 03 TERCERA LEY ──────────────────────────────────────────────── */}
        <div className="section">
          <div className="sec-hd"><span className="sec-num">03</span><h2>Tercera Ley — Acción y Reacción</h2></div>

          <div className="card">
            <h3>Enunciado</h3>
            <p style={{ fontSize: 14.5, color: "#a09880", lineHeight: 1.75, fontWeight: 300, marginBottom: 16 }}>
              A toda <strong style={{ color: "#f5c842" }}>fuerza de acción</strong> le corresponde una{" "}
              <strong style={{ color: "#7acfff" }}>fuerza de reacción</strong> de igual magnitud y dirección opuesta,{" "}
              que actúa sobre un <strong style={{ color: "#e0dcd4" }}>objeto diferente</strong>.
            </p>
            <div className="formula-box">
              <MB c={String.raw`\vec{F}_{A \to B} = -\vec{F}_{B \to A}`} />
            </div>

            <div className="def-grid" style={{ marginTop: 16 }}>
              <div className="def-card">
                <div className="def-card-title">Características del par</div>
                <div className="def-card-body">
                  <ul style={{ paddingLeft: 16, lineHeight: 2 }}>
                    <li>Igual magnitud</li>
                    <li>Dirección opuesta</li>
                    <li>Misma línea de acción</li>
                    <li>Actúan en objetos <strong style={{ color: "#e0dcd4" }}>distintos</strong></li>
                  </ul>
                </div>
              </div>
              <div className="def-card">
                <div className="def-card-title">Ejemplos cotidianos</div>
                <div className="def-card-body">
                  <ul style={{ paddingLeft: 16, lineHeight: 2 }}>
                    <li>Cohete: gases ↓ → cohete ↑</li>
                    <li>Remo: remo empuja agua → agua empuja bote</li>
                    <li>Disparo: proyectil ↑ → retroceso ↓</li>
                    <li>Nadar: brazos empujan agua → agua empuja nadador</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="tip-box" style={{ marginTop: 16 }}>
              <div className="tip-label">⚠ Trampa clásica del EXANI-I</div>
              <p>El peso de un objeto y la fuerza normal de la superficie <strong>NO son par acción-reacción</strong>: ambas fuerzas actúan sobre el mismo objeto (el libro). El par correcto es: la Tierra atrae al libro ↔ el libro atrae a la Tierra.</p>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* ── 04 FUERZAS COMUNES Y DIAGRAMAS ─────────────────────────────── */}
        <div className="section">
          <div className="sec-hd"><span className="sec-num">04</span><h2>Fuerzas Comunes y Diagrama de Cuerpo Libre</h2></div>

          <div className="card">
            <h3>Diagrama de cuerpo libre (DCL)</h3>
            <p style={{ fontSize: 14.5, color: "#a09880", lineHeight: 1.75, fontWeight: 300, marginBottom: 14 }}>
              Un DCL representa todas las fuerzas externas que actúan sobre un objeto. Es la herramienta clave para aplicar F = ma.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "center" }}>
              <FBDiagram
                showNormal showPeso showFuerza showFriccion
                masa="m"
                note="Bloque con N, W, fuerza aplicada F y fricción f"
              />
              <div>
                <div style={{ fontSize: 14, color: "#a09880", lineHeight: 2 }}>
                  <div><span style={{ color: "#7acfff", fontWeight: 600 }}>N ↑</span> — Normal (perpendicular a la superficie)</div>
                  <div><span style={{ color: "#f08080", fontWeight: 600 }}>W ↓</span> — Peso: <M c={String.raw`W = mg`} /></div>
                  <div><span style={{ color: "#f5c842", fontWeight: 600 }}>F →</span> — Fuerza aplicada</div>
                  <div><span style={{ color: "#c8b0ff", fontWeight: 600 }}>f ←</span> — Fricción (se opone al movimiento)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Tabla de fuerzas comunes</h3>
            <table>
              <thead>
                <tr><th>Fuerza</th><th>Símbolo</th><th>Fórmula</th><th>Dirección</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Peso</strong></td>
                  <td><M c={String.raw`W`} /></td>
                  <td><M c={String.raw`W = mg`} /></td>
                  <td>Siempre hacia abajo (↓)</td>
                </tr>
                <tr>
                  <td><strong>Normal</strong></td>
                  <td><M c={String.raw`N`} /></td>
                  <td>Varía según la situación</td>
                  <td>Perpendicular a la superficie (↑)</td>
                </tr>
                <tr>
                  <td><strong>Fricción</strong></td>
                  <td><M c={String.raw`f`} /></td>
                  <td><M c={String.raw`f = \mu N`} /></td>
                  <td>Opuesta al movimiento</td>
                </tr>
                <tr>
                  <td><strong>Tensión</strong></td>
                  <td><M c={String.raw`T`} /></td>
                  <td>Transmitida por cuerda</td>
                  <td>A lo largo de la cuerda (↑ o →)</td>
                </tr>
              </tbody>
            </table>
            <div className="tip-box">
              <div className="tip-label">Sobre una superficie horizontal sin fricción</div>
              <p>La normal iguala al peso: <M c={String.raw`N = W = mg`} />. La única fuerza neta horizontal es la fuerza aplicada: <M c={String.raw`a = F/m`} />.</p>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* ── 05 EJEMPLOS ──────────────────────────────────────────────────── */}
        <div className="section">
          <div className="sec-hd"><span className="sec-num">05</span><h2>Ejemplos resueltos</h2></div>
          <p className="hint">Haz clic en cada tarjeta para ver el desarrollo paso a paso.</p>
          <div className="ex-grid">
            {ejemplos.map((ej, i) => <EjCard key={i} ej={ej} idx={i} />)}
          </div>
        </div>

        <div className="divider" />

        {/* ── 06 QUIZ LEYES I Y II ─────────────────────────────────────────── */}
        <QuizSection
          questions={quizLeyesI_II}
          title="Cuestionario — Primera y Segunda Ley"
          secNum="06"
        />

        <div className="divider" />

        {/* ── 07 QUIZ LEY III Y APLICACIONES ──────────────────────────────── */}
        <QuizSection
          questions={quizLeyIII}
          title="Cuestionario — Tercera Ley y Aplicaciones"
          secNum="07"
        />

        {/* ── RESUMEN RÁPIDO ────────────────────────────────────────────────── */}
        <div className="divider" />
        <div className="card" style={{ borderColor: "rgba(245,200,66,0.2)" }}>
          <h3>Resumen rápido para el examen</h3>
          <table style={{ marginTop: 10 }}>
            <thead><tr><th>Ley / Concepto</th><th>Fórmula clave</th><th>Truco EXANI-I</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>Primera Ley</strong></td>
                <td><M c={String.raw`\sum F = 0 \Rightarrow v = \text{cte}`} /></td>
                <td>Inercia = resistencia al cambio</td>
              </tr>
              <tr>
                <td><strong>Segunda Ley</strong></td>
                <td><M c={String.raw`F = m\,a`} /></td>
                <td>F↑ → a↑ ; m↑ → a↓</td>
              </tr>
              <tr>
                <td><strong>Tercera Ley</strong></td>
                <td><M c={String.raw`F_{AB} = -F_{BA}`} /></td>
                <td>Actúan en objetos DISTINTOS</td>
              </tr>
              <tr>
                <td><strong>Peso</strong></td>
                <td><M c={String.raw`W = m\,g`} /></td>
                <td>N en la Tierra, diferente en Luna</td>
              </tr>
              <tr>
                <td><strong>Fuerza neta</strong></td>
                <td><M c={String.raw`F_\text{neta} = \sum \vec{F}`} /></td>
                <td>Define sentido + y resta fuerzas −</td>
              </tr>
              <tr>
                <td><strong>Prop. directa</strong></td>
                <td><M c={String.raw`a \propto F`} /> (m cte)</td>
                <td>F × k → a × k</td>
              </tr>
              <tr>
                <td><strong>Prop. inversa</strong></td>
                <td><M c={String.raw`a \propto \tfrac{1}{m}`} /> (F cte)</td>
                <td>m × k → a ÷ k</td>
              </tr>
              <tr>
                <td><strong>1 Newton</strong></td>
                <td><M c={String.raw`1\,\text{N} = 1\,\text{kg·m/s}^2`} /></td>
                <td>Unidad de fuerza en el SI</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
