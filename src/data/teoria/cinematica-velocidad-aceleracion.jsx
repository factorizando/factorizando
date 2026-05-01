import { useState, useEffect } from "react";

/* ═══════════════════════════════════════════════════════════════════════════
   STYLES
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
   GRAFICA LINEAL (SVG genérico reutilizable)
═══════════════════════════════════════════════════════════════════════════ */
function GraficaLineal({ xLabel, yLabel, xRange, yRange, xTicks, yTicks, lines, points = [], note }) {
  const W = 260, H = 180, L = 46, T = 12, R = 14, B = 34;
  const pw = W - L - R, ph = H - T - B;
  const toX = v => L + (v - xRange[0]) / (xRange[1] - xRange[0]) * pw;
  const toY = v => H - B - (v - yRange[0]) / (yRange[1] - yRange[0]) * ph;

  return (
    <div style={{ textAlign: "center" }}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", maxWidth: 260, background: "rgba(0,0,0,0.35)", borderRadius: 8, display: "block", margin: "0 auto" }}>
        {/* grid */}
        {xTicks.filter(t => t > xRange[0]).map(t => (
          <line key={`gx${t}`} x1={toX(t)} y1={T} x2={toX(t)} y2={H - B} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        ))}
        {yTicks.filter(v => v > yRange[0]).map(v => (
          <line key={`gy${v}`} x1={L} y1={toY(v)} x2={W - R} y2={toY(v)} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        ))}
        {/* axes */}
        <line x1={L} y1={T} x2={L} y2={H - B} stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
        <line x1={L} y1={H - B} x2={W - R} y2={H - B} stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
        {/* data lines */}
        {lines.map((seg, i) => (
          <line key={i} x1={toX(seg[0][0])} y1={toY(seg[0][1])} x2={toX(seg[1][0])} y2={toY(seg[1][1])}
            stroke={seg[2] || "#f5c842"} strokeWidth="2.5" strokeLinecap="round" />
        ))}
        {/* x tick labels */}
        {xTicks.map(t => (
          <g key={`xtl${t}`}>
            <line x1={toX(t)} y1={H - B} x2={toX(t)} y2={H - B + 4} stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <text x={toX(t)} y={H - B + 15} textAnchor="middle" fontSize="9.5" fill="rgba(255,255,255,0.45)">{t}</text>
          </g>
        ))}
        {/* y tick labels */}
        {yTicks.map(v => (
          <g key={`ytl${v}`}>
            <line x1={L - 4} y1={toY(v)} x2={L} y2={toY(v)} stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <text x={L - 7} y={toY(v) + 3.5} textAnchor="end" fontSize="9.5" fill="rgba(255,255,255,0.45)">{v}</text>
          </g>
        ))}
        {/* axis labels */}
        <text x={(L + W - R) / 2} y={H - 2} textAnchor="middle" fontSize="10" fill="rgba(245,200,66,0.65)">{xLabel}</text>
        <text x={9} y={(T + H - B) / 2} textAnchor="middle" fontSize="10" fill="rgba(245,200,66,0.65)"
          transform={`rotate(-90,9,${(T + H - B) / 2})`}>{yLabel}</text>
        {/* highlighted points */}
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

      {/* gráfica siempre visible si la hay */}
      {ej.graph && (
        <div style={{ padding: "0 18px 14px" }}>{ej.graph()}</div>
      )}

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
      {q.graph && <div style={{ marginBottom: 12 }}>{q.graph()}</div>}
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
    tipo: "Velocidad",
    titulo: "Velocidad media — cálculo directo",
    prob: String.raw`\text{Un ciclista recorre } 135 \text{ km en } 3 \text{ h. ¿Cuál es su velocidad media?}`,
    steps: [
      { pre: "Identificamos los datos: ", math: String.raw`\Delta x = 135\,\text{km},\quad \Delta t = 3\,\text{h}` },
      { pre: "Aplicamos la fórmula: ", math: String.raw`\bar{v} = \dfrac{\Delta x}{\Delta t} = \dfrac{135\,\text{km}}{3\,\text{h}}` },
    ],
    res: String.raw`\bar{v} = 45\,\text{km/h}`,
  },
  {
    tipo: "Conversión",
    titulo: "Conversión km/h ↔ m/s",
    prob: String.raw`\text{Convierte } 108\,\text{km/h a m/s}`,
    steps: [
      { pre: "Factor de conversión: ", math: String.raw`1\,\frac{\text{km}}{\text{h}} = \frac{1000\,\text{m}}{3600\,\text{s}} = \frac{1}{3.6}\,\frac{\text{m}}{\text{s}}` },
      { pre: "Dividimos entre 3.6: ", math: String.raw`108 \div 3.6 = 30` },
      { pre: "Truco rápido EXANI-I: km/h ÷ 3.6 = m/s  |  m/s × 3.6 = km/h" },
    ],
    res: String.raw`108\,\text{km/h} = 30\,\text{m/s}`,
  },
  {
    tipo: "Proporcionalidad",
    titulo: "Velocidad–tiempo: proporción inversa",
    prob: String.raw`\text{A 60 km/h un trayecto dura 4 h. ¿Cuánto dura a 80 km/h?}`,
    steps: [
      { pre: "Misma distancia → mayor velocidad = menor tiempo: proporción inversa." },
      { pre: "Planteamos: ", math: String.raw`v_1 \cdot t_1 = v_2 \cdot t_2 \;\Rightarrow\; 60 \times 4 = 80 \times t_2` },
      { pre: "Despejamos: ", math: String.raw`t_2 = \dfrac{240}{80} = 3\,\text{h}` },
      { pre: "Truco: razón de velocidades = razón inversa de tiempos: ", math: String.raw`\frac{t_2}{t_1}=\frac{v_1}{v_2}=\frac{60}{80}=\frac{3}{4}` },
    ],
    res: String.raw`t_2 = 3\,\text{h}`,
    nota: "Si la velocidad aumenta en un factor k, el tiempo disminuye en el mismo factor k.",
  },
  {
    tipo: "Gráfica d–t",
    titulo: "Leer velocidad en una gráfica posición–tiempo",
    graph: () => (
      <GraficaLineal
        xLabel="Tiempo (h)" yLabel="Posición (km)"
        xRange={[0, 3]} yRange={[0, 240]}
        xTicks={[0, 1, 2, 3]} yTicks={[0, 80, 160, 240]}
        lines={[[[0, 0], [3, 240]]]}
        points={[[1, 80, "(1, 80)"], [3, 240, "(3, 240)"]]}
        note="La pendiente de la recta = velocidad"
      />
    ),
    prob: String.raw`\text{La recta pasa por }(1\,\text{h},\;80\,\text{km})\text{ y }(3\,\text{h},\;240\,\text{km}).\text{ ¿Cuál es la velocidad?}`,
    steps: [
      { pre: "En una gráfica d–t, la pendiente representa la velocidad:" },
      { pre: "", math: String.raw`v = \text{pendiente} = \frac{\Delta x}{\Delta t} = \frac{240 - 80}{3 - 1} = \frac{160}{2}` },
    ],
    res: String.raw`v = 80\,\text{km/h}`,
    nota: "En MUR (movimiento uniforme rectilíneo) la gráfica d–t es una línea recta. Mayor pendiente = mayor velocidad.",
  },
  {
    tipo: "Aceleración",
    titulo: "Aceleración — cálculo directo",
    prob: String.raw`\text{Un auto aumenta su velocidad de }10\,\text{m/s a }34\,\text{m/s en }6\,\text{s.}`,
    steps: [
      { pre: "Datos: ", math: String.raw`v_i=10\,\text{m/s},\quad v_f=34\,\text{m/s},\quad \Delta t=6\,\text{s}` },
      { pre: "Fórmula: ", math: String.raw`a = \frac{\Delta v}{\Delta t} = \frac{v_f - v_i}{\Delta t} = \frac{34-10}{6} = \frac{24}{6}` },
    ],
    res: String.raw`a = 4\,\text{m/s}^2`,
  },
  {
    tipo: "MUA",
    titulo: "Distancia en MUA (partiendo del reposo)",
    prob: String.raw`v_0=0,\quad a=6\,\text{m/s}^2,\quad t=5\,\text{s}.\quad \text{¿Cuánto recorre?}`,
    steps: [
      { pre: "Usamos la ecuación del desplazamiento en MUA:" },
      { pre: "", math: String.raw`x = v_0\,t + \tfrac{1}{2}\,a\,t^2 = 0 + \tfrac{1}{2}(6)(5^2)` },
      { pre: "", math: String.raw`x = 3 \times 25 = 75\,\text{m}` },
    ],
    res: String.raw`x = 75\,\text{m}`,
  },
  {
    tipo: "Proporcionalidad",
    titulo: "MUA — efecto de duplicar el tiempo",
    prob: String.raw`v_0 = 0,\; a = \text{cte.}\text{ Si el tiempo se duplica, ¿cómo cambia la distancia?}`,
    steps: [
      { pre: "Con v₀ = 0: ", math: String.raw`x = \tfrac{1}{2}\,a\,t^2 \;\Rightarrow\; x \propto t^2` },
      { pre: "Si t se duplica (t → 2t):" },
      { pre: "", math: String.raw`x' = \tfrac{1}{2}\,a\,(2t)^2 = \tfrac{1}{2}\,a\,\cdot\, 4t^2 = 4x` },
      { pre: "Truco EXANI-I: factor de tiempo elevado al cuadrado = factor de distancia." },
    ],
    res: String.raw`x' = 4x\;\text{(la distancia se cuadruplica)}`,
    nota: "Si t → 3t, entonces x → 9x. Si t → 4t, entonces x → 16x. La relación es cuadrática.",
  },
  {
    tipo: "Gráfica v–t",
    titulo: "Leer aceleración en una gráfica velocidad–tiempo",
    graph: () => (
      <GraficaLineal
        xLabel="Tiempo (s)" yLabel="Velocidad (m/s)"
        xRange={[0, 6]} yRange={[0, 18]}
        xTicks={[0, 2, 4, 6]} yTicks={[0, 6, 12, 18]}
        lines={[[[0, 0], [6, 18]]]}
        points={[[2, 6, "(2, 6)"], [6, 18, "(6, 18)"]]}
        note="La pendiente de la recta = aceleración"
      />
    ),
    prob: String.raw`\text{La recta pasa por }(2\,\text{s},\;6\,\text{m/s})\text{ y }(6\,\text{s},\;18\,\text{m/s}).\text{ ¿Cuál es la aceleración?}`,
    steps: [
      { pre: "En una gráfica v–t, la pendiente es la aceleración:" },
      { pre: "", math: String.raw`a = \frac{\Delta v}{\Delta t} = \frac{18 - 6}{6 - 2} = \frac{12}{4}` },
      { pre: "Área bajo la curva v–t = desplazamiento total." },
    ],
    res: String.raw`a = 3\,\text{m/s}^2`,
    nota: "En MRUV (MUA), la gráfica v–t es siempre una línea recta. Recta con pendiente positiva = objeto acelera; negativa = frena.",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   DATA — QUIZ VELOCIDAD (10)
═══════════════════════════════════════════════════════════════════════════ */
const quizVelocidad = [
  {
    q: "Un automóvil recorre 360 km en 4 horas. ¿Cuál es su velocidad media?",
    prob: String.raw`\bar{v} = \dfrac{360\,\text{km}}{4\,\text{h}} = ?`,
    opts: [String.raw`70\,\text{km/h}`, String.raw`80\,\text{km/h}`, String.raw`90\,\text{km/h}`, String.raw`100\,\text{km/h}`],
    ans: 2,
    exp: "v = Δx / Δt = 360 / 4 = 90 km/h.",
    steps: [{ pre: "Aplicamos la fórmula directamente: ", math: String.raw`\bar{v} = \frac{360}{4} = 90\,\text{km/h}` }],
  },
  {
    q: "¿Cuántos metros por segundo equivalen a 126 km/h?",
    prob: String.raw`126\,\frac{\text{km}}{\text{h}} = ?\,\frac{\text{m}}{\text{s}}`,
    opts: [String.raw`30\,\text{m/s}`, String.raw`35\,\text{m/s}`, String.raw`40\,\text{m/s}`, String.raw`45\,\text{m/s}`],
    ans: 1,
    exp: "Dividimos entre 3.6: 126 ÷ 3.6 = 35 m/s.",
    steps: [{ pre: "Truco: km/h ÷ 3.6 = m/s → ", math: String.raw`126 \div 3.6 = 35\,\text{m/s}` }],
  },
  {
    q: "Un avión vuela a 900 km/h. ¿Qué distancia recorre en 40 minutos?",
    prob: String.raw`v = 900\,\text{km/h}, \quad t = 40\,\text{min} = \tfrac{2}{3}\,\text{h}`,
    opts: [String.raw`500\,\text{km}`, String.raw`550\,\text{km}`, String.raw`600\,\text{km}`, String.raw`650\,\text{km}`],
    ans: 2,
    exp: "Convertimos 40 min = 2/3 h. Luego d = 900 × (2/3) = 600 km.",
    steps: [
      { pre: "Convertimos el tiempo: ", math: String.raw`40\,\text{min} = \tfrac{40}{60}\,\text{h} = \tfrac{2}{3}\,\text{h}` },
      { pre: "Calculamos la distancia: ", math: String.raw`d = v \cdot t = 900 \times \tfrac{2}{3} = 600\,\text{km}` },
    ],
  },
  {
    q: "¿Cuánto tiempo tarda un corredor en recorrer 400 m a una velocidad de 8 m/s?",
    prob: String.raw`t = \dfrac{\Delta x}{v} = \dfrac{400\,\text{m}}{8\,\text{m/s}} = ?`,
    opts: [String.raw`40\,\text{s}`, String.raw`45\,\text{s}`, String.raw`50\,\text{s}`, String.raw`55\,\text{s}`],
    ans: 2,
    exp: "t = Δx / v = 400 / 8 = 50 s.",
    steps: [{ pre: "Despejamos t de la fórmula: ", math: String.raw`t = \frac{400}{8} = 50\,\text{s}` }],
  },
  {
    q: "A 60 km/h un viaje dura 4 horas. ¿Cuánto dura el mismo viaje a 80 km/h?",
    prob: String.raw`60\,\text{km/h}\times 4\,\text{h} = 80\,\text{km/h}\times t_2`,
    opts: [String.raw`2.5\,\text{h}`, String.raw`3\,\text{h}`, String.raw`3.5\,\text{h}`, String.raw`4.5\,\text{h}`],
    ans: 1,
    exp: "Proporción inversa: v₁t₁ = v₂t₂ → t₂ = (60×4)/80 = 240/80 = 3 h.",
    steps: [
      { pre: "Mayor velocidad → menor tiempo: proporción inversa." },
      { pre: "", math: String.raw`t_2 = \frac{v_1 \cdot t_1}{v_2} = \frac{60 \times 4}{80} = 3\,\text{h}` },
    ],
  },
  {
    q: "La gráfica muestra la posición de un objeto respecto al tiempo. ¿Cuál es su velocidad?",
    graph: () => (
      <GraficaLineal
        xLabel="Tiempo (s)" yLabel="Posición (m)"
        xRange={[0, 4]} yRange={[0, 120]}
        xTicks={[0, 1, 2, 3, 4]} yTicks={[0, 30, 60, 90, 120]}
        lines={[[[0, 0], [4, 120]]]}
        points={[[1, 30, "(1, 30)"], [4, 120, "(4, 120)"]]}
      />
    ),
    opts: [String.raw`20\,\text{m/s}`, String.raw`25\,\text{m/s}`, String.raw`30\,\text{m/s}`, String.raw`35\,\text{m/s}`],
    ans: 2,
    exp: "La velocidad es la pendiente de la recta: v = Δx/Δt = (120-0)/(4-0) = 30 m/s.",
    steps: [{ pre: "Pendiente = velocidad: ", math: String.raw`v = \frac{120 - 0}{4 - 0} = \frac{120}{4} = 30\,\text{m/s}` }],
  },
  {
    q: "Si la distancia se triplica y la velocidad se mantiene constante, ¿qué ocurre con el tiempo?",
    opts: [String.raw`\text{Se mantiene igual}`, String.raw`\text{Se divide entre 3}`, String.raw`\text{Se duplica}`, String.raw`\text{Se triplica}`],
    ans: 3,
    exp: "Con v = cte, d ∝ t (proporción directa). Si d → 3d, entonces t → 3t.",
    steps: [{ pre: "De v = d/t → t = d/v. Con v fija: si d se triplica, t también se triplica." }],
  },
  {
    q: "¿Cuál de estas opciones NO es una unidad de velocidad?",
    opts: [String.raw`\text{m/s}`, String.raw`\text{km/h}`, String.raw`\text{m/s}^2`, String.raw`\text{cm/s}`],
    ans: 2,
    exp: "m/s² es la unidad de aceleración, no de velocidad.",
    steps: [{ pre: "Velocidad = distancia/tiempo → m/s, km/h, cm/s. El m/s² corresponde a aceleración." }],
  },
  {
    q: "Un móvil A tarda 6 h en un trayecto; el móvil B lo hace en 4 h. ¿Cuántas veces es mayor la velocidad de B que la de A?",
    prob: String.raw`\frac{v_B}{v_A} = ?`,
    opts: [String.raw`1.25`, String.raw`1.5`, String.raw`2`, String.raw`2.5`],
    ans: 1,
    exp: "Misma distancia → velocidad inversamente proporcional al tiempo: vB/vA = tA/tB = 6/4 = 1.5.",
    steps: [
      { pre: "Con d fija: v = d/t, entonces", math: String.raw`\frac{v_B}{v_A} = \frac{t_A}{t_B} = \frac{6}{4} = 1.5` },
    ],
  },
  {
    q: "Un tren sale de la ciudad A a 80 km/h. Otro tren sale al mismo tiempo desde la ciudad B (a 360 km de distancia) a 100 km/h, en sentido contrario. ¿En cuántas horas se encuentran?",
    prob: String.raw`d_A + d_B = 360\,\text{km},\quad v_A=80,\; v_B=100`,
    opts: [String.raw`1.5\,\text{h}`, String.raw`2\,\text{h}`, String.raw`2.5\,\text{h}`, String.raw`3\,\text{h}`],
    ans: 0,
    exp: "Se acercan a 180 km/h en total. t = 360/180 = 2... espera, suman 80+100=180 km/h. t = 360/180 = 2 h. Pero la respuesta es 2h, opción B.",
    steps: [
      { pre: "Velocidad de acercamiento: ", math: String.raw`v_{total} = 80 + 100 = 180\,\text{km/h}` },
      { pre: "Tiempo de encuentro: ", math: String.raw`t = \frac{360}{180} = 2\,\text{h}` },
    ],
    ans: 1,
    exp: "Las velocidades se suman porque van en sentido contrario: 80 + 100 = 180 km/h. Tiempo = 360/180 = 2 h.",
  },
];

/* Corregir pregunta 10 */
quizVelocidad[9] = {
  q: "Un tren sale de A a 80 km/h. Otro sale simultáneamente desde B (360 km de distancia) a 100 km/h, en sentido contrario. ¿En cuántas horas se encuentran?",
  prob: String.raw`v_A + v_B = \text{velocidad de acercamiento},\quad d = 360\,\text{km}`,
  opts: [String.raw`1.5\,\text{h}`, String.raw`2\,\text{h}`, String.raw`2.5\,\text{h}`, String.raw`3\,\text{h}`],
  ans: 1,
  exp: "Los trenes se acercan a 80 + 100 = 180 km/h. Tiempo = 360 / 180 = 2 h.",
  steps: [
    { pre: "Velocidad de acercamiento: ", math: String.raw`80 + 100 = 180\,\text{km/h}` },
    { pre: "Tiempo: ", math: String.raw`t = \frac{360\,\text{km}}{180\,\text{km/h}} = 2\,\text{h}` },
  ],
};

/* ═══════════════════════════════════════════════════════════════════════════
   DATA — QUIZ ACELERACIÓN (10)
═══════════════════════════════════════════════════════════════════════════ */
const quizAceleracion = [
  {
    q: "Un objeto aumenta su velocidad de 10 m/s a 34 m/s en 6 segundos. ¿Cuál es su aceleración?",
    prob: String.raw`a = \dfrac{v_f - v_i}{\Delta t} = \dfrac{34 - 10}{6} = ?`,
    opts: [String.raw`2\,\text{m/s}^2`, String.raw`3\,\text{m/s}^2`, String.raw`4\,\text{m/s}^2`, String.raw`6\,\text{m/s}^2`],
    ans: 2,
    exp: "a = (34 − 10)/6 = 24/6 = 4 m/s².",
    steps: [{ pre: "Aplicamos directamente: ", math: String.raw`a = \frac{34 - 10}{6} = \frac{24}{6} = 4\,\text{m/s}^2` }],
  },
  {
    q: "Un objeto parte del reposo con aceleración constante de 5 m/s². ¿Cuál es su velocidad a los 8 segundos?",
    prob: String.raw`v_f = v_i + a\,t = 0 + 5 \times 8`,
    opts: [String.raw`30\,\text{m/s}`, String.raw`35\,\text{m/s}`, String.raw`40\,\text{m/s}`, String.raw`45\,\text{m/s}`],
    ans: 2,
    exp: "vf = 0 + 5 × 8 = 40 m/s.",
    steps: [{ pre: "", math: String.raw`v_f = 0 + 5 \times 8 = 40\,\text{m/s}` }],
  },
  {
    q: "Un vehículo frena de 20 m/s hasta detenerse en 5 segundos. ¿Cuál es su aceleración?",
    prob: String.raw`a = \dfrac{0 - 20}{5} = ?`,
    opts: [String.raw`-2\,\text{m/s}^2`, String.raw`-4\,\text{m/s}^2`, String.raw`-5\,\text{m/s}^2`, String.raw`-8\,\text{m/s}^2`],
    ans: 1,
    exp: "a = (0 − 20)/5 = −4 m/s². El signo negativo indica desaceleración.",
    steps: [{ pre: "", math: String.raw`a = \frac{v_f - v_i}{\Delta t} = \frac{0 - 20}{5} = -4\,\text{m/s}^2` }],
  },
  {
    q: "La gráfica muestra la velocidad de un objeto respecto al tiempo. ¿Cuál es su aceleración?",
    graph: () => (
      <GraficaLineal
        xLabel="Tiempo (s)" yLabel="Velocidad (m/s)"
        xRange={[0, 6]} yRange={[0, 20]}
        xTicks={[0, 2, 4, 6]} yTicks={[0, 5, 10, 15, 20]}
        lines={[[[0, 2], [6, 20]]]}
        points={[[0, 2, "(0, 2)"], [6, 20, "(6, 20)"]]}
      />
    ),
    opts: [String.raw`2\,\text{m/s}^2`, String.raw`3\,\text{m/s}^2`, String.raw`4\,\text{m/s}^2`, String.raw`6\,\text{m/s}^2`],
    ans: 1,
    exp: "La aceleración es la pendiente: a = (20 − 2)/(6 − 0) = 18/6 = 3 m/s².",
    steps: [{ pre: "Pendiente de la recta v–t: ", math: String.raw`a = \frac{20 - 2}{6 - 0} = \frac{18}{6} = 3\,\text{m/s}^2` }],
  },
  {
    q: "Un objeto parte del reposo con a = 2 m/s². ¿Qué distancia recorre en 5 segundos?",
    prob: String.raw`x = v_0 t + \tfrac{1}{2}a t^2 = 0 + \tfrac{1}{2}(2)(5^2)`,
    opts: [String.raw`20\,\text{m}`, String.raw`25\,\text{m}`, String.raw`30\,\text{m}`, String.raw`35\,\text{m}`],
    ans: 1,
    exp: "x = ½ × 2 × 25 = 25 m.",
    steps: [{ pre: "", math: String.raw`x = \tfrac{1}{2}(2)(25) = 25\,\text{m}` }],
  },
  {
    q: "Un objeto tiene v₀ = 5 m/s y aceleración a = 3 m/s². ¿Cuál es su velocidad final después de 7 segundos?",
    prob: String.raw`v_f = v_0 + a\,t = 5 + 3 \times 7`,
    opts: [String.raw`20\,\text{m/s}`, String.raw`24\,\text{m/s}`, String.raw`26\,\text{m/s}`, String.raw`30\,\text{m/s}`],
    ans: 2,
    exp: "vf = 5 + 3 × 7 = 5 + 21 = 26 m/s.",
    steps: [{ pre: "", math: String.raw`v_f = 5 + 3 \times 7 = 5 + 21 = 26\,\text{m/s}` }],
  },
  {
    q: "Un objeto parte del reposo y recorre 45 m con a = 10 m/s². ¿Cuál es su velocidad final?",
    prob: String.raw`v_f^2 = v_0^2 + 2\,a\,\Delta x = 0 + 2(10)(45)`,
    opts: [String.raw`20\,\text{m/s}`, String.raw`25\,\text{m/s}`, String.raw`30\,\text{m/s}`, String.raw`35\,\text{m/s}`],
    ans: 2,
    exp: "vf² = 0 + 2 × 10 × 45 = 900 → vf = 30 m/s.",
    steps: [
      { pre: "", math: String.raw`v_f^2 = 2(10)(45) = 900` },
      { pre: "", math: String.raw`v_f = \sqrt{900} = 30\,\text{m/s}` },
    ],
  },
  {
    q: "Con v₀ = 0 y a constante, si el tiempo de viaje se triplica, ¿cómo cambia la distancia recorrida?",
    opts: [String.raw`\text{Se triplica}`, String.raw`\text{Se multiplica por 6}`, String.raw`\text{Se multiplica por 9}`, String.raw`\text{Se multiplica por 12}`],
    ans: 2,
    exp: "x = ½at². Si t → 3t: x' = ½a(3t)² = 9·(½at²) = 9x. La distancia se multiplica por 9.",
    steps: [
      { pre: "Con v₀ = 0: ", math: String.raw`x = \tfrac{1}{2}at^2 \;\Rightarrow\; x \propto t^2` },
      { pre: "Si t → 3t: ", math: String.raw`x' = \tfrac{1}{2}a(3t)^2 = 9 \cdot \tfrac{1}{2}at^2 = 9x` },
    ],
  },
  {
    q: "¿Cuál es la unidad de aceleración en el Sistema Internacional (SI)?",
    opts: [String.raw`\text{m/s}`, String.raw`\text{km/h}^2`, String.raw`\text{m/s}^2`, String.raw`\text{N}\cdot\text{s}`],
    ans: 2,
    exp: "La aceleración = Δv/Δt → (m/s)/s = m/s². Esta es la unidad del SI.",
    steps: [{ pre: "Aceleración: ", math: String.raw`a = \frac{\Delta v}{\Delta t} \;\Rightarrow\; \frac{\text{m/s}}{\text{s}} = \text{m/s}^2` }],
  },
  {
    q: "Un avión necesita alcanzar 80 m/s para despegar. Parte del reposo con aceleración de 4 m/s². ¿Cuántos segundos necesita?",
    prob: String.raw`t = \dfrac{v_f - v_0}{a} = \dfrac{80 - 0}{4}`,
    opts: [String.raw`15\,\text{s}`, String.raw`18\,\text{s}`, String.raw`20\,\text{s}`, String.raw`25\,\text{s}`],
    ans: 2,
    exp: "Despejamos t: t = (vf − v₀)/a = (80 − 0)/4 = 20 s.",
    steps: [{ pre: "", math: String.raw`t = \frac{v_f - v_0}{a} = \frac{80}{4} = 20\,\text{s}` }],
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════════════════ */
export default function CinematicaGuia() {
  useStyles();
  const katexReady = useKatex();

  return (
    <div className="lr">

      {/* HERO */}
      <div className="hero">
        <div className="hero-tag">EXANI-I · Pensamiento Científico</div>
        <h1>Cinemática: Velocidad y Aceleración</h1>
        <div className="hero-math">
          <M c={String.raw`\bar{v} = \dfrac{\Delta x}{\Delta t} \qquad \bar{a} = \dfrac{\Delta v}{\Delta t}`} />
        </div>
        <p>Domina los conceptos de velocidad y aceleración, interpreta gráficas de movimiento y resuelve problemas del EXANI-I con estrategias de proporcionalidad.</p>
      </div>

      <div className="cw">

        {/* ── 01 VELOCIDAD ─────────────────────────────────────────────── */}
        <div className="section">
          <div className="sec-hd"><span className="sec-num">01</span><h2>Velocidad</h2></div>

          <div className="card">
            <h3>Rapidez vs. Velocidad</h3>
            <div className="def-grid">
              <div className="def-card">
                <div className="def-card-title">Rapidez (escalar)</div>
                <div className="def-card-body">
                  Mide <strong style={{ color: "#e0dcd4" }}>qué tan rápido</strong> se mueve un objeto, sin importar la dirección. Es siempre positiva.
                </div>
                <div style={{ marginTop: 10 }}><M c={String.raw`\text{rapidez} = \dfrac{\text{distancia total}}{\Delta t}`} /></div>
              </div>
              <div className="def-card">
                <div className="def-card-title">Velocidad (vectorial)</div>
                <div className="def-card-body">
                  Incluye <strong style={{ color: "#e0dcd4" }}>magnitud y dirección</strong>. Se basa en el desplazamiento (cambio neto de posición).
                </div>
                <div style={{ marginTop: 10 }}><M c={String.raw`\bar{v} = \dfrac{\Delta x}{\Delta t} = \dfrac{x_f - x_i}{t_f - t_i}`} /></div>
              </div>
            </div>

            <div className="tip-box" style={{ marginTop: 18 }}>
              <div className="tip-label">⚠ Trampa clásica del EXANI-I</div>
              <p>Si un objeto va y regresa al mismo punto, su <strong>desplazamiento = 0</strong> (velocidad media = 0), pero la distancia total ≠ 0 (rapidez media ≠ 0).</p>
            </div>
          </div>

          <div className="card">
            <h3>Fórmula y unidades</h3>
            <div className="formula-box">
              <MB c={String.raw`\bar{v} = \dfrac{\Delta x}{\Delta t} \qquad \text{Unidades SI: } \mathrm{m/s}`} />
            </div>
            <table>
              <thead><tr><th>Símbolo</th><th>Significado</th><th>Unidad SI</th></tr></thead>
              <tbody>
                <tr><td><M c={String.raw`\bar{v}`} /></td><td>Velocidad media</td><td>m/s</td></tr>
                <tr><td><M c={String.raw`\Delta x`} /></td><td>Desplazamiento <M c={String.raw`x_f - x_i`} /></td><td>m</td></tr>
                <tr><td><M c={String.raw`\Delta t`} /></td><td>Intervalo de tiempo <M c={String.raw`t_f - t_i`} /></td><td>s</td></tr>
              </tbody>
            </table>
            <div className="tip-box">
              <div className="tip-label">Conversión rápida</div>
              <p>
                <strong style={{ color: "#e0dcd4" }}>km/h → m/s:</strong> divide entre 3.6 &nbsp;·&nbsp;
                <strong style={{ color: "#e0dcd4" }}>m/s → km/h:</strong> multiplica por 3.6
              </p>
              <p style={{ marginTop: 6 }}>Ejemplo: <M c={String.raw`72\,\text{km/h} \div 3.6 = 20\,\text{m/s}`} /></p>
            </div>
          </div>

          <div className="card">
            <h3>Gráfica posición–tiempo (d–t)</h3>
            <p style={{ fontSize: 14.5, color: "#a09880", lineHeight: 1.75, fontWeight: 300, marginBottom: 14 }}>
              En movimiento uniforme (velocidad constante), la gráfica d–t es una <strong style={{ color: "#e0dcd4" }}>línea recta</strong>.
              La <strong style={{ color: "#f5c842" }}>pendiente</strong> de esa recta es igual a la velocidad.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "center" }}>
              <GraficaLineal
                xLabel="Tiempo (s)" yLabel="Posición (m)"
                xRange={[0, 4]} yRange={[0, 200]}
                xTicks={[0, 1, 2, 3, 4]} yTicks={[0, 50, 100, 150, 200]}
                lines={[[[0, 0], [4, 200]]]}
                points={[[2, 100, "(2, 100)"]]}
                note="Pendiente = v = 50 m/s"
              />
              <div>
                <div style={{ fontSize: 14, color: "#a09880", lineHeight: 1.75 }}>
                  <div style={{ marginBottom: 8 }}><span className="prop-tag prop-dir">recta</span> → velocidad constante (MUR)</div>
                  <div style={{ marginBottom: 8 }}><span className="prop-tag prop-inv">curva</span> → velocidad cambiante (MUA)</div>
                  <div><span className="prop-tag prop-exp">horizontal</span> → objeto en reposo</div>
                </div>
                <div style={{ marginTop: 12 }}>
                  <MB c={String.raw`v = \text{pendiente} = \dfrac{\Delta x}{\Delta t}`} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* ── 02 ACELERACIÓN ───────────────────────────────────────────── */}
        <div className="section">
          <div className="sec-hd"><span className="sec-num">02</span><h2>Aceleración</h2></div>

          <div className="card">
            <h3>Definición</h3>
            <p style={{ fontSize: 14.5, color: "#a09880", lineHeight: 1.75, fontWeight: 300, marginBottom: 14 }}>
              La <strong style={{ color: "#e0dcd4" }}>aceleración</strong> mide el <em>cambio de velocidad</em> por unidad de tiempo. Es una cantidad <strong style={{ color: "#f5c842" }}>vectorial</strong> (tiene magnitud y dirección).
            </p>
            <div className="formula-box">
              <MB c={String.raw`\bar{a} = \dfrac{\Delta v}{\Delta t} = \dfrac{v_f - v_i}{t_f - t_i} \qquad \text{Unidades SI: }\mathrm{m/s^2}`} />
            </div>
            <div className="tip-box">
              <div className="tip-label">Interpretación del signo</div>
              <p><strong style={{ color: "#7ee8a2" }}>a &gt; 0 →</strong> el objeto acelera (velocidad aumenta en la dirección positiva).</p>
              <p><strong style={{ color: "#f08080" }}>a &lt; 0 →</strong> el objeto desacelera o acelera en dirección contraria.</p>
            </div>
          </div>

          <div className="card">
            <h3>Ecuaciones del Movimiento Uniformemente Acelerado (MUA)</h3>
            <p style={{ fontSize: 14.5, color: "#a09880", lineHeight: 1.75, fontWeight: 300, marginBottom: 16 }}>
              Cuando la aceleración es <strong style={{ color: "#e0dcd4" }}>constante</strong>, se aplican estas tres ecuaciones. Identificar qué variable falta determina cuál usar.
            </p>
            {[
              { name: "Velocidad–tiempo", missing: "no usa Δx", eq: String.raw`v_f = v_i + a\,t` },
              { name: "Posición–tiempo", missing: "no usa vf", eq: String.raw`\Delta x = v_i\,t + \tfrac{1}{2}\,a\,t^2` },
              { name: "Velocidad–posición", missing: "no usa t", eq: String.raw`v_f^2 = v_i^2 + 2\,a\,\Delta x` },
            ].map((e, i) => (
              <div className="eq-row" key={i}>
                <div className="eq-num">{i + 1}</div>
                <div className="eq-body">
                  <div className="eq-name">{e.name} · <span style={{ color: "rgba(245,200,66,0.55)", fontSize: 12 }}>({e.missing})</span></div>
                  <MB c={e.eq} />
                </div>
              </div>
            ))}

            <table>
              <thead><tr><th>Símbolo</th><th>Significado</th><th>Unidad</th></tr></thead>
              <tbody>
                {[
                  [String.raw`v_i`, "Velocidad inicial", "m/s"],
                  [String.raw`v_f`, "Velocidad final", "m/s"],
                  [String.raw`a`, "Aceleración (constante)", "m/s²"],
                  [String.raw`t`, "Tiempo", "s"],
                  [String.raw`\Delta x`, "Desplazamiento", "m"],
                ].map(([sym, desc, unit]) => (
                  <tr key={sym}><td><M c={sym} /></td><td>{desc}</td><td>{unit}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card">
            <h3>Gráfica velocidad–tiempo (v–t)</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "center" }}>
              <GraficaLineal
                xLabel="Tiempo (s)" yLabel="Velocidad (m/s)"
                xRange={[0, 5]} yRange={[0, 25]}
                xTicks={[0, 1, 2, 3, 4, 5]} yTicks={[0, 5, 10, 15, 20, 25]}
                lines={[[[0, 5], [5, 25]]]}
                points={[[1, 9, ""], [5, 25, ""]]}
                note="Pendiente = a = 4 m/s²"
              />
              <div style={{ fontSize: 14, color: "#a09880", lineHeight: 1.8 }}>
                <div style={{ marginBottom: 8 }}><span className="prop-tag prop-dir">pendiente positiva</span> → aceleración</div>
                <div style={{ marginBottom: 8 }}><span className="prop-tag prop-inv">pendiente negativa</span> → desaceleración</div>
                <div style={{ marginBottom: 8 }}><span className="prop-tag prop-exp">horizontal</span> → velocidad constante</div>
                <div style={{ marginTop: 10, fontSize: 13, color: "#6a6560" }}>
                  El <strong style={{ color: "#a09880" }}>área</strong> bajo la curva v–t = desplazamiento total
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* ── 03 PROPORCIONALIDAD ──────────────────────────────────────── */}
        <div className="section">
          <div className="sec-hd"><span className="sec-num">03</span><h2>Proporcionalidad en Cinemática</h2></div>
          <div className="card">
            <h3>Relaciones clave para el examen</h3>
            <p style={{ fontSize: 14.5, color: "#a09880", lineHeight: 1.75, fontWeight: 300, marginBottom: 16 }}>
              Reconocer el tipo de proporcionalidad permite resolver problemas <em>sin</em> cálculos largos.
            </p>
            {[
              {
                tag: "prop-dir", label: "Directa",
                cond: "Velocidad constante → d y t son directamente proporcionales",
                eq: String.raw`v=\text{cte} \;\Rightarrow\; d \propto t \;\Rightarrow\; \frac{d_1}{t_1}=\frac{d_2}{t_2}`,
                ej: "Si duplicas el tiempo, la distancia se duplica.",
              },
              {
                tag: "prop-inv", label: "Inversa",
                cond: "Misma distancia → velocidad y tiempo son inversamente proporcionales",
                eq: String.raw`d=\text{cte} \;\Rightarrow\; v \propto \tfrac{1}{t} \;\Rightarrow\; v_1\,t_1 = v_2\,t_2`,
                ej: "Si la velocidad se triplica, el tiempo se divide entre 3.",
              },
              {
                tag: "prop-exp", label: "Cuadrática (MUA)",
                cond: "Con v₀ = 0 y a = cte → la distancia es proporcional a t²",
                eq: String.raw`v_0=0,\;a=\text{cte} \;\Rightarrow\; x = \tfrac{1}{2}at^2 \;\Rightarrow\; x \propto t^2`,
                ej: "Si el tiempo se duplica, la distancia se cuadruplica (factor 4).",
              },
            ].map((p, i) => (
              <div className="eq-row" key={i}>
                <div className="eq-num">{i + 1}</div>
                <div className="eq-body">
                  <div style={{ marginBottom: 6 }}>
                    <span className={`prop-tag ${p.tag}`}>{p.label}</span>{" "}
                    <span style={{ fontSize: 13, color: "#7a756e", marginLeft: 6 }}>{p.cond}</span>
                  </div>
                  <MB c={p.eq} />
                  <div style={{ fontSize: 13, color: "#6a6560", marginTop: 6, fontStyle: "italic" }}>→ {p.ej}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* ── 04 EJEMPLOS ──────────────────────────────────────────────── */}
        <div className="section">
          <div className="sec-hd"><span className="sec-num">04</span><h2>Ejemplos resueltos</h2></div>
          <p className="hint">Haz clic en cada tarjeta para ver el desarrollo paso a paso.</p>
          <div className="ex-grid">
            {ejemplos.map((ej, i) => <EjCard key={i} ej={ej} idx={i} />)}
          </div>
        </div>

        <div className="divider" />

        {/* ── 05 QUIZ VELOCIDAD ─────────────────────────────────────────── */}
        <QuizSection
          questions={quizVelocidad}
          title="Cuestionario — Velocidad"
          secNum="05"
        />

        <div className="divider" />

        {/* ── 06 QUIZ ACELERACIÓN ──────────────────────────────────────── */}
        <QuizSection
          questions={quizAceleracion}
          title="Cuestionario — Aceleración"
          secNum="06"
        />

        {/* ── RESUMEN RÁPIDO ────────────────────────────────────────────── */}
        <div className="divider" />
        <div className="card" style={{ borderColor: "rgba(245,200,66,0.2)" }}>
          <h3>📌 Resumen rápido para el examen</h3>
          <table style={{ marginTop: 10 }}>
            <thead><tr><th>Concepto</th><th>Fórmula clave</th><th>Truco EXANI-I</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>Velocidad media</strong></td>
                <td><M c={String.raw`\bar{v}=\Delta x/\Delta t`} /></td>
                <td>km/h ÷ 3.6 = m/s</td>
              </tr>
              <tr>
                <td><strong>Aceleración</strong></td>
                <td><M c={String.raw`a=\Delta v/\Delta t`} /></td>
                <td>Unidad = m/s²</td>
              </tr>
              <tr>
                <td><strong>MUA — vf</strong></td>
                <td><M c={String.raw`v_f = v_i + at`} /></td>
                <td>Cuando no hay Δx</td>
              </tr>
              <tr>
                <td><strong>MUA — Δx</strong></td>
                <td><M c={String.raw`\Delta x = v_i t + \tfrac{1}{2}at^2`} /></td>
                <td>Con v₀=0: x=½at²</td>
              </tr>
              <tr>
                <td><strong>MUA — sin t</strong></td>
                <td><M c={String.raw`v_f^2 = v_i^2 + 2a\Delta x`} /></td>
                <td>Cuando no hay t</td>
              </tr>
              <tr>
                <td><strong>Gráfica d–t</strong></td>
                <td>pendiente = v</td>
                <td>Recta → velocidad cte.</td>
              </tr>
              <tr>
                <td><strong>Gráfica v–t</strong></td>
                <td>pendiente = a</td>
                <td>Área = desplazamiento</td>
              </tr>
              <tr>
                <td><strong>Prop. cuadrática</strong></td>
                <td><M c={String.raw`x \propto t^2`} /></td>
                <td>t×k → x×k²</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
